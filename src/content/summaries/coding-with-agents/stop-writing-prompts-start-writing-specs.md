---
title: "Stop Writing Prompts. Start Writing Specs."
resourceId: 78
date: "2026-08-24"
---

Roelant Dieben demonstrates a way to make agent instructions reviewable by a team: store rules, desired behavior, technical decisions, and tasks in versioned repository documents. Using GitHub Spec Kit with Copilot, he builds a Model Context Protocol (MCP) server that lets an agent query Microsoft Build sessions.

### Key Points Covered

- **Make the specification the durable artifact**: Dieben contrasts instructions left in private chats with a repository specification that the team can review, retain in Git history, and extend for later features. The workflow still uses prompts; the difference is where the agreed requirements live [00:52–04:52](https://www.youtube.com/watch?v=Orr7qadkZD8&t=52s).
- **Separate rules, behavior, and implementation choices**: The constitution holds cross-project or team non-negotiables; the functional spec describes what to build without technical details; the plan records stack, framework, version, deployment, and configuration decisions [01:56–02:58](https://www.youtube.com/watch?v=Orr7qadkZD8&t=116s), [10:38–14:54](https://www.youtube.com/watch?v=Orr7qadkZD8&t=638s).
- **Inspect the generated scaffolding**: `specify init` configures the chosen agent integration and adds Markdown, scripts, and slash commands. Dieben recommends reading the `.specify` directory rather than treating the framework as magic [05:43–07:38](https://www.youtube.com/watch?v=Orr7qadkZD8&t=343s).
- **Review every generated document before implementation**: The team should understand and accept the constitution, specification, and plan. Dieben also warns that the plan may select a framework version that is not the desired one unless the prompt states it explicitly [02:58–03:49](https://www.youtube.com/watch?v=Orr7qadkZD8&t=178s), [14:54–15:58](https://www.youtube.com/watch?v=Orr7qadkZD8&t=894s).
- **Generate bounded tasks, then implement**: The tasks phase orders setup, prerequisites, and user stories; the implementation phase turns those tasks into code and tests. Dieben uses prepared branches for much of the demo. The result starts as an HTTP MCP server and returns a session through the MCP Inspector, a tool for exercising the server; that is a functional demonstration, not a full test or security review [09:34–10:38](https://www.youtube.com/watch?v=Orr7qadkZD8&t=574s), [15:58–20:14](https://www.youtube.com/watch?v=Orr7qadkZD8&t=958s).
- **Adopt the workflow on one meaningful feature first**: Start with a small real feature, capture what and why before how, add a few non-negotiable rules, review the artifacts, and revise the living constitution as the team learns [19:10–21:17](https://www.youtube.com/watch?v=Orr7qadkZD8&t=1150s).

Full video: <https://www.youtube.com/watch?v=Orr7qadkZD8>
