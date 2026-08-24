---
title: "VPC Service Controls in a minute"
sourceUrl: "https://www.youtube.com/watch?v=ABlY7FexJJI"
videoId: "ABlY7FexJJI"
capturedAt: "2026-08-24T21:52:29.207Z"
channel: "Google Cloud Tech"
language: "en"
kind: "caption"
durationSeconds: 124
---

## Transcript

[00:00:00] ♪ [intro music] ♪ Give me one minute, and I'll show you how VPC Service Controls can help you create a custom fence around your cloud infrastructure. Think of a cell in your body that has a context-aware control center within the nucleus that controls what flows in the cell membrane and what stays out. VPC Service Controls can do the same for your cloud projects. They help you keep unwanted things from passing through your membrane so that your data isn't retrieved from your server, copied, or transferred without authorization. They also allow for a flexible variety of project configurations, including hybrid environments with on-premise services, using Private Google Access or multiple cloud perimeters that access each other via ingress and egress rules called a Secure Data Exchange.

[00:00:54] You also get near real-time security logs that report denials and activity deemed potentially malicious, as well as IP address data. You can build that into a dashboard, using Data Studio, since logs go to BigQuery. You can set up these rules, either in your console or via the gcloud terminal, or via code, using the API. There are two types of configurations at this time. One is called enforce mode, which actively prevents access to protected services. The other is dry run mode, which logs violations but does not prevent them from occurring. There's no additional charge for using VPC Service Controls. Common use cases are monitoring threats, transferring data from another cloud, or to set up private access to Google APIs and services within your projects. So, next time you're looking to manage your network and security perimeters to keep your data safe, take a minute to look at the context-aware VPC Service Controls.

[00:01:49] To learn more, check out cloud.google.com/vpc-service-controls. ♪ [outro music] ♪
