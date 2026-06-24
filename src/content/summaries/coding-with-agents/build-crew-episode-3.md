---
title: "Future of Agentic Workflows"
resourceId: 3
series: "build-crew"
episode: 3
date: "2025-10-08"
---

## Custom Tools, Agent Delegation, and the Future of Agentic Workflows

Episode 3 of "Build Crew Live" features discussions on various aspects of agentic coding, including personal changes of mind, building custom tools for Amp, the evolution of agents, and effective strategies for working with them.

### Icebreaker: Changing Minds This Week

The episode kicks off with a quick "round the robin" where each participant shares something they've changed their mind about recently:

* **Mike**: Switched from using JSON fixtures for API testing to direct live testing against the API, finding it faster and better with current tools.
* **Camden**: Reconsidered using voice commands to interact with Amp, noting improved prompting but also self-consciousness.
* **Thorsten**: Is in the process of changing his mind about using PRD (Product Requirements Document) or spec-driven workflows. He's exploring having Amp analyze code and write specs to be referenced in other conversations.

### Super Whisper and Voice Tools

A question from the audience leads to a discussion about voice transcription tools:

* **Super Whisper vs. Aqua**: While Aqua is mentioned, the panel generally prefers Super Whisper, especially after downloading larger local models for improved accuracy.
* **Accuracy over Speed**: The importance of accuracy in transcription is highlighted, as errors can lead to needing to restart tasks.
* **Custom Modes and Cognitive Overhead**: The use of custom modes in Super Whisper for summarization or cleanup is discussed, with some participants finding it introduces too much cognitive overhead and preferring a simpler "talk and do its thing" approach.

### Building with Agentic Coding Tools

The core of the episode focuses on practical tips and insights into agentic coding:

* **Thorsten's Tip: Custom Toolboxes for Amp**: Thorsten shares his experiment with building a single-website interface for an agent that can access custom tools. He demonstrates how Amp can create and use JavaScript scripts to automate tasks like generating coupon codes on platforms like Lemon Squeezy. The key takeaway is keeping scripts plain and external to Amp, with a thin wrapper for agent interaction. This allows for easy committal to a repo and sharing within the community.
* **The Problem with MCP (Model Context Protocol)**: The discussion touches on the limitations of MCP, describing it as "too heavy weight" and "terrible for the internet" due to long-running processes, dependency management, and tool explosion. The concept of a **Minimal Context Protocol (MCP2)** is suggested as an alternative.
* **Lua as a Sandbox for Agents**: An emerging idea in the Elixir world involves using a single Lua tool to allow agents to write and chain Lua scripts for various actions, acting as a sandboxed execution engine and enabling efficient, chained calls to multiple files as a single tool call.
* **Camden's Tip: Encouraging Agents to Write Code**: Camden emphasizes the effectiveness of recent models (like GPT-5 and Sonnet 4.5) in writing small, one-off scripts to perform broad tasks across a codebase. He provides an example where Amp debugged an issue by building a bash script to manage logs, configure settings, and run Amp in a script. This highlights the agent's ability to self-correct and automate debugging processes.

### The Future of Agents: Background and Cloud Agents

The conversation shifts to the potential of background and cloud agents:

* **Turbocharging Loops**: Background agents are seen as the next step to "turbocharge" iterative processes, allowing users to kick off tasks on their phones and receive drafts or research results later.
* **Changing Workflows and Delegation**: The panel discusses how background agents will change the way people work, moving towards a model where humans delegate tasks and review drafts, acting more like "project managers".
* **Different Interaction Models**: A distinction is drawn between CLI agents (interactive, pair-programming style) and cloud agents (asynchronous, request-based with a clear outcome in mind). Cloud agents are currently seen as more suitable for less complicated work or research.
* **The "Swiss Cheese Model" for Agents**: Camden proposes a "Swiss cheese model" for fleets of agents, where each agent has unique knowledge gaps but layering them together allows for self-correction and comprehensive solutions.
* **Single-threaded Limitations and Future Evolution**: Current background agents are viewed as single-threaded and heavy, often spinning up Docker containers. The future envisions a human interacting with one agent, which then delegates to hundreds of specialized agents in the background.
* **Human Feedback Loop**: The importance of the human as a "tool" for the agent, providing a crucial feedback loop for keeping agents on track, is emphasized.
* **Cost and Accessibility**: While acknowledging the potential expense of future large-scale agent systems, there's optimism about models becoming cheaper and more accessible, ensuring broader participation.
* **Defining AGI and Human Work**: A discussion on the difficulty of defining Artificial General Intelligence (AGI) and the challenge of comparing agent performance against human work, which itself is hard to consistently define.

### Mike's Coding Tip: Proving Correctness and Self-Correction

Mike shares his coding tip:

* **Proving Correctness Beyond Unit Tests**: When building a task, it's crucial to think through how to prove its correctness beyond basic unit tests. This can involve scripts or logs that show the agent is performing as expected.
* **Long-Running Threads and Self-Correction**: Mike aims to construct threads that operate as long as possible, often by writing a spec, having the agent figure out a plan, and then executing it with sub-agents. He uses a technique where he teaches Amp to fix itself through cycles of custom tooling and live fixture tests against LLM APIs.
* **Sequential Sub-Agents**: Mike advocates for running sub-agents sequentially rather than in parallel to avoid context mixing and to ensure each step builds on the previous output.
* **Delegation as a Core Skill**: Mike concludes by emphasizing that **leadership and delegation** are the most important skills to learn right now for effectively guiding and creating agents, applying human-to-human interaction principles to the agent world.

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=VJB6n7r44EQ&list=PL6zLuuRVa1_g_ieW4LnrwhVo6bNHmRwEA)

Build Crew: <https://buildcrew.team>
