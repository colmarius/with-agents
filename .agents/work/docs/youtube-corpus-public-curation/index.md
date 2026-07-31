# YouTube corpus public curation

Status: in-progress
Category: docs
Updated: 2026-07-31

## Summary

Turn the completed source-only YouTube corpus into a small amount of
human-curated public value without mirroring the library into posts or
resources. The work first reconciles existing public citations with reviewed
source evidence, then adds only the resource orientation and article work that
has a distinct reader job.

The source library contains 152 unique tracked video IDs and 141 transcript and
summary sets. All 63 unique AI Engineer summaries and their three playlist
overviews are reviewed. The 78 captured Antirez summaries, two overviews, and
author synthesis remain draft, even though 14 Antirez source IDs already support
public content. That public-source review gap is the first implementation task.

## Artifacts

- Research: [research.md](./research.md)
- PRD: none
- Plan: [plan.md](./plan.md)
- Progress: [progress.md](./progress.md)
- Decisions: recorded in research and progress

## Next Action

- Implement Task 0 (writer-owned JSON canonical formatting), then Task 1's
  public-source reconciliation including the Antirez overviews and author
  synthesis.

## Open Questions

- [ ] Does the proposed team-level measurement article remain distinct from the
      public field guide, proof-stack article, and Antirez behavior article?
      Recommended default: publish it only if the Task 5 overlap gate proves a
      separate team/adoption-measurement reader job; otherwise extend an
      existing post minimally.
- [ ] Does the Antirez risk sample justify reviewing all 78 summaries?
      Recommended default: decide from the Task 2 ten-summary sample; never
      bulk-promote drafts.
- [ ] Does Agent Reliability justify a second article?
      Recommended default: decide after the first public slice and defer unless
      the reliability-stack thesis remains distinct and can keep vendor caveats
      visible.

Resolved by the 2026-07-31 stress review (see `progress.md`): the Antirez
overviews and author synthesis review moved into Task 1; Task 8 uses
promote-then-delete with a durable-rule promotion table; the public-citation
guard binds publishable content only and includes a playlist-level rule; the
metadata formatter churn became Task 0.
