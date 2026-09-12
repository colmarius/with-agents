---
title: "Software Development Now Costs Less Than Minimum Wage"
resourceId: 73
date: "2026-05-05"
---

Geoffrey Huntley argues that cheap model inference and persistent coding-agent loops are changing the economics of software implementation. His constructive recommendations are to practice deliberately, learn the mechanics by building a small agent, modernize workflows before adding AI, and spend more judgment on deciding what should be built.

### Cost and Adoption

- **The headline describes inference cost, not total software-engineering cost**: Huntley distinguishes coding from software engineering, then says looping Sonnet 4.5 produced a prior estimate of $10.42 per hour. The talk supplies neither the calculation nor evidence about correctness, review, deployment, operations, or maintenance, so the figure cannot establish the cost of delivering reliable software ([00:52–06:01](https://www.youtube.com/watch?v=7Pkwv353DeI&t=52s)).
- **Coding tools broaden who can implement an idea**: Examples from a Cursor meetup and a tour guide illustrate Huntley's claim that non-engineers can now build useful software. He still says engineering knowledge improves prompts and outcomes, while predicting that reusable skills will encode some of that advantage; neither the convergence nor its timing is demonstrated ([03:24–08:40](https://www.youtube.com/watch?v=7Pkwv353DeI&t=204s)).
- **Provisioning a tool is not the same as developing capability**: Huntley's guitar analogy treats agent use as a skill built through deliberate practice. Repeated work across models and workflows develops intuition about their different strengths and limitations; organization-wide mandates alone do not provide that experience ([12:50–15:38](https://www.youtube.com/watch?v=7Pkwv353DeI&t=770s), [23:19–25:54](https://www.youtube.com/watch?v=7Pkwv353DeI&t=1399s)).

### The Model-First Company Forecast

- **A model-first company automates job functions, not only coding tasks**: Huntley's prototype is a small group of builders—a designer, product manager, and engineer—who create agent loops around their own work and choose technologies and workflows that current models handle well ([18:59–22:26](https://www.youtube.com/watch?v=7Pkwv353DeI&t=1139s)).
- **The lean-company disruption thesis remains a forecast**: He predicts that teams of five or ten will compete with much larger incumbents, improve automatically as models improve, and compress disruption from a decade to a few years. The talk names no comparison cohort and provides no revenue, quality, margin, or survival data for these companies ([25:54–30:12](https://www.youtube.com/watch?v=7Pkwv353DeI&t=1554s)).
- **Huntley does not attribute current layoffs directly to AI**: Despite predicting future displacement, he characterizes current cuts as corrections after over-hiring and says the effects of AI have not yet been factored in. That qualification is important context for the talk's stronger labor-market rhetoric ([08:40–10:21](https://www.youtube.com/watch?v=7Pkwv353DeI&t=520s)).

### Practical Implications

- **Build a small agent to understand the mechanism**: Huntley recommends implementing a basic conversation state, model call, and tool loop, then using the result to extend itself. The exercise moves developers from consuming a coding product to understanding the state machine, context growth, and limits underneath it ([35:30–40:32](https://www.youtube.com/watch?v=7Pkwv353DeI&t=2130s)).
- **Cheaper implementation raises the value of product judgment**: If more ideas become buildable, deciding whether and how to build them becomes more important. Huntley also proposes connecting production telemetry such as OpenTelemetry and Sentry to agent-assisted repair, but the talk does not specify approval, verification, rollback, or incident controls for automated fixes ([40:32–44:56](https://www.youtube.com/watch?v=7Pkwv353DeI&t=2432s)).
- **Workflow readiness can matter more than adding AI**: Attachment-heavy, fragmented processes provide poor inputs for agents. Huntley argues that removing waste, improving information flow, and restoring direct customer accountability may be prerequisites for useful adoption rather than assuming a model can compensate for an incoherent operating system ([44:56–48:13](https://www.youtube.com/watch?v=7Pkwv353DeI&t=2696s)).
- **Learn personally, then help someone else learn**: The constructive close is to build agent literacy and mentor another person through the same exercise. This advice is separable from Huntley's categorical recommendation to leave employers that ban AI, which gives insufficient weight to security, privacy, contractual, and regulatory constraints ([48:13–49:54](https://www.youtube.com/watch?v=7Pkwv353DeI&t=2893s)).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=7Pkwv353DeI).
