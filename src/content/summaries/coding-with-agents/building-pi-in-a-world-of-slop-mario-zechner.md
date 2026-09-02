---
title: "Building Pi in a World of Slop — Mario Zechner"
resourceId: 10
date: "2026-04-16"
---

Mario Zechner describes why he built Pi as a small, self-modifying coding-agent harness. He also warns about agent-generated open-source spam and unchecked "slop" in production codebases.

### Key Points Covered

- **Pi started as a reaction to opaque agent harnesses**: Zechner says Claude Code initially fit his workflow. Changing prompts and tool definitions, hidden context reminders, shallow hooks, limited observability, and no model choice eventually made it feel less like his development environment [00:00:54]-[00:02:47].
- **Context handling matters more than feature count**: His look at OpenCode identifies hazards such as pruning tool outputs, injecting LSP errors after every edit, and exposing local servers too broadly. By contrast, Terminal-Bench's minimal tmux-only harness performs surprisingly well. Zechner suggests current coding-agent UIs are still experimental rather than final [00:03:36]-[00:05:16].
- **Pi's thesis is malleability over bloat**: Pi strips the agent down to a small provider layer, an agent loop, a TUI, and four core tools: read, write, edit, and bash. Instead of a large built-in feature set, it ships documentation and examples that let the agent modify its own harness through extensions [00:05:16]-[00:07:06].
- **Extensibility is the product surface**: Pi is YOLO by default because security needs differ by user. Features such as sub-agents, plan mode, MCP, commands, custom tools, UI, compaction, and providers can be added as hot-reloading TypeScript extensions. They are distributed through ordinary package managers [00:07:06]-[00:08:49].
- **The community demonstrates the extension surface**: Zechner highlights extensions for background agent chat, multi-agent chat rooms, NES games, Doom, and package discovery. He reports a competitive Terminal-Bench placement for Pi. However, the shown leaderboard has too little configuration detail to establish a general harness ranking [00:08:49]-[00:10:32].
- **Open-source maintainers are absorbing agent spam**: After Pi became OpenClaw's agent core, Zechner's project started receiving low-quality issues and pull requests from agent instances. His defenses include auto-closing PRs until a human writes a concise issue, allowlisting trusted accounts, labeling OpenClaw-driven reports, embedding tracker text to spot clusters, and closing trackers when needed [00:10:32]-[00:11:31].
- **Agents compound errors without learning pain**: The talk argues that agents can create far more bad code than humans because they lack human bottlenecks and learn complexity from internet code. It argues that they fill underspecified specs with mediocre defaults and keep patching locally even when the global system becomes harder to trust [00:11:31]-[00:15:53].
- **Use agents where scope and evaluation are clear**: Zechner recommends modularizing code so an agent can find all relevant context and giving it an evaluation function when possible. He recommends delegating non-critical or boring work and using agents for reproduction cases and rubber-ducking. He also recommends capping generated code that must be reviewed and reading every line of critical code [00:15:53]-[00:17:41].

Full video: <https://www.youtube.com/watch?v=RjfbvDXpFls>
