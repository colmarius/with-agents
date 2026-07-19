# Private YouTube Playlist Knowledge Library Plan

Add a local-only playlist knowledge workflow that reuses the repository's transcript and summary conventions without allowing private content into Astro or git. Start with a thin end-to-end slice, then backfill the configured playlists in bounded batches.

## Goals

- Discover and record playlist changes deterministically.
- Capture source-language transcripts once per video, including videos shared by several playlists.
- Make pending, unavailable, captured, summarized, and synthesis-staleness states visible.
- Support source-faithful per-video summaries, per-playlist overviews, and cross-playlist author synthesis as inspectable Markdown.
- Keep all user-specific configuration and content ignored and outside `src/`.

## Tasks

- [ ] **Task 1: Establish the private boundary and reusable transcript core**
  - Scope: `.gitignore`, `package.json`, `.agents/scripts/save-youtube-transcript.mjs`, a shared transcript module under `.agents/scripts/`, and the new generic private-playlist CLI under `.agents/scripts/`
  - Depends on: none
  - Acceptance:
    - `/.private/` is ignored before any private content is written.
    - The private CLI has a fixed `.private/youtube/` output root and refuses to initialize or write if Git does not report that root as ignored.
    - No private command can write under `src/`, and no API credential is accepted from a file or command-line argument.
    - Reusable fetch, normalization, chunking, and Markdown rendering logic is extracted without changing the behavior or output contract of `npm run youtube:transcript`.
    - Focused tests cover path containment, ignore enforcement, and the non-destructive write default.
  - Notes: Keep separate public and private entry points with fixed roots rather than adding a generic output-directory option to the public transcript command.

- [ ] **Task 2: Add private initialization and complete playlist synchronization**
  - Scope: private-playlist CLI, its focused tests, and `package.json`
  - Depends on: Task 1
  - Acceptance:
    - `npm run youtube:playlist -- init` creates an ignored empty library with private `playlists.json` and `AGENTS.md` guidance, without overwriting existing files.
    - `npm run youtube:playlist -- sync` paginates `playlistItems.list` with `maxResults=50` for every configured public playlist using `YOUTUBE_API_KEY` from the environment.
    - Normalized manifests record playlist identity, sync time, video ID, playlist position, title, video publication date when known, and privacy/availability metadata when exposed.
    - Each sync reports additions, removals, moves, retitles, and privacy changes; changed syncs append sanitized events to `changes.ndjson` and atomically replace the current manifest.
    - Initial sync is deterministic, and an unchanged second sync writes no duplicate change events.
    - Removed videos are removed only from the current playlist manifest; previously captured video directories are never deleted.
    - Errors and logs never contain the API key or full API request query strings.
  - Notes: The official API is the only enumeration backend in the first implementation. Keep the normalization boundary small enough to replace it later if necessary.

- [ ] **Task 3: Add idempotent transcript capture and useful status reporting**
  - Scope: private-playlist CLI, shared transcript module, and focused tests
  - Depends on: Task 2
  - Acceptance:
    - `npm run youtube:playlist -- capture` deduplicates by video ID across playlists and fetches only videos that need an initial or explicitly requested retry.
    - Capture uses each playlist's configured source language, runs sequentially with a small delay, and supports `--playlist`, `--limit`, and `--retry` for bounded runs.
    - `videos/<video-id>/metadata.json` records source metadata, actual language, caption kind, playlist membership, attempt time, and a normalized `pending`, `captured`, `unavailable`, or `retryable` state.
    - Successful capture writes a non-empty timestamped `transcript.md`; unavailable or retryable results never create an empty transcript.
    - Existing transcripts and summaries are never overwritten by default. Destructive transcript regeneration requires an explicit force option and a clear warning.
    - `npm run youtube:playlist -- status` reports playlist totals, transcript states, missing/draft/reviewed summaries, and missing or stale playlist/author overviews in human-readable and JSON forms.
  - Notes: Use typed transcript failures where available. Do not treat every upstream exception as permanently unavailable.

- [ ] **Task 4: Encode the editorial summary and synthesis workflow**
  - Scope: ignored `.private/youtube/AGENTS.md` and private Markdown artifacts generated or edited after `init`; committed CLI templates/tests only where required
  - Depends on: Task 3
  - Acceptance:
    - Private guidance defines frontmatter and section contracts for `summary.md`, playlist `overview.md`, and author `overview.md`.
    - Per-video summaries follow the public resource style: concise framing, timestamped key ideas, practical implications, questions/tensions, and the source link.
    - Summary metadata distinguishes source language, summary language, caption kind, and editorial status.
    - English prose derived from Italian auto-captions is labeled as translation/paraphrase and is not presented as a verbatim quotation.
    - Playlist overviews report summary coverage and separate current thesis, stable ideas, emerging ideas, revisions/tensions, and practical implications.
    - Author overviews compare playlist-level ideas while keeping explicit author claims separate from editorial synthesis.
    - Change-over-time claims use publication dates and timestamped evidence rather than playlist order.
  - Notes: Summaries and syntheses remain explicit agent/human editorial work. Do not add an LLM API or silent auto-generation to the synchronization script.

- [ ] **Task 5: Prove the private thin slice, then backfill in batches**
  - Scope: `.private/youtube/**` only, plus work-item progress artifacts
  - Depends on: Tasks 1–4
  - Acceptance:
    - The two initial private playlist configurations sync completely and an unchanged repeat sync is idempotent.
    - One video from each playlist completes the source-language transcript → English summary → playlist overview path before broad capture begins.
    - The remaining transcript capture runs in bounded batches and records unavailable/retryable videos without blocking the rest of the queue.
    - Every captured transcript receives a per-video summary or remains visibly pending in `status`; no placeholder summary is treated as complete.
    - Each playlist receives an overview after its per-video summary coverage is sufficient, and the shared author receives one cross-playlist overview.
    - `git status --short` never lists private configuration, transcripts, summaries, manifests, or overviews.
  - Notes: Do not force the full backfill into one agent context. Record batch progress and stop cleanly when upstream caption access is throttled.

- [ ] **Task 6: Validate the public repository and private workflow**
  - Scope: changed generic tooling, project checks, private command smoke checks, and work-item artifacts
  - Depends on: Tasks 1–5
  - Acceptance:
    - Focused script tests pass, including fixtures for pagination, no-op sync, playlist mutations, duplicate videos, unavailable captions, retryable failures, and secret redaction.
    - Existing single-video public transcript fetch/save behavior remains compatible.
    - `npm run check` passes.
    - `npm run build` passes without including any private files.
    - Work-item task checkboxes, `progress.md`, and `index.md` reflect the completed implementation and any remaining manual summary coverage.

## Implementation Notes

- Use video ID as the global identity and playlist manifests as the source of truth for membership/order.
- Write JSON atomically with a temporary file and rename so an interrupted sync does not destroy the prior manifest.
- Keep API response normalization separate from diffing so tests can use fixtures without network access.
- Treat title and playlist position as mutable metadata. Treat publication time as chronology when available.
- Keep the first UI as plain Markdown. Relative links between overview, summary, and transcript files are enough for local inspection.
- Preserve captured content when a video disappears from a playlist; removal from YouTube is useful historical information, not a deletion instruction.
- Check `git status` after every smoke run. The private CLI should make the safe path automatic, but verification remains valuable.

## Constraints / Decisions

- Private data lives only under `.private/youtube/`, which is ignored by the public repository and outside Astro's content loaders.
- Playlist IDs, local labels, author grouping, and reading state live only in ignored private configuration.
- The official YouTube Data API is the initial playlist enumerator; `yt-dlp` is deferred.
- Transcript capture uses the configured source language. Summary language is independent and does not alter the source transcript.
- Discovery and capture are deterministic tooling; summaries and syntheses are reviewable editorial artifacts.
- No private Astro route, scheduler, ASR fallback, embedding index, semantic search, or automated LLM API belongs in the first implementation.
- `.gitignore` protects against publication but not local data loss. Private backup/versioning is a later user decision.

## Acceptance Criteria

- A manual sync clearly identifies newly added and otherwise changed playlist entries without reprocessing unchanged videos.
- Each unique video has at most one local transcript and summary regardless of how many playlists include it.
- The status command makes incomplete capture, summary, and synthesis work obvious.
- Per-video summaries and playlist/author overviews remain source anchored and explicit about translation and editorial synthesis.
- No private content is visible to git, Astro collections, production build output, or the public resource manifest.

## Verification

- Focused Node tests for the generic playlist/transcript scripts.
- `git check-ignore -q .private/youtube/playlists.json`
- `npm run youtube:playlist -- status`
- Dry-run and repeated sync against a fixture or test playlist to confirm idempotency and sanitized diffs.
- `npm run youtube:transcript -- fetch <sample-video-url> --lang <source-language> --json`
- `git status --short --branch`
- `npm run check`
- `npm run build`
