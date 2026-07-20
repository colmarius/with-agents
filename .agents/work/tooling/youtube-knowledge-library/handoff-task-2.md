# Task 2 Handoff Prompt

```text
You are continuing the work item at:

.agents/work/tooling/youtube-knowledge-library/

Read first, in order:
1. .agents/work/tooling/youtube-knowledge-library/index.md
2. .agents/work/tooling/youtube-knowledge-library/plan.md (implement Task 2 only; also read Implementation Notes and Constraints)
3. .agents/work/tooling/youtube-knowledge-library/research.md (especially playlist enumeration and sync/capture semantics)
4. .agents/work/tooling/youtube-knowledge-library/progress.md
5. .agents/scripts/lib/youtube-library-core.mjs
6. .agents/scripts/lib/youtube-transcript-core.mjs
7. .agents/scripts/youtube-library.mjs
8. .agents/scripts/youtube-library.test.mjs
9. src/content/youtube/AGENTS.md and src/content/youtube/catalog.json

Goal:
Implement complete, deterministic playlist synchronization through the official YouTube Data API. This is Task 2 only. Fetch configured playlists, normalize them into source-only manifests, report meaningful changes, and atomically replace a manifest only when its serialized content changed. Do not start capture, status, editorial content, or Tasks 3–6.

Current state:
- Task 1 is complete in commits 74afdaf..e0c9cac. The worktree was clean when this handoff was prepared.
- src/content/youtube/ is the fixed source-only root. catalog.json configures author antirez and two Italian-language playlists.
- `npm run youtube:library` validates the fixed catalog and currently returns exit 2 placeholders for sync, capture, and status.
- No playlist manifests or network synchronization code exist yet.
- Reuse catalog validation, `libraryPath`, path containment, and the existing Node test style.
- `writeFileExclusive` is correct for non-destructive transcript creation but is not an atomic manifest replacement helper. Add a separate small manifest/JSON writer for Task 2.
- The CLI top-level catch prints an error stack, so API errors must be sanitized when constructed. Never let a key or full request query string enter an error message.
- YOUTUBE_API_KEY is not currently set in the implementation environment. Complete and verify Task 2 with fixtures and injected fetch behavior. Do not block code completion on a real API smoke run.

Implement only this slice:

1. Playlist API client and pagination
   - Implement `npm run youtube:library -- sync` with the official YouTube Data API v3 `playlistItems.list` endpoint.
   - Request `part=snippet,contentDetails,status`, `maxResults=50`, the configured playlist ID, an optional page token, and the API key.
   - Follow `nextPageToken` until all pages have been fetched.
   - Read the key only from `process.env.YOUTUBE_API_KEY`. A missing or empty key must produce a clear error naming the environment variable, exit 1, and perform no network request.
   - Keep page fetching injectable (for example, `fetchImpl` or a `fetchPage` dependency defaulting to real fetch) so pagination and errors can be tested without network access.
   - Fail fast on a playlist error. For non-OK responses, parse a YouTube API reason/message when available, but throw only a sanitized message such as `playlistItems.list failed for playlist <id> page <n>: HTTP 403 (quotaExceeded)`. Never include the full URL, search parameters, `key=`, or the key value in logs, errors, or stacks.

2. Deterministic normalization and manifest schema
   - Keep API-response normalization pure and separate from fetch/pagination and diffing.
   - Write each manifest to `src/content/youtube/playlists/<playlist-slug>/manifest.json` through `libraryPath(...)`.
   - Use this minimal schema and stable key order:

     {
       "playlistId": "PL...",
       "entries": [
         {
           "videoId": "abc123def45",
           "position": 0,
           "title": "Video title",
           "publishedAt": "2025-01-01T00:00:00Z",
           "privacyStatus": "public",
           "available": true
         }
       ]
     }

   - Sort entries by numeric playlist position. Serialize with `JSON.stringify(value, null, 2)` plus one trailing newline so identical data produces identical bytes.
   - `publishedAt` is the video publication date from `contentDetails.videoPublishedAt`; omit it when unavailable. Do not store the playlist-add timestamp from `snippet.publishedAt`.
   - Exclude fetch/sync timestamps, etags, page metadata, playlist-add dates, and other volatile API fields.
   - Keep playlist slug/title/languages in catalog.json; the manifest needs only `playlistId` plus normalized entries.
   - Normalize private/deleted placeholders as `available: false` with `unavailableReason: "private" | "deleted"`; preserve safe identity/position/title/privacy information exposed by the response. Base detection on verified API/documented fixture shapes rather than broad title-only assumptions. These entries must be recognizable for Task 3 to skip later.

3. Manifest diff and reporting
   - Add a pure diff function that reports additions, removals, moves (position changed), retitles, and privacy/availability changes.
   - Compare entries by video ID. Keep the output deterministic and concise.
   - Print a per-playlist human-readable report, including an explicit `no changes` result when the normalized manifest is unchanged.
   - Do not persist a parallel event log or `changes.ndjson`; git history of manifest.json is the only persisted change log.
   - A removal updates only the current manifest. Never inspect, modify, or delete `src/content/youtube/videos/**`.

4. Atomic no-op-safe manifest writes
   - Add one small atomic JSON/manifest replacement helper. Serialize before writing; if the existing bytes exactly match, perform no write and report unchanged.
   - For new or changed content, create the parent directory, write a uniquely named temporary file in that same directory, then rename it over the target. Clean up the temp file if replacement fails.
   - `--dry-run` must fetch, normalize, diff, and report but write nothing.
   - Do not repurpose `writeFileExclusive`; transcript and manifest write semantics are intentionally different.

5. CLI surface
   - `sync`: synchronize every configured playlist.
   - `sync --playlist <slug>`: select one configured playlist; allow the option to be repeated for a subset. Validate selected slugs against the loaded catalog before checking the API key, so an unknown slug reports clearly even in an environment without a key.
   - `sync --dry-run`: report without writing; support it with all-playlist and selected-playlist sync.
   - Unknown/missing option values and unknown playlist slugs: error and exit 1.
   - Keep all credential/config/output path options rejected without echoing their values.
   - `capture` and `status` remain explicit Task 3 placeholders with exit 2 and accept no options. Update stale Task 1 placeholder wording, but do not implement either command.
   - `sync` exits 0 whether manifests changed or not, and 1 on any error.

Focused tests:
- Use built-in `node:test` only and no network.
- Extend .agents/scripts/youtube-library.test.mjs with fixtures and temporary directories.
- Cover normal entry normalization, missing video publication date, private placeholder, and deleted placeholder; confirm volatile fields are excluded.
- Cover two-page pagination, joined order, `maxResults=50`, and page token handling through injected fetch behavior.
- Cover non-OK/page-2 errors and assert the thrown/loggable message contains neither the key value, `key=`, nor a full query string.
- Cover every diff class: addition, removal, move, retitle, and privacy/availability change; identical manifests produce an empty diff.
- Cover deterministic serialization.
- Cover atomic creation/replacement and a byte-identical no-op. Demonstrate the no-op does not change file contents or modification time.
- Cover dry-run writing nothing.
- Cover sync argument parsing for all/selected playlists, repeatable `--playlist`, and `--dry-run`; keep capture/status option rejection and secret-free errors covered.

Non-goals (Tasks 3–6—do not start these):
- No transcript fetching, batch capture, retry state, metadata.json, or videos/** writes.
- No status implementation or machine-readable status output.
- No summaries, playlist overviews, author synthesis, or other editorial content.
- No changes.ndjson, sync timestamps, retry/backoff framework, concurrency, scheduler, yt-dlp, ASR, or LLM API.
- No Astro collection/route/component/layout changes.

Allowed files:
- .agents/scripts/youtube-library.mjs
- .agents/scripts/lib/youtube-library-core.mjs, or one new small sync-focused module under .agents/scripts/lib/ if it creates a clearer boundary
- .agents/scripts/youtube-library.test.mjs
- src/content/youtube/playlists/<slug>/manifest.json only if a real keyed sync is actually run
- .agents/work/tooling/youtube-knowledge-library/plan.md
- .agents/work/tooling/youtube-knowledge-library/progress.md
- .agents/work/tooling/youtube-knowledge-library/index.md
- package.json and src/content/youtube/catalog.json are not expected to change; touch only for a demonstrated Task 2 requirement and record why.

Progress contract:
- Check off Task 2 in plan.md only when all code and fixture-based acceptance criteria are met.
- Append a dated Task 2 entry to progress.md with changes, verification, blockers, and next action.
- Keep index.md Status `in-progress`, update Updated if needed, retain the progress link, update the Handoff artifact if a Task 3 handoff already exists, and set Next Action to Task 3.
- Do not mark Tasks 3–6 complete or partially complete.
- If no API key exists, record that the real-API smoke is deferred to the Task 5/6 thin slice; this does not block Task 2 when fixture tests prove the implementation.

Verification (run and record all):
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run youtube:library -- help`
- `npm run youtube:library -- sync` without a key: exit 1 with a clear YOUTUBE_API_KEY message and no request URL/secrets.
- `npm run youtube:library -- sync --playlist nope` without a key: exit 1 with an unknown-slug message before the missing-key check.
- `npx biome check .agents/scripts src/content/youtube/catalog.json package.json`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` finds no registration/import.
- `rg -n "source-only" dist/` finds nothing.
- `git status --short --branch` shows no unintended files.
- Run `npm run lint:fix` as required by the repository, review its changes, and do not include unrelated formatting. The Task 1 baseline had unrelated pre-existing diagnostics under .agents/references/dot-agents/site/; record them if they remain.

Conditional real smoke only when YOUTUBE_API_KEY is available:
- Run `npm run youtube:library -- sync` to create/update both manifests and report additions.
- Capture `git status --short`, rerun the same sync, and verify the second run reports no changes and does not alter the captured status or manifest mtimes/content.
- After the initial manifests are committed, another unchanged sync should leave the worktree clean.
- If the key is absent, do not fabricate manifests; record the deferred smoke in progress.md.

Stop conditions:
- The implementation requires a credential outside the YOUTUBE_API_KEY environment variable.
- A correct private/deleted normalization cannot be supported without guessing at an unverified response shape; keep fixtures conservative and record the open question rather than broadening detection unsafely.
- A requirement needs files outside the allowed list or would touch videos/**.
- The work expands into capture, status, editorial content, or Tasks 3–6.
- npm run check or npm run build fails for reasons unrelated to this task; record and report rather than fixing unrelated code.

Commit guidance:
- Commit logical implementation changes separately from work-item progress, following the existing Task 1 pattern.
- Run `git status --short --branch` before staging. Do not include node_modules/, dist/, .astro/, temporary files, or unrelated changes.

Expected final response:
- Summary of playlist synchronization behavior and files changed.
- Manifest schema and private/deleted normalization decisions.
- CLI options and exit behavior.
- Focused test count and every verification result.
- Whether a real API smoke ran or was deferred and why.
- Commits created and work-item updates made.
- Any deviation from this handoff.
- Remaining next action: Task 3—idempotent transcript capture and status reporting.
```
