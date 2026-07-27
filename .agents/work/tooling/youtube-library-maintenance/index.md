# YouTube library maintenance workflow

Status: researching
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
- Plan: none
- Progress: none
- Decisions: none

## Next Action

- Resolve the public-citation response question below with the user, record the
  decision in `prd.md`, then create the implementation-ready `plan.md`.

## Open Questions

- [ ] When a publicly cited video is retitled, removed from a playlist, or goes
  private/deleted, must the workflow require a public-content search and an
  explicit keep/fix decision for every hit? Recommended default: yes; use
  `rg` by video ID and record the decision in the commit message.
