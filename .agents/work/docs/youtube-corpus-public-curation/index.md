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
overviews are reviewed. Task 1 closed the public-source review gap: the 14
publicly referenced Antirez summaries, both Antirez overviews, and the author
synthesis are now reviewed, and the identified public citation/claim/date
defects are corrected. Task 2 reviewed a deterministic ten-summary unreferenced
Antirez sample, fixed three material and two minor source-precision defects, and
promoted only those ten passing artifacts. A full review is not justified now;
the remaining 54 unreferenced Antirez summaries stay draft behind the planned
public-source guard. Task 3 added that guard plus playlist-level status checks,
duplicate-aware resource validation, and explicit read-only duplicate-manifest
reporting.

## Artifacts

- Research: [research.md](./research.md)
- PRD: none
- Plan: [plan.md](./plan.md)
- Progress: [progress.md](./progress.md)
- Decisions: recorded in research and progress

## Next Action

- Run Task 4: add one Coding Agents playlist resource and its human-curated
  guided summary with 6–10 source-supported stops.

## Open Questions

- [ ] Does the proposed team-level measurement article remain distinct from the
      public field guide, proof-stack article, and Antirez behavior article?
      Recommended default: publish it only if the Task 5 overlap gate proves a
      separate team/adoption-measurement reader job; otherwise extend an
      existing post minimally.
- [ ] Does Agent Reliability justify a second article?
      Recommended default: decide after the first public slice and defer unless
      the reliability-stack thesis remains distinct and can keep vendor caveats
      visible.

Resolved by the 2026-07-31 stress review (see `progress.md`): the Antirez
overviews and author synthesis review moved into Task 1; Task 8 uses
promote-then-delete with a durable-rule promotion table; the public-citation
guard binds publishable content only and includes a playlist-level rule; the
metadata formatter churn became Task 0.
