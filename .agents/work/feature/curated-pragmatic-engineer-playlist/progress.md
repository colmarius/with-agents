# Progress

## 2026-08-07 — Configuration approval and Phase 1 onboarding

- Human explicitly approved `transcriptLanguage: en`, `summaryLanguage: en`,
  and `multiSpeaker: true`.
- Rebasing completed on latest `origin/main`; upstream now contains the three
  prerequisite David Ondrej commits, and this work item is the only local commit
  replayed above them.
- Added `pragmatic-engineer-podcast` with six candidates in exact editorial
  order and `curation.status: draft`.
- The authoritative selected sync created the complete 71-entry manifest. All
  71 videos, including all six candidates, are available; full remote order is
  retained for drift.
- Local status reports six candidates, zero selected, 65 unselected, no pending
  capture, and an inactive overview. No transcript, summary, overview, source
  review, or public resource was created or promoted.
- Strict standalone validation found two reusable evidence chains and no
  errors: `n5f51gtuGHE` → resource 11 and `KSkcgIYQy0U` → resource 30.
- Public-impact review recorded in `research.md`: the playlist and four new
  candidate IDs have no public references; the two reusable candidates retain
  their current public citations pending a fold decision.
- Added five temporary path-specific public-content exceptions for those two
  pre-existing standalone chains. They document the draft transition without
  treating curation as approved and must be removed when reviewed curation
  activates strict reuse.
- Verification passed:
  - YouTube status and structural audit: 71/71 available, no curation errors.
  - 69 targeted Node tests.
  - Public content guard, with five explicit transitional notices.
  - Astro check and production build.
  - Source-only boundary checks and `git diff --check`.

## Next action

- Stop for explicit approval or revision of the exact six candidate IDs/order
  and the proposed resource 11/resource 30 folds. Do not capture or publish
  before that decision.

## 2026-08-07 — Selection and fold approval

- Human explicitly approved all six video IDs in the proposed editorial order.
- Human explicitly approved folding resources 11 and 30 into the collection
  while retaining resource 14 as a standalone card.
- Promoted only the catalog curation gate from `draft` to `reviewed`; source
  summaries and the playlist overview remain independently unreviewed.
- Removed the five draft-transition public-content exceptions. Reviewed
  curation now activates strict standalone reuse for the two approved existing
  evidence chains.

## Next action

- Capture only `CQmI4XKTa0U`, `Usufn8IQJgw`, `julbw1JuAz0`, and
  `xHHlhoRC8W4`, then perform the dedicated source-evidence review gate.
