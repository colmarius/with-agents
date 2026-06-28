# Handoff: Task 1 post/slide route and skill update

```text
You are continuing the work item at:

.agents/work/docs/post-slide-format-refresh/

Implement Task 1 only.

Read first:
1. AGENTS.md
2. .agents/work/docs/post-slide-format-refresh/index.md
3. .agents/work/docs/post-slide-format-refresh/research.md
4. .agents/work/docs/post-slide-format-refresh/plan.md
5. .agents/work/docs/post-slide-format-refresh/progress.md
6. src/pages/posts/[slug]/slides.astro
7. src/components/MermaidRenderer.astro
8. src/scripts/mermaid-config.ts
9. src/layouts/PostLayout.astro
10. .agents/skills/article-writing/SKILL.md

Goal:
Implement the first backward-compatible slide/notes code slice for post slide pages. Markdown posts remain the single source of truth. Do not edit `src/content/posts/*.md` in Task 1.

Resolved decisions:
- Task 1 is route/UX behavior plus article-writing skill guidance only.
- Do not migrate `agentic-coding-2026.md` or any other post in Task 1. The pilot migration is Task 2.
- Early visuals should be Markdown-native: Mermaid, text diagrams, tables, inline SVG, or simple figures.
- If static assets are needed later, they belong under `public/visuals/posts/<slug>/`, but Task 1 should not add static visual assets unless absolutely required.

Current state:
The slide route currently renders the full post into hidden `#source`, splits rendered content by every `h2`, and clones whole sections into slides. This makes current slides verbose and turns `## Sources used` into a slide. Planning is complete; no code migration has been implemented yet.

New convention to support:
- The first meaningful element after an H2 may be a `blockquote`.
- If so, that blockquote is the concise main slide message.
- Contiguous immediate visual blocks after that blockquote also belong on the main slide.
- Remaining section content becomes speaker/reader notes.
- If there is no first-blockquote slide message, preserve legacy whole-section slide rendering for that section.

Implement only this slice:
- Before changing behavior, search current posts for rendered H2 sections immediately followed by a blockquote. If any exist and are not intended slide messages, preserve legacy behavior or stop and report.
- Update `src/pages/posts/[slug]/slides.astro` so the current H2 splitter remains as fallback, but sections with a first-blockquote slide message render as concise slide main content plus a notes container.
- Use semantic slide markup where practical, preferably `section` elements with accessible labels/headings.
- Limit immediate visual extraction to contiguous visual blocks after the blockquote: Markdown image paragraphs, `figure`, `svg`, `table`, Mermaid code fences, and intentional text/diagram code fences. Stop at the first normal prose paragraph, list, or non-visual code example.
- Treat exact `## Sources` and `## Sources used` headings, matched case-insensitively after whitespace normalization, as appendices excluded from normal slide navigation/counts while preserving source access through notes mode, print, or an explicit article/source appendix link.
- Add a notes toggle with a UI button, keyboard shortcut such as `n`, initial state from `?notes=1`, and accessible state such as `aria-pressed`.
- Add a no-JS fallback so the page does not leave users with an empty slide area when JavaScript is unavailable; at minimum, provide a visible `<noscript>` link back to the article.
- Add print CSS that shows all slides and notes, hides navigation/controls, avoids clipping from fixed/overflow layout, and keeps source appendices visible or clearly accessible.
- Ensure Mermaid diagrams needed for print are rendered before print, or print does not leave intended Mermaid diagrams as raw code. Avoid expanding Mermaid config duplication if a small local change is enough.
- Improve keyboard handling so arrow/space navigation does not hijack focused interactive controls, editable fields, or modifier-key shortcuts, and only calls `preventDefault()` when navigation actually happens.
- Update `.agents/skills/article-writing/SKILL.md` with the post/slide hybrid convention and checklist items.
  - Public posts double as slide decks.
  - Each rendered `##` should usually start with a concise blockquote slide message.
  - Keep the blockquote presentation-friendly: usually one sentence, no citation clutter, no more than 1-3 short clauses.
  - Put citations, examples, caveats, prompts, and read-along context in prose after the blockquote; that prose is notes.
  - Optional visuals may immediately follow the blockquote and must be accessible.
  - `## Sources` / `## Sources used` is an appendix, not a normal presentation slide.
  - Add checklist items for slide-message blockquotes, notes support, visual accessibility, source appendix handling, and coherence across article/slide/notes modes.
- Do not change `src/content/posts/*.md` in Task 1. Pilot content migration is Task 2.

Scope limits:
- Do not edit `src/content/posts/*.md`.
- Do not migrate all five posts.
- Do not migrate even the pilot post in Task 1.
- Do not add MDX.
- Do not add a deck framework.
- Do not add a custom remark/parser pipeline unless you hit a hard reliability blocker and stop to report it.
- Do not split article/deck files.
- Do not modify resource summaries, transcript content, or unrelated routes.
- Avoid creating new files unless extracting a small script/style is clearly simpler than keeping the Task 1 change local.

Work-item updates:
- Append a Task 1 progress entry to `.agents/work/docs/post-slide-format-refresh/progress.md` with files changed, implementation summary, manual smoke checks performed, command verification results, blockers or unverified items, and next action.
- Update `.agents/work/docs/post-slide-format-refresh/index.md` if status, updated date, or next action changes.
- Update the Task 1 checkbox in `.agents/work/docs/post-slide-format-refresh/plan.md` only if all Task 1 acceptance criteria are met.
- Do not mark Task 2 started.

Required verification:
- `npm run check`
- `npm run build`
- `git diff --check`
- Manual smoke checks recorded in `progress.md`: one existing legacy post slide route, one route with `?notes=1`, hash navigation, keyboard controls, notes toggle, source appendix behavior, print preview, and at least one Mermaid-containing slide if available. Record if no Mermaid-containing route exists.
- If verification cannot run, record why and what remains unverified.

Stop conditions:
- Stop and report if the slide extractor requires a parser/framework migration to remain reliable.
- Stop and ask before adding MDX or changing the content collection loader.
- Stop if `npm run check` or `npm run build` fails for unrelated reasons that cannot be safely fixed inside Task 1.
- Stop if the preflight finds current first-blockquote sections that would be misinterpreted and cannot be safely handled without content migration.

Expected final response:
- Summary of changes
- Files changed
- Verification results, including `npm run check`, `npm run build`, and `git diff --check`
- Manual smoke checks performed
- Work-item updates made
- Remaining next action
```
