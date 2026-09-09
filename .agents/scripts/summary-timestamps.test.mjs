import assert from 'node:assert/strict';
import test from 'node:test';
import {
  allSummaryFiles,
  checkSummaryFiles,
  validateSummaryTimestamps,
} from './summary-timestamps.mjs';

const cite = (label, time = '3374', id = '9UAxrdcDjjU') =>
  `[${label}](https://www.youtube.com/watch?v=${id}&t=${time}s)`;

test('accepts points, zero, hour boundaries, and separate supporting ranges', () => {
  assert.deepEqual(
    validateSummaryTimestamps(
      [
        cite('00:00', '0'),
        cite('01:03', '63'),
        cite('56:14–1:03:18'),
        `${cite('1:04:05–1:07:55', '3845')} and ${cite('17:49–25:32', '1069')}`,
        `${cite('10:04', '604')} onward`,
      ].join('\n'),
    ),
    [],
  );
});

test('rejects bare, split, noncanonical, backwards, and empty ranges', () => {
  for (const value of [
    '[00:01:03]-[00:04:15]',
    `${cite('01:03', '63')}–${cite('04:15', '255')}`,
    'At 01:03',
    '[01:03–04:15]',
    cite('00:56:14'),
    cite('01:03:18'),
    cite('1:3:18'),
    cite('01:3', '999'),
    cite('56:60'),
    cite('56:14-57:12'),
    cite('56:14 onward'),
    cite('56:14–55:20'),
    cite('56:14–56:14'),
  ]) {
    assert.ok(validateSummaryTimestamps(value).length, value);
  }
});

test('rejects wrong seek times, URL forms, and declared video identities', () => {
  for (const value of [
    cite('56:14', '3375'),
    cite('56:14', '3374', 'short'),
    '[56:14](https://youtu.be/9UAxrdcDjjU?t=3374)',
    `---\nvideoId: abcdefghijk\n---\n${cite('56:14')}`,
    '[56:14](https://example.com/#3374)',
  ]) {
    assert.ok(validateSummaryTimestamps(value).length, value);
  }
});

test('validates publisher seek fragments without converting to a different recording', () => {
  const url =
    'https://talkingpostgres.com/episodes/how-ai-is-changing-software-development-with-simon-willison/transcript#t=1h2m5s';
  assert.deepEqual(validateSummaryTimestamps(`[1:02:05–1:04:07](${url})`), []);
  assert.ok(validateSummaryTimestamps(`[1:02:06](${url})`).length);
});

test('accepts YAML whitespace but never silently ignores a malformed videoId', () => {
  for (const value of [
    '  "9UAxrdcDjjU"',
    "\t'9UAxrdcDjjU' # source",
    '  9UAxrdcDjjU',
    ' 9UAxrdcDjjU # source',
  ]) {
    assert.deepEqual(
      validateSummaryTimestamps(`---\nvideoId:${value}\n---\n${cite('56:14')}`),
      [],
    );
    assert.ok(
      validateSummaryTimestamps(
        `---\nvideoId:${value}\n---\n${cite('56:14', '3374', 'abcdefghijk')}`,
      ).length,
    );
  }
  assert.ok(
    validateSummaryTimestamps(
      `---\nvideoId: "9UAxrdcDjjU-wrong"\n---\n${cite('56:14')}`,
    ).length,
  );
  assert.ok(
    validateSummaryTimestamps(
      `---\nvideoId: 9UAxrdcDjjU#wrong\n---\n${cite('56:14')}`,
    ).length,
  );
});

test('ignores technical literals and ordinary link destinations, not malformed citations', () => {
  assert.deepEqual(
    validateSummaryTimestamps(
      [
        'Connect to `127.0.0.1:8080` or 127.0.0.1:8080.',
        'A 5:1 ratio of planning to implementation.',
        '[local endpoint](http://127.0.0.1:8080) and <http://127.0.0.1:8080>.',
        '```text',
        '[01:3]',
        '```',
      ].join('\n'),
    ),
    [],
  );
  assert.ok(validateSummaryTimestamps('```\nexample\n```\n[01:3]').length);
});

test('reports source line numbers and permits summaries without timestamps', () => {
  assert.deepEqual(
    validateSummaryTimestamps('---\ntitle: Test\n---\n\n[01:03]'),
    ['line 5: timestamp must be a single linked point or range'],
  );
  assert.deepEqual(
    validateSummaryTimestamps('Read [the source](https://example.com).'),
    [],
  );
});

test('all public summary timestamps follow the citation contract', () => {
  assert.deepEqual(checkSummaryFiles(allSummaryFiles()), []);
});
