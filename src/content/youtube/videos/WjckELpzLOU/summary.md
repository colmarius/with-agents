---
title: "Mitchell Hashimoto’s new way of writing code"
videoId: WjckELpzLOU
sourceUrl: "https://www.youtube.com/watch?v=WjckELpzLOU"
publishedAt: "2026-02-25T16:37:56Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Mitchell Hashimoto, co-founder of HashiCorp and creator of Ghostty, about building software with coding agents and maintaining open source as generated contributions become cheaper ([00:00:53]-[00:01:56], [01:18:47]-[01:29:37]). Hashimoto’s operating principle is to keep a bounded background agent working on research, planning, or implementation while he retains control over interruption and applies review effort according to the software’s risk and lifetime ([01:19:51]-[01:21:52], [01:44:40]-[01:46:40]).

## Key Ideas

- Hashimoto says Claude Code, Amp, Codex, and chat tools let him choose where to spend his attention. While working, he tries to keep one agent active—coding while he reviews, planning while he codes, or researching in parallel—and normally caps concurrency at two because cleaning up more outputs is not enjoyable ([01:18:47]-[01:20:55]).
- His review standard depends on consequences: he reviews everything entering Ghostty, but accepted a temporary family website after browser and phone checks because it made no network requests, had no secret access, and would be removed after two months ([01:20:55]-[01:21:52]).
- Hashimoto says AI removed the effort barrier that once limited low-quality open-source submissions. Ghostty moved from AI disclosure, to requiring an accepted feature request for AI-authored work, toward a proposed community-vouching system where trust must be earned before someone can open a pull request ([01:21:52]-[01:29:37]).
- He expects agent-generated change volume to strain large repositories, merge queues, review workflows, and current Git forges. He also argues that rejected experiments may become useful version-control context instead of being discarded ([01:31:29]-[01:35:09]).
- Hashimoto uses “harness engineering” for adding tests or tools that let an agent detect and correct a failure it previously made. He expects broader validation and increased sandbox demand, while noting that current CI/CD and infrastructure may not be sized for that workload ([01:36:10]-[01:38:57]).
- Asked how he would hire, Hashimoto says he would require AI-tool competence even when an engineer does not use agents for every task. His clearest use case is disposable prototyping, where rapidly generated code can test whether an idea is worth productionizing without lowering the standard for durable code ([01:43:46]-[01:44:40], [01:53:19]-[01:54:56]).
- Before leaving his desk or starting a drive, Hashimoto looks for a slow research or analysis task an agent can run in the background. He disables desktop notifications so the agent cannot interrupt his own work and checks it when he chooses ([01:44:40]-[01:46:40]).
- To learn agentic coding, he first reproduced work he had already completed, then found that a separate planning step, an executable test harness, and project instructions improved results. He recommends skeptics begin by delegating research if they do not want an agent writing code ([01:47:41]-[01:49:46]).

## Practical Implications

- Keep background delegation bounded: give one agent a slow, inspectable planning, research, or implementation task while preserving uninterrupted time for the work that needs human judgment ([01:19:51]-[01:20:55], [01:44:40]-[01:46:40]).
- Match verification to the artifact’s lifetime, permissions, and maintenance burden; do not use disposable-prototype standards for shared or durable software ([01:20:55]-[01:21:52], [01:43:46]-[01:44:40]).
- When an agent repeats a mistake, improve repository instructions, tests, or executable tooling so future runs can avoid or detect the problem rather than relying on the same manual correction ([01:36:10]-[01:38:57], [01:47:41]-[01:49:46]).
- For public repositories, require prior alignment on the problem and a trust signal before accepting generated implementation; contribution volume can otherwise transfer cheap generation into expensive maintainer review ([01:21:52]-[01:29:37]).

## Questions and Tensions

- “Always have an agent doing something” is Hashimoto’s personal operating rule, not a measured productivity result. He also acknowledges cleanup cost and limits himself to one or two agents ([01:19:51]-[01:20:55], [01:44:40]-[01:46:40]).
- The vouching system was still a proposed change with an open implementation pull request at recording time. The interview provides no outcome data on whether it improves contribution quality or how often its invitation-tree penalties would need reversal ([01:25:54]-[01:27:51]).
- Hashimoto’s detailed account of low-quality AI pull requests comes from maintaining Ghostty; the interview mentions similar reports but provides no prevalence data across open source ([01:21:52]-[01:29:37]).
- Hashimoto reports current repository churn at unnamed highly agentic companies and says sandbox volume has already increased, but his broader claims that Git, forges, tests, CI/CD, and infrastructure must change remain informed forecasts without defined workloads or measured breakpoints ([01:31:29]-[01:38:57]).
- The auto-captions contain repeated transcription errors. This transcript pass corrects clear product and personal names—including Ghostty, Terraform, Claude Code, libghostty, SonarQube, Amp, and Armon—without rewriting uncertain wording.

## Source

- [YouTube video](https://www.youtube.com/watch?v=WjckELpzLOU)
- [transcript.md](./transcript.md)
