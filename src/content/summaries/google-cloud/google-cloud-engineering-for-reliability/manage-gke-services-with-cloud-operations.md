---
title: "Manage GKE services with Cloud Operations"
resourceId: 63
date: "2021-06-30"
collection: "google-cloud-engineering-for-reliability"
order: 15
videoId: "L6JnAhp3E-c"
---

This episode demonstrates service-level triage for a workload on GKE: begin with a degraded SLI and firing SLO alert, inspect workload evidence and recent revisions, then roll back to a known-good version. The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Service health comes before infrastructure detail**: SLIs and SLOs describe user experience, while infrastructure signals help explain the cause ([00:00:00]-[00:01:04]).
- **Correlate symptoms with workload changes**: Revision history shows a rollout shortly before the alert, making it a strong suspect ([00:01:04]-[00:03:10]).
- **Rollback is a mitigation and a test**: In the example, the SLI recovers and the alert stops after rollback ([00:02:07]-[00:03:10]).
- **Correlation is not proof**: Timing and recovery support the hypothesis but do not establish root cause; deeper diagnosis is still required to prevent recurrence.

The Cloud Operations and GKE screens, alert configuration, revision model, commands, and rollback procedure are from 2021. Verify current interfaces and test rollback before depending on it.

Full video: <https://www.youtube.com/watch?v=L6JnAhp3E-c>
