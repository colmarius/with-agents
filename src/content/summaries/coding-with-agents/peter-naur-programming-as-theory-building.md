---
title: "Peter Naur - Programming as Theory Building"
resourceId: 154
date: "2026-07-07"
---

Producing code is only part of programming: someone must also understand why the solution works, which choices shaped it, and how it relates to the problem. Felienne Hermans and Hanna Schraffenberger explore that distinction through Peter Naur's 1985 paper in the first episode of *Computer Science Off Course*.

**Evidence basis:** This summary covers the [official companion article and Hanna's written homework response](https://www.felienne.nl/csoc-s01-e01/), not a verified audio transcript. Pocket Casts offers an automatically generated transcript behind its Plus subscription, which was not accessed. No audio check or timestamp matching was performed. The AI claims below are the authors' arguments, not empirical evaluations of coding agents.

### Understanding includes explaining and adapting

- **A “theory” is usable understanding, not just a formal specification.** In Felienne's account of Naur, a programmer should be able to explain a solution, answer questions about it, and defend its choices. The code alone does not capture every rejected alternative or the reasons some future changes would be easy and others difficult. [Companion article](https://www.felienne.nl/csoc-s01-e01/)
- **Code-focused tools can leave design rationale in people's heads.** Felienne argues that IDEs emphasize editing and navigation rather than preserving the reasoning behind a program. Losing that understanding makes later reconstruction costly. [Companion article](https://www.felienne.nl/csoc-s01-e01/)

### Documentation is useful without being complete

- **Hanna challenges the idea that a program's theory cannot be expressed.** She agrees that documentation cannot capture everything, but argues that parts of a programmer's understanding can be written down, shared, and learned. She points to Newton's mechanics: people can learn its laws and their applications from written explanations. She worries that treating this knowledge as unshareable could discourage students from documenting their work and exclude non-programmers from contributing. [Hanna's homework response](https://www.felienne.nl/csoc-s01-e01/)
- **Conversation can supply what documents omit.** Hanna emphasizes back-and-forth discussion because it lets people ask about considerations the original programmer did not think to write down. She also asks how programmers develop shared understanding when they reuse and extend open-source code. [Hanna's homework response](https://www.felienne.nl/csoc-s01-e01/)

### Using the program reveals requirements

Hanna began with a Pomodoro work-and-break timer tutorial, but started over when she could no longer understand the author's design decisions. Trying her own version revealed what helped her focus: counting up felt like making progress, rather than running out of time. She also noticed that difficult reading made her reach for email or a browser. Resetting the timer to zero on any mouse movement or keypress discouraged those interruptions. She attributes most of these insights to **using and revising the program**, not simply writing code. [Hanna's homework response](https://www.felienne.nl/csoc-s01-e01/)

### Implications for AI and teaching

- **Generating code is not the same as understanding its design.** Felienne argues that an LLM does not build and retain an understanding of why a solution was chosen over alternatives. Hanna argues that even digital products serve real people: deciding which needs matter requires understanding those people and the context in which they use the software—an understanding she argues AI lacks. [Companion article and homework](https://www.felienne.nl/csoc-s01-e01/)
- **Make learning and decisions visible.** Felienne proposes having students record what they learned and which approaches they rejected after an hour of programming. She also suggests using an existing program to discover further requirements, rather than assuming customers can specify everything beforehand. Hanna distinguishes beginners learning a language or IDE from experienced developers building understanding of an application domain. [Companion article and homework](https://www.felienne.nl/csoc-s01-e01/)

**Editorial takeaway for coding-agent work:** Alongside tests and working code, ask whether the responsible developer can explain the important choices and their consequences. Record useful rationale and discuss gaps with collaborators; incomplete documentation is still worth having.

### Sources

- [Full podcast episode — season 1, episode 1](https://rss.com/podcasts/computer-science-off-course/2968986/)
- [Official companion article and Hanna's homework](https://www.felienne.nl/csoc-s01-e01/) — the evidence used for this summary.
- [Peter Naur, *Programming as Theory Building*](https://pages.cs.wisc.edu/~remzi/Naur.pdf) — the paper discussed by the hosts; linked for further reading.
