---
title: "Alerting on error budget burn rate"
resourceId: 63
date: "2021-06-16"
collection: "google-cloud-engineering-for-reliability"
order: 17
videoId: "t1BGo-Il1AM"
---

This episode explains error-budget burn rate as a way to detect user-impacting degradation while limiting transient alert noise. Multi-window, multi-burn-rate logic balances fast detection with confidence that budget consumption is sustained ([00:00:00]-[00:02:07]). The transcript identifies neither the presenter nor an affiliation.

### Key Points Covered

- **Burn rate connects alerts to an SLO**: It measures error-budget consumption relative to the objective and evaluation period ([00:00:00]-[00:02:07]).
- **Long and short windows serve different purposes**: Their combination can detect quickly while allowing an alert to reset after mitigation ([00:02:07]).
- **Investigate the alert with adjacent evidence**: The example compares SLI degradation and budget consumption with an increase in HTTP 500 logs ([00:04:12]-[00:05:14]).
- **The threshold demonstration is internally inconsistent**: The calculation gives 5.6 for one six-hour condition, but the UI walkthrough says to enter 6 ([00:01:04]-[00:02:07], [00:03:09]-[00:04:12]).

The 2021 UI appears to configure individual windows even though the episode describes multi-window logic. Verify current capabilities, syntax, formulas, and authoritative SRE threshold guidance rather than copying the values.

Full video: <https://www.youtube.com/watch?v=t1BGo-Il1AM>
