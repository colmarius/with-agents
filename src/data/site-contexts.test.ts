import assert from 'node:assert/strict';
import test from 'node:test';
import { getResourceCatalog } from './resources/catalogs.ts';
import { siteContexts } from './site-contexts.ts';

test('site contexts own the stable landing and catalog routes', () => {
  assert.deepEqual(
    siteContexts.map(({ slug, catalogSlug }) => ({ slug, catalogSlug })),
    [
      { slug: 'coding', catalogSlug: 'coding-with-agents' },
      { slug: 'cloud', catalogSlug: 'cloud' },
      { slug: 'security', catalogSlug: 'security' },
    ],
  );

  for (const context of siteContexts) {
    assert.ok(getResourceCatalog(context.catalogSlug));
  }
});

test('coding navigation owns established post routes', () => {
  assert.deepEqual(
    siteContexts.map(({ slug, navigationPrefixes }) => ({
      slug,
      navigationPrefixes,
    })),
    [
      { slug: 'coding', navigationPrefixes: ['/coding', '/posts'] },
      { slug: 'cloud', navigationPrefixes: ['/cloud'] },
      { slug: 'security', navigationPrefixes: ['/security'] },
    ],
  );
});

test('only coding curates public field guides', () => {
  assert.deepEqual(
    siteContexts.map((context) => ({
      slug: context.slug,
      featuredPostIds:
        'featuredPostIds' in context ? context.featuredPostIds : null,
    })),
    [
      {
        slug: 'coding',
        featuredPostIds: [
          'agentic-coding-2026',
          'capable-coworker-coding-agents',
          'make-the-agent-prove-it',
        ],
      },
      { slug: 'cloud', featuredPostIds: null },
      { slug: 'security', featuredPostIds: null },
    ],
  );
});
