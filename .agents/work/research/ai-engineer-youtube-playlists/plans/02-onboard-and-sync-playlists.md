# Plan 02: Onboard and sync the AI Engineer playlists

Add the three confirmed multi-speaker playlists to the source-only catalog,
validate their remote identities, synchronize authoritative manifests, and
replace the live-page overlap estimate with manifest-derived counts. This plan
stops before caption capture.

## Goals

- Configure exactly the three approved playlists with explicit English language
  settings and no author relationship.
- Establish authoritative playlist membership, availability, and overlap.
- Record public-impact and count-gap conclusions before editorial work begins.

## Tasks

- [ ] **Task 1: Add the three pinned catalog entries**
  - Scope: `src/content/youtube/catalog.json`,
    `.agents/scripts/youtube-library.test.mjs`
  - Depends on: Plan 01 complete
  - Acceptance:
    - Add `swe-agents-2025` with ID
      `PLcfpQ4tk2k0UwfWS-f6KDInzHc3um4naZ` and exact title `SWE Agents: AI
      Engineer World's Fair 2025`.
    - Add `agent-reliability-2025` with ID
      `PLcfpQ4tk2k0VLQeSLhVinP0lVhNcXa-Ai` and exact title `Agent Reliability: AI
      Engineer World's Fair 2025`.
    - Add `coding-agents` with ID
      `PLcfpQ4tk2k0XFXogv-as7Zu9SrGdiQLgt` and exact title `Coding Agents @ AI
      Engineer`.
    - Every new entry has `transcriptLanguage: en`, `summaryLanguage: en`, and
      `multiSpeaker: true`.
    - No `AI Engineer` author or relationship is added; existing Antirez entries
      and relationships are unchanged.
    - The committed-catalog test asserts the exact five slugs `antirez`,
      `antirez-english`, `swe-agents-2025`, `agent-reliability-2025`, and
      `coding-agents` without weakening source-only or Antirez checks.
  - Notes: Review and commit the catalog/test change before any network-written
    manifest change.

- [ ] **Task 2: Validate all three remote playlist identities**
  - Scope: read-only YouTube library check for the three selected slugs
  - Depends on: Task 1
  - Acceptance:
    - `status` validates the local catalog and reports each new playlist as not
      yet synced without expecting an author synthesis.
    - A selected JSON check completes for all three slugs; each playlist's
      first-sync additions (video IDs and titles) are compared with the
      researched membership to confirm that its ID resolves to the intended
      playlist.
    - `YOUTUBE_API_KEY` is read only from the environment and never logged or
      written.
    - Any partial remote failure is recorded and resolved before sync; no
      manifest is inferred from the earlier live-page scrape.
  - Notes: Use repeated `--playlist` flags. Exit `2` is a useful partial report,
    not permission to ignore a failed playlist.

- [ ] **Task 3: Synchronize all three manifests authoritatively**
  - Scope: `src/content/youtube/playlists/swe-agents-2025/manifest.json`,
    `src/content/youtube/playlists/agent-reliability-2025/manifest.json`,
    `src/content/youtube/playlists/coding-agents/manifest.json`
  - Depends on: Task 2
  - Acceptance:
    - One selected sync names all three slugs with repeated `--playlist` flags.
    - Each manifest records exact membership, positions, publication/upload
      timestamps when supplied, privacy status, and availability according to
      the library serializer.
    - The sync report and exact diff—not the earlier check—are used for review.
    - No video metadata, transcript, summary, or overview file is created.
  - Notes: Commit the three authoritative manifests separately from the catalog
    edit so review can distinguish configuration from remote data.

- [ ] **Task 4: Record authoritative counts, overlap, and public impact**
  - Scope: work-item `progress.md`, final manifest review, public reference
    searches
  - Depends on: Task 3
  - Acceptance:
    - Record per-playlist manifest entries, available IDs, unavailable IDs and
      reasons, pairwise overlaps, all-three overlap, total occurrences, and
      total unique IDs.
    - Explicitly supersede the live-page precheck of 18/8/37 visible IDs and
      63/61 occurrences/unique IDs.
    - Reconcile each 19/18, 9/8, and 38/37 card/visible gap from manifest data
      where possible; otherwise record the remaining uncertainty without
      guessing.
    - Search the three playlist IDs with `rg -l -e` in
      `src/content/posts`, `src/content/summaries`, and `src/data/resources`;
      inspect every hit and record `keep` or `fix` decisions.
    - Record the additions review for playlist orientation, resource dates,
      corpus counts, and material thesis impact. Do not automatically create or
      edit public resources.
  - Notes: Compute both full manifest membership overlap and available-video
    overlap so later coverage math is unambiguous.

## Implementation Notes

- `YOUTUBE_API_KEY` is an environmental prerequisite for check/sync. If absent,
  Task 2 is blocked; do not request, print, or store it.
- Playlist manifests are machine-owned JSON. Do not manually repair their
  membership or normalize valid short/long YouTube identifiers.
- Keep catalog onboarding and manifest synchronization as separate commits.
- This plan establishes a stable baseline but does not freeze the active Coding
  Agents playlist forever; later plans must check/sync before deliberate update
  sessions.

## Constraints / Decisions

- Exact slugs, IDs, titles, languages, and `multiSpeaker: true` values are
  already decided in the research.
- All three playlists sync before the first caption capture.
- AI Engineer remains curator/source channel, not author.
- Public post/resource work is explicitly out of scope.

## Acceptance Criteria

- Catalog and manifests represent exactly the three selected playlists.
- Status reports all five configured playlists and only Antirez author status.
- Authoritative overlap/count results are durable in `progress.md`.
- No caption or editorial artifact is created.

## Verification

- `npm run youtube:library -- status`
- `npm run youtube:library -- check --playlist swe-agents-2025 --playlist agent-reliability-2025 --playlist coding-agents --json`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` returns no matches.
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist` returns no matches.
- `git diff --check`
