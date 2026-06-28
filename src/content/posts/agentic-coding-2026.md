---
title: 'Agentic Coding in 2026: A Practical Field Guide'
description: 'A source-backed map of the current agentic-coding workflow: alignment, proof, friction, codebase infrastructure, context hygiene, small tasks, and factory-era orchestration.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: 6
---

## Agentic coding in 2026 is an alignment problem

The old field guide question was “how do I get a coding agent to write code?”

The 2026 question is sharper: **what work should the agent do, what evidence should it produce, and what should stay in human judgment?**

This article is the map for the public series. It is not an Amp setup guide, a product-mode guide, or a claim that every team should run the same workflow. The synthesis below is grounded in the source talks listed at the end, then points to deeper articles for the parts that deserve their own operating procedure:

- [Your Repo Is the Memory](/posts/durable-context-coding-agents) for durable repo-local context.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) for proof-stack mechanics.
- [Small Threads, Durable State](/posts/small-threads-durable-state) for handoffs, work items, and context hygiene.
- [The coding-with-agents resource hub](/resources/coding-with-agents) for the underlying talks, transcripts, and summaries.

My working definition is intentionally boring: **an agent is an LLM calling tools in a loop toward a goal.** It reads files, runs commands, edits code, observes the result, and loops until it can stop or should ask for help. That definition comes from the retired `what-is-an-agent.md` draft and Simon Willison’s public framing; Thorsten Ball makes the same point in harness terms when he says the magic is “just a loop” plus model capability, context, and tools [00:41:36]-[00:43:42].

```text
goal → choose tool → act → observe → adjust
   ▲                                  │
   ╰──────────── stop, prove, or ask ◀╯
```

The loop is simple. The hard part is making the loop serve the right work.

## Cheap implementation moves the bottleneck

Maggie Appleton’s [Collaborative AI Engineering](https://www.youtube.com/watch?v=ClWD8OEYgp8) is the cleanest source for the shift: implementation is becoming fast and cheap, so the hard question moves from “can we build it?” to “should we build it?” [00:01:53]-[00:02:42].

That does not remove planning. It moves planning onto the critical path.

Appleton’s warning is that the implementation window has collapsed while the alignment machinery has not caught up. Issues can turn into pull requests in minutes, local plan modes stay private, and the pull request becomes the first shared checkpoint when it is already late [00:03:35]-[00:05:12]. The cost shows up as wasted work, duplicated work, merge conflicts, surprise features, and review queues nobody understands [00:04:24]-[00:05:12].

The field-guide rule is:

```text
If code got cheap, alignment cannot stay implicit.
```

Put intent, constraints, decisions, and evidence where the next person or agent can find them before the diff becomes the only artifact. The deeper version of that rule lives in [Your Repo Is the Memory](/posts/durable-context-coding-agents): repo-local context is the control loop that keeps fast implementation attached to shared truth.

## Make proof non-optional

Cheap code is only useful when the result can be checked.

Simon Willison’s Pragmatic Summit workflow starts with red-green test-driven development: tell the agent how to run the tests, make it write or identify the failing proof, then implement only enough to make the proof pass [00:04:41]-[00:06:44]. He then makes agents exercise the real system because passing tests do not prove that a server boots or an API behaves correctly [00:06:44]-[00:07:33]. For standards and compatibility work, he uses conformance-style suites; for risky execution, he stresses sandboxing and mock data instead of production data [00:07:33]-[00:18:35].

The series rule is:

```text
No proof, no merge.
```

That does not mean every task needs the same proof. A copy edit needs rendered output and a link check. A helper bug needs a failing test that turns green. A UI change may need a screenshot or trace. A parser, protocol, or upload path may need fixtures or conformance checks. A security, permissions, migration, billing, or data change needs boundaries plus a human decision.

The tactical ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it). This guide only needs the headline: ask for evidence before the agent optimizes for being done.

## Good friction is judgment, not bureaucracy

“Remove friction” is the wrong default when generation becomes faster than review.

Armin Ronacher and Cristina Poncela Cubeiro describe the trap: agent output creates pressure to ship faster, the next prompt can feel addictive, and humans start mistaking fast output for efficient work [00:02:55]-[00:04:46]. At team scale, code production outnumbers the people who can responsibly review it [00:05:40]-[00:06:30]. Agents also optimize locally for code that runs; they do not feel the discomfort that tells a senior engineer a fallback, hidden default, or brittle recovery path is dangerous [00:06:30]-[00:08:25].

Good friction does not ask humans to approve every mechanical change. It routes the right decisions back to people:

- dependencies
- permissions
- migrations
- reliability and operations
- security and data boundaries
- public API and architecture shape

That routing comes directly from the friction talk’s review pattern [00:14:01]-[00:17:55] and Mario Zechner’s risk split in the Pi/OpenClaw workflow: low-risk or internal work can be delegated more freely, while mission-critical, security-sensitive, and architectural work still needs close human oversight [00:06:45]-[00:11:14].

The practical test is simple: if the agent cannot own the consequence, a human must own the decision.

## Treat the codebase as agent infrastructure

The codebase is not just where agents write. It is part of the prompt.

Willison points out that agents copy existing patterns: templates, tests, READMEs, CI setup, and high-quality examples shape later output just as much as they shape human contributors [00:10:39]-[00:12:35]. Ronacher and Poncela Cubeiro make the same point structurally: agents do better when products expose modular boundaries, visible flow, simple cores, familiar patterns, and less hidden magic [00:10:30]-[00:12:17].

Agent-friendly infrastructure is boring engineering with a new payoff:

- clear module and ownership boundaries
- obvious entry points and data flow
- examples worth copying
- one preferred primitive for common UI, query, service, or API work
- fast focused tests
- deterministic formatting, linting, typechecking, smoke tests, and pre-commit checks
- feedback hooks that let the agent verify behavior without waiting for a human screenshot or log paste

The last point matters more as agents do longer loops. Raising an Agent episode 9 frames an “agent-native” codebase as one where the agent knows how to run, verify, authenticate, click around, inspect output, and recover when feedback is missing [00:10:18]-[00:17:24]. Zechner’s Pi workflow shows the same principle from the low-level side: `AGENTS.md`-style instructions help, but linters, typecheckers, smoke tests, pre-commit hooks, and terminal/browser capture make failure deterministic [00:37:03]-[00:42:55].

The synthesis is not “write more docs.” It is “make the correct path easier for the next loop to discover and verify.”

## Keep context wide, implementation narrow

One long thread should not be responsible for everything.

Build Crew episode 7 shows two useful modes. A tiny directed thread works when the human knows exactly what should happen and can name the files, constraints, and expected output [00:13:06]-[00:15:58]. A research flow works when uncertainty is high: analyze broadly, write reports, critique the design, narrow into a plan, then hand off to an implementation thread [00:18:54]-[00:24:12].

That gives a durable context pattern:

```text
wide research → critique → human decision → narrow implementation → evidence
```

Do not carry every exploratory transcript into the implementation loop. Carry the decision, the relevant files, the constraints, and the proof target.

[Small Threads, Durable State](/posts/small-threads-durable-state) owns the detailed operating procedure for `.agents/work/` work items, handoffs, progress logs, and verification records. The field-guide version is shorter: reset context when the job changes, but preserve enough state that the next thread does not rediscover the same facts.

## Start with one small verified task

The useful part of the old first-win tutorial was not the Amp setup. It was the task shape:

1. Pick one real task with a clear “done” signal.
2. Define the proof before editing.
3. Let the agent loop on that proof.
4. Review the diff.
5. Stop when the evidence is enough.

Good starter tasks are small enough to verify quickly:

- fix one failing test and rerun it
- remove debug statements and run the project check
- add one missing state to a UI component and inspect the rendered output
- document one command the agent repeatedly misses
- reproduce one bug, capture the evidence, and stop before the fix if the cause is unclear

Use a prompt like this:

```text
Pick the smallest check that would prove this task.
Show the failing behavior or current output first.
Make the smallest change.
Run the targeted check again, then the project-level check if relevant.
End with files changed, commands run, results, and any known gaps.
```

That pattern is supported by Willison’s test-first and manual-check workflow [00:04:41]-[00:07:33], Build Crew’s small directed threads [00:13:06]-[00:15:58], and the Raising an Agent feedback-loop discussion [00:10:18]-[00:17:24]. It is also intentionally modest. Do not start by designing a factory. Start by making one task verifiable.

## Factory workflows are emerging, but they raise the bar

The frontier is moving from “one assistant beside one developer” toward longer-running, parallel, and factory-like workflows. Treat that as an emerging direction, not a shortcut around alignment and review.

Raising an Agent episode 9 frames the shift as “the assistant is dead, long live the factory”: if agents can take a longer leash, fetch context, verify work, and run in parallel, teams can investigate more immediately and try more variants [00:25:29]-[00:31:43]. Episode 10 makes the workflow change more concrete: some agent work is becoming less like a rapid back-and-forth chat and more like writing a well-scoped brief, sending the agent away, and checking the result later [00:00:55]-[00:10:17].

Ball’s harness argument points to the same next problem. As model capability absorbs more of the old harness tricks, the hard question shifts to where agents run, how work is tracked, how results are preserved, and how humans coordinate many cheap workers without losing the thread [00:36:43]-[00:49:24].

The factory-era checklist is therefore not “launch more agents.” It is:

- feed agents tasks that are likely to succeed
- improve the codebase so more tasks become safe to delegate
- preserve useful work state instead of losing it in chats
- require evidence before accepting output
- route irreversible or high-risk decisions to humans
- delete or constrain workflows that create review debt faster than the team can absorb it

Parallelism amplifies whatever system you already have. If your alignment, proof, friction, infrastructure, and context hygiene are weak, more agents produce more debt. If those loops are strong, more agents become a real lever.

## Where to go next

Use this as the reading path:

1. Read [Your Repo Is the Memory](/posts/durable-context-coding-agents) if agents keep missing local truth, repeating mistakes, or losing task state.
2. Read [Make the Agent Prove It](/posts/make-the-agent-prove-it) if agent work reaches review without tests, logs, screenshots, conformance, sandboxing, or a human-readable evidence trail.
3. Read [Small Threads, Durable State](/posts/small-threads-durable-state) if long conversations are carrying too much research, implementation, debugging, and handoff state at once.
4. Browse [Coding with Agents resources](/resources/coding-with-agents) when you want the source talks and summaries behind the series.

The through-line is deliberately simple: align before code is cheap, prove before merge, keep useful friction, shape the codebase as infrastructure, keep context hygienic, start with one verified task, and only then scale into factory workflows.

## Sources used

- Source drafts merged: `what-is-an-agent.md` for the concise agent-loop definition; `amp-first-win-15-minutes.md` for the one-small-verified-task pattern. Product setup, pricing, UI, shortcut, mode, and screenshot claims from those drafts were not reused.
- [Maggie Appleton, “Collaborative AI Engineering”](https://www.youtube.com/watch?v=ClWD8OEYgp8), especially [00:01:53]-[00:06:49] on cheap implementation, late alignment, coordination debt, and shared planning/building spaces.
- [Simon Willison, “Engineering Practices That Make Coding Agents Work”](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41]-[00:18:35] on red-green tests, real-system checks, conformance, sandboxing, and mock data.
- [Armin Ronacher and Cristina Poncela Cubeiro, “The Friction is Your Judgment”](https://www.youtube.com/watch?v=_Zcw_sVF6hU), especially [00:02:55]-[00:17:55] on review pressure, agent-generated entropy, codebase infrastructure, mechanical checks, and human decision routing.
- [Mario Zechner, “Pi Building Pi, OpenClaw’s Minimalist Coding Agent”](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:06:45]-[00:11:14], [00:29:08]-[00:42:55], and [01:12:03]-[01:30:17] on risk-based delegation, keeping diffs simple, deterministic checks, context control, and module/API boundaries.
- [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), especially [00:13:06]-[00:24:12] on small directed threads, research reports, critique, planning, and handoff into implementation.
- [Raising an Agent episode 9, “The Assistant Is Dead, Long Live the Factory”](https://www.youtube.com/watch?v=2wjnV6F2arc), especially [00:10:18]-[00:17:24] and [00:25:29]-[00:40:38] on agent-native codebases, feedback loops, longer leashes, and factory-era workflows.
- [Raising an Agent episode 10, “Killing the Sidebar”](https://www.youtube.com/watch?v=4rx36wc9ugw), especially [00:00:55]-[00:10:17] on longer-running, well-scoped agent work and changing user expectations.
- [Thorsten Ball, “LLMs are killing Agent Harness”](https://www.youtube.com/watch?v=thMFsqe8kbQ), especially [00:22:27]-[00:49:24] on software assumptions, thinner harnesses, the agent loop, and the coordination problem of many cheap agents.
- Current production depth articles: [Your Repo Is the Memory](/posts/durable-context-coding-agents), [Make the Agent Prove It](/posts/make-the-agent-prove-it), and [Small Threads, Durable State](/posts/small-threads-durable-state).
