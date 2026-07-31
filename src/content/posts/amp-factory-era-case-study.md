---
title: 'Amp as a Factory-Era Coding-Agent Case Study'
description: 'A source-backed Amp case study for task sizing, delegation, remote and event-driven execution, identity, lifecycle controls, cost governance, proof loops, and review.'
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

Amp is the concrete case study here; the reusable lessons are task sizing, uncertainty, delegation, execution boundaries, identity, lifecycle controls, cost governance, context hygiene, proof, and review. The product details below were swept against Amp's current [Manual](https://ampcode.com/manual), [Orbs manual](https://ampcode.com/manual/orbs), [Models page](https://ampcode.com/models), [Plugin API](https://ampcode.com/manual/plugin-api), [Pricing page](https://ampcode.com/pricing), and [Chronicle](https://ampcode.com/chronicle) on 2026-07-31.

For the broader map, read [Agentic Coding in 2026](/posts/agentic-coding-2026). For durable repo-local memory, read [Your Repo Is the Memory](/posts/durable-context-coding-agents). For proof mechanics, read [Make the Agent Prove It](/posts/make-the-agent-prove-it). For small-thread operating practice, read [Small Threads, Durable State](/posts/small-threads-durable-state).

This article deliberately avoids setup walkthroughs, exact subscription and orb quotas, model wiring, webhook limits, multiplayer durations, UI shortcuts, token thresholds, and installation commands. Those details churn too quickly. It keeps only product facts that expose a durable work contract.

## Set the dial by uncertainty, not urgency

> Choose worker capability by how much the agent has to figure out.

[The Dial](https://ampcode.com/news/the-dial) replaced Amp's old `smart`, `deep`, `rush`, and `large` names with four built-in tiers: `low`, `medium`, `high`, and `ultra` (reverified 2026-07-31). Treat the dial as a work contract, not a prestige setting.

| Work shape | Amp surface | Useful contract |
| --- | --- | --- |
| Exact, bounded, known-done task | `low` | "Find the relevant files, make the smallest correct change, run the focused check, and stop." |
| Messy default implementation work | `medium` | "Use the repo context, handle the parts I did not spell out, verify, and summarize tradeoffs." |
| Hard change in a known area | `high` | "Be more careful on cross-cutting or subtle work; expect review feedback before merge." |
| Clear outcome, unknown path | `ultra` | "Research more, span many files/systems, surface decisions, and return with evidence." |
| Second opinion, critique, or adversarial review | Oracle | "Inspect the plan, bug, diff, or design and tell me what I am missing." |

[Who Cares About the Model?](https://ampcode.com/news/who-cares-about-the-model) reports that Amp changed the default model behind the Dial with no complaints, and almost no one installed the classic-mode plugins that restored the old defaults. That is product telemetry, not a controlled quality study. The narrower lesson is useful: let users specify task difficulty while the product owns volatile model routing; the team still owns context and review.

**Oracle is still a critique contract, not the implementation worker.** The Dial says every built-in tier has an oracle backing second opinions, and the manual describes Oracle as a "second opinion" model for complex reasoning or analysis. Use that before or after implementation; do not confuse reviewer capacity with ownership of the edit.

**Cost belongs in the same contract.** Amp offers [optional monthly subscriptions](https://ampcode.com/news/subscriptions) with included agent and orb usage, while [pay-as-you-go remains available](https://ampcode.com/pricing) at [provider API prices with zero markup](https://ampcode.com/manual#pricing) for individuals and non-enterprise workspaces (reverified 2026-07-31). Either way, dial tier, fan-out, recurring schedules, and event-triggered wake-ups are budget choices. Set the worker count, capability, stop condition, and evidence before the work starts.

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

Amp's manual supports subagents, Oracle, Librarian, review, and Checks, but each has a different boundary.

**Subagents are for independent work.** They have their own context and can do multi-step work, but they are isolated: they cannot communicate, you cannot guide them mid-task, and the main agent receives only their final summary. Give each subagent its files, scope, proof target, and expected summary; integrate the result in the main thread.

[From Agent to Agent](https://ampcode.com/news/from-agent-to-agent) adds a different primitive: an agent can spawn addressable Amp threads in an orb, locally, or on another runner, then exchange messages and files. The stronger primitive needs a stronger contract:

```text
Name the target project and execution environment.
Send only the files and context the worker needs.
Set a budget, stop condition, proof target, and return message.
Keep integration ownership in one place.
```

**Oracle is for critique and hard judgment.** Ask it to stress-test a plan, migration, bug, or diff when the main agent might make the locally obvious but globally wrong edit.

**Librarian is for external code research.** The manual says Librarian can search public GitHub and connected private GitHub repositories, and that it searches only the default branch. That makes it a research tool, not a source of truth for your working tree: use it for "how does this framework really implement X?", then verify locally.

**Review and Checks turn critique into a repeatable gate.** Amp can review through `amp review` or the main agent; Checks encode scoped criteria in `.agents/checks/` and run separate review agents per check.

The reusable pattern is ownership, not agent count. Quinn Slack draws the same risk boundary between core API/data work that needs human scrutiny and low-risk internal tools that can tolerate more delegation [00:25:47]-[00:30:37].

## Context is product state plus repo state

> Product context helps, but remote agents still need repo-local setup and decisions.

```text
Amp threads / skills / plugins / orbs  +  AGENTS.md / setup hooks / work items / checks
                  │                                           │
                  ╰──────────── current work contract ─────────╯
```

[Amp Rebuilt](https://ampcode.com/news/neo) describes a remote-controllable, compaction-first, plugin-powered CLI: Amp auto-compacts, Handoff is gone, and thread references remain.

The current remote-execution sources make the same point. [Agents in Orbs](https://ampcode.com/news/agents-in-orbs) describes fresh remote machines containing code, plugins, and tools; [Agents, Anywhere](https://ampcode.com/news/agents-anywhere) lets ampcode.com start agents on an opted-in machine or headless runner. That makes environment state part of the work contract, not a local afterthought.

That does not mean "ignore context." It means the durable part should move out of chat when it has a job:

- `AGENTS.md` maps project conventions, commands, and constraints.
- Skills package task-specific guidance and can lazy-load MCP tools instead of bloating the always-visible tool surface.
- Thread references can pull relevant context from another Amp thread; [Read Bigger Threads](https://ampcode.com/news/read-bigger-threads) says the extraction path now searches long, compacted threads instead of trusting one giant prompt.
- Orbs run fresh clones and committed lifecycle hooks such as `.agents/setup` and `.agents/resume`; the [Orbs manual](https://ampcode.com/manual/orbs) frames those files as the repo's way to prepare a remote machine.
- Remote identity and collaboration are separate boundaries. OIDC can grant an orb short-lived access, while multiplayer can temporarily grant workspace members access to its live environment; neither replaces least privilege.
- Amp thread sharing supports private, workspace, group, and unlisted visibility. That is distinct from multiplayer access to an orb's files, portals, secrets, and terminal.
- Local work items such as `.agents/work/` in this repo are **not** an Amp product feature; they are durable repo-local state for multi-session work.

Amp can retrieve thread context and run work elsewhere. Your repo still needs decisions, acceptance criteria, verification results, bootstrap paths, and the next action. That is why this site separates [durable repo memory](/posts/durable-context-coding-agents) from [small-thread work-item practice](/posts/small-threads-durable-state). Raising an Agent episodes 9 and 10 make the same move through run/verify/authenticate affordances, skills, and agent-optimized dev tooling [00:10:18]-[00:17:24], [00:10:17]-[00:21:19].

## Make the factory prove its work

> Longer-running workers need faster reality checks.

```text
Do not ask the agent to be trustworthy.
Give it a loop where reality can say "no."
```

Factory-era agent work fails when the only sensor is a human reading a giant diff after the fact. Amp's current surfaces push proof closer to the work:

- [Diffs](https://ampcode.com/news/diffs), `amp review`, and Checks bring human review and repeatable criteria closer to the thread.
- [Agents in Orbs](https://ampcode.com/news/agents-in-orbs) and the [Orbs manual](https://ampcode.com/manual/orbs) make remote work inspectable: users can browse files, review changes, open a terminal in the orb, and sync changes locally while the agent keeps working remotely.
- [Feedback Loopable](https://ampcode.com/notes/feedback-loopable) and [Putting an Agent in an Orb](https://ampcode.com/notes/putting-an-agent-in-an-orb) use playgrounds, logs, CLI checks, setup hooks, preflight data, and screenshots to give local and remote agents feedback they can understand.
- [Mainframe Magic](https://ampcode.com/notes/mainframe-magic) shows the factory version: source maps, manifests, task queues, compiler gates, and smoke tests before a migrated program is marked complete.
- [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent) reduces the prompt contract to direction, reference, definition of done, and a feedback loop: "Trust isn't a feeling, it's a passing test suite."

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the full proof stack. The Amp version is shorter: if you want longer-running workers, invest in the checks, logs, fixtures, screenshots, CLIs, review surfaces, and human-comprehension gates that let those workers show their work.

## Orchestration is becoming a service boundary

> Once agents wake on time or events, operational safety matters as much as prompt quality.

```text
Puck / Slack         → triage and launch
schedules / events   → controlled wake-ups
orbs / runners       → identity and environment boundaries
spawned threads      → delegated work across projects and machines
multiplayer          → temporary shared control
checks / diffs       → proof and human understanding
```

Amp's direction is no longer "one assistant in one sidebar." [Agents, Everywhere](https://ampcode.com/news/agents-everywhere) and [Agents, Anywhere](https://ampcode.com/news/agents-anywhere) let users watch, drive, and start agents across web, CLI, mobile, or an opted-in runner. [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent) lets those agents spawn addressable threads across projects and environments. [Meet Puck](https://ampcode.com/news/meet-puck) and [Amp in Slack](https://ampcode.com/news/slack-integration) add an experimental coordinator and another place to request or route work.

[Right on Schedule](https://ampcode.com/news/schedule) and [Event Driven Orbs](https://ampcode.com/news/event-driven-orbs) remove the need for a person to launch every turn. A thread can wake from a saved schedule or an external HTTP event, keep its context, continue the owning thread, or start another worker. These features compose with Puck, Slack, skills, and spawned threads, so a recurring task can also become recurring fan-out.

That composition changes the safety contract. Amp's event-driven GitHub example verifies the provider signature, deduplicates delivery, passes trusted metadata separately, and treats issue text as untrusted content rather than agent instructions. The current Plugin API marks durable webhooks experimental and documents at-least-once delivery, so effects must be idempotent. A schedule likewise needs a completion condition and cleanup path; "run every hour" is not a stop condition.

[Secrets of the Orb](https://ampcode.com/news/secrets-of-the-orb) adds short-lived OIDC workload identity, but the audience alone is not authorization: the receiving service still has to verify the token and constrain workspace, project, user, or thread claims. [Multiplayer](https://ampcode.com/news/multiplayer) temporarily lets workspace members steer the agent and access an orb's files, changes, portals, secrets, and terminal, with costs assigned to the thread owner. Identity, access, expiry, and billing ownership are therefore part of the environment contract.

```text
Authenticate the trigger and separate trusted metadata from untrusted content.
Grant the narrowest identity and execution permissions that work.
Make retries and duplicate delivery safe.
Name the owner, budget, output, escalation path, and proof target.
Expire shared access; stop schedules and webhooks when their job is done.
```

Amp's core custom-agent and mode APIs are now first-class plugin surfaces; durable webhooks remain experimental. Exact signatures, limits, model assignments, and UI details will change. The durable lesson is to treat scheduled and event-driven agents like services with operational contracts, not prompts that happen to run later.

The transcript-backed sources explain why this matters. Raising an Agent episode 9 frames the shift as "the assistant is dead, long live the factory": feed agents tasks they are likely to succeed on, then improve the codebase so more tasks become safe to delegate [00:25:29]-[00:27:56]. Thorsten Ball's harness talk says the hard problem is increasingly where agents run, how their work is tracked, how results are preserved, and how humans coordinate many cheap workers [00:43:42]-[00:49:24].

## The contracts that survive

> Product details churn; task contracts are the durable lesson.

```text
uncertainty → delegation contract → proof loop → human judgment
```

Tool details change; the work contracts do not. When Amp changes again, keep these:

1. Size the task to the uncertainty.
2. Give every delegate or trigger a scope, owner, budget, return path, and proof target.
3. Separate trusted metadata from untrusted content, and make retries idempotent.
4. Grant the narrowest identity and access; make temporary access expire.
5. Keep product context separate from repo-local state, environment setup, and cleanup instructions.
6. Require proof before acceptance and human judgment where consequences demand it.
7. Bound parallelism and recurrence so the factory cannot create spend or review debt without a stop condition.

That is the pattern worth copying even when the product underneath it moves.

## Sources used

- Official Amp product sweep: [Amp Manual](https://ampcode.com/manual), [Amp Pricing](https://ampcode.com/pricing), [Amp Orbs manual](https://ampcode.com/manual/orbs), [Amp Plugin API](https://ampcode.com/manual/plugin-api), [Amp Models](https://ampcode.com/models), and [Amp Chronicle](https://ampcode.com/chronicle), verified 2026-07-31.
- Product announcements central to the surviving claims: [Who Cares About the Model?](https://ampcode.com/news/who-cares-about-the-model), [Event Driven Orbs](https://ampcode.com/news/event-driven-orbs), [Multiplayer](https://ampcode.com/news/multiplayer), [Right on Schedule](https://ampcode.com/news/schedule), [Meet Puck](https://ampcode.com/news/meet-puck), [Amp in Slack](https://ampcode.com/news/slack-integration), [Secrets of the Orb](https://ampcode.com/news/secrets-of-the-orb), [From Agent to Agent](https://ampcode.com/news/from-agent-to-agent), [Subscriptions, At Last](https://ampcode.com/news/subscriptions), [Agents, Anywhere](https://ampcode.com/news/agents-anywhere), [The Dial](https://ampcode.com/news/the-dial), [Agents in Orbs](https://ampcode.com/news/agents-in-orbs), [Amp Rebuilt](https://ampcode.com/news/neo), and [Diffs](https://ampcode.com/news/diffs).
- Amp workflow notes checked for feedback-loop and factory examples: [Putting an Agent in an Orb](https://ampcode.com/notes/putting-an-agent-in-an-orb), [Feedback Loopable](https://ampcode.com/notes/feedback-loopable), [Mainframe Magic](https://ampcode.com/notes/mainframe-magic), and [How to Pair With an Agent](https://ampcode.com/notes/how-to-pair-with-an-agent).
- Transcript-backed source anchors: [Amp founder interview](https://www.youtube.com/watch?v=_L8xxUXOTk0) [00:25:47]-[00:33:15]; [Raising an Agent episode 9](https://www.youtube.com/watch?v=2wjnV6F2arc) [00:10:18]-[00:17:24], [00:25:29]-[00:40:38]; [Raising an Agent episode 10](https://www.youtube.com/watch?v=4rx36wc9ugw) [00:10:17]-[00:27:57]; [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ) [00:36:43]-[00:49:24].
- Internal non-overlap anchors: [Agentic Coding in 2026](/posts/agentic-coding-2026), [Your Repo Is the Memory](/posts/durable-context-coding-agents), [Make the Agent Prove It](/posts/make-the-agent-prove-it), and [Small Threads, Durable State](/posts/small-threads-durable-state).
