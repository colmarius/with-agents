---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A practical workflow for grounding coding agents in repo-local context: maps, procedures, durable state, and evidence.'
pubDate: 2026-06-25
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: true
order: 7
---

## Your repo is the memory

LLMs are useful because they know a lot of broad patterns.

Coding agents become useful in real projects when they also know your local truth:

- how this repo is built
- what conventions matter here
- which workflows repeat
- what decisions have already been made
- what evidence counts as done

**Thesis:** make the repository carry that truth.

The practical loop:

```text
map → procedure → state → evidence
```

## The model knows patterns, not your project

Simon Willison describes LLMs as ["a lossy encyclopedia"](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression is lossy.

That is why agents can feel both magical and slightly wrong.

They can infer the idea of an Astro site, a React component, or a test suite. They cannot reliably infer your exact:

- build commands
- source layout
- style preferences
- architecture boundaries
- deployment constraints
- half-written decisions from last week

For project-specific work, the model needs more than memory. It needs anchors.

## The real failure mode is comprehension debt

The risk is not simply "AI writes bad code."

The deeper risk is that the codebase grows faster than the team's understanding of it.

Addy Osmani calls the posture [cognitive surrender](https://addyosmani.com/blog/cognitive-surrender/): the AI output quietly becomes your output, and you stop forming an independent view.

The bill shows up as **comprehension debt**:

- code you own but cannot explain
- design choices you cannot reconstruct
- tests you trust but did not think through
- diffs you approved because they looked plausible

Durable context is not a substitute for understanding. It is scaffolding that helps humans and agents stay calibrated.

## The pivot: stop storing truth in the chat

Chat history is a poor source of truth.

It is hard to search, hard to review, hard to version, and easy to lose when the thread dies.

The model weights are also not the source of truth. They contain public patterns, not your current repo state.

The local repository is different:

- versioned
- reviewable
- grep-able
- close to the code
- available to the next agent thread

So the operating principle becomes:

> If the agent needs to remember it, decide whether it belongs in the repo.

## The durable context loop

Use a small loop instead of a giant instruction file.

```text
╭───────────╮   ╭────────────╮   ╭─────────╮   ╭──────────╮
│   Map     │──▶│ Procedure  │──▶│  State  │──▶│ Evidence │
╰───────────╯   ╰────────────╯   ╰─────────╯   ╰──────────╯
      ▲                                               │
      ╰──────── promote what helped back into repo ───╯
```

- **Map:** where should the agent look?
- **Procedure:** how do we do this repeated workflow?
- **State:** what has already happened on this task?
- **Evidence:** how do we know the work is done?

The loop matters more than any one file name.

## Map: tell agents where project truth lives

[`AGENTS.md`](https://agents.md/) is a predictable place for project guidance: setup commands, checks, conventions, and gotchas.

But the best `AGENTS.md` is not a giant manual.

OpenAI's [Harness Engineering](https://openai.com/index/harness-engineering/) write-up describes a useful pattern: treat `AGENTS.md` as a table of contents and keep deeper knowledge in structured repo-local docs.

Good map content:

- project overview
- commands to run
- paths that matter
- coding conventions
- security constraints
- links to deeper docs or work items

If everything is important, nothing is. Keep the map short enough to use.

## Procedure: capture workflows you repeat

Some context is not a rule. It is a procedure.

[Agent Skills](https://agentskills.io/home) package repeatable workflows as folders with a `SKILL.md` file and optional scripts, references, and assets. OpenAI's [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure idea: the agent sees skill metadata first, then loads the full instructions when the task calls for it.

Use a skill when the workflow is repeated and procedural enough to package:

- release checklist
- database migration routine
- browser verification flow
- incident investigation steps
- content planning workflow

Do not turn every preference into a skill. Keep skills for workflows where reuse beats another prompt.

## State: survive thread death with work items

Even with a good map and good procedures, long-running work needs state.

That state should not live only in a chat thread.

[`dot-agents`](https://dot-agents.dev/) is one lightweight implementation: a `.agents/` workspace with durable work items, research notes, plans, progress logs, and handoff prompts.

For this talk, the durable state lives in:

```text
.agents/work/docs/durable-context-talk/
├── index.md
├── prd.md
├── research.md
├── plan.md
├── progress.md
└── sources/
```

That folder lets a fresh thread answer: what are we doing, why, what sources are trusted, what is next, and what should not be reopened?

## Evidence: make “done” observable

Greg Brockman summarized one hard part of agent adoption as ["Say no to slop"](https://x.com/gdb/status/2019566641491963946): keep a human accountable for merged code and hold AI-generated work to at least the same review bar as human-written work.

For coding agents, "done" should end with evidence:

- tests pass
- build passes
- typecheck passes
- screenshot or browser flow confirms the UI
- logs or traces confirm runtime behavior
- reviewer understands the diff

Evidence does not replace judgment. It gives judgment something concrete to inspect.

For this repo, the minimum evidence after content changes is:

```bash
npm run check
npm run build
```

## A running example from this repo

This post is itself the example.

The work started as a gist and a rough talk idea. Instead of keeping the plan in chat, the useful state moved into the repo:

- **Map:** `AGENTS.md` explains the Astro site, commands, content rules, and git workflow.
- **Procedure:** planning and research skills shaped the work into a brief, sources, and an implementation plan.
- **State:** `.agents/work/docs/durable-context-talk/` holds the brief, research, source notes, plan, and progress.
- **Evidence:** the draft will be checked with Astro's content validation and production build.

The result is not more ceremony for its own sake. It is a handoff path:

```text
rough idea → work item → research → plan → draft → checks → slides
```

Each step leaves enough context for the next thread to continue without starting over.

## Start with one task, then promote what helped

Do not begin by designing the perfect agent operating model.

Start with one repeated pain:

- the agent misses the build command
- the agent forgets a style rule
- the agent loses task state between threads
- the agent produces a giant hard-to-review diff
- the agent says "done" without evidence

Then promote the fix into the smallest durable place:

- map it in `AGENTS.md`
- package it as a skill
- record it in a work item
- enforce it with a check

The point is not more documents. The point is better next runs.

As [Strangest Loop](https://strangestloop.io/essays/things-that-arent-doing-the-thing) puts it: "The only thing that is doing the thing is doing the thing."

**Start with one real task. Write down what made the agent better. Repeat.**
