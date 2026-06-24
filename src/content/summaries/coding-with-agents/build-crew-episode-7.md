---
title: "Agent workflows, better threads and more"
resourceId: 3
series: "build-crew"
episode: 7
date: "2025-11-27"
---

## Build Crew Live: Episode 7 Highlights

In this episode, the Build Crew discusses strategies for optimizing agent workflows, deep refactoring techniques, and the importance of documentation. They also explore agent orchestration frameworks like Mastra and BAML.

### Optimizing Agent Workflows with Small Threads

Torsten shared his strategy for getting higher-quality code from agents by keeping interactions focused and modular.

* **Small, Focused Threads:** Instead of long, winding conversations, use short invocations with clear inputs and outputs. Smaller context windows often lead to better reasoning and less degradation of quality.
* **The "Bob and Weave" Technique:** An iterative process where the developer directs the agent, reviews the output, and then pivots to a new, clean thread for the next task. For example, Torsten used one thread to optimize an API request (reducing data fetched from 3.5MB to 35 bytes) and a completely separate thread to port that logic to a different part of the codebase where code sharing wasn't possible.
* **Be the Director:** You still need to know your architecture. The agent is the implementer, but the human must direct it to avoid pitfalls like inappropriate code sharing between isolated systems.

### Deep Refactoring with "Research Flows"

Mike demonstrated a sophisticated "research flow" for modernizing legacy codebases, specifically an Elixir package.

* **The Oracle Approach:** Use a high-reasoning model (like GPT-4o or o1) to analyze the existing code and write detailed Markdown reports on every feature.
* **Critique and Roast:** After the initial analysis, spin up sub-agents to "roast" the code and find design weaknesses.
* **Markdown-First Development:** Mike noted a **5:1 ratio of Markdown to Code**. He generates extensive plans, critiques, and architectural documents before writing a single line of code. This "measure twice, cut once" approach prevents the agent from hallucinating inefficient solutions.
* **Opinionated API Design:** When refactoring, Mike focuses his energy on strictly defining the public API surface (types, inputs, outputs) and lets the agent handle the underlying implementation details.

### The Importance of `agents.md`

The crew discussed the critical role of documentation files (often called `agents.md` in Amp) that live in the repository.

* **Context is King:** These files act as the agent's "long-term memory" or "spidey sense," containing project-specific rules (e.g., "always run this specific formatter," "this directory is for frontend only").
* **Maintenance:** These files degrade over time as the project evolves. Regularly updating them prevents the agent from making repetitive mistakes or trying to run outdated commands.

### Agent Orchestration Frameworks (Mastra & BAML)

Ryan showcased **Mastra**, an open-source framework for building agentic workflows using TypeScript.

* **Deterministic vs. Non-Deterministic:** The group discussed the future of agents being a mix of strict, deterministic code (state machines, loops, conditions) and fuzzy, non-deterministic LLM reasoning. Frameworks like Mastra help bridge this gap by defining strict workflow steps (e.g., "Ask Divorce Status") while allowing the LLM to handle the flexible parsing of user intent.
* **Observability:** Using frameworks allows for better debugging and visualization of complex agent steps, rather than relying on a "black box" system prompt.
* **BAML:** Mike mentioned **BAML** as a complementary tool—a specialized language for generating structured LLM prompts and handling complex data outputs.

### Build Crew Leaderboard

The session concluded with a look at the community leaderboard, tracking metrics like "Diff Maxer" (most lines changed) and "Agent Whisperer" (most messages sent), gamifying the process of coding with AI agents.

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=fVx5M2GVjEQ)

Build Crew: <https://buildcrew.team>
