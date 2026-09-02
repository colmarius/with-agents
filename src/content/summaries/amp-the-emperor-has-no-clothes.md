---
title: "Amp: The Emperor Has No Clothes"
resourceId: 2
date: "2025-09-26"
---

Quinn and Thorsten from Sourcegraph discuss the evolution from Cody to Amp on the Latent Space podcast. They cover their approach to building coding agents and their view of software development's future.

### The Origin of Amp

* **From Cody to Amp** [00:20]: Thorsten explains that Amp emerged from a new project that started when Claude 3.5 was released. They aimed to give the model tools and let it "go nuts" without the constraints of Cody.
* **Resetting Expectations** [02:16]: They realized Amp was a different product that required resetting user expectations, especially around permissions and cost. It moved from a $20 subscription model to hundreds of dollars per month.
* **Technical Freedom** [04:32]: Thorsten says separating Amp from Sourcegraph's platform gave the team freedom to ship 15 times a day. He presents that pace as useful for rapid iteration and adaptation as AI development changes.
* **Focus on the Best Coding Agent** [03:22]: Quinn says the sole focus is building the "best coding agent," which he believes is a bigger endeavor than anything that came before. He says this requires moving fast and learning continuously.

### Internal Operations and Product Strategy

* **Funding Experimentation** [08:26]: Sourcegraph's existing product and customer trust enable it to fund "crazy stuff" like Amp. Amp operates with minimal bureaucracy around consistent pricing, user model choice, and compliance.
* **Small Team** [09:38]: The Amp core team is small (around eight people) and works in "personal project mode," pushing directly to main without formal code reviews. They ship 15 times a day, creating fast feedback loops and dogfooding.
* **Platform Support** [11:31]: Sourcegraph's existing platform teams handle foundational concerns such as security and infrastructure. This allows the Amp team to concentrate on the client and user experience.

### Product Structure: CLI vs. VS Code Extension

* **Initial VS Code Focus** [13:31]: They started with a VS Code extension due to its ease of distribution and proximity to the editor.
* **Emergence of CLI** [14:16]: The popularity and flexibility of CLI tools (SSH, multiple split panes, different environments per tab) surprised them, leading to a rebuild of their CLI client.
* **No Clear Winner** [16:48]: An internal poll showed a 50/50 split between VS Code and CLI users, indicating advantages and disadvantages to both. Younger users tend to prefer the editor, while older users might lean towards the terminal [17:23].
* **Reducing Complexity** [19:08]: The team continually evaluates whether to remove features or reduce complexity. At one point, they considered eliminating the VS Code extension before new developments made them reconsider.

### The Future of Models and Agent Interaction

* **Beyond Model Choice** [21:11]: They say the current focus is not maximizing revenue or user adoption because the field is changing rapidly. They prioritize building the best coding agent, even if that means omitting features users *think* they want, such as model choice or specific buttons, that would slow the team down [22:06].
* **Models as Implementation Details** [25:55]: They envision the specific model becoming an implementation detail. Different background models would handle different tasks, such as faster models for specific modes.
* **Multi-Model Strategy** [30:11]: Amp already uses models from Anthropic, OpenAI, and Google. It is close to integrating a fast open-source model to use different providers' respective strengths.
* **New Models and Open Source** [27:39]: They argue that rapid model development, including open-source options such as Qwen 3 Coder and Kimi K2, makes reliance on one provider or older models unsustainable. A sizable share of the internal team now uses models other than Sonnet for their primary Amp interaction [28:36].
* **The Problem of Non-Deterministic LLMs** [34:43]: They identify LLM non-determinism as a challenge. Products built on LLMs can appear to work but may fail in a small percentage of cases, creating a "hangover" effect for users.

### Building for the Frontier: User Expectations and Feedback Loops

* **Targeting Early Adopters** [39:25]: Amp explicitly targets users "at the frontier" of agentic coding who are curious and open to learning new workflows, rather than mainstream users who might expect traditional software behaviors [40:21].
* **"Bullshit Features"** [40:43]: Features like "prompt enhancers" are deemed ineffective because LLMs need fundamental information, not just phrasing tricks. Similarly, elaborate custom sub-agents or MCP servers can lead to high token usage, slow performance, and debugging challenges.
* **The "Harness" or "Scaffolding" Around the Model** [32:47]: Their strategy is to build flexible "scaffolding" that can adapt or be replaced as models improve. They avoid investing heavily in features that might become redundant.
* **The Value of Short Threads and Context Engineering** [46:20]: They encourage users to start many small threads and strictly control context to avoid "context rot" and problems with compacting conversations. They warn that compaction might lose important information or past failures [44:42].
* **Optimizing for Agent Consumption** [54:53]: They describe a trend toward optimizing tooling and logs for agents as well as humans. Examples include unified, verbose JSON-line logs that agents can process.

### The Outer Loop: Orchestration and Future of Development

* **Challenges of Multi-Agent Workflows** [01:03:52]: Managing multiple parallel agents makes it harder to track progress, understand blockages, and reorient after breaks.
* **The Chess Analogy** [01:05:16]: Quinn describes the goal as enabling users to play "10 chess boards at once," quickly orienting themselves to a task, making a move, and moving on.
* **Code Review with Agents** [01:06:32]: They say agents now write much of the code, with at least one human reviewing it. Platforms such as GitHub do not reflect this change to traditional code review.
* **Git and Version Control Systems** [01:08:03]: The discussion raises questions about whether existing tools like Git are well-designed for a future with agents that might generate more frequent merge conflicts due to parallel changes.
* **Changing User Demands** [01:08:40]: Agentic coding might lead to a tolerance for less "perfect" software if it's much faster, cheaper, and personalized, altering user demands and standards.
* **Adoption Depends on Seeing Agents Work** [58:56]: The team argues that skeptics often change their minds after seeing agents produce compounding effects in a real codebase. They say agents, unlike older developer tools, may push companies to adapt their codebases, tooling, and processes rather than expect the tool to fit every existing habit.
* **The Engineer as a Business Driver** [01:17:13]: Thorsten says engineers need a broader understanding of business, product, and design. He also says they need to produce code faster toward business goals because typing code itself will diminish in value.

### Conclusion

* **Adapt to Change** [01:07:07]: They say agentic coding is changing rapidly and companies must be ready to adapt their products and processes.
* **Hiring and Feedback** [01:21:14]: Sourcegraph is looking for engineers interested in agentic programming. It invites them to use Amp, provide feedback, and help build coding tools.

Full video: <https://www.youtube.com/watch?v=b4rOVZWLW6E>
