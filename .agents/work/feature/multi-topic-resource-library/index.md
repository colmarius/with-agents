# Multi-topic resource library

Status: in-progress
Category: feature
Updated: 2026-08-24

## Why

Extend the site beyond its Coding with Agents catalog so cloud/GCP and security resources can be stored, maintained, summarized, and browsed without duplicating topic-specific infrastructure. Onboard the 12 supplied Google Cloud Tech playlists as locally tracked collections with transcript-backed editorial summaries.

## Summary

The generic catalog foundation, single-origin context hub, and all 12 Google Cloud Tech manifests are complete. Explicit reviewed curation selects 126 videos; all are captured, summarized, and independently source-reviewed, and the structural audit passes. Twelve canonical public playlist records (IDs 57–68) are registered, with the two dedicated security collections cross-listed in Cloud and Security. Seven disjoint public-summary batches are active for all 126 selected videos.

## Artifacts

- Research: [research.md](research.md)
- Curation candidates: [curation.md](curation.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: [progress.md](progress.md)
- Decisions:
  - [Site topology](decisions/site-topology.md)
  - [Google Cloud collection publication](decisions/google-cloud-collection-publication.md)
- Active handoffs:
  - [Serverless Expeditions public summaries](https://ampcode.com/threads/T-01a035ea-5a26-76b0-a8e6-fe0ddfc9b695)
  - [Cloud Security public summaries](https://ampcode.com/threads/T-01a035e4-867d-7494-81c0-9f4e705a03ec)
  - [Pub/Sub public summaries](https://ampcode.com/threads/T-01a035e4-8e18-76d6-9cb5-e352a04ac315)
  - [Cloud foundations public summaries](https://ampcode.com/threads/T-01a035e4-9576-74fc-b28e-4efec382c8e4)
  - [Engineering for Reliability public summaries](https://ampcode.com/threads/T-01a035e4-9d0e-7516-beb5-f5d9eb51ba3d)
  - [Build and Cloud Bytes public summaries](https://ampcode.com/threads/T-01a035e4-a5e9-75ea-a9f6-1ff7479d1d96)
  - [FinOps and Architecting public summaries](https://ampcode.com/threads/T-01a035e4-aded-7040-a215-45db4c84714f)

## Next Action

- Integrate and inspect the seven public-summary batches, then run combined acceptance and browser proof for Task 8.

## Open Questions

- [x] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and `multiSpeaker: true` for all 12 playlists.
- [x] Approve the proposed six-full/six-curated capture split.
- [x] Approve the exact ordered selections for the six broad or stale playlists after candidate curation is prepared.
- [x] Confirm the single-origin hub and context-path architecture before restructuring the main site.
