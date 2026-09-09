# Research: static HTML search and offline failure boundaries

**Date:** 2026-09-09
**Status:** complete
**Question:** How should this plain Astro site provide reliable static full-text search without losing its installed offline/update behavior?

## Recommendation

Use MiniSearch 7.2.0 over one validated document payload extracted from opted-in production HTML with LinkeDOM 0.18.13. A native dialog owns loading, recovery and navigation. This site's small corpus does not need a hosted service, Starlight migration, provider adapter, shards or a separate serialized index.

## Findings worth retaining

- Plain Astro offers build hooks; Starlight's built-in Pagefind search is a separate integration. Pagefind 1.5.2's healthy-path UI was promising, but actual missing-shard experiments silently changed counts or returned zero; some other missing assets left indefinite loading. A replacement UI/try-catch alone cannot detect those engine failures. These observations concern the tested version, not every future Pagefind release.
- Extract rendered public HTML, not source Markdown or summary JSON. Explicit owning-template markers preserve eligibility, unique introductions and substantive details. Full summary bodies plus canonical parent/description/subtitle avoid losing resource metadata when duplicated cards are excluded. Summary-less resources belong once in the first registry-ordered catalog section. Source-only evidence, alternate decks, drafts/unlisted/noindex pages and slides are not results.
- Generate the corpus before Workbox, then assert actual precache membership of the corpus and every emitted JS chunk after size filtering. Lazy initialization does not imply lazy downloads: successful offline installation precaches the complete corpus. Preserve the existing waiting-worker/update action rather than introducing search-specific activation.
- Fetch with `cache: 'reload'` to recover from cacheable invalid HTTP responses without query-string cache busting. This does not bypass the active service worker's consistent build. Validate before publishing readiness, bound asynchronous loading, and ignore stale results. Corpus failures must not become valid zero results.
- Qualify responsiveness on real emitted data. At 314 docs / 291,617 gzip bytes, synchronous indexing missed the proposed 500 ms at 4× slowdown. Eight-document `addAllAsync` batches measured 0.89–1.35 seconds total, maximum observed long task 77 ms; warm query/render was 20.6 ms, excluding 200 ms debounce. Total time and blocking time are different budgets. These are Chromium/orb observations, not physical-device guarantees.
- Test fault injection with explicit SW bypass separately from offline/update checks. An installed cache can conceal a network fault. The actual two-build test kept old search usable until update acceptance, then made changed corpus text searchable after reload.

## Evidence and maintenance

The implementation has shared validation/engine tests, actual built-corpus assertions, independent source expectations, and synthetic cross-catalog ownership cases. Run `npm run build` before `npm test` to exercise production-corpus assertions; without a build that one test explicitly skips. Full delivery passed 106 tests and Astro check with no diagnostics.

Oracle reviewed the integrated implementation and the repairs. Chromium verified corpus faults, cached-invalid recovery, lazy-module Reload, stale work, keyboard/mobile/touch emulation, route shells, installed-offline search and two-build updates. The completed work-item snapshot and detailed experiments are retained in the Git history of `.agents/work/feature/site-wide-search/` and [the implementation thread](https://ampcode.com/threads/T-01a08651-bb98-77f1-b7a1-2ada8e327186).

## Sources

- [Astro integrations](https://docs.astro.build/en/guides/integrations-guide/) — build integration boundary.
- [Starlight search](https://starlight.astro.build/guides/site-search/) — framework-specific Pagefind/Algolia support.
- [Pagefind Component UI](https://pagefind.app/llms-component-ui.txt) — tested provider UI contract.
- [MiniSearch](https://lucaong.github.io/minisearch/) — full-text indexing, field boosts and asynchronous batching API.
- [Request cache modes](https://developer.mozilla.org/en-US/docs/Web/API/Request/cache) — HTTP-cache recovery semantics.
