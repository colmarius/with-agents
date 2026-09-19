import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const summaryRoot = 'src/content/summaries';
const clock = /^(?:[0-5]\d:[0-5]\d|[1-9]\d*:[0-5]\d:[0-5]\d)$/;
const timestampLink = String.raw`\[[\d:]+(?:–[\d:]+)?\]\([^\s()]+\)`;
const parenthesizedTimestampGroup = new RegExp(
  String.raw`\((${timestampLink}(?:,\s*${timestampLink})*)\)`,
  'g',
);
const hasParenthesizedTimestampGroup = new RegExp(
  parenthesizedTimestampGroup.source,
);
const seconds = (value) =>
  value.split(':').reduce((total, part) => total * 60 + Number(part), 0);

export const normalizeSummaryTimestampStyle = (contents) => {
  let fence;
  return contents
    .split('\n')
    .map((rawLine) => {
      const marker = rawLine.match(/^ {0,3}(`{3,}|~{3,})/)?.[1];
      if (marker && !fence) {
        fence = marker;
        return rawLine;
      }
      if (fence) {
        if (marker?.[0] === fence[0] && marker.length >= fence.length)
          fence = undefined;
        return rawLine;
      }
      const inlineCode = [...rawLine.matchAll(/(`+).*?\1/g)].map((match) => [
        match.index,
        match.index + match[0].length,
      ]);
      return rawLine.replace(
        parenthesizedTimestampGroup,
        (group, links, offset) =>
          inlineCode.some(([start, end]) => offset >= start && offset < end)
            ? group
            : links,
      );
    })
    .join('\n');
};

export const validateSummaryTimestamps = (contents) => {
  const errors = [];
  const frontmatter = contents.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  const declaration = frontmatter?.[1].match(/^videoId:[^\r\n]*/m)?.[0];
  const scalar = declaration?.match(
    /^videoId:[ \t]*(?:"([\w-]{11})"|'([\w-]{11})'|([\w-]{11}))(?:[ \t]+#.*)?[ \t]*$/,
  );
  const videoId = scalar?.[1] ?? scalar?.[2] ?? scalar?.[3];
  if (declaration && !videoId) errors.push('invalid videoId declaration');
  const body = contents.slice(frontmatter?.[0].length ?? 0);
  const offset = frontmatter?.[0].split('\n').length - 1 || 0;
  let fence;
  for (const [index, rawLine] of body.split('\n').entries()) {
    const marker = rawLine.match(/^ {0,3}(`{3,}|~{3,})/)?.[1];
    if (marker && !fence) {
      fence = marker;
      continue;
    }
    if (fence) {
      if (marker?.[0] === fence[0] && marker.length >= fence.length)
        fence = undefined;
      continue;
    }
    const line = rawLine.replace(/(`+).*?\1/g, '');
    const report = (message) =>
      errors.push(`line ${index + offset + 1}: ${message}`);
    if (/\[[\d:]+\]\([^)]*\)\s*[-–—]\s*\[\d+:/.test(line)) {
      report('combine range endpoints into one timestamp link');
    }
    if (hasParenthesizedTimestampGroup.test(line)) {
      report('timestamp links must not be wrapped in parentheses');
    }
    const remaining = line.replace(
      /\[([^\]\n]+)\]\(([^\s)]+)\)/g,
      (_link, label, href) => {
        if (!/\d+:\d+/.test(label)) return '';
        const times = label.split('–');
        if (times.length > 2 || !times.every((time) => clock.test(time))) {
          report(`noncanonical timestamp label: ${label}`);
          return '';
        }
        const [start, end] = times.map(seconds);
        if (end !== undefined && end <= start) {
          report(
            `range must end after its start (use one timestamp for a point): ${label}`,
          );
        }
        let url;
        try {
          url = new URL(href);
        } catch {
          report(`invalid timestamp URL: ${href}`);
          return '';
        }
        if (url.hostname === 'www.youtube.com') {
          const id = url.searchParams.get('v');
          if (
            !/^[\w-]{11}$/.test(id ?? '') ||
            href !== `https://www.youtube.com/watch?v=${id}&t=${start}s`
          ) {
            report(
              `YouTube URL must use watch?v=VIDEO_ID&t=${start}s: ${href}`,
            );
          }
          if (videoId && id !== videoId)
            report(
              `timestamp links to ${id}, but summary videoId is ${videoId}`,
            );
        } else if (url.hostname === 'talkingpostgres.com') {
          const seek = url.hash.match(/^#t=(\d+)h(\d+)m(\d+)s$/);
          if (
            url.protocol !== 'https:' ||
            !/^\/episodes\/[^/]+\/transcript$/.test(url.pathname) ||
            !seek ||
            Number(seek[1]) * 3600 + Number(seek[2]) * 60 + Number(seek[3]) !==
              start
          ) {
            report(
              `publisher timestamp must seek to ${start} seconds: ${href}`,
            );
          }
        } else {
          report(
            `unsupported timestamp source; verify its seek contract and extend the validator: ${href}`,
          );
        }
        return '';
      },
    );
    if (
      /\[\d+:\d+|(?<![\w.:])\d+:\d{2}(?::\d{2})?(?![\d:])/.test(
        remaining.replace(/https?:\/\/\S+/g, ''),
      )
    )
      report('timestamp must be a single linked point or range');
  }
  return errors;
};

export const checkSummaryFiles = (files) =>
  files.flatMap((file) =>
    validateSummaryTimestamps(readFileSync(file, 'utf8')).map(
      (error) => `${file}:${error}`,
    ),
  );

export const allSummaryFiles = () =>
  readdirSync(summaryRoot, { recursive: true })
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(summaryRoot, file));

if (
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
) {
  const args = process.argv.slice(2);
  const fix = args.includes('--fix');
  const requestedFiles = args.filter((arg) => arg !== '--fix');
  const files = requestedFiles.length ? requestedFiles : allSummaryFiles();
  if (fix) {
    for (const file of files) {
      const contents = readFileSync(file, 'utf8');
      const normalized = normalizeSummaryTimestampStyle(contents);
      if (normalized !== contents) writeFileSync(file, normalized);
    }
  }
  const errors = checkSummaryFiles(files);
  if (errors.length) {
    console.error(errors.join('\n'));
    process.exitCode = 1;
  } else {
    console.log(
      `Summary timestamps ${fix ? 'normalized and ' : ''}passed: ${files.length} files.`,
    );
  }
}
