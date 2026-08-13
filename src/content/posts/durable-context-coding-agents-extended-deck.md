---
title: 'Your Repo Is the Memory: Durable Context for AI Coding Agents'
description: 'A richer slide-first alternate deck for durable context, repo memory, review checkpoints, and dot-agents workflows.'
pubDate: 2026-07-02
tags: ['AI Agents', 'Workflows', 'Agent Skills', 'dot-agents']
draft: false
unlisted: true
order: 3
---

<!--
Maintenance note for agents:
durable-context-coding-agents-extended-deck.md is the richer slide-first alternate for the canonical public article/deck in durable-context-coding-agents.md.

The canonical post is reader-first and may merge adjacent framing sections for scanning. Its opening may absorb source framing that this extended deck presents after the checkpoint slide. This deck may retain separate source, diagram, and pacing slides. When either changes, review the other in the same diff and keep factual claims, source roles, links, terminology, caveats, and broad argument order synchronized; section count, heading granularity, visuals, and slide pacing may intentionally diverge.

durable-context-coding-agents-image-deck.md is the linked visual alternate. When the canonical argument changes, review the image deck in the same diff and keep its claims, broad order, practical ending, notes, and source roles synchronized; its slide count and imagery may intentionally diverge.
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

<!-- notes -->

Durable context for AI coding agents: keeping intent, decisions, and proof attached to fast code.

At Norm, we build a data OS for real estate portfolios: a shared foundation for building data, investment planning, sustainability reporting, and CAPEX work. My work has mostly been close to the messy middle where product, engineering, and operations overlap. That is also where coding agents are most useful — and where missing context becomes expensive fastest.

This is the slide-first alternate for the same practical argument: what to keep in the repo, what to leave in chat, and how to make the next agent run start smarter than the last one.

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

The useful surprise is speed. A coding agent can inspect files, draft a plan, edit code, run commands, and summarize the result in minutes. The dangerous surprise is that alignment does not speed up automatically.

Someone still needs to name the goal, constraints, tradeoffs, and proof target. If that context only lives in chat, it disappears before the next engineer or agent can use it.

## Start with the checkpoint you already trust
<!-- slide:
layout: text
-->

> Ask where the human first becomes accountable, then move that checkpoint earlier.

<figure class="talk-figure" aria-label="Autonomy, durable context, and human checkpoint ladder">
  <div class="talk-path">
    <span class="talk-node">intent</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node talk-node--accent">plan</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node talk-node--accent">trace</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">diff</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">PR</span>
    <span class="talk-arrow">→</span>
    <span class="talk-node">release</span>
  </div>
  <div class="talk-grid talk-grid--3">
    <div class="talk-card">
      <span>autonomy</span>
      <strong>How far without review?</strong>
    </div>
    <div class="talk-card talk-card--accent">
      <span>context</span>
      <strong>What survives the thread?</strong>
    </div>
    <div class="talk-card">
      <span>checkpoint</span>
      <strong>Where can you redirect?</strong>
    </div>
  </div>
</figure>

<!-- notes -->

Before prescribing a workflow, locate the operating boundary. A team using agents as autocomplete has a different problem from a team running several terminal agents against the same repo. The useful distinction is not whether they use agents, but how far the agents run, what context travels with the work, and when a human can still redirect it.

Ask three questions: how far can the agent run without review, which shared context survives outside chat, and where can a human still change direction before rework becomes expensive?

Durable context is not a documentation hobby. It carries shared intent to a checkpoint where it can still change the work.

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

<!-- notes -->

The failure mode is not only hallucinated code. It is code-shaped output that looks substantial before anyone has made the intent explicit.

Noperator's essay [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) names the pathology: "generative AI can produce substantial form with minimally applied intent," and "substantial form without discernible intent." Agents compress the friction that used to force intent into the artifact. They can create files, tests, docs, migrations, screenshots, and PRs from a vague instruction; reviewers then have to recover intent from the output unless the team put it somewhere durable first.

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

<!-- notes -->

Maggie Appleton's [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) makes the economic shift clear: writing code is getting fast and cheap, so the hard question becomes not "how do we build it?" but "should we build it?" Agents collapse the old implementation window, taking many informal alignment moments with it: conversations, draft PRs, issue comments, and course corrections while the work is still cheap to redirect.

The pull request then inherits too many jobs. It must explain the goal, recover the plan, expose hidden assumptions, prove the implementation, and coordinate reviewers who were not present while the agent worked. That is too late for many decisions.

Durable context moves some alignment back before generation. The plan, constraints, accepted tradeoffs, proof target, and stop conditions live where another engineer or agent can inspect them before the diff becomes the only artifact.

## Speed becomes comprehension debt
<!-- slide:
layout: visual
-->

> If nobody can explain the generated code, the team owns comprehension debt.

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

<!-- notes -->

Addy Osmani's public post on [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) defines the posture as inheriting AI output without doing the underlying reasoning. His [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) article frames the bill: the gap between how much code exists and how much of it any human genuinely understands.

Tests can be green while understanding is not. The risk is not that every generated line is wrong; it is that nobody knows which implicit decisions were made, why they were acceptable, or where the next change will break.

Durable context keeps understanding attached to the work: what we asked for, why it matters, what changed, what proof exists, what is uncertain, and where a human made the call.

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

<!-- notes -->

Simon Willison describes LLMs as [a lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/): they compress a huge amount of public knowledge, but the compression loses details. Serious coding tasks are full of details the model cannot infer: the fast test command, the one UI primitive this repo uses, the migration rule, the security constraint, the product decision from last week, or the module boundary that is obvious to the team.

For exact technical work, a correct repo-local example beats expecting the model to infer the rule.

In one Amp example, Thorsten Ball reports that after a short UI-change request with a screenshot proof target, the agent read layered `AGENTS.md` files for the dev-server command, browser-automation and Storybook conventions, port, and checks, then returned the change and screenshots ([04:40:11–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=16811s)).

If that truth lives only in a chat thread, it dies with the thread. If it lives in files, checks, and work items inside the repo, the next run can use it.

## The repo is disk; chat is RAM
<!-- slide:
layout: cover
-->

> Chats are working memory; repo-local files are durable memory.

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

<!-- notes -->

This is the core idea behind `dot-agents`: put operating context for agentic work in versioned, repo-local files. Chat can stay messy. The repo should preserve the parts that change future behavior.

Think of chat as RAM: fast, useful, temporary, and noisy. Think of files as disk: slower to write, easier to share, easier to review, and available to the next engineer, agent, machine, and session.

In a private review of my own agent threads—an N=1 observation, not population evidence—the useful prompts became shorter as the repository context improved. They pointed to `AGENTS.md`, a skill, a work item, a commit, or a known baseline instead of reconstructing project context; short follow-ups steered the run and then expired. When the pointer target is durable, the prompt can be transient.

The judgment is deciding what to flush to disk.

## What should survive?
<!-- slide:
layout: text
-->

> Preserve the parts that change the next run; let the rest expire.

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

<!-- notes -->

Durable context is useful because it filters, not because it hoards. Keep accepted constraints, proof commands, decisions, task state, examples the agent should copy, and mistakes that should become checks. Leave behind transient prompts, abandoned hypotheses, duplicate logs, and explanations that only made sense in the moment.

Durable does not mean fresh or authoritative. Branches move and saved instructions go stale. For substantial work, name one current source of truth—usually the work item or active plan, optionally anchored to a commit or known baseline—and state which source wins when instructions disagree.

Some context should never be flushed to disk: secrets or credentials, personal data, machine-specific absolute paths, and ephemeral environment URLs or resource IDs. Durable context should be safe to share.

## The repo-memory stack
<!-- slide:
layout: visual
-->

> Durable context works best as a small stack of map, procedure, state, and proof.

<figure class="talk-figure" aria-label="Repo memory stack mapping context kinds to durable artifacts">
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>Map</strong><span>AGENTS.md</span></div>
    <div class="talk-stack__item"><strong>Procedure</strong><span>Agent Skill / script / checklist</span></div>
    <div class="talk-stack__item"><strong>State</strong><span>.agents/work item</span></div>
    <div class="talk-stack__item"><strong>Evidence</strong><span>tests / traces / screenshots / signoff</span></div>
    <div class="talk-stack__item"><strong>Promotion</strong><span>keep what helped; delete stale guidance</span></div>
  </div>
</figure>

<!-- notes -->

Each layer answers a different question. The map tells the agent where project truth starts. Procedures tell it how repeated work should happen. State says what is true for this task right now. Proof shows whether the work is done. Promotion turns one task's lesson into reusable guidance. Keeping those layers distinct prevents `AGENTS.md`, skills, and work items from becoming one big junk drawer.

## AGENTS.md is the map
<!-- slide:
layout: text
-->

> `AGENTS.md` tells the agent where project truth starts, not everything it could ever need.

<figure class="talk-figure" aria-label="AGENTS.md map contents">
  <div class="talk-stack">
    <div class="talk-stack__item"><strong>shape</strong><span>stack, directories, ownership boundaries</span></div>
    <div class="talk-stack__item"><strong>commands</strong><span>fast checks that prove common work</span></div>
    <div class="talk-stack__item"><strong>rules</strong><span>things agents must not rediscover</span></div>
    <div class="talk-stack__item"><strong>links</strong><span>skills, work items, checks, deeper docs</span></div>
  </div>
</figure>

<p class="talk-note">Not a junk drawer.</p>

<!-- notes -->

[`AGENTS.md`](https://agents.md/) gives coding agents a predictable place to start. Use it for instructions that apply before task-specific context exists: stack, commands, coding conventions, dangerous paths, security rules, and links to deeper guidance.

A useful `AGENTS.md` is short enough to be read and specific enough to change behavior. It should tell the agent what not to rediscover, not everything the project knows.

Durable does not mean permanent. Cherny describes prompt ablation as deleting existing guidance, observing the model, and restoring only instructions justified by repeated failures; he recommends periodically retesting `CLAUDE.md`, skills, and hooks as models change ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)).

Good entries are concrete: the fast check command, a frontmatter rule, a transcript location, a security constraint, or the UI primitive this repo uses.

Do not turn the map into a junk drawer. If a rule applies only under `src/content/posts/`, put it near that work or in a skill. If a mistake can be caught deterministically, add a check. If a workflow has steps and evidence, package it as a procedure.

## Agent Skills are procedures
<!-- slide:
layout: text
-->

> Package workflows when the trigger, steps, evidence, and human decision repeat.

<figure class="talk-figure" aria-label="Agent skill components">
  <div class="talk-callout"><strong>skill = trigger + steps + scripts/assets + proof target</strong></div>
  <div class="talk-grid talk-grid--3">
    <div class="talk-card"><span>trigger</span><strong>recognizable task</strong></div>
    <div class="talk-card"><span>procedure</span><strong>repeatable path</strong></div>
    <div class="talk-card talk-card--accent"><span>done</span><strong>evidence of proof</strong></div>
  </div>
</figure>

<!-- notes -->

Some context is not a rule; it is a procedure. [Agent Skills](https://agentskills.io/home) package repeatable workflows as folders with instructions and optional scripts, references, or assets. OpenAI's [Codex Skills docs](https://developers.openai.com/codex/skills) describe the same progressive-disclosure shape: the agent sees lightweight metadata first and loads the full instructions only when the task calls for them.

Use a skill when a workflow has a recognizable trigger and a repeatable path to proof. The skill should answer four questions: when should this load, what steps should the agent follow, what files or references does it need, and what evidence proves the workflow is done?

Do not package preferences as skills. A style preference belongs in `AGENTS.md`, a formatter, or a linter. A skill earns its place when it prevents a future run from rediscovering the workflow.

## dot-agents keeps task state alive
<!-- slide:
layout: text
-->

> Long work needs restartable state, not a heroic chat transcript.

```text
.agents/work/<category>/<task>/
├─ index.md       current status and next action
├─ research.md    trusted findings and source notes
├─ plan.md        implementation-ready plan
├─ progress.md    checks, blockers, decisions, handoffs
╰─ decisions/     durable calls that should not be reopened
```

<!-- notes -->

`dot-agents` is a lightweight file convention for long-running agent work. It separates noisy exploration from the state that needs to survive: what we are doing, why, what we trust, what we decided, what remains, and how the next thread should continue.

The workflow is simple: Context → Plan → Handoff Prompt → Implement → Record Progress → Promote.

Keep research or coordination in one coherent workstream while its accumulated context helps. Start a fresh context for bounded implementation after broad exploration or when verification needs independent judgment. The work item connects those contexts without dragging every stale search, false start, or abandoned option into the next run. [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) is the tactical version of this loop. Keep task-local context close to the task; do not turn it into a permanent transcript dump.

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

<!-- notes -->

The PR diff is still necessary. It is no longer enough. Planning review catches wrong work before it is generated. Trace review catches suspicious behavior: skipped files, broad edits, repeated failed commands, ignored test failures, or a tool run that changed more than expected. Diff review checks the implementation. Evidence review checks whether the proof matches the risk.

Vaibhav Gupta of Boundary describes a team that does not use traditional code
review, but surrounds its BAML work with a small durable `architecture.md`,
human-read design documents, dependency checks, and agent execution traces that
feed human-triaged issues
([00:00:01–00:06:00](https://www.youtube.com/watch?v=AMiyLItEtLA&t=1s)). The talk
does not compare defects or maintenance outcomes with conventional review. The
durable-context lesson is narrower: if line review shrinks, plans, traces,
executable invariants, and evidence must become first-class review artifacts.

The checkpoint does not have to be heavy. For small tasks it might be one paragraph and one test command. For risky tasks it might be a plan, reviewer signoff, browser trace, migration dry run, and rollback note. The important shift is that the human sees intent before the agent has produced a large artifact that is socially hard to throw away.

Authority should be explicit too: permission to investigate does not imply permission to implement, and permission to implement does not imply permission to commit, push, merge, or release.

## Evidence keeps judgment attached to the diff
<!-- slide:
layout: text
-->

> Proof belongs where the next reviewer can see it.

<figure class="talk-figure" aria-label="Evidence ladder by risk level">
  <div class="talk-grid talk-grid--3">
    <div class="talk-card"><span>low risk</span><strong>format, lint, focused test</strong></div>
    <div class="talk-card talk-card--accent"><span>medium</span><strong>typecheck, integration, screenshot, curl</strong></div>
    <div class="talk-card talk-card--dark"><span>high risk</span><strong>trace, migration dry run, rollback, human signoff</strong></div>
  </div>
</figure>

<!-- notes -->

Evidence is part of durable context because "done" is otherwise too easy to say. An agent can produce a confident final answer after a failed test, a skipped check, or an unreviewed assumption. The reviewer needs proof that matches the risk.

Repo state is not automatically trusted state: committed does not mean verified. Record which checks were rerun for this change and which results were inherited; where the baseline is already noisy, preserve enough evidence to distinguish old failures from new ones.

For a content change in this repo, the normal proof is `npm run check` and `npm run build`. For UI work, evidence may include a screenshot or browser trace. For API work, it may include `curl` output or an integration test. For migrations, it may include a dry run and rollback note. The full ladder is in [Make the Agent Prove It](/posts/make-the-agent-prove-it).

Evidence does not replace judgment. It gives judgment something concrete to inspect.

## Promotion closes the loop
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
</figure>

<!-- notes -->

Promotion should leave the next run better, not merely larger: preserve what changes behavior and prune what no longer earns its place.

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

<!-- notes -->

This is the benefit that makes the work worth doing. A chat transcript helps the person in that chat. Repo-local context helps the next person, the next agent, and the next environment.

Cross-session durability lets a fresh thread start from the current plan. Cross-engineer durability lets a teammate inspect the same intent, constraints, and proof. Cross-environment durability keeps the cloud agent, local terminal, CI runner, and review process pointed at the same commands and conventions.

That portability matters because agent stacks will keep changing. The durable artifact should not be a vendor-specific memory blob if a simple file, script, test, or work item can carry the truth.

## The before and after is mundane
<!-- slide:
layout: text
-->

> Durable context makes agent work less magical and more reviewable.

| Before durable context | After durable context |
| --- | --- |
| New thread asks, "What are we doing?" | New thread opens the work item and continues. |
| Agent rediscovers commands by trial and error. | `AGENTS.md` and skills point to the known checks. |
| Review starts with a surprising diff. | Review starts with intent, constraints, and proof target. |
| Useful decisions are buried in chat. | Decisions are linked from the task state. |
| Every agent gets a slightly different setup. | Repo-local files make the setup portable. |

<!-- notes -->

The agent does not become wise because a folder exists. It becomes easier to steer because the steering surface is visible. The human can review the plan, trace, diff, and evidence instead of inferring all of that from the final code.

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
    <div class="talk-stack__item"><strong>repeated ambiguity</strong><span>architecture note / example</span></div>
    <div class="talk-stack__item"><strong>high-risk decision</strong><span>human review rule</span></div>
  </div>
</figure>

<p class="talk-callout"><strong>Start with one real task. Write down what made the agent better. Repeat.</strong></p>

<!-- notes -->

Do not design the perfect agent operating model. Start with one repeated pain. Someone has to own the loop: notice what helped, promote it, delete stale guidance, and keep the next run better than the last.

## Sources used

- Noperator, [You can just say it](https://noperator.dev/posts/you-can-just-say-it/) — source for the "substantial form without discernible intent" framing.
- Maggie Appleton, [One Developer, Two Dozen Agents, Zero Alignment](https://maggieappleton.com/zero-alignment) — source for the alignment bottleneck and collaborative AI engineering framing.
- Addy Osmani, [Cognitive Surrender in Software Engineering](https://www.linkedin.com/posts/addyosmani_ai-programming-softwareengineering-activity-7457678048948064256-1pJl) and [Comprehension Debt](https://addyosmani.com/blog/comprehension-debt/) — source for the surrender/debt framing and the gap between generated code and human understanding.
- Simon Willison, [Lossy encyclopedia](https://simonwillison.net/2025/Aug/29/lossy-encyclopedia/) — source for the lossy-compression mental model and the advice to provide correct examples for exact technical work.
- Thorsten Ball, [“Think Harder: How I Prompt”](https://www.youtube.com/watch?v=vii6P0vJhTw&t=15626s) ([04:40:11–04:42:11](https://www.youtube.com/watch?v=vii6P0vJhTw&t=16811s)) — an Amp practitioner account of a short UI-change prompt using layered `AGENTS.md` instructions and screenshot proof.
- Boris Cherny, [We Cut 80% of Claude Code’s Prompt](https://www.youtube.com/watch?v=qyPCVqFUyDo) ([00:03:21–00:08:54](https://www.youtube.com/watch?v=qyPCVqFUyDo&t=201s)) — source for model-by-model prompt ablation and restoring guidance only after repeated observed failures.
- Vaibhav Gupta, [fighting slop with slop](https://www.youtube.com/watch?v=AMiyLItEtLA) ([00:00:01–00:06:00](https://www.youtube.com/watch?v=AMiyLItEtLA&t=1s)) — a Boundary product and engineering-practice account supporting durable architecture guidance, reviewed design writing, executable boundaries, and trace-based issue discovery when traditional line review is reduced.
- [`AGENTS.md`](https://agents.md/), [Agent Skills](https://agentskills.io/home), and [Codex Skills](https://developers.openai.com/codex/skills) — source material for map and procedure conventions.
- [`dot-agents`](https://dot-agents.dev/) and [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) — source material for file-backed task state and handoffs.
- [Make the Agent Prove It](/posts/make-the-agent-prove-it) — internal companion piece for the evidence ladder.
- Author synthesis from a private review of the author's own agent threads (one user's corpus); no thread content, prompts, or identifiers are reproduced.
