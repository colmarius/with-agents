# Section Landing Page Redesign Plan

Replace abstract context-page coverage with stable, actionable entry points into
the content already available.

## Goals

- Make bordered cards and rows unambiguously actionable.
- Surface a useful subset of posts and reviewed summaries without turning the
  context page into another full index.
- Keep one shared Astro template while honestly handling content asymmetry.
- Derive collection visibility and counts from reviewed catalog data.

## Tasks

- [x] Audit the current content model, prior Coding homepage, and interaction
  ambiguity.
- [x] Prototype and browser-test content-first and guided-path alternatives in
  independent high-effort orbs.
- [x] Consult Oracle on the narrowed IA decision and incorporate its feedback.
- [x] Replace focus areas and generic actions with curated post/resource IDs.
- [x] Render curated field guides only where configured, reviewed-summary deep
  links everywhere, and only non-redundant populated collection routes.
- [x] Add source-of-truth checks for catalog membership and Coding-only posts.
- [x] Complete final static checks and browser proof at mobile and desktop sizes.

## Constraints / Decisions

- Do not add posts or placeholders for Cloud and Security.
- `/posts` remains chronological; context-page post selection is stable and
  curated.
- Summary cards deep-link into the existing catalog modal via `?summary=`.
- Collection links are omitted when the featured resources already represent
  the complete catalog.
- No new dependency, route migration, deployment, or shared-state mutation.

## Acceptance Criteria

- `/coding` exposes three curated guides, three curated reviewed sources, and
  four populated collections.
- `/cloud` exposes three curated reviewed sources and seven populated
  collections, with no post region.
- `/security` exposes its two reviewed sources, with no post region and no
  redundant one-item collection map.
- Every bordered content surface is one full-surface link with visible action
  text and focus/hover treatment.
- Mobile pages have no horizontal overflow; direct guide, summary, and
  collection flows reach their existing destinations.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm test`
- `npm run build`
- Real-browser checks at 390×844 and 1440×1000 on all three context routes.
- Exercise one curated guide, one direct summary modal, and one collection link.
