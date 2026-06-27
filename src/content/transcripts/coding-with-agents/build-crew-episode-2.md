---
title: "Navigating the AI Agent Landscape"
resourceId: 3
summarySlug: "coding-with-agents/build-crew-episode-2"
sourceUrl: "https://www.youtube.com/watch?v=VkV4p-eDPmM"
videoId: "VkV4p-eDPmM"
capturedAt: "2026-06-27T15:01:57.353Z"
series: "build-crew"
episode: 2
channel: "Sourcegraph"
language: "en"
kind: "auto-generated"
durationSeconds: 3590
---

## Transcript

[00:00:00] Welcome everybody to Build Crew episode
[00:00:03] number two. U I'm here with some amazing
[00:00:06] guests uh and including a build crew
[00:00:09] guest which is kind of fun. So um we'll
[00:00:11] wait a couple minutes to let everybody
[00:00:13] stream in live. Um but uh we're joining
[00:00:16] from around the world. Um while we wait
[00:00:19] for some guests to come in, I'll
[00:00:21] introduce our amazing speakers in a
[00:00:23] second, but hopefully you're here uh
[00:00:25] because you're interested in Build Crew.
[00:00:27] It's our community for builders who are
[00:00:29] using agents. We want to equip you to be
[00:00:32] better, stronger, faster, uh to build
[00:00:34] more with agents. And we're just going
[00:00:36] to share a ton of tips and tricks. Um,
[00:00:38] and ideally, you get out of here, uh,
[00:00:40] being an even better developer. Uh,
[00:00:43] whether you use AMP or cursor or cocex
[00:00:46] or whatever you use, you're going to be
[00:00:48] a better developer with agents by the
[00:00:49] time you get out of here. Um, if you
[00:00:52] want to join our community though, it's
[00:00:53] free. Just head to buildcrew.team.
[00:00:56] Uh we also throw 100 bucks of credit
[00:00:58] into your account. So um that's always
[00:01:00] fun. So let's get rocking. Um we've got
[00:01:04] some friends from around the world. Uh
[00:01:06] we'll start with Torston calling in from
[00:01:08] Germany. Torsten, how you doing? Tell
[00:01:10] everybody a little bit about yourself.
[00:01:11] >> Hello everybody. I'm Torsten live from
[00:01:14] Germany here. Um one of the co-creators
[00:01:16] of AMP, still an engineer on the AMP
[00:01:19] team too. And yeah, second time here.
[00:01:22] >> Love it.
[00:01:23] >> So fun fact about you. Um, you also are
[00:01:26] a musician. So, why don't you tell
[00:01:28] everybody just a little bit about that?
[00:01:30] >> Well, I was, you know, like I'm not I'm
[00:01:33] not anymore, but I at, you know, certain
[00:01:35] point in my life, I really did try to
[00:01:37] make it as a guitar player, but, you
[00:01:39] know, the guitar is in the background,
[00:01:40] but it's it's Yeah, I'm
[00:01:43] other hobbies have shown up in the last
[00:01:45] few years.
[00:01:46] >> Plus, you're a parent now, and that just
[00:01:48] takes all of your time. So, but um but I
[00:01:50] would say once you're a musician, you're
[00:01:51] always a musician. At least in my heart.
[00:01:53] So,
[00:01:54] >> that's true.
[00:01:54] >> It's good to have you here. Um, next up
[00:01:56] we've got Nikolai, who I call Nico
[00:01:58] because that's more fun. Um, Nico, why
[00:02:01] don't you say
[00:02:04] hi and introduce yourself real quick?
[00:02:06] >> Hey, I'm Nico. I have never been a
[00:02:08] musician. I'm also an engineer on the
[00:02:10] amp team and I'm also like Torson. I'm
[00:02:13] coming in from Germany. Um, the better
[00:02:16] part of Germany, of course, from Munich.
[00:02:18] >> Don't start that.
[00:02:20] With Thor's background, the only thing I
[00:02:22] was always wondering is like how many
[00:02:24] times he kicked over the stack of books
[00:02:26] he has.
[00:02:28] >> Maybe never. So, um well,
[00:02:30] >> no, never.
[00:02:31] >> Nico,
[00:02:31] >> it's pretty stable.
[00:02:32] >> It's pretty stable. Um it's good to have
[00:02:35] you here as well. So, as we said, Torson
[00:02:37] was one of the original creators and uh
[00:02:40] of AMP itself and is um our our uh kind
[00:02:44] leader, we would say internally. Um I
[00:02:47] won't share your internal term but um so
[00:02:50] but Nico tell everybody kind of what you
[00:02:51] work on in AMP uh dayto-day.
[00:02:54] >> Yeah lots of things I'm mostly in the
[00:02:56] core and doing model tuning a lot. So
[00:02:58] model tuning basically means when a new
[00:03:00] model pops up and we get access to it I
[00:03:03] try to work make it work or not make it
[00:03:05] work within AMP and basically decide
[00:03:08] okay is the model worth it? Could it
[00:03:10] become the primary agent or could we
[00:03:12] build any interesting custom sub agents
[00:03:15] like the Oracle Torson build with the
[00:03:17] new models that are coming out?
[00:03:19] >> Exciting. Cool. Yeah, it's fun to
[00:03:20] collaborate with you.
[00:03:22] >> We should we should say that Nico
[00:03:24] actually has a legit background, right?
[00:03:25] Like you your background is actually
[00:03:28] machine learning AI, right?
[00:03:31] >> Yeah, he knows stuff. Yeah,
[00:03:32] >> my my my background is in reinforcement
[00:03:35] learning mostly and it started early in
[00:03:39] LM. So I got lucky and started in 2019
[00:03:42] with a few nice Microsoft models and
[00:03:45] then continued on with GPD3 and started
[00:03:48] fine-tuning for a bunch of different
[00:03:50] companies in Germany.
[00:03:51] >> Yep. So you actually understand uh
[00:03:53] things like matrix multiplication. I'm
[00:03:55] I'm proud of you. Um good to have you
[00:03:57] here. So uh and finally we have an
[00:04:00] amazing build crew here, Tim. Um who has
[00:04:03] a awesome last name. Um so Tim, really
[00:04:06] good to have you here. Um, please
[00:04:08] introduce yourself.
[00:04:10] >> Yeah. Um, I'm Tim. I'm first and
[00:04:12] foremost a build crew member. Um, here
[00:04:15] to learn and having a lot of fun just
[00:04:17] being a part of this community. So, uh,
[00:04:20] I don't come from a technical
[00:04:21] background. I've been a product manager
[00:04:23] for a couple of years. So, I've been
[00:04:25] code adjacent and working alongside
[00:04:27] engineers for a really long time. Um,
[00:04:30] I've had a lot of in-depth conversations
[00:04:33] on APIs and bugs and, you know, going to
[00:04:36] market and, you know, building features
[00:04:38] that, uh, our users would want. Um, but
[00:04:41] I've never done it myself. So, you know,
[00:04:44] vibe coding and contextual prompt
[00:04:47] engineering has really opened up a whole
[00:04:49] new world for me and I am loving it.
[00:04:51] Like, I I wake up at 4 in the morning
[00:04:53] thinking about this. I'm up late at
[00:04:55] night thinking about this. So, um, I
[00:04:57] just I I'm I'm so in and it's so much
[00:05:01] fun. And I say that in a previous
[00:05:04] career, I used to make surf movies and
[00:05:06] travel around the world to tropical
[00:05:08] locations. Uh, and I think this is more
[00:05:10] fun. So, I don't know.
[00:05:13] >> I'm I'm impressed by that. And uh I feel
[00:05:16] like you've I guess you've AB tested
[00:05:18] your life and you've done what we all
[00:05:20] wish we would have done.
[00:05:22] >> Exactly.
[00:05:23] >> This is more fun. So, but it it it feels
[00:05:25] like you put on the Infinity Gauntlet,
[00:05:27] doesn't it? Like when you use an agent,
[00:05:29] whether it's, you know, AMP or whatever,
[00:05:30] it gives you this bonkers power. I guess
[00:05:33] that's maybe what you like.
[00:05:35] >> I mean, yeah, like the feeling like
[00:05:37] it's, you know, I have an idea. I'm
[00:05:39] passionate about something. I want to go
[00:05:40] build it and now I can. And, you know,
[00:05:44] very quickly, it's always kind of funny,
[00:05:46] you know, like when you're when you're
[00:05:48] talking to an agent, it's like, you
[00:05:49] know, this this will take six weeks and
[00:05:51] like 30 minutes later it's there, right?
[00:05:52] It's real. It's tangible. So, you can
[00:05:55] feel it. And so,
[00:05:56] >> for someone like me that um you know, it
[00:05:59] was always like not inaccessible, but uh
[00:06:03] you know, I had to you know, lean on
[00:06:04] others to to create something to build
[00:06:07] something. And now I don't like it's
[00:06:09] just me and my laptop. So, it's it's an
[00:06:13] amazing feeling. Yeah,
[00:06:14] >> absolutely. Um we're seeing some fans uh
[00:06:16] start to join in and comment. Um so,
[00:06:20] please, if you're watching this, throw a
[00:06:21] comment in. Tell us where you're calling
[00:06:23] in from number one. Um, and any comments
[00:06:26] you have or questions, uh, tell us what
[00:06:27] you're building and we'll call out some
[00:06:29] of those, uh, comments on screen. I see
[00:06:32] B, uh, Bruno's joined us, and he says,
[00:06:34] >> Bruno is here.
[00:06:35] >> Hey, Bruno. Good to see you. What a
[00:06:36] team. He said, I couldn't believe it
[00:06:37] when I heard you had joined Source
[00:06:38] Graph. Uh, I'm a huge fan of yours.
[00:06:41] Appreciate you being here, Bruno. Um,
[00:06:42] we're going to keep sharing knowledge
[00:06:44] and try to make you better and better.
[00:06:46] So, thanks for stopping by. Um, so we've
[00:06:48] got a
[00:06:49] >> Why, Ryan? Do I need to create an
[00:06:51] anonymous account to ask Tim questions
[00:06:53] or can I submit a
[00:06:54] >> you I I think you could do both or you
[00:06:56] could but it' probably be more natural
[00:06:59] for you just to ask them.
[00:07:01] >> Okay. Can I one quick question that I'm
[00:07:03] really curious about. Okay. as a ex well
[00:07:06] like I want to ask about the surfing
[00:07:08] tool but the as a ex or still product
[00:07:12] manager I assume how do you think like
[00:07:15] aente coding is going to change the PM
[00:07:18] engineering relationship or even the
[00:07:20] role definitions
[00:07:22] >> yeah it's changing a lot um because as
[00:07:26] as a I am still a product manager you
[00:07:28] know I do have a day job um and I I I
[00:07:32] think that you can just do a lot more
[00:07:34] now So, in my day job, I'm not
[00:07:36] volunteering to write code yet. I'm I'm
[00:07:38] still hands off there, but I think what
[00:07:42] it allows product managers to do is, you
[00:07:44] know, I can quickly prototype something.
[00:07:46] Um, and I can do it very fast. So, um,
[00:07:50] I'm also not a designer, but I know my
[00:07:52] way around Figma pretty well, and, you
[00:07:53] know, I'm I'm dangerous enough to to to
[00:07:56] do something there. Um, but but that's
[00:08:00] still a slower process, right? like just
[00:08:02] you know spin up um spin up a prototype
[00:08:05] really quickly and then it would help me
[00:08:08] you know author more thorough
[00:08:10] requirements um you know figure out like
[00:08:13] like what is this product that we're
[00:08:15] trying to build. let's shape it a little
[00:08:16] bit and you can do that before bringing
[00:08:19] it to the engineering team to get their
[00:08:22] feedback, input and and execution
[00:08:24] because still you know human time is is
[00:08:29] still the most valuable resource right
[00:08:31] and uh especially with with startups
[00:08:33] which is kind of my my cup of tea um you
[00:08:36] have a limited amount of time to go and
[00:08:38] build something and improve product
[00:08:40] market fit and get users or customers.
[00:08:43] So, uh, speed to execution is huge. And
[00:08:47] >> amen.
[00:08:48] >> You know, this this just lets you just
[00:08:49] move faster and and figure it out and
[00:08:51] make mistakes that you're going to make
[00:08:53] anyways. That's okay. You learn from
[00:08:55] them.
[00:08:55] >> Yeah.
[00:08:56] >> You just fail forward.
[00:08:58] >> I love that. Um Torson I know you were
[00:09:00] talking in your um interview um uh on
[00:09:04] Laten Space about the triangle and how
[00:09:06] you know dev product designer uh product
[00:09:09] manager designer is like quickly
[00:09:12] becoming a blob. Um so yeah
[00:09:15] >> yeah um it is pretty wild like I'm
[00:09:17] seeing as like a a former CEO founder
[00:09:19] like I can do this whole stack and I'm
[00:09:21] like what this is insane. Okay um so
[00:09:25] today we've got a packed agenda really
[00:09:27] excited to get into it. Um, want to call
[00:09:28] out some more friends calling in. Uh,
[00:09:30] Justine says, "What is up, gentlemen?
[00:09:33] Calling in from Singapore at midnight.
[00:09:35] Love it. Thanks for tuning in." Uh, Raj
[00:09:38] is excited about Bill Cruz. Some extra
[00:09:40] rockets. Uh, and we've got Ben calling
[00:09:43] in from Austin. So, good to see you all.
[00:09:46] Please keep telling us where you're
[00:09:47] calling in from. Post your comments, uh,
[00:09:50] post your questions, and we'll tackle
[00:09:51] them live. Um, so we've got a couple
[00:09:54] exciting things on the agenda. So,
[00:09:55] Torstston is going to share first. um
[00:09:57] one of his tips for coding better with
[00:09:59] agents. Uh then we're going to talk to
[00:10:01] Tim a little bit and ask him, you know,
[00:10:03] what is he building? What is he
[00:10:05] learning? Um how's it going? And then
[00:10:07] we're going to go to Nico uh with a tip
[00:10:10] that he's going to share. Um and then
[00:10:12] we're going to make sure we answer all
[00:10:14] your questions. Um and uh want to say hi
[00:10:16] to Brennan who's calling in from
[00:10:18] Toronto. Good to have you here, Brennan.
[00:10:20] Oh. Um, let's go to Torston sharing his,
[00:10:25] uh, amazing tip or anti-tip. Over to
[00:10:29] you.
[00:10:30] >> Yeah, it's a not amazing tip. It's a
[00:10:32] boring tip. So, what we're looking at
[00:10:34] here is this was last week. I was
[00:10:38] working on
[00:10:40] the CLI VS Code integration. So, we
[00:10:42] actually launched this today, but this
[00:10:44] wasn't meant to be like a look at us,
[00:10:46] you know, multi- channelannel marketing
[00:10:48] announcements here. But basically, the
[00:10:51] the AMP CLI can now connect to VS Code
[00:10:55] and it can see the open files that you
[00:10:57] have open in VS Code um or the current
[00:10:59] text selection. Problem was there was a
[00:11:02] little bug or a missing feature that the
[00:11:05] first time you would connect the CLI to
[00:11:07] VS Code, it didn't know about your open
[00:11:10] files. you had to switch the tabs like
[00:11:13] you know like everybody who's ever
[00:11:14] programmed or whatever knows something
[00:11:17] like this. So what I want to show here
[00:11:20] is that before I sat down to write this
[00:11:24] prompt I basically already knew what the
[00:11:27] issue is and how I would fix it which is
[00:11:31] oh when the user first connects or the
[00:11:33] client connects we send the list of open
[00:11:35] files down to the CLI.
[00:11:37] I'm also confident enough to say that I
[00:11:40] think I could have written this on my
[00:11:41] own but I didn't and basically just
[00:11:44] instructed that look at this um look at
[00:11:47] this file look at how it's used by this
[00:11:50] and here's the problem please do this
[00:11:52] and this is not the most sophisticated
[00:11:55] prompt of all time but the point there
[00:11:59] you go I
[00:12:00] >> mean let's do let's do a slow reveal
[00:12:02] here I didn't know this was in there but
[00:12:04] basically
[00:12:06] basically it did this it send the
[00:12:07] currently visible files. Sweet. Right?
[00:12:10] But then blah blah blah. And then I said
[00:12:12] it should send everything right. The
[00:12:13] visible files, the selection. Again, I
[00:12:15] knew what the issue was. I knew that
[00:12:17] this wasn't a complete fix. I knew it
[00:12:18] had to do more. And then of course it
[00:12:21] says you're absolutely right.
[00:12:23] >> Right. You're absolutely right. Um
[00:12:26] >> and then they implemented it and I then
[00:12:29] tested it and manually tested it. I
[00:12:32] actually went through the code again and
[00:12:33] I think I even removed a bunch of stuff.
[00:12:37] um like well actually I'm not sure I
[00:12:39] don't think that was this one but the
[00:12:41] point I'm trying to make with this tip
[00:12:42] is that
[00:12:45] these conversations or threads or agent
[00:12:47] invocations or whatever you want to call
[00:12:49] it they can be super small like they can
[00:12:51] be like hey type out these four
[00:12:53] functions for me and I I would still
[00:12:55] argue that you still get a speed up
[00:12:57] because in this particular case as I
[00:13:01] said like I can do a lot of you know
[00:13:04] stuff I could write this on my own But
[00:13:06] then it's like, wait a second, VS Code,
[00:13:08] how do I get the active editor again?
[00:13:10] Then okay, what's the how do I get the
[00:13:12] Yuri, you know, like yes, AMP tab could
[00:13:15] have helped with this. Um, how do I get
[00:13:17] the selection content? Like this is all
[00:13:19] stuff where previously I would Google
[00:13:20] and look up APIs and whatnot.
[00:13:22] >> And here it's just I don't know like
[00:13:24] it's just it saves me the typing. And
[00:13:28] >> my point is don't always go for
[00:13:32] big long features or big things. You can
[00:13:34] use these agents to just type out some
[00:13:36] code for you that you actually would
[00:13:38] know how to write and you will still get
[00:13:40] a speed up and it makes it easier to rev
[00:13:42] you. So
[00:13:43] >> when in doubt, keep conversation small.
[00:13:45] That's that's my tip.
[00:13:46] >> Small little task. Let AMP crank it out.
[00:13:49] Um
[00:13:49] >> can I also ask a question?
[00:13:51] >> No, Nico, you can't. Um yeah. Okay, this
[00:13:54] time go ahead.
[00:13:56] >> I I'm curious about Torson because it's
[00:13:58] from you as well like as a I think you
[00:14:00] still use Neoim a bit again. like when
[00:14:03] do you actually grab Neoim? When do you
[00:14:06] use refactoring tools? Because like what
[00:14:08] I often catch myself, I'm sometimes just
[00:14:10] too lazy to use them nowadays. So I just
[00:14:13] tell the agent to do like a simple
[00:14:16] rename.
[00:14:17] >> Yeah, I think so. I mostly use VS Code
[00:14:22] nowadays because we use TypeScript as
[00:14:24] you've seen. And don't ask me about how
[00:14:27] to set up the formatter and the eslint
[00:14:29] and the whatever you have and fixing the
[00:14:32] imports and VS code. I don't type that
[00:14:35] much code by hand anymore. So what I do
[00:14:37] is easy to do in VS Code. And yes, like
[00:14:41] sometimes
[00:14:43] like I don't know if I have to extract
[00:14:45] functions or something then I might ask
[00:14:48] agent but yeah like it's gotten less and
[00:14:50] less. It's and I you could argue that
[00:14:54] okay us as working on the empty we don't
[00:14:56] have to pay for these tokens. If I had
[00:14:58] to pay for the token to rename the
[00:15:00] tokens required to rename a function
[00:15:02] maybe I would use the rename
[00:15:03] functionality more or something.
[00:15:05] >> Um
[00:15:07] >> but still like
[00:15:09] >> there's something with like fixing
[00:15:11] there's a sweet spot where like the
[00:15:13] agent does something and then you
[00:15:14] automatically have tools that fix the
[00:15:16] imports or the formatting and whatnot.
[00:15:18] And I think that's a that's a really
[00:15:19] good place to be in. Um, but in general,
[00:15:23] yeah, like I'm become pretty lazy with
[00:15:25] just moving code around.
[00:15:27] >> Let's ask Tim that. So Tim, what about
[00:15:29] you? Are are you having AMP or an agent
[00:15:33] do everything for you or are you hand
[00:15:35] typing any code anymore? Kind of where
[00:15:36] are you at?
[00:15:38] >> I don't write code.
[00:15:42] So that um yeah, I mean I'm relying on
[00:15:45] the agent to do everything, which um has
[00:15:47] gotten me in trouble a couple of the
[00:15:50] times um where I've had to like find my
[00:15:52] way out of a hole, a dark hole that I I
[00:15:55] don't know how I got into,
[00:15:56] >> but um
[00:15:58] >> and that that's frustrating. That's not
[00:16:00] the fun part that I was talking about
[00:16:02] earlier, but I think that's probably
[00:16:05] reality, right? I think engineers go
[00:16:06] through that too, like you know, finding
[00:16:08] a bug or whatnot. So
[00:16:10] >> yeah. So you're mostly you're mostly
[00:16:12] have AMP do everything and I I'm in that
[00:16:14] camp now where mostly AMP is writing all
[00:16:17] my code. I review all of it. Um but I'm
[00:16:19] I'm writing very much and much less of
[00:16:22] it. Um so actually everybody listening
[00:16:24] throw it in the comments like how much
[00:16:26] are you handwriting code these days? All
[00:16:29] 100% 0% somewhere in between. Let us
[00:16:31] know. We'll throw up some uh some of
[00:16:33] those comments um on the screen. Um, it
[00:16:37] it's interesting because I've learned,
[00:16:39] you know, my previous world and life was
[00:16:41] teaching people how to code at
[00:16:43] Treehouse. And and and what's
[00:16:45] interesting is I'm learning that I'm
[00:16:47] learning a lot by letting AMP write the
[00:16:49] code and then reviewing it. Um, and I
[00:16:52] actually am learning a lot about DevOps
[00:16:53] and and you know, uh, CI/CD and all this
[00:16:57] just by by uh watching him do things. So
[00:17:00] Justine's at 1%. I'm probably at 98%
[00:17:04] my code. Um, Ben is at 10% handwritten.
[00:17:08] Um, interesting. So, um, we'll keep
[00:17:11] going to some more tips and tricks. Um,
[00:17:13] everybody throw in the comments how much
[00:17:15] are you how much are you writing of your
[00:17:17] code? Um, these days, you know, I'm at
[00:17:20] probably two to 5%. So, I want to show a
[00:17:23] quick tip and actually share my screen
[00:17:26] real fast. Um, so this is something I
[00:17:28] did today that I really, really enjoyed.
[00:17:32] Um, so let me find.
[00:17:36] All right. Um, let's make this a little
[00:17:38] a little larger for everybody.
[00:17:42] A little bit larger. Here we go. A
[00:17:44] little larger. I'm actually going to
[00:17:45] close Neovm.
[00:17:49] Okay. So, what I'm showing you here is
[00:17:52] uh Ghosty. So, Ghosti is my terminal
[00:17:55] terminal emulator that I I code. And you
[00:17:58] could, you know, if you're a terminal
[00:17:59] person, you could use iTerm or or
[00:18:01] Terminal on the Mac, etc., etc. Um, I
[00:18:04] use Ghosty. I love it. And then on the
[00:18:06] left, I've got my dev server running.
[00:18:08] I'm primarily a Nex.js TypeScript type
[00:18:10] of person. And on the right, I've got
[00:18:12] AMP running. But this is something I
[00:18:13] kicked off today. And I was really happy
[00:18:16] with how this went. Um, so you can see
[00:18:18] my prompt was, uh, I want you to sign in
[00:18:21] with a dev test account, um, and go
[00:18:24] through the entire case details process,
[00:18:27] which is 14 steps. I'd like you to use
[00:18:28] playright and add information for every
[00:18:30] single field. Wherever there's an
[00:18:32] optional field, add at least one
[00:18:33] example. Uh, report back any errors and
[00:18:36] make sure to watch the server log uh, as
[00:18:38] you do it for errors. Right. So, the
[00:18:41] other, this has been a huge unlock is
[00:18:44] um, I have Nex.js JS pipe all of the
[00:18:47] frontend console logs to the back end.
[00:18:50] Um so I have all my logs in one uh
[00:18:54] unified place and this has been a huge
[00:18:57] unlock. So on the left, I mean, you can
[00:18:59] see um you've got front-end logs, you've
[00:19:01] got backend logs, and and what I do is I
[00:19:04] actually log that to a file. Um and then
[00:19:07] I ask in my agents MD file, I tell the
[00:19:10] agent, you can tail this log anytime,
[00:19:13] you know, and and by default, look at
[00:19:15] the last 100 lines. And just look at
[00:19:17] this. Like, man, this cranked through.
[00:19:20] So this went through the entire I did
[00:19:22] have to say continue, which was a little
[00:19:24] weird this morning. Um, but look at
[00:19:26] this. So, it went through all 14 steps
[00:19:28] and then and then awesome. It it found a
[00:19:32] bug. So, right here, found a bug on step
[00:19:34] five. So, this was a really wonderful
[00:19:37] way to test the front end. Now, there's
[00:19:41] a couple things to remember as you do
[00:19:42] this. Number one, have all of your
[00:19:43] frontend and backend logs combined into
[00:19:45] one file. Tell your agent in your agents
[00:19:49] MD file to look at that file and how to
[00:19:51] do it. Mhm.
[00:19:53] >> And then thirdly, um, uh, well, make
[00:19:56] sure you've got Playright or some MCP
[00:19:58] installed so that the agent can use the
[00:20:00] browser. Uh, Playright is the only MCP I
[00:20:02] have installed. I love it. Um, and then,
[00:20:06] uh, uh, fourthly, make sure you have a
[00:20:08] dev account with a username and password
[00:20:10] that the agent can sign into your local
[00:20:12] environment so it can actually use the
[00:20:14] app. Um, so just wanted to share that.
[00:20:17] Um, that was just delightful this
[00:20:20] morning. Um, AMP found two bugs and
[00:20:23] fixed both of them. Um, I actually asked
[00:20:26] the Oracle to look at the first bug to
[00:20:28] crank it out and it it just crushed it.
[00:20:30] So, um, thought that was really helpful.
[00:20:33] Um, got a couple more people commenting.
[00:20:36] Alex uh, writes less than 1% of his code
[00:20:39] now uh, by hand, which is interesting.
[00:20:41] Uh, Brennan says, "My goal is to hit 0%
[00:20:45] hand coding." Um, which is interesting.
[00:20:48] Um, Nikolai, where are you at? What
[00:20:50] percentage of your code are you
[00:20:51] handwriting these days?
[00:20:53] >> I think it really depends. In the last
[00:20:55] few days, I had a really frustrating one
[00:20:57] where it was all me. Um because it was
[00:21:00] touching.
[00:21:02] >> Sorry.
[00:21:02] >> 100% Nico.
[00:21:04] >> Yeah. Which I hadn't had for a long
[00:21:06] time. And because it was throwing so
[00:21:09] many mistakes in there and it was like
[00:21:11] it wasn't the easiest thing to build. It
[00:21:13] was touching a lot of different parts in
[00:21:14] the code base. um and was hitting like
[00:21:19] streaming injection, so it had to do
[00:21:21] event handling, injecting extra stuff in
[00:21:23] the stream.
[00:21:24] >> And yeah, it was it was a weird thing to
[00:21:27] build. So it it made it overly complex
[00:21:31] and so I had to do it myself. Otherwise,
[00:21:34] I would say like a good 75 80%.
[00:21:38] >> Is written by AMP or you?
[00:21:40] >> By AMP.
[00:21:40] >> Wow. So you're at like 20 to 25%. Um uh
[00:21:46] Well, let me jump in. How do you how do
[00:21:48] you design? Do you upfront decide
[00:21:50] whether you're going to write it by hand
[00:21:51] or not? Or is it you writing by hand if
[00:21:54] the agent can do it?
[00:21:55] >> If I get frustrated enough, I write by
[00:21:57] hand. So, it it can sometimes be
[00:21:59] literally like I'm sitting there two to
[00:22:02] three hours and it's driving me up a
[00:22:04] wall and then I decide I'm just going to
[00:22:06] do it myself.
[00:22:08] >> Yeah. Yeah.
[00:22:08] >> I I because I think like
[00:22:10] >> you know I've had this argument um with
[00:22:13] some people not with some people like I
[00:22:16] posted on Twitter and then somebody was
[00:22:18] like what do you mean that wasn't an
[00:22:19] argument but you know the my point is
[00:22:25] you need to learn how to work with these
[00:22:27] agents. It's not you know
[00:22:31] go and build me this and then just wait
[00:22:33] for it to show up. I think you develop a
[00:22:36] certain intuition of how to prompt
[00:22:40] things and how to size what you want to
[00:22:42] get out of the agent in a specific
[00:22:44] session. And for me, the other thing
[00:22:46] that I learned is um there's certain
[00:22:49] areas of the codebase where I'm
[00:22:51] completely fine with not understanding
[00:22:54] exactly how it works. You know,
[00:22:55] >> yeah,
[00:22:56] >> good most extreme example, some test
[00:22:59] cases or some front-end story books or
[00:23:01] UI things, right? I don't I don't care.
[00:23:04] Or a script to test the test database.
[00:23:06] Like
[00:23:06] >> I don't really care. But like
[00:23:08] loadbearing stuff in the middle of the
[00:23:09] codebase,
[00:23:10] >> I really want to know how everything
[00:23:12] works line by line. And that's often
[00:23:15] >> where I then I try to get the agent to
[00:23:17] do it, but then I jump in and
[00:23:20] >> rewrite it or refactor it or rename
[00:23:22] stuff, but basically I'm going to touch
[00:23:24] every line just so I have like a mental
[00:23:26] model of how it actually works.
[00:23:28] >> Yeah. So usually I assume when he can't
[00:23:30] do something it's not well specified by
[00:23:33] me on what to do and how to implement it
[00:23:35] and I think this was the case as well
[00:23:37] but it also took some discovery on my
[00:23:38] end like it produced a bunch of
[00:23:40] solutions and through that I actually
[00:23:42] came up with how I want to implement it.
[00:23:45] >> Yeah
[00:23:45] >> but still it was really hard to
[00:23:46] communicate it.
[00:23:47] >> So
[00:23:48] >> yeah that's the other thing right like
[00:23:49] sometimes you don't know and then you
[00:23:51] want to wing it but I think that's also
[00:23:54] what you learn. you realize from the
[00:23:57] start this is most likely not going to
[00:23:59] work out but I'm just gonna go let it
[00:24:01] write the code just so I don't so I know
[00:24:03] more about the problem right
[00:24:05] >> yeah I think this is where background
[00:24:06] agents can be fun too like at night you
[00:24:08] could kick off some of those exploratory
[00:24:11] >> uh jobs and then wake up and see
[00:24:13] interesting how did the agent tackle
[00:24:14] this um and kind of pick your favorite
[00:24:17] so we've got a product manager on the
[00:24:19] call right so Tim
[00:24:21] >> yeah are you getting a sense for how
[00:24:23] much your agent whether it's AMP or not
[00:24:26] can bite off and chew or or how do you
[00:24:29] tackle the size?
[00:24:30] >> I I am um I'd love to show you my
[00:24:33] workflow in in a minute here, but just a
[00:24:35] comment on on this last conversation.
[00:24:38] you know, the engineers that I talked
[00:24:39] to, um, I've kind of like over the last
[00:24:42] six months or so have been like sort of
[00:24:43] poking around, you like, hey, what do
[00:24:45] you guys think of this, you know,
[00:24:46] agentic coding thing? And generally, I
[00:24:50] think the tide is shifting, but
[00:24:51] generally the response I get is, yeah,
[00:24:53] you know, it's it's not really there
[00:24:54] yet. It's okay. Or sometimes I'll use it
[00:24:57] to see how they would set it up in terms
[00:24:59] of structure or whatnot.
[00:25:02] And I I think that um there there's
[00:25:06] almost uh like a perspective
[00:25:10] where where they're kind of like, you
[00:25:12] know, it's just it's it it won't do as
[00:25:14] good a job as me, a human writing code.
[00:25:17] My perspective, I I approach it from the
[00:25:19] opposite perspective. I'm like, you
[00:25:21] know, what can this do for me? Like
[00:25:23] because I I couldn't write any code,
[00:25:24] right? So I look at it like any anything
[00:25:27] that an AI can spit back at me is a net
[00:25:30] positive
[00:25:31] >> is better than you.
[00:25:32] >> Well, it's better than me, but like it
[00:25:34] but you know and I also think it's good
[00:25:37] enough like you know because I'll I'll
[00:25:40] I'll run a build and Xcode and then I'll
[00:25:42] you know check out what I'm working on
[00:25:44] and I just think it's fantastic like wow
[00:25:46] look I have buttons and navigation and I
[00:25:48] can execute these things that this app
[00:25:50] is intended to do. So
[00:25:52] >> then you could do I mean but what's
[00:25:54] interesting is you'll find like over the
[00:25:56] next 12 months you you will become a
[00:25:57] better and better engineer and then at
[00:25:59] all of a sudden you're like whoa like
[00:26:00] actually I I don't like the way the
[00:26:03] Asian implemented this I'm going to go
[00:26:04] in and slightly change it or the thing
[00:26:06] with TypeScript is that happens all the
[00:26:08] time is like wait a minute I'm sure
[00:26:09] we've defined this this type somewhere
[00:26:11] else like
[00:26:13] >> why are you trying to find it here? So
[00:26:16] >> Graham Graham is here what's up Graham
[00:26:18] how you doing? I'm live and it's a fake
[00:26:20] microphone because I'm I have to do this
[00:26:22] on my I'm trying to join from the the
[00:26:24] office setup and uh so the microphone is
[00:26:27] still here. It just feels weird. I might
[00:26:28] as well have it to look official but
[00:26:30] >> look cool. Um yeah, so why don't why
[00:26:32] don't you quickly introduce yourself to
[00:26:33] everyone who's watching. Hey everybody,
[00:26:34] Graham uh run Devril here at uh AMP and
[00:26:38] just been building stuff for a long time
[00:26:40] and running the the build crew community
[00:26:43] to meet people like Tim uh which is
[00:26:45] super fun to sort of see how how
[00:26:47] everyone's building. The most fun thing
[00:26:49] I think is we've got all these people
[00:26:50] that are solo entrepreneurs now but what
[00:26:53] you forget is how lonely that is. And so
[00:26:56] build crew has been fun. We do these
[00:26:57] these uh um what do you call them?
[00:27:00] Standups every day. And so I've got all
[00:27:01] these people building these incredible
[00:27:03] projects that I get to hear about um and
[00:27:05] I don't have to write any of the code.
[00:27:06] So uh happy to be here. Glad to join
[00:27:08] today.
[00:27:09] >> It's good to have you here. Glad you
[00:27:10] fought the traffic. Um so we've got a
[00:27:13] bunch of comments coming in including
[00:27:14] from Twitch. So Torstston, good job
[00:27:17] streaming to Twitch. Um we've got Z7ZI
[00:27:20] who says the only thing devs need to
[00:27:22] touch is some grass.
[00:27:27] So that's always important. Um and Brian
[00:27:29] Skully joined us. Thought we were on
[00:27:31] Discord but realized we're on X. So good
[00:27:33] to have you here. Brian, thanks for
[00:27:34] watching. Um, and uh, Brendan's got a
[00:27:37] good little tip. I have a little eslint
[00:27:39] rule that yells at the agents when they
[00:27:42] add when they read types randomly. Gosh,
[00:27:45] that's a good tip actually. Uh, I need
[00:27:47] to do that. All right, so let's keep
[00:27:50] cranking. We've got some more tips and
[00:27:52] tricks to share. Again, if you're tuning
[00:27:53] into the show and you just got here, uh,
[00:27:55] this is Build Crew Live. Um, we have a
[00:27:57] community for people who are building
[00:27:59] with agents. Uh, it's free and we want
[00:28:02] to welcome you no matter what agent
[00:28:03] you're using. Um, just head to
[00:28:05] billcrew.te, sign up for free. Uh, if
[00:28:08] you use AMP or you want to try AMP, we
[00:28:09] also throw a 100 bucks of credit in your
[00:28:11] account. Um, so uh, uh, come on over.
[00:28:13] We've got over 560 people already in the
[00:28:16] group and we'll probably hit a thousand
[00:28:18] pretty soon. So, um, come on over and
[00:28:20] join the fun. Um, let's go next to
[00:28:24] Nikolai with his uh agentic tip uh for
[00:28:28] coding. And uh take it away, Nico.
[00:28:33] >> It's Can someone share my screen?
[00:28:37] >> The magic the magic of Nico's screen
[00:28:40] will hopefully appear soon. Uh
[00:28:44] >> hey,
[00:28:44] >> nice.
[00:28:46] So as opposed to I'm still on near him
[00:28:50] and it's like I think on on X especially
[00:28:53] a lot of people have been talking about
[00:28:55] MCPS are bad and you should get rid of
[00:28:58] them or they pollute the context when
[00:29:00] know and it's like I'm largely in
[00:29:03] agreement but the question is always
[00:29:05] like so what so how are you going to
[00:29:07] replace it with and I think especially
[00:29:09] for people who are working in the
[00:29:12] enterprise you have a really structured
[00:29:15] workflow
[00:29:16] Usually you work on an issue. So the
[00:29:19] thing you start with is usually already
[00:29:22] documented somewhere where all the
[00:29:24] interesting uh documentation is. And we
[00:29:28] build slash commands in a slightly
[00:29:30] different way than for example cloud
[00:29:32] code and I think most of the others have
[00:29:34] it. I think they only use markdown and
[00:29:37] you have some custom templating language
[00:29:40] which you can use to inject the output
[00:29:42] of bash commands. And for me it always I
[00:29:47] always wanted something scriptable that
[00:29:49] I can also actually pipe into the agent
[00:29:51] and I can actually test to see whether
[00:29:54] the output is working. Um because
[00:29:57] usually I'm doing API call when I'm
[00:29:58] writing bash scripts or I'm doing
[00:30:00] something a little bit more fancy. And
[00:30:02] as an example, this is one I use to work
[00:30:05] on a linear issue. And the what it
[00:30:09] basically does, it takes the issue
[00:30:11] number. It has a pretty fancy GraphQL
[00:30:14] query which it uses to take the issue
[00:30:18] number and basically pull down the issue
[00:30:22] description and all the comments which
[00:30:24] are in there. And in the end I just
[00:30:27] basically echo out a command which asks
[00:30:32] it to basically hey review the issue
[00:30:34] review the codebase look through the
[00:30:36] codebase and come up with a plan that
[00:30:39] has the required code changes impacts
[00:30:42] necessary tests. So I'm trying to
[00:30:44] produce an artifact which I can review
[00:30:47] to and then basically kick off the agent
[00:30:49] to do its work.
[00:30:50] >> Oh wow. How did you how did you make
[00:30:52] this tell works?
[00:30:55] >> I asked AMP to make it. Um, so I just
[00:30:58] went onto the linear documentation, copy
[00:31:01] and pasted the URL, threw it into AMP,
[00:31:03] told it, hey, write me the GraphQL query
[00:31:05] and the uh the API request and it
[00:31:09] produced it. In the end, I wrote the
[00:31:11] prompt uh to basically come up with the
[00:31:13] with the prompt and how to behave and I
[00:31:16] can basically now just just trigger it.
[00:31:19] And in linear you always have like this
[00:31:21] short morsel like MC for the
[00:31:24] organization and the issue number and it
[00:31:27] basically executed it pull this in and
[00:31:30] it basically sends it instantly as a
[00:31:32] prompt.
[00:31:32] >> That's so cool.
[00:31:33] >> And similar you can do the same stuff
[00:31:35] for example for resolve PR comments. So
[00:31:38] if someone like Torston left a bunch of
[00:31:40] comments on my PR I could just pull it
[00:31:42] in and it does something very similar.
[00:31:45] It basically does a GraphQL query, pulls
[00:31:47] in all the inline comments and basically
[00:31:50] gets it down and then does the same
[00:31:52] again.
[00:31:53] >> Basically review the codebase, look at
[00:31:54] what changes are necessary and produce a
[00:31:56] plan for it. So I can review the plan
[00:31:58] and then actually kick it off to do the
[00:32:00] edits.
[00:32:01] >> Gosh, this is so cool. So everybody
[00:32:03] watching just to make sure you
[00:32:04] understand the context. So uh what Nico
[00:32:06] is doing here is using a custom slash
[00:32:08] command basically. Um and so various
[00:32:12] agents have custom slash commands in
[00:32:13] AMP. call them tools inside of a
[00:32:15] toolbox. Um uh and it's just a markdown
[00:32:19] file or you can use a bash script which
[00:32:22] is what this is. Um
[00:32:24] >> or any other script. So any scriptable
[00:32:26] language like Python, TypeScript,
[00:32:28] whatever you want.
[00:32:29] >> Cool. So and you basically it like with
[00:32:32] anything with any agent that what you
[00:32:34] want to do is copy in the documentation
[00:32:36] and say here's documents on on how to do
[00:32:38] this. Here's what I want you to do. And
[00:32:40] so I I copied in the URL for uh the AMP
[00:32:44] manual for how to make a tool and I
[00:32:46] said, "I want the tool to do this thing.
[00:32:49] Make it for me." And it did. Um and uh
[00:32:53] you can really, like Nico was saying, if
[00:32:55] if MCPs sound like too much or you're
[00:32:57] not allowed to use them or they're
[00:32:59] they're polluting your context window,
[00:33:01] use a tool like this because it is a
[00:33:03] deterministic way
[00:33:04] >> Yeah.
[00:33:05] >> to get it something done.
[00:33:08] >> So maybe Yeah. Custom slash commands are
[00:33:10] basically user trigger tools are also
[00:33:12] the same thing. There are scripts but
[00:33:13] which are triggered by the model. So
[00:33:15] they are slightly different but in the
[00:33:18] end like when you look at all MCP
[00:33:19] servers which are basically out there
[00:33:21] it's most of them have way too much
[00:33:24] stuff in terms of how many tools they
[00:33:26] expose and most of them also expose way
[00:33:29] more arguments than are necessary. So
[00:33:31] for example, if I'm doing uh want to
[00:33:34] pull down a PR, whether I'm doing it
[00:33:36] with a custom slash command or I'm doing
[00:33:38] it with a custom tool, in the custom
[00:33:41] slash command, I only have to give one
[00:33:43] thing because I am already know in which
[00:33:45] repo am I in which organization I belong
[00:33:47] to. So the only thing I need is the
[00:33:49] issue number. And also if I give it uh a
[00:33:52] custom tool, I can also only give it
[00:33:56] only one argument which is basically the
[00:33:59] um the number of the pull request. So I
[00:34:01] can already preset all of the other
[00:34:03] stuff which makes it way easier to call
[00:34:05] for the model and also it pollutes the
[00:34:08] context windowless.
[00:34:09] >> Right. It's so rad. Torsson, you were
[00:34:11] you about to say something? basically
[00:34:13] this yeah that you know did or I can add
[00:34:16] another thing which is that um and I
[00:34:20] talked to somebody
[00:34:22] about they sent me an email asking about
[00:34:25] like MCP tools and you know discovering
[00:34:28] of tools and I said there's a lot of
[00:34:31] overlap between these concepts of MCP
[00:34:33] and what we call the toolbox which is
[00:34:36] script stored invoke you know stored and
[00:34:38] invoked by the agent and the custom
[00:34:40] slash commands And there's a lot of
[00:34:43] overlap. And we're not saying
[00:34:46] use this only for this and use this only
[00:34:49] for that. We're still figuring this
[00:34:50] stuff out as is everybody. But what we
[00:34:53] found is what Nico said that you know,
[00:34:54] sometimes you want deterministic
[00:34:57] invocation of a script and put the
[00:34:59] output inside the context window. And
[00:35:02] you know, do you want the agent to
[00:35:04] trigger it? Use the toolbox. Do you want
[00:35:06] to trigger it yourself? Use a custom
[00:35:08] flash command. Yeah, it this is this is
[00:35:12] so great. So I have uh an RSC command
[00:35:16] that restarts my dev server. Um so I use
[00:35:20] T-Mox and I have my dev server always
[00:35:22] running in pain three like just kind of
[00:35:24] where it is. And when I was asking AMP
[00:35:27] to restart the dev server uh just saying
[00:35:30] please restart the dev server, it
[00:35:31] wouldn't always target the right pane
[00:35:33] correctly. Um or it that it wouldn't
[00:35:36] send the keystrokes for some reason,
[00:35:38] right? And so what I did is um I created
[00:35:42] uh a custom slash command which is just
[00:35:45] rs which basically just says restart dev
[00:35:47] server. Um so it's like a snippet and
[00:35:50] then that triggers the tool which is uh
[00:35:54] a bash uh script to programmatically
[00:35:57] deterministically restart the the dev
[00:36:00] server. And I'll tell you all like when
[00:36:02] there's something you're doing over and
[00:36:03] over again and you want it to be
[00:36:04] deterministically done by the agent like
[00:36:07] creating these custom slashcomands or
[00:36:09] tools it will make you so much happier
[00:36:12] as a dev. So
[00:36:15] >> cool feel like um there's
[00:36:19] we everyone sort of hates on MCP. That's
[00:36:21] like the cool thing to do. A month ago,
[00:36:23] the cool thing to do was to make
[00:36:24] everything in MCP and then now the cool
[00:36:25] thing to do is to hate UNMCP. And it
[00:36:27] sort of feels like um you know XML was
[00:36:31] the first way that we had things
[00:36:33] interact and then JSON came along and we
[00:36:34] may just still be in the XML era and if
[00:36:37] you're an XML lover, sorry. Um but uh I
[00:36:40] think that's part of the what's going on
[00:36:43] here is like you said Thoren like we
[00:36:45] just don't know everything everything's
[00:36:47] so new. Everyone expects robust, you
[00:36:50] know, enterprisegrade tooling
[00:36:52] >> and the answer is like somebody came up
[00:36:53] with this a month ago, you know, and all
[00:36:56] and everyone's it's moving so fast.
[00:36:58] We're trying to push it to production,
[00:36:59] but it's like we just all need to keep
[00:37:01] trying and most importantly keep sharing
[00:37:03] so that we can all learn from each
[00:37:04] other.
[00:37:05] >> And I mean, one other thing to mention
[00:37:07] is um if the goal is I want to reliably
[00:37:13] or in an automatic way, I want to get
[00:37:15] something in the context window of the
[00:37:17] agent, right? That's super abstract
[00:37:19] thing to say, but that's roughly what
[00:37:21] all of this solves, right? With MCP,
[00:37:26] if you're saying like, oh, I want a
[00:37:27] little test command or a nice little
[00:37:30] workflow or whatever it is, I would say
[00:37:32] the barrier to build something is still
[00:37:35] higher. Like the agents are pretty good
[00:37:36] at building MCP servers, but it they the
[00:37:39] bash script that Nico show, they can
[00:37:42] knock this out 99% of the time without
[00:37:44] any mistake. like a 100 line Vash script
[00:37:47] and then you can just run it. You can
[00:37:48] test it. You can tell the agent how to
[00:37:50] test it and then you can just use it.
[00:37:53] And I I think we're all figuring this
[00:37:55] stuff out, right? In a company, you want
[00:37:56] maybe a central Slack MCP running
[00:37:59] somewhere remotely, but as an engineer
[00:38:02] working on a codebase, you want your own
[00:38:03] little custom tools. So,
[00:38:05] >> yeah, all the time. So, I'm sharing my
[00:38:08] screen real quick to show you this uh
[00:38:10] this custom um uh bash script to
[00:38:14] basically get uh my dev server
[00:38:16] restarted. And it's and of course AMP
[00:38:19] wrote this for me, right? But basically,
[00:38:21] it's checking, you know, here's the name
[00:38:23] of the tool uh t-mox restart dev server
[00:38:26] and this is the description which tells
[00:38:28] the agent when to do it. Um and then it
[00:38:31] just checks, okay, do I already have a
[00:38:33] session running called Untangle? Okay,
[00:38:35] grab the pain number from that. Um,
[00:38:37] because it's possible I restarted or
[00:38:39] closed a pain number. So, and this this
[00:38:42] works 100% of the time. Um, I've never
[00:38:45] had this fail. So, having this
[00:38:47] deterministic tool call is just like
[00:38:50] heaven. I love it.
[00:38:53] >> All right, so we've got some more
[00:38:54] comments coming in. Everybody in the
[00:38:56] crowd, thanks for tuning in. Um, Jake
[00:38:58] Snake Dev uh said, "That's a sweet
[00:39:01] command and even sweeter NeoVM theme.
[00:39:03] What is it, Nico? What's your uh what's
[00:39:06] your name theme?
[00:39:07] >> Torson, you influenced me.
[00:39:09] >> It's Gruff Bogs Dark Hard or Groove Box
[00:39:12] Darkard, right? Is how some people
[00:39:14] pronounce it.
[00:39:15] >> Oh, man. I'm a I'm a cappuccino or
[00:39:18] cappuccino guy. That's me.
[00:39:22] >> Still, you know, not
[00:39:25] >> I I have to say like kapuchin for
[00:39:28] markdown is way better.
[00:39:29] >> Oh,
[00:39:29] >> okay. Let's jump to the next section,
[00:39:31] please.
[00:39:33] Let's keep going. Okay, so uh next up we
[00:39:37] want to talk a little bit to Tim. So
[00:39:38] Graham would love you to sort of um ask
[00:39:41] Tim a little about himself and what he's
[00:39:43] building and and what he's making and
[00:39:45] build crew and and then we'll keep going
[00:39:46] from there.
[00:39:47] >> Yeah, Tim, thank you so much for joining
[00:39:49] today. It's really been fun to like I
[00:39:52] said, we do these daily standups and we
[00:39:53] get to hear from everybody building
[00:39:54] stuff and it sounds like um you before
[00:39:57] you started working on this weren't even
[00:39:59] a full-time engineer. Um, and so you've
[00:40:01] been able to to leverage these tools to
[00:40:04] um, start building something on the
[00:40:06] side. So, we'd love to just like a
[00:40:07] little bit about your background and
[00:40:08] then maybe we could jump into what
[00:40:09] you're building.
[00:40:10] >> Yeah, you showed up late, but uh, I'm
[00:40:13] I'm not an engineer at all. I'm a
[00:40:15] product manager, so
[00:40:16] >> Yeah. No, I I remember. Yeah, I was
[00:40:18] trying to be kind. Sorry.
[00:40:19] >> No, no, no, no, no. It's all good. But
[00:40:22] um yeah, I was I was saying earlier, you
[00:40:23] know, for a long time I've worked with
[00:40:25] engineers and alongside engineers and
[00:40:27] talked to them about different technical
[00:40:29] problems or implementations. Um but I'm
[00:40:32] I never wrote code. Um you know, I can
[00:40:34] read a little bit of code and I'm, you
[00:40:36] know, familiarizing myself with it every
[00:40:38] day. Um but I'm I'm still like a novice
[00:40:42] and kind of jealous of everyone else on
[00:40:45] this call. And you guys are talking
[00:40:46] about Neil Vim and I see that everywhere
[00:40:48] and I'm like, I gotta get in on this
[00:40:49] thing, you know? So, um, I'm I'm really
[00:40:53] like at the beginning stages and I'm
[00:40:56] having so much fun building in public
[00:40:57] because I'm also have no shame because I
[00:41:00] don't know what I'm doing. So, if I do
[00:41:01] something wrong, it's like, well, okay,
[00:41:03] you live and learn, right? So, uh, yeah,
[00:41:06] and like you said, you know, sometimes
[00:41:08] building solo can be lonely. So, it's
[00:41:11] great to, you know, connect with others
[00:41:12] here and happy to sort of share what I'm
[00:41:15] working on and what works for me and my
[00:41:17] mistakes and hope that, you know, a
[00:41:19] rising tide lifts all ships.
[00:41:21] >> Yeah. Well, I just want to say you don't
[00:41:23] have to use Neoim. Don't let the uh the
[00:41:26] lead coders influence you. I uh refuse
[00:41:29] to be part of any party that will have
[00:41:31] me. But no, um I feel like you can spend
[00:41:33] a lot of time, especially if you're new
[00:41:35] to software engineering, you can spend a
[00:41:37] lot of time, uh following the Twitter
[00:41:39] discourse and downloading new things to
[00:41:41] try and optimize. And the best thing you
[00:41:43] can do is use a terrible setup and until
[00:41:46] it breaks. Um and then spend some time
[00:41:49] to relax. So, um don't don't feel like
[00:41:51] you need to chase all the cool things.
[00:41:52] And we can none of us will ever be thr
[00:41:55] uh we just can try our best. Well, I
[00:41:58] think I think you'll see in a minute
[00:41:59] here how primitive my setup is.
[00:42:01] >> No. Well, okay, then bring it on. Let's
[00:42:03] uh let's let's roast you. But um yeah,
[00:42:06] let's share something you're working on.
[00:42:08] >> Okay. So, in standup last week, we were
[00:42:11] talking about
[00:42:13] um
[00:42:16] you know, I I ran into like what did I
[00:42:18] call it? The I don't know, the hole of
[00:42:19] darkness or something like that where uh
[00:42:22] you know, I I I got into a bug and I
[00:42:24] couldn't get out and I kept asking the
[00:42:25] >> fair. Yeah, the loop of doom. There we
[00:42:28] go. That's
[00:42:29] >> Yeah. Yeah. Um I I'm I'm sure everyone's
[00:42:32] been there. So, um you know, the the
[00:42:35] takeaway was, you know, don't ask the AI
[00:42:39] or LLM to do too much. Break the problem
[00:42:42] down into much smaller problems. And
[00:42:44] I've done that and I've had success. But
[00:42:46] my takeaway now is I got to keep doing
[00:42:48] that. I have to go smaller and smaller.
[00:42:50] So, what you're looking at here, uh
[00:42:53] okay, so I'm building an app. I'm
[00:42:55] calling it Maxed. It's all about
[00:42:56] nutrition and exercise. So, you know,
[00:42:59] how do you um get healthy? That's
[00:43:02] something I'm really passionate about.
[00:43:04] So, this is all my documentation for the
[00:43:06] app. So, you know, I have a mermaid
[00:43:08] diagram. I have all these different
[00:43:10] PRDs, product requirement documents, and
[00:43:14] this is kind of everything. So, there is
[00:43:16] a scanning feature where you can take a
[00:43:18] a picture of your meal and you know the
[00:43:20] AI will say like this is how many
[00:43:22] calories, these are the macros and you
[00:43:24] can make sure that you're hitting your
[00:43:25] goals. So, as you could imagine um
[00:43:28] there's a lot in here and I definitely
[00:43:32] had AI help write all of this uh you
[00:43:35] know flush out my PRD. Um but it you
[00:43:39] can't just you know say hey AMP or
[00:43:42] Oracle like go implement this. Um, I
[00:43:44] tried and I failed.
[00:43:46] >> What's your prompt to generate the PRD?
[00:43:48] Do you just have a a one you use all the
[00:43:50] time or use a product or
[00:43:52] >> Oh, uh, that's a good question. Um, so I
[00:43:58] this was a while ago. Um, I think I
[00:44:00] probably did this in Claude and I maybe
[00:44:04] used Claude Opus. And what I did is I I
[00:44:08] because I'm a product manager, you know,
[00:44:09] I I drafted an an initial draft and I
[00:44:12] said, you know, like what am I missing?
[00:44:14] Uh flush this out for me. And then there
[00:44:17] was definitely some back and forth, you
[00:44:19] know. Um sometimes the LLM comes with
[00:44:21] stuff that, you know, is not relevant
[00:44:24] or, you know, I can just dismiss. Um but
[00:44:26] it helps me think about like big picture
[00:44:29] stuff like what am I missing? And then
[00:44:31] little details. Oh yeah, like that's a
[00:44:33] that's a great note. I that was an
[00:44:35] oversight. So, um, it's a little bit
[00:44:37] more casual, I guess.
[00:44:38] >> Cool.
[00:44:39] >> You know what's funny is five years ago,
[00:44:42] this was a this was a company on Shark
[00:44:45] Tank, just the photo scanning, you know,
[00:44:47] like just an attempt at doing this. And
[00:44:49] so, I love that like
[00:44:51] >> you're this feature was like a whole
[00:44:54] product. And so because of like the
[00:44:56] ability to use machine learning and like
[00:44:59] image image capture and stuff from
[00:45:00] because imagine you're taking a photo
[00:45:02] and you're passing it off to an image
[00:45:04] recognition LLM and it's giving you the
[00:45:06] results and then you're parsing that and
[00:45:08] and sort of um then using somewhere else
[00:45:10] to to give you the calorie feedback. Is
[00:45:12] that a rough outline?
[00:45:14] >> Yeah, basically. Yeah.
[00:45:15] >> Yeah. And it's like, you know, five
[00:45:17] years ago, this is like a hundred
[00:45:18] million dollar funded startup to try and
[00:45:20] figure out how to do this. And you're
[00:45:22] like casually adding it as a feature to
[00:45:24] to a larger app that you're building. So
[00:45:26] I I just love that. But sorry, I didn't
[00:45:28] mean to steal Yeah,
[00:45:30] >> it is.
[00:45:32] >> So um so what I did uh to get out of
[00:45:35] like sort of the loop of death is I I
[00:45:37] did hit the restart button, right? And
[00:45:38] so I broke this PRD down into like much
[00:45:41] more granular PRDs, right? So like
[00:45:43] camera integration, photo validation, AI
[00:45:46] food recognition service. So that you
[00:45:48] know goes out and calls an API called
[00:45:50] calorie mama and
[00:45:54] and and then what I did in AMP is I
[00:45:56] basically said you know you'll see here
[00:45:58] I I asked the Oracle a lot initially.
[00:46:02] >> Um so let me click in here. So I said,
[00:46:04] you know, Oracle, parse this PRD and and
[00:46:07] Ryan, I probably got that tip from you,
[00:46:10] um, when you were on how I AI with
[00:46:12] Clarabo.
[00:46:13] >> Nice.
[00:46:14] >> So um, you know, and I said like create
[00:46:16] a multi-phase plan to implement and, you
[00:46:18] know, ensure the plan is broken into
[00:46:20] small phases and tasks and assign sub
[00:46:23] agents to to implement each task. And
[00:46:26] then this has been kind of key. I have
[00:46:28] no idea if this works or not, but I tell
[00:46:31] it, you know, try to keep the task small
[00:46:32] enough to keep it in within the 20% of
[00:46:35] the context window. So,
[00:46:37] >> Graham, we were talking last week, you
[00:46:39] know, like over 20% quality kind of goes
[00:46:42] down and price goes up after that 20%
[00:46:45] threshold.
[00:46:46] >> So,
[00:46:47] >> so I have a quick question about this.
[00:46:49] This is interesting that you prompt this
[00:46:50] way, Torstston. What what do you think
[00:46:52] an agent or specifically AMP would do
[00:46:55] when you ask it to use sub agents like
[00:46:57] this? And do you think this is optimal?
[00:47:00] You know, you're not going to hurt Tim's
[00:47:01] feelings if you give feedback on this.
[00:47:04] >> I think um so it's interesting. So
[00:47:07] basically when you address the oracle
[00:47:10] like this, you actually address the main
[00:47:12] agent, but the main agent then
[00:47:14] understands that you want to talk to the
[00:47:16] oracle and basically forwards the
[00:47:18] message, right? because that's why it
[00:47:19] wrote like I'll consult the Oracle. And
[00:47:22] if you hover over the Oracle call here,
[00:47:26] um this is what the main agent sends to
[00:47:29] the Oracle, right? And right now, um
[00:47:33] just to throw this in there, people were
[00:47:34] asking what's the current Oracle model.
[00:47:36] It's been 03 for a long time, but under
[00:47:39] the hood right now, we evaluating GPD5.
[00:47:42] There you go. And we still have to make
[00:47:44] this official, but you're here for the
[00:47:47] inside info, I guess, at the filter.
[00:47:49] >> Um,
[00:47:50] >> yeah, but basically this is what the
[00:47:52] main agent sends to the oracle. It says
[00:47:55] parse the P. Um, structure the plan with
[00:47:58] this and each has to be small enough.
[00:48:01] And I don't think it included the
[00:48:03] information about Oh, there you go.
[00:48:05] Break this into down info that can each
[00:48:07] implement by subs using only 20% of so
[00:48:09] it included this. I don't know what the
[00:48:11] oracle makes out of this but what I do
[00:48:13] know is that if you tell a model use few
[00:48:20] tokens they kind of know what this means
[00:48:23] that obviously they cannot say
[00:48:26] introspect and know that I used 15 or
[00:48:29] you know f I don't know what but I think
[00:48:32] if you say 20% the message they get is
[00:48:36] um use you know be efficient you know
[00:48:39] and I I think that might help.
[00:48:42] >> Yeah.
[00:48:42] >> I love I love how sometimes people will
[00:48:44] try to come up with these like really
[00:48:46] convoluted ways to only keep it under
[00:48:48] 20% and you're just like what if I just
[00:48:50] ask it to do that and and it's so cuz
[00:48:53] like to you talk about this a lot that
[00:48:54] like often times that's actually just
[00:48:56] the answer. It's like instead of over
[00:48:58] complicating yourself like just be
[00:49:00] explicit and the models are really good
[00:49:02] and and they tend to do what you ask. So
[00:49:04] it's like it may not officially use 20%
[00:49:08] but you got there. So, I love it.
[00:49:10] >> Yes, it's cool. So,
[00:49:11] >> this is me unroasting you. Go ahead.
[00:49:13] >> I love it. So, Tim, walk us through and
[00:49:15] tell us like in the end, how did this
[00:49:16] go?
[00:49:17] >> Yeah.
[00:49:18] >> Um, it went better, but it's not the
[00:49:23] feature is not fully implemented yet.
[00:49:25] So, I I am battling a
[00:49:29] uh unbuildable unsuccessful build in
[00:49:32] Xcode right now.
[00:49:33] >> Got it. you know, so one thing, so after
[00:49:37] I have my PRD, the the the reason why
[00:49:38] the second step is always generate tasks
[00:49:41] is because my my instinct is for and
[00:49:46] Torstston mentioned this, but I I agree
[00:49:47] like we the more you use these agents,
[00:49:49] the more you start to understand like
[00:49:50] how much they can bite off and chew
[00:49:52] successfully. Um, so but but say I still
[00:49:56] have a pretty meaty feature. Like an
[00:49:58] example was I wanted to implement a
[00:49:59] 7-day free trial for Untangle instead of
[00:50:02] a one-time payment. Like it's like,
[00:50:04] okay, this is going to be some gnarly
[00:50:06] web hooks and some stuff with Stripe and
[00:50:08] but I I think this is enough for the
[00:50:11] agent to bite off, but only if I have a
[00:50:13] detailed list of tasks. And so that's
[00:50:16] why usually I I have the generate prd
[00:50:19] step and then the generate task step
[00:50:21] which stores all those tasks in a
[00:50:24] markdown file because there's this
[00:50:27] specificity in detail that I think that
[00:50:29] the agent can get lost on. Um and the
[00:50:32] to-dos in AMP are are tend to be a
[00:50:35] little higher level. So Tim, you may try
[00:50:38] to to to use the generate task sort of
[00:50:40] second step if you haven't and see if
[00:50:42] that works a little better for you. You
[00:50:44] know, I I should I think I used to use
[00:50:47] that more and then I think I have been
[00:50:49] relying on AMP. Got
[00:50:50] >> lazy.
[00:50:52] >> Yeah, I'm an engineer already, right?
[00:50:54] I'm lazy.
[00:50:56] >> Um Torston and and Nico, do you guys use
[00:50:59] ever like do you ever ask the model to
[00:51:02] make more detailed tasks and follow uh
[00:51:04] those or no?
[00:51:06] >> Yeah. No. So, what I do is um I'm trying
[00:51:09] to find the link
[00:51:11] >> but I cannot find it. Carson says yes,
[00:51:14] says no. Interesting.
[00:51:15] >> Yeah. Well, well,
[00:51:18] so what I do is I try to be conscious of
[00:51:22] the context window, which is every time
[00:51:25] you talk to an agent, this is all of the
[00:51:27] stuff that gets sent up to it. And I try
[00:51:29] to be conscious of what's in it and what
[00:51:31] do I want to have in it. And that means
[00:51:34] sometimes I do I wish I could find the
[00:51:38] link. They called it something like
[00:51:40] maybe Nikico knows like basically
[00:51:43] when you can ask a model like analyze
[00:51:46] this code and give me an overview of how
[00:51:48] this works right and then you know these
[00:51:50] four files or whatever and then you can
[00:51:52] say and now drop this information in a
[00:51:55] file called overview.txt txt or
[00:51:58] something. Basically, you you take stuff
[00:52:01] that's in the context window and you put
[00:52:02] it in a file, right? And they call it
[00:52:05] something like explicit compaction
[00:52:07] because what you're doing is you're
[00:52:09] taking, you know, not just the compact
[00:52:11] feature that every agent basically has
[00:52:13] where you just have a prompt in the
[00:52:14] background that summarize the
[00:52:15] conversation, but you instruct the agent
[00:52:18] to put specific information in a file
[00:52:20] and then in the next conversation, you
[00:52:22] can reference that file. So on the
[00:52:25] weekend I investigated a bug. I can't
[00:52:28] pull up the thread because there's curse
[00:52:30] words in it. But basically I was like
[00:52:34] figure out what this bug is. Like don't
[00:52:36] try and fix it yet. Like figure out what
[00:52:38] the bug is. And then I asked you to fix
[00:52:39] it and it failed. And then at some point
[00:52:41] I was like this is not going to work.
[00:52:44] Like we're too deep in the rabbit hole.
[00:52:45] So I said everything that you know about
[00:52:48] this bug how to reproduce it what the
[00:52:50] bug is your hypothesis to how to fix it
[00:52:52] please put this in a file called bugtxt
[00:52:56] and then in the ne I opened a new
[00:52:58] conversation I said like fix the bug in
[00:52:59] this thing right
[00:53:01] >> smart
[00:53:01] >> and that's it's not planning and it's
[00:53:03] not breaking down a feature into
[00:53:05] multiple steps but it's the same idea of
[00:53:08] using an invocation of the model to
[00:53:11] create a the distilled version of some
[00:53:14] plan or whatever data and then putting
[00:53:17] it in a new context window and say like
[00:53:19] now follow this.
[00:53:20] >> Yeah.
[00:53:20] >> Yeah. I do the same like
[00:53:22] >> that's smart.
[00:53:23] >> Go ahead, Nico. It's for me it's always
[00:53:25] I I like to produce like artifacts
[00:53:27] whether it's a plan an overview a set of
[00:53:30] hypothesis which could be the box and
[00:53:34] use them as the inputs for different
[00:53:36] models and also use it to ground it
[00:53:38] because I know like a lot of when I'm
[00:53:40] doing model testing a bunch of the
[00:53:41] models for example don't have the 1
[00:53:43] million context window and I know like I
[00:53:45] won't get this done in 200k so I put it
[00:53:48] in a file and just have it churn through
[00:53:51] it cross off the first task or the first
[00:53:53] step first commit I have, then cross it
[00:53:56] out and go to the next one, open a new
[00:53:58] context window, and it also allows me to
[00:54:00] edit it. So, I often pull it up in
[00:54:02] Obsidian and go through it and actually
[00:54:04] see whether it makes sense. And I always
[00:54:06] like I I like specifications more
[00:54:09] because they tend to be more specific,
[00:54:11] but I also like to tell it to include
[00:54:15] the code changes in pseudo code
[00:54:17] >> because then I actually can refer to it
[00:54:19] and look whether hey, does it make sense
[00:54:21] with what I know about the code base and
[00:54:23] actually look in the code as well and
[00:54:25] adjust based on that.
[00:54:26] >> Well, I love that. So, it's it sounds
[00:54:28] like we're all realizing it to it. It's
[00:54:31] good practice to create an artifact and
[00:54:33] start a new uh chat and ask the agent to
[00:54:36] refer to it. Um I try not to
[00:54:38] anthropomorphize too much, but it it
[00:54:40] kind of feels like you have this long
[00:54:42] conversation, you find the problem, and
[00:54:45] then it's like you you need a coffee
[00:54:46] break. It's like, okay, let's forget
[00:54:49] about all the messy stuff that we just
[00:54:51] talked about because a lot of it is
[00:54:52] going to be wrong and the inference of
[00:54:54] the model as it reviews that is going to
[00:54:57] get clouded, right? So why not just
[00:55:00] start fresh with bug and go?
[00:55:03] >> Yeah, a lot of you go ahead.
[00:55:05] >> I think a lot of it is also vibes like
[00:55:07] getting a feel for how well is the
[00:55:09] conversation going. Um I think what is
[00:55:13] it what he wrote it's like forcing a
[00:55:15] discussion with AI before it starts to
[00:55:17] edit. Like I do this a lot as well, like
[00:55:19] coming up with a plan, implementation
[00:55:20] details, whatever. But if I feel like it
[00:55:23] went off the rails early in the
[00:55:25] conversation, but I got it to a point
[00:55:26] where it's actually right with the plan
[00:55:28] and with with what it wants to do, I
[00:55:30] would rather write it to a file, start a
[00:55:33] new thread. So basically scratch the
[00:55:35] conversation and restart with the file.
[00:55:39] Um, so I have actually a clean thread
[00:55:42] which doesn't have these like wrong
[00:55:45] thoughts early in the conversation.
[00:55:46] Yeah, love it.
[00:55:48] >> I'll even be explicit. Sorry, Doris. Go
[00:55:50] ahead.
[00:55:52] >> My mental model is, you know, like
[00:55:55] sometimes you ask agent to go off and
[00:55:58] figure out what a bug is and it has like
[00:55:59] a bunch of stuff where it goes wrong or
[00:56:02] tries a few wrong attempts or something.
[00:56:04] And the way you have I think about it is
[00:56:07] imagine if your short short-term memory
[00:56:09] wasn't short-term. So basically,
[00:56:12] somebody sends you off on a task. Ryan
[00:56:13] says like, "Can you grab two coffees?" I
[00:56:15] go to the car. There's no gas in the
[00:56:16] car. I got to go to the gas station. Oh,
[00:56:18] I forgot my wallet at home. Can I use my
[00:56:20] phone? I got to put put the pin in
[00:56:22] the phone and whatnot. And then the the
[00:56:24] longer I go on until I'm at the coffee
[00:56:26] shop,
[00:56:27] >> I have all of this still in long like in
[00:56:31] my head
[00:56:33] >> and the guy asks me like, "What type of
[00:56:35] coffee you want?" And then you go, "I I
[00:56:38] just had to go get gas." You know, like
[00:56:40] you're absolutely right.
[00:56:42] >> I love that. I feel like or or the other
[00:56:45] analogy is um
[00:56:48] >> imagine
[00:56:51] imagine you have to do some work and it
[00:56:54] involves 15 different steps and you have
[00:56:56] one desk and you just never clean your
[00:56:59] desk up. And I mean I might offend
[00:57:00] somebody here who's listening or
[00:57:01] watching, but imagine everything just
[00:57:04] piles up on your desk and you cannot
[00:57:07] move freely because it's just all stuff
[00:57:09] that's still on your workspace, which is
[00:57:11] your desk, right? So, you got to want to
[00:57:13] clean it and get rid of the stuff that
[00:57:14] you don't need anymore.
[00:57:16] >> Amen. Y Graham, go ahead.
[00:57:17] >> I I always just uh um get really
[00:57:20] explicit, too. Like, when I start that
[00:57:21] new thread and I bring in the summary
[00:57:23] from the from the previous thread, I'll
[00:57:25] I'll even say like think about this from
[00:57:28] a from a like first principles
[00:57:31] perspective. Look at all the facts. And,
[00:57:33] you know, I try to sort of I'm almost
[00:57:34] talking to myself, right? or like so you
[00:57:37] know sort of ignore all previous
[00:57:38] instruction in a way like look at this
[00:57:41] uh from a fresh perspective and sort of
[00:57:44] deep dive and reason out why you think
[00:57:45] this might be happening um specifically
[00:57:48] we're still talking about bugs here but
[00:57:49] often um that'll maybe it's just the new
[00:57:52] context window and I'm and I'm
[00:57:53] gaslighting myself but it does feel like
[00:57:55] that that does help um because
[00:57:59] >> maybe it is just I do think that
[00:58:01] sometimes we're just talking to
[00:58:02] ourselves through these agents um and
[00:58:04] that's that's really what's happening
[00:58:05] there. But yeah,
[00:58:06] >> Erica, our head of engineering, she used
[00:58:09] uh she said like you wouldn't cut fruit
[00:58:11] on the board in which you just cut
[00:58:13] chicken, right? Like
[00:58:15] >> you don't want the debugging process to
[00:58:18] kind of make a mess of the actual food.
[00:58:22] >> As we wind out, if you take one thing
[00:58:24] away from the way this conversation is,
[00:58:26] don't cut the fruit where you cut the
[00:58:27] chicken, people. Okay? So,
[00:58:30] >> it's it's very important. So, um on that
[00:58:32] note, we're going to wind down. Uh, I
[00:58:34] want to thank all of our amazing guests
[00:58:36] uh for for hanging out with us today. I
[00:58:38] want to thank everybody for watching.
[00:58:40] Um, so thanks everybody for popping in
[00:58:41] the comments and sharing. Um, really
[00:58:44] appreciate you you checking in. Um,
[00:58:46] we're going to be doing this every
[00:58:47] Tuesday, same time, same place. Um, and
[00:58:50] we're going to share more and more uh,
[00:58:52] valuable tips for coding with agents.
[00:58:54] Um, we're going to bring up build
[00:58:55] crewers like Tim. Uh, so make sure to
[00:58:57] join buildcrew uh, at buildcrew.team.
[00:59:00] Uh, it's free. We also throw 100 bucks
[00:59:02] in your in your account if you use AMP.
[00:59:04] Um, so Tim, thanks for being here. Um,
[00:59:07] where can people find you if uh they
[00:59:09] want to follow you?
[00:59:10] >> Thanks for having me, guys. Yeah, I'm on
[00:59:12] X. My handle is Tar Productions and I'd
[00:59:16] love to connect. It's super fun. So,
[00:59:18] >> good to have you here. And you heard it
[00:59:20] here. Uh, coding is more fun than making
[00:59:22] surf movies. And Torstston and Nico,
[00:59:26] thanks for being here. Um, AMP wouldn't
[00:59:28] be alive without you. And uh we we
[00:59:31] appreciate your leadership and your
[00:59:32] thoughts. So thanks for making time,
[00:59:34] especially late Germany time. Um and
[00:59:36] Graham, thanks for having us
[00:59:37] >> all this happen. And everybody, we'll
[00:59:39] see you next time. And uh say hi on X
[00:59:42] and everywhere you are. Take care.
[00:59:44] Cheers. Thanks everyone.
