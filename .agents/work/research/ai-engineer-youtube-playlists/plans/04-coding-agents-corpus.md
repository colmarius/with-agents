# Plan 04: Build and maintain the Coding Agents corpus

Apply the reviewed multi-speaker workflow to the larger, actively maintained
Coding Agents playlist. Complete the initial backfill without treating future
staleness as a reason for automatic editorial rewrites.

## Goals

- Capture and summarize every currently available Coding Agents video in safe,
  resumable batches.
- Produce a source-anchored cross-event overview only after the bounded-corpus
  attribution gate passes.
- Define a durable session-based maintenance cadence for later additions and
  retitles.

## Tasks

- [x] **Task 1: Refresh the active-playlist baseline**
  - Scope: selected check/sync for `ai-engineer-coding-agents`, manifest diff,
    work-item `progress.md`
  - Depends on: Plan 03 Task 5 passes
  - Acceptance:
    - A fresh read-only check and authoritative selected sync are reviewed before
      capture because Coding Agents membership is active.
    - Every addition, retitle, removal, or availability change receives the
      skill's mandatory public-impact and multi-speaker attribution review.
    - Progress records current manifest, available, captured, pending,
      unavailable, and overlap counts and any change from Plan 02's baseline.
    - The same exit protocol is fixed for all sessions: `--limit 1` thin slice,
      later `--limit 2`, no refill, stop on throttle, fatal exit `1`, and
      outcome-aware handling of exit `2`.
  - Notes: Use `rg -l -e` for IDs such as `-QFHIoCo-Ko`.

- [x] **Task 2: Prove the Coding Agents editorial thin slice**
  - Scope: one pending Coding Agents video directory,
    `src/content/youtube/playlists/ai-engineer-coding-agents/overview.md`,
    work-item `progress.md`
  - Depends on: Task 1
  - Acceptance:
    - Run exactly one `capture --playlist ai-engineer-coding-agents --limit 1`.
    - Review the transcript source-faithfully and write one deliberate draft
      summary whose framing names supported speaker(s) and affiliation(s).
    - Create the draft overview with exact headings, current Coverage math, one
      incorporated ID, and the required AI Engineer curator/source-channel
      statement.
    - The thin slice applies all corrections from the bounded attribution review
      before any broad Coding Agents capture.
  - Notes: Do not infer a cross-event thesis from a single thin-slice video.

- [x] **Task 3: Backfill Coding Agents in resumable two-video batches**
  - Scope: remaining available Coding Agents video directories, overview,
    work-item `progress.md`
  - Depends on: Task 2
  - Acceptance:
    - Each capture session runs one
      `capture --playlist ai-engineer-coding-agents --limit 2` command and
      follows Task 1's stop protocol.
    - Every successful final capture receives an editorial transcript pass and
      a deliberate draft summary during the same bounded session.
    - Existing global video artifacts are reused without force or overwrite if
      later manifest overlap appears.
    - The overview is refreshed from summaries in every session, with exact
      `coveredVideoIds`, honest state counts, attributed claims, anchored
      evidence, and `Editorial:` prefixes.
    - At the final initial-backfill sync, no available manifest ID is pending;
      unavailable IDs remain explicitly recorded.
  - Notes: A transient exit `2` ends the session even when the two-video limit
    was not filled. Resume later; never refill immediately.

- [ ] **Task 4: Review the complete cross-event synthesis**
  - Scope: all Coding Agents summaries and
    `playlists/ai-engineer-coding-agents/overview.md`, work-item `progress.md`
  - Depends on: Task 3
  - Acceptance:
    - A dedicated review verifies every speaker/affiliation attribution,
      timestamp or summary anchor, editorial label, and `coveredVideoIds` entry.
    - The overview distinguishes speaker claims from cross-speaker editorial
      synthesis and does not imply consensus across vendors, researchers, and
      practitioners.
    - Any chronology uses manifest `publishedAt` only as upload time and requires
      event-year, title, or transcript corroboration for talk timing.
    - The overview remains `draft` unless the dedicated review establishes the
      complete contracted quality bar.
  - Notes: The research's provisional “code generation to harness engineering”
    angle is a hypothesis, not an acceptance criterion.

- [ ] **Task 5: Record the active-playlist maintenance cadence**
  - Scope: work-item `progress.md`, playlist status, maintenance handoff notes
  - Depends on: Task 4
  - Acceptance:
    - Routine checks remain read-only and may report additions without forcing
      immediate capture or overview edits.
    - Each explicit future update is one bounded session: check/sync, inspect the
      authoritative diff, run public-impact review, capture at most two pending
      videos, review transcripts, write summaries, and refresh the overview.
    - Overview staleness between deliberate update sessions is documented as an
      expected state, not silently repaired by tooling.
    - Retitles trigger summary-framing attribution review; removals do not delete
      global video source artifacts.
  - Notes: Do not create a recurring schedule unless the user explicitly asks
    for one.

## Implementation Notes

- Coding Agents is cross-event and mutable. Record a baseline at each explicit
  update rather than treating playlist order as stable chronology.
- The leading-dash video ID is ordinary source data. The skill/test prerequisite
  makes it safe; do not rename its directory or special-case its content.
- Keep each two-video capture/editorial session independently reviewable and
  update the work-item plan checkbox/progress state as it completes.
- A public article or resource orientation is a separate later docs work item
  after the corpus and overview are sufficiently reviewed.

## Constraints / Decisions

- Plan 03 attribution gate is mandatory.
- Thin slice is one video; later capture batches are two videos.
- Editorial artifacts begin at `draft` and are never auto-generated or
  overwritten.
- No schedule, public post, public resource, or author synthesis is part of this
  plan.

## Acceptance Criteria

- Every available Coding Agents manifest ID has one captured English transcript
  and one draft or reviewed summary, or a faithful unavailable state.
- The cross-event overview is current for every incorporated summary and passes
  a dedicated attribution/evidence review.
- Capture sessions are resumable after throttling and never use immediate
  refill, routine force, or silent retry.
- A session-based maintenance contract is durable in the work item.

## Verification

- `npm run youtube:library -- status`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs`
- `npm run check`
- `npm run build`
- `rg -n "src/content/youtube" src/content.config.ts src/pages src/components src/layouts` returns no matches.
- `rg -n '"publication":"source-only"|"publication": "source-only"' dist` returns no matches.
- Verify Coding Agents manifest available IDs against transcript, summary, and
  overview coverage with a read-only script or in-memory checker.
- `git diff --check`
