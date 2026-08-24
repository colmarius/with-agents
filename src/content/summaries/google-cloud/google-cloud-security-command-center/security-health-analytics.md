---
title: "Getting Started with Security Health Analytics"
resourceId: 58
date: "2019-10-23"
collection: "google-cloud-security-command-center"
order: 5
videoId: "L5nR0KPtn-Y"
---

This 2019 walkthrough enables Security Health Analytics, filters configuration findings, and follows a recommendation to the affected Google Cloud resource.

### Key Points Covered

- **The scanner looked for configuration weaknesses**: Examples included publicly accessible buckets, open firewall ports, public IP addresses, stale keys, and disabled security logging across compute, container, network, storage, and IAM resources [00:00:04]-[00:01:09].
- **Findings supported filtering and triage**: The dashboard exposed finding and source filters plus the affected asset, severity, first and latest observation times, source URI, and recommendation [00:01:09]-[00:02:13].
- **The recommendation linked to the affected resource**: The demonstrated remediation path opens the affected Cloud SQL resource in a new tab rather than changing the resource from the finding view [00:02:13].
- **The shown remediation is specific**: The example follows a no-root-password recommendation and adds a password for the root user on the Cloud SQL instance; teams should not generalize one console path to other findings [00:02:13].

This is a historical 2019 workflow. Current users should verify current Google Cloud documentation for product names, roles, APIs, UI, finding and detector coverage, setup, defaults, Cloud SQL configuration, finding-state behavior, integrations, and remediation guidance.

Full video: <https://www.youtube.com/watch?v=L5nR0KPtn-Y>
