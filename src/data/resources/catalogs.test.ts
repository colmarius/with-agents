import assert from 'node:assert/strict';
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

test('registry exposes independent coding, cloud, and security catalogs', () => {
  assert.deepEqual(
    resourceCatalogs.map((entry) => entry.slug),
    ['coding-with-agents', 'cloud', 'security'],
  );
  assert.equal(resources.length, 64);
  assert.equal(
    getCatalogResources(requireCatalog('coding-with-agents')).length,
    52,
  );
  assert.equal(getCatalogResources(requireCatalog('cloud')).length, 12);
  assert.deepEqual(
    getCatalogResources(requireCatalog('security')).map(({ id }) => id),
    [57, 58],
  );
  assert.deepEqual(
    getCatalogResources(requireCatalog('cloud'), 'security').map(
      ({ id }) => id,
    ),
    [57, 58],
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
