import type { CollectionEntry } from 'astro:content';
import { resourceCatalogs, resources } from '../../data/resources/catalogs';
import { siteContexts } from '../../data/site-contexts';
import { getPostPath, isSearchablePost } from '../../utils/posts';
import {
  getSummaryPath,
  resolveSummaryEntries,
  toManifestEntry,
} from '../resources/summaryResolver';

export type RecentItem = {
  key: string;
  title: string;
  description: string;
  kind: 'post' | 'resource';
  format: string;
  addedDate: string;
  sourceDate: string;
  source: string;
  href: string;
  catalogs: string[];
  children: { title: string; href: string; sourceDate: string }[];
};

export const recentScopes = resourceCatalogs.map((catalog) => ({
  value: catalog.slug,
  label:
    siteContexts.find((context) => context.catalogSlug === catalog.slug)
      ?.navigationLabel ?? catalog.title,
}));

// Illustrative dates ONLY: these fixtures must never populate canonical metadata.
// A production projection will read explicit addedDate from each item's owner.
const resourceSamples = [
  { id: 102, addedDate: '2026-10-10', children: 0 },
  { id: 164, addedDate: '2026-10-10', children: 0 },
  { id: 57, addedDate: '2026-10-09', children: 3 },
  { id: 170, addedDate: '2026-10-09', children: 0 },
  { id: 139, addedDate: '2026-10-08', children: 2 },
  { id: 97, addedDate: '2026-10-08', children: 0 },
  { id: 103, addedDate: '2026-10-06', children: 0 },
  { id: 49, addedDate: '2026-10-06', children: 0 },
];
const postSamples = [
  { id: 'make-the-agent-prove-it', addedDate: '2026-10-10' },
  { id: 'durable-context-coding-agents', addedDate: '2026-10-08' },
  { id: 'capable-coworker-coding-agents', addedDate: '2026-10-06' },
];

export function buildRecentPrototype(
  summaries: CollectionEntry<'summaries'>[],
  posts: CollectionEntry<'posts'>[],
): RecentItem[] {
  const manifest = summaries.map(toManifestEntry);
  const items: RecentItem[] = resourceSamples.map((sample) => {
    const resource = resources.find((entry) => entry.id === sample.id);
    if (!resource) throw new Error(`Missing prototype resource ${sample.id}`);
    const ref = resolveSummaryEntries(
      manifest.filter((entry) => entry.resourceId === resource.id),
    );
    if (!ref || ref.kind === 'error') {
      throw new Error(`Invalid prototype summary for ${resource.id}`);
    }
    const children =
      ref.kind === 'single'
        ? []
        : ref.entries.slice(0, sample.children).map((entry) => ({
            title: entry.title,
            href: getSummaryPath(entry.slug),
            sourceDate: entry.date
              ? new Date(entry.date).toISOString().slice(0, 10)
              : '',
          }));
    if (ref.kind !== 'single' && children.length === 0) {
      throw new Error(
        `Grouped prototype resource ${resource.id} needs children`,
      );
    }
    return {
      key: `resource:${resource.id}`,
      title: resource.title,
      description: resource.description,
      kind: 'resource',
      format: children.length ? 'Collection additions' : resource.type,
      addedDate: sample.addedDate,
      sourceDate: children.length ? '' : resource.date,
      source: resource.source,
      href: ref.kind === 'single' ? getSummaryPath(ref.slug) : '',
      catalogs: resourceCatalogs
        .filter((catalog) => catalog.resourceIds.includes(resource.id))
        .map((catalog) => catalog.slug),
      children,
    };
  });
  for (const sample of postSamples) {
    const post = posts.find(
      (entry) => entry.id === sample.id && isSearchablePost(entry),
    );
    if (!post) throw new Error(`Missing public prototype post ${sample.id}`);
    const context = siteContexts.find(
      (entry) => entry.slug === post.data.context,
    );
    if (!context) throw new Error(`Missing post context ${post.data.context}`);
    items.push({
      key: `post:${post.id}`,
      title: post.data.title,
      description: post.data.description,
      kind: 'post',
      format: 'Field guide',
      addedDate: sample.addedDate,
      sourceDate: post.data.pubDate.toISOString().slice(0, 10),
      source: 'With Agents',
      href: getPostPath(post),
      catalogs: [context.catalogSlug],
      children: [],
    });
  }
  return items.sort(
    (a, b) =>
      b.addedDate.localeCompare(a.addedDate) || a.key.localeCompare(b.key),
  );
}
