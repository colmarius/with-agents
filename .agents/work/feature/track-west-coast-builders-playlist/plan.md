# Track and regroup The West Coast Builders playlist

Onboard the complete playlist into the source-only YouTube library, review it in
bounded editorial batches, and replace three standalone public video resources
with one semantically accurate playlist summary collection.

## Goals

- Track all current and future playlist membership through the deterministic
  YouTube library workflow without treating Mayank Gupta as the author of guest
  claims.
- Preserve every existing public summary, transcript sidecar, citation, and URL
  while consolidating duplicate resource cards under one playlist resource.
- Publish only transcript-backed coding-agent interviews whose corresponding
  source-library artifacts have passed dedicated review.
- Keep the public-content guard green between bounded onboarding sessions.

## Tasks

- [x] **Task 1: Onboard and synchronize the playlist source**
  - Scope: `src/content/youtube/catalog.json`,
    `src/content/youtube/playlists/mayank-gupta-west-coast-builders/`,
    `.agents/scripts/public-content-guard.mjs`
  - Depends on: none
  - Acceptance:
    - The starting `src/content/youtube` tree is clean or every existing change
      is understood and kept separate.
    - The catalog contains playlist ID
      `PLV_xLvHFOwiuvtEhsFIW55AdFFP7Rpnvg`, slug
      `mayank-gupta-west-coast-builders`, title `The West Coast Builders`,
      English transcript/summary languages, and `multiSpeaker: true`; no author
      or relationship entry is added.
    - Local status, one selected check, and one selected authoritative sync are
      run, and the resulting 11-entry manifest diff is inspected. If remote state
      differs from the research snapshot, the sync report becomes authoritative
      and the work item is updated before proceeding.
    - A structurally valid draft overview is created immediately after sync with
      empty `coveredVideoIds`, exact initial counts, pending IDs, and Mayank's
      host/curator/channel provenance.
    - The nine path-and-video temporary exceptions listed in `research.md` are
      added with a specific migration reason. No playlist-level or newly written
      public-content exception is added.
  - Notes: Land catalog, manifest, initial overview, and guard exceptions as one
    coherent onboarding state. A catalog-only state makes the guard try to read
    a missing manifest; a synced state without an overview is also invalid.

- [x] **Task 2: Record authoritative public impact and baseline**
  - Scope: `src/content/posts`, `src/content/summaries`,
    `src/data/resources/coding-with-agents.json`, `src/content/youtube`, work-item
    progress
  - Depends on: Task 1
  - Acceptance:
    - Exact-ID searches cover every synced video ID and the playlist ID,
      including IDs beginning with `_`, and every hit receives a recorded
      `keep`, `fix`, or `block` decision.
    - The baseline records manifest, available/unavailable, captured, pending,
      missing/draft/reviewed summary, incorporated, overview, overlap, and global
      artifact-reuse counts.
    - Existing public source artifacts for `PZ-sko1NWa0`, `_L8xxUXOTk0`, and
      `thMFsqe8kbQ` are explicitly retained; no public summary or transcript path
      is moved.
  - Notes: Add `progress.md` when implementation starts and keep public-impact
    decisions there.

- [x] **Task 3: Prove one complete source-library thin slice**
  - Scope: `src/content/youtube/videos/fu7th5HiADo/`, playlist overview,
    work-item progress
  - Depends on: Task 2
  - Acceptance:
    - Exactly one selected command runs:
      `npm run youtube:library -- capture --playlist mayank-gupta-west-coast-builders --limit 1`.
    - If capture succeeds, its transcript receives source-faithful correction
      only, a multi-speaker draft summary names Mayank as host and Peter
      Steinberger with source-supported affiliation, and the draft overview is
      deliberately refreshed to incorporate it.
    - If captions are unavailable, metadata records the requested and available
      languages, no substitute language is used, and the overview records the
      result before the session stops or proceeds by an explicit later decision.
    - Status, structural audit, library tests, source-only boundary checks, and
      `git diff --check` pass for the thin slice.
  - Notes: Do not use `--force` or `--retry`.

- [x] **Task 4: Backfill the remaining source library in bounded batches**
  - Scope: `src/content/youtube/videos/`, playlist overview, work-item progress
  - Depends on: Task 3
  - Acceptance:
    - Each session uses selected capture commands bounded to at most two pending
      videos, stops on throttling, and does not refill a partial batch
      automatically.
    - Every successful capture receives transcript review, a draft multi-speaker
      summary, and a deliberate draft overview refresh in the same session.
    - Each summary names Mayank as host/source channel and attributes guest
      claims and affiliations from the title, description, or transcript; every
      overview claim follows the multi-speaker anchor rules.
    - The full current manifest ends with each available video either captured
      and summarized or explicitly recorded caption-unavailable. The pending
      tail and all batch outcomes are recorded.
  - Notes: Capture follows manifest order; it cannot jump directly to the three
    pre-existing public videos. Keep the public transcript sidecars alongside
    the source-library copies and compare meaningful caption/timestamp
    differences during review.

- [ ] **Task 5: Review pre-existing public source identities and retire their exceptions**
  - Scope: source-library artifacts for `PZ-sko1NWa0`, `_L8xxUXOTk0`, and
    `thMFsqe8kbQ`; matching public summaries/transcripts/posts;
    `.agents/scripts/public-content-guard.mjs`
  - Depends on: Task 4
  - Acceptance:
    - A dedicated reviewer checks every source-summary claim against full
      adjacent transcript context, both endpoints of each timestamp range,
      speaker/affiliation attribution, and the existing public sidecar/summary.
    - Each passing source summary is promoted to `reviewed`; any discrepancy is
      corrected source-faithfully before promotion.
    - Every exception for that video ID is removed in the same reviewed change.
      All nine migration exceptions are gone after the three reviews complete.
    - `npm run content:guard` passes without grandfathering newly written public
      content.
  - Notes: These three reviews may occur as soon as their manifest-ordered
    captures complete; they need not wait for unrelated public candidates.

- [ ] **Task 6: Complete and review the playlist source synthesis**
  - Scope:
    `src/content/youtube/playlists/mayank-gupta-west-coast-builders/overview.md`,
    selected source video summaries, work-item progress
  - Depends on: Tasks 4 and 5
  - Acceptance:
    - The overview reports exact manifest, available, captured, summarized,
      incorporated, pending, and unavailable counts and is current for every
      source summary.
    - Mayank is identified as host, curator, playlist owner, and source channel,
      never as author; each non-editorial claim names the actual guest and
      source-supported affiliation.
    - A dedicated reviewer validates every overview claim and anchor before the
      overview is promoted to `reviewed`.
    - Source summaries for public candidates `fu7th5HiADo`, `5H862RhMgOU`,
      `wbsDZpVB4Lg`, and `C6u5CBIXRf0` are individually reviewed before any
      matching public summary is written.
  - Notes: Do not add the public playlist URL while its tracked overview is
    draft or stale.

- [ ] **Task 7: Add non-episodic public summary collections**
  - Scope: `src/content.config.ts`,
    `src/pages/resources/coding-with-agents.astro`,
    `src/pages/api/summaries/[slug].json.ts`,
    `src/components/resources/CodingWithAgents.tsx`,
    `src/components/resources/EpisodeList.tsx`
  - Depends on: none
  - Acceptance:
    - Summary frontmatter accepts optional `collection`; collection entries
      require `date` and do not require or display `episode`.
    - One resource resolves as exactly one standalone summary, one coherent
      numbered series, or one coherent collection. Mixed modes or multiple
      collection keys fail visibly instead of silently selecting the first
      entry.
    - Collection entries render a keyboard-accessible title-only summary list,
      use slug as stable identity, sort by date and then slug, participate in
      search, and update the playlist's `Latest summary` date.
    - Existing standalone and episodic resources retain their current behavior.
    - `npm run check` and `npm run build` pass; the resource page is manually
      checked at desktop and mobile widths for series and collection selection.
  - Notes: Keep the component change narrow. Extend existing resource summary
    selection rather than introducing a general content taxonomy. This task may
    run in parallel with source capture but must merge before Task 8.

- [ ] **Task 8: Atomically consolidate the three existing public resources**
  - Scope: `src/data/resources/coding-with-agents.json`, the three existing
    Mayank summary files
  - Depends on: Tasks 5, 6, and 7
  - Acceptance:
    - One playlist resource with proposed ID 31 points to the official playlist,
      uses source `Mayank Gupta`, and describes a selected coding-agent route
      through the broader hosted collection.
    - Standalone entries 15, 16, and 19 are removed in the same change.
    - Their three summaries use resource ID 31 and
      `collection: "the-west-coast-builders"`; existing filenames, dates,
      transcript `summarySlug` values, body text, and direct source URLs remain
      unchanged unless review found a factual defect.
    - Searching and opening the playlist card exposes all three summaries with
      no `Ep N` labels, and no orphaned summary resource IDs remain.
    - The resource date is the source playlist publication date, 2026-04-25;
      the UI displays the latest grouped summary date.
    - `npm run content:guard`, `npm run check`, and `npm run build` pass without
      an exception for the playlist ID.

- [ ] **Task 9: Add selected new public summaries**
  - Scope: `src/content/transcripts/coding-with-agents/`,
    `src/content/summaries/coding-with-agents/`
  - Depends on: Tasks 6 and 8
  - Acceptance:
    - Public transcript sidecars and hand-written summaries are added in bounded
      editorial changes for reviewed candidates `fu7th5HiADo`, `5H862RhMgOU`,
      `wbsDZpVB4Lg`, and `C6u5CBIXRf0`.
    - Each summary uses resource ID 31,
      `collection: "the-west-coast-builders"`, its actual publication date, and
      source-faithful timestamp anchors; no standalone resource entry is added.
    - Each public sidecar follows the root transcript contract and is compared
      with the corresponding source-library transcript. Existing source-library
      files are not imported into Astro or linked across the source-only
      boundary.
    - Broader playlist members 4, 7, 8, and 9 are not published automatically;
      any later inclusion requires a transcript-based scope decision.
  - Notes: New public content never uses temporary guard exceptions.

- [ ] **Task 10: Verify and close the work item**
  - Scope: source library, public resources, work-item artifacts
  - Depends on: Tasks 1–9
  - Acceptance:
    - Final status and progress record the exact source baseline, public
      collection membership, unavailable/pending tail, and any deferred public
      candidates.
    - All verification commands below pass, both source-only boundary searches
      return no matches, and `git status --short --branch` contains no accidental
      build output or unrelated staged files.
    - `plan.md` task markers, `progress.md`, and `index.md` are updated; the work
      item becomes `completed` only after the requested local tracking and
      public regrouping are finished.

## Implementation Notes

- Use the selected playlist slug for every remote and capture command. Remote
  credentials remain process-local and must never be printed or committed.
- Treat the authoritative sync report, not this research snapshot, as current
  membership. Record additions, removals, moves, retitles, availability changes,
  and publication-date changes.
- Keep source changes reviewable: onboarding structure, thin slice, bounded
  capture batches, source editorial/review, collection UI, and public
  consolidation should be separate logical commits.
- The initial public regrouping preserves content; source review and new public
  publication are separate hats. Do not rewrite the three existing public
  summaries merely to make them look uniform.
- Add `progress.md` at implementation start. Record every public-impact decision,
  exception removal, capture outcome, review result, verification result, and
  next action.

## Constraints / Decisions

- Attribution is `multiSpeaker: true`; no Mayank author record, relationship, or
  author synthesis is created for this playlist.
- `transcriptLanguage` and `summaryLanguage` are `en`, supported by official
  default language/audio metadata for all 11 current videos and the existing
  English public artifacts.
- Mayank's provenance belongs in overview/resource prose as confirmed host,
  curator, playlist owner, and source channel. Guest claims remain guest claims.
- All 11 videos are tracked locally. Only seven identified coding-agent videos
  are initial public candidates.
- Public grouping uses a non-episodic collection. Playlist positions are not
  durable episode numbers or chronology evidence.
- Existing public and source-library transcript copies remain separate. No
  symlinks, moves, imports from `src/content/youtube`, or transcript-store
  refactor are in scope.
- Never use `--force`. Retry unavailable captions only in a separate explicitly
  authorized retry session.
- Stop and update the plan if the authoritative playlist attribution, language,
  identity, or membership materially differs from the evidence in
  `research.md`.

## Acceptance Criteria

- The source catalog, manifest, video artifacts, and reviewed overview track The
  West Coast Builders under the multi-speaker contract.
- Mayank and every guest are attributed accurately without converting a hosted
  interview corpus into a Mayank author synthesis.
- One public playlist resource replaces standalone entries 15, 16, and 19 and
  exposes the preserved summaries through a non-episodic collection UI.
- Selected new coding-agent interviews can be added under the same resource only
  after source review, while broader interviews remain source-only by default.
- No temporary onboarding exceptions remain, the public-content guard passes,
  and the YouTube tree remains absent from Astro routes and build output.

## Verification

- `npm run youtube:library -- status`
- `npm run youtube:library -- audit`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs .agents/scripts/youtube-library-structural-audit.test.mjs .agents/scripts/public-content-guard.test.mjs`
- `npm run content:guard`
- `npm run lint:fix`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist`
- `git diff --check`
- `git status --short --branch`
