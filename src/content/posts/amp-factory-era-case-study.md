---
title: 'Amp as a Factory-Era Coding-Agent Case Study'
description: 'A source-backed Amp case study for task sizing, delegation contracts, remote execution, agent-to-agent orchestration, cost governance, proof loops, and review without turning the broader agentic-coding series into an Amp manual.'
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

Amp is the concrete case study here; the reusable lessons are task sizing, uncertainty, delegation contracts, remote execution, agent-to-agent coordination, cost governance, context hygiene, proof loops, review, and orchestration. The product details below were swept against Amp's current [Manual](https://ampcode.com/manual), [Orbs manual](https://ampcode.com/manual/orbs), [Models page](https://ampcode.com/models), [Plugin API](https://ampcode.com/manual/plugin-api), [Pricing page](https://ampcode.com/pricing), and [Chronicle](https://ampcode.com/chronicle) on 2026-07-17, including [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent), [Agents, Anywhere](https://ampcode.com/news/agents-anywhere), [The Dial](https://ampcode.com/news/the-dial), and [Subscriptions, At Last](https://ampcode.com/news/subscriptions).

For the broader map, read [Agentic Coding in 2026](/posts/agentic-coding-2026). For durable repo-local memory, read [Your Repo Is the Memory](/posts/durable-context-coding-agents). For proof mechanics, read [Make the Agent Prove It](/posts/make-the-agent-prove-it). For small-thread operating practice, read [Small Threads, Durable State](/posts/small-threads-durable-state).

This article deliberately avoids setup walkthroughs, exact subscription prices and quotas, orb prices and sizes, UI shortcuts, exact current models, token thresholds, and installation commands. Those details churn too quickly for the job. It includes only the billing rules that materially affect the work contract, with a verification date.

## Set the dial by uncertainty, not urgency

> Choose worker capability by how much the agent has to figure out.

[The Dial](https://ampcode.com/news/the-dial) replaced Amp's old `smart`, `deep`, `rush`, and `large` names with four built-in tiers: `low`, `medium`, `high`, and `ultra` (verified 2026-07-09). Treat the dial as a work contract, not a prestige setting.

| Work shape | Amp surface | Useful contract |
| --- | --- | --- |
| Exact, bounded, known-done task | `low` | "Find the relevant files, make the smallest correct change, run the focused check, and stop." |
| Messy default implementation work | `medium` | "Use the repo context, handle the parts I did not spell out, verify, and summarize tradeoffs." |
| Hard change in a known area | `high` | "Be more careful on cross-cutting or subtle work; expect review feedback before merge." |
| Clear outcome, unknown path | `ultra` | "Research more, span many files/systems, surface decisions, and return with evidence." |
| Second opinion, critique, or adversarial review | Oracle | "Inspect the plan, bug, diff, or design and tell me what I am missing." |

**Oracle is still a critique contract, not the implementation worker.** The Dial says every built-in tier has an oracle backing second opinions, and the manual describes Oracle as a "second opinion" model for complex reasoning or analysis. Use that before or after implementation; do not confuse reviewer capacity with ownership of the edit.

**Cost belongs in the same contract.** Amp now offers [optional monthly subscriptions](https://ampcode.com/news/subscriptions) with included agent and orb usage, while [pay-as-you-go remains available](https://ampcode.com/pricing) at [provider API prices with zero markup](https://ampcode.com/manual#pricing) for individuals and non-enterprise workspaces (verified 2026-07-17). Either way, the dial and fan-out are direct budget choices. Before launching parallel workers, set the worker count, capability tier, stop condition, and evidence each worker must return.

```text
If "done" and "how" are clear, turn the dial down.
If "done" is clear but "how" is uncertain, turn it up.
```

That generalizes beyond Amp: cheaper, faster agents help when the task has a tight success condition and are dangerous when speed hides uncertainty. The useful question is not "how urgent is this?" It is "how much does the model need to discover before the change can be right?"

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

That isolation boundary still applies to built-in subagents. [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent) adds a different primitive: an Amp agent can spawn other agents as their own Amp threads in an orb, on the local machine, or on another runner, then send messages and files between them. It can offload a side quest, fan out tests, recover useful files from old work, or coordinate a change in another project. The stronger primitive needs a stronger contract:

```text
Name the target project and execution environment.
Send only the files and context the worker needs.
Set a budget, stop condition, proof target, and return message.
Keep integration ownership in one place.
```

**Oracle is for critique and hard judgment.** Ask it to review a plan, stress-test a migration, inspect a diff, identify likely race conditions, or propose proof that would actually cover a bug. It is most useful when the main agent might make the locally obvious but globally wrong edit.

**Librarian is for external code research.** The manual says Librarian can search public GitHub and connected private GitHub repositories, and that it searches only the default branch. That makes it a research tool, not a source of truth for your working tree: use it for "how does this framework really implement X?", then verify locally.

**Review and Checks turn critique into a repeatable gate.** The current manual says Amp can review code via `amp review` or by asking the main agent, and that Checks are user-defined criteria scoped to parts of a codebase. The [Liberating Code Review](https://ampcode.com/news/liberating-code-review) announcement adds the detail: Checks live in `.agents/checks/`, and the review tool runs separate agents per check so each criterion is more likely to be examined.

The reusable pattern is not "launch more agents." It is to give each delegate the kind of ownership shown on the slide.

That human-judgment boundary is source-backed by Quinn Slack's Amp discussion: he distinguishes core API/data work, where humans should scrutinize agent output, from low-risk internal tools where more code can be delegated safely [00:25:47]-[00:30:37].

## Context is product state plus repo state

> Product context helps, but remote agents still need repo-local setup and decisions.

```text
Amp threads / skills / plugins / orbs  +  AGENTS.md / setup hooks / work items / checks
                  │                                           │
                  ╰──────────── current work contract ─────────╯
```

[Amp Rebuilt](https://ampcode.com/news/neo) says the rebuilt CLI is remote-controllable, compaction-first, and plugin-powered: Amp now auto-compacts when context fills, Handoff is gone, and thread references still exist, so you can reference another thread and Amp will read it and extract relevant information.

The July sources make the same point for remote execution. [Agents in Orbs](https://ampcode.com/news/agents-in-orbs) describes fresh remote machines that contain your code, plugins, and tools; [Agents, Anywhere](https://ampcode.com/news/agents-anywhere) lets ampcode.com start new agents on an opted-in machine or headless runner. That makes environment state part of the work contract, not a local afterthought.

That does not mean "ignore context." It means the durable part should move out of chat when it has a job:

- `AGENTS.md` maps project conventions, commands, and constraints.
- Skills package task-specific guidance and resources.
- MCP tools can be bundled through skills to avoid bloating the always-visible tool surface.
- Thread references can pull relevant context from another Amp thread; [Read Bigger Threads](https://ampcode.com/news/read-bigger-threads) says the extraction path now searches long, compacted threads instead of trusting one giant prompt.
- Orbs run fresh clones and committed lifecycle hooks such as `.agents/setup` and `.agents/resume`; the [Orbs manual](https://ampcode.com/manual/orbs) frames those files as the repo's way to prepare a remote machine.
- Amp thread sharing currently supports private, workspace, group, and unlisted visibility; public discoverable sharing was removed because agent threads can contain sensitive snippets.
- Local work items such as `.agents/work/` in this repo are **not** an Amp product feature; they are durable repo-local state for multi-session work.

Amp can preserve and retrieve product context, and orbs can run the work somewhere else. Your repo still needs to preserve decisions, acceptance criteria, verification results, environment bootstrap paths, and the next action. That is why this site separates [durable repo memory](/posts/durable-context-coding-agents) from [small-thread work-item practice](/posts/small-threads-durable-state). The transcript sources agree: Raising an Agent episode 9 argues an "agent-native" codebase is one where the agent knows how to run, verify, authenticate, click around, inspect output, and recover when feedback is missing [00:10:18]-[00:17:24], and episode 10 shows the same move through skills and agent-optimized dev tooling [00:10:17]-[00:21:19].

## Make the factory prove its work

> Longer-running workers need faster reality checks.

```text
Do not ask the agent to be trustworthy.
Give it a loop where reality can say "no."
```

Factory-era agent work fails when the only sensor is a human reading a giant diff after the fact. Amp's current surfaces push proof closer to the work:

- [Diffs](https://ampcode.com/news/diffs) lets users review, request changes on, and stage thread changes directly in Amp; its own framing is "Outsource your coding, but not your understanding of the code."
- [Agents in Orbs](https://ampcode.com/news/agents-in-orbs) and the [Orbs manual](https://ampcode.com/manual/orbs) make remote work inspectable: users can browse files, review changes, open a terminal in the orb, and sync changes locally while the agent keeps working remotely.
- `amp review` and Checks make review a composable step rather than a one-off prompt.
- [Feedback Loopable](https://ampcode.com/notes/feedback-loopable) shows the practical pattern: build playgrounds, encode experiments in URL state, expose logs, add CLI/headless checks, and give the agent fast feedback it can understand.
- [Putting an Agent in an Orb](https://ampcode.com/notes/putting-an-agent-in-an-orb) shows the headless-machine version: setup hooks, dev-login endpoints, preflight JSON, shared logs, and saved screenshots let a remote agent prove UI and CLI flows instead of narrating them.
- [Mainframe Magic](https://ampcode.com/notes/mainframe-magic) shows the factory version: source maps, manifests, task queues, compiler gates, and smoke tests before a migrated program is marked complete.
- [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent) reduces the prompt contract to direction, reference, definition of done, and a feedback loop: "Trust isn't a feeling, it's a passing test suite."

Those examples are Amp-specific, but the lesson on the slide is general.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the full proof stack. The Amp version is shorter: if you want longer-running workers, invest in the checks, logs, fixtures, screenshots, CLIs, review surfaces, and human-comprehension gates that let those workers show their work.

## Orchestration is the frontier, and it is still high-churn

> More active agents require stronger triage, contracts, proof, and review.

```text
web/mobile/CLI control → active-thread triage
orbs and runners       → explicit environment contracts
spawned threads        → delegated work across projects and machines
messages and files     → explicit inputs and return paths
custom agents          → clearer delegation contracts
plugin hooks           → policy and proof closer to the loop
diff/review UI         → human understanding stays attached
```

Amp's direction is no longer "one assistant in one sidebar." [Agents, Everywhere](https://ampcode.com/news/agents-everywhere) describes watching and driving active Amp agents across web, mobile, and CLI. [Agents in Orbs](https://ampcode.com/news/agents-in-orbs) adds remote machines where agents can run without occupying your laptop. [More Orb Sizes](https://ampcode.com/news/more-orb-sizes) confirms that remote runtime is a project-level choice, and [Agents, Anywhere](https://ampcode.com/news/agents-anywhere) extends remote creation from ampcode.com to any opted-in machine or headless runner.

[From Agent to Agent](https://ampcode.com/news/from-agent-to-agent) turns those execution surfaces into reusable orchestration: spawned threads can cross projects and environments under the delegation contract above. The [Custom Agents](https://ampcode.com/news/custom-agents) announcement and the [Plugin API](https://ampcode.com/manual/plugin-api) provide the lower-level extension surface for creating agents, appending messages, waiting for responses, and connecting background work to a parent thread. [The Dial](https://ampcode.com/news/the-dial) adds the allocation control: choose low/medium/high/ultra capability by task difficulty, while plugins can still register custom modes — Amp even repackaged the deprecated modes as installable classic plugins on that same API.

That is the factory frontier: not one smarter worker, but many workers with contracts, state, environment boundaries, budgets, return paths, proof, and review. It is also the highest-churn part of the product — plugin APIs include experimental surfaces, and exact flags, orb shapes, model assignments, and UI details change — which is why this article avoids incidental details. Use the direction, not the details.

The transcript-backed sources explain why this matters. Raising an Agent episode 9 frames the shift as "the assistant is dead, long live the factory": feed agents tasks they are likely to succeed on, then improve the codebase so more tasks become safe to delegate [00:25:29]-[00:27:56]. Thorsten Ball's harness talk says the hard problem is increasingly where agents run, how their work is tracked, how results are preserved, and how humans coordinate many cheap workers [00:43:42]-[00:49:24].

## The contracts that survive

> Product details churn; task contracts are the durable lesson.

```text
uncertainty → delegation contract → proof loop → human judgment
```

Tool details change; the work contracts do not. When Amp changes again, keep these:

1. Size the task to the uncertainty.
2. Give every delegate a scope, environment, budget, return path, and proof target.
3. Keep product context separate from repo-local task state and environment setup.
4. Require proof before acceptance.
5. Preserve human judgment for consequences the agent cannot own.
6. Bound parallelism so the factory cannot create spend or review debt without a stop condition.
7. Treat orchestration APIs as frontier surfaces, not beginner defaults.

That is the pattern worth copying even when the product underneath it moves.

## Sources used

- Official Amp product sweep: [Amp Manual](https://ampcode.com/manual), [Amp Pricing](https://ampcode.com/pricing), [Amp Orbs manual](https://ampcode.com/manual/orbs), [Amp Plugin API](https://ampcode.com/manual/plugin-api), [Amp Models](https://ampcode.com/models), and [Amp Chronicle](https://ampcode.com/chronicle), verified 2026-07-17.
- Product announcements central to the surviving claims: [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent), [Subscriptions, At Last](https://ampcode.com/news/subscriptions), [Agents, Anywhere](https://ampcode.com/news/agents-anywhere), [The Dial](https://ampcode.com/news/the-dial), [Agents in Orbs](https://ampcode.com/news/agents-in-orbs), [Amp Rebuilt](https://ampcode.com/news/neo), [Custom Agents](https://ampcode.com/news/custom-agents), and [Diffs](https://ampcode.com/news/diffs).
- Amp workflow notes checked for feedback-loop and factory examples: [Putting an Agent in an Orb](https://ampcode.com/notes/putting-an-agent-in-an-orb), [Feedback Loopable](https://ampcode.com/notes/feedback-loopable), [Mainframe Magic](https://ampcode.com/notes/mainframe-magic), and [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent).
- Transcript-backed source anchors: [Amp founder interview](https://www.youtube.com/watch?v=_L8xxUXOTk0) [00:25:47]-[00:33:15]; [Raising an Agent episode 9](https://www.youtube.com/watch?v=2wjnV6F2arc) [00:10:18]-[00:17:24], [00:25:29]-[00:40:38]; [Raising an Agent episode 10](https://www.youtube.com/watch?v=4rx36wc9ugw) [00:10:17]-[00:27:57]; [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ) [00:36:43]-[00:49:24].
- Internal non-overlap anchors: [Agentic Coding in 2026](/posts/agentic-coding-2026), [Your Repo Is the Memory](/posts/durable-context-coding-agents), [Make the Agent Prove It](/posts/make-the-agent-prove-it), and [Small Threads, Durable State](/posts/small-threads-durable-state).
