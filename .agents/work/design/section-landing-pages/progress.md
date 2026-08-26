# Progress

## 2026-08-26 — Design and implementation

- Replaced static focus-area cards with curated, full-surface links to public
  field guides and reviewed resource summaries.
- Added compact populated-collection rows with reviewed counts; the collection
  map disappears when it would merely repeat the complete featured corpus.
- Preserved one shared page while Coding alone owns curated post IDs.
- Removed the coding-only companion promo from this hub so the page remains
  focused on first-party content and library navigation.
- Applied the Oracle review: curated IDs instead of latest/catalog order,
  unboxed inventory, no recommended-route configuration, direct summary links,
  and explicit action text on every bordered surface.

## Prototype evidence

- Content-first screenshot: `.amp/in/artifacts/content-first-hub-mobile-resources.png`
- Content-first workflow: `.amp/in/artifacts/content-first-hub-reviewed-summary-flow.webm`
- Guided-path screenshot: `.amp/in/artifacts/section-dashboard-coding-mobile.png`
- Guided-path workflow: `.amp/in/artifacts/section-dashboard-guided-route.webm`

## Current implementation evidence

- Final Coding mobile screenshot:
  `.amp/in/artifacts/section-hub-final-coding-mobile.png`
- Final direct-summary workflow:
  `.amp/in/artifacts/section-hub-final-summary-flow.webm`

## Verification

- `npm run lint:fix` — 434 files checked; no fixes required.
- `npm run check` — 54 files, 0 errors, warnings, or hints.
- `npm test` — 89 tests passed.
- `npm run build` — 44 pages built, including all three context routes.
- Browser at 390×844 — Coding rendered 3 guide links, 3 summary links, and 4
  collections in a 3,843-pixel page; Cloud rendered 0/3/7 in 3,142 pixels;
  Security rendered 0/2/0 in 1,807 pixels. All body widths matched the 390-pixel
  viewport.
- Browser at 1440×1000 — Coding and Cloud rendered three 328-pixel resource
  cards; Security rendered two 502-pixel cards. All body widths matched the
  viewport.
- Exercised a curated guide to `/posts/agentic-coding-2026`, a collection to
  `/resources/coding-with-agents/workflows`, and a featured summary deep link to
  the existing modal. A clean browser session reported no page errors.
