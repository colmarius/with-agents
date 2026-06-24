---
title: "The Emerging Skillset of Wielding Coding Agents"
resourceId: 5
date: "2025-07-01"
---

This video, featuring Beyang Liu, CTO and co-founder of Sourcegraph, delves into the evolving landscape of AI coding agents and the essential skills developers need to effectively utilize them.

### The Agent Discourse: Hype vs. Reality

Liu begins by addressing the ongoing debate surrounding the efficacy of AI coding agents. He highlights differing opinions from prominent developers like Jonathan Blow and Alex Albert, who express skepticism, and others like Jessie Frazelle and Eric S. Raymond, who acknowledge their significant utility, especially for the majority of programmers. The consensus among the audience, and Liu's perspective, leans towards the substantive usefulness of coding agents.

### Evolution of AI Coding Tools: From Co-pilots to Agents

Liu outlines three distinct eras driven by advancements in frontier model capabilities:

* **GPT-3 Era (Co-pilots/Autocomplete):** Models were primarily text completion tools, leading to applications with a dominant "type some stuff, it types some stuff" interaction paradigm.
* **ChatGPT Era (RAGbots):** With GPT-3.5 and instruct-tuned chatbots, users could ask questions like a human. The ability to copy-paste code for pattern matching led to the rise of RAGbots (chatbot + retrieval engine).
* **Agent Era:** The current era, characterized by tool-using, agentic LLMs, necessitates a new application architecture. This shift means moving beyond the limitations of chat-based LLMs to design agents from the ground up.

### Controversial Design Decisions in the Age of Agents

Liu shares "spicy takes" on design decisions that are optimal for the agent era, often contrasting with best practices from the chatbot era:

* **Autonomous Edits:** Agents should make edits directly without constant prompts for approval. If an agent is wrong, asking for approval still wastes time. Humans should steer and guide, rather than micromanage.
* **Minimal UI:** The need for "thick clients" or VS Code forks is questioned. If an agent's contract is "ask it to do stuff, and it does stuff," extensive UI for context management and applying changes becomes less critical.
* **Model Coupling:** Swapping models in and out, easy in the chatbot era, is much harder with agents due to the deeper coupling between the LLM and the agentic chains. Many LLMs aren't even proficient at basic tool use yet.
* **Beyond Fixed Pricing:** Agents consume more tokens, making them seem expensive. However, their value lies in the human time they save. Fixed pricing can incentivize using "dumber" models, ultimately wasting user time.
* **Unix Philosophy:** The power of simple, composable tools, especially command-line interfaces, will likely be more potent than vertically integrated solutions.
* **Building for the New Era:** Sourcegraph built a new application, Amp, from scratch for the agentic world, unconstrained by previous assumptions. The analogy of the internet's evolution from portal sites to a single search bar highlights the goal of striving for a simple, powerful text box for agentic UIs.

### Amp: A Coding Agent in Practice

Liu introduces Amp, Sourcegraph's coding agent, which features two bare-bones clients: a VS Code extension (ideal for viewing diffs) and a CLI (for command-line invocation and scripting). He demonstrates Amp's ability to autonomously find and implement a feature request for customizing a connector icon, highlighting its use of various tools, including a sub-agent for search, and its structured to-do list for planning tasks. Amp incrementally makes edits, checks diagnostics, and can even write its own tests.

### Power User Patterns and Best Practices

Insights from Amp's power users reveal emerging best practices:

* **Longer, Detailed Prompts:** Power users write elaborate prompts because LLMs are highly programmable and follow detailed instructions to achieve better results.
* **Directing Context & Feedback:** Intentionally guiding the agent to relevant context and feedback mechanisms, even for specific build or test commands, helps it complete tasks in out-of-distribution codebases.
* **Front-End Feedback Loops:** Constructing fast feedback loops, often using tools like Playwright and Storybook, allows agents to quickly iterate on UI changes.
* **Understanding Code:** Contrary to making programmers lazy, agents are used by power users to **better understand** code. They serve as an excellent onboarding tool for new developers and can accelerate code reviews by providing summaries and identifying entry points.
* **Sub-Agents for Complexity:** Sub-agents are valuable for longer, more complex tasks as they preserve the context window of the main agent, preventing degradation in LLM quality.

### Common Anti-Patterns to Avoid

Liu identifies common mistakes users make with coding agents:

* **Micromanaging:** Treating agents like chatbots, requiring steering at every interaction or reviewing every edit.
* **Underprompting:** Not providing enough detail. While simple prompts work for well-represented tasks (e.g., Flappy Bird), complex changes to large codebases require the same level of detail as explaining to a human colleague.
* **TL;DR-ing Code:** Viewing agents as a way to avoid understanding the code. Instead, they should be used to conduct more thorough code reviews more quickly, as the human remains ultimately responsible for the shipped code.

### The Future of Coding with Agents

Liu concludes by highlighting the inclination of top users to run **multiple agents in parallel** for complex projects like compilers, demonstrating that agents can be used for serious engineering tasks. He emphasizes that wielding coding agents is a **high-ceiling skill** that requires practice and learning, similar to mastering an editor or programming language. Sourcegraph encourages knowledge dissemination through features like thread sharing in Amp and offers an "Amp Owners Manual" for new users.

Full video: <https://www.youtube.com/watch?v=F_RyElT_gJk>
