---
addedDate: '2026-07-17'
title: "Parallel Experiments and Slop Forks"
resourceId: 21
series: "state-of-agentic-coding"
episode: 4
date: "2026-03-12"
---

Armin Ronacher and Ben Vinegar discuss stronger coding models, low-oversight side projects, and work outside the IDE. They also consider the quality and licensing questions raised by test-driven software reimplementations.

### Key Points Covered

- **The current bottleneck is using the capability, not choosing a model**: Armin says recent Codex and Opus releases are both good enough. His harder problem is deciding how to use the increased capacity. Ben says his commit count rose sharply again with these models [09:15–12:22](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=555s).
- **Contribution graphs can overstate core-product productivity**: Both speakers report more commits, but attribute much of the increase to experiments and side projects running alongside their primary work rather than equivalent growth in business output [14:12–17:01](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=852s).
- **Remote terminals reduce dependence on the IDE**: Ben describes running agents over SSH and tmux on separate machines, then building a small screenshot-sharing utility to restore a feedback path he missed from local graphical tools [17:01–19:47](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=1021s).
- **Low-oversight projects can progress in the background**: Armin gives examples including hardware-control rewrites, an online game, and a clean-room readline experiment. He says their scopes let agents make progress without constant context switching [19:47–22:50](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=1187s).
- **More output does not guarantee better software**: The speakers distinguish experimental throughput from production quality and point to rising CPU, memory, and reliability problems in software they use as reasons to question the current quality bar [23:43–26:30](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=1423s).
- **A "slop fork" reimplements a project's behavior instead of copying its code**: Armin's examples are VNext, which reimplements the Next.js API against Next's test suite, and Vercel's Just Bash, which implements Bash in TypeScript. He links both to the earlier agent-built browser and compiler: an agent works against tests or known behavior until it has written a new implementation from scratch [26:30–28:40](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=1590s).
- **Clean-room reimplementation puts pressure on license strategy**: Armin explains that agents can make behavior-compatible alternatives easier to produce, but explicitly leaves the copyright and enforceability questions to courts and legal experts [28:40–32:25](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=1720s).
- **Adoption and maintenance will decide whether a fork matters**: Armin expects most generated forks to be worse at first. He argues that a fork can still become valuable if it attracts users and maintainers, gets security fixes, and becomes a standard that many people use [33:27–37:27](https://www.youtube.com/watch?v=7bMqicE5Jmk&t=2007s).

Full video: <https://www.youtube.com/watch?v=7bMqicE5Jmk>
