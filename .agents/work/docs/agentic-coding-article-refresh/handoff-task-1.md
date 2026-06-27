# Handoff Prompt: Task 1 Draft Article Audit

Paste this prompt into a fresh implementation thread.

```text
You are executing Task 1 for the work item `.agents/work/docs/agentic-coding-article-refresh/`.

Goal: audit each draft article against current sources and fill `.agents/work/docs/agentic-coding-article-refresh/audit.md` with one row per draft. This is a planning/audit task only: do not edit post bodies, do not change frontmatter, do not publish anything, and do not update site navigation.

Read these files first:

- `AGENTS.md`
- `.agents/work/docs/agentic-coding-article-refresh/index.md`
- `.agents/work/docs/agentic-coding-article-refresh/plan.md`
- `.agents/work/docs/agentic-coding-article-refresh/research.md`
- `.agents/work/docs/agentic-coding-article-refresh/audit.md`
- `.agents/work/docs/agentic-coding-article-refresh/progress.md`

Then audit these draft posts:

- `src/content/posts/simon-willison-engineering-practices-coding-agents.md`
- `src/content/posts/coding-with-agents-2025.md`
- `src/content/posts/amp-first-win-15-minutes.md`
- `src/content/posts/agent-workflows-that-stick.md`
- `src/content/posts/agent-planning-workflow.md`
- `src/content/posts/amp-power-patterns.md`
- `src/content/posts/what-is-an-agent.md`
- `src/content/posts/workshop-hands-on-agents.md`

Also compare against the current public anchor article:

- `src/content/posts/durable-context-coding-agents.md`

And use relevant summaries/transcripts under:

- `src/content/summaries/**`
- `src/content/transcripts/**`

Task details:

1. Inventory each draft:
   - Read frontmatter and headings/body enough to understand the article.
   - Capture the current title from frontmatter.
   - Note whether it is `draft`, `unlisted`, or otherwise navigation-relevant.
   - Do not make frontmatter changes.

2. Fill one row per draft in `audit.md` with:
   - `Draft path`
   - `Current title`
   - `Decision`: one of `refresh`, `merge`, `retire`, `publish candidate`, or `keep private`
   - `Destination / target slug`
   - `Distinct thesis or reason not to post`
   - `Overlaps to avoid`
   - `Required source anchors`
   - `Stale/unsupported claims to remove or verify`
   - `Frontmatter/navigation impact`

3. Use these decision meanings:
   - `refresh`: keep the draft concept, rewrite later with current sources.
   - `merge`: carry named sections/ideas into a target article; keep source draft unpublished unless explicitly revived.
   - `retire`: keep `draft: true`, avoid production links, record why; do not delete.
   - `keep private`: no production links and no roadmap pressure.
   - `publish candidate`: eligible for a later edit/publish pass only; not published during this task.

4. Apply these constraints:
   - The refreshed public series should be broader agentic-coding guidance.
   - Amp should appear only as one concrete tool/example/case study, not as the whole framing.
   - Keep public posts few and high-signal.
   - Avoid publishing posts that merely duplicate resource summaries.
   - Transcript-backed draft posts must add a distinct article thesis beyond the matching resource summary.
   - Amp-specific claims must be marked for close-to-publish verification with “verified as of YYYY-MM-DD” and source, but do not perform publication edits now.
   - Avoid unsourced productivity multipliers, model capability claims, pricing/setup assumptions, obsolete UI/editor/sidebar assumptions, and stale Amp mode/tool terminology.
   - Legacy `.agents/plans/` or `.agents/context/` guidance should be flagged where it conflicts with current dot-agents v0.3 `.agents/work/`.

5. For transcript-backed or resource-backed content:
   - Compare the draft against the matching summary and transcript where they exist.
   - Use transcript timestamp anchors when available.
   - Source anchors should be concrete paths plus timestamp ranges, e.g.:
     - `src/content/transcripts/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md [00:04:41]-[00:18:35]`
   - If a post mostly restates a summary, recommend keeping it draft/private or merging only the distinct article idea.
   - If it adds a stronger synthesis, name the distinct thesis.

6. Use these current source themes from `research.md` as the default source map:
   - Alignment bottleneck:
     - `src/content/summaries/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md`
     - `src/content/transcripts/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md [00:01:53]-[00:06:49]`
   - Proof, not faith:
     - `src/content/summaries/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md`
     - `src/content/transcripts/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md [00:04:41]-[00:18:35]`
   - Good friction:
     - `src/content/summaries/coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro.md`
     - matching transcript around `[00:02:55]-[00:17:55]`
   - Codebase as agent infrastructure:
     - friction files above
     - `src/content/summaries/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md`
     - matching transcript around `[00:29:08]-[00:42:55]` and `[01:12:03]-[01:30:17]`
   - Context hygiene:
     - `src/content/summaries/coding-with-agents/build-crew-episode-7.md`
     - matching transcript around `[00:13:06]-[00:24:12]`
   - Factory/orchestration:
     - `src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md`
     - `src/content/summaries/coding-with-agents/raising-an-agent-episode-10.md`
     - `src/content/summaries/coding-with-agents/llms-are-killing-agent-harness.md`
     - matching transcripts under `src/content/transcripts/coding-with-agents/`
   - Amp as concrete example:
     - `src/content/summaries/coding-with-agents/amp-code-founder-on-future-of-coding-agents.md`
     - Raising an Agent summaries/transcripts above
     - mark product-specific claims for verification before any future publish.

7. Identify overlaps:
   - Compare each draft against `durable-context-coding-agents.md`.
   - Compare drafts against each other.
   - Name duplicated sections/ideas so they are not republished multiple times.
   - Pay special attention to overlap among:
     - `coding-with-agents-2025.md`
     - `what-is-an-agent.md`
     - `agent-workflows-that-stick.md`
     - `agent-planning-workflow.md`
     - `amp-first-win-15-minutes.md`
     - `amp-power-patterns.md`

8. Destination/target slug guidance:
   - Use concrete target slugs for every `refresh` or `merge` decision.
   - Candidate slugs may be existing or proposed, but make them explicit.
   - Likely refreshed series shape from `research.md`:
     - anchor already public: `durable-context-coding-agents`
     - proof article candidate: e.g. `make-the-agent-prove-it`
     - field guide candidate: e.g. `agentic-coding-2026`
     - practice/context article candidate: e.g. `small-threads-durable-state`
     - Amp tool case study candidate: e.g. `amp-power-patterns-factory-era`
     - workshop handout only if event-driven.

9. After the table, fill `## Near-Term Roadmap From Audit` in `audit.md` with:
   - the next single article candidate
   - at most 2–3 follow-up candidates
   - optional/deferred drafts
   - retired/merged drafts and their target articles
   - a non-overlap statement for every public candidate against:
     - `src/content/posts/durable-context-coding-agents.md`
     - matching resource summaries
     - other planned public articles.

10. Update `.agents/work/docs/agentic-coding-article-refresh/progress.md` with a short dated note that Task 1 audit was completed, what files changed, and any important open questions. Do not change `index.md`, `plan.md`, or post files unless you discover a serious inconsistency that must be recorded; prefer recording findings in `audit.md`.

11. Verification:
   - Since this is a planning/content-audit change only, run `git diff --check`.
   - Do not run build/check unless you unexpectedly change source/frontmatter/navigation, which you should not do for this task.
   - Before finishing, run `git diff -- .agents/work/docs/agentic-coding-article-refresh/audit.md .agents/work/docs/agentic-coding-article-refresh/progress.md` and review that:
     - all eight draft rows are filled
     - decisions use the allowed vocabulary
     - every refresh/merge has a target slug
     - every publish candidate has frontmatter/navigation impact noted
     - transcript-backed posts were compared to summaries/transcripts
     - no post bodies/frontmatter/navigation files were changed.

Deliverable: filled `audit.md`, updated `progress.md`, and a concise final summary listing the decisions and the recommended next single article candidate.
```
