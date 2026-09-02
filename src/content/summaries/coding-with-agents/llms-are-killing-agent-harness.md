---
title: "LLMs are killing Agent Harness"
resourceId: 31
collection: "the-west-coast-builders"
date: "2026-05-20"
---

Thorsten Ball argues that improving frontier models need less harness scaffolding and simpler tools. He discusses how humans may coordinate many cheap, capable agents.

### Key Points Covered

- **Amp came from removing multi-model scaffolding**: Ball describes Cody/Cursor-era systems that chained models to propose and apply diffs. He says Claude tool-calling made that complexity obsolete: give the model tokens, tools, and room to work [00:08:16]-[00:10:25].
- **Editor craft is being revalued**: Ball worked on Zed and tab completion. He says decades of Vim-level editing skill started to feel less central once models could predict and edit code directly [00:06:15]-[00:08:16].
- **The future engineer is more than a language typist**: He argues that software work defined purely by programming-language fluency is dying. He says systems judgment, customer understanding, debugging, maintenance, and product sense remain valuable [00:22:27]-[00:26:35].
- **Software assumptions are changing**: Ball says software engineering assumed human-written code was slow, scarce, and expensive. He says faster, cheaper models change build-vs-buy, enterprise software, and developer-tool assumptions [00:26:35]-[00:35:39].
- **Prompt and harness tricks matter less over time**: He compares agent harnesses to scaffolding or a cast: useful while models are weak, but something that should fall away as the model improves [00:36:43]-[00:38:33].
- **Tools are trending back toward the shell**: Ball traces a move away from specialized edit tools and custom diff formats. Models can use `cat`, `wc`, editors, and short scripts, making shell access increasingly sufficient [00:38:33]-[00:41:36].
- **A coding agent is mostly a loop plus model capability**: Referring to his "How to build an agent" argument, Ball says the emperor has no clothes. He says the magic is less in hidden harness complexity and more in the model, context, and tools [00:41:36]-[00:43:42].
- **The next problem is organizing many agents**: As individual agents become capable, product work shifts to where they run and how they are tracked. It also shifts to preserving work and helping humans coordinate fleets of agents [00:43:42]-[00:46:24].
- **Current SDLC tools assume scarce human code**: Ball calls ticket-to-agent-to-PR-to-agent-review workflows transitional. He says GitHub, CI, PRs, and contribution graphs were designed around human-produced code as a precious artifact [00:46:24]-[00:49:24].
- **Amp wants to keep breaking toward the frontier**: He says models rug-pull product assumptions every few months. Therefore, Amp prefers users who want to move with the frontier over stable workflows that hold the product back [01:12:15]-[01:18:28].

Full video: <https://www.youtube.com/watch?v=thMFsqe8kbQ>
