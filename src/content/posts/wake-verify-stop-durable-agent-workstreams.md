---
title: 'Wake, Verify, Stop: Turning Agent Sessions into Durable Workstreams'
description: 'A four-part operating contract for recurring agent work: persistent context, a wake-up cadence, an observable verifier, and a bounded stopping policy.'
pubDate: 2026-08-07
tags: ['AI Agents', 'Workflows', 'Automation', 'Orchestration']
draft: true
unlisted: false
order: 10
---

## A durable workstream needs more than a long chat

> Persistent context, cadence, verification, and stopping rules turn a session into a bounded operating loop.

```text
persistent context + wake-up cadence + verifier + stopping policy
```

**Author synthesis from Jason Liu's workshop:** these four parts form a minimum operating contract for recurring agent work. Liu presents the components across examples of pinned Codex threads, scheduled heartbeats, goals, and monitor threads; he does not state this equation verbatim ([00:03:02–00:07:11](https://www.youtube.com/watch?v=il1c1a2FufU&t=182s), [00:34:49–00:41:08](https://www.youtube.com/watch?v=il1c1a2FufU&t=2089s), [00:55:53–00:58:43](https://www.youtube.com/watch?v=il1c1a2FufU&t=3353s)).

“Durable” is deliberately modest here. It means that a person can inspect and resume the workstream with explicit lifecycle rules. It does not promise crash recovery, exactly-once effects, or infrastructure-grade durable execution.

The model is useful because each missing part produces a recognizable failure:

| Missing element | Likely failure mode |
| --- | --- |
| Persistent context | Repeated rediscovery, stale assumptions, or contradictory action |
| Wake-up cadence | Dormant work or noisy polling |
| Verifier | Activity mistaken for progress |
| Stopping policy | Runaway actions, spend, notifications, or review debt |

## Persistent context is inspectable state

> Keep the state needed to resume; do not rely on an endless transcript.

Liu treats named, pinned threads as ongoing workstreams and uses project files, memory, goals, plans, state files, and work logs to recover what matters ([00:03:02–00:07:11](https://www.youtube.com/watch?v=il1c1a2FufU&t=182s), [00:40:06–00:41:08](https://www.youtube.com/watch?v=il1c1a2FufU&t=2406s)). He also keeps an agent-maintained notes repository in Git and reviews its changes with `git diff` ([00:21:51–00:22:41](https://www.youtube.com/watch?v=il1c1a2FufU&t=1311s)).

That distinction matters. A long transcript is accumulated conversation. Persistent state is the smaller set of facts that should govern the next run: current goal, accepted constraints, latest evidence, pending decisions, and next action.

[Your Repo Is the Memory](/posts/durable-context-coding-agents) owns the deeper pattern. The practical rule is to preserve state that changes future behavior and let narration expire.

## Cadence should match the work

> Wake on a useful signal, back off when nothing changes, and suppress empty noise.

Liu describes heartbeats as scheduled messages sent into an existing thread, allowing it to reconsider work without starting from a fresh session ([00:34:49–00:40:06](https://www.youtube.com/watch?v=il1c1a2FufU&t=2089s)). Later, he recommends choosing how often those checks run, returning a minimal “no updates” response, and changing frequency as conditions change ([01:11:47–01:13:46](https://www.youtube.com/watch?v=il1c1a2FufU&t=4307s)).

Fixed schedules are only one option. A useful cadence can be periodic, event-driven, or adaptive. The contract should say what wakes the work, when to back off, and when silence is the correct output.

```text
wake trigger:
normal interval:
backoff rule:
no-change behavior:
```

Without that contract, recurring work tends toward one of two failures: it sleeps through useful changes or creates an alert stream that people learn to ignore.

## A verifier defines progress, not correctness

> The loop needs an observable predicate, but a green predicate proves only itself.

Liu describes a goal as a verification step that lets the agent continue while the condition remains unmet ([00:40:06–00:41:08](https://www.youtube.com/watch?v=il1c1a2FufU&t=2406s)). That is stronger than telling an agent to “keep working,” because it gives the loop an observable reason to continue or stop.

The verifier still needs engineering judgment. “CI is green,” “the issue is closed,” and “the customer received a response” establish different properties. None proves the others. A weak verifier can make an active loop consistently wrong.

Permission to run the loop is not permission to redefine its success predicate.
Changing a known-correct expectation should require separate approval.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) covers how to choose evidence by risk. For recurring work, add one rule: the verifier must be cheap and reliable enough to run at the chosen cadence.

## A stopping policy bounds success and failure

> Stop on success, exhaustion, expiry, uncertainty, or escalation.

Liu recommends explicit stopping criteria for recurring jobs rather than an unqualified instruction to run forever ([01:11:47–01:13:46](https://www.youtube.com/watch?v=il1c1a2FufU&t=4307s)). A complete stopping policy should cover more than success:

- the verifier passes;
- the deadline, attempt limit, or budget is reached;
- uncertainty or risk requires a human decision;
- the work becomes stale, superseded, or unsafe;
- cleanup or revocation must happen after termination.

```text
success condition:
maximum attempts or cost:
expiry:
human escalation condition:
cleanup:
```

This is the difference between a loop and a service somebody can own. [Amp as a Factory-Era Coding-Agent Case Study](/posts/amp-factory-era-case-study) covers the larger operational boundary for scheduled and event-driven agents, including identity, idempotency, budgets, and cleanup.

## The loop contract is not a safety architecture

> Lifecycle controls constrain recurrence; permissions constrain authority.

The four-part contract says when work wakes, which state it resumes, how it judges progress, and when it terminates. It does not make the agent safe.

Liu warns that broad computer access can let a determined model route around a connector restriction by using the graphical interface instead ([00:52:40–00:54:49](https://www.youtube.com/watch?v=il1c1a2FufU&t=3160s)). Project instructions can guide behavior, but they are not enforced security boundaries. Liu also says his connector-heavy personal workflows are difficult to evaluate reproducibly and that he lacks a clear answer for cross-project memory leakage ([00:23:42–00:24:44](https://www.youtube.com/watch?v=il1c1a2FufU&t=1422s), [01:01:36–01:04:29](https://www.youtube.com/watch?v=il1c1a2FufU&t=3696s)).

Consequential workflows also need least privilege, scoped credentials, budgets and rate limits, observable actions, idempotent effects, revocation, and human approval where consequences demand it. Permissions answer **what the agent may do**. The loop contract answers **how recurring work should operate**. Keep both explicit.

## Sources

- [Jason Liu, “Full Workshop: Setting Yourself Up for Success,” AI Engineer](https://www.youtube.com/watch?v=il1c1a2FufU)
- Related internal guides: [Your Repo Is the Memory](/posts/durable-context-coding-agents), [Make the Agent Prove It](/posts/make-the-agent-prove-it), and [Amp as a Factory-Era Coding-Agent Case Study](/posts/amp-factory-era-case-study)
