---
title: "AI and eCommerce with Shopify CEO Tobias Lütke"
resourceId: 146
date: "2025-12-18"
---

Shopify CEO Tobi Lütke joins Intrepid Growth Partners' Ajay Agrawal, reinforcement-learning researcher Richard Sutton, economist Sendhil Mullainathan, applied-AI scientist Niamh Gavin, and robotics and AI researcher Suzanne Gildert. Their discussion examines shopper simulation, outcome signals, and a distinction between autonomous-agent benchmarks and evaluations of people working with AI.

**Evidence basis:** This summary uses the saved English auto-generated captions, captured September 19, 2026, without an original-audio check. Architecture, accuracy, adoption, and product outcomes are participant accounts rather than independent evaluations. The speakers' affiliations come from the episode introduction and primary show notes.

## Simulate behavior, then validate against reality

- **SimGym runs shopper agents through a rendered store.** Lütke describes parameterized agents using a vision-model browser loop to scroll, inspect products, and navigate a proposed storefront. The audience parameters draw on Shopify's account of transaction, browsing, persona, and demographic data. He reports useful accuracy for merchants whose low traffic makes live A/B testing slow, but the episode provides no accuracy metric or independent comparison. [07:09–14:00](https://www.youtube.com/watch?v=lqQkGapkkEc&t=429s), [29:41–31:49](https://www.youtube.com/watch?v=lqQkGapkkEc&t=1781s)
- **A sale is a strong outcome signal, not a complete definition of value.** Sutton and the panel emphasize that Shopify can observe transactions across storefront, payment, fulfillment, shipping, returns, and chargebacks. Those signals help compare simulation with real outcomes. They still do not establish that a simulated shopper faithfully represents why a person acted or whether optimizing purchases captures all merchant and customer goals. [32:46–33:36](https://www.youtube.com/watch?v=lqQkGapkkEc&t=1966s)

## Evaluate the human-agent system

Mullainathan contrasts a benchmark for autonomous correctness with one for assisted human performance. In the latter, useful properties include making errors easy to spot, supporting correction and preference feedback, and producing varied ideas for a person to select. He argues that errors likely to fall inside human blind spots deserve more attention than obvious mistakes a reviewer will catch. This is an evaluation proposal, not a benchmark result presented by the panel. [51:46–56:43](https://www.youtube.com/watch?v=lqQkGapkkEc&t=3106s)

Lütke connects that proposal to Shopify's product stance: Sidekick and related systems produce insights and actions in front of the merchant rather than silently taking over the business. He describes this as assistive technology with a person in the loop. The design preserves a decision-maker, but the conversation does not specify approval boundaries for every action. [57:45–59:50](https://www.youtube.com/watch?v=lqQkGapkkEc&t=3465s)

## Relevance after nine months of agent progress

Browser use, tool calling, and environment-based agent evaluation became much more common during 2026. That makes the existence of a browsing shopper agent less novel, while making the unresolved evaluation problem more important: an agent can complete a realistic interaction without being a valid substitute for a real user. [Don't Build Agents, Build Environments Instead](/summaries/coding-with-agents/dont-build-agents-build-environments-instead/) similarly emphasizes executable environments, while the [Production Agent Reliability collection](/summaries/coding-with-agents/production-agent-reliability-ai-engineer-guided-collection/) separates component checks from lifecycle outcomes.

The durable lesson is to keep three evaluations separate: whether the agent can operate the interface, whether its behavior predicts the target population, and whether acting on its recommendation improves a real outcome. A purchase, return, or chargeback can help validate the last two, but simulated success alone cannot.
