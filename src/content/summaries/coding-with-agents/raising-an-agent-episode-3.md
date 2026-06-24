---
title: "Search Agent"
resourceId: 1
series: "raising-an-agent"
episode: 3
date: "2025-06-01"
---

Episode 3 of the "Raising an Agent" series from Sourcegraph, featuring CEO Quinn and software engineer Torsten, delves into the cultural shift in coding, the necessity of fine-tuned feedback loops, and the future of code search powered by agentic models.

### The New Developer Mental Model

- The "Paint by Numbers" Approach: The hosts agree that the developer's role is shifting from manually writing every line to guiding and instructing the agent [03:51]. The human must "draw the lines in the sand"—defining the architecture, intent, and constraints—while the agent efficiently "fills in the numbers" (writing the boilerplate, imports, and component logic) [04:17].

- Laziness as Productivity: Torsten finds himself asking the agent to handle even minor tasks, like changing five lines, because it eliminates the "toil" of version control, testing, commit messages, and PR creation, making him faster overall [07:23].

### Capturing Intent with Thread Sharing

- Context Beyond Commits: The team implemented a feature to store and share agent conversations (threads). This provides a detailed, step-by-step history of how a piece of code came to be, including all the tool calls and prompts used [11:52].

- The "Why" of the Code: They argue that this thread history, stapled to a PR, gives maintenance developers far more context about the code's intent than a traditional Git commit message [13:07]. It also offers "social proof," helping skeptical developers see how successful team members are using the agent [15:29].

### The Challenge of Feedback Loops

- Necessity for Validation: For the agent to be reliable, it needs robust and fast feedback loops (e.g., running tests, static analysis, getting browser-based visual diagnostics) [16:44].

- Build Systems Must Adapt: Currently, the agent often struggles with build system specifics (like running a granular, fast test instead of the entire test suite) [17:18]. The hosts hypothesize that in the future, codebases will "bend to the agents," with companies simplifying their build systems to make it easy for an agent to quickly validate a code change [22:27].

### Code Search as a Senior Engineer Ghost

- The "Search Agent" Concept: Torsten built an inner agent specifically for code search. When the main agent has a semantic question (e.g., "How does authentication work?"), it delegates to this inner "search agent," which uses various tools (keyword search, file globbing, directory listing) to find and summarize the answer [25:34].

- Preventing Context "Pollution": The search agent operates with its own context window, ensuring that irrelevant or fallible search results (like old, complex migration files) do not "dirty" the main agent's working context [31:31].

- The Ideal Scenario: The ultimate goal is for this agent to function as the "ghost of a senior engineer," ready to perfectly answer any question about the codebase that a human senior developer would know, a capability every CTO would pay "a lot of money for" [26:47].

Full video: <https://youtu.be/5A7MkiWeOjk?si=I-a6MU9_7G8_AM3n>
