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

- Context Engineering: This new approach replaces "Prompt Engineering." It is vital to give the eager agent a highly specific and complete initial prompt to prevent it from going off-track or performing unwanted (and costly) work [07:49]–[08:37].

- Context Window Limitations: The Context Window is the agent's working memory, and its quality of reasoning degrades significantly as it fills up (e.g., after 60-70% capacity) [30:40]. It is crucial to keep the main agent's context focused and clean, which is often referred to as using a "clean slate" for each new task [32:22].

- The Role of Sub-Agents: To manage complex tasks and preserve the main context window, Sub-Agents are employed. These agents create a new, separate conversation space (context window) for self-contained sub-tasks, preventing the main agent from getting lost in a "rabbit hole" of intermediate steps. Sub-agents can also run in parallel [37:42], [43:01].

- The "Oracle" Agent: A new type of sub-agent, called the "Oracle," allows the primary agent (e.g., Anthropic Sonnet 4) to access other, "smarter" LLMs (like GPT-4, or 03) for higher-level reasoning, debugging, or planning. This combines the "agentic" capabilities of one model with the "intelligence" of another [48:48], [50:16].

Full video: <https://youtu.be/hAEmt-FMyHA?si=AZzhMOq_i6-95Dbh>
