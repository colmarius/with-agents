---
title: "Agentic UX: Three Ways to Let an Agent Build Its Own UI - Tyler Slaton, CopilotKit"
resourceId: 115
date: "2026-09-07"
---

Tyler Slaton, who leads open source at CopilotKit, uses a simplified Mastra incident-triage agent to demonstrate three degrees of UI generation. The useful distinction is what the developer fixes in advance: individual components, a catalog of composable components, or an environment for generating UI code.

### Main takeaways

- **Separate agent transport from rendering.** [03:08](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=188s)–[07:04](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=424s): Slaton presents AG-UI as an event protocol between agent backends and user-facing clients. Text deltas, tool-call events, and state snapshots give different agent frameworks a common stream. He distinguishes this role from MCP's tools/context and A2A's agent-to-agent communication.
- **Controlled UI maps a tool call to a component you wrote.** [08:07](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=487s)–[11:05](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=665s): a client-defined tool populates a React health card. The agent chooses when to call it and supplies data; it does not invent the component. The demo introduces the incident tools as simplified responses, not a connection to a real production outage.
- **Declarative UI lets the agent compose a bounded catalog.** [11:05](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=665s)–[14:05](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=845s): the client provides schemas and renderers, illustrated with Zod and A2UI. The agent assembles an incident workspace from those pieces. Layouts can vary across prompts or runs while the component designs stay fixed; Slaton also notes generation latency as a trade-off.
- **Open-ended generation and action approval are separate mechanisms.** [14:05](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=845s)–[15:58](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=958s): the agent generates UI in a sandbox rather than choosing only predefined components. A prompted rollback-review button leads to a separate approval card backed by Mastra's suspend/resume mechanism and a client interrupt handler. This demonstrates a human decision point, not validated rollback behavior or a security guarantee for generated code.
- **Adapt output to the surface rather than assuming identical interactivity.** [15:58](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=958s)–[19:44](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=1184s): the Channels SDK connects the same agent to Slack, with Block Kit for native structured output. For a richer flowchart, Slaton describes rendering a component in a headless browser and sending a screenshot. That path produces an image, not an interactive React application inside Slack.
- **UI interactions can provide feedback, but the learning loop is prospective.** [19:44](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=1184s)–[21:49](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=1309s): Slaton proposes tracing interactions such as approvals and denials, evaluating them, generating agent skills, and feeding those skills back into agents. He explicitly describes the self-learning SDK as something the team is building, not a demonstrated improvement in agent quality.

### Practical interpretation

Start with controlled components when predictable presentation matters. Add declarative composition when users benefit from task-specific layouts; consider open-ended generation only where that flexibility justifies a separate execution and security review. This is an editorial interpretation of the design spectrum, not a production-readiness claim. The Q&A also discusses button-triggered workflows and bidirectional shared state outside chat ([22:41](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=1361s)–[24:47](https://www.youtube.com/watch?v=mGyyTVk8Ggw&t=1487s)).

Full video: [Agentic UX: Three Ways to Let an Agent Build Its Own UI](https://www.youtube.com/watch?v=mGyyTVk8Ggw).
