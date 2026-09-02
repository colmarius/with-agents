---
title: "Future of Agentic Workflows"
resourceId: 3
series: "build-crew"
episode: 3
date: "2025-10-08"
---

## Custom Tools, Agent Delegation, and the Future of Agentic Workflows

In episode 3 of "Build Crew Live", the panel discusses changes of mind, custom tools for Amp, agent development, and ways of working with agents.

### Icebreaker: Changing Minds This Week

The episode uses a quick "round the robin" in which each participant shares something they recently changed their mind about:

* **Mike**: Switched from using JSON fixtures for API testing to direct live testing against the API, finding it faster and better with current tools.
* **Camden**: Reconsidered using voice commands to interact with Amp, noting improved prompting but also self-consciousness.
* **Thorsten**: Is in the process of changing his mind about using PRD (Product Requirements Document) or spec-driven workflows. He's exploring having Amp analyze code and write specs to be referenced in other conversations.

### Super Whisper and Voice Tools

A question from the audience leads to a discussion about voice transcription tools:

* **Super Whisper vs. Aqua**: The panel mentions Aqua but generally prefers Super Whisper, especially after downloading larger local models for better accuracy.
* **Accuracy over Speed**: The panel prioritizes transcription accuracy because errors can require restarting tasks.
* **Custom Modes and Cognitive Overhead**: The panel discusses custom Super Whisper modes for summarization or cleanup. Some participants find that these add too much cognitive overhead and prefer a simpler "talk and do its thing" approach.

### Building with Agentic Coding Tools

The main discussion covers practical approaches to agentic coding:

* **Thorsten's Tip: Custom Toolboxes for Amp**: Thorsten describes an experiment that gives an agent a single-website interface to custom tools. He demonstrates Amp creating and using JavaScript scripts to automate tasks such as generating coupon codes on Lemon Squeezy. He recommends keeping scripts plain and external to Amp, with a thin wrapper for agent interaction. This makes them easier to commit to a repository and share.
* **The Problem with MCP (Model Context Protocol)**: The panel describes MCP as "too heavy weight" and "terrible for the internet" because of long-running processes, dependency management, and tool explosion. It jokingly riffs on a lighter "minimal context protocol" rather than presenting MCP2 as a concrete proposal.
* **Lua as a Sandbox for Agents**: The panel describes an idea from the Elixir community: one Lua tool that lets agents write and chain scripts for various actions. It acts as a sandboxed execution engine and combines calls to multiple files into one tool call.
* **Camden's Tip: Encouraging Agents to Write Code**: Camden says recent models such as GPT-5 and Sonnet 4.5 can write small, one-off scripts for broad codebase tasks. In his example, Amp debugged an issue by building a bash script to manage logs, configure settings, and run Amp. He presents this as agent self-correction and automated debugging.
* **Memory Is Still Unsettled**: The group agrees that `AGENTS.md` files help, but do not yet provide coworker-like memory. Agents can remember the wrong things, and it remains hard to decide what should be persisted across threads [19:36]-[22:38].

### The Future of Agents: Background and Cloud Agents

The conversation shifts to the potential of background and cloud agents:

* **Faster Iteration**: The panel says background agents could "turbocharge" iterative processes. Users could start tasks on their phones and receive drafts or research results later.
* **Changing Workflows and Delegation**: The panel expects background agents to change work by moving people toward delegating tasks and reviewing drafts, more like "project managers".
* **Different Interaction Models**: The panel distinguishes between interactive, pair-programming-style CLI agents and asynchronous, request-based cloud agents with a clear intended outcome. It currently sees cloud agents as more suitable for less complicated work or research.
* **The "Swiss Cheese Model" for Agents**: Camden proposes a "Swiss cheese model" for agent fleets. Each agent has different knowledge gaps, but he says layering them allows self-correction and more complete solutions.
* **Single-threaded Limitations and Future Evolution**: Current background agents are viewed as single-threaded and heavy, often spinning up Docker containers. Mike predicts that future workflows may involve a human interacting with one agent that delegates to many specialized agents in the background.
* **Human Feedback Loop**: The panel describes the human as a "tool" that provides feedback to keep agents on track.
* **Cost and Accessibility**: The panel acknowledges that future large-scale agent systems may be expensive but expects models to become cheaper and more accessible.
* **Defining AGI and Human Work**: The panel discusses the difficulty of defining Artificial General Intelligence (AGI). It also notes that comparing agent performance with human work is difficult because human work itself lacks a consistent definition.

### Mike's Coding Tip: Proving Correctness and Self-Correction

Mike shares his coding tip:

* **Proving Correctness Beyond Unit Tests**: Mike says a task needs ways to establish correctness beyond basic unit tests. These can include scripts or logs showing that the agent performs as expected.
* **Long-Running Threads and Self-Correction**: Mike tries to create threads that operate as long as possible. He often writes a spec, asks the agent to plan, and then has it execute with sub-agents. He uses cycles of custom tooling and live tests, such as creating Fly.io infrastructure and publishing test packages, to check that the work behaves correctly.
* **Sequential Sub-Agents**: Mike advocates for running sub-agents sequentially rather than in parallel to avoid context mixing and to ensure each step builds on the previous output.
* **Delegation as a Core Skill**: Mike says **leadership and delegation** are currently the most important skills for guiding and creating agents. He applies principles from human interaction to agents.

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=VoZvTi27_Io)

Build Crew: <https://buildcrew.team>
