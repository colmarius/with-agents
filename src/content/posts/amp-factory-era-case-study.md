---
title: 'Using Amp for Real Coding Work'
description: 'How to brief, place, delegate, and verify a coding task with Amp.'
pubDate: 2026-06-28
updatedDate: 2026-08-23
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
assignment ([Manual](https://ampcode.com/manual#AGENTS.md)).

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
([Manual](https://ampcode.com/manual), [Models](https://ampcode.com/models)). Orbs
are remote machines whose environment can be reconstructed through committed setup
and resume hooks
([Orbs setup files](https://ampcode.com/manual/orbs#setup-files)); a registered
runner executes on the selected live machine.

Mode and environment solve separate problems: mode addresses task uncertainty;
environment supplies the required machine state. Change either only for a concrete
task need.

## Delegate only independent work

> Add another worker only when its slice and return path are unambiguous.

Built-in subagents have separate context, cannot take mid-task guidance, and return
one final result ([Manual](https://ampcode.com/manual#subagents)). Use one only when
an independent investigation, test run, or review can be handed back that way. Ask
Oracle only when a specific unresolved question could change an important decision
([Manual](https://ampcode.com/manual#oracle)).

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
([Orbs portals](https://ampcode.com/manual/orbs#portals)).

Ask Amp to inspect its own diff and return the decisive command output, observed
behavior, and any check it could not run. A passing test proves only what it
exercises. A Portal transports a running interface; it does not prove the interface
is correct. You still decide whether the evidence answers the original task.

## Automate only a proven loop

> Schedule or trigger work only after the manual task has a reliable verifier and stop condition.

If this task becomes repeatable, a schedule can wake Amp from a saved prompt in the
same thread ([Manual](https://ampcode.com/manual#schedules)); a webhook can store an
event and wake an orb
([Orbs webhooks](https://ampcode.com/manual/orbs#webhooks),
[Plugin API](https://ampcode.com/manual/plugin-api)). Webhook URLs are credentials,
bodies are untrusted, and delivery is at least once.

Do not enable either until one owner has defined allowed changes, a repeatable
verifier, duplicate or partial-delivery safety, and an expiry.

That is the durable Amp workflow: brief clearly, place work deliberately, verify
before accepting, and add concurrency or automation only when ownership is clear.

## Sources used

- Product behavior was checked on 2026-08-23 against the
  [Manual](https://ampcode.com/manual),
  [Orbs manual](https://ampcode.com/manual/orbs),
  [Models](https://ampcode.com/models),
  [Plugin API](https://ampcode.com/manual/plugin-api),
  [Pricing](https://ampcode.com/pricing), and
  [Chronicle](https://ampcode.com/chronicle). The manuals take precedence; model
  routing, pricing, plan limits, and interface details are intentionally omitted
  because they change. All workflow recommendations above are author guidance, not
  claims that Amp improves productivity or quality.
