import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {
  fetchVideo,
  filterTranscriptSegmentsByRange,
  normalizeTranscriptRange,
  normalizeYoutubeUrl,
  renderTranscriptMarkdown,
  resolveContainedPath,
  safeContentPath,
  selectTranscriptLanguage,
  writeFileExclusive,
} from './lib/youtube-transcript-core.mjs';

test('normalizes supported YouTube video URLs and IDs', () => {
  const expected = {
    videoId: '8gg-oJr4dTY',
    canonicalUrl: 'https://www.youtube.com/watch?v=8gg-oJr4dTY',
  };

  assert.deepEqual(normalizeYoutubeUrl('8gg-oJr4dTY'), expected);
  assert.deepEqual(
    normalizeYoutubeUrl('https://youtu.be/8gg-oJr4dTY?t=10'),
    expected,
  );
  assert.deepEqual(
    normalizeYoutubeUrl(
      'https://www.youtube.com/watch?v=8gg-oJr4dTY&feature=shared',
    ),
    expected,
  );
});

test('selects caption cues that overlap a half-open source range', () => {
  const range = normalizeTranscriptRange({
    sourceStartSeconds: '10',
    sourceEndSeconds: '20',
    durationSeconds: 30,
  });
  const segments = [
    { text: 'ends at start', offset: 5, duration: 5 },
    { text: 'crosses start', offset: 9.5, duration: 1 },
    { text: 'starts at start', offset: 10, duration: 1 },
    { text: 'point inside', offset: 19.5, duration: 0 },
    { text: 'crosses end', offset: 19.5, duration: 1 },
    { text: 'starts at end', offset: 20, duration: 1 },
    { text: 'point at end', offset: 20, duration: 0 },
  ];

  assert.deepEqual(
    filterTranscriptSegmentsByRange(segments, range),
    segments.slice(1, 5),
  );
  assert.throws(
    () =>
      normalizeTranscriptRange({
        sourceStartSeconds: 10,
        sourceEndSeconds: undefined,
      }),
    /must be provided together/,
  );
  assert.throws(
    () =>
      normalizeTranscriptRange({
        sourceStartSeconds: 20,
        sourceEndSeconds: 10,
      }),
    /less than --end/,
  );
});

test('renders excerpt metadata while preserving absolute source timestamps', () => {
  const markdown = renderTranscriptMarkdown({
    title: 'Excerpt',
    summarySlug: 'coding-with-agents/excerpt',
    sourceUrl: 'https://www.youtube.com/watch?v=AbCdEfGhI12',
    videoId: 'AbCdEfGhI12',
    capturedAt: '2026-08-10T00:00:00.000Z',
    durationSeconds: 20000,
    sourceStartSeconds: 15626,
    sourceEndSeconds: 17077,
    segments: [{ text: 'Opening.', offset: 15625.8, duration: 2 }],
  });

  assert.match(markdown, /durationSeconds: 20000/);
  assert.match(markdown, /sourceStartSeconds: 15626/);
  assert.match(markdown, /sourceEndSeconds: 17077/);
  assert.match(markdown, /\[04:20:25\] Opening\./);
  assert.doesNotMatch(markdown, /\[00:00:00\]/);
});

test('keeps library and transcript paths inside their fixed roots', () => {
  const libraryRoot = path.join('/repo', 'src/content/youtube');
  const transcriptRoot = path.join('/repo', 'src/content/transcripts');

  assert.equal(
    resolveContainedPath(libraryRoot, 'videos/8gg-oJr4dTY/transcript.md'),
    path.join(libraryRoot, 'videos/8gg-oJr4dTY/transcript.md'),
  );
  assert.equal(
    safeContentPath(transcriptRoot, 'coding-with-agents/example'),
    path.join(transcriptRoot, 'coding-with-agents/example.md'),
  );

  for (const unsafePath of [
    '../escape.md',
    'videos/../../escape.md',
    '/tmp/escape.md',
    'C:\\tmp\\escape.md',
  ]) {
    assert.throws(() => resolveContainedPath(libraryRoot, unsafePath));
    assert.throws(() => resolveContainedPath(transcriptRoot, unsafePath));
  }
});

test('writes non-destructively unless force is explicit', async (t) => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'youtube-core-'));
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const target = resolveContainedPath(tempDir, 'videos/example/transcript.md');

  const firstWrite = await writeFileExclusive(target, 'first');
  assert.equal(firstWrite.written, true);
  await assert.rejects(
    writeFileExclusive(target, 'second'),
    /Refusing to overwrite existing file/,
  );
  assert.equal(await readFile(target, 'utf8'), 'first');

  const forcedWrite = await writeFileExclusive(target, 'second', {
    force: true,
  });
  assert.equal(forcedWrite.existed, true);
  assert.equal(await readFile(target, 'utf8'), 'second');
});

test('dry-run reports the target without writing it', async (t) => {
  const tempDir = await mkdtemp(path.join(os.tmpdir(), 'youtube-core-'));
  t.after(() => rm(tempDir, { recursive: true, force: true }));
  const target = resolveContainedPath(tempDir, 'videos/example/transcript.md');

  const result = await writeFileExclusive(target, 'not written', {
    dryRun: true,
  });

  assert.deepEqual(result, {
    path: target,
    written: false,
    existed: false,
    dryRun: true,
  });
  await assert.rejects(readFile(target, 'utf8'), { code: 'ENOENT' });
});

test('strict language selection prefers an exact match', () => {
  const selection = selectTranscriptLanguage(
    [
      {
        languageCode: 'it-IT',
        languageName: 'Italian (Italy)',
        isAutoGenerated: true,
      },
      {
        languageCode: 'it',
        languageName: 'Italian',
        isAutoGenerated: false,
      },
    ],
    'it',
    { strict: true },
  );

  assert.equal(selection.status, 'matched');
  assert.equal(selection.language, 'it');
  assert.equal(selection.kind, 'caption');
});

test('strict language selection accepts a regional variant', () => {
  const selection = selectTranscriptLanguage(
    [
      {
        languageCode: 'it-IT',
        languageName: 'Italian (Italy)',
        isAutoGenerated: true,
      },
    ],
    'it',
    { strict: true },
  );

  assert.equal(selection.status, 'matched');
  assert.equal(selection.language, 'it-IT');
  assert.equal(selection.kind, 'auto-generated');
});

test('strict language selection reports requested and available languages', () => {
  const selection = selectTranscriptLanguage(
    [
      {
        languageCode: 'en',
        languageName: 'English',
        isAutoGenerated: false,
      },
      {
        languageCode: 'fr',
        languageName: 'French',
        isAutoGenerated: true,
      },
    ],
    'it',
    { strict: true },
  );

  assert.deepEqual(selection, {
    status: 'unavailable',
    requestedLanguage: 'it',
    availableLanguages: ['en', 'fr'],
  });
});

test('surfaces typed language-list failures without changing existing failure fields', async () => {
  const error = new Error('captions disabled');
  error.name = 'YoutubeTranscriptDisabledError';

  const fetched = await fetchVideo('8gg-oJr4dTY', {
    lang: 'it',
    strictLanguage: true,
    listLanguagesImpl: async () => {
      throw error;
    },
    fetchFallbackMetadataImpl: async () => ({ title: 'Fixture video' }),
  });

  assert.deepEqual(fetched, {
    metadata: {
      videoId: '8gg-oJr4dTY',
      canonicalUrl: 'https://www.youtube.com/watch?v=8gg-oJr4dTY',
      title: 'Fixture video',
    },
    requestedLanguage: 'it',
    availableLanguages: [],
    transcriptErrorName: 'YoutubeTranscriptDisabledError',
    transcriptAvailable: false,
    transcriptUnavailable:
      'Could not list available transcript languages: YoutubeTranscriptDisabledError: captions disabled',
    segments: [],
  });
});

test('marks strict language mismatches distinctly without fetching captions', async () => {
  let transcriptFetches = 0;
  const fetched = await fetchVideo('8gg-oJr4dTY', {
    lang: 'it',
    strictLanguage: true,
    listLanguagesImpl: async () => [
      {
        languageCode: 'en',
        languageName: 'English',
        isAutoGenerated: false,
      },
    ],
    fetchTranscriptImpl: async () => {
      transcriptFetches += 1;
      return { segments: [] };
    },
    fetchFallbackMetadataImpl: async () => ({}),
  });

  assert.equal(transcriptFetches, 0);
  assert.equal(fetched.transcriptErrorName, 'LanguageUnavailable');
  assert.equal(fetched.requestedLanguage, 'it');
  assert.deepEqual(fetched.availableLanguages, ['en']);
  assert.equal(fetched.transcriptAvailable, false);
  assert.equal(
    fetched.transcriptUnavailable,
    'Requested transcript language "it" is unavailable. Available languages: en.',
  );
  assert.deepEqual(fetched.segments, []);
});

test('surfaces typed caption-fetch failures without changing their reason string', async () => {
  const error = new Error('video unavailable');
  error.name = 'YoutubeTranscriptVideoUnavailableError';
  const fetched = await fetchVideo('8gg-oJr4dTY', {
    lang: 'it',
    strictLanguage: true,
    listLanguagesImpl: async () => [
      {
        languageCode: 'it-IT',
        languageName: 'Italian',
        isAutoGenerated: true,
      },
    ],
    fetchTranscriptImpl: async () => {
      throw error;
    },
    fetchFallbackMetadataImpl: async () => ({ channel: 'Fixture channel' }),
  });

  assert.equal(
    fetched.transcriptErrorName,
    'YoutubeTranscriptVideoUnavailableError',
  );
  assert.equal(
    fetched.transcriptUnavailable,
    'YoutubeTranscriptVideoUnavailableError: video unavailable',
  );
  assert.equal(fetched.language, 'it-IT');
  assert.equal(fetched.kind, 'auto-generated');
  assert.equal(fetched.transcriptAvailable, false);
  assert.deepEqual(fetched.segments, []);
});
