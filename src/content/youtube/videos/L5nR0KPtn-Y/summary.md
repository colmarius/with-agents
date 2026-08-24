---
title: "Getting Started with Security Health Analytics"
videoId: L5nR0KPtn-Y
sourceUrl: "https://www.youtube.com/watch?v=L5nR0KPtn-Y"
publishedAt: "2019-10-23T16:00:59Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter demonstrates the 2019 Security Health Analytics workflow for finding configuration weaknesses in Security Command Center. The example enables the source, filters findings, opens a recommendation, and follows a link to change the affected Cloud SQL resource.

## Key Ideas

- Security Health Analytics is presented as a native scanner for VM, container, network, storage, and IAM configuration, including public exposure, open ports, stale keys, and disabled logging. [00:00:04]-[00:01:09]
- Organization-level roles and enabling the security source make its findings available in the Cloud SCC dashboard. [00:00:04]-[00:01:09]
- Analysts can filter by finding or source type, inspect the affected asset, severity, first and latest observation times, source URI, and recommendation. [00:01:09]-[00:02:13]
- The demonstration follows a no-root-password finding to a Cloud SQL instance and applies the displayed recommendation. [00:02:13]

## Practical Implications

- Use posture findings as a prioritized review queue, preserving asset ownership, exposure, severity, evidence, exception status, and remediation history.
- Test recommendations in context rather than applying console-provided fixes blindly, especially when a control affects availability or compatibility.
- Treat the 2019 Security Health Analytics finding types, roles, Cloud SCC editions, enablement path, dashboard, and Cloud SQL remediation as historical; verify current Security Command Center posture-management guidance.

## Questions and Tensions

- A large finding count requires deduplication, ownership, risk-based prioritization, and accepted-exception handling.
- The walkthrough applies one recommendation but does not show validation, rollback, or how to distinguish exploitable exposure from a policy deviation.

## Source

- [Video](https://www.youtube.com/watch?v=L5nR0KPtn-Y)
- [transcript.md](./transcript.md)
