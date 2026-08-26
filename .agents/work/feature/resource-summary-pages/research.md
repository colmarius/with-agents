# Research: Resource summary presentation

**Date:** 2026-08-26
**Status:** complete
**Question:** Should long-form resource summaries use the current modal, an improved responsive overlay, or dedicated pages on mobile and desktop?

## Recommendation

Use one canonical, prerendered page per summary at every breakpoint. Preserve catalog context with ordinary Back behavior, exact catalog-section links, and resource anchors; use real links for series and collection navigation. Do not retain a second modal representation unless later user research demonstrates a distinct short-preview use case.

## Current implementation and observed behavior

- Catalog cards open a custom React modal and push `?summary=<encoded-slug>` into history. Episode changes replace that history entry.
- Summary Markdown is fetched after opening from a prerendered JSON endpoint, even though the full content is available to Astro at build time.
- The modal correctly moves focus to its close button, traps Tab, restores focus, supports Escape and overlay dismissal, locks body scroll, and preserves a shareable query URL.
- At 390×844, the selected summary had a 555px reading viewport and 4,600px of content. Its catalog title used three header lines, and expanding “Selected videos” replaced the reading pane.
- At 1440×1000, the series view used independent sidebar and article scroll regions inside a 90vh modal. Neither region had an obvious visual scroll cue.
- The accessibility snapshot exposed the full catalog behind the modal, including 144 underlying links, buttons, and inputs. The custom Tab trap worked and axe reported zero automated WCAG A/AA violations, but MDN specifically warns that a focus trap can still leave background content reachable through a screen reader’s virtual cursor.
- The query URL is not a canonical content page: page title, Open Graph metadata, canonical URL, and static HTML still describe the catalog rather than the selected summary.

## Alternatives

### Dedicated pages at every breakpoint

Strengths:

- One browser scroll, native document semantics, direct URLs, ordinary history, reload, open-in-new-tab, and per-summary metadata.
- Astro can prerender Markdown directly, removing the client fetch, loading states, focus trap, scroll lock, and modal history state.
- Real episode links create useful history entries and work without JavaScript.

Trade-off:

- Catalog context is no longer visible around the content. Browser Back normally restores it; direct arrivals need deterministic links to every catalog membership.

### Dedicated page on mobile, modal on desktop

- Avoids the smallest-screen constraints but preserves nested scrolling and modal accessibility complexity on desktop.
- Creates breakpoint-dependent behavior and doubles navigation/history QA.

### Improved responsive modal plus permalink

- Preserves immediate visual catalog context.
- Still treats long, non-critical reading as an interruption and creates two representations/URLs for the same content.
- A full-screen mobile dialog is still a dialog contract; Material positions that pattern around unsaved multi-step tasks, not reading destinations.

## External evidence

### U.S. Web Design System

USWDS defines modals as intentional workflow interruptions for a single task or message. It advises moving content to its own page when it cannot fit without scrolling, avoiding long scrolling content, and limiting in-modal interactions that scale poorly on mobile.

### Carbon Design System

Carbon positions modals as short, non-frequent, critical tasks. If even a large modal needs too much scrolling, it recommends a full page. For necessary overflow, Carbon requires fixed framing and a visible fade cue—both evidence that the current invisible nested overflow is weak, but not a reason to retain the modal.

### Material Design 3

Material describes dialogs as purposefully interruptive prompts for critical information, decisions, or required tasks. Most dialog content should avoid scrolling. Full-screen dialogs at compact breakpoints are intended for multi-step tasks, keyboard input, or unsaved changes; their app-bar navigation is limited to dismissal.

### WAI-ARIA APG and MDN

Modal content must contain focus while the background is inert. For large semantic content, initial focus should support reading from the beginning. MDN notes that `role="dialog"` and a keyboard focus trap alone do not stop screen-reader virtual-cursor navigation into the background.

## Proposed interaction model

- Canonical route: `/summaries/<content-entry-id>`, preserving nested content slugs through an Astro catch-all route.
- Catalog cards: ordinary internal links; standalone resources open their only summary, while series/collections open the same default entry selected today.
- Summary page: selected summary title as `<h1>`, parent resource context, source link, build-rendered Markdown, canonical metadata, and a single document scrollbar.
- Mobile series/collection navigation: in-flow `<details>` containing a list of real summary links and the current item.
- Desktop navigation: sticky in-page sidebar using real links and `aria-current="page"`, without its own fixed height or scrollbar.
- Back/context: top and bottom links to the exact catalog section and `#resource-<id>` anchor; list all catalog memberships for cross-listed resources. Native browser Back returns to the actual origin.
- Compatibility: temporarily redirect recognized legacy `?summary=` catalog links to the canonical page with `location.replace`.

## Prototype comparison

- [Responsive overlay prototype](https://ampcode.com/threads/T-01a03f6c-de55-76ee-8f97-c3fa899f40b3): native `<dialog>` fixed the background-inertness gap, mobile used the full 100dvh viewport, and one reading scroller replaced the prior nested panes. A native mobile select and bottom previous/next controls made grouped navigation clearer. It passed all repository checks and browser interaction tests, but still kept long-form reading in a temporary surface, retained client fetch/loading/history machinery, and could not provide per-summary metadata or ordinary episode history.
- [Dedicated-page prototype](https://ampcode.com/threads/T-01a03f6c-d93a-706d-892a-a314e771ce7e): prerendered 244 summary documents, changed catalog controls to anchors, added responsive linked navigation, and removed the modal, API, and client state. It passed all checks and representative browser tests. Its strongest ideas are adopted, but catalog-scoped summary URLs would duplicate cross-listed content, it omitted legacy query migration, and its long desktop sidebar introduced an independent scrollbar.
- [Independent UX audit](https://ampcode.com/threads/T-01a03f6c-e3e0-70a0-9cf5-f841e5465014): ranked dedicated pages first, an overlay only as progressive enhancement over canonical pages, and centered modals only for short previews. It independently observed constrained reading, weak overflow cues, query-only metadata/discovery, background exposure, and mobile collection-navigation problems.
- Oracle chose dedicated pages at every breakpoint because one static representation has the lowest interaction and maintenance cost. It advised reconsidering an overlay only for a future short-preview or frequent-comparison use case demonstrated by user testing.

## Sources

- [USWDS Modal](https://designsystem.digital.gov/components/modal/) — modal purpose, long-content/page guidance, scrolling, and mobile interaction cautions.
- [Carbon Modal](https://carbondesignsystem.com/components/modal/usage/) — short-task criteria, overflow treatment, and full-page threshold.
- [Material Design 3 Dialogs](https://m3.material.io/components/dialogs/guidelines) — critical-task purpose, full-screen dialog criteria, adaptive behavior, and scrolling guidance.
- [WAI-ARIA APG Modal Dialog Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) — inert background, focus containment, focus placement, and return-focus contract.
- [MDN ARIA dialog role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) — required focus management and virtual-cursor warning.

## Open Questions

- None.
