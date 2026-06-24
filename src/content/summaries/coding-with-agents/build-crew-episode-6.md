---
title: "Amp features & specialized AI tools"
resourceId: 3
series: "build-crew"
episode: 6
date: "2025-10-28"
---

## Build Crew Live: Episode 6 Highlights

In this episode, the Build Crew team (Thorsten Ball, Ryan Carson, and Graham McBain) is joined by community member **Brian Jones**, a flooring representative who taught himself to code with AI. The group discusses new Amp features, the pros and cons of specialized AI tools, and the philosophy of working with agents.

### The "Changed Your Mind" Round

The team kicks off with their weekly segment on what they've changed their minds about in AI development.

* **Thorsten** is leaning towards making Amp **more opinionated**. He argues that the team has learned so much about what works (and what doesn't) that they should encode those best practices into the product's features, like the new `/handoff` command.
* **Brian** has changed his mind on **sub-agents**, finding that the main agent consistently produces higher-quality, more detailed results. He compares using sub-agents to a game of "telephone," where the original intent gets lost.
* **Ryan** is all in on **Gemini 2.5 Flash**. He's found it to be an "unbelievable model" that is extremely fast, cheap (10 cents vs. half a cent for a similar task on Sonnet 4.5), and excellent at tool calling.
* **Graham** now believes Amp is building **"AI for developers"** rather than just a "coding agent." He sees Amp as a broader suite of specialized AI tools (like Librarian for search, Oracle for debugging) that help with all aspects of a developer's job.

### Guest Showcase: Building the Tool to Build the Tool

Build Crew member Brian Jones, who comes from the flooring industry, shares the remarkable project he's been building.

* **The Problem:** Brian started learning to code in February to build a complex app for his industry. He quickly ran into the major pitfalls of long-term AI projects: managing context, tracking tasks, and handing off work from one session to the next.
* **The Solution:** Instead of building the app, he first built a **custom project management tool specifically for AI-driven development**.
* **The Tool:** Brian's app manages projects, tasks, and context. It tracks every session, stores important decisions, saves context "handoffs" (similar to Amp's new feature), and even visualizes code dependencies. He built this complex tool entirely with the help of AI agents to solve his own workflow problems.

---

### Agentic Coding Tips & New Features

The team demonstrates new tools and workflows for getting the most out of AI agents.

* **Amp Tip: Referencing Other Threads**
    Thorsten demos a brand new, experimental Amp feature: the ability to **reference other threads as context**. By simply pasting a thread URL, the agent uses a tool (`read_thread`) and a Gemini model to summarize that entire conversation and extract the specific information you asked for, all without bloating your new context window.

* **Ryan's Tip: "Roll Your Own" Evals**
    Ryan shares his experience trying to use a third-party SaaS tool for evaluating his AI's legal-correctness. After finding it too complex and incompatible with his stack, he used Amp to **build his own custom evaluation system** in just two days. His new tool allows him to version his prompts and tool descriptions, run batch tests, and have his legal officer review every output for correctness, giving him a perfectly tailored solution.

### Final Thoughts: Be Nice to Your AI

The episode concludes with a philosophical discussion about whether you should be polite to AI. The consensus: yes. The team agrees that treating the agent like a partner or teammate, using "please" and "thank you," and even giving it compliments ("great job so far, but...") subjectively and anecdotally leads to better, more cooperative results.

Brian's final advice to new, non-technical builders: "Find your tribe... The door is wide open right now. You can learn whatever you want to learn... you can just do stuff now. So go do stuff."

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=1AJ7Ts2G2x0&list=PL6zLuuRVa1_g_ieW4LnrwhVo6bNHmRwEA)

Build Crew: <https://buildcrew.team>
