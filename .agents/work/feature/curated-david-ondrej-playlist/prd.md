# Curated David Ondrej Playlist Requirements Brief

## Problem

The David Ondrej Podcast playlist has 55 mixed-topic videos and changes over
time. Tracking every member is useful for detecting remote changes, but treating
every member as public editorial work would create an unwanted transcript and
summary backlog. Two relevant members are already published as standalone
Coding with Agents resources and should not be duplicated.

## Desired Outcome

Coding with Agents shows one David Ondrej playlist resource with an explicitly
human-approved list of selected video summaries. The source library retains the
complete remote playlist inventory, but capture, summary, and synthesis work is
bounded to the approved subset and reuses valid standalone evidence.

## Goals

- Track complete remote playlist membership and drift.
- Keep the visible summary list manually selected, ordered, reviewed, and
  approved.
- Create transcripts and summaries only for selected videos that lack reusable
  source evidence.
- Consolidate existing selected standalone summaries without duplicating their
  transcript or prose.
- Preserve current behavior for all playlists without curation metadata.

## Non-Goals

- Backfilling all 55 playlist videos.
- Treating uploader/channel identity as speaker authorship.
- Publishing model news, broad AI business content, or every future playlist
  addition automatically.
- Rewriting existing standalone summary bodies as part of consolidation.
- Filtering or manually editing the generated remote manifest.

## Users / Use Cases

- A resource reader opens one playlist card and chooses among a concise list of
  selected video summaries.
- A maintainer syncs the playlist and sees all remote drift without creating
  editorial work for unselected additions.
- A maintainer changes the proposed selection, returns it to draft, obtains
  human approval, and only then captures or publishes newly selected videos.

## Requirements

### Must Have

- [ ] Full playlist membership remains in the generated manifest.
- [ ] The catalog supports an optional ordered curation list with `draft` and
      `reviewed` status.
- [ ] Draft curation cannot trigger capture or publication.
- [ ] Reviewed curation accepts only unique, available manifest video IDs.
- [ ] Capture and status operate on selected IDs only for curated playlists.
- [ ] Existing uncurated playlists retain their current behavior.
- [ ] Existing standalone transcript/public-summary/resource chains can satisfy
      selected source evidence through strict ID, slug, and canonical-URL
      validation.
- [ ] The public playlist exposes only the approved ordered selection.
- [ ] Existing selected summaries are reused without duplicate transcript or
      summary files.
- [ ] Selected source review, curation review, and playlist overview review
      remain separate gates.

### Optional

- [ ] Status output reports full manifest, selected, unselected, library-source,
      standalone-reused, pending, and summary-review counts separately.

## Constraints / Decisions

- `src/content/youtube/` remains source-only and must not be imported into Astro
  routes or components.
- Sync records remote truth even when it invalidates an approved selection;
  audit and publication then fail until a human resolves the selection.
- Do not put public resource IDs or duplicated titles in catalog curation.
- Do not use broad path exceptions to bypass source review.
- Repository review is the durable human-approval record; reviewer identity,
  timestamps, hashes, and per-item approval fields are unnecessary.

## Acceptance Criteria

- A sync of the 55-video playlist reports complete remote changes while local
  editorial status covers only the approved subset.
- An unselected new video does not become a pending transcript or missing
  summary.
- A selected unavailable or removed video blocks audit/publication visibly.
- The public modal shows only selected video summaries in approved order.
- The two existing selected summaries remain at their stable slugs and are not
  copied into the source library.
- The three proposed new sources, if approved, are the only new transcript and
  summary work in the initial onboarding.
- Content guard, YouTube library tests/audit/status, Astro check, production
  build, and browser verification pass.

## Open Questions

- [ ] Does “one consolidated playlist resource” mean removing standalone
      resource cards 25 and 31 and showing their summaries inside the playlist
      modal? Recommended: yes.
- [ ] Is the proposed five-video ordered list approved as written?
- [ ] Confirm the required explicit playlist settings:
      `transcriptLanguage: en`, `summaryLanguage: en`, and
      `multiSpeaker: true`.
