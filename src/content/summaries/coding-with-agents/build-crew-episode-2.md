---
title: "Navigating the AI Agent Landscape"
resourceId: 3
series: "build-crew"
episode: 2
date: "2025-10-01"
---

## Mastering AI Agent Prompting and the Evolving Developer Role

Episode 2 of "Build Crew Live" dives into the dynamic world of AI coding agents, offering insights and best practices from Sourcegraph's Amp team and a product manager turned builder. The discussion centers around the newly launched **Build Crew community**, effective **prompting strategies**, and the **evolving role of developers** in an AI-first era.

### The Build Crew Community: Empowering AI Builders

Sourcegraph has launched **Build Crew**, a free community designed for developers who are building with AI agents, regardless of whether they use Amp, Cursor, or other tools. The community aims to foster knowledge sharing and support among builders.

Key features of Build Crew:

* **Free Membership**: Open to all developers using AI agents.
* **Amp Credits**: Amp users receive $100 in credits.
* **Engagement Tools**: Includes a leaderboard, badges, and a private Twitter DM group for collaboration and support.
* **Build Challenges**: Upcoming initiatives will involve community-wide build challenges to encourage learning and shared experiences.

### Masterful Prompting: Strategies for AI Agent Success

The Amp team emphasizes that effective interaction with AI agents hinges on **thoughtful and structured prompting**. They highlight several key strategies:

* **Structured Prompts for Clarity**: Jason advocates for starting prompts with a clear **goal** and breaking down tasks into **phases**. Asking the agent to repeat its mission ensures understanding and alignment.
* **Chain of Thought for Better Reasoning**: Thorsten explains that having the agent articulate its plan aloud (similar to "chain of thought" prompting) significantly improves results by keeping the plan in the agent's context window.
* **Small, Focused Conversations**: Thorsten advises keeping agent conversations short and focused. Even for seemingly simple tasks, using an agent to handle typing or API lookups provides a speed-up.
* **External Memory (Artifacts) for Context Management**: A crucial practice involves instructing agents to write distilled information (like plans, bug hypotheses, or overviews) into external files. These "artifacts" act as an explicit memory that can be referenced in new threads, preventing context overload and noise from previous, potentially "messy" conversations. This is compared to "cleaning your desk" before a new task.
* **Deterministic Tools via Custom Slash Commands**: Nikolai (Nico) demonstrates creating custom slash commands (using bash scripts) to fetch structured information from external systems (e.g., Linear issues, GitHub PR comments). This provides a reliable and deterministic way to feed specific context into the agent's workflow, avoiding the "context pollution" often associated with generic MCPs.
* **Slowing Down and Specificity**: Tyler stresses the importance of taking time to construct detailed and specific prompts, reducing the solution space for the agent.
* **"Code is Cheap" Mentality**: The affordability of AI-generated code encourages experimentation, allowing developers to easily revert and try different approaches without significant cost.
* **Don't Overload the Context Window**: Justin advises against filling the context window just because it's large, advocating for focused interactions.
* **Explore Agent Capabilities**: Jason encourages users to be open-minded about what AI agents can achieve, as their capabilities are rapidly evolving.

### The Evolving Role of Developers in an AI-First World

The conversation highlights significant shifts in developer workflows and roles due to AI agents:

* **Impact on Product Management and Engineering**: Tim, a product manager with no prior coding experience, illustrates how AI agents empower him to quickly prototype and build ideas, blurring the lines between traditional roles. Thorsten suggests the "triangle" of dev, product, and design is becoming a more integrated "blob."
* **Reduced Manual Coding**: The team's experiences show a significant reduction in hand-written code, with some aiming for 0% manual coding. Developers are learning to review and refine AI-generated code.
* **Learning Through Review**: Ryan notes that reviewing AI-generated code is a powerful way to learn about various aspects of software development, including DevOps and CI/CD.
* **The "Imposter Syndrome" of Sharing Prompts**: The team addresses the initial reluctance many developers feel about sharing their prompts, comparing it to the early days of public code sharing on GitHub. They advocate for transparency to foster collective learning and improvement.
* **Designing for Agents**: The discussion touches on the need for tooling and logging to become more "agent-friendly," with unified logs and deterministic tools that agents can easily interpret and utilize.
* **More Accessible Development**: Tim's journey from surf movie maker to builder underscores how AI agents are democratizing software creation, empowering individuals with ideas to bring them to life without extensive coding backgrounds.

Full Video: [Watch on Youtube](https://www.youtube.com/watch?v=VkV4p-eDPmM&list=PL6zLuuRVa1_g_ieW4LnrwhVo6bNHmRwEA)

Build Crew: <https://buildcrew.team>
