---
title: 'Right-Sized Threads, Durable State'
description: 'How to keep connected agent work in one thread, split only when separation helps, and carry accepted state across the boundary.'
pubDate: 2026-06-28
updatedDate: 2026-08-26
tags: ['AI Agents', 'Workflows', 'Planning', 'dot-agents']
draft: false
unlisted: false
order: 4
---

## Keep one thread for one connected job
<!-- slide:
class: compact
message: small
-->

> Continue while earlier work helps the next step; split when separation improves the work.

| Question | Action |
| --- | --- |
| Same outcome, and earlier context helps? | Continue. |
| Unrelated outcome? | Start a new thread. |
| Fresh judgment, isolated changes, or different access would help? | Start a new thread. |

A thread is right-sized when it owns one connected job. A checkout bug can include reproduction, diagnosis, a fix, review feedback, and a route test. An unrelated documentation redesign belongs elsewhere.

Amp's current [prompting guidance](https://ampcode.com/docs/prompting#how-to-prompt) also says to use one thread per task: tasks can be long, but unrelated work does not belong together. Amp reports a thread compacted more than 68 times ([“Read Bigger Threads”](https://ampcode.com/news/read-bigger-threads)), and Jason Liu of OpenAI shows five-week-old project threads delegating narrower work ([00:03:02–00:07:11](https://www.youtube.com/watch?v=il1c1a2FufU&t=182s)). These examples show that long threads can work; they do not show that longer is better.

[Your Repo Is the Memory](/posts/durable-context-coding-agents) covers reusable repository context. [Brief the Agent Like a Capable Co-Worker](/posts/capable-coworker-coding-agents) covers assignment briefs. This article covers when one assignment ends and another begins.

## Keep feedback with the job it can still change

> Do not split a connected job just because it moved from research to planning to implementation.

```text
report → reproduce → diagnose
                     │
             new evidence
                     ▼
choose → implement → verify
         ▲              │
         └── feedback ──┘
```

Research, planning, and implementation can stay together. If a prototype exposes a missing requirement or a test disproves the diagnosis, update the same plan.

For a checkout bug, one thread can reproduce it, trace the request, test two causes, apply the supported fix, exercise the route, and absorb review feedback.

Keep the thread while its history explains decisions and feedback. If old attempts now obscure the task, write down the current decision and start a new thread from that record.

## Split only when separation helps
<!-- slide:
class: compact
message: small
-->

> Split for clear ownership, independent judgment, isolated work, or needed access.

- **Accepted design → implementation:** a bounded starting point and authority.
- **Implementation → verification:** a fresh judgment.
- **Parallel options → selection:** isolated changes to compare.
- **Different environment:** access to the required machine or tools.

These are options, not automatic gates. A phase change justifies a new thread only when a fresh worker or narrow change boundary helps.

Fresh verification often deserves a split. Matt Pocock uses fresh-context review before manual QA finds a missing database table despite passing automated checks ([01:04:23–01:12:21](https://www.youtube.com/watch?v=-QFHIoCo-Ko&t=3863s)). Kun, a former Atlassian coding-agent engineer, demonstrates a separate pipeline for intent recovery, adversarial review, tests, documentation, and CI ([00:37:41–00:45:28](https://www.youtube.com/watch?v=8ZgpAXe5V5w&t=2261s)). These are examples, not reliability studies.

## Carry accepted state across the boundary

> Before a split, preserve the smallest record from which the next worker can act.

```text
handoff record
├─ outcome + acceptance
├─ read first + baseline
├─ decisions + constraints
├─ status + changed files
├─ checks + results
│  └─ inherited or rerun
├─ questions + blockers
├─ owner + limits
└─ next action
```

This is **durable state**: the accepted record that must survive the handoff. It records decisions, changes, and checks—not the transcript. Mark checks as inherited or rerun. Keep a discarded idea only when it prevents the next worker from reversing an accepted decision.

Keep this state in the repository for resumption, coordination, or review. A [dot-agents](https://dot-agents.dev/) work item is one option. A commit identifies a snapshot; it does not prove the work or make the files available elsewhere. Share the baseline through authorized Git or explicit file transfer before another thread depends on it ([Agent to Agent](https://ampcode.com/docs/orbs/agent-to-agent), [“From Agent to Agent”](https://ampcode.com/news/from-agent-to-agent)).

## Coordinate the split and name one integration owner

> Coordination routes work; integration ownership decides what becomes the combined result.

```text
coordinator
├─ implementation
├─ environment test
└─ verification
         │
         ▼
integration owner
         │
         ▼
combined decision
```

A **thread boundary** separates assignments; **durable state** crosses it. **Coordination** assigns work and gathers results. **Integration ownership** resolves overlap, verifies the combined result, and accepts or rejects it.

The same person or thread may coordinate and integrate, but the jobs differ. Collecting reports does not grant authority to accept them. Name one integration owner to make and record the combined decision.

## Sources used

- Current Amp product guidance: [Prompting](https://ampcode.com/docs/prompting), [Orbs](https://ampcode.com/docs/orbs), [Agent to Agent](https://ampcode.com/docs/orbs/agent-to-agent), [“Read Bigger Threads”](https://ampcode.com/news/read-bigger-threads), and [“From Agent to Agent”](https://ampcode.com/news/from-agent-to-agent).
- [Jason Liu, “Full Workshop: Setting Yourself Up for Success”](https://www.youtube.com/watch?v=il1c1a2FufU) on long-lived project threads, compaction, and delegated work.
- [Matt Pocock, “Full Walkthrough: Workflow for AI Coding”](https://www.youtube.com/watch?v=-QFHIoCo-Ko) and [Kun's agentic-engineering setup](https://www.youtube.com/watch?v=8ZgpAXe5V5w) on separating implementation from review and verification.
- [dot-agents](https://dot-agents.dev/) supplies the work-item pattern described here.
- The decision guide, definitions, and handoff record are author synthesis.
