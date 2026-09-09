---
title: "How to use Cloud Logging  to detect security breaches"
resourceId: 57
date: "2021-05-26"
collection: "google-cloud-security-basics"
order: 9
videoId: "dLOyUy1BlIs"
---

This episode demonstrates investigating a suspected compromise through independently stored logs rather than immediately signing in to the affected instance.

### Key Points Covered

- **Do not rush into a suspected host**: Logging directly into a possibly compromised server can expose administrator credentials to an attacker anticipating that response [01:03–02:06](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=63s).
- **Keep forensic evidence outside the affected environment**: A separate monitoring project lets responders inspect activity without depending on or modifying the suspected system [02:06–03:09](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=126s).
- **Route selected logs centrally**: The 2021 demonstration uses sinks and a Cloud Logging bucket to collect indexed logs from an application project in a monitoring project [02:06–03:09](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=126s).
- **The investigation concludes there was no full breach**: The logs show no suspicious activity, and the scenario's claimed attacker admits the objective was to capture administrator credentials during an attempted login [03:09–04:14](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=189s).
- **Independent telemetry still needs protection**: Customers must secure sink configuration, logging destinations, responder identities, retention, monitoring, and the wider incident-response process [02:06–04:14](https://www.youtube.com/watch?v=dLOyUy1BlIs&t=126s).
- **Treat this as dated guidance**: This is a 2021 demonstration; verify current Google Cloud Logging documentation, sink behavior, defaults, products, UI, pricing, IAM, and incident-response guidance.

Full video: <https://www.youtube.com/watch?v=dLOyUy1BlIs>
