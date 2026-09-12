---
title: "Getting Started with Security Health Analytics"
resourceId: 58
date: "2019-10-23"
collection: "google-cloud-security-command-center"
order: 5
videoId: "L5nR0KPtn-Y"
---

Security Health Analytics looks for risky cloud configuration, such as publicly accessible storage or missing security logging. This 2019 walkthrough shows how a finding identifies the affected resource and recommends a change, using a Cloud SQL database without a root-user password as the example.

### Key Points Covered

- **The scanner looked for configuration weaknesses**: Examples included publicly accessible buckets, open firewall ports, public IP addresses, stale keys, and disabled security logging across compute, container, network, storage, and IAM resources [00:04–01:09](https://www.youtube.com/watch?v=L5nR0KPtn-Y&t=4s).
- **Findings supported filtering and triage**: The dashboard exposed finding and source filters plus the affected asset, severity, first and latest observation times, source URI, and recommendation [01:09–02:13](https://www.youtube.com/watch?v=L5nR0KPtn-Y&t=69s).
- **The finding points to a fix; it does not apply it**: The presenter opens the no-root-password recommendation, follows its link to the Cloud SQL instance, and adds a root-user password there. The demonstrated change happens on the resource, not automatically in the findings dashboard [02:13–02:49](https://www.youtube.com/watch?v=L5nR0KPtn-Y&t=133s).

Full video: <https://www.youtube.com/watch?v=L5nR0KPtn-Y>
