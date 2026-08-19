import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useIsMdUp } from '../../hooks';
import type { CodingResource, ResourceTopic } from '../../types/resources';
import { formatDate, titleCase } from '../../utils';
import {
  Button,
  ChevronDownIcon,
  CollapsibleButton,
  DocumentIcon,
  ExternalLinkIcon,
} from '../ui';
import { EpisodeList } from './EpisodeList';
import MarkdownRenderer from './MarkdownRenderer';
import ResourceListItem from './ResourceListItem';
import { SummaryModal } from './SummaryModal';
import {
  type ManifestEntry,
  resolveSummaryEntries,
  resolveSummarySlug,
  type SummaryRef,
} from './summaryResolver';

const SUMMARY_QUERY_PARAM = 'summary';
const SUMMARY_HISTORY_STATE_KEY = 'codingWithAgentsSummary';

type SummaryHistoryMode = 'push' | 'replace';

const getHistoryState = (): Record<string, unknown> =>
  typeof window.history.state === 'object' && window.history.state !== null
    ? { ...(window.history.state as Record<string, unknown>) }
    : {};

const setSummaryUrl = (slug: string, mode: SummaryHistoryMode) => {
  const url = new URL(window.location.href);
  url.searchParams.set(SUMMARY_QUERY_PARAM, slug);
  const state = getHistoryState();

  if (mode === 'push') {
    state[SUMMARY_HISTORY_STATE_KEY] = true;
    window.history.pushState(state, '', url);
  } else {
    window.history.replaceState(state, '', url);
  }
};

const removeSummaryFromUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.delete(SUMMARY_QUERY_PARAM);
  const state = getHistoryState();
  delete state[SUMMARY_HISTORY_STATE_KEY];
  window.history.replaceState(state, '', url);
};

const TOPIC_OPTIONS = [
  { slug: 'prompting-orchestration', label: 'Prompting & orchestration' },
  { slug: 'context-memory', label: 'Context & memory' },
  { slug: 'tools-harnesses', label: 'Tools & harnesses' },
  { slug: 'review-verification', label: 'Review & verification' },
  {
    slug: 'architecture-maintainability',
    label: 'Architecture & maintainability',
  },
  { slug: 'collaboration-teams', label: 'Collaboration & teams' },
  { slug: 'safety-permissions', label: 'Safety & permissions' },
  { slug: 'open-source-ecosystem', label: 'Open source ecosystem' },
  { slug: 'models-evaluation', label: 'Models & evaluation' },
  { slug: 'business-adoption', label: 'Business & adoption' },
] as const satisfies ReadonlyArray<{ slug: ResourceTopic; label: string }>;

type Topic = ResourceTopic;

const TOPIC_LABELS = Object.fromEntries(
  TOPIC_OPTIONS.map(({ slug, label }) => [slug, label]),
) as Record<Topic, string>;

type SummaryData = {
  slug: string;
  title: string;
  date: string | null;
  series: string | null;
  episode: number | null;
  collection: string | null;
  body: string;
};

type CodingWithAgentsProps = {
  manifest: ManifestEntry[];
  resources: CodingResource[];
};

const fetchSummary = async (slug: string): Promise<string> => {
  const response = await fetch(`/api/summaries/${slug}.json`);
  if (!response.ok) {
    throw new Error(`Failed to fetch summary: ${response.statusText}`);
  }
  const data: SummaryData = await response.json();
  return data.body;
};

const CodingWithAgents = ({ manifest, resources }: CodingWithAgentsProps) => {
  const isMdUp = useIsMdUp();
  const summaryRequestId = useRef(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] =
    useState<CodingResource | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isTopicFiltersOpen, setIsTopicFiltersOpen] = useState(false);
  const [summaryContent, setSummaryContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryRef, setSummaryRef] = useState<SummaryRef | null>(null);
  const [episodes, setEpisodes] = useState<ManifestEntry[]>([]);
  const [selectedSummarySlug, setSelectedSummarySlug] = useState<string | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const [isEpisodeListExpanded, setIsEpisodeListExpanded] = useState(false);
  const [isEpisodeLoading, setIsEpisodeLoading] = useState(false);
  const [currentEpisodeTitle, setCurrentEpisodeTitle] = useState<string | null>(
    null,
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

  const resourcesById = useMemo(
    () => new Map(resources.map((resource) => [resource.id, resource])),
    [resources],
  );

  const summaryEntriesBySlug = useMemo(
    () => new Map(manifest.map((entry) => [entry.slug, entry])),
    [manifest],
  );

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
    (resource: CodingResource): Date => {
      return latestSummaryDates[resource.id] ?? new Date(resource.date);
    },
    [latestSummaryDates],
  );

  const getDisplayDateLabel = useCallback(
    (resource: CodingResource): string => {
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
      const topicLabels = resource.topics.map((topic) => TOPIC_LABELS[topic]);

      searchText[resource.id] = [
        resource.title,
        resource.subtitle,
        resource.description,
        resource.source,
        resource.type,
        ...topicLabels,
        ...summaryTitles,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
    });

    return searchText;
  }, [resources, summaryEntriesByResourceId]);

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
  const selectedTopicLabel = selectedTopic ? TOPIC_LABELS[selectedTopic] : null;

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedTopic(null);
    setIsTopicFiltersOpen(false);
  };

  const getLinkText = (type: CodingResource['type']) => {
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

  const resetSummary = useCallback(() => {
    summaryRequestId.current += 1;
    setModalOpen(false);
    setSelectedResource(null);
    setSummaryContent('');
    setEpisodes([]);
    setSelectedSummarySlug(null);
    setSummaryRef(null);
    setError(null);
    setIsLoading(false);
    setIsEpisodeListExpanded(false);
    setIsEpisodeLoading(false);
    setCurrentEpisodeTitle(null);
  }, []);

  const openSummary = useCallback(
    (
      resource: CodingResource,
      requestedSlug?: string,
      historyMode: SummaryHistoryMode | null = null,
    ): boolean => {
      const ref = resolveSummaryRef(resource.id);
      const selectedSlug = ref ? resolveSummarySlug(ref, requestedSlug) : null;

      if (requestedSlug !== undefined && selectedSlug === null) {
        return false;
      }

      const requestId = summaryRequestId.current + 1;
      summaryRequestId.current = requestId;
      setSelectedResource(resource);
      setModalOpen(true);
      setIsLoading(true);
      setError(null);
      setSummaryContent('');
      setEpisodes([]);
      setSelectedSummarySlug(selectedSlug);
      setCurrentEpisodeTitle(null);
      setIsEpisodeListExpanded(false);
      setIsEpisodeLoading(false);
      setSummaryRef(ref);

      if (!ref) {
        setError('No summary available for this resource.');
        setIsLoading(false);
        return true;
      }

      if (ref.kind === 'error') {
        setError(ref.message);
        setIsLoading(false);
        return true;
      }

      if (!selectedSlug) {
        setError('No summary available for this resource.');
        setIsLoading(false);
        return true;
      }

      if (historyMode) {
        setSummaryUrl(selectedSlug, historyMode);
      }

      if (ref.kind === 'series' || ref.kind === 'collection') {
        setEpisodes(ref.entries);
        setCurrentEpisodeTitle(
          ref.entries.find((entry) => entry.slug === selectedSlug)?.title ??
            null,
        );
      }

      void fetchSummary(selectedSlug)
        .then((content) => {
          if (summaryRequestId.current === requestId) {
            setSummaryContent(content);
          }
        })
        .catch((err: unknown) => {
          if (summaryRequestId.current === requestId) {
            setError(
              `Failed to load summary: ${err instanceof Error ? err.message : 'Unknown error'}`,
            );
          }
        })
        .finally(() => {
          if (summaryRequestId.current === requestId) {
            setIsLoading(false);
          }
        });

      return true;
    },
    [resolveSummaryRef],
  );

  useEffect(() => {
    const syncSummaryFromUrl = () => {
      const requestedSlug = new URL(window.location.href).searchParams.get(
        SUMMARY_QUERY_PARAM,
      );

      if (!requestedSlug) {
        resetSummary();
        return;
      }

      const entry = summaryEntriesBySlug.get(requestedSlug);
      const resource = entry ? resourcesById.get(entry.resourceId) : undefined;

      if (!resource || !openSummary(resource, requestedSlug)) {
        removeSummaryFromUrl();
        resetSummary();
      }
    };

    syncSummaryFromUrl();
    window.addEventListener('popstate', syncSummaryFromUrl);
    return () => window.removeEventListener('popstate', syncSummaryFromUrl);
  }, [openSummary, resetSummary, resourcesById, summaryEntriesBySlug]);

  const handleOpenSummary = (resource: CodingResource) => {
    openSummary(resource, undefined, 'push');
  };

  const handleSelectEpisode = (slug: string) => {
    const episode = episodes.find((entry) => entry.slug === slug);
    if (!episode) return;

    const requestId = summaryRequestId.current + 1;
    summaryRequestId.current = requestId;
    setSelectedSummarySlug(slug);
    setIsEpisodeListExpanded(false);
    setIsEpisodeLoading(true);
    setError(null);
    setCurrentEpisodeTitle(episode.title);
    setSummaryUrl(slug, 'replace');

    void fetchSummary(slug)
      .then((content) => {
        if (summaryRequestId.current === requestId) {
          setSummaryContent(content);
        }
      })
      .catch((err: unknown) => {
        if (summaryRequestId.current === requestId) {
          setError(
            `Failed to load summary: ${err instanceof Error ? err.message : 'Unknown error'}`,
          );
        }
      })
      .finally(() => {
        if (summaryRequestId.current === requestId) {
          setIsEpisodeLoading(false);
        }
      });
  };

  const handleCloseSummary = () => {
    const url = new URL(window.location.href);
    const shouldGoBack =
      url.searchParams.has(SUMMARY_QUERY_PARAM) &&
      window.history.state?.[SUMMARY_HISTORY_STATE_KEY] === true;

    resetSummary();
    if (shouldGoBack) {
      window.history.back();
    } else {
      removeSummaryFromUrl();
    }
  };

  const summaryAvailability = useMemo(() => {
    const availability: Record<number, boolean> = {};
    sortedResources.forEach((r) => {
      availability[r.id] = resolveSummaryRef(r.id) !== null;
    });
    return availability;
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
              {TOPIC_OPTIONS.map(({ slug, label }) => {
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

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-600" aria-live="polite">
              {hasActiveFilters
                ? `Showing ${filteredResources.length} of ${sortedResources.length} resources`
                : `Showing ${sortedResources.length} resources`}
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
            <ResourceListItem
              key={resource.id}
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
                            {TOPIC_LABELS[topic]}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 md:justify-self-end md:flex-shrink-0">
                    {summaryAvailability[resource.id] && (
                      <Button
                        variant="secondary"
                        onClick={() => handleOpenSummary(resource)}
                        aria-haspopup="dialog"
                      >
                        <DocumentIcon />
                        Read{' '}
                        {resource.type === 'playlist' ? 'Summaries' : 'Summary'}
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
          ))
        ) : (
          <div className="rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
            <h2 className="text-lg font-medium text-gray-900">
              No resources found
            </h2>
            <p className="mt-2 text-gray-600">
              Try a different search term or clear the selected topic to see
              more Coding with Agents resources.
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

      <SummaryModal
        isOpen={modalOpen}
        onClose={handleCloseSummary}
        title={selectedResource?.title || ''}
      >
        {isLoading ? (
          <div className="flex justify-center items-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
          </div>
        ) : error ? (
          <div className="p-6">
            <div className="text-red-600 p-4 bg-red-50 rounded-lg">{error}</div>
          </div>
        ) : (summaryRef?.kind === 'series' ||
            summaryRef?.kind === 'collection') &&
          episodes.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-6 min-h-0 flex-1 md:overflow-hidden">
            <aside
              className={`flex min-h-0 flex-col md:block md:w-64 md:flex-none md:overflow-y-auto md:max-h-full p-6 pb-0 md:pr-0 md:pb-6 ${
                isEpisodeListExpanded ? 'flex-1' : 'shrink-0'
              }`}
            >
              <div
                className={`shrink-0 md:hidden ${
                  isEpisodeListExpanded ? 'mb-3' : ''
                }`}
              >
                <CollapsibleButton
                  label={
                    summaryRef.kind === 'collection'
                      ? 'Selected videos'
                      : 'Episodes'
                  }
                  isOpen={isEpisodeListExpanded}
                  onClick={() =>
                    setIsEpisodeListExpanded(!isEpisodeListExpanded)
                  }
                />
              </div>
              <EpisodeList
                episodes={episodes.map((e) => ({
                  path: e.slug,
                  episode: e.episode,
                  title: e.title,
                }))}
                selectedSlug={selectedSummarySlug}
                onSelectEpisode={handleSelectEpisode}
                mode={summaryRef.kind}
                isCollapsed={!isMdUp && !isEpisodeListExpanded}
              />
            </aside>
            <main
              className={`relative flex-1 min-w-0 overflow-y-auto overscroll-contain p-6 pt-0 md:block md:pt-6 md:pl-0 ${
                isEpisodeListExpanded ? 'hidden' : ''
              }`}
              aria-busy={isEpisodeLoading}
            >
              {isEpisodeLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/60 pointer-events-none">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600" />
                </div>
              )}
              {currentEpisodeTitle && (
                <h2 className="text-xl font-semibold text-gray-900 mb-4 not-prose">
                  {currentEpisodeTitle}
                </h2>
              )}
              <MarkdownRenderer markdown={summaryContent} />
            </main>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto overscroll-contain p-6">
            <MarkdownRenderer markdown={summaryContent} />
          </div>
        )}
      </SummaryModal>
    </section>
  );
};

export default CodingWithAgents;
