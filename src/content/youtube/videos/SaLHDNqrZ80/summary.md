---
title: "How to use Cloud Audit Logging"
videoId: SaLHDNqrZ80
sourceUrl: "https://www.youtube.com/watch?v=SaLHDNqrZ80"
publishedAt: "2021-07-03T04:00:17Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter and the Cloud Detective and Bad Actor characters use an insider-access scenario to explain audit logs as evidence for investigations. The episode distinguishes several audit-log categories, their stated defaults and costs, and the need to combine logs with alerts and a regular review process.

## Key Ideas

- Audit trails help investigators identify who accessed or changed resources and support both active investigations and post-incident analysis. [00:02:06]-[00:03:09]
- The 2021 episode distinguishes Admin Activity, Data Access, System Event, and Policy Denied audit logs, with then-current enablement, cost, and disablement properties. [00:03:09]-[00:05:16]
- It says audit logs do not identify suspicious events by themselves and describes them as best-effort records that could be delayed by up to five minutes. [00:05:16]-[00:06:18]
- Data Access logs allow the demonstration to trace unexpected file access, while alerts and recurring review are recommended for ongoing detection. [00:05:16]-[00:06:18]

## Practical Implications

- Define which activities must be logged, who can read or alter the evidence, how long it is retained, and who owns investigation.
- Add detection rules and routine review; collecting audit logs alone does not identify malicious intent.
- Treat the 2021 log categories, default enablement, costs, quotas, latency, names, and console workflow as historical and verify current Cloud Audit Logs documentation for each service.

## Questions and Tensions

- More Data Access logging improves evidence but can increase volume, cost, privacy exposure, and triage load.
- A user acting at an unusual time is a lead, not proof of misconduct; investigations need context and due process.

## Source

- [Video](https://www.youtube.com/watch?v=SaLHDNqrZ80)
- [transcript.md](./transcript.md)
