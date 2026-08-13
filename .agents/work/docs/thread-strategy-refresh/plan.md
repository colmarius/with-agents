# Refresh Thread Strategy Articles

Refresh the primary thread-operating article, commit it as the branch sync point,
then use a separate high-mode orb for a bounded consistency review of related
public posts.

## Goals

- Publish a current, source-backed thread strategy that reflects improved
  compaction without promoting unrelated mega-threads.
- Keep implementation, independent verification, durable state, and integration
  ownership explicit.
- Bring related public articles into alignment in a separate editorial round.

## Tasks

- [x] **Task 1: Refresh the primary article**
  - Scope: `src/content/posts/small-threads-durable-state.md` and work-item state
  - Depends on: none
  - Acceptance:
    - The title and lead no longer make small threads the default goal.
    - The article distinguishes long-lived research/coordinator threads from fresh
      implementation and independent verification contexts.
    - Current Amp and practitioner claims have adjacent source support and private
      thread observations are labeled N=1 synthesis.
    - The post retains a practical durable-state and prompting procedure.
  - Notes: Preserve the route; target roughly 900–1,050 body words.

- [ ] **Task 2: Review related articles in a separate high-mode orb**
  - Scope: public posts that link to or repeat the old small-thread default
  - Depends on: Task 1 committed as a sync point
  - Acceptance:
    - The worker starts from the Task 1 commit and identifies stale or contradictory
      wording before editing.
    - Changes stay minimal and do not duplicate the primary article's full argument.
    - The worker commits its round without pushing and returns a transferable patch
      or bundle plus verification evidence.
  - Notes: The coordinating thread integrates and reruns combined verification.

## Implementation Notes

Use the primary post as the owner of the operating procedure. Related articles
should link to it and summarize only the part needed for their own argument.

## Constraints / Decisions

- Keep the existing slug and internal route.
- Do not publish private thread content, identifiers, or raw prompts.
- Do not claim that compaction removes the need for durable repo state.
- Do not push, open a pull request, merge, or deploy.

## Acceptance Criteria

- The revised series has one coherent thread-boundary model.
- Source roles and caveats are explicit.
- Each editorial round is committed separately on
  `editorial/thread-strategy-refresh`.

## Verification

- `npm run lint:fix`
- `npm run check`
- `npm run build`
- `git diff --check`
- Real-browser verification of `/posts/small-threads-durable-state` after Task 1
  and each changed rendered route after Task 2
