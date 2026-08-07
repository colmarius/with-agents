# Progress

## 2026-08-07 — Approved scope

- User approved the prior Oracle recommendation to reduce the listed portfolio from
  nine articles to seven.
- Both secondary article URLs and slide routes will remain public and buildable.
- The behavior article contributes only its discriminating-test method to the proof
  article; the Amp case study remains unchanged apart from listing metadata.
- Primary navigation will expose the seven retained owner roles.

## 2026-08-07 — Consolidation and navigation

- Added discriminating-test guidance, a compact explanation audit, evidence
  provenance, and reviewer questions to `Make the Agent Prove It`.
- Moved the reusable audit ownership out of the behavior article while preserving its
  source-specific synthesis, translation boundary, and direct routes.
- Set the behavior and Amp case-study articles to `unlisted: true` without drafting,
  renaming, redirecting, or deleting them.
- Replaced their homepage cards with the retained interface-design and parallel-work
  roles; consolidated the field-guide proof routing and removed the Amp recommendation.
- Updated the posts index description to match the seven-role portfolio.
- Oracle requested three focused corrections: define discrimination through observable
  alternatives, restore synthesis/translation/provenance boundaries, and remove the
  duplicate abbreviated audit. All were applied, including a corrected Tcl-example
  source interval verified against the saved transcript.

## 2026-08-07 — Verification

- Final body counts: `Make the Agent Prove It` 1,481 words, the preserved behavior
  synthesis 916, the unchanged Amp case-study body 1,696, and the field guide 1,673.
- `npm run lint:fix` — passed; 217 files checked with no fixes.
- `npm run check` — passed with 0 errors, warnings, or hints.
- `npm run build` — passed; 26 pages built, including both unlisted article and slide
  routes.
- `npm run content:guard` — passed; the existing duplicate-manifest notice remains
  informational.
- `git diff --check` — passed.
- Browser proof through the orb portal — passed: the homepage and posts index each
  exposed exactly seven retained articles and no unlisted route; the field guide
  consolidated behavioral proof into the proof article; the merged audit and evidence
  provenance rendered correctly; and both unlisted article and slide routes loaded
  without horizontal overflow.

## 2026-08-07 — Homepage visual-count correction

- Follow-up browser inspection counted all visually identical homepage cards, not
  only `/posts/` links, and found seven article cards plus a resource-library card.
- Removed the duplicate resource-library card from the article grid; the hero's
  `Browse resources` action remains available.
- Re-ran lint, Astro check, build, and diff checks successfully.
- Agent-browser now reports exactly seven visible cards, one for each retained
  article, with no horizontal overflow.
