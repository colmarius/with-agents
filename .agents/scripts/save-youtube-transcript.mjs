#!/usr/bin/env node
import path from 'node:path';
import {
  chunkSeconds,
  cleanText,
  fetchVideo,
  filterTranscriptSegmentsByRange,
  normalizeSummarySlug,
  normalizeTranscriptRange,
  renderTranscriptMarkdown,
  repoRelative,
  rootDir,
  safeContentPath,
  slugify,
  transcriptLines,
  writeFileExclusive,
} from './lib/youtube-transcript-core.mjs';

const transcriptsDir = path.join(rootDir, 'src/content/transcripts');
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
  --start <seconds>      Inclusive excerpt start on the source video timeline.
                         Must be provided with --end.
  --end <seconds>        Exclusive excerpt end on the source video timeline.
                         Must be provided with --start.
  --dry-run              Fetch and report paths without writing files.
  --force                Overwrite an existing transcript file, including any
                         manual transcript fixes.
  --json                 Print machine-readable JSON.
  --help                 Show this help.

Notes:
  This script uses youtube-transcript-plus, which relies on unofficial YouTube
  transcript APIs. YouTube can change those internals; failures are reported as
  transcriptUnavailable reasons instead of producing empty transcripts.

  Transcript bodies use coarse ${chunkSeconds}-second timestamped chunks. The
  timestamps are source anchors for later transcript checks and summaries, not
  caption-level timing.

  Regeneration is mechanical source capture. If a transcript needs typo/name
  cleanup, run the final regeneration first, then edit the saved sidecar by
  hand. A future --force run will replace those manual edits.
`;

const commandNames = new Set(['fetch', 'help', 'save']);
const booleanOptions = new Set(['dry-run', 'force', 'help', 'json']);
const valueOptions = new Set([
  'channel',
  'end',
  'episode',
  'lang',
  'series',
  'source',
  'start',
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
  const sourceRange = normalizeTranscriptRange({
    sourceStartSeconds: options.start,
    sourceEndSeconds: options.end,
    durationSeconds: metadata.durationSeconds,
  });
  const selectedSegments = fetched.transcriptAvailable
    ? filterTranscriptSegmentsByRange(fetched.segments, sourceRange)
    : [];
  const transcriptAvailable =
    fetched.transcriptAvailable && selectedSegments.length > 0;
  const transcriptUnavailable =
    fetched.transcriptUnavailable ??
    (fetched.transcriptAvailable && selectedSegments.length === 0
      ? `Transcript has no caption segments in [${sourceRange.sourceStartSeconds}, ${sourceRange.sourceEndSeconds}).`
      : undefined);

  return {
    fetched,
    title,
    summarySlug,
    episode,
    series: options.series,
    channel: channel || undefined,
    capturedAt: new Date().toISOString(),
    sourceRange,
    selectedSegments,
    transcriptAvailable,
    transcriptUnavailable,
  };
};

const payloadForContext = ({ context, transcriptPath, write }) => {
  const { fetched, title, summarySlug, capturedAt } = context;
  const blocks = context.transcriptAvailable
    ? transcriptLines(context.selectedSegments).length
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
    sourceStartSeconds: context.sourceRange?.sourceStartSeconds,
    sourceEndSeconds: context.sourceRange?.sourceEndSeconds,
    transcriptAvailable: context.transcriptAvailable,
    transcriptUnavailable: context.transcriptUnavailable,
    transcriptSegments: context.selectedSegments.length,
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

  if (payload.sourceStartSeconds !== undefined) {
    lines.push(
      `- Source range: [${payload.sourceStartSeconds}, ${payload.sourceEndSeconds}) seconds`,
    );
  }

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
  return context.transcriptAvailable ? okExit : transcriptUnavailableExit;
};

const runSave = async (inputUrl, options) => {
  const context = await prepareContext(inputUrl, options);
  const transcriptPath = safeContentPath(transcriptsDir, context.summarySlug);

  if (!context.transcriptAvailable) {
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
    sourceStartSeconds: context.sourceRange?.sourceStartSeconds,
    sourceEndSeconds: context.sourceRange?.sourceEndSeconds,
    segments: context.selectedSegments,
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
