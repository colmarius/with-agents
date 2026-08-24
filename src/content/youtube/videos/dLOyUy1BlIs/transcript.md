---
title: "How to use Cloud Logging  to detect security breaches"
sourceUrl: "https://www.youtube.com/watch?v=dLOyUy1BlIs"
videoId: "dLOyUy1BlIs"
capturedAt: "2026-08-24T21:33:54.442Z"
channel: "Google Cloud Tech"
language: "en"
kind: "auto-generated"
durationSeconds: 293
---

## Transcript

[00:00:00] welcome to cloud security basics a series where we explain the ins and outs of securing your application on google cloud sound fun then stick around because in this episode you'll learn about why you shouldn't log into a compromised server instance during a breach greetings cloud detective last episode you used google cloud's operations suite to track down a compromised employee but this time i have finally gotten into your system i really have i repeat i have breached your system so riddle me this what can you do about it now that i'm on the inside hurry up as fast as you can try to get me out

[00:01:03] before i swap all of the employee photos with cat photos okay so here's what we know brad actor says he's breached my system which is a strange thing for an attacker to do and i haven't received any alerts from my monitoring system maybe i should log in and see what i can find actually no that could be playing into exactly what brad actor wants i almost just made a really big mistake and logged into the compromised instance but many attackers plan for this exact response and actually try to steal admin credentials as they log in to fix the breach so a general rule here is to avoid logging into a compromised server during a breach hmm so how can i see if brad actor really did breach my system without compromising it further well luckily we've set up an external store for our security logs that we can still check out what

[00:02:06] happened by putting our forensic artifacts in a separate place in this case a google cloud project we can examine the problem without alerting the attacker this lets us better understand what's happening and we can watch and record their actions to tip off local authorities if needed we set this up by using google cloud operations suites export feature in combination with syncs which are basically filtered exports for log entries the supported destinations for syncs can be a cloud storage bucket a pub sub topic a bigquery table or a cloud logging bucket so we created a sync in our application program the one broad actor says he compromised and we copied those logs into a cloud logging bucket in our logs monitoring project we ended up using a cloud logging bucket because unlike logs data that's stored in cloud storage logs stored in cloud logging are indexed optimized

[00:03:09] and delivered to let you analyze your logs in close to real time another benefit of this approach is that it allows us to set up a system where we view all of our project logs in one place simplifying monitoring everything in our cloud environment looking through my logs i don't see any suspicious activity hmm i guess it's best just to be patient and wait this one out and see if anything does pop up oh i got it now that's just devious dratz detective you foiled my plan it's true i didn't fully breach your system but i was hoping to steal your credentials when you attempted to log in it would have been a mistake to immediately log into the supposedly compromised server but i know you would have examined your audit logs which means you must have set up a separate security environment for your forensic files well played detective well played

[00:04:14] that's all from me for now but i will come back more devious and mischievous than ever in the near future so there you have it another episode of cloud security basics for more information about securing your cloud environment be sure to check out the links in the description below so stay tuned for the rest of the cloud security basics series because when it comes to security you can't let bad actors win [Music] you
