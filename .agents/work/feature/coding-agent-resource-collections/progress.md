# Progress: Coding-agent resource collections

Updated: 2026-08-09

## Current State

Task 1 is implemented and verified. The canonical catalog now has one validated primary section per resource, the shared type reflects the real catalog, and the public content guard independently enforces section membership. Task 2 is next.

## Verification Evidence

- `node --test src/data/resources/coding-with-agents.test.ts` — 2 tests passed; observed 31 resources split 8 workflows, 8 agent systems, 9 reliability, and 6 teams/ecosystem, with missing and unknown boundary values rejected.
- `node --test .agents/scripts/public-content-guard.test.mjs` — 13 tests passed, including independent missing and unknown `primarySection` rejection.
- `npm run content:guard` — passed with 31 resources and 78 public summaries.
- `npm run lint:fix` — checked 252 files and formatted the Task 1 changes.

## Review

- Required independent implementation review: pending after Tasks 1–5 implementation and initial targeted verification.

## Commits

- Task 1 implementation: pending commit.

## Unverified

- Tasks 2–5, complete project checks, production build, and browser proof remain pending.
