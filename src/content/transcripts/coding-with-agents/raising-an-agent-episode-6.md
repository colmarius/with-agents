---
title: "Sub-Agents & Sonnet"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-6"
sourceUrl: "https://www.youtube.com/watch?v=HVihMH5j8KQ"
videoId: "HVihMH5j8KQ"
capturedAt: "2026-06-27T15:02:48.364Z"
series: "raising-an-agent"
episode: 6
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 2105
---

## Transcript

[00:00:00] To me, it just seems like there's
[00:00:01] different philosophies in these houses
[00:00:04] that you know what an agent should be.
[00:00:07] And I think anthropic so far
[00:00:10] seems to be the most on the path of like
[00:00:14] this practical coding agent that can go
[00:00:17] and and figure stuff out and not just
[00:00:19] build apps, you know.
[00:00:20] >> Yeah. I don't understand why because
[00:00:24] that seems like it is strictly better to
[00:00:27] be able to get that kind of feedback
[00:00:28] from the environment to iterate. Feels
[00:00:30] like that's better from a business model
[00:00:32] point of view because I mean think of
[00:00:33] all the inference you're doing if you
[00:00:35] have a long tool calling thread going
[00:00:37] on.
[00:00:46] >> Welcome to another episode of raising an
[00:00:48] agent. This time, episode 6. Last time
[00:00:50] we recorded in San Francisco, now we're
[00:00:52] back. One of us is in Germany and the
[00:00:54] other one is in San Francisco. Here's
[00:00:56] Quinn, CEO of SalsCraft. Hi.
[00:00:58] >> Hello. How's the coding been?
[00:01:01] >> It's been really good. It's been so good
[00:01:04] yesterday. I'm not making this up. It's
[00:01:06] been so good yesterday.
[00:01:08] How it felt that in the evening I
[00:01:11] thought, how can I feel this good? There
[00:01:13] has to be something wrong. Like, did I
[00:01:14] miss anything today? Did I miss to catch
[00:01:16] up with anything? But no, it's been
[00:01:19] nice. Like yesterday, I I wrote a lot of
[00:01:21] code by hand again after letting Claude
[00:01:24] 4 rip uh for sonnet for rip for a few
[00:01:26] days and it was nice.
[00:01:27] >> So why did you need to write it by hand?
[00:01:29] >> Good question. I think I had it. So the
[00:01:32] previous two days I had it, you know,
[00:01:35] zero shot like features go all through
[00:01:38] the stack and build a new thing. And
[00:01:40] that kind of gave me like an overview of
[00:01:43] okay, this is not what I want or these
[00:01:45] are the file involves. And then the day
[00:01:48] before yesterday, I had this thought of
[00:01:51] I could build it this way.
[00:01:54] And then yesterday morning, I had Sonet
[00:01:56] 4 take my idea and implement like a
[00:01:59] rough easy version. And then I just
[00:02:01] spent the rest of the day kind of uh
[00:02:04] exploring the code and figuring out
[00:02:06] little bits and pieces and moving them
[00:02:07] around. It's like moving the guard rails
[00:02:09] around. Like I I don't know how to even
[00:02:12] express this in a prompt. It's more like
[00:02:14] let me see how this works and let me
[00:02:16] understand the invariance involved here
[00:02:19] and then let's put them in code and then
[00:02:22] um I had sonet for you know what we've
[00:02:25] what we always do like write a new story
[00:02:27] book thing or like okay here's what I
[00:02:29] here's how I wanted to work sonet 4 you
[00:02:31] now go and implement the front end
[00:02:33] component for this or you know just take
[00:02:35] care of the typing for me and that felt
[00:02:38] really good yesterday but it's been a
[00:02:40] while since I wrote this much code by
[00:02:41] hand
[00:02:43] Nice.
[00:02:44] >> How has coding been for you?
[00:02:45] >> Well, ever since we opened up the weight
[00:02:47] list with AMP, it's been easy to get
[00:02:49] distracted by all these people sending
[00:02:50] in their feedback on the Discord and X
[00:02:53] and email and all that, which I love.
[00:02:55] It's so motivating. And
[00:02:57] >> we never want to forget the basics like
[00:03:00] fixing bugs, making things fast, all
[00:03:02] that. And I've had my time consumed by a
[00:03:05] lot of that. And AMP has been really
[00:03:07] good at those kinds of things. But there
[00:03:10] have been some big bigger things I've
[00:03:12] wanted to get to that I haven't like
[00:03:14] improving how we have the internal API
[00:03:16] communication from the client to the
[00:03:18] server. Right now it's really like an ad
[00:03:20] hoc REST API and then background agents
[00:03:23] and I've not gotten a big chunk of free
[00:03:26] time to work on either of those.
[00:03:28] >> Yeah.
[00:03:29] >> So I I want to get to it.
[00:03:31] >> But Cloud 4 has also just been
[00:03:32] mind-blowing. And it was five days ago
[00:03:34] that it came out. I mean it's crazy.
[00:03:36] >> Yeah. So okay, three things we got to
[00:03:38] talk about. the claw for background
[00:03:41] agents which you just mentioned and then
[00:03:43] maybe maybe let's start it again by the
[00:03:45] opening it up for everybody like
[00:03:46] removing the weight list we did this two
[00:03:49] 3 weeks ago two 3 weeks ago what's your
[00:03:51] main
[00:03:51] >> it was a result of meticulous planning
[00:03:54] where I believe you and I were talking
[00:03:56] and we're like should we do it in five
[00:03:58] days no what about now right
[00:04:01] >> what about now it was okay let's do it
[00:04:04] in a few days let's add more people from
[00:04:06] witness and we both started clicking to
[00:04:09] let people in from the wait list and
[00:04:10] then we said how about we do it today
[00:04:14] and then oh oh yeah tomorrow I think
[00:04:16] tomorrow and then then I wrote this post
[00:04:18] and then we just did it the next day but
[00:04:21] yeah I I just my my impression ever
[00:04:25] since opening it up is you know of
[00:04:27] course there are bugs and we had to fix
[00:04:29] bugs but no big surprises like no nasty
[00:04:32] bugs that made me sweat of like my god I
[00:04:35] really have to get this fixed today
[00:04:38] which is you know just speaks to having
[00:04:40] the weight list concept and like fixing
[00:04:42] bugs with you it speaks to Jeff right
[00:04:44] like testing this stuff out but overall
[00:04:47] I'm I'm quite happy
[00:04:50] you know how much it resonates like what
[00:04:52] we want to put out in the world how much
[00:04:54] it resonates with with others when they
[00:04:56] say it's um super simple some say it's
[00:04:59] the best agent and it's focused on just
[00:05:02] getting quality and just focused on
[00:05:04] getting out of the way that was nice
[00:05:06] like you never know how it's going to
[00:05:08] resonate really, but it's nice now
[00:05:11] seeing this feedback.
[00:05:13] >> Yeah, it was so fun to see all the
[00:05:15] feedback and still it's coming in. I
[00:05:17] think that it's really nice and
[00:05:19] validating to see that in this crazy
[00:05:21] busy space where it feels like everyone
[00:05:22] is building some code AI tool that
[00:05:26] >> there is space for one that tried to be
[00:05:29] radical and just focus on being the best
[00:05:31] with unconstrained tokens and no model
[00:05:33] selector and these
[00:05:35] >> radical things. I mean there's space
[00:05:37] there's always space for that.
[00:05:38] >> Yeah. Yeah. I don't want I don't I don't
[00:05:41] want to say we're thought leaders
[00:05:42] because if I do then there's like a
[00:05:44] bucket of slime, you know, that's going
[00:05:46] to crash down. But how maybe that's just
[00:05:48] me, but how outdated does it look now?
[00:05:51] This mod selector and like different
[00:05:54] modes and like just one more button and
[00:05:56] you can configure everything. I I I
[00:05:58] don't know if this is just me being used
[00:06:00] to amp now, but it just seems like that
[00:06:03] was before too. Like that was why would
[00:06:06] you let the user switch to an obviously
[00:06:09] worse model? Like why put Mini or you ha
[00:06:12] coup in there? Like well that doesn't
[00:06:14] make sense. Like sure you can create it
[00:06:15] but it seems like again like since we
[00:06:18] started recording the first episode even
[00:06:21] I think the world has changed even
[00:06:24] still.
[00:06:25] >> Yeah. Well, we know how much work it is
[00:06:28] to make a really great agenda coding
[00:06:30] tool and the other people, the other
[00:06:32] teams that are building these things.
[00:06:33] It's not like they have significantly
[00:06:35] bigger teams. It's hard to even do it
[00:06:37] for one model.
[00:06:39] >> And we had the benefit of being able to
[00:06:42] work with some of the new models that
[00:06:43] come out well before they're out. Takes
[00:06:45] a ton of work. And you know, we should
[00:06:47] also talk about our investigation at
[00:06:48] Gemini 2.5 Pro and why we ultimately
[00:06:51] decided, at least for now, to not move
[00:06:52] forward with it. But I can understand
[00:06:54] why a new model comes out and it like
[00:06:56] doesn't work well in some of these
[00:06:57] tools.
[00:06:59] >> Yeah,
[00:07:00] >> it is really hard to make it work. It
[00:07:02] takes a lot of thought, but it's so easy
[00:07:03] to get the vibes of, hey, we got a new
[00:07:06] model, you know, it's out there
[00:07:08] >> internal benchmark show.
[00:07:10] >> Yeah, exactly.
[00:07:11] >> Yeah. So, okay, let's talk about set 4
[00:07:14] then. Um, which still trips me up by the
[00:07:16] Let's start with this that they called
[00:07:18] it claw set 4 and not cla three, you
[00:07:22] know, claude 3 five sonnet. Oh, it's a
[00:07:26] weird thing. But um
[00:07:28] >> yeah, we switched to this last I think
[00:07:30] on Friday. Uh it came out last Thursday.
[00:07:34] On Friday, we switched to it. We didn't
[00:07:36] immediately switch once, you know, all
[00:07:39] the other 18 AI agent builders
[00:07:43] published. Yeah, we switch, you know,
[00:07:44] it's now available, but we also tried it
[00:07:46] out like for a bunch of weeks before and
[00:07:49] yeah, what do you think? Like what what
[00:07:51] are your impressions from Sonic 4?
[00:07:53] >> I think it's fantastic.
[00:07:55] So I do not have evals for my personal
[00:07:59] use just to be clear,
[00:08:01] >> but it does a much better job of doing a
[00:08:05] a full end toend feature in the AMP repo
[00:08:08] where we've got a server, we've got a
[00:08:09] client, we've got tests, we've got like
[00:08:11] a core kind of shared library package
[00:08:13] >> does a great job of that. And
[00:08:15] >> yeah,
[00:08:16] >> I really like don't have complaints. And
[00:08:19] I know that I'll find complaints as I
[00:08:20] start to get used to it, but it's doing
[00:08:23] so much better than previous models that
[00:08:26] >> I need to change how I work with it to
[00:08:28] find the limits.
[00:08:30] >> Yeah, that's I think the end to end
[00:08:33] feature thing like it can take on tasks
[00:08:35] of bigger complexity. That's the most
[00:08:38] striking thing for me as in the first
[00:08:40] time I used it, you you started to go,
[00:08:42] you know, be more aggressive and throw
[00:08:44] bigger things at it. And then I now
[00:08:46] realized after a week of heavy daily use
[00:08:50] that I adjusted my internal instinct of
[00:08:54] this is probably too big for the mall,
[00:08:56] you know, like let's cut the scope of
[00:08:58] this which we've developed over the last
[00:08:59] few months, right? where we we would
[00:09:02] tell users this is too big like Sonnet
[00:09:05] 37 just use smaller threads and whatnot
[00:09:08] and I still think that's valid advice
[00:09:09] you should use small threads but still
[00:09:12] like that the average task can now be
[00:09:15] it's hard to put into words but it can
[00:09:17] be more complex and it still gets it and
[00:09:20] and I'm surprised when I hear the ding
[00:09:22] sound and it
[00:09:24] >> is done and then I switch tabs and then
[00:09:27] I'll look what it did and I'm like you
[00:09:29] actually did it like you actually went
[00:09:31] all the way through the stack.
[00:09:34] >> Yeah. Yeah, good example.
[00:09:36] I asked it something really complex
[00:09:39] which can get into a second which is we
[00:09:42] have sub agents that are agents running
[00:09:44] in you know the agent can call a tool
[00:09:46] and that tool is surprise surprise
[00:09:48] another agent and what I wanted is a UI
[00:09:51] element to show the progress of this
[00:09:54] agent and I basically gave it a prompt
[00:09:57] and I said you know here's the component
[00:09:59] right now it only shows in progress or
[00:10:01] agent is working or something but here
[00:10:04] on the other end when the agent is
[00:10:05] working we can collect collect all the
[00:10:07] progress it's making and it's just to
[00:10:10] paint a picture here like it's not a
[00:10:12] it's not like an enum that says like
[00:10:15] cued in progress done sorry it's the
[00:10:19] agent is working and every time it goes
[00:10:21] into a loop it's it has a message and it
[00:10:23] has potentially tool uses and then those
[00:10:25] tool uses update so it's a it's a
[00:10:27] basically an array of big chunk of
[00:10:30] things like so it's an array of a
[00:10:31] message and possible tool uses and then
[00:10:33] the tool uses update because they go
[00:10:36] from Q to in progress to done. And it's
[00:10:39] a fairly complex thing. So, I did a bad
[00:10:41] job of just explaining it and I kind of
[00:10:43] sketched this out for Sonet 4 and then
[00:10:46] it went and did it. And it worked. Like
[00:10:48] it it worked. I think not on the first
[00:10:50] try, but it got like one little thing
[00:10:52] wrong, which is basically it it forgot
[00:10:54] to hook it up in the front component,
[00:10:56] which is also on me. Like, how would it
[00:10:58] know? But it was I was surprised like
[00:11:01] that's complex stuff and I could see
[00:11:04] >> the old Claude messing this up.
[00:11:08] >> Was nice.
[00:11:08] >> That's cool. And that's for the the task
[00:11:11] tool
[00:11:12] >> that you introduced.
[00:11:13] >> Exactly. Yeah. Yeah.
[00:11:14] >> Yeah. Well, that's another new thing
[00:11:16] that Cloud 4 seems a lot more eager to
[00:11:19] use. You want to talk about that?
[00:11:21] >> Yeah. So the again like that we have a
[00:11:25] task tool or sub agent tool and the idea
[00:11:29] is
[00:11:30] you know just like edit file list file
[00:11:32] whatever you give the agent a tool
[00:11:35] called task tool and you say this is an
[00:11:38] agent you can use to you know finish
[00:11:41] small tasks and it will return a result
[00:11:43] to you or it will do stuff for you and
[00:11:47] one we've had an agent for a long time
[00:11:49] in AMP which is our codebased search,
[00:11:51] which is just another LLM going through
[00:11:54] or an agent going through the codebase
[00:11:56] and finding results, but that's really
[00:11:57] specific. It's not generic for all the
[00:12:00] tasks. So, I think I added another sub
[00:12:04] agent a while ago, but Claude 37
[00:12:08] was not that eager to use it. But then
[00:12:11] with Sonnet 4, once you add the task
[00:12:14] thing, and I mean users reported this,
[00:12:17] we already have it. So, users reported
[00:12:18] this on Discord. Once you add the task
[00:12:20] sub agent, Sonet 4 is really happy to
[00:12:23] use it. Like it it the first example
[00:12:25] that blew my mind was I I tested it out
[00:12:28] and I said I use it in my blog repo
[00:12:31] because it's small and I said take all
[00:12:33] of the blog posts in here and remove
[00:12:35] from the YAML front matter the comments
[00:12:38] true thing because I don't have comments
[00:12:39] anymore. What it did was it did a rip uh
[00:12:43] I think rip grab or glob. So, it knew
[00:12:46] that there's like 36 blog posts and then
[00:12:49] it divided them up and spawned four
[00:12:51] different agents and told each agent you
[00:12:54] go and remove the comments thing from
[00:12:57] the blog posts and it went
[00:12:59] >> and it
[00:13:00] >> and was that using the batch one to do
[00:13:01] it in parallel too?
[00:13:03] >> No, no, no, no. It was it was just
[00:13:05] spawning four different ones because it
[00:13:07] can use parallel tool calls, right?
[00:13:08] Which is another thing. Clot 4 seems
[00:13:10] more eager to use parallel to calls. it
[00:13:12] seems faster than 37.
[00:13:16] So yeah, that's you know and now I'm
[00:13:18] working on the task or sub agent again
[00:13:21] to make it you know look better in the
[00:13:22] UI to give it more tools to kind of
[00:13:24] streamline the whole thing. And the
[00:13:28] other thing because I get this you know
[00:13:30] we get this question a lot like why use
[00:13:32] a sub agent? What's the advantage of a
[00:13:33] sub agent? And with the codebased search
[00:13:36] agent, it's not that apparent, I think.
[00:13:40] But
[00:13:42] what people have been bumping into
[00:13:44] everybody is you only have a limited
[00:13:46] context window, right? We have right now
[00:13:48] we have 168k
[00:13:51] output tokens because sorry input tokens
[00:13:53] and because we have 32k output tokens
[00:13:55] for claude and at some point you run
[00:13:58] into this limit and it's especially you
[00:14:01] know it's not nice when you run into
[00:14:03] this limit after the agent went off the
[00:14:06] rails and did something bad. You know
[00:14:07] like when it fails to edit a file 18
[00:14:09] times or when it creates a new test file
[00:14:11] and spends a bunch of tokens and
[00:14:13] whatnot. The funny thing is with these
[00:14:16] agents and claude 4 being much more
[00:14:19] eager to call agents is that well each
[00:14:23] sub agent has its own context window
[00:14:26] right so if you say hey sub agent take
[00:14:28] these eight blog posts and remove the
[00:14:31] yaml thing they get their that agent
[00:14:34] gets its own K tokens right and if it
[00:14:36] fails to edit that file sure it might
[00:14:40] fill up that context window but your
[00:14:42] main agent after that task is gone still
[00:14:44] has only what like 20% tokens used to
[00:14:47] something like it's not a lot and
[00:14:49] >> yeah and so the tasks complete faster
[00:14:51] because they're not saddled with all the
[00:14:53] context of your parent thread
[00:14:55] >> and if it goes off it and does the wrong
[00:14:57] thing the parent thread won't get
[00:14:59] confused
[00:15:00] >> yes
[00:15:00] >> and also yeah it can go so a lot of
[00:15:03] benefits to this
[00:15:05] >> okay
[00:15:07] >> the mental model is right like if you
[00:15:10] have to do something of complexity if
[00:15:11] you delegate to five other people you
[00:15:13] don't have to keep a lot of stuff in
[00:15:14] your head. You just have to know they
[00:15:17] will come back to me.
[00:15:18] >> Yeah.
[00:15:19] >> But Yeah.
[00:15:19] >> Yeah. And you don't want to know
[00:15:20] everything they did necessarily.
[00:15:22] >> Yeah.
[00:15:23] >> Yeah.
[00:15:23] >> All right. So, we're going to say,
[00:15:24] >> all right. I think there's a lot of
[00:15:26] people that are wondering like why why
[00:15:27] does Claude 4 support this? Is it
[00:15:30] because it's a smarter model and
[00:15:31] therefore it can do this? And I think
[00:15:33] this is a really important point that
[00:15:36] these models are trained well in
[00:15:37] advance. I don't know the exact time
[00:15:39] frame. The model houses don't release
[00:15:40] it. Yeah.
[00:15:41] >> And they were trained let's say 6 months
[00:15:43] or 9 months ago or something like that.
[00:15:46] And that at that time they surveyed the
[00:15:49] landscape. They looked at what people
[00:15:50] were doing internally and you know all
[00:15:52] across the world and they said how are
[00:15:54] people doing tool calling and what can
[00:15:56] we do to anticipate where they're going
[00:15:57] to be 6 to9 months from now. And they
[00:15:58] train the models to do well you know
[00:16:00] with that and there's post- training
[00:16:02] too. I'm sure that can be closer to
[00:16:04] time, but it's an intentional choice by
[00:16:06] the model creators to train these kinds
[00:16:09] of behaviors into the model. And
[00:16:12] absolutely there's emergent behavior,
[00:16:13] but no, I mean, this kind of stuff is
[00:16:14] intentional. And then, you know, this is
[00:16:18] when we talk about going with the grain
[00:16:19] of the model, trying to understand the
[00:16:21] model's capabilities, building deeply
[00:16:23] into a single model's capabilities
[00:16:25] instead of trying to support 17 models
[00:16:28] in a drop down. It's really important to
[00:16:30] get a feel for how the model was
[00:16:33] trained. What's it good at? What does it
[00:16:34] want to do?
[00:16:36] >> Yes.
[00:16:37] >> So, this is a perfect example of that.
[00:16:39] >> Yeah. I think there's what I'm starting
[00:16:41] to realize over the last, you know,
[00:16:43] we've had a bunch of releases since we
[00:16:45] recorded last episode. So, we had OpenAI
[00:16:49] come out with Codeex. Before that,
[00:16:51] Codeex the CLI, they now have Codex the
[00:16:54] model and they have Codeex the
[00:16:55] background agent and Google came out
[00:16:58] with Jules which is their background
[00:16:59] agent obviously Cloud Code new releases
[00:17:02] and Cloud 4 uh Sonnet 4 and Opus 4 and
[00:17:08] Gemini there's a new version of Gemini
[00:17:10] not sure but um
[00:17:13] I think what's emerging now compared to
[00:17:15] say a year ago a year ago it seems like
[00:17:17] they were all maybe not anthropic But
[00:17:20] the big goal was like to build a
[00:17:21] consumer LLM like a chatbot with which
[00:17:24] you can talk and retrie you know ask
[00:17:26] about stuff and whatnot. But now when it
[00:17:28] comes to coding I think
[00:17:31] there's different philosophies emerging
[00:17:33] in the models. And I think
[00:17:36] for example
[00:17:38] Gemini and even Open AAI it seems like
[00:17:42] they're going really after this. You
[00:17:44] tell the model, I want to build a to-do
[00:17:47] application in Swift and then it goes
[00:17:49] and oneshots it or zero shots it. I
[00:17:52] think in their mind
[00:17:56] the vision is it takes the fewest steps
[00:17:59] to go there and it takes a long long
[00:18:01] time or it can go for a long long time
[00:18:04] and build something and I think
[00:18:06] anthropic's vision is more that
[00:18:10] it react the the model reacts more to
[00:18:12] the environment if necessary as in the
[00:18:15] example I always use is I can now build
[00:18:17] you a bot or an agent sorry an agent
[00:18:20] that I can ask restart this EngineX
[00:18:22] server and claude will go and see like
[00:18:25] oh is EngineX running. It will run PS.
[00:18:27] It will try every binary location it
[00:18:29] knows of in its training data and it
[00:18:31] might even go and do PS and find running
[00:18:33] process and then find that binary
[00:18:35] location and whatnot. Like it it can
[00:18:38] wiggle itself out of these problems that
[00:18:42] it runs into. And it feels like Gemini
[00:18:44] 2.5 for example doesn't have it that
[00:18:46] much. like Gemini 2.5 when it runs into
[00:18:48] an error, it's like here we are like how
[00:18:52] about you do something and then I can go
[00:18:54] and do my job again. And it to me it
[00:18:57] just seems like there's different
[00:18:58] philosophies
[00:19:00] >> in these houses that you know what an
[00:19:03] agent should be. And I think Anthropic
[00:19:05] so far
[00:19:07] seems to be the most on the path of like
[00:19:10] this practical coding agent that can go
[00:19:13] and and figure stuff out and not just
[00:19:16] build apps, you know.
[00:19:17] >> Yeah. I don't understand why because
[00:19:20] that seems like it is strictly better to
[00:19:24] be able to get that kind of feedback
[00:19:25] from the environment to iterate. feels
[00:19:27] like that's better from a business model
[00:19:29] of I mean think of all the inference
[00:19:31] you're doing if you have a long tool
[00:19:32] calling thread
[00:19:34] >> going on
[00:19:35] >> and it also feels like a simpler model
[00:19:38] than some of the other kind of code
[00:19:40] execution on the inference server side
[00:19:43] you know kinds of setups we've seen so
[00:19:46] why do you think anthropic is pursuing a
[00:19:50] different path why do you think the
[00:19:51] others are not pursuing that same path
[00:19:53] >> I don't know I I I
[00:19:56] can only guess But I would say it's
[00:19:58] really hard to build stuff in a big team
[00:20:01] with a coherent vision and
[00:20:05] to take an idea and turn it into reality
[00:20:09] and an idea
[00:20:11] that's so in some sense it's really
[00:20:14] subtle like what's the difference
[00:20:15] between the agent philosophy of Gemini
[00:20:17] 2.5 bro and Claude right and taking that
[00:20:22] and making the whole org turned that
[00:20:24] idea into reality through data
[00:20:26] collection, through reinforcement
[00:20:29] learning, through evaluation of
[00:20:31] reinforcement learning, through testing
[00:20:33] this in production. I think that's
[00:20:34] really hard. And it seems like
[00:20:38] anthropic just might approach
[00:20:40] reinforcement learning in a different
[00:20:42] way than maybe Gemini. Like if I were to
[00:20:45] and I'm haven't done reinforcement
[00:20:47] learning but the way I understand it
[00:20:49] works is that you basically let a model
[00:20:52] do something in different ways and then
[00:20:55] depending on what it did you give it a
[00:20:57] reward and then you have it try again
[00:20:59] right so if you say create me a to-do
[00:21:01] list you have it go and do this five
[00:21:03] times and then whatever its first step
[00:21:05] is if it's a good step you give it a
[00:21:07] little bit of a reward you reinforce
[00:21:09] that and then it goes and does a
[00:21:10] different thing and so you guide it
[00:21:12] through
[00:21:13] And I think with
[00:21:15] if you want to zero shot an app, it's
[00:21:19] relatively easy to go from the end state
[00:21:22] like a fully formed to-do list app in
[00:21:24] Swift back, you know, to kind of go back
[00:21:27] to the start state and say, I want you
[00:21:29] first to create this file, then I want
[00:21:31] you to create this file, I want you to
[00:21:32] do this. Like just you take the end
[00:21:35] result, split it up, and then you give
[00:21:36] it rewards to get back to this. But if
[00:21:38] we're talking about run this terminal
[00:21:40] command, look at this output, it failed
[00:21:43] now based on this, try this other thing,
[00:21:45] like that's really hard to I think to
[00:21:48] train for or at least in my mind.
[00:21:51] >> Yeah,
[00:21:51] >> maybe completely off here, but it just
[00:21:53] seems like they have a different vision
[00:21:56] of what an agent should do and they
[00:21:58] managed to translate this vision into
[00:22:00] reality across multiple different things
[00:22:02] in their or
[00:22:03] >> Yeah. And the decision to go in this
[00:22:06] direction rather than others had to be
[00:22:07] made a while ago.
[00:22:09] >> Yes, that's
[00:22:10] >> you know it's kind of like with the flu
[00:22:11] vaccine they look at the strains and
[00:22:13] they have to guess and maybe someone
[00:22:15] guesses right.
[00:22:16] >> So there's a conundrum though which is
[00:22:18] when you look at some of these
[00:22:19] background agents that were released
[00:22:20] over the last like week and a half.
[00:22:22] >> You have jewels and codeex from Google
[00:22:25] and OpenAI respectively. both being very
[00:22:27] much let's run a full build environment
[00:22:30] that in open AI's case it doesn't have
[00:22:33] network access but it's a full build
[00:22:34] environment it can run shell commands
[00:22:36] arbitrarily it has the full power and
[00:22:38] then you have anthropics approach which
[00:22:40] is much lighter weight which primarily
[00:22:42] uses something like uh github actions or
[00:22:44] CI for feedback so if anything you see
[00:22:48] the two models that are that are not
[00:22:50] optimized not as good at uh arbitrary
[00:22:52] tool calling to get to the solution
[00:22:54] using a full background agent build
[00:22:55] environment and anthropic which is
[00:22:57] actually trying to just go for the more
[00:22:59] oneshot approach or the longer iteration
[00:23:01] cycles before they get feedback
[00:23:02] approach. So I think it's interesting
[00:23:04] that you see that inverted over there.
[00:23:06] >> Yeah. Let's talk about our ideas for
[00:23:08] background agents. I mean that's a good
[00:23:10] topic.
[00:23:11] >> Yeah. I love a topic when it feels wrong
[00:23:14] and it feels like you can tell people it
[00:23:16] and they argue and you can't really
[00:23:19] convince them about it. I think that's
[00:23:21] when it's something you really just want
[00:23:23] to build and try and and try it on. And
[00:23:25] if we can do it then it means that you
[00:23:28] know maybe we have I don't know some
[00:23:29] time advantage.
[00:23:31] >> Yeah.
[00:23:32] >> So yeah the idea is with background
[00:23:34] agent background agent it's the idea of
[00:23:37] okay I love using the agenta coding tool
[00:23:38] in my editor on the CLI but what if I'm
[00:23:41] at my kids soccer game and I want to do
[00:23:43] something for my phone there. You know
[00:23:45] that's the the general case is run in
[00:23:48] the back.
[00:23:49] >> In fact yeah for everybody listening
[00:23:50] that I'm at my kids soccer game. This
[00:23:52] has been said 50 times over the last
[00:23:55] five weeks, you know,
[00:23:57] >> yeah,
[00:23:57] >> why do you need a background agent when
[00:23:59] if I'm my kids talking and I want to
[00:24:01] keep coding? But it's a it's a valid
[00:24:03] it's a valid thing with agents.
[00:24:06] you started some work or you're outside
[00:24:08] and you know that you you just want to
[00:24:10] try out an idea or something and you
[00:24:12] know I'm doing this because I'm saying
[00:24:13] on my phone but
[00:24:15] the idea that you now have these things
[00:24:18] that can go and run for 10 15 minutes
[00:24:20] it's nice to be able to start this from
[00:24:22] anywhere right so that's the
[00:24:25] >> that's the whole idea
[00:24:26] >> yeah that's right and so there are a lot
[00:24:30] of different approaches I think Devon
[00:24:32] was one of the first to basically spin
[00:24:34] up a whole like VM M or container and
[00:24:37] that's similar to what Jules is doing
[00:24:38] what OpenAI is doing and this I think is
[00:24:42] very similar to the whole idea of cloud
[00:24:44] idees. Cloud IDEIDes
[00:24:47] >> are such a good idea. Who wouldn't want
[00:24:49] to be able to just, you know, spawn up
[00:24:51] something in their web browser, have a
[00:24:53] same build environment that they have on
[00:24:54] their local, you know, local desktop
[00:24:56] editor, make a change, not even touch
[00:24:59] their local state. It's so beautiful and
[00:25:01] clean. And yet there's basically maybe
[00:25:03] two companies in the world that have
[00:25:05] really gotten that right and that's Meta
[00:25:07] and Google. And they put in incredible
[00:25:09] investment into making a cloud IDE that
[00:25:12] works perfectly. And for everyone else,
[00:25:15] cloud ID adoption, it's so nent. I mean,
[00:25:18] even when you have VS Code where it is
[00:25:20] literally using web technologies and can
[00:25:22] run in the browser, it's the same
[00:25:24] experience. It's it's all the little
[00:25:26] longtail of things that just doesn't
[00:25:28] quite work as well. None of the
[00:25:29] extensions really work in that scenario.
[00:25:32] None of the language servers work. You
[00:25:33] know, all your little tools, they don't
[00:25:35] work. And things like GitHub code spaces
[00:25:38] and other really smart people I know
[00:25:40] have worked on cloud IDs and they've
[00:25:42] just not gotten that much adoption
[00:25:44] because it just never is good enough.
[00:25:46] It's really hard to maintain the CI
[00:25:50] environment, which you need to have,
[00:25:53] >> and the local dev environment and a
[00:25:55] cloud IDE environment. And the third one
[00:25:57] you just neglect. And you could disagree
[00:25:59] with me. You could say it shouldn't be
[00:26:00] that way, but it is that way.
[00:26:03] >> So I'm stating the facts.
[00:26:06] >> All right. So the hypothesis is that if
[00:26:09] you want background agents, then they
[00:26:12] should use CI for feedback
[00:26:15] for seeing if the test pass, if the
[00:26:17] llinter worked, if you know all these
[00:26:19] things are correct instead of having a
[00:26:23] build environment. And now it's not that
[00:26:24] a build environment is bad, but that is
[00:26:25] an optimization.
[00:26:28] >> And first build it to use CI. Build it
[00:26:30] for the whole class of problems for
[00:26:31] which CI is good enough. And another way
[00:26:33] to define that is build it for the whole
[00:26:34] class of problems where the model
[00:26:36] actually can get pretty damn far one
[00:26:39] shot at it. And it doesn't need a lot of
[00:26:42] inner kind of uh incremental make a
[00:26:45] little edit, get some feedback, make a
[00:26:46] little edit, get some feedback where it
[00:26:47] can go, you know, for a longer iteration
[00:26:49] cycle. There's a lot of problems that
[00:26:51] can be solved with that kind of agent.
[00:26:54] And then only when CI is too slow or not
[00:26:58] granular enough, then you look to
[00:27:00] optimize. And then you might want to
[00:27:02] bring in a build environment. Or you
[00:27:04] might want to just make your CI better
[00:27:06] at only running the subset of tests that
[00:27:07] need to be run given a change. And hey,
[00:27:09] by the way, if you do that, that's going
[00:27:10] to benefit human devs as well.
[00:27:13] >> Yeah.
[00:27:15] Yeah. So for everybody listening the
[00:27:18] distinction is that if you've used open
[00:27:21] air codeex for example when you set up
[00:27:24] you have to say I want to run codeex in
[00:27:27] this repository and then you get like
[00:27:30] it's a it's a page with forms and then
[00:27:33] you have to put in the environment
[00:27:34] variables you have to say in you know I
[00:27:38] don't know npm install bundle install go
[00:27:42] build whatever it is go mod tidy you
[00:27:44] have to set up the dependencies because
[00:27:46] then the goal is it boots up a VM and
[00:27:48] inside of that VM it has access to your
[00:27:50] build tools and if you've been listening
[00:27:53] to the other episodes we're big fans of
[00:27:54] giving these agents feedback. So, we
[00:27:56] really like, you know, giving the agent
[00:27:59] diagnostics or build feedback or having
[00:28:01] it be able to run build commands, but we
[00:28:04] think, well, this is what you just said,
[00:28:06] right? That
[00:28:08] setting this up in the cloud in a VM is
[00:28:11] really hard and it's might not be worth
[00:28:14] it as in we can just run this without
[00:28:17] access to the build tools and it can use
[00:28:18] CI as feedback, right? So, it pushes a
[00:28:20] commit, gets CI feedback and then
[00:28:24] continues iterating. So you only have to
[00:28:26] set it up once in CR which you've
[00:28:27] already most likely have. And the other
[00:28:31] thing to add here is that you know
[00:28:32] latency is not that big of an issue.
[00:28:34] Like the latency of it pushes a commit
[00:28:37] and it gets feedback from CI might not
[00:28:39] be a big issue because you you're doing
[00:28:42] stuff anyway, you know. And I would add
[00:28:44] to what you just said that
[00:28:47] for most of the use cases I have in mind
[00:28:49] where I want to kick off an agent and
[00:28:51] have it do stuff like I don't want to
[00:28:54] have it go and do stuff where I know
[00:28:57] that it will need a lot of compiler
[00:28:59] feedback because I know that then you're
[00:29:01] kind of going through this
[00:29:04] one app layer removed and you cannot
[00:29:06] really touch it which is the same with
[00:29:08] cloud IDs. would rather have it do stuff
[00:29:10] where I know it can just one shot do
[00:29:14] them, you know, like some crazy stuff
[00:29:16] where it doesn't maybe need the build
[00:29:17] environment.
[00:29:18] >> Yeah, that's right.
[00:29:20] >> It's a false promise for a background
[00:29:21] agent to be able to say, "Oh, you can do
[00:29:23] all the same things that it can do
[00:29:24] locally."
[00:29:26] >> Yeah.
[00:29:26] >> And it's a false promise because you
[00:29:28] don't have a background agent build
[00:29:29] environment that is accurately
[00:29:31] replicating your local dev environment.
[00:29:34] And if you're the tiny subset of
[00:29:35] companies that do, congratulations. If
[00:29:38] you, you know, just yesterday set up
[00:29:40] codecs or, you know, the cursor
[00:29:42] background agent works the same way. If
[00:29:43] you just set it up and it matches your
[00:29:44] your local dev environment today, well,
[00:29:46] just wait until someone changes
[00:29:47] tomorrow, you know, it's going to drift
[00:29:49] and think, you know, you're in a lot of
[00:29:51] pain there. But there's a lot of
[00:29:52] optimizations you can make. And this
[00:29:54] whole model of tool calling is really
[00:29:55] great because I think one of the most
[00:29:57] common ways that this is going to fail
[00:29:58] is like linting and formatting and
[00:30:00] whitespace, these dumb fixes. And we've
[00:30:03] observed that a lot of people are
[00:30:05] adapting how their code is structured to
[00:30:08] be able to work better with LLMs. So
[00:30:10] here's one optimization for example.
[00:30:12] Okay, you find that like the whites
[00:30:14] space and formatting is getting messed
[00:30:16] up. Well, just have it be able to run a
[00:30:20] tool that fixes the formatting and
[00:30:22] whitespace in a way that doesn't require
[00:30:24] arbitrary execution of like prettier
[00:30:26] plugins or you know Goof Fun is a great
[00:30:28] example where it's very standardized in
[00:30:29] the Go community and that's the kind of
[00:30:31] thing that can be run safely and you
[00:30:33] don't need a build environment. So if
[00:30:34] you kind of you know compromise on the
[00:30:37] configurability of some of these linting
[00:30:39] and formatting tools you can actually
[00:30:41] get a really long way. And by the way,
[00:30:43] you know,
[00:30:44] >> that's don't bike shed that. Just, you
[00:30:46] know, do whatever's
[00:30:47] >> those should be in service of moving
[00:30:49] fast, not in service of some
[00:30:51] idiosyncratic preference.
[00:30:52] >> Yeah. So
[00:30:54] that means you're working on background
[00:30:55] agents. We're working on background
[00:30:57] agents. We haven't made as much progress
[00:30:59] because being busy with everything else.
[00:31:01] Like there's so much stuff to build. I'm
[00:31:03] looking at my to-do list here, which is
[00:31:05] growing by the hour.
[00:31:07] >> And we love when people give feedback.
[00:31:09] So if you tell us about bugs or anything
[00:31:11] else, we will drop everything else to
[00:31:13] work on those bugs. So keep the feedback
[00:31:15] coming.
[00:31:16] >> Yes, keep the feedback coming. Keep
[00:31:18] sending in bugs. If you run into some,
[00:31:19] we love to hear about it and fix them.
[00:31:21] So yeah, let's wrap it up. One last
[00:31:23] thing I got to ask this. So Claude Sonet
[00:31:25] for amazing mall. It's awesome, but it
[00:31:28] uses a lot of emojis like in the
[00:31:30] summaries. What do you think about that
[00:31:32] as the last?
[00:31:34] >> Does it not bother you when it comes
[00:31:36] back? on my screen here I have I was
[00:31:38] doing something and yeah I was just
[00:31:40] looking at the summary and it's got some
[00:31:41] you know those green check mark emojis
[00:31:42] which is a little bit more professional
[00:31:46] >> and the summaries you know okay I'm
[00:31:49] still getting used to them it gives long
[00:31:51] summaries about what it did and we've
[00:31:53] tried prompting that out in the system
[00:31:54] prompt saying don't give summaries but
[00:31:56] you can't prompt that out that well
[00:31:58] >> like this is the idea of going with the
[00:32:00] grain of the model if the model's been
[00:32:01] trained to do that you're going to I
[00:32:03] don't know like waste a lot of its IQ in
[00:32:06] trying
[00:32:06] do something different.
[00:32:08] >> Yeah.
[00:32:10] >> But one thing that's really cool is I
[00:32:12] believe it was Camden on our team who
[00:32:14] realized that the summaries are actually
[00:32:15] a great place where it can do citations.
[00:32:18] So now the summaries in all the files
[00:32:19] and symbols they link they'll have
[00:32:21] little AMP underlined links and you can
[00:32:24] click on them and I've actually found
[00:32:26] that to be useful.
[00:32:28] >> Yeah.
[00:32:29] >> So lemonade out of lemons.
[00:32:31] >> Yeah. So yesterday, what was it like the
[00:32:33] the last thing I did yesterday evening
[00:32:35] was a story book thing and then it comes
[00:32:38] back with the summary, but now the
[00:32:39] clickable. So now I use this to kind of
[00:32:42] check on what it's doing and just click
[00:32:44] on that stuff. And I'll take some emojis
[00:32:47] for this, but yeah, it's we try to get
[00:32:49] the emojis out. There's stuff in the
[00:32:51] system to get the emojis out, but if you
[00:32:52] run into emojis, we tried our best.
[00:32:55] Yeah, maybe the summaries will help
[00:32:57] address some user feedback which is like
[00:32:58] I want a better kind of diff view or
[00:33:00] summary of what it did because that is a
[00:33:02] common
[00:33:03] >> piece of feedback. So that helps.
[00:33:05] >> Yeah,
[00:33:06] >> actually the thing you mentioned about
[00:33:08] story books, I think there's a little
[00:33:09] tip that I want to share that we found
[00:33:11] to be really useful in having the agent
[00:33:13] iterate. Of course, it's using the
[00:33:14] Playright MCP server which lets the
[00:33:16] agent take a screenshot of the browser
[00:33:18] and then iterate on that. So if you go
[00:33:20] in your settings tab in AMP, that's one
[00:33:21] of the recommended ones. works really
[00:33:24] well.
[00:33:26] Storybooks, you can use like the
[00:33:27] official storybook library, but we just
[00:33:29] have a pagetorybook. I think you can
[00:33:31] even go to amcco.com/storybook and
[00:33:33] you'll see it
[00:33:34] >> and it's just like, you know, just
[00:33:36] pages. It's not any kind of formal
[00:33:38] framework. Um, and then one other tip
[00:33:40] that people find really helpful is if
[00:33:42] your app has authentication and you want
[00:33:44] the agent to be able to browse your app
[00:33:46] and you don't want to have to like put
[00:33:47] in a password and go through OOTH,
[00:33:49] whatever, then what we do is there's an
[00:33:51] environment variable that we'll set.
[00:33:53] It's only activated in local dev that um
[00:33:56] essentially lets uh the agent bypass O
[00:33:58] and log in as a special user username
[00:34:00] off bypass. And this means that it can
[00:34:03] just open that up in a browser, no off
[00:34:04] needed, and it can navigate the whole
[00:34:06] app and see it. Yeah.
[00:34:07] >> So that's a really useful pattern that
[00:34:09] will document, but you got it here
[00:34:10] first.
[00:34:11] >> Yeah. And the other tip I would add to
[00:34:14] this is you can just ask the agent to
[00:34:17] create seed data in your dev
[00:34:19] environment. So I, you know, when I was
[00:34:21] testing out some things, I didn't have a
[00:34:23] lot of data in my database or for other
[00:34:25] users. I didn't have it in my local
[00:34:26] database. So it just told the agent,
[00:34:29] hey, here's Pupil, run this, look at
[00:34:31] this database, and give me some more
[00:34:33] data, like distribute it over other
[00:34:35] users. and it just goes and does it like
[00:34:37] it figures out the schema. It's if if
[00:34:41] somebody is good with SQL and you
[00:34:43] haven't tried giving the agent access to
[00:34:45] your database, you should try this. It's
[00:34:47] really nice like how it figures out the
[00:34:49] schema and then just write SQL queries
[00:34:51] and it returns results. It's really nice
[00:34:53] to see. It's really cool. All right, so
[00:34:55] we're ending with hot tip and hot tips.
[00:34:57] I think that's that's a good wrap-up,
[00:34:59] right?
[00:35:00] >> Yeah.
[00:35:00] >> Yeah.
[00:35:01] >> Happy hacking everyone.
[00:35:03] >> Happy hacking. Bye-bye.
