# Task 3 Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (implement Task 3 only; also read Implementation Notes and Constraints)
3. .agents/work/tooling/youtube-knowledge-library/research.md (especially sync/capture semantics and derived states)
4. .agents/work/tooling/youtube-knowledge-library/progress.md
5. .agents/scripts/lib/youtube-library-core.mjs
6. .agents/scripts/lib/youtube-transcript-core.mjs
7. .agents/scripts/youtube-library.mjs
8. .agents/scripts/youtube-library.test.mjs and .agents/scripts/youtube-transcript-core.test.mjs
9. src/content/youtube/AGENTS.md and src/content/youtube/catalog.json

Goal:
Implement idempotent, sequential transcript capture and human-readable status reporting. This is Task 3 only. Do not write summaries, overviews, author files, editorial guidance, or anything from Tasks 4–6.

Current state:
- Task 2 is complete in commits 6943c7b..e7c33d8. Sync is fully implemented with fixture tests; capture and status are exit-2 placeholders.
- No playlist manifests exist under src/content/youtube/playlists/, and no YOUTUBE_API_KEY is available. Complete and verify Task 3 with temporary fixture manifests and injected transcript results. Do not run real sync/capture or fabricate manifests, video directories, transcripts, or metadata under src/content/youtube/. Real capture/status smoke is deferred to the Task 5/6 thin slice.
- youtube-transcript-plus 2.0.0 exports typed errors whose `name` values are usable: YoutubeTranscriptTooManyRequestError, YoutubeTranscriptVideoUnavailableError, YoutubeTranscriptDisabledError, YoutubeTranscriptNotAvailableError, YoutubeTranscriptNotAvailableLanguageError, YoutubeTranscriptInvalidLangError, and YoutubeTranscriptInvalidVideoIdError.
- `fetchVideo` currently converts caught typed errors into the `transcriptUnavailable` string. Task 3 must surface the typed name without changing the existing youtube:transcript payload.

Implement only this slice:

1. Surface and classify typed transcript failures
   - In youtube-transcript-core.mjs, add `transcriptErrorName` to failure returns that catch exceptions, using the caught `error.name`. Give a strict language mismatch that throws no exception a distinct marker such as `LanguageUnavailable`.
   - Do not change existing fields or transcriptUnavailable strings. Do not change save-youtube-transcript.mjs. Its JSON and human payloads select explicit fields and must remain exactly compatible. Add focused regression coverage.
   - Classify in the library capture path:
     - Persisted unavailable: YoutubeTranscriptVideoUnavailableError, YoutubeTranscriptDisabledError, YoutubeTranscriptNotAvailableError, YoutubeTranscriptNotAvailableLanguageError, and LanguageUnavailable.
     - Transient, with no persisted state: YoutubeTranscriptTooManyRequestError, network/unknown exceptions, and empty-caption results.
     - Fatal configuration/invariant errors, with no persisted state and exit 1: YoutubeTranscriptInvalidLangError and YoutubeTranscriptInvalidVideoIdError.
   - Unknown failures default to transient, never permanently unavailable.
   - Record this package caveat in a short code comment and progress.md: exhausted watch-page HTTP failures, including some 5xx failures, can surface as YoutubeTranscriptVideoUnavailableError; `--retry` is the recovery path for an incorrectly persistent classification.

2. Build a deterministic capture queue
   - Implement `npm run youtube:library -- capture [--playlist <slug>]... [--limit <n>] [--retry] [--force]`.
   - Select playlists in catalog order using existing selection behavior. Unknown slugs exit 1.
   - Read each selected playlist's manifest.json. A missing manifest is a clear fatal error naming the playlist and telling the user to run sync first, before any transcript fetch.
   - Iterate selected playlists in catalog order and entries in manifest position order. Skip entries with `available: false`. Dedupe globally by video ID; first occurrence fixes queue order, later occurrences only contribute membership/language checks.
   - For each available video, collect distinct transcriptLanguage values from all selected member playlists. If a video has conflicting languages, fail the whole run before any fetch with a deterministic error naming the video, playlist slugs, and languages. Never choose one silently.
   - Apply mode filtering from section 3, then apply `--limit`. Limit must be a positive integer; invalid/missing values exit 1.
   - Fetch sequentially with one fixed module-level inter-video delay (for example 1500 ms), between attempts only and never after the last. Do not add concurrency, backoff, or a delay option.
   - Keep boundaries injectable: `fetchVideoImpl` (default fetchVideo), `sleep`, `now`, `manifestPathForPlaylist`, and video file path resolution rooted through libraryPath. Tests must use no network, no real timers, and temporary roots.

3. Derived state and mode precedence
   - Never store mutable captured/pending status fields:
     - captured: videos/<id>/transcript.md exists;
     - unavailable: videos/<id>/metadata.json exists and contains an `unavailable` record;
     - pending: available manifest member with neither of those.
   - Default capture processes pending only. It skips existing transcripts and persisted unavailable records without fetching.
   - `--retry` processes only persisted unavailable records that have no transcript. It does not include normal pending videos.
   - `--force` destructively re-fetches selected videos regardless of transcript/unavailable state.
   - Reject `--force` with `--retry` (exit 1).
   - Require `--force` to be bounded by at least one `--playlist` or `--limit`; bare whole-corpus force exits 1.
   - Before force fetching, print an explicit warning with the count of existing transcripts that will be overwritten.
   - Force may overwrite transcript.md and metadata.json only. It must never touch or replace summary.md or another sibling file.

4. Capture outcomes and file contracts
   - All paths must remain under libraryPath(`videos/<video-id>/...`).
   - Success requires transcriptAvailable and non-empty segments. Render transcript.md with the existing renderTranscriptMarkdown and coarse timestamp chunks. Use title from fetched metadata, then manifest title, then `YouTube video <id>`. Frontmatter fields: title, sourceUrl, videoId, capturedAt from injected now, channel, language, kind, and durationSeconds. Omit summarySlug, series, and episode.
   - Write transcript.md through writeFileExclusive; pass force only for explicit `--force`.
   - On success, atomically write metadata.json with capture provenance only:

     {
       "videoId": "abc123def45",
       "capturedAt": "2026-07-20T00:00:00.000Z",
       "requestedLanguage": "it",
       "language": "it-IT",
       "kind": "auto-generated"
     }

   - On persisted unavailable, atomically write metadata.json only and never create an empty transcript:

     {
       "videoId": "abc123def45",
       "attemptedAt": "2026-07-20T00:00:00.000Z",
       "requestedLanguage": "it",
       "availableLanguages": ["en"],
       "unavailable": {
         "errorName": "LanguageUnavailable",
         "detail": "<existing sanitized transcriptUnavailable string>"
       }
     }

   - metadata.json must have exactly one of these shapes, discriminated by `unavailable`. Never store playlist/author IDs, slugs, positions, derived state labels, or relationship data.
   - A successful retry/force atomically replaces an unavailable record with provenance. Reuse/generalize the Task 2 atomic JSON writer rather than creating competing writers.
   - Transient failure writes nothing and leaves the video pending; report it and continue. YoutubeTranscriptTooManyRequestError writes nothing and stops the remaining queue immediately, reporting how many remain.
   - Fatal typed errors write nothing and stop the run.
   - Exit 0 when every attempted video succeeded or there was nothing to do; exit 2 when a completed run has at least one unavailable/transient outcome; exit 1 for usage/config/fatal errors.

5. Human-readable status
   - Implement `npm run youtube:library -- status` with no options and no JSON mode.
   - For each playlist in catalog order report:
     - manifest totals: entries, available, and manifest-unavailable/private/deleted;
     - derived transcript states among available entries: captured, pending, and unavailable-recorded, listing unavailable video IDs;
     - summary state among captured videos: missing summary.md, draft/not-reviewed, and reviewed;
     - overview.md as missing or stale when any in-scope video with summary.md is absent from `coveredVideoIds`, listing missing IDs.
   - For each author relationship report playlist slugs, deduped video total, aggregate captured/pending/unavailable states, and authors/<author-slug>.md missing/stale against summarized deduped videos.
   - A missing playlist manifest is `not synced`, not a command failure. Status exits 0 when it can report; malformed/unreadable data exits 1.
   - Add only a minimal tolerant frontmatter reader for status. Parse a leading `---` block for `status` as a string scalar and `coveredVideoIds` as an inline list or block dash list. Missing/unrecognized/malformed data yields undefined or empty, not a new dependency or strict validation.
   - Treat summary `status: reviewed` as reviewed; any missing or unrecognized status is draft/not-reviewed. Task 4 still owns the full editorial contracts.

Focused tests:
- Use built-in node:test, temporary directories, injected fetch/sleep/time/path boundaries, and no network.
- Core regression: transcriptErrorName appears on caught/mismatch failure paths while the existing youtube:transcript payload fields remain unchanged.
- Queue: global dedupe/first-seen order, unavailable manifest skips, selected subset, positive limit, missing manifest error, and conflicting languages before zero fetch calls.
- Modes: default skips captured/unavailable; retry selects only unavailable; force+retry rejected; unbounded force rejected; force warning emitted.
- Success: non-empty timestamped transcript plus provenance metadata; second default run fetches/writes nothing.
- Unavailable: every classified error and LanguageUnavailable writes metadata only, is skipped by default, is retried with --retry, and is replaced after successful retry.
- Transient: TooManyRequest, network/unknown, and empty captions write nothing and remain pending; TooManyRequest stops remaining attempts.
- Fatal typed errors stop with no writes and exit 1.
- Force overwrites transcript/metadata while sibling summary.md remains byte-identical.
- Delay is called with the fixed value between attempts only.
- Exit mapping covers success, partial, and fatal runs.
- Status fixtures cover captured/pending/unavailable, missing/draft/reviewed summaries, missing/stale overview/author files, not-synced playlists, relationship dedupe, and option rejection.
- Frontmatter reader covers inline list, block list, missing block, and malformed input.

Non-goals (Tasks 4–6—do not start these):
- No summary, overview, or author files; no editorial templates/guidance/frontmatter contract beyond the tolerant two-field reader.
- No machine-readable status, capture dry-run, concurrency, retry/backoff framework, configurable delay, caching, or dependency.
- No sync/manifest schema changes and no youtube:transcript CLI contract changes.
- No real network capture and no files under src/content/youtube/playlists/ or src/content/youtube/videos/.
- No Astro collection/route/component/layout changes.

Allowed files:
- .agents/scripts/youtube-library.mjs
- .agents/scripts/lib/youtube-library-core.mjs, or one new small capture/status module under .agents/scripts/lib/ if it creates a clearer boundary
- .agents/scripts/lib/youtube-transcript-core.mjs (transcriptErrorName surfacing only)
- .agents/scripts/youtube-library.test.mjs and .agents/scripts/youtube-transcript-core.test.mjs
- .agents/work/tooling/youtube-knowledge-library/plan.md
- .agents/work/tooling/youtube-knowledge-library/progress.md
- .agents/work/tooling/youtube-knowledge-library/index.md
- save-youtube-transcript.mjs, package.json, catalog.json, and src/content/youtube/AGENTS.md are not expected to change; touch only for a demonstrated Task 3 requirement and record why.

Progress contract:
- Check off Task 3 only when all fixture-based acceptance criteria pass. Do not mark Tasks 4–6 partially complete.
- Append a dated Task 3 progress entry covering implementation, verification, the VideoUnavailable classification caveat, blockers, and next action.
- Keep index.md Status `in-progress`, update Updated, retain handoff links, and set Next Action to preparing/implementing Task 4.
- Record real capture/status smoke as deferred to Tasks 5/6 because manifests and an API key are absent. Do not fabricate corpus files.

Verification (run and record all):
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run youtube:library -- help` documents capture/status behavior.
- `npm run youtube:library -- capture`: exit 1 with a clear not-synced/run-sync-first message and no writes.
- `npm run youtube:library -- status`: exit 0 and reports both playlists not synced.
- `npm run youtube:library -- capture --force`: exit 1 due to missing scope guard.
- `npm run youtube:library -- status --json`: exit 1 because status accepts no options.
- Optional network regression when available: `npm run youtube:transcript -- fetch https://www.youtube.com/watch?v=8gg-oJr4dTY --lang it --json`; existing payload shape/exit behavior remains compatible.
- `npx biome check .agents/scripts`
- `npm run lint:fix`; review changes and do not include unrelated formatting. The known pre-existing diagnostics under .agents/references/dot-agents/site/ may remain and should only be recorded.
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` finds no registration/import.
- `rg -n "source-only" dist/` finds nothing.
- `git status --short --branch` shows no unintended files and no changes under src/content/youtube/.

Stop conditions:
- Typed classification cannot be added without changing the youtube:transcript payload or adding a dependency.
- Completion appears to require real manifests, a real API key, or live YouTube access; record/defer instead of fabricating.
- Work expands into Task 4 editorial contracts/content or Tasks 5–6.
- A requirement needs files outside the allowed list.
- npm run check or npm run build fails for unrelated reasons; report instead of changing unrelated code.

Commit guidance:
- Commit implementation separately from work-item progress updates, following the Task 1/2 pattern.
- Run git status before staging. Do not include node_modules/, dist/, .astro/, temporary fixtures, or unrelated changes.

Expected final response:
- Capture queue, mode precedence, file outcomes, and exit behavior.
- Metadata shapes and typed failure classification, including the VideoUnavailable caveat.
- Status report and tolerant frontmatter reader scope.
- Focused test count and all verification results.
- Confirmation that no src/content/youtube/ corpus files were created and real smoke is deferred.
- Commits and work-item updates.
- Deviations/blockers.
- Remaining next action: Task 4—editorial summary and synthesis workflow.
```
