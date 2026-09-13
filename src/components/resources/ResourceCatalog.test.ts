import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import test from 'node:test';
import { parseHTML } from 'linkedom';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';
import type { Resource, ResourceCatalog } from '../../types/resources.ts';

test('sparse catalog assessments render independently without grading or reordering other resources', async (t) => {
  // Keep the SSR fixture's optimizer from replacing a running dev server's cache.
  const cacheDir = mkdtempSync(join(tmpdir(), 'resource-catalog-test-'));
  t.after(() => rmSync(cacheDir, { recursive: true, force: true }));
  // Use the installed Vite JSX transform, without starting an HTTP server.
  const server = await createServer({
    configFile: false,
    cacheDir,
    oxc: { jsx: { runtime: 'automatic' } },
    server: { middlewareMode: true },
    appType: 'custom',
  });
  try {
    const { default: Catalog } = await server.ssrLoadModule(
      '/src/components/resources/ResourceCatalog.tsx',
    );
    const resource: Resource = {
      id: 1,
      title: 'Older working reference',
      url: 'https://example.com/reference',
      description: 'Practitioner examples, not comparative evidence.',
      type: 'video',
      source: 'Example publisher',
      date: '2025-01-01',
      topics: [],
    };
    const resources = [
      resource,
      { ...resource, id: 33, title: 'Evaluation', date: '2026-01-01' },
    ];
    const render = (
      assessmentsByResourceId?: ResourceCatalog['assessmentsByResourceId'],
    ) =>
      parseHTML(
        renderToStaticMarkup(
          createElement(Catalog, {
            resources,
            manifest: [],
            topicOptions: [],
            emptyMessage: 'No resources',
            assessmentsByResourceId,
          }),
        ),
      ).document;

    const sparse = render({
      1: { tier: 'essential', reason: 'A bounded starting point.' },
    });
    assert.deepEqual(
      [...sparse.querySelectorAll('div[id^="resource-"]')].map(
        (card) => card.id,
      ),
      ['resource-33', 'resource-1'],
    );
    assert.equal(
      sparse.querySelectorAll('[data-resource-relevance]').length,
      1,
    );
    assert.equal(
      sparse.querySelector('#resource-33 [data-resource-relevance]'),
      null,
    );
    assert.equal(
      sparse.querySelector('#resource-1 [data-resource-relevance]')
        ?.textContent,
      'Essential — A bounded starting point.',
    );
    assert.ok(
      sparse.querySelector('[data-resource-relevance][data-search-ignore]'),
    );
    assert.ok(
      sparse.querySelector('#resource-relevance-legend[data-search-ignore]'),
    );
    assert.match(
      sparse.querySelector('#resource-1')?.textContent ?? '',
      /not comparative evidence/,
    );

    const ungraded = render();
    assert.equal(ungraded.querySelector('[data-resource-relevance]'), null);
    assert.equal(ungraded.querySelector('#resource-relevance-legend'), null);
    assert.equal(ungraded.querySelectorAll('div[id^="resource-"]').length, 2);

    for (const [tier, reason] of [
      ['useful', 'Coding context'],
      ['essential', 'AI evaluation reference'],
    ] as const) {
      const document = render({ 33: { tier, reason } });
      const row = document.querySelector(
        '#resource-33 [data-resource-relevance]',
      );
      assert.equal(
        row?.querySelector('span')?.textContent?.toLowerCase(),
        tier,
      );
      assert.ok(row?.textContent?.includes(reason));
      assert.equal(
        document.querySelector('#resource-33 h3')?.textContent,
        'Evaluation',
      );
    }
  } finally {
    await server.close();
  }
});
