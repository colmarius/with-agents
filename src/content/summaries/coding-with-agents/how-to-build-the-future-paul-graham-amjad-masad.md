---
title: "How To Build The Future: Paul Graham & Amjad Masad"
resourceId: 218
date: "2026-11-07"
---

Paul Graham and Replit's Amjad Masad discuss how a browser-based programming platform became an agent-driven software builder. Masad's account connects three things: observing users manually moving code and errors between ChatGPT and Replit, giving agents access to existing infrastructure, and helping people inside companies build their own tools.

**Evidence basis:** This summary uses the saved English auto-generated captions, without an original-audio check. Replit's engineering history and customer outcomes are Masad's first-party account, not independent reliability or productivity evidence. Claims about replacing outsourcing, mass cloud adoption, and self-driving companies are opinions or forecasts.

### Automate the user's whole feedback loop

- **The starting point was watching non-programmers work.** Masad describes users copying generated code into Replit, copying errors back into ChatGPT, and repeating until something worked. The agent product aimed to automate that cycle, with a working program as the stopping condition rather than a single chat response. The interview does not specify how that condition was verified. [01:47–03:38](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=107s)
- **The early harness compensated for weaker models.** Masad says the surrounding software that coordinated model actions was much more complex in 2024. Early editing tools had to handle unreliable line numbers and incomplete generated functions; he contrasts that with newer models that can edit through ordinary shell commands. His account supports revisiting old workarounds as capabilities change, not assuming that every agent now needs only a shell. [03:38–04:25](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=218s), [18:21–20:15](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=1101s)

### Infrastructure made the agent more than a code generator

- **Agents could provision and deploy, not just produce text.** Replit already had infrastructure for databases and hosting, which the team exposed through tool calls. Masad presents that prior systems work as a reason the product could turn a request into a running application. [04:25–05:13](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=265s)
- **Collaboration primitives carried over to agents.** Masad says the first agent acted as another user in Replit's existing shared environment, so a person and an agent could work on the same project. The company then placed an agent team between its infrastructure and IDE teams, with those teams exposing execution and editing capabilities for agents. [16:32–18:21](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=992s)
- **Guardrails have product costs as well as benefits.** Masad describes sandboxing and a transactional, reversible file system beneath the simple interface. He says safeguards can make Replit slower or more expensive, while helping it appeal to enterprise buyers who care about reliability and security. These are vendor claims; the conversation provides no comparative security evaluation. [14:55–16:32](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=895s)

### Enterprise adoption depends on both builders and administrators

Masad describes employees replacing internal tools and legacy systems, often in companies whose main business is not software. He gives examples of large differences between planned project budgets and Replit spending, but supplies no independently checked cost breakdown, maintenance comparison, or long-term outcome. His broader claim that outsourcing is becoming obsolete goes beyond those anecdotes. [22:14–25:05](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=1334s)

The practical tension is between those employees and the people who buy and govern software. Enterprise readiness includes administrator controls and budgets. Masad objects to equal token allowances because he believes the value created varies greatly between users; Graham suggests making valuable work more visible. Masad's proposed approach is to meet buyers' controls initially, then develop better ways to connect spending to results. The interview offers no implemented method for measuring that value. [25:05–27:53](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=1505s)

### Treat the larger vision as a direction, not a demonstrated outcome

- **The self-driving company is an expanded product ambition.** Masad describes Replit itself as the first customer and experimental setting for a platform intended to change how firms work. Both speakers favor incremental work with customers over announcing a sweeping strategy without concrete use cases. They do not demonstrate an autonomous company or define its operating controls. [27:53–32:29](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=1673s)
- **Large agent fleets motivate Masad's cloud forecast.** He predicts growth from one agent per person to thousands and argues that such workloads cannot remain on a laptop. This is a scaling argument for remote execution, not evidence that all development already requires cloud infrastructure. [33:20–35:25](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=2000s)
- **Long experience and revisable predictions inform product bets.** Graham links Masad's foresight to years spent pursuing online programming. Masad also describes actively making and revising predictions, expecting continued computing progress, and being willing to abandon parts of his own craft. These are their explanations of product judgment, not a validated forecasting method. [07:43–09:24](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=463s), [40:27–44:00](https://www.youtube.com/watch?v=Q78dJ0vkWe8&t=2427s)
