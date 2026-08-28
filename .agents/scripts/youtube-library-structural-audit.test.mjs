import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  auditYoutubeLibraryStructure,
  formatYoutubeLibraryStructuralAudit,
} from './lib/youtube-library-structural-audit.mjs';
import {
  hasFullStandaloneEvidence,
  loadStandaloneYoutubeEvidence,
} from './lib/youtube-standalone-evidence.mjs';

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

- Editorial: [Playlist](../playlists/playlist/overview.md)

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

test('structural audit requires standalone public evidence for every resource intake decision', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-intake-audit-'));
  try {
    await writeFixture(root, 'catalog.json', {
      publication: 'source-only',
      authors: [],
      playlists: [
        {
          id: 'playlist-id',
          slug: 'intake',
          title: 'Resource Intake',
          transcriptLanguage: 'en',
          summaryLanguage: 'en',
          multiSpeaker: true,
          resourceIntake: true,
        },
      ],
      relationships: [],
    });
    await writeFixture(root, 'playlists/intake/manifest.json', {
      playlistId: 'playlist-id',
      entries: [
        {
          videoId: 'AbCdEfGhI12',
          position: 0,
          title: 'Candidate',
          available: true,
        },
      ],
    });
    await writeFixture(root, 'playlists/intake/intake.json', {
      playlistId: 'playlist-id',
      processed: [
        { videoId: 'AbCdEfGhI12', recommendation: 'keep' },
        { videoId: 'HiStOrIcAl3', recommendation: 'remove' },
      ],
    });

    const missingEvidence = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.match(
      missingEvidence.errors.join('\n'),
      /AbCdEfGhI12.*no complete standalone public resource/,
    );
    assert.match(
      missingEvidence.errors.join('\n'),
      /HiStOrIcAl3.*no complete standalone public resource/,
    );

    const processedVideoIds = ['AbCdEfGhI12', 'HiStOrIcAl3'];
    await writeFixture(
      root,
      'src/data/resources/coding-with-agents.json',
      processedVideoIds.map((videoId, index) => ({
        id: index + 1,
        type: 'video',
        url: `https://www.youtube.com/watch?v=${videoId}`,
      })),
    );
    for (const [index, videoId] of processedVideoIds.entries()) {
      await writeFixture(
        root,
        `src/content/transcripts/${videoId}.md`,
        `---
title: "${videoId}"
summarySlug: "${videoId}"
sourceUrl: "https://www.youtube.com/watch?v=${videoId}"
videoId: "${videoId}"
capturedAt: "2026-08-28T00:00:00.000Z"
---
`,
      );
      await writeFixture(
        root,
        `src/content/summaries/${videoId}.md`,
        `---
title: "${videoId}"
resourceId: ${index + 1}
---
`,
      );
    }

    const valid = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.deepEqual(valid.errors, []);

    await writeFixture(root, 'playlists/intake/intake.json', {
      playlistId: 'playlist-id',
      processed: [{ videoId: 'AbCdEfGhI12', recommendation: 'undecided' }],
    });
    const invalid = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.match(
      invalid.errors.join('\n'),
      /recommendation must be keep or remove/,
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
      overview
        .replace('  - video-id', '  - other-id')
        .replace(
          '- Editorial: Example.',
          '- Unlabeled synthesis without a source.',
        ),
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
        error.includes(
          'synthesis bullet must start with Editorial: or link a video summary',
        ),
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

test('structural audit enforces exactly one playlist attribution mode', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-audit-'));
  try {
    await writeValidLibrary(root);
    const catalogPath = path.join(root, 'catalog.json');
    const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
    catalog.playlists[0].multiSpeaker = true;
    await writeFixture(root, 'catalog.json', catalog);

    const result = await auditYoutubeLibraryStructure({ libraryRoot: root });
    assert.deepEqual(result.errors, [
      'catalog.json is invalid: Playlist playlist-id cannot have both an author relationship and multiSpeaker: true.',
    ]);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('curated structural audit scopes overview obligations and accepts standalone source evidence', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-audit-curated-'));
  try {
    await writeValidLibrary(root);
    const catalogPath = path.join(root, 'catalog.json');
    const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
    catalog.authors = [];
    catalog.relationships = [];
    catalog.playlists[0].multiSpeaker = true;
    catalog.playlists[0].curation = {
      status: 'reviewed',
      videoIds: ['AbCdEfGhI12'],
    };
    await writeFixture(root, 'catalog.json', catalog);

    const manifestPath = path.join(root, 'playlists/playlist/manifest.json');
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    manifest.entries.unshift({
      videoId: 'AbCdEfGhI12',
      position: 0,
      title: 'Selected standalone video',
      publishedAt: '2026-07-30T00:00:00Z',
      available: true,
    });
    await writeFixture(root, 'playlists/playlist/manifest.json', manifest);
    await writeFixture(
      root,
      'playlists/playlist/overview.md',
      `---
title: "Example Playlist"
status: reviewed
coveredVideoIds:
  - AbCdEfGhI12
---

## Coverage

One selected summary.

## Current Thesis

- Example ([summary](../../src/content/summaries/selected.md)).

## Stable Ideas

- Editorial: Example.

## Emerging Ideas

- Editorial: Example.

## Revisions and Tensions

- Editorial: Example.

## Practical Implications

- Editorial: Example.
`,
    );
    await writeFixture(root, 'src/data/resources/coding-with-agents.json', [
      {
        id: 1,
        type: 'playlist',
        url: 'https://www.youtube.com/playlist?list=playlist-id',
      },
    ]);
    await writeFixture(
      root,
      'src/content/transcripts/selected.md',
      `---
title: "Selected"
summarySlug: "selected"
sourceUrl: "https://www.youtube.com/watch?v=AbCdEfGhI12"
videoId: "AbCdEfGhI12"
capturedAt: "2026-07-31T00:00:00.000Z"
---
`,
    );
    await writeFixture(
      root,
      'src/content/summaries/selected.md',
      `---
title: "Selected"
resourceId: 1
collection: "selected"
order: 1
videoId: "AbCdEfGhI12"
---
`,
    );

    const result = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.deepEqual(result.errors, []);

    delete catalog.playlists[0].curation;
    await writeFixture(root, 'catalog.json', catalog);
    const uncuratedStandalone = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.match(
      uncuratedStandalone.errors.join('\n'),
      /covers AbCdEfGhI12, which has no summary/,
    );
    assert.match(
      uncuratedStandalone.errors.join('\n'),
      /does not cover summarized video video-id/,
    );

    catalog.playlists[0].curation = {
      status: 'reviewed',
      videoIds: ['AbCdEfGhI12'],
    };
    await writeFixture(root, 'catalog.json', catalog);

    await writeFixture(root, 'videos/AbCdEfGhI12/metadata.json', {
      videoId: 'AbCdEfGhI12',
      language: 'en',
      kind: 'caption',
    });
    await writeFixture(
      root,
      'videos/AbCdEfGhI12/transcript.md',
      transcript.replaceAll('video-id', 'AbCdEfGhI12'),
    );
    await writeFixture(
      root,
      'videos/AbCdEfGhI12/summary.md',
      summary
        .replaceAll('video-id', 'AbCdEfGhI12')
        .replace('status: reviewed', 'status: draft'),
    );
    const draftLocal = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.match(
      draftLocal.errors.join('\n'),
      /selected video AbCdEfGhI12 has no reviewed source evidence/,
    );

    await writeFixture(
      root,
      'videos/AbCdEfGhI12/summary.md',
      summary.replaceAll('video-id', 'AbCdEfGhI12'),
    );
    const reviewedLocal = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.deepEqual(reviewedLocal.errors, []);

    catalog.playlists[0].curation.status = 'draft';
    await writeFixture(root, 'catalog.json', catalog);
    await rm(path.join(root, 'playlists/playlist/overview.md'));
    const draftWithoutOverview = await auditYoutubeLibraryStructure({
      libraryRoot: root,
      repoRoot: root,
    });
    assert.deepEqual(draftWithoutOverview.errors, []);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('standalone evidence resolves explicit series episode associations', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-series-'));
  try {
    await writeFixture(root, 'src/data/resources/coding-with-agents.json', [
      {
        id: 1,
        type: 'playlist',
        url: 'https://example.com/podcast',
      },
    ]);
    await writeFixture(
      root,
      'src/content/transcripts/episode.md',
      `---
title: "Episode"
summarySlug: "episode"
sourceUrl: "https://www.youtube.com/watch?v=AbCdEfGhI12"
videoId: "AbCdEfGhI12"
capturedAt: "2026-08-28T00:00:00.000Z"
series: "example-series"
episode: 3
---
`,
    );
    const summaryPath = path.join(root, 'src/content/summaries/episode.md');
    await writeFixture(
      root,
      'src/content/summaries/episode.md',
      `---
title: "Episode"
resourceId: 1
series: "example-series"
episode: 3
---
`,
    );

    const valid = await loadStandaloneYoutubeEvidence({ repoRoot: root });
    assert.deepEqual(valid.errors, []);
    assert.equal(valid.byVideoId.get('AbCdEfGhI12')?.coverage, 'full');

    const mismatched = (await readFile(summaryPath, 'utf8')).replace(
      'episode: 3',
      'episode: 2',
    );
    await writeFile(summaryPath, mismatched, 'utf8');
    const invalid = await loadStandaloneYoutubeEvidence({ repoRoot: root });
    assert.match(
      invalid.errors.join('\n'),
      /canonical video resource, curated collection item, or series episode/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('standalone excerpt evidence resolves non-coding manifests and records excerpt coverage', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'youtube-excerpt-'));
  try {
    await writeFixture(root, 'src/data/resources/cloud.json', [
      {
        id: 1,
        type: 'video',
        url: 'https://www.youtube.com/watch?v=AbCdEfGhI12&t=100s',
      },
    ]);
    await writeFixture(
      root,
      'src/content/transcripts/excerpt.md',
      `---
title: "Excerpt"
summarySlug: "excerpt"
sourceUrl: "https://www.youtube.com/watch?v=AbCdEfGhI12"
videoId: "AbCdEfGhI12"
capturedAt: "2026-08-10T00:00:00.000Z"
durationSeconds: 300
sourceStartSeconds: 100
sourceEndSeconds: 200
---

## Transcript

[00:01:39] Opening boundary cue.

[00:03:19] Closing boundary cue.
`,
    );
    await writeFixture(
      root,
      'src/content/summaries/excerpt.md',
      `---
title: "Excerpt"
resourceId: 1
---
`,
    );

    const valid = await loadStandaloneYoutubeEvidence({ repoRoot: root });
    assert.deepEqual(valid.errors, []);
    assert.equal(valid.byVideoId.get('AbCdEfGhI12')?.coverage, 'excerpt');
    assert.equal(
      hasFullStandaloneEvidence(valid.byVideoId, 'AbCdEfGhI12'),
      false,
    );

    const transcriptPath = path.join(
      root,
      'src/content/transcripts/excerpt.md',
    );
    const invalid = (await readFile(transcriptPath, 'utf8')).replace(
      'sourceEndSeconds: 200',
      'sourceEndSeconds: 199',
    );
    await writeFile(transcriptPath, invalid, 'utf8');
    const result = await loadStandaloneYoutubeEvidence({ repoRoot: root });
    assert.match(
      result.errors.join('\n'),
      /transcript anchor at or after sourceEndSeconds/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
