# Minimalistic site-wide search implementation

Add a native search dialog backed by MiniSearch and one generated corpus extracted from built HTML. [Research](research.md) owns comparisons, Pagefind experiments and Oracle feedback. This plan describes future implementation, not completed feature work.

## Goals

- Open a compact search interface from every human-facing route using a visible control or Mod+K, including mobile and slides.
- Find public titles, parent series names, resource descriptions and body content across Coding, Cloud and Security; follow ordinary local result links.
- Preserve static GitHub Pages hosting and the existing installed-site offline/update behavior.

## Tasks

- [ ] **Task 1: Generate and qualify the rendered search corpus**
  - Scope: `package.json`/lockfile, `astro.config.mjs`, a focused build-time HTML extractor and tests, a shared MiniSearch configuration module; post eligibility in `src/utils/posts.ts`, post route/PostLayout, summary route, landing/list owners, `ResourceCatalogPage.astro` and `ResourceCatalog.tsx`.
  - Depends on: none.
  - Acceptance: Pin MiniSearch and a build-time HTML parser (use LinkeDOM, already exercised for HTML extraction in research). Add application-owned `data-search-body`/`data-search-ignore` and title/parent metadata in owning templates. Generate one validated `dist/search/documents.json` before `generateSW`; include URL, title, parent title, description and searchable body in each record. Build fails on extraction/validation errors. Nothing generated enters Git or `public/`.
  - Acceptance: The actual emitted payload, using the browser's MiniSearch configuration, satisfies the corpus table and unquoted example query: a State of Agentic Coding episode in the top five and all nine published episodes reachable. Test body-only terms, another series, cloud/security titles, mixed case, blank and zero-hit queries. Test draft, unlisted, noindex and alternate-canonical exclusion independently. Use generic title/parent boosts; do not copy Pagefind's weight 7 as a validated MiniSearch setting.
  - Acceptance: Record document count, raw/gzip payload bytes and real-browser cold load, index construction and warm-query timings before UI polish. Working budgets: payload ≤2 MiB gzip, index construction ≤500 ms at 4× Chromium CPU slowdown, warm query/render first batch ≤100 ms. These are proposed qualification budgets, not measurements or real-device claims. If missed, record evidence and revise the plan before adding workers, serialization or sharding; do not silently weaken corpus coverage or relevance.

- [ ] **Task 2: Implement one native dialog and complete-payload loading**
  - Scope: new `src/components/Search.astro`, focused client script and shared search types/configuration; `Layout.astro`, `Navigation.astro`, standalone slide shell; scoped styles using existing theme tokens.
  - Depends on: Task 1.
  - Acceptance: One modal per document, no React island or provider modal. Visible responsive control and Mod+K open it; input receives focus, Escape closes with populated input, Tab cannot reach background controls. Restore original focus if visible/usable, otherwise the persistent search trigger or menu button. A visible Close control works on touch.
  - Acceptance: Lazy-load MiniSearch and the complete corpus on first opening; check HTTP status, parse and validate the payload, construct one in-memory index, then publish readiness atomically. Never turn failed/partial loading into an empty corpus. One 10-second asynchronous loading deadline, abort where possible, and ignore late work. Failed corpus loads offer fresh Retry; failed module imports may require Reload. Timers do not interrupt synchronous indexing/search: Task 1's measurement qualifies those.
  - Acceptance: Idle, loading, results, no-results and unavailable states differ visibly and through an appropriate live status announcement. Title, parent series when needed and a short plain-text snippet explain each result. Render ten results initially with a More results control. After initialization, queries and further result batches make no search-data requests. Stale success/error after query change, clear, close or retry cannot overwrite current state.

- [ ] **Task 3: Reconcile search with page shells, offline use and development**
  - Scope: navigation mobile-menu coordination, slide controls and key handling, `astro.config.mjs` precache verification, `README.md` search preview guidance.
  - Depends on: Tasks 1–2.
  - Acceptance: Opening search closes the mobile menu before opening the dialog. Search remains touch-discoverable in image-only slides and notes mode. Slide navigation does not respond while search is open; existing catalog filtering and summary navigation still work afterward.
  - Acceptance: Workbox includes the generated corpus and search code with no size-limit omissions. Existing globs already include JSON/JS; verify actual manifest membership rather than adding unnecessary extension rules. Offline searches work after successful installation. Preserve the existing update prompt and controller-change reload; no search-specific SW activation or version-pinning framework.
  - Acceptance: Build-and-preview is the authoritative search workflow. `astro dev` explains that the production search index requires a build instead of repeatedly requesting missing files or copying a stale index into `public/`. Without JS, site navigation works and no deceptively functional search trigger is shown.

- [ ] **Task 4: Verify the delivered behavior and build artifact**
  - Scope: focused unit/build-output tests, production preview via repository orb/browser workflow, observed work-local implementation evidence.
  - Depends on: Tasks 1–3.
  - Acceptance: Required checks below pass. Follow representative results in a real browser, inspect keyboard/focus and mobile states, inject corpus failures, and test installed-offline/two-build updates. Record observed proof and limitations in `progress.md` when implementation starts.
  - Acceptance: Inspect desktop results, mobile modal and the affected summary header using screenshots plus `view_media`. Include one representative inspected image in the completion report; screenshots do not replace executed interaction/DOM checks.

## Implementation notes

### Corpus and destinations

Availability and indexing are independent. Opt in within owning templates, not a blanket `Layout` main marker. Robots/canonical tags alone are not an indexing policy. The extractor uses a real HTML parser, combines multiple marked regions, removes only explicitly ignored descendants and structural boilerplate, normalizes whitespace, and derives local route URLs from output paths. It never reads source transcripts or summary API JSON.

| Surface | Indexed content and destination |
| --- | --- |
| Published listed canonical guides | Title, description, tags and article body at the existing context-qualified URL. Exclude draft/unlisted/noindex/alternate-canonical variants; normalize trailing slashes for canonical comparison. |
| Public summaries | H1, parent resource/series title and full summary body at `getSummaryPath`. Render canonical resource description and optional subtitle once in the visible summary header and index them, preserving text otherwise lost when duplicate cards are excluded. |
| Home/context/list/catalog introduction | Own title, description and unique introduction; exclude repeated guide/resource lists and shared navigation. |
| Resource cards with summaries | Discover via summary pages, not duplicate catalog-card text. |
| Resource cards without summaries | Index title, description and optional subtitle once, on the section page in the first catalog membership by registry order. Return that section page with a matching snippet, not a synthetic per-resource URL. |
| Slides/auxiliary decks/404/redirects/API/source-only evidence | Not results. Human-facing pages still offer search. |

Preserve substantive article `details` text. Exclude summary sibling/previous/next navigation and back/share/original-source controls. Resource date, format badge and topic-filter labels are not promised search fields. Avoid duplicate subtitle/description rendering and use existing header typography.

Compose search eligibility from `isPublicListedPost` plus noindex/canonical checks; leave existing public-list semantics unchanged. Reuse canonical resource IDs/catalog order and summary resolver ownership. Keep indexing attributes on existing `ResourceCatalog.tsx` wrappers where possible, not generic `ResourceListItem` props. No independently maintained search manifest or source Markdown extraction; generated records derive only from rendered content. Individual resource-anchor rows are deferred because filtered catalogs would also need target revelation.

### Engine and UI

- Store one document payload with schema version and validated unique IDs/local URLs; runtime metadata and full text live together. Index it in memory after complete loading. Do not start with both a serialized MiniSearch index and a separate document store.
- Use the same small configuration module for tests and browser construction: title/parent/body fields, generic boosts and explicit query semantics. Start with case-insensitive AND terms plus final-term prefix matching; qualify against the stated fixtures. Fuzzy matching is deferred unless evidence shows it improves relevance without noisy matches. No hardcoded query or URL boosts.
- Build a plain-text snippet from the stored body around a literal match, with description/leading-text fallback. No HTML highlighting, remote fragments, thumbnails, facets, semantic search or dedicated search-results route.
- Compact desktop modal, mobile-safe width and dynamic viewport height, at least 16px input text, existing theme and focus tokens. Idle prompt: “Search field guides and resources”. Debounce about 200 ms, trim whitespace, treat blank as idle. Preserve query in memory only; no analytics or persistent history.
- Native links and ordinary Tab/Enter navigation are sufficient. Suppress Mod+K in other editable controls; coordinate menu closing through its owning controller, not synthetic clicks. Ensure only one active focus trap.
- Guard asynchronous initialization/debounce with a request token; invalidate on clear/close/retry and reject stale success/error UI updates. Load the entire corpus before publishing an index. Render query, metadata and excerpts as plain text; validate local URLs and preserve current origin/base path, never a hardcoded portal hostname.

## Constraints / decisions

- MiniSearch + LinkeDOM extraction + native dialog is the selected implementation path. Pin installable versions when Task 1 begins; no MiniSearch version or benchmark was tested in this planning turn.
- Pagefind 1.5.2 was rejected after real missing-shard tests silently produced incorrect results. A custom dialog would not fix that engine behavior. Do not introduce global fetch interception, private patches or a provider abstraction to retain it.
- Preserve successful-install offline search through complete precaching. This trades first-install bandwidth for offline use: initialization is lazy, but search downloads are not entirely deferred by an active service worker. Replace historical Pagefind size estimates with final measured corpus/code sizes.
- Returning section pages for resources without summaries and excluding unlisted posts are deliberate defaults. Existing catalog filtering stays independent of site-wide search.
- No external search service, account, publication, push, PR or deployment is authorized by this planning request.

## Acceptance criteria

- From every human-facing route family, open search, enter `state of agentic coding` without quotes, see an episode in the top five and follow it to its rendered summary. Further results expose all nine current episodes.
- Body-only summary text and canonical description/subtitle text remain discoverable. Other series and representative Cloud/Security titles work without query-specific exceptions.
- No slide duplicates, drafts, unlisted/noindex/alternate-canonical posts, 404 or source evidence are results. Summary-less resources remain discoverable via one owning section.
- Failed corpus loading is never presented as valid zero results or partial search. Keyboard, mobile, rapid input and installed-offline use meet task contracts without breaking existing controls.

## Verification

- Run `npm run check`, `npm test`, `npm run build`; `npm run lint:fix` before committing files needing formatting. Do not commit unrelated formatter output. If resource/public-summary content unexpectedly changes, also run `npm run content:guard`.
- Exercise the emitted corpus with real MiniSearch and the shared browser configuration, not mocked results. Independently select expected source URLs, top-five bound, body-only and description-only terms; do not derive expectations from current engine output. Avoid fixed total counts as content grows.
- Test draft/unlisted/noindex/alternate-canonical exclusions separately, valid `details` inclusion, duplicate catalog ownership, standalone/series/curated-collection summary URLs and parent-series matches when H1 lacks the series name.
- Run `amp orb services ensure` first; for built search start a supervised preview service and use its returned portal, leaving the existing development web service alone. Load `agent-browser` and `using-agent-browser` before browser work.
- Browser matrix: home, contextual post, grouped summary including descriptive header, filtered catalog, 404, normal/image-only slides and notes view. Desktop 1280×720 and mobile 390×844 at 2× scale; idle/results/no-results/error, click/tap, Mod+K, Tab/Shift+Tab, Enter, Escape, visible focus restore and actual navigation. Test mobile-menu link focus → Mod+K → Escape with focus restored to a visible control.
- In a fresh uncontrolled context or verified SW bypass, inject corpus HTTP404, network rejection, malformed/truncated JSON, invalid schema/duplicate IDs/unsafe URLs and never-settling load. Check unavailable within 10 seconds, no unhandled rejections and fresh Retry after recovery; lazy module failure may offer Reload. Delay old loading while clearing/retrying/closing; stale work cannot win. Check no query/result-batch search-data requests after initialization.
- Measure actual compressed payload and construction/query timings against Task 1's budgets; state CPU/network setup and do not equate Chromium emulation with a real mobile device.
- Separately verify corpus/code membership and size limits in the Workbox manifest. After successful SW install, go offline and query unused terms. Build two versions with changed corpus on the same preview origin without clearing browser state: old tab stays usable before activation; the existing update action/reload makes new content searchable afterward.

## Deployment / migration

No data migration. Normal build order: Astro HTML → validated search document payload → Workbox manifest/SW → complete `dist/` upload by the existing authorized GitHub Pages release. Publishing requires a separate explicit request; do not trigger deployment during planning or local verification.

Rollback is a normal reviewed revert of search source/build integration followed by a fresh service worker and usual deployment. Preserve existing activation behavior; do not add unconditional `skipWaiting` or modify production caches manually.
