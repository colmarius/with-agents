---
title: 'Amp as a Factory-Era Coding-Agent Case Study'
description: 'A source-backed Amp case study for task sizing, delegation contracts, context hygiene, proof loops, review, and orchestration without turning the broader agentic-coding series into an Amp manual.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Amp', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: 5
---

## Amp is the example, not the whole lesson

> Amp is useful here because its product details point to reusable work contracts.

```text
Amp detail → reusable contract → workflow habit
```

Amp is the concrete case study here; the reusable lessons are task sizing, uncertainty, delegation contracts, context hygiene, proof loops, review, and orchestration. The product details below were re-checked against Amp's current [Manual](https://ampcode.com/manual), [Models page](https://ampcode.com/models), [Plugin API](https://ampcode.com/manual/plugin-api), and [Chronicle](https://ampcode.com/chronicle) on 2026-06-28.

For the broader map, read [Agentic Coding in 2026](/posts/agentic-coding-2026). For durable repo-local memory, read [Your Repo Is the Memory](/posts/durable-context-coding-agents). For proof mechanics, read [Make the Agent Prove It](/posts/make-the-agent-prove-it). For small-thread operating practice, read [Small Threads, Durable State](/posts/small-threads-durable-state).

This article deliberately avoids setup, pricing, UI shortcuts, exact current models, token thresholds, and installation commands. Those details churn too quickly for the job.

## Match mode to uncertainty, not urgency

> Choose worker depth by uncertainty, not by how fast you want the answer.

Amp's current manual lists three built-in modes: `rush`, `smart`, and `deep` (verified 2026-06-28). Treat them as different contracts, not a status ladder.

| Work shape | Amp surface | Useful contract |
| --- | --- | --- |
| Small, bounded, known-done task | `rush` | "Find the relevant files, make the smallest correct change, run the focused check, and stop." |
| Normal implementation or refactor | `smart` | "Use the repo context, make a coherent change, verify, and summarize tradeoffs." |
| Hard, complex, or high-uncertainty work | `deep` | "Think longer, research more, build a larger model of the problem, and return with evidence." |
| Second opinion, critique, or adversarial review | Oracle | "Inspect the plan, bug, diff, or design and tell me what I am missing." |

**Oracle is not a mode.** The manual describes Oracle as a "second opinion" model for complex reasoning or analysis, and the current `rush` guidance recommends pairing `rush` with Oracle when bounded work still deserves planning, criticism, or review. Use Oracle before or after implementation; do not turn it into the implementation worker.

```text
If "done" is clear, choose the smallest capable worker.
If "done" is unclear, pay for reasoning before you pay for edits.
```

The [Rush 2.0](https://ampcode.com/news/rush-2.0) announcement is explicit about the boundary: `rush` is for small coding tasks with known done-ness, not transient bugs, migrations, architecture changes, complex features, or tasks where "done" is fuzzy. That generalizes beyond Amp: fast agents help when the task has a tight success condition and are dangerous when speed hides uncertainty.

## Delegate with contracts, not vibes

> More agents only help when each delegate has a job, boundary, and proof target.

```text
worker owns a bounded task
critic owns uncertainty
researcher owns external prior art
review/checks own repeatable invariants
human owns irreversible judgment
```

Amp's manual supports subagents, Oracle, Librarian, review, and Checks, but each has a boundary.

**Subagents are for independent work.** The manual says they have their own context, can do multi-step work, and are useful for parallel work across different code areas. It also says they work in isolation: they cannot communicate with each other, you cannot guide them mid-task, and the main agent receives their final summary rather than the step-by-step transcript. That makes the safe contract narrow:

```text
Use subagents only when the work is independent enough that
parallel progress will not create merge conflicts or hidden coupling.
Give each subagent its files, scope limit, proof target, and expected summary.
Review and integrate the results in the main thread.
```

**Oracle is for critique and hard judgment.** Ask it to review a plan, stress-test a migration, inspect a diff, identify likely race conditions, or propose proof that would actually cover a bug. It is most useful when the main agent might make the locally obvious but globally wrong edit.

**Librarian is for external code research.** The manual says Librarian can search public GitHub and connected private GitHub repositories, and that it searches only the default branch. That makes it a research tool, not a source of truth for your working tree: use it for "how does this framework really implement X?", then verify locally.

**Review and Checks turn critique into a repeatable gate.** The current manual says Amp can review code via `amp review` or by asking the main agent, and that Checks are user-defined criteria scoped to parts of a codebase. The [Liberating Code Review](https://ampcode.com/news/liberating-code-review) announcement adds the detail: Checks live in `.agents/checks/`, and the review tool runs separate agents per check so each criterion is more likely to be examined.

The reusable pattern is not "launch more agents." It is to give each delegate the kind of ownership shown on the slide.

That human-judgment boundary is source-backed by Quinn Slack's Amp discussion: he distinguishes core API/data work, where humans should scrutinize agent output, from low-risk internal tools where more code can be delegated safely [00:25:47]-[00:30:37].

## Context is product state plus repo state

> Product context helps, but repo-local task state still carries the decisions.

```text
Amp threads / skills / plugins  +  AGENTS.md / work items / checks
             │                                  │
             ╰────────── current work contract ─╯
```

[Amp Rebuilt](https://ampcode.com/news/neo) says the rebuilt CLI is remote-controllable, compaction-first, and plugin-powered: Amp now auto-compacts when context fills, Handoff is gone, and thread references still exist, so you can reference another thread and Amp will read it and extract relevant information.

That does not mean "ignore context." It means the durable part should move out of chat when it has a job:

- `AGENTS.md` maps project conventions, commands, and constraints.
- Skills package task-specific guidance and resources.
- MCP tools can be bundled through skills to avoid bloating the always-visible tool surface.
- Thread references can pull relevant context from another Amp thread.
- Amp thread sharing currently supports private, workspace, group, and unlisted visibility; public discoverable sharing was removed because agent threads can contain sensitive snippets.
- Local work items such as `.agents/work/` in this repo are **not** an Amp product feature; they are durable repo-local state for multi-session work.

Amp can preserve and retrieve product context, but your repo still needs to preserve decisions, acceptance criteria, verification results, and the next action. That is why this site separates [durable repo memory](/posts/durable-context-coding-agents) from [small-thread work-item practice](/posts/small-threads-durable-state). The transcript sources agree: Raising an Agent episode 9 argues an "agent-native" codebase is one where the agent knows how to run, verify, authenticate, click around, inspect output, and recover when feedback is missing [00:10:18]-[00:17:24], and episode 10 shows the same move through skills and agent-optimized dev tooling [00:10:17]-[00:21:19].

## Make the factory prove its work

> Longer-running workers need faster reality checks.

```text
Do not ask the agent to be trustworthy.
Give it a loop where reality can say "no."
```

Factory-era agent work fails when the only sensor is a human reading a giant diff after the fact. Amp's current surfaces push proof closer to the work:

- [Diffs](https://ampcode.com/news/diffs) lets users review, request changes on, and stage thread changes directly in Amp; its own framing is "Outsource your coding, but not your understanding of the code."
- `amp review` and Checks make review a composable step rather than a one-off prompt.
- [Feedback Loopable](https://ampcode.com/notes/feedback-loopable) shows the practical pattern: build playgrounds, encode experiments in URL state, expose logs, add CLI/headless checks, and give the agent fast feedback it can understand.
- [Mainframe Magic](https://ampcode.com/notes/mainframe-magic) shows the factory version: source maps, manifests, task queues, compiler gates, and smoke tests before a migrated program is marked complete.
- [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent) reduces the prompt contract to direction, reference, definition of done, and a feedback loop: "Trust isn't a feeling, it's a passing test suite."

Those examples are Amp-specific, but the lesson on the slide is general.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the full proof stack. The Amp version is shorter: if you want longer-running workers, invest in the checks, logs, fixtures, screenshots, CLIs, review surfaces, and human-comprehension gates that let those workers show their work.

## Orchestration is the frontier, and it is still high-churn

> More active agents require stronger triage, contracts, proof, and review.

```text
more active threads → stronger task triage
custom agents      → clearer delegation contracts
plugin hooks       → policy and proof closer to the loop
diff/review UI     → human understanding stays attached
```

Amp's direction is no longer "one assistant in one sidebar." The [Agents, Everywhere](https://ampcode.com/news/agents-everywhere) announcement describes watching and driving active Amp agents across web, mobile, and CLI. The [Custom Agents](https://ampcode.com/news/custom-agents) announcement and the [Plugin API](https://ampcode.com/manual/plugin-api) show how plugins can create custom agents, run them once, create threads, append messages, wait for responses, and connect background work to a parent thread.

That is the factory frontier: not one smarter worker, but many workers with contracts, state, proof, and review. It is also the highest-churn part of the product — plugin APIs include experimental surfaces, and model assignments and UI details change — which is why this article avoids incidental details. Use the direction, not the details:

The transcript-backed sources explain why this matters. Raising an Agent episode 9 frames the shift as "the assistant is dead, long live the factory": feed agents tasks they are likely to succeed on, then improve the codebase so more tasks become safe to delegate [00:25:29]-[00:27:56]. Thorsten Ball's harness talk says the hard problem is increasingly where agents run, how their work is tracked, how results are preserved, and how humans coordinate many cheap workers [00:43:42]-[00:49:24].

## The contracts that survive

> Product details churn; task contracts are the durable lesson.

```text
uncertainty → delegation contract → proof loop → human judgment
```

Tool details change; the work contracts do not. When Amp changes again, keep these:

1. Size the task to the uncertainty.
2. Give every delegate a contract.
3. Keep product context separate from repo-local task state.
4. Require proof before acceptance.
5. Preserve human judgment for consequences the agent cannot own.
6. Treat orchestration APIs as frontier surfaces, not beginner defaults.

That is the pattern worth copying even when the product underneath it moves.

## Sources used

- Official Amp product sweep, verified 2026-06-28: [Amp Manual](https://ampcode.com/manual), [Amp Plugin API](https://ampcode.com/manual/plugin-api), [Amp Models](https://ampcode.com/models), and [Amp Chronicle](https://ampcode.com/chronicle).
- Current Amp news and notes checked for product direction: [Amp Rebuilt](https://ampcode.com/news/neo), [Agents, Everywhere](https://ampcode.com/news/agents-everywhere), [Custom Agents](https://ampcode.com/news/custom-agents), [Diffs](https://ampcode.com/news/diffs), [Rush 2.0](https://ampcode.com/news/rush-2.0), [Liberating Code Review](https://ampcode.com/news/liberating-code-review), and [The End of Public Threads](https://ampcode.com/news/end-of-public-threads).
- Amp workflow notes checked for feedback-loop and factory examples: [Feedback Loopable](https://ampcode.com/notes/feedback-loopable), [Mainframe Magic](https://ampcode.com/notes/mainframe-magic), and [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent).
- Transcript-backed source anchors: [Amp founder interview](https://www.youtube.com/watch?v=_L8xxUXOTk0) [00:25:47]-[00:33:15]; [Raising an Agent episode 9](https://www.youtube.com/watch?v=2wjnV6F2arc) [00:10:18]-[00:17:24], [00:25:29]-[00:40:38]; [Raising an Agent episode 10](https://www.youtube.com/watch?v=4rx36wc9ugw) [00:10:17]-[00:27:57]; [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ) [00:36:43]-[00:49:24].
- Internal non-overlap anchors: [Agentic Coding in 2026](/posts/agentic-coding-2026), [Your Repo Is the Memory](/posts/durable-context-coding-agents), [Make the Agent Prove It](/posts/make-the-agent-prove-it), and [Small Threads, Durable State](/posts/small-threads-durable-state).
