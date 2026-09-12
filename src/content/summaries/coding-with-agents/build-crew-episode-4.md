---
title: "Databases, Custom Tools, & Workflow Automation"
resourceId: 3
series: "build-crew"
episode: 4
date: "2025-10-14"
---

Test data, temporary UI controls, and documentation checks can make software easier to verify, but developers often skip the setup. Thorsten Ball, Ryan Carson, Graham McBain, and guest Colleen Brady show how they use agents to do that preparation and automate recurring development tasks.

### Make the states you need to test easy to reach

* **Seed a local database with deliberate scenarios.** Ball asks Amp to create threads belonging to different users with different visibility settings so he can test a new starring feature. The agent initially guesses column names incorrectly, then inspects the schema and inserts the data. He also describes temporary UI controls that let a developer toggle billing-page states without constructing a separate test application [14:49–18:43](https://www.youtube.com/watch?v=9lsg6dU7EZQ&t=889s).
* **Use mock data while exploring a design.** Brady iterates on a page using a TypeScript data file before moving the data into a database. This lets her settle the UI's data needs without repeatedly changing the database during design work [19:33–20:34](https://www.youtube.com/watch?v=9lsg6dU7EZQ&t=1173s).
* **Start the next task from the diff.** Ball gives a fresh agent conversation `git diff` or `git show` output. The diff supplies the changes and shows which files were edited together, helping the agent pick up related work without a long verbal reconstruction [23:13–24:16](https://www.youtube.com/watch?v=9lsg6dU7EZQ&t=1393s).

### Automate a specific job, then expose it to the agent

* **Choose a specialized extractor when it fits the data.** Carson reports better results on financial PDFs with Google's Document AI than with his earlier general-model attempts. He describes defining the fields to extract, labeling examples, and calling the resulting processor through an API. His speed, cost, and accuracy assessments concern his workflow, not a comparison across all document types [25:07–30:03](https://www.youtube.com/watch?v=9lsg6dU7EZQ&t=1507s).
* **Check documentation when committing.** Brady says stale instructions repeatedly sent her agent back into the same mistakes. Her `npm run commit` workflow inspects changed files, helps prepare the commit message, and checks which documents need updating or archiving [32:59–35:41](https://www.youtube.com/watch?v=9lsg6dU7EZQ&t=1979s).
* **Distinguish a user command from an agent tool.** In the Amp version demonstrated, a custom slash command runs a script when the user invokes it and sends its output as a message. A toolbox exposes scripts that the agent can choose to call while working. Both reuse ordinary scripts; the difference is who decides when to run them [36:43–40:59](https://www.youtube.com/watch?v=9lsg6dU7EZQ&t=2203s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=9lsg6dU7EZQ)

Build Crew: <https://buildcrew.team>
