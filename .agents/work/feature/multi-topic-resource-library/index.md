# Multi-topic resource library

Status: blocked
Category: feature
Updated: 2026-08-24

## Why

Extend the site beyond its Coding with Agents catalog so cloud/GCP and security resources can be stored, maintained, summarized, and browsed without duplicating topic-specific infrastructure. Onboard the 12 supplied Google Cloud Tech playlists as locally tracked collections with transcript-backed editorial summaries.

## Summary

The playlist research and generic topic-catalog foundation are complete. Cloud and Security now have independent public routes, existing Coding with Agents behavior remains compatible, and public-resource validation is topic-agnostic. Source capture is waiting on explicit language and multi-speaker confirmation; broad playlist curation is waiting on human approval.

## Artifacts

- Research: [research.md](research.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: [progress.md](progress.md)
- Decisions: none
- Handoffs: none

## Next Action

- Obtain the language and speaker-attribution confirmation, add all twelve playlist definitions to the source-only catalog, and run one bounded capture before approving bulk transcript sync.

## Open Questions

- [ ] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and `multiSpeaker: true` for all 12 playlists before editing `src/content/youtube/catalog.json`.
- [ ] Approve the proposed full-capture versus curated scope, including exact selections for the six broad or stale playlists.
