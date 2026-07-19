# Private YouTube Playlist Knowledge Library

Status: planned
Category: tooling
Updated: 2026-07-19

## Summary

Build a local-only workflow that discovers changes in configured YouTube playlists, captures source-language transcripts, supports source-faithful per-video summaries, and maintains playlist- and author-level synthesis. Private configuration and content must remain outside Astro's public content tree and outside the public repository; only generic tooling and documentation may be committed.

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: none
- Decisions: none

## Next Action

- Implement Task 1 in `plan.md`: establish the ignored private boundary and extract reusable transcript capture without changing the existing public transcript command.

## Open Questions

- [ ] After the local thin slice works, decide whether the ignored library should remain local-only or be backed up in a separate private repository or encrypted store. This does not block implementation.
