---
title: "How to use Cloud Logging  to detect security breaches"
resourceId: 57
date: "2021-05-26"
collection: "google-cloud-security-basics"
order: 9
videoId: "dLOyUy1BlIs"
---

An attacker claims to have compromised a server and urges the administrator to intervene. The episode's fictional investigation shows why that reaction can be a trap: signing in may expose administrator credentials. Logs stored in a separate project offer another way to examine what happened.

### Key Points Covered

- **Do not rush into a suspected host**: Logging directly into a possibly compromised server can expose administrator credentials to an attacker anticipating that response [01:03–02:06](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=63s).
- **Keep forensic evidence outside the affected environment**: A separate monitoring project lets responders inspect activity without depending on or modifying the suspected system [02:06–03:09](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=126s).
- **Route logs before they are needed for an investigation**: A sink is a filtered export of log entries. The demonstration creates one in the application project and sends matching logs to a Cloud Logging bucket in a monitoring project. Unlike the Cloud Storage destination it compares, Cloud Logging indexes the entries for analysis [02:06–04:14](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=126s).
- **The investigation concludes there was no full breach**: The logs show no suspicious activity, and the scenario's claimed attacker admits the objective was to capture administrator credentials during an attempted login [03:09–04:14](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=189s).

Full video: <https://www.youtube.com/watch?v=dLOyUy1BlIs>
