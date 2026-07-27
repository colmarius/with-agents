# YouTube library maintenance workflow

Status: planned
Category: tooling
Updated: 2026-07-27

## Summary

Make maintenance of configured YouTube playlists easy to trigger without
collapsing deterministic synchronization and editorial judgment into one opaque
operation. The intended design adds one read-only structured check command, a
project skill for check/sync/capture/editorial orchestration, and a short root
guidance trigger while preserving the source-only and no-silent-publication
boundaries.

## Artifacts

- Research: `research.md`
- PRD: `prd.md`
- Plan: `plan.md`
- Progress: none
- Decisions: none

## Next Action

- Implement Task 1 in `plan.md`: add the read-only structured `check` command
  and focused contract tests without changing sync, capture, or status behavior.

## Open Questions

- None for the first implementation. Notification behavior for the deferred
  scheduled workflow remains intentionally undecided in `prd.md`.
