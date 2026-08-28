---
title: "Hands on with Gemini 3.7 Flash"
summarySlug: "coding-with-agents/hands-on-gemini-3-7-flash"
sourceUrl: "https://www.youtube.com/watch?v=kacf2bib-X0"
videoId: "kacf2bib-X0"
capturedAt: "2026-08-28T12:46:44.854Z"
channel: "Google for Developers"
language: "en"
kind: "caption"
durationSeconds: 261
---

## Transcript

[00:00:00] As a developer, I have things I want to build. And if you tell me that these agents can perform this task at 10x cheaper, that means I have a lot more budget to do work on things. Greetings. My name is Paige. I'm here from our DeepMind team, getting to speak with many of the folks who are building the future. I feel like the dynamics of AI are governed on two sides. One is the consumer/prosumer excitement around frontier models: what are the complicated things, where is the industry going, and what's possible? Then there is the enterprise space, where it is very practical, very pragmatic.

[00:00:41] When you think about major insurance businesses or financial services companies, they are processing thousands and thousands of documents. And I think where Gemini 3.7 Flash comes in is that none of those specific tasks within that workflow are all that complicated, but it's the scale of some of these operations. And so at Box, it's very important that you have a model that not only is capable of powering the agents that do these things, but also one that's efficient and can do this at the scale that businesses need.

[00:01:09] I think at Databricks, what we observe is that enterprises need to make decisions per day. A lot of decisions need to be grounded on data, but previously this was very hard. People need the right expertise to analyze the data and figure out what is the right information to answer these questions. In the excitement, as you mentioned, of using the latest and greatest, there is also the cost aspect to it. And so if you're not actively optimizing on the cost while delivering the same frontier accuracy, you're basically leaving a lot of money on the table, which you can reutilize for further exploration. So I think that trend is here to stay.

[00:01:43] Yeah, it almost feels like there's a new term: minimum viable model. Exactly. The name of the game is not to be the cool kid on the block because you have access to the top-tier model and use that. You're trying to figure out, hey, yes, I need to get this right. It needs to be capable, and that's the viable part. But I don't want to overspend where I don't have to. In fact, I never want to do that. That's the worst thing that could happen. That's waste. Working with a model that, A, has reduced token costs between 3.6 and 3.7—not to mention the cost of those tokens being cheaper—with better latency means that you can just use a model like Gemini 3.7 Flash in more places.

[00:02:20] The best model for the job is the one that can do it reliably well for the lowest cost and the fastest. Well said. Yeah, and as a developer, I have things I want to build. And if you tell me that these agents can perform this task at 10x cheaper, that means I have a lot more budget to do work on things I used to have to think about: oh, should I spend my tokens on this? But now I don't need to worry about this. And it sounds like you all are really pushing the boundaries of what's possible with multiple families of models, like models of different kinds of tiers, and then also multi-agent systems within the context of your companies.

[00:02:56] I think right now people are not only using a single agent for their tasks. Usually there is this main agent. In some agent patterns, that main agent will do planning, figure out what kind of data I need to look into, and then dispatch some agents to work on parallel exploration. So having a very low-latency, very efficient model like Gemini 3.7 Flash really helps with these sub-agent dispatch patterns.

[00:03:22] We also employ a recursive model where we have our agents spawn sub-agents as necessary, but that initial planning step can be broken down into subcomponents as well. The first thing that happens when a prompt comes in is this intent classification so that we can understand exactly what's going on. That step has to happen very, very quickly because you can't spend a whole lot of time just trying to understand the query. You haven't even made the plan yet. And so we found that using models in this tier, handling that intent-classification step before it hands off to maybe a frontier model for the actual planning step, is a nice way to have those two puzzle pieces working in concert.

[00:04:02] It's been so inspiring to hear how you all are using our models across your entire stack. It's great to partner with Google on this, and great to see the intelligence frontier always keep pushing over time. Hopefully we'll make you proud. Yeah, I don't doubt it. Excellent.
