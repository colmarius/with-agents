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
