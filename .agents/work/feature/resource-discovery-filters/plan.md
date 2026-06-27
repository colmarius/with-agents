# Resource Discovery Filters Plan

Add a focused discovery layer to the Coding with Agents resources page: one controlled topic taxonomy, client-side search/filtering, and clearer resource metadata. Posts/articles are intentionally out of scope for this work item.

## Goals

- Make resource browsing easier for users who arrive with a topic or question, not just a desire to browse by date.
- Replace broad/freeform resource tags with one controlled topic taxonomy.
- Keep the implementation static-site friendly and contained to the resources data/UI.
- Preserve the existing summary modal and series episode behavior.

## Tasks

- [ ] **Task 1: Migrate resource metadata to controlled topics**
  - Scope: `src/data/resources/coding-with-agents.json`, `src/components/resources/CodingWithAgents.tsx`
  - Depends on: none
  - Acceptance:
    - Every resource uses `topics` instead of `tags`.
    - Every `topics` value is one of the approved slugs in `research.md`.
    - Universal/broad labels such as `Coding agents`, `Workflow`, `Practices`, `Tools`, and product/source names are not retained as topics.
    - The resource UI type definitions no longer depend on `tags`.
  - Notes: Use the seed mapping in `research.md` unless a manifest description clearly contradicts it.

- [ ] **Task 2: Add topic filter controls and client-side search**
  - Scope: `src/components/resources/CodingWithAgents.tsx`
  - Depends on: Task 1
  - Acceptance:
    - The resources page exposes a text search input and topic filter controls above the resource list.
    - Topic filters display labels in the fixed approved vocabulary order from `research.md`.
    - Search matches resource title, subtitle, description, source, type, topic labels, and summary/episode titles from the existing manifest.
    - Filtering uses AND semantics between search query and selected topic: a resource must match both when both are set.
    - The page shows a visible result count and a clear/reset control when filters are active.
    - Empty results show a helpful no-results message without breaking the summary modal.
  - Notes: Keep this first implementation client-side only. Do not add full transcript search or server-side indexing.

- [ ] **Task 3: Preserve and clarify resource card metadata**
  - Scope: `src/components/resources/CodingWithAgents.tsx`, `src/components/resources/ResourceListItem.tsx` only if needed
  - Depends on: Task 2
  - Acceptance:
    - Resource cards render controlled topic chips using user-facing topic labels.
    - Existing summary availability, summary modal opening, playlist episode navigation, and external resource links continue to work.
    - Playlist resources that use latest episode date are labeled clearly, e.g. “Latest summary” or “Latest episode,” rather than appearing like a plain publication date.
    - The card layout remains readable on mobile and desktop.
  - Notes: Avoid a visual redesign; make only navigation/understanding improvements needed for filters.

- [ ] **Task 4: Validate the resource discovery slice**
  - Scope: resources page and project checks
  - Depends on: Tasks 1–3
  - Acceptance:
    - Manual smoke check covers: no filter, one topic filter, search-only, search + topic, no-results state, opening a single-resource summary, opening a playlist summary and switching episodes, and external link buttons.
    - `npm run check` passes.
    - `npm run build` passes.
    - Work item artifacts are updated: task checkboxes in `plan.md`, implementation notes in `progress.md`, and current status/next action in `index.md`.

## Implementation Notes

- Define the topic vocabulary once near the top of `CodingWithAgents.tsx` unless a better existing local pattern appears during implementation.
- Prefer stable topic slugs in JSON and map slugs to labels for display/search.
- Use the existing `manifest` prop to include series/episode titles in search text.
- Keep search forgiving: trim whitespace and compare lowercased strings.
- Keep scope resources-only. Do not change posts, post schema, transcript capture workflow, or summary page routing in this work item.
- Do not introduce a search library for this corpus; simple in-memory filtering is enough.
- URL query-param syncing is a possible follow-up, not required for this slice.

## Constraints / Decisions

- Use one controlled taxonomy field named `topics`; do not maintain separate freeform `tags`.
- Use the 10-topic vocabulary documented in `research.md`.
- Product/entity names like Amp and Pi should remain searchable text, not filters.
- Format/source values should remain metadata, not topics.
- Full transcript search and public summary pages are out of scope for this work item.

## Acceptance Criteria

- A visitor can narrow Coding with Agents resources by topic and search query without leaving the page.
- Topic labels are specific enough to help discovery and are not dominated by universal labels.
- Existing summary and playlist interactions still work.
- Resource metadata uses one controlled taxonomy field with no parallel tag/topic drift.
- The implementation passes the project check and build commands.

## Verification

- `npm run check`
- `npm run build`
- Manual browser smoke check of `/resources/coding-with-agents` covering the filter/search/modal cases in Task 4.
