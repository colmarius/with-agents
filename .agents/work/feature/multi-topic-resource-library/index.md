# Multi-topic resource library

Status: in-progress
Category: feature
Updated: 2026-08-24

## Why

Extend the site beyond its Coding with Agents catalog so cloud/GCP and security resources can be stored, maintained, summarized, and browsed without duplicating topic-specific infrastructure. Onboard the 12 supplied Google Cloud Tech playlists as locally tracked collections with transcript-backed editorial summaries.

## Summary

The generic topic-catalog foundation, single-origin context hub, and synchronization of all 12 Google Cloud Tech playlists are complete. Every playlist now has a strict-English capture, draft source summary, and draft overview. The six full-series collections are fully captured and draft-summarized (61 videos); the six broad collections have user-approved curation totaling 67 selected videos, six captured samples, and disjoint high-orb backfills in progress for the remaining 61 selections. Public Cloud and Security resources remain intentionally unpublished pending dedicated source review.

## Artifacts

- Research: [research.md](research.md)
- Curation candidates: [curation.md](curation.md)
- PRD: none
- Plan: [plan.md](plan.md)
- Progress: [progress.md](progress.md)
- Decisions: [decisions/site-topology.md](decisions/site-topology.md)
- Active handoffs:
  - [Serverless Expeditions curated backfill](https://ampcode.com/threads/T-01a035bf-f70f-770b-ad76-15906f613aa8)
  - [Google Cloud Essentials curated backfill](https://ampcode.com/threads/T-01a035c0-004a-7202-8fe3-4473a40a0a6e)
  - [Get Started with Google Cloud curated backfill](https://ampcode.com/threads/T-01a035c0-08ee-73d1-ad76-a12af9b714d4)
  - [Cloud Bytes curated backfill](https://ampcode.com/threads/T-01a035c0-1356-73ae-ab8a-a672e75da505)
  - [Beyond Your Bill curated backfill](https://ampcode.com/threads/T-01a035c0-1d16-7683-953a-36b85ade5ee7)
  - [Architecting with Google Cloud curated backfill](https://ampcode.com/threads/T-01a035c0-24ad-726b-9447-eedeff585392)

## Next Action

- Inspect and integrate the six curated-backfill patches, run combined source-library verification, and reconcile Task 6 before beginning the separate source-review/publication gate.

## Open Questions

- [x] Confirm `transcriptLanguage: en`, `summaryLanguage: en`, and `multiSpeaker: true` for all 12 playlists.
- [x] Approve the proposed six-full/six-curated capture split.
- [x] Approve the exact ordered selections for the six broad or stale playlists after candidate curation is prepared.
- [x] Confirm the single-origin hub and context-path architecture before restructuring the main site.
