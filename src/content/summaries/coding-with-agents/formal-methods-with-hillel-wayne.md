---
title: "Formal methods with Hillel Wayne"
resourceId: 35
date: "2026-07-29"
collection: "pragmatic-engineer-selected-conversations"
order: 6
videoId: "KSkcgIYQy0U"
---

Hillel Wayne explains what formal methods can and cannot prove, how tools such as TLA+ and Alloy expose design errors, why property-based testing is often the more practical choice, and where AI helps or fails when producing formal specifications.

### Key Points Covered

- **Software engineering shares traditional engineering's central trade-off**: Every field balances the cost of mistakes against the speed of iteration. Software can iterate unusually quickly, while other disciplines put more effort into planning when experiments are expensive [04:32–08:49](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=272s).
- **Specification and verification answer different questions**: A specification makes the expected properties explicit; verification checks whether an implementation satisfies them. Tests cover selected values, types constrain classes of values, and formal methods try to establish a property for every possible input [18:53–21:37](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=1133s).
- **Real-world context limits full verification**: Even a request to find the file with the most lines raises questions about encodings, permissions, links, directories, and binary files. Wayne recommends reserving full code verification for small critical cores and otherwise modeling a simplified design, which can remove design errors without proving the final implementation bug-free [22:38–26:19](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=1358s).
- **TLA+ explores a system's reachable states**: Wayne demonstrates a trading model where an old offer lets Bob take an item after ownership has moved to Carol. The model checker finds the invariant violation by enumerating interleavings that are difficult for people to trace manually [29:10–36:11](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=1750s).
- **Fast counterexamples build concurrency judgment**: Production race conditions may take months to surface, while a model checker can immediately expose a race, timeout issue, or time-of-check-to-time-of-use bug. Wayne argues that this tight feedback loop gives engineers the practice needed to recognize concurrency failures [37:58–44:49](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=2278s).
- **Choose formal tools by the shape of the problem**: TLA+ fits discrete concurrent and distributed systems where any possible failure matters; Alloy is useful for static configurations and data models; other tools cover probabilistic models, code-level verification, or theorem proving. Cheap iteration and low-cost bugs are reasons not to add formal modeling [50:11–1:00:53](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=3011s).
- **Property-based testing is a practical middle ground**: Instead of proving a property for every input, it generates many examples and shrinks a failure to a comprehensible counterexample. Wayne considers it less thorough than formal verification but easier to apply and useful to more teams [1:01:43–1:05:24](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=3703s).
- **AI struggles with the most important part of a specification**: Based on his experiments as of March 2026, Wayne says models can produce formal syntax yet fail to invent meaningful properties, sometimes returning tautologies that verify nothing. Liveness properties are especially difficult, so people still need to state what a design should accomplish [1:05:24–1:07:04](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=3924s).
- **Expertise remains the strongest predictor of AI-assisted results**: Promising demonstrations come from experienced specifiers who already know how to obtain and evaluate the result. Wayne sees AI amplifying formal-methods practitioners more than autonomously producing trustworthy specifications [1:07:04–1:10:08](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=4024s).
- **Use AI for translation and explanation, not unsupervised assurance**: Wayne finds models useful for syntax repair, boilerplate changes, translating precise English properties, and condensing long error traces. Because they remain weak at inventing properties and repairing specs, users still need enough formal-methods knowledge to recognize incorrect output [1:10:57–1:12:37](https://www.youtube.com/watch?v=KSkcgIYQy0U&t=4257s).

Full video: <https://www.youtube.com/watch?v=KSkcgIYQy0U>
