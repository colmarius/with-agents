import assert from 'node:assert/strict';
import test from 'node:test';
import type { ManifestEntry } from '../components/resources/summaryResolver.ts';
import { validateResourceManifest } from '../data/resources/resource-manifest.ts';
import type { Resource, ResourceCatalog } from '../types/resources.ts';
import {
  type AdditionPost,
  buildRecentAdditions,
  getRecentPath,
  groupRecentAdditions,
  paginateRecentAdditions,
} from './recent-additions.ts';

const resource: Resource = {
  id: 1,
  title: 'Old source, new addition',
  description: 'A source',
  type: 'article',
  url: 'https://example.com/old',
  source: 'Example',
  date: '2020-01-01',
  addedDate: '2026-10-09',
  topics: [],
};
const catalog: ResourceCatalog = {
  slug: 'coding-with-agents',
  title: 'Coding',
  description: '',
  indexDescription: '',
  resourceIds: [1],
  sectionByResourceId: { 1: 'main' },
  topicOptions: [],
  sections: [
    { key: 'main', label: 'Main', description: '', routeSlug: 'main' },
  ],
};
const summary: ManifestEntry & { addedDate?: string } = {
  slug: 'legacy__source',
  resourceId: 1,
  title: 'Summary',
  date: '2020-01-01',
  series: null,
  episode: null,
  collection: null,
  order: null,
  videoId: null,
};
const post: AdditionPost = {
  id: 'newer-source',
  data: {
    title: 'Newer publication, older addition',
    description: '',
    context: 'coding',
    pubDate: new Date('2026-10-01'),
    addedDate: '2026-10-02',
    draft: false,
    unlisted: false,
  },
};
const base = {
  resources: [resource],
  catalogs: [catalog],
  summaries: [summary],
  posts: [post],
  history: { estimates: {}, legacyUndated: [] },
};

test('recent feed sorts by addition day, mixes posts and resources, and deduplicates catalog memberships', () => {
  const { items } = buildRecentAdditions({
    ...base,
    catalogs: [catalog, { ...catalog, slug: 'ai', title: 'AI' }],
  });
  assert.deepEqual(
    items.map((item) => item.key),
    ['resource:1', 'post:newer-source'],
  );
  assert.deepEqual(items[0].topics, ['coding-with-agents', 'ai']);
  assert.equal(items[0].sourceDate, '2020-01-01');
  assert.equal(items[0].href, '/summaries/legacy/source/');
  assert.equal(paginateRecentAdditions(items, 'ai')?.total, 1);
  assert.equal(paginateRecentAdditions(items, 'coding-with-agents')?.total, 2);
  assert.equal(
    buildRecentAdditions({ ...base, summaries: [] }).items[0].href,
    '/resources/coding-with-agents/main#resource-1',
  );
});

test('missing dates omit only frozen legacy entries; new public items must record a date', () => {
  const input = { ...base, resources: [{ ...resource, addedDate: undefined }] };
  assert.throws(
    () => buildRecentAdditions(input),
    /Missing addedDate.*resource:1/,
  );
  const { items, undatedCount } = buildRecentAdditions({
    ...input,
    history: { estimates: {}, legacyUndated: ['resource:1'] },
  });
  assert.deepEqual(
    items.map((item) => item.key),
    ['post:newer-source'],
  );
  assert.equal(undatedCount, 1);
  const estimate = {
    'resource:1': { date: '2026-10-08', commit: 'a'.repeat(40) },
  };
  const estimated = buildRecentAdditions({
    ...input,
    history: { estimates: estimate, legacyUndated: [] },
  });
  assert.equal(estimated.items[0].addedDate, '2026-10-08');
  assert.equal(estimated.items[0].estimateCommit, 'a'.repeat(40));
  const recorded = buildRecentAdditions({
    ...base,
    history: { estimates: estimate, legacyUndated: [] },
  });
  assert.equal(recorded.items[0].addedDate, '2026-10-09');
  assert.equal(recorded.items[0].estimateCommit, undefined);
  assert.throws(
    () =>
      buildRecentAdditions({
        ...base,
        history: { estimates: {}, legacyUndated: ['resource:1'] },
      }),
    /Remove dated addition/,
  );
  assert.throws(
    () =>
      buildRecentAdditions({
        ...input,
        history: { estimates: estimate, legacyUndated: ['resource:1'] },
      }),
    /Remove dated addition/,
  );
  assert.throws(
    () =>
      buildRecentAdditions({
        ...base,
        history: { estimates: {}, legacyUndated: ['resource:retired'] },
      }),
    /Unused legacyUndated/,
  );
});

test('discovery exclusions do not enter the timeline or qualify a future publication for an exemption', () => {
  for (const exclusion of [
    { draft: true },
    { unlisted: true },
    { noindex: true },
    { canonicalPath: '/coding/posts/another' },
  ]) {
    const hidden = {
      ...post,
      data: { ...post.data, addedDate: undefined, ...exclusion },
    };
    assert.equal(
      buildRecentAdditions({ ...base, posts: [hidden] }).items.length,
      1,
    );
  }
  assert.throws(
    () =>
      buildRecentAdditions({
        ...base,
        posts: [{ ...post, data: { ...post.data, addedDate: undefined } }],
      }),
    /Missing addedDate.*post:newer-source/,
  );
});

test('collection children keep their own dates and exact links rather than the parent date or collection order', () => {
  const children = [
    {
      ...summary,
      slug: 'collection__first',
      collection: 'series',
      order: 1,
      videoId: 'first',
      addedDate: '2026-10-01',
    },
    {
      ...summary,
      slug: 'collection__second',
      collection: 'series',
      order: 2,
      videoId: 'second',
      addedDate: '2026-10-10',
    },
  ];
  const { items } = buildRecentAdditions({
    ...base,
    resources: [{ ...resource, addedDate: undefined }],
    summaries: children,
    posts: [],
  });
  assert.deepEqual(
    items.map((item) => [item.key, item.href, item.addedDate]),
    [
      [
        'summary:collection/second',
        '/summaries/collection/second/',
        '2026-10-10',
      ],
      [
        'summary:collection/first',
        '/summaries/collection/first/',
        '2026-10-01',
      ],
    ],
  );
  assert.equal(groupRecentAdditions(items).length, 2);
  assert.throws(
    () => buildRecentAdditions({ ...base, summaries: children }),
    /move addedDate to its individual summaries/,
  );
  assert.throws(
    () =>
      buildRecentAdditions({
        ...base,
        summaries: [{ ...summary, addedDate: '2026-10-10' }],
      }),
    /move addedDate to its canonical resource/,
  );
  const series = buildRecentAdditions({
    ...base,
    resources: [{ ...resource, addedDate: undefined }],
    posts: [],
    summaries: children.map((child) => ({
      ...child,
      collection: null,
      order: null,
      videoId: null,
      series: 'episodes',
      episode: child.order,
    })),
  });
  assert.deepEqual(
    series.items.map((item) => item.href),
    ['/summaries/collection/second/', '/summaries/collection/first/'],
  );
  assert.throws(
    () => buildRecentAdditions({ ...base, summaries: [...children, summary] }),
    /Mixed/,
  );
  assert.throws(
    () =>
      buildRecentAdditions({
        ...base,
        summaries: [{ ...summary, resourceId: 99 }],
      }),
    /Orphan summary/,
  );
  assert.throws(
    () => buildRecentAdditions({ ...base, resources: [resource, resource] }),
    /Duplicate canonical/,
  );
});

test('pagination bounds atomic additions before batching, with deterministic ties and no missing children', () => {
  const children = Array.from({ length: 23 }, (_, i) => ({
    ...summary,
    slug: `collection__child-${String(i).padStart(2, '0')}`,
    collection: 'batch',
    order: i + 1,
    videoId: `video-${i}`,
    addedDate: '2026-10-10',
  }));
  const { items } = buildRecentAdditions({
    ...base,
    resources: [{ ...resource, addedDate: undefined }],
    summaries: [...children].reverse(),
    posts: [],
  });
  const first = paginateRecentAdditions(items);
  const second = paginateRecentAdditions(items, 'all', 2);
  assert.equal(first.items.length, 20);
  assert.equal(second.items.length, 3);
  assert.deepEqual(
    [...first.items, ...second.items].map((item) => item.href),
    children.map((child) => `/summaries/${child.slug.replace('__', '/')}/`),
  );
  assert.equal(groupRecentAdditions(first.items)[0].groups[0].length, 20);
  assert.equal(groupRecentAdditions(second.items)[0].groups[0].length, 3);
  assert.throws(
    () => paginateRecentAdditions(items, 'all', 3),
    /Invalid recent page/,
  );
  assert.throws(
    () => paginateRecentAdditions(items, 'all', 0),
    /Invalid recent page/,
  );
  assert.equal(paginateRecentAdditions(items, 'cloud')?.total, 0);
  assert.equal(getRecentPath(), '/recent/');
  assert.equal(getRecentPath('cloud', 2), '/recent/topic/cloud/page/2/');
});

test('addition dates reject impossible days and timestamp coercion at metadata and projection boundaries', () => {
  const options = {
    label: 'Fixture',
    isTopic: (value: unknown): value is string => typeof value === 'string',
    isSection: (value: unknown): value is string => value === 'main',
  };
  for (const addedDate of [
    '2026-02-29',
    '2026-04-31',
    '2026-1-01',
    '2026-10-10T12:00:00Z',
  ]) {
    assert.throws(
      () =>
        validateResourceManifest(
          [{ ...resource, primarySection: 'main', addedDate }],
          options,
        ),
      /addedDate/,
    );
    assert.throws(
      () =>
        buildRecentAdditions({
          ...base,
          posts: [{ ...post, data: { ...post.data, addedDate } }],
        }),
      /Invalid addedDate/,
    );
  }
  assert.equal(
    validateResourceManifest(
      [{ ...resource, primarySection: 'main', addedDate: '2024-02-29' }],
      options,
    )[0].addedDate,
    '2024-02-29',
  );
});
