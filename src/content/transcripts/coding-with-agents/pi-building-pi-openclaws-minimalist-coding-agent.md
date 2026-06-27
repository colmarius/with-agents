---
title: "Pi Building Pi, Openclaw's Minimalist Coding Agent | Mario Zechner, Creator of Pi"
resourceId: 9
summarySlug: "coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent"
sourceUrl: "https://www.youtube.com/watch?v=DPgJjRdQWrg"
videoId: "DPgJjRdQWrg"
capturedAt: "2026-06-27T15:01:29.368Z"
channel: "The Modern Software Developer"
language: "en"
kind: "auto-generated"
durationSeconds: 5447
---

## Transcript

[00:00:00] a team of 10 or 100 engineers working
[00:00:02] for 3 months
[00:00:04] manually.
[00:00:06] They can probably [ __ ] up your code base
[00:00:08] real good, but not on the same level as
[00:00:11] 100 agents can do in 3 months. Like
[00:00:14] after 3 months with 100 agents, you
[00:00:17] >> [laughter]
[00:00:18] >> might have to rewrite your entire
[00:00:19] project.
[00:00:34] >> Hello everyone and welcome to another
[00:00:36] episode of the build system. I'm really
[00:00:38] excited to be here with Mario Zechner
[00:00:40] who is an open source extraordinaire. He
[00:00:43] is a developer of multiple decades in
[00:00:45] the open source community, the the lead
[00:00:47] maintainer and creator of Pi,
[00:00:49] an incredibly awesome coding agent
[00:00:52] Arness, which now actually powers open
[00:00:55] claw. Um outside of that he's also a
[00:00:57] partner at Arendelle, and today we're
[00:00:59] we're really excited to have him here
[00:01:01] with us to to to build something as he
[00:01:03] would do so.
[00:01:04] So So Mario, thank you for being here.
[00:01:06] Thank you for taking the time.
[00:01:07] >> Well, thanks for having me.
[00:01:10] >> Amazing.
[00:01:12] Would Would you like to start maybe by
[00:01:13] like I am so I gave you a quick quick
[00:01:15] intro on, but anything else do you want
[00:01:16] to share about your background, any any
[00:01:19] part of your life story that you feel
[00:01:21] like is is you you're excited to share
[00:01:23] or want to share about your journey in
[00:01:24] software, anything like that?
[00:01:26] >> Uh sure. Like most of us I started out
[00:01:29] because of computer games sometime in
[00:01:31] the
[00:01:32] mid-90s or so.
[00:01:34] Um
[00:01:35] eventually I leveled up and scaled up
[00:01:37] and uh
[00:01:38] got employed at a
[00:01:41] competence center trying to get
[00:01:43] scientific results into industry, and
[00:01:45] that was my
[00:01:46] first contact with machine learning, but
[00:01:48] it was pre-deep learning, so we did
[00:01:50] support vector machines and all of that
[00:01:53] that stuff.
[00:01:54] >> [clears throat]
[00:01:54] >> Had a quick stint at San Francisco in
[00:01:56] San Francisco, doing game development
[00:01:58] for a startup.
[00:02:00] Came back, became manager,
[00:02:02] then started another startup with two
[00:02:04] friends from Sweden doing compilers for
[00:02:07] iOS.
[00:02:09] Sold that, and then had a lot of free
[00:02:11] time.
[00:02:12] So, when GPT came out,
[00:02:15] 2020, I think was GPT-2, I don't
[00:02:18] remember.
[00:02:19] And then followed by the consumer-side
[00:02:20] product ChatGPT,
[00:02:23] my interest piqued because my research
[00:02:25] back in the 2000s was about natural
[00:02:27] language processing and oh my god, all
[00:02:29] of a sudden there is now a thing, a
[00:02:31] machine learning model that basically
[00:02:32] blows everything we did back then out of
[00:02:34] the water by default.
[00:02:36] And naturally, being a software
[00:02:38] developer, that also
[00:02:40] made me question whether we can use
[00:02:41] these things to assist us with coding.
[00:02:43] And since 2023, I've tried to figure it
[00:02:45] out.
[00:02:48] >> So,
[00:02:49] uh well, you've been a leading voice in
[00:02:52] in the space. Uh I'm a huge fan of your
[00:02:54] blog and and and your open-source work.
[00:02:56] And so,
[00:02:57] a lot of very strong opinions,
[00:03:00] very strong opinions [laughter] that
[00:03:01] that that might be
[00:03:03] weakly held, which which is fine. That
[00:03:05] that you know, that that's of course
[00:03:06] fine. I I think, you know, so so
[00:03:08] obviously, the focus of of our of the
[00:03:10] build system is is building, but I would
[00:03:11] love to actually spend a few minutes
[00:03:12] just
[00:03:13] go going a bit deeper into some of some
[00:03:15] of those strong opinions. They might be
[00:03:16] weakly held and and you know, kind of
[00:03:19] for the folks in the room, because I
[00:03:20] think you have a very distinct and very
[00:03:22] unique perspective on a lot of a lot of
[00:03:24] things. And and if you spend any time
[00:03:25] reading Mario's blog, which we'll share
[00:03:27] later, they are some of his very very
[00:03:29] different opinions. And and so, I I like
[00:03:31] I like the provocative stuff. Maybe we
[00:03:33] could just like start a little bit by,
[00:03:35] you know, you've been you've been in the
[00:03:36] space for a while. You've been writing a
[00:03:38] lot about coding agents. You've been
[00:03:39] building coding agents. I mean, can we
[00:03:41] get a sense just like for the vibe of
[00:03:43] today? Like, what do you what do you
[00:03:44] feel? How do you feel where where we are
[00:03:46] are where we are at right now? How
[00:03:48] things have progressed in in you know,
[00:03:50] let's say two, three years, the last 6
[00:03:53] months. Obviously, there's been huge
[00:03:54] changes since then. Just give us a sense
[00:03:56] for like, are you excited? Are you Are
[00:03:58] you happy? Are you anxious? Like, what's
[00:03:59] what's your general vibe on how things
[00:04:01] are going?
[00:04:02] >> Um we're generally always excited. You
[00:04:04] know, technology is always exciting.
[00:04:06] A little I wouldn't say concerned, but
[00:04:09] curious how things work out in the real
[00:04:11] world. Like, not only in tech, but also
[00:04:13] outside of tech, because there's
[00:04:14] definitely some societal issues that
[00:04:16] come with the technology that we need to
[00:04:18] be mindful about.
[00:04:20] Um in terms of progression, I mean,
[00:04:22] probably all of us developers started
[00:04:24] out by copying pasting stuff into
[00:04:26] ChatGPT and having it spit out things,
[00:04:28] and that became really cumbersome. And
[00:04:29] then GitHub
[00:04:31] before all that, I think GitHub had
[00:04:33] Copilot where you just press tap tap tap
[00:04:34] tap tap. And that that never quite
[00:04:36] worked for me.
[00:04:37] >> [laughter]
[00:04:38] >> I remember Nat Nat Friedman, who was in
[00:04:40] charge of GitHub back then, DMing me and
[00:04:41] giving me early access. And like,
[00:04:42] "Mario, this is the future." And I was
[00:04:44] like,
[00:04:45] I I don't I don't think so.
[00:04:47] >> [laughter]
[00:04:47] >> So,
[00:04:49] about those uh strong opinions, they're
[00:04:51] weakly held, because making any kind of
[00:04:53] predictions in this day and age is
[00:04:56] a fool's errand, I would say. Um so
[00:04:58] yeah, that didn't work for me. And then
[00:04:59] eventually, I found Cursor um back then
[00:05:02] when it wasn't quite as agentic yet,
[00:05:03] where it would
[00:05:05] Cursor itself would kind of figure out
[00:05:06] which files to add to the context and
[00:05:08] then have you do local edits real well.
[00:05:10] And they also had a brilliant, really
[00:05:11] good, still SOTA tab completion model.
[00:05:14] Um
[00:05:16] And that worked for a while for some
[00:05:18] menial tasks. And eventually, Cloud Code
[00:05:20] um was released to the general public,
[00:05:22] and that's where it kind of clicked that
[00:05:24] this is probably going to work for a lot
[00:05:26] of things. Um
[00:05:28] specifically because
[00:05:29] um Boris Cherny, the guy who invented
[00:05:32] Cloud Code, had the brilliant idea of
[00:05:35] not force-feeding the model the context
[00:05:36] that is your source code, but just
[00:05:38] giving it bash and allowing it to kind
[00:05:40] of freely roam around your file system
[00:05:42] and figure things out on on its own.
[00:05:44] Which surprisingly, at that point,
[00:05:47] it already, even though I would think
[00:05:49] that the training data, the RL training
[00:05:51] data,
[00:05:52] did not quite have as many traces in it
[00:05:55] that kind of demonstrated that to the
[00:05:57] model. So, yeah, that that's basically
[00:06:00] where it became interesting for me.
[00:06:03] I was a long-time Cloud Code user,
[00:06:04] eventually thought, I I built my own
[00:06:07] thing because Cloud Code just didn't
[00:06:09] work for me anymore because too many
[00:06:10] features, too many bugs.
[00:06:11] Still amazing product, not not not
[00:06:14] roasting anyone here.
[00:06:16] It's just that they obviously need to
[00:06:18] talk for their own mantra of
[00:06:21] using as many tokens and as little human
[00:06:22] oversight.
[00:06:23] >> [laughter]
[00:06:24] >> I I I feel it kind of shows in the
[00:06:26] product quality, and that's why I built
[00:06:28] pie, which is kind of the opposite. You
[00:06:30] you have a small or gentle core,
[00:06:32] uh which is trivial in terms of uh code,
[00:06:35] and then just enough hook points or
[00:06:37] extension points where you can basically
[00:06:39] let the model that the agent modify
[00:06:42] itself to to kind of fit your workflow.
[00:06:45] And that's the basic principle I've been
[00:06:46] following since.
[00:06:48] I see a split in the community at the
[00:06:50] moment where there is people there are
[00:06:52] people who who believe that dark
[00:06:54] factories are the future, meaning um
[00:06:56] which is right out there in the details
[00:06:58] back and then throw it in a room full of
[00:07:00] machines without the lights on,
[00:07:02] and out comes software that's uh
[00:07:05] usable.
[00:07:06] I
[00:07:07] I have reasons to believe that that's
[00:07:09] currently not working so well.
[00:07:11] Uh like I experimented with that as
[00:07:13] well, and there might be issues on still
[00:07:14] issues on my end, but I never found it
[00:07:16] to work because just from a theoretical
[00:07:18] level, what do the models learn from?
[00:07:21] They learn from all old code on the
[00:07:22] internet and a bunch of RL.
[00:07:25] So, anything you leave blank in your
[00:07:26] spec is going to get filled with that
[00:07:28] code, and the code on the internet that
[00:07:29] we put there is generally not high
[00:07:31] quality.
[00:07:33] And also, um
[00:07:34] these errors agents make, and humans
[00:07:36] make errors, too, I know. Uh they
[00:07:38] compound, and if you don't try to nip
[00:07:40] that in the bud regularly,
[00:07:43] um
[00:07:44] you just end up with a mess. So, I'm in
[00:07:46] the other camp. The other camp is these
[00:07:48] are amazing tools to speed me up as an
[00:07:50] engineer for various tasks. Um they can
[00:07:53] do things on their own as well for
[00:07:55] specific domains and problems,
[00:07:57] but I still like to be the one who's in
[00:08:00] control because ultimately I'm also the
[00:08:01] one who's liable
[00:08:03] for what's being output.
[00:08:06] >> That makes a lot of sense. I I um I'm
[00:08:08] glad you brought that up because I I
[00:08:10] will uh
[00:08:11] quote uh one of your blog posts which uh
[00:08:13] because this is an R-rated build series,
[00:08:15] you know, podcast series, I can say
[00:08:17] this, but I believe the title of the
[00:08:18] post something like slow the [ __ ] down.
[00:08:20] So, um I feel like you you're very much
[00:08:22] leaning into maybe the the other end of
[00:08:24] that extreme in a world where everyone
[00:08:26] is token maxing, trying to use as many
[00:08:28] tokens as possible. What's that sweet
[00:08:29] spot though? I mean, like I I I I
[00:08:31] understand that as the experienced
[00:08:33] developer in the room, the the
[00:08:34] curmudgeon almost if you only one one
[00:08:36] might consider it. Um what is the sweet
[00:08:38] spot between being you know, overly
[00:08:40] cautious, but also like leaning into
[00:08:41] like the what the technology can offer
[00:08:43] for us?
[00:08:44] >> Mhm.
[00:08:45] As an engineer maintaining or working on
[00:08:48] a project, you usually have a pretty
[00:08:49] good idea which parts are
[00:08:51] mission-critical and which parts are
[00:08:53] more like nice-to-haves or
[00:08:55] not as sensitive in terms of how well
[00:08:57] they are built.
[00:08:59] So, my general rule of thumb is anything
[00:09:01] that's mission-critical, anything that's
[00:09:04] involves security and so on and so
[00:09:05] forth, I still might use an agent to
[00:09:07] help me scaffold things, right? To
[00:09:10] to boilerplate and so on, but ultimately
[00:09:12] I need to have full oversight of what
[00:09:15] what's being generated here.
[00:09:17] And then there are other things like I
[00:09:19] personally never I'm not a front-end
[00:09:21] person,
[00:09:22] so I don't want to dis any front-end
[00:09:24] person, but for me front-end it doesn't
[00:09:25] matter. I never look at front-end code
[00:09:27] that the agent generates because most of
[00:09:29] the front-ends I build are just maybe
[00:09:32] something like internal dashboards or or
[00:09:34] things that help me as an engineer to
[00:09:36] get more insights into a problem, but
[00:09:38] not necessarily something that's put in
[00:09:40] front of millions of users where I need
[00:09:42] to have a higher quality standard, let's
[00:09:44] say.
[00:09:45] And for that, I I have absolutely no
[00:09:47] qualms letting the agent roam free and
[00:09:49] do whatever it wants because it probably
[00:09:50] knows better than me. I'm not a
[00:09:52] front-end engineer.
[00:09:53] >> Mhm. Mhm.
[00:09:54] That makes sense. So so it's almost like
[00:09:55] the those non-mission critical spots
[00:09:58] where it maybe has more understanding of
[00:10:01] some technology or framework or
[00:10:02] something like that. There there you
[00:10:04] trust it.
[00:10:05] >> Yeah, and also in terms like
[00:10:09] if you provide
[00:10:10] a good scaffold in your project, that
[00:10:12] means if you thought about your systems,
[00:10:14] the boundaries between systems, the APIs
[00:10:16] and so on you expose between systems or
[00:10:18] modules,
[00:10:20] and have a good separation of concerns,
[00:10:23] um then you will end up with multiple
[00:10:25] modules that have a size that kind of
[00:10:27] still works with the current context
[00:10:30] limitations, for example, of models.
[00:10:33] Which increases the chance of them first
[00:10:34] of all interesting all interesting all
[00:10:36] the information they need from your code
[00:10:37] base to solve a task and not missing
[00:10:40] bits and pieces all around the code
[00:10:42] base.
[00:10:42] Um and thereby increasing the the
[00:10:45] success success rate when giving them a
[00:10:47] specific task, like implementing a
[00:10:49] feature or fixing a bug.
[00:10:51] I found this to be quite effective, but
[00:10:53] it needs up-front design work from a
[00:10:54] human because, again, probably due to
[00:10:57] training data,
[00:10:58] this uh software design architecture
[00:11:00] kind of workflow, that is something
[00:11:02] that's very hard to encode in RL data in
[00:11:05] reinforcement learning training sets.
[00:11:07] And I think we're still lacking that
[00:11:08] data, so models currently kind of suck
[00:11:12] at architecting solutions.
[00:11:14] Um so, TLDR, I architect the thing, I
[00:11:18] can use a model to fill in code for me,
[00:11:20] but I am the architect of systems and
[00:11:22] boundaries.
[00:11:23] And once that is is in place, the model
[00:11:25] will usually have a pretty good time
[00:11:27] just figuring things out and being able
[00:11:29] to more autonomously implement things
[00:11:31] for me.
[00:11:33] >> That makes sense.
[00:11:35] Oh.
[00:11:35] One one other question again which you
[00:11:38] alluded to. You mentioned pie which I
[00:11:39] think we're going to be spending a lot
[00:11:40] more time with over the course of the
[00:11:41] series, but um you know, in a world
[00:11:44] where I think we started as a community
[00:11:46] we started by saying the model is is
[00:11:48] sort of the the model is the product,
[00:11:49] right? Like everyone is like the LM is
[00:11:51] the the thing that that is the most
[00:11:52] important thing. And then now I think
[00:11:53] it's becoming more popular say the
[00:11:55] harness is the product, right? It's all
[00:11:57] the stuff around the model. Like that's
[00:11:58] that's what's the real difference maker.
[00:12:00] I think with pie you've almost gone even
[00:12:02] one step beyond that and said you know,
[00:12:03] pie which is a deliberately minimalist
[00:12:05] harness um
[00:12:06] fascinating in that in its design in
[00:12:08] that way and that it still does
[00:12:09] incredibly well on a lot of benchmarks.
[00:12:11] So from what I understand no MCP
[00:12:13] support, Yolo kind of all the time. Uh
[00:12:18] you know, no background bash I believe.
[00:12:20] Uh so I mean a very deliberately
[00:12:22] minimalist harness and and I'm curious
[00:12:25] like what kind of motivated that design
[00:12:26] and what and it seems like you're still
[00:12:28] leaning into it a lot. So we'll have to
[00:12:30] learn a little bit more about that which
[00:12:31] is you know,
[00:12:33] even that is a just different opinion
[00:12:34] than is I think held today.
[00:12:36] >> Sure.
[00:12:37] Um yeah. So it turns out the models know
[00:12:40] what a coding agent is and can behave
[00:12:42] like a coding agent. So they know how to
[00:12:43] use bash, they know how to spawn
[00:12:45] background processes either with no hub
[00:12:47] or Tmax which is
[00:12:49] such a much better experience than using
[00:12:52] the built-in background bashes of cloud
[00:12:54] code or codex because you can actively
[00:12:56] interact with that session that bash
[00:12:58] session.
[00:12:59] For debug we can actually I can give you
[00:13:01] a 5-minute demo of that later if you
[00:13:03] want.
[00:13:04] How powerful it is to just let your
[00:13:05] agent do the background bash stuff with
[00:13:07] Tmax.
[00:13:08] Um
[00:13:09] so that's why I don't need that. Um in
[00:13:11] terms of MCP
[00:13:13] I personally don't use it so it's not in
[00:13:15] there. Um
[00:13:16] there's a lot of
[00:13:18] problems with MCP server
[00:13:19] implementations. The protocol itself is
[00:13:21] mostly fine even though David, one of
[00:13:23] the maintainers or creators of this back
[00:13:25] has now started deprecating a lot of
[00:13:26] stuff that nobody uses like sampling and
[00:13:29] elicitations, I think, and prompts and
[00:13:31] so on.
[00:13:32] Um but the MCP server implementations
[00:13:34] are usually
[00:13:35] not great. Like we used to have a GitHub
[00:13:37] MCP server that would dump 20,000 tokens
[00:13:41] of tool definitions into your context
[00:13:42] and
[00:13:44] that's not good.
[00:13:45] And now we are creating workarounds for
[00:13:46] that like um
[00:13:48] dynamic tool uh search.
[00:13:51] I Okay, I mean you can do that, but why
[00:13:55] why just not use that if there is a
[00:13:57] perfectly fine GitHub CLI, for example,
[00:13:58] that the model knows how to use?
[00:14:01] No tokens wasted in your context on tool
[00:14:03] definitions.
[00:14:04] Um
[00:14:05] yeah, and a bunch of other features I
[00:14:07] don't add because I just don't need them
[00:14:09] because the model knows what to do given
[00:14:11] just bash and file IO um
[00:14:13] up tools.
[00:14:15] And if I really really ever want
[00:14:16] something like that or if users of Pi
[00:14:18] want that, they just ask Pi to modify
[00:14:20] itself and add that feature because it
[00:14:22] usually takes like 10 minutes to add a
[00:14:24] new feature to Pi.
[00:14:26] Letting Pi do it that's
[00:14:27] itself. Like people constantly build new
[00:14:30] MCP integrations for Pi. Actually they
[00:14:33] don't anymore because somebody put it up
[00:14:34] on NPM and you can just install it as an
[00:14:36] extension and
[00:14:37] yeah, I I think we currently trying to
[00:14:40] figure out what the best way is to work
[00:14:41] with these uh tools or agents.
[00:14:44] And I don't want to force a specific
[00:14:47] workflow on people. So I built something
[00:14:49] that
[00:14:50] can modify itself to to follow your
[00:14:52] workflow. And if your workflow includes
[00:14:54] plan mode or a permission system instead
[00:14:57] of containerization or MCP, sure, you
[00:15:00] can do that with Pi. It's just doesn't
[00:15:02] come out of the box with it.
[00:15:04] >> So so the design was deliberately
[00:15:06] minimalist, build it from the ground up
[00:15:07] like one building block at a time. And
[00:15:09] so maybe the first set of principles was
[00:15:11] like, "Hey, you as the developer, you as
[00:15:13] the creator of of Pi, what what do you
[00:15:15] need for your workflow?" And that's what
[00:15:16] you built in as the first set of
[00:15:17] primitives. But then from there, people
[00:15:19] can go and kind of extend it however
[00:15:20] they want. And if they want go down
[00:15:22] their own sort of journeys in that in
[00:15:24] that way.
[00:15:24] >> Yeah.
[00:15:25] >> Basically, anytime Cloud Code or Codex
[00:15:27] comes out with a new feature,
[00:15:28] somebody posts a prompt for Pi on on
[00:15:30] Twitter, and people go and just have
[00:15:33] their Pi implement and and re-implement
[00:15:36] that feature for Pi. And that usually
[00:15:38] works fine. So, why waste engineering
[00:15:41] hours supporting
[00:15:43] a specific version of a feature that
[00:15:45] might not serve everybody equally well,
[00:15:48] instead of just letting the agents
[00:15:50] modify itself. And I think this this
[00:15:51] self-modifiable aspect of software is
[00:15:54] something that we're going to see more
[00:15:55] and more in in other types of software
[00:15:57] as well.
[00:15:58] >> Mhm.
[00:15:58] >> Mhm.
[00:15:59] >> Fascinating. Fascinating. Well, well,
[00:16:01] that's super exciting, and I think Pi is
[00:16:02] is is really unique in in in that
[00:16:04] perspective and and and has obviously
[00:16:07] achieved a lot of success because of it.
[00:16:09] Um it sounds like we're going to be
[00:16:10] working on Pi. So, I I I would love to
[00:16:12] transition at this point into, you know,
[00:16:14] the the bulk of of the the series, which
[00:16:16] is
[00:16:16] >> [clears throat]
[00:16:16] >> the episode, which is having you build
[00:16:18] something, um you know, using whatever
[00:16:21] workflow is most natural to you. And um
[00:16:25] happy to just turn it over to you. I'll
[00:16:27] I'll, you know, interject with different
[00:16:28] questions as they come up, but um it
[00:16:30] sounds like you have a few things that
[00:16:31] you want to you want to guide us through
[00:16:32] and build in.
[00:16:34] >> Sure. I would suggest we are looking at
[00:16:36] the way I work on Pi itself, because
[00:16:39] obviously I use Pi to build Pi.
[00:16:42] And let me just check if I can hide this
[00:16:45] little thing here. If I click here, I'm
[00:16:47] probably going to go
[00:16:49] Don't allow. So,
[00:16:51] you can still hear me, right?
[00:16:52] >> Yeah. Yeah. Yeah. Yeah.
[00:16:53] >> [clears throat]
[00:16:53] >> Good.
[00:16:54] So, Pi repository,
[00:16:56] the first thing you will notice is that
[00:16:58] we don't have a lot of issues open and a
[00:17:00] lot of issues closed, and the reason is
[00:17:02] that
[00:17:03] people now let their agents write issues
[00:17:05] on mass.
[00:17:07] So,
[00:17:07] um instead of keeping issues open, we
[00:17:10] automatically close all the issues, and
[00:17:12] then every day
[00:17:14] I go in or Armin goes in or another
[00:17:16] maintainer goes in, finds the last
[00:17:18] street label here, and then just pushes
[00:17:20] through all of these by opening them up,
[00:17:22] seeing if an agent wrote it. This is
[00:17:24] probably an agent who wrote it because
[00:17:26] it doesn't follow our prompt template,
[00:17:29] and then we just ignore it.
[00:17:30] >> [laughter]
[00:17:31] >> Um so, every day we go in here and pick
[00:17:33] the ones that were actually written by
[00:17:34] human. They're usually fitting a single
[00:17:36] screen
[00:17:37] and um actually make sense because a lot
[00:17:40] of agent reports as issues don't make
[00:17:42] sense.
[00:17:43] And eventually we'll end up with um open
[00:17:46] list of of issues here. Oh, it looks
[00:17:49] like GitHub actions
[00:17:51] um had a failure, so we now have issues
[00:17:53] that weren't gated auto closed because
[00:17:55] actions tested in our case.
[00:17:57] So, let's just ignore them at the top.
[00:18:00] Um these are hand reviewed issues um
[00:18:04] that we open back up and know are valid
[00:18:06] and need to be fixed. So,
[00:18:09] then once I've done this triage, I can
[00:18:11] go in here and uh start picking
[00:18:13] something and try to implement And
[00:18:16] obviously I'm going to implement that
[00:18:18] with Pi, so let me pick one that's small
[00:18:21] enough so we can actually fit it inside
[00:18:23] a session.
[00:18:25] I just need to read this really quick.
[00:18:32] >> [snorts]
[00:18:33] >> Mhm.
[00:18:35] Sorry, I got to got to use my brain real
[00:18:37] quick, so I'm going to stay silent
[00:18:39] >> take your No, take your time. Take your
[00:18:40] time. This is this is the build.
[00:18:43] >> Word movement on the stuff here. Oh, if
[00:18:45] duration over that's probably a little
[00:18:47] complicated.
[00:18:49] Pi estimate user image.
[00:18:52] Oh, this is actually a good one.
[00:18:54] So, the basic problem here is um
[00:18:57] let's see. Um
[00:18:59] Pi, when you send a request to an LLM,
[00:19:02] um
[00:19:04] there's input tokens. That's basically
[00:19:06] what you send to the LLM as context, and
[00:19:08] then there's output tokens.
[00:19:10] And sometimes you're in a state where
[00:19:12] you don't exactly know what the token
[00:19:15] count is because the provider hasn't
[00:19:19] seen the full context yet, it hasn't
[00:19:20] given you the token count yet, or for
[00:19:23] other reasons. And Pi internally needs
[00:19:25] to do token estimation. And for images,
[00:19:29] um we do estimate them to be roughly
[00:19:32] 1,200 tokens, which is your average
[00:19:34] sized image that gets inserted into
[00:19:37] a session, um which gets translated to
[00:19:40] token
[00:19:40] tokens on the LLM side. And this bug
[00:19:43] here says, um
[00:19:46] we missed a place in our code,
[00:19:48] specifically compaction, which needs to
[00:19:50] um estimate the tokens.
[00:19:53] We missed a place in our code where we
[00:19:54] don't estimate the tokens for images in
[00:19:57] user messages. So,
[00:20:00] as an old person,
[00:20:01] >> [laughter]
[00:20:02] >> I would have gone into the code and uh
[00:20:05] investigated this, tried to tried to
[00:20:07] create a reproduction case, which they
[00:20:09] already did, um confirmed the
[00:20:12] reproduction, and then just
[00:20:14] uh implement this, right? So, what I'm
[00:20:17] doing at the moment with agents is this
[00:20:19] instead, though.
[00:20:21] So, I'm just going to go into my
[00:20:23] workspace
[00:20:24] and start a new Pi session, and I have a
[00:20:26] bunch of prompt templates. Um they might
[00:20:29] be called slash commands in other uh
[00:20:31] coding agents.
[00:20:33] Um this one is called IS for issue, and
[00:20:36] it takes an argument, and that's just
[00:20:37] the URL of the issue. So, I'm going to
[00:20:40] start this up, and as you can see, it's
[00:20:42] a very short prompt that just um
[00:20:46] says how to process this issue and give
[00:20:48] me an initial analysis
[00:20:49] of the issue by trying to reproduce
[00:20:52] what's being reported in the issue, and
[00:20:54] by ignoring the issue report's analysis,
[00:20:56] if any, because if there's an analysis
[00:20:59] by user, it's usually wrong.
[00:21:01] So, I'll let the agent do all of that,
[00:21:02] and that can take a little while. And as
[00:21:04] you can see, it's using uh GitHub CLI to
[00:21:07] fetch the issue. It also does some
[00:21:09] automations like uh it adds the in
[00:21:11] progress level label automatically.
[00:21:14] It automatically assigns it to me, so I
[00:21:16] don't need to do all these manual tasks,
[00:21:18] which is very nice. And at the bottom
[00:21:21] of the terminal window, I have a little
[00:21:24] extension
[00:21:25] uh that shows custom UI,
[00:21:27] >> [snorts]
[00:21:27] >> which tells me
[00:21:29] what issue this uh Py session is about,
[00:21:32] who the submitter is, and uh clickable
[00:21:34] links, so I can go back to the issue.
[00:21:37] The reason I do it like that is because
[00:21:38] I usually have multiple of these
[00:21:40] sessions running. So,
[00:21:43] I would go in here,
[00:21:44] pick another one, session ID header
[00:21:46] instead of session ID in code response.
[00:21:47] That seems easy to fix.
[00:21:50] And I have like two to four, maybe, at a
[00:21:52] time running
[00:21:54] uh because this analysis step takes a
[00:21:55] little while. Um
[00:21:57] and then when I come back, I know
[00:21:59] immediately which of these windows
[00:22:00] corresponds to which issue, which is
[00:22:02] very nice workflow-wise.
[00:22:04] >> Mhm.
[00:22:05] >> And so, you you trust you trust the
[00:22:06] agent's analysis before that of the
[00:22:08] user. That's that's an interesting
[00:22:10] interesting point.
[00:22:11] >> Well, I mean, if you say user, what
[00:22:13] you're actually
[00:22:14] usually referring to is the user's agent
[00:22:17] who created the issue and the analysis
[00:22:19] in there.
[00:22:20] And those those agents are usually not
[00:22:23] primed with the context that my Py
[00:22:25] instances here have. That is the agents
[00:22:27] and D file inside the repository
[00:22:29] and additional documentation that gets
[00:22:31] progressively disclosed.
[00:22:33] Um so, their analysis usually misses
[00:22:36] parts that are documented in my context
[00:22:38] files, in my agents and D, and so on and
[00:22:39] so forth.
[00:22:42] That is why their analysis is usually
[00:22:43] worse. Also, sometimes the user or the
[00:22:47] agent, the the user's agent, isn't
[00:22:49] working directly off of the repository
[00:22:51] sources,
[00:22:53] but of of an old version of Py that they
[00:22:56] fetch from NPM or in version that's
[00:22:59] included currently in Open Claw only in
[00:23:01] compiled form, so maybe minified and
[00:23:03] obfuscated as a JavaScript file.
[00:23:06] So, that's why the analysis is usually
[00:23:07] bad.
[00:23:08] >> Okay. Mhm. Makes sense.
[00:23:11] >> Okay.
[00:23:12] So, this one is done and it generally
[00:23:14] tries to um output a sort of structured
[00:23:17] analysis.
[00:23:18] It's independently verified. I ran a
[00:23:22] local script against this
[00:23:25] file, this is the compaction
[00:23:26] implementation.
[00:23:27] User image only message serial tokens to
[00:23:31] result image result, that's what we
[00:23:32] expected. Same duplicated bug exists in
[00:23:37] Ah, interesting. So, I
[00:23:39] currently rebuilding parts of Pi in a
[00:23:41] separate package and so we have two
[00:23:43] compaction implementations and it told
[00:23:45] me it found the bug in the other
[00:23:47] implementation as well, which is very
[00:23:48] nice because I would have totally
[00:23:49] forgotten about that. I would have only
[00:23:52] kind of fixed it in here probably.
[00:23:54] >> Mhm.
[00:23:55] >> So, then it does a root cause analysis.
[00:23:58] Um
[00:23:59] estimate token cells use a message
[00:24:00] separately in the user branch array
[00:24:02] content only counts text and ignores
[00:24:04] image blocks. Yeah, that's easy to fix.
[00:24:06] In the custom two result branch, image
[00:24:08] blocks add for child which becomes
[00:24:12] Agent session prompt creates a user
[00:24:13] message, some image attachments into
[00:24:15] session context. Yeah.
[00:24:18] Okay.
[00:24:19] Um it lists all the relevant paths it
[00:24:22] looked into because I could
[00:24:24] theoretically open them if I wanted to.
[00:24:27] So, I'm just using our little shorthand
[00:24:29] to run bash command from inside of Pi.
[00:24:32] The agent is not being shown this.
[00:24:36] >> Mhm.
[00:24:36] >> More or less a a user side bash thing.
[00:24:39] Okay.
[00:24:40] Um
[00:24:41] and I I can trust this analysis because
[00:24:44] I know what the bug is and I know where
[00:24:46] it needs to be fixed. So, in this case
[00:24:48] it's very easy. I just say wrap, which
[00:24:51] is another prompt template and we can
[00:24:53] look into this real quick later. And say
[00:24:55] um
[00:24:56] analysis
[00:24:58] looks good to me.
[00:25:00] Fix in both places. No need for a
[00:25:03] regression test."
[00:25:05] Because it proposes as a fix to add a
[00:25:08] regression test and
[00:25:10] yeah, it's not not necessary in this
[00:25:12] case.
[00:25:13] Uh, test exact behavior, blah, blah,
[00:25:15] blah, blah, blah.
[00:25:17] Use that helper for Now, do we need a
[00:25:19] helper?
[00:25:21] Shared images made a constant helper.
[00:25:23] Actually, we're not going to wrap
[00:25:25] because wrapping means, um,
[00:25:27] implement the thing uh, to the final
[00:25:29] checks and then commit and push. I don't
[00:25:32] want to do do that. Instead, I just say,
[00:25:35] "Implement." And then I review how it
[00:25:37] implemented the fix because I have a
[00:25:38] suspicion that it's going to implement
[00:25:40] it in a way that's way too complex for
[00:25:42] the issue at hand.
[00:25:43] Okay.
[00:25:45] While it implements that, we can just
[00:25:47] look at the prompt templates I have
[00:25:49] here. So, rapid, um, takes an argument.
[00:25:52] It's just the additional instructions
[00:25:54] and tells the LLM, um, "If it was an
[00:25:57] issue or a PR, do this thing or do this
[00:26:00] that thing." First of all, um,
[00:26:03] "Add a change log entry uh, in the
[00:26:05] change log MD file so we keep track of
[00:26:08] what we changed in the project following
[00:26:10] the rules of change log entries which
[00:26:13] are uh, encoded in agents.md.
[00:26:15] Uh, then if this is a task tied to
[00:26:17] issues or PR on GitHub, um, create a
[00:26:20] comment and submit it and at the end add
[00:26:24] this comment as AI generated by this
[00:26:26] template.
[00:26:28] Um, I close issues and PRs with a
[00:26:30] comment just to have like a short
[00:26:32] summary of how this issue was fixed and
[00:26:35] which is very nice if you if you want to
[00:26:37] figure out why something changed or
[00:26:39] uh, how it changed.
[00:26:41] Um, then I tell to commit all all the
[00:26:43] files it modified and uh, commit with a
[00:26:47] closes issue number so that the issue
[00:26:49] gets automatically closed once the
[00:26:51] commit hits the remote GitHub
[00:26:52] repository.
[00:26:54] And then, do do do do. Yeah, just some
[00:26:57] resolution of if I'm not in the correct
[00:26:59] Git branch, um ask the user because this
[00:27:02] is an emergency. We should always be in
[00:27:03] the correct Git branch.
[00:27:05] And a bunch of more constraints. So, if
[00:27:08] I have multiple agents, like here,
[00:27:10] running and modifying on the same
[00:27:12] branch,
[00:27:13] we don't want them to mess with each
[00:27:15] other. So, if they both try to commit of
[00:27:18] modify the same file or
[00:27:20] resolve some Git issues or so, we don't
[00:27:21] want to want them to stomp over each
[00:27:23] other. Um
[00:27:25] An alternative to this approach, having
[00:27:26] the same having multiple agents um work
[00:27:29] on the same branch locally, is to use
[00:27:31] work trees. I I generally don't need it
[00:27:34] because I pick the issues in such a way
[00:27:35] that they are located in separate
[00:27:38] packages or file locations inside the
[00:27:40] project.
[00:27:41] Okay.
[00:27:43] So.
[00:27:44] >> And is that is that just to to I mean,
[00:27:46] cuz work trees are are something that
[00:27:47] that a lot of frameworks and platforms
[00:27:49] have been into heavily? Is that just
[00:27:51] because it's easier in terms of
[00:27:53] cognitive load to to not think about
[00:27:55] sort of the trampling? I mean, cuz then
[00:27:57] you still it is you're responsible for
[00:27:58] like figuring out that that separation
[00:28:01] that they won't trample each other um if
[00:28:02] you do pick uh
[00:28:04] related but not fully related issues.
[00:28:06] >> Yeah. Um it's a matter of how
[00:28:09] modularized your code base is. Pi is
[00:28:11] heavily modularized, so
[00:28:13] opening up two instances like that
[00:28:15] working on separate issues usually means
[00:28:16] they're working in entirely separate
[00:28:18] parts of the code base and will not
[00:28:19] touch the same files. Um so, in this
[00:28:22] case, it's safe to work in the same file
[00:28:24] location locally.
[00:28:25] >> Mhm.
[00:28:26] >> For projects that are more interwoven
[00:28:28] and that have more um
[00:28:30] interdependent um modules in them, work
[00:28:32] trees make absolute sense. Um I just
[00:28:34] found that neither harnesses with
[00:28:36] automatic work tree creation deletion
[00:28:39] nor models themselves are really good at
[00:28:40] managing work trees. So, it usually ends
[00:28:43] all always ends up as a mess.
[00:28:45] Um I haven't tried the latest codex. I
[00:28:47] heard that it's vastly improved in terms
[00:28:49] of work tree handling.
[00:28:52] The TLDR is I don't trust models to do
[00:28:54] any more complex Git operations than
[00:28:56] other than commit and push. So,
[00:28:59] what what's one of the reasons why I
[00:29:00] don't work use work trees. But, the real
[00:29:02] reason is I don't have I don't have
[00:29:05] I don't have a need for it, so I don't
[00:29:06] use it.
[00:29:08] >> Makes sense.
[00:29:10] >> Okay, so this simple issue of the
[00:29:12] missing token estimation for images in
[00:29:14] the user message is done here. And
[00:29:16] before I commit and push, I go back to
[00:29:19] my caveman mode
[00:29:21] and actually look at the code. Oh my
[00:29:23] god, how do I dare looking at the code?
[00:29:26] But, the reason is I'm pretty convinced
[00:29:27] that this built something that we don't
[00:29:29] need.
[00:29:31] For example, so the way this works is
[00:29:34] there's a general agent message which
[00:29:36] can be a message from a user, a message
[00:29:38] from the LLM, a tool result, and a bunch
[00:29:41] of other things.
[00:29:43] And those are
[00:29:44] identified by the the role.
[00:29:47] So, the problem was that the user for
[00:29:49] user messages, we only estimated the
[00:29:53] text content, but we never estimated the
[00:29:56] images. So, what it did here is
[00:30:00] >> [snorts]
[00:30:01] >> it wrote a estimate text and image
[00:30:04] content chars file sorry, function that
[00:30:07] basically is a replication of what we
[00:30:09] have here
[00:30:10] with just these three lines in addition
[00:30:13] to what we already have.
[00:30:15] And I guess the reason it did that is
[00:30:17] because it can reuse it for the tool
[00:30:19] result, which I guess it's fine.
[00:30:22] But, sometimes the model would just
[00:30:24] factor out something like this into a
[00:30:25] function and that function then only has
[00:30:27] a single call site like here.
[00:30:29] And if you do that a lot or the agent
[00:30:32] does that a lot, your files and code
[00:30:34] base just grows without reason because I
[00:30:37] generally prefer inlining this if
[00:30:39] there's only a single um,
[00:30:40] call site.
[00:30:42] So, what I'm doing trying to do with my
[00:30:43] review here is keep complexity low. Um,
[00:30:46] if I see the model doing something dumb
[00:30:48] in terms of duplicating code or, um,
[00:30:50] introducting introducing abstractions
[00:30:53] that we don't need, at least not yet,
[00:30:55] uh, then I will kick it in the butt and
[00:30:57] say, um, don't do it, fix it. So, I
[00:31:00] could, for example, go in here and say,
[00:31:03] um,
[00:31:03] please in
[00:31:05] in line this call site.
[00:31:08] Uh, and this tool this Pi review tool is
[00:31:10] just an extension I wrote, by coded for
[00:31:13] Pi,
[00:31:14] um, which allows me to to annotate a
[00:31:16] diff, um,
[00:31:17] and then feed back the
[00:31:19] Whoopsie.
[00:31:21] Feedback my feedback,
[00:31:23] uh, as in line annotations. Then if I
[00:31:25] click review, finish review, uh, all my
[00:31:28] annotations get back fed back in to the
[00:31:31] editor. And if I now hit enter,
[00:31:34] the agent would just make the
[00:31:35] modifications I asked for. Not going to
[00:31:37] do this here because I'm actually just
[00:31:39] need to check the second implementation.
[00:31:43] Um, this looks good.
[00:31:45] And we have the same here.
[00:31:51] Yeah, both of these look fine.
[00:31:53] So, I'm actually happy with this. Um,
[00:31:56] so, I can now actually say, okay, I'm
[00:31:58] I'm ready. I know the implementation is
[00:32:00] good.
[00:32:01] Um, I want to wrap up this issue or this
[00:32:03] session and I use this prompt template I
[00:32:05] talked about earlier. And
[00:32:08] doesn't need any instructions. So, what
[00:32:10] it now now does is it, um, updates the
[00:32:12] change log, adds this as a bug fix with
[00:32:15] a reference to the issue.
[00:32:17] Um, it adds a comment on GitHub in,
[00:32:21] um,
[00:32:21] just summarizing what we did, commits
[00:32:23] all the files, um,
[00:32:25] and then uses a closes thing so that the
[00:32:28] issue gets automatically closed. So, I
[00:32:30] can just open this up here so we can
[00:32:31] watch it happen in real time. So,
[00:32:33] modifies the change log,
[00:32:36] >> [cough]
[00:32:38] >> and usually wouldn't want watch it doing
[00:32:41] that, right? I I would probably already
[00:32:43] move to another session and come back to
[00:32:44] this eventually and close it out.
[00:32:47] Um
[00:32:48] >> Do you typically um so in this situation
[00:32:49] where you said you you've seen this kind
[00:32:51] of issue repeat itself of effectively
[00:32:53] code duplication where it's it's like
[00:32:55] verbatim copy pasting um lines across
[00:32:57] files. Uh is this one of is this
[00:32:59] situation where you would try put this
[00:33:01] into an agent's MD or some sort of like
[00:33:03] a um you know, basically allow the pi
[00:33:06] agent to not make that mistake in the
[00:33:07] future if you're seeing that mistake
[00:33:09] over and over?
[00:33:10] >> Uh yeah, some of these issue can be
[00:33:12] worked around or can be um prevented by
[00:33:15] just having good instructions in the
[00:33:16] agent's MD. The problem with agent's MD
[00:33:18] is that no model is actually bound to
[00:33:20] implementing it or adhering to it all
[00:33:22] the time. So, even though I might have
[00:33:24] notes on complexity and avoiding single
[00:33:27] line single use functions and all of
[00:33:29] that, the model is just so RL trained
[00:33:32] into that kind of
[00:33:33] add a lot of code mode that it often
[00:33:36] just ignores agent's MD. And again,
[00:33:38] maybe that's a skill issue on my end,
[00:33:39] but my agent's MD is very bare bones and
[00:33:41] just says exactly what the model should
[00:33:43] adhere to. We can actually take a look
[00:33:45] at that in a in a second.
[00:33:47] Uh this is currently basically
[00:33:49] finishing, so it made the changes to the
[00:33:51] change log. It commented on the issue
[00:33:53] giving um
[00:33:55] us a summary of how we fixed it.
[00:33:58] Um then runs the final checks which
[00:34:00] includes linting, type checking, and I
[00:34:02] think I also enabled um
[00:34:04] some smoke tests.
[00:34:06] And
[00:34:08] um there's the commit with the closest
[00:34:10] message. GitHub is currently under load,
[00:34:12] so it didn't show the commit happening,
[00:34:14] I guess.
[00:34:16] Oh, okay, the commit failed because
[00:34:18] somebody pushed something else upstream.
[00:34:20] So, we now need to rebase.
[00:34:23] And this is probably changing a merge
[00:34:25] conflict in change log. Yeah.
[00:34:28] Again, I would never watch this.
[00:34:30] >> [laughter]
[00:34:30] >> I'm just putting it on screen so you see
[00:34:32] what's happening.
[00:34:33] >> For sure. For sure.
[00:34:33] >> Um
[00:34:35] >> So it also do you merge conflict? Well,
[00:34:37] the tree tries to. It's really bad at
[00:34:39] resolving merge conflicts.
[00:34:42] >> [snorts]
[00:34:45] >> And once it has that it gets pushed
[00:34:47] and there we go.
[00:34:50] Resolved rebased and push. Come on. Oh,
[00:34:54] it does not check.
[00:34:55] Yeah.
[00:34:56] >> What is your model of choice? I mean and
[00:34:58] and how often do you update? Cuz I hear
[00:35:00] like the the driving model here is is
[00:35:01] like an Opus model or or
[00:35:04] >> Um the model is GPT 5.5. GPT 5 high.
[00:35:08] Yeah, by the up may I codex subscription
[00:35:11] thing.
[00:35:12] >> Mhm.
[00:35:12] >> Um that's usually my daily driver. If if
[00:35:14] I'm doing any front end work, again, I
[00:35:16] don't care about front end.
[00:35:18] >> [laughter]
[00:35:18] >> Or if I do any prose that is
[00:35:20] documentation or
[00:35:23] whatever kind of plain
[00:35:25] normal text that's not code, I would
[00:35:27] usually go for a cloud model because
[00:35:29] they're really good at writing prose.
[00:35:31] That's
[00:35:32] still identifiable as LLM slop, but
[00:35:35] salvageable LLM slop.
[00:35:37] Uh GPT is really bad at writing prose.
[00:35:39] Um
[00:35:40] Oh, but yeah, generally I ping pong
[00:35:42] between GPT and Claude Opus, um
[00:35:44] but then about 95% on GPT at this point.
[00:35:47] Um I do dabble in local models or open
[00:35:50] weight models every now and then now
[00:35:52] that they become more powerful. I've had
[00:35:54] very good experience like this flow we
[00:35:56] just did here. Um
[00:35:57] this could be easily done with Kimi K2.6
[00:36:00] or DeepSeek before flash even.
[00:36:03] Um
[00:36:04] So I regularly make sure I'm keeping up
[00:36:06] to date with the latest open weight
[00:36:07] models.
[00:36:09] And I think ultimately a lot of the work
[00:36:11] I'm currently doing in Pi
[00:36:13] could be done with an open weight model.
[00:36:15] Um that is kind of my goal, setting that
[00:36:17] up eventually. Um so yeah,
[00:36:20] just going back to close the loop on
[00:36:21] here.
[00:36:22] Um
[00:36:23] so yeah, it followed the wrap up um,
[00:36:26] script or prompt template to a T. It
[00:36:28] posted a comment. It did a commit, which
[00:36:31] in its commit message has a closes and
[00:36:34] the hash, um,
[00:36:36] issue number here. So, that issue gets
[00:36:38] automatically closed.
[00:36:40] Uh, the label stay. Uh, so I just know
[00:36:42] that this was actually processed at some
[00:36:44] point. And yeah, we are pretty much
[00:36:46] done. Um,
[00:36:48] you will see, um,
[00:36:50] a lot of, I don't think Ghost has search
[00:36:53] yet. No.
[00:36:54] You will see there's a lot of NPM run
[00:36:56] check calls here. Um, and what this does
[00:36:59] is, as I said earlier, formatting,
[00:37:01] linting, and type checking, and some
[00:37:02] smoke tests.
[00:37:03] >> Mhm.
[00:37:04] >> And that kind of leads to the question
[00:37:06] before with agents and the
[00:37:08] Um, let's see here.
[00:37:11] Let me give you a better view of that.
[00:37:13] >> Mhm.
[00:37:14] >> In plain text. So,
[00:37:16] all my projects basically have something
[00:37:18] like this layout for the agents and the
[00:37:21] I usually start with the style I want
[00:37:23] the model to communicate um, with with
[00:37:26] me, which is just very technical Star
[00:37:28] Trek computer. Uh, please don't sick of
[00:37:30] being a sick fan. Just give me the the
[00:37:32] straight details and nothing else. I
[00:37:34] don't need niceties.
[00:37:36] Um,
[00:37:38] and I also ask it to be, like, a little
[00:37:41] bit confrontational. Um,
[00:37:42] this doesn't work
[00:37:44] >> [laughter]
[00:37:44] >> um,
[00:37:45] most of the times, but sometimes the
[00:37:47] model will actually start pushing back.
[00:37:49] Um,
[00:37:49] models have a tendency to agree with
[00:37:51] every single thing you say,
[00:37:53] which can lead you to very dark code
[00:37:56] base, um,
[00:37:57] states
[00:37:58] if you just trust the model to tell you
[00:38:01] you're amazing. What you have designed
[00:38:03] is awesome. Uh, don't do that. Uh,
[00:38:06] ideally you have an adversarial
[00:38:07] adversarial model that actually roasts
[00:38:10] you.
[00:38:11] Think Matt Peacock. I forgot his name.
[00:38:14] Has a has a has a
[00:38:15] roast me skill and
[00:38:17] Yeah, and it roast me and yeah.
[00:38:20] Um,
[00:38:21] so, that's a good idea. Actually, Put
[00:38:23] put the model into an adversarial role
[00:38:25] and
[00:38:27] ignore your feelings and emotions for a
[00:38:28] little while while it tells you you suck
[00:38:30] or or makes you realize that you
[00:38:32] understand that you understand much less
[00:38:34] of your code base than you actually
[00:38:35] think you understand because you let
[00:38:36] your agent do a lot of things.
[00:38:38] Um
[00:38:40] It becomes a problem. Like, I have a lot
[00:38:42] of I have a lot of friends in the
[00:38:43] industry in big and small companies and
[00:38:45] they kind of are unhappy with the state
[00:38:47] of their code bases after 3 months of
[00:38:49] agentic coding.
[00:38:51] >> [laughter]
[00:38:51] >> Um still understanding your code base,
[00:38:54] not maybe line by line, but at least on
[00:38:57] on module boundaries is still an
[00:38:58] important thing to do. Um just because
[00:39:01] it also allows you to better instruct
[00:39:03] your agent. Um
[00:39:05] If I if I know exactly where things are,
[00:39:07] it's very easy to pinpoint or give the
[00:39:09] agent the context it needs to actually
[00:39:11] do its task and not only rely on the
[00:39:13] agentic search where it tries to find
[00:39:16] things itself
[00:39:17] because it by default doesn't know where
[00:39:20] things are and might miss things. Um
[00:39:22] that's a problem from information
[00:39:24] retrieval called recall.
[00:39:26] The agent the agentic search usually has
[00:39:28] very low recall, especially big code
[00:39:30] bases, because the agent will just
[00:39:32] give up searching for more stuff
[00:39:33] eventually. And if you if you don't know
[00:39:36] what it has in its context after that
[00:39:38] search,
[00:39:40] it might not have the thing in it that's
[00:39:41] needed to to implement the task you gave
[00:39:43] it in a good way.
[00:39:45] So, back to the agent SMT. Um
[00:39:47] conversational style, just be the
[00:39:49] starter computer, don't babble. Uh code
[00:39:52] quality, um these are just suggestions
[00:39:55] because again, agent SMT is not a hard
[00:39:57] rule for the model. It might especially
[00:39:59] if you're long it's a long session, it
[00:40:00] might just start ignoring these.
[00:40:03] Um so, these are reinforced most of
[00:40:05] these are reinforced with uh linting and
[00:40:08] uh type checking. That's
[00:40:11] that the model actually does.
[00:40:14] Call into wire this command, which is
[00:40:16] the next section. Um, so, NPM run check
[00:40:18] it after code changes, it should always
[00:40:21] run this. And interestingly enough,
[00:40:23] I have not seen a single model actually
[00:40:25] fail at that. Um,
[00:40:27] that means uh
[00:40:28] I've never seen a model forget doing
[00:40:30] that after it has done a bunch of code
[00:40:32] changes.
[00:40:33] Which just tells me that this is part of
[00:40:35] the RL training.
[00:40:37] So,
[00:40:39] this is why this rule in Agent-MD is
[00:40:40] never ignored by the model, neither by
[00:40:43] GPT nor by Kimmy. So, even open weights
[00:40:45] models will not forget about this.
[00:40:47] But, they will happily they will happily
[00:40:49] forget about, for example, no inline
[00:40:51] imports is a TypeScript code base.
[00:40:53] Models will ignore this all the [ __ ]
[00:40:55] time. Because apparently in the training
[00:40:57] data, inline imports like this are super
[00:41:00] represented. So, it's really hard to
[00:41:02] combat that with just the Agent-MD.
[00:41:05] Um, so, again, the linter then enforces
[00:41:07] that on a deterministic level.
[00:41:09] Um, but I still have this in here
[00:41:11] because if the model remembers this and
[00:41:13] if the model doesn't do this, I save a
[00:41:15] round trip because the model doesn't
[00:41:17] first write the import, the inline
[00:41:19] import, then the checker runs and tells
[00:41:21] it that's wrong, fix it, then it has to
[00:41:22] go back and fix that up. No, instead it
[00:41:25] does a single turn where it writes the
[00:41:26] top-level import, and then the checker
[00:41:28] is happy, and we save some tokens, which
[00:41:30] is nice.
[00:41:31] >> Mhm.
[00:41:32] >> So, yeah, what else is in here?
[00:41:34] Um,
[00:41:36] just some instructions on how to do
[00:41:38] things in a model like run the tests and
[00:41:40] so on.
[00:41:41] Um, a section on security because since
[00:41:43] a lot of users are using Pi also for
[00:41:46] open claw, we want to ensure that we're
[00:41:48] not getting shy who looted.
[00:41:51] That is um
[00:41:52] having packages poisoned with malware.
[00:41:56] So, we we enforce a very specific
[00:41:58] TypeScript Node.js NPM way of ensuring
[00:42:01] that our dependencies are fixed and
[00:42:03] pinned across the entire dependency
[00:42:06] tree. And that just basically tells the
[00:42:08] model to to reinforce that with scripts.
[00:42:10] But, again, this is also um part of um
[00:42:14] a pre-commit hook, so it doesn't need to
[00:42:16] rely on the model to actually adhere to
[00:42:17] this. The system deterministically will
[00:42:20] run these checks as well.
[00:42:22] >> Mhm.
[00:42:22] >> Uh
[00:42:24] some instructions on Git, what to do and
[00:42:26] what not to do,
[00:42:28] um
[00:42:28] how to handle issues and PRs on a very
[00:42:31] top level. This one is specific to the
[00:42:33] terminal user interface. Um when I
[00:42:35] implement terminal user interface
[00:42:37] features, I want the model to be able to
[00:42:39] automatically smoke test that, or rather
[00:42:42] smoke test that at all. So, in this
[00:42:44] case, I tell it use a tmux session um to
[00:42:47] spawn Pi from source, and then interact
[00:42:50] with that session, and and basically get
[00:42:53] a screenshot. So, this is the terminal
[00:42:55] terminal um equivalent to
[00:42:58] uh Playwright MCP for the browser,
[00:43:00] basically.
[00:43:01] >> Right.
[00:43:02] >> But instead of a MCP, it's just tmux,
[00:43:05] because that's all you need.
[00:43:06] Um yeah, more sections, changelog, um
[00:43:10] how to do a release, and that's
[00:43:12] basically it. Uh and at the end I say,
[00:43:14] "If user instructions conflict with any
[00:43:16] rule in this document, ask for explicit
[00:43:19] confirmation before overriding." Which
[00:43:21] is kind of funny, uh but it's necessary
[00:43:22] because GPT will stick to a lot of this,
[00:43:26] uh and refuse to go against it, even if
[00:43:28] I ask it to. So,
[00:43:31] I I I had to add this little override
[00:43:33] here for that to work.
[00:43:35] >> Mhm.
[00:43:36] >> Okay.
[00:43:37] >> You You had one comment you made um
[00:43:39] as you were talking about you you know,
[00:43:41] friends and colleagues and and I've I've
[00:43:43] heard this as well of folks who uh get
[00:43:45] very unhappy with the state of their
[00:43:46] code base. It becomes [clears throat]
[00:43:47] hard for them to understand changes or
[00:43:50] or kind of contextualize changes because
[00:43:52] of 3 months of agentic coding and
[00:43:53] letting it kind of run free. Curious if
[00:43:55] you have any like fixes for this, or
[00:43:57] like how do you how do you What do you
[00:43:57] recommend in those situations where
[00:44:00] friends, colleagues are complaining
[00:44:01] about this the sorry state of their code
[00:44:03] base 3 months into the agentic loops?
[00:44:06] >> I have a lot of sympathy
[00:44:08] because I've been there as well.
[00:44:10] And
[00:44:11] um
[00:44:12] well,
[00:44:13] I think what I I mostly suggest is just
[00:44:15] if you have the time and sometimes you
[00:44:17] don't because management hates you.
[00:44:19] If you have the time, go back in and
[00:44:20] refactor ruthlessly. There's just no way
[00:44:23] around that. Like uh
[00:44:25] the same was true before with human
[00:44:27] generated code. If you coded yourself
[00:44:29] into a corner um and you
[00:44:31] you figure out that current architecture
[00:44:33] code structure no longer serves your
[00:44:35] product or is
[00:44:36] even hostile to the way you develop,
[00:44:38] you need to take the time. You need to
[00:44:40] get the resources to fix that. And the
[00:44:42] same is true with code bases that have
[00:44:44] been slopped up with agents. The problem
[00:44:46] and the difference is that
[00:44:49] the amount of slop you can generate
[00:44:51] through agents is vastly more
[00:44:53] uh is vastly bigger than the amount of
[00:44:56] equal shitty human code uh that could be
[00:44:59] generated in the same same time time
[00:45:02] frame.
[00:45:03] So, if you have a team a team of 10 or
[00:45:05] 100 engineers working for 3 months um
[00:45:08] manually,
[00:45:10] they can probably [ __ ] up your code base
[00:45:12] real good, but not on the same uh level
[00:45:14] as 100 agents can do in 3 months. Like
[00:45:18] after 3 months with 100 agents, you
[00:45:20] >> [laughter]
[00:45:21] >> might have to rewrite the entire
[00:45:23] project. Let's put it that way.
[00:45:25] Uh just because they generated like a
[00:45:27] million lines of code instead of 100K
[00:45:29] that the human engineers could have
[00:45:31] created in the same time horizon.
[00:45:33] The good news is that agents can help
[00:45:35] you refactor things. And actually, that
[00:45:37] might be a good segue into just trying
[00:45:40] to refactor a wide slop project of mine
[00:45:42] that um I've built over the weekend.
[00:45:45] >> Sounds fun. But one uh one really quick
[00:45:47] side question on something you said
[00:45:49] earlier, where you had a you had this
[00:45:50] bifurcation point, where as you were
[00:45:52] about to implement your fix, you were
[00:45:54] either going to use the rapid issue uh
[00:45:56] the the command rapid command or you
[00:45:58] were going to just issue the command
[00:45:59] directly. And you knew that you had this
[00:46:02] intuition that you were going to There
[00:46:03] it better to to issue it directly rather
[00:46:05] than use the the more involved um
[00:46:07] command that goes through the commits
[00:46:09] and adds a commit and all these things.
[00:46:11] How did you have that sense that you
[00:46:13] should pick one over the other?
[00:46:15] >> Okay, so in this case I actually picked
[00:46:16] the one that does not commit because I
[00:46:20] I felt like the model is likely going to
[00:46:22] introduce an abstraction I don't want in
[00:46:24] the code, thereby making it more
[00:46:26] complex.
[00:46:27] Uh that was just based on my gut feeling
[00:46:30] and previous experience with the model.
[00:46:31] Like for this type of of issue, where
[00:46:34] the fix is really small,
[00:46:36] the model, at least GPT, sometimes has
[00:46:38] this inherent urge
[00:46:41] to make the fix more complex than it
[00:46:43] needs to be. So, possibly again because
[00:46:45] in RL it was uh it was um
[00:46:49] it it got um
[00:46:51] it got a treat when it did well in terms
[00:46:53] of complexity and it got a notice bad if
[00:46:55] it didn't produce a complex enough
[00:46:57] solution. So, based on experience I
[00:46:59] thought that GPT might actually [ __ ]
[00:47:01] into the code base here
[00:47:03] and create more lines of code that are
[00:47:05] unnecessary. So, I just told it to
[00:47:07] implement, so I don't have any commits.
[00:47:09] I just have the local fine changes, so I
[00:47:11] can review it them uh manually. And if
[00:47:14] it's good, then I can still wrap it up
[00:47:17] and have to commit and push. Um so
[00:47:18] again, just a gut feeling based on my
[00:47:21] experience with the model, but also
[00:47:22] based on my knowledge of the code base
[00:47:24] and what I know it takes to fix this
[00:47:27] issue in terms of complexity.
[00:47:29] >> Mhm. Mhm. That makes sense, yeah.
[00:47:32] >> Yeah.
[00:47:34] All right. Um
[00:47:35] let me close this down.
[00:47:38] I think the takeaway from the last
[00:47:39] session is that I automate a lot of
[00:47:41] menial things, like just clicking in the
[00:47:43] GitHub UI or writing these comments that
[00:47:46] nobody other than me will ever read
[00:47:47] again.
[00:47:49] Um and then having guardrails in terms
[00:47:51] of deterministic um checkpoints, where
[00:47:54] some deterministic process or program
[00:47:57] checks the model output and tells us
[00:47:59] you're wrong, you need to keep going and
[00:48:00] and fix this thing.
[00:48:02] Um, but other than that, there's no
[00:48:03] magic to it as you saw. Like, I I'm a
[00:48:06] caveman when it comes to agentic coding,
[00:48:08] basically, compared to a lot of my
[00:48:09] peers.
[00:48:11] >> [laughter]
[00:48:12] >> That can be effective. Uh, that's
[00:48:14] clearly the case.
[00:48:16] >> Um, so, okay. Um, maybe, um, since
[00:48:20] people will probably be familiar with Pi
[00:48:21] because we've seen it, let me just give
[00:48:23] you a quick demo of what this app
[00:48:25] actually is. It's super easy to explain.
[00:48:27] Um, I built a little, um,
[00:48:30] I built a little robot for my boy over
[00:48:32] the weekend,
[00:48:34] um,
[00:48:36] which uses Pi as the as the agent or the
[00:48:38] brain, so to speak.
[00:48:40] >> Mhm.
[00:48:40] >> And I repurposed,
[00:48:43] so this is the little robot.
[00:48:45] >> That's cool.
[00:48:48] >> Oh, yeah. I'm asking it who is the
[00:48:50] creator of Pi and blah blah and
[00:48:52] eventually
[00:48:56] it can rotate and take photos and
[00:48:59] maybe answer questions about about the
[00:49:02] environment.
[00:49:03] Here I ask it to basically do a 360, uh,
[00:49:07] environment photo thing.
[00:49:10] And, yeah, that's it. And it was
[00:49:13] basically built by buying a 9-euro toy
[00:49:16] uh, using violence to repurpose
[00:49:18] [laughter] its head. I just exposed the
[00:49:21] just exposed the motor
[00:49:23] and re-reverse engineered the PCB, uh,
[00:49:26] figured out that this is the motor
[00:49:27] driver and that just need these two pins
[00:49:29] to connect to my phone some somehow,
[00:49:31] which is the the sensor and motor driver
[00:49:35] of the bot.
[00:49:36] This is the built-in brain, so
[00:49:40] naturally, I removed the built-in brain
[00:49:43] and replaced it with this, which talks
[00:49:45] directly to the motor driver.
[00:49:48] Some soldering involved. Um, then I
[00:49:50] built the brain, which is just a web app
[00:49:53] that can control a USB device, which is
[00:49:55] this here. And through controlling this
[00:49:57] USB device, it can talk to the motor
[00:49:59] controller, which in turn can make the
[00:50:01] robot turn and move forward.
[00:50:03] And then my wife fixed my mechanical
[00:50:06] design issues and said this is how you
[00:50:07] mount everything.
[00:50:09] >> [laughter]
[00:50:09] >> So
[00:50:10] uh,
[00:50:11] there's that. And then some arts and
[00:50:12] crafts.
[00:50:14] And this is the final result, basically.
[00:50:17] >> That's awesome.
[00:50:17] >> scrappy, but it works. And it took me
[00:50:19] like, I think, 12 hours in total. So,
[00:50:22] yeah.
[00:50:23] >> That's awesome. [snorts]
[00:50:25] >> And it's a great hit with all the kids
[00:50:27] in the hood. Um, so I have it running
[00:50:29] now.
[00:50:31] I have it running now locally, so I can
[00:50:33] actually run it locally. And this is the
[00:50:35] terrible name and the terrible user
[00:50:37] interface because GPT wrote this front
[00:50:39] end, and GPT is very bad at front end.
[00:50:42] Um
[00:50:44] And I started it up here. Let me just
[00:50:47] uh, split this up. Okay.
[00:50:50] So, I will assert my right.
[00:50:53] Yeah, pi pi pi pi pi.
[00:50:54] >> [laughter]
[00:50:57] >> I should have added a second P because
[00:50:59] this way it uh
[00:51:01] >> [laughter]
[00:51:02] >> It's like what a what a child would say
[00:51:04] to a uh yeah.
[00:51:06] male gentleman.
[00:51:07] >> [laughter]
[00:51:07] >> That's right. That's right.
[00:51:10] >> Totally incidental, accidental.
[00:51:13] So, anyways.
[00:51:15] Um, this project was entirely wiped
[00:51:18] stopped. Like it was just
[00:51:19] while I was soldering, I basically
[00:51:21] screamed into a microphone and had voice
[00:51:24] recording. I I have a little um
[00:51:27] a little uh custom-made local um
[00:51:30] speech-to-text engine
[00:51:32] based on Whisper
[00:51:33] because I hate sending my audio data to
[00:51:35] some service in the cloud. And then I
[00:51:37] could just press a little button and
[00:51:38] talk into the computer. And that could
[00:51:40] also turn into a in into a prompt here.
[00:51:42] I'm not demonstrating that because it
[00:51:44] apparently interacts badly with the
[00:51:45] current microphone. so
[00:51:48] Anyway, so I was soldering and while I
[00:51:50] was soldering I was screaming into a pie
[00:51:51] session that created the user interface,
[00:51:54] which you can start here.
[00:51:57] Um, so it's it's just this
[00:52:00] face and it would react to speech. So I
[00:52:03] can say, "Hello, how are you going
[00:52:04] today?"
[00:52:07] And then it thinks.
[00:52:09] And eventually I get voice back.
[00:52:13] Or not, because the service is down.
[00:52:16] Or it's loading the local uh
[00:52:18] text-to-speech
[00:52:19] server.
[00:52:22] Uh whatever. Uh you saw it in the video,
[00:52:23] it kind of works most of the time. Um
[00:52:25] the problem is it was 100% web socket.
[00:52:27] So there were two files, basically.
[00:52:31] There was one server file, server.ts,
[00:52:34] and one client file, and there's still
[00:52:36] one client file.
[00:52:37] So the entire user face interface is a
[00:52:40] single index.ts file.
[00:52:44] Oh, let's think back.
[00:52:46] Oh god, let me let me close this. So.
[00:52:49] Uh so yeah, this is bad, right? I mean,
[00:52:51] I I I'm not sure um
[00:52:53] since you're
[00:52:55] a professor, as I understand, you're
[00:52:56] probably not working on too much
[00:52:58] production software, um but mostly
[00:53:00] research software, and there it might be
[00:53:02] good to have this kind of air talk
[00:53:04] thing.
[00:53:05] I hope I didn't offend.
[00:53:06] >> [laughter]
[00:53:06] >> It's only 1,300 lines. That sounds
[00:53:08] reasonable to me.
[00:53:10] >> It would be better if it was untyped
[00:53:11] Python, right? Then it would be even
[00:53:13] worse.
[00:53:15] >> [laughter]
[00:53:18] >> So yeah, you you have all kinds of
[00:53:20] coding there, like here's the code for
[00:53:22] accessing this USB device, which then
[00:53:24] can bit bang the motor driver, the H
[00:53:26] bridge,
[00:53:27] to turn on and off the the motor. It's
[00:53:30] just smack in the middle of this file.
[00:53:32] And
[00:53:33] um yeah, what else?
[00:53:36] Motor requests from the server, which is
[00:53:38] running on my machine. Yeah, it's all a
[00:53:40] mess.
[00:53:41] And the same was true for the server and
[00:53:43] that I split up yesterday. Sadly, I
[00:53:45] don't have the session any I I do have
[00:53:47] the session but going through it would
[00:53:48] be would be a little boring.
[00:53:51] Um but the way I did this was basically
[00:53:54] I started by looking into how the code
[00:53:57] is structured and then just ripping out
[00:54:00] parts of that big fat thing into a
[00:54:03] separate module.
[00:54:04] And eventually I ended up with this
[00:54:05] structure for the server and I would
[00:54:07] suggest that we do the same for the
[00:54:08] client now.
[00:54:10] And this is more um
[00:54:13] unstructured gigantic coding, I would
[00:54:14] say.
[00:54:15] >> Mhm.
[00:54:15] >> Because I currently have zero
[00:54:17] understanding of this code.
[00:54:19] Ideally, I would not have to look into
[00:54:21] this code but since I'm now on your
[00:54:23] video thingy,
[00:54:24] I have to look at this code so thanks
[00:54:26] for that.
[00:54:28] Um so, let's start and again, no magic.
[00:54:31] I'm just going to
[00:54:34] um
[00:54:35] say what we're doing here. It would be
[00:54:37] nice if I could get this running. Let me
[00:54:39] try recent.
[00:54:40] Because then I don't have to type. We're
[00:54:42] going to
[00:54:43] just talk into this thing.
[00:54:46] Okay. Hello, hello. No, apparently that
[00:54:49] doesn't work. But in any case,
[00:54:51] so
[00:54:53] Okay. Like the
[00:54:55] server
[00:55:01] >> [snorts]
[00:55:02] >> index.js and client
[00:55:04] um
[00:55:14] server
[00:55:32] So, basically I'm asking it to give me
[00:55:34] an overview of what the client is
[00:55:35] actually doing, how it communicates with
[00:55:37] server, and they also tell me to read
[00:55:39] the entire source code of the the server
[00:55:41] side.
[00:55:42] Because I know it fits into context,
[00:55:44] it's probably only 20% of GPT-5.5's
[00:55:47] uh 270k tokens.
[00:55:49] >> Mhm.
[00:55:50] >> Uh and it's good for the model to have
[00:55:51] the entire the entire source code in
[00:55:53] context, so it can kind of figure out
[00:55:55] how it relates to the client. This will
[00:55:57] not work for uh an
[00:55:59] a an actual code base. Um but in this
[00:56:02] case, it works, so that's nice.
[00:56:04] >> Mhm.
[00:56:05] >> Okay. And now we wait for it to read all
[00:56:07] the sensors.
[00:56:14] And the basic goal here is then to kind
[00:56:16] of I I already have a pretty good idea
[00:56:18] of what we need to do. So, for example,
[00:56:20] these tools I get give to the agent. Um
[00:56:23] I have, for example, a photo tool.
[00:56:27] And the photo tool on this This is the
[00:56:28] server side version of the photo tool
[00:56:31] that's being given to
[00:56:33] the agent.
[00:56:36] Let's see. It's here.
[00:56:38] I have to create robot tools, so I
[00:56:40] create the model motor tools, the photo
[00:56:42] tool, a web search tool, um
[00:56:44] page content tool. It's just a fetch
[00:56:46] tool, basically. And a memory tool.
[00:56:48] Those are the tools the robot has. The
[00:56:49] robot brain runs on my laptop. And the
[00:56:53] periphery is sort of motors the motor
[00:56:56] and the photo tool, they actually run on
[00:56:57] the phone in the or on the website
[00:57:00] itself.
[00:57:01] So, the implementation of these actually
[00:57:05] This is the server side implementation.
[00:57:07] The execute function executes that tool.
[00:57:09] And for taking a photo, we have a little
[00:57:12] robot client, which is basically a
[00:57:13] connection between my server here and
[00:57:16] the phone or the website, whoever
[00:57:17] connects to the server.
[00:57:19] >> Mhm.
[00:57:19] >> And it just sends an RPC
[00:57:22] request over to the client, which says,
[00:57:24] "Take a photo, zero payload, and time
[00:57:26] out after 15 seconds, or if the signal
[00:57:28] triggers that is the user aborted or
[00:57:30] whatever."
[00:57:31] >> Mhm.
[00:57:31] >> And eventually
[00:57:33] on the client side,
[00:57:35] let's see.
[00:57:36] Where's the client again?
[00:57:38] Take photo.
[00:57:40] Uh
[00:57:41] yeah, and this is the client side of
[00:57:43] that. So, one once the RPC request from
[00:57:46] the server comes in, this method is
[00:57:48] executed.
[00:57:50] And that checks if the signal has
[00:57:52] triggered and froze or captures the
[00:57:55] photo via web APIs APIs either on the
[00:57:58] phone or on the website on the tab in
[00:58:00] Chrome.
[00:58:02] So, the first plan of action would
[00:58:04] actually be have a corresponding tools
[00:58:06] folder in client where we have one file
[00:58:09] for motor and one file for photo tools
[00:58:12] uh for the client side implementation.
[00:58:15] So, we can rip that out of index. Um
[00:58:18] And I'm pretty sure it would suggest
[00:58:20] doing that. So,
[00:58:22] let's see what it suggests. Um
[00:58:24] first of all, it tells me read all files
[00:58:27] under
[00:58:28] uh read all files, okay.
[00:58:30] So, there's UI state, setup screen, just
[00:58:33] for reference. Um
[00:58:36] Oh, that's the session.
[00:58:40] This is the setup screen where I can
[00:58:42] pick which
[00:58:44] text-to-speech provider I want or if I
[00:58:46] want to reset the session and I have the
[00:58:48] logs both from server and client side.
[00:58:50] Um
[00:58:52] So, we have setup screen and the robot
[00:58:53] face screen, which is this one once I
[00:58:55] start the robot.
[00:58:57] This here.
[00:58:59] Okay, now I need to stop this again.
[00:59:03] Talking to us.
[00:59:05] Um the animated face state depends on
[00:59:08] the robot state, which is managed on the
[00:59:09] server. The structured log display, TTS
[00:59:12] provider, yeah, okay. Then we have the
[00:59:14] web socket client um
[00:59:16] which connects to the server and and
[00:59:18] allows us to interchange RPC requests,
[00:59:20] okay.
[00:59:22] Um okay, and the client also opens up
[00:59:25] phone
[00:59:27] Sorry, a microphone uh stream so it can
[00:59:29] stream the audio from the client, from
[00:59:31] the phone or from the tab to the server,
[00:59:33] which does the uh, speech to text using
[00:59:36] a power key uh, locally.
[00:59:39] And then we have TTS playback.
[00:59:42] And receive uh, okay. Then we have the
[00:59:44] camera, we have the motor hardware
[00:59:45] control, orientation, gyro.
[00:59:48] Yeah, so nothing surprising.
[00:59:50] Then the communication is three
[00:59:51] channels, web socket.
[00:59:54] Uh, okay, okay, okay.
[00:59:56] >> [snorts]
[00:59:57] >> Yeah, I'm not going to read all of this.
[00:59:59] Um, overall flow, okay. Okay.
[01:00:02] I I know what it does kind of, so I
[01:00:04] don't read this now, but you get the
[01:00:06] idea. I use this as an exploratory tool
[01:00:08] to get an understanding. And if I had
[01:00:11] more questions, I would just ask them
[01:00:12] here and then ask the
[01:00:15] ask the agent, for example, um, can you
[01:00:17] show me the
[01:00:19] client side implementation of the photo
[01:00:22] tool.
[01:00:23] Open it in VS Code at the specific line.
[01:00:28] And I have a little skill
[01:00:29] uh, VS Code skill, I think, that tells
[01:00:32] the model how to run the code CLI to
[01:00:34] open a file at a specific line.
[01:00:39] This is obviously not very efficient,
[01:00:41] but you get the
[01:00:43] In bigger code bases, this is is very
[01:00:45] nice.
[01:00:46] So, okay, it opened it opened the file
[01:00:48] at that position.
[01:00:49] So, I can take a look if I wanted to,
[01:00:51] uh, but we already did that. Okay.
[01:00:54] So, I want to refactor this client code
[01:00:58] into
[01:01:00] more modular code base.
[01:01:03] Let's start by pulling out the tool
[01:01:06] implementations
[01:01:07] to source client
[01:01:11] tools.
[01:01:13] TS, uh, just like we have on the server
[01:01:16] side.
[01:01:18] Um,
[01:01:19] before you do,
[01:01:22] tell me
[01:01:24] what dependencies
[01:01:26] those two implementations have. By
[01:01:28] dependency I mean like we have this um
[01:01:32] where is it?
[01:01:33] We We have this send call here, which
[01:01:36] basically returns the result to the
[01:01:38] server via the web socket connection um
[01:01:41] in this blaster RPC. [clears throat]
[01:01:43] >> [sighs]
[01:01:44] >> And if I abstract that out, if I
[01:01:45] refactor that and pull that out, I want
[01:01:48] to make it such that
[01:01:50] the tools um get their the the the
[01:01:52] necessary dependencies they need to do
[01:01:54] their um to do the thing they're
[01:01:56] supposed to do, which is in this case
[01:01:57] send the thing. In index.ts, this is a
[01:02:00] global function that any code in here
[01:02:02] has access to.
[01:02:03] If I take out the the photo taking into
[01:02:06] its own module, I have to kind of give
[01:02:08] that module access to the send function.
[01:02:10] The question is what's the best setup
[01:02:11] for that? What's the best best API for
[01:02:13] that?
[01:02:15] So, main coupling to resolve during
[01:02:17] modularization, send and log should
[01:02:18] become injected dependencies. Shared
[01:02:20] portal purse should move to a utility
[01:02:23] module. Okay. Um on the server side we
[01:02:26] already have um
[01:02:28] a robot client implementation, which
[01:02:30] handles the server-side communication
[01:02:32] with the client. And I think we want a
[01:02:34] similar abstraction for um the client
[01:02:37] side.
[01:02:50] So, I'm just letting the agent basically
[01:02:52] give me proposals for um API shape
[01:02:56] and modularization options. And then I
[01:02:59] either come up with something myself or
[01:03:01] I pick something it proposes if I don't
[01:03:03] care too much. And in this case I don't
[01:03:05] care too much. I just want this to be
[01:03:06] abstracted out a little bit better. So,
[01:03:08] what does it tell us? It says Yes, I
[01:03:11] agree. It makes sense to me or the shape
[01:03:13] of robot client, but inverted.
[01:03:15] Server-side robot client is blah blah.
[01:03:17] Client-side equivalent should be
[01:03:19] imported as received. track active
[01:03:21] request handles robot request handles
[01:03:23] robot cancel central response. I would
[01:03:25] not name it a robot client. That doesn't
[01:03:27] make sense.
[01:03:28] Robot service file.
[01:03:30] A good split could be robot RPC.
[01:03:35] Oh, actually
[01:03:36] the way I'm I'm I'm the way I'm
[01:03:38] commenting on longer agent things is
[01:03:41] another extension by extension
[01:03:43] that just opens up the the last
[01:03:46] assistant response
[01:03:48] in a temporary file.
[01:03:50] >> [snorts]
[01:03:50] >> Um and then I can go in and just do
[01:03:53] da da da da da da.
[01:03:55] Would not name it
[01:03:57] Um let's
[01:04:00] So
[01:04:04] Um
[01:04:05] let's name it robot server because I'm
[01:04:08] the service called robot client. So a
[01:04:11] good split could be
[01:04:14] robot RPC server handle request.
[01:04:17] Yeah, that's good.
[01:04:20] It would receive dependencies like
[01:04:22] send clock tools.
[01:04:26] Yeah, this is not too bad.
[01:04:28] Each tool module owns its local state.
[01:04:31] Doesn't make sense.
[01:04:33] Yeah, that makes sense.
[01:04:34] The client RPC layer owns only
[01:04:39] Yeah, that's great.
[01:04:41] Okay.
[01:04:43] So basically you proposed to me um an
[01:04:45] abstraction for the client side that
[01:04:48] wraps the RPC communication with the
[01:04:49] server, but I'm still able to um
[01:04:53] I wonder, do we still need this?
[01:04:59] Um actually, yeah, why do we need the
[01:05:01] send?
[01:05:05] So my thinking here is this send lives
[01:05:08] in here somewhere.
[01:05:10] And what does it do?
[01:05:11] It has the web socket access and then it
[01:05:13] just sends whatever data we push through
[01:05:16] it to the to the server
[01:05:19] and it does some logging. So,
[01:05:22] do we want this decoupling of the web
[01:05:25] socket?
[01:05:32] Sorry, I need to think about this.
[01:05:35] >> No, yeah, [laughter] yeah, yeah, no,
[01:05:35] please.
[01:05:37] >> But if we need to send
[01:05:41] to the robot server.
[01:05:46] I send it to the web socket.
[01:06:12] And the tools can be what they are.
[01:06:15] Yeah, so I'm just telling it I want more
[01:06:17] symmetry. I don't want the main index
[01:06:21] file of the client to handle the the web
[01:06:24] socket. If we have an abstraction over
[01:06:25] the RPC connection, then I want that to
[01:06:27] handle the web socket instance as well
[01:06:30] instead of having it lay around in
[01:06:31] index.ts.
[01:06:34] The server let's go. Okay, and then it
[01:06:36] just proposes each two modules on its
[01:06:38] own local state.
[01:06:40] Yeah, that's right.
[01:06:41] So, I finish this off with looks good to
[01:06:43] me.
[01:06:44] Implement.
[01:06:46] And then I just go back here and what I
[01:06:49] edited here is now automatically
[01:06:51] injected into this prompt field.
[01:06:54] And away we go.
[01:06:56] >> That's cool.
[01:06:57] It's a cool extension.
[01:07:00] >> Yeah, you can probably simulate that in
[01:07:02] other harnesses as well, but it's it's
[01:07:04] literally only like actually we can we
[01:07:07] can open it up.
[01:07:16] >> [snorts]
[01:07:17] >> So this is the entire extension.
[01:07:20] It just registers this comment thing and
[01:07:22] then it has a handler when the user type
[01:07:24] {slash} comment enter. It checks if
[01:07:26] there's UI attached to the agent and if
[01:07:29] there is it gets the last assistant
[01:07:31] text.
[01:07:32] If there's not it shows a notification
[01:07:34] in the UI and otherwise it what does it
[01:07:37] do here?
[01:07:38] It takes the last assistant message.
[01:07:41] Formats it to add the quotes in front of
[01:07:44] each line.
[01:07:45] And then just calls this edit with
[01:07:47] external editor and we just check if the
[01:07:49] visual or editor environment variable
[01:07:51] are set and if they are we write the
[01:07:54] contents of this initial text to a
[01:07:55] temporary file and then spawn the
[01:07:59] spawn whatever command's been specified
[01:08:02] by either of these environment
[01:08:03] variables.
[01:08:04] And once we're done with that we we just
[01:08:07] say set the return text in the editor
[01:08:10] component notification done.
[01:08:12] So
[01:08:13] This is nice.
[01:08:15] Yeah. It it took took like 5 minutes to
[01:08:17] have Pi implement that and I never
[01:08:19] looked at that code before. So
[01:08:21] >> [laughter]
[01:08:21] >> there we are.
[01:08:24] Yeah and while
[01:08:26] while we were talking it started
[01:08:27] refactoring it wrote client-side logging
[01:08:30] infrastructure. It would be nice if we
[01:08:32] could reuse what we have from the server
[01:08:34] but I think it's hard to share the types
[01:08:36] here.
[01:08:38] >> [snorts]
[01:08:38] >> Well that's something that we could fix
[01:08:40] later on. There's the equivalent file.
[01:08:45] So this is the server-side logger thing.
[01:08:47] And now I duplicated a lot of that here.
[01:08:51] I'm not sure I'm not sure I like that.
[01:08:54] But basically
[01:08:57] I would just let it do its thing and
[01:08:59] once it's done with that I would go into
[01:09:01] diff review again,
[01:09:02] and see um um
[01:09:05] what I changed in the in the client. I
[01:09:07] This was actually not committed yet.
[01:09:08] That was work I did last night, which I
[01:09:10] haven't committed yet. But, this
[01:09:11] wouldn't exist. Just ignore that this
[01:09:13] exists. Um assuming a fresh session with
[01:09:15] a committed state on disk,
[01:09:17] I would then go in and start
[01:09:20] giving it uh comments like that,
[01:09:22] annotations like that again. So, I
[01:09:24] massage the new um API, the new
[01:09:28] modularization into a shape that I
[01:09:30] actually like, and that I think the
[01:09:32] agent will have an easy time um fixing
[01:09:34] or maintaining later on.
[01:09:37] Yeah, and I think that's that's
[01:09:39] basically it. I mean, this probably
[01:09:41] takes a little while now, refactoring
[01:09:42] the entire front end. So, I'm not sure
[01:09:44] we can fit that in the remainder of the
[01:09:45] video, but
[01:09:47] th- those are basically the workflows I
[01:09:49] I use daily.
[01:09:51] >> That's awesome. That's really cool.
[01:09:53] I I really like these extensions. I
[01:09:54] mean, that that that last one was
[01:09:56] especially. That that's so neat to just
[01:09:57] re-inject basically the the agent's the
[01:10:00] agent's thinking, comments on it, and
[01:10:02] just put it right back in. I think
[01:10:03] that's that's super cool. Um
[01:10:05] I love that a lot.
[01:10:08] So, so and then this Yeah, go ahead.
[01:10:10] >> No.
[01:10:11] Uh yeah, th- th- that was my initial
[01:10:13] intuition with Pi that I I don't always
[01:10:15] know what I need. So, instead of
[01:10:17] hard-coding it into the agent, I just
[01:10:18] make it so the agent can write me
[01:10:21] that little comment.ts file, because
[01:10:23] that actually literally takes it 2
[01:10:25] seconds to spit out. So,
[01:10:27] >> Mhm.
[01:10:28] >> Yeah.
[01:10:28] >> And here, what once you're done, I mean,
[01:10:30] for correctness, cuz this is like a this
[01:10:31] is a a side project, right? Do I assume
[01:10:34] you don't have like any extensive
[01:10:35] testing here? This is just like put it
[01:10:36] on the robot, make sure
[01:10:37] >> No, yeah.
[01:10:40] Yeah. Okay. Um in other like in Pi
[01:10:42] itself in the mono repository, um in the
[01:10:44] task we implemented earlier in the issue
[01:10:46] with the token estimates, I forewent
[01:10:49] adding in regression tests, because it's
[01:10:51] trivial. It doesn't matter for this kind
[01:10:53] of thing. I
[01:10:54] I also have to to mindful of the text uh
[01:10:56] how how long tests take to execute
[01:10:58] because some of them are run locally
[01:11:00] before each commit. Um so I I avoid
[01:11:03] tests that are trivial, that don't make
[01:11:05] sense. But Pyre has an extensive test
[01:11:07] test suite.
[01:11:08] Um
[01:11:09] just because it's very easy to break
[01:11:11] things. Um
[01:11:12] for a project like this, I I honestly
[01:11:14] don't care. Also, it's very
[01:11:17] even with agents, it's kind of sucks
[01:11:19] mocking out, for example, the browser
[01:11:21] side of this or the client side of this
[01:11:23] and ensuring that the server works or
[01:11:25] mocking out the um TTS TT services in
[01:11:28] the background and so on. It's either it
[01:11:31] works or it doesn't. I don't need a test
[01:11:32] for everything. So.
[01:11:35] >> It's just It's just It's just the fun.
[01:11:37] It's just for the ride. You're going for
[01:11:38] the ride.
[01:11:38] >> Yeah, exactly. I mean, my boy and all
[01:11:40] the kids in the hood are using it. If
[01:11:42] this tiny little robot craps itself, I
[01:11:44] just restart it. So,
[01:11:46] >> [laughter]
[01:11:46] >> it's not It's not uh
[01:11:48] mission-critical software. Nobody's
[01:11:50] going to die if it fails.
[01:11:52] >> That's right. That's right. And you you
[01:11:53] made this um when you were starting to
[01:11:54] do the refactor. You you said like,
[01:11:56] "Hey, in this situation, because it's
[01:11:57] like a pretty small code base, it's cool
[01:11:59] to just dump it all into context. It all
[01:12:01] fits within the 270 or so K tokens."
[01:12:03] What's What's the general approach when
[01:12:04] when that's not true, right? A lot of
[01:12:06] folks obviously in in industry and and
[01:12:08] when they're building production
[01:12:09] software, like they're dealing with
[01:12:10] millions of lines of code. I assume Pyre
[01:12:12] also already fits that that criteria. Um
[01:12:14] how do you think through just segmenting
[01:12:16] out the right context there? Uh
[01:12:19] uh uh when as you're doing that kind of
[01:12:20] building?
[01:12:22] >> Um so if you go back to um Pyre,
[01:12:26] let's assume I don't have an agent empty
[01:12:27] and let's assume I'm a a new grad uh
[01:12:29] just joining company and they want to
[01:12:31] get
[01:12:32] get some of the idea of how things work.
[01:12:34] Previously, I would manually go in and
[01:12:36] kind of figure out where the module
[01:12:37] boundaries are, uh look at the code, ask
[01:12:40] questions to my seniors, and so on and
[01:12:41] so forth.
[01:12:43] And you can imagine the agent is the
[01:12:44] same, right? Um
[01:12:46] it needs to get an idea about the code
[01:12:48] base and where things are.
[01:12:50] If your code base is agent-ready, as
[01:12:52] people at Factory AI
[01:12:55] named it, meaning it is structured in a
[01:12:58] very modular way so that individual
[01:13:00] modules actually nicely fit into
[01:13:02] context. And if you have some
[01:13:06] progressively disclosed documentation
[01:13:08] that tells the agent where to find
[01:13:09] things, um
[01:13:11] you're fine.
[01:13:12] But the the agent will be able to work
[01:13:15] with
[01:13:15] 2 million line code base in that case as
[01:13:17] well.
[01:13:18] But most code bases aren't like that.
[01:13:21] Like all of them are like are not like
[01:13:23] that. So,
[01:13:26] what then is the strategy you can
[01:13:27] employ?
[01:13:28] If I do know the code base and know
[01:13:31] exactly which parts of the code base the
[01:13:34] agent should ingest for a specific task,
[01:13:36] I just tell it. Like for example, I want
[01:13:40] to add mouse support to the TUI. Please
[01:13:44] read
[01:13:45] tui.ts, which is the main engine for the
[01:13:48] terminal user interface, where this is
[01:13:51] the only thing the the agent would have
[01:13:52] to touch to implement mouse support in
[01:13:54] the terminal user interface. And I then
[01:13:56] know that as the engineer.
[01:13:58] So, please read that in full and propose
[01:14:02] [clears throat]
[01:14:02] how we could do that, right? And instead
[01:14:05] of just a single file, it might be a
[01:14:06] folder or it might be multiple folders.
[01:14:09] But if you know the code base, you
[01:14:11] usually know how to see where you need
[01:14:12] to look for specific parts that you need
[01:14:14] to implement the task.
[01:14:16] That's the first thing. That's usually
[01:14:18] what happens if you still have an idea
[01:14:20] of what your code base does. If you are
[01:14:22] genetically coded yourself into a
[01:14:24] corner, well,
[01:14:25] >> [laughter]
[01:14:26] >> then you can do this.
[01:14:29] Tell me where I
[01:14:31] where
[01:14:32] we could uh
[01:14:34] No.
[01:14:35] Tell me which parts of the code base we
[01:14:38] need to modify to implement
[01:14:42] mouse support in the TUI.
[01:14:45] And this can work.
[01:14:47] Um
[01:14:49] Uh but often it won't because again, if
[01:14:52] you don't know what the agent should
[01:14:53] modify and the agent has to
[01:14:55] authentically search its way through the
[01:14:57] code base to find the place that where
[01:14:58] it needs to modify something,
[01:15:00] chances are that the agent hasn't seen
[01:15:02] all the places that it needs to modify.
[01:15:04] So, even if it manages to add this
[01:15:06] feature, you can be pretty sure that the
[01:15:09] implementation is not great and you will
[01:15:11] have added an immense amount of tech
[01:15:12] debt to your project just by adding this
[01:15:15] feature this way.
[01:15:16] >> Mhm.
[01:15:17] >> That said, if you don't let it implement
[01:15:19] here,
[01:15:20] but instead give you this analysis of
[01:15:23] which parts Oh, I think GPT is currently
[01:15:25] crapping itself.
[01:15:26] >> Mhm. [snorts]
[01:15:27] >> I'm actually surprised that the demo
[01:15:29] worked so far
[01:15:30] >> [laughter]
[01:15:30] >> because usually providers are very
[01:15:31] unstable here in Europe.
[01:15:33] Um
[01:15:34] >> I was going to say, mhm.
[01:15:35] >> Yeah, let me
[01:15:36] let me try this again.
[01:15:38] Or maybe I'm just going to switch to
[01:15:40] There we go. We're back.
[01:15:42] Um
[01:15:43] so, the question was if the code base is
[01:15:46] large, um how can I kind of make agents
[01:15:50] work? And I already showed you one way
[01:15:51] by knowing your code base and telling it
[01:15:54] exactly where to you look look at what
[01:15:55] to modify.
[01:15:56] The other way is using the agent to give
[01:15:58] you an initial sense of where you as a
[01:16:00] human can look.
[01:16:03] Um again, this probably goes against the
[01:16:05] wisdom of the crowd, but I personally
[01:16:07] believe that you have to have a at least
[01:16:10] a high-level understanding of things
[01:16:12] work together um
[01:16:14] so you can judge what the output of if
[01:16:16] the output of your agent is actually any
[01:16:17] good. So, in this case I'm using it kind
[01:16:20] of like a research intern that goes into
[01:16:22] my code base and tries to find at least
[01:16:25] my in my assump- my assumption is it
[01:16:26] will find initial
[01:16:28] entry points for me as the human to look
[01:16:30] through the code base and see how things
[01:16:32] fit together so I get a better
[01:16:34] understanding of the problem space and
[01:16:35] solution space.
[01:16:37] >> Mhm.
[01:16:37] >> Um so, at the end of this, I will get a
[01:16:39] list of files
[01:16:42] that I can actually Let me just kill
[01:16:44] that.
[01:16:46] So,
[01:16:51] Just give me a sec.
[01:16:52] Takes a little while. I I will get a
[01:16:54] list of files and then I can ask the
[01:16:56] agent to walk me through those things
[01:16:58] um and explain things to me and I can
[01:17:00] ask questions and those questions could
[01:17:03] actually trigger the agent to look into
[01:17:05] other files that it missed in the
[01:17:06] agentic search, if that makes sense.
[01:17:09] >> Yeah.
[01:17:09] >> Um because I as a human have a different
[01:17:11] perspective on the code base.
[01:17:14] Um
[01:17:15] and I would continue with this until I
[01:17:18] personally have a good idea about about
[01:17:20] where to to look and what to modify. And
[01:17:24] the agent then, at least in this context
[01:17:26] window,
[01:17:27] will also have a very good idea and I
[01:17:29] can take this analysis result back with
[01:17:31] me into an implementation session. So,
[01:17:33] just what we need to know. Um
[01:17:36] >> Yeah. Mhm.
[01:17:37] >> I can't quite simulate that with you yet
[01:17:40] because adding mouse support to the tool
[01:17:41] is actually very complicated.
[01:17:43] >> [laughter]
[01:17:43] >> Okay.
[01:17:45] >> But but this is uh what I would do. So,
[01:17:47] let's assume I I did a bunch of more
[01:17:50] analysis together with the agent and
[01:17:52] eventually it spit that out as the
[01:17:55] places we need to look and the places we
[01:17:56] need to modify, right?
[01:17:58] >> Mhm.
[01:17:59] >> And now I I have a bunch of conky my in
[01:18:01] my context, which I don't need anyway
[01:18:03] because all that's needed is this,
[01:18:05] right?
[01:18:06] >> Right.
[01:18:07] >> Um people would generally
[01:18:09] suggest to write to write a a plan.md
[01:18:12] file or use plan mode to do this. Um
[01:18:15] I personally think that's not necessary.
[01:18:17] Um in pie I can just do this. Um
[01:18:20] say tree, go back to my first message
[01:18:23] and take everything that we did with me
[01:18:26] as a
[01:18:28] as a summary. So, it's kind of like
[01:18:30] compaction, but more structured. I can
[01:18:32] say um ensure the summary
[01:18:36] has all the files we need to ingest into
[01:18:39] the context
[01:18:42] to implement mouse support and also has
[01:18:46] all the files necessary
[01:18:49] all the files
[01:18:51] all the
[01:18:52] file paths we need to modify including
[01:18:56] how to
[01:18:57] output
[01:18:59] It's very at hoc as you see.
[01:19:01] You could probably use prompt template
[01:19:02] for that as well but
[01:19:05] Anyways, what's happening now is this
[01:19:07] entire part of the context or the
[01:19:09] session
[01:19:11] gets compacted or summarized and I'd
[01:19:13] only take the summary with me and go
[01:19:15] back in my in my tree and it will make
[01:19:18] sense what the tree is in a second once
[01:19:20] this is summarized.
[01:19:22] >> Mhm. Mhm.
[01:19:23] >> But the one thing to notice we were just
[01:19:25] at 40% context. So we we read in a big
[01:19:28] chunk of the code base.
[01:19:29] >> Right.
[01:19:30] >> Yeah. Yeah.
[01:19:31] >> And and now you see we're back at where
[01:19:33] we where we kind of came from.
[01:19:35] Whoopsie. Sorry.
[01:19:37] >> [snorts]
[01:19:38] >> Um let's look at the summary.
[01:19:41] This is the summary that was generated
[01:19:43] for
[01:19:45] this this tree here this branch in the
[01:19:48] tree, right?
[01:19:50] >> Yeah.
[01:19:50] >> And now if I do another Okay.
[01:19:53] Let's just say implement then look at
[01:19:55] the tree. You can see we have now two
[01:19:58] branches. This is this this one is the
[01:20:01] branch we're currently in that's
[01:20:02] implementation branch and this is kind
[01:20:03] of the analysis branch.
[01:20:06] It's a little hard to get the concept
[01:20:07] across but if you do this a little more
[01:20:10] it makes a lot more sense. You see?
[01:20:13] Now I'm in this branch and I'm
[01:20:15] implementing the thing based on the
[01:20:17] summary I made of this this branch here.
[01:20:20] >> Mhm.
[01:20:21] Mhm.
[01:20:21] >> So this is kind of like a caveman
[01:20:24] version of sub agents.
[01:20:26] I I had a sub agent initially in the
[01:20:28] session investigate the code base
[01:20:31] >> [snorts]
[01:20:31] >> Uh, then give me a summary of that. And
[01:20:33] then take the summary back and and start
[01:20:36] another branch in my session where I
[01:20:38] actually built the feature
[01:20:40] that we investigated
[01:20:42] earlier.
[01:20:43] Um, and this is actually
[01:20:45] Yeah, this is basically how I how I deal
[01:20:47] with with bigger code bases. So, either
[01:20:49] I know or I or explore together with the
[01:20:52] agent until I have a good feeling of how
[01:20:53] everything fits together, and then I
[01:20:55] just implement what needs implementing.
[01:20:58] >> In that sense, yeah, so you you kind of
[01:20:59] hacked together a version of compaction
[01:21:01] and sub-agents in in sort of this flow a
[01:21:02] little bit.
[01:21:04] >> Yeah, pretty much. But, again, like the
[01:21:06] problem with sub-agents for me is I
[01:21:08] don't know um what they're doing most of
[01:21:11] the time because um like Claude Code or
[01:21:13] Codex wouldn't show you what exactly the
[01:21:15] the sub-agent is doing.
[01:21:17] >> Right.
[01:21:18] >> I think there's a way now to do this in
[01:21:19] sub in in Claude Code, um but then I
[01:21:21] also don't know
[01:21:23] what it interests into its context. So,
[01:21:25] if I just did a sub-agent to do this
[01:21:27] exploration, and all I see from the
[01:21:29] sub-agent is the final result,
[01:21:31] how do I know that it actually saw all
[01:21:33] the things in the code base that it
[01:21:34] needs to know? I don't.
[01:21:36] >> Right.
[01:21:36] >> I either have to trust it or yeah.
[01:21:39] And so, when the sub-agent returns and
[01:21:41] gives me just the analysis, I cannot ask
[01:21:43] follow-up questions because now the
[01:21:44] entire
[01:21:46] files it read as part of that sub-agent
[01:21:48] run, they're no longer in the context.
[01:21:50] So, what do I do?
[01:21:52] Do do I let it reread all the things it
[01:21:54] already read as a sub-agent, and then
[01:21:56] that makes no sense. So, instead I just
[01:21:58] use the session to do the exploration
[01:22:01] collaboratively, and I know everything
[01:22:02] is in context, and only when I'm happy
[01:22:05] with the result, I basically leave that
[01:22:07] branch, take the summary the the
[01:22:09] exploration result with me, and start
[01:22:11] implementing. So, that's why I'm not a
[01:22:13] fan of sub-agents for this kind of work.
[01:22:15] >> Mhm.
[01:22:15] >> And the other thing you said, the tree,
[01:22:18] yeah, the tree is just a way of of
[01:22:20] basically encoding
[01:22:22] multiple branches without So, it's not a
[01:22:23] linear back and forth. It can branch off
[01:22:26] it anytime, like I
[01:22:28] I can also say
[01:22:30] branch off here,
[01:22:32] move out of summary.
[01:22:34] And I'll just say continue, and if you
[01:22:35] look at the tree, I've now branched off
[01:22:38] from this assistant message. This was
[01:22:39] the old branch. This is my new branch.
[01:22:42] Yeah, I I can experiment. Um so,
[01:22:45] I I would use this, for example,
[01:22:48] as you saw earlier, the refactoring
[01:22:49] thing. I could have one branch where I
[01:22:51] try out one shape for the tool
[01:22:53] refactoring, and then I'm not happy with
[01:22:55] that, so I throw away all the local
[01:22:56] changes. Then I have another branch
[01:22:58] where I try something else, but
[01:23:00] everything that came before that, all
[01:23:01] the exploration, for example, of the
[01:23:03] files, is still in context. And this is
[01:23:06] quite quite powerful to do exploratory
[01:23:08] um
[01:23:09] feature building and stuff like that.
[01:23:12] So, yeah, I hope any of this makes
[01:23:13] sense.
[01:23:14] >> No, no, no, it it does. It does. It's
[01:23:15] It's such a neat So, it's a lot more
[01:23:17] It's just like a very more a lot more
[01:23:18] controlled. I mean, I see like a there's
[01:23:20] less of the the kind of the the abstract
[01:23:22] that away. What's kind of you're you're
[01:23:25] seeing it all front and center, and
[01:23:26] that's sort of like the that control is
[01:23:27] really what you're aspiring to get here.
[01:23:30] >> Right, but only if I need it.
[01:23:32] Like you you remember when we
[01:23:34] implemented this issue where I already
[01:23:35] knew the the
[01:23:37] >> Yeah.
[01:23:37] >> um how it how it needs to be done and
[01:23:39] had high confidence that the agent can
[01:23:41] do it on its own.
[01:23:42] I could have done this full autonomy
[01:23:43] mode. Like, I know the agent can do
[01:23:46] this. I don't need all these branching
[01:23:47] and whatever.
[01:23:49] >> Right.
[01:23:50] >> It's a very straightforward workflow. I
[01:23:52] can trust the agent with and I develop
[01:23:54] that intuition over time working with
[01:23:56] the agent in that code base, and then I
[01:23:57] know it can do it, so I just fire it off
[01:23:59] and forget about it until I come back to
[01:24:00] the final commit or final PR or final
[01:24:02] diff, whatever.
[01:24:04] For this line of work, the refactoring,
[01:24:06] for example, that's exploratory. I don't
[01:24:08] want the agent to go off and do its
[01:24:10] thing and come back to something I don't
[01:24:11] like, because that's a waste of tokens
[01:24:14] and
[01:24:15] money.
[01:24:16] I also want
[01:24:18] understanding of the code base myself,
[01:24:20] because I still feel like I will come up
[01:24:22] with a better design that the agent
[01:24:24] could come up with just because agents
[01:24:26] tend to overcomplicate things.
[01:24:28] They kind of replicate the patterns they
[01:24:30] learned from the internet and the
[01:24:32] patterns on the internet are bad. So, I
[01:24:34] I want to infuse some of my seniority
[01:24:36] and and design taste into the agent and
[01:24:39] at the moment I can only do this by kind
[01:24:40] of collaborating with that with it on on
[01:24:43] that kind of thing. And for that I have
[01:24:45] these workflows that I just showed you
[01:24:46] with tree and whatnot.
[01:24:49] >> Right. Right. That makes a lot of sense.
[01:24:51] I I have one one more question for you.
[01:24:53] Something you had mentioned
[01:24:55] that I wanted to double click on where
[01:24:56] we talked about
[01:24:57] when
[01:24:59] 3 months in
[01:25:00] you know, we've all vibe vibe swapped
[01:25:02] something and that's part of what this
[01:25:03] whole exercise was is trying to undo the
[01:25:05] vibe swapping.
[01:25:06] Um but there's a point where it gets
[01:25:07] almost like unmaintainable and you said
[01:25:09] in that situation as long as your man as
[01:25:10] long as your manager doesn't hate you,
[01:25:12] you go and refactor. You kind of go back
[01:25:14] to you know, you pull up your your
[01:25:15] sleeves and like all right, let's fix
[01:25:16] this. Now now the question for me here
[01:25:19] or like that that I'm trying to
[01:25:19] reconcile is um
[01:25:22] yes, we we go and fix things when things
[01:25:25] have just become complete [ __ ] show,
[01:25:26] right? We go and fix things because
[01:25:27] there's kind of no choice or we start
[01:25:29] from scratch.
[01:25:30] There's also how do you reconcile that
[01:25:32] that need at some point potentially in
[01:25:34] the life cycle of a project and the fact
[01:25:36] that we've like there have been certain
[01:25:38] tasks we've delegated entirely
[01:25:40] almost even parts of our understanding
[01:25:42] cuz you mentioned like the front end you
[01:25:43] don't care. Hey, let's just go do this.
[01:25:45] Like the the agent can handle the front
[01:25:46] end. I don't even really have a say on
[01:25:48] this cuz I'm not a front end developer.
[01:25:49] So, imagine now a world where the front
[01:25:51] end has got a completely screwed. You
[01:25:53] know what I mean? And like the widgets
[01:25:55] aren't working and like it won't like
[01:25:56] that you can't get that the the div to
[01:25:58] center. I don't know. Like you know, the
[01:25:59] the canonical Yeah, classical front end.
[01:26:02] Um the classical front end issue. Uh so,
[01:26:04] in those situations like is what is the
[01:26:06] alternative? Is it like go back to the
[01:26:08] absolute bare bones like you you have to
[01:26:11] understand the code from scratch or like
[01:26:13] how do you
[01:26:14] what do you do in those kinds of
[01:26:15] situations?
[01:26:18] >> So, what do I do in situations where the
[01:26:19] code is unsalvageable and I personally
[01:26:22] am not a domain expert for that piece of
[01:26:23] code?
[01:26:23] >> Right. Right. Because it's because like
[01:26:25] you've kind of deliberately done that,
[01:26:26] right? You've sort of said I'm going to
[01:26:27] go with like go off to the thing cuz I
[01:26:29] don't want to deal with that. But now
[01:26:31] it's unmaintainable, right? So, so like
[01:26:33] do you just have to go in
[01:26:34] >> I mean, it depends on how much suffering
[01:26:36] your business can endure
[01:26:38] >> [laughter]
[01:26:39] >> or your users can endure. I mean, maybe
[01:26:41] what you slop up is fine and you just
[01:26:42] never touch it again.
[01:26:44] You just hope nothing breaks in the
[01:26:45] future. That can actually work for some
[01:26:47] software. Um, the alternative to that is
[01:26:50] either pull up your own sleeves and say,
[01:26:52] "Okay, I'm going to learn what I need to
[01:26:54] learn to unfuck this." Which can either
[01:26:56] be a refactor of the existing code or a
[01:26:58] complete rewrite.
[01:26:59] I don't think a lot of businesses will
[01:27:01] allow you to do that if you're an
[01:27:02] employee.
[01:27:03] Um, however, if you're employed, that
[01:27:05] also means you're probably not the only
[01:27:07] person at the company and then you will
[01:27:08] probably have some domain experts who
[01:27:10] know front end, for example.
[01:27:13] Um, and you would consult them for their
[01:27:15] expertise to help you unfuck this.
[01:27:17] Um,
[01:27:19] in the real world, what I what I've seen
[01:27:20] in the past couple of months, especially
[01:27:22] since December when everybody got free
[01:27:24] coupons for cloud code and now everybody
[01:27:26] in the company is basically a
[01:27:27] programmer. Um,
[01:27:30] engineers who are in charge of a
[01:27:32] specific module or subsystem in a
[01:27:34] software in in software,
[01:27:36] if they use agents, they're very they're
[01:27:40] not as likely to code themselves into a
[01:27:42] corner and still um, retain this kind of
[01:27:44] system knowledge because they built that
[01:27:46] up before agents and they still have it,
[01:27:48] transferred it to other co-workers.
[01:27:50] So, giving them agent is usually not
[01:27:52] dangerous because they will kind of
[01:27:53] ensure the invariants within the
[01:27:55] software and the design taste they put
[01:27:56] into uh, will kind of be retained even
[01:27:59] if the agent writes the most software
[01:28:01] now. The problem really only comes if
[01:28:02] you have uh, people from outside
[01:28:06] that area of expertise, like your
[01:28:08] product manager, which now thinks it's
[01:28:10] great to just ship some front end code
[01:28:12] into the code base.
[01:28:14] And that's that's usually where you you
[01:28:16] end up with this
[01:28:17] non-salvageable kind of piece of code
[01:28:20] that nobody understands
[01:28:22] and needs to be rewritten.
[01:28:24] So, I guess I guess my my answer is
[01:28:28] don't let it happen in the first place.
[01:28:30] >> [laughter]
[01:28:31] >> By by ensuring that you're still in the
[01:28:33] loop at at least when it comes to
[01:28:35] designing things, the API and modules.
[01:28:38] >> [snorts]
[01:28:38] >> Yeah.
[01:28:39] >> Because once you have that, even if a
[01:28:41] module is complete garbage, at least you
[01:28:42] define boundaries, so it's kind of
[01:28:44] isolated from the rest of your code. So,
[01:28:45] it's very easy to replace either with a
[01:28:47] rewrite or a refactor.
[01:28:49] And if you
[01:28:51] coded yourself into such a corner, well,
[01:28:52] it's going to be a lot of pain and
[01:28:53] either you or somebody else has to go in
[01:28:55] and manually fix that.
[01:28:57] Can have the assistance of an agent, but
[01:28:59] you will not be able to to just ask
[01:29:01] another 100 agents to fix it for you
[01:29:03] because chances are they will come up
[01:29:04] with even more garbage.
[01:29:09] >> All right, this is this is fantastic. Um
[01:29:11] what what a productive session. I mean,
[01:29:12] two two two distinct workflows, two
[01:29:15] distinct work streams, and different
[01:29:16] projects. So, this has been super
[01:29:18] awesome. I mean, what an insightful just
[01:29:21] session. And and thank you for sharing
[01:29:22] all of this and and showing that that in
[01:29:24] the in the, you know, the the minimalist
[01:29:26] harness that is just that you fully
[01:29:28] control and own and and understand like
[01:29:30] that has just as much efficacy as as,
[01:29:33] you know, the
[01:29:34] hyper
[01:29:35] you know, hyper sub agent
[01:29:38] on steroids and MCP on steroids. So,
[01:29:42] what a refreshing thing to see and and
[01:29:43] just just
[01:29:44] really really excited. And and and thank
[01:29:46] you so much for sharing this. It's just
[01:29:47] really awesome.
[01:29:49] >> No, thanks for having me. And I just
[01:29:50] like to end with saying I also don't
[01:29:52] know what the best way is to do things.
[01:29:55] This is the way that works for me. It
[01:29:56] might not work for you. But I found it
[01:29:58] to work across different code bases and
[01:30:00] products so far.
[01:30:02] >> Absolutely. Absolutely. Yeah. I mean, to
[01:30:04] great success. I mean, Pi uh we'll share
[01:30:06] links to Pi and all the all other
[01:30:07] Anything else that you want to share,
[01:30:08] we'll we'll provide it in in the links
[01:30:10] to the video. And so, people can check
[01:30:11] it out and start contributing and start
[01:30:13] having Pi modify itself, uh which I
[01:30:15] think is one of the the call to action
[01:30:17] here is use Pi and and and have have it
[01:30:19] fix itself if you want to if you want it
[01:30:21] to fix itself.
[01:30:22] >> Yeah, I I mean, my call to action is
[01:30:24] actually
[01:30:25] you asked me about how excited I am at
[01:30:27] the moment. I again have my reservations
[01:30:29] in terms of societal impact, but from a
[01:30:31] technologist's perspective, it's an
[01:30:33] amazing time to be a technologist.
[01:30:35] Experiment, throw [ __ ] at the wall and
[01:30:37] see what sticks. It's it's awesome. And
[01:30:39] if you realize that the models can
[01:30:40] modify the the software they're running
[01:30:42] in,
[01:30:43] then you will have a lot of time uh a
[01:30:44] lot of fun. So, experiment.
