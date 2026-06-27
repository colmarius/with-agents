import { useCallback, useMemo, useState } from 'react';
import codingResources from '../../data/resources/coding-with-agents.json';
import { useIsMdUp } from '../../hooks';
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
] as const;

type Topic = (typeof TOPIC_OPTIONS)[number]['slug'];

const TOPIC_LABELS = Object.fromEntries(
  TOPIC_OPTIONS.map(({ slug, label }) => [slug, label]),
) as Record<Topic, string>;

type Resource = {
  id: number;
  title: string;
  subtitle?: string;
  url: string;
  description: string;
  type: string;
  source: string;
  date: string;
  duration?: string;
  topics: Topic[];
};

const resources = codingResources as Resource[];

type ManifestEntry = {
  slug: string;
  resourceId: number;
  title: string;
  date: Date | null;
  series: string | null;
  episode: number | null;
};

type SummaryData = {
  slug: string;
  title: string;
  date: string | null;
  series: string | null;
  episode: number | null;
  body: string;
};

type SummaryRef =
  | { kind: 'single'; slug: string }
  | { kind: 'series'; series: string; episodes: ManifestEntry[] };

type CodingWithAgentsProps = {
  manifest: ManifestEntry[];
};

const CodingWithAgents = ({ manifest }: CodingWithAgentsProps) => {
  const isMdUp = useIsMdUp();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null,
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [isTopicFiltersOpen, setIsTopicFiltersOpen] = useState(false);
  const [summaryContent, setSummaryContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [summaryRef, setSummaryRef] = useState<SummaryRef | null>(null);
  const [episodes, setEpisodes] = useState<ManifestEntry[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<number | null>(null);
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
      const entries = summaryEntriesByResourceId.get(resourceId) ?? [];
      if (entries.length === 0) return null;

      const hasSeries = entries.some((e) => e.series !== null);
      if (hasSeries) {
        const seriesName = entries.find((e) => e.series)?.series;
        if (!seriesName) return null;
        const episodeEntries = entries
          .filter((e) => e.series === seriesName && e.episode !== null)
          .sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0));
        return { kind: 'series', series: seriesName, episodes: episodeEntries };
      }

      return { kind: 'single', slug: entries[0].slug };
    },
    [summaryEntriesByResourceId],
  );

  const latestEpisodeDates = useMemo(() => {
    const dates: Record<number, Date> = {};
    resources.forEach((r) => {
      const ref = resolveSummaryRef(r.id);
      if (ref?.kind === 'series' && ref.episodes.length > 0) {
        const latestDate = ref.episodes
          .map((e) => e.date)
          .filter((d): d is Date => d !== null)
          .sort((a, b) => b.getTime() - a.getTime())[0];
        if (latestDate) {
          dates[r.id] = latestDate;
        }
      }
    });
    return dates;
  }, [resolveSummaryRef]);

  const getDisplayDate = useCallback(
    (resource: Resource): Date => {
      return latestEpisodeDates[resource.id] ?? new Date(resource.date);
    },
    [latestEpisodeDates],
  );

  const getDisplayDateLabel = useCallback(
    (resource: Resource): string => {
      const dateLabel = formatDate(getDisplayDate(resource));
      if (resource.type === 'playlist' && latestEpisodeDates[resource.id]) {
        return `Latest summary: ${dateLabel}`;
      }

      return dateLabel;
    },
    [getDisplayDate, latestEpisodeDates],
  );

  const sortedResources = useMemo(
    () =>
      [...resources].sort(
        (a, b) => getDisplayDate(b).getTime() - getDisplayDate(a).getTime(),
      ),
    [getDisplayDate],
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
  }, [summaryEntriesByResourceId]);

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

  const getLinkText = (type: string) => {
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

  const fetchSummary = async (slug: string): Promise<string> => {
    const response = await fetch(`/api/summaries/${slug}.json`);
    if (!response.ok) {
      throw new Error(`Failed to fetch summary: ${response.statusText}`);
    }
    const data: SummaryData = await response.json();
    return data.body;
  };

  const handleOpenSummary = async (resource: Resource) => {
    setSelectedResource(resource);
    setModalOpen(true);
    setIsLoading(true);
    setError(null);

    try {
      const ref = resolveSummaryRef(resource.id);
      setSummaryRef(ref);

      if (!ref) {
        setError('No summary available for this resource.');
        setIsLoading(false);
        return;
      }

      if (ref.kind === 'single') {
        const content = await fetchSummary(ref.slug);
        setSummaryContent(content);
      } else if (ref.kind === 'series') {
        setEpisodes(ref.episodes);

        if (ref.episodes.length > 0) {
          const firstEpisode = ref.episodes[0];
          setSelectedEpisode(firstEpisode.episode);
          setCurrentEpisodeTitle(firstEpisode.title);
          const content = await fetchSummary(firstEpisode.slug);
          setSummaryContent(content);
        }
      }
    } catch (err) {
      setError(
        `Failed to load summary: ${err instanceof Error ? err.message : 'Unknown error'}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectEpisode = async (episodeNumber: number, slug: string) => {
    setSelectedEpisode(episodeNumber);
    setIsEpisodeLoading(true);

    const episode = episodes.find((e) => e.episode === episodeNumber);
    if (episode) {
      setCurrentEpisodeTitle(episode.title);
    }

    try {
      const content = await fetchSummary(slug);
      setSummaryContent(content);
    } catch (err) {
      setError(
        `Failed to load episode: ${err instanceof Error ? err.message : 'Unknown error'}`,
      );
    } finally {
      setIsEpisodeLoading(false);
    }
  };

  const handleCloseSummary = () => {
    setModalOpen(false);
    setSelectedResource(null);
    setSummaryContent('');
    setEpisodes([]);
    setSelectedEpisode(null);
    setSummaryRef(null);
    setError(null);
    setIsEpisodeListExpanded(false);
    setCurrentEpisodeTitle(null);
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

      <div className="space-y-8">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource) => (
            <ResourceListItem
              key={resource.id}
              image={{
                src: '',
                alt: '',
                className: 'hidden',
              }}
              title={resource.title}
              badge={
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                  {titleCase(resource.type)}
                </span>
              }
              description={resource.description}
              hideExternalLink={true}
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
                        aria-controls={`summary-modal-${resource.id}`}
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
        ) : summaryRef?.kind === 'series' && episodes.length > 0 ? (
          <div className="flex flex-col md:flex-row gap-6 min-h-0 flex-1 md:overflow-hidden">
            <aside className="md:w-64 md:flex-shrink-0 md:overflow-y-auto md:max-h-full p-6 pb-0 md:pr-0 md:pb-6">
              <div className="md:hidden mb-3">
                <CollapsibleButton
                  label="Episodes"
                  isOpen={isEpisodeListExpanded}
                  onClick={() =>
                    setIsEpisodeListExpanded(!isEpisodeListExpanded)
                  }
                />
              </div>
              <EpisodeList
                episodes={episodes.map((e) => ({
                  path: e.slug,
                  episode: e.episode ?? 0,
                  title: e.title,
                }))}
                selectedEpisode={selectedEpisode}
                onSelectEpisode={handleSelectEpisode}
                isCollapsed={!isMdUp && !isEpisodeListExpanded}
              />
            </aside>
            <main
              className="relative flex-1 min-w-0 overflow-y-auto p-6 pt-0 md:pt-6 md:pl-0"
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
          <div className="overflow-y-auto flex-1 p-6">
            <MarkdownRenderer markdown={summaryContent} />
          </div>
        )}
      </SummaryModal>
    </section>
  );
};

export default CodingWithAgents;
