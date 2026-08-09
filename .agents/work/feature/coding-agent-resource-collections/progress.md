# Progress: Coding-agent resource collections

Updated: 2026-08-09

## Current State

Tasks 1–4 implementation is complete. The React list receives typed route data, the global summary manifest remains available on every route, the registry generates only the four approved section pages plus accessible collection navigation, and `/resources` presents Browse all before four count-derived collection cards. Browser acceptance remains pending before independent review.

## Verification Evidence

- `node --test src/data/resources/coding-with-agents.test.ts` — 2 tests passed; observed 31 resources split 8 workflows, 8 agent systems, 9 reliability, and 6 teams/ecosystem, with missing and unknown boundary values rejected.
- `node --test .agents/scripts/public-content-guard.test.mjs` — 13 tests passed, including independent missing and unknown `primarySection` rejection.
- `npm run content:guard` — passed with 31 resources and 78 public summaries.
- `npm run lint:fix` — checked 252 files and formatted the Task 1 changes.
- `npm run check` — 44 files checked with 0 errors, warnings, or hints after the Task 2 data-flow change.
- `npm run lint:fix` — checked 253 files and formatted the Task 2 changes.
- `npm run check` — 45 files checked with 0 errors, warnings, or hints after adding the section route.
- `npm run build` — built all four nested section routes, the All route, and all 78 summary API routes; generated section counts are 8/8/9/6 with section-specific canonical URLs, one `aria-current="page"` link per route, and no unregistered route output.
- `npm run lint:fix` — checked 254 files and formatted the Task 3 changes.
- `npm run check` — 45 files checked with 0 errors, warnings, or hints after the overview change.
- `npm run build` — built 30 pages after the overview change; generated `/resources` places Browse all before the four section links and renders manifest-derived 31/8/8/9/6 counts without unsupported article copy.
- Inbound-link inspection — homepage, `PostLayout`, and `agentic-coding-2026.md` still link to `/resources/coding-with-agents` unchanged.

## Review

- Required independent implementation review: pending after Tasks 1–5 implementation and initial targeted verification.

## Commits

- `6b30962` — Add validated resource section taxonomy.
- `d8b1b79` — Make resource list accept route data.
- `1c9c271` — Add resource collection routes.
- Task 4 implementation: pending commit.

## Unverified

- Tasks 2–4 browser acceptance, Task 5 complete checks, independent review, remediation, and final release verification remain pending.
