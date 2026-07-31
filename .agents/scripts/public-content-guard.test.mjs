import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  extractTrackedReferences,
  parseJsonWithDuplicateKeys,
  readFrontmatter,
  runPublicContentGuard,
} from './public-content-guard.mjs';

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
    ...overrides,
  },
];

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
      "topics": ["invalid-topic"]
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
    assert.match(errors, /invalid topic invalid-topic/);
    assert.match(errors, /references missing resourceId 99/);
    assert.match(errors, /resource id 1 has no public summary/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
