---
title: "Pub/Sub Best Practices: Client Library"
sourceUrl: "https://www.youtube.com/watch?v=F0H9qt1w9JE"
videoId: "F0H9qt1w9JE"
capturedAt: "2026-08-24T21:34:18.717Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 182
---

## Transcript

[00:00:00] foreign [Music] if you're using Pub sub and want to learn some client Library best practices then stay tuned hi I'm Chloe and in this video I'll be sharing six useful features to consider using when working with Pub sub let's take a look number one client Library language when using Pub sub take into consideration the client Library language you will choose we recommend using the Java client Library over python for performance reasons check out the link in the description to dive deeper into our blog post on testing Cloud Pub sub clients to maximize streaming performance to see some useful graphs and data comparing Cloud Pub sub performance by language number two reuse publisher reuse the same publisher client instead of recreating new publisher clients to avoid cold start problems the first publish request takes longer than

[00:01:03] subsequent requests number three flow control [Music] consider setting flow control on the publisher if your published requests are timing out often with high latency subscribers you may need to decrease their flow control settings to process fewer messages at any given time number four always update be sure to stay up to date with client Library versions newer client Library versions may contain fixes for critical issues or are likely required to use some new features check out our documentation for all the latest info on Pub Subs updates and features number five use node async in node.js all operations should be async so the recommended mode of operation is to use subscription dot on to receive messages and topic.publishmessage or topic.flow controlled if publisher side flow control is desired since many methods in

[00:02:06] node.js allow for callbacks or promise slash async based usage prefer the latter this will help performance number six lease management looking to modify or extend your message acknowledgment deadlines you can use modAck to modify and extend message acknowledgment deadlines we recommend streaming pull over pull in the libraries as libraries manage modAck there you have it six useful features to consider using working with Pub sub take a look at our Pub sub documentation for even more tips and tricks and check the description below for links to additional information as well as step-by-step guides on the tools discussed in this video [Music] foreign
