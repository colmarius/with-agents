---
title: "The creator of OpenClaw: \"I ship code I don't read\""
resourceId: 35
date: "2026-01-28"
collection: "pragmatic-engineer-selected-conversations"
order: 9
videoId: "8lF7HmQ_RgY"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Peter Steinberger, introduced as the creator of OpenClaw and founder of PSPDFKit. Steinberger describes reading less routine generated code while retaining responsibility for architecture, product feel, and executable verification; his throughput, staffing, and reliability claims remain personal reports from an unusually permissive open-source project ([00:40:26]-[00:43:21], [01:07:17]-[01:08:20], [01:53:00]).

### Key Points Covered

- **Unread code can still receive architectural care**: Steinberger skips much routine plumbing but invests heavily in system structure, including a 15,000-line plug-in refactor ([00:40:26]-[00:43:21]).
- **Shape the product through implementation**: He uses partial outputs to discover alternatives and iterates on how a feature feels instead of relying on a fixed upfront specification ([01:09:22]-[01:13:29]).
- **Parallel agents consume human attention**: He reports using five to ten agents, but calls the workflow mentally taxing and organizes it around one main project plus smaller tasks ([00:54:34]-[00:57:31]).
- **Close every executable loop**: Agents compile, lint, test, and inspect output through CLIs and Docker-based end-to-end harnesses when normal interfaces are too slow or opaque ([00:57:31]-[01:00:33]).
- **Testability shapes architecture**: CLI-accessible core paths give agents faster feedback and push explicit reasoning about interfaces and validation ([01:00:33]-[01:03:27]).
- **Intent can matter more than contributed code**: He asks open-source contributors for prompts and detailed intent because reviewing small generated patches may cost more than rebuilding them in maintainer context ([01:47:58]-[01:49:00]).
- **Speed and staffing claims are anecdotal**: His roughly 600-commit day and 30%-of-staff estimate are personal claims, not controlled measurements; he says the required senior engineers would be hard to find ([01:07:17]-[01:08:20], [01:42:51]-[01:43:55]).
- **Security limits generalization**: Steinberger describes broad machine access, public Discord exposure, and a proactive heartbeat as risky; Orosz calls this more of a “YOLO project” than most production software ([01:20:08]-[01:20:56], [01:25:38]-[01:26:41], [01:53:00]).

Full video: <https://www.youtube.com/watch?v=8lF7HmQ_RgY>
