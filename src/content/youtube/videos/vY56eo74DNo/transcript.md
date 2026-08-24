---
title: "Pub/Sub Best Practices: Latency & Reliability"
sourceUrl: "https://www.youtube.com/watch?v=vY56eo74DNo"
videoId: "vY56eo74DNo"
capturedAt: "2026-08-24T21:34:15.609Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 178
---

## Transcript

[00:00:00] foreign [Music] if you're working with Pub sub and want to learn some best practices when it comes to reliability and latency then stay tuned hi I'm Chloe and in this video I'll be sharing six useful features to consider when working with Pub sub let's get started number one disable client-side batching consider disabling client-side batching to avoid messages accumulating before they're published in this case you're choosing latency over throughput and cost number two consider regions regions can make a difference in latency keep in mind that Regional traffic will have the lowest latency compared to cross-region traffic between publisher and subscriber clients number three increase reliability with regional isolation for Disaster Recovery cases where extreme reliability and multi-regional availability are required the regional

[00:01:04] isolation of cloud Pub sub can be used to publish each message twice or more in different regions number four delivery latency Health score in Pub sub the delivery latency is the amount of time elapsed after a message is published and then delivered to a subscriber if your message backlog is increasing you can use the delivery latency Health score to check which factors are contributing to an increased latency number five Pub sub metrics dashboards Pub sub offers a rich set of metrics for resource and usage monitoring this includes out of the box Pub sub metrics dashboards that are accessible with one click from the topics and subscription pages in The Google Cloud console these dashboards provide more observability and context and help you build better Solutions with Pub sub if you need additional monitoring you can also use the Google Cloud console or the cloud monitoring API to monitor Pub sub check out the documentation Linked In

[00:02:06] the description for more details number six quota alerts set up alerts on your Pub sub quotas so you don't run into quota limits unexpectedly if you anticipate your usage exceeding the default quota limits create alerting policies for all the relevant quotas these alerts fire when your usage reaches some fraction of the limit there you have it six best practices for reliability and latency with Pub sub take a look at our Pub sub documentation for even more tips and tricks and check the description below for links to more information as well as step-by-step guides on the tools discussed in this video [Music]
