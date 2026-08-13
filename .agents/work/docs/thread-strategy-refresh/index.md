# Refresh Thread Strategy Articles

Status: completed
Category: docs
Updated: 2026-08-13

## Why

Refresh the public thread-usage guidance after automatic compaction and addressable
agent threads changed the practical trade-offs. Ground the new operating model in
recent sources and the author's recent Amp usage, then review related articles for
stale small-thread assumptions.

## Summary

Research supports replacing “always start small” with responsibility-based thread
boundaries: keep exploration and coordination in a coherent long-lived workstream,
then use fresh contexts for bounded implementation and independent verification.
The primary article is refreshed and six related public posts are aligned. Both
editorial rounds are committed on `editorial/thread-strategy-refresh`; combined
checks and browser verification passed.

## Artifacts

- Research: [research.md](research.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: [progress.md](progress.md)
- Decisions: none
- Handoffs: none

## Next Action

- None.

## Open Questions

- None.
