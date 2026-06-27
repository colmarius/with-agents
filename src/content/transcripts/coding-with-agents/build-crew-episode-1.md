---
title: "Essential AI Agent Workflows: Context Management and Prompting Best Practices"
resourceId: 3
summarySlug: "coding-with-agents/build-crew-episode-1"
sourceUrl: "https://www.youtube.com/watch?v=PLtf26LtCcQ"
videoId: "PLtf26LtCcQ"
capturedAt: "2026-06-27T15:01:54.401Z"
series: "build-crew"
episode: 1
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3560
---

## Transcript

[00:00:02] I'll get the
[00:00:03] >> We are live everybody live from San
[00:00:06] Francisco and Germany and uh the East
[00:00:10] Coast and Jason wherever you live. I
[00:00:13] can't quite remember. So
[00:00:14] >> Texas.
[00:00:15] >> Texas. That's right. Um all right. Good
[00:00:18] to see everybody. Uh so today we'll wait
[00:00:21] for some folks to flow in. It's going to
[00:00:23] take a minute for everybody to to get in
[00:00:25] here. Um but we've got some big exciting
[00:00:28] news. We're launching uh something that
[00:00:30] we've been working on for a while. Um
[00:00:33] and uh it's called Build Crew and uh
[00:00:36] we're excited to show everybody today.
[00:00:38] So, first of all, just to get this kind
[00:00:41] of rolling, let's go around the room and
[00:00:42] introduce ourselves. Uh I'm Ryan,
[00:00:45] builder residence here at AMP. Um I I
[00:00:48] obviously like AMP a lot, which is why
[00:00:50] I'm here. Um Torstston, over to you.
[00:00:53] >> I am Torsten. Hi, I'm one of the
[00:00:54] engineers on the AMP team.
[00:00:57] Yes, you you're the main engineer, so I
[00:01:00] appreciate your your humility.
[00:01:04] Um, Jason, how about you? Give us a
[00:01:05] quick intro.
[00:01:06] >> I'm Jason Harris and I'm an engineer.
[00:01:10] Not the most important engineer on the
[00:01:12] team.
[00:01:13] >> I You're pretty important. So, I we
[00:01:15] appreciate you. And you're a musician.
[00:01:17] So, everybody Jason's gonna be mad I'm
[00:01:19] telling you this, but he's an amazing
[00:01:20] musician. So, love it. Justin, how about
[00:01:23] you?
[00:01:24] >> Hey y'all. I'm Justin. I work on the AMP
[00:01:27] team. Head of cheerleading is what I
[00:01:30] gave my title.
[00:01:32] >> Oh, I don't know. We can set our titles.
[00:01:33] Love it. Um Tyler, how about you?
[00:01:36] >> Hi, I'm Tyler with the bad audio and I'm
[00:01:38] an engineer on AMP.
[00:01:40] >> Yeah, Tyler and I had last minute
[00:01:42] failures and we're using our AirPods. Um
[00:01:44] Graham, how about you?
[00:01:46] >> I'm Graham. Uh my audio is amazing and
[00:01:48] so am I. I do Devril here at AMP.
[00:01:52] >> Love it. Love it. Okay, so I am going to
[00:01:55] show everybody um what we're launching
[00:01:57] today just to give you a quick idea. So
[00:02:00] this all came about because uh I
[00:02:03] tweeted, hey, we should have a community
[00:02:04] for people building with agents. Like
[00:02:06] it's kind of lonely and hard and
[00:02:08] everyone's learning how agents work.
[00:02:10] Well, you know, why don't we get people
[00:02:11] together and build a community? Um so
[00:02:13] the team thought that'd be really fun
[00:02:15] and we're launching it today. So I'm
[00:02:16] going to share my screen, show you uh a
[00:02:18] little bit what that looks like and
[00:02:20] obviously you can see on the screen if
[00:02:22] you go to buildcrew.te team and apply.
[00:02:24] Um, it's free. Um, and it should be
[00:02:26] really helpful. So, let's go ahead and
[00:02:29] share
[00:02:31] this.
[00:02:33] Okay. So, um, build crew. Uh, it's a
[00:02:36] community of devs shipping with agents.
[00:02:38] Um, if you happen to be using AMP, we
[00:02:40] give you 100 bucks. Um, it's really
[00:02:43] simple. Um, you basically come down
[00:02:45] here, create a free account, you connect
[00:02:48] to GitHub, and then we will um go ahead
[00:02:51] and let you join the community and throw
[00:02:55] 100 bucks in your account and go from
[00:02:56] there. Um, there's also a leaderboard
[00:02:58] and and a Twitter DM group. So, let me
[00:03:01] just show you the way the leaderboard
[00:03:02] works. It's already getting pretty
[00:03:04] exciting in here.
[00:03:08] So, um, we've got, uh, you can go back
[00:03:12] one week or all time. Um, we've got
[00:03:14] Mike, uh, crushing it as diff maxer. Um,
[00:03:18] Justin, you're you're up here for all
[00:03:21] time. Um, 1,800 threads. Um,
[00:03:25] >> keep them small. I listen to Thorston.
[00:03:28] >> Okay. Keep them small. I like it. Um,
[00:03:32] and then what we've got as well, uh, in
[00:03:34] addition to the leaderboard, let me go
[00:03:36] ahead and share, uh,
[00:03:39] the the profile. So, bear with me for a
[00:03:42] second. Then then we're going to get
[00:03:43] into actually showing um
[00:03:46] what what is working with prompts right
[00:03:48] now. How should you talk to agents? So,
[00:03:50] this is uh the profile you get when you
[00:03:52] join build crew. Um, you've got your uh
[00:03:55] the messages you've sent the threads and
[00:03:57] then you've got badges u message master
[00:04:01] uh thread builder. Um this is fun. This
[00:04:03] is the de delegator when you uh spin up
[00:04:06] a sub agent. Um all sorts of fun stuff.
[00:04:10] So uh thought you'd enjoy some badges as
[00:04:13] well. Okay, so that's build crew. Um
[00:04:17] everybody is welcome. It's free. So hop
[00:04:19] on to billcrew.team
[00:04:21] and apply. we'd love to welcome you in.
[00:04:23] We also have a Twitter DM group as well,
[00:04:24] which is fun, where you can chat to each
[00:04:26] other. So, um, now
[00:04:29] what we want to do today is show you
[00:04:31] actually what's working with agents and
[00:04:33] and how we're uh like how we're
[00:04:36] prompting and what's working and and and
[00:04:38] some behind the scenes stuff. So,
[00:04:40] Torson's going to share a thread first
[00:04:42] and kind of talk through um what's
[00:04:44] working,
[00:04:46] how does it work. So, Torston, over to
[00:04:48] you.
[00:04:49] >> I want to just do it. I want to point
[00:04:51] out how unfair it is that Thorston goes
[00:04:52] first and we all we all all of our
[00:04:55] threads have to go afterwards.
[00:04:59] >> Let's see if absolutely first.
[00:05:02] >> This is this is going to take a while.
[00:05:04] Um let me see. So let me move this stuff
[00:05:08] over here. Cool. Sharing my screen in
[00:05:12] one second.
[00:05:14] Switching the tab like a pro. You can
[00:05:17] see this, right? or somebody needs to
[00:05:19] put me on the screen, I think.
[00:05:21] >> No, see you now.
[00:05:23] >> Okay. Um,
[00:05:26] let's actually start with the
[00:05:28] masterpiece here. Um, this was seven
[00:05:33] days ago. You can see implement.
[00:05:36] >> Why don't you tell everybody what like
[00:05:37] what is a thread and like
[00:05:39] >> Okay. Okay. Yeah. So um so a thread is
[00:05:43] in AMP words it's a it's a conversation
[00:05:47] between you and the model or the
[00:05:50] assistant or whatever you want to call
[00:05:52] it. I I don't think you know
[00:05:54] anthropomorphicizing helps a lot with
[00:05:56] this type of stuff but um it's basically
[00:05:59] you know conversation that you know from
[00:06:00] chatbt or claude or whatever. Um the
[00:06:03] concept is the same but we call it a
[00:06:04] thread. Um, and so yeah, this is this is
[00:06:09] one maybe let's start let's start with
[00:06:12] this simple one. Let's start with this.
[00:06:13] So this was two hours ago. Um, and I
[00:06:17] noticed that my CLI, the AMP CLI that
[00:06:20] you can use to create threads and you
[00:06:22] know use AMP was slow to start up and I
[00:06:27] was I don't know what it was two hours
[00:06:29] ago. I don't know. But I was like, "Wait
[00:06:31] a second. Before I go over to my wife in
[00:06:33] the kitchen, let me kick off this."
[00:06:35] >> Yeah.
[00:06:35] >> And I collected all of the, you know,
[00:06:38] information that I had, you know, I
[00:06:40] basically said like this is the problem.
[00:06:42] Let's help me investigate what my two
[00:06:44] is. So, um, I also created like a tiny
[00:06:46] tiny script in which I would start the
[00:06:49] CLI with like the right end set. So the
[00:06:52] key my API key doesn't show up in this
[00:06:56] >> um you know advanced techniques here
[00:06:58] like don't put API keys in in these
[00:07:00] conversations and then I said the
[00:07:02] problem is it takes 1 second and I found
[00:07:04] this in the logs and um you know
[00:07:07] starting AMCLI like you know 18 minutes
[00:07:10] and 8 seconds and then basically it was
[00:07:12] ready at 9 seconds so like took a second
[00:07:14] for the TUI to show up. Um it's roughly
[00:07:17] a second why what takes so long in
[00:07:20] between I want to figure it out. uh why
[00:07:22] then this stuff here where the log says
[00:07:25] are this is like a snippet that I have
[00:07:28] like a pre-made prompt where you can
[00:07:29] tell it to use t-mox and then I said
[00:07:32] here's what I want you to do like first
[00:07:34] start this check the logs then add more
[00:07:37] logging and retry until you know what
[00:07:39] causes the one second you know
[00:07:42] >> can you tell everybody a little bit more
[00:07:43] about the script that you made because I
[00:07:45] think this is a pretty interesting
[00:07:48] >> useful but it it feels advanced but
[00:07:50] actually it's useful and basic walk
[00:07:53] through that.
[00:07:54] >> So basically um
[00:07:57] I don't know in all of software
[00:07:59] development like when you talk about
[00:08:01] bugs or you talk about features or
[00:08:03] whatever you want a simple way
[00:08:07] to reproduce it. Like if somebody says
[00:08:09] here's a bug but I cannot reproduce it.
[00:08:12] That's really really that's a shitty
[00:08:13] situation to be in. If somebody says,
[00:08:15] "Here's a bug and here are the seven
[00:08:17] steps you can do to reliably reproduce
[00:08:20] it every time." That's it's not the best
[00:08:23] situation to be in, but it's a good
[00:08:24] position to be in. And turns out that
[00:08:28] agents or models when they get feedback
[00:08:30] about the work that they're doing. So if
[00:08:32] they, you know, write code or they um
[00:08:36] edit files or they run commands, if you
[00:08:38] tell them whether it worked or not, they
[00:08:40] can do a much better job. So what we've
[00:08:43] done for the past two years is you open
[00:08:45] chat GPT you say write me a SQL query to
[00:08:48] do this then you run the SQL query and
[00:08:50] then it fails and then you go back to
[00:08:51] chat GPT and you say it didn't work
[00:08:53] here's the error and then it says like
[00:08:54] oh I can see what the error is here try
[00:08:56] this and then you do this and you copy
[00:08:57] and paste stuff with agents
[00:09:00] >> they have the ability to interact with
[00:09:02] the world so they can write you know
[00:09:05] they can run scripts and or any bash
[00:09:08] commands or they can execute code or
[00:09:10] whatever so they can get feedback about
[00:09:12] this themselves and
[00:09:14] >> you know instead of saying write me SQL
[00:09:16] query I'll paste it in you can say
[00:09:19] here's you know psql that's connected to
[00:09:21] my dev database I want you to write the
[00:09:23] following query then the agent goes and
[00:09:26] runs it and
[00:09:27] >> that to me is the essence of why working
[00:09:31] with agents is so good because they can
[00:09:33] get feedback and
[00:09:35] >> so did you that that script you know
[00:09:38] >> how much time did you spend planning and
[00:09:41] getting ready to run this prompt.
[00:09:43] >> Not this this was an easy thing. So
[00:09:47] basically,
[00:09:49] you know, I don't know I let's not be
[00:09:51] too generic about it, but I would say
[00:09:53] that, you know, um depending on how easy
[00:09:56] it is to get feedback about whether
[00:09:58] something works or not, how easy it is
[00:10:00] to get send that feedback back to the
[00:10:02] agent, the better the agent can do its
[00:10:05] job. And in this case, the script is
[00:10:08] basically just launching the CLI. And
[00:10:11] launching the CLI is relatively easy
[00:10:14] when you tell it to use T-Max, which is
[00:10:15] a terminal multiplexer. So the agent can
[00:10:18] run a command in T-Max and remote
[00:10:20] control it. It's like remote controlling
[00:10:21] a terminal. And the little script that I
[00:10:24] built, this was like two seconds where
[00:10:26] just this command with this command line
[00:10:29] flags with this ends run this and this
[00:10:32] script. And the reason why I did it was
[00:10:35] I've seen agents, you know, when you
[00:10:37] tell them run this command and then they
[00:10:40] go and run and then you realize 10
[00:10:41] minutes later, oh no, I forgot to tell
[00:10:43] it. It should set, you know, end to
[00:10:45] development or API key to fubar or
[00:10:47] whatever it is.
[00:10:48] >> So to remove this possible source of
[00:10:52] chaos or entropy, I'm just like just run
[00:10:55] this this thing like no arguments, just
[00:10:58] run this and I put this in. Um,
[00:11:00] >> love it. Wow. Cool. And then yeah, clear
[00:11:02] steps on what to do. And then it went
[00:11:05] and then you know list sessions. Okay,
[00:11:07] these are the T-Max windows. Then it it
[00:11:09] it uh killed it, you know, then it
[00:11:12] failed and again like this is an agent,
[00:11:14] right? It's like this didn't work. This
[00:11:16] is invalid. So tries again, tries again.
[00:11:19] >> I bet I bet a lot of people don't use
[00:11:21] T-Mox or know what it is. So what's a
[00:11:23] quick uh like a quick
[00:11:25] >> Yeah, the quick
[00:11:26] >> explanation or do you want to show like
[00:11:28] a T-max pane or anything or
[00:11:30] >> Yeah, you see my whole screen, right?
[00:11:32] >> Uh yeah, we do. Yeah, we can see.
[00:11:36] >> So this is this is a terminal, right?
[00:11:38] You all know this you have tabs and
[00:11:40] split panes and whatnot and you can run
[00:11:42] commands in this. Um, T-Max is kind of,
[00:11:46] if you say T-Max, uh, demo T-Max, um,
[00:11:50] it's kind of,
[00:11:52] um, I overwrote all of the bindings. How
[00:11:55] do I do this again? How do I split the
[00:11:56] window? Uh, split. There you go. Split
[00:12:00] pain. There you go. So, this green and
[00:12:04] white line, this is not my terminal.
[00:12:06] This is in T-Max. And T-Max is,
[00:12:09] man, you set me up
[00:12:10] >> a multiplexer. How do you even give us
[00:12:12] the short intro to T-Max? It's it's a
[00:12:14] it's a terminal inside your terminal.
[00:12:16] Um,
[00:12:16] >> so and the thing that's valuable about
[00:12:18] that I learned is that the agent can
[00:12:21] script
[00:12:21] >> remote control it. Yeah.
[00:12:23] >> Yeah. It remote controls it.
[00:12:25] >> So the agent can basically if I have say
[00:12:29] um hello world, you can tell the agent,
[00:12:33] hey, I have a T-Max session running
[00:12:35] called demo- T-Max.
[00:12:38] get the content of this pane here which
[00:12:42] is I think in this one it's the second
[00:12:43] pane
[00:12:44] >> and then it can see everything in here.
[00:12:47] It it can see like the prompt. It can
[00:12:49] see the command like just like I would
[00:12:52] take a screenshot. Think of it as
[00:12:54] >> text screenshots.
[00:12:55] >> It's so cool.
[00:12:56] >> Um
[00:12:56] >> all right. So pop back to your pop back
[00:12:58] to your prompt and let's see the T-Max
[00:13:00] uh sort of
[00:13:01] >> Yeah. So
[00:13:02] >> it can send key bindings to it, right?
[00:13:05] And this doesn't produce any output, but
[00:13:07] we'll see.
[00:13:09] In this case, it's a maybe a boring
[00:13:11] setup. Maybe we'll see in the other
[00:13:12] thread something else. But it just
[00:13:14] remote controls the CLI. And the reason
[00:13:17] why
[00:13:19] I chose T-Max is our CLI is a um you
[00:13:24] know longunning process. It's not a
[00:13:26] command that starts and exits. It it's a
[00:13:28] thing that starts up and then waits for
[00:13:30] user input. And turns out longunning
[00:13:33] processes that wait for user input are
[00:13:35] really hard to put into agents. And
[00:13:37] we're not going to go into this topic
[00:13:39] right now, but with this you can
[00:13:41] basically say start this somewhere else
[00:13:43] like start this, you know, in T-Max. And
[00:13:46] then you can kill it again with double
[00:13:48] control C, right?
[00:13:50] >> So then
[00:13:50] >> I see that in number two. In number two,
[00:13:52] you were getting excited with AMP.
[00:13:55] >> Oh wow.
[00:13:55] >> What do you mean?
[00:13:58] >> Oh wow. That effing works.
[00:14:00] >> Oh yeah. Yeah. Yeah. Well, yeah. So,
[00:14:03] well, no, no, no. This wasn't Wait a
[00:14:05] second. Don't spoil it.
[00:14:07] >> This was Yeah. So, basically, it started
[00:14:10] to to figure out where to put like the
[00:14:12] lock statements in and then I came back
[00:14:16] and I looked at it and it ran it and it
[00:14:19] basically identified the problem. It it
[00:14:21] put like these log statements in. And by
[00:14:23] the way, all of this I could have done
[00:14:24] myself, but this is just me being lazy,
[00:14:26] right? Like this is I know exactly what
[00:14:29] I would have done. I just want the agent
[00:14:30] to do it, which I think is the majority
[00:14:33] of my use cases.
[00:14:34] >> And then it looked at the logs and it's
[00:14:35] like, oh, it's the MCP server in it.
[00:14:37] Like we wait for this. And then I
[00:14:39] realized, oh, that, you know, that's not
[00:14:41] good. And then I it's like, yeah, you
[00:14:44] should make this non-blocking. And then
[00:14:45] I was like, ask the Oracle how to do
[00:14:47] this. And the Oracle, for those who
[00:14:49] don't know, is a sub agent, meaning
[00:14:52] another model that the main agent can
[00:14:55] talk to. And right now it uses um 03 um
[00:15:00] you know open AAI's 03 a really smart
[00:15:02] reasoning model and it basically goes to
[00:15:05] this other model and says well you know
[00:15:08] if if I hover this is what the main
[00:15:10] agent sends to the model. It says
[00:15:13] >> here's the task and here's the context
[00:15:15] and here's the files that I think are
[00:15:17] relevant. And this is already pretty
[00:15:20] smart. like if you I don't know who here
[00:15:22] does this
[00:15:23] >> but the main agent the way it writes
[00:15:25] prompts for the oracle is pretty
[00:15:27] >> these are good prompts and so then the
[00:15:30] oracle identifies like oh you know you
[00:15:32] can make that you don't have to block on
[00:15:34] this
[00:15:34] >> um if you want to you know you just make
[00:15:36] this non-blocking and whatnot
[00:15:38] >> yeah so if we could if we could abstract
[00:15:40] that out so say say you weren't using
[00:15:42] AMP
[00:15:43] >> I think the really cool thing to be
[00:15:45] learning here is that by giving a sub
[00:15:47] agent you know a more intelligent
[00:15:50] reasoning model, you can sort of like
[00:15:52] tap the shoulder and say, "Hey, super
[00:15:55] smart dev, you know,
[00:15:57] >> give us your thoughts on that." And then
[00:15:59] that super smart dev goes off and thinks
[00:16:01] about it, doesn't clog the the context
[00:16:03] window, and comes back and says, "Here's
[00:16:05] my assessment, you know, here's what you
[00:16:07] do." And and in AMP, you just say the
[00:16:09] oracle, which is kind of fun, and you
[00:16:10] get that.
[00:16:11] >> Yeah.
[00:16:12] It's um the way I think about the
[00:16:14] context window too is like
[00:16:17] >> what's on your desk like you know
[00:16:20] >> what are currently working on and if you
[00:16:23] look at our desk from the start
[00:16:26] everything here like my problem log
[00:16:27] statement I don't know what it is like
[00:16:29] figure this out t-muck stuff logs
[00:16:32] searches all of this is now cluttered on
[00:16:35] our desk basically
[00:16:37] >> and then we realize oh it's MCP server
[00:16:39] in it and now suddenly Our question is
[00:16:42] not what is it, it's well, how can we
[00:16:44] fix this?
[00:16:45] >> Yeah.
[00:16:46] >> And then the main agent basically goes
[00:16:48] over to the desk of the oracle and the
[00:16:51] only thing it puts on its desk is this.
[00:16:53] Like how can we fix the MCP server in
[00:16:56] it? You know, it doesn't we don't bother
[00:16:59] the Oracle with where do we do logging?
[00:17:02] How do we do logging? You know, all of
[00:17:04] that stuff. What's T-Max? The Oracle in
[00:17:06] this case does not even know anything
[00:17:08] about T-Max. It's just this is the
[00:17:10] problem. And
[00:17:11] >> it's that's a fun way to talk about is
[00:17:13] the desk. It's sort of you have all this
[00:17:14] crap on your desk and then you just take
[00:17:17] a couple papers over and you walk over
[00:17:19] to the senior engineer and say
[00:17:20] >> here's here's what you need to know to
[00:17:22] do it. Um which is exciting. All right.
[00:17:24] So let's go ahead and cut to the end of
[00:17:26] this and tell us kind of what was the
[00:17:28] end result of this and then I'm going to
[00:17:29] play.
[00:17:29] >> The end result was the the the Oracle
[00:17:32] came back like you don't have to wait
[00:17:33] for this. It's, you know, you using a
[00:17:35] UI. It's okay if this runs in the
[00:17:37] background like one second. Technically,
[00:17:40] yes, if the user starts writing a
[00:17:42] message in, you know, in the first 500
[00:17:45] milliseconds and hit submit, then yes,
[00:17:47] the MCP might not be booted up, but I
[00:17:49] don't think that's an issue. Um, and
[00:17:53] then I just told the main, yeah,
[00:17:55] implement implement what the Oracle
[00:17:57] said.
[00:17:58] >> Love it.
[00:17:58] >> Um, yeah.
[00:17:59] >> Wow. Well, that was that was a deeper
[00:18:02] dive than I thought we were gonna get
[00:18:03] and I loved it. Um,
[00:18:04] >> wait, Ryan. Ryan, can I interject real
[00:18:06] quick?
[00:18:07] >> You can.
[00:18:08] >> The Sorry. The best prompt was, "Oh,
[00:18:13] whoa, that [ __ ] sucks, dude."
[00:18:18] >> I love the way you talk to to the agent.
[00:18:20] It's like, "All right, I'm talking to
[00:18:22] Torson here."
[00:18:23] >> Um, so we've got some folks chiming in.
[00:18:25] I'm gonna
[00:18:26] >> Yeah. Yeah.
[00:18:27] >> Got a couple folks chiming in live. Good
[00:18:29] to see you, Mo. Um, we've got tons of
[00:18:32] people flowing into BuildCrew already.
[00:18:35] Um, so if you want to join a community
[00:18:38] of other people that are building with
[00:18:39] agents like trying to figure all this
[00:18:41] out, you're not alone. Um, just head to
[00:18:43] buildcrew.team, sign up. It's free. Um,
[00:18:46] we actually give you a hundred bucks in
[00:18:47] AMP credits if you want if you use AMP.
[00:18:50] Um, but everybody is welcome whether you
[00:18:51] use cursor or cloud code or anything.
[00:18:53] Um, so come on over, join. Um, there's
[00:18:56] also a leaderboard and badges. It's it's
[00:18:58] a lot of fun. Um, so Torstston, thanks
[00:19:01] for showing us um your prompt. It's fun
[00:19:04] to think about the desk as context, you
[00:19:06] know, bringing up walking over. Um,
[00:19:09] >> should I do a second one or was this too
[00:19:10] long?
[00:19:11] >> Uh, it was too long. So,
[00:19:13] >> I know.
[00:19:16] >> I I drew you out. No, it was awesome.
[00:19:18] So, we're gonna go up to Jason next. Uh,
[00:19:20] Jason, I love the prompt you looked at
[00:19:23] this morning and how you frame the
[00:19:24] prompt. So, feel free to share your
[00:19:26] screen. Um, Graham, feel free to make
[00:19:28] jokes at Jason. I give you full
[00:19:31] permission to do that.
[00:19:32] >> I would only with Jason, not
[00:19:35] >> uh, we've also got someone uh, Huvenesh
[00:19:39] just says light mode is killing him, but
[00:19:41] I that feels that feels judgy. Light
[00:19:43] mode's okay.
[00:19:44] >> It's a stage.
[00:19:45] >> Well, here's some here's some dark mode
[00:19:47] for you.
[00:19:49] >> Uh, y'all can see.
[00:19:50] >> Let me let me pop it up. I just put up I
[00:19:52] want to say hi to Gilmo. Thanks for
[00:19:53] stopping by. The leaderboard's going to
[00:19:55] be a lot of fun. Um, all right. So, let
[00:19:57] me show your screen. Um, Jason, take it
[00:20:01] away. Tell us about this prompt
[00:20:02] structure first. I think it's kind of
[00:20:03] interesting the way way you write it.
[00:20:07] >> Yeah, I typically um I typically start
[00:20:10] with a if I want to like implement a
[00:20:12] full feature. Um, I'll start with a
[00:20:15] goal. Uh, just like a TLDDR that I can
[00:20:17] give to AMP to sort of just like keep it
[00:20:22] keep it coming back to a goal. And I
[00:20:25] usually break things down in phases. Um,
[00:20:27] so I've got phase one, phase two, phase
[00:20:29] three here. And
[00:20:31] >> I thought it was interesting the way you
[00:20:32] format the prompt. And tell us why. It's
[00:20:35] not really for the agent. It's more for
[00:20:36] you.
[00:20:38] >> No, it's totally human. I just really
[00:20:40] like seeing the phases as I'm writing
[00:20:42] them. I use the editor command a lot,
[00:20:44] which you don't, if you don't know about
[00:20:45] the editor command, it's one of my
[00:20:47] favorites. It's a slash command that we
[00:20:48] have that allows you to use your editor.
[00:20:50] I use Vim BTW.
[00:20:53] Um but uh you know you can use whatever
[00:20:57] and uh yeah so anyways this was I was
[00:21:01] trying to implement cued messages in the
[00:21:03] CLI. We currently have it in um the
[00:21:07] extension and we do have it in the CLI
[00:21:09] now. Um, this was a while back uh when I
[00:21:11] tried to implement it before. Uh, I was
[00:21:13] kind of prototyping and I do that a lot
[00:21:15] with AMP where I just if I don't have
[00:21:17] time to really get into the code, but I
[00:21:19] just want to see how something works and
[00:21:22] how, you know, how it will look, you
[00:21:25] know, if if we do it if we do it right
[00:21:27] without just vibe coding it. Um, and
[00:21:29] this was this was that and it gave me
[00:21:31] largely what I wanted. I split it up
[00:21:33] into three main tasks and uh had it do
[00:21:37] an iterative approach and um I also
[00:21:40] asked it not to I ask it this a lot to
[00:21:44] repeat back to me what you think your
[00:21:46] mission is.
[00:21:48] >> And
[00:21:48] >> why do you do that?
[00:21:50] >> Oftent times uh I just like to hear the
[00:21:54] agent in its own words
[00:21:57] >> uh say what it thinks.
[00:21:59] >> You kind of verify like
[00:22:00] >> or what it thinks it needs. I want to
[00:22:01] make sure you understand what it is. I I
[00:22:03] think I told you.
[00:22:05] >> I think it's I think it's a way to
[00:22:07] almost proofread what I've written and
[00:22:09] like see if there's anything that like I
[00:22:11] said that was confusing or that wasn't
[00:22:13] >> two important things. Um Tim wants to
[00:22:15] know Vim or Neoim.
[00:22:19] >> Neoim
[00:22:20] not that cool.
[00:22:21] >> I agree. I'm a big Neoim fan. Tors
[00:22:23] tonight.
[00:22:25] >> Did you you made you You're lazy Vim
[00:22:27] now, right?
[00:22:28] I'm I'm
[00:22:31] I don't know. I don't know what to call
[00:22:32] it. I'm embarrassed to say like, you
[00:22:34] know, decades long Vim and Neoim user.
[00:22:37] Got a Neo Vim t-shirt, got a Vim mug,
[00:22:40] but yeah, now lazy Vim because myated
[00:22:45] >> who doesn't use Vim.
[00:22:46] >> Fun fact, Thorston. Thorston is actually
[00:22:49] who got me into I I got sucked into Neo
[00:22:53] and then chat. So, okay. So, that's
[00:22:54] interesting. Now, the other question,
[00:22:55] Blank wants to know, uh, Jason, are you
[00:22:58] writing this by hand? You know, did you
[00:23:01] speak this prompt? You did it in the
[00:23:02] editor, right?
[00:23:05] >> Yeah, I did it in the editor. So, I
[00:23:07] wrote this I wrote this particular one
[00:23:08] by hand. It's kind of therapeutic for
[00:23:10] me, too. I probably, you know, it's pro
[00:23:13] I I just like writing things.
[00:23:15] >> Feels good. Feels
[00:23:17] >> human. you basically came in, you like
[00:23:19] structuring your prompts as as here's
[00:23:20] the goal and here is some phases I want
[00:23:23] to walk I want you to walk through and
[00:23:25] then take us to the end of the prompt.
[00:23:27] Do you have um what is the end of this
[00:23:30] prompt? So you got phase one, phase two,
[00:23:32] phase three. Uh
[00:23:35] >> so the end basically starts here and
[00:23:36] before you start writing your code oh I
[00:23:39] already said I said it twice. Whoops.
[00:23:41] Um, and then I ask it to ask questions
[00:23:43] that'll help clarify the tasks.
[00:23:46] And then I ask it to save my entire
[00:23:50] prompt into a document at the root of
[00:23:51] the current directory. Uh, so that it
[00:23:54] can refer back to it regularly to
[00:23:55] >> Okay, so I want to ask the group, this
[00:23:57] is kind of interesting. By the way, Leon
[00:23:58] Space, good to see you stopping by. Um,
[00:24:01] hopefully you're doing some push-ups.
[00:24:03] Um, Leon Space is an actual marine, was
[00:24:05] a Marine, and he does push-ups while he
[00:24:06] waits for AMP. Um, so, uh, so does
[00:24:11] everybody structure their prompts in
[00:24:12] this kind of way where you say, "Here's
[00:24:14] the goal. Here's some steps I want you
[00:24:16] to walk through. Uh, you know, repeat
[00:24:19] back to me. Don't code." Let's go around
[00:24:21] the room. Um, let's get Graham back up
[00:24:23] here. Uh, one second.
[00:24:28] Graham, do you do you follow this
[00:24:30] structure at all with your prompts or
[00:24:32] something totally different?
[00:24:33] >> Does it say not co don't code? Um I
[00:24:37] >> start with a goal, you know, then phases
[00:24:39] and then a a hey, don't don't code, tell
[00:24:41] me what what you're supposed to do.
[00:24:43] >> Um well, I I find that the Oracle does a
[00:24:46] pretty Oracle has replaced the don't
[00:24:48] code for me. Um I'm I just ask it to
[00:24:52] sort of come up with the product
[00:24:54] structure. Um and then I I al I just
[00:24:57] have it go for it. Um, yeah,
[00:24:58] >> but I will explicitly ask it to not code
[00:25:01] when I'm when things are getting hairy
[00:25:05] and it's sort of going off the rails.
[00:25:07] That also usually is a signal to me that
[00:25:09] I need to start a new thread because I'm
[00:25:11] a feeling like things are are losing
[00:25:13] context,
[00:25:13] >> going badly.
[00:25:15] >> Yeah. So, um,
[00:25:17] >> that makes sense.
[00:25:17] >> That's also when I start acting like
[00:25:19] Dorson and cursing at it. So, yeah. Um,
[00:25:21] yeah.
[00:25:22] >> So, I think I think I think Tyler was
[00:25:25] >> that's me all the time. No, it's not.
[00:25:26] Don't feel judged.
[00:25:28] >> I think Tyler was bored with your
[00:25:29] response and he sighed and now he's
[00:25:31] gonna he's
[00:25:34] going to say something about his
[00:25:35] prompting. So Tyler, tell tell us about
[00:25:37] your basic prompting structure.
[00:25:40] >> Uh normally I'm a big exploration guy.
[00:25:43] Um and I tell it don't code. Um most of
[00:25:47] my use case which I'll show in my thread
[00:25:49] is hey I had this one approach that I
[00:25:51] did. Is there a better way? are we doing
[00:25:54] like is there something am I missing
[00:25:55] some files that would make this a
[00:25:57] simpler approach. Um
[00:26:00] >> but yeah I'm a big like really long
[00:26:02] prompt super detailed don't code just
[00:26:04] explore and come back to me with the
[00:26:06] plan.
[00:26:07] >> Do you do you then do you then like
[00:26:09] compact that and start a new thread
[00:26:10] based on that or do you just keep going
[00:26:12] based on the expert? Uh I like never
[00:26:14] compact. Actually the one thread I will
[00:26:16] show I did compact. So kind of
[00:26:18] hypocritical but uh normally I'm I'm
[00:26:20] short threads. Um
[00:26:22] >> interesting.
[00:26:22] >> You know with the long million context
[00:26:25] window now for sonnet.
[00:26:26] >> Got it. Okay Justin how about you?
[00:26:29] What's your basic prompting strategy
[00:26:31] that you could share with with us and
[00:26:33] everybody watching? Yeah, for code it's
[00:26:36] the problem and then markdown it's uh
[00:26:40] you know H2 and saying uh
[00:26:45] your t I I can't think of it basically
[00:26:48] like result this is the result I need
[00:26:51] and that's been working really well for
[00:26:52] me. um non-code like documentation
[00:26:56] stuff. I'll say at the top I'll do uh an
[00:27:00] H2 and markdown and say context for
[00:27:04] context that it doesn't understand. So
[00:27:06] I'll basically say you know what is AMP?
[00:27:09] AMP is this. My name is Justin and then
[00:27:12] blah blah blah. And you can do that.
[00:27:15] >> Yeah. So basic that's that's that's kind
[00:27:18] of my structure is where I'll just
[00:27:20] >> Yeah.
[00:27:21] >> Cool. So Torson, I'd love you to answer
[00:27:23] this question by Ridgetop AI. How do you
[00:27:25] handle starting a new thread when
[00:27:26] continuing with same task? What kind of
[00:27:28] detail do you carry over? What's what's
[00:27:30] your method?
[00:27:31] >> Uh well, first first let let's go back
[00:27:35] to what Jason said about, you know, like
[00:27:37] repeat the plan back to me. Like that's
[00:27:39] not
[00:27:40] it's not um that's not a cosmetic thing,
[00:27:44] right? Like Jason was saying like I like
[00:27:46] when it repeats it back to me. But
[00:27:48] actually, you know, the fancy term is
[00:27:50] this chain of thought prompting. And
[00:27:53] what happens is
[00:27:56] imagine you want to instruct like, you
[00:28:00] know, my 8-year-old for example when she
[00:28:02] does have to do calculation like math
[00:28:05] stuff and then sometimes she gets it
[00:28:07] wrong and then you're like, "No, no,
[00:28:08] walk me through this like add up. Say it
[00:28:10] out loud." you know, and basically this
[00:28:14] saying it out loud and producing these
[00:28:16] results and then seeing them before her
[00:28:19] leads her to make, you know, to get
[00:28:22] result and it's
[00:28:23] >> it's not the same, but when you ask the
[00:28:25] model to first plan something, what
[00:28:28] happens is it spits it out and then
[00:28:32] >> it kind of reuses it. It gets multiplied
[00:28:34] with everything else. So the idea is
[00:28:36] that if you tell it to come up with a
[00:28:38] plan then this is in the context window
[00:28:40] and it makes results better versus
[00:28:42] >> you know you're just saying go and
[00:28:44] implement this like if if it's if you
[00:28:46] tell it to come up with a plan the plan
[00:28:47] is in the context window you know just
[00:28:49] like importing the file so
[00:28:50] >> so
[00:28:51] >> keep going
[00:28:54] >> I don't know what was the who was it
[00:28:55] like the other question was like how do
[00:28:57] you do compacting
[00:28:58] >> question from
[00:29:00] >> I have to admit that whenever I have to
[00:29:02] do this like carry over information into
[00:29:04] a new thread. I'm like something went
[00:29:06] wrong. Like I
[00:29:08] >> I don't know. I'm I'm really like super
[00:29:11] short threads and and you know don't I
[00:29:15] don't compact a lot because compacting
[00:29:17] by definition is like a loss of signal
[00:29:20] in some sense and what I do but if I
[00:29:23] have to do it and I bump into a context
[00:29:25] limit or I know that you know it took a
[00:29:28] wrong turn and there's some noise or
[00:29:30] errors or whatever in the context window
[00:29:31] what I say is write everything you know
[00:29:34] like the problem the background you know
[00:29:37] the current state and the steps left or
[00:29:40] whatever. Write this into a file and
[00:29:42] then I open a new thread and I say
[00:29:44] implement what's in this file.
[00:29:45] >> Oh, interesting. So, let's let's call
[00:29:47] out Travis who basically is talking
[00:29:50] about this. He says using files to track
[00:29:52] refactors works great to start different
[00:29:54] phases and new threads but still be
[00:29:56] aware of what it's done. That's
[00:29:57] literally what you said, isn't it?
[00:29:58] >> Yeah. And I mean the fancy name for this
[00:30:00] is you know what they call memory. You
[00:30:03] know that basically it's true, right?
[00:30:05] Like they say the model has no it cannot
[00:30:07] remember stuff. So it has to have an
[00:30:09] external source and most solutions are
[00:30:11] something like an MCP service server
[00:30:13] where you can say store memory or store
[00:30:16] connection or store fact.
[00:30:18] >> Yeah.
[00:30:18] >> But under the hood this is nothing but
[00:30:20] you know the model storing something in
[00:30:22] a file and then the next time you have a
[00:30:23] conversation it can look up stuff in the
[00:30:25] file. So I think what Travis is
[00:30:27] suggesting is is is a good way to do it
[00:30:29] >> and it's interesting Brennan agrees. Um,
[00:30:32] I I think a lot of us, including me, is
[00:30:35] is starting to say to the agent, okay,
[00:30:37] take take what we learned and throw it
[00:30:40] in a markdown file. Um, and then, you
[00:30:42] know, you can come back and sort of pick
[00:30:44] up. So, Graham, how about you? Are you
[00:30:46] how are you dealing with, you know,
[00:30:49] you've got a large task, maybe it's a
[00:30:50] couple, maybe it's more than one thread,
[00:30:52] maybe it's over a couple days. How are
[00:30:54] you managing that kind of longer term
[00:30:56] context?
[00:30:57] >> Um, I tend to find that
[00:31:01] If I just start if I start a new thread,
[00:31:04] I just it's as though I've opened a new
[00:31:08] code like a an existing codebase and I
[00:31:11] just treat it like that because I feel
[00:31:12] like um compacting has never worked well
[00:31:15] for me. It doesn't carry over enough of
[00:31:17] what I'm doing. So I just I pretend like
[00:31:20] I've just opened this codebase and I'm
[00:31:22] going to do a new feature or something.
[00:31:25] And so I I sort of ask Oracle to like,
[00:31:28] hey, this is what I want to accomplish.
[00:31:30] take a look at what's going on in the
[00:31:31] code and then go ahead and and achieve
[00:31:34] whatever the next goal is instead of
[00:31:36] pretending that it
[00:31:37] >> instead of trying to carry over anything
[00:31:39] to the previous thread. I just treat it
[00:31:41] as though it's looking at the codebase
[00:31:43] for the first time. Um
[00:31:45] >> that's always
[00:31:46] >> worked for me. Yeah.
[00:31:48] >> Um we got uh a question from blank. Um
[00:31:51] have you tried using context bundles? I
[00:31:54] sadly I don't even know what that is.
[00:31:55] Does anybody know what context bundles
[00:31:56] are?
[00:31:58] >> No,
[00:31:58] >> I haven't. They brought so I I don't
[00:32:02] know if this is the definition Blank has
[00:32:05] but Nikolai brought it up. Nikolai is
[00:32:06] also on the M team that basically
[00:32:10] some problems
[00:32:12] are
[00:32:13] and we all know this they're made up of
[00:32:15] information in Slack linear the code
[00:32:18] base and a context bundle would be all
[00:32:21] of this combined so that you can
[00:32:23] basically say
[00:32:25] >> fix this and this includes the linear
[00:32:28] ticket the slack conversation and the
[00:32:30] codebase.
[00:32:32] Oh, interesting. Yeah. So, blank
[00:32:33] spacing, a powerful technique in context
[00:32:35] engineering that allow you to capture
[00:32:36] and store a log of an agent's work. This
[00:32:38] log acts like a story or a trail of work
[00:32:40] that can be used to reinitialize or
[00:32:42] reprime a new agent.
[00:32:44] >> Interesting.
[00:32:45] >> It's slightly different, but
[00:32:47] >> yeah,
[00:32:48] >> people do this in AMP. So, what they do
[00:32:50] is um okay, so a thread in AMP is you
[00:32:54] know a series of messages, right? User
[00:32:56] message, assistant message, user
[00:32:58] message, assistant message. What you can
[00:33:00] do is just like in early 2000s you know
[00:33:04] forum or comeing software on the
[00:33:06] internet you can in AMP you can fork a
[00:33:09] thread. So after you know the five
[00:33:11] messages you can say fork and you know
[00:33:14] after message five and six or whatever
[00:33:17] you get a new thread that only contains
[00:33:19] the first five messages. And what people
[00:33:21] do is they start a new thread. They put
[00:33:24] all of the relevant context in for this
[00:33:27] problem that they want to solve and then
[00:33:29] instead of modifying this thread, they
[00:33:31] start to fork it and take it into
[00:33:33] different directions. So they basically
[00:33:35] freeze the context in the thread and
[00:33:37] then create different variations of it.
[00:33:40] >> Wow. that I think it's fascinating how
[00:33:43] we're all kind of evolving um how we
[00:33:46] deal with context and how we talk to the
[00:33:48] agents and how we help the agents
[00:33:50] remember what we're doing and how we
[00:33:51] measure them. Um I'm just reminding
[00:33:53] everybody uh this is what the Bill Crew
[00:33:56] site looks like. Free to join. Um a
[00:33:59] bunch of cool uh benefits. I think the
[00:34:01] main benefit is that we've got a private
[00:34:03] uh Twitter DM group where you can ask
[00:34:06] questions and get support. Um and then
[00:34:09] uh we're going to start doing something
[00:34:10] called build challenges where we
[00:34:11] basically say hey everyone try to build
[00:34:13] this and let's talk about it and say
[00:34:14] what we learned. So um let's go uh to
[00:34:19] let me stop sharing my screen.
[00:34:22] Um let's throw let's th let's look at
[00:34:25] another thread. We got a lot of great
[00:34:27] comments and coming in. So everyone
[00:34:28] watching love the comments. Keep them
[00:34:30] coming in. We'll put them up on screen
[00:34:32] and respond to them. Um uh but let's
[00:34:36] let's show a thread and we're going to
[00:34:37] show a thread. Now a thread is basically
[00:34:39] um a conversation with AMP. Uh we
[00:34:42] publish it to the web so you can share
[00:34:43] with people and we're just talking about
[00:34:45] like best practices and what we learned,
[00:34:47] what works, what doesn't work. Um so
[00:34:49] Graham, I'm gonna go to you next.
[00:34:52] >> Uh
[00:34:53] >> yeah,
[00:34:53] >> let's look at one of your threads.
[00:34:56] >> Pop up a couple comments.
[00:34:59] >> Welcome to Dan. Appreciate you stopping
[00:35:01] by.
[00:35:03] I'm in a different time zone as well.
[00:35:05] >> All right. So, I'm sharing my screen. If
[00:35:07] you want to go ahead and drop me in
[00:35:09] there. Um,
[00:35:10] >> let's do that. One second.
[00:35:12] >> I um I am too embarrassed to show one of
[00:35:16] my uh big threads where I'm comment
[00:35:19] adding an actual feature to AMP. Um and
[00:35:21] so I'm going to show off some of the
[00:35:22] stuff that I think is fun. Um because
[00:35:26] >> one one thing for me is that um tools
[00:35:28] like AMP have allowed me to really
[00:35:30] express myself in a way that I haven't
[00:35:33] been able to do previously and and it
[00:35:35] allows for code to be a medium of
[00:35:37] expression for me which I really love.
[00:35:38] So um and my me what I like to express
[00:35:42] is humor. So I mostly make a lot of like
[00:35:44] funny silly apps that um I think people
[00:35:46] are going to like. So um here's just a
[00:35:49] really high level of how I've done it. I
[00:35:51] think that this is fairly common to a
[00:35:52] lot of people. Um, I just blab at AMP my
[00:35:56] whole idea for what this app looks like.
[00:35:58] Um, and then I say, "Can you turn this
[00:36:00] into a detailed PRD so we can get
[00:36:02] started on it right now?" Um,
[00:36:04] >> and you chose to talk to the Oracle like
[00:36:06] right away.
[00:36:07] >> Yeah. Or I always go Oracle first and
[00:36:09] then because I think um, you know, I'm
[00:36:12] always afraid of it just ripping and
[00:36:14] starting on on doing a bunch of code,
[00:36:16] but then I also just like
[00:36:18] >> um I think of it like a like a pairing
[00:36:21] buddy, right? Um, you know, pair
[00:36:23] programming is
[00:36:25] >> not great, but when you're doing it with
[00:36:26] an agent, it's really fun. So,
[00:36:28] >> totally.
[00:36:29] >> Um, I I have it just create this PRD.
[00:36:31] It's created it and then I just ask it,
[00:36:33] okay, go ahead and follow it.
[00:36:34] >> So, probably everybody knows what a PRD
[00:36:36] is, but just in case people don't, what
[00:36:37] is it?
[00:36:38] >> Sure. Yeah, it's a product requirements
[00:36:39] document. Um, and this is something that
[00:36:42] is um I have a a PM friend who whenever
[00:36:45] he looks at the ones I generate, he's
[00:36:47] always like, "This is not enough." Um,
[00:36:48] and so it's nice to have Oracle who's
[00:36:51] really great at doing that. Um, and then
[00:36:54] it's funny, it gets to the hardest part,
[00:36:55] which is navigating how to find a Google
[00:36:57] API key. Um, and so that's it. It it
[00:37:00] built basically everything. I got the
[00:37:02] Google API key. Um, and then I published
[00:37:04] it and and so then I just give it the
[00:37:07] GitHub repo and it go ahead goes ahead
[00:37:09] and pushes it. Um,
[00:37:12] >> one thing that's not in this thread
[00:37:14] because again this was like it got all
[00:37:16] built, but then I actually go style it.
[00:37:18] I just did a screenshot of the app I
[00:37:20] wanted and gave it to AMP and said, "Can
[00:37:22] you style it after this?" Um, so this is
[00:37:25] what I ended up building. It's called uh
[00:37:27] TBFY. So, if anybody watches the TBPN
[00:37:30] stream, this is an app that um you
[00:37:32] connect your calendar, you tell it what
[00:37:34] job you have, and then it makes up fake
[00:37:36] meetings that you might have with that
[00:37:38] job title and puts it during the TBPN
[00:37:41] stream so that you can watch it without
[00:37:43] uh getting uh interrupted by your pesky
[00:37:47] job. So, um it's really silly. And then
[00:37:49] I have an undo button.
[00:37:51] >> You don't actually use this here, right?
[00:37:53] Because all your meetings are real,
[00:37:54] right?
[00:37:54] >> All my meetings are real. Don't check I
[00:37:56] mean because they're all 100% real. Um
[00:37:59] >> I love it.
[00:38:00] >> Yeah. So this is just it's for me my job
[00:38:02] is to you know get attention and tell
[00:38:05] people about AMP and so like I just like
[00:38:07] to build silly things like this. So
[00:38:09] >> So blank blank is giving you applause.
[00:38:11] He he approves.
[00:38:12] >> Okay good. Yeah you can use this
[00:38:13] tbfy.xyz. It works right now. Um,
[00:38:17] >> and so another one, uh, this is is
[00:38:19] something that, um, Mitchell Heshimoto
[00:38:21] talked about how, uh, everyone who
[00:38:24] commits to Ghosty now has to disclose
[00:38:26] whether or not they're using AI because
[00:38:28] he's sort of sick of, uh, AI,
[00:38:31] uh, slop PRs. And so I was actually at a
[00:38:36] meetup where I was about to describe um
[00:38:38] TBBFY and it sort of came gave me this
[00:38:42] idea of like why don't we make something
[00:38:44] like AI slop to fight AI slop. Um so I
[00:38:48] just again asked it to do this. Um I
[00:38:50] didn't even ask it for a PRD because I
[00:38:52] was just asking for a landing page.
[00:38:54] >> Um and you could see like I just gave it
[00:39:00] a little uh screenshot of its own app.
[00:39:02] said, "This looks a little messy. Can
[00:39:04] you go ahead and, you know, change how
[00:39:06] it was arranged?" Um,
[00:39:09] and then what was cool was, uh,
[00:39:13] interesting.
[00:39:14] >> It's interesting that you said looks a
[00:39:16] little messy. It's kind of interesting
[00:39:17] how we all like have different versions
[00:39:19] of how do you describe the changes you
[00:39:21] want an agent to make visually, you
[00:39:23] know?
[00:39:24] >> So, how did it did that work?
[00:39:26] >> Yeah, it did. it it handled it handled
[00:39:28] what I wanted a little bit and then I I
[00:39:30] just mostly asked it to
[00:39:32] >> um to simpl simplify it and I I had
[00:39:34] actually never built a GitHub action
[00:39:35] before.
[00:39:36] >> Um and so I was there was still like
[00:39:40] another 10 minutes before I had to go on
[00:39:41] stage and so I just thought all right
[00:39:44] well why don't I see if I can actually
[00:39:45] turn this into a real GitHub action. Um
[00:39:48] and so I asked it to do that and then I
[00:39:51] see Thorston you're not the only person.
[00:39:53] I said f it. Let's just make usable
[00:39:55] action
[00:39:56] >> and uh and publish it.
[00:39:58] >> Um and so it's it's live now. So um
[00:40:02] basically what this the way this works
[00:40:03] is um you install this as a GitHub
[00:40:05] action on your project. Anytime anybody
[00:40:07] makes a PR to your repo, it just
[00:40:09] responds with totally madeup AI slop
[00:40:12] about your PR review. And so it says
[00:40:14] like well check the what? And it doesn't
[00:40:16] make any sense and it's just a way to
[00:40:18] like fight this sort of thing. So
[00:40:20] >> I love it. Um, I leave it to you to
[00:40:23] actually um code something that's
[00:40:25] entertaining. I appreciate it.
[00:40:27] >> Yeah.
[00:40:28] >> So, Torson, I want to go to you real
[00:40:29] quick and ask about this. So, this is
[00:40:32] something interesting that's starting to
[00:40:33] happen where people Let me get everybody
[00:40:35] back up here and then I'm going to go
[00:40:37] around the room. So, all right. The
[00:40:40] purpose today we're launching Build
[00:40:41] Crew. We want people to learn and
[00:40:43] support each other how to use agents
[00:40:45] better. Um,
[00:40:47] we're starting to see folks like
[00:40:49] Mitchell Hashmodtom more say, why don't
[00:40:50] we put these kind of threads in our in
[00:40:53] our poll requests so we can understand
[00:40:55] what's going on. I'd love to hear your
[00:40:57] thoughts on like is this the future
[00:40:59] where we're going to see this happen a
[00:41:01] lot? Should people be doing this with
[00:41:03] their PRs?
[00:41:05] Tell us your thoughts on that.
[00:41:07] Yeah, I
[00:41:10] like half a year ago maybe when we
[00:41:13] recorded our raising an agent podcast, I
[00:41:15] was asking the same thing like in the
[00:41:17] future will all code have prompts
[00:41:20] attached to it, you know, will will
[00:41:23] maybe store the prompts in the repo and
[00:41:24] not the code or you know whatever and
[00:41:27] the and I I think you know zooming out
[00:41:30] we are moving in a direction where the
[00:41:33] prompts that have generated code will be
[00:41:36] are becoming more important
[00:41:38] >> um
[00:41:40] >> with threads attached to PRS or you know
[00:41:43] with Mitchell saying this close this I
[00:41:45] think what he wants to get at is
[00:41:48] you know it's it's sort of a if you say
[00:41:51] yeah I used AI for this then you know
[00:41:53] the person has reflected on whether and
[00:41:56] how much of the code they understand and
[00:41:59] you know the in his case attaching the
[00:42:02] thread is something like the git commit
[00:42:04] message is a little
[00:42:06] more context like what did the person
[00:42:09] >> ask the agent to do, what was the
[00:42:10] background, what's the bug report and
[00:42:12] then how you can see how the code came
[00:42:14] to be.
[00:42:15] >> Um in reality I think or in practice
[00:42:20] um it's useful but I think who said it?
[00:42:23] Alex here in the chat he's he said um I
[00:42:26] want to be able to cherrypick parts of
[00:42:28] the thread. I would like to skip the
[00:42:29] whole coding loop and just the beginning
[00:42:31] and the conclusion. And I think that's
[00:42:33] something we should build or make it
[00:42:35] easier in a thread to just focus on the
[00:42:37] important parts and not just when it
[00:42:39] retries commands and commands. Um, but
[00:42:43] yeah, it's, you know, we've been seeing
[00:42:45] this where people said like in our poll
[00:42:47] request like, "Oh, here's the AMP thread
[00:42:49] ID. People attach it to the git commit
[00:42:50] message and put it in pull request
[00:42:52] review."
[00:42:52] >> Um,
[00:42:53] >> so it's definitely a thing. It's just
[00:42:57] >> I think there's so much stuff changing
[00:42:58] that I don't think this is the final
[00:43:00] form yet. I think this is a good first
[00:43:01] step, but I think there's more we we
[00:43:03] have to do.
[00:43:04] >> Agreed. So, I'm going to show everybody
[00:43:06] really quick like how do you share
[00:43:07] threads? Like what is happening here and
[00:43:09] how do you do this? Um, so I'm just
[00:43:11] going to go really quick uh to uh my
[00:43:15] profile.
[00:43:18] So, this is what your profile looks when
[00:43:20] you join Bill Crew. Um, you've obviously
[00:43:22] got uh badges which are fun to unlock.
[00:43:24] Um, and now here are your threads. Now,
[00:43:27] if I go to let's go to Mike's profile.
[00:43:31] He obviously I can't see his threads
[00:43:33] because, you know, we don't think you by
[00:43:35] default just want to show everybody your
[00:43:36] threads. But when you want to share
[00:43:38] them, here's what you do. So, I'm going
[00:43:40] to go back to mine.
[00:43:42] Um, and uh, you know, say that I click
[00:43:46] into this one. Um, I was saying, "Hey,
[00:43:49] we've got a an error." Let me make this
[00:43:51] a little bigger for you. And you just go
[00:43:53] up to here, workspace, and you choose
[00:43:55] public.
[00:43:56] Um, and when you choose public, um, let
[00:43:59] me choose a thread that would be okay
[00:44:02] for me to share.
[00:44:06] Yeah, this is fine. Um, so I'm going to
[00:44:08] say public. And now you get a URL um,
[00:44:14] which then you can share. Um, and then
[00:44:16] what we're hoping will happen is that
[00:44:19] everybody in build crew, you know, you
[00:44:21] could pop into the Twitter DM group and
[00:44:23] share a thread and say, "Hey, can I get
[00:44:25] some feedback?" Or, "Hey, this really
[00:44:27] worked for me." Or, "Why do why did this
[00:44:29] not work? Like, what can I learn? Uh,
[00:44:31] what, you know, help me out?" So, we're
[00:44:33] hoping that this idea of sharing threads
[00:44:35] becomes more prominent as a way to move
[00:44:37] the industry forward. So, um, Tyler,
[00:44:40] what do you think about sharing threads
[00:44:42] publicly and PRs? And there's a little
[00:44:45] bit of a fear, I think, of like I don't
[00:44:47] know if I want people to see like the
[00:44:49] things I say because maybe I feel dumb
[00:44:51] or maybe I say things that aren't aren't
[00:44:53] correct.
[00:44:53] >> I feel dumb.
[00:44:55] >> So, it's it definitely it definitely
[00:44:57] worries me for sure.
[00:44:58] >> I think everybody feels kind of dumb and
[00:45:00] like there's a little bit of a fear of
[00:45:01] showing people. It's like a thought
[00:45:03] process. So, Tyler, what do you think?
[00:45:04] Is this going to be a thing?
[00:45:06] Yeah, I think it's for me how I use
[00:45:10] thread sharing is like there's
[00:45:12] definitely a few people on the team that
[00:45:14] I like to look at how they're prompting.
[00:45:16] I think they're advanced prompters if
[00:45:19] you want to call it that. Um, but I
[00:45:22] think one issue I I can imagine with PRs
[00:45:24] is like for me to release something
[00:45:27] there's probably like seven threads, you
[00:45:29] know, depending on the complexity. So
[00:45:31] it's like how do you get the bits and
[00:45:32] pieces from all the threads? like that
[00:45:35] seems hard to do. Um, but from like an
[00:45:38] educational perspective, I think it's a
[00:45:41] really good feature we have uh that you
[00:45:44] can learn from other people that I can
[00:45:46] look at what you know Thor's doing or
[00:45:48] Graham's doing and just be like,
[00:45:51] >> is it different than me? Is there like a
[00:45:52] strategy? Like I I see saw the T-Mu
[00:45:55] thing that's a very clever thing that
[00:45:57] like I wouldn't have come up with. Um,
[00:46:00] so yeah, but yeah, everyone feels dumb
[00:46:04] like but I've accepted it.
[00:46:05] >> It's Wait, sorry. I I think it's dumb to
[00:46:09] say you have to feel dumb, you know?
[00:46:12] Like it's I don't like I have no shame
[00:46:15] sharing all of the prompts that I have
[00:46:17] because it's just like writing code.
[00:46:20] Like you you're making typos. You're
[00:46:22] using the wrong stuff. It doesn't
[00:46:24] compile. Who cares? The problem is and
[00:46:28] you know we need to fix this is some
[00:46:30] threads are better than others where
[00:46:32] they are more the final thing that you
[00:46:34] then want to publish and say to others
[00:46:35] this is what you should look at and
[00:46:37] others are false attempts but I don't I
[00:46:40] mean I don't maybe I'm missing the gene
[00:46:42] for this but when people say like oh I'm
[00:46:44] I'm afraid to share the problems I'm
[00:46:46] like who cares like you know
[00:46:48] >> guy widely recognized as excellent coder
[00:46:50] and who's written canonical blog posts
[00:46:52] on AI coding doesn't understand why
[00:46:55] people are worried
[00:46:59] Well, I think one one thing though like
[00:47:02] there there's something I read a book a
[00:47:04] while back called Naive Art
[00:47:06] >> and it's about artists that that aren't
[00:47:10] like super you know they're not people
[00:47:12] that have been making art since they
[00:47:13] were little kids and like have been
[00:47:15] getting better and better and better for
[00:47:16] a very very very long time and you know
[00:47:19] have followed the classical education
[00:47:21] part and like gone on to be like experts
[00:47:24] in art. Um, it talks about artists that
[00:47:27] picked up a pad and paper and made
[00:47:29] something kind of cool. And the cool
[00:47:32] thing about that is they don't have the
[00:47:34] knowledge of like Rim Brand. They don't
[00:47:35] they don't know about Rimbrand. They
[00:47:36] don't know about Leonardo da Vinci. They
[00:47:38] don't know about Picasso. They don't
[00:47:39] know about Rothkco. You know, they don't
[00:47:41] know about any of these people. They
[00:47:43] just do it. And oftentimes they come
[00:47:44] with an extremely different perspective
[00:47:46] that's super cool. So, I think it's
[00:47:49] actually really advantageous if you're
[00:47:51] super self-conscious about your your
[00:47:53] prompts or like, you know, you're
[00:47:54] self-conscious about the questions
[00:47:56] you're asking or you feel dumb. You
[00:47:58] know, you might do something that's
[00:47:59] actually really intuitive that might be
[00:48:02] something that someone who has a
[00:48:04] lifetime of coding experience like
[00:48:05] Dorston wouldn't have done just because
[00:48:07] that all that coding experience might
[00:48:09] block him from actually doing that,
[00:48:11] right?
[00:48:11] >> So, I say share.
[00:48:12] >> You have a unique perspective. Now, Tim
[00:48:14] has a great question though that is kind
[00:48:16] of scary. Beginner question. How do I
[00:48:18] share threads without sharing sensitive
[00:48:19] data or API keys? Um Torstston, over to
[00:48:22] you.
[00:48:23] >> We do redact some of the most common API
[00:48:26] keys. Um so you know most companies
[00:48:30] right now they have like a prefix for
[00:48:33] the API keys. I think GitHubs is ghore
[00:48:36] whatever and you know stripe has like
[00:48:38] one and so we try to redact those. Um,
[00:48:42] but as always, you have to be careful,
[00:48:45] you know, like this is just like you
[00:48:47] don't want to put API keys in your
[00:48:48] repository that you push to GitHub, even
[00:48:50] though it might be private, you know,
[00:48:52] you don't want to do this. And
[00:48:54] >> so, you had an idea though where in your
[00:48:56] script that you ran, it had some
[00:48:58] sensitive information. That way, you
[00:48:59] could tell the agent to reference the
[00:49:01] script, but it didn't have to actually
[00:49:03] be in context.
[00:49:05] But even that is a little bit
[00:49:08] I why when I sent the prompt I was like
[00:49:11] this is
[00:49:12] >> this might be bad
[00:49:13] >> because the agent might then go what's
[00:49:15] in the script and it reads the file
[00:49:17] >> and then the context of the file is in
[00:49:19] the thread. So
[00:49:20] >> yeah. Yeah. So
[00:49:22] >> yeah,
[00:49:22] >> go ahead. Go ahead, Tyler.
[00:49:24] >> One other thing is like for the
[00:49:27] educational part is that I found useful
[00:49:29] is, you know, I'm just starting my
[00:49:30] career, right? I think it's great to
[00:49:33] have that proof of work because, you
[00:49:35] know, I go to be young and I'm like,
[00:49:37] look at this thread and there's it's
[00:49:39] like you don't know what you don't know.
[00:49:41] I think it's great to, you know, when
[00:49:42] you're coding without AI, you know, you
[00:49:45] don't have that history. So I think it's
[00:49:47] great to, you know, give your manager or
[00:49:51] give something some some context around
[00:49:52] things. It actually has helped me level
[00:49:54] up over the last few months at SourceCap
[00:49:56] like 10x.
[00:49:58] >> Yeah.
[00:49:59] >> One one can I add something?
[00:50:01] >> Of course. Yeah.
[00:50:02] >> Okay. So I don't know. I'm sure most of
[00:50:06] us here are old enough to know when 2008
[00:50:09] there was a site.
[00:50:10] >> Not Tyler. Come on.
[00:50:14] I said most of us
[00:50:16] >> Tyler was freaking like respect it
[00:50:19] Jason.
[00:50:20] >> Anyway, 2008 github.com
[00:50:24] I saw it on hackernews. I was like okay
[00:50:26] that's cool. I didn't sign up until
[00:50:29] 2009.
[00:50:31] I didn't commit code until 2010 because
[00:50:34] I was fearful like someone's going to
[00:50:36] look at this and say what the hell are
[00:50:39] you doing? And I think we're in the same
[00:50:41] we're in the same place where in the
[00:50:44] beginning I was like there's no way in
[00:50:46] hell I am showing anyone a prompt. But
[00:50:50] then I started looking at others and I'm
[00:50:52] like oh wow they're doing exactly kind
[00:50:54] of what I'm doing. So now every commit
[00:50:57] that I make
[00:50:59] >> is my prompt is attached. I am no shame
[00:51:03] of saying hey this was helped this this
[00:51:06] was written in part by AMP you know and
[00:51:10] I think that the same way where people
[00:51:13] back in 2008 2009 2010 were fe fearful
[00:51:18] that they would get criticized for their
[00:51:21] code now I think all of us here don't
[00:51:25] care about committing code publicly to
[00:51:27] GitHub because it's just everyday life
[00:51:30] so
[00:51:31] Man, Justin, you're right. It's a
[00:51:33] process. Yeah. This um I want to call
[00:51:35] out um uh Arterius Maximus who's saying,
[00:51:40] you know, it's definitely an imposter
[00:51:41] syndrome thing. And and our hope like
[00:51:43] the whole point of Bill Crew, y'all,
[00:51:45] please join it because the the the the
[00:51:48] goal is to share this knowledge, right?
[00:51:50] So, hop in there. It's free. And then go
[00:51:53] into the Twitter DM group, which we'll
[00:51:55] invite you to, and then make make a
[00:51:57] thread public and then share it and just
[00:51:59] say, "Give me feedback. and us as the
[00:52:02] creators of that community or that
[00:52:03] curators of that community, we will make
[00:52:05] sure that people are are kind and
[00:52:06] helpful and thoughtful, you know, about
[00:52:09] your prompts, but this is how you'll get
[00:52:10] better, right? Um, and and then you'll
[00:52:13] quickly realize that actually nobody
[00:52:15] really knows what they're doing. I mean,
[00:52:17] like, and you kind of go, "Oh, you know,
[00:52:20] this person said that and you know,
[00:52:22] that's interesting. That didn't work."
[00:52:23] So,
[00:52:24] >> someone wrote a blog post about the
[00:52:26] emperor having no clothes. I forgot who
[00:52:28] it was, but it was something along those
[00:52:30] lines.
[00:52:31] >> Yeah, the emperor has no clothes. So,
[00:52:33] we've got um only about six minutes
[00:52:34] left. Um and uh I'd like to sort of wind
[00:52:38] down by just sharing some of your, you
[00:52:42] know, most valuable tips that you've
[00:52:44] learned about working with agents, like
[00:52:47] what's just really working for you right
[00:52:49] now? Um what knowledge can you share
[00:52:51] with people uh watching? And I want to
[00:52:54] thank uh Huanesh for for joining us and
[00:52:57] using AMP as well. So um let's go around
[00:52:59] the room. Um I I'll go first just to
[00:53:01] give you all a minute to think about it
[00:53:03] that you know I I plan a lot with
[00:53:08] agents. So um I think Nikolai was
[00:53:11] talking about this and especially with
[00:53:12] GPT5 like if you if you plan and and you
[00:53:16] and you think ahead and you ask the
[00:53:19] agent to spend a little time you know
[00:53:20] making a plan and telling you about the
[00:53:22] plan. Yeah. I just get so much better
[00:53:24] results. But the problem is fighting the
[00:53:27] impatience and like I just want to
[00:53:28] start. Um, and I I like Jason the way
[00:53:31] you did that. Like here's some ideas.
[00:53:34] Repeat back to me what you're going to
[00:53:35] do. So that's really working for me.
[00:53:37] It's a little slower. Uh, but I I like
[00:53:39] that. So, uh, let's go to Torston. What
[00:53:42] What is something that's just really
[00:53:43] working for you right now?
[00:53:46] >> Disclaimer, this changes every three
[00:53:48] weeks right now. Like the way I write
[00:53:51] prompts now is different than it was
[00:53:52] four weeks ago. I think what works right
[00:53:54] now is
[00:53:57] I
[00:53:59] do a lot of thinking first and be then
[00:54:02] really direct about what I want the
[00:54:04] agent to do with exceptions, but then
[00:54:09] direct the agent at a thing that I
[00:54:12] roughly would know how to do and then
[00:54:14] tell it, you know, how to get feedback
[00:54:16] and how to confirm that it works. So if
[00:54:19] I ask it to um to fix a bug, I don't go
[00:54:23] fix this bug. I think about how can it
[00:54:26] confirm that it fixed the bug. So then
[00:54:29] it's like okay,
[00:54:31] start a thread. Write me a test that
[00:54:33] fails for example or write me a script
[00:54:34] that shows the bug and then I start a
[00:54:38] new thread and I go like run this and
[00:54:39] you will see this bug and now try and
[00:54:41] figure out what the bug is then ask the
[00:54:44] oracle then try to fix it and then
[00:54:46] confirm that you fixed it. I love that.
[00:54:48] >> And I've been doing this if you go
[00:54:50] through my threads. It's this pattern
[00:54:52] is, you know, uses a lot.
[00:54:54] >> Smart. I love it. Um, let's go to
[00:54:57] Graham. What's What's working for you
[00:54:59] right now when you talk to agents?
[00:55:00] >> Um, actually talking to agents. Uh,
[00:55:04] using Super Whisper to be able to just
[00:55:07] >> verbalize what I think. Um, I find when
[00:55:10] I'm typing, I'm I'm trying to be
[00:55:14] precise. Um, and which is is true, but
[00:55:18] it also means that I like omit stuff or
[00:55:20] I'm just like I'm just slower and I just
[00:55:23] when I just use Super Whisper to talk,
[00:55:26] it's great. And I I think that's I've
[00:55:28] sort of blabb refine code is kind of the
[00:55:32] way that I've thought about it. So,
[00:55:34] >> Blab, refine code, trademark.
[00:55:37] >> Well, blab then refine then code.
[00:55:39] They're all three separate lines.
[00:55:41] >> Okay, got it. Got it. Cool. Thank you.
[00:55:43] Appreciate it. uh Hubanesh was just
[00:55:45] sharing what's working for them. Oracle
[00:55:47] for planning uh GPT5 then Oracle for
[00:55:50] review GPT5 fix issues. Uh that's an
[00:55:53] interesting uh feedback loop. Uh let's
[00:55:55] go to Tyler. What's working well for you
[00:55:58] right now when you are are working with
[00:56:00] agents?
[00:56:01] >> Slowing down. I think sometimes I get
[00:56:04] trigger happy and start, you know,
[00:56:06] typing really fast. But similar to
[00:56:08] Thorson, just think long prompts, reduce
[00:56:12] the solution space, be specific. Uh, you
[00:56:15] know, everybody who comes up to me at
[00:56:18] school, you know, on Twitter, whatever.
[00:56:20] They're like, "It doesn't work." And
[00:56:22] they write like, "Please fix."
[00:56:24] >> Imagine imagine you go to a junior
[00:56:26] engineer like, "Please fix." There's no
[00:56:28] context, right? So, you know, writing
[00:56:30] >> always work. I don't understand. Why is
[00:56:33] that bad?
[00:56:33] >> I know. I know. Um, we should try that
[00:56:35] internally. Just please fix. Um, but
[00:56:39] yeah, just like longer prompt, be super
[00:56:41] specific, like make the decisions. And
[00:56:43] the second is just code is cheap, so be
[00:56:46] willing to like revert, you know, try a
[00:56:48] different bunch of different code paths.
[00:56:50] Like there's sometimes where I think one
[00:56:52] path's the best and I'm like, "Oh my
[00:56:53] god, we have this file in the codebase
[00:56:55] that just makes this so much easier."
[00:56:57] And hey, revert. Boom. like there's no
[00:57:00] there's no cost anymore. So yeah,
[00:57:02] >> I love it. Um so it's funny because Tone
[00:57:04] Snark literally is enforcing that slow
[00:57:08] smooth is fast. Um appreciate that. So
[00:57:11] let's uh finish up real quick. Uh
[00:57:13] Justin, give us a quick tip. What's
[00:57:14] working well for you right now?
[00:57:16] >> Don't get drunk on tokens just because
[00:57:18] you have a million a million context
[00:57:20] window. Make small keep it small. A lot
[00:57:25] of people make this mistake where they
[00:57:27] try to fill up the context window as
[00:57:29] much as they can. They're like, "It
[00:57:31] doesn't work." And it's just like,
[00:57:33] "Yeah, dude." Because you're not you're
[00:57:35] not compacting. Compact fork. Keep it
[00:57:38] small. Don't get drunk on tokens.
[00:57:40] >> Love it.
[00:57:41] >> Save money. Good.
[00:57:43] >> Don't get good. Um Jason,
[00:57:49] >> I'll just keep it simple. Don't say no
[00:57:51] for your buyer. Some old sales advice.
[00:57:54] You'd be shocked at what this stuff can
[00:57:56] do. I mean, ask it anything.
[00:57:59] >> Yeah.
[00:58:00] >> You know, it's it's uh it's easy to be
[00:58:02] like, well, it couldn't do that because
[00:58:04] I think there's still a paradigm that
[00:58:06] lives within all of us that's like, you
[00:58:07] know, remembers the first few weeks of
[00:58:09] AI where it was like, oh, it's still
[00:58:11] kind of dumb.
[00:58:12] >> But, you know, it's a lot smarter now.
[00:58:14] It can do a lot. So, yeah, don't say no
[00:58:17] for your buyer.
[00:58:18] >> It's amazing. Well, listen y'all. Um,
[00:58:19] we're getting some kind comments from
[00:58:21] the crowd. Uh Jeremy, thanks for
[00:58:23] stopping by. Uh we really appreciate you
[00:58:25] all spending an hour of your life with
[00:58:28] us. Um we're really hoping that that
[00:58:31] BuildCrew empowers you, connects you,
[00:58:33] educates you, u makes you even more
[00:58:36] powerful. Um and so please hop in there.
[00:58:39] It's absolutely free. Uh just go to
[00:58:41] buildcrew.team, apply. We'll get you in
[00:58:43] there. We'll get you in the Twitter DM
[00:58:45] group. Uh we'll throw 100 bucks of AMP
[00:58:47] credit in your account. Um, and uh,
[00:58:50] we'll learn a lot over the coming weeks,
[00:58:53] months, years. So, uh, thanks to my
[00:58:55] amazing crew, Torson, Graham, Tyler,
[00:58:57] Justin, Jason, Jason. Thanks for taking
[00:59:00] time. Appreciate you guys a lot. And,
[00:59:01] uh, hit us up on X, y'all. We are on X
[00:59:04] all the time. Um, we're we would love to
[00:59:07] hear your feedback. We'd love to hear
[00:59:08] what's working. Um, so, thanks everybody
[00:59:11] and we'll see you
[00:59:14] somewhere else. Take care.
[00:59:16] >> See you. Bye.
[00:59:17] >> Bye. Bye.
