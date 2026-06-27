#!/usr/bin/env node
import { access, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchTranscript, listLanguages } from 'youtube-transcript-plus';

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const transcriptsDir = path.join(rootDir, 'src/content/transcripts');

const defaultUserAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';
const defaultLanguage = 'en';
const chunkSeconds = 60;
const okExit = 0;
const transcriptUnavailableExit = 2;

const usage = `Usage:
  npm run youtube:transcript -- <youtube-url> [options]
  npm run youtube:transcript -- save <youtube-url> [options]
  npm run youtube:transcript -- fetch <youtube-url> [options]

Commands:
  save   Default. Fetch metadata/captions and save one transcript sidecar under
         src/content/transcripts/<summary-slug>.md.
  fetch  Print normalized metadata and transcript availability without writing.

Options:
  --summary-slug <slug>  Relative summary slug, e.g. coding-with-agents/example.
                         Defaults to coding-with-agents/<slugified video title>.
  --title <title>        Override fetched video title.
  --channel <channel>    Override fetched channel/source name.
  --series <series>      Optional transcript series value.
  --episode <number>     Optional transcript episode value.
  --lang <code>          Caption language to request. Default: en.
  --dry-run              Fetch and report paths without writing files.
  --force                Overwrite an existing transcript file.
  --json                 Print machine-readable JSON.
  --help                 Show this help.

Notes:
  This script uses youtube-transcript-plus, which relies on unofficial YouTube
  transcript APIs. YouTube can change those internals; failures are reported as
  transcriptUnavailable reasons instead of producing empty transcripts.

  Transcript bodies use coarse ${chunkSeconds}-second timestamped chunks. The
  timestamps are source anchors for later transcript checks and summaries, not
  caption-level timing.
`;

const commandNames = new Set(['fetch', 'help', 'save']);
const booleanOptions = new Set(['dry-run', 'force', 'help', 'json']);
const valueOptions = new Set([
  'channel',
  'episode',
  'lang',
  'series',
  'source',
  'summary-slug',
  'title',
]);
const optionAliases = new Map([['h', 'help']]);

const parseArgs = (argv) => {
  const first = argv[0];
  const command = commandNames.has(first) ? first : 'save';
  const rest = commandNames.has(first) ? argv.slice(1) : argv;
  const options = {};
  const positionals = [];

  for (let index = 0; index < rest.length; index += 1) {
    const arg = rest[index];

    if (!arg.startsWith('-') || arg === '-') {
      positionals.push(arg);
      continue;
    }

    const normalized = arg.startsWith('--') ? arg.slice(2) : arg.slice(1);
    const [rawName, inlineValue] = normalized.split(/=(.*)/s, 2);
    const name = optionAliases.get(rawName) ?? rawName;

    if (booleanOptions.has(name)) {
      options[name] =
        inlineValue === undefined ? true : inlineValue !== 'false';
      continue;
    }

    if (!valueOptions.has(name)) {
      throw new Error(`Unknown option: --${name}`);
    }

    const value = inlineValue ?? rest[index + 1];
    if (value === undefined || value.startsWith('--')) {
      throw new Error(`Missing value for --${name}`);
    }

    options[name] = value;
    if (inlineValue === undefined) {
      index += 1;
    }
  }

  return { command, options, positionals };
};

const fail = (message, exitCode = 1) => {
  console.error(message);
  process.exit(exitCode);
};

const print = (value, options) => {
  if (options.json) {
    console.log(JSON.stringify(value, null, 2));
    return;
  }

  console.log(value);
};

const fileExists = async (filePath) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

const writeFileExclusive = async (filePath, contents, { force, dryRun }) => {
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

const repoRelative = (filePath) => path.relative(rootDir, filePath);

const normalizeSummarySlug = (rawSlug) => {
  const withoutExtension = rawSlug.replace(/\\/g, '/').replace(/\.md$/i, '');
  const trimmed = withoutExtension.replace(/^\/+/, '').replace(/\/+$/, '');

  if (!trimmed || trimmed.includes('..')) {
    throw new Error(`Invalid summary slug: ${rawSlug}`);
  }

  return trimmed;
};

const safeContentPath = (baseDir, summarySlug) => {
  const target = path.resolve(
    baseDir,
    `${normalizeSummarySlug(summarySlug)}.md`,
  );
  const base = path.resolve(baseDir);

  if (!target.startsWith(`${base}${path.sep}`)) {
    throw new Error(
      `Refusing to write outside ${repoRelative(baseDir)}: ${summarySlug}`,
    );
  }

  return target;
};

const extractVideoId = (input) => {
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

const canonicalYoutubeUrl = (videoId) =>
  `https://www.youtube.com/watch?v=${videoId}`;

const normalizeYoutubeUrl = (input) => {
  const videoId = extractVideoId(input);
  if (!videoId) {
    throw new Error(`Could not find a YouTube video ID in: ${input}`);
  }

  return { videoId, canonicalUrl: canonicalYoutubeUrl(videoId) };
};

const decodeHtmlEntities = (value) =>
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

const cleanText = (value) =>
  decodeHtmlEntities(
    String(value ?? '')
      .replace(/\s+/g, ' ')
      .trim(),
  );

const slugify = (value) => {
  const slug = cleanText(value)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');

  return slug || 'youtube-video';
};

const timestamp = (offsetSeconds) => {
  const totalSeconds = Math.max(0, Math.floor(Number(offsetSeconds) || 0));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((part) => String(part).padStart(2, '0'))
    .join(':');
};

const yamlScalar = (value) => {
  if (typeof value === 'number') {
    return String(value);
  }

  if (typeof value === 'boolean') {
    return value ? 'true' : 'false';
  }

  return `"${String(value).replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
};

const yamlLines = (entries) =>
  entries
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== '',
    )
    .map(([key, value]) => `${key}: ${yamlScalar(value)}`)
    .join('\n');

const normalizeTranscriptSegments = (segments) =>
  segments
    .map((segment) => ({
      text: cleanText(segment.text),
      offset: Number(segment.offset ?? segment.start ?? 0),
      duration: Number(segment.duration ?? 0),
      lang: segment.lang,
    }))
    .filter((segment) => segment.text.length > 0);

const transcriptText = (segments) =>
  cleanText(segments.map((segment) => segment.text).join(' '));

const shouldCloseTranscriptChunk = (chunkStart, segment) => {
  const elapsed = segment.offset - chunkStart;
  const hasSoftBoundary = /[.!?]["')\]]?$/.test(segment.text);

  return (
    elapsed >= chunkSeconds ||
    (elapsed >= chunkSeconds * 0.75 && hasSoftBoundary)
  );
};

const chunkTranscriptSegments = (segments) => {
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

const transcriptLines = (segments) =>
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

const fetchVideo = async (inputUrl, options = {}) => {
  const lang = options.lang ?? defaultLanguage;
  const { videoId, canonicalUrl } = normalizeYoutubeUrl(inputUrl);
  const fallbackMetadataPromise = fetchFallbackMetadata(canonicalUrl);
  let languageInfo;

  try {
    const languages = await listLanguages(canonicalUrl, {
      retries: Number(options.retries ?? 1),
      retryDelay: 750,
      userAgent: defaultUserAgent,
    });
    languageInfo =
      languages.find((language) => language.languageCode === lang) ??
      languages.find((language) =>
        language.languageCode?.startsWith(`${lang}-`),
      ) ??
      languages[0];
  } catch {
    languageInfo = undefined;
  }

  try {
    const result = await fetchTranscript(canonicalUrl, {
      lang,
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

    if (segments.length === 0) {
      return {
        metadata,
        language: languageInfo?.languageCode ?? lang,
        kind: languageInfo?.isAutoGenerated ? 'auto-generated' : 'caption',
        transcriptAvailable: false,
        transcriptUnavailable: 'Transcript fetch returned no caption text.',
        segments: [],
      };
    }

    return {
      metadata,
      language: languageInfo?.languageCode ?? segments[0]?.lang ?? lang,
      kind: languageInfo?.isAutoGenerated ? 'auto-generated' : 'caption',
      transcriptAvailable: true,
      segments,
    };
  } catch (error) {
    const fallbackMetadata = await fallbackMetadataPromise;
    return {
      metadata: { videoId, canonicalUrl, ...fallbackMetadata },
      language: languageInfo?.languageCode ?? lang,
      kind: languageInfo?.isAutoGenerated ? 'auto-generated' : undefined,
      transcriptAvailable: false,
      transcriptUnavailable: `${error.name ?? 'TranscriptError'}: ${error.message ?? String(error)}`,
      segments: [],
    };
  }
};

const renderTranscriptMarkdown = ({
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

const prepareContext = async (inputUrl, options) => {
  const fetched = await fetchVideo(inputUrl, options);
  const metadata = fetched.metadata;
  const title = cleanText(
    options.title ?? metadata.title ?? `YouTube video ${metadata.videoId}`,
  );
  const summarySlug = normalizeSummarySlug(
    options['summary-slug'] ?? `coding-with-agents/${slugify(title)}`,
  );
  const episode = options.episode ? Number(options.episode) : undefined;
  const channel = cleanText(
    options.channel ?? options.source ?? metadata.channel,
  );

  return {
    fetched,
    title,
    summarySlug,
    episode,
    series: options.series,
    channel: channel || undefined,
    capturedAt: new Date().toISOString(),
  };
};

const payloadForContext = ({ context, transcriptPath, write }) => {
  const { fetched, title, summarySlug, capturedAt } = context;
  const blocks = fetched.transcriptAvailable
    ? transcriptLines(fetched.segments).length
    : 0;

  return {
    title,
    summarySlug,
    capturedAt,
    videoId: fetched.metadata.videoId,
    canonicalUrl: fetched.metadata.canonicalUrl,
    channel: context.channel,
    durationSeconds: fetched.metadata.durationSeconds,
    language: fetched.language,
    kind: fetched.kind,
    transcriptAvailable: fetched.transcriptAvailable,
    transcriptUnavailable: fetched.transcriptUnavailable,
    transcriptSegments: fetched.segments.length,
    transcriptBlocks: blocks,
    transcriptPath: transcriptPath ? repoRelative(transcriptPath) : undefined,
    transcriptWritten: write?.written,
    dryRun: write?.dryRun,
    existed: write?.existed,
  };
};

const humanResult = (payload, action) => {
  const heading = action === 'fetch' ? 'Transcript fetch:' : 'Transcript save:';
  const lines = [
    heading,
    `- Title: ${payload.title}`,
    `- Video ID: ${payload.videoId}`,
    `- Canonical URL: ${payload.canonicalUrl}`,
    `- Channel: ${payload.channel ?? 'unknown'}`,
    `- Duration seconds: ${payload.durationSeconds ?? 'unknown'}`,
    `- Transcript: ${payload.transcriptAvailable ? `available (${payload.transcriptSegments} segments, ${payload.transcriptBlocks} chunks)` : 'unavailable'}`,
  ];

  if (payload.transcriptUnavailable) {
    lines.push(
      `- Transcript unavailable reason: ${payload.transcriptUnavailable}`,
    );
  }

  if (payload.transcriptPath) {
    lines.push(`- Transcript path: ${payload.transcriptPath}`);
  }

  if (payload.dryRun) {
    lines.push('- Dry run: no files written');
  } else if (payload.transcriptPath) {
    lines.push(`- Written: ${payload.transcriptWritten ? 'yes' : 'no'}`);
  }

  return lines.join('\n');
};

const runFetch = async (inputUrl, options) => {
  const context = await prepareContext(inputUrl, options);
  const transcriptPath = safeContentPath(transcriptsDir, context.summarySlug);
  const payload = payloadForContext({ context, transcriptPath });
  print(options.json ? payload : humanResult(payload, 'fetch'), options);
  return context.fetched.transcriptAvailable
    ? okExit
    : transcriptUnavailableExit;
};

const runSave = async (inputUrl, options) => {
  const context = await prepareContext(inputUrl, options);
  const transcriptPath = safeContentPath(transcriptsDir, context.summarySlug);

  if (!context.fetched.transcriptAvailable) {
    const payload = payloadForContext({ context, transcriptPath });
    print(options.json ? payload : humanResult(payload, 'save'), options);
    return transcriptUnavailableExit;
  }

  const metadata = context.fetched.metadata;
  const markdown = renderTranscriptMarkdown({
    title: context.title,
    summarySlug: context.summarySlug,
    sourceUrl: metadata.canonicalUrl,
    videoId: metadata.videoId,
    capturedAt: context.capturedAt,
    series: context.series,
    episode: context.episode,
    channel: context.channel,
    language: context.fetched.language,
    kind: context.fetched.kind,
    durationSeconds: metadata.durationSeconds,
    segments: context.fetched.segments,
  });

  const write = await writeFileExclusive(transcriptPath, markdown, {
    force: Boolean(options.force),
    dryRun: Boolean(options['dry-run']),
  });
  const payload = payloadForContext({ context, transcriptPath, write });
  print(options.json ? payload : humanResult(payload, 'save'), options);
  return okExit;
};

const main = async () => {
  let parsed;
  try {
    parsed = parseArgs(process.argv.slice(2));
  } catch (error) {
    fail(error.message);
  }

  const { command, options, positionals } = parsed;
  if (command === 'help' || options.help) {
    console.log(usage);
    return okExit;
  }

  if (!positionals[0]) {
    fail(`Missing YouTube URL.\n\n${usage}`);
  }

  if (command === 'fetch') {
    return runFetch(positionals[0], options);
  }

  return runSave(positionals[0], options);
};

main()
  .then((exitCode) => {
    process.exitCode = exitCode;
  })
  .catch((error) => {
    console.error(error.stack ?? error.message ?? String(error));
    process.exitCode = 1;
  });
