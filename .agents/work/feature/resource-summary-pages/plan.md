# Resource Summary Pages Plan

Replace long-form summary dialogs with canonical static pages while preserving catalog discovery, direct return paths, and series/collection navigation.

## Goals

- Make standalone and grouped summaries comfortable to read and navigate on mobile and desktop.
- Give every summary native URL, history, metadata, and no-JavaScript rendering semantics.
- Remove modal-only state and components once compatibility is preserved.

## Tasks

- [x] **Task 1: Add the canonical summary page path**
  - Scope: `src/pages/summaries/`, `src/components/resources/summaryResolver.ts`, summary content and catalog lookup utilities
  - Depends on: none
  - Acceptance:
    - Every summary content entry prerenders at `/summaries/<content-entry-id>` with its own title, canonical URL, and direct Markdown rendering.
    - Standalone and grouped summaries resolve their canonical resource and fail the build for invalid ownership/configuration rather than rendering ambiguous content.
    - The page has one document scroll, a readable content measure, a source-resource action, and links to every owning catalog.
  - Notes: Render the entry body at build time; do not create a second client data model.

- [x] **Task 2: Add responsive grouped-summary navigation**
  - Scope: summary page route/layout and `src/components/resources/summaryResolver.ts`
  - Depends on: Task 1
  - Acceptance:
    - Series and collections use actual links with `aria-current="page"`; selecting an item creates ordinary browser history.
    - Mobile exposes the list in-flow with its count and position in the disclosure label and marks the current linked item when expanded; desktop shows a sticky sidebar without an independent scrolling pane.
    - Previous/next links support sequential reading after the article.
  - Notes: Preserve the resolver’s current default and ordering rules.

- [x] **Task 3: Point catalogs to pages and remove modal-only code**
  - Scope: `src/components/resources/ResourceCatalog.tsx`, `ResourceListItem.tsx` or catalog wrappers, modal/episode/Markdown components, summary JSON API, modal-only hooks and UI helpers
  - Depends on: Tasks 1–2
  - Acceptance:
    - “Read Summary/Summaries” is an internal anchor to the default canonical page and no longer advertises a dialog.
    - Resource cards have stable anchors, and recognized legacy `?summary=` catalog URLs replace themselves with the canonical summary URL.
    - Code and routes used only by the modal/fetch flow are removed after an exact reference search.
  - Notes: Keep catalog search and topic filtering behavior unchanged.

- [x] **Task 4: Verify static, navigation, accessibility, and responsive behavior**
  - Scope: repository checks and running resource/summary routes
  - Depends on: Tasks 1–3
  - Acceptance:
    - `npm run lint:fix`, `npm run check`, `npm test`, and `npm run build` pass.
    - Browser checks cover a standalone summary and a collection/series at 390×844 and 1440×1000.
    - Evidence confirms page title/canonical URL, one document scrollbar, current-item semantics, episode history, source/catalog navigation, legacy query redirect, and browser Back restoration to the catalog.
    - A targeted axe WCAG A/AA audit reports no violations; any manual accessibility limitation is recorded.
  - Notes: Inspect one final mobile and desktop screenshot; record a clip only if navigation timing itself needs review.

## Implementation Notes

- Prefer a single Astro catch-all page over a React summary-page island.
- Use controlled content IDs directly in the path; retain encoded slugs only for legacy query compatibility.
- Preserve summary ordering through `resolveSummaryEntries` and `resolveSummarySlug`.
- Use trailing-slash summary URLs so the PWA can rely on Workbox `directoryIndex` handling and avoid precaching duplicate aliases for every summary document.
- Do not add a progressive overlay or short-preview mode without evidence of a separate comparison use case.
- Keep the page’s internal navigation in normal document flow. Sticky desktop navigation must not introduce a second vertical scroll container.

## Constraints / Decisions

- Dedicated pages are the default at every breakpoint; mobile and desktop must not have different content-opening semantics.
- The canonical page is resource-agnostic so cross-listed resources do not create duplicate summary URLs.
- No deployment or shared-state action is authorized by this plan.

## Acceptance Criteria

- Long summaries read as ordinary pages on mobile and desktop.
- Every summary and episode has exactly one canonical page URL.
- Native Back, open-in-new-tab, reload, and direct-arrival behavior are predictable.
- Users can reach the source resource and all relevant catalogs from the summary page.
- The old modal implementation and its maintenance burden are removed.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm test`
- `npm run build`
- Real-browser checks through the orb portal at 390×844 and 1440×1000, including targeted axe audits and inspected screenshots.
