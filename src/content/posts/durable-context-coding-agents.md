---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A field guide for keeping coding agents aligned with repo-local truth, shared state, proof, and human judgment.'
pubDate: 2026-06-25
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: false
unlisted: true
order: 7
---

## Your repo is the agent’s operating memory

Coding agents have become good enough that the old question — “can the model write code?” — is no longer the most useful question.

The better question is: **what environment are we asking the agent to think inside?**

The model brings broad programming patterns. The tools give it hands. The repository should carry the local truth that makes its work fit this project:

- intent and constraints
- current architecture boundaries
- repeated workflows
- decisions and rejected options
- proof that a task is actually done

Chat is working memory. The repo is durable memory. The skill is deciding what to promote.

```text
chat thread ── think / explore / decide ──▶ repo-local context
     ▲                                           │
     ╰──────── next agent run starts here ◀──────╯
```

By the end, you should have a sorting rule for what belongs in `AGENTS.md`, a skill or script, a work item, an architecture note, or an automated check.

## Code got cheap; alignment got expensive

Maggie Appleton’s [Collaborative AI Engineering](https://www.youtube.com/watch?v=ClWD8OEYgp8) makes the shift clear: when implementation collapses from days to minutes, planning and alignment do not disappear. They move to the critical path.

That changes the bottleneck:

```text
Before: expensive implementation → slow feedback → enough time to align
Now:    cheap implementation     → fast PRs      → alignment arrives late
```

If a plan lives only inside one developer’s agent thread, the pull request becomes the first shared checkpoint. That is too late for many decisions.

Thorsten Ball’s [agent-harness argument](https://www.youtube.com/watch?v=thMFsqe8kbQ) points in the same direction: as individual agents get more capable, the hard problem moves up a level. It is less about clever harness tricks and more about where agents run, how their work is preserved, and how humans coordinate many cheap workers without drowning in output.

Durable context is an alignment mechanism. It makes intent, constraints, state, and evidence available before the diff becomes everyone’s problem.

## The model brings patterns, not your local truth

Simon Willison describes LLMs as [“a lossy encyclopedia”](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression is lossy.

Modern agents can search, read files, run tests, and inspect logs. That helps, but it does not make local truth automatic.

The problem is not that the model knows nothing. The problem is that it knows too many plausible things and not enough about which one is true here.

For project-specific work, the agent needs anchors:

- the exact command that runs the fast test
- the one component primitive the UI should use
- the module boundary that must not be crossed
- the deployment or security constraint that is not obvious in code
- the decision from last week that never made it into a README

Willison’s practical advice for highly specific tasks is to make a correct example available. For agents, that means your scaffolds, tests, READMEs, fixtures, CI setup, and existing code patterns are not just developer experience. They are context.

## The debt is work nobody can reconstruct

The risk is not simply “AI writes bad code.”

The deeper risk is that work appears faster than humans can understand, align on, and review it.

Addy Osmani calls the human posture [cognitive surrender](https://addyosmani.com/blog/cognitive-surrender/): the AI output quietly becomes your output, and you stop forming an independent view. The bill shows up as **comprehension debt** — code the team owns but cannot explain.

Agentic teams also accumulate **coordination debt**:

- plans nobody saw until the PR
- duplicate work across parallel agents
- surprise behavior hidden in a large diff
- merge conflicts from invisible parallel changes
- tests that pass but nobody understands
- decisions nobody can trace back to a reason

Armin Ronacher and Cristina Poncela Cubeiro’s [The Friction is Your Judgment](https://www.youtube.com/watch?v=_Zcw_sVF6hU) frames the pressure well: generation now outpaces review, while responsibility still sits with humans.

Durable context is not a substitute for understanding. It is a control surface for keeping understanding attached to the work.

## Durable context is a control loop, not a document pile

Use a small loop instead of a giant instruction file.

```text
╭──────────╮    ╭────────────╮    ╭────────╮    ╭──────────╮
│   Map    │───▶│ Procedure  │───▶│ State  │───▶│ Evidence │
╰──────────╯    ╰────────────╯    ╰────────╯    ╰──────────╯
      ▲                                                    │
      ╰──────── promote what helped the next run ◀─────────╯
```

- **Map:** where should the agent look?
- **Procedure:** how do we repeat this workflow?
- **State:** what happened on this task, and what is next?
- **Evidence:** how do we know the work is done?
- **Promotion:** what should survive into future runs?

The loop matters more than any one tool. `AGENTS.md`, Agent Skills, `.agents/work/`, checklists, scripts, tests, and dashboards are only useful when they change future agent behavior or human review quality.

If an artifact does not help the next run, delete it or move it out of the way.

## Map: make project truth easy to find

[`AGENTS.md`](https://agents.md/) is a predictable place for project guidance: setup commands, checks, conventions, security notes, and gotchas.

But the best `AGENTS.md` is a map, not a manual.

OpenAI’s [Harness Engineering](https://openai.com/index/harness-engineering/) write-up describes the failure mode of one giant instructions file: context is scarce, too much guidance becomes non-guidance, and stale instructions are hard to verify. Their pattern is to treat `AGENTS.md` as a table of contents and keep deeper knowledge in structured repo-local docs.

Good map content:

- project overview and ownership boundaries
- the commands agents should run first
- paths that matter for common work
- local conventions and “watch out” rules
- security and data-handling constraints
- links to deeper docs, work items, scripts, or checks

Map maintenance is part of the workflow. When an agent repeats the same mistake, either update the map near the relevant code, add a deterministic check, or decide the rule was not worth preserving.

Root guidance should stay short. Directory-specific rules belong close to the files they govern.

## Procedure: package workflows, not preferences

Some context is not a rule. It is a workflow.

[Agent Skills](https://agentskills.io/home) package repeatable procedures as folders with a `SKILL.md` file and optional scripts, references, and assets. OpenAI’s [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure idea: the agent sees skill metadata first, then loads the full instructions when the task calls for it.

Use a skill, script, or checklist when the work has repeatable inputs, steps, and proof:

- release checklist
- database migration routine
- incident investigation
- browser verification flow
- transcript capture and summary workflow
- content publication workflow

Do not package every preference as a skill. A style preference belongs in the map or the linter. A repeated multi-step workflow may deserve a skill.

Also resist overbuilding the harness. Mario Zechner’s [Pi workflow](https://www.youtube.com/watch?v=DPgJjRdQWrg) and Ball’s harness critique both point toward a simple default: if shell commands, files, Git, scripts, and a short procedure are enough, start there.

Good procedures answer four questions:

```text
When should this run? → What steps happen? → What evidence is required? → When should a human decide?
```

## State: keep work alive across threads

Long-running agent work has two failure modes:

1. **Thread death:** useful context disappears when the chat ends.
2. **Context pollution:** a long thread drags stale searches, failed attempts, and irrelevant files into the next decision.

The answer is not one infinite conversation. It is durable state plus small focused threads.

In [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), the useful pattern is a funnel:

```text
wide research → critique → human judgment → plan → focused implementation → evidence
```

Research threads can go wide. Implementation threads should be narrow. Handoffs preserve the useful context while resetting the noise.

[`dot-agents`](https://dot-agents.dev/) is one lightweight implementation: a `.agents/` workspace with work items, research notes, plans, progress logs, and handoff prompts. For this talk, the durable state lives in `.agents/work/docs/durable-context-talk/`.

This post followed the same loop:

```text
rough idea → work item → source notes → outline → draft → checks → slide pass
```

A fresh thread can now answer: what are we doing, why, what sources are trusted, what is next, and what should not be reopened?

## Evidence: make the agent prove the work

Willison’s coding-agent practice is proof-oriented: start with tests, make the agent run them, then make it exercise the real system when unit tests are not enough.

Evidence is not one command. It is a proof stack matched to the risk of the change.

```text
╭────────────────────────────────────────────╮
│ Reviewer can explain the diff and tradeoff │
├────────────────────────────────────────────┤
│ Logs, traces, screenshots, browser flows   │
├────────────────────────────────────────────┤
│ API checks, curl, smoke tests, conformance │
├────────────────────────────────────────────┤
│ Unit tests, typecheck, lint, build         │
╰────────────────────────────────────────────╯
```

For UI work, evidence might be a browser screenshot or Playwright trace. For API work, it might be `curl` against a running server. For standards work, it might be a conformance suite. For risky agent execution, evidence also includes sandboxing, fake data, and proof that secrets or production data were not exposed.

Mario Zechner’s Pi demo makes the same point from another angle: `AGENTS.md` guidance helps, but deterministic checks beat instructions alone. Models may ignore style rules under pressure; formatters, linters, typecheckers, smoke tests, and pre-commit hooks can reject bad output automatically.

For this repo, the minimum evidence after content changes is:

```bash
npm run check
npm run build
```

Evidence does not replace judgment. It gives judgment something concrete to inspect.

## Friction: route judgment to humans

“Remove friction” is the wrong default for agent work.

Bad friction asks for approval on every tiny edit. Good friction routes irreversible or high-risk decisions to humans and lets agents handle mechanical loops.

```text
Green  → format, lint, small local fixes, generated tests
Yellow → behavior changes, API shape, dependencies, public copy
Red    → permissions, migrations, billing, security, reliability, architecture
```

This is the useful version of “say no to slop.” Greg Brockman’s [OpenAI agentic software development note](https://x.com/gdb/status/2019566641491963946) puts it bluntly: keep a human accountable for merged code and keep at least the same review bar as human-written work.

The key is not to make agents timid. The key is to make risk visible.

Agents are good at making progress. They are bad at feeling the discomfort that tells a senior engineer, “this fallback is too convenient,” “this migration needs a rollout plan,” or “this abstraction will trap us later.”

Durable context should encode where the human brain must reactivate.

## Shape the codebase so agents can stay inside the lines

Durable context is not only Markdown.

Your code structure is context. Your tests are context. Your fixtures are context. Your naming conventions are context. Your public APIs are context.

Ronacher and Poncela Cubeiro describe the codebase itself as infrastructure for the agent. Agents do better when the system gives them legible rails:

- clear module boundaries
- visible data flow
- simple cores with explicit public APIs
- centralized query, UI, and service primitives
- examples and scaffolds worth copying
- fast focused tests
- deterministic linting, formatting, and typechecking
- fewer hidden magical conventions

This is not new architecture advice. Humans also do better in codebases with clean boundaries and good examples. Agents make the payoff more visible because they copy local patterns aggressively.

If the first integration is sloppy, the next agent run will copy the slop. If the first integration is clear, tested, and documented, the next run has a better path to follow.

## Start with one task, then promote what helped

Do not begin by designing the perfect agent operating model.

Start with one repeated pain:

- the agent misses the build command
- the agent forgets a style rule
- the agent loses task state between threads
- the agent opens a giant hard-to-review diff
- the agent says “done” without proof
- the team first sees the plan at PR time

Then promote the smallest useful fix:

```text
missed command       → AGENTS.md
repeated workflow    → skill / script / checklist
long-running task    → work item / plan / progress log
repeated mistake     → lint / test / pre-commit check
repeated ambiguity   → architecture note / example / fixture
high-risk decision   → human review rule
```

Someone has to own the loop. The “agents captain” idea is useful less as a title and more as a responsibility: notice where agents struggle, preserve what helps, delete stale guidance, and keep the next run better than the last.

Yes, this is documentation — but documentation with a job. It is invoked by agents, versioned with the repo, and updated when it improves future work.

The point is not more documents. The point is better next runs.

As [Strangest Loop](https://strangestloop.io/essays/things-that-arent-doing-the-thing) puts it: “The only thing that is doing the thing is doing the thing.”

**Start with one real task. Write down what made the agent better. Repeat.**
