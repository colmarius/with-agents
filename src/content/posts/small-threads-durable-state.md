---
title: 'Small Threads, Durable State'
description: 'A day-to-day operating procedure for reliable agent work: wide research, narrow implementation, durable work items, handoffs, progress logs, and verification records.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflows', 'Planning', 'dot-agents']
draft: false
unlisted: false
order: 4
---

## Small threads need durable state

> Small threads work when durable state carries decisions between them.

```text
wide research → durable state → narrow implementation → recorded proof
```

The easiest way to make an agent task go sideways is to ask one thread to do every job: discover the codebase, debate the design, critique the plan, implement the change, debug the fallout, and remember what still needs doing next week. That is too many responsibilities for chat context. The better operating rule is simple:

**Go wide for research and critique. Go narrow for implementation. Preserve only the useful task state.**

[Your Repo Is the Memory](/posts/durable-context-coding-agents) explains why repo-local state matters; [Make the Agent Prove It](/posts/make-the-agent-prove-it) explains the evidence ladder for one change. This article is the day-to-day procedure between them: small threads, `.agents/work/` work items, handoff prompts, progress logs, and verification records.

The procedure below is author synthesis. The source-backed pieces come from Build Crew episode 7's small-thread and research-funnel discussion [00:13:06]-[00:24:12], Maggie Appleton's warning that agent speed pushes alignment too late [00:03:35]-[00:06:49], Simon Willison's test-and-manual-check default [00:04:41]-[00:07:33], and Mario Zechner's emphasis on context control and human-readable module boundaries [01:12:03]-[01:30:17].

## Separate research threads from implementation threads

> Research threads reduce uncertainty; implementation threads land one reviewable diff.

```text
wide research ──▶ critique ──▶ human decision ──▶ focused plan ──▶ small implementation thread
```

There are two useful kinds of agent thread.

**Research threads are allowed to be wide.** They can search the codebase, inspect competing patterns, write reports, critique designs, and explore unknowns. Their job is not to land code; it is to reduce uncertainty.

**Implementation threads should be narrow.** They start with a specific goal, the relevant files or work item, explicit scope limits, and a verification target. Their job is to make a small change you can review, test, and commit.

Build Crew episode 7 shows both modes. A small directed thread can make a tiny implementation change when the human knows exactly what should happen [00:13:06]-[00:15:58]. A wider research flow can first produce overview reports, critiques, and a plan, then hand off into a fresh implementation thread [00:18:54]-[00:24:12]. The key move is the funnel on the slide.

Do not carry the whole research transcript forward. Carry the decision.

## Use `.agents/work/` as the task container

> A work item is task state, not a prompt pile.

The current dot-agents shape is a work item:

```text
.agents/work/<category>/<work-slug>/
├── index.md      # status, summary, artifacts, next action, open questions
├── research.md   # optional work-local findings
├── plan.md       # tasks, scope, acceptance criteria, verification
└── progress.md   # dated notes, files changed, checks run, blockers, next action
```

A work item is not a pile of prompts. It is the durable state for one piece of multi-session work. Status lives in `index.md`; task checklists live in `plan.md` or focused files under `plans/`; progress goes in `progress.md`. Do not move plan files through `todo/`, `in-progress/`, and `completed/` folders — the status field is the source of truth. Keep work state attached to the work item unless it is reusable project knowledge that belongs in `AGENTS.md`, a skill, a script, an architecture note, or a reusable research note.

## What belongs in each file

> Each work-item file answers one restart question.

| File | Restart question |
| --- | --- |
| `index.md` | Where are we? |
| `research.md` | What uncertainty did we reduce? |
| `plan.md` | What contract are we executing? |
| `progress.md` | What happened, and what is next? |

Keep the files boring. Boring is what makes a fresh thread useful.

**`index.md` — the current answer to "where are we?"** Use it as the landing page for a human or a new thread: `Status`, `Category`, `Updated`, a short summary, an artifacts list, the next action, and open questions. If a new thread reads only one work-item file first, it should be this one.

**`research.md` — uncertainty you paid to reduce.** Keep findings that mostly serve this work item: where the relevant code lives, which approach is smallest, what alternatives were rejected, source anchors or transcript timestamps, and risks the implementation thread should not rediscover. Delete throwaway scratch; keep the distilled findings.

**`plan.md` — the implementation contract.** A useful plan answers: what are we changing, what is out of scope, what tasks are ordered and checkable, what acceptance criteria must hold, what verification should run, and what should make the agent stop and ask. For a one-file typo, skip the work item. For multi-file features, migrations, API changes, or anything likely to span threads, write the plan.

**`progress.md` — the restart log.** A good entry makes restart boring:

```markdown
## 2026-06-28 Task N

- What changed:
- Publish or rollout decision:
- Files changed:
- Source anchors used:
- Verification:
- Blockers or follow-up:

## Updated Next Action

- ...
```

The point is not diary-writing. It is that a future thread can resume without trusting the previous chat transcript.

## Handoff prompts are compression with responsibility

> Handoffs compress decisions, scope, and proof without carrying the whole chat.

```text
Continue .agents/work/docs/example-refresh/.

Task: implement plan.md Task 3 only.

Read first: index.md, plan.md, progress.md, and the files named in the task.

Do not start Task 4. Do not edit unrelated routes.

Acceptance: the public route builds, no draft-only links are introduced, and the progress log names verification results.

Verify: npm run check, npm run build, git diff --check.

Stop if the route decision requires a new product or navigation decision.

Final response: summarize changes, publish status, files changed, verification, work-item updates, next action.
```

A handoff prompt is not "continue from the previous thread." It is a compact operating brief. Use one when the next thread should implement, review, verify, or repair a bounded slice. Include the work item path, the exact task or plan slice, files to read first, decisions already made, scope limits and non-goals, acceptance criteria, verification commands, stop conditions, and the expected final response.

The handoff should be small enough to paste and specific enough that the new thread does not need lore.

## Keep implementation threads committable

> One implementation thread should aim at one coherent, reviewable commit.

```text
bounded diff → inspect → check → commit → progress log
```

"Start a new thread when the token count gets big" is too crude. Start a new implementation thread when the job changes: research is done and coding should begin, the agent starts debugging its own failed assumptions, you switch subsystem or ownership boundary, you want to compare two approaches, or the diff is ready and the next task is separate.

Each implementation thread should aim at one reviewable diff. Use Git as the quality gate:

1. let the agent make the bounded change
2. inspect the diff yourself
3. stage only the good hunks
4. run the agreed checks
5. commit the coherent step
6. record what happened in `progress.md`

That prevents one chat from becoming the only place where the work makes sense.

## Verification is part of the state

> Record the narrowest evidence that changes confidence.

Do not make every article, feature, and bug fix repeat the whole proof-stack framework; link to [Make the Agent Prove It](/posts/make-the-agent-prove-it) when you need the full ladder. For day-to-day work items, record the narrowest evidence that changes confidence:

- content or docs: rendered route, source anchors, links, `git diff --check`
- localized code: targeted test, typecheck, lint, or formatter
- running system: server plus `curl`, browser path, logs, or screenshots
- risky change: sandbox, fake data, migration rollback story, and human judgment call

Willison's default is to start with tests and then exercise the real system, because tests alone do not prove the server boots or the API behaves [00:04:41]-[00:07:33]. The durable-state move is to leave that evidence where the next reviewer can find it: in the progress log, the PR description, the committed test, or the artifact named by the work item.

## The operating procedure

> Classify, research, plan, hand off, implement, verify, and promote.

```text
classify → research → plan → critique → handoff → implement → verify → promote
```

Use this for any agent task bigger than a tiny local edit.

1. **Classify the task.** Typo or one-file obvious fix? Skip the work item and verify directly. Spans files, sessions, decisions, or people? Create or reuse a work item.
2. **Go wide if needed.** Ask for research, critique, or alternatives before coding. Save only distilled findings in `research.md`.
3. **Write the plan.** Keep it short: goal, scope limits, tasks, acceptance criteria, verification, stop conditions.
4. **Get critique before implementation.** Use a second agent or a high-reasoning review pass when the plan is broad, risky, or architectural. Cut scope before code is written.
5. **Handoff into a narrow thread.** Give it the work item path, the task slice, relevant files, and the verification contract.
6. **Implement one coherent diff.** Keep the agent inside the plan. If the task changes, update the plan or start a new thread.
7. **Verify and record.** Run the checks, save evidence, update progress, name the next action.
8. **Promote reusable learning.** If a repeated rule emerged, move it to `AGENTS.md`, a skill, a script, or a check. If it only matters here, leave it in the work item.

This is short-thread discipline as durable state: not fewer words for their own sake, but better boundaries around what each thread is responsible for. The goal is to make the next small thread start with the right state and end with proof.

## Sources used

- Current dot-agents guidance: root `AGENTS.md`, `.agents/work/AGENTS.md`, and the `agent-work` skill conventions for work items, status, plans, progress, and handoffs.
- Build Crew episode 7 transcript: small directed handoff threads and the research-to-implementation funnel [00:13:06]-[00:24:12].
- Maggie Appleton, "Collaborative AI Engineering": implementation speed pushes alignment onto PR review unless planning happens earlier [00:03:35]-[00:06:49].
- Simon Willison, "Engineering Practices That Make Coding Agents Work": tests first, then manual real-system checks [00:04:41]-[00:07:33].
- Mario Zechner, "Pi Building Pi": control what context enters implementation and keep humans responsible for module/API boundaries [01:12:03]-[01:30:17].
