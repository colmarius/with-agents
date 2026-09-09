import assert from 'node:assert/strict';
import { existsSync, globSync, readFileSync } from 'node:fs';
import test from 'node:test';
import { resourceCatalogs, resources } from '../data/resources/catalogs.ts';
import { validatePayload } from './documents.ts';
import { createSearch } from './engine.ts';

// Run npm test after npm run build to exercise the real production artifact.
test('built corpus covers source-owned summaries, metadata, ranking and catalog ownership', {
  skip:
    !existsSync('dist/search/documents.json') &&
    'Run npm run build first for production-corpus coverage',
}, () => {
  const { documents } = validatePayload(
    JSON.parse(readFileSync('dist/search/documents.json', 'utf8')),
  );
  const byUrl = new Map(documents.map((document) => [document.url, document]));
  const engine = createSearch(documents);
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
