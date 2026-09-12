import assert from 'node:assert/strict';
import { existsSync, globSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { resourceCatalogs, resources } from '../data/resources/catalogs.ts';
import { validatePayload } from './documents.ts';
import { createSearch } from './engine.ts';

// Run npm test after npm run build to exercise the real production artifact.
test('built corpus covers source-owned summaries, metadata, ranking and catalog ownership', {
  skip:
    !existsSync('dist/search/documents.json') &&
    'Run npm run build first for production-corpus coverage',
}, async () => {
  const { documents } = validatePayload(
    JSON.parse(readFileSync('dist/search/documents.json', 'utf8')),
  );
  const byUrl = new Map(documents.map((document) => [document.url, document]));
  const engine = await createSearch(documents);
  for (const url of [
    '/ai',
    '/resources/ai',
    '/resources/ai/concepts-capabilities',
    '/resources/ai/economics-industry',
    '/resources/ai/implications-risks',
  ]) {
    assert.ok(byUrl.has(url), `Missing AI page ${url}`);
  }
  assert.ok(!existsSync('dist/ai/posts/index.html'), 'No empty AI post index');
  for (const [slug, id, section] of [
    ['ais-hidden-debt-problem-explained', 127, 'economics-industry'],
    ['ai-mathematical-results', 123, 'implications-risks'],
    [
      'paul-graham-on-startups-ambition-and-great-founders',
      120,
      'economics-industry',
    ],
    [
      'sam-altman-on-astra-agi-and-the-future-of-openai',
      119,
      'implications-risks',
    ],
    [
      'sam-altman-on-building-openai-betting-on-the-impossible',
      52,
      'economics-industry',
    ],
    [
      'why-ai-models-stop-learning-rich-sutton-khurram-javed',
      49,
      'concepts-capabilities',
    ],
    ['salvatore-sanfilippo-ai-concepts', 23, 'concepts-capabilities'],
  ] as const) {
    const url = `/summaries/coding-with-agents/${slug}`;
    assert.ok(byUrl.has(url), `Preserve legacy summary URL ${url}`);
    const { document } = parseHTML(
      readFileSync(`dist${url}/index.html`, 'utf8'),
    );
    const parent = document.querySelector('nav[aria-label="Parent page"] a');
    assert.equal(
      parent?.getAttribute('href'),
      `/resources/ai/${section}#resource-${id}`,
    );
    assert.match(parent?.textContent ?? '', /Back to AI resources/);
  }
  const { document: sharedSummary } = parseHTML(
    readFileSync(
      'dist/summaries/coding-with-agents/antirez-zip-5-agi-benchmarks/index.html',
      'utf8',
    ),
  );
  assert.equal(
    sharedSummary
      .querySelector('nav[aria-label="Parent page"] a')
      ?.getAttribute('href'),
    '/resources/coding-with-agents/reliability#resource-121',
  );
  assert.equal(
    sharedSummary
      .querySelector('nav[aria-label="Other resource catalogs"] a')
      ?.getAttribute('href'),
    '/resources/ai/concepts-capabilities#resource-121',
  );
  const { document: implications } = parseHTML(
    readFileSync('dist/resources/ai/implications-risks/index.html', 'utf8'),
  );
  const harariSelection = implications.querySelector('#yuval-noah-harari');
  assert.ok(harariSelection);
  assert.ok(harariSelection.hasAttribute('data-search-ignore'));
  assert.match(
    harariSelection.textContent ?? '',
    /not a single official playlist/,
  );
  assert.equal(
    implications.querySelectorAll('div.scroll-mt-24[id^="resource-"]').length,
    9,
  );
  const { document: allAI } = parseHTML(
    readFileSync('dist/resources/ai/index.html', 'utf8'),
  );
  assert.equal(
    allAI.querySelectorAll('div.scroll-mt-24[id^="resource-"]').length,
    19,
  );
  for (const document of [implications, allAI]) {
    assert.deepEqual(
      [...document.querySelectorAll('nav[aria-label="AI collections"] a')].map(
        (a) => a.textContent?.trim(),
      ),
      [
        'All',
        'Concepts & capabilities',
        'Economics & industry',
        'Implications & risks',
      ],
    );
  }
  const { document: oldHarariRoute } = parseHTML(
    readFileSync('dist/resources/ai/yuval-noah-harari/index.html', 'utf8'),
  );
  const destination = '/resources/ai/implications-risks#yuval-noah-harari';
  assert.equal(
    oldHarariRoute
      .querySelector('meta[http-equiv="refresh"]')
      ?.getAttribute('content'),
    `0; url=${destination}`,
  );
  assert.ok(oldHarariRoute.querySelector(`a[href="${destination}"]`));
  assert.ok(!byUrl.has('/resources/ai/yuval-noah-harari'));
  assert.deepEqual(
    [
      ...harariSelection.querySelectorAll(
        'nav[aria-label="Further discovery — official sources"] a',
      ),
    ].map((link) => link.getAttribute('href')),
    [
      'https://www.ynharari.com/category/video/',
      'https://www.youtube.com/@YuvalNoahHarari',
      'https://www.youtube.com/playlist?list=PLfc2WtGuVPdkfwPMfvU0PNkOYPzDDCBxt',
    ],
  );
  assert.equal(
    harariSelection.querySelectorAll('a[href^="/summaries/"]').length,
    4,
  );
  for (const [id, slug, videoId, publisher] of [
    [
      128,
      'the-next-50-years-humanity-ai-power',
      '_V_ed5fuexA',
      'Yuval Noah Harari',
    ],
    [
      129,
      'ai-has-hacked-the-code-of-human-civilization',
      'hBtVGwuJzpk',
      'Yuval Noah Harari',
    ],
    [
      130,
      'ezra-klein-trump-core-delusion',
      '9NCxS__rtAo',
      'The Ezra Klein Show',
    ],
    [
      131,
      'building-trust-age-of-disinformation',
      't_KKNNeH8jU',
      'Yuval Noah Harari',
    ],
  ]) {
    const url = `/summaries/ai/yuval-noah-harari/${slug}`;
    assert.ok(harariSelection.querySelector(`a[href="${url}/"]`), url);
    assert.ok(byUrl.has(url));
    assert.ok(engine.search('Harari').some((result) => result.url === url));
    const { document } = parseHTML(
      readFileSync(`dist${url}/index.html`, 'utf8'),
    );
    const original = [...document.querySelectorAll('a')].find((a) =>
      a.textContent?.includes('Watch original video'),
    );
    assert.equal(
      original?.getAttribute('href'),
      `https://www.youtube.com/watch?v=${videoId}`,
    );
    assert.ok(
      [...document.querySelectorAll('span')].some(
        (span) => span.textContent === publisher,
      ),
    );
    assert.equal(
      document
        .querySelector('nav[aria-label="Parent page"] a')
        ?.getAttribute('href'),
      `/resources/ai/implications-risks#resource-${id}`,
    );
  }
  const summarySources = globSync('src/content/summaries/**/*.md').map(
    (path) => {
      const source = readFileSync(path, 'utf8');
      const resourceId = Number(source.match(/^resourceId:\s*(\d+)/m)?.[1]);
      return {
        url: path.replace('src/content/', '/').replace(/\.md$/, ''),
        resourceId,
        source,
      };
    },
  );
  // Expectations come from public source files and the canonical manifests,
  // not from the extractor or a captured engine result.
  for (const source of summarySources) {
    const document = byUrl.get(source.url);
    assert.ok(document, `Missing summary ${source.url}`);
    const resource = resources.find(
      (resource) => resource.id === source.resourceId,
    );
    assert.ok(resource);
    assert.equal(document.parentTitle, resource.title);
    assert.ok(
      document.body.includes(resource.description.replace(/\s+/gu, ' ')),
      source.url,
    );
    if (resource.subtitle)
      assert.ok(
        document.body.includes(resource.subtitle.replace(/\s+/gu, ' ')),
        source.url,
      );
    assert.ok(!document.body.includes('Back to Coding with Agents resources'));
    assert.ok(!document.body.includes('Browse 10 summaries'));
  }
  const episodes = summarySources.filter(({ source }) =>
    /^series:\s*"state-of-agentic-coding"/m.test(source),
  );
  assert.ok(episodes.length >= 10, 'The source baseline includes ten episodes');
  const results = engine.search('state of agentic coding');
  assert.ok(
    results
      .slice(0, 5)
      .some(({ url }) => episodes.some((episode) => episode.url === url)),
  );
  for (const episode of episodes)
    assert.ok(
      results.some(({ url }) => url === episode.url),
      episode.url,
    );
  const episodeTen = summarySources.find(({ url }) =>
    url.endsWith('/state-of-agentic-coding-episode-10'),
  );
  assert.ok(episodeTen && !episodeTen.source.includes('monthly conversations'));
  assert.ok(
    engine
      .search('monthly conversations')
      .some(({ url }) => url === episodeTen.url),
    'Description-only phrase remains searchable',
  );
  const oauth = summarySources.find(({ url }) =>
    url.endsWith('/rfc-9700-oauth-2-security-bcp'),
  );
  assert.ok(oauth && !/requirements/i.test(oauth.source));
  assert.ok(
    engine
      .search('deployment requirements')
      .some(({ url }) => url === oauth.url),
    'Subtitle-only term remains searchable',
  );
  for (const [query, url] of [
    [
      'Firecracker',
      '/summaries/coding-with-agents/state-of-agentic-coding-episode-10',
    ],
    [
      'raising an agent',
      '/summaries/coding-with-agents/raising-an-agent-episode-9',
    ],
    [
      'Spanner',
      '/summaries/google-cloud/google-cloud-serverless-expeditions/serverless-relational-data-at-scale',
    ],
    ['RFC 9700', '/summaries/security/rfc-9700-oauth-2-security-bcp'],
  ])
    assert.ok(
      engine.search(query).some((document) => document.url === url),
      `${query}: ${url}`,
    );
  assert.deepEqual(engine.search('StAtE OF AGENTIC CODING'), results);
  assert.deepEqual(engine.search('zzzxqvnonexistent'), []);
  assert.deepEqual(engine.search(' '), []);
  for (const resource of resources) {
    const hasSummary = summarySources.some(
      (source) => source.resourceId === resource.id,
    );
    const catalogDocuments = documents.filter(
      ({ url, body }) =>
        url.startsWith('/resources/') &&
        body.includes(resource.description.replace(/\s+/gu, ' ')),
    );
    if (hasSummary) {
      assert.equal(
        catalogDocuments.length,
        0,
        `Summarized card leaked: ${resource.title}`,
      );
    } else {
      const owner = resourceCatalogs.find((catalog) =>
        catalog.resourceIds.includes(resource.id),
      );
      assert.ok(owner);
      const section = owner.sections.find(
        (section) => section.key === owner.sectionByResourceId[resource.id],
      );
      assert.ok(section);
      assert.deepEqual(
        catalogDocuments.map(({ url }) => url),
        [`/resources/${owner.slug}/${section.routeSlug}`],
        resource.title,
      );
    }
  }
  for (const document of documents)
    assert.ok(
      !/\/slides$|^\/404|^\/api\/|^\/youtube\/|^\/transcripts\//.test(
        document.url,
      ),
    );
  for (const path of globSync('src/content/posts/**/*.md')) {
    const source = readFileSync(path, 'utf8');
    const context = source.match(/^context:\s*["']?(\w+)/m)?.[1];
    const slug = path.split('/').at(-1)?.replace(/\.md$/, '');
    if (/^(?:draft|unlisted|noindex):\s*true/m.test(source))
      assert.ok(!byUrl.has(`/${context}/posts/${slug}`), path);
  }
});
