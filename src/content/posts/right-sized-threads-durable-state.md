---
title: 'Right-Sized Threads, Durable State'
description: 'How to decide when an agent thread should continue or restart, and how files and commits carry decisions between research, implementation, and verification.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflows', 'Planning', 'dot-agents']
draft: false
unlisted: false
order: 4
---

## Thread length is an outcome, not a goal

> Keep connected work in one thread; start fresh when the worker's role changes.

```text
research + planning + coordination
        ↓ commit accepted state
bounded implementation → independent verification
```

A right-sized thread does one connected job, whether it lasts five turns or five hundred. Continue when the next step depends on earlier exploration or feedback. Start fresh when the job changes, such as moving from research to implementation or from producing a change to independently testing it.

Do not split work merely to reset the context window. Compaction makes long threads practical. But do not add an unrelated task merely because the thread already knows the repository.

This is also Amp's current distinction: the [Manual](https://ampcode.com/manual#how-to-prompt) recommends one thread per task, while its archived [“200k Tokens Is Plenty”](https://ampcode.com/notes/200k-tokens-is-plenty) note now says that auto-compaction makes longer threads productive. **Thread length is an outcome, not the goal.**

[Your Repo Is the Memory](/posts/durable-context-coding-agents) explains repository memory. This article explains when a workstream should continue and when a fresh worker should take over.

## Keep coherent workstreams alive

> Keep research, planning, and coordination together while each step still depends on what came before.

Research and planning are iterative. A new source can rule out an option. A prototype can expose a missing requirement. User feedback can reverse a decision. Restarting after every step makes each new thread reconstruct that history before it can contribute.

A coordinator thread is the control room for a larger piece of work. It keeps the plan, delegates bounded tasks, and compares results. For example, use one thread to compare three designs and turn the choice into an accepted plan. Then give a fresh implementation thread that plan instead of the entire exploratory conversation.

Current compaction and retrieval make continuity more practical. Amp reports a weeks-long thread compacted 68 times and documents a reader that checks original messages and later reversals rather than trusting summaries alone ([“Read Bigger Threads”](https://ampcode.com/news/read-bigger-threads)). Jason Liu similarly reports using improved compaction for named, pinned workstreams that delegate narrower tasks ([00:03:02–00:07:11](https://www.youtube.com/watch?v=il1c1a2FufU&t=182s)). These examples show capability, not that every long thread stays accurate.

A private review of 86 of my recent threads changed my default. Of 220 direct user messages, 177 continued an existing conversation. Broad work began with a full brief, then used short follow-ups pointing to files and commits. Small, well-defined tasks began with compact prompts. This is one person's usage, without outcome comparisons—not proof that long threads are better.

## Start fresh at responsibility and independence boundaries

> Start a new thread when it creates a clearer assignment or a genuinely independent check.

A **responsibility boundary** is where the job changes. An **independence boundary** is where the next worker should judge the result without inheriting the first worker's conclusions. Both can justify losing conversational context.

| Boundary | Why start fresh? |
| --- | --- |
| Broad exploration → implementation | Begin mutation from accepted decisions, not every discarded path. |
| Implementer → verifier or tester | Check the behavior without treating the implementer's explanation as proof. |
| Competing approach → selection | Keep alternatives isolated and judge them against one contract. |
| Current task → unrelated task | Prevent convenient context from turning into mixed ownership. |

Fresh does not mean uninformed. The implementation thread receives the accepted plan, relevant files, constraints, and proof target. It still runs its own checks. A separate verifier reruns the important checks, looks for gaps, and reports findings without silently changing the requirements.

Matt Pocock demonstrates fresh-context automated review followed by manual QA that catches a missing-table failure after automated checks passed ([01:04:23–01:12:21](https://www.youtube.com/watch?v=-QFHIoCo-Ko&t=3863s)). Kun describes a coordinator with separate adversarial review, tests, documentation checks, and CI gates ([00:37:41–00:45:28](https://www.youtube.com/watch?v=8ZgpAXe5V5w&t=2261s)). Those are practitioner patterns, not comparative reliability studies.

Keep one integration owner. Parallel discovery is easy to combine; overlapping mutation needs explicit isolation, merge order, and acceptance authority.

## Durable repository state is the synchronization layer

> Use the thread as working memory and the repository as the shared record.

**Durable state** is the repository record that future workers can trust: accepted decisions, constraints, status, proof, and the next action. A person can inspect it, and another thread or orb can use it.

This repository uses a dot-agents work item as one concrete implementation:

```text
.agents/work/<category>/<work>/
├── index.md      # current status, artifacts, next action
├── research.md   # optional distilled findings
├── plan.md       # optional tasks, scope, acceptance, verification
└── progress.md   # optional observed evidence, deviations, blockers
```

Preserve the decision and its evidence, accepted constraints, current task, proof state, authority, unresolved questions, and next action. Do not preserve the whole exploratory transcript.

When work crosses threads or orbs, use a commit as the synchronization point. It identifies the accepted baseline and makes later patches reviewable. It records state, but does not prove correctness.

Compaction and durable state solve different problems. Compaction keeps one conversation usable. Durable state lets a fresh worker resume the assignment and lets an independent verifier distinguish inherited claims from checks it actually reran.

## Hand off an assignment, not a transcript

> Tell the next thread what it owns, where the accepted state lives, and how to prove the result.

```text
Outcome:
Read first / canonical state:
Baseline commit:
Scope and non-goals:
Decisions already made:
Acceptance and verification:
Authority and stop conditions:
Return:
```

Prompt length should follow missing information. Thorsten Ball's examples point agents to code, references, constraints, screenshots, and proof ([04:24:22–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15862s)). A short prompt works when a work item, commit, `AGENTS.md`, skill, and test command already make the contract discoverable. A broad or risky assignment should say more.

Use this operating procedure:

1. keep research, planning, and coordination together while the workstream is coherent;
2. distill decisions and proof targets into durable state;
3. commit the accepted baseline before another environment depends on it;
4. assign bounded implementation with explicit authority and checks;
5. use fresh verification when independence is worth its cost;
6. let one owner integrate the result and promote reusable learning.

## Sources used

- Current Amp product guidance: [Manual](https://ampcode.com/manual), [“Read Bigger Threads”](https://ampcode.com/news/read-bigger-threads), and the archived [“200k Tokens Is Plenty”](https://ampcode.com/notes/200k-tokens-is-plenty).
- [Jason Liu, “Setting Yourself Up for Success”](https://www.youtube.com/watch?v=il1c1a2FufU) on named long-lived workstreams, compaction, and delegated threads.
- [Thorsten Ball, “Think Harder: How I Prompt”](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15626s) on discoverable context and proof-oriented prompts.
- [Matt Pocock, “Full Walkthrough: Workflow for AI Coding”](https://www.youtube.com/watch?v=-QFHIoCo-Ko) and [Kun's agentic-engineering setup](https://www.youtube.com/watch?v=8ZgpAXe5V5w) on separating implementation, review, and verification roles.
- [dot-agents](https://dot-agents.dev/) supplies the work-item pattern described here.
- Author synthesis from a private review of one user's recent Amp threads; no private prompts or thread identifiers are reproduced.
