# Multi-topic resource library

Status: in-progress
Category: feature
Updated: 2026-08-24

## Why

Extend the site beyond its Coding with Agents catalog so cloud/GCP and security resources can be stored, maintained, summarized, and browsed without duplicating topic-specific infrastructure. Onboard the 12 supplied Google Cloud Tech playlists as locally tracked collections with transcript-backed editorial summaries.

## Summary

The playlist research, generic topic-catalog foundation, single-origin context hub, and source-playlist synchronization are complete. Cloud and Security now have independent public routes, existing Coding with Agents behavior remains compatible, and public-resource validation is topic-agnostic. All 12 approved Google Cloud Tech playlists have complete local manifests, and the six broad collections now have user-approved reviewed curation totaling 67 selected videos.

## Artifacts

- Research: [research.md](research.md)
- Curation candidates: [curation.md](curation.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: [progress.md](progress.md)
- Decisions: [decisions/site-topology.md](decisions/site-topology.md)
- Active handoffs:
  - [Cloud Security full-series backfill](https://ampcode.com/threads/T-01a035b0-410b-738a-8ec2-ce3c00e0c77b)
  - [Pub/Sub full-series backfill](https://ampcode.com/threads/T-01a035b0-48f0-74cb-b71f-eab5e430ceeb)
  - [Engineering for Reliability full-series backfill](https://ampcode.com/threads/T-01a035b0-5e4e-774a-8a02-33b7103de889)
  - [Build With Google Cloud full-series backfill](https://ampcode.com/threads/T-01a035b0-6cca-7740-8c75-af8827d109ba)

## Next Action

- Prove one strict-English capture → draft summary → draft overview thin slice for each reviewed broad playlist, then delegate the remaining source backfill in disjoint playlist-owned batches.

## Open Questions

- [x] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and `multiSpeaker: true` for all 12 playlists.
- [x] Approve the proposed six-full/six-curated capture split.
- [x] Approve the exact ordered selections for the six broad or stale playlists after candidate curation is prepared.
- [x] Confirm the single-origin hub and context-path architecture before restructuring the main site.
