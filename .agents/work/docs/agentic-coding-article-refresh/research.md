# Research: Agentic Coding Article Refresh

**Date:** 2026-06-28
**Status:** initial synthesis
**Question:** How should the draft posts be refreshed now that only the durable-context article is public?

## Recommendation

Do not republish the old practice-path posts as-is. Treat the current draft backlog as raw material for a smaller, current series:

1. Keep `durable-context-coding-agents.md` as the public anchor article.
2. Promote the Simon Willison post next if we want a proof/evidence companion article; it is already source-backed and aligned with the current direction.
3. Rewrite the broad field-guide content around 2026 realities: agents as workers/factory, implementation cheapness, alignment bottlenecks, proof stacks, codebase infrastructure, and good friction.
4. Merge or retire overlapping intro/context/token-management posts instead of maintaining many lightly different guides.
5. Refresh Amp-specific posts only after verifying current Amp product terminology, modes, install flow, pricing assumptions, and CLI/editor status.

## Draft Inventory

| Draft | Current theme | Issue | Recommended action |
| --- | --- | --- | --- |
| `src/content/posts/simon-willison-engineering-practices-coding-agents.md` | Transcript-backed engineering practices | Strongest current draft; mostly overlaps with resource summary but can work as a polished article. | **Publish candidate after review**; ensure it adds value beyond the summary. |
| `src/content/posts/coding-with-agents-2025.md` | Broad beginner field guide | Intro-level “agents now” framing is stale and overlaps several posts. | **Rewrite / rename** as a current field guide, likely 2026 or evergreen. |
| `src/content/posts/amp-first-win-15-minutes.md` | Amp first-win tutorial | Tool-specific setup and UI assumptions may be stale. | **Refresh after product verification**; keep only if it remains practical and current. |
| `src/content/posts/agent-workflows-that-stick.md` | Short threads, external memory, staged diffs | Overlaps with durable context and planning workflow; `.agents/context/` pattern is older than `.agents/work/`. | **Merge/condense** into context-hygiene or work-item article. |
| `src/content/posts/agent-planning-workflow.md` | Plan-first workflow using legacy `.agents/plans/` | Long, template-heavy, and misaligned with dot-agents v0.3 `.agents/work/`. | **Rewrite** around work items, alignment, handoffs, and proof. |
| `src/content/posts/amp-power-patterns.md` | Advanced Amp modes and tools | Long and likely product-stale; needs current mode/tool verification. | **Rewrite after verification**; avoid speculative model/tool claims. |
| `src/content/posts/what-is-an-agent.md` | Basic loop explainer | Too basic for the current site direction and overlaps the broad field guide. | **Retire or fold** into a refreshed field guide intro. |
| `src/content/posts/workshop-hands-on-agents.md` | Workshop handout | Setup/pricing/product details likely stale; narrower use case. | **Refresh only if a workshop is scheduled**; otherwise keep draft/private. |

## Current Resource Themes To Use

- **Alignment is the bottleneck:** Maggie Appleton’s collaborative AI engineering summary argues implementation is becoming cheap while team alignment, shared context, and coordination become the hard part.
- **Proof, not faith:** Simon Willison’s engineering-practices summary supports test-first agent work, manual verification with running systems and `curl`, conformance suites, screenshots, sandboxing, and fake data.
- **Good friction:** Armin Ronacher and Cristina Poncela Cubeiro argue that agentic coding needs the right friction because generation outpaces review and agents do not feel engineering discomfort.
- **Codebase as agent infrastructure:** The same friction talk plus Mario Zechner’s Pi/OpenClaw workflow point to module boundaries, simple cores, visible flow, deterministic checks, and examples as rails for agents.
- **Context hygiene:** Build Crew episode 7 supports small focused threads, handoffs, wide research/critique phases, and narrow implementation threads.
- **Factory/orchestration:** Raising an Agent episodes 9-10 and Thorsten Ball’s harness talk point toward longer-running agents, parallelism, deep work modes, and the product/workflow challenge of preserving and coordinating agent work.
- **Amp-specific current themes:** Quinn Slack’s Amp discussion and Raising an Agent episodes emphasize frontier-first users, risk-based human review, cloud agents, feedback loops with screenshots/dev servers, deep mode, skills, and killing sidebar-style assistant habits.

## Proposed Refreshed Series Shape

1. **Anchor:** `Your Repo Is the Memory` — durable context and repo-local operating memory. Already public.
2. **Proof article:** “Make the Agent Prove It” — tests, manual verification, browser/API evidence, sandboxing, reviewer comprehension. Source-backed by Simon.
3. **Field guide:** “Agentic Coding in 2026” — what changed since the old beginner guide: cheap implementation, alignment, proof, friction, codebase infrastructure, orchestration.
4. **Practice article:** “Small Threads, Durable State” — context hygiene, research vs implementation, handoffs, `.agents/work/`, and planning.
5. **Amp article:** “Amp Power Patterns in the Factory Era” — current modes/tools/workflows after product verification.
6. **Workshop handout:** only if needed for an event; otherwise keep draft.

## Risks

- Publishing too many similar guides will make the site feel stale again.
- Amp-specific content can age quickly; verify product details immediately before publishing.
- Transcript-backed posts should not merely duplicate resource summaries; they need a sharper article thesis.
- Avoid broad productivity multipliers or “agents write all code now” claims unless tightly sourced and caveated.
