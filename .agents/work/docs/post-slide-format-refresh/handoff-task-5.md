# Handoff: Task 5 presentation engagement and reveal strategy

You are working in the `with-agents` repo on Task 5 for `.agents/work/docs/post-slide-format-refresh/`.

Task 5 is no longer just “MDX vs Markdown visuals.” Reassess the **presentation engagement / progressive reveal / visual strategy** while preserving the original decision pressure: decide whether the current Markdown-first slide model is enough, whether small route/authoring conventions should be added, or whether MDX/richer deck tooling is justified.

Default stance: **do not recommend MDX or a deck framework unless evidence clearly justifies it.** This should primarily be a planning/work-item update. Implement only if there is a tiny, obvious documentation/work-item change with a clear trigger.

## Completed context

- Task 1 slide route committed `d67d952`.
- Task 2 pilot post committed `d59ba33`.
- Task 3 guidance-only authoring docs committed `9216cb3`; no checker exists.
- Task 4 all remaining posts migrated and completed with commits `80e4e60`, `941bf8b`, `c9ed660`, `e58ab83`, and `c856096`.
- Local `.agents/skills/agent-browser/SKILL.md` added `2d13afb`.
- Browser-executed smoke was skipped in Task 4 because local Chrome `--dump-dom` hung; static built HTML and Markdown structure checks were used.

## Read first

1. `AGENTS.md`
2. `.agents/work/docs/post-slide-format-refresh/index.md`
3. `.agents/work/docs/post-slide-format-refresh/plan.md`
4. `.agents/work/docs/post-slide-format-refresh/research.md`
5. `.agents/work/docs/post-slide-format-refresh/progress.md`
6. `src/pages/posts/[slug]/slides.astro`
7. `.agents/skills/article-writing/SKILL.md`
8. `.agents/skills/agent-browser/SKILL.md` only if browser verification would change the decision
9. Migrated posts:
   - `src/content/posts/agentic-coding-2026.md`
   - `src/content/posts/durable-context-coding-agents.md`
   - `src/content/posts/make-the-agent-prove-it.md`
   - `src/content/posts/small-threads-durable-state.md`
   - `src/content/posts/amp-factory-era-case-study.md`

## User goals to incorporate

- Slides should feel more visual, engaging, and presentation-friendly.
- Consider overlays or staged messages for a given slide.
- If a concept is introduced, perhaps the next slide reveals sub-points or fuller context.
- Evaluate whether to show all slide context at once or progressively reveal partial content until the slide is fully shown.
- Progressive reveal should allow a concept to be introduced while still showing a small amount of text.
- Consider visuals that could be generated separately from prompts by a coding agent / LLM.
- Search-informed preference: technical-audience slides should stay minimal, simple, high-signal, and may use a little humor only when it clarifies or keeps attention.

## Reference findings to reflect

- Effective presentation guidance favors one idea per slide and progressive buildup for complex diagrams or arguments. Duplicated slides, cropping, or covering can simulate reveal while preserving simple slide semantics.
- Progressive disclosure reduces clutter/cognitive load by showing essential information first and revealing detail later, but it must remain predictable and accessible.
- reveal.js fragments, Slidev click animations, and Quarto/reveal stack layouts are useful references for fragments/overlays, but adopting them adds deck-framework or framework-specific complexity.
- Marp is a useful counterexample: minimalist/CommonMark and portable, but without fragments. This matters because agent-authorability and portability are project goals.
- AI-generated diagrams need a careful workflow. Prefer prompt → diagram plan/spec → human or coding-agent refinement → accessible committed asset. Avoid relying on direct arbitrary image generation when spatial layout or text labels matter.

## Current slide model to evaluate

- Posts remain Markdown.
- Rendered `##` sections become slides.
- The first meaningful blockquote after an H2 becomes the slide message.
- Immediate visual blocks after that blockquote appear in slide mode.
- Remaining section content becomes notes.
- `## Sources` / `## Sources used` are appendix-like, not normal slide flow.
- Notes, print, hash navigation, keyboard navigation, and Mermaid rendering exist.

## Goals

Update the Task 5 work item so it answers:

1. Are Markdown-native visuals still sufficient after all posts were migrated?
2. What kind of engagement improvement is actually needed: better content conventions, progressive duplicate slides, route-level fragments/overlays, generated static assets, MDX components, or a deck framework?
3. Which approach best fits this site’s constraints: Markdown posts as source of truth, simple static site, technical audience, print/PDF fallback, agent-authorable content, and low maintenance?
4. What is the smallest next action that improves presentation quality without committing to unnecessary complexity?
5. What evidence would trigger MDX, richer components, route-level reveal, generated assets, or a deck framework later?

## Constraints / non-goals

- Keep article/read mode first-class. Slide mode remains a projection of the article unless the reassessment explicitly recommends changing that later.
- Do not default to MDX.
- Do not adopt reveal.js, Slidev, Quarto, Marp, or another deck framework in Task 5.
- Do not add dependencies in Task 5 unless there is a very strong, explicit reason and the implementation is tiny.
- Do not implement route-level fragments/overlays in Task 5 unless the need and syntax are obvious, low-risk, accessible, and print-safe.
- Do not commit generated visual assets in Task 5 unless explicitly necessary and clearly scoped.
- Do not rewrite posts broadly in Task 5.
- Do not create long-lived generated artifacts outside the work item unless they are actual site assets needed by a later implementation.
- Keep internal links valid and preserve source/citation credibility.
- Favor visible Markdown conventions that agents can reliably author.
- Keep accessibility, print/PDF fallback, and no-JS/low-JS resilience in the decision.

## Evaluation steps

1. Inspect the current Task 5 text in `plan.md` and confirm it reflects this broader strategy question.
2. Inspect `src/pages/posts/[slug]/slides.astro`:
   - slide splitting;
   - main vs notes extraction;
   - immediate visual handling;
   - source appendices;
   - notes and print behavior;
   - whether any existing structure could support progressive reveal without new syntax;
   - what a minimal route-level extension would require, if any.
3. Inspect the pilot post and skim the migrated post structures:
   - Are current slides too text-heavy?
   - Are visuals mostly diagrams/tables/code blocks?
   - Would progressive duplicate slides or static diagram stages help without framework support?
   - Are there repeated visual patterns that justify reusable components?
4. Evaluate these models:
   - **Keep Markdown static visuals**: current blockquote + immediate visual + notes model.
   - **Progressive duplicate slides / static diagram buildup**: adjacent sections/slides build concept → subpoint → fuller diagram.
   - **Within-slide fragments/overlays**: one slide reveals bullets, highlights, or layers across clicks.
   - **Notes-only narrative**: sparse visible slide; speaker notes carry nuance.
   - **Generated static visual workflow**: prompt/spec → refinement → committed accessible asset.
   - **MDX/components**: reusable visual or overlay components inside posts.
   - **Deck framework**: reveal.js/Slidev/Marp-style capabilities.
5. Produce a decision matrix comparing those options by:
   - engagement gain;
   - implementation cost;
   - authoring complexity;
   - accessibility and print/PDF fallback;
   - agent reliability;
   - fit with Markdown source of truth;
   - rollback risk;
   - trigger/evidence needed.

## Decision criteria

Recommend Markdown-first / no MDX yet if:

- current posts can improve through editorial structure, progressive duplicate slides, and static Markdown-native visuals;
- visual patterns are content-specific rather than repeated components;
- raw Markdown stays readable and maintainable;
- the route supports the needed projection without growing special cases;
- authoring stays understandable without hidden syntax.

Consider route-level reveal later if:

- duplicated progressive slides create obvious maintenance pain;
- a narrow Markdown-visible convention is available;
- keyboard, hash, notes, print, accessibility, and reduced-motion behavior are clear.

Consider generated static assets later if:

- a specific slide needs a visual that text diagrams/tables cannot communicate;
- there is a prompt/spec and refinement workflow;
- final assets can live under `public/visuals/posts/<slug>/` with alt text/captions and source prompt/spec notes.

Consider MDX/components only if:

- multiple posts need the same reusable visual/interactive component, or Markdown authoring is already causing real maintenance problems;
- benefits outweigh migration, compatibility, rollback, and agent-authoring costs.

Consider a deck framework only if:

- presentation mode becomes a first-class deck product requiring fragments, overlays, speaker tools, export, or rich animations beyond what the current route should own.

## Expected recommendation shape

Verify this against the actual files, but the likely recommendation is:

- Short term: keep the Markdown-first slide route.
- Improve authoring strategy around one idea per slide, sparse visible text, notes, and progressive buildup through adjacent/duplicated slides or static diagram stages.
- Treat generated static visuals as a workflow, not a dependency: store prompts/specs in work-item context during drafting and commit only final accessible assets when used.
- Defer route-level fragments/overlays until duplicated progressive slides create concrete pain.
- Defer MDX until repeated reusable components are needed.
- Defer deck framework until presentation mode needs true deck features beyond article-projected slides.

## Work-item updates

Update the work item so future agents can continue without redoing this thinking:

- Update `progress.md` with:
  - what you read;
  - the decision matrix location;
  - the recommendation;
  - verification performed;
  - open questions / next action.
- Update `index.md` status/summary/next action if Task 5 completes the plan.
- Mark Task 5 complete in `plan.md` only if acceptance is met.
- Add findings to `research.md` only if the decision matrix or reference synthesis is substantial enough to preserve there. Keep it concise.
- If no implementation is warranted, say that directly.

## Verification

- For planning-only updates under `.agents/work/`, no build is required.
- Run `git diff --check` before staging changed docs.
- Run `git status --short --branch` before staging/committing.
- If you change `src/` or `.agents/skills/article-writing/SKILL.md`, run `npm run check` and `npm run build`.
- Browser-executed smoke is not required for planning-only Task 5. If later UI work is done, prefer the checked-in `agent-browser` skill path over relying on `Chrome --dump-dom`, since that previously hung.

## Stop conditions

Stop and report instead of implementing if:

- the best next step is a product/editorial decision rather than code;
- the needed reveal syntax is not obvious;
- print/PDF fallback would be compromised;
- accessibility semantics are unclear;
- MDX/deck adoption would require broad migration;
- generated assets would be speculative rather than immediately useful.

## Expected final response

End with a concise summary containing:

- files changed;
- recommendation;
- decision matrix location;
- whether any implementation was done;
- verification run or why not run;
- next recommended task;
- commit hash if committed.

Do not overstate certainty. If the recommendation depends on future presentation use, name the concrete trigger that would change it.
