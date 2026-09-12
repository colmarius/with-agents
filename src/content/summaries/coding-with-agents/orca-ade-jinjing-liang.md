---
title: "50,000 GitHub Stars in Four Months | Jinjing Liang (Orca ADE, Co-founder & CEO)"
resourceId: 125
date: "2026-08-29"
---

Jinjing Liang, Orca's co-founder and CEO, joins Mayank Gupta on The West Coast Builders to discuss an **agentic development environment (ADE)**: an IDE designed around working with multiple agents. The practical material covers parallel task execution, coordination between different coding agents, and session history that lets a person inspect or resume their work.

### Main takeaways

- **The orchestration product grew out of testing infrastructure.** [08:13–11:07](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=493s): Liang says Stably built agents that clicked through websites, recorded test activity, and exposed agent cost and progress. Users then asked to use that management interface for building products as well as testing them. Orca reused that infrastructure for a broader development workflow.
- **Tool independence is part of the product's purpose.** [18:58–22:48](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=1138s): Liang describes users who want Claude, Codex, or Pi without committing their entire workflow to one vendor. She distinguishes tools enterprises can use unchanged, where open source may be less decisive, from frameworks they build products on, where access to modify the implementation matters because requirements differ.
- **Parallel tasks and collaboration within a task are separate layers.** [27:50–30:56](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=1670s): her example starts with 20 tickets assigned to separate Git worktrees—separate working directories for concurrent code changes. Within each task, a template asks different agents to design, challenge a proposal, implement, and review. Orca's command-line interface lets agents invoke one another and share artifacts. Liang attributes faster delivery to this setup, but repeated reviews do not by themselves establish correctness.
- **Session history lets a person intervene or switch agents.** [30:56–33:01](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=1856s): Liang says users can inspect child-agent sessions, provide input, and search locally retained history after archiving. She describes retrieving that history to continue with another agent when a subscription limit interrupts work. The reusable information is the session history; she does not establish that every part of the running agent's state transfers.
- **Automation can return to interactive development.** [33:01–36:03](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=1981s): Liang says there is no direct OpenClaw migrator; users move workflows incrementally. Her example is an automated test-fixing session that she later opens to request changes to how the test was written. The useful distinction is that an automated run remains a session a developer can continue, rather than only a final output to accept or reject.
- **Open weights do not make inference providers equivalent.** [36:03–38:59](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=2163s): Liang predicts an open-weight model will become the best model, explicitly as a forecast. Separately, she argues that the serving stack affects cost: providers differ in how often they can reuse cached computation, so the same model can have different effective costs. Her Kimi cache-hit figures are anecdotal and should not be treated as a provider benchmark.
- **Product focus and ecosystem participation drive her growth approach.** [24:45–26:43](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=1485s): Liang credits YC with shifting attention from activity metrics toward deep user conversations and the most important problem the product solves. [38:59–41:00](https://www.youtube.com/watch?v=PcsdNYfR6Ag&t=2339s): rather than treating every overlapping tool as a threat, she shares ways to use new tools that help Orca's community. Those launches become useful material for developer education and marketing.

### Practical interpretation

Editorial synthesis: test a multi-agent environment on a real handoff. Can you separate tasks, inspect a worker's session, correct its direction, and recover enough context to continue with another tool? Check the resulting software separately from the number of agents or reviews it took to produce it.

### Source

[Mayank Gupta — 50,000 GitHub Stars in Four Months](https://www.youtube.com/watch?v=PcsdNYfR6Ag), published August 29, 2026.
