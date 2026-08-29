# Coding Resource People Grouping Plan

Add the smallest useful practitioner-oriented entry point to the Coding with
Agents catalog without changing its existing navigation or filtering model.

## Goals

- Let readers browse five recurring practitioners from the main catalog page.
- Preserve canonical resource counts and direct-link relevant child summaries.
- Keep curation small, explicit, build-validated, and server-rendered.

## Tasks

- [x] **Task 1: Add curated practitioner selections**
  - Scope: `src/data/resources/coding-with-agents-featured-people.ts`
  - Depends on: none
  - Acceptance:
    - Exactly five practitioners each reference exactly two natural summary IDs.
    - The data contains no URLs, duplicated titles, biographies, or generalized participant schema.

- [x] **Task 2: Render the compact disclosure**
  - Scope: `src/components/resources/FeaturedPeople.astro`, `src/components/resources/ResourceCatalogPage.astro`
  - Depends on: Task 1
  - Acceptance:
    - Only the main Coding with Agents route renders a closed native disclosure.
    - Expanded links derive titles and routes from the summary manifest.
    - Missing summaries and same-parent selections fail with actionable errors.
    - Existing catalog navigation, controls, counts, and ordering remain unchanged.

- [x] **Task 3: Verify the implementation**
  - Scope: affected route, project checks, browser states
  - Depends on: Task 2
  - Acceptance:
    - Formatting, Astro checks, tests, build, and content guard pass.
    - Desktop and mobile browser checks cover closed/open states, keyboard operation, direct links, route scoping, overflow, and console errors.
    - A reviewed screenshot and supervised portal are available.

## Implementation Notes

Use the existing summary manifest and resolver APIs. Keep `ResourceCatalog.tsx`,
`ResourcesNav.astro`, content schema, and canonical resource manifests unchanged.

## Constraints / Decisions

- No people route, filters, format taxonomy, person registry, or appearance counts.
- Parent playlists and series remain canonical; selected children link directly.
- The disclosure is intentionally a limited editorial starting set.

## Acceptance Criteria

- Five people and ten valid links are available without delaying the catalog when closed.
- The main catalog retains its four thematic sections and existing behavior.
- Non-coding and Coding with Agents subsection routes do not render the disclosure.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm test`
- `npm run content:guard`
- `npm run build`
- Real-browser proof through the supervised orb portal on desktop and mobile.
