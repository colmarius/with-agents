---
title: 'Simon Willison: Engineering Practices That Make Coding Agents Work'
description: 'A transcript-backed summary of Simon Willison’s Pragmatic Summit advice on TDD, manual verification, sandboxing, and staying ambitious with coding agents.'
pubDate: 2026-06-27
tags: ['AI Agents', 'Workflow', 'Testing', 'Security']
draft: true
order: 8
---

Simon Willison's Pragmatic Summit conversation is useful because it avoids vague "AI will change everything" claims and instead names the engineering practices that make coding agents reliable today.

The short version: let agents write code, but make them prove it works. Use tests, manual verification, sandboxes, and realistic fake data. Keep human judgment pointed at architecture, quality, and security boundaries.

Full video: [Simon Willison: Engineering practices that make coding agents work](https://www.youtube.com/watch?v=owmJyKVu5f8)

## The core workflow: tests first, proof second

Willison describes the adoption curve many developers are moving through: first ChatGPT answers questions, then coding agents write small patches, then the agent writes more code than the human does [00:02:35]. The uncomfortable next step is not just "I don't write code" but "I don't read every line of code" [00:03:38].

His answer is not blind trust. It is proof.

Every agent session starts with two things:

1. Tell the agent how to run the tests.
2. Tell it to use red-green TDD [00:05:43].

That one short instruction changes the shape of the output. The agent first writes a failing test, then implements the smallest thing that passes it. Willison argues tests are now "effectively free" because the agent can do the tedious part, so skipping tests with coding agents is a bad trade [00:06:44].

## Passing tests are necessary, not sufficient

The second practice is manual verification. A unit test can pass while the server still fails to boot or the API behaves badly in the real world.

Willison asks agents to start the application and exercise the new behavior with tools like `curl` [00:06:44]. He also describes Showboat, a small tool that has the agent produce a Markdown record of the manual tests it performed: command, output, next check, and result [00:07:33].

That turns the review problem from "read all the code" into "inspect the evidence."

## Conformance beats vibes for protocol-like work

One especially useful pattern is conformance-driven development. For domains such as WebAssembly or multipart file uploads, Willison points agents at a language-agnostic specification or asks them to derive a test suite from several existing implementations [00:07:33]-[00:08:33].

Then the task becomes concrete:

```text
Write code until this conformance suite passes.
```

That does not remove review, but it gives the agent a hard external target instead of asking it to satisfy a vague implementation request.

## Code quality still matters when the code has to live

Willison makes a useful distinction between throwaway tools and maintained systems. For a one-off HTML/JavaScript utility, 800 lines of messy code may be fine if it works [00:09:36]. For code that will live in a real project, quality still matters.

The important point is that poor quality is a choice. If an agent produces a rough implementation, you can ask it to refactor, apply a clearer design, or simplify the result [00:10:39]. Because the agent pays the typing cost, humans can afford cleanup passes they might have skipped when writing everything by hand.

## Scaffolds and examples are agent instructions

Agents copy the patterns around them. Willison uses Cookiecutter templates for Datasette plugins so new projects start with tests, README structure, CI, and expected layout already in place [00:11:41].

That mirrors human teams: the first Redis integration in a company matters because everyone copies it [00:11:41]. With agents, the same effect is amplified. Good scaffolds are not ceremony; they are executable taste.

## Security needs sandboxing, not optimism

Willison revisits prompt injection and his "lethal trifecta": an LLM system becomes dangerous when it has private data access, exposure to malicious instructions, and a way to exfiltrate data [00:14:33]-[00:15:36]. The reliable mitigation is to cut off one leg of that triangle.

For coding agents, his strongest recommendation is sandboxing [00:15:36]. Run agents in constrained containers or hosted VMs when possible. If using permissive modes like `--dangerously-skip-permissions`, make sure the blast radius is small and avoid feeding the agent untrusted instructions [00:16:30]-[00:17:33].

For user data, do not copy production into the agent's workspace. Build good mock data and edge-case fixtures instead: fake users, synthetic records, and reproducible cases like "a user with a thousand ticket types" [00:18:35].

## The practical frontier is today's models

Willison avoids predicting more than a week out. His better advice is to keep testing the current boundary: when a model fails at something, remember it and try again after the next major model improvement [00:21:18].

That is how small capabilities become practical. Spell-checking went from unreliable to useful for his blog workflow; coding models moved from janky output to one-shot reliability for familiar tasks [00:20:31]-[00:22:09].

## Agent work is not lazy; it is tiring

Running multiple agents at once can look like effortless leverage, but Willison describes it as mentally exhausting. Keeping three or four projects moving means constantly reviewing results, redirecting tasks, and deciding what matters next [00:22:59].

The upside is ambition. You can try unfamiliar languages, build tiny custom tools, and run experiments that would not previously have justified the setup cost [00:23:59]-[00:25:02].

## Takeaways to copy

- Start every agent task with the exact test command.
- Add "use red-green TDD" for implementation work.
- Require manual verification with real commands, not just unit tests.
- Keep scaffolds, examples, and CI clean because agents copy local patterns.
- Use conformance suites when implementing protocols or standards.
- Treat production data as off-limits; create realistic fake data instead.
- Run risky agent work in a sandbox or hosted container.
- Review and refactor code that will be maintained.

The lesson is not that agents remove engineering discipline. The lesson is that they reward it.
