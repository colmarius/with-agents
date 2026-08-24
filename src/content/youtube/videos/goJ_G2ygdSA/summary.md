---
title: "How to use Cloud Security Scanner - Getting Started with Cloud Security Command Center"
videoId: goJ_G2ygdSA
sourceUrl: "https://www.youtube.com/watch?v=goJ_G2ygdSA"
publishedAt: "2019-09-11T23:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: draft
---

An unnamed presenter demonstrates the 2019 Cloud Security Command Center workflow for configuring and running Web Security Scanner against a deployed application. The walkthrough covers scan creation, scheduling, execution, findings, and the relationship between scanner results and the broader Security Command Center dashboard.

## Key Ideas

- Web Security Scanner was presented as an integrated tool for detecting common vulnerabilities in App Engine, Compute Engine, and Google Kubernetes Engine applications before production deployment. [00:00:00]-[00:00:50]
- The demonstrated setup requires an existing application, suitable project permissions, the Web Security Scanner API, a starting URL, and an immediate or recurring scan configuration. [00:00:00]-[00:00:50]
- Scan duration depends on application complexity, links, interactive elements, JavaScript, and service load; the scanner explores reachable links and attempts to exercise inputs and handlers. [00:00:50]-[00:01:49]
- Findings include categories such as cross-site scripting, mixed content, and insecure libraries, with Security Command Center providing an organization-level findings view and detail needed to investigate or reproduce an issue. [00:01:49]-[00:02:41]

## Practical Implications

- Use automated web scanning as one source of findings, not as evidence that an application is vulnerability-free.
- Establish permissions, scan scope, schedules, and triage ownership before enabling recurring scans.
- Treat every console path and product-integration detail in this 2019 unlisted video as historical; verify current Security Command Center editions, Web Security Scanner support, roles, and UI in current documentation.

## Questions and Tensions

- The walkthrough demonstrates configuration but does not define testing limitations, false-positive handling, authenticated scan coverage, or remediation ownership.
- A result page with no detected vulnerabilities does not establish that no vulnerabilities exist outside the scanner’s reach or detection categories.

## Source

- [Video](https://www.youtube.com/watch?v=goJ_G2ygdSA)
- [transcript.md](./transcript.md)
