# Task 6 handoff: `agentic-coding-2026`

Continue `.agents/work/docs/agentic-coding-article-refresh/`.

Task: execute `plan.md` Task 6 only — rewrite the broad field guide as `agentic-coding-2026`.

## Read first

Read these work-item files before editing:

- `.agents/work/docs/agentic-coding-article-refresh/index.md`
- `.agents/work/docs/agentic-coding-article-refresh/plan.md`
- `.agents/work/docs/agentic-coding-article-refresh/research.md`
- `.agents/work/docs/agentic-coding-article-refresh/audit.md`
- `.agents/work/docs/agentic-coding-article-refresh/progress.md`

Then read the source/public post files that bound this task:

- `src/content/posts/coding-with-agents-2025.md`
- `src/content/posts/what-is-an-agent.md`
- `src/content/posts/amp-first-win-15-minutes.md`
- `src/content/posts/durable-context-coding-agents.md`
- `src/content/posts/make-the-agent-prove-it.md`
- `src/content/posts/small-threads-durable-state.md`
- `src/pages/index.astro`
- `src/pages/posts/index.astro`

Also read the relevant summary/transcript source files named under `research.md` for `agentic-coding-2026`, especially the timestamp ranges listed there. Do not rely on copied-forward claims from old drafts without checking the saved transcripts.

## Goal

Rename/replace `src/content/posts/coding-with-agents-2025.md` as:

```text
src/content/posts/agentic-coding-2026.md
```

Rewrite it into a current, source-backed series map titled along the lines of:

```text
Agentic Coding in 2026: A Practical Field Guide
```

The article should orient readers to the public series and the 2026 agentic-coding landscape:

- cheap implementation
- alignment as the bottleneck
- proof/evidence
- useful friction
- codebase infrastructure
- context hygiene
- small verified tasks
- emerging factory/orchestration workflows

Amp may appear only as one concrete example/tool when useful. Do not make the article an Amp setup guide, Amp product guide, or stale practice path.

Publish it only if it becomes a source-backed series map. If the rewrite cannot meet the source-anchor and non-overlap requirements below, stop before setting `draft: false`, record why in `progress.md`, and leave production navigation unchanged.

## Scope

In scope:

1. Rename/replace the stale field-guide file:
   - Prefer `git mv src/content/posts/coding-with-agents-2025.md src/content/posts/agentic-coding-2026.md`.
   - Rewrite the body substantially; do not preserve stale 2025/Amp/tutorial framing.
2. Merge only:
   - the concise agent-loop definition from `what-is-an-agent.md`
   - the “one small verifiable task” pattern from `amp-first-win-15-minutes.md`
3. Publish `agentic-coding-2026` only if it is source-backed and current.
4. Update homepage navigation if the article is intentionally listed/public.
5. Keep `/posts` behavior coherent with frontmatter order and publish/listed status.
6. Verify production route output and draft-link absence.
7. Update the work item progress log with publish decision, source anchors, files changed, verification results, and next action.

## Non-goals

Do not:

- Publish or refresh `what-is-an-agent.md` as a standalone route.
- Publish or refresh `amp-first-win-15-minutes.md` as a standalone tutorial.
- Revive the old practice path.
- Link to draft-only routes:
  - `/posts/amp-first-win-15-minutes`
  - `/posts/what-is-an-agent`
  - `/posts/agent-workflows-that-stick`
  - `/posts/agent-planning-workflow`
  - `/posts/amp-power-patterns`
  - `/posts/coding-with-agents-2025`
- Add unverified Amp setup, pricing, install, shortcut, UI/sidebar, mode, model, token-threshold, or feature claims.
- Recreate the proof-stack, durable-context, or `.agents/work/` operating-procedure articles inside this field guide.
- Bulk-publish old drafts.
- Edit unrelated routes or resource summaries unless required to fix a broken link introduced by this task.

## Article shape requirements

The new `agentic-coding-2026` article should be a series map, not a deep implementation guide.

Suggested structure:

1. Short intro: agentic coding in 2026 is less about “can the model write code?” and more about managing cheap implementation through alignment, evidence, friction, infrastructure, context, and orchestration.
2. Concise agent-loop definition:
   - “An agent is an LLM calling tools in a loop toward a goal” or equivalent.
   - Keep it short. Do not recreate the whole `what-is-an-agent` post.
3. Cheap implementation shifts the bottleneck:
   - Use Maggie Appleton source anchors.
   - Link to `durable-context-coding-agents` for repo-local memory/alignment depth.
4. Make proof non-optional:
   - Briefly summarize the proof-stack idea.
   - Link to `/posts/make-the-agent-prove-it` for mechanics.
5. Good friction and human judgment:
   - Use Armin/Cristina source anchors.
   - Keep risk routing high level.
6. Codebase as agent infrastructure:
   - Module boundaries, deterministic checks, examples, simple cores, visible flow.
   - Use friction + Pi/OpenClaw source anchors.
7. Context hygiene:
   - Wide research, narrow implementation, durable state, handoffs.
   - Link to `/posts/small-threads-durable-state`.
8. Start with one small verified task:
   - Carry over the useful pattern from `amp-first-win-15-minutes`: pick one small task, define success, run checks, review the diff, stop at evidence.
   - Avoid Amp setup/tutorial details.
9. Factory/orchestration workflows:
   - Introduce emerging longer-running/parallel/factory workflows at a high level.
   - Avoid product-specific Amp claims unless verified; prefer source-backed general framing.
10. Reading path / where to go next:
   - Link only to current production routes and the resource hub.
11. `Sources used` section or equivalent visible source note.

## Non-overlap rules

Enforce these section by section:

- `durable-context-coding-agents` owns repo-local memory, promotion, durable context, and durable-context control loops.
  - In `agentic-coding-2026`, introduce the idea briefly and link to `/posts/durable-context-coding-agents`.
- `make-the-agent-prove-it` owns proof-stack mechanics.
  - In `agentic-coding-2026`, summarize why proof matters and link to `/posts/make-the-agent-prove-it`.
- `small-threads-durable-state` owns small-thread, handoff, and `.agents/work/` operating procedure.
  - In `agentic-coding-2026`, introduce context hygiene and link to `/posts/small-threads-durable-state`.
- Resource summaries own detailed episode/talk recaps.
  - `agentic-coding-2026` should synthesize across sources, not retell a single resource summary.
- Amp-specific case-study material belongs to a later deferred task.
  - Do not turn this into `amp-power-patterns`.

## Source-anchor requirements

Use visible source notes in the article and/or a `Sources used` section.

Every substantive claim should be anchored to one of:

- transcript timestamp ranges checked in saved transcripts
- summary/source file paths
- current production posts
- official docs/current product source if a product claim survives
- clearly marked author synthesis/opinion

Required source themes and anchors from `research.md`:

- Alignment / cheap implementation:
  - `src/content/summaries/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md`
  - `src/content/transcripts/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md`
  - especially `[00:01:53]-[00:06:49]`
- Proof:
  - `src/content/summaries/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md`
  - `src/content/transcripts/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md`
  - especially `[00:04:41]-[00:18:35]`
- Good friction:
  - `src/content/summaries/coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro.md`
  - `src/content/transcripts/coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro.md`
  - especially `[00:02:55]-[00:17:55]`
- Codebase infrastructure:
  - friction files above
  - `src/content/summaries/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md`
  - `src/content/transcripts/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md`
  - especially `[00:06:45]-[00:11:14]`, `[00:29:08]-[00:42:55]`, and `[01:12:03]-[01:30:17]`
- Context hygiene:
  - `src/content/summaries/coding-with-agents/build-crew-episode-7.md`
  - `src/content/transcripts/coding-with-agents/build-crew-episode-7.md`
  - especially `[00:13:06]-[00:24:12]`
- Factory/orchestration:
  - `src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md`
  - `src/content/transcripts/coding-with-agents/raising-an-agent-episode-9.md`
  - especially `[00:10:18]-[00:17:24]` and `[00:25:29]-[00:40:38]`
  - `src/content/summaries/coding-with-agents/raising-an-agent-episode-10.md`
  - `src/content/transcripts/coding-with-agents/raising-an-agent-episode-10.md`
  - especially `[00:00:55]-[00:10:17]`
  - `src/content/summaries/coding-with-agents/llms-are-killing-agent-harness.md`
  - `src/content/transcripts/coding-with-agents/llms-are-killing-agent-harness.md`
  - especially `[00:22:27]-[00:49:24]`
- Agent-loop definition:
  - `what-is-an-agent.md` as source draft material
  - optionally `llms-are-killing-agent-harness` transcript around `[00:41:36]-[00:43:42]`
  - Simon Willison’s public definition link may be retained if useful.
- One-small-verified-task pattern:
  - `amp-first-win-15-minutes.md` as source draft material only
  - support with Simon `[00:04:41]-[00:07:33]`, Build Crew `[00:13:06]-[00:24:12]`, and Raising an Agent episode 9 `[00:10:18]-[00:17:24]` if making source-backed claims about feedback loops.

Do not copy timestamp claims from old drafts. Check the saved transcripts directly before citing them.

## Claims to remove or avoid

Remove/caveat all of these unless verified from current official/product sources during this task:

- productivity multipliers
- fixed token thresholds such as “quality degrades after 100k”
- “Rush/Smart/Oracle” mode pricing, speed, or selection claims
- Amp setup/install commands
- Amp pricing/free-tier claims
- VS Code extension/sidebar/shortcut assumptions
- “Amp takes screenshots” or browser-control claims
- current model names or “best model” claims
- tool availability claims for subagents, Oracle, Librarian, Deep mode, skills, cloud agents, etc.
- `.agents/plans/` or `.agents/context/` as current practice
- draft-only practice-path links

Prefer deleting Amp product detail over verifying it. Product verification is not required for Task 6 if the article avoids product-specific claims.

## Frontmatter rules

For `src/content/posts/agentic-coding-2026.md`, use current frontmatter if publishing:

```yaml
---
title: 'Agentic Coding in 2026: A Practical Field Guide'
description: '<current concise description>'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: <intentional order>
---
```

Order guidance:

- Existing public posts currently use:
  - `durable-context-coding-agents`: `order: 7`
  - `make-the-agent-prove-it`: `order: 8`
  - `small-threads-durable-state`: `order: 9`
- Choose an intentional order relative to those posts and record the decision in `progress.md`.
- `/posts/index.astro` sorts by descending `pubDate`, then ascending `order`, and hides `unlisted` posts from the listing.
- If the article is not publish-ready, keep `draft: true`, do not set a public navigation link, and record why.

Do not leave both a stale public 2025 field-guide file and a new 2026 field-guide file. If you preserve the old file for any reason, it must remain `draft: true`, the old production route must remain absent, and the reason must be recorded in `progress.md`.

## Navigation rules

If `agentic-coding-2026` is published and listed:

- Update `src/pages/index.astro` deliberately.
- Decide whether it becomes the primary CTA, a card, and/or part of the “What is public now” list.
- Keep homepage links only to production-built routes.
- Record the navigation decision in `progress.md`.

If it remains draft or unlisted:

- Do not add homepage links to it.
- Record why it is not listed/published.

`src/pages/posts/index.astro` probably does not need a code change because it derives listed posts from content frontmatter. Only edit it if you find a concrete issue.

## Implementation steps

1. Inspect current status:

   ```bash
   git status --short --branch
   ```

2. Read the work item and source files listed above.

3. Check source transcripts for the required timestamp ranges before drafting source-backed claims.

4. Rename/replace the stale field guide:

   ```bash
   git mv src/content/posts/coding-with-agents-2025.md src/content/posts/agentic-coding-2026.md
   ```

   If `git mv` is not possible for some reason, still ensure the final diff does not leave a stale public `/posts/coding-with-agents-2025` route.

5. Rewrite `agentic-coding-2026.md` into a source-backed series map.

6. Keep `what-is-an-agent.md` and `amp-first-win-15-minutes.md` draft/private. Do not publish them. Only borrow the narrow ideas named above.

7. Update homepage navigation only after the article is publish-ready and `draft: false`.

8. Update `.agents/work/docs/agentic-coding-article-refresh/progress.md` with:
   - dated Task 6 entry
   - publish decision
   - files changed
   - source anchors used
   - frontmatter/navigation decision
   - verification results
   - route-output checks
   - draft-link checks
   - any skipped checks and why
   - updated next action

9. Update `.agents/work/docs/agentic-coding-article-refresh/index.md` Next Action after Task 6:
   - If published successfully, point to the next appropriate task, likely Task 7 or Task 8 depending on what remains.
   - If stopped/unpublished, state the blocker and next action.

10. Mark Task 6 complete in `plan.md` only if acceptance criteria are met. If you stop, leave Task 6 unchecked and record the blocker.

## Verification commands

Run after content/navigation changes:

```bash
npm run check
npm run build
git diff --check
```

Also inspect production route output after `npm run build`.

Suggested route checks:

```bash
test -f dist/posts/agentic-coding-2026/index.html
test -f dist/posts/agentic-coding-2026/slides/index.html
test ! -e dist/posts/coding-with-agents-2025
find dist/posts -maxdepth 3 -type f | sort
```

If the article is intentionally not published, adjust the route checks accordingly:

- `dist/posts/agentic-coding-2026/index.html` should not exist if `draft: true`.
- homepage should not link to it.
- record the unpublished decision in `progress.md`.

Check for stale/draft-only links in source and built output:

```bash
rg '/posts/(coding-with-agents-2025|amp-first-win-15-minutes|what-is-an-agent|agent-workflows-that-stick|agent-planning-workflow|amp-power-patterns)' src dist
```

Expected result: no matches in published source/output, except references inside intentionally draft source files or work-item planning files. If matches appear in `src/content/posts/agentic-coding-2026.md`, `src/pages/index.astro`, or `dist/`, fix them before finishing.

Also inspect the generated post HTML enough to confirm visible article output and source notes exist.

## Acceptance criteria

Task 6 is done only when all are true:

- `src/content/posts/coding-with-agents-2025.md` has been renamed/replaced as `src/content/posts/agentic-coding-2026.md`.
- The old `/posts/coding-with-agents-2025` production route is absent.
- If published, `/posts/agentic-coding-2026/index.html` and `/posts/agentic-coding-2026/slides/index.html` are present after build.
- The article is a source-backed series map, not an Amp setup guide or old practice path.
- The concise agent-loop definition is merged briefly.
- The “one small verified task” pattern is merged briefly.
- The article includes a visible `Sources used` section or equivalent source note.
- Substantive claims are anchored to transcript timestamps, summaries/source paths, current production posts, official docs, or explicit author synthesis/opinion.
- Timestamped claims were checked against saved transcripts.
- Unsupported productivity multipliers, model/product capability claims, pricing claims, tool availability claims, and workflow universals are removed or caveated.
- No stale Amp setup, install, UI/sidebar, shortcut, mode, pricing, token-threshold, `.agents/plans/`, `.agents/context/`, or draft-only practice-path claims are published.
- The article links for depth to:
  - `/posts/durable-context-coding-agents`
  - `/posts/make-the-agent-prove-it`
  - `/posts/small-threads-durable-state`
  - `/resources/coding-with-agents` where useful
- It does not link to draft-only routes listed above.
- Frontmatter is current and intentional:
  - `title`
  - `description`
  - `pubDate`
  - `tags`
  - `draft`
  - `unlisted`
  - `order`
- Homepage navigation is updated deliberately if the article is listed, or intentionally unchanged if not.
- `npm run check`, `npm run build`, and `git diff --check` pass.
- Route-output checks and draft-link checks are recorded in `progress.md`.
- Work-item files reflect the result:
  - Task 6 checked only if complete
  - `index.md` Next Action updated
  - `progress.md` includes full verification notes

## Stop conditions

Stop and report clearly if any of these occur:

- Publishing would leave a stale public `/posts/coding-with-agents-2025` route.
- The final diff would leave duplicate field-guide files without a recorded reason.
- The rewrite needs Amp setup, pricing, install, mode, UI/sidebar, shortcut, model, token-threshold, or feature claims that have not been verified from current official/product sources.
- The article starts duplicating the proof-stack, durable-context, or `.agents/work/` operating-procedure articles instead of summarizing and linking.
- A major claim cannot be traced to a transcript timestamp, summary/source path, official source, existing public post, or clearly marked author synthesis.
- The article would link to draft-only post routes or revive the old practice path.
- The publication decision changes from a listed public article to a draft or unlisted handout; record the reason and update navigation expectations before continuing.
- `npm run check`, `npm run build`, `git diff --check`, route-output inspection, or draft-link inspection fails.

## Expected final response

Return a concise implementation summary with:

- Publish decision: published/listed, draft, or stopped
- Files changed
- Source anchors used
- What was merged from `what-is-an-agent.md` and `amp-first-win-15-minutes.md`
- Frontmatter/order/navigation decision
- Route-output results:
  - `agentic-coding-2026` route present/absent as intended
  - old `coding-with-agents-2025` route absent
  - slide route present if published
- Draft-link check results
- Verification commands and outcomes:
  - `npm run check`
  - `npm run build`
  - `git diff --check`
- Work-item updates made
- Any skipped checks and why
- Next action from the work item
