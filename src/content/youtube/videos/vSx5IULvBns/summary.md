---
title: "Always-on agents run production without the on-call tax — Justin Smith, Resolve AI"
videoId: vSx5IULvBns
sourceUrl: "https://www.youtube.com/watch?v=vSx5IULvBns"
publishedAt: "2026-08-09T14:45:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Justin Smith, a founding product engineer at Resolve AI, argues that faster code generation does not remove the larger burden of operating production systems. He presents always-on background agents as a way to monitor changes, perform recurring operational work, and answer routine engineering questions using accumulated production context.

Editorial: This is a product-centered account of Resolve AI's approach. The talk demonstrates proposed workflows but does not independently validate the cited allocation of engineering time, quantify incident outcomes, or establish that always-on agents eliminate the on-call burden.

## Key Ideas

- Smith argues that writing code is only part of engineering work and that increased change volume makes production operation and context management more important [00:00:58]-[00:03:56].
- Resolve AI's proposed architecture combines on-call, incident, and background agents with models, context, actions, and a learning system that tracks an evolving environment [00:03:56]-[00:07:37].
- Smith says a production task requires both execution and context capable of distinguishing an ordinary signal from one worth investigating [00:09:27]-[00:11:15].
- He describes agents triggered by schedules, event streams, or messages, running in cloud sandboxes and reusing learned system knowledge across tasks [00:11:15]-[00:13:23].
- His example workloads include deployment monitoring, periodic health checks, operational handoffs, and confidence-gated answers to engineering questions [00:13:23]-[00:17:05].
- In the deployment demo, an agent inspects a change, selects relevant telemetry, and varies how long it monitors rather than applying only fixed checks [00:17:05]-[00:19:59].

## Practical Implications

- Editorial: Start with recurring or event-driven operational work where the trigger, available tools, expected report, and escalation boundary can be made explicit [00:11:15]-[00:15:07].
- Editorial: Keep agent work inspectable and deliver results in existing collaboration surfaces while retaining access to task history and reports [00:20:59]-[00:22:48].
- Editorial: Treat environment-specific knowledge as a core dependency, not an interchangeable add-on to task execution [00:22:48]-[00:24:39].

## Questions and Tensions

- Editorial: Passive channel monitoring and access to private messages raise permission, privacy, and mistaken-response risks that the talk does not examine [00:16:10]-[00:17:05].
- Editorial: The demo emphasizes adaptability, but it does not specify approval boundaries for production actions or evidence for improved reliability [00:17:05]-[00:21:50].

## Source

- <https://www.youtube.com/watch?v=vSx5IULvBns>
- [transcript.md](./transcript.md)
