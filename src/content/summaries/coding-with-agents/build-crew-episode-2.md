---
title: "Navigating the AI Agent Landscape"
resourceId: 3
series: "build-crew"
episode: 2
date: "2025-10-01"
---

## Build Crew Live: Episode 2 Highlights

Episode 2 of "Build Crew Live" brings together Thorsten Ball, Nico, Ryan Carson, and Tim—an Amp product manager who started building with agents—to discuss how AI agents blur product and engineering roles, why small focused threads work, and how to preserve context across longer projects.

### Key Points Covered

* **Build Crew as a learning community**: The episode opens by framing Build Crew as a place for people using Amp, Cursor, Claude Code, Codex, and other tools to compare workflows, do standups, and learn from one another [00:00:00]-[00:00:56], [26:04]-[28:03].

* **PMs and non-engineers can become builders**: Tim describes coming from product and filmmaking rather than professional coding, then using AI agents to build real software. The panel argues that the old product/design/engineering triangle starts to become a more fluid "blob" when agents lower the cost of implementation [04:10]-[09:27].

* **Use agents for bounded work you already understand**: Thorsten's practical tip is to give the agent small, known tasks—like fixing a VS Code integration bug—where the human knows the desired shape and can quickly review the result [10:20]-[13:22].

* **Manual coding decreases, but review responsibility increases**: The group discusses how much code they now write by hand, when they still hand-edit load-bearing logic, and how reviewing generated code becomes the main skill [14:17]-[23:04].

* **Agent-friendly verification matters**: Ryan describes using Playwright, unified frontend/backend logs, and predictable dev accounts so the agent can test what it built and read the relevant output instead of relying on manual screenshots or scattered logs [17:08]-[20:17].

* **Custom slash commands provide deterministic context**: Nico demonstrates slash commands that fetch Linear issues and GitHub PR comments into a prompt. The goal is to feed the agent exact structured context, not ask it to discover everything through broad, noisy MCP-style tools [28:03]-[38:45].

* **Break big work into artifacts and fresh threads**: Tim explains the "loop of doom" that happens when a project gets too large for one conversation. His solution is to create PRDs, split them into granular tasks, write explicit artifacts, and restart with clean context when needed [41:39]-[57:45].

* **Context hygiene is a discipline**: The panel uses the "don't cut fruit on the chicken board" metaphor for agent context: carry forward distilled plans and decisions, not every failed attempt from a messy thread [49:33]-[57:45].

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=VkV4p-eDPmM)

Build Crew: <https://buildcrew.team>
