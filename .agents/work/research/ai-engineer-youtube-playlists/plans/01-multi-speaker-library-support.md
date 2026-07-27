# Plan 01: Multi-speaker YouTube library support

Add the smallest explicit model for intentionally author-less, multi-speaker
playlists before changing the catalog. Preserve the current protection against
accidentally orphaning authored playlists, and align the source contract and
maintenance workflow with that model.

## Goals

- Represent a multi-speaker playlist without inventing an uploader-as-author
  relationship.
- Keep existing Antirez behavior and runtime status/capture paths unchanged.
- Make multi-playlist onboarding, attribution, retitle review, and dash-leading
  video IDs safe in the documented maintenance workflow.

## Tasks

- [ ] **Task 1: Add the explicit multi-speaker catalog invariant**
  - Scope: `.agents/scripts/lib/youtube-library-core.mjs`,
    `.agents/scripts/youtube-library.test.mjs`
  - Depends on: none
  - Acceptance:
    - `multiSpeaker` is optional, but when present it must be exactly `true`.
    - Every configured playlist has exactly one attribution mode: an author
      relationship or `multiSpeaker: true`, never neither and never both.
    - Existing checks for unknown authors, unknown playlist IDs, empty and
      duplicate relationship lists, duplicate playlist IDs/slugs, credentials,
      and the source-only boundary remain intact.
    - The committed Antirez catalog validates unchanged.
  - Notes: Change only validation unless a focused test proves a runtime path
    actually depends on author relationships.

- [ ] **Task 2: Prove author-less playlists work through existing reporting**
  - Scope: `.agents/scripts/youtube-library.test.mjs`, existing status/check
    fixtures and formatters
  - Depends on: Task 1
  - Acceptance:
    - A fixture containing one authored playlist and one `multiSpeaker: true`
      playlist validates.
    - Status/check output includes both playlist records but aggregates only the
      authored playlist under its author.
    - Human and JSON projections do not invent an author record for the
      multi-speaker playlist.
    - Tests demonstrate that capture selection remains playlist-based without
      requiring a production-code change.
  - Notes: Prefer extending existing fixtures over adding parallel test helpers.

- [ ] **Task 3: Define multi-speaker editorial attribution**
  - Scope: `src/content/youtube/AGENTS.md`
  - Depends on: Task 1
  - Acceptance:
    - The catalog contract documents `multiSpeaker: true`, its mutual exclusion
      with author relationships, and playlist-overview top-level synthesis.
    - A multi-speaker summary's framing paragraph must name every relevant
      speaker and affiliation supported by the source title, description, or
      transcript; no new summary frontmatter fields are introduced.
    - Every non-editorial overview claim names the speaker and relevant
      affiliation in addition to its existing source anchor.
    - A multi-speaker overview's Coverage section identifies AI Engineer as the
      curator/source channel, states that speakers and affiliations vary per
      video, and never treats the channel as author.
    - Multi-speaker Coverage reports manifest, available, captured, summarized,
      incorporated, pending, and unavailable counts.
  - Notes: Preserve the exact existing summary and overview frontmatter key
    order.

- [ ] **Task 4: Align playlist onboarding and public-impact review**
  - Scope: `.agents/skills/maintaining-youtube-library/SKILL.md`,
    `.agents/scripts/youtube-library.test.mjs`
  - Depends on: Tasks 1 and 3
  - Acceptance:
    - Mode C requires an explicit author relationship or explicit multi-speaker
      decision, plus explicit transcript and summary languages.
    - One work item may add and sync several selected playlists together, while
      every playlist still requires its own `capture --playlist <slug> --limit
      1` editorial thin slice before broad backfill.
    - Author synthesis review is conditional on an actual author relationship.
    - Public-impact searches use `rg -l -e '<video-id>' ...`, so
      `-QFHIoCo-Ko` is not parsed as an option.
    - A tracked multi-speaker retitle requires inspection of
      `videos/<video-id>/summary.md` attribution in addition to existing public
      paths; the skill still never rewrites editorial prose automatically.
    - An existing path/capture fixture exercises `-QFHIoCo-Ko` without adding a
      one-off production special case.
  - Notes: Repeated `--playlist` flags already exist; document and test the
    supported path rather than adding a catalog wizard or new CLI command.

## Implementation Notes

- `buildLibraryStatus` already derives playlist status independently and author
  status by iterating relationships. Preserve that boundary.
- A boolean marker is intentionally smaller than adding curator, speaker, or
  author-kind entities to the catalog.
- Attribution remains deliberate editorial work. Do not parse title suffixes
  into generated metadata or silently populate summaries.
- This plan changes workflow code/contracts only. It must not add the three AI
  Engineer playlists, sync manifests, or capture videos.

## Constraints / Decisions

- The marker name is `multiSpeaker`.
- Multi-speaker playlists are intentionally author-less; unmarked author-less
  playlists remain invalid.
- Curator and speaker provenance live in editorial prose, not new frontmatter.
- Existing Antirez files and relationships must remain byte-for-byte unchanged.

## Acceptance Criteria

- Validator, status/check, skill, and editorial contracts agree on one
  author-optional model.
- No author record or synthesis is produced for a multi-speaker playlist.
- Dash-leading video IDs are safe in both tests and documented searches.
- No catalog, manifest, transcript, summary, or overview is added by this plan.

## Verification

- `npm run lint:fix`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run youtube:library -- status`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` returns no matches.
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist` returns no matches.
- `git diff --check`
