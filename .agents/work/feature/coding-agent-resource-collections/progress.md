# Progress: Coding-agent resource collections

Updated: 2026-08-09

## Current State

Tasks 1–5 are implemented and have passed initial automated and real-browser acceptance. Browser auditing found and remediated a skipped heading level and invalid closed-modal `aria-controls`; the affected route now has no axe violations or incomplete checks. Required independent review is next.

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
- Complete focused suite — `node --test .agents/scripts/public-content-guard.test.mjs src/data/resources/*.test.ts src/components/resources/summaryResolver.test.ts` passed all 17 tests.
- Complete content guard — `npm run content:guard` passed with 31 resources and 78 public summaries.
- Initial complete project checks — `npm run check` reported 0 diagnostics across 45 files; `npm run build` built 30 pages including All, 4 section routes, and 78 summary endpoints.
- Orb browser proof — `/resources`, All, workflows, agent systems, reliability, and teams/ecosystem rendered with counts 31/8/8/9/6; All is the first collection item; every resource route has exactly one active `aria-current="page"` link, a section-specific title/canonical URL, and a hydrated React island.
- Browser filtering — child-summary search `just copy him` resolved only the David Ondrej collection; Safety & permissions produced 6 of 31 on All and 1 of 8 on workflows; Clear filters restored all resources.
- Browser modal proof — standalone resource 37 loaded its summary; series resource 1 exposed 10 ordered episodes and loaded episode 2; curated resource 32 exposed 5 ordered selected videos and loaded the L8 selection. All observed summary API requests succeeded.
- Browser navigation/error proof — back/forward preserved All/workflows history; every affected internal resource link returned HTTP 200; final console contained only Vite/React development notices and `agent-browser errors` was empty.
- Accessibility remediation — axe on `main` reported 0 violations and 0 incomplete checks for `/resources` and, after remediation, All. `npm run check` and `npm run build` remained green after the fix.
- Visual proof — `.amp/in/artifacts/resource-collections-overview.png` captures Browse all followed by four collection cards; the Astro development toolbar was hidden before capture because it is not part of the site.

## Review

- Required independent implementation review: pending after Tasks 1–5 implementation and initial targeted verification.

## Commits

- `6b30962` — Add validated resource section taxonomy.
- `d8b1b79` — Make resource list accept route data.
- `1c9c271` — Add resource collection routes.
- `f665239` — Turn resources into collection overview.
- Browser accessibility remediation: pending commit.

## Unverified

- Required independent high-mode implementation review, any resulting remediation, final post-review verification, and release authorization remain pending.
