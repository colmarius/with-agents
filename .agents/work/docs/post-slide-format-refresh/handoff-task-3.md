# Handoff: Task 3 authoring/check reliability

```text
You are continuing the work item at:

.agents/work/docs/post-slide-format-refresh/

Implement Task 3 only.

Goal:
Add authoring/check reliability for the post/slide hybrid convention, without expanding into post migration or route work.

Current state:
- Task 1 is implemented and committed as `d67d952 Implement post slide notes extractor`.
- The slide route now preserves legacy whole-section slides as fallback, recognizes first-blockquote slide messages, extracts contiguous immediate visual blocks, excludes exact `## Sources` / `## Sources used` appendices from normal slide navigation/counts, supports notes mode, print, no-JS fallback, and safer keyboard controls.
- Task 2 is implemented and committed as `d59ba33 Migrate pilot post slide format`.
- The pilot article `src/content/posts/agentic-coding-2026.md` now has 7 normal blockquote-led slides with immediate Markdown-native visuals and `## Sources used` retained as a source appendix outside normal slide navigation.
- The next task in `.agents/work/docs/post-slide-format-refresh/plan.md` is Task 3: "Add authoring/check reliability."

Read first:
1. AGENTS.md
2. .agents/work/AGENTS.md
3. .agents/work/docs/post-slide-format-refresh/index.md
4. .agents/work/docs/post-slide-format-refresh/plan.md
5. .agents/work/docs/post-slide-format-refresh/progress.md
6. .agents/work/docs/post-slide-format-refresh/research.md only if the plan/progress leaves ambiguity
7. .agents/skills/article-writing/SKILL.md
8. src/content/posts/agentic-coding-2026.md as the migrated reference post
9. src/pages/posts/[slug]/slides.astro to mirror the actual extractor rules if you consider a checker
10. package.json if you add an npm command

Implement only this slice:
- Update `.agents/skills/article-writing/SKILL.md` only as needed to make the authoring convention clear and actionable.
- Add a short always-visible convention to root `AGENTS.md`, now that the model is implemented.
  - Keep it brief; do not duplicate the full skill.
  - It should remind agents that public posts under `src/content/posts/` double as generated slides: normal `##` sections should usually start with a concise blockquote slide message, optional immediate visuals need accessible text/alt/captions, and `## Sources` / `## Sources used` are appendices rather than normal slides.
- Decide whether a checker is worth adding. The checker is optional. Do not add one by default.

Checker decision gate:
- Before writing checker code, inspect the migrated pilot and the route extractor rules.
- Decide explicitly between:
  - Guidance-only path: update `AGENTS.md` and the article-writing skill, record why a checker would be too noisy or premature right now.
  - Focused checker path: add a small reliable checker plus a focused npm command.
- Record the decision and rationale in `.agents/work/docs/post-slide-format-refresh/progress.md`.
- Important: only one pilot post is migrated. Do not create a repo-wide default command that fails all unmigrated legacy posts or blocks normal content editing with expected Task 4 work. If you add a checker, make it usable for explicitly selected migrated/target posts, or otherwise design it so it does not noisily fail on known-unmigrated posts.

If you add a checker:
- Keep it small and dependency-light. Prefer a simple script under `.agents/scripts/` unless an existing project pattern points elsewhere.
- Do not change the slide route unless you find a tiny bug that directly blocks reliable checker authoring. If that happens, stop and report before broadening scope.
- The checker must mirror the route's actual authoring contract closely enough to be useful:
  - normal rendered `##` sections should have a first meaningful blockquote slide message;
  - `## Sources` and `## Sources used` are appendices, matched case-insensitively after whitespace normalization;
  - likely source appendix headings that would accidentally become normal slides should be flagged;
  - slide-message blockquotes that are too long should be flagged using a documented threshold;
  - Markdown images with missing/blank alt text should be flagged;
  - avoid false positives inside fenced code blocks and frontmatter.
- Document checker behavior and limitations in the skill or adjacent script comments/help text.
- Wire it into `package.json` only as a focused command if it is reliable enough.
- Do not silently fold it into `npm run check`, `npm run build`, or lint.
- If the checker cannot meet the above without noisy false positives, route/parser/schema changes, or broad content migration, do not add it. Choose the guidance-only path and record why.

Scope limits:
- Do not migrate any more posts. Task 4 owns remaining post migrations.
- Do not edit `src/content/posts/*.md` except for a tiny checker fixture/test input only if absolutely necessary; prefer no post edits.
- Do not change slide route behavior unless a tiny confirmed bug blocks checker authoring; stop first if route changes seem necessary.
- Do not add MDX, a deck framework, custom content schema, custom fenced directive grammar, or split article/deck sources.
- Do not add static visual assets.
- Do not modify resource summaries, transcripts, data manifests, unrelated pages/routes, site-wide styles, or deployment config.
- Do not start Task 4 or Task 5.

Work-item updates:
- Append a Task 3 entry to `.agents/work/docs/post-slide-format-refresh/progress.md` with:
  - checker-vs-guidance decision and rationale;
  - files changed;
  - verification commands and results;
  - any limitations or follow-up for Task 4.
- Update `.agents/work/docs/post-slide-format-refresh/index.md`:
  - keep status current;
  - update summary/next action if Task 3 is completed;
  - next action should become Task 4 only if Task 3 acceptance is met.
- Check off Task 3 in `.agents/work/docs/post-slide-format-refresh/plan.md` only if all Task 3 acceptance criteria are satisfied.
- Keep `handoff-task-3.md` linked from `index.md` and the plan handoff section.

Acceptance for Task 3:
- Root `AGENTS.md` has a short always-visible post/slide convention now that the model is implemented.
- `.agents/skills/article-writing/SKILL.md` remains the detailed workflow/checklist source.
- If a checker is added, it flags:
  - missing first blockquotes;
  - overlong slide messages;
  - missing image alt text;
  - accidental `Sources used` / source appendix slide inclusion.
- If a checker is added, its behavior is documented and wired into a focused npm command only if reliable enough not to block normal content editing with noise.
- `npm run check` and `npm run build` pass after code/content changes.

Verification:
- Start with `git status --short --branch`.
- Before staging, run `git diff --check`.
- If you changed `.agents/skills/article-writing/SKILL.md`, `AGENTS.md`, `package.json`, checker scripts, or any code/content file, run:
  - `npm run check`
  - `npm run build`
- If you add a checker command, run it against the intended target(s), including the pilot post, and include the exact command/result in progress and final response.
- Run `npm run lint:fix` before committing if formatting may need cleanup.
- Do not commit generated directories such as `node_modules/`, `dist/`, or `.astro/`.

Stop conditions:
- Stop if a reliable checker requires route/parser/schema changes, broad post migration, or new framework-level dependencies.
- Stop if the checker would fail known-unmigrated posts by default or produce noisy false positives on normal editing.
- Stop before changing slide route behavior beyond a tiny confirmed bug that directly blocks checker authoring.
- Stop before editing additional posts or starting Task 4.
- Stop if `npm run check` or `npm run build` fails for unrelated reasons that cannot be safely fixed inside Task 3.

Git workflow:
- Run `git status --short --branch` before staging.
- Keep the diff focused on Task 3.
- Commit after the Task 3 logical slice is complete with a clear message if required verification passes.

Expected final response:
- State whether you chose guidance-only or added a checker, with the rationale.
- Summarize changes to `AGENTS.md`, `.agents/skills/article-writing/SKILL.md`, and any checker/package files.
- List files changed.
- Report verification commands and results.
- Mention work-item updates made.
- Provide the commit hash if committed.
- State the next action, which should be Task 4 only if Task 3 is complete.
```
