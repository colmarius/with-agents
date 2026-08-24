---
title: "Replaying and discarding messages - ep. 10"
sourceUrl: "https://www.youtube.com/watch?v=VyLmmamuOVo"
videoId: "VyLmmamuOVo"
capturedAt: "2026-08-24T21:33:59.046Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 234
---

## Transcript

[00:00:00] how do you recover from an unexpected subscriber problem what happens to the messages stay tuned to find out [Music] get out our asynchronous order processing service is now looking to deploy an updated subscriber code which is great but the challenge is the new executable may erroneously acknowledge messages leading to message loss best way to deal with this is well you guessed it don't deploy the new code well it's not ever an option that's mostly not an option so what should they really do well there is a feature in cloud pub/sub called seek which extends the subscriber functionality by allowing you to change the acknowledgement state of messages in bulk this means you can replay previously acknowledged messages there are two ways to perform seek operations you can seek to a snapshot or to a specific time if you seek to a snapshot it allows you to capture the message acknowledgement state of the

[00:01:03] subscription this means once a snapshot is created it retains all messages that were unacknowledged in the source subscription at the time of the snapshots creation and any other messages published to the topic after that you can replay these unacknowledged messages by using a snapshot to seek to any of the topics subscriptions snapshots expire and are deleted if the oldest unacknowledged message in the snapshot exceeds the message retention duration so if your subscription was set to retain messages for say 7 days but you were a day behind in processing the messages then the snapshot of the subscription would expire after 6 days you can use the same snapshot for multiple subscriptions as long as they have the same topic seeking to a time marks every message received by pub/sub before that time as acknowledged and all the messages received after that time as unacknowledged but to use the feature you have to choose to retain acknowledged messages on the subscription this can be convenient but

[00:02:07] usually costs more than snapshots it may also be inaccurate due to possible clock skews amongst the pubsub servers so if you want to replay and reprocess previously acknowledged messages just seek to a prior time if ko'd is deploying new code for a subscriber there should they seek to a snapshot or time well they should seek to a snapshot because incorporating snapshots into the deployment process gives a way to recover from bugs in the code if cannot face an unexpected subscriber problem and no relevant snapshot is available then seeking to pass times is a good way to recover with get out we saw two use cases where you can use seek feature in a new code deployment and in an unexpected subscriber problem seek two snapshots is also useful when testing subscriber code for performance and consistency because you have to use the same data in every run snapshots enable consistent data of its strong semantics that was replaying messages what about discarding what if cat out wants to just save on processing time and cost on

[00:03:10] backlogged messages that are no longer relevant in situations like that you can purge or discard those messages just seek to a time in the future and all those messages will be considered acknowledged all right so today we learn how to replay and purge messages in cloud pub/sub using the seek feature by seeking to a specific point in time or to a snapshot if you want to try out to seek feature yourself check out the QuickStart linked in the description below join us next time to learn more about ordering messages in cloud pub/sub until then give us a like subscribe and let us know what else you want to learn about cloud pub/sub you [Music]
