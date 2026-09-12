---
title: "Search Agent"
resourceId: 1
series: "raising-an-agent"
episode: 3
date: "2025-03-28"
---

Quinn Slack and Thorsten Ball describe how a coding agent can answer repository questions by searching, reading files, and returning a report. Keeping that investigation in a separate conversation leaves the main agent focused on the implementation. The episode connects this design to human architectural guidance, shared thread history, and faster ways to check changes.

### The New Developer Mental Model

- The "Paint by Numbers" Approach: The hosts agree that developers are shifting from writing every line to guiding and instructing the agent [03:51](https://www.youtube.com/watch?v=N04FM1e3sbY&t=231s). They say the human must "draw the lines in the sand" by defining architecture, intent, and constraints. The agent then "fills in the numbers" by writing boilerplate, imports, and component logic [04:17](https://www.youtube.com/watch?v=N04FM1e3sbY&t=257s).

- **Compare the whole task, not just typing time**: Thorsten delegates even small edits. Quinn points out that a one-line change can still require branch setup, tests, a commit message, and a pull request; an agent can handle that surrounding work while the developer does something else [06:58–07:55](https://www.youtube.com/watch?v=N04FM1e3sbY&t=418s).

### Capturing Intent with Thread Sharing

- Context Beyond Commits: The team implemented a feature to store and share agent conversations (threads). This provides a detailed, step-by-step history of how a piece of code came to be, including all the tool calls and prompts used [11:52](https://www.youtube.com/watch?v=N04FM1e3sbY&t=712s).

- The "Why" of the Code: They argue that attaching thread history to a PR gives maintenance developers more context about intent than a traditional Git commit message [13:07](https://www.youtube.com/watch?v=N04FM1e3sbY&t=787s). They also say it offers "social proof," showing skeptical developers how other team members use the agent [15:29](https://www.youtube.com/watch?v=N04FM1e3sbY&t=929s).

### The Challenge of Feedback Loops

- Need for Validation: They say a reliable agent needs fast feedback loops, such as tests, static analysis, and browser-based visual diagnostics [16:44](https://www.youtube.com/watch?v=N04FM1e3sbY&t=1004s).

- **Make the right check easy to run**: The prototype sometimes runs too many tests, gets relative paths wrong, or leaves a test runner waiting for interactive input. Repository instructions help, but the hosts want more reliable selection of a fast, relevant check—for example, running the changed server test rather than the whole repository suite. They predict teams will adapt build systems to support these feedback loops [16:39–23:18](https://www.youtube.com/watch?v=N04FM1e3sbY&t=999s).

### Search without filling the main conversation

- **Search is an investigation, not just one query**: For a question such as how authentication works, the search agent runs keyword searches, reads plausible files, finds related filenames, and lists directories. It returns a report for the main agent to use, rather than asking the human to supply each file [25:23–28:17](https://www.youtube.com/watch?v=N04FM1e3sbY&t=1523s).

- **Separate context contains the search history, not every possible mistake**: Without a subagent, every opened file and failed search would enter the main conversation. Thorsten gives old migration files as an example of irrelevant material that could influence later work. A separate context window keeps those intermediate steps out, although the returned report can still be wrong and require another search [31:05–34:16](https://www.youtube.com/watch?v=N04FM1e3sbY&t=1865s).

- **The goal is accessible repository knowledge**: Thorsten compares the desired experience to asking a senior engineer a codebase question. The hosts are encouraged by the reports but acknowledge that the prototype is slow and fallible [26:27–28:17](https://www.youtube.com/watch?v=N04FM1e3sbY&t=1587s).

Full video: <https://www.youtube.com/watch?v=N04FM1e3sbY>

Episode page: <https://ampcode.com/podcast/episode-3>
