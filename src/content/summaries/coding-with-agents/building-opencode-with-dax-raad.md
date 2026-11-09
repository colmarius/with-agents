---
addedDate: '2026-08-07'
title: "Building OpenCode with Dax Raad"
resourceId: 35
date: "2026-05-27"
collection: "pragmatic-engineer-selected-conversations"
order: 17
videoId: "1VqKUrxR2C8"
---

Faster code generation does not decide which features are worth shipping. In Gergely Orosz's Pragmatic Engineer interview, OpenCode co-founder Dax Raad explains why product judgment remains the bottleneck [03:33–06:27](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=213s).

He also describes OpenCode's open-source, provider-neutral strategy [17:46–20:38](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=1066s), and warns that agents can make weak features and architectural hacks cheaper to ship [49:05–54:35](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=2945s).

### Key points

- **Product judgment remains scarce**: Shipping every user request or competitor feature creates an incoherent product and an expanding support burden, even when implementation is cheap [03:33–06:27](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=213s).
- **OpenCode positions itself as the neutral harness**: Raad's strategy is to be the open-source harness that competing model providers all have reasons to support. That position depends on providers continuing to compete [17:46–19:51](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=1066s), [25:16–27:12](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=1516s).
- **Early effort went into first impressions, not the harness**: The team built its own terminal rendering framework and removed friction before the first prompt. Raad says the harness itself was only good enough for the first five months and was improved later [28:15–30:21](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=1695s).
- **Provider access is not permanent**: Anthropic blocked the use of Claude Code subscriptions inside OpenCode, which showed how vendor incentives can change. OpenCode responded by adding official support from competing providers [20:38–27:12](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=1238s).
- **Agents mute the discomfort that used to discourage hacks**: Writing a hack by hand felt bad, and that feeling pushed engineers to reconsider a poor design. When the agent does the hacky work, Raad says the feeling fades but the future maintenance risk remains [49:05–51:52](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=2945s).
- **Use cheap generation for cleanup too**: Raad advocates migrating improved patterns across old code to keep the repository workable, while acknowledging that cleanup has no immediate revenue line [52:46–54:35](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=3166s).
- **Builders receive feedback directly**: OpenCode pushes each feature quickly to a demo that users can try. The engineer who built it then reads the GitHub issues and social media replies, with no one summarizing the feedback for them [1:02:39–1:04:47](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=3759s).
- **Guardrails are familiar engineering work**: Tests, conventions, and stronger domain structure help fallible agents make safer changes; the episode does not measure their comparative defect impact [1:12:40–1:15:27](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=4360s).
- **Speed and business claims need qualification**: Raad says aggressive AI use did not obviously make OpenCode faster [54:35](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=3275s). User and run-rate figures are company-reported, while margin claims include estimates about other providers; none is independently verified here [19:51–20:38](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=1191s), [33:26–38:55](https://www.youtube.com/watch?v=1VqKUrxR2C8&t=2006s).

Full video: <https://www.youtube.com/watch?v=1VqKUrxR2C8>
