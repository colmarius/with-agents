---
title: "Pub/Sub Best Practices: Patterns, Experimentation, and Testing"
sourceUrl: "https://www.youtube.com/watch?v=pP6ipLkXnkk"
videoId: "pP6ipLkXnkk"
capturedAt: "2026-08-24T21:34:22.327Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 199
---

## Transcript

[00:00:00] foreign [Music] if you're using Pub sub and want to learn some best practices for patterns experimentation and testing then this video is for you hi I'm Chloe and in this video I'll be sharing eight useful features to consider using when working with Pub sub let's take a look number one unique naming when naming your Pub sub resources use unique names avoid deleting and recreating the same resources with the same name to avoid delays from cache staleness number two avoid High fan out pattern High fan out pattern where you would have a large number of subscriptions is not recommended as Cloud Pub sub has a hard limit of 10 000 subscriptions number three granular subscriber credentials if you don't control all subscribers reading messages from your subscription make use of granular subscriber

[00:01:04] credentials so you can more easily track who is consuming messages and control access using IAM policies number four consistent throughput Pub sub works best with high throughput streams of data if you need low delivery latency but only have a low throughput stream of data you may want to send small heartbeat messages to keep a topic warm number five Pub sub emulator develop and test your application locally you can use the pub sub emulator which provides local emulation of the production Pub sub service you can run the pub sub emulator using the Google Cloud CLI number six add labels add labels to your Pub sub resources to break down your Pub sub bill by label you can break down your Pub sub bill by label to help you organize your Google Cloud resources attach a label to each resource then filter the resources based on their labels information about labels

[00:02:10] is forwarded to the billing system allowing you to break down your bill charges by label number seven consume messages by region when possible consume messages in the same region or in a nearby region as where they were published to minimize Network egress charges number eight retention duration if you manage both topic and subscription and you have topic retention duration that is longer than subscription retention duration you can remove subscription retention to save on storage costs there you have it eight useful features to consider using when working with Pub sub take a look at our Pub sub documentation for even more tips and tricks and check the description below for links to additional information as well as step-by-step guides on the tools discussed in this video we'll see you in the cloud [Music] thank you [Music]
