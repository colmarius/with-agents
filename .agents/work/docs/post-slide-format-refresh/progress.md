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

## 2026-06-28 Task 3 handoff prompt

- What changed:
  - Consulted Oracle on a paste-ready Task 3 implementation prompt.
  - Added `handoff-task-3.md` for the authoring/check reliability task.
  - Updated `index.md` and `plan.md` to reference the Task 3 handoff prompt.
- Oracle prompt-review changes folded in:
  - Force an explicit guidance-only vs focused-checker decision before writing checker code.
  - Warn that only one pilot post is migrated, so any checker must not fail known-unmigrated posts by default or block normal editing with expected Task 4 work.
  - Keep checker scope small, dependency-light, and aligned with the actual slide extractor rules if it is added.
  - Require progress logging of the checker decision, verification, limitations, and Task 4 follow-up.
- Verification:
  - Planning/work-item docs only; no `src/` code/content, root guidance, skill, package, or checker files changed.
  - `npm run check` and `npm run build` not required for this pass.
- Next action:
  - Start Task 3 from `handoff-task-3.md`.

## 2026-06-28 Task 3 authoring/check reliability

- Checker decision:
  - Chose the guidance-only path for Task 3.
  - Rationale: inspected the migrated pilot post and `src/pages/posts/[slug]/slides.astro`. The route still intentionally preserves legacy whole-section slides, and only `agentic-coding-2026.md` has migrated to the first-blockquote convention. A checker would need to be explicitly targeted and would still duplicate route/parser rules before Task 4 reveals whether the convention needs small adjustments. Adding one now would create maintenance cost or false-positive risk without enough migrated examples.
- What changed:
  - Added a short always-visible post/slide convention to root `AGENTS.md`.
  - Tightened `.agents/skills/article-writing/SKILL.md` so the detailed workflow names the actual extractor rules: first meaningful blockquote after `##`, contiguous immediate visuals only, notes after the first non-visual block, and exact `## Sources` / `## Sources used` appendices.
  - Did not add a checker script, npm command, package changes, slide-route changes, post migrations, or static visual assets.
- Files changed:
  - `AGENTS.md`
  - `.agents/skills/article-writing/SKILL.md`
  - `.agents/work/docs/post-slide-format-refresh/index.md`
  - `.agents/work/docs/post-slide-format-refresh/plan.md`
  - `.agents/work/docs/post-slide-format-refresh/progress.md`
- Verification:
  - `npm run check` passed.
  - `npm run build` passed.
  - `git diff --check` passed before staging.
- Limitations / Task 4 follow-up:
  - No automated slide-authoring checker exists yet. During Task 4, migrate one post at a time and inspect article/slide/notes/print behavior; reconsider a focused opt-in checker only after more posts use the convention and noisy edge cases are better understood.
- Next action:
  - Start Task 4: migrate the remaining posts one at a time.

## 2026-06-28 Task 4 handoff prompt

- What changed:
  - Consulted Oracle for a paste-ready Task 4 implementation prompt.
  - Added `handoff-task-4.md` for the remaining post migrations.
  - Updated `index.md` and `plan.md` to reference the Task 4 handoff prompt.
- Verification:
  - Work-item docs only; no `src/` code/content changed in this handoff step.
  - `npm run check` and `npm run build` not required for this handoff step.
- Next action:
  - Start Task 4 content migration with `src/content/posts/durable-context-coding-agents.md`.

## 2026-06-28 Task 4 durable-context migration

- Post migrated:
  - `src/content/posts/durable-context-coding-agents.md`
  - Commit: `80e4e60` (`Migrate durable context post to slide hybrid format`)
- Baseline:
  - H2 sections before migration: 9 normal sections, no `## Sources` / `## Sources used` appendix.
  - Word count before: 1,697.
  - Word count after: 1,815.
- What changed:
  - Added concise first-blockquote slide messages to all 9 normal H2 sections.
  - Moved existing text diagrams/code visuals directly after the new slide messages where they are intended slide material.
  - Added one lightweight text visual for the cheap-code/alignment section.
  - Kept citations, source links, caveats, and explanatory prose in notes/article text after slide messages and visuals.
- Verification:
  - `git diff --check` passed.
  - `npm run check` passed.
  - `npm run build` passed.
  - Static built-route smoke passed for article and slide artifacts: article build includes 9 H2s and 9 blockquotes; slide build includes notes control, print CSS, source container, and source-appendix container.
- Limitations / notes:
  - Headless Chrome `--dump-dom` hung even on a trivial data URL in this environment, so browser-executed slide smoke was not completed for this post. Content shape was checked against the route convention and built HTML instead.
- Next action:
  - Continue Task 4 with `src/content/posts/make-the-agent-prove-it.md`.

## 2026-06-28 Task 4 proof-stack migration

- Post migrated:
  - `src/content/posts/make-the-agent-prove-it.md`
  - Commit: `941bf8b` (`Migrate proof stack post to slide hybrid format`)
- Baseline:
  - H2 sections before migration: 10 normal sections plus exact `## Sources used` appendix.
  - Word count before: 1,600.
  - Word count after: 1,716.
- What changed:
  - Added concise first-blockquote slide messages to all 10 normal H2 sections.
  - Repositioned the proof-stack ladder, risk table, red-green prompt, real-system transcript, conformance prompt, blast-radius questions, reusable prompt, and closing evidence flow as immediate slide visuals where appropriate.
  - Left `## Sources used` without a blockquote so it remains a source appendix outside normal slide navigation.
  - Kept timestamps, source context, and review caveats in notes/article prose.
- Verification:
  - `git diff --check` passed.
  - `npm run check` passed.
  - `npm run build` passed.
  - Static built-route smoke passed: article build includes 11 H2s, 10 blockquotes, and `Sources used`; slide build includes notes control, print CSS, source container, source-appendix container, and the first slide message.
- Limitations / notes:
  - Browser-executed slide smoke remains skipped because headless Chrome `--dump-dom` hung in this environment during the durable-context migration. Content shape and built HTML were checked instead.
- Next action:
  - Continue Task 4 with `src/content/posts/small-threads-durable-state.md`.

## 2026-06-28 Task 4 small-threads migration

- Post migrated:
  - `src/content/posts/small-threads-durable-state.md`
  - Commit: `c9ed660` (`Migrate small threads post to slide hybrid format`)
- Baseline:
  - Rendered H2 sections before migration: 8 normal sections plus exact `## Sources used` appendix. Two additional `##` strings are inside a fenced progress-template code block and are not rendered slide sections.
  - Word count before: 1,551.
  - Word count after: 1,725.
- What changed:
  - Added concise first-blockquote slide messages to all 8 normal rendered H2 sections.
  - Repositioned existing workflow visuals and examples directly after slide messages: research funnel, work-item tree, handoff prompt, Git quality gate, and operating procedure.
  - Added small Markdown-native visuals for the opening workflow, file-role table, committable-thread pipeline, and operating loop.
  - Left `## Sources used` without a blockquote so it remains a source appendix outside normal slide navigation.
- Verification:
  - `git diff --check` passed.
  - `npm run check` passed.
  - `npm run build` passed.
  - Static built-route smoke passed: article build includes 9 rendered H2s, 8 blockquotes, and `Sources used`; slide build includes notes control, print CSS, source container, source-appendix container, and the first slide message.
- Limitations / notes:
  - Browser-executed slide smoke remains skipped because headless Chrome `--dump-dom` hung in this environment during the durable-context migration. Content shape and built HTML were checked instead.
- Next action:
  - Continue Task 4 with `src/content/posts/amp-factory-era-case-study.md`.

## 2026-06-28 Task 4 Amp case study migration

- Post migrated:
  - `src/content/posts/amp-factory-era-case-study.md`
  - Commit: `e58ab83` (`Migrate Amp case study to slide hybrid format`)
- Baseline:
  - H2 sections before migration: 7 normal sections plus exact `## Sources used` appendix.
  - Word count before: 1,701.
  - Word count after: 1,843.
- What changed:
  - Added concise first-blockquote slide messages to all 7 normal H2 sections.
  - Repositioned and added Markdown-native text visuals for reusable Amp lessons: product-detail-to-contract framing, delegation ownership, context split, proof loop, orchestration frontier, and durable contracts.
  - Left `## Sources used` without a blockquote so it remains a source appendix outside normal slide navigation.
  - Kept Amp product claims, source checks, and timestamp-backed nuance in notes/article prose.
- Verification:
  - `git diff --check` passed.
  - `npm run check` passed.
  - `npm run build` passed.
  - Static built-route smoke passed: article build includes 8 H2s, 7 blockquotes, and `Sources used`; slide build includes notes control, print CSS, source container, source-appendix container, and the first slide message.
- Limitations / notes:
  - Browser-executed slide smoke remains skipped because headless Chrome `--dump-dom` hung in this environment during the durable-context migration. Content shape and built HTML were checked instead.
- Next action:
  - Finish Task 4 work-item cleanup and move the next action to Task 5.

## 2026-06-28 Task 4 completion

- What changed:
  - Completed migration of all remaining posts to the post/slide hybrid convention:
    - `80e4e60` — durable context post.
    - `941bf8b` — proof stack post.
    - `c9ed660` — small threads post.
    - `e58ab83` — Amp case study post.
  - Marked Task 4 complete in `plan.md`.
  - Updated `index.md` summary and next action for Task 5.
- Verification:
  - Each post migration ran `git diff --check`, `npm run check`, and `npm run build` successfully before its content commit.
  - Final work-item cleanup ran `git diff --check` before staging.
- Residual risks:
  - Browser-executed slide smoke was not completed for Task 4 because local headless Chrome `--dump-dom` hung in this environment. Static built HTML and Markdown structure checks were used instead. Task 5 can decide whether richer visual work warrants a more robust browser verification path, potentially using the newly added `agent-browser` skill/CLI.
- Next action:
  - Start Task 5: reassess whether Markdown-native visuals are sufficient or whether MDX/richer visuals are justified.

## 2026-06-28 Task 5 prompt reframing

- What changed:
  - Folded user feedback into Task 5: slides should become more engaging, visual, and presentation-friendly, with attention to progressive buildup, overlays/reveal, sparse visible text, and separately generated visual prompts/assets.
  - Consulted Oracle for an updated paste-ready Task 5 prompt after gathering references on one-idea-per-slide, progressive disclosure, reveal.js/Slidev fragments, Quarto/reveal stacked overlays, slides-as-code tradeoffs, and AI diagram-generation limitations.
  - Updated `plan.md` so Task 5 is now a presentation engagement / progressive reveal / visual strategy reassessment, with MDX/deck tooling treated as one option rather than the whole question.
  - Added `handoff-task-5.md` and linked it from `index.md` and `plan.md`.
- Verification:
  - Work-item docs only; no `src/` code/content or skill files changed.
  - `npm run check` and `npm run build` not required for this planning update.
- Next action:
  - Start Task 5 from `handoff-task-5.md`.

## 2026-06-28 Task 5 presentation engagement decision

- What I read:
  - `AGENTS.md`
  - `.agents/work/AGENTS.md`
  - `.agents/work/docs/post-slide-format-refresh/index.md`
  - `.agents/work/docs/post-slide-format-refresh/plan.md`
  - `.agents/work/docs/post-slide-format-refresh/research.md`
  - `.agents/work/docs/post-slide-format-refresh/progress.md`
  - `src/pages/posts/[slug]/slides.astro`
  - `.agents/skills/article-writing/SKILL.md`
  - Migrated posts: `agentic-coding-2026.md`, `durable-context-coding-agents.md`, `make-the-agent-prove-it.md`, `small-threads-durable-state.md`, and `amp-factory-era-case-study.md`.
  - Skipped `.agents/skills/agent-browser/SKILL.md` because this was a planning-only decision and browser execution would not change the strategy.
- Post-migration evidence:
  - The five public posts now have 41 normal slides plus four source appendices.
  - All 41 normal slides have first-blockquote slide messages; sampled blockquote averages are roughly 9-11 words per post.
  - 35 of 41 normal slides have immediate Markdown-native visuals: 31 text/code diagrams and four tables. Six slides are message-only.
  - Visuals are content-specific workflow diagrams, matrices, ladders, and prompt/command excerpts rather than repeated reusable components.
  - The route supports slide splitting, main/notes extraction, source appendices, notes/print/no-JS/keyboard behavior, and Mermaid rendering. It does not support within-slide fragments; adding them would require new syntax, fragment state, keyboard/hash behavior, print expansion, accessibility semantics, and no-JS behavior.
- Decision matrix location:
  - `research.md` section: “Task 5 presentation engagement / reveal matrix”.
- Recommendation:
  - Keep the Markdown-first slide route. It is sufficient for current presentation use after migration.
  - Improve engagement through authoring strategy: one idea per slide, sparse visible text, notes-only nuance, and adjacent progressive buildup slides/static diagram stages where a dry-run shows the concept needs staged reveal.
  - Treat generated visuals as a workflow, not a dependency: prompt/spec → agent or human refinement → committed accessible asset only for a named slide that text diagrams/tables cannot explain.
  - Defer route-level fragments/overlays until duplicated buildup creates concrete maintenance pain and a narrow Markdown-visible, print-safe syntax is obvious.
  - Defer MDX until multiple posts need the same reusable visual/interactive component or Markdown authoring becomes real maintenance pain.
  - Defer a deck framework until presentation mode becomes a first-class deck product needing fragments, overlays, speaker tools, export, or rich animations beyond the article-projected route.
- Implementation:
  - No site implementation was warranted. Only work-item docs were updated.
- Verification:
  - Planning/work-item docs only; `npm run check` and `npm run build` were not required.
  - `git diff --check` passed before commit.
- Next action:
  - If presentation quality needs another pass, run a dry presentation/edit pass for one target post or talk path and add Markdown-native adjacent buildup slides or static diagram stages only where the presenter actually needs progressive reveal.
