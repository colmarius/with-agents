---
title: "No Token Limits"
resourceId: 1
series: "raising-an-agent"
episode: 2
date: "2025-03-13"
---

In episode 2 of the Sourcegraph series "Raising an Agent", CEO Quinn and software engineer Thorsten continue discussing their AI code-editing prototype. They cover its effectiveness, current failures, and the effects of not limiting operating costs.

### The Power and Pitfalls of the Agent

- Flow and Productivity: Thorsten finds the agent "addicting" because it lowers the barrier to starting code. He can write a wish list and let the agent produce the initial code instead of facing a blank page. He says this lets him "skip all of this" mental preparation before entering a coding flow [01:31].

- Where the Agent Fails (Architectural Complexity): Thorsten says the agent performs well on local, self-contained changes, such as updating a Svelte component with CSS, TypeScript, and HTML [02:47]. However, he says it struggles with architectural problems spanning multiple complex layers, such as a new feature for a VS Code extension [06:11].

- Architectural Guidance: To address a complex problem that went "off the rails," Thorsten told the failing agent to record everything it learned in a task.md file. He then started a new, "fresh" agent with the task.md and existing code changes. It identified and implemented a cleaner, seven-point architectural fix [05:19].

### No Token Limit and Cost

The hosts discuss the commercial trade-off between speed/cost and agent quality:

- Autonomy over Optimization: They argue that the "magic of the no token limit" contributes to the agent's effectiveness. Without strict optimization for token or request counts, the agent has more autonomy. For example, after a file edit fails, the system returns the error to the model. It can decide, "Oh, let me try this a different way," rather than being restricted to one or two turns [13:20].

- The Cost-Value Ratio: While the agent is currently slow and relatively expensive, they note that the cost of a human software developer is far higher [10:03]. They believe usage-based pricing models will prevail over flat-rate subscriptions to support this high-autonomy, high-efficacy approach [11:55].

### Parallel Agents and Future Trajectory

- Multiple Agents and Workspaces: The team implemented the ability to run multiple agent threads concurrently (in separate tabs) to overcome the speed bottleneck [17:41]. This naturally leads to the need for features like Git work trees and multiple workspaces, so agents working on different parts of the codebase (frontend vs. backend) can run their tools and builds in parallel without conflicting [20:49].

- Trajectory: The hosts say to examine the technology's trajectory, not only its current state [23:03]. Thorsten recounts an agent fixing his personal website from an email describing the requested change, without being told which file to edit [21:30]. They believe the technology is close to enabling a bot that turns an email into a website change. It could open a PR, send a screenshot for approval, and merge after receiving a simple "Yes it's okay" [22:26].

They conclude that the goal is a company-level "AI intern" trained on the codebase and cloned for every developer. A code review agent would serve as a safety net [28:39].

Full video: <https://www.youtube.com/watch?v=4N814ziAn4o>

Episode page: <https://ampcode.com/podcast/episode-2>
