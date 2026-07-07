# Durable Context Talk Plan

Create a post that doubles as a slide deck for a 20-minute presentation about durable context for AI coding agents.

## Goals

- Refine the title, abstract, thesis, and narrative arc before drafting.
- Keep the final deck to 10-12 slides and about 20 minutes.
- Use this repo's existing post/slides pipeline unless the content proves a code change is needed.
- Keep source claims accurate and verifiable.

## Tasks

- [x] **Task 1: Align the content spine with the user**
  - Scope: `.agents/work/docs/durable-context-talk/prd.md`, `.agents/work/docs/durable-context-talk/index.md`
  - Depends on: none
  - Acceptance:
    - User has chosen or adjusted the working thesis, title direction, and whether the talk is conceptual, practical, or demo-led.
    - Open questions in `index.md` are updated with user decisions.
  - Notes: Direction accepted by user on 2026-06-25. Default audience/tone is developers and technical leads; practical field guide with a conceptual hook.

- [x] **Task 2: Stress-test the research and plan**
  - Scope: `.agents/work/docs/durable-context-talk/research.md`
  - Depends on: Task 1 can run in parallel if user input arrives first
  - Acceptance:
    - Oracle or equivalent reviewer has checked the content spine for narrative gaps, source risks, timing risk, and slide density.
    - Plan/research are updated with high-confidence changes from the review.
  - Notes: Oracle completed on 2026-06-25. Key changes: map → procedure → state → evidence spine, running example requirement, 11-slide default, source/claim guardrails.

- [x] **Task 3: Complete baseline source verification**
  - Scope: `.agents/work/docs/durable-context-talk/research.md`, `.agents/work/docs/durable-context-talk/sources/`
  - Depends on: Task 2
  - Acceptance:
    - Every core claim planned for the first draft has a stable source link or local source note.
    - Risky optional claims are listed for a post-draft source expansion gate.
    - The "Agents Captain" / "say no to slop" decision is resolved.
  - Notes: Core source set is sufficient for drafting. Do not add more sources unless the draft uses a claim from Task 5.

- [x] **Task 4: Draft the slide-aware post**
  - Scope: `src/content/posts/<slug>.md`
  - Depends on: Tasks 1-3
  - Acceptance:
    - New Markdown post has valid frontmatter, `draft: true`, relevant tags, and an `order` value.
    - Body has 10-11 `##` sections, each usable as a slide; 12th section only if needed for a backup objection/Q&A slide.
    - First `##` section functions as the title/promise slide because the slide generator does not include frontmatter title as a slide.
    - The deck uses the **map → procedure → state → evidence** loop as the practical spine.
    - One running example appears in at least 2-3 sections; recommended example is this repo's slide-aware post workflow.
    - Every strong claim is directly sourced, reframed as personal workflow observation, or removed.
    - Content includes a concise summary/takeaway and links to cited sources.
  - Notes: Initial draft created at `src/content/posts/durable-context-coding-agents.md` with 11 `##` sections.

- [x] **Task 5: Review whether optional source expansion is needed**
  - Scope: `src/content/posts/<slug>.md`, `.agents/work/docs/durable-context-talk/research.md`
  - Depends on: Task 4
  - Acceptance:
    - Draft is checked against the source/claim table in `research.md`.
    - Additional sources are added only if the draft makes one of these claims:
      - numerical study claims from Anthropic, Wharton, MIT, or similar;
      - Mario Zechner / average GitHub code quality claims;
      - exact AGENTS.md adoption counts;
      - hard productivity multipliers or "agents write most code now" generalizations;
      - dot-agents as a standard rather than one implementation.
    - If a claim is not worth sourcing, it is removed or reframed before preview.
  - Notes: Initial draft avoids these risky claim categories; no additional sources needed for this version.

- [ ] **Task 6: Preview and tune the deck**
  - Scope: `src/content/posts/<slug>.md`, optionally `src/pages/posts/[slug]/slides.astro` only if a real presentation need appears
  - Depends on: Task 5
  - Acceptance:
    - Slides are readable at `/posts/<slug>/slides` in local preview.
    - Any dense slide is split, shortened, or moved to post-only detail.
    - Timing estimate remains within 20 minutes.
  - Notes: Avoid slide-system changes unless speaker notes, title-slide generation, or post-only/slide-only content becomes necessary.

- [ ] **Task 7: Final verification and publish decision**
  - Scope: `src/content/posts/<slug>.md`, work item artifacts
  - Depends on: Task 6
  - Acceptance:
    - `npm run check` passes.
    - `npm run build` passes.
    - `progress.md` records verification results.
    - `index.md` status and next action reflect whether the post remains draft or is ready to publish.
  - Notes: Run `npm run lint:fix` if formatting changes are needed.

- [x] **Task 8: Source-backed article upgrade for a stronger slide base**
  - Scope: `src/content/posts/durable-context-coding-agents.md`, `.agents/work/docs/durable-context-talk/research.md`, `.agents/work/docs/durable-context-talk/progress.md`
  - Depends on: User feedback that the post/articles felt outdated and too simplistic
  - Acceptance:
    - Existing transcript-backed summaries are reviewed for stronger current insights before editing.
    - Oracle reviews the current post and recommends a revised narrative/slide structure.
    - The post remains slide-aware with 10-12 `##` sections.
    - The revised post expands beyond basic `AGENTS.md` / skills / work-item taxonomy into alignment debt, context hygiene, proof stacks, good friction, and codebase-as-agent-infrastructure.
    - Work-item research/progress capture the learnings and next step for high-level visual slides.
    - `npm run check` and `npm run build` pass after the content edit.
  - Notes: Completed on 2026-06-27 as a direct-link article revision. The next separate step is a high-level visual slide pass, not more article expansion.

- [ ] **Task 9: High-level visual slide pass**
  - Scope: `src/content/posts/durable-context-coding-agents.md`, optionally slide-specific rendering/content support only if proven necessary
  - Depends on: Task 8
  - Acceptance:
    - Each `##` section has a compact slide takeaway and candidate visual metaphor.
    - Dense article prose is either summarized for slides or moved to speaker/article detail if the slide renderer supports it later.
    - The deck reads as high-level visuals first, text second.
    - Any slide-system code change is scoped separately and only added if Markdown authoring cannot produce the needed presentation quality.
  - Notes: Do this in a separate step after reviewing the upgraded article base.

## Implementation Notes

- Keep the initial work content-first. Do not change code just to support hypothetical presentation features.
- The current slide renderer splits post HTML by `h2`; authoring discipline is the main slide constraint.
- Do not overuse OpenAI as proof that all teams should work the same way. Use the X memo for culture/process vocabulary and Harness Engineering for durable repo-local context.
- Prefer "comprehension debt" for the software-specific risk and "cognitive surrender" for the human posture/failure mode. Avoid switching among cognitive debt, comprehension debt, and technical debt without defining them.
- If the final article needs long-form prose that would overload slides, consider one of two approaches later:
  - keep this as a concise talk post and write a deeper follow-up article, or
  - add explicit slide markers/post-only blocks to the renderer after scoping the smallest safe code change.

## Constraints / Decisions

- Use `.agents/work/docs/durable-context-talk/` as durable planning context.
- Draft public content under `src/content/posts/` only after user input is incorporated.
- Default final slug candidate: `durable-context-coding-agents`.
- Default initial title candidate: "Your Repo Is the Memory: Durable Context for AI Coding Agents".

## Acceptance Criteria

- Work item artifacts explain the concept, process, repo fit, source risks, and next steps.
- The first public draft can be created without rediscovering repo structure or sources.
- No unnecessary code changes are made before the content need is proven.

## Verification

- Planning-only changes: run `git diff --check`.
- After drafting post: run `npm run check` and `npm run build`.
- For slide quality: local preview at `/posts/<slug>/slides` and manual timing/readability pass.
