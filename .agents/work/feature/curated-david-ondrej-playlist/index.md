# Curated David Ondrej playlist resource

Status: completed
Category: feature
Updated: 2026-08-07

## Summary

Track the complete David Ondrej Podcast playlist for membership and drift while
publishing only a small, explicitly human-approved subset in Coding with
Agents. Consolidate selected video summaries under one playlist resource and
reuse the two existing standalone transcript-backed summaries instead of
creating duplicate editorial artifacts.

## Artifacts

- Research: [research.md](./research.md)
- PRD: [prd.md](./prd.md)
- Plan: [plan.md](./plan.md)
- Progress: [progress.md](./progress.md)
- Decisions: none

## Next Action

- None. The reviewed five-video collection is implemented, verified, and ready
  for normal playlist drift checks.

## Open Questions

- [x] Approve or revise the proposed ordered five-video selection.
- [x] Confirm that resources 25 and 31 should be removed as standalone cards
      after their existing summaries are reassigned to the consolidated
      playlist resource.
- [x] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and
      `multiSpeaker: true`; these values must be explicit under the YouTube
      library contract.
