import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  buildLibraryStatus,
  captureCatalogVideos,
  captureDelayMs,
  checkLibrary,
  classifyTranscriptFailure,
  formatLibraryCheckReport,
  formatLibraryStatus,
  readStatusFrontmatter,
} from './lib/youtube-library-capture-status.mjs';
import {
  checkCatalogPlaylists,
  diffPlaylistManifests,
  fetchPlaylistItems,
  formatPlaylistSyncReport,
  isPlaylistDiffEmpty,
  libraryPath,
  loadCatalog,
  normalizePlaylistManifest,
  parseLibraryArgs,
  selectCatalogPlaylists,
  serializePlaylistManifest,
  synchronizeCatalogPlaylists,
  validateCatalog,
  writeManifestAtomic,
} from './lib/youtube-library-core.mjs';

const validCatalog = () => ({
  publication: 'source-only',
  authors: [
    {
      id: 'author',
      slug: 'author',
      displayName: 'Example Author',
    },
  ],
  playlists: [
    {
      id: 'playlist',
      slug: 'playlist',
      title: 'Example Playlist',
      transcriptLanguage: 'it',
      summaryLanguage: 'en',
    },
  ],
  relationships: [
    {
      authorId: 'author',
      playlistIds: ['playlist'],
    },
  ],
});

const playlistItem = ({
  videoId,
  position,
  title,
  description = 'Description',
  publishedAt = '2025-01-01T00:00:00Z',
  privacyStatus = 'public',
}) => {
  const contentDetails = { videoId };
  if (publishedAt !== undefined) {
    contentDetails.videoPublishedAt = publishedAt;
  }

  return {
    kind: 'youtube#playlistItem',
    etag: `volatile-${videoId}`,
    snippet: {
      publishedAt: '2026-07-20T00:00:00Z',
      title,
      description,
      position,
      resourceId: { kind: 'youtube#video', videoId },
      thumbnails: { default: { url: 'https://example.com/volatile.jpg' } },
    },
    contentDetails,
    status: { privacyStatus },
  };
};

const response = (payload, overrides = {}) => ({
  ok: true,
  status: 200,
  statusText: 'OK',
  json: async () => payload,
  ...overrides,
});

const availableEntry = (videoId, position, title = videoId) => ({
  videoId,
  position,
  title,
  publishedAt: '2025-01-01T00:00:00Z',
  privacyStatus: 'public',
  available: true,
});

const multiPlaylistCatalog = ({ secondIsMultiSpeaker = false } = {}) => {
  const catalog = validCatalog();
  const secondPlaylist = {
    ...catalog.playlists[0],
    id: 'second',
    slug: 'second',
    title: 'Second Playlist',
  };
  if (secondIsMultiSpeaker) {
    secondPlaylist.multiSpeaker = true;
  } else {
    catalog.relationships[0].playlistIds.push('second');
  }
  catalog.playlists.push(secondPlaylist);
  return catalog;
};

const writeFixture = async (filePath, contents) => {
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(
    filePath,
    Buffer.isBuffer(contents) || typeof contents === 'string'
      ? contents
      : `${JSON.stringify(contents, null, 2)}\n`,
    'utf8',
  );
};

const snapshotTree = async (root) => {
  const snapshot = [];
  const visit = async (directory, relativeDirectory = '.') => {
    const directoryStat = await stat(directory);
    snapshot.push({
      path: relativeDirectory,
      type: 'directory',
      mtimeMs: directoryStat.mtimeMs,
    });
    const entries = await readdir(directory, { withFileTypes: true });
    entries.sort((left, right) => left.name.localeCompare(right.name));
    for (const entry of entries) {
      const relativePath =
        relativeDirectory === '.'
          ? entry.name
          : path.join(relativeDirectory, entry.name);
      const entryPath = path.join(directory, entry.name);
      if (entry.isDirectory()) {
        await visit(entryPath, relativePath);
        continue;
      }
      const entryStat = await stat(entryPath);
      snapshot.push({
        path: relativePath,
        type: 'file',
        mtimeMs: entryStat.mtimeMs,
        contents: (await readFile(entryPath)).toString('base64'),
      });
    }
  };
  await visit(root);
  return snapshot;
};

const fixturePaths = (root) => ({
  manifestPathForPlaylist: (playlist) =>
    path.join(root, 'playlists', playlist.slug, 'manifest.json'),
  videoPathForFile: (videoId, fileName) =>
    path.join(root, 'videos', videoId, fileName),
  overviewPathForPlaylist: (playlist) =>
    path.join(root, 'playlists', playlist.slug, 'overview.md'),
  authorPathForAuthor: (author) =>
    path.join(root, 'authors', `${author.slug}.md`),
});

const writeManifestFixture = async (paths, playlist, entries) => {
  await writeFixture(paths.manifestPathForPlaylist(playlist), {
    playlistId: playlist.id,
    entries,
  });
};

const successfulTranscript = (videoId, title = `Fetched ${videoId}`) => ({
  metadata: {
    videoId,
    canonicalUrl: `https://www.youtube.com/watch?v=${videoId}`,
    title,
    channel: 'Fixture Channel',
    durationSeconds: 125,
  },
  requestedLanguage: 'it',
  availableLanguages: ['it-IT'],
  language: 'it-IT',
  kind: 'auto-generated',
  transcriptAvailable: true,
  segments: [
    { text: `Transcript for ${videoId}.`, offset: 0, duration: 5 },
    { text: 'A later thought.', offset: 65, duration: 4 },
  ],
});

const unavailableTranscript = (errorName, availableLanguages = ['en']) => ({
  metadata: {},
  requestedLanguage: 'it',
  availableLanguages,
  transcriptErrorName: errorName,
  transcriptAvailable: false,
  transcriptUnavailable: `${errorName}: fixture failure`,
  segments: [],
});

const fixedNow = () => new Date('2026-07-20T00:00:00.000Z');

test('loads and validates the committed source-only catalog', async () => {
  const catalog = await loadCatalog();

  assert.equal(catalog.publication, 'source-only');
  assert.equal(catalog.authors[0].id, 'antirez');
  assert.equal(catalog.playlists.length, 2);
});

test('catalog validation requires the publication boundary', () => {
  const catalog = validCatalog();
  catalog.publication = 'public';

  assert.throws(
    () => validateCatalog(catalog),
    /publication must be "source-only"/,
  );
});

test('catalog validation rejects credentials', () => {
  const catalog = validCatalog();
  catalog.youtubeApiKey = 'do-not-store-credentials';

  assert.throws(
    () => validateCatalog(catalog),
    /credentials must come from the environment/,
  );
});

test('catalog validation rejects broken relationships', () => {
  const catalog = validCatalog();
  catalog.relationships[0].playlistIds = ['missing'];

  assert.throws(
    () => validateCatalog(catalog),
    /references an unknown playlist/,
  );
});

test('catalog validation requires exactly one playlist attribution mode', () => {
  const catalog = multiPlaylistCatalog({ secondIsMultiSpeaker: true });
  assert.equal(validateCatalog(catalog), catalog);

  const orphan = structuredClone(catalog);
  delete orphan.playlists[1].multiSpeaker;
  assert.throws(
    () => validateCatalog(orphan),
    /Playlist second has no author relationship/,
  );

  for (const value of [false, 'true', 1, null, undefined]) {
    const invalidMarker = structuredClone(catalog);
    invalidMarker.playlists[1].multiSpeaker = value;
    assert.throws(
      () => validateCatalog(invalidMarker),
      /multiSpeaker must be true when present/,
    );
  }

  const conflicting = structuredClone(catalog);
  conflicting.relationships[0].playlistIds.push('second');
  assert.throws(
    () => validateCatalog(conflicting),
    /cannot have both an author relationship and multiSpeaker: true/,
  );
});

test('library paths cannot escape the fixed root', () => {
  assert.match(
    libraryPath('videos/8gg-oJr4dTY/transcript.md'),
    /src\/content\/youtube\/videos\/8gg-oJr4dTY\/transcript\.md$/,
  );
  assert.throws(() => libraryPath('../transcript.md'));
  assert.throws(() => libraryPath('/tmp/transcript.md'));
});

test('library CLI parsing supports check, sync, bounded capture modes, and strict status', () => {
  assert.deepEqual(parseLibraryArgs([]), { command: 'help' });
  assert.deepEqual(parseLibraryArgs(['check']), {
    command: 'check',
    playlistSlugs: [],
    json: false,
  });
  assert.deepEqual(
    parseLibraryArgs([
      'check',
      '--playlist',
      'second',
      '--json',
      '--playlist',
      'first',
    ]),
    {
      command: 'check',
      playlistSlugs: ['second', 'first'],
      json: true,
    },
  );
  assert.deepEqual(parseLibraryArgs(['sync']), {
    command: 'sync',
    playlistSlugs: [],
    dryRun: false,
  });
  assert.deepEqual(
    parseLibraryArgs([
      'sync',
      '--playlist',
      'second',
      '--dry-run',
      '--playlist',
      'first',
    ]),
    {
      command: 'sync',
      playlistSlugs: ['second', 'first'],
      dryRun: true,
    },
  );
  assert.deepEqual(parseLibraryArgs(['capture']), {
    command: 'capture',
    playlistSlugs: [],
    limit: undefined,
    retry: false,
    force: false,
  });
  assert.deepEqual(
    parseLibraryArgs([
      'capture',
      '--playlist',
      'second',
      '--limit',
      '2',
      '--retry',
    ]),
    {
      command: 'capture',
      playlistSlugs: ['second'],
      limit: 2,
      retry: true,
      force: false,
    },
  );
  assert.deepEqual(parseLibraryArgs(['status']), { command: 'status' });
  assert.throws(
    () => parseLibraryArgs(['sync', '--playlist']),
    /requires a value/,
  );
  assert.throws(
    () => parseLibraryArgs(['sync', '--api-key', 'secret']),
    (error) =>
      error.message.includes('Unknown sync option: --api-key') &&
      !error.message.includes('secret'),
  );
  assert.throws(
    () => parseLibraryArgs(['capture', '--limit']),
    /requires a value/,
  );
  for (const value of ['0', '-1', '1.5', 'nope', '999999999999999999999']) {
    assert.throws(
      () => parseLibraryArgs(['capture', '--limit', value]),
      /positive integer|requires a value/,
    );
  }
  assert.throws(
    () => parseLibraryArgs(['capture', '--force', '--retry', '--limit', '1']),
    /cannot be combined/,
  );
  assert.throws(
    () => parseLibraryArgs(['capture', '--force']),
    /requires at least one --playlist or --limit/,
  );
  assert.deepEqual(
    parseLibraryArgs(['capture', '--force', '--playlist', 'playlist']),
    {
      command: 'capture',
      playlistSlugs: ['playlist'],
      limit: undefined,
      retry: false,
      force: true,
    },
  );
  assert.throws(
    () => parseLibraryArgs(['capture', '--output=/tmp/secret']),
    (error) =>
      error.message.includes('Unknown capture option: --output') &&
      !error.message.includes('/tmp/secret'),
  );
  assert.throws(
    () => parseLibraryArgs(['status', '--credentials=secret']),
    (error) => !error.message.includes('secret'),
  );
  assert.throws(
    () => parseLibraryArgs(['status', '--json']),
    /does not accept options/,
  );
  assert.throws(
    () => parseLibraryArgs(['check', '--dry-run']),
    /Unknown check option: --dry-run/,
  );
  assert.throws(
    () => parseLibraryArgs(['check', '--api-key=secret']),
    (error) =>
      error.message.includes('Unknown check option: --api-key') &&
      !error.message.includes('secret'),
  );
  assert.throws(
    () => parseLibraryArgs(['check', 'playlist']),
    /Check does not accept positional arguments/,
  );
  assert.throws(
    () => parseLibraryArgs(['sync', '--json']),
    /Unknown sync option: --json/,
  );
  assert.throws(
    () => parseLibraryArgs(['--api-key=secret']),
    (error) =>
      error.message.includes('Unknown option: --api-key') &&
      !error.message.includes('secret'),
  );
});

test('playlist selection validates slugs and keeps catalog order', () => {
  const catalog = validCatalog();
  catalog.playlists.push({
    ...catalog.playlists[0],
    id: 'second',
    slug: 'second',
  });
  catalog.relationships[0].playlistIds.push('second');

  assert.deepEqual(selectCatalogPlaylists(catalog), catalog.playlists);
  assert.deepEqual(
    selectCatalogPlaylists(catalog, ['second', 'playlist', 'second']).map(
      (playlist) => playlist.slug,
    ),
    ['playlist', 'second'],
  );
  assert.throws(
    () => selectCatalogPlaylists(catalog, ['missing']),
    /Unknown playlist slug: missing/,
  );
});

test('normalizes public entries with video publication dates and stable fields', () => {
  const manifest = normalizePlaylistManifest('PL123', [
    playlistItem({
      videoId: 'video-b',
      position: 1,
      title: 'Second video',
    }),
    playlistItem({
      videoId: 'video-a',
      position: 0,
      title: 'First video',
    }),
  ]);

  assert.deepEqual(manifest, {
    playlistId: 'PL123',
    entries: [
      {
        videoId: 'video-a',
        position: 0,
        title: 'First video',
        publishedAt: '2025-01-01T00:00:00Z',
        privacyStatus: 'public',
        available: true,
      },
      {
        videoId: 'video-b',
        position: 1,
        title: 'Second video',
        publishedAt: '2025-01-01T00:00:00Z',
        privacyStatus: 'public',
        available: true,
      },
    ],
  });
  const serialized = JSON.stringify(manifest);
  assert.doesNotMatch(serialized, /etag|thumbnails|2026-07-20/);
});

test('omits a missing video publication date instead of using playlist-add time', () => {
  const manifest = normalizePlaylistManifest('PL123', [
    playlistItem({
      videoId: 'video-a',
      position: 0,
      title: 'No publication date',
      publishedAt: null,
    }),
  ]);

  assert.equal('publishedAt' in manifest.entries[0], false);
  assert.doesNotMatch(JSON.stringify(manifest), /2026-07-20/);
});

test('normalizes typed private placeholders as unavailable', () => {
  const [entry] = normalizePlaylistManifest('PL123', [
    playlistItem({
      videoId: 'private-id',
      position: 2,
      title: 'Private video',
      description: 'This video is private.',
      publishedAt: null,
      privacyStatus: 'private',
    }),
  ]).entries;

  assert.deepEqual(entry, {
    videoId: 'private-id',
    position: 2,
    title: 'Private video',
    privacyStatus: 'private',
    available: false,
    unavailableReason: 'private',
  });
});

test('normalizes only the conservative deleted-placeholder shape as unavailable', () => {
  const manifest = normalizePlaylistManifest('PL123', [
    playlistItem({
      videoId: 'deleted-id',
      position: 0,
      title: 'Deleted video',
      description: 'This video is unavailable.',
      publishedAt: null,
      privacyStatus: 'privacyStatusUnspecified',
    }),
    playlistItem({
      videoId: 'title-only-id',
      position: 1,
      title: 'Deleted video',
      description: 'A normal video with an unfortunate title.',
    }),
  ]);

  assert.deepEqual(manifest.entries[0], {
    videoId: 'deleted-id',
    position: 0,
    title: 'Deleted video',
    privacyStatus: 'privacyStatusUnspecified',
    available: false,
    unavailableReason: 'deleted',
  });
  assert.equal(manifest.entries[1].available, true);
});

test('fetches every playlistItems.list page with the required parameters', async () => {
  const requests = [];
  const first = playlistItem({
    videoId: 'first-id',
    position: 0,
    title: 'First',
  });
  const second = playlistItem({
    videoId: 'second-id',
    position: 1,
    title: 'Second',
  });
  const pages = [
    response({ items: [first], nextPageToken: 'next-page' }),
    response({ items: [second] }),
  ];
  const fetchImpl = async (input) => {
    requests.push(new URL(input));
    return pages[requests.length - 1];
  };

  const items = await fetchPlaylistItems({
    playlistId: 'PL123',
    apiKey: 'test-key',
    fetchImpl,
  });

  assert.deepEqual(items, [first, second]);
  assert.equal(requests.length, 2);
  for (const request of requests) {
    assert.equal(request.origin, 'https://www.googleapis.com');
    assert.equal(request.pathname, '/youtube/v3/playlistItems');
    assert.equal(
      request.searchParams.get('part'),
      'snippet,contentDetails,status',
    );
    assert.equal(request.searchParams.get('maxResults'), '50');
    assert.equal(request.searchParams.get('playlistId'), 'PL123');
    assert.equal(request.searchParams.get('key'), 'test-key');
  }
  assert.equal(requests[0].searchParams.has('pageToken'), false);
  assert.equal(requests[1].searchParams.get('pageToken'), 'next-page');
});

test('sanitizes a non-OK second-page API error', async () => {
  const apiKey = 'super-secret-key';
  let requestCount = 0;
  const fetchImpl = async () => {
    requestCount += 1;
    if (requestCount === 1) {
      return response({ items: [], nextPageToken: 'next-page' });
    }
    return response(
      {
        error: {
          message: `Quota URL https://example.test/list?part=snippet&key=${apiKey}`,
          errors: [{ reason: 'quotaExceeded' }],
        },
      },
      { ok: false, status: 403, statusText: 'Forbidden' },
    );
  };

  await assert.rejects(
    fetchPlaylistItems({ playlistId: 'PL123', apiKey, fetchImpl }),
    (error) => {
      assert.equal(
        error.message,
        'playlistItems.list failed for playlist PL123 page 2: HTTP 403 (quotaExceeded)',
      );
      assert.doesNotMatch(error.stack, /super-secret-key|key=|\?part=/);
      return true;
    },
  );
});

test('diffs additions, removals, moves, retitles, and availability changes', () => {
  const previous = {
    playlistId: 'PL123',
    entries: [
      availableEntry('move-id', 0),
      availableEntry('remove-id', 1),
      availableEntry('retitle-id', 2, 'Old title'),
      availableEntry('privacy-id', 3),
    ],
  };
  const current = {
    playlistId: 'PL123',
    entries: [
      availableEntry('add-id', 0),
      availableEntry('retitle-id', 1, 'New title'),
      availableEntry('move-id', 2),
      {
        videoId: 'privacy-id',
        position: 3,
        title: 'privacy-id',
        privacyStatus: 'private',
        available: false,
        unavailableReason: 'private',
      },
    ],
  };

  const diff = diffPlaylistManifests(previous, current);
  assert.deepEqual(
    diff.additions.map((entry) => entry.videoId),
    ['add-id'],
  );
  assert.deepEqual(
    diff.removals.map((entry) => entry.videoId),
    ['remove-id'],
  );
  assert.deepEqual(diff.moves, [
    { videoId: 'move-id', from: 0, to: 2 },
    { videoId: 'retitle-id', from: 2, to: 1 },
  ]);
  assert.deepEqual(diff.retitles, [
    { videoId: 'retitle-id', from: 'Old title', to: 'New title' },
  ]);
  assert.equal(diff.privacyChanges[0].videoId, 'privacy-id');
  assert.equal(diff.privacyChanges[0].from.available, true);
  assert.deepEqual(diff.privacyChanges[0].to, {
    privacyStatus: 'private',
    available: false,
    unavailableReason: 'private',
  });

  const emptyDiff = diffPlaylistManifests(current, structuredClone(current));
  assert.equal(isPlaylistDiffEmpty(emptyDiff), true);
  assert.deepEqual(emptyDiff, {
    additions: [],
    removals: [],
    moves: [],
    retitles: [],
    privacyChanges: [],
  });
});

test('serializes manifests deterministically with one trailing newline', () => {
  const manifest = {
    playlistId: 'PL123',
    entries: [availableEntry('video-id', 0, 'Video')],
  };
  const expected = `{
  "playlistId": "PL123",
  "entries": [
    {
      "videoId": "video-id",
      "position": 0,
      "title": "Video",
      "publishedAt": "2025-01-01T00:00:00Z",
      "privacyStatus": "public",
      "available": true
    }
  ]
}
`;

  assert.equal(serializePlaylistManifest(manifest), expected);
  assert.equal(serializePlaylistManifest(structuredClone(manifest)), expected);
});

test('atomically creates and replaces manifests while identical bytes are a no-op', async (t) => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'youtube-library-'));
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const target = path.join(tempDir, 'playlist', 'manifest.json');
  const firstManifest = {
    playlistId: 'PL123',
    entries: [availableEntry('video-id', 0)],
  };

  const created = await writeManifestAtomic(target, firstManifest);
  assert.deepEqual(
    {
      changed: created.changed,
      written: created.written,
      existed: created.existed,
      dryRun: created.dryRun,
    },
    { changed: true, written: true, existed: false, dryRun: false },
  );
  const originalContents = await readFile(target, 'utf8');
  const originalStat = await stat(target);
  await new Promise((resolve) => setTimeout(resolve, 30));

  const unchanged = await writeManifestAtomic(target, firstManifest);
  const unchangedStat = await stat(target);
  assert.equal(unchanged.changed, false);
  assert.equal(unchanged.written, false);
  assert.equal(await readFile(target, 'utf8'), originalContents);
  assert.equal(unchangedStat.mtimeMs, originalStat.mtimeMs);

  const replacement = {
    ...firstManifest,
    entries: [availableEntry('replacement-id', 0)],
  };
  const replaced = await writeManifestAtomic(target, replacement);
  assert.equal(replaced.changed, true);
  assert.equal(replaced.written, true);
  assert.equal(
    await readFile(target, 'utf8'),
    serializePlaylistManifest(replacement),
  );
  assert.deepEqual(await readdir(path.dirname(target)), ['manifest.json']);
});

test('dry-run fetches, normalizes, diffs, and reports without writing', async (t) => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'youtube-library-'));
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const target = path.join(tempDir, 'playlist', 'manifest.json');
  const catalog = validCatalog();
  const reports = [];

  const results = await synchronizeCatalogPlaylists({
    catalog,
    dryRun: true,
    environment: { YOUTUBE_API_KEY: 'fixture-key' },
    fetchImpl: async () =>
      response({
        items: [
          playlistItem({
            videoId: 'video-id',
            position: 0,
            title: 'Video',
          }),
        ],
      }),
    manifestPathForPlaylist: () => target,
    onResult: (result) => reports.push(formatPlaylistSyncReport(result)),
  });

  assert.equal(results[0].diff.additions.length, 1);
  assert.equal(results[0].write.changed, true);
  assert.equal(results[0].write.written, false);
  assert.match(reports[0], /added video-id/);
  assert.match(reports[0], /dry run; manifest not written/);
  await assert.rejects(readFile(target, 'utf8'), { code: 'ENOENT' });
});

test('missing API key prevents requests after playlist selection', async () => {
  const catalog = validCatalog();
  let requestCount = 0;
  const fetchImpl = async () => {
    requestCount += 1;
    return response({ items: [] });
  };

  await assert.rejects(
    synchronizeCatalogPlaylists({ catalog, environment: {}, fetchImpl }),
    /YOUTUBE_API_KEY is required/,
  );
  assert.equal(requestCount, 0);

  await assert.rejects(
    synchronizeCatalogPlaylists({
      catalog,
      playlistSlugs: ['missing'],
      environment: {},
      fetchImpl,
    }),
    /Unknown playlist slug: missing/,
  );
  assert.equal(requestCount, 0);
});

test('unchanged sync reporting is explicit', () => {
  const report = formatPlaylistSyncReport({
    playlist: { id: 'PL123', slug: 'playlist' },
    diff: {
      additions: [],
      removals: [],
      moves: [],
      retitles: [],
      privacyChanges: [],
    },
    write: { changed: false, dryRun: false },
  });

  assert.equal(report, 'playlist (PL123):\n  no changes');
});

test('check combines changed and no-op remote results with selected local status deterministically', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-check-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = multiPlaylistCatalog({ secondIsMultiSpeaker: true });
  const firstEntries = [
    availableEntry('old-video', 0, 'Old title'),
    availableEntry('missing-summary', 1, 'Missing summary'),
    availableEntry('pending-video', 2, 'Pending video'),
    availableEntry('privacy-video', 3, 'Privacy video'),
    {
      videoId: 'manifest-unavailable',
      position: 4,
      title: 'Private video',
      privacyStatus: 'private',
      available: false,
      unavailableReason: 'private',
    },
  ];
  const secondEntries = [availableEntry('second-video', 0, 'Second video')];
  await writeManifestFixture(paths, catalog.playlists[0], firstEntries);
  await writeManifestFixture(paths, catalog.playlists[1], secondEntries);
  for (const videoId of ['old-video', 'missing-summary', 'second-video']) {
    await writeFixture(
      paths.videoPathForFile(videoId, 'transcript.md'),
      `transcript ${videoId}`,
    );
  }
  await writeFixture(
    paths.videoPathForFile('old-video', 'summary.md'),
    '---\nstatus: draft\n---\n',
  );
  await writeFixture(
    paths.videoPathForFile('second-video', 'summary.md'),
    '---\nstatus: reviewed\n---\n',
  );
  await writeFixture(paths.videoPathForFile('privacy-video', 'metadata.json'), {
    videoId: 'privacy-video',
    unavailable: { errorName: 'LanguageUnavailable', detail: 'fixture' },
  });
  await writeFixture(
    paths.overviewPathForPlaylist(catalog.playlists[0]),
    '---\ncoveredVideoIds: [old-video]\n---\n',
  );
  await writeFixture(
    paths.authorPathForAuthor(catalog.authors[0]),
    '---\ncoveredVideoIds: [old-video]\n---\n',
  );

  const remoteItems = new Map([
    [
      'playlist',
      [
        playlistItem({ videoId: 'new-video', position: 0, title: 'New video' }),
        playlistItem({
          videoId: 'old-video',
          position: 1,
          title: 'New title',
        }),
        playlistItem({
          videoId: 'missing-summary',
          position: 2,
          title: 'Missing summary',
        }),
        playlistItem({
          videoId: 'privacy-video',
          position: 3,
          title: 'Privacy video',
          publishedAt: null,
          privacyStatus: 'private',
        }),
        playlistItem({
          videoId: 'manifest-unavailable',
          position: 4,
          title: 'Private video',
          publishedAt: null,
          privacyStatus: 'private',
        }),
      ],
    ],
    [
      'second',
      [
        playlistItem({
          videoId: 'second-video',
          position: 0,
          title: 'Second video',
        }),
      ],
    ],
  ]);
  const requestedPlaylistIds = [];
  const fetchImpl = async (input) => {
    const playlistId = new URL(input).searchParams.get('playlistId');
    requestedPlaylistIds.push(playlistId);
    return response({ items: remoteItems.get(playlistId) });
  };
  const before = await snapshotTree(root);
  const status = await buildLibraryStatus({ catalog, ...paths });
  assert.deepEqual(
    status.playlists.map((playlistStatus) => playlistStatus.playlist.slug),
    ['playlist', 'second'],
  );
  assert.deepEqual(
    status.authors[0].playlists.map((playlist) => playlist.slug),
    ['playlist'],
  );
  const statusHuman = formatLibraryStatus(status);
  assert.match(statusHuman, /Playlist second \(Second Playlist\):/);
  assert.match(
    statusHuman,
    /Author author \(Example Author\):\n {2}playlists: playlist\n/,
  );
  assert.doesNotMatch(statusHuman, /playlists: playlist, second/);
  const options = {
    catalog,
    playlistSlugs: ['second', 'playlist'],
    environment: { YOUTUBE_API_KEY: 'fixture-key' },
    fetchImpl,
    ...paths,
  };

  const first = await checkLibrary(options);
  const second = await checkLibrary(options);
  const selected = await checkLibrary({
    ...options,
    playlistSlugs: ['second'],
  });

  assert.equal(first.exitCode, 0);
  assert.deepEqual(first, second);
  assert.deepEqual(requestedPlaylistIds, [
    'playlist',
    'second',
    'playlist',
    'second',
    'second',
  ]);
  assert.deepEqual(
    first.report.playlists.map((playlist) => playlist.slug),
    ['playlist', 'second'],
  );
  assert.equal(first.report.playlists[0].firstSync, false);
  assert.deepEqual(
    first.report.playlists[0].remote.diff.additions.map(
      (entry) => entry.videoId,
    ),
    ['new-video'],
  );
  assert.deepEqual(
    first.report.playlists[0].remote.diff.removals.map(
      (entry) => entry.videoId,
    ),
    ['pending-video'],
  );
  assert.equal(first.report.playlists[0].remote.diff.moves.length, 2);
  assert.equal(first.report.playlists[0].remote.diff.retitles.length, 1);
  assert.equal(first.report.playlists[0].remote.diff.privacyChanges.length, 1);
  assert.equal(first.report.playlists[1].remote.changed, false);
  assert.deepEqual(first.report.playlists[0].local, {
    synced: true,
    totals: { entries: 5, available: 4, manifestUnavailable: 1 },
    transcripts: { captured: 2, pending: 1, unavailable: 1 },
    unavailableVideoIds: ['privacy-video'],
    summaries: { missing: 1, draft: 1, reviewed: 0 },
    overview: { state: 'current', missingVideoIds: [] },
  });
  assert.deepEqual(first.report.authors, [
    {
      slug: 'author',
      playlists: ['playlist'],
      videoTotal: 4,
      transcripts: { captured: 2, pending: 1, unavailable: 1 },
      synthesis: { state: 'current', missingVideoIds: [] },
    },
  ]);
  assert.deepEqual(
    selected.report.playlists.map((playlist) => playlist.slug),
    ['second'],
  );
  assert.deepEqual(selected.report.authors, []);
  assert.deepEqual(first.report.summary, {
    remoteChanges: {
      playlists: 1,
      firstSyncs: 0,
      additions: 1,
      removals: 1,
      moves: 2,
      retitles: 1,
      availabilityChanges: 1,
    },
    pendingTranscripts: 1,
    missingSummaries: 1,
    staleSyntheses: 1,
    errors: 0,
  });

  const human = formatLibraryCheckReport(first.report);
  assert.match(human, /YouTube library check \(read-only\)/);
  assert.match(human, /Remote: changes are what a later sync would apply/);
  assert.match(human, /Local: state comes from committed manifests/);
  assert.match(
    human,
    /1 additions; 1 removals; 2 moves; 1 retitles; 1 availability changes/,
  );
  assert.match(
    human,
    /local transcripts: 2 captured; 1 pending; 1 unavailable-recorded/,
  );
  assert.match(human, /Playlist second \(second\):/);
  assert.match(
    human,
    /Author author:\n {2}local related playlists: playlist\n/,
  );
  assert.doesNotMatch(human, /local related playlists:.*second/);
  const json = JSON.stringify(first.report, null, 2);
  assert.match(json, /"slug": "second"/);
  assert.doesNotMatch(json, /checkedAt|timestamp|fixture-key/);
  assert.deepEqual(await snapshotTree(root), before);
});

test('check reports first sync without creating a manifest directory', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-check-first-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = validCatalog();
  const before = await snapshotTree(root);

  const result = await checkLibrary({
    catalog,
    environment: { YOUTUBE_API_KEY: 'fixture-key' },
    fetchImpl: async () =>
      response({
        items: [
          playlistItem({
            videoId: 'first-video',
            position: 0,
            title: 'First video',
          }),
        ],
      }),
    ...paths,
  });

  assert.equal(result.exitCode, 0);
  assert.equal(result.report.playlists[0].firstSync, true);
  assert.deepEqual(result.report.playlists[0].local, { synced: false });
  assert.equal(result.report.playlists[0].remote.changed, true);
  assert.deepEqual(result.report.summary.remoteChanges, {
    playlists: 1,
    firstSyncs: 1,
    additions: 1,
    removals: 0,
    moves: 0,
    retitles: 0,
    availabilityChanges: 0,
  });
  assert.match(formatLibraryCheckReport(result.report), /first sync/);
  assert.deepEqual(await snapshotTree(root), before);
});

test('check returns a sanitized useful partial report and continues in catalog order', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-check-partial-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = multiPlaylistCatalog();
  for (const playlist of catalog.playlists) {
    await writeManifestFixture(paths, playlist, [
      availableEntry(`${playlist.slug}-video`, 0, `${playlist.slug} video`),
    ]);
  }
  const apiKey = 'partial-secret-key';
  const requestedPlaylistIds = [];
  const before = await snapshotTree(root);

  const result = await checkLibrary({
    catalog,
    environment: { YOUTUBE_API_KEY: apiKey },
    fetchImpl: async (input) => {
      const playlistId = new URL(input).searchParams.get('playlistId');
      requestedPlaylistIds.push(playlistId);
      if (playlistId === 'playlist') {
        return response(
          {
            error: {
              message: `Request https://example.test/list?key=${apiKey}`,
            },
          },
          { ok: false, status: 500, statusText: 'Internal Server Error' },
        );
      }
      return response({
        items: [
          playlistItem({
            videoId: 'second-video',
            position: 0,
            title: 'second video',
          }),
        ],
      });
    },
    ...paths,
  });

  assert.equal(result.exitCode, 2);
  assert.deepEqual(requestedPlaylistIds, ['playlist', 'second']);
  assert.equal(result.report.playlists[0].remote.fetched, false);
  assert.equal(result.report.playlists[1].remote.fetched, true);
  assert.equal(result.report.summary.errors, 1);
  const json = JSON.stringify(result.report);
  assert.doesNotMatch(json, /partial-secret-key|https?:\/\/|[?&]key=|stack/i);
  assert.match(
    formatLibraryCheckReport(result.report),
    /remote: error: playlistItems\.list failed for playlist playlist page 1: HTTP 500/,
  );
  assert.deepEqual(await snapshotTree(root), before);
});

test('check sanitizes unexpected per-playlist errors without aborting later playlists', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-check-error-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const catalog = multiPlaylistCatalog();
  const apiKey = 'unexpected-secret';
  const before = await snapshotTree(root);

  const results = await checkCatalogPlaylists({
    catalog,
    environment: { YOUTUBE_API_KEY: apiKey },
    fetchImpl: async () => response({ items: [] }),
    manifestPathForPlaylist: (playlist) => {
      if (playlist.slug === 'playlist') {
        throw new Error(
          `GET https://example.test/list?part=snippet&key=${apiKey}\n    at fixture`,
        );
      }
      return path.join(root, playlist.slug, 'manifest.json');
    },
  });

  assert.deepEqual(results[0], {
    playlist: catalog.playlists[0],
    error: { message: 'Remote playlist check failed.' },
  });
  assert.equal(results[1].result.write.written, false);
  assert.equal(results[1].result.write.existed, false);
  assert.doesNotMatch(
    JSON.stringify(results),
    /unexpected-secret|https?:\/\/|stack/i,
  );
  assert.deepEqual(await snapshotTree(root), before);
});

test('check fatal preflight and local report failures produce exit 1 without remote requests', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-check-fatal-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = validCatalog();
  let requests = 0;
  const fetchImpl = async () => {
    requests += 1;
    return response({ items: [] });
  };

  await assert.rejects(
    checkLibrary({ catalog, environment: {}, fetchImpl, ...paths }),
    /YOUTUBE_API_KEY is required/,
  );
  assert.equal(requests, 0);

  await writeFixture(paths.manifestPathForPlaylist(catalog.playlists[0]), '{');
  await assert.rejects(
    checkLibrary({
      catalog,
      environment: { YOUTUBE_API_KEY: 'fixture-key' },
      fetchImpl,
      ...paths,
    }),
    /Manifest for playlist playlist contains invalid JSON/,
  );
  assert.equal(requests, 0);

  const cli = spawnSync(
    process.execPath,
    ['.agents/scripts/youtube-library.mjs', 'check', '--json'],
    {
      cwd: process.cwd(),
      encoding: 'utf8',
      env: { ...process.env, YOUTUBE_API_KEY: '' },
    },
  );
  assert.equal(cli.status, 1);
  assert.equal(cli.stdout, '');
  assert.match(cli.stderr, /YOUTUBE_API_KEY is required/);
});

test('classifies only known durable failures as unavailable', () => {
  for (const errorName of [
    'YoutubeTranscriptVideoUnavailableError',
    'YoutubeTranscriptDisabledError',
    'YoutubeTranscriptNotAvailableError',
    'YoutubeTranscriptNotAvailableLanguageError',
    'LanguageUnavailable',
  ]) {
    assert.deepEqual(classifyTranscriptFailure(errorName), {
      outcome: 'unavailable',
      stop: false,
    });
  }
  assert.deepEqual(
    classifyTranscriptFailure('YoutubeTranscriptTooManyRequestError'),
    { outcome: 'transient', stop: true },
  );
  assert.deepEqual(classifyTranscriptFailure('UnknownNetworkError'), {
    outcome: 'transient',
    stop: false,
  });
  for (const errorName of [
    'YoutubeTranscriptInvalidLangError',
    'YoutubeTranscriptInvalidVideoIdError',
  ]) {
    assert.deepEqual(classifyTranscriptFailure(errorName), {
      outcome: 'fatal',
      stop: true,
    });
  }
});

test('captures a globally deduped deterministic queue sequentially and idempotently', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-capture-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = multiPlaylistCatalog();
  await writeManifestFixture(paths, catalog.playlists[0], [
    availableEntry('shared-video', 1, 'Shared manifest title'),
    availableEntry('first-video', 0, 'First manifest title'),
    {
      ...availableEntry('private-video', 2),
      available: false,
      unavailableReason: 'private',
    },
  ]);
  await writeManifestFixture(paths, catalog.playlists[1], [
    availableEntry('second-video', 0, 'Second manifest title'),
    availableEntry('shared-video', 1, 'Duplicate title'),
  ]);
  const fetchedVideoIds = [];
  const sleeps = [];

  const first = await captureCatalogVideos({
    catalog,
    ...paths,
    fetchVideoImpl: async (input, options) => {
      const videoId = new URL(input).searchParams.get('v');
      fetchedVideoIds.push(videoId);
      assert.deepEqual(options, { lang: 'it', strictLanguage: true });
      return successfulTranscript(videoId);
    },
    sleep: async (milliseconds) => sleeps.push(milliseconds),
    now: fixedNow,
  });

  assert.equal(first.exitCode, 0);
  assert.deepEqual(fetchedVideoIds, [
    'first-video',
    'shared-video',
    'second-video',
  ]);
  assert.deepEqual(sleeps, [captureDelayMs, captureDelayMs]);
  const transcript = await readFile(
    paths.videoPathForFile('first-video', 'transcript.md'),
    'utf8',
  );
  assert.match(transcript, /^---\ntitle: "First manifest title"/);
  assert.match(
    transcript,
    /sourceUrl: "https:\/\/www\.youtube\.com\/watch\?v=first-video"/,
  );
  assert.match(transcript, /capturedAt: "2026-07-20T00:00:00.000Z"/);
  assert.match(transcript, /channel: "Fixture Channel"/);
  assert.match(transcript, /language: "it-IT"/);
  assert.match(transcript, /kind: "auto-generated"/);
  assert.match(transcript, /durationSeconds: 125/);
  assert.doesNotMatch(transcript, /summarySlug|series|episode/);
  assert.match(
    transcript,
    /## Transcript\n\n\[00:00:00\] Transcript for first-video\. A later thought\./,
  );
  const sharedTranscript = await readFile(
    paths.videoPathForFile('shared-video', 'transcript.md'),
    'utf8',
  );
  assert.match(sharedTranscript, /^---\ntitle: "Shared manifest title"/);
  assert.doesNotMatch(sharedTranscript, /Duplicate title|Fetched shared-video/);
  assert.deepEqual(
    JSON.parse(
      await readFile(
        paths.videoPathForFile('first-video', 'metadata.json'),
        'utf8',
      ),
    ),
    {
      videoId: 'first-video',
      capturedAt: '2026-07-20T00:00:00.000Z',
      requestedLanguage: 'it',
      language: 'it-IT',
      kind: 'auto-generated',
    },
  );

  let repeatFetches = 0;
  const second = await captureCatalogVideos({
    catalog,
    ...paths,
    fetchVideoImpl: async () => {
      repeatFetches += 1;
      return successfulTranscript('unexpected');
    },
    sleep: async () => {},
    now: fixedNow,
  });
  assert.equal(second.exitCode, 0);
  assert.equal(second.queued, 0);
  assert.equal(repeatFetches, 0);
});

test('capture remains playlist-based for multi-speaker playlists and dash-leading video IDs', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-capture-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = multiPlaylistCatalog({ secondIsMultiSpeaker: true });
  await writeManifestFixture(paths, catalog.playlists[0], [
    availableEntry('first-video', 0),
  ]);
  await writeManifestFixture(paths, catalog.playlists[1], [
    availableEntry('-QFHIoCo-Ko', 0),
    availableEntry('second-b', 1),
  ]);
  const fetchedVideoIds = [];

  const result = await captureCatalogVideos({
    catalog,
    playlistSlugs: ['second'],
    limit: 1,
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      fetchedVideoIds.push(videoId);
      return successfulTranscript(videoId);
    },
    sleep: async () => {},
    now: fixedNow,
  });

  assert.equal(result.exitCode, 0);
  assert.equal(result.queued, 1);
  assert.deepEqual(fetchedVideoIds, ['-QFHIoCo-Ko']);
  assert.match(
    await readFile(
      paths.videoPathForFile('-QFHIoCo-Ko', 'transcript.md'),
      'utf8',
    ),
    /sourceUrl: "https:\/\/www\.youtube\.com\/watch\?v=-QFHIoCo-Ko"/,
  );
  await assert.rejects(
    readFile(paths.videoPathForFile('first-video', 'transcript.md'), 'utf8'),
    { code: 'ENOENT' },
  );
});

test('capture fails before fetching for missing manifests and conflicting languages', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-capture-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = multiPlaylistCatalog();
  let fetches = 0;
  const fetchVideoImpl = async () => {
    fetches += 1;
    return successfulTranscript('unexpected');
  };

  await assert.rejects(
    captureCatalogVideos({
      catalog,
      ...paths,
      fetchVideoImpl,
      sleep: async () => {},
      now: fixedNow,
    }),
    /Playlist playlist is not synced.*Run `npm run youtube:library -- sync --playlist playlist` first/,
  );
  assert.equal(fetches, 0);

  await writeManifestFixture(paths, catalog.playlists[0], [
    availableEntry('shared-video', 0),
  ]);
  catalog.playlists[1].transcriptLanguage = 'en';
  await writeManifestFixture(paths, catalog.playlists[1], [
    availableEntry('shared-video', 0),
  ]);
  await assert.rejects(
    captureCatalogVideos({
      catalog,
      ...paths,
      fetchVideoImpl,
      sleep: async () => {},
      now: fixedNow,
    }),
    /Conflicting transcript languages for video shared-video: playlist=it, second=en/,
  );
  assert.equal(fetches, 0);
});

test('default, retry, and force modes have distinct derived-state selection', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-capture-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = validCatalog();
  await writeManifestFixture(paths, catalog.playlists[0], [
    availableEntry('captured-video', 0),
    availableEntry('unavailable-video', 1),
    availableEntry('pending-video', 2),
  ]);
  await writeFixture(
    paths.videoPathForFile('captured-video', 'transcript.md'),
    'existing transcript',
  );
  await writeFixture(
    paths.videoPathForFile('unavailable-video', 'metadata.json'),
    {
      videoId: 'unavailable-video',
      attemptedAt: '2026-07-19T00:00:00.000Z',
      requestedLanguage: 'it',
      availableLanguages: [],
      unavailable: {
        errorName: 'YoutubeTranscriptDisabledError',
        detail: 'disabled',
      },
    },
  );

  await assert.rejects(
    captureCatalogVideos({ catalog, force: true, retry: true, ...paths }),
    /cannot be combined/,
  );
  await assert.rejects(
    captureCatalogVideos({ catalog, force: true, ...paths }),
    /requires at least one --playlist or --limit/,
  );

  const defaultFetches = [];
  const initial = await captureCatalogVideos({
    catalog,
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      defaultFetches.push(videoId);
      return successfulTranscript(videoId);
    },
    sleep: async () => {},
    now: fixedNow,
  });
  assert.equal(initial.exitCode, 0);
  assert.deepEqual(defaultFetches, ['pending-video']);

  const retryFetches = [];
  const retried = await captureCatalogVideos({
    catalog,
    retry: true,
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      retryFetches.push(videoId);
      return successfulTranscript(videoId);
    },
    sleep: async () => {},
    now: fixedNow,
  });
  assert.equal(retried.exitCode, 0);
  assert.deepEqual(retryFetches, ['unavailable-video']);

  const warnings = [];
  const forceFetches = [];
  const forced = await captureCatalogVideos({
    catalog,
    force: true,
    playlistSlugs: ['playlist'],
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      forceFetches.push(videoId);
      return successfulTranscript(videoId, `Forced ${videoId}`);
    },
    sleep: async () => {},
    now: fixedNow,
    onWarning: (warning) => warnings.push(warning),
  });
  assert.equal(forced.exitCode, 0);
  assert.deepEqual(forceFetches, [
    'captured-video',
    'unavailable-video',
    'pending-video',
  ]);
  assert.deepEqual(warnings, [
    'WARNING: --force will overwrite 3 existing transcripts.',
  ]);
});

test('all persisted unavailable failures write metadata only and successful retry replaces it', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-capture-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = validCatalog();
  const errorNames = [
    'YoutubeTranscriptVideoUnavailableError',
    'YoutubeTranscriptDisabledError',
    'YoutubeTranscriptNotAvailableError',
    'YoutubeTranscriptNotAvailableLanguageError',
    'LanguageUnavailable',
  ];
  const entries = errorNames.map((errorName, position) =>
    availableEntry(`video-${position}`, position, errorName),
  );
  await writeManifestFixture(paths, catalog.playlists[0], entries);

  const unavailable = await captureCatalogVideos({
    catalog,
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      const index = Number(videoId.slice('video-'.length));
      return unavailableTranscript(errorNames[index]);
    },
    sleep: async () => {},
    now: fixedNow,
  });
  assert.equal(unavailable.exitCode, 2);
  assert.equal(unavailable.results.length, errorNames.length);

  for (const [index, errorName] of errorNames.entries()) {
    const videoId = `video-${index}`;
    assert.deepEqual(
      JSON.parse(
        await readFile(
          paths.videoPathForFile(videoId, 'metadata.json'),
          'utf8',
        ),
      ),
      {
        videoId,
        attemptedAt: '2026-07-20T00:00:00.000Z',
        requestedLanguage: 'it',
        availableLanguages: ['en'],
        unavailable: {
          errorName,
          detail: `${errorName}: fixture failure`,
        },
      },
    );
    await assert.rejects(
      readFile(paths.videoPathForFile(videoId, 'transcript.md'), 'utf8'),
      { code: 'ENOENT' },
    );
  }

  let defaultFetches = 0;
  const skipped = await captureCatalogVideos({
    catalog,
    ...paths,
    fetchVideoImpl: async () => {
      defaultFetches += 1;
      return successfulTranscript('unexpected');
    },
    sleep: async () => {},
    now: fixedNow,
  });
  assert.equal(skipped.queued, 0);
  assert.equal(defaultFetches, 0);

  const retried = await captureCatalogVideos({
    catalog,
    retry: true,
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      return successfulTranscript(videoId);
    },
    sleep: async () => {},
    now: fixedNow,
  });
  assert.equal(retried.exitCode, 0);
  assert.equal(retried.results.length, errorNames.length);
  for (let index = 0; index < errorNames.length; index += 1) {
    const metadata = JSON.parse(
      await readFile(
        paths.videoPathForFile(`video-${index}`, 'metadata.json'),
        'utf8',
      ),
    );
    assert.equal(metadata.capturedAt, '2026-07-20T00:00:00.000Z');
    assert.equal('unavailable' in metadata, false);
  }
});

test('transient failures write nothing, throttling stops the remaining queue, and delay stays bounded', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-capture-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = validCatalog();
  const videoIds = [
    'network-video',
    'empty-video',
    'rate-video',
    'later-video',
  ];
  await writeManifestFixture(
    paths,
    catalog.playlists[0],
    videoIds.map((videoId, position) => availableEntry(videoId, position)),
  );
  const fetches = [];
  const sleeps = [];

  const result = await captureCatalogVideos({
    catalog,
    ...paths,
    fetchVideoImpl: async (input) => {
      const videoId = new URL(input).searchParams.get('v');
      fetches.push(videoId);
      if (videoId === 'network-video') {
        throw new Error('socket reset');
      }
      if (videoId === 'empty-video') {
        return { ...successfulTranscript(videoId), segments: [] };
      }
      return unavailableTranscript('YoutubeTranscriptTooManyRequestError');
    },
    sleep: async (milliseconds) => sleeps.push(milliseconds),
    now: fixedNow,
  });

  assert.equal(result.exitCode, 2);
  assert.equal(result.remaining, 1);
  assert.deepEqual(fetches, ['network-video', 'empty-video', 'rate-video']);
  assert.deepEqual(sleeps, [captureDelayMs, captureDelayMs]);
  assert.deepEqual(
    result.results.map((entry) => entry.outcome),
    ['transient', 'transient', 'transient'],
  );
  for (const videoId of videoIds) {
    await assert.rejects(
      readFile(paths.videoPathForFile(videoId, 'metadata.json'), 'utf8'),
      { code: 'ENOENT' },
    );
    await assert.rejects(
      readFile(paths.videoPathForFile(videoId, 'transcript.md'), 'utf8'),
      { code: 'ENOENT' },
    );
  }
});

test('fatal typed transcript errors stop with exit 1 and no writes', async (t) => {
  for (const [caseIndex, errorName] of [
    'YoutubeTranscriptInvalidLangError',
    'YoutubeTranscriptInvalidVideoIdError',
  ].entries()) {
    const root = await mkdtemp(
      path.join(os.tmpdir(), `youtube-fatal-${caseIndex}-`),
    );
    t.after(() => rm(root, { recursive: true, force: true }));
    const paths = fixturePaths(root);
    const catalog = validCatalog();
    await writeManifestFixture(paths, catalog.playlists[0], [
      availableEntry('fatal-video', 0),
      availableEntry('later-video', 1),
    ]);
    let fetches = 0;
    const result = await captureCatalogVideos({
      catalog,
      ...paths,
      fetchVideoImpl: async () => {
        fetches += 1;
        return unavailableTranscript(errorName);
      },
      sleep: async () => {},
      now: fixedNow,
    });

    assert.equal(result.exitCode, 1);
    assert.equal(result.remaining, 1);
    assert.equal(fetches, 1);
    await assert.rejects(
      readFile(paths.videoPathForFile('fatal-video', 'metadata.json'), 'utf8'),
      { code: 'ENOENT' },
    );
  }
});

test('force replaces transcript and metadata while preserving a sibling summary byte-for-byte', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-force-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = validCatalog();
  const manifestTitle = 'Generic\u00a0title';
  const fetchedTitle = 'Generic title';
  await writeManifestFixture(paths, catalog.playlists[0], [
    availableEntry('force-video', 0, manifestTitle),
  ]);
  await writeFixture(
    paths.videoPathForFile('force-video', 'transcript.md'),
    'old transcript',
  );
  await writeFixture(paths.videoPathForFile('force-video', 'metadata.json'), {
    old: 'metadata',
  });
  const summary = Buffer.from('---\nstatus: reviewed\n---\n\nHuman summary.\n');
  await writeFixture(
    paths.videoPathForFile('force-video', 'summary.md'),
    summary,
  );

  const result = await captureCatalogVideos({
    catalog,
    force: true,
    limit: 1,
    ...paths,
    fetchVideoImpl: async () =>
      successfulTranscript('force-video', fetchedTitle),
    sleep: async () => {},
    now: fixedNow,
  });

  assert.equal(result.exitCode, 0);
  const transcript = await readFile(
    paths.videoPathForFile('force-video', 'transcript.md'),
    'utf8',
  );
  const renderedTitle = transcript.match(/^title: (.+)$/m);
  assert.ok(renderedTitle);
  assert.equal(JSON.parse(renderedTitle[1]), manifestTitle);
  assert.notEqual(JSON.parse(renderedTitle[1]), fetchedTitle);
  assert.match(transcript, /Transcript for force-video/);
  assert.deepEqual(
    await readFile(paths.videoPathForFile('force-video', 'summary.md')),
    summary,
  );
  assert.deepEqual(
    JSON.parse(
      await readFile(
        paths.videoPathForFile('force-video', 'metadata.json'),
        'utf8',
      ),
    ),
    {
      videoId: 'force-video',
      capturedAt: '2026-07-20T00:00:00.000Z',
      requestedLanguage: 'it',
      language: 'it-IT',
      kind: 'auto-generated',
    },
  );
});

test('tolerant status frontmatter reads only status and covered video IDs', () => {
  assert.deepEqual(
    readStatusFrontmatter(
      '---\nstatus: "reviewed"\ncoveredVideoIds: [video-a, "video-b"]\nother: ignored\n---\n',
    ),
    { status: 'reviewed', coveredVideoIds: ['video-a', 'video-b'] },
  );
  assert.deepEqual(
    readStatusFrontmatter(
      "---\nstatus: draft\ncoveredVideoIds:\n  - video-a\n  - 'video-b'\n---\n",
    ),
    { status: 'draft', coveredVideoIds: ['video-a', 'video-b'] },
  );
  assert.deepEqual(readStatusFrontmatter('No frontmatter'), {
    status: undefined,
    coveredVideoIds: [],
  });
  assert.deepEqual(
    readStatusFrontmatter(
      '---\nstatus: [reviewed]\ncoveredVideoIds: [broken\n',
    ),
    { status: undefined, coveredVideoIds: [] },
  );
});

test('status reports derived playlist and author states, synthesis staleness, and not-synced playlists', async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-status-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const paths = fixturePaths(root);
  const catalog = multiPlaylistCatalog();
  catalog.playlists.push({
    ...catalog.playlists[0],
    id: 'third',
    slug: 'third',
    title: 'Third Playlist',
  });
  catalog.relationships[0].playlistIds.push('third');
  catalog.authors.push({
    id: 'second-author',
    slug: 'second-author',
    displayName: 'Second Author',
  });
  catalog.relationships.push({
    authorId: 'second-author',
    playlistIds: ['third'],
  });

  await writeManifestFixture(paths, catalog.playlists[0], [
    availableEntry('captured-missing', 0),
    availableEntry('captured-draft', 1),
    availableEntry('captured-reviewed', 2),
    availableEntry('pending-video', 3),
    availableEntry('unavailable-video', 4),
    {
      ...availableEntry('private-video', 5),
      available: false,
      unavailableReason: 'private',
    },
  ]);
  await writeManifestFixture(paths, catalog.playlists[2], [
    availableEntry('captured-reviewed', 0),
    availableEntry('third-reviewed', 1),
  ]);
  for (const videoId of [
    'captured-missing',
    'captured-draft',
    'captured-reviewed',
    'third-reviewed',
  ]) {
    await writeFixture(
      paths.videoPathForFile(videoId, 'transcript.md'),
      `transcript ${videoId}`,
    );
  }
  await writeFixture(
    paths.videoPathForFile('captured-draft', 'summary.md'),
    '---\nstatus: unexpected\n---\n',
  );
  await writeFixture(
    paths.videoPathForFile('captured-reviewed', 'summary.md'),
    '---\nstatus: reviewed\n---\n',
  );
  await writeFixture(
    paths.videoPathForFile('third-reviewed', 'summary.md'),
    '---\nstatus: reviewed\n---\n',
  );
  await writeFixture(
    paths.videoPathForFile('unavailable-video', 'metadata.json'),
    {
      videoId: 'unavailable-video',
      unavailable: { errorName: 'LanguageUnavailable', detail: 'no Italian' },
    },
  );
  await writeFixture(
    paths.overviewPathForPlaylist(catalog.playlists[0]),
    '---\ncoveredVideoIds: [captured-draft]\n---\n',
  );
  await writeFixture(
    paths.authorPathForAuthor(catalog.authors[1]),
    '---\ncoveredVideoIds: [captured-reviewed]\n---\n',
  );

  const status = await buildLibraryStatus({ catalog, ...paths });
  assert.deepEqual(status.playlists[0].totals, {
    entries: 6,
    available: 5,
    manifestUnavailable: 1,
  });
  assert.deepEqual(status.playlists[0].states, {
    captured: 3,
    pending: 1,
    unavailable: 1,
  });
  assert.deepEqual(status.playlists[0].unavailableVideoIds, [
    'unavailable-video',
  ]);
  assert.deepEqual(status.playlists[0].summaries, {
    missing: 1,
    draft: 1,
    reviewed: 1,
  });
  assert.deepEqual(status.playlists[0].synthesis, {
    state: 'stale',
    missingVideoIds: ['captured-reviewed'],
  });
  assert.equal(status.playlists[1].synced, false);
  assert.deepEqual(status.playlists[2].synthesis, {
    state: 'missing',
    missingVideoIds: ['captured-reviewed', 'third-reviewed'],
  });
  assert.equal(status.authors[0].videoTotal, 6);
  assert.deepEqual(status.authors[0].states, {
    captured: 4,
    pending: 1,
    unavailable: 1,
  });
  assert.deepEqual(status.authors[0].synthesis, {
    state: 'missing',
    missingVideoIds: ['captured-draft', 'captured-reviewed', 'third-reviewed'],
  });
  assert.deepEqual(status.authors[1].synthesis, {
    state: 'stale',
    missingVideoIds: ['third-reviewed'],
  });

  const report = formatLibraryStatus(status);
  assert.match(report, /Playlist playlist \(Example Playlist\):/);
  assert.match(
    report,
    /manifest: 6 entries; 5 available; 1 unavailable\/private\/deleted/,
  );
  assert.match(
    report,
    /summaries among captured: 1 missing; 1 draft\/not-reviewed; 1 reviewed/,
  );
  assert.match(
    report,
    /overview\.md: stale; missing covered video IDs: captured-reviewed/,
  );
  assert.match(
    report,
    /Playlist second \(Second Playlist\):\n {2}manifest: not synced/,
  );
  assert.match(report, /videos: 6 deduped/);
  assert.match(
    report,
    /authors\/second-author\.md: stale; missing covered video IDs: third-reviewed/,
  );
});
