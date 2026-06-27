# Research: Agentic Coding Article Refresh

**Date:** 2026-06-28
**Status:** initial synthesis
**Question:** How should the draft posts be refreshed now that only the durable-context article is public?

## Recommendation

Do not republish the old practice-path posts as-is. Treat the current draft backlog as raw material for a smaller, current series:

1. Keep `durable-context-coding-agents.md` as the public anchor article.
2. Treat the Simon Willison draft as a candidate source-backed proof/evidence article, not an automatic publish. Publish it only if it becomes a distinct high-signal article rather than duplicating the resource summary.
3. Rewrite the broad field-guide content around 2026 realities: agents as workers/factory, implementation cheapness, alignment bottlenecks, proof stacks, codebase infrastructure, and good friction.
4. Merge or retire overlapping intro/context/token-management posts instead of maintaining many lightly different guides.
5. Use Amp as a concrete tool/example inside broader agentic-coding guidance. Refresh Amp-specific posts only after verifying current product terminology, modes, install flow, pricing assumptions, and CLI/editor status.

## User Decisions

- The public series should be broader agentic-coding guidance. Amp can appear as one concrete tool and case study, but the series should not be framed as Amp-only.
- Keep public posts few and high-signal. Transcript-backed posts should not duplicate resource summaries unless they add a distinct article thesis that belongs in `/posts`.

## Draft Inventory

| Draft | Current theme | Issue | Recommended action |
| --- | --- | --- | --- |
| `src/content/posts/simon-willison-engineering-practices-coding-agents.md` | Transcript-backed engineering practices | Strongest current draft; mostly overlaps with resource summary. | **Conditional publish candidate**; only publish if reframed into a distinct proof/evidence article. |
| `src/content/posts/coding-with-agents-2025.md` | Broad beginner field guide | Intro-level “agents now” framing is stale and overlaps several posts. | **Rewrite / rename** as a current field guide, likely 2026 or evergreen. |
| `src/content/posts/amp-first-win-15-minutes.md` | Amp first-win tutorial | Tool-specific setup and UI assumptions may be stale. | **Refresh after product verification**; keep only if it remains practical and current. |
| `src/content/posts/agent-workflows-that-stick.md` | Short threads, external memory, staged diffs | Overlaps with durable context and planning workflow; `.agents/context/` pattern is older than `.agents/work/`. | **Merge/condense** into context-hygiene or work-item article. |
| `src/content/posts/agent-planning-workflow.md` | Plan-first workflow using legacy `.agents/plans/` | Long, template-heavy, and misaligned with dot-agents v0.3 `.agents/work/`. | **Rewrite** around work items, alignment, handoffs, and proof. |
| `src/content/posts/amp-power-patterns.md` | Advanced Amp modes and tools | Long and likely product-stale; needs current mode/tool verification. | **Rewrite after verification**; avoid speculative model/tool claims. |
| `src/content/posts/what-is-an-agent.md` | Basic loop explainer | Too basic for the current site direction and overlaps the broad field guide. | **Retire or fold** into a refreshed field guide intro. |
| `src/content/posts/workshop-hands-on-agents.md` | Workshop handout | Setup/pricing/product details likely stale; narrower use case. | **Refresh only if a workshop is scheduled**; otherwise keep draft/private. |

## Current Resource Themes To Use

- **Alignment is the bottleneck:** Maggie Appleton’s collaborative AI engineering summary argues implementation is becoming cheap while team alignment, shared context, and coordination become the hard part. Source: `src/content/summaries/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md`; transcript: `src/content/transcripts/coding-with-agents/collaborative-ai-engineering-maggie-appleton.md` around [00:01:53]-[00:06:49].
- **Proof, not faith:** Simon Willison’s engineering-practices summary supports test-first agent work, manual verification with running systems and `curl`, conformance suites, screenshots, sandboxing, and fake data. Source: `src/content/summaries/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md`; transcript: `src/content/transcripts/coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work.md` around [00:04:41]-[00:18:35].
- **Good friction:** Armin Ronacher and Cristina Poncela Cubeiro argue that agentic coding needs the right friction because generation outpaces review and agents do not feel engineering discomfort. Source: `src/content/summaries/coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro.md`; transcript: `src/content/transcripts/coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro.md` around [00:02:55]-[00:17:55].
- **Codebase as agent infrastructure:** The friction talk plus Mario Zechner’s Pi/OpenClaw workflow point to module boundaries, simple cores, visible flow, deterministic checks, examples, and senior review as rails for agents. Sources: friction files above; `src/content/summaries/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md`; transcript: `src/content/transcripts/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md` around [00:29:08]-[00:42:55] and [01:12:03]-[01:30:17].
- **Context hygiene:** Build Crew episode 7 supports small focused threads, handoffs, wide research/critique phases, and narrow implementation threads. Sources: `src/content/summaries/coding-with-agents/build-crew-episode-7.md`; transcript: `src/content/transcripts/coding-with-agents/build-crew-episode-7.md` around [00:13:06]-[00:24:12].
- **Factory/orchestration:** Raising an Agent episodes 9-10 and Thorsten Ball’s harness talk point toward longer-running agents, parallelism, deep work modes, and the product/workflow challenge of preserving and coordinating agent work. Sources: `src/content/summaries/coding-with-agents/raising-an-agent-episode-9.md`, `src/content/summaries/coding-with-agents/raising-an-agent-episode-10.md`, `src/content/summaries/coding-with-agents/llms-are-killing-agent-harness.md`; transcripts: matching files under `src/content/transcripts/coding-with-agents/`.
- **Amp as concrete example:** Quinn Slack’s Amp discussion and Raising an Agent episodes emphasize frontier-first users, risk-based human review, cloud agents, feedback loops with screenshots/dev servers, deep mode, skills, and killing sidebar-style assistant habits. Sources: `src/content/summaries/coding-with-agents/amp-code-founder-on-future-of-coding-agents.md`, Raising an Agent summaries above, and matching transcripts. Verify product-specific claims again before publishing.

## Source And Claim Method

- For publish candidates, transcript-backed claims must be checked against saved transcripts, not only summaries.
- Each substantive claim needs a source anchor: transcript timestamp, summary path, official docs URL, or explicit “author experience/opinion.”
- Unsupported productivity multipliers, model capability claims, tool availability, pricing, or workflow claims must be removed or caveated.
- If a transcript sidecar exists, prefer it over copied-forward post text.
- Amp product claims must record “verified as of YYYY-MM-DD” and the source used.
- Compare transcript-backed posts against matching resource summaries before editing. A post must add synthesis across sources, an opinionated framework, a practical workflow, or a decision guide.

## Decision Meanings

- **Refresh:** keep the draft concept, rewrite with current sources, and verify frontmatter/navigation before publishing.
- **Merge:** carry named sections/ideas into a target article and keep the source draft unpublished unless explicitly revived.
- **Retire:** keep `draft: true`, remove/avoid internal links, and record why; do not delete by default.
- **Keep private:** no production links and no roadmap pressure.
- **Publish candidate:** eligible for a separate edit/publish pass after audit; not published during audit.

## Proposed Refreshed Series Shape

1. **Anchor:** `Your Repo Is the Memory` — durable context and repo-local operating memory. Already public.
2. **Proof article:** “Make the Agent Prove It” — tests, manual verification, browser/API evidence, sandboxing, reviewer comprehension. Source-backed by Simon.
3. **Field guide:** “Agentic Coding in 2026” — what changed since the old beginner guide: cheap implementation, alignment, proof, friction, codebase infrastructure, orchestration.
4. **Practice article:** “Small Threads, Durable State” — context hygiene, research vs implementation, handoffs, `.agents/work/`, and planning.
5. **Tool case study:** “Amp Power Patterns in the Factory Era” — optional broader-guidance article using Amp as the concrete example after product verification.
6. **Workshop handout:** only if needed for an event; otherwise keep draft.

## Risks

- Publishing too many similar guides will make the site feel stale again.
- Amp-specific content can age quickly; verify product details immediately before publishing.
- Transcript-backed posts should not merely duplicate resource summaries; they need a sharper article thesis.
- Avoid broad productivity multipliers or “agents write all code now” claims unless tightly sourced and caveated.
