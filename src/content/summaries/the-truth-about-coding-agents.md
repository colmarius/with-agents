---
title: "The Truth About Coding Agents: Why 90% of Your Time Is Now Code Review"
resourceId: 6
date: "2025-11-25"
---

Beyang Liu, CTO and Co-founder of Sourcegraph, speaks with a16z about the shift from writing code to orchestrating agents. They also discuss Amp's standalone design, open-weight models, review tools, and policy.

### Sourcegraph’s New Agent: Amp

Sourcegraph built its coding agent, **Amp**, from first principles once tool-using models became reliable enough for programming work. The company kept Amp separate from existing code-search or RAG products. This allowed it to design around models that edit files, run tools, and recover from feedback [05:39]-[07:30].

* **Enterprise and hobby use cases:** Amp inherits Sourcegraph's experience with large enterprise codebases, but Liu also emphasizes hobbyists and non-programmers. One example is his dad using agents to build iPad math games, showing that the tool is not only for professional software teams [07:30]-[08:18].
* **Smart and fast agents:** Amp has a smart paid agent for harder work and a fast, ad-supported path for cheap targeted edits. The distinction is not just price; it reflects a latency, intelligence, and workflow tradeoff [08:18]-[11:25], [20:09]-[21:56].
* **The agent is the product abstraction:** Liu argues that users should think about the agent, not only the raw model. Behavior comes from the model plus the system prompt, tools, tool descriptions, and feedback-loop instructions [13:23]-[15:15].
* **Specialized workflows matter:** Sourcegraph uses closed and open models. It sees open-weight models as particularly suitable for post-training specialized workflows such as context retrieval, library fetching, and targeted edits [21:56]-[27:35].

### The Shift From Coding to Orchestrating

A major theme is the shift in the software engineer's role.

* **90% Code Review:** Liu says that as agents such as Amp generate more code, developers shift from writing syntax to reviewing output. Current interfaces, including GitHub-style PRs, are not designed for large agent-generated diffs or for quickly identifying the main decisions [28:25]-[33:30].
* **The "Orchestrator" Role:** In the next decade, engineers may function more as orchestrators who manage multiple agents. Humans remain essential for comprehension, creative intent, product tradeoffs, and final accountability, while more implementation steps become stochastic subroutines delegated to agents [15:15]-[17:10], [29:28]-[31:35].
* **Loss of "Fun":** Some developers report being more productive but finding the work less enjoyable, as they spend less time building and more time managing and reviewing code.

### Open Models, Tool Use, and Geopolitics

Beyang Liu highlights a concerning trend in the AI model landscape:

* **Rise of Chinese Open Source:** Liu says the most capable open-weight models for agentic tool use increasingly come from Chinese labs (e.g., Qwen, DeepSeek), while US-based open-source efforts lag.
* **Policy Constraints:** The lack of competitive US open-source models is attributed partly to regulatory uncertainty and liability concerns (copyright, safety), which may be making US companies "gun-shy."
* **Dependency Risk:** There is a risk that global application builders will standardize on Chinese open-weight models if the US ecosystem does not catch up, potentially leading to a long-term technological dependency.

### Philosophy on Agents and Reliability

* **Probabilistic Software:** Liu says software is entering an era that delegates correctness and logic to stochastic (random/probabilistic) systems. Unlike a database that always returns the same data, an agent "figures out" a problem through varying trajectories.
* **Evals as Unit Tests:** Evaluations (evals) are useful as smoke tests to prevent regressions, but they shouldn't be the sole optimization target. Real-world product "vibes" and user experience often lag behind static benchmarks.

### Policy and Product Implications

* **Better orchestration interfaces:** Liu expects the future IDE or CLI to become less of a text-editing surface and more of a control room for launching, monitoring, and understanding multiple agents [28:25]-[33:30].
* **Regulate applications without locking the model layer:** His policy recommendation is clear national regulation focused on applications, competition at the model layer, and avoiding rules that entrench incumbents or slow open-model progress [44:11]-[45:14].

Full video: <https://www.youtube.com/watch?v=Jxz4GJSG8ZA>
