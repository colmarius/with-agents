# Progress: Coding-agent resource collections

Updated: 2026-08-09

## Current State

Tasks 1–5 are implemented, independently reviewed, remediated, rebased onto `origin/main` at `dead752`, and fully verified. The work item is complete and ready for closeout and shipment to `origin/main`.

## Verification Evidence

- Rebase — `git fetch origin main` resolved `origin/main` to `dead752e637d18eb0988068a9309fcd99ea1e125`; `git rebase origin/main` replayed all nine work-item and implementation commits without conflicts.
- Dependencies — `npm ci` installed the rebased lockfile, audited 690 packages, and reported 0 vulnerabilities.
- Final formatting — `npm run lint:fix` checked 256 files and fixed only trailing Markdown hard-break whitespace in this work item's research snapshot; `git diff --check` then passed.
- Complete Node suite — one `node --test` invocation covering all six repository test files passed 75 of 75 tests with 0 failures, skips, cancellations, or todos. This includes public-content guard, YouTube library/audit/transcript contracts, complete catalog validation and 8/8/9/6 distribution, and summary resolution.
- Public content — `npm run content:guard` passed with 294 videos, 8 playlists, 103 public references, 31 resources, and 78 public summaries. The pre-existing duplicate-manifest notice for `antirez-ai-concepts` remains informational.
- Type/content integration — `npm run check` completed with 0 errors, warnings, or hints across 46 files.
- Static output — `npm run build` completed successfully on the rebased PWA-enabled tree: 30 pages built and 167 files precached. The build generated the All route, exactly four registered section routes, and all 78 summary endpoints. Direct assertions over `dist` observed 31/8/8/9/6 cards, one active navigation item, and the expected canonical URL on every resource route.
- Inbound-link inspection — the homepage, `PostLayout`, and `agentic-coding-2026.md` still point to `/resources/coding-with-agents` unchanged.
- Orb Proof Loop — after restarting the post-build service, `amp orb services ensure` reported the supervised `web` service healthy. A fresh browser pass on the rebased tree covered `/resources`, `/resources/coding-with-agents`, and all four nested routes.
- Overview and navigation — `/resources` rendered Browse all first with 31 resources, followed by the four collection cards with 8/8/9/6 manifest-derived counts. All five collection destinations returned HTTP 200. All is the first collection-navigation item; every resource route exposed exactly one `aria-current="page"`, its expected H1/title/canonical, and 31/8/8/9/6 hydrated resource cards. An unknown section returned HTTP 404.
- Search and topics — child-summary search `just copy him` returned only the David Ondrej collection (1 of 31); Safety & permissions returned 6 of 31 on All and 1 of 8 on workflows; clearing filters restored 31 resources.
- Summary resolution — standalone resource 37 loaded the OpenAI–Hugging Face summary with no listbox; series resource 1 exposed 10 ordered episodes and switched from Feedback Loops to No Token Limits; curated resource 32 exposed 5 selected videos and loaded the L8 Principal selection. No modal reported a summary-load error.
- Browser history and errors — ordinary-link navigation from All to workflows survived back and forward navigation. `agent-browser errors --json` returned an empty error list; console inspection found 42 debug and 18 informational development messages with 0 warnings or errors.
- Accessibility — axe-core 4.12.1 audits scoped to `main` reported 0 violations and 0 incomplete checks on `/resources`, All, and each of the four section routes. Heading order is H1 → hidden Resources H2 → card H3, and closed modals expose no dangling `aria-controls` references.
- Visual proof — `.amp/in/artifacts/resource-collections-overview.png` captures Browse all followed by the four collection cards, with the development toolbar hidden because it is not part of the site.

## Review

- [Required high-mode independent review](https://ampcode.com/threads/T-019fe808-d963-776e-aa72-ca422b476af6) completed against a binary-safe patch from remote baseline `e47f64e6864e0a9f0a32f8678e3d0342ac2d352f`. The reviewer made no edits, commits, pushes, PRs, or deployments.
- Recommendation: **Ready after fixes**. Blockers: none. High findings: none. Low findings: none.
- Medium finding: the production `validateCodingResources(unknown)` boundary validated only `primarySection` before asserting the full `CodingResource` type, and the independent public guard allowed a missing required date.
- Resolution: accepted and fixed in rebased commit `3ee882f`. The production boundary now checks positive IDs, required and optional strings, approved resource types/topics/sections, required real dates, and arrays before returning `CodingResource[]`; shared enum values now derive the static unions; focused negative tests cover incomplete and invalid shapes; the independent guard rejects missing dates. The complete automated and browser suites were rerun after remediation and again after rebasing.
- Reviewer acceptance gaps were also dispositioned: final verification replayed browser history and all affected-route accessibility checks, and the local visual artifact remains available. No new component test was added for browser interactions because the reviewer explicitly judged the focused contract tests plus real-browser acceptance adequate after the boundary fix.
- No actionable finding was rejected or deferred.

## Commits

- `5ae2b65` — Plan coding-agent resource collections.
- `1da7754` — Refine resource collection plan after review.
- `d02b9c4` — Add validated resource section taxonomy.
- `3a45abc` — Make resource list accept route data.
- `ed1c94a` — Add resource collection routes.
- `9e6022d` — Turn resources into collection overview.
- `f1a9c80` — Fix resource list accessibility.
- `3ee882f` — Strengthen resource catalog validation.
- `6cfd826` — Prepare resource collections for release.

## Unverified

- None.
