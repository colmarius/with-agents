---
title: "ChatGPT Atlas Browser, Handoffs, and AR Apps"
resourceId: 3
summarySlug: "coding-with-agents/build-crew-episode-5"
sourceUrl: "https://www.youtube.com/watch?v=dvcwFTtX2jY"
videoId: "dvcwFTtX2jY"
capturedAt: "2026-06-27T15:02:06.585Z"
series: "build-crew"
episode: 5
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3658
---

## Transcript

[00:00:00] Thanks for joining Build Crew Live. Uh
[00:00:02] I'm Graham. We've got Thorston, Ryan,
[00:00:04] Cyan, AJ. Thanks everybody for joining
[00:00:07] us today. Uh this is our weekly show. Uh
[00:00:09] if you're not familiar with Build Crew,
[00:00:11] if you go to buildcrew.comte, you could
[00:00:12] join. It's a a community for anybody
[00:00:14] who's building with AI agents. There's
[00:00:15] so many of us that are building side
[00:00:17] projects, building companies by
[00:00:18] ourselves now because you could do that.
[00:00:20] Um and it's just a community for us all
[00:00:22] to get together. There's so much stuff
[00:00:23] changing every day. How do you stay on
[00:00:25] top of it? Um and that's what Build Crew
[00:00:27] is all about. We do a daily live stream
[00:00:28] or a daily uh standup in our Discord
[00:00:31] channel and that's where we met AJ. He's
[00:00:32] one of our great build crew members
[00:00:34] who's joining us today. Um
[00:00:36] >> but yeah, just want to welcome you all.
[00:00:37] Maybe we can all go around and say a
[00:00:39] quick quick intros um and and then we
[00:00:42] can talk about our our first question of
[00:00:45] the day. Actually, let's just get into
[00:00:46] the first question because we don't need
[00:00:48] we didn't intros. AJ, we'll have you
[00:00:49] introduce yourself when uh when it's
[00:00:51] time for your section. But this is my
[00:00:53] question I ask every week. What's
[00:00:55] something you've changed your mind about
[00:00:56] this week?
[00:00:57] It's every week we're totally convicted
[00:00:59] on one thing about agentic coding and
[00:01:02] then every week that thing gets dashed.
[00:01:04] So curious what's one you've changed
[00:01:06] your mind about. Maybe AJ, you're our
[00:01:07] guest of honor if you want to jump in.
[00:01:09] >> Sure.
[00:01:10] >> Um I think it's the
[00:01:13] the length at which the code the the
[00:01:15] agent can do code for me. So I I kept I
[00:01:19] gave it baby steps in the beginning more
[00:01:21] more and now I feel like entire features
[00:01:24] just rip them out.
[00:01:26] Yeah, I I want to pile on that for a
[00:01:28] second because I have this repo called
[00:01:30] AI dev tasks and I've always been
[00:01:32] shocked with how popular it is. And it's
[00:01:33] like create a PRD and then create a task
[00:01:35] list based on that PRD and then handhold
[00:01:38] the AI as it completes the task list and
[00:01:41] I'm about to rip out the third step
[00:01:43] completely. Like it's just absolutely
[00:01:46] not necessary that you're like continue.
[00:01:50] What? I'm
[00:01:52] >> Is this already at the discussion
[00:01:54] section?
[00:01:56] >> If you if it's if the topic is so spicy
[00:01:58] you have to talk, then go for it. So,
[00:02:00] yeah.
[00:02:00] >> I think AJ's gonna have a hangover soon.
[00:02:03] I think I think everybody walks up this
[00:02:06] ladder and goes like longer, longer,
[00:02:08] faster, more. And then one day they wake
[00:02:10] up and think, I don't understand
[00:02:13] this code does. [laughter]
[00:02:15] And then then you're going to go back to
[00:02:17] I gotta put a leash on this again. You
[00:02:20] know,
[00:02:21] >> everything's a pendulum, you know. Uh
[00:02:23] that's it's back.
[00:02:24] >> That's a one-way street. But [laughter]
[00:02:26] >> AJ,
[00:02:27] >> he said until next week he changes his
[00:02:29] mind.
[00:02:29] >> You can completely disagree with Torson,
[00:02:31] just so you know. That is allowed.
[00:02:33] >> I mean,
[00:02:33] >> we're live
[00:02:35] classic engineering practices apply.
[00:02:37] Like don't obviously don't let things go
[00:02:40] off the guardrail. do unit test, do
[00:02:42] integration tests, make sure your AI
[00:02:44] writes, you know, code that you can
[00:02:47] debug, that you know what's going on. I
[00:02:49] think um
[00:02:51] yeah, you you might be right, Dorson,
[00:02:54] but um I've been doing this
[00:02:57] incrementally for, you know, since GBT3
[00:03:00] came out, and I feel like my
[00:03:01] incrementalism has just kept going up
[00:03:03] and up and up and up. Um but my tests
[00:03:06] have become much much much much more
[00:03:07] integrated over time so that I can have
[00:03:10] this
[00:03:11] >> this incrementalism and then of course
[00:03:12] just learning tricks like work trees and
[00:03:16] um you know better get uh will will will
[00:03:20] help you through that incrementalism.
[00:03:24] >> I love it. I I I think I personally just
[00:03:28] because you're our guest I think
[00:03:29] Dorson's wrong and also I'll take any
[00:03:30] chance I get to jab at him. Um,
[00:03:33] >> this is going to be edited, right?
[00:03:35] >> Yeah, [laughter] exactly.
[00:03:36] >> Scott,
[00:03:37] >> he's fired. Okay.
[00:03:40] [laughter] Say, what's your uh what's
[00:03:41] your thing you've changed your mind
[00:03:42] about this week?
[00:03:44] >> Um, like, yeah, I've always kind of been
[00:03:47] a bit paranoid of like I guess kind of
[00:03:48] on the maybe unfortunate on
[00:03:50] unfortunately on Thorson's side here,
[00:03:52] but like I'm always paranoid that like
[00:03:53] if you don't really watch it too much,
[00:03:54] it goes and does crazy stuff and I've
[00:03:56] seen enough of that to make me worried.
[00:03:58] And so one way that I was kind of always
[00:04:00] watching was like whenever I would do
[00:04:02] searches for context and stuff, like I'd
[00:04:04] kind of be looking at it and saying,
[00:04:06] "Yeah, okay, like this looks about
[00:04:07] right." And sometimes I'd stop it and
[00:04:09] retry it if not. But now like and so
[00:04:11] because of that, I always wanted to have
[00:04:12] like nice like thorough searches
[00:04:14] whenever it's doing searches of the
[00:04:15] codebase. But we've like I've been
[00:04:17] playing around with we've been playing
[00:04:18] around with some like just faster things
[00:04:20] that um search maybe not as thoroughly
[00:04:22] but much more quickly. And like this is
[00:04:25] the I think the fundamental thing that
[00:04:26] makes like a coding great is it doesn't
[00:04:28] have the same human constraints. Like it
[00:04:30] doesn't have to be paying as much
[00:04:31] attention because it can just do 10
[00:04:32] things at once. And I think with
[00:04:34] searching I'm I'm kind of finally
[00:04:35] starting to see it swing that way where
[00:04:36] like I don't care how thoroughly you do
[00:04:38] it just do more of it or just like do it
[00:04:40] more in parallel and you get probably
[00:04:42] amount about the same results and I end
[00:04:44] up waiting a lot less which is like the
[00:04:46] biggest thing that frustrates me
[00:04:47] nowadays. I hit enter and I'm kind of
[00:04:48] twiddling my thumbs or waiting for
[00:04:50] something to finish. But I think I have
[00:04:51] enough confidence where it's at least as
[00:04:53] good now. So that's why
[00:04:56] >> that's why we built AMP free is to just
[00:04:57] inject ads into that waiting time so
[00:04:59] that you
[00:05:00] >> you can be you can become company we can
[00:05:03] be making it's good for everybody you
[00:05:05] know. Yeah [snorts]
[00:05:07] >> music now.
[00:05:08] >> Yeah. Oh [laughter] my god we do.
[00:05:11] Thirstston top of the top of the feature
[00:05:14] list is elevator music. That would
[00:05:17] [laughter] absolutely
[00:05:18] >> well
[00:05:20] I'm not sure if I should say this. Maybe
[00:05:22] we'll build it. But somebody was
[00:05:25] suggesting to me, you know, um in Chrome
[00:05:28] when you don't have an internet
[00:05:29] connection, it shows that little
[00:05:30] dinosaur game that jump. Yeah. They were
[00:05:33] suggesting we should have something like
[00:05:34] this when you wait for the agent in the
[00:05:36] prompt in box.
[00:05:37] >> That's fun.
[00:05:39] >> Yeah. A little
[00:05:42] >> on a more serious note, I'm going to use
[00:05:44] this occasion. I actually think I don't
[00:05:46] want to derail this, but sorry. No,
[00:05:48] please.
[00:05:48] >> I think the whole attention thing is
[00:05:50] still under discussed. Like it's I think
[00:05:54] it's an actual problem that what do you
[00:05:57] do while you wait for the agent? And
[00:05:58] sometimes, you know, this is going to
[00:06:01] take a minute and then you're going to
[00:06:03] command tab away for a minute or
[00:06:05] whatever. And it's not like you're
[00:06:07] always in the mood to have eight agents
[00:06:08] running at the same time. and the
[00:06:11] command tab. It usually doesn't stop at
[00:06:13] the minute, you know, even though we do
[00:06:14] have the audio notification, but
[00:06:17] >> yeah, I'm stepping down from the soap
[00:06:19] box, but
[00:06:20] >> Well, is that your is that your one I
[00:06:21] mean, you you've got the microphone. Is
[00:06:23] that your thing you've changed your mind
[00:06:24] about this week?
[00:06:26] >> No. So, I actually have something good
[00:06:28] this week. Um, [laughter]
[00:06:29] >> surprising.
[00:06:31] >> Well, didn't prepare. This just came up
[00:06:34] right now. But, so the last time we
[00:06:36] talked, this was last week, Tuesday,
[00:06:38] right?
[00:06:39] >> Yeah. And we we actually launched M3 on
[00:06:43] Wednesday. So I'm going to use this
[00:06:44] occasion to say that I it wasn't in the
[00:06:48] last week, but over the course of the
[00:06:51] last few weeks and months, I changed my
[00:06:53] mind on ads. Like I think I've always
[00:06:55] been a you know AMP free our free thing
[00:06:57] of AMP, but instead of you you paying
[00:07:00] for it, we show ads, right? And I guess
[00:07:03] I've been using ad blockers for the last
[00:07:06] 20 years in my internet browser. And I
[00:07:10] basically my earliest memories of ads
[00:07:11] were like the popups or the banners or
[00:07:14] the you know when you want to hit the
[00:07:15] download button but turns out hey fake
[00:07:18] this was an ad called download so now
[00:07:20] you got a virus. Like that was my first
[00:07:23] impressions of ads. But I do think that
[00:07:27] ads can make a business work on the
[00:07:31] internet. And it's actually when you
[00:07:33] think about it, Google Maps has ads
[00:07:35] [laughter] and you cannot block.
[00:07:38] >> I'm sorry. I'm sorry. Guy tech guy
[00:07:41] discovers ads.
[00:07:43] >> I mean, come on. Like I I look like even
[00:07:45] people they were saying like, "What ads?
[00:07:48] I can't believe you're doing ads." And
[00:07:49] I'm like, "Guys, like one of the
[00:07:51] technological marvels of the internet,
[00:07:54] freaking Google Maps, which is crazy,
[00:07:56] right? It's really good. It's supported
[00:07:59] by ads and you wouldn't be able to tell
[00:08:01] because the ads are so integrated and
[00:08:03] it's not in a shitty bad way like oh
[00:08:06] they're changing the the street is
[00:08:08] called McDonald's street you know it's
[00:08:09] not you know
[00:08:11] >> but [laughter] it makes the product free
[00:08:12] and work and so
[00:08:14] >> I changed my mind on this and I now
[00:08:17] think
[00:08:18] >> ads are good or they make a lot of stuff
[00:08:20] on the internet work. I'm gonna pile on
[00:08:22] and say I'm surprised at how many of the
[00:08:25] ads I'm clicking on in AMP because every
[00:08:29] dev like cares about dev tooling. Like
[00:08:31] you want to know like oh is there a
[00:08:33] better tool that I don't even know about
[00:08:36] and so I'm clicking all them learning
[00:08:38] all like oh I haven't thought about like
[00:08:39] that part of you know my pipeline or hm
[00:08:42] maybe I could use that. It it's like
[00:08:44] literally helpful.
[00:08:45] >> Yeah. It's like a mini hacker news where
[00:08:47] you're like oh
[00:08:48] >> yeah I'll click on this. So
[00:08:49] >> I'm sorry, but a a um a more believable
[00:08:53] mind change thing has never been true.
[00:08:56] Like uh guys who launch ad product think
[00:08:58] ad products are [laughter] like
[00:09:02] clearly
[00:09:04] >> the causation is different though,
[00:09:06] right? Like if we wouldn't have s
[00:09:08] changed our mind, we wouldn't have
[00:09:09] launched it, I guess.
[00:09:10] >> Well, this this is like I'm I've always
[00:09:12] been on the smooth brain side of the ads
[00:09:14] curve where I'm like ads I don't want to
[00:09:16] pay for stuff. Ads are good. And I feel
[00:09:17] like you all have you've tra traversed
[00:09:19] the bell curve and now reached again on
[00:09:21] my my correct assumption. So I'm glad
[00:09:24] welcome you're it's
[00:09:26] >> just one more thing on this. I don't
[00:09:27] know who this is not an advertise well
[00:09:29] maybe it is but like last week on on
[00:09:32] Twitter people were like ads um they
[00:09:35] ruined the product right they ruined the
[00:09:37] product. Example YouTube and I've been
[00:09:40] paying for YouTube Premium since two
[00:09:42] years I think. One of the best purchases
[00:09:44] ever. this isn't advertisement, I guess.
[00:09:47] And people were saying, "Oh, but the ads
[00:09:49] got worse. They're unskippable and
[00:09:51] whatnot, you know, like they put more
[00:09:54] ads in and whatnot."
[00:09:55] >> But then I'm like, "But you can pay,
[00:09:58] >> you know, like you get it for free. You
[00:10:00] still have that option to pay and you
[00:10:02] get the better product." So,
[00:10:04] >> exactly.
[00:10:04] >> I think it's relevant relevant
[00:10:06] engagement. I think your point about
[00:10:07] having dev tools just given to you or
[00:10:09] told to you when um when you're coding
[00:10:12] it that's I mean I who doesn't know Theo
[00:10:16] at this point right
[00:10:17] >> um and he's basically a walking talking
[00:10:19] advertisement for different things and
[00:10:21] there's also um that uh that YouTube
[00:10:24] channel that that it's like the daily
[00:10:25] coder I can't remember it's what it's
[00:10:27] called anymore shitfast or something
[00:10:28] like that
[00:10:29] >> um totally get you yeah
[00:10:31] >> he's also not cheap uh by like I don't
[00:10:34] want to drop it's a lot. It's like
[00:10:37] whatever you think it costs to have him
[00:10:39] talk about your product, it is so much
[00:10:41] more it will make your eyes bleed. And
[00:10:43] so I just think the Anyway, this is not
[00:10:45] to talk I I would love to beat Theo and
[00:10:48] have to make you have eye bleeding
[00:10:50] prices to
[00:10:51] >> you could have said you're doing it for
[00:10:52] 10% less just now. This this was a
[00:10:54] chance
[00:10:55] >> but still nobody would pay nobody wants
[00:10:56] me. Um this I'm here because I am locked
[00:10:59] in this room. Ryan, what's your uh
[00:11:01] what's your thing you changed your mind
[00:11:02] about this week?
[00:11:03] >> So uh mine is about CICD. So, um,
[00:11:06] producer Scott, if you want to throw my
[00:11:08] screen up, um, I actually just saw this
[00:11:11] tweet today, um, by, uh, Fatique, and I
[00:11:14] thought this was really interesting. So,
[00:11:16] this is a long post, so I'm going to
[00:11:18] sort of summarize it for you. He's
[00:11:19] basically saying he's separating out ET
[00:11:21] to E, um, you know, end toend testing
[00:11:24] from his CI pipeline. Um, and so if you
[00:11:28] just kind of scroll down here, he's
[00:11:30] basically saying, I think we should
[00:11:32] separate CI/CD.
[00:11:34] Um, and that we put uh like an async
[00:11:38] version of ETE in CI um and CD you can
[00:11:44] ship and then we wait for ET running in
[00:11:47] the background. Uh, and I think this is
[00:11:49] cool. And the reason why, and maybe this
[00:11:52] isn't novel or interesting, um, or
[00:11:54] something that big a deal to change my
[00:11:56] mind on, but as I build Untangle, this
[00:11:58] constant battle with flaky ET testing,
[00:12:02] you know, and trying to wind it into
[00:12:04] your one CI/CD pipe is just a pain like,
[00:12:09] and ED is constantly breaking in some
[00:12:13] way. And playrs, you know, something's
[00:12:15] not working right. So, uh, I'm going to
[00:12:17] I'm going to try this and and, uh, but
[00:12:20] immediately people are kind of mad about
[00:12:22] it like, uh,
[00:12:23] >> but it does it doesn't fix the issue of
[00:12:25] like,
[00:12:27] right, it's more like you shouldn't
[00:12:29] block the PR from merging.
[00:12:30] >> No, but this is kind of funny. Great.
[00:12:31] So, I just get to yolo merge my PR
[00:12:33] [laughter]
[00:12:34] and it's someone else's problem with a
[00:12:36] test. Awesome. You know, so yeah, there
[00:12:38] is problems, but thought it was
[00:12:39] something interesting to change my mind
[00:12:40] on. That's me.
[00:12:43] >> I like it. This is this is back to the
[00:12:45] pendulum, right? Like how long do you
[00:12:47] make people responsible for their own
[00:12:49] end to end integration or should we go
[00:12:51] back to people just throwing stuff over
[00:12:52] the fence to each other and seeing how
[00:12:54] that that goes up and down?
[00:12:56] >> I'm just going to make it to problems.
[00:12:57] So, right, that's all
[00:12:59] >> I'm
[00:13:00] >> You know,
[00:13:01] >> I want to call out some friends on the
[00:13:02] audience. So, it's nice to see Francisco
[00:13:05] um also saw deaf dog saying uh need more
[00:13:08] ads. Uh so, appreciate you.
[00:13:12] >> Yep. Um, and then there was um,
[00:13:16] uh, Blank had the thing, does it feel
[00:13:18] risky to you? Maybe it depends on the
[00:13:19] use cases like for enterprises who have
[00:13:21] a goal of 100% of the time. That's not
[00:13:22] really an option, right?
[00:13:26] >> Yeah, fair. There's a lot lot to to be
[00:13:28] there, but I'm going to play with that
[00:13:30] and I've changed my mind on that. So,
[00:13:32] um, the other thing I've changed my mind
[00:13:33] on which I'm very proud of is I have a
[00:13:35] keyboard cover for my happy hacking
[00:13:37] keyboard and I think it's very important
[00:13:39] and I've changed my mind about that.
[00:13:42] >> [laughter]
[00:13:42] >> This is was the original stance. No
[00:13:45] keyboard cover.
[00:13:45] >> No keyboard. And I also didn't have a
[00:13:47] wrist rest, which was killing me. So,
[00:13:50] I've changed my that.
[00:13:52] >> Wow.
[00:13:53] >> I think of it as like a natural aging.
[00:13:55] I'm like a pro alete. And so, I'm just
[00:13:56] going to my body's just going to age me
[00:13:58] out of having to work on computers. And
[00:14:00] that's
[00:14:01] >> that's what I need to That's right. I
[00:14:03] think that's sustainable. Um, okay. So,
[00:14:05] uh, before we jump into everybody's like
[00:14:07] full-on coding tip, uh, if you're
[00:14:09] watching, we definitely want to hear
[00:14:11] what you have changed your mind on this
[00:14:12] week. So, please feel free to drop those
[00:14:14] comments and we'll definitely address
[00:14:15] those as we get through here because
[00:14:17] it's the whole point of Build Crew is
[00:14:18] we're we can't all possibly know this
[00:14:20] stuff individually, but us all learning
[00:14:22] it together is where we're going to get
[00:14:23] this. So, and eventually we're going to
[00:14:25] train an LLM on all these conversations
[00:14:27] and no one will have to think ever
[00:14:28] again. Um, so Dorson, uh, you're up
[00:14:32] first.
[00:14:33] >> Slip on out of here. Uh what is your uh
[00:14:36] what's your coding tip for this week?
[00:14:39] >> I now I feel bad because this is again a
[00:14:41] little bit of a product placement but
[00:14:45] somebody just said
[00:14:46] >> well somebody just said in the chat
[00:14:48] we're releasing so many things
[00:14:50] >> and I don't want to badmouth things we
[00:14:53] released
[00:14:55] but this might be my favorite thing that
[00:14:58] somebody worked on last couple of weeks.
[00:15:00] Okay. So,
[00:15:02] if we show my screen right now, this is
[00:15:04] going to come out tomorrow. Like, if
[00:15:06] everything goes to black,
[00:15:08] >> so this is pretty edgy stuff. Um,
[00:15:12] >> so look like this is your standard
[00:15:15] um AMP thread. Um, I noticed I just
[00:15:19] installed a new font and now I have
[00:15:21] liatures, which is disgusting. I need to
[00:15:23] disable this. But, so I have a thread
[00:15:26] here, right? 5% of the context window.
[00:15:29] um it's not super super long but say I
[00:15:33] had to use more context or now you know
[00:15:36] I want to take this into a different
[00:15:38] direction but I want to um you know keep
[00:15:42] some of the context right and there's
[00:15:44] multiple ways to do this some people
[00:15:46] they say hey write everything you know
[00:15:48] to you know plan MD or um write the
[00:15:53] tests or the file names to this file or
[00:15:55] they compact and then they hope that the
[00:15:57] compaction keeps track of the valuable
[00:15:59] information. And so the thing that
[00:16:02] Nikolai on our team, I'm sure he's
[00:16:04] listening with his family gathered
[00:16:06] around him, what he built is called
[00:16:09] handoff. So here here's the hint, right?
[00:16:11] This starts a new focused thread with
[00:16:14] the relevant files and a prompt. And you
[00:16:18] use it by saying handoff and then you
[00:16:19] go, right? So in this thread, I
[00:16:21] implemented the features also coming
[00:16:23] soon. And now I can say handoff I want
[00:16:26] to now test this feature. And this is
[00:16:29] not the best prompt of all time but just
[00:16:31] to showcase this. I'm doing this live. I
[00:16:33] hope this works. So this it worked
[00:16:35] amazing. So what happened just now is
[00:16:39] AMP took my prompt um with the goal of I
[00:16:42] want to test this feature. It fed my
[00:16:45] goal along with the rest of the thread
[00:16:47] to another LLM and it said extract a
[00:16:51] prompt. that would be a good prompt to
[00:16:53] use in a new thread with all the
[00:16:56] relevant context in it. Right? And what
[00:16:57] it ended up generating is
[00:17:00] let me see if I can do this.
[00:17:04] How do I Yeah, there you go. Let me
[00:17:06] scroll up here.
[00:17:08] There you go. So here this is the prompt
[00:17:10] that was generated, right? The previous
[00:17:12] work implemented thread mentioned
[00:17:13] parsing resolution. Your task is to test
[00:17:15] this new feature. Locate or create this
[00:17:17] and all of this was generated by an LLM.
[00:17:20] And here tags the relevant files, right?
[00:17:22] So if I now hit return, I now have a new
[00:17:25] thread with all of the relevant context
[00:17:27] and I can, you know, before hitting
[00:17:28] return, obviously I can edit this. And
[00:17:31] [clears throat] so you know, we don't
[00:17:34] have to look at this or what it does.
[00:17:36] You can take this off the screen, but
[00:17:37] basically I think um this is a good way
[00:17:41] to manage context. I think the whole you
[00:17:44] have one single thread and you keep
[00:17:46] compacting or you have autoco compaction
[00:17:49] running or you tiny compaction or
[00:17:52] something or other stuff that we had
[00:17:54] which is oh you create a summary and put
[00:17:56] it in a new thread I think um this is
[00:18:00] not as good as this where you're focused
[00:18:02] about okay given this thread given this
[00:18:04] context window I want to take this
[00:18:06] information out and put it in new thread
[00:18:08] and it's like I said like it's been
[00:18:10] truly a feature where people
[00:18:13] you know, like the hard emoji in Slack
[00:18:15] or oh, I love this or I also love it. I
[00:18:17] really enjoy using it. So, I'm pretty
[00:18:19] excited about this.
[00:18:20] >> It's awesome. I've I've used it many
[00:18:23] times uh already. Um and it just takes
[00:18:26] that extra load off your mind where
[00:18:28] you're like, I need to continue this
[00:18:30] thread. How do I do that in a really
[00:18:32] smart way and write stuff? It's awesome.
[00:18:36] And I mean it's not even you know a
[00:18:40] small thread lover here like I love the
[00:18:41] the tiny threads with not a lot of
[00:18:43] context right but even it sometimes
[00:18:46] happens that you start a thread and then
[00:18:48] in the middle of the thread it goes off
[00:18:50] in some weird you have like a weird
[00:18:52] interlude where some tests fail and then
[00:18:54] you get back on track or something. if
[00:18:56] you compact or you keep using that
[00:18:58] thread, there's a chance that like that
[00:19:01] middle part that's that was an interlude
[00:19:03] or derailment is still in context. So,
[00:19:06] and I think with handoff and like the
[00:19:08] goal, it's it's good at like picking out
[00:19:12] the relevant information and only
[00:19:14] keeping that in your thread. And I know
[00:19:16] that for example um cloud code also lets
[00:19:19] you steer its compaction
[00:19:22] but I think the advantage is that here
[00:19:24] in AMP you have like separate threads
[00:19:27] and they're like you know the
[00:19:28] conversations they're first class
[00:19:29] citizens so you can actually see them in
[00:19:31] the web UI you know
[00:19:34] and Justin it's going to be released
[00:19:35] tomorrow I think maybe some people have
[00:19:37] already discovered it but it's going to
[00:19:39] be out tomorrow.
[00:19:40] >> And does it work in AMP free as well as
[00:19:43] paid or no? I'm
[00:19:48] not so sure that I maybe should say
[00:19:50] something live on air, but I'm pretty
[00:19:52] [laughter] I'm pretty pretty sure. Yes.
[00:19:55] >> Okay, cool. Hopefully.
[00:19:57] >> Yeah,
[00:19:58] >> is this something you you've
[00:20:00] wanted and requested? What are your
[00:20:02] thoughts on this?
[00:20:02] >> Yeah. Yeah, I I think I've I've I've
[00:20:05] tried it a couple times and I think it's
[00:20:06] nice. And I think the biggest thing for
[00:20:07] me is so I'm also I'm I have a split
[00:20:11] here. In theory, I'm I'm a small thread
[00:20:13] lover, but sometimes you get a nice a
[00:20:15] really nice context window early on and
[00:20:16] you're like, "Ah, I really want to keep
[00:20:17] this." So, there's been a couple of
[00:20:19] things. There's been a couple of things
[00:20:20] that have been really nice for that. One
[00:20:21] is sub agents, which is kind of like a
[00:20:23] more crude representation of this sort
[00:20:25] of thing where you would hope that the
[00:20:27] main thread would kind of push off the
[00:20:28] relevant context and it could go and do
[00:20:29] it without mostly polluting the main
[00:20:31] thread. I think that's the thing that's
[00:20:32] nice about handoff is a you have more um
[00:20:35] control over what's actually passed
[00:20:36] over. you don't just kind of sit there
[00:20:37] twiddle your thumbs and hope it comes up
[00:20:38] with the right sub aent prompt and b
[00:20:40] it's now interactive right you can't
[00:20:42] really interact with our sub agents
[00:20:43] they've been spun off but now you can
[00:20:44] you can continue working on that thread
[00:20:45] so that's nice um but yeah I think the
[00:20:48] the second thing this is also I think a
[00:20:50] feature that was released this week that
[00:20:51] I really like is I and I use it in VS
[00:20:53] Code I guess don't don't uh pull pull up
[00:20:56] your pitchforks I I do use the guey as
[00:20:57] well but um I think the same
[00:21:00] >> the going back and being able to edit
[00:21:02] last messages that's another beautiful
[00:21:03] way to keep like the context you really
[00:21:05] care about a lot the times I'll just
[00:21:07] have throwaway work in the same thread
[00:21:08] and then once I'm kind of done like
[00:21:09] those interludes if the tests passed at
[00:21:11] the end I don't really care that it
[00:21:12] knows that the tests have been changed
[00:21:14] I'll just go up and be like okay let's
[00:21:15] start from here again like we know the
[00:21:16] test passed now you can just remove this
[00:21:18] from your view of the world so that's
[00:21:20] yeah I've been loving all of the like
[00:21:22] progress you've been making and like all
[00:21:23] this like context management stuff and
[00:21:24] threads I think it's nice
[00:21:25] >> yeah that was released yesterday ability
[00:21:28] to edit messages in the CLI
[00:21:30] >> AJ is this uh do you do you as someone
[00:21:32] who doesn't have uh private access to
[00:21:36] are yeah and like our our Slack where
[00:21:38] you get to hear about all this stuff. Is
[00:21:39] this something that you um are
[00:21:41] interested in and maybe like
[00:21:44] comes out?
[00:21:45] >> I'm like thinking through it actually
[00:21:46] right now because you know it's always
[00:21:48] fun to put more things into an existing
[00:21:51] workflow and I'm just trying to think of
[00:21:52] like okay how am I going to do this? How
[00:21:53] am I going to do this? As I'm hearing
[00:21:54] I'm like where am I going to put this?
[00:21:56] Where am I going to put this? I think um
[00:21:58] handoffs is something that I you know
[00:22:00] and this is forgive me but like you know
[00:22:03] cursor right um in cursor this is where
[00:22:06] I tend to do these things I reference
[00:22:08] chats and I say like okay now give into
[00:22:10] that chat and give in this particular
[00:22:11] thing go and do do that thing and then
[00:22:14] come back to me when you're done and you
[00:22:16] know I have the little decorators of
[00:22:18] make an issue and make a PR out of it so
[00:22:20] that I can always you know keep it
[00:22:22] sandboxed away from from what I'm
[00:22:24] actually working on and I think that
[00:22:25] makes a lot of sense uh what what this
[00:22:27] feature is.
[00:22:28] >> I'm looking for the ban button. I don't
[00:22:30] see it. No, I'm just kidding. Um, using
[00:22:32] cursors allowed in build cur. That's
[00:22:34] totally cool. But but to to the point
[00:22:36] like I think I mean I've been saying
[00:22:38] this about a bunch of features like
[00:22:39] there's a lot of overlap and it's you
[00:22:42] can see that it's some kind of the same
[00:22:44] mechanism because at the end of the day
[00:22:46] we're talking about a context window in
[00:22:47] which you put text, right? And you can
[00:22:49] say I pull it in or I reference this or
[00:22:52] whatever. And I think um you know
[00:22:55] referencing past conversations which is
[00:22:57] also something I work on. Somebody asked
[00:23:00] me on SAK they were like isn't this kind
[00:23:03] of like handoff? I like yeah but from
[00:23:05] the other side or like you can have
[00:23:07] multiple references to different things
[00:23:09] but yeah there's a lot of overlap.
[00:23:13] chat, please uh comment if you want me
[00:23:15] to make a small Thread Lover t-shirt
[00:23:17] that uh people can get because we've
[00:23:19] said it twice now and I just
[00:23:21] >> I'd wear that.
[00:23:22] >> Yeah, I feel like I would wear that.
[00:23:24] That's good. Um All right, Ryan, what's
[00:23:26] your uh what's your tip of the week?
[00:23:28] >> Okay, so I'm going to show Atlas. Um so
[00:23:32] this is more of like a a UX um sort of
[00:23:38] uh thread I'm pulling on here versus a
[00:23:40] pure dev thread. Before you do, right,
[00:23:42] Atlas, come on. It's been out what, not
[00:23:44] even 24 hours. Can you give
[00:23:47] >> Yes, I'll give some give some context.
[00:23:49] Okay, so this is a new browser. So,
[00:23:52] we're actually looking at AJ's um
[00:23:54] website here. This is a new browser um
[00:23:58] actually uh released yesterday by
[00:24:00] OpenAI. So, the default experience looks
[00:24:03] like this, right? So, you actually have
[00:24:05] um you can choose your model uh down
[00:24:07] here. Um and then and then this is a you
[00:24:11] know do all sorts of various things like
[00:24:14] you know who is torn ball.
[00:24:18] >> Um wow
[00:24:19] >> this is going to be awkward.
[00:24:20] >> You are on the internet. Um so
[00:24:23] >> look at that your pictures.
[00:24:27] >> Anyway, so you know this is obviously a
[00:24:29] replacement for Google replacement for
[00:24:31] Chrome. Um this is an interesting deal
[00:24:34] right? Um you can click through um all
[00:24:36] sorts of beautiful images. There's
[00:24:38] something
[00:24:38] >> Look at that photo in the third row.
[00:24:41] Look at this. This is this is 13 years
[00:24:43] old. No, the one below
[00:24:45] >> the JIT hits the fan. That was a good
[00:24:46] talk.
[00:24:47] >> Oh my gosh.
[00:24:48] >> Yeah, the one Yeah.
[00:24:49] >> Um so this is a replacement, you know,
[00:24:52] for for Chrome potentially um for DIA,
[00:24:55] you know, for Comet. Um it's an agentic
[00:24:58] browser. Now I'm just using as in
[00:25:00] browser mode right now, so that's not
[00:25:02] that interesting. Um, but what is
[00:25:04] interesting is this. So, say that you
[00:25:06] have a website and we all do this like
[00:25:09] you become myopic on your own stuff and
[00:25:11] and it's hard to see it from a, you
[00:25:14] know, an objective perspective. Um, so
[00:25:16] what I did is I pulled up AJ's site and
[00:25:18] I have this simple prompt. Act like a
[00:25:20] user has clicked the link from AJ's ex
[00:25:22] profile and is considering hiring him.
[00:25:24] Click around and explore and look for
[00:25:26] problems. Now, AJ's building startups
[00:25:28] and doesn't need to be hired. I just
[00:25:30] want to be clear about that. Um but just
[00:25:32] in case he did and then you click agent
[00:25:34] mode, right? So let's just kind of see
[00:25:36] what this does. Um puts this beautiful
[00:25:39] >> Oh, I'm scared. [laughter]
[00:25:41] >> Yeah.
[00:25:42] >> I'm really scared.
[00:25:42] >> Is it going to hire AJ? Um
[00:25:45] >> do you if you don't click agent mode, it
[00:25:48] just has the website in context, right?
[00:25:50] >> Yep.
[00:25:50] >> Okay.
[00:25:51] >> Um and but this is me trying to observe
[00:25:54] a user, right? Which is kind of fun to
[00:25:56] be able to do. Obviously, you can do
[00:25:58] this with Playright. Um, but this is
[00:26:00] just kind of neat to see how a
[00:26:02] theoretical user might experience the
[00:26:04] site. Um, what they do. So, I've been
[00:26:07] using this a little bit on Untangle,
[00:26:09] which I'm building, you know, um, act
[00:26:10] like someone who just got to s, you
[00:26:12] know, serve divorce papers like, and
[00:26:14] they found this site, what would they do
[00:26:15] and what would they think about it? Um,
[00:26:18] so this is kind of a fun example, uh, of
[00:26:21] using Atlas and agent mode. Um, as
[00:26:24] Torstston said, uh, you can do all sorts
[00:26:26] of things that you can switch from agent
[00:26:27] mode to, um, various different modes.
[00:26:30] So,
[00:26:30] >> is it is it a dumb question, but is it
[00:26:34] different than using the agent mode in
[00:26:36] the chat GPT?
[00:26:38] >> No, it's very similar except
[00:26:40] >> just that you can see it, I guess.
[00:26:42] >> Well, no, there is a fundamental
[00:26:43] difference, right? So, I'm actually
[00:26:44] going to go. So, so what I did is I
[00:26:46] clicked um take over um and what's
[00:26:50] interesting is the site seems to be
[00:26:54] I don't know why that's something's not
[00:26:56] working. I guess it clicked through seen
[00:26:59] it live. Oh, it was trying to go to
[00:27:01] >> to the publication I have. Okay, cool.
[00:27:03] >> Yeah, one of the one of the links which
[00:27:04] is interesting.
[00:27:05] >> Way to brag
[00:27:07] >> me on podcast first and then this guy
[00:27:09] shows up with papers
[00:27:10] >> on Arvix. Um, and producer Scott, could
[00:27:12] you pull AJ up just so we can see his
[00:27:14] beautiful face while we're doing this?
[00:27:16] Um,
[00:27:17] there. Hi AJ. Okay, now let's go back.
[00:27:19] Now, let's go back to the screen. Um,
[00:27:21] [laughter]
[00:27:22] there we go. So, the interesting thing
[00:27:25] here is watch this. So, if I say I
[00:27:27] actually want you to do this um in agent
[00:27:31] mode, you can choose an Oh, interesting.
[00:27:34] Let me show you. Okay, so let's go to
[00:27:36] ryancarson.com for instance. Pull up
[00:27:39] agent. Okay. So, I could say agent mode,
[00:27:43] but you can choose logged in or logged
[00:27:45] out, which is interesting. So, this the
[00:27:47] idea is that you could use your browser
[00:27:50] as you and you're logged in or logged
[00:27:52] out. There's also, watch this. This is
[00:27:54] kind of cool. I can say use cloud
[00:27:56] browser.
[00:27:57] >> So, this is fundamentally different than
[00:27:59] if you use chat GPT in the app. It's
[00:28:02] always going to spin up a cloud browser
[00:28:04] versus use your browser in your logged
[00:28:06] in state. M
[00:28:08] >> um so yeah I think it's interesting um
[00:28:11] lot to play with here um from a you know
[00:28:14] aentic developer builder perspective
[00:28:18] um now programmatically I want to do all
[00:28:20] this through you know the SDK like okay
[00:28:23] spin up browsers click things tell me
[00:28:24] where there's holes all that kind of
[00:28:26] stuff so that is my
[00:28:29] >> okay
[00:28:30] >> tool
[00:28:30] >> that I'm playing with this this week
[00:28:31] >> I have two questions from that one uh
[00:28:35] the real thing that anybody cares about
[00:28:37] is When does it show that you first
[00:28:39] joined chat GPT?
[00:28:40] >> Oh, yes.
[00:28:41] >> What's your number?
[00:28:42] >> Let me
[00:28:43] >> uh do you all have your number? Because
[00:28:44] that's
[00:28:45] >> No. Where do you see this?
[00:28:48] >> Settings, I think. Let me Oh, here it
[00:28:50] is. Okay. So, let me share my screen
[00:28:52] again.
[00:28:55] >> Share my screen. Let's go.
[00:28:58] >> Okay. So,
[00:28:59] >> my number.
[00:29:00] >> If you open your settings, right? And
[00:29:03] >> incredible.
[00:29:04] >> All right. To did I beat you?
[00:29:07] by two days, dude. I have a,53.
[00:29:11] >> Yeah.
[00:29:12] >> But then again, this is good. This is
[00:29:14] good UX, right? To get people excited
[00:29:16] about it, you can say.
[00:29:17] >> Oh, and people have been sharing it like
[00:29:18] crazy. There's I've only seen two people
[00:29:20] beat me on Twitter so far. So, if you
[00:29:22] all want to share your
[00:29:23] >> What's your number, Graeme?
[00:29:25] >> Uh 1642.
[00:29:27] >> What? That That's just not That's not
[00:29:30] possible.
[00:29:32] >> It's when you first created an OpenAI
[00:29:34] account, not a chatbt account. So it's
[00:29:36] like if you signed up for the dev portal
[00:29:38] when it was just dev tools.
[00:29:40] >> So it's fake. [laughter]
[00:29:44] >> No just cooler than us. We just have to
[00:29:46] admit it.
[00:29:47] >> I'm just terminally early to things. I
[00:29:49] just like cannot and that's not a good
[00:29:51] thing, right? Like timing is everything
[00:29:53] and I am way too early to basically
[00:29:54] everything. Um
[00:29:55] >> except for this stream. You showed up
[00:29:57] late. So
[00:29:58] >> no, I was actually I was actually early.
[00:30:00] I was just off camera because I didn't
[00:30:01] want you all to see me eating my salmon
[00:30:03] bagel. Uh, but Joe Heightsburg from uh
[00:30:07] from AI Tinkerers is uh 1920.
[00:30:11] >> What? That's annoying.
[00:30:14] >> Francisco. Francisco 11:45.
[00:30:18] >> Pretty good.
[00:30:18] >> Well done, Francisco.
[00:30:20] >> I have to say, Ryan, when I saw that I
[00:30:21] beat you, I was like, "Oh my gosh." Yes.
[00:30:23] >> You should have You should have
[00:30:24] celebrated that a little bit more.
[00:30:26] >> Yeah. I didn't I just
[00:30:27] >> AJ, what's the What are you
[00:30:30] >> Do you have your numbers yet?
[00:30:31] I actually haven't even checked yet, but
[00:30:33] I can The only thing I can really brag
[00:30:35] about is uh X. I've been uh I've been on
[00:30:38] X since 2008.
[00:30:40] >> Oh my god.
[00:30:40] >> Okay, that's early. Yeah,
[00:30:42] >> right. You win.
[00:30:43] >> That's it.
[00:30:44] >> No, 2006.
[00:30:46] >> What?
[00:30:48] >> I'm like user like 19,000 or something.
[00:30:51] >> At some point, it tips over into this
[00:30:53] guy's old [laughter]
[00:30:55] >> everybody. I I'm the oldest person here.
[00:30:57] It's This is true. So,
[00:30:59] >> all right. So, we're um the only other
[00:31:02] thing Ryan, you said something about
[00:31:03] like when someone lands on Untangled and
[00:31:06] they can talk to like this is the first
[00:31:08] thing they see when they get divorced,
[00:31:09] like what are they going to look at? It
[00:31:10] just makes me think like is that how
[00:31:12] Untangled works? And like are you going
[00:31:14] to have a landing page that's like she's
[00:31:16] not into it, bro. Like here's the
[00:31:17] [laughter]
[00:31:19] >> I will now thanks to your amazing idea.
[00:31:22] So, watch out. [laughter]
[00:31:25] >> Cool. So before we get into S and AJ's
[00:31:28] uh tips, I just wanted to bring up a few
[00:31:30] uh things that we talked about in Build
[00:31:31] Crew this week, which I think were
[00:31:32] really fun. Um so we've got Ravi, who is
[00:31:35] a a user of our build crew team member.
[00:31:38] He consistently says like I'm not
[00:31:40] technical. Um and then he proceeds to
[00:31:42] show how he instead of using any guey on
[00:31:45] his desktop, he now just runs three
[00:31:47] different terminals and he has one
[00:31:49] that's all of his messaging. So he just
[00:31:50] pulls in all of his messages from one
[00:31:52] app. He navigates all of his file
[00:31:53] folders from another thing. And so he's
[00:31:55] just rebuilt his own desktop via
[00:31:59] terminal windows, which is like the
[00:32:01] coolest thing. And it also makes me
[00:32:03] think like
[00:32:04] everything feels like it's up for
[00:32:06] displacement right now, but is is even
[00:32:08] the the you know, Omari, I guess you
[00:32:11] would say, yes, but is even the OS like
[00:32:14] up for displacement right now? And are
[00:32:16] more people going to start using the
[00:32:17] terminal for all kinds of different
[00:32:19] things? You guys seeing this at all?
[00:32:22] >> Yes. Everything's programmable. It's
[00:32:23] wild. Like there's so much custom
[00:32:25] software you can make. Um I know Beyond
[00:32:28] like, you know, Vibe coded some sort of
[00:32:30] control for I for his Mac where he can
[00:32:34] like listen to audio from a tab on
[00:32:37] Chrome and control it from, you know,
[00:32:40] the top menu type thing.
[00:32:42] >> Yeah, it's crazy in your head.
[00:32:45] >> I'm waiting for a 2y mail client.
[00:32:49] >> Oh, there's there's a bunch I think.
[00:32:51] Yeah,
[00:32:53] >> it's like boring. [laughter]
[00:32:54] >> Yeah, I use there's a bunch. I I Yeah,
[00:32:57] there's lots of them. I used I mean used
[00:33:00] them 15 years ago. M was one of them 15
[00:33:03] years ago.
[00:33:04] >> Pine
[00:33:04] >> 15 years ago. Dang.
[00:33:06] >> Well, remember like
[00:33:08] >> never bring up anything again. AJ.
[00:33:10] >> Yeah. When when I was studying computer
[00:33:12] science literally 25 years ago, um yeah,
[00:33:14] we used Pine and used Vim and uh
[00:33:17] actually it was it was VI back then. So,
[00:33:20] >> yeah. And I would ar I'm not sure if I
[00:33:22] get the dates right, but I guess the
[00:33:25] first email client might have been a
[00:33:26] terminal email client, you know,
[00:33:28] >> there must have been. Yeah, to some
[00:33:29] degree.
[00:33:30] >> It probably suck, right? I mean, if you
[00:33:32] compare pine
[00:33:33] >> people. So AJ code it. I'll use it. That
[00:33:36] sounds great.
[00:33:37] >> Yeah,
[00:33:37] >> I think so. I mean, I think there's a
[00:33:39] space for it.
[00:33:40] >> So Tim Doule man on our team, right?
[00:33:43] [laughter] Um he he has like
[00:33:47] I don't know what it is. I don't know
[00:33:49] what it's called but he uses internal
[00:33:50] email client and so does Keegan also in
[00:33:52] our team I think he uses Emacs which is
[00:33:55] somewhere in between right but the cool
[00:33:58] thing about having a terminal doesn't
[00:34:01] have to be a TUI but like a terminal
[00:34:03] email client is you end up with just
[00:34:05] text and you can feed it to your agents
[00:34:07] so then you can say find me that
[00:34:10] basically what people are demoing right
[00:34:12] now right with like with the new Atlas
[00:34:14] browser they're like oh I'm going to
[00:34:16] give or claude right I'm going to give
[00:34:17] it access to Gmail and then can find my
[00:34:20] doctor's appointment or something.
[00:34:22] Keegan and Tim could have done this
[00:34:25] months ago without, you know, MCP
[00:34:28] whatever by just saying here run these
[00:34:30] commands to filter emails and whatnot.
[00:34:33] >> Yeah. I wonder if the the browser is
[00:34:35] some kind of um first step towards the
[00:34:39] device. I know that everybody's sort of
[00:34:41] forgotten about that video where it
[00:34:42] looked like um Sam
[00:34:45] >> Johnny IV
[00:34:45] >> Sam and Johnny IV were a couple picking
[00:34:47] you up at a bar. [laughter] Um but I
[00:34:50] think that that this is sort of a a step
[00:34:54] in that direction, right? Like if you
[00:34:56] use everyone uses their browser as their
[00:34:57] almost exclusive app on their computer.
[00:35:00] So like well then where would this sit
[00:35:02] on the device? So I I don't know if
[00:35:04] that's true or not, but that's something
[00:35:05] that's been poking around in my head. I
[00:35:06] would I would argue
[00:35:09] you know like I it's remember half a
[00:35:11] year ago when the whole thing was like
[00:35:13] computer use that basically oh it moves
[00:35:16] the cursor around on your screen it's
[00:35:18] >> I don't know I don't I don't want to
[00:35:20] call it a dead end but I don't think a
[00:35:21] lot has happened in the last six months
[00:35:24] on this
[00:35:25] >> but these agents are really good at
[00:35:30] using websites because they can look at
[00:35:32] the source code right and they can use
[00:35:33] JavaScript to modify them
[00:35:35] >> and if you think of the web as the
[00:35:37] application platform and if you think of
[00:35:39] agents as something you want to control
[00:35:41] applications
[00:35:43] I think starting on the web by making
[00:35:46] the browser do stuff for you is a smart
[00:35:48] move because then you can control the
[00:35:50] whole platform
[00:35:51] >> yeah yeah totally makes sense
[00:35:53] >> yeah I think actually I don't know sorry
[00:35:55] I didn't mean to jump in but yeah
[00:35:57] >> please jump in
[00:35:58] >> the computer use thing has definitely
[00:35:59] been I think like kind of dead the water
[00:36:01] for the last six months but I still do
[00:36:02] believe that if it gets a little bit
[00:36:04] better or like it if crosses that kind
[00:36:06] of the the ledge needs to get over the
[00:36:09] amount of information you get would just
[00:36:10] be insane, right? Because so much stuff
[00:36:12] is just not built for like programmatic
[00:36:13] access. Like there's no APIs for most of
[00:36:15] the things that I want to do on the web
[00:36:16] to make my life slightly better. If we
[00:36:19] could get like an agent to actually
[00:36:20] click through and like fill out stupid
[00:36:22] forms for me and stuff like that, oh my
[00:36:23] god. Yeah, I I'd be twiddling my thumb
[00:36:25] scrolling X a lot more. That's that's
[00:36:27] kind of the the
[00:36:29] >> I have a contrarian take on this um in
[00:36:32] that I I really think the there's like a
[00:36:34] civil war right now in in the web. Um
[00:36:37] there's people who are long on you know
[00:36:39] interfaces and shad CNN and just forums
[00:36:42] and all that other stuff. Uh and then
[00:36:44] there's other people who are like no
[00:36:45] absolutely I want to you know I want the
[00:36:47] the LLM to do everything for me. Um I'm
[00:36:50] on the side I'm very firmly on the side
[00:36:52] of I want the LLM to do everything for
[00:36:54] me. So much so that the reason why this
[00:36:56] company I called with context
[00:36:58] >> is um I believe that you know you should
[00:37:00] just have LLMs go and do tasks for you
[00:37:02] and you should just get the answer
[00:37:03] straight up on your face um as a you
[00:37:07] know as the answer to what you seek um
[00:37:10] almost immediately. So
[00:37:13] I'm long on tuies I'm long on um I'm I'm
[00:37:16] long on experiences rather than apps.
[00:37:18] Um, so I I I kind of I kind of hope that
[00:37:21] like interfaces kind of go away.
[00:37:25] >> I'll I'll disagree a little bit with
[00:37:27] you. So initially when I was building
[00:37:29] Untangle, you you have to ingest a ton
[00:37:32] of information from the user about their
[00:37:33] divorce. Like it's a ton like it's all
[00:37:35] of their financial data basically. And I
[00:37:38] started out with the chat interface just
[00:37:39] like hey let's just extract this stuff
[00:37:42] by chatting to the user. And it it it
[00:37:45] turns out like a lot of people want a
[00:37:47] structured form approach when they're
[00:37:50] entering data in
[00:37:52] >> it feels bad because if you're like tell
[00:37:54] us about your kids and you're like what
[00:37:55] do you need to know about my kids like
[00:37:58] >> and it feels yucky and bad it's but then
[00:38:01] it's cluji to go to formbbased purely.
[00:38:03] It's like so I think
[00:38:05] >> I think there's a mix here where users
[00:38:07] are going to get used to like a quick
[00:38:09] interview where it's like okay
[00:38:11] >> talk for a minute about your situation
[00:38:13] and then we ingest that um you know you
[00:38:16] structure the data and you insert into
[00:38:17] the database and then you you show a
[00:38:20] custom UI where you're like okay here's
[00:38:22] the stuff we need still.
[00:38:24] >> Yeah, I think there's a little bit of
[00:38:26] that.
[00:38:26] >> Yeah, but there's a lot of nuance,
[00:38:27] right? Like I'm firmly I don't know who
[00:38:30] I'm agreeing or disagreeing with. I
[00:38:32] guess I we all agree, but um
[00:38:34] >> I agree with Sion that
[00:38:37] >> I hate filling out forms, especially
[00:38:39] airline forms or travel booking. He's
[00:38:43] nodding because he's
[00:38:45] >> had a 100 flights in the last year and
[00:38:47] he's been through pain, but
[00:38:49] >> this is the last thing, you know, like
[00:38:51] or when you pick lunch from some online
[00:38:53] ordering thing and it's like, oh, choose
[00:38:56] your sides. Here's the fifth page that
[00:38:58] you have to click through. I'm like, I
[00:38:59] just want like the barbecue burger and
[00:39:01] the fries. That's it. But then for, you
[00:39:05] know, where you want reliable,
[00:39:07] deterministic,
[00:39:10] you know, information input, yes, a form
[00:39:12] makes sense. But most of the stuff is
[00:39:14] not a form. It probably shouldn't be.
[00:39:15] [clears throat]
[00:39:15] >> Agreed.
[00:39:16] >> Yeah. Yep. As a former.
[00:39:17] >> So, we all agree, right? We're all
[00:39:19] nodding. I brought us back into
[00:39:23] >> We agree that we agree that you're done.
[00:39:25] No. Um, so [snorts]
[00:39:27] [laughter] let me I'm just going to
[00:39:28] quickly do one more one more uh build
[00:39:30] crew highlight and then we'll jump into
[00:39:31] science coding tip of the week. Um, and
[00:39:34] so this is something that came up. We've
[00:39:36] been talking and and everyone I've said
[00:39:38] this to has felt like it resonated which
[00:39:40] is you tell the agent to do something,
[00:39:42] you say like take as much time as you
[00:39:45] want, take five minutes and it's like
[00:39:47] okay I took five minutes and it's like
[00:39:48] no you didn't. That was 30 seconds like
[00:39:50] you know nothing. Um, and so I created a
[00:39:52] tool using AMP Toolbox that uh,
[00:39:54] basically gives it access to the
[00:39:56] computer's time and then you could say
[00:39:57] like, "Hey, take five minutes on this
[00:39:59] and keep checking back to see if you've
[00:40:01] actually taken five minutes." Um, and so
[00:40:03] I did it and built the toolbox and then
[00:40:06] so it says, you can see here it says um,
[00:40:08] start a work session and it gets the
[00:40:10] time stamp. Um, and then when it's done,
[00:40:12] it said here, um, you can see, perfect.
[00:40:16] I've successfully built out this meetups
[00:40:18] feature, required three minutes, and it
[00:40:20] actually took eight minutes. So, like
[00:40:21] now it has a like deterministic
[00:40:23] understanding of how much time it's
[00:40:25] actually taken to do stuff. And so, I
[00:40:27] just, you know, built this and ran it. I
[00:40:28] don't know if this is going to improve
[00:40:29] things significantly, um, or if it's
[00:40:32] going to still take the only amount of
[00:40:33] time it wanted to take and then just
[00:40:34] keep checking until it's done. But um
[00:40:38] it's a cool sort of thing that came out
[00:40:40] of build crew organically this week.
[00:40:42] >> What trigger what will trigger the tool
[00:40:43] call do you think? What words?
[00:40:45] >> Um you just have to tell it how much
[00:40:47] time you want it to take.
[00:40:48] >> Interesting.
[00:40:49] >> Um and then it will call the tool and
[00:40:51] then it will it will do that. So
[00:40:53] theoretically you could tell it to take
[00:40:54] four weeks and we'll see what it comes
[00:40:56] up with. But
[00:40:58] >> this is cool. Love it.
[00:41:00] >> Yeah. think it's going to be very
[00:41:01] interesting to I mean I'd be curious to
[00:41:02] see what like how this ends up working
[00:41:04] over time because Claude specifically
[00:41:06] has like insanely incorrect like
[00:41:09] assumptions on how long things will
[00:41:10] take. I mean this has already been going
[00:41:11] around so yeah maybe it's in for a rude
[00:41:13] awakening but I think the idea of
[00:41:14] putting it in a corner for like four
[00:41:15] weeks is I don't know at some point you
[00:41:17] actually kind of start to feel bad for
[00:41:18] the engine. It's like ah you told me to
[00:41:19] send her a div and it's I I've done it
[00:41:21] in two seconds but now I have [laughter]
[00:41:22] three weeks left.
[00:41:25] Aren't
[00:41:25] >> Aren't it assessments on time the cutest
[00:41:28] thing in the world? It's like, you know,
[00:41:29] it just pipes up and it's like, I think
[00:41:31] this is going to take about two days.
[00:41:33] You know, this is probably going to be
[00:41:34] three days [laughter] and you're like
[00:41:36] laughing going, that's so funny.
[00:41:39] >> It's just trained. It's just trained on
[00:41:40] developers lying about how long stuff is
[00:41:42] going to take so they can do whatever
[00:41:43] they want. Um, so that's why that's why
[00:41:45] it takes that time.
[00:41:46] >> Oh, yeah. Asking it to do time estimates
[00:41:48] is funny. Yeah. Yeah. It takes it it
[00:41:50] does it does overestimate for sure.
[00:41:52] >> But this is um so people have asked for
[00:41:54] this and so I'm going to um I'm talking
[00:41:56] with somebody in the AMP team. I want to
[00:41:57] figure out a way where we can publish
[00:41:59] toolbox where I could just say like
[00:42:00] publish this tool to my profile so
[00:42:03] anybody could see it and we can have
[00:42:04] like a toolbox registry so anybody can
[00:42:06] see other people's toolbox. It feels
[00:42:07] like mpm packages right like we should
[00:42:09] be able to share that stuff. So that's
[00:42:11] my tip of the week is uh use my use my
[00:42:14] time toolbox. I'll I'll make it
[00:42:15] available as a a gist sometime soon. Um
[00:42:18] but you're a real engineer and do real
[00:42:21] things. So what's your your tip for the
[00:42:22] week for people?
[00:42:24] >> Yeah. Um, I'll I'll keep mine generalish
[00:42:27] because I guess my experience with this
[00:42:29] tip has also kind of be with been with a
[00:42:31] product we have and I can't follow on
[00:42:33] Thorson's shilling. That's just too
[00:42:34] much. So, um, no, but all jokes aside, I
[00:42:37] think the the thing that's been I think
[00:42:40] a big lift in just some of the work I'm
[00:42:42] doing is I think people the a lot of the
[00:42:45] coding agent stuff is focused on like
[00:42:47] writing more code, writing more code
[00:42:48] faster and stuff like that. And then the
[00:42:50] unfortunate other end of the loop is
[00:42:51] people have to actually read your code
[00:42:53] usually yourself hopefully first and
[00:42:54] kind of review it to see if it makes
[00:42:56] sense. Um so the velocity at which you
[00:42:58] create code is increased but reviewing
[00:43:00] code is still kind of a large bottleneck
[00:43:01] in the process. No one's saying we can't
[00:43:03] apply AI there. There's been a lot of
[00:43:05] interesting I think people working on
[00:43:06] that sort of stuff but um I think it's
[00:43:08] the thing that's been a big tip for me
[00:43:10] or like really useful in my own uh
[00:43:12] workflows. It's really actually super
[00:43:14] easy, especially with AMP. I'm sure with
[00:43:16] a lot of other LM and tools to kind of
[00:43:17] just spin up a very bare bones like
[00:43:19] review process. You can very simply just
[00:43:22] make it kind of ingest a diff from like
[00:43:24] GitHub or whatever your code host is
[00:43:26] kind of run that in whatever CI you have
[00:43:27] and like with a pretty simple prompt
[00:43:29] that you can tweak yourself, you can
[00:43:30] just get really useful, meaningful
[00:43:32] feedback on these diffs. And like this
[00:43:34] is something we have internally at
[00:43:36] Sourcecraft like running our own like
[00:43:37] code review over PRs and stuff on AMP.
[00:43:39] And like I've heard from a couple
[00:43:41] different people, myself included, that
[00:43:42] it like a lot of the time I'll push up a
[00:43:44] PR even if it's not ready and I'll like
[00:43:46] mark it just so I can get the review
[00:43:47] because like it's I think and it's and
[00:43:49] people always say I think that the gut
[00:43:51] reaction they have is well if it wrote
[00:43:52] it then why is it going to have any
[00:43:53] different feedback? I mean like it's
[00:43:54] it's going down a bunch of different
[00:43:56] paths every time, right? It's all
[00:43:57] probabilistic. So I think it's and it's
[00:43:59] it's been very useful. Like there's a
[00:44:00] lot of times catches like stupid small
[00:44:02] mistakes and a lot of times it actually
[00:44:03] makes me scratch my head and kind of go
[00:44:04] back to the drawing board. So yeah, I
[00:44:06] think it's been very useful to kind of
[00:44:08] use it on both sides and not just focus
[00:44:09] on writing code.
[00:44:11] >> This goes back to our just toss it over
[00:44:12] the fence thing, right? But you're
[00:44:14] tossing it over the fence to an agent to
[00:44:15] itself.
[00:44:16] >> Yeah. To [laughter] itself.
[00:44:17] >> I mean, has code review when you have to
[00:44:20] review code, has it changed for you with
[00:44:22] agents?
[00:44:24] >> Yeah, I think so. And I know um like
[00:44:26] people on your team like Bang are
[00:44:27] working on this a little bit and I was
[00:44:28] talking with him about this. Um I think
[00:44:30] it's changed a little bit, but there's
[00:44:31] still so much more. Like I think the the
[00:44:33] one thing now is especially if I'm
[00:44:34] reviewing a PR, I'll just like I'll
[00:44:35] chuck it out and like a lot of the times
[00:44:37] I'll like try it out and stuff, but also
[00:44:38] I'll just get like um like AMP to
[00:44:40] explain it to me or something or like
[00:44:42] okay like what does this part actually
[00:44:43] do? Like it just becomes so much more
[00:44:44] accessible. Like a lot of the times like
[00:44:46] when it's when you get like a 30,000
[00:44:47] line PR or whatever sometimes you sit
[00:44:49] down with your blanket and you're
[00:44:50] scrolling through like the files page
[00:44:52] and that kind of becomes a little bit
[00:44:53] more like archaic. I think you can get a
[00:44:55] lot of that most of the information for
[00:44:57] the first pass from an AI agent. And I
[00:44:59] think also I'll one more thing I'll add
[00:45:01] here is I think especially when you're
[00:45:02] like when you're in the process of
[00:45:04] writing your own code maybe not
[00:45:05] reviewing somebody else's like because
[00:45:06] the agent is writing most of it now
[00:45:08] you're not so intimately familiar maybe
[00:45:10] most of the time with all of the code
[00:45:11] and all of the lines and while they're
[00:45:12] there. So I think some of the things we
[00:45:14] were thinking about and exploring is
[00:45:15] like having maybe the first level pass
[00:45:17] not be organized by files which is kind
[00:45:19] of how it's been previously but kind of
[00:45:21] by like features or like chunks right
[00:45:23] where you can have something that the LM
[00:45:25] decided to implement that spans maybe
[00:45:27] three or four files. Doesn't really make
[00:45:28] sense to split that by file but rather
[00:45:30] by what the intent was and then maybe
[00:45:31] you can like highlight a feature and you
[00:45:32] can see all the diffs it touched across
[00:45:34] files and stuff like that. So I think
[00:45:35] there's definitely some head scratching
[00:45:37] and uh prototyping to be done there.
[00:45:40] like it. Justin's commenting on Atlas
[00:45:42] here. Gonna stick with uh probably
[00:45:45] Chrome. So, [laughter]
[00:45:48] just real quick, is anyone going to
[00:45:49] switch to Atlas? What is everyone's
[00:45:51] browser? So, let's go around the room.
[00:45:53] What's browser?
[00:45:54] >> I'm really burned by Arc and Dia. So,
[00:45:57] I'm I'm gonna wait. I'm gonna wait a
[00:46:00] little bit. Um
[00:46:02] >> not ready to be heard again.
[00:46:05] >> What's Dia? Isn't Dia the thing that
[00:46:07] turned into Atlas? Weren't they acquired
[00:46:09] or what was
[00:46:10] >> they got? So D so the original thing was
[00:46:13] Arc and Arc was it was made by the
[00:46:15] browser company in New York City as a
[00:46:17] completely independent browser. I assume
[00:46:19] it was built on Chromium
[00:46:21] >> and then then they like abandoned it and
[00:46:23] switched to DIA
[00:46:25] >> and it was like an Aentic browser and
[00:46:28] we're like what? Oh man, Arc was great
[00:46:31] >> and then they got bought by Atlassian.
[00:46:33] >> Atlassian.
[00:46:34] >> Yeah. Yeah.
[00:46:35] >> And then Atlas came out and everyone's
[00:46:36] like oh whoops.
[00:46:38] Yeah, I'm a brave browser person. I just
[00:46:40] am
[00:46:42] um I like
[00:46:43] >> You use the Brave browser or you use
[00:46:45] your browser bravely. [laughter]
[00:46:47] >> I don't use anything bravely. I actually
[00:46:49] use coward browser. No. Um [laughter]
[00:46:55] >> that's sad. Uh sad sad how true that is.
[00:46:58] Um all right, so we've got we've got a
[00:47:00] few minutes left. Um, and I want to give
[00:47:02] AJ some time because we've all been
[00:47:05] talking about boring stuff and AJ works
[00:47:07] on probably the coolest stuff
[00:47:10] bar down. Um, and he's building me a
[00:47:13] custom goalie helmet that he can talk
[00:47:14] about later and I'm not going to pay a
[00:47:16] dime for it and I'm just getting him to
[00:47:18] admit to that live on stream so he can't
[00:47:20] take it back. But, um, AJ, maybe you
[00:47:22] want to tell us a little bit about, uh,
[00:47:23] what you're working on and then share
[00:47:24] what your coding tip is for this week.
[00:47:26] >> Sure. Yeah. So, I'm working on two
[00:47:28] things. Uh first I'm working on AR
[00:47:30] glasses apps. So I'm a uh developer on
[00:47:33] the MenTra platform and I've built a
[00:47:36] number of apps. Um physical co-pilot for
[00:47:39] human labor. Uh clairvoyant which is an
[00:47:42] assistant that will leverage AI memory
[00:47:44] to help you win arguments with your wife
[00:47:46] every single time. Um and then one for
[00:47:49] >> there's no winning that course.
[00:47:50] [laughter] If I have perfect recall
[00:47:52] maybe there is. Um
[00:47:53] >> no reason doesn't matter. Anyway,
[00:47:54] >> I say this as I like as I twitch my
[00:47:56] ring. I'm like yeah maybe I don't know.
[00:47:57] Um [laughter]
[00:48:00] and the third is um is more for sports
[00:48:02] which is uh this this app that will show
[00:48:04] uh plays on your face. Um which is
[00:48:08] important for athletes in uh you know
[00:48:11] during training time. If you're a
[00:48:12] football player, you'll probably
[00:48:13] understand, you know, you need to be
[00:48:14] able to just do drills really really
[00:48:16] fast. Uh you're usually rate limited by
[00:48:18] the number of drills that you can put on
[00:48:20] your arm. Um we can do that on on a pair
[00:48:23] of heads-up display uh glasses.
[00:48:27] So,
[00:48:27] >> that is so cool.
[00:48:28] >> That's what I'm working on. And, uh, my
[00:48:30] tip, I mean, I can share my screen. I
[00:48:32] have two uh tips to share. Um,
[00:48:36] I think it's already up. Yep. Um, I love
[00:48:39] using the AMP CLI. I think there's uh a
[00:48:42] few things that I would decorate it
[00:48:44] with. The first is um, Lazykit, which is
[00:48:48] a CLI tool uh, for just seeing all your,
[00:48:51] you know, work trees, your your local
[00:48:53] branches, your commits, etc. And it's
[00:48:55] just a lot faster to just see the tree
[00:48:58] um as you're working through you know
[00:48:59] creating PRs through uh through through
[00:49:02] AMP. Um I write uh a few machine
[00:49:05] learning uh repos as well. And you know
[00:49:08] one of the great things in machine
[00:49:09] learning is that you could just well one
[00:49:11] of the necessary things in machine
[00:49:12] learning is actually being able to just
[00:49:13] create many many many training
[00:49:15] iterations. Um, and what I do is I just
[00:49:18] cause I tell AMP I'm like, "Hey, go and
[00:49:20] create five unique training jobs each
[00:49:22] with these hyperparameter adjustments
[00:49:24] and then create a separate uh git branch
[00:49:26] out of that so I can review each
[00:49:28] training job as it's been deployed and
[00:49:29] then compare them against each other."
[00:49:31] So that's uh where having um lazy git is
[00:49:34] so useful. And then of course the other
[00:49:36] one is especially as I get you know work
[00:49:37] on monor repos um Yazi which is just on
[00:49:40] the bottom right here and that's just to
[00:49:42] be able to you know navigate through um
[00:49:45] >> how do you spell this? Sorry
[00:49:47] >> y is y a zi
[00:49:50] >> I don't know about this tell us more.
[00:49:53] >> Oh yeah it's just uh it's it's literally
[00:49:55] like a like finder um in in your
[00:49:58] terminal and um helps me browse the
[00:50:01] >> Yeah. Yeah. And then you can open Vim as
[00:50:03] well. So, you know, it's uh
[00:50:05] >> Oh, that's kind of nice as well
[00:50:07] >> cuz I'm always enter I'm always hitting
[00:50:09] controlN to reveal um the directory
[00:50:12] structure in Neoim, but this is like way
[00:50:14] nicer.
[00:50:16] >> Yes, I I I think it's I think it's
[00:50:18] great. I I really love it. Um so, yeah,
[00:50:20] that's that's that as well. Uh and then
[00:50:22] the second tip is um librarian. This is
[00:50:25] from from, you know, from AMP and I
[00:50:27] think it's so useful. Um, I like to keep
[00:50:30] consistency in the way I define my um,
[00:50:33] so I use modal quite a bit to define,
[00:50:36] you know, uh, endpoints. Um, and I I
[00:50:40] have I have my own sort of GitHub or
[00:50:43] that I that I write in and I'm just
[00:50:44] like, hey, you know, preserve the um,
[00:50:48] preserve the way that I write uh, I
[00:50:51] define my modal, you know, endpoints.
[00:50:54] And it and it literally just goes and
[00:50:55] searches that thing and then finds it.
[00:50:57] And I think that's fantastic. So it
[00:50:59] looks kind of like this. Um, yeah, those
[00:51:03] are the two tips I have.
[00:51:06] >> Graeme, should I do my product placement
[00:51:08] and explain what librarian is?
[00:51:11] >> We don't co-opt our guests like that. We
[00:51:13] uh we
[00:51:15] No, I'm just kidding. Go ahead.
[00:51:16] >> If this wasn't this this was a layup.
[00:51:19] Like what?
[00:51:21] [laughter]
[00:51:22] >> I mean,
[00:51:23] >> that's a perfect use. Okay. Like I think
[00:51:26] that's perfect. So the librarian is came
[00:51:29] out also this week. It's only Wednesday
[00:51:30] but uh on Monday. It's a new specialized
[00:51:33] sub agent in AMP and its only job is
[00:51:38] to research code to find and read code
[00:51:41] on GitHub meaning in your own
[00:51:44] repositories in your own org or open
[00:51:46] source. And AJ's use case like hey look
[00:51:49] in these other repos in my
[00:51:51] >> I can actually the prompt if you want to
[00:51:53] see that.
[00:51:53] >> Yeah.
[00:51:57] So the f Okay, I have a follow-up
[00:51:59] question for you. Yeah.
[00:52:00] >> So I need to create a hello world fast
[00:52:01] API template using modal. Uh I you know
[00:52:04] I write this in a very specific way.
[00:52:05] Some examples of include are in this
[00:52:07] particular repository that I've got. Can
[00:52:10] you ask the librarian to take a look at
[00:52:11] the structure? Okay, I screwed up the
[00:52:13] spelling there and make a copy. So you
[00:52:16] know it I will say that right now it's
[00:52:18] searching quite a few uh repos. um given
[00:52:23] that you know
[00:52:24] >> I was pretty specific about what to what
[00:52:26] to look for. But nonetheless, you know,
[00:52:28] it did it did find uh a pattern and it
[00:52:30] did give me back the pattern this Hello
[00:52:32] World template just like exactly the way
[00:52:34] that I I define um my my endpoints. So
[00:52:37] save me writing a bunch of code over and
[00:52:39] over again um just automatically which I
[00:52:43] really appreciate.
[00:52:45] out of curiosity, why um you don't have
[00:52:48] these other repos local on your machine?
[00:52:52] >> I do. Um but I you know at this point I
[00:52:55] think I've got like
[00:52:58] >> I don't know there's too many repos to
[00:52:59] keep track of my mind and auto jump is
[00:53:02] is is a fun tool that I use to jump
[00:53:04] between different uh directories but
[00:53:06] honestly my source of truth in my mind
[00:53:07] is still git and um I I prefer to look
[00:53:11] there.
[00:53:12] >> Yeah. Interesting. Because I I mean
[00:53:14] technically,
[00:53:16] you know, if it's on your machine, the
[00:53:18] agent could find it, but at least in my
[00:53:20] practice,
[00:53:22] it's then absolute path and it's a
[00:53:24] different relative directory and then
[00:53:26] you're like, "Oh, is this the current
[00:53:28] state and whatnot and
[00:53:29] >> and I and I rename things like a madman.
[00:53:32] I mean, you know, and it's just for my
[00:53:33] own mental clarity." Um, but of course,
[00:53:36] when you do that, like so many things
[00:53:38] will break. And I know that it happens.
[00:53:40] I still don't care. I'm still going to
[00:53:41] do it. Um and and you know I think
[00:53:44] librarian for that reason just looking
[00:53:46] through git is is fantastic.
[00:53:50] >> I've got a quick um a quick thing I've
[00:53:53] been using in two minutes I can show. Um
[00:53:56] so uh producer Dan if you pull this up.
[00:54:00] So this is my setup. Um I'm using
[00:54:02] Ghosty.
[00:54:04] On the right you have AMP. In the middle
[00:54:06] you have Neoam with with uh a random
[00:54:08] file. And on the left I've got my dev
[00:54:10] server um running uh AMP free um and
[00:54:13] we've got IDE integration um now which I
[00:54:17] just love. So you basically type for/
[00:54:19] IDE and then it says okay you've got
[00:54:22] neovim up you know do you want to
[00:54:24] connect to that and you say yes I do and
[00:54:26] this is kind of basic stuff um but I it
[00:54:29] it's so helpful you know so I could say
[00:54:31] for instance so if I switch over here
[00:54:33] and go to line 115 switch back and say
[00:54:36] you know what's this line about
[00:54:40] um it's going to know all right you know
[00:54:43] uh here I am um and it talks about Salem
[00:54:48] Um, and that's perate Niantic Regional.
[00:54:53] Um,
[00:54:55] which isn't exactly the line I was on,
[00:54:57] which is interesting.
[00:55:00] I'm curious how this works, but I've
[00:55:02] noticed [laughter] I'm like, [snorts]
[00:55:03] wait a second, it's not working quite
[00:55:05] right, but it has the file in the
[00:55:07] context and uh and I use this all the
[00:55:09] time so that it knows kind of what I'm
[00:55:11] doing, what I'm working on. Um, so just
[00:55:14] type for IDE and it connects to to Neovm
[00:55:18] and I love it.
[00:55:20] >> That's very cool. This has been like a
[00:55:22] packed episode. We have gotten a ton of
[00:55:26] stuff in here and even a few jokes, not
[00:55:28] the ones we had before we went live, but
[00:55:30] that's okay. Um, AJ, this is like we
[00:55:33] really really appreciate you joining,
[00:55:34] but um, thank you.
[00:55:36] >> I feel like we didn't even get to dive
[00:55:38] into how cool some of the stuff you're
[00:55:39] working on is. like can you the the
[00:55:43] where can people see what you're doing
[00:55:45] and and how can we share some of that
[00:55:46] and then we oh we got a great question
[00:55:48] here.
[00:55:49] >> Sure. Um definitely go check out my
[00:55:51] website. Um follow me on X. I usually
[00:55:54] just post things. You know most of what
[00:55:56] I'm building is in person obviously. So
[00:55:58] these glasses that I use to test out all
[00:56:00] these AR apps. Um if you're in New York
[00:56:03] you can find me and I'll I'll give you a
[00:56:05] demo or you can buy these yourself and
[00:56:07] go on Menra's website and download the
[00:56:09] apps that I make. Um yeah, so you can
[00:56:12] find me on Twitter, find me on my
[00:56:13] website and um we can chat.
[00:56:16] >> Okay. When AMP client for glasses so
[00:56:19] that you can just be talking to people
[00:56:21] and coding
[00:56:22] >> at the same time.
[00:56:24] >> I would love that. I will.
[00:56:26] >> Yeah.
[00:56:26] >> So, uh we're not going to sponsor that,
[00:56:28] but build it please. That would be
[00:56:29] great. Okay. Um GMO had a question here.
[00:56:34] >> Uh repos cloned locally is cool for
[00:56:36] manual reading, but for search librarian
[00:56:38] is huge. Oh, I see. It's the librarian u
[00:56:40] question. Yeah, I think this is
[00:56:42] important like it to to what you were
[00:56:44] saying um about knowing may you you may
[00:56:48] have all these files locally but like
[00:56:49] every time I think about what state the
[00:56:51] current files are versus like just
[00:56:54] pulling down the the GitHub. I'm just it
[00:56:57] gives me anxiety. So like I do I think
[00:56:59] of the same thing like everything is a
[00:57:01] GitHub is the source of truth. Whatever
[00:57:03] trash is on my local machine doesn't
[00:57:05] matter and I shouldn't think of as
[00:57:06] reality.
[00:57:09] Yeah, specialized agent. This is a sort
[00:57:11] of a thing that we've talked about um
[00:57:13] GMA the that maybe Dorson you want to
[00:57:16] talk about this just briefly in a minute
[00:57:18] like Quinn's s whole thought on like
[00:57:21] generalized agents versus specialized
[00:57:22] agents and how we're leaning more
[00:57:24] specialized agents. Do you agree with
[00:57:26] that? Is that something that is a
[00:57:27] companywide thought or just a Quinn
[00:57:30] thought?
[00:57:31] >> I think um
[00:57:35] I well no I agree with Quinn. I think
[00:57:37] we've seen a lot of success with these
[00:57:39] specialized sub aents, you know, now
[00:57:41] librarian before Oracle, which we still
[00:57:44] have, and the codebase search agent,
[00:57:47] which it's now called Finder. We've had
[00:57:49] this from the start. I think they work
[00:57:51] really well. They get a new context
[00:57:54] window. They can do their job and they
[00:57:55] come back with the results. the general
[00:57:58] sub agents which we've also had I think
[00:58:01] I pulled up the blog post since July I
[00:58:04] think they can edit files too and
[00:58:07] they're general so they don't have like
[00:58:09] a prompt that says you your job is to be
[00:58:12] the librarian they you're a coding agent
[00:58:14] and I think we haven't found or nobody
[00:58:19] has a good UX for this where you
[00:58:21] suddenly have these subthreads and then
[00:58:24] you might one of them might get blocked
[00:58:27] And you cannot re you can and some
[00:58:30] clients look into what they're doing but
[00:58:32] it feels brittle and it feels complex
[00:58:35] and it feels like something that a lot
[00:58:38] of people
[00:58:40] um I don't know overestimate in in what
[00:58:43] it can do and sometimes they build like
[00:58:45] elaborate workflows where they kind of
[00:58:48] use this as like an automation thing and
[00:58:51] basically the idea would be oh you have
[00:58:53] the main agent then you say spawn like
[00:58:56] five a five EC2 machines and one for you
[00:58:59] know one sub agent for each and I think
[00:59:03] as soon as you have like something that
[00:59:05] looks like usual control flow like a
[00:59:08] loop five times do this you know like
[00:59:11] deterministic control flow as soon after
[00:59:13] you have this I think you should step
[00:59:15] out of the agent and use actual
[00:59:18] programming and then inside your
[00:59:19] deterministic control flow spawn the
[00:59:21] agents so
[00:59:23] >> ask am to whip you up a script to say oh
[00:59:25] sorry to whip you up a script just five
[00:59:28] times with these parameters. Invoke
[00:59:30] amp-x or claw whatever it you know
[00:59:32] whatever it is but don't
[00:59:36] try to build deterministic workflows on
[00:59:38] on agents I I you have to flip this have
[00:59:41] to flip it around and I think to shorten
[00:59:43] the sorry sub aents kind of I don't know
[00:59:47] they make the other thing more likely to
[00:59:48] happen.
[00:59:49] >> Yeah that's all good. I'm the one who
[00:59:50] asked you a a long question one minute
[00:59:53] before the did the show. So, no, no,
[00:59:55] it's my bad.
[00:59:56] >> Um, cool. This is great. I I It is. Yes,
[01:00:00] exactly. Um, this is great. I love this.
[01:00:02] We're now We're now on Wednesdays. We're
[01:00:04] going to remain on Wednesdays. So, um,
[01:00:06] just for everybody's calendars who's uh
[01:00:08] waiting with baited breath for the show
[01:00:09] to go live. That's when you can think of
[01:00:10] it now. Um, AJ, thank you so much uh for
[01:00:14] being our guest today
[01:00:15] >> and uh putting up with our our pre-show
[01:00:18] audio debacle. Last week it was Ryan, so
[01:00:21] bad.
[01:00:23] >> It's great. It's great to have you and I
[01:00:25] can't wait to I'm gonna be in New York
[01:00:26] in two weeks, so maybe we can we'll do a
[01:00:28] build crew meet up in
[01:00:29] >> Let's go. Let's go. All right. Thank
[01:00:32] you.
[01:00:32] >> Yes. Say, thanks for joining us today
[01:00:35] from the team taking a step away from
[01:00:37] writing code. Ryan, appreciate you as
[01:00:39] always, uh, being the the man who is on
[01:00:43] top of whatever is happening on Twitter
[01:00:45] at all times. and Thirstston. I wish I
[01:00:47] could say nice things, but um it's the
[01:00:50] way it always is. So,
[01:00:52] [laughter]
[01:00:54] >> thanks everybody for joining. We'll see
[01:00:55] you all next week.
[01:00:56] >> See you next Thank you.
