---
title: "Essential AI Agent Workflows: Context Management and Prompting Best Practices"
resourceId: 3
series: "build-crew"
episode: 1
date: "2025-09-17"
---

An agent can investigate a bug more independently when it can reproduce the failure and inspect the result of each attempted fix. In the first Build Crew Live, the Amp team shows how they provide that feedback, keep conversations focused, and carry useful context into the next task.

### Give the agent a way to check its work

* **Make reproduction repeatable.** Thorsten Ball shows a small script that launches Amp's CLI with the right settings. Instead of repeatedly copying errors back into chat, he lets the agent run the program, add logging, and inspect the output itself [06:13–11:19](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=373s).
* **Expose interactive programs through a controllable terminal.** His example uses tmux, a terminal multiplexer, because the CLI stays open waiting for input. The agent can send keystrokes and read the terminal's text rather than wait for a command to exit [11:19–13:50](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=679s).
* **Separate diagnosis from a focused design question.** Once logging identifies startup waiting on an MCP server, Ball asks Oracle, Amp's reasoning subagent, how to remove that wait. His “desk” analogy describes context: the main conversation holds the investigation, while Oracle receives the diagnosed problem and relevant files without the discarded debugging paths [13:50–17:47](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=830s).

### Make intent and context explicit

* **Check the agent's understanding before implementation.** Jason Harris starts larger requests with a goal and phases, then asks the agent to restate its mission and ask clarifying questions. He uses the response to catch ambiguity in his own prompt [19:32–24:28](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=1172s).
* **Carry decisions forward, not an entire tangled conversation.** When Ball needs a fresh thread, he asks for a file containing the problem, background, current state, and remaining work. Graham McBain describes a different approach: ask the agent to inspect the repository afresh against the next goal. Both prefer focused context, but they differ on how much conversation history to preserve [27:09–31:48](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=1629s).
* **Use a prepared starting point to compare approaches.** The team describes forking a thread after loading the relevant context, then exploring separate directions from that same starting point [31:48–33:40](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=1908s).
* **Define how a fix will be confirmed.** Ball's closing advice is to create a failing test or reproduction script, let the agent investigate, and then run the confirmation again. Other panelists similarly recommend making decisions before prompting and keeping threads small rather than filling the available context window [52:54–57:38](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=3174s).

The episode also launches Build Crew as a community for learning from shared agent conversations. The team warns that automatic secret redaction is incomplete: an agent may read a sensitive script into its conversation, so sharing a thread still requires care [47:58–49:58](https://www.youtube.com/watch?v=PLtf26LtCcQ&t=2878s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=PLtf26LtCcQ)

Build Crew: <https://buildcrew.team>
