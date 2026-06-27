# Agentic Coding Article Refresh Plan

Review and refresh the draft article backlog into a smaller, current public series.

## Goals

- Keep production focused on one public article until each draft is intentionally refreshed.
- Make future articles source-backed by the transcript/resource library.
- Reduce overlap among old intro, first-win, workflow, and planning posts.
- Verify Amp-specific claims before republishing Amp tutorials or power-pattern guides.

## Tasks

- [ ] **Task 1: Audit each draft against current sources**
  - Scope: `src/content/posts/*.md`, `src/content/summaries/**`, `src/content/transcripts/**`
  - Depends on: none
  - Acceptance:
    - Each draft has a decision: refresh, merge, retire, publish candidate, or keep private.
    - Each decision names the current-source themes that should inform the rewrite.
    - Duplicated sections across drafts are identified so they are not republished multiple times.
  - Notes: Start with the inventory in `research.md`, then verify by reading the relevant draft bodies.

- [ ] **Task 2: Define the refreshed public article architecture**
  - Scope: `.agents/work/docs/agentic-coding-article-refresh/research.md`, optional `prd.md` only if audience/positioning needs alignment
  - Depends on: Task 1
  - Acceptance:
    - Proposed article list has titles, one-sentence theses, source anchors, and publish order.
    - The list explains what stays public, what stays draft, and what gets merged or retired.
    - The homepage and `/posts` path expectations remain coherent with the publish plan.
  - Notes: Prefer fewer stronger posts over preserving every existing draft.

- [ ] **Task 3: Prepare the next publish candidate**
  - Scope: likely `src/content/posts/simon-willison-engineering-practices-coding-agents.md` or a renamed proof/evidence article
  - Depends on: Task 2
  - Acceptance:
    - The article has a current thesis beyond the resource summary.
    - Claims are traceable to the transcript/summary.
    - `draft` and `unlisted` frontmatter are set according to the publish decision.
    - `npm run check` and `npm run build` pass.
  - Notes: Simon is the current likely first candidate because it is already transcript-backed and aligned with “proof, not faith.”

- [ ] **Task 4: Refresh or merge workflow/planning drafts**
  - Scope: `agent-workflows-that-stick.md`, `agent-planning-workflow.md`, possibly `amp-first-win-15-minutes.md`
  - Depends on: Task 2
  - Acceptance:
    - Legacy `.agents/plans/` guidance is updated to `.agents/work/` v0.3 or removed.
    - Small-thread, handoff, context hygiene, and proof-loop guidance is unified instead of repeated across multiple articles.
    - Any first-win content reflects current Amp workflow and verified commands.
  - Notes: This is likely one refreshed article plus one tutorial, not three separate posts.

- [ ] **Task 5: Rework Amp-specific advanced guidance**
  - Scope: `amp-power-patterns.md`, current Amp docs/resources/threads as needed
  - Depends on: Task 2
  - Acceptance:
    - Product mode/tool terminology is current.
    - Oracle, subagents, Librarian, handoff, deep mode, rush/smart usage, and cloud/factory assumptions are verified before publishing.
    - The article avoids stale model names, speculative tool claims, and obsolete editor/sidebar assumptions.
  - Notes: Consult Oracle or relevant threads before editing because product details age quickly.

- [ ] **Task 6: Update site navigation after each publish decision**
  - Scope: `src/pages/index.astro`, `src/pages/posts/index.astro`, relevant post frontmatter
  - Depends on: whichever publish task changes public inventory
  - Acceptance:
    - Homepage links only to production-built routes.
    - Drafts remain visible locally and absent from production.
    - Build output under `dist/posts` matches the intended public inventory.
  - Notes: This task repeats whenever another article is published or hidden.

## Implementation Notes

- Do not bulk-publish the old posts.
- Preserve useful old material by merging it into fewer, sharper articles.
- Use transcript-backed summaries for claims; avoid unsourced productivity multipliers.
- Keep article changes and publish/frontmatter changes in separate commits when practical.
- For Amp-specific content, verify product behavior close to publish time.

## Constraints / Decisions

- Current public production post: `src/content/posts/durable-context-coding-agents.md`.
- Other posts are `draft: true` and should remain locally visible but production-hidden until refreshed.
- Resources/summaries remain public and are the source library for future article updates.

## Acceptance Criteria

- There is a clear publish roadmap for the draft backlog.
- The next article to refresh/publish is obvious.
- Homepage and production routes do not link to draft-only pages.
- Work item artifacts capture why drafts are refreshed, merged, retired, or kept private.

## Verification

- After homepage/frontmatter changes: `npm run check`, `npm run build`.
- Confirm production output under `dist/posts` contains only intended published posts.
- For content-only planning changes: `git diff --check`.
