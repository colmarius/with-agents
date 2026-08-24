---
title: "Getting started with Managed Service for Prometheus: Ingestion"
sourceUrl: "https://www.youtube.com/watch?v=hB8Oc-xudQc"
videoId: "hB8Oc-xudQc"
capturedAt: "2026-08-24T21:33:35.994Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 226
---

## Transcript

[00:00:00] Are you a developer who runs workloads on Kubernetes or GKE? Well, if you are, then you're probably familiar with Prometheus, the de facto standard for open source monitoring on Kubernetes. And you probably know that managing Prometheus at scale can be a real big challenge sometimes. My name is Yuri. I'm an SRE at Google Cloud. And today, I'm going to show you how to use Google's managed service for Prometheus to monitor your GKE workloads without having to manually manage Prometheus at scale. This is engineering for reliability. The first thing to understand is the nature of the service itself. This is Google Cloud's fully managed service for Prometheus metrics. It's built on top of Monarch, the same globally scalable data store as Cloud Monitoring. You can replace your existing Prometheus deployment to collect cluster and workload metrics, and then query the data across multiple clusters using PromQL. Sounds intriguing? I'm so glad. Let's have a look at how you can get started.

[00:00:59] Let's start by validating our existing Prometheus deployment. Here, we can see that we have all of the necessary components running. This includes the Prometheus server itself, the node exporter, which collects infrastructure metrics from our cluster nodes, and the Grafana UI. Next, let's make sure that metric collection is working. We can connect to the Prometheus server UI using port forwarding. And run a query to confirm that metrics are being collected, and that we're able to query them. This point, we're ready to migrate this installation to send metrics to the managed Prometheus service. The Prometheus operator is using a Prometheus custom resource to manage these components. We can edit it. And simply replace the images using with Google's fork version of the Prometheus server.

[00:01:59] This binary is configured to scrape both workload metrics and its own metrics endpoint and send the collected data to the managed service back end. Once we confirm that the server has restarted, let's again validate local metric collection and querying using port forwarding. Everything still works as expected. But now, we can go to the cloud console and run our query there. This confirms that these metrics are being ingested properly. We can also query the same metrics using metrics explorer, for example, and use them to create charts or alerts.

[00:02:57] So, if you're already running Prometheus in your GKE cluster, you can easily migrate to the Google Cloud managed service for Prometheus and ingest your metrics into Cloud Monitoring just by replacing the Prometheus binary. It's just that easy. Thanks so much for watching today. We learned how Google's managed service for Prometheus allows you to monitor your clusters without having to manage Prometheus manually, how to migrate your existing Prometheus setup, and how to use PromQL to query the data. Next time, we'll instrument our own application and configure Prometheus monitoring for it. Don't forget to like and subscribe to never miss out on more engineering for reliability with Google Cloud. See you soon.
