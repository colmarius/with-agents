---
title: "Scaling Agents on Kubernetes with acpx and ACP — Onur Solmaz, OpenClaw"
videoId: VaS2h-dY1-4
sourceUrl: "https://www.youtube.com/watch?v=VaS2h-dY1-4"
publishedAt: "2026-05-21T15:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Onur Solmaz, identified with OpenClaw in the source title, says he became an OpenClaw maintainer while working on agent interoperability and orchestration. He also distinguishes that open-source role from his work at TextCortex, which supplies the Kubernetes orchestration example in the final part of the talk ([00:01:12]-[00:02:15], [00:14:21]-[00:18:09]).

Solmaz presents ACP as a standard interface between agents and clients, then describes `acpx` as a command-line and workflow layer for driving agents through that protocol. His examples move from parallel Codex sessions in Discord, through mechanical pull-request review workflows, to disposable Kubernetes-hosted agents with synchronized workspaces and interchangeable harnesses ([00:03:19]-[00:06:55], [00:09:45]-[00:18:09]).

## Key Ideas

- Solmaz says he used an OpenClaw integration to bind Discord channels to parallel Codex sessions through ACP, giving each channel an ongoing agent session ([00:03:19]-[00:04:08]).
- He distinguishes MCP, which supplies tools to a model, from ACP, which standardizes agent-to-client interaction, and from agent-to-agent protocols; he chose ACP because adapters for Codex and Claude Code existed when he needed them ([00:05:12]-[00:06:05]).
- Solmaz describes `acpx` as a CLI that lets one agent call another over ACP and as an emerging general-purpose interface around the protocol ([00:06:55]).
- For OpenClaw's large pull-request stream, he argues that maintainers should preserve incoming changes as user feedback even when the proposed implementation cannot be merged, then automate repetitive intent discovery, conflict checks, CI repair, review, and shallow refactoring ([00:06:55]-[00:10:50]).
- He implements that review process as an n8n-like `acpx` workflow that drives a Codex session and emits structured JSON between programmatic stages ([00:10:50]-[00:11:41]).
- Solmaz expects enterprise workloads to use more inference and proposes on-demand disposable agents, while noting that chat platforms do not yet make provisioning multiple independently named agent instances straightforward ([00:12:37]-[00:14:21]).
- His TextCortex example combines Kubernetes, an agent harness, Git access, workspace synchronization, and a separate web interface to dispatch one full-pod agent per task from Slack ([00:14:21]-[00:18:09]).

## Practical Implications

- Use an agent-client protocol to keep the client interface separate from a particular coding-agent harness, then retain adapters where protocol support differs ([00:05:12]-[00:06:55]).
- Convert repetitive maintenance work into explicit stages with structured outputs, but reserve architectural or fundamental refactoring decisions for human escalation ([00:09:45]-[00:11:41]).
- Treat low-quality incoming patches as problem reports that may reveal a valid need even when their implementations should not merge ([00:07:58]-[00:09:45]).
- For disposable remote agents, make compute isolation, repository permissions, workspace synchronization, lifecycle, and the user-facing dispatch interface explicit rather than hiding them behind a chat message ([00:13:26]-[00:17:08]).

## Questions and Tensions

- Solmaz reports more than 60,000 total OpenClaw pull requests and 300 to 500 opened per day, but the talk does not define the measurement period or separate useful contributions from spam and abandoned work ([00:06:55]-[00:08:49]).
- He recommends applying agents generously and taking the operator out of solvable loops, while the pull-request example offers no measured defect rate for automated intent judgment, review, or refactoring ([00:09:45]-[00:11:41]).
- The claim that conflict resolution and shallow bug repair no longer need much manual work is not accompanied by repository-scale quality, security, or recovery evidence ([00:09:45]-[00:10:50]).
- Solmaz calls a full Kubernetes pod per agent wasteful but preferable and says he is still learning virtualization alternatives; the example does not compare isolation, utilization, startup latency, or operating cost ([00:14:21]-[00:17:08]).
- The chat-platform provisioning gap pushes each dispatched agent into another interface, leaving identity, access control, state handoff, and multi-agent visibility unresolved ([00:13:26]-[00:16:17]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=VaS2h-dY1-4)
- [transcript.md](./transcript.md)
