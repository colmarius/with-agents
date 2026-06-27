---
title: "The Truth About Coding Agents: Why 90% of Your Time Is Now Code Review"
resourceId: 6
summarySlug: "the-truth-about-coding-agents"
sourceUrl: "https://www.youtube.com/watch?v=Jxz4GJSG8ZA"
videoId: "Jxz4GJSG8ZA"
capturedAt: "2026-06-27T15:03:07.088Z"
channel: "a16z Deep Dives"
language: "en"
kind: "auto-generated"
durationSeconds: 2760
---

## Transcript

[00:00:00] This is the first time in computer
[00:00:01] science I can think of where we've
[00:00:02] actually abdicated like correctness and
[00:00:04] logic to us, [laughter] right? Like in
[00:00:06] the past it was a resource, right? So
[00:00:07] maybe the performance is different,
[00:00:09] maybe the availability is different, but
[00:00:10] like whatever I put in I'm going to get
[00:00:12] back out. But now we're like figure out
[00:00:15] this problem for me. You talk to some
[00:00:17] devs and they're like, you know, I've
[00:00:18] never been more productive, but uh
[00:00:20] coding isn't fun anymore. That's one of
[00:00:21] the things that we're trying to solve
[00:00:22] for. It's like amazing new technology.
[00:00:24] It feels like magic. Never experienced
[00:00:25] anything like this before in my life.
[00:00:27] Then the the the narrative that was spun
[00:00:29] was like this thing will just, you know,
[00:00:30] run our lives for us or it's going to
[00:00:32] kill us all.
[00:00:33] >> Total annihilation
[00:00:34] >> like Terminator and there's just like
[00:00:36] absolutely no danger that like this
[00:00:37] thing's going to, you know, acquire a
[00:00:38] mind of its own and like try to reach
[00:00:40] out the computer and kill you.
[00:00:41] >> If you use this every day, right, this
[00:00:43] idea that this thing could take over the
[00:00:44] world. It's funny.
[00:00:46] >> Exactly. that narrative I think is
[00:00:48] [music] is largely been dispelled within
[00:00:51] our circles but I think that it's it's
[00:00:54] sort of like taken on a life of its own
[00:00:56] in other circles and it's made its way
[00:00:58] to some of the halls of policym in the
[00:01:00] US there's the old adage of like you
[00:01:01] know do you blame it on ignorance or or
[00:01:04] malice I honestly don't know but it is
[00:01:07] clearly like nonsensical and I think
[00:01:09] very much in the [music] the the
[00:01:11] national interests to be still telling
[00:01:13] this story
[00:01:19] behind thanks for coming uh and joining.
[00:01:21] So uh the topic today is AI and coding
[00:01:24] but uh I mean I would say you're one of
[00:01:26] the world's experts on this and so we
[00:01:28] would love to kind of do a deep dive and
[00:01:30] kind of how you view the problem, how
[00:01:31] you view the solution. Of course you
[00:01:33] know you're co-founder and CTO of source
[00:01:35] graph so we'll talk a bit about that as
[00:01:37] well. Of course we've got Guido thanks
[00:01:39] for being here. Um and so maybe just to
[00:01:41] start we can do a bit of a background uh
[00:01:44] on you and then we'll just kind of dig
[00:01:45] into
[00:01:46] >> details.
[00:01:47] >> Yeah. So uh background I've been working
[00:01:49] on uh dev tools for uh more than the
[00:01:52] past decade of my life. Uh started
[00:01:54] source graph um you know about 10 plus
[00:01:58] years ago. Uh brought the the world's
[00:02:00] first kind of like production legit code
[00:02:03] search engine to market and pushed that
[00:02:05] to I think a good portion of the Fortune
[00:02:07] 500. Um, prior to that I was a developer
[00:02:10] at Palunteer, uh, in I guess now it's
[00:02:12] like the early days, right? Um, so
[00:02:14] that's where I met my co-founder Quinn
[00:02:16] and we were working on data analysis
[00:02:18] software and,
[00:02:19] >> uh, a lot of large enterprise code bases
[00:02:22] that were kind of like drop shipped into
[00:02:23] and realized that there was, you know, a
[00:02:25] big need for better tooling for [snorts]
[00:02:26] understanding massive uh, code bases. Um
[00:02:30] and then before that uh I guess relevant
[00:02:32] now is uh I I was at I actually did uh
[00:02:35] machine learning as a as a concentration
[00:02:37] when I was uh doing my studies. So um I
[00:02:40] did some computer vision research.
[00:02:42] >> Did you know that?
[00:02:43] >> Yeah. Under under Daphne Coler at
[00:02:46] an AI guy.
[00:02:47] >> Yeah. Yeah. Like OG AI
[00:02:49] >> Dawson Angler like [laughter]
[00:02:51] stuff or I thought you were systems you
[00:02:53] talked like a systems guy.
[00:02:55] >> Yeah. Yeah. I I mean I for me like this
[00:02:57] whole phenomenon of like LLMs and coding
[00:02:59] it's it's almost like a homecoming of
[00:03:01] sorts cuz I really
[00:03:02] >> I didn't know that. That's awesome.
[00:03:04] >> Definitely taught me AI as well. So
[00:03:06] [laughter]
[00:03:07] >> she's a great teacher.
[00:03:08] >> Yes. Amazing.
[00:03:09] >> I got to say that was like the one class
[00:03:11] I was so happy I comped out of cuz I
[00:03:13] didn't [laughter] think I would do well.
[00:03:15] I didn't if I didn't pass the comp, I
[00:03:17] thought it would defeat me.
[00:03:18] >> I [laughter] think I failed the comp too
[00:03:19] many times. I had to take
[00:03:20] >> You had to take
[00:03:22] There were those [laughter] two. I I was
[00:03:24] the TA for that class actually.
[00:03:26] >> 121 228.
[00:03:28] >> 228. Yeah, that's right. That's what it
[00:03:29] was. Yeah. Yeah. So cool. Great. So um
[00:03:32] so SourceCraft started uh code search
[00:03:36] navigation, but then now you've been
[00:03:38] making ways with AMP which is like you
[00:03:40] know an agent would call it. So maybe
[00:03:42] talk through a little bit about what
[00:03:43] you've been working on maybe pre- AI and
[00:03:46] and and now just to level set.
[00:03:48] >> Yeah. So kind of like the the history of
[00:03:50] the company is uh we were really built
[00:03:52] to make coding a lot more efficient
[00:03:54] inside large organizations and to make
[00:03:56] uh the practice of actually like
[00:03:58] building software way more accessible.
[00:03:59] Um primarily to professional software
[00:04:01] engineers but I think our our eventual
[00:04:03] vision was always to you know expand the
[00:04:05] franchise. Um, and we started by
[00:04:08] tackling like the the key problem which
[00:04:09] is enabling humans to understand code
[00:04:12] because if you've ever worked inside a
[00:04:13] large codebase, you know that that
[00:04:14] probably takes anywhere from like 80 to
[00:04:16] like 99% of the time. And then the
[00:04:19] remainder is when you actually
[00:04:20] understand the problem well enough to to
[00:04:22] actually write the code. Um, so that's
[00:04:25] where we kind of like built up our
[00:04:26] domain expertise. Um, and then when LM
[00:04:29] sort of matured, um, it was something
[00:04:31] that we were always kind of like
[00:04:32] monitoring um, in the back of our minds.
[00:04:35] uh originally looked at uh LLMs and
[00:04:38] embeddings as a way to enhance the uh
[00:04:40] the ranking signals that we're
[00:04:41] incorporating into our search engine. Um
[00:04:45] and then when things really, you know,
[00:04:48] uh hit their stride with chatt and and
[00:04:50] all that, um it was fairly obvious to us
[00:04:52] that there was a big uh opportunity to
[00:04:55] combine, you know, LMS, which are this
[00:04:57] amazing technology, with a lot of the
[00:04:58] stuff that we we'd built up to that
[00:05:00] point. And then I guess to round that
[00:05:02] out, you know, finally our our latest
[00:05:04] product is this coding agent called AMP.
[00:05:06] >> Um,
[00:05:07] >> what's interesting about AMP, I know,
[00:05:09] what's interesting about AMP is it's
[00:05:10] kind of a view that's like like like
[00:05:13] a very sophisticated kind of opinionated
[00:05:16] view on agents. Do you share that or is
[00:05:18] that just kind of the outside?
[00:05:20] [laughter]
[00:05:21] >> You know, I would say there's certain
[00:05:22] things that we're doing that I think are
[00:05:24] quite unique. Um but then
[00:05:26] >> it was the it was the top recently on
[00:05:27] one of these um uh on one of these
[00:05:29] benchmarks, right?
[00:05:30] >> Yeah. I think there's like some startup
[00:05:32] out there that compares uh Polar Quest
[00:05:35] merge rates or something and we we
[00:05:36] managed to claim the top spot.
[00:05:37] >> That's awesome. Excellent.
[00:05:39] >> Yeah. Um yeah, it was very gratifying to
[00:05:42] see. Um but again, like you know, I
[00:05:44] would say that I I think we're
[00:05:45] opinionated on on some parts of our
[00:05:48] philosophy of building agents. Um, and
[00:05:50] my own take is I think a lot of these
[00:05:52] opinions will soon become widespread.
[00:05:55] Um, but there's other elements of what
[00:05:57] we're doing which are you know like
[00:05:58] people like to read in uh a lot to AI
[00:06:01] these days and sometimes it's just like
[00:06:03] look you know we actually did something
[00:06:05] very simple here it yielded good results
[00:06:07] and you know we ship that and it works
[00:06:09] very well.
[00:06:10] >> Okay. So I think your focus is really on
[00:06:12] on large code bases. How's that
[00:06:14] structurally different from you know me
[00:06:15] coding my little homebrew 2011?
[00:06:17] >> Yeah. So, [clears throat] it's funny you
[00:06:18] mentioned that like historically the
[00:06:20] company's focus has really been on large
[00:06:22] code bases but with AMP we decided to
[00:06:24] build it um almost completely separate
[00:06:26] from the existing code.
[00:06:28] >> Um and the reason for that was uh one uh
[00:06:32] we built AMP uh AMP is really at this
[00:06:35] point uh like seven eight months old. So
[00:06:39] we we started AMP in around like
[00:06:42] February or March this year and that was
[00:06:44] right at the wave of uh uh this new type
[00:06:48] of LM hitting uh hitting the world. The
[00:06:51] like agentic tool use LLM. Um
[00:06:53] >> finally worked. Yeah.
[00:06:54] >> Yeah. Finally worked, right? Like after
[00:06:56] after so many demo videos uh finally
[00:06:58] there was there was a model that could
[00:06:59] actually uh do robust tool calling and
[00:07:02] and compose that with reasoning. And
[00:07:05] you know our original TAC was like okay
[00:07:07] let's build this into some of the
[00:07:08] existing things that that we've created.
[00:07:10] But the more we started playing around
[00:07:11] with the technology the more we sort of
[00:07:13] came to the conclusion that this was
[00:07:14] actually truly disruptive and we should
[00:07:16] actually start from first principles to
[00:07:18] see you know build the agent from the
[00:07:19] ground up and see what tools we really
[00:07:21] need. So what we've arrived at is uh is
[00:07:25] a coding agent which works I think very
[00:07:27] well in large code bases because again
[00:07:29] you know we push this to a lot of our
[00:07:30] customers but it's also great for like
[00:07:33] hobby coding um like I spun my dad up
[00:07:35] recently uh on it and he's been using it
[00:07:38] to create these like iPad uh games for
[00:07:41] our our kid uh cuz you know typical
[00:07:44] Asian dad passion. [laughter] I'm trying
[00:07:46] to teach him math right like I want to
[00:07:48] teach him uh you know arithmetic and and
[00:07:50] whatnot.
[00:07:50] >> That's awesome. Um and so and so my dad
[00:07:53] who's never like written a single line
[00:07:55] of code in his life is able to just like
[00:07:57] hey you know make a simple game that has
[00:08:00] him count the numbers and then if he
[00:08:01] gets it right the little rocket ship uh
[00:08:04] blasts off. So it's kind of interesting.
[00:08:06] It's it's a really interesting time to
[00:08:07] be building because even if you're
[00:08:09] building for like you know uh
[00:08:11] professional uh developers as as we are
[00:08:14] a lot of the technology ends up being
[00:08:16] just kind of like widely accessible.
[00:08:18] This is the new parenting because your
[00:08:20] job as a parent is not to write the
[00:08:21] games for your [laughter] kids that are
[00:08:22] age appropriate and well integrated with
[00:08:25] curriculum what they what they're
[00:08:26] supposed to learn.
[00:08:26] >> Yeah, I love it.
[00:08:27] >> Another thing that's been um kind of
[00:08:29] made kind of splash is you've recently
[00:08:30] decided to go to an advertisement based
[00:08:33] model. So like on one hand so I've got
[00:08:35] this dissonance internally [laughter]
[00:08:36] which is on one hand I'm like this is
[00:08:38] the boutique you know like sophisticated
[00:08:41] on the other hand I'm like and it's also
[00:08:43] for everybody with ads and so like how
[00:08:44] do you kind of reconcile? It's really
[00:08:46] funny because I think we we had this
[00:08:48] sort of reputation for being like the
[00:08:50] primo agent, like the super intelligent
[00:08:52] one, but you know, we we would never we
[00:08:54] never had like a flat rate pricing
[00:08:56] model. We did pure usage based pricing
[00:08:58] and that also meant that there was never
[00:08:59] any incentive to you know switch to a
[00:09:02] cheaper model for our users. So like our
[00:09:04] our TAC was like you know the most
[00:09:05] intelligence and you just pay for the
[00:09:07] inference cost. Um but as we built more
[00:09:11] and more we we we kind of realized um
[00:09:13] you know there's sort of this efficient
[00:09:15] frontier that you can draw um this like
[00:09:17] 2 x two grid and one axis is
[00:09:19] intelligence uh but the other axis is
[00:09:21] latency
[00:09:22] >> um and there's multiple interest points
[00:09:26] uh along this trade-off curve. It's not
[00:09:29] just that you know having the smartest
[00:09:30] model uh makes your experience the best.
[00:09:33] uh the smartest model often tends to be,
[00:09:36] you know, a significant amount slower
[00:09:38] than than other models on the market. Um
[00:09:40] and so we we we felt that there was like
[00:09:42] a an opportunity for us to create create
[00:09:45] like a a faster tople agent that could
[00:09:47] do, you know, couldn't do as as complex
[00:09:50] of of coding tasks, but it could do
[00:09:51] these like targeted edits. Um and when
[00:09:54] we started to play around with these
[00:09:55] small f fast models, we realized that
[00:09:57] like, hey, actually, you know, the
[00:09:58] inference costs are significantly lower.
[00:10:01] Um, and that got us thinking like, you
[00:10:03] know, going back to, you know, folks
[00:10:04] like my dad, right? Like he's just doing
[00:10:06] this stuff on the side. He doesn't want
[00:10:07] to spend hundreds of dollars per month
[00:10:10] uh to create these kind of like simple
[00:10:11] games. We're like, hm, maybe there
[00:10:13] there's like a a model here. I think it
[00:10:16] started as a joke. Someone's like, we
[00:10:17] should just do ads and see how that uh
[00:10:19] how that works. And everyone was like,
[00:10:21] nah, like that'll never work.
[00:10:23] >> But then it just it kind of kept coming
[00:10:25] coming back up. And at one point, we're
[00:10:26] like, all right, let's just let's just
[00:10:28] try it and and see how it works. and you
[00:10:30] know we launched it and and it's been
[00:10:31] growing very quickly since then.
[00:10:33] >> Can I can I dig philosophically into
[00:10:34] this just a little bit? So um I so um so
[00:10:37] I had a conversation with somebody that
[00:10:38] works on cloud code um which is you know
[00:10:40] it's a very successful CLI tool
[00:10:43] >> and this person is like you know what
[00:10:44] what we've done over time is we've
[00:10:46] literally just removed
[00:10:48] you know stuff between the user and the
[00:10:51] model like that's it like that's like
[00:10:52] kind of like the way that we improve
[00:10:54] things are we just like do less and let
[00:10:56] the model do more. Um, and so I guess
[00:10:59] that that makes, you know, [snorts]
[00:11:02] >> it sounds kind of intellectually or
[00:11:05] intuitively interesting. Yeah. Um, it
[00:11:08] kind of makes sense, but on the other
[00:11:09] hand, it seems expensive [laughter]
[00:11:11] >> cuz you're like you're like here is this
[00:11:14] state-of-the-art model that costs a
[00:11:15] billion dollars to train and like now
[00:11:18] it's just the user and the model. And so
[00:11:19] it's almost like that statement is
[00:11:21] almost contrary
[00:11:23] >> to an advertisement based model or like
[00:11:25] what you're talking about like you know
[00:11:26] like a fast model or smaller models. So
[00:11:29] like are we seeing two parallel paths in
[00:11:31] the industry?
[00:11:33] I so there's definitely um
[00:11:37] you can there's definitely different
[00:11:39] like working styles right like depending
[00:11:41] on the task or maybe depending on the
[00:11:43] person uh you talk to people using
[00:11:45] coding agents and some of them are like
[00:11:47] I just want to write a paragraph long
[00:11:49] prompt and then have have the agent go
[00:11:52] figure it out. I want to come back to
[00:11:53] something that's like mostly working.
[00:11:55] Um, and then there's other people uh who
[00:11:58] say like actually I don't want to do
[00:11:59] that because half the time I myself
[00:12:02] don't have a clear idea of what I want
[00:12:03] yet. Uh, the creative process is sort of
[00:12:05] one where you kind of like figure out uh
[00:12:09] what what the the software looks like as
[00:12:11] as you go along. Um, and sometimes it's
[00:12:13] the same person saying both things,
[00:12:15] right? Like when I go there's some
[00:12:17] features where it's like implement
[00:12:18] billing where I'm like, okay, I know
[00:12:20] exactly what what protocols we need to
[00:12:21] support and the Stripe integration. and
[00:12:23] I know what feedback loops we need to
[00:12:24] hit. Then it's like, okay, big prompt
[00:12:27] agent, go at it. But then there's other
[00:12:29] other types of development where it's
[00:12:31] like, you know, I want to build a a new
[00:12:32] a brand new feature. Um, we we just
[00:12:35] shipped this uh code review panel in our
[00:12:36] editor extension. And uh that was a a
[00:12:41] kind of like situation where I was like,
[00:12:42] I don't actually know what this review
[00:12:44] experience should look like because it's
[00:12:46] not me reviewing other people's code,
[00:12:47] it's me reviewing agents code, which is
[00:12:48] like a new workflow. And for that, I
[00:12:50] kind of did want like a more interactive
[00:12:52] back and forth interaction between me
[00:12:54] and the agent. So, I don't think it's
[00:12:56] necessarily like these these two things
[00:12:59] don't have to be completely separate
[00:13:01] products, but they are distinct uh
[00:13:04] working modalities.
[00:13:04] >> I see. Interesting. That's a great way
[00:13:06] to put it.
[00:13:07] >> How do you think about the difference
[00:13:08] between like using somebody else's model
[00:13:11] like one of the soda labs versus Yeah.
[00:13:15] building your own model versus
[00:13:19] you know using a open source model like
[00:13:21] >> how does that fit in your philosophy?
[00:13:23] Yeah. So I would say our philosophy is
[00:13:26] is not model ccentric. It's more
[00:13:28] agentcentric. So we view the model as an
[00:13:31] implementation detail.
[00:13:32] >> Yeah. I don't know what that means.
[00:13:33] >> Okay. So let me explain. So like when
[00:13:34] you're interacting with uh an agent.
[00:13:37] >> Um at the end of the day you care about
[00:13:39] how that agent is going to respond to
[00:13:41] your inputs. You know what tools it's
[00:13:42] going to use, what sort of trajectories
[00:13:44] it's going to take, what sort of
[00:13:45] thinking it does. Um a lot of that goes
[00:13:48] back to the model, but it's not solely
[00:13:49] dependent on the model. There's a lot of
[00:13:51] other things that can influence how an
[00:13:53] agent behaves. There's the system
[00:13:54] prompt. There's a set of tools that you
[00:13:55] give it. There's a tooling environment.
[00:13:57] There's the tool descriptions. There's a
[00:13:59] sort of instructions that you give it
[00:14:00] for connecting to feedback loops.
[00:14:02] >> Um, and with the same model with wildly
[00:14:05] different like tool descriptions and
[00:14:06] system prompts, you actually get like,
[00:14:08] you know, completely different behaviors
[00:14:10] uh out of that model.
[00:14:11] >> Is is that true in both directions? Like
[00:14:13] with the same prompts and two completely
[00:14:14] different models would get different
[00:14:16] behaviors.
[00:14:16] >> Oh, for sure. For sure. It's like if you
[00:14:17] have like a an agent harness, like a set
[00:14:20] of tool descriptions, and you swap out
[00:14:22] the model, then there's no guarantee
[00:14:23] that that thing is going to work well
[00:14:25] with the model that you swapped in.
[00:14:27] >> Um, and so what what we view as like the
[00:14:30] kind of atomic composable unit is not
[00:14:32] the model. Uh, it's it's this thing
[00:14:34] called the agent, which is uh
[00:14:37] essentially this contract of like user
[00:14:39] puts text in and gets certain behaviors
[00:14:42] uh out. And that agent is really a
[00:14:44] product of both the model plus all these
[00:14:45] other things that I just listed. Um, and
[00:14:47] so when when it comes to like figuring
[00:14:49] out what models we want to use, it's not
[00:14:51] so much like, hey, we want to use like
[00:14:53] the latest quote unquote frontier model
[00:14:55] from uh XYZ lab. Uh, it's really about,
[00:15:00] hey, what behavior do we want the agent
[00:15:02] to take uh or or in some cases the sub
[00:15:05] agent and how do we find the right model
[00:15:07] that uh enables that agent to to do its
[00:15:10] job. It sounds so hard to me like this
[00:15:13] is the first time in computer science I
[00:15:15] can think of where we've actually
[00:15:16] abdicated like correctness and logic to
[00:15:18] a [laughter] certain degree right like
[00:15:19] in the past it was a resource right so
[00:15:21] like
[00:15:21] >> like whatever it's not logic it's like
[00:15:24] okay so maybe the performance is
[00:15:25] different maybe the availability is
[00:15:26] different but like whatever I put in I'm
[00:15:28] going to get back out whether it's a
[00:15:30] database or compute or whatever like
[00:15:31] these are like you know but now we're
[00:15:33] like
[00:15:34] >> figure out this problem for me right so
[00:15:36] you're kind of abdicating like you know
[00:15:38] core logic and correctness
[00:15:40] >> unit test comes back with works 45% of
[00:15:42] the
[00:15:42] >> cases.
[00:15:44] The non-determinism is something that uh
[00:15:46] people struggle with a lot. But I so for
[00:15:48] me I I actually do think you know like
[00:15:50] historically preai like uh when you
[00:15:53] think about computer systems the the
[00:15:54] basic unit of composability is like the
[00:15:57] function call in in programming right so
[00:15:58] it's like when you think about your
[00:16:00] system it's like this function calls out
[00:16:02] to these other functions and those other
[00:16:03] functions delegate to these other
[00:16:05] functions. I do think there there's
[00:16:07] still an analog to that in the agent
[00:16:09] world. Like the agent is really the
[00:16:10] analog of the function but just updated
[00:16:12] or generalized to AI.
[00:16:14] >> Can I could just push on this because I
[00:16:15] I I mean listen call me a
[00:16:17] traditionalist. Yeah.
[00:16:18] >> But for for me like like computer
[00:16:20] infrastructure is compute, network and
[00:16:22] storage, right? And like databases and
[00:16:24] these are resources that are abstracted.
[00:16:26] They're like like so give me storage,
[00:16:28] give me network. Y
[00:16:29] >> but like
[00:16:31] the semantics like what actually happens
[00:16:35] I write right that's like my code where
[00:16:37] here we're like [laughter]
[00:16:38] >> figure it out for me it's like we're
[00:16:40] abdicating actual like like logic and
[00:16:42] correctness it just feels like in a way
[00:16:44] like a little bit you know like in your
[00:16:46] case for example if you pick up you know
[00:16:48] let's say you're using model v2.1 and
[00:16:51] then you go to model v2.2 like
[00:16:53] [laughter] you're going to have wildly
[00:16:54] different answers right it's almost like
[00:16:56] a new instruction set or something.
[00:16:58] Yeah, you you might have different
[00:16:59] answers, but I think if if you construct
[00:17:01] the agent, right, you're not they're not
[00:17:02] going to be wildly different. Um, so
[00:17:04] like for for instance, like we have a
[00:17:05] sub agent that's designed to search for
[00:17:07] things like uncover uh relevant context.
[00:17:10] And you know, it's it is a bit of dice
[00:17:12] roll every time, right? Like it it takes
[00:17:13] a a slightly different trajectory, might
[00:17:15] search for different things. Um, but
[00:17:17] it's to the point now where if I want to
[00:17:20] find something in the codebase, I have
[00:17:22] like 99% confidence that this thing will
[00:17:25] eventually be able to kind of like
[00:17:27] stochastically iterate to the right
[00:17:29] answer.
[00:17:30] >> Um, and so in in that uh in in that way
[00:17:34] of thinking, it's like yeah, how it gets
[00:17:35] there might vary, but if I wanted to do
[00:17:38] a specific thing, it's reliable enough
[00:17:39] that I can I can invoke it. It feels
[00:17:41] like there's kind of a backlash right
[00:17:43] now in the industry to eval
[00:17:47] problem or like a runtime system
[00:17:49] problem.
[00:17:49] >> Yeah. So, you know, my my take on evals
[00:17:52] is uh eval are definitely effective as a
[00:17:56] sort of like unit test or a smoke test.
[00:17:59] >> Yeah.
[00:17:59] >> Uh because if you push a change to your
[00:18:00] agent uh and it breaks something, uh you
[00:18:03] want to know, right? Like if there's
[00:18:04] like an important workflow that you're
[00:18:06] like, "Hey, this should work reliably
[00:18:07] well because if this doesn't work, then
[00:18:09] probably a lot of other things break."
[00:18:10] And that's a great uh instance where you
[00:18:12] want you want an eval that will alert
[00:18:14] you when when it goes from green to to
[00:18:17] red. I think where it gets hairier is
[00:18:20] treating evals as a kind of like
[00:18:23] optimization target. Um because right
[00:18:26] >> any eval set like what are you trying to
[00:18:27] capture? If you're building an end user
[00:18:29] product at the end of the day what you
[00:18:31] care about is the product experience.
[00:18:33] And so you construct the eval set to
[00:18:34] kind of proxy the vibes of the user
[00:18:37] using the product. And by definition
[00:18:39] that means your eval set is always like
[00:18:40] lagging a little bit from the frontier
[00:18:43] because it takes time to like distill
[00:18:45] what what is a good product experience
[00:18:47] into a set of evals. And we've had
[00:18:49] multiple times in our past where we've
[00:18:51] picked a number just to take an example
[00:18:54] like with you know back in the kind of
[00:18:56] like code completion days uh of you know
[00:18:59] 2023 or whatnot. Um we we had uh uh a
[00:19:03] coding tool that would do coding
[00:19:05] autocomplete and the the kind of like
[00:19:07] banner topline metric there was
[00:19:09] completion acceptance rate you know like
[00:19:11] >> given that I I I uh suggest this change
[00:19:13] to the user what is the likelihood
[00:19:14] they're going to accept that seems like
[00:19:16] you know bulletproof right but actually
[00:19:18] like I think in building that we ended
[00:19:20] up overoptimizing that to a certain
[00:19:22] extent because there's and like any
[00:19:24] metric you choose there's going to be a
[00:19:25] way to game it
[00:19:26] >> well I mean even even in this one like
[00:19:27] okay so like the developer accepts it
[00:19:29] but do they end up committing it.
[00:19:31] >> Yeah.
[00:19:31] >> Oh, they committed it, but it, you know,
[00:19:33] like whatever. Did like did it pass
[00:19:34] code?
[00:19:35] >> Did the Did the PR get there's like a
[00:19:37] subtle bug introduced or or whatnot or
[00:19:40] Yeah.
[00:19:41] >> You know, did it get merged into Maine?
[00:19:42] Like I mean, it just feels like, you
[00:19:44] know,
[00:19:44] >> Yeah. Yeah. You know, like I this is
[00:19:46] this is kind of an adjacent topic. Um
[00:19:48] but um something that Guido and I
[00:19:50] discuss a lot is to what extent the
[00:19:53] market is paro efficient on the prao
[00:19:56] frontier. Like if you can trade off like
[00:19:59] let's say performance for cost or
[00:20:02] intelligence for cost like will the
[00:20:04] market kind of adopt that uniformly or
[00:20:06] does it just optimize only for speed or
[00:20:09] o only for correctness like yeah
[00:20:12] >> being on the front lines we would love
[00:20:15] [laughter]
[00:20:15] >> you know your sense on this
[00:20:17] >> question we ask this question a lot and
[00:20:19] nobody seems to know like
[00:20:20] >> like it is the the question here like
[00:20:22] what matters more speed or intelligence
[00:20:24] >> is whether the prao frontier is what
[00:20:26] matters or It's kind of there's all
[00:20:27] there's points on the prao frontier that
[00:20:28] matter, right? So you can imagine so so
[00:20:30] so traditional pricing psychology is
[00:20:33] >> you're the expensive one or you're the
[00:20:34] cheap one, right? And like and and
[00:20:36] everything in the middle is called the
[00:20:37] value gap which like people don't use,
[00:20:39] right? Yep.
[00:20:39] >> And so
[00:20:40] >> originally we're like oh the prayer like
[00:20:42] that happens here. So either you buy the
[00:20:44] most expensive one or you buy the
[00:20:45] cheapest one. But actually as we kind of
[00:20:47] look in the market, I actually feel like
[00:20:49] most of the frontier is pretty full like
[00:20:50] like developers are pretty sophisticated
[00:20:53] like you know different you know there's
[00:20:54] different cost sensitivities, different
[00:20:56] price sensitivities. So
[00:20:57] >> yeah. So you know it's funny that you
[00:20:59] mentioned this like you know the cheap
[00:21:01] option versus like the premium option.
[00:21:03] Um it just so happens that AMP has two
[00:21:06] top level agents. There's a smart agent
[00:21:07] and there's a fast agent.
[00:21:08] >> Oh that's interesting. And the fast
[00:21:10] agent is the one that's ad supported
[00:21:11] like that we can offer for for free and
[00:21:13] the smart agent is the one where we're
[00:21:15] like okay we're not uh we will always
[00:21:17] only do usage based pricing for that
[00:21:19] because we want to keep that at the
[00:21:20] frontier of smartness.
[00:21:22] >> But that being said like I I don't know
[00:21:24] like maybe there's like a third point in
[00:21:25] there that could make sense. It
[00:21:27] >> it really just comes down to the vibes
[00:21:29] at the end of the day like as we use
[00:21:30] this more heavily and see the usage
[00:21:32] patterns emerge.
[00:21:32] >> The mid agent. [laughter]
[00:21:34] >> Yeah. The mid agent. Like I I honestly
[00:21:38] Yeah.
[00:21:39] >> [laughter]
[00:21:41] >> Well, if you put it that way, they're
[00:21:42] like, oh, like, yeah, the galaxy brain
[00:21:44] ideas, you either want, you know, smart
[00:21:46] or [laughter] fat.
[00:21:48] >> Cool. So, um, I would I mean, if you're
[00:21:50] open to, I'd love to dig into a bit on
[00:21:52] kind of your view on on open-source
[00:21:54] models.
[00:21:56] >> Do you use them?
[00:21:57] >> Yes.
[00:21:58] >> You know, do you think that they are
[00:22:00] important part of the ecosystem?
[00:22:02] >> Yeah. So, so we do use um a variety of
[00:22:06] uh open source models. uh you know we
[00:22:08] use both closed source and and open
[00:22:10] source models uh quite heavily but the
[00:22:11] open source ones um I think are are
[00:22:15] becoming a bigger theme now um for for a
[00:22:17] couple reasons um one is you know with
[00:22:19] with an open open source or open weight
[00:22:21] model uh you can post train them uh
[00:22:24] right uh which means like if you have a
[00:22:26] a domain specific task like AMP has uh a
[00:22:29] growing number of sub aents that are
[00:22:31] specialized for a specific task like
[00:22:32] context retrieval or like uh extra
[00:22:35] reasoning uh library fetching.
[00:22:38] >> Um those are are uh more constrained
[00:22:41] tasks where you don't necessarily need
[00:22:43] like frontier general intelligence. Uh
[00:22:45] if anything, you want faster, right?
[00:22:47] >> Um and so the the benefit of having open
[00:22:50] weight models is you can look at the
[00:22:52] thing that you're trying to optimize for
[00:22:54] like what that sub agent needs and
[00:22:55] post-train the model to accomplish that
[00:22:58] uh more more effectively. Um, and the
[00:23:02] other element of of openw weightight
[00:23:04] models that's very appealing is just the
[00:23:06] the pricing aspect u of it. Like there's
[00:23:09] now more and more uh like effective
[00:23:12] openweight models uh that are emerging
[00:23:14] on the scene that are actually quite
[00:23:16] robust at agentic tool use. Um you know
[00:23:19] the landscape has changed immensely
[00:23:21] since uh like June of this year. Uh
[00:23:25] we've gone from like you know there was
[00:23:26] really only one really good agentic tool
[00:23:29] use model to now there's like
[00:23:30] >> can you name that I mean it'd be great
[00:23:31] to actually I mean I open
[00:23:33] >> yeah I mean like so you know originally
[00:23:35] there was uh claude right like sonnet or
[00:23:38] or opus that was the first agentic tool
[00:23:39] use model and that sort of you know
[00:23:42] ushered in in the current agent wave um
[00:23:45] but now you know there's uh GP5 uh
[00:23:49] there's uh Kimmy K2 there's Quenfrey
[00:23:52] Coder GLM
[00:23:53] >> are these are these open- source models
[00:23:56] like on par or pretty close.
[00:23:58] >> Um, it depends on the workload. So, I
[00:24:02] would say in our evaluations for kind of
[00:24:04] like the top level smart uh coding agent
[00:24:08] driver, um, we we still tend to prefer
[00:24:12] uh uh Sonnet or uh GP5. Um but for uh
[00:24:20] kind of like quick targeted edits or
[00:24:23] specific sub aents um I think more and
[00:24:26] more uh we're preferring uh smaller
[00:24:28] models because they have better latency
[00:24:30] characteristics and uh because the the
[00:24:34] complexity of the tax isn't high like
[00:24:36] you reach a ceiling. It's like once you
[00:24:38] reach a certain uh level of quality uh
[00:24:41] there's diminishing returns and then you
[00:24:43] start optimizing for latency because
[00:24:45] that gets you more you know
[00:24:47] interactivity.
[00:24:47] >> What's the smallest models you can use
[00:24:49] for an effective agent?
[00:24:51] >> Um uh I mean for for an agent right now
[00:24:54] it's probably still fairly large like
[00:24:57] you're talking probably like hundreds of
[00:24:59] billions of of parameters
[00:25:01] um for for kind of like a top level
[00:25:03] agent. But for like search agents, you
[00:25:05] you could go small uh smaller than that.
[00:25:07] And then we also have a model that does
[00:25:10] uh kind of like edit suggestions. So you
[00:25:12] know for those times where you still
[00:25:14] have to go into the code and manually
[00:25:16] edit stuff uh this thing suggests the
[00:25:18] next edit that you'll make. Uh and for
[00:25:20] that uh we use a very small model like
[00:25:23] you know sing single digit billions uh
[00:25:25] of parameters.
[00:25:26] >> So do you train your own models?
[00:25:28] >> Uh yeah we we do. Oh wow.
[00:25:30] >> Uh but I would say we we don't train
[00:25:32] them from scratch. Uh, it's
[00:25:34] >> no no pre-training. It's mostly
[00:25:35] >> no pre-training. Um,
[00:25:36] >> that would be dumb.
[00:25:37] >> Yeah. [laughter]
[00:25:38] At this point, it's just like it would
[00:25:39] be fiscally irresponsible. [laughter]
[00:25:42] >> Probably probably pointless. Yeah.
[00:25:43] >> Yeah.
[00:25:45] >> Are these for special use special use
[00:25:46] cases? Like a lot of the products that
[00:25:48] we work with, let's say just outside of
[00:25:49] coding just like a lot of products that
[00:25:51] we work with, you know, it just I mean
[00:25:54] here's there's this general view
[00:25:55] >> pre-training is done.
[00:25:56] >> Yeah.
[00:25:57] >> Right. Um, paying people to create data,
[00:25:59] we've hit economic equilibrium, right?
[00:26:01] It's like
[00:26:02] >> Yeah. Yeah,
[00:26:02] >> you can keep you can keep paying people
[00:26:04] but like you know we're hitting
[00:26:05] diminishing returns there because you
[00:26:06] need kind of more expensive people and
[00:26:08] like you need 10 times more data and so
[00:26:10] at some point you hit equilibrium
[00:26:11] >> but you know like there's a lot of
[00:26:12] product data out there and there's a lot
[00:26:14] of users out there and like
[00:26:16] >> you know the the the the solution domain
[00:26:19] is enormous and so you can start
[00:26:20] building smaller models and you know so
[00:26:22] like you know like a a is that correct
[00:26:25] and b you know like the models that you
[00:26:27] train do they kind of fit in that
[00:26:28] general pattern of
[00:26:30] >> uh specific smaller models.
[00:26:32] >> I I I think that's uh spot on actually.
[00:26:34] It's like um the the very large
[00:26:37] generalist models were great and they
[00:26:39] still are great for experimentation
[00:26:41] because uh it's almost like you know you
[00:26:43] train this thing on on all sorts of data
[00:26:45] and it's almost like a discovery process
[00:26:47] where like the training team themselves
[00:26:49] don't quite know you know what behaviors
[00:26:50] might emerge. Uh but once you map those
[00:26:53] to specific uh workloads, specific
[00:26:56] agents that you want to build, uh then
[00:26:58] you have a much clearer target. Um and
[00:27:01] you know it's it's widely known that
[00:27:03] like a lot of the model labs do this now
[00:27:04] behind the scenes like they might expose
[00:27:06] an API that's like you know one model
[00:27:08] but behind the scenes they're routing to
[00:27:10] you know smaller models. Uh and you can
[00:27:12] also do that at the application layer
[00:27:13] like if you have an agent architecture
[00:27:15] like we do there's all sorts of
[00:27:17] specialized tasks like we've broken down
[00:27:19] the process of like software creation to
[00:27:22] various tasks like context fetching or
[00:27:25] you know debugging or or things like
[00:27:27] that. Uh and once you have a specialized
[00:27:28] agent for for each then you take a look
[00:27:31] at you know what the agent needs to
[00:27:32] succeed and you try to get the model as
[00:27:35] as small as possible while still
[00:27:37] maintaining uh the the requisite quality
[00:27:39] bar. So, so it sounds like it's not just
[00:27:41] a parto frontier of of quality versus
[00:27:44] cost, but there's like
[00:27:45] >> there's also multiple there's also
[00:27:47] multiple graphs, right? Exactly.
[00:27:49] >> It's basically per uh agent like every
[00:27:52] agent maps to a a workflow.
[00:27:55] >> Yeah.
[00:27:56] >> Uh it's emulating some workflow
[00:27:58] >> uh that you know maybe approximately
[00:28:01] maps to something that a human used to
[00:28:03] do. Maybe it doesn't. But it's it's like
[00:28:05] a it's a sub routine. This is why I go
[00:28:07] back to like the the the function
[00:28:08] analogy. Yeah. Yeah.
[00:28:09] >> Um and and so for for any given age,
[00:28:12] >> it's a sub routine where you abdicate
[00:28:14] the logic. [laughter]
[00:28:16] >> It's just it's a it's a stochcastic
[00:28:18] subine.
[00:28:20] >> Even [laughter] weirder. I mean, now we
[00:28:21] have parameters like how much reasoning
[00:28:22] do you want? So it's a tunable set of
[00:28:24] how powerful do you want to make this?
[00:28:25] What's your budget, right?
[00:28:27] >> But but there's like a mini paro
[00:28:28] frontier for each of these tasks, right?
[00:28:30] And the optimal point along that
[00:28:31] frontier is different for for each task.
[00:28:33] So I actually want to dig into um you
[00:28:36] know like like the open source models
[00:28:38] the implications I mean I know that
[00:28:39] you've got opinions on that we've got
[00:28:40] opinions it's an interesting topic but
[00:28:42] before we do that uh so in 10 years are
[00:28:47] we using an IDE or are we using uh
[00:28:49] agents on a CLI? What happens to
[00:28:50] software engineering [laughter] in 10
[00:28:52] years?
[00:28:53] >> Simple question.
[00:28:54] >> Uh okay so
[00:28:55] >> I mean listen like you're like one of
[00:28:57] the people that has this in the face for
[00:28:59] for quite a while. I'm literally like
[00:29:01] the world expert on this question.
[00:29:02] >> [laughter]
[00:29:03] >> I'm seriously.
[00:29:04] >> Yeah. I So, so here's my take. Like, um
[00:29:07] I don't think it it's not going to be an
[00:29:09] ID that looks like any ID that exists
[00:29:11] today and it's not going to be like a
[00:29:13] terminal that looks like any terminal
[00:29:15] that exists today. Uh my view is that um
[00:29:18] and and I don't think this is like a
[00:29:19] particularly unique view. It's just that
[00:29:21] you know the effect of AI on every
[00:29:22] single knowledge domain including coding
[00:29:24] is that it's just going to enable the
[00:29:26] human to level up, right? So the job
[00:29:28] that you do already like that like my
[00:29:30] job has changed so much in the past year
[00:29:32] like I think about all the kind of like
[00:29:35] uh toilsome like line by line editing
[00:29:38] that I did like a year ago today. It
[00:29:40] seems like completely foreign. I like
[00:29:42] honestly don't think I could go back at
[00:29:44] this point. Um now when I'm doing stuff
[00:29:47] it's it's more at the level of like
[00:29:48] telling the agent to make the specific
[00:29:51] edits or execute like a specific plan
[00:29:53] and I'm really playing the role more of
[00:29:55] like an orchestrator. now and then you
[00:29:57] still have to like pop in and and make
[00:29:59] some manual edits when it gets stuck.
[00:30:01] Um, but increasingly like like I would
[00:30:03] say like by by sheer like lines of code
[00:30:05] volume probably more than 90% of the
[00:30:07] code that that I write these days is is
[00:30:08] through through AMP. Um, and and I think
[00:30:12] it's only going to get higher and higher
[00:30:13] level uh over time. And so when we think
[00:30:15] about like the the interface that a
[00:30:17] human will interact with primarily, I
[00:30:19] think the future looks like uh something
[00:30:21] that allows you to orchestrate the the
[00:30:25] job of multiple agents uh and crucially
[00:30:29] uh something that allows you as the
[00:30:32] human to understand the essentials of
[00:30:35] what these agents are outputting. And I
[00:30:37] actually think that's probably the
[00:30:39] limiting bottleneck today.
[00:30:41] >> Of course. Yeah, comprehension. It's
[00:30:42] like the human comprehension just on
[00:30:43] like does it map to like my
[00:30:45] understanding of like the problem needs
[00:30:47] even at like a business size or like cuz
[00:30:49] there are fundamental trade-offs in
[00:30:51] systems right like
[00:30:52] >> yes but but I think
[00:30:53] >> you can't you can't wish those away
[00:30:54] >> you you can't wish them away and and the
[00:30:56] human is the bottleneck but I think the
[00:30:57] human is still essential and will still
[00:30:59] remain essential 10 years from now in
[00:31:00] software engineering because it's
[00:31:01] fundamentally a creative process. No,
[00:31:03] no, that's what I mean. I sorry, I just
[00:31:04] want to make sure we're talking about
[00:31:05] the same thing. Like a human has in
[00:31:07] their head of what they want to
[00:31:08] accomplish and only the human has that
[00:31:10] in their head, right? And so like often
[00:31:12] that's going to require
[00:31:14] >> choosing a point between two trade-offs,
[00:31:16] right? Like whatever that is. And so
[00:31:18] like there has to be some way that this
[00:31:20] articulation happens. Yes. Yeah. And and
[00:31:22] when you when you talk to like
[00:31:23] practitioners today, like a lot of them
[00:31:25] are very uh uh it's like bittersweet cuz
[00:31:28] like on the one hand it's like oh my god
[00:31:29] like agents they're writing all this
[00:31:31] code and they're actually pretty good at
[00:31:33] it. On the other hand it's like oh I'm
[00:31:35] spending like 90% of my time like
[00:31:38] essentially doing code review now.
[00:31:40] >> Uh which is you know this like the one
[00:31:43] one in 100 dev uh that you talk to that
[00:31:45] says like I really love code review. The
[00:31:47] rest of us are like oh man it's like
[00:31:48] such a drag.
[00:31:49] >> Yeah. while becoming middle managers of
[00:31:51] of coding.
[00:31:52] >> Yeah. Yeah. Exactly. I mean, you talk to
[00:31:54] some devs and they're like, you know,
[00:31:55] I've never been more productive, but uh
[00:31:58] coding isn't fun anymore. And so, you
[00:31:59] know, that's one of the things that
[00:32:00] we're trying to solve for. Actually,
[00:32:01] >> beauty. The elegance is gone. It's now
[00:32:03] all looking at implementations
[00:32:05] requirements.
[00:32:05] >> It's Yeah, it's it's it's it's that, but
[00:32:08] also it's just like the task of like
[00:32:09] reviewing code I think is is a slog. And
[00:32:12] like classical code review interfaces um
[00:32:14] are are just not that good. Like I think
[00:32:16] they were never that good,
[00:32:18] >> but it wasn't like blindingly obvious
[00:32:20] because the the rate at which like lines
[00:32:22] of code were shipping was was
[00:32:25] >> a super simple example, right? Today, if
[00:32:26] I review code from pretty much any
[00:32:28] coding agent out there, typically it's
[00:32:30] just like file by file by file by file.
[00:32:32] >> Yeah. Yeah.
[00:32:33] >> Like grouping this by task or something
[00:32:35] like that or explaining it a couple of
[00:32:37] arrows with little bubbles.
[00:32:38] >> Exactly. [laughter] You are literally
[00:32:40] like
[00:32:41] >> there's so much low hanging fruit here.
[00:32:43] So we we we launched a review panel in
[00:32:46] our editor extension last week. Uh
[00:32:48] that's it doesn't get all the way there,
[00:32:50] but I think it's the first step and it's
[00:32:52] already like it's way better than like
[00:32:54] an existing like code host review tool.
[00:32:56] Uh like it's it's bo mindboggling to me
[00:32:58] that like we live in an age where like
[00:33:00] you can literally have a robot like you
[00:33:03] know one shot a very large change and
[00:33:05] then you pop over to like you know
[00:33:06] GitHub PRs and you're clicking you know
[00:33:08] expand hunk expand hunk expand hunk no
[00:33:11] code [laughter] intelligence can't edit
[00:33:12] >> diagrams.
[00:33:13] >> Yeah. Yeah. Like it just feels like you
[00:33:15] know it's like we have we have like a
[00:33:17] Ferrari engine uh but then part of our
[00:33:20] workflow still requires like strapping
[00:33:22] it to this like horse and buggy style uh
[00:33:24] thing. So
[00:33:26] >> yeah. So it's like I create a microchip
[00:33:28] and then I give you an oscilloscope.
[00:33:30] >> Yeah. [laughter]
[00:33:32] >> Yeah. Exactly. Exactly.
[00:33:34] >> All right. So listen, we're we're moving
[00:33:35] on on time here. So I actually want to
[00:33:36] get more into the policy side because I
[00:33:37] do think like listen, a lot of the way
[00:33:40] this goes is the way the model goes.
[00:33:41] >> Yep.
[00:33:42] >> Um the open source ecosystem, we see it
[00:33:44] all over the place. not not even talking
[00:33:45] about um uh source draft, but I would
[00:33:48] say if a company walks in now that's a
[00:33:52] product company that's that's that's
[00:33:53] decided that they need to post train
[00:33:54] their own models, it's it's it's going
[00:33:56] to be on an open source model. Y
[00:33:58] >> um and more and more of these are
[00:33:59] Chinese models. Um
[00:34:01] >> and so uh you mentioned that you do use
[00:34:04] open source models and Chinese models.
[00:34:05] like how do you think about that as far
[00:34:08] as like a maybe just like the
[00:34:10] implications of the dependency and then
[00:34:12] b what does this mean like yeah maybe
[00:34:14] more holistically with the United States
[00:34:16] and the ecosystem.
[00:34:17] >> Yeah. So like first off like in terms of
[00:34:19] our production setup like every model
[00:34:21] that we hit is hosted on American
[00:34:23] servers. So from like an information
[00:34:24] security point of view I think this is
[00:34:26] like best practice across the industry.
[00:34:28] It's like you you don't hit models that
[00:34:29] are hosted uh uh in China or or
[00:34:33] >> Yeah. So like from from that part it's
[00:34:35] it's fine. Um I would say though if you
[00:34:38] take a step back it it is fairly
[00:34:40] concerning um because uh my view is that
[00:34:45] as the uh the model landscape uh evolves
[00:34:48] um you're going to start to see a
[00:34:50] flattening in terms of model
[00:34:52] capabilities uh right like there's going
[00:34:53] to be a healthy competition at the model
[00:34:56] layer and there's going to be a number
[00:34:57] of op uh options for choosing a model at
[00:34:59] you know a given point in the prao
[00:35:00] frontier.
[00:35:01] >> Yeah. Uh and with that flattening
[00:35:03] there's a strong uh incentive for
[00:35:05] application builders to you know at a
[00:35:07] given capability level use the one
[00:35:09] that's that's open uh for the reasons
[00:35:12] stated before.
[00:35:13] >> Um and because the most capable open
[00:35:16] weight models right now are of Chinese
[00:35:18] origin it essentially means that like
[00:35:21] application builders around the world uh
[00:35:24] are choosing to post train on on top of
[00:35:26] these models. M
[00:35:27] >> um and so if if the US open ecosystem
[00:35:31] doesn't catch up uh we're kind of in
[00:35:34] danger of you know the the world
[00:35:35] migrating to uh a world where most
[00:35:38] systems uh are are heavily dependent on
[00:35:42] uh models of of Chinese origin.
[00:35:43] >> Do do we have competitive US open source
[00:35:46] models right now? Um I mean
[00:35:50] >> any competitive non-Chinese [laughter]
[00:35:53] if you look at Europe
[00:35:54] >> you know we we've sampled uh like a good
[00:35:57] portion of of the model landscape
[00:35:58] because because again like we have all
[00:36:00] these sub agents and agents we want to
[00:36:02] find the the best ones for the job and
[00:36:04] uh frankly like the the ones that we
[00:36:06] find most effective at agentic uh
[00:36:07] workloads they're almost all uh I would
[00:36:10] say they are all of Chinese origin uh
[00:36:12] right now um and that's not to say that
[00:36:14] like there haven't been like good
[00:36:15] efforts by American companies uh it's
[00:36:17] just that, you know, when you plop those
[00:36:19] into uh like an agentic application, uh
[00:36:23] you know, the tool use isn't quite
[00:36:24] robust enough. Uh it's it's not quite
[00:36:27] there yet.
[00:36:28] >> Do you think this is um
[00:36:32] a result of of policy or funding or like
[00:36:36] [laughter]
[00:36:37] >> I I think probably all of the above.
[00:36:40] >> The easy the easy answer is is like yes,
[00:36:43] you know, it's it's a regulatory thing,
[00:36:45] this and that. I just don't know how
[00:36:46] true that is I mean it just turns out
[00:36:47] there's very sophisticated like
[00:36:48] >> you know yeah so it is interesting like
[00:36:50] it's like you know the AI revolution was
[00:36:52] was basically like born and created uh
[00:36:54] in the west uh right and I think
[00:36:57] >> down the street I mean
[00:36:58] >> yeah down the street and uh the US still
[00:37:01] holds a lead in in basically like every
[00:37:03] part of the stack uh you know whether
[00:37:05] it's like chips or you know Frontier
[00:37:07] Intelligence
[00:37:09] >> um like basically every place except
[00:37:11] openweight models
[00:37:13] >> yeah [laughter]
[00:37:14] >> I guess like that's the manufacturing uh
[00:37:17] aspect of it. Yeah.
[00:37:18] >> Um but uh you know from where I stand
[00:37:21] it's like you know if you go back to uh
[00:37:23] the the quoteunquote early days of of
[00:37:25] the AI revolution back to you know 2022
[00:37:28] or so
[00:37:29] >> um I feel like the the narrative that
[00:37:31] was told that was like the dominant
[00:37:32] narrative uh was this one of like AGI at
[00:37:35] that point. Um where it was kind of like
[00:37:37] this it's like amazing new technology.
[00:37:39] It feels like magic right like never
[00:37:41] experienced anything like this before in
[00:37:42] my life. Um and then the the narrative
[00:37:45] that was spun was like, hey, AGI is
[00:37:47] nine. What does AGI mean? Well, either
[00:37:50] uh one, it's like utopia. All our
[00:37:52] problems are solved. This thing will
[00:37:53] just, you know, run our lives for us. Uh
[00:37:56] or it's going to kill us all.
[00:37:57] >> Total annihilation, [laughter]
[00:37:58] >> like Terminator uh uh style outcome.
[00:38:01] >> Skynet. Yeah.
[00:38:02] >> I love I love the bology the biology
[00:38:04] view of this. He's like there's this
[00:38:05] very Abrahamic view of [laughter] it's
[00:38:08] either like God or the devil, right? And
[00:38:10] then he's like, I'm Hindu. [laughter]
[00:38:14] >> He's like, we've got a bunch of gods.
[00:38:16] Some are capriccious, some are nice.
[00:38:18] It's like
[00:38:20] >> I've chosen the Hindu view of this, you
[00:38:22] know.
[00:38:22] >> Yeah. Arguably that view of the model
[00:38:24] landscape was was the right one uh in in
[00:38:27] retrospect. And and I think at the time
[00:38:28] like people like like using these models
[00:38:31] directly uh kind of realized this,
[00:38:34] right? uh is like you use the models um
[00:38:37] they can um they can emulate
[00:38:40] intelligence of of a certain kind but
[00:38:42] it's like mostly pattern matching um and
[00:38:45] there's just like absolutely no danger
[00:38:46] that like this thing's going to you know
[00:38:47] acquire a mind of its own and like try
[00:38:49] to reach out the computer and kill you
[00:38:50] >> if you use this every day right this
[00:38:52] idea that this thing could take over the
[00:38:54] world it's funny
[00:38:55] >> exactly [laughter]
[00:38:56] so like and now if you talk to
[00:38:57] practitioners uh like anyone who's
[00:38:59] building it and increasingly anyone
[00:39:01] who's using it right cuz like now you
[00:39:02] know chatabt has been out for like
[00:39:03] threesome some years and everyone and
[00:39:05] their mom has used it. Uh like people
[00:39:07] kind of understand what the the
[00:39:08] limitations are. So like that narrative
[00:39:10] I think is uh is largely been dispelled
[00:39:13] within uh within our circles. But I
[00:39:16] think that it's it's sort of like taken
[00:39:19] on a life of its own in in other circles
[00:39:21] and it's made its way to some of the
[00:39:23] halls of policym in the US.
[00:39:25] >> It's part of the problem that not every
[00:39:27] policy maker is using LM state today to
[00:39:30] put [laughter]
[00:39:31] it carefully.
[00:39:32] >> Yeah. Yeah. I don't I you know there's
[00:39:34] the old adage of like you know do you
[00:39:35] blame it on uh you know ignorance or or
[00:39:39] malice opportunism. Yeah. Like I I
[00:39:43] honestly don't know like it's it's a
[00:39:44] black box, but it it is like uh it is
[00:39:47] clearly like nonsensical and I think
[00:39:50] very much in the the the national
[00:39:52] interests to be still telling this story
[00:39:54] because it uh one it it it leads to kind
[00:39:57] of like overemphasis on on like the
[00:39:59] model as the end- all beall of of uh AI
[00:40:03] where in reality it's like pushing this
[00:40:05] pushing the models into like all these
[00:40:07] different application areas where like
[00:40:08] the rubber meets the road and things
[00:40:09] become useful.
[00:40:11] >> Yeah. Um, but then also like when you're
[00:40:12] when you think about making laws and
[00:40:14] regulations for this sort of stuff, if
[00:40:16] you know you've been sold on this sort
[00:40:17] of like Terminator style narrative, um,
[00:40:20] that's going to put you in a very
[00:40:21] different mindset with respect to how
[00:40:23] much risk tolerance you're willing to
[00:40:24] take on, how much innovation you're
[00:40:25] going to allow, uh, in the ecosystem and
[00:40:28] your tolerance for, uh, open sourcing
[00:40:30] uh, model weights.
[00:40:32] So um you know you use a bunch of open
[00:40:36] source models and there's a question
[00:40:37] that we actually debate quite a bit
[00:40:39] which is
[00:40:41] assume the policy environment exists as
[00:40:43] it is even with like infinite funding
[00:40:46] and infinite talent. Did you still
[00:40:48] actually build competitive models or
[00:40:49] like now are we at a place that like
[00:40:51] we're just at a disadvantage just
[00:40:52] because the like is it is it is it too
[00:40:54] late to actually assume that we can do
[00:40:55] it without actually changing policy
[00:40:58] >> like build adequate open open way models
[00:41:01] or
[00:41:02] >> well let me give an example like I don't
[00:41:03] know why um open AAI released the open
[00:41:06] source models the way they did um but it
[00:41:09] seems like they were very very sensitive
[00:41:11] to what data was in them and I presume
[00:41:13] this is kind of concern around
[00:41:14] copyright. I would just I don't know the
[00:41:16] answer to this. I'm just I just assume
[00:41:17] that
[00:41:18] >> interesting
[00:41:18] >> we haven't seen something come out of
[00:41:19] meta in quite a while
[00:41:21] >> like are there even any open source
[00:41:23] model you know so like like it's just
[00:41:24] very unusual for the United States not
[00:41:26] to do this and like the efforts that
[00:41:27] have done it have seemed to be like
[00:41:29] handicapped in one way and so like
[00:41:31] there's one view of the world that like
[00:41:32] this isn't a tech problem it isn't a
[00:41:34] money problem we we're already in the
[00:41:36] overhang of policy like that's one view
[00:41:38] and so like I guess my my specific
[00:41:39] question is do you think that is the
[00:41:41] case or do you think we've just kind of
[00:41:43] you know haven't haven't kind of gotten
[00:41:45] to it yet and ever going to come up with
[00:41:47] open source models?
[00:41:48] >> You know, I I honestly don't know like I
[00:41:50] I don't I don't have like inside
[00:41:51] knowledge of what goes on inside a lot
[00:41:53] of these uh research organizations. Um
[00:41:55] but it's it's super remarkable that like
[00:41:57] here we're the US, you know, we were the
[00:41:59] first with open source models. We had
[00:42:00] Llama 3 and now we like like listen,
[00:42:02] you're you're using Chinese models.
[00:42:04] >> Yeah.
[00:42:04] >> Like where are the US models and and if
[00:42:07] you know and then why aren't they there?
[00:42:08] And I guess my best guess, I mean,
[00:42:11] again, you you both can gut check me on
[00:42:13] this, is like actually there's like like
[00:42:15] all of the rhetoric around like
[00:42:17] developer liability, even though it
[00:42:19] didn't happen, but there was rhetoric
[00:42:20] around it, all of the policy stuff, all
[00:42:22] the copyright stuff, all the lawsuits.
[00:42:24] My guess is is that, you know, a lot of
[00:42:26] these folks are gunshy.
[00:42:28] >> Yeah, I I think that could very well be
[00:42:31] the case. Um, and I think that the the
[00:42:33] way that the reg regulatory uh landscape
[00:42:35] is evolving doesn't help uh at all as
[00:42:37] well because you know there there was an
[00:42:39] effort earlier this year to to have kind
[00:42:41] of like a federal set of standards uh
[00:42:44] for for AI uh model layer regulation but
[00:42:48] that I think fell apart and so now we're
[00:42:50] kind of
[00:42:52] >> like slow walking um some case fast
[00:42:55] walking towards this like patchwork
[00:42:57] quilt of of statebyst state regulations
[00:42:59] which not some of that state regulation
[00:43:01] writes in that it applies to anybody
[00:43:03] making a model available in the
[00:43:05] particular state. So in theory it's what
[00:43:08] one state every state tries to drive
[00:43:11] policy for all the United States. It's
[00:43:12] it's very vaguely uh worded and it
[00:43:15] leaves a lot of room for interpretation
[00:43:17] which is never good I think for
[00:43:20] >> a lot of that has been litigated either
[00:43:21] right so it's I mean it it massively
[00:43:24] increases complexity I think for a small
[00:43:26] startup to build a to build an open
[00:43:27] weight model at this point is extremely
[00:43:29] hard who wants to take that risk
[00:43:31] >> it reminds me like back in the day when
[00:43:33] we were were like looking at uh GDPR
[00:43:35] compliance uh you know when that was the
[00:43:37] first thing and like I was talking with
[00:43:39] like our our legal team and and external
[00:43:41] counsel
[00:43:42] uh and trying to like read the text of
[00:43:44] of that regulation and figure out like
[00:43:46] oh you know is this thing you know
[00:43:48] technically in violation it seems kind
[00:43:50] of high level and the answer I got was
[00:43:52] like look honestly uh these are
[00:43:54] underspecified
[00:43:56] uh and it's really like it's going to
[00:43:58] come down to some uh decision maker
[00:44:01] within you know that that bureaucracy
[00:44:04] and they're going to make a judgment
[00:44:06] call and hopefully they lean towards
[00:44:08] going after you know the bigger fish in
[00:44:10] the pond before they they come after
[00:44:11] you. So, yeah,
[00:44:13] >> paradoxically, this is the greatest gift
[00:44:14] you could have ever given to the large
[00:44:16] social networking giants. These are the
[00:44:17] only ones that actually could have the
[00:44:18] legal teams and the policy teams to
[00:44:20] navigate this stuff. And we saw this up
[00:44:21] close as investors were like as soon as
[00:44:23] these things came up, it basically
[00:44:24] entrenched the incumbents who could come
[00:44:26] play. Last quick topic, if you know, if
[00:44:28] you did have like some recommendation on
[00:44:31] like how we should think about policy
[00:44:32] going forward to kind of aid in,
[00:44:35] >> you know, open source efforts with the
[00:44:36] United States,
[00:44:37] >> Yeah.
[00:44:38] >> what would you guide? do as much as
[00:44:40] possible to ensure a dynamic and
[00:44:42] competitive uh AI ecosystem uh within
[00:44:45] the US. Uh I mean the best thing that we
[00:44:47] can do I mean we're America like uh the
[00:44:48] best thing we can do is is to take a
[00:44:50] step back and let the free market uh
[00:44:52] function. And so to that end like
[00:44:54] >> ensuring there's kind of like a a
[00:44:55] standard uh like you know nationwide uh
[00:45:00] set of regulations that's you know clear
[00:45:03] and you know like well specified to to
[00:45:05] to be going after like specific
[00:45:07] applications. uh and application areas
[00:45:10] rather than you know like general you
[00:45:12] know existential risk at the model
[00:45:14] layer. That would be good. And then two
[00:45:17] um just ensuring that there's like
[00:45:18] competition at the model layer avoiding
[00:45:20] any sort of like anti-competitive
[00:45:22] behavior. Uh
[00:45:24] >> regulatory lock in any of that.
[00:45:25] >> Yeah, regulatory lock in that sort of
[00:45:27] thing. Um you know essentially like you
[00:45:29] know don't let the like Internet
[00:45:31] Explorer versus Netscape thing play out
[00:45:33] the way it did in like Internet 1.0 with
[00:45:36] like the AI ecosystem. Yeah, we're very
[00:45:38] very lucky that actually academia and
[00:45:41] the broad industry ended up airing on
[00:45:42] the side of of openness. Let's hope this
[00:45:44] happens this time too.
[00:45:45] >> Yeah. [music]
[00:45:53] >> [music]
