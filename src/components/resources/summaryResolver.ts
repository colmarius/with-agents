export type ManifestEntry = {
  slug: string;
  resourceId: number;
  title: string;
  date: Date | string | null;
  series: string | null;
  episode: number | null;
  collection: string | null;
  order: number | null;
  videoId: string | null;
};

export type SummaryRef =
  | { kind: 'single'; slug: string }
  | { kind: 'series'; series: string; entries: ManifestEntry[] }
  | { kind: 'collection'; collection: string; entries: ManifestEntry[] }
  | { kind: 'error'; message: string };

const invalid = (message: string): SummaryRef => ({ kind: 'error', message });

export const resolveSummaryEntries = (
  entries: ManifestEntry[],
): SummaryRef | null => {
  if (entries.length === 0) return null;

  const standalone = entries.filter(
    (entry) =>
      entry.series === null &&
      entry.episode === null &&
      entry.collection === null,
  );
  const seriesKeys = new Set(
    entries.flatMap((entry) => (entry.series === null ? [] : [entry.series])),
  );
  const collectionKeys = new Set(
    entries.flatMap((entry) =>
      entry.collection === null ? [] : [entry.collection],
    ),
  );

  if (standalone.length === entries.length) {
    return standalone.length === 1
      ? { kind: 'single', slug: standalone[0].slug }
      : invalid(
          'Multiple standalone summaries are configured for this resource.',
        );
  }

  if (seriesKeys.size > 0) {
    if (
      seriesKeys.size !== 1 ||
      collectionKeys.size > 0 ||
      standalone.length > 0
    ) {
      return invalid(
        'Mixed or multiple summary series are configured for this resource.',
      );
    }
    if (
      entries.some(
        (entry) =>
          entry.series === null ||
          entry.episode === null ||
          entry.collection !== null,
      )
    ) {
      return invalid('Every series summary must have an episode.');
    }
    const episodeNumbers = entries.map((entry) => entry.episode as number);
    if (new Set(episodeNumbers).size !== episodeNumbers.length) {
      return invalid(
        'Duplicate summary episodes are configured for this resource.',
      );
    }
    return {
      kind: 'series',
      series: [...seriesKeys][0],
      entries: [...entries].sort(
        (a, b) =>
          (a.episode as number) - (b.episode as number) ||
          a.slug.localeCompare(b.slug),
      ),
    };
  }

  if (collectionKeys.size > 0) {
    if (collectionKeys.size !== 1 || standalone.length > 0) {
      return invalid(
        'Mixed or multiple summary collections are configured for this resource.',
      );
    }
    if (
      entries.some(
        (entry) =>
          entry.collection === null ||
          entry.date === null ||
          entry.series !== null ||
          entry.episode !== null,
      )
    ) {
      return invalid('Every collection summary must have a date.');
    }
    const hasCuratedMetadata = entries.some(
      (entry) => entry.order !== null || entry.videoId !== null,
    );
    if (
      hasCuratedMetadata &&
      entries.some((entry) => entry.order === null || entry.videoId === null)
    ) {
      return invalid(
        'Every curated collection summary must have an order and video ID.',
      );
    }
    if (hasCuratedMetadata) {
      const orders = entries.map((entry) => entry.order as number);
      const videoIds = entries.map((entry) => entry.videoId as string);
      if (new Set(orders).size !== orders.length) {
        return invalid(
          'Duplicate summary orders are configured for this collection.',
        );
      }
      if (new Set(videoIds).size !== videoIds.length) {
        return invalid(
          'Duplicate video IDs are configured for this collection.',
        );
      }
    }
    return {
      kind: 'collection',
      collection: [...collectionKeys][0],
      entries: [...entries].sort(
        (a, b) =>
          (hasCuratedMetadata
            ? (a.order as number) - (b.order as number)
            : new Date(a.date as Date | string).getTime() -
              new Date(b.date as Date | string).getTime()) ||
          a.slug.localeCompare(b.slug),
      ),
    };
  }

  return invalid('Invalid summary configuration for this resource.');
};
