---
title: "How to find cloud logs and manage logging costs"
resourceId: 63
date: "2021-12-15"
collection: "google-cloud-engineering-for-reliability"
order: 5
videoId: "z6hpL8J-jG4"
---

Finding the relevant logs and deciding which logs to keep are different tasks. This episode uses queries to narrow an investigation, then shows how billing and ingestion measurements reveal the sources of logging cost. Reducing that cost can also remove evidence needed to diagnose failures ([00:00–01:02](https://www.youtube.com/watch?v=z6hpL8J-jG4&t=0s), [03:08–06:29](https://www.youtube.com/watch?v=z6hpL8J-jG4&t=188s)).

### Key Points Covered

- **Use queries to find a subset of existing logs**: Logs Explorer converts field selections into an editable query. The demo filters for a frontend service, negates an error condition, restricts the time range, and samples entries. Saving the query makes a recurring investigation easier to repeat ([00:00–02:05](https://www.youtube.com/watch?v=z6hpL8J-jG4&t=0s)).
- **Use cost and volume views together**: Billing reports show logging charges, while ingestion metrics identify the resources producing log volume. The latter helps explain the former ([03:08–04:11](https://www.youtube.com/watch?v=z6hpL8J-jG4&t=188s)).
- **Exclusions affect what remains available for investigation**: Unlike a query over stored logs, an exclusion on a sink filters what that route ingests. In the 2021 behavior described, excluded entries are unavailable in Logs Explorer and Cloud Debugger; entries routed to no log bucket are also unavailable to Error Reporting. These are the product behaviors in the example, not current guarantees ([04:11–06:29](https://www.youtube.com/watch?v=z6hpL8J-jG4&t=251s)).
- **Producing fewer logs is another control**: The presenter recommends adjusting application log levels as well as using exclusions, balancing diagnostic visibility against volume. This is especially important in the serverless example, where excluded logs cannot be viewed afterward ([05:15–06:29](https://www.youtube.com/watch?v=z6hpL8J-jG4&t=315s)).

Full video: <https://www.youtube.com/watch?v=z6hpL8J-jG4>
