# YouTube Knowledge Library

Status: in-progress
Category: tooling
Updated: 2026-07-20

## Summary

Build a committed, source-only library that discovers changes in configured YouTube playlists, captures source-language transcripts, supports source-faithful per-video summaries, and maintains playlist- and author-level synthesis. The library is reusable across authors and playlists and remains excluded from Astro collections, routes, and production output even though its source files are available in the public repository.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Handoffs: `handoff-task-1.md`, `handoff-task-2.md`, `handoff-task-3.md`, `handoff-task-4.md`, `handoff-task-5a.md`, `handoff-task-5b.md`, `handoff-task-5c.md`, `handoff-task-5d.md`, `handoff-task-5e.md`, `handoff-task-5f.md`, `handoff-task-5g.md`, `handoff-task-5h.md`, `handoff-task-5i.md`, `handoff-task-5j.md`, `handoff-task-5k.md`, `handoff-task-5l.md`
- Decisions: none

## Next Action

- Execute only the eleventh bounded backfill batch from `handoff-task-5l.md`
  in a dedicated implementation thread. Keep the four-attempt ceiling, then
  derive Task 5m from actual outcomes without starting synthesis or Task 6.

## Open Questions

- None. Committed source visibility is acceptable; the material must remain absent from the rendered site and production bundles unless a later explicit publication workflow promotes it.
