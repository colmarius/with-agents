---
title: "How to protect your company from cyberattacks"
videoId: -4Ci-zs2bwE
sourceUrl: "https://www.youtube.com/watch?v=-4Ci-zs2bwE"
publishedAt: "2022-02-28T20:00:01Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Max Saltenstall interviews Mason, identified as the lead of Palo Alto Networks' Google Cloud alliance technical team. Mason describes a 2022 private-preview integration that fed Cortex XDR endpoint posture into Google's context-aware access controls so a compromised device could be blocked from cloud and SaaS resources.

## Key Ideas

- Mason presents Palo Alto Networks' platform approach spanning endpoint, network, cloud, access, and security operations. He claims its automation resolved 95% of alerts so analysts could focus on the remainder. [00:00:00]-[00:02:07]
- Mason describes combining endpoint prevention and detection with visibility across endpoints, firewalls, and cloud security events to help responders limit damage after a breach. He also reports Palo Alto Networks' results from a prior MITRE ATT&CK evaluation. [00:02:07]-[00:04:15]
- Mason says the first endpoint-posture release checked whether the Cortex XDR agent was present, whether an administrator had isolated the device, and whether an alert-derived health score met a configured threshold. [00:04:15]-[00:08:26]
- Mason says a deployed Cloud Function called the Cortex XDR API and updated Google's endpoint-management state. Context-aware policies could then use that posture when controlling access through IAP and VPC Service Controls and to Workspace or other SaaS applications. [00:08:26]-[00:10:33]
- The endpoint-verification integration was explicitly in private preview at publication time. [00:10:33]-[00:11:34]

## Practical Implications

- Feed continuously evaluated device posture into authorization decisions instead of treating login as the only trust event.
- Keep endpoint prevention, detection, response, and resource-access enforcement as distinct controls with tested failure and recovery paths.
- Treat vendor-to-provider posture synchronization as a security-critical integration: authenticate it, minimize privileges, monitor staleness, and define fail-open versus fail-closed behavior.
- Treat every product behavior, integration detail, preview status, automation percentage, evaluation result, and security control as a 2022 vendor account. Confirm current documentation and perform current threat modeling, independent validation, and domain-specific security, data, and compliance review.

## Questions and Tensions

- The vendor's protection scores and automation claims are not independently examined in the episode and do not establish effectiveness in another environment.
- Alert-count-derived posture can miss silent compromise or penalize noisy endpoints; the account does not cover evasion, stale signals, API outages, policy conflicts, or recovery.
- The episode features claims from a Google partner and ends with a private-preview call to action; those claims are attributed speaker evidence and architecture input, not independent validation, endorsement, or a universal design.

## Source

- [Video](https://www.youtube.com/watch?v=-4Ci-zs2bwE)
- [transcript.md](./transcript.md)
