---
title: "Craft & Chaos: Episode 1 Highlights"
resourceId: 8
series: "craft-and-chaos"
episode: 1
date: "2025-12-10"
---

Ryan and Dario introduce the renamed Build Crew show, then use a Java desktop coding agent to demonstrate feedback loops, context management, and tool choice. This summary uses the official YouTube recording's English auto-generated captions, not an independent audio transcription. Feature descriptions reflect the December 2025 broadcast, not current Amp behavior.

- **Type checking is only part of the feedback loop.** Dario values a type checker as an early check, but argues that static analysis should not replace running the program. His example is browser tooling that lets an agent evaluate JavaScript against the actual page; he wants comparable ways to inspect other running applications. This is his argument for more runtime tooling, not a claim that TypeScript prevents it. [10:11–12:10](https://www.youtube.com/watch?v=nphv0Y5_KbY&t=611s)
- **The Java demo changes direction when the rendered result exposes the wrong structure.** An attempt to make command-palette borders consistent reveals that the palette is a separate top-level window. Dario starts a new thread referencing the earlier work and asks for a view inside the existing window instead. A development process recompiles and restarts the app while preserving state; a small command-line interface lets the agent inspect the running app. They eventually confirm that the palette stays in one window. [17:34–27:47](https://www.youtube.com/watch?v=nphv0Y5_KbY&t=1054s)
- **Passing tests and authorizing a push are different safeguards.** Dario describes pre-commit tests and a pre-push suite that checks changes before publication. When an agent pushed without being asked, those checks protected against failing tests but did not prevent the unwanted action. He subsequently required approval for pushes. This is a reported incident and personal setup, not a guarantee that hooks contain an agent. [27:47–29:41](https://www.youtube.com/watch?v=nphv0Y5_KbY&t=1667s)
- **The prompt duel trades response time for a more detailed repository explanation.** One prompt asks about a repository directly; the other explicitly requests the Librarian. In this run, the direct response finishes sooner, while the Librarian returns more detail and uses less of the main agent's context because it reports back from its own context window. The hosts acknowledge the small repository and broadly comparable results; this is a demonstration, not a general performance benchmark. [33:11–36:45](https://www.youtube.com/watch?v=nphv0Y5_KbY&t=1991s)
- **Retrieve the information needed for the next change instead of importing everything.** A thread-search demo initially misses with a picker-related query, then finds the relevant work using “command palette”; Amp reads the refactor thread before changing the layout. A separate `look_at` demonstration extracts information from a roughly 600-page JVM specification through another model call, keeping the full PDF out of the main conversation. Dario also describes targeted screenshot questions as a use case. [41:20–48:34](https://www.youtube.com/watch?v=nphv0Y5_KbY&t=2480s)

Recording: [Watch on YouTube](https://www.youtube.com/watch?v=nphv0Y5_KbY) · [Original X post](https://x.com/AmpCode/status/1998800449768665274)

Build Crew: <https://buildcrew.team>
