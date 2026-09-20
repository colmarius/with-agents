import assert from 'node:assert/strict';
import { globSync, readFileSync } from 'node:fs';
import test from 'node:test';
import type {
  Resource,
  ResourceAssessment,
  ResourceCatalog,
} from '../../types/resources.ts';
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

test('Knowledge Project belongs only to the product decision-making catalog', () => {
  assert.deepEqual(
    resourceCatalogs
      .filter((catalog) => catalog.resourceIds.includes(139))
      .map(({ slug }) => slug),
    ['product-decisions'],
  );
  assert.deepEqual(
    getCatalogResources(
      requireCatalog('product-decisions'),
      'judgment-execution',
    ).map(({ id }) => id),
    [139],
  );
});

test('registry exposes catalogs and cross-listed security resources', () => {
  assert.deepEqual(
    resourceCatalogs.map((entry) => entry.slug),
    ['coding-with-agents', 'cloud', 'security', 'ai', 'product-decisions'],
  );
  assert.deepEqual(
    getCatalogResources(requireCatalog('security')).map(({ id }) => id),
    [98, 57, 100, 101, 102, 103, 105, 106, 58, 104, 37],
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
  assert.deepEqual(
    getCatalogResources(
      requireCatalog('security'),
      'threat-detection-response',
    ).map(({ id }) => id),
    [58, 37],
  );
  assert.strictEqual(
    getCatalogResources(requireCatalog('security')).find(({ id }) => id === 37),
    getCatalogResources(requireCatalog('coding-with-agents')).find(
      ({ id }) => id === 37,
    ),
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
    [128, 129, 130, 131],
  );
  assert.deepEqual(
    ai.resourceIds,
    [
      149, 146, 127, 123, 121, 120, 108, 119, 110, 107, 111, 52, 49, 23, 33, 55,
      73, 128, 129, 130, 131, 134, 137,
    ],
  );
  for (const [section, ids] of [
    ['concepts-capabilities', [149, 146, 121, 108, 49, 23, 33]],
    ['economics-industry', [127, 120, 52, 55, 73]],
    [
      'implications-risks',
      [123, 119, 110, 107, 111, 128, 129, 130, 131, 134, 137],
    ],
  ] as const) {
    assert.deepEqual(
      getCatalogResources(ai, section).map(({ id }) => id),
      ids,
    );
  }
  for (const id of [
    146, 127, 123, 120, 119, 52, 49, 23, 128, 129, 130, 131, 134, 137,
  ]) {
    assert.ok(!coding.resourceIds.includes(id), `${id} is AI-only`);
    assert.equal(coding.sectionByResourceId[id], undefined);
    assert.equal(resources.filter((resource) => resource.id === id).length, 1);
  }
  for (const id of [149, 121, 108, 33, 55, 73, 107, 111, 110]) {
    assert.ok(coding.resourceIds.includes(id), `${id} remains in Coding`);
    assert.strictEqual(
      getCatalogResources(ai).find((resource) => resource.id === id),
      getCatalogResources(coding).find((resource) => resource.id === id),
      `${id} uses one canonical record`,
    );
  }
  for (const id of [124, 125, 126, 122, 118, 44, 45, 21, 20]) {
    assert.ok(coding.resourceIds.includes(id));
    assert.ok(!ai.resourceIds.includes(id), `${id} stays coding-specific`);
  }
});

test('Cloud, Security, and Harari resources have one standalone summary each', () => {
  const resourceIds = [
    ...Array.from({ length: 10 }, (_, index) => index + 97),
    128,
    129,
    130,
    131,
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
    if (resourceId >= 128) {
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

test('curation preserves catalog-specific grades without changing canonical resources', () => {
  assert.equal(
    requireCatalog('coding-with-agents').assessmentsByResourceId?.[33]?.tier,
    'useful',
  );
  assert.equal(
    requireCatalog('ai').assessmentsByResourceId?.[33]?.tier,
    'essential',
  );
  for (const [slug, ids] of [
    ['coding-with-agents', [4, 6, 10, 51, 116]],
    ['cloud', [58, 64, 66]],
    ['security', [58]],
    ['ai', [120, 130]],
  ] as const) {
    for (const id of ids) {
      assert.equal(
        requireCatalog(slug).assessmentsByResourceId?.[id]?.tier,
        'context',
      );
    }
  }
  for (const entry of resources) {
    assert.ok(!('tier' in entry));
    assert.ok(!('assessmentsByResourceId' in entry));
  }
});

test('starting routes preserve editorial order and point to summaries owned by their resources', () => {
  assert.deepEqual(
    resourceCatalogs.map(({ startHere }) =>
      startHere?.entries.map(({ resourceId }) => resourceId),
    ),
    [
      [14, 38, 17, 124, 35],
      [97, 59, 63, 100, 61],
      [104, 102, 57, 37, 101],
      [127, 33, 49, 129],
      undefined,
    ],
  );
  assert.equal(requireCatalog('ai').startHere?.title, 'Selected perspectives');
  for (const slug of ['coding-with-agents', 'cloud', 'security']) {
    assert.equal(requireCatalog(slug).startHere?.title, 'Start here');
  }
  assert.equal(
    requireCatalog('cloud').startHere?.entries[1].summarySlug,
    'google-cloud/google-cloud-serverless-expeditions/workflows-retries-and-saga',
  );
  assert.equal(
    requireCatalog('cloud').startHere?.entries[2].summarySlug,
    'google-cloud/google-cloud-engineering-for-reliability/getting-started-with-slos',
  );
  assert.deepEqual(
    requireCatalog('coding-with-agents')
      .startHere?.entries.slice(3)
      .map(({ summarySlug }) => summarySlug),
    [
      'coding-with-agents/building-ambitious-software-jonathan-kelley-dioxus-labs-cognition',
      'coding-with-agents/measuring-the-impact-of-ai-on-software-engineering-laura-tacho',
    ],
  );
  assert.deepEqual(
    requireCatalog('security')
      .startHere?.entries.slice(2, 4)
      .map(({ summarySlug }) => summarySlug),
    [
      'google-cloud/google-cloud-security-basics/how-to-use-cloud-audit-logging',
      'coding-with-agents/black-hat-usa-2026-the-breaking-news-the-openai-hugging-face-incident',
    ],
  );
  for (const entry of resourceCatalogs.flatMap(
    ({ startHere }) => startHere?.entries ?? [],
  )) {
    assert.match(entry.summarySlug, /^[a-z0-9-]+(?:\/[a-z0-9-]+)*$/);
    assert.ok(!entry.summarySlug.startsWith('summaries/'));
    const summary = readFileSync(
      `src/content/summaries/${entry.summarySlug}.md`,
      'utf8',
    );
    assert.equal(
      Number(summary.match(/^resourceId: (\d+)$/m)?.[1]),
      entry.resourceId,
      entry.summarySlug,
    );
  }
});

const contextAssessment: ResourceAssessment = {
  tier: 'context',
  reason: 'Background for a specialist task.',
};
const startingEntry = {
  resourceId: 1,
  summarySlug: 'topic/intro',
  audience: 'Developers learning the topic',
};
const startingRoute = {
  title: 'Start here',
  description: 'A scoped route.',
  entries: [startingEntry],
};

test('curation remains optional and sparse, and starting entries may use any tier', () => {
  const sparse: ResourceCatalog = {
    ...catalog,
    resourceIds: [1, 2],
    sectionByResourceId: { 1: 'section', 2: 'section' },
    assessmentsByResourceId: { 1: contextAssessment },
  };
  const values = [resource, { ...resource, id: 2 }];
  validateResourceCatalogs(values, [catalog]);
  validateResourceCatalogs(values, [
    { ...catalog, assessmentsByResourceId: {} },
  ]);
  validateResourceCatalogs(values, [sparse]);
  validateResourceCatalogs(values, [{ ...sparse, startHere: startingRoute }]);
  assert.equal(sparse.assessmentsByResourceId?.[2], undefined);
});

test('assessment validation rejects non-members, unknown tiers, and blank reasons', () => {
  assert.throws(
    () =>
      validateResourceCatalogs(
        [resource, { ...resource, id: 2 }],
        [{ ...catalog, assessmentsByResourceId: { 2: contextAssessment } }],
      ),
    /assessment for non-member resource ID 2/,
  );
  assert.throws(
    () =>
      validateResourceCatalogs(
        [resource],
        [
          {
            ...catalog,
            assessmentsByResourceId: {
              1: {
                ...contextAssessment,
                tier: 'recommended',
              } as unknown as ResourceAssessment,
            },
          },
        ],
      ),
    /invalid assessment tier/,
  );
  for (const reason of ['', ' \n\t ']) {
    assert.throws(
      () =>
        validateResourceCatalogs(
          [resource],
          [
            {
              ...catalog,
              assessmentsByResourceId: { 1: { ...contextAssessment, reason } },
            },
          ],
        ),
      /nonblank assessment reason/,
    );
  }
});

test('starting routes reject empty or duplicate entries and non-member or unassessed picks', () => {
  const assessed: ResourceCatalog = {
    ...catalog,
    assessmentsByResourceId: { 1: contextAssessment },
  };
  for (const entries of [[], [startingEntry, startingEntry]]) {
    assert.throws(
      () =>
        validateResourceCatalogs(
          [resource],
          [{ ...assessed, startHere: { ...startingRoute, entries } }],
        ),
      /nonempty unique resource IDs/,
    );
  }
  assert.throws(
    () =>
      validateResourceCatalogs(
        [resource, { ...resource, id: 2 }],
        [
          {
            ...assessed,
            startHere: {
              ...startingRoute,
              entries: [{ ...startingEntry, resourceId: 2 }],
            },
          },
        ],
      ),
    /start here references non-member resource ID 2/,
  );
  for (const assessmentsByResourceId of [undefined, {}]) {
    assert.throws(
      () =>
        validateResourceCatalogs(
          [resource],
          [{ ...catalog, assessmentsByResourceId, startHere: startingRoute }],
        ),
      /must have an assessment/,
    );
  }
});

test('starting routes reject blank panel text, summary slugs, and audiences', () => {
  const assessed: ResourceCatalog = {
    ...catalog,
    assessmentsByResourceId: { 1: contextAssessment },
  };
  for (const field of ['title', 'description'] as const) {
    for (const value of ['', ' \n ']) {
      assert.throws(
        () =>
          validateResourceCatalogs(
            [resource],
            [{ ...assessed, startHere: { ...startingRoute, [field]: value } }],
          ),
        /nonblank title and description/,
      );
    }
  }
  for (const field of ['summarySlug', 'audience'] as const) {
    for (const value of ['', ' \t ']) {
      assert.throws(
        () =>
          validateResourceCatalogs(
            [resource],
            [
              {
                ...assessed,
                startHere: {
                  ...startingRoute,
                  entries: [{ ...startingEntry, [field]: value }],
                },
              },
            ],
          ),
        /nonblank summary slug and audience/,
      );
    }
  }
});
