# Post and slide format refresh plan

This plan turns the current whole-section slide splitter into a minimal slide/notes/article model without rewriting the whole article series up front.

## Goals

- Keep Markdown posts as the single source of truth.
- Make slide mode concise and presentation-friendly.
- Preserve rich article/notes prose with citations, examples, prompts, and source anchors.
- Add lightweight visual support without introducing a large deck framework.
- Migrate content incrementally and keep existing posts working during the transition.

## Tasks

- [x] **Task 1: Implement the backward-compatible slide/notes extractor**
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

- [x] **Task 2: Pilot one article migration**
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

## Handoff Prompts

- Task 1 implementation prompt: `handoff-task-1.md`
- Task 2 pilot article migration prompt: `handoff-task-2.md`
