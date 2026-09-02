---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'How to decide which coding-agent context belongs in chat, AGENTS.md, skills, work items, docs, tests, and saved results.'
context: coding
pubDate: 2026-07-02
updatedDate: 2026-09-02
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: false
unlisted: false
order: 1
---

<!--
Maintenance note for agents:
durable-context-coding-agents.md is the canonical public article/deck for this topic.
durable-context-coding-agents-extended-deck.md is the richer slide-first alternate derived from the same material.

The canonical post is reader-first and may merge adjacent framing sections for scanning. Its opening may absorb source framing that the extended deck presents after the checkpoint slide. The extended deck may retain separate source, diagram, and pacing slides. When either changes, review the other in the same diff and keep factual claims, source roles, links, terminology, caveats, and broad argument order synchronized; section count, heading granularity, visuals, and slide pacing may intentionally diverge.

durable-context-coding-agents-image-deck.md is the linked visual alternate. When the canonical argument changes, review the image deck in the same diff and keep its claims, broad order, practical ending, notes, and source roles synchronized; its slide count and imagery may intentionally diverge.
Do not publish, rename, delete, or replace draft variants without explicit human approval.
-->

## Your Repo Is the Memory
<!-- slide:
layout: cover
class: title
-->

> Chat is RAM. The repo is disk.

**Conversation context** is working memory for one run: prompts, searches, raw tool output, tentative diagnoses, corrections, and false starts. It is useful because it is quick and disposable. Assume it will disappear, be compacted, or become hard for someone else to find.

**Durable repo-local knowledge** is the smaller set of accepted facts stored in versioned files: the command every agent should run, the product decision a future change must preserve, the current task's next action, or the test that catches a repeated mistake. A fresh agent, teammate, or CI job can inspect it without recovering the original conversation.

The goal is not to save chat. It is to select what should still change behavior after the chat is gone. If you prefer the visual treatment, use the [image-slide version](/coding/posts/durable-context-coding-agents-image-deck/slides/#1).

Why does this matter now? Caleb Gross describes generative AI as making “substantial form without discernible intent” unusually easy; applying that observation to code is author synthesis ([You can just say it](https://noperator.dev/posts/you-can-just-say-it/)). Maggie Appleton argues that cheap implementation pushes team alignment onto the critical path ([One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment)). Addy Osmani calls the gap between existing code and human understanding [comprehension debt](https://addyosmani.com/blog/comprehension-debt/). Repo-local knowledge does not solve those problems by itself, but it keeps intent and understanding from living only in a private thread.

## What should survive?

> Preserve the parts that change the next run; let the rest expire.

```text
chat exploration
├─ leave in chat
│  ├─ false starts
│  ╰─ temporary hypotheses
╰─ save in the repo
   ├─ useful decisions
   ├─ proof commands
   ╰─ next action
```

<!-- notes -->

Durable context is useful because it filters, not because it hoards. Keep accepted constraints, proof commands, decisions, task state, examples the agent should copy, and mistakes that should become checks. Leave behind transient prompts, abandoned hypotheses, duplicate logs, and explanations that only made sense in the moment.

Simon Willison calls an LLM a [lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): broad knowledge is compressed, and exact details disappear. For exact technical work, a correct repo-local example beats expecting the model to infer the rule. That example might be this repository's test command, migration rule, security boundary, preferred component, or recent product decision.

That distinction also explains why a short prompt can work. In one Amp example, Thorsten Ball asked for a UI change and a Storybook screenshot. The agent found layered `AGENTS.md` files containing the dev-server, browser-automation, Storybook, port, and check instructions, then completed the work and returned screenshots ([00:20:22–00:22:55](https://www.youtube.com/watch?v=HegqGzD-kvc&t=1222s)). The prompt carried the task; the repository carried the recurring procedure.

Do not confuse durable with authoritative. A committed note can be stale. For substantial work, name the current source of truth and say what wins when a work item, design note, code, and test disagree. Do not store secrets, credentials, personal data, machine-specific absolute paths, temporary portal URLs, or short-lived resource IDs as repository memory.

## Put each fact in the smallest useful home

> Choose a file based on who needs the fact, when they need it, and whether a check can enforce it.

Use this placement guide:

| Need | Store it here |
| --- | --- |
| Shared command or safety rule (`npm run check`) | Root `AGENTS.md`. |
| Directory rule (source-only content must not enter public builds) | Nested `AGENTS.md` beside that tree. |
| Repeated workflow (content review with required checks) | `.agents/skills/<name>/`; add scripts only when useful. |
| Resumable task (status, blocker, next action) | Work item `index.md` under `.agents/work/`; add a plan or progress log when needed. |
| Domain fact with an existing owner (classification codes) | Update the source enum and its consumer or focused test; do not copy the list into `AGENTS.md`. |
| Mechanical invariant (excerpt ranges are half-open) | Schema, guard, test, or other executable check. |

[`AGENTS.md`](https://agents.md/) is a predictable starting point for setup, commands, conventions, and safety rules. It should point to deeper truth instead of containing everything the project knows. Put a directory-specific rule near that directory so unrelated work does not pay to read it.

[Agent Skills](https://agentskills.io/home) are for procedures with a recognizable trigger and repeatable steps. A skill can bundle instructions, scripts, references, and assets. Compatible agents first see its name and description, then load the full instructions when the task calls for them; OpenAI's [Codex Skills documentation](https://developers.openai.com/codex/skills) describes the same progressive-disclosure pattern. A formatting preference is not a skill. A source-review workflow with required checks can be.

Use a work item only when continuity has value. [`dot-agents`](https://dot-agents.dev/) uses `index.md` as the entry point for current status and the exact next action; research, plans, progress, and handoffs are optional. A typo fixed and verified in one conversation needs no task folder.

## Flush decisions to the repo as you work

> Explore in chat, write down accepted state, and finish with the smallest reusable improvement.

Use this loop:

1. **Explore in the conversation.** Search, compare options, run experiments, and discard weak hypotheses without creating permanent files.
2. **Write accepted decisions where they belong.** Update the active work item for task-local state; update a design note or test for a fact that should outlive the task.
3. **Make interrupted work restartable when necessary.** Record the current baseline, blocker, evidence already observed, and one exact next action. Do not paste the transcript.
4. **Keep proof visible.** Commit the test or fixture when it has lasting value. Put one-off command results, screenshots, or review decisions in the work item or an intentional artifact path.
5. **Close the loop.** When a lesson repeats, promote only its reusable part: a short repository-wide rule to `AGENTS.md`, a full procedure to a skill, a mechanical requirement to a script or test, or a design choice to a short decision note. Then remove the completed task notes; Git history keeps the record without loading it into future runs.

This article owns that storage decision. [Brief the Agent Like a Capable Co-Worker](/coding/posts/capable-coworker-coding-agents) covers the initial assignment. [Right-Sized Threads, Durable State](/coding/posts/right-sized-threads-durable-state) covers continuation, fresh workers, and handoffs. [Make the Agent Prove It](/coding/posts/make-the-agent-prove-it) covers risk-scaled verification. Link to those contracts instead of copying them into every work item.

## Keep repository memory trustworthy

> Durable guidance must stay scoped, current, reviewable, and cheaper than rediscovery.

Five habits keep the repository from becoming a larger context problem:

- **Name an owner.** The active plan owns current task state; tests own executable expectations; a named decision record owns its rationale. State precedence when two sources can conflict.
- **Keep information near its use.** Root guidance covers repository-wide facts. Nested guidance, skills, and work items load only for relevant work.
- **Record evidence, not confidence.** “`npm test` passed at commit `abc123`” can be checked. “Everything looks good” cannot.
- **Review changes through git.** Treat instructions and skills like code: inspect diffs, explain important changes, and remove stale entries.
- **Prefer portable files and checks.** A plain file, script, or test can travel across agents, teammates, local machines, cloud environments, and CI.

Durable does not mean permanent. Boris Cherny describes deleting system guidance for each new model, observing behavior, and restoring instructions only after repeated failures; he recommends periodically retesting project guidance, skills, and hooks ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)).

The same rule applies to procedures. Nick Nisi and Zack Proser describe comparing tasks with and without a skill, and Nisi reports that an over-prescriptive Next.js skill made their approximate evaluation worse ([00:29:24–00:30:27](https://www.youtube.com/watch?v=pFsfax19yOM&t=1764s), [01:09:30–01:10:28](https://www.youtube.com/watch?v=pFsfax19yOM&t=4170s)). Their figures are informal; the durable lesson is to test whether guidance still helps instead of preserving it by default.

## Start with one repeated pain

> Promote the smallest artifact that makes the next run better.

Start with the smallest response to a problem you have seen more than once:

| Repeated pain | Smallest useful change |
| --- | --- |
| Agent misses the same command. | Add it to the relevant `AGENTS.md`. |
| Team repeats a workflow by hand. | Add a skill, script, or checklist. |
| Work cannot resume after interruption. | Add a work item with status and next action. |
| The same bug returns. | Add a test, fixture, lint rule, or CI check. |
| A design choice keeps being reopened. | Add a short decision note or known-good example. |
| Guidance keeps being ignored or misapplied. | Narrow it, move it closer to its use, or delete it. |

Do not design a perfect memory system. Fix one repeated loss of context, then check whether the next run actually improves. Someone must own the loop: notice what helped, store it in the right place, and remove it when it stops helping.

**Start with one real task. Write down what made the agent better. Repeat.**

## Sources used

- Caleb Gross (noperator), [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing; the essay is about creative artifacts generally, and its application to coding agents is author synthesis.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- Thorsten Ball, [“Think Harder: How I Prompt”](https://www.youtube.com/watch?v=HegqGzD-kvc) ([00:20:22–00:22:55](https://www.youtube.com/watch?v=HegqGzD-kvc&t=1222s)) — an Amp co-creator's account of a short UI-change prompt using layered `AGENTS.md` instructions and screenshot proof.
- Boris Cherny, [We Cut 80% of Claude Code’s Prompt](https://www.youtube.com/watch?v=qyPCVqFUyDo) ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)) — source for model-by-model prompt ablation and restoring guidance only after repeated observed failures.
- Nick Nisi and Zack Proser, [Writing & Using Skills](https://www.youtube.com/watch?v=pFsfax19yOM) ([00:29:24–00:30:27](https://www.youtube.com/watch?v=pFsfax19yOM&t=1764s), [01:09:30–01:10:28](https://www.youtube.com/watch?v=pFsfax19yOM&t=4170s)) — a hands-on workshop on testing whether a skill improves a task; its evaluation figures are approximate.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/) — source material for file-backed task state.
- [Brief the Agent Like a Capable Co-Worker](/coding/posts/capable-coworker-coding-agents), [Right-Sized Threads, Durable State](/coding/posts/right-sized-threads-durable-state), and [Make the Agent Prove It](/coding/posts/make-the-agent-prove-it) — internal companion guides for assignments, thread management, and verification.
