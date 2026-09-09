# Research: minimalistic site-wide search

**Date:** 2026-09-09
**Status:** complete
**Question:** Which Astro-compatible search engine and minimal UI can search this site's public pages from either page shell, with useful relevance and no server infrastructure?

## Recommendation

Use MiniSearch with one complete generated document payload extracted from opted-in production HTML, and a small native `<dialog>`. The browser owns loading/validation before constructing its index, so a failed corpus download cannot be silently treated as a complete search. Do not migrate to Starlight or maintain a separate source manifest. This is lexical full-text search, not semantic/AI search.

Pagefind was the initial favorite and was prototyped extensively. Actual missing-shard tests invalidated the proposed custom-dialog fallback: the underlying engine sometimes returns plausible incorrect results without an error. Oracle's follow-up recommendation is to switch rather than patch Pagefind transport internals. MiniSearch has not yet been prototyped on this corpus; the implementation plan starts with explicit relevance, size and browser-performance qualification. Confidence is high in the observed Pagefind failure, moderate in the MiniSearch fit until those measurements exist.

## Astro support and options

Plain Astro provides integration/build hooks, not the ready-made search experience included in Starlight. This repository uses Astro 7.2.0 directly. Starlight's official search guide documents built-in Pagefind and an official Algolia plugin; those features are specific to Starlight, not automatically available in this site's layout.

| Option | Support and cost | Assessment for this site |
| --- | --- | --- |
| Pagefind + Component UI | Indexes built HTML; static JS/WASM and sharded index; ready-made modal/keyboard UI; local hosting | Rejected for v1 after 1.5.2 browser failure probe. Healthy searches work, but missing assets can produce silent incorrect results or indefinite loading. |
| Pagefind + custom native dialog/API | Same extraction/index; own input, async state, results and accessibility | Earlier fallback superseded: UI replacement and try/catch do not detect silently failed shards. No transport patch/fork planned. |
| MiniSearch | In-memory JS full-text with prefix, fuzzy matching and field boosts | Selected. More extraction/snippet ownership, but one application-owned complete payload has a simple failure boundary. Start with document JSON and browser-side indexing, not separate serialized-index and document-store assets. |
| Algolia DocSearch | Hosted index/crawler and supplied search frontend | Technical blogs can apply; eligibility is not guaranteed. Domain validation/onboarding and external query service are unnecessary for v1. Do not create accounts or submit the site during this work. |
| Starlight migration / community Astro wrapper | Starlight integrates Pagefind; Astro also permits community or local integrations | No site-framework migration for search. Direct build integration avoids a wrapper dependency and makes existing Workbox ordering explicit. |

Pagefind's current documentation recommends Component UI (`pagefind-component-ui.js`, `pagefind-modal`) instead of legacy `PagefindUI`. CSS variables expose typography, colors and modal dimensions. Documentation claims keyboard/focus/accessibility support; those claims are not substitutes for browser verification.

## Repository contracts

- `src/layouts/Layout.astro` owns shared navigation, main content, footer and PWA prompt. Its `noindex` and canonical metadata do not themselves enforce Pagefind exclusions.
- `src/components/Navigation.astro` has desktop navigation plus a mobile overlay with its own document-level Tab/Escape handlers. Search must not compete with that focus trap.
- `src/pages/[context]/posts/[slug]/slides.astro` is a separate full HTML shell. Image-only mode hides the top bar and changes controls. Search availability must include slides even though slide text must not become duplicate results.
- `src/utils/posts.ts` supplies context-qualified canonical route helpers. `isPublicListedPost` excludes drafts/unlisted posts; production route generation only excludes drafts. `src/pages/[context]/posts/[slug].astro` passes canonical/noindex metadata to `PostLayout` but not draft/unlisted eligibility today.
- `src/pages/summaries/[...slug].astro` produces actual navigable summary pages using the summary resolver, with SSR article bodies, summary titles and parent resource/series names. No need to fetch the summary JSON endpoints to build search.
- `src/components/resources/ResourceCatalogPage.astro` uses `client:load`, so resource metadata exists in built HTML before React runs. Catalog and section pages repeat resources; cross-catalog membership can repeat them again.
- `astro.config.mjs` generates Workbox's service worker in `astro:build:done`. Current precache patterns cover common web extensions, not every Pagefind binary/shard extension. `astro build && pagefind` would run too late for that manifest.
- `.github/workflows/deploy.yml` uses `withastro/action@v6`; indexing should be in the Astro build path so the existing deployment artifact contains the index. Source-only evidence and transcripts are not HTML routes.

## Pagefind production-HTML experiment (historical candidate)

An isolated [high-mode orb](https://ampcode.com/threads/T-01a08654-d040-758c-87b4-56c4c0188bd1) built `colmarius/with-agents` at [the baseline commit](https://github.com/colmarius/with-agents/commit/f30c2bdd707b0b6bd173f65de01227278e65378e). No source/package edits were integrated. It ran Pagefind 1.5.2 and executed the generated JavaScript API plus actual WASM using a disk-backed fetch in Node. Results were not mocked.

| Variant | Indexed pages | Generated bytes, all assets | Unquoted results | First matching episode rank |
| --- | ---: | ---: | ---: | ---: |
| Default whole HTML | 325 | 1,673,853 | 82 | 16 |
| Narrow public bodies | 313 | 1,548,817 | 64 | 14 |
| Narrow + generic resource-name weight 7 | 313 | 1,549,045 | 64 | 5 |

The build contains 280 summaries, 9 posts, 9 slides, 21 resource routes, 5 landing/index routes and 404. Narrow selection excludes all 9 slides, 404 and 2 auxiliary noindex posts. No redirect HTML exists in the current output; an exclusion branch for meta-refresh was not exercised. No source-library/transcript/API HTML was found.

The prototype selects `article` for summaries/posts and `main` for other pages. It ignores `nav, aside, footer, details, .sr-only, button` descendants. These are temporary probe selectors, **not** the production contract: production must target known auxiliary components rather than dropping all future `details` content. It also retains catalog duplication and listed-post link text; the implementation corpus will be more selective.

For the exact user input, unquoted `state of agentic coding`, the weighted top five are:

1. `/coding/posts/agentic-coding-2026/`
2. `/summaries/coding-with-agents/an-ai-state-of-the-union/`
3. `/coding/posts/durable-context-coding-agents/`
4. `/coding/posts/`
5. `/summaries/coding-with-agents/state-of-agentic-coding-episode-2/`

All nine State of Agentic Coding episodes match. Episode 3 ranks 7; episodes 1, 4, 5, 7, 6, 8 and 9 rank 11, 12, 14, 15, 16, 18 and 19. Five default top-ten results are duplicate slides or auxiliary decks. Default Pagefind also indexes 404 and noindex pages.

Weight 7 applies to the existing resource-name paragraph on **every** summary with a separate parent name, matching Pagefind's documented H1 weight. This is a general title policy, not a query-specific exception. Display titles currently come from the summary H1, so parent-series metadata should also be shown in results.

Quoted `"state of agentic coding"` gives exactly 11 results: nine episodes and two catalog/section pages. That confirms exact phrase coverage, but requiring visitors to add quotes would not satisfy the intended ordinary-string experience.

All 280 summary pages have SSR bodies. The coding catalog has 80 resource cards; its teams section has 19. The same series card appears in both. Pagefind is page-oriented: catalog cards do not automatically become independent title/URL results.

Sizes are total emitted file bytes, **not** compressed request transfer or per-search payload. The weighted search data/API plus English WASM subset is 1,021,657 bytes; the remainder includes UI/helper/fallback assets. No mobile latency or browser UI conclusions follow from the headless test.

The coordinating thread downloaded and inspected both exact probe scripts, rebuilt the site, and independently reran default indexing plus the weighted index/API experiment. It reproduced 64 unquoted hits, the same top five and 11 quoted hits. Baseline verification also passed: `npm run check` reported 0 errors/warnings/hints across 57 files; `npm test` passed all 97 tests; `npm run build` produced 325 pages. These establish the experiment's input baseline, not completion of the planned feature.

### Reproduction and evidence retention

The child thread retains `report.md`, `probe.mjs`, `query.mjs`, full results and inventories at `.amp/in/artifacts/pagefind-experiment/`. Download through Amp's thread file tools; ignored artifacts are not transferred by Git. This note retains decision-relevant observations even if that orb is unavailable.

```sh
npm run build
npm install --prefix /tmp/pagefind-probe pagefind@1.5.2 linkedom@0.18.13 --no-audit --no-fund
# Download the child probe.mjs and query.mjs into /tmp/pagefind-probe first.
/tmp/pagefind-probe/node_modules/.bin/pagefind --site dist --output-path /tmp/pagefind-probe/default
node /tmp/pagefind-probe/probe.mjs narrow
node /tmp/pagefind-probe/probe.mjs weighted
node /tmp/pagefind-probe/query.mjs weighted
```

## Oracle consultation and remaining risks

Initial Oracle consultation agreed on Pagefind and a page-oriented corpus. It recommended explicit exclusion of unlisted/alternate-canonical posts, separation of slide entry points from indexing, resource metadata ownership in one catalog section, and build ordering before Workbox. It identified mobile-menu focus conflicts and image-only slide trigger visibility as specific integration risks.

Oracle's inspection of published 1.5.2 Component UI source reported error handling around module import but possible gaps around awaited initialization/search. The browser probe below confirmed those failures and additionally found silent shard corruption. Do not depend on undocumented component events, monkey-patch private methods, or swallow global promise rejections.

Retained offline policy: extend the existing successful-install precache contract to the complete generated search corpus/code, generating data before Workbox. The baseline reports 399 precached files, 19,570 KiB. The approximately 1.55 MB Pagefind bundle is historical, not a MiniSearch estimate; measure actual corpus/code sizes and verify per-file limits. This preserves offline search after installation at the cost of fetching search assets even before first use. Only UI/index initialization can be described as lazy under this policy.

### Browser fault probe: why Pagefind was rejected

The same high orb tested the unmodified 1.5.2 Component UI and real generated production index with agent-browser 0.33.2 / Chromium 152 at 1280×720, 2× DPR. A fresh named browser context visited a separate fault-fixture origin with no PWA registration/scripts. Actual server logs captured injected 404s and UI effects; an explicit service-worker controller snapshot was not taken. The coordinating thread downloaded and read the full report; browser fault cases were not independently rerun here.

| HTTP404 target | Observed state |
| --- | --- |
| `pagefind.js` | “Error: Could not load search bundle”; component error event. |
| `pagefind-entry.json` | Persistent Searching; unhandled metadata errors, no component error. |
| English `.pf_meta` | Persistent Searching; unhandled WASM No pointer errors. |
| All four requested index shards | Ordinary zero-results response despite healthy query returning 82. |
| One index shard | Plausible 84 results instead of healthy 82, with no error/rejection. |
| Result fragments | Count 82 with skeletons and no links or actionable error. |

Restoring files and editing/reopening did not reset affected state; full reload after recovery restored 82 healthy results in every case. Reload itself is acceptable, but missing honest error/reload guidance and silent wrong answers are not. This is an engine/API limitation, not merely a modal styling issue.

Healthy behavior: Escape with populated input closed the modal and returned focus to its trigger. Native modal prevented focusing background links. Forward Tab remained within the dialog's controls except Chromium sometimes reported BODY at a boundary for one keypress; strict cyclic DOM containment and other browsers/screen readers were not established. Two delayed-request races (first shard and first fragment delayed 2 seconds; query changed after 500 ms) correctly kept the newer Spanner results.

Evidence in the child thread: `.amp/in/artifacts/pagefind-modal/report.md`, `index.html`, `server.mjs`, `failures.sh`, per-case request/DOM JSON and four inspected diagnostic screenshots. This was a disposable behavioral fixture, not a proposed production visual design. Services, browser session and temporary tooling were cleaned; no application/package changes were made.

### Implementation-plan review feedback

Oracle reviewed the drafted work-item research and plan, retained the architecture, and requested one corpus correction plus targeted acceptance amendments. Incorporated into `plan.md`:

- Preserve canonical resource description/subtitle in the visible indexed summary header; otherwise removing catalog-card duplicates would lose descriptive text that summary Markdown does not contain. Tests must distinguish that case. Dates, format badges and topic-filter labels are not guaranteed search fields.
- Deadline never-settling operations and ignore stale errors as well as successes. Allow explicit Reload for sticky initialization failures; do not promise that every engine failure supports in-page Retry.
- Run fault injection without a controlling SW; run offline/update checks separately on the same origin with preserved browser state and changed index content.
- Restore focus only to a visible/usable original target; use a persistent control if opening search closed the menu containing that target.
- Keep complete precache generation in the build task, leave generic resource presentation components alone where wrapper attributes suffice, and compose search eligibility without changing existing public-list behavior.

The review found no missing human-facing shell and confirmed summary resolver paths and first-catalog section ownership. After the browser probe, Oracle reviewed the new contradictory evidence and explicitly recommended MiniSearch plus rendered-HTML extraction over another Pagefind adapter/probe. The final plan adopts that recommendation, removes the stock/custom provider branch, and replaces shard tests with complete-payload transport/validation tests.

The simpler transport contract has a cost: the client downloads the complete corpus and builds an in-memory index. The plan requires measuring raw/gzip bytes and browser construction/query latency before UI polish. It uses LinkeDOM (already exercised in the extraction experiment), a shared MiniSearch configuration, generic title/parent boosts, one generated document file, and plain-text snippets. No MiniSearch version, payload size or rank has been measured in this turn. Historical Pagefind counts/ranks are not claimed as MiniSearch results.

## Sources

- [Astro integrations guide](https://docs.astro.build/en/guides/integrations-guide/) — official/community/custom integration support and build hooks.
- [Starlight site search](https://starlight.astro.build/guides/site-search/) — default Pagefind and Starlight-specific Algolia integration.
- [Pagefind indexing](https://pagefind.app/docs/indexing/) — opt-in body semantics and content exclusions.
- [Pagefind Node API](https://pagefind.app/docs/node-api/) — directory indexing, output writing, explicit returned errors and cleanup.
- [Pagefind weighting](https://pagefind.app/docs/weighting/) — H1 default 7 and generic element weights.
- [Pagefind Component UI](https://pagefind.app/llms-component-ui.txt) — current modal, templates, CSS variables, loading and keyboard contracts.
- [Pagefind browser API](https://pagefind.app/docs/api/) — dynamic import and query/result API for custom UI fallback.
- [MiniSearch](https://lucaong.github.io/minisearch/) — in-memory full-text, fuzzy/prefix and field boosts.
- [DocSearch eligibility](https://docsearch.algolia.com/docs/who-can-apply/) — public technical blogs eligible to apply; domain/crawler onboarding required.

## Open questions

- MiniSearch relevance, complete-payload size and mobile-class initialization time must meet Task 1's explicit qualification budgets; revise the plan if measurements fail before adding complexity.
- Final browser/accessibility, installed-offline and two-build update behavior remain implementation verification, not established research results.
