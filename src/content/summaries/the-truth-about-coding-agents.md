---
title: "The Truth About Coding Agents: Why 90% of Your Time Is Now Code Review"
resourceId: 6
date: "2025-11-25"
---

This discussion features Beyang Liu, CTO and Co-founder of Sourcegraph, in conversation with a16z, exploring the fundamental shift in software engineering driven by autonomous coding agents like Amp.

### Sourcegraph’s New Agent: Amp

The discussion centers on Sourcegraph's new coding agent, **Amp**, which was built from first principles to leverage the latest "agentic" capabilities of LLMs. Unlike previous tools integrated into existing products, Amp was developed as a standalone agent to fully utilize tool use and reasoning.

* **Two Modes:** Amp operates with two distinct agents:
  * **Smart Agent:** Uses frontier models (like Claude 3.5 Sonnet or GPT-4/5) for complex tasks. It is paid and usage-based.
  * **Fast Agent:** Uses smaller, faster models for targeted edits. Uniquely, this version is **ad-supported**, making it free for hobbyists and casual users.
* **Optimization:** Sourcegraph moves beyond just "general intelligence" by using specialized sub-agents for specific tasks (e.g., context retrieval, library fetching), often post-training smaller open-source models to handle these specific workflows efficiently.

### The Shift From Coding to Orchestrating

A major theme is the fundamental shift in the software engineer's role.

* **90% Code Review:** As agents like Amp generate more code, the human developer's time shifts from writing syntax to reviewing agent output. This has created a bottleneck, as current code review interfaces (like GitHub PRs) are not designed for reviewing massive, agent-generated changes.
* **The "Orchestrator" Role:** In the next decade, engineers will function more as orchestrators who manage multiple agents. The human remains essential for "comprehension" and defining the creative intent, but the actual implementation logic is increasingly abdicated to AI.
* **Loss of "Fun":** Some developers report being more productive but finding the work less enjoyable, as they spend less time building and more time managing and reviewing code.

### The Geopolitics of Open Source Models

Beyang Liu highlights a concerning trend in the AI model landscape:

* **Rise of Chinese Open Source:** The most capable open-weight models for agentic tool use are increasingly coming from Chinese labs (e.g., Qwen, DeepSeek), while US-based open-source efforts are lagging.
* **Policy Constraints:** The lack of competitive US open-source models is attributed partly to regulatory uncertainty and liability concerns (copyright, safety), which may be making US companies "gun-shy."
* **Dependency Risk:** There is a risk that global application builders will standardize on Chinese open-weight models if the US ecosystem does not catch up, potentially leading to a long-term technological dependency.

### Philosophy on Agents and Reliability

* **Probabilistic Software:** We are entering an era where we abdicate correctness and logic to stochastic (random/probabilistic) systems. Unlike a database that always returns the same data, an agent "figures out" a problem with varying trajectories.
* **Evals as Unit Tests:** Evaluations (evals) are useful as smoke tests to prevent regressions, but they shouldn't be the sole optimization target. Real-world product "vibes" and user experience often lag behind static benchmarks.

Full video: <https://www.youtube.com/watch?v=Jxz4GJSG8ZA>
