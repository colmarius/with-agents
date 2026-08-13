# Published post practice audit plan

Audit all published post routes, decide the smallest justified editorial action per post, implement only
evidence-backed changes, and leave a locally committed clean branch for review.

## Goals

- Separate durable coding-agent practices from temporary product behavior and bounded practitioner reports.
- Preserve distinct article theses and source anchors while removing stale or redundant public guidance.
- Verify every materially changed article and representative slide state as rendered content.

## Tasks

- [x] **Task 1: Inventory published posts and gather current evidence**
  - Scope: `src/content/posts/`, `src/content/summaries/`, `src/data/resources/`, authenticated Amp threads,
    current first-party documentation
  - Depends on: none
  - Acceptance:
    - All `draft: false` posts have title, description, thesis, section advice, links, sources, slide coherence,
      overlap, and continued-publication value audited in `research.md`.
    - Recent repository sources, current Amp documentation, and sanitized cross-project thread patterns are
      represented with contradictory evidence and evidence boundaries.
    - Every post receives a provisional keep, refresh, merge/retire, or investigate-further decision.

- [x] **Task 2: Implement the smallest justified editorial changes**
  - Scope: only published post files and directly required route/content references
  - Depends on: Task 1
  - Acceptance:
    - Changes address evidenced staleness, misleading framing, broken links, redundancy, or article/slide drift.
    - Distinct theses and valid source anchors remain intact; private research is not copied into public prose.
    - Any removed route has no remaining public internal link, with no redirect added absent evidence.

- [x] **Task 3: Run content and rendered-route verification**
  - Scope: changed posts, article routes, slide routes, repository checks
  - Depends on: Task 2
  - Acceptance:
    - `npm run lint:fix`, `npm run content:guard`, `npm run check`, `npm run build`, and `git diff --check` pass.
    - Each materially changed article route and representative desktop/mobile slide states are exercised in a
      real browser, with observed content and layout recorded in `progress.md`.

- [x] **Task 4: Finalize audit record and local commits**
  - Scope: work-item artifacts and git history
  - Depends on: Task 3
  - Acceptance:
    - `research.md` contains the final per-post decision matrix, evidence, smallest action, and unresolved questions.
    - Word counts, checks, browser observations, commit hashes, and review decision are recorded.
    - Logical changes are committed locally; no push, merge, deployment, or pull request occurs; worktree is clean.

## Implementation Notes

Read each post in full. Do not rewrite for novelty or consistency alone. New source material is research-only
unless it changes a load-bearing claim under the article-writing incorporation test. Treat recent private thread
patterns as anonymized author synthesis with explicit N=1 limits, not public primary evidence.

## Constraints / Decisions

- Start from `origin/main` commit `eed43eb7b9c1359883673997412ed21b22c74202` on a new local branch.
- Mutation ownership remains in this thread; read-only workers may return evidence only.
- Breaking removed URLs are acceptable; redirects require evidence.
- Keep work focused on public-post relevance. Do not expand the resource library or fix unrelated UI issues.

## Acceptance Criteria

- The final matrix covers all 11 published files and distinguishes no-op decisions from justified edits.
- Public prose contains no raw private prompts, private identifiers, secrets, confidential details, or corpus dumps.
- The branch is reviewable, locally committed, and clean with exact verification evidence.

## Verification

- `npm run lint:fix`
- `npm run content:guard`
- `npm run check`
- `npm run build`
- `git diff --check`
- Real-browser checks of every materially changed article and representative slide states, including mobile when
  readability or layout changed
