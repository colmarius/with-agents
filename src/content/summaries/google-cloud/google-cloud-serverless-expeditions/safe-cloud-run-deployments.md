---
title: "Safe serverless deployments with Cloud Run"
resourceId: 59
date: "2024-02-20"
collection: "google-cloud-serverless-expeditions"
order: 12
videoId: "ArDuQDjW-DQ"
---

Safer releases start with repeatable deployment and a reliable way back when new code fails. In this February 2024 discussion, Steve draws on his experience as a Google site reliability engineer to recommend four practices in order: automated builds and delivery, fast rollback, gradual releases, and independently controlled features.

### Key points

- **Automate build and verification first:** Continuous integration (CI) builds and tests submitted code. Continuous delivery can automatically deploy it to a test environment while leaving an operator to approve production deployment. Automation removes repeated manual steps without requiring every commit to reach users immediately [01:03–04:14](https://www.youtube.com/watch?v=ArDuQDjW-DQ&t=63s).
- **Recover before debugging under pressure:** The presenter recommends a fast, reliable rollback to a known version, then investigating once service is restored [04:14–06:21](https://www.youtube.com/watch?v=ArDuQDjW-DQ&t=254s).
- **Canaries expose fewer users to an unproven version:** A canary release sends a small share of users to new code, then expands only after observation. Steve describes Cloud Run traffic splitting and session affinity, which keeps a user on one version rather than changing the interface between requests. His suggested percentages and waiting periods are examples, not universal formulas [06:21–10:35](https://www.youtube.com/watch?v=ArDuQDjW-DQ&t=381s).
- **Feature controls separate deploying code from showing it:** Hidden features can be enabled for selected groups of users and disabled without rolling back code. Steve's example is a new toolbar that overlaps the purchase button: testing it with a small group can reveal the problem before everyone sees it. This requires feature-management tooling, application integration, and measurements of success and failure [10:35–15:49](https://www.youtube.com/watch?v=ArDuQDjW-DQ&t=635s).
- **Adopt in priority order:** The presenter explicitly recommends starting with CI/CD, then adding rollback, canaries, and experiments only as their value justifies the cost [14:46–16:51](https://www.youtube.com/watch?v=ArDuQDjW-DQ&t=886s).

Full video: <https://www.youtube.com/watch?v=ArDuQDjW-DQ>
