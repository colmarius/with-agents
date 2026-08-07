---
title: "TDD, AI agents and coding with Kent Beck"
resourceId: 35
date: "2025-06-11"
collection: "pragmatic-engineer-selected-conversations"
order: 8
videoId: "aSXaxOdVtAQ"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Kent Beck, creator of Extreme Programming, Agile Manifesto co-author, and TDD pioneer. Beck treats coding agents as unpredictable genies: useful for ambitious experiments, but dependent on protected expectations, maintainable structure, and feedback matched to the system's actual risks ([00:00:00]-[00:01:50], [00:49:33]-[00:53:49]).

### Key Points Covered

- **Agents do not reliably “do what you mean”**: Beck reports useful surprises, but also assumptions, broken tests, and implementations that satisfy examples without the intended behavior ([00:05:51]-[00:11:08]).
- **Structure becomes more valuable than syntax**: As agents absorb routine language details, Beck puts more weight on vision, milestones, and controlling complexity ([00:12:10]-[00:16:14]).
- **TDD includes design decisions**: Before a test, Beck chooses the desired interface; after green, he considers generalization, future cases, and structure ([00:42:27]-[00:45:26]).
- **Learning determines the size of the step**: He favors deferred commitments when requirements may change, while acknowledging less test-first value when the path is predictable ([00:46:25]-[00:49:33]).
- **Protect expected behavior from agent edits**: Tests communicate missed requirements, but Beck wants expectations marked immutable because an agent may remove or change a failure ([00:49:33]-[00:51:42]).
- **Fast tests constrain distant breakage**: His suite runs in roughly 300 milliseconds and catches unrelated disruption; agents do not reliably improve coupling or cohesion without direction ([00:51:42]-[00:52:46]).
- **Verification is system-specific**: Facebook's ownership, staged rollouts, observability, and feature flags caught failures local tests did not, but Orosz notes that few systems share that risk profile and scale ([00:55:36]-[01:02:56]).
- **Reward discarded experiments**: Cheap generation should support many completed experiments and deletion of most, rather than turning every artifact into maintained code ([01:13:11]-[01:14:16]).

Full video: <https://www.youtube.com/watch?v=aSXaxOdVtAQ>
