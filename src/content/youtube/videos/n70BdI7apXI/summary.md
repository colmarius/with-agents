---
title: "How to use Cloud Anomaly Detection - Getting Started with Cloud Security Command Center"
videoId: n70BdI7apXI
sourceUrl: "https://www.youtube.com/watch?v=n70BdI7apXI"
publishedAt: "2019-09-18T17:03:05Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: draft
---

An unnamed presenter demonstrates the 2019 Cloud Security Command Center workflow for enabling Cloud Anomaly Detection and investigating behavioral findings. The example moves from a coin-mining alert to project history, audit logs, the affected instance, and containment options.

## Key Ideas

- Cloud Anomaly Detection is presented as a built-in Security Command Center source for behavioral findings such as leaked credentials, unusual activity, exfiltration, phishing, intrusion, and cryptomining. [00:00:00]-[00:00:50]
- Enabling the source at the organization level causes its findings to appear as cards in the Security Command Center dashboard. [00:00:00]-[00:00:50]
- Finding categories connect observed behavior to a resource, including outbound intrusion, possible compromise, unusual connections, and resource abuse. [00:00:50]-[00:02:32]
- The coin-mining example pivots from event details to project audit logs and the affected instance, then proposes removing the resource or public IP and adding firewall rules. [00:02:32]

## Practical Implications

- Route behavioral findings into a triage process that preserves the resource, event time, source evidence, and containment decision.
- Validate a finding before remediation and define whether containment means isolating, stopping, rebuilding, or deleting the resource.
- Treat the 2019 Cloud Anomaly Detection service, role names, finding taxonomy, editions, enablement steps, dashboard, and proposed remediation as historical; verify current Security Command Center detectors and response guidance.

## Questions and Tensions

- Behavioral signals can reveal abuse but need baselines, false-positive handling, and evidence beyond a single destination or traffic change.
- Removing a resource or public IP can contain activity while also destroying evidence or disrupting service if incident procedures are not defined.

## Source

- [Video](https://www.youtube.com/watch?v=n70BdI7apXI)
- [transcript.md](./transcript.md)
