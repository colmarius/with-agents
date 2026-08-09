# Progress: Coding-agent resource collections

Updated: 2026-08-09

## Current State

Task 1 is implemented and verified. Task 2 implementation is complete: the React list now receives typed route data, retains the global summary manifest, and no longer duplicates the resource type; browser acceptance remains pending. Task 3 is next.

## Verification Evidence

- `node --test src/data/resources/coding-with-agents.test.ts` — 2 tests passed; observed 31 resources split 8 workflows, 8 agent systems, 9 reliability, and 6 teams/ecosystem, with missing and unknown boundary values rejected.
- `node --test .agents/scripts/public-content-guard.test.mjs` — 13 tests passed, including independent missing and unknown `primarySection` rejection.
- `npm run content:guard` — passed with 31 resources and 78 public summaries.
- `npm run lint:fix` — checked 252 files and formatted the Task 1 changes.
- `npm run check` — 44 files checked with 0 errors, warnings, or hints after the Task 2 data-flow change.
- `npm run lint:fix` — checked 253 files and formatted the Task 2 changes.

## Review

- Required independent implementation review: pending after Tasks 1–5 implementation and initial targeted verification.

## Commits

- `6b30962` — Add validated resource section taxonomy.
- Task 2 implementation: pending commit.

## Unverified

- Task 2 browser acceptance, Tasks 3–5, complete project checks, production build, and browser proof remain pending.
