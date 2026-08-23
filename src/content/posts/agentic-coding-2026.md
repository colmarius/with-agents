---
title: 'Agentic Coding in 2026: A Practical Map'
description: 'A 2026 map of coding-agent work: brief the task, preserve context, verify behavior, keep consequential decisions human, and scale only what works.'
pubDate: 2026-06-28
updatedDate: 2026-08-23
tags: ['AI Agents', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: 2
---

## The 2026 agentic-coding map

> Coding agents make implementation cheaper; people still own intent, evidence, and consequences.

```text
intent + constraints
        +
   repo context
        ↓
inspect → act
   ↑       ↓
 adjust ← observe
            ↓
evidence → human decision
```

If you have 30 seconds, start with the bottleneck you recognize:

| Your bottleneck | Start here |
| --- | --- |
| The assignment is vague | [Brief the Agent Like a Capable Co-Worker](/posts/capable-coworker-coding-agents) |
| Shared context keeps disappearing | [Your Repo Is the Memory](/posts/durable-context-coding-agents) |
| The agent cannot inspect or prove the real system | [Make the Agent Prove It](/posts/make-the-agent-prove-it) |
| Work must cross threads or environments | [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) |
| You want to apply this workflow in Amp | [Using Amp for Real Coding Work](/posts/amp-factory-era-case-study) |
| You want the talks behind the series | [The coding-with-agents resource hub](/resources/coding-with-agents) |

The map uses a simple definition: a coding agent is an LLM that uses tools in a
loop toward a goal. It inspects the environment, acts, observes the result, and
adjusts. Amp co-creator Thorsten Ball describes the same small core in harness
terms: the loop, model, context, and tools do most of the work
[00:41:36–00:43:42](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2496s).

The hard part sits around that loop. A team must still decide what to build,
supply local context, expose reliable feedback, judge the evidence, and own the
result. **Series synthesis:** faster code generation is not the same as faster
delivery. It can move work into alignment, review, rework, and integration
instead. This is a workflow map, not a universal productivity claim.

## Align before implementation

> Fast code makes vague intent expensive.

```text
shared intent
      ↓
clear brief
      ↓
code + evidence
```

In her April 2026 talk, GitHub staff research engineer Maggie Appleton argues
that faster implementation makes team alignment the bottleneck: the question
shifts from only “how do we build it?” toward “should we build it?”
[00:01:53–00:02:42](https://www.youtube.com/watch?v=ClWD8OEYgp8&t=113s). She
describes issues becoming pull requests before the team has shared the plan,
which leaves review carrying late feedback, duplicate work, conflicts, and
surprise features
[00:03:35–00:05:12](https://www.youtube.com/watch?v=ClWD8OEYgp8&t=215s). This is a
practitioner diagnosis, not a measured productivity result.

The practical response is not more ceremony. Give the agent the missing
assignment context before it edits: outcome, scope, constraints, starting
points, proof, and authority limits. [Brief the Agent Like a Capable
Co-Worker](/posts/capable-coworker-coding-agents) owns that brief. Put recurring
commands, decisions, and accepted state where the next run can find them;
[Your Repo Is the Memory](/posts/durable-context-coding-agents) owns that system.

## Make the work easy to inspect

> The agent needs a clear path to act, observe, and prove the result.

```text
known steps
     ↓
visible state
     ↓
real feedback
     ↓
independent check
```

Simon Willison's March 2026 workflow starts with a failing test, then exercises
the running service because a green suite does not prove that the server boots
or the API behaves correctly
[00:04:41–00:07:33](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s). For
standards work, he uses conformance or differential suites instead of taste
[00:07:33–00:09:36](https://www.youtube.com/watch?v=owmJyKVu5f8&t=453s).

The codebase is part of this feedback system. Armin Ronacher and Cristina
Poncela Cubeiro recommend modular boundaries, visible flow, familiar patterns,
and mechanical checks
[00:10:30–00:14:01](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=630s). Mario
Zechner shows why both guidance and enforcement matter: prose can steer the
model, while linters, type checks, hooks, and smoke tests reject violations and
let the agent inspect behavior
[00:37:11–00:42:44](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=2231s).
These are practitioner patterns, not controlled comparisons.

**Series synthesis:** if an agent weakens the expected result, that check no
longer independently proves its work. Improve one real feedback path at a time.
When the risk requires independence, keep reviewer-supplied acceptance
conditions outside the agent's writable loop. [Make the Agent Prove
It](/posts/make-the-agent-prove-it) covers the risk-scaled proof contract.

## Keep consequential decisions human

> Delegate reversible execution; keep high-consequence decisions with people.

| Usually safe to delegate | People should explicitly decide |
| --- | --- |
| Exploration, mechanical cleanup, and narrow reversible changes with clear proof | Product need, architecture, dependencies, permissions, migrations, security, reliability, and release |

That table is series synthesis, not a quote. Ronacher and Poncela Cubeiro warn
that agents optimize for local progress but do not feel the discomfort that
alerts an engineer to hidden defaults, brittle recovery, or an unsafe fallback
[00:06:30–00:08:25](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=390s). Their
response is useful friction: automate mechanical feedback, but call out changes
such as dependencies, permissions, migrations, reliability, and architecture
for human judgment
[00:14:01–00:17:55](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=841s).

Zechner draws a similar risk boundary. He delegates low-consequence internal
work more freely, but keeps close oversight of mission-critical, security, and
architectural work
[00:08:20–00:11:07](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=500s). The
durable rule is simple: access is not authority, and generated code does not
transfer accountability.

## Scale only proven work

> Parallel agents multiply both useful throughput and review debt.

```text
one proven lane
       ↓
bounded parallel lanes
       ↓
one integration owner
```

Several 2026 sources describe longer-running and parallel agent work. *Raising
an Agent* episode 9 shows agents using codebase feedback loops and parallel
investigation or implementation variants
[00:10:51–00:17:15](https://www.youtube.com/watch?v=2wjnV6F2arc&t=651s),
[00:25:50–00:30:05](https://www.youtube.com/watch?v=2wjnV6F2arc&t=1550s). Episode
10 shows longer-running work from well-scoped briefs and later review
[00:02:48–00:09:39](https://www.youtube.com/watch?v=4rx36wc9ugw&t=168s). Ball
identifies the resulting coordination problem: where agents run, how work is
tracked and preserved, and how people organize many available workers
[00:43:42–00:49:24](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2622s).
These are Amp team and product reports. They show a workflow direction, not a
universal result.

Do not start with more lanes. First make one lane reliable: a bounded task, an
appropriate environment, durable state, a stop condition, reviewable evidence,
and an owner who can integrate or reject the result. Then parallelize work that
is genuinely independent and keep concurrency below the team's review capacity.

[Right-Sized Threads, Durable
State](/posts/right-sized-threads-durable-state) covers responsibility boundaries
and handoffs. [Using Amp for Real Coding
Work](/posts/amp-factory-era-case-study) turns the map into a reusable Amp workflow.

The landscape is smaller than the tool surface suggests: align before code,
preserve the context that should survive, expose reality to the loop, demand
evidence, keep consequences with people, and scale only the work your team can
still review and own.

## Sources used

- [Maggie Appleton, "Collaborative AI Engineering"](https://www.youtube.com/watch?v=ClWD8OEYgp8), especially [00:01:53–00:05:12](https://www.youtube.com/watch?v=ClWD8OEYgp8&t=113s) on cheap implementation, late alignment, and coordination debt.
- [Simon Willison, "Engineering Practices That Make Coding Agents Work"](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41–00:12:35](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s) on red-green tests, real-system checks, conformance, and codebase patterns.
- [Armin Ronacher and Cristina Poncela Cubeiro, "The Friction is Your Judgment"](https://www.youtube.com/watch?v=_Zcw_sVF6hU), especially [00:06:30–00:17:55](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=390s) on agent incentives, codebase shape, mechanical checks, and human decision routing.
- [Mario Zechner, "Pi Building Pi, OpenClaw's Minimalist Coding Agent"](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:08:20–00:11:07](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=500s) and [00:37:11–00:42:44](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=2231s) on risk-based delegation and deterministic checks.
- [Raising an Agent episode 9, "The Assistant Is Dead, Long Live the Factory"](https://www.youtube.com/watch?v=2wjnV6F2arc), especially [00:10:51–00:17:15](https://www.youtube.com/watch?v=2wjnV6F2arc&t=651s) and [00:25:50–00:30:05](https://www.youtube.com/watch?v=2wjnV6F2arc&t=1550s) on agent-native codebases, feedback loops, and factory-era workflows.
- [Raising an Agent episode 10, "Killing the Sidebar"](https://www.youtube.com/watch?v=4rx36wc9ugw), especially [00:02:48–00:09:39](https://www.youtube.com/watch?v=4rx36wc9ugw&t=168s) on longer-running, well-scoped agent work.
- [Thorsten Ball, "LLMs are killing Agent Harness"](https://www.youtube.com/watch?v=thMFsqe8kbQ), especially [00:41:36–00:49:24](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2496s) on the agent loop and the coordination problems created by many available agents.
