# Post and slide format refresh plan

This plan turns the current whole-section slide splitter into a minimal slide/notes/article model without rewriting the whole article series up front.

## Goals

- Keep Markdown posts as the single source of truth.
- Make slide mode concise and presentation-friendly.
- Preserve rich article/notes prose with citations, examples, prompts, and source anchors.
- Add lightweight visual support without introducing a large deck framework.
- Migrate content incrementally and keep existing posts working during the transition.

## Tasks

- [ ] **Task 1: Implement the backward-compatible slide/notes extractor**
  - Scope: `src/pages/posts/[slug]/slides.astro`, `src/styles/global.css` if shared styles are needed, and `.agents/skills/article-writing/SKILL.md`. Do not change `src/content/posts/*.md` in Task 1.
  - Depends on: none
  - Acceptance:
    - Before implementation, current posts are checked for H2 sections immediately followed by blockquotes. If any exist and are not intended slide messages, preserve legacy behavior or stop and report.
    - Slide route keeps current H2-based fallback for posts without the new convention.
    - For sections whose first meaningful child after `h2` is a `blockquote`, slide mode renders the H2, that blockquote as the main message, and any immediate visual block; remaining content is in a notes container.
    - Immediate visual extraction is bounded to contiguous visual blocks after the first blockquote: Markdown image paragraphs, `figure`, `svg`, `table`, Mermaid code fences, and intentional text/diagram code fences. Extraction stops at the first normal prose paragraph, list, or non-visual code example.
    - `## Sources` and `## Sources used`, matched case-insensitively after whitespace normalization, are treated as appendices: excluded from normal slide navigation/counts but available in notes mode and print, or through an explicit article/source appendix link.
    - Notes can be toggled with a button, a keyboard shortcut, and `?notes=1`.
    - Print CSS shows all slides and notes, hides navigation controls, avoids clipping from fixed/overflow layout, and handles source appendices.
    - Mermaid diagrams needed for print are rendered before print, or print does not leave intended diagrams as raw code.
    - The route has a no-JS fallback link back to the article.
    - Keyboard navigation does not hijack events from focused links, buttons, inputs, textareas, selects, `[contenteditable]`, or modifier-key shortcuts; `preventDefault()` is used only when navigation actually happens.
    - Article-writing skill documents the new convention.
    - Manual smoke checks inspect one existing legacy post slide route, one route with `?notes=1`, hash navigation, keyboard controls, source appendix behavior, print preview, and at least one Mermaid-containing slide if available.
    - `npm run check` and `npm run build` pass.
  - Notes: Keep this slice small. Do not introduce MDX, a new deck framework, a custom remark parser, or post-content migration. Read `src/components/MermaidRenderer.astro` and `src/scripts/mermaid-config.ts` before changing Mermaid behavior. Use `history.replaceState` rather than pushing a new history entry on every slide navigation if hash behavior changes.

- [ ] **Task 2: Pilot one article migration**
  - Scope: `src/content/posts/agentic-coding-2026.md`, plus work-item progress updates.
  - Depends on: Task 1
  - Acceptance:
    - Each rendered H2 section in the pilot post has a concise first blockquote slide message, except `Sources used` if retained as an appendix.
    - At least two sections include useful lightweight visuals or existing diagrams positioned for slide mode.
    - Article mode remains readable and source anchors still support adjacent claims.
    - Slide mode, notes mode, and print/handout mode are manually inspected for the pilot route.
    - `npm run check` and `npm run build` pass.
  - Notes: Do not rewrite the full argument; migrate structure and trim only where it directly improves slide/read coherence.

- [ ] **Task 3: Add authoring/check reliability**
  - Scope: `.agents/skills/article-writing/SKILL.md`, optional `AGENTS.md`, optional checker script and `package.json` command.
  - Depends on: Task 1 and at least one pilot migration
  - Acceptance:
    - Root `AGENTS.md` has a short always-visible convention only after the model is implemented.
    - If a checker is added, it flags missing first blockquotes, overlong slide messages, missing image alt text, and accidental `Sources used` slide inclusion.
    - Checker behavior is documented and wired into a focused npm command only if it is reliable enough not to block normal content editing with noise.
    - `npm run check` and `npm run build` pass after any code/content changes.
  - Notes: A checker is optional until migration pain proves it is worth maintaining.

- [ ] **Task 4: Migrate remaining posts one at a time**
  - Scope: `src/content/posts/durable-context-coding-agents.md`, `src/content/posts/make-the-agent-prove-it.md`, `src/content/posts/small-threads-durable-state.md`, `src/content/posts/amp-factory-era-case-study.md`.
  - Depends on: Task 2
  - Acceptance:
    - Each post follows the first-blockquote slide-message convention.
    - Notes carry citations, nuance, examples, and prompts without bloating the visible slide.
    - Visual support is simple and purposeful; no heavyweight custom art dependency is introduced.
    - Internal links and source anchors remain valid.
    - `npm run check` and `npm run build` pass after each logical migration batch.
  - Notes: Prefer one post per commit. Use the target sketches in `research.md` as direction, not mandatory copy.

- [ ] **Task 5: Reassess whether MDX or richer visuals are justified**
  - Scope: planning/work item only unless a clear implementation trigger exists.
  - Depends on: Tasks 2-4
  - Acceptance:
    - The work item records whether Markdown visuals are sufficient.
    - MDX is proposed only if multiple posts need the same reusable component or if raw Markdown becomes a real maintenance problem.
    - Any proposed MDX migration includes concrete benefits, migration cost, and rollback/compatibility risks.
  - Notes: Default answer should remain “no MDX yet” unless evidence changes.

## Implementation notes

- Treat `## Sources used` as an appendix. Preserve source credibility; just avoid making it part of normal presentation flow.
- Prefer visible Markdown conventions over hidden syntax so agents can author reliably.
- Keep article/read mode first-class; slide mode is a projection of the article, not a divergent deck.
- Avoid long-lived generated artifacts outside `.agents/work/`.
- Do not modify resource summaries or transcript content.

## Constraints / decisions

- Chosen model: plain Markdown with first-blockquote slide message, optional immediate visual, remaining section as notes.
- Deferred: MDX components, custom fenced directive grammar, split article/deck files, and frontmatter-driven slide content.
- Task 1 is route/skill only. Pilot `agentic-coding-2026.md` in Task 2 after the route behavior is reviewable; do not migrate all posts in one first slice.
- Early visuals should be Markdown-native. If static image assets are needed later, use `public/visuals/posts/<slug>/` with descriptive filenames and accessible alt/caption text.
- Backward compatibility is required for the first code slice; deliberate breaking changes can happen later only if they simplify the model and are documented.

## Acceptance criteria

- Work item has current `index.md`, `research.md`, `plan.md`, and `progress.md`.
- First implementation thread can start from Task 1 without redoing the research.
- The recommended model supports slide-only, notes, article/read, print/handout, and lightweight visuals.

## Verification

- Planning-only updates under `.agents/work/`: no build required.
- Any change under `src/` or `.agents/skills/article-writing/SKILL.md`: run `npm run check` and `npm run build`.
- For implementation diffs, run `git diff --check` before staging.
- For Task 1, manually smoke-check `/posts/<slug>/slides`, `/posts/<slug>/slides?notes=1`, hash navigation, keyboard controls, source appendix behavior, print preview, and at least one Mermaid-containing slide if available.
- Before staging any implementation commit, run `git status --short --branch`.

## Paste-ready implementation prompt for Task 1

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
