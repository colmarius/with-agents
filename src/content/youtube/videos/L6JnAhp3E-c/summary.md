---
title: "Manage GKE services with Cloud Operations"
videoId: L6JnAhp3E-c
sourceUrl: "https://www.youtube.com/watch?v=L6JnAhp3E-c"
publishedAt: "2021-06-30T15:00:08Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter demonstrates service-level triage for a service running on GKE: start from a degraded SLI and firing SLO alert, correlate the change with a rollout, then roll the workload back to a known-good revision. Neither the title nor transcript identifies the presenter or an affiliation.

The SLI/SLO and rollback reasoning remains durable, but the 2021 Cloud Operations and GKE screens are dated. Verify current UI paths, alert configuration, and rollback procedures.

## Key Ideas

- [00:00:00] Infrastructure signals can explain why something is happening, but SLIs and SLOs describe reliability as users experience it.
- [00:01:04] A firing SLO alert and degraded SLI establish a service symptom before operators inspect workload metrics and recent changes.
- [00:02:07]-[00:03:10] Revision history shows a rollout shortly before the alert; after rollback to a known-good version, the demonstrated SLI recovers and the alert stops firing.

## Practical Implications

Build triage around user-facing service health, then correlate that evidence with deployments and workload state. Maintain a tested rollback path, and adapt the demonstrated navigation to current GKE and Cloud Monitoring interfaces.

## Questions and Tensions

Temporal correlation makes a rollout a strong suspect but does not by itself prove causality. Fast rollback reduces impact, while deeper diagnosis is still needed to prevent recurrence.

## Source

https://www.youtube.com/watch?v=L6JnAhp3E-c

[transcript.md](./transcript.md)
