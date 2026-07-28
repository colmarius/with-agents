---
title: "Ship Agents that Ship: A Hands-On Workshop - Kyle Penfound, Jeremy Adams, Dagger"
videoId: Fzb1a24hF-o
sourceUrl: "https://www.youtube.com/watch?v=Fzb1a24hF-o"
publishedAt: "2025-07-27T22:30:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Kyle Penfound and Jeremy Adams of Dagger build a coding agent from a containerized software-delivery workflow and connect it to GitHub. ([source title](https://www.youtube.com/watch?v=Fzb1a24hF-o)) Their workshop treats agent tools, environments, tests, and deployment as composable code, with the same Dagger functions available to developers, CI, and agents. [00:00:00]-[00:06:58]

## Key Ideas

- Penfound and Adams present Dagger as a portable workflow engine for software-engineering environments, with containers, files, directories, repositories, and LLMs exposed through one API across local and CI execution. [00:05:02]-[00:08:38]
- Penfound and Adams first encode the sample application's build, test, and publish operations as Dagger functions so the agent can reuse the same verification path as developers and CI. [00:11:27]-[00:20:56]
- Penfound builds a deliberately narrow workspace module with tools to list, read, and write files and to run the project's test function, emphasizing enough flexibility for the task without an unrestricted tool surface. [00:21:59]-[00:28:00]
- Penfound constructs the agent from an assignment, a typed and immutable workspace environment, an LLM, and a prompt that requires repository inspection, limited changes, and repeated testing. [00:29:56]-[00:42:19]
- Penfound demonstrates the agent inspecting a Vue project, editing a file, and invoking the predefined test tool inside an isolated container, while Dagger Cloud visualizes prompts, tools, calls, and underlying operations. [00:45:28]-[00:53:30]
- Penfound and Adams wrap the agent with GitHub issue input and pull-request output, then trigger it through GitHub Actions when an issue receives a `develop` label. [00:55:21]-[01:03:34]
- Penfound and Adams describe extending the pattern with PR feedback, review and test-repair agents, nested Dagger execution, and Dagger modules exposed as MCP servers. [01:04:23]-[01:15:29]

## Practical Implications

- Editorial: Build agent environments from the repository's real build and test workflows so developers, CI, and agents share one executable contract.
- Editorial: Grant specialized file and verification tools instead of a general shell when the task does not require unrestricted execution.
- Editorial: Keep generation isolated until deterministic checks pass, and make prompts, tool calls, artifacts, and CI transitions observable.
- Editorial: Treat issue-to-PR automation as a deployment path requiring explicit token scopes, repository permissions, review, and failure handling.

## Questions and Tensions

- Penfound and Adams emphasize tests as guardrails while acknowledging that an agent may alter tests and that such a change can be either necessary or an evasion. [00:40:12]-[00:42:19] [01:04:23]-[01:05:26]
- Editorial: A passing project-defined test suite does not establish that the assignment, unchanged-test expectations, security constraints, or deployment requirements were satisfied.
- The live agent demonstration is slowed by network access and produces a change that the presenters immediately say still needs work. [00:45:28]-[00:53:30] [01:11:14]-[01:13:20]
- Editorial: The workshop demonstrates composition and execution rather than comparative reliability; it provides no completion rate, cost, latency baseline, or production incident evidence.
- Penfound and Adams say Dagger can also supply sandboxed tools to agents built with other SDKs. [01:14:24]-[01:16:31]
- Editorial: This flexibility leaves teams responsible for deciding which behavior belongs in deterministic workflow code, agent policy, prompts, and human review.

## Source

- [YouTube video](https://www.youtube.com/watch?v=Fzb1a24hF-o)
- [transcript.md](./transcript.md)
