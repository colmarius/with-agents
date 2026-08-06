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

An agent can only operate what the system lets it see, change, and verify. If one
useful action requires fifteen sequential tool calls, if state disappears after
each call, or if the preview behaves differently from production, prompting is
not the only problem. The interface is spending the model's attention on plumbing
and teaching it to trust weak evidence.

Nuno Campos of Witan Labs describes replacing about fifteen spreadsheet tools
with one persistent Node.js REPL. The agent could compose JavaScript functions in
one call, retain variables between calls, and interleave shorter scripts with
reasoning ([00:04:21–00:08:02](https://www.youtube.com/watch?v=HEFSExa0xl0&t=261s)).
James Russo of HeyGen reports a different route to the same goal: after testing
custom wrappers, larger prompts, and skills, his team found that a thin HTML
surface worked best for its video system because models already handled the
representation ([00:04:36–00:06:37](https://www.youtube.com/watch?v=Cz4v1WHVyZc&t=276s)).

Those are product-affiliated reports, not controlled comparisons. They support a
design question rather than a universal answer: **what is the smallest familiar
surface that lets an agent compose real work and inspect the result?**

[Agentic Coding in 2026](/posts/agentic-coding-2026) maps the broader workflow.
This article owns the software-design side of one claim in that map: the codebase
and its tools are part of the agent system.

## Make operations composable and state inspectable

> Prefer a small language of useful operations over a large menu of disconnected buttons.

A good agent-facing surface does not need to be a shell. It does need to let the
agent combine operations without repeatedly translating intermediate results
through the model.

Campos's REPL separated the interface language from the implementation language:
JavaScript provided a model-familiar composition layer while C# continued to own
the spreadsheet implementation. Adding capability meant exposing another method
and updating TypeScript definitions rather than adding more top-level tools
([00:04:21–00:08:02](https://www.youtube.com/watch?v=HEFSExa0xl0&t=261s)). The
current REPL is not the durable recommendation—Campos expects better computer use
to change the best interface, and says the durable part is the verification loop
behind it
([00:10:46–00:11:50](https://www.youtube.com/watch?v=HEFSExa0xl0&t=646s)). The
composability requirement—operations that combine, state that survives long
enough to inspect and extend the work—is this article's reading of why the REPL
won.

Lawrence Jones of incident.io shows why queryable access matters when the domain
is too large to dump into context. Large production-derived evaluation fixtures
made direct YAML editing impractical, so the team built a narrow CLI that lets an
agent list, add, replace, and edit individual cases. A runbook then connects that
surface to a red-green evaluation loop
([00:05:46–00:08:39](https://www.youtube.com/watch?v=L2r6vLlLgs8&t=346s)). For
deeper investigations, the team exports nested UI and trace data as a searchable,
self-documenting filesystem beside the code
([00:10:37–00:12:28](https://www.youtube.com/watch?v=L2r6vLlLgs8&t=637s)).

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
([00:09:56–00:11:50](https://www.youtube.com/watch?v=HEFSExa0xl0&t=596s)). A
feedback loop backed by a low-fidelity simulator can be more dangerous than a
visible gap because it manufactures confidence.

Joseph Wang and his Emulated co-founder Sid extend the same warning to
distributed infrastructure. They argue that a single-node sandbox can omit
resource provisioning, gradual deployment, rollback, network partitions,
monitoring, and live-traffic blast radius
([00:06:40–00:10:58](https://www.youtube.com/watch?v=zkX03APVj0M&t=400s)). Their
proposed multi-node environments use real cloud resources, but they also identify
startup time, cost, and the remaining simulation-to-reality gap as unresolved
constraints
([00:10:58–00:12:45](https://www.youtube.com/watch?v=zkX03APVj0M&t=658s)). This
is an Emulated product and research-direction account, not comparative evidence
that the approach improves agent reliability.

Existing deterministic systems also belong inside the loop. Daniel Szoke of
Sentry demonstrates Rust rejecting a concurrency error and returning the exact
non-`Send` value to repair. His broader argument is bounded: compiler constraints
rule out classes of invalid programs rather than proving intended behavior, and
he still recommends tests and review alongside them
([00:05:50–00:06:39](https://www.youtube.com/watch?v=ugUeZ8-b-u0&t=350s),
[00:09:26–00:15:13](https://www.youtube.com/watch?v=ugUeZ8-b-u0&t=566s)).
Morgante Pell of Grit similarly argues for exposing warm language-server state
when a full enterprise build is too slow for each repair attempt
([00:10:29–00:13:36](https://www.youtube.com/watch?v=Ve-akpov78Q&t=629s)).

[Make the Agent Prove It](/posts/make-the-agent-prove-it) explains how to choose a
risk-scaled proof stack. The interface-design obligation comes first: make the
real compiler, renderer, calculation engine, runtime, or fixture suite available
in a form the agent can run and interpret.

## Reset and retry are interface features

> Recovery should return to a known state, not ask a polluted loop to become wiser indefinitely.

Longer loops accumulate failed assumptions as well as useful context. Recovery
therefore needs a concrete state transition.

Pell reports an internal observation that Grit pull-request success falls after
more than ten sequential repair prompts; the talk gives no sample or method, so
that number is not a reusable threshold. The useful mechanism is the response:
restore a known-good checkpoint, fork isolated attempts from the same state, and
select a continuation using executable signals such as compiler errors and tests
([00:13:36–00:15:43](https://www.youtube.com/watch?v=Ve-akpov78Q&t=816s)).

Chris Parsons's Ralph-loop workshop reaches the same requirement without the
distributed machinery. His project-specific skill inspects Git state and treats a
dirty tree with passing tests differently from one with failing tests, while
warning that passing tests still do not establish the requested behavior
([00:47:31–00:51:21](https://www.youtube.com/watch?v=2TLXsxkz0zI&t=2851s)).

An agent-ready operation should therefore answer:

1. What state changed?
2. What is the last known-good state?
3. Can the operation be retried safely?
4. Can a failed attempt be discarded without damaging shared work?
5. What evidence selects between retry, rollback, and escalation?

This state is not a substitute for durable project context. [Your Repo Is the
Memory](/posts/durable-context-coding-agents) covers intent, decisions, and task
state that should survive sessions. Here the concern is operational state: the
spreadsheet session, fixture, branch, process, or checkpoint the next action will
actually modify.

## Gate mutation and return control to a person

> The safest agent-facing interface makes consequential actions explicit and reviewable.

The following rule is editorial synthesis across the talks: **make discovery
cheap, make mutation explicit, and return consequential output through the
interface where a person already makes the decision.** No one speaker presents
that as a complete standard.

Matthias Luebken, identified with Tavon in the source title, demonstrates a
pre-tool-call hook where a product can enforce access control before an agent
updates a contact ([00:07:27–00:08:28](https://www.youtube.com/watch?v=vAIDdLKB6-w&t=447s)).
In a later sales example, customer-specific agents use CRM and ERP CLIs inside a
sandbox, but return email drafts to the existing inbox for a person to edit
([00:15:17–00:19:12](https://www.youtube.com/watch?v=vAIDdLKB6-w&t=917s)). The
talk presents an evolving implementation and does not report production-quality
security or reliability results.

Parsons gives a sharper permission example: his remote worker uses separate keys,
read-only access where possible, and permission rules that allow email drafts but
not sending ([00:52:14–00:54:11](https://www.youtube.com/watch?v=2TLXsxkz0zI&t=3134s)).
Isolation alone is not the policy. The useful boundary is the capability the
agent never receives.

A draft, diff, dry run, or proposed plan is therefore not merely nicer UX. It is
an interface state between “the agent found an action” and “the system accepted
its consequence.” Preserve that state when a person must own the result.

## Review the interface before adding another agent

> Agent readiness is a design review, not a prompt-writing exercise.

The checklist below is synthesis from the source patterns. Run it against one
real workflow before adding tools, agents, or autonomy.

| Question | A useful answer looks like | Warning sign |
| --- | --- | --- |
| Can operations compose? | One script or call combines related steps. | The agent shuttles data through many sequential tool calls. |
| Is state inspectable? | Current state has a query, file, session, or typed object. | Important state exists only in UI pixels or private service memory. |
| Is state scoped? | Sessions and credentials belong to one task, case, or customer. | Context or authority leaks across unrelated work. |
| Does feedback match production? | The same engine, semantics, deployment path, or validated simulator checks the result. | A partial mock rejects behavior production accepts. |
| Are errors actionable? | Failures identify the operation, location, class, and next safe action. | The agent sees generic failure text and retries blindly. |
| Is there a known-good checkpoint? | The system can reset, fork, or discard an attempt cheaply. | Every retry inherits the same polluted state. |
| Is mutation explicit? | Write, send, deploy, and delete are separate gated actions. | Discovery tools carry ambient write authority. |
| Can the agent propose before acting? | Diff, draft, dry-run, or preview is a first-class output. | Review happens only after the external side effect. |
| Is privilege narrow and attributable? | Task-specific credentials and events show what acted. | A shared broad token is the easiest integration path. |
| Where does the human re-enter? | The result returns to the editor, inbox, PR, or control surface where ownership already lives. | Approval is a detached button without enough state or evidence. |

Do not optimize every row at once. Choose the domain action that currently
requires the most prompting, manual repair, or blind trust. Make that action
composable, expose its state, connect faithful feedback, add a cheap reset, and
gate the consequence. Then test the interface with representative work.

The model will change. The interface can change with it. The durable investment
is a system that makes action, state, evidence, recovery, and ownership visible.

## Sources used

- [James Russo, “HTML Is All Agents Need”](https://www.youtube.com/watch?v=Cz4v1WHVyZc), a HeyGen product talk; especially [00:04:36–00:08:18] on thin representations and deterministic rendering.
- [Nuno Campos, “Teaching Coding Agents to Do Spreadsheets”](https://www.youtube.com/watch?v=HEFSExa0xl0), a Witan Labs presenter report with an internal benchmark; especially [00:04:21–00:11:50] and [00:15:49–00:17:41] on composable REPL state, feedback fidelity, and interface churn.
- [Joseph Wang and Sid, “Emulated: The Data for Fully Autonomous Software Engineers and Companies”](https://www.youtube.com/watch?v=zkX03APVj0M), an Emulated product and research-direction account; especially [00:06:40–00:12:45] on single-node limits, multi-node infrastructure environments, and unresolved fidelity and cost constraints.
- [Lawrence Jones, “Fighting AI with AI”](https://www.youtube.com/watch?v=L2r6vLlLgs8), an incident.io internal-tools account; especially [00:05:46–00:12:28] on narrow evaluation commands and filesystem-shaped debugging data.
- [Daniel Szoke, “Why Rust Is the Ideal Language for Vibe-Coding”](https://www.youtube.com/watch?v=ugUeZ8-b-u0), a sponsored Sentry talk; especially [00:09:26–00:15:13] on deterministic compiler constraints and their limits.
- [Morgante Pell, “Code Generation and Maintenance at Scale”](https://www.youtube.com/watch?v=Ve-akpov78Q), a Grit product talk with self-reported operational observations; especially [00:10:29–00:15:43] on incremental feedback, compounding repair failure, and checkpoints.
- [Matthias Luebken, “A Piece of Pi”](https://www.youtube.com/watch?v=vAIDdLKB6-w), an evolving embedded-agent demonstration; especially [00:07:27–00:08:28] and [00:15:17–00:19:12] on pre-tool hooks, CLIs, sandboxes, sessions, and editable drafts.
- [Chris Parsons, “Ralph Loops: Build Dumb AI Loops That Ship”](https://www.youtube.com/watch?v=2TLXsxkz0zI), a workshop rather than a controlled evaluation; especially [00:47:31–00:54:11] on Git-state recovery, project-specific verification, separate credentials, and draft-only email access.
