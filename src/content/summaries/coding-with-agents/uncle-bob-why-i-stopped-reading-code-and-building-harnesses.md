---
title: "Uncle Bob: Why I Stopped Reading Code and Building Harnesses"
resourceId: 161
date: "2026-09-24"
---

Robert “Uncle Bob” Martin tells Aviator co-founder Ankur Jain how he now supervises a coding agent mainly through running software, automated checks, and architecture diagrams. He has abandoned an elaborate multi-agent pipeline, not the disciplines used to check its output. His account concerns primarily solo work; replacing routine code review across teams remains a working hypothesis, not a demonstrated result.

*Based on the video's English auto-generated captions. Workflow results are Martin's personal observations; team predictions are conjecture.*

### Keep the Checks, Reconsider the Thresholds

- **Unit tests give the agent a second expression of intended behavior.** Martin compares tests and implementation to double-entry bookkeeping: when an agent breaks a test, it can use that feedback to recover its direction. This helps catch inconsistency, but does not establish that either expression matches the user's intent [04:35–06:37](https://www.youtube.com/watch?v=5kCISBJwoZo&t=275s), [08:22–09:17](https://www.youtube.com/watch?v=5kCISBJwoZo&t=502s).
- **Combine complexity, coverage, and mutation testing rather than treating coverage as correctness.** CRAP combines test coverage with cyclomatic complexity, a measure of branching, to flag complicated, poorly tested functions. Mutation testing deliberately changes source code and checks whether tests fail; a surviving change can expose behavior the suite does not check. Martin asks agents to address surviving mutants within limits, acknowledging that some cannot or should not be killed [05:33–08:22](https://www.youtube.com/watch?v=5kCISBJwoZo&t=333s).
- **Relaxing a metric is an experiment, not a universal target.** Martin moved his CRAP threshold from four to six and is considering twelve. He argues that agents can handle more simultaneous detail than people and watches for confusion—repairs that break other behavior—as feedback. The interview does not establish that these thresholds are safe across projects [06:37–07:26](https://www.youtube.com/watch?v=5kCISBJwoZo&t=397s), [12:08–14:59](https://www.youtube.com/watch?v=5kCISBJwoZo&t=728s).

### Humans Still Define What “Works” Means

- **Exercise the product in short loops.** To catch an agent implementing and testing the wrong interpretation, Martin runs the software, tries its interactions, and asks for corrections. He says this works well for applications whose screens and steps are quick to inspect; human-facing details still need his attention [08:22–09:17](https://www.youtube.com/watch?v=5kCISBJwoZo&t=502s), [09:17–10:22](https://www.youtube.com/watch?v=5kCISBJwoZo&t=557s).
- **Keep behavioral specifications close to human intent.** Gherkin expresses behavioral scenarios that tools can execute as acceptance tests. Martin sees a role for it in elaborate systems, but found that agent-written scenarios became increasingly nonsensical as humans disengaged. Merely reviewing plausible-sounding prose was not enough for him; his current position is to author the scenarios himself, while explicitly allowing that this position may change [09:17–12:08](https://www.youtube.com/watch?v=5kCISBJwoZo&t=557s).

### Inspect Architecture Instead of Every Line

- **Use diagrams derived from the implementation as a review surface.** Martin describes an agent-linked, interactive UML-like tool that lets him expand modules, inspect dependencies, see warnings about CRAP and mutation results, and drill down to code when necessary. He can also ask the agent for a rearranged design: that proposed diagram is not yet the source code, but a structure the agent could implement after approval. His contrast is with drawing a static design before implementation; he wants to inspect and revise what was actually built [17:52–21:23](https://www.youtube.com/watch?v=5kCISBJwoZo&t=1072s).
- **Move supervision upward without discarding design principles.** Martin still cares about partitioning, dependencies, names, and other clean-code principles. He proposes reviewing which parts should be separated and which dependencies should change through a higher-level representation. He is exploring different thresholds for agent-written code, not claiming architecture no longer matters [21:23–23:23](https://www.youtube.com/watch?v=5kCISBJwoZo&t=1283s), [32:13–34:02](https://www.youtube.com/watch?v=5kCISBJwoZo&t=1933s).

### Why He Abandoned His Multi-Agent Pipeline

- **The coordination machinery became harder to justify.** Martin built an assembly line of specification, coding, review, and architecture agents, with tightly restricted handoffs because he found that shared information blurred their distinct roles. He then noticed that he had built the harness by driving a single agent rather than using the harness itself. A sustained design discussion in which that agent challenged his proposals convinced him to reconsider the rigid division of labor. This is his explanation for abandoning that pipeline, not a controlled comparison showing that all multi-agent systems are inefficient [24:26–27:49](https://www.youtube.com/watch?v=5kCISBJwoZo&t=1466s).
- **Simplifying orchestration does not remove verification or responsibility.** For teams, Martin recommends agreed disciplines—unit tests, coverage, CRAP limits, mutation testing, and checking that those checks were performed—plus human-authored behavioral tests or hands-on product review where appropriate. Humans must still use their experience to decide whether a system is deployable and accept responsibility for signing off. His claim that routine code reading can be skipped is a proposed way to supervise work, not evidence that automated metrics guarantee correctness [23:23–24:26](https://www.youtube.com/watch?v=5kCISBJwoZo&t=1403s), [30:31–32:13](https://www.youtube.com/watch?v=5kCISBJwoZo&t=1831s).
- **Team structure remains an open disagreement.** Martin conjectures that individuals may produce larger components and collaborate mainly at narrow interfaces, but says the opposite could happen. Jain emphasizes that collaboration also builds shared mental models and exposes design trade-offs. The interview offers competing expectations, not evidence that teams should stop sharing knowledge [14:59–17:52](https://www.youtube.com/watch?v=5kCISBJwoZo&t=899s).

[Watch the full interview on YouTube](https://www.youtube.com/watch?v=5kCISBJwoZo).
