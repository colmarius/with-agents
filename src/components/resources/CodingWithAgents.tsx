import { useCallback, useMemo, useState } from 'react';
import codingResources from '../../data/resources/coding-with-agents.json';
import { useIsMdUp } from '../../hooks';
import { formatDate, titleCase } from '../../utils';
import {
  Button,
  CollapsibleButton,
  DocumentIcon,
  ExternalLinkIcon,
} from '../ui';
import { EpisodeList } from './EpisodeList';
import MarkdownRenderer from './MarkdownRenderer';
import ResourceListItem from './ResourceListItem';
import { SummaryModal } from './SummaryModal';

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
  tags?: string[];
};

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

  const resolveSummaryRef = useCallback(
    (resourceId: number): SummaryRef | null => {
      const entries = manifest.filter((e) => e.resourceId === resourceId);
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
    [manifest],
  );

  const latestEpisodeDates = useMemo(() => {
    const dates: Record<number, Date> = {};
    (codingResources as Resource[]).forEach((r) => {
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

  const sortedResources = useMemo(
    () =>
      [...codingResources].sort(
        (a, b) => getDisplayDate(b).getTime() - getDisplayDate(a).getTime(),
      ),
    [getDisplayDate],
  );

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
      <div className="space-y-8">
        {sortedResources.map((resource) => (
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
                  <div className="text-sm text-gray-500 flex items-center gap-x-4">
                    <span className="font-medium">{resource.source}</span>
                    <span>{formatDate(getDisplayDate(resource))}</span>
                  </div>

                  {resource.tags && resource.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs"
                        >
                          {tag}
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
        ))}
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
