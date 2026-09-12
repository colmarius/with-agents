---
title: "Manage GKE services with Cloud Operations"
resourceId: 63
date: "2021-06-30"
collection: "google-cloud-engineering-for-reliability"
order: 15
videoId: "L6JnAhp3E-c"
---

Healthy infrastructure does not necessarily mean users are receiving a reliable service. This Google Kubernetes Engine (GKE) demonstration starts with a service reliability alert, traces it to a recent deployment, and rolls that deployment back to restore service ([00:00–03:10](https://www.youtube.com/watch?v=L6JnAhp3E-c&t=0s)).

### Key Points Covered

- **Measure the service users experience**: A service-level indicator (SLI) measures reliability; a service-level objective (SLO) sets its target. Infrastructure measurements can help explain a failure, but they do not replace these service-level signals ([00:00–01:04](https://www.youtube.com/watch?v=L6JnAhp3E-c&t=0s)).
- **Correlate symptoms with workload changes**: Revision history shows a rollout shortly before the alert, making it a strong suspect ([01:04–03:10](https://www.youtube.com/watch?v=L6JnAhp3E-c&t=64s)).
- **Rollback is a mitigation and a test**: In the example, the SLI recovers and the alert stops after rollback ([02:07–03:10](https://www.youtube.com/watch?v=L6JnAhp3E-c&t=127s)).
- **Interpretation**: The timing and recovery make the rollout a strong suspect, but the demonstration does not identify the code defect that caused the failure ([02:07–03:10](https://www.youtube.com/watch?v=L6JnAhp3E-c&t=127s)).

Full video: <https://www.youtube.com/watch?v=L6JnAhp3E-c>
