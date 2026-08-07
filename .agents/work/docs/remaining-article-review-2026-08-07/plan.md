# Remaining public article review plan

Review and tighten the six untouched public articles, confirm the recently tightened
field guide still holds its role, and rank the complete public series by current
relevance and distinctiveness.

## Goals

- Give every remaining public article a focused Oracle editorial review.
- Improve retained articles without moving concepts between established owners.
- Produce an evidence-backed keep/consolidate/remove ranking for the public series.

## Tasks

- [x] **Task 1: Review the proof and work-state articles**
  - Scope: `src/content/posts/make-the-agent-prove-it.md`, `src/content/posts/small-threads-durable-state.md`
  - Depends on: none
  - Acceptance:
    - Oracle reviews each article against its distinct role and the 2026-08-07 baseline.
    - Retained edits reduce repetition without removing practical proof or handoff artifacts.

- [x] **Task 2: Review the evidence and measurement articles**
  - Scope: `src/content/posts/behavior-over-explanation.md`, `src/content/posts/measure-outcomes-not-agent-activity.md`
  - Depends on: none
  - Acceptance:
    - Oracle reviews each article for source strength, distinctiveness, and reader value.
    - Claims retain appropriate study, vendor, transcript, and synthesis boundaries.

- [x] **Task 3: Review the interface and orchestration articles**
  - Scope: `src/content/posts/agent-ready-interfaces.md`, `src/content/posts/parallel-agents-need-an-admission-policy.md`
  - Depends on: none
  - Acceptance:
    - Oracle reviews each article for overlap, operational usefulness, and removable inventories.
    - Edits preserve concrete design checks and admission rules.

- [x] **Task 4: Confirm series roles and rank relevance**
  - Scope: all public `src/content/posts/*.md`
  - Depends on: Tasks 1–3
  - Acceptance:
    - The recently tightened field guide and durable/Amp articles are included in the ranking.
    - Every public article receives a keep, consolidate, or removal-candidate recommendation with rationale.

- [x] **Task 5: Verify and record the completed pass**
  - Scope: touched posts and this work item
  - Depends on: Tasks 1–4
  - Acceptance:
    - Before/after word counts and Oracle decisions are recorded.
    - `npm run lint:fix`, `npm run check`, `npm run build`, `npm run content:guard`, and `git diff --check` pass or any failure is reported.

## Implementation Notes

- Prefer cuts and sentence-level rewrites over new sections or abstractions.
- Do not delete, unpublish, or rename an article without explicit user approval.
- Keep normal `##` sections slide-compatible and preserve exact `## Sources` or
  `## Sources used` appendices.
- Verify transcript-backed claims against local source material when an edit changes
  the meaning or citation boundary.

## Constraints / Decisions

- Alternate durable-context decks are linked presentation variants, not standalone
  editorial candidates.
- The 2026-08-07 field-guide edit is reviewed for ranking but not reopened without a
  concrete defect.
- Removed material should not be redistributed merely to preserve it.

## Acceptance Criteria

- Six untouched public posts are materially reviewed and improved where useful.
- Each remaining article has explicit Oracle feedback.
- The final ranking makes the next editorial decision obvious.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm run build`
- `npm run content:guard`
- `git diff --check`
