# Recently added content exploration

Status: completed
Category: feature
Updated: 2026-10-10

## Why

Make newly added posts and resources easy to discover even when their sources were published long ago. Explore the existing content model, evaluate independent high-mode research, and provide small interactive prototypes before choosing production integration.

## Summary

Implemented the production static archive with mixed content and topic-pill navigation, explicit addition dates, and 23 evidence-linked historical estimates. The 329 undated legacy identities remain in the library. Oracle review findings about stale exemptions and wrong-owner dates are addressed with build validation and tests. Ownership and migration rules are retained in README.md; historical evidence is retained in src/data/recent-additions-history.json.

## Artifacts

- [Research and proposed integration](research.md)
- [Implementation plan](plan.md)
- Prototype data: `src/components/prototypes/recent-data.ts`
- Interactive views: `src/components/prototypes/RecentPrototype.tsx`
- Development-only route: `src/pages/prototypes/recent/[view].astro`
- Owning thread: https://ampcode.com/threads/T-01a125fe-394c-74c1-adc1-fc08aeb6c01c

## Next Action

- None.

## Open Questions

- None blocking. Historical coverage is intentionally partial and labelled approximate; no prototype dates enter production.
