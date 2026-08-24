---
title: "Pub/Sub Best Practices: Publishing"
sourceUrl: "https://www.youtube.com/watch?v=Oo5PXA4idI8"
videoId: "Oo5PXA4idI8"
capturedAt: "2026-08-24T21:24:27.323Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 233
---

## Transcript

[00:00:00] foreign if you're looking for tips and tricks on publishing with Pub sub then you're in the right place hi I'm Chloe and in this video I'll be sharing six best practices when publishing with Pub sub let's get started number one batch messages by batching messages you can increase throughput but larger batches also mean increased latency depending on your number of Publishers in combination with flow control and batch settings you'll be able to make decisions around the right optimizations for your specific usage your goal should be to consider the message size and publisher throughput to optimize for cost and latency check out links in the description below for a blog post with more information number two be mindful when using ordering keys publishing messages with an ordering key might slightly increase end-to-end message delivery latency since Cloud Pub

[00:01:03] sub takes steps to coordinate the storage and delivery of messages across different servers when using ordered delivery generally speaking when you want to optimize for latency you should enable batching since the client will wait for the batch to fill up before sending the batch to Cloud Pub sub however with ordering Keys If a batch of messages fails to publish they will be retried and can mess up the publish order we recommend when you publish with ordering Keys you disable batching that is set batch settings to allow only a single message to ensure messages are published in order one by one publish the next message only when the previous one has been successfully received by the pub sub server number three use a regional endpoint another must do when publishing with ordering Keys is to use a regional endpoint since order delivery is only guaranteed within a region using a regional endpoint instead of a global endpoint to

[00:02:06] publish messages to the same region can be especially useful number four consider bandwidth your published throughput is constrained by your network bandwidth as well as the number of requests you are sending if your bandwidth is good but your network latency is high you don't want to overwhelm the system with too many small requests you can also use publisher side flow control to help with client-side network issues number five provision your publishers your published throughput is also CPU and memory bound more available machine cores allow you to set higher thread count for better published throughput to learn more about how to maximize streaming performance check out our links in the description for a blog post that dives deeper into this topic and number six customize your own default retry settings when publish request timeout you will get deadline exceeded errors these are automatically retried by the client

[00:03:10] libraries but you can tweak the default retry settings with different initial timeout retry multiplier and total timeout values check out the pub sub documentation to learn more about recommended initial deadline and total timeout there you have it six best practices for publishing with Pub sub thanks for joining and keep an eye out for more best practice videos and take a look at our Pub sub documentation for even more tips and tricks for publishing with Pub sub foreign
