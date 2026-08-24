# Multi-topic resource library

Status: in-progress
Category: feature
Updated: 2026-08-24

## Why

Extend the site beyond its Coding with Agents catalog so cloud/GCP and security resources can be stored, maintained, summarized, and browsed without duplicating topic-specific infrastructure. Onboard the 12 supplied Google Cloud Tech playlists as locally tracked collections with transcript-backed editorial summaries.

## Summary

The playlist research, generic topic-catalog foundation, and single-origin context hub are complete. Cloud and Security now have independent public routes, existing Coding with Agents behavior remains compatible, and public-resource validation is topic-agnostic. English transcript/summary language, multi-speaker attribution, the six-full/six-curated capture split, and the single-origin context-hub architecture are approved. Playlist onboarding is the active implementation slice.

## Artifacts

- Research: [research.md](research.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: [progress.md](progress.md)
- Decisions: [decisions/site-topology.md](decisions/site-topology.md)
- Handoffs: none

## Next Action

- Configure and synchronize the twelve approved Google Cloud Tech playlists, retaining complete manifests before proposing exact ordered curation for the six broad collections.

## Open Questions

- [x] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and `multiSpeaker: true` for all 12 playlists.
- [x] Approve the proposed six-full/six-curated capture split.
- [ ] Approve the exact ordered selections for the six broad or stale playlists after candidate curation is prepared.
- [x] Confirm the single-origin hub and context-path architecture before restructuring the main site.
