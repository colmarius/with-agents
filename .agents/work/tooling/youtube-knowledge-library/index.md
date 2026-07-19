# YouTube Knowledge Library

Status: planned
Category: tooling
Updated: 2026-07-19

## Summary

Build a committed, source-only library that discovers changes in configured YouTube playlists, captures source-language transcripts, supports source-faithful per-video summaries, and maintains playlist- and author-level synthesis. The library is reusable across authors and playlists and remains excluded from Astro collections, routes, and production output even though its source files are available in the public repository.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: none
- Decisions: none

## Next Action

- Implement Task 1 in `plan.md`: establish `src/content/youtube/` as a committed source-only library and extract reusable transcript capture without changing the existing public transcript command.

## Open Questions

- None. Committed source visibility is acceptable; the material must remain absent from the rendered site and production bundles unless a later explicit publication workflow promotes it.
