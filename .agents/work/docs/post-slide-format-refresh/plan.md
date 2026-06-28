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
  - Scope: `src/pages/posts/[slug]/slides.astro`, `src/styles/global.css` if shared styles are needed, `.agents/skills/article-writing/SKILL.md`, optional pilot changes to `src/content/posts/agentic-coding-2026.md` only if explicitly chosen.
  - Depends on: none
  - Acceptance:
    - Slide route keeps current H2-based fallback for posts without the new convention.
    - For sections whose first meaningful child after `h2` is a `blockquote`, slide mode renders the H2, that blockquote as the main message, and any immediate visual block; remaining content is in a notes container.
    - `## Sources used` is excluded from normal slide navigation but remains available through notes/print/article context.
    - Notes can be toggled with a button, a keyboard shortcut, and `?notes=1`.
    - Print CSS shows all slides with notes and hides navigation controls.
    - The route has a no-JS fallback link back to the article.
    - Keyboard navigation does not hijack events from focused links, buttons, inputs, or textareas.
    - Article-writing skill documents the new convention.
    - `npm run check` and `npm run build` pass.
  - Notes: Keep this slice small. Do not introduce MDX, a new deck framework, or a custom remark parser. Use `history.replaceState` rather than pushing a new history entry on every slide navigation if hash behavior changes.

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
- Backward compatibility is required for the first code slice; deliberate breaking changes can happen later only if they simplify the model and are documented.

## Acceptance criteria

- Work item has current `index.md`, `research.md`, `plan.md`, and `progress.md`.
- First implementation thread can start from Task 1 without redoing the research.
- The recommended model supports slide-only, notes, article/read, print/handout, and lightweight visuals.

## Verification

- Planning-only updates under `.agents/work/`: no build required.
- Any change under `src/` or `.agents/skills/article-writing/SKILL.md`: run `npm run check` and `npm run build`.
- Before staging any implementation commit, run `git status --short --branch`.

## Paste-ready implementation prompt for Task 1

```text
You are continuing the work item at:

.agents/work/docs/post-slide-format-refresh/

Read first:
1. .agents/work/docs/post-slide-format-refresh/index.md
2. .agents/work/docs/post-slide-format-refresh/research.md
3. .agents/work/docs/post-slide-format-refresh/plan.md
4. .agents/work/docs/post-slide-format-refresh/progress.md
5. src/pages/posts/[slug]/slides.astro
6. src/layouts/PostLayout.astro
7. src/content.config.ts
8. .agents/skills/article-writing/SKILL.md

Goal:
Implement the first safe code slice of the post/slide hybrid model. Keep Markdown posts as the source of truth. The new convention is: each rendered `##` section may start with a first blockquote that is the concise main slide message; an immediate image/Mermaid/text/table/SVG/figure visual after it belongs on the main slide; the remaining section content is speaker/reader notes.

Current state:
The slide route currently renders the full post into hidden `#source`, splits rendered content by every `h2`, and clones whole sections into slides. This makes current slides verbose and turns `## Sources used` into a slide. Planning is complete; no code migration has been implemented yet.

Implement only this slice:
- Update `src/pages/posts/[slug]/slides.astro` so the current H2 splitter remains as fallback, but sections with a first-blockquote slide message render as concise slide main content plus a notes container.
- Exclude `## Sources used` from normal slide navigation while preserving source access through article/notes/print context.
- Add a notes toggle, `?notes=1`, print CSS that shows all slides with notes, and a no-JS fallback link to the article.
- Improve keyboard handling so arrow/space navigation does not hijack focused interactive controls.
- Update `.agents/skills/article-writing/SKILL.md` with the post/slide hybrid convention and checklist items.
- Optionally migrate only `src/content/posts/agentic-coding-2026.md` as a pilot if the implementation needs real content to validate; otherwise leave post content unchanged.

Scope limits:
- Do not migrate all five posts.
- Do not add MDX, a deck framework, a custom fenced directive grammar, or split article/deck files.
- Do not modify resource summaries, transcript content, or unrelated routes.
- Avoid creating new files unless extracting slide JS/CSS is clearly smaller than keeping it local.

Progress contract:
- Update the Task 1 checkbox in `plan.md` only if the full acceptance criteria are met.
- Append to `progress.md` with files changed, verification, blockers, and next action.
- Update `index.md` Status, Updated, Artifacts, and Next Action if they change.

Verification:
- Run `npm run check`.
- Run `npm run build`.
- If you change only work-item docs, record that no code verification was needed; but Task 1 normally changes `src/`, so both commands should run.

Stop conditions:
- Stop and report if the slide extractor requires a parser/framework migration to remain reliable.
- Stop and ask before introducing MDX or changing the content collection loader.
- Stop if build/check failures are unrelated and cannot be safely fixed within Task 1.

Expected final response:
- Summary of changes
- Files changed
- Verification results
- Work-item updates made
- Remaining next action
```
