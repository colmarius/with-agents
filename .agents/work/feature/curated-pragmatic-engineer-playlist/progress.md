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

## 2026-08-07 — Source-evidence drafts ready for human review

- The bounded curated capture processed exactly the four approved missing
  videos: `CQmI4XKTa0U`, `Usufn8IQJgw`, `julbw1JuAz0`, and `xHHlhoRC8W4`.
- All four captures use the approved English transcript language and report
  English auto-generated captions. The command did not recapture the two
  validated standalone reuse sources or any of the 65 unselected videos.
- Drafted transcript-checked, timestamp-anchored English source summaries for
  Martin Fowler, Dex Horthy, Boris Cherny, and Laura Tacho. Claims preserve
  speaker attribution and distinguish practitioner reports, vendor/customer
  findings, forecasts, and editorial limitations from established facts.
- The source summaries remain `status: draft`. No playlist overview, public
  summary, public resource, collection metadata, or standalone fold changed.
- Public content guard passes. Structural audit resolves every new transcript
  anchor after correcting one non-existent Martin Fowler endpoint; its only
  expected remaining failures are the four unreviewed selected sources and the
  intentionally missing overview.

## Next action

- Obtain explicit human review of all four source summaries. Do not mark them
  reviewed or create the playlist overview until that gate is approved.

## 2026-08-07 — Source-evidence review approved

- Human explicitly approved proceeding from the pending source-evidence gate
  after receiving direct links to all four draft summaries and a statement that
  overview and public work remained blocked.
- Promoted exactly those four transcript-backed source summaries from `draft`
  to `reviewed`; no summary body, transcript, or metadata changed.
- The selected source set now consists of four reviewed local library summaries
  and the two previously validated reviewed standalone reuse chains.

## Next action

- Draft an overview covering exactly those six sources, then stop for separate
  human overview review before any public collection or standalone fold change.

## 2026-08-07 — Playlist overview ready for human review

- Drafted `playlists/pragmatic-engineer-podcast/overview.md` from exactly the
  six reviewed selected sources in approved order.
- The overview records all 71 manifest entries as drift authority, scopes
  editorial coverage to six selected videos, and leaves 65 unselected entries
  without capture or summary obligations.
- Each source thesis preserves guest attribution. Cross-source conclusions and
  practical recommendations that go beyond one speaker are labeled
  `Editorial:`.
- Structural audit passes with 160 transcripts, 160 summaries, 8 playlists,
  exact current overview coverage, and only the pre-existing duplicate-manifest
  notice for `8gg-oJr4dTY`.
- The overview remains `status: draft`; public resources and the approved folds
  remain unchanged.

## Next action

- Obtain explicit human approval or revision instructions for the draft
  overview. Do not publish or fold standalone cards before approval.
