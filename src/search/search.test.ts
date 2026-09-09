import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import type { ResourceCatalog } from '../types/resources.ts';
import { isSearchablePost } from '../utils/posts.ts';
import {
  assertSearchPrecache,
  buildSearch,
  extractDocument,
  getSearchableResourceIds,
  maximumSearchFileBytes,
} from './build.ts';
import { type SearchDocument, validatePayload } from './documents.ts';
import { createSearch, getExcerpt } from './engine.ts';

const document: SearchDocument = {
  id: '/guide',
  url: '/guide',
  title: 'Practical guide',
  parentTitle: '',
  description: 'Short introduction',
  body: 'Detailed useful content',
};
const payload = (documents: unknown[] = [document]) => ({
  version: 1,
  documents,
});
const html = (
  head = '',
  body = '<article data-search-body data-search-title="Guide">Useful content</article>',
) => `<html><head>${head}</head><body>${body}</body></html>`;
const extract = (head = '', body?: string, route = '/guide') =>
  extractDocument(html(head, body), route, 'https://with-agents.dev');

test('payload validation rejects incomplete data, duplicate identifiers/URLs and unsafe destinations', () => {
  assert.deepEqual(validatePayload(payload()), payload());
  for (const value of [
    null,
    {},
    { ...payload(), version: 2 },
    payload([]),
    payload([null]),
    payload([{ ...document, body: null }]),
    payload([{ ...document, title: ' ' }]),
    payload([document, { ...document, url: '/other' }]),
    payload([document, { ...document, id: 'other', url: '/guide/' }]),
  ]) {
    assert.throws(() => validatePayload(value));
  }
  for (const url of [
    'https://evil.example',
    '//evil.example',
    '/\\evil.example',
    'javascript:alert(1)',
    '/a?redirect=x',
    '/a#x',
    '/a/../b',
    '/%2e%2e/b',
    '/%2fother',
    '/a%2fb',
    '/%5cother',
    '/%252fother',
    '/a%00b',
    '/a\nb',
    '/a%20b',
    '/%ff',
  ]) {
    assert.throws(() => validatePayload(payload([{ ...document, url }])), url);
  }
  assert.doesNotThrow(() =>
    validatePayload(payload([{ ...document, url: '/summaries/caf%C3%A9' }])),
  );
});

test('extraction combines owned regions, preserves details and inline words, and excludes controls', () => {
  const result = extract(
    '<meta name="description" content="Description &amp; context">',
    '<nav>Global navigation</nav><header data-search-title="Guide" data-search-parent="Series" data-search-body><h1>First &amp; second</h1></header><article data-search-body><p>Con<strong>cur</strong>rency</p><details><summary>Mechanism</summary><p>Useful detail</p></details><div data-search-body>Nested once</div><div data-search-ignore><p>Sibling links</p></div><nav>Other episode</nav><button>Share</button><script>secret()</script><p hidden>Hidden text</p><footer>Footer</footer></article><p>Unowned</p>',
  );
  assert.deepEqual(result, {
    id: '/guide',
    url: '/guide',
    title: 'Guide',
    parentTitle: 'Series',
    description: 'Description & context',
    body: 'First & second Concurrency Mechanism Useful detail Nested once',
  });
});

test('extraction excludes opt-out routes, robots, alternate canonicals and redirects independently', () => {
  assert.equal(extract('', '<article>Not opted in</article>'), null);
  for (const head of [
    '<meta name="robots" content="follow, NOINDEX">',
    '<meta name="googlebot" content="none">',
    '<link rel="canonical" href="https://with-agents.dev/other">',
    '<link rel="canonical" href="https://elsewhere.dev/guide">',
    '<meta http-equiv="Refresh" content="0;url=/other">',
  ]) {
    assert.equal(extract(head), null, head);
  }
  for (const route of ['/404.html', '/404', '/coding/posts/guide/slides/'])
    assert.equal(extract('', undefined, route), null);
  assert.ok(
    extract('<link rel="canonical" href="https://with-agents.dev/guide/">'),
  );
  assert.throws(
    () => extract('', '<div data-search-body>Missing title</div>'),
    /title metadata/,
  );
  assert.throws(() =>
    extract(
      '',
      '<div data-search-body data-search-title="Empty"><span data-search-ignore>Only ignored text</span></div>',
    ),
  );
});

test('post search eligibility composes public listing with robots and canonical checks', () => {
  const post = {
    id: 'guide',
    data: { context: 'coding' as const, draft: false, unlisted: false },
  };
  assert.equal(isSearchablePost(post), true);
  for (const data of [
    { draft: true },
    { unlisted: true },
    { noindex: true },
    { canonicalPath: '/coding/posts/other' },
  ])
    assert.equal(
      isSearchablePost({ ...post, data: { ...post.data, ...data } }),
      false,
    );
  assert.equal(
    isSearchablePost({
      ...post,
      data: { ...post.data, canonicalPath: '/coding/posts/guide/' },
    }),
    true,
  );
});

test('generic parent/title ranking, AND terms and final prefix work without query exceptions', () => {
  const series = {
    ...document,
    id: '/episode',
    url: '/episode',
    title: 'Tool choices',
    parentTitle: 'State of Agentic Coding',
    body: 'Firecracker isolates the integration environment.',
  };
  const bodyMatch = {
    ...document,
    body: 'The state of agentic coding is evolving.',
  };
  const partial = {
    ...document,
    id: '/partial',
    url: '/partial',
    title: 'Agentic coding',
    body: 'Coding tips',
  };
  const engine = createSearch([bodyMatch, partial, series]);
  assert.deepEqual(
    engine.search('StAtE of agentic cod').map(({ id }) => id),
    ['/episode', '/guide'],
  );
  assert.deepEqual(
    engine.search('Firecracker environment').map(({ id }) => id),
    ['/episode'],
  );
  assert.deepEqual(engine.search('state nonexistent'), []);
  assert.deepEqual(engine.search('   '), []);
  assert.deepEqual(engine.search('""'), []);
  assert.deepEqual(engine.search('sta of agentic coding'), []);
});

test('cross-listed summary-less metadata belongs only to the first catalog owning section', () => {
  const first: ResourceCatalog = {
    slug: 'z-first',
    title: 'First catalog',
    description: 'Introduction',
    indexDescription: 'Index',
    sections: [],
    topicOptions: [],
    resourceIds: [17, 23, 41],
    sectionByResourceId: { 17: 'beta', 23: 'beta', 41: 'alpha' },
  };
  const second: ResourceCatalog = {
    ...first,
    slug: 'a-second',
    title: 'Second catalog',
    sectionByResourceId: { 17: 'alpha', 23: 'alpha', 41: 'beta' },
  };
  const catalogs = [first, second];
  const summaries = [{ resourceId: 23 }];
  const cards = [
    {
      id: 17,
      title: 'Unsummarized title',
      description: 'Unsummarized description',
      subtitle: 'Unsummarized subtitle',
    },
    {
      id: 23,
      title: 'Summarized title',
      description: 'Summarized description',
      subtitle: 'Summarized subtitle',
    },
    {
      id: 41,
      title: 'Other section title',
      description: 'Other section description',
      subtitle: 'Other section subtitle',
    },
  ];
  const cases: [ResourceCatalog, string | undefined, number[]][] = [
    [first, undefined, []],
    [first, 'alpha', [41]],
    [first, 'beta', [17]],
    [second, undefined, []],
    [second, 'alpha', []],
    [second, 'beta', []],
  ];
  const documents = cases.map(([catalog, section, expectedIds]) => {
    // The same selector is called by ResourceCatalogPage, not a test copy of
    // its ownership rules. Synthetic HTML isolates the corpus boundary.
    const selectedIds = getSearchableResourceIds(
      catalog,
      section,
      catalogs,
      summaries,
    );
    assert.deepEqual(selectedIds, expectedIds, `${catalog.slug}/${section}`);
    const markup = `<h1 data-search-title="Catalog" data-search-body>Introduction</h1>${cards
      .map(
        (card) =>
          `<div ${selectedIds.includes(card.id) ? 'data-search-body' : ''}><h3>${card.title}</h3><p>${card.subtitle}</p><p>${card.description}</p><div data-search-ignore>Controls</div></div>`,
      )
      .join('')}`;
    const result = extract(
      '',
      markup,
      `/resources/${catalog.slug}${section ? `/${section}` : ''}`,
    );
    assert.ok(result);
    return result;
  });
  for (const value of [
    cards[0].title,
    cards[0].description,
    cards[0].subtitle,
  ]) {
    assert.deepEqual(
      documents
        .filter(({ body }) => body.includes(value))
        .map(({ url }) => url),
      ['/resources/z-first/beta'],
    );
  }
  for (const value of [
    cards[1].title,
    cards[1].description,
    cards[1].subtitle,
  ]) {
    assert.ok(documents.every(({ body }) => !body.includes(value)));
  }
  assert.ok(documents.every(({ body }) => !body.includes('Controls')));
  // Registry order, not lexical slug order, defines ownership. Adding a
  // summary removes metadata from both memberships, including the owner.
  assert.deepEqual(
    getSearchableResourceIds(second, 'alpha', [second, first], summaries),
    [17],
  );
  assert.deepEqual(
    getSearchableResourceIds(first, 'beta', [second, first], summaries),
    [],
  );
  assert.deepEqual(
    getSearchableResourceIds(first, 'beta', catalogs, [
      ...summaries,
      { resourceId: 17 },
    ]),
    [],
  );
});

test('excerpt selects late body matches, uses plain text, and falls back to description', () => {
  const source = {
    ...document,
    body: `${'Opening context. '.repeat(30)}RareToken explains <markup> literally. ${'Trailing context. '.repeat(30)}`,
  };
  const excerpt = getExcerpt(source, 'raretoken');
  assert.match(excerpt, /RareToken explains <markup> literally/);
  assert.ok(excerpt.startsWith('…') && excerpt.endsWith('…'));
  assert.ok(excerpt.length <= 222);
  assert.equal(getExcerpt(source, 'unmatched'), 'Short introduction');
});

test('build and actual precache assertions reject missing, oversized and invalid output', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'search-test-'));
  try {
    await writeFile(join(directory, 'index.html'), html());
    await buildSearch(directory, 'https://with-agents.dev');
    await mkdir(join(directory, '_astro'));
    await writeFile(join(directory, '_astro/engine.js'), 'export default 1');
    const entries = [
      { url: 'search/documents.json' },
      { url: '_astro/engine.js' },
    ];
    await assertSearchPrecache(entries, directory);
    await assert.rejects(
      assertSearchPrecache(entries.slice(0, 1), directory),
      /engine.js/,
    );
    await assert.rejects(
      assertSearchPrecache(entries.slice(1), directory),
      /documents.json/,
    );
    await writeFile(
      join(directory, '_astro/engine.js'),
      'x'.repeat(maximumSearchFileBytes + 1),
    );
    await assert.rejects(assertSearchPrecache(entries, directory), /oversized/);
    await writeFile(
      join(directory, 'index.html'),
      html('', '<div data-search-body>Broken</div>'),
    );
    await assert.rejects(
      buildSearch(directory, 'https://with-agents.dev'),
      /title metadata/,
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
