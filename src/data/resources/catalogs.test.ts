import assert from 'node:assert/strict';
import { globSync, readFileSync } from 'node:fs';
import test from 'node:test';
import type { Resource, ResourceCatalog } from '../../types/resources.ts';
import {
  getCatalogResources,
  getResourceCatalog,
  resourceCatalogs,
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
    ['coding-with-agents', 'cloud', 'security'],
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

test('new Cloud and Security articles have one standalone summary each', () => {
  const resourceIds = Array.from({ length: 10 }, (_, index) => index + 97);
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
