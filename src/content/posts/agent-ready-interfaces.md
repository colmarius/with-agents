---
title: 'Agent-Ready Interfaces: Design Tools Agents Can Actually Operate'
description: 'A practical design review for composable agent-facing operations, inspectable state, faithful feedback, recovery, mutation gates, and human control.'
pubDate: 2026-08-03
tags: ['AI Agents', 'Interface Design', 'Developer Tools', 'Agentic Coding']
draft: false
unlisted: false
order: 8
---

## The interface can be the bottleneck

> Better models cannot compensate for an interface that hides state, fragments work, or returns misleading evidence.

```text
domain → agent-facing surface → deterministic execution → evidence → human
```

An agent can only operate what the system lets it see, change, and verify. When
useful work requires many sequential calls, state disappears between calls, or
preview diverges from production, the interface spends model attention on plumbing
and teaches the agent to trust weak feedback.

The design question is: **what is the smallest familiar surface that lets an agent
compose real work and inspect the result?**

The talks below are product and practitioner reports, not controlled comparisons.
They illustrate interface mechanisms rather than establish a universal implementation.

[Agentic Coding in 2026](/posts/agentic-coding-2026) maps the broader workflow.
This article owns the agent-facing interface inside that system.

## Make operations composable and state inspectable

> Prefer a small language of useful operations over a large menu of disconnected buttons.

A good agent-facing surface does not need to be a shell. It does need to let the
agent combine operations without repeatedly translating intermediate results
through the model.

Campos's REPL separated the interface language from the implementation language:
JavaScript provided a model-familiar composition layer while C# continued to own
the spreadsheet implementation. Adding capability meant exposing another method
and updating TypeScript definitions rather than creating another top-level tool
([00:04:21–00:08:02](https://www.youtube.com/watch?v=HEFSExa0xl0&t=261s)).

Lawrence Jones adds the large-domain case: narrow list, add, replace, and edit
commands let the agent query large fixtures, while nested UI and trace data become
searchable files beside the code
([00:05:46–00:08:39](https://www.youtube.com/watch?v=L2r6vLlLgs8&t=346s),
[00:10:37–00:12:28](https://www.youtube.com/watch?v=L2r6vLlLgs8&t=637s)).

The pattern is not “everything should be a CLI.” It is:

- give operations explicit inputs, outputs, and errors;
- let the agent query a large domain instead of loading it whole;
- preserve intermediate state when later actions depend on it;
- keep the representation inspectable by a person;
- separate the stable domain implementation from the interface models happen to
  use well today.

## Feedback must match the real system

> A fast feedback loop is useful only when its evidence means what the agent thinks it means.

An agent does not need certainty after every action. It needs feedback that rules
out the right failures.

Russo's video pipeline lets the model author ordinary HTML, then freezes browser
time, waits for assets, captures each frame, and encodes the result. Preview and
final output use the same browser representation
([00:06:37–00:08:18](https://www.youtube.com/watch?v=Cz4v1WHVyZc&t=397s)). The
model gets a familiar authoring surface; deterministic machinery owns execution.

Campos makes the fidelity risk explicit. Witan built formula-calculation and
rendering engines so an agent could check spreadsheet behavior and appearance.
He warns that an engine implementing only part of Excel produces worse results:
the agent writes a formula that would work in practice, the incomplete engine
returns an error or wrong value, and the agent “fixes” the wrong thing
([00:09:56–00:11:50](https://www.youtube.com/watch?v=HEFSExa0xl0&t=596s)). The
interface-design inference is that an explicit gap is safer than feedback whose
semantics diverge from production.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns which evidence a
change requires. This article's narrower obligation is to expose the real compiler,
renderer, calculation engine, runtime, or fixture suite in a form the agent can run
and interpret.

Faithful feedback also requires protecting the expectations that define success.
Kent Beck reports an agent trying to erase a mismatch by changing the expected test
value, and says some expectations need an explicit immutable marker
([00:49:33–00:51:42](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=2973s)).

## Reset and retry are interface features

> Recovery should return to a known state, not ask a polluted loop to become wiser indefinitely.

Longer loops accumulate failed assumptions as well as useful context. Recovery
therefore needs a concrete state transition.

Pell's useful mechanism is the state transition: restore a known-good checkpoint
instead of extending a polluted repair chain
([00:13:36–00:15:43](https://www.youtube.com/watch?v=Ve-akpov78Q&t=816s)).

An agent-ready operation should therefore answer:

1. What changed, and what is the last known-good state?
2. Can the operation be retried safely?
3. Can a failed attempt be discarded without damaging shared work?
4. What signal selects retry, rollback, or escalation?

This is operational state: the session, fixture, branch, process, or checkpoint the
next action will modify. [Your Repo Is the Memory](/posts/durable-context-coding-agents)
owns durable intent, decisions, and task state.

## Gate mutation and return control to a person

> Consequential actions should be explicit and reviewable.

The following rule is editorial synthesis across the talks: **make discovery
cheap, make mutation explicit, and return consequential output through the
interface where a person already makes the decision.** No one speaker presents
that as a complete standard.

Luebken demonstrates a pre-tool hook that checks access before a contact update
and returns sandbox-produced email drafts to the existing inbox for editing
([00:07:27–00:08:28](https://www.youtube.com/watch?v=vAIDdLKB6-w&t=447s),
[00:15:17–00:19:12](https://www.youtube.com/watch?v=vAIDdLKB6-w&t=917s)). Parsons
describes a stricter capability boundary: separate keys, read-only access where
possible, and permission to draft email but not send it
([00:52:14–00:54:11](https://www.youtube.com/watch?v=2TLXsxkz0zI&t=3134s)). These
are practitioner demonstrations, not production security or reliability evidence.
Isolation is not policy; the useful boundary is the capability the agent never receives.

A draft, diff, dry run, or proposed plan is therefore not merely nicer UX. It is
an interface state between “the agent found an action” and “the system accepted
its consequence.” Preserve that state when a person must own the result.

## Review the interface as a design contract

> Agent readiness is a design review, not a prompt-writing exercise.

```text
compose → inspect and scope → faithful feedback → reset → gate → human return
```

The checklist below is synthesis from the source patterns. Run it against one real workflow.

| Contract | A useful answer looks like | Warning sign |
| --- | --- | --- |
| **Operations compose** | One script or call combines operations with explicit inputs, outputs, and errors. | The agent shuttles intermediate data through many calls. |
| **State is inspectable and scoped** | A query, file, session, or typed object exposes state for one task, case, or customer. | State exists only in UI pixels or private memory, or leaks across work. |
| **Feedback is faithful and actionable** | The real engine, equivalent semantics, deployment path, or validated simulator checks the result; errors identify the next safe action. | A partial mock or generic error causes blind repair. |
| **Recovery is cheap** | The system can reset, retry, or discard from a known-good state without damaging shared work. | Every retry inherits the polluted attempt. |
| **Mutation is explicit and narrow** | Discovery is separate from write, send, deploy, and delete; credentials are task-specific; draft, diff, or dry run is first-class. | Read operations carry ambient broad write authority. |
| **Human ownership has a return path** | The result returns with state and evidence to the editor, inbox, PR, or control surface where ownership already lives. | Approval is detached from the result and its consequences. |

Do not optimize every row at once. Choose the domain action that currently
requires the most prompting, manual repair, or blind trust. Make that action
composable, expose its state, connect faithful feedback, add a cheap reset, and
gate the consequence. Then test the interface with representative work.

## Sources used

- [James Russo, “HTML Is All Agents Need”](https://www.youtube.com/watch?v=Cz4v1WHVyZc), a HeyGen product talk; especially [00:04:36–00:08:18] on thin representations and deterministic rendering.
- [Nuno Campos, “Teaching Coding Agents to Do Spreadsheets”](https://www.youtube.com/watch?v=HEFSExa0xl0), a Witan Labs presenter report; especially [00:04:21–00:11:50] on composable REPL state and feedback fidelity.
- [Lawrence Jones, “Fighting AI with AI”](https://www.youtube.com/watch?v=L2r6vLlLgs8), an incident.io internal-tools account; especially [00:05:46–00:12:28] on narrow evaluation commands and filesystem-shaped debugging data.
- [Morgante Pell, “Code Generation and Maintenance at Scale”](https://www.youtube.com/watch?v=Ve-akpov78Q), a Grit product talk; especially [00:13:36–00:15:43] on restoring known-good checkpoints.
- [Kent Beck, “TDD, AI agents and coding with Kent Beck”](https://www.youtube.com/watch?v=aSXaxOdVtAQ), a practitioner interview; especially [00:49:33–00:51:42] on protecting supplied expectations from agent modification.
- [Matthias Luebken, “A Piece of Pi”](https://www.youtube.com/watch?v=vAIDdLKB6-w), an evolving embedded-agent demonstration; especially [00:07:27–00:08:28] and [00:15:17–00:19:12] on pre-tool hooks, CLIs, sandboxes, sessions, and editable drafts.
- [Chris Parsons, “Ralph Loops: Build Dumb AI Loops That Ship”](https://www.youtube.com/watch?v=2TLXsxkz0zI), a workshop rather than a controlled evaluation; especially [00:52:14–00:54:11] on separate credentials and draft-only email access.
