# YouTube library maintenance workflow plan

Add one structured, read-only library check and one project skill that turns its
results into safe, bounded maintenance. Preserve the existing deterministic
sync/capture/status behavior and keep editorial and public-content changes under
explicit agent/human review.

## Goals

- Make “check the tracked YouTube playlists” a discoverable, read-only operation
  with human and machine-readable results.
- Make explicit sync requests follow a consistent manifest, transcript,
  editorial, public-impact, verification, and commit workflow.
- Support infrequent playlist additions and caption retries without adding
  mutating convenience commands or weakening source-only boundaries.
- Leave a stable contract for a later check-only scheduled workflow.

## Tasks

- [x] **Task 1: Add the structured read-only check command**
  - Scope: `.agents/scripts/youtube-library.mjs`,
    `.agents/scripts/lib/youtube-library-core.mjs`,
    `.agents/scripts/lib/youtube-library-capture-status.mjs`, and
    `.agents/scripts/youtube-library.test.mjs`
  - Depends on: none
  - Acceptance:
    - Add `check [--playlist <slug>]... [--json]` without adding a package alias
      or changing the existing `sync`, `capture`, `status`, and `help` contracts.
    - Reuse playlist selection, API-key handling, read-only synchronization,
      existing normalized diffs, and `buildLibraryStatus`; do not create a second
      normalization, diff, or status model.
    - Emit selected playlist records in catalog order. `--playlist` limits
      remote checks and playlist records to the selected slugs; include related
      authors with their current full cross-playlist synthesis status.
    - Represent first-sync state, additions, removals, moves, retitles,
      availability changes, local transcript/summary/overview state, related
      author state, and deterministic aggregate counts.
    - Continue after a selected playlist API failure, include a sanitized
      per-playlist error, and retain complete useful local status. Missing API
      key, invalid catalog, or a failure that prevents a useful report remains
      fatal.
    - Exit `0` for a complete check regardless of detected work, `1` for fatal
      failure, and `2` for a useful partial report with at least one remote
      playlist error.
    - Human output distinguishes committed local state from hypothetical remote
      changes. JSON output is deterministic, contains no volatile check
      timestamp, credential, full request URL, or stack trace, and is emitted
      even for exit `2`.
    - Focused tests cover argument parsing, no-op and changed checks, first sync,
      selected playlists, partial API failure, fatal preflight, JSON/report
      shape, exit semantics, credential sanitization, and proof that check makes
      no directory or file write.
  - Notes: Prefer small composition helpers in the existing library modules. Add
    a focused module only if combining remote and local reports would otherwise
    give an existing module two unrelated responsibilities.

- [ ] **Task 2: Add the maintenance skill and discovery triggers**
  - Scope: `.agents/skills/maintaining-youtube-library/SKILL.md`,
    `.agents/skills/AGENTS.md`, and root `AGENTS.md`
  - Depends on: Task 1
  - Acceptance:
    - Create a valid workspace skill named `maintaining-youtube-library` with a
      quoted, sub-250-character description that triggers on checking new
      videos, syncing tracked playlists, retrying unavailable captions, and
      adding a playlist.
    - Keep root guidance to a short trigger and source-only invariant near the
      existing YouTube workflow; register the skill in the scoped skills table.
      Link to `src/content/youtube/AGENTS.md` instead of duplicating its contracts.
    - Define four linear modes: read-only check, explicit sync/update, manual
      catalog-based playlist addition with a one-video thin slice, and bounded
      unavailable-caption retry.
    - Require a clean or explicitly understood `src/content/youtube/` worktree
      before sync, treat the sync report as authoritative, keep capture bounded,
      and prohibit routine `--force` use without explicit destructive-operation
      approval.
    - Keep new summaries and syntheses at `draft`; refresh affected playlist
      overviews in the summary session and review the author synthesis after a
      related overview changes. Do not silently generate, promote, or publish
      editorial artifacts.
    - For every retitled, removed, or availability-changed video ID, require
      `rg -l '<video-id>' src/content/posts src/content/summaries
      src/data/resources`, inspect every hit, and record a keep/fix decision.
      Search playlist IDs when playlist-level identity or availability changes.
    - For additions, review public playlist orientations, resource dates, corpus
      counts, and material thesis changes without automatically editing public
      content. Use a work item and bounded batches when a small single-session
      update would be unreasonable.
    - End each mutating workflow with status, relevant focused tests, project
      checks when code/public content changed, source-boundary verification, and
      reviewable commits.
  - Notes: Do not add skill-local scripts, a central dependency registry, an
    `add` subcommand, `youtube:update`, or a short npm alias.

- [ ] **Task 3: Verify the complete maintenance contract**
  - Scope: Task 1–2 changes, existing public/source boundaries, and this work
    item's `plan.md`, `progress.md`, and `index.md`
  - Depends on: Tasks 1 and 2
  - Acceptance:
    - Run the focused Node test files and retain all existing playlist,
      transcript, capture, status, and public single-video regression coverage.
    - Run library help and status smoke checks. If `YOUTUBE_API_KEY` is available,
      run live human and JSON checks without sync/capture writes; otherwise
      record that fixture-backed remote verification is authoritative and leave
      the live check explicitly unverified.
    - Prove `check` leaves manifests and the source tree byte-identical, including
      on remote changes and partial failures in focused fixtures.
    - Run scoped Biome checks on touched code, `npm run check`, `npm run build`,
      `git diff --check`, and source-only boundary guards over source and `dist/`.
    - Attempt the repository-required lint command; if it fails only on the known
      unrelated `.agents/references/dot-agents/site/` baseline, restore any
      unrelated formatter drift and record the limitation honestly.
    - Load/review the skill against representative trigger phrases and confirm it
      routes check versus sync intent correctly and includes the mandatory
      public-impact decision step.
    - Update task checkboxes, append `progress.md`, set `index.md` to completed,
      and record any deferred live credentials or scheduling decision.
  - Notes: Verification must not run manifest sync, transcript capture, retry, or
    force merely to produce evidence. No corpus or public content change is
    expected in this tooling slice.

## Implementation Notes

- Keep one dependency direction: public content may cite source videos, but
  source catalog/tooling must not know about public site artifacts.
- Remote check results are advisory. If a later sync differs, the sync report is
  the source of truth for capture and editorial work.
- Changes found are not errors. Exit codes communicate command completeness;
  report fields communicate maintenance work.
- Use current catalog order and stable arrays so JSON can become a scheduler
  contract without normalization churn.
- Keep API errors sanitized at the request boundary and never serialize secrets,
  query strings, or stacks.
- Do not infer author identity, transcript language, or summary language while
  adding playlists; require explicit catalog values and existing validation.

## Constraints / Decisions

- The user selected mandatory public-impact review for every retitle, removal,
  and availability change that matches public content.
- Routine check is read-only and requires `YOUTUBE_API_KEY`; `status` remains the
  local-only command.
- Discovery/capture are deterministic tooling; summaries and syntheses remain
  explicit editorial work with `draft` as the default.
- No media download, LLM API in scripts, automatic publication, public route,
  derivative registry, scripted catalog wizard, package alias, or scheduled
  workflow belongs in the first implementation.
- Scheduling remains a later check-only phase after the JSON contract is stable.
  Issue versus job-summary notification is deliberately deferred.

## Acceptance Criteria

- One read-only command tells a human or agent what changed remotely and what is
  incomplete locally without writing files.
- Natural-language maintenance requests load a project skill that distinguishes
  check intent from mutating sync intent.
- Small additions can move through capture and explicit editorial review without
  silent overwrite or publication.
- Public citations affected by retitles, removals, or availability changes
  receive a mandatory, recorded keep/fix decision.
- Existing command behavior, source-only boundaries, and public transcript
  workflows remain compatible.
- The implementation is tested and documented well enough to support a later
  read-only scheduled/manual-dispatch checker without redesigning the report.

## Verification

- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run youtube:library -- help`
- `npm run youtube:library -- status`
- `YOUTUBE_API_KEY=... npm run youtube:library -- check`
- `YOUTUBE_API_KEY=... npm run youtube:library -- check --json`
- `npx biome check <touched-code-files>`
- `npm run lint:fix`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts`
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist`
- `git diff --check`
