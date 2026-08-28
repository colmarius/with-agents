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
│       ├── intake.json      # resource-intake playlists only
│       ├── manifest.json
│       └── overview.md      # editorial source playlists only
└── videos/
    └── <video-id>/
        ├── metadata.json
        ├── summary.md
        └── transcript.md
```

- `catalog.json` owns configured authors, playlists, relationships,
  source/summary languages, and explicit multi-speaker attribution decisions.
- Every playlist must use exactly one attribution mode: appear in at least one
  author relationship, or set `multiSpeaker: true`. The marker is valid only
  when its value is exactly `true`, and a marked playlist must not appear in an
  author relationship.
- Playlist manifests own playlist membership and order.
- Video IDs are the global storage key. Keep one video directory even when a
  video belongs to several playlists or later leaves a playlist.
- Author files, playlist overviews, and video summaries are editorial
  Markdown. Scripts must not silently generate or replace them.
- A multi-speaker playlist is intentionally author-less. Its playlist overview
  is its highest-level synthesis; do not create an author synthesis or treat its
  uploader or source channel as its author.

### Curated playlists

A playlist may add an editorial selection to its catalog record:

```json
"curation": {
  "status": "draft",
  "videoIds": ["youtube-id-in-approved-display-order"]
}
```

- `curation` must contain exactly `status` and `videoIds`; IDs must be unique
  YouTube video IDs.
- `draft` records candidates for human review. It creates no capture, summary,
  overview, or public-content obligation, and explicit capture of that playlist
  fails until the selection is reviewed.
- `reviewed` records the human-approved ordered selection. Every selected ID
  must be available and present in the committed manifest. The editorial order
  does not need to match remote playlist position.
- For new or revised curation, default to descending publication date so the
  most recent video appears first. A human-approved editorial or pedagogical
  sequence may intentionally override this default.
- Manifests always retain the complete remote playlist, and check/sync drift
  always compares full remote membership. Unselected videos stay tracked for
  deterministic drift without creating transcript or summary obligations.
- Capture, status, overview coverage, structural audit, and consolidated public
  collections use only the reviewed selection. Status reports candidate,
  selected, and unselected counts.
- Selection review, individual source-summary review, and playlist-overview
  review are separate gates. Do not publish a collection while any gate is
  draft.

An approved selected video may reuse a standalone public transcript and summary
instead of being duplicated under `videos/`. Reuse is valid only when tooling
can strictly connect the canonical video ID, transcript `summarySlug`, public
summary, and either its canonical video resource or curated collection item.
Ambiguous, duplicate, or broken associations fail checks.

### Resource-intake playlists

A temporary playlist that queues standalone public resources may set
`resourceIntake: true` in its catalog record. It must not also define
`curation`. Sync still owns its complete remote manifest, but it creates no
library capture, video-summary, playlist-overview, or author-synthesis
obligation. Process each pending video through the root standalone transcript
and resource workflow instead of `youtube:library capture`.

Store completion decisions at `playlists/<playlist-slug>/intake.json`:

```json
{
  "playlistId": "<catalog playlist id>",
  "processed": [
    { "videoId": "<youtube video id>", "recommendation": "keep" }
  ]
}
```

The file must contain exactly `playlistId` and `processed`. Each processed item
must contain exactly a unique `videoId` and a `keep` or `remove`
recommendation. Keep decisions after remote removal so a later re-addition is
not reprocessed. Add a decision only after the standalone resource workflow,
review, checks, recommendation, and portal verification are complete. Status
reports available manifest IDs absent from this file as pending.

## Editorial workflow

Video summaries, playlist overviews, and author syntheses are explicit
agent/human editorial work from committed transcripts and summaries. Sync,
capture, and status tooling must not silently generate or replace them, and no
LLM API belongs in this workflow. New editorial artifacts begin as `draft`.
Set `reviewed` only after an explicit human or dedicated review pass.

For a consolidated public playlist collection, every public summary must have
the same `collection`, a unique positive `order`, and its canonical `videoId`.
The resulting IDs and order must exactly match the catalog's reviewed curation.
Public posts and resources may cite selected source evidence only after the
individual source summary and playlist overview are reviewed.

The status tooling currently reads only `status` and `coveredVideoIds`, and it
does so tolerantly. All other frontmatter is durable editorial provenance.

### Video summaries

Store each summary at `videos/<video-id>/summary.md`. Use this exact
frontmatter key order:

```yaml
---
title: "<original video title>"
videoId: <video-id>
sourceUrl: "https://www.youtube.com/watch?v=<video-id>"
publishedAt: "<ISO 8601 video publication date from the manifest>"
sourceLanguage: <actual captured language from metadata.json, e.g. it-IT>
summaryLanguage: en
captionKind: auto-generated
status: draft
---
```

Omit `publishedAt` only when the playlist manifest has no video publication
date. Copy `sourceLanguage` and `captionKind` from `metadata.json`, and copy
`publishedAt` from the playlist manifest; do not re-fetch or infer these
values. `captionKind` must be `auto-generated` or `caption`, matching the
metadata `kind`. `status` must be `draft` or `reviewed`; status tooling treats
any other value as draft/not reviewed. Only `status` is currently machine-read
from summary frontmatter.

When `sourceLanguage` differs from `summaryLanguage`, the first body line must
be this italic disclosure, adapted only for the actual languages and caption
kind:

```markdown
*All English wording below is an editorial translation/paraphrase of the Italian auto-generated captions; nothing is a verbatim quotation.*
```

Never wrap translated caption text in quotation marks or present it as
verbatim. Timestamped, source-faithful paraphrase is allowed. After the
disclosure, write a concise one- or two-paragraph framing, followed by these
exact headings in order:

```markdown
## Key Ideas

## Practical Implications

## Questions and Tensions

## Source
```

For a video in a `multiSpeaker: true` playlist, the framing must name every
relevant speaker and relevant affiliation supported by the source title,
description, or transcript. Do not infer either from uploader metadata.

Use concise Key Ideas bullets with transcript anchors in `[HH:MM:SS]` or
`[HH:MM:SS]-[HH:MM:SS]` form that match the sibling transcript chunks. The
Source section must contain the canonical video URL and
`[transcript.md](./transcript.md)`.

### Playlist overviews

Store each overview at `playlists/<playlist-slug>/overview.md`. Use this exact
frontmatter key order and two-space-indented block-list form:

```yaml
---
title: "<playlist title from catalog.json>"
status: draft
coveredVideoIds:
  - <video-id>
  - <video-id>
---
```

`status` must be `draft` or `reviewed`. `coveredVideoIds` must list every video
summary incorporated into the current overview and must be updated on each
revision. Status tooling marks an overview stale when an existing summary's
video ID is missing. Use these exact headings in order:

```markdown
## Coverage

## Current Thesis

## Stable Ideas

## Emerging Ideas

## Revisions and Tensions

## Practical Implications
```

Coverage must state the manifest count, summary count, incorporated count, and
pending video IDs. A tracked AI Engineer `multiSpeaker: true` playlist must
additionally report manifest, available, captured, summarized, incorporated,
pending, and unavailable counts; identify AI Engineer as the curator/source
channel, never as the author; and state that speakers and affiliations vary per
video. Synthesize per-video summaries; do not silently regenerate an overview
from raw transcripts or live YouTube data.

In every section, keep author claims visibly separate from editorial
synthesis. Every bullet stating an author's claim must include a source anchor:
a relative summary link, or a video ID plus a transcript timestamp. Every
editorial interpretation bullet must begin `Editorial:`. Claims about sequence
or change over time must cite video publication dates plus timestamped
evidence; never infer chronology from mutable playlist position.

In a `multiSpeaker: true` overview, every non-editorial claim must also name the
speaker and relevant affiliation supported by the source, in addition to its
source anchor. The playlist overview remains the highest-level synthesis.

### Author syntheses

Keep author files flat at `authors/<author-slug>.md`, where the file name is the
catalog author slug. Use this exact frontmatter key order and
two-space-indented block-list form:

```yaml
---
authorId: <catalog author id>
status: draft
coveredVideoIds:
  - <video-id>
---
```

`authorId` must match the catalog author ID. `status` must be `draft` or
`reviewed`. Across all related playlists, `coveredVideoIds` has the same
revision and staleness semantics as playlist overviews. Use these exact
headings in order:

```markdown
## Source Identities

## Cross-Playlist Synthesis

## Changes Over Time
```

Source Identities contains explicitly confirmed editorial links such as a
channel URL, personal site, or GitHub profile. Configure identity through
catalog author/relationship data and state it explicitly here. Never infer
author identity from uploader or channel metadata: uploader, speaker, and
subject can differ.

Do not duplicate machine-owned playlist relationships or manifest membership.
Link to playlist overviews with relative links instead. Cross-Playlist
Synthesis follows the same anchored-author-claim versus `Editorial:`
interpretation rule as playlist overviews. Changes Over Time must use
publication dates and timestamped evidence, never playlist order.

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

`capture` processes only approved IDs for reviewed curated playlists and skips
selected IDs fulfilled by validated standalone evidence. Draft curated
playlists do not contribute to the default capture queue. `status` and `audit`
scope editorial backlog and coverage to approved IDs, while `check` and `sync`
continue to inspect and preserve the complete manifest.
