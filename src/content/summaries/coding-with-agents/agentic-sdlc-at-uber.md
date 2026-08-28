---
title: "Agentic SDLC at Uber — Uday Kiran Medisetty & Adam Huda, Uber"
resourceId: 79
date: "2026-08-21"
---

Uber engineers Uday Kiran Medisetty and Adam Huda present the company's path toward a managed software factory: shared model and MCP gateways, cloud development environments, a skills marketplace, and a context graph. Their staged workflow hands work from the Cortana assistant to the Minion coding agent, validation agents, and managed maintenance skills.

This is a first-party conference presentation, not an independent evaluation. The adoption, output, latency, request-volume, token-saving, and quality claims lack definitions, comparative baselines, defect measures, or business-outcome data. The speakers say the components are at different stages of maturity and rollout; their World Cup feature is an illustrative walkthrough, not evidence from a completed production launch. The talk also describes security controls without providing a threat model or independent assessment.

### Build Shared Infrastructure Before Scaling Agent Use

- **Uber reports broad adoption, but code volume is not an outcome measure**: Medisetty says more than 70% of pull requests are authored by local or cloud agents, lines of code per engineer doubled year over year, and more than 250 automated migrations changed 9 million lines. The talk does not define agent authorship, attribute the increase to a specific intervention, or pair it with quality, delivery, or customer measures ([00:00:01]-[00:01:00]).
- **Centralize model policy and attribution**: Uber's Model Gateway routes internal and external use cases through one OpenAI/Anthropic-compatible endpoint. Medisetty describes identity, redaction of more than 20 PII types, five safety and policy models running within a reported 100-millisecond budget, spend controls, audit traces, and attribution across 800-plus projects and more than 100 million daily requests ([00:01:00]-[00:03:46]).
- **Reduce tool setup and context cost at the gateway**: An automated crawler projects internal APIs into MCPs, while Uber hosts SaaS MCPs and token exchange behind one entry point. Omni MCP, CLI projection, and code-mode scripts target schema and response overhead; the reported fleet-wide saving of more than 40% has no stated baseline or measurement method ([00:03:46]-[00:05:41]).
- **Prepare execution, reusable knowledge, and organizational context together**: Pre-provisioned DevPods hold repository snapshots and search indexes for cross-repository agent work. A managed marketplace applies linting and automated review to 2,500 skills, while a context graph connects 150 node and edge types across 40 million entries. Uber reports more than 20,000 daily skill executions and better token, turn, and latency results from the graph, but provides no evaluation figures ([00:05:41]-[00:10:44]).

### Validate Before Spending CI and Reviewer Attention

- **Hand work from product exploration into implementation**: In the staged example, Cortana turns a Slack discussion into market research, product requirements, Figma variants, and candidate code changes. The workflow then hands off to Minion, which works across front-end and back-end repositories but stops at a draft pull request instead of immediately consuming CI capacity ([00:11:34]-[00:14:14]).
- **Shift machine-checkable evidence into the inner loop**: The proposed loop fixes static-analysis findings, launches a simulator, compares screenshots with Figma, and exercises front-end and staging-back-end integration before CI. The outer loop adds self-healing CI and deeper agentic review, then attaches check results and screenshots to the pull request for the human reviewer ([00:14:14]-[00:16:19]).
- **Manage recurring maintenance as fleet infrastructure**: Teams enroll services in bounded maintenance loops such as feature-flag cleanup. Uber schedules work around CI capacity, limits the diffs presented to engineers, uses comments and landing decisions as labeled feedback, and proposes turning incident-review lessons into new maintenance skills ([00:16:19]-[00:17:14]).
- **Expect the bottleneck to move rather than disappear**: Huda identifies CI capacity, experiment capacity, and decision-making as constraints. Once implementation becomes easier, the governing question becomes whether the organization should build the feature at all ([00:17:14]-[00:18:22]).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=17-YSUHo6Lk).
