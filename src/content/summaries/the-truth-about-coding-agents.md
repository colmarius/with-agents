---
title: "The Truth About Coding Agents: Why 90% of Your Time Is Now Code Review"
resourceId: 6
date: "2025-11-25"
---

This discussion features Beyang Liu, CTO and Co-founder of Sourcegraph, in conversation with a16z, exploring the shift from code-writing to agent orchestration, why Amp was built as a standalone agent, and how open-weight models, review tooling, and policy choices shape the future of coding agents.

### Sourcegraph’s New Agent: Amp

The discussion centers on Sourcegraph's coding agent, **Amp**, which was built from first principles once tool-using models became reliable enough for real programming work. Rather than bolting agent behavior onto existing code-search or RAG products, Sourcegraph started Amp separately so the product could be shaped around models that edit files, run tools, and recover from feedback [05:39]-[07:30].

* **Enterprise and hobby use cases:** Amp inherits Sourcegraph's experience with large enterprise codebases, but Liu also emphasizes hobbyists and non-programmers. One example is his dad using agents to build iPad math games, showing that the tool is not only for professional software teams [07:30]-[08:18].
* **Smart and fast agents:** Amp has a smart paid agent for harder work and a fast, ad-supported path for cheap targeted edits. The distinction is not just price; it reflects a latency, intelligence, and workflow tradeoff [08:18]-[11:25], [20:09]-[21:56].
* **The agent is the product abstraction:** Liu argues that users should think about the agent, not only the raw model. Behavior comes from the model plus the system prompt, tools, tool descriptions, and feedback-loop instructions [13:23]-[15:15].
* **Specialized workflows matter:** Sourcegraph uses both closed and open models, and sees open-weight models as especially attractive for post-training specialized workflows such as context retrieval, library fetching, and targeted edits [21:56]-[27:35].

### The Shift From Coding to Orchestrating

A major theme is the fundamental shift in the software engineer's role.

* **90% Code Review:** As agents like Amp generate more code, the human developer's time shifts from writing syntax to reviewing agent output. Current review interfaces, including GitHub-style PRs, are not designed for huge agent-generated diffs or for helping humans quickly identify the essential decisions [28:25]-[33:30].
* **The "Orchestrator" Role:** In the next decade, engineers may function more as orchestrators who manage multiple agents. Humans remain essential for comprehension, creative intent, product tradeoffs, and final accountability, while more implementation steps become stochastic subroutines delegated to agents [15:15]-[17:10], [29:28]-[31:35].
* **Loss of "Fun":** Some developers report being more productive but finding the work less enjoyable, as they spend less time building and more time managing and reviewing code.

### Open Models, Tool Use, and Geopolitics

Beyang Liu highlights a concerning trend in the AI model landscape:

* **Rise of Chinese Open Source:** The most capable open-weight models for agentic tool use are increasingly coming from Chinese labs (e.g., Qwen, DeepSeek), while US-based open-source efforts are lagging.
* **Policy Constraints:** The lack of competitive US open-source models is attributed partly to regulatory uncertainty and liability concerns (copyright, safety), which may be making US companies "gun-shy."
* **Dependency Risk:** There is a risk that global application builders will standardize on Chinese open-weight models if the US ecosystem does not catch up, potentially leading to a long-term technological dependency.

### Philosophy on Agents and Reliability

* **Probabilistic Software:** We are entering an era where we abdicate correctness and logic to stochastic (random/probabilistic) systems. Unlike a database that always returns the same data, an agent "figures out" a problem with varying trajectories.
* **Evals as Unit Tests:** Evaluations (evals) are useful as smoke tests to prevent regressions, but they shouldn't be the sole optimization target. Real-world product "vibes" and user experience often lag behind static benchmarks.

### Policy and Product Implications

* **Better orchestration interfaces:** Liu expects the future IDE or CLI to become less of a text-editing surface and more of a control room for launching, monitoring, and understanding multiple agents [28:25]-[33:30].
* **Regulate applications without locking the model layer:** His policy recommendation is clear national regulation focused on applications, competition at the model layer, and avoiding rules that entrench incumbents or slow open-model progress [44:11]-[45:14].

Full video: <https://www.youtube.com/watch?v=Jxz4GJSG8ZA>
