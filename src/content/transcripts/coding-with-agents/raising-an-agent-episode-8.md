---
title: "Model Evaluation"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-8"
sourceUrl: "https://www.youtube.com/watch?v=doTI08ukee0"
videoId: "doTI08ukee0"
capturedAt: "2026-06-27T15:02:54.459Z"
series: "raising-an-agent"
episode: 8
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3194
---

## Transcript

[00:00:00] I'm really interested in this because
[00:00:01] we've like kind of had a a poor man's
[00:00:03] alloying with the Oracle like
[00:00:06] >> Yeah, that's true.
[00:00:07] >> Like uh using the the strengths of
[00:00:09] sonnet to generate stuff quickly and
[00:00:12] like get something working and then
[00:00:14] using the uh reasoning power of 03 to
[00:00:18] kind of
[00:00:19] >> be a second opinion.
[00:00:27] >> [music]
[00:00:32] >> All right. So, we're here uh with
[00:00:34] another edition of Raising an Agent. Uh
[00:00:36] this time we're going to be talking
[00:00:38] about how we evaluate different LLMs and
[00:00:40] models. And so, I got Camden from the
[00:00:42] AMP Core team here uh to talk through
[00:00:45] how we've been doing that. Camden, how
[00:00:47] are things going? Things are going
[00:00:48] great. It's an exciting week for model
[00:00:51] developments and really I guess few
[00:00:53] weeks of lots of interesting stuff going
[00:00:55] on.
[00:00:56] >> Yeah, definitely definitely. Um yeah, so
[00:00:59] I guess to to kick things off, you know,
[00:01:00] for people who don't know uh much about
[00:01:03] AMP, do you want to talk about like our
[00:01:06] philosophy related to um you what models
[00:01:09] we use and how we use them?
[00:01:11] >> Yeah. Yeah. So, AMP is a little bit
[00:01:14] different in that uh we build something
[00:01:17] that takes the best of models across the
[00:01:20] industry, not just from a single
[00:01:21] provider, um and slot them in to build a
[00:01:25] product that is as a whole more
[00:01:27] effective at coding.
[00:01:29] >> Yeah. And so what what current models do
[00:01:32] we have uh like running inside AMP?
[00:01:35] >> Yeah. Yeah. So, our primary model right
[00:01:37] now is uh set 4. Um this is the one that
[00:01:41] drives everything else. Um and then the
[00:01:43] the other models that we use are um
[00:01:46] we've been using 03 for our Oracle
[00:01:49] agent. Um Oracle is the Oracle is
[00:01:54] um a like a code review and um kind of
[00:01:58] planning agent. It's meant to be kind of
[00:02:00] a a smart deep thinking agent to
[00:02:03] supplement Sonnet's uh faster iterative
[00:02:06] behavior. Yep.
[00:02:08] >> Um we also use Gemini Flash for
[00:02:10] summarization um as a quick and cheap
[00:02:14] summarization model.
[00:02:16] >> Um we use Haiku for uh title generation.
[00:02:22] Um and uh let's see. And now we can
[00:02:27] enable GPD5 as the primary agent for
[00:02:30] testing. Haven't enabled it by default,
[00:02:33] but like we want users to be able to see
[00:02:35] how it feels yet. And this is a big like
[00:02:38] milestone for us because up until now,
[00:02:40] like you mentioned, we use a variety of
[00:02:41] different models for different use
[00:02:42] cases, but up until now, we've we've
[00:02:44] basically just had the one model used as
[00:02:46] like the main driver for the agent,
[00:02:48] right?
[00:02:48] >> Yeah. Yeah. We had we briefly had a a
[00:02:51] similar toggle for Kevin Pro.
[00:02:53] >> Yeah.
[00:02:54] >> Um but like ended up removing it when we
[00:02:57] decided we wouldn't be able to get it to
[00:02:59] the level of quality that we were
[00:03:00] getting with Sonnet.
[00:03:01] >> Yeah. Do you want to talk a little bit
[00:03:03] about that because that was also an
[00:03:04] interesting moment. Um there are certain
[00:03:06] things that I think like Gemini Pro did
[00:03:08] really really well. Um but it wasn't
[00:03:11] quite at least for our use cases it
[00:03:14] didn't quite get to the the bar that we
[00:03:16] wanted to see. Yeah. So I guess like to
[00:03:19] compare Sonnet has two things that it's
[00:03:22] really good at that other foundation
[00:03:24] models have struggled to compete with.
[00:03:26] One is tool calling. Um Sonnet does that
[00:03:28] really well. It selects tools well. It
[00:03:31] uh generates arguments well. it um like
[00:03:35] knows how to explore a codebase and
[00:03:37] iterate uh well so it like really has
[00:03:40] this kind of agentic behavior built into
[00:03:43] its training.
[00:03:45] >> Yeah.
[00:03:46] >> Um so with like in comparison Gemini um
[00:03:50] it's really good at oneshotting like if
[00:03:52] you tell it like build me a website
[00:03:54] it'll do it and it'll do it fast and
[00:03:56] well. Um, but when trying to use it in
[00:04:00] an existing codebase or on complex tasks
[00:04:03] that require it to kind of explore the
[00:04:05] codebase, find what it needs to do, I
[00:04:07] really kind of struggled with that. And
[00:04:10] um, ultimately like AMP is built around
[00:04:13] this iterative self-correcting loop. So,
[00:04:17] and an agent that can't self-correct um,
[00:04:21] isn't that great yet.
[00:04:23] >> Yeah. It's like it's it was really good
[00:04:25] at you know here's all the files page
[00:04:27] them into context and then like you know
[00:04:29] write a function that does X Y and Z but
[00:04:33] um I remember saying that sometimes even
[00:04:35] like the basic uh like tool calling
[00:04:38] schema um would kind of like confuse it
[00:04:41] or it would like get it wrong and there
[00:04:42] would be like a tool calling uh error
[00:04:44] that was completely unrelated to like
[00:04:47] anything reasoning related or um you
[00:04:50] know high levels. It was almost just
[00:04:52] like the low mechanics of emitting tool
[00:04:54] calls in in a structured form.
[00:04:56] >> Yeah, exactly. The the tool calling
[00:04:58] mapper I mean in the the tool calling
[00:05:00] API is really just a a schema that you
[00:05:03] ask the agent to generate things in and
[00:05:06] then pull the tool cards out of the
[00:05:08] schema and send them back as tool calls.
[00:05:11] Um, and this schema that was used for
[00:05:14] Gemini, um, like it would fail to
[00:05:17] generate correctly formatted,
[00:05:20] uh, like it was Python code that was
[00:05:23] generating to call these
[00:05:25] >> Y tools. Um, and if you have a poorly
[00:05:29] escaped Python string, then that shows
[00:05:31] up as an error to our users.
[00:05:33] >> Yeah.
[00:05:34] >> And it's like, it's one of those things
[00:05:35] where it seems minor. It's like, oh, it
[00:05:37] gets it like most of the time, but when
[00:05:39] you're in the middle of like trying to
[00:05:40] write some code, uh, and you get this
[00:05:43] error and it like disrupts the flow,
[00:05:44] it's it's actually quite annoying.
[00:05:46] >> Yeah. Yeah. Especially like when we're
[00:05:47] doing uh like tens of loops before the
[00:05:50] next user interaction, like
[00:05:52] >> if it exits at the second iteration,
[00:05:56] then like you might have walked over,
[00:05:58] grabbed some coffee, and come back and
[00:06:00] was not doing anything.
[00:06:02] >> Yeah. Yeah. And and we have someone on
[00:06:04] the team uh Jeff Huntley who loves doing
[00:06:06] it in that style, the Ralph Hood style
[00:06:08] where it's like you fire and forget, go
[00:06:10] grab a beer at the pub and then uh you
[00:06:13] know you come back and uh hope hope that
[00:06:16] it's completed. I think if you prompt it
[00:06:17] well, I think we we've got we've seen
[00:06:19] really good results with the existing
[00:06:21] agent. Have they been doing reasonable
[00:06:22] stuff? Um, but
[00:06:26] I feel like uh you know what we used to
[00:06:28] say with chained LM calls like each one
[00:06:31] is sort of a dice roll. And so if you
[00:06:34] get like you know 98% fidelity on the
[00:06:37] first one that decays like 96% and then
[00:06:39] 92% and then um you know after a couple
[00:06:42] hops it quickly decays uh exponentially
[00:06:46] to something that is a lot more
[00:06:47] reliable. Um and that exponential decay
[00:06:50] even if it's like 90 98%
[00:06:53] uh you know fidelity on the first call
[00:06:55] it's still an exponential decay.
[00:06:57] >> Yeah. Yeah. Know so the the interesting
[00:06:59] thing is like that decay was really
[00:07:01] visible in Gemini. um where like if it
[00:07:04] started getting off track a little bit
[00:07:06] like that compounded
[00:07:09] um and like Sonnet is interesting in
[00:07:12] that it kind of selforrects like if it
[00:07:15] sees an error like for example if edit
[00:07:18] file failed for whatever reason whether
[00:07:20] that's our fault or sonnet's fault um
[00:07:23] like it would find a way to do that same
[00:07:26] thing and like lots of times you'll see
[00:07:27] it like pull out said to the file use
[00:07:31] the create file to overwrite the whole
[00:07:32] things find some creative way to get
[00:07:35] itself out of the the ditch that it
[00:07:38] landed itself in and kind of move
[00:07:41] forward with its task. Yeah, it's not
[00:07:43] like multiple uh mechanisms for getting
[00:07:47] what it wants. I've seen a couple times
[00:07:49] like if for whatever reason like the the
[00:07:52] read file tool fails uh or or actually
[00:07:55] it's it's like the right the right file
[00:07:56] the edit file tool fails it will like
[00:07:59] write a bash script to like you know cat
[00:08:01] the contents. It's like it it knows
[00:08:04] enough about the tools uh at its
[00:08:06] disposal to find these sort of like
[00:08:08] creative workarounds. Yeah, it is
[00:08:10] interesting and like I I think earlier
[00:08:13] on like we spent a lot of ta time
[00:08:15] thinking about building an orthogonal
[00:08:17] tool set like think tools that don't
[00:08:20] overlap at all um because it would
[00:08:22] confuse the model and like it wouldn't
[00:08:25] know how to proceed. But now the model's
[00:08:28] kind of gotten good enough that this
[00:08:30] overlapping nature of the tool calls is
[00:08:33] almost an advantage um because when
[00:08:36] things go wrong and they still do um
[00:08:40] there's different paths forward and the
[00:08:42] the models can discover those.
[00:08:43] >> Yeah, it's like a human you know if for
[00:08:45] whatever reason like your editor is
[00:08:47] acting up uh today you like you have
[00:08:49] another editor you fall back to editing
[00:08:51] files quite fast like find creative
[00:08:53] workarounds. Um, cool. All right. So,
[00:08:56] you know, we tried it out with uh Gemini
[00:08:59] Pro. At that point, it didn't work very
[00:09:02] well. Um, are there any other models
[00:09:04] that we've kind like tried along the way
[00:09:06] uh as a main agentic driver?
[00:09:09] >> Yeah. So, uh, every new model that pops
[00:09:12] up, um, I usually throw it in as the
[00:09:14] main aentic driver to test it out
[00:09:16] because like, uh, not because I think
[00:09:19] it's going to be useful there, but
[00:09:20] because I think that's one of the best
[00:09:22] ways to kind of learn the personality of
[00:09:25] a model, like being up there close and
[00:09:27] personal, like using it for other
[00:09:28] things, like summarizations all in the
[00:09:29] background
[00:09:31] >> and like you don't get to know what its
[00:09:33] quirks are and things like that.
[00:09:35] >> Yeah. Um, so I uh have like experimented
[00:09:40] with Opus. Um, we we don't use Opus in
[00:09:45] uh AMP mostly because it's more
[00:09:47] expensive than we think that the
[00:09:49] improvement is worth and it's almost
[00:09:52] slower.
[00:09:54] >> Yeah. Yeah. and like uh sed it's good
[00:09:58] and it's good enough and um
[00:10:01] I don't think we can justify the
[00:10:03] additional flow and cost for the this
[00:10:07] self-correcting loop totally
[00:10:09] >> um and then I've also experimented with
[00:10:12] uh quite a few of the the new um like
[00:10:16] open models
[00:10:18] >> um a couple weeks ago Kimmy K2 had a its
[00:10:22] moment
[00:10:22] >> y
[00:10:23] >> um and and Quen 3 coder is still really
[00:10:27] exciting.
[00:10:27] >> Yep.
[00:10:28] >> Um how how did those stack up because
[00:10:31] there was like a ton of hype around
[00:10:32] those and you saw people tweeting about
[00:10:34] it like oh my gosh it's like so
[00:10:36] blazingly fast.
[00:10:37] >> Yeah. Yeah. So the they're they're quite
[00:10:40] good. Um like I I think these are some
[00:10:42] of the first uh open models that I've
[00:10:44] seen that can really do tool calling
[00:10:47] well. Um, and
[00:10:50] so far that's kind of been the the
[00:10:52] limiting factor is if you can't do tool
[00:10:55] calling well, yeah,
[00:10:56] >> then we can't slot it in easily and we
[00:10:58] can't use it for semi- general use
[00:11:01] cases. Um, so that was really exciting
[00:11:05] to me because especially when um you
[00:11:08] have these open models that do this, now
[00:11:10] you have choice in provider as well. Um
[00:11:13] and along with the new open model stuff,
[00:11:18] there's been a lot of improvement on
[00:11:21] like the hardware and provider sides as
[00:11:23] well. So like um companies like Croc or
[00:11:26] Cerebrris like they're building custom
[00:11:29] hardware that makes serving these models
[00:11:32] super fast.
[00:11:33] >> Yeah. And fast is kind of a dimension
[00:11:35] that uh as like the AI coding industry
[00:11:38] hasn't been able to explore yet because
[00:11:41] really the uh the speed hasn't been
[00:11:45] there for models that are good enough to
[00:11:47] do particularly useful tasks. Today
[00:11:50] we're in like the 56k era of agents I
[00:11:54] think where it's like you know you still
[00:11:56] kind of like have to wait for it a
[00:11:57] little bit. this lag. People are almost
[00:11:59] like orienting their workflows around
[00:12:01] like, oh, you know, this one's working.
[00:12:02] I'll let it do its thing. I'll go fire
[00:12:04] up another thing or maybe I'll, you
[00:12:05] know, check my my messages or or
[00:12:09] something.
[00:12:10] >> Yeah. Yeah.
[00:12:11] >> Yeah. I I'm excited for a couple reasons
[00:12:14] there. Like speed because it's so
[00:12:17] unexplored. The DX of it is also
[00:12:19] unexplored. Like the the experience of
[00:12:22] how you would even interact with these
[00:12:23] could change so drastically. Like right
[00:12:25] now it's like the kind of fire and
[00:12:27] forget. you let it do its thing, you
[00:12:28] come back. If you're really bored, you
[00:12:30] can watch it. Um, but like in a world
[00:12:34] where you're generating 2,000 tokens per
[00:12:36] second.
[00:12:37] >> Um, that is a world where we could maybe
[00:12:40] spin up 10 of them at the same time and
[00:12:44] if five of them fail, who cares because
[00:12:46] it's now cheap. Uh, and if like
[00:12:51] you come back and one of them has the
[00:12:53] right thing and we can analyze 10
[00:12:56] results 10 times faster, then like the
[00:13:01] self-correction has more opportunities
[00:13:04] to to pick up on like the paths that are
[00:13:09] promising.
[00:13:11] Yeah, totally. Yeah. So that part is
[00:13:13] like a a really fast but slightly dumber
[00:13:18] model and I think that's kind of
[00:13:20] interesting for a lot of the more
[00:13:22] specialized use cases like specifically
[00:13:24] we've got this code search agent um and
[00:13:28] it doesn't need to really understand the
[00:13:30] code well. uh it just needs to be able
[00:13:33] to sift through large amounts of files,
[00:13:36] pick out the ones that are actually
[00:13:37] relevant to the query that you're asking
[00:13:39] about and uh spit that back to the
[00:13:42] primary model that does the real
[00:13:43] thinking.
[00:13:44] >> Um so this is a a scenario where the
[00:13:48] speed smarts tradeoff is very clearly in
[00:13:50] the direction of speed.
[00:13:52] >> Yep. Um, and we can take advantage of
[00:13:54] these new models to plug it into that
[00:13:57] spot and um, provide a better user
[00:14:00] experience out of the box.
[00:14:02] >> Yep.
[00:14:03] >> So, I I think like a lot of people will
[00:14:04] want to know like, you know, if if Quen
[00:14:07] and K2 were like almost there and
[00:14:09] they're like so blazingly fast, um, you
[00:14:12] know, why didn't we turn these on as the
[00:14:14] main agent driver? like what was your
[00:14:16] kind of like qualitative assessment of
[00:14:18] how they performed, you know, all things
[00:14:20] considered for the overall uh like user
[00:14:23] experience?
[00:14:25] >> Yeah. So, like I I think it's exciting
[00:14:29] progress, but I think it's still very
[00:14:32] obviously not at the level that we're
[00:14:34] getting with Sonnet.
[00:14:35] >> Yeah.
[00:14:36] >> Um it's like 80% of the way there. Is
[00:14:38] that I think that's fair. Um
[00:14:40] >> what what does 80% mean? is like 80% as
[00:14:42] good on each thing and then that kind of
[00:14:44] degrades over time or like it it would
[00:14:47] work well four out of five times or
[00:14:49] >> for me it was it would work well on four
[00:14:53] out of five like mini tasks
[00:14:56] >> on so like problem is that like a a
[00:14:59] larger task that I give it is composed
[00:15:01] of
[00:15:02] >> tens of mini tasks.
[00:15:04] >> Yeah. So like if you were to like say um
[00:15:08] edit this file to add comments or like
[00:15:10] modify this function to do X then like
[00:15:13] it four out of five times that would
[00:15:14] work well.
[00:15:15] >> Um but if you're saying design build uh
[00:15:20] test this feature
[00:15:21] >> then that's a handful of tasks and it
[00:15:24] gets into this exponential the
[00:15:27] multiplicative decay problem we're
[00:15:29] talking about. It's really interesting
[00:15:31] because I think it's like um it really
[00:15:34] depends on like how many hops is your
[00:15:37] ideal uh use case. Um because I I feel
[00:15:42] like right now there's this gap that I
[00:15:44] see in the world of people using AI dev
[00:15:47] tools where like some people are still
[00:15:49] very much in like the AIDE modality
[00:15:53] which is like human in the loop at every
[00:15:55] single turn. Um, and then other people
[00:15:58] have made the leap to like full agent
[00:16:01] road, which is like, hey, I'm going to
[00:16:03] have this write, you know, 95% of my
[00:16:06] code. I'm just going to instruct what to
[00:16:07] do. And it's almost like if you're
[00:16:10] coming from the like I approve every
[00:16:13] single file change and tool use, uh, I'm
[00:16:15] like in the loop with the model. It's
[00:16:17] like the the open source models are are
[00:16:21] are probably like hot, you know, they
[00:16:23] they compare very favorably to to what
[00:16:25] you've been using, but the people who
[00:16:27] have are in like full agent land where
[00:16:29] where we are. It's like um a little bit
[00:16:32] of degradation means that I can't fire
[00:16:35] and forget
[00:16:36] >> that it almost like pulls you back into
[00:16:39] the, you know, old school. Uh I say old
[00:16:42] school, it's like, you know, 12 months
[00:16:43] old, but like Yeah. I mean it's kind of
[00:16:46] this uh this self-correcting loop like
[00:16:48] if you have the right feedback then
[00:16:50] these open models can be great but like
[00:16:53] right now the human is kind of the
[00:16:55] fallback feedback. So if you don't build
[00:16:57] out the tests or the type pecking or the
[00:17:00] linting or whatever
[00:17:01] >> then the human has to be the the one
[00:17:04] that gives the agent the input to like
[00:17:07] fix itself. Yep.
[00:17:09] >> So at that point having an agent that
[00:17:13] gets that last 20% is really important.
[00:17:15] >> Yeah. It's like that last uh x% to make
[00:17:19] the exponential decay you know across I
[00:17:22] don't know like 100 iterated tool calls.
[00:17:24] Not
[00:17:24] >> there's like some threshold at which it
[00:17:26] it flips.
[00:17:27] >> Yeah.
[00:17:28] >> Um okay cool. So like our our assessment
[00:17:31] Ben is with like K2 and um and the new
[00:17:35] Quen model. see potential there to power
[00:17:39] like
[00:17:41] narrowly scope sub aents for you like
[00:17:43] search and retrieval but they're not
[00:17:44] quite there yet as the main agentic
[00:17:46] driver. Uh but now today GP5 is out. Um
[00:17:51] what what do you make of GP5?
[00:17:53] >> Yeah. Yeah. I I'm excited about GP5. I
[00:17:55] think it's like a um a good general
[00:17:59] model. I like that's what it's supposed
[00:18:01] to be. So,
[00:18:04] >> but I I think the thing that excites me
[00:18:06] is like uh we talked about tool calling
[00:18:09] earlier and historically open AAI has uh
[00:18:13] really kind of been behind there. Um and
[00:18:16] GP5 seems to have really raised that
[00:18:19] bar. Um, so now a lot of the use cases
[00:18:24] that we would use a like smarter, more
[00:18:27] heavy reasoning model um that we
[00:18:30] couldn't really before because the tool
[00:18:32] calling wasn't there. Y
[00:18:33] >> um those now open up for us.
[00:18:36] >> So I think that's where I'm really
[00:18:38] excited is kind of pushing the
[00:18:39] boundaries of how we can use a um strong
[00:18:44] reasoning agent that can also call
[00:18:47] tools. Well,
[00:18:48] >> yeah. And and this is like the first
[00:18:50] model that we've tested for which it's
[00:18:52] it's like an actually a contender for
[00:18:54] that main agentic driver.
[00:18:56] >> Yeah. Yeah, it is. And you know, there's
[00:18:58] there's gonna be it's going to take time
[00:19:00] to really tune it and like figure out
[00:19:03] what it's good at and like
[00:19:05] >> figure out whether this is something
[00:19:06] that can provide the same quality of
[00:19:08] experience that Sonnet does.
[00:19:10] >> Um but early signs are promising. Like
[00:19:13] early signs are exciting, right? and
[00:19:16] like exciting enough that we decided to
[00:19:19] put it in front of users and get their
[00:19:21] cakes as well.
[00:19:22] >> Yeah. And the thing that you mentioned
[00:19:24] about it taking some amount of time, I
[00:19:26] think that's especially salient because
[00:19:28] I think it's almost dangerous to say
[00:19:30] like, okay, we have this existing model
[00:19:33] harness uh that's been kind of like
[00:19:36] tuned for one class of models, you know,
[00:19:39] mainly like Sonnet and and Opus uh uh
[00:19:42] mostly Sonnet. Um, and to say like,
[00:19:45] okay, like here's a brand new model. Uh,
[00:19:48] let's drop it in and expect it to just,
[00:19:51] you know, just work as well, much
[00:19:54] better. It's it's dangerous. I feel like
[00:19:56] if you do that, it can maybe give you a
[00:19:59] false impression of the model's actual
[00:20:01] underlying capabilities.
[00:20:02] >> Oh, yeah. Yeah. Absolutely. I as I'm
[00:20:05] doing this like the thing that I have to
[00:20:07] constantly keep in my mind is like
[00:20:09] trying to not evaluate models for a
[00:20:12] specific use case but rather like try
[00:20:15] and use the eval as a way to pull out
[00:20:18] what models are good at um because we're
[00:20:20] changing so quickly. So like the the
[00:20:23] scope of problems and the types of
[00:20:24] problems that these models can solve is
[00:20:27] also changing quickly. So being open to
[00:20:31] a model not performing as well are
[00:20:33] benchmarks that we kind of arbitrarily
[00:20:35] decided on.
[00:20:37] >> Yeah.
[00:20:37] >> And finding the things that it's it
[00:20:39] really shines at. I I think that's where
[00:20:42] there's a lot of opportunity to kind of
[00:20:44] build alloys of models that
[00:20:48] uh that lead to a better overall
[00:20:51] experience.
[00:20:51] >> I like that term alloy too.
[00:20:53] >> Yeah. Yeah.
[00:20:54] >> Did you read that paper?
[00:20:55] >> I I did. I did. There was there was a
[00:20:57] paper and then there was also like the
[00:20:59] expo uh blog post. I don't know if you
[00:21:01] saw that as well. Um but that that was
[00:21:03] yeah like alloys are this idea that you
[00:21:06] can combine multiple models in sort of
[00:21:08] like the same inference chain. And
[00:21:12] almost like counterintuitively
[00:21:14] uh this yields better results than using
[00:21:16] like one model or or the other. And I
[00:21:18] say counterintuitive because it's like
[00:21:20] it's like you're switching brains
[00:21:22] midstream, right? And you would think
[00:21:24] that a completely separate model uh
[00:21:28] would have more trouble um you know
[00:21:31] reasoning over tokens generated by a
[00:21:34] different model because in theory you
[00:21:36] know the perplexity is uh is is higher
[00:21:39] and you know that's typically correlated
[00:21:41] with like lower quality output. Um, but
[00:21:44] there's been some research that shows
[00:21:46] it's exactly the opposite. And, you
[00:21:48] know, you can speculate as to why, you
[00:21:49] know, maybe it's like more diversity of
[00:21:51] tokens or maybe it's like closer
[00:21:53] simulation of like human output or or
[00:21:55] something, but like there's something
[00:21:56] about that that um I don't know. It's an
[00:21:59] area of active research and it's it's
[00:22:01] something that I think we're excited to
[00:22:02] explore.
[00:22:03] >> I'm really interested in this because
[00:22:04] we've like kind of had a a poor man's
[00:22:07] alloying with the Oracle like
[00:22:09] >> Yeah, that's true. like uh using the the
[00:22:12] strengths of sonnet to generate stuff
[00:22:14] quickly and like
[00:22:17] >> get there get something working and then
[00:22:19] using the uh reasoning power of 03 to
[00:22:23] kind of
[00:22:24] >> be a second opinion. And so like that
[00:22:28] side of the intuitively makes sense to
[00:22:30] me, but like mixing the tokens together
[00:22:33] is just a deal.
[00:22:35] >> Even even we haven't gone that far, but
[00:22:37] you know, soon you know,
[00:22:39] >> everything's changing as they say.
[00:22:41] >> Um, cool. Is I want to talk a little bit
[00:22:44] about how our own impressions of DP5
[00:22:47] have evolved because I think this speaks
[00:22:48] to the model evaluation uh process. So
[00:22:53] like like I have my own thoughts, my own
[00:22:56] like first impressions of JDB5, but like
[00:22:58] what what were your when you first got
[00:23:00] access to the model? What was the
[00:23:01] initial I mean yeah so the the first
[00:23:03] thing I did was just plug it into AMP
[00:23:05] right
[00:23:06] >> and it was kind of awful [laughter]
[00:23:09] >> like in what ways? Like
[00:23:11] >> so like our system prompt is very
[00:23:13] tightly tuned to sonnet, right? It's
[00:23:16] >> it corrects for a lot of sonnet isms
[00:23:19] that either don't exist in GP5 or um
[00:23:24] like really push GP5 into kind of
[00:23:27] dangerous and weird not dangerous that's
[00:23:29] a bad word but weird territory like um
[00:23:32] so like our
[00:23:35] our talk about um like our prompting
[00:23:37] around succinctness right? Yes. CBD5
[00:23:41] took that very literally.
[00:23:43] >> Yes, I remember that. It was like
[00:23:45] emitting like fourword responses.
[00:23:47] >> Yeah. Yeah.
[00:23:47] >> Not even like grammatical, right? Like
[00:23:49] it just like
[00:23:51] >> why used more words when a few
[00:23:55] >> it's it's very instructible, right? like
[00:23:58] um
[00:23:59] which is a a big delta from I think like
[00:24:03] our experiences with sonnet especially
[00:24:05] like you know like four is much better
[00:24:07] but like 3.7 I think the common
[00:24:08] complaint was that it uh disregards
[00:24:10] instructions because it wants to do its
[00:24:12] its own like agentic
[00:24:14] >> yeah strong personality
[00:24:15] >> strong personality yes strong
[00:24:18] constitutional personic
[00:24:21] would say yeah absolutely
[00:24:23] >> um other things like I mean other
[00:24:26] examples of of this is we instruct
[00:24:28] sonnet to like link its responses to the
[00:24:31] relevant pieces of code and when it
[00:24:34] works great it's really nice uh but
[00:24:37] sonnet does that very consistently
[00:24:39] when I toss that same prompt chunk into
[00:24:41] GP5 it responded great and so this is
[00:24:45] something I'm excited about is this uh
[00:24:47] more pliable prompting
[00:24:51] >> um just kind of being able to get it to
[00:24:53] do things that it isn't doing out of the
[00:24:57] box more easily.
[00:24:58] >> Yeah,
[00:24:59] >> it's it does seem more steerable and and
[00:25:01] definitely like follows instructions uh
[00:25:03] like you said almost to to a fault. But
[00:25:06] again, this is this is coming from like
[00:25:08] an indexing on sonnet world where if you
[00:25:10] want to steer it um there's certain
[00:25:12] instructions it really doesn't like to
[00:25:14] follow and that requires much more like
[00:25:16] intentional prompting. Doesn't seem to
[00:25:19] be the case with the GPD5.
[00:25:21] >> Yeah. Yeah. I mean, another example in
[00:25:22] Son is like emojis. Like,
[00:25:25] >> try to get rid of emojis.
[00:25:27] >> Yeah. Thorson hates emojis.
[00:25:30] >> Yeah. Yeah. I don't think I've seen a
[00:25:31] single emoji in G5. So, first be happy.
[00:25:35] >> Yeah. And know and know you're
[00:25:36] absolutely right. Yeah.
[00:25:38] >> It's much more like personalitywise.
[00:25:41] Sonnet feels
[00:25:43] >> um Sonnet presents almost like a a
[00:25:48] patina of high agreeability.
[00:25:50] high agreeability, right? Like you're
[00:25:52] absolutely right. Whatever you say, you
[00:25:53] know, that's that's great. Underneath
[00:25:55] the hood, it doesn't actually want to
[00:25:56] obey as many instructions. Whereas GB5
[00:25:58] feels more like, you know, it's less
[00:26:00] nice uh on the surface, but it will
[00:26:03] actually do more of what you tell it to
[00:26:06] do. At least that's my my general
[00:26:08] impression.
[00:26:09] >> Yeah. The the interesting thing there is
[00:26:10] like one thing one behavior in GP5 that
[00:26:13] I've struggled to prompt out so far is
[00:26:16] uh kind of asking the user for
[00:26:18] permission or input to proceed.
[00:26:21] >> Um like
[00:26:23] >> yeah it wants to human and check its
[00:26:25] work in in a lot of cases.
[00:26:26] >> Yeah. Yeah. So I I'm sure there's
[00:26:29] probably a way to prompt us out. I
[00:26:30] haven't figured it out yet. Um but I I
[00:26:33] think that's another characteristic
[00:26:34] that's interesting that I've seen.
[00:26:36] >> Yeah, that's interesting. So, so my
[00:26:38] first impression of the model, I did
[00:26:40] basically what you did um is like, you
[00:26:42] know, drop it in and there wasn't really
[00:26:44] any customization. And the first thing I
[00:26:45] noticed was, you know, I I I had it run
[00:26:48] on some simple task and then like I alt
[00:26:50] tabbed away to do something else and I
[00:26:52] came back later and it was still
[00:26:53] running. It was still running like the
[00:26:55] first uh search query. I was like, why
[00:26:58] is this so slow? Um, and it turns out
[00:27:01] that like I think the the model with the
[00:27:04] kind of like sonet scaffolding
[00:27:06] um just had a greater propensity to
[00:27:09] issue queries that were like full
[00:27:10] natural language uh questions to our uh
[00:27:14] search sub agent. Um whereas sonnet uh
[00:27:19] it typically does it does more keyword
[00:27:21] searches or its natural language queries
[00:27:23] are more succinct. And so with the like
[00:27:26] longer natural language queries, our our
[00:27:28] search sub agent um would just take that
[00:27:31] and just run with it. And so it would
[00:27:33] kind of like spin and spin and spin
[00:27:35] wanting to kind of like cover all the
[00:27:37] possible paths of what the user might be
[00:27:40] looking for. And the upshot was it just
[00:27:42] ended up taking uh much longer. And so
[00:27:45] like that's that's another thing that uh
[00:27:47] we had to tune.
[00:27:49] >> Yeah. Yeah. So like uh
[00:27:52] the the verbosity is
[00:27:55] it took a little bit of work. Um but it
[00:27:58] I I talked to some people at OpenAN and
[00:28:00] they like had this new verbosity art in
[00:28:04] the which we're not actually using
[00:28:06] because we we can just prompt it and be
[00:28:08] more specific about how verbose we want
[00:28:10] it to be. But it was something that like
[00:28:13] GPT now responds well to. Um so took a
[00:28:17] little work but
[00:28:18] >> yeah I think we're we're still you know
[00:28:21] we've we've had access to it for um you
[00:28:24] know couple weeks now and so we we made
[00:28:26] a lot of progress from those initial uh
[00:28:29] days and I think it works really really
[00:28:31] well now. Like I'm really excited. Uh
[00:28:33] I'm gonna I'm just I'm going to use it
[00:28:35] as like my main driver for a week and
[00:28:37] and see see how it goes. Um, but I think
[00:28:40] we're still at like the very tip of the
[00:28:41] iceberg because going back to the you
[00:28:43] made much earlier, it's like we're no
[00:28:46] longer in the days where you just like
[00:28:47] drop a model into uh application
[00:28:50] scaffolding and be like, okay, it's now
[00:28:52] it's in the model selector and and have
[00:28:53] at it. I think um at least our takeaway
[00:28:57] is that you have to be much more
[00:28:58] intentional about uh making sure that
[00:29:01] there's the right kind of like
[00:29:03] scaffolding around the model. Otherwise
[00:29:05] um I don't know like AJ all everything
[00:29:08] comes down to the user experience at the
[00:29:10] end of the day and like as tool builders
[00:29:12] like that's our contract with the end
[00:29:13] user. It's like a good user experience
[00:29:15] something that you can use dayto-day and
[00:29:17] it's not frustrating and it does take a
[00:29:19] fair amount of tweaking.
[00:29:20] >> Yeah. And I mean, I expect to be doing a
[00:29:22] ton of tweaking still like over the next
[00:29:24] week or two. Like there are still plenty
[00:29:27] of things that I I want to fix.
[00:29:30] Um, but the the nice thing is like
[00:29:35] it's good enough now that I can use it
[00:29:38] for my day-to-day tasks, which means
[00:29:40] that the the behaviors are more
[00:29:43] discovery.
[00:29:44] >> Yes. So there there was definitely like
[00:29:46] a a threshold below which it was just
[00:29:49] frustrating. like I it felt like I was
[00:29:52] getting such poor results that I wasn't
[00:29:54] even able to
[00:29:56] >> um push it to do what I wanted better
[00:30:00] because I didn't even know why it was
[00:30:02] working so poor.
[00:30:03] >> Yes. Yes. as and as as you're right like
[00:30:06] the threshold is like as soon as I can
[00:30:08] get this point like maybe it takes a
[00:30:09] little bit longer, maybe it takes a a
[00:30:11] couple of like behavior shifts on my
[00:30:13] end, but as long as I can get it to the
[00:30:15] point where I can like have it do stuff
[00:30:17] and then push it. Uh that's night and
[00:30:19] day from like oh it didn't work and I
[00:30:23] can't get it to work and so I have to
[00:30:24] like
[00:30:25] >> fall back uh to not using it because
[00:30:29] like part of I feel like part of making
[00:30:31] this work is also
[00:30:33] >> it's like this human reinforcement
[00:30:35] learning right and so until it gets good
[00:30:37] enough to be like used in the everyday
[00:30:40] like reinforcement learning process as a
[00:30:42] human you're going to get like a limited
[00:30:44] amount of feedback uh or it's going to
[00:30:46] be much tougher to iterate on on the the
[00:30:48] prompting and the tool descriptions and
[00:30:50] all that scaffolding.
[00:30:51] >> I'll be really interested to see like
[00:30:54] >> how our users react to it because um
[00:30:59] e even with all the tuning like it's not
[00:31:01] going to feel the same as it still has
[00:31:02] its own personality.
[00:31:04] >> Yeah.
[00:31:04] >> But like I I've found I was initially
[00:31:07] really frustrated even after I got it
[00:31:09] working reasonably well because I was so
[00:31:11] used to sonnetisms that like those have
[00:31:15] ingrained themselves into my workflow.
[00:31:17] Yeah.
[00:31:17] >> So, like when GPD doesn't react the same
[00:31:21] way, like what are you doing?
[00:31:23] >> He likes the positive reinforcement.
[00:31:26] >> Yeah. Yeah.
[00:31:27] >> I totally get that. Um I I part of me
[00:31:30] wonders. So, like one of the things
[00:31:31] that's really exciting is the the high
[00:31:34] degree of instructability, which we've
[00:31:35] already touched upon a little bit. And I
[00:31:38] think like that has implications for use
[00:31:39] as like the main agent driver, which is
[00:31:42] like that's that's an experiment that
[00:31:43] will effectively play itself out in the
[00:31:45] next couple weeks as we we see how users
[00:31:47] react to it. But the instructibility
[00:31:49] aspect of it is also exciting because
[00:31:51] that potentially opens it up to being uh
[00:31:55] much more versatile in the use of sub
[00:31:58] aents uh because it's more creatable,
[00:32:00] it's more instructible. And so I wonder
[00:32:02] if if now we'll see a kind of like
[00:32:04] proliferation of sub aents that are
[00:32:06] targeted at different subtasks like you
[00:32:09] know search and retrieval or explanation
[00:32:11] uh explanation at different verbosity
[00:32:13] levels or in different like personas um
[00:32:17] because GBD5 does I mean it does seem to
[00:32:22] obey instructions pretty well in terms
[00:32:24] of like you know what you want it to do,
[00:32:25] how you want it to behave, the style in
[00:32:27] which it answers. Um yeah. Have you had
[00:32:31] the chance to kick the tires on the
[00:32:32] smaller models that were released today?
[00:32:35] >> Uh, no. Have you?
[00:32:37] >> No. I run against them. So, but I I'm
[00:32:41] curious if they have the same uh the
[00:32:44] same properties of GP5
[00:32:47] >> like a little less stupid or a little
[00:32:48] more stupid and a little faster.
[00:32:50] >> Yeah. Yeah. Yeah. The grid is also
[00:32:51] interesting. Did you you you tried it
[00:32:54] with um GPD OSS, right? Or like you
[00:32:57] >> someone did. Uh yeah, I think Nico
[00:33:00] maybe, but I haven't played around with
[00:33:02] El. I've been very focused on DVD.
[00:33:06] >> Yeah, that's the big moment. Yeah, this
[00:33:09] week.
[00:33:10] >> Um, cool. Well, like where do you think
[00:33:13] the the path goes from here? Like now we
[00:33:16] have kind of like two top level models
[00:33:18] within AMP. There's a lot more
[00:33:20] exploration to do. There's also these
[00:33:22] like open source models uh that are
[00:33:24] quickly closing the gap.
[00:33:27] um you know what's what's next on on
[00:33:30] your plate in terms of like evaluating
[00:33:32] models? What are you most excited about?
[00:33:34] >> Yeah. So, uh right now I'm excited about
[00:33:39] um kind of
[00:33:42] productionizing the the bits that we've
[00:33:44] got in the the pipeline. Um so like
[00:33:47] finishing tuning GPT5 as much as that's
[00:33:50] ever a finished job. um like running it
[00:33:55] through more rigorous evals and getting
[00:33:59] user feedback across a more diverse set
[00:34:01] of tasks.
[00:34:03] >> Um but then the other big thing that I'm
[00:34:05] excited about is like this exploring the
[00:34:07] speed dimension.
[00:34:08] >> Um like like I said, that's that's one
[00:34:11] of those that could really change the UX
[00:34:13] of these tools. Um, and I I would love
[00:34:17] to see how far we can push that. And
[00:34:20] like I I mean AMP's usage based model
[00:34:22] makes this easier to experiment with
[00:34:25] because
[00:34:27] uh we don't have to worry about this
[00:34:29] being profitable. Yes. We don't have a
[00:34:32] cost constraint that would force us that
[00:34:35] would close off like some areas of
[00:34:36] exploration.
[00:34:37] >> Exactly. So like I at 2,000 tokens per
[00:34:40] second you can burn through a lot of
[00:34:41] cash
[00:34:42] >> and it's
[00:34:43] >> it's super fast. So, if you're only
[00:34:45] doing 200 tokens, that's fine. But like,
[00:34:47] >> I mean, for me, I'd be happy to burn
[00:34:49] with through a bunch of cash to get my
[00:34:51] job done more quickly.
[00:34:53] >> Yeah. It's like if you could get sort of
[00:34:55] like real time feedback, but at the
[00:34:59] level of quality and robustness that we
[00:35:01] currently see with
[00:35:04] like Sonnet and and GD5,
[00:35:07] I feel like that would change the game.
[00:35:08] Uh, again, like that would be like a
[00:35:10] step function. It would be like
[00:35:11] qualitatively different. um because of I
[00:35:15] mean there's the whole what do they call
[00:35:16] it like the different thresholds of like
[00:35:18] latency at which the human brain like
[00:35:21] perceives it um if you get it to within
[00:35:24] the range of like couple second latency
[00:35:26] for like most tasks
[00:35:28] um it it almost it almost addresses one
[00:35:32] of the key pain points in agentic coding
[00:35:35] uh that I see now and field personally
[00:35:37] which is uh the distraction effect of
[00:35:42] like like You're waiting for it to do.
[00:35:44] >> Do I tab over to Slack?
[00:35:45] >> Yeah. I Yeah. Yeah. It's like you tab
[00:35:47] over to Slack and then you get sucked
[00:35:48] into the Slack thing and then and then
[00:35:50] you're like, "Oh crap, it was doing
[00:35:52] something. Let me go back." And then you
[00:35:53] have to like page in a bunch of context
[00:35:54] again.
[00:35:55] >> Yeah. The uh the threshold that I care
[00:35:59] about is like, "Do I switch to another
[00:36:01] window?" like if I can if it can keep me
[00:36:04] engaged enough that I don't leave and
[00:36:08] like I'm following along with what it's
[00:36:09] doing because it's doing it fast enough
[00:36:10] that I uh don't care even following
[00:36:13] along like that's going to be a a UX
[00:36:16] thing to solve.
[00:36:18] >> Yeah, we're generating this fast.
[00:36:19] >> Yeah. like I can't keep track of tens of
[00:36:21] tool calls being called total every 5
[00:36:24] seconds then and then it's like okay let
[00:36:26] me just see the diff it it it generated
[00:36:27] and we'll see if it it was right or
[00:36:29] wrong or on the right right track. So I
[00:36:32] think we're going to need like new UI
[00:36:35] abstractions even.
[00:36:36] >> Yeah. Yeah.
[00:36:38] >> Uh or there's just like certain elements
[00:36:40] of the UI that don't have to like take
[00:36:42] up user attention or and make it seem
[00:36:45] like they're not waiting. like the whole
[00:36:46] the whole streaming text thing, let's be
[00:36:48] honest, is just a way to show progress
[00:36:52] uh and and holding your attention so
[00:36:54] that you don't get bored because if
[00:36:55] they're like
[00:36:56] >> if if if it rather than screen reading
[00:36:59] text, if it just like had a spinner and
[00:37:01] you had to wait for the whole thing to
[00:37:02] appear at once, I think people would the
[00:37:05] the lived experience of AI would be a
[00:37:08] lot less like magical.
[00:37:11] Um, and and I think it's it's also kind
[00:37:14] of like I'm I'm optimistic here because
[00:37:16] like you said before, it's like the the
[00:37:18] open source models are super fast.
[00:37:20] They're not quite there yet for, you
[00:37:23] know, the full agent stuff and, you
[00:37:26] know, who knows how long it'll take to
[00:37:28] get there. Maybe like next month we'll
[00:37:29] be there, but maybe it'll be like, you
[00:37:31] know, six months from now um or or
[00:37:34] longer. But but I think I'm very
[00:37:36] optimistic that for like um these
[00:37:40] specific tasks like search uh we'll be
[00:37:44] able to get them to a point where they
[00:37:46] can work just as well but be be a lot
[00:37:49] faster. And I feel like um I don't have
[00:37:53] hard tests to back this up, but I feel
[00:37:54] like a lot of times I'm waiting it is
[00:37:56] for like a like uh um like search sub
[00:38:00] agent run to complete because it's doing
[00:38:02] its thing, right? It's finding the
[00:38:04] context and and also it goes back to the
[00:38:07] like you're not showing streaming
[00:38:08] progress because it's all collapsed in.
[00:38:10] >> Yeah, that's true.
[00:38:12] >> It's like Yeah. Yeah. Yeah. like you
[00:38:14] have less patience for uh the sub agents
[00:38:16] in in AMP because um we try to make the
[00:38:19] interface less noisy. Yeah. Interesting.
[00:38:23] Um okay, one last thing uh that we
[00:38:25] haven't discussed yet, the the whole
[00:38:27] like evaluation process, you know, like
[00:38:30] quantitative eval, qualitative eval, uh
[00:38:33] vibe checking. Um what is what is kind
[00:38:37] of like your process and philosophy for
[00:38:40] evaluating models? Yeah. So, I'm I'm
[00:38:44] really heavy into qualitative eval. Um
[00:38:47] like basically every time I've looked at
[00:38:49] a quantitative eval and tried to get any
[00:38:52] useful information out of it, I fail. Um
[00:38:55] because like the the number of
[00:38:58] dimensions that we're trying to measure
[00:38:59] in order to like come to the best user
[00:39:04] experience.
[00:39:05] >> Yeah. it it's it's too many to condense
[00:39:08] into any single number or even like a
[00:39:10] set of numbers that uh captures the how
[00:39:15] this actually feels. Um so like to the
[00:39:18] extent that I care about quantitative
[00:39:21] eval
[00:39:23] um
[00:39:25] is this good enough even to like land in
[00:39:30] our in our radar? Um, and like there
[00:39:34] there's enough out there that I'm
[00:39:36] comfortable uh depending on those to
[00:39:40] kind of do the initial weed through of
[00:39:42] >> this is like the phone screen,
[00:39:44] >> right? It's like kick the tires.
[00:39:46] >> That's a great great way to um Yeah. So
[00:39:50] like and then the other side of this is
[00:39:53] um to give models the best chance, you
[00:39:56] really have to work with them, right?
[00:39:59] like you have to do the tuning ahead of
[00:40:01] time in order to even see how they could
[00:40:05] perform on the types of tasks that we're
[00:40:08] throwing at it in.
[00:40:10] Um, so we have built out like a a
[00:40:14] standard set of tasks that we manually
[00:40:16] run it through and like run it through
[00:40:19] many times and tune the prompts as we go
[00:40:22] and kind of take notes about like
[00:40:25] features of the models that we see
[00:40:27] because like we talked about earlier the
[00:40:30] not only do we want to pick the best
[00:40:32] models for specific task but we also
[00:40:34] want to find what models are good at so
[00:40:36] that we can slot them into the more
[00:40:38] specific
[00:40:39] Um and if we're just measuring for the
[00:40:42] specific things that we care about, then
[00:40:45] we'll fail to discover the the bonuses.
[00:40:49] >> Yeah. It's like if you try to reduce the
[00:40:53] dimensionality of your evaluation
[00:40:55] criteria too much, you basically
[00:40:59] setting yourself up to like miss any
[00:41:01] sort of like new capabilities or
[00:41:03] possibilities.
[00:41:04] >> Yeah. which is very dangerous in AI land
[00:41:07] because new things are emerging like
[00:41:09] every month.
[00:41:10] >> Yes, absolutely. Yeah. And we'd have to
[00:41:13] basically change our eval set every time
[00:41:16] a new model dropped.
[00:41:17] >> Yeah.
[00:41:18] >> Which kind of defeats the purpose of an
[00:41:21] eval set.
[00:41:22] >> Yeah. Yeah. Totally. It's like, oh, it
[00:41:25] didn't pass on this, but the vibes feel
[00:41:27] good, so let's make it pass. And then
[00:41:29] it's like, what are we even doing at
[00:41:30] that point?
[00:41:32] >> Um, yeah. Yeah, I I think that's right.
[00:41:35] Was so what is like a qualitative eval
[00:41:37] then? Is it just like a a workflow that
[00:41:40] you know you did at some point and now
[00:41:43] you just wanted to do it again? And
[00:41:45] >> I mean I start I always start with like
[00:41:47] a vibe check just throwing it in and
[00:41:49] using it for my my daily tasks. Um and
[00:41:53] but then I like it's kind of a set of
[00:41:56] scripts like I maintain a couple open
[00:41:59] source repos.
[00:42:00] nab a
[00:42:02] GitHub issue from there, throw it to AMP
[00:42:05] and say like, "All right, break this."
[00:42:06] >> Yep.
[00:42:07] >> Um and then sometime like another
[00:42:09] dimension is heavily prompted like go
[00:42:12] through this checklist.
[00:42:13] >> Yep.
[00:42:14] >> Um other dimensions are like uh how well
[00:42:18] it uses sub agents to split up large
[00:42:20] tasks or how well it selects the most
[00:42:24] useful tool for a job.
[00:42:25] >> Yeah. um which it that those are things
[00:42:29] that like I don't necessarily want to
[00:42:32] force it in any one direction because
[00:42:35] they can choose different paths and
[00:42:36] that's okay.
[00:42:37] >> Um like GP5 for example doesn't seem to
[00:42:41] uh like running our codebased search
[00:42:43] agent as much.
[00:42:44] >> Yeah.
[00:42:45] >> But it can run a bunch of parallel
[00:42:48] searches at the same time. So it ends up
[00:42:51] being okay.
[00:42:52] >> Yeah.
[00:42:54] It it's almost like um I feel like
[00:42:57] listening you to describe this it's it's
[00:42:58] like the role or the job to be done here
[00:43:00] is like you're a model taster. You know
[00:43:02] what I mean? It's like you know you
[00:43:04] throw all the ingredient
[00:43:05] >> model smellier.
[00:43:06] >> Yeah. Exactly. It's like ah you know
[00:43:11] >> uh sub agent use but with you know more
[00:43:14] from this region. Yeah.
[00:43:17] It's it's funny too because I feel like
[00:43:19] um you know like developers we're very
[00:43:21] technical people. We always like to be
[00:43:23] very scientific and and data driven, but
[00:43:26] it a lot of it does come down to art
[00:43:29] more than science. Even if you talk to
[00:43:32] like uh like ML researchers now, like
[00:43:34] model researchers talk about like, you
[00:43:37] know, how do you know at what point in
[00:43:38] the the training process, do you know if
[00:43:41] it's ready? I feel like you hear like
[00:43:43] similar echoes there. It's like, you
[00:43:45] know, you halt training, you pry the
[00:43:48] model with existing weights, and then
[00:43:50] either you you keep going or you you
[00:43:52] make adjustments along the way. There's
[00:43:54] there is no like scientific method where
[00:43:57] you just like turn the crank and you
[00:43:59] know, it's Yeah, it's kind of
[00:44:01] interesting.
[00:44:01] >> Oh, it is. And like it's frustrating,
[00:44:04] right?
[00:44:05] >> Like trying to do this and like not be
[00:44:10] able to build a graph. uh my my results
[00:44:14] like
[00:44:15] >> frustrating.
[00:44:16] >> I think that's that's one and we've
[00:44:17] discussed this before that's that's one
[00:44:19] area where quantitative emails um do
[00:44:22] seem useful. It's basically like unit
[00:44:24] tests are like regression tests where
[00:44:26] like you're trying to explore some new
[00:44:28] area and get it to work for that but you
[00:44:30] don't want to get into this like
[00:44:31] whack-a-ole state where these other
[00:44:33] there there these other existing use
[00:44:35] cases that are really important. You
[00:44:36] want you want those to remain robust.
[00:44:38] >> Yeah, absolutely. And that's kind of
[00:44:39] what the the setup scripts that I'm
[00:44:42] talking about ask acts as.
[00:44:44] >> Yeah.
[00:44:45] >> Because even if they're human driven,
[00:44:47] they still act as like a um a set of
[00:44:50] regression tests. The things that I
[00:44:52] really do like qual quantitative uh
[00:44:54] evals for though are like more
[00:44:57] observational analysis. Um so like even
[00:45:00] if it's not number goes up
[00:45:03] >> then
[00:45:04] >> being able to look at trends across like
[00:45:08] many runs is really useful. So like if
[00:45:10] even if tool call counts or like I mean
[00:45:14] latencies are one of the really hard
[00:45:16] measurable things that we still have.
[00:45:19] Um, and then like
[00:45:22] things like number of lines generated
[00:45:24] even like how wordy the models are
[00:45:28] those are interesting and like aren't
[00:45:31] something that you necessarily be able
[00:45:33] to just pick up on if you're not uh
[00:45:36] looking at it across a broad set of
[00:45:38] samples.
[00:45:39] >> Totally. Sometimes those point you in
[00:45:41] the direction of like oh um you know
[00:45:44] it's going to behave like this or or
[00:45:46] maybe it reinforces some kind of like
[00:45:48] vague impression that you have like oh
[00:45:52] it seems more verbose. Is the does the
[00:45:54] data bear that out or is am I like
[00:45:56] hallucinating something here?
[00:45:57] >> Yeah absolutely kind of hints you in the
[00:45:59] direction of uh what might be worth
[00:46:02] pursuing?
[00:46:03] >> Yeah. Yeah. Totally. Um, I I also think
[00:46:06] it's it's interesting because I think
[00:46:09] one of the things that overindexing on
[00:46:11] quantitative eval does is it makes it
[00:46:14] seem like
[00:46:16] it's it's like a horse race um or like
[00:46:20] any sort of race, right? Like where
[00:46:21] there's like one winner, you know, first
[00:46:23] place gets the gold medal and then
[00:46:25] everything else is just useless. And I
[00:46:28] feel like with agents especially, we
[00:46:30] might be heading into a world where, you
[00:46:33] know, each model has its own set of
[00:46:35] characteristics and and strengths. Um,
[00:46:39] and so it's maybe it's no longer going
[00:46:41] to be the case where it's like, you
[00:46:42] know, the the main model that you use
[00:46:44] that gets like 98% of your day-to-day
[00:46:47] usage is just one model. you know, we
[00:46:49] don't necessarily have to uh you know,
[00:46:52] like when we're when we're evaluating
[00:46:54] GP5 over the next couple weeks, stop
[00:46:56] like the decision in front of us isn't
[00:46:57] like, you know, sonnet or GPT. It's more
[00:47:01] like let's actually understand the
[00:47:03] strengths of each model and let's see
[00:47:06] how human users react to it, how they
[00:47:10] change their behavior to unlock its
[00:47:12] capabilities. And then and then we just
[00:47:14] had to figure out how to expose these
[00:47:16] things in the application in a way that
[00:47:19] like steers people toward the sweet spot
[00:47:21] of each model. I guess
[00:47:23] >> that steering is a really tough problem
[00:47:25] too. Like
[00:47:27] >> the these tools are so wide open in the
[00:47:31] types of problems that they can solve
[00:47:33] that like
[00:47:34] >> I mean everyone on the AMP team uses AMP
[00:47:37] extremely differently.
[00:47:39] You notice that just scrolling through
[00:47:40] the thread feed. It's like who's who's
[00:47:43] got the like 100 message chain versus
[00:47:46] who's doing the kind of like short sweet
[00:47:49] like sniper sniper shot. Uh yeah, and I
[00:47:53] mean I'd call us all expert AMP users,
[00:47:56] but like trying to then even give
[00:48:00] recommendations for how to use AMP is
[00:48:02] difficult because we don't all agree.
[00:48:05] [laughter]
[00:48:08] >> Yeah. And it's one of those things where
[00:48:10] like I think philosophically too we want
[00:48:11] to make we want we want to make a power
[00:48:14] tool right um you know a power tool
[00:48:16] that's easy to use but it's got a tool
[00:48:18] it's got to be a tool that
[00:48:21] I don't know like different people are
[00:48:22] going to use it very differently
[00:48:25] and I don't know do you have thoughts on
[00:48:28] like
[00:48:29] how to do this properly I I mean
[00:48:32] challenge so far but
[00:48:33] >> no it it has and like I mean the thing I
[00:48:38] always try and keep in mind is that like
[00:48:40] you can have a pit of success that users
[00:48:43] aren't forced to fall into.
[00:48:45] >> Yes.
[00:48:46] >> Like a golden path, but you're allowed
[00:48:48] to stray. Like
[00:48:50] >> Yeah.
[00:48:50] >> So I I mean we kind of gone down this
[00:48:53] direction with our public blog posts,
[00:48:56] right? Just Yeah.
[00:48:56] >> This is how I use AMP. Not it's not
[00:48:58] prescriptive, it's descriptive.
[00:49:00] >> Yeah.
[00:49:01] >> Which I I think works well and gives
[00:49:03] people ideas.
[00:49:04] >> Yeah. Kind of baking it too far into the
[00:49:07] product. Yeah, they're almost like
[00:49:09] recipes where like you know if you're
[00:49:11] first starting out try this and then you
[00:49:13] can kind of evolve things. The the
[00:49:15] phrase that comes to mind like know like
[00:49:18] I think it was like uh Borson originally
[00:49:20] which is like um you want to cut with
[00:49:22] the grain with cut with the grain of the
[00:49:24] model. Um, so it's like each model has a
[00:49:29] sort of like natural
[00:49:31] behavior that that like it wants to do
[00:49:35] things in a certain way because it was
[00:49:37] trained to do it in that way.
[00:49:38] >> Yeah.
[00:49:39] >> And you really don't want to go against
[00:49:40] that because then you're just you're
[00:49:42] kind of like fighting against its
[00:49:44] nature. Um, and but like the set of
[00:49:46] things it can do is potentially vast. I
[00:49:48] mean there's like billions and billions
[00:49:49] of parameters. Um, it's Yeah, I don't
[00:49:54] know. Like I I I hate to over like
[00:49:56] anthropomorphize, but in some ways it
[00:49:58] does feel like working with a human
[00:50:00] being, right? Like every human is going
[00:50:01] to be different.
[00:50:02] >> Yeah.
[00:50:02] >> And when you start to work closely with
[00:50:06] someone, it's more about understanding
[00:50:07] their unique talents, their strengths,
[00:50:10] their weaknesses, and how to like
[00:50:12] communicate with them.
[00:50:13] >> Yeah.
[00:50:14] >> I mean, I mean, that's why I used the
[00:50:15] word personality earlier.
[00:50:18] >> It's like you kind get to know the
[00:50:20] sonnetisms and grow to depend on them.
[00:50:23] Um but there will be GP5isms, there'll
[00:50:27] be uh
[00:50:29] Geminiisms.
[00:50:32] >> Do you have any inkling for how to make
[00:50:37] these choices salient to the user at a
[00:50:40] top level? Like I think we're you know
[00:50:43] we we we've been very like public about
[00:50:45] like you know no model selector at least
[00:50:47] not not in the way that it's been
[00:50:48] implemented for like chat based LMS.
[00:50:52] >> Yes. So I mean I I think B that's still
[00:50:55] the right choice just because of how
[00:50:58] sensitive these are to the system
[00:51:00] prompts. Um like we just can't build
[00:51:03] something that works for every model
[00:51:04] well
[00:51:05] >> with its own unique set of system
[00:51:08] prompts. Um but like I really like our
[00:51:12] sub agent model.
[00:51:14] >> Yeah. time where I mean it kind of
[00:51:16] >> it keeps the the agent isolated in its
[00:51:19] own little box and it's clear to the
[00:51:22] user that this is something different
[00:51:24] and behaves differently and it has a
[00:51:27] name. So like the oracle is a name
[00:51:31] describing what it's meant to do.
[00:51:34] >> Yep.
[00:51:35] and it's distinct from the model name
[00:51:37] which today it's 03 but you know we were
[00:51:40] just discussing like you know maybe it's
[00:51:41] time to change um especially because
[00:51:44] there's certain behaviors in GBD5 that
[00:51:46] seem uh especially on like high
[00:51:48] reasoning uh mode right- which seem like
[00:51:52] it could be competitive or or better
[00:51:54] than 03 in some cases.
[00:51:55] >> Oh yeah I I don't think it'll be a hard
[00:51:59] switch.
[00:52:00] >> Yeah. and and then it's like you know
[00:52:02] you've you've changed the implementation
[00:52:04] to make it more or less like strictly
[00:52:06] better. Um and it at that point it's
[00:52:09] like an implementation detail. You don't
[00:52:11] need to surface the underlying model
[00:52:14] identifier to the end user. Uh because
[00:52:17] like honestly it's not just the model
[00:52:19] you're changing, it's also like the tool
[00:52:21] descriptions and the construction of the
[00:52:22] agent and the code that surrounds it
[00:52:24] too.
[00:52:26] So yeah, anyways there's a lot of work
[00:52:28] to to do. We should probably get back to
[00:52:31] it. There's a lot of stuff to explore,
[00:52:32] especially today. Um I don't know any
[00:52:35] any final kind of like parting thoughts.
[00:52:38] >> No, I'm just I'm excited to see how
[00:52:41] Anthropic responds.
[00:52:44] >> Yeah. And you know, I think there's a
[00:52:46] lot of great people there. Insanely
[00:52:48] smart and uh I just feel very fortunate
[00:52:51] to be in this position. I mean, living
[00:52:53] at this time, you know, sometimes you
[00:52:54] get like pinch yourself like what a time
[00:52:56] to be alive. And it's great to have so
[00:52:58] many like intelligent people advancing
[00:53:00] the frontier of of the models. Uh yeah,
[00:53:04] everything's changing and everything is
[00:53:05] going to continue to change. I don't
[00:53:06] think there's like an end in sight yet.
[00:53:08] Not
[00:53:09] >> here for the ride.
[00:53:11] >> Cool. All right.
