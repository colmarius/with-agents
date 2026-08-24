---
title: "The Era of Compound Engineering"
resourceId: 56
date: "2026-08-20"
---

Kieran Klaassen presents compound engineering as a way to make each agent-assisted delivery improve the next. Drawing on his Cora rebuild, where he is the primary engineer with design and specialist database-engineering support, he recommends keeping human judgment at the beginning and end, automating the repeatable middle, and storing corrections and decision rationale for later runs.

This is a practitioner demonstration and product talk, not a comparative workflow study. Klaassen’s claims that he has not written code this year, that one engineer with a compounding system beats teams without one, that the plugin has hundreds of thousands of daily users, and that stored solutions reduce token use are first-person reports without task definitions, analytics, defect data, or a measured baseline. His statement that implementation is “mostly solved” describes his current workflow and should not be generalized to other systems or risk levels.

### Keep the Human Brain at Both Ends

- **The bottleneck moved from code to plans, product choices, and memory**: Klaassen describes a two-year progression in which model output first needed code review, then better plans, then better decisions about what to build. Repeating the same guidance led him from an oversized `CLAUDE.md` file to a system for retaining reusable knowledge ([00:03:48–00:05:29](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=228s)).
- **Use human judgment where it changes direction or quality**: His “human–AI sandwich” puts people in the brainstorming stage to understand the problem and in the polishing stage to apply taste and raise the bar. Planning, implementation, and review form the automatable middle ([00:05:29–00:07:26](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=329s)).
- **Treat workflow improvement as part of delivery**: Klaassen’s 50/50 rule is to spend half the effort delivering the feature and half teaching the system from anything it did wrong. This is a personal allocation heuristic, not a measured optimum ([00:07:26–00:08:16](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=446s)).
- **Store solutions where future runs can retrieve them**: He keeps solution documents in the repository and argues that known answers can reduce repeated research, correction, and review. The talk does not compare token use or maintenance cost against a workflow without this memory ([00:08:16–00:09:19](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=496s)).

### Turn Decisions and Corrections Into Workflow Inputs

- **IDEATE turns scattered demand into a ranked decision artifact**: The demonstration gathers open tickets from systems such as Linear, GitHub, Slack, and Intercom, then relates possible work to stored strategy, objectives, and earlier experiments. It produces an HTML artifact that a team can inspect rather than silently choosing the next task ([00:10:22–00:12:23](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=622s)).
- **DOC REVIEW converts unanswered questions into retained context**: The command critiques a product requirements document with targeted questions. Once people answer them, COMPOUND stores the resulting knowledge so a later review can use the answer instead of asking again ([00:12:23–00:13:20](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=743s)).
- **BRAINSTORM is deliberately interactive**: For an idea too large to specify directly, Klaassen blocks focused time, loads product differences and personas, and answers a small set of questions. The desired output is a better plan and a retained brainstorm, not a high question count ([00:13:20–00:14:25](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=800s)).
- **LFG automates the middle and leaves review evidence**: The longer-running command plans, implements, tests, dogfoods, fixes issues, opens a pull request, and adds before-and-after video or screenshots. Klaassen runs these jobs for hours and in parallel, but the talk does not show failure rates or independent quality results. He also says he sometimes reaches POLISH without knowing what the run built or which problem it addressed, exposing a tension with his “brain at both ends” prescription ([00:14:25–00:15:29](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=865s)).
- **POLISH captures taste, not basic correctness**: In the example, the implementation works, but Klaassen rejects a page containing two logo marks. He records the one-mark preference through COMPOUND so later design work can apply it without repeating the correction ([00:15:29–00:16:22](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=929s)).

### Make the Next Feature Easier

- **Extract repeated guidance even without the plugin**: Klaassen’s portable rule is “never repeat”: store recurring corrections in a form the agent can retrieve, and keep refining the middle until planning, work, and review can run predictably without supervision ([00:16:22–00:18:02](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=982s)).
- **Document why a decision happened**: Code records the result, but Klaassen argues that generalization needs the reasoning behind it. He recommends using traces and postmortems to identify the decision that caused a failure and convert that explanation into changed behavior for the next run ([00:17:11–00:19:08](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=1031s)).
- **Judge compounding by future work, not present output alone**: His closing standard is that shipping a feature should make the next feature easier rather than merely adding complexity. That requires understanding the problem before delegating and applying taste after the automated loop returns ([00:19:08–00:19:56](https://www.youtube.com/watch?v=_ehJyfHg1Vk&t=1148s)).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=_ehJyfHg1Vk).
