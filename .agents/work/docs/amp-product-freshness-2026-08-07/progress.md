# Progress

## 2026-08-07 — Freshness audit and initial article refresh

- Freshly fetched the Amp Chronicle, Manual, Orbs manual, Plugin API, Models page, and Pricing page.
- Read all three Chronicle items published after the prior 2026-07-31 sweep.
- Classified Portals as `incorporate`, the Orbs field report as `incorporate with an explicit evidence boundary`, and Attach Anything as `research-only`.
- Identified a stale public claim: durable plugin webhooks are now first-class, not experimental.
- Initial article word counts before this refresh:
  - `amp-factory-era-case-study.md`: 2,310 words
  - `agentic-coding-2026.md`: 2,136 words
- Article word counts after this bounded freshness refresh:
  - `amp-factory-era-case-study.md`: 2,433 words
  - `agentic-coding-2026.md`: 2,188 words
- Verification passed:
  - `npm run lint:fix` — 216 files checked, no fixes needed.
  - `npm run check` — 0 errors, warnings, or hints.
  - `npm run build` — 26 pages built successfully.
  - `npm run content:guard` — passed; the existing duplicate-manifest notice for `8gg-oJr4dTY` remains informational.
  - `git diff --check` — clean.
- The refresh intentionally adds 175 words across the two posts instead of cutting 20–30%: this is a targeted product-freshness correction, not a structural article rewrite, and the new text carries the Portals contract and evidence caveat.
- Next: commit the bounded refresh, then ask Oracle to review the commit and recommend any further article changes.
