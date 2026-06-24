---
title: "No Token Limits"
resourceId: 1
series: "raising-an-agent"
episode: 2
date: "2025-06-01"
---

Episode 2 of the "Raising an Agent" series from Sourcegraph, featuring CEO Quinn and software engineer Torsten, continues the discussion on prototyping their AI-fueled code editing agent. They focus on the agent's effectiveness, where it currently fails, and the groundbreaking implications of not limiting its operational costs.

### The Power and Pitfalls of the Agent

- Increased Flow and Productivity: Torsten finds the agent "addicting" because it lowers the barrier to entry for coding. Instead of having a blank page, he can start by writing a wish list and letting the agent write the initial code. This allows him to "skip all of this" mental preparation traditionally required to enter a state of coding flow [01:31].

- Where the Agent Fails (Architectural Complexity): The agent performs exceptionally well on local, self-contained changes (e.g., updating a Svelte component with CSS, TypeScript, and HTML) [02:47]. However, it struggles with hairy architectural problems that span multiple complex layers, such as building a new feature for a VS Code extension [06:11].

- Architectural Guidance: To solve a complex problem that went "off the rails," Torsten guided the process by instructing the failing agent to write up everything it learned into a task.md file. A new, "fresh" agent was then started, given the task.md and the existing code changes, and it successfully identified and implemented a cleaner, seven-point architectural fix [05:19].

### The Magic of No Token Limit and Cost

The hosts discuss the commercial trade-off between speed/cost and agent quality:

- Autonomy over Optimization: They argue that the "magic of the no token limit" is key to the agent's effectiveness. When not strictly optimizing for the number of tokens or requests, the agent gains autonomy. For example, if a file edit fails, the system sends the error back to the model, which can autonomously decide, "Oh, let me try this a different way," instead of being restricted to one or two turns [13:20].

- The Cost-Value Ratio: While the agent is currently slow and relatively expensive, they note that the cost of a human software developer is far higher [10:03]. They believe usage-based pricing models will prevail over flat-rate subscriptions to support this high-autonomy, high-efficacy approach [11:55].

### Parallel Agents and Future Trajectory

- Multiple Agents and Workspaces: The team implemented the ability to run multiple agent threads concurrently (in separate tabs) to overcome the speed bottleneck [17:41]. This naturally leads to the need for features like Git work trees and multiple workspaces, so agents working on different parts of the codebase (frontend vs. backend) can run their tools and builds in parallel without conflicting [20:49].

- Mind-Blowing Trajectory: The hosts stress that one must look at the trajectory, not just the snapshot, of the technology [23:03]. Torsten shares an anecdote: an agent correctly fixed his personal website after being fed a simple email detailing the required change, all without being explicitly told which file to edit [21:30]. They believe the technology is close to enabling an email-to-website-change bot that can open a PR, send a screenshot for approval, and merge the change after receiving a simple "Yes it's okay" [22:26].

They conclude that the goal is to create a company-level "AI intern"—an agent trained on the codebase that can be cloned and given to every developer, with a code review agent serving as a safety net [28:39].

Full video: <https://youtu.be/5-LPfATZjyM?si=Kyw7Ka8MAkdA6XaP>
