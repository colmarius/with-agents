---
title: "Raising An Agent - Episode 9"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-9"
sourceUrl: "https://www.youtube.com/watch?v=2wjnV6F2arc"
videoId: "2wjnV6F2arc"
capturedAt: "2026-06-27T15:09:18.362Z"
series: "raising-an-agent"
episode: 9
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 2450
---

## Transcript

[00:00:00] I think my new slogan is uh the
[00:00:03] assistant is dead, long live the
[00:00:05] factory. Meaning that Asians write code
[00:00:07] is a given. That the assistant thing,
[00:00:09] the oneonone that this works. Yes. The
[00:00:12] question is if you give them a longer
[00:00:14] leash and if they run on their own, what
[00:00:16] else can you do? And that means you can
[00:00:18] build your codebase into an agent native
[00:00:21] codebase and you can build up a factory
[00:00:22] where from anywhere you should be able
[00:00:25] to send the prompt to your agents and
[00:00:28] have them work on your codebase. I think
[00:00:30] that's the next big thing because the
[00:00:32] models are already ready for it. And in
[00:00:34] case they're not, they will be. [music]
[00:00:40] Hello and welcome to Raising an Agent
[00:00:43] episode 9. It's been four months since
[00:00:46] the last episode and we're back.
[00:00:49] >> I'm Quinn on the AMP team and you got me
[00:00:51] and Thorston here. A lot has happened
[00:00:54] since August, since we last came on and
[00:00:56] talked about what it's like to build
[00:00:57] AMP, to build agents in this crazy crazy
[00:01:00] environment. So Thorston, what has
[00:01:02] changed since August? reality has been
[00:01:06] met with all the things that we've been
[00:01:08] kind of, you know, even saying a year
[00:01:11] ago or half a year ago or like nine
[00:01:13] months ago on this very podcast. So, I
[00:01:16] think one of the biggest changes is that
[00:01:19] since the last recording, uh, Gemini 3
[00:01:22] came out, uh, fantastic model. I think
[00:01:25] that was an inflection point. Then
[00:01:27] shortly afterwards, a week later, Opus
[00:01:29] 45 came out and people now say this is
[00:01:32] this was the inflection point u as a
[00:01:35] Gemini 3 fanboy. I think it's the other
[00:01:38] way around. Yeah.
[00:01:39] >> Um, but then
[00:01:40] >> one week before Opus and what's so
[00:01:42] interesting is before Gemini 3 and Opus
[00:01:45] came out, a lot of people were thinking
[00:01:47] it feels like the progress in the
[00:01:49] state-of-the-art models has slowed down.
[00:01:52] And
[00:01:52] >> you had Cursor and Windurf doing what
[00:01:56] makes sense given the hand that we're
[00:01:57] all dealt, trying with a really fast
[00:02:00] model that could make some rough changes
[00:02:02] that you' be a lot more hands-on with.
[00:02:05] And in the end, these better models came
[00:02:07] out and washed away all those really
[00:02:09] well-intended good ideas. And now the
[00:02:12] use case for a fast model that's way
[00:02:14] behind state-of-the-art does not really
[00:02:17] exist for most people unless you're
[00:02:18] trying to save on cost. And even then,
[00:02:21] what you found and pointed out and
[00:02:23] what's been really interesting is seeing
[00:02:24] that actually a smart model is often
[00:02:27] faster and cheaper when you're actually
[00:02:30] measuring getting the thing done.
[00:02:32] >> Yeah. And I think that's well
[00:02:35] everybody's been saying this right that
[00:02:37] hey the models will get better and we've
[00:02:39] also been saying prepare for the models
[00:02:41] to get better. What's happening now is
[00:02:43] that a lot of people are waking up to
[00:02:46] how good these models truly are. And
[00:02:48] what you see is people's expectations or
[00:02:52] even the level of trust they give to a
[00:02:55] model is often lagging behind the
[00:02:57] frontier. It's like 2 3 4 5 6 months
[00:03:01] behind. So, you know, when I say, you
[00:03:04] know, writing code is over. Like I said
[00:03:06] this a bunch of like you know that's
[00:03:08] over like in a file like Opus 45 can do
[00:03:12] a file like that level and then people
[00:03:14] say ah it can't do it for me and then it
[00:03:16] turns out they haven't tried Opus 45.
[00:03:18] they tried, you know, Claude before or
[00:03:21] Gemini 2.5 or something. And what we've
[00:03:25] seen and it kind it made me grip, you
[00:03:29] know, my my table was that over
[00:03:31] Christmas a lot of people changed their
[00:03:34] opinion on agents and they were kind of
[00:03:37] skeptical of agents and when I heard
[00:03:40] their comments like Andre Karpathy is
[00:03:43] one of them, right? like in I think in
[00:03:44] November or October November he said
[00:03:48] agents are slop that this is not good
[00:03:50] they can't write code this is slop it's
[00:03:52] too much vibe coding what you want is
[00:03:54] like the cursor experience of an
[00:03:56] assistant and you want a tab and I
[00:03:59] remember us talking about it internally
[00:04:01] not recording and I remember thinking
[00:04:04] what is he talking like this does not
[00:04:06] match what I see at all and then it
[00:04:09] turns out that over Christmas he tried
[00:04:12] out Opus 45 in one of the newest uh
[00:04:16] Gentic harnesses. And then he's like,
[00:04:17] "Oh, this I feel so behind. Everything
[00:04:20] is changing. These agents are crazy.
[00:04:23] They can do a lot of stuff." But then
[00:04:25] Antio, the creator of Redd is like one
[00:04:28] of the probably greatest programmers in
[00:04:30] the world. One, one of my heroes. He's
[00:04:33] been saying I think he's he uses JGBT
[00:04:36] and he copy and pastes code or he used
[00:04:37] Gemini 2.5 a lot I think and he copy and
[00:04:40] paste code and I was like why does he
[00:04:43] what's the problem with these agents
[00:04:45] like how why does he not use it and I
[00:04:47] don't want to say he never tried them
[00:04:48] but even two weeks ago he published a
[00:04:50] post to say this is happening like
[00:04:53] agents will write most of the code this
[00:04:55] is happening yesterday Ryan Dong creator
[00:04:58] of NodeJS tweeted I don't get the exact
[00:05:00] words right but the era of humans
[00:05:02] writing code is over and it just I don't
[00:05:06] want to say we are ahead of everybody. I
[00:05:08] think it's a crazy time where everybody
[00:05:11] sees the same things but has different
[00:05:14] expectations or experiences and so they
[00:05:16] all come to different conclusions and
[00:05:18] everybody's kind of anxious and wants to
[00:05:20] have like an opinion on which they can
[00:05:22] stand like something solid and we end up
[00:05:24] where people say they can't write code
[00:05:26] and others go like writing code is over
[00:05:28] by humans and big picture though I think
[00:05:31] agents will write most of the code in
[00:05:33] the future I think that's a given and
[00:05:35] and we can we can step towards the
[00:05:38] future based on this. There's no doubt
[00:05:40] in my mind there there will still be
[00:05:42] cases obviously where you um have to go
[00:05:45] in and write code by hand and maybe some
[00:05:48] type of software will be written 100% by
[00:05:51] hand and there will be exceptions just
[00:05:53] like people still write assembly and
[00:05:55] there's like you know people who always
[00:05:57] go in and know all of the layers and do
[00:05:59] all of the things but the general
[00:06:02] industry industry trend is is going
[00:06:05] towards agents will write most of the
[00:06:07] code. I think that's
[00:06:08] >> why do you think those really smart
[00:06:10] people that are at the time were already
[00:06:13] way ahead of the median developer in
[00:06:15] their use of AI. Why do you think people
[00:06:18] don't just assume the best from models?
[00:06:22] Just assume that they're always going to
[00:06:23] be getting better. Have that that awe.
[00:06:27] You know, it's dangerous to lay out a
[00:06:30] statement of agents cannot do X. It's
[00:06:32] not going to last for very long. Why do
[00:06:33] you think people do that?
[00:06:36] >> I don't know. I I think
[00:06:40] >> Where have we been where where have you
[00:06:42] been too pessimistic about models?
[00:06:45] I think what I've been too Yeah. what
[00:06:47] I've changed recently like in the last
[00:06:49] two months is or month even is or two
[00:06:53] things. One was I always thought these
[00:06:58] models they can't write that well like
[00:07:00] it always sounds tright and they use
[00:07:02] these phrases and jet GPT like the GPT
[00:07:04] models are still prone to this just like
[00:07:07] this isn't this it's you know like these
[00:07:09] phrases that there's a whole catalog of
[00:07:12] them but then with Gemini 3
[00:07:15] I handed it a collection of my writing
[00:07:18] and then asked it like write something
[00:07:19] in my style I was impressed this was
[00:07:23] really good, like impressively good
[00:07:25] where I realized, ooh, like this might
[00:07:28] change too. Like you you can probably
[00:07:30] start giving it like 10 collected pieces
[00:07:33] of writing from yourself and it can
[00:07:35] possibly get really close to what you
[00:07:38] would write like. And so that's one
[00:07:41] thing. And the other thing that I've
[00:07:44] been too hesitant with, I've been too
[00:07:47] stuck or yeah, stuck in this mindset of
[00:07:51] assistant where it's one-on-one
[00:07:54] conversation with an agent. It's it's
[00:07:55] me, the person directing an agent and
[00:07:58] maybe directing multiple agents, but it
[00:08:00] would be this and I mentioned these
[00:08:02] exact words on this podcast that it
[00:08:04] would be like this bob and weave push
[00:08:06] and pull. you you send it off and do
[00:08:08] this and it comes back. You rev you the
[00:08:10] code, you send it back off again and you
[00:08:12] you tell it what to do and it's back and
[00:08:15] forth. And the mods have gotten so good
[00:08:18] that you can give them now a longer
[00:08:20] leash as in instead of saying go over
[00:08:24] there and fetch me this and then come
[00:08:26] back and then I'll tell you what what
[00:08:28] else to fetch, you know, and and then
[00:08:31] then I'll show you how to mix it
[00:08:32] together. Instead of that, I think you
[00:08:35] can now go, "Here's the shelf. Go and
[00:08:37] bake me a cake and they will figure out
[00:08:39] what to fetch and how to mix it and
[00:08:41] >> and go taste it and
[00:08:43] >> Yeah. And Yeah. And go taste it and come
[00:08:44] back. And if you tasted it and it's
[00:08:46] burned, then turn down the temperature
[00:08:47] in the oven and try again. Yeah.
[00:08:49] >> Yeah. And at the time when agents were
[00:08:52] starting to get really good, like last
[00:08:53] February when we started this podcast in
[00:08:56] AMP, you could use the term assistant to
[00:08:58] refer to the previous way it was done
[00:09:00] where it literally was just one textual
[00:09:02] response and no actions. And agent
[00:09:05] started to mean when you actually have
[00:09:06] it run commands and get in feedback
[00:09:09] loops. Now where we are today, it does
[00:09:12] feel like there are people that are
[00:09:13] still using an agent as an assistant.
[00:09:15] Like what you said, they're keeping a
[00:09:17] really tight leash on it. Even in AMP
[00:09:20] where the vast majority of people run
[00:09:22] with no permissions and it can do
[00:09:23] anything, most people have good feedback
[00:09:25] loops set up. Even so, there's some
[00:09:28] people that are at the next level that
[00:09:29] are pushing forward. Even in our own
[00:09:31] repo, in the AMP repo, in the last
[00:09:33] couple weeks, we made a ton of progress
[00:09:36] toward getting the feedback loops to be
[00:09:38] really fast and really autonomous so
[00:09:40] that it, you know, can always run. And
[00:09:42] it was humbling for me to see, I thought
[00:09:45] we had good feedback loops, but actually
[00:09:47] they could have been so much better. And
[00:09:49] now with things like auto handoff that
[00:09:51] will let it work down a list of tasks
[00:09:54] and then automatically start a new
[00:09:56] thread when it's done. We've unlocked a
[00:09:58] whole new level of autonomy and it
[00:09:59] almost feels silly to call what we were
[00:10:01] doing before using an agent.
[00:10:03] >> Yeah.
[00:10:03] >> Because it wasn't that agentic.
[00:10:05] >> Yeah. It's
[00:10:08] strange. It's really strange in
[00:10:11] basically we're at the there's this this
[00:10:14] I don't have the phrase for it but
[00:10:15] basically the models get better so they
[00:10:18] can do more but at the same time if you
[00:10:22] adjust your codebase to the model and
[00:10:25] allow it to you know what I said the
[00:10:28] phrasing I used was think of your
[00:10:29] codebase as an application and does the
[00:10:33] agent know how to use it you know is it
[00:10:36] is it agentic and We all kind of know
[00:10:39] like what that means for other things
[00:10:41] now or a lot of us do like if you have a
[00:10:44] website it should have an LLMs.txt thing
[00:10:46] that explains it or you know if you have
[00:10:49] an API you should have like one document
[00:10:51] that shows like how to use it and the
[00:10:53] agent can go and use it and the question
[00:10:55] is is your codebase in that shape? Is
[00:10:58] your codebase ready for agents? And once
[00:11:02] it is um you realize that it can go far
[00:11:06] longer on many tasks and you you realize
[00:11:10] the model can actually do more. It's
[00:11:12] it's not it wasn't the model's fault. It
[00:11:14] was the fault of it's not clear how to
[00:11:17] do this. It's if you take that image
[00:11:20] we've used a bunch of time. You take an
[00:11:21] engineer off the street and say go and
[00:11:23] fix this and look at these two files and
[00:11:26] fix this bug. they would turn around and
[00:11:28] ask you like how do I test that this
[00:11:30] works now you know the models aren't
[00:11:32] trained to say how do I test this now
[00:11:34] they're trained to say now you should
[00:11:36] run the tests or you know I didn't run
[00:11:39] the test or something so yeah that's the
[00:11:41] next step I think like the wording I use
[00:11:44] is you want to weld the agent to the
[00:11:46] codebase you want to make sure that the
[00:11:48] agent when it when you combine it with
[00:11:51] your codebase
[00:11:52] knows exactly
[00:11:55] how to verify its changes and at
[00:11:57] feedback and make sure that what it did
[00:11:59] actually works. And that is different
[00:12:02] from codebase to codebase and it some
[00:12:04] code bases are easier to do this with
[00:12:05] than others. Um but if you can do it, if
[00:12:08] you can get closer to this, yeah, you
[00:12:11] unlocked a new level.
[00:12:13] >> Yeah, that's something where my mind has
[00:12:16] really changed with AMP. We're really
[00:12:20] fortunate to have users that really want
[00:12:22] to be on the frontier and to put in a
[00:12:25] little more work and we don't have to
[00:12:27] make AMP water down for everyone. And
[00:12:30] one thing that we had seen in the past
[00:12:32] is cloud idees. It's so obvious,
[00:12:34] wouldn't it be great if you could just
[00:12:35] have a development environment. You
[00:12:37] could have unlimited numbers of them.
[00:12:38] You could be working on all these
[00:12:40] things. And this is, you know, before AI
[00:12:42] and they never really took off to the
[00:12:43] degree that a lot of people expected
[00:12:45] they would, except in a few companies
[00:12:46] where they put in a ton of work because
[00:12:48] it's a huge amount of overhead to
[00:12:50] maintain a CI environment, your prod
[00:12:53] environment, your local dev environment
[00:12:54] and cloud IDE and it would always just
[00:12:57] drift. There are enough companies,
[00:13:00] teams, code bases out there where they
[00:13:03] are going to probably treat the agent
[00:13:06] development environment as the main
[00:13:08] thing and put in that work so that the
[00:13:11] agent has incredibly good tests so that
[00:13:13] it's isolated and and sandbox and can be
[00:13:16] parallelized. On the AMP team, we want
[00:13:18] to pretty much exclusively build for the
[00:13:20] people that are willing to put in that
[00:13:22] work. If we're not building for the
[00:13:23] people that want to put in that work
[00:13:24] that we're not building where the agent
[00:13:26] can do the best, the value of an agent
[00:13:29] that can do a lot is so much bigger than
[00:13:31] anything else.
[00:13:32] >> Yeah.
[00:13:33] >> So, that's one thing we're going to be
[00:13:34] doing on AMP.
[00:13:35] >> Yeah. That's I think that's the big
[00:13:38] focus. Like this is the future and we
[00:13:41] can talk in a second about what that
[00:13:43] means for the product for AMP. But just
[00:13:45] to make this more concrete, I think that
[00:13:48] I I don't know if I mentioned this. I
[00:13:49] don't think I've mentioned this before
[00:13:51] in this podcast, but I don't know if
[00:13:53] anybody wants to be named, so I'll let's
[00:13:54] keep it anonymous, but basically there's
[00:13:56] a a CTO
[00:13:59] who said his team doesn't use agents a
[00:14:02] lot and or AI. And this was I don't know
[00:14:04] four months ago. And he said he's not
[00:14:06] worried about AI or competitors using
[00:14:09] AI. He's worried about competitors
[00:14:12] having an AI native codebase in that's
[00:14:16] built for agents that's built alongside
[00:14:20] agents. Um, and what he means is that if
[00:14:23] you have a codebase in which an agent
[00:14:26] can do a lot of stuff and can get good
[00:14:29] feedback loops, you can move a lot
[00:14:31] faster. If you think back 20 years ago,
[00:14:33] Joel Spolski's list, like back then it
[00:14:35] was, you know, can somebody ship
[00:14:37] something on day one? Like that was the
[00:14:39] GitHub meme, right? Can somebody ship
[00:14:41] something on day one? And everybody was
[00:14:42] aiming for this and saying, "Look, I
[00:14:45] need like one command to run to set up
[00:14:47] the deaf environment. We need to make it
[00:14:49] super easy to push. We need to make it
[00:14:50] super easy to review. We need CI." Like
[00:14:52] it meant all of those things. So now the
[00:14:55] question is 2026,
[00:14:58] can you agent ship something in the
[00:15:00] first 10 minutes of you letting it
[00:15:01] loose? You know, like h what what do you
[00:15:03] need to do to make this happen? And that
[00:15:05] means an AI native codebase. What does
[00:15:08] that mean in practice? Two examples.
[00:15:10] One, and we have a video of this. I
[00:15:12] think that's like a practical example. I
[00:15:15] worked on this terminal emulator in Rust
[00:15:17] and it had rendering issues. And I
[00:15:19] assumed, well, it's GPU accelerated.
[00:15:22] It's a native application. How do I give
[00:15:24] the agent feedback? But then it turns
[00:15:26] out I keep sending it these screenshots.
[00:15:29] Like I keep saying like the character
[00:15:31] drawing, this is off. Like the the the
[00:15:33] margins are off. this looks wrong and I
[00:15:35] keep sending these screenshots and the
[00:15:37] models are really good with screenshots,
[00:15:39] right? So I built into the application
[00:15:42] basically another CLI flag that says
[00:15:44] capture to here and then you can specify
[00:15:47] the path of an image file. So in your
[00:15:49] application, right, and I'll get to the
[00:15:52] objection in a second. In the
[00:15:53] application, I built the feedback loop.
[00:15:55] So you can start your application and
[00:15:57] say start do this and then drop a
[00:15:59] screenshot here. And once I had this and
[00:16:01] I let the agent build it, of course, I
[00:16:03] could basically remote control the
[00:16:05] terminal and say, "Start the terminal,
[00:16:07] run this command, and then take a
[00:16:08] screenshot and put it here." And once I
[00:16:11] had this, the agent went off flying. It
[00:16:14] it it was like, "Let me take a look at
[00:16:16] what this renders like now." And then it
[00:16:18] figured out it doesn't render. And then
[00:16:20] it went off. The objection would be,
[00:16:21] "Oh, you're changing the main
[00:16:22] application to make it easier for the
[00:16:23] agent to get feedback." Yeah, it's the
[00:16:26] same like how I would make a codebase
[00:16:28] easier to test, you know, for automated
[00:16:31] tests like yes, that's something I do.
[00:16:33] The other practical example, this was
[00:16:35] from two weeks ago. I added
[00:16:38] [clears throat] a new command to the um
[00:16:41] AMP TUI. I started with, hey, AMP, in
[00:16:44] order to test this, run the TUI in
[00:16:46] T-Max, then hit control O, then type in
[00:16:49] this, and then run this command. And it
[00:16:51] can do it. It's really good at
[00:16:53] controlling stuff in T-Max, but it took
[00:16:55] a long time and it was like errorrone
[00:16:57] because sometimes there were timeouts
[00:16:59] that didn't match and whatnot. So I
[00:17:01] thought I don't care about the UI
[00:17:03] presentation for now. Let's take the
[00:17:05] data that's displayed and let's build a
[00:17:07] new subcomand for the CLI that only
[00:17:09] outputs the data and then the agent can
[00:17:12] run it because it can run CLI commands.
[00:17:15] And then it again it went off like it
[00:17:17] was this hamster wheel of the agent
[00:17:19] running in the feedback loop and it just
[00:17:22] ran this command over and over and over
[00:17:24] again. And I think that's exactly what
[00:17:26] we need more of these ways for the agent
[00:17:29] to use your application. And then what
[00:17:31] you want is agents MD files instructions
[00:17:34] prompts that guide the agents so that it
[00:17:36] knows if I make this change this is the
[00:17:39] thing I need to use to get feedback.
[00:17:41] >> Yeah. So the agent codebase that's like
[00:17:44] 10 different things like the Joel
[00:17:46] checklist which we'll link to.
[00:17:48] >> Yeah. Exactly. Yeah.
[00:17:49] >> Yeah. And also how does it authenticate
[00:17:51] to your web app if it's a web app?
[00:17:54] >> Yeah.
[00:17:55] >> How can it click around? One thing that
[00:17:57] we've thought is this actually means
[00:17:59] that web apps have an advantage and I
[00:18:02] guess terminal apps too because they're
[00:18:04] a lot easier to control than a native
[00:18:05] app. I know that those have
[00:18:07] accessibility trees, but I think it's a
[00:18:09] lot more complex.
[00:18:10] >> And then, you know, we're expecting to
[00:18:13] see a shift there. So, if it's so much
[00:18:15] easier to build a certain kind of app
[00:18:17] than another, then you're going to build
[00:18:18] that
[00:18:19] >> kind of application. And it's going to
[00:18:23] be a real decision point for a lot of
[00:18:25] teams when they choose to use some
[00:18:28] framework or technology that maybe they
[00:18:30] don't prefer for their idiosyncratic
[00:18:32] reasons because the agent does better
[00:18:34] with it. And I would posit that making
[00:18:37] the choice to do what agents do well at
[00:18:41] is the right software engineering choice
[00:18:44] for the future. Even if it's not your
[00:18:46] own taste like
[00:18:47] >> I really don't like classes in
[00:18:49] Typescript, but the models really like
[00:18:50] using classes and
[00:18:52] >> I give in. That's like a minor example.
[00:18:55] >> Yeah, I think that's a good point. It's
[00:18:57] always been like this, right? like the
[00:18:58] the the naive view would be that you
[00:19:01] choose a technology based on the merits
[00:19:04] of the technology by itself or in
[00:19:07] isolation as in I choose a programming
[00:19:09] language because for this problem I need
[00:19:12] this program language you know it's good
[00:19:14] at solving these types of problems
[00:19:16] that's just the first step the actual
[00:19:19] thing you do when you have a company or
[00:19:22] a team is you need to figure out can I
[00:19:25] hire for the language can I do I have
[00:19:28] people who can write this language, you
[00:19:30] know, like it doesn't make sense to
[00:19:32] start a company that uses Haskell in
[00:19:35] Frankfurt and your goal is to scale up
[00:19:37] to have 200 engineers because there's no
[00:19:40] 200 Haskell engineers in Frankfurt. It's
[00:19:42] the same with this these choices now.
[00:19:45] You have to do the actual and this is
[00:19:47] engineering. You have to find out here's
[00:19:49] my problem. Here's the technology with
[00:19:51] which I can solve it. Here's all of the
[00:19:53] other constraints. meaning now how do
[00:19:55] the agents do with the proposed solution
[00:19:57] I have and then you need to adjust and
[00:19:59] that might mean you know using a new li
[00:20:02] a well-known library that's slightly
[00:20:05] worse in some you know respect than than
[00:20:08] another library because the agents are
[00:20:10] better at using it.
[00:20:11] >> Yeah. All right. So we think there's
[00:20:14] going to be a lot of change and in
[00:20:16] particular
[00:20:17] in the past agents and AI never asked
[00:20:20] companies to change their code base to
[00:20:23] >> change these things that are so core and
[00:20:27] the source of so many debates. But now
[00:20:30] we think for agents to do really well
[00:20:32] you're going to have to do that. And for
[00:20:33] AMP, for all the other agent makers out
[00:20:36] there, we're now in the position of
[00:20:38] having to ask our customers to put in a
[00:20:42] lot of upfront work that will not pay
[00:20:45] off immediately, that will probably spur
[00:20:48] a lot of arguments on their team. And
[00:20:51] when we talk about AMP wanting to always
[00:20:53] be able to change fast and having the
[00:20:55] mortal fear that everything is changing,
[00:20:58] this is exactly why we did that. because
[00:21:02] we have seen how it is so easy to just
[00:21:06] optimize for the way things are today.
[00:21:09] Um and we think the AMP products is
[00:21:12] going to look totally different in 3
[00:21:13] months and actually the rate of change
[00:21:16] is going to go up and for our customers
[00:21:18] are we feel like we have a a duty to
[00:21:21] keep them on the frontier more than we
[00:21:23] have a duty to continue maintaining the
[00:21:25] way the product is because there's 10
[00:21:27] other coding agents that are going to
[00:21:29] take the way that coding agents are
[00:21:31] today and still be offering that in a
[00:21:34] year. I don't think anyone's going to
[00:21:35] want that, but a lot of companies will
[00:21:36] think they want that right now and will
[00:21:38] be upset if things change. So, we are
[00:21:41] going to change. We're going to ask
[00:21:43] customers and users to do the hard
[00:21:44] thing. The $10 free daily grant that we
[00:21:48] shipped, people uh love it. It's a nice
[00:21:51] way that we can incentivize people to
[00:21:53] make some of these changes, whether it's
[00:21:55] feeling like, oh, you know, the AMP team
[00:21:56] subsidizes me, so I'll try things a
[00:21:59] little bit more on the margin. Um, be a
[00:22:02] little more forgiving. um or just you
[00:22:04] know it's it's uh less expensive so
[00:22:07] still you know this makes sense but
[00:22:09] that's a real question and if you don't
[00:22:10] if you're using a coding agent it's not
[00:22:12] pushing you to make changes to
[00:22:14] everything in how you build software
[00:22:15] then it's probably not pushing you
[00:22:16] enough. Yeah, I think just to underline
[00:22:21] this point,
[00:22:23] if all progress would stop right now and
[00:22:26] the models would not get better, um,
[00:22:30] a lot of stuff would change, right? Like
[00:22:32] a lot of our calculations would have to
[00:22:34] change. Meaning, you would then say,
[00:22:37] okay, if the models are this and they're
[00:22:39] all frozen in time, then I can maybe
[00:22:41] optimize for cost and say, I'm going to
[00:22:44] run local models. and these local models
[00:22:46] aren't as smart as Opus and then I'm
[00:22:48] going to optimize for this specific use
[00:22:50] case and I'm going to use two local
[00:22:51] models and they complement each other
[00:22:53] and whatnot. But the problem is if you
[00:22:57] do this right now and you try to make
[00:22:59] nonfrontier models work and optimize for
[00:23:02] cost, what you're doing is you're
[00:23:05] building something that will be outdated
[00:23:07] in half a year. You you
[00:23:09] >> and you're building it for people that
[00:23:10] >> Yes.
[00:23:11] >> by the very definition do not want to
[00:23:13] pay a lot which means you're not going
[00:23:16] to have a business or an interesting
[00:23:18] product.
[00:23:18] >> Exactly. And it's you have to
[00:23:22] if if I now think like if I now were to
[00:23:26] build an agent and try and make it work
[00:23:27] for claw 37 you know like or 35 let's
[00:23:33] say 35. Thank goodness Anthropic doesn't
[00:23:35] like discount that massively or else
[00:23:37] people would ask.
[00:23:38] >> They would ask. Yeah. But it's a waste
[00:23:40] of time because you're solving problems
[00:23:43] that are already solved in the new
[00:23:45] models. And the other thing I want
[00:23:47] people to know agents are not like the
[00:23:50] capabilities are still like some people
[00:23:52] say, you know, they're plateauing, but I
[00:23:54] think the curve of from model to model
[00:23:57] or from generation to generation is so
[00:23:59] weird. You cannot get a good impression
[00:24:03] of what the frontier looks like by
[00:24:04] looking at the smaller and cheaper and
[00:24:06] worse models. I don't think you can look
[00:24:09] at Gwen 3. Like it's a great model,
[00:24:12] Gwen, right? It's good, but I don't
[00:24:14] think you can look at this self-hosted
[00:24:16] open-source model and then infer from
[00:24:19] that how the frontier models will
[00:24:22] evolved. I don't I I don't think there's
[00:24:24] a clear path that lets you do this
[00:24:26] projection. So you need to look at the
[00:24:28] frontier and that's you know what we're
[00:24:30] doing with AMP.
[00:24:32] >> Yeah.
[00:24:32] >> And yeah and then
[00:24:34] >> so
[00:24:35] >> I think
[00:24:35] >> no model selector means
[00:24:38] >> we are not beholden to things that were
[00:24:42] in the list 3 months ago 6 months ago.
[00:24:44] No subs no you know not supporting cloud
[00:24:47] max subscription lets us have no model
[00:24:50] selector and it lets us switch the best
[00:24:53] model use models in interesting ways.
[00:24:56] all this stuff and the the only thing we
[00:24:58] ask is are we going to learn from this
[00:25:00] and is this going to push the frontier.
[00:25:02] It's not about like is it useful today
[00:25:03] because a lot of these things yes they
[00:25:05] can be useful today but they're not
[00:25:07] going to be useful very long and a
[00:25:09] million other people are building
[00:25:10] products to let you do that. So why
[00:25:12] don't we do something different? Yeah,
[00:25:14] that's a fine line to work for us
[00:25:16] though, admittedly like the it would be
[00:25:18] nice if we could make everybody happy
[00:25:20] and build everything for everybody, but
[00:25:21] what we need to do is we we always need
[00:25:25] to be on the edge otherwise we fall
[00:25:27] behind and that's no use that's of no
[00:25:29] use to anyone. Um, so yeah, that's what
[00:25:32] we're doing. Um, to I want to go into
[00:25:36] like the Q&A a little bit like 5 10
[00:25:38] minutes, but to round this off,
[00:25:40] >> you know what say?
[00:25:42] >> Yeah. What's next? What's next? So,
[00:25:44] >> other than the aenta codebase, like how
[00:25:45] have people been using these things? How
[00:25:47] are we using AMP different in the last
[00:25:49] few weeks?
[00:25:50] >> I think my new slogan is uh the
[00:25:54] assistant is dead, long live the
[00:25:55] factory. Meaning
[00:25:58] what we want to build or meaning that
[00:26:02] Asians write code is a given that the
[00:26:04] assistant thing the oneonone that this
[00:26:06] works. Yes. The question is if you give
[00:26:10] them a longer leash and you can right
[00:26:12] now and if they run on their own, what
[00:26:15] else can you do? And that means you can
[00:26:17] build your codebase into an agent native
[00:26:20] codebase and you can build up a factory
[00:26:22] where from anywhere you should be able
[00:26:25] to send the prompt to your agents or the
[00:26:28] multitude of agents and have them work
[00:26:31] on your codebase. I think that's next
[00:26:33] that that's the next big thing because
[00:26:36] the models are already ready for it and
[00:26:38] in case they're not, they will be. So
[00:26:42] yeah, I do you want to go into any any
[00:26:44] concrete things here or
[00:26:47] >> Yeah, I I agree. I I think that the
[00:26:51] human's job is going to be how can you
[00:26:53] do two things? One, force feed your
[00:26:56] agent a stream of tasks that you have
[00:26:58] the intuition that it will succeed on.
[00:27:01] And two, how can you expand the scope of
[00:27:04] what tasks it can succeed on through
[00:27:07] making your code base better? Better
[00:27:09] feedback loops, giving it the capability
[00:27:12] to finish a task and as reliably as
[00:27:17] possible give you the minimal proof
[00:27:19] necessary that you can look at in most
[00:27:21] cases to know that it's good. And I mean
[00:27:24] the perfect would be if all you need to
[00:27:26] look at is you hear the ding like I'm
[00:27:27] gonna hear any minute now because I
[00:27:28] queued up an AMP thing a little while
[00:27:30] ago and you you have confidence it's
[00:27:32] perfect but it might be you want to see
[00:27:33] a demo or a screenshot or something like
[00:27:34] that. So those two things that's what
[00:27:37] you should be focused on and then it's
[00:27:39] just strap it down force feed at these
[00:27:41] tasks and the thing that AMP that we are
[00:27:45] looking at building now is what does
[00:27:47] that force task feeder look like and the
[00:27:51] way to make your codebase agentic and
[00:27:53] how do you know if it's agentic how can
[00:27:54] it become more agentic based on where
[00:27:56] the agent stumbles
[00:27:58] and so on that's what we think is
[00:28:01] interesting in the next couple months
[00:28:04] >> I'm going to add And I don't think this
[00:28:06] is obvious to a lot of people, but I
[00:28:09] think a lot of the dev tooling we have
[00:28:11] is not going to cut it because a lot of
[00:28:13] the tooling we have is based on the
[00:28:16] assumption that the human wrote code
[00:28:18] that the human put a lot of effort and
[00:28:20] time and expertise into writing a given
[00:28:24] piece of code and that flows through
[00:28:27] everything in in our dev tools. Somebody
[00:28:30] tweeted this last week. He said, "We're
[00:28:32] trying this in the team. instead of
[00:28:33] creating a linear ticket, we just send
[00:28:36] off an agent. And it sounds so tright,
[00:28:39] but when you think about it, if you
[00:28:42] think, okay, you have agents, you can
[00:28:44] just take a bug description and send it
[00:28:46] off and have it investigate in the same
[00:28:48] amount of time it takes you to create a
[00:28:50] linear ticket. But in a world where a
[00:28:53] human rights code and they have to get
[00:28:55] context and set up the def and switch
[00:28:57] the branches and blah blah blah and get
[00:29:00] into the headsp space of fixing a bug,
[00:29:02] not all of the bugs, but in in the old
[00:29:04] world, you would create a linear ticket
[00:29:06] because the developer was busy. They
[00:29:07] were doing something else. Only next
[00:29:09] week when the new sprint starts, can you
[00:29:11] assign the tickets to them? But if you
[00:29:13] now have unlimited entities being able
[00:29:16] to investigate your code, why shouldn't
[00:29:18] you send the agent off immediately
[00:29:20] before you create a ticket? That's one
[00:29:22] example. The other example is somebody
[00:29:24] asked me like what are your gripes with
[00:29:26] GitHub? And they were I think concerned
[00:29:28] about like is it a single page
[00:29:29] application and load times whatnot. But
[00:29:31] I think it's built on the assumption
[00:29:34] that somebody put a lot of effort into a
[00:29:37] change. The pull request thing you can
[00:29:39] emoji react to it. You can leave a heart
[00:29:41] emoji, a smile emoji, right? You can
[00:29:43] assign people to it. But in a world
[00:29:46] where agents write 90% of the code, the
[00:29:49] perceived value of a given change is
[00:29:52] completely different because you can
[00:29:53] actually say to the agent is completely
[00:29:55] wrong. Ask your agent friend to spin up
[00:29:57] another chain. Make 10 variations of
[00:30:00] this. What would the interface look like
[00:30:03] for this? If you have in your words
[00:30:05] Quinn like the primordial soup of agents
[00:30:08] and code that's it's always bubbling and
[00:30:11] brewing and generating you know like new
[00:30:13] code like I don't I don't think the
[00:30:16] given tools are going to cut it. So when
[00:30:18] people think about the factory of agents
[00:30:22] producing code, they might think, oh,
[00:30:25] I'm going to put a ticket in here and
[00:30:27] then the ticket goes to an agent and
[00:30:29] then the agent does this and then it
[00:30:30] spits out something and it creates a
[00:30:32] pull request and then I'm going to
[00:30:33] review the pull request and I'm going to
[00:30:35] do this. What you're doing is you're
[00:30:36] treating agents like a human and that's
[00:30:39] it. You're creating bottlenecks that
[00:30:41] shouldn't be there. So I think a lot of
[00:30:43] that will change.
[00:30:44] >> Yeah. In particular, I have been really
[00:30:47] pleasantly surprised at how many
[00:30:49] companies I see that used to be really
[00:30:52] intent on formal code review like the
[00:30:55] religion passed down from Google where
[00:30:58] now they realize that if you've got a
[00:30:59] senior engineer who you trust deeply and
[00:31:02] they are writing the code with the
[00:31:04] agent, they're reviewing the agent's
[00:31:06] code, then that is at least the quality
[00:31:10] level of a you know uh human written and
[00:31:14] human reviewed piece of code. And so
[00:31:17] you're seeing a lot more teams do what
[00:31:19] we've been doing on AMP since day one,
[00:31:20] which is we push to main for the AMP
[00:31:23] core committers. And we're living a lot
[00:31:26] of this new world where another big news
[00:31:29] since the last recording is we have spun
[00:31:31] AMP inc off from source graph and we
[00:31:35] have 20 people on the AMP team. We are
[00:31:38] all coding. We're all using AMP
[00:31:40] constantly. We do not have a lot of
[00:31:43] enterprise salespeople. We're not trying
[00:31:45] to make the product appeal to the kind
[00:31:47] of median enterprise or anything like
[00:31:50] that. We don't have PMs. We don't have a
[00:31:51] lot of these traditional overhead roles
[00:31:54] and we're kind of starting from scratch
[00:31:56] and you know building AMP Inc. the way
[00:31:58] that we think a lot of companies will be
[00:32:00] built or at least trying to figure that
[00:32:01] out. If that kind of way of working
[00:32:03] appeals to you then know that we're in
[00:32:05] the same boat and we're going to be
[00:32:06] sharing what we learn and look forward
[00:32:08] to just seeing everyone figure this out
[00:32:10] together. Yep. All right, let's do let's
[00:32:12] do a quick Q&A section. Why not add I
[00:32:16] mean this comes up a bunch of times. Why
[00:32:18] not add a model selector?
[00:32:21] What are we going to learn from it?
[00:32:24] That's what we ask. And look on the AMP
[00:32:27] team, we can select the models that AMP
[00:32:29] uses by, you know, which models do we
[00:32:32] use? And we try all kinds of models. We
[00:32:33] get early access to models. And if we
[00:32:35] had a model selector, not only would we
[00:32:38] not learn from all of you how you're
[00:32:40] using uh AMP, it would just be so much
[00:32:43] overhead. Everyone would be trying a
[00:32:45] different selection combination of
[00:32:46] models, it's like AMP would be a self
[00:32:48] assembled kit rather than a product. Uh
[00:32:51] we wouldn't learn. I don't think you'd
[00:32:53] like the product as much. And it is so
[00:32:56] valuable that there's one way to use
[00:32:59] AMP. Actually, I was sitting with a
[00:33:01] power user and he said that he likes
[00:33:04] that there's not like a million
[00:33:07] different knobs and you know this is the
[00:33:09] old way but we deprecated it three
[00:33:10] months ago but you can still be using
[00:33:12] it. You know this idea that even some of
[00:33:14] the smartest people in programming are a
[00:33:16] few months behind the frontier. If
[00:33:18] you're using AMP it's only possible to
[00:33:20] be used in the way that we think is
[00:33:22] good. At least we try to make it really
[00:33:24] hard to use in an archaic way. And I
[00:33:27] think the other thing to add here is
[00:33:29] everything is changing. The software
[00:33:31] itself is changing. Like a lot of the
[00:33:34] the software we're seeing now has like
[00:33:36] this non-deterministic element in it
[00:33:38] called LLM. So the software itself is
[00:33:41] changing. How we write software is
[00:33:43] changing. Who or what writes software is
[00:33:46] changing. And you have to ask yourself
[00:33:48] as a software engineer if you are not
[00:33:51] working on an agent when everything is
[00:33:53] changing and it's really hard to figure
[00:33:54] out where this is going. Do you really
[00:33:56] want to spend your time exploring the
[00:33:59] strength and weaknesses of five, six,
[00:34:01] seven different models and switch
[00:34:04] between them or do you want somebody
[00:34:06] else to figure this out for you so you
[00:34:07] can actually worry about what matters?
[00:34:09] Everybody has a different answer and
[00:34:11] different amount of time they can spend
[00:34:14] on anything in a day. So if you're not
[00:34:16] working on this, I think it's it's a
[00:34:17] waste of time. Next question. Why not
[00:34:20] offer a sub a subscription?
[00:34:22] >> A subscription. The idea is that it's
[00:34:24] something where you pay 200 bucks a
[00:34:28] month and you get $2,000 a month back.
[00:34:32] It's like a fountain of youth or a
[00:34:34] perpetual motion machine that I mean if
[00:34:37] we could do that we would. The reason
[00:34:39] why Anthropic can do it is one they I
[00:34:43] think are you know they're growing
[00:34:45] incredibly fast. They have a ton of
[00:34:47] cash. They've made a lot of upfront
[00:34:49] commitments. They have to provision for
[00:34:51] peak usage. they've got lower marginal
[00:34:53] cost usage. They're just paying for the
[00:34:56] power there. You know, that's a business
[00:34:58] decision. They own the model. For
[00:34:59] everyone else who doesn't have a, you
[00:35:02] know, their own foundation model, it's
[00:35:04] pure cost. And after the thing where
[00:35:08] Anthropic said that Claude Max can no
[00:35:11] longer be used by other tools, there's
[00:35:13] some other places that offer
[00:35:15] subscriptions like they get a co copilot
[00:35:18] subscription like Open Code Black and
[00:35:20] people some of them are switching over
[00:35:22] to that. But I don't think that it is
[00:35:24] possible for say Open Code Black to
[00:35:27] offer you $2,000 of tokens for 200
[00:35:30] bucks. I there's just no way. If we were
[00:35:32] to offer that, that would be endorsing a
[00:35:35] terrible rugpull for our customers. I
[00:35:38] think it would also add a lot of
[00:35:40] friction to how we want to build AMP
[00:35:42] because let's say the models that the
[00:35:44] sub offered access to suddenly became
[00:35:47] not the best models that we wanted to
[00:35:49] use in AMP. Then if we were to switch,
[00:35:51] we would have a lot of users who say,
[00:35:53] "Well, you just jacked up my price by 10
[00:35:55] times or more." That's not the kind of
[00:35:57] user we want. We want the users that
[00:35:59] want to be on the frontier and exploring
[00:36:01] this with us. But if the magical sub
[00:36:05] where you can get 10x your money shows
[00:36:07] up, then yeah, we'll do it.
[00:36:09] >> And the thing people have to keep in
[00:36:10] mind is that this is not the SAS era
[00:36:15] anymore. And you know, it's a it's a
[00:36:18] well-known I don't I was close to saying
[00:36:20] common, but it's a tactic to go into a
[00:36:22] market and to subsidize usage. So you
[00:36:26] capture the market, right? So you say
[00:36:28] for our users, we're going to offer the
[00:36:30] same product as Netflix but you know $1
[00:36:34] subscription or something and then you
[00:36:35] can watch all of the movies and you're
[00:36:36] going to capture the market but then the
[00:36:39] next move would be your competitors die
[00:36:41] and then you jack up the prices. Like
[00:36:43] that's a move companies have done in
[00:36:45] many different markets. The problem is
[00:36:48] in this market it's so crazy that you
[00:36:52] cannot jack up the prices because what
[00:36:54] you would have to do is to make it work
[00:36:56] in any approximation would be to have
[00:36:58] your own model or run inference or
[00:37:00] something and for that you need like all
[00:37:02] of the trucks in the world full of cash
[00:37:05] you know like to get into this model
[00:37:06] game. It's not a feasible play. You
[00:37:09] can't say we're going to offer the
[00:37:10] subscription and then we're going to
[00:37:11] make it worth by training our own model.
[00:37:13] If you're not one of the 10 people in
[00:37:16] the world with access to that amount of
[00:37:18] cash, I think it's just it's a waste of
[00:37:20] time. Like it's just going to burn too
[00:37:21] much money. And if you have access to
[00:37:23] that amount of cash, I'm really grateful
[00:37:25] that a lot of those companies are making
[00:37:26] incredible models that we all get to
[00:37:28] benefit from. But also then in a way in
[00:37:32] practice, you're tied to just using that
[00:37:34] model. And if there's now three or four
[00:37:37] other companies that are making models
[00:37:39] that are competitive at the
[00:37:40] state-of-the-art level that have other
[00:37:41] differing capabilities, then if your
[00:37:43] product only uses your own models and
[00:37:45] that's this the primary selling point,
[00:37:48] it's very possible that that product
[00:37:51] will no longer be the best or there
[00:37:53] could be some change. Maybe you bet
[00:37:55] wrong in the pre-training or in the
[00:37:57] direction of how these things are going
[00:37:58] to be used or maybe something you get
[00:38:01] too big and you slow down and you know
[00:38:04] everyone everyone whether you're making
[00:38:06] models, coding agents, whatever,
[00:38:07] everyone is working like crazy. Everyone
[00:38:10] is paranoid and everything and yeah, I
[00:38:13] mean I I kind of love it. There's so
[00:38:15] much change going on and a sub would
[00:38:17] just make us make it harder to change
[00:38:20] AMP. And I don't think that the magical
[00:38:22] sub that people want actually exists.
[00:38:25] >> All right, last thing real quick. People
[00:38:28] apparently constantly look at our
[00:38:29] binaries or they try and figure out
[00:38:32] what's in there, what we're shipping
[00:38:34] behind the scenes. Um, we're not going
[00:38:36] to name any specific thing, but somebody
[00:38:41] was asking about the new deep mode.
[00:38:43] Let's let's each of us give like two
[00:38:44] three sentences on on what what might be
[00:38:48] >> I heard the ding from deep mode like a
[00:38:50] minute ago and I started it right before
[00:38:52] we got on.
[00:38:53] >> There you go.
[00:38:53] >> So that's
[00:38:56] a really good teaser. I think the
[00:38:58] strength of AMP or one of our advantages
[00:39:01] is that we can tailor models to specific
[00:39:03] use cases, right? And for example, rush
[00:39:06] mode, if you want small, quick, dumb
[00:39:08] changes, you can use a smaller model.
[00:39:10] It's faster, it's cheaper. smart mode,
[00:39:12] your normal uh agentic programming. But
[00:39:15] there's another model that I think is
[00:39:19] really good and I think it lends itself
[00:39:22] more to the future possibly the factory
[00:39:26] use case where the agent goes off and
[00:39:28] does something for a while and it's not
[00:39:31] coming back and it doesn't ask you to
[00:39:33] for the recipe and to take what else to
[00:39:35] take off the shelf. It's a model that
[00:39:36] goes and figures stuff out on its own.
[00:39:39] And I think that's a different mode. And
[00:39:40] in that different mode, you want
[00:39:43] different tools. You know, say the
[00:39:45] another model constantly asks like,
[00:39:46] "What should I do? Can you past me this?
[00:39:48] Can you paste me this?" In a deep mode,
[00:39:50] deep work. It goes off. It does
[00:39:52] something. You you want the harness
[00:39:54] completely optimized for this mode.
[00:39:56] Really excited about it. I'm really
[00:39:58] excited about it. So, I hope I hope we
[00:40:00] can ship something soon. And this is
[00:40:02] something that could make a lot of
[00:40:05] people change how they use coding
[00:40:06] agents. So get ready to change. And what
[00:40:10] I would ask for anyone, especially those
[00:40:12] listening, is your first reaction is
[00:40:14] probably going to be, I don't like
[00:40:16] having to do more of this work upfront
[00:40:18] or, you know, this feels different.
[00:40:20] Every single change we make, there's
[00:40:23] people that have the human, very human,
[00:40:26] knee-jerk reaction against it.
[00:40:29] >> Yeah. and
[00:40:31] just suspend that and come with us.
[00:40:34] Explore the frontier with us. We think
[00:40:36] that there's something more here.
[00:40:38] >> Yes, there's lots to build. It's
[00:40:40] exciting. All right, we have
[00:40:42] >> check on that. Ding. AMP has some work
[00:40:44] for me, so I gotta go.
[00:40:46] >> All right, bye-bye. Bye-bye. See you
[00:40:49] next time.
