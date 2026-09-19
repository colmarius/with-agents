---
title: "AI Skills with Matt Pocock"
resourceId: 149
date: "2026-09-17"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Matt Pocock about turning his coding-agent workflow into inspectable Markdown skills. Pocock's main argument is that agents need more than instructions: they need alignment before consequential work, durable state across sessions, fast feedback, and codebases structured so a fresh agent can understand them. His workflow results and model-behavior claims are practitioner observations rather than controlled findings ([30:45–38:04](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=1845s), [41:03–43:42](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2463s)).

*Based on English auto-generated captions, without an original-audio check. Pocock sells developer education and AI-skills courses. The summary excludes sponsor segments and treats product, adoption, and productivity claims as speaker-reported unless stated otherwise.*

## Align before expensive mistakes

- **Use questions to expose decisions the prompt omitted.** Pocock's Grill Me skill interviews the developer before implementation. In Orosz's subscriber-status API example, a seemingly small request opens questions about authentication, token placement, rate limits, and exact response behavior. The agent does not discover the user's priorities by itself; the interview makes those choices explicit ([32:40–38:04](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=1960s)).
- **Match planning depth to the cost of correction.** Pocock does not recommend grilling every change. A trivial, visible edit can be implemented and judged afterward; substantial work that fits one session merits an interview; work spanning many sessions needs a longer-lived planning structure. Cheap generated prototypes can reduce uncertainty before a specification becomes a commitment ([1:12:56–1:16:04](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=4376s)).

## Move state out of the context window

- **Keep the destination and the next step in durable artifacts.** Pocock turns an interview into a specification, then splits it into tickets intended to fit separate agent sessions. Each session starts with less conversational history while retaining state in the repository and environment. His estimate of where model performance degrades is experiential, but the workflow's mechanism is concrete: preserve decisions outside the model and reload only the bounded task ([41:03–43:42](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2463s)).
- **Map unresolved decisions as well as implementation tasks.** Wayfinder extends the same approach to planning that cannot fit one session. Its shared map records settled decisions, parallel work, and a “fog of war” of unresolved questions; tickets can represent interviews, prototypes, research, or infrastructure work rather than code alone ([44:46–47:41](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2686s)).

## Give agents language and feedback they can use

- **Build thin integrated paths before complete layers.** Pocock found that agents would finish a database layer, then an application layer, then a component layer before connecting them. Prompting for a tracer bullet or vertical slice instead asks for one working path across the layers, exposing mismatches earlier. He calls these established engineering terms “leading words”; their effect is his observation, not evidence about any model's training data ([51:52–55:51](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3112s)).
- **Create a shared domain language.** In Pocock's example, naming a nested ghost-to-real conversion a “materialization cascade” gives both developer and agent a compact term that can also appear in code. The benefit is not jargon for its own sake: consistent names shorten instructions and make relevant code searchable ([56:56–59:04](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3416s)).
- **Treat tests and tools as evidence channels.** Pocock argues that coding works well for agents because instructions, code, type checks, linters, and tests can all return text. He uses TDD less as a memory aid and more to force a failure before the fix and demonstrate that the implementation changes behavior. He also warns that agents can write tautological tests that merely restate the implementation ([48:44–50:50](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2924s), [1:18:08–1:20:12](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=4688s)).

## Design the repository and team around repeatable learning

- **A codebase is part of the agent's runtime.** Human developers can accumulate memory about awkward structure; a fresh agent session cannot. Pocock therefore treats clear boundaries, stable terminology, tests, and maintainable structure as operational inputs to agent performance, not polish to add after generation ([1:00:10–1:02:18](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3610s)).
- **Measure the workflow, not only the output volume.** For teams, Pocock proposes observing agent success and failure, comparing practices across repositories, and maintaining shared skills that teams can revise experimentally. These are organizational recommendations, not evidence that a particular observability system or skill set improves delivery ([1:06:14–1:08:08](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3974s)).
- **Independent review moves rather than removes the trust boundary.** Pocock uses a separate review agent to challenge implementation quality and weak tests. He immediately identifies the remaining problem: the team still needs evidence that the reviewer is effective. Faster generation can increase technical debt even in a small codebase when local changes ignore long-term structure ([1:21:02–1:22:48](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=4862s)).

Full video: <https://www.youtube.com/watch?v=4DhcSPkEbwI>
