---
title: "Alerting on error budget burn rate"
resourceId: 63
date: "2021-06-16"
collection: "google-cloud-engineering-for-reliability"
order: 17
videoId: "t1BGo-Il1AM"
---

An error budget is the amount of failure a service can tolerate while meeting its service-level objective (SLO), its reliability target over a period of time. This episode explains how to alert when that budget is being consumed too quickly, before the service misses its overall target ([00:00–02:07](https://www.youtube.com/watch?v=t1BGo-Il1AM&t=0s)).

### Key Points Covered

- **Burn rate expresses how quickly failures spend the budget**: A rate of one consumes the whole budget over the SLO evaluation period; a rate of two consumes it in half that time. This relates the alert to the service's reliability target rather than to an isolated error count ([00:00–02:07](https://www.youtube.com/watch?v=t1BGo-Il1AM&t=0s)).
- **Watch for both fast and slow deterioration**: For a 28-day evaluation period, the example calculates a burn rate of 13.44 for consuming 2% of the budget in one hour, and 5.6 for consuming 5% in six hours. The later walkthrough enters 6 for the latter condition, so its values are not internally consistent ([01:04–02:07](https://www.youtube.com/watch?v=t1BGo-Il1AM&t=64s), [03:09–04:12](https://www.youtube.com/watch?v=t1BGo-Il1AM&t=189s)).
- **Pair a long window with a short one**: The long window captures sustained budget consumption; the short window checks that it is still happening, so an alert can stop soon after mitigation. The episode describes this combined logic, although its 2021 UI walkthrough shows individual lookback and threshold settings rather than demonstrating the full combination ([01:04–04:12](https://www.youtube.com/watch?v=t1BGo-Il1AM&t=64s)).
- **Use logs to investigate the symptom**: In the example, the service-level indicator (SLI), the measured reliability signal, deteriorates as budget consumption rises. A concurrent increase in HTTP 500 server-error logs confirms that the service is having problems ([04:12–05:14](https://www.youtube.com/watch?v=t1BGo-Il1AM&t=252s)).

Full video: <https://www.youtube.com/watch?v=t1BGo-Il1AM>
