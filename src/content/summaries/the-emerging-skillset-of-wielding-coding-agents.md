---
title: "The Emerging Skillset of Wielding Coding Agents"
resourceId: 5
date: "2025-06-30"
---

Beyang Liu, CTO and co-founder of Sourcegraph, discusses AI coding agents and the skills developers use to work with them.

### The Agent Discourse: Hype vs. Reality

Liu describes the debate over the usefulness of AI coding agents. He contrasts skepticism from developers such as Jonathan Blow and Alex Albert with Jessie Frazelle's and Eric S. Raymond's view that agents are useful, especially for most programmers. Liu and the audience lean toward that view.

### Evolution of AI Coding Tools: From Co-pilots to Agents

Liu outlines three distinct eras driven by advancements in frontier model capabilities:

* **GPT-3 Era (Co-pilots/Autocomplete):** Models were primarily text-completion tools. Applications followed a dominant "type some stuff, it types some stuff" interaction pattern.
* **ChatGPT Era (RAGbots):** With GPT-3.5 and instruct-tuned chatbots, users could ask questions like a human. The ability to copy-paste code for pattern matching led to the rise of RAGbots (chatbot + retrieval engine).
* **Agent Era:** Liu says the current era of tool-using, agentic LLMs requires a new application architecture. This means moving beyond chat-based LLMs and designing agents from the ground up.

### Controversial Design Decisions in the Age of Agents

Liu shares "spicy takes" on design decisions for the agent era, often contrasting them with chatbot-era practices:

* **Autonomous Edits:** Agents should make edits directly without constant prompts for approval. If an agent is wrong, asking for approval still wastes time. Humans should steer and guide, rather than micromanage.
* **Minimal UI:** Liu questions the need for "thick clients" or VS Code forks. If an agent's contract is "ask it to do stuff, and it does stuff," extensive UI for context management and applying changes matters less.
* **Model Coupling:** Swapping models in and out, easy in the chatbot era, is much harder with agents due to the deeper coupling between the LLM and the agentic chains. Many LLMs aren't even proficient at basic tool use yet.
* **Beyond Fixed Pricing:** Agents consume more tokens, making them seem expensive. However, their value lies in the human time they save. Fixed pricing can incentivize using "dumber" models, ultimately wasting user time.
* **Unix Philosophy:** The power of simple, composable tools, especially command-line interfaces, will likely be more potent than vertically integrated solutions.
* **Building for the New Era:** Sourcegraph built Amp from scratch for agentic workflows without previous assumptions. Liu compares the internet's move from portal sites to a single search bar with the goal of a simple text box for agentic UIs.

### Amp: A Coding Agent in Practice

Liu introduces Amp, Sourcegraph's coding agent, with two bare-bones clients: a VS Code extension for viewing diffs and a CLI for invocation and scripting. He demonstrates Amp finding and implementing a request to customize a connector icon. It uses several tools, including a search sub-agent and a structured to-do list, then makes edits, checks diagnostics, and writes tests.

### Power User Patterns and Best Practices

Insights from Amp's power users reveal emerging best practices:

* **Longer, Detailed Prompts:** Power users write elaborate prompts because LLMs are highly programmable and follow detailed instructions to achieve better results.
* **Directing Context & Feedback:** Intentionally guiding the agent to relevant context and feedback mechanisms, even for specific build or test commands, helps it complete tasks in out-of-distribution codebases.
* **Front-End Feedback Loops:** Constructing fast feedback loops, often using tools like Playwright and Storybook, allows agents to quickly iterate on UI changes.
* **Understanding Code:** Liu says power users employ agents to **better understand** code rather than avoid it. He describes them as an onboarding tool that can speed up reviews by providing summaries and identifying entry points.
* **Sub-Agents for Complexity:** Liu says sub-agents help with longer, more complex tasks by preserving the main agent's context window and preventing degradation in LLM quality.

### Common Anti-Patterns to Avoid

Liu identifies common mistakes users make with coding agents:

* **Micromanaging:** Treating agents like chatbots, requiring steering at every interaction or reviewing every edit.
* **Underprompting:** Not providing enough detail. While simple prompts work for well-represented tasks (e.g., Flappy Bird), complex changes to large codebases require the same level of detail as explaining to a human colleague.
* **TL;DR-ing Code:** Liu warns against using agents to avoid understanding code. He says they should support faster, thorough reviews because the human remains responsible for shipped code.

### The Future of Coding with Agents

Liu says top users run **multiple agents in parallel** on complex projects such as compilers. He describes working with coding agents as a **high-ceiling skill** that requires practice, like learning an editor or programming language. Sourcegraph supports sharing workflows through Amp threads and offers an "Amp Owners Manual" for new users.

Full video: <https://www.youtube.com/watch?v=F_RyElT_gJk>
