import assert from 'node:assert/strict';
import test from 'node:test';
import { validateCodingResources } from './coding-with-agents.ts';

const validResource = {
  id: 1,
  title: 'Resource',
  url: 'https://example.com/resource',
  description: 'Description',
  type: 'video',
  source: 'Source',
  date: '2026-08-09',
  topics: ['tools-harnesses'],
  primarySection: 'workflows',
};

test('catalog validation rejects missing and unknown primary sections', () => {
  assert.deepEqual(validateCodingResources([validResource]), [validResource]);
  assert.throws(
    () =>
      validateCodingResources([
        { ...validResource, primarySection: undefined },
      ]),
    /resource \$\[0\] has invalid primarySection undefined/,
  );
  assert.throws(
    () =>
      validateCodingResources([
        { ...validResource, primarySection: 'unknown' },
      ]),
    /resource \$\[0\] has invalid primarySection "unknown"/,
  );
});

test('catalog validation rejects incomplete and invalid resource shapes', () => {
  const invalidResources = [
    [{ ...validResource, id: 0 }, /invalid id 0/],
    [{ ...validResource, title: undefined }, /invalid title undefined/],
    [{ ...validResource, duration: 10 }, /invalid duration 10/],
    [{ ...validResource, type: 'book' }, /invalid type "book"/],
    [{ ...validResource, date: '2026-02-30' }, /invalid date "2026-02-30"/],
    [{ ...validResource, topics: ['unknown'] }, /invalid topics \["unknown"\]/],
  ] as const;

  for (const [resource, expectedError] of invalidResources) {
    assert.throws(() => validateCodingResources([resource]), expectedError);
  }
});
