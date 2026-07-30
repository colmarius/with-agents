---
title: "The Missing Primitive for Agent Swarms — Lou Bichard, Ona"
videoId: 5Sui_OnSRlY
sourceUrl: "https://www.youtube.com/watch?v=5Sui_OnSRlY"
publishedAt: "2026-05-23T16:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Lou Bichard, field CTO at Ona, defines a “software factory” as incrementally moving the human out of proactive operation so work can flow through the software-development lifecycle. He distinguishes that goal from one developer merely supervising many parallel agents and says the technology is still early ([00:00:14]-[00:02:19]).

Bichard presents runtimes, orchestration, and event triggers as largely available while identifying coordination among agents as the missing infrastructure primitive. His examples span repository fleets, process-level subagents, isolated virtual machines, workflow state, durable execution, and a possible CLI boundary for lifecycle gates ([00:02:19]-[00:09:56], [00:11:43]-[00:17:33]).

## Key Ideas

- Bichard separates three scaling patterns: swarms fan one intent out and combine the results, fleets apply work across repositories, and events trigger agents from changes such as a pull request or ticket ([00:01:17]-[00:03:11]).
- He says Ona can launch development environments on schedules or triggers and apply changes such as CVE remediation or test-coverage improvements across many repositories ([00:03:11]-[00:04:02]).
- Bichard treats harness engineering as a feedback loop: observe where an agent gets lost, then encode instructions, skills, tests, and other feedback into the repository context ([00:04:02]-[00:05:58]).
- He argues that security isolation and bursty workloads favor virtual machines over containers for substantial agent development tasks, while acknowledging multiple runtime options ([00:05:58]-[00:07:01]).
- In a recorded Ona demonstration, one parent agent creates separate virtual-machine workers and passes them bounded tasks, while a second pattern runs process-level subagents within one environment ([00:07:01]-[00:09:56]).
- Bichard says a coarse lifecycle diagram hides many micro-steps and that agents can lose effectiveness as context fills or skip requested steps, making explicit workflow coordination necessary ([00:10:48]-[00:12:47]).
- He suggests state machines, durable execution, and a locally and remotely usable CLI as possible coordination mechanisms, but describes implementations and standards in this area as nascent ([00:12:47], [00:15:44]-[00:17:33]).

## Practical Implications

- Separate the runtime, orchestration, trigger, and coordination responsibilities when designing a multi-agent system instead of treating agent scale as one deployment problem ([00:02:19]-[00:07:01]).
- Give a parent agent bounded worker tasks and explicit message-passing paths, then expose enough hierarchy for an operator to inspect and control the work ([00:07:01]-[00:09:56]).
- Convert lifecycle stages into explicit gates or state transitions that an agent can check before proceeding, and make the same contract available in local and remote environments ([00:10:48]-[00:12:47], [00:15:44]-[00:16:38]).
- Feed observed agent failures back into repository instructions, skills, tests, and other deterministic checks rather than relying on a growing prompt alone ([00:04:02]-[00:05:58]).

## Questions and Tensions

- Bichard calls runtimes, orchestration, and triggers effectively solved, but the talk does not compare reliability, cost, throughput, or failure recovery across the available approaches ([00:05:07]-[00:07:01], [00:13:44]).
- The virtual-machine argument emphasizes isolation and noisy-neighbor concerns without measuring those properties against hardened container or microVM configurations ([00:05:58]-[00:07:01]).
- The recorded demonstration shows subagent topology and interface behavior rather than task quality, merge behavior, or recovery from a failed worker ([00:07:01]-[00:10:48]).
- Bichard acknowledges that gates, compliance, security, protocol choice, and the coordination standard remain unresolved even as the software-factory definition aims to reduce proactive human operation ([00:12:47]-[00:17:33]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=5Sui_OnSRlY)
- [transcript.md](./transcript.md)
