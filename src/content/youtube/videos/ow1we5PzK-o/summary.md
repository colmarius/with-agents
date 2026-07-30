---
title: "The Multi-Agent Architecture That Actually Ships — Luke Alvoeiro, Factory"
videoId: ow1we5PzK-o
sourceUrl: "https://www.youtube.com/watch?v=ow1we5PzK-o"
publishedAt: "2026-05-06T15:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Luke Alvoeiro, identified with Factory in the source title, says he leads Factory's core agent harness. He also says that while working at Block he started the project that became the open-source Goose coding agent, later donated to the Agentic AI Foundation ([00:00:07]).

Alvoeiro presents Factory's Missions as an orchestrated, multi-agent workflow for projects that run for hours or days. Its core design separates planning, implementation, and validation; carries state through explicit handoffs; serializes mutating feature work; and reserves parallelism for read-only operations ([00:03:41]-[00:10:15]).

## Key Ideas

- Alvoeiro's five-part taxonomy distinguishes delegation, creator-verifier, direct communication, negotiation over shared resources, and broadcast. Missions combines all but direct communication into one workflow ([00:02:02]-[00:03:41]).
- An orchestrator scopes requirements and writes features, milestones, and a pre-implementation validation contract; clean-context workers implement one feature and commit it; validators independently check the result ([00:04:36]-[00:05:38]).
- The validation contract defines correctness independently of the implementation. At milestone boundaries, scrutiny validators run tests, types, lint, and feature-specific code review, while user-testing validators exercise live application flows ([00:05:38]-[00:07:38]).
- Workers record completed and incomplete work, commands, exit codes, discovered issues, and procedure compliance in structured handoffs. Alvoeiro says milestone checks use that record to scope corrective work instead of relying on agent memory ([00:07:38]-[00:08:35]).
- Factory serializes workers and validators because Alvoeiro says concurrent code mutation caused conflicts, duplication, and inconsistent architecture; code search, API research, and code review can still run in parallel when read-only ([00:09:23]-[00:10:15]).
- Alvoeiro recommends assigning models by role—careful reasoning for planning, code fluency for implementation, and instruction following for validation—and says a model-agnostic architecture can use a different provider for validation ([00:11:03]-[00:12:05]).
- Most orchestration behavior lives in prompts and per-mission skills rather than a large deterministic state machine; thin deterministic logic runs validation and blocks progress when handoff issues remain ([00:14:48]-[00:16:33]).

## Practical Implications

- Define observable behavior before implementation, then have validators with fresh context check both code-level evidence and live user flows ([00:04:36]-[00:07:38]).
- Make every worker handoff carry commands, exit codes, unresolved work, and discovered issues so the next agent does not need hidden session history ([00:07:38]-[00:08:35]).
- Serialize operations that mutate shared code and parallelize only work whose outputs cannot conflict without an explicit reconciliation step ([00:09:23]-[00:10:15]).
- Give long-running work a control view for progress, budget, active work, handoffs, findings, and planned course corrections rather than treating chat history as the project interface ([00:10:15]-[00:11:03]).

## Questions and Tensions

- Alvoeiro frames human attention, not model capability, as the bottleneck and says models can address a backlog of 50 tasks, but the talk does not present comparative evidence for that general claim ([00:01:04]).
- He reports a longest mission of 16 days and predicts 30-day runs; neither duration establishes correctness, maintainability, cost, or successful unattended recovery ([00:08:35]).
- The Slack-clone slide and production-use claims report coverage, time, token allocation, follow-up validation, and use cases without exposing tasks, baselines, defect severity, costs, or independent evaluation ([00:13:04]-[00:14:00], [00:17:24]).
- Prompt- and skill-driven orchestration may adapt quickly to model changes, but four sentences changing an execution strategy also creates versioning, auditability, and regression-testing questions ([00:14:48]-[00:15:39]).
- Using another model provider for validation changes context and model lineage, but does not by itself establish independence from shared assumptions, specifications, or evaluation errors ([00:11:03]-[00:12:05]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=ow1we5PzK-o)
- [transcript.md](./transcript.md)
