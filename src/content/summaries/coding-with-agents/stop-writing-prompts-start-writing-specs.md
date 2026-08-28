---
title: "Stop Writing Prompts. Start Writing Specs."
resourceId: 78
date: "2026-08-24"
---

Roelant Dieben demonstrates GitHub Spec Kit with GitHub Copilot by turning a nearly empty repository into a Microsoft Build session-planner MCP server. The workflow makes versioned repository documents—not a private chat prompt—the shared source of rules, product intent, technical decisions, and implementation tasks.

The title is rhetorical rather than literal: Dieben prepares substantial prompts for each phase and says that preparation takes work. The demo also uses completed branches instead of waiting for most generations. It shows the generated server starting and returning one result through the MCP Inspector, but provides no prompt-first comparison, test output, security review, team-review exercise, or measurements of quality, time, cost, or maintenance.

### Key Points Covered

- **Make the specification the durable artifact**: Prompt-first instructions are private, temporary, and hard to review; a repository specification can be reviewed by the team, retained in Git history, and extended for later features [00:00:52]-[00:03:49].
- **Separate rules, behavior, and implementation choices**: The constitution holds cross-project or team non-negotiables; the functional spec describes what to build without technical details; the plan records stack, framework, version, deployment, and configuration decisions [00:01:56]-[00:02:58], [00:10:38]-[00:14:54].
- **Inspect the generated scaffolding**: `specify init` configures the chosen agent integration and adds Markdown, scripts, and slash commands. Dieben recommends reading the `.specify` directory rather than treating the framework as magic [00:05:43]-[00:07:38].
- **Review every generated document before implementation**: The team should understand and accept the constitution, specification, and plan. Dieben also warns that the plan may select a framework version that is not the desired one unless the prompt states it explicitly [00:02:58]-[00:03:49], [00:14:54]-[00:15:58].
- **Generate bounded tasks, then implement**: The tasks phase orders setup, prerequisites, and user stories; the implementation phase turns those tasks into code and tests. The prepared result starts as an HTTP MCP server and returns session data in the MCP Inspector [00:15:58]-[00:20:14].
- **Adopt the workflow on one meaningful feature first**: Start with a small real feature, capture what and why before how, add a few non-negotiable rules, review the artifacts, and revise the living constitution as the team learns [00:19:10]-[00:21:17].

Full video: <https://www.youtube.com/watch?v=Orr7qadkZD8>
