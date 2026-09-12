import assert from 'node:assert/strict';
import { globSync, readFileSync } from 'node:fs';
import test from 'node:test';
import type { Resource, ResourceCatalog } from '../../types/resources.ts';
import {
  getCatalogResources,
  getResourceCatalog,
  resourceCatalogs,
  resources,
  validateResourceCatalogs,
} from './catalogs.ts';

const resource: Resource = {
  id: 1,
  title: 'Resource',
  url: 'https://example.com/resource',
  description: 'Description',
  type: 'video',
  source: 'Source',
  date: '2026-08-24',
  topics: ['topic'],
};

const catalog: ResourceCatalog = {
  slug: 'catalog',
  title: 'Catalog',
  description: 'Description',
  indexDescription: 'Index description',
  sections: [
    {
      key: 'section',
      label: 'Section',
      description: 'Description',
      routeSlug: 'section',
    },
  ],
  topicOptions: [{ slug: 'topic', label: 'Topic' }],
  resourceIds: [1],
  sectionByResourceId: { 1: 'section' },
};

const requireCatalog = (slug: string): ResourceCatalog => {
  const result = getResourceCatalog(slug);
  assert.ok(result);
  return result;
};

test('registry exposes catalogs and cross-listed security resources', () => {
  assert.deepEqual(
    resourceCatalogs.map((entry) => entry.slug),
    ['coding-with-agents', 'cloud', 'security', 'ai'],
  );
  assert.deepEqual(
    getCatalogResources(requireCatalog('security')).map(({ id }) => id),
    [98, 57, 100, 101, 102, 103, 105, 106, 58, 104],
  );
  assert.deepEqual(
    getCatalogResources(requireCatalog('cloud')).map(({ id }) => id),
    [97, 98, 99, 62, 64, 66, 100, 59, 60, 61, 63, 68, 65, 67, 101, 57, 58],
  );
  assert.deepEqual(
    getCatalogResources(requireCatalog('cloud'), 'security').map(
      ({ id }) => id,
    ),
    [101, 57, 58],
  );
  assert.deepEqual(
    getCatalogResources(requireCatalog('security'), 'identity-access').map(
      ({ id }) => id,
    ),
    [100, 101, 102, 103, 105, 106],
  );
});

test('AI groups broad resources while preserving substantive coding cross-listings', () => {
  const ai = requireCatalog('ai');
  const coding = requireCatalog('coding-with-agents');
  assert.deepEqual(
    ai.sections.map(({ key }) => key),
    ['concepts-capabilities', 'economics-industry', 'implications-risks'],
  );
  assert.deepEqual(
    ai.sections[2].featuredSelection?.resourceIds,
    [125, 126, 127, 128],
  );
  assert.deepEqual(
    ai.resourceIds,
    [
      124, 123, 121, 120, 108, 119, 110, 107, 111, 52, 49, 23, 33, 55, 73, 125,
      126, 127, 128,
    ],
  );
  for (const [section, ids] of [
    ['concepts-capabilities', [121, 108, 49, 23, 33]],
    ['economics-industry', [124, 120, 52, 55, 73]],
    ['implications-risks', [123, 119, 110, 107, 111, 125, 126, 127, 128]],
  ] as const) {
    assert.deepEqual(
      getCatalogResources(ai, section).map(({ id }) => id),
      ids,
    );
  }
  for (const id of [124, 123, 120, 119, 52, 49, 23, 125, 126, 127, 128]) {
    assert.ok(!coding.resourceIds.includes(id), `${id} is AI-only`);
    assert.equal(coding.sectionByResourceId[id], undefined);
    assert.equal(resources.filter((resource) => resource.id === id).length, 1);
  }
  for (const id of [121, 108, 33, 55, 73, 107, 111, 110]) {
    assert.ok(coding.resourceIds.includes(id), `${id} remains in Coding`);
    assert.strictEqual(
      getCatalogResources(ai).find((resource) => resource.id === id),
      getCatalogResources(coding).find((resource) => resource.id === id),
      `${id} uses one canonical record`,
    );
  }
  for (const id of [122, 118, 44, 45, 21, 20]) {
    assert.ok(coding.resourceIds.includes(id));
    assert.ok(!ai.resourceIds.includes(id), `${id} stays coding-specific`);
  }
});

test('Cloud, Security, and Harari resources have one standalone summary each', () => {
  const resourceIds = [
    ...Array.from({ length: 10 }, (_, index) => index + 97),
    125,
    126,
    127,
    128,
  ];
  const summaryCountByResourceId = new Map(
    resourceIds.map((resourceId) => [resourceId, 0]),
  );

  for (const path of globSync('src/content/summaries/**/*.md')) {
    const summary = readFileSync(path, 'utf8');
    const resourceId = Number(summary.match(/^resourceId: (\d+)$/m)?.[1]);
    const count = summaryCountByResourceId.get(resourceId);
    if (count === undefined) continue;

    assert.doesNotMatch(summary, /^collection:/m, `${path} must be standalone`);
    summaryCountByResourceId.set(resourceId, count + 1);
    if (resourceId >= 125) {
      assert.doesNotMatch(summary, /^(series|order|videoId):/m);
      const transcript = readFileSync(
        path.replace('/summaries/', '/transcripts/'),
        'utf8',
      );
      const source = resources.find(({ id }) => id === resourceId);
      assert.ok(source);
      assert.equal(resources.filter(({ id }) => id === resourceId).length, 1);
      assert.ok(transcript.includes(`sourceUrl: "${source.url}"`));
      assert.ok(
        transcript.includes(
          `summarySlug: "${path.replace('src/content/summaries/', '').replace(/\.md$/, '')}"`,
        ),
      );
    }
  }

  assert.deepEqual(
    [...summaryCountByResourceId.values()],
    resourceIds.map(() => 1),
  );
});

test('registry validation accepts canonical cross-catalog membership', () => {
  validateResourceCatalogs(
    [resource],
    [catalog, { ...catalog, slug: 'second-catalog' }],
  );
});

test('registry validation rejects duplicate IDs and invalid membership', () => {
  assert.throws(
    () => validateResourceCatalogs([resource, resource], [catalog]),
    /Canonical resource IDs must be unique/,
  );
  assert.throws(
    () =>
      validateResourceCatalogs(
        [resource],
        [
          {
            ...catalog,
            resourceIds: [2],
            sectionByResourceId: { 2: 'section' },
          },
        ],
      ),
    /references unknown resource ID 2/,
  );
  assert.throws(
    () =>
      validateResourceCatalogs(
        [resource],
        [{ ...catalog, sectionByResourceId: { 1: 'unknown' } }],
      ),
    /has unknown section unknown/,
  );
  assert.throws(
    () =>
      validateResourceCatalogs([resource], [{ ...catalog, topicOptions: [] }]),
    /has unknown topic topic/,
  );
});

test('featured selections reference distinct resources in their own section', () => {
  const withSelection = (resourceIds: number[]): ResourceCatalog => ({
    ...catalog,
    resourceIds: [1, 2],
    sectionByResourceId: { 1: 'section', 2: 'other' },
    sections: [
      {
        ...catalog.sections[0],
        featuredSelection: {
          anchor: 'selection',
          label: 'Selection',
          description: 'Editorial links',
          resourceIds,
          discoveryLinks: [],
        },
      },
      {
        key: 'other',
        label: 'Other',
        description: 'Other section',
        routeSlug: 'other',
      },
    ],
  });
  const values = [resource, { ...resource, id: 2 }];
  validateResourceCatalogs(values, [withSelection([1])]);
  for (const ids of [[], [1, 1]]) {
    assert.throws(
      () => validateResourceCatalogs(values, [withSelection(ids)]),
      /nonempty unique resource IDs/,
    );
  }
  for (const ids of [[2], [99]]) {
    assert.throws(
      () => validateResourceCatalogs(values, [withSelection(ids)]),
      /must belong to section section/,
    );
  }
});
