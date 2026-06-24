---
title: "Sub-Agents & Sonnet"
resourceId: 1
series: "raising-an-agent"
episode: 6
date: "2025-06-01"
---

Episode 6 of the "Raising an Agent" series from Sourcegraph discusses the latest developments in AI coding agents, focusing heavily on Anthropic's Claude Sonnet 4 model.

### Claude Sonnet 4 Impressions

The hosts share their excitement over Sonnet 4, noting its significantly improved ability to handle more complex, end-to-end features and tasks in the Amp repository [08:03]. It has proven capable of taking on tasks that were previously considered too large for older models [08:47].

### The Power of Sub-Agents

Sonnet 4 is much more eager to utilize "task tools" or sub-agents, which allows for complex work (like modifying multiple files) to be divided and executed in parallel [12:19].

This approach offers several key benefits:

- Context Management: Each sub-agent gets its own context window, preventing the main agent from running into token limits on large, complex tasks [14:23].
- Error Isolation: If a sub-agent fails or goes "off the rails," the parent thread is not confused or burdened by that context [14:56].

### Philosophies of Agents

The discussion explores different philosophies among major LLM providers (Anthropic, Google, OpenAI).

- Anthropic's Vision: Is seen as focusing on a "practical coding agent" that reacts to the environment, wiggles its way out of problems, and can perform practical tasks like restarting a server by checking the environment [19:07].

- Other Models' Vision: Are seen as focusing more on "one-shot" or "zero-shot" application building (like a to-do app in Swift), aiming for the fewest steps to a finished product [17:45].

### Future of Background Agents (The CI-Driven Approach)

The hosts debate the difficulty of setting up full VM/container environments for background agents (like GitHub Code Spaces or OpenAI/Google solutions). Their hypothesis is that a more effective and maintainable approach is to design background agents that use Continuous Integration (CI) for feedback (checking if tests pass/fail) rather than an on-demand build environment [26:09].

Full video: <http://www.youtube.com/watch?v=Ai-ohf5RcEc>
