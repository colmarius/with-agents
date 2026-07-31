import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  auditYoutubeLibraryStructure,
  formatYoutubeLibraryStructuralAudit,
} from './lib/youtube-library-structural-audit.mjs';

const writeFixture = async (root, relativePath, contents) => {
  const filePath = path.join(root, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(
    filePath,
    typeof contents === 'string'
      ? contents
      : `${JSON.stringify(contents, null, 2)}\n`,
    'utf8',
  );
};

const transcript = `---
title: "Example"
sourceUrl: "https://www.youtube.com/watch?v=video-id"
videoId: "video-id"
capturedAt: "2026-07-31T00:00:00.000Z"
channel: "Example"
language: "en"
kind: "caption"
durationSeconds: 120
---

## Transcript

[00:00:01] First chunk.

[00:01:00] Second chunk.
`;

const summary = `---
title: "Example"
videoId: video-id
sourceUrl: "https://www.youtube.com/watch?v=video-id"
publishedAt: "2026-07-30T00:00:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: reviewed
---

Example claim. [00:00:01]-[00:01:00]

## Key Ideas

- Example. [00:00:01]

## Practical Implications

- Editorial: Example.

## Questions and Tensions

- Editorial: Example.

## Source

- [Transcript](./transcript.md)
`;

const overview = `---
title: "Example Playlist"
status: reviewed
coveredVideoIds:
  - video-id
---

## Coverage

One summary.

## Current Thesis

- Example ([summary](../../videos/video-id/summary.md)).

## Stable Ideas

- Editorial: Example.

## Emerging Ideas

- Editorial: Example.

## Revisions and Tensions

- Editorial: Example.

## Practical Implications

- Editorial: Example.
`;

const author = `---
authorId: author-id
status: reviewed
coveredVideoIds:
  - video-id
---

## Source Identities

- Example.

## Cross-Playlist Synthesis

- [Playlist](../playlists/playlist/overview.md)

## Changes Over Time

- Editorial: Example.
`;

const writeValidLibrary = async (root) => {
  await writeFixture(root, 'catalog.json', {
    publication: 'source-only',
    authors: [
      { id: 'author-id', slug: 'author', displayName: 'Example Author' },
    ],
    playlists: [
      {
        id: 'playlist-id',
        slug: 'playlist',
        title: 'Example Playlist',
        transcriptLanguage: 'en',
        summaryLanguage: 'en',
      },
    ],
    relationships: [{ authorId: 'author-id', playlistIds: ['playlist-id'] }],
  });
  await writeFixture(root, 'playlists/playlist/manifest.json', {
    playlistId: 'playlist-id',
    entries: [
      {
        videoId: 'video-id',
        position: 0,
        title: 'Example',
        publishedAt: '2026-07-30T00:00:00Z',
        available: true,
      },
      {
        videoId: 'video-id',
        position: 2,
        title: 'Example duplicate membership',
        publishedAt: '2026-07-30T00:00:00Z',
        available: true,
      },
    ],
  });
  await writeFixture(root, 'playlists/playlist/overview.md', overview);
  await writeFixture(root, 'authors/author.md', author);
  await writeFixture(root, 'videos/video-id/metadata.json', {
    videoId: 'video-id',
    language: 'en',
    kind: 'caption',
  });
  await writeFixture(root, 'videos/video-id/transcript.md', transcript);
  await writeFixture(root, 'videos/video-id/summary.md', summary);
};

test('structural audit passes valid files and reports duplicate membership without deduping', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-audit-'));
  try {
    await writeValidLibrary(root);
    const manifestPath = path.join(root, 'playlists/playlist/manifest.json');
    const manifestBefore = await readFile(manifestPath, 'utf8');
    const result = await auditYoutubeLibraryStructure({ libraryRoot: root });
    assert.deepEqual(result.errors, []);
    assert.equal(await readFile(manifestPath, 'utf8'), manifestBefore);
    assert.equal(result.stats.manifestOccurrences, 2);
    assert.equal(result.stats.uniqueVideos, 1);
    assert.deepEqual(result.notices, [
      'duplicate manifest occurrence: playlist contains video-id at positions 0, 2 (reported, not deduped)',
    ]);
    assert.match(
      formatYoutubeLibraryStructuralAudit(result),
      /structural audit passed.*1 tracked videos.*2 manifest occurrences/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('structural audit rejects unordered chunks and unresolved or reversed anchor endpoints', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-audit-'));
  try {
    await writeValidLibrary(root);
    await writeFixture(
      root,
      'videos/video-id/transcript.md',
      transcript.replace(
        '[00:01:00] Second chunk.',
        '[00:00:00] Second chunk.',
      ),
    );
    await writeFixture(
      root,
      'videos/video-id/summary.md',
      summary.replace(
        'Example claim. [00:00:01]-[00:01:00]',
        'Example claim. [00:00:09]-[00:00:01]',
      ),
    );
    const result = await auditYoutubeLibraryStructure({ libraryRoot: root });
    assert.ok(
      result.errors.some((error) => error.includes('not strictly ordered')),
    );
    assert.ok(
      result.errors.some((error) =>
        error.includes('anchor [00:00:09] does not resolve'),
      ),
    );
    assert.ok(
      result.errors.some(
        (error) => error.includes('anchor range') && error.includes('reversed'),
      ),
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('structural audit rejects invalid provenance, status, coverage, and relative links', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-audit-'));
  try {
    await writeValidLibrary(root);
    await writeFixture(
      root,
      'videos/video-id/summary.md',
      summary
        .replace('videoId: video-id', 'videoId: other-id')
        .replace('status: reviewed', 'status: published')
        .replace('[Transcript](./transcript.md)', '[Transcript](./missing.md)'),
    );
    await writeFixture(
      root,
      'playlists/playlist/overview.md',
      overview.replace('  - video-id', '  - other-id'),
    );
    const result = await auditYoutubeLibraryStructure({ libraryRoot: root });
    assert.ok(
      result.errors.some((error) =>
        error.includes('videoId must match directory'),
      ),
    );
    assert.ok(
      result.errors.some((error) =>
        error.includes('status must be draft or reviewed'),
      ),
    );
    assert.ok(
      result.errors.some((error) => error.includes('covers untracked video')),
    );
    assert.ok(
      result.errors.some((error) =>
        error.includes('does not cover summarized video'),
      ),
    );
    assert.ok(
      result.errors.some((error) =>
        error.includes('link ./missing.md does not resolve'),
      ),
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
