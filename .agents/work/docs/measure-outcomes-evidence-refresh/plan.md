# Measure outcomes evidence refresh plan

Correct the article's evidence hierarchy without turning a practical measurement
framework into a literature review, then preserve a small reusable empirical-
claim review contract and remove the completed predecessor work item.

## Goals

- Keep the article's durable reader job and concise house style.
- Replace the single-presentation evidence spine with a bounded mix of controlled,
  longitudinal, qualitative, and skill-formation evidence.
- Make the pilot capable of detecting review displacement, delayed quality costs,
  selection failure, and inconclusive results.
- Remove the completed YouTube curation work item after its live references and
  durable-rule coverage are confirmed.

## Tasks

- [x] **Task 1: Refresh the public article**
  - Scope: `src/content/posts/measure-outcomes-not-agent-activity.md`
  - Depends on: none
  - Acceptance:
    - The Denisov-Blanch ranges appear at most once and are explicitly presenter-
      reported, observational, and non-transferable; Stanford is no longer called
      the load-bearing source.
    - A compact mixed-evidence synthesis includes positive randomized workplace
      evidence, the bounded METR result/design failure, and the current enterprise
      review-displacement case without claiming a universal uplift.
    - Review displacement and delayed quality are first-class outcomes, and the
      pilot can return expand, constrain, redesign, stop, or inconclusive.
    - External studies are cited directly; playlist talks remain bounded operating
      examples; no paper is added to the curated resource manifest.
  - Notes: Keep five substantive sections plus `## Sources used`; offset additions
    by compressing repeated presenter detail and cross-links.

- [x] **Task 2: Preserve the empirical evidence-review contract**
  - Scope: `.agents/skills/article-writing/SKILL.md`
  - Depends on: Task 1
  - Acceptance:
    - Public quantitative claims name source design, outcome layer, setting/time,
      and material affiliation or conflict.
    - Presenter or vendor figures may illustrate a mechanism but cannot silently
      become a transferable benchmark.
    - Empirical refreshes remain event-driven and papers remain inline sources
      unless they independently earn a curated resource reader job.
  - Notes: Extend the existing freshness/incorporation guidance; do not add a new
    ledger, script, schedule, schema field, or paper database.

- [x] **Task 3: Adversarially review and verify the refresh**
  - Scope: article, skill, and this work item
  - Depends on: Tasks 1–2
  - Acceptance:
    - Exact public numbers and adjacent limitations match the primary sources.
    - Independent review finds no causal overstatement, effect-size anchoring,
      source-role confusion, or material slide/article regression.
    - Formatting, content guard, checks, build, internal links, and rendered article
      and slide routes pass.
  - Notes: Record word counts, reviewer disposition, and verification in
    `progress.md`.

- [x] **Task 4: Complete and clean up work-item state**
  - Scope: `.agents/work/docs/measure-outcomes-evidence-refresh/` and
    `.agents/work/docs/youtube-corpus-public-curation/`
  - Depends on: Task 3
  - Acceptance:
    - This work item is completed with no immediate next action.
    - The old curation item is still `completed`, has no live references, and is
      deleted in a separate commit after all durable rules and artifacts are
      confirmed to survive elsewhere.
    - The cleanup parent commit and a targeted `git restore --source=<parent> --
      <path>` recovery command are recorded before the retained work item is
      completed.
  - Notes: Git history is the archive; do not delete any other work item.

## Implementation Notes

Use exact estimates only where they teach an outcome-layer distinction. Prefer
direction, mechanism, population, and limitation over a catalogue of percentages.
The completed curation work item must not be reopened or edited before deletion.

## Constraints / Decisions

- No new article or resource entry.
- No YouTube check, sync, capture, transcript, summary, or source-library mutation.
- No recurring schedule or broad research database.
- No frontmatter schema change or `updatedAt` field for a same-day refresh.

## Acceptance Criteria

- The refreshed article remains a practical measurement decision guide.
- Every external and transcript-backed claim is source-bounded.
- The full repository gate passes from a clean worktree.
- Cleanup removes only the explicitly approved completed curation item.

## Verification

- `npm run lint:fix`
- `npm run content:guard`
- `npm run check`
- `npm run build`
- `git diff --check`
- Manual local article and slide route review
- Live-reference and recovery audit for the deleted completed work item
