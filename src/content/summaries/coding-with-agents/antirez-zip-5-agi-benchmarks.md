---
title: "AGI, benchmark e altri spinosissimi problemi: ZiP 5"
resourceId: 121
date: "2026-09-08"
---

Salvatore Sanfilippo and his ZiP co-host ask what an artificial general intelligence (AGI) label actually changes for people using models. Their practical answer is that stronger capabilities do not remove uneven performance, hallucinations, or the need to evaluate the work you intend to delegate.

### Capability is not a blanket guarantee

- **An AGI label does not justify lowering your guard**: The speakers describe progress across different abilities, not a single moment when a model becomes reliable at everything. Sanfilippo argues that a model could make scientific discoveries or invent algorithms while still giving invented answers to other questions ([02:11–08:35](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=131s)).
- **Encouraging an attempt can also encourage an unsupported answer**: Sanfilippo describes a training tradeoff. Encouraging an assistant to attempt tasks despite uncertainty can help it solve problems it would otherwise abandon. But the same encouragement can push it to answer when it lacks the knowledge, rather than admit that it does not know. In his account, greater capability does not necessarily remove hallucinations ([06:26–08:35](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=386s)).
- **Confidence must stay task-specific**: They use contrasting forms of human intelligence to explain uneven model abilities, then point out that a model can shift between competence and failure even on similar problems. Repeated programming experience can build useful confidence, but one successful answer does not establish competence everywhere ([51:23–54:25](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=3083s)).

### Persistent state raises different questions

- **Text notes preserve earlier work by putting it back into context**: In the workflows they describe, an agent saves notes, retrieves history, or shortens the conversation into a summary. That information helps when it is included in the model's current context—the input available for its next response ([11:50–13:43](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=710s), [18:43–19:41](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=1123s)).
- **Sanfilippo imagines memory carried over inside the model**: He proposes an additional numerical representation of earlier work, updated as the model works and retained when its context changes. Later reasoning would depend on both the current input and this retained state. In his example, identical input could lead to different behavior because the internal memory differs ([13:43–14:33](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=823s)).

  His compiler example explains the intended benefit: keep the overall goal of building a compiler in view while working on an immediate task. Notes can also preserve that goal; the proposed difference is retaining information internally rather than supplying it again as text. This is a speculative architecture, not a demonstrated way to keep a model focused on the right goal ([14:33–18:43](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=873s)).
- **Persistent internal state could make oversight harder**: The speakers worry that models with retained internal state would be harder to monitor. Sanfilippo would rather reach useful capabilities with models that run when asked and can be stopped than build systems resembling human minds ([21:32–24:34](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=1292s)).

  They disagree about what would justify concern for an artificial system's experience, including whether biology, sensory input, and acting without an external prompt matter. They distinguish representing an emotion internally from actually feeling it; the debate provides no test that establishes consciousness or suffering ([27:40–50:18](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=1660s)).

### Evaluate useful work, but keep diagnostic tests

- **Discovery and engineering output could become stronger capability signals**: Sanfilippo predicts that frontier models will increasingly be judged by new science and technology they help create. His co-host counters that conventional testing still matters for prompt injection, alignment, and finding where models succeed or fail—including across repeated interactions and the steps an agent takes toward a goal ([1:02:32–1:06:46](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=3752s)).
- **Measure improvements to real projects**: Sanfilippo proposes asking models to make Redis faster and reduce memory use while still passing every test. He also suggests comparing models on measurable improvements across open-source projects. These are proposals, not completed comparisons ([1:06:46–1:07:47](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=4006s), [1:14:55–1:15:58](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=4495s)).
- **A measurable score can become a training target**: His co-host argues that, once success can be checked automatically, developers can use that check to train models through reinforcement learning. Longer tasks do not remove the difficulty: varied tasks are harder to create, models may exploit the scoring rules rather than fulfill the intended goal, and outcomes such as marketing results may take a year or two to observe ([1:07:47–1:09:56](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=4067s)).
- **Distinguish newly achievable work from an impressive demo**: Sanfilippo bases his favorable model judgments on making progress with optimizations that had resisted earlier models, citing Redis and Dwarf Star projects. Those are first-person reports, not controlled comparisons. Both speakers criticize generic one-shot demos as weak evidence for meeting a real project's particular requirements under human direction ([1:17:00–1:21:07](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=4620s)).
- **Give independent evaluators enough time**: They criticize launch practices that give influencers early access while, according to their reading of evaluation reports, independent safety assessors receive insufficient testing time. This is their account of the reports, not an independent audit of the release process ([1:21:07–1:23:13](https://www.youtube.com/watch?v=1-JEiQl7kzc&t=4867s)).

**Editorial takeaway:** Judge a candidate model on representative work with explicit correctness and performance checks. Treat capability gains, safety behavior, and persistent-state design as separate evaluation questions rather than collapsing them into a single AGI claim.

[Watch the full discussion on YouTube](https://www.youtube.com/watch?v=1-JEiQl7kzc). In the subtitle menu, select English (US) for the English caption track.
