# Search implementation evidence

## Delivered

- Branch: `feature/site-wide-search`, created from local main and merged with origin/main before implementation. Origin added State of Agentic Coding episode 10; acceptance now covers ten episodes.
- [Corpus/engine worker](https://ampcode.com/threads/T-01a086d4-44a0-742e-b5ee-0055bbc09d64) owns build extraction, indexing annotations, schema/engine and their tests. Parent owns modal and both page shells; exact TypeScript contract agreed before concurrent edits.
- Parent modal uses native dialog, a single lazily loaded engine/corpus, yielding eight-document indexing batches, plain-text links/snippets, a ten-second load deadline, Retry/Reload and revision checks for stale work.
- Navigation switches to its existing mobile menu below 1024px, giving the persistent search control enough room. Slide search sits outside the top bar so image-only mode cannot hide it.

## Observed verification

- Final `npm run check`: 65 files, zero errors/warnings/hints. `npm run build`: 326 pages, 314 search documents, 1,069,301 raw / 291,617 gzip bytes, 403 Workbox entries. `npm test` after build: 106 pass, zero failures/skips. `npm run lint:fix` and `git diff --check` pass.
- Real Chromium/agent-browser: home, Coding/Cloud/Security, canonical guide, grouped summary, catalog, 404, normal/image-only slides and notes all open search and return episodes. All ten episodes reachable through More results. Followed real episode and Spanner links. Filtered catalog preserves its filter; Mod+K does not intercept its editable input.
- Desktop 1280×720 and narrow 390×844 at DPR2 inspected. Input autofocus, populated Escape, visible fallback focus after mobile menu closes, forward/reverse Tab exclusion of background controls verified. Chromium CDP touch dispatch opened search with `(pointer: coarse)` true; this is not a physical-device test. With script execution disabled on a fresh navigation, search is hidden/display:none and navigation remains present. Development shows build/preview instructions.
- Explicit CDP SW bypass: HTTP404, network failure, malformed JSON, invalid schema, duplicate IDs, unsafe URLs and never-settling corpus all show unavailable with no links, then recover on Retry. Timeout observed at 10.1 seconds. Missing engine recovers with Reload. No unhandled exceptions. Delayed payload plus query change/clear/close cannot publish stale results. Warm query changes and More make zero additional corpus requests.
- Separate HTTP fixture, no SW registrations/controller: cacheable invalid JSON remained in the browser HTTP cache (one server request); after server recovery Retry fetched valid data (second request) and produced Spanner links. This specifically verifies `cache: reload`.
- Fresh installed SW: reloaded under controller, confirmed no prior engine/corpus page requests, then went offline and searched unused `RFC 9700`; correct security link returned. Two builds on the same preview origin: added a temporary home-only token, built again, observed actual waiting worker/prompt. Old tab gave no result until update action/reload; afterward token returned `/`. Search and update action did not overlap on narrow image-only slides. Temporary token was removed and final production build restored. One automation click raced the reload; waiting for the reloaded document resolved it.

## Performance and review

- Initial synchronous construction failed the proposed 500 ms target: 665–906 ms at 4× CPU slowdown. Changed to yielding batches, explicitly revising the plan to ≤1500 ms construction / ≤100 ms blocking tasks. Five runs: 889.6–1351.3 ms construction; maximum observed long task 77 ms; engine queries 1.7–13 ms; actual first-batch query/render 20.6 ms excluding the deliberate 200 ms debounce. Local complete-payload/module load in that qualification was 127 ms. These are orb Chromium measurements, not mobile/network guarantees.
- Oracle reviewed the integrated diff, then the repairs: stale HTTP cache Retry, slide update-prompt overlap, and synthetic cross-listed summary-less ownership fixture. Follow-up found no blockers, including async indexing. Work already indexing after timeout is not cancellable but cannot publish readiness.

## Review artifacts

- `.amp/in/artifacts/site-search.webm`: final production-build walkthrough, 15 captured frames, slowed 5× to 7.1 seconds for readability (not a timing benchmark). Decoded every frame and inspected frames 001–015 in five labeled three-frame sheets; rechecked frame 013 full-size to confirm footer is intact and only the expected scroll boundary crops a result. No visual defects found.
- Inspected screenshots cover desktop/narrow/touch search, idle/loading/no-results/unavailable, summary headers, and actual waiting-update slide state. Screenshots and video are ignored review artifacts, not source files.
- Testing portal: https://t-03gu5gsqxvw9pvac7wrt924qu-p22801.onamp.dev/ . Actual portal search/results and summary navigation were verified; lower-level fault/performance/offline tests used the same build's local preview origin. Preview service remains running; browser sessions and temporary fault service closed.
