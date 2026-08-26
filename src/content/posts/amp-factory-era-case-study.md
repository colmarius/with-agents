---
title: 'Using Amp for Real Coding Work'
description: 'How to brief, place, delegate, and verify a coding task with Amp.'
pubDate: 2026-06-28
updatedDate: 2026-08-26
tags: ['AI Agents', 'Amp', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: 5
---

## Brief one task
<!-- slide:
class: compact
message: small
-->

> Give Amp one outcome, clear limits, and a way to prove the result.

```text
one task
    ↓
one owner
    ↓
one proof target
```

Start with the result and repository, not a role-play prompt. Amp can use
repository guidance from `AGENTS.md`; put only task-specific context in the
assignment ([AGENTS.md](https://ampcode.com/docs/customize/agents-md),
[Prompting](https://ampcode.com/docs/prompting#how-to-prompt)).

```text
Outcome:
  desired result
Scope:
  files or subsystem
Start:
  code, issue, or failure
Verify:
  commands and observations
Do not:
  forbidden or approval actions
Return:
  evidence and uncertainty
```

A useful brief is not necessarily long. It names the decision Amp owns, the
authority it does not have, and the evidence you need before accepting the work.

## Choose a mode and environment
<!-- slide:
class: compact
message: small
-->

> Match reasoning to uncertainty and execution to the state the task needs.

| Need | Choice |
| --- | --- |
| Default or small task | `medium`; `low` when well-defined |
| Difficult or open-ended task | `high`; `ultra` only for the hardest work |
| Fresh remote environment | Orb |
| Particular live machine | Runner |

Amp documents modes as capability presets, not promises about a fixed model
([The Dial](https://ampcode.com/docs/the-dial),
[Models](https://ampcode.com/models)). Orbs are remote machines whose baseline can
be reconstructed through committed setup and resume hooks. Project settings can
also supply pre-clone prerequisites and a pre-setup script outside the repository
([Customizing Orbs](https://ampcode.com/docs/orbs/customizing)). Use project-stored
scripts for clone blockers or transitional setup; keep stable team setup in the
repository so it can be reviewed with the code. A registered
[runner](https://ampcode.com/docs/cli/runners) executes on the selected live
machine.

Mode and environment solve separate problems: mode addresses task uncertainty;
environment supplies the required machine state. Change either only for a concrete
task need. Orb size is a third control: choose it from build, test, and service
load, then inspect personal or per-thread usage through Puck or the CLI before
changing the default
([Sizes & Costs](https://ampcode.com/docs/orbs/sizes-and-costs),
[“Explain Usage”](https://ampcode.com/news/explain-usage)).

## Delegate only independent work

> Add another worker only when its slice and return path are unambiguous.

Built-in subagents have separate context, cannot take mid-task guidance, and return
one final result
([Modes & Models](https://ampcode.com/docs/models-and-subagents#specialist-subagents)).
Use one only when an independent investigation, test run, or review can be handed
back that way. Ask Oracle only when a specific unresolved question could change an
important decision ([Tools](https://ampcode.com/docs/tools#oracle)).

Keep overlapping edits and final integration with one owner. Otherwise, stay with
one agent.

## Require proof before accepting the change

> Ask Amp to return executed checks, observed behavior, and remaining uncertainty.

```text
change
    ↓
checks + running system
    ↓
diff + evidence
    ↓
human acceptance
```

Name the proof in the initial brief. For a logic change, that may be a focused test
plus the broader suite. For a UI change, require the affected route and states to be
exercised in a real browser. In an orb, a Portal can expose a running HTTP service
through an authenticated URL for inspection
([Portals](https://ampcode.com/docs/orbs/portals)).

Ask Amp to inspect its own diff and return the decisive command output, observed
behavior, and any check it could not run. A passing test proves only what it
exercises. A Portal transports a running interface; it does not prove the interface
is correct. You still decide whether the evidence answers the original task.

## Automate only a proven loop

> Schedule or trigger work only after the manual task has a reliable verifier and stop condition.

If this task becomes repeatable, a schedule can wake Amp from a saved prompt in the
same thread ([Automations](https://ampcode.com/docs/orbs/automations)); a webhook
can store an event and wake an orb
([Event-Driven Orbs](https://ampcode.com/docs/orbs/event-driven),
[Plugin API](https://ampcode.com/docs/plugin-api)). Webhook URLs are credentials,
bodies are untrusted, and delivery is at least once.

Do not enable either until one owner has defined allowed changes, a repeatable
verifier, duplicate or partial-delivery safety, and an expiry.

That is the durable Amp workflow: brief clearly, place work deliberately, verify
before accepting, and add concurrency or automation only when ownership is clear.

## Sources used

- Product behavior was checked on 2026-08-26 against
  [Amp Docs](https://ampcode.com/docs),
  [Orbs](https://ampcode.com/docs/orbs),
  [Models](https://ampcode.com/models),
  [Plugin API](https://ampcode.com/docs/plugin-api),
  [Pricing](https://ampcode.com/pricing), and
  [Chronicle](https://ampcode.com/chronicle). The Docs take precedence; model
  routing, pricing, plan limits, and interface details are intentionally omitted
  because they change. All workflow recommendations above are author guidance, not
  claims that Amp improves productivity or quality.
