---
title: "Context Engineering"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-7"
sourceUrl: "https://www.youtube.com/watch?v=p8a0PePNWlA"
videoId: "p8a0PePNWlA"
capturedAt: "2026-06-27T15:02:52.063Z"
series: "raising-an-agent"
episode: 7
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3235
---

## Transcript

[00:00:00] Yeah,
[00:00:00] >> it was a pretty easy to uh parallelize
[00:00:03] workload like one for each of the
[00:00:05] slowest tests I guess and it spawned
[00:00:08] them in parallel and then it just goes
[00:00:10] off and does it. Um so that's that's the
[00:00:13] current iteration of sub agents and they
[00:00:15] have full access to tools, full access
[00:00:16] to MCP servers. Um there's still you
[00:00:22] know stuff to figure out like what's the
[00:00:24] best UX, when do you want to use them?
[00:00:33] >> [music]
[00:00:38] >> So basically you know what are we doing
[00:00:39] here? uh we are learning about agents
[00:00:43] and one of the things that uh we've
[00:00:45] realized as we're kind of building AMP
[00:00:47] and building for agented coding is that
[00:00:49] there is kind of like a strategy uh
[00:00:52] around using agents. Uh it's it's a
[00:00:55] skill uh that is very learnable but you
[00:00:57] have to invest actively in learning it.
[00:00:59] Um it's it's like a power tool, right?
[00:01:01] It's like a a high ceiling skill but
[00:01:03] takes some investment. Um, and so we
[00:01:06] wanted to just like chat with people who
[00:01:09] have been using it, starting with
[00:01:10] ourselves, uh, experimenting with coding
[00:01:13] agents and pushing them as far as they
[00:01:15] can get them. Um, and then sharing what
[00:01:18] they've found works and what they found
[00:01:19] does not work, uh, with folks in the
[00:01:22] spirit of just figuring out how this new
[00:01:25] world of software engineering uh, works
[00:01:27] together. Um, so to that end, uh, I got
[00:01:31] Thorston here. uh creator of AMP and uh
[00:01:37] we're going to talk a little bit today
[00:01:38] about first some basic like agent stuff
[00:01:41] uh and then um some more of the recent
[00:01:43] features that you've been working on uh
[00:01:46] related to sub agents and preserving
[00:01:48] context windows and trying out different
[00:01:49] models and and that sort of thing. Um so
[00:01:53] yeah, anything to add to that?
[00:01:56] >> Glad to be here. Um no nothing to add. I
[00:02:00] mean just to underline what you've been
[00:02:03] saying that um it is a new way to
[00:02:06] program and it's
[00:02:10] I don't want to say we were right you
[00:02:12] know we were first but it feels like you
[00:02:15] know we said when we had conversations 3
[00:02:18] four months ago we were like this is
[00:02:19] this is crazy like this is a new way to
[00:02:21] do this and now slowly not slowly but in
[00:02:25] the last say four weeks you had a lot
[00:02:27] more blog posts popping up where people
[00:02:29] were describing ing, you know, it's it's
[00:02:32] context engineering and an agent does
[00:02:34] this and this is what an agent is good
[00:02:36] for and this is what it's not good for
[00:02:37] and
[00:02:38] >> everybody's discovering a lot of tricks
[00:02:40] right now.
[00:02:41] >> Yep.
[00:02:42] >> And it's Yeah. It's fascinating.
[00:02:43] >> It's It is fascinating.
[00:02:44] >> It's really fascinating.
[00:02:45] >> It's like we're reinventing the whole
[00:02:47] field in real time which is which is
[00:02:49] kind of cool.
[00:02:51] >> Yeah. And especially I mean you know for
[00:02:53] me it's been I don't know six seven
[00:02:55] years for you it's been I think more
[00:02:57] than 10 like in developer tooling.
[00:02:59] >> Yeah.
[00:03:00] >> I don't think there's been a bigger
[00:03:01] change in developer tool like I think
[00:03:03] >> no
[00:03:04] >> last 10 years maybe language servers
[00:03:07] >> maybe something like tree sitter you
[00:03:09] know formatterers
[00:03:11] that you know like stuff like this but
[00:03:13] >> yeah yeah nothing like this though
[00:03:15] >> nothing like this in the last 10 years
[00:03:17] in developer tooling. It's crazy. It's
[00:03:19] crazy. Um, okay. So, before we get into
[00:03:22] the the kind of like new stuff, um, just
[00:03:26] kind of like level setting here, I want
[00:03:27] to talk a little bit about the strategy
[00:03:30] for invoking agents because I often
[00:03:32] think it it runs counterintuitive both
[00:03:34] to people who are used to writing code
[00:03:36] by hand as well as people who were using
[00:03:39] AI a lot in the sort of like chat LM
[00:03:41] era. Uh, now we've kind of entered the
[00:03:44] coding agent era and the the strategy is
[00:03:47] is different now. and in some ways in
[00:03:49] direct tension with the habits that
[00:03:51] people learned over the past like you
[00:03:53] know 18 months 24 months.
[00:03:54] >> Um so talk a little bit about that like
[00:03:57] what what would you say is like the the
[00:03:59] overarching like strategy or like how
[00:04:01] best would you initiate someone into uh
[00:04:04] the world of of agentic coding?
[00:04:09] I would say
[00:04:11] use the mindset of an agent is like this
[00:04:17] little robot that you can send on its
[00:04:19] tracks and that does something for you.
[00:04:23] >> Um, and once you set it on the tracks,
[00:04:26] it will go and try and find the end of
[00:04:29] that track. Um, and that means it will
[00:04:32] edit files, it will self-correct if it
[00:04:35] runs into errors. It will try and find
[00:04:38] other relevant files. Um, run tests, run
[00:04:42] the compilers, you know, sometimes write
[00:04:44] code to test its own hypothesis or
[00:04:47] something. Um, and that's the UI looks,
[00:04:53] you know, let's leave aside terminal or
[00:04:56] not terminal, but the the general thing,
[00:04:58] it's just that it's still a chat
[00:05:00] >> interface like it's still user
[00:05:02] assistant, user assistant. So, it looks
[00:05:04] like what AI based programming was say
[00:05:07] half a year ago, right? where you had
[00:05:10] >> Kodi cursor winds surf with the sidebar
[00:05:12] and you chat to it and then
[00:05:14] >> but but the difference is
[00:05:16] >> um half a year ago these models were
[00:05:20] >> you know it's kind of like the chat GPT
[00:05:25] or cloud app except that you had like
[00:05:27] utility stuff on top like the the it
[00:05:29] would come back with code and you would
[00:05:31] say yes
[00:05:32] >> this code instead of copy and pasting it
[00:05:34] over here yes apply this and then apply
[00:05:36] this and And on top of that, the apps
[00:05:40] would build stuff like the user has
[00:05:42] applied this, user has applied this, and
[00:05:43] then you would chat and so on. But the
[00:05:46] difference with agents now is an agent,
[00:05:48] my personal definition is it's an LLM
[00:05:51] with access to tools that allow it to uh
[00:05:55] change its environment outside of the
[00:05:56] context window, right?
[00:05:57] >> Yep.
[00:05:58] >> So, what we're talking about here is you
[00:06:00] give an agent a bunch of tools to modify
[00:06:02] files on disk like a programmer. It can
[00:06:05] create files, list files, update files,
[00:06:08] glob files, run tests, and whatnot.
[00:06:10] >> Yeah.
[00:06:11] >> And
[00:06:12] so instead of this back and forth where
[00:06:16] at some point the agent waits for the
[00:06:20] user to say, "Yep, looks good." Or, you
[00:06:22] know, flesh this out some more,
[00:06:24] >> the agent can now call tools and do
[00:06:26] stuff on its own.
[00:06:27] >> And when it calls a tool, it gets a
[00:06:29] results of the the result of the tool
[00:06:31] and that kicks off this inference call
[00:06:33] again. And then it does stuff again and
[00:06:34] again.
[00:06:35] >> Yeah.
[00:06:35] >> And um
[00:06:37] >> again like it looks the same like the UI
[00:06:39] is similar except
[00:06:42] >> you kick this off with an initial prompt
[00:06:44] and then it goes and does stuff for you.
[00:06:47] And
[00:06:48] >> I think you know that's the mindset you
[00:06:51] should have. Like okay I'm I'm I'm
[00:06:53] kicking off this thing this tiny robot
[00:06:56] this agent. And
[00:06:57] >> then it goes off and does stuff on its
[00:06:59] own until it runs out of tokens or it
[00:07:02] says I don't know how to go any further.
[00:07:04] >> Yeah. And I would say the second thing
[00:07:08] is um
[00:07:13] I I don't I people might disagree but I
[00:07:16] think um previously
[00:07:19] it was a lot of back and forth and
[00:07:23] >> yeah like you and the robot just having
[00:07:25] an active conversation.
[00:07:26] >> Yeah. Yeah. You would Yeah. And then it
[00:07:28] it would ask you follow-up questions and
[00:07:30] you would ask follow-up questions and
[00:07:31] all of that stuff.
[00:07:32] >> Yeah.
[00:07:32] >> And you there was no problem with um um
[00:07:38] underspecifying stuff because the thing
[00:07:40] was in its box. It was in the
[00:07:42] conversation box. And now with agents,
[00:07:45] >> you want them to be aggressive. You want
[00:07:47] them to be agent and have high agency
[00:07:50] and you know the willingness to change
[00:07:52] stuff.
[00:07:52] >> Yep.
[00:07:53] >> So
[00:07:54] >> and they're trained to be eager. So that
[00:07:56] means you have to specify more at the
[00:07:59] start. So
[00:08:00] >> yes,
[00:08:01] >> if you
[00:08:04] dumb example if you say change change
[00:08:07] the header of my website to make it more
[00:08:09] colorful.
[00:08:10] >> Yeah.
[00:08:11] >> Say maybe year ago a model would have
[00:08:12] said what color would you prefer? You
[00:08:14] know something like this. But the models
[00:08:16] nowadays say sonnet 4
[00:08:18] >> it would go and says yeah I'm going to
[00:08:20] make this more colorful. Here you go
[00:08:21] it's blue or it's rainbow gradient or
[00:08:23] whatever. So then it cost you tokens and
[00:08:27] ch changed files. So then you have to go
[00:08:29] I actually want it pink or something. So
[00:08:33] you want to avoid this. You want to put
[00:08:34] as much information as possible in that
[00:08:36] original prompt I think and then send it
[00:08:40] off on its way. And
[00:08:41] >> Yep.
[00:08:42] >> Yeah. Yeah. Like it's kind of
[00:08:44] >> the analogy in my mind is like with the
[00:08:46] previous generation of tools, it was
[00:08:48] almost like you had it wasn't even a
[00:08:50] junior engineer. It was like a
[00:08:52] programming student and like you would
[00:08:55] ask them something and they would know
[00:08:56] some stuff but then they would
[00:08:57] immediately ask you,
[00:08:59] >> you know, hey, how do I do this or like
[00:09:01] what do you think of this code? And then
[00:09:02] you'd have to go and review it and
[00:09:04] you're like, okay, no, change this, no,
[00:09:05] change that.
[00:09:07] >> Now, it's more like a like full-time
[00:09:09] engineer of some sort where like you
[00:09:11] don't want to micromanage them. That's
[00:09:12] that's an antiattern because that way
[00:09:14] they're not actually getting to do the
[00:09:16] the work. you want just want to like
[00:09:18] give them a good spec or give them a
[00:09:20] good description of what the feature is,
[00:09:22] enough details that they can go and find
[00:09:24] the context on their own, you know,
[00:09:26] maybe point them at like a few places to
[00:09:28] search or whatnot. Uh, and then check
[00:09:31] back once they're done. Uh, yeah. And
[00:09:34] >> yeah,
[00:09:35] >> I think the other
[00:09:37] um I mean this is has been used to death
[00:09:40] I think but the previous generation of
[00:09:43] assistance is is you know like in a
[00:09:46] movie like you have a little ghost
[00:09:47] appear on your shoulder and you can
[00:09:49] >> it ask you can it's like a mentor or
[00:09:52] whatever and it can give you tips and
[00:09:54] tricks or whatever but it cannot affect
[00:09:55] the real world because it's a ghost or
[00:09:57] something.
[00:09:58] >> Yeah. And with agents, it's much more
[00:10:01] like um, you know, Iron Man's, what is,
[00:10:04] is it Jarvis? Jarvis, I think. Yeah.
[00:10:06] >> Where like it, you know, hey, can you do
[00:10:08] this? And it's connected to all of your
[00:10:10] systems. And basically, it can affect
[00:10:12] the real world. And
[00:10:14] >> it sounds dumb when, you know, obviously
[00:10:17] when you talk about ghosts and Iron Man,
[00:10:18] but [laughter]
[00:10:20] there's there's some there's a big
[00:10:22] difference. I think there's a big big
[00:10:24] difference. And we're only, you know,
[00:10:27] now we're starting to wake up to it.
[00:10:28] What it means to give these things
[00:10:30] tools.
[00:10:30] >> Yeah. Do you do you have a quick example
[00:10:32] that you can show just to
[00:10:34] >> Yeah. Yeah.
[00:10:35] >> concrete.
[00:10:36] >> Yeah. So, let me
[00:10:39] let me move you over here so I can still
[00:10:41] see you and then I'll share my entire
[00:10:44] screen. So, here, let me open.
[00:10:48] We can actually go Let's close this so
[00:10:50] it's not distracting. Um, we can also
[00:10:53] bump the font size, I guess. So, example
[00:10:56] from
[00:10:59] say
[00:11:02] this morning.
[00:11:03] >> Yeah,
[00:11:04] >> I don't know if you've seen this. This
[00:11:05] was fun. So, okay, this is a this is a
[00:11:08] fun example, but basically Eric wrote in
[00:11:10] our Slack that, you know, the first
[00:11:12] three options have the regular cursor
[00:11:13] and the last three have like the Mickey
[00:11:15] Mouse cursor pointer thing, right?
[00:11:17] >> Yeah. And I I think it was like I don't
[00:11:20] know 6 610
[00:11:22] or something in the morning and I was
[00:11:24] like let's try this. A user reported
[00:11:26] this. Can you fix it? Right.
[00:11:27] >> Yeah. Yeah.
[00:11:28] >> And
[00:11:30] >> like all you gave it was the screenshot
[00:11:31] of
[00:11:32] >> the screenshot and this message here
[00:11:33] which is counter to what I've been
[00:11:36] saying, right? You should put more in
[00:11:38] the first problem.
[00:11:39] >> But to be fair, this was a joke. But
[00:11:42] what I want to show is can you fix it?
[00:11:46] And look how eager it is, right? It's
[00:11:48] it's it doesn't say yes, you should
[00:11:50] probably change the CSS class to, you
[00:11:53] know, whatever.
[00:11:54] >> It's like, yep, I'll research this. So,
[00:11:56] here we can get to this a second. It
[00:11:57] used the search sub agent. Looked at
[00:12:01] this, found the issue, changed it, it
[00:12:03] worked. I thought this was wrongly
[00:12:05] formatted. I told it to format the file.
[00:12:07] It was already for me. I was wrong.
[00:12:09] >> That's like a really small thing, but
[00:12:11] you can see
[00:12:13] >> how eager it is. You just, hey, user
[00:12:15] reported this.
[00:12:16] >> It read the screenshot. It found this
[00:12:19] thing and it knew it. My job is it to go
[00:12:22] and help the user accomplish the task
[00:12:24] and I'm I'm going to go and do it. I'm
[00:12:26] going to use another agent to find
[00:12:29] stuff. I'm going to open this file. I'm
[00:12:31] going to uh read this other file. You
[00:12:34] know, this is already mind-blowing,
[00:12:35] right? Like it looks at this file
[00:12:38] >> and then instead of saying show me the
[00:12:40] content of this other file, it knows I
[00:12:42] can open this file. So it finds this
[00:12:44] other checkbox item thing that's
[00:12:46] probably referenced in this one.
[00:12:48] >> Yep.
[00:12:49] >> And then edits it and fixes it and says
[00:12:51] fixed. And
[00:12:53] >> so in the old world like with chat LMS,
[00:12:56] each one of these like tool uses would
[00:12:58] have been probably like a a back and
[00:13:00] forth between human and AI, right? Or
[00:13:04] like and some of this it would probably
[00:13:05] be you manually like checking stuff,
[00:13:08] right?
[00:13:08] >> Yeah. Or the app would include it,
[00:13:09] right? So the app would say like Cody
[00:13:13] cursor wind surf whatever
[00:13:15] >> um [snorts] when I say user reported
[00:13:16] this then you would have to include this
[00:13:19] file because you or some rack or
[00:13:22] whatever like it I don't know if rack
[00:13:24] could do this I don't think it could but
[00:13:26] >> yeah yeah
[00:13:27] >> maybe it could maybe could but basically
[00:13:29] you would have to give it that file
[00:13:31] because it cannot reach outside of its
[00:13:34] box and then it would say oh you need to
[00:13:36] do this and it would reply back with the
[00:13:39] diff and And then you would have here
[00:13:40] somewhere like an apply or accept reject
[00:13:43] button. And maybe the app does it
[00:13:45] automatically. It always accepts and
[00:13:47] only allows you to review stuff. But
[00:13:49] here it truly is the case that the agent
[00:13:53] called a function to edit this file and
[00:13:56] it changed um the where is it cursor
[00:13:59] pointer somewhere somewhere
[00:14:01] >> um and updated it on its own and then
[00:14:04] then it wrote
[00:14:05] >> it's done. And
[00:14:07] >> y
[00:14:08] >> another example from this morning was
[00:14:13] um
[00:14:15] this was at 6:00 a.m. The other one was
[00:14:16] at 9:00 a.m. Okay. So this was
[00:14:18] >> nice.
[00:14:20] >> I was like help me how we start MCP
[00:14:23] servers, right? And
[00:14:25] >> again I put this in the context just to
[00:14:28] seed the context window like hey this is
[00:14:31] what I'm talking about. And then it
[00:14:33] again used the search thing and it found
[00:14:36] this and it and it says like, "Oh, it's
[00:14:39] here. It's here. It's here." And I'm
[00:14:40] like, "Okay, interesting."
[00:14:42] >> And then I was like, "Can you add some
[00:14:43] debug statements, you know, to print
[00:14:45] this?" And then I ran the debugger. Um,
[00:14:48] >> yeah.
[00:14:49] >> And then I think it already, this is
[00:14:52] funny, we'll see this in a second. So,
[00:14:54] it does this. It, you know, uh, uh, uh,
[00:14:58] adds a debug print statements. And then
[00:15:01] I I restarted it after it was done. And
[00:15:04] then I said,
[00:15:06] >> this was 6 a.m. this is not the best
[00:15:08] messages, right? I was like the issue is
[00:15:09] that it looks like the ends [laughter]
[00:15:10] aren't passed along to the MCP server,
[00:15:12] right? To be I don't know why I said to
[00:15:14] be clear,
[00:15:15] >> but then it's like oh the the code does
[00:15:18] this. Um but the fix I added in the
[00:15:21] debug logging actually fixes the bug. So
[00:15:23] what it did up here uh the merged end
[00:15:26] this is already the fix. So
[00:15:29] >> interesting.
[00:15:30] >> Yeah. So we we forgot to merge this.
[00:15:32] >> It didn't realize it. It was like I'm
[00:15:35] going to merge this and log it. These
[00:15:36] are the merged
[00:15:37] >> ends. Yeah.
[00:15:39] >> And then you know I don't know. I think
[00:15:42] does it even say this?
[00:15:43] >> I Yeah, there you go. I noticed there's
[00:15:46] an issue. I was merging, but I need to
[00:15:48] check where that comes from, you know.
[00:15:50] Yeah.
[00:15:50] >> So, let me do this. And it went off and
[00:15:53] did it on its own and then it worked.
[00:15:55] Um,
[00:15:56] >> and with with like minimal intervention
[00:15:59] and steering from you,
[00:16:02] >> I Yeah,
[00:16:04] >> I I think when we're talking
[00:16:06] >> when we're talking about the differences
[00:16:07] between this and the old paradigm, it's
[00:16:09] almost like you have to unlearn the
[00:16:11] habits that you learned with like chat
[00:16:13] LLM based tools because the tendency
[00:16:16] with chat LLMs is like every LM response
[00:16:19] there's like a user a user uh action to
[00:16:22] take either you're like responding to it
[00:16:25] guiding eding it.
[00:16:26] >> Yeah.
[00:16:26] >> Um or or you're doing something manual.
[00:16:29] >> And
[00:16:31] >> uh here it's almost like an anti pattern
[00:16:33] because what I've seen people coming
[00:16:35] from that world do is it's like this
[00:16:38] micromanagy mentality where like you
[00:16:40] want it to do something very precise and
[00:16:42] you you kind of like are annoyed or
[00:16:44] frustrated in the beginning that it's oh
[00:16:46] it's just editing my files like how
[00:16:48] >> how do I know it's how do I know it's uh
[00:16:50] right and and stuff.
[00:16:52] Um
[00:16:53] >> there there was somebody on
[00:16:58] I'll I'll give you another one example
[00:17:00] concrete example. So this is also
[00:17:02] another thing that I fixed. Um
[00:17:05] um if an MCP server failed to start this
[00:17:09] is also again a screenshot. I do love
[00:17:11] the screenshots.
[00:17:12] >> Um
[00:17:14] >> we don't show anything like standard
[00:17:17] error nothing right? So I'm like help me
[00:17:19] make this happen. we need to say why it
[00:17:21] failed and show the standard. So then it
[00:17:24] again like
[00:17:26] you know imagine you were in chat GPT on
[00:17:28] on the website it would say can you give
[00:17:30] me the files so you would paste the
[00:17:31] files and then it would say here's a
[00:17:32] diff apply this and then you would do
[00:17:34] this but what it does here is it tries
[00:17:36] to find it on its own and then I say uh
[00:17:40] this part here this log I don't know
[00:17:42] this kind of sucks blah blah um
[00:17:45] then oh then I cancel it because I was
[00:17:48] looking at the code and I said continue
[00:17:50] to kick it off again
[00:17:52] >> um here it just tries to figure out what
[00:17:55] the thing this class does and you know
[00:17:58] it gave up I think it couldn't find it
[00:18:01] um does this and then it went on its own
[00:18:04] like here's the last message continue it
[00:18:06] looks at this looks at this I need to
[00:18:08] understand this it uses search agent
[00:18:10] looks at this fails does this does this
[00:18:13] >> does this and then it changes it and it
[00:18:16] actually
[00:18:17] >> worked like it works if if now an MCP
[00:18:19] server fails to start we show standard
[00:18:21] error and Um here now I need to update
[00:18:24] the UI right and it goes and here I
[00:18:27] think it I don't know what that was
[00:18:29] couldn't replace it that sometimes
[00:18:31] happens um searches for stuff changes it
[00:18:35] creates a new component even imports
[00:18:37] this
[00:18:39] >> um runs the checks which is specified
[00:18:42] agent MD fix this let me test this we
[00:18:45] don't have any test that's fine blah
[00:18:47] blah blah summary here you go and then I
[00:18:50] said
[00:18:51] >> I just reviewed the code again. Uh,
[00:18:53] which is also something you now have to
[00:18:56] do. Um, and I gave it some more
[00:18:57] information about the interfaces.
[00:19:00] >> Did it? Yeah. And then
[00:19:02] the interesting bit is now I have so it
[00:19:05] it basically added a buffer that keeps
[00:19:07] track of standard error output from each
[00:19:09] MCP server. If it fails, it, you know,
[00:19:11] puts that in the in the error.
[00:19:14] >> And I'm like, I don't know, like we
[00:19:16] should probably only keep track of the
[00:19:18] last 50 lines. And
[00:19:19] >> yeah.
[00:19:21] Everybody listening or view not
[00:19:23] everybody people might not believe but I
[00:19:26] could do this on my own like that's not
[00:19:28] it's not a hard problem I could have
[00:19:29] done this on [laughter] my own but
[00:19:31] instead I'm like can you change this so
[00:19:34] that it only keeps track of say the last
[00:19:37] 50 lines and if it's more it adds this
[00:19:40] to the start so the specificity of this
[00:19:43] is it's nearly pseudo code right one
[00:19:47] level higher it's
[00:19:49] >> a pretty specific instruction
[00:19:50] instruction how somebody should modify
[00:19:52] the code.
[00:19:53] >> Yes. Yes.
[00:19:54] >> And why didn't I do it by my on my own?
[00:19:57] Because
[00:19:58] >> I don't know, man. Like I have a
[00:20:00] tendency to mess this stuff up, you
[00:20:02] know? Like
[00:20:03] >> I'll buy one. Who knows? Like
[00:20:06] >> 100%.
[00:20:08] >> Slice minus 49. I'm like, how does this
[00:20:11] work again? Is it negative? What does
[00:20:12] this do? And
[00:20:13] >> you're down a rabbit hole. Uh it's
[00:20:16] longer than you anticipated.
[00:20:17] >> And then it runs a diagnostic. I mean,
[00:20:19] this is a really dumb example, but um
[00:20:22] yeah, it did it. And and I think this is
[00:20:24] something
[00:20:26] >> um that most people are starting to
[00:20:29] realize with agents,
[00:20:31] you have to know what you want them to
[00:20:33] do. Like you can of course send them off
[00:20:35] on a on a goose hunt,
[00:20:39] >> but the best results you get when you
[00:20:43] have like a concrete thing you want them
[00:20:44] to do. And
[00:20:45] >> yeah,
[00:20:46] >> there was somebody on Twitter who was
[00:20:48] pretty
[00:20:50] reflective and they were saying um I
[00:20:54] write a code by hand because I don't I'm
[00:20:56] not that good at communicating. So he he
[00:20:58] says he has trouble
[00:21:00] >> communicating what he wants. It's easier
[00:21:03] for him to go and do it. And I think
[00:21:06] >> that's already three stages more
[00:21:10] enlightened than most people who who say
[00:21:12] like oh it doesn't [laughter] work for
[00:21:13] me you know. Yeah.
[00:21:15] >> Um,
[00:21:15] >> yeah. I think there's a lot of like
[00:21:17] knee-jerk reactions coming from the chat
[00:21:19] or even the search world where they type
[00:21:21] in like three or four words and expect
[00:21:24] it to read their minds. Whereas,
[00:21:27] >> you know, that that works for search
[00:21:29] because like that's enough there's
[00:21:30] enough like signal embedded in those
[00:21:32] three keywords to locate like search
[00:21:34] results. But for actually like
[00:21:36] articulating what you want to be done
[00:21:38] across a uh you know a non-trivial sized
[00:21:42] codebase uh
[00:21:44] >> you need to be more specific because
[00:21:46] there's otherwise a lot of ways to
[00:21:48] interpret what exactly you mean.
[00:21:50] >> So this is something from yesterday. We
[00:21:53] had two bun build scripts for dev and
[00:21:58] prod. And I was kind of poking around
[00:22:00] and I realized they're pretty much the
[00:22:02] same.
[00:22:03] >> And
[00:22:04] >> there's like an envir that we could use
[00:22:07] instead of having two things in the
[00:22:09] package JSON.
[00:22:10] >> So I'm like, do this. Can't we
[00:22:13] consolidate them? And it's like yes, we
[00:22:15] can do this. And then it's just dumb
[00:22:17] typing and it's updating JSON and now
[00:22:20] you can delete this and blah blah blah.
[00:22:23] And then I said we can also move this
[00:22:25] out.
[00:22:26] >> And again it's all stuff I could have
[00:22:28] done. Um
[00:22:30] >> Right.
[00:22:31] >> But I don't know like there's other this
[00:22:35] is easier I would guess. Yeah. Yeah. You
[00:22:38] know like
[00:22:40] >> I don't know. It's like a It's like a a
[00:22:42] staff engineer. Like you could do all
[00:22:45] the work that a junior engineer does,
[00:22:47] but you know, why why would you? There's
[00:22:49] other there's other stuff that you could
[00:22:51] be doing that's that's
[00:22:52] >> yeah,
[00:22:53] >> you know, better taking advantage of
[00:22:54] your
[00:22:55] >> talent. The the interesting bit too is
[00:22:58] what um the big lesson is everything we
[00:23:02] just looked at is pretty small, right?
[00:23:04] It's it's one commit, whatever. Pretty
[00:23:07] small stuff. And what we've all
[00:23:09] realized, I think, is when you do bigger
[00:23:13] stuff and you just shut your brain off
[00:23:16] and it's not good. Like it won't
[00:23:19] >> it won't end well. It's
[00:23:21] >> please build me this large architectural
[00:23:23] thing where it connects this and
[00:23:25] connects this. Sometimes you get lucky
[00:23:27] like if everything is aligned and
[00:23:29] there's a lot of say um what you want to
[00:23:33] do is additional to the codebase. So
[00:23:35] there's a lot of examples
[00:23:37] >> y
[00:23:38] >> then it can go a long way.
[00:23:40] >> Um but if it's something new, new
[00:23:43] architecture
[00:23:45] >> and you turn your head off, you end up
[00:23:47] after 10 minutes and it says I'm done
[00:23:49] and you're like what did you do? And
[00:23:51] then you don't understand what it what
[00:23:54] even the architecture is. And
[00:23:56] >> so
[00:23:57] >> or it might be broken in some subtle way
[00:23:58] and you're like oh now I can find the
[00:24:00] bug
[00:24:01] >> in in you know thousand lines. really
[00:24:05] nasty to rev you. Like there's mode
[00:24:07] where I do this where
[00:24:09] >> I basically say go and do this and I
[00:24:12] know the chance of success is 5%. But
[00:24:15] it's just
[00:24:16] >> I want to see I I kind of want to just
[00:24:19] explore and try stuff and see what it
[00:24:21] does so I know what not to do.
[00:24:24] >> Um
[00:24:25] >> but yeah, it's it's basically it's a lot
[00:24:27] of small changes. It's a lot of here.
[00:24:29] There you go. Look at this. Uh I I
[00:24:32] changed this. yesterday and I put like
[00:24:35] the home var in the package JSON. I'm
[00:24:37] like, [gasps] is there like some
[00:24:39] escaping in JSON and I didn't know that
[00:24:42] it's easy like this. I didn't know but I
[00:24:44] was like do I need to does this even
[00:24:46] work? Does package JSON even do this?
[00:24:49] >> And then it fixed it for me and then it
[00:24:52] does a bunch of other stuff with like
[00:24:53] envirs and I really don't like writing
[00:24:56] commands in JSON. And what else? like um
[00:25:02] what is this? That's pretty long.
[00:25:05] >> So, there's there's a bunch of things
[00:25:07] like this that it's good for. And I
[00:25:08] think like uh everything we've covered
[00:25:10] up until now is like what I would call
[00:25:12] like agent 101 or maybe like 102 where
[00:25:15] it's like, okay, unlearn the habits that
[00:25:17] you've learned with chat LM based tools
[00:25:21] and try to try to instruct it so that it
[00:25:23] can get as far as it can without your uh
[00:25:27] assistance. Um, and once the so like
[00:25:31] getting past that hurdle I would say is
[00:25:33] like the first thing that people have to
[00:25:34] get past. It's almost like a switch that
[00:25:36] flips in your brain at some point where
[00:25:37] you're like, "Oh, like this is how I use
[00:25:39] it."
[00:25:39] >> Once you get past that point, then
[00:25:42] people start to think like, "Okay, this
[00:25:44] is cool. It just did that thing. I
[00:25:46] didn't basically didn't have to do much.
[00:25:48] How can I get to get it to do like
[00:25:50] something that's like slightly more
[00:25:52] complex?" you know, longer and longer,
[00:25:54] uh, larger and larger features or more
[00:25:56] nuance bug fixes. And I think this is
[00:26:00] where like everyone's mind starts to go.
[00:26:02] And,
[00:26:04] >> um,
[00:26:05] one of the things that one of the
[00:26:07] limitations that we've encountered there
[00:26:09] is just like the size of the context
[00:26:11] window. Um, so can you talk a little bit
[00:26:14] about like the context window and how
[00:26:15] that affects the quality of the agent?
[00:26:17] Uh, and then let's talk a little bit
[00:26:19] about how we're kind of like solving for
[00:26:21] that.
[00:26:22] Yep. So
[00:26:25] absolute basics.
[00:26:27] Um
[00:26:29] these are large language models based on
[00:26:31] a transformer architecture. They are as
[00:26:35] people in a dismissive way say they are
[00:26:38] text completion engines. You know they
[00:26:40] complete text. So
[00:26:42] >> yeah,
[00:26:42] >> that means you send something to this
[00:26:45] large language model and and it will
[00:26:47] come back with a complete like with the
[00:26:50] the rest of the text added and the
[00:26:54] context window is how much of that text
[00:26:59] you can send to them all and how much it
[00:27:01] can then complete. So if you say here's
[00:27:04] the first two chapters of
[00:27:07] >> you know the power broker the book write
[00:27:10] the next whatever sentences it will come
[00:27:13] back with some sentences but if you say
[00:27:15] here's the first 18 chapters that might
[00:27:18] not fit in the context window because
[00:27:20] it's too long.
[00:27:21] >> So it's kind of like the working memory
[00:27:23] of this thing like you you cannot fit
[00:27:25] more in its head at the same time. And
[00:27:30] >> the thing to know is that everything in
[00:27:33] that context window matters in subtle or
[00:27:37] you know major ways. That means it's a
[00:27:40] transformer architecture. So from its
[00:27:43] perspective everything you put in the
[00:27:44] context window is a sequence of tokens a
[00:27:47] sequence of say characters for our
[00:27:49] purposes. And in order to figure out how
[00:27:52] it should complete this text, it's kind
[00:27:55] of multiplying all of the text with the
[00:27:58] rest of the text. It's just multiplying
[00:28:00] a lot of stuff. And that means
[00:28:04] everything that's in the context window
[00:28:05] is has an influence to what it comes
[00:28:08] back with. So that's
[00:28:10] >> the basics.
[00:28:12] >> When we look at this here, we see a user
[00:28:15] message. We see a text a tool used a
[00:28:17] text a tool used tool use text tool used
[00:28:21] you know whatever
[00:28:22] >> under the hood it's the same thing it's
[00:28:26] it's when I I don't know when I write
[00:28:29] what remove that this is the description
[00:28:32] field I don't know how to say that's the
[00:28:34] when I write this and send it back up
[00:28:37] what happens is that everything from
[00:28:39] that point upwards
[00:28:42] including the tool calls including the
[00:28:43] mentioned files including the system
[00:28:45] gets sent to the model. It gets put in
[00:28:48] the context window and it it's basically
[00:28:50] instructed
[00:28:51] how would you complete this conversation
[00:28:53] and then it comes back and and
[00:28:55] apparently it's response is to remove
[00:28:58] the this is the description thing from
[00:29:00] from this text. That's the most likely
[00:29:02] completion and
[00:29:04] >> y
[00:29:06] that also fills up the connection. So
[00:29:08] the longer the conversation gets, we can
[00:29:10] see my scroll bar here and like the
[00:29:12] dots. Um
[00:29:14] >> everything in here is in the context
[00:29:16] window. This conversation here is the
[00:29:18] context window. And you can see down
[00:29:20] here um we used up uh 85k of 168k
[00:29:27] tokens. And yes, for everybody's
[00:29:29] listening, we use sonnet 4 right now its
[00:29:33] context window is 200k tokens
[00:29:36] >> including the output tokens. So if we
[00:29:38] want 32k tokens as output, we have to
[00:29:42] kind of reserve this in the context
[00:29:45] window and say well the input can only
[00:29:47] be 168 because at any point in time you
[00:29:49] want to get 32k tokens back.
[00:29:52] >> So
[00:29:54] the context window is I think the most
[00:29:56] important concept to grasp. Honestly,
[00:29:59] it's not something I think you can hide
[00:30:01] or skip. I I don't know maybe I'm too
[00:30:05] much you know my bias is always like let
[00:30:08] me see what's going on under the hood
[00:30:10] but I I truly think
[00:30:12] >> knowing the context window is important
[00:30:13] thing and
[00:30:15] >> so what you want is
[00:30:17] >> and it's important because like the
[00:30:20] first of all there's like a hard stop at
[00:30:21] 200k right minus the 32k that you
[00:30:23] reserve for the output
[00:30:25] >> so you can't do anything like any tasks
[00:30:27] that like are too long to fit within
[00:30:30] that context window uh there's kind like
[00:30:32] a hard constraint there.
[00:30:34] >> The the other thing that we've noticed
[00:30:35] is that like even as you approach like
[00:30:38] 60 70% of the available context window,
[00:30:41] there's a certain amount of degradation
[00:30:42] that happens in model quality
[00:30:44] >> because I think there's not enough
[00:30:46] training data when the model's trained
[00:30:47] that is that size. And so
[00:30:49] >> yeah,
[00:30:50] >> the rough analogy is it starts to behave
[00:30:51] like more erratically like almost like
[00:30:53] drunkenly the the more and more like
[00:30:56] stuff that that's in that context
[00:30:57] window.
[00:30:58] >> Yeah. And the
[00:31:01] you know we don't ever do this I think
[00:31:04] or most people don't do this anymore but
[00:31:05] it has to be said
[00:31:07] >> um
[00:31:09] >> you you want that context window to be
[00:31:12] focused because you want the agent to be
[00:31:14] focused on one thing. So in this here I
[00:31:17] changed like how something is changed in
[00:31:19] avel UI thing. If I now were to say,
[00:31:23] "Hey, good morning.
[00:31:25] >> Can you write a database migration for
[00:31:27] me?"
[00:31:28] >> That wouldn't be good because in the
[00:31:30] context window there would be now 50%
[00:31:32] that's about a swell component and then
[00:31:34] you change the topic and now it's about
[00:31:36] database migrations. And remember,
[00:31:38] everything gets multiplied with
[00:31:39] everything else. So your conversation
[00:31:41] about um
[00:31:43] >> the database migration is now multiplied
[00:31:46] with swelt stuff and
[00:31:48] >> yeah,
[00:31:49] >> it might not lead to the best results,
[00:31:50] right? like just if you I don't know you
[00:31:54] leave the party and go to the funeral
[00:31:56] and you keep your costume on or
[00:31:57] something it's just it's not it's not
[00:31:59] appropriate you know and the good the
[00:32:02] >> Erica I think she shared this yesterday
[00:32:04] in I don't know if you've she or you was
[00:32:07] it you or Erica the analogy that
[00:32:11] >> um you wouldn't cut your vegetables on
[00:32:14] the same thing on which you just cut
[00:32:16] like chicken breast or something like
[00:32:17] you would use a different surface like
[00:32:19] you don't want that stuff to Clean
[00:32:21] slate.
[00:32:21] >> Yeah.
[00:32:22] >> Yeah. Clean slate. And that's kind of
[00:32:24] what this is about. It's for each
[00:32:27] specific task.
[00:32:30] Make sure that the context window
[00:32:32] contains the information that you think
[00:32:34] the charact the agent should have and
[00:32:36] not
[00:32:38] >> some other stuff, you know. Um,
[00:32:42] >> and again like that means the name of
[00:32:43] the game is preserve or
[00:32:46] >> context engineering they call it as of
[00:32:48] this week I think or last week.
[00:32:49] >> Yeah. Someone coined the the term on on
[00:32:52] Twitter.
[00:32:52] >> Yeah. Yeah. Yeah. Yeah. Yeah. Context
[00:32:54] engineering. Make sure
[00:32:55] >> prompt engineering is dead. Long live
[00:32:57] context engineering.
[00:32:57] >> Long Exactly. It's Yeah, that was it.
[00:33:00] It's not about prompt engineering. It's
[00:33:01] about context engineering. But
[00:33:03] >> yeah,
[00:33:03] >> it's the same thing. But um
[00:33:06] >> so there's there's multiple ways of
[00:33:08] solving for this, right? Like the goal
[00:33:10] is to stretch the context as far as you
[00:33:11] can and to keep it focused. um you know
[00:33:14] there's things like compaction and uh
[00:33:18] summarization and like we we implement
[00:33:20] some of that but the the maybe like
[00:33:22] newest thing that we're working on here
[00:33:25] uh there's a bunch of things that fall
[00:33:26] under the umbrella of like sub agents uh
[00:33:28] and sub agents help preserve the context
[00:33:30] window of the main agent and they also
[00:33:33] solve for this this focus problem that
[00:33:36] that you were talking about. So talk a
[00:33:38] little bit about like sub agents like
[00:33:39] how how do they work in AMP and like
[00:33:41] what what you find them useful for.
[00:33:44] >> So let's start. We had it here, right?
[00:33:47] Was it here? Um there you go. So this is
[00:33:50] the first sub agent we had in AMP. It's
[00:33:55] this one here. It looks pretty innocent,
[00:33:56] but this is called the search codebased
[00:33:59] search agent. And
[00:34:01] >> y
[00:34:02] >> again the definition of an agent is it's
[00:34:04] a to it's an model that has access to
[00:34:07] tools and
[00:34:09] >> it can use those tools to achieve a
[00:34:11] task. So
[00:34:12] >> y as you can see here the main agent
[00:34:14] this is our main context window 16% it's
[00:34:16] not a lot um but it wants to figure out
[00:34:20] where some stuff is. So what it does
[00:34:22] here is it calls another agent another
[00:34:26] model and sends along this instruction.
[00:34:29] And it says find where the MCP servers
[00:34:30] are started and how the NFRs are uh from
[00:34:33] the form I use. Bubble look for this,
[00:34:35] look for that.
[00:34:36] >> Yep.
[00:34:36] >> And this is the result. But if we could
[00:34:39] go back,
[00:34:40] >> we would see that what this agent did,
[00:34:44] >> it it's kind of like the thing that
[00:34:46] we're looking at but contained in this
[00:34:48] smaller window. So what this search
[00:34:50] agent does is it receives this prompt
[00:34:53] and it has I think five, six files. It
[00:34:55] can list file, read file, glob file,
[00:34:58] find file or something. And
[00:34:59] >> if can you zoom in on that actually?
[00:35:01] Like so this is what the main agent is
[00:35:04] telling the search sub agent to do.
[00:35:06] >> Yeah, that top
[00:35:07] >> the main agent says find where the MCP
[00:35:10] servers are started and how the envirs
[00:35:12] are used. And then under the hood, the
[00:35:15] sub agent goes and it it doesn't have
[00:35:18] anything to start with. like it it only
[00:35:20] has what the main agent says to the sub
[00:35:22] agent and it goes and finds stuff by
[00:35:25] again doing the agentic loop thing and
[00:35:27] using tools
[00:35:28] >> and the kicker is that if I could
[00:35:33] >> point here and say what was the size of
[00:35:36] the context window here it wouldn't be
[00:35:40] you know used up a lot more than up here
[00:35:42] because this creates a new context
[00:35:45] window it's a new separate conversation
[00:35:47] and what we see here is only the input
[00:35:50] that that's in our context window and
[00:35:52] the result and the rest is in a
[00:35:54] different thing. So imagine
[00:35:58] imagine you are
[00:36:00] it's the 60s and you work in an office
[00:36:03] that has like an archive or something
[00:36:05] something and you have some interns and
[00:36:07] you're like I need this file like find
[00:36:09] me this file and and you don't know
[00:36:12] whether it's at the front desk whether
[00:36:14] it's still in your office whether it's
[00:36:15] in the archive whether it's in your car
[00:36:17] whatever.
[00:36:18] >> Yeah. and you sent an intern along and
[00:36:20] the intern goes and it's like, "Oh, it's
[00:36:23] not in the office. It's not in the
[00:36:25] archive. I'm sure it's in the car." Goes
[00:36:27] out to the car, goes back up to the
[00:36:28] office because he forgot the car key.
[00:36:31] Gets the car key. Gets down there,
[00:36:33] realizes, "Oh, the car key doesn't work.
[00:36:35] I got to get the car key fixed."
[00:36:36] Whatever. Goes on like a little tangent.
[00:36:38] Yeah.
[00:36:38] >> And you, as the person saying, "Where's
[00:36:41] that file?" You don't have to worry
[00:36:42] about any of this. Like, it doesn't take
[00:36:44] up your working memory. It's just right.
[00:36:46] It's that intern's task and whether they
[00:36:48] get lunch in between or not doesn't even
[00:36:50] matter. [laughter] It's you only have
[00:36:53] send it along, get back. And it's kind
[00:36:55] of the same here like you know that um I
[00:36:59] don't know if that's been disproven, but
[00:37:00] the thing where you can only keep seven
[00:37:02] things in working memory or something,
[00:37:04] >> right? Yeah, I've heard that.
[00:37:06] >> You know, something like this. Yeah.
[00:37:07] >> There's only so many registers in your
[00:37:09] brain.
[00:37:09] >> Exactly. Yeah. Yeah. And and with like
[00:37:12] the context window, it's the same.
[00:37:14] Imagine
[00:37:15] imagine you would have like this search
[00:37:18] it fails somewhere in the middle and you
[00:37:22] doesn't find anything bum bum bum tool
[00:37:24] call like say 15 tool calls these would
[00:37:26] now all be in your context window
[00:37:29] multiplied with everything else. So
[00:37:32] >> this would be the equivalent of like a
[00:37:33] human going down like a rabbit hole and
[00:37:36] then like who knows how long that rabbit
[00:37:37] hole leads and at some point you're like
[00:37:38] what the heck was I even doing in the
[00:37:40] first place.
[00:37:41] >> Exactly. Yeah. You're like,
[00:37:42] >> but now this is like you're asking
[00:37:44] someone else to do it so you can remain
[00:37:45] focused.
[00:37:46] >> Yeah. You the customer says, "Oh, can
[00:37:49] you check this for me?" And you're like,
[00:37:50] "Yeah, sure. I'll do this real quick."
[00:37:51] Then you go to this and it's like, "You
[00:37:53] need to log in. Where's my phone? Oh, my
[00:37:55] phone needs the key here. My key is
[00:37:56] invalid. I need to talk to the security
[00:37:58] team. I need to do this." Blah blah blah
[00:37:59] blah blah. 20 minutes later, what was I
[00:38:01] doing?
[00:38:02] >> And basically with sub agents, you can
[00:38:05] say, "Yes,
[00:38:06] user, let me take care of this for you.
[00:38:09] Send off a sub agent.
[00:38:11] pause your brain and your work memory
[00:38:13] and then the sub agent comes back and
[00:38:14] whatever they they were doing is not in
[00:38:16] your
[00:38:17] >> um
[00:38:18] >> working memory and that that was the
[00:38:20] first sub agent and then we started to
[00:38:24] play around with other stuff and then at
[00:38:27] some point I mean I have examples here
[00:38:30] let me open those um so this is this is
[00:38:35] from Eric um and what he was doing was a
[00:38:39] migration where they don't want to call
[00:38:41] some method anymore, blah blah blah. And
[00:38:44] what we
[00:38:45] >> ended up doing is we added sub agents
[00:38:48] that this is the the first version of
[00:38:50] the new sub aents where
[00:38:54] >> um they could also
[00:38:58] do a lot more than the search sub aents.
[00:39:00] They could also change files. They could
[00:39:03] write files. So that means
[00:39:06] >> basically here this is a big big task
[00:39:08] like this is we're doing a big code
[00:39:10] migration remove the remaining calls. So
[00:39:14] here it searches for this finds 41
[00:39:16] matches
[00:39:17] >> and it needs to remove them all I think
[00:39:20] >> and then it decides um okay I'm going to
[00:39:24] use uh let me start by systematically
[00:39:27] updating the key files. I'll start with
[00:39:28] the focus task and what it does it
[00:39:31] spawns a sub agent. So if you expand
[00:39:33] this, this is the end result. Look at
[00:39:35] how long this is.
[00:39:36] >> Can you zoom in a little bit?
[00:39:38] >> Yeah. Yeah. Sorry. So this is you could
[00:39:41] see this right. This is
[00:39:44] >> a single sub. Look at the tiny scroll
[00:39:46] bar here. So it says update GraphQL
[00:39:49] schema resolver to accept and use gating
[00:39:51] provider. And I think in this case we
[00:39:53] have like a hidden field where it has
[00:39:54] like more information. So the sub aent
[00:39:57] says I'll help you update this.
[00:39:59] >> And then look at what it does. Read
[00:40:00] file. Read file completed. read file and
[00:40:02] it reads it searches and it does this
[00:40:04] and it edits a bunch of files and it
[00:40:06] needs to update this and read files and
[00:40:09] >> y
[00:40:09] >> it goes off on a big big journey and all
[00:40:13] it comes back with is I would say
[00:40:18] this I've updated this blah blah blah
[00:40:21] these are the changes I made and then
[00:40:22] it's I'm done and then it sends this
[00:40:24] back up and look at how early this is in
[00:40:28] the conversation like we're still look
[00:40:29] at this scroll bar here like we're still
[00:40:31] up here. So this for the main agent,
[00:40:33] this basically didn't cost any context
[00:40:35] window.
[00:40:36] >> And I'm sure there were some, you know,
[00:40:38] tool calls that failed in there or
[00:40:40] something that it had to retry and you
[00:40:42] know that that's noise in the context
[00:40:44] window. So
[00:40:45] >> down there there's another one fix the
[00:40:47] user in call side. So here again, look
[00:40:50] at this. Like goes off and fixes a bunch
[00:40:53] of stuff. And the main agent in this
[00:40:56] case, it kind of turned into a
[00:40:59] coordinator, you know, like just the
[00:41:01] thing that dispatches work to other
[00:41:03] agents. So
[00:41:04] >> yeah,
[00:41:04] >> that was the next iteration uh of sub
[00:41:08] agents. And then I think
[00:41:10] >> uh uh uh this is the newest. This was
[00:41:12] three days ago.
[00:41:14] >> So what I did was I kind of poked it,
[00:41:16] right? I
[00:41:18] I'm not sure yet whether we want whether
[00:41:21] this UX will be
[00:41:25] >> here. You're prompting it to use sub
[00:41:26] agents.
[00:41:27] >> Yeah.
[00:41:27] >> Because you've developed sort of an
[00:41:28] intuition for where they'd be helpful
[00:41:30] right
[00:41:31] >> there. Yeah. There's no
[00:41:33] anthropomorphicizing of the agent here.
[00:41:35] There's no can you help me do it's
[00:41:38] >> I know what how you're configured. I
[00:41:40] know that you have access to sub agents.
[00:41:43] Please go and use them. And
[00:41:45] >> so here I wanted to speed up the test
[00:41:46] suite. I gave it a link to like uh we
[00:41:50] test like blah blah blah test
[00:41:51] performance and whatnot. And um and then
[00:41:54] it runs the tests and then I ask it to
[00:41:56] open sub agents. And these sub agents
[00:41:58] now they look a little bit better in VS
[00:42:00] Code. But these are full on agents. This
[00:42:03] is like the main agent just as a sub
[00:42:05] agent to the other one. And each of
[00:42:07] these right
[00:42:08] >> is a separate fullon context window. And
[00:42:12] this is written by the main agent. So
[00:42:14] this test shows performance metric based
[00:42:17] on this your task. This is written by
[00:42:19] the main agent to send off this. And
[00:42:21] then if you scroll through this you can
[00:42:23] see that there's a bunch of stuff
[00:42:24] happening. And again another sub agent
[00:42:27] other instructions bunch of stuff
[00:42:30] happening. Bunch of stuff happening. And
[00:42:32] then
[00:42:33] >> if we come back you can see up again
[00:42:35] like the main thread isn't that long.
[00:42:37] Then it runs the test and says let me do
[00:42:40] this. And then it again sponsor sub
[00:42:41] agent blah blah blah. And
[00:42:44] >> y
[00:42:45] >> I have to admit it says here, oh this is
[00:42:48] so much faster, but at the end of the
[00:42:49] day it mocked out a bunch of stuff it
[00:42:51] shouldn't have mocked out and but it
[00:42:53] didn't cost me any time. I just had this
[00:42:56] run and and the interesting thing to
[00:42:59] mention here too is
[00:43:00] >> these run in parallel. So they can run
[00:43:04] in parallel. So in this case
[00:43:06] >> it was a pretty easy to uh parallelize
[00:43:09] workload like one for each of the
[00:43:11] slowest tests I guess and it spawned
[00:43:14] them
[00:43:14] >> in parallel and then it just goes off
[00:43:16] and does it. Um so that's that's the
[00:43:19] current iteration of sub agents and they
[00:43:21] have full access to tools full access to
[00:43:23] MCP servers. Um, there's still,
[00:43:28] you know, stuff to figure out like
[00:43:30] what's the best UX, when do you want to
[00:43:31] use them? Yeah. You know, h should you
[00:43:34] be able to as a user go in and send a
[00:43:37] message to a sub agent and kind of poke
[00:43:39] it while the other agent waits for the
[00:43:42] reply or not?
[00:43:43] >> Y
[00:43:44] >> um this is another example.
[00:43:47] Um find all the tool definitions that we
[00:43:50] have in the repository. Make sure they
[00:43:52] each have a storybook story because I
[00:43:54] noticed that some of them don't. And I
[00:43:56] think it used the search agent again. It
[00:43:58] does this. Let me check this. It says
[00:44:01] like blah blah blah. And I think
[00:44:04] >> Question for you. Um I I think like the
[00:44:06] search agent works pretty well in that
[00:44:08] it's like invoked automatically whenever
[00:44:09] it's used with the the more like
[00:44:11] generics sub agent tool. Do do you have
[00:44:14] like an intuition for when you like
[00:44:17] prompt it to use them versus not at the
[00:44:21] moment? Even even like a prototypical
[00:44:23] intuition.
[00:44:25] >> Yeah, my intuition is kind of are there
[00:44:28] self-contained tasks that that don't
[00:44:32] that are
[00:44:35] pretty simple to do, you know? Yeah.
[00:44:37] Becau because you cannot course correct
[00:44:39] them right now. Um
[00:44:42] >> Yep.
[00:44:43] It's I'm I'm still exploring them. It's
[00:44:46] it's a weird the codebase search agent.
[00:44:49] I think that's a natural thing.
[00:44:52] >> Yeah.
[00:44:53] >> Because it's a tool that somebody
[00:44:54] reaches for. I need to find something.
[00:44:56] Let me use the tool to find stuff.
[00:44:58] >> But with sub agents, it's like,
[00:45:00] >> hey, you got to interns. Like, let's
[00:45:03] make use of the interns. Don't do this
[00:45:04] on your own. And
[00:45:06] >> we could we could dial it up in the
[00:45:08] system prompt and say you should always
[00:45:10] use sub agents for this,
[00:45:11] >> but
[00:45:13] >> it's also like a UX thing of do you want
[00:45:15] to hide a lot of stuff in the sub agent
[00:45:17] or do you want to
[00:45:19] >> right
[00:45:19] >> you know like there's a there's a
[00:45:21] >> sometimes it's good to expose the
[00:45:23] context there
[00:45:24] >> like in my case that that I showed here
[00:45:27] where was it in the
[00:45:29] um where is VS code sorry here this um
[00:45:34] this one here Right? Change this to only
[00:45:36] lock the last 50 lines.
[00:45:38] >> It shouldn't use a sub agent for this
[00:45:40] because a sub agent has some overhead.
[00:45:42] It's another inference call. It's
[00:45:43] another system prompt that needs to be
[00:45:45] cached and stored.
[00:45:46] >> I don't want it to always use a sub
[00:45:48] agent. So
[00:45:50] >> in this case, you know, turned it off or
[00:45:53] or doesn't even don't even prompt in
[00:45:55] this case here where it has multiple
[00:45:57] files. It should update and it's the
[00:45:59] same change in every file.
[00:46:00] >> You stop sharing your screen.
[00:46:02] >> Oh, are you sorry?
[00:46:03] >> Oh, yeah. Yeah, I was sorry. Entire
[00:46:06] screen.
[00:46:08] >> Yeah, I was saying yeah, I hit the
[00:46:10] button that's right over the other
[00:46:11] button.
[00:46:12] >> Yeah.
[00:46:12] >> Um I was saying in this case here with
[00:46:15] the 50 lines, I don't want it to use a
[00:46:17] sub agent. That's a pretty dumb change.
[00:46:18] I don't need
[00:46:20] >> sub agent. And
[00:46:22] >> here in Chrome, uh in Chrome, in this
[00:46:24] thread where it updated three files and
[00:46:26] had to make the same change in all three
[00:46:28] files with slight variations, I was
[00:46:30] like, you could use sub agents for this.
[00:46:32] And then it's like, "Yep, let me do
[00:46:33] this." And it used like sub agents and
[00:46:35] then each sub agent it says like,
[00:46:37] "Create this, do this, update this."
[00:46:40] >> Um,
[00:46:41] >> okay.
[00:46:41] >> Yeah,
[00:46:42] >> we're almost out of time.
[00:46:43] >> So before we go, I want to touch upon
[00:46:46] like the final thing um which is uh
[00:46:49] you've implemented a like new sub agent
[00:46:52] that's a separate tool uh that has
[00:46:56] >> it makes use of like other models as
[00:46:59] kind of like the the last task. So like
[00:47:01] talk about what that tool is,
[00:47:03] >> what it's called and and why. What was
[00:47:05] the motivation behind?
[00:47:07] >> Yeah.
[00:47:07] >> Okay. So let's start with the
[00:47:09] motivation. Um our main [clears throat]
[00:47:11] tool right now for agentic coding is
[00:47:13] Sonnet 4. It's pretty good at this. It's
[00:47:15] a aentic model. It knows how to use
[00:47:17] tools. It's in our testing for example,
[00:47:20] we found it's much more agentic, meaning
[00:47:23] a lot more eager to use tools than
[00:47:25] Gemini 2.5.
[00:47:26] >> Yes. Um, but there are other smarter
[00:47:30] models, meaning models that find more
[00:47:33] bugs or come up with clever, you know,
[00:47:36] analysis that's clever than the other
[00:47:38] thing or better code review and spots
[00:47:40] more stuff. And I want to use those
[00:47:42] modes and I have to use or 03 which I
[00:47:47] like uh open AAI's 03. I have to use the
[00:47:51] chat GPT app which I don't like because
[00:47:53] I have to copy and paste stuff over.
[00:47:56] >> Yeah. So what I want is I want to use
[00:48:00] that you know intelligence of 03 inside
[00:48:04] in the conversation with the agent. So I
[00:48:07] want to say use 03 to debug something
[00:48:09] and then I want sonnet 4 to go and fix
[00:48:12] it.
[00:48:12] >> Yeah.
[00:48:13] >> And what I've implemented is let me see
[00:48:16] if I I got I got examples here. So there
[00:48:21] you go. This is from 32 hours ago.
[00:48:24] Um,
[00:48:27] I had this problem with like a sik an
[00:48:30] interrupt signal handler and can we do
[00:48:33] this but keep the original handler
[00:48:35] because this overrode the handler
[00:48:37] >> and then it came back with this. I'm
[00:48:39] like is this really how it should be and
[00:48:41] then I saidun
[00:48:45] where is it here? Ask the oracle whether
[00:48:48] there isn't a solution. So what's
[00:48:50] happening here is I added 03 as another
[00:48:54] sub agent and called it Oracle and kind
[00:48:57] of prompted it as a thing that's good
[00:48:59] for reviewing for planning for debugging
[00:49:01] all of these like higher level things
[00:49:03] not for
[00:49:04] >> editing a test file or running terminal
[00:49:06] commands like just higher level stuff
[00:49:08] but I gave it tools and the ability to
[00:49:11] look and read files autonomously so
[00:49:15] >> this is a tool that the main agent can
[00:49:17] use and again I don't promise promp the
[00:49:19] main agent to constantly use this but I
[00:49:25] have it available and I can ask it to
[00:49:27] use it. So I can basically reach through
[00:49:29] the agent and in this case
[00:49:33] it asks the oracle to review stuff and
[00:49:36] the oracle I think yeah you can see it
[00:49:38] here. So this is what's passed to the
[00:49:40] oracle. It's a task and a context and
[00:49:43] files relevant files and this is written
[00:49:45] by the main agent. So the main agent
[00:49:47] says review this handler context users
[00:49:50] concerned look at these files and then
[00:49:53] 03 goes off and looks at it and it came
[00:49:55] back with this uh prepend listener which
[00:49:58] we didn't have I think
[00:50:00] >> it had like once which wasn't a thing I
[00:50:02] think so it has prepens uh listener so
[00:50:04] it's smarter it knows more and you can
[00:50:07] see here
[00:50:08] >> this is not like a nice diff or
[00:50:10] something but everything we see here in
[00:50:12] this text box is returned to the main
[00:50:14] agent so then
[00:50:15] >> the main agent says, "Oh, the Oracle
[00:50:17] suggests a much better approach. Let's
[00:50:19] use this." And then it goes and makes
[00:50:20] this edit and implements this better
[00:50:22] solution and then it fixes the linting
[00:50:24] issue and blah blah blah. And um that's
[00:50:28] nice. Like it's it's
[00:50:30] it requires some prompting and of course
[00:50:33] it would be nice if whenever the agent
[00:50:36] knows that it doesn't know enough or
[00:50:37] it's not smart enough, it reaches for
[00:50:39] the oracle and maybe we'll get there.
[00:50:41] But I really like just prompting it
[00:50:43] here. I ask like
[00:50:46] you know I think you've also bumped into
[00:50:48] this like sometimes the models are eager
[00:50:49] to suggest stuff that they think is good
[00:50:52] with like framework stuff like spelled
[00:50:55] or effect stuff and I'm like I kind of
[00:50:57] know this is a weak spot. So in this
[00:50:59] case I'm like
[00:51:00] >> okay ask the oracle why I should do
[00:51:02] this. So instead of going to 03, pasting
[00:51:05] a bunch of files in and saying, "Please
[00:51:07] come up with a plan for this," I now
[00:51:09] write this in one thing and then I
[00:51:10] automatically have the answer
[00:51:12] transferred back to the main agent and
[00:51:14] then it goes off
[00:51:15] >> and it fixes it and asks it again and
[00:51:17] then it makes the change. Y
[00:51:19] >> and it's nice. I only have one text box,
[00:51:21] only one conversation.
[00:51:23] >> Yep. And and I think like 03 is
[00:51:25] especially good at this sort of like
[00:51:27] nuanced reasoning uh type type of thing.
[00:51:31] And it's interesting like I think you're
[00:51:33] starting to see like model providers run
[00:51:36] in divergent directions like no
[00:51:39] everyone's no longer trying to just like
[00:51:41] copycat uh chatbt and and find the best
[00:51:44] chat lm. There's now like
[00:51:46] >> different patterns of reasoning and
[00:51:49] thought that they're optimizing for just
[00:51:51] because you know they they have
[00:51:52] different users of their APIs and
[00:51:54] they're building different products. Um,
[00:51:56] >> yeah.
[00:51:57] >> And so I think, you know, we'll probably
[00:51:59] have more to say about this in uh
[00:52:02] probably very soon, maybe like a future
[00:52:04] edition uh of this kind of like
[00:52:06] education series. But uh already it's
[00:52:09] it's already very like exciting I think
[00:52:11] to see the the power of combining
[00:52:12] different models together.
[00:52:14] >> Yeah. The cool thing is that we are not
[00:52:16] one of the foundational model companies.
[00:52:19] So we can pick and choose, right? And in
[00:52:22] this case
[00:52:23] >> we can pick and choose Gemini 2.5 and
[00:52:26] anthropic whereas you know for coding or
[00:52:29] whatever whereas um
[00:52:32] >> Anthropic cannot do this like they won't
[00:52:33] offer access to Gemini in their include
[00:52:35] code that doesn't make sense right
[00:52:37] >> and the other companies I think what
[00:52:41] they still rely on is the model selector
[00:52:45] where basically for a given conversation
[00:52:47] you switch the model and say now I'm
[00:52:49] talking to Gemini now I'm talking to 03
[00:52:50] or whatever whatever. But I think
[00:52:53] >> what we're starting to see is the need
[00:52:56] for people to start multiple threads and
[00:53:00] then combine them and merge information
[00:53:02] and knowledge. And with like sub agents,
[00:53:04] you can have this. You can start 03,
[00:53:06] give me an analysis, and then the coder
[00:53:08] goes and implements it. And
[00:53:10] >> others flip it around. The smart model
[00:53:12] plans and sends off the implementers.
[00:53:15] And I don't know, for us right now, I
[00:53:17] think having the implement as the main
[00:53:18] agent is still it's still nice. It's the
[00:53:20] power tool thing. The power tool.
[00:53:21] >> Oh, yeah. For sure. For sure.
[00:53:24] >> Um, all right. Cool. We're basically at
[00:53:25] time. So, thank you so much for for
[00:53:27] taking the time to explain uh some of
[00:53:29] the new things that are shipping as well
[00:53:30] as some of the strategies that you've
[00:53:32] acquired. Um, for those listening, uh,
[00:53:34] if you like this, please reach out and
[00:53:35] let us know. Um, we're thinking about
[00:53:37] doing more of these just because there's
[00:53:38] a lot of different tips and tricks and
[00:53:40] and things that people have discovered
[00:53:41] and we just want to make that uh,
[00:53:44] accessible to everyone out there that's
[00:53:46] uh, trying to learn how to do agentic
[00:53:48] coding.
[00:53:49] Yeah. Thank you.
[00:53:50] >> All right. Take care. See you.
[00:53:52] >> All right. Bye-bye.
