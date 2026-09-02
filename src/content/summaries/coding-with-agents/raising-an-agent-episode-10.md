---
title: "Killing the Sidebar"
resourceId: 1
series: "raising-an-agent"
episode: 10
date: "2026-02-05"
---

In episode 10 of "Raising an Agent", the hosts discuss Amp's deep mode and retirement of its editor-sidebar workflow. They argue that frontier teams need to reorganize around autonomous agents.

### Key Points Covered

- **Deep mode is a workflow, not just a model selector**: Amp's new deep mode uses GPT-5.2 Codex Medium. It targets longer, well-scoped tasks that benefit from thorough research and delayed review. The hosts contrast it with smart mode for interactive work and rush mode for small fast changes [00:55]-[05:21].
- **Modes should change user expectations**: Quinn and Thorsten argue that putting a model in a drop-down is not enough. A product should help users feel when they are writing a short text-message-style prompt versus a longer letter to an agent that will go away and work [05:52]-[07:31].
- **The factory pattern becomes more natural as models run longer**: If an agent can work for 45-60 minutes without needing input, watching one sidebar thread stops making sense. The hosts expect more parallel agents, long-running tasks, and check-ins after completion [08:03]-[10:17].
- **Skills are accumulating operational knowledge**: Amp uses skills to encode release workflows, tmux testing details, G-Cloud log analysis, and BigQuery usage. These and other team-specific procedures help agents navigate common tasks without repeated prompting [10:17]-[16:18].
- **Agent-optimized dev tooling can change human workflows**: The team discusses fast cached test commands. It also discusses accepting some regression in VS Code ergonomics when that tradeoff improves the feedback loops agents use most often [16:18]-[21:19].
- **Amp is killing the editor extension**: The hosts say the sidebar limits parallelism and keeps the human as the feedback loop. They say supporting it as a first-class path would select for lagging users. They urge users to move to the CLI while the VS Code extension self-destructs [21:52]-[27:57].
- **Software product assumptions are melting**: The hosts cite AI-generated workout UIs, voice-guided workflows, and assistant-managed shopping lists. They argue that software may become less tied to durable app interfaces and more tied to generated or conversational workflows [28:31]-[32:52].
- **Frontier companies need to keep re-earning their product**: Amp lacks a traditional sales/marketing buildout and is willing to remove features and make risky changes. It frames these choices as a strategic response to models that can overturn product assumptions every few months [33:25]-[43:49], [49:52]-[55:05].
- **Manual context management may be fading**: The episode revisits an old assumption. As models such as GPT-5.2 improve at researching after compaction, automatic handoff and hidden context-window management become more viable. However, clear task boundaries still matter [43:49]-[49:19].

Full video: <https://www.youtube.com/watch?v=4rx36wc9ugw>

Episode page: <https://ampcode.com/podcast/episode-10>
