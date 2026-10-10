# Production recent additions

## Goals

- Deliver version A with posts and resources together; use broad topic pills instead of content-type controls and a dropdown.
- Preserve trustworthy date semantics, exact destinations, existing editorial navigation, and static accessibility.

## Tasks

- [x] **Task 1: Metadata and history contract**
  - Scope: schemas/types, shared calendar-date validation, `src/data/recent-additions-history.json`, content-maintenance guidance.
  - Depends on: none.
  - Acceptance: explicit dates validate strictly; a small historical estimate set records first eligible repository evidence; legacy undated identities are frozen so newly public additions cannot silently disappear.
- [x] **Task 2: Projection and static views**
  - Scope: recent-additions projector, Astro timeline and routes, home teaser and resource-index entry point.
  - Depends on: Task 1.
  - Acceptance: canonical items deduplicate; children link exactly; mixed content filters by topic using real links; pages contain at most 20 atomic additions before batch grouping; unknown topics/pages are 404s; no JavaScript required.
- [x] **Task 3: Review, verification, delivery**
  - Scope: regression tests, production build/search, rendered desktop/narrow states, Oracle review.
  - Depends on: Task 2.
  - Acceptance: tests cover conflicting date orders, exclusions, missing metadata, cross-listing, children and pagination; all required checks pass; browser confirms topic navigation, pagination and batch destinations; portal shared; changes committed locally only.

## Decisions

- Topic labels mean Coding, Cloud, Security, AI, and Product & Decision-Making, not fine-grained resource tags.
- Historical estimates remain separate from explicit owner metadata and visibly labelled. Do not claim Git timestamps establish deployment. Older unknown dates stay in the library, absent from this archive.
- Grandfather only identities already public at implementation start. New discoverable posts and resources/children require `addedDate`; no normal-build Git dependency.
- Archive and topic pagination use static URLs, native details, and existing layout. Only the unfiltered first page introduction enters search; repeated rows and variants do not duplicate source search documents.
- Retain development prototypes as reference; production code does not import them. No schema-wide source-date renaming or unrelated cleanup.

## Verification

Run targeted public-contract tests, `npm run lint:fix`, `npm run check`, `npm test`, `npm run content:guard`, and `npm run build`. Inspect built route/link coverage and search output. Use real Chromium via the repository portal at desktop and narrow widths, including topic selection, pagination, and expanded batches. Verify navigation without JavaScript.

Observed: all required checks passed; 82 checked files with zero diagnostics, 146 tests passed with no skips, 405 generated pages, and 386 search documents. All 139 internal links/anchors in the seven archive routes resolve; invalid topics and page numbers return 404. Only the unfiltered archive introduction enters search. Chromium verified topic navigation, exact child destinations, pagination, Back, and native batch expansion with page scripts disabled. Inspected desktop, narrow, expanded Cloud batch, home teaser, and resource-index screenshots. Oracle found no blocking issues; its two maintenance findings are fixed and covered by tests.

Portal: https://t-03h0vql83uunyeacgo8xuy1wc-p24679.onamp.dev/recent/

## Delivery

Local implementation and commits authorized. No push or deployment. Close and remove this work item only after preserving its final verified snapshot in a separate commit.
