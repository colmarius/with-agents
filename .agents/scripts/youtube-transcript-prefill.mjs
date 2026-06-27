#!/usr/bin/env node
import { access, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchTranscript, listLanguages } from 'youtube-transcript-plus';

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '../..',
);
const resourcesPath = path.join(
  rootDir,
  'src/data/resources/coding-with-agents.json',
);
const summariesDir = path.join(rootDir, 'src/content/summaries');
const transcriptsDir = path.join(rootDir, 'src/content/transcripts');
const draftsDir = path.join(
  rootDir,
  '.agents/work/feature/youtube-transcript-summary-prefill/drafts',
);
const transcriptReviewsDir = path.join(
  rootDir,
  '.agents/work/feature/youtube-transcript-summary-prefill/transcript-reviews',
);

const defaultUserAgent =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36';

const usage = `Usage:
  node .agents/scripts/youtube-transcript-prefill.mjs fetch <youtube-url> [options]
  node .agents/scripts/youtube-transcript-prefill.mjs prefill <youtube-url> [options]
  node .agents/scripts/youtube-transcript-prefill.mjs backfill [options]
  node .agents/scripts/youtube-transcript-prefill.mjs review <transcript-path-or-slug> [options]

Commands:
  fetch     Print normalized metadata and transcript availability for one URL.
  prefill   Fetch transcript, write src/content/transcripts/<summary-slug>.md,
            then write a non-published draft bundle under the work item.
  backfill  Audit existing summaries/resources and write missing transcript sidecars.
  review    Create a non-published transcript review checklist with likely ASR
            typos/issues to check before writing or publishing a summary.

Options:
  --summary-slug <slug>  Relative summary slug, e.g. coding-with-agents/example.
                         Defaults to coding-with-agents/<slugified video title>.
  --resource-id <id>     Resource ID for transcript/summary frontmatter.
                         Defaults to the next ID in coding-with-agents.json.
  --title <title>        Override fetched video title.
  --source <source>      Override source/channel in draft resource JSON.
  --series <series>      Optional summary/transcript series value.
  --episode <number>     Optional summary/transcript episode value.
  --date <YYYY-MM-DD>    Optional summary/resource draft date.
  --lang <code>          Caption language to request. Default: en.
  --tags <csv>           Draft resource tags. Default: Coding agents,Workflow.
  --delay-ms <number>    Backfill delay between fetches. Default: 500.
  --timestamp-mode <mode> Transcript body format: chunk, segment, or none.
                         Default: chunk. Use segment for exact caption timing.
  --chunk-seconds <num>  Approximate seconds per timestamped chunk. Default: 30.
  --all                  For review, scan all transcript markdown files.
  --max-findings <num>   For review, cap automated findings. Default: 200.
  --dry-run              Audit/compute paths without writing files.
  --force                Overwrite existing transcript/draft files.
  --no-draft             For prefill, write transcript only.
  --json                 Print machine-readable JSON.
  --help                 Show this help.

Notes:
  This script uses youtube-transcript-plus, which relies on unofficial YouTube
  transcript APIs. YouTube can change those internals; failures are reported as
  transcriptUnavailable reasons instead of producing empty transcripts.
`;

const booleanOptions = new Set([
  'all',
  'dry-run',
  'force',
  'help',
  'json',
  'no-draft',
]);

const optionAliases = new Map([['h', 'help']]);

const okExit = 0;
const transcriptUnavailableExit = 2;
const defaultTimestampMode = 'chunk';
const defaultChunkSeconds = 30;

const parseArgs = (argv) => {
  const [command = 'help', ...rest] = argv;
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

const readJson = async (filePath) =>
  JSON.parse(await readFile(filePath, 'utf8'));

const repoRelative = (filePath) => path.relative(rootDir, filePath);

const toPosixPath = (filePath) => filePath.split(path.sep).join('/');

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

const normalizeTimestampMode = (mode) => {
  const normalized = String(mode ?? defaultTimestampMode).toLowerCase();
  if (['chunk', 'segment', 'none'].includes(normalized)) {
    return normalized;
  }

  throw new Error(
    `Invalid --timestamp-mode ${mode}. Expected chunk, segment, or none.`,
  );
};

const parseChunkSeconds = (value) => {
  const seconds = Number(value ?? defaultChunkSeconds);
  if (!Number.isFinite(seconds) || seconds < 10) {
    throw new Error(
      '--chunk-seconds must be a number greater than or equal to 10.',
    );
  }

  return seconds;
};

const parseTranscriptFormatOptions = (options) => ({
  timestampMode: normalizeTimestampMode(options['timestamp-mode']),
  chunkSeconds: parseChunkSeconds(options['chunk-seconds']),
});

const transcriptText = (segments) =>
  cleanText(segments.map((segment) => segment.text).join(' '));

const shouldCloseTranscriptChunk = (chunkStart, segment, chunkSeconds) => {
  const elapsed = segment.offset - chunkStart;
  const hasSoftBoundary = /[.!?]["')\]]?$/.test(segment.text);

  return (
    elapsed >= chunkSeconds ||
    (elapsed >= chunkSeconds * 0.75 && hasSoftBoundary)
  );
};

const chunkTranscriptSegments = (segments, chunkSeconds) => {
  const chunks = [];
  let current = [];
  let currentOffset = 0;

  for (const segment of segments) {
    if (current.length === 0) {
      currentOffset = segment.offset;
    }

    current.push(segment);

    if (shouldCloseTranscriptChunk(currentOffset, segment, chunkSeconds)) {
      chunks.push({ offset: currentOffset, text: transcriptText(current) });
      current = [];
    }
  }

  if (current.length > 0) {
    chunks.push({ offset: currentOffset, text: transcriptText(current) });
  }

  return chunks;
};

const transcriptLines = (
  segments,
  {
    timestampMode = defaultTimestampMode,
    chunkSeconds = defaultChunkSeconds,
  } = {},
) => {
  const mode = normalizeTimestampMode(timestampMode);

  if (mode === 'segment') {
    return segments.map(
      (segment) => `[${timestamp(segment.offset)}] ${segment.text}`,
    );
  }

  const chunks = chunkTranscriptSegments(segments, chunkSeconds);
  if (mode === 'none') {
    return chunks.map((chunk) => chunk.text);
  }

  return chunks.map((chunk) => `[${timestamp(chunk.offset)}] ${chunk.text}`);
};

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
  const lang = options.lang ?? 'en';
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
  resourceId,
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
  timestampMode,
  chunkSeconds,
  segments,
}) => {
  if (segments.length === 0) {
    throw new Error('Refusing to render an empty transcript.');
  }

  const frontmatter = yamlLines([
    ['title', title],
    ['resourceId', resourceId],
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
    ['timestampMode', timestampMode],
    ['chunkSeconds', timestampMode === 'chunk' ? chunkSeconds : undefined],
  ]);

  return `---\n${frontmatter}\n---\n\n## Transcript\n\n${transcriptLines(
    segments,
    {
      timestampMode,
      chunkSeconds,
    },
  ).join('\n\n')}\n`;
};

const parseScalar = (value) => {
  const trimmed = value.trim();
  if (/^".*"$/.test(trimmed) || /^'.*'$/.test(trimmed)) {
    return trimmed.slice(1, -1).replace(/\\"/g, '"');
  }

  if (/^\d+$/.test(trimmed)) {
    return Number(trimmed);
  }

  return trimmed;
};

const parseFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) {
    return {};
  }

  return Object.fromEntries(
    match[1]
      .split('\n')
      .map((line) => line.match(/^([A-Za-z][\w-]*):\s*(.*)$/))
      .filter(Boolean)
      .map(([, key, value]) => [key, parseScalar(value)]),
  );
};

const listMarkdownFiles = async (dir) => {
  const { readdir } = await import('node:fs/promises');
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return listMarkdownFiles(entryPath);
      }
      return entry.isFile() && entry.name.endsWith('.md') ? [entryPath] : [];
    }),
  );

  return files.flat().sort();
};

const extractWatchUrls = (content) => {
  const matches =
    content.match(/https?:\/\/(?:www\.)?youtube\.com\/watch\?[^\s)\]>"']+/g) ??
    [];
  const urls = [];
  const seen = new Set();

  for (const match of matches) {
    try {
      const { videoId, canonicalUrl } = normalizeYoutubeUrl(match);
      if (!seen.has(videoId)) {
        urls.push(canonicalUrl);
        seen.add(videoId);
      }
    } catch {
      // Ignore malformed markdown fragments; the audit will skip missing concrete URLs.
    }
  }

  return urls;
};

const readSummaries = async () => {
  const files = await listMarkdownFiles(summariesDir);
  return Promise.all(
    files.map(async (filePath) => {
      const content = await readFile(filePath, 'utf8');
      const frontmatter = parseFrontmatter(content);
      const summarySlug = toPosixPath(
        path.relative(summariesDir, filePath),
      ).replace(/\.md$/, '');
      return {
        filePath,
        summarySlug,
        frontmatter,
        watchUrls: extractWatchUrls(content),
        hasExternalLivestream: /https?:\/\/x\.com|https?:\/\/twitter\.com/.test(
          content,
        ),
      };
    }),
  );
};

const nextResourceId = async () => {
  const resources = await readJson(resourcesPath);
  return Math.max(...resources.map((resource) => Number(resource.id) || 0)) + 1;
};

const parseTags = (value) =>
  String(value ?? 'Coding agents,Workflow')
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);

const makeDraftBundle = async ({
  title,
  resourceId,
  summarySlug,
  sourceUrl,
  videoId,
  metadata,
  transcriptPath,
  language,
  kind,
  series,
  episode,
  date,
  source,
  tags,
  generatedAt,
  force,
  dryRun,
}) => {
  const transcriptContent = await readFile(transcriptPath, 'utf8');
  const lines = transcriptContent
    .split('\n')
    .filter((line) => /^\[\d\d:\d\d:\d\d\]/.test(line));
  if (lines.length === 0) {
    throw new Error(
      `Saved transcript has no timestamped lines: ${repoRelative(transcriptPath)}`,
    );
  }

  const draftDir = path.join(draftsDir, normalizeSummarySlug(summarySlug));
  const transcriptRelative = repoRelative(transcriptPath);
  const resources = await readJson(resourcesPath);
  const existingResource = resources.find(
    (resource) => Number(resource.id) === Number(resourceId),
  );
  const proposedVideo = {
    title,
    url: sourceUrl,
    description: 'Draft description pending review of the saved transcript.',
    type: 'video',
    source: source ?? metadata.channel ?? 'YouTube',
    date: date ?? metadata.publishDate ?? generatedAt.slice(0, 10),
    tags,
  };
  const resourceDraftKind = existingResource
    ? 'existing-resource-reference'
    : 'new-resource';
  const resourceDraftFilename = existingResource
    ? 'resource-reference.json'
    : 'resource.json';
  const resourceDraft = existingResource
    ? {
        draftAction: 'use-existing-resource',
        note: 'This summary uses an existing manifest resourceId. Do not append this object to src/data/resources/coding-with-agents.json as a new resource.',
        summaryResourceId: resourceId,
        existingResource,
        proposedVideo,
      }
    : {
        id: resourceId,
        ...proposedVideo,
      };

  const summaryFrontmatter = yamlLines([
    ['title', title],
    ['resourceId', resourceId],
    ['series', series],
    ['episode', episode],
    ['date', date ?? metadata.publishDate ?? generatedAt.slice(0, 10)],
  ]);

  const summaryDraft = `---\n${summaryFrontmatter}\n---\n\n# Draft summary for review\n\n> Draft generated from saved transcript source material. Do not publish without human/agent review.\n\n## Provenance\n\n- Source URL: <${sourceUrl}>\n- Video ID: \`${videoId}\`\n- Transcript path: \`${transcriptRelative}\`\n- Transcript availability: available\n- Transcript language: ${language ?? 'unknown'}\n- Transcript kind: ${kind ?? 'unknown'}\n- Transcript blocks: ${lines.length}\n- Resource draft: \`${resourceDraftFilename}\` (${resourceDraftKind})\n- Generated at: ${generatedAt}\n\n## Reviewer prompt\n\nUse the saved transcript at \`${transcriptRelative}\` to write a concise resource summary compatible with \`src/content.config.ts\`. First run or read the transcript review packet when available, preserve the frontmatter above, replace this draft body with reviewed summary content, and do not publish raw or unreviewed AI output.\n\n## Transcript excerpts\n\n### Opening\n\n${lines
    .slice(0, 8)
    .map((line) => `> ${line}`)
    .join('\n')}\n\n### Closing\n\n${lines
    .slice(-5)
    .map((line) => `> ${line}`)
    .join('\n')}\n`;

  const provenance = {
    generatedAt,
    sourceUrl,
    videoId,
    summarySlug,
    resourceId,
    transcriptPath: transcriptRelative,
    transcriptAvailable: true,
    transcriptBlockCount: lines.length,
    language,
    kind,
    resourceDraftKind,
    resourceDraftPath: repoRelative(path.join(draftDir, resourceDraftFilename)),
    metadata,
  };

  const files = [
    [
      path.join(draftDir, resourceDraftFilename),
      `${JSON.stringify(resourceDraft, null, 2)}\n`,
    ],
    [path.join(draftDir, 'summary.md'), summaryDraft],
    [
      path.join(draftDir, 'provenance.json'),
      `${JSON.stringify(provenance, null, 2)}\n`,
    ],
  ];

  const writes = [];
  for (const [filePath, contents] of files) {
    writes.push(
      await writeFileExclusive(filePath, contents, { force, dryRun }),
    );
  }

  return { draftDir, files: writes.map((write) => repoRelative(write.path)) };
};

const preparePrefillContext = async (inputUrl, options) => {
  const fetched = await fetchVideo(inputUrl, options);
  const metadata = fetched.metadata;
  const title = cleanText(
    options.title ?? metadata.title ?? `YouTube video ${metadata.videoId}`,
  );
  const resourceId = options['resource-id']
    ? Number(options['resource-id'])
    : await nextResourceId();
  const summarySlug = normalizeSummarySlug(
    options['summary-slug'] ?? `coding-with-agents/${slugify(title)}`,
  );
  const episode = options.episode ? Number(options.episode) : undefined;
  const generatedAt = new Date().toISOString();

  return {
    fetched,
    title,
    resourceId,
    summarySlug,
    episode,
    series: options.series,
    date: options.date,
    source: options.source,
    tags: parseTags(options.tags),
    generatedAt,
  };
};

const writeTranscript = async ({ context, options }) => {
  const {
    fetched,
    title,
    resourceId,
    summarySlug,
    episode,
    series,
    generatedAt,
  } = context;
  const transcriptPath = safeContentPath(transcriptsDir, summarySlug);
  const metadata = fetched.metadata;
  const transcriptFormat = parseTranscriptFormatOptions(options);
  const markdown = renderTranscriptMarkdown({
    title,
    resourceId,
    summarySlug,
    sourceUrl: metadata.canonicalUrl,
    videoId: metadata.videoId,
    capturedAt: generatedAt,
    series,
    episode,
    channel: metadata.channel,
    language: fetched.language,
    kind: fetched.kind,
    durationSeconds: metadata.durationSeconds,
    ...transcriptFormat,
    segments: fetched.segments,
  });

  const write = await writeFileExclusive(transcriptPath, markdown, {
    force: Boolean(options.force),
    dryRun: Boolean(options['dry-run']),
  });

  return { transcriptPath, write };
};

const prefillResultPayload = ({
  context,
  transcriptPath,
  draftBundle,
  write,
}) => {
  const { fetched, title, resourceId, summarySlug, generatedAt } = context;

  return {
    title,
    resourceId,
    summarySlug,
    generatedAt,
    videoId: fetched.metadata.videoId,
    canonicalUrl: fetched.metadata.canonicalUrl,
    channel: fetched.metadata.channel,
    durationSeconds: fetched.metadata.durationSeconds,
    language: fetched.language,
    kind: fetched.kind,
    transcriptAvailable: fetched.transcriptAvailable,
    transcriptUnavailable: fetched.transcriptUnavailable,
    transcriptSegments: fetched.segments.length,
    transcriptPath: transcriptPath ? repoRelative(transcriptPath) : undefined,
    transcriptWritten: write?.written,
    draftDir: draftBundle ? repoRelative(draftBundle.draftDir) : undefined,
    draftFiles: draftBundle?.files,
  };
};

const humanPrefillResult = (payload) => {
  const lines = [
    `Title: ${payload.title}`,
    `Video ID: ${payload.videoId}`,
    `Canonical URL: ${payload.canonicalUrl}`,
    `Channel: ${payload.channel ?? 'unknown'}`,
    `Duration seconds: ${payload.durationSeconds ?? 'unknown'}`,
    `Transcript: ${payload.transcriptAvailable ? `available (${payload.transcriptSegments} segments)` : 'unavailable'}`,
  ];

  if (payload.transcriptUnavailable) {
    lines.push(
      `Transcript unavailable reason: ${payload.transcriptUnavailable}`,
    );
  }

  if (payload.transcriptPath) {
    lines.push(`Transcript path: ${payload.transcriptPath}`);
  }

  if (payload.draftDir) {
    lines.push(`Draft bundle: ${payload.draftDir}`);
  }

  return lines.join('\n');
};

const runFetch = async (inputUrl, options) => {
  const fetched = await fetchVideo(inputUrl, options);
  const transcriptFormat = parseTranscriptFormatOptions(options);
  const payload = {
    videoId: fetched.metadata.videoId,
    canonicalUrl: fetched.metadata.canonicalUrl,
    title: fetched.metadata.title,
    channel: fetched.metadata.channel,
    durationSeconds: fetched.metadata.durationSeconds,
    language: fetched.language,
    kind: fetched.kind,
    transcriptAvailable: fetched.transcriptAvailable,
    transcriptUnavailable: fetched.transcriptUnavailable,
    transcriptSegments: fetched.segments.length,
    transcriptText: fetched.transcriptAvailable
      ? transcriptLines(fetched.segments, transcriptFormat).join('\n\n')
      : undefined,
    timestampMode: transcriptFormat.timestampMode,
    chunkSeconds:
      transcriptFormat.timestampMode === 'chunk'
        ? transcriptFormat.chunkSeconds
        : undefined,
  };

  if (options.json) {
    print(payload, options);
  } else {
    print(
      humanPrefillResult({
        ...payload,
        resourceId: undefined,
        summarySlug: undefined,
      }),
      options,
    );
  }

  return fetched.transcriptAvailable ? okExit : transcriptUnavailableExit;
};

const runPrefill = async (inputUrl, options) => {
  const context = await preparePrefillContext(inputUrl, options);

  if (!context.fetched.transcriptAvailable) {
    const payload = prefillResultPayload({ context });
    print(options.json ? payload : humanPrefillResult(payload), options);
    return transcriptUnavailableExit;
  }

  const { transcriptPath, write } = await writeTranscript({ context, options });
  let draftBundle;

  if (!options['no-draft']) {
    if (options['dry-run']) {
      const resources = await readJson(resourcesPath);
      const existingResource = resources.some(
        (resource) => Number(resource.id) === Number(context.resourceId),
      );
      const resourceDraftFilename = existingResource
        ? 'resource-reference.json'
        : 'resource.json';
      draftBundle = {
        draftDir: path.join(draftsDir, context.summarySlug),
        files: [resourceDraftFilename, 'summary.md', 'provenance.json'],
      };
    } else {
      draftBundle = await makeDraftBundle({
        title: context.title,
        resourceId: context.resourceId,
        summarySlug: context.summarySlug,
        sourceUrl: context.fetched.metadata.canonicalUrl,
        videoId: context.fetched.metadata.videoId,
        metadata: context.fetched.metadata,
        transcriptPath,
        language: context.fetched.language,
        kind: context.fetched.kind,
        series: context.series,
        episode: context.episode,
        date: context.date,
        source: context.source,
        tags: context.tags,
        generatedAt: context.generatedAt,
        force: Boolean(options.force),
        dryRun: Boolean(options['dry-run']),
      });
    }
  }

  const payload = prefillResultPayload({
    context,
    transcriptPath,
    draftBundle,
    write,
  });
  print(options.json ? payload : humanPrefillResult(payload), options);
  return okExit;
};

const targetKey = ({ summarySlug, url }) =>
  `${summarySlug}:${extractVideoId(url)}`;

const discoverBackfillTargets = async () => {
  const [resources, summaries] = await Promise.all([
    readJson(resourcesPath),
    readSummaries(),
  ]);
  const resourcesById = new Map(
    resources.map((resource) => [Number(resource.id), resource]),
  );
  const summariesByResourceId = new Map();
  const targets = [];
  const skipped = [];
  const seen = new Set();

  for (const summary of summaries) {
    if (summary.watchUrls.length === 0) {
      skipped.push({
        kind: 'summary',
        summarySlug: summary.summarySlug,
        reason: summary.hasExternalLivestream
          ? 'No concrete YouTube watch?v= URL; summary points to an X/Twitter livestream.'
          : 'No concrete YouTube watch?v= URL in summary.',
      });
      continue;
    }

    if (!summary.frontmatter.series) {
      summariesByResourceId.set(
        Number(summary.frontmatter.resourceId),
        summary,
      );
    }

    const resource = resourcesById.get(Number(summary.frontmatter.resourceId));
    for (const url of summary.watchUrls) {
      const target = {
        url,
        summarySlug: summary.summarySlug,
        title: summary.frontmatter.title,
        resourceId: Number(summary.frontmatter.resourceId),
        series: summary.frontmatter.series,
        episode: summary.frontmatter.episode,
        date: summary.frontmatter.date,
        source: resource?.source,
      };
      const key = targetKey(target);
      if (!seen.has(key)) {
        targets.push(target);
        seen.add(key);
      }
    }
  }

  for (const resource of resources) {
    const resourceUrl = resource.url;
    if (!resourceUrl?.includes('youtube.com/watch')) {
      skipped.push({
        kind: 'resource',
        resourceId: resource.id,
        title: resource.title,
        url: resourceUrl,
        reason: 'Resource is not a concrete YouTube watch?v= URL.',
      });
      continue;
    }

    const summary = summariesByResourceId.get(Number(resource.id));
    const summarySlug = summary?.summarySlug ?? slugify(resource.title);
    const target = {
      url: resourceUrl,
      summarySlug,
      title: summary?.frontmatter.title ?? resource.title,
      resourceId: Number(resource.id),
      date: summary?.frontmatter.date ?? resource.date,
      source: resource.source,
    };
    const key = targetKey(target);
    if (!seen.has(key)) {
      targets.push(target);
      seen.add(key);
    }
  }

  targets.sort((left, right) =>
    left.summarySlug.localeCompare(right.summarySlug),
  );
  return { targets, skipped };
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const runBackfill = async (options) => {
  const { targets, skipped } = await discoverBackfillTargets();
  const delayMs = Number(options['delay-ms'] ?? 500);
  const results = [];

  if (options['dry-run']) {
    const payload = {
      targets,
      skipped,
      counts: { targets: targets.length, skipped: skipped.length },
    };
    print(options.json ? payload : humanBackfillResult(payload), options);
    return okExit;
  }

  for (const [index, target] of targets.entries()) {
    const transcriptPath = safeContentPath(transcriptsDir, target.summarySlug);
    if ((await fileExists(transcriptPath)) && !options.force) {
      results.push({
        ...target,
        status: 'skipped-existing',
        transcriptPath: repoRelative(transcriptPath),
      });
      continue;
    }

    if (!options.json) {
      console.error(
        `Backfill ${index + 1}/${targets.length}: ${target.summarySlug}`,
      );
    }

    const context = {
      fetched: await fetchVideo(target.url, options),
      title: target.title,
      resourceId: target.resourceId,
      summarySlug: target.summarySlug,
      episode: target.episode,
      series: target.series,
      date: target.date,
      source: target.source,
      tags: parseTags(options.tags),
      generatedAt: new Date().toISOString(),
    };

    if (!context.fetched.transcriptAvailable) {
      results.push({
        ...target,
        status: 'failed',
        reason: context.fetched.transcriptUnavailable,
      });
    } else {
      try {
        const { write } = await writeTranscript({ context, options });
        results.push({
          ...target,
          status: 'written',
          transcriptPath: repoRelative(write.path),
          segments: context.fetched.segments.length,
          language: context.fetched.language,
          kind: context.fetched.kind,
        });
      } catch (error) {
        results.push({
          ...target,
          status: 'failed',
          reason: error.message,
        });
      }
    }

    if (delayMs > 0 && index < targets.length - 1) {
      await sleep(delayMs);
    }
  }

  const payload = {
    targets: results,
    skipped,
    counts: backfillCounts(results, skipped),
  };
  print(options.json ? payload : humanBackfillResult(payload), options);
  return results.some((result) => result.status === 'failed')
    ? transcriptUnavailableExit
    : okExit;
};

const backfillCounts = (results, skipped) => ({
  targets: results.length,
  written: results.filter((result) => result.status === 'written').length,
  skippedExisting: results.filter(
    (result) => result.status === 'skipped-existing',
  ).length,
  failed: results.filter((result) => result.status === 'failed').length,
  skippedNonConcrete: skipped.length,
});

const humanBackfillResult = ({ targets = [], skipped = [], counts }) => {
  const lines = [
    'Backfill complete:',
    `  Concrete YouTube targets: ${counts.targets}`,
    `  Written: ${counts.written ?? 0}`,
    `  Skipped existing: ${counts.skippedExisting ?? 0}`,
    `  Failed: ${counts.failed ?? 0}`,
    `  Skipped non-concrete audit entries: ${counts.skippedNonConcrete ?? counts.skipped ?? skipped.length}`,
  ];

  const failures = targets.filter((target) => target.status === 'failed');
  if (failures.length > 0) {
    lines.push('', 'Failures:');
    for (const failure of failures) {
      lines.push(
        `- ${failure.summarySlug} (${failure.url}): ${failure.reason}`,
      );
    }
  }

  return lines.join('\n');
};

const reviewRules = [
  {
    id: 'possible-agents-as-asians',
    label: 'Possible ASR substitution: agents → Asians',
    pattern: /\basians\b/gi,
    suggestion: 'Check whether this should be “agents”.',
  },
  {
    id: 'one-on-one-spacing',
    label: 'Missing hyphens/spaces',
    pattern: /\boneonone\b/gi,
    suggestion: 'Likely “one-on-one”.',
  },
  {
    id: 'windurf',
    label: 'Possible product-name typo',
    pattern: /\bwindurf\b/gi,
    suggestion: 'Likely “Windsurf”.',
  },
  {
    id: 'agentic-as-gentic',
    label: 'Possible ASR substitution',
    pattern: /\bgentic\b/gi,
    suggestion: 'Likely “agentic”.',
  },
  {
    id: 'opus-decimal',
    label: 'Possible model-name formatting',
    pattern: /\bopus\s+45\b/gi,
    suggestion: 'Check whether this should be “Opus 4.5”.',
  },
  {
    id: 'thorsten-name',
    label: 'Possible speaker-name typo',
    pattern: /\bthorston\b/gi,
    suggestion: 'Likely “Thorsten”.',
  },
  {
    id: 'redacted-or-inaudible-marker',
    label: 'Caption marker needs review',
    pattern: /\[\s*_{2,}\s*\]/gi,
    suggestion:
      'Check the audio; replace with the heard word or mark as inaudible.',
  },
  {
    id: 'noise-marker',
    label: 'Noise/music marker',
    pattern: /\[(music|laughter|applause)\]/gi,
    suggestion: 'Keep only if it helps interpret the discussion.',
  },
];

const timestampedLinePattern = /^\[(\d\d:\d\d:\d\d)\]\s*(.*)$/;

const stripFrontmatter = (content) =>
  content.replace(/^---\n[\s\S]*?\n---\n?/, '');

const transcriptBody = (content) => {
  const body = stripFrontmatter(content);
  const marker = body.match(/## Transcript\s*\n/i);

  if (!marker || marker.index === undefined) {
    return body.trim();
  }

  return body.slice(marker.index + marker[0].length).trim();
};

const reviewSlugFromTranscriptPath = (filePath) =>
  toPosixPath(path.relative(transcriptsDir, filePath)).replace(/\.md$/, '');

const resolveTranscriptPath = async (input) => {
  if (!input) {
    throw new Error('Missing transcript path or summary slug for review.');
  }

  const directPath = path.resolve(rootDir, input);
  if (
    directPath.startsWith(`${rootDir}${path.sep}`) &&
    (await fileExists(directPath))
  ) {
    return directPath;
  }

  return safeContentPath(transcriptsDir, input);
};

const escapeMarkdownTableCell = (value) =>
  String(value ?? '')
    .replace(/\|/g, '\\|')
    .replace(/\n/g, ' ');

const excerptForLine = (line, matchIndex, matchLength) => {
  const start = Math.max(0, matchIndex - 70);
  const end = Math.min(line.length, matchIndex + matchLength + 90);
  const prefix = start > 0 ? '…' : '';
  const suffix = end < line.length ? '…' : '';

  return `${prefix}${line.slice(start, end)}${suffix}`;
};

const collectReviewFindings = (content, maxFindings) => {
  const lines = content.split('\n');
  const findings = [];

  for (const [lineIndex, line] of lines.entries()) {
    for (const rule of reviewRules) {
      const pattern = new RegExp(rule.pattern.source, rule.pattern.flags);
      for (const match of line.matchAll(pattern)) {
        const timestampMatch = line.match(timestampedLinePattern);
        findings.push({
          ruleId: rule.id,
          label: rule.label,
          suggestion: rule.suggestion,
          lineNumber: lineIndex + 1,
          timestamp: timestampMatch?.[1],
          match: match[0],
          excerpt: excerptForLine(line, match.index ?? 0, match[0].length),
        });

        if (findings.length >= maxFindings) {
          return findings;
        }
      }
    }
  }

  return findings;
};

const transcriptBlocksFromContent = (content) => {
  const body = transcriptBody(content);
  const timestamped = body
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => timestampedLinePattern.test(line));

  if (timestamped.length > 0) {
    return timestamped;
  }

  return body
    .split(/\n{2,}/)
    .map((block) => cleanText(block))
    .filter(Boolean);
};

const renderReviewMarkdown = ({
  transcriptPath,
  summarySlug,
  frontmatter,
  findings,
  generatedAt,
  maxFindings,
  blockCount,
}) => {
  const transcriptRelative = repoRelative(transcriptPath);
  const title = frontmatter.title ?? summarySlug;
  const status = findings.length > 0 ? 'needs-review' : 'ready-for-skim';
  const findingRows = findings
    .map(
      (finding) =>
        `| ${finding.lineNumber} | ${finding.timestamp ?? '—'} | ${escapeMarkdownTableCell(finding.label)} | ${escapeMarkdownTableCell(finding.suggestion)} | ${escapeMarkdownTableCell(finding.excerpt)} |`,
    )
    .join('\n');
  const findingsSection =
    findings.length > 0
      ? `| Line | Time | Issue | Suggested check | Excerpt |\n| --- | --- | --- | --- | --- |\n${findingRows}`
      : 'No automated findings. Still skim the transcript before using it as source material.';
  const truncatedNote =
    findings.length >= maxFindings
      ? `\n\n> Automated findings were capped at ${maxFindings}; rerun with --max-findings for more.`
      : '';

  return `# Transcript Review: ${title}\n\nStatus: ${status}\nGenerated: ${generatedAt}\nTranscript: \`${transcriptRelative}\`\nSummary slug: \`${summarySlug}\`\nTranscript blocks: ${blockCount}\nAutomated findings: ${findings.length}${truncatedNote}\n\n## Automated findings\n\n${findingsSection}\n\n## Review workflow\n\n1. Open the transcript sidecar and this review packet together.\n2. For each automated finding, use the nearby timestamp as a coarse video anchor and verify against the audio when the correction is not obvious.\n3. Fix small ASR/caption issues in the transcript only when the intended words are clear: names, product/model casing, obvious substitutions, punctuation that changes meaning, and stray caption markers.\n4. Do not summarize, editorialize, or rewrite speaker meaning in the transcript. If uncertain, leave the original text and note it below.\n5. After edits, rerun this review command and then use the reviewed transcript for the summary draft.\n\n## Corrections log\n\n- [ ] Pending review.\n\n## Notes\n\n- Coarse timestamps are intentionally anchors, not caption-level timing.\n- Keep a raw-video/source check for any correction that changes meaning.\n`;
};

const reviewTranscriptFile = async (transcriptPath, options) => {
  const content = await readFile(transcriptPath, 'utf8');
  const frontmatter = parseFrontmatter(content);
  const summarySlug =
    frontmatter.summarySlug ?? reviewSlugFromTranscriptPath(transcriptPath);
  const reviewPath = path.join(
    transcriptReviewsDir,
    normalizeSummarySlug(summarySlug),
    'review.md',
  );
  const maxFindings = Number(options['max-findings'] ?? 200);
  const findings = collectReviewFindings(content, maxFindings);
  const blocks = transcriptBlocksFromContent(content);
  const generatedAt = new Date().toISOString();
  const markdown = renderReviewMarkdown({
    transcriptPath,
    summarySlug,
    frontmatter,
    findings,
    generatedAt,
    maxFindings,
    blockCount: blocks.length,
  });
  const write = await writeFileExclusive(reviewPath, markdown, {
    force: Boolean(options.force),
    dryRun: Boolean(options['dry-run']),
  });

  return {
    transcriptPath: repoRelative(transcriptPath),
    reviewPath: repoRelative(reviewPath),
    summarySlug,
    findings: findings.length,
    status: findings.length > 0 ? 'needs-review' : 'ready-for-skim',
    written: write.written,
    dryRun: write.dryRun,
  };
};

const runReview = async (input, options) => {
  const transcriptPaths = options.all
    ? await listMarkdownFiles(transcriptsDir)
    : [await resolveTranscriptPath(input)];
  const results = [];

  for (const transcriptPath of transcriptPaths) {
    results.push(await reviewTranscriptFile(transcriptPath, options));
  }

  if (options.json) {
    print({ results }, options);
  } else {
    print(
      [
        'Transcript review complete:',
        ...results.map(
          (result) =>
            `- ${result.summarySlug}: ${result.status}, ${result.findings} finding(s), ${result.reviewPath}`,
        ),
      ].join('\n'),
      options,
    );
  }

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

  if (command === 'fetch') {
    if (!positionals[0]) {
      fail('Missing YouTube URL for fetch.');
    }
    return runFetch(positionals[0], options);
  }

  if (command === 'prefill') {
    if (!positionals[0]) {
      fail('Missing YouTube URL for prefill.');
    }
    return runPrefill(positionals[0], options);
  }

  if (command === 'backfill') {
    return runBackfill(options);
  }

  if (command === 'review') {
    if (!positionals[0] && !options.all) {
      fail('Missing transcript path or summary slug for review.');
    }
    return runReview(positionals[0], options);
  }

  fail(`Unknown command: ${command}\n\n${usage}`);
};

main()
  .then((exitCode) => {
    process.exitCode = exitCode;
  })
  .catch((error) => {
    console.error(error.stack ?? error.message ?? String(error));
    process.exitCode = 1;
  });
