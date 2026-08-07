---
title: "Mitchell Hashimoto’s new way of writing code"
resourceId: 35
date: "2026-02-25"
collection: "pragmatic-engineer-selected-conversations"
order: 7
videoId: "WjckELpzLOU"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Mitchell Hashimoto, co-founder of HashiCorp and creator of Ghostty, about building software with coding agents and maintaining open source as generated contributions become cheaper ([00:00:53]-[00:01:56], [01:18:47]-[01:29:37]). Hashimoto’s operating principle is to keep a bounded background agent working on research, planning, or implementation while he retains control over interruption and applies review effort according to the software’s risk and lifetime ([01:19:51]-[01:21:52], [01:44:40]-[01:46:40]).

### Key Points Covered

- **Keep one bounded workstream moving**: Hashimoto tries to have an agent coding while he reviews, planning while he codes, or researching in parallel. He normally caps concurrency at two because every additional output creates cleanup work ([01:18:47]-[01:20:55]).
- **Scale review to consequences**: He reviews everything entering Ghostty, but accepted a temporary family website after browser and phone checks because it made no network requests, had no secret access, and would be removed after two months ([01:20:55]-[01:21:52]).
- **Cheap generation transfers cost to maintainers**: Hashimoto says AI removed the effort barrier that once limited low-quality open-source submissions. Ghostty moved from AI disclosure, to accepted-feature requirements, toward a proposed community-vouching system in which contributors must earn trust before opening a pull request ([01:21:52]-[01:29:37]).
- **Agent volume pressures existing development infrastructure**: He expects higher change volume to strain larger repositories, merge queues, Git forges, CI/CD, and sandbox capacity, and argues that rejected experiments may become useful version-control context ([01:31:29]-[01:38:57]).
- **Turn failures into harness feedback**: Hashimoto uses “harness engineering” for tests and tools that help an agent detect and correct a mistake it previously made, rather than relying on repeated manual intervention ([01:36:10]-[01:38:57]).
- **Prototype standards should not leak into production**: He considers disposable prototypes a strong use for quickly generated code, while warning that durable and shared software still needs appropriate review and maintainability standards ([01:43:46]-[01:44:40], [01:53:19]-[01:54:56]).
- **Protect human attention from agent notifications**: Before leaving his desk or starting a drive, Hashimoto looks for a slow research or analysis task an agent can run in the background. He disables desktop notifications and checks the result when he chooses ([01:44:40]-[01:46:40]).
- **Build skill by reproducing known work**: Hashimoto learned agentic coding by asking an agent to reproduce work he had already completed. Separate planning, executable tests, and project instructions improved the results; skeptics can begin with research rather than code generation ([01:47:41]-[01:49:46]).

Full video: <https://www.youtube.com/watch?v=WjckELpzLOU>
