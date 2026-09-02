---
title: "Software Fundamentals in the Age of AI"
resourceId: 74
date: "2026-08-19"
collection: "matt-pocock-agent-skills"
order: 1
videoId: "zcLPGC-tvgk"
---

[Uncle Bob Martin](https://www.cleancoder.com/), author of *Clean Code* and *Clean Architecture*, describes a coding-agent workflow built around deterministic checks. He argues that clean boundaries and software fundamentals still matter for agents.

This is a practitioner conversation, not a controlled evaluation. Uncle Bob's reported productivity factors, quality claims, complexity thresholds, and conclusions about TDD and spec-driven development come from his own recent experiments. The recording provides no task set, code artifacts, baseline protocol, or independent measurements with which to generalize them.

### Deterministic Checks Over Prompted Guidelines

- **Messy code eventually makes agents thrash**: Uncle Bob says his early agent work accumulated changes until the model started breaking one thing while fixing another. He says it sometimes could not continue. His response was to revisit CRAP analysis—which combines test coverage and cyclomatic complexity—and mutation testing. These provided repeatable feedback rather than faster output alone [00:04:09]-[00:12:04].
- **Keep prompts short and enforce important properties with tools**: Uncle Bob found that long clean-code and TDD instructions softened as sessions grew. He connects that behavior to “lost in the middle” and recommends minimizing initial instructions while moving enforceable expectations into deterministic checks [00:12:04]-[00:15:38].
- **Quality gates have a throughput cost**: Tool-driven loops make agents add tests, reduce complexity, and keep iterating until checks pass. Uncle Bob reports that agents remain roughly two to four times faster than a person in his work. But he has not found the point at which additional checks cost more than they return [00:15:38]-[00:17:33].

### A Specialized Agent Gauntlet

- **Separate roles to narrow context and reset trajectory**: Uncle Bob names parallelism and smaller context windows as benefits of specialized agents. A short-lived agent can focus on one outcome, then hand off to a fresh context instead of carrying implementation, cleanup, and review history together [00:17:33]-[00:20:29], [00:22:27]-[00:24:34].
- **Turn a human story into several kinds of evidence**: His experimental pipeline uses a specifier to produce Gherkin acceptance criteria and a human-oriented QA procedure. A coder implements the story and tests, while a cleaner reduces CRAP scores and reviews code. A hardener runs mutation testing, and a QA agent automates the system-level procedure [00:20:29]-[00:22:27].
- **Treat the claimed speedup as a first-person report**: Uncle Bob says one agent takes about five minutes to produce questionable results. He says this pipeline takes about an hour, versus roughly half a day for a person. That claimed four- or five-fold advantage is not supported by shared tasks, outputs, or measurements in the recording [00:22:27]-[00:23:31].

### Architecture and Process Still Need Judgment

- **Keep architecture legible and mechanically constrained**: Uncle Bob still examines module relationships and redesigns boundaries when needed. He also uses an architecture viewer and a dependency rule file. He says agents and people both benefit from focused modules and disciplined interfaces. He says deep modules can let an agent reason from a small interface without loading every implementation detail [00:25:39]-[00:30:29].
- **Preserve values without copying every human discipline**: Uncle Bob is experimenting with higher tolerated complexity for agents than for people. He remains a TDD advocate for humans but does not force agents into line-by-line red-green steps. His distinction is to retain goals such as coverage and low complexity while reconsidering the behavior used to reach them [00:31:32]-[00:35:01].
- **Prefer short feedback cycles to exhaustive upfront plans**: His detailed agent plans and spec-driven development broke down when implementation exposed assumptions the plans missed. He now favors an agile loop: implement a small story, inspect the result and architecture, reorganize, and continue. This is his current working hypothesis, not a comparative finding [00:36:04]-[00:43:45].
- **Fundamentals organize complexity for agents as well as people**: Uncle Bob argues that new developers still need direct programming experience and supervised tactical work. He says they need that experience before they can recognize agent failure and make strategic decisions. He treats agents as another abstraction layer, not a reason to discard modularity, testing, or accumulated software-design knowledge [00:45:29]-[00:55:12].

[Watch the full conversation on YouTube](https://www.youtube.com/watch?v=zcLPGC-tvgk).
