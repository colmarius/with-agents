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

## 2026-06-28 Planning grill and prompt refinement

- What changed:
  - Consulted Oracle to stress-test the open decisions, research, plan, and work-item hygiene.
  - Resolved Task 1 sequencing: route/UX behavior plus article-writing skill only; no `src/content/posts/*.md` edits in Task 1; pilot `agentic-coding-2026.md` in Task 2.
  - Resolved visual convention: prefer Mermaid/text/tables/inline SVG/simple figures for early migrations; if static image assets are needed later, use `public/visuals/posts/<slug>/` with descriptive filenames and accessible alt/caption text.
  - Tightened Task 1 acceptance for source appendices, bounded visual extraction, compatibility preflight, print/Mermaid behavior, keyboard/a11y, manual smoke checks, and `git diff --check`.
  - Consulted Oracle again for a paste-ready implementation prompt and folded the material prompt edits into `plan.md`.
- Files changed:
  - `.agents/work/docs/post-slide-format-refresh/index.md`
  - `.agents/work/docs/post-slide-format-refresh/research.md`
  - `.agents/work/docs/post-slide-format-refresh/plan.md`
  - `.agents/work/docs/post-slide-format-refresh/progress.md`
- Verification:
  - Planning docs only; no `src/` code/content or skill files changed.
  - `npm run check` and `npm run build` not required for this pass.
- Next action:
  - Start Task 1 from the paste-ready prompt in `plan.md`.
