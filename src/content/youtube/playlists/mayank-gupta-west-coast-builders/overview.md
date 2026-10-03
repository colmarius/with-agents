---
title: "The West Coast Builders"
status: reviewed
coveredVideoIds:
  - PcsdNYfR6Ag
  - C6u5CBIXRf0
  - wbsDZpVB4Lg
  - thMFsqe8kbQ
  - 5H862RhMgOU
  - _L8xxUXOTk0
  - PZ-sko1NWa0
  - fu7th5HiADo
---

## Coverage

The full manifest tracks 22 available videos for membership and drift. This overview covers the 8 selected coding-agent interviews in descending publication-date order. All 8 have reviewed source evidence: 7 source-library summaries and 1 reused transcript/public-summary chain. All 8 are incorporated; no selected video IDs are pending or unavailable. The other 14 manifest entries remain unselected, including 4 previously summarized draft sources; their evidence is retained without publication or further capture obligations. Mayank Gupta hosts and curates the playlist and owns its source channel. Guests remain the sources for their claims; speakers and affiliations vary by video.

## Current Thesis

- Editorial: The selection connects agent leverage with control over execution, review, context, and human understanding. Liang's session-management account adds a concrete distinction: she uses separate workspaces for parallel tasks and inspectable handoffs for collaboration within a task. Neither agent count nor repeated review alone establishes correctness ([Liang summary](../../../summaries/coding-with-agents/orca-ade-jinjing-liang.md)).

## Stable Ideas

- Editorial: Peter Steinberger, a developer and former PSPDFKit founder, Mario Zechner, a developer and creator of Pi, and Quinn Slack, Sourcegraph co-founder and Amp founder, each retain human judgment around agent work: Steinberger reviews diffs and tests results, Zechner keeps architecture and learning friction, and Slack varies review depth with risk. These are different allocations of attention, not one universal review policy ([Steinberger summary](../../videos/fu7th5HiADo/summary.md), [Zechner summary](../../videos/PZ-sko1NWa0/summary.md), [Slack summary](../../videos/_L8xxUXOTk0/summary.md)).
- Editorial: Li Yin, SylphAI founder and AdaL creator, emphasizes architecture-first review and memory-bearing agents; Jinjing Liang, Orca co-founder and CEO, emphasizes session history that developers can inspect and resume. Both address continuity beyond an isolated code-generation step, but neither establishes complete transfer of a running agent's state between products ([Yin summary](../../videos/5H862RhMgOU/summary.md), [Liang summary](../../../summaries/coding-with-agents/orca-ade-jinjing-liang.md)).
- Editorial: Ben Vinegar, Modem co-founder and former Sentry VP of Engineering, and Gil Feig, Merge co-founder and CTO, both retain specialized infrastructure and human accountability around generated work: Vinegar emphasizes task-specific context and evaluations, while Feig describes bounded autonomy, deterministic checks, and final human review ([Vinegar summary](../../videos/wbsDZpVB4Lg/summary.md), [Feig summary](../../videos/C6u5CBIXRf0/summary.md)).

## Emerging Ideas

- Jinjing Liang of Orca describes separate worktrees for parallel tickets and templates that coordinate agents within each task. Developers can inspect sessions, intervene, and reuse history with another tool; she does not establish that every part of the running agent's state transfers ([summary](../../../summaries/coding-with-agents/orca-ade-jinjing-liang.md)).
- Gil Feig of Merge says his team bounds autonomy according to product maturity and customer risk, keeping tighter controls for a mature enterprise product than for newer experiments ([summary](../../videos/C6u5CBIXRf0/summary.md)).
- Ben Vinegar of Modem argues that finite context, specialized memory and skills, and continuing interface experimentation leave room for vertical agents and new harness designs ([summary](../../videos/wbsDZpVB4Lg/summary.md)).
- Thorsten Ball, an Amp co-creator, argues that model-facing harness scaffolding should recede as models improve, while execution, coordination, work preservation, and validation become harder product problems ([summary](../../videos/thMFsqe8kbQ/summary.md)).
- Li Yin of SylphAI argues that generated-code volume creates a human comprehension bottleneck and proposes architecture-first, visually organized review plus memory-bearing agents that guide a separate code-writing agent ([summary](../../videos/5H862RhMgOU/summary.md)).
- Quinn Slack of Sourcegraph and Amp argues that isolated cloud environments can expand parallelism and feedback loops, but make the product an execution-infrastructure and distributed-systems problem rather than a simple CLI loop ([summary](../../videos/_L8xxUXOTk0/summary.md)).
- Mario Zechner, creator of Pi, presents a minimal, extensible harness as a way for experienced developers to control the workflow around models, while warning that locally executed third-party extensions require code review ([summary](../../videos/PZ-sko1NWa0/summary.md)).
- Peter Steinberger, a developer and former PSPDFKit founder, presents VibeTunnel as a way to monitor and steer local terminal agents from a phone without replacing his Mac environment with a cloud pull-request workflow; the shown beta has unfinished monitoring behavior and a broken scrolling interaction ([summary](../../videos/fu7th5HiADo/summary.md)).

## Revisions and Tensions

- Editorial: Steinberger combines high concurrency with a shared working directory, whereas Liang describes separate worktrees for parallel tickets. Both still need task coordination and review; these accounts do not provide a comparative outcome study ([Steinberger summary](../../videos/fu7th5HiADo/summary.md), [Liang summary](../../../summaries/coding-with-agents/orca-ade-jinjing-liang.md)).
- Editorial: Zechner's preference for a user-controlled local harness and Slack's interest in isolated cloud execution emphasize different control surfaces rather than a settled local-versus-cloud answer. Yin also warns that more automatically opened pull requests can worsen validation bottlenecks ([Zechner summary](../../videos/PZ-sko1NWa0/summary.md), [Slack summary](../../videos/_L8xxUXOTk0/summary.md), [Yin summary](../../videos/5H862RhMgOU/summary.md)).
- Editorial: Ball expects model advances to remove specialized scaffolding, while Vinegar expects continued harness experimentation and Feig retains orchestration around agent limitations. Their product positions and definitions differ; none supplies a longitudinal comparison that settles the boundary ([Ball summary](../../videos/thMFsqe8kbQ/summary.md), [Vinegar summary](../../videos/wbsDZpVB4Lg/summary.md), [Feig summary](../../videos/C6u5CBIXRf0/summary.md)).
- Editorial: Liang's provider cost comparisons and prediction that open-weight models will lead remain anecdotes and forecasts, not a benchmark. The selection's productivity and product claims likewise require validation outside these interviews ([Liang summary](../../../summaries/coding-with-agents/orca-ade-jinjing-liang.md)).

## Practical Implications

- Editorial: Test a multi-agent environment on a real handoff: separate tasks, inspect a worker's session, correct its direction, and recover enough context to continue with another tool. Verify the software separately from the number of agents or reviews involved ([Liang summary](../../../summaries/coding-with-agents/orca-ade-jinjing-liang.md)).
- Editorial: Choose review depth from failure impact, preserve reversible evidence, and treat extensions or remote runtimes as executable infrastructure with their own security and operational risks ([Zechner summary](../../videos/PZ-sko1NWa0/summary.md), [Slack summary](../../videos/_L8xxUXOTk0/summary.md)).
- Editorial: Measure review throughput, architecture quality, rework, and false-action costs alongside generation throughput; bound autonomy by consequence and human ownership ([Yin summary](../../videos/5H862RhMgOU/summary.md), [Feig summary](../../videos/C6u5CBIXRf0/summary.md)).
- Editorial: Re-evaluate abstractions as models change, but keep execution controls, durable work records, and restoration checks explicit even when model-facing tools become simpler ([Ball summary](../../videos/thMFsqe8kbQ/summary.md)).
