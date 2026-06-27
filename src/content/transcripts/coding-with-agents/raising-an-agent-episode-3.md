---
title: "Search Agent"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-3"
sourceUrl: "https://www.youtube.com/watch?v=N04FM1e3sbY"
videoId: "N04FM1e3sbY"
capturedAt: "2026-06-27T15:02:34.329Z"
series: "raising-an-agent"
episode: 3
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 2207
---

## Transcript

[00:00:00] The ideal scenario which every
[00:00:03] CEO, CIO, COO, who CTO would pay a lot
[00:00:07] of money for is that if somebody has a
[00:00:09] question like this, they can press a
[00:00:10] button and a ghost of a senior engineer
[00:00:13] appears and answers that question
[00:00:14] perfectly. Like they would pay a lot of
[00:00:16] money for this. So now we have these
[00:00:18] agents,
[00:00:19] >> not even perfectly. Senior engineers,
[00:00:21] they're not perfect.
[00:00:22] >> They're not perfect, right? But they
[00:00:23] would pay a lot of money. And now we
[00:00:25] have these agents that are still slow.
[00:00:26] They can still, you know, they don't
[00:00:28] know whether they're wrong or right,
[00:00:29] which, you know, let's leave the
[00:00:30] philosophical debate about the senior
[00:00:32] engineers aside, but what do you think?
[00:00:35] Like how, give me your thoughts on this.
[00:00:37] Like how does this relate to code
[00:00:38] search? How does it relate to search?
[00:00:40] Like what will change, what will not
[00:00:41] change?
[00:00:48] Software engineer here at Sourcecraft.
[00:00:50] And with me is Quinn, Sourcecraft CEO.
[00:00:52] Hi Quinn.
[00:00:53] >> Hey Thirsten. We've been writing a lot
[00:00:55] of code with this thing.
[00:00:57] >> Yes, a lot of code.
[00:00:59] It's been I don't know two weeks since
[00:01:01] the last episode and I think you wrote a
[00:01:03] lot of code on the on the server side.
[00:01:05] Um, basically I think that didn't exist
[00:01:07] when we recorded last episode.
[00:01:11] I was everywhere on the client side. I
[00:01:13] guess
[00:01:16] what do you think? Like what do you
[00:01:17] think after these thousands of lines of
[00:01:19] code?
[00:01:21] I'm hearing a lot of I feel like there's
[00:01:23] this culture war going on right now with
[00:01:25] the vibe coders versus the
[00:01:27] traditionalists or something and the
[00:01:29] traditionalists would say I'm skeptical
[00:01:32] of AI because you don't know what it's
[00:01:34] doing. You don't know what what the code
[00:01:36] it's writing and it kind of to steal man
[00:01:41] their argument it would be that it does
[00:01:45] something and it might work but do you
[00:01:47] truly understand the code as if you had
[00:01:49] written it yourself? Meaning when
[00:01:51] something goes wrong, do you know how to
[00:01:53] debug it or are there subtle bugs that
[00:01:56] slip in because you didn't write every
[00:01:58] line. So what's your impression?
[00:02:02] >> Well, a lot of things. First, I'm still
[00:02:04] processing this change has happened.
[00:02:06] I've been coding since I was like 8
[00:02:07] years old. I love coding. I think
[00:02:10] everyone knows I love coding. And in the
[00:02:13] last few weeks, this it's gone from
[00:02:15] having AI write like 40% of my code, but
[00:02:18] I'm still involved to AI being the first
[00:02:22] drafter and writing probably 85% or so
[00:02:26] of my code. And I have not yet processed
[00:02:29] that forever change to this hobby that
[00:02:31] I've had since I was a kid.
[00:02:33] >> Yeah.
[00:02:34] >> And I like it. It's so thrilling, but it
[00:02:36] is a huge change. It's like if you love
[00:02:39] doing playing soccer or football and
[00:02:43] then all of a sudden that sport has
[00:02:44] vanished off the planet. It's weird.
[00:02:46] >> Yeah.
[00:02:47] >> But with respect to that concern about,
[00:02:49] oh, I don't know what the code is doing.
[00:02:52] You know, you have a choice. You can
[00:02:54] take the AI's code as the first draft
[00:02:57] and go and figure out what it's doing.
[00:02:59] And I've been doing that a lot because
[00:03:01] on the server side as you mentioned
[00:03:02] there's a lot of off sensitive code and
[00:03:04] it deals with more moving pieces more
[00:03:06] APIs and when I find I'm doing other
[00:03:09] things this first draft is usually okay
[00:03:12] but you know that you know there's
[00:03:13] always that guy who whenever you write
[00:03:15] some code you push to the repo you know
[00:03:17] he goes and rewrites it. It's like
[00:03:18] that's probably not a good use of that
[00:03:20] time and people have done that with
[00:03:20] human stuff too. So you've always got
[00:03:22] this choice.
[00:03:23] >> Yeah I agree. I think the mental model
[00:03:26] that I came up with is and also to go
[00:03:30] back one step. Yes, I completely changed
[00:03:32] for me. I've become super lazy to write
[00:03:35] code. I have to change five lines in a
[00:03:37] file and I will ask the agent to do it
[00:03:39] because I'm lazy. And my whole like
[00:03:43] mental approach to programming has
[00:03:45] changed in that I don't see it as I
[00:03:49] modify the text in this file. It's more
[00:03:51] this I kind of guide and instruct this
[00:03:53] other thing and give it enough
[00:03:55] information so that it would do what I
[00:03:58] would do. And the mental model is, you
[00:04:01] know, paint by numbers. And that phrase
[00:04:04] has been thrown around a lot, but you
[00:04:06] know, paint by numbers, the way I know
[00:04:08] it is, you have a blank or picture with
[00:04:10] no colors, and there's little areas, and
[00:04:12] each area has a color. And what I think
[00:04:15] of with the agent is that it's my job as
[00:04:19] someone who knows what he's doing to
[00:04:22] kind of draw those lines and then
[00:04:25] instruct the agent to fill in that
[00:04:27] number. But I need to be sure what the
[00:04:31] lines are. recent example
[00:04:34] um I had it write like a little
[00:04:36] component front end component and I knew
[00:04:38] exactly it's gonna you know create a
[00:04:40] component one file in this thing to
[00:04:42] render this little piece and I know
[00:04:44] these are the lines and I watch it that
[00:04:46] it doesn't go out of the lines and as
[00:04:48] long as it's in there I don't really
[00:04:49] care about the code and then when I do
[00:04:52] something last week where I went through
[00:04:54] the whole stack to I think it was
[00:04:56] cancellation or retrying or something I
[00:04:58] go in and I take a look and I try to
[00:05:01] figure out what would be the lines that
[00:05:02] I draw in the sand for it to fill out
[00:05:04] and then I instruct it to fill it out.
[00:05:06] And
[00:05:08] that means like I
[00:05:10] before it does I I don't go in blind and
[00:05:12] say just do this. I try to think like
[00:05:15] okay what information does it need like
[00:05:16] what do I need to put in the context
[00:05:18] window? What is roughly the architecture
[00:05:20] of what I want it to do? And then I
[00:05:22] instructed to fill out the blanks. But
[00:05:24] >> I love that kind of metaphor. There's
[00:05:28] some people that would say, well, if
[00:05:31] you're going to do all that work, that's
[00:05:33] more work than actually writing the code
[00:05:34] or that means that it doesn't get it.
[00:05:37] >> Or there's some people who just struggle
[00:05:38] to understand how to give it the lines
[00:05:40] in which to paint and then they say,
[00:05:43] well, this doesn't work. What do you
[00:05:45] think is the disconnect from what you
[00:05:47] have realized and from the vast majority
[00:05:49] of the world out there that has not
[00:05:52] realized that?
[00:05:53] >> Yeah, that's a good question. I think
[00:05:54] there's a lot of variables to play into
[00:05:57] this. The big one is would I be really
[00:06:00] faster to write it myself
[00:06:02] than if the agent were to do it? And I
[00:06:06] think that's a a subtle question because
[00:06:10] you know right now we work in
[00:06:11] Typescript. I'm not a Typescript expert.
[00:06:13] I'm not an expert in swell. So there's a
[00:06:14] lot of stuff that even if I know what I
[00:06:17] would have to write but the import has
[00:06:20] to do this or you write a component like
[00:06:22] this or oh there's like a spelt head tag
[00:06:26] to put something in the header like this
[00:06:28] is all stuff that I would need to look
[00:06:29] up. It's not something that would block
[00:06:30] me. would just take time. And for that
[00:06:33] type of stuff,
[00:06:36] you know, it's faster if I instruct the
[00:06:38] agent to do it because either it has the
[00:06:40] documentation in a context window
[00:06:41] because I put it there and it can look
[00:06:43] it up faster than I can or it knows, you
[00:06:45] know, by what's in its weights basically
[00:06:48] what to do. But that being said, I do
[00:06:52] think there are circumstances where say
[00:06:55] you have like a a really large files or
[00:06:58] you know some complex architecture
[00:07:00] that's hard to express and there's like
[00:07:02] some context that it's hard to express
[00:07:04] where oh don't touch this part we want
[00:07:06] to migrate this don't touch it now this
[00:07:08] is all legacy stuff blah blah blah and
[00:07:10] then where sometimes you just know oh I
[00:07:12] need to change this one line to do
[00:07:14] something right and then it might be
[00:07:16] faster for me but I also think that
[00:07:19] disconnect is that it's
[00:07:22] >> actually even in that case the the funny
[00:07:24] thing is even if you're changing a
[00:07:25] single line and most of the time if
[00:07:27] you're working on a team that means you
[00:07:29] take a ticket off you assign it to
[00:07:32] yourself you go check out the branch you
[00:07:35] go stash you go rerun basil whatever you
[00:07:39] change that line you test it you wait
[00:07:41] for CI you write a commit message you
[00:07:45] write a pull request you wait for
[00:07:46] someone else to review that
[00:07:49] I actually when you stack all of that up
[00:07:52] telling an agent to go fix it.
[00:07:55] >> Yeah.
[00:07:55] >> And giving it that one sentence and it
[00:07:57] can do all that other stuff and it can
[00:07:58] wait for the testing to be all async. I
[00:08:00] mean actually that sounds pretty damn
[00:08:02] appealing.
[00:08:03] >> Yes, I agree.
[00:08:04] >> It's never just fixing one line. That's
[00:08:05] never the comparison.
[00:08:07] >> Yes, that's true. And I think it's
[00:08:09] people underestimate how much toil or
[00:08:11] you know like weird busy work you have
[00:08:14] to do something like it's not when is it
[00:08:16] ever oh I have like this one file where
[00:08:19] it's just I know all of the dependencies
[00:08:21] and nothing ever breaks and I can just
[00:08:23] write some code and I mean that would be
[00:08:26] the ideal scenario for an agent but
[00:08:28] still like in the reality I find there's
[00:08:31] a lot of weird stuff like to give you
[00:08:34] anam another example just today so I
[00:08:36] wrote up this whole blog post thing and
[00:08:39] it has like a lot of markdown blocks in
[00:08:42] it and it had like these markdown blocks
[00:08:43] that would show CLI output from another
[00:08:46] file as program. So just text output but
[00:08:49] what I wanted was that it looks like in
[00:08:52] the terminal like it has colors. So this
[00:08:55] is like six I don't know six what is it
[00:08:58] blocks and I knew exactly what to do.
[00:09:00] You write a component that takes input
[00:09:04] and you say this has this color and this
[00:09:05] has that color whatever. Then you change
[00:09:07] that other file and you take the
[00:09:09] markdown block and put it into this
[00:09:11] component and render it. And I just told
[00:09:12] the agent to do it and while it was
[00:09:15] doing it and I was watching and it would
[00:09:16] do it step by step like it would take
[00:09:18] these blocks out. I realized that
[00:09:21] oh my god like I'm super fast at Vim but
[00:09:23] still like this like oh copy this out
[00:09:26] then take this textbook format into an
[00:09:28] array of strings and do this and do that
[00:09:31] like yes I could have done it myself but
[00:09:34] I think you overestimate how much you
[00:09:36] know formatting and whatnot and stuff
[00:09:38] goes into it and when you can just watch
[00:09:40] an agent you switch into this different
[00:09:42] mind where you're not you're not
[00:09:45] thinking about the keys you're hitting
[00:09:48] oh you know like the commands you use in
[00:09:49] Vim, but you think about what's actually
[00:09:51] going on here. Like is this the right
[00:09:52] abstraction?
[00:09:54] >> Yeah.
[00:09:56] >> And I find it enjoyable. I find this
[00:09:58] it's fun. Like it's it's it's
[00:10:01] lighter. It feels like you don't have to
[00:10:04] rename files and then reload this and
[00:10:07] copy from this and oh now you
[00:10:09] deleted the thing that was in your
[00:10:10] clipboard and blah blah blah blah blah.
[00:10:12] All of that.
[00:10:13] >> Yeah.
[00:10:13] >> It's just okay, do this, go. And it does
[00:10:16] it. And it feels like you you have more
[00:10:19] I don't know like it's I don't think it
[00:10:22] in terms of you know and I think that's
[00:10:26] the problem like often people judge this
[00:10:28] on like oh will this replace programmers
[00:10:31] and I don't think even in that direction
[00:10:33] I think in terms of how does it augment
[00:10:36] me like it's a tool I want to use and it
[00:10:39] augments like it it makes me faster it
[00:10:42] lets me take longer strides basically.
[00:10:45] Yeah. And so, you know, another argument
[00:10:48] people might make is, well, maybe it
[00:10:49] makes you feel faster or maybe it makes
[00:10:51] you faster in the short term, but you're
[00:10:53] going to end up with an unmaintainable
[00:10:54] mess and you had no idea how it got
[00:10:56] there. And this is where I want to get
[00:11:00] your thoughts on the thread sharing
[00:11:02] because it actually feels like with that
[00:11:05] we are building up more context about
[00:11:07] why and what the intent was behind the
[00:11:10] code than if you were not using it. Do
[00:11:13] you want to give a bit some background
[00:11:14] on this? Yeah. So the background is
[00:11:17] again like I think two weeks ago, right?
[00:11:19] right before we recorded last episode or
[00:11:21] something. You added the server side
[00:11:24] component to this which means that on
[00:11:27] the client you can say you're in either
[00:11:29] in isolated mode which is you're on your
[00:11:31] own locally and you talk to anthropic
[00:11:33] directly or you're in connected mode
[00:11:35] which proxies your requests through us
[00:11:38] and then we store your conversations and
[00:11:41] you know all of the tool calls that you
[00:11:42] make on our server which means you can
[00:11:45] then in your UI say give me a URL for
[00:11:47] this conversation and you can share it
[00:11:49] with the rest of your team And the
[00:11:52] interesting bit I think what you're
[00:11:53] alluding to is that you can then see how
[00:11:56] something came to be like how a little
[00:11:59] piece of code came to be. And there were
[00:12:02] some huge surprises where you know
[00:12:04] somebody was saying this is the missing
[00:12:07] feature. I've been missing this the
[00:12:08] whole time. I I was saying it's really
[00:12:10] good for debugging but that's another
[00:12:12] thing. When you share this, you see how
[00:12:14] others prompt and you see how others
[00:12:17] like how they cut up problems like even
[00:12:20] what's the scope of one thread you know
[00:12:22] what's the what's the size of the
[00:12:23] problem they throw at the agent and then
[00:12:26] you see you know what are the constraint
[00:12:28] that person the human puts at you know
[00:12:31] towards the agent like no it should do
[00:12:32] this it should do this so
[00:12:34] >> yes like I agree I think it's super
[00:12:37] it's super valuable and this is also
[00:12:40] something you know that was talked a lot
[00:12:42] about at Z that you can only capture so
[00:12:44] much in git commit messages. It would be
[00:12:46] ideal if you could see how the code was
[00:12:48] written, you know, if you could see how
[00:12:49] it came to be and then I mean if we take
[00:12:53] I don't know five steps towards the
[00:12:55] future, can we make better tools by
[00:12:57] looking at our code and analyzing how
[00:12:59] the code came to be? Like is this
[00:13:00] another thing like if we store this in
[00:13:02] the future?
[00:13:04] >> Yeah. And you should have the prompts
[00:13:06] that were used stapled to the commit
[00:13:08] message and to the pull request and as
[00:13:10] context and all of the context that was
[00:13:13] used in the agent's workflow.
[00:13:16] >> Yeah.
[00:13:16] >> And in theory, you could imagine if you
[00:13:20] change one of the requirements, let's
[00:13:22] say some new security requirement or
[00:13:25] something like that, well, you should be
[00:13:26] able to see what is all the code that
[00:13:27] was generated downstream of that
[00:13:29] document
[00:13:30] >> and do we need to update it? And that
[00:13:33] that's really interesting. It's more
[00:13:35] data that you're bringing and it feels
[00:13:37] like you get this for free with thread
[00:13:39] sharing.
[00:13:40] >> Yeah. Yeah. It's just another it's a
[00:13:42] it's a Yeah. I don't know. I think
[00:13:44] there's 10 dimensions to this that are
[00:13:45] interesting, but this one that you can
[00:13:47] see how code came to be is really
[00:13:50] interesting and it's something that, you
[00:13:53] know, I don't know, thinking out loud
[00:13:55] here, but it feels like it it's it's
[00:13:57] hitting that same area that people try
[00:14:00] to solve with like stack diffs or
[00:14:02] something like this where it's oh, or
[00:14:05] even commits, you know, when I don't
[00:14:06] know if people still care that much
[00:14:08] about it, but it's this go and look
[00:14:11] through this PR commit by commit to see
[00:14:13] how how it came to be. And obviously,
[00:14:15] we're not there yet. Let's be honest,
[00:14:17] like a thread, it doesn't yet allow you
[00:14:19] to view it at this, you know, so people,
[00:14:22] you know, often careless and it's not
[00:14:24] that ordered as like a nice revised
[00:14:26] commit message, but I think it goes in
[00:14:28] the same direction at least, right? That
[00:14:31] that
[00:14:31] >> Yeah.
[00:14:32] >> Yeah.
[00:14:33] >> Do you remember coding before there was
[00:14:36] this idea that you should push up a work
[00:14:37] in progress pull request? I mean, do you
[00:14:39] remember coding in the subversion world
[00:14:41] or CVS?
[00:14:42] >> I've never done that. I was I was no VCS
[00:14:44] ever straight to git then like a decade
[00:14:46] without anything of that push FTP to
[00:14:49] production.
[00:14:50] >> Yeah.
[00:14:50] >> And then Git.
[00:14:52] >> Yeah. Well, even if you're not pushing
[00:14:54] up commits, this idea that you only see
[00:14:56] your team members work when it is
[00:14:59] completely ready for review.
[00:15:01] >> You don't have any way of seeing what's
[00:15:03] coming early. And it was a big
[00:15:04] transformation. And teams that go push
[00:15:06] up work in progress powest. You have all
[00:15:08] this serendipitous discovery that you
[00:15:10] don't get otherwise.
[00:15:12] And this feels like another level there.
[00:15:15] And then also the social proof. So going
[00:15:17] back to what we were talking about at
[00:15:18] the beginning about how there's some
[00:15:20] people that really smart people who want
[00:15:22] to get it and they just don't and they
[00:15:24] they've struggled to use these, they
[00:15:26] learn how to use it, but also sometimes
[00:15:28] it gets you over the hump and you
[00:15:30] realize, hey, this other really smart
[00:15:32] dev that I work with, they're able to be
[00:15:34] really successful with it. So there must
[00:15:35] be something here.
[00:15:36] >> Yeah. And that has, I think, helped it
[00:15:39] click in a few people that we work with
[00:15:41] minds to say, "Hey, like this person who
[00:15:44] I don't think of as some AI fanboy is
[00:15:46] really using it a lot and clicking."
[00:15:49] >> Yeah, I think that's true. And
[00:15:52] yeah, it's at this point it's I don't
[00:15:54] know just to come back to this
[00:15:56] discussion, it's just the code that we
[00:15:59] wrote is it's not slop. It's not bad.
[00:16:02] and we wrote I would say it's 80% I
[00:16:06] don't know like it's a high number of
[00:16:08] code that was written by AI and I mean
[00:16:12] I'm thinking back to your refactoring
[00:16:14] with like the threat work and whatnot
[00:16:16] it's this the architecture stuff is
[00:16:18] still I think a human thing but filling
[00:16:22] out the files itself or the components a
[00:16:25] lot of that is and isn't that argument
[00:16:27] like that isn't that an argument in
[00:16:29] itself like the thing that you're using
[00:16:31] was written by itself itself it
[00:16:33] apparently works you know and it's
[00:16:35] maintainable otherwise we wouldn't be
[00:16:37] shipping you know whatever 30 commits a
[00:16:39] day or so
[00:16:40] >> yeah
[00:16:42] let's talk about the feedback loops
[00:16:45] >> so you know we have this hypothesis that
[00:16:48] getting the agent into a feedback loop
[00:16:50] is the one of the most important things
[00:16:52] making it so that it can have really
[00:16:54] good tests to run it can run them fast
[00:16:56] it can run them in a granular way going
[00:16:58] beyond tests static analysis diagnostics
[00:17:00] looking at the browser trying out the
[00:17:02] app, deployment logs, all these things.
[00:17:05] And when you start a new app, it's a
[00:17:07] opportunity to reset your tooling to
[00:17:09] have simple tooling. And we have, you
[00:17:12] know, had the agent get into a lot of
[00:17:14] these loops with tests. And it can be
[00:17:15] great, but it still it doesn't know how
[00:17:17] to run the tests exactly. Sometimes
[00:17:19] it'll run all the tests in a sub
[00:17:20] project. Sometimes it'll struggle with
[00:17:22] the relative paths or, you know, PNPM
[00:17:25] quoting or things like that. So what
[00:17:28] have you found to work and what's your
[00:17:29] thoughts on how how do we get more
[00:17:31] feedback loops? Yeah, I
[00:17:34] so what we have is right we have our
[00:17:37] memory file and in it we say how to run
[00:17:40] certain tests and then just to describe
[00:17:43] the reality sometimes it gets it wrong
[00:17:45] and it it uses like some way to run
[00:17:47] tests that makes it block because it
[00:17:49] think the test runner thinks it's a TTY
[00:17:51] and then you have to tell it do this and
[00:17:53] do that ideally right it would always
[00:17:56] know what the best way to run like how
[00:17:58] to validate its work but it's often hard
[00:18:01] and even as a You don't know. And what I
[00:18:04] found what works is
[00:18:07] basically when I know that it will run
[00:18:09] into problems I tell it beforehand and I
[00:18:12] say after each little thing make sure
[00:18:14] you run this command and then it's the
[00:18:17] type checker or you know whatever
[00:18:18] llinter or something.
[00:18:21] I cannot even tell you when I know this
[00:18:23] will be useful, but it's
[00:18:26] I don't know if it touches multiple
[00:18:27] files and you over time you learn when
[00:18:30] it has like these blind spots where it's
[00:18:32] super confident in what it what it's
[00:18:33] doing and then I nudge it and say like
[00:18:35] no no no run you know get the
[00:18:37] diagnostics for the file do this but
[00:18:39] ideally
[00:18:41] you know you wouldn't have to do this
[00:18:42] ideally there would be something that
[00:18:45] thinking out loud but it's this ideally
[00:18:47] would be something that watches the
[00:18:48] agent and or something that can always
[00:18:52] give feedback to the agent and say what
[00:18:54] you just did led to this. Then obviously
[00:18:56] if you're in a large monor repo that
[00:18:59] means you're waiting four minutes for
[00:19:00] every edit which is also not feasible
[00:19:02] because the build is usually slow or
[00:19:04] something. And also on the other hand
[00:19:06] you often have better results when the
[00:19:07] agent decides to do something on its own
[00:19:09] or use knows how to use these tools. And
[00:19:12] that component, it's really tantalizing
[00:19:14] because it feels like a component that
[00:19:17] is just looking at what the agent did
[00:19:19] and then figuring out what is the fast
[00:19:21] test or build command that it can run.
[00:19:23] It feels like that could be a mostly
[00:19:24] deterministic component and it is not
[00:19:27] that hard to build. It also has one
[00:19:30] interesting dynamic in that it is some
[00:19:33] upfront work that is the kind of
[00:19:36] unseleelebrated work that often the dev
[00:19:39] tools teams that we love inside
[00:19:40] companies do. It's setting up the build,
[00:19:43] you fixing CI, but it's critical work.
[00:19:46] And for that reason, I think a lot of
[00:19:48] the AI coding to date has been done by,
[00:19:53] you know, an individuals, a small
[00:19:54] fraction of the devs on a team that get
[00:19:56] it and the rest don't and they haven't
[00:19:57] gotten the official kind of, you know,
[00:19:59] setup from their company and they've
[00:20:01] been working without these feedback
[00:20:03] loops. But it is not hard to say given
[00:20:05] these two files that change, what are
[00:20:07] all the tests that might need to run?
[00:20:08] And I'm not talking like
[00:20:10] >> it's not hard.
[00:20:13] Look,
[00:20:15] there's a world in which you're saying,
[00:20:17] "Give me the minimal set of tests that
[00:20:19] must run in like a Facebook size
[00:20:22] meta-ized monor repo." That that is
[00:20:24] hard. But what we're talking about is
[00:20:27] literally, you know, we've got a repo
[00:20:30] with seven PNPM sub projects and I make
[00:20:34] a change in the server directory. I
[00:20:36] should only run the test in server.
[00:20:38] >> Yeah.
[00:20:38] >> Like that is not hard. And that alone
[00:20:41] would be significantly better. And then
[00:20:43] the next step is like take a look at the
[00:20:46] test file that I changed and pass that
[00:20:48] to PNPM test. Oh, and make sure to strip
[00:20:51] off the server slash cuz we're passing
[00:20:54] the subdirectory to pnpm- big C. It's
[00:20:56] like little things like that
[00:20:58] >> that are not hard and we don't need to
[00:21:00] solve it in the general case. I'm not
[00:21:01] saying, hey, let's let's put down our
[00:21:03] pencils first and wait until the whole
[00:21:04] world has adopted per perfect baseline.
[00:21:07] You know, not saying that.
[00:21:09] Yeah, it's it
[00:21:12] yeah, I think there's some practical
[00:21:15] I mean the evidence is we have like this
[00:21:18] markdown file that says here's how you
[00:21:20] run the test and it goes pretty far with
[00:21:22] just this like you change something and
[00:21:24] then sometimes it realizes there's a
[00:21:27] test right next to it and then it on its
[00:21:29] own says like oh I need to make sure to
[00:21:31] run the test and it already figures out
[00:21:33] like based on this description of how to
[00:21:35] run stuff and these tests do this but
[00:21:37] yeah like I don't know I feel like
[00:21:38] there's like this 8020 thing where 80%
[00:21:41] is like easy maybe and then the last 20
[00:21:46] will be hard and the question is
[00:21:48] >> and you cannot like it is okay if it's
[00:21:50] 8020 when it's like drafting a whole new
[00:21:52] bunch of big code but if it's 8020 and
[00:21:55] getting into the feedback loop it needs
[00:21:56] to get into that every single change it
[00:21:59] needs to be really reliable and also
[00:22:01] we're just doing it for tests and then
[00:22:02] you get to browser use you get to static
[00:22:04] analysis you get you know there's so
[00:22:06] many other things I I think that this
[00:22:07] component needs needs to be better, way
[00:22:09] better than 8020.
[00:22:11] >> Okay. How you've been tweeting about
[00:22:13] this, I've been tweeting about it. How
[00:22:14] do you think
[00:22:16] do you think I mean I know the answer to
[00:22:18] this, but how do you think
[00:22:21] build systems and say the code base will
[00:22:23] change to accommodate for this?
[00:22:26] My hypothesis I'm saying I'm I'm sorry.
[00:22:28] I'm saying
[00:22:30] we will bend to the agents. We will not
[00:22:34] we will not make the agents I don't know
[00:22:37] basel whatever like we will change our
[00:22:39] codebase to make the work for the agents
[00:22:41] better.
[00:22:42] >> Yeah I think it's about incentives and I
[00:22:44] agree. What is the incentive right now
[00:22:46] to have a really good build system? I
[00:22:48] think you only see the perfect build
[00:22:51] system at Google and Meta. And anyone
[00:22:53] listening who's been at those companies
[00:22:54] would probably tell me all the things
[00:22:56] they didn't like about those systems,
[00:22:57] but it's an incredible amount of work
[00:22:59] because you're only benefiting the
[00:23:01] humans. And when you can benefit the
[00:23:04] agents and have something that if you
[00:23:06] have a good environment for them to code
[00:23:08] in, you can get millions of times output
[00:23:11] more than any single human. I think the
[00:23:13] fundamental incentive to make that
[00:23:14] environment really good is way larger.
[00:23:18] So I agree this is going to completely
[00:23:20] change the calculus there.
[00:23:22] >> Yeah.
[00:23:23] >> And as for what does that actually look
[00:23:25] like? I don't know because it is so
[00:23:29] early and people have not done the
[00:23:32] basics for the most part. The people you
[00:23:34] see talking about having you know stuff
[00:23:37] run tests it's coming from these
[00:23:38] markdown files in their repo. It's very
[00:23:40] inexact and you know we know so it's a
[00:23:44] lot of people that are seeing the very
[00:23:45] early promise but they're when they're
[00:23:47] tweeting they're probably not talking
[00:23:48] about all the times that it fails unlike
[00:23:50] us which we're trying to do.
[00:23:51] >> Yes.
[00:23:52] >> What do you think?
[00:23:53] >> Nothing more to add to this. I think
[00:23:54] it's it's I don't know. I don't have an
[00:23:56] answer. I think it's it's truly a step
[00:23:58] by step we'll get there and then in a
[00:24:00] year we'll look back and realize you
[00:24:02] know a lot has changed.
[00:24:04] >> Yeah. Well, one thing that will change
[00:24:06] in our repo that we're working in is
[00:24:09] okay, we can run tests. Also, the
[00:24:11] browser use. Browser works great when
[00:24:13] it's that storybook and the
[00:24:15] unauthenticated page because it can open
[00:24:17] that up. That's awesome. But for the
[00:24:19] whole server component, it always gets
[00:24:20] blocked at the authentication. So, one
[00:24:23] thing I did over the weekend was I
[00:24:25] pulled our users into our database
[00:24:27] rather than being on work OS. And that
[00:24:30] means that it's going to be a lot easier
[00:24:31] for us to have like here's the MCP
[00:24:35] server for Puppeteer and it can sign
[00:24:36] into the app in dev mode with special
[00:24:38] credential
[00:24:39] >> and then I think we'll be able to get a
[00:24:41] lot farther with that visual feedback in
[00:24:43] the server. So stay tuned.
[00:24:44] >> Yeah. Um I want to end with
[00:24:48] I have two controversial topics. I'm
[00:24:50] trying to think of which one we should
[00:24:52] talk about. Let's talk let's talk about
[00:24:53] code search. I think as background I
[00:24:57] when we talked in December or something
[00:24:59] I said that you know sourcecraft is not
[00:25:01] a code search company. I told I said
[00:25:02] this to you before I rejoined and I my
[00:25:06] hypothesis was and still is that nobody
[00:25:10] pays us to give them a search box. What
[00:25:13] they pay us for is the ability to make
[00:25:16] sense of their codebase or you know to
[00:25:18] answer questions about the codebase. And
[00:25:20] the the UI is just one way to do this.
[00:25:23] And that's that's the background. That's
[00:25:26] the background of my thinking. So now I
[00:25:29] built this in a single day. I built this
[00:25:31] search agent that our agent uses which
[00:25:33] basically has a bunch of tools available
[00:25:35] to it. And when you ask it a question
[00:25:37] and you say for example which I did like
[00:25:40] how how does authentication work when
[00:25:42] proxying requests to anthropic and then
[00:25:45] it goes and it does what a human would.
[00:25:47] It looks for like it does a keyword
[00:25:49] search for O. it it then you know what
[00:25:52] files look like they have plausible
[00:25:54] answers to this then it opens these
[00:25:55] files and it does globbing to find other
[00:25:57] related files it lists directories and
[00:25:59] all of this and out comes like a little
[00:26:02] >> it's an agent loop inside of that which
[00:26:04] I think is it's important to be clear
[00:26:06] about
[00:26:07] >> yeah yeah it's it's an it's an agent
[00:26:09] it's it's a loop right but it it's not
[00:26:11] there's no deterministic
[00:26:14] nothing it's it's truly the agent you
[00:26:16] give it a query you give it a prompt it
[00:26:18] has tools it goes off and finds stuff
[00:26:19] and then it comes comes back and has
[00:26:21] like this this report and it's I sat
[00:26:24] here thinking this is what this is what
[00:26:27] it's about like this is this is what
[00:26:29] people want it's sure it's still slow
[00:26:31] you know I'm saying this stuff will get
[00:26:34] faster and we'll get more efficient and
[00:26:35] we can still it basically if you have a
[00:26:38] question such as how do we authenticate
[00:26:40] requests the ideal scenario which every
[00:26:44] CEO CIO COO who CTO would pay a lot of
[00:26:48] money for is that If somebody has a
[00:26:50] question like this, they can press a
[00:26:52] button and a ghost of a senior engineer
[00:26:54] appears and answers that question
[00:26:56] perfectly. Like they would pay a lot of
[00:26:57] money for this. So now we have these
[00:26:59] agents,
[00:27:00] >> not even perfectly. Senior engineers are
[00:27:02] not perfect.
[00:27:03] >> They're not perfect, right? But they
[00:27:05] would pay a lot of money. And now we
[00:27:06] have these agents that are still slow.
[00:27:08] They can still, you know, they don't
[00:27:09] know whether they're wrong or right,
[00:27:10] which, you know, let's leave the
[00:27:12] philosophical debate about the senior
[00:27:13] engineers aside. But what do you think?
[00:27:16] Like how, give me your thoughts on this.
[00:27:18] How does this relate to code search? How
[00:27:20] does it relate to search? Like what will
[00:27:22] change? What will not change?
[00:27:23] >> I have seen people on the team who've
[00:27:26] been steeped in search for a long time
[00:27:30] be quite impressed by this and feel like
[00:27:33] it changes things. I certainly feel that
[00:27:35] way. And I think, you know, it's all
[00:27:38] about what what do you mean by code
[00:27:39] search? You mean by code search
[00:27:41] something that uses like postings lists
[00:27:43] to find terms and runs TF? Well, no. Oh,
[00:27:47] I mean we decided that's not what we
[00:27:48] meant by code search. Actually, our
[00:27:49] initial code search, it didn't even have
[00:27:50] an index. It would do a live search. And
[00:27:52] it turns out based on the need, you're
[00:27:55] not usually searching for the needle in
[00:27:56] the haststack in your codebase. You're
[00:27:57] usually searching for something that's
[00:27:59] fast to, you know, get the first 10
[00:28:00] results back. And then with embeddings
[00:28:03] now, a lot of people think that search
[00:28:05] needs to have embeddings. And if it
[00:28:06] doesn't, then it's not even. So search
[00:28:09] it's it it it is ultimately a tool that
[00:28:11] a human uses and the human is running
[00:28:14] this agentic loop of doing seven
[00:28:16] searches on source graph looking over
[00:28:17] here you know trying things and you know
[00:28:20] we're kind of upleveling search and what
[00:28:22] it means there and what I love about the
[00:28:24] code search agent that you built is it
[00:28:26] shows its work and it produces a report
[00:28:29] and it's something that you can you know
[00:28:31] get greater of confidence you see what
[00:28:33] it's doing you you can actually see what
[00:28:35] it comes back with usually it's correct
[00:28:37] correct and it's hard for it to be
[00:28:39] incorrect because I don't know if it's
[00:28:41] something you did but it doesn't really
[00:28:42] like take that many leaps. It's it's
[00:28:45] looked at so many source documents and I
[00:28:47] think it's pretty well grounded in them
[00:28:49] and it's clear that this is something
[00:28:51] that takes longer which is another
[00:28:53] constraint we have to relax for changing
[00:28:54] the definition of a code search but it
[00:28:57] is something that you once you see it
[00:29:00] you start to want it
[00:29:01] >> you know and a lot of the times that you
[00:29:03] yourself are doing that you know
[00:29:04] deterministic code search takes like 200
[00:29:06] milliseconds. Yeah, it's okay. I I have
[00:29:09] to ask this. It's nitty-gritty. It's
[00:29:10] details, but I find it so interesting
[00:29:12] because it comes up every day. Every day
[00:29:14] in our channel, this question comes up.
[00:29:15] It's um when you say it produces this
[00:29:19] little report, which is good, and it
[00:29:20] shows you what it did. Are you saying
[00:29:22] this as a developer of the tool or as
[00:29:24] the user? Like as a user, do you just
[00:29:27] want like the little magnifying glass
[00:29:29] thing and then says like I found some
[00:29:31] files or are you as a user interested in
[00:29:34] seeing what it did? because that's also
[00:29:37] different from you know search classic
[00:29:40] code search and I think it's also
[00:29:42] something that people now talk a lot
[00:29:44] about now with um all of the deep
[00:29:46] research stuff where like a model goes
[00:29:48] out and fetches stuff for you and has
[00:29:50] citations right and says like I found
[00:29:52] this on this website
[00:29:53] >> you know Dur we should just get rid of
[00:29:55] the UI just go make the code change you
[00:29:57] know let's just hide the code you know
[00:29:59] yeah actually we've got a lot of user
[00:30:00] feedback that's really interesting
[00:30:02] that's along the lines of hey I don't
[00:30:03] want to see everything that it's doing
[00:30:04] and We've been very wary. We We love
[00:30:08] that people say that, but we've been
[00:30:09] very wary because we do not want to set
[00:30:12] the wrong expectation that this is
[00:30:14] magic. And
[00:30:16] >> I think a lot of people might have some
[00:30:17] really good experiences with it and
[00:30:19] they'd say, "Oh, it's a lot of noise."
[00:30:21] But we need to be really, really honest
[00:30:24] about where it is and we feel that we do
[00:30:26] need to show it. So, I'm speaking as a
[00:30:28] developer there. I think a lot of users
[00:30:30] would say, "Don't even show me that
[00:30:31] stuff." But I think we need to. It's we
[00:30:33] know better than them. Yeah, I agree.
[00:30:37] So, yeah, I I I I don't know. It's an
[00:30:39] eternal struggle for me. I like all of
[00:30:41] the I like the logs. I like And you know
[00:30:43] how when your Linux machine boots up and
[00:30:45] it shows you all of that stuff and you
[00:30:47] don't know what that even is at most of
[00:30:49] the time where you're like, "Ah, it does
[00:30:50] something."
[00:30:52] >> Yeah,
[00:30:52] >> it's good to know. So, I often fall into
[00:30:55] that mode even though it's not good.
[00:30:57] >> Yeah. Oh, yeah.
[00:30:57] >> So, why did you make the search agent a
[00:31:00] kind of separate inner agent? Why not
[00:31:02] just expose the same tools to the top
[00:31:04] level agent?
[00:31:05] >> So the main I don't have an answer, you
[00:31:08] know, like I I built it I think last
[00:31:10] week. I don't know. And I ripped out the
[00:31:11] old thing 2 days later and I don't I
[00:31:13] can't say I validated this and it will
[00:31:15] stay like this for all eternity. But the
[00:31:19] thought process was that these things
[00:31:23] are fallible and they sometimes go off
[00:31:25] the rails and do not find good stuff.
[00:31:27] And when you don't have a sub agent, you
[00:31:30] only, you know, per agent you have one
[00:31:33] context window. So if you talk to your
[00:31:35] agent and it goes and it tries to find
[00:31:37] stuff for you, everything that it looks
[00:31:40] at, every file that it opens, every
[00:31:41] directory it lists ends up in the
[00:31:43] context window. And you know, related to
[00:31:46] do we hide abstractions or not, whatever
[00:31:48] you have in the context window outweighs
[00:31:51] a lot of other stuff that the model was
[00:31:53] trained on. Like the context window is
[00:31:55] sacred. So if you imagine imagine you
[00:32:00] ask it about database something
[00:32:02] something and it brings up say old
[00:32:05] migrations that are no longer relevant
[00:32:07] and it's 15 files with 500 lines each
[00:32:10] and even if it says old migration in the
[00:32:15] file name and it says ignore this in the
[00:32:17] file name. If you blast that content of
[00:32:20] those files in the context window, it
[00:32:22] will do something to to that context
[00:32:24] window and to the bias of the agent.
[00:32:26] It's it's you know also like a human
[00:32:28] like if if I put up you know 15 uh
[00:32:31] postit here that say don't think of an
[00:32:33] elephant you know guess what I'm going
[00:32:34] to do and yeah the goal
[00:32:36] >> I join a company all the senior devs are
[00:32:38] like hey you don't need this design
[00:32:39] document never look at this document but
[00:32:41] every time I walk by their computers
[00:32:43] they always have it up I'm going to say
[00:32:44] hey maybe there's there's something I'm
[00:32:45] going to get
[00:32:46] >> something to it yeah and so the idea
[00:32:48] with the sub agent is that it has its
[00:32:50] own context window and it only comes
[00:32:52] back with a reply so the the main agent
[00:32:54] says you know I instructed it to
[00:32:56] basically treat a sub agent as a
[00:32:59] researcher. So it h if it has like a
[00:33:01] semantic question such as how do we do
[00:33:03] authentication with fireworks or
[00:33:04] whatever which is not like a rip grab
[00:33:07] thing where it kind of knows in quotes
[00:33:09] that it will need more than a single rip
[00:33:11] grab. it asks the the agent, the search
[00:33:13] agent, and that has its own context
[00:33:15] window. So, it goes off the rail
[00:33:16] sometimes and comes back with the wrong
[00:33:18] thing, and then the other agent is not
[00:33:20] dirtied by it and can ask it again, and
[00:33:22] that gives you a new context window
[00:33:24] against
[00:33:26] it. I don't know, like I don't want to
[00:33:28] pat myself too much on the back. We
[00:33:29] should pat the model developers and
[00:33:31] Claude and whoever else on the back, but
[00:33:33] it works surprisingly well.
[00:33:36] It it's eerie how it asks questions like
[00:33:41] this morning it would ask I added
[00:33:44] markdown rendering to the swell thing
[00:33:46] and it oh yeah and and um I wanted the
[00:33:51] website the the page that I added I
[00:33:53] wanted a different content based on
[00:33:54] where the users logged in or out. didn't
[00:33:56] want the redirect thing and it searched
[00:33:58] it asked the agent like how do we handle
[00:34:01] authentication and user redirects in the
[00:34:04] server app like that's a question I
[00:34:07] would turn around and ask the engineer
[00:34:10] sitting next to me ask like how do we do
[00:34:12] this can you and then he would say oh
[00:34:14] look at this file guess what the search
[00:34:16] agent found it and said like it's
[00:34:17] handled here and here and then the main
[00:34:19] agent goes like oh if you want you know
[00:34:21] access to this information and you want
[00:34:23] no redirect you have to do this and this
[00:34:25] and
[00:34:26] And that's mind-blowing. Like,
[00:34:28] >> yeah,
[00:34:29] >> it I don't know. It's crazy to me.
[00:34:31] >> Yeah.
[00:34:31] >> Still,
[00:34:32] >> and there's two things that this touches
[00:34:34] on. One is we're really trying to figure
[00:34:36] out when do we know better than the
[00:34:38] model and when not. And in this case, we
[00:34:40] think we know better than the model and
[00:34:42] we give it this interloop. But you could
[00:34:44] almost say that we're letting the model
[00:34:46] pick which failed steps to omit from its
[00:34:49] own transcript. So
[00:34:51] >> yes,
[00:34:52] >> you know, we're we're not being too, oh,
[00:34:55] we know better than the model.
[00:34:56] >> And the second thing is what is the
[00:34:59] right kind of tool to expose? And you
[00:35:01] look at a lot of the MCP servers out
[00:35:02] there, like the GitHub one exposes like
[00:35:04] 20 different tools to the model that
[00:35:07] feel like at the wrong level of
[00:35:08] granularity.
[00:35:10] >> Yeah.
[00:35:11] >> You know, RIP Grep and a code search
[00:35:13] agent, those are two different levels. I
[00:35:14] think both are probably useful as tools,
[00:35:17] but we're trying to figure that out. And
[00:35:18] then when that gets back to feedback
[00:35:19] loops, do we want to be exposing a run
[00:35:22] terminal command where we have it
[00:35:23] constructed or do we want to give it a I
[00:35:26] don't know check my work command based
[00:35:28] on the previous transcript, you know,
[00:35:31] probably something in between and we're
[00:35:33] trying to figure that out.
[00:35:34] >> Yeah, it's I don't think more is better
[00:35:37] here. Like I with the these tools, I
[00:35:39] don't think you will end up with a good
[00:35:41] experience if you have a thousand tools
[00:35:42] available. It's it's it's I mean I I've
[00:35:46] been saying this in every episode we
[00:35:48] recorded 15 times, but would you as a
[00:35:51] human do well if I with every choice you
[00:35:53] make, I present you with a drop down of
[00:35:56] 50 different things you can do?
[00:35:59] Probably not, you know. And I think
[00:36:01] curated and tuned tools will I know
[00:36:05] that's my bet. I think a curated set of
[00:36:08] tools will lead to better success in the
[00:36:09] future and not
[00:36:10] >> Yeah,
[00:36:11] >> I don't know. I saw something the
[00:36:13] earlier today like another agent
[00:36:15] framework and they were like thousands
[00:36:17] of tools for your agent. I'm like, okay,
[00:36:20] sure, that's cool if you can enable
[00:36:21] them, but don't enable all of them by
[00:36:24] default. Like that I don't think that's
[00:36:25] a good idea. You know,
[00:36:27] >> why stop at a thousand? Give it a
[00:36:28] million.
[00:36:29] >> Give it all of them. Yeah. Generic tool
[00:36:31] to do everything.
[00:36:33] >> But yeah, exciting times, man.
[00:36:35] >> Yeah. Lot to do.
[00:36:37] >> Yeah. Yeah. This is so fun.
[00:36:40] >> All right, then. Let's wrap it up and
[00:36:42] then I'll see you all next week.
[00:36:44] >> Happy coding. Bye-bye.
