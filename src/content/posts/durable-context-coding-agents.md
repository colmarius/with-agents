---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A practical guide to keeping coding-agent intent, decisions, state, and proof in the repo instead of losing them in chat.'
pubDate: 2026-07-02
updatedDate: 2026-08-13
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

Coding agents can now produce substantial code faster than many teams can align around it. The question is where the intent, constraints, decisions, and proof should live when the chat thread is temporary and the repository is the system of record.

This post is the practical version: what to keep in the repo, what to leave in chat, and how to make the next agent run start smarter than the last one. If you prefer the visual deck, start with the [image-slide version](/posts/durable-context-coding-agents-image-deck/slides/#1).

## Fast implementation creates alignment and comprehension debt

> Agents make implementation cheap, but they move intent, alignment, and understanding onto the critical path.

A coding agent can inspect files, draft a plan, edit code, run commands, and summarize the result in minutes. Alignment does not accelerate automatically. Someone still needs to name the goal, constraints, tradeoffs, and proof target before the output becomes expensive to redirect.

Noperator's essay [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) calls this "substantial form without discernible intent": agents can produce convincing code, tests, docs, migrations, screenshots, and PRs from vague instructions, leaving reviewers to reconstruct the goal.

Maggie Appleton's [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) describes the coordination cost: when implementation becomes cheap, "should we build it?" becomes harder than "how?" If the pull request is the first shared checkpoint, it must recover the missing goal, plan, assumptions, and proof.

Addy Osmani calls the ownership cost [cognitive surrender](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [comprehension debt](https://addyosmani.com/blog/comprehension-debt/): tests can be green while nobody can explain the implicit decisions or safely change the result.

Durable context moves intent, constraints, accepted tradeoffs, proof targets, stop conditions, and human decisions before the diff becomes the only artifact.

## Start with the checkpoint you already trust

> Ask where the human first becomes accountable, then move that checkpoint earlier.

```text
How far can the agent run without review?
  ↓
What shared context survives the thread?
  ↓
Where can a human still redirect the work?
intent → plan → trace → diff → PR → release → incident
```

Before prescribing a workflow, locate the operating boundary. Autocomplete has a different risk profile from several terminal agents working against the same repo.

Ask three questions:

- What may the agent do before it must stop for review?
- Which intent, constraints, decisions, and proof targets survive outside chat?
- Where can a human still change direction before rework becomes expensive?

Durable context carries shared intent to a checkpoint where it can still change the work.

## The model is not your project memory

> Models carry broad, lossy public knowledge; the repo carries exact, local, reviewable truth.

Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression loses details. Serious coding tasks are full of details the model cannot infer: the fast test command, the one UI primitive this repo uses, the migration rule, the security constraint, the product decision from last week, or the module boundary that is obvious to the team.

For exact technical work, a correct repo-local example beats expecting the model to infer the rule.

In one Amp example, Thorsten Ball reports that after a short UI-change request with a screenshot proof target, the agent read layered `AGENTS.md` files for the dev-server command, browser-automation and Storybook conventions, port, and checks, then returned the change and screenshots ([04:40:11–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=16811s)).

Chat is RAM: fast, useful, temporary, and noisy. The repo is disk: versioned, reviewable, and available to the next engineer, agent, machine, and session. This is the core idea behind [`dot-agents`](https://dot-agents.dev/): chat can stay messy while files, checks, and work items preserve the parts that change future behavior. The judgment is deciding what to flush to disk.

In a private review of my own agent threads—an N=1 observation, not population evidence—the useful prompts became shorter as the repository context improved. They pointed to `AGENTS.md`, a skill, a work item, a commit, or a known baseline instead of reconstructing project context; short follow-ups steered the run and then expired. When the pointer target is durable, the prompt can be transient.

## What should survive?

> Preserve the parts that change the next run; let the rest expire.

```text
chat exploration
  ├─ false starts
  ├─ temporary hypotheses
  ├─ useful decisions ───────▶ repo-local context
  ├─ proof commands ─────────▶ repo-local context
  ╰─ next action ────────────▶ repo-local context
```

Durable context is useful because it filters, not because it hoards. Keep accepted constraints, proof commands, decisions, task state, examples the agent should copy, and mistakes that should become checks. Leave behind transient prompts, abandoned hypotheses, duplicate logs, and explanations that only made sense in the moment.

Durable does not mean fresh or authoritative. Branches move and saved instructions go stale. For substantial work, name one current source of truth—usually the work item or active plan, optionally anchored to a commit or known baseline—and state which source wins when instructions disagree.

Some context should never be flushed to disk: secrets or credentials, personal data, machine-specific absolute paths, and ephemeral environment URLs or resource IDs. Durable context should be safe to share.

## The repo-memory stack

> Durable context works best as a small stack of map, procedure, state, and proof.

```text
map          AGENTS.md
procedure    Agent Skills, scripts, checklists
state        .agents/work items, plans, progress logs
proof        tests, traces, screenshots, review notes
promotion    updates that make the next run better
```

Each layer answers a different question. The map tells the agent where project truth starts. Procedures tell it how repeated work should happen. State says what is true for this task right now. Proof shows whether the work is done. Promotion turns one task's lesson into reusable guidance. Keeping those layers distinct prevents `AGENTS.md`, skills, and work items from becoming one big junk drawer.

## AGENTS.md is the map

> `AGENTS.md` tells the agent where project truth starts, not everything it could ever need.

```text
AGENTS.md
├─ project shape and ownership boundaries
├─ commands that prove common work
├─ rules that agents must not rediscover
╰─ links to skills, work items, checks, and deeper docs
```

[`AGENTS.md`](https://agents.md/) gives coding agents a predictable place to start. Use it for instructions that apply before task-specific context exists: stack, commands, coding conventions, dangerous paths, security rules, and links to deeper guidance.

A useful `AGENTS.md` is short enough to be read and specific enough to change behavior. It should tell the agent what not to rediscover, not everything the project knows.

Durable does not mean permanent. Cherny describes prompt ablation as deleting existing guidance, observing the model, and restoring only instructions justified by repeated failures; he recommends periodically retesting `CLAUDE.md`, skills, and hooks as models change ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)).

Good entries are concrete: the fast check command, a frontmatter rule, a transcript location, a security constraint, or the UI primitive this repo uses.

Do not turn the map into a junk drawer. If a rule applies only under `src/content/posts/`, put it near that work or in a skill. If a mistake can be caught deterministically, add a check. If a workflow has steps and evidence, package it as a procedure.

## Agent Skills are procedures

> Package workflows when the trigger, steps, evidence, and human decision repeat.

```text
skill = trigger + steps + scripts/assets + proof target

"write article" → article-writing skill
"research API"  → research skill
"run server"    → tmux skill
```

Some context is not a rule; it is a procedure. [Agent Skills](https://agentskills.io/home) package repeatable workflows as folders with instructions and optional scripts, references, or assets. OpenAI's [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure shape: lightweight metadata first, full instructions only when the task calls for them.

Use a skill when a workflow has a recognizable trigger and a repeatable path to proof. The skill should answer four questions:

- When should this load?
- What steps should the agent follow?
- What files, scripts, or references does it need?
- What evidence proves the workflow is done?

Write the description as a routing rule—when the skill should and should not load—not as a human-facing synopsis. Compare representative tasks with and without the skill, and keep only guidance that improves the uncustomized baseline. In their hands-on workshop, Nick Nisi and Zack Proser show both practices and caution that over-prescription can make a capable model worse; their evaluations are practitioner-designed and directional rather than controlled evidence ([00:07:46–00:09:24](https://www.youtube.com/watch?v=pFsfax19yOM&t=466s), [00:29:24–00:31:14](https://www.youtube.com/watch?v=pFsfax19yOM&t=1764s), [01:09:30–01:10:28](https://www.youtube.com/watch?v=pFsfax19yOM&t=4170s)).

Do not package preferences as skills. A style preference belongs in `AGENTS.md`, a formatter, or a linter. A skill earns its place when it prevents a future run from rediscovering the workflow.

## dot-agents keeps task state alive

> Durable work needs restartable state; self-contained work should stay conversational.

```text
.agents/work/<category>/<task>/
├─ index.md       required: lifecycle and next action
├─ research.md    optional: trusted findings and source notes
├─ plan.md        optional: tasks and planned verification
├─ progress.md    optional: observed evidence and blockers
╰─ other files    only when another artifact earns its place
```

`dot-agents` is a lightweight file convention for agent work that needs continuity, coordination, durable decisions, or a handoff. `index.md` is the required entrypoint and owns lifecycle state and the exact next action. Research, requirements, plans, progress, decision records, and persisted handoffs are supporting artifacts, not a mandatory packet.

The two paths are deliberately uneven:

```text
small task   → work in the current thread → verify → report
durable task → work item → plan → implement → record evidence
                                      ╰─ optional handoff
closeout     → promote reusable lessons → commit snapshot → remove work item
```

Implement in the current thread by default. Hand off only when another worker, environment, or independent judgment helps enough to justify the transfer. The work item connects those contexts without dragging every stale search, false start, or abandoned option into the next run. [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) is the tactical version of this loop. When the work is complete, promote what should outlive the task and remove the task-local item after its final committed snapshot; git history remains the archive.

## Move review earlier than the PR

> Review should start with intent, then trace, then diff, then proof.

```text
1. Plan       Does this solve the right problem?
2. Trace      Did the agent inspect and change the right things?
3. Diff       Is the implementation coherent and maintainable?
4. Evidence   What proves it works, and what remains uncertain?
```

The PR diff is still necessary. It is no longer enough.

Planning review catches wrong work before it is generated. Trace review catches skipped files, broad edits, repeated failed commands, ignored test failures, or a tool run that changed more than expected. Diff review checks the implementation. Evidence review checks whether the proof matches the risk.

Vaibhav Gupta of Boundary describes a team that does not use traditional code
review, but surrounds its BAML work with a small durable `architecture.md`,
human-read design documents, dependency checks, and agent execution traces that
feed human-triaged issues
([00:00:01–00:06:00](https://www.youtube.com/watch?v=AMiyLItEtLA&t=1s)). The talk
does not compare defects or maintenance outcomes with conventional review. The
durable-context lesson is narrower than Gupta's process claim: if line review
shrinks, plans, traces, executable invariants, and evidence must become
first-class review artifacts.

The checkpoint does not have to be heavy. For small tasks it might be one paragraph and one test command. For risky tasks it might be a plan, reviewer signoff, browser trace, migration dry run, and rollback note. The important shift is that the human sees intent before the agent has produced a large artifact that is socially hard to throw away.

Authority should be explicit too: permission to investigate does not imply permission to implement, and permission to implement does not imply permission to commit, push, merge, or release.

## Evidence keeps judgment attached to the diff

> Proof belongs where the next reviewer can see it.

```text
low risk    format, lint, focused test
medium      typecheck, integration test, screenshot, curl
high        trace, migration dry run, rollback, human signoff
```

Evidence is part of durable context because "done" is otherwise too easy to say. An agent can produce a confident final answer after a failed test, a skipped check, or an unreviewed assumption. The reviewer needs proof that matches the risk.

Repo state is not automatically trusted state: committed does not mean verified. Record which checks were rerun for this change and which results were inherited; where the baseline is already noisy, preserve enough evidence to distinguish old failures from new ones.

For a content change in this repo, the normal proof is:

```bash
npm run check
npm run build
```

For UI work, evidence may include a screenshot or browser trace. For API work, it may include `curl` output or an integration test. For migrations, it may include a dry run and rollback note. The full ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it).

Evidence does not replace judgment. It gives judgment something concrete to inspect.

## Promotion closes the loop

> Preserve what changed future behavior; delete or ignore the rest.

```text
╭──────────╮    ╭────────────╮    ╭────────╮    ╭──────────╮
│   Map    │───▶│ Procedure  │───▶│ State  │───▶│ Evidence │
╰──────────╯    ╰────────────╯    ╰────────╯    ╰──────────╯
      ▲                                                    │
      ╰──────────── promote what helped the next run ◀─────╯
```

Promotion should leave the next run better, not merely larger: preserve what changes behavior and prune what no longer earns its place.

## Durable context travels

> Repo-local context makes agent work portable, reviewable, and less magical.

A chat transcript helps the person in that chat. Repo-local context lets a fresh thread continue the plan, a teammate inspect the same intent and proof, and local, cloud, and CI environments use the same commands and conventions. Prefer a simple file, script, test, or work item over a vendor-specific memory blob when it can carry the truth.

| Before durable context | After durable context |
| --- | --- |
| New thread asks, "What are we doing?" | New thread opens the work item and continues. |
| Agent rediscovers commands by trial and error. | `AGENTS.md` and skills point to the known checks. |
| Review starts with a surprising diff. | Review starts with intent, constraints, and proof target. |
| Useful decisions are buried in chat. | Decisions are linked from the task state. |
| Every agent gets a slightly different setup. | Repo-local files make the setup portable. |

The agent does not become wise because a folder exists. It becomes easier to steer because the steering surface is visible. The human can review the plan, trace, diff, and evidence instead of inferring all of that from the final code.

## Start with one repeated pain

> Promote the smallest artifact that makes the next run better.

```text
missed command       → AGENTS.md
repeated workflow    → skill / script / checklist
lost task state      → .agents/work item
repeated mistake     → lint / test / pre-commit check
repeated ambiguity   → architecture note / example
high-risk decision   → human review rule
```

Do not design the perfect agent operating model. Start with one repeated pain. Someone has to own the loop: notice what helped, promote it, delete stale guidance, and keep the next run better than the last.

**Start with one real task. Write down what made the agent better. Repeat.**

## Sources used

- Noperator, [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the surrender/debt framing and the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- Thorsten Ball, [“Think Harder: How I Prompt”](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15626s) ([04:40:11–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=16811s)) — an Amp practitioner account of a short UI-change prompt using layered `AGENTS.md` instructions and screenshot proof.
- Boris Cherny, [We Cut 80% of Claude Code’s Prompt](https://www.youtube.com/watch?v=qyPCVqFUyDo) ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)) — source for model-by-model prompt ablation and restoring guidance only after repeated observed failures.
- Nick Nisi and Zack Proser, [Writing & Using Skills](https://www.youtube.com/watch?v=pFsfax19yOM) ([00:07:46–00:09:24](https://www.youtube.com/watch?v=pFsfax19yOM&t=466s), [00:29:24–00:31:14](https://www.youtube.com/watch?v=pFsfax19yOM&t=1764s), [01:09:30–01:10:28](https://www.youtube.com/watch?v=pFsfax19yOM&t=4170s)) — a practitioner workshop supporting descriptions as routing rules and comparative skill checks; its evaluation figures are informal, not controlled measurements.
- Vaibhav Gupta, [fighting slop with slop](https://www.youtube.com/watch?v=AMiyLItEtLA) ([00:00:01–00:06:00](https://www.youtube.com/watch?v=AMiyLItEtLA&t=1s)) — a Boundary product and engineering-practice account supporting durable architecture guidance, reviewed design writing, executable boundaries, and trace-based issue discovery when traditional line review is reduced.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/) and [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) — source material for file-backed task state and handoffs.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) — internal companion piece for the evidence ladder.
- Author synthesis from a private review of the author's own agent threads (one user's corpus); no thread content, prompts, or identifiers are reproduced.
