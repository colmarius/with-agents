# Post and slide format refresh progress

## 2026-06-28 Planning pass

- What changed:
  - Created `.agents/work/docs/post-slide-format-refresh/` with `index.md`, `research.md`, `plan.md`, and `progress.md`.
  - Audited current post schema, article layout, post index, slide route, global prose styles, and all current posts.
  - Recorded option comparison, current-state implementation audit, article-by-article target sketches, Oracle feedback, recommended content model, likely files to change, proposed article-writing skill updates, and recommended AGENTS.md update timing.
- Context notes:
  - `.agents/work/docs/agentic-coding-article-refresh/` was requested but is not present in this checkout.
  - Prior Amp thread summary confirmed this thread should stay in planning/preparation and not rewrite all articles.
- Verification:
  - No `src/` code/content or skill files were changed in this planning pass.
  - `npm run check` and `npm run build` were not run because only work-item docs changed.
- Next action:
  - Start Task 1 from `plan.md`: implement the backward-compatible slide/notes extractor and update the article-writing skill.
