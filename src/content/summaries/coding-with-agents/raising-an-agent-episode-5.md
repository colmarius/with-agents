---
title: "Power Tool Philosophy"
resourceId: 1
series: "raising-an-agent"
episode: 5
date: "2025-05-14"
---

Amp's team argues that a coding agent needs clear instructions and usable feedback, not just more tools. Their power-tool philosophy pairs a model that can act with tests, compiler output, and browser access that let it check its work. Developers still supply the intended behavior and architectural constraints.

### Key Points Covered

- **There is no one weird trick**: Amp is presented as a surprisingly small agent loop: give the model tools, send tool results and errors back into context, and let the model decide the next step. System prompts matter, but the model, user prompt, and tool design dominate behavior [02:56–07:07](https://www.youtube.com/watch?v=M8kZLuukZgk&t=176s).

- **Curated power tools beat giant tool piles**: The team wants Amp to be a coding power tool, not a toy that promises a full app from a vague prompt. Too many generic tools or MCP servers can slow the model and make tool choice worse; curated, tuned tools are more effective [07:07–12:36](https://www.youtube.com/watch?v=M8kZLuukZgk&t=427s).

- **Users climb a workflow ladder**: The hosts describe users moving from vague prompts to supplying all known context, setting up feedback loops, writing plan files, and eventually running multiple agents or restructuring work so agents can operate in parallel [15:27–20:22](https://www.youtube.com/watch?v=M8kZLuukZgk&t=927s).

- **Codebases will bend toward agents**: Amp intentionally optimizes for users willing to adapt. Large files, noisy build output, and legacy editor habits are treated as friction that teams may need to remove so agents can work reliably [17:19–24:13](https://www.youtube.com/watch?v=M8kZLuukZgk&t=1039s).

- **Feedback loops are the product surface**: Successful agent work depends on compiler diagnostics, tests, browser interaction, clean logs, and actionable output. Backend and frontend workflows both need ways for the agent to verify its own work [28:26–34:10](https://www.youtube.com/watch?v=M8kZLuukZgk&t=1706s).

- **Models and harnesses co-evolve**: The team expects model behavior to be shaped by the tools and harnesses models were trained with. That makes model-specific tuning more valuable than a generic model selector with arbitrary tools [35:12–38:10](https://www.youtube.com/watch?v=M8kZLuukZgk&t=2112s).

- **Keep the product surface nimble**: Amp's "wooden scaffolding" philosophy avoids overbuilding around today's model flaws. The product should be light enough to change as better models arrive [43:53–47:36](https://www.youtube.com/watch?v=M8kZLuukZgk&t=2633s).

- **Remote and multi-agent workflows are the next frontier**: The hosts point toward remote execution, revisiting diffs from phone or web, parallel agents, deterministic guardrails, and attention management as agents run longer and produce more work [55:15–1:02:23](https://www.youtube.com/watch?v=M8kZLuukZgk&t=3315s).

Full video: <https://www.youtube.com/watch?v=M8kZLuukZgk>

Episode page: <https://ampcode.com/podcast/episode-5>
