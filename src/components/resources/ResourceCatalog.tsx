import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Resource, ResourceTopicOption } from '../../types/resources';
import { formatDate, titleCase } from '../../utils';
import { Button, ChevronDownIcon, DocumentIcon, ExternalLinkIcon } from '../ui';
import ResourceListItem from './ResourceListItem';
import {
  getSummaryPath,
  type ManifestEntry,
  resolveSummaryEntries,
  resolveSummarySlug,
  type SummaryRef,
} from './summaryResolver';

const SUMMARY_QUERY_PARAM = 'summary';

type Topic = string;

type ResourceCatalogProps = {
  manifest: ManifestEntry[];
  resources: Resource[];
  topicOptions: readonly ResourceTopicOption[];
  emptyMessage: string;
};

const ResourceCatalog = ({
  manifest,
  resources,
  topicOptions,
  emptyMessage,
}: ResourceCatalogProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isTopicFiltersOpen, setIsTopicFiltersOpen] = useState(false);

  const topicLabels = useMemo(
    () =>
      Object.fromEntries(topicOptions.map(({ slug, label }) => [slug, label])),
    [topicOptions],
  );

  const summaryEntriesByResourceId = useMemo(() => {
    const entriesByResource = new Map<number, ManifestEntry[]>();

    manifest.forEach((entry) => {
      const entries = entriesByResource.get(entry.resourceId);
      if (entries) {
        entries.push(entry);
      } else {
        entriesByResource.set(entry.resourceId, [entry]);
      }
    });

    return entriesByResource;
  }, [manifest]);

  const resolveSummaryRef = useCallback(
    (resourceId: number): SummaryRef | null => {
      return resolveSummaryEntries(
        summaryEntriesByResourceId.get(resourceId) ?? [],
      );
    },
    [summaryEntriesByResourceId],
  );

  const summaryEntriesBySlug = useMemo(
    () => new Map(manifest.map((entry) => [entry.slug, entry])),
    [manifest],
  );

  useEffect(() => {
    const legacySlug = new URL(window.location.href).searchParams.get(
      SUMMARY_QUERY_PARAM,
    );

    if (legacySlug && summaryEntriesBySlug.has(legacySlug)) {
      window.location.replace(getSummaryPath(legacySlug));
    }
  }, [summaryEntriesBySlug]);

  const latestSummaryDates = useMemo(() => {
    const dates: Record<number, Date> = {};
    resources.forEach((r) => {
      const ref = resolveSummaryRef(r.id);
      if (
        (ref?.kind === 'series' || ref?.kind === 'collection') &&
        ref.entries.length > 0
      ) {
        const latestDate = ref.entries
          .map((e) => e.date)
          .filter((date): date is Date | string => date !== null)
          .map((date) => new Date(date))
          .sort((a, b) => b.getTime() - a.getTime())[0];
        if (latestDate) {
          dates[r.id] = latestDate;
        }
      }
    });
    return dates;
  }, [resolveSummaryRef, resources]);

  const getDisplayDate = useCallback(
    (resource: Resource): Date => {
      return latestSummaryDates[resource.id] ?? new Date(resource.date);
    },
    [latestSummaryDates],
  );

  const getDisplayDateLabel = useCallback(
    (resource: Resource): string => {
      const dateLabel = formatDate(getDisplayDate(resource));
      if (resource.type === 'playlist' && latestSummaryDates[resource.id]) {
        return `Latest summary: ${dateLabel}`;
      }

      return dateLabel;
    },
    [getDisplayDate, latestSummaryDates],
  );

  const sortedResources = useMemo(
    () =>
      [...resources].sort(
        (a, b) => getDisplayDate(b).getTime() - getDisplayDate(a).getTime(),
      ),
    [getDisplayDate, resources],
  );

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  const searchableTextByResourceId = useMemo(() => {
    const searchText: Record<number, string> = {};

    resources.forEach((resource) => {
      const summaryTitles = (
        summaryEntriesByResourceId.get(resource.id) ?? []
      ).map((entry) => entry.title);
      const resourceTopicLabels = resource.topics.map(
        (topic) => topicLabels[topic],
      );

      searchText[resource.id] = [
        resource.title,
        resource.subtitle,
        resource.description,
        resource.source,
        resource.type,
        ...resourceTopicLabels,
        ...summaryTitles,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
    });

    return searchText;
  }, [resources, summaryEntriesByResourceId, topicLabels]);

  const filteredResources = useMemo(
    () =>
      sortedResources.filter((resource) => {
        const matchesSearch =
          normalizedSearchQuery.length === 0 ||
          (searchableTextByResourceId[resource.id] ?? '').includes(
            normalizedSearchQuery,
          );
        const matchesTopic =
          selectedTopic === null || resource.topics.includes(selectedTopic);

        return matchesSearch && matchesTopic;
      }),
    [
      normalizedSearchQuery,
      searchableTextByResourceId,
      selectedTopic,
      sortedResources,
    ],
  );

  const hasActiveFilters =
    normalizedSearchQuery.length > 0 || selectedTopic !== null;
  const selectedTopicLabel = selectedTopic ? topicLabels[selectedTopic] : null;
  const resourceNoun = sortedResources.length === 1 ? 'resource' : 'resources';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTopic(null);
    setIsTopicFiltersOpen(false);
  };

  const getLinkText = (type: Resource['type']) => {
    switch (type) {
      case 'video':
        return 'Watch Video';
      case 'playlist':
        return 'Watch Playlist';
      case 'podcast':
        return 'Listen to Podcast';
      case 'article':
        return 'Read Article';
      default:
        return 'View Resource';
    }
  };

  const summaryPaths = useMemo(() => {
    const paths: Record<number, string> = {};
    sortedResources.forEach((r) => {
      const ref = resolveSummaryRef(r.id);
      const slug = ref ? resolveSummarySlug(ref) : null;
      if (slug) {
        paths[r.id] = getSummaryPath(slug);
      }
    });
    return paths;
  }, [sortedResources, resolveSummaryRef]);

  return (
    <section>
      <div className="mb-8 rounded-lg border border-gray-100 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="resource-search"
              className="text-sm font-medium text-gray-700"
            >
              Search resources
            </label>
            <input
              id="resource-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search titles, sources, topics, or summaries"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/20"
            />
          </div>

          {topicOptions.length > 0 && (
            <fieldset className="flex flex-col gap-3">
              <legend className="sr-only">Topics</legend>
              <div
                className="hidden text-sm font-medium text-gray-700 md:block"
                aria-hidden="true"
              >
                Topics
              </div>
              <button
                type="button"
                aria-expanded={isTopicFiltersOpen}
                aria-controls="resource-topic-filters"
                onClick={() => setIsTopicFiltersOpen(!isTopicFiltersOpen)}
                className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 md:hidden"
              >
                <span>
                  {selectedTopicLabel
                    ? `Topic: ${selectedTopicLabel}`
                    : 'Topics: All'}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    isTopicFiltersOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                id="resource-topic-filters"
                className={`${isTopicFiltersOpen ? 'flex' : 'hidden'} flex-wrap gap-2 md:flex`}
              >
                {topicOptions.map(({ slug, label }) => {
                  const isSelected = selectedTopic === slug;

                  return (
                    <button
                      key={slug}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedTopic(isSelected ? null : slug)}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-2 ${
                        isSelected
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-500 hover:bg-gray-50'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </fieldset>
          )}

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600" aria-live="polite">
              {hasActiveFilters
                ? `Showing ${filteredResources.length} of ${sortedResources.length} ${resourceNoun}`
                : `Showing ${sortedResources.length} ${resourceNoun}`}
            </p>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={handleClearFilters}>
                Clear filters
              </Button>
            )}
          </div>
        </div>
      </div>

      <h2 className="sr-only">Resources</h2>
      <div className="space-y-8">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <div
              key={resource.id}
              id={`resource-${resource.id}`}
              className="scroll-mt-24"
            >
              <ResourceListItem
                title={resource.title}
                badge={
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    {titleCase(resource.type)}
                  </span>
                }
                description={resource.description}
                metadata={
                  resource.subtitle && (
                    <p className="text-base font-medium text-gray-700 mb-1">
                      {resource.subtitle}
                    </p>
                  )
                }
              >
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_auto] md:gap-4 md:items-start w-full">
                    <div className="flex flex-col gap-2">
                      <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-4 gap-y-1">
                        <span className="font-medium">{resource.source}</span>
                        <span>{getDisplayDateLabel(resource)}</span>
                      </div>

                      {resource.topics.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {resource.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                            >
                              {topicLabels[topic]}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 md:justify-self-end md:flex-shrink-0">
                      {summaryPaths[resource.id] && (
                        <Button
                          as="a"
                          variant="secondary"
                          href={summaryPaths[resource.id]}
                        >
                          <DocumentIcon />
                          {resource.type === 'playlist'
                            ? 'Read Summaries'
                            : 'Read Summary'}
                        </Button>
                      )}
                      <Button
                        as="a"
                        variant="primary"
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {getLinkText(resource.type)}
                        <ExternalLinkIcon />
                        <span className="sr-only">(opens in a new tab)</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </ResourceListItem>
            </div>
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
            <h2 className="text-lg font-medium text-gray-900">
              No resources found
            </h2>
            <p className="mt-2 text-gray-600">
              {hasActiveFilters
                ? 'Try a different search term or clear the selected topic.'
                : emptyMessage}
            </p>
            {hasActiveFilters && (
              <Button
                variant="secondary"
                onClick={handleClearFilters}
                className="mt-4"
              >
                Clear filters
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceCatalog;
