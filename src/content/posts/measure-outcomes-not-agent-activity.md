---
title: 'Measure Outcomes, Not Agent Activity'
description: 'A practical measurement framework for coding-agent adoption: separate activity from delivered value, net out rework and review cost, segment results, and keep vendor telemetry bounded.'
pubDate: 2026-07-31
tags: ['AI Agents', 'Measurement', 'Engineering Leadership', 'Adoption']
draft: false
unlisted: false
order: 7
---

## Activity is the easiest thing to inflate

> Activity says the tool was used; outcomes say whether the work improved.

A coding agent can increase generated lines, commits, pull requests, tokens, and concurrent tasks almost by definition. Those numbers help operate the system. They do not establish that the system delivers more useful software.

Yegor Denisov-Blanch of Stanford argues that commit and pull-request counts ignore task size, greenfield experiments miss existing-codebase costs, and self-reported productivity does not reliably measure output ([00:04:51–00:06:49](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=291s)). His presented analysis instead estimates delivered functionality and later rework.

Quinn Slack, a Sourcegraph co-founder, shows the same category error on the adoption side: survey interest, subscriptions, suggestion exposure, and sustained active use have different denominators ([00:01:03–00:04:12](https://www.youtube.com/watch?v=Up6WVA07QdE&t=63s)). Access and impressions establish neither accepted work nor customer value.

Start by labeling a signal before interpreting it:

| Signal | What it can tell you | What it cannot establish alone |
| --- | --- | --- |
| Seats, training attendance, enabled accounts | Access and rollout reach | Useful or sustained use |
| Sessions, tokens, suggestions, agent tasks | Tool activity and operating load | Delivered functionality |
| Commits, lines, pull requests | Change volume | Task size, correctness, or value |
| Accepted changes and active-use events | Workflow adoption | Net productivity or customer outcome |
| Shipped functionality, rework, defects, review cost | Delivery-system behavior | Why the result changed without comparison and segmentation |

This table is editorial synthesis, not a metric endorsed by one speaker. Its purpose is to stop an activity proxy from silently becoming an outcome claim.

## Net out rework and review cost

> Gross output is not net delivery.

In a conference-presented observational analysis, Denisov-Blanch reports a roughly 30–40% gross increase reduced to 15–20% after later rework ([00:09:49–00:10:36](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=589s)). The talk does not make those estimates reproducible, and they are not a benchmark. The useful lesson is that first-pass output can count work the system later corrects.

Controlled studies do not produce one replacement number. Three randomized workplace experiments with 4,867 developers found about 26% more completed tasks from access to 2022–2023 GitHub Copilot, but no customer or downstream-cost outcome ([Cui et al., 2026](https://doi.org/10.1287/mnsc.2025.00535)). A METR trial instead found that 16 experienced open-source developers took 19% longer on 246 familiar-repository tasks using early-2025 tools ([Becker et al., 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). METR's later experiment could not provide a reliable current estimate because participation, submitted tasks, and concurrent-agent work became selective ([2026 design update](https://metr.org/blog/2026-02-24-uplift-update/)). Different treatments and outcome layers do not yield a universal forecast.

Review can create a second gap. In a favorable single-company rollout, pull-request volume grew 3.1× while the reviewer pool grew 1.5×. Human-review coverage fell from 89% to 68%, automated review rose from roughly 19% to 84%, and substantive human review fell from roughly 39% to 21% ([He et al., 2026](https://arxiv.org/html/2607.01904)). The July 2026 preprint is observational, the company targeted pull-request throughput, and merge and revert rates are weak short-horizon quality proxies. It supports review displacement, not a universal doubling.

DORA's qualitative analysis of 1,110 Google engineer responses and Brian Scanlan's Intercom account report similar verification and review pressure ([DORA](https://dora.dev/insights/balancing-ai-tensions/); [00:15:18–00:16:06](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=918s)). Scanlan also notes stronger models as a concurrent change ([00:03:57–00:05:01](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=237s)). These reports identify costs to instrument, not causal taxes.

The practical unit is therefore not “agent output.” Choose a primary delivery outcome, then select guardrails from:

- intended functionality accepted and shipped
- rework after the first implementation at a fixed follow-up horizon
- escaped defects, separated by severity rather than flattened into one count
- human-review coverage, substantive-review rate, and verification time
- queue time when generated work waits for review or integration
- operating cost, including inference, infrastructure, and failed runs

Per-change evidence still matters. [Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the tactical proof stack; team measurement asks what that proof costs and whether review capacity keeps up across many changes.

## Segment before you forecast

> One average hides the work where agents help, stall, or add cost.

Denisov-Blanch describes larger gains for simpler greenfield tasks and smaller, sometimes negative, gains for complex mature-project work across 136 teams at 27 companies ([00:11:38–00:14:14](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=698s)). He also treats language, codebase-size, and context relationships as illustrative rather than established ([00:14:14–00:17:09](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=854s)).

Do not average away those conditions. Before a pilot starts, tag work by the dimensions likely to change the result:

- greenfield, newer repository, or mature system
- routine bounded change or high-complexity work
- system, language, and framework familiarity
- codebase size, context quality, and tool or model generation
- proof strength and consequence of failure
- developer experience and whether the work requires learning
- voluntary or assigned adoption, submitted task mix, and concurrent-agent use

Then compare like with like. A tool may be valuable for repository research, repetitive changes, or test scaffolding while adding little to architecture-heavy work. That is more useful than a company-wide uplift number because it tells the team where to use the tool.

Selection must be recorded before averaging too. METR found that some developers withheld tasks they strongly preferred to do with AI and some would not participate in a no-AI condition. Segmenting only the submitted work cannot recover the missing tasks or people. Record refusals, crossover, abandonment, and task withholding alongside the result.

## Treat every evidence type as bounded

> Match each claim to the decision its study design can support.

Commercial and internal reports can reveal operating detail; randomized evidence can estimate a bounded treatment effect. Neither transfers automatically. Name the design, outcome layer, population, period, affiliation, missing controls, and decision. Use presenter and qualitative evidence to identify mechanisms worth instrumenting, observational telemetry to find bottlenecks, and controlled studies for claims their actual treatment and outcome support.

## Run a pilot that can disconfirm the rollout

> Decide what would make you stop before the activity dashboard turns green.

The scorecard below is editorial synthesis from the reviewed evidence, not a consensus framework.

Capability matters when the work requires learning. In one small, short vendor-affiliated experiment, AI users scored lower on an immediate comprehension quiz without a significant average task-time improvement ([Shen and Tamkin, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)). It does not establish long-term deskilling, but it justifies checking whether developers can explain and debug unfamiliar systems they must own.

| Layer | Predeclare | Review together |
| --- | --- | --- |
| Adoption | One meaningful active-use event and the eligible population | Sustained users, refusals, crossover, task withholding, abandonment |
| Delivery | Unit, denominator, comparison, and outcome window | Completed units, elapsed delivery time, blocked and failed work |
| Quality | Rework, defect, and follow-up definitions | Revisions, incidents, escaped defects by severity, recovery time |
| Review and cost | Which human and machine effort counts | Coverage, substantive review, queue age, verification, inference and infrastructure cost |
| Capability | Whether unfamiliar work requires retained understanding | Ability to explain, diagnose, and safely modify the resulting system |
| Customer outcome | The product or service result the work should improve | The selected outcome plus contrary indicators and unintended effects |

Run the pilot on real, bounded work. Prefer randomized assignment where feasible; otherwise keep a stable comparison and state what it cannot control. Log concurrent model, tool, staffing, and process changes. Review quality again after a predeclared horizon suited to the system's release and incident cycle. Segment before averaging, and do not turn a diagnostic indicator into a performance target.

Predeclare the decision as well as the dashboard:

- **Expand** when representative delivery improves without unacceptable guardrail regressions.
- **Constrain** when the gain belongs only to defined task or team segments.
- **Redesign** when implementation speeds up but review, rework, or queues absorb it.
- **Stop** when quality, security, cost, ownership, or recovery crosses the agreed boundary.
- **Call it inconclusive** when selection, crossover, task mix, or concurrent changes prevent a credible comparison.

Keep one primary delivery outcome and a few guardrails. State missing evidence rather than substitute activity. A defensible conclusion might be: “This workflow reduced elapsed delivery time on routine dependency updates without increasing reviewer minutes or follow-up fixes in the predeclared window.” That is more useful than “AI made engineering 30% faster” because another team can inspect the boundary.

[Agentic Coding in 2026](/posts/agentic-coding-2026) maps the workflow choices behind the pilot. This article owns the measurement decision: define value, count the whole system, segment the work, preserve source limits, and make the rollout earn expansion.

## Sources used

- [Cui et al., “The Effects of Generative AI on High-Skilled Work”](https://doi.org/10.1287/mnsc.2025.00535) — randomized 2022–2023 workplace evidence with Microsoft authors and vendor participation; completed tasks, not customer outcomes.
- [METR's early-2025 study](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) and [2026 update](https://metr.org/blog/2026-02-24-uplift-update/) — a bounded slowdown and later selection and concurrency failures.
- [He et al., “AI Writes Faster Than Humans Can Review”](https://arxiv.org/html/2607.01904) — single-company observational preprint on throughput and review displacement.
- [DORA, “Balancing AI tensions”](https://dora.dev/insights/balancing-ai-tensions/) — a Google program's qualitative analysis of potentially prompted responses from Google engineers; no causal effect size.
- [Anthropic's coding-skills study](https://www.anthropic.com/research/AI-assistance-coding-skills) — small, short, vendor-affiliated randomized evidence; not a durable deskilling claim.
- [Yegor Denisov-Blanch, “Does AI Actually Boost Developer Productivity?”](https://www.youtube.com/watch?v=tbDDYKRFjhk) — presenter-reported activity, rework, and segmentation observations ([00:04:51–00:17:09]).
- [Brian Scanlan, “How Building with AI Can Double the Throughput of Your Engineering Team”](https://www.youtube.com/watch?v=4_VQBbs2iQA) — Intercom presenter report on throughput, review pressure, and confounds ([00:03:57–00:18:58]).
- [Quinn Slack, “The AI emperor has no DAUs”](https://www.youtube.com/watch?v=Up6WVA07QdE) — Sourcegraph-affiliated adoption and verification-cost heuristics ([00:01:03–00:16:54]).
