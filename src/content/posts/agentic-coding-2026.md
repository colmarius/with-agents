---
title: 'Agentic Coding in 2026: A Practical Field Guide'
description: 'A source-backed map of agentic-coding workflows: alignment, proof, judgment boundaries, codebase infrastructure, context hygiene, and parallel execution.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: 2
---

## Agentic coding in 2026 is an alignment problem

> The hard part is no longer asking an agent for code; it is deciding the work, proof, and judgment boundaries.

```text
intent → constraints → proof → human judgment
                  │
                  ╰─ agent loop: act, observe, adjust
```

This article is the map for the series.

The working definition is intentionally boring: **an agent is an LLM calling tools in a loop toward a goal.** It reads files, runs commands, edits code, observes the result, and loops until it can stop or should ask for help. Thorsten Ball makes the same point in harness terms: the magic is "just a loop" plus model capability, context, and tools [00:41:36]-[00:43:42].

```text
goal → choose tool → act → observe → adjust
   ▲                                  │
   ╰──────────── stop, prove, or ask ◀╯
```

## Cheap code moves the bottleneck to alignment

> If code got cheap, alignment cannot stay implicit.

```text
issue → private plan → fast PR
          ▲              │
          ╰─ share intent, constraints, decisions, and evidence before review
```

Maggie Appleton's [Collaborative AI Engineering](https://www.youtube.com/watch?v=ClWD8OEYgp8) is the cleanest source for the shift: implementation is becoming fast and cheap, so the hard question moves from "can we build it?" to "should we build it?" [00:01:53]-[00:02:42]. That does not remove planning. It moves planning onto the critical path.

Her warning is that the implementation window has collapsed while the alignment machinery has not caught up. Issues turn into pull requests in minutes, local plan modes stay private, and the pull request becomes the first shared checkpoint when it is already late [00:03:35]-[00:05:12]. The cost shows up as wasted work, duplicated work, merge conflicts, surprise features, and review queues nobody understands [00:04:24]-[00:05:12].

Put intent, constraints, decisions, and evidence where the next person or agent can find them before the diff becomes the only artifact. The deeper version lives in [Your Repo Is the Memory](/posts/durable-context-coding-agents): repo-local context is the control loop that keeps fast implementation attached to shared truth.

## Make proof non-optional

> Trust is a proof stack, not a feeling.

```text
human judgment
     ↑
risk boundaries
     ↑
real system behavior
     ↑
targeted tests
```

Simon Willison's Pragmatic Summit workflow starts with red-green test-driven development: tell the agent how to run the tests, make it write or identify the failing proof, then implement only enough to pass [00:04:41]-[00:06:44]. He then makes agents exercise the real system, because passing tests do not prove a server boots or an API behaves [00:06:44]-[00:07:33]. For standards work he uses conformance suites; for risky execution he stresses sandboxing and mock data instead of production data [00:07:33]-[00:18:35].

The series rule is simple: no proof, no merge. Different tasks need different proof. A copy edit needs rendered output and a link check. A helper bug needs a failing test that turns green. A UI change may need a screenshot or trace. A parser or upload path may need fixtures or conformance checks. A security, migration, billing, or data change needs boundaries plus a human decision. The tactical ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it); the field-guide headline is to ask for evidence before the agent optimizes for being done.

## Keep good friction and shape the codebase as infrastructure

> Remove bad friction, but preserve the friction that routes consequences to people.

| Usually safe to delegate | Humans should explicitly own |
| --- | --- |
| Reversible internal edits, mechanical cleanup, narrow fixes with proof | Dependencies, permissions, migrations, reliability, security and data boundaries, public API or architecture shape |

Armin Ronacher and Cristina Poncela Cubeiro describe the trap: agent output creates pressure to ship faster, the next prompt feels addictive, and teams start mistaking fast output for efficient work [00:02:55]-[00:04:46]. Code production outnumbers the people who can responsibly review it [00:05:40]-[00:06:30], and agents optimize locally for code that runs; they do not feel the discomfort that warns a senior engineer about a fallback, hidden default, or brittle recovery path [00:06:30]-[00:08:25].

Good friction does not ask humans to approve every mechanical change. It routes the right decisions back to people: dependencies, permissions, migrations, reliability, security and data boundaries, and public API or architecture shape [00:14:01]-[00:17:55]. Mario Zechner's Pi/OpenClaw workflow draws the same line: low-risk or internal work can be delegated freely, while mission-critical, security-sensitive, and architectural work needs close oversight [00:06:45]-[00:11:14]. The test is simple: if the agent cannot own the consequence, a human must own the decision.

The codebase is part of that control surface, because it is part of the prompt. Agents copy existing patterns: templates, tests, READMEs, CI setup, and high-quality examples shape later output [00:10:39]-[00:12:35]. Agents also do better when products expose modular boundaries, visible flow, simple cores, familiar patterns, and less hidden magic [00:10:30]-[00:12:17]. Agent-friendly infrastructure is boring engineering with a new payoff:

- clear module and ownership boundaries
- obvious entry points and data flow
- examples worth copying and one preferred primitive per common job
- fast focused tests
- deterministic formatting, linting, typechecking, and pre-commit checks
- feedback hooks that let the agent verify behavior without waiting for a human

That last point matters more as loops get longer. Raising an Agent episode 9 frames an "agent-native" codebase as one where the agent knows how to run, verify, authenticate, click around, and inspect output [00:10:18]-[00:17:24]. Zechner shows the same from the low-level side: `AGENTS.md`-style instructions help, but linters, typecheckers, smoke tests, and terminal/browser capture make failure deterministic [00:37:03]-[00:42:55]. The synthesis is not "write more docs"; it is "make the correct path easier for the next loop to discover and verify."

[Agent-Ready Interfaces](/posts/agent-ready-interfaces) is the design deep dive:
how to expose composable operations, inspectable state, faithful feedback,
recovery, mutation gates, and a human return path.

## Keep context wide and implementation narrow

> Research wide, implement narrow, and preserve the state between them.

```text
wide research → critique → human decision → narrow implementation → evidence
```

Build Crew episode 7 shows two useful modes. A tiny directed thread works when the human knows exactly what should happen and can name the files, constraints, and expected output [00:13:06]-[00:15:58]. A research flow works when uncertainty is high: analyze broadly, write reports, critique the design, narrow into a plan, then hand off to an implementation thread [00:18:54]-[00:24:12]. That gives the durable pattern shown above.

Thariq Shihipar offers a concrete way to start that research: ask the agent for a blind-spot pass over the relevant code and project context, use prototypes to expose preferences that are hard to describe, and let the agent interview you about questions that could change the architecture [00:10:09]-[00:12:58]. During implementation, ask it to log unknowns and deviations, then quiz you on the result so you can still explain the work you are about to merge [00:12:58]-[00:14:57].

Do not carry every exploratory transcript into implementation. Carry forward only the decision, relevant files, constraints, and proof target. [Small Threads, Durable State](/posts/small-threads-durable-state) owns the operating procedure for `.agents/work/` work items, handoffs, progress logs, and verification records.

## Factory workflows raise the bar

> Parallel agents amplify the workflow you already have.

```text
task briefs → agent lanes → proof gate → human review
                    │
                    ╰─ durable work state keeps outputs recoverable
```

Longer-running work increasingly resembles a well-scoped brief reviewed later, not a continuous chat [00:00:55]-[00:10:17]. When workers can fetch context, verify work, and run in parallel, teams can investigate sooner and try more variants [00:25:29]-[00:31:43]. Ball identifies the next coordination problem: where agents run, how work is tracked and preserved, and how humans coordinate many cheap workers [00:43:42]-[00:49:24].

The [Amp case study](/posts/amp-factory-era-case-study) uses spawned workers and remote review as one concrete example. The synthesis is product-agnostic: bound the environment, inputs, budget, return path, proof, integration owner, and cleanup.

So the factory-era checklist is not "launch more agents." It is:

- feed agents tasks that are likely to succeed
- improve the codebase so more tasks become safe to delegate
- preserve useful work state instead of losing it in chats
- require evidence before accepting output
- route irreversible or high-risk decisions to humans
- constrain workflows that create review debt faster than the team can absorb it

## Where to go next

> Pick the article that matches the bottleneck you are actually feeling.

| If the pain is... | Read... |
| --- | --- |
| Shared context keeps disappearing | [Your Repo Is the Memory](/posts/durable-context-coding-agents) |
| The agent cannot operate or verify your system cleanly | [Agent-Ready Interfaces](/posts/agent-ready-interfaces) |
| Review needs stronger evidence | [Make the Agent Prove It](/posts/make-the-agent-prove-it) |
| A model explanation is plausible, but behavior disagrees | [Behavior Over Explanation](/posts/behavior-over-explanation) |
| Threads are too large to restart | [Small Threads, Durable State](/posts/small-threads-durable-state) |
| Parallel work is creating merge or review debt | [Parallel Agents Need an Admission Policy](/posts/parallel-agents-need-an-admission-policy) |
| Agent activity is rising, but delivery value is unclear | [Measure Outcomes, Not Agent Activity](/posts/measure-outcomes-not-agent-activity) |
| You want a concrete tool case study | [Amp as a Factory-Era Case Study](/posts/amp-factory-era-case-study) |
| You want the talks behind the series | [The coding-with-agents resource hub](/resources/coding-with-agents) |

## Sources used

- [Maggie Appleton, "Collaborative AI Engineering"](https://www.youtube.com/watch?v=ClWD8OEYgp8), especially [00:01:53]-[00:05:12] on cheap implementation, late alignment, and coordination debt.
- [Simon Willison, "Engineering Practices That Make Coding Agents Work"](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41]-[00:18:35] on red-green tests, real-system checks, conformance, sandboxing, and mock data.
- [Armin Ronacher and Cristina Poncela Cubeiro, "The Friction is Your Judgment"](https://www.youtube.com/watch?v=_Zcw_sVF6hU), especially [00:02:55]-[00:17:55] on review pressure, agent-generated entropy, codebase infrastructure, and human decision routing.
- [Mario Zechner, "Pi Building Pi, OpenClaw's Minimalist Coding Agent"](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:06:45]-[00:11:14] and [00:37:03]-[00:42:55] on risk-based delegation and deterministic checks.
- [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), especially [00:13:06]-[00:24:12] on small directed threads, research reports, critique, and handoff into implementation.
- [Raising an Agent episode 9, "The Assistant Is Dead, Long Live the Factory"](https://www.youtube.com/watch?v=2wjnV6F2arc), especially [00:10:18]-[00:17:24] and [00:25:29]-[00:31:43] on agent-native codebases, feedback loops, and factory-era workflows.
- [Raising an Agent episode 10, "Killing the Sidebar"](https://www.youtube.com/watch?v=4rx36wc9ugw), especially [00:00:55]-[00:10:17] on longer-running, well-scoped agent work.
- [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ), especially [00:41:36]-[00:49:24] on the agent loop and coordinating many cheap agents.
- [Thariq Shihipar, "Field Guide to Fable"](https://www.youtube.com/watch?v=9fubhllmsBU), especially [00:10:09]-[00:14:57] on blind-spot passes, prototypes, interviews, implementation notes, and staying able to explain agent work.
