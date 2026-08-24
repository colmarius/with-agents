---
title: "How to use Cloud Security Scanner - Getting Started with Cloud Security Command Center"
videoId: goJ_G2ygdSA
sourceUrl: "https://www.youtube.com/watch?v=goJ_G2ygdSA"
publishedAt: "2019-09-11T23:00:10Z"
sourceLanguage: en
summaryLanguage: en
captionKind: caption
status: reviewed
---

An unnamed presenter demonstrates a 2019 Cloud Security Command Center workflow for configuring and running Web Security Scanner against an application. The walkthrough covers scan creation, scheduling, execution, findings, and the then-current relationship between scanner results and the Security Command Center dashboard. It is a historical product demonstration, not current setup guidance.

## Key Ideas

- Web Security Scanner was presented as a tool built into Security Command Center that could scan App Engine, Compute Engine, and Google Kubernetes Engine applications for common vulnerabilities before production deployment. [00:00:00]
- The demonstrated setup used a running application, an account with the owner or developer role for that application, the Web Security Scanner API, a starting URL, and an immediate, on-demand, or scheduled scan. [00:00:00]-[00:00:50], [00:02:41]
- Scan duration depends on application complexity, links, interactive elements, JavaScript, and service load; the scanner explores reachable links and attempts to exercise inputs and handlers. [00:00:50]-[00:01:49]
- The demonstration listed cross-site scripting, Flash injection, mixed content, and outdated or insecure libraries, then showed an organization-level findings view and detail that could help locate or reproduce an issue. [00:01:49]-[00:02:41]

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
