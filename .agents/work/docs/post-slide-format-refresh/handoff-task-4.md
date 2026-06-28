# Handoff: Task 4 remaining post migrations

```text
Continue `.agents/work/docs/post-slide-format-refresh/`.

Implement `plan.md` Task 4 only: migrate the remaining posts one at a time to the post/slide hybrid convention.

Completed context:
- Task 1 slide route: `d67d952`.
- Task 2 pilot post migration: `d59ba33`.
- Task 3 guidance-only authoring docs: `9216cb3`.

Read first:
1. `AGENTS.md`
2. `.agents/work/docs/post-slide-format-refresh/index.md`
3. `.agents/work/docs/post-slide-format-refresh/plan.md`
4. `.agents/work/docs/post-slide-format-refresh/research.md`
5. `.agents/work/docs/post-slide-format-refresh/progress.md`
6. `.agents/skills/article-writing/SKILL.md`
7. Pilot example: `src/content/posts/agentic-coding-2026.md`
8. Target posts:
   - `src/content/posts/durable-context-coding-agents.md`
   - `src/content/posts/make-the-agent-prove-it.md`
   - `src/content/posts/small-threads-durable-state.md`
   - `src/content/posts/amp-factory-era-case-study.md`

Use `research.md` target sketches as direction, not mandatory copy.

Goal:
- Each normal rendered `##` starts with a concise blockquote slide message.
- Optional Markdown-native visuals sit immediately after the blockquote.
- Notes/prose/citations/examples/prompts follow after the slide message and immediate visual.
- Exact `## Sources` / `## Sources used` appendices remain appendices and should not get slide-message blockquotes.
- Article mode remains readable and source-supported; slide mode becomes concise.

Scope:
- Edit only the four target posts and work-item files under `.agents/work/docs/post-slide-format-refresh/`.
- Do not change slide route behavior, checker scripts, package commands, MDX/deck setup, static assets, resource summaries, transcripts, manifests, unrelated pages/posts, or Task 5 beyond setting it as the next action when Task 4 completes.

Per-post workflow:
1. Run `git status --short --branch` before editing.
2. Record baseline H2 list, source appendix presence, and `wc -w` word count.
3. Read the whole post.
4. Add/reposition a concise first blockquote for each normal H2.
5. Move intended slide visuals directly after the blockquote; keep ordinary prose/lists/code after visuals as notes.
6. Add only simple, purposeful Markdown-native visuals where they materially help.
7. Keep citations/source anchors adjacent to supported claims; do not rewrite arguments broadly.
8. Run `git diff --check`, `npm run check`, and `npm run build`.
9. Smoke-check `/posts/<slug>`, `/posts/<slug>/slides`, `/posts/<slug>/slides?notes=1`, print/handout mode, and source appendix behavior where present.
10. Commit one post at a time when clean.
11. Append progress with commit hash, changes, word counts, verification, smoke checks, and gaps.

Order:
1. `durable-context-coding-agents.md`
2. `make-the-agent-prove-it.md`
3. `small-threads-durable-state.md`
4. `amp-factory-era-case-study.md`

Post guidance:
- Durable context: repo as operating memory, durable local truth, control loop, map/procedure/state/evidence/promotion, human judgment, and promoting what helped.
- Proof stack: proof before trust, risk-based evidence, executable proof, real-system checks, conformance, review evidence, blast radius, reviewer comprehension, reusable prompt.
- Small threads: durable state, research vs implementation, work-item container, file roles, responsible handoffs, committable threads, verification state, operating procedure.
- Amp case study: Amp as example, mode choice, delegation contracts, product plus repo context, proof loops, orchestration frontier, and stable contracts.

Stop if a post needs substantive argument/source changes, source re-research, route changes, a checker, MDX/framework/static assets, or if checks fail for unrelated reasons.

At the end of Task 4:
- Mark Task 4 complete in `plan.md`.
- Update `index.md` summary and next action to Task 5.
- Add a final progress entry with verification and residual risks.

Expected final response:
- Posts migrated with commit hashes.
- Work-item updates.
- Notable slide-message/visual changes per post.
- Verification commands/results and smoke-check results.
- Known gaps.
- Current work-item status and next action: Task 5 reassess whether MDX/richer visuals are justified.
```
