---
title: "How to use Cloud Anomaly Detection - Getting Started with Cloud Security Command Center"
resourceId: 58
date: "2019-09-18"
collection: "google-cloud-security-command-center"
order: 2
videoId: "n70BdI7apXI"
---

This 2019 walkthrough enables Cloud Anomaly Detection in Security Command Center and follows a coin-mining signal into a basic investigation and proposed containment.

### Key Points Covered

- **The source used behavioral signals**: The demonstrated service surfaced possible leaked credentials, unusual activity, exfiltration, outbound intrusion, phishing, and cryptomining as findings associated with projects or VM instances [00:00:00]-[00:01:42].
- **Enablement exposed findings in the SCC dashboard**: In the then-current UI, an Organization Administrator enabled the security source and its cards then displayed anomaly findings [00:00:00]-[00:00:50].
- **The coin-mining finding is an investigative lead**: Event time, source URL, public IP, affected instance, project history, and audit logs provide evidence to examine together; the detector alone does not establish attribution or prove a breach [00:01:42]-[00:02:32].
- **Containment follows investigation**: The presenter proposes removing the resource or its public IP and adding firewall rules, but these are response options to assess against the accumulated evidence rather than proof that one action is universally appropriate [00:02:32].

This is a historical 2019 workflow. Current users should verify current Google Cloud documentation for product names, roles, APIs, UI, detector coverage, setup, defaults, integrations, containment, and response guidance.

Full video: <https://www.youtube.com/watch?v=n70BdI7apXI>
