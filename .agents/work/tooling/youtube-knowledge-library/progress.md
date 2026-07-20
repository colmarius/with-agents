# YouTube Knowledge Library Progress

## 2026-07-20 — Task 1 complete

### Changes

- Established `src/content/youtube/` as a committed source-only tree with scoped guidance and a generic catalog for Salvatore Sanfilippo and the two initial Italian-language playlists.
- Extracted URL normalization, transcript discovery/fetching, segment normalization, chunking, rendering, path containment, and non-destructive writes into `.agents/scripts/lib/youtube-transcript-core.mjs`.
- Kept `save-youtube-transcript.mjs` as a thin compatibility CLI with its existing flags, defaults, output location, Markdown contract, JSON/human payloads, and exit codes.
- Added strict language selection as an opt-in core mode. It prefers an exact code, accepts a configured language's regional variant, and returns structured `requestedLanguage` plus `availableLanguages` data without fetching a different track when unavailable.
- Retained the legacy non-strict fallback behavior only for the existing public transcript CLI's compatibility path. The new library path is designed to use strict mode and does not inherit the known fallback/misreporting subtlety.
- Added the `youtube:library` CLI skeleton with fixed catalog/root paths, catalog validation, credential rejection, help, and explicit exit-2 placeholders for `sync`, `capture`, and `status`. No playlist sync, batch capture, or status behavior was implemented.
- Added built-in Node tests for URL/path normalization, path escapes, non-destructive and dry-run writes, strict language selection, catalog validation, fixed-root behavior, and the Task 1 CLI surface.

### Verification

- `npm run lint:fix`: ran and made no remaining changes, but exits 1 on pre-existing diagnostics under `.agents/references/dot-agents/site/` (`useButtonType` plus three warnings). No unrelated reference files were changed. A targeted Biome check of all Task 1 code/config files passes with no fixes.
- `node --test .agents/scripts/youtube-transcript-core.test.mjs .agents/scripts/youtube-library.test.mjs`: 13 tests passed.
- `npm run youtube:transcript -- fetch https://www.youtube.com/watch?v=8gg-oJr4dTY --lang it --json`: exit 0; payload remains compatible (`videoId`, canonical URL, title/channel, duration, `language: "it"`, caption kind, 86 segments, 11 chunks, and the unchanged transcript path shape). No file was written.
- `npm run check`: passed with 0 errors, warnings, or hints.
- `npm run build`: passed; 18 pages built.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`: no matches.
- `rg -n "source-only" dist/`: no matches.
- Reviewed the existing transcript CLI diff: its argument parsing, help text, context/payload construction, save/fetch branches, and exit handling remain in place; reusable internals moved to the shared core.
- `git status --short --branch`: clean before this work-item update.

### Blockers

- None for Task 1. The repository-wide lint command has the unrelated pre-existing reference-site diagnostics noted above.

### Next action

- Task 2: implement complete playlist synchronization only.

## 2026-07-20 — Task 2 complete

### Changes

- Implemented complete, sequential `playlistItems.list` synchronization with `part=snippet,contentDetails,status`, `maxResults=50`, complete `nextPageToken` pagination, and an injectable fetch boundary for fixture tests.
- Kept credentials environment-only. `sync` reads `YOUTUBE_API_KEY`, validates selected playlist slugs before checking the key, makes no request when the key is missing, and replaces network/API failures with sanitized errors that omit keys and request query strings.
- Added pure normalization into source-only manifests containing only `playlistId` and position-sorted entries. Entries preserve video ID, position, title, `contentDetails.videoPublishedAt` when present, privacy status when exposed, and availability; playlist-add timestamps, etags, thumbnails, page metadata, and sync timestamps are excluded.
- Normalized typed `private` status as `available: false` with `unavailableReason: "private"`. Normalized the conservative deleted-placeholder combination (`Deleted video`, YouTube's unavailable description, and no video publication date) as `available: false` with `unavailableReason: "deleted"`; title-only matches remain available rather than guessing.
- Added deterministic video-ID-based diffs for additions, removals, moves, retitles, and privacy/availability changes, with concise per-playlist reports and an explicit `no changes` result.
- Added deterministic JSON serialization and separate atomic manifest replacement semantics: byte-identical output is a no-op; changed output uses a unique same-directory temporary file and rename; failed replacements clean up the temporary file; dry runs fetch, normalize, diff, and report without writing.
- Implemented repeatable `sync --playlist <slug>` selection and `sync --dry-run`. `capture` and `status` remain Task 3 placeholders that reject options and exit 2.
- Added fixture coverage for normalization, pagination, sanitized page-2 errors, every diff class, serialization, atomic create/replace/no-op behavior including unchanged modification time, dry-run behavior, missing-key request prevention, selection order, argument validation, and explicit unchanged reporting.
- Implementation commit: `6943c7b` (`add deterministic YouTube playlist sync`). No playlist manifests, video files, status behavior, capture behavior, or editorial content were added.

### Verification

- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`: 26 tests passed (19 library tests and 7 transcript-core regression tests).
- `npm run youtube:library -- help`: passed and documents sync selection/dry-run behavior plus the Task 3 placeholders.
- `env -u YOUTUBE_API_KEY npm run youtube:library -- sync`: exit 1 with a clear `YOUTUBE_API_KEY` requirement and no request URL or secret.
- `env -u YOUTUBE_API_KEY npm run youtube:library -- sync --playlist nope`: exit 1 with the unknown-slug error before the missing-key check.
- `npm run youtube:library -- capture` and `npm run youtube:library -- status`: each retained the explicit placeholder and exit 2.
- `npx biome check .agents/scripts src/content/youtube/catalog.json package.json`: passed.
- `npm run lint:fix`: ran and made no changes; it still exits 1 only for the pre-existing `.agents/references/dot-agents/site/` `useButtonType` diagnostic plus the existing unused-function and descending-specificity warnings. No reference files were changed.
- `npm run check`: passed with 0 errors, warnings, or hints.
- `npm run build`: passed; 18 pages built.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`: no matches.
- `rg -n "source-only" dist/`: no matches.
- `git diff --check`: passed, and `git status --short --branch` showed only the three intended implementation files before the implementation commit.

### Deferred verification

- A real keyed API smoke and initial manifest generation were not run because no usable `YOUTUBE_API_KEY` was supplied for this task. Per the Task 2 handoff, fixture-based completion is sufficient; the real API pagination/no-op smoke remains deferred to the Task 5/6 thin slice. No manifests were fabricated.

### Blockers

- None for Task 2. The deferred real API smoke is explicitly non-blocking, and the repository-wide lint diagnostics remain unrelated pre-existing reference-site issues.

### Next action

- Task 3: add idempotent transcript capture and useful status reporting. Do not begin it without a dedicated Task 3 handoff.

## 2026-07-20 — Task 3 complete

### Changes

- Implemented deterministic sequential capture in catalog and manifest-position order with global video-ID deduplication, manifest-unavailable skips, selected-playlist filtering, positive limits, strict pre-fetch language-conflict validation, and a fixed 1500 ms delay between attempts only.
- Derived pending, captured, and unavailable state from transcript and metadata file existence. Default capture processes pending videos only, `--retry` processes persisted unavailable videos only, and bounded `--force` re-fetches selected videos with an overwrite-count warning while preserving sibling summaries.
- Added exact capture-provenance and persisted-unavailable metadata shapes through the generalized Task 2 atomic JSON writer. Successful retries replace unavailable metadata; transient, throttled, empty-caption, and fatal outcomes write no failure state or empty transcript.
- Surfaced `transcriptErrorName` from caught transcript-package errors and the strict `LanguageUnavailable` mismatch without changing the existing `youtube:transcript` JSON or human payload selection or its `transcriptUnavailable` strings.
- Classified typed failures as required: known video/caption/language unavailability persists, TooManyRequest and unknown/network/empty-caption failures remain transient, and invalid language/video ID failures stop with exit 1. Unknown names default to transient.
- Added human-readable playlist and author status reporting for manifest totals, derived transcript states, unavailable IDs, missing/draft-or-unrecognized/reviewed summaries, not-synced playlists, relationship-level video deduplication, and missing/stale synthesis coverage.
- Added a minimal tolerant frontmatter reader for only `status` and inline/block `coveredVideoIds`; malformed or unrecognized editorial fields degrade to undefined/empty rather than introducing a YAML dependency or Task 4 contracts.
- Implementation commit: `ea95f78` (`add idempotent YouTube transcript capture`). No playlist manifests, video directories, transcripts, metadata, summaries, overviews, or author files were added under `src/content/youtube/`.

### Typed failure caveat

- `youtube-transcript-plus` can surface exhausted watch-page HTTP failures, including some 5xx responses, as `YoutubeTranscriptVideoUnavailableError`. That typed name is persisted per the package contract; `--retry` is the recovery path when a transient upstream failure was classified as persistent.

### Verification

- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`: 40 tests passed.
- `npm run youtube:library -- help`: exit 0 and documents capture selection/modes/scope plus option-free human status.
- `npm run youtube:library -- capture`: exit 1 with a clear `ai-concepts` not-synced/run-sync-first error and no writes.
- `npm run youtube:library -- status`: exit 0 and reports both configured playlists as not synced plus the empty derived author aggregate.
- `npm run youtube:library -- capture --force`: exit 1 on the missing playlist/limit scope guard.
- `npm run youtube:library -- status --json`: exit 1 because status accepts no options or JSON mode.
- `npm run youtube:library -- capture --playlist nope`: exit 1 with the configured-playlist list before any manifest read or fetch.
- `npx biome check .agents/scripts`: passed with no fixes.
- `npm run lint:fix`: made no changes and exits 1 only on the known pre-existing `.agents/references/dot-agents/site/` diagnostics (one `useButtonType` error plus the unused-function and two descending-specificity warnings). No reference files were changed.
- `npm run check`: passed with 0 errors, warnings, or hints.
- `npm run build`: passed; 18 pages built.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`: no matches.
- `rg -n "source-only" dist/`: no matches.
- `git diff --check`: passed; pre-commit status contained only the six intended implementation files, and the corpus tree still contains only `AGENTS.md` and `catalog.json`.

### Deferred verification

- Real keyed playlist synchronization, network transcript capture, populated-corpus status, and the optional live `youtube:transcript` regression remain deferred to the Tasks 5/6 thin slice because no playlist manifests or `YOUTUBE_API_KEY` are available. Fixture/injected-boundary completion is sufficient for Task 3; no corpus files were fabricated.

### Blockers and deviations

- None. Task 3 stayed within its allowed files and did not begin Task 4 editorial contracts/content or Tasks 5–6 corpus/publication work.

### Next action

- Task 4: encode the editorial summary and synthesis workflow.
