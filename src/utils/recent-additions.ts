import {
  decodeSummarySlug,
  getSummaryPath,
  type ManifestEntry,
  resolveSummaryEntries,
} from '../components/resources/summaryResolver.ts';
import { type SiteContextSlug, siteContexts } from '../data/site-contexts.ts';
import type { Resource, ResourceCatalog } from '../types/resources.ts';
import { isCalendarDate } from './calendar-date.ts';
import { getPostPath, isSearchablePost } from './posts.ts';

export type AdditionHistory = {
  estimates: Record<string, { date: string; commit: string }>;
  legacyUndated: readonly string[];
};

export type AdditionPost = {
  id: string;
  data: {
    title: string;
    description: string;
    context: SiteContextSlug;
    pubDate: Date;
    addedDate?: string;
    draft: boolean;
    unlisted: boolean;
    noindex?: boolean;
    canonicalPath?: string;
  };
};

export type RecentAddition = {
  key: string;
  title: string;
  description: string;
  href: string;
  kind: 'post' | 'resource';
  format: string;
  source: string;
  sourceDate: string | null;
  addedDate: string;
  estimateCommit?: string;
  topics: string[];
  collection?: { key: string; title: string; description: string };
};

export type RecentTopic = { slug: string; label: string };
export const recentPageSize = 20;

export function buildRecentAdditions(input: {
  resources: readonly Resource[];
  catalogs: readonly ResourceCatalog[];
  posts: readonly AdditionPost[];
  summaries: readonly (ManifestEntry & { addedDate?: string })[];
  history: AdditionHistory;
}) {
  const { resources, catalogs, posts, summaries, history } = input;
  const items: RecentAddition[] = [];
  const legacy = new Set(history.legacyUndated);
  const seen = new Set<string>();
  let undatedCount = 0;
  const topics: RecentTopic[] = catalogs.map((catalog) => ({
    slug: catalog.slug,
    label:
      siteContexts.find((context) => context.catalogSlug === catalog.slug)
        ?.navigationLabel ?? catalog.title,
  }));

  function add(item: Omit<RecentAddition, 'addedDate'>, addedDate?: string) {
    if (seen.has(item.key)) throw new Error(`Duplicate addition ${item.key}`);
    seen.add(item.key);
    const estimate = history.estimates[item.key];
    if (legacy.has(item.key) && (addedDate !== undefined || estimate)) {
      throw new Error(`Remove dated addition ${item.key} from legacyUndated`);
    }
    const date = addedDate ?? estimate?.date;
    if (date === undefined) {
      if (!legacy.has(item.key)) {
        throw new Error(
          `Missing addedDate for new public addition ${item.key}. Record its first library addition day; do not use the source publication date.`,
        );
      }
      undatedCount++;
      return;
    }
    if (!isCalendarDate(date))
      throw new Error(`Invalid addedDate for ${item.key}: ${date}`);
    if (addedDate === undefined && !/^[a-f0-9]{40}$/.test(estimate.commit)) {
      throw new Error(`Missing history evidence for ${item.key}`);
    }
    items.push({
      ...item,
      addedDate: date,
      ...(addedDate === undefined ? { estimateCommit: estimate.commit } : {}),
    });
  }

  const resourceIds = new Set(resources.map((resource) => resource.id));
  if (resourceIds.size !== resources.length)
    throw new Error('Duplicate canonical resource IDs');
  for (const summary of summaries) {
    if (!resourceIds.has(summary.resourceId))
      throw new Error(`Orphan summary ${summary.slug}`);
  }
  for (const resource of resources) {
    const memberships = catalogs.filter((catalog) =>
      catalog.resourceIds.includes(resource.id),
    );
    if (!memberships.length)
      throw new Error(`Resource ${resource.id} has no catalog`);
    const entries = summaries.filter(
      (entry) => entry.resourceId === resource.id,
    );
    const ref = resolveSummaryEntries(entries);
    if (ref?.kind === 'error')
      throw new Error(`Resource ${resource.id}: ${ref.message}`);
    const common = {
      kind: 'resource' as const,
      source: resource.source,
      topics: memberships.map((catalog) => catalog.slug),
    };
    if (ref?.kind === 'collection' || ref?.kind === 'series') {
      if (resource.addedDate !== undefined) {
        throw new Error(
          `Resource ${resource.id} is grouped: move addedDate to its individual summaries`,
        );
      }
      for (const entry of entries) {
        add(
          {
            ...common,
            key: `summary:${decodeSummarySlug(entry.slug)}`,
            title: entry.title,
            description: '',
            href: getSummaryPath(entry.slug),
            format: 'Collection summary',
            sourceDate: entry.date
              ? new Date(entry.date).toISOString().slice(0, 10)
              : null,
            collection: {
              key: `resource:${resource.id}`,
              title: resource.title,
              description: resource.description,
            },
          },
          entry.addedDate,
        );
      }
    } else {
      if (entries.some((entry) => entry.addedDate !== undefined)) {
        throw new Error(
          `Standalone summary for resource ${resource.id}: move addedDate to its canonical resource`,
        );
      }
      // Summary-less resources retain the same catalog anchor contract as search.
      const catalog = memberships[0];
      const section = catalog.sections.find(
        (entry) => entry.key === catalog.sectionByResourceId[resource.id],
      );
      const href = ref
        ? getSummaryPath(ref.slug)
        : section &&
          `/resources/${catalog.slug}/${section.routeSlug}#resource-${resource.id}`;
      if (!href) throw new Error(`Resource ${resource.id} has no destination`);
      add(
        {
          ...common,
          key: `resource:${resource.id}`,
          title: resource.title,
          description: resource.description,
          href,
          format: resource.type,
          sourceDate: resource.date,
        },
        resource.addedDate,
      );
    }
  }
  for (const post of posts.filter(isSearchablePost)) {
    const context = siteContexts.find(
      (entry) => entry.slug === post.data.context,
    );
    if (
      !context ||
      !topics.some((topic) => topic.slug === context.catalogSlug)
    ) {
      throw new Error(`Post ${post.id} has no topic`);
    }
    add(
      {
        key: `post:${post.id}`,
        title: post.data.title,
        description: post.data.description,
        href: getPostPath(post),
        kind: 'post',
        format: 'Field guide',
        source: 'With Agents',
        sourceDate: post.data.pubDate.toISOString().slice(0, 10),
        topics: [context.catalogSlug],
      },
      post.data.addedDate,
    );
  }
  for (const key of legacy) {
    if (!seen.has(key))
      throw new Error(
        `Unused legacyUndated identity ${key}: remove it or migrate it with the original content identity`,
      );
  }
  items.sort(
    (a, b) =>
      b.addedDate.localeCompare(a.addedDate) || a.key.localeCompare(b.key),
  );
  return { items, topics, undatedCount };
}

export const getRecentPath = (topic = 'all', page = 1) =>
  `/recent${topic === 'all' ? '' : `/topic/${topic}`}${page === 1 ? '' : `/page/${page}`}/`;

export function paginateRecentAdditions(
  items: readonly RecentAddition[],
  topic = 'all',
  page = 1,
  pageSize = recentPageSize,
) {
  if (!Number.isInteger(pageSize) || pageSize < 1)
    throw new Error('Invalid recent page size');
  const filtered = items.filter(
    (item) => topic === 'all' || item.topics.includes(topic),
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  if (!Number.isInteger(page) || page < 1 || page > totalPages)
    throw new Error('Invalid recent page');
  return {
    items: filtered.slice((page - 1) * pageSize, page * pageSize),
    total: filtered.length,
    totalPages,
    page,
  };
}

/** Group only after pagination so a large import cannot bypass the page bound. */
export function groupRecentAdditions(items: readonly RecentAddition[]) {
  const days = new Map<string, Map<string, RecentAddition[]>>();
  for (const item of items) {
    let groups = days.get(item.addedDate);
    if (!groups) {
      groups = new Map();
      days.set(item.addedDate, groups);
    }
    const key = item.collection?.key ?? item.key;
    const group = groups.get(key) ?? [];
    group.push(item);
    groups.set(key, group);
  }
  return [...days].map(([date, groups]) => ({
    date,
    groups: [...groups.values()],
  }));
}
