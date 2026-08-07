# The Pragmatic Engineer Selected Conversations Implementation Plan

Publish one approved six-video collection while preserving complete playlist
drift, reusing two existing evidence chains, and keeping curation, source, and
overview review gates independent.

## Goals

- Keep all 71 playlist entries as sync/drift authority.
- Capture only four approved videos that lack validated standalone reuse.
- Fold resources 11 and 30 only after all source and overview gates pass.
- Publish one exact ordered `Selected videos` collection and keep resource 14
  standalone.

## Tasks

- [x] **Task 1: Activate the approved selection**
  - Scope: catalog, public guard, and work-item approval record
  - Depends on: explicit human selection and fold approval
  - Acceptance:
    - Curation is reviewed with the approved six IDs in exact order.
    - Two standalone chains are reused without exceptions or duplicate files.
    - Source summaries and overview remain separate, incomplete gates.

- [ ] **Task 2: Capture and review four new source-evidence items**
  - Scope: `src/content/youtube/videos/{CQmI4XKTa0U,Usufn8IQJgw,julbw1JuAz0,xHHlhoRC8W4}/`
  - Depends on: Task 1
  - Acceptance:
    - One bounded selected capture processes only the four missing sources.
    - Transcript metadata uses approved English and exact manifest provenance.
    - Four source summaries begin as draft and receive a dedicated
      transcript-checked review before promotion to reviewed.
    - Speaker and affiliation claims are source-supported; The Pragmatic
      Engineer remains curator/source channel, not author of guest claims.

- [ ] **Task 3: Create and independently review the playlist overview**
  - Scope: `src/content/youtube/playlists/pragmatic-engineer-podcast/overview.md`
  - Depends on: Task 2
  - Acceptance:
    - Draft overview covers exactly the six approved IDs, including two reused
      standalone sources.
    - Every guest claim is anchored to a reviewed source and editorial synthesis
      is labeled `Editorial:`.
    - A dedicated overview review checks attribution, synthesis, tensions, and
      coverage before setting `status: reviewed`.

- [ ] **Task 4: Publish the ordered public collection and folds**
  - Scope: public transcripts/summaries, resource manifest, and collection
    frontmatter
  - Depends on: Tasks 2 and 3
  - Acceptance:
    - Four new public transcript/summary pairs are source-faithful and reviewed.
    - Existing Pi and Hillel files retain stable slugs and bodies while receiving
      exact collection/order/video metadata.
    - Standalone resource cards 11 and 30 are replaced by one new playlist card;
      resource 14 remains unchanged.
    - Public order exactly matches the reviewed six-ID curation.

- [ ] **Task 5: Review, verify, and finish**
  - Scope: all changed files and `/resources/coding-with-agents`
  - Depends on: Tasks 1–4
  - Acceptance:
    - Oracle reviews the complete implementation and all high-confidence
      findings are resolved or recorded.
    - Library status/audit/tests, public guard, check/build, source-only checks,
      Biome, and diff checks pass.
    - Browser verification confirms one collection card, exact six-item order,
      no episode prefixes, working selection/scrolling, and unchanged resource
      14.
    - Coherent commits exist and the worktree is clean.

## Constraints / Decisions

- Approved order: Martin Fowler, Dex Horthy, Boris Cherny, Mario Zechner and
  Armin Ronacher, Laura Tacho, Hillel Wayne.
- Approved configuration: English transcripts, English summaries,
  `multiSpeaker: true`.
- Resources 11 and 30 fold into the collection; resource 14 stays standalone.
- Do not capture, summarize, or publish unselected playlist members.
- Do not promote source or overview drafts without their own dedicated review.

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
