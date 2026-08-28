---
title: "How Forward Deployed Engineering is done at Factory — Eno Reyes"
resourceId: 88
date: "2026-07-28"
---

Factory co-founder and CTO Eno Reyes describes the company’s deployed engineers as a product-feedback and customer-enablement function, not a consulting team that performs migrations for customers. The intended operating model is to learn how a customer builds software, adapt Factory’s core product, help establish workflows and validation, and leave the customer able to scale the approach internally.

This is a first-party product and recruiting talk, not a customer case study. It shows no named engagement, discovery artifact, integration plan, evaluation design, deployment record, or measured customer outcome. The migration, autonomy, model-independence, air-gap, and agent-capability claims are not independently demonstrated; the 87% bug-reduction figure is explicitly hypothetical, and Factory’s autonomy ratios are reported without definitions detailed enough to reproduce them.

### Key Points Covered

- **Do not turn deployed engineering into outsourced delivery**: Reyes says Factory will not take over a customer’s codebase modernization as professional services. Deployed engineers should improve the product and enable the customer rather than become a consulting implementation team [00:03:15]-[00:04:07].
- **Route customer discovery back into the core product**: The role gathers information from engineering leaders and working engineers about the customer’s environment, software-development process, and AI use, then feeds it back into product changes. The talk does not specify a discovery cadence, artifact, prioritization rule, or conflict-resolution process [00:04:06]-[00:04:58].
- **Model the full software loop**: Reyes maps customer and internal signals into prioritization, plans, code changes, review, QA, security checks, deployment, monitoring, and new signals. He presents uninterrupted signal-to-deploy flow as the autonomy target while keeping people responsible for engineering the system around it [00:04:57]-[00:06:58].
- **Make integration self-service and keep customer control**: Factory’s stated target is for Droid to self-assemble in large customer environments, including air-gapped deployments. Customers retain traces and data while centralized controls govern information flow; the recording provides no architecture, rollout sequence, or security assessment for these claims [00:06:57]-[00:09:11].
- **Connect technical work to an outcome and maturity path**: Deployed engineers are expected to combine engineering and business knowledge, define an ROI story, and help the organization move from direct code changes toward maintaining a system that produces software. The presentation offers no actual baseline, maturity rubric, or outcome measurement [00:09:10]-[00:11:00].
- **Treat validation as the autonomy constraint**: Reyes defines agent readiness by the deterministic loops available to check work—linters, type checks, security scans, tests, and task-specific validators. He says stronger validation enables longer runs, while harder improvements require changing human workflows rather than asking the agent to fix every issue automatically [00:12:05]-[00:13:57].
- **Bound long-running work by verifiable completion**: Factory’s Missions product is described as planning a bounded task, supplying validators, and running agents with little further intervention. Claims about fully autonomous migrations of 30–50-million-line codebases and other complex domains are first-party reports without tasks, traces, success criteria, or before-and-after results [00:13:57]-[00:15:58].
- **Build exemplars, then hand scaling to the customer**: The proposed handoff is to establish the model in a few places and let the customer’s team spread it. Reyes warns that an exemplar too far removed from ordinary work becomes a “theme park”; he also acknowledges that constrained internal tools can close verification loops that Factory’s terminal harness still cannot [00:16:22]-[00:19:42].

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=wpOA-UXynoM).
