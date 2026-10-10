# Recently added content: findings and proposal

## Recommendation

Add an explicit `addedDate` calendar day to the owning metadata and derive a unified feed at build time. Prefer a `/recent` date-grouped archive plus a small home-page teaser. Keep existing editorial starting points and publication-date catalog sorting. No database, runtime Git queries, or separate activity ledger is needed for first additions.

The prototype is a selected sample, not a historical feed: 3 public posts, 6 standalone resources, and 5 child summaries grouped into 2 batches (14 additions in 11 rows). All addition dates are illustrative and isolated in `recent-data.ts`. Production `getStaticPaths` returns no prototype routes. `noindex` and `data-search-ignore` provide additional discovery boundaries.

## Evidence and ownership

- `src/data/resources/catalogs.ts` merges five canonical manifests, checks IDs, and owns catalog membership. Aggregate this registry once; do not concatenate catalog contents. Derive badges and filters from membership, including the Product & Decision-Making catalog which is not a top-level site context.
- `src/types/resources.ts` and `src/data/resources/resource-manifest.ts` define resources and strict calendar-date validation. Current `date` is not an added-to-site timestamp.
- `src/content.config.ts` defines post publication/update dates and summary source dates but no addition dates. Collection children and series episodes are separate summary entries.
- `src/utils/posts.ts` owns post routing and discovery eligibility. Prefer `isSearchablePost` for the new feed so drafts, unlisted/noindex entries, alternate canonicals, and slide variants stay out.
- `src/components/resources/summaryResolver.ts` owns exact summary paths and grouping validation. Its default target is not always the newest child: curated collections start at the smallest order and series at the highest episode. Addition entries must link to the exact child.
- `src/components/resources/ResourceCatalog.tsx` sorts grouped resources by latest child source date; leave this behavior intact.
- `src/search/build.ts` excludes noindex pages and `data-search-ignore` content. A future recent page should index its introduction, not duplicate full resource descriptions.
- Public summaries are already routed content. Keep source-only YouTube evidence, transcripts, intake, and research out. Existing publication/review guards remain authoritative.
- `src/pages/index.astro` has a hero and context choices; `[context].astro` preserves curated guides. `Navigation.astro` is already wide. Start with a small home teaser and scoped links instead of another top-level navigation item.

The resource date is observably not an addition date: RFC 9700 (resource 102) carries `2025-01-30`, while its manifest introduction is in [the September 2026 resource commit](https://github.com/colmarius/with-agents/commit/5a65789). File creation is not a safe substitute: records move between manifests and summaries consolidate into collections.

## Production contract to implement after feedback

1. Store optional `addedDate: YYYY-MM-DD` on standalone canonical resources, discoverable posts, and individual grouped summaries. Require it for new public additions after the chosen cutover. Preserve existing source dates unchanged. Use day precision with timezone-stable display.
2. Project rows keyed by `resource:<id>`, `post:<id>`, or `summary:<slug>`. Group child rows by parent and addition day for display; do not emit a redundant parent event. Never collapse all episodes into their parent ID.
3. Reuse canonical membership and routing. A cross-listed item appears once globally and in every matching filter. Cross-listing, editorial edits, reordering, transcript regeneration, and file moves do not reset addition dates. Preserve the date if an existing standalone resource becomes a collection child.
4. Sort descending addition date with a stable identity tie-break. Missing dates are absent from the chronological feed, not silently replaced with source dates. A later summary for an already-known standalone resource is not a second addition event in this minimal model.
5. Start tracking at a disclosed cutover, optionally with a small reviewed historical backfill. A broader backfill must follow identity across moves/ID changes and post draft-to-public transitions. Repository presence does not prove deployment; any Git-derived estimates need an explicit approximation policy. Never stamp the entire legacy catalog with today's date.
6. Test old-source/new-addition ordering, cross-list deduplication, multiple children with different addition days, excluded posts, missing dates, and deterministic ties. Keep links/filters usable on static HTML; add finite pagination when the full feed warrants it.

## Evaluation of independent research and visual exploration

- [High-mode data research](https://ampcode.com/threads/T-01a125ff-7107-7218-957a-91263e45cf39) recommended owner-level addition dates and a build-time projection. Accepted; checked the relevant local contracts and the cited resource history.
- [High-mode UX research](https://ampcode.com/threads/T-01a125ff-7b5e-7717-b9d7-4989c2519046) proposed a full archive or inline compact panel. Implemented both as isolated routes with the same sample data, filters, and exact links.
- Painter explored a timeline and context digest using the current resource page as a style reference. Kept the timeline's date rail and restrained styling. Rejected grouping the alternative by context because cross-listed items would either repeat or need an arbitrary owning context; used the research orb's single compact list instead.
- The full timeline supports historical browsing; the compact panel is cheaper to integrate but hides older rows and gives less room for descriptions. Recommend combining a small teaser with the full archive, not replacing curated guides.
- No unresolved high-impact judgment required Oracle. No production metadata migration or public navigation change has been made.

## Verification and preview environment

- `npm run lint:fix`: 472 files, no remaining errors or fixes.
- `npm run check`: 76 files, 0 errors/warnings/hints.
- `npm test`: final run 140 passed, 0 skipped, 0 failed (initial run before build: 138 passed, 2 skipped).
- `npm run build`: 398 pages; no `dist/**/prototypes` routes.
- Browser: 11 unique rows representing 14 additions; Cloud filter produces 2 rows with a 3-child expandable batch. Posts + Cloud produces the explicit empty state. Filter URL reload and Back restore the expected 2 Cloud rows. Compact expansion changes 5 rows to 11. Both variants fit a 390px-wide Chromium viewport with `scrollWidth === innerWidth`.
- All 14 unique content destinations returned HTTP 200 and a nonempty matching page heading. Representative default, expanded, empty, older-addition and narrow states captured and visually inspected in the owning thread.
- Initial shared dev server loaded a production React dependency bundle and lost the hydrated panel (`jsxDEV` unavailable). A dedicated supervised `recent-preview` service with explicit `NODE_ENV=development` fixed the preview without changing shared repository configuration. It runs `npm run dev -- --host 0.0.0.0 --port "$PORT" --ignore-lock`. If this becomes a durable preview workflow, consider persisting its service declaration after approval; current setup is intentionally temporary.
- These are development prototypes, not a deployed feature or verified historical addition record. Production projection tests and date backfill remain future work.
