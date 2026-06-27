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
