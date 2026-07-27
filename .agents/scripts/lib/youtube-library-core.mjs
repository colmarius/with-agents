import { randomUUID } from 'node:crypto';
import { mkdir, readFile, rename, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { resolveContainedPath, rootDir } from './youtube-transcript-core.mjs';

export const libraryRoot = path.join(rootDir, 'src/content/youtube');
export const catalogPath = resolveContainedPath(libraryRoot, 'catalog.json');

const playlistItemsEndpoint =
  'https://www.googleapis.com/youtube/v3/playlistItems';

const commandNames = new Set(['capture', 'check', 'help', 'status', 'sync']);
const forbiddenCredentialKey =
  /^(?:api[-_]?key|credentials?|secrets?|youtube[-_]?api[-_]?key)$/i;

const assertObject = (value, name) => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${name} must be an object.`);
  }
};

const assertNonEmptyString = (value, name) => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${name} must be a non-empty string.`);
  }
};

const assertNoCredentials = (value, location = 'catalog') => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      assertNoCredentials(item, `${location}[${index}]`);
    });
    return;
  }

  if (value === null || typeof value !== 'object') {
    return;
  }

  for (const [key, nested] of Object.entries(value)) {
    if (forbiddenCredentialKey.test(key)) {
      throw new Error(
        `${location}.${key} is not allowed; credentials must come from the environment.`,
      );
    }
    assertNoCredentials(nested, `${location}.${key}`);
  }
};

const assertUnique = (values, name) => {
  if (new Set(values).size !== values.length) {
    throw new Error(`${name} values must be unique.`);
  }
};

export const validateCatalog = (catalog) => {
  assertObject(catalog, 'catalog');
  assertNoCredentials(catalog);

  if (catalog.publication !== 'source-only') {
    throw new Error('catalog.publication must be "source-only".');
  }

  for (const key of ['authors', 'playlists', 'relationships']) {
    if (!Array.isArray(catalog[key])) {
      throw new Error(`catalog.${key} must be an array.`);
    }
  }

  catalog.authors.forEach((author, index) => {
    assertObject(author, `catalog.authors[${index}]`);
    assertNonEmptyString(author.id, `catalog.authors[${index}].id`);
    assertNonEmptyString(author.slug, `catalog.authors[${index}].slug`);
    assertNonEmptyString(
      author.displayName,
      `catalog.authors[${index}].displayName`,
    );
  });

  catalog.playlists.forEach((playlist, index) => {
    assertObject(playlist, `catalog.playlists[${index}]`);
    for (const key of [
      'id',
      'slug',
      'title',
      'transcriptLanguage',
      'summaryLanguage',
    ]) {
      assertNonEmptyString(playlist[key], `catalog.playlists[${index}].${key}`);
    }
    if (
      Object.hasOwn(playlist, 'multiSpeaker') &&
      playlist.multiSpeaker !== true
    ) {
      throw new Error(
        `catalog.playlists[${index}].multiSpeaker must be true when present.`,
      );
    }
  });

  assertUnique(
    catalog.authors.map((author) => author.id),
    'Author ID',
  );
  assertUnique(
    catalog.authors.map((author) => author.slug),
    'Author slug',
  );
  assertUnique(
    catalog.playlists.map((playlist) => playlist.id),
    'Playlist ID',
  );
  assertUnique(
    catalog.playlists.map((playlist) => playlist.slug),
    'Playlist slug',
  );

  const authorIds = new Set(catalog.authors.map((author) => author.id));
  const playlistIds = new Set(catalog.playlists.map((playlist) => playlist.id));
  const relatedPlaylistIds = new Set();

  catalog.relationships.forEach((relationship, index) => {
    assertObject(relationship, `catalog.relationships[${index}]`);
    assertNonEmptyString(
      relationship.authorId,
      `catalog.relationships[${index}].authorId`,
    );
    if (!authorIds.has(relationship.authorId)) {
      throw new Error(
        `catalog.relationships[${index}].authorId references an unknown author.`,
      );
    }
    if (
      !Array.isArray(relationship.playlistIds) ||
      relationship.playlistIds.length === 0
    ) {
      throw new Error(
        `catalog.relationships[${index}].playlistIds must be a non-empty array.`,
      );
    }
    assertUnique(
      relationship.playlistIds,
      `catalog.relationships[${index}].playlistIds`,
    );

    for (const playlistId of relationship.playlistIds) {
      assertNonEmptyString(
        playlistId,
        `catalog.relationships[${index}].playlistIds entry`,
      );
      if (!playlistIds.has(playlistId)) {
        throw new Error(
          `catalog.relationships[${index}].playlistIds references an unknown playlist.`,
        );
      }
      relatedPlaylistIds.add(playlistId);
    }
  });

  for (const playlist of catalog.playlists) {
    const hasAuthorRelationship = relatedPlaylistIds.has(playlist.id);
    if (hasAuthorRelationship && playlist.multiSpeaker === true) {
      throw new Error(
        `Playlist ${playlist.id} cannot have both an author relationship and multiSpeaker: true.`,
      );
    }
    if (!hasAuthorRelationship && playlist.multiSpeaker !== true) {
      throw new Error(`Playlist ${playlist.id} has no author relationship.`);
    }
  }

  return catalog;
};

export const loadCatalog = async () => {
  let contents;
  try {
    contents = await readFile(catalogPath, 'utf8');
  } catch (error) {
    throw new Error(`Could not read ${catalogPath}: ${error.message}`);
  }

  let catalog;
  try {
    catalog = JSON.parse(contents);
  } catch (error) {
    throw new Error(`Could not parse ${catalogPath}: ${error.message}`);
  }

  return validateCatalog(catalog);
};

export const libraryPath = (relativePath) =>
  resolveContainedPath(libraryRoot, relativePath);

const optionName = (value) => value.split('=', 1)[0];

export const parseLibraryArgs = (argv) => {
  if (argv.length === 0) {
    return { command: 'help' };
  }

  if (argv[0] === '--help' || argv[0] === '-h') {
    if (argv.length > 1) {
      throw new Error('The help option does not accept arguments.');
    }
    return { command: 'help' };
  }

  const command = argv[0];
  if (!commandNames.has(command)) {
    if (command.startsWith('-')) {
      throw new Error(`Unknown option: ${optionName(command)}`);
    }
    throw new Error(`Unknown command: ${command}`);
  }

  if (command === 'status' && argv.length > 1) {
    const extra = argv[1];
    const kind = extra.startsWith('-') ? 'options' : 'arguments';
    throw new Error(`Command ${command} does not accept ${kind}.`);
  }

  if (command === 'help' || command === 'status') {
    return { command };
  }

  const playlistSlugs = [];
  let dryRun = false;
  let force = false;
  let json = false;
  let retry = false;
  let limit;

  for (let index = 1; index < argv.length; index += 1) {
    const argument = argv[index];
    if (command === 'sync' && argument === '--dry-run') {
      dryRun = true;
      continue;
    }

    if (command === 'check' && argument === '--json') {
      json = true;
      continue;
    }

    if (command === 'capture' && argument === '--force') {
      force = true;
      continue;
    }

    if (command === 'capture' && argument === '--retry') {
      retry = true;
      continue;
    }

    if (argument === '--playlist') {
      const value = argv[index + 1];
      if (!value || value.startsWith('-')) {
        throw new Error('Option --playlist requires a value.');
      }
      playlistSlugs.push(value);
      index += 1;
      continue;
    }

    if (command === 'capture' && argument === '--limit') {
      const value = argv[index + 1];
      if (!value || value.startsWith('-')) {
        throw new Error('Option --limit requires a value.');
      }
      if (!/^[1-9]\d*$/.test(value)) {
        throw new Error('Option --limit must be a positive integer.');
      }
      limit = Number(value);
      if (!Number.isSafeInteger(limit)) {
        throw new Error('Option --limit must be a positive integer.');
      }
      index += 1;
      continue;
    }

    if (argument.startsWith('-')) {
      throw new Error(`Unknown ${command} option: ${optionName(argument)}`);
    }
    throw new Error(
      `${command[0].toUpperCase()}${command.slice(1)} does not accept positional arguments.`,
    );
  }

  if (command === 'sync') {
    return { command, playlistSlugs, dryRun };
  }
  if (command === 'check') {
    return { command, playlistSlugs, json };
  }

  if (force && retry) {
    throw new Error('Capture options --force and --retry cannot be combined.');
  }
  if (force && playlistSlugs.length === 0 && limit === undefined) {
    throw new Error(
      'Capture --force requires at least one --playlist or --limit scope.',
    );
  }

  return { command, playlistSlugs, limit, retry, force };
};

export const selectCatalogPlaylists = (catalog, playlistSlugs = []) => {
  const configuredBySlug = new Map(
    catalog.playlists.map((playlist) => [playlist.slug, playlist]),
  );

  for (const slug of playlistSlugs) {
    if (!configuredBySlug.has(slug)) {
      throw new Error(
        `Unknown playlist slug: ${slug}. Configured playlists: ${catalog.playlists
          .map((playlist) => playlist.slug)
          .join(', ')}.`,
      );
    }
  }

  if (playlistSlugs.length === 0) {
    return catalog.playlists;
  }

  const selectedSlugs = new Set(playlistSlugs);
  return catalog.playlists.filter((playlist) =>
    selectedSlugs.has(playlist.slug),
  );
};

export const readYoutubeApiKey = (environment = process.env) => {
  const apiKey = environment.YOUTUBE_API_KEY;
  if (typeof apiKey !== 'string' || apiKey.trim().length === 0) {
    throw new Error(
      'YOUTUBE_API_KEY is required to synchronize YouTube playlists.',
    );
  }
  return apiKey.trim();
};

const apiErrorDetail = (payload, apiKey, statusText) => {
  const reason = payload?.error?.errors?.find(
    (error) => typeof error?.reason === 'string',
  )?.reason;
  if (
    /^[a-zA-Z][a-zA-Z0-9_.-]{0,79}$/.test(reason ?? '') &&
    !reason.includes(apiKey)
  ) {
    return reason;
  }

  const message = payload?.error?.message;
  for (const candidate of [message, statusText]) {
    const normalized =
      typeof candidate === 'string'
        ? candidate.replace(/\s+/g, ' ').trim()
        : '';
    if (
      normalized.length > 0 &&
      normalized.length <= 160 &&
      !normalized.includes(apiKey) &&
      !/[?&=]/.test(normalized) &&
      !/https?:\/\//i.test(normalized)
    ) {
      return normalized;
    }
  }

  return undefined;
};

const playlistRequestError = (playlistId, pageNumber, message) =>
  new Error(
    `playlistItems.list failed for playlist ${playlistId} page ${pageNumber}: ${message}`,
  );

export const fetchPlaylistItems = async ({
  playlistId,
  apiKey,
  fetchImpl = globalThis.fetch,
}) => {
  const items = [];
  let pageToken;
  let pageNumber = 1;

  do {
    const url = new URL(playlistItemsEndpoint);
    url.searchParams.set('part', 'snippet,contentDetails,status');
    url.searchParams.set('maxResults', '50');
    url.searchParams.set('playlistId', playlistId);
    if (pageToken) {
      url.searchParams.set('pageToken', pageToken);
    }
    url.searchParams.set('key', apiKey);

    let response;
    try {
      response = await fetchImpl(url);
    } catch {
      throw playlistRequestError(
        playlistId,
        pageNumber,
        'network request failed',
      );
    }

    if (!response.ok) {
      let payload;
      try {
        payload = await response.json();
      } catch {
        payload = undefined;
      }
      const detail = apiErrorDetail(payload, apiKey, response.statusText);
      const status = `HTTP ${response.status}`;
      throw playlistRequestError(
        playlistId,
        pageNumber,
        detail ? `${status} (${detail})` : status,
      );
    }

    let payload;
    try {
      payload = await response.json();
    } catch {
      throw playlistRequestError(
        playlistId,
        pageNumber,
        'invalid JSON response',
      );
    }

    if (!Array.isArray(payload?.items)) {
      throw playlistRequestError(
        playlistId,
        pageNumber,
        'response did not contain an items array',
      );
    }
    items.push(...payload.items);

    if (
      payload.nextPageToken !== undefined &&
      typeof payload.nextPageToken !== 'string'
    ) {
      throw playlistRequestError(
        playlistId,
        pageNumber,
        'response contained an invalid nextPageToken',
      );
    }
    pageToken = payload.nextPageToken || undefined;
    pageNumber += 1;
  } while (pageToken);

  return items;
};

const unavailableReason = (item) => {
  if (item?.status?.privacyStatus === 'private') {
    return 'private';
  }

  if (
    item?.snippet?.title === 'Deleted video' &&
    item?.snippet?.description === 'This video is unavailable.' &&
    !item?.contentDetails?.videoPublishedAt
  ) {
    return 'deleted';
  }

  return undefined;
};

const normalizePlaylistItem = (item, index) => {
  const videoId =
    item?.contentDetails?.videoId ?? item?.snippet?.resourceId?.videoId;
  if (typeof videoId !== 'string' || videoId.length === 0) {
    throw new Error(`Playlist item ${index + 1} has no video ID.`);
  }

  const position = item?.snippet?.position;
  if (!Number.isInteger(position) || position < 0) {
    throw new Error(`Playlist item ${videoId} has an invalid position.`);
  }

  const reason = unavailableReason(item);
  const entry = {
    videoId,
    position,
    title: typeof item?.snippet?.title === 'string' ? item.snippet.title : '',
  };
  if (typeof item?.contentDetails?.videoPublishedAt === 'string') {
    entry.publishedAt = item.contentDetails.videoPublishedAt;
  }
  if (typeof item?.status?.privacyStatus === 'string') {
    entry.privacyStatus = item.status.privacyStatus;
  }
  entry.available = reason === undefined;
  if (reason) {
    entry.unavailableReason = reason;
  }

  return entry;
};

export const normalizePlaylistManifest = (playlistId, items) => ({
  playlistId,
  entries: items
    .map(normalizePlaylistItem)
    .sort(
      (left, right) =>
        left.position - right.position ||
        left.videoId.localeCompare(right.videoId),
    ),
});

const byVideoId = (entries) =>
  new Map(entries.map((entry) => [entry.videoId, entry]));

const sortedByVideoId = (entries) =>
  entries.sort((left, right) => left.videoId.localeCompare(right.videoId));

const availabilityState = (entry) => ({
  privacyStatus: entry.privacyStatus,
  available: entry.available,
  unavailableReason: entry.unavailableReason,
});

export const diffPlaylistManifests = (previous, current) => {
  const previousEntries = byVideoId(previous.entries);
  const currentEntries = byVideoId(current.entries);
  const additions = [];
  const removals = [];
  const moves = [];
  const retitles = [];
  const privacyChanges = [];

  for (const entry of current.entries) {
    const oldEntry = previousEntries.get(entry.videoId);
    if (!oldEntry) {
      additions.push(entry);
      continue;
    }
    if (oldEntry.position !== entry.position) {
      moves.push({
        videoId: entry.videoId,
        from: oldEntry.position,
        to: entry.position,
      });
    }
    if (oldEntry.title !== entry.title) {
      retitles.push({
        videoId: entry.videoId,
        from: oldEntry.title,
        to: entry.title,
      });
    }

    const from = availabilityState(oldEntry);
    const to = availabilityState(entry);
    if (JSON.stringify(from) !== JSON.stringify(to)) {
      privacyChanges.push({ videoId: entry.videoId, from, to });
    }
  }

  for (const entry of previous.entries) {
    if (!currentEntries.has(entry.videoId)) {
      removals.push(entry);
    }
  }

  return {
    additions: sortedByVideoId(additions),
    removals: sortedByVideoId(removals),
    moves: sortedByVideoId(moves),
    retitles: sortedByVideoId(retitles),
    privacyChanges: sortedByVideoId(privacyChanges),
  };
};

export const isPlaylistDiffEmpty = (diff) =>
  Object.values(diff).every((changes) => changes.length === 0);

export const serializePlaylistManifest = (manifest) =>
  `${JSON.stringify(manifest, null, 2)}\n`;

const readExistingFile = async (filePath) => {
  try {
    return await readFile(filePath);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return undefined;
    }
    throw error;
  }
};

export const writeJsonAtomic = async (
  filePath,
  value,
  { dryRun = false } = {},
) => {
  const contents = `${JSON.stringify(value, null, 2)}\n`;
  const existing = await readExistingFile(filePath);
  const changed =
    existing === undefined || !existing.equals(Buffer.from(contents, 'utf8'));

  if (!changed || dryRun) {
    return {
      path: filePath,
      changed,
      written: false,
      existed: existing !== undefined,
      dryRun,
    };
  }

  const directory = path.dirname(filePath);
  await mkdir(directory, { recursive: true });
  const temporaryPath = path.join(
    directory,
    `.${path.basename(filePath)}.${process.pid}.${randomUUID()}.tmp`,
  );

  try {
    await writeFile(temporaryPath, contents, { encoding: 'utf8', flag: 'wx' });
    await rename(temporaryPath, filePath);
  } catch (error) {
    await unlink(temporaryPath).catch(() => {});
    throw error;
  }

  return {
    path: filePath,
    changed: true,
    written: true,
    existed: existing !== undefined,
    dryRun: false,
  };
};

export const writeManifestAtomic = async (filePath, manifest, options = {}) =>
  writeJsonAtomic(filePath, manifest, options);

const readManifest = async (filePath, playlistId) => {
  const contents = await readExistingFile(filePath);
  if (contents === undefined) {
    return { playlistId, entries: [] };
  }

  let manifest;
  try {
    manifest = JSON.parse(contents.toString('utf8'));
  } catch {
    throw new Error(
      `Existing manifest for playlist ${playlistId} is invalid JSON.`,
    );
  }
  if (
    manifest === null ||
    typeof manifest !== 'object' ||
    !Array.isArray(manifest.entries)
  ) {
    throw new Error(`Existing manifest for playlist ${playlistId} is invalid.`);
  }
  return manifest;
};

export const synchronizePlaylist = async ({
  playlist,
  apiKey,
  dryRun = false,
  fetchImpl = globalThis.fetch,
  manifestPath = libraryPath(`playlists/${playlist.slug}/manifest.json`),
}) => {
  const items = await fetchPlaylistItems({
    playlistId: playlist.id,
    apiKey,
    fetchImpl,
  });
  const manifest = normalizePlaylistManifest(playlist.id, items);
  const previousManifest = await readManifest(manifestPath, playlist.id);
  const diff = diffPlaylistManifests(previousManifest, manifest);
  const write = await writeManifestAtomic(manifestPath, manifest, { dryRun });

  return { playlist, manifest, diff, write };
};

export const synchronizeCatalogPlaylists = async ({
  catalog,
  playlistSlugs = [],
  dryRun = false,
  environment = process.env,
  fetchImpl = globalThis.fetch,
  manifestPathForPlaylist = (playlist) =>
    libraryPath(`playlists/${playlist.slug}/manifest.json`),
  onResult = () => {},
}) => {
  const playlists = selectCatalogPlaylists(catalog, playlistSlugs);
  const apiKey = readYoutubeApiKey(environment);
  const results = [];

  for (const playlist of playlists) {
    const result = await synchronizePlaylist({
      playlist,
      apiKey,
      dryRun,
      fetchImpl,
      manifestPath: manifestPathForPlaylist(playlist),
    });
    results.push(result);
    onResult(result);
  }

  return results;
};

const sanitizePlaylistCheckError = (error, apiKey) => {
  const fallback = 'Remote playlist check failed.';
  const message =
    typeof error?.message === 'string'
      ? error.message.replace(/\s+/g, ' ').trim()
      : '';
  if (
    message.length === 0 ||
    message.length > 200 ||
    message.includes(apiKey) ||
    /https?:\/\//i.test(message) ||
    /[?&]/.test(message) ||
    /(?:^|\s)[^\s=]+=[^\s]+/.test(message)
  ) {
    return fallback;
  }
  return message;
};

export const checkCatalogPlaylists = async ({
  catalog,
  playlistSlugs = [],
  environment = process.env,
  fetchImpl = globalThis.fetch,
  manifestPathForPlaylist = (playlist) =>
    libraryPath(`playlists/${playlist.slug}/manifest.json`),
}) => {
  const playlists = selectCatalogPlaylists(catalog, playlistSlugs);
  const apiKey = readYoutubeApiKey(environment);
  const results = [];

  for (const playlist of playlists) {
    try {
      const result = await synchronizePlaylist({
        playlist,
        apiKey,
        dryRun: true,
        fetchImpl,
        manifestPath: manifestPathForPlaylist(playlist),
      });
      results.push({ playlist, result });
    } catch (error) {
      results.push({
        playlist,
        error: { message: sanitizePlaylistCheckError(error, apiKey) },
      });
    }
  }

  return results;
};

const availabilityLabel = (state) => {
  const privacy = state.privacyStatus ?? 'unknown privacy';
  return state.available
    ? `${privacy}, available`
    : `${privacy}, unavailable (${state.unavailableReason ?? 'unknown'})`;
};

export const formatPlaylistSyncReport = ({ playlist, diff, write }) => {
  const lines = [`${playlist.slug} (${playlist.id}):`];
  if (!write.changed) {
    lines.push('  no changes');
    return lines.join('\n');
  }

  for (const entry of diff.additions) {
    lines.push(
      `  added ${entry.videoId} at ${entry.position}: ${JSON.stringify(entry.title)}`,
    );
  }
  for (const entry of diff.removals) {
    lines.push(
      `  removed ${entry.videoId} from ${entry.position}: ${JSON.stringify(entry.title)}`,
    );
  }
  for (const move of diff.moves) {
    lines.push(`  moved ${move.videoId}: ${move.from} -> ${move.to}`);
  }
  for (const retitle of diff.retitles) {
    lines.push(
      `  retitled ${retitle.videoId}: ${JSON.stringify(retitle.from)} -> ${JSON.stringify(retitle.to)}`,
    );
  }
  for (const change of diff.privacyChanges) {
    lines.push(
      `  availability ${change.videoId}: ${availabilityLabel(change.from)} -> ${availabilityLabel(change.to)}`,
    );
  }
  if (isPlaylistDiffEmpty(diff)) {
    lines.push('  manifest serialization changed');
  }
  if (write.dryRun) {
    lines.push('  dry run; manifest not written');
  }

  return lines.join('\n');
};
