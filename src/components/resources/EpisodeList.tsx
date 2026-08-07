import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type Episode = {
  path: string;
  episode: number | null;
  title: string;
};

type EpisodeListProps = {
  episodes: Array<Episode>;
  selectedSlug: string | null;
  onSelectEpisode: (path: string) => void;
  mode: 'series' | 'collection';
  isLoading?: boolean;
  isCollapsed?: boolean;
};

export const EpisodeList = ({
  episodes,
  selectedSlug,
  onSelectEpisode,
  mode,
  isLoading = false,
  isCollapsed = false,
}: EpisodeListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [focusedSlug, setFocusedSlug] = useState<string | null>(selectedSlug);
  const label = mode === 'collection' ? 'Selected videos' : 'Episodes';
  const showEpisodePrefix = mode === 'series';

  useEffect(() => {
    setFocusedSlug(selectedSlug);
  }, [selectedSlug]);

  const setSelectedRef = useCallback((el: HTMLButtonElement | null) => {
    if (el) {
      el.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (episodes.length === 0) return;

    const currentIndex = episodes.findIndex((ep) => ep.path === focusedSlug);

    let nextIndex = currentIndex;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        nextIndex = Math.min(
          currentIndex >= 0 ? currentIndex + 1 : 0,
          episodes.length - 1,
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        nextIndex = Math.max(currentIndex - 1, 0);
        break;
      case 'Home':
        event.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        event.preventDefault();
        nextIndex = episodes.length - 1;
        break;
      case 'Enter':
      case ' ':
      case 'Spacebar':
        event.preventDefault();
        if (focusedSlug !== null) {
          const episode = episodes.find((ep) => ep.path === focusedSlug);
          if (episode) {
            onSelectEpisode(episode.path);
          }
        }
        return;
      default:
        return;
    }

    if (nextIndex !== currentIndex && nextIndex >= 0) {
      const episode = episodes[nextIndex];
      setFocusedSlug(episode.path);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse text-gray-500">
          Loading {label.toLowerCase()}...
        </div>
      </div>
    );
  }

  if (episodes.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-500">
        No {label.toLowerCase()} found
      </div>
    );
  }

  if (isCollapsed && selectedSlug === null) {
    return <div className="p-4 text-gray-500 text-sm">Select a summary</div>;
  }

  const displayedEpisodes = isCollapsed
    ? episodes.filter((ep) => ep.path === selectedSlug)
    : episodes;

  return (
    <div
      ref={listRef}
      role="listbox"
      aria-label={`${label} list`}
      aria-activedescendant={
        focusedSlug !== null ? `summary-${focusedSlug}` : undefined
      }
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-1 p-0 focus:outline-none text-sm text-gray-600 dark:text-zinc-300"
    >
      <h3 className="mb-2 hidden px-2.5 text-xs font-medium uppercase tracking-wide text-gray-500 md:block dark:text-zinc-400">
        {label}
      </h3>
      {displayedEpisodes.map((episode) => {
        const isSelected = episode.path === selectedSlug;
        const isFocused = episode.path === focusedSlug;
        const trimmedTitle = episode.title.replace(
          /\s*-\s*Episode\s+\d+$/i,
          '',
        );
        return (
          <button
            type="button"
            key={episode.path}
            id={`summary-${episode.path}`}
            ref={isSelected ? setSelectedRef : null}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelectEpisode(episode.path)}
            onFocus={() => setFocusedSlug(episode.path)}
            className={`
							group w-full rounded-sm px-2.5 py-1.5 text-left transition-colors cursor-pointer
							bg-transparent border border-transparent
							focus:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600/50 focus-visible:ring-offset-0
							${
                isSelected
                  ? 'text-gray-900 dark:text-zinc-100 bg-gray-50/60 dark:bg-zinc-800/40 border-l-2 border-l-gray-400 dark:border-l-zinc-500 pl-2'
                  : isFocused
                    ? 'text-gray-800 dark:text-zinc-200 bg-gray-50/30 dark:bg-zinc-800/20'
                    : 'text-gray-600 dark:text-zinc-400 hover:text-gray-800 dark:hover:text-zinc-200 hover:bg-gray-50/40 dark:hover:bg-zinc-800/30'
              }
						`}
          >
            <div className="flex items-center gap-2">
              {showEpisodePrefix && (
                <span
                  className={`shrink-0 tabular-nums text-[11px] tracking-wide ${
                    isSelected
                      ? 'text-gray-500 dark:text-zinc-300'
                      : 'text-gray-400 dark:text-zinc-500'
                  }`}
                >
                  Ep {episode.episode}
                </span>
              )}
              <span
                className={`flex-1 text-[13px] font-normal ${
                  showEpisodePrefix ? 'truncate' : 'leading-snug'
                } ${
                  isSelected
                    ? 'text-gray-900 dark:text-zinc-100'
                    : 'text-gray-600 dark:text-zinc-400 group-hover:text-gray-800 dark:group-hover:text-zinc-200'
                }`}
                title={trimmedTitle}
              >
                {trimmedTitle}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};
