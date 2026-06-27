# Resource discovery filters

Status: planned
Category: feature
Updated: 2026-06-27

## Summary

Improve the Coding with Agents resources hub so visitors can navigate the curated talks, podcasts, playlists, summaries, and transcript-backed resources by topic and search intent instead of only by reverse chronology. This work is resources-only: posts/articles stay unchanged because their concepts will be revisited separately later.

Branch: `feature/resource-discovery-filters`

## Artifacts

- Research: `research.md`
- PRD: none
- Plan: `plan.md`
- Progress: `progress.md`
- Decisions: none

## Next Action

- Implement Task 1 in `plan.md`: migrate the resource manifest from broad/freeform `tags` to one controlled `topics` field using the approved topic vocabulary.

## Open Questions

- None. Use one controlled taxonomy field named `topics`; do not keep separate display tags and filter topics.
