# YouTube Knowledge Library Plan

Add a committed, source-only YouTube knowledge library that reuses the repository's transcript and summary conventions without rendering the library through Astro. Start with a thin end-to-end slice, then backfill configured playlists in bounded, reviewable commits.

## Goals

- Discover and record playlist changes deterministically.
- Capture source-language transcripts once per video, including videos shared by several playlists.
- Make pending, unavailable, captured, summarized, and synthesis-staleness states visible.
- Support source-faithful per-video summaries, per-playlist overviews, and cross-playlist author synthesis as inspectable Markdown.
- Keep the generic catalog, manifests, transcripts, summaries, and syntheses committed under one source-only tree.
- Ensure the library remains absent from Astro collections, routes, production bundles, and the public resource manifest.

## Tasks

- [ ] **Task 1: Establish the committed library boundary and reusable transcript core**
  - Scope: `src/content/youtube/AGENTS.md`, `src/content/youtube/catalog.json`, `package.json`, `.agents/scripts/save-youtube-transcript.mjs`, a shared transcript module under `.agents/scripts/`, and the new generic library CLI under `.agents/scripts/`
  - Depends on: none
  - Acceptance:
    - `src/content/youtube/` is the fixed library root with a documented author/playlist/video structure and a `publication: "source-only"` catalog marker.
    - `catalog.json` provides generic author, playlist, relationship, and source/summary-language configuration for the initial targets.
    - The library is not registered in `src/content.config.ts` and is not imported by any route, component, or layout.
    - No API credential is accepted from a file or command-line argument.
    - Reusable fetch, normalization, chunking, and Markdown rendering logic is extracted without changing the output contract of `npm run youtube:transcript`.
    - Library capture matches the configured language strictly. If it is unavailable, the command records the requested and available languages instead of silently selecting another track or misreporting caption kind.
    - The new `npm run youtube:library` entry point always writes within `src/content/youtube/`; path containment and non-destructive writes have focused tests.
  - Notes: Keep the existing public-sidecar and new library entry points separate rather than adding a user-controlled output directory. Do not download video/audio media.

- [ ] **Task 2: Add complete playlist synchronization**
  - Scope: library CLI, `src/content/youtube/catalog.json`, playlist manifests, focused tests, and `package.json`
  - Depends on: Task 1
  - Acceptance:
    - `npm run youtube:library -- sync` paginates `playlistItems.list` with `maxResults=50` for every configured public playlist using `YOUTUBE_API_KEY` from the environment.
    - Normalized manifests record playlist identity, video ID, playlist position, title, video publication date when known, and privacy/availability metadata when exposed; volatile sync timestamps are excluded.
    - Each sync reports additions, removals, moves, retitles, and privacy changes, then atomically replaces the current manifest only when meaningful content changed.
    - Git history of `manifest.json` is the only persisted playlist change log; no parallel event log is maintained.
    - Initial sync is deterministic, and an unchanged second sync writes zero bytes and leaves `git status` clean.
    - Deleted/private placeholders are normalized as unavailable and skipped by transcript capture.
    - Removed videos are removed only from the current playlist manifest; previously captured video directories are never deleted.
    - Errors and logs never contain the API key or full API request query strings.
  - Notes: The official API is the only enumeration backend in the first implementation. Keep the normalization boundary small enough to replace it later if necessary.

- [ ] **Task 3: Add idempotent transcript capture and useful status reporting**
  - Scope: library CLI, shared transcript module, `src/content/youtube/videos/**`, and focused tests
  - Depends on: Task 2
  - Acceptance:
    - `npm run youtube:library -- capture` deduplicates by video ID across playlists and fetches only videos that need an initial or explicitly requested retry.
    - Capture uses each playlist's configured source language, runs sequentially with a small delay, and supports `--playlist`, `--limit`, and `--retry` for bounded runs.
    - Playlist and author relationships are derived from manifests and `catalog.json`; they are not copied into per-video metadata.
    - `captured` and `pending` are derived from manifest membership, transcript existence, and any persisted unavailable record rather than stored as mutable state fields.
    - `videos/<video-id>/metadata.json` records only capture-specific metadata or a non-transient unavailable reason, including requested/available language information and attempt time.
    - Successful capture writes a non-empty timestamped `transcript.md`; unavailable or transient failures never create an empty transcript.
    - Transient failures write no persisted failure state and remain pending for the next normal capture run; `--retry` is reserved for re-attempting recorded unavailable videos.
    - Existing transcripts and summaries are never overwritten by default. Destructive transcript regeneration requires an explicit force option and a clear warning.
    - `npm run youtube:library -- status` reports playlist totals, derived author relationships and transcript states, missing/draft/reviewed summaries, and missing or stale playlist/author overviews in human-readable form.
  - Notes: Use typed transcript failures where available. Do not treat every upstream exception as permanently unavailable or add machine-readable status output until a consumer needs it.

- [ ] **Task 4: Encode the editorial summary and synthesis workflow**
  - Scope: `src/content/youtube/AGENTS.md`, committed video summaries, playlist overviews, and author files; CLI templates/tests only where required
  - Depends on: Task 3
  - Acceptance:
    - Scoped guidance defines frontmatter and section contracts for video `summary.md`, playlist `overview.md`, and flat author files under `authors/<author-slug>.md`.
    - Per-video summaries follow the public resource style: concise framing, timestamped key ideas, practical implications, questions/tensions, and the source link.
    - Summary metadata distinguishes source language, summary language, caption kind, and editorial status.
    - English prose derived from Italian auto-captions is labeled as translation/paraphrase and is not presented as a verbatim quotation.
    - Playlist overviews report summary coverage and separate current thesis, stable ideas, emerging ideas, revisions/tensions, and practical implications.
    - Author files track source identities and compare playlist-level ideas while keeping explicit author claims separate from editorial synthesis; author identity is configured explicitly and not inferred from uploader/channel metadata.
    - Change-over-time claims use publication dates and timestamped evidence rather than playlist order.
    - Playlist overview and author frontmatter record `coveredVideoIds`, which `status` uses to report missing/stale synthesis.
  - Notes: Summaries and syntheses remain explicit agent/human editorial work. Do not add an LLM API or silent auto-generation to the synchronization script.

- [ ] **Task 5: Prove the source-only thin slice, then backfill in batches**
  - Scope: `src/content/youtube/**` only, plus work-item progress artifacts
  - Depends on: Tasks 1–4
  - Acceptance:
    - The two initial playlist configurations sync completely and an unchanged repeat sync is idempotent.
    - One video from each playlist completes the source-language transcript → English summary → playlist overview path before broad capture begins.
    - The remaining transcript capture runs in bounded batches, records unavailable videos, and leaves transient failures pending without blocking the rest of the queue.
    - Every captured transcript receives a per-video summary or remains visibly pending in `status`; no placeholder summary is treated as complete.
    - Each playlist receives an overview after its per-video summary coverage is sufficient, and the shared author receives one cross-playlist synthesis file.
    - Transcript and summary batches are committed as normal source changes without adding public resource-manifest entries or routes.
  - Notes: Do not force the full backfill into one agent context or commit. Record batch progress and stop cleanly when upstream caption access is throttled.

- [ ] **Task 6: Validate the source-only publication boundary and workflow**
  - Scope: changed generic tooling, project checks, library command smoke checks, build output, and work-item artifacts
  - Depends on: Tasks 1–5
  - Acceptance:
    - Built-in `node --test` checks the pure playlist normalization, playlist diffing, and path-containment functions without adding a test framework dependency.
    - Existing single-video public transcript fetch/save behavior remains compatible.
    - A real-playlist thin-slice smoke run covers pagination, no-op sync, duplicate-video deduplication, strict language handling, and unavailable/transient caption behavior.
    - `npm run check` passes.
    - `npm run build` passes, exposes no library route, and does not include the catalog's source-only marker in `dist/`.
    - `src/content.config.ts`, routes, components, and layouts do not register or import `src/content/youtube/`.
    - Work-item task checkboxes, `progress.md`, and `index.md` reflect the completed implementation and any remaining manual summary coverage.

## Implementation Notes

- Use video ID as the global identity and playlist manifests as the source of truth for membership/order.
- Use stable author IDs from `catalog.json` to group playlists and produce cross-playlist synthesis.
- Write JSON atomically with a temporary file and rename so an interrupted sync does not destroy the prior manifest.
- Keep API response normalization separate from diffing so tests can use fixtures without network access.
- Treat title and playlist position as mutable metadata. Treat publication time as chronology when available.
- Keep the first inspection surface as plain Markdown. Relative links between author files, playlist overviews, summaries, and transcripts are enough.
- Preserve captured content when a video disappears from a playlist; removal from YouTube is useful historical information, not a deletion instruction.
- Commit source artifacts in reviewable batches and verify the production boundary after each structural change.

## Constraints / Decisions

- Library data lives under committed `src/content/youtube/` and is source-visible in the public repository.
- `catalog.json` is the machine-readable source of truth for tracked authors, playlists, relationships, and language preferences.
- The library is source-only: it must not be an Astro collection, route dependency, production bundle, or public resource-manifest source.
- The official YouTube Data API is the initial playlist enumerator; `yt-dlp` is deferred.
- Transcript capture uses the configured source language. Summary language is independent and does not alter the source transcript.
- Discovery and capture are deterministic tooling; summaries and syntheses are reviewable editorial artifacts.
- No Astro route, scheduler, media download, ASR fallback, embedding index, semantic search, or automated LLM API belongs in the first implementation.

## Acceptance Criteria

- A manual sync clearly identifies newly added and otherwise changed playlist entries without reprocessing unchanged videos.
- Each unique video has at most one local transcript and summary regardless of how many playlists include it.
- The status command makes incomplete capture, summary, and synthesis work obvious.
- Per-video summaries and playlist/author overviews remain source anchored and explicit about translation and editorial synthesis.
- Library source is committed but absent from Astro collections, rendered routes, production bundles, and the public resource manifest.

## Verification

- Focused Node tests for the generic playlist/transcript scripts.
- `npm run youtube:library -- status`
- Dry-run and repeated sync against a fixture or test playlist to confirm idempotency and sanitized diffs.
- `npm run youtube:transcript -- fetch <sample-video-url> --lang <source-language> --json`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` should find no registration/import.
- `git status --short --branch`
- `npm run check`
- `npm run build`
- Verify the catalog's `publication: "source-only"` marker is absent from `dist/`.
