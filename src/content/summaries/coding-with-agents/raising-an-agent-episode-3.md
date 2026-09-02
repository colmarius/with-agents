---
title: "Search Agent"
resourceId: 1
series: "raising-an-agent"
episode: 3
date: "2025-03-28"
---

In episode 3 of the Sourcegraph series "Raising an Agent", CEO Quinn and software engineer Thorsten discuss changes in coding work, feedback loops, and agentic code search.

### The New Developer Mental Model

- The "Paint by Numbers" Approach: The hosts agree that developers are shifting from writing every line to guiding and instructing the agent [03:51]. They say the human must "draw the lines in the sand" by defining architecture, intent, and constraints. The agent then "fills in the numbers" by writing boilerplate, imports, and component logic [04:17].

- Laziness as Productivity: Thorsten asks the agent to handle even minor tasks, such as changing five lines. He says eliminating the "toil" of version control, testing, commit messages, and PR creation makes him faster overall [07:23].

### Capturing Intent with Thread Sharing

- Context Beyond Commits: The team implemented a feature to store and share agent conversations (threads). This provides a detailed, step-by-step history of how a piece of code came to be, including all the tool calls and prompts used [11:52].

- The "Why" of the Code: They argue that attaching thread history to a PR gives maintenance developers more context about intent than a traditional Git commit message [13:07]. They also say it offers "social proof," showing skeptical developers how other team members use the agent [15:29].

### The Challenge of Feedback Loops

- Need for Validation: They say a reliable agent needs fast feedback loops, such as tests, static analysis, and browser-based visual diagnostics [16:44].

- Build Systems Must Adapt: Currently, the agent often struggles with build system specifics (like running a granular, fast test instead of the entire test suite) [17:18]. The hosts hypothesize that in the future, codebases will "bend to the agents," with companies simplifying their build systems to make it easy for an agent to quickly validate a code change [22:27].

### Code Search as a Senior Engineer Ghost

- The "Search Agent" Concept: Thorsten built an inner agent for code search. When the main agent has a semantic question, such as "How does authentication work?", it delegates to this inner "search agent," which finds and summarizes the answer. It uses keyword search, file globbing, and directory listing [25:34].

- Preventing Context "Pollution": The search agent operates with its own context window, ensuring that irrelevant or fallible search results (like old, complex migration files) do not "dirty" the main agent's working context [31:31].

- The Intended Scenario: Thorsten's goal is for this agent to act as the "ghost of a senior engineer," answering codebase questions that a human senior developer would know. He says every CTO would pay "a lot of money for" that capability [26:47].

Full video: <https://www.youtube.com/watch?v=N04FM1e3sbY>

Episode page: <https://ampcode.com/podcast/episode-3>
