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

Yegor Denisov-Blanch of Stanford makes the measurement problem concrete. In a study presented as large-scale and longitudinal, he argues that commit and pull-request counts ignore task size, greenfield experiments miss much of the cost of existing-codebase work, and self-reported productivity does not reliably measure output ([00:04:51–00:06:49](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=291s)). The study instead estimates delivered functionality from source-code changes and then accounts for later rework.

Quinn Slack, a Sourcegraph co-founder, shows the same category error on the adoption side. Survey interest, paid subscriptions, suggestion exposure, and sustained active use have different denominators and answer different questions ([00:01:03–00:04:12](https://www.youtube.com/watch?v=Up6WVA07QdE&t=63s)). A seat says someone can use the tool. A suggestion impression says the tool appeared. Neither says the developer accepted useful work or that a customer received value.

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

Denisov-Blanch reports a roughly 30–40% gross productivity increase from AI-assisted coding in the studied data, reduced to an average net gain of roughly 15–20% after accounting for rework ([00:09:49–00:10:36](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=589s)). Those figures are observations from that study, not a forecast for another team. Their durable lesson is the gap: measuring only the first completed change can count work that the same delivery system later has to correct.

Review can create a similar gap. Brian Scanlan, a senior principal engineer in Intercom's platform group, reports doubled pull-request throughput after the company standardized on Claude Code and identifies code review as the next bottleneck ([00:15:18–00:16:06](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=918s)), while also acknowledging a concurrent increase in model capability ([00:03:57–00:05:01](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=237s)). The report is useful as an internal operating observation. It does not isolate the cause of the increase or show that twice the pull-request activity produced twice the customer value.

The practical unit is therefore not “agent output.” It is a reviewed outcome moving through the whole system. For a pilot, track at least:

- intended functionality accepted and shipped
- rework after the first implementation, including reversions and follow-up fixes
- escaped defects, separated by severity rather than flattened into one count
- human review and verification time
- queue time when generated work waits for review or integration
- operating cost, including inference, infrastructure, and failed runs

Per-change evidence still matters. [Make the Agent Prove It](/posts/make-the-agent-prove-it) owns the tactical proof stack; team measurement asks what that proof costs, where it fails, and whether review capacity keeps up across many changes. [Your Repo Is the Memory](/posts/durable-context-coding-agents) covers the related comprehension debt that appears when output grows faster than shared understanding.

Tomas Reimers, a Graphite co-founder discussing its Diamond review product, offers one narrower review signal: whether a comment causes a corresponding code change. He reports about 50% for human comments and 52% for Diamond in Graphite's data ([00:08:15–00:09:17](https://www.youtube.com/watch?v=TswQeKftnaw&t=495s)). Actionability is more informative than comment volume, but it still does not prove that the comment was correct, important, or valuable downstream. A useful intermediate signal must remain intermediate.

## Segment before you forecast

> One average hides the work where agents help, stall, or add cost.

The Stanford presentation does not report one universal uplift. Denisov-Blanch describes larger gains for simpler greenfield tasks and smaller, sometimes negative, gains for complex work in mature projects; he says that comparison covers 136 teams at 27 companies ([00:11:38–00:14:14](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=698s)). He also says less-popular languages, larger codebases, and longer contexts can reduce usefulness, while explicitly treating the codebase-size relationship as illustrative rather than established ([00:14:14–00:17:09](https://www.youtube.com/watch?v=tbDDYKRFjhk&t=854s)).

Do not average away those conditions. Before a pilot starts, tag work by the dimensions likely to change the result:

- greenfield or existing system
- routine, bounded change or high-complexity change
- language and framework familiarity
- codebase size and available project context
- proof strength and consequence of failure
- developer experience with both the system and the agent workflow

Then compare like with like. A tool may be valuable for repository research, repetitive changes, or test scaffolding while adding little to architecture-heavy work. That is a better result than a company-wide uplift number because it tells the team where to use the tool.

This is the [Behavior Over Explanation](/posts/behavior-over-explanation) evidence method applied one level up: test the adoption story against representative work and preserve the conditions under which the behavior changes. Do not turn the observed 15–20% net range into a target. The source does not explain every decrease, control every organizational difference, or establish what another company should expect.

## Treat vendor telemetry as bounded evidence

> Evidence can be useful without being independent or universal.

Commercial and internal reports should not be discarded. They often expose the only available operational detail. They should be labeled precisely enough that a reader can judge what the number carries.

- **Intercom:** Scanlan describes a real adoption program with executive expectations, dedicated enablement, organization-specific guidance, reusable skills, telemetry, and review controls ([00:05:51–00:13:28](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=351s)). Its doubled pull-request throughput remains a presenter-reported activity measure, coincides with stronger models ([00:03:57–00:05:01](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=237s)), and lacks the definitions, comparison group, and customer outcomes needed for a causal productivity claim ([00:15:18–00:18:58](https://www.youtube.com/watch?v=4_VQBbs2iQA&t=918s)).
- **Graphite:** Reimers reports classifying 10,000 human review comments, a downvote rate below 4%, and the actionability result above ([00:03:11–00:09:17](https://www.youtube.com/watch?v=TswQeKftnaw&t=191s)). Graphite built the product and measured repositories available to it; the talk does not provide sampling, category agreement, repository mix, or false-negative measurement.
- **Sourcegraph:** Slack's distinction among adoption signals and his frequency-versus-verification-cost framework are useful product heuristics ([00:13:43–00:16:54](https://www.youtube.com/watch?v=Up6WVA07QdE&t=823s)). His market and adoption estimates mix public figures, private information, conference material, and stated intuition, while Sourcegraph has a commercial stake in code-AI adoption ([00:08:28–00:12:40](https://www.youtube.com/watch?v=Up6WVA07QdE&t=508s)).

The rule is not “vendor evidence is bad.” It is: name who measured what, on whose systems, with which missing controls, and for which decision. The [Amp factory-era case study](/posts/amp-factory-era-case-study) uses the same boundary for product telemetry. A team can use a presenter report to form a pilot hypothesis without treating it as independent proof.

## Run a pilot that can disconfirm the rollout

> Decide what would make you stop before the activity dashboard turns green.

The scorecard below is editorial synthesis from the reviewed evidence, not a consensus framework from the four speakers.

| Layer | Predeclare | Review together |
| --- | --- | --- |
| Adoption | One meaningful active-use event and a time window | Eligible users, sustained users, task mix, abandonment |
| Delivery | A task-sized unit of accepted functionality | Completed units, elapsed delivery time, blocked and failed work |
| Quality | Rework and defect definitions | Revisions, reversions, escaped defects by severity, recovery time |
| Review and cost | Which human and machine effort counts | Review time, queue age, verification work, inference and infrastructure cost |
| Customer outcome | The product or service result the work should improve | The selected outcome plus contrary indicators and unintended effects |

Run the pilot on real, bounded work. Record a comparable baseline or control where practical. Segment the results before averaging them. Keep stronger review on complex brownfield changes. Define expansion and stop conditions before leaders see faster pull-request graphs.

The scorecard should be small enough to operate. If a team cannot collect every layer, it should state the missing evidence rather than substitute activity. A defensible conclusion might be narrow: “This workflow reduced rework on routine dependency updates without increasing review time.” That is more useful than “AI made engineering 30% faster” because another team can inspect the task, cost, and boundary.

[Agentic Coding in 2026](/posts/agentic-coding-2026) maps the workflow choices behind the pilot. The [Coding with Agents resource hub](/resources/coding-with-agents) provides the reviewed talks and guided playlist route. This article owns only the measurement decision: define value, count the whole system, segment the work, preserve source limits, and make the rollout earn expansion.

## Sources used

- [Yegor Denisov-Blanch, “Does AI Actually Boost Developer Productivity?”](https://www.youtube.com/watch?v=tbDDYKRFjhk), especially [00:04:51–00:17:09] on activity proxies, delivered functionality, rework, and segmented results. Stanford is the load-bearing non-vendor source; the reported ranges are study observations, not transferable forecasts.
- [Tomas Reimers, “AI powered entomology: Lessons from millions of AI code reviews”](https://www.youtube.com/watch?v=TswQeKftnaw), especially [00:03:11–00:09:17] on review categories, feedback, and actionability. Reimers is a Graphite co-founder presenting Graphite's product data.
- [Brian Scanlan, “How Building with AI Can Double the Throughput of Your Engineering Team”](https://www.youtube.com/watch?v=4_VQBbs2iQA), especially [00:03:57–00:18:58] on the adoption program, activity metrics, reported throughput, review pressure, and confounds. The figures are Intercom presenter reports rather than controlled attribution.
- [Quinn Slack, “The AI emperor has no DAUs”](https://www.youtube.com/watch?v=Up6WVA07QdE), especially [00:01:03–00:16:54] on adoption definitions, market estimates, workflow frequency, and verification cost. Slack and Sourcegraph have a commercial stake in the product claims.
