import assert from 'node:assert/strict';
import test from 'node:test';
import {
  codingResources,
  validateCodingResources,
} from './coding-with-agents.ts';
import { resourceSections } from './sections.ts';

test('catalog resources have the approved primary section distribution', () => {
  const counts = Object.fromEntries(
    resourceSections.map((section) => [
      section.key,
      codingResources.filter(
        (resource) => resource.primarySection === section.key,
      ).length,
    ]),
  );

  assert.equal(codingResources.length, 31);
  assert.deepEqual(counts, {
    workflows: 8,
    'agent-systems': 8,
    reliability: 9,
    'teams-ecosystem': 6,
  });
});

test('catalog validation rejects missing and unknown primary sections', () => {
  assert.throws(
    () => validateCodingResources([{ id: 1 }]),
    /resource \$\[0\] has invalid primarySection undefined/,
  );
  assert.throws(
    () => validateCodingResources([{ id: 1, primarySection: 'unknown' }]),
    /resource \$\[0\] has invalid primarySection "unknown"/,
  );
});
