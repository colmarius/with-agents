---
title: 'Make the Agent Prove It'
description: 'A practical acceptance framework for agent-written code: the harder a failure is to undo, the stronger the evidence required.'
pubDate: 2026-06-28
updatedDate: 2026-08-23
tags: ['AI Agents', 'Workflow', 'Testing', 'Review']
draft: false
unlisted: false
order: 3
---

## Ask for evidence, not confidence

> Accept agent-written code by evidence, not confidence.

Ask **“what evidence would make this change safe to accept?”**, not “do I trust the model?” Charity Majors describes trust as an account: when nobody reads generated code, teams lose one source of confidence and must rebuild it through tests, evals, conformance checks, and bounded deterministic paths ([00:26:55–00:30:00](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=1615s)).

Before implementation, state the expected behavior and one believable failure. Decide what evidence could expose that failure. The agent can make the change and collect results. A human still decides whether those results cover the remaining risk.

The low-, medium-, and high-risk framework below is author synthesis. The sources support the verification practices, but do not define these risk levels.

## Set the bar

> Hard-to-undo or hidden failures need stronger evidence.

| Risk and typical work | Minimum evidence |
| --- | --- |
| Low: docs or copy | Diff, render, and links |
| Medium: bug, API, UI, parser | Captured failure, focused and project checks, changed path |
| High: permission, migration, external write | Bounds, fixtures, relevant checks, dry run or rollback, approval |

Rate risk with three questions:

1. **Consequence:** What happens if this is wrong?
2. **Reversibility:** How hard is the change to undo?
3. **Detectability:** How likely is the failure to go unnoticed?

Diff size is a poor substitute. A one-line permission change can be high risk; a long documentation edit can be low risk. The levels guide judgment rather than calculate it.

For high-risk work:

- **Constrain execution** before it begins.
- **Use representative fixtures**, not production data.
- **Require approval** before an irreversible or external action.

Willison recommends sandboxing to limit damage and realistic fake data instead of sensitive user data ([00:15:36–00:18:35](https://www.youtube.com/watch?v=owmJyKVu5f8&t=936s)).

## Define and run the checks

> A useful check can catch a believable wrong implementation.

Before editing:

1. **State** the expected behavior and one plausible failure.
2. **Capture** the current failure when possible.
3. **Make** the smallest change.
4. **Run** the focused check and the project's broader checks.

This four-step checklist is author synthesis. It incorporates Willison's narrower default: tell the agent how to run the tests and ask for red-green test-driven development ([00:04:41–00:06:44](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s)).

The reviewer owns the expectation. A test that merely agrees with the implementation is weak evidence. If the reviewer supplied an expected value, the agent should not remove or change it just to make the suite pass. Kent Beck gives a concrete example: after failed repair attempts, an agent proposed changing the expected-value assertion instead ([00:50:38–00:51:42](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=3038s)). If an expectation may be wrong, stop and explain why it should change.

Automated checks are not the final state when behavior runs through a route, UI, or migration. Exercise the changed path:

- **API:** Start the application and call the changed endpoint. Willison uses `curl` and notes that this can reveal failures the suite missed ([00:06:44–00:07:33](https://www.youtube.com/watch?v=owmJyKVu5f8&t=404s)).
- **UI:** Perform the changed interaction and inspect the resulting state.
- **Migration:** Use representative fixtures and exercise the dry run or rollback when available.

Return the actual response, log, screenshot, or other artifact—not only “all tests pass.” When a published specification or trusted reference output already exists, compare against it. Willison uses WebAssembly's specification tests and cross-framework multipart behavior as examples ([00:07:33–00:09:36](https://www.youtube.com/watch?v=owmJyKVu5f8&t=453s)). An external target strengthens the evidence; it does not make the acceptance decision.

## Make the decision

> The agent reports what happened and what remains uncertain; a human accepts the risk.

| Record | Include |
| --- | --- |
| Change | Expected behavior and plausible failure |
| Risk | Level, reason, and execution boundary |
| Evidence | Checks, results, and artifacts |
| Decision | Gaps, accepted or rejected, by whom, and why |

The packet should let a reviewer see which failure each check could catch and which risk remains uncovered. A passing suite is an input to that decision, not the decision itself. The final gate stays simple: **the agent can produce evidence, but it cannot accept its own risk.**

## Sources used

- [Charity Majors, “Stop being skeptical about AI for development,” 00:26:55–00:30:00](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=1615s), on rebuilding trust outside unread generated code.
- [Simon Willison, “Engineering practices that make coding agents work,” 00:04:41–00:18:35](https://www.youtube.com/watch?v=owmJyKVu5f8&t=281s).
- [Kent Beck, “TDD, AI agents and coding,” 00:50:38–00:51:42](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=3038s), on protecting expected behavior from agent changes to tests.
