---
title: 'Right-Sized Threads, Durable State'
description: 'A current operating model for agent work: long-lived research and coordination, fresh implementation and verification contexts, and repo-backed state between them.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflows', 'Planning', 'dot-agents']
draft: false
unlisted: false
order: 4
---

## Thread length is an outcome, not a goal

> Keep a thread while its responsibility stays coherent; start fresh when the responsibility changes.

```text
long-lived coordination → committed state
                         ↓
fresh implementation → independent verification
```

Do not optimize for the smallest possible thread. Optimize for one coherent unit of work. A thread may research, compare approaches, plan, and coordinate for a long time when each turn benefits from what came before. It should not absorb an unrelated task merely because context is available.

This is also Amp's current distinction: the [Manual](https://ampcode.com/manual#how-to-prompt) recommends one thread per task, while its archived [“200k Tokens Is Plenty”](https://ampcode.com/notes/200k-tokens-is-plenty) note now says that auto-compaction makes longer threads productive. **Thread length is an outcome, not the goal.**

[Your Repo Is the Memory](/posts/durable-context-coding-agents) owns the memory model. This article owns the operating boundary between a continuing workstream and a fresh worker.

## Keep coherent workstreams alive

> Long-lived threads earn their context when later work depends on earlier exploration and decisions.

Research and planning are iterative. New evidence can invalidate an option, user feedback can reverse a choice, and a coordinator needs to remember what each worker owns. Restarting after every step forces the next thread to reconstruct that changing decision surface.

Current compaction and retrieval make continuity more practical. Amp reports a weeks-long thread compacted 68 times and documents a reader that checks original messages and later reversals rather than trusting summaries alone ([“Read Bigger Threads”](https://ampcode.com/news/read-bigger-threads)). Jason Liu similarly reports using improved compaction for named, pinned workstreams that delegate narrower tasks ([00:03:02–00:07:11](https://www.youtube.com/watch?v=il1c1a2FufU&t=182s)). These examples show capability, not that every long thread stays accurate.

A private review of 86 of my own recent threads changed my default. Of 220 direct user messages, 177 were follow-ups: broad or risky work used a fuller initial brief, then short steering against durable files and commits. Bounded tasks started compactly. This is one user's corpus, with no outcome comparison; it does not prove that long threads are better.

## Start fresh at responsibility and independence boundaries

> A fresh thread should buy a cleaner role or an independent judgment, not merely an empty token counter.

| Boundary | Why start fresh? |
| --- | --- |
| Broad exploration → implementation | Begin mutation from accepted decisions, not every discarded path. |
| Producer → verifier | Test the behavior without inheriting the producer's explanation as fact. |
| Competing approach → selection | Keep alternatives isolated and judge them against one contract. |
| Current task → unrelated task | Prevent convenient context from turning into mixed ownership. |

The implementation thread still runs its own checks. A separate verifier reruns the relevant evidence, probes gaps, and returns findings without silently redefining requirements. Matt Pocock demonstrates fresh-context automated review followed by manual QA that catches a missing-table failure after automated checks passed ([01:04:23–01:12:21](https://www.youtube.com/watch?v=-QFHIoCo-Ko&t=3863s)). Kun describes a coordinator with separate adversarial review, tests, documentation checks, and CI gates ([00:37:41–00:45:28](https://www.youtube.com/watch?v=8ZgpAXe5V5w&t=2261s)). Those are practitioner patterns, not comparative reliability studies.

Keep one integration owner. Parallel discovery is easy to combine; overlapping mutation needs explicit isolation, merge order, and acceptance authority.

## Durable repository state is the synchronization layer

> Compaction keeps a conversation usable; repository state makes the work inspectable and portable.

This repository uses a dot-agents work item as one concrete implementation:

```text
.agents/work/<category>/<work>/
├── index.md      # current status, artifacts, next action
├── research.md   # optional distilled findings
├── plan.md       # optional tasks, scope, acceptance, verification
└── progress.md   # optional observed evidence, deviations, blockers
```

Preserve the decision and its evidence, accepted constraints, current task, proof state, authority, unresolved questions, and next action—not the exploratory transcript. Use a commit as the synchronization point when work crosses threads or environments: it names the exact accepted baseline and makes later patches reviewable. A commit is a transport and history boundary, not proof that the change is correct.

Compaction does not replace this layer. Durable state lets a person inspect the contract, a fresh worker resume it, and an independent verifier distinguish inherited claims from checks it actually reran.

## Hand off an assignment, not a transcript

> The next thread needs an owned result, discoverable context, and a proof target.

```text
Outcome:
Read first / canonical state:
Scope and non-goals:
Decisions already made:
Acceptance and verification:
Authority and stop conditions:
Return:
```

Prompt length should follow missing information. Thorsten Ball's prompting examples point agents to relevant code, references, constraints, screenshots, and proof, while repository guidance carries repeated procedure ([04:24:22–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15862s)). A short prompt can be complete when a work item, commit, `AGENTS.md`, skill, and test command already make the contract discoverable. A broad or risky assignment should say more.

The operating procedure is now:

1. keep research, planning, and coordination together while the workstream is coherent;
2. distill decisions and proof targets into durable state;
3. commit the accepted baseline before another environment depends on it;
4. assign bounded implementation with explicit authority and checks;
5. use fresh verification when independence is worth its cost;
6. let one owner integrate the result and promote reusable learning.

Continue a thread while its responsibility and relevant context remain coherent. Synchronize and start fresh when mutation begins after broad exploration, an independent judgment is needed, the plan is invalidated, or the next task is unrelated.

## Sources used

- Current Amp product guidance: [Manual](https://ampcode.com/manual), [“Read Bigger Threads”](https://ampcode.com/news/read-bigger-threads), and the archived [“200k Tokens Is Plenty”](https://ampcode.com/notes/200k-tokens-is-plenty).
- [Jason Liu, “Setting Yourself Up for Success”](https://www.youtube.com/watch?v=il1c1a2FufU) on named long-lived workstreams, compaction, and delegated threads.
- [Thorsten Ball, “Think Harder: How I Prompt”](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15626s) on discoverable context and proof-oriented prompts.
- [Matt Pocock, “Full Walkthrough: Workflow for AI Coding”](https://www.youtube.com/watch?v=-QFHIoCo-Ko) and [Kun's agentic-engineering setup](https://www.youtube.com/watch?v=8ZgpAXe5V5w) on separating implementation, review, and verification roles.
- [dot-agents](https://dot-agents.dev/) supplies the work-item pattern described here.
- Author synthesis from a private review of one user's recent Amp threads; no private prompts or thread identifiers are reproduced.
