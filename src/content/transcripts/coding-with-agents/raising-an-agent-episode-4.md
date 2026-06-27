---
title: "Code Quality Shifts"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-4"
sourceUrl: "https://www.youtube.com/watch?v=2ITBH4dIfWY"
videoId: "2ITBH4dIfWY"
capturedAt: "2026-06-27T15:02:37.338Z"
series: "raising-an-agent"
episode: 4
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 2016
---

## Transcript

[00:00:00] you can have an AI generate,
[00:00:03] you know, a a a colorize function any
[00:00:06] day now, like any second in in less than
[00:00:08] a second, you know. Yeah. So,
[00:00:10] >> and all of Okay, actually, I won't go on
[00:00:12] that soap box, but I did have this um
[00:00:15] for a lot of cases, one that stands out
[00:00:17] to me is the the sonner component in uh
[00:00:19] AMP where when you like copy link to
[00:00:22] clipboard, it shows that little
[00:00:23] notification in the bottom right. That's
[00:00:25] called a sonner. Who knew? Yeah.
[00:00:27] >> And there was some uh libraries that did
[00:00:29] this and they were very complex. They
[00:00:31] didn't quite work with a version of
[00:00:32] speltkit we were using and they required
[00:00:34] like a different way of doing styling
[00:00:36] and that's what everyone was
[00:00:37] recommending.
[00:00:38] >> But turns out I mean AI just wrote one
[00:00:41] that was exactly what we needed very
[00:00:43] simple and that is way way simpler and
[00:00:47] better.
[00:00:54] Welcome to episode 4 of Raising an
[00:00:56] Agent, our little internal podcast, our
[00:00:59] diary of excitement between Quinn, CEO
[00:01:01] of Sourcecraft, and myself, Torstston,
[00:01:03] while we're building a new thing, a new
[00:01:06] agent here at Sourcecraft. Hi, Quinn.
[00:01:08] >> Hello. How's your coding been?
[00:01:11] >> It's been pretty good. I spent all day
[00:01:13] yesterday building a new thing. The
[00:01:16] ability to see
[00:01:17] >> I love it.
[00:01:18] >> Yeah. Yeah. You You used it. Yeah,
[00:01:21] Bayang and I then we had like a coding
[00:01:23] session. I did like a coding session in
[00:01:25] the afternoon with other people and then
[00:01:26] I kind of went and started to convince
[00:01:28] him of you know AI and whatnot. And then
[00:01:30] we had a session Bang and I and he said
[00:01:34] something at the end. He's like this is
[00:01:36] fun. This is not just pair programming.
[00:01:37] This is us the two of us watching
[00:01:39] another thing write the code and it's it
[00:01:42] gives you a fun chance to talk about
[00:01:44] stuff when you're both just waiting for
[00:01:45] it. And I joke that, you know, Gen Z
[00:01:48] doesn't have to have three videos
[00:01:50] running at the same time with this. They
[00:01:51] can watch the two of us talk and another
[00:01:53] thing writes code in the background.
[00:01:55] >> Yeah, watch out YouTube dev streamers.
[00:01:59] >> People just watch AI now.
[00:02:00] >> Yeah, just watch AI code in the
[00:02:02] background. How has your coding been?
[00:02:04] You've been working a lot on server side
[00:02:05] stuff and now you're back in client side
[00:02:07] land.
[00:02:09] >> Yeah, and I have made it so it's easier
[00:02:11] to share threads. I'm making it so that
[00:02:13] you can have one that's truly public so
[00:02:14] anyone on the web can see it which is
[00:02:16] yeah
[00:02:17] >> pretty cool so you can show off the cool
[00:02:19] stuff you do and I want to get more back
[00:02:22] into the client and having it treat
[00:02:24] feedback loops as a first class concept
[00:02:25] where it knows you know in this part of
[00:02:27] the codebase here are the tests that it
[00:02:28] needs to run here's how it gets to the
[00:02:30] browser and you can put that in the
[00:02:32] rules file and we do but the problem is
[00:02:34] the adherence is not 100% and you want
[00:02:38] that to be 100% but it you know it's
[00:02:41] tricky to get Right.
[00:02:42] >> Yeah. It's it's but it's I said this to
[00:02:45] be yesterday and and we said this on on
[00:02:47] previous episodes, right? That if you
[00:02:50] can really nail it down to a feedback
[00:02:52] loop and you know what it should do and
[00:02:54] then just can go off and and do stuff.
[00:02:59] Yeah. That once you have it, it's it's
[00:03:02] mind-blowing. It's it's really
[00:03:03] mind-blowing to see. I want to talk
[00:03:05] about a big topic and I think how do I
[00:03:07] start this? Um,
[00:03:10] maybe with the disclaimer, the
[00:03:12] disclaimer is that this is going to
[00:03:14] sound over-the-top fanatical maybe, I
[00:03:16] don't know. But I think if we look at
[00:03:20] the trend lines here, the trajectory of
[00:03:22] what's happening and how we've been
[00:03:24] using it, and I also think that, you
[00:03:27] know, we are maybe more risk tolerant
[00:03:31] right now or on the edge of using these
[00:03:33] tools, meaning we we have it write a lot
[00:03:35] of our code. Like others say, I still
[00:03:37] use the chat functionality and copy and
[00:03:39] paste stuff over. And I'm like, even if
[00:03:41] I can move the function myself, I'll
[00:03:43] have the agent do it. I, you know, I'm
[00:03:45] all in. And I think if I follow the
[00:03:49] trajectory of where this is going, a lot
[00:03:52] of stuff about software is going to
[00:03:53] change. Meaning code is going to get
[00:03:56] cheaper and how we treat code is going
[00:03:58] to change. it's not going to be as I
[00:04:01] don't know not this precious thing that
[00:04:04] we have to take care of because
[00:04:08] we all know that there's on one end of
[00:04:10] the spectrum there's this handwritten
[00:04:12] beautifully formatted
[00:04:14] you know touched by 10 people with lots
[00:04:17] of expertise
[00:04:19] file and on the other there's like the
[00:04:21] autogenerated
[00:04:23] you know 5,000 lines C file that nobody
[00:04:26] wants to look at because it's
[00:04:27] autogenerated And I think with AI
[00:04:31] a lot of stuff is going to move in that
[00:04:33] spectrum because it's not statically
[00:04:35] generated or you know deterministically
[00:04:37] generated but it is generated by an
[00:04:39] agent and maybe if you modify it too you
[00:04:41] go through an agent or an AI to modify
[00:04:43] it. So I think the value of code on
[00:04:46] average will change and I think that's
[00:04:49] going to have some dramatic consequences
[00:04:51] in near you know on longer term future
[00:04:53] and
[00:04:56] >> well we have to just train ourselves
[00:04:57] before we even think about where that's
[00:04:58] going to go. I've run into this a few
[00:05:01] times. So we added this new feature when
[00:05:03] the agent needs human input you know
[00:05:06] it's done or needs your confirmation it
[00:05:08] plays a sound. That is an awesome
[00:05:10] feature
[00:05:10] >> and that's the kind of thing where we're
[00:05:12] just going to make it the default
[00:05:13] because we need to just be opinionated
[00:05:15] here.
[00:05:16] >> And I went and looked at the code and it
[00:05:18] was littered with any types and it was
[00:05:21] jammed over in here. It was not in the
[00:05:23] right place.
[00:05:25] >> I had this moment of realization where
[00:05:28] why do we get worried about that? Why do
[00:05:30] we get worried about bad code? It's not
[00:05:32] just because oh you know this code is
[00:05:35] bad and could cause a bug. It's because
[00:05:36] we think there's some human that
[00:05:38] fundamentally misunderstands how the
[00:05:39] system works and they're going to go and
[00:05:41] make that mistake a ton of other times
[00:05:43] and they spent a lot of time doing that
[00:05:45] and so they had a lot of wasted time.
[00:05:47] >> But none of that is true. Now you you
[00:05:50] have the other worry that the agent is
[00:05:52] going to make a lot of mistakes and mess
[00:05:53] up the code and that's really valid. But
[00:05:56] >> in it's more like random with the agent
[00:05:58] whereas if human has a misunderstanding,
[00:06:00] you know, they're biased in that
[00:06:01] direction. They're always going to have
[00:06:02] that misunderstanding.
[00:06:03] >> Yeah. and it doesn't matter as much. And
[00:06:06] if I had actually known that this code
[00:06:09] was written by this quick prompt, it was
[00:06:12] a, you know, quick hack and he wanted to
[00:06:14] see how it worked and the feature ended
[00:06:16] up being awesome. That is such a big
[00:06:17] win. But I didn't know that and I had to
[00:06:19] kind of reset my initial reaction to
[00:06:22] which is like an any type. What the
[00:06:23] hell?
[00:06:24] >> Yeah. Yeah. Yeah. It's strange. It's I
[00:06:26] don't know yet how to formulate this,
[00:06:28] but it's I think I said this five times
[00:06:29] on here or I don't know. I say this five
[00:06:32] times in every two days, but a lot of
[00:06:37] the way I treated code in the past now
[00:06:40] seems black and white to me. Like I, you
[00:06:44] know, the brushes, every line and how
[00:06:46] it's formatted. It's just it's a
[00:06:48] different thing. It's similar to what
[00:06:49] you describe. I don't know exactly how
[00:06:51] to describe it but it's you look at the
[00:06:54] code in a different way and then it
[00:06:55] becomes I don't know easier to change or
[00:06:58] it becomes less bad if it's bad or
[00:07:00] something and I also don't you know it's
[00:07:04] not vibe coding it's not I don't care
[00:07:06] what the code looks like it's a
[00:07:07] different thing the level of abstraction
[00:07:09] is a different thing like
[00:07:11] >> yes you can worry about you know the
[00:07:13] function names or whether it's you know
[00:07:16] camel case or stuff like this and
[00:07:19] But
[00:07:21] I don't know. I feel like, you know,
[00:07:23] whether it's camel case or whatever
[00:07:25] else, kebab case, I don't know.
[00:07:27] It's right now with these tools, it
[00:07:30] doesn't matter that much. Like, it's
[00:07:31] just because you're on an other level of
[00:07:33] abstraction most of the time. And I
[00:07:35] think
[00:07:35] >> and if if the kind of, you know,
[00:07:37] weirdness, messiness, verbosity isn't a
[00:07:40] well- encapsulated part of the codebase.
[00:07:42] >> Yes.
[00:07:42] >> It's really valuable if you can get over
[00:07:44] yourself and say, you know what, that is
[00:07:47] okay. And the reality is today you're
[00:07:49] using open source code that's probably
[00:07:51] written in a totally shitty way. You
[00:07:52] pull it in transitively. You don't even
[00:07:54] know.
[00:07:55] >> So you've gotten used to that. And
[00:07:56] believe me, people took a while to get
[00:07:58] used to that, but people have gotten
[00:07:59] there.
[00:08:00] >> Yeah. But yeah, it's interesting. It's I
[00:08:03] don't know. It's going to change stuff.
[00:08:04] And I to go back to controversial
[00:08:06] statements. We said this in a different
[00:08:08] conversation. You said it and it kind of
[00:08:10] shocked me with how shocking it is and
[00:08:13] how obvious it is. But you said open
[00:08:16] source is going to lose value in some
[00:08:18] sense. And I I want to frame it before I
[00:08:20] want you to explain it. I I want to add
[00:08:23] something else to this which I keep
[00:08:25] coming back to which is Eric Meer
[00:08:26] saying,
[00:08:28] you know, why search for code? Like why
[00:08:31] find the perfect library if you can have
[00:08:34] something write it for you? And I said
[00:08:37] this yesterday to a colleague. Like I
[00:08:38] said, when you look up something or you
[00:08:42] use a library, what you the problem
[00:08:44] you're facing is you don't know how to
[00:08:46] write a certain piece of code or you you
[00:08:49] don't want to spend the time to write a
[00:08:50] certain piece of code. And with give say
[00:08:55] AI works perfect in generating code. Why
[00:08:57] would you go and pull in a library?
[00:08:59] >> Yeah.
[00:08:59] >> If you could have it generate for you.
[00:09:01] And yes, there are advantages to
[00:09:03] somebody else maintaining some piece of
[00:09:04] code that you use. But I think if this
[00:09:07] >> there's also disadvantages.
[00:09:09] >> There's disadvantages. And if this this
[00:09:12] option is now in the equation, I think
[00:09:14] it's going to change the outcome a
[00:09:15] little bit. It's it's why would I I mean
[00:09:18] to an extreme npm, right? You have like
[00:09:20] threeline
[00:09:22] of three function packages, right? As an
[00:09:25] extreme, right? Um for example, I
[00:09:28] remember this was years ago. I used like
[00:09:30] a little helper to use like asky
[00:09:32] characters to print stuff yellow and red
[00:09:35] and blue on the CLI and somebody
[00:09:37] commented on my PR saying you should use
[00:09:38] the library for this and it was truly
[00:09:40] like four functions you know
[00:09:42] >> I love it because ANI is literally like
[00:09:44] the standards institute and it's
[00:09:47] something that has not changed in 50
[00:09:48] years and will not change for another 50
[00:09:50] years.
[00:09:50] >> Yes. It's just because you don't like
[00:09:52] the escape characters in there, you
[00:09:54] think it should use light. But for this
[00:09:56] stuff, right, you can have an AI
[00:09:57] generate,
[00:10:00] you know, a a a colorize function any
[00:10:03] day now, like any second in in less than
[00:10:05] a second, you know. Yeah. So,
[00:10:07] >> and all of okay, actually I won't go
[00:10:09] into that soap box, but I did have this
[00:10:11] um for a lot of cases. One that stands
[00:10:13] out to me is the the sonner component in
[00:10:16] AMP where when you like copy link to
[00:10:19] clipboard, it shows that little
[00:10:20] notification in the bottom right. That's
[00:10:21] called a sonner. Who knew?
[00:10:23] >> Yeah.
[00:10:24] >> And there was some uh libraries that did
[00:10:26] this and they were very complex. They
[00:10:28] didn't quite work with the version of
[00:10:29] spelt kit we were using and they
[00:10:31] required like a different way of doing
[00:10:32] styling and that's what everyone was
[00:10:34] recommending. But turns out I mean AI
[00:10:37] just wrote one that was exactly what we
[00:10:39] needed very simple and that is way way
[00:10:43] simpler and better. So I didn't use a
[00:10:44] library in that case.
[00:10:46] >> Yeah. And I mean to extrapolate right we
[00:10:48] saw last week you know OpenAI launching
[00:10:51] new image generation and stuff. People
[00:10:53] using it to generate you know assets for
[00:10:56] games you know sprites and whatnot or
[00:10:58] like little icons or something. And
[00:11:02] yes it's right now not feasible. It's
[00:11:04] too expensive. if it's so blah blah blah
[00:11:06] blah blah but looking at the trajectory
[00:11:08] as an example here like what we have an
[00:11:11] icon library right and it's this oh we
[00:11:13] should use an icon library because we
[00:11:15] need like these five icons and
[00:11:17] whatsoever can you generate SVGs that
[00:11:20] easily in the future can you say you
[00:11:22] know here's like rough drawings generate
[00:11:24] these as icons and then give me a a icon
[00:11:27] library and that again diminishes the
[00:11:29] value of you know pulling in external
[00:11:32] dependencies because the the the value
[00:11:34] of I couldn't have written it myself or
[00:11:37] the value of it would have taken me too
[00:11:39] long to write it has decreased.
[00:11:41] >> Yeah. So,
[00:11:41] >> but so in that case I think that you
[00:11:44] want something more than just on the fly
[00:11:47] when the dev needs something generate
[00:11:48] the icon. You want consistency across
[00:11:51] icons. If two things are the same thing,
[00:11:53] you wanted to reuse the same icon
[00:11:56] >> and you wanted to fit in with the
[00:11:57] overall feel. So even that, you know,
[00:11:59] it's more than just, you know, oh yolo,
[00:12:01] it's so easy. you still want some kind
[00:12:04] of layer over it, which is interesting
[00:12:06] and that's a new thing that people don't
[00:12:07] yet have.
[00:12:08] >> Yes. I just think that a lot of dev
[00:12:11] tooling is about
[00:12:14] in an abstract sense, it's about
[00:12:16] generating code. It's about you could
[00:12:18] write this code yourself. You could type
[00:12:20] it all out, but instead you use a
[00:12:22] library or you use a function or you use
[00:12:24] some other assets or use something that
[00:12:26] somebody else has generated for you. Now
[00:12:30] with LLMs, we can generate code and I
[00:12:33] think that changes a lot of stuff. And I
[00:12:35] tweeted this yesterday and people didn't
[00:12:37] realize it was a joke or that I meant it
[00:12:39] in a fun way, but I said, you know, I
[00:12:41] saw five blog posts where people writing
[00:12:43] their own static site generator. And I
[00:12:45] said, when is the first static site
[00:12:46] generator going to come out that uses an
[00:12:48] LLM where you pass a markdown file to
[00:12:50] the LLM and say, turn this into HTML.
[00:12:53] And then someone was like, why would I
[00:12:55] do this? It's too slow. And I'm like,
[00:12:57] "Yeah, sure." But don't you see like all
[00:13:00] static site generators are built because
[00:13:03] we want to turn mark like we have a
[00:13:05] specific input format that we want to
[00:13:08] turn into a specific other format. We we
[00:13:11] put the restriction on ourselves to
[00:13:13] write in this format. So it can be
[00:13:15] turned in this other thing. But
[00:13:16] technically with an LLM as a site
[00:13:19] generator, you could write your blog
[00:13:21] post as a handwritten note and take a
[00:13:23] photo and put it in the repo. You could
[00:13:26] write your blog post as a paint exit,
[00:13:28] you know, bitmap drawing. You could
[00:13:31] write it as like a series of emojis and
[00:13:33] and or video and you could pass all of
[00:13:35] that to an LLM and have it generate your
[00:13:37] blog post for you because ultimately the
[00:13:39] goal is that you have an HTML file and
[00:13:43] now you can have arbitrary inputs. And
[00:13:46] it's in, you know, I I think it's funny
[00:13:48] and interesting because I think it
[00:13:50] changes how we think about computation.
[00:13:51] It's also why I didn't sleep. I I stayed
[00:13:53] up late thinking about this. But I think
[00:13:56] the same thing is the same effect will
[00:13:59] happen with software and it will happen
[00:14:00] with
[00:14:02] the value of software. And to zoom out
[00:14:05] historically before open source I mean
[00:14:07] most people can't imagine right but
[00:14:09] before open source like where did you
[00:14:10] get your code? You had to write your own
[00:14:12] libraries or you paid somebody else to
[00:14:13] do it. That why that's why open source
[00:14:15] was so revolutionary because suddenly
[00:14:17] you could pull all of that stuff
[00:14:19] together and build your app by tying
[00:14:21] other stuff together. Now with code
[00:14:24] becoming cheaper, how does the value of
[00:14:26] open source change, right? How does the
[00:14:28] value of code hosts change?
[00:14:30] >> Yeah, I mean it went from being very
[00:14:32] expensive to get new code written to,
[00:14:34] you know, for a lot of kinds of code to
[00:14:36] being free, but there's a search cost, a
[00:14:39] quality cost, and it's not infinitely
[00:14:41] comprehensive. And now you know you
[00:14:44] still have quality concerns as you do
[00:14:45] with open source and code that you
[00:14:47] write. The search cost and the variety
[00:14:50] search cost way lower the variety is way
[00:14:51] greater.
[00:14:52] >> So it's kind of like you know the next
[00:14:56] it's like what open source did to the
[00:14:57] previous world you know this doing to
[00:14:58] open source
[00:14:59] >> and so then it raises a lot of questions
[00:15:02] like
[00:15:04] >> you know where will all that energy go?
[00:15:06] Where will the developer reputation
[00:15:08] nexus be? What will happen to GitHub's
[00:15:11] kind of community and moat?
[00:15:14] >> Yeah.
[00:15:15] >> And the code repository.
[00:15:18] What needs to change if AI is generating
[00:15:21] the vast majority of the code in a repo?
[00:15:23] Do commits matter as much? What does
[00:15:24] matter? What do you want to know in
[00:15:26] terms of the transcript of, you know,
[00:15:28] why this was made?
[00:15:29] >> Yeah,
[00:15:30] >> I mean like I think I don't know
[00:15:33] speculation. I think that I mean it kind
[00:15:37] of already decreased, right? But I think
[00:15:38] the GitHub contribution chart and
[00:15:40] whatnot has been gamed a lot. But um it
[00:15:45] you know there was already the problem
[00:15:47] of cheap commits where people would push
[00:15:49] something every day and blah blah blah
[00:15:51] and wasn't high quality stuff and you
[00:15:54] know now
[00:15:56] you know with the push of a button I can
[00:15:58] generate new code every time I sit down
[00:16:01] and and and commit it and but that's not
[00:16:03] the real contribution. So that's already
[00:16:05] happening the devaluation. How do you
[00:16:07] know someone's a good developer?
[00:16:08] >> That's a good question. I think I mean
[00:16:11] coming back to what we talked about last
[00:16:12] time, I think there's still a lot of
[00:16:14] knowledge required to make it generate
[00:16:17] stuff. It's not it's not I mean
[00:16:19] obviously there's another school of
[00:16:21] thought where people think it's going to
[00:16:22] replace engineers, but I think you still
[00:16:25] need expertise and and experience in
[00:16:27] guiding these tools in, you know,
[00:16:29] generating code and whatnot.
[00:16:31] >> I don't know how that'll show up. I
[00:16:33] mean, interviewing is famously hard. We
[00:16:35] both know this.
[00:16:36] Yeah, it feels like you test the actual
[00:16:39] skill set will change, but there will
[00:16:40] always be some kind of skill set that
[00:16:45] can make an LLM's output much more
[00:16:48] valuable than if it was in the hands of
[00:16:50] someone without that skill set.
[00:16:51] >> Yeah. Yeah. Yeah.
[00:16:53] >> And whatever that skill set is, we're
[00:16:54] probably going to call that being a
[00:16:56] software engineer.
[00:16:57] >> That's true. I think I mean most people
[00:17:00] say right it's it's going to be more
[00:17:01] product focused people more
[00:17:04] you need to think about the product
[00:17:06] right you need to think about what it is
[00:17:08] that you're shipping because that
[00:17:09] becomes much more important
[00:17:11] >> I mean hasn't that always been important
[00:17:12] for devs
[00:17:14] >> I would say so but I do think that you
[00:17:16] know I mean I've had email interactions
[00:17:18] with lots of people saying I don't like
[00:17:21] AI because I like writing the code like
[00:17:23] I like I like the typing I like the
[00:17:26] lines I like I like how it's formatted.
[00:17:29] I like organizing stuff into modules.
[00:17:31] And I think that's well
[00:17:32] >> I like all those things, but I also like
[00:17:34] AI and I think you do too, right?
[00:17:35] >> I did. I did. But then it's like I also
[00:17:37] like being efficient and not wasting
[00:17:39] time. And then you you're like, okay, I
[00:17:43] can spend 5 minutes moving this from
[00:17:44] this file and seeing what that feels
[00:17:46] like or I can just not worry about it
[00:17:48] because I don't have to touch this
[00:17:49] again. And
[00:17:50] >> yeah,
[00:17:51] >> that changed a lot of stuff for me and
[00:17:53] it made me realize that I do love
[00:17:55] typing. I'm really good at typing. I can
[00:17:57] type really fast. I like I'm pretty good
[00:17:59] at writing code and but I also realize
[00:18:02] like the need to be efficient and to not
[00:18:04] waste time out trumps that. And
[00:18:07] >> yeah,
[00:18:08] >> you know, maybe other for others it
[00:18:09] doesn't and they think I still like
[00:18:11] writing every line.
[00:18:12] >> Yeah.
[00:18:13] >> But yeah, totally.
[00:18:14] >> I can't read fiction. I can't do puzzles
[00:18:17] because they feel like what's the point?
[00:18:18] I only read non-fiction. That's just who
[00:18:20] I am. And I'm, you know, it's weird. But
[00:18:22] yeah, I get I tried to play
[00:18:26] uh Grand Theft Auto 5 again like oh, you
[00:18:29] know, half a year ago to relax and I was
[00:18:32] >> I I realized I've I lost ability to do
[00:18:35] this. Like I'm in the video game and
[00:18:37] it's like go here and do this. I'm like
[00:18:39] I could solve actual tasks instead of
[00:18:43] instead of doing this. I'm like I want
[00:18:44] to write this. I want to do this. I want
[00:18:46] to do this. Why should I go to the shop?
[00:18:47] And it felt like not relaxing at all. It
[00:18:50] felt like I'm doing the thing.
[00:18:53] I don't know like it felt like a waste
[00:18:55] of time. I think that's what you mean
[00:18:56] with puzzle. Like it's an artificial
[00:18:57] puzzle.
[00:18:58] >> Yeah.
[00:18:58] >> Yeah. Exactly.
[00:19:00] >> So, what do you think happens to the
[00:19:02] code host in a world where, you know, a
[00:19:05] lot of people just go to it for code
[00:19:06] review? What if you're not doing code
[00:19:07] review or it's in a different way? What
[00:19:09] happens to the co-host?
[00:19:11] Yeah, I think
[00:19:13] in my vision I think the code host is
[00:19:16] not a place anymore in which you put to
[00:19:19] which you push committed static code. I
[00:19:23] think in my vision it's more a thing
[00:19:26] where you store your code that's and the
[00:19:29] agents and the prompts along it like it
[00:19:31] it's not oh the code is stored over here
[00:19:33] and it's edited over here. It's I think
[00:19:35] ultimately we move to a world where you
[00:19:38] know like I joked on SA you know 555
[00:19:40] call my code base and then you know you
[00:19:44] have something else edited and I mean
[00:19:46] obviously there's been a lot of dreams
[00:19:47] about this you know remote deaf
[00:19:49] environments and all of that stuff but I
[00:19:51] think something changed and I think
[00:19:55] when you start to you know you mentioned
[00:19:58] the audio feature you you you set the
[00:20:00] agent off you go do something else and
[00:20:02] then it you know gives you a ping sound
[00:20:04] and then it's like your code is ready
[00:20:05] and you check the code and when you do
[00:20:07] that a bunch of times you realize why
[00:20:09] should I check out the repo and do this
[00:20:11] myself like why why can't I have like an
[00:20:14] agent running next to my code and
[00:20:16] maintain it and I can send a message to
[00:20:17] the agent and say please update this I
[00:20:19] don't know I you could argue it's two
[00:20:21] different platforms and you could argue
[00:20:23] it's the same app with you know
[00:20:25] developer tooling or sorry with deaf
[00:20:28] environments but uh I don't know I just
[00:20:32] you know we built the thread sharing I I
[00:20:34] think that's going to play a bigger
[00:20:35] role. What do you think?
[00:20:37] >> Yeah, it feels like
[00:20:40] there's a bunch of different silos of
[00:20:43] information and action. You got your
[00:20:46] editor, but you want to be able to kick
[00:20:49] off the same kind of agent work from the
[00:20:52] web or from your phone. Like when you
[00:20:55] know that it
[00:20:56] >> Yeah.
[00:20:56] >> the class of of problems it can solve
[00:20:59] very reliably, then you want to do it
[00:21:01] from your phone. Like I've been out with
[00:21:03] the kids and someone says, "Oh, here's a
[00:21:05] bug and I want to just go fix it or
[00:21:06] something
[00:21:07] >> and it feels like such an artificial
[00:21:09] limitation that oh it works in my editor
[00:21:10] on my machine but not here and I know
[00:21:12] that I could do a fixed amount of work
[00:21:14] that's not hard
[00:21:15] >> to go make it so some remote dev
[00:21:17] environment could uh you know run it."
[00:21:20] And why haven't we done that yet? Why
[00:21:22] haven't remote dev environments taken
[00:21:23] off yet? I think it's an incentives
[00:21:25] problem because it never could have been
[00:21:27] your main development environment. So be
[00:21:28] a fraction of the human uh team using
[00:21:31] it. But now AI can use it. And we see a
[00:21:34] ton of people in our repo just in the
[00:21:36] commit message including a link to the
[00:21:38] thread that was the main one behind the
[00:21:39] commit. That kind of association should
[00:21:41] be done automatically. And they really
[00:21:43] should be one and the same. When you're
[00:21:45] reviewing that change, you want to just
[00:21:47] look at the thread. And so I just don't
[00:21:50] see a world where these are all
[00:21:52] separate. And then if I put myself in
[00:21:54] the shoes of GitHub, it is such a big
[00:21:57] change to do that. Can you imagine how
[00:22:01] controversial it would be? They already
[00:22:02] got so much flack by saying we're
[00:22:04] refounded based on AI.
[00:22:07] >> Yeah.
[00:22:08] >> Like, you know, first of all, props to
[00:22:09] them. Like, I love GitHub. They props to
[00:22:11] them for doing Cop-ilot, but it is such
[00:22:14] a hard change for them to make.
[00:22:16] >> Yeah. It's
[00:22:17] >> So, who's going to do it?
[00:22:19] >> It's every every
[00:22:22] I don't know like every developer is
[00:22:24] emotionally attached to this not
[00:22:26] changing. I think like as as long as
[00:22:28] they haven't found the way to look at
[00:22:30] this which gives them a sense of joy or
[00:22:33] you know I don't know some interest in
[00:22:35] this or I don't know fascination with it
[00:22:37] and I don't know nobody wants to admit
[00:22:40] it like it's it's I cannot believe that
[00:22:42] I'm even believing this because I'm I
[00:22:44] was so invested in writing code by hand
[00:22:46] and you know got code printed out on my
[00:22:48] wall here.
[00:22:49] >> You wrote books about how people can
[00:22:52] write code to write code.
[00:22:54] >> Yes. This is why I couldn't sleep last
[00:22:56] night. So, in my head, I was writing
[00:22:58] this blog post and guess what?
[00:23:01] The blog post is I don't know what the
[00:23:02] there's beauty in AI. That's a draft
[00:23:04] title I'm looking at, right? And um
[00:23:07] basically I in my head I stayed up
[00:23:10] because I was thinking of everything I
[00:23:13] would have to put in the disclaimer, you
[00:23:15] know, to not to not have people dismiss
[00:23:17] me immediately because this is the
[00:23:19] internet, right? So in my disclaimer, I
[00:23:21] would have said, you know, I probably if
[00:23:23] you're reading this, I probably have
[00:23:25] written more code than you. Like I'm top
[00:23:27] something% in amount of code written in
[00:23:29] my life and I've written books about
[00:23:31] code. I've written compilers. I've wrote
[00:23:33] I made more commits to my Vim RC than
[00:23:36] most of you reading this, you know, like
[00:23:37] I truly care about code. That's the
[00:23:40] whole disclaimer. And then I kept
[00:23:42] thinking, what else do I need to add to
[00:23:43] make people get it? That I'm not like an
[00:23:46] AI slob hype boy who thinks code is
[00:23:49] and just vibe code everything
[00:23:51] and blah blah blah. But I truly believe
[00:23:53] that there's a beautiful thing about how
[00:23:57] we can take these huge matrices and turn
[00:24:00] them into tracks text transformation
[00:24:02] engines where you think really high
[00:24:04] about input and what do you put in the
[00:24:06] context and how you navigate the latent
[00:24:08] space and then what do you get out of
[00:24:09] it. And once you've seen that happen and
[00:24:12] you work in developer tooling, you start
[00:24:15] to realize that most of developer
[00:24:17] tooling is about text transformation.
[00:24:19] And now we have like these huge orbs
[00:24:22] that can do magical things where you can
[00:24:24] put fuzzy stuff in and they can put out
[00:24:25] a code working code and it has to change
[00:24:29] stuff
[00:24:30] >> and
[00:24:32] yeah I forgot what my point was but this
[00:24:33] is the thing that I keep thinking
[00:24:35] >> so when you think about the disclaimer
[00:24:36] there's no disclaimer that can save off
[00:24:39] the boards from the internet but what
[00:24:41] have you found actually converts
[00:24:43] somebody from this cynic to starting to
[00:24:46] see that hey there's actually something
[00:24:47] here because you've done that to a lot
[00:24:49] of people
[00:24:49] >> yeah I I think
[00:24:52] what worked for me is just yesterday,
[00:24:54] right? I I showed a demo of Cerebras,
[00:24:57] which is, you know, Cerebras builds
[00:24:59] chips, GPUs. They're really fast. You
[00:25:01] can get thousands of tokens per second
[00:25:03] on small models, but I think they will
[00:25:05] get bigger models. And when most people
[00:25:07] think of AI, they think about, oh, I ask
[00:25:10] it something, then it takes a while and
[00:25:12] comes back and gh, it's wrong. Now I
[00:25:14] have to retry it. And then their mind
[00:25:15] goes to, I can write the code myself by
[00:25:18] hand now, and it's much faster. And I
[00:25:20] show them cerebras
[00:25:22] and how fast it can generate code. And
[00:25:24] it
[00:25:26] something clicks because they realize,
[00:25:28] oh, if the mods will be this fast in the
[00:25:31] future, like a thousand tokens per
[00:25:32] second or 2,000 or 3,000,
[00:25:35] that's going to change stuff because
[00:25:37] then suddenly, you know, it's not about
[00:25:40] waiting for something comes back and I
[00:25:42] can do it faster. No, it's it can now do
[00:25:44] it faster than you. And even if it's
[00:25:46] like, you know, if it's only 70% of the
[00:25:49] time correct, you can hit that retry
[00:25:51] button and it's still faster than you
[00:25:53] because then you can think, okay, I
[00:25:54] could have loops running that validate
[00:25:56] this against my language server and
[00:25:57] whatnot. And then it doesn't matter
[00:25:59] whether it's wrong on the first because
[00:26:01] it's still faster than what I could
[00:26:02] write. So that's one thing that
[00:26:03] convinces people or I think changes
[00:26:06] their view on things. And then the other
[00:26:08] thing is just
[00:26:09] >> and do you think that's because people
[00:26:10] have the intuition that you can have a a
[00:26:13] kind of rough or lossy objective
[00:26:14] function and if you're talking about
[00:26:16] iteration cycles in terms of like
[00:26:18] minutes because LMS are slow then the
[00:26:21] objective function you know there's no
[00:26:23] way that it's going to climb that that
[00:26:24] hill. But if you can like throw a
[00:26:26] thousand things or a million things
[00:26:27] against the wall like monkeys typing on
[00:26:29] a typewriter you think that's where the
[00:26:31] intuition comes from? Have you ever
[00:26:32] plumbed their mind?
[00:26:33] >> No, not in that sense. But I do think
[00:26:35] based on my own experience, I think it's
[00:26:37] this it felt like
[00:26:39] you cannot program these things and it
[00:26:43] felt like a coin toss every time like
[00:26:44] you would ask it and and it's like this
[00:26:47] is not why I came here to do programming
[00:26:49] for to toss coins and have unreliable
[00:26:52] stuff. But you know the other thing that
[00:26:56] I think changes a lot of perspectives is
[00:26:58] or changed mine certainly is
[00:27:01] first time I tried this was last year
[00:27:03] like half a year ago cursor tab which is
[00:27:06] what we have in Kodi now Kodi auto edits
[00:27:08] and and others have it now but I was
[00:27:11] editing a file and just trying this out
[00:27:13] and it would show tap to go here tap to
[00:27:15] go here tap to go here and I realized at
[00:27:17] that moment that I'm pretty good with
[00:27:19] Vim
[00:27:21] and these are not super smart AGI level
[00:27:24] suggestions, but they took away a lot of
[00:27:27] toil and they made my typing, you know,
[00:27:30] unimportant. Why worry about having
[00:27:32] Colemarmac to type some Vim macros
[00:27:34] faster when a small model can in, you
[00:27:37] know, 200 millise can say, you want to
[00:27:40] remove this line down here, hit tab and
[00:27:42] do it. You want to do this. And I think
[00:27:44] that is a
[00:27:46] change in how you frame this. Going
[00:27:48] from, oh, this big all- knowing oracle
[00:27:50] that asks questions about code to this
[00:27:52] mechanical helper that can type faster
[00:27:55] than I can and it can can see ahead and
[00:27:58] just takes away mechanical stuff and and
[00:28:00] toil and chores and
[00:28:02] >> yeah, so it's not magic. It's a
[00:28:03] mechanical helper that you can program
[00:28:05] that it's not deterministic in the way
[00:28:07] that we think about it. I mean, it is.
[00:28:09] >> Yeah. Yeah, you know, if you do the
[00:28:11] ordering of the float operations.
[00:28:13] >> Yeah.
[00:28:14] >> Yeah. You know, demystifying it. And I
[00:28:17] think that one of the things we want to
[00:28:18] do in this podcast and with the the, you
[00:28:20] know, AMP, which we're building, is we
[00:28:22] want to make the thing that is not
[00:28:24] claiming to be perfect, that's not
[00:28:26] claiming to one shot. We want to
[00:28:28] highlight when it doesn't work and what
[00:28:30] we do when it fails. And so you and
[00:28:33] Beyond have you've started recording
[00:28:34] these raw demos and we're gonna have a
[00:28:36] lot more which is not hey we do it 50
[00:28:39] times and we cherry pick the one where
[00:28:41] it works but actually it's really
[00:28:42] valuable to see when it doesn't work the
[00:28:45] first time. How can we nudge it?
[00:28:47] >> I was just doing that a bunch and it was
[00:28:48] doing some dumb on two of the files
[00:28:50] that it edited out of like 14.
[00:28:52] >> Yeah.
[00:28:53] >> And you know I had to nudge it.
[00:28:56] >> That's what I think people would benefit
[00:28:57] from seeing.
[00:28:58] >> Yes. I agree. I think it's it's a
[00:29:01] framing of you know it's a framing of
[00:29:05] expectations or how you set the
[00:29:07] expectations and I think people have
[00:29:09] been kind of misled or they there's like
[00:29:13] the overall hype about AI and and what
[00:29:16] it can do and you just ask it stuff and
[00:29:18] it comes back and I think that's due to
[00:29:20] the providers you know at least open
[00:29:23] perplexity or some I don't know not
[00:29:24] perplexity but there's a lot of hype and
[00:29:27] they I think they kind of mixed this
[00:29:29] with programming and I think a lot of
[00:29:32] that is the wrong way to look at it. You
[00:29:34] shouldn't look at it as oh I don't have
[00:29:36] to write any code anymore. You should
[00:29:38] look at it as
[00:29:40] this is like the text editor like this
[00:29:42] is a thing that I direct. This is an
[00:29:44] extension of me into which I put my
[00:29:47] knowledge and my you know requirements
[00:29:49] and then I I select the input or you
[00:29:52] still have to do it and you know in
[00:29:55] parenthesis here with the models getting
[00:29:57] better that will change the exact form
[00:30:00] will change but I I think this is the
[00:30:02] framing like it's an extension of you
[00:30:04] and you have to still direct it and
[00:30:06] guide it and it can often fail and
[00:30:09] yesterday I had it fail like for 2 hours
[00:30:12] I was trying some stuff And every time
[00:30:14] it failed, I realized I forgot to
[00:30:16] mention that it shouldn't do this. And
[00:30:18] then I went back up to the prompt and I
[00:30:20] started a new thing and I kind of
[00:30:21] refined my stuff. And I then sat there
[00:30:23] thinking, did I save time now? Did I did
[00:30:27] this make me faster? And what I the
[00:30:29] conclusion I came to was if I had not
[00:30:32] used AMP for this, I would have started
[00:30:34] writing code and then after five minutes
[00:30:37] go, oh, it's actually harder than I
[00:30:38] thought it would be. And then maybe I
[00:30:41] would procrastinate or try a different
[00:30:43] approach or update the ticket or let
[00:30:44] somebody know it's going to take two
[00:30:45] days instead of one or I would do
[00:30:47] something and after 20 minutes realize
[00:30:49] this is not going to work. So I first
[00:30:51] have to do this and you know you lose
[00:30:53] motivation and it happens to me a
[00:30:55] thousand times 2,000 times and with
[00:30:58] >> we've got a special responsibility as
[00:31:00] people building this tool and so many
[00:31:01] not every but so many of the times where
[00:31:03] it fails in a dumb way it's obvious to
[00:31:06] me that we could detect
[00:31:10] that kind of failure mode and come up
[00:31:13] with a protection. Now you run the risk
[00:31:14] of is it going to be whack-a-ole and if
[00:31:16] you layer all these on but in my case I
[00:31:18] was making it so you can share these
[00:31:19] threads without being authenticated and
[00:31:21] it completely clobbered a speltkit page
[00:31:24] and a server file
[00:31:26] >> and given the prompt that I gave it
[00:31:29] should know like a dumb LLM would know
[00:31:30] that under no circumstances should it
[00:31:32] clobber one of those files
[00:31:34] >> and so now it's on us how can we build
[00:31:37] that kind of like feedback loop or guard
[00:31:40] rail in
[00:31:42] >> and yeah it feels like that that is a
[00:31:44] valuable kind of component but like how
[00:31:47] do we make it so it's not just endless
[00:31:49] edge cases like that.
[00:31:50] >> Yeah, I agree. I think that's the big
[00:31:52] challenge. It's Yeah, it one last I I we
[00:31:56] can end like I think this is good thing
[00:31:58] to end it on because it's open-ended.
[00:32:00] But one last thing on this. Yesterday
[00:32:02] while it was failing to do stuff talking
[00:32:03] about guardrails, I um it just kind of
[00:32:07] like I I wrote this whole prompt and
[00:32:09] then it went off and did something and
[00:32:11] then I realized I included the wrong
[00:32:12] component in the prompt. Okay, my bad. I
[00:32:15] redid the prompt. Okay, I did this other
[00:32:18] thing and it just went off and like you
[00:32:21] know why? Why did it do this? And after
[00:32:23] the second time I realized it's because
[00:32:25] I had this other file open and it knew
[00:32:27] that I had this file open. So it thought
[00:32:30] surely you want me to look at this too
[00:32:32] and and and put this in this component
[00:32:35] and so for me it was this
[00:32:38] I closed all of the files and basically
[00:32:41] you know this is scar I basically said
[00:32:43] remove all of the distractions don't
[00:32:44] worry about what I'm doing over here
[00:32:46] just focus on these two files and I
[00:32:49] don't know how we solve this but I think
[00:32:51] this is you kind of want to give them
[00:32:54] like uh you know tunnel vision in some
[00:32:58] cases and say like you only focus on
[00:33:00] this and you only see this but you you
[00:33:04] don't want to take their peripheral
[00:33:05] vision away which often helps them. So
[00:33:10] I don't know big problem.
[00:33:12] >> Yeah big problem and whack-a-ole will
[00:33:14] not work. So, I'm very interested in
[00:33:17] what we can do with thread sharing and
[00:33:19] the ability to have more insights into
[00:33:22] where it failed than
[00:33:24] >> Yeah.
[00:33:25] >> I think other tools that do not have
[00:33:27] that.
[00:33:28] >> Yeah.
[00:33:30] >> Lot of work.
[00:33:30] >> Lots to do.
[00:33:32] >> Lots to do.
[00:33:32] >> All right then. Until next time. Byebye.
[00:33:35] Coden.
