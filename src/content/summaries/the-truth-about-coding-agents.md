---
title: "The Truth About Coding Agents: Why 90% of Your Time Is Now Code Review"
resourceId: 6
date: "2025-11-25"
---

Beyang Liu argues that as agents write more code, understanding their changes becomes a developer's main constraint. In this a16z conversation, the Sourcegraph CTO and co-founder discusses review interfaces, evaluating agent behavior, and the open-model ecosystem. The title's “90%” reflects practitioner reports about time spent reviewing, not a measured industry-wide allocation [29:28–33:30](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1768s).

### Sourcegraph’s New Agent: Amp

Sourcegraph built its coding agent, **Amp**, from first principles once tool-using models became reliable enough for programming work. The company kept Amp separate from existing code-search or RAG products. This allowed it to design around models that edit files, run tools, and recover from feedback [05:39–07:30](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=339s).

* **Enterprise and hobby use cases:** Amp inherits Sourcegraph's experience with large enterprise codebases, but Liu also emphasizes hobbyists and non-programmers. One example is his dad using agents to build iPad math games, showing that the tool is not only for professional software teams [07:30–08:18](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=450s).
* **Smart and fast agents:** At the time of the interview, Liu describes a smart paid agent for harder work and a fast, ad-supported path for cheap targeted edits. The distinction reflects a tradeoff between response time, capability, and cost [08:18–11:25](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=498s), [20:09–21:56](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1209s).
* **The agent is the product abstraction:** Liu argues that users should think about the agent, not only the raw model. Behavior comes from the model plus the system prompt, tools, tool descriptions, and feedback-loop instructions [13:23–15:15](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=803s).
* **Specialized workflows matter:** Sourcegraph uses closed and open models. It sees open-weight models as particularly suitable for post-training specialized workflows such as context retrieval, library fetching, and targeted edits [21:56–27:35](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1316s).

### The Shift From Coding to Orchestrating

* **Review needs more than a file-by-file diff:** Liu wants tools that reveal the important decisions in a large change. The speakers suggest grouping edits by task and using explanations or diagrams, rather than making reviewers repeatedly expand isolated diff fragments [28:25–33:30](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1705s).
* **Orchestration still requires comprehension:** Liu expects developers to direct multiple agents while remaining able to understand their outputs. People still supply the intended outcome and choose between product and system tradeoffs [29:28–31:35](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1768s).
* **Higher output can make work less enjoyable:** Liu reports developers saying they have never been more productive but now spend most of their time on code review, which they find less satisfying than building [30:32–32:32](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1832s).

### Open Models, Tool Use, and Geopolitics

The speakers worry about US application builders becoming dependent on Chinese open-weight models. They discuss whether copyright lawsuits, developer-liability concerns, and uncertain state-by-state rules discourage US model releases. They present this as a possible explanation; Liu says he lacks inside knowledge of the research organizations [33:30–44:11](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=2010s).

### Philosophy on Agents and Reliability

* **Different execution paths can still reach a useful result:** The hosts raise the difficulty of delegating logic to a model whose behavior varies. Liu uses code search as his example: an agent may choose different searches each time yet still find the needed context. His confidence is a report about that workflow, not a guarantee for arbitrary agent tasks [15:15–17:59](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=915s).
* **Use evaluations to catch regressions, not define the whole product:** An eval tests an important workflow so a change that breaks it becomes visible. Liu warns that such tests can lag what users value. He cites autocomplete acceptance rate: optimizing for accepted suggestions did not establish that the code was ultimately useful, correct, or merged [17:10–20:09](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1030s).

### Policy and Product Implications

* **Better orchestration interfaces:** Liu expects the future IDE or CLI to become less of a text-editing surface and more of a control room for launching, monitoring, and understanding multiple agents [28:25–33:30](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=1705s).
* **Regulate applications without locking the model layer:** His policy recommendation is clear national regulation focused on applications, competition at the model layer, and avoiding rules that entrench incumbents or slow open-model progress [44:11–45:14](https://www.youtube.com/watch?v=Jxz4GJSG8ZA&t=2651s).

Full video: <https://www.youtube.com/watch?v=Jxz4GJSG8ZA>
