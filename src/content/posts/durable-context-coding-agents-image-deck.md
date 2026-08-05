---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents (Image Deck)'
description: 'A visual presentation about keeping coding-agent intent, decisions, task state, and proof in the repository.'
pubDate: 2026-07-02
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: false
unlisted: true
order: 4
---

<!--
Maintenance note for agents:
durable-context-coding-agents-image-deck.md is the linked visual alternate for the canonical public article in durable-context-coding-agents.md.
When the canonical argument changes, review this deck in the same diff and keep its claims, broad order, practical ending, notes, and source roles synchronized; its slide count and imagery may intentionally diverge.

Slide images live in public/slides/durable-context-coding-agents-image-deck/.
Do not publish, rename, delete, or replace the canonical public post without explicit human approval.
-->

## Your Repo Is the Memory
<!-- slide:
layout: image
class: image-only
-->

![Generated cover slide for Your Repo Is the Memory, with the subtitle Chat is RAM and the repo is disk.](/slides/durable-context-coding-agents-image-deck/Slide-1.png)

<!-- notes -->

Coding agents can now produce substantial code faster than many teams can align around it. This talk asks where intent, constraints, decisions, and proof should live when chat is temporary and the repository is the system of record.

The practical goal is to decide what to keep in the repo, what to leave in chat, and how to make the next run start smarter than the last one.

## Coding agents made implementation cheap
<!-- slide:
layout: image
class: image-only
-->

![Generated slide saying coding agents made implementation cheap and asking where the memory should live.](/slides/durable-context-coding-agents-image-deck/Slide-2.png)

<!-- notes -->

The useful surprise is speed. A coding agent can inspect files, draft a plan, edit code, run commands, and summarize the result in minutes. The dangerous surprise is that alignment does not speed up automatically.

Noperator's [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) describes the failure mode as "substantial form without discernible intent": a capable generator can produce convincing code, tests, docs, and PRs from a vague instruction, leaving reviewers to reconstruct the goal.

## The PR inherits too many jobs
<!-- slide:
layout: image
class: image-only
-->

![Generated slide comparing the old plan-discuss-build-review path with the agent path where alignment moves onto the critical path.](/slides/durable-context-coding-agents-image-deck/Slide-5.png)

<!-- notes -->

Maggie Appleton's [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) describes the coordination shift: when implementation becomes cheap, "should we build it?" becomes harder than "how?"

If the pull request is the first shared checkpoint, it must recover the goal, plan, assumptions, proof, and coordination that disappeared when implementation collapsed to minutes. Durable context moves those decisions earlier, while the work is still cheap to redirect.

## Speed becomes comprehension debt
<!-- slide:
layout: image
class: image-only
-->

![Generated slide showing fast generation, large diffs, shallow review, and green tests turning speed into comprehension debt.](/slides/durable-context-coding-agents-image-deck/Slide-6.png)

<!-- notes -->

Addy Osmani calls the ownership posture [cognitive surrender](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and the accumulated gap [comprehension debt](https://addyosmani.com/blog/comprehension-debt/). Tests can be green while nobody can explain the implicit decisions or safely change the result.

The team still owns generated code. Durable context keeps the goal, accepted tradeoffs, proof target, uncertainties, and human decisions attached to that code.

## Start with the checkpoint you already trust
<!-- slide:
layout: image
class: image-only
-->

![Generated slide showing an intent-to-incident timeline and three questions: how far the agent runs, what context survives, and where a human can redirect the work.](/slides/durable-context-coding-agents-image-deck/Slide-3.png)

<!-- notes -->

Before prescribing a workflow, locate the operating boundary. Autocomplete has a different risk profile from several terminal agents working against the same repo.

Ask three questions: how far can the agent run without review, which shared context survives outside chat, and where can a human still change direction before rework becomes expensive? Durable context carries shared intent to a checkpoint where it can still change the work.

## The model is not your project memory
<!-- slide:
layout: image
class: image-only
-->

![Generated slide contrasting broad lossy model memory with exact local repo truth.](/slides/durable-context-coding-agents-image-deck/Slide-7.png)

<!-- notes -->

Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they carry broad public patterns, but the compression loses details. The model cannot infer this repo's fast test command, migration rule, security constraint, product decision, or preferred module boundary.

For exact technical work, a correct repo-local example beats expecting the model to infer the rule. Chat can remain temporary when it points to current, reviewable files.

## What should survive?
<!-- slide:
layout: image
class: image-only
-->

![Generated slide filtering temporary chat into six durable items: intent, constraints, tradeoffs, decisions, proof, and next action.](/slides/durable-context-coding-agents-image-deck/Slide-9.png)

<!-- notes -->

Durable context is useful because it filters, not because it hoards. Preserve accepted constraints, proof commands, decisions, task state, examples worth copying, and mistakes that should become checks. Let false starts, temporary hypotheses, duplicate logs, and moment-specific explanations expire.

Durable does not automatically mean current or authoritative. Name one current source of truth and say which source wins when instructions disagree. Never flush secrets, personal data, machine-specific paths, ephemeral URLs, or resource identifiers into repository memory.

## The repo-memory stack
<!-- slide:
layout: image
class: image-only
-->

![Generated slide mapping durable repo memory into AGENTS.md, skills, work items, decisions, and evidence.](/slides/durable-context-coding-agents-image-deck/Slide-10.png)

<!-- notes -->

Each layer answers a different question. The map says where project truth starts. Procedures say how repeated work should happen. State says what is true for this task now. Evidence shows whether the work is done. Promotion turns one task's lesson into reusable guidance.

Keeping those layers distinct prevents `AGENTS.md`, skills, and work items from becoming one large junk drawer.

## AGENTS.md is the map
<!-- slide:
layout: image
class: image-only
-->

![Generated slide explaining AGENTS.md as the map for stack, directories, ownership boundaries, checks, and rules.](/slides/durable-context-coding-agents-image-deck/Slide-11.png)

<!-- notes -->

[`AGENTS.md`](https://agents.md/) is for instructions that apply before task-specific context exists: project shape, commands, coding conventions, dangerous paths, security rules, and links to deeper guidance.

It should be short enough to read and specific enough to change behavior. Boris Cherny recommends periodically deleting guidance, observing current model behavior, and restoring only instructions justified by repeated failures ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)). Durable does not mean permanent.

## Agent Skills are procedures
<!-- slide:
layout: image
class: image-only
-->

![Generated slide defining a skill as trigger, steps, scripts or assets, and proof target.](/slides/durable-context-coding-agents-image-deck/Slide-12.png)

<!-- notes -->

[Agent Skills](https://agentskills.io/home) package repeatable workflows as folders with instructions and optional scripts, references, or assets. Use one when a workflow has a recognizable trigger, repeatable steps, supporting resources, and a clear proof target.

A style preference belongs in `AGENTS.md`, a formatter, or a linter. A skill earns its place when it prevents a future run from rediscovering a procedure.

## dot-agents keeps task state alive
<!-- slide:
layout: image
class: image-only
-->

![Generated slide showing a readable dot-agents work item with index, research, plan, progress, and decisions files.](/slides/durable-context-coding-agents-image-deck/Slide-13a.png)

<!-- notes -->

`dot-agents` is a lightweight file convention for long-running agent work. It separates noisy exploration from the state that must survive: what we are doing, why, what we trust, what we decided, what remains, and how the next thread should continue.

Research threads can go wide. Implementation threads should be narrow. The work item connects them without dragging every false start into the next run. Keep task-local context close to the task, then archive or remove it when the work is complete.

## Move review earlier than the PR
<!-- slide:
layout: image
class: image-only
-->

![Generated slide showing review moving earlier through plan, trace, diff, and evidence before the merge request checkpoint.](/slides/durable-context-coding-agents-image-deck/Slide-14.png)

<!-- notes -->

The diff is necessary, but it is no longer enough. Plan review catches wrong work before it is generated. Trace review catches skipped files, broad edits, repeated failures, and ignored checks. Diff review checks the implementation. Evidence review asks whether the proof matches the risk.

Authority should be explicit: permission to investigate does not imply permission to implement, and permission to implement does not imply permission to commit, push, merge, or release.

## Evidence keeps judgment attached to the diff
<!-- slide:
layout: image
class: image-only
-->

![Generated slide showing three readable proof tiers, from low-risk focused checks through high-risk dry runs, rollback, and human signoff.](/slides/durable-context-coding-agents-image-deck/Slide-15.png)

<!-- notes -->

Evidence is durable context because "done" is otherwise too easy to say. The proof should scale with risk: focused checks for a small change, integration or visual evidence for medium risk, and dry runs, rollback plans, or signoff for high risk.

Committed does not mean verified. Record which checks were rerun for this change, which results were inherited, and what remains uncertain. Evidence does not replace judgment; it gives judgment something concrete to inspect.

## Promotion closes the loop
<!-- slide:
layout: image
class: image-only
-->

![Generated slide showing task-local learning distilled from work items and evidence into reusable repo guidance, so the next task starts smarter.](/slides/durable-context-coding-agents-image-deck/Slide-19.png)

<!-- notes -->

Promotion should leave the next run better, not merely larger. Preserve what changed future behavior, turn repeated mistakes into checks, and prune guidance that no longer earns its place.

The useful loop is map, procedure, state, evidence, then promotion back into the smallest reusable artifact.

## The before and after is mundane
<!-- slide:
layout: image
class: image-only
-->

![Generated slide comparing rediscovery, surprise diffs, and buried decisions with known commands, explicit proof targets, and linked task state.](/slides/durable-context-coding-agents-image-deck/Slide-18.png)

<!-- notes -->

A chat transcript helps the person in that chat. Repo-local context lets a fresh thread continue the plan, a teammate inspect the same intent and proof, and local, cloud, and CI environments share commands and conventions.

The agent does not become wise because a folder exists. It becomes easier to steer because the steering surface is visible and the next reviewer does not have to reconstruct the work from the final diff.

## Start with one repeated pain
<!-- slide:
layout: image
class: image-only
-->

![Closing slide mapping repeated pain to the smallest durable artifact and saying to start with one real task, record what helped, and repeat.](/slides/durable-context-coding-agents-image-deck/Slide-20.png)

<!-- notes -->

Do not design the perfect agent operating model. Start with one repeated pain: a missed command, repeated workflow, lost task state, recurring mistake, repeated ambiguity, or high-risk decision. Promote the smallest artifact that would make the next run better.

Someone has to own the loop: notice what helped, promote it, delete stale guidance, and keep the next run better than the last.

Start with one real task. Write down what made the agent better. Repeat. `dot-agents.dev` is one example of how to keep that context close to the work.

## Sources used

- Noperator, [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the surrender/debt framing and the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- Boris Cherny, [We Cut 80% of Claude Code’s Prompt](https://www.youtube.com/watch?v=qyPCVqFUyDo) ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)) — source for prompt ablation and restoring guidance only after repeated observed failures.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/), [Small Threads, Durable State](/posts/small-threads-durable-state), and [Make the Agent Prove It](/posts/make-the-agent-prove-it) — source material for file-backed task state, handoffs, and the evidence ladder.
