---
addedDate: '2026-06-27'
title: "LLMs are killing Agent Harness"
resourceId: 31
collection: "the-west-coast-builders"
order: 5
videoId: "thMFsqe8kbQ"
date: "2026-05-20"
---

Thorsten Ball argues that better models need less specialized software around them. That surrounding software, the agent harness, supplies tools, context, and the loop that returns tool results to the model. He expects it to become simpler while coordinating many agents becomes a larger product problem.

### Key Points Covered

- **Amp came from removing multi-model scaffolding**: Ball describes Cody/Cursor-era systems that chained models to propose and apply diffs. He says Claude tool-calling made that complexity obsolete: give the model tokens, tools, and room to work [08:16–10:25](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=496s).
- **Manual editing skill matters less once models edit code**: Ball worked on Zed and tab completion. He says decades of Vim-level editing skill started to feel less central once models could predict and edit code directly [06:15–08:16](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=375s).
- **Programming-language fluency alone no longer defines the job**: He argues that software work defined purely by programming-language fluency is dying. He says systems judgment, customer understanding, debugging, maintenance, and product sense remain valuable [22:27–26:35](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=1347s).
- **Cheap code undermines old assumptions about building software**: Ball says software engineering assumed human-written code was slow, scarce, and expensive. He says faster, cheaper models change build-vs-buy, enterprise software, and developer-tool assumptions [26:35–35:39](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=1595s).
- **Prompt and harness tricks matter less over time**: He compares agent harnesses to scaffolding or a cast: useful while models are weak, but something that should fall away as the model improves [36:43–38:33](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2203s).
- **Tools are trending back toward the shell**: Ball traces a move away from specialized edit tools and custom diff formats. Models can use `cat`, `wc`, editors, and short scripts, making shell access increasingly sufficient [38:33–41:36](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2313s).
- **A coding agent is mostly a loop plus model capability**: Referring to his "How to build an agent" argument, whose subtitle was "the emperor has no clothes," Ball says there is no hidden secret: an agent is essentially a loop. He says what makes it work is less hidden harness complexity and more the model, context, and tools [41:36–43:42](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2496s).
- **The next problem is organizing many agents**: As individual agents become capable, product work shifts to where they run and how they are tracked. It also shifts to preserving work and helping humans coordinate fleets of agents [43:42–46:24](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2622s).
- **Current development-lifecycle tools assume scarce human code**: Ball calls it outdated to assign a ticket to an agent, have it open a PR, and have another agent review it. He says GitHub, CI, PRs, and contribution graphs were designed around human-produced code as a precious artifact [46:24–49:24](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=2784s).
- **Amp will keep making breaking changes to follow model progress**: He says new models overturn nearly every software product assumption every few months. Therefore, Amp prefers users who want to move with the frontier over stable workflows that hold the product back [1:12:15–1:18:28](https://www.youtube.com/watch?v=thMFsqe8kbQ&t=4335s).

Full video: <https://www.youtube.com/watch?v=thMFsqe8kbQ>
