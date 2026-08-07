---
title: "Building OpenCode with Dax Raad"
videoId: 1VqKUrxR2C8
sourceUrl: "https://www.youtube.com/watch?v=1VqKUrxR2C8"
publishedAt: "2026-05-27T16:06:03Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Dax Raad, co-founder of OpenCode, about building an open-source coding-agent harness while resisting the assumption that cheaper code automatically produces better products. Raad argues that product judgment remains the bottleneck and that agents can hide architectural pain while increasing the amount of code a team must support ([00:02:42]-[00:06:27], [00:49:05]-[00:54:35]).

OpenCode's growth, revenue, margins, and speed observations are Raad's reported company figures and judgments, not independently measured results in the episode. He repeatedly narrows claims to his startup context and rejects confident forecasts about who will win from AI ([00:19:51]-[00:20:38], [00:33:26]-[00:38:55], [00:55:39]-[00:58:29]).

## Key Ideas

- Faster implementation does not create more good product decisions. Raad says indiscriminately answering every request or competitor feature produces an incoherent product and a permanent support burden ([00:03:33]-[00:06:27]).
- OpenCode deliberately claimed the neutral open-source harness position so competing model providers would have an incentive to support it; this is a market strategy, not a claim that its early harness was technically best ([00:17:46]-[00:19:51], [00:25:16]-[00:27:12]).
- The initial product emphasized immediate terminal quality and a low-friction first prompt. Raad says the team built its own rendering framework and accepted a merely adequate harness before improving it later ([00:28:15]-[00:30:21]).
- Provider competition reduces dependence on a single model company, but support can change with vendor incentives; OpenCode's response is to remain useful across providers rather than assume permanent access ([00:20:38]-[00:27:12]).
- Agents mute the felt cost of a hack: implementation becomes easy enough that teams can avoid redesigning a system, while the delayed maintenance landmine remains ([00:49:05]-[00:51:52]).
- Cheap generation also makes systematic cleanup more feasible. Raad advocates applying improved patterns across old code, despite no immediate revenue attribution, to preserve a codebase people can work in years later ([00:52:46]-[00:54:35]).
- OpenCode pushes a feature to a demonstrable foundation, then lets the engineer who built it receive GitHub and social feedback directly rather than through an insulating product layer ([01:02:39]-[01:04:47]).
- Tests, repository conventions, and domain-driven structure serve as guardrails for prolific but fallible agents; Raad presents this as the old problem of helping a less experienced contributor work safely, not a novel replacement for engineering ([01:12:40]-[01:15:27]).
- Raad says product sense comes from years in tight feedback loops and remains largely untouched by AI; he tests first-run UX repeatedly and seeks solutions that absorb many user problems instead of shipping one feature per request ([00:58:29]-[01:01:36]).

## Practical Implications

- Keep the first-run path short and periodically test it from a clean environment, rather than assuming existing users reveal onboarding regressions ([00:58:29]-[01:00:33]).
- Require an explicit choice between redesign and a temporary hack; agent convenience should not make that trade-off invisible ([00:49:05]-[00:51:52]).
- Budget recurring repository-wide cleanup when agents make pattern migration cheap, while checking whether the cleanup improves maintainability in practice ([00:52:46]-[00:54:35]).
- Put implementers in direct contact with user feedback and strengthen tests, conventions, and domain boundaries before increasing autonomous change volume ([01:00:33]-[01:04:47], [01:12:40]-[01:15:27]).

## Questions and Tensions

- Raad says OpenCode was not moving faster despite aggressive AI use, but the episode defines no delivery baseline, quality metric, cohort, or observation window for that judgment ([00:41:02]-[00:45:05], [00:54:35]).
- The reported user growth, inference run rate, and margins are company-reported snapshots; they do not establish retention, profitability, or durable business advantage ([00:19:51]-[00:20:38], [00:33:26]-[00:38:55]).
- A neutral harness benefits from provider competition, yet model vendors can restrict subscriptions or change economics, leaving neutrality dependent on continued competitive incentives ([00:20:38]-[00:27:12]).
- Direct feedback can sharpen judgment, but the conversation also says growth makes these loops difficult to preserve; it does not resolve how the approach scales beyond the current team ([01:00:33]-[01:04:47]).
- More structure can constrain agent mistakes, but the episode offers no defect or maintenance comparison showing that heavier domain patterns outperform simpler alternatives for OpenCode ([01:12:40]-[01:15:27]).

## Source

- [YouTube video](https://www.youtube.com/watch?v=1VqKUrxR2C8)
- [transcript.md](./transcript.md)
