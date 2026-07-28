---
title: "Scaling AI Agents Without Breaking Reliability — Preeti Somal, Temporal"
videoId: 1izYWsokr9s
sourceUrl: "https://www.youtube.com/watch?v=1izYWsokr9s"
publishedAt: "2025-07-28T15:15:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

[Preeti Somal of Temporal](https://www.youtube.com/watch?v=1izYWsokr9s) presents agentic AI applications as distributed systems whose long-running state, parallel work, tool calls, human interaction, and unreliable dependencies require orchestration. She argues that Temporal can move retry, failure-handling, state, and visibility concerns out of application business logic and into durable workflows. [00:00:55]-[00:03:53]

## Key Ideas

- Agents must cope with unreliable LLM and tool calls while maintaining state, coordinating parallel processes, and supporting human approvals; without reliability, users will not trust them. [00:00:55]-[00:02:49]
- Temporal's SDKs organize application logic around code-defined workflows while the platform handles execution reliability and other plumbing. [00:02:49]-[00:03:53]
- In the ticket-booking example, signals provide workflow input, queries expose state, and activities wrap tools; retry behavior does not need to be written into the workflow itself. [00:09:54]-[00:10:42]
- Workflow history records agent execution and can be inspected or exported for compliance and debugging. [00:10:42]-[00:11:32]
- Application workers remain in the developer's environment and CI/CD practices, while Temporal Cloud maintains execution state and manages failures, retries, reliability, and scaling. [00:12:36]

## Practical Implications

- Editorial: Treat an agent as a durable workflow when it spans multiple calls, tools, approval points, or long-lived state rather than building bespoke retry and state machinery around each integration.
- Editorial: Keep provider-specific LLM and tool operations behind activities so orchestration and failure policy remain distinct from business logic.
- Editorial: Evaluate workflow history as both an operational debugging record and a potential compliance artifact, including how it will be retained and exported.

## Questions and Tensions

- Editorial: The talk cites production users and delivery gains, but it does not provide enough detail to separate Temporal's contribution from each customer's architecture, team practices, or workload. [00:03:53]-[00:08:00]
- Editorial: Moving execution state and retries into Temporal reduces application plumbing but introduces a platform and programming-model dependency that teams still need to operate and evaluate.
- Editorial: Transparent retries are not sufficient by themselves for non-idempotent tools or actions; the talk does not examine those safety boundaries in detail.

## Source

- [Canonical video](https://www.youtube.com/watch?v=1izYWsokr9s)
- [transcript.md](./transcript.md)
