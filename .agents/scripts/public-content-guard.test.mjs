import assert from 'node:assert/strict';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  extractTrackedReferences,
  parseJsonWithDuplicateKeys,
  readFrontmatter,
  readWebpDimensions,
  runPublicContentGuard,
  validateDurableContextImageDeck,
} from './public-content-guard.mjs';

const writeFixture = async (root, relativePath, contents) => {
  const filePath = path.join(root, relativePath);
  await mkdir(path.dirname(filePath), { recursive: true });
  if (Buffer.isBuffer(contents)) {
    await writeFile(filePath, contents);
    return;
  }
  await writeFile(
    filePath,
    typeof contents === 'string'
      ? contents
      : `${JSON.stringify(contents, null, 2)}\n`,
    'utf8',
  );
};

const reviewedSummary = (videoId, status = 'reviewed') => `---
title: "${videoId}"
videoId: ${videoId}
status: ${status}
---
`;

const overview = (status = 'reviewed') => `---
title: "Playlist"
status: ${status}
coveredVideoIds:
  - AbCdEfGhI12
---
`;

const publicSummary = (resourceId, body = '') => `---
title: "Public summary"
resourceId: ${resourceId}
---

${body}
`;

const resources = (overrides = {}) => [
  {
    id: 1,
    title: 'Playlist',
    url: 'https://www.youtube.com/playlist?list=PLfixture1234567890',
    description: 'Guide',
    type: 'playlist',
    source: 'Source',
    date: '2026-07-31',
    topics: ['tools-harnesses'],
    primarySection: 'workflows',
    ...overrides,
  },
];

const webpFixture = (width = 1672, height = 941) => {
  const contents = Buffer.alloc(30);
  contents.write('RIFF', 0, 'ascii');
  contents.writeUInt32LE(contents.length - 8, 4);
  contents.write('WEBP', 8, 'ascii');
  contents.write('VP8 ', 12, 'ascii');
  contents.writeUInt32LE(10, 16);
  contents[23] = 0x9d;
  contents[24] = 0x01;
  contents[25] = 0x2a;
  contents.writeUInt16LE(width, 26);
  contents.writeUInt16LE(height, 28);
  return contents;
};

const extendedWebpFixture = (width = 1672, height = 941) => {
  const contents = Buffer.alloc(30);
  contents.write('RIFF', 0, 'ascii');
  contents.writeUInt32LE(contents.length - 8, 4);
  contents.write('WEBP', 8, 'ascii');
  contents.write('VP8X', 12, 'ascii');
  contents.writeUInt32LE(10, 16);
  contents.writeUIntLE(width - 1, 24, 3);
  contents.writeUIntLE(height - 1, 27, 3);
  return contents;
};

const writeDurableContextDeckFixture = async (root) => {
  const imageSections = [];
  for (let index = 1; index <= 16; index += 1) {
    const filename = `Slide-${index}.webp`;
    imageSections.push(`## Slide ${index}

![Slide ${index}](/slides/durable-context-coding-agents-image-deck/${filename})`);
    await writeFixture(
      root,
      `public/slides/durable-context-coding-agents-image-deck/${filename}`,
      webpFixture(),
    );
  }
  await writeFixture(
    root,
    'src/content/posts/durable-context-coding-agents.md',
    '[Image deck](/coding/posts/durable-context-coding-agents-image-deck/slides/#1)',
  );
  await writeFixture(
    root,
    'src/content/posts/durable-context-coding-agents-image-deck.md',
    `${imageSections.join('\n\n')}\n\n## Sources used\n`,
  );
};

const createFixture = async ({
  videoStatus = 'reviewed',
  playlistStatus = 'reviewed',
  post = `---
title: 'Post'
draft: false
---

Watch https://www.youtube.com/watch?v=AbCdEfGhI12&t=5s.
`,
  resourceValue = resources(),
  resourceSource,
  summaryResourceId = 1,
} = {}) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'public-content-guard-'));
  await writeFixture(root, 'src/content/youtube/catalog.json', {
    publication: 'source-only',
    authors: [],
    playlists: [
      {
        id: 'PLfixture1234567890',
        slug: 'fixture',
        title: 'Fixture',
        transcriptLanguage: 'en',
        summaryLanguage: 'en',
        multiSpeaker: true,
      },
    ],
    relationships: [],
  });
  await writeFixture(
    root,
    'src/content/youtube/playlists/fixture/manifest.json',
    {
      playlistId: 'PLfixture1234567890',
      entries: [
        { videoId: 'AbCdEfGhI12', position: 0 },
        { videoId: '-LeadingId1', position: 1 },
        { videoId: 'AbCdEfGhI12', position: 3 },
      ],
    },
  );
  await writeFixture(
    root,
    'src/content/youtube/playlists/fixture/overview.md',
    overview(playlistStatus),
  );
  await writeFixture(
    root,
    'src/content/youtube/videos/AbCdEfGhI12/summary.md',
    reviewedSummary('AbCdEfGhI12', videoStatus),
  );
  await writeFixture(
    root,
    'src/content/youtube/videos/-LeadingId1/summary.md',
    reviewedSummary('-LeadingId1'),
  );
  await writeFixture(root, 'src/content/posts/post.md', post);
  await writeFixture(
    root,
    'src/content/summaries/summary.md',
    publicSummary(
      summaryResourceId,
      'Embed https://www.youtube.com/embed/-LeadingId1 and external https://youtu.be/Untracked01.',
    ),
  );
  await writeFixture(
    root,
    'src/data/resources/coding-with-agents.json',
    resourceSource ?? resourceValue,
  );
  return root;
};

test('frontmatter reads publishable post state and reviewed source state', () => {
  assert.deepEqual(
    readFrontmatter('---\ndraft: false\nstatus: reviewed\n---\n'),
    {
      draft: false,
      status: 'reviewed',
    },
  );
});

test('tracked extraction covers URL forms, thumbnails, parameters, and bare leading-dash IDs', () => {
  const videoIds = new Set(['AbCdEfGhI12', '-LeadingId1']);
  const playlistIds = new Set(['PLfixture1234567890']);
  const references = extractTrackedReferences(
    [
      'https://www.youtube.com/watch?v=AbCdEfGhI12&t=9s',
      'https://youtu.be/-LeadingId1?si=value',
      'https://www.youtube-nocookie.com/embed/AbCdEfGhI12',
      'https://i.ytimg.com/vi/-LeadingId1/hqdefault.jpg',
      'bare -LeadingId1',
      'https://www.youtube.com/playlist?list=PLfixture1234567890',
      'https://youtu.be/Untracked01',
    ].join('\n'),
    { videoIds, playlistIds },
  );
  assert.deepEqual(references.videos.map(({ id }) => id).sort(), [
    '-LeadingId1',
    'AbCdEfGhI12',
  ]);
  assert.deepEqual(
    references.playlists.map(({ id }) => id),
    ['PLfixture1234567890'],
  );
});

test('WebP dimension reader supports the slide image bitstream', () => {
  assert.deepEqual(readWebpDimensions(webpFixture()), {
    height: 941,
    width: 1672,
  });
  assert.deepEqual(readWebpDimensions(extendedWebpFixture()), {
    height: 941,
    width: 1672,
  });
});

test('durable context image deck guard checks its complete publishing contract', async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'durable-context-deck-'));
  try {
    await writeDurableContextDeckFixture(root);
    const validErrors = [];
    await validateDurableContextImageDeck(root, validErrors);
    assert.deepEqual(validErrors, []);

    await rm(
      path.join(root, 'src/content/posts/durable-context-coding-agents.md'),
    );
    const missingCanonicalErrors = [];
    await validateDurableContextImageDeck(root, missingCanonicalErrors);
    assert.match(
      missingCanonicalErrors.join('\n'),
      /durable-context-coding-agents\.md is missing while the image deck is published/,
    );

    await writeFixture(
      root,
      'src/content/posts/durable-context-coding-agents.md',
      'Canonical article without a deck link.',
    );
    await writeFixture(
      root,
      'src/content/posts/durable-context-coding-agents-image-deck.md',
      `${Array.from(
        { length: 16 },
        (_, index) => `## Slide ${index + 1}

![Slide](/slides/durable-context-coding-agents-image-deck/Slide-${Math.min(index + 1, 15)}.webp)`,
      ).join('\n\n')}\n`,
    );
    await writeFixture(
      root,
      'public/slides/durable-context-coding-agents-image-deck/Slide-1.webp',
      webpFixture(100, 100),
    );
    await writeFixture(
      root,
      'public/slides/durable-context-coding-agents-image-deck/cover.webp',
      webpFixture(),
    );

    const invalidErrors = [];
    await validateDurableContextImageDeck(root, invalidErrors);
    const message = invalidErrors.join('\n');
    assert.match(message, /must link to .*image-deck\/slides/);
    assert.match(message, /must contain a Sources used appendix/);
    assert.match(message, /16 unique slide images/);
    assert.match(message, /Slide-1\.webp must be 1672x941; found 100x100/);
    assert.match(message, /Slide-16\.webp is an unreferenced deck image asset/);
    assert.match(message, /cover\.webp is an unreferenced deck image asset/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('duplicate-aware JSON parsing reports repeated keys without merging objects', () => {
  const parsed = parseJsonWithDuplicateKeys(
    '[{"id":1,"nested":{"id":2,"id":3},"id":4}]',
  );
  assert.deepEqual(parsed.duplicateKeys, ['$[0].nested.id', '$[0].id']);
  assert.equal(parsed.value[0].id, 4);
  assert.equal(parsed.value[0].nested.id, 3);
});

test('guard passes reviewed public references and reports genuine manifest duplicates', async () => {
  const root = await createFixture();
  try {
    const result = await runPublicContentGuard({ repoRoot: root });
    assert.deepEqual(result.errors, []);
    assert.deepEqual(result.warnings, []);
    assert.equal(result.notices.length, 1);
    assert.match(result.notices[0], /positions 0, 3 \(reported, not deduped\)/);
    assert.equal(result.stats.videoCount, 2);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('guard fails publishable draft sources but only warns for a draft post', async () => {
  const root = await createFixture({
    videoStatus: 'draft',
    post: `---
title: 'Draft post'
draft: true
---

Bare source AbCdEfGhI12.
`,
  });
  try {
    const result = await runPublicContentGuard({ repoRoot: root });
    assert.deepEqual(result.errors, []);
    assert.equal(result.warnings.length, 1);
    assert.match(result.warnings[0], /draft post is not publishable/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }

  const publishableRoot = await createFixture({ videoStatus: 'draft' });
  try {
    const result = await runPublicContentGuard({ repoRoot: publishableRoot });
    assert.equal(result.errors.length, 1);
    assert.match(result.errors[0], /tracked video AbCdEfGhI12.*status draft/);
  } finally {
    await rm(publishableRoot, { recursive: true, force: true });
  }
});

test('guard enforces reviewed playlist overviews and accepts explicit scoped exceptions', async () => {
  const root = await createFixture({ playlistStatus: 'draft' });
  try {
    const failed = await runPublicContentGuard({ repoRoot: root });
    assert.equal(failed.errors.length, 1);
    assert.match(failed.errors[0], /tracked playlist PLfixture1234567890/);

    const excepted = await runPublicContentGuard({
      repoRoot: root,
      exceptions: [
        {
          kind: 'playlist',
          id: 'PLfixture1234567890',
          path: 'src/data/resources/coding-with-agents.json',
          reason: 'Dedicated review is recorded elsewhere.',
        },
      ],
    });
    assert.deepEqual(excepted.errors, []);
    assert.match(excepted.notices.at(-1), /explicit exception/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('resource validation rejects duplicate keys, IDs, dates, enums, and misalignment', async () => {
  const resourceSource = `[
    {
      "id": 1,
      "id": 1,
      "title": "One",
      "url": "https://example.com/one",
      "description": "One",
      "type": "invalid",
      "source": "Source",
      "date": "2026-02-30",
      "topics": [7]
    },
    {
      "id": 1,
      "title": "Two",
      "url": "https://example.com/two",
      "description": "Two",
      "type": "video",
      "source": "Source",
      "date": "2026-07-31",
      "topics": ["tools-harnesses"]
    }
  ]\n`;
  const root = await createFixture({
    resourceSource,
    summaryResourceId: 99,
    post: `---
title: 'Post'
draft: false
---
`,
  });
  try {
    const result = await runPublicContentGuard({ repoRoot: root });
    const errors = result.errors.join('\n');
    assert.match(errors, /duplicate key \$\[0\]\.id/);
    assert.match(errors, /duplicates resource id 1/);
    assert.match(errors, /invalid date 2026-02-30/);
    assert.match(errors, /invalid type invalid/);
    assert.match(errors, /invalid topic 7/);
    assert.match(errors, /references missing resourceId 99/);
    assert.match(errors, /resource id 1 has no public summary/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('resource validation rejects missing and empty primary sections', async () => {
  const root = await createFixture({
    resourceValue: [
      ...resources({ date: undefined, primarySection: undefined }),
      {
        ...resources()[0],
        id: 2,
        primarySection: '',
      },
    ],
  });
  try {
    const result = await runPublicContentGuard({ repoRoot: root });
    const errors = result.errors.join('\n');
    assert.match(errors, /resource \$\[0\] has invalid date undefined/);
    assert.match(
      errors,
      /resource \$\[0\] has invalid primarySection undefined/,
    );
    assert.match(errors, /resource \$\[1\] has invalid primarySection/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('resource validation combines manifests and rejects global ID collisions', async () => {
  const root = await createFixture({
    post: `---
title: 'Post'
draft: false
---
`,
  });
  try {
    await writeFixture(root, 'src/data/resources/cloud.json', [
      {
        ...resources()[0],
        id: 2,
        url: 'https://example.com/cloud',
        primarySection: 'foundations-platform',
        topics: ['gcp'],
      },
    ]);
    await writeFixture(
      root,
      'src/content/summaries/cloud.md',
      publicSummary(2),
    );

    const valid = await runPublicContentGuard({ repoRoot: root });
    assert.deepEqual(valid.errors, []);
    assert.equal(valid.stats.resourceCount, 2);

    await writeFixture(root, 'src/data/resources/cloud.json', [
      {
        ...resources()[0],
        url: 'https://example.com/cloud',
        primarySection: 'foundations-platform',
        topics: ['gcp'],
      },
    ]);
    const duplicate = await runPublicContentGuard({ repoRoot: root });
    assert.match(duplicate.errors.join('\n'), /duplicates resource id 1/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('guard requires public collection metadata to exactly match reviewed playlist curation', async () => {
  const root = await createFixture({
    post: `---
title: 'Post'
draft: false
---
`,
  });
  try {
    const catalogPath = path.join(root, 'src/content/youtube/catalog.json');
    const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
    catalog.playlists[0].curation = {
      status: 'reviewed',
      videoIds: ['-LeadingId1', 'AbCdEfGhI12'],
    };
    await writeFixture(root, 'src/content/youtube/catalog.json', catalog);
    const manifestPath = path.join(
      root,
      'src/content/youtube/playlists/fixture/manifest.json',
    );
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    manifest.entries = manifest.entries.map((entry) => ({
      ...entry,
      available: true,
    }));
    await writeFixture(
      root,
      'src/content/youtube/playlists/fixture/manifest.json',
      manifest,
    );
    await writeFixture(
      root,
      'src/content/summaries/summary.md',
      `---
title: "First selected video"
resourceId: 1
collection: "fixture-selection"
order: 1
videoId: "-LeadingId1"
---
`,
    );
    await writeFixture(
      root,
      'src/content/summaries/second.md',
      `---
title: "Second selected video"
resourceId: 1
collection: "fixture-selection"
order: 2
videoId: "AbCdEfGhI12"
---
`,
    );

    const passing = await runPublicContentGuard({ repoRoot: root });
    assert.deepEqual(passing.errors, []);

    await writeFixture(
      root,
      'src/content/summaries/second.md',
      `---
title: "Second selected video"
resourceId: 1
collection: "fixture-selection"
order: 1
videoId: "AbCdEfGhI12"
---
`,
    );
    const failing = await runPublicContentGuard({ repoRoot: root });
    const message = failing.errors.join('\n');
    assert.match(message, /duplicate order values/);
    assert.match(message, /video IDs and order must exactly match/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('guard does not let standalone evidence satisfy an uncurated playlist video', async () => {
  const root = await createFixture({
    post: `---
title: 'Post'
draft: false
---
`,
    resourceValue: resources({
      type: 'video',
      url: 'https://www.youtube.com/watch?v=AbCdEfGhI12',
    }),
  });
  try {
    await rm(
      path.join(root, 'src/content/youtube/videos/AbCdEfGhI12/summary.md'),
    );
    await writeFixture(
      root,
      'src/content/transcripts/summary.md',
      `---
title: "Standalone"
summarySlug: "summary"
sourceUrl: "https://www.youtube.com/watch?v=AbCdEfGhI12"
videoId: "AbCdEfGhI12"
capturedAt: "2026-07-31T00:00:00.000Z"
---
`,
    );

    const result = await runPublicContentGuard({ repoRoot: root });
    assert.match(
      result.errors.join('\n'),
      /cites tracked video AbCdEfGhI12 with source status missing/,
    );
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('guard permits draft curation without a playlist overview', async () => {
  const root = await createFixture({
    post: `---
title: 'Post'
draft: false
---
`,
    resourceValue: resources({
      type: 'article',
      url: 'https://example.com/article',
    }),
  });
  try {
    const catalogPath = path.join(root, 'src/content/youtube/catalog.json');
    const catalog = JSON.parse(await readFile(catalogPath, 'utf8'));
    catalog.playlists[0].curation = {
      status: 'draft',
      videoIds: ['AbCdEfGhI12'],
    };
    await writeFixture(root, 'src/content/youtube/catalog.json', catalog);
    const manifestPath = path.join(
      root,
      'src/content/youtube/playlists/fixture/manifest.json',
    );
    const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
    manifest.entries = manifest.entries.map((entry) => ({
      ...entry,
      available: true,
    }));
    await writeFixture(
      root,
      'src/content/youtube/playlists/fixture/manifest.json',
      manifest,
    );
    await rm(
      path.join(root, 'src/content/youtube/playlists/fixture/overview.md'),
    );

    const result = await runPublicContentGuard({ repoRoot: root });
    assert.deepEqual(result.errors, []);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
