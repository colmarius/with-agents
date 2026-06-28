---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A field guide for keeping coding agents aligned with repo-local truth, shared state, proof, and human judgment.'
pubDate: 2026-06-25
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: false
unlisted: false
order: 2
---

## Your repo is the agent's operating memory

> Chat is working memory; the repo is durable memory.

```text
chat thread ── think / explore / decide ──▶ repo-local context
     ▲                                           │
     ╰──────── next agent run starts here ◀──────╯
```

Coding agents are good enough that "can the model write code?" is no longer the useful question. The better one is: **what environment are we asking the agent to think inside?**

The model brings broad programming patterns. The tools give it hands. The repository should carry the local truth that makes its work fit this project: intent and constraints, current architecture boundaries, repeated workflows, decisions and rejected options, and proof that a task is actually done.

The skill is deciding what to promote.

By the end you should have a sorting rule for what belongs in `AGENTS.md`, a skill or script, a work item, an architecture note, or an automated check.

## Code got cheap; alignment got expensive

> Fast implementation makes hidden local truth a review bottleneck.

```text
cheap code → late alignment → coordination debt
                 │
                 ╰─ durable context makes decisions visible earlier
```

Maggie Appleton's [Collaborative AI Engineering](https://www.youtube.com/watch?v=ClWD8OEYgp8) makes the shift clear: when implementation collapses from days to minutes, planning and alignment move to the critical path rather than disappearing. If a plan lives only inside one developer's agent thread, the pull request becomes the first shared checkpoint — too late for many decisions. Thorsten Ball's [agent-harness argument](https://www.youtube.com/watch?v=thMFsqe8kbQ) points the same way: as individual agents get more capable, the hard problem moves up to where agents run, how their work is preserved, and how humans coordinate many cheap workers.

The model also does not carry your local truth. Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress public knowledge, but the compression is lossy. Agents can search, read files, and run tests, but that does not make local truth automatic. The problem is not that the model knows nothing; it knows too many plausible things and not enough about which one is true here. For project-specific work it needs anchors: the exact command that runs the fast test, the one UI primitive to use, the module boundary that must not be crossed, the security constraint that is not obvious in code, the decision from last week that never made it into a README.

The risk is not simply "AI writes bad code." It is that work appears faster than humans can understand and review it. Addy Osmani calls the human posture [cognitive surrender](https://addyosmani.com/blog/cognitive-surrender/): the AI output quietly becomes your output, and the bill arrives as **comprehension debt** — code the team owns but cannot explain. Teams also accumulate **coordination debt**: plans nobody saw until the PR, duplicate work across parallel agents, and tests that pass but nobody understands. As Ronacher and Poncela Cubeiro's [The Friction is Your Judgment](https://www.youtube.com/watch?v=_Zcw_sVF6hU) puts it, generation now outpaces review while responsibility still sits with humans. Durable context is the control surface for keeping understanding attached to the work.

## Durable context is a control loop, not a document pile

> Durable context is a loop that changes the next run, not a pile of files.

```text
╭──────────╮    ╭────────────╮    ╭────────╮    ╭──────────╮
│   Map    │───▶│ Procedure  │───▶│ State  │───▶│ Evidence │
╰──────────╯    ╰────────────╯    ╰────────╯    ╰──────────╯
      ▲                                                    │
      ╰──────── promote what helped the next run ◀─────────╯
```

Use a small loop instead of a giant instruction file.

- **Map:** where should the agent look?
- **Procedure:** how do we repeat this workflow?
- **State:** what happened on this task, and what is next?
- **Evidence:** how do we know the work is done?
- **Promotion:** what should survive into future runs?

`AGENTS.md`, Agent Skills, `.agents/work/`, checklists, scripts, tests, and dashboards are only useful when they change future agent behavior or human review quality. If an artifact does not help the next run, delete it or move it out of the way.

## Map: make project truth easy to find

> A good `AGENTS.md` is a map to project truth, not a giant manual.

[`AGENTS.md`](https://agents.md/) is a predictable place for project guidance: setup commands, checks, conventions, security notes, and gotchas. But the best `AGENTS.md` is a map, not a manual. OpenAI's [Harness Engineering](https://openai.com/index/harness-engineering/) write-up describes the failure mode of one giant instructions file: context is scarce, too much guidance becomes non-guidance, and stale instructions are hard to verify. Their pattern is to treat `AGENTS.md` as a table of contents and keep deeper knowledge in structured repo-local docs.

Good map content is the project overview and ownership boundaries, the commands agents should run first, the paths that matter for common work, "watch out" rules, security constraints, and links to deeper docs, work items, scripts, or checks. When an agent repeats a mistake, either update the map near the relevant code, add a deterministic check, or decide the rule was not worth preserving. Root guidance stays short; directory-specific rules belong close to the files they govern.

## Procedure: package workflows, not preferences

> Package workflows only when they have repeatable steps and proof.

```text
When should this run? → What steps happen? → What evidence is required? → When should a human decide?
```

Some context is not a rule; it is a workflow. [Agent Skills](https://agentskills.io/home) package repeatable procedures as folders with a `SKILL.md` and optional scripts, references, and assets. OpenAI's [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure idea: the agent sees skill metadata first, then loads full instructions when the task calls for it.

Use a skill, script, or checklist when work has repeatable inputs, steps, and proof — a release checklist, a migration routine, or a content publication workflow. Do not package every preference: a style rule belongs in the map or the linter. Also resist overbuilding the harness. Mario Zechner's [Pi workflow](https://www.youtube.com/watch?v=DPgJjRdQWrg) and Ball's harness critique point to a simple default: if shell commands, files, Git, scripts, and a short procedure are enough, start there. Good procedures answer the four questions on the slide.

## State: keep work alive across threads

> Long work needs restartable task state, not a longer chat.

```text
wide research → critique → human judgment → plan → focused implementation → evidence
```

Long-running agent work has two failure modes: **thread death**, where useful context disappears when the chat ends, and **context pollution**, where a long thread drags stale searches and irrelevant files into the next decision. The answer is durable state plus small focused threads.

In [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), the useful pattern is the funnel on the slide.

Research threads can go wide; implementation threads should be narrow; handoffs preserve the useful context while resetting the noise. [`dot-agents`](https://dot-agents.dev/) is one lightweight implementation: a `.agents/` workspace with work items, research notes, plans, progress logs, and handoff prompts. [Small Threads, Durable State](/posts/small-threads-durable-state) is the day-to-day procedure. A fresh thread should be able to answer: what are we doing, why, what sources are trusted, what is next, and what should not be reopened.

## Evidence: make the agent prove the work

> Proof belongs where the next reviewer can see it.

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

Willison's coding-agent practice is proof-oriented: start with tests, make the agent run them, then make it exercise the real system when unit tests are not enough. Evidence is not one command. It is a proof stack matched to the risk of the change.

UI work may need a screenshot or Playwright trace; API work, `curl` against a running server; standards work, a conformance suite; risky execution, sandboxing, fake data, and proof that secrets or production data were not exposed. Zechner's Pi demo makes the same point: deterministic checks beat instructions alone, because models may ignore style rules under pressure while formatters, linters, typecheckers, and pre-commit hooks reject bad output automatically. For this repo, the minimum evidence after content changes is:

```bash
npm run check
npm run build
```

The full risk-scaled ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it). Evidence does not replace judgment; it gives judgment something concrete to inspect.

## Route judgment to humans, and shape the code they review

> Preserve the friction that routes consequences to humans.

```text
Green  → format, lint, small local fixes, generated tests
Yellow → behavior changes, API shape, dependencies, public copy
Red    → permissions, migrations, billing, security, reliability, architecture
```

"Remove friction" is the wrong default for agent work. Bad friction asks for approval on every tiny edit. Good friction routes irreversible or high-risk decisions to humans and lets agents handle mechanical loops.

Greg Brockman's [agentic software development note](https://x.com/gdb/status/2019566641491963946) puts it bluntly: keep a human accountable for merged code, at the same review bar as human-written work. The goal is not timid agents; it is visible risk. Agents are good at making progress and bad at feeling the discomfort that tells a senior engineer "this fallback is too convenient." Durable context should encode where the human brain must reactivate.

Code structure is part of that context, because agents copy local patterns aggressively. Ronacher and Poncela Cubeiro describe the codebase itself as infrastructure for the agent: clear module boundaries, visible data flow, simple cores with explicit public APIs, examples worth copying, fast focused tests, and fewer hidden magical conventions. If the first integration is sloppy, the next run copies the slop; if it is clear and tested, the next run has a better path to follow.

## Start with one task, then promote what helped

> Promote the smallest artifact that makes the next run better.

```text
missed command       → AGENTS.md
repeated workflow    → skill / script / checklist
long-running task    → work item / plan / progress log
repeated mistake     → lint / test / pre-commit check
repeated ambiguity   → architecture note / example / fixture
high-risk decision   → human review rule
```

Do not begin by designing the perfect agent operating model. Start with one repeated pain: the agent misses the build command, loses task state between threads, opens a giant diff, or says "done" without proof. Then promote the smallest useful fix.

Someone has to own the loop: notice where agents struggle, preserve what helps, delete stale guidance, and keep the next run better than the last. This is documentation with a job — invoked by agents, versioned with the repo, and updated when it improves future work. As [Strangest Loop](https://strangestloop.io/essays/things-that-arent-doing-the-thing) puts it: "The only thing that is doing the thing is doing the thing."

**Start with one real task. Write down what made the agent better. Repeat.**
