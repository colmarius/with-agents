---
title: "Software Fundamentals in the Age of AI"
resourceId: 74
date: "2026-08-19"
collection: "matt-pocock-agent-skills"
order: 1
videoId: "zcLPGC-tvgk"
---

[Uncle Bob Martin](https://www.cleancoder.com/), author of *Clean Code* and *Clean Architecture*, describes using automated checks to keep agents from accumulating code they can no longer change safely. His experimental workflow gives separate agents implementation, cleanup, test-strengthening, and system-testing roles. He still inspects architecture and redesigns boundaries when needed.

### Deterministic Checks Over Prompted Guidelines

- **Messy code can trap agents in repeated repairs**: Uncle Bob says his early agent work accumulated changes until fixing one thing broke another. He responded with CRAP analysis, which combines test coverage with a measure of branching complexity to identify risky functions [04:09–12:04](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=249s).
- **Test whether the tests notice wrong behavior**: Mutation testing deliberately changes code, such as reversing a comparison, then runs the tests. If they still pass, the change exposes a possible gap in what they check. Uncle Bob has agents use those results to strengthen the suite [06:16–08:56](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=376s).
- **Keep prompts short and enforce important properties with tools**: Uncle Bob found that long clean-code and TDD instructions softened as sessions grew. He connects that behavior to “lost in the middle” and recommends minimizing initial instructions while moving enforceable expectations into deterministic checks [12:04–15:38](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=724s).
- **Quality gates have a throughput cost**: Tool-driven loops make agents add tests, reduce complexity, and keep iterating until checks pass. Uncle Bob reports that agents remain roughly two to four times faster than a person in his work. But he has not found the point at which additional checks cost more than they return [15:38–17:33](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=938s).

### A Specialized Agent Gauntlet

- **Separate roles to narrow context and reset trajectory**: Uncle Bob names parallelism and smaller context windows as benefits of specialized agents. A short-lived agent can focus on one outcome, then hand off to a fresh context instead of carrying implementation, cleanup, and review history together [17:33–20:29](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=1053s), [22:27–24:34](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=1347s).
- **Turn a human story into several kinds of evidence**: His experimental pipeline uses a specifier to produce given–when–then acceptance criteria in Gherkin and a procedure for checking the system through its UI. A coder implements the story and tests, while a cleaner reduces CRAP scores and reviews code. A hardener runs mutation testing, and a QA agent automates the UI procedure [20:29–22:27](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=1229s).
- **Treat the claimed speedup as a first-person report**: Uncle Bob says one agent takes about five minutes to produce questionable results. He says this pipeline takes about an hour, versus roughly half a day for a person. That claimed four- or five-fold advantage is not supported by shared tasks, outputs, or measurements in the recording [22:27–23:31](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=1347s).

### Architecture and Process Still Need Judgment

- **Keep architecture legible and mechanically constrained**: Uncle Bob still examines module relationships and redesigns boundaries when needed. He also uses an architecture viewer and a dependency rule file. He says agents and people both benefit from focused modules and disciplined interfaces. He says deep modules can let an agent reason from a small interface without loading every implementation detail [25:39–30:29](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=1539s).
- **Preserve values without copying every human discipline**: Uncle Bob is experimenting with higher tolerated complexity for agents than for people. He remains a TDD advocate for humans but does not force agents into line-by-line red-green steps. His distinction is to retain goals such as coverage and low complexity while reconsidering the behavior used to reach them [31:32–35:01](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=1892s).
- **Prefer short feedback cycles to exhaustive upfront plans**: His detailed agent plans and spec-driven development broke down when implementation exposed assumptions the plans missed. He now favors an agile loop: implement a small story, inspect the result and architecture, reorganize, and continue. This is his current working hypothesis, not a comparative finding [36:04–43:45](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=2164s).
- **Fundamentals organize complexity for agents as well as people**: Uncle Bob argues that new developers still need direct programming experience and supervised tactical work. He says they need that experience before they can recognize agent failure and make strategic decisions. He treats agents as another abstraction layer, not a reason to discard modularity, testing, or accumulated software-design knowledge [45:29–55:12](https://www.youtube.com/watch?v=zcLPGC-tvgk&t=2729s).

[Watch the full conversation on YouTube](https://www.youtube.com/watch?v=zcLPGC-tvgk).
