import { useEffect, useState } from 'react';
import type { RecentItem } from './recent-data';

type Props = {
  items: RecentItem[];
  scopes: { value: string; label: string }[];
  view: 'timeline' | 'compact';
};

const dateLabel = (date: string) =>
  new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
const linkClass =
  'text-indigo-700 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-600 focus-visible:outline-offset-4 rounded-sm';

export default function RecentPrototype({ items, scopes, view }: Props) {
  const [kind, setKind] = useState('all');
  const [scope, setScope] = useState('all');
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const readFilters = () => {
      const params = new URLSearchParams(window.location.search);
      const nextKind = params.get('kind') ?? 'all';
      const nextScope = params.get('scope') ?? 'all';
      setKind(['post', 'resource'].includes(nextKind) ? nextKind : 'all');
      setScope(
        scopes.some((entry) => entry.value === nextScope) ? nextScope : 'all',
      );
      setExpanded(false);
    };
    readFilters();
    window.addEventListener('popstate', readFilters);
    return () => window.removeEventListener('popstate', readFilters);
  }, [scopes]);

  function filter(nextKind: string, nextScope: string) {
    setKind(nextKind);
    setScope(nextScope);
    setExpanded(false);
    const url = new URL(window.location.href);
    for (const [key, value] of [
      ['kind', nextKind],
      ['scope', nextScope],
    ]) {
      if (value === 'all') url.searchParams.delete(key);
      else url.searchParams.set(key, value);
    }
    window.history.pushState(null, '', url);
  }

  const filtered = items.filter(
    (item) =>
      (kind === 'all' || item.kind === kind) &&
      (scope === 'all' || item.catalogs.includes(scope)),
  );
  const visible =
    view === 'compact' && !expanded ? filtered.slice(0, 5) : filtered;
  const dates = [...new Set(visible.map((item) => item.addedDate))];
  const count = filtered.reduce(
    (total, item) => total + (item.children.length || 1),
    0,
  );

  function row(item: RecentItem) {
    return (
      <article
        key={item.key}
        data-recent-item={item.key}
        className="min-w-0 py-6 first:pt-0 last:pb-0"
      >
        <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="rounded bg-indigo-50 px-2 py-1 font-medium capitalize text-indigo-700">
            {item.format}
          </span>
          {item.catalogs.map((catalog) => (
            <span key={catalog} className="text-gray-600">
              {scopes.find((entry) => entry.value === catalog)?.label}
            </span>
          ))}
          {view === 'compact' && (
            <span className="text-gray-500">
              Added {dateLabel(item.addedDate)} · demo
            </span>
          )}
        </div>
        <h3
          className={`${view === 'compact' ? 'text-lg' : 'text-xl'} font-medium leading-snug text-gray-900`}
        >
          {item.href ? (
            <a
              className="hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-indigo-600"
              href={item.href}
            >
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h3>
        {view === 'timeline' && (
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
            {item.description}
          </p>
        )}
        <p className="mt-2 text-xs leading-relaxed text-gray-500">
          {item.source}
          {item.sourceDate &&
            ` · ${item.kind === 'post' ? 'Post published' : 'Source dated'} ${dateLabel(item.sourceDate)}`}
        </p>
        {item.children.length > 0 ? (
          <details className="mt-3 rounded-lg border border-gray-200 px-4 py-3">
            <summary
              className={`cursor-pointer text-sm font-medium ${linkClass}`}
            >
              {item.children.length} summaries added — explore the batch
            </summary>
            <ul className="mt-3 space-y-4 border-l-2 border-indigo-100 pl-4">
              {item.children.map((child) => (
                <li key={child.href}>
                  <a href={child.href} className={`text-sm ${linkClass}`}>
                    {child.title} →
                  </a>
                  {child.sourceDate && (
                    <p className="mt-1 text-xs text-gray-500">
                      Source dated {dateLabel(child.sourceDate)}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <a
            href={item.href}
            className={`mt-3 inline-block text-sm font-medium ${linkClass}`}
          >
            {item.kind === 'post' ? 'Read field guide' : 'Read summary'} →
          </a>
        )}
      </article>
    );
  }

  return (
    <section
      data-search-ignore
      aria-label="Recent additions prototype"
      className={
        view === 'compact' ? 'rounded-xl border border-gray-200 p-5 sm:p-8' : ''
      }
    >
      {view === 'compact' && (
        <div className="mb-6">
          <h2 className="text-2xl font-light text-gray-950">
            Latest additions
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            A small catch-up panel for the home page.
          </p>
        </div>
      )}
      <div className="mb-7 flex flex-wrap items-end gap-5 border-b border-gray-200 pb-5">
        <fieldset
          aria-label="Content type"
          className="flex flex-wrap gap-1 rounded-lg bg-gray-100 p-1"
        >
          {(
            [
              ['all', 'Everything'],
              ['post', 'Posts'],
              ['resource', 'Resources'],
            ] as const
          ).map(([value, label]) => (
            <button
              key={value}
              type="button"
              aria-pressed={kind === value}
              onClick={() => filter(value, scope)}
              className={`rounded-md px-3 py-2 text-sm focus-visible:outline-2 focus-visible:outline-indigo-600 ${kind === value ? 'bg-white font-medium text-indigo-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}
            >
              {label}
            </button>
          ))}
        </fieldset>
        <label className="flex flex-col gap-1 text-xs font-medium text-gray-600">
          Context / catalog
          <select
            aria-label="Context / catalog"
            value={scope}
            onChange={(event) => filter(kind, event.target.value)}
            className="max-w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus-visible:outline-indigo-600"
          >
            <option value="all">All contexts</option>
            {scopes.map((entry) => (
              <option key={entry.value} value={entry.value}>
                {entry.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      <p role="status" className="mb-7 text-sm text-gray-500">
        {count} additions in this sample
        {view === 'compact'
          ? ` · ${visible.length} of ${filtered.length} rows shown`
          : ' · newest added first'}
      </p>
      {filtered.length === 0 && (
        <div className="rounded-lg bg-gray-50 p-8 text-center">
          <h3 className="font-medium text-gray-900">
            No additions in this sample
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Try another context or show everything. This is not the complete
            catalog.
          </p>
          <button
            type="button"
            onClick={() => filter('all', 'all')}
            className={`mt-4 text-sm ${linkClass}`}
          >
            Clear filters
          </button>
        </div>
      )}
      {view === 'timeline' ? (
        dates.map((date) => (
          <section
            key={date}
            aria-label={`Added ${dateLabel(date)} (illustrative)`}
            className="grid gap-4 border-t border-gray-200 py-8 first:border-0 md:grid-cols-[145px_1fr] md:gap-8"
          >
            <h2 className="text-sm font-medium text-gray-900">
              <span className="mb-1 block text-xs font-normal uppercase tracking-wider text-gray-500">
                Added · demo
              </span>
              <time dateTime={date}>{dateLabel(date)}</time>
            </h2>
            <div className="divide-y divide-gray-100 border-l-2 border-indigo-100 pl-5 sm:pl-7">
              {visible.filter((item) => item.addedDate === date).map(row)}
            </div>
          </section>
        ))
      ) : (
        <div className="divide-y divide-gray-100">{visible.map(row)}</div>
      )}
      {view === 'compact' && filtered.length > 5 && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className={`mt-7 border-t border-gray-200 pt-5 text-sm font-medium ${linkClass}`}
        >
          {expanded
            ? 'Show fewer additions ↑'
            : `Older additions · ${filtered.length - 5} more rows ↓`}
        </button>
      )}
      <noscript>
        <p className="mt-5 text-sm text-gray-600">
          Enable JavaScript to filter or expand the compact list. Content links
          and collection disclosures work without it.
        </p>
      </noscript>
    </section>
  );
}
