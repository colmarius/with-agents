---
title: "Feedback Loops"
resourceId: 1
series: "raising-an-agent"
episode: 1
date: "2025-03-06"
---

In episode 1 of the Sourcegraph series "Raising an Agent", CEO Quinn and software engineer Thorsten document their work on a new AI code-editing tool. They discuss its capabilities in a developer environment and how their approach to building AI tools is changing.

### Key Takeaways from the Prototype

- LLMs as Agents: They say they were surprised by how easily they reached the prototype state. They attribute the result to the underlying models' ability to use the tools they receive strategically [06:40].

- Problem Solving: In one instance, a direct file edit failed. The model created a new file with the intended content, then used a terminal command to move or overwrite the old file and complete the goal [08:44].

- Refactoring by Example (The Recording Feature): A new feature allows a developer to "record" a complex refactor. The agent uses that diff—even of single-character edits—to mimic and apply the change across the rest of the codebase [03:10].

- Feedback: They say agents need the same real-world feedback that human developers receive. Compiler errors, test results, and linter messages allow the agent to debug its own code. In one case, it fixed a null pointer error by inserting debug statements to trace values, behaving "just like us" [10:27], [16:50].

- They conclude that improving the code agent is now primarily a software engineering problem involving speed, cost, tool descriptions, and feedback loops. In their view, progress does not depend solely on model breakthroughs [18:57].

Full video: <https://www.youtube.com/watch?v=auVu08nXKOw>

Episode page: <https://ampcode.com/podcast/episode-1>
