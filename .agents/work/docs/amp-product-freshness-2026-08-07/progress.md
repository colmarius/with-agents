# Progress

## 2026-08-07 — Freshness audit and initial article refresh

- Freshly fetched the Amp Chronicle, Manual, Orbs manual, Plugin API, Models page, and Pricing page.
- Read all three Chronicle items published after the prior 2026-07-31 sweep.
- Classified Portals as `incorporate`, the Orbs field report as `incorporate with an explicit evidence boundary`, and Attach Anything as `research-only`.
- Identified a stale public claim: durable plugin webhooks are now first-class, not experimental.
- Initial article word counts before this refresh:
  - `amp-factory-era-case-study.md`: 2,310 words
  - `agentic-coding-2026.md`: 2,136 words
- Article word counts after the initial bounded freshness refresh:
  - `amp-factory-era-case-study.md`: 2,433 words
  - `agentic-coding-2026.md`: 2,188 words
- Verification passed:
  - `npm run lint:fix` — 216 files checked, no fixes needed.
  - `npm run check` — 0 errors, warnings, or hints.
  - `npm run build` — 26 pages built successfully.
  - `npm run content:guard` — passed; the existing duplicate-manifest notice for `8gg-oJr4dTY` remains informational.
  - `git diff --check` — clean.
- The initial refresh intentionally added 175 words across the two posts instead of cutting 20–30%: this is a targeted product-freshness correction, not a structural article rewrite, and the new text carries the Portals contract and evidence caveat.
- Committed as `3f5fb9e` (`docs: refresh Amp product research`) before Oracle review, as requested.

## 2026-08-07 — Oracle review and follow-up

- Oracle recommended a small follow-up rather than broader article expansion.
- Corrected a second stale sentence that still called durable webhooks experimental; the article now states only the current at-least-once delivery contract and first-class API status.
- Replaced “arbitrary file uploads” in research with a bounded list of examples documented by the announcement.
- Consolidated product freshness dating around the article's 2026-08-07 sweep statement instead of retaining three scattered `reverified` parentheticals.
- Oracle's article-impact recommendation:
  - No further change to `agentic-coding-2026.md`; its Portals example remains appropriately map-level.
  - No current change to `agent-ready-interfaces.md`, `make-the-agent-prove-it.md`, `parallel-agents-need-an-admission-policy.md`, `durable-context-coding-agents.md`, or `small-threads-durable-state.md`.
  - Research rich attachment inputs later only if canonical sources establish format/size boundaries, extraction fidelity, errors and recovery, privacy/retention, and representative outcomes.
  - Do not treat Portals as proof of correctness, equate portal access with multiplayer, imply Amp verifies webhook payloads, or repeat the Orbs note's unmeasured delivery claims.
- Final article word counts:
  - `amp-factory-era-case-study.md`: 2,423 words (up 113 from the pre-refresh version).
  - `agentic-coding-2026.md`: 2,188 words (up 52 from the pre-refresh version).
- Follow-up verification passed:
  - `npm run check` — 0 errors, warnings, or hints.
  - `npm run build` — 26 pages built successfully.
  - `npm run content:guard` — passed with the same informational duplicate-manifest notice.
  - Targeted stale-claim/date search — no public-post matches.
  - `git diff --check` — clean.
- Completion: Oracle's required corrections are applied and verified; no immediate article work remains after the follow-up commit.
