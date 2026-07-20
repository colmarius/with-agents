import assert from 'node:assert/strict';
import { mkdtemp, readdir, readFile, rm, stat } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
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

test('library paths cannot escape the fixed root', () => {
  assert.match(
    libraryPath('videos/8gg-oJr4dTY/transcript.md'),
    /src\/content\/youtube\/videos\/8gg-oJr4dTY\/transcript\.md$/,
  );
  assert.throws(() => libraryPath('../transcript.md'));
  assert.throws(() => libraryPath('/tmp/transcript.md'));
});

test('sync CLI parsing supports all playlists, subsets, and dry runs', () => {
  assert.deepEqual(parseLibraryArgs([]), { command: 'help' });
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
  assert.deepEqual(parseLibraryArgs(['capture']), { command: 'capture' });
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
    () => parseLibraryArgs(['capture', '--output=/tmp/secret']),
    (error) =>
      error.message.includes('does not accept options') &&
      !error.message.includes('/tmp/secret'),
  );
  assert.throws(
    () => parseLibraryArgs(['status', '--credentials=secret']),
    (error) => !error.message.includes('secret'),
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
