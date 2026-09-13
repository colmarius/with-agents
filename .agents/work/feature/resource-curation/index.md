# Resource curation and editorial relevance

Status: completed
Category: feature
Updated: 2026-09-13

## Why

Help readers find the most relevant resources instead of relying on recency and author discovery. Implement the reviewed editorial audit using separate High orb workers, integrate here, review with Oracle, verify, and commit.

## Summary

Integrated the separate High-orb data and UI implementations. All 130 catalog memberships have reviewed relevance reasons and four root catalogs expose 19 explicit starting-summary links. Every resource, membership, chronological order, search document, and existing link remains intact. Final verification passed and Oracle closed its only finding after collection-scoped wording was clarified. No hiding, numeric scoring, evidence-taxonomy migration, push, or deployment.

## Artifacts

- Research: audit outcomes retained in `src/data/resources/curation.ts`; maintenance contract in README
- PRD: none
- Plan: [Implementation and verification](plan.md)
- Progress: [Observed evidence](progress.md)
- Decisions: none
- Handoffs: none

## Next Action

- None.

## Open Questions

- None.
