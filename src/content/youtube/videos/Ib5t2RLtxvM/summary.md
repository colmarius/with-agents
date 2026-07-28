---
title: "From Agent Traces to Agent Simulations — Rustem Feyzkhanov, Snorkel AI"
videoId: Ib5t2RLtxvM
sourceUrl: "https://www.youtube.com/watch?v=Ib5t2RLtxvM"
publishedAt: "2026-07-25T01:00:02Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

[Rustem Feyzkhanov of Snorkel AI](https://www.youtube.com/watch?v=Ib5t2RLtxvM) argues that production traces should feed private, repeatable simulation benchmarks that reproduce an agent's tools, services, policies, and workflows. He presents benchmark construction as an engineering discipline spanning task environments, oracle solutions, verifiers, release gates, and continuing expansion from observed failures. [00:00:01]-[00:04:34]

Editorial: The talk frames a benchmark not as a static scorecard but as shared infrastructure for evaluating, releasing, and improving the complete agent system.

## Key Ideas

- Feyzkhanov says every company deploying agents needs a benchmark close to production and continuously populated from production traces. [00:00:01]-[00:00:54]
- Traces help diagnose production failures, while offline simulations turn them into repeatable experiments in which agent configurations can be compared against the same environment. [00:01:52]-[00:02:53]
- Public benchmarks can orient model selection, but company-specific benchmarks are needed to test domain workflows, tools, policies, cost, latency, and retries. [00:02:53]-[00:04:34]
- A benchmark task combines instructions and an environment with a hidden oracle solution and verifiers; running the oracle establishes that the task is solvable. [00:06:24]-[00:07:26]
- Simulation environments should approximate production through snapshots, sidecars, mocked services, databases, MCP tools, simulated users, and multi-step tasks without reproducing full production. [00:08:23]-[00:10:14]
- Verifiers can inspect final state, traces, and artifacts through deterministic checks, model-based judging, and selective subject-matter-expert review. [00:10:14]-[00:11:14]
- Benchmark tasks themselves require testing for reward hacking, weak or incorrect verifiers, instability, pinned dependencies, valid fixtures, and successful oracle runs. [00:12:05]-[00:13:06]
- The operating loop expands benchmarks from production failures, evaluates changed agent configurations, uses results as a release gate, and returns approved configurations to production. [00:13:57]-[00:15:48]

## Practical Implications

- Editorial: Treat benchmark definitions as versioned software with their own CI checks rather than as an ad hoc collection of prompts.
- Editorial: Hold the environment and evaluators constant when comparing changes, and measure operational metrics alongside task success.
- Editorial: Diagnose failures across the full stack so fixes land in the harness, skills, tools, or output schema instead of accumulating only in the prompt.
- Editorial: Include both common workflows and failure-oriented edge cases, while reserving a held-out set from routine experimentation. [00:16:40]-[00:18:19]

## Questions and Tensions

- Editorial: Production fidelity competes with simulation cost and maintainability; teams must decide which services require realistic implementations and which can be mocked safely.
- Editorial: Model-based verifiers add coverage for qualitative behavior but also introduce disagreement and instability, making escalation criteria for expert review important.
- Editorial: The suggested 80/20 held-out split is presented as a conventional starting point rather than a universal rule; the appropriate split remains use-case dependent. [00:16:40]-[00:17:28]
- Editorial: Automating benchmark construction can increase scale, but the talk leaves open how teams should validate automatically generated tasks and coverage claims beyond oracle and agent runs.

## Source

- [Canonical video](https://www.youtube.com/watch?v=Ib5t2RLtxvM)
- [transcript.md](./transcript.md)
