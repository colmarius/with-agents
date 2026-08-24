---
title: "How to use Event Threat Detection - Getting Started with Cloud Security Command Center"
videoId: 0f5Dh8cGbyQ
sourceUrl: "https://www.youtube.com/watch?v=0f5Dh8cGbyQ"
publishedAt: "2019-09-25T16:00:00Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter explains a 2019 Event Threat Detection workflow in Cloud Security Command Center. The episode describes log-based detection categories, investigates an anomalous IAM grant, and describes sending selected processed log output to Splunk for further analysis. It is a historical product demonstration, not current detector or SIEM-integration guidance.

## Key Ideas

- Event Threat Detection was described as consuming Stackdriver Logging data and writing findings for SSH brute force, cryptomining, anomalous IAM grants, malware, outgoing DDoS, and port scanning. [00:00:04]-[00:01:08]
- The examples used Linux authentication logs, VPC flow logs and known-bad destinations, IAM changes, and traffic patterns as detector inputs. [00:00:04]-[00:01:08]
- The IAM example pivots from a high-priority anomalous editor grant to the account that made the grant, that account's other actions, affected projects, and restricting its permissions. [00:01:08]-[00:02:12]
- The presenter says processed logs could be sent selectively to a SIEM and shows a then-current Splunk connector and categorized events as the example. [00:02:12]

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
