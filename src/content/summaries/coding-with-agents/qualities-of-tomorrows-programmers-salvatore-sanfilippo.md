---
title: "The Qualities of Tomorrow’s Programmers"
resourceId: 47
date: "2026-08-16"
---

*All English wording below is an editorial translation/paraphrase of Italian auto-generated captions; nothing is a verbatim quotation.*

Salvatore Sanfilippo asks how developers who do not control product direction can stay valuable when agents generate code faster than people can read it. His answer emphasizes pushing back on low-value scope, maintaining a strong mental model of the system, designing for testability, recognizing hard-to-reverse choices, pausing feature work to consolidate fragile foundations, and communicating architecture.

The talk's strongest throughline is that faster implementation does not remove human responsibility for scope, consequential system decisions, or evidence that the system works. Its broad recommendation against routine line-by-line review is a practitioner judgment, not a universal rule: the appropriate review depth still depends on failure impact, available independent checks, and how well the team understands the system. His Redis memory-reduction example is also a first-person report rather than a controlled comparison of human and agent contributions.

### From Reading Lines to Governing the System

- **Junior learning and production work need different workflows**: Sanfilippo recommends that juniors use models as tutors while writing varied small programs themselves. For experienced developers working in production, he argues that routinely reading every generated line cannot keep pace with generation and should become a targeted activity rather than the default ([00:01:54–00:05:10](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=114s)).
- **Cheap implementation increases the value of saying no**: More complexity may be supportable with agents, but it is not free. Sanfilippo recommends resisting low-value features and spending the additional capacity on fewer, more important capabilities ([00:06:07–00:08:09](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=367s)).
- **Keep a strong mental model even when the agent writes the code**: In his Redis pull-request example, Sanfilippo says detailed knowledge of the data structure let him propose specialized representations and memory-layout choices the agent had not found on its own. He reports roughly 40% lower memory use than a comparable implementation; the talk does not provide enough measurement detail to generalize that result ([00:08:09–00:11:15](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=489s)).

### Build for Evidence and Change

- **Design the system to be testable**: Sanfilippo recommends modular boundaries, extensive high-level integration tests, and execution infrastructure that can run checks at different granularities, from fast change-level feedback to full release matrices. He treats disposable test tooling as a good use of cheap code generation ([00:12:12–00:15:10](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=732s)).
- **Recognize decisions that are expensive to reverse**: Language, framework, core architecture, quality gates, and production schema choices can force rewrites or difficult migrations. He recommends flagging these decisions early, increasing reversibility where possible, and applying more scrutiny before committing ([00:15:10–00:18:05](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=910s)).
- **Stop feature work when the foundation becomes fragile**: Sanfilippo argues that agent-assisted refactoring can make consolidation faster, but not automatic. Developers still need to recognize accumulated debt, argue for a pause, and resist using agent speed as a reason to keep adding complexity ([00:18:05–00:20:13](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=1085s)).
- **Communicate the system model to people as well as agents**: Sanfilippo treats explanation as a core engineering skill: justify rejected features, onboard colleagues into the major components, and use design discussions to transfer the team's shared model rather than leaving each person to reconstruct it from code or an agent ([00:20:13–00:22:20](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=1213s)).

### How It Connects

This talk turns two of Sanfilippo's recent arguments into a role description. [AI FOMO, Part 1](https://www.youtube.com/watch?v=j-Hh4i5R7aI) emphasizes domain knowledge, model intuition, and communication as durable capabilities; [Is Code Only a Detail?](https://www.youtube.com/watch?v=Ye6UFH2LfXU) argues that cheaper implementation raises the relative value of ideas and architecture. Armin Ronacher's [A Year of Agents](https://www.youtube.com/watch?v=u_k9cwDNPcM) is a useful counterweight: it also favors targeted review and human responsibility, while warning against maintaining systems people cannot explain.

[Watch the full video on YouTube](https://www.youtube.com/watch?v=ONeJRuhsoi4).
