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

- **Do not rush into a suspected host**: Logging directly into a possibly compromised server can expose administrator credentials to an attacker anticipating that response [00:01:03]-[00:02:06].
- **Keep forensic evidence outside the affected environment**: A separate monitoring project lets responders inspect activity without depending on or modifying the suspected system [00:02:06]-[00:03:09].
- **Route selected logs centrally**: The 2021 demonstration uses sinks and a Cloud Logging bucket to collect indexed logs from an application project in a monitoring project [00:02:06]-[00:03:09].
- **The investigation concludes there was no full breach**: The logs show no suspicious activity, and the scenario's claimed attacker admits the objective was to capture administrator credentials during an attempted login [00:03:09]-[00:04:14].
- **Independent telemetry still needs protection**: Customers must secure sink configuration, logging destinations, responder identities, retention, monitoring, and the wider incident-response process [00:02:06]-[00:04:14].
- **Treat this as dated guidance**: This is a 2021 demonstration; verify current Google Cloud Logging documentation, sink behavior, defaults, products, UI, pricing, IAM, and incident-response guidance.

Full video: <https://www.youtube.com/watch?v=dLOyUy1BlIs>
