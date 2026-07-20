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

## 2026-07-20 — Task 4 complete

### Contract decisions

- Documented exact, ordered frontmatter contracts for per-video summaries,
  playlist overviews, and flat author synthesis files. New artifacts use
  `draft`; only an explicit human or dedicated review pass sets `reviewed`.
- Standardized `coveredVideoIds` as a two-space-indented block list for
  playlist and author synthesis, with revision coverage and Task 3 staleness
  semantics. Only `status` and `coveredVideoIds` are currently machine-read;
  the remaining keys preserve editorial provenance.
- Required summary provenance to come from committed records: actual source
  language and caption kind from `metadata.json`, and publication date from
  the playlist manifest when present, without re-fetching or inference.
- Required the language/caption-kind-adapted translation/paraphrase disclosure
  as the first summary body line when source and summary languages differ,
  prohibited presenting translated captions as verbatim quotations, and
  standardized transcript timestamp anchors and body heading order.
- Defined playlist coverage reporting and synthesis from per-video summaries,
  with anchored author claims visibly separated from `Editorial:`
  interpretation in every section.
- Defined explicit, confirmed author identity links without uploader/channel
  inference or duplication of catalog relationships and manifest membership.
  Sequence and change-over-time claims require publication dates and
  timestamped evidence, never mutable playlist order.
- Kept all summaries and syntheses as explicit agent/human editorial work. Sync,
  capture, and status must not silently generate or replace them, and no LLM
  API is part of the workflow.
- Editorial contract commit: `926e669` (`document YouTube library editorial contracts`).

### Verification

- Existing tolerant-reader parse check returned
  `{ status: 'draft', coveredVideoIds: [ 'abc' ] }` for the documented
  two-space-indented block list.
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`:
  all 40 tests passed.
- `npm run lint:fix`: made no changes and exited 1 only on the known pre-existing
  `.agents/references/dot-agents/site/` diagnostics (one `useButtonType` error,
  one unused-function warning, and two descending-specificity warnings).
- `npm run check`: passed with 0 errors, warnings, or hints.
- `npm run build`: passed; 18 pages built.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`:
  no matches.
- `rg -n "source-only" dist/`: no matches after the build.
- `find src/content/youtube -type f -print | sort`: showed only `AGENTS.md` and
  `catalog.json`.
- `git diff --check`: passed. Before the editorial commit, status showed only
  `src/content/youtube/AGENTS.md`; no unrelated formatting was introduced.

### Blockers and deviations

- None. No corpus/editorial artifacts, examples, placeholders, templates,
  commands, dependencies, tests, production code, or CLI behavior were added
  or changed. Tasks 5–6 were not started.

### Next action

- Task 5: prove the source-only thin slice, then backfill in bounded batches.

## 2026-07-20 — Task 5a real-data thin slice complete

### Real playlist synchronization

- Credential preflight passed without printing the key: the worktree was
  clean, `YOUTUBE_API_KEY` was non-empty, and
  `npm run youtube:library -- help` exited 0.
- The first real `npm run youtube:library -- sync` added 63 `ai-concepts`
  entries and 30 `coding-with-ai` entries. The manifests match the catalog
  playlist IDs, are position-sorted, and contain 63 and 30 available entries
  respectively with no manifest-unavailable entries.
- `ai-concepts` has 62 unique IDs among its 63 entries because
  `8gg-oJr4dTY` occurs at positions 0 and 3 in the real playlist.
  `coding-with-ai` has 30 unique IDs.
- Initial manifest commit: `192da2f` (`sync YouTube playlist manifests`).
- The repeat real sync reported `no changes` for both playlists. Manifest
  SHA-256 values remained
  `06cff56a2db7531bcefb9489c65f8feac249ff0c74d2aff47d2196f0e09ab653`
  and
  `ee7f8cc5c3390b1151465b57b7f07362e951f9297a50cdf3e164cb94677dbac4`;
  both modification times remained `1784536383`, and the worktree stayed
  clean.

### Baseline and final status

- Baseline `ai-concepts`: 63 manifest entries, 63 available, 0
  manifest-unavailable; 0 captured, 63 pending, 0 unavailable-recorded; no
  captured-summary states; overview missing.
- Baseline `coding-with-ai`: 30 manifest entries, 30 available, 0
  manifest-unavailable; 0 captured, 30 pending, 0 unavailable-recorded; no
  captured-summary states; overview missing.
- Baseline author `antirez`: 86 deduped videos; 0 captured, 86 pending, 0
  unavailable-recorded; author synthesis missing.
- Final `ai-concepts`: 63 manifest entries, 63 available, 0
  manifest-unavailable; 2 captured entries representing 1 unique video, 61
  pending entries, 0 unavailable-recorded; 0 missing summaries, 2
  draft/not-reviewed summary occurrences, 0 reviewed; overview current.
- Final `coding-with-ai`: 30 manifest entries, 30 available, 0
  manifest-unavailable; 1 captured entry/video, 29 pending, 0
  unavailable-recorded; 0 missing summaries, 1 draft/not-reviewed, 0
  reviewed; overview current.
- Final author `antirez`: 86 deduped videos; 2 captured, 84 pending, 0
  unavailable-recorded. `authors/antirez.md` remains intentionally missing
  and reports missing covered IDs `8gg-oJr4dTY` and `XZZ_ddBvELc`.

### Bounded capture outcomes

- Attempt 1 for `ai-concepts`, using
  `capture --playlist ai-concepts --limit 1`, captured `8gg-oJr4dTY` and
  exited 0. Metadata records language `it` and caption kind `caption`; the
  8,088-byte, 1,286-word transcript has 11 coarse timestamp chunks.
- Attempt 1 for `coding-with-ai`, using
  `capture --playlist coding-with-ai --limit 1`, captured `XZZ_ddBvELc` and
  exited 0. Metadata records language `it` and caption kind
  `auto-generated`; the 6,348-byte, 1,040-word transcript has 8 coarse
  timestamp chunks.
- The captured IDs are distinct. Both playlist attempts succeeded on the
  first bounded command, so there were no retry attempts, persisted
  unavailable records, transient failures, throttle signals, or stopped
  queues.
- Capture commit: `8a52373` (`capture thin-slice YouTube transcripts`).

### Editorial artifacts and source checks

- Added draft summaries at
  `src/content/youtube/videos/8gg-oJr4dTY/summary.md` and
  `src/content/youtube/videos/XZZ_ddBvELc/summary.md` after reading each full
  transcript, metadata record, and matching manifest entry.
- Added draft thin-slice overviews at
  `src/content/youtube/playlists/ai-concepts/overview.md` and
  `src/content/youtube/playlists/coding-with-ai/overview.md`. No author
  synthesis was created.
- Summary frontmatter key order and title/publication/language/caption
  provenance were checked against the committed sources. Targeted searches
  confirmed all 18 Key Ideas timestamp references exist in the sibling
  transcripts. The playlist overviews add 16 timestamp references; all exist
  in the corresponding transcript, and both relative summary links resolve to
  their intended source path.
- The summaries are 2,545 bytes/333 words for `8gg-oJr4dTY` and 2,951
  bytes/385 words for `XZZ_ddBvELc`. The observed editorial context for two
  source-checked summaries was 14,436 transcript bytes, 2,326 transcript
  words, and 19 timestamp chunks; each summary required a full transcript
  read plus targeted anchor checks.
- Editorial commit: `a445f4f` (`add thin-slice YouTube summaries and overviews`).

### Coverage interpretation

- In thin-slice overviews, `pending video IDs` means summaries that exist but
  are not incorporated. That count is zero for both playlists. Uncaptured
  transcript work is reported as counts rather than long ID lists.
- `ai-concepts` reports both manifest-entry and unique-video counts because
  the real manifest duplicates `8gg-oJr4dTY`: 2 captured manifest entries are
  1 captured unique ID and 2 draft summary occurrences are 1 summary file.
  Its remaining uncaptured work is 61 entries/unique IDs.
- `coding-with-ai` has no duplicate entry in the thin slice; its remaining
  uncaptured work is 29 entries/unique IDs.

### Verification

- Final `npm run youtube:library -- status`: exited 0 with both overviews
  current and all captured entries summarized as drafts; the intentionally
  missing author synthesis is reported as expected.
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`:
  all 40 tests passed.
- `npm run lint:fix`: made no changes and exited 1 only on the known
  pre-existing `.agents/references/dot-agents/site/` diagnostics: one
  `useButtonType` error, one unused-function warning, and two
  descending-specificity warnings. No unrelated reference files were
  modified.
- `npm run check`: passed with 0 errors, warnings, or hints.
- `npm run build`: passed; 18 pages built.
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`:
  no registration or import matches.
- `rg -n "source-only" dist/`: no matches.
- `git diff --check` passed for commits `192da2f`, `8a52373`, and `a445f4f`.

### Blockers, deviations, and Task 5b inputs

- No workflow blocker, unavailable caption, transient failure, or throttle was
  observed. Task 5b therefore has no live throttle threshold evidence yet and
  must retain bounded capture batches and the existing stop-on-throttle rule.
- The only data-shape deviation from a simple one-entry thin slice is the real
  duplicate `ai-concepts` playlist item described above; global video-ID
  deduplication still produced one transcript and one summary.
- Task 5b starts with 61 pending entries/unique IDs in `ai-concepts`, 29 in
  `coding-with-ai`, and 84 pending deduped author videos across both playlists.
  Two summaries consumed complete source contexts of 1,286 and 1,040 words
  and produced 333- and 385-word drafts, which is the concrete context/output
  sizing evidence for bounded editorial batches.
- Broad backfill, full overview revision, author synthesis, Task 6, and Task 5
  completion remain out of scope and undone.

### Next action

- Derive the bounded Task 5b capture/summary handoff from Task 5a's actual
  status and throttle evidence.

## 2026-07-20 — Task 5b bounded backfill batch complete

### Preflight and capture outcomes

- The worktree was clean before capture. `npm run youtube:library -- help`
  exited 0, and the baseline `status` command exited 0 with the exact Task 5a
  state: `ai-concepts` at 63 entries/2 captured/61 pending,
  `coding-with-ai` at 30 entries/1 captured/29 pending, and author `antirez`
  at 86 deduped/2 captured/84 pending. Both playlists had zero recorded
  unavailable videos and zero missing summaries among captured videos; both
  overviews were current and the author file was missing.
- `capture --playlist ai-concepts --limit 2` ran exactly once and exited 0:
  `captured 2VnxJafIfEI`, then `captured T5b69_8f5MI`.
- `capture --playlist coding-with-ai --limit 2` ran exactly once and exited 0:
  `captured WoaulxVqUUA`, then `captured ro9ZPPoajJg`.
- All four successes record `requestedLanguage: it` and `language: it`.
  `2VnxJafIfEI` and `ro9ZPPoajJg` are auto-generated captions;
  `T5b69_8f5MI` and `WoaulxVqUUA` are captions. Directory, metadata, and
  transcript IDs match; every transcript is non-empty and has coarse chunks
  under `## Transcript`.
- Each selected ID occurs in its command's playlist manifest with the title
  and publication date used by the summary. None of the four new IDs is shared
  across the two manifests, and no mutable-title discrepancy occurred.
- There were no unavailable or transient outcomes, no fatal exit, no
  `TooManyRequest`, no stopped queue, and no retry, force, refill, sync, or
  repeated capture command.

### Generated capture artifacts and source sizes

- `2VnxJafIfEI`: `metadata.json` and `transcript.md`; 1,580 bytes, 241 words,
  2 timestamp chunks.
- `T5b69_8f5MI`: `metadata.json` and `transcript.md`; 25,878 bytes, 4,350
  words, 30 timestamp chunks.
- `WoaulxVqUUA`: `metadata.json` and `transcript.md`; 10,588 bytes, 1,805
  words, 12 timestamp chunks.
- `ro9ZPPoajJg`: `metadata.json` and `transcript.md`; 12,509 bytes, 2,142
  words, 16 timestamp chunks.
- Batch source total: 50,555 bytes, 8,538 words, and 60 chunks. This is 6,212
  words more, or 3.67 times, Task 5a's 2,326 source words, despite containing
  only twice as many videos. The 241–4,350-word range is material sizing
  evidence for later batches.
- Generated capture artifacts were committed before editorial work as
  `3a5e075` (`capture YouTube backfill batch 1 transcripts`). Staged
  `git diff --check` passed and the commit contained only the eight new
  transcript/metadata files.

### Source-checked summaries and editorial sizes

- Read every complete transcript, metadata record, and selected manifest
  entry before writing one real draft `summary.md` per captured video. No
  placeholder, overview revision, or author synthesis was created.
- `2VnxJafIfEI/summary.md`: 1,728 bytes, 235 words, 2 verified Key Ideas
  timestamp endpoints.
- `T5b69_8f5MI/summary.md`: 3,779 bytes, 497 words, 14 verified Key Ideas
  timestamp endpoints.
- `WoaulxVqUUA/summary.md`: 3,076 bytes, 413 words, 10 verified Key Ideas
  timestamp endpoints.
- `ro9ZPPoajJg/summary.md`: 3,193 bytes, 418 words, 12 verified Key Ideas
  timestamp endpoints.
- Batch summary total: 11,776 bytes, 1,563 words, and 38 verified timestamp
  endpoints. This is 845 words more, or 2.18 times, Task 5a's 718 summary
  words.
- A targeted contract/provenance check passed for all summaries: exact ordered
  frontmatter, manifest title and publication date, metadata language and
  caption kind, draft status, caption-kind-adapted disclosure as the first
  body line, exact heading order, an anchor on every Key Ideas bullet, every
  referenced endpoint present as a sibling transcript chunk, and both source
  links present. Claims and caveats were checked against the full transcripts.
- Summaries were committed separately as `bed8190` (`add YouTube backfill
  batch 1 summaries`). Staged `git diff --check` passed and the commit
  contained only the four new summary files.

### Final status and verification

- Final `npm run youtube:library -- status` exited 0. `ai-concepts` has 63
  entries, 4 captured entries representing 3 unique videos, 59 pending, 0
  unavailable-recorded, and 0 missing summaries; its overview is intentionally
  stale for `2VnxJafIfEI` and `T5b69_8f5MI`.
- `coding-with-ai` has 30 entries, 3 captured entries/videos, 27 pending, 0
  unavailable-recorded, and 0 missing summaries; its overview is intentionally
  stale for `WoaulxVqUUA` and `ro9ZPPoajJg`.
- Author `antirez` remains at 86 deduped videos, now with 6 captured and 80
  pending. `authors/antirez.md` remains intentionally missing and reports all
  six summarized IDs: `8gg-oJr4dTY`, `2VnxJafIfEI`, `T5b69_8f5MI`,
  `XZZ_ddBvELc`, `WoaulxVqUUA`, and `ro9ZPPoajJg`.
- `npm run lint:fix` made no changes and exited 1 solely on the known
  pre-existing `.agents/references/dot-agents/site/` baseline: one
  `useButtonType` error, one unused-function warning, and two
  descending-specificity warnings. No reference files were modified.
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`:
  all 40 tests passed; exit 0.
- `npm run check`: passed with 0 errors, warnings, or hints; exit 0.
- `npm run build`: passed; 18 pages built; exit 0.
- `rg -n "source-only" dist/` and
  `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`
  each returned no matches (expected `rg` exit 1), preserving the production
  and import boundaries.
- Final corpus `git diff --check` passed, and the worktree was clean before
  this progress update.

### Blockers, deviations, and Task 5c recommendation

- No blocker or scope deviation occurred. Sync, overview updates, author
  synthesis, Task 5 completion, and Task 6 remain undone. Tasks 5 and 6 stay
  unchecked.
- Recommend keeping Task 5c at a maximum of four capture attempts: one
  `--limit 2` command per playlist, with no refill and the existing immediate
  stop-on-throttle rule. Four sequential attempts showed no throttle and the
  resulting 8,538-word source batch was completed with full editorial checks,
  so reducing the attempt count is not yet required. Do not enlarge it: the
  18-fold transcript-size spread and the 3.67-times Task 5a source context show
  that video count alone is a weak predictor of editorial load.

### Next action

- Prepare a dedicated Task 5c handoff using the evidence-based maximum-four
  size above. Do not begin capture without that handoff.

## 2026-07-20 — Task 5c second bounded backfill batch complete

### Preflight and capture outcomes

- The worktree was clean before capture. `npm run youtube:library -- help`
  exited 0, and baseline `status` exited 0 with the exact Task 5b state:
  `ai-concepts` at 63 entries/4 captured entries representing 3 unique
  videos/59 pending, `coding-with-ai` at 30 entries/3 captured/27 pending,
  and author `antirez` at 86 deduped/6 captured/80 pending. Both playlists
  had zero unavailable records and zero missing summaries. Their overviews
  were stale for the four Task 5b videos, and the author file was missing.
- `capture --playlist ai-concepts --limit 2` ran exactly once and exited 0.
  Its output lines were `captured wb7WMD8BtCQ` and
  `captured vIUzIYpmb9Q`.
- `capture --playlist coding-with-ai --limit 2` ran exactly once and exited 2.
  Its output lines were `captured WiJ2SaI-BtY` and
  `unavailable H5cvtoSxdxI: LanguageUnavailable: Requested transcript language
  "it" is unavailable. Available languages: en.`
- No refill, retry, force, sync, or repeated capture command ran. The strict
  language mismatch persisted metadata only for `H5cvtoSxdxI`; it was not a
  transient failure, throttle, fatal error, or reason to discard the preceding
  successful capture.
- All three successful captures record `requestedLanguage: it`,
  `language: it`, and `kind: auto-generated`. Directory, metadata, transcript,
  and source IDs match; every transcript is non-empty and has coarse chunks
  under `## Transcript`.
- Each selected ID has a real entry in its command's manifest. The transcript
  and manifest titles match, and no selected ID is shared across the two
  playlists. Summaries use the selected manifest's title and publication date.

### Generated capture artifacts and source sizes

- `wb7WMD8BtCQ`: `metadata.json` and `transcript.md`; transcript 5,924 bytes,
  971 words, and 8 timestamp chunks.
- `vIUzIYpmb9Q`: `metadata.json` and `transcript.md`; transcript 4,471 bytes,
  743 words, and 6 timestamp chunks.
- `WiJ2SaI-BtY`: `metadata.json` and `transcript.md`; transcript 8,684 bytes,
  1,409 words, and 11 timestamp chunks.
- `H5cvtoSxdxI`: 303-byte metadata-only unavailable record with
  `requestedLanguage: it`, `availableLanguages: ["en"]`, and no transcript or
  summary.
- Successful-source total: 19,079 bytes, 3,123 words, and 25 chunks across
  three transcripts. Generated capture artifacts were committed before any
  editorial work as `d50363e` (`capture YouTube backfill batch 2 transcripts`),
  containing only the seven new metadata/transcript files. Staged
  `git diff --check` passed.

### Source-checked summaries and editorial sizes

- Read every complete successful transcript, metadata record, and selected
  manifest entry before writing one real draft summary per captured video. No
  placeholder, overview revision, or author synthesis was created.
- `wb7WMD8BtCQ/summary.md`: 3,216 bytes, 428 words, and 7 verified Key Ideas
  timestamp endpoints.
- `vIUzIYpmb9Q/summary.md`: 3,153 bytes, 427 words, and 10 verified Key Ideas
  timestamp endpoints.
- `WiJ2SaI-BtY/summary.md`: 3,897 bytes, 536 words, and 11 verified Key Ideas
  timestamp endpoints.
- Batch summary total: 10,266 bytes, 1,391 words, and 28 verified timestamp
  endpoints. A targeted contract/provenance check passed for ordered
  frontmatter, manifest title/publication date, metadata language/caption kind,
  draft status, the adapted first-line disclosure, exact heading order, an
  anchor on every Key Ideas bullet, every endpoint's presence in the sibling
  transcript, and both source links. Claims and caveats were checked against
  the complete transcripts.
- Summaries were committed separately as `098d769` (`add YouTube backfill
  batch 2 summaries`), containing only the three new summary files. Staged
  `git diff --check` passed.

### Final status and verification

- Final `npm run youtube:library -- status` exited 0. `ai-concepts` has 63
  entries, 6 captured entries representing 5 unique videos, 57 pending, 0
  unavailable-recorded, and 0 missing summaries. Its untouched overview is
  stale for `2VnxJafIfEI`, `T5b69_8f5MI`, `wb7WMD8BtCQ`, and
  `vIUzIYpmb9Q`.
- `coding-with-ai` has 30 entries, 4 captured, 25 pending, 1
  unavailable-recorded (`H5cvtoSxdxI`), and 0 missing summaries. Its untouched
  overview is stale for `WoaulxVqUUA`, `ro9ZPPoajJg`, and `WiJ2SaI-BtY`.
- Author `antirez` has 86 deduped videos, 9 captured, 76 pending, and 1
  unavailable-recorded. `authors/antirez.md` remains missing and reports all
  nine summarized IDs: `8gg-oJr4dTY`, `2VnxJafIfEI`, `T5b69_8f5MI`,
  `wb7WMD8BtCQ`, `vIUzIYpmb9Q`, `XZZ_ddBvELc`, `WoaulxVqUUA`,
  `ro9ZPPoajJg`, and `WiJ2SaI-BtY`.
- `npm run lint:fix` exited 1 only on the known pre-existing
  `.agents/references/dot-agents/site/` baseline: one `useButtonType` error,
  one unused-function warning, and two descending-specificity warnings. It
  temporarily reformatted the new unavailable JSON; that change was restored
  to the committed generated bytes, and no reference file or capture artifact
  remained modified.
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`:
  all 40 tests passed; exit 0.
- `npm run check`: passed with 0 errors, warnings, or hints; exit 0.
- `npm run build`: passed; 18 pages built; exit 0.
- `rg -n "source-only" dist/` and
  `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`
  each found no matches (expected `rg` exit 1), preserving the production and
  import boundaries.
- `git diff --check` passed for both corpus commits and before this progress
  update.

### Task 5b comparison and Task 5d sizing evidence

- Task 5b transformed 8,538 source words into 1,563 summary words across four
  videos, with source sizes ranging from 241 to 4,350 words and summary sizes
  from 235 to 497 words. Task 5c transformed 3,123 source words into 1,391
  summary words across three successes, with source sizes from 743 to 1,409
  words and summaries from 427 to 536 words.
- Task 5c had 5,415 fewer source words than Task 5b, a 63.4% reduction, but
  only 172 fewer summary words, an 11.0% reduction. The smaller and tighter
  source range therefore did not reduce source-checking and editorial output
  in direct proportion to transcript length.
- Across the eight bounded Task 5b/5c backfill attempts, seven captured and one
  ended in strict-language unavailability; there were zero transient failures,
  zero fatal errors, zero `TooManyRequest` signals, and zero stopped queues.
  Including Task 5a, all ten bounded attempts produced nine captures and one
  strict-language unavailable record with no throttle evidence and no retries.
- Task 5d should retain a maximum of four planned attempts: one `--limit 2`
  command per playlist, no refill, and the existing immediate stop-on-throttle
  rule. This is not an automatic copy of Task 5c: cumulative network evidence
  does not justify reducing below four, while Task 5b's 18-fold source-size
  spread and Task 5c's relatively high editorial output per source word do not
  justify enlarging the batch.

### Blockers, deviations, and next action

- No blocker or scope deviation occurred. The exit-2 strict-language outcome
  was handled exactly as designed. Sync, overview updates, author synthesis,
  Task 5 completion, and Task 6 remain undone; Tasks 5 and 6 stay unchecked.
- Prepare a dedicated Task 5d handoff from this evidence before any further
  capture. Do not begin another batch, update synthesis, or start Task 6 in
  this thread.
