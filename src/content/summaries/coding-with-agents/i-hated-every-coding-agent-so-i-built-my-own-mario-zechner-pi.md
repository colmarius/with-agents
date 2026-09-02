---
title: "I Hated Every Coding Agent, So I Built My Own — Mario Zechner (Pi)"
resourceId: 12
date: "2026-03-31"
---

Mario Zechner describes Pi's origin in a Mastra talk. He covers opaque or overloaded coding-agent harnesses, Terminal-Bench and minimal interfaces, and Pi's malleability.

### Key Points Covered

- **Pi started from frustration with every harness he tried**: Zechner says a 2025 AI hackathon with Peter Steinberger and Armin Ronacher led to months of building with agents. He then asked how hard it could be to write a coding agent he actually controlled [00:00:00]-[00:01:50].
- **Claude Code defined the genre, then became too much tool for his workflow**: He credits Claude Code with making agentic filesystem search work. For his use case, he argues it accumulated spaceship-like feature bloat, hidden context changes, terminal UI flicker, limited observability, and almost no deep extensibility [00:03:28]-[00:09:12].
- **OpenCode matched his open-source instincts but still broke context expectations**: Zechner criticizes its pruning of old tool results, which can bust prompt caches, and its injection of LSP errors before a task stabilizes. He also criticizes storing each message as its own JSON file and shipping a server architecture that exposed a security issue [00:10:53]-[00:15:52].
- **Terminal-Bench made the minimalist thesis plausible**: Terminus performs strongly while giving the model little more than a tmux session and keystrokes. This suggests many coding-agent features may not be necessary for model performance, even if humans still need a better developer experience [00:15:52]-[00:17:36].
- **The field is still experimenting, so harnesses should be malleable**: Zechner's first thesis is that nobody yet knows the ideal coding-agent shape. His second is that agents need to self-modify so developers can quickly try workflows instead of waiting for vendors to choose the right abstraction [00:17:36]-[00:18:38].
- **Pi strips the core down to packages and four tools**: The implementation centers on a provider abstraction, generalized agent loop, small TUI, SDK/headless mode, and a very short system prompt. Its only built-in tools are read, write, edit, and bash [00:18:38]-[00:21:17].
- **Missing features are meant to be rebuilt as artifacts or extensions**: Pi omits built-in MCP, sub-agents, plan mode, background bash, and to-dos. Zechner instead recommends CLI tools, tmux, `PLAN.md`, `TODO.md`, or custom TypeScript extensions that hot-reload inside the project [00:21:17]-[00:22:06].
- **Extensions are the experimentation surface**: Pi lets users add custom tools, UI, prompt templates, themes, compaction, permission gates, custom providers, and remote read/write/edit/bash behavior. Users can also add community projects such as multi-agent chat or front-end annotation without changing the core [00:22:06]-[00:24:56].
- **Tree sessions and cost tracking preserve observability**: Zechner highlights tree-structured sessions, no hidden context injection, skills, full cost tracking, HTML export, and JSON formats. He also reports a Terminal-Bench result near Terminus with Claude Opus 4.5 before Pi even had compaction [00:24:56]-[00:25:48].
- **Open-source maintainers need human-verification bottlenecks**: After OpenClaw drove agent-generated issues and PRs toward Pi, Zechner adopted "OSS vacation." He also began auto-closing PRs from unknown accounts until the contributor opens a short, human-written issue. Mitchell Hashimoto's Vouch generalizes that idea for other repos [00:25:48]-[00:26:44].

Full video: <https://www.youtube.com/watch?v=Dli5slNaJu0>
