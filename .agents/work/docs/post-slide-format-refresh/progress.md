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
  - Superseded by the handoff prompt relocation entry below.

## 2026-06-28 Handoff prompt relocation

- What changed:
  - Moved the paste-ready Task 1 implementation prompt out of `plan.md` into `handoff-task-1.md`.
  - Updated `index.md` and `plan.md` to link to the separate handoff file.
  - Updated `.agents/work/AGENTS.md` to make separate handoff prompt files the durable work-item convention.
- Verification:
  - Planning/guidance docs only; no `src/` code/content or skill files changed.
  - `npm run check` and `npm run build` not required for this pass.
- Next action:
  - Start Task 1 from `handoff-task-1.md`.

## 2026-06-28 Task 1 implementation

- What changed:
  - Updated `src/pages/posts/[slug]/slides.astro` to keep the H2 splitter as a legacy fallback while adding first-blockquote slide-message extraction, bounded immediate visual extraction, notes containers, source appendices, notes controls, no-JS fallback, print CSS, shared Mermaid config import, and focus-safe keyboard/hash handling.
  - Excluded exact normalized `## Sources` / `## Sources used` sections from normal slide count/navigation and kept them available through the Sources link, notes mode, and print.
  - Updated `.agents/skills/article-writing/SKILL.md` with the post/slide hybrid convention and checklist items for slide-message blockquotes, notes support, accessible visuals, source appendices, and article/slide/notes coherence.
  - Did not edit `src/content/posts/*.md`.
- Preflight:
  - Checked current `src/content/posts/*.md` H2 sections for first-blockquote content before changing extractor behavior.
  - Result: no current H2 sections are immediately followed by a blockquote, so the new convention does not reinterpret existing post sections before Task 2.
- Files changed:
  - `src/pages/posts/[slug]/slides.astro`
  - `.agents/skills/article-writing/SKILL.md`
  - `.agents/work/docs/post-slide-format-refresh/index.md`
  - `.agents/work/docs/post-slide-format-refresh/plan.md`
  - `.agents/work/docs/post-slide-format-refresh/progress.md`
- Manual smoke checks:
  - Existing legacy route `/posts/agentic-coding-2026/slides`: 7 normal slides, all in legacy mode, `Sources used` excluded from slide headings/count and available as one appendix.
  - `/posts/agentic-coding-2026/slides?notes=1`: initial notes state active, notes button `aria-pressed="true"`, source appendix visible.
  - Hash navigation `/posts/agentic-coding-2026/slides#3`: loaded slide 3, ArrowRight moved to slide 4, and hash updated with `history.replaceState` behavior.
  - Keyboard controls: ArrowRight navigated and prevented default only when navigation happened; focused Notes button was not hijacked; Space on the final slide did not prevent default or change slides.
  - Notes toggle: button enabled `?notes=1` and `aria-pressed="true"`; `n` shortcut toggled notes off without changing slide.
  - Source appendix behavior: Sources link became visible when appendix existed, enabled notes mode, displayed the appendix, and slide count stayed 7.
  - Print preview check via Chrome print media emulation: top bar and controls hidden, all slides displayed, fixed/overflow layout removed, source appendix visible.
  - No-JS fallback: built HTML contains a visible `<noscript>` message with a link back to `/posts/agentic-coding-2026`.
  - Mermaid-containing route: none currently exists in `src/content/posts/*.md`; verified with a repository search for Mermaid fences/keywords.
- Verification:
  - `npm run check` passed.
  - `npm run build` passed.
  - `git diff --check` passed after work-item updates before commit.
  - Consulted Oracle on the implementation diff; fixed the reported nullable heading text and async print/Mermaid readiness issues.
- Blockers/unverified items:
  - No blockers.
  - Structured first-blockquote content has no migrated post to inspect yet; Task 2 is the pilot content migration.
- Next action:
  - Start Task 2: migrate only `src/content/posts/agentic-coding-2026.md` to the first-blockquote slide-message convention and rerun article/slide/notes/print checks.

## 2026-06-28 Task 2 handoff prompt

- What changed:
  - Consulted Oracle on a paste-ready Task 2 implementation prompt.
  - Added `handoff-task-2.md` for the pilot `agentic-coding-2026.md` article migration.
  - Updated `index.md` and `plan.md` to reference the Task 2 handoff prompt.
- Oracle prompt-review changes folded in:
  - Capture before word count before editing.
  - Make the expected 7 normal slides plus source appendix result explicit.
  - Warn that intended slide visuals must sit immediately after the section blockquote.
  - Strengthen timestamp/source verification for materially rewritten claims.
  - Keep handoff references current in work-item artifacts.
- Verification:
  - Planning/work-item docs only; no `src/` code/content or skill files changed.
  - `npm run check` and `npm run build` not required for this pass.
- Next action:
  - Start Task 2 from `handoff-task-2.md`.

## 2026-06-28 Task 2 pilot article migration

- What changed:
  - Migrated `src/content/posts/agentic-coding-2026.md` to the post/slide hybrid convention.
  - Added concise first-blockquote slide messages to all 7 non-appendix rendered `##` sections.
  - Kept `## Sources used` as the exact source appendix heading and did not add a slide-message blockquote there.
  - Added immediate Markdown-native slide visuals after each normal section blockquote: text diagrams/code-fence visuals and small tables. No static assets were added.
  - Kept citations, timestamp anchors, caveats, examples, and source-backed context in prose after the slide message/visual so they appear as notes.
- Files changed:
  - `src/content/posts/agentic-coding-2026.md`
  - `.agents/work/docs/post-slide-format-refresh/index.md`
  - `.agents/work/docs/post-slide-format-refresh/plan.md`
  - `.agents/work/docs/post-slide-format-refresh/progress.md`
- Word counts:
  - Before: 1,788 words (`wc -w src/content/posts/agentic-coding-2026.md` before editing).
  - After: 2,052 words.
  - Net: +264 words, mostly from slide-message blockquotes and lightweight visual scaffolding.
- Manual smoke checks:
  - Built the site, served `dist/` locally, and inspected the pilot with headless Chrome through the Chrome DevTools Protocol.
  - Article route `/posts/agentic-coding-2026` remains readable: rendered H1 is present, the article has 8 rendered H2 sections, 7 blockquotes, the exact `Sources used` appendix heading, intro prose, and a slides link.
  - Slide route `/posts/agentic-coding-2026/slides` shows 7 normal slides, all in structured mode, all blockquote-led, with normal headings only; `Sources used` is excluded from normal slide headings/counts.
  - `/posts/agentic-coding-2026/slides?notes=1` starts with notes visible, notes button `aria-pressed="true"`, and first-slide notes include citation/context after the slide message (`[00:41:36]` was present).
  - Source appendix access works: the Sources link is visible, clicking it keeps notes visible with `?notes=1`, and the appendix heading remains `Sources used`.
  - Visuals are readable/accessibility-safe: all 7 normal slides include one immediate text/table visual (`pre` or `table`), no image alt text is needed, and no meaning depends on color alone.
  - Print/handout media emulation shows slides and notes without the fixed/overflow slide layout: all slides and notes display as blocks, topbar/controls are hidden, the container is static with visible overflow, and the source appendix displays.
  - Internal links in the article point to existing routes; local HTTP checks returned 200 for `/posts/durable-context-coding-agents/`, `/posts/make-the-agent-prove-it/`, `/posts/small-threads-durable-state/`, `/posts/amp-factory-era-case-study/`, and `/resources/coding-with-agents/`.
- Verification:
  - `npm run check` passed.
  - `npm run build` passed.
  - `git diff --check` passed after the content and work-item updates.
- Blockers/unverified items:
  - No blockers.
  - Timestamp-backed factual sentences were not materially rewritten; moved/added slide messages and visuals are author synthesis based on the existing section arguments.
- Next action:
  - Start Task 3: add authoring/check reliability, including the short root `AGENTS.md` convention and an optional content checker only if it can stay reliable.
