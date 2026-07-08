# Agentic Coding Article Refresh Progress

## 2026-06-28

- User noticed the homepage still linked to now-draft posts after publishing only the durable-context article.
- Updated `src/pages/index.astro` to link only to production-built routes:
  - `/posts/durable-context-coding-agents`
  - `/posts/durable-context-coding-agents/slides`
  - `/resources/coding-with-agents`
- Created this work item to review and refresh the draft article backlog against current transcript/resource themes before republishing anything.
- Initial inventory suggests:
  - Simon Willison proof/evidence article is the strongest near-publish candidate.
  - Broad field guide needs a current rewrite.
  - Intro/workflow/planning posts should likely be merged or rewritten around durable state and context hygiene.
  - Amp-specific posts need product verification before publication.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed.
  - Production `dist/posts` contains only `index.html`, `durable-context-coding-agents/index.html`, and `durable-context-coding-agents/slides/index.html`.
  - Production `dist/index.html` links to durable-context article/slides and resources, and no longer links to the checked draft post routes.

## Next Action

- Run Task 1 from `plan.md`: read the draft bodies and produce a per-article refresh/merge/retire decision with source anchors.

## 2026-06-28 User Direction Update

- User answered the open questions in `index.md`:
  - The refreshed public series should be broader agentic-coding guidance; Amp is one concrete tool/example.
  - There is no strong preference on whether transcript-backed material appears as posts, resource summaries, or both, but public posts should stay few and high-signal. Avoid duplicating summary information unless a post has a distinct, relevant article thesis.
- Updated `index.md`, `research.md`, and `plan.md` so the next audit evaluates duplication risk and positions Amp-specific material as a tool case study rather than the whole series.

## Updated Next Action

- Consult Oracle to review this work item for gaps. Address high-confidence feedback, then ask Oracle for a paste-ready implementation prompt for Task 1.

## 2026-06-28 Oracle Work-Item Review

- Oracle reviewed `index.md`, `research.md`, `plan.md`, and `progress.md` for implementation-readiness.
- Addressed high-confidence feedback:
  - Added `audit.md` as the concrete Task 1 deliverable with one row per draft and fields for decision, destination slug, distinct thesis, overlaps, source anchors, stale claims, and frontmatter/navigation impact.
  - Made the “distinct thesis beyond resource summary” gate explicit and testable.
  - Strengthened the source method: transcript-backed claims must be checked against transcripts, substantive claims need anchors, and Amp product claims need close-to-publish verification.
  - Added source-map paths and timestamp ranges for major themes.
  - Split broad later tasks: workflow/planning merge, first-win tutorial decision, Amp tool case study, and navigation updates.
  - Added publish-route constraints for `draft` and `unlisted` behavior.
  - Added merge/retire/private/publish-candidate decision meanings and the rule to refresh/publish one article at a time.

## Updated Next Action

- Ask Oracle for a paste-ready implementation prompt for `plan.md` Task 1 using the revised work item.

## 2026-06-28 Oracle Task 1 Handoff Prompt

- Asked Oracle to write a paste-ready implementation prompt for `plan.md` Task 1 after the work-item review feedback was addressed.
- Saved the resulting prompt as `handoff-task-1.md` and linked it from `index.md`.

## Updated Next Action

- Start a fresh implementation thread with `handoff-task-1.md` to fill `audit.md` for all draft posts.

## 2026-06-28 Task 1 Audit Completed

- Filled `audit.md` with one row for each of the eight draft posts, including current title, decision, target slug, overlap notes, source anchors, stale-claim checks, and frontmatter/navigation impact.
- Recommended `make-the-agent-prove-it` as the next single article candidate, using the Simon Willison draft as source material only after it is reframed beyond the matching resource summary.
- Roadmap from the audit:
  - Refresh `coding-with-agents-2025` as `agentic-coding-2026`.
  - Merge `agent-workflows-that-stick` and `agent-planning-workflow` into `small-threads-durable-state` with current `.agents/work/` v0.3 guidance.
  - Refresh `amp-power-patterns` only as an optional Amp case study after close-to-publish product verification.
  - Keep `workshop-hands-on-agents` private unless an event revives it.
- Files changed: `audit.md`, `progress.md` only.
- Open questions for the next task: whether the proof article or the 2026 field guide should publish first after the distinct-thesis gate, and which current public Amp source should be used for product verification before any Amp case study.
- Verification: `git diff --check` passed after the audit and progress updates.

## 2026-06-28 Task 2 Handoff Prompt

- User accepted the proposed path from the audit, including `make-the-agent-prove-it` as the next single article candidate.
- Added `handoff-task-2.md` for a fresh planning thread to define the refreshed public article architecture before editing any post.
- Updated `index.md` Next Action to point at Task 2 and marked Task 1 complete in `plan.md`.

## 2026-06-28 Task 2 Architecture Completed

- Added the refreshed public article architecture to `research.md` with the accepted order:
  1. `durable-context-coding-agents` as the published anchor.
  2. `make-the-agent-prove-it` as the next single article candidate.
  3. `agentic-coding-2026` and `small-threads-durable-state` as follow-up articles.
  4. `amp-power-patterns-factory-era` as an optional/deferred Amp case study after product verification.
- Recorded article boundaries, non-overlap statements, required source anchors with transcript timestamp ranges, frontmatter/navigation expectations for later publish tasks, and final draft disposition.
- Files changed: `research.md`, `progress.md`, `index.md`, and `plan.md` only.
- Open question: which current public Amp product source should be used for close-to-publish verification before any Amp case study.

## Updated Next Action

- Prepare `make-the-agent-prove-it` as the next publish candidate: rewrite the Simon draft into a distinct proof-stack article, compare it against the matching resource summary, anchor claims to transcripts, then make any frontmatter/navigation changes only in that later publish task.

## 2026-06-28 Task 3 Proof-Stack Article Published

- Rewrote the Simon Willison draft into `make-the-agent-prove-it`, a distinct proof-stack guide rather than a second talk recap.
- Published decision: `draft: false`, `unlisted: false`, and renamed the post route to `/posts/make-the-agent-prove-it`.
- Updated the homepage to link only to production-built public routes: the durable-context article, the new proof-stack article, the durable-context slide draft, and the resource hub.
- Files changed:
  - `src/content/posts/make-the-agent-prove-it.md`
  - `src/content/posts/simon-willison-engineering-practices-coding-agents.md` removed as the old source slug
  - `src/pages/index.astro`
  - `.agents/work/docs/agentic-coding-article-refresh/index.md`
  - `.agents/work/docs/agentic-coding-article-refresh/plan.md`
  - `.agents/work/docs/agentic-coding-article-refresh/progress.md`
- Source anchors used:
  - Simon transcript `[00:04:41]-[00:18:35]` for red-green TDD, manual checks, conformance, sandboxing, and mock data.
  - Pi transcript `[00:29:43]-[00:42:55]` for senior review of unnecessary complexity and deterministic checks.
  - Friction transcript `[00:14:01]-[00:17:55]` for routing high-risk decisions back to humans.
  - Durable-context Evidence section as the internal link/non-overlap check.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed and generated `/posts/make-the-agent-prove-it/index.html` plus its slide route.
  - `git diff --check` passed.
- Confirmed no unrelated draft articles changed. The new article has a proof-stack thesis, names its synthesis beyond the Simon resource summary, and avoids stale model/product/permissive-mode claims.

## Updated Next Action

- Run Task 4: refresh or merge the workflow/planning drafts into a focused `small-threads-durable-state` practice article using current `.agents/work/` guidance.

## 2026-06-28 Task 4 Small-Thread Practice Article Published

- Rewrote and published the workflow/planning material as `small-threads-durable-state`, a focused practice article for separating wide research/critique from narrow implementation and preserving task state in `.agents/work/`, handoff prompts, progress logs, and verification records.
- Publish decision: `draft: false`, `unlisted: false`; production now builds `/posts/small-threads-durable-state` and its slide route.
- Merged source draft decisions:
  - `agent-workflows-that-stick.md`: carried over short threads, handoffs, staged diffs, feedback loops, and test-first proof habits.
  - `agent-planning-workflow.md`: carried over plan-before-coding, critique before implementation, success criteria, progress updates, and when to skip planning.
  - Removed the old source draft files after merging so stale `.agents/context/`, `.agents/plans/`, fixed token-threshold, and draft-only practice-path guidance is not preserved as local article routes.
- Updated homepage navigation to link to the new production route alongside the durable-context article, proof-stack article, slide draft, and resource hub.
- Files changed:
  - `src/content/posts/small-threads-durable-state.md`
  - `src/content/posts/agent-workflows-that-stick.md` removed after merge
  - `src/content/posts/agent-planning-workflow.md` removed after merge
  - `src/pages/index.astro`
  - `.agents/work/docs/agentic-coding-article-refresh/index.md`
  - `.agents/work/docs/agentic-coding-article-refresh/plan.md`
  - `.agents/work/docs/agentic-coding-article-refresh/progress.md`
- Source anchors used:
  - Build Crew episode 7 transcript `[00:13:06]-[00:24:12]` for small directed threads, handoffs, and the research-to-implementation funnel.
  - Maggie Appleton transcript `[00:03:35]-[00:06:49]` for alignment arriving too late when planning stays private until PR review.
  - Simon Willison transcript `[00:04:41]-[00:07:33]` for test-first work plus manual real-system checks.
  - Pi/OpenClaw transcript `[01:12:03]-[01:30:17]` for context control, human understanding, and module/API boundaries.
  - Root `AGENTS.md`, `.agents/work/AGENTS.md`, and the `agent-work` skill for current dot-agents v0.3 work-item conventions.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed and generated `/posts/small-threads-durable-state/index.html` plus `/posts/small-threads-durable-state/slides/index.html`.
  - `npm run lint:fix` passed with no fixes applied.
  - `git diff --check` passed after the work-item update.
  - Reviewed `dist/posts` and confirmed production routes are limited to `durable-context-coding-agents`, `make-the-agent-prove-it`, `small-threads-durable-state`, `/posts/index.html`, and the generated slide routes.
- Confirmed the article is distinct from `durable-context-coding-agents` and `make-the-agent-prove-it`: it links to those articles for durable-memory and proof-stack depth, while owning the small-thread/work-item operating procedure.

## Updated Next Action

- Run Task 5: decide whether a first-win tutorial is still needed, without reviving stale Amp setup or draft-only practice-path links.

## 2026-06-28 Task 5 First-Win Tutorial Decision

- Decision: do not publish or refresh `amp-first-win-15-minutes.md` as a near-term standalone public article. Keep the draft private/deferred and merge only its useful “pick one small verifiable task, define success, run checks, review the diff, stop at evidence” pattern into the future `agentic-coding-2026` field guide.
- Deferred option: revive the tutorial later only as an unlisted workshop/tutorial handout if a concrete beginner-handout need appears. That revival must verify current Amp setup, install flow, pricing, UI/editor assumptions, commands, and product terminology close to publication.
- Draft content: left `src/content/posts/amp-first-win-15-minutes.md` untouched and `draft: true`; no stale setup claims or draft-only practice-path links were made public. `workshop-hands-on-agents.md` remains private supporting context only.
- Files changed: `plan.md`, `progress.md`, and `index.md` only.
- Source anchors and product docs consulted: read the first-win draft, workshop handout draft, old 2025 field-guide draft, `what-is-an-agent`, `amp-power-patterns`, and the three current public non-overlap anchors (`durable-context-coding-agents`, `make-the-agent-prove-it`, `small-threads-durable-state`). No current Amp product docs were consulted because the decision does not publish or keep a standalone Amp tutorial; product verification remains required before any future Amp tutorial or case study.
- Plan update: marked Task 5 complete and added an explicit Task 6 for the missing `agentic-coding-2026` field-guide rewrite; renumbered the Amp case study and navigation follow-ups.
- Verification: `git diff --check` passed. Reviewed the source/navigation diff scope; no source/frontmatter/navigation files changed, so `npm run check` and `npm run build` were not required for this planning-only update.

## Updated Next Action

- Run Task 6: rewrite the broad field guide as `agentic-coding-2026`, merging the agent-loop definition and one-small-verified-task pattern without reviving stale Amp setup claims or draft-only practice-path links.

## 2026-06-28 Oracle Review And Task 6 Handoff

- Consulted Oracle on the completed work-item state after Task 5 and the remaining Task 6 next step.
- Addressed high-confidence feedback before implementation:
  - Updated stale `index.md`/`research.md` wording that still implied only the durable-context article was public.
  - Tightened Task 6 around rename/replace behavior, old route absence, source anchors, non-overlap boundaries, frontmatter/navigation rules, verification, route checks, draft-link checks, and stop conditions.
  - Added current-status notes to `research.md` and `audit.md` so older roadmap sections are clearly historical after Tasks 3-5.
  - Clarified that the open Amp product-source question does not block Task 6 if Amp product claims are avoided or kept illustrative.
- Asked Oracle for a paste-ready Task 6 implementation prompt and saved it as `handoff-task-6.md`.
- Files changed: `index.md`, `plan.md`, `research.md`, `audit.md`, `progress.md`, and `handoff-task-6.md`.
- Verification: `git diff --check` passed after the work-item updates.

## Updated Next Action

- Start a fresh implementation thread with `handoff-task-6.md` to execute Task 6.

## 2026-06-28 Task 6 Field Guide Published

- Publish decision: published and listed `agentic-coding-2026` as the source-backed series map. It is not an Amp setup/tutorial/product guide and avoids unverified Amp setup, pricing, UI/sidebar, shortcut, mode, model, token-threshold, and tool-availability claims.
- Files changed:
  - Renamed/replaced `src/content/posts/coding-with-agents-2025.md` with `src/content/posts/agentic-coding-2026.md`.
  - Updated `src/pages/index.astro` so the homepage primary CTA, card grid, and “What is public now” list point to the new public route and only production-built routes.
  - Updated this work item: `index.md`, `plan.md`, and `progress.md`.
- Source anchors checked and used:
  - Maggie Appleton summary/transcript: `src/content/summaries/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md` and `src/content/transcripts/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md` [00:01:53]-[00:06:49] for cheap implementation, late alignment, and coordination debt.
  - Simon Willison summary/transcript: `src/content/summaries/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md` and matching transcript [00:04:41]-[00:18:35] for red-green tests, manual checks, conformance, sandboxing, and mock data.
  - Friction summary/transcript: `src/content/summaries/coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro.md` and matching transcript [00:02:55]-[00:17:55] for pressure, review overload, agent-generated entropy, codebase infrastructure, checks, and human decision routing.
  - Pi/OpenClaw summary/transcript: `src/content/summaries/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md` and matching transcript [00:06:45]-[00:11:14], [00:29:08]-[00:42:55], [01:12:03]-[01:30:17] for risk-based delegation, complexity control, deterministic checks, context control, and module/API boundaries.
  - Build Crew episode 7 summary/transcript: `src/content/summaries/coding-with-agents/build-crew-episode-7.md` and matching transcript [00:13:06]-[00:24:12] for small directed threads, research reports, critique, planning, and handoffs.
  - Raising an Agent episode 9 summary/transcript: `src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md` and matching transcript [00:10:18]-[00:17:24], [00:25:29]-[00:40:38] for agent-native codebases, feedback loops, longer leashes, and factory workflows.
  - Raising an Agent episode 10 summary/transcript: `src/content/summaries/coding-with-agents/raising-an-agent-episode-10.md` and matching transcript [00:00:55]-[00:10:17] for longer-running, well-scoped agent work.
  - Harness summary/transcript: `src/content/summaries/coding-with-agents/llms-are-killing-agent-harness.md` and matching transcript [00:22:27]-[00:49:24], including [00:41:36]-[00:43:42] for the agent-loop definition and many-agent coordination problem.
  - Current production depth posts: `src/content/posts/durable-context-coding-agents.md`, `src/content/posts/make-the-agent-prove-it.md`, and `src/content/posts/small-threads-durable-state.md` for non-overlap and reading-path links.
- Merged source-draft material:
  - From `what-is-an-agent.md`: only the concise “LLM calling tools in a loop toward a goal” definition.
  - From `amp-first-win-15-minutes.md`: only the “one small verified task” pattern: define done, pick proof, let the agent loop, review the diff, stop at evidence.
- Frontmatter/order/navigation decision:
  - `title: 'Agentic Coding in 2026: A Practical Field Guide'`
  - `pubDate: 2026-06-28`, `draft: false`, `unlisted: false`, `order: 6`.
  - Chose `order: 6` so `/posts` lists the series map before the same-day proof-stack (`order: 8`) and small-thread (`order: 9`) articles; the durable-context anchor remains listed after them because it has an earlier publication date.
  - Homepage now uses the field guide as the primary CTA and first card; the “What is public now” list now names the four public articles, the existing durable-context slide draft, and the resource hub.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed.
  - `npm run lint:fix` passed with no fixes applied.
  - `git diff --check` passed after site and work-item updates.
  - Route checks passed: `dist/posts/agentic-coding-2026/index.html` exists, `dist/posts/agentic-coding-2026/slides/index.html` exists, and `dist/posts/coding-with-agents-2025` is absent.
  - `find dist/posts -maxdepth 3 -type f | sort` shows only `agentic-coding-2026`, `durable-context-coding-agents`, `make-the-agent-prove-it`, `small-threads-durable-state`, their slide routes, and `/posts/index.html`.
  - Generated post HTML includes the article title, production depth links, resource link, slide link, and visible `Sources used` section.
  - Built homepage links only to production routes and the resource hub.
  - Draft-link scan command `rg '/posts/(coding-with-agents-2025|amp-first-win-15-minutes|what-is-an-agent|agent-workflows-that-stick|agent-planning-workflow|amp-power-patterns)' src dist` returned matches only inside intentionally draft source files (`what-is-an-agent.md`, `amp-first-win-15-minutes.md`, `amp-power-patterns.md`, `workshop-hands-on-agents.md`). It returned no matches in `dist`, `src/content/posts/agentic-coding-2026.md`, or `src/pages/index.astro`.
- Skipped checks: no separate product-doc verification was run because the published article removes Amp product setup/pricing/UI/mode/tool claims instead of asserting them.

## Updated Next Action

- Decide whether to start Task 7. If yes, gather current public Amp product sources first, then rework `amp-power-patterns.md` only as a broader tool case study with verified product details. If not, pause with the four-article public series complete and leave the remaining Amp tutorial/workshop drafts private.

## 2026-06-28 Task 7 Amp Official Source Prep

- Prepared the requested local context for the next optional Amp case-study task. Added `research/amp-official-sources-2026.md` as a focused source bundle for reworking `amp-power-patterns.md` later.
- Sources read and recorded:
  - Current canonical docs: Amp Manual, Manual plugins section, Plugin API reference, Models page, Chronicle index.
  - Recent product/news sources: Amp Rebuilt, Agents Everywhere, Custom Agents, Diffs, Rush 2.0, Faster Deep & Rush, Opus 4.8, A Faster Librarian, End of Public Threads, npm Package Changes, Plugins Everywhere, Liberating Code Review, Agentic Review, Agent Skills, Efficient MCP Tool Loading, Slashing Custom Commands, Handoff/Handoff Please, and The Coding Agent Is Dead.
  - User-named older/context sources: Context Management in Amp and 200k Tokens Is Plenty; both are explicitly archived and recorded as durable-principle-only sources, not current Handoff/token-threshold guidance.
  - Additional recent workflow notes: Feedback Loopable, Mainframe Magic, and How to Pair With an Agent.
- Oracle consulted after the first evidence pass. Incorporated its high-confidence feedback: Oracle is not a mode; include `deep` as the hard-work mode; remove old Rush/model/speed claims; treat Handoff as obsolete product guidance; use archived context pages only for durable principles; record Librarian default-branch limits; and frame plugin/custom-agent APIs as current but high-churn advanced surfaces.
- Source-prep decisions:
  - Canonical Task 7 product source bundle: current Manual, Plugin API, Models page, and a fresh Chronicle/latest-news sweep.
  - Dated Chronicle/news/notes pages can anchor product direction or workflow examples only with date context.
  - The old `amp-power-patterns.md` draft should be rewritten as an Amp factory-era case study, not refreshed as a feature catalog.
  - Remove or reverify Oracle-as-mode, Handoff, fixed token thresholds, old model names, old Rush cost/speed claims, VS Code/editor-sidebar assumptions, old install package names, pricing/free-tier claims, and draft-only practice-path links.
- Work-item updates:
  - `index.md` now points to the Task 7 source-prep bundle and marks the Amp product-source open question answered with a re-check-before-publication caveat.
  - `research.md` now reflects that Task 6 is complete and Task 7 source prep exists.
  - `plan.md` Task 7 now references the prep note.
- Verification: `git diff --check` passed after the work-item updates.
- Skipped checks: `npm run check` and `npm run build` were not run because this was work-item research only; no public content, frontmatter, navigation, or route output changed.

## Updated Next Action

- Start Task 7 only if the Amp case study is still desired. Use `research/amp-official-sources-2026.md`, re-run the Manual/Models/Plugin API/Chronicle sweep close to publication, then rewrite `amp-power-patterns.md` as a broader Amp tool case study with verified current product details and no stale practice-path links.

## 2026-06-28 Oracle Review And Task 7 Handoff

- Consulted Oracle to produce a paste-ready Task 7 implementation handoff prompt.
- Saved the handoff as `handoff-task-7.md`.
- The handoff scopes Task 7 to `amp-power-patterns.md`, requires a fresh current Amp Manual/Models/Plugin API/Chronicle source sweep close to publication, includes publish/defer decision gates, and calls out stale claims to remove: Oracle-as-mode, Handoff, fixed token thresholds, old model names, old speed/cost claims, VS Code/editor-sidebar assumptions, setup/install/pricing/free-tier claims, and draft-only links.
- Updated `index.md` artifacts and Next Action to point future work at `handoff-task-7.md`.
- Files changed: `index.md`, `progress.md`, and `handoff-task-7.md`.
- Verification: `git diff --check` passed after saving the handoff and index update.
- Skipped checks: `npm run check` and `npm run build` were not run because this was a work-item handoff-only update; no public content, frontmatter, navigation, or route output changed.

## Updated Next Action

- Start a fresh implementation thread with `handoff-task-7.md` if the Amp case study is still desired.

## 2026-06-28 Task 7 Amp Case Study Published

- Publish decision: published and listed a broader Amp tool case study as `src/content/posts/amp-factory-era-case-study.md` with title “Amp as a Factory-Era Coding-Agent Case Study.” Chose this slug instead of preserving the old `amp-power-patterns` route because the rewritten article is a source-backed case study, not a stale feature catalog or old “power patterns” guide.
- Source sweep performed immediately before editing and recorded in `research/amp-official-sources-2026.md`. Freshly checked sources:
  - Canonical product bundle: Amp Manual, Plugin API, Models page, and Chronicle.
  - Product/news pages: Amp Rebuilt, Agents Everywhere, Custom Agents, Diffs, Rush 2.0, Faster Deep & Rush, A Faster Librarian, End of Public Threads, npm Package Changes, Plugins Everywhere, Liberating Code Review, and The Coding Agent Is Dead.
  - Workflow notes: Feedback Loopable, Mainframe Magic, and How to Pair With an Agent.
  - Transcript-backed anchors: Amp founder interview `[00:13:37]-[00:18:05]`, `[00:25:47]-[00:33:15]`; Raising an Agent episode 9 `[00:10:18]-[00:17:24]`, `[00:25:29]-[00:40:38]`; Raising an Agent episode 10 `[00:00:55]-[00:27:57]`; Thorsten Ball harness talk `[00:36:43]-[00:49:24]`.
- Fresh source sweep result: no current first-party source contradicted the case-study thesis. Current product facts used in the article are verified as of 2026-06-28; exact model names, install commands, pricing/free-tier claims, keybindings, token thresholds, and setup instructions were omitted.
- Article shape:
  - Amp is the concrete example; reusable lessons are task sizing, uncertainty, delegation contracts, context hygiene, proof loops, review, and orchestration.
  - Current modes are treated as `rush`, `smart`, and `deep`; Oracle is described as a second-opinion tool, not a mode.
  - Public Amp concepts are distinguished from local/internal workflow concepts: Amp Checks use `.agents/checks/`, while this repo’s work items use `.agents/work/` as local durable task state.
  - Non-overlap links point to `agentic-coding-2026`, `durable-context-coding-agents`, `make-the-agent-prove-it`, and `small-threads-durable-state` for depth instead of recreating their frameworks.
- Stale claims removed from public guidance:
  - Oracle-as-mode framing.
  - Mode tree omitting `deep`.
  - Old exact model names.
  - Old Rush speed/cost claims.
  - Fixed 50-100k/thread-quality token thresholds.
  - Handoff as current Amp product guidance.
  - VS Code/sidebar/editor-extension instructions.
  - Setup/install/package/pricing/free-tier claims.
  - Generic “N subagents for N files” advice without independence/conflict/review caveats.
  - Draft-only internal links.
- Navigation/frontmatter:
  - Frontmatter set to `draft: false`, `unlisted: false`, `pubDate: 2026-06-28`, `order: 10`, and current tags.
  - Homepage now links to the Amp case study and describes the public path as five source-backed articles plus one slide draft and the resource hub.
  - `/posts` remains frontmatter-controlled; no `src/pages/posts/index.astro` code change was needed.
- Work-item updates:
  - `index.md` marked the work item completed and added the published Amp case study artifact.
  - `plan.md` marked Tasks 7 and 8 complete.
  - `research.md` updated current status after Task 7 publication.
  - `research/amp-official-sources-2026.md` now includes the fresh publication sweep and publish decision.
  - `audit.md` records that the earlier `amp-power-patterns` audit row was superseded by the published case study.
- Files changed:
  - Added `src/content/posts/amp-factory-era-case-study.md`.
  - Deleted `src/content/posts/amp-power-patterns.md`.
  - Updated `src/pages/index.astro`.
  - Updated work-item artifacts listed above.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed and generated `/posts/amp-factory-era-case-study/index.html` plus `/posts/amp-factory-era-case-study/slides/index.html`.
  - `npm run lint:fix` passed with no fixes applied.
  - `git diff --check` passed.
  - `find dist/posts -maxdepth 3 -type f | sort` shows the five intended public post routes, their slide routes, and `/posts/index.html`.
  - Route checks passed: `dist/posts/amp-factory-era-case-study/index.html` exists, `dist/posts/amp-factory-era-case-study/slides/index.html` exists, `dist/posts/amp-power-patterns` is absent, and `dist/posts/amp-power-patterns-factory-era` is absent.
  - Draft-link scan `rg '/posts/(coding-with-agents-2025|amp-first-win-15-minutes|what-is-an-agent|agent-workflows-that-stick|agent-planning-workflow|amp-power-patterns)' src dist` returned matches only inside intentionally draft source files: `what-is-an-agent.md`, `amp-first-win-15-minutes.md`, and `workshop-hands-on-agents.md`. It returned no matches in `dist`, the new case-study source, or homepage/navigation.
  - Built public-output stale-string scan for old exact model/package/speed/token/draft-route claims returned no matches in `dist/posts/amp-factory-era-case-study/index.html`, `dist/index.html`, or `dist/posts/index.html`.
- Skipped checks: none of the required publication checks were skipped. Setup/pricing/install verification was intentionally not needed because the public article omits setup, pricing, and install instructions.

## Updated Next Action

- No immediate next action. The refreshed public article series is complete. Future work can revive `amp-first-win-15-minutes.md` or `workshop-hands-on-agents.md` only for a concrete tutorial/event need and only after fresh product/setup verification.

## 2026-07-08 Amp Case Study Orbs Refresh

- Trigger: refresh `src/content/posts/amp-factory-era-case-study.md` for the latest Amp Chronicle/news items about running agents in orbs and controlling/starting agents from the web.
- Fresh sources checked:
  - [Chronicle](https://ampcode.com/chronicle), force-refetched 2026-07-08.
  - [Agents, Anywhere](https://ampcode.com/news/agents-anywhere): remote thread creation from ampcode.com onto any opted-in machine/runner that can run Amp.
  - [Agents in Orbs](https://ampcode.com/news/agents-in-orbs): remote orb-backed agents, file browsing/review, terminal access, local sync, and multi-agent remote execution direction.
  - [More Orb Sizes](https://ampcode.com/news/more-orb-sizes) and [Orbs manual](https://ampcode.com/manual/orbs): project-configured orb runtime, pricing/size caveats, projects, secrets/env vars, included tools, and `.agents/setup` / `.agents/resume` lifecycle hooks.
  - [Putting an Agent in an Orb](https://ampcode.com/notes/putting-an-agent-in-an-orb): repo/environment patterns for headless agents, including setup/resume hooks, idempotent dev-server scripts, dev auth, preflight JSON, logs, and screenshots.
  - [Read Bigger Threads](https://ampcode.com/news/read-bigger-threads): long-thread `read_thread` rewrite.
  - [Models](https://ampcode.com/models) and [Plugin API](https://ampcode.com/manual/plugin-api), force-refetched 2026-07-08 for mode/plugin claims that remain in the case study.
- Article changes:
  - Added remote execution as a reusable contract in the intro and description.
  - Updated verification date from 2026-06-28 to 2026-07-08.
  - Expanded the context section to cover orbs, remote runners, long-thread context retrieval, and repo lifecycle hooks.
  - Expanded the proof section with remote inspection/sync and the “Putting an Agent in an Orb” workflow note.
  - Expanded the orchestration section to cover web/mobile/CLI control, orbs, runners, configurable remote runtime, custom agents, plugin hooks, and diff/review UI.
  - Kept exact prices, orb sizes, setup commands, keybindings, and model names out of article prose except source names/dates.
- Local context updates:
  - Updated `research/amp-official-sources-2026.md` with the 2026-07-08 sweep, new source hierarchy, current product facts, stale-claim warnings, and per-resource notes for Agents Anywhere, Agents in Orbs/Orbs manual, Putting an Agent in an Orb, and Read Bigger Threads.
  - Updated `index.md` date/summary/next action to reflect the completed refresh.
- Word counts:
  - `src/content/posts/amp-factory-era-case-study.md`: 1,843 words before, 2,106 words after.
  - `research/amp-official-sources-2026.md`: 5,630 words after update.
- Verification:
  - `npm run check` passed with 0 errors/warnings/hints.
  - `npm run build` passed and generated `/posts/amp-factory-era-case-study/index.html` plus its slides route.
  - `git diff --check` passed.
  - `npm run lint:fix` was attempted first but failed on pre-existing Biome issues under `.agents/references/dot-agents/site/` (`useButtonType`, unused `copyCommand`, and descending specificity warnings). No unrelated source changes remain from that attempt.
  - Scoped `npx biome check --write src/content/posts/amp-factory-era-case-study.md .agents/work/docs/agentic-coding-article-refresh/research/amp-official-sources-2026.md` processed no files because Markdown paths are ignored by the Biome config.

## Updated Next Action

- No immediate next action. Future Amp article updates should re-run the Manual/Orbs/Models/Plugin API/Chronicle source sweep before publishing exact product claims.
