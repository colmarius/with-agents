---
title: 'Make the Agent Prove It'
description: 'A risk-scaled acceptance contract for agent-produced code: execution boundaries, discriminating checks, real-system evidence, external oracles, and human judgment.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflow', 'Testing', 'Review']
draft: false
unlisted: false
order: 3
---

## Make the agent prove it

> Trust starts with a proof question, not a model feeling.

```text
risk → boundary → proof contract
                    ↓
discriminating check → real system → external oracle when available
                    ↓
            evidence packet → human decision
```

The useful question is not "do I trust the model?" It is **"what proof would make this change safe to accept?"**

Coding agents make code cheap to generate. They do not make broken behavior, leaked data, bad migrations, or unreadable diffs cheap to own. The agent should propose and produce evidence; the reviewer still owns the decision.

This is the risk-scaled acceptance contract for one agent-produced change. It assumes the system exposes checks the agent can run and interpret; [Agent-Ready Interfaces](/posts/agent-ready-interfaces) owns that design problem.

## Choose proof from risk

> Risk chooses the proof stack before the prompt does.

| Change type | Minimum proof before merge |
| --- | --- |
| Copy, docs, or content | Rendered output, source anchors, spelling/link checks, and a scannable diff. |
| Bug fix or helper function | A failing executable check or captured failing behavior, then the focused test plus normal project checks. |
| API or server behavior | Tests plus the running service exercised with `curl`, logs, or a smoke script. |
| UI behavior | An interaction test, browser trace, or recorded path; add screenshots when visual output matters. |
| Protocol, parser, import/export, standard | A published conformance suite, approved golden fixtures, or differential tests against named implementations. |
| Migration or data write | Representative non-production fixtures, dry-run and rollback evidence, relevant checks, and human approval. |
| Permissions, security, dependencies, billing, external effects | Capability review, narrow authority, relevant checks, and explicit human approval. |

Scale proof by consequence, reversibility, exposure, and observability—not by diff size. The table is author synthesis from Simon Willison's test, manual-check, conformance, sandboxing, and mock-data workflow ([00:04:41–00:18:35](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s)).

## Bound risky execution before it starts

> A boundary contract comes before code proof for consequential work.

```text
What could the agent read?
What could the agent change?
What could the agent send out?
What data will it use to test the change?
```

If private data, untrusted instructions, and outbound communication can coexist, remove a capability instead of trusting the model to separate data from instructions. Willison calls that combination the "lethal trifecta" and recommends cutting off at least one leg and sandboxing coding agents to reduce available damage ([00:14:33–00:16:30](https://www.youtube.com/watch?v=owmJyKVu5f8&t=873s)). A sandbox constrains capabilities; it does not make production data safe or external side effects reversible.

Do not copy production data into an agent workspace to make a test realistic. Use generated users, synthetic records, and reproducible edge-case fixtures instead ([00:17:33–00:18:35](https://www.youtube.com/watch?v=owmJyKVu5f8&t=1053s)). Tasks involving secrets, private data, permissions, billing, migrations, or external effects need an explicit human decision before execution.

## Make the first proof executable

> Make the first proof executable before the agent changes code.

```text
Before implementing, identify the failing check or capture the failing behavior.
Run it and show the failure.
Implement the smallest fix.
Run the targeted test, then the normal project check command.
```

Willison's default instruction is short: tell the agent how to run the tests, then use red-green test-driven development ([00:04:41–00:06:44](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s)). The value is not ceremony. It forces the agent to state what would prove the task, observe failure, then make the smallest change that passes. If the code will live, require a reusable check.

The reviewer still owns the acceptance condition. In experiments Hillel Wayne described in March 2026, models helped encode precisely stated properties but did not reliably invent meaningful ones ([01:06:16–01:12:37](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=3976s)). A green agent-written test is weak evidence if the agent chose a trivial assertion.

Executable does not automatically mean discriminating. A check is discriminating only if a plausible wrong behavior or competing explanation could produce a different result. In an April 2026 personal account, Salvatore Sanfilippo reported that a model preserved the supplied benchmark and regression suite while optimizing a small Tcl interpreter, but a later model review found semantics-changing bugs outside those tests ([00:07:47–00:14:11](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=467s)). The suite was repeatable; it did not cover the disputed behavior.

**Author synthesis:** Generated explanations can steer investigation, but they do not establish acceptance. In a June 2026 project account, Sanfilippo reported that a model defended a plausible diagnosis until he contrasted how the working and optimized paths reached the repeated-token state; the model then reconsidered ([00:05:44–00:09:03](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s)). The English source-list titles are translations, and the descriptions above are editorial paraphrases of Italian captions; none are quotations.

Before accepting an explanation or green check, use the following audit; the template and provenance rule are author synthesis:

```text
claim:
predicted behavioral difference:
counter-evidence that would change the decision:
discriminating test or intervention:
observed result:
evidence produced by the same model:
decision:
```

If the same model wrote the code, explanation, and test, name that correlation in the review packet. Add a representative run, an independent check, or an external oracle when the risk warrants it.

If the agent cannot explain what test would fail, that is information: you may be asking for an unclear behavior change, not a coding task.

## Exercise the real system

> Passing tests are not enough when the route, API, or UI has to work.

```text
Command: npm run dev
Command: curl -i http://localhost:4321/api/example
Expected: 200 plus the new field
Actual: pasted response or saved log path
```

Passing tests do not prove the server boots, the route is wired, or the user-visible behavior works. Willison asks agents to start the application and exercise a new API with `curl`, because real-system checks find bugs the suite did not cover ([00:06:44–00:07:33](https://www.youtube.com/watch?v=owmJyKVu5f8&t=404s)). When the task touched a running system, ask for the actual response, trace, or screenshot—not only "all tests pass."

## Use an external oracle for standards and compatibility

> When correctness has an external target, use it instead of taste.

```text
Build or import the fixture suite.
Show that it fails against the current implementation.
Implement until the suite passes.
Document any unsupported cases.
```

Some work has a better oracle than your prompt. A **conformance suite** checks a published specification, a **golden fixture** checks approved expected output, and a **differential suite** compares behavior with named implementations. Willison uses WebAssembly's specification suite as the conformance example and multipart uploads tested against several frameworks as differential compatibility evidence ([00:07:33–00:09:36](https://www.youtube.com/watch?v=owmJyKVu5f8&t=453s)). These targets strengthen review; they do not replace it.

## Return a review packet a human can own

> Evidence should survive the private agent transcript and expose what remains uncertain.

```text
behavior changed:
commands and results:
real-system or external-oracle evidence:
evidence provenance or correlation:
known gaps:
design or risk decision:
```

Put that packet in a pull-request comment, work item, test log, or artifact path. Include exact commands and exit codes, relevant logs or responses, screenshots for visual output, traces for interaction behavior, fixture names, and any intentionally skipped check. Repeatable executable checks make failure visible even when prose instructions are ignored; Mario Zechner demonstrates that role with linting, type checking, smoke tests, hooks, and terminal capture ([00:37:11–00:42:55](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=2231s)).

The reviewer must still understand the result. Maintained code needs design review even when its checks pass. Ask:

1. What behavior changed?
2. What proof covers that behavior?
3. Could that proof distinguish the intended behavior from a plausible wrong result?
4. What risk is not covered by the proof?
5. Why is the resulting design small enough to maintain?

If nobody can answer those, the agent is not done.

## Give the agent a proof contract

> Give the agent its proof contract before it optimizes for done.

```text
Before editing:
1. List the likely failure modes.
2. Propose a low, medium, or high risk level.
3. Propose the minimum focused checks, real-system evidence, and external
   oracle needed.
4. Stop for confirmation if the task touches data, permissions, dependencies,
   migrations, security, billing, secrets, or external side effects.
5. State what result would count against the proposed explanation or behavior.

When the behavior can be expressed as an executable check:
- show the failing check or current failing behavior;
- confirm the check could fail for a plausible wrong result;
- make the smallest change;
- run the focused check, then the normal project checks.

Do not use production data. Use representative fixtures or synthetic edge cases.

Return:
- behavior changed;
- commands and results;
- attached artifacts;
- known gaps or skipped checks;
- files changed;
- decisions still requiring a human.
```

The agent proposes and produces the evidence; the reviewer decides whether it covers the actual risk.

## Sources used

- [Simon Willison: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41]-[00:18:35].
- [Pi Building Pi, OpenClaw's Minimalist Coding Agent](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:37:11]-[00:42:55].
- [Formal methods with Hillel Wayne](https://www.youtube.com/watch?v=KSkcgIYQy0U), especially [01:06:16]-[01:12:37].
- [Salvatore Sanfilippo, “Testing recent alternative models”](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=467s), especially [00:07:47]-[00:14:11].
- [Salvatore Sanfilippo, “Further observations on Claude Fable”](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s), especially [00:05:44]-[00:09:03].
