---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A practical guide to keeping coding-agent intent, decisions, state, and proof in the repo instead of losing them in chat.'
pubDate: 2026-07-02
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: false
unlisted: false
order: 1
---

<!--
Maintenance note for agents:
durable-context-coding-agents.md is the canonical public article/deck for this topic.
durable-context-coding-agents-v2.md is the richer slide-first alternate derived from the same material.

When changing this canonical file, also review durable-context-coding-agents-v2.md in the same diff and either:
- mirror factual, source, terminology, and section-order changes where applicable, or
- leave v2 intentionally different because it is the richer slide-first alternate.

durable-context-coding-agents-v3.md is an image-only experiment and is not part of the canonical/v2 sync contract.
Do not publish, rename, delete, or replace draft variants without explicit human approval.
-->

## Your Repo Is the Memory
<!-- slide:
layout: cover
class: title
-->

> Chat is RAM. The repo is disk.

Coding agents can now produce substantial code faster than many teams can align around it. The question is where the intent, constraints, decisions, and proof should live when the chat thread is temporary and the repository is the system of record.

This post is the practical version: what to keep in the repo, what to leave in chat, and how to make the next agent run start smarter than the last one. If you prefer the visual deck, start with the [image-slide version](/posts/durable-context-coding-agents-v3/slides/#1).

## Coding agents made implementation cheap
<!-- slide:
layout: cover
-->

> They did not make alignment free.

The useful surprise is speed. A coding agent can inspect files, draft a plan, edit code, run commands, and summarize the result in minutes. The dangerous surprise is that alignment does not speed up automatically. Someone still needs to name the goal, constraints, tradeoffs, and proof target. If that context only lives in chat, it disappears before the next engineer or agent can use it.

## Start with the checkpoint you already trust

> Ask where the human first becomes accountable, then move that checkpoint earlier.

```text
Who uses coding agents?
  ↓
How much do they delegate?
  ↓
Where is the first real checkpoint?
plan → trace → diff → PR review → incident review
```

Before prescribing a workflow, locate the real checkpoint. A team using agents as autocomplete has a different problem from a team running several terminal agents against the same repo.

Ask three questions:

- How much work do you let agents do?
- Where is your first checkpoint: prompt, plan, trace, diff, PR, or incident?
- What do you actually review: the plan, the commands, the code, the tests, the final summary?

Durable context is not a documentation hobby. It is the way to put the checkpoint where it can still change the work.

## Fast form without shared intent

> Generative AI makes form cheap; intent no longer arrives automatically.

```text
unclear intent + capable generator = convincing artifact
                                     with unclear ownership
```

The failure mode is not only hallucinated code. It is code-shaped output that looks substantial before anyone has made the intent explicit.

Noperator's essay [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) names the pathology: "generative AI can produce substantial form with minimally applied intent," and "substantial form without discernible intent." Agents compress the friction that used to force intent into the artifact. Reviewers then have to recover intent from the output unless the team put it somewhere durable first.

## The PR inherits too many jobs

> When implementation collapses to minutes, alignment moves onto the critical path.

```text
old path:    plan ── discuss ── build ── review
agent path:  prompt ───────────────▶ PR
                         ▲
            all missing alignment lands here
```

Maggie Appleton's [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) makes the economic shift clear: writing code is getting fast and cheap, so the hard question becomes not "how do we build it?" but "should we build it?" Agents collapse the old implementation window, taking many informal alignment moments with it.

The pull request then inherits too many jobs. It must explain the goal, recover the plan, expose hidden assumptions, prove the implementation, and coordinate reviewers who were not present while the agent worked.

Durable context moves some alignment back before generation. The plan, constraints, accepted tradeoffs, proof target, and stop conditions live where another engineer or agent can inspect them before the diff becomes the only artifact.

## Speed becomes comprehension debt

> If nobody can explain the generated code, the team owns comprehension debt.

```text
fast generation
  ↓
large diff
  ↓
shallow review
  ↓
code the team owns but cannot explain
```

Addy Osmani's public post on [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) defines the posture as inheriting AI output without doing the underlying reasoning. His [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) article frames the bill: the gap between how much code exists and how much of it any human genuinely understands.

Tests can be green while understanding is not. Durable context keeps that understanding attached to the work: what we asked for, why it matters, what changed, what proof exists, what is uncertain, and where a human made the call.

## The model is not your project memory

> The model knows public patterns; it does not know which pattern is true here.

```text
LLM memory:  broad, compressed, lossy public knowledge
repo truth:  exact commands, boundaries, decisions, constraints
agent work:  useful only when the second shapes the first
```

Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression loses details. Serious coding tasks are full of details the model cannot infer: the fast test command, the one UI primitive this repo uses, the migration rule, the security constraint, the product decision from last week.

If that truth lives only in a chat thread, it dies with the thread. If it lives in files, checks, and work items inside the repo, the next run can use it.

## The repo is disk; chat is RAM

> Chats are working memory; repo-local files are durable memory.

```text
chat thread ── explore / decide / implement ──▶ repo-local context
     ▲                                                │
     ╰──────────── next person or agent starts here ◀─╯
```

This is the core idea behind `dot-agents`: put operating context for agentic work in versioned, repo-local files. Chat can stay messy. The repo should preserve the parts that change future behavior.

Think of chat as RAM: fast, useful, temporary, and noisy. Think of files as disk: slower to write, easier to share, easier to review, and available to the next engineer, agent, machine, and session.

The judgment is deciding what to flush to disk.

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

Do not package preferences as skills. A skill earns its place when it prevents a future run from rediscovering the workflow.

## dot-agents keeps task state alive

> Long work needs restartable state, not a heroic chat transcript.

```text
.agents/work/<category>/<task>/
├─ index.md       current status and next action
├─ research.md    trusted findings and source notes
├─ plan.md        implementation-ready plan
├─ progress.md    checks, blockers, decisions, handoffs
╰─ decisions/     durable calls that should not be reopened
```

`dot-agents` is a lightweight file convention for long-running agent work. It separates noisy exploration from the state that needs to survive: what we are doing, what we trust, what we decided, what remains, and how the next thread should continue.

The workflow is simple:

```text
Context → Plan → Handoff Prompt → Implement → Record Progress → Promote
```

Research threads can go wide. Implementation threads should be narrow. The work item connects them without dragging every stale search, false start, or abandoned option into the next run. [Small Threads, Durable State](/posts/small-threads-durable-state) is the tactical version of this loop. Keep task-local context close to the task; do not turn it into a permanent transcript dump.

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

The checkpoint does not have to be heavy. For small tasks it might be one paragraph and one test command. For risky tasks it might be a plan, reviewer signoff, browser trace, migration dry run, and rollback note.

## Evidence keeps judgment attached to the diff

> Proof belongs where the next reviewer can see it.

```text
low risk    format, lint, focused test
medium      typecheck, integration test, screenshot, curl
high        trace, migration dry run, rollback, human signoff
```

Evidence is part of durable context because "done" is otherwise too easy to say. The reviewer needs proof that matches the risk.

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

The point is not to collect more context. The point is to run a promotion loop. When an agent misses the same command twice, update the map. When a sequence repeats, make a skill or script. When task context spans sessions, create a work item. When a mistake is mechanically detectable, add a check. When ambiguity keeps returning, write the architecture note or example the agent should copy.

## Durable context travels

> Repo-local context survives the agent, the laptop, the teammate, and the thread.

```text
human laptop ─┐
cloud VM      ├──▶ repo-local context ──▶ same commands, rules, state, proof
CI runner     │
next teammate ┘
```

This is the benefit that makes the work worth doing. A chat transcript helps the person in that chat. Repo-local context helps the next person, the next agent, and the next environment.

That portability matters because agent stacks will keep changing. The durable artifact should not be a vendor-specific memory blob if a simple file, script, test, or work item can carry the truth.

## The before and after is mundane

> Durable context makes agent work less magical and more reviewable.

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

Do not design the perfect agent operating model. Start with one repeated pain. Notice what helped, promote it, delete stale guidance, and keep the next run better than the last.

**Start with one real task. Write down what made the agent better. Repeat.**

## Sources used

- Noperator, [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the surrender/debt framing and the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/) and [Small Threads, Durable State](/posts/small-threads-durable-state) — source material for file-backed task state and handoffs.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) — internal companion piece for the evidence ladder.
