---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A richer slide-first alternate deck for durable context, repo memory, review checkpoints, and dot-agents workflows.'
pubDate: 2026-07-02
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: true
unlisted: true
order: 3
---

<!--
Maintenance note for agents:
durable-context-coding-agents-v2.md is the richer slide-first alternate for the canonical public article/deck in durable-context-coding-agents.md.

When changing v2, also review durable-context-coding-agents.md in the same diff and either:
- mirror factual, source, terminology, and section-order changes where applicable, or
- leave v2 intentionally different because it is the richer slide-first alternate.

durable-context-coding-agents-v3.md is an image-only experiment and is not part of the canonical/v2 sync contract.
Do not publish, rename, delete, or replace the canonical public post without explicit human approval.
-->

## Your Repo Is the Memory
<!-- slide:
layout: cover
class: title
-->

> Chat is RAM. The repo is disk.
>
> <small>Marius Colacioiu · Founder & Head of Engineering @ Norm</small>

Notes:

Durable context for AI coding agents: keeping intent, decisions, and proof attached to fast code.

At Norm, we build a data OS for real estate portfolios: a shared foundation for building data, investment planning, sustainability reporting, and CAPEX work. My work has mostly been close to the messy middle where product, engineering, hiring, delivery, and operations overlap. That is also where coding agents are most useful — and where missing context becomes expensive fastest.

## Coding agents made implementation cheap
<!-- slide:
layout: visual
class: alignment-flow
-->

> They did not make alignment free.

<figure class="agent-speed-flow" aria-label="Fast agent implementation pushes alignment pressure into project memory">
  <div class="agent-speed-flow__grid">
    <div class="agent-speed-flow__card">
      <span>agent writes</span>
      <strong>fast</strong>
    </div>
    <div class="agent-speed-flow__card">
      <span>team reviews</span>
      <strong>late</strong>
    </div>
    <div class="agent-speed-flow__card">
      <span>intent</span>
      <strong>disappears</strong>
    </div>
  </div>
  <div class="agent-speed-flow__arrow" aria-hidden="true">↓</div>
  <figcaption>Where should the memory live?</figcaption>
</figure>

The hook is simple: agents can now produce substantial code faster than most teams can align around it. This talk is about where the intent, constraints, decisions, and proof should live when chat is temporary and the repository is the system of record.

## Start with the checkpoint you already trust
<!-- slide:
layout: text
-->

> Ask where the human first becomes accountable, then move that checkpoint earlier.

<figure class="talk-figure" aria-label="Audience checkpoint ladder">
  <div class="talk-path">
    <span class="talk-node">prompt</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node talk-node--accent">plan</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node talk-node--accent">trace</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">diff</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">PR</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">incident</span>
  </div>
  <div class="talk-grid talk-grid--3">
    <div class="talk-card">
      <span>delegate</span>
      <strong>How much work?</strong>
    </div>
    <div class="talk-card talk-card--accent">
      <span>checkpoint</span>
      <strong>Where can you still change it?</strong>
    </div>
    <div class="talk-card">
      <span>review</span>
      <strong>Plan, trace, diff, or proof?</strong>
    </div>
  </div>
</figure>

Notes:

Before prescribing a workflow, locate the room. A team that uses agents for autocomplete has a different problem from a team running three terminal agents against the same repo. A senior engineer who reads every plan has a different risk profile from one who sees only the final pull request.

The point of durable context is not documentation for its own sake. It is how you move the checkpoint earlier, while the work is still cheap to steer.

## Fast form without shared intent
<!-- slide:
layout: visual
-->

> Generative AI makes form cheap; intent no longer arrives automatically.

<figure class="talk-figure" aria-label="Unclear intent plus capable generator creates convincing artifacts with unclear ownership">
  <div class="talk-grid talk-grid--3">
    <div class="talk-card">
      <span>input</span>
      <strong>unclear intent</strong>
    </div>
    <div class="talk-card">
      <span>engine</span>
      <strong>capable generator</strong>
    </div>
    <div class="talk-card talk-card--accent">
      <span>output</span>
      <strong>convincing artifact</strong>
      <p>with unclear ownership</p>
    </div>
  </div>
</figure>

Notes:

The failure mode is not only hallucinated code. It is code-shaped output that looks substantial before anyone has made the intent explicit.

Noperator's essay [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) names the pathology precisely: "generative AI can produce substantial form with minimally applied intent," and "the pathology of generative AI is that it too easily allows substantial form without discernible intent." That mistake is harder to make when creating by hand because manual creation forces more intent into the artifact as you go.

## The PR inherits too many jobs
<!-- slide:
layout: visual
-->

> When implementation collapses to minutes, alignment moves onto the critical path.

<figure class="talk-figure" aria-label="Old implementation path compared with agent path">
  <div class="talk-stack">
    <div class="talk-stack__item">
      <strong>old path</strong>
      <span>plan → discuss → build → review</span>
    </div>
    <div class="talk-stack__item">
      <strong>agent path</strong>
      <span>prompt → PR</span>
    </div>
    <div class="talk-stack__item">
      <strong>pressure</strong>
      <span>intent, assumptions, proof, and coordination all land at review time</span>
    </div>
  </div>
</figure>

Notes:

Maggie Appleton's [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) makes the economic shift clear: writing code is getting fast and cheap, so the hard question becomes not "how do we build it?" but "should we build it?" Agents collapse the old implementation window, so teams lose many informal touchpoints that used to happen while the work was forming.

The pull request then inherits too many jobs. It must explain the goal, recover the plan, expose hidden assumptions, prove the implementation, and coordinate reviewers who were not present while the agent worked.

## Speed becomes comprehension debt
<!-- slide:
layout: visual
-->

> Tests can be green while understanding is not.

<figure class="talk-figure" aria-label="Fast generation can lead to large diffs, shallow review, and owned code nobody can explain">
  <div class="talk-path">
    <span class="talk-node">fast generation</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">large diff</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">shallow review</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node talk-node--accent">owned code nobody can explain</span>
  </div>
</figure>

Notes:

Addy Osmani's public post on [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) defines the posture as stopping construction of the answer: the AI output becomes "your" output, and you inherit its confidence without doing the underlying reasoning. His [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) article frames the bill: the gap between how much code exists and how much of it any human genuinely understands.

Durable context keeps understanding attached to the work: what we asked for, why it matters, what changed, what proof exists, what is still uncertain, and where a human made the call.

## The model is not your project memory
<!-- slide:
layout: text
-->

> The model knows public patterns; it does not know which pattern is true here.

<figure class="talk-figure" aria-label="Model memory compared with repository truth">
  <div class="talk-grid talk-grid--3">
    <div class="talk-card">
      <span>model memory</span>
      <strong>broad, compressed, lossy</strong>
    </div>
    <div class="talk-card talk-card--accent">
      <span>repo truth</span>
      <strong>exact, local, reviewable</strong>
    </div>
    <div class="talk-card">
      <span>agent work</span>
      <strong>useful when repo truth shapes it</strong>
    </div>
  </div>
</figure>

Notes:

Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression loses details. For exact technical work, provide a correct example instead of expecting the model to know exact facts.

Most serious coding tasks are full of exact facts: the fast test command, the one UI primitive this repo uses, the migration rule, the security constraint, the product decision from last week, or the module boundary that is obvious to the team and invisible to the model.

## The repo is disk; chat is RAM
<!-- slide:
layout: cover
-->

> Preserve the parts that change future behavior.

<figure class="talk-figure" aria-label="Chat explores and the repository preserves durable context for the next person or agent">
  <div class="talk-path">
    <span class="talk-node">chat thread</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">explore / decide / implement</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node talk-node--accent">repo-local context</span>
    <span class="talk-arrow">↺</span>
    <span class="talk-node">next person or agent</span>
  </div>
</figure>

Notes:

This is the core idea behind `dot-agents`: put the operating context for agentic work in versioned, repo-local files. Not everything belongs there. The chat can stay messy. The repo should preserve the parts that change future behavior.

Think of chat as RAM: fast, useful, temporary, and full of intermediate noise. Think of files as disk: slower to write, easier to share, easier to review, and available to the next engineer, the next agent, the next machine, and the next session.

## What should survive?
<!-- slide:
layout: text
-->

> Flush to disk when it changes the next run.

<figure class="talk-figure" aria-label="Durable context checklist">
  <div class="talk-grid talk-grid--3">
    <div class="talk-card"><span>keep</span> <strong>intent</strong></div>
    <div class="talk-card"><span>keep</span> <strong>constraints</strong></div>
    <div class="talk-card"><span>keep</span> <strong>accepted tradeoffs</strong></div>
    <div class="talk-card"><span>keep</span> <strong>owner / human decision</strong></div>
    <div class="talk-card"><span>keep</span> <strong>proof target</strong></div>
    <div class="talk-card talk-card--accent"><span>keep</span> <strong>next action</strong></div>
  </div>
</figure>

Notes:

The judgment is deciding what to flush to disk. The repo should not preserve every false start, every stale option, or every sentence from chat. It should preserve the information that changes the next run or changes review.

## The repo-memory stack
<!-- slide:
layout: visual
-->

> Put each kind of context in the smallest durable artifact that fits.

<figure class="talk-figure" aria-label="Repo memory stack mapping context kinds to durable artifacts">
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>Map</strong><span>AGENTS.md</span></div>
    <div class="talk-stack__item"><strong>Procedure</strong><span>Agent Skill / script / checklist</span></div>
    <div class="talk-stack__item"><strong>State</strong><span>.agents/work item</span></div>
    <div class="talk-stack__item"><strong>Evidence</strong><span>tests / traces / screenshots / signoff</span></div>
    <div class="talk-stack__item"><strong>Promotion</strong><span>keep what helped; delete stale guidance</span></div>
  </div>
</figure>

Notes:

This is the operating model for the rest of the talk. Durable context is not one document. It is a small stack: a map for the agent, procedures for repeatable workflows, task state for long work, evidence for review, and a promotion loop that decides what should survive.

## AGENTS.md is the map
<!-- slide:
layout: text
-->

> Tell the agent where project truth starts.

<figure class="talk-figure" aria-label="AGENTS.md map contents">
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>shape</strong><span>stack, directories, ownership boundaries</span></div>
    <div class="talk-stack__item"><strong>commands</strong><span>fast checks that prove common work</span></div>
    <div class="talk-stack__item"><strong>rules</strong><span>things agents must not rediscover</span></div>
    <div class="talk-stack__item"><strong>links</strong><span>skills, work items, checks, deeper docs</span></div>
  </div>
</figure>

<p class="talk-note">Not a junk drawer.</p>

Notes:

[`AGENTS.md`](https://agents.md/) gives coding agents a predictable place to start. Use it for instructions that should apply before task-specific context exists: the stack, common commands, coding conventions, dangerous paths, security rules, and where deeper guidance lives.

A useful `AGENTS.md` is short enough to be read and specific enough to change behavior. If a mistake can be caught deterministically, add a check. If a workflow has steps and evidence, package it as a procedure.

## Agent Skills are procedures
<!-- slide:
layout: text
-->

> Package workflows when the trigger, steps, evidence, and human decision repeat.

<figure class="talk-figure" aria-label="Agent skill components">
  <div class="talk-callout"><strong>skill = trigger + steps + tools/assets + proof target</strong></div>
  <div class="talk-grid talk-grid--3">
    <div class="talk-card"><span>trigger</span><strong>recognizable task</strong></div>
    <div class="talk-card"><span>procedure</span><strong>repeatable path</strong></div>
    <div class="talk-card talk-card--accent"><span>done</span><strong>evidence of proof</strong></div>
  </div>
</figure>

Notes:

Some context is not a rule; it is a procedure. [Agent Skills](https://agentskills.io/home) package repeatable workflows as folders with instructions and optional scripts, references, or assets. OpenAI's [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure shape: the agent sees lightweight metadata first and loads the full instructions only when the task calls for them.

Do not package preferences as skills. A style preference belongs in `AGENTS.md`, a formatter, or a linter. A skill earns its place when it prevents a future run from rediscovering the workflow.

## dot-agents keeps task state alive
<!-- slide:
layout: text
-->

> Long work needs restartable state, not a heroic chat transcript.

```text
.agents/work/<category>/<task>/
├─ index.md       status + next action
├─ research.md    trusted findings
├─ plan.md        implementation-ready plan
├─ progress.md    checks + blockers
╰─ decisions/     durable calls
```

Notes:

`dot-agents` is a lightweight file convention for long-running agent work. It separates noisy exploration from the state that needs to survive: what we are doing, why, what we trust, what we decided, what remains, and how the next thread should continue.

Research threads can go wide. Implementation threads should be narrow. The work item connects them without dragging every stale search, false start, or abandoned option into the next run. [Small Threads, Durable State](/posts/small-threads-durable-state) is the tactical version of this loop.

## Move review earlier than the PR
<!-- slide:
layout: text
-->

> Review should start with intent, then trace, then diff, then proof.

<figure class="talk-figure" aria-label="Review order from plan to evidence">
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>1. Plan</strong><span>Does this solve the right problem?</span></div>
    <div class="talk-stack__item"><strong>2. Trace</strong><span>Did the agent inspect and change the right things?</span></div>
    <div class="talk-stack__item"><strong>3. Diff</strong><span>Is the implementation coherent and maintainable?</span></div>
    <div class="talk-stack__item"><strong>4. Evidence</strong><span>What proves it works, and what remains uncertain?</span></div>
  </div>
</figure>

Notes:

The PR diff is still necessary. It is no longer enough. Planning review catches wrong work before it is generated. Trace review catches suspicious behavior: skipped files, broad edits, repeated failed commands, ignored test failures, or a tool run that changed more than expected. Diff review checks the implementation. Evidence review checks whether the proof matches the risk.

## Evidence keeps judgment attached to the diff
<!-- slide:
layout: text
-->

> Proof should match risk.

<figure class="talk-figure" aria-label="Evidence ladder by risk level">
  <div class="talk-grid talk-grid--3">
    <div class="talk-card"><span>low risk</span><strong>format, lint, focused test</strong></div>
    <div class="talk-card talk-card--accent"><span>medium</span><strong>typecheck, integration, screenshot, curl</strong></div>
    <div class="talk-card talk-card--dark"><span>high risk</span><strong>trace, migration dry run, rollback, human signoff</strong></div>
  </div>
</figure>

Notes:

Evidence is part of durable context because "done" is otherwise too easy to say. An agent can produce a confident final answer after a failed test, a skipped check, or an unreviewed assumption. The reviewer needs proof that matches the risk.

For a content change in this repo, the normal proof is `npm run check` and `npm run build`. For UI work, evidence may include a screenshot or browser trace. For API work, it may include `curl` output or an integration test. For migrations, it may include a dry run and rollback note. The full ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it).

## The control loop decides what survives
<!-- slide:
layout: visual
-->

> Preserve what changed future behavior; delete or ignore the rest.

<figure class="talk-figure" aria-label="Durable context control loop">
  <div class="talk-loop">
    <div class="talk-loop__item">Map</div>
    <div class="talk-loop__item">Procedure</div>
    <div class="talk-loop__item">State</div>
    <div class="talk-loop__item">Evidence</div>
  </div>
  <p class="talk-note">Promote what helped the next run.</p>
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>missed command</strong><span>update AGENTS.md</span></div>
    <div class="talk-stack__item"><strong>repeated workflow</strong><span>make a skill, script, or checklist</span></div>
    <div class="talk-stack__item"><strong>lost state</strong><span>create a work item</span></div>
    <div class="talk-stack__item"><strong>repeated bug</strong><span>add a check</span></div>
  </div>
</figure>

Notes:

The point is not to collect more context. The point is to run a promotion loop. When an agent misses the same command twice, update the map. When a sequence repeats, make a skill or script. When task context spans sessions, create a work item. When a mistake is mechanically detectable, add a check. When ambiguity keeps returning, write the architecture note or example the agent should copy.

## Durable context travels
<!-- slide:
layout: text
-->

> Repo-local context survives the agent, the laptop, the teammate, and the thread.

<figure class="talk-figure" aria-label="Durable context travels across environments and people">
  <div class="talk-grid talk-grid--3">
    <div class="talk-card"><span>session</span><strong>fresh thread starts from current state</strong></div>
    <div class="talk-card"><span>engineer</span><strong>teammate can inspect intent and proof</strong></div>
    <div class="talk-card talk-card--accent"><span>environment</span><strong>local, cloud, CI share commands and rules</strong></div>
  </div>
</figure>

Notes:

This is the benefit that makes the work worth doing. A chat transcript helps the person in that chat. Repo-local context helps the next person, the next agent, and the next environment.

That portability matters because agent stacks will keep changing. The durable artifact should not be a vendor-specific memory blob if a simple file, script, test, or work item can carry the truth.

## The before and after is mundane
<!-- slide:
layout: text
-->

> Durable context makes agent work less magical and more reviewable.

| Before | After |
| --- | --- |
| New thread asks what we are doing. | New thread opens the work item. |
| Agent rediscovers commands. | Map and skills point to checks. |
| Review starts with surprise diff. | Review starts with intent and proof target. |
| Decisions are buried in chat. | Decisions are linked from task state. |

Notes:

In my own agent work, the improvement is rarely dramatic in the moment. It is smaller and more valuable: fewer repeated questions, fewer rediscovered commands, fewer giant diffs with missing intent, and cleaner handoffs when a thread gets long.

The agent does not become wise because a folder exists. It becomes easier to steer because the steering surface is visible.

## Start with one repeated pain
<!-- slide:
layout: text
-->

> Promote the smallest artifact that makes the next run better.

<figure class="talk-figure" aria-label="Repeated pain mapped to durable artifact">
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>missed command</strong><span>AGENTS.md</span></div>
    <div class="talk-stack__item"><strong>repeated workflow</strong><span>skill / script / checklist</span></div>
    <div class="talk-stack__item"><strong>lost task state</strong><span>.agents/work item</span></div>
    <div class="talk-stack__item"><strong>repeated mistake</strong><span>lint / test / check</span></div>
    <div class="talk-stack__item"><strong>high-risk decision</strong><span>human review rule</span></div>
  </div>
</figure>

<p class="talk-callout"><strong>Start with one real task. Write down what made the agent better. Repeat.</strong></p>

Notes:

Do not start by designing the perfect agent operating model. Start with one repeated pain.

If agents keep missing the same build command, add it to `AGENTS.md`. If publishing a post requires the same sequence every time, make or load a skill. If work spans multiple sessions, create a work item. If review keeps finding the same class of bug, write a deterministic check. If a decision keeps getting reopened, write down the decision and link it from the task.

Someone has to own the loop: notice what helped, promote it, delete stale guidance, and keep the next run better than the last.

## Sources used

- Noperator, [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the surrender/debt framing and the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/) and [Small Threads, Durable State](/posts/small-threads-durable-state) — source material for file-backed task state and handoffs.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) — internal companion piece for the evidence ladder.
