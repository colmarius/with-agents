# YouTube playlist sync plan — 2026-08-06

Synchronize the changed Antirez and AI Engineer playlist manifests, perform
bounded capture and draft editorial follow-up, and leave the source-only library
in a verified, reviewable state.

## Goals

- Apply the authoritative remote playlist changes without rewriting existing
  editorial artifacts automatically.
- Capture and summarize a bounded set of new videos while recording the pending
  tail and all public-impact decisions.

## Tasks

- [x] **Task 1: Synchronize selected manifests**
  - Scope: `src/content/youtube/playlists/*/manifest.json`
  - Depends on: none
  - Acceptance:
    - Each requested playlist receives one selected check followed by one
      authoritative selected sync.
    - Every addition, removal, move, and identity change in the authoritative
      diff is inspected and recorded.

- [x] **Task 2: Review public impact and baseline**
  - Scope: `src/content/posts`, `src/content/summaries`, `src/data/resources`,
    `src/content/youtube`
  - Depends on: Task 1
  - Acceptance:
    - Exact-ID searches cover every affected membership ID and record `keep`,
      `fix`, or `block` decisions.
    - Status counts, overlap, artifact reuse, overview state, and pending work
      are recorded before capture.

- [x] **Task 3: Capture and edit a bounded batch**
  - Scope: `src/content/youtube/videos`, playlist overviews, and the Antirez
    author synthesis
  - Depends on: Task 2
  - Acceptance:
    - AI Engineer capture runs at most once with a limit of two.
    - Antirez capture remains selected and bounded.
    - Every successful capture receives source-faithful transcript review, a
      draft summary, and deliberate overview/synthesis refresh where required.

- [x] **Task 4: Verify and record final state**
  - Scope: source-only YouTube library and work-item artifacts
  - Depends on: Task 3
  - Acceptance:
    - Required status, audit, test, source-boundary, and diff checks pass.
    - Final baseline and pending tail are recorded and changes are committed in
      coherent steps.

## Implementation Notes

Treat sync reports and manifest diffs as authoritative. Preserve global video
artifacts when playlist membership changes. New or revised editorial artifacts
remain `draft`; promotion to `reviewed` is out of scope.

## Constraints / Decisions

- Never use `--force` or retry unavailable captions in this session.
- Do not run a second AI Engineer capture even if fewer than two items finish.
- Stop rather than broadening into public-content correction if provenance or
  public impact is unresolved.

## Acceptance Criteria

- The selected manifests match the authoritative remote state.
- Bounded follow-up is complete, verified, and leaves an explicit pending tail.

## Verification

- `npm run youtube:library -- status`
- `npm run youtube:library -- audit`
- `node --test .agents/scripts/youtube-library.test.mjs .agents/scripts/youtube-transcript-core.test.mjs .agents/scripts/youtube-library-structural-audit.test.mjs`
- `npm run check`
- `npm run build`
- Source-only boundary searches and `git diff --check`
