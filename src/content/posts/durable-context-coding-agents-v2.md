---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A slide-first field guide to AGENTS.md, Agent Skills, dot-agents work items, and review checkpoints for keeping coding agents aligned.'
pubDate: 2026-07-02
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: true
unlisted: true
order: 2
---

## Your Repo Is the Memory

> Durable context for AI coding agents: keep intent, decisions, and proof attached to fast code.

| If you are... | This is useful for... |
| --- | --- |
| Letting agents change real code | Keeping the agent aligned with project truth. |
| Reviewing agent PRs late | Moving checkpoints earlier than the diff. |
| Running work across threads, tools, or teammates | Making context survive the chat. |

The hook is simple: agents can now produce substantial code faster than most teams can align around it. The question is where the intent, constraints, decisions, and proof should live when chat is temporary and the repository is the system of record.

## About the author

> Marius Colacioiu is a Zürich-based engineering leader building startup products and teams.

| Focus | Details |
| --- | --- |
| Today | Founder and Head of Engineering at Norm, building products for building energy efficiency. |
| Background | 14+ years helping startups build from early product foundations to growing engineering teams. |
| Past startup work | Ledgy, BuddyBroker/XING, Gild, Sportboom; plus growth engineering at On. |

My work has mostly been close to the messy middle where product, engineering, hiring, delivery, and operations overlap. That is also where coding agents are most useful — and where missing context becomes expensive fastest.

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

Before prescribing a workflow, locate the room. A team that uses agents for autocomplete has a different problem from a team running three terminal agents against the same repo. A senior engineer who reads every plan has a different risk profile from one who sees only the final pull request.

Three questions make the rest of this talk practical:

- Do you use coding agents, and how much work do you let them do?
- What is your first checkpoint with the agent: prompt, plan, work trace, local diff, or PR?
- How much of the output do you actually review: the plan, the commands run, the code changes, the tests, the final PR description?

Durable context is not a documentation hobby. It is the way to put the checkpoint where it can still change the work.

## The problem is fast form without shared intent

> Generative AI makes form cheap; intent no longer arrives automatically.

```text
unclear intent + capable generator = convincing artifact
                                     with unclear ownership
```

The failure mode is not only hallucinated code. It is code-shaped output that looks substantial before anyone has made the intent explicit.

Noperator's essay [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) names the pathology precisely: "generative AI can produce substantial form with minimally applied intent," and "the pathology of generative AI is that it too easily allows substantial form without discernible intent." That mistake is harder to make when creating by hand because manual creation forces more intent into the artifact as you go.

Coding agents compress that friction. They can create files, tests, docs, migrations, screenshots, and PRs from a vague instruction. That is useful, but it changes the review problem: reviewers must recover intent from the output unless the team put intent somewhere durable first.

## Code got cheap; alignment got expensive

> When implementation collapses to minutes, alignment moves onto the critical path.

```text
old path:    plan ── discuss ── build ── review
agent path:  prompt ───────────────▶ PR
                         ▲
            all missing alignment lands here
```

Maggie Appleton's [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) makes the economic shift clear: writing code is getting fast and cheap, so the hard question becomes not "how do we build it?" but "should we build it?" She points out that the old implementation window created many alignment touchpoints. Agents collapse that window, so teams lose the informal conversations, draft PRs, issue comments, and course corrections that used to happen while the work was still forming.

The pull request then inherits too many jobs. It must explain the goal, recover the plan, expose hidden assumptions, prove the implementation, and coordinate reviewers who were not present while the agent worked. That is too late for many decisions.

Durable context moves some alignment back before generation: the plan, constraints, accepted tradeoffs, owner, proof target, and stop conditions live where another engineer or agent can inspect them before the diff becomes the only artifact.

## Cognitive surrender turns speed into debt

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

Addy Osmani's public post on [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) defines the posture as stopping construction of the answer: the AI output becomes "your" output, and you inherit its confidence without doing the underlying reasoning. His [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) article frames the bill: the gap between how much code exists and how much of it any human genuinely understands. Tests can be green while understanding is not.

That is the practical meaning of cognitive surrender in agent work. The AI output quietly becomes "our" output; the team inherits confidence without doing the underlying reasoning. The risk is not that every generated line is wrong. The risk is that nobody knows which implicit decisions were made, why they were acceptable, and where the next change will break.

Durable context does not slow agents down for ceremony. It keeps understanding attached to the work: what we asked for, why it matters, what changed, what proof exists, what is still uncertain, and where a human made the call.

## The model is not your project memory

> The model knows public patterns; it does not know which pattern is true here.

```text
LLM memory:  broad, compressed, lossy public knowledge
repo truth:  exact commands, boundaries, decisions, constraints
agent work:  useful only when the second shapes the first
```

Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression loses details. His practical advice is to develop intuition for where lossiness matters and, for specific technical work, provide a correct example instead of expecting the model to know exact facts.

Most serious coding tasks are full of exact facts. The fast test command. The one UI primitive this repo uses. The migration rule. The security constraint. The product decision from last week. The module boundary that is obvious to the team and invisible to the model.

If that truth lives only in a chat thread, it dies with the thread. If it lives in files, checks, and work items inside the repo, the next run can use it.

## Move review earlier than the PR

> Review should start with intent, then trace, then diff, then proof.

```text
1. Plan       Does this solve the right problem?
2. Trace      Did the agent inspect and change the right things?
3. Diff       Is the implementation coherent and maintainable?
4. Evidence   What proves it works, and what remains uncertain?
```

The PR diff is still necessary. It is no longer enough.

Planning review catches wrong work before it is generated. Trace review catches suspicious behavior: skipped files, broad edits, repeated failed commands, ignored test failures, or a tool run that changed more than expected. Diff review checks the implementation. Evidence review checks whether the proof matches the risk.

The checkpoint does not have to be heavy. For small tasks it might be one paragraph and one test command. For risky tasks it might be a written plan, a reviewer signoff, a browser trace, a migration dry run, and an explicit rollback note. The important shift is that the human sees the intent before the agent has produced a large artifact that is socially hard to throw away.

## The repo is the disk; chat is RAM

> Chats are working memory; repo-local files are durable memory.

```text
chat thread ── explore / decide / implement ──▶ repo-local context
     ▲                                                │
     ╰──────────── next person or agent starts here ◀─╯
```

This is the core idea behind `dot-agents`: put the operating context for agentic work in versioned, repo-local files. Not everything belongs there. The chat can stay messy. The repo should preserve the parts that change future behavior.

Think of chat as RAM: fast, useful, temporary, and full of intermediate noise. Think of files as disk: slower to write, easier to share, easier to review, and available to the next engineer, the next agent, the next machine, and the next session.

The judgment is deciding what to flush to disk.

## AGENTS.md is the map

> `AGENTS.md` tells the agent where project truth starts, not everything it could ever need.

```text
AGENTS.md
├─ project shape and ownership boundaries
├─ commands that prove common work
├─ rules that agents must not rediscover
╰─ links to skills, work items, checks, and deeper docs
```

[`AGENTS.md`](https://agents.md/) gives coding agents a predictable place to start. Use it for the instructions that should apply before any task-specific context exists: the stack, common commands, coding conventions, dangerous paths, security rules, and where deeper guidance lives.

A useful `AGENTS.md` is short enough to be read and specific enough to change behavior. For this repo, examples include: run `npm run check` and `npm run build` after code or content changes; keep content frontmatter compatible with `src/content.config.ts`; store YouTube transcripts under `src/content/transcripts/**`, not summaries; use `type` aliases rather than `interface`.

Do not turn the map into a junk drawer. If a rule applies only under `src/content/posts/`, put it near that work or in a skill. If a mistake can be caught deterministically, add a check. If a workflow has steps and evidence, package it as a procedure.

## Agent Skills are procedures

> Package workflows when the trigger, steps, evidence, and human decision repeat.

```text
skill = trigger + steps + tools/assets + proof target

"write article" → article-writing skill
"research API"  → research skill
"run server"    → tmux skill
```

Some context is not a rule; it is a procedure. [Agent Skills](https://agentskills.io/home) package repeatable workflows as folders with instructions and optional scripts, references, or assets. OpenAI's [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure shape: the agent sees lightweight metadata first and loads the full instructions only when the task calls for them.

Use a skill when a workflow has a recognizable trigger and a repeatable path to proof: writing or refreshing an article, collecting research, preparing a release, running a browser check, capturing a transcript, or managing a long-running server. The skill should answer four questions:

- When should this load?
- What steps should the agent follow?
- What files, scripts, or references does it need?
- What evidence proves the workflow is done?

Do not package preferences as skills. A style preference belongs in `AGENTS.md`, a formatter, or a linter. A skill earns its place when it prevents a future run from rediscovering the workflow.

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

`dot-agents` is a lightweight file convention for long-running agent work. It separates the noisy exploration from the state that needs to survive: what we are doing, why, what we trust, what we decided, what remains, and how the next thread should continue.

The workflow is simple:

```text
Context → Plan → Handoff Prompt → Implement → Record Progress → Promote
```

Research threads can go wide. Implementation threads should be narrow. The work item connects them without dragging every stale search, false start, or abandoned option into the next run. [Small Threads, Durable State](/posts/small-threads-durable-state) is the tactical version of this loop.

## Evidence keeps judgment attached to the diff

> Proof belongs where the next reviewer can see it.

```text
low risk    format, lint, focused test
medium      typecheck, integration test, screenshot, curl
high        trace, migration dry run, rollback, human signoff
```

Evidence is part of durable context because "done" is otherwise too easy to say. An agent can produce a confident final answer after a failed test, a skipped check, or an unreviewed assumption. The reviewer needs proof that matches the risk.

For a content change in this repo, the normal proof is:

```bash
npm run check
npm run build
```

For UI work, evidence may include a screenshot or browser trace. For API work, it may include `curl` output or an integration test. For migrations, it may include a dry run and rollback note. The full ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it).

Evidence does not replace judgment. It gives judgment something concrete to inspect.

## The control loop decides what survives

> Preserve what changed future behavior; delete or ignore the rest.

```text
╭──────────╮    ╭────────────╮    ╭────────╮    ╭──────────╮
│   Map    │───▶│ Procedure  │───▶│ State  │───▶│ Evidence │
╰──────────╯    ╰────────────╯    ╰────────╯    ╰──────────╯
      ▲                                                    │
      ╰──────────── promote what helped the next run ◀─────╯
```

The point is not to collect more context. The point is to run a promotion loop.

- **Map:** Where should the agent start, and what must it not miss?
- **Procedure:** What repeatable workflow should it follow?
- **State:** What happened on this task, and what is next?
- **Evidence:** How do we know the work is done?
- **Promotion:** What artifact should survive because it made the next run better?

When an agent misses the same command twice, update the map. When a sequence repeats, make a skill or script. When task context spans sessions, create a work item. When a mistake is mechanically detectable, add a check. When ambiguity keeps returning, write the architecture note or example the agent should copy.

## Durable context travels across people and environments

> Repo-local context survives the agent, the laptop, the teammate, and the thread.

```text
human laptop ─┐
cloud VM      ├──▶ repo-local context ──▶ same commands, rules, state, proof
CI runner     │
next teammate ┘
```

This is the benefit that makes the work worth doing. A chat transcript helps the person in that chat. Repo-local context helps the next person, the next agent, and the next environment.

Cross-session durability means a fresh thread can start from the current plan instead of asking the user to reconstruct it. Cross-engineer durability means a teammate can inspect the same intent, constraints, and proof without being in the original chat. Cross-environment durability means the cloud agent, local terminal, CI runner, and review process all point at the same commands and conventions.

That portability matters because agent stacks will keep changing. The durable artifact should not be a vendor-specific memory blob if a simple file, script, test, or work item can carry the truth.

## The before and after is mundane in the best way

> Durable context makes agent work less magical and more reviewable.

| Before durable context | After durable context |
| --- | --- |
| New thread asks, "What are we doing?" | New thread opens the work item and continues. |
| Agent rediscovers commands by trial and error. | `AGENTS.md` and skills point to the known checks. |
| Review starts with a surprising diff. | Review starts with intent, constraints, and proof target. |
| Useful decisions are buried in chat. | Decisions are linked from the task state. |
| Every agent gets a slightly different setup. | Repo-local files make the setup portable. |

In my own agent work, the improvement is rarely dramatic in the moment. It is smaller and more valuable: fewer repeated questions, fewer re-discovered commands, fewer giant diffs with missing intent, and cleaner handoffs when a thread gets long.

The agent does not become wise because a folder exists. It becomes easier to steer because the steering surface is visible. The human can review the plan, the trace, the diff, and the evidence instead of trying to infer all of that from the final code.

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

Do not start by designing the perfect agent operating model. Start with one repeated pain.

If agents keep missing the same build command, add it to `AGENTS.md`. If publishing a post requires the same sequence every time, make or load a skill. If work spans multiple sessions, create a work item. If review keeps finding the same class of bug, write a deterministic check. If a decision keeps getting reopened, write down the decision and link it from the task.

Someone has to own the loop: notice what helped, promote it, delete stale guidance, and keep the next run better than the last.

**Start with one real task. Write down what made the agent better. Repeat.**

## Sources used

- Marius Colacioiu, [personal site](https://marius-colacioiu.com) and [CV](https://marius-colacioiu.com/cv) — source for the short author slide.
- Noperator, [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the surrender/debt framing and the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/) and [Small Threads, Durable State](/posts/small-threads-durable-state) — source material for file-backed task state and handoffs.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) — internal companion piece for the evidence ladder.
