import assert from 'node:assert/strict';
import test from 'node:test';
import {
  type ManifestEntry,
  resolveSummaryEntries,
} from './summaryResolver.ts';

const entry = (overrides: Partial<ManifestEntry> = {}): ManifestEntry => ({
  slug: 'summary',
  resourceId: 1,
  title: 'Summary',
  date: null,
  series: null,
  episode: null,
  collection: null,
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
    ['one', 'two'],
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
    ['c', 'a', 'b'],
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
  ];

  for (const entries of invalidCases) {
    assert.equal(resolveSummaryEntries(entries)?.kind, 'error');
  }
});
