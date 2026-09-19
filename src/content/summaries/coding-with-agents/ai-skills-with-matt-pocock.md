---
title: "AI Skills with Matt Pocock"
resourceId: 149
date: "2026-09-17"
---

Gergely Orosz, host of The Pragmatic Engineer podcast, interviews Matt Pocock about packaging his coding-agent workflow as skills: folders of Markdown instructions that a developer or agent can invoke [30:45–31:37](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=1845s).

*Based on English auto-generated captions, without an original-audio check. Pocock sells developer education and AI-skills courses. Sponsor segments are excluded; workflow results, model-behavior claims, and organizational recommendations are speaker-reported, not independently verified findings.*

## Align before expensive mistakes

- **Use questions to expose decisions the prompt omitted.** Pocock's Grill Me skill interviews the developer before implementation. In Orosz's subscriber-status API example, a seemingly small request opens questions about authentication, where to send the token, and how strictly to enforce rate limits. The agent does not discover the user's priorities by itself; the interview makes those choices explicit [32:40–38:04](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=1960s).
- **Match planning depth to the cost of correction.** Pocock does not recommend grilling every change. A trivial, visible edit can be implemented and judged afterward; substantial work that fits one session merits an interview; work spanning many sessions needs a longer-lived planning structure. Cheap generated prototypes can reduce uncertainty before a specification becomes a commitment [1:12:56–1:17:06](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=4376s).

## Move state out of the context window

- **Carry the plan across fresh sessions.** Pocock reports that agents make more mistakes as their context—the text available to the model—grows; he describes this as more details competing for attention. His workflow turns the interview into a specification defining completion, then divides it into one-session tickets. Each new session works from the saved plan and existing code rather than carrying the full conversation forward [41:03–43:42](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2463s).
- **Map unresolved decisions as well as implementation tasks.** Wayfinder extends the same approach to planning that cannot fit one session. Its shared map records settled decisions, parallel work, and a “fog of war” of unresolved questions; tickets can represent interviews, prototypes, research, or infrastructure work rather than code alone [44:46–47:41](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2686s).

## Give agents language and feedback they can use

- **Build thin integrated paths before complete layers.** Pocock found that agents would finish a database layer, then an application layer, then a component layer before connecting them. Prompting for a tracer bullet or vertical slice instead asks for one working path across the layers, exposing mismatches earlier. He calls these established engineering terms “leading words”; their effect is his observation, not evidence about any model's training data [51:52–55:51](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3112s).
- **Use the same domain terms in discussion and code.** In Pocock's example app, making a “ghost” lesson real also requires making its containing “ghost” section and course real. He and the agent call that chain a “materialization cascade.” Using the same term in instructions and code lets them describe changes in fewer words and find the relevant functions [56:56–59:04](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3416s).
- **Give agents feedback they can read.** Pocock argues that coding suits agents because code, documentation, and instructions are text inputs, while tests, type checks, and linters provide text feedback [48:44–50:50](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=2924s).
- **Ask for evidence that would fail without the change.** For Pocock, the value of test-driven development (TDD) with agents is seeing a test fail without the change and pass with it. He asks for that evidence even outside a strict test-first sequence. He warns that agents can write tautological tests—such as checking a constant against its assigned value—that merely repeat the implementation [1:18:08–1:21:02](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=4688s).

## Design the repository and team around repeatable learning

- **Make the repository understandable to a fresh session.** Human developers can learn workarounds for confusing code; a fresh agent session cannot rely on that accumulated experience. Pocock argues for maintaining a codebase that a newcomer can understand, rather than expecting each session to compensate for poor structure [1:00:10–1:02:18](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3610s).
- **Measure the workflow, not only the output volume.** For teams, Pocock proposes observing agent success and failure, comparing practices across repositories, and maintaining shared skills that teams can revise experimentally. These are organizational recommendations, not evidence that a particular observability system or skill set improves delivery [1:06:14–1:08:08](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=3974s).
- **A review agent still needs evaluation.** Pocock uses a separate review agent to challenge implementation quality and weak tests. He immediately identifies the remaining problem: the team still needs evidence that the reviewer is effective. Faster generation can increase technical debt even in a small codebase when local changes ignore long-term structure [1:21:02–1:22:48](https://www.youtube.com/watch?v=4DhcSPkEbwI&t=4862s).

Full video: <https://www.youtube.com/watch?v=4DhcSPkEbwI>
