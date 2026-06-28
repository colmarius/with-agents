# Task 7 handoff: Amp case study

Continue work item `.agents/work/docs/agentic-coding-article-refresh/`.

Task: execute `plan.md` **Task 7: Rework Amp-specific material as a broader tool case study**.

Task 6 is complete and committed. The current public series is:

- `src/content/posts/agentic-coding-2026.md`
- `src/content/posts/durable-context-coding-agents.md`
- `src/content/posts/make-the-agent-prove-it.md`
- `src/content/posts/small-threads-durable-state.md`

Your job is to rework `src/content/posts/amp-power-patterns.md` **only if** it can become a current, source-backed, publish-ready broader Amp tool case study. It must not be an Amp setup guide, stale feature catalog, old mode guide, or draft-practice-path article.

## Read first

Before editing, read these files in this order:

1. `.agents/work/docs/agentic-coding-article-refresh/index.md`
2. `.agents/work/docs/agentic-coding-article-refresh/plan.md`
3. `.agents/work/docs/agentic-coding-article-refresh/research.md`
4. `.agents/work/docs/agentic-coding-article-refresh/audit.md`
5. `.agents/work/docs/agentic-coding-article-refresh/progress.md`
6. `.agents/work/docs/agentic-coding-article-refresh/research/amp-official-sources-2026.md`
7. Current public non-overlap anchors:
   - `src/content/posts/agentic-coding-2026.md`
   - `src/content/posts/durable-context-coding-agents.md`
   - `src/content/posts/make-the-agent-prove-it.md`
   - `src/content/posts/small-threads-durable-state.md`
8. Source draft:
   - `src/content/posts/amp-power-patterns.md`

Start with:

```bash
git status --short --branch
```

Do not edit unrelated posts or routes.

## Required fresh source sweep

Before deciding whether to publish, re-run a fresh current Amp source sweep close to publication. Use official/current first-party sources as the source of truth:

Canonical product bundle:

- Amp Manual: `https://ampcode.com/manual`
- Plugin API: `https://ampcode.com/manual/plugin-api`
- Models page: `https://ampcode.com/models`
- Chronicle/latest news: `https://ampcode.com/chronicle`

Also re-check recent/current Chronicle or news pages relevant to any claim you keep, especially:

- Amp Rebuilt / rebuilt Amp direction
- Agents Everywhere
- Custom Agents
- Diffs
- Rush 2.0
- Faster Deep & Rush
- current model announcements
- Librarian updates
- End of Public Threads
- npm Package Changes
- Plugins Everywhere
- Liberating Code Review / review/checks
- Feedback Loopable
- Mainframe Magic
- How to Pair With an Agent

Use `.agents/work/docs/agentic-coding-article-refresh/research/amp-official-sources-2026.md` as the prep bundle, but do not treat it as enough by itself. Update it if current docs/news changed or if you rely on new official sources.

## Publish decision gate

After the source sweep, choose one path:

### Path A — publish-ready rewrite

Only take this path if the article can become a high-signal case study with current product details and source anchors.

Recommended frame:

- Working title: **Amp Power Patterns in the Factory Era** or **Amp as a Factory-Era Coding-Agent Case Study**
- Thesis: Amp is the concrete example; the reusable lessons are task sizing, uncertainty, delegation contracts, context hygiene, proof loops, review, and orchestration.
- Reader job: help Amp users translate the broader agentic-coding series into a current Amp workflow without making the whole site Amp-specific.

Suggested structure:

1. Tools change; patterns persist.
2. Match mode/tool to uncertainty:
   - `rush` for bounded known-done tasks
   - `smart` for general strong work
   - `deep` for hard/complex work
   - Oracle as a second-opinion tool/subagent, not a mode
3. Delegate with contracts:
   - subagents only for independent work
   - Oracle for critique/planning/review/debugging
   - Librarian for external/default-branch code research
   - review/check agents where current docs support them
4. Context is product plus repo state:
   - auto-compaction, thread references, `AGENTS.md`, skills, plugins/MCP where current
   - link to `small-threads-durable-state` / `durable-context-coding-agents` instead of duplicating them
5. Make the factory prove its work:
   - Amp-specific proof/review examples such as Diffs, review/checks, feedback-loopable workflows
   - link to `make-the-agent-prove-it` for proof-stack mechanics
6. Orchestration is the frontier:
   - web/mobile/CLI active-thread surfaces, custom agents, Plugin API
   - caveat advanced/high-churn APIs
7. What not to copy forward:
   - explicitly avoid stale old-draft claims

If publishing, prefer renaming/replacing the old draft route as something like:

```text
src/content/posts/amp-power-patterns-factory-era.md
```

Do not publish the stale old title/slug unless you record a clear reason.

### Path B — do not publish

Take this path if current product verification is inconclusive, the article would become a setup guide/feature catalog, or the rewrite cannot add a distinct thesis beyond existing public posts and resource summaries.

If you do not publish:

- Leave `src/content/posts/amp-power-patterns.md` as `draft: true`.
- You may lightly update the draft frontmatter/body only to prevent future confusion, but do not make stale claims public.
- Update work-item artifacts with:
  - source sweep performed
  - publish decision
  - blocker/reason
  - next action
- Run `git diff --check`.
- Do not change homepage navigation.

## Claims to remove or avoid unless freshly verified

Do not carry these forward from the old draft:

- Oracle-as-mode framing.
- Any mode decision tree that omits `deep`.
- Handoff as current Amp product guidance.
- Fixed token thresholds such as “start new threads around 50–100k” or “quality degrades beyond 100k.”
- Old model names such as Claude Haiku 4.5 for Rush, Claude Sonnet 4.5 for Smart, or GPT-5 for Oracle.
- Old speed/cost claims such as “Rush is 67% cheaper, 50% faster.”
- VS Code/sidebar/editor-extension assumptions.
- UI keybindings or install instructions unless verified immediately before publication.
- Install/package claims using `@sourcegraph/amp`.
- Pricing/free-tier claims.
- Generic “use N subagents for N files” advice without independence/conflict/review caveats.
- Draft-only internal links:
  - `/posts/amp-first-win-15-minutes`
  - `/posts/what-is-an-agent`
  - `/posts/agent-workflows-that-stick`
  - `/posts/agent-planning-workflow`
  - `/posts/amp-power-patterns`
  - `/posts/coding-with-agents-2025`

Prefer role-based descriptions over model names. If exact model names survive, mark them as verified as of the current publication date and expect churn.

## Source-anchor requirements

Every substantive claim must be anchored to one of:

- current official Amp docs/news URL, with “verified as of YYYY-MM-DD” where appropriate
- saved transcript timestamp
- existing public post in this repo
- clearly marked author synthesis/opinion

Required source families if publishing:

- Current Amp Manual / Plugin API / Models / Chronicle sweep for current product facts.
- `research/amp-official-sources-2026.md` for stale-claim inventory and source hierarchy.
- Amp/Raising/agent-factory transcript-backed sources from the work item where relevant:
  - Amp founder summary/transcript `[00:13:37]-[00:18:05]`, `[00:25:47]-[00:33:15]`
  - Raising an Agent episode 9 `[00:10:18]-[00:17:24]`, `[00:25:29]-[00:40:38]`
  - Raising an Agent episode 10 `[00:00:55]-[00:27:57]`
  - Thorsten Ball harness talk `[00:36:43]-[00:49:24]`
- Public non-overlap posts:
  - `agentic-coding-2026` owns broad field-guide framing
  - `durable-context-coding-agents` owns repo-local durable memory
  - `make-the-agent-prove-it` owns proof-stack mechanics
  - `small-threads-durable-state` owns small-thread/work-item/handoff operating procedure

The article may summarize these ideas briefly, but it should link to the public posts for depth instead of reimplementing their frameworks.

## Frontmatter and navigation rules

If publishing:

- Set frontmatter deliberately:
  - `title`
  - `description`
  - `pubDate`
  - `tags`
  - `draft: false`
  - `unlisted: false` if it should appear in `/posts`; `unlisted: true` only if intentionally a niche handout
  - intentional `order` relative to the current public series
- Do not publish with stale `difficulty` / `readingTime` fields unless they are still part of the project’s current post convention.
- If the slug changes, remove or keep the old draft file only with a recorded reason. Do not leave two public versions.
- Update `src/pages/index.astro` only if this article should be linked from the homepage.
- `/posts` listing should be controlled by frontmatter; verify the public inventory.
- Internal links must point only to production routes, the resource hub, or intentional external sources.
- Do not link to draft-only routes.

If not publishing:

- Keep `draft: true`.
- Do not update homepage navigation.
- Record the decision in the work item.

## Acceptance criteria

Task 7 is complete only when all applicable criteria are met:

- A fresh current Amp source sweep was performed and recorded.
- `amp-power-patterns` was either:
  - rewritten/renamed into a current, source-backed Amp factory-era case study, or
  - intentionally left unpublished with the reason recorded.
- Product terminology is current:
  - `deep`, `smart`, and `rush` are treated as modes if current docs still say so.
  - Oracle is not called a mode.
  - Librarian limitations, subagent isolation, thread references, sharing visibility, review/checks, plugins, and custom agents are described only as supported by current sources.
- The article teaches broader agentic-coding patterns using Amp as the example; it does not make the whole series Amp-specific.
- Public Amp concepts are distinguished from local/internal workflow concepts such as `.agents/work/`.
- Stale claims listed above are removed or explicitly reverified from current sources.
- No unverified install, setup, pricing, free-tier, UI/sidebar, keybinding, model, token-threshold, Handoff, or speed/cost claims remain.
- Non-overlap is checked against all four current public posts.
- Source anchors are visible enough for a reviewer to trace the claims.
- Work-item artifacts are updated:
  - `index.md`
  - `plan.md`
  - `research.md` and/or `research/amp-official-sources-2026.md`
  - `audit.md` if the decision/disposition changes
  - `progress.md`
- Verification results and skipped checks are recorded in `progress.md`.

## Stop conditions

Stop and ask for human decision if:

- Current official Amp docs contradict the source-prep bundle in a way that changes the article’s thesis.
- You cannot verify a product claim that the article needs.
- The rewrite wants to become an Amp setup/install/pricing guide.
- The article mostly duplicates `agentic-coding-2026`, `make-the-agent-prove-it`, `small-threads-durable-state`, `durable-context-coding-agents`, or a resource summary.
- Publishing would require draft-only internal links.
- Publishing would leave both the old stale `amp-power-patterns` route and the new case-study route public.
- You are unsure whether the article should be listed or unlisted.
- `npm run check`, `npm run build`, `npm run lint:fix`, `git diff --check`, route inspection, or draft-link inspection fails.

Prefer removing or deferring a claim over publishing unverified product detail.

## Verification commands

For any public content/frontmatter/navigation change, run:

```bash
npm run check
npm run build
npm run lint:fix
git diff --check
```

Then inspect route output:

```bash
find dist/posts -maxdepth 3 -type f | sort
```

If publishing a renamed article, confirm expected routes exist and stale routes do not. Adjust slug names below to match your final decision:

```bash
test -f dist/posts/amp-power-patterns-factory-era/index.html
test -f dist/posts/amp-power-patterns-factory-era/slides/index.html
test ! -e dist/posts/amp-power-patterns
```

If you intentionally keep the old slug, record why and adjust the route checks accordingly.

Scan for draft-only links in source and built output:

```bash
rg '/posts/(coding-with-agents-2025|amp-first-win-15-minutes|what-is-an-agent|agent-workflows-that-stick|agent-planning-workflow|amp-power-patterns)' src dist
```

If the article remains draft-only and no public content/navigation changed, minimum verification is:

```bash
git diff --check
```

Record skipped checks and why.

## Commit

Follow the repo workflow. After verification, inspect:

```bash
git status --short --branch
git diff --stat
```

Commit the coherent Task 7 result with a clear message if changes were made.

## Expected final response

End with a concise summary containing:

- Publish decision: published/listed, published/unlisted, or kept draft/deferred.
- Final slug/title if changed.
- What changed.
- Files changed.
- Fresh Amp sources checked, with verification date.
- Major stale claims removed.
- Source anchors used.
- Navigation/frontmatter decision.
- Route and draft-link check results.
- Verification commands run and results.
- Work-item artifact updates.
- Commit hash if committed.
- Known gaps or next action.
