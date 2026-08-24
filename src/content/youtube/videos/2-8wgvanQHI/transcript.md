---
title: "Pub/Sub Best Practices: Features"
sourceUrl: "https://www.youtube.com/watch?v=2-8wgvanQHI"
videoId: "2-8wgvanQHI"
capturedAt: "2026-08-24T21:34:11.948Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 219
---

## Transcript

[00:00:00] foreign [Music] what features and best practices you should use to simplify development then stay tuned hi I'm Chloe and in this video I'll be sharing six useful features to consider using when working with Pub sub let's get started number one push subscription using push subscription can be useful in the following scenarios if you're not able to include any code in your subscriber application if your subscriber is not allowed to make any outgoing requests or in cases where you want to use one instance to process messages from various topics and subscriptions where the subscriber client doesn't have context number two seek you can use the seek feature to replay a message in Pub sub by seeking to a snapshot or timestamp seek lets you mark

[00:01:04] previously acknowledged messages as unacknowledged this allows you to force Pub sub to redeliver messages in instances where you may have performed an erroneous acknowledgment you can also use seek to delete the unacknowledged messages by seeking a future timestamp number three message retention in topic enable topic retention to store messages in the topic regardless of if you're ready to consume them or not you can retain messages in a topic for up to 31 days number four message retention in subscription you can also retain acknowledged messages in a subscription by enabling subscription retention or by taking a snapshot you can retain messages in a subscription for up to seven days when the message retention period set on your topic does not match the message retention period set on your subscription messages will be retained up to the greater of the two

[00:02:06] number five dead letter topic consider setting up a dead letter topic allowing Cloud Pub sub to forward undeliverable messages to it you can move messages from the dead letter topic to your original topic by using a data flow pipeline to move messages from dead letter topic to your topic updating an existing pipeline to read from both the original topic and dead letter topic based on configuration or by creating a new system that when enabled moves messages from one topic to another number six configure by region if you have data residency requirements you can configure Cloud Pub sub to Only Store messages in certain allowed regions Pub sub's topic message storage policy offers a way to ensure that messages published to a topic are never persisted outside of a set of Google Cloud regions you specify regardless of where the publish requests originate

[00:03:10] there you have it six useful features to consider when working with Pub sub take a look at our Pub sub documentation for even more tips and tricks and check out the description below for links to additional information as well as step-by-step guides on the tools discussed in this video foreign [Music]
