---
title: "McKay Wrigley on Agent-Driven Development"
resourceId: 4
series: "next-token"
episode: 2
date: "2025-12-04"
---

In this episode of Next Token, Ryan Carson and Thorsten Ball interview McKay Wrigley about memory architectures, agent-friendly programming stacks, Opus 4.5, and what changes when developers increasingly manage agents instead of typing every implementation detail.

McKay Wrigley is the founder of Takeoff AI, where he is building an AI coding tutor. He is known for teaching developers how to build with AI and has been an early advocate for agentic coding workflows [00:00:08].

### Key Points Covered

* **Titans and persistent memory**: The hosts discuss Google's Titans research and what persistent neural memory could mean for coding agents: less hacky memory tooling, richer project/team/user context, and new questions about how to reset or control what the agent remembers [03:10]-[11:46].

* **Some stacks are easier for agents**: Go is attractive because it is simple, easy to run in reinforcement-learning setups, and has one obvious way to do many things. TypeScript and Python benefit from abundant training data, while today's default web stack often looks like Next.js, React, TypeScript, Tailwind, and shadcn/ui [11:46]-[17:54].

* **Frontier agents change junior-engineer work**: AWS Frontier Agents prompts a discussion about autonomous DevOps, security, and developer agents. The group argues that learning fundamentals still matters, but junior engineers may need more product judgment and entrepreneurial taste as rote work is automated [17:54]-[29:05].

* **KV cache is the transformer working-memory bottleneck**: The "nerd alert" segment explains KV cache as the stored keys and values used during generation. It speeds inference but becomes a GPU-memory bottleneck at long context lengths, which is why deeper memory architectures matter [30:07]-[32:14].

* **Opus 4.5 feels more set-and-forget**: McKay compares Opus 4.5 to Waymo: it finds the right codebase context, navigates tool calls efficiently, and earns enough trust that he gives it more complex tasks and reviews more like a senior engineer [32:14]-[38:59].

* **Review shifts from line-by-line to orchestration**: The discussion frames agent work as a trust-and-review loop. Humans test, spot-check, and manage multiple threads instead of reading every generated line as if it were handwritten [37:01]-[40:37].

* **Visual feedback loops are the next practical frontier**: The group expects better computer use, screenshot reasoning, and image-to-code workflows. Codebases can help today with `AGENTS.md`, nested instructions, screenshots, fixtures, and commands that make state inspectable, even if some scaffolding fades as models improve [40:37]-[52:23].

* **Practical tip: try screenshot-to-code again**: McKay's concrete recommendation is to use Opus 4.5 with screenshots or visual references because its vision and code-generation capabilities make that workflow more effective than before [52:23]-[53:14].

* **Industry metrics are noisy but directional**: The true/false segment covers AI-generated code at Google, Stack Overflow adoption surveys, Amazon Q's claimed developer-year savings, and code churn. The numbers are imperfect, but all point toward coding workflows being reorganized around agents [53:14]-[59:17].

You can watch the full episode here:

- YouTube: <https://www.youtube.com/watch?v=Q8F9N3ugSng>
