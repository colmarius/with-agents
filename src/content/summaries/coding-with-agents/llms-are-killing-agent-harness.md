---
title: "LLMs are killing Agent Harness"
resourceId: 19
date: "2026-05-20"
---

Thorsten Ball argues that as frontier models improve, coding-agent products should shed clever harness scaffolding, give models simple tools and context, and focus on how humans coordinate many cheap, capable agents.

### Key Points Covered

- **Amp came from removing multi-model scaffolding**: Ball describes Cody/Cursor-era systems that chained models to propose and apply diffs, then says Claude tool-calling made that complexity obsolete: give the model tokens, tools, and room to work [00:08:16]-[00:10:25].
- **Editor craft is being revalued**: After working on Zed and tab completion, Ball says decades of Vim-level editing skill started to feel less central once models could predict and edit code directly [00:06:15]-[00:08:16].
- **The future engineer is more than a language typist**: He argues that what is dying is software work defined purely by programming-language fluency, while systems judgment, customer understanding, debugging, maintenance, and product sense remain valuable [00:22:27]-[00:26:35].
- **Software assumptions are changing**: Ball says software engineering was built around human-written code being slow, scarce, and expensive; faster, cheaper models change build-vs-buy, enterprise software, and developer-tool assumptions [00:26:35]-[00:35:39].
- **Prompt and harness tricks matter less over time**: He compares agent harnesses to scaffolding or a cast: useful while models are weak, but something that should fall away as the model improves [00:36:43]-[00:38:33].
- **Tools are trending back toward the shell**: Ball traces the move from specialized edit tools and custom diff formats toward models that can use `cat`, `wc`, editors, and short scripts, making shell access increasingly sufficient [00:38:33]-[00:41:36].
- **A coding agent is mostly a loop plus model capability**: Referring to his "How to build an agent" argument, Ball says the emperor has no clothes: the magic is less in hidden harness complexity and more in the model, context, and tools [00:41:36]-[00:43:42].
- **The next problem is organizing many agents**: As individual agents become capable, product work shifts to where they run, how they are tracked, how work is preserved, and how humans coordinate fleets of them [00:43:42]-[00:46:24].
- **Current SDLC tools assume scarce human code**: Ball calls ticket-to-agent-to-PR-to-agent-review workflows transitional because GitHub, CI, PRs, and contribution graphs were designed around human-produced code as a precious artifact [00:46:24]-[00:49:24].
- **Amp wants to keep breaking toward the frontier**: He says models rug-pull product assumptions every few months, so Amp prefers users who want to move with the frontier over stable workflows that hold the product back [01:12:15]-[01:18:28].

Full video: <https://www.youtube.com/watch?v=thMFsqe8kbQ>
