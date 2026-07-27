---
title: "Coding with AI: a guided starting point"
resourceId: 22
date: "2026-07-13"
---

*All English wording below is an editorial translation/paraphrase of Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo's Italian-language playlist follows coding agents through real systems work rather than presenting one fixed workflow. Its recurring subjects are architecture, specifications, model selection, behavioral testing, local inference, and the human cost of supervising more work than one person can understand.

The practical thread is expert supervision: agents can generate large implementations quickly, but the human still supplies constraints, representative experiments, product judgment, and the decision about which evidence is enough.

### Key themes

- **Review shifts toward ideas, architecture, and behavior.** Sanfilippo argues for spending less time on exhaustive line reading and more on constraints, targeted design questions, manual QA, and model-assisted testing ([00:00:01–00:03:55](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=1s)).
- **Specifications complement source code rather than replacing it.** Mature implementations retain edge cases and interactions that natural language loses, while curated related programs can teach agents reusable implementation patterns ([00:03:20–00:05:34](https://www.youtube.com/watch?v=0buzDrn0aIY&t=200s)).
- **Model evaluation belongs on representative work.** In one systems-programming test, a passing suite hid ineffective complexity and semantic breakage; Sanfilippo argues that benchmark gains can overstate practical gains ([00:12:09–00:15:13](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=729s)).
- **A persuasive explanation is not independent evidence.** He describes challenging a strong model's plausible diagnosis with observed failure behavior before it reconsidered the conclusion ([00:05:44–00:09:03](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s)).
- **Behavioral QA can explore states that fixed suites miss.** Sanfilippo proposes durable QA missions for bounded agents, followed by a separate confirmation pass before a suspected failure becomes an issue ([00:03:15–00:09:23](https://www.youtube.com/watch?v=SiOadQFUx2k&t=195s)).
- **Human attention is part of the system.** Parallel and asynchronous agents can fragment the developer's working model, extend the workday, and create chronic supervision fatigue ([00:04:03–00:09:48](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s)).

### Where to start

1. [Check the ideas, not every generated line](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=1s) for the playlist's latest and most radical review argument.
2. [Why specifications do not replace code](https://www.youtube.com/watch?v=0buzDrn0aIY&t=200s) for a concrete research-to-reference-to-implementation workflow.
3. [Automatic programming fatigue](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s) for the attention and wellbeing limits of parallel agent work.
4. [When a convincing model diagnosis is wrong](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s) for reciprocal review and the need for behavioral evidence.
5. [Testing alternative models on real systems work](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=729s) for the gap between benchmarks, passing tests, and useful implementation.
6. [When local inference makes sense](https://www.youtube.com/watch?v=IoE3Hi2zpwk&t=252s) for an end-to-end view of quality, prefill, generation, privacy, control, and hardware use.

Read the cross-playlist synthesis in [Behavior Over Explanation](/posts/behavior-over-explanation), or [watch the full Coding with AI playlist](https://www.youtube.com/playlist?list=PLrEMgOSrS_3cU-ndLheq6TZiO3gWTAszA).
