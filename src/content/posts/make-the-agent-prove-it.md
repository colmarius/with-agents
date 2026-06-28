---
title: 'Make the Agent Prove It'
description: 'A risk-scaled proof stack for reviewing agent-produced code: tests, real-system checks, conformance suites, screenshots, sandboxing, mock data, and human judgment.'
pubDate: 2026-06-28
tags: ['AI Agents', 'Workflow', 'Testing', 'Review']
draft: false
unlisted: false
order: 3
---

## Make the agent prove it

The most useful question in agentic coding is not "do I trust the model?" It is "what proof would make this change safe to accept?"

Coding agents make code cheap to generate. They do not make broken behavior, leaked data, bad migrations, or unreadable diffs cheap to own. The reviewer still signs the merge, so the agent should bring evidence.

This article uses Simon Willison's Pragmatic Summit workflow as its primary source and adds an author-synthesis framework: a risk-scaled proof stack for one agent-produced change. The [durable-context Evidence section](/posts/durable-context-coding-agents#evidence-make-the-agent-prove-the-work) explains why evidence belongs in the repo-local operating loop; this is the tactical ladder to apply before you merge.

```text
╭────────────────────────────────────────────╮
│ 6. Human can explain and own the change    │
├────────────────────────────────────────────┤
│ 5. Safety boundary: sandbox and mock data  │
├────────────────────────────────────────────┤
│ 4. Review evidence: logs, screenshots, API │
├────────────────────────────────────────────┤
│ 3. External target: conformance or fixtures│
├────────────────────────────────────────────┤
│ 2. Real system check: server, curl, browser│
├────────────────────────────────────────────┤
│ 1. Red-green tests and deterministic checks│
╰────────────────────────────────────────────╯
```

You rarely need every layer. You do need to choose layers deliberately.

## Start with the risk, not the prompt

Before the agent edits files, decide what kind of proof the task deserves.

| Change type | Minimum proof before merge |
| --- | --- |
| Copy, docs, or content | Rendered output, source anchors, spelling/link checks, and a scannable diff. |
| Pure bug fix or helper function | A failing test first, then passing unit tests plus typecheck/lint/build where relevant. |
| API or server behavior | Tests plus the running service exercised with `curl`, logs, or a smoke script. |
| UI behavior | Tests where useful, plus a screenshot, browser trace, or recorded manual path. |
| Protocol, parser, import/export, standard | A conformance suite, golden fixtures, or tests derived from known-good implementations. |
| Data, permissions, dependencies, migrations, security | Sandbox or mock data, deterministic checks, and an explicit human judgment call. |

That table is synthesis, not a quote. The source-backed pieces come from Willison's test/manual/conformance/sandboxing workflow [00:04:41]-[00:18:35], Mario Zechner's habit of reviewing agent diffs for unnecessary complexity and reinforcing rules with checks [00:29:43]-[00:42:55], and Ronacher and Poncela Cubeiro's argument that high-risk decisions should wake the human brain back up [00:14:01]-[00:17:55].

## Layer 1: make the first proof executable

Willison's default agent instruction is short: tell the agent how to run the tests, then use red-green test-driven development [00:04:41]-[00:05:43]. The value is not ceremony. It forces the agent to state what would prove the task, watch that proof fail, then implement the smallest change that makes it pass [00:05:43]-[00:06:44]. He also argues the old "tests are too much extra work" excuse is weaker when an agent absorbs the typing cost [00:06:44]. Tests are not free to own, but they are much cheaper to ask for. If the code will live, require a reusable check.

```text
Before implementing, add or identify the failing test that proves this bug.
Run it and show the failure.
Implement the smallest fix.
Run the targeted test, then the normal project check command.
```

If the agent cannot explain what test would fail, that is information: you may be asking for an unclear behavior change, not a coding task.

## Layer 2: run the thing, not just the tests

Passing tests do not prove the server boots, the route is wired, or the user-visible behavior works. Willison asks agents to start the application and exercise the new API with `curl`, because real-system checks find bugs the suite did not cover [00:06:44]-[00:07:33]. In review, do not accept "all tests pass" as the final sentence when the task touched a running system. Ask for the transcript:

```text
Command: npm run dev
Command: curl -i http://localhost:4321/api/example
Expected: 200 plus the new field
Actual: pasted response or saved log path
```

Willison described a small tool that builds a Markdown record of manual checks: command, output, next check, result [00:07:33]. The tool is incidental; the habit is the part to copy. Evidence should be reviewable without rerunning the entire agent conversation.

## Layer 3: use conformance when vibes are too weak

Some work has a better oracle than your prompt. If you are implementing a protocol, parser, file format, auth flow, upload path, or compatibility layer, ask for conformance instead of taste. Willison gives two patterns: WebAssembly has a language-agnostic specification with expected inputs and outputs, and multipart upload behavior can be triangulated by building tests that pass against several existing frameworks, then using those tests to implement the new system [00:07:33]-[00:09:36]. That sharpens the prompt:

```text
Build or import the fixture suite.
Show that it fails against the current implementation.
Implement until the suite passes.
Document any unsupported cases.
```

Conformance does not eliminate review. It gives review a hard target.

## Layer 4: attach evidence the reviewer can inspect

The higher the blast radius, the less useful a private agent transcript becomes. Put the evidence where the reviewer can see it: PR comment, work item, test log, screenshot, or artifact path. Useful evidence is boring and concrete:

- exact commands and exit codes
- before/after screenshots or a browser trace for UI work
- `curl` responses or API logs for service work
- fixture names and conformance results for compatibility work
- a short "known gaps" note when a check was intentionally skipped

Zechner's Pi workflow reinforces why evidence should be deterministic. He keeps `AGENTS.md` guidance but notes that models may ignore style rules under pressure; linting, type checking, smoke tests, and pre-commit hooks reliably reject bad output [00:37:11]-[00:42:55]. For terminal UI work he even has the agent use a `tmux` session and capture the terminal equivalent of a screenshot [00:42:44]. Instructions help the agent try; checks make failure visible.

## Layer 5: prove the blast radius is small

Security and data work need proof before code proof. Willison's "lethal trifecta" frames the risk: private data access, exposure to malicious instructions, and an exfiltration path. His mitigation is to cut off at least one leg rather than hoping the model separates instructions from data [00:14:33]-[00:15:36], and to sandbox coding agents so a bad instruction or command has limited damage [00:15:36]-[00:16:30].

```text
What could the agent read?
What could the agent change?
What could the agent send out?
What data did it use to test the change?
```

Do not copy production data into an agent workspace to make a test realistic. Willison recommends investing in mock data and edge-case fixtures instead: generated users, synthetic records, and reproducible worst-case scenarios [00:17:33]-[00:18:35]. This is not advice to make permissive execution feel safe; it is the opposite. If the task involves secrets, private data, untrusted instructions, external network access, permissions, billing, or migrations, the proof stack must include a boundary check and a human decision.

## Layer 6: the reviewer must still understand the change

The top layer is not another command. It is comprehension. Willison distinguishes throwaway tools from maintained systems: messy code may be acceptable for a one-off utility, but code that will live needs review and refactoring [00:09:36]-[00:10:39]. Zechner shows the same habit at the diff level: even when the agent finds the bug, he checks whether it introduced unnecessary helpers, duplication, or abstractions before wrapping up [00:29:43]-[00:31:43]. Ronacher and Poncela Cubeiro put it in process terms: let agents handle mechanical fixes, but call out dependencies, migrations, permissions, reliability, and architecture for human judgment [00:14:01]-[00:17:55]. The reviewer should be able to answer four questions:

1. What behavior changed?
2. What proof covers that behavior?
3. What risk is not covered by the proof?
4. Why is the resulting design small enough to maintain?

If nobody can answer those, the agent is not done.

## A prompt you can reuse

Use this before a non-trivial implementation task:

```text
Before editing, classify this task as low, medium, or high risk.
Propose the proof stack you will produce before asking me to review.

For implementation work, use red-green TDD when practical:
1. Show the failing test or current failing behavior.
2. Make the smallest change that passes.
3. Run the targeted check and the project-level check.

If the change affects a running API or UI, exercise the real system and attach
reviewable evidence: curl output, logs, screenshot, trace, or artifact path.

If the change touches data, permissions, dependencies, migrations, security, or
external network access, stop and ask for a human decision before proceeding.

Do not use production data. Create mock data or fixtures for edge cases.
End with commands run, results, known gaps, and the files changed.
```

The wording matters less than the contract: the agent should know what proof it owes before it starts optimizing for completion.

## Done means evidence plus judgment

Tests catch regressions. Real-system checks catch wiring problems. Conformance suites catch vague standards work. Screenshots, logs, and API output make review concrete. Sandboxes and mock data keep the blast radius small. Comprehension keeps the codebase from becoming a pile of passing checks nobody understands.

Make the agent prove it. Then make a human decide whether the proof is enough.

## Sources used

- [Simon Willison: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8), especially [00:04:41]-[00:18:35].
- [Pi Building Pi, OpenClaw's Minimalist Coding Agent](https://www.youtube.com/watch?v=DPgJjRdQWrg), especially [00:29:43]-[00:42:55].
- [The Friction is Your Judgment](https://www.youtube.com/watch?v=_Zcw_sVF6hU), especially [00:14:01]-[00:17:55].
- Internal non-overlap check: [Evidence: make the agent prove the work](/posts/durable-context-coding-agents#evidence-make-the-agent-prove-the-work).
