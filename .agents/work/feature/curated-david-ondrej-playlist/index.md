# Curated David Ondrej playlist resource

Status: blocked
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
- Plan: none
- Progress: none
- Decisions: none

## Next Action

- Obtain human approval for the proposed five-video selection, confirm whether
  the two standalone cards should be folded into the playlist card, and confirm
  `en`/`en` plus `multiSpeaker: true` as the playlist configuration. Then write
  an implementation-ready plan before changing catalog or public content.

## Open Questions

- [ ] Approve or revise the proposed ordered five-video selection.
- [ ] Confirm that resources 25 and 31 should be removed as standalone cards
      after their existing summaries are reassigned to the consolidated
      playlist resource.
- [ ] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and
      `multiSpeaker: true`; these values must be explicit under the YouTube
      library contract.
