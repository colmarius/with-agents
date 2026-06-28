# Handoff: Task 2 pilot article migration

```text
You are continuing the work item at:

.agents/work/docs/post-slide-format-refresh/

Implement Task 2 only.

Read first:
1. AGENTS.md
2. .agents/work/AGENTS.md
3. .agents/work/docs/post-slide-format-refresh/index.md
4. .agents/work/docs/post-slide-format-refresh/research.md
5. .agents/work/docs/post-slide-format-refresh/plan.md
6. .agents/work/docs/post-slide-format-refresh/progress.md
7. .agents/skills/article-writing/SKILL.md
8. src/content/posts/agentic-coding-2026.md
9. src/pages/posts/[slug]/slides.astro
10. src/layouts/PostLayout.astro

Goal:
Migrate the pilot article `agentic-coding-2026.md` to the post/slide hybrid convention introduced in Task 1. Markdown remains the single source of truth: each rendered `##` section should read well as article prose and usually start with a concise first-blockquote slide message; immediate visuals belong on the slide; remaining prose is speaker/reader notes.

Current state:
- Task 1 is implemented and committed as `d67d952 Implement post slide notes extractor`.
- The slide route now preserves legacy whole-section slides as fallback, recognizes first-blockquote slide messages, extracts contiguous immediate visual blocks, excludes exact `## Sources` / `## Sources used` appendices from normal slide navigation/counts, supports notes mode, print, no-JS fallback, and safer keyboard controls.
- No `src/content/posts/*.md` migration has started yet.
- The pilot article currently has 8 rendered `##` sections including `## Sources used`; without migration it still uses legacy whole-section slides.
- Expected result after migration: 7 normal navigable slides, plus `## Sources used` as a source appendix outside the normal slide count/navigation.

Implement only this slice:
- Load/follow the `article-writing` skill before editing the post.
- Before editing `agentic-coding-2026.md`, capture the current word count so the progress entry can report before/after counts. If you miss this, recover the before count from `git show HEAD:src/content/posts/agentic-coding-2026.md`.
- Edit only `src/content/posts/agentic-coding-2026.md` plus work-item docs unless a tiny route/content-rendering bug blocks the Task 2 acceptance criteria. If a route bug blocks acceptance, stop and report before broadening scope.
- Preserve frontmatter values unless a current repo contract proves they are invalid.
- For every non-appendix rendered `##` section, add a first meaningful `blockquote` immediately after the heading.
  - Keep each blockquote presentation-friendly: usually one sentence, no citation clutter, no more than 1-3 short clauses.
  - The blockquote should be the slide's main message and the article section's takeaway.
- Keep `## Sources used` as an exact source appendix heading. Do not add a slide-message blockquote to the source appendix.
- Add or reposition at least two useful lightweight visuals immediately after section blockquotes so they appear on slides.
  - Put intended slide visuals directly after the section blockquote with no prose between them.
  - Keep prompts, examples, and non-visual code fences later in the section unless they are intentionally part of the visible slide.
  - Prefer existing Markdown-native material where possible: text diagrams, small tables, Mermaid, inline SVG, simple figures, or Markdown images.
  - Static assets should not be added unless absolutely necessary; if needed, stop and explain the proposed asset path under `public/visuals/posts/agentic-coding-2026/` before adding files.
  - Every visual must be accessible: clear text, labels, alt text/captions where applicable, and no color-only meaning.
- Keep citations, timestamp anchors, caveats, examples, prompts, and read-along context in prose after the blockquote/visuals so they become notes.
- Preserve the article's argument and source-backed claims. Do not add new factual claims or product claims unless you verify them. If you move or rewrite a sourced sentence, make sure the adjacent timestamp/source still supports the claim.
- When changing a timestamp-backed sentence materially, verify it against the saved transcript/summary or the linked source material; do not rely on memory or on the old article wording alone.
- Use the target sketch for `agentic-coding-2026.md` in `research.md` as direction, not mandatory copy.
- Improve article/slide coherence and trim only where it directly improves the new structure. Do not rewrite the whole article into a new argument.

Scope limits:
- Do not edit any other `src/content/posts/*.md` file.
- Do not migrate all posts.
- Do not modify resource summaries, transcripts, data manifests, unrelated routes, or site-wide styles.
- Do not add MDX, a deck framework, a custom parser, or new content schema.
- Do not split article/deck sources.
- Do not add static visual assets without stopping first as above.
- Do not mark Task 3 or Task 4 started.

Work-item updates:
- Append a Task 2 progress entry to `.agents/work/docs/post-slide-format-refresh/progress.md` with files changed, implementation summary, before/after word counts, manual smoke checks, command verification results, blockers/unverified items, and next action.
- Update `.agents/work/docs/post-slide-format-refresh/index.md` if status, summary, updated date, artifacts, or next action changes.
- Update the Task 2 checkbox in `.agents/work/docs/post-slide-format-refresh/plan.md` only if all Task 2 acceptance criteria are met.
- Ensure `index.md` / `plan.md` handoff references include `handoff-task-2.md` if they are not already current.
- If Task 2 is complete, set the next action to Task 3 (`Add authoring/check reliability`) unless the pilot reveals a reason to revise the plan first.

Required verification:
- `npm run check`
- `npm run build`
- `git diff --check`
- Manual smoke checks recorded in `progress.md`:
  - Article route `/posts/agentic-coding-2026` remains readable.
  - Slide route `/posts/agentic-coding-2026/slides` shows concise blockquote-led slides for the migrated sections.
  - `/posts/agentic-coding-2026/slides?notes=1` shows notes containing citations/context after the slide message.
  - Source appendix is excluded from normal slide count/navigation and remains available through notes/print/source access.
  - At least two visuals appear on slides and are readable/accessibility-safe.
  - Print/handout mode shows slides and notes without clipping.
  - Internal links in the article still point to existing repo routes.
- Record if any check cannot run, why, and what remains unverified.

Stop conditions:
- Stop and report if the migration requires route/parser/schema changes rather than content restructuring.
- Stop and ask before adding static assets, MDX, a deck framework, or a custom parser.
- Stop if source anchors no longer support rewritten claims and you cannot verify/fix them confidently from available source material.
- Stop if `npm run check` or `npm run build` fails for unrelated reasons that cannot be safely fixed inside Task 2.
- Stop if the pilot shows the Task 1 extractor cannot support the planned content shape without broad code changes.

Git workflow:
- Run `git status --short --branch` before staging.
- Commit after the Task 2 logical step with a clear message if all required verification passes.

Expected final response:
- Summary of article/slide migration
- Files changed
- Verification results, including `npm run check`, `npm run build`, and `git diff --check`
- Manual smoke checks performed
- Work-item updates made
- Commit hash if committed
- Remaining next action
```
