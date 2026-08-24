---
title: "Pub/Sub Best Practices: Subscribing"
sourceUrl: "https://www.youtube.com/watch?v=aHc-DOP43a8"
videoId: "aHc-DOP43a8"
capturedAt: "2026-08-24T21:34:08.184Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 232
---

## Transcript

[00:00:00] foreign if you're looking for tips and tricks on subscribing with Pub sub stay tuned hi I'm Chloe and in this video I'll be sharing six best practices when subscribing with Pub sub let's Dive In number one attach your subscription before we talk about subscribing to Pub sub it's important to remember you'll need to have a subscription first a subscription is attached to a topic and you can attach one or many subscriptions to an individual topic make sure you have a subscription attached or have topic retention enabled before you start publishing messages to ensure no messages are lost number two choose the right subscription when you create a subscription specifying the type of message delivery is key Pub sub currently offers three types of message delivery that correspond to the following three types

[00:01:04] of subscriptions pull subscriptions push subscriptions and bigquery subscriptions make sure that you take time to choose the right type of message delivery for your subscription want more details on what type of message delivery is right for you learn more about each type in our documentation linked below number three process before acknowledgment messages should be processed before they are acknowledged Cloud Pub sub will not redeliver a message if it's been acknowledged make sure you process your message first before acknowledging it number four acknowledge messages be sure to acknowledge messages if a message is redelivered then all the message received after that message for the same ordering key will also be redelivered whether or not they were already acknowledged for example if a subscriber receives messages 1 2 and 3 of the same ordering key and message 2

[00:02:09] is redelivered then message 3 is guaranteed to be redelivered as well number five use streaming poll for maximum throughput and lowest latency you may want to consider the streaming pull model over the push model or the unary pull model the streaming pulse service API relies on a persistent bi-directional connection to receive multiple messages as they become available unlike the unary pull method this maintains a constant connection to the server and receives messages continuously streaming poll is fully supported by Pub sub client libraries for ease of use you can learn more about streaming poll and flow control in our documentation linked below and number six use flow control when using streaming poll via our official client libraries we recommend enabling flow control settings by configuring a Max for outstanding messages on a subscriber client to avoid

[00:03:13] overwhelming any underprovisioned subscriber with too many messages to process this also prevents you from starving subscribers which have the capacity to process messages there you have it six best practices for subscribing with Pub sub thanks for joining and keep an eye out for more best practice videos and take a look at our Pub sub documentation for even more tips and tricks on subscribing with Pub sub [Music]
