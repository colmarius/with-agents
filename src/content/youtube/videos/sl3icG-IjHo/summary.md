---
title: "How to Build Planning Agents without losing control - Yogendra Miraje, Factset"
videoId: sl3icG-IjHo
sourceUrl: "https://www.youtube.com/watch?v=sl3icG-IjHo"
publishedAt: "2025-07-23T15:51:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

[The source title identifies Yogendra Miraje and Factset](https://www.youtube.com/watch?v=sl3icG-IjHo); in the talk, he introduces himself as Yogi and says he works at FactSet, which he describes as a financial data and software company [00:00:03]. Miraje presents a blueprint-based architecture intended to retain control while allowing an agent to plan dynamic workflows [00:05:18]-[00:09:21].

## Key Ideas

- Miraje distinguishes a static workflow run by an agent from an agentic workflow that the agent plans and runs in response to goals, context, and feedback [00:01:48]-[00:02:43].
- He describes FactSet's adaptation of an LLMCompiler-style architecture: a blueprint generator creates a high-level plan, a planner produces lower-level tasks, an executor runs them, and a joiner combines results or triggers replanning [00:05:18]-[00:06:18].
- The natural-language blueprint reduces the planner's cognitive load, constrains which tools enter its context, makes behavior easier to interpret, and gives nontechnical collaborators a more approachable artifact [00:07:22]-[00:09:21].
- Tools should expose purpose, detailed usage guidance, and input/output contracts, with validation checks acting as brakes on agent behavior [00:07:22].
- Evaluation should cover components and end-to-end behavior, choosing code-based checks, LLM-as-judge, or human review according to the aspect being tested [00:10:24]-[00:11:27].
- He advises against agentic workflows for fixed repetitive work, use cases that cannot be represented as workflows, safety-critical or strict-compliance settings requiring deterministic outcomes, and low-latency or cost-constrained environments [00:11:27].

## Practical Implications

- Editorial: Treat the blueprint as a reviewable control boundary between a user's goal and executable tool calls, rather than asking one planner to discover and execute the entire workflow.
- Editorial: Design agent tools around capabilities and clear contracts instead of mirroring every microservice one-to-one; validate tool use and cap replanning loops [00:06:18]-[00:07:22].
- Editorial: Build evaluation alongside architecture changes, with separate checks for blueprint quality, tool selection, plan alignment, and report presentation [00:10:24]-[00:11:27].

## Questions and Tensions

- Editorial: A blueprint improves inspectability, but the talk leaves open who approves or owns blueprint changes before execution in high-stakes enterprise workflows.
- Editorial: Restricting tools can reduce planner overload, but an overly narrow blueprint may also prevent the agent from adapting when the task requires an unanticipated capability.
- Editorial: The proposed architecture adds several control points, yet its extra planning, evaluation, and orchestration may conflict with the low-latency and cost constraints Miraje identifies [00:11:27].

## Source

- [Canonical video](https://www.youtube.com/watch?v=sl3icG-IjHo)
- [transcript.md](./transcript.md)
