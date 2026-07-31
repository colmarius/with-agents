# Public post digestibility plan

Improve public scanability only where the audit found a concrete defect, keeping
source fidelity and the article/slide hybrid intact.

## Tasks

- [x] **Task 1: Audit the public series and stress-test the plan**
  - Scope: homepage, posts index, seven listed posts, two unlisted alternate decks,
    article-writing guidance
  - Acceptance:
    - Every listed post has a leave/fix decision and named finding.
    - Must-survive evidence and action artifacts are recorded before editing.
    - Oracle reviews scope and acceptance gates before mutation.

- [x] **Task 2: Add the missing entry point and fix stale fragments**
  - Scope: `src/pages/index.astro`, `src/content/posts/make-the-agent-prove-it.md`
  - Depends on: Task 1
  - Acceptance:
    - Homepage has eight truthful core-entry cards and one new outcome-measurement
      clause, with no broader hero or metadata rewrite.
    - Measurement post retains `pubDate: 2026-07-31` and unchanged frontmatter.
    - Both stale durable-context fragments point to the built evidence heading.

- [x] **Task 3: Remove repeated recaps from the series map and Amp case study**
  - Scope: `src/content/posts/agentic-coding-2026.md`,
    `src/content/posts/amp-factory-era-case-study.md`
  - Depends on: Task 1
  - Acceptance:
    - Series map loses only duplicated navigation, takeaways, and source recaps;
      surviving claims keep anchors and caveats.
    - Amp edit is deletions only; no surviving product claim is rephrased.
    - Every rendered section still opens with a coherent blockquote.

- [x] **Task 4: Make the canonical durable-context article reader-first**
  - Scope: canonical durable-context post and its extended-deck maintenance note
  - Depends on: Task 2
  - Acceptance:
    - Adjacent problem-framing, model-memory, and portability sections are merged
      only where the reader argument remains coherent.
    - Noperator, Appleton, Osmani, and Willison retain distinct attributed roles.
    - Keep/expire filter, repo-memory stack, evidence ladder, before/after table,
      image-deck link, and Sources appendix survive.
    - Extended deck records intentional reader-versus-talk granularity; its content
      and the image deck remain unchanged.

- [x] **Task 5: Promote one proven skim rule and run the final review**
  - Scope: article-writing skill, all task diffs, routes and generated slides
  - Depends on: Tasks 2–4
  - Acceptance:
    - Add at most one concise reusable skim-test rule; do not edit root AGENTS.md.
    - Record per-post word and heading counts before/after.
    - All internal fragments resolve, excluding intentional numeric slide-state
      hashes handled by the slide client.
    - Oracle approves the final editorial result or all material findings are
      remediated.
    - Lint, content guard, Astro check, build, browser routes, and diff checks pass.

## Constraints

- No new article, resource, date field, source-library mutation, or schedule.
- No edit without a named audit finding.
- No simplification by deleting a load-bearing caveat or source boundary.
- Prefer deletions and section merges over new abstractions or boilerplate.

## Verification

- `npm run lint:fix`
- `npm run content:guard`
- `npm run check`
- `npm run build`
- Built internal-fragment audit
- Browser review of homepage, posts index, edited articles, and edited slide decks
- `git diff --check`
- `git status --short --branch`
