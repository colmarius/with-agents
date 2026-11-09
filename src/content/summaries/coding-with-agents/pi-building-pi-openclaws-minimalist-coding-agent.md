---
title: "Pi Building Pi, OpenClaw's Minimalist Coding Agent"
resourceId: 9
date: "2026-06-12"
---

Mario Zechner uses Pi to fix a bug in Pi itself, then begins untangling an agent-powered robot project. The demonstrations show where he lets the agent investigate and implement, and where he intervenes on code structure and API design.

### Key Points Covered

- **Pi stays small because models already know the standard tools**: Zechner explains that frontier models already understand bash, files, tmux, GitHub CLI, and ordinary developer tools, so Pi does not build those workflows into the harness. When users want a feature such as plan mode or MCP support, they ask Pi to modify itself through its extension points [11:48–15:57](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=708s).
- **Fully unattended generation still fails**: He argues that "dark factory" software generation, where agents build software without human oversight, breaks down because the agent fills unspecified details with average internet code and small mistakes compound. He prefers an agent that speeds up a responsible engineer who still makes the architectural decisions [06:45–08:17](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=405s).
- **Human oversight depends on risk**: Mission-critical, security-sensitive, or architectural work still needs close review, while lower-risk internal tooling can be delegated more freely. The question is whether the human still owns the system boundaries and quality bar, since the agent can write the code either way [08:44–11:14](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=524s).
- **Pi fixes a reported bug in Pi**: The live workflow starts from a GitHub issue. Pi reproduces and analyzes the report using GitHub CLI and repository context, and Zechner reviews the implementation. The session ends with checks, a changelog update, an issue comment, a commit, and a push [16:52–36:36](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=1012s).
- **Review abstractions before rejecting them**: Zechner questions a new helper, then reads how it is used and accepts it. He checks whether the abstraction is worth keeping instead of reflexively shrinking the agent's diff [29:08–32:44](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=1748s).
- **Automated checks catch what instructions miss**: AGENTS.md-style guidance helps, but models may ignore style rules under pressure. Zechner relies on linting, type checking, smoke tests, pre-commit hooks, and other deterministic checks so bad output is rejected automatically [37:03–42:55](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=2223s).
- **Agent-built code still needs refactoring**: The robot demo starts from a working but tangled app whose parts communicate over WebSockets. Zechner has the agent map dependencies and propose module boundaries, then starts an incremental refactor while shaping the API. The recording ends this demonstration before the refactor is finished or validated [48:27–1:09:37](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=2907s).
- **Large-codebase work starts with context control**: For big systems, he either points the agent directly at the files he knows matter or uses the agent as a research intern to find entry points before implementation. Pi's session tree lets him branch off to explore, summarize the findings, and return to a clean branch for implementation. He prefers this to trusting sub-agent output he cannot see [1:12:03–1:23:12](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=4323s).
- **Humans should keep designing modules and APIs**: The episode closes on a warning. When people from outside a subsystem, such as a product manager, use agents to ship code into it, the result can be code nobody understands that has to be rewritten. If humans still define module boundaries and APIs, even a bad generated module stays isolated and is easier to replace later [1:24:04–1:30:17](https://www.youtube.com/watch?v=DPgJjRdQWrg&t=5044s).

Full video: <https://www.youtube.com/watch?v=DPgJjRdQWrg>
