import { access, readFile } from 'node:fs/promises';
import {
  libraryPath,
  selectCatalogPlaylists,
  writeJsonAtomic,
} from './youtube-library-core.mjs';
import {
  canonicalYoutubeUrl,
  cleanText,
  fetchVideo,
  renderTranscriptMarkdown,
  repoRelative,
  writeFileExclusive,
} from './youtube-transcript-core.mjs';

export const captureDelayMs = 1500;

const persistedUnavailableErrorNames = new Set([
  // Package caveat: exhausted watch-page HTTP failures, including some 5xx
  // responses, can be reported as VideoUnavailable. --retry is the recovery.
  'YoutubeTranscriptVideoUnavailableError',
  'YoutubeTranscriptDisabledError',
  'YoutubeTranscriptNotAvailableError',
  'YoutubeTranscriptNotAvailableLanguageError',
  'LanguageUnavailable',
]);
const fatalTranscriptErrorNames = new Set([
  'YoutubeTranscriptInvalidLangError',
  'YoutubeTranscriptInvalidVideoIdError',
]);
const tooManyRequestsErrorName = 'YoutubeTranscriptTooManyRequestError';

const defaultManifestPathForPlaylist = (playlist) =>
  libraryPath(`playlists/${playlist.slug}/manifest.json`);
const defaultVideoPathForFile = (videoId, fileName) =>
  libraryPath(`videos/${videoId}/${fileName}`);
const defaultOverviewPathForPlaylist = (playlist) =>
  libraryPath(`playlists/${playlist.slug}/overview.md`);
const defaultAuthorPathForAuthor = (author) =>
  libraryPath(`authors/${author.slug}.md`);
const defaultSleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const readOptionalText = async (filePath) => {
  try {
    return await readFile(filePath, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      return undefined;
    }
    throw new Error(`Could not read ${filePath}: ${error.message}`);
  }
};

const pathExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw new Error(`Could not access ${filePath}: ${error.message}`);
  }
};

const parseJson = (contents, description) => {
  try {
    return JSON.parse(contents);
  } catch (error) {
    throw new Error(`${description} contains invalid JSON: ${error.message}`);
  }
};

const validateManifest = (manifest, playlist) => {
  if (
    manifest === null ||
    typeof manifest !== 'object' ||
    manifest.playlistId !== playlist.id ||
    !Array.isArray(manifest.entries)
  ) {
    throw new Error(`Manifest for playlist ${playlist.slug} is invalid.`);
  }

  const entries = manifest.entries.map((entry, index) => {
    if (
      entry === null ||
      typeof entry !== 'object' ||
      typeof entry.videoId !== 'string' ||
      entry.videoId.length === 0 ||
      !Number.isInteger(entry.position) ||
      entry.position < 0 ||
      typeof entry.available !== 'boolean'
    ) {
      throw new Error(
        `Manifest entry ${index + 1} for playlist ${playlist.slug} is invalid.`,
      );
    }
    return { entry, index };
  });

  return {
    ...manifest,
    entries: entries
      .sort(
        (left, right) =>
          left.entry.position - right.entry.position ||
          left.index - right.index,
      )
      .map(({ entry }) => entry),
  };
};

const readPlaylistManifest = async ({
  playlist,
  manifestPathForPlaylist,
  required,
}) => {
  const manifestPath = manifestPathForPlaylist(playlist);
  const contents = await readOptionalText(manifestPath);
  if (contents === undefined) {
    if (!required) {
      return undefined;
    }
    throw new Error(
      `Playlist ${playlist.slug} is not synced: ${repoRelative(manifestPath)} is missing. Run \`npm run youtube:library -- sync --playlist ${playlist.slug}\` first.`,
    );
  }

  return validateManifest(
    parseJson(contents, `Manifest for playlist ${playlist.slug}`),
    playlist,
  );
};

const readMetadata = async (videoId, videoPathForFile) => {
  const metadataPath = videoPathForFile(videoId, 'metadata.json');
  const contents = await readOptionalText(metadataPath);
  if (contents === undefined) {
    return undefined;
  }
  const metadata = parseJson(contents, `Metadata for video ${videoId}`);
  if (
    metadata === null ||
    typeof metadata !== 'object' ||
    Array.isArray(metadata)
  ) {
    throw new Error(`Metadata for video ${videoId} is invalid.`);
  }
  if (
    metadata.unavailable !== undefined &&
    (metadata.unavailable === null ||
      typeof metadata.unavailable !== 'object' ||
      Array.isArray(metadata.unavailable))
  ) {
    throw new Error(
      `Metadata for video ${videoId} has an invalid unavailable record.`,
    );
  }
  return metadata;
};

const readTranscriptState = async (videoId, videoPathForFile) => {
  const captured = await pathExists(videoPathForFile(videoId, 'transcript.md'));
  const metadata = await readMetadata(videoId, videoPathForFile);
  const unavailable = metadata?.unavailable !== undefined;
  return {
    captured,
    unavailable,
    pending: !captured && !unavailable,
  };
};

const captureCandidates = async ({
  catalog,
  playlistSlugs,
  retry,
  force,
  limit,
  manifestPathForPlaylist,
  videoPathForFile,
}) => {
  const playlists = selectCatalogPlaylists(catalog, playlistSlugs);
  const manifests = [];

  for (const playlist of playlists) {
    const manifest = await readPlaylistManifest({
      playlist,
      manifestPathForPlaylist,
      required: true,
    });
    manifests.push({ playlist, manifest });
  }

  const byVideoId = new Map();
  const queue = [];
  for (const { playlist, manifest } of manifests) {
    for (const entry of manifest.entries) {
      if (!entry.available) {
        continue;
      }
      let candidate = byVideoId.get(entry.videoId);
      if (!candidate) {
        candidate = {
          videoId: entry.videoId,
          manifestTitle: entry.title,
          memberships: [],
        };
        byVideoId.set(entry.videoId, candidate);
        queue.push(candidate);
      }
      if (
        !candidate.memberships.some(
          (membership) => membership.playlist.slug === playlist.slug,
        )
      ) {
        candidate.memberships.push({
          playlist,
          language: playlist.transcriptLanguage,
        });
      }
    }
  }

  for (const candidate of queue) {
    const languages = new Set(
      candidate.memberships.map((membership) => membership.language),
    );
    if (languages.size > 1) {
      const memberships = candidate.memberships
        .map(({ playlist, language }) => `${playlist.slug}=${language}`)
        .join(', ');
      throw new Error(
        `Conflicting transcript languages for video ${candidate.videoId}: ${memberships}.`,
      );
    }
    candidate.requestedLanguage = candidate.memberships[0].language;
    candidate.state = await readTranscriptState(
      candidate.videoId,
      videoPathForFile,
    );
  }

  const filtered = queue.filter((candidate) => {
    if (force) {
      return true;
    }
    if (retry) {
      return candidate.state.unavailable && !candidate.state.captured;
    }
    return candidate.state.pending;
  });

  return limit === undefined ? filtered : filtered.slice(0, limit);
};

const isoTimestamp = (now) => {
  const value = now();
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.valueOf())) {
    throw new Error('The capture clock returned an invalid date.');
  }
  return date.toISOString();
};

export const classifyTranscriptFailure = (errorName) => {
  if (fatalTranscriptErrorNames.has(errorName)) {
    return { outcome: 'fatal', stop: true };
  }
  if (errorName === tooManyRequestsErrorName) {
    return { outcome: 'transient', stop: true };
  }
  if (persistedUnavailableErrorNames.has(errorName)) {
    return { outcome: 'unavailable', stop: false };
  }
  return { outcome: 'transient', stop: false };
};

const failureFromException = (error) => ({
  transcriptAvailable: false,
  transcriptErrorName: error?.name,
  transcriptUnavailable: `${error?.name ?? 'Error'}: ${error?.message ?? String(error)}`,
  availableLanguages: [],
  segments: [],
});

const captureOne = async ({
  candidate,
  force,
  fetchVideoImpl,
  now,
  videoPathForFile,
}) => {
  let fetched;
  try {
    fetched = await fetchVideoImpl(canonicalYoutubeUrl(candidate.videoId), {
      lang: candidate.requestedLanguage,
      strictLanguage: true,
    });
  } catch (error) {
    fetched = failureFromException(error);
  }

  const timestamp = isoTimestamp(now);
  const segments = Array.isArray(fetched?.segments) ? fetched.segments : [];
  if (fetched?.transcriptAvailable && segments.length > 0) {
    const metadata = fetched.metadata ?? {};
    if (metadata.videoId && metadata.videoId !== candidate.videoId) {
      return {
        videoId: candidate.videoId,
        outcome: 'fatal',
        detail: `Fetched metadata returned video ID ${metadata.videoId}.`,
        stop: true,
      };
    }
    if (
      typeof fetched.language !== 'string' ||
      fetched.language.length === 0 ||
      typeof fetched.kind !== 'string' ||
      fetched.kind.length === 0
    ) {
      return {
        videoId: candidate.videoId,
        outcome: 'fatal',
        detail: 'Fetched transcript is missing its language or caption kind.',
        stop: true,
      };
    }

    const manifestTitle =
      typeof candidate.manifestTitle === 'string'
        ? candidate.manifestTitle
        : '';
    const title =
      manifestTitle.trim().length > 0
        ? manifestTitle
        : cleanText(metadata.title) || `YouTube video ${candidate.videoId}`;
    const transcript = renderTranscriptMarkdown({
      title,
      sourceUrl:
        metadata.canonicalUrl ?? canonicalYoutubeUrl(candidate.videoId),
      videoId: candidate.videoId,
      capturedAt: timestamp,
      channel: cleanText(metadata.channel) || undefined,
      language: fetched.language,
      kind: fetched.kind,
      durationSeconds: metadata.durationSeconds,
      segments,
    });
    const transcriptPath = videoPathForFile(candidate.videoId, 'transcript.md');
    await writeFileExclusive(transcriptPath, transcript, { force });
    await writeJsonAtomic(
      videoPathForFile(candidate.videoId, 'metadata.json'),
      {
        videoId: candidate.videoId,
        capturedAt: timestamp,
        requestedLanguage: candidate.requestedLanguage,
        language: fetched.language,
        kind: fetched.kind,
      },
    );
    return {
      videoId: candidate.videoId,
      outcome: 'captured',
      stop: false,
    };
  }

  const errorName = fetched?.transcriptErrorName;
  const classification = classifyTranscriptFailure(errorName);
  const detail =
    fetched?.transcriptUnavailable ??
    'Transcript fetch returned no caption text.';
  if (classification.outcome === 'unavailable') {
    await writeJsonAtomic(
      videoPathForFile(candidate.videoId, 'metadata.json'),
      {
        videoId: candidate.videoId,
        attemptedAt: timestamp,
        requestedLanguage: candidate.requestedLanguage,
        availableLanguages: Array.isArray(fetched?.availableLanguages)
          ? fetched.availableLanguages
          : [],
        unavailable: {
          errorName,
          detail,
        },
      },
    );
  }

  return {
    videoId: candidate.videoId,
    outcome: classification.outcome,
    errorName,
    detail,
    stop: classification.stop,
  };
};

export const captureCatalogVideos = async ({
  catalog,
  playlistSlugs = [],
  limit,
  retry = false,
  force = false,
  fetchVideoImpl = fetchVideo,
  sleep = defaultSleep,
  now = () => new Date(),
  manifestPathForPlaylist = defaultManifestPathForPlaylist,
  videoPathForFile = defaultVideoPathForFile,
  onWarning = () => {},
  onResult = () => {},
}) => {
  if (force && retry) {
    throw new Error('Capture options --force and --retry cannot be combined.');
  }
  if (force && playlistSlugs.length === 0 && limit === undefined) {
    throw new Error(
      'Capture --force requires at least one --playlist or --limit scope.',
    );
  }

  const queue = await captureCandidates({
    catalog,
    playlistSlugs,
    retry,
    force,
    limit,
    manifestPathForPlaylist,
    videoPathForFile,
  });

  if (force) {
    const overwriteCount = queue.filter(
      (candidate) => candidate.state.captured,
    ).length;
    onWarning(
      `WARNING: --force will overwrite ${overwriteCount} existing transcript${overwriteCount === 1 ? '' : 's'}.`,
    );
  }

  const results = [];
  let remaining = 0;
  for (let index = 0; index < queue.length; index += 1) {
    const result = await captureOne({
      candidate: queue[index],
      force,
      fetchVideoImpl,
      now,
      videoPathForFile,
    });
    results.push(result);
    onResult(result);

    if (result.stop) {
      remaining = queue.length - index - 1;
      break;
    }
    if (index < queue.length - 1) {
      await sleep(captureDelayMs);
    }
  }

  const exitCode = results.some((result) => result.outcome === 'fatal')
    ? 1
    : results.some(
          (result) =>
            result.outcome === 'unavailable' || result.outcome === 'transient',
        )
      ? 2
      : 0;
  return { exitCode, queued: queue.length, results, remaining };
};

const parseScalar = (value) => {
  const trimmed = value.trim();
  if (!trimmed || trimmed.startsWith('[') || trimmed.startsWith('{')) {
    return undefined;
  }
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
};

const parseInlineList = (value) => {
  const trimmed = value.trim();
  if (!trimmed.startsWith('[') || !trimmed.endsWith(']')) {
    return [];
  }
  const body = trimmed.slice(1, -1).trim();
  if (!body) {
    return [];
  }
  const values = body.split(',').map(parseScalar);
  return values.every((value) => value !== undefined) ? values : [];
};

export const readStatusFrontmatter = (contents) => {
  if (typeof contents !== 'string') {
    return { status: undefined, coveredVideoIds: [] };
  }
  const lines = contents.replace(/\r\n/g, '\n').split('\n');
  if (lines[0] !== '---') {
    return { status: undefined, coveredVideoIds: [] };
  }
  const closingIndex = lines.indexOf('---', 1);
  if (closingIndex === -1) {
    return { status: undefined, coveredVideoIds: [] };
  }

  let status;
  let coveredVideoIds = [];
  for (let index = 1; index < closingIndex; index += 1) {
    const line = lines[index];
    const statusMatch = line.match(/^status:\s*(.*)$/);
    if (statusMatch) {
      status = parseScalar(statusMatch[1]);
      continue;
    }

    const coveredMatch = line.match(/^coveredVideoIds:\s*(.*)$/);
    if (!coveredMatch) {
      continue;
    }
    if (coveredMatch[1].trim()) {
      coveredVideoIds = parseInlineList(coveredMatch[1]);
      continue;
    }

    const blockValues = [];
    while (index + 1 < closingIndex) {
      const blockMatch = lines[index + 1].match(/^\s+-\s+(.+)$/);
      if (!blockMatch) {
        break;
      }
      const value = parseScalar(blockMatch[1]);
      if (value === undefined) {
        blockValues.length = 0;
        break;
      }
      blockValues.push(value);
      index += 1;
    }
    coveredVideoIds = blockValues;
  }

  return { status, coveredVideoIds };
};

const synthesisState = async (filePath, summarizedVideoIds) => {
  const contents = await readOptionalText(filePath);
  if (contents === undefined) {
    return {
      state: 'missing',
      missingVideoIds: [...summarizedVideoIds],
    };
  }
  const covered = new Set(readStatusFrontmatter(contents).coveredVideoIds);
  const missingVideoIds = summarizedVideoIds.filter(
    (videoId) => !covered.has(videoId),
  );
  return {
    state: missingVideoIds.length > 0 ? 'stale' : 'current',
    missingVideoIds,
  };
};

export const buildLibraryStatus = async ({
  catalog,
  manifestPathForPlaylist = defaultManifestPathForPlaylist,
  videoPathForFile = defaultVideoPathForFile,
  overviewPathForPlaylist = defaultOverviewPathForPlaylist,
  authorPathForAuthor = defaultAuthorPathForAuthor,
}) => {
  const videoCache = new Map();
  const getVideo = async (videoId) => {
    if (!videoCache.has(videoId)) {
      videoCache.set(
        videoId,
        (async () => {
          const transcript = await pathExists(
            videoPathForFile(videoId, 'transcript.md'),
          );
          const metadata = await readMetadata(videoId, videoPathForFile);
          const summaryContents = await readOptionalText(
            videoPathForFile(videoId, 'summary.md'),
          );
          const unavailable = metadata?.unavailable !== undefined;
          return {
            transcript,
            unavailable,
            state: transcript
              ? 'captured'
              : unavailable
                ? 'unavailable'
                : 'pending',
            summary: summaryContents !== undefined,
            summaryStatus:
              summaryContents === undefined
                ? undefined
                : readStatusFrontmatter(summaryContents).status,
          };
        })(),
      );
    }
    return videoCache.get(videoId);
  };

  const playlistStatuses = [];
  const manifestsByPlaylistId = new Map();
  for (const playlist of catalog.playlists) {
    const manifest = await readPlaylistManifest({
      playlist,
      manifestPathForPlaylist,
      required: false,
    });
    if (!manifest) {
      playlistStatuses.push({ playlist, synced: false });
      continue;
    }
    manifestsByPlaylistId.set(playlist.id, manifest);
    const availableEntries = manifest.entries.filter(
      (entry) => entry.available,
    );
    const manifestUnavailable =
      manifest.entries.length - availableEntries.length;
    const states = { captured: 0, pending: 0, unavailable: 0 };
    const unavailableVideoIds = [];
    const summaries = { missing: 0, draft: 0, reviewed: 0 };
    const summarizedVideoIds = [];

    for (const entry of availableEntries) {
      const video = await getVideo(entry.videoId);
      states[video.state] += 1;
      if (video.state === 'unavailable') {
        unavailableVideoIds.push(entry.videoId);
      }
      if (video.summary && !summarizedVideoIds.includes(entry.videoId)) {
        summarizedVideoIds.push(entry.videoId);
      }
      if (video.state === 'captured') {
        if (!video.summary) {
          summaries.missing += 1;
        } else if (video.summaryStatus === 'reviewed') {
          summaries.reviewed += 1;
        } else {
          summaries.draft += 1;
        }
      }
    }

    playlistStatuses.push({
      playlist,
      synced: true,
      totals: {
        entries: manifest.entries.length,
        available: availableEntries.length,
        manifestUnavailable,
      },
      states,
      unavailableVideoIds: [...new Set(unavailableVideoIds)],
      summaries,
      synthesis: await synthesisState(
        overviewPathForPlaylist(playlist),
        summarizedVideoIds,
      ),
    });
  }

  const authorsById = new Map(
    catalog.authors.map((author) => [author.id, author]),
  );
  const playlistsById = new Map(
    catalog.playlists.map((playlist) => [playlist.id, playlist]),
  );
  const authorStatuses = [];
  for (const relationship of catalog.relationships) {
    const author = authorsById.get(relationship.authorId);
    const playlists = relationship.playlistIds.map((playlistId) =>
      playlistsById.get(playlistId),
    );
    const videoIds = [];
    const seenVideoIds = new Set();
    for (const playlist of playlists) {
      const manifest = manifestsByPlaylistId.get(playlist.id);
      if (!manifest) {
        continue;
      }
      for (const entry of manifest.entries) {
        if (entry.available && !seenVideoIds.has(entry.videoId)) {
          seenVideoIds.add(entry.videoId);
          videoIds.push(entry.videoId);
        }
      }
    }

    const states = { captured: 0, pending: 0, unavailable: 0 };
    const summarizedVideoIds = [];
    for (const videoId of videoIds) {
      const video = await getVideo(videoId);
      states[video.state] += 1;
      if (video.summary) {
        summarizedVideoIds.push(videoId);
      }
    }
    authorStatuses.push({
      author,
      playlists,
      videoTotal: videoIds.length,
      states,
      synthesis: await synthesisState(
        authorPathForAuthor(author),
        summarizedVideoIds,
      ),
    });
  }

  return { playlists: playlistStatuses, authors: authorStatuses };
};

const synthesisLine = (label, synthesis) => {
  const missing =
    synthesis.missingVideoIds.length > 0
      ? `; missing covered video IDs: ${synthesis.missingVideoIds.join(', ')}`
      : '';
  return `  ${label}: ${synthesis.state}${missing}`;
};

export const formatLibraryStatus = (status) => {
  const sections = [];
  for (const playlistStatus of status.playlists) {
    const { playlist } = playlistStatus;
    const lines = [`Playlist ${playlist.slug} (${playlist.title}):`];
    if (!playlistStatus.synced) {
      lines.push('  manifest: not synced');
      sections.push(lines.join('\n'));
      continue;
    }
    const { totals, states, summaries } = playlistStatus;
    lines.push(
      `  manifest: ${totals.entries} entries; ${totals.available} available; ${totals.manifestUnavailable} unavailable/private/deleted`,
      `  transcripts: ${states.captured} captured; ${states.pending} pending; ${states.unavailable} unavailable-recorded`,
      `  unavailable video IDs: ${playlistStatus.unavailableVideoIds.join(', ') || 'none'}`,
      `  summaries among captured: ${summaries.missing} missing; ${summaries.draft} draft/not-reviewed; ${summaries.reviewed} reviewed`,
      synthesisLine('overview.md', playlistStatus.synthesis),
    );
    sections.push(lines.join('\n'));
  }

  for (const authorStatus of status.authors) {
    const { author, states } = authorStatus;
    sections.push(
      [
        `Author ${author.slug} (${author.displayName}):`,
        `  playlists: ${authorStatus.playlists.map((playlist) => playlist.slug).join(', ')}`,
        `  videos: ${authorStatus.videoTotal} deduped`,
        `  transcripts: ${states.captured} captured; ${states.pending} pending; ${states.unavailable} unavailable-recorded`,
        synthesisLine(`authors/${author.slug}.md`, authorStatus.synthesis),
      ].join('\n'),
    );
  }

  return sections.join('\n\n');
};

export const formatCaptureResult = (result, remaining = 0) => {
  if (result.outcome === 'captured') {
    return `captured ${result.videoId}`;
  }
  const detail =
    result.errorName && !result.detail.startsWith(`${result.errorName}:`)
      ? `${result.errorName}: ${result.detail}`
      : result.detail;
  if (result.errorName === tooManyRequestsErrorName) {
    return `transient ${result.videoId}: ${detail}; stopped with ${remaining} remaining`;
  }
  return `${result.outcome} ${result.videoId}: ${detail}`;
};
