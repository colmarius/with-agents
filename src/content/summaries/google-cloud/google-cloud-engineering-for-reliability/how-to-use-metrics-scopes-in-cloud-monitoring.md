---
title: "How to use metrics scopes in Cloud Monitoring"
resourceId: 63
date: "2021-10-20"
collection: "google-cloud-engineering-for-reliability"
order: 9
videoId: "_FKdug6B5FM"
---

Cloud Monitoring metric scopes let a team view measurements from several Google Cloud projects together. A **scoping project** hosts the shared dashboards, alerts, uptime checks, and monitoring groups; the workloads can remain in other projects ([00:00–02:07](https://www.youtube.com/watch?v=_FKdug6B5FM&t=0s)).

### Key Points Covered

- **Keep monitoring independent of workload deletion**: The presenter recommends a dedicated scoping project so that deleting a workload project does not also delete the dashboards and alerts used for the remaining projects ([01:03–02:07](https://www.youtube.com/watch?v=_FKdug6B5FM&t=63s)).
- **Grant access at the intended scope**: In the example, an appropriate Identity and Access Management (IAM) role on the monitoring project lets a user see staging and production metrics. Access only to staging does not grant that combined view ([01:03–03:12](https://www.youtube.com/watch?v=_FKdug6B5FM&t=63s)).
- **Enrollment can be automated**: The walkthrough uses the Cloud Monitoring API to add a monitored-project resource to a metric scope ([05:18–06:21](https://www.youtube.com/watch?v=_FKdug6B5FM&t=318s)).

Full video: <https://www.youtube.com/watch?v=_FKdug6B5FM>
