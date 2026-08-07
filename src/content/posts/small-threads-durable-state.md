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

```text
wide research ──▶ critique ──▶ human decision ──▶ focused plan ──▶ small implementation thread
```

Research threads may search broadly, compare approaches, and critique a design. Their output is a smaller decision surface, not a diff. Implementation threads start from that decision with one goal, explicit scope, and a verification target; their output is one coherent review unit.

Build Crew episode 7 illustrates both modes: a directed thread handles a known change, while a wider flow produces research reports, critiques, and a plan before handing off to implementation ([00:13:06–00:24:12](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=786s)). That is a practitioner workflow, not comparative evidence that small threads always improve quality.

Carry the decision, the evidence that justifies it, relevant constraints, rejected alternatives that might otherwise reopen, and unresolved questions—not the exploratory transcript.

[Your Repo Is the Memory](/posts/durable-context-coding-agents) owns the memory model. This article owns the operating procedure that moves distilled state between threads.

## A work item carries the restart state

> A work item is task state, not a prompt pile.

This repository uses dot-agents work items as one concrete implementation. Only `index.md` is required; add other artifacts when they prevent the next thread from reconstructing important state.

```text
.agents/work/<category>/<work-slug>/
├── index.md      # status, summary, artifacts, next action, open questions
├── research.md   # optional: distilled work-local findings
├── plan.md       # optional: tasks, scope, acceptance, verification
└── progress.md   # optional: chronological changes, evidence, blockers
```

| File | Restart question |
| --- | --- |
| `index.md` | Where are we? |
| `research.md` | What uncertainty did we reduce? |
| `plan.md` | What contract are we executing? |
| `progress.md` | What happened, and what is next? |

`index.md` is the landing page and current source of truth. Research records uncertainty paid down; a plan records ordered tasks, scope, acceptance, verification, and stop conditions; progress records chronological execution history. Larger work may use focused research or plan directories, requirements, decisions, or stored handoffs. Those are optional extensions, not a checklist to fill.

A generic progress entry should make restart boring without becoming a second status page:

```markdown
## 2026-06-28 Task N

- What changed:
- Decisions or deviations:
- Files changed:
- Verification and results:
- Artifacts:
- Blockers:
```

After appending progress, update the current status and next action in `index.md`. Keep work-local state here; promote repeated project guidance to `AGENTS.md`, a skill, script, check, architecture note, or reusable research note.

## Handoff prompts are compression with responsibility

> Handoffs compress decisions, scope, and proof without carrying the whole chat.

```text
Work item:
Plan task or phase:
Scope and non-goals:
Acceptance and verification:
Stop if:
Update durable state:
Return:
```

A handoff prompt is not "continue from the previous thread." It is a compact operating brief for one implementation, review, verification, or repair slice. Include the work item path, exact task, files to read first, decisions already made, scope limits, acceptance, verification, stop conditions, required work-item updates, and expected return.

The handoff should be small enough to paste and specific enough that the new thread does not need lore. Keep an ephemeral handoff in the prompt; store a reusable one as a separate `handoff-*.md` file linked from `index.md` or the active plan.

## One implementation owner lands one reviewable unit

> Research may fan out; mutation needs one owner and one coherent review unit.

```text
bounded diff → inspect → check → review unit → durable state
```

One active implementation thread should own a work item at a time. Fan out read-only research into separate reports, or split truly isolated mutations into separate work items with explicit integration ownership. Otherwise parallel writers turn progress and current state into a race.

Start a fresh implementation thread when responsibility changes: research becomes coding, assumptions fail and require a new plan, the work crosses a subsystem or ownership boundary, or the current review unit is complete. Token count alone is a weak trigger.

For each review unit:

1. inspect the bounded diff;
2. run the agreed risk-scaled checks;
3. inspect the post-check diff and generated changes;
4. commit or submit the coherent unit only if the workflow grants that authority;
5. update the plan checkbox, progress log, and current index state.

The plan names the proof contract. The implementation thread records exact commands, results, artifacts, skipped checks, and known gaps. Use [Make the Agent Prove It](/posts/make-the-agent-prove-it) to choose evidence proportionate to risk.

## The operating procedure

> Classify, research, plan, hand off, implement, verify, and promote.

```text
classify → research → plan → critique → handoff → implement → verify → promote
```

Create a work item when decisions, evidence, ownership, or next actions must survive a thread, session, person, or environment. Skip it when the task is obvious, local, immediately verifiable, and unlikely to be resumed.

1. **Classify the restart cost.** Decide whether useful state must outlive the current thread. File count is not the deciding factor.
2. **Go wide if needed.** Ask for research, critique, or alternatives before coding. Save only distilled findings in `research.md`.
3. **Write the plan.** Keep it short: goal, scope limits, tasks, acceptance criteria, verification, stop conditions.
4. **Get critique before implementation.** Use a second agent or a high-reasoning review pass when the plan is broad, risky, or architectural. Cut scope before code is written.
5. **Handoff into a narrow thread.** Give it the work item path, the task slice, relevant files, and the verification contract.
6. **Implement with one owner.** Keep mutation inside one bounded slice. If the responsibility changes, update the plan or start a new thread.
7. **Verify and record.** Run the checks, save evidence, update the plan and progress, then refresh `index.md` with current status and next action.
8. **Promote reusable learning.** If a repeated rule emerged, move it to `AGENTS.md`, a skill, a script, or a check. If it only matters here, leave it in the work item.

The goal is not shorter chat for its own sake. It is to make the next thread start from justified state, own one responsibility, and leave the work restartable.

## Sources used

- [dot-agents](https://github.com/colmarius/dot-agents) supplies the work-item pattern; this repository's root `AGENTS.md`, `.agents/work/AGENTS.md`, and `agent-work` skill define the concrete profile described here.
- [Build Crew episode 7](https://www.youtube.com/watch?v=fVx5M2GVjEQ), especially [00:13:06]-[00:24:12] on small directed threads and the research-to-implementation funnel.
