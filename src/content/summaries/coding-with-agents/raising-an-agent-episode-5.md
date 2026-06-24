---
title: "Power Tool Philosophy"
resourceId: 1
series: "raising-an-agent"
episode: 5
date: "2025-06-01"
---

Episode 5 of the "Raising an Agent" series from Sourcegraph focuses on the philosophy, design, and recent developments of the Amp coding agent. The conversation, featuring Dorsten, Quinn, and Bang, centers on key lessons learned over five weeks in the rapidly evolving landscape of AI coding agents, with an emphasis on building a practical, powerful tool rather than a magical, over-engineered solution.

### The Philosophy of Building an Agent (Amp)

- Model-Centric Design: The speakers affirm that success with a coding agent is primarily determined by the capabilities of the underlying Large Language Model (LLM), not by complex, hidden logic. When an agent hits an error, the system simply sends the error message back to the model, which then decides the next step (e.g., trying a different command) [03:50]. They caution against believing there's one "weird trick" in the system prompt [04:13], emphasizing that the model is the biggest differentiator [05:49].

- A "Power Tool" Mentality: Amp is designed as a power drill or a senior engineer—a tool to be leveraged for productivity—rather than a "wishing well" that can build a full application from a vague, five-word prompt [11:23]. It's meant to take on "grunt work" like fixing parentheses, renaming files, and managing imports, allowing human developers to focus on higher-level tasks [01:00:01].

- The Codebase Must Bend: The team is deliberately building for users who are willing to change their existing habits to get the most value from the agent. They argue that the codebase will eventually bend to the agent's needs, not the other way around. Examples include splitting up large files, as LLMs struggle with editing 4,000+ line files, even if they fit in the context window [01:03:45].

### Best Practices and "Meta-Strategy" for Invocation

The discussion highlighted emerging patterns and best practices for successfully using agents:

- Feedback Loops: Agents need constant feedback to succeed, just like human programmers. This includes surfacing language server diagnostics, running builds, and executing tests in a granular way [29:19]. An agent can even be instructed to open a browser and interact with a frontend component (e.g., pressing space in a demo game) to confirm its changes work [31:16].

- Planning is Key: For complex tasks, users found success by first instructing the agent to write out a plan file with all the to-dos, and then directing it to execute those steps one by one [16:46].

- Clean Output: Verbose build tools or excessive warnings are detrimental to the agent, as too much noise in the context window can trip it up [32:38].

### Future Outlook and Model Evolution

- The Model Arms Race: The developers believe that the design of the most powerful AI coding agents will ultimately steer the evolution of future LLMs, as the agent's interaction patterns generate the high-quality training data that model labs will use [35:13]. They want LLM providers to disclose the specific tools and formats they trained on [38:15].

- "Wooden Scaffolding": The product philosophy is to act as a lightweight, wooden scaffolding around the model [46:56]. This means avoiding over-engineering modes and configurations that are based on today's model flaws, ensuring the agent can easily adapt or "jump out" when a better model is released [55:05].

- Next Frontiers: The team is focused on remote execution workflows, enabling users to kick off long-running tasks from anywhere and later revisit the generated diffs, addressing the issue of distraction and attention management [55:58]. They also see a future in more robust multi-agent workflows and the integration of deterministic hooks to enforce simple guardrails without confusing the core reasoning loop [00:01:01:04].

The full video is available here: <http://www.youtube.com/watch?v=vSBGKF3vHe0>
