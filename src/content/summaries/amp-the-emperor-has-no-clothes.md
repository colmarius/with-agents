---
title: "Amp: The Emperor Has No Clothes"
resourceId: 2
date: "2025-09-26"
---

Quinn Slack and Thorsten Ball explain why Sourcegraph built Amp as a new coding agent rather than another mode in Cody. Their September 2025 bet is that agents will change how developers work, so the product, team, and surrounding tools must be easy to change too. For users, their advice centers on supplying missing information, keeping tasks focused, and making agent work easy to test and review.

### Build a product that can change with the models

- **A tool-using agent changes permissions and costs.** Ball describes experimenting with Claude 3.7, giving it tools to inspect and change files rather than keeping it within Cody's assistant workflow. That required new expectations about what the agent could do and how much its work would cost; they did not think Cody's existing customer contracts and subscription model fit the new product. [00:52–03:48](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=52s)
- **A small team moves quickly on top of shared infrastructure.** The team reports shipping about 15 times a day, using Amp to build Amp, and pushing directly to `main` without formal peer review. Sourcegraph's security and infrastructure teams support that pace. Ball later clarifies that the developer still reviews the code their agent produces: no formal peer review does not mean no human review. [09:24–12:22](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=564s), [1:05:39–1:06:44](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=3939s)
- **The terminal and editor solve different problems.** VS Code provided distribution, automatic updates, and rich visual output. A command-line client could reuse terminal tabs, split panes, per-session environments, and remote connections instead of rebuilding those features. At recording time the team kept both clients, despite considering removing the extension to reduce maintenance. [13:13–20:03](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=793s)
- **Model integration matters more than a model selector.** Ball argues that a model needs tools and instructions suited to how it was trained. Simply swapping models can give a misleading impression of their capabilities. The team already uses multiple providers and expects model choice increasingly to happen behind task-specific workflows—for example, a constrained interaction that benefits from a faster model. [23:59–30:49](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=1439s)

### Give the agent information and feedback

- **Extra automation can hide unreliable steps.** Ball calls the software around a model its scaffolding: instructions, tools, and control logic that may become unnecessary as models improve. He warns that a chain of model-driven steps can look like a predictable program while still failing intermittently. His percentages illustrate the risk; they are not measured failure rates. [31:45–36:43](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=1905s)
- **A better-worded prompt cannot supply facts only you know.** Slack and Ball criticize prompt enhancers on this basis: rephrasing a request cannot recover missing intent. They also warn that exposing many tools through MCP, the Model Context Protocol, adds tool descriptions to the model's input and can make tool selection slower, costlier, and harder to debug. [39:47–42:41](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=2387s)
- **Start focused conversations rather than carrying every detour forward.** Compaction replaces conversation history with a shorter account, which can lose important detail. The speakers recommend deliberate context management: decide what information the next task needs, preserve useful findings, and start a new thread when the old one has gone off course. This still requires human judgment about what matters. [42:41–46:33](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=2561s)
- **Make the application observable to the agent.** Tests only help if the agent can run the right ones; browser tests also need a working way to log into the app. Ball describes combining browser, client, and database logs so the agent can trace a failure without piecing together separate streams. These are proposed and observed improvements to the feedback loop, not guarantees of correctness. [50:39–55:50](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=3039s)

### More agents increase the need for review

- **Parallel work is limited by the human's ability to catch up.** Ball describes losing track of background tasks. Slack's goal is an interface that helps a user understand a change, inspect a deployed preview, make a decision, and move to the next task. The discussion also identifies overlapping file edits and merge conflicts as coordination problems; it does not present them as solved. [1:03:40–1:08:40](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=3820s)
- **Engineering judgment includes deciding what is worth building.** Ball expects typing code to become less valuable relative to understanding the business, product, and user experience. In his account, agents make implementation faster, but people still need to choose the goal and recognize whether the result serves it. [1:16:48–1:20:35](https://www.youtube.com/watch?v=b4rOVZWLW6E&t=4608s)

Full video: <https://www.youtube.com/watch?v=b4rOVZWLW6E>
