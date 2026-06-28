# Agentic Coding Article Refresh Progress

## 2026-06-28

- User noticed the homepage still linked to now-draft posts after publishing only the durable-context article.
- Updated `src/pages/index.astro` to link only to production-built routes:
  - `/posts/durable-context-coding-agents`
  - `/posts/durable-context-coding-agents/slides`
  - `/resources/coding-with-agents`
- Created this work item to review and refresh the draft article backlog against current transcript/resource themes before republishing anything.
- Initial inventory suggests:
  - Simon Willison proof/evidence article is the strongest near-publish candidate.
  - Broad field guide needs a current rewrite.
  - Intro/workflow/planning posts should likely be merged or rewritten around durable state and context hygiene.
  - Amp-specific posts need product verification before publication.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed.
  - Production `dist/posts` contains only `index.html`, `durable-context-coding-agents/index.html`, and `durable-context-coding-agents/slides/index.html`.
  - Production `dist/index.html` links to durable-context article/slides and resources, and no longer links to the checked draft post routes.

## Next Action

- Run Task 1 from `plan.md`: read the draft bodies and produce a per-article refresh/merge/retire decision with source anchors.

## 2026-06-28 User Direction Update

- User answered the open questions in `index.md`:
  - The refreshed public series should be broader agentic-coding guidance; Amp is one concrete tool/example.
  - There is no strong preference on whether transcript-backed material appears as posts, resource summaries, or both, but public posts should stay few and high-signal. Avoid duplicating summary information unless a post has a distinct, relevant article thesis.
- Updated `index.md`, `research.md`, and `plan.md` so the next audit evaluates duplication risk and positions Amp-specific material as a tool case study rather than the whole series.

## Updated Next Action

- Consult Oracle to review this work item for gaps. Address high-confidence feedback, then ask Oracle for a paste-ready implementation prompt for Task 1.

## 2026-06-28 Oracle Work-Item Review

- Oracle reviewed `index.md`, `research.md`, `plan.md`, and `progress.md` for implementation-readiness.
- Addressed high-confidence feedback:
  - Added `audit.md` as the concrete Task 1 deliverable with one row per draft and fields for decision, destination slug, distinct thesis, overlaps, source anchors, stale claims, and frontmatter/navigation impact.
  - Made the “distinct thesis beyond resource summary” gate explicit and testable.
  - Strengthened the source method: transcript-backed claims must be checked against transcripts, substantive claims need anchors, and Amp product claims need close-to-publish verification.
  - Added source-map paths and timestamp ranges for major themes.
  - Split broad later tasks: workflow/planning merge, first-win tutorial decision, Amp tool case study, and navigation updates.
  - Added publish-route constraints for `draft` and `unlisted` behavior.
  - Added merge/retire/private/publish-candidate decision meanings and the rule to refresh/publish one article at a time.

## Updated Next Action

- Ask Oracle for a paste-ready implementation prompt for `plan.md` Task 1 using the revised work item.

## 2026-06-28 Oracle Task 1 Handoff Prompt

- Asked Oracle to write a paste-ready implementation prompt for `plan.md` Task 1 after the work-item review feedback was addressed.
- Saved the resulting prompt as `handoff-task-1.md` and linked it from `index.md`.

## Updated Next Action

- Start a fresh implementation thread with `handoff-task-1.md` to fill `audit.md` for all draft posts.

## 2026-06-28 Task 1 Audit Completed

- Filled `audit.md` with one row for each of the eight draft posts, including current title, decision, target slug, overlap notes, source anchors, stale-claim checks, and frontmatter/navigation impact.
- Recommended `make-the-agent-prove-it` as the next single article candidate, using the Simon Willison draft as source material only after it is reframed beyond the matching resource summary.
- Roadmap from the audit:
  - Refresh `coding-with-agents-2025` as `agentic-coding-2026`.
  - Merge `agent-workflows-that-stick` and `agent-planning-workflow` into `small-threads-durable-state` with current `.agents/work/` v0.3 guidance.
  - Refresh `amp-power-patterns` only as an optional Amp case study after close-to-publish product verification.
  - Keep `workshop-hands-on-agents` private unless an event revives it.
- Files changed: `audit.md`, `progress.md` only.
- Open questions for the next task: whether the proof article or the 2026 field guide should publish first after the distinct-thesis gate, and which current public Amp source should be used for product verification before any Amp case study.
- Verification: `git diff --check` passed after the audit and progress updates.

## 2026-06-28 Task 2 Handoff Prompt

- User accepted the proposed path from the audit, including `make-the-agent-prove-it` as the next single article candidate.
- Added `handoff-task-2.md` for a fresh planning thread to define the refreshed public article architecture before editing any post.
- Updated `index.md` Next Action to point at Task 2 and marked Task 1 complete in `plan.md`.

## 2026-06-28 Task 2 Architecture Completed

- Added the refreshed public article architecture to `research.md` with the accepted order:
  1. `durable-context-coding-agents` as the published anchor.
  2. `make-the-agent-prove-it` as the next single article candidate.
  3. `agentic-coding-2026` and `small-threads-durable-state` as follow-up articles.
  4. `amp-power-patterns-factory-era` as an optional/deferred Amp case study after product verification.
- Recorded article boundaries, non-overlap statements, required source anchors with transcript timestamp ranges, frontmatter/navigation expectations for later publish tasks, and final draft disposition.
- Files changed: `research.md`, `progress.md`, `index.md`, and `plan.md` only.
- Open question: which current public Amp product source should be used for close-to-publish verification before any Amp case study.

## Updated Next Action

- Prepare `make-the-agent-prove-it` as the next publish candidate: rewrite the Simon draft into a distinct proof-stack article, compare it against the matching resource summary, anchor claims to transcripts, then make any frontmatter/navigation changes only in that later publish task.

## 2026-06-28 Task 3 Proof-Stack Article Published

- Rewrote the Simon Willison draft into `make-the-agent-prove-it`, a distinct proof-stack guide rather than a second talk recap.
- Published decision: `draft: false`, `unlisted: false`, and renamed the post route to `/posts/make-the-agent-prove-it`.
- Updated the homepage to link only to production-built public routes: the durable-context article, the new proof-stack article, the durable-context slide draft, and the resource hub.
- Files changed:
  - `src/content/posts/make-the-agent-prove-it.md`
  - `src/content/posts/simon-willison-engineering-practices-coding-agents.md` removed as the old source slug
  - `src/pages/index.astro`
  - `.agents/work/docs/agentic-coding-article-refresh/index.md`
  - `.agents/work/docs/agentic-coding-article-refresh/plan.md`
  - `.agents/work/docs/agentic-coding-article-refresh/progress.md`
- Source anchors used:
  - Simon transcript `[00:04:41]-[00:18:35]` for red-green TDD, manual checks, conformance, sandboxing, and mock data.
  - Pi transcript `[00:29:43]-[00:42:55]` for senior review of unnecessary complexity and deterministic checks.
  - Friction transcript `[00:14:01]-[00:17:55]` for routing high-risk decisions back to humans.
  - Durable-context Evidence section as the internal link/non-overlap check.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed and generated `/posts/make-the-agent-prove-it/index.html` plus its slide route.
  - `git diff --check` passed.
- Confirmed no unrelated draft articles changed. The new article has a proof-stack thesis, names its synthesis beyond the Simon resource summary, and avoids stale model/product/permissive-mode claims.

## Updated Next Action

- Run Task 4: refresh or merge the workflow/planning drafts into a focused `small-threads-durable-state` practice article using current `.agents/work/` guidance.

## 2026-06-28 Task 4 Small-Thread Practice Article Published

- Rewrote and published the workflow/planning material as `small-threads-durable-state`, a focused practice article for separating wide research/critique from narrow implementation and preserving task state in `.agents/work/`, handoff prompts, progress logs, and verification records.
- Publish decision: `draft: false`, `unlisted: false`; production now builds `/posts/small-threads-durable-state` and its slide route.
- Merged source draft decisions:
  - `agent-workflows-that-stick.md`: carried over short threads, handoffs, staged diffs, feedback loops, and test-first proof habits.
  - `agent-planning-workflow.md`: carried over plan-before-coding, critique before implementation, success criteria, progress updates, and when to skip planning.
  - Removed the old source draft files after merging so stale `.agents/context/`, `.agents/plans/`, fixed token-threshold, and draft-only practice-path guidance is not preserved as local article routes.
- Updated homepage navigation to link to the new production route alongside the durable-context article, proof-stack article, slide draft, and resource hub.
- Files changed:
  - `src/content/posts/small-threads-durable-state.md`
  - `src/content/posts/agent-workflows-that-stick.md` removed after merge
  - `src/content/posts/agent-planning-workflow.md` removed after merge
  - `src/pages/index.astro`
  - `.agents/work/docs/agentic-coding-article-refresh/index.md`
  - `.agents/work/docs/agentic-coding-article-refresh/plan.md`
  - `.agents/work/docs/agentic-coding-article-refresh/progress.md`
- Source anchors used:
  - Build Crew episode 7 transcript `[00:13:06]-[00:24:12]` for small directed threads, handoffs, and the research-to-implementation funnel.
  - Maggie Appleton transcript `[00:03:35]-[00:06:49]` for alignment arriving too late when planning stays private until PR review.
  - Simon Willison transcript `[00:04:41]-[00:07:33]` for test-first work plus manual real-system checks.
  - Pi/OpenClaw transcript `[01:12:03]-[01:30:17]` for context control, human understanding, and module/API boundaries.
  - Root `AGENTS.md`, `.agents/work/AGENTS.md`, and the `agent-work` skill for current dot-agents v0.3 work-item conventions.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed and generated `/posts/small-threads-durable-state/index.html` plus `/posts/small-threads-durable-state/slides/index.html`.
  - `npm run lint:fix` passed with no fixes applied.
  - `git diff --check` passed after the work-item update.
  - Reviewed `dist/posts` and confirmed production routes are limited to `durable-context-coding-agents`, `make-the-agent-prove-it`, `small-threads-durable-state`, `/posts/index.html`, and the generated slide routes.
- Confirmed the article is distinct from `durable-context-coding-agents` and `make-the-agent-prove-it`: it links to those articles for durable-memory and proof-stack depth, while owning the small-thread/work-item operating procedure.

## Updated Next Action

- Run Task 5: decide whether a first-win tutorial is still needed, without reviving stale Amp setup or draft-only practice-path links.
