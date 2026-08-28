import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { listPublicResourceManifestPaths } from './public-resource-manifests.mjs';
import {
  canonicalYoutubeUrl,
  rootDir as defaultRepoRoot,
} from './youtube-transcript-core.mjs';

const readOptional = async (filePath) => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
};

const listMarkdown = async (directory) => {
  const files = [];
  const visit = async (current) => {
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch (error) {
      if (error.code === 'ENOENT') {
        return;
      }
      throw error;
    }
    entries.sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const entryPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        files.push(entryPath);
      }
    }
  };
  await visit(directory);
  return files;
};

const parseScalar = (rawValue) => {
  const value = rawValue.trim();
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  if (/^-?\d+$/.test(value)) {
    return Number(value);
  }
  return value;
};

const readFrontmatter = (contents) => {
  const match = contents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!match) {
    return {};
  }
  const fields = {};
  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*?)\s*$/);
    if (field) {
      fields[field[1]] = parseScalar(field[2]);
    }
  }
  return fields;
};

const relativePosix = (base, filePath) =>
  path.relative(base, filePath).split(path.sep).join('/');

const timestampSeconds = (hours, minutes, seconds) =>
  Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

const sourceRangeForTranscript = (fields, transcript, transcriptRelative) => {
  const hasStart = fields.sourceStartSeconds !== undefined;
  const hasEnd = fields.sourceEndSeconds !== undefined;
  if (hasStart !== hasEnd) {
    throw new Error(
      `Standalone transcript ${transcriptRelative} must provide sourceStartSeconds and sourceEndSeconds together.`,
    );
  }
  if (!hasStart) {
    return undefined;
  }

  const start = fields.sourceStartSeconds;
  const end = fields.sourceEndSeconds;
  if (
    !Number.isFinite(start) ||
    !Number.isFinite(end) ||
    start < 0 ||
    start >= end ||
    (Number.isFinite(fields.durationSeconds) && end > fields.durationSeconds)
  ) {
    throw new Error(
      `Standalone transcript ${transcriptRelative} has an invalid source range.`,
    );
  }

  const anchors = [
    ...transcript.matchAll(/^\[(\d{2}):(\d{2}):(\d{2})\]/gm),
  ].map((match) => timestampSeconds(match[1], match[2], match[3]));
  if (anchors.length === 0) {
    throw new Error(
      `Standalone transcript ${transcriptRelative} excerpt has no transcript anchors.`,
    );
  }
  if (anchors.some((anchor) => anchor >= end)) {
    throw new Error(
      `Standalone transcript ${transcriptRelative} has a transcript anchor at or after sourceEndSeconds.`,
    );
  }

  return { sourceStartSeconds: start, sourceEndSeconds: end };
};

export const hasFullStandaloneEvidence = (byVideoId, videoId) => {
  const evidence = byVideoId.get(videoId);
  return evidence !== undefined && evidence.coverage !== 'excerpt';
};

export const loadStandaloneYoutubeEvidence = async ({
  repoRoot = defaultRepoRoot,
  videoIds,
} = {}) => {
  const transcriptsRoot = path.join(repoRoot, 'src/content/transcripts');
  const summariesRoot = path.join(repoRoot, 'src/content/summaries');
  const byVideoId = new Map();
  const errors = [];
  const incomplete = [];

  const resourcesById = new Map();
  const duplicateResourceIds = new Set();
  for (const resourcesPath of await listPublicResourceManifestPaths(repoRoot)) {
    const relativePath = relativePosix(repoRoot, resourcesPath);
    const resourcesSource = await readFile(resourcesPath, 'utf8');
    let resources;
    try {
      resources = JSON.parse(resourcesSource);
      if (!Array.isArray(resources)) {
        errors.push(
          `Standalone resource manifest ${relativePath} must contain an array.`,
        );
        continue;
      }
    } catch (error) {
      errors.push(
        `Could not parse standalone resource manifest ${relativePath}: ${error.message}`,
      );
      continue;
    }

    for (const resource of resources) {
      if (!Number.isInteger(resource?.id)) {
        continue;
      }
      if (
        resourcesById.has(resource.id) ||
        duplicateResourceIds.has(resource.id)
      ) {
        if (!duplicateResourceIds.has(resource.id)) {
          errors.push(
            `Standalone resource manifests duplicate resource ID ${resource.id}.`,
          );
        }
        duplicateResourceIds.add(resource.id);
        resourcesById.delete(resource.id);
        continue;
      }
      resourcesById.set(resource.id, resource);
    }
  }

  for (const transcriptPath of await listMarkdown(transcriptsRoot)) {
    const transcript = await readFile(transcriptPath, 'utf8');
    const fields = readFrontmatter(transcript);
    if (
      typeof fields.videoId !== 'string' ||
      typeof fields.summarySlug !== 'string' ||
      typeof fields.sourceUrl !== 'string'
    ) {
      continue;
    }

    const videoId = fields.videoId;
    if (videoIds && !videoIds.has(videoId)) {
      continue;
    }
    const transcriptRelative = relativePosix(transcriptsRoot, transcriptPath);
    const expectedTranscriptRelative = `${fields.summarySlug}.md`;
    if (transcriptRelative !== expectedTranscriptRelative) {
      errors.push(
        `Standalone transcript ${transcriptRelative} summarySlug must match its path.`,
      );
      continue;
    }
    if (fields.sourceUrl !== canonicalYoutubeUrl(videoId)) {
      errors.push(
        `Standalone transcript ${transcriptRelative} sourceUrl must match video ${videoId}.`,
      );
      continue;
    }
    let sourceRange;
    try {
      sourceRange = sourceRangeForTranscript(
        fields,
        transcript,
        transcriptRelative,
      );
    } catch (error) {
      errors.push(error.message);
      continue;
    }

    const summaryPath = path.join(summariesRoot, `${fields.summarySlug}.md`);
    const summary = await readOptional(summaryPath);
    if (summary === undefined) {
      incomplete.push(
        `Standalone transcript ${transcriptRelative} has no matching public summary.`,
      );
      continue;
    }
    const summaryFields = readFrontmatter(summary);
    const resource = resourcesById.get(summaryFields.resourceId);
    if (!resource) {
      incomplete.push(
        `Standalone summary ${fields.summarySlug}.md has no matching resource.`,
      );
      continue;
    }
    const canonicalVideoResource =
      resource.url === canonicalYoutubeUrl(videoId);
    const excerptVideoResource =
      sourceRange !== undefined &&
      resource.url ===
        `${canonicalYoutubeUrl(videoId)}&t=${sourceRange.sourceStartSeconds}s`;
    const curatedCollectionResource =
      resource.type === 'playlist' &&
      summaryFields.videoId === videoId &&
      typeof summaryFields.collection === 'string' &&
      Number.isInteger(summaryFields.order) &&
      summaryFields.order > 0;
    const episodicSeriesResource =
      resource.type === 'playlist' &&
      typeof summaryFields.series === 'string' &&
      summaryFields.series === fields.series &&
      Number.isInteger(summaryFields.episode) &&
      summaryFields.episode > 0 &&
      summaryFields.episode === fields.episode;
    if (
      !canonicalVideoResource &&
      !excerptVideoResource &&
      !curatedCollectionResource &&
      !episodicSeriesResource
    ) {
      errors.push(
        `Standalone summary ${fields.summarySlug}.md must resolve to video ${videoId} through a canonical video resource, curated collection item, or series episode.`,
      );
      continue;
    }
    if (byVideoId.has(videoId)) {
      byVideoId.delete(videoId);
      errors.push(`Multiple standalone transcripts claim video ${videoId}.`);
      continue;
    }

    byVideoId.set(videoId, {
      videoId,
      transcriptPath,
      summaryPath,
      summarySlug: fields.summarySlug,
      resourceId: summaryFields.resourceId,
      status: 'reviewed',
      coverage: sourceRange ? 'excerpt' : 'full',
      sourceRange,
    });
  }

  return { byVideoId, errors, incomplete };
};
