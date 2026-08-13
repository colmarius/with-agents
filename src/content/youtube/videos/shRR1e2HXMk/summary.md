---
title: "Codex, Behind the Harness — Dominik Kundel, OpenAI"
videoId: shRR1e2HXMk
sourceUrl: "https://www.youtube.com/watch?v=shRR1e2HXMk"
publishedAt: "2026-08-10T16:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Dominik Kundel of OpenAI explains the then-current Codex harness as an open-source blueprint for agent builders. He traces a request through context construction, action tools, sandbox review, transport, continuation loops, and compaction, emphasizing that many of these capabilities are also exposed through the Responses API.

## Key Ideas

- Kundel describes two open integration layers: the app-server protocol between interfaces and the harness, and the Responses API between the harness and inference. [00:01:41]-[00:03:38]
- Codex constrains context growth with deferred tools and a skills-list budget, while tool search loads deferred capabilities only when needed. [00:04:42]-[00:06:36]
- Agent actions include asynchronous subagents and terminals, scriptable browser use through a persistent Node REPL, and file edits through `apply_patch`, all mediated by platform-specific sandboxes. [00:07:29]-[00:11:06]
- Auto review uses a separate read-only subagent to judge escalated actions against user authorization, impact, and surrounding context rather than treating every risky operation alike. [00:11:59]-[00:14:54]
- Kundel presents persistent WebSockets, explicit goal-completion signaling, and server-side compaction as harness mechanisms for faster and longer-running work. [00:15:44]-[00:19:16]

## Practical Implications

- Agent builders can study or extend the open-source harness, or selectively adopt Responses API features such as tool search, `apply_patch`, WebSockets, and compaction. [00:19:16]-[00:20:16]
- Concrete, verifiable goals make continuation loops easier to terminate reliably than long, diffuse instructions. [00:17:20]-[00:18:20]
- Safety review should preserve task context and explicit authorization while keeping data exfiltration and destructive side effects inside a controlled escalation path. [00:13:03]-[00:14:54]

## Questions and Tensions

- Editorial: The talk explains design intent and demonstrations, but does not provide comparative measurements for context limits, auto-review accuracy, or end-to-end latency gains.
- Editorial: Kundel explicitly warns that the harness and APIs change quickly, so implementation details described here are a dated snapshot rather than a stable contract. [00:00:48]-[00:01:41]
- Editorial: Automatic approvals reduce interruption, but the examples also show why high-agency behavior still requires carefully defined authorization and exfiltration boundaries. [00:11:59]-[00:14:54]

## Source

- https://www.youtube.com/watch?v=shRR1e2HXMk
- [transcript.md](./transcript.md)
