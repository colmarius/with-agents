---
title: "Migrating to the managed service for Prometheus"
sourceUrl: "https://www.youtube.com/watch?v=YjEh_V7MRc4"
videoId: "YjEh_V7MRc4"
capturedAt: "2026-08-24T21:34:42.869Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 259
---

## Transcript

[00:00:00] If you use Prometheus to monitor your services and infrastructure, you probably have a set of configurations you've developed over months or years that serve you really well. But managing and maintaining them can be a challenge. Today, I'm going to show you how to migrate your existing Prometheus setup, including application monitoring configurations, to managed collection and remove the need to manage any part of Prometheus at scale. My name is Yuri and I'm an SRE at Google Cloud. Welcome back to Engineering for Reliability. The Prometheus Operator is a common way to manage Prometheus deployments in production. The operator uses custom resources to manage the Prometheus server itself. You then define ServiceMonitor resources to configure how specific services are monitored. You can certainly use Prometheus Operator with Google Cloud's Managed Service for Prometheus, but migrating to managed collection means you won't have to manage any Prometheus infrastructure at all. Let's have a look at how to migrate an existing Prometheus configuration managed by the operator to managed collection.

[00:01:04] Let's start by reviewing our existing configuration. We have a Prometheus Operator and the Prometheus server running in the monitoring namespace. Our app is running in the default namespace. We can confirm that it's exposing Prometheus metrics on the /metrics endpoint by using port forwarding. And there we are. We instruct the Prometheus Operator to monitor our app by using a ServiceMonitor resource. Here's our configuration. And here it is deployed on the server. We can use port forwarding to confirm that Prometheus has our app as a target and that it is ingesting our app's metrics.

[00:02:11] At this point, we're ready to migrate to managed collection. We're going to enable managed collection in the Cloud Console here. You can also do this with the gcloud command. If you're not running on GKE, you can also use kubectl. Once that's done, we need to instruct Prometheus to monitor our app. To do this, we'll use a PodMonitoring configuration. Managed collection uses PodMonitoring resources instead of ServiceMonitors to guarantee that each collector only scrapes targets on the node it's running on. This guarantees scalability by minimizing inter-cluster traffic. The configuration itself is similar to the ServiceMonitor resource, but you may need to change some fields. We'll link to the documentation in the episode notes, so you can be sure to get this right.

[00:03:03] Let's apply this configuration. At this point, we can confirm that our application metrics are being ingested by querying them using PromQL and in Metrics Explorer. And that's how you can migrate an existing Prometheus configuration to Google's managed Prometheus collection. Thanks so much for watching today. We learned how to migrate an existing Prometheus Operator deployment to Google's managed Prometheus collection and how to use a PodMonitoring resource to ensure that your service is monitored. I hope this helps you keep your services reliable and users happy.

[00:03:55] If you have any other reliability or observability topic you'd like me to cover, please comment below. Don't forget to like and subscribe to never miss out on more engineering for reliability with Google Cloud. See you soon.
