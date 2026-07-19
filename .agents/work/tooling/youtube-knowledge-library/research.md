# YouTube Knowledge Library Research

## Desired Outcome

- Track multiple public YouTube playlists in a committed, reusable source library without rendering that library on the site.
- Detect additions, removals, reordering, title changes, and unavailable/private entries across syncs.
- Capture each video once even when it appears in several playlists.
- Keep source-language transcripts and source-faithful English summaries that are easy to inspect as Markdown.
- Keep explicit author records and maintain a concise synthesis for each playlist and author that separates durable ideas, emerging ideas, revisions, tensions, and editorial interpretation.

The current target corpus has 93 playlist entries across two playlists. A sampled video from each playlist exposes Italian captions but no English captions. The existing transcript command fails clearly when it requests English and succeeds with `--lang it`, so source and summary languages must be modeled separately.

## Existing Repository Capabilities

- `.agents/scripts/save-youtube-transcript.mjs` fetches metadata and captions for one video through `youtube-transcript-plus`, normalizes them into coarse timestamped chunks, and writes Markdown.
- The existing command writes committed sidecars under `src/content/transcripts/`. Those files are not declared as an Astro collection and are not directly consumed by site code.
- `src/content/summaries/**` is loaded by Astro and linked to the public resource manifest by `resourceId`. Library summaries must not use that collection or public manifest unless they are deliberately promoted for publication later.
- `src/content.config.ts` currently loads only posts and public summaries. A sibling `src/content/youtube/` tree remains source-only unless code explicitly imports or registers it.
- Public resource summaries already provide the useful editorial pattern: concise framing, timestamped key themes, and a source link. Library summaries can reuse that style without requiring `resourceId` or public routing.
- Committed files in this public repository remain readable on GitHub. “Source-only” means absent from the rendered site, not access-controlled.

## Playlist Enumeration

Use the official YouTube Data API v3 `playlistItems.list` endpoint for the first implementation:

- `playlistId` identifies the playlist.
- `maxResults=50` plus `nextPageToken` retrieves the complete list.
- `snippet`, `contentDetails`, and `status` provide video ID, title, playlist position, video publication time, and available privacy metadata.
- Each request costs one quota unit, so complete syncs of the current playlists are inexpensive.
- `YOUTUBE_API_KEY` must come from the environment and must never be written to config, logs, errors, or request snapshots.

Reference: <https://developers.google.com/youtube/v3/docs/playlistItems/list>

`yt-dlp --flat-playlist --dump-single-json` can enumerate playlists without downloading videos and without an API key. It is a reasonable fallback if API-key setup becomes unacceptable, but supporting two enumeration backends would add normalization and testing work. Defer it until the official API is a demonstrated blocker.

Reference: <https://github.com/yt-dlp/yt-dlp#usage-and-options>

## Recommended Committed Store

Use a fixed `src/content/youtube/` root. This follows the existing convention of keeping transcript source files under `src/content` while making the library's non-publication status explicit. Do not add this tree to `src/content.config.ts`, import it from routes/components, or place generated files under `public/`.

```text
src/content/youtube/
├── AGENTS.md
├── catalog.json
├── authors/
│   └── <author-slug>.md
├── playlists/
│   └── <playlist-slug>/
│       ├── manifest.json
│       └── overview.md
└── videos/
    └── <video-id>/
        ├── metadata.json
        ├── summary.md
        └── transcript.md
```

`catalog.json` is the machine-readable registry. It should contain stable author IDs, display names/aliases, playlist IDs and slugs, author relationships, `transcriptLanguage`, and `summaryLanguage`. API credentials do not belong there. Include an invariant marker such as `publication: "source-only"` so validation can detect accidental bundling.

Video ID is the stable storage key. Playlist manifests own membership and order; the catalog owns playlist-to-author relationships. A video directory remains available when an item is removed from a playlist. Git history of each committed `manifest.json` is the change log; a second append-only event file would duplicate state and add commit noise.

Author Markdown files should hold source links, current synthesis, and editorial notes about changes across the author's work. They may link to tracked playlists but should not duplicate machine-owned membership from `catalog.json` or manifests. “Author” is an explicit editorial subject grouping; it must not be inferred from a video's uploader/channel because uploader, speaker, and subject can differ.

## Sync and Capture Semantics

Keep discovery separate from transcript capture:

1. `sync` fetches and normalizes every configured playlist, compares it to the current manifest, prints a concise change set, and atomically replaces the manifest only when its meaningful content changed.
2. `capture` processes only videos without a captured transcript. It runs sequentially with a small delay and supports `--limit` for safe batches.
3. `status` reports playlist and author relationships, transcript state, summary state, and stale/missing synthesis.

Most processing state should be derived instead of persisted:

- `captured`: `transcript.md` exists and records actual language and caption kind.
- `pending`: a video is present in a manifest but has neither a transcript nor a persisted non-transient failure.
- `unavailable`: `metadata.json` records a non-transient caption/video failure and its attempt time.

Transient network, throttling, and upstream failures should write no persisted state; the video remains pending and the next capture run retries it naturally. `--retry` re-attempts recorded unavailable videos. Capture must never overwrite an existing transcript or summary by default, and playlist removal must never delete a captured video directory.

The manifest should omit volatile sync timestamps so an unchanged sync writes zero bytes and leaves git clean. Deleted/private playlist entries should be normalized as unavailable during sync when the API exposes placeholder titles or missing video details, preventing pointless transcript requests.

Raw video/audio binaries are out of scope because they would make the public source repository unnecessarily large. The library stores records, transcripts, summaries, and synthesis.

## Summary and Synthesis Contract

Automation should discover, diff, capture, and report status. It should not silently generate or replace editorial summaries. Agents can write summaries from saved transcripts in reviewable, commit-sized batches.

Each library summary should record:

- original title, video ID, source URL, publication date when known;
- `sourceLanguage`, actual transcript kind, and `summaryLanguage`;
- editorial status such as `draft` or `reviewed`;
- a concise summary and timestamped key ideas;
- relevant practical implications;
- changes or tensions relative to earlier videos only when publication dates and source evidence support that claim;
- questions or ambiguities worth revisiting.

Italian auto-caption text may be paraphrased into English, but translated caption text must not be presented as a verbatim quotation. Timestamps remain valid evidence anchors. Claims about change over time must use video publication dates, not playlist position, because playlist order can change.

Each playlist overview should synthesize the per-video summaries rather than rereading every raw transcript on each update. It should include coverage, current thesis, stable ideas, emerging ideas, revisions/tensions, and practical implications, with video/timestamp anchors. Playlist overviews and author files should record `coveredVideoIds` in frontmatter so `status` can derive staleness concretely. Every overview must label author claims separately from editorial synthesis.

## Publication and Operational Risks

- **Accidental site publication:** Keep `src/content/youtube/` out of Astro collections and route imports. Verify the source-only catalog marker is absent from `dist/` after builds.
- **Source visibility confusion:** Document that committed transcripts are public on GitHub even though they are absent from the rendered site.
- **Secret leakage:** Read the API key only from the environment and never persist full request URLs containing query parameters.
- **Silent language fallback:** Use the configured source language and record available-language failures; do not silently translate or pick another track.
- **Upstream instability:** The transcript package uses unofficial YouTube interfaces. Preserve typed failure state and support explicit retry instead of producing empty files.
- **Large first backfill:** Process transcript capture and summary writing in bounded batches. Prove one end-to-end slice before processing the full corpus.
- **Repository growth:** Commit text artifacts only. Do not download or commit video/audio media.

## Deferred Ideas

- Public Astro routes or a library UI; Markdown is the safer first inspection surface.
- Scheduled sync; a manual command is enough for the initial number of playlists.
- `yt-dlp` fallback enumeration.
- Whisper or another ASR fallback for videos without captions.
- Automated LLM summary generation inside the script.
- Automatic promotion from library summaries into public resource entries.
- Content hashes, embeddings, semantic search, and a generalized author knowledge graph.
