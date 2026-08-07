# Curated David Ondrej Playlist Implementation Plan

Implement complete remote tracking, reviewed subset curation, source reuse, and
one public selected-video summary collection for the approved playlist.

## Goals

- Preserve full remote playlist drift while limiting editorial work to five
  approved videos.
- Reuse the two existing standalone transcript-backed summaries.
- Publish one playlist card whose modal lists only selected video summaries.

## Tasks

- [x] **Task 1: Add curated playlist and source-evidence contracts**
  - Scope: `.agents/scripts/lib/youtube-library-*.mjs`,
    `.agents/scripts/public-content-guard.mjs`, tests, and
    `src/content/youtube/AGENTS.md`
  - Depends on: none
  - Acceptance:
    - Catalog validation accepts optional `curation.status/videoIds` and
      preserves legacy playlist behavior when absent.
    - Capture/status/audit scope curated editorial work to reviewed selected
      IDs while full manifest drift remains visible.
    - Strict standalone transcript → public summary → canonical resource
      evidence prevents duplicate source capture for existing public videos.
    - Draft, missing, unavailable, duplicate, unselected, and broken-evidence
      cases have targeted tests.
  - Notes: Keep curation approval, source review, and overview review separate.

- [x] **Task 2: Generalize the public summary list for selected videos**
  - Scope: `src/content.config.ts`, `src/pages/resources/`, and
    `src/components/resources/`
  - Depends on: none
  - Acceptance:
    - Public summary frontmatter supports a named collection, ordered items,
      and source video IDs without changing existing numbered series behavior.
    - A collection modal is labeled “Selected videos” and does not render `Ep`
      prefixes.
    - Resource search, latest-summary date, keyboard navigation, and summary
      loading continue to work.

- [x] **Task 3: Onboard and synchronize the approved playlist**
  - Scope: `src/content/youtube/catalog.json` and
    `src/content/youtube/playlists/david-ondrej-coding-agents/`
  - Depends on: Task 1
  - Acceptance:
    - Catalog explicitly records `en`, `en`, `multiSpeaker: true`, and the five
      approved video IDs in editorial order with reviewed curation.
    - Selected sync writes the complete authoritative 55-entry manifest.
    - A reviewed playlist overview covers exactly the five selected sources and
      identifies David Ondrej as curator/source channel rather than author.

- [x] **Task 4: Consolidate and complete selected public summaries**
  - Scope: `src/content/transcripts/coding-with-agents/`,
    `src/content/summaries/coding-with-agents/`, and
    `src/data/resources/coding-with-agents.json`
  - Depends on: Tasks 1 and 2
  - Acceptance:
    - Existing resource 25 and 31 summaries retain stable slugs and bodies but
      belong to the new playlist collection.
    - Standalone resources 25 and 31 are replaced by playlist resource 32; no
      duplicate source transcript or summary is created.
    - Only Matt Pocock, Kun, and Magnus Müller receive new transcript
      sidecars and reviewed, transcript-checked public summaries.
    - Public selected-video IDs and order exactly match catalog curation.

- [x] **Task 5: Review, verify, and preview**
  - Scope: all changed files and `/resources/coding-with-agents`
  - Depends on: Tasks 1–4
  - Acceptance:
    - Oracle review findings are resolved or recorded.
    - YouTube library status/audit/tests, content guard, `npm run check`,
      `npm run build`, and `git diff --check` pass.
    - Browser verification confirms one playlist card, five selected summaries,
      no misleading episode labels, and working summary navigation.
    - Coherent logical commits are created and the preview portal is shared.

## Implementation Notes

- Keep the generated manifest complete and machine-owned.
- Use one playlist-scope resolver and one standalone-evidence resolver across
  capture, status, audit, and guard to avoid semantic drift.
- A synchronized removal or privacy change records remote truth and then blocks
  audit/publication if it affects an approved selection.
- Curated videos use the existing standalone transcript workflow because their
  summaries are public content; source tooling validates and reuses that chain
  rather than copying it into the source-only library.
- Keep all current uncurated playlist fixtures and behavior unchanged.

## Constraints / Decisions

- Approved selection order: Dex Horthy, Thorsten Ball, Matt Pocock, Kun Chen,
  Magnus Muller.
- Approved configuration: English transcripts, English summaries,
  `multiSpeaker: true`.
- David Ondrej is the curator/source channel, not the attributed author of each
  selected claim.
- Resources 25 and 31 are retired after their summaries are reassigned to the
  consolidated playlist resource 32.

## Acceptance Criteria

- Exactly 55 remote entries are tracked and exactly 5 are active editorial
  selections at the onboarding snapshot.
- Exactly 3 new transcript/summary pairs are added.
- Existing public playlist and episode-series behavior does not regress.
- No unselected member creates transcript, summary, or synthesis debt.

## Verification

- `npm run youtube:library -- status`
- `npm run youtube:library -- audit`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs .agents/scripts/youtube-library-structural-audit.test.mjs .agents/scripts/public-content-guard.test.mjs`
- `npm run content:guard`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`
- `rg -n '\"publication\":\"source-only\"|\"publication\": \"source-only\"' dist`
- `git diff --check`
- Browser verification of `/resources/coding-with-agents`
