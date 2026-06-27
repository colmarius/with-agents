---
title: "Power Tool Philosophy"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-5"
sourceUrl: "https://www.youtube.com/watch?v=M8kZLuukZgk"
videoId: "M8kZLuukZgk"
capturedAt: "2026-06-27T15:02:45.365Z"
series: "raising-an-agent"
episode: 5
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3939
---

## Transcript

[00:00:00] Whoever builds the most like powerful
[00:00:02] uh uh interesting uh AI coding agent,
[00:00:07] then that will kind of like steer how
[00:00:09] the next generation of models will
[00:00:11] evolve too because that's that's where a
[00:00:12] lot of the the training data will get
[00:00:14] generated.
[00:00:15] >> Yeah. And models for the most part were
[00:00:16] trained and what we're seeing is they're
[00:00:18] they're very um high affinity for the
[00:00:20] tools that we think that they're trained
[00:00:22] with like things like edit file. Yeah.
[00:00:24] and you know those kinds of things. Even
[00:00:27] um we're seeing like Gemini seem to be
[00:00:29] more reluctant to run shell commands.
[00:00:31] >> Yeah.
[00:00:32] >> And I mean that gets to what we're
[00:00:33] talking about at the beginning. If you
[00:00:34] have MCP jam in like a hundred other
[00:00:36] tools, it hasn't seen any of those. And
[00:00:39] it's not nearly as good at invoking
[00:00:42] them.
[00:00:43] >> But you know that's where the next
[00:00:45] generation of models, they're probably
[00:00:47] going to kind of expand to you know more
[00:00:51] common kinds of tools to call. Right?
[00:00:53] It's kind of an arms race, right? It's
[00:00:55] this the models are not, you know,
[00:00:59] coming back to what we said earlier,
[00:01:00] like if you have a model selector and
[00:01:02] just arbitrary tools, you won't get the
[00:01:05] same result as when you have tools that
[00:01:06] are optimized for one model with which
[00:01:09] it was trained. But then the big labs
[00:01:11] are incentivized to make their models
[00:01:13] work with a lot of different tool
[00:01:14] implementations and have them be as
[00:01:16] generic as possible.
[00:01:24] Welcome everyone to uh another
[00:01:26] installment of Raising an Agent. I'm
[00:01:29] here with Dorston and Quinn. Uh
[00:01:33] >> hello. Nice to be here.
[00:01:35] >> And my name is Bang. And uh we're just
[00:01:37] going to have a casual conversation
[00:01:39] about uh the latest on AMP and coding
[00:01:43] agents. And uh I think this time is a
[00:01:46] little bit different because we're all
[00:01:47] here in the uh uh SF office. Yes.
[00:01:50] >> Uh so it's cool to be in person.
[00:01:53] >> It's no Zoom. It's no 6 a.m. for you.
[00:01:55] It's no 6 a.m. for me. It's in the
[00:01:58] afternoon. It's nice.
[00:01:59] >> Yeah. Awesome. All right. Well, let's
[00:02:01] dive in. I I guess it's been five weeks,
[00:02:03] five long weeks uh since the last
[00:02:05] installment of this. So um feels like
[00:02:08] it's like an eon in terms of uh AI land.
[00:02:10] So, uh, what has changed in the last
[00:02:13] five weeks in the realm of like coding
[00:02:14] agents?
[00:02:17] >> You want to go or should I go?
[00:02:19] >> I'll go. I'll go. I'll I'll say I think
[00:02:23] um even though it sounds smug, I think a
[00:02:25] lot of the stuff we've been saying in
[00:02:27] the first four episodes have turned out
[00:02:29] to be true. like when you look around
[00:02:32] the landscape there's more agents
[00:02:34] there's more um coding agents that are
[00:02:37] based on the same idea that you know
[00:02:38] unconstrained tokens um you have like a
[00:02:41] tool selection
[00:02:43] I think if they would all open up the
[00:02:45] hood you would also see that most of
[00:02:48] them also ripped out a lot of the stuff
[00:02:50] they built before and now replace it
[00:02:51] with claw 37 and tool calls and I think
[00:02:56] a lot of them are you know waking up to
[00:02:58] this So
[00:03:00] yeah, like I don't want to say
[00:03:01] everything we said is going to come
[00:03:02] true, but I think we were right with
[00:03:04] this like a couple weeks back.
[00:03:05] >> Yeah, you published the how to build an
[00:03:07] agent. You walk people through how to do
[00:03:10] that. Yeah.
[00:03:10] >> Subtitle, the emperor has no clothes.
[00:03:13] And yet still we literally publish all
[00:03:16] of our secrets. We tell people how to
[00:03:17] build the damn thing. And then it
[00:03:20] doesn't quite click for a lot of people.
[00:03:22] They say there's no moat. Okay, but what
[00:03:24] is your moat?
[00:03:25] >> Yeah. Yeah.
[00:03:25] >> Why is that?
[00:03:26] >> I don't know. So the the blog post for
[00:03:28] everybody who hasn't read it is it
[00:03:31] explains like how to build your own
[00:03:32] coding agent in 300 lines of code. And I
[00:03:36] wrote this first internally because
[00:03:39] people would use AMP and they would say
[00:03:41] like how do you do this when say it runs
[00:03:44] into a terminal error or how do you do
[00:03:46] this when it fails to edit a file or
[00:03:49] something or how do you do this or this
[00:03:51] and the response has always been we
[00:03:53] don't do anything really. We just send
[00:03:55] the error message up to the model and
[00:03:57] then the model goes and decides to do
[00:03:59] something else. Like example, uh the
[00:04:01] model decides to run a terminal command,
[00:04:04] command not found. There's no logic.
[00:04:06] It's just command not found, send it
[00:04:08] back up, and then the model says, "Let
[00:04:10] me try something else," you know, and
[00:04:11] and the blog post explains it like
[00:04:13] there's nothing. It's just basically all
[00:04:15] text you send up to the model. The model
[00:04:17] comes back down with text. And yet still
[00:04:20] like I I wrote in a blog post that you
[00:04:22] know everything in AMP like you know
[00:04:25] don't mistake this like there's a lot of
[00:04:27] elbow grease in AMP to make it work well
[00:04:29] and to you know like to tune the tools
[00:04:31] to work be more reliable and to make the
[00:04:33] UI look good but ultimately a lot of it
[00:04:36] comes down to the model and still people
[00:04:39] read the blog post and they go but how
[00:04:41] do you do this like there has to be
[00:04:42] something there like there has to be
[00:04:44] something of how you do this and
[00:04:46] >> yeah or they think that there's
[00:04:47] something in our system prompt
[00:04:49] That's genius. Like there's that repo
[00:04:50] that said, "Here's a trillion dollars of
[00:04:53] value. I've taken the system prompts
[00:04:54] from these tools."
[00:04:56] >> Yeah.
[00:04:56] >> And what we've seen is we've gotten a
[00:04:58] lot more people on is people will try
[00:05:01] one thing in AMP and then the same thing
[00:05:03] in like cursor or wind surf or claude
[00:05:05] code and really it's like rolling the
[00:05:08] dice. And if AMP gets it right because
[00:05:12] of you know total luck they're like wow
[00:05:15] AMP is really good. And if we don't,
[00:05:16] they're like, "Oh, this thing, you know,
[00:05:18] sucks." And it's kind of crazy. It's
[00:05:20] like, you know, if you win at blackjack,
[00:05:22] you're not like smart, you know? Yeah.
[00:05:24] >> Right.
[00:05:25] >> Yeah. But it's just like, okay, how well
[00:05:27] I held the cards influenced how the
[00:05:29] model worked or, oh, your cards work
[00:05:31] better at blackjack or something, but
[00:05:33] it's not that's not the case. I think
[00:05:34] there's
[00:05:35] >> and people want to think that it's the
[00:05:36] case because that is their mental model
[00:05:38] for how applications are built.
[00:05:40] >> Like there must be some one weird trick
[00:05:42] that you're doing that makes the agent
[00:05:43] work. I think the system prompt does
[00:05:45] play a role, but if I I don't know, I
[00:05:49] think the model is the biggest thing
[00:05:51] that's still determining stuff. The
[00:05:53] prompt you throw in also has a lot of
[00:05:55] like value, like a lot of influence
[00:05:58] >> and the system prompt has like
[00:06:01] I don't know how to describe it yet, but
[00:06:02] it influences like maybe how aggressive
[00:06:05] or tame the model will be and you know
[00:06:08] what tools it uses for which occasion
[00:06:10] stuff like this. But a lot of the things
[00:06:12] that people point out where here's where
[00:06:14] AMP worked, here's where it didn't work
[00:06:15] or here's where cursor worked or win
[00:06:16] server or whatsoever. I don't like it's
[00:06:19] it's hard to pinpoint it. It's it's hard
[00:06:21] to say, you know, oh, it did this or it
[00:06:24] did this when or this was the system or
[00:06:26] it was this when in fact it was, you
[00:06:28] know, maybe the difference between you
[00:06:30] using a library that's uh I don't know,
[00:06:32] has a new version out and the LLM is
[00:06:34] outdated. So in this case there's
[00:06:35] nothing any system prompt could do. And
[00:06:38] >> yeah.
[00:06:38] >> Yeah.
[00:06:39] >> It's not one weird trick. It's a bunch
[00:06:40] of uh tricks and other things that we've
[00:06:44] implemented along the way in response to
[00:06:46] like failure modes, right?
[00:06:48] >> Yes. I would say it's
[00:06:52] the most important thing is and I you
[00:06:55] know not die on this hill but it's a
[00:06:58] hill I'm willing to stand on right now
[00:07:00] is that I think a good uh curated set of
[00:07:04] tools that's uh tuned and that has good
[00:07:07] prompts. I think that goes a long way
[00:07:10] which is also why I don't really believe
[00:07:12] in the you know here like pick out of
[00:07:16] these hundred tools pick the ones you
[00:07:18] like the best. I don't I think that's
[00:07:20] >> right
[00:07:21] >> that's won't lead to the best result. If
[00:07:23] if for if you just want to have a
[00:07:24] conversation with the model and you only
[00:07:26] have search available then sure only
[00:07:28] enable search but if you wanted to
[00:07:29] actually do stuff in your codebase I
[00:07:31] think you want tools with prompts that
[00:07:33] are tuned to each other.
[00:07:34] >> Yeah. What doesn't work is here's a
[00:07:36] bunch of like here's a hundred like
[00:07:38] different tools where the the prompts
[00:07:40] aren't
[00:07:41] >> aren't tuned and just expected to work.
[00:07:43] That's uh yeah, most of what you see
[00:07:46] from people saying, "Oh, I hooked up
[00:07:47] these seven MCP servers and it's
[00:07:49] amazing." It's a very nicely
[00:07:51] cherrypicked demo path.
[00:07:53] >> Yeah.
[00:07:53] >> And in reality, if you go set up the MCP
[00:07:56] server for GitHub that everyone uses,
[00:07:58] it's got these like write file commands
[00:08:00] and the agent will get that mixed up
[00:08:02] with writing local files and it'll go
[00:08:04] like right to the main branch on your
[00:08:05] repo and you never see those in demos.
[00:08:07] >> Yes. So, you know, there's I think when
[00:08:10] people don't understand that most of
[00:08:12] this comes from the model and they see
[00:08:14] these amazing demos, I can understand
[00:08:16] why they have a totally wrong mental
[00:08:18] model. But actually, the beauty of
[00:08:20] understanding the mental model well is
[00:08:21] it's so simple. And so, if the thing
[00:08:23] doesn't work, go and tweak your agent.md
[00:08:26] file that has the guidelines or go and
[00:08:28] change the prompt.
[00:08:29] >> It's not like other tools, they can do
[00:08:31] this amazing job of taking a really
[00:08:33] shitty prompt that lacks information and
[00:08:35] putting it in. nothing can fill that
[00:08:37] gap. Only you can. But that's really,
[00:08:39] you know, what's missing.
[00:08:40] >> Yeah, I agree. I think there's also
[00:08:42] something that people often forget about
[00:08:44] is that
[00:08:45] >> um every tool you add with like if you
[00:08:48] add like I think GitHub the MCP server
[00:08:50] has like 40 tools or like it has a lot
[00:08:52] of tools and all of that gets added to
[00:08:55] your system prompt and that also makes
[00:08:57] it slower and it also
[00:08:58] >> it's more stuff that the model has to
[00:09:01] think about. So, you know, you give it
[00:09:03] 180 tools because you added four MCP
[00:09:05] servers and then you ask it to do
[00:09:07] something ambiguous,
[00:09:10] it's going to try stuff, you know, but
[00:09:11] it's won't lead to the best experience.
[00:09:14] >> Makes sense. So, in terms of like how
[00:09:16] you would describe what does
[00:09:18] differentiate AMP from other coding
[00:09:22] agents, like we just said that there's
[00:09:23] no one weird trick, there's no like
[00:09:25] succinct way of describing it at the
[00:09:26] implementation level. I think one of the
[00:09:29] things that has emerged as we've been
[00:09:31] talking about this ourselves is just
[00:09:33] like what sort of like persona or what
[00:09:35] sort of like feedback we're optimizing
[00:09:37] for. So yeah, like how how would you
[00:09:40] describe what the kind of like target
[00:09:42] audience for for AMP is?
[00:09:46] It's the person who wants it to work
[00:09:49] well. when you can get out of the
[00:09:51] mindset of people who either don't put
[00:09:54] in the effort to make this new tool work
[00:09:56] for them or who try to catch it like you
[00:09:58] know haha I got it
[00:10:00] >> when they have like a really bad prompt
[00:10:02] >> like those people we want to help them
[00:10:05] eventually but we want to work with and
[00:10:07] build it for the people that want to put
[00:10:09] in a little bit of work that know how
[00:10:12] amazing this can be if it does work well
[00:10:15] and so there's so many piece of feedback
[00:10:17] we've gotten from people that are really
[00:10:18] well intended did where if we had done
[00:10:21] that that would have taken us down a
[00:10:22] route that would have overfit to today's
[00:10:24] model capabilities that would have
[00:10:26] optimized for that user who doesn't want
[00:10:29] to do any work and you know it's like an
[00:10:32] LLM it could be really smart but if
[00:10:35] you're holding fingers behind your back
[00:10:36] it can't count how many fingers there
[00:10:37] are because it does not know that
[00:10:39] information fundamentally
[00:10:41] >> so we also think that the whole idea of
[00:10:44] agents is it can like magnify the impact
[00:10:47] a single person can have so if you've
[00:10:48] got a company with a 100 engineers ers
[00:10:50] and five of them are really good at
[00:10:51] using agents like they will spread that
[00:10:54] gospel to the rest of the devs. You
[00:10:56] don't need to win over all 100. You
[00:10:57] don't need to win over the detractors,
[00:10:59] you know, you can kind of let that soak,
[00:11:01] you know, seek kind of soak into them
[00:11:03] eventually.
[00:11:04] >> Yeah.
[00:11:04] >> Yeah. I I'll add that I for me it's what
[00:11:08] I don't want to build or what I don't
[00:11:10] even what I'm not interested in is this
[00:11:12] tool with you know one line prompt and
[00:11:15] it's like build me a wedding website you
[00:11:18] know and then it just goes and does
[00:11:20] stuff and I don't that's not what I want
[00:11:22] to build what I want to build is this
[00:11:25] you know power drill like a power tool
[00:11:27] that I can use to um get more stuff done
[00:11:31] in code and that helps me the grunt work
[00:11:34] and the busy work and you know all of
[00:11:37] that stuff that you really only start to
[00:11:39] notice
[00:11:40] >> once you see the agent do it. Yeah.
[00:11:42] >> Like a friend and I we were talking this
[00:11:44] morning and he said you know he's been
[00:11:48] recently getting into AI and he made the
[00:11:49] honest effort and he's like I tried to
[00:11:52] use it by just not writing any code and
[00:11:54] by really telling it what I wanted to do
[00:11:56] and he said what I told him earlier that
[00:11:59] don't you know you need to accept that
[00:12:02] it doesn't know certain things. It's not
[00:12:04] a wishing well. So you have to be
[00:12:06] explicit and then you instruct it. You
[00:12:08] send it off and it does stuff for you.
[00:12:10] And what he said was that
[00:12:11] >> he realized how much busy work he has to
[00:12:14] do with normal programming like just par
[00:12:16] fixing the parenthesis here, fixing the
[00:12:18] braces here, moving the import up there,
[00:12:20] renaming this file, blah blah blah blah
[00:12:22] blah. And
[00:12:24] >> I basically I want to have these agents
[00:12:27] that go off and do this stuff for me. I
[00:12:29] don't want I don't want like the build
[00:12:31] me the wedding website. I want
[00:12:33] >> move this over here and refactor this so
[00:12:34] it calls this and then go and do it.
[00:12:36] That's what I want. Like a power tool.
[00:12:38] >> It's it's like there's a difference
[00:12:39] between like good reading your mind and
[00:12:41] bad reading your mind. Like good reading
[00:12:43] your mind is like, oh, you've been
[00:12:44] watching me as I've been doing stuff and
[00:12:47] so you kind of anticipate what I I want
[00:12:49] to do next because there's enough actual
[00:12:50] signal there. Yeah,
[00:12:52] >> bad reading your mind is like, "Oh, I
[00:12:54] just typed in like a a fiveword prompt
[00:12:57] and I expect the whole application."
[00:12:59] Like
[00:13:00] >> almost at like an information theoretic
[00:13:02] level, there's not enough bits of
[00:13:03] information encapsulated that prompt. So
[00:13:05] like
[00:13:06] >> if you're using a tool that actually
[00:13:08] goes and builds the full app for you,
[00:13:10] it's it's kind of just relying on its
[00:13:11] own priors or, you know, what's baked
[00:13:13] into its like training uh data to to do
[00:13:16] that.
[00:13:17] >> Yeah. And then people say, "Oh, well, if
[00:13:18] it doesn't have the information it
[00:13:19] needs, it should ask me." And then of
[00:13:22] course if we went and built it, we said
[00:13:26] we told the agent some in the system
[00:13:28] prompt maybe be more tentative. Ask the
[00:13:30] user if you're not sure. You know, we've
[00:13:32] actually like experimented with some of
[00:13:33] this. And the problem is then people
[00:13:35] say, "I don't want it asking me all
[00:13:36] these things."
[00:13:37] >> Yeah. Why didn't it do this? It should
[00:13:39] do this. It shouldn't ask me.
[00:13:41] >> It's Yeah. It's it's an interesting
[00:13:43] thing where the image I have in mind is
[00:13:46] that it's a senior engineer um that
[00:13:49] doesn't work at this company that
[00:13:50] doesn't know the codebase but if it's a
[00:13:53] senior engineer I can tell that engineer
[00:13:56] enough information so it goes off and
[00:13:58] and does stuff but you know
[00:14:03] certain things that are unspoken I can
[00:14:06] trust it does the right thing you know
[00:14:07] like how to name variables and stuff
[00:14:09] like this I don't have to spell this out
[00:14:11] I wouldn't expect the senior engineer
[00:14:13] that I pull off the tree to know how our
[00:14:16] where our authentication system is used
[00:14:17] or that you know this folder is like an
[00:14:19] old folder. You shouldn't touch this.
[00:14:21] This is you know it doesn't say anywhere
[00:14:23] that it's deprecated. It's just
[00:14:25] something that we all know. So that's
[00:14:27] the mental model I have and I think
[00:14:29] that's still super useful even though
[00:14:31] it's not even close to this like oh you
[00:14:34] know it just knows your codebase and it
[00:14:35] goes and does stuff magically and
[00:14:38] >> you don't ever have to tell it anything.
[00:14:40] >> Yeah. So, so we're kind of optimizing
[00:14:42] for a user set of people who want to use
[00:14:44] AI as like a a power tool.
[00:14:47] >> Yeah.
[00:14:47] >> Right. Um, and so along with that, we've
[00:14:50] kind of curated the early access user
[00:14:53] base of of AMP to
[00:14:55] >> we love our early access users. If
[00:14:56] you're listening and you're in that,
[00:14:58] thank you.
[00:14:58] >> We will keep the tokens flowing if you
[00:15:00] keep the feedback flowing.
[00:15:01] >> It's almost like, you know, we're we're
[00:15:03] training uh like the process of building
[00:15:05] application is is like a training
[00:15:07] process in itself. And we've purposely
[00:15:09] curated our training data, you know,
[00:15:12] like our early access user feedback
[00:15:14] group
[00:15:15] >> uh to be, you know, folks that give sort
[00:15:18] of the feedback that lead towards
[00:15:19] building a really good power tool rather
[00:15:21] than, you know, a read my mind uh kind
[00:15:23] of beginner uh shallow tool.
[00:15:26] >> Yeah.
[00:15:27] >> Um okay, so I I want to talk about some
[00:15:30] of the feedback that we've received
[00:15:31] because it's been really interesting. uh
[00:15:33] we have people who are kind of like
[00:15:35] pushing the frontiers of what is
[00:15:37] possible I think with agents and and
[00:15:39] LLMs uh and there's almost like an
[00:15:42] emerging set of best practices or like a
[00:15:44] meta uh for how to invoke AMP. Uh say a
[00:15:48] bit about that. What are some of the the
[00:15:49] kind of like patterns you've seen
[00:15:50] emerge?
[00:15:52] >> I mean we have thread sharing built in.
[00:15:54] So internally we see how a lot of people
[00:15:57] you know use prompts what they write in
[00:16:00] their prompt. So that's been useful to
[00:16:01] get like glimpses into this and I think
[00:16:03] the uh you know the first step that
[00:16:05] people take is they start by you know
[00:16:10] this is not meta basically this is pre
[00:16:12] you know anything it's just they start
[00:16:13] writing stuff and they then they watch
[00:16:14] the agent go and figure stuff out and
[00:16:16] then they realize I didn't get it. So
[00:16:17] then the next obvious step is like
[00:16:19] everything I know about this problem I'm
[00:16:21] going to put in this you know and all of
[00:16:23] the files that I mentioned I'm going to
[00:16:24] put in this or um that's the first step.
[00:16:26] Then I would say the second step is
[00:16:28] people optimize for feedback loops and
[00:16:30] we've talked about this before here that
[00:16:32] it's okay I wanted to solve this problem
[00:16:34] let me make sure that the dev server is
[00:16:35] running that the URL is accessible for
[00:16:37] the agent so I can put it in and the
[00:16:39] agent fetches the stuff that it needs to
[00:16:40] fetch and it has like a feedback loop
[00:16:41] blah blah blah
[00:16:43] >> and I would say the next stage is what I
[00:16:46] think you've been doing this a lot and
[00:16:48] you know others they have the agent
[00:16:50] write out plan files like first write me
[00:16:52] a file with all of the to-dos that you
[00:16:54] have to do and and and Then they tell it
[00:16:57] to go and only do the first one. Then
[00:16:59] they maybe tell another agent go and fix
[00:17:01] the next one. Tell another agent fix the
[00:17:02] third one or something.
[00:17:05] Then I think there's like this this
[00:17:06] other, you know, early access uses.
[00:17:08] There's this even layer above where
[00:17:10] people just automate all of this and
[00:17:12] spawn different agents and have like
[00:17:14] their own supervisor and whatnot. And
[00:17:15] it's just that's the ultimate level.
[00:17:19] Yeah. But that's not meta that everybody
[00:17:21] uses. business. Yeah,
[00:17:24] >> there's that one individual who's who's
[00:17:26] really pushing the boundaries.
[00:17:27] >> I mean, Jeff Hunley, he's been live
[00:17:29] streaming four or more agents operating
[00:17:32] like 247 when he goes to sleep or when
[00:17:34] he heads out and he is on Twitter and
[00:17:36] there's like 500 people watching them.
[00:17:38] >> Yeah,
[00:17:38] >> it's pretty amazing. And we're really
[00:17:40] lucky to have people like that that are
[00:17:41] pushing the boundaries. Yes.
[00:17:43] >> There.
[00:17:44] >> I would say there's like one other
[00:17:46] thing. You know, what Jeff is doing is
[00:17:50] interesting. He built his own supervisor
[00:17:52] to do, you know, to to restart the
[00:17:55] agents and to kick them into gear again
[00:17:56] and to resume them and make sure that
[00:17:58] nothing is ever idle, that the tokens
[00:18:00] keep flowing.
[00:18:01] >> And Indigo, who was just here, um, he
[00:18:04] also like has multiple agents running at
[00:18:07] the same time. And what both of them do,
[00:18:10] which I think is we talked about this
[00:18:12] before, this big question. What both of
[00:18:15] them do is they organize their codebase.
[00:18:17] So it's even possible to do this. So we
[00:18:20] were just talking to Indigo and he's
[00:18:21] saying well some parts of the codebase I
[00:18:24] know that I will have to write this
[00:18:26] because it's like high signal code and
[00:18:29] then it puts the lines in the sand where
[00:18:31] I can then have four other agents fill
[00:18:33] out the rest.
[00:18:34] >> So they the the feedback loop is that
[00:18:37] you know I want them to go for a really
[00:18:39] long time. How can I do this? Well I
[00:18:41] have to organize the codebase in a
[00:18:42] certain way. And and I think Jeff is
[00:18:44] doing this and I think even you know
[00:18:46] going back to the first few levels of
[00:18:47] meta I think a lot of the users are also
[00:18:49] doing this first obvious step the models
[00:18:52] are you know that's not AMP that's the
[00:18:54] models I think the models are not that
[00:18:56] great at large files yet even though
[00:18:57] they fit in the context window but
[00:18:59] editing large files is is an issue so
[00:19:02] obvious step split up large files like
[00:19:04] why have a 4,000line test file when you
[00:19:06] can have two three
[00:19:07] >> yeah going back to the users that we
[00:19:09] want to build for this came up um we
[00:19:11] have a bunch of customers that for you
[00:19:13] know whatever reasons they have very
[00:19:14] large files and they gave us this
[00:19:17] feedback that it just doesn't work well
[00:19:18] really nothing works that well in these
[00:19:20] large files
[00:19:21] >> and
[00:19:23] I think that they deep down want us to
[00:19:28] be building for the people that care
[00:19:29] more about agents working really well
[00:19:31] than letting them have 9,000 line files
[00:19:34] and they don't have a good reason why
[00:19:36] can't you break it up into multiple
[00:19:37] files.
[00:19:37] >> Yeah. And we really believe that agents
[00:19:40] are so valuable that they will be good
[00:19:41] motivation to break it up.
[00:19:43] >> But like it is so refreshing and frankly
[00:19:46] it helps us move so much faster to just
[00:19:48] say we are not going to try to solve
[00:19:50] that case.
[00:19:51] >> Or there's another person who had a good
[00:19:53] idea totally plausible idea today to
[00:19:55] make it so that if we don't find our
[00:19:56] agent MD file that it will read the
[00:19:59] claw.md file.
[00:20:00] >> Now the problem is if we do that then we
[00:20:01] have to read the cursor rules. winds
[00:20:03] surf rulesclient rules you know whatever
[00:20:06] and then which one what order does it do
[00:20:08] and then it's confusing and that's the
[00:20:10] kind of stuff that we're means we're not
[00:20:12] making the core agent better
[00:20:14] >> so that's yeah another example
[00:20:16] >> yeah I I don't know when we talk about
[00:20:18] one of the first episodes about this
[00:20:20] right like will the codebase bend to the
[00:20:22] agents or will the agents bend to the
[00:20:24] codebase and by now my money is on the
[00:20:28] codebase will bend for the agents like I
[00:20:30] I I I
[00:20:34] you know my argument is I've talked with
[00:20:36] you know we're in San Francisco I talked
[00:20:37] with a bunch of programmers met people
[00:20:39] for coffee and there's been three people
[00:20:41] in the last three or four days that had
[00:20:43] the same CV as I have they you know have
[00:20:46] like 10 years of Vim hardcore Vim only
[00:20:49] terminal I love my editor and now
[00:20:51] suddenly they use VS Code and AMP or
[00:20:54] other you know agents and other editors
[00:20:56] because it's such a multiplier that they
[00:20:59] now realize I don't care really much
[00:21:01] that more about the editor and is there
[00:21:04] a force stronger in a universe than the
[00:21:06] force that can separate the programmer
[00:21:08] from his favorite text editor like
[00:21:09] >> so let me ask you a question I would say
[00:21:11] all the Emacs people I know they've
[00:21:13] already switched like VS code and agents
[00:21:15] and do you think that's because and
[00:21:17] beyond and I use Emacs do you think it's
[00:21:19] because Emacs people are smarter and
[00:21:20] they saw the future earlier or Emacs is
[00:21:22] not as good of an editor so they switch
[00:21:24] sooner
[00:21:24] >> no they do it because they see it as
[00:21:26] another reason to write ELS because then
[00:21:28] they go like well I could have the agent
[00:21:30] also program Emacs, you know, and I
[00:21:32] could access Emacs. It's not The other
[00:21:35] thing is a fall through. That's true.
[00:21:36] >> Yeah. Steve Yaggi, he might be working
[00:21:39] on AMP for Emacs. We'll see.
[00:21:40] >> That's true. That's true. But one of our
[00:21:43] colleagues, Keegan, he's a hardcore
[00:21:44] Emacs guy. And for him, the big light
[00:21:47] bulb moment was
[00:21:50] um you know, going back to there's no
[00:21:52] mode and nothing. for him. He he built
[00:21:55] an MCP server that does Elisp or
[00:21:57] something like he connects to Emacs and
[00:22:00] turns out the models they know ELSP
[00:22:02] well. So he had the agent connect to his
[00:22:04] Emacs instance and ask it you know
[00:22:07] because everything in his life is
[00:22:08] apparently Emacs also emails. So he
[00:22:10] asked the agent like can you find the
[00:22:12] email that you know I first sent to
[00:22:13] Torson or something and the agent went
[00:22:16] and it looked through Emacs because it's
[00:22:17] all text so it's super easy to consume
[00:22:20] and then it found the email like it used
[00:22:22] elisp and it used text and it found the
[00:22:24] thing and return it back and for him
[00:22:26] that was this
[00:22:28] oh [ __ ] like it's you know there's no
[00:22:31] magic like it's truly just text and
[00:22:33] that's also this like finally the Unix
[00:22:35] philosophy coming true like you just
[00:22:36] have to send the contents of the buffer
[00:22:38] back and it gets it you know was And for
[00:22:40] us, as we're thinking about adding
[00:22:42] support for more editors, I think in the
[00:22:44] old world, everyone would think, oh,
[00:22:46] let's go build a Jet Brains plugin.
[00:22:48] >> Let's go build Visual Studio, Emacs,
[00:22:51] Neovim, whatever, blah, blah, blah. Um,
[00:22:53] the way that we're thinking about it is
[00:22:55] VS Code. Let's make that really first
[00:22:57] class. Let's have a great web experience
[00:22:58] and have that work remotely so you can
[00:23:00] beat your kids soccer game and kick
[00:23:02] stuff off.
[00:23:02] >> Let's have a really great CLI.
[00:23:04] >> Yeah.
[00:23:05] >> And see how far we can get there. And
[00:23:07] then any kind of hooks we have in other
[00:23:08] editors would be like not in the
[00:23:10] Jetrains UI. It would just be having
[00:23:12] like AMP's git diagnostics tool call
[00:23:15] into the Jet Brains API, but like just a
[00:23:17] a shim, no UI there.
[00:23:18] >> Yeah. Yeah. Yeah. I think there's like
[00:23:20] something I also talked with somebody
[00:23:22] about this this morning that, you know,
[00:23:25] we've been saying before that the the
[00:23:27] game is you have to stay nimble, you
[00:23:29] have to stay fast. That also means you
[00:23:31] have to keep your surface low. That also
[00:23:34] means you cannot like build elaborate
[00:23:36] integrations into large IDE surfaces
[00:23:40] because it kind of ties you this one
[00:23:41] thing. So
[00:23:42] >> we know from experience very difficult.
[00:23:45] >> Yeah, it's very difficult. And so the
[00:23:46] question this person had was like but
[00:23:48] how do you balance this if the agent
[00:23:52] gets better the more access to
[00:23:53] information they have or the more
[00:23:54] feedback they get from the IDE and the
[00:23:56] tooling? How do you balance this with
[00:23:58] not getting too deep into this other,
[00:24:01] you know, thing? And I I don't know. I
[00:24:03] don't I don't know yet what the
[00:24:05] technical solution is, but I think there
[00:24:07] might be a way where you can, you know,
[00:24:09] wrap other stuff and kind of intercept
[00:24:10] stuff without being super integrated.
[00:24:13] But that's it's a it's a interesting
[00:24:15] question.
[00:24:16] >> Yeah. All right. So a question came up
[00:24:17] from a customer today which is you know
[00:24:20] if they got 20,000 or 40,000 engineers
[00:24:22] or whatever will all of them get full
[00:24:26] agents that can run tools or will there
[00:24:28] be from a cost point of view some
[00:24:30] restrictions
[00:24:31] >> or security like what does that look
[00:24:34] like
[00:24:34] >> what did you say
[00:24:36] >> you first
[00:24:38] >> in my what I said right like for me it's
[00:24:41] a tool that a programmer yields like
[00:24:43] it's it's a thing that makes them more
[00:24:46] productive it gives them more leverage.
[00:24:48] So I would say yeah like give every
[00:24:50] programmer access to this tool like why
[00:24:53] would you hold back? It's I mean cost
[00:24:56] okay but then it's still I don't know
[00:24:59] you know do some engineers get better
[00:25:01] computers than others and you know like
[00:25:03] it's okay if they wait longer for it to
[00:25:05] compile then
[00:25:07] >> I don't know
[00:25:07] >> I think it's like you look at the the
[00:25:09] amount of time that can this can save
[00:25:11] humans and it you know it it more than
[00:25:14] pays for itself for any any uh role uh
[00:25:18] under the very large umbrella of
[00:25:20] software engineer
[00:25:21] >> and I feel like asking that question
[00:25:23] it's almost like you know Do you ask if
[00:25:25] uh some subset of your uh developers can
[00:25:29] access a compiler or something like
[00:25:31] that? I feel like you know uh in the
[00:25:34] very near near future this will become
[00:25:36] kind of like a a must-have uh essential
[00:25:39] part of of any programmer's uh tool
[00:25:42] belt.
[00:25:43] >> Yeah. And before you ask, one
[00:25:45] interesting thing on like the cost, I'm
[00:25:47] surprised by how many people, even I
[00:25:51] would say haters online that don't like
[00:25:54] AI stuff, when people say, I spend, you
[00:25:56] know, the weekend I put like 50 bucks
[00:25:59] into this and I just let it rip or
[00:26:01] something and then it did this. And even
[00:26:03] people that said, "Oh, this is the first
[00:26:05] time I'm using an agent and I just put I
[00:26:07] think somebody was like, I put $70 in in
[00:26:10] tokens and it fixed like this old
[00:26:11] codebase." And instead of saying, "Wow,
[00:26:14] $70, like that's a lot." And you know,
[00:26:16] where people would say, "Why would I pay
[00:26:18] for a text editor?" or something like
[00:26:19] this, like $70 is a lot, but they would
[00:26:21] go, "Huh, compared to my salary,
[00:26:24] compared to a junior def salary, that's
[00:26:26] not that crazy." Like it to me it's
[00:26:27] amazing how quickly people jump to this
[00:26:30] and and and say actually it's fine to
[00:26:32] pay for this because it is making me
[00:26:35] more productive. So what what did you
[00:26:37] say to the the customer?
[00:26:40] >> Yeah, I think that there's the reality
[00:26:42] of rolling it out and it most companies
[00:26:46] are not able to roll out something that
[00:26:48] all of a sudden means you know 20%
[00:26:51] higher cost or 10% higher cost across
[00:26:53] their entire software engineering team.
[00:26:54] So there's probably some phased roll
[00:26:55] out, but yeah, I mean, if if you're
[00:26:57] going to pay for a human, which is way
[00:26:59] more expensive than any of these things
[00:27:01] and that has way more risk, you know, in
[00:27:04] some sense,
[00:27:05] >> then, you know, you're going to want to
[00:27:06] equip them with the best. But it's a
[00:27:08] interesting path between, you know,
[00:27:10] where we are today and and there. And I
[00:27:12] think there are going to be a lot of
[00:27:13] engineering teams that say, you know, if
[00:27:16] an agent costs 20% of a human developer
[00:27:20] salary, it's probably on the high end,
[00:27:22] but let's say, you know, if it gets into
[00:27:23] feedback loops, then they're going to
[00:27:26] have to change the structure of their
[00:27:28] engineering team. Like we've heard from
[00:27:29] a lot of companies that have kept
[00:27:31] engineering headcount flat for various
[00:27:33] economic reasons over the last few years
[00:27:34] and now because they're looking ahead
[00:27:36] and they're seeing maybe we don't need
[00:27:37] more engineers and actually when you
[00:27:40] consider like you know actually cutting
[00:27:41] a team versus not hiring in the future.
[00:27:43] It's the not hiring in the future that
[00:27:44] has a much bigger impact on total
[00:27:46] employment
[00:27:47] >> because let's say you cut you know 10%
[00:27:49] or 20% or something. Obviously that's
[00:27:51] really tough. um you know, and that's
[00:27:53] like a fair number of people, but if you
[00:27:55] look at all the people that you're not
[00:27:56] hiring because you're on a lower
[00:27:57] trajectory, that's actually a lot more
[00:27:58] people that don't have jobs.
[00:28:00] >> Yeah.
[00:28:02] >> Yeah.
[00:28:03] >> Uh back to the tech stuff. Okay. So, I I
[00:28:06] wanted to talk about um because earlier
[00:28:08] we were talking about, you know,
[00:28:09] curating the the feedback that we get
[00:28:11] and being very intentional about what
[00:28:12] feedback we respond to. It's almost like
[00:28:14] we've realized that in order to build
[00:28:17] for this new world, it's we're not just
[00:28:19] building a product, we're also building
[00:28:21] a set of best practices for invoking
[00:28:24] that product and getting the most power
[00:28:26] uh out of out of AI.
[00:28:29] >> Um and and part of that is like the
[00:28:32] feedback loop uh construction. So um say
[00:28:36] more uh about that and I think in one
[00:28:39] thing in particular is you know like
[00:28:41] when people use AMP for the first time
[00:28:43] and I think this holds for a lot of AI
[00:28:45] tools you know there's a a general
[00:28:47] perception that it does better on like
[00:28:49] front-end code uh specifically like you
[00:28:51] know front-end react code
[00:28:52] >> um but we've seen people have success
[00:28:55] with like backend code as well um so
[00:28:57] like how does the like feedback loop
[00:28:59] construction uh play into you know
[00:29:03] getting power and leverage out of this
[00:29:05] and you know beyond just the kind of
[00:29:06] like you know simple react app scenario.
[00:29:10] >> Yeah. I think it you know on the
[00:29:12] simplest level it's um I said this
[00:29:16] before too right that
[00:29:18] if you ask a human to to zero shot 500
[00:29:22] lines they can write you 500 lines but
[00:29:25] they will not be correct. You know you
[00:29:26] need compiler feedback. You need you
[00:29:29] need some indication that what you're
[00:29:30] doing is correct. like the squiggly
[00:29:33] lines, the diagnostics, you run the
[00:29:35] tests, you run the compiler, or you look
[00:29:36] at it in the browser or something. Turns
[00:29:38] out that's the same thing for agents.
[00:29:40] Like you need to give them feedback
[00:29:41] about what they're doing and whether
[00:29:43] it's correct or not. Like if you don't
[00:29:45] show them compiler errors, they might as
[00:29:49] well think you're using swelled four
[00:29:52] instead of five because you just don't
[00:29:53] tell them and the code looks correct. So
[00:29:56] that's the, you know, that's the whole
[00:29:58] idea behind this. And the first step is
[00:30:00] that you know languages that have type
[00:30:02] systems can often produce more helpful
[00:30:04] errors because it kind of gives you
[00:30:06] constraints about what you can put where
[00:30:08] and it kind of uh uh uh you know makes
[00:30:10] the agent put use the code more
[00:30:13] correctly. Mhm.
[00:30:14] >> And then I think beyond that it's about
[00:30:18] um surfacing diagnostics meaning from
[00:30:20] the language server um making sure that
[00:30:23] the agent knows how to build and test
[00:30:25] this and constantly reminding it of it
[00:30:28] which we now do with the agent file or
[00:30:31] you even tell it manually which is what
[00:30:32] I often do like if you work on this
[00:30:34] constantly run this test like just this
[00:30:36] test ignore the others
[00:30:38] >> and then it also knows whether what it's
[00:30:40] doing is right or wrong and
[00:30:42] >> then my favorite bit is and this is
[00:30:44] coming back to React is when you work on
[00:30:47] front-end components and you tell it to
[00:30:49] open the browser and and and look at the
[00:30:51] browser. It's surprisingly good at this
[00:30:54] and it's surprisingly good at
[00:30:55] JavaScript. So with like playright
[00:30:57] integration it can query the DOM it can
[00:30:59] navigate the page and it you know modify
[00:31:02] the page and my favorite experience was
[00:31:05] when
[00:31:07] um who was I think we were on a I was on
[00:31:09] a call with somebody else and I built
[00:31:10] like a Space Invaders game like as a
[00:31:12] demo and then I said can you make sure
[00:31:15] that this still works and it opened the
[00:31:17] game in the browser and the game would
[00:31:19] say press space to start and the agent
[00:31:21] would press space to start and then
[00:31:22] would shoot something at the alien to
[00:31:24] make sure it works.
[00:31:26] And
[00:31:26] >> so you built a weapon system.
[00:31:28] >> I mean, Ender game, you know.
[00:31:31] >> Yeah.
[00:31:31] >> Yeah.
[00:31:33] >> Yeah. When people say AI doesn't work,
[00:31:35] then there's always things that you can
[00:31:37] do because again, there's no mode. These
[00:31:40] things are not complex. So if it doesn't
[00:31:43] work for, you know, your project, the
[00:31:47] first thing to ask is, is it actually
[00:31:49] doing the build? And 90% of the cases I
[00:31:51] see because a lot of people will try
[00:31:54] something it doesn't work and then they
[00:31:55] can share the thread with us in AMP. 90%
[00:31:57] of the time it's not actually running
[00:31:59] the build and then you know we can help
[00:32:02] them. We write the agent.mmd file or
[00:32:04] something like that then it does that
[00:32:05] and then it's you know can it run the
[00:32:06] build in a granular way? Can it run the
[00:32:09] test in a granular way and you got to
[00:32:11] get it in those feedback loops and if
[00:32:13] you do it's not like it's gonna be
[00:32:15] perfect but it is going to be so much
[00:32:17] better. And so, yeah, I mean, I don't
[00:32:19] know. I think it's still just such a
[00:32:21] puzzle for us, and it's why we're saying
[00:32:23] this over and over again to try to
[00:32:25] explain how these things work and how
[00:32:27] moldable they are.
[00:32:28] >> Yeah.
[00:32:29] >> Because you should never stop at, oh, it
[00:32:31] doesn't work for this.
[00:32:31] >> Yeah, it's And talking about build
[00:32:34] tools, you know how some build tools,
[00:32:37] they spit out a lot of warnings and you
[00:32:40] know, the super verbose. Turns out
[00:32:41] that's not good for the agent. And it's
[00:32:43] also not good if I hire a new junior
[00:32:44] engineer and say build this web app and
[00:32:46] it shows up eight warnings. Then I have
[00:32:48] to go over and say
[00:32:50] >> you can ignore those eight warnings.
[00:32:52] They're harmless. But they wouldn't
[00:32:53] know. And the agent the agent also has
[00:32:56] like this other thing with like
[00:32:58] everything goes into the context.
[00:32:59] Everything is under the you know and
[00:33:01] attention mechanism. So it kind of you
[00:33:04] can trip it up by putting unrelated
[00:33:05] stuff in the context window. And so
[00:33:07] there's like this incentive that you
[00:33:10] know they're just like us. The agents
[00:33:12] profit from having good build tools that
[00:33:14] are have clean and actionable output.
[00:33:16] >> Yeah. But as we know sometimes some
[00:33:18] error that seems unrelated actually is
[00:33:20] related. And part of being a programmer
[00:33:22] with a lot of intuition and experience
[00:33:23] is knowing when that is the case. Yeah.
[00:33:25] >> So that's why you know you can't be like
[00:33:26] oh the model should have ignored that
[00:33:28] because as humans you know you can't
[00:33:29] always ignore that either. But there's
[00:33:31] good moments where in our project we
[00:33:33] have like multiple subfolders that are
[00:33:35] pretty independent of each other like
[00:33:37] the you know different packages
[00:33:39] extension CLI for example and then
[00:33:41] sometimes what it would do is it would
[00:33:43] run the build and because I didn't PNPM
[00:33:47] install or something so somebody added a
[00:33:48] dependency to some of the other projects
[00:33:50] that I wasn't working on the model would
[00:33:53] go there's an unrelated error because
[00:33:55] you know but that's unrelated to our
[00:33:57] changes so that's a nice detail. Yeah.
[00:34:00] >> Yeah. But just thinking like that's a
[00:34:03] really valuable feature, but um I'm
[00:34:05] pretty sure that the models were trained
[00:34:07] on some examples where it had errors
[00:34:09] that were unrelated.
[00:34:10] >> Yeah. Yeah. Yeah.
[00:34:11] >> And if you're thinking of the I don't
[00:34:12] know like you know 50,000 examples the
[00:34:15] models were trained on to be really good
[00:34:16] at this kind of tool calling. It's just
[00:34:18] kind of a shame that like 700 of them
[00:34:21] had to be for this kind of thing because
[00:34:23] these people were so [ __ ] stubborn
[00:34:25] where they're like, I wanted to know and
[00:34:27] what are we being robbed of? Because
[00:34:29] that's what the models were having to
[00:34:31] do.
[00:34:31] >> That's a good point. Yeah, that's a good
[00:34:33] point. Like what if they were only
[00:34:35] trained on code bases that were
[00:34:36] optimized for the agents? Like how
[00:34:38] faster could they go? Yeah.
[00:34:40] >> Like if everything was standardized, you
[00:34:42] know?
[00:34:42] >> Yeah.
[00:34:43] >> Yeah.
[00:34:44] >> But yeah, not the real world.
[00:34:45] >> Yeah. I mean I I think over time you
[00:34:47] might start to see this feedback loop
[00:34:49] between uh the model behavior and the
[00:34:53] application layer
[00:34:54] >> uh in terms of like what workflows or
[00:34:57] what um routes through the codebase the
[00:35:01] application kind of like steers you
[00:35:02] toward uh you know that at some level
[00:35:06] generates the training data that then
[00:35:07] gets fed back into the next round of
[00:35:10] like model training. And so
[00:35:12] >> yeah,
[00:35:12] >> uh it's almost like whatever the most
[00:35:15] compelling uh like AI coding agent, like
[00:35:19] whoever builds the most like powerful uh
[00:35:22] uh interesting uh AI coding agent, then
[00:35:27] that will kind of like steer how the
[00:35:29] next generation of models will evolve
[00:35:30] too because that's that's where a lot of
[00:35:32] the the training data will get
[00:35:33] generated.
[00:35:34] >> Yeah. And models for the most part were
[00:35:36] trained and what we're seeing is they're
[00:35:37] they're very um high affinity for the
[00:35:40] tools that we think that they're trained
[00:35:41] with like things like edit file. Yeah.
[00:35:43] >> And you know those kinds of things even
[00:35:46] um we're seeing like Gemini seem to be
[00:35:48] more reluctant to run shell commands.
[00:35:51] >> Yeah.
[00:35:51] >> And I mean that gets to what we were
[00:35:52] talking about at the beginning. If you
[00:35:53] have MCP jam in like a hundred other
[00:35:55] tools, it hasn't seen any of those and
[00:35:58] it's not nearly as good at invoking
[00:36:01] them. But you know that's where the next
[00:36:04] generation of models they're probably
[00:36:06] going to kind of expand to you know more
[00:36:10] common kinds of tools to call
[00:36:12] >> right it's kind of an arms race right
[00:36:14] it's this the models are not you know
[00:36:18] coming back to what we said earlier like
[00:36:20] if you have a model selector and just
[00:36:22] arbitrary tools you won't get the same
[00:36:24] result as when you have tools that are
[00:36:26] optimized for one model with which it
[00:36:28] was trained but then the big labs are
[00:36:30] incentivized to make the models work
[00:36:32] with a lot of different tool
[00:36:33] implementations and have them be as
[00:36:35] generic as possible.
[00:36:37] >> So, you know, there's like this back and
[00:36:39] forth and I don't know, we'll have to
[00:36:40] see where we end up, but it's right now
[00:36:44] I think the state is that you have to
[00:36:47] get a feel for what the model was
[00:36:49] trained for. And I think you know Paul
[00:36:50] from Ader like he's been blogging about
[00:36:53] this since I think a year at least where
[00:36:55] I noticed that in this benchmark this
[00:36:57] model likes this format of diff a lot
[00:36:59] more. And
[00:37:00] >> that's even pre-agentic like he uses his
[00:37:04] own way of tool calling or did and his
[00:37:06] own format for divs and the models work
[00:37:08] with different ways. And I think he had
[00:37:10] this anecdote that he posted somewhere
[00:37:11] where he was using one format of diff
[00:37:15] for one to two model because he thought
[00:37:17] the model would know this but then the
[00:37:19] people who train the model came back to
[00:37:20] him and said actually we also trained it
[00:37:22] on your other thing and then he switched
[00:37:24] and had a performance improvement. So
[00:37:26] >> yeah,
[00:37:27] >> but we want to know what did they train
[00:37:29] on?
[00:37:29] >> Yeah, I want to see this thing.
[00:37:30] >> You know, we can remember when we were
[00:37:32] talking
[00:37:33] >> and we can bleep that out and they said,
[00:37:36] "Oh, no, no, you should be able just to
[00:37:37] take all the stuff you had for Claude
[00:37:39] and it should work just fine."
[00:37:40] >> Yeah.
[00:37:41] >> And we don't want that. We want to know
[00:37:43] what are the tools that they trained on
[00:37:45] because they're really smart there. We
[00:37:47] want to spend time building deeply into
[00:37:50] what they did.
[00:37:50] >> Yeah. And when you look at anthropic, I
[00:37:54] think one of the reasons why Claude 35
[00:37:56] and 37 Sonnet are so good at a tool
[00:37:58] calling agent for coding is because I
[00:38:00] got to imagine they had some precursor
[00:38:02] to Claude code
[00:38:03] >> for quite a while in advance. And so
[00:38:05] they had ironed out all the bugs and
[00:38:07] they knew what to train the model with.
[00:38:10] And I want the other labs to do that
[00:38:12] same thing. And then I want us to tell I
[00:38:14] want them to tell us all the tools they
[00:38:16] did, how the tools accept the arguments.
[00:38:18] Why do people not think that information
[00:38:20] is critical?
[00:38:21] >> Yeah. Yeah.
[00:38:22] >> So much of like quoteunquote prompt
[00:38:23] engineering could could be ob uh obiated
[00:38:27] by just like conveying like here's the
[00:38:29] general flavor of or like here's a
[00:38:31] sample of what the training data looked
[00:38:33] like and like the structures that were
[00:38:35] present in that. So you know like okay
[00:38:38] here are the general like tools or here
[00:38:40] here are the general patterns that are
[00:38:41] that will work really well.
[00:38:43] >> Here's a training you know piece of
[00:38:45] training data where it nails it 100% of
[00:38:47] the time. Yeah,
[00:38:48] >> like that would be super valuable.
[00:38:50] >> And I think one thing that you've also
[00:38:51] said uh which which really resonates is
[00:38:53] like you do not want to go against the
[00:38:55] grain of the model. There's this notion
[00:38:57] of like the model wants to do what it
[00:38:59] wants to do. And
[00:39:01] >> I think what we saw already some some of
[00:39:03] this in like people's reaction when like
[00:39:06] 37 sonnet first came out.
[00:39:07] >> Yeah.
[00:39:08] >> Uh for for some of the other like uh
[00:39:10] coding agents in the market, there was a
[00:39:13] general perception where like it was
[00:39:14] worse than 3.5. like 3.5. I think the
[00:39:17] the general consensus is it was not as
[00:39:20] good at tool use and general reasoning,
[00:39:24] but it was much better at following
[00:39:26] instructions.
[00:39:27] >> So like the way that a lot of these
[00:39:28] tools worked is, you know, like cursor
[00:39:30] you have like a bunch of rules that you
[00:39:32] you you kind of create. And so like a
[00:39:34] lot of those rules uh are followed to a
[00:39:37] te by 3.5 sonnet but then 3.7 sonnet has
[00:39:40] a greater tendency to ignore them and
[00:39:42] just want to do more like write more
[00:39:44] code or get further along in in the kind
[00:39:45] of like agentic chain of operations.
[00:39:49] >> Yeah, it's um there's like this
[00:39:51] interesting thing where you I don't know
[00:39:54] I've never trained a large language
[00:39:55] model, right? But it's it's on one hand
[00:39:58] you have them trained to be this you
[00:40:01] know chatbot that you ask questions and
[00:40:04] it gives you answers but that's not
[00:40:07] really what you want from an agentic
[00:40:08] model. From an agentic model you want to
[00:40:10] give it a task and it wants to go but at
[00:40:12] the same time they cannot destroy the
[00:40:14] one flavor of this and making this other
[00:40:17] better. So they have to balance this.
[00:40:18] And I I think that's a hard thing to do.
[00:40:21] It's it's what we're seeing too with
[00:40:22] with users where they're like sometimes
[00:40:24] I just want to ask it stuff but then it
[00:40:26] went off and changed some files or
[00:40:28] something. But that's the same what
[00:40:30] you're seeing is how it was trained, you
[00:40:31] know, like it it was trained to be super
[00:40:33] aggressive or something and Yeah. It's a
[00:40:35] really interesting challenge.
[00:40:37] >> Yeah.
[00:40:38] >> Yeah. Oh, that gets me to another uh
[00:40:39] other kind of common feedback we get,
[00:40:41] which is people say, um, I just wanted
[00:40:45] to know if it would do something, but it
[00:40:46] went and did the thing. and you look at
[00:40:48] their prompt because they share it with
[00:40:49] us and it's like, you know, hey, I want
[00:40:51] you to, you know, I want to do this
[00:40:53] thing and whatever, you know, can you do
[00:40:55] it or how would you go about doing this?
[00:40:58] >> And then they're shocked shocked that it
[00:41:00] went and did that thing.
[00:41:01] >> Yeah.
[00:41:01] >> And for a lot of people, they argue like
[00:41:05] to, you know, the end of their dear life
[00:41:08] that it should it was wrong. And yeah,
[00:41:10] >> so I did this thing where I went and I
[00:41:12] put exactly one of those prompts on
[00:41:13] Twitter and I said, you know, if uh
[00:41:15] someone came up to you and said exactly
[00:41:17] this, would you go and edit the files or
[00:41:19] would you just tell them and like 70% of
[00:41:21] people said I'd go and edit the files?
[00:41:23] And it just gets to like that that you
[00:41:25] know ambiguity of language.
[00:41:26] >> Yeah. I think I feel like there's
[00:41:28] there's a lot of conventional product
[00:41:29] development wisdom that you have to
[00:41:31] >> the user is always right.
[00:41:32] >> Yeah. Exactly. So like that's a piece of
[00:41:34] conventional wisdom, right? It's like
[00:41:35] the user is always right. the user can
[00:41:36] do no wrong and you have to go build
[00:41:38] something that works around the user's
[00:41:40] existing mental habits. But I think in
[00:41:42] the in the current uh age we're living
[00:41:45] through, things are moving so fast. What
[00:41:46] happens is like if you have one set of
[00:41:48] users uh that want to invoke it some way
[00:41:51] and they're kind of like set in their
[00:41:52] ways and they don't get value out of it,
[00:41:54] you know, they're unhappy. But this
[00:41:55] other set of users will be like, "Oh,
[00:41:56] I'll just try something different." And
[00:41:58] then they'll unlock some capability and
[00:42:00] then they'll get like, you know, an
[00:42:02] order of magnitude more productive. And
[00:42:04] then the first set, you know, has this
[00:42:06] like f they're looking over at this like
[00:42:07] other set of users and they're like,
[00:42:08] "Oh, maybe I should copy what they're
[00:42:10] doing." And so like the user behavior
[00:42:12] kind of evolves to follow whoever is
[00:42:16] able to develop this coupling of like
[00:42:18] product and best practices that
[00:42:20] >> the product is emerging from user
[00:42:21] behavior from people like Jeff Huntley
[00:42:23] and Indigo and like us and these awesome
[00:42:25] people we have.
[00:42:26] >> Yeah. Yeah. But it's I think another
[00:42:28] really big thing here is that you know
[00:42:31] it talks like a human which is that that
[00:42:34] makes this hard right because then you
[00:42:36] fall into the trap of saying uh could
[00:42:39] you please do this and I always say
[00:42:41] please and thank you right but it's
[00:42:43] >> still like
[00:42:45] if you just instruct it and say use this
[00:42:48] to do this sometimes it's less typing
[00:42:51] and it will do it more correctly like it
[00:42:53] will use this tool that you instructed
[00:42:55] it to use but it feels weird. to do this
[00:42:57] because it feels like you're commanding
[00:42:59] this to do something.
[00:43:00] >> Yeah.
[00:43:01] >> And I think that's a there's like a big
[00:43:04] challenge here where the interface and
[00:43:06] some people say maybe that's not the
[00:43:07] best interface, you know, like RHF
[00:43:09] models that you know talk back to you
[00:43:11] and and want to be nice to you. Maybe
[00:43:13] that's not the best interface to
[00:43:15] instruct an agent, but it's a
[00:43:18] interesting challenge.
[00:43:19] >> Yeah.
[00:43:19] >> Yeah.
[00:43:22] >> Um so I want to talk more about like you
[00:43:24] know what's what's actually changed in
[00:43:25] the product. uh we've talked about a lot
[00:43:27] about like the the persona that we're
[00:43:28] optimizing for and kind of like the best
[00:43:30] practices, but how has that guided uh
[00:43:32] the actual product evolution? So, when
[00:43:34] you think about like the past couple
[00:43:35] weeks, what have been like the the
[00:43:37] biggest, you know, interesting uh
[00:43:40] features that we we've shipped?
[00:43:43] >> I think one of the interesting or
[00:43:45] biggest things that changed the last few
[00:43:47] weeks is that our CLI, Oscar has been
[00:43:49] working on the CLI that's been
[00:43:51] >> we got a CLI now.
[00:43:53] >> Yes. And and I mean it went from uh what
[00:43:56] you built which was like a basic ripple
[00:43:58] I would say to an actual interface that
[00:44:00] actually you know looks good and display
[00:44:02] stuff and as of a couple hours ago you
[00:44:04] can do file mentions and whatnot. I
[00:44:06] think that's the biggest piece and then
[00:44:09] um from my perspectives perspective
[00:44:12] besides that one it's a lot of like bug
[00:44:15] fixes tuning changing this tool again
[00:44:17] like fixing this other thing evaluating
[00:44:20] other models under the hood and seeing
[00:44:22] whether another model is better can we
[00:44:24] switch over um
[00:44:26] >> yeah that's from my perspective I don't
[00:44:28] know what you
[00:44:29] >> yeah we've gotten a lot more people on
[00:44:32] and so it's also been interesting how
[00:44:33] often we need to say know
[00:44:36] >> or kind of subtly help the product get
[00:44:38] people to the right thing or explain
[00:44:40] that. So like our frequently ignored
[00:44:43] feedback, our manual and other things
[00:44:45] like that.
[00:44:46] >> Yes, today I think maybe I think it was
[00:44:49] the first user today we got you know
[00:44:50] we're adding more people from the weight
[00:44:52] list and we're going to add more people
[00:44:53] today and all of that but today was the
[00:44:56] first person uh that said oh you have
[00:44:59] command enter instead of enter to submit
[00:45:01] the message. I love this, you know.
[00:45:03] Every time I hit enter, I'm like, "Thank
[00:45:05] God this saved me." Like, "Yes,
[00:45:07] finally." You know,
[00:45:09] >> so yeah, it's it's more people
[00:45:11] constantly evolving. Um I don't think we
[00:45:14] have like a big, oh, it's completely
[00:45:16] different yet, but it's it's um you
[00:45:19] know, also the reality of the situation
[00:45:20] is you have a team, you have people
[00:45:22] working on this, they all need to learn
[00:45:23] how to use it and to best work on this.
[00:45:26] And we're getting to a good place here
[00:45:28] where now there's a lot of people that,
[00:45:30] you know, get the idea behind this and
[00:45:32] they get how to use it and they get how
[00:45:34] to make it better or also what not to
[00:45:37] do. You know, like we had a lot of uh uh
[00:45:40] no more features, you know, like no no
[00:45:42] feature, make the call better, do this,
[00:45:44] keep it simple. Um what you see is what
[00:45:46] you get. Don't hide this. Yeah.
[00:45:47] >> Simplify this.
[00:45:48] >> And so we want to avoid overfitting on
[00:45:51] today's model capabilities. And if we
[00:45:53] add a bunch of modes and here's how you
[00:45:56] define this and you know granular
[00:45:58] natural language rules files and you
[00:46:01] know blah blah blah then if a great
[00:46:04] model comes out tomorrow
[00:46:06] >> we're going to be in a tough situation
[00:46:07] because we have a lot of users who've
[00:46:08] invested a lot in all of these complex
[00:46:10] configurations and these you know
[00:46:12] workflows and
[00:46:14] >> and
[00:46:15] we have not we would not have set the
[00:46:17] expectation that we're going to be
[00:46:18] opinionated and change and like a lot of
[00:46:20] the stuff that they put in is is not
[00:46:22] going to work in the new world. We don't
[00:46:23] want to be in that situation. We don't
[00:46:24] think our our users want us to be in
[00:46:26] that situation. We think people want to
[00:46:28] get on AMP because they see that the
[00:46:30] models are moving so fast and they want
[00:46:32] to see where this going.
[00:46:33] >> Yeah.
[00:46:34] >> So that's why we have literally a text
[00:46:36] area. So so many other AI agents,
[00:46:40] they've got one of those rich text areas
[00:46:41] or like lexical or pros mirror or
[00:46:43] whatever. And
[00:46:44] >> yeah,
[00:46:45] >> we've done that enough to know that's
[00:46:46] like a thousand x increase in
[00:46:48] complexity.
[00:46:49] >> Yes. Got to keep the surface small. We
[00:46:51] got to keep it simple. And I I got a new
[00:46:53] metaphor. Um I think I said this before
[00:46:56] that, you know, you want your product to
[00:46:58] be like this wooden scaffolding around
[00:47:00] the model so that it that it uh uh uh
[00:47:03] falls off when the model gets better,
[00:47:04] like it just jumps out of it. I like
[00:47:06] that. And yeah, but the new metaphor is
[00:47:08] it's um I don't maybe it's wrong, but
[00:47:11] it's like say you have a broken lack and
[00:47:13] you have like a you know wooden wooden
[00:47:16] casting around it or something and what
[00:47:18] they do for animals or something like it
[00:47:19] falls off after a time like that's what
[00:47:21] this should be because we know that the
[00:47:23] new model will get better at certain
[00:47:25] things and then you have to do less and
[00:47:28] >> the product should be ready to handle a
[00:47:30] better model. I think this this also
[00:47:32] makes me think of one of the maybe like
[00:47:34] surprise hits in terms of features which
[00:47:36] is the the thread sharing which is in
[00:47:38] some way it's like we're not trying to
[00:47:41] build uh a bunch of like tightly coupled
[00:47:45] um like over optimized things around the
[00:47:48] model to get it to do the right thing.
[00:47:50] It's almost like, you know, whatever
[00:47:51] model we integrate, we want people to be
[00:47:54] able to explore what that model can do
[00:47:56] and then have that knowledge disseminate
[00:47:58] to other parts of like your teammates,
[00:48:01] right? Like you just the best way to
[00:48:03] like get as far as you can with AI is
[00:48:05] just to see how like the the people you
[00:48:08] respect the most on your team are using
[00:48:09] it.
[00:48:10] >> Yeah. And for me at least it's been like
[00:48:12] a huge learning experience because I
[00:48:13] look the way that like you both are
[00:48:15] using this and I've learned a good deal
[00:48:17] uh about you know
[00:48:19] >> what did you learn like what what what
[00:48:21] stands out for you?
[00:48:22] >> I think like one of the the realizations
[00:48:23] I had was when we had that pair
[00:48:25] programming session a couple weeks back
[00:48:27] and seeing you use it for the first time
[00:48:30] and giving it more structured input to
[00:48:32] complete larger more complex tasks. Uh
[00:48:36] that was kind of an aha moment because I
[00:48:39] I feel like it like I had grocked some
[00:48:42] aspects of this but I hadn't fully kind
[00:48:44] of like internalized
[00:48:45] >> or made explicit the the meta strategy
[00:48:48] here. So I was doing it intuitively in
[00:48:50] some cases but in other cases I was
[00:48:51] falling into this failure mode where you
[00:48:53] know I'd ask it to do too much and then
[00:48:55] it would try to do stuff and uh the
[00:48:57] first few changes it made were incorrect
[00:48:59] and so it would go off the rails. Yeah.
[00:49:01] But having it first, you know, write out
[00:49:03] its plan and then anchor what it's doing
[00:49:05] against that plan helps keep it uh much
[00:49:08] more sort of like on the rails and makes
[00:49:11] makes its output a lot more auditable.
[00:49:12] So like that was something cool that I
[00:49:14] learned from just like watching you do
[00:49:16] it.
[00:49:16] >> Um
[00:49:17] >> and yeah, like you know, now I just like
[00:49:20] hop into like the the team thread view
[00:49:22] every now and then and see how my like
[00:49:24] favorite fellow AMP users are are using
[00:49:27] it and what what sort of like use cases
[00:49:29] they've had recently. I think there's
[00:49:30] also this um you you do this a lot when
[00:49:34] people say, "Oh, it didn't work for
[00:49:36] this." Then the answer is that's the
[00:49:38] model. Like there's nothing we can do.
[00:49:40] >> It feels super dismissive.
[00:49:42] >> Every time I say that, it feels like I'm
[00:49:43] literally saying, "Fuck you. You're an
[00:49:45] idiot."
[00:49:46] >> Like, "Do you have any brain cells? It's
[00:49:48] the model. We're not going to fix it
[00:49:49] because we hate you and your whole
[00:49:50] family." That's what it sounds like.
[00:49:52] >> Yeah. It feel but it's
[00:49:54] example that everybody knows is cloud 37
[00:49:58] really loves to leave comments when it
[00:50:00] removes stuff
[00:50:01] >> and we try to prompt this out of it like
[00:50:04] so and and and you know somebody was
[00:50:06] saying I have a rule file especially for
[00:50:08] this do not leave the comments like do
[00:50:10] not do this do not ever do this and it
[00:50:12] doesn't work like the
[00:50:13] >> well like they would show one example of
[00:50:14] it working and we say okay let me try
[00:50:16] and then it would add comments and be
[00:50:17] like oh add this and then it's like
[00:50:19] >> yeah and it it's it's the grain of the
[00:50:22] on like they somehow trained it to leave
[00:50:24] comments when it removes an import
[00:50:26] statement no longer needed. I'm like,
[00:50:29] >> "Yeah,
[00:50:29] >> dude, you put it there, you know, like
[00:50:31] don't tell me."
[00:50:32] >> But it's possible that that in the
[00:50:34] transcript of the chat might actually be
[00:50:36] an important kind of like thought marker
[00:50:38] for it.
[00:50:40] >> So, you don't even know if you were to
[00:50:41] get rid of that. What else would you
[00:50:42] lose? I'm not saying, "Oh, we can never
[00:50:44] get rid of it. Scientists don't know
[00:50:45] how."
[00:50:46] >> Yeah.
[00:50:46] >> But it's this whack-a-ole thinking
[00:50:48] >> that we see so often.
[00:50:50] >> Yeah. Yeah. Yeah.
[00:50:52] >> Well, so earlier we talked about, you
[00:50:54] know, model choice and we sort of made
[00:50:56] the explicit decision to not let the
[00:50:58] user decide in this case for exactly the
[00:51:00] reasons that we just talked about um
[00:51:02] because we we want to build something
[00:51:03] that's that unlocks the capabilities of
[00:51:06] a specific model.
[00:51:07] >> Um that being said, we are trying out
[00:51:10] like other models as well. So like you
[00:51:12] mentioned Gemini Pro.
[00:51:14] >> Um can you talk a little bit about you
[00:51:17] know how how that's looking? you know,
[00:51:19] do do we think we'll have Gemini up for,
[00:51:22] you know, all or part of the use cases
[00:51:24] we want to support? And how might like
[00:51:26] the scaffolding that wooden scaffolding
[00:51:27] that we just described like change uh
[00:51:29] for Gemini versus Claude?
[00:51:32] >> I
[00:51:34] I think that, you know, when a new model
[00:51:36] comes out, a lot of the other companies
[00:51:40] like, "Oh, now our benchmark it did
[00:51:41] this." And I eval Yeah. And and you know
[00:51:45] eval are good like I want to have evals
[00:51:48] but I think this is untuned evals
[00:51:51] because what we just said like claude
[00:51:54] has a certain way of using certain tools
[00:51:56] and Gemini has a certain way of using
[00:51:59] other tools and you in order to get the
[00:52:01] most out of each model you have to do an
[00:52:05] honest effort to tune your prompt and
[00:52:07] the tools for that specific model which
[00:52:09] will be you know ideally they give us
[00:52:10] like an instruction manual like this is
[00:52:12] the way you should implement your tools
[00:52:13] or which is Anthropic is doing this, you
[00:52:15] know, so shout out to them. But it's
[00:52:19] right now we're exploring Gemini and
[00:52:21] it's looking good like it's far more
[00:52:24] I know it feels smarter in in some sense
[00:52:27] but it also feels less like a workhorse
[00:52:30] than Claw 37
[00:52:31] >> because it's then it's contemplating.
[00:52:33] It's like here's what I would do and I'm
[00:52:35] like
[00:52:36] >> how about you do it, you know, how about
[00:52:37] you do it and claw 37 just goes and
[00:52:39] fixes it for you. But
[00:52:41] >> and there's some weird things like
[00:52:42] Gemini will spit out in the markdown
[00:52:45] kind of content text content block the
[00:52:48] whole code file that is going to write
[00:52:49] out and then it'll go do an edit and
[00:52:52] that's like kind of annoying.
[00:52:53] >> Yeah.
[00:52:55] >> Like Claude just makes the edit. Gemini
[00:52:57] is like here is the entire file with my
[00:52:59] edit. Now let me go and like apply it.
[00:53:02] And then like reading through it you're
[00:53:03] like well why why didn't you do that?
[00:53:05] it's noisy and then you waste more
[00:53:07] tokens and it just it makes me think
[00:53:10] that like was the uh AI coding agent
[00:53:12] tool use use case kind of bolted on.
[00:53:16] >> Yeah.
[00:53:16] >> Yeah.
[00:53:17] >> But I don't know. We'll see. I mean I
[00:53:19] I've had some pretty awesome experiences
[00:53:21] with it too.
[00:53:21] >> Yeah.
[00:53:22] >> Yeah. I full transparency like we said
[00:53:25] no mall selector, right? But then you
[00:53:28] can see the strength of each model and
[00:53:31] you kind of want to switch sometimes and
[00:53:33] have this model do this and you want to
[00:53:36] have this model do this. I don't think
[00:53:37] the model selector is the answer to this
[00:53:39] because it's often things that you want
[00:53:43] in the same task. Like ideally you
[00:53:45] switch the model or the models can talk
[00:53:47] to each other you know like if claw 37
[00:53:50] could talk to Gemini and say what do you
[00:53:51] think I should do and then Gemini does
[00:53:53] it and then claw 37 goes and implements
[00:53:56] it that would be ideal and we also you
[00:53:58] know ader again like they had the
[00:54:00] concept of architecture and and
[00:54:02] implement and um yeah but it's
[00:54:05] interesting to feel the characteristics
[00:54:06] from both model and
[00:54:07] >> yeah I I get what you're saying where
[00:54:10] I've seen that they have different
[00:54:12] strengths and it's like oh [ __ ] It would
[00:54:14] be nice to have a model selector if
[00:54:15] every single user knew exactly when to
[00:54:17] choose the right one and we could take
[00:54:20] them away at any moment. And so I think
[00:54:21] it's best to think about our commitment
[00:54:23] to uh we are not committing to having a
[00:54:26] model selector. We are not committing to
[00:54:29] you know not having any kind of model
[00:54:31] selection or multimodel usage.
[00:54:33] >> Yeah. I think the way it'll look is if
[00:54:35] if there is this notion of like choosing
[00:54:38] a model, it's really you you'll kind of
[00:54:39] like select a sub agent of sorts that
[00:54:42] will have a different model as part of
[00:54:44] its like core reasoning loop or
[00:54:46] implementation. But from like the the
[00:54:48] user's point of view, it's like you'll
[00:54:50] be selecting an agent rather than a
[00:54:53] model. Like taking an agent
[00:54:54] implementation and swapping out the
[00:54:57] internal model it's using. It's almost
[00:54:59] like, you know, I'm taking a robot and
[00:55:02] like changing the OS and changing the
[00:55:04] brain and expecting it to work as well.
[00:55:06] It's like if you stick like a fly brain
[00:55:08] into like a a dog robot, it's not going
[00:55:11] to
[00:55:12] >> work well. But like, you know,
[00:55:14] >> a Ford engine into a BMW.
[00:55:15] >> Yeah.
[00:55:16] >> Yeah. Exactly. But like maybe we will
[00:55:19] have this notion of like, you know, you
[00:55:21] you use the Ford for some tasks and you
[00:55:23] use the BMW for for other tasks or or
[00:55:25] something like that.
[00:55:26] >> Both are great.
[00:55:27] >> Yes.
[00:55:32] Um, okay. So, uh, we've talked a lot
[00:55:35] about kind of like, you know, past
[00:55:37] state, current state, not wanting to
[00:55:39] overoptimize for, you know, this
[00:55:41] generation of models. What about the
[00:55:43] next generation? Like, we want to we
[00:55:44] want to be skating to where the the puck
[00:55:46] is going. So, where do we think the puck
[00:55:47] is going with respect to to coding
[00:55:49] agents?
[00:55:52] >> You want to go first or? Yeah, I think
[00:55:55] that this remote execution idea that I
[00:55:59] can for my kids soccer game go and kick
[00:56:02] off threads and the agent can go do
[00:56:05] that. And then there's two ways I think
[00:56:07] that I want to do. In some cases, it's
[00:56:08] going to be these simple tasks that it's
[00:56:10] going to have a really high accuracy
[00:56:11] rate on and I have good intuition about
[00:56:13] what it'll do
[00:56:14] >> like nearly 100% on and I'll just want
[00:56:16] to merge them from there. And then in
[00:56:18] some cases I think of the person who's
[00:56:20] playing those like 10 chess games all at
[00:56:22] once and they're going you know blah
[00:56:23] blah blah where you kind of want to pop
[00:56:25] in and that's really hard to do in your
[00:56:27] local state if you have like get
[00:56:28] checkout even get work tree and you have
[00:56:29] like nine different VS codes open that's
[00:56:31] a pain so there's got to be some other
[00:56:33] workflow stuff around that and there's
[00:56:35] got to be some remote execution I think
[00:56:37] I think that's a really interesting step
[00:56:39] and that's not like having the agents
[00:56:40] necessarily communicate with each other
[00:56:42] that's just parallelizing the single
[00:56:43] agent thing. Yeah, I think that's, you
[00:56:47] know, we talked about this and it sounds
[00:56:48] like a joke where it's like, oh, I'm at
[00:56:49] my kids soccer game and I want to kick
[00:56:50] off an agent. But the reality is that
[00:56:52] everybody who started using agentic
[00:56:54] editing bumps into this problem of,
[00:56:59] well, do I watch this now? Like, do I
[00:57:01] watch it do this stuff? And then
[00:57:03] everybody like I have an attention
[00:57:06] problem now. Like it's just the the
[00:57:08] agent is going and stuff and it's
[00:57:09] command tab and I'm gone and then I the
[00:57:11] bing sound comes on and go back and it's
[00:57:13] like oh did you do the right thing? So
[00:57:15] you immediately go into this
[00:57:17] >> I want to start them and then have it do
[00:57:19] stuff and then later on revisit it and
[00:57:21] everybody so far on our team who started
[00:57:24] using aic editing came to this where
[00:57:26] they like I want to start it off while
[00:57:28] I'm using my phone and sitting and
[00:57:29] having lunch and then I want to come
[00:57:30] back.
[00:57:31] >> My favorite is no names. Someone was
[00:57:33] going on a weekend trip with their wife
[00:57:35] and they had a list of a bunch of
[00:57:37] independent things they wanted to kick
[00:57:38] the agent off to do so that when they
[00:57:40] got back from the trip, they wouldn't
[00:57:42] have wasted that time and they'd have
[00:57:43] all the diffs ready for them.
[00:57:44] >> Yeah. Yeah. Yeah. I'm going to put money
[00:57:46] into this, kick it off, and then I go on
[00:57:48] the trip. Yeah. So, that's I think
[00:57:50] that's big. The other thing that's
[00:57:52] really big is um where we should
[00:57:55] definitely work on and is is just you
[00:57:58] know multi- aent workflows where sure
[00:58:01] you can launch multiple instances you
[00:58:03] can do the thing that Jeff is doing and
[00:58:05] build your own orchestrator but ideally
[00:58:07] you know this is what we do and I think
[00:58:11] two steps further along it's okay do we
[00:58:14] need to escape from the editor do we
[00:58:15] need to go in some other thing because
[00:58:18] right now the editor is mostly a diff
[00:58:21] viewing utility, right? Like
[00:58:23] >> I mean that's I don't know how far ahead
[00:58:25] it is, but I think that's definitely
[00:58:26] something that comes up again and again
[00:58:28] like how do you see the value of the
[00:58:29] text editor? When do you do multi- aent?
[00:58:31] How can I watch the agents do this
[00:58:33] stuff? And yeah.
[00:58:34] >> Yeah. What you said about like focus and
[00:58:38] attention? It that's an interesting
[00:58:40] point. I wonder if there's like analogy
[00:58:42] to like the self-driving car which you
[00:58:44] know it's it's a maybe overused analogy
[00:58:46] at this point but like you know how like
[00:58:48] people said about like self-driving it's
[00:58:50] like
[00:58:51] >> uh this middle ground of you know if
[00:58:54] like the human just controlling the
[00:58:55] steering wheel completely and doing
[00:58:57] everything it's fine like you'll get to
[00:58:58] to your point safely assuming you have
[00:59:00] like a safe human driver. Uh, and if
[00:59:03] it's like fully automated, that's also
[00:59:04] fine. Like you don't have to worry about
[00:59:06] it. But like this in between area is
[00:59:08] where you have to think about the
[00:59:10] experience a lot because what you don't
[00:59:11] want is to communicate like
[00:59:14] overcommunicate the level of automation
[00:59:16] >> and then you're in your like supposedly
[00:59:18] self-driving car. You kind of like take
[00:59:20] your hand off the steering wheel and
[00:59:22] your focus off the road and then all of
[00:59:23] a sudden there's like an edge case that
[00:59:25] comes up because you're no longer like
[00:59:27] maintaining that focus. And I feel like
[00:59:29] I've I have had to adjust my
[00:59:31] expectations for like flow state a bit.
[00:59:33] And
[00:59:33] >> yeah,
[00:59:34] >> it's not like all bad. It's almost that
[00:59:36] I I feel like I've I've reached like
[00:59:37] almost like a different kind of flow
[00:59:39] state where it's like you figure out I I
[00:59:42] don't know. For me, it's like different
[00:59:43] modalities. Like sometimes I'm doing,
[00:59:45] you know, several kind of like
[00:59:47] lightweight tasks and then it's like,
[00:59:48] all right, you know, I'll I'll kind of
[00:59:50] like roundroin between these two. But
[00:59:52] then sometimes it's like I'm I'm I'm
[00:59:54] working on something like more focused
[00:59:56] or nuanced and so like I'll have one
[00:59:58] main thread and then my kind of like
[01:00:00] auxiliary thread is just like reading
[01:00:02] more about what it did or understanding
[01:00:04] like adjacent parts of the codebase or
[01:00:05] something like that.
[01:00:06] >> Yeah. But it's an actual issue.
[01:00:08] >> It's an actual issue that everybody
[01:00:09] reported. You get distracted a lot.
[01:00:11] Yeah,
[01:00:12] >> like somebody, not related to us in any
[01:00:14] way, but somebody tweeted yesterday that
[01:00:16] um they have like a big phone addiction
[01:00:18] problem now because it's like they send
[01:00:20] off stuff and then they scroll
[01:00:22] >> and it's it's crazy. And then, you know,
[01:00:24] so what we're working on is eyeball
[01:00:26] tracking. If we see your eyeballs going
[01:00:28] somewhere else, red light comes on,
[01:00:30] electric shocks, you got to keep your
[01:00:31] fans on the keyboard.
[01:00:32] >> An ad supported model.
[01:00:34] >> Yeah, there you go. Yeah. Yeah. I
[01:00:35] thought you were going to say like like
[01:00:37] along the the the line of ad support
[01:00:39] it's like oh we're actually going to
[01:00:40] bring Twitter into your editor because
[01:00:42] like then you don't have to as much but
[01:00:44] even in the near term code migrations
[01:00:47] are now possible that were never
[01:00:48] possible before code review is a much
[01:00:50] bigger problem if there's 10 times as
[01:00:53] much code being written you think humans
[01:00:54] are going to do a good job of reviewing
[01:00:55] all that they never doing a good job in
[01:00:57] the first place.
[01:00:58] >> Yeah.
[01:00:58] >> Yeah. And even I think that there's a
[01:01:00] role for letting you specify
[01:01:02] deterministic hooks. So that like common
[01:01:04] thing if you're using spelt 5 and it the
[01:01:06] model was trained on spelt 4 if it ever
[01:01:09] tries to do an edit file tool call that
[01:01:11] contains this literal string in the
[01:01:13] simplest case
[01:01:14] >> you want to essentially like auto
[01:01:16] interrupt the model and say hey dummy
[01:01:18] we're using spelt 5. And little things
[01:01:20] like that can help close the gap in a
[01:01:23] pretty I think predictable
[01:01:25] >> and like you know consistent way.
[01:01:27] >> Yeah. Um
[01:01:28] >> and and that is that's accepting the
[01:01:31] flaws of the model, right? Which is
[01:01:33] realistic and honest. It and it's not
[01:01:35] expecting, oh, it should get it right.
[01:01:38] It's no, we know that it will leave
[01:01:40] comments when it removes something
[01:01:41] >> and it also falls away because you can
[01:01:43] imagine the next model will not try to
[01:01:45] do spelt forward.
[01:01:45] >> It won't trigger it. Yeah.
[01:01:46] >> Yeah.
[01:01:47] >> It's like the almost like very
[01:01:49] lightweight guard rails uh that don't
[01:01:52] interfere with the core reasoning
[01:01:53] ability of the model. Like what you
[01:01:54] don't want to do is like shove a bunch
[01:01:56] of guidelines into the context window.
[01:01:59] Uh because then what you you end up
[01:02:02] doing is confusing it and then it does a
[01:02:04] a worse job on what it's really good at
[01:02:07] which is like the core kind of like loop
[01:02:09] like go do stuff and
[01:02:11] >> Yeah.
[01:02:11] >> Yeah. It's more Yeah. It's like more
[01:02:14] feedback loops when it happens versus
[01:02:16] rules up front. It's oh you just did the
[01:02:18] wrong thing you know correct this
[01:02:21] please. And it probably will do it.
[01:02:23] >> Yeah. Yeah. Yeah.
[01:02:24] >> Cool.
[01:02:25] >> Um I think you know we're about uh out
[01:02:28] of time, but like uh last thing I want
[01:02:31] to ask is you know the delta between
[01:02:32] where we are now and like where the puck
[01:02:34] is going. What are kind of like the next
[01:02:36] couple things that you think we should
[01:02:37] improve or or build and like you know no
[01:02:40] commitments here but like just based on
[01:02:43] current experience and feedback that we
[01:02:45] are not ignoring.
[01:02:46] >> Yeah, I think obviously make everything
[01:02:49] more rock solid stable. the UI you want
[01:02:52] it to feel nothing can ever go wrong
[01:02:54] like you want it to feel rock solid
[01:02:56] where the only um you know uncertain
[01:03:00] thing is the model like you want the
[01:03:02] rest to feel stable yeah that's one
[01:03:04] thing then I think you know exploring
[01:03:08] what's on my list is for example um can
[01:03:10] we add like you know cloud code recently
[01:03:13] added this support for this like
[01:03:14] taskless management like turning the
[01:03:16] meta into something that's now in you
[01:03:19] know supported by the product And again
[01:03:20] in a lightweight way.
[01:03:22] >> Um
[01:03:23] everything else server side is
[01:03:25] interesting and being worked on. Um
[01:03:29] >> yeah that's like immediate you know
[01:03:32] switching the model tuning the other
[01:03:33] model. Um more agent to agent stuff like
[01:03:38] I did something a couple weeks back but
[01:03:40] it didn't really work out. So now I'm
[01:03:42] thinking can we do something else where
[01:03:44] two agents talk to each other? Can we
[01:03:46] have a supervising agent? And
[01:03:48] >> right
[01:03:49] >> I think yeah that takes a lot of work
[01:03:50] and and but yeah
[01:03:52] >> yeah yeah
[01:03:54] >> yeah we'll get there though. I think
[01:03:55] that's I think that's where I'm thinking
[01:03:56] towards too just like long longer chains
[01:03:59] of automation more robustness and
[01:04:00] reliability. Um,
[01:04:02] >> yeah.
[01:04:04] >> Yeah, I've been working a lot on
[01:04:05] aco.com, the server side of it, but also
[01:04:07] that has a front end, a backend. It's
[01:04:10] database stuff. It touches on
[01:04:11] authentication. So, it is, I think, a
[01:04:14] pretty good test case for like a, you
[01:04:16] know, real complex app. That's what's
[01:04:18] got me thinking about the deterministic
[01:04:20] hooks. And you know, one example is I
[01:04:21] would feel really good knowing that the
[01:04:24] agent wouldn't actually edit any files,
[01:04:26] you know, related to O unless like it
[01:04:30] got my permission to do so.
[01:04:32] >> Um or, you know, afterwards it flagged
[01:04:34] it. Um so, you know, just making the
[01:04:37] site better and then making it so that
[01:04:39] the agent gets better at making the site
[01:04:41] better.
[01:04:42] >> And with the whole AMP team, the way
[01:04:44] that we work is we're constantly using
[01:04:46] the thing. Every single person who is
[01:04:48] working on AMP is also working with our
[01:04:50] users and um we have zero issue tracker.
[01:04:54] We have zero plans. It is literally if
[01:04:57] you're on the AMP team, we trust you to
[01:04:59] work on the thing that you think is most
[01:05:01] important.
[01:05:02] >> And we curate the right people so that
[01:05:04] it's not a bunch of people working on
[01:05:05] like random dumb [ __ ]
[01:05:07] >> Yeah. And I think that also speaks to
[01:05:09] our belief that you know if if we if we
[01:05:13] execute properly here you know stuff is
[01:05:16] going to flow out word from the editor
[01:05:18] as well. And a lot of the like you know
[01:05:20] your traditional issue tracker or code
[01:05:22] review tool that might be an antiquated
[01:05:26] uh thing now with with how like
[01:05:29] >> coding agents work. So
[01:05:31] >> yeah.
[01:05:31] >> Yeah. I don't know.
[01:05:32] >> Lots to do.
[01:05:33] >> Yeah. Lots to do.
[01:05:36] All right. Happy hacking.
