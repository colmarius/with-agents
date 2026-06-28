# Agentic Coding Article Refresh Plan

Review and refresh the draft article backlog into a smaller, current public series.

## Goals

- Keep production focused on one public article until each draft is intentionally refreshed.
- Make future articles source-backed by the transcript/resource library.
- Reduce overlap among old intro, first-win, workflow, and planning posts.
- Keep the public series as broader agentic-coding guidance; use Amp as one concrete tool/example rather than the whole framing.
- Verify Amp-specific claims before republishing Amp tutorials or power-pattern guides.

## Tasks

- [x] **Task 1: Audit each draft against current sources**
  - Scope: `audit.md`, `src/content/posts/*.md`, `src/content/summaries/**`, `src/content/transcripts/**`
  - Depends on: none
  - Acceptance:
    - `audit.md` is filled with one row per draft article.
    - Each draft has a decision: refresh, merge, retire, publish candidate, or keep private.
    - Each decision names a destination/target slug when content is merged or refreshed.
    - Each decision names the current-source themes that should inform the rewrite.
    - Duplicated sections across drafts are identified so they are not republished multiple times.
    - Transcript-backed draft posts are checked for whether they add a distinct article thesis beyond the corresponding resource summary.
    - Stale or unsupported claims to remove/verify are listed for each relevant draft.
    - Frontmatter/navigation impact is listed for each publish candidate.
  - Notes: Start with the inventory in `research.md`, then verify by reading the relevant draft bodies.

- [x] **Task 2: Define the refreshed public article architecture**
  - Scope: `.agents/work/docs/agentic-coding-article-refresh/research.md`, optional `prd.md` only if audience/positioning needs alignment
  - Depends on: Task 1
  - Acceptance:
    - Proposed article list has titles, one-sentence theses, source anchors, and publish order.
    - The list explains what stays public, what stays draft, and what gets merged or retired.
    - The list keeps public posts few and high-signal rather than mirroring every useful resource summary.
    - The near-term roadmap names one next candidate and at most 2-3 follow-up candidates; optional/deferred drafts are marked clearly.
    - Every public candidate has a non-overlap statement against durable context and relevant resource summaries.
    - Amp is positioned as one concrete tool/example inside broader guidance.
    - The homepage and `/posts` path expectations remain coherent with the publish plan.
  - Notes: Prefer fewer stronger posts over preserving every existing draft.

- [x] **Task 3: Prepare the next proof/evidence publish candidate if warranted**
  - Scope: likely `src/content/posts/simon-willison-engineering-practices-coding-agents.md` or a renamed proof/evidence article
  - Depends on: Task 2
  - Acceptance:
    - The article has a current thesis beyond the resource summary.
    - The article is compared against the matching resource summary before editing.
    - The article states what it adds beyond the summary: synthesis across sources, opinionated framework, practical workflow, or decision guide.
    - Claims are traceable to the transcript/summary.
    - `draft` and `unlisted` frontmatter are set according to the publish decision.
    - `npm run check` and `npm run build` pass.
  - Notes: Simon is a likely first candidate only if it becomes a distinct article such as “Make the Agent Prove It,” not a duplicate of the resource summary.

- [x] **Task 4: Refresh or merge workflow/planning drafts**
  - Scope: `agent-workflows-that-stick.md`, `agent-planning-workflow.md`
  - Depends on: Task 2
  - Acceptance:
    - Legacy `.agents/plans/` guidance is updated to `.agents/work/` v0.3 or removed.
    - Small-thread, handoff, context hygiene, and proof-loop guidance is unified instead of repeated across multiple articles.
    - Merge decisions name the target article and the sections/ideas being carried over.
    - Retired/private drafts remain `draft: true` and have no production links.
  - Notes: This is likely one refreshed practice article, not multiple overlapping posts.

- [x] **Task 5: Decide whether a first-win tutorial is still needed**
  - Scope: `amp-first-win-15-minutes.md`, optionally `workshop-hands-on-agents.md`
  - Depends on: Task 2
  - Acceptance:
    - The plan decides whether a first-win tutorial belongs in the near-term public roadmap or should stay private/deferred.
    - Any kept tutorial reflects current Amp workflow and verified commands.
    - Setup, pricing, install flow, and UI assumptions are either verified close to publish time or removed.
  - Notes: Decision on 2026-06-28: do not keep a near-term standalone public tutorial. Merge only the useful “one small verifiable task” pattern into `agentic-coding-2026`; keep `amp-first-win-15-minutes.md` `draft: true`, private, and deferred. Revive it later only as an unlisted tutorial/handout if a concrete event or beginner handout need appears, and only after close-to-publish verification of current Amp setup, install flow, pricing, UI/editor assumptions, commands, and product terminology. Do not preserve stale setup claims, sidebar/shortcut assumptions, draft-only practice-path links, or unverified feature claims as public recommendations.

- [x] **Task 6: Rewrite the broad field guide as `agentic-coding-2026`**
  - Scope: `coding-with-agents-2025.md`, `what-is-an-agent.md`, `amp-first-win-15-minutes.md`, public anchors, and source summaries/transcripts named in `research.md`
  - Depends on: Tasks 2 and 5
  - Acceptance:
    - `src/content/posts/coding-with-agents-2025.md` is renamed/replaced as `src/content/posts/agentic-coding-2026.md`; do not leave both a stale 2025 field-guide file and a new 2026 field-guide file unless the old file remains `draft: true` and the reason is recorded.
    - The old `/posts/coding-with-agents-2025` route remains absent from production output.
    - The article acts as the series map: cheap implementation, alignment, proof, useful friction, codebase infrastructure, context hygiene, and factory/orchestration workflows.
    - The concise agent-loop definition from `what-is-an-agent` and the “one small verifiable task” pattern from `amp-first-win-15-minutes` are merged only where they serve the field-guide reader job.
    - The published article includes a `Sources used` section or equivalent visible source note.
    - Substantive claims are anchored to transcript timestamps, summary paths, official docs, current production posts, or are clearly framed as author synthesis/opinion.
    - Timestamped claims are checked against the saved transcripts, not copied forward from old drafts.
    - Unsupported productivity multipliers, current-model capability claims, pricing claims, tool availability claims, or workflow universals are removed or caveated.
    - Non-overlap is enforced section-by-section: `durable-context-coding-agents` owns repo-local memory, promotion, and durable context; `make-the-agent-prove-it` owns proof-stack mechanics; `small-threads-durable-state` owns small-thread, handoff, and `.agents/work/` operating procedure; `agentic-coding-2026` introduces those ideas briefly as the series map, then links to the public posts for depth instead of recreating their frameworks, tables, or procedures.
    - Frontmatter is current: title, description, `pubDate`, tags, `draft: false`, `unlisted: false` if publishing, and an intentional `order` relative to the three existing public posts.
    - If published/listed, homepage navigation is updated deliberately to include or intentionally omit `/posts/agentic-coding-2026`, and the decision is recorded in `progress.md`.
    - Internal links point only to current production routes, the resource hub, or intentional external sources.
    - The article must not link to draft-only routes such as `/posts/amp-first-win-15-minutes`, `/posts/what-is-an-agent`, `/posts/agent-workflows-that-stick`, `/posts/agent-planning-workflow`, or `/posts/amp-power-patterns`.
    - Stale Amp setup, pricing, mode, UI/sidebar, shortcut, token-threshold, `.agents/plans/`, `.agents/context/`, and draft-only practice-path claims are removed unless verified close to publication.
    - `npm run check`, `npm run build`, and `git diff --check` pass.
    - Production output includes `/posts/agentic-coding-2026/index.html` and `/posts/agentic-coding-2026/slides/index.html` if the article is published.
    - Production output does not include `/posts/coding-with-agents-2025`.
    - Built/source output is checked for draft-only internal links: `/posts/amp-first-win-15-minutes`, `/posts/what-is-an-agent`, `/posts/agent-workflows-that-stick`, `/posts/agent-planning-workflow`, and `/posts/amp-power-patterns`.
    - Verification results and any skipped checks are recorded in `progress.md`.
  - Stop conditions:
    - Stop if publishing `agentic-coding-2026` would leave a stale public `/posts/coding-with-agents-2025` route or duplicate field-guide files without a recorded reason.
    - Stop if the rewrite needs Amp setup, pricing, install, mode, UI/sidebar, shortcut, model, token-threshold, or feature claims that have not been verified from current official/product sources; prefer removing the claim over publishing unverified product detail.
    - Stop if the article starts duplicating the proof-stack, durable-context, or `.agents/work/` operating-procedure articles instead of summarizing and linking to them.
    - Stop if a major claim cannot be traced to a transcript timestamp, summary/source path, official source, existing public post, or clearly marked author synthesis.
    - Stop if the article would link to draft-only post routes or revive the old practice path.
    - Stop if the publication decision changes from a listed public article to a draft or unlisted handout; record the reason and update navigation expectations before continuing.
    - Stop if `npm run check`, `npm run build`, `git diff --check`, route-output inspection, or draft-link inspection fails.
  - Notes: Keep Amp as a concrete example only when it clarifies broader agentic-coding guidance and product claims are either avoided or verified. Rename/replace the existing draft file rather than adding a parallel field-guide draft unless preserving the old file has a recorded reason.

- [ ] **Task 7: Rework Amp-specific material as a broader tool case study**
  - Scope: `amp-power-patterns.md`, current Amp docs/resources/threads as needed
  - Depends on: Task 2
  - Acceptance:
    - Product mode/tool terminology is current.
    - Oracle, subagents, Librarian, handoff, deep mode, rush/smart usage, and cloud/factory assumptions are verified before publishing.
    - The article avoids stale model names, speculative tool claims, and obsolete editor/sidebar assumptions.
    - The article teaches broader agentic-coding patterns using Amp as the example, rather than requiring the whole series to be Amp-specific.
    - Public Amp concepts are distinguished from internal/local workflow concepts before naming features.
  - Notes: Consult Oracle or relevant threads before editing because product details age quickly.
  - Prep: Use `research/amp-official-sources-2026.md` for the current Amp source bundle and stale-claim removal list; re-run the Manual/Models/Plugin API/Chronicle sweep close to publication.

- [ ] **Task 8: Update site navigation after each publish decision**
  - Scope: `src/pages/index.astro`, `src/pages/posts/index.astro`, relevant post frontmatter
  - Depends on: whichever publish task changes public inventory
  - Acceptance:
    - Homepage links only to production-built routes.
    - Drafts remain visible locally and absent from production.
    - Build output under `dist/posts` matches the intended public inventory.
    - If `draft: false`, production creates both `/posts/[slug]` and `/posts/[slug]/slides`.
    - If `unlisted: true`, the post is hidden from `/posts` but the production route still exists.
    - Homepage and internal links are updated when public inventory changes.
    - If slide output is not useful, the homepage does not link to that slide route until fixed.
  - Notes: This task repeats whenever another article is published or hidden.

## Implementation Notes

- Do not bulk-publish the old posts.
- Refresh or publish one article at a time after Task 2; do not edit multiple drafts in parallel unless the plan explicitly scopes a merge.
- Preserve useful old material by merging it into fewer, sharper articles.
- Use transcript-backed summaries for claims; avoid unsourced productivity multipliers.
- Do not duplicate resource summaries as posts unless the post has a distinct thesis and editorial shape.
- Keep article changes and publish/frontmatter changes in separate commits when practical.
- For Amp-specific content, verify product behavior close to publish time.
- For transcript-backed posts, compare against the resource summary before editing and record the unique reader job.
- For Amp-specific content, verify public-facing terminology/features from current official docs/product or current first-party material before publishing.

## Constraints / Decisions

- Current public production posts: `src/content/posts/durable-context-coding-agents.md`, `src/content/posts/make-the-agent-prove-it.md`, and `src/content/posts/small-threads-durable-state.md`.
- Other posts are `draft: true` and should remain locally visible but production-hidden until refreshed.
- Resources/summaries remain public and are the source library for future article updates.
- User decision: broader agentic-coding guidance first; Amp is a concrete example/tool.
- User decision: few high-signal posts; avoid duplicating resource summaries unless clearly relevant.
- `draft: false` creates production post and slide routes. `unlisted: true` hides from `/posts` only; it does not hide the production route.

## Acceptance Criteria

- There is a clear publish roadmap for the draft backlog.
- The next article to refresh/publish is obvious.
- Homepage and production routes do not link to draft-only pages.
- Work item artifacts capture why drafts are refreshed, merged, retired, or kept private.

## Verification

- After homepage/frontmatter changes: `npm run check`, `npm run build`.
- Confirm production output under `dist/posts` contains only intended published posts.
- For content-only planning changes: `git diff --check`.
