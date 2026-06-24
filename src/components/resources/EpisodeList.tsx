import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

type Episode = {
  path: string;
  episode: number;
  title: string;
};

type EpisodeListProps = {
  episodes: Array<Episode>;
  selectedEpisode: number | null;
  onSelectEpisode: (episode: number, path: string) => void;
  isLoading?: boolean;
  isCollapsed?: boolean;
};

export const EpisodeList = ({
  episodes,
  selectedEpisode,
  onSelectEpisode,
  isLoading = false,
  isCollapsed = false,
}: EpisodeListProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [focusedEpisode, setFocusedEpisode] = useState<number | null>(
    selectedEpisode,
  );

  useEffect(() => {
    setFocusedEpisode(selectedEpisode);
  }, [selectedEpisode]);

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

    const currentIndex = episodes.findIndex(
      (ep) => ep.episode === focusedEpisode,
    );

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
        if (focusedEpisode !== null) {
          const episode = episodes.find((ep) => ep.episode === focusedEpisode);
          if (episode) {
            onSelectEpisode(episode.episode, episode.path);
          }
        }
        return;
      default:
        return;
    }

    if (nextIndex !== currentIndex && nextIndex >= 0) {
      const episode = episodes[nextIndex];
      setFocusedEpisode(episode.episode);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-pulse text-gray-500">Loading episodes...</div>
      </div>
    );
  }

  if (episodes.length === 0) {
    return (
      <div className="flex items-center justify-center p-8 text-gray-500">
        No episodes found
      </div>
    );
  }

  if (isCollapsed && selectedEpisode === null) {
    return <div className="p-4 text-gray-500 text-sm">Select an episode</div>;
  }

  const displayedEpisodes = isCollapsed
    ? episodes.filter((ep) => ep.episode === selectedEpisode)
    : episodes;

  return (
    <div
      ref={listRef}
      role="listbox"
      aria-label="Episode list"
      aria-activedescendant={
        focusedEpisode !== null ? `episode-${focusedEpisode}` : undefined
      }
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="flex flex-col gap-1 p-0 focus:outline-none text-sm text-gray-600 dark:text-zinc-300"
    >
      <h3 className="sr-only">Episodes</h3>
      {displayedEpisodes.map((episode) => {
        const isSelected = episode.episode === selectedEpisode;
        const isFocused = episode.episode === focusedEpisode;
        const trimmedTitle = episode.title.replace(
          /\s*-\s*Episode\s+\d+$/i,
          '',
        );
        return (
          <button
            type="button"
            key={episode.episode}
            id={`episode-${episode.episode}`}
            ref={isSelected ? setSelectedRef : null}
            role="option"
            aria-selected={isSelected}
            onClick={() => onSelectEpisode(episode.episode, episode.path)}
            onFocus={() => setFocusedEpisode(episode.episode)}
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
              <span
                className={`shrink-0 tabular-nums text-[11px] tracking-wide ${
                  isSelected
                    ? 'text-gray-500 dark:text-zinc-300'
                    : 'text-gray-400 dark:text-zinc-500'
                }`}
              >
                Ep {episode.episode}
              </span>
              <span
                className={`flex-1 truncate text-[13px] font-normal ${
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
