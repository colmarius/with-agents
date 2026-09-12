---
title: "Agentic SDLC at Uber — Uday Kiran Medisetty & Adam Huda, Uber"
resourceId: 79
date: "2026-08-21"
---

Uber engineers Uday Kiran Medisetty and Adam Huda describe how they connect agents across the software development lifecycle, from exploring a feature to implementing, testing, and maintaining it. Their problem is organizational as well as technical: agents need access to the right tools and company knowledge, while their output can overwhelm continuous integration (CI) systems and human reviewers.

Uber's components are at different stages of rollout. The speakers use a proposed World Cup pickup feature to illustrate how they fit together, rather than report a completed launch.

### Build Shared Infrastructure Before Scaling Agent Use

- **More agent-written code does not by itself show better delivery**: Medisetty reports agents authoring more than 70% of pull requests, twice as many lines of code per engineer year over year, and more than 250 automated migrations changing 9 million lines. These figures are Uber's reports, without a definition of agent authorship or accompanying measures of defects, delivery time, or customer value ([00:01–02:03](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=1s)).
- **Apply model policy in one place**: Uber's Model Gateway is a shared endpoint through which applications reach model providers. It authenticates callers, redacts personally identifiable information, applies safety checks, and attributes usage to users, teams, and projects. That lets Uber manage spending and audit requests centrally. Medisetty reports a sub-100-millisecond policy-check budget; the talk describes these controls but does not independently assess their security ([01:00–03:46](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=60s)).
- **Make tools discoverable without loading every description**: The MCP Gateway exposes internal APIs and hosted service integrations through the Model Context Protocol, with common setup and authentication. Instead of loading all tools at once, Omni MCP can discover and invoke them. Command-line access and generated Python scripts further reduce the tool descriptions and responses placed in the model's input. Uber reports more than 40% savings across its agents, without giving a measurement baseline ([03:46–05:41](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=226s)).
- **Prepare environments before an agent needs them**: DevPods are isolated cloud development environments with repository snapshots and search indexes already built. Agents can take a prepared environment instead of setting one up from scratch. A Mega DevPod includes multiple repositories so one task can change both front-end and back-end code ([05:41–07:35](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=341s)).
- **Share task instructions and the information needed to use them**: Uber's marketplace distributes reusable agent instructions called skills, with linting and automated review before distribution. Its context graph links services, dependencies, owners, design documents, and incidents so agents need not rediscover those relationships across separate systems. Medisetty reports fewer tokens, turns, and delays with the graph, but gives no evaluation figures ([06:32–10:44](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=392s)).

### Validate Before Spending CI and Reviewer Attention

- **Hand work from product exploration into implementation**: In the staged example, Cortana turns a Slack discussion into market research, product requirements, Figma variants, and candidate code changes. The workflow then hands off to Minion, which works across front-end and back-end repositories but stops at a draft pull request instead of immediately consuming CI capacity ([11:34–14:14](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=694s)).
- **Shift machine-checkable evidence into the inner loop**: The proposed loop fixes static-analysis findings, launches a simulator, compares screenshots with Figma, and exercises front-end and staging-back-end integration before CI. The outer loop adds self-healing CI and deeper agentic review, then attaches check results and screenshots to the pull request for the human reviewer ([14:14–16:19](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=854s)).
- **Manage recurring maintenance as fleet infrastructure**: Teams enroll services in bounded maintenance loops such as feature-flag cleanup. Uber schedules work around CI capacity, limits the diffs presented to engineers, uses comments and landing decisions as labeled feedback, and proposes turning incident-review lessons into new maintenance skills ([16:19–17:14](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=979s)).
- **Expect the bottleneck to move rather than disappear**: Huda identifies CI capacity, experiment capacity, and decision-making as constraints. Once implementation becomes easier, the governing question becomes whether the organization should build the feature at all ([17:14–18:22](https://www.youtube.com/watch?v=17-YSUHo6Lk&t=1034s)).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=17-YSUHo6Lk).
