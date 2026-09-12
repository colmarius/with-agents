---
title: "The Qualities of Tomorrow’s Programmers"
resourceId: 47
date: "2026-08-16"
---

Salvatore Sanfilippo asks how developers can contribute when agents write the code and someone else sets product direction. He argues that developers still need to reject unnecessary complexity, understand the system, and make it testable. His advice shifts attention from reading every generated line to governing what the software does and how its parts fit together.

### From Reading Lines to Governing the System

- **Junior learning and production work need different workflows**: Sanfilippo recommends that juniors use models as tutors while writing varied small programs themselves. For experienced developers, he argues that reading every generated line cannot keep pace with generation and should become a targeted activity. That is his proposed review policy; appropriate review depth still depends on failure impact and the checks available ([01:54–05:10](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=114s)).
- **Cheap implementation increases the value of saying no**: More complexity may be supportable with agents, but it is not free. Sanfilippo recommends resisting low-value features and spending the additional capacity on fewer, more important capabilities ([06:07–08:09](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=367s)).
- **Know the system well enough to suggest a better design**: In a Redis sorted-set implementation, Sanfilippo says he directed the agent to use a specialized table and store strings inside the tree rather than pay for separate pointers. The agent had been optimizing without finding those changes itself. He reports roughly 40% lower memory use than a comparable implementation; that result is his report, not a controlled comparison of human and agent contributions ([08:09–11:15](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=489s)).

### Build for Evidence and Change

- **Design the system to be testable**: Sanfilippo recommends modular boundaries, extensive high-level integration tests, and execution infrastructure that can run checks at different granularities, from fast change-level feedback to full release matrices. He treats disposable test tooling as a good use of cheap code generation ([12:12–15:10](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=732s)).
- **Recognize decisions that are expensive to reverse**: Language, framework, core architecture, quality gates, and production schema choices can force rewrites or difficult migrations. He recommends flagging these decisions early, increasing reversibility where possible, and applying more scrutiny before committing ([15:10–18:05](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=910s)).
- **Stop feature work when the foundation becomes fragile**: Sanfilippo argues that agent-assisted refactoring can make consolidation faster, but not automatic. Developers still need to recognize accumulated debt, argue for a pause, and resist using agent speed as a reason to keep adding complexity ([18:05–20:13](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=1085s)).
- **Communicate the system model to people as well as agents**: Sanfilippo treats explanation as a core engineering skill: justify rejected features, onboard colleagues into the major components, and use design discussions to transfer the team's shared model rather than leaving each person to reconstruct it from code or an agent ([20:13–22:20](https://www.youtube.com/watch?v=ONeJRuhsoi4&t=1213s)).

### Related talks

- Sanfilippo: [AI FOMO, Part 1](https://www.youtube.com/watch?v=j-Hh4i5R7aI) and [Is Code Only a Detail?](https://www.youtube.com/watch?v=Ye6UFH2LfXU).
- Armin Ronacher: [A Year of Agents](https://www.youtube.com/watch?v=u_k9cwDNPcM).

[Watch the full video on YouTube](https://www.youtube.com/watch?v=ONeJRuhsoi4).
