const curationStatuses = new Set(['draft', 'reviewed']);
const youtubeVideoIdPattern = /^[A-Za-z0-9_-]{11}$/;

const assertObject = (value, name) => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${name} must be an object.`);
  }
};

export const validatePlaylistCuration = (playlist, name) => {
  if (!Object.hasOwn(playlist, 'curation')) {
    return;
  }

  const curation = playlist.curation;
  assertObject(curation, `${name}.curation`);
  const keys = Object.keys(curation).sort();
  if (keys.length !== 2 || keys[0] !== 'status' || keys[1] !== 'videoIds') {
    throw new Error(
      `${name}.curation must contain exactly status and videoIds.`,
    );
  }
  if (!curationStatuses.has(curation.status)) {
    throw new Error(`${name}.curation.status must be draft or reviewed.`);
  }
  if (!Array.isArray(curation.videoIds)) {
    throw new Error(`${name}.curation.videoIds must be an array.`);
  }
  for (const [index, videoId] of curation.videoIds.entries()) {
    if (typeof videoId !== 'string' || !youtubeVideoIdPattern.test(videoId)) {
      throw new Error(
        `${name}.curation.videoIds[${index}] must be a YouTube video ID.`,
      );
    }
  }
  if (new Set(curation.videoIds).size !== curation.videoIds.length) {
    throw new Error(`${name}.curation.videoIds values must be unique.`);
  }
  if (curation.status === 'reviewed' && curation.videoIds.length === 0) {
    throw new Error(
      `${name}.curation.videoIds must not be empty when curation is reviewed.`,
    );
  }
};

export const resolvePlaylistEditorialScope = (playlist, manifest) => {
  const entriesByVideoId = new Map();
  for (const entry of manifest.entries) {
    if (!entriesByVideoId.has(entry.videoId)) {
      entriesByVideoId.set(entry.videoId, entry);
    }
  }

  const manifestVideoIds = [...entriesByVideoId.keys()];
  if (playlist.resourceIntake === true) {
    const candidateVideoIds = manifest.entries
      .filter((entry) => entry.available)
      .map((entry) => entry.videoId);
    return {
      mode: 'resource-intake',
      status: 'reviewed',
      candidateVideoIds: [...new Set(candidateVideoIds)],
      selectedVideoIds: [],
      activeEntries: [],
      unselectedVideoIds: manifestVideoIds,
      errors: [],
    };
  }
  if (!playlist.curation) {
    const activeEntries = manifest.entries.filter((entry) => entry.available);
    const activeVideoIds = [
      ...new Set(activeEntries.map((entry) => entry.videoId)),
    ];
    return {
      mode: 'full',
      status: 'reviewed',
      candidateVideoIds: activeVideoIds,
      selectedVideoIds: activeVideoIds,
      activeEntries,
      unselectedVideoIds: [],
      errors: [],
    };
  }

  const candidateVideoIds = [...playlist.curation.videoIds];
  const selected = new Set(candidateVideoIds);
  const errors = [];
  const selectedEntries = [];
  for (const videoId of candidateVideoIds) {
    const entry = entriesByVideoId.get(videoId);
    if (!entry) {
      errors.push(
        `Playlist ${playlist.slug} curation references missing video ${videoId}.`,
      );
      continue;
    }
    if (!entry.available) {
      errors.push(
        `Playlist ${playlist.slug} curation references unavailable video ${videoId}.`,
      );
      continue;
    }
    selectedEntries.push(entry);
  }

  return {
    mode: 'curated',
    status: playlist.curation.status,
    candidateVideoIds,
    selectedVideoIds:
      playlist.curation.status === 'reviewed' ? candidateVideoIds : [],
    activeEntries:
      playlist.curation.status === 'reviewed' ? selectedEntries : [],
    unselectedVideoIds: manifestVideoIds.filter(
      (videoId) => !selected.has(videoId),
    ),
    errors,
  };
};
