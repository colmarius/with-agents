import { readFile } from 'node:fs/promises';

const youtubeVideoIdPattern = /^[A-Za-z0-9_-]{11}$/;
const recommendations = new Set(['keep', 'remove']);

export const validateResourceIntakeDecisions = (value, playlist) => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(
      `Resource intake decisions for ${playlist.slug} must be an object.`,
    );
  }
  const keys = Object.keys(value).sort();
  if (
    keys.length !== 2 ||
    keys[0] !== 'playlistId' ||
    keys[1] !== 'processed'
  ) {
    throw new Error(
      `Resource intake decisions for ${playlist.slug} must contain exactly playlistId and processed.`,
    );
  }
  if (value.playlistId !== playlist.id) {
    throw new Error(
      `Resource intake decisions for ${playlist.slug} must match playlist ${playlist.id}.`,
    );
  }
  if (!Array.isArray(value.processed)) {
    throw new Error(
      `Resource intake decisions for ${playlist.slug} processed must be an array.`,
    );
  }

  const seenVideoIds = new Set();
  for (const [index, entry] of value.processed.entries()) {
    if (entry === null || typeof entry !== 'object' || Array.isArray(entry)) {
      throw new Error(
        `Resource intake decisions for ${playlist.slug} processed[${index}] must be an object.`,
      );
    }
    const entryKeys = Object.keys(entry).sort();
    if (
      entryKeys.length !== 2 ||
      entryKeys[0] !== 'recommendation' ||
      entryKeys[1] !== 'videoId'
    ) {
      throw new Error(
        `Resource intake decisions for ${playlist.slug} processed[${index}] must contain exactly videoId and recommendation.`,
      );
    }
    if (
      typeof entry.videoId !== 'string' ||
      !youtubeVideoIdPattern.test(entry.videoId)
    ) {
      throw new Error(
        `Resource intake decisions for ${playlist.slug} processed[${index}].videoId must be a YouTube video ID.`,
      );
    }
    if (seenVideoIds.has(entry.videoId)) {
      throw new Error(
        `Resource intake decisions for ${playlist.slug} must not repeat video ${entry.videoId}.`,
      );
    }
    seenVideoIds.add(entry.videoId);
    if (!recommendations.has(entry.recommendation)) {
      throw new Error(
        `Resource intake decisions for ${playlist.slug} processed[${index}].recommendation must be keep or remove.`,
      );
    }
  }

  return value;
};

export const readResourceIntakeDecisions = async ({ playlist, filePath }) => {
  let contents;
  try {
    contents = await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error(
        `Resource intake decisions for ${playlist.slug} are missing: ${filePath}.`,
      );
    }
    throw new Error(
      `Could not read resource intake decisions for ${playlist.slug}: ${error.message}`,
    );
  }

  let value;
  try {
    value = JSON.parse(contents);
  } catch (error) {
    throw new Error(
      `Resource intake decisions for ${playlist.slug} contain invalid JSON: ${error.message}`,
    );
  }
  return validateResourceIntakeDecisions(value, playlist);
};

export const buildResourceIntakeStatus = ({ manifest, decisions }) => {
  const availableVideoIds = [
    ...new Set(
      manifest.entries
        .filter((entry) => entry.available)
        .map((entry) => entry.videoId),
    ),
  ];
  const currentVideoIds = new Set(availableVideoIds);
  const processedByVideoId = new Map(
    decisions.processed.map((entry) => [entry.videoId, entry]),
  );
  const currentProcessed = availableVideoIds
    .map((videoId) => processedByVideoId.get(videoId))
    .filter(Boolean);
  const historical = decisions.processed.filter(
    (entry) => !currentVideoIds.has(entry.videoId),
  );
  const removeVideoIds = currentProcessed
    .filter((entry) => entry.recommendation === 'remove')
    .map((entry) => entry.videoId);

  return {
    processed: currentProcessed.length,
    pending: availableVideoIds.length - currentProcessed.length,
    keep: currentProcessed.filter((entry) => entry.recommendation === 'keep')
      .length,
    remove: currentProcessed.filter(
      (entry) => entry.recommendation === 'remove',
    ).length,
    historical: historical.length,
    historicalKeep: historical.filter(
      (entry) => entry.recommendation === 'keep',
    ).length,
    historicalRemove: historical.filter(
      (entry) => entry.recommendation === 'remove',
    ).length,
    pendingVideoIds: availableVideoIds.filter(
      (videoId) => !processedByVideoId.has(videoId),
    ),
    removeVideoIds,
  };
};
