# Handoff Prompt: Task 2 Refreshed Article Architecture

Paste this prompt into a fresh planning thread.

```text
You are executing Task 2 for the work item `.agents/work/docs/agentic-coding-article-refresh/`.

Goal: turn the completed draft audit into a concise, implementation-ready public article architecture. This is a planning task only: do not edit post bodies, do not change frontmatter, do not publish anything, and do not update site navigation.

Important context: the user accepted the audit’s proposed path. Treat `make-the-agent-prove-it` as the next single article candidate, with `agentic-coding-2026`, `small-threads-durable-state`, and optional `amp-power-patterns-factory-era` as follow-ups. Do not re-litigate that direction unless you find a concrete source/route conflict.

Read these files first:

- `AGENTS.md`
- `.agents/work/AGENTS.md`
- `.agents/work/docs/agentic-coding-article-refresh/index.md`
- `.agents/work/docs/agentic-coding-article-refresh/plan.md`
- `.agents/work/docs/agentic-coding-article-refresh/research.md`
- `.agents/work/docs/agentic-coding-article-refresh/audit.md`
- `.agents/work/docs/agentic-coding-article-refresh/progress.md`

Also read enough of these source posts to write non-overlap statements:

- `src/content/posts/durable-context-coding-agents.md`
- `src/content/posts/simon-willison-engineering-practices-coding-agents.md`
- `src/content/posts/coding-with-agents-2025.md`
- `src/content/posts/agent-workflows-that-stick.md`
- `src/content/posts/agent-planning-workflow.md`
- `src/content/posts/amp-power-patterns.md`

Use relevant summaries/transcripts from `audit.md` and `research.md` as source anchors. Prefer already identified anchors; do not broaden into new research unless a required source is missing.

Task details:

1. Update `.agents/work/docs/agentic-coding-article-refresh/research.md` with a new section named:

   ```markdown
   ## Refreshed Public Article Architecture
   ```

2. In that section, define the public article architecture as a small table with one row per candidate:

   - `durable-context-coding-agents` — current public anchor, already published
   - `make-the-agent-prove-it` — next single article candidate
   - `agentic-coding-2026` — follow-up field guide
   - `small-threads-durable-state` — follow-up practice/context article
   - `amp-power-patterns-factory-era` — optional Amp case study after product verification

3. For each row include:
   - proposed title
   - status: `published`, `next`, `follow-up`, or `optional/deferred`
   - one-sentence thesis
   - reader job / why this deserves a post rather than only a resource summary
   - source drafts to use or merge
   - required source anchors with transcript timestamp ranges where available
   - explicit non-overlap statement against:
     - `src/content/posts/durable-context-coding-agents.md`
     - matching resource summaries
     - the other planned public articles
   - frontmatter/navigation expectation for a later publish task

4. Add a short `## Article Order And Boundaries` subsection that states:
   - why `make-the-agent-prove-it` is next
   - what must be true before it is published
   - which ideas should be linked to, not repeated, across the series
   - how Amp is positioned as a concrete example rather than the whole framing

5. Add a short `## Draft Disposition` subsection that restates the final disposition from `audit.md`:
   - refresh `coding-with-agents-2025` as `agentic-coding-2026`
   - merge `what-is-an-agent` and `amp-first-win-15-minutes` into `agentic-coding-2026`
   - merge `agent-workflows-that-stick` and `agent-planning-workflow` into `small-threads-durable-state`
   - refresh `amp-power-patterns` only as `amp-power-patterns-factory-era` after verification
   - keep `workshop-hands-on-agents` private unless an event revives it

6. Update `.agents/work/docs/agentic-coding-article-refresh/progress.md` with a short dated note that Task 2 architecture was completed, which files changed, the selected next article candidate, and any open questions.

7. Update `.agents/work/docs/agentic-coding-article-refresh/index.md` only if needed to keep the work item current:
   - add any new artifact you created
   - set the next action to preparing `make-the-agent-prove-it` as the next publish candidate
   - keep status as `planned` unless actual article editing begins

8. Update `.agents/work/docs/agentic-coding-article-refresh/plan.md` checkboxes so completed planning tasks are accurate.

Constraints:

- Planning/content-architecture only.
- Do not edit `src/content/posts/**` during this task.
- Do not change frontmatter, homepage links, `/posts` behavior, or navigation.
- Do not create a PRD unless you discover a real audience/positioning ambiguity that blocks the architecture.
- Keep the public series small and high-signal.
- Avoid duplicating transcript-backed resource summaries; each post needs a distinct article thesis.
- Treat Amp-specific product details as future close-to-publish verification work, not as verified facts now.
- Preserve current dot-agents v0.3 `.agents/work/` guidance; do not revive legacy `.agents/plans/` or `.agents/context/` as public recommendations.

Verification:

- Run `git diff --check`.
- Do not run `npm run check` or `npm run build` unless you unexpectedly edit source/frontmatter/navigation files, which you should not do for this task.
- Before finishing, run:

  ```sh
  git diff -- .agents/work/docs/agentic-coding-article-refresh/research.md \
    .agents/work/docs/agentic-coding-article-refresh/progress.md \
    .agents/work/docs/agentic-coding-article-refresh/index.md \
    .agents/work/docs/agentic-coding-article-refresh/plan.md
  ```

  Review that:
  - the architecture names the same next candidate accepted by the user: `make-the-agent-prove-it`
  - every public candidate has a distinct thesis and non-overlap statement
  - source anchors are concrete and timestamped where transcripts exist
  - no post bodies/frontmatter/navigation files changed
  - the next action is clear for Task 3

Deliverable: updated `research.md` architecture section, updated work-item progress/index/plan as needed, and a concise final summary naming the article order and the next implementation task.
```
