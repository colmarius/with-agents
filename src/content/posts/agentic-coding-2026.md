---
title: 'Agentic Coding in 2026: A Practical Field Guide'
description: 'A source-backed map of the current agentic-coding workflow: alignment, proof, friction, codebase infrastructure, context hygiene, small tasks, and factory-era orchestration.'
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

The old field-guide question was "how do I get a coding agent to write code?"

The 2026 question is sharper: **what work should the agent do, what evidence should it produce, and what should stay in human judgment?**

This article is the map for the series. It is grounded in the source talks listed at the end, then points to deeper articles for the parts that deserve their own operating procedure:

- [Your Repo Is the Memory](/posts/durable-context-coding-agents) for durable repo-local context.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) for proof-stack mechanics.
- [Small Threads, Durable State](/posts/small-threads-durable-state) for handoffs, work items, and context hygiene.
- [Amp as a Factory-Era Case Study](/posts/amp-factory-era-case-study) for one tool worked through end to end.
- [The coding-with-agents resource hub](/resources/coding-with-agents) for the underlying talks and summaries.

The working definition is intentionally boring: **an agent is an LLM calling tools in a loop toward a goal.** It reads files, runs commands, edits code, observes the result, and loops until it can stop or should ask for help. Thorsten Ball makes the same point in harness terms: the magic is "just a loop" plus model capability, context, and tools [00:41:36]-[00:43:42].

```text
goal → choose tool → act → observe → adjust
   ▲                                  │
   ╰──────────── stop, prove, or ask ◀╯
```

The loop is simple. The hard part is making it serve the right work.

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

Cheap code is only useful when the result can be checked.

Simon Willison's Pragmatic Summit workflow starts with red-green test-driven development: tell the agent how to run the tests, make it write or identify the failing proof, then implement only enough to pass [00:04:41]-[00:06:44]. He then makes agents exercise the real system, because passing tests do not prove a server boots or an API behaves [00:06:44]-[00:07:33]. For standards work he uses conformance suites; for risky execution he stresses sandboxing and mock data instead of production data [00:07:33]-[00:18:35].

The series rule is simple: no proof, no merge. Different tasks need different proof. A copy edit needs rendered output and a link check. A helper bug needs a failing test that turns green. A UI change may need a screenshot or trace. A parser or upload path may need fixtures or conformance checks. A security, migration, billing, or data change needs boundaries plus a human decision. The tactical ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it); the field-guide headline is to ask for evidence before the agent optimizes for being done.

## Keep good friction and shape the codebase as infrastructure

> Remove bad friction, but preserve the friction that routes consequences to people.

| Usually safe to delegate | Humans should explicitly own |
| --- | --- |
| Reversible internal edits, mechanical cleanup, narrow fixes with proof | Dependencies, permissions, migrations, reliability, security and data boundaries, public API or architecture shape |

"Remove friction" is the wrong default when generation outpaces review.

Armin Ronacher and Cristina Poncela Cubeiro describe the trap: agent output creates pressure to ship faster, the next prompt feels addictive, and teams start mistaking fast output for efficient work [00:02:55]-[00:04:46]. Code production outnumbers the people who can responsibly review it [00:05:40]-[00:06:30], and agents optimize locally for code that runs; they do not feel the discomfort that warns a senior engineer about a fallback, hidden default, or brittle recovery path [00:06:30]-[00:08:25].

Good friction does not ask humans to approve every mechanical change. It routes the right decisions back to people: dependencies, permissions, migrations, reliability, security and data boundaries, and public API or architecture shape [00:14:01]-[00:17:55]. Mario Zechner's Pi/OpenClaw workflow draws the same line: low-risk or internal work can be delegated freely, while mission-critical, security-sensitive, and architectural work needs close oversight [00:06:45]-[00:11:14]. The test is simple: if the agent cannot own the consequence, a human must own the decision.

The codebase is part of that control surface, because it is part of the prompt. Agents copy existing patterns: templates, tests, READMEs, CI setup, and high-quality examples shape later output [00:10:39]-[00:12:35]. Agents also do better when products expose modular boundaries, visible flow, simple cores, familiar patterns, and less hidden magic [00:10:30]-[00:12:17]. Agent-friendly infrastructure is boring engineering with a new payoff:

- clear module and ownership boundaries
- obvious entry points and data flow
- examples worth copying and one preferred primitive per common job
- fast focused tests
- deterministic formatting, linting, typechecking, and pre-commit checks
- feedback hooks that let the agent verify behavior without waiting for a human

That last point matters more as loops get longer. Raising an Agent episode 9 frames an "agent-native" codebase as one where the agent knows how to run, verify, authenticate, click around, inspect output, and recover when feedback is missing [00:10:18]-[00:17:24]. Zechner shows the same from the low-level side: `AGENTS.md`-style instructions help, but linters, typecheckers, smoke tests, and terminal/browser capture make failure deterministic [00:37:03]-[00:42:55]. The synthesis is not "write more docs"; it is "make the correct path easier for the next loop to discover and verify."

## Keep context wide, implementation narrow, and start small

> Research wide, implement narrow, and preserve the state between them.

```text
wide research → critique → human decision → narrow implementation → evidence
```

One long thread should not be responsible for everything.

Build Crew episode 7 shows two useful modes. A tiny directed thread works when the human knows exactly what should happen and can name the files, constraints, and expected output [00:13:06]-[00:15:58]. A research flow works when uncertainty is high: analyze broadly, write reports, critique the design, narrow into a plan, then hand off to an implementation thread [00:18:54]-[00:24:12]. That gives the durable pattern shown above.

Do not carry every exploratory transcript into the implementation loop. Carry the decision, the relevant files, the constraints, and the proof target. [Small Threads, Durable State](/posts/small-threads-durable-state) owns the operating procedure for `.agents/work/` work items, handoffs, progress logs, and verification records.

The way in is one small verified task, not a factory:

1. Pick one real task with a clear "done" signal.
2. Define the proof before editing.
3. Let the agent loop on that proof.
4. Review the diff.
5. Stop when the evidence is enough.

Good starter tasks verify quickly: fix one failing test and rerun it, remove debug statements and run the project check, add one missing UI state and inspect the render, document one command the agent keeps missing, or reproduce one bug and capture the evidence before the fix. Use a prompt like this:

```text
Pick the smallest check that would prove this task.
Show the failing behavior or current output first.
Make the smallest change.
Run the targeted check again, then the project-level check if relevant.
End with files changed, commands run, results, and any known gaps.
```

That pattern is supported by Willison's test-first and manual-check workflow [00:04:41]-[00:07:33], Build Crew's small directed threads [00:13:06]-[00:15:58], and the Raising an Agent feedback-loop discussion [00:10:18]-[00:17:24].

## Factory workflows are emerging, but they raise the bar

> Parallel agents amplify the workflow you already have.

```text
task briefs → agent lanes → proof gate → human review
                    │
                    ╰─ durable work state keeps outputs recoverable
```

The frontier is moving from "one assistant beside one developer" toward longer-running, parallel, factory-like workflows. Treat that as an emerging direction, not a shortcut around alignment and review.

Raising an Agent episode 9 frames the shift as "the assistant is dead, long live the factory": if agents can take a longer leash, fetch context, verify work, and run in parallel, teams can investigate more immediately and try more variants [00:25:29]-[00:31:43]. Episode 10 makes it concrete: some agent work is becoming less like a rapid chat and more like writing a well-scoped brief, sending the agent away, and checking the result later [00:00:55]-[00:10:17]. Ball's harness argument points to the same next problem: as model capability absorbs old harness tricks, the hard question shifts to where agents run, how work is tracked and preserved, and how humans coordinate many cheap workers [00:36:43]-[00:49:24].

So the factory-era checklist is not "launch more agents." It is:

- feed agents tasks that are likely to succeed
- improve the codebase so more tasks become safe to delegate
- preserve useful work state instead of losing it in chats
- require evidence before accepting output
- route irreversible or high-risk decisions to humans
- constrain workflows that create review debt faster than the team can absorb it

Parallelism amplifies whatever system you already have. Weak alignment, proof, friction, infrastructure, and context hygiene mean more agents produce more debt. Strong loops make more agents a real lever. [Amp as a Factory-Era Case Study](/posts/amp-factory-era-case-study) works one tool through these contracts.

## Where to go next

> Pick the article that matches the bottleneck you are actually feeling.

| If the pain is... | Read... |
| --- | --- |
| Shared context keeps disappearing | [Your Repo Is the Memory](/posts/durable-context-coding-agents) |
| Review needs stronger evidence | [Make the Agent Prove It](/posts/make-the-agent-prove-it) |
| Threads are too large to restart | [Small Threads, Durable State](/posts/small-threads-durable-state) |
| You want a concrete tool case study | [Amp as a Factory-Era Case Study](/posts/amp-factory-era-case-study) |
| You want the talks behind the series | [The coding-with-agents resource hub](/resources/coding-with-agents) |

The through-line is simple: align before code is cheap, prove before merge, keep useful friction, shape the codebase as infrastructure, keep context hygienic, start with one verified task, and only then scale into factory workflows. From here, follow the deeper article that matches your current pain point.

## Sources used

- [Maggie Appleton, "Collaborative AI Engineering"](https://www.youtube.com/watch?v=ClWD8OEYgp8), especially [00:01:53]-[00:06:49] on cheap implementation, late alignment, and coordination debt.
- [Simon Willison, "Engineering Practices That Make Coding Agents Work"](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41]-[00:18:35] on red-green tests, real-system checks, conformance, sandboxing, and mock data.
- [Armin Ronacher and Cristina Poncela Cubeiro, "The Friction is Your Judgment"](https://www.youtube.com/watch?v=_Zcw_sVF6hU), especially [00:02:55]-[00:17:55] on review pressure, agent-generated entropy, codebase infrastructure, and human decision routing.
- [Mario Zechner, "Pi Building Pi, OpenClaw's Minimalist Coding Agent"](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:06:45]-[00:11:14] and [00:29:08]-[00:42:55] on risk-based delegation, simple diffs, and deterministic checks.
- [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), especially [00:13:06]-[00:24:12] on small directed threads, research reports, critique, and handoff into implementation.
- [Raising an Agent episode 9, "The Assistant Is Dead, Long Live the Factory"](https://www.youtube.com/watch?v=2wjnV6F2arc), especially [00:10:18]-[00:17:24] and [00:25:29]-[00:40:38] on agent-native codebases, feedback loops, and factory-era workflows.
- [Raising an Agent episode 10, "Killing the Sidebar"](https://www.youtube.com/watch?v=4rx36wc9ugw), especially [00:00:55]-[00:10:17] on longer-running, well-scoped agent work.
- [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ), especially [00:22:27]-[00:49:24] on thinner harnesses, the agent loop, and coordinating many cheap agents.
