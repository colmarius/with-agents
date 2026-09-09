---
title: "TDD, AI agents and coding with Kent Beck"
resourceId: 35
date: "2025-06-11"
collection: "pragmatic-engineer-selected-conversations"
order: 8
videoId: "aSXaxOdVtAQ"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Kent Beck, creator of Extreme Programming, Agile Manifesto co-author, and TDD pioneer. Beck treats coding agents as unpredictable genies: useful for ambitious experiments, but dependent on protected expectations, maintainable structure, and feedback matched to the system's actual risks ([00:00–01:50](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=0s), [49:33–53:49](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=2973s)).

### Key Points Covered

- **Agents do not reliably “do what you mean”**: Beck reports useful surprises, but also assumptions, broken tests, and implementations that satisfy examples without the intended behavior ([05:51–11:08](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=351s)).
- **Structure becomes more valuable than syntax**: As agents absorb routine language details, Beck puts more weight on vision, milestones, and controlling complexity ([12:10–16:14](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=730s)).
- **TDD includes design decisions**: Before a test, Beck chooses the desired interface; after green, he considers generalization, future cases, and structure ([42:27–45:26](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=2547s)).
- **Learning determines the size of the step**: He favors deferred commitments when requirements may change, while acknowledging less test-first value when the path is predictable ([46:25–49:33](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=2785s)).
- **Protect expected behavior from agent edits**: Tests communicate missed requirements, but Beck wants expectations marked immutable because an agent may remove or change a failure ([49:33–51:42](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=2973s)).
- **Fast tests constrain distant breakage**: His suite runs in roughly 300 milliseconds and catches unrelated disruption; agents do not reliably improve coupling or cohesion without direction ([51:42–52:46](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=3102s)).
- **Verification is system-specific**: Facebook's ownership, staged rollouts, observability, and feature flags caught failures local tests did not, but Orosz notes that few systems share that risk profile and scale ([55:36–1:02:56](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=3336s)).
- **Reward discarded experiments**: Cheap generation should support many completed experiments and deletion of most, rather than turning every artifact into maintained code ([1:13:11–1:14:16](https://www.youtube.com/watch?v=aSXaxOdVtAQ&t=4391s)).

Full video: <https://www.youtube.com/watch?v=aSXaxOdVtAQ>
