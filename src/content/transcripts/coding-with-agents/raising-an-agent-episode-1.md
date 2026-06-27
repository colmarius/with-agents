---
title: "Feedback Loops"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-1"
sourceUrl: "https://www.youtube.com/watch?v=auVu08nXKOw"
videoId: "auVu08nXKOw"
capturedAt: "2026-06-27T15:02:25.865Z"
series: "raising-an-agent"
episode: 1
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 1780
---

## Transcript

[00:00:00] It's like kind of crazy how easy it is
[00:00:02] to do this and that just is a huge
[00:00:03] testament to the amazingness of these
[00:00:05] models.
[00:00:06] >> Maybe talk about this that I think
[00:00:08] there's three big pieces, right? [music]
[00:00:18] Hello everybody and welcome to a new
[00:00:20] podcast called Raising an Agent. This is
[00:00:23] a limited run special edition podcast. I
[00:00:26] am Torston. I'm a software engineer here
[00:00:27] at SourceCraft and with me is Quinn, the
[00:00:30] CEO of SourceCraft. Hi Quinn.
[00:00:33] >> Hey Thorston. It has been so fun hacking
[00:00:35] with you. Now we get to talk about it.
[00:00:37] >> Yes, that's exactly what this is. To set
[00:00:40] the scene, for the last two to three
[00:00:41] weeks, Quinn and I have been hacking on
[00:00:43] a new AIFueled code editing tool, an
[00:00:47] agentic tool, and it's still a very
[00:00:50] rough prototype. It's still not
[00:00:52] production ready, but it is taking
[00:00:54] shape. And already every day, I think
[00:00:57] without exception, every day, there was
[00:01:00] one of us saying to the other, "Holy
[00:01:02] have you seen this?" or "Have you
[00:01:04] tried this? It did this. You should try
[00:01:07] this." So there's a lot of excitement.
[00:01:09] And I think part of the excitement comes
[00:01:11] from how good these models are, right?
[00:01:14] And the other part is say we put the the
[00:01:16] model in a harness, so to say, and the
[00:01:19] excitement comes from what they do in
[00:01:20] this environment. Like if you if you
[00:01:22] make the model an agent and you give it
[00:01:24] tools like what happens then? What this
[00:01:27] is this podcast is again limited run but
[00:01:30] this is our diary of excitement so to
[00:01:32] say. So we want to record what excites
[00:01:34] us. We want to share what excites us
[00:01:36] because it's fun to share things that
[00:01:38] you're excited about. I think you know
[00:01:40] maybe somebody else also gets excited
[00:01:42] about this and and sees this the things
[00:01:44] that we're seeing and maybe you know
[00:01:46] comes back to us with more exciting
[00:01:48] stuff. So, anything to add here, Quinn?
[00:01:50] Like a lot of excitement talk, but I get
[00:01:52] I'm I'm sure you're also excited about
[00:01:54] this, right?
[00:01:54] >> Oh, yeah. I just shared the recording
[00:01:57] feature that you made and it's so
[00:02:01] awesome and it feels like we're
[00:02:03] discovering with these new models and
[00:02:05] the advances these new ways of using
[00:02:07] code AI that people haven't thought
[00:02:09] about. I mean, one ding that a lot of
[00:02:10] people have is, oh, it's great for
[00:02:12] starting a new project, but what about
[00:02:13] if you have a big refactor in an
[00:02:15] existing project and you tried
[00:02:17] something, you actually told it to build
[00:02:19] something, a new feature that actually
[00:02:21] turned out to be really good at
[00:02:22] refactoring. And I've never seen that in
[00:02:24] any other tool.
[00:02:25] >> And it just it's it's mind-blowing. At
[00:02:27] the same time, I want to do this podcast
[00:02:30] with you because we can be really open
[00:02:31] about when it doesn't work. And we're in
[00:02:34] this mode where we can just go fix it or
[00:02:37] understand why it doesn't work. can at
[00:02:39] least plot out what we got to build in
[00:02:40] the future to make it work because I
[00:02:42] think you and I we are both pretty
[00:02:44] practical and we are using this all the
[00:02:47] time and we're not letting shitty user
[00:02:49] experience live for very long.
[00:02:52] >> Yeah, I think okay let's let's start
[00:02:54] with the recording thing as a as a small
[00:02:56] anecdote which is one of the things that
[00:02:58] kicked this off, right? The recording
[00:02:59] tool is essentially in your editor you
[00:03:01] can press record or use a shortcut or
[00:03:03] whatever and then we record the changes
[00:03:06] you make and then after you stop the
[00:03:09] recording you can now send the diff of
[00:03:12] what you did to the LLM and ask it to do
[00:03:14] the same thing that you've done which is
[00:03:17] sitting in between say you have auto
[00:03:20] edits or inline completion on one end of
[00:03:22] the spectrum and on the other end of the
[00:03:24] spectrum you have a chat interface where
[00:03:26] you tell the LLM do this or do that. So
[00:03:28] here, you know, it came up both of us
[00:03:31] independently coming up with the idea or
[00:03:33] maybe you influencing me. Um, hey, I'm
[00:03:36] doing some really hard refactor. It's
[00:03:38] hard to explain what to do. And inline
[00:03:39] completion also doesn't cut it there. It
[00:03:41] would be nice if it could record me or
[00:03:43] see me do this and then mimic me. So I
[00:03:47] asked our tool and I said, I want to
[00:03:49] build this feature. And it built the
[00:03:51] feature. I only had to tell it, oh, you
[00:03:54] have, you know, some compiler error or
[00:03:56] something. And then it fixed itself and
[00:03:58] it built the thing and I couldn't
[00:04:00] believe it. So I started it up and it
[00:04:02] says it even gave me a plan of how to
[00:04:04] try it out. It said start this up then
[00:04:07] run this command to start the recording
[00:04:08] and I I I was 60% sure it didn't work.
[00:04:13] So I ran a command started recording
[00:04:15] popup shows up says recording. Now I was
[00:04:18] surprised. Okay, I did something. I
[00:04:19] refactored. I think for my test project
[00:04:21] I added some debug lines. I stop
[00:04:23] recording again. and pop-up shows up and
[00:04:25] says recording stuff. Again, surprising.
[00:04:28] And then I used the command that it
[00:04:30] added to uh I think it called it apply
[00:04:33] changes or something like to tell the
[00:04:34] LLM to mimic the changes that I made.
[00:04:37] And I hit that button and what it did
[00:04:39] was it put a prompt in the prompt editor
[00:04:42] in the chat where it had all of the
[00:04:45] changes that I made as single character
[00:04:47] changes. So it was I think 60 70 lines
[00:04:50] of single character changes. And I was
[00:04:52] sure, you know, it was amusing to see
[00:04:55] this, but also I was sure that the other
[00:04:57] LLM that I'm going to send this to
[00:04:58] wouldn't get it. So I hit return
[00:05:00] expecting nothing to work and it worked.
[00:05:03] Like it it understood the changes that I
[00:05:04] made based on single character edits.
[00:05:07] And I recorded a video. I I took some
[00:05:10] screenshots or whatever and shared this.
[00:05:12] And then I think a day later or
[00:05:13] something, I was like, we we have to
[00:05:14] record a podcast. So you this is why
[00:05:17] we're here because there's every day
[00:05:18] there's moments like this.
[00:05:19] >> Yeah. And it's the promise of whenever
[00:05:21] you got a annoying refactor, you got to
[00:05:23] do the first 10% and maybe the last 3%
[00:05:26] but not the other percents. That's
[00:05:27] pretty cool.
[00:05:28] >> That's right. Yeah. Yeah. That's
[00:05:30] >> like all of this is on this prototype
[00:05:31] that we're building which is basically
[00:05:33] what if you take the latest model that's
[00:05:36] really good at tool calling that is
[00:05:38] really accurate and you build an editor
[00:05:41] agent based on that. And what would you
[00:05:43] actually need in that? You don't need a
[00:05:45] separate chat. You don't need a
[00:05:47] multifile editing mode. you just have
[00:05:50] the agent. You don't need maybe we're
[00:05:53] not sure checkpoints and roll backs. And
[00:05:55] it turns out you want MCP to be native
[00:05:58] and in that world MCP tools can mutate
[00:06:01] state outside of what you can capture in
[00:06:03] a roll back type system anyway. And also
[00:06:06] you can just tell it to roll back if it
[00:06:08] makes a change. And so it ends up in you
[00:06:11] know two weeks we got to something where
[00:06:14] we were having these mind-blowing
[00:06:16] moments. Not all both of us every single
[00:06:17] night, but I would say at least one of
[00:06:19] us every night as you said. And it also
[00:06:21] is fascinating how easy it was to get to
[00:06:24] that point and how it is this really
[00:06:28] nice architecture where now we can go
[00:06:31] improve the tools for searching or for
[00:06:33] editing a file. We can plug in a lot of
[00:06:35] the tools we've already built at source
[00:06:36] graph and you know potentially I mean
[00:06:38] who knows they got to prove their worth.
[00:06:40] It's like kind of crazy how easy it is
[00:06:41] to do this and that just is a huge
[00:06:43] testament to the amazingness of these
[00:06:45] models. maybe talk about this that I
[00:06:48] think there's three big pieces right the
[00:06:50] tools the model and say the wiring
[00:06:54] together of it all like the the
[00:06:55] integration like you know simplified
[00:06:58] what has surprised you about this the
[00:07:00] the tools and model and the integration
[00:07:02] like what's the important bit and what
[00:07:03] isn't the important bit
[00:07:04] >> I think it's just it's those three
[00:07:05] pieces and the wiring together is not
[00:07:07] actually that hard because we got there
[00:07:09] in like
[00:07:10] >> two weeks or so and you were spinning up
[00:07:13] here at source graph welcome back And I
[00:07:15] was not coding full-time because
[00:07:17] >> I got some other stuff to do. Although
[00:07:19] I've been trying to minimize that in the
[00:07:20] last few weeks.
[00:07:21] >> Yeah.
[00:07:22] >> But I think I think the point is we were
[00:07:26] both really surprised by
[00:07:29] it. You know, we're using Claude 37 now.
[00:07:32] We used 35 two weeks ago. Um, we were
[00:07:36] both really surprised by
[00:07:38] if you just give Clot some tools, you
[00:07:42] there's not much else. Like there it it
[00:07:44] it it really knows how to use those
[00:07:46] tools. And I'm sure like there's some
[00:07:49] stuff in the prompts and whatnot, but
[00:07:51] it's it's kind of mindblowing to see
[00:07:54] what it does. I as as an example, I we
[00:07:58] you know, we have like some tools to
[00:08:00] edit files. We have some tools to view
[00:08:03] files. We have a tool to run terminal
[00:08:05] commands and so I asked it I think two
[00:08:08] days ago or something I asked it to edit
[00:08:10] something some file and the edit tool
[00:08:12] call failed because I think it send us a
[00:08:14] string and not a JSON object or
[00:08:16] something like that and it tried it
[00:08:17] twice. You can see it live. It's like
[00:08:19] let me try to edit this file and then
[00:08:22] maybe that's its voice. I'm like let me
[00:08:24] try to edit this file and it failed. We
[00:08:26] sent back an error message and we say
[00:08:27] that's not a valid argument. Then it
[00:08:29] tries again with like the argument
[00:08:31] somehow changed. it still fails. And
[00:08:34] then it decides and writes, "Let me try
[00:08:38] this another way." And what it does is
[00:08:40] it creates a new file, puts the content
[00:08:43] that it wants in the other file
[00:08:45] completely in the new file, and then
[00:08:46] runs a terminal command to move the new
[00:08:48] file over the old file. And that
[00:08:51] like that's that's in the the model.
[00:08:54] That's that's you just give it the tools
[00:08:56] and it comes up with this stuff. That
[00:08:57] was mind-blowing to me. That was crazy
[00:08:59] to see. Yeah, that's right. So, you
[00:09:03] know, what are some of the obvious
[00:09:05] things that we know we need to build to
[00:09:07] make this even better to go way beyond
[00:09:10] like state-of-the-art for the kind of
[00:09:12] editor agent thing? What's in your mind
[00:09:14] there?
[00:09:15] >> I think the biggest realization is mind
[00:09:17] shift over the last few weeks was pre
[00:09:20] pre-tool calling or pre- agents, code
[00:09:23] editing agents. I had different
[00:09:25] expectations and I think a lot of people
[00:09:27] still have these expectations and that
[00:09:29] is you talk to a model and you ask it to
[00:09:32] generate some code and you know it comes
[00:09:35] you write one line two lines of of
[00:09:37] prompt and it comes back with 300 lines
[00:09:39] of code and then you're like thumbs down
[00:09:42] it didn't do what I wanted and then you
[00:09:44] tweak the prompt then do this again and
[00:09:46] now my mindet is now that why would I
[00:09:50] have ever expected this to work and it
[00:09:54] works. work sometimes, but why would I
[00:09:55] have expected it to work that well?
[00:09:58] Because this is not what it works for a
[00:10:00] human like you and I maybe on a really
[00:10:03] good day can oneshot a 300line file,
[00:10:06] right? If it's easy, but what we often
[00:10:09] need
[00:10:10] >> I would be very skeptical
[00:10:13] to try to do it that way, you know?
[00:10:14] >> Yeah. Well, I've seen some things. But
[00:10:16] what we need is, you know, compiler
[00:10:18] feedback, feedback from the interpreter,
[00:10:20] tests, cylinders, squiggly lines, all of
[00:10:23] that stuff to guide us and to kind of
[00:10:26] help us understand is the code that I'm
[00:10:27] writing working. And it turns out if you
[00:10:30] give a model the same kind of feedback,
[00:10:33] it gets better at writing code. Like it
[00:10:35] starts to fix the code that it writes.
[00:10:36] It it it it gives you 300 lines of code
[00:10:39] and then it's like, "Oh, there's a
[00:10:41] compiler error. Let me fix this. Oh,
[00:10:43] actually this library doesn't exist."
[00:10:45] So
[00:10:47] that sounds so tright when you put it
[00:10:50] like this. Oh, just give a diagnostics
[00:10:51] or you know compiler feedback. But it's
[00:10:54] such a game changer and and to your
[00:10:56] question I think what's really important
[00:10:59] is well the tools of course the model of
[00:11:02] course blah blah blah all of this but
[00:11:04] give the agent the right feedback at the
[00:11:07] right time for the thing that it's
[00:11:09] trying to do. Like that that I think is
[00:11:10] the crucial bit. That's the one that we
[00:11:12] have to get right.
[00:11:13] >> Yeah. the feedback loop here. This is
[00:11:15] where we have to be really careful when
[00:11:18] we think we know better than the model,
[00:11:19] but we do think that it's going to be
[00:11:21] really important to constrain it to
[00:11:24] force it to satisfy the feedback loop
[00:11:26] and to check that feedback loop before
[00:11:28] it proceeds because sometimes it will
[00:11:29] not do that even if you put it in the
[00:11:31] system prompt.
[00:11:33] But you got to be careful about when you
[00:11:34] think you're smarter than the model
[00:11:35] because
[00:11:37] uh I think all of so many of the
[00:11:39] mistakes that we made in the past when
[00:11:41] building AI things are where we tried to
[00:11:43] constrain the model too much and
[00:11:45] actually letting it go a little bit was
[00:11:47] better both because it would work better
[00:11:50] and because it would be more future
[00:11:52] proof.
[00:11:53] >> Yeah, that's the other big thing, right?
[00:11:55] That the inversion of control. I think
[00:11:58] you you call this like the we had this
[00:12:01] top down view of things where the model
[00:12:04] is kind of we give it all of the things
[00:12:06] and all of the context and that's still
[00:12:08] right to
[00:12:09] >> a baby bird in the nest and it's it's
[00:12:11] tweeting and you know you the mama bird
[00:12:13] spits some food into its mouth.
[00:12:15] >> Yes. And now the the view is more it's a
[00:12:19] big bird and can catch its own food. You
[00:12:22] just have to present it with the food
[00:12:25] somehow, right?
[00:12:26] >> Yeah.
[00:12:28] Great example, I think. So, our agent
[00:12:31] has multiple different search tools and
[00:12:34] one of those is, you know, a a keyword
[00:12:37] based rip grap search and, you know,
[00:12:40] with like globbing and whatnot, like
[00:12:42] what everybody knows when I say say rip
[00:12:44] grab or grab and the other thing is a
[00:12:47] codebased search like a semantic search.
[00:12:49] And when you asked the agent and say I
[00:12:52] think yesterday I asked it to add some
[00:12:53] animations to the UI and I told it to
[00:12:56] use a specific CSS class and it started
[00:13:00] keyword searching for that CSS class. So
[00:13:02] it knows like it knows okay like this
[00:13:06] will give me a result like this is a
[00:13:08] specific thing in this codebase that I
[00:13:09] can search for. But then it realized,
[00:13:12] oh, I want to see I don't know what it
[00:13:14] was like how how are these animations
[00:13:16] defined or something and this is in our
[00:13:18] Tailwind config, right? And then it
[00:13:21] switched to the semantic search and was
[00:13:23] like animation definition or something
[00:13:26] like this or you know some semantic
[00:13:28] thing that it search for. And I mean
[00:13:30] this is part of the prompting, right? We
[00:13:31] can get to this in a second. But it's
[00:13:32] also this if you have different tools,
[00:13:35] you don't have to necessarily dictate
[00:13:38] which one to use at which point, but the
[00:13:40] model decides for itself, which works
[00:13:42] surprisingly well.
[00:13:43] >> Yeah. And in the past, the way you might
[00:13:45] try to solve for that in a ragl like
[00:13:47] system is you say, "Oh, let's do intent
[00:13:49] detection on the user's query, and
[00:13:51] they're looking for something in the
[00:13:53] front end, so we should look in these
[00:13:55] files." And if you don't get that right,
[00:13:57] then you're screwed because there's no
[00:14:00] feedback loop. There's no way for the
[00:14:01] model to, you know, come back and get
[00:14:04] some more. But these are highly robust.
[00:14:07] Now, they are very slow and very
[00:14:11] expensive. Not like crazy expensive, but
[00:14:16] you and I using it, I think in total,
[00:14:19] >> both testing it and using it, we
[00:14:20] probably incurred like $1,000 in less
[00:14:23] than a month.
[00:14:23] >> Yeah, probably. Yeah. And
[00:14:25] >> I would happily pay that. I would
[00:14:27] happily pay that for every single dev at
[00:14:29] source graph and ton of our customers
[00:14:31] would pay that too.
[00:14:32] >> But it's expensive. And then when you
[00:14:34] think about it with a feedback loop,
[00:14:36] well, why don't we run a thousand
[00:14:39] agents in parallel and have some kind of
[00:14:41] fitness function to see which one wrote
[00:14:43] the code that passes all the tests and
[00:14:47] is best on this metric,
[00:14:49] >> you know, and then take the best and you
[00:14:51] know, so if it was cheaper and faster,
[00:14:53] we could take this thing that we've
[00:14:55] built and just scale it up and have even
[00:14:58] better results. Obviously, it's not as
[00:14:59] simple as that, but in theory, so
[00:15:01] there's still so many constraints.
[00:15:03] >> I I showed somebody yesterday um a
[00:15:07] little demo of this and I think we
[00:15:10] burned I don't know 15 bucks. I don't
[00:15:11] know like 10 10 bucks I think. You know,
[00:15:13] I we don't show the prices yet.
[00:15:15] >> Yeah. I mean, just your time and and
[00:15:18] their time looking at it is worth more
[00:15:20] than that. And that's
[00:15:21] >> right. Yeah. But so we did this and then
[00:15:24] you know after we had to restart our
[00:15:27] attempt it did it and it worked and it
[00:15:29] wrote a bunch of code and actually fixed
[00:15:30] the problem that both of us said both
[00:15:33] senior engineers we both said I don't
[00:15:35] know how to do this like well I would
[00:15:37] have to sit down and I think it would
[00:15:39] have taken me at least two hours to
[00:15:42] first understand the codebase then see
[00:15:44] you know all of this and so the model
[00:15:47] did it you know spend a bunch of money
[00:15:49] but what I then said to this other
[00:15:50] engineer was have you seen cerebras like
[00:15:54] have you seen how fast it could be like
[00:15:57] I'm
[00:15:58] >> you know kind of talking out of my ass
[00:16:00] I'm not saying
[00:16:00] >> you know that it's not the right fix if
[00:16:02] you are not familiar with that codebase
[00:16:04] >> I again coming back to feedback I
[00:16:06] basically asked it to I said hey I run
[00:16:09] this and I run that like it was like an
[00:16:11] authentication server and I ran a
[00:16:13] command and it says yep you're signed in
[00:16:15] you know with your email Mr. and blah
[00:16:17] blah blah. But then it says here's the
[00:16:18] user info and it says unknown unknown
[00:16:20] unknown unknown. So it was a pretty
[00:16:22] obvious thing that this is wrong. Like
[00:16:24] it authenticated me but the user info
[00:16:26] was wrong. So I know and I said it I
[00:16:29] said to the model I said fix this. If I
[00:16:31] run this do this and then throughout the
[00:16:33] conversation it says now try it again.
[00:16:35] Try it again. And then to stay on this
[00:16:37] track a little bit
[00:16:39] you know this is we could have a
[00:16:41] separate section of this podcast called
[00:16:42] they're just like us. But so I asked it
[00:16:45] fix this and it it and it did some it
[00:16:47] wrote some code and again coming back to
[00:16:49] oneshotting this. It wrote some code
[00:16:51] wrote a lot of code and I ran it and it
[00:16:54] looked like from what I could tell it
[00:16:56] looked like it makes sense the code but
[00:16:57] I ran it and it had a nil pointer
[00:16:59] exception like it it crashed. So I gave
[00:17:01] it the back trace. What would a human
[00:17:03] do?
[00:17:05] Exactly what the model did. The model
[00:17:07] said let me put some debug statements
[00:17:09] in. So the model went and looked at the
[00:17:12] code that it wrote and put debug
[00:17:14] statements in to find out what was nil
[00:17:17] and how the values throw through the
[00:17:19] system. And again like this is this is
[00:17:23] the mindset shift where previously would
[00:17:25] I think the expectation was always oh
[00:17:27] this is a model I'm just going to give
[00:17:28] it this and it's going to solve this
[00:17:30] problem for me and at the press of a
[00:17:32] button. But the way I think about it
[00:17:34] now, and I cannot believe I'm saying
[00:17:37] this, but it's truly think of this as
[00:17:39] like a a word processor intelligence in
[00:17:42] which you put context and then it
[00:17:46] thinks about it and it's automated. It's
[00:17:49] not yet faster than not always faster
[00:17:52] than you and I are, but it kind of does
[00:17:54] the same things that we do like that in
[00:17:57] it puts debug statements in. And then I
[00:17:59] ran it again and I pasted the output to
[00:18:01] it and it fixed the bug and then it it
[00:18:03] it worked. And
[00:18:05] >> yeah,
[00:18:06] >> back to the point I was trying to make
[00:18:07] is, you know, Cerebras like the they
[00:18:10] have like a,000 2,000 tokens per second
[00:18:12] or something with some specialized mods.
[00:18:14] I'm not saying they can do this for
[00:18:15] Claude, but my bet is we will get to
[00:18:18] this. Like if I have co Claude 37
[00:18:21] running at 2,000 tokens per second,
[00:18:24] that's complete game. Like
[00:18:27] >> Yeah. Yeah. Exactly. answers.
[00:18:29] >> Yeah. I mean, the fact that every single
[00:18:32] software developer and line of code is
[00:18:34] not written with the help of an agent
[00:18:36] that has a perfectly instrumented time
[00:18:39] travel debugger with 100 millisecond
[00:18:41] full CI times like all of this stuff.
[00:18:44] It's it's a criminal situation
[00:18:47] >> and it is only
[00:18:50] >> software engineering not fundamental
[00:18:52] model research that stands between where
[00:18:55] we are today and that world
[00:18:58] >> which is really cool cuz I mean the
[00:19:01] generalization of adding log statements
[00:19:03] is a full-time travel debugger in all
[00:19:04] the code and just be able to stop it and
[00:19:06] say what are all the values of every
[00:19:07] variable here and none of that is hard.
[00:19:10] I mean, it's hard and that it's a pain
[00:19:11] to set up and no one actually does it
[00:19:13] like a, you know, using a real debugger,
[00:19:15] but
[00:19:15] >> yeah,
[00:19:15] >> it's doable.
[00:19:17] >> And with agents,
[00:19:18] >> you know, there's actually more of an
[00:19:19] incentive to actually do that.
[00:19:22] >> Yeah. I I I think that's part of the
[00:19:25] we're both saying, you know, you said
[00:19:27] this, I said it like we have to be
[00:19:28] patient, but at the same time, we're
[00:19:30] both not patient people. And it's both
[00:19:31] this the realization that to some
[00:19:34] degree, you just have to type faster.
[00:19:35] like that there's not a lot of big
[00:19:39] riddles to be solved, right? Maybe I'll
[00:19:41] regret this, but my postulation is if
[00:19:44] progress with the models would stop
[00:19:46] today and the model would stay the same,
[00:19:48] like you would freeze claw 37 in time
[00:19:50] and freeze it, we could build so much
[00:19:53] stuff over the next few years. Like it's
[00:19:56] not even tapped, you know, like 5% of
[00:19:58] what it could do. like it's all in how
[00:20:01] much context you give it at what point
[00:20:02] how do you guide it how do you prompt it
[00:20:05] how how do you build the UIs and the UX
[00:20:08] around how to approach this model
[00:20:11] >> yeah so
[00:20:11] >> totally and there's so much suboptimal
[00:20:14] stuff going on like in most tools that
[00:20:15] people use when coding the way the tools
[00:20:18] are described and presented to the model
[00:20:20] is completely suboptimal it's not using
[00:20:24] how [snorts] that model is expecting the
[00:20:25] tools to be presented like claw 37
[00:20:28] sonnet You provide them an API and it
[00:20:31] does its own system prompt and that's
[00:20:32] different from how GPT like 4 and you
[00:20:35] know 03 and
[00:20:37] >> all this expected but all these tools
[00:20:39] they use one kind of generic system
[00:20:40] prompt for all the models and it works
[00:20:44] but how much fidelity are you losing I
[00:20:46] mean nobody really knows and is anyone
[00:20:49] doing uh testing evals of tool choice
[00:20:52] based on the descriptions or tool
[00:20:53] argument selection based on that? No.
[00:20:56] And when you get into the world of MCP,
[00:20:58] when you have servers written by some
[00:21:00] rando tools that maybe are not exposed
[00:21:04] at the right granularity, like why is
[00:21:06] the Slack MCP require the model to first
[00:21:08] call list channels and iterate over and
[00:21:10] then get the ID and then provide that to
[00:21:12] the other one. I mean these things they
[00:21:15] are so early and so suboptimal and what
[00:21:18] a wonder they work as well as they do.
[00:21:21] But like people got to realize like this
[00:21:23] is very early days and it's it's cool to
[00:21:26] be here
[00:21:27] >> and you know for us
[00:21:28] >> um we
[00:21:30] >> as a company we've always tried to build
[00:21:31] things that like 100% of devs at a
[00:21:33] company use and that's a very different
[00:21:35] kind of product from building something
[00:21:36] that like you know the 5% uh most online
[00:21:40] devs use. And for us that means we have
[00:21:43] to make something that every last damn
[00:21:45] dev can figure out. It can't rely on
[00:21:47] that person being a really good
[00:21:48] prompter. It's got to be like more
[00:21:51] reliable and it's hard to do that. But I
[00:21:54] think that pushes us in a direction of
[00:21:55] greater robustness and um I think the
[00:21:59] flip that we're making though with this
[00:22:00] prototype is there are so many benefits
[00:22:03] to our customers to having a vehicle to
[00:22:05] get them the latest advances of the
[00:22:07] models. And one thing we want to do here
[00:22:10] is to be really opinionated to say that
[00:22:13] it is best for our customers and for
[00:22:15] this prototype they are the you know
[00:22:17] basically opting in if they're using it
[00:22:18] to wanting to have an experience that is
[00:22:21] the best model and that means a few
[00:22:23] things are overturned. I think it means
[00:22:24] that multimodel is overturned. There's
[00:22:26] not going to be a model selector because
[00:22:28] we just cannot build a single product
[00:22:31] where you can flip from claude 37 sonnet
[00:22:34] to Gemini. Why would we support both of
[00:22:36] those? we would have an opinion on which
[00:22:37] one is best
[00:22:39] >> and any customer that truly wants the
[00:22:41] very best is going to be okay using both
[00:22:43] of those.
[00:22:44] >> Mhm.
[00:22:45] >> So, you know, all these kinds of
[00:22:47] opinionated things like another thing is
[00:22:49] we need to be able to rip out a feature.
[00:22:50] Like let's say that we had added
[00:22:51] checkpoints and then we found out that
[00:22:53] people are using a bunch of tools where
[00:22:55] we cannot roll back after that tool
[00:22:56] makes a mutation to the outside world.
[00:22:59] we need to build out checkpoints and we
[00:23:01] can't have a situation where this you
[00:23:03] know customer these users were depending
[00:23:04] on this behavior and we're already
[00:23:06] seeing that in a lot of the AI tools
[00:23:07] that were created like six to nine
[00:23:09] months ago where people are getting used
[00:23:10] to some of the things and it's hard to
[00:23:12] change. So part of this podcast also is
[00:23:14] we hope to explain why we're making the
[00:23:16] decisions that we do because change is
[00:23:19] always hard, but we want to be in a
[00:23:20] position to have like the perfect
[00:23:22] vehicle for the very best editor agent,
[00:23:26] whatever that means, literally today.
[00:23:28] And we get early access to models. So
[00:23:30] you know, we'll have two weeks or so to
[00:23:33] furiously code something out if we think
[00:23:34] something is a better model. So it'll be
[00:23:36] available to everyone on launch day.
[00:23:38] And I think to add to this, you know,
[00:23:40] less people misunderstand it, I think
[00:23:43] yes, we cannot build something for the
[00:23:46] 5%
[00:23:48] most online anime avatar, you know,
[00:23:50] prompt people. But I do think what we're
[00:23:53] trying to do right now is really focus
[00:23:56] on how would we use it and not imagine
[00:24:00] some you know anonymous gray stock
[00:24:03] avatar person working at a large
[00:24:05] enterprise company that oh surely they
[00:24:07] must ask for sample support on the first
[00:24:10] day. No, we're trying to build something
[00:24:13] that we use and that that works for us.
[00:24:15] And I think then we have to start
[00:24:18] thinking about how to build it out for
[00:24:19] the enterprise. But first, like, let's
[00:24:21] build something that we use and focus on
[00:24:24] the stuff that bugs us because chances
[00:24:27] are that if it bugs us and we think,
[00:24:30] "Oh, I wouldn't use this." Then right
[00:24:32] now, chances are
[00:24:35] others wouldn't use it. And sure, you
[00:24:37] get to a point where there are features
[00:24:38] that you wouldn't use, but it's also a
[00:24:41] time and and and resources thing here,
[00:24:43] like what do you focus on from the
[00:24:44] start? So, you know, focus on what we
[00:24:49] want to use. does it work for us? And
[00:24:51] then expand it from there. But really
[00:24:54] nail like that the core proposition of
[00:24:56] this like how well does it work?
[00:24:58] >> Yeah. Make it work really well. make it
[00:25:00] work really well, you know, for us first
[00:25:02] and then for a few other people and
[00:25:04] then, you know, don't add all the bells
[00:25:06] and whistles that make it infinitely
[00:25:08] configurable for all these different
[00:25:09] ways so that you know, yeah, someone
[00:25:11] could spend seven hours getting all the
[00:25:12] right tokens for all their MCPs and that
[00:25:15] would work like yeah,
[00:25:16] >> but yeah, when I think of enterprise and
[00:25:18] you know, making it work for everyone in
[00:25:20] a company, it's not the SAL features.
[00:25:22] you know, those are a necessary evil at
[00:25:24] some point, but it's about just making
[00:25:25] it work so damn well and being
[00:25:27] opinionated so you don't have to, you
[00:25:29] know, take a uh you don't have to be
[00:25:31] reading Twitter all the time for it to
[00:25:32] work really well.
[00:25:33] >> Yes.
[00:25:34] >> I think let's let's end it here with
[00:25:35] like two
[00:25:37] big surprises like or things that
[00:25:40] delighted us, right? Just to share some
[00:25:42] more of this. I'll have one on my list.
[00:25:44] Uh it has the f word in front of it, but
[00:25:46] it's just to illustrate like why we're
[00:25:48] excited about this. So yesterday uh no
[00:25:50] two days ago I think I asked the agent
[00:25:54] to update the function definition in go
[00:25:57] and add like a context context to the
[00:25:59] definition and then update all of the
[00:26:01] call sites. So what it would do is it
[00:26:04] would update the definition then it gets
[00:26:05] the compiler errors and sees that all of
[00:26:07] the definitions are now wrong and all
[00:26:09] the call sites are wrong needs to pass
[00:26:10] context in and so on. And what it
[00:26:13] started to do was it saw the compiler
[00:26:16] errors and then it started to fix the
[00:26:17] call sites one by one and it fixed one,
[00:26:20] it fixed two and I think the third one
[00:26:23] something failed because of intendation
[00:26:25] or something which still the common
[00:26:27] thing like we got to figure this stuff
[00:26:28] out. But then it got tired apparently
[00:26:32] and said let me try this a different way
[00:26:34] and it wrote bash script to replace all
[00:26:37] of the call sites and put context in.
[00:26:39] and then it tried to run the bash script
[00:26:41] which again didn't work but just the
[00:26:44] fact that you gave it this task and it
[00:26:47] tries it twice and then gives up and
[00:26:49] writes a bash script that's another X in
[00:26:53] the just like us column I guess so
[00:26:56] what's what was your most surprising or
[00:26:58] delightful interaction
[00:27:00] >> I over the last few days have been
[00:27:01] working on kind of the backend code here
[00:27:03] not the UI code but some refactors so
[00:27:06] that we support streaming from the LLM
[00:27:09] responses including tool call streaming
[00:27:11] so it it starts to invoke the tool
[00:27:13] before the whole response is done
[00:27:16] >> and that was a slog that was not fun and
[00:27:20] I wasn't feeling like I was getting
[00:27:21] leverage from this prototype unlike in
[00:27:24] the UI code or more like you know
[00:27:26] starting out
[00:27:26] >> so that was you know where kind of like
[00:27:28] the recording feature you made this was
[00:27:29] right before it where I found that if I
[00:27:33] just did like 10% of it then I could
[00:27:35] actually say hey look at the like get
[00:27:38] you status and the git diff uh git diff
[00:27:40] head and go and finish the refactor and
[00:27:44] it did a bunch of the work and it was
[00:27:47] good because I was kind of like feeling
[00:27:48] guilty in my head. It's like oh man I'm
[00:27:50] not actually able to use the prototype
[00:27:51] as much but it it did it and I didn't
[00:27:53] have to like add any new features there
[00:27:55] and it didn't get me 100% of the way
[00:27:57] there but it did enough to make me
[00:28:00] happy.
[00:28:02] >> Yeah. Yeah. The get I mean that's a
[00:28:05] whole separate topic. I'll I'll keep it
[00:28:07] short. But this is again one of those
[00:28:09] big surprises that if you give a model a
[00:28:12] git commit even in like a super raw form
[00:28:16] there's a lot of value in there
[00:28:18] especially with like a when you kind of
[00:28:20] want to add the context of hey
[00:28:22] previously we did this so now I want to
[00:28:24] continue with this or hey revert this
[00:28:27] change or understand this change or
[00:28:29] something like this because in that
[00:28:31] commit you have ideally a good commit
[00:28:33] message but you have multiple files you
[00:28:35] see the relation between files. That's a
[00:28:38] meta signal. You see what changes
[00:28:40] together you see which tests are
[00:28:42] updated. You see which types have to be
[00:28:44] imported stuff like this. And the the
[00:28:46] models like what I did just like you I I
[00:28:50] changed something in the UI and then
[00:28:52] later on I want to change it again. I
[00:28:54] said in this previous commit we made
[00:28:56] this change and it then looks at the
[00:28:58] commit and understands okay so if I
[00:29:00] change this component over here I have
[00:29:02] to change it over here too blah blah
[00:29:03] blah. that it takes this into the
[00:29:05] context and goes off from there. Get
[00:29:07] commit to the new the new meta as I
[00:29:09] said.
[00:29:10] >> Yeah.
[00:29:10] >> Yeah.
[00:29:11] >> It'll be interesting to see what if what
[00:29:12] we said this time will will change as we
[00:29:15] keep learning.
[00:29:15] >> Yeah.
[00:29:16] >> But I just love being able to hack with
[00:29:17] you and be able to use this product
[00:29:19] every single iteration and
[00:29:22] >> love when I try it out and it's got a
[00:29:23] new feature for me like the recording
[00:29:24] stuff. Super cool. And this just so fun
[00:29:27] to be hacking on.
[00:29:28] >> It's super exciting. Super exciting. All
[00:29:31] right, let's end here. Diary of
[00:29:32] excitement. Raising an Agent first
[00:29:35] episode. Thank you, Quinn, for doing
[00:29:36] this.
[00:29:37] >> Happy hacking. Bye-bye.
