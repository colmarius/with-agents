---
title: "The creator of OpenClaw: \"I ship code I don't read\""
resourceId: 35
date: "2026-01-28"
collection: "pragmatic-engineer-selected-conversations"
order: 9
videoId: "8lF7HmQ_RgY"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Peter Steinberger, introduced as the creator of OpenClaw and founder of PSPDFKit. Steinberger describes reading less routine generated code while retaining responsibility for architecture, product feel, and executable verification; his throughput, staffing, and reliability claims remain personal reports from an unusually permissive open-source project ([40:26–43:21](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=2426s), [1:07:17–1:08:20](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=4037s), [1:53:00](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=6780s)).

### Key Points Covered

- **Unread code can still receive architectural care**: Steinberger skips much routine plumbing but invests heavily in system structure, including a 15,000-line plug-in refactor ([40:26–43:21](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=2426s)).
- **Shape the product through implementation**: He uses partial outputs to discover alternatives and iterates on how a feature feels instead of relying on a fixed upfront specification ([1:09:22–1:13:29](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=4162s)).
- **Parallel agents consume human attention**: He reports using five to ten agents, but calls the workflow mentally taxing and organizes it around one main project plus smaller tasks ([54:34–57:31](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=3274s)).
- **Close every executable loop**: Agents compile, lint, test, and inspect output through CLIs and Docker-based end-to-end harnesses when normal interfaces are too slow or opaque ([57:31–1:00:33](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=3451s)).
- **Testability shapes architecture**: CLI-accessible core paths give agents faster feedback and push explicit reasoning about interfaces and validation ([1:00:33–1:03:27](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=3633s)).
- **Intent can matter more than contributed code**: He asks open-source contributors for prompts and detailed intent because reviewing small generated patches may cost more than rebuilding them in maintainer context ([1:47:58–1:49:00](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=6478s)).
- **Speed and staffing claims are anecdotal**: His roughly 600-commit day and 30%-of-staff estimate are personal claims, not controlled measurements; he says the required senior engineers would be hard to find ([1:07:17–1:08:20](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=4037s), [1:42:51–1:43:55](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=6171s)).
- **Security limits generalization**: Steinberger describes broad machine access, public Discord exposure, and a proactive heartbeat as risky; Orosz calls this more of a “YOLO project” than most production software ([1:20:08–1:20:56](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=4808s), [1:25:38–1:26:41](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=5138s), [1:53:00](https://www.youtube.com/watch?v=8lF7HmQ_RgY&t=6780s)).

Full video: <https://www.youtube.com/watch?v=8lF7HmQ_RgY>
