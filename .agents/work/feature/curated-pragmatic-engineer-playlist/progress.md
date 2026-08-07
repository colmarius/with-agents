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

## 2026-08-07 — Overview approved and public collection published

- Human explicitly approved proceeding from the pending overview gate after
  receiving a direct link to the six-source draft and a statement that public
  work remained blocked.
- Promoted only that overview from `draft` to `reviewed`; its body and exact six
  covered video IDs did not change.
- Added resource 35, `The Pragmatic Engineer — selected conversations`, with
  one ordered `Selected videos` collection using the approved six IDs and
  `pragmatic-engineer-selected-conversations` collection key.
- Added four public transcript/summary pairs for Martin Fowler, Dex Horthy,
  Boris Cherny, and Laura Tacho. Each public transcript body is byte-identical
  to its reviewed source-library transcript body.
- Reassigned the existing Pi and Hillel Wayne summaries to resource 35 at
  orders 4 and 6 without changing their bodies or public transcript files.
  Removed standalone resource cards 11 and 30. Resource 14 remains unchanged.
- Publication verification currently passes: exact unique orders 1–6, public
  content guard, 69 targeted Node tests, library status/audit, Astro check,
  production build, source-only import/build boundaries, transcript equality,
  Biome, and `git diff --check`.

## Next action

- Complete browser and Oracle review, resolve findings, rerun affected checks,
  rebase safely on current `origin/main`, and record final completion.

## 2026-08-07 — Oracle attribution correction awaiting approval

- Browser review passed on a production preview: exactly one Pragmatic Engineer
  card, six `Selected videos` in approved order without episode prefixes,
  working navigation through later summaries, no duplicate Pi or Hillel cards,
  and the Simon Willison standalone card retained.
- Oracle confirmed the manifest, selection, capture/reuse decisions, fold,
  resource metadata, public transcript provenance, and source/public claims.
- Oracle required all cross-source comparisons, inferences, and recommendations
  in the overview to carry explicit `Editorial:` labels. Added only those labels;
  no claim, citation, source coverage, order, or public summary changed.
- Corrected the work-item index to describe the actual separate human overview
  gate rather than claiming an independent review process.
- Returned the overview to `status: draft` for conservative human confirmation
  of the attribution-only revision. The local publication commit remains
  unpushed and finalization is paused.

## Next action

- Obtain explicit human approval of the Oracle-corrected draft overview. Do not
  restore reviewed status or finalize the public collection before approval.

## 2026-08-07 — Oracle attribution correction approved

- Human explicitly approved the attribution-only overview correction.
- Restored the corrected overview to `status: reviewed` and completed the
  separate overview review task. No claim, citation, source coverage, selected
  order, public summary, or resource fold changed at this gate.
- A fresh fetch found eight new `origin/main` commits since the prior rebase;
  finalization will rebase and reconcile overlaps rather than reset or discard
  either side.

## Next action

- Rebase safely on current `origin/main`, resolve any resource ID or content
  overlaps, rerun the full verification matrix, and record completion.

## 2026-08-07 — Rebase, verification, and implementation complete

- Rebased all eight local commits onto current `origin/main` at `a58d3c0`.
  The only overlap was the public resource manifest: upstream had assigned IDs
  33 and 34, so the Pragmatic Engineer collection moved atomically to resource
  35 while preserving both upstream resources and all six collection links.
- Final public order remains:
  1. `CQmI4XKTa0U` — Martin Fowler.
  2. `Usufn8IQJgw` — Dex Horthy.
  3. `julbw1JuAz0` — Boris Cherny.
  4. `n5f51gtuGHE` — Mario Zechner and Armin Ronacher.
  5. `xHHlhoRC8W4` — Laura Tacho.
  6. `KSkcgIYQy0U` — Hillel Wayne.
- Oracle's two findings are resolved: every cross-source overview synthesis now
  has an `Editorial:` label approved by the human, and the work item accurately
  records a separate human gate rather than an independent review process.
- Final verification passed on the rebased tree:
  - 69 targeted Node tests.
  - YouTube library status and structural audit: 294 videos, 303 manifest
    occurrences, 160 transcripts, 160 summaries, and 8 playlists.
  - Public content guard: 90 references, 29 resources, and 69 summaries.
  - Astro check with zero diagnostics and a successful production build.
  - Source-only import/build boundaries, four public/source transcript-body
    equality checks, exact collection order/ID checks, Biome, and
    `git diff --check`.
  - Production-preview browser check: one collection card; six selected videos
    in exact order without episode prefixes; first and sixth summary navigation;
    no duplicate Pi or Hillel cards; Simon Willison remains standalone; no
    browser errors.
- The pre-existing `antirez-ai-concepts` duplicate-manifest notice for
  `8gg-oJr4dTY` remains informational and was not changed.

## Next action

- None. The curated resource is complete.
