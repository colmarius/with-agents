# Resource Discovery Filters Progress

## 2026-06-27 — Planning

- Created branch `feature/resource-discovery-filters`.
- Created work item `.agents/work/feature/resource-discovery-filters/`.
- Consulted Oracle on taxonomy design.
- Recorded the decision to use one controlled `topics` field instead of maintaining both freeform `tags` and filter `topics`.
- Wrote the initial implementation plan.

## 2026-06-27 — Implementation

- Migrated `src/data/resources/coding-with-agents.json` from freeform `tags` to controlled `topics` using the approved vocabulary and seed mapping from `research.md`.
- Updated `src/components/resources/CodingWithAgents.tsx` to define the topic vocabulary once, type resource topics from the vocabulary, and render topic labels on cards.
- Added client-side discovery controls above the resource list: search input, single selected topic filter, result count, reset controls, and no-results state.
- Search covers resource title, subtitle, description, source, type, controlled topic labels, and related summary/episode titles from the existing `manifest` prop.
- Preserved reverse-chronological sorting, including series latest-summary dates, and clarified playlist-derived dates with `Latest summary:` labels.
- Preserved existing single-resource summary, playlist/series summary, episode navigation, loading/error, and external link behavior.

Verification:

- `npm run check` — passed.
- `npm run build` — passed.
- `npm run lint:fix` — fixed formatting in 2 touched files.
- Re-ran `npm run check` — passed.
- Re-ran `npm run build` — passed.

Browser smoke check for `/resources/coding-with-agents`:

- No filters: 19 resources render; first three match expected reverse-chronological order: Pi Building Pi, LLMs are killing Agent Harness, Building Pi.
- One topic filter: `Context & memory` narrows to 4 resources and filtered cards still display the topic chip.
- Search only: `maggie` matches resource text; `Open source ecosystem` matches topic labels.
- Search + topic: `Open source ecosystem` plus `Tools & harnesses` returns the AND intersection of 4 resources.
- No-results state: `Linus` plus `Tools & harnesses` shows the helpful empty state without breaking the page.
- Single-resource summary modal opens for `LLMs are killing Agent Harness` and loads summary content.
- Playlist/series summary modal opens for `Raising an Agent - Series`; the 10-episode list renders and episode switching to episode 2 works.
- External resource buttons for representative video and playlist cards keep the expected outbound URLs.
- Playlist resources with derived latest dates show `Latest summary:`.

## 2026-06-27 — Mobile topic disclosure polish

- Consulted Oracle on whether search/filter controls should be hidden by default.
- Kept search, result count, and reset visible by default; collapsed only the topic pills on mobile.
- Desktop keeps the full always-visible topic controls.
- Mobile topic disclosure shows active state (`Topics: All` or `Topic: <label>`), uses `aria-expanded`/`aria-controls`, and resets closed when filters are cleared.

Verification:

- `npm run lint:fix` — no fixes applied.
- `npm run check` — passed.
- `npm run build` — passed.
- Focused browser smoke check passed:
  - desktop topic pills are visible by default and mobile topic toggle is hidden;
  - mobile search remains visible, topics are collapsed by default, and expanding reveals all 10 topics;
  - selecting `Context & memory` updates the collapsed header and narrows to 4 resources;
  - no-results state and clear reset work on mobile;
  - single-resource summary modal still opens on desktop.

Next action: review and merge the completed resource discovery filters.
