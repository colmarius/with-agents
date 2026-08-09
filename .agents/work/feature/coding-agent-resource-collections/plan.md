# Implement coding-agent resource collections

Add four reader-intent views over the existing Coding with Agents catalog while preserving the all-resources experience, topic facets, summary resolution, resource identity, and public content guarantees.

## Goals

- Make the four recommended collections visible and directly browsable from `/resources` and the Coding with Agents navigation.
- Keep one canonical catalog with exactly one validated primary section per resource.
- Preserve all current resource IDs, summaries, search behavior, topic filters, modal behavior, and existing inbound links.
- Prove the rendered routes and representative summary interactions in a real browser.

## Non-Goals

- Moving or renaming summary Markdown or transcript source files.
- Splitting broad playlist children across resource sections.
- Duplicating resources into secondary sections.
- Reworking topic labels, adding multi-select filtering, or adding new source/format filters.
- Adding direct URLs for individual modal summaries.
- Retiring, rewriting, or adding resource summaries.

## Tasks

### Task 1: Add and validate the canonical section taxonomy

- [ ] **Task 1: Add and validate the canonical section taxonomy**
  - Scope: `src/data/resources/coding-with-agents.json`, `src/data/resources/`, `src/types/resources.ts`, `.agents/scripts/public-content-guard.mjs`, `.agents/scripts/public-content-guard.test.mjs`
  - Depends on: none
  - Acceptance:
    - A single typed section registry defines the four stable keys, labels, descriptions, route slugs, and display order.
    - `CodingResource` matches the actual catalog shape, including required `date`, `topics`, and `primarySection`; the stale `tags` field and duplicate local resource shape are not propagated.
    - Every one of the 31 resources has exactly one approved `primarySection`, with resource counts of 8 workflows, 8 agent systems, 9 reliability, and 6 teams/ecosystem.
    - The public content guard rejects missing or invalid section values, and fixture tests exercise both failures while preserving existing validation.
    - Resource IDs, topics, URLs, dates, descriptions, and summary files are otherwise unchanged.
  - Notes: Keep the JSON catalog canonical. Do not create independent per-section manifests or use summary frontmatter `collection` for navigation.

### Task 2: Make the existing resource list data-driven

- [ ] **Task 2: Make the existing resource list data-driven**
  - Scope: `src/components/resources/CodingWithAgents.tsx`, `src/pages/resources/coding-with-agents.astro`, shared resource types/data module from Task 1
  - Depends on: Task 1
  - Acceptance:
    - `CodingWithAgents` receives its resources as a typed prop or an equivalent explicit route input instead of importing the entire JSON catalog internally.
    - `/resources/coding-with-agents` still renders all 31 resources and retains current reverse-chronological/latest-summary sorting.
    - Search still indexes resource metadata, topic labels, and child-summary titles; topic filtering and clear-filter behavior remain unchanged.
    - Standalone, series, and curated-collection summary modals continue to resolve through the existing global `resourceId` manifest.
  - Notes: Preserve behavior before adding new routes. Do not introduce separate React components or search implementations per section.

### Task 3: Add nested section routes and collection navigation

- [ ] **Task 3: Add nested section routes and collection navigation**
  - Scope: `src/pages/resources/coding-with-agents/`, `src/components/resources/ResourcesNav.astro`, section registry from Task 1
  - Depends on: Task 2
  - Acceptance:
    - Static pages exist at `/resources/coding-with-agents/workflows`, `/resources/coding-with-agents/agent-systems`, `/resources/coding-with-agents/reliability`, and `/resources/coding-with-agents/teams-ecosystem`.
    - Each page has section-specific title, description, canonical URL, active navigation state, and exactly the resources assigned to that section.
    - Navigation exposes All plus the four sections and derives labels/routes from the shared registry rather than repeating metadata.
    - Search and topic filters on a section route operate only on that section; the All route remains the obvious global-search destination.
    - Invalid section keys do not generate static routes.
  - Notes: Prefer one prerendered dynamic route driven by the registry over four near-identical page files. Keep the current summary-manifest mapping global so every selected resource resolves normally.

### Task 4: Turn the resource index into a useful collection overview

- [ ] **Task 4: Turn the resource index into a useful collection overview**
  - Scope: `src/pages/resources/index.astro`, section registry/data helpers, existing links in `src/pages/index.astro`, `src/layouts/PostLayout.astro`, and `src/content/posts/agentic-coding-2026.md`
  - Depends on: Task 3
  - Acceptance:
    - `/resources` presents one prominent Browse all entry plus four collection cards with their approved names, descriptions, and manifest-derived resource counts.
    - Existing homepage, post-layout, and article links to `/resources/coding-with-agents` remain valid and continue to reach the all-resources hub; no unnecessary link migration or redirect is introduced.
    - User-facing copy does not promise unsupported resource formats; the current “articles” claim is removed unless an article resource exists at implementation time.
    - Collection counts are derived from catalog data rather than hard-coded.
  - Notes: Summary-document counts are optional. If shown, label them explicitly as summaries rather than conflating them with top-level resources or represented playlist videos.

### Task 5: Verify the complete static and browser experience

- [ ] **Task 5: Verify the complete static and browser experience**
  - Scope: all files changed by Tasks 1–4; rendered `/resources` routes
  - Depends on: Tasks 1–4
  - Acceptance:
    - Focused guard and resolver tests pass.
    - `npm run content:guard`, `npm run check`, and `npm run build` pass.
    - A real browser confirms the resource overview, All route, and all four section routes render with the expected counts and active navigation.
    - Browser interaction verifies search and topic filtering, one standalone summary modal, one episode-series modal, and one curated-collection modal from appropriate routes.
    - Browser history and console inspection reveal no broken summary fetches, hydration errors, or dead internal links on the affected routes.
  - Notes: Follow the repository Orb Proof Loop: run `amp orb services ensure`, use its portal URL, and use the `agent-browser` skill. Capture one targeted screenshot only if it helps review the new overview or navigation.

## Implementation Notes

- Use `primarySection` only for resource-level navigation. Summary `collection` remains reserved for selected-video grouping.
- The all-resources route is a product requirement, not a temporary compatibility page. It preserves known-item search for cross-cutting resources.
- Primary section assignment is editorial metadata. Rolling series may be reassigned later without moving files or changing resource IDs.
- Broad resources 26, 31, 32, and 35 remain indivisible top-level cards even though their child summaries span several sections.
- Prefer existing Astro and React patterns. Add a helper or registry only where it prevents duplicated section metadata or route logic.
- Keep existing latest-summary date behavior. Independent section ordering is deferred.

## Constraints / Decisions

- One canonical manifest; no per-section resource files.
- Exactly one primary section per top-level resource.
- Existing topics remain cross-cutting facets.
- `/resources/coding-with-agents` remains All and keeps global search.
- New routes are nested beneath the existing hub.
- Resource IDs, summary paths, API slugs, transcript paths, and curated playlist order remain stable.
- No separate requirements brief is needed; the research and this plan contain the agreed behavior, scope, and acceptance criteria.

## Acceptance Criteria

- Visitors can browse All or choose one of four clearly described reader-intent collections.
- The All view still exposes all 31 resources and all 78 summaries through existing resolver behavior.
- Section membership matches the approved 8/8/9/6 mapping and is validated automatically.
- Search, topics, date sorting, summary modals, series episode lists, and curated collection lists preserve current behavior.
- Existing `/resources/coding-with-agents` inbound links remain valid.
- Automated project checks and real-browser verification pass with no known regressions.

## Verification

- `node --test .agents/scripts/public-content-guard.test.mjs src/components/resources/summaryResolver.test.ts` — focused catalog/summary contracts pass.
- `npm run content:guard` — reports 31 resources and 78 public summaries with no errors.
- `npm run check` — Astro and TypeScript checks pass.
- `npm run build` — all five Coding with Agents routes and summary API output build successfully.
- `amp orb services ensure` followed by the `agent-browser` workflow — verify `/resources`, `/resources/coding-with-agents`, and all four nested routes, including representative filtering and modal interactions.

## Deployment / Migration

- This is a static-route and catalog-metadata change; no runtime data migration is required.
- Preserve the existing umbrella route, so no redirect or external URL migration is needed.
- GitHub Pages deployment should publish the new prerendered pages with the normal build workflow.
- If verification discovers an assignment or copy problem, update `primarySection` or registry metadata and rebuild; rollback is the ordinary git revert of this feature because summary identities and source content are unchanged.
