---
title: 'Agentic Coding in 2026: A Practical Field Guide'
description: 'A source-backed map of agentic-coding workflows: alignment, proof, judgment boundaries, codebase infrastructure, context hygiene, and parallel execution.'
pubDate: 2026-06-28
updatedDate: 2026-08-15
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

The working definition is intentionally boring: **an agent is an LLM calling tools in a loop toward a goal.** It reads files, runs commands, edits code, observes the result, and loops until it can stop or should ask for help. Thorsten Ball, co-creator of Amp, makes the same point in harness terms: an agent is "just a loop," and the magic is that loop plus a model that knows how to drive it — prompt history, file context, and specialized tools are additions [00:41:36]-[00:43:42].

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

[Collaborative AI Engineering](https://www.youtube.com/watch?v=ClWD8OEYgp8) by Maggie Appleton, a staff research engineer at GitHub, is the cleanest source for the shift: implementation is becoming fast and cheap, so the hard question is no longer how to build it — it is "should we build it?" [00:01:53]-[00:02:42]. That does not remove planning. It moves planning onto the critical path.

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

Datasette creator Simon Willison's Pragmatic Summit workflow starts with red-green test-driven development: tell the agent how to run the tests, make it write or identify the failing proof, then implement only enough to pass [00:04:41]-[00:06:44]. He then makes agents exercise the real system — start the server, hit the API with curl — because passing tests do not prove a server boots or an API behaves [00:06:44]-[00:07:33]. For standards work he points agents at language-agnostic conformance suites [00:07:33]-[00:08:33]; for risky execution he stresses sandboxing [00:15:36]-[00:17:33] and mock data instead of production data [00:17:33]-[00:18:35].

The series rule is simple: no proof, no merge, and no treating an agent-edited
expectation as independent proof. Different tasks need different proof. A copy edit needs rendered output and a link check. A helper bug needs a failing test that turns green. A UI change may need a screenshot or trace. A parser or upload path may need fixtures or conformance checks. A security, migration, billing, or data change needs boundaries plus a human decision. The tactical ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it); the field-guide headline is to ask for evidence before the agent optimizes for being done.

## Keep good friction and shape the codebase as infrastructure

> Remove bad friction, but preserve the friction that routes consequences to people.

| Usually safe to delegate | Humans should explicitly own |
| --- | --- |
| Reversible internal edits, mechanical cleanup, narrow fixes with proof | Dependencies, permissions, migrations, reliability, security-sensitive changes, architecture shape |

That table is series synthesis of the two talks below, not a quote from either.

Armin Ronacher and Cristina Poncela Cubeiro of Earendil describe the trap: agent output creates pressure to ship faster, the next prompt feels addictive, and teams start mistaking fast output for efficient work [00:02:55]-[00:04:46]. The entities producing code now outnumber the ones who can carry responsibility for it [00:05:40]-[00:06:30], and agents optimize locally for code that runs; they do not feel the discomfort that warns an engineer about a fallback, hidden default, or brittle recovery path [00:06:30]-[00:08:25].

Good friction does not ask humans to approve every mechanical change. It routes the right decisions back to people: dependencies, permissions, database migrations, reliability, and system architecture [00:14:01]-[00:17:55]. Mario Zechner, creator of the Pi coding agent, draws the same line: low-risk or internal work can be delegated freely, while mission-critical, security-sensitive, and architectural work needs close oversight [00:08:20]-[00:11:07]. The test is simple: if the agent cannot own the consequence, a human must own the decision.

The codebase is part of that control surface, because it is part of the prompt: the patterns an agent can see shape what it writes. Poncela Cubeiro's advice is to lean into the patterns the model already knows instead of fighting its training [00:11:27]. Salvatore Sanfilippo gives a concrete first-person example from his `H3.c` video-generation project. He says a short brief pointed the agent to existing projects for the interface, internal design, kernels, and SSD streaming, producing a working base he later extended. The outcome was not independently assessed ([00:12:03–00:16:17](https://www.youtube.com/watch?v=j-Hh4i5R7aI&t=723s)).

Agents also do better when products expose modular boundaries, visible flow, simple cores, familiar patterns, and no hidden magic — Poncela Cubeiro's example: an ORM instead of raw SQL hides intent from the agent, and what the agent cannot see it cannot respect [00:10:30]-[00:12:17]. Agent-friendly infrastructure is boring engineering with a new payoff (this list is series synthesis):

- clear module and ownership boundaries
- obvious entry points and data flow
- examples worth copying and one preferred primitive per common job
- fast focused tests
- deterministic formatting, linting, typechecking, and pre-commit checks
- feedback hooks that let the agent verify behavior without waiting for a human

That last point matters more as loops get longer. Raising an Agent episode 9 frames an "agent-native" codebase as one where the agent knows how to run, verify, authenticate, click around, and inspect output [00:10:51]-[00:17:15]. Zechner shows the same from the low-level side: `AGENTS.md`-style instructions are suggestions the model can ignore, so linters, typecheckers, smoke tests, and pre-commit hooks enforce them deterministically, and tmux screenshot capture lets the agent smoke-test terminal UI work itself [00:39:13]-[00:42:44]. The synthesis is not "write more docs"; it is "make the correct path easier for the next loop to discover and verify."

[Agent-Ready Interfaces](/posts/agent-ready-interfaces) is the design deep dive:
how to expose composable operations, inspectable state, faithful feedback,
recovery, mutation gates, and a human return path.

## Keep exploration coherent and implementation bounded

> Let exploration accumulate useful context; start bounded implementation from accepted decisions.

```text
coherent exploration → critique → human decision → bounded implementation → evidence
```

Build Crew episode 7 shows two useful modes. A tiny directed thread works when the human knows exactly what should happen and can name the file, the constraints, and what the change should do [00:13:06]-[00:15:58]. A research flow works when uncertainty is high: analyze broadly, write reports, critique the design, narrow into a plan, then hand off to an implementation thread [00:18:54]-[00:24:12]. That illustrates a useful responsibility boundary, not a universal thread-size rule.

Thariq Shihipar of Anthropic offers a concrete way to start that research: ask the agent for a blind-spot pass over the relevant code and project context, use prototypes to expose preferences that are hard to describe, and let the agent interview you about questions that could change the architecture [00:10:09]-[00:12:58]. During implementation, ask it to log unknowns and deviations, then quiz you on the result so you can still explain the work you are about to merge [00:12:58]-[00:14:57].

Do not carry every exploratory transcript into implementation. Carry forward only the decision, relevant files, constraints, and proof target. [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) owns the operating procedure for `.agents/work/` work items, handoffs, progress logs, and verification records.

## Factory workflows raise the bar

> Parallel agents amplify the workflow you already have.

```text
task briefs → agent lanes → proof gate → human review
                    │
                    ╰─ durable work state keeps outputs recoverable
```

Longer-running work increasingly resembles a well-scoped brief reviewed later, not a continuous chat [00:02:48]-[00:09:39]. When workers can verify their own output and run in parallel, teams can send an agent to investigate a bug in the time it takes to file a ticket, and try more variants [00:25:50]-[00:30:05]. Ball identifies the next coordination problem: where agents run, how work is tracked and preserved, and how humans organize many always-available workers now that code is cheap to produce [00:43:42]-[00:49:24].

Concrete factory workflows may use spawned workers and remote review, but the contract is product-agnostic: bound the environment, inputs, budget, return path, proof, integration owner, and cleanup.

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
| Review needs stronger evidence, or an explanation disagrees with behavior | [Make the Agent Prove It](/posts/make-the-agent-prove-it) |
| Work needs a clearer responsibility boundary | [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) |
| Parallel work is creating merge or review debt | [Parallel Agents Need an Admission Policy](/posts/parallel-agents-need-an-admission-policy) |
| Agent activity is rising, but delivery value is unclear | [Measure Outcomes, Not Agent Activity](/posts/measure-outcomes-not-agent-activity) |
| You want the talks behind the series | [The coding-with-agents resource hub](/resources/coding-with-agents) |

## Sources used

- [Maggie Appleton, "Collaborative AI Engineering"](https://www.youtube.com/watch?v=ClWD8OEYgp8), especially [00:01:53]-[00:05:12] on cheap implementation, late alignment, and coordination debt.
- [Simon Willison, "Engineering Practices That Make Coding Agents Work"](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41]-[00:18:35] on red-green tests, real-system checks, conformance, sandboxing, and mock data.
- [Armin Ronacher and Cristina Poncela Cubeiro, "The Friction is Your Judgment"](https://www.youtube.com/watch?v=_Zcw_sVF6hU), especially [00:02:55]-[00:17:55] on review pressure, agent incentives, codebase shape, and human decision routing.
- [Mario Zechner, "Pi Building Pi, OpenClaw's Minimalist Coding Agent"](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:08:20]-[00:11:07] and [00:39:13]-[00:42:44] on risk-based delegation and deterministic checks.
- [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), especially [00:13:06]-[00:24:12] on small directed threads, research reports, critique, and handoff into implementation.
- [Raising an Agent episode 9, "The Assistant Is Dead, Long Live the Factory"](https://www.youtube.com/watch?v=2wjnV6F2arc), especially [00:10:51]-[00:17:15] and [00:25:50]-[00:30:05] on agent-native codebases, feedback loops, and factory-era workflows.
- [Raising an Agent episode 10, "Killing the Sidebar"](https://www.youtube.com/watch?v=4rx36wc9ugw), especially [00:02:48]-[00:09:39] on longer-running, well-scoped agent work.
- [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ), especially [00:41:36]-[00:49:24] on the agent loop and organizing many always-available agents whose code is cheap to produce.
- [Thariq Shihipar, "Field Guide to Fable"](https://www.youtube.com/watch?v=9fubhllmsBU), especially [00:10:09]-[00:14:57] on blind-spot passes, prototypes, interviews, implementation notes, and staying able to explain agent work.
- [Salvatore Sanfilippo, "AI FOMO, Part 1: What Actually Compounds"](https://www.youtube.com/watch?v=j-Hh4i5R7aI), especially [00:12:03]-[00:16:17] on using prior projects as implementation references. The talk is in Italian; the wording above is paraphrase, and the `H3.c` outcome is his project report, not an independent quality assessment.
