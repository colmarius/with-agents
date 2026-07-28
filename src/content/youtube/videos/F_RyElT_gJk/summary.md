---
title: "The emerging skillset of wielding coding agents — Beyang Liu, Sourcegraph / Amp"
videoId: F_RyElT_gJk
sourceUrl: "https://www.youtube.com/watch?v=F_RyElT_gJk"
publishedAt: "2025-06-30T22:54:36Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

Beyang Liu, CTO and co-founder of Sourcegraph, presents Amp and argues that coding-agent skill requires changing interaction patterns as model capabilities move beyond chatbot-era interfaces. [00:00:00]-[00:07:09] Drawing on Amp's design and reported power-user behavior, he recommends less inner-loop micromanagement, detailed prompts, explicit context and feedback loops, agent-assisted code understanding and review, subagents, and selective parallelism. [00:11:20]-[00:33:38]

## Key Ideas

- Liu describes three application eras—completion, retrieval-augmented chat, and agents—and argues that tool-using models call for a different application architecture than chat-based coding assistants. [00:04:15]-[00:07:09]
- Liu argues for agents that edit directly, simple and composable interfaces, tighter model-agent integration, and pricing tied to inference use rather than fixed subscriptions that reward cheaper models. [00:07:09]-[00:12:22]
- Liu demonstrates Amp changing its own production codebase: the first pass updates one view but misses another, then a follow-up investigation reuses an existing mechanism to expose only the non-secret configuration field the UI needs. [00:12:22]-[00:26:50]
- Liu says effective users write detailed prompts and direct agents toward project-specific context, build commands, tests, and other feedback mechanisms; for frontend work, he presents Playwright and Storybook as a fast visual loop. [00:22:46]-[00:26:50]
- Liu says power users employ agents to understand unfamiliar code and to summarize and find entry points into large diffs, rather than using agents to avoid reading or reviewing code. [00:27:42]-[00:30:30]
- Liu presents subagents as a way to isolate subtask context and describes advanced users running several agents in parallel, while maintaining that humans remain responsible for shipped code. [00:29:30]-[00:33:38]

## Practical Implications

- Editorial: Write agent prompts as concrete task briefs with relevant constraints, files, and validation paths instead of relying on short, underspecified requests.
- Editorial: Invest in fast tests, isolated component environments, and other observable feedback loops so an agent can inspect the result of its own changes.
- Editorial: Move human attention from approving each tool call toward reviewing the resulting behavior and diff, but keep ownership of shipped code explicit.

## Questions and Tensions

- Liu argues that model and agent behavior are coupled closely enough that models are harder to swap than they were in chat-based tools. [00:08:11]
- Editorial: How much model-specific orchestration can a team accept before portability, evaluation, and provider changes become prohibitively expensive?
- Liu reports large variation in agent usage, including an upper group spending thousands of dollars per month on inference. [00:21:41]-[00:22:46]
- Editorial: Usage intensity alone does not establish productivity; what task outcomes, review costs, and defect rates would justify that spend?
- Editorial: Reducing inner-loop micromanagement can improve flow, but teams still need clear boundaries for secrets, risky operations, and changes that require approval.

## Source

- [YouTube video](https://www.youtube.com/watch?v=F_RyElT_gJk)
- [transcript.md](./transcript.md)
