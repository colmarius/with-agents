import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchTranscript, listLanguages } from 'youtube-transcript-plus';

export const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../../..',
);
export const defaultLanguage = 'en';
export const chunkSeconds = 60;

const defaultUserAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

export const repoRelative = (filePath) => path.relative(rootDir, filePath);

export const fileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const resolveContainedPath = (baseDir, relativePath) => {
  if (
    typeof relativePath !== 'string' ||
    relativePath.length === 0 ||
    path.isAbsolute(relativePath) ||
    path.win32.isAbsolute(relativePath)
  ) {
    throw new Error(`Path must be relative to ${repoRelative(baseDir)}`);
  }

  const pathParts = relativePath.replace(/\\/g, '/').split('/');
  if (pathParts.includes('..')) {
    throw new Error(
      `Refusing to resolve a path outside ${repoRelative(baseDir)}: ${relativePath}`,
    );
  }

  const base = path.resolve(baseDir);
  const target = path.resolve(base, relativePath);
  const relative = path.relative(base, target);

  if (
    relative === '..' ||
    relative.startsWith(`..${path.sep}`) ||
    path.isAbsolute(relative)
  ) {
    throw new Error(
      `Refusing to resolve a path outside ${repoRelative(baseDir)}: ${relativePath}`,
    );
  }

  return target;
};

export const writeFileExclusive = async (
  filePath,
  contents,
  { force = false, dryRun = false } = {},
) => {
  const exists = await fileExists(filePath);
  if (dryRun) {
    return { path: filePath, written: false, existed: exists, dryRun: true };
  }

  if (exists && !force) {
    throw new Error(
      `Refusing to overwrite existing file: ${repoRelative(filePath)}`,
    );
  }

  await mkdir(path.dirname(filePath), { recursive: true });
  await writeFile(filePath, contents, 'utf8');
  return { path: filePath, written: true, existed: exists, dryRun: false };
};

export const normalizeSummarySlug = (rawSlug) => {
  if (path.isAbsolute(rawSlug) || path.win32.isAbsolute(rawSlug)) {
    throw new Error(`Invalid summary slug: ${rawSlug}`);
  }

  const withoutExtension = rawSlug.replace(/\\/g, '/').replace(/\.md$/i, '');
  const trimmed = withoutExtension.replace(/^\/+/, '').replace(/\/+$/, '');

  if (!trimmed || trimmed.includes('..')) {
    throw new Error(`Invalid summary slug: ${rawSlug}`);
  }

  return trimmed;
};

export const safeContentPath = (baseDir, summarySlug) =>
  resolveContainedPath(baseDir, `${normalizeSummarySlug(summarySlug)}.md`);

export const extractVideoId = (input) => {
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) {
    return input;
  }

  const url = new URL(input);
  const host = url.hostname.replace(/^www\./, '');

  if (host === 'youtu.be') {
    return url.pathname.split('/').filter(Boolean)[0];
  }

  if (
    host === 'youtube.com' ||
    host === 'm.youtube.com' ||
    host === 'music.youtube.com'
  ) {
    if (url.pathname === '/watch') {
      return url.searchParams.get('v');
    }

    const [, kind, id] = url.pathname.split('/');
    if (kind === 'embed' || kind === 'shorts' || kind === 'live') {
      return id;
    }
  }

  return null;
};

export const canonicalYoutubeUrl = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}`;

export const normalizeYoutubeUrl = (input) => {
  const videoId = extractVideoId(input);
  if (!videoId) {
    throw new Error(`Could not find a YouTube video ID in: ${input}`);
  }

  return { videoId, canonicalUrl: canonicalYoutubeUrl(videoId) };
};

export const decodeHtmlEntities = (value) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(parseInt(code, 16)),
    )
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');

export const cleanText = (value) =>
  decodeHtmlEntities(
    String(value ?? '')
      .replace(/\s+/g, ' ')
      .trim(),
  );

export const slugify = (value) => {
  const slug = cleanText(value)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');

  return slug || 'youtube-video';
};

export const timestamp = (offsetSeconds) => {
  const totalSeconds = Math.max(0, Math.floor(Number(offsetSeconds) || 0));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, '0'))
    .join(':');
};

export const yamlScalar = (value) => {
  if (typeof value === 'number') {
    return String(value);
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
};

export const yamlLines = (entries) =>
  entries
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== '',
    )
    .map(([key, value]) => `${key}: ${yamlScalar(value)}`)
    .join('\n');

export const normalizeTranscriptSegments = (segments) =>
  segments
    .map((segment) => ({
      text: cleanText(segment.text),
      offset: Number(segment.offset ?? segment.start ?? 0),
      duration: Number(segment.duration ?? 0),
      lang: segment.lang,
    }))
    .filter((segment) => segment.text.length > 0);

export const transcriptText = (segments) =>
  cleanText(segments.map((segment) => segment.text).join(' '));

const shouldCloseTranscriptChunk = (chunkStart, segment) => {
  const elapsed = segment.offset - chunkStart;
  const hasSoftBoundary = /[.!?]["')\]]?$/.test(segment.text);

  return (
    elapsed >= chunkSeconds ||
    (elapsed >= chunkSeconds * 0.75 && hasSoftBoundary)
  );
};

export const chunkTranscriptSegments = (segments) => {
  const chunks = [];
  let current = [];
  let currentOffset = 0;

  for (const segment of segments) {
    if (current.length === 0) {
      currentOffset = segment.offset;
    }

    current.push(segment);

    if (shouldCloseTranscriptChunk(currentOffset, segment)) {
      chunks.push({ offset: currentOffset, text: transcriptText(current) });
      current = [];
    }
  }

  if (current.length > 0) {
    chunks.push({ offset: currentOffset, text: transcriptText(current) });
  }

  return chunks;
};

export const transcriptLines = (segments) =>
  chunkTranscriptSegments(segments).map(
    (chunk) => `[${timestamp(chunk.offset)}] ${chunk.text}`,
  );

const fetchOembedMetadata = async (canonicalUrl) => {
  const url = new URL('https://www.youtube.com/oembed');
  url.searchParams.set('url', canonicalUrl);
  url.searchParams.set('format', 'json');

  const response = await fetch(url, {
    headers: { 'User-Agent': defaultUserAgent },
  });

  if (!response.ok) {
    return {};
  }

  const data = await response.json();
  return {
    title: data.title,
    channel: data.author_name,
  };
};

const extractJsonString = (page, key) => {
  const match = page.match(
    new RegExp(`"${key}"\\s*:\\s*"((?:\\\\.|[^"\\\\])*)"`),
  );
  if (!match) {
    return undefined;
  }

  try {
    return JSON.parse(`"${match[1]}"`);
  } catch {
    return decodeHtmlEntities(match[1]);
  }
};

const fetchWatchPageMetadata = async (canonicalUrl) => {
  const response = await fetch(canonicalUrl, {
    headers: { 'User-Agent': defaultUserAgent },
  });

  if (!response.ok) {
    return {};
  }

  const page = await response.text();
  const duration = extractJsonString(page, 'lengthSeconds');
  const publishDate =
    extractJsonString(page, 'publishDate') ??
    extractJsonString(page, 'datePublished');
  const title = extractJsonString(page, 'title');
  const channel =
    extractJsonString(page, 'ownerChannelName') ??
    extractJsonString(page, 'author') ??
    extractJsonString(page, 'channelName');

  return {
    title,
    channel,
    durationSeconds: duration ? Number(duration) : undefined,
    publishDate,
  };
};

const fetchFallbackMetadata = async (canonicalUrl) => {
  const [oembed, watchPage] = await Promise.allSettled([
    fetchOembedMetadata(canonicalUrl),
    fetchWatchPageMetadata(canonicalUrl),
  ]);

  return {
    ...(oembed.status === 'fulfilled' ? oembed.value : {}),
    ...(watchPage.status === 'fulfilled' ? watchPage.value : {}),
  };
};

const normalizeDetailsMetadata = (details) => ({
  title: details?.title,
  channel: details?.author,
  channelId: details?.channelId,
  durationSeconds: details?.lengthSeconds
    ? Number(details.lengthSeconds)
    : undefined,
  description: details?.description,
  viewCount: details?.viewCount ? Number(details.viewCount) : undefined,
  isLiveContent: details?.isLiveContent,
});

const captionKind = (languageInfo) =>
  languageInfo?.isAutoGenerated ? 'auto-generated' : 'caption';

export const selectTranscriptLanguage = (
  languages,
  requestedLanguage,
  { strict = false } = {},
) => {
  const requested = requestedLanguage.toLowerCase();
  const availableLanguages = languages
    .map((language) => language.languageCode)
    .filter(Boolean);
  const exact = languages.find(
    (language) => language.languageCode?.toLowerCase() === requested,
  );
  const regional = languages.find((language) =>
    language.languageCode?.toLowerCase().startsWith(`${requested}-`),
  );
  const matched = exact ?? regional;

  if (matched) {
    return {
      status: 'matched',
      requestedLanguage,
      availableLanguages,
      language: matched.languageCode,
      kind: captionKind(matched),
      track: matched,
    };
  }

  if (strict) {
    return {
      status: 'unavailable',
      requestedLanguage,
      availableLanguages,
    };
  }

  const fallback = languages[0];
  return {
    status: fallback ? 'fallback' : 'unavailable',
    requestedLanguage,
    availableLanguages,
    language: fallback?.languageCode,
    kind: fallback ? captionKind(fallback) : undefined,
    track: fallback,
  };
};

const strictLanguageUnavailableReason = ({
  requestedLanguage,
  availableLanguages,
}) =>
  `Requested transcript language "${requestedLanguage}" is unavailable. Available languages: ${availableLanguages.length > 0 ? availableLanguages.join(', ') : 'none'}.`;

export const fetchVideo = async (inputUrl, options = {}) => {
  const lang = options.lang ?? defaultLanguage;
  const strictLanguage = Boolean(options.strictLanguage);
  const { videoId, canonicalUrl } = normalizeYoutubeUrl(inputUrl);
  const fallbackMetadataPromise = fetchFallbackMetadata(canonicalUrl);
  let languageSelection;

  try {
    const languages = await listLanguages(canonicalUrl, {
      retries: Number(options.retries ?? 1),
      retryDelay: 750,
      userAgent: defaultUserAgent,
    });
    languageSelection = selectTranscriptLanguage(languages, lang, {
      strict: strictLanguage,
    });
  } catch (error) {
    if (strictLanguage) {
      const fallbackMetadata = await fallbackMetadataPromise;
      return {
        metadata: { videoId, canonicalUrl, ...fallbackMetadata },
        requestedLanguage: lang,
        availableLanguages: [],
        transcriptAvailable: false,
        transcriptUnavailable: `Could not list available transcript languages: ${error.name ?? 'TranscriptError'}: ${error.message ?? String(error)}`,
        segments: [],
      };
    }
  }

  if (strictLanguage && languageSelection?.status === 'unavailable') {
    const fallbackMetadata = await fallbackMetadataPromise;
    return {
      metadata: { videoId, canonicalUrl, ...fallbackMetadata },
      requestedLanguage: languageSelection.requestedLanguage,
      availableLanguages: languageSelection.availableLanguages,
      transcriptAvailable: false,
      transcriptUnavailable: strictLanguageUnavailableReason(languageSelection),
      segments: [],
    };
  }

  const transcriptLanguage = strictLanguage ? languageSelection.language : lang;

  try {
    const result = await fetchTranscript(canonicalUrl, {
      lang: transcriptLanguage,
      retries: Number(options.retries ?? 1),
      retryDelay: 750,
      userAgent: defaultUserAgent,
      videoDetails: true,
    });
    const segments = normalizeTranscriptSegments(result.segments ?? result);
    const fallbackMetadata = await fallbackMetadataPromise;
    const metadata = {
      videoId,
      canonicalUrl,
      ...fallbackMetadata,
      ...normalizeDetailsMetadata(result.videoDetails),
    };
    const language = languageSelection?.language ?? segments[0]?.lang ?? lang;
    const kind = captionKind(languageSelection?.track);

    if (segments.length === 0) {
      return {
        metadata,
        requestedLanguage: lang,
        availableLanguages: languageSelection?.availableLanguages,
        language,
        kind,
        transcriptAvailable: false,
        transcriptUnavailable: 'Transcript fetch returned no caption text.',
        segments: [],
      };
    }

    return {
      metadata,
      requestedLanguage: lang,
      availableLanguages: languageSelection?.availableLanguages,
      language,
      kind,
      transcriptAvailable: true,
      segments,
    };
  } catch (error) {
    const fallbackMetadata = await fallbackMetadataPromise;
    return {
      metadata: { videoId, canonicalUrl, ...fallbackMetadata },
      requestedLanguage: lang,
      availableLanguages: languageSelection?.availableLanguages,
      language: languageSelection?.language ?? lang,
      kind: strictLanguage
        ? languageSelection?.kind
        : languageSelection?.track?.isAutoGenerated
          ? 'auto-generated'
          : undefined,
      transcriptAvailable: false,
      transcriptUnavailable: `${error.name ?? 'TranscriptError'}: ${error.message ?? String(error)}`,
      segments: [],
    };
  }
};

export const renderTranscriptMarkdown = ({
  title,
  summarySlug,
  sourceUrl,
  videoId,
  capturedAt,
  series,
  episode,
  channel,
  language,
  kind,
  durationSeconds,
  segments,
}) => {
  if (segments.length === 0) {
    throw new Error('Refusing to render an empty transcript.');
  }

  const frontmatter = yamlLines([
    ['title', title],
    ['summarySlug', summarySlug],
    ['sourceUrl', sourceUrl],
    ['videoId', videoId],
    ['capturedAt', capturedAt],
    ['series', series],
    ['episode', episode],
    ['channel', channel],
    ['language', language],
    ['kind', kind],
    ['durationSeconds', durationSeconds],
  ]);

  return `---\n${frontmatter}\n---\n\n## Transcript\n\n${transcriptLines(segments).join('\n\n')}\n`;
};
