# Recently added content exploration

Status: blocked
Category: feature
Updated: 2026-10-10

## Why

Make newly added posts and resources easy to discover even when their sources were published long ago. Explore the existing content model, evaluate independent high-mode research, and provide small interactive prototypes before choosing production integration.

## Summary

Two development-only prototypes are ready for feedback: `/prototypes/recent/timeline` and `/prototypes/recent/compact`. They use real canonical content and destinations with explicitly illustrative addition dates. Existing schemas, content, navigation, search, and production routes remain unchanged. Production implementation awaits design and historical-date policy feedback.

## Artifacts

- [Research and proposed integration](research.md)
- Prototype data: `src/components/prototypes/recent-data.ts`
- Interactive views: `src/components/prototypes/RecentPrototype.tsx`
- Development-only route: `src/pages/prototypes/recent/[view].astro`
- Owning thread: https://ampcode.com/threads/T-01a125fe-394c-74c1-adc1-fc08aeb6c01c

## Next Action

- Gather user feedback on the full timeline versus compact panel and the historical-date policy. Do not promote demo dates to real metadata. Then scope production implementation.

## Open Questions

- Full archive with a small home teaser, or compact panel only?
- Start reliable tracking at a cutover with a small reviewed backfill, or invest in a wider historical backfill?
