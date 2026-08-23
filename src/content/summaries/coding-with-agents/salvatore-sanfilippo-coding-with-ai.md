---
title: "Coding with AI: a guided starting point"
resourceId: 22
date: "2026-08-10"
---

*All English wording below is an editorial translation/paraphrase of Italian captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo's Italian-language playlist follows coding agents through real systems work rather than presenting one fixed workflow. Its recurring subjects are architecture, specifications, model selection, behavioral testing, local inference, the changing value of implementation work, and the human cost of supervising more work than one person can understand.

The practical thread is expert supervision: agents can generate large implementations quickly, but the human still supplies constraints, representative experiments, product judgment, and the decision about which evidence is enough.

### Key themes

- **Automation changes where value concentrates without making coding trivial.** Sanfilippo separates implementation effort from the conceptual choices that determine what software should be, then argues that models automate part of a programming culture people built rather than erase it ([00:00:57–00:03:03](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=57s), [00:10:06–00:12:12](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=606s)).
- **Review shifts toward ideas, architecture, and behavior.** Sanfilippo argues for spending less time on exhaustive line reading and more on constraints, targeted design questions, manual QA, and model-assisted testing ([00:00:01–00:03:55](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=1s)).
- **Specifications complement source code rather than replacing it.** Mature implementations retain edge cases and interactions that natural language loses, while curated related programs can teach agents reusable implementation patterns ([00:03:20–00:05:34](https://www.youtube.com/watch?v=0buzDrn0aIY&t=200s)).
- **Model evaluation belongs on representative work.** In one systems-programming test, a passing suite hid ineffective complexity and semantic breakage; Sanfilippo argues that benchmark gains can overstate practical gains ([00:12:09–00:15:13](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=729s)).
- **A persuasive explanation is not independent evidence.** He describes challenging a strong model's plausible diagnosis with observed failure behavior before it reconsidered the conclusion ([00:05:44–00:09:03](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s)).
- **Behavioral QA can explore states that fixed suites miss.** Sanfilippo proposes durable QA missions for bounded agents, followed by a separate confirmation pass before a suspected failure becomes an issue ([00:03:15–00:09:23](https://www.youtube.com/watch?v=SiOadQFUx2k&t=195s)).
- **Human attention is part of the system.** Parallel and asynchronous agents can fragment the developer's working model, extend the workday, and create chronic supervision fatigue ([00:04:03–00:09:48](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s)).

### Where to start

1. [Implementation effort, software ideas, and coding agents](https://www.youtube.com/watch?v=Ye6UFH2LfXU&t=57s) for the playlist's clearest argument about what automation changes without trivializing programming.
2. [Check the ideas, not every generated line](https://www.youtube.com/watch?v=XZZ_ddBvELc&t=1s) for its sharpest review argument.
3. [Why specifications do not replace code](https://www.youtube.com/watch?v=0buzDrn0aIY&t=200s) for a concrete research-to-reference-to-implementation workflow.
4. [Automatic programming fatigue](https://www.youtube.com/watch?v=id9QG-mQSOo&t=243s) for the attention and wellbeing limits of parallel agent work.
5. [When a convincing model diagnosis is wrong](https://www.youtube.com/watch?v=WoaulxVqUUA&t=344s) for reciprocal review and the need for behavioral evidence.
6. [Testing alternative models on real systems work](https://www.youtube.com/watch?v=N-iwRfCFbHE&t=729s) for the gap between benchmarks, passing tests, and useful implementation.
7. [When local inference makes sense](https://www.youtube.com/watch?v=IoE3Hi2zpwk&t=252s) for an end-to-end view of quality, prefill, generation, privacy, control, and hardware use.

The August 16 standalone talk [The Qualities of Tomorrow’s Programmers](https://www.youtube.com/watch?v=ONeJRuhsoi4) turns the same shift in developer responsibility into practical advice on scope, system understanding, testability, reversibility, consolidation, and communication.

For the full risk-scaled acceptance workflow, read [Make the Agent Prove It](/posts/make-the-agent-prove-it), or [watch the full Coding with AI playlist](https://www.youtube.com/playlist?list=PLrEMgOSrS_3cU-ndLheq6TZiO3gWTAszA).
