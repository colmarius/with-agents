---
title: "I Hated Every Coding Agent, So I Built My Own — Mario Zechner (Pi)"
resourceId: 12
date: "2026-03-31"
---

Mario Zechner describes Pi's origin in a Mastra talk. He covers opaque or overloaded coding-agent harnesses, Terminal-Bench and minimal interfaces, and Pi's malleability.

### Key Points Covered

- **Pi started from frustration with every harness he tried**: Zechner says a 2025 AI hackathon with Peter Steinberger and Armin Ronacher led to months of building with agents. He then asked how hard it could be to write a coding agent he actually controlled [00:00–01:50](https://www.youtube.com/watch?v=Dli5slNaJu0&t=0s).
- **Claude Code defined the genre, then became too much tool for his workflow**: He credits Claude Code with making agentic filesystem search work. For his use case, he argues it accumulated spaceship-like feature bloat, hidden context changes, terminal UI flicker, limited observability, and almost no deep extensibility [03:28–09:12](https://www.youtube.com/watch?v=Dli5slNaJu0&t=208s).
- **OpenCode matched his open-source instincts but still broke context expectations**: Zechner criticizes its pruning of old tool results, which can bust prompt caches, and its injection of LSP errors before a task stabilizes. He also criticizes storing each message as its own JSON file and shipping a server architecture that exposed a security issue [10:53–15:52](https://www.youtube.com/watch?v=Dli5slNaJu0&t=653s).
- **Terminal-Bench made the minimalist thesis plausible**: Terminus performs strongly while giving the model little more than a tmux session and keystrokes. This suggests many coding-agent features may not be necessary for model performance, even if humans still need a better developer experience [15:52–17:36](https://www.youtube.com/watch?v=Dli5slNaJu0&t=952s).
- **The field is still experimenting, so harnesses should be malleable**: Zechner's first thesis is that nobody yet knows the ideal coding-agent shape. His second is that agents need to self-modify so developers can quickly try workflows instead of waiting for vendors to choose the right abstraction [17:36–18:38](https://www.youtube.com/watch?v=Dli5slNaJu0&t=1056s).
- **Pi strips the core down to packages and four tools**: The implementation centers on a provider abstraction, generalized agent loop, small TUI, SDK/headless mode, and a very short system prompt. Its only built-in tools are read, write, edit, and bash [18:38–21:17](https://www.youtube.com/watch?v=Dli5slNaJu0&t=1118s).
- **Missing features are meant to be rebuilt as artifacts or extensions**: Pi omits built-in MCP, sub-agents, plan mode, background bash, and to-dos. Zechner instead recommends CLI tools, tmux, `PLAN.md`, `TODO.md`, or custom TypeScript extensions that hot-reload inside the project [21:17–22:06](https://www.youtube.com/watch?v=Dli5slNaJu0&t=1277s).
- **Extensions are the experimentation surface**: Pi lets users add custom tools, UI, prompt templates, themes, compaction, permission gates, custom providers, and remote read/write/edit/bash behavior. Users can also add community projects such as multi-agent chat or front-end annotation without changing the core [22:06–24:56](https://www.youtube.com/watch?v=Dli5slNaJu0&t=1326s).
- **Tree sessions and cost tracking preserve observability**: Zechner highlights tree-structured sessions, no hidden context injection, skills, full cost tracking, HTML export, and JSON formats. He also reports a Terminal-Bench result near Terminus with Claude Opus 4.5 before Pi even had compaction [24:56–25:48](https://www.youtube.com/watch?v=Dli5slNaJu0&t=1496s).
- **Open-source maintainers need human-verification bottlenecks**: After OpenClaw drove agent-generated issues and PRs toward Pi, Zechner adopted "OSS vacation." He also began auto-closing PRs from unknown accounts until the contributor opens a short, human-written issue. Mitchell Hashimoto's Vouch generalizes that idea for other repos [25:48–26:44](https://www.youtube.com/watch?v=Dli5slNaJu0&t=1548s).

Full video: <https://www.youtube.com/watch?v=Dli5slNaJu0>
