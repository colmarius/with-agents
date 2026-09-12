---
title: "Getting started with SLOs"
resourceId: 63
date: "2021-05-26"
collection: "google-cloud-engineering-for-reliability"
order: 20
videoId: "U53wC2A75Is"
---

Saying a service is “up” does not explain whether users can successfully use it. This episode introduces service-level indicators (SLIs) to measure successful interactions and service-level objectives (SLOs) to set reliability targets. It treats reliability as a feature to plan and measure alongside other product work ([00:00–04:12](https://www.youtube.com/watch?v=U53wC2A75Is&t=0s)).

### Key Points Covered

- **Service type shapes the objective**: Applications and APIs need to be available and responsive. Data pipelines also need to process data correctly and move it through the pipeline quickly enough for their users ([00:00–02:05](https://www.youtube.com/watch?v=U53wC2A75Is&t=0s)).
- **Define what counts as success and what counts at all**: The example's availability SLI divides successful HTTP 200 responses by total valid requests. Excluding HTTP 400 responses believed to come from misconfigured clients is a deliberate choice, not an automatic property of the metric ([02:05–04:12](https://www.youtube.com/watch?v=U53wC2A75Is&t=125s)).
- **Set a target that reflects user needs**: An SLO combines the indicator, a threshold, and an evaluation period. The presenter recommends the level at which typical users are just satisfied: once that need is met, additional engineering effort might be more valuable in new features than in exceeding the reliability target ([03:07–05:14](https://www.youtube.com/watch?v=U53wC2A75Is&t=187s)).
- **Do not confuse a budget reset with improved reliability**: The error budget tracks room for failures while meeting the target. A calendar period restores the whole budget at rollover even if the service has not improved. A rolling window avoids that one-time reset, which is why the presenter warns about calendar-based budgets ([05:14–07:21](https://www.youtube.com/watch?v=U53wC2A75Is&t=314s)).

Full video: <https://www.youtube.com/watch?v=U53wC2A75Is>
