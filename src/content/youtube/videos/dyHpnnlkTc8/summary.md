---
title: "Cooking with Agents in VS Code — Liam Hampton, Microsoft"
videoId: dyHpnnlkTc8
sourceUrl: "https://www.youtube.com/watch?v=dyHpnnlkTc8"
publishedAt: "2026-05-21T17:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Liam Hampton of Microsoft, as identified by the source title, presents VS Code as a common interface for local, background, and cloud coding agents. He assigns those execution modes according to how closely a developer wants to steer the task: local for hands-on work, background for partial delegation in a Git worktree, and cloud for work he is comfortable handing off ([00:02:10]-[00:04:50]).

Hampton demonstrates those modes on one small Python repository, using a local agent for tests and error handling, a background agent for a front end, and a cloud agent for open-source documentation. His broader claim is that one development environment can expose multiple agent runtimes and customization surfaces without making them one undifferentiated workflow ([00:05:43]-[00:10:57], [00:12:41]-[00:16:31]).

## Key Ideas

- Hampton rejects one-shot prompting as a general solution and argues that organizations should examine tooling, token spend, and task fit rather than assume AI expenditure produces a productivity return ([00:00:16]-[00:02:10]).
- He distinguishes local agents for close human interaction, background agents isolated in Git worktrees, and cloud agents for more fully delegated work ([00:02:10]-[00:04:50]).
- In the demonstration, a GitHub Copilot CLI background agent plans and implements a front end, a cloud agent prepares repository documentation, and a local custom agent writes tests and revises route error handling ([00:05:43]-[00:10:57]).
- Hampton enables Autopilot for repeated tool calls but warns that it can be dangerous and instructs the background agent to pause before opening a pull request so he can test the work locally ([00:05:43]-[00:06:40], [00:10:07]).
- He says GitHub Copilot cloud agents run in isolated GitHub Actions environments with restricted networking and main-branch access, plus GitHub and Playwright MCP servers ([00:11:54]).
- Hampton presents custom instructions, custom agents, prompt files, skills, hooks, extensions, and MCP servers as VS Code customization surfaces that can also include third-party tooling ([00:12:41]-[00:15:31]).
- He closes by describing VS Code as one entry point for first-party and third-party agent sessions, including GitHub Copilot CLI sessions and MCP integrations ([00:15:31]-[00:16:31]).

## Practical Implications

- Choose an execution mode from the amount of supervision and isolation a task needs rather than sending every assignment to the most autonomous agent ([00:02:10]-[00:04:50]).
- Keep partially delegated implementation in a separate worktree and require a local test gate before the agent creates or advances a pull request ([00:05:43]-[00:06:40], [00:10:07]).
- Give repeated tasks narrow custom instructions or agents, while keeping tests and code review visible to the developer for work that needs close judgment ([00:07:34]-[00:09:20], [00:12:41]-[00:13:34]).
- Review a cloud agent's runtime restrictions, network access, branch permissions, and external tool connections before treating remote execution as safe delegation ([00:11:54]).

## Questions and Tensions

- The talk raises return on investment and token cost but does not measure either across the three execution modes or compare their output quality ([00:01:09]-[00:02:10]).
- The demonstration reports three successful tasks, but the cloud task shown in the pull-request view was prepared earlier while the live chat task was still running; it is not a controlled comparison of simultaneous completion ([00:09:20]-[00:10:57]).
- Hampton calls the cloud-agent environment safe because of isolation and restrictions, but the talk does not test those safeguards or address risks introduced by repository content and MCP servers ([00:11:54]).
- Parallel agents work on distinct tasks in the example; the talk does not show how conflicting edits, shared dependencies, failed worktrees, or cross-agent integration should be handled ([00:07:34]-[00:10:57]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=dyHpnnlkTc8)
- [transcript.md](./transcript.md)
