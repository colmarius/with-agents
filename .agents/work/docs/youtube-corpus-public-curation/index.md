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
reporting. Task 4 added the only planned Coding Agents playlist resource: an
eight-stop, question-led route that keeps AI Engineer in the curator role and
grounds each recommendation in reviewed speaker evidence. Task 5 found a
distinct team/adoption measurement reader job and selected one new article,
**Measure Outcomes, Not Agent Activity**. Task 6 published that article as a
bounded, source-backed measurement guide without changing another post or
expanding the resource manifest. Task 7 deferred a separate reliability article
after a section-level overlap and evidence-burden review, then added a reusable
read-only structural audit plus an explicit human editorial-review checklist.

## Artifacts

- Research: [research.md](./research.md)
- PRD: none
- Plan: [plan.md](./plan.md)
- Progress: [progress.md](./progress.md)
- Decisions: recorded in research and progress

## Next Action

- Run Task 8: obtain the final Oracle review, remediate only high-confidence
  in-scope findings, promote unique durable rules, run the full verification
  gate, and clean only completed superseded work items that pass the deletion
  audit.

## Open Questions

- [x] Does the proposed team-level measurement article remain distinct from the
      public field guide, proof-stack article, and Antirez behavior article?
      Yes. Task 5 selected a new, tightly bounded team/adoption measurement
      article after comparing all eight public post files and consulting Oracle.
- [x] Does Agent Reliability justify a second article?
      No for this work item. The practical reader jobs overlap existing public
      proof, review, workflow, state, and measurement sections; the narrower
      orchestration/simulation angle remains vendor-heavy and does not yet carry
      the evidence burden for another article.

Resolved by the 2026-07-31 stress review (see `progress.md`): the Antirez
overviews and author synthesis review moved into Task 1; Task 8 uses
promote-then-delete with a durable-rule promotion table; the public-citation
guard binds publishable content only and includes a playlist-level rule; the
metadata formatter churn became Task 0.
