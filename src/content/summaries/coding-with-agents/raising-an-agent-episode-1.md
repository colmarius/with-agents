---
title: "Feedback Loops"
resourceId: 1
series: "raising-an-agent"
episode: 1
date: "2025-06-01"
---

Episode 1 of the "Raising an Agent" series from Sourcegraph, featuring CEO Quinn and software engineer Torsten, serves as a diary of their excitement while prototyping a new AI-fueled code editing tool. They discuss the surprising capabilities of the latest large language models (LLMs) in a developer environment and the shift in their approach to building AI tools.

### Key Takeaways from the Prototype

- The Power of LLMs as Agents: They were shocked by how easy it was to reach a mind-blowing prototype state, attributing the success to the underlying models' ability to strategically use the tools they are given [06:40].

- Creative Problem Solving: The agent demonstrated impressive resourcefulness. In one instance, when a direct file edit failed, the model decided to create a new file with the intended content and then use a terminal command to move/overwrite the old file to complete the goal [08:44].

- Refactoring by Example (The Recording Feature): A new feature allows a developer to "record" a complex refactor, and the agent then uses that diff—even of single-character edits—to mimic and apply the change across the rest of the codebase [03:10].

- The Importance of Feedback: They realized the crucial element to unlocking agent potential is providing real-world feedback like a human developer gets. Giving the agent compiler errors, test results, and linter messages allows it to debug its own code. In one case, the agent fixed a null pointer error by inserting its own debug statements to trace the values, behaving "just like us" [10:27], [16:50].

- They conclude that the path to a perfect code agent is now primarily a software engineering problem—improving speed, cost, tool descriptions, and feedback loops—rather than waiting solely for fundamental model breakthroughs [18:57].

Full video: <http://www.youtube.com/watch?v=Cor-t9xC1ck>
