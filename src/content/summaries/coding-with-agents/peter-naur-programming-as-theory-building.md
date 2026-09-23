---
title: "Peter Naur - Programming as Theory Building"
resourceId: 154
date: "2026-07-07"
---

Producing code is only part of programming: someone must also understand why the solution works, which choices shaped it, and how it relates to the problem. Felienne Hermans and Hanna Schraffenberger explore that distinction through Peter Naur's 1985 paper in the first episode of *Computer Science Off Course*.

**Evidence basis:** This summary covers the [official companion article and Hanna's written homework response](https://www.felienne.nl/csoc-s01-e01/), not a verified audio transcript. Pocket Casts offers an automatically generated transcript behind its Plus subscription, which was not accessed. No audio check or timestamp matching was performed. The AI claims below are the authors' arguments, not empirical evaluations of coding agents.

### Understanding includes explaining and adapting

- **A “theory” is usable understanding, not just a formal specification.** In Felienne's account of Naur, a programmer should be able to explain a solution, answer questions about it, and defend its choices. The code alone does not capture every rejected alternative or the reasons some future changes would be easy and others difficult. [Companion article](https://www.felienne.nl/csoc-s01-e01/)
- **Code-focused tools can leave design rationale in people's heads.** Felienne argues that IDEs emphasize editing and navigation rather than preserving the reasoning behind a program. She uses decisions about Hedy as an example of knowledge that remains difficult to communicate to other contributors. Losing that understanding makes later reconstruction costly. This is her critique of tooling, not a claim that rationale can never be recorded. [Companion article](https://www.felienne.nl/csoc-s01-e01/)

### Documentation is useful without being complete

- **Hanna challenges the strongest reading of Naur.** She agrees that programmers cannot document everything, but argues that parts of their theories can be expressed, shared, and learned. Newton's mechanics provides her counterexample: learning a theory means understanding its applications, yet that understanding need not remain confined to its originator. She worries that overstating the limits of documentation could discourage students from writing it or exclude non-programmers from contributing. [Hanna's homework response](https://www.felienne.nl/csoc-s01-e01/)
- **Conversation can supply what documents omit.** Hanna emphasizes back-and-forth discussion because it lets people ask about considerations the original programmer did not think to write down. She also questions how Naur's account fits the widespread reuse and extension of open-source code, leaving distributed theory building as an open question rather than declaring reuse ineffective. [Hanna's homework response](https://www.felienne.nl/csoc-s01-e01/)

### Using a program can change the problem you think you are solving

Hanna's homework makes the idea concrete. She initially followed a Pomodoro-timer tutorial, then abandoned it when she could no longer understand the author's decisions. Starting over helped her discover requirements specific to her own habits: a timer that counts up feels like progress, and resetting it on mouse movement or a keypress discourages computer use while reading. She stresses that many insights came from **trying the program and iterating**, not simply writing code. The example illustrates her experience; it is not evidence that rewriting is generally better than maintaining existing code. [Hanna's homework response](https://www.felienne.nl/csoc-s01-e01/)

### Implications for AI and teaching

- **Generating a solution and owning its rationale are different activities.** Felienne argues that LLM code generation does not constitute theory building in Naur's sense, including retaining why alternatives were considered and rejected. Hanna stresses understanding the real people and context a program serves, even when its immediate domain is digital. These are their interpretations of Naur and AI, not a demonstrated impossibility result for every agent system. [Companion article and homework](https://www.felienne.nl/csoc-s01-e01/)
- **Make learning and decisions visible.** Felienne proposes having students record what they learned and which approaches they rejected after an hour of programming. She also suggests using an existing program to discover further requirements, rather than assuming customers can specify everything beforehand. Hanna distinguishes beginners learning a language or IDE from experienced developers building understanding of an application domain. [Companion article and homework](https://www.felienne.nl/csoc-s01-e01/)

**Editorial takeaway for coding-agent work:** Alongside tests and working code, ask whether the responsible developer can explain the important choices and their consequences. Record useful rationale and discuss gaps with collaborators; incomplete documentation is still worth having.

### Sources

- [Full podcast episode — season 1, episode 1](https://rss.com/podcasts/computer-science-off-course/2968986/)
- [Official companion article and Hanna's homework](https://www.felienne.nl/csoc-s01-e01/) — the evidence used for this summary.
- [Peter Naur, *Programming as Theory Building*](https://pages.cs.wisc.edu/~remzi/Naur.pdf) — the paper discussed by the hosts; linked for further reading.
