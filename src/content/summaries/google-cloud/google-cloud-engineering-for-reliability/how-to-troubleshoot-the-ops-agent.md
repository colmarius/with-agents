---
title: "How to troubleshoot the Ops Agent"
resourceId: 63
date: "2022-03-14"
collection: "google-cloud-engineering-for-reliability"
order: 3
videoId: "Sd0iznXSVcc"
---

When a virtual machine is running but its application logs or resource measurements are missing, the Ops Agent may be failing before that data reaches Google Cloud. Yuri, an SRE at Google Cloud, separates troubleshooting into installation, startup, collection, and delivery so that each check narrows the failure ([00:00–03:06](https://www.youtube.com/watch?v=Sd0iznXSVcc&t=0s)).

### Key Points Covered

- **Installation and startup are separate checks**: In the demonstrated environment, unsupported operating systems, legacy-agent conflicts, or invalid configuration can stop the pipeline early ([01:01–02:04](https://www.youtube.com/watch?v=Sd0iznXSVcc&t=61s)).
- **A running agent still needs working collection modules**: The logging and monitoring components can fail to start if invalid credentials, a proxy configuration, or a network problem prevents them from reaching their APIs ([02:04–03:06](https://www.youtube.com/watch?v=Sd0iznXSVcc&t=124s)).
- **Separate reading data from sending it**: For missing logs, check the logging module, then its local metrics to see whether it can read the source logs. If collection works, inspect the module's own log for API errors such as missing permissions or exhausted quota. The metrics module's logs provide a similar way to check startup and delivery failures ([03:06–04:10](https://www.youtube.com/watch?v=Sd0iznXSVcc&t=186s)).

Full video: <https://www.youtube.com/watch?v=Sd0iznXSVcc>
