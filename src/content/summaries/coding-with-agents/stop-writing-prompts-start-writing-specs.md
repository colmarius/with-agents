---
title: "Stop Writing Prompts. Start Writing Specs."
resourceId: 78
date: "2026-08-24"
---

Roelant Dieben demonstrates GitHub Spec Kit with GitHub Copilot by turning a nearly empty repository into a Microsoft Build session-planner MCP server. The workflow makes versioned repository documents—not a private chat prompt—the shared source of rules, product intent, technical decisions, and implementation tasks.

The title is rhetorical rather than literal: Dieben prepares substantial prompts for each phase and says that preparation takes work. The demo also uses completed branches instead of waiting for most generations. It shows the generated server starting and returning one result through the MCP Inspector, but provides no prompt-first comparison, test output, security review, team-review exercise, or measurements of quality, time, cost, or maintenance.

### Key Points Covered

- **Make the specification the durable artifact**: Prompt-first instructions are private, temporary, and hard to review; a repository specification can be reviewed by the team, retained in Git history, and extended for later features [00:52–03:49](https://www.youtube.com/watch?v=Orr7qadkZD8&t=52s).
- **Separate rules, behavior, and implementation choices**: The constitution holds cross-project or team non-negotiables; the functional spec describes what to build without technical details; the plan records stack, framework, version, deployment, and configuration decisions [01:56–02:58](https://www.youtube.com/watch?v=Orr7qadkZD8&t=116s), [10:38–14:54](https://www.youtube.com/watch?v=Orr7qadkZD8&t=638s).
- **Inspect the generated scaffolding**: `specify init` configures the chosen agent integration and adds Markdown, scripts, and slash commands. Dieben recommends reading the `.specify` directory rather than treating the framework as magic [05:43–07:38](https://www.youtube.com/watch?v=Orr7qadkZD8&t=343s).
- **Review every generated document before implementation**: The team should understand and accept the constitution, specification, and plan. Dieben also warns that the plan may select a framework version that is not the desired one unless the prompt states it explicitly [02:58–03:49](https://www.youtube.com/watch?v=Orr7qadkZD8&t=178s), [14:54–15:58](https://www.youtube.com/watch?v=Orr7qadkZD8&t=894s).
- **Generate bounded tasks, then implement**: The tasks phase orders setup, prerequisites, and user stories; the implementation phase turns those tasks into code and tests. The prepared result starts as an HTTP MCP server and returns session data in the MCP Inspector [15:58–20:14](https://www.youtube.com/watch?v=Orr7qadkZD8&t=958s).
- **Adopt the workflow on one meaningful feature first**: Start with a small real feature, capture what and why before how, add a few non-negotiable rules, review the artifacts, and revise the living constitution as the team learns [19:10–21:17](https://www.youtube.com/watch?v=Orr7qadkZD8&t=1150s).

Full video: <https://www.youtube.com/watch?v=Orr7qadkZD8>
