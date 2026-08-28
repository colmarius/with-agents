import { access, readFile } from 'node:fs/promises';
import {
  checkCatalogPlaylists,
  libraryPath,
  readYoutubeApiKey,
  selectCatalogPlaylists,
  writeJsonAtomic,
} from './youtube-library-core.mjs';
import { resolvePlaylistEditorialScope } from './youtube-library-curation.mjs';
import {
  buildResourceIntakeStatus,
  readResourceIntakeDecisions,
} from './youtube-resource-intake.mjs';
import {
  hasFullStandaloneEvidence,
  loadStandaloneYoutubeEvidence,
} from './youtube-standalone-evidence.mjs';
import {
  canonicalYoutubeUrl,
  cleanText,
  fetchVideo,
  renderTranscriptMarkdown,
  repoRelative,
  rootDir,
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
const defaultIntakePathForPlaylist = (playlist) =>
  libraryPath(`playlists/${playlist.slug}/intake.json`);
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
  repoRoot,
  standaloneEvidenceByVideoId,
}) => {
  const playlists = selectCatalogPlaylists(catalog, playlistSlugs);
  const explicitlySelected = new Set(playlistSlugs);
  const manifests = [];

  for (const playlist of playlists) {
    const manifest = await readPlaylistManifest({
      playlist,
      manifestPathForPlaylist,
      required: true,
    });
    const scope = resolvePlaylistEditorialScope(playlist, manifest);
    if (scope.errors.length > 0) {
      throw new Error(scope.errors.join(' '));
    }
    if (
      scope.mode === 'resource-intake' &&
      explicitlySelected.has(playlist.slug)
    ) {
      throw new Error(
        `Playlist ${playlist.slug} is a resource intake; process its pending videos through the standalone resource workflow instead of library capture.`,
      );
    }
    if (
      scope.mode === 'curated' &&
      scope.status === 'draft' &&
      explicitlySelected.has(playlist.slug)
    ) {
      throw new Error(
        `Playlist ${playlist.slug} has draft curation; review its selected video IDs before capture.`,
      );
    }
    manifests.push({
      playlist,
      entries: scope.activeEntries,
      allowsStandaloneEvidence:
        scope.mode === 'curated' && scope.status === 'reviewed',
    });
  }

  const standaloneEligibleVideoIds = new Set(
    manifests.flatMap(({ entries, allowsStandaloneEvidence }) =>
      allowsStandaloneEvidence ? entries.map((entry) => entry.videoId) : [],
    ),
  );
  const standaloneEvidence = standaloneEvidenceByVideoId
    ? { byVideoId: standaloneEvidenceByVideoId, errors: [] }
    : await loadStandaloneYoutubeEvidence({
        repoRoot,
        videoIds: standaloneEligibleVideoIds,
      });
  if (standaloneEvidence.errors.length > 0) {
    throw new Error(standaloneEvidence.errors.join(' '));
  }

  const selectedPlaylistIds = new Set(playlists.map((playlist) => playlist.id));
  const obligationManifests = [...manifests];
  for (const playlist of catalog.playlists) {
    if (selectedPlaylistIds.has(playlist.id)) {
      continue;
    }
    const manifest = await readPlaylistManifest({
      playlist,
      manifestPathForPlaylist,
      required: false,
    });
    if (!manifest) {
      continue;
    }
    const scope = resolvePlaylistEditorialScope(playlist, manifest);
    obligationManifests.push({
      entries: scope.activeEntries,
      allowsStandaloneEvidence:
        scope.mode === 'curated' && scope.status === 'reviewed',
    });
  }
  const requiresLibraryEvidence = new Set(
    obligationManifests.flatMap(({ entries, allowsStandaloneEvidence }) =>
      allowsStandaloneEvidence ? [] : entries.map((entry) => entry.videoId),
    ),
  );
  const byVideoId = new Map();
  const queue = [];
  for (const { playlist, entries } of manifests) {
    for (const entry of entries) {
      if (!entry.available) {
        continue;
      }
      if (
        hasFullStandaloneEvidence(
          standaloneEvidence.byVideoId,
          entry.videoId,
        ) &&
        !requiresLibraryEvidence.has(entry.videoId)
      ) {
        const localTranscript = await pathExists(
          videoPathForFile(entry.videoId, 'transcript.md'),
        );
        if (!localTranscript) {
          continue;
        }
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
  // Never replace an existing captured transcript's metadata with an
  // unavailable record: that would create contradictory state (captured and
  // unavailable) that the --retry filter skips forever.
  if (classification.outcome === 'unavailable' && !candidate.state?.captured) {
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
  repoRoot = rootDir,
  standaloneEvidenceByVideoId,
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
    repoRoot,
    standaloneEvidenceByVideoId,
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
  intakePathForPlaylist = defaultIntakePathForPlaylist,
  authorPathForAuthor = defaultAuthorPathForAuthor,
  repoRoot = rootDir,
  standaloneEvidenceByVideoId,
}) => {
  const manifestsByPlaylistId = new Map();
  const scopesByPlaylistId = new Map();
  const standaloneEligibleVideoIds = new Set();
  for (const playlist of catalog.playlists) {
    const manifest = await readPlaylistManifest({
      playlist,
      manifestPathForPlaylist,
      required: false,
    });
    if (!manifest) {
      continue;
    }
    manifestsByPlaylistId.set(playlist.id, manifest);
    const scope = resolvePlaylistEditorialScope(playlist, manifest);
    scopesByPlaylistId.set(playlist.id, scope);
    if (scope.mode === 'curated' && scope.status === 'reviewed') {
      for (const videoId of scope.selectedVideoIds) {
        standaloneEligibleVideoIds.add(videoId);
      }
    }
  }
  const standaloneEvidence = standaloneEvidenceByVideoId
    ? { byVideoId: standaloneEvidenceByVideoId, errors: [] }
    : await loadStandaloneYoutubeEvidence({
        repoRoot,
        videoIds: standaloneEligibleVideoIds,
      });
  if (standaloneEvidence.errors.length > 0) {
    throw new Error(standaloneEvidence.errors.join(' '));
  }

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
            source: 'library',
          };
        })(),
      );
    }
    return videoCache.get(videoId);
  };

  const playlistStatuses = [];
  for (const playlist of catalog.playlists) {
    const manifest = manifestsByPlaylistId.get(playlist.id);
    if (!manifest) {
      playlistStatuses.push({ playlist, synced: false });
      continue;
    }
    const availableEntries = manifest.entries.filter(
      (entry) => entry.available,
    );
    const scope = scopesByPlaylistId.get(playlist.id);
    const manifestUnavailable =
      manifest.entries.length - availableEntries.length;
    const totals = {
      entries: manifest.entries.length,
      available: availableEntries.length,
      manifestUnavailable,
    };
    if (scope.mode === 'resource-intake') {
      const decisions = await readResourceIntakeDecisions({
        playlist,
        filePath: intakePathForPlaylist(playlist),
      });
      playlistStatuses.push({
        playlist,
        synced: true,
        totals,
        intake: buildResourceIntakeStatus({ manifest, decisions }),
      });
      continue;
    }

    const editorialEntries = scope.activeEntries;
    const states = { captured: 0, pending: 0, unavailable: 0 };
    const unavailableVideoIds = [];
    const summaries = { missing: 0, draft: 0, reviewed: 0 };
    const summarizedVideoIds = [];
    let standaloneReused = 0;

    for (const entry of editorialEntries) {
      let video = await getVideo(entry.videoId);
      if (
        scope.mode === 'curated' &&
        scope.status === 'reviewed' &&
        !video.transcript &&
        hasFullStandaloneEvidence(standaloneEvidence.byVideoId, entry.videoId)
      ) {
        video = {
          transcript: false,
          unavailable: false,
          state: 'captured',
          summary: true,
          summaryStatus: 'reviewed',
          source: 'standalone',
        };
      }
      states[video.state] += 1;
      if (video.source === 'standalone') {
        standaloneReused += 1;
      }
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
      totals,
      curation:
        scope.mode === 'curated'
          ? {
              status: scope.status,
              candidates: scope.candidateVideoIds.length,
              selected: scope.selectedVideoIds.length,
              unselected: scope.unselectedVideoIds.length,
              errors: scope.errors,
            }
          : undefined,
      states,
      standaloneReused,
      unavailableVideoIds: [...new Set(unavailableVideoIds)],
      summaries,
      synthesis:
        scope.mode === 'curated' && scope.status === 'draft'
          ? { state: 'inactive', missingVideoIds: [] }
          : await synthesisState(
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

const projectSynthesis = (synthesis) => ({
  state: synthesis.state,
  missingVideoIds: [...synthesis.missingVideoIds],
});

const projectPlaylistLocalStatus = (playlistStatus) => {
  if (!playlistStatus.synced) {
    return { synced: false };
  }
  if (playlistStatus.intake) {
    return {
      synced: true,
      totals: { ...playlistStatus.totals },
      intake: {
        ...playlistStatus.intake,
        pendingVideoIds: [...playlistStatus.intake.pendingVideoIds],
      },
    };
  }

  const local = {
    synced: true,
    totals: { ...playlistStatus.totals },
    transcripts: { ...playlistStatus.states },
    unavailableVideoIds: [...playlistStatus.unavailableVideoIds],
    summaries: { ...playlistStatus.summaries },
    overview: projectSynthesis(playlistStatus.synthesis),
  };
  if (playlistStatus.curation) {
    local.curation = {
      ...playlistStatus.curation,
      errors: [...playlistStatus.curation.errors],
    };
  }
  if (playlistStatus.standaloneReused > 0) {
    local.standaloneReused = playlistStatus.standaloneReused;
  }
  return local;
};

export const buildLibraryCheckReport = ({
  catalog,
  selectedPlaylists,
  remoteResults,
  status,
}) => {
  const localByPlaylistId = new Map(
    status.playlists.map((playlistStatus) => [
      playlistStatus.playlist.id,
      playlistStatus,
    ]),
  );
  const remoteByPlaylistId = new Map(
    remoteResults.map((remoteResult) => [
      remoteResult.playlist.id,
      remoteResult,
    ]),
  );

  const playlists = selectedPlaylists.map((playlist) => {
    const playlistStatus = localByPlaylistId.get(playlist.id);
    const remoteResult = remoteByPlaylistId.get(playlist.id);
    const local = projectPlaylistLocalStatus(playlistStatus);
    const remote = remoteResult.error
      ? { fetched: false, error: { ...remoteResult.error } }
      : {
          fetched: true,
          changed: remoteResult.result.write.changed,
          diff: remoteResult.result.diff,
        };
    return {
      slug: playlist.slug,
      id: playlist.id,
      firstSync: !local.synced,
      remote,
      local,
    };
  });

  const selectedPlaylistIds = new Set(
    selectedPlaylists.map((playlist) => playlist.id),
  );
  const authorStatusById = new Map(
    status.authors.map((authorStatus) => [
      authorStatus.author.id,
      authorStatus,
    ]),
  );
  const authors = catalog.authors.flatMap((author) => {
    const authorStatus = authorStatusById.get(author.id);
    if (
      !authorStatus?.playlists.some((playlist) =>
        selectedPlaylistIds.has(playlist.id),
      )
    ) {
      return [];
    }
    return [
      {
        slug: author.slug,
        playlists: authorStatus.playlists.map((playlist) => playlist.slug),
        videoTotal: authorStatus.videoTotal,
        transcripts: { ...authorStatus.states },
        synthesis: projectSynthesis(authorStatus.synthesis),
      },
    ];
  });

  const remoteChanges = {
    playlists: 0,
    firstSyncs: 0,
    additions: 0,
    removals: 0,
    moves: 0,
    retitles: 0,
    availabilityChanges: 0,
  };
  let pendingTranscripts = 0;
  let pendingIntakeVideos = 0;
  let missingSummaries = 0;
  let staleSyntheses = 0;
  let errors = 0;

  for (const playlist of playlists) {
    if (!playlist.remote.fetched) {
      errors += 1;
    } else {
      if (playlist.remote.changed) {
        remoteChanges.playlists += 1;
      }
      if (playlist.firstSync) {
        remoteChanges.firstSyncs += 1;
      }
      remoteChanges.additions += playlist.remote.diff.additions.length;
      remoteChanges.removals += playlist.remote.diff.removals.length;
      remoteChanges.moves += playlist.remote.diff.moves.length;
      remoteChanges.retitles += playlist.remote.diff.retitles.length;
      remoteChanges.availabilityChanges +=
        playlist.remote.diff.privacyChanges.length;
    }
    if (playlist.local.synced) {
      if (playlist.local.intake) {
        pendingIntakeVideos += playlist.local.intake.pending;
        continue;
      }
      pendingTranscripts += playlist.local.transcripts.pending;
      missingSummaries += playlist.local.summaries.missing;
      if (playlist.local.overview.state !== 'current') {
        staleSyntheses += 1;
      }
    }
  }
  staleSyntheses += authors.filter(
    (author) => author.synthesis.state !== 'current',
  ).length;

  return {
    playlists,
    authors,
    summary: {
      remoteChanges,
      pendingTranscripts,
      pendingIntakeVideos,
      missingSummaries,
      staleSyntheses,
      errors,
    },
  };
};

export const checkLibrary = async ({
  catalog,
  playlistSlugs = [],
  environment = process.env,
  fetchImpl = globalThis.fetch,
  manifestPathForPlaylist = defaultManifestPathForPlaylist,
  videoPathForFile = defaultVideoPathForFile,
  overviewPathForPlaylist = defaultOverviewPathForPlaylist,
  intakePathForPlaylist = defaultIntakePathForPlaylist,
  authorPathForAuthor = defaultAuthorPathForAuthor,
}) => {
  const selectedPlaylists = selectCatalogPlaylists(catalog, playlistSlugs);
  readYoutubeApiKey(environment);
  const status = await buildLibraryStatus({
    catalog,
    manifestPathForPlaylist,
    videoPathForFile,
    overviewPathForPlaylist,
    intakePathForPlaylist,
    authorPathForAuthor,
  });
  const remoteResults = await checkCatalogPlaylists({
    catalog,
    playlistSlugs,
    environment,
    fetchImpl,
    manifestPathForPlaylist,
  });
  const report = buildLibraryCheckReport({
    catalog,
    selectedPlaylists,
    remoteResults,
    status,
  });
  return { exitCode: report.summary.errors > 0 ? 2 : 0, report };
};

const checkDiffCounts = (diff) =>
  [
    `${diff.additions.length} additions`,
    `${diff.removals.length} removals`,
    `${diff.moves.length} moves`,
    `${diff.retitles.length} retitles`,
    `${diff.privacyChanges.length} availability changes`,
  ].join('; ');

export const formatLibraryCheckReport = (report) => {
  const lines = [
    'YouTube library check (read-only)',
    'Remote: changes are what a later sync would apply; no manifests were written.',
    'Local: state comes from committed manifests and source artifacts.',
  ];

  for (const playlist of report.playlists) {
    lines.push('', `Playlist ${playlist.slug} (${playlist.id}):`);
    if (!playlist.remote.fetched) {
      lines.push(`  remote: error: ${playlist.remote.error.message}`);
    } else {
      const firstSync = playlist.firstSync ? 'first sync; ' : '';
      const changed = playlist.remote.changed ? 'changes found' : 'no changes';
      lines.push(
        `  remote: fetched; ${firstSync}${changed}; ${checkDiffCounts(playlist.remote.diff)}`,
      );
    }
    if (!playlist.local.synced) {
      lines.push('  local: manifest not synced');
      continue;
    }
    const { local } = playlist;
    lines.push(
      `  local manifest: ${local.totals.entries} entries; ${local.totals.available} available; ${local.totals.manifestUnavailable} unavailable/private/deleted`,
    );
    if (local.curation) {
      lines.push(
        `  local curation: ${local.curation.status}; ${local.curation.candidates} candidates; ${local.curation.selected} selected; ${local.curation.unselected} unselected`,
        `  local curation errors: ${local.curation.errors.join(' ') || 'none'}`,
      );
    }
    if (local.intake) {
      lines.push(
        `  local resource intake decisions: ${local.intake.processed} current; ${local.intake.pending} pending; ${local.intake.keep} keep; ${local.intake.remove} remove; ${local.intake.historical} historical`,
        `  local historical decisions: ${local.intake.historicalKeep} keep; ${local.intake.historicalRemove} remove`,
        `  local pending video IDs: ${local.intake.pendingVideoIds.join(', ') || 'none'}`,
        `  local playlist removal candidates: ${local.intake.removeVideoIds.join(', ') || 'none'}`,
      );
      continue;
    }
    lines.push(
      `  local transcripts: ${local.transcripts.captured} captured; ${local.transcripts.pending} pending; ${local.transcripts.unavailable} unavailable-recorded`,
      `  local unavailable video IDs: ${local.unavailableVideoIds.join(', ') || 'none'}`,
      `  local summaries: ${local.summaries.missing} missing; ${local.summaries.draft} draft/not-reviewed; ${local.summaries.reviewed} reviewed`,
      synthesisLine('local overview', local.overview),
    );
    if (local.standaloneReused) {
      lines.splice(
        lines.length - 3,
        0,
        `  local standalone sources reused: ${local.standaloneReused}`,
      );
    }
  }

  for (const author of report.authors) {
    lines.push(
      '',
      `Author ${author.slug}:`,
      `  local related playlists: ${author.playlists.join(', ')}`,
      `  local videos: ${author.videoTotal} deduped`,
      `  local transcripts: ${author.transcripts.captured} captured; ${author.transcripts.pending} pending; ${author.transcripts.unavailable} unavailable-recorded`,
      synthesisLine('local synthesis', author.synthesis),
    );
  }

  const { remoteChanges } = report.summary;
  lines.push(
    '',
    `Summary: ${remoteChanges.playlists} playlists with remote changes; ${remoteChanges.firstSyncs} first syncs; ${remoteChanges.additions} additions; ${remoteChanges.removals} removals; ${remoteChanges.moves} moves; ${remoteChanges.retitles} retitles; ${remoteChanges.availabilityChanges} availability changes`,
    `Local work: ${report.summary.pendingIntakeVideos} pending intake videos; ${report.summary.pendingTranscripts} pending transcripts; ${report.summary.missingSummaries} missing summaries; ${report.summary.staleSyntheses} missing/stale syntheses`,
    `Errors: ${report.summary.errors}`,
  );
  return lines.join('\n');
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
    );
    if (playlistStatus.intake) {
      lines.push(
        `  resource intake decisions: ${playlistStatus.intake.processed} current; ${playlistStatus.intake.pending} pending; ${playlistStatus.intake.keep} keep; ${playlistStatus.intake.remove} remove; ${playlistStatus.intake.historical} historical`,
        `  historical decisions: ${playlistStatus.intake.historicalKeep} keep; ${playlistStatus.intake.historicalRemove} remove`,
        `  pending video IDs: ${playlistStatus.intake.pendingVideoIds.join(', ') || 'none'}`,
        `  playlist removal candidates: ${playlistStatus.intake.removeVideoIds.join(', ') || 'none'}`,
      );
      sections.push(lines.join('\n'));
      continue;
    }
    if (playlistStatus.curation) {
      lines.push(
        `  curation: ${playlistStatus.curation.status}; ${playlistStatus.curation.candidates} candidates; ${playlistStatus.curation.selected} selected; ${playlistStatus.curation.unselected} unselected`,
        `  curation errors: ${playlistStatus.curation.errors.join(' ') || 'none'}`,
      );
    }
    lines.push(
      `  transcripts: ${states.captured} captured; ${states.pending} pending; ${states.unavailable} unavailable-recorded`,
      `  unavailable video IDs: ${playlistStatus.unavailableVideoIds.join(', ') || 'none'}`,
      `  summaries among captured: ${summaries.missing} missing; ${summaries.draft} draft/not-reviewed; ${summaries.reviewed} reviewed`,
      synthesisLine('overview.md', playlistStatus.synthesis),
    );
    if (playlistStatus.standaloneReused > 0) {
      lines.splice(
        lines.length - 3,
        0,
        `  standalone sources reused: ${playlistStatus.standaloneReused}`,
      );
    }
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
