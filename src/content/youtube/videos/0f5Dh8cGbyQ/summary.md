---
title: "How to use Event Threat Detection - Getting Started with Cloud Security Command Center"
videoId: 0f5Dh8cGbyQ
sourceUrl: "https://www.youtube.com/watch?v=0f5Dh8cGbyQ"
publishedAt: "2019-09-25T16:00:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: draft
---

An unnamed presenter explains the 2019 Event Threat Detection workflow in Cloud Security Command Center. The episode describes log-based detection categories, investigates an anomalous IAM grant, and shows exporting selected findings to Splunk for further analysis.

## Key Ideas

- Event Threat Detection consumes logs and writes findings for threats such as SSH brute force, cryptomining, anomalous IAM grants, malware, outgoing DDoS, and port scanning. [00:00:04]-[00:01:08]
- Detection examples correlate authentication, VPC, and IAM activity with known malicious destinations or risky changes. [00:00:04]-[00:01:08]
- The IAM example pivots from a high-priority anomalous grant to the granting identity, related actions, affected projects, and permission restriction. [00:01:08]-[00:02:12]
- Processed findings can be sent to a SIEM, with Splunk shown as the historical example for investigation and prescribed actions. [00:02:12]

## Practical Implications

- Preserve the source logs and enrichment that support each finding so analysts can test the detector's conclusion.
- Investigate both the granted identity and the actor who made a risky IAM change, then review related projects and actions before containment.
- Treat the 2019 Stackdriver, Event Threat Detection, Cloud SCC, detector taxonomy, Splunk connector, roles, editions, and UI as historical; verify current Security Command Center and SIEM integration guidance.

## Questions and Tensions

- Forwarding only high-value findings can reduce SIEM cost but may remove context needed for correlation, hunting, or detector validation.
- The walkthrough does not cover detector thresholds, false positives, log prerequisites, retention, or response authorization.

## Source

- [Video](https://www.youtube.com/watch?v=0f5Dh8cGbyQ)
- [transcript.md](./transcript.md)
