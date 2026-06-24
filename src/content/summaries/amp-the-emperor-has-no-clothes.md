---
title: "Amp: The Emperor Has No Clothes"
resourceId: 2
date: "2025-09-26"
---

This episode of the Latent Space podcast features a discussion with Quinn and Thorsten from Sourcegraph about the evolution from Cody to Amp, their philosophy on building agentic coding tools, and the future of software development.

### The Genesis of Amp: Disrupting from Within

* **From Cody to Amp** [00:20]: Thorsten explains that Amp emerged from a new project that started when Claude 3.5 was released. They aimed to give the model tools and let it "go nuts" without the constraints of Cody.
* **Resetting Expectations** [02:16]: They realized Amp was a fundamentally different product requiring a reset of user expectations, especially regarding permissions and cost, moving from a $20 subscription model to hundreds of dollars per month.
* **Technical Liberation** [04:32]: Thorsten highlights the technical freedom gained by separating Amp from Sourcegraph's platform, allowing them to ship 15 times a day, a game-changer for rapid iteration and adaptation in the fast-paced AI development landscape.
* **Focus on the Best Coding Agent** [03:22]: Quinn emphasizes that the sole focus is on building the "best coding agent," believing this is a bigger endeavor than anything that came before. This involves moving fast and learning continuously.

### Internal Operations and Product Strategy

* **Funding Innovation** [08:26]: Sourcegraph's successful existing product and customer trust enable them to fund "crazy stuff" like Amp, which operates with minimal bureaucracy regarding consistent pricing, user model choice, and compliance.
* **Lean and Agile Team** [09:38]: The Amp core team is small (around eight people) and operates with a "personal project mode," pushing directly to main with no formal code reviews and shipping 15 times a day. This fosters fast feedback loops and dogfooding.
* **Platform Leverage** [11:31]: They leverage Sourcegraph's existing platform teams (security, infrastructure) to handle foundational concerns, allowing the Amp team to concentrate on the client and user experience.

### Product Structure: CLI vs. VS Code Extension

* **Initial VS Code Focus** [13:31]: They started with a VS Code extension due to its ease of distribution and proximity to the editor.
* **Emergence of CLI** [14:16]: The popularity and flexibility of CLI tools (SSH, multiple split panes, different environments per tab) surprised them, leading to a rebuild of their CLI client.
* **No Clear Winner** [16:48]: An internal poll showed a 50/50 split between VS Code and CLI users, indicating advantages and disadvantages to both. Younger users tend to prefer the editor, while older users might lean towards the terminal [17:23].
* **Constant Tension and Adaptability** [19:08]: The team constantly evaluates whether to shed features or reduce complexity to remain agile, even considering eliminating the VS Code extension at one point before new developments made them reconsider.

### The Future of Models and Agent Interaction

* **Beyond Model Choice** [21:11]: The focus is not on maximizing revenue or user adoption today, as the landscape is changing rapidly. They prioritize building the best coding agent, even if it means foregoing features users *think* they want (like model choice or specific buttons) that would slow them down [22:06].
* **Models as Implementation Details** [25:55]: The vision is a future where the specific model running becomes an implementation detail, with different models used in the background for various tasks (e.g., faster models for specific modes).
* **Multi-Model Strategy** [30:11]: Amp already utilizes models from Anthropic, OpenAI, and Google, and is close to integrating a fast open-source model, leveraging the strengths and weaknesses of different providers.
* **Cutting-Edge Models and Open Source** [27:39]: The rapid evolution of models, including open-source options like Qwen 3 Coder and Kimmy K2, means that reliance on a single provider or older models is not sustainable. A significant portion of the internal team now uses models other than Sonnet for their primary Amp interaction [28:36].
* **The Problem of Non-Deterministic LLMs** [34:43]: A significant challenge is the non-deterministic nature of LLMs, where products built on them can appear to work but might fail in a small percentage of cases, leading to a "hangover" effect for users.

### Building for the Frontier: User Expectations and Feedback Loops

* **Targeting Early Adopters** [39:25]: Amp explicitly targets users "at the frontier" of agentic coding who are curious and open to learning new workflows, rather than mainstream users who might expect traditional software behaviors [40:21].
* **"Bullshit Features"** [40:43]: Features like "prompt enhancers" are deemed ineffective because LLMs need fundamental information, not just phrasing tricks. Similarly, elaborate custom sub-agents or MCP servers can lead to high token usage, slow performance, and debugging challenges.
* **The "Harness" or "Scaffolding" Around the Model** [32:47]: The strategy is to build a flexible "scaffolding" around the model that can easily adapt or be replaced as models improve, rather than investing heavily in features that might become redundant.
* **The Value of Short Threads and Context Engineering** [46:20]: Users are encouraged to start many small threads and be strict about what goes into context to avoid "context rot" and the pitfalls of compacting conversations that might lose critical information or past failures [44:42].
* **Optimizing for Agent Consumption** [54:53]: There's a growing trend to optimize tooling and logs not just for human consumption, but for agents, such as unified, verbose, JSON-line logs that agents can easily process.

### The Outer Loop: Orchestration and Future of Development

* **Challenges of Multi-Agent Workflows** [01:03:52]: Managing multiple parallel agents presents challenges in tracking progress, understanding blockages, and re-orienting oneself after breaks.
* **The Chess Analogy** [01:05:16]: Quinn describes the goal as enabling users to play "10 chess boards at once," quickly orienting themselves to a task, making a move, and moving on.
* **Code Review in an Agentic World** [01:06:32]: The rise of agents means that much of the code is written by agents and reviewed by at least one human, shifting the traditional code review paradigm not reflected in platforms like GitHub.
* **Git and Version Control Systems** [01:08:03]: The discussion raises questions about whether existing tools like Git are well-designed for a future with agents that might generate more frequent merge conflicts due to parallel changes.
* **Changing User Demands** [01:08:40]: Agentic coding might lead to a tolerance for less "perfect" software if it's much faster, cheaper, and personalized, altering user demands and standards.
* **Engineering as Leadership** [58:16]: Mike emphasizes that the number one skill for engineers in this new world is not prompting or advanced coding techniques, but **leadership and delegation**, applying human-to-human interaction skills to guiding agents.
* **The Engineer as a Business Driver** [01:17:13]: Thorsten highlights that engineers need a broader understanding of business, product, and design, and the ability to wield code faster to achieve business goals, as the pure act of typing code will diminish in value.

### Conclusion and Call to Action

* **Embrace Change and Stay Nimble** [01:07:07]: The overarching message is that everything is changing rapidly in agentic coding, and companies must be prepared to react quickly and adapt their products and processes.
* **Join the Journey** [01:21:14]: Sourcegraph is actively looking for engineers interested in agentic programming, inviting them to use Amp, provide feedback, and help build the future of coding.

Full video: <https://www.youtube.com/watch?v=b4rOVZWLW6E>
