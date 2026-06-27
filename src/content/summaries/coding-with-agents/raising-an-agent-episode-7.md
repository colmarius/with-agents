---
title: "Context Engineering"
resourceId: 1
series: "raising-an-agent"
episode: 7
date: "2025-06-01"
---

Episode 7 of the "Raising an Agent" series from Sourcegraph discusses strategies for working with coding agents, focusing on the shift from older chat-based LLMs to autonomous agentic development.

### Key Points Covered

- The Agentic Mindset: The hosts stress that a coding agent is a "power tool" and should be treated like a full-time engineer, not a junior engineer. They function as autonomous "little robots" that, once given a task, will use tools to edit files, run tests, and self-correct until the task is complete [04:15]–[06:16].

- Up-Front Intent: Agent prompting needs clearer initial direction because the agent acts instead of stopping to ask clarifying questions. The more specific the task, constraints, and desired outcome, the less likely the agent is to wander into expensive or unwanted work [07:49]–[08:37].

- Context Engineering: The context window is the agent's working memory, and its reasoning quality degrades as it fills up. Context engineering means keeping each task's context focused, using clean threads, and avoiding irrelevant files or stale conversation history [30:40], [32:22].

- The Role of Sub-Agents: To manage complex tasks and preserve the main context window, Sub-Agents are employed. These agents create a new, separate conversation space (context window) for self-contained sub-tasks, preventing the main agent from getting lost in a "rabbit hole" of intermediate steps. Sub-agents can also run in parallel [37:42], [43:01].

- The "Oracle" Agent: Oracle uses OpenAI o3 as a reasoning, review, and planning sub-agent while Sonnet remains the main implementing agent. This combines Sonnet's practical tool-use loop with a separate model optimized for deeper analysis [48:48], [50:16].

Full video: <https://www.youtube.com/watch?v=p8a0PePNWlA>
