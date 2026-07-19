# Private YouTube Playlist Knowledge Library Research

## Desired Outcome

- Track multiple public YouTube playlists without publishing the user's playlist configuration, transcripts, summaries, or reading interests.
- Detect additions, removals, reordering, title changes, and unavailable/private entries across syncs.
- Capture each video once even when it appears in several playlists.
- Keep source-language transcripts and source-faithful English summaries that are easy to inspect as Markdown.
- Maintain a concise synthesis for each playlist and an optional cross-playlist author synthesis that separates durable ideas, emerging ideas, revisions, tensions, and editorial interpretation.

The current target corpus has 93 playlist entries across two playlists. A sampled video from each playlist exposes Italian captions but no English captions. The existing transcript command fails clearly when it requests English and succeeds with `--lang it`, so source and summary languages must be modeled separately.

## Existing Repository Capabilities

- `.agents/scripts/save-youtube-transcript.mjs` fetches metadata and captions for one video through `youtube-transcript-plus`, normalizes them into coarse timestamped chunks, and writes Markdown.
- The existing command always writes under `src/content/transcripts/`. It cannot be reused directly for private capture because that directory belongs to public source content.
- `src/content/summaries/**` is loaded by Astro and linked to the public resource manifest by `resourceId`. Private summaries must not use that collection or public manifest.
- `src/content.config.ts` loads public posts and summaries only. A root-level ignored private directory is outside the build without any Astro configuration changes.
- Public resource summaries already provide the useful editorial pattern: concise framing, timestamped key themes, and a source link. Private summaries can reuse that style without requiring `resourceId` or public routing.

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

## Recommended Private Store

Use a fixed root-level `.private/youtube/` directory and add `/.private/` to `.gitignore` before the first private write. The private CLI should refuse to initialize or write unless Git confirms that the target path is ignored. Do not offer an output option that can point the private workflow into `src/`.

```text
.private/youtube/
├── AGENTS.md
├── playlists.json
├── playlists/
│   └── <playlist-slug>/
│       ├── changes.ndjson
│       ├── manifest.json
│       └── overview.md
├── videos/
│   └── <video-id>/
│       ├── metadata.json
│       ├── summary.md
│       └── transcript.md
└── authors/
    └── <author-slug>/
        └── overview.md
```

`playlists.json` is private configuration and may contain playlist IDs, local labels, author grouping, `transcriptLanguage`, and `summaryLanguage`. API credentials do not belong there.

Video ID is the stable storage key. Playlist manifests own membership and order; a video directory remains available when an item is removed from a playlist. An append-only `changes.ndjson` records observed playlist mutations without requiring the outer public repository to track private files. A separate private repository or encrypted backup can be added later if history across machines is wanted.

## Sync and Capture Semantics

Keep discovery separate from transcript capture:

1. `sync` fetches and normalizes every configured playlist, compares it to the current manifest, prints a concise change set, appends observed changes, and atomically replaces the current manifest.
2. `capture` processes only videos without a captured transcript. It runs sequentially with a small delay and supports `--limit` for safe batches.
3. `status` reports playlist membership, transcript state, summary state, and stale/missing synthesis.

The normalized state should distinguish:

- `pending`: never attempted.
- `captured`: transcript exists and records actual language and caption kind.
- `unavailable`: a non-transient caption/video condition was observed.
- `retryable`: a transient network, throttling, or upstream failure was observed.

Capture must never overwrite an existing transcript or summary by default. A retry should update attempt metadata but preserve prior source content unless the user explicitly requests a destructive regeneration. Playlist removal must never delete a captured video directory.

## Summary and Synthesis Contract

Automation should discover, diff, capture, and report status. It should not silently generate or replace editorial summaries. Agents can write summaries from saved transcripts in reviewable batches.

Each private summary should record:

- original title, video ID, source URL, publication date when known;
- `sourceLanguage`, actual transcript kind, and `summaryLanguage`;
- editorial status such as `draft` or `reviewed`;
- a concise summary and timestamped key ideas;
- relevant practical implications;
- changes or tensions relative to earlier videos only when publication dates and source evidence support that claim;
- questions or ambiguities worth revisiting.

Italian auto-caption text may be paraphrased into English, but translated caption text must not be presented as a verbatim quotation. Timestamps remain valid evidence anchors. Claims about change over time must use video publication dates, not playlist position, because playlist order can change.

Each playlist overview should synthesize the per-video summaries rather than rereading every raw transcript on each update. It should include coverage, current thesis, stable ideas, emerging ideas, revisions/tensions, and practical implications, with video/timestamp anchors. An author overview can then compare playlist overviews and relevant per-video summaries. Every overview must label author claims separately from editorial synthesis.

## Privacy and Operational Risks

- **Accidental publication:** Prevent writes under `src/`, require the ignore check, and verify `git status` after private operations.
- **Secret leakage:** Read the API key only from the environment and never persist full request URLs containing query parameters.
- **Silent language fallback:** Use the configured source language and record available-language failures; do not silently translate or pick another track.
- **Upstream instability:** The transcript package uses unofficial YouTube interfaces. Preserve typed failure state and support explicit retry instead of producing empty files.
- **Large first backfill:** Process transcript capture and summary writing in bounded batches. Prove one end-to-end slice before processing the full corpus.
- **Local-only data loss:** `.gitignore` prevents publication, not loss. Decide on a separate private or encrypted backup after the workflow proves useful.

## Deferred Ideas

- Private Astro routes or a local web UI; Markdown is the safer first inspection surface.
- Scheduled sync; a manual command is enough for the initial number of playlists.
- `yt-dlp` fallback enumeration.
- Whisper or another ASR fallback for videos without captions.
- Automated LLM summary generation inside the script.
- Content hashes, embeddings, semantic search, and a generalized author knowledge graph.
