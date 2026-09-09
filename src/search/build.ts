import { mkdir, readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { gzipSync } from 'node:zlib';
import { parseHTML } from 'linkedom';
import type { ResourceCatalog } from '../types/resources.ts';
import { type SearchDocument, validatePayload } from './documents.ts';

export const maximumSearchFileBytes = 4 * 1024 * 1024;
const normalizePath = (path: string) => path.replace(/\/$/, '') || '/';

export function getSearchableResourceIds(
  catalog: ResourceCatalog,
  sectionKey: string | undefined,
  catalogs: readonly ResourceCatalog[],
  summaries: readonly { resourceId: number }[],
): number[] {
  if (sectionKey === undefined) return [];
  return catalog.resourceIds.filter(
    (id) =>
      catalog.sectionByResourceId[id] === sectionKey &&
      !summaries.some((entry) => entry.resourceId === id) &&
      catalogs.find((owner) => owner.resourceIds.includes(id))?.slug ===
        catalog.slug,
  );
}

export function extractDocument(
  html: string,
  route: string,
  site: string,
): SearchDocument | null {
  const { document } = parseHTML(html);
  const regions = [...document.querySelectorAll('[data-search-body]')];
  if (
    !regions.length ||
    /(?:^|\/)slides\/?$/.test(route) ||
    /^\/404(?:\.html)?\/?$/.test(route)
  )
    return null;
  const robots = [...document.querySelectorAll('meta[name]')].filter((node) =>
    /^(robots|googlebot)$/i.test(node.getAttribute('name') ?? ''),
  );
  if (
    robots.some((node) =>
      /(?:^|[\s,])(noindex|none)(?:$|[\s,])/i.test(
        node.getAttribute('content') ?? '',
      ),
    )
  )
    return null;
  if (
    [...document.querySelectorAll('meta[http-equiv]')].some(
      (node) => node.getAttribute('http-equiv')?.toLowerCase() === 'refresh',
    )
  )
    return null;
  const canonical = document
    .querySelector('link[rel="canonical"]')
    ?.getAttribute('href');
  const url = normalizePath(route);
  if (canonical) {
    const target = new URL(canonical, site);
    if (
      target.origin !== new URL(site).origin ||
      normalizePath(target.pathname) !== url ||
      target.search ||
      target.hash
    )
      return null;
  }
  const owner = document.querySelector('[data-search-title]');
  if (!owner) throw new Error(`Search route ${url} has no title metadata`);
  const title = owner.getAttribute('data-search-title') ?? '';
  const parentTitle = owner.getAttribute('data-search-parent') ?? '';
  const description =
    owner.getAttribute('data-search-description') ??
    document
      .querySelector('meta[name="description"]')
      ?.getAttribute('content') ??
    '';
  document
    .querySelectorAll(
      '[data-search-ignore], script, style, template, nav, footer, button, [hidden], [aria-hidden="true"], .sr-only',
    )
    .forEach((node) => {
      node.remove();
    });
  // textContent alone merges adjacent block words in compressed HTML.
  document
    .querySelectorAll(
      'p, div, section, article, header, h1, h2, h3, h4, h5, h6, li, pre, blockquote, br, tr, td, details, summary',
    )
    .forEach((node) => {
      node.prepend(' ');
      node.append(' ');
    });
  const body = regions
    .filter(
      (node) =>
        node.isConnected && !node.parentElement?.closest('[data-search-body]'),
    )
    .map((node) => node.textContent)
    .join(' ')
    .replace(/\s+/gu, ' ')
    .trim();
  const result = { id: url, url, title, parentTitle, description, body };
  validatePayload({ version: 1, documents: [result] });
  return result;
}

async function files(directory: string): Promise<string[]> {
  const entries = await readdir(directory, { withFileTypes: true });
  return (
    await Promise.all(
      entries.map((entry) =>
        entry.isDirectory()
          ? files(join(directory, entry.name))
          : [join(directory, entry.name)],
      ),
    )
  ).flat();
}

export async function buildSearch(outputDirectory: string, site: string) {
  const documents: SearchDocument[] = [];
  for (const file of (await files(outputDirectory))
    .filter((file) => file.endsWith('.html'))
    .sort()) {
    const path = relative(outputDirectory, file).replaceAll('\\', '/');
    const route = `/${path.replace(/(?:^|\/)index\.html$/, '')}`;
    const document = extractDocument(await readFile(file, 'utf8'), route, site);
    if (document) documents.push(document);
  }
  const payload = JSON.stringify(validatePayload({ version: 1, documents }));
  const bytes = Buffer.byteLength(payload);
  const gzipBytes = gzipSync(payload).byteLength;
  if (bytes > maximumSearchFileBytes || gzipBytes > 2 * 1024 * 1024)
    throw new Error(
      `Search payload exceeds budget: ${bytes} raw / ${gzipBytes} gzip bytes`,
    );
  await mkdir(join(outputDirectory, 'search'), { recursive: true });
  await writeFile(join(outputDirectory, 'search/documents.json'), payload);
  console.info(
    `[search] ${documents.length} documents; ${bytes} raw / ${gzipBytes} gzip bytes.`,
  );
}

// Called on Workbox's actual entries, after size filtering. Cover every emitted JS
// chunk so lazy engine/UI imports and their dependencies cannot be omitted.
export async function assertSearchPrecache(
  entries: { url: string }[],
  directory: string,
) {
  const urls = new Set(entries.map((entry) => entry.url));
  const required = (await files(directory))
    .map((file) => relative(directory, file).replaceAll('\\', '/'))
    .filter((file) => file.startsWith('_astro/') && file.endsWith('.js'));
  required.push('search/documents.json');
  for (const path of required) {
    if (
      !urls.has(path) ||
      (await stat(join(directory, path))).size > maximumSearchFileBytes
    )
      throw new Error(`Search precache missing or oversized: ${path}`);
  }
}
