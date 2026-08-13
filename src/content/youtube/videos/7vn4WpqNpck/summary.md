---
title: "Benchmarking Coding Agents on New vs Legacy Codebases — Denys Linkov, Wisedocs"
videoId: 7vn4WpqNpck
sourceUrl: "https://www.youtube.com/watch?v=7vn4WpqNpck"
publishedAt: "2026-08-08T19:00:06Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Denys Linkov of Wisedocs examines whether the company was right to consolidate and refactor a legacy, multi-repository medical-claims AI pipeline rather than wait for coding agents to improve. He argues that stronger models and harnesses make refactoring faster, but reliable delivery still depends on scoped tasks, verification, organizational guardrails, and business context.

Editorial: The evidence is a Wisedocs case study plus Linkov's reruns of selected tasks on newer models. Reported speed, quality, cost, and delivery gains are company and speaker claims; the talk does not provide a reproducible benchmark protocol, full task set, prompts, scoring rubric, or independent validation.

## Key Ideas

- Wisedocs chose a six-month refactor because its pipeline across more than ten legacy repositories was hard to scale, update, and maintain while customer demand was growing. [00:00:01]-[00:00:54]
- Linkov says an earlier implementation with O3 took three hours of iterative prompting and made ten major mistakes, while his later reruns had Sonnet 4.6 solve it after one extra iteration and Opus 4.8 nearly one-shot it. [00:05:20]-[00:06:10]
- He argues that agent capability should be judged at high reliability thresholds, not only the commonly shown 50% task-completion horizon, because failed long-running attempts consume compute and attention. [00:07:12]-[00:08:48]
- The refactor consolidated ten repositories into a monorepo; Linkov reports faster feature delivery and broader developer participation after reaching parity, while acknowledging that lines of code and commit rate are imperfect productivity measures. [00:09:43]-[00:11:35]
- A zero-shot GPT 5.5 extra-high attempt finished quickly but produced only scaffolding and omitted core model-serving work, which Linkov uses to argue that large refactors still require validation. [00:11:35]-[00:12:30]
- Linkov concludes that the refactor was worthwhile because Wisedocs reports lower pipeline time and cost, support for larger files, and features delivered in under a week rather than months. [00:13:26]-[00:14:28]

## Practical Implications

- Editorial: Evaluate refactors against business outcomes and system constraints, not model progress alone; waiting for better models can leave compounding complexity and poor system understanding in place.
- Editorial: Break migration work into research, proof-of-concept, implementation, and verification stages, and check product or library capabilities rather than trusting polished research output.
- Editorial: Use high-confidence task sizing when delegating unattended work, retain human review where shared understanding matters, and validate end-to-end behavior rather than accepting generated scaffolding.
- Editorial: A monorepo may simplify end-to-end testing, deployment, and sandbox setup, although Linkov notes that newer models can navigate multiple repositories more effectively than before. [00:14:28]-[00:15:30]

## Questions and Tensions

- Editorial: The model comparison spans changing models, harnesses, tool access, and interaction patterns, so it does not isolate which factor caused the reported improvement.
- Editorial: The talk reports one company migration and selected reruns rather than a controlled new-versus-legacy benchmark; its results may not generalize to other architectures, teams, or task distributions.
- Editorial: Linkov forecasts that substantial refactors may become consistently one-shot-capable within six months, but this is a prediction rather than measured evidence. [00:11:35]-[00:12:30]
- Editorial: Faster generation can reduce migration cost while simultaneously increasing review burden and codebase opacity; the case study supports preserving verification and system understanding as explicit constraints.

## Source

- https://www.youtube.com/watch?v=7vn4WpqNpck
- [transcript.md](./transcript.md)
