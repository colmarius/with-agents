---
title: "Alerting on error budget burn rate"
videoId: t1BGo-Il1AM
sourceUrl: "https://www.youtube.com/watch?v=t1BGo-Il1AM"
publishedAt: "2021-06-16T15:00:34Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

An unnamed presenter explains error-budget burn rate as a way to detect user-impacting reliability degradation while controlling alert noise. Neither the title nor transcript identifies the presenter or an affiliation.

The SLO, error-budget, and multi-window burn-rate concepts remain durable. The 2021 Cloud Operations configuration screens and exact setup procedure are dated; verify current alerting capabilities and recommended configuration.

## Key Ideas

- [00:00:00] Burn rate measures how quickly a service consumes error budget relative to its SLO, and multi-window, multi-burn-rate alerts balance sensitivity against false positives.
- [00:01:04]-[00:02:07] Burn-rate calculations use the SLO evaluation period, budget consumed, and alerting window; for a 95% SLO over 28 days, the example derives 13.44 for two percent in one hour and 5.6 for five percent in six hours.
- [00:02:07] Pairing long and short windows keeps detection fast while allowing alerts to reset promptly after mitigation.
- [00:03:09]-[00:04:12] The demonstration configures lookback duration and burn-rate threshold, then attaches notification settings and documentation; its slow-alert walkthrough says to enter 6 rather than the previously calculated 5.6.
- [00:04:12]-[00:05:14] A firing SLO alert is investigated alongside SLI degradation, increased budget consumption, and a concurrent increase in HTTP 500 logs.

## Practical Implications

Page on rates of budget consumption that imply meaningful user harm, not on every isolated failure. Use multiple windows to reduce transient noise, document the response expected from an alert, and validate current product syntax and threshold guidance.

## Questions and Tensions

Thresholds trade detection speed against operational load. The transcript describes multi-window logic conceptually, while its UI walkthrough appears to configure individual lookback and threshold values; current implementations should be checked against authoritative SRE guidance.

## Source

https://www.youtube.com/watch?v=t1BGo-Il1AM

[transcript.md](./transcript.md)
