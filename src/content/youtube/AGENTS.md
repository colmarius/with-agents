# YouTube Knowledge Library

## Scope and publication boundary

Everything under `src/content/youtube/` is committed source. Because this is a
public repository, committed files are publicly readable on GitHub, but this
tree must remain source-only: do not register it as an Astro content collection,
import it from routes, components, or layouts, copy it to `public/`, or include
it in `dist/`.

## Structure

```text
src/content/youtube/
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

- `catalog.json` owns configured authors, playlists, relationships, and
  source/summary languages.
- Playlist manifests own playlist membership and order.
- Video IDs are the global storage key. Keep one video directory even when a
  video belongs to several playlists or later leaves a playlist.
- Author files, playlist overviews, and video summaries are editorial
  Markdown. Scripts must not silently generate or replace them.

## Language fidelity

Capture transcripts only in each playlist's configured `transcriptLanguage`.
An exact language code or a regional variant is acceptable (for example,
`it-IT` for `it`). If no matching caption track exists, record the requested
and available languages; never select another language, translate captions, or
misreport the caption kind.

`summaryLanguage` controls editorial output only. Translation and paraphrase
must be labeled and remain source-anchored. Summaries and higher-level
syntheses are explicit agent/human editorial work, not synchronization or
capture script output.

## Safe writes

Tooling must use the fixed `src/content/youtube/` root, reject paths outside it,
write non-destructively by default, and use atomic replacement for generated
JSON. Credentials are environment-only and must never be accepted through the
catalog or command-line flags.
