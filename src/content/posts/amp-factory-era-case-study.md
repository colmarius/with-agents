---
title: 'Amp as a Factory-Era Coding-Agent Case Study'
description: 'A source-backed Amp case study for task sizing, delegation, remote and event-driven execution, identity, lifecycle controls, cost governance, proof loops, and review.'
pubDate: 2026-06-28
updatedDate: 2026-08-13
tags: ['AI Agents', 'Amp', 'Workflows', 'Agentic Coding']
draft: false
unlisted: false
order: 5
---

## Amp is the example, not the whole lesson

> Amp is useful here because its product details expose reusable work contracts.

```text
Amp detail → reusable contract → workflow habit
```

Amp is the concrete case study. The reusable subject is how a coding-agent system sizes work, delegates it, reconstructs context, runs elsewhere, proves output, and controls recurring execution. The exact Amp assertions below were checked on 2026-08-12 against the current [Manual](https://ampcode.com/manual), [Orbs manual](https://ampcode.com/manual/orbs), [Models page](https://ampcode.com/models), [Plugin API](https://ampcode.com/manual/plugin-api), [Pricing page](https://ampcode.com/pricing), and [Chronicle](https://ampcode.com/chronicle).

[Agentic Coding in 2026](/posts/agentic-coding-2026) owns the product-agnostic map. Use [Your Repo Is the Memory](/posts/durable-context-coding-agents) and [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) for repo-local context, [Make the Agent Prove It](/posts/make-the-agent-prove-it) for the proof ladder, and [Parallel Agents Need an Admission Policy](/posts/parallel-agents-need-an-admission-policy) for deciding whether work should fan out at all.

## Set reasoning and compute independently

> Agent capability follows uncertainty; orb capacity follows runtime load.

```text
reasoning uncertainty → agent mode
setup, build, test, and service load → orb size
independent work bounded by integration capacity → worker count
```

That mapping is synthesis. The mode descriptions and Oracle role come from Amp's current [Manual](https://ampcode.com/manual#agent-modes) and [Models page](https://ampcode.com/models):

| Work shape | Amp surface |
| --- | --- |
| Exact, bounded, known-done task | `low` |
| Default implementation work | `medium` |
| Hard, cross-cutting change | `high` |
| Clear outcome, unknown path | `ultra` |
| Second opinion or adversarial review | Oracle |

Every task contract should still name done, scope, proof, and stop conditions. Give `low` the exact path and check, give `medium` enough repo context to handle unspecified details, tell `high` which subtle risks deserve care, let `ultra` discover the path to a clear outcome, and give Oracle a specific plan, bug, diff, or design to challenge.

Remote execution adds a separate capacity dial. Amp's 2026-08-07 [orb-sizing announcement](https://ampcode.com/news/size-the-orbs-of-production) added `a1.medium`, documented the current five-size set, and introduced per-thread selection, including `amp -ox "..." --orb-size <size>` and agent-created threads in smaller or larger orbs. The current [Orbs manual](https://ampcode.com/manual/orbs#pricing) documents a range from 1 CPU and 2 GB of memory to 16 CPUs and 32 GB, project-level defaults, by-the-minute billing, no charge while paused, and automatic pause after five inactive minutes.

Use the smallest project default that handles ordinary work reliably, then override genuinely lighter or heavier threads. A larger orb buys CPU and memory, not better reasoning; a higher mode buys agent capability, not more machine capacity. Smaller fan-out workers can reduce compute cost, but they do not make overlapping changes safe or create review capacity.

Amp currently routes different agent and Oracle models behind its mode tiers. Its [pricing page](https://ampcode.com/pricing) documents included agent and orb usage for subscriptions, no per-token Amp fee for linked third-party subscriptions, and API pricing for model tokens and orbs under unconstrained usage. **Synthesis:** do not pin task policy to model names. Put mode, orb size, worker count, recurrence, stop condition, and required evidence in one budget contract, then recheck volatile routing and rates when the work runs.

```text
If "done" and "how" are clear, turn the dial down.
If "done" is clear but "how" is uncertain, turn it up.
```

## Delegate with contracts, not vibes

> More agents only help when each delegate has a job, boundary, and proof target.

```text
worker owns a bounded task
critic owns uncertainty
researcher owns external prior art
review/checks own repeatable invariants
human owns irreversible judgment
```

That ownership map is synthesis. Amp's delegation surfaces have different documented boundaries:

- **Subagents own independent, bounded work.** Each starts with its own context and tools, cannot communicate with other subagents or receive mid-task guidance, and returns only a final summary to the main agent. Give it the relevant files, scope, proof target, and expected return shape; keep integration in the main thread ([Manual](https://ampcode.com/manual#subagents)).
- **Addressable threads own work that may need continued coordination.** Amp's dated [From Agent to Agent announcement](https://ampcode.com/news/from-agent-to-agent) documents agents creating threads locally, in orbs, or on other machines and exchanging messages and files. The current [Plugin API](https://ampcode.com/manual/plugin-api) also exposes thread handles for follow-up messages and responses. Name the project and environment, send only necessary context, set a budget and stop condition, and keep one integration owner.

**Synthesis:** use a subagent when a final return is enough; use an addressable
thread when the integration owner must inspect or redirect work before completion.

```text
Name the target project and execution environment.
Send only the files and context the worker needs.
Set a budget, stop condition, proof target, and return message.
Keep integration ownership in one place.
```

- **Oracle owns critique, not the edit.** Amp describes Oracle as a second opinion for complex reasoning and analysis and as less suited to routine code editing than the main agent. Use it to challenge a plan, migration, diagnosis, or diff before the implementation owner acts ([Manual](https://ampcode.com/manual#oracle)).
- **Librarian owns external code research.** It searches public GitHub and connected private GitHub repositories, but only their default branches. Use it to inspect dependency or framework internals, then verify conclusions against the local checkout ([Manual](https://ampcode.com/manual#librarian)).
- **Review and Checks own repeatable critique.** Amp supports review through `amp review` or the main agent; Checks store scoped criteria under `.agents/checks/` and run a separate review agent for each applicable check ([Manual](https://ampcode.com/manual#code-review)).

**Synthesis:** delegates produce work or findings. The integration owner still decides what enters the working tree, what evidence is sufficient, and which consequences require human judgment.

## Context is product state plus repo state

> Remote execution works only when the repository can reconstruct the task environment.

```text
thread reference + repo guidance + lifecycle setup
                         ↓
               reconstructable work
```

Amp threads can carry conversation state, but the durable operating context belongs beside the code:

- `AGENTS.md` supplies project structure, commands, conventions, and review guidance; Amp loads applicable files as it enters their directory scope ([Manual](https://ampcode.com/manual#AGENTS.md)).
- Project skills under `.agents/skills/` package task-specific instructions and resources. Their descriptions remain visible for discovery, while the full skill body loads when invoked ([Manual](https://ampcode.com/manual#agent-skills)).
- Thread references let a prompt point to another Amp thread and ask Amp to extract information relevant to the current task ([Manual](https://ampcode.com/manual#referencing-threads)).
- An orb starts from a fresh repository clone. Committed `.agents/setup` and `.agents/resume` hooks prepare new and resumed environments, while `.amp/services.yaml` declares supervised development services and their portal configuration ([Orbs manual](https://ampcode.com/manual/orbs#setup-files)).

**Synthesis:** product context can retrieve prior conversation and choose an execution environment; it cannot replace repo-local decisions, acceptance criteria, bootstrap instructions, verification results, cleanup steps, or the next action. This repository's `.agents/work/` convention is local durable state, not an Amp product feature. [Your Repo Is the Memory](/posts/durable-context-coding-agents) covers the memory model; [Right-Sized Threads, Durable State](/posts/right-sized-threads-durable-state) covers the work-item procedure.

## Make the factory prove its work

> Longer-running workers need faster reality checks.

```text
running system → observable behavior → diff and checks → human judgment
```

Amp exposes several points where remote work can meet reality:

- Portals expose an orb's HTTP service through an authenticated URL. Amp's dated [Portals announcement](https://ampcode.com/news/portals) documents live reload and page feedback; the current [Orbs manual](https://ampcode.com/manual/orbs#portals) documents thread-scoped access, orb wake-up behavior, and supervised service declarations in `.amp/services.yaml`.
- The [Orbs manual](https://ampcode.com/manual/orbs#features) lets reviewers browse files and changes, open a terminal in the agent's working copy, and sync changes locally while work continues remotely.
- Amp's dated [Diffs announcement](https://ampcode.com/news/diffs) adds a web review surface, while `amp review` and repository Checks apply human or encoded criteria to the change ([Manual](https://ampcode.com/manual#code-review)).

Amp's August 11, 2026 [“Orbs and Jellyware”](https://ampcode.com/podcast/season-02/episode-02) episode adds a concrete practitioner pattern. Quinn Slack and Thorsten Ball describe spending remote runtime on old and current CLI versions, platforms, web and SDK paths, runners, account permutations, end-to-end reruns, demo videos, and frame-level UI inspection [10:30]-[18:54], [23:42]-[26:38]. That is a vendor team report, not evidence that the same matrix transfers to every product. The reusable move is to spend cheap unattended runtime on more discriminating evidence, then return an artifact a reviewer can inspect quickly.

Their production example keeps a stricter boundary: start an attachment-authentication migration with warning-only logs, inspect failure categories through read-only access, tighten enforcement incrementally, enable multiplayer intervention, and preserve rollback [18:54]-[22:40]. **Synthesis:** production feedback can strengthen proof only when authority, reversibility, observation, and escalation are explicit. It is not permission to let an unattended worker improvise consequential writes.

These surfaces transport evidence; they do not prove correctness by themselves. **Synthesis:** a portal can show the wrong behavior clearly, a clean diff can preserve a bug, and a passing check proves only the invariant it exercises. Define the proof target before execution, then use the portal, logs, screenshots, tests, diff, and review findings to make that target inspectable.

[Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the full evidence ladder. The Amp-specific contract is narrower: remote workers need a running-system feedback path, inspectable state, repeatable checks, and a human-comprehension gate.

## Orchestration is a service boundary

> Once agents wake on schedules or events, operational safety matters as much as prompt quality.

```text
schedule or event
       ↓
authenticate and validate
       ↓
bounded thread or orb
       ↓
idempotent effect → proof → cleanup
```

Amp schedules can wake an agent with a saved prompt and continue the thread with its context and history ([Manual](https://ampcode.com/manual#schedules)). Orb webhooks accept external HTTP events, store them before waking a paused orb, and deliver them to the owning plugin and thread ([Orbs manual](https://ampcode.com/manual/orbs#webhooks)). That turns recurrence and event handling into operational interfaces rather than delayed prompts.

The webhook boundary is explicitly hostile. Amp documents the generated URL as a credential, leaves provider signature or authorization verification to the plugin, and requires request bodies and preserved headers to be treated as untrusted input. Delivery is at least once, so handlers must use the stable event ID to make effects idempotent ([Orbs manual](https://ampcode.com/manual/orbs#webhooks); [Plugin API](https://ampcode.com/manual/plugin-api)).

Identity is separate from authorization. An orb can mint a short-lived OIDC token identifying its workspace, project, user, and thread for a named audience ([Orbs manual](https://ampcode.com/manual/orbs#oidc-workload-identity)). **Synthesis:** the receiving service must still verify that token and constrain which claims may perform which action.

Temporary collaboration has the same boundary. While Multiplayer is active, workspace members can send messages and access the orb's files, changes, portals, secrets, and terminal; Amp assigns thread and orb costs to the thread owner and ends Multiplayer automatically when its duration expires ([Manual](https://ampcode.com/manual#multiplayer)). That makes identity, permission scope, expiry, and cost ownership part of the execution contract.

The following checklist is author synthesis from those interfaces:

```text
Authenticate the trigger and separate trusted metadata from untrusted content.
Grant the narrowest identity and execution permissions that work.
Make retries and duplicate delivery safe.
Name the owner, budget, output, escalation path, and proof target.
Expire shared access; stop recurring work and revoke webhooks when the job ends.
```

Amp documents controls to pause or delete a webhook and revoke its queued work ([Orbs manual](https://ampcode.com/manual/orbs#webhooks)). Schedules and other recurrence need the same explicit lifecycle even when the product can preserve thread context automatically.

**Synthesis:** treat scheduled and event-driven agents as services. Define authentication, validation, authorization, idempotency, ownership, budget, evidence, expiry, and cleanup before allowing the workflow to wake itself.

## The contracts that survive

> Product details churn; task contracts are the durable lesson.

```text
uncertainty → delegation contract → proof loop → human judgment
```

Tool details change; the work contracts do not. When Amp changes again, keep these:

1. Size model capability to uncertainty and machine capacity to runtime demands.
2. Give every delegate or trigger a scope, owner, budget, return path, and proof target.
3. Separate trusted metadata from untrusted content, and make retries idempotent.
4. Grant the narrowest identity and access; make temporary access expire.
5. Keep product context separate from repo-local state, environment setup, and cleanup instructions.
6. Require proof before acceptance and human judgment where consequences demand it.
7. Bound parallelism and recurrence so the factory cannot create spend or review debt without a stop condition.

## Sources used

- Canonical Amp product authority verified 2026-08-12: [Manual](https://ampcode.com/manual), [Orbs manual](https://ampcode.com/manual/orbs), [Models](https://ampcode.com/models), [Plugin API](https://ampcode.com/manual/plugin-api), [Pricing](https://ampcode.com/pricing), and [Chronicle](https://ampcode.com/chronicle). Dated sources, including [“Size the Orbs of Production!”](https://ampcode.com/news/size-the-orbs-of-production) and [“Orbs and Jellyware”](https://ampcode.com/podcast/season-02/episode-02), are linked inline at the claims they support.
