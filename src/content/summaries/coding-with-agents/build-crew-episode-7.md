---
title: "Agent workflows, better threads and more"
resourceId: 3
series: "build-crew"
episode: 7
date: "2025-11-27"
---

Focused agent tasks still depend on a human who understands the system's boundaries. Thorsten Ball demonstrates small changes with explicit constraints, while community guest Mike shows how he narrows broad codebase research into reviewed refactoring plans. Ryan Carson then demonstrates a workflow that combines fixed program steps with flexible language-model input.

### Keep implementation focused and research reviewable

* **Ask for the data the program actually needs.** Ball shows an update check that fetched every package version when it only needed the latest. After checking the alternative API response, the agent makes a small change; Ball reports reducing the response from 3.5 MB to 35 bytes. A second location needs different data, so the same optimization does not apply there [03:55–09:01](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=235s).
* **Explain architectural constraints when carrying work forward.** In a separate registry-configuration fix, Ball uses a fresh thread to copy helper logic into a standalone bootstrap script. He explicitly tells the agent not to extract shared code because that script must run independently. This is a different task from the response-size optimization [09:01–15:58](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=541s).
* **Separate description, critique, and the decision to change.** Mike has agents describe an Elixir package's features, then critique each description against the code. He reads both, records where he agrees or disagrees, and edits a proposed plan before implementation. He uses parallel agents for research and sequential agents for code changes [16:53–24:12](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=1013s).
* **Cut speculative improvements before implementation.** Mike welcomes broad ideas during research, then removes unnecessary work as the plan narrows. He concentrates his own design effort on the public API—its types, inputs, outputs, and intended use—while delegating implementation. The panel stresses that producing a long plan is not a substitute for reading it [24:12–33:26](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=1452s).
* **Maintain repository instructions like other project knowledge.** Carson splits a large `AGENTS.md` into guidance for the directories where it applies. Ball gives a concrete example of missing guidance: after a formatter changes a file, the agent must reread it rather than edit from an outdated view [37:10–40:59](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=2230s).

### Combine fixed steps with flexible input

Carson's Mastra demo replaces a rigid onboarding form with a chat. Code defines the workflow steps and expected outputs; a model interprets answers such as “I'm thinking about my options” into the required status. The workflow view exposes which step ran and what it received, making the process easier to inspect than one large system prompt [44:02–50:12](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=2642s).

Ball emphasizes the distinction between asking a model to follow a procedure and enforcing that procedure in code. A request to launch a precise number of subagents may not run consistently; explicit loops and conditions supply control while the model handles flexible interpretation. Mike mentions BAML as a complementary language for structured model calls and outputs [53:09–58:13](https://www.youtube.com/watch?v=fVx5M2GVjEQ&t=3189s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=fVx5M2GVjEQ)

Build Crew: <https://buildcrew.team>
