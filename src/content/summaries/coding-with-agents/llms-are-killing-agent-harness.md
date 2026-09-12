---
title: "LLMs are killing Agent Harness"
resourceId: 31
collection: "the-west-coast-builders"
date: "2026-05-20"
---

Thorsten Ball argues that better models need less specialized software around them. That surrounding software—the agent harness—supplies tools, context, and the loop that returns tool results to the model. He expects it to become simpler while coordinating many agents becomes a larger product problem.

### Key Points Covered

- **Amp came from removing multi-model scaffolding**: Ball describes Cody/Cursor-era systems that chained models to propose and apply diffs. He says Claude tool-calling made that complexity obsolete: give the model tokens, tools, and room to work [08:16–10:25](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=496s).
- **Editor craft is being revalued**: Ball worked on Zed and tab completion. He says decades of Vim-level editing skill started to feel less central once models could predict and edit code directly [06:15–08:16](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=375s).
- **The future engineer is more than a language typist**: He argues that software work defined purely by programming-language fluency is dying. He says systems judgment, customer understanding, debugging, maintenance, and product sense remain valuable [22:27–26:35](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=1347s).
- **Software assumptions are changing**: Ball says software engineering assumed human-written code was slow, scarce, and expensive. He says faster, cheaper models change build-vs-buy, enterprise software, and developer-tool assumptions [26:35–35:39](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=1595s).
- **Prompt and harness tricks matter less over time**: He compares agent harnesses to scaffolding or a cast: useful while models are weak, but something that should fall away as the model improves [36:43–38:33](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2203s).
- **Tools are trending back toward the shell**: Ball traces a move away from specialized edit tools and custom diff formats. Models can use `cat`, `wc`, editors, and short scripts, making shell access increasingly sufficient [38:33–41:36](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2313s).
- **A coding agent is mostly a loop plus model capability**: Referring to his "How to build an agent" argument, Ball says the emperor has no clothes. He says the magic is less in hidden harness complexity and more in the model, context, and tools [41:36–43:42](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2496s).
- **The next problem is organizing many agents**: As individual agents become capable, product work shifts to where they run and how they are tracked. It also shifts to preserving work and helping humans coordinate fleets of agents [43:42–46:24](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2622s).
- **Current SDLC tools assume scarce human code**: Ball calls ticket-to-agent-to-PR-to-agent-review workflows transitional. He says GitHub, CI, PRs, and contribution graphs were designed around human-produced code as a precious artifact [46:24–49:24](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2784s).
- **Amp wants to keep breaking toward the frontier**: He says models rug-pull product assumptions every few months. Therefore, Amp prefers users who want to move with the frontier over stable workflows that hold the product back [1:12:15–1:18:28](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=4335s).

Full video: <https://www.youtube.com/watch?v=thMFsqe8kbQ>
