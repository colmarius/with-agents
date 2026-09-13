import assert from 'node:assert/strict';
import test from 'node:test';
import type { ResourceCatalog } from '../../types/resources.ts';
import {
  getSummaryPath,
  type ManifestEntry,
  resolveCatalogStartHere,
  resolveSummaryEntries,
  resolveSummarySlug,
} from './summaryResolver.ts';

const entry = (overrides: Partial<ManifestEntry> = {}): ManifestEntry => ({
  slug: 'summary',
  resourceId: 1,
  title: 'Summary',
  date: null,
  series: null,
  episode: null,
  collection: null,
  order: null,
  videoId: null,
  ...overrides,
});

test('resolves standalone, numbered series, and collection summaries', () => {
  assert.deepEqual(resolveSummaryEntries([entry()]), {
    kind: 'single',
    slug: 'summary',
  });
  const series = resolveSummaryEntries([
    entry({ slug: 'two', series: 'show', episode: 2 }),
    entry({ slug: 'one', series: 'show', episode: 1 }),
  ]);
  assert.equal(series?.kind, 'series');
  assert.deepEqual(
    series?.kind === 'series' ? series.entries.map(({ slug }) => slug) : [],
    ['two', 'one'],
  );
  const collection = resolveSummaryEntries([
    entry({ slug: 'b', collection: 'talks', date: '2026-02-01' }),
    entry({ slug: 'c', collection: 'talks', date: '2026-01-01' }),
    entry({ slug: 'a', collection: 'talks', date: '2026-02-01' }),
  ]);
  assert.equal(collection?.kind, 'collection');
  assert.deepEqual(
    collection?.kind === 'collection'
      ? collection.entries.map(({ slug }) => slug)
      : [],
    ['a', 'b', 'c'],
  );
  const curatedCollection = resolveSummaryEntries([
    entry({
      slug: 'second',
      collection: 'selected',
      date: '2026-02-01',
      order: 2,
      videoId: 'video-two',
    }),
    entry({
      slug: 'first',
      collection: 'selected',
      date: '2026-01-01',
      order: 1,
      videoId: 'video-one',
    }),
  ]);
  assert.equal(curatedCollection?.kind, 'collection');
  assert.deepEqual(
    curatedCollection?.kind === 'collection'
      ? curatedCollection.entries.map(({ slug }) => slug)
      : [],
    ['first', 'second'],
  );
});

test('rejects ambiguous and malformed grouped summaries', () => {
  const invalidCases = [
    [entry(), entry({ slug: 'other' })],
    [entry(), entry({ slug: 'episode', series: 'show', episode: 1 })],
    [
      entry({ series: 'one', episode: 1 }),
      entry({ slug: 'other', series: 'two', episode: 2 }),
    ],
    [
      entry({ series: 'show', episode: 1 }),
      entry({ slug: 'duplicate', series: 'show', episode: 1 }),
    ],
    [entry({ collection: 'talks' })],
    [
      entry({ collection: 'one', date: '2026-01-01' }),
      entry({ slug: 'other', collection: 'two', date: '2026-02-01' }),
    ],
    [
      entry({ collection: 'talks', date: '2026-01-01' }),
      entry({ slug: 'episode', series: 'show', episode: 1 }),
    ],
    [
      entry({
        collection: 'selected',
        date: '2026-01-01',
        order: 1,
        videoId: 'video-one',
      }),
      entry({
        slug: 'missing-order',
        collection: 'selected',
        date: '2026-02-01',
      }),
    ],
    [
      entry({
        collection: 'selected',
        date: '2026-01-01',
        order: 1,
        videoId: 'video-one',
      }),
      entry({
        slug: 'duplicate-order',
        collection: 'selected',
        date: '2026-02-01',
        order: 1,
        videoId: 'video-two',
      }),
    ],
  ];

  for (const entries of invalidCases) {
    assert.equal(resolveSummaryEntries(entries)?.kind, 'error');
  }
});

test('resolves default and requested summary slugs', () => {
  const single = resolveSummaryEntries([entry({ slug: 'standalone' })]);
  assert.ok(single);
  assert.equal(resolveSummarySlug(single), 'standalone');
  assert.equal(resolveSummarySlug(single, 'standalone'), 'standalone');
  assert.equal(resolveSummarySlug(single, 'other'), null);

  const series = resolveSummaryEntries([
    entry({ slug: 'latest', series: 'show', episode: 2 }),
    entry({ slug: 'first', series: 'show', episode: 1 }),
  ]);
  assert.ok(series);
  assert.equal(resolveSummarySlug(series), 'latest');
  assert.equal(resolveSummarySlug(series, 'first'), 'first');
  assert.equal(resolveSummarySlug(series, 'other'), null);
});

test('builds canonical paths from encoded nested summary slugs', () => {
  assert.equal(
    getSummaryPath('coding-with-agents__series__episode-one'),
    '/summaries/coding-with-agents/series/episode-one/',
  );
});

const catalog = (
  overrides: Partial<ResourceCatalog> = {},
): ResourceCatalog => ({
  slug: 'coding',
  title: 'Coding',
  description: 'Coding resources',
  indexDescription: 'Coding resources',
  sections: [],
  topicOptions: [],
  resourceIds: [1, 2],
  sectionByResourceId: { 1: 'workflows', 2: 'workflows' },
  assessmentsByResourceId: {
    1: { tier: 'essential', reason: 'Specific evidence, with limitations.' },
  },
  startHere: {
    title: 'Start here',
    description: 'A selected route',
    entries: [
      { resourceId: 1, summarySlug: 'coding/chosen', audience: 'Teams' },
    ],
  },
  ...overrides,
});

test('editorial picks honor an explicit child rather than default summary order', () => {
  const chosen = entry({ slug: 'coding__chosen', title: 'Chosen summary' });
  const other = entry({ slug: 'coding__other', title: 'Other summary' });
  for (const entries of [
    [chosen],
    [
      { ...other, series: 'show', episode: 8, date: '2026-09-01' },
      { ...chosen, series: 'show', episode: 1, date: '2025-01-01' },
    ],
    [
      {
        ...other,
        collection: 'talks',
        date: '2026-09-01',
        order: 1,
        videoId: 'new',
      },
      {
        ...chosen,
        collection: 'talks',
        date: '2025-01-01',
        order: 2,
        videoId: 'old',
      },
    ],
  ]) {
    assert.deepEqual(resolveCatalogStartHere(catalog(), entries), [
      {
        resourceId: 1,
        title: 'Chosen summary',
        href: '/summaries/coding/chosen/',
        audience: 'Teams',
        reason: 'Specific evidence, with limitations.',
      },
    ]);
  }
});

test('editorial pick order and catalog-owned reasons are independent of manifest order', () => {
  const definition = catalog({
    assessmentsByResourceId: {
      1: { tier: 'useful', reason: 'Workflow context' },
      2: { tier: 'essential', reason: 'Evaluation starting point' },
    },
    startHere: {
      title: 'Selected perspectives',
      description: 'Read by task',
      entries: [
        { resourceId: 2, summarySlug: 'ai/evaluation', audience: 'Evaluators' },
        { resourceId: 1, summarySlug: 'coding/chosen', audience: 'Teams' },
      ],
    },
  });
  const picks = resolveCatalogStartHere(definition, [
    entry({ slug: 'coding__chosen' }),
    entry({ resourceId: 2, slug: 'ai__evaluation' }),
  ]);
  assert.deepEqual(
    picks.map(({ resourceId, reason }) => [resourceId, reason]),
    [
      [2, 'Evaluation starting point'],
      [1, 'Workflow context'],
    ],
  );
  assert.deepEqual(
    resolveCatalogStartHere(catalog({ startHere: undefined }), []),
    [],
  );
});

test('invalid editorial picks fail with catalog, resource, and requested slug', () => {
  const chosen = entry({ slug: 'coding__chosen' });
  const invalidCases: [ResourceCatalog, ManifestEntry[], RegExp][] = [
    [catalog({ resourceIds: [2] }), [chosen], /does not belong/],
    [
      catalog({ assessmentsByResourceId: undefined }),
      [chosen],
      /requires an assessment/,
    ],
    [catalog(), [], /does not exist/],
    [catalog(), [entry({ slug: 'coding__other' })], /does not exist/],
    [catalog(), [{ ...chosen, resourceId: 2 }], /different resource/],
    [
      catalog(),
      [chosen, entry({ slug: 'coding__duplicate' })],
      /Multiple standalone/,
    ],
    [
      catalog(),
      [{ ...chosen, series: 'show', episode: null }],
      /must have an episode/,
    ],
    [
      catalog(),
      [
        {
          ...chosen,
          collection: 'talks',
          date: '2026-01-01',
          order: 1,
          videoId: 'one',
        },
        entry({
          slug: 'coding__other',
          collection: 'talks',
          date: '2026-02-01',
          order: 1,
          videoId: 'two',
        }),
      ],
      /Duplicate summary orders/,
    ],
  ];
  for (const [definition, entries, detail] of invalidCases) {
    assert.throws(
      () => resolveCatalogStartHere(definition, entries),
      (error) => {
        assert.ok(error instanceof Error);
        assert.match(
          error.message,
          /Catalog coding start here resource 1 summary coding\/chosen:/,
        );
        assert.match(error.message, detail);
        return true;
      },
    );
  }
});
