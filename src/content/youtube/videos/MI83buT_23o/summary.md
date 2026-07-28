---
title: "Devin 2.0 and the Future of SWE - Scott Wu, Cognition"
videoId: MI83buT_23o
sourceUrl: "https://www.youtube.com/watch?v=MI83buT_23o"
publishedAt: "2025-07-25T23:07:05Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Scott Wu of Cognition presents a product-builder's account of how Devin's workloads expanded from repetitive migrations to isolated fixes, broader multi-file work, interactive codebase exploration, and parallel backlog execution. ([source title](https://www.youtube.com/watch?v=MI83buT_23o)) He argues that a coding agent's useful task horizon has been growing quickly and that each increase changes the interface, context, testing, and human-escalation problems the system must solve. [00:00:00]-[00:15:57]

## Key Ideas

- Wu defines agent capacity as the amount of uninterrupted work completed before a human must intervene, and reports a roughly 70-day doubling time for coding-task length, which he translates into 16–64x more work per year. [00:00:00]-[00:02:06]
- Wu describes repetitive migrations as Devin's first broadly adopted workload: explicit playbooks supplied the steps, while knowledge or memory carried human feedback into later runs. [00:03:12]-[00:06:22]
- Wu says isolated bugs and features required reproducible repository setup, snapshots, a clean remote VM, and access to CI and linting; broader requests then required call hierarchies, language-server data, Git history, and consistent changes across files. [00:06:22]-[00:10:05]
- Wu says complex tasks made short one-shot requests insufficient, leading to an interactive workflow in which humans use DeepWiki and search to explore and plan before delegating most of the implementation. [00:10:05]-[00:12:50]
- Wu says parallel backlog work requires issue-tracker integration, task scoping, confidence-based escalation to humans, local execution, and iterative self-testing before an agent can deliver complete pull requests. [00:12:50]-[00:14:55]

## Practical Implications

- Editorial: Match the amount of unattended execution to the task's ambiguity and the agent's demonstrated ability to recover, test, and ask for help.
- Editorial: Prepare reproducible environments, repository context, and fast checks before scaling from isolated edits to multi-file or parallel work.
- Editorial: Treat exploration and planning as a collaborative phase for complex tasks, then preserve explicit escalation points during asynchronous implementation.

## Questions and Tensions

- Wu reports a 70-day doubling time for coding-task length and predicts another 16–64x increase over the following year. [00:01:03]-[00:02:06] [00:14:55]-[00:15:57]
- Editorial: What benchmark definitions, task distributions, success criteria, and intervention rules support those growth estimates?
- Wu says each capability increase creates a different bottleneck rather than merely extending the same completion interface. [00:02:06]-[00:03:12] [00:14:55]
- Editorial: Evaluations and controls may need to change with each workload tier, making a single autonomy score a weak guide to production readiness.
- Editorial: Parallel backlog execution can increase throughput, but cross-task dependencies, conflicting changes, review capacity, and organizational priorities still need explicit coordination.

## Source

- [YouTube video](https://www.youtube.com/watch?v=MI83buT_23o)
- [transcript.md](./transcript.md)
