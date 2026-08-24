---
title: "Safe serverless deployments with Cloud Run"
resourceId: 59
date: "2024-02-20"
collection: "google-cloud-serverless-expeditions"
order: 12
videoId: "ArDuQDjW-DQ"
---

The presenters order four practices for safer releases: CI/CD, reliable rollback, canaries, and hidden feature rollouts. The progression matters—teams can automate and rehearse recovery before investing in sophisticated cohort infrastructure.

### Key points

- **Automate build and verification first:** CI builds and tests submitted code; delivery may deploy automatically to test while an operator still decides when an automated production pipeline proceeds [00:01:03]-[00:04:14].
- **Recover before debugging under pressure:** The presenter recommends a fast, reliable rollback to a known version, then investigating once service is restored [00:04:14]-[00:06:21].
- **Canaries limit initial exposure:** The demonstration uses Cloud Run traffic splitting and session affinity, then suggests progressively larger cohorts and observation windows [00:06:21]-[00:10:35]. Its percentages and timing are heuristics, not universal rollout formulas.
- **Feature controls separate deployment from exposure:** Hidden code can be activated for selected cohorts and disabled without a code rollback, but requires management tooling, application integration, metrics, and capacity planning [00:10:35]-[00:14:46].
- **Adopt in priority order:** The presenter explicitly recommends starting with CI/CD, then adding rollback, canaries, and experiments only as their value justifies the cost [00:14:46]-[00:16:51].

This February 2024 episode describes design practices, while its Cloud Run controls, product names, and delivery interfaces are point-in-time. Fit cohort assignment, session affinity, observation windows, feature controls, metrics, rollback safety, and capacity to the current application.

Full video: <https://www.youtube.com/watch?v=ArDuQDjW-DQ>
