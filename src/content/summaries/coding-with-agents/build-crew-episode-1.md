---
title: "Essential AI Agent Workflows: Context Management and Prompting Best Practices"
resourceId: 3
series: "build-crew"
episode: 1
date: "2025-09-17"
---

Episode 1 of "Build Crew Live" video features the Amp team introducing their new community, Build Crew, and discussing their personal best practices for prompting and working with AI agents.

### **Launching the Build Crew Community**

The core of the episode is the announcement of **Build Crew**, a free community for developers shipping with AI agents, launched by the Amp team.

* **Purpose:** The community aims to connect developers, share knowledge, and provide support for the challenges of building with agents.
* **Features:** Joining gives access to a private Twitter DM group, a leaderboard, and badges, and offers a \$100 credit for those who use Amp.
* **Shared Learning:** The team hopes sharing public threads will become a standard way to move the industry forward and combat "imposter syndrome" by normalizing the learning process.

### **AI Agent Best Practices & Workflow Strategies**

The Amp team shared several practical and advanced techniques for effective agent interaction:

* **Provide a Feedback Loop:** The agent can do a much better job if it can reproduce a bug or get feedback on its code, similar to how a developer uses simple scripts to reliably reproduce an issue.
* **The "Desk" Analogy for Context:** Think of the context window as your desk. Keep all necessary information there, but move high-level, complex questions over to the "senior engineer"—the **Oracle** (a smart reasoning sub-agent)—to prevent cluttering your main thread's context.
* **Handling Long-Running Processes:** Use a terminal multiplexer like **tmux** to start processes that wait for user input (like a CLI), allowing the agent to remote control the terminal and interact with the process.

### **Structuring Prompts for Success**

Effective prompt structure is key to managing complexity and ensuring clarity:

* **Goal, Phases, and Confirmation:** Start with a clear goal (TLDR), break the task into phases, and ask the agent to **repeat its mission** back to you before coding. This acts as a proofreading/chain-of-thought mechanism to ensure alignment.
* **External Memory for Context:** When starting a new thread or reaching a context limit, ask the agent to summarize all the relevant information (problem, background, current state, next steps) and write it into a **markdown file**. A new thread can then simply reference this file, maintaining long-term memory.
* **Forking Threads:** Use the "fork" feature to freeze the context of a thread and create variations from a specific message point. This lets you experiment with different approaches without modifying the core context.

### **The Team's Pro-Tips for Developers**

The team concluded with quick-fire advice for improving agent development:

* **Slow Down and Plan:** Take the time to think through the problem and let the agent plan the solution. This slower approach often leads to smoother, faster results.
* **Confirm the Fix:** When asking the agent to fix a bug, instruct it to confirm the fix with a new test or a reliable confirmation step.
* **"Don't Get Drunk on Tokens":** Even with massive context windows, don't try to fill them up. Keep your threads small, fork, and compact when necessary to reduce noise and maintain focus.
* **Ask for Anything:** Do not limit what you ask an agent to do; you would be surprised at what the latest models are capable of achieving.

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=VkV4p-eDPmM&list=PL6zLuuRVa1_g_ieW4LnrwhVo6bNHmRwEA&)

Build Crew: <https://buildcrew.team>
