---
title: "Raising An Agent Episode - Episode 10"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-10"
sourceUrl: "https://www.youtube.com/watch?v=4rx36wc9ugw"
videoId: "4rx36wc9ugw"
capturedAt: "2026-06-27T15:09:25.564Z"
series: "raising-an-agent"
episode: 10
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3350
---

## Transcript

[00:00:00] you one-on-one with an agent in a
[00:00:02] sidebar. I think that's coming to an
[00:00:04] end. You looking at the code in a text
[00:00:07] editor and having it at the bottom or in
[00:00:10] the side and it sees like which files
[00:00:12] you have open and then you do this
[00:00:14] pingpong thing. This is not the future.
[00:00:17] >> For the 1% of developers that want to be
[00:00:20] most ahead, that want to be coding like
[00:00:23] how everyone else will be in the future.
[00:00:26] they only need to do the last 20% of
[00:00:30] their work in the editor and we think we
[00:00:32] can get that to 10% or 1% or something
[00:00:35] for what we created AMP to do which is
[00:00:38] explore the frontier software
[00:00:39] development we will be killing our
[00:00:41] editor extension the AMP VS Code
[00:00:44] extension and cursor and so on we're
[00:00:46] going to be killing it we think the
[00:00:47] sidebar is dead and let's walk through
[00:00:50] Why?
[00:00:55] [music]
[00:00:56] >> Hello and welcome to Raising an Agent
[00:00:59] episode 10. I'm Torston and here with me
[00:01:01] is Quinn. Hi Quinn.
[00:01:04] >> Hey Thorston. All right. Uh we shipped
[00:01:06] deep mode. There's a lot more stuff
[00:01:08] coming, but how have you been using deep
[00:01:10] mode? You fall in love with some of
[00:01:12] these new models.
[00:01:13] >> Yes, I maybe a big fault of mine, but
[00:01:17] yes, we shipped deep mode last week. So
[00:01:18] deep mode is a new agent mode in AMP for
[00:01:21] those who don't know. Uh we only have
[00:01:24] three now. So we don't have you know
[00:01:27] smart mode that's the one we had our the
[00:01:30] main mode with Opus 45 right now. Uh
[00:01:34] rush mode which uses a really fast
[00:01:37] model. Um let don't get let me get this
[00:01:40] wrong. We're experimenting with other
[00:01:42] models but I think it's haiku right at
[00:01:44] the moment in rush mode.
[00:01:45] >> That's right. So fast, less smart model
[00:01:49] for if you want to rush some task. And
[00:01:50] we shipped the new mode called deep mode
[00:01:52] which is powered by GBD52 codeex
[00:01:56] medium. Uh quite the name. Um
[00:02:01] and we shipped it because
[00:02:04] I think that 52 codeex
[00:02:09] is amazing in a lot of ways. Um, it it's
[00:02:14] really smart, you know, funny, but it's
[00:02:17] really smart. It can write some really
[00:02:20] good code
[00:02:21] and it's really thorough in how it
[00:02:24] researches and goes off and finds stuff.
[00:02:26] And we called it deep mode because we
[00:02:30] realized, well, the strengths of, you
[00:02:32] know, the the model isn't good at this,
[00:02:36] you know, hey, set up my Zshell RC and
[00:02:38] then do this and reload this like these
[00:02:41] back and forth super fast assistant
[00:02:43] tasks that you might use Opus for. It's
[00:02:46] kind of too lazy for this where it
[00:02:48] sometimes goes like you should run these
[00:02:50] things or it researches for too long.
[00:02:54] But if you have a well scope problem or
[00:02:57] a big task or you want to find something
[00:03:01] out, you can send this thing off and say
[00:03:04] like go and do this and it will go and
[00:03:07] you will need to switch tabs and do
[00:03:08] something else while it goes and then it
[00:03:11] will research in a very thorough way and
[00:03:15] often come back with incredibly
[00:03:17] impressive results. And so we put this
[00:03:20] in another mode. And I think it's
[00:03:22] important to say it's a different mode
[00:03:24] because
[00:03:26] it's not a model selector. It's a
[00:03:27] different way of working or engaging
[00:03:30] with AMP or using AMP. And we kind of
[00:03:32] tweaked the tools towards this too like
[00:03:35] uh um you know we don't have it but
[00:03:38] imagine you had like this uh user
[00:03:42] feedback question tool that some
[00:03:44] harnesses have. I don't think that would
[00:03:46] do something for deep because deep you
[00:03:47] want to send off and then check in later
[00:03:50] like 60 minutes later 45 minutes later
[00:03:53] and
[00:03:54] >> so okay when when we are trying a new
[00:03:57] model we tried it out internally a lot
[00:03:59] how did we get to the point where we
[00:04:01] realized actually this is a model that
[00:04:04] needs to be used in a different way it's
[00:04:06] not a replacement for the way that you
[00:04:08] work with opus
[00:04:11] >> I think when I first tried it and I mean
[00:04:14] there's been a lot of chatter right
[00:04:16] about 52 like Peter Steinberger famously
[00:04:18] he loves it loves it um and they all say
[00:04:22] it's a different beast and we tried it
[00:04:25] when it came out and
[00:04:28] it it just didn't feel like it it it
[00:04:32] fits the way I work so then I gave it an
[00:04:35] honest try again anticipating that I
[00:04:38] have to adjust my expectations and what
[00:04:41] we realized is that you
[00:04:45] you don't look at the assistant anymore.
[00:04:46] And a lot of the stuff that we've been
[00:04:48] saying about like this is how you should
[00:04:50] prompt, this is what we should do, and
[00:04:52] you know, uh uh uh the feedback loops
[00:04:54] and all of that, like a lot of that
[00:04:56] doesn't apply to it, but the results
[00:04:58] don't lie. So, it's it's kind of like
[00:05:01] they both might get to the same results.
[00:05:03] And I I can't even say that deep mode is
[00:05:06] always better or always writes the
[00:05:08] better code, but they get to equally
[00:05:11] good results, but different like Opus is
[00:05:13] trigger happy. It wants to run stuff. It
[00:05:15] It wants to get back to you and ask you
[00:05:17] and and Deep Mo just goes off and does
[00:05:21] something. And when when you see this
[00:05:24] and actually realize, oh, like
[00:05:27] this is another way to get to these
[00:05:29] results, but we need to treat it
[00:05:30] differently. And I think a lot of
[00:05:32] people, you know, internally like
[00:05:35] realized this and then uh uh Nico and
[00:05:37] Hesh started working on deep mode and
[00:05:39] make it, you know, optimized for this
[00:05:42] mode of working. So basically we don't
[00:05:43] say make it work exactly like Opus make
[00:05:46] it work like an assistant but make it
[00:05:49] work like a thing you can send off and
[00:05:50] it does stuff for you.
[00:05:52] >> Yeah. So a lot of times when you hear
[00:05:54] people talking about oh this model is
[00:05:55] better than this other model. It's a lot
[00:05:57] of people who were stuck on a model
[00:06:00] they're used to it and then they tried a
[00:06:01] new model but with the same kind of
[00:06:03] prompts and expectations that they were
[00:06:05] having with the old model and that
[00:06:07] doesn't work. And one of the things with
[00:06:08] agent modes is we're trying to get you
[00:06:10] out of that mindset so that if you're in
[00:06:12] some other tool, you just choose GBD52
[00:06:14] codeex from a drop down menu. You know,
[00:06:16] it's not really putting you in a mindset
[00:06:17] to do something different. And we've
[00:06:19] done a lot of different things. We've
[00:06:21] tried a lot of different things and
[00:06:22] we're trying to educate. One of the
[00:06:24] funny things though is by the time we or
[00:06:26] other people start to figure out what is
[00:06:28] the right way to work with a model, then
[00:06:29] there's a new model that comes out and
[00:06:31] everything is thrown up in the air. And
[00:06:34] I don't expect that pace to slow down.
[00:06:36] >> Yeah. I think
[00:06:39] mode, you know, if I could, I would make
[00:06:42] it so that if you change the mode, the
[00:06:45] app would look completely different and
[00:06:47] feel different. Like imagine
[00:06:50] in smart mode you have
[00:06:53] this type of font, you switch to deep
[00:06:55] mode and suddenly you know different
[00:06:58] type of font and and your prompt length
[00:07:00] is like at least 100 words or something
[00:07:02] you know like it it it should feel like
[00:07:05] text message versus writing a letter or
[00:07:07] something. And
[00:07:08] >> yeah,
[00:07:09] >> basically that's you know it's hard to
[00:07:12] pull this off but that's the feeling
[00:07:14] that it should be that you're doing
[00:07:16] something else like you're talking to a
[00:07:17] different model for different type of
[00:07:18] tasks and it's going to you need to
[00:07:21] approach it differently and it's hard
[00:07:25] you know this is the challenge with all
[00:07:26] AI products
[00:07:28] it's all text boxes and it's really hard
[00:07:31] to to to to convey
[00:07:35] like expectations
[00:07:38] in a text box when it's all just a text
[00:07:40] box, you know?
[00:07:41] >> Yeah.
[00:07:42] >> Yeah. And even if you don't use these
[00:07:44] things, right, they still are so magical
[00:07:47] and they often work.
[00:07:48] >> Yeah. But yeah, that's the that's deep
[00:07:51] mode. And I think we hinted at this. We
[00:07:53] recorded the last episode two weeks
[00:07:55] before. So a week before deep mode, and
[00:07:58] we said, you know, the subtitle was the
[00:08:00] system is dead, long live the factory.
[00:08:03] And that was already based on deep mode
[00:08:06] in some because we were playing around
[00:08:08] this. And once we started playing around
[00:08:10] with deep mode, it it became obvious
[00:08:13] that oh wow, like if the models are
[00:08:16] getting in going into this direction
[00:08:19] where they go for longer and further,
[00:08:22] you know, finally living up to the
[00:08:23] promises, let's say, of the last two
[00:08:25] years, then the assistant model of
[00:08:28] having a
[00:08:29] >> you make it sound as though these things
[00:08:31] aren't amazing. It's like
[00:08:33] >> Yeah. Yeah. Yeah.
[00:08:34] >> It's not that they haven't delivered on
[00:08:35] promise. It's like, oh, these are
[00:08:37] wondrous things.
[00:08:38] >> They're amazing. But I think I think
[00:08:39] last
[00:08:40] >> so in to the amazingness.
[00:08:42] >> Yeah. But but I mean I guess my point
[00:08:45] also is that I said the opposite things
[00:08:48] of what I'm saying right now. Like my
[00:08:49] view changed. Like last year on this
[00:08:52] very podcast I said like you know like
[00:08:55] ProTool for power users. like it's a
[00:08:58] drill and you have to hold it right and
[00:09:00] you have to kind of make sure you prompt
[00:09:02] it and back and forth and feedback loops
[00:09:04] like a lot of like how you manage these
[00:09:06] models and I'm not saying that this is
[00:09:08] dead but I'm saying that 52 codec shows
[00:09:11] the promise of wow like now you write a
[00:09:16] proper prompt then off it goes and it
[00:09:18] comes back with a surprising result and
[00:09:22] >> I think that's a trend of like
[00:09:26] imagine Imagine if codeex 55 whatever is
[00:09:30] just like 10% more accurate in what it
[00:09:33] like how reliable it is in doing this
[00:09:36] then I think you have to wonder like why
[00:09:39] only have one running at a time why
[00:09:41] watch it in a sidebar you know we'll get
[00:09:44] to this in a second like it just doesn't
[00:09:46] feel like the thing you would do like
[00:09:49] start acing tasks that take 45 minutes
[00:09:53] and then just watch them while they do
[00:09:56] stuff even if they don't need your
[00:09:57] input. So I think that's you know how we
[00:10:01] started with like the the assistant is
[00:10:03] there long live the factory because
[00:10:05] you want to kick off many of these and
[00:10:08] optimize for running them a long time
[00:10:10] and finally the models are catching up
[00:10:13] to this idea of you know hey you can
[00:10:17] just spawn a swarm of these or something
[00:10:20] or or different tasks and and check on
[00:10:23] them once they're done. Um.
[00:10:26] >> Yeah.
[00:10:26] >> Yeah.
[00:10:27] >> All right. So, let's talk about what
[00:10:29] we've done in our codebase and how
[00:10:32] you're changing how you prompt to work
[00:10:35] with deep mode. What's different?
[00:10:38] >> Um, I mean, I'm quoting you. I think we
[00:10:42] well we we kind of optimized
[00:10:45] a lot of our dev tooling for agents over
[00:10:48] the last few months which is something
[00:10:50] that I guess everybody is doing but
[00:10:51] basically um we added more skills for
[00:10:55] how to do things in our codebase that
[00:10:57] the agent can then use and do stuff like
[00:11:00] the simple example I I um added a skill
[00:11:04] so it knows about how we release our web
[00:11:07] server and how we release uh our
[00:11:10] clients. So if I have a bug, I can ask
[00:11:13] um like help me figure out why this
[00:11:15] wasn't deployed or you know what's the
[00:11:17] current live version. It then loads the
[00:11:18] skill and knows how to do it. And it's
[00:11:21] just the more you accumulate of these
[00:11:24] skills, the more it knows how to
[00:11:27] navigate in stuff and you don't have to
[00:11:29] prompt it that much or provide that
[00:11:31] stuff. It feels like skills are the
[00:11:36] solution to this general problem of I
[00:11:38] want to give the agent a little bit more
[00:11:40] help in this common thing I do and it's
[00:11:42] really stuck. It's stuck a lot more than
[00:11:44] other things. They're not completely the
[00:11:46] same, but like MCPs or custom commands
[00:11:49] or custom sub agents or
[00:11:51] >> all these other things. It feels like
[00:11:53] skills that as an abstraction has really
[00:11:56] stuck. Yeah, it's so I don't know who
[00:12:00] tweeted it, but somebody said something
[00:12:01] like walk the like if you do something
[00:12:04] with the agent where you say like use
[00:12:07] the GH tool to analyze the build failure
[00:12:09] on GitHub and then do blah blah blah and
[00:12:11] you walk it through
[00:12:13] you know how to solve a problem with
[00:12:15] your tooling at the end of a
[00:12:16] conversation you can then often say now
[00:12:18] build me a skill like take everything
[00:12:21] you learned about this solving this
[00:12:23] problem and put it in a skill and we
[00:12:26] have in AMP a builtin skill that's good
[00:12:29] for creating skills. So it can load the
[00:12:32] skill and then figure out where to put
[00:12:33] the skill and how to write it. Um and
[00:12:36] that's been huge like I mean let's start
[00:12:40] at like the
[00:12:42] one end of the spectrum. So the the
[00:12:45] lowlevel spectrum we have a T-max skill
[00:12:48] right and that basically explains how to
[00:12:50] use T-Max in our codebase. And that
[00:12:54] means here's how you can test the CLI
[00:12:55] using T-Max like our AMP TUI. And it for
[00:12:58] example has something in it that is not
[00:13:01] 100% reliable, but it often helps which
[00:13:04] is our TUI needs to be killed with
[00:13:07] double control C. You have to hit it
[00:13:10] twice. And the agent always got it
[00:13:13] wrong. So then I put it in this skill.
[00:13:15] It's like if you're testing the CLI,
[00:13:16] remember to do double control C. And
[00:13:19] it's just that stuff accumulates and
[00:13:22] compounds and then you don't have to
[00:13:24] prompt it. So now when you ask it to
[00:13:26] test the CLI, you can see it often. Oh,
[00:13:29] there's something running double CC or
[00:13:32] you know so or I I I this is the command
[00:13:34] I run and then the output is here or
[00:13:38] that's that's on one end of the
[00:13:39] spectrum. Then we have skills about um
[00:13:44] G-Cloud stuff which is funny like how to
[00:13:48] use our G-Cloud command to hosted on uh
[00:13:52] GCP Google's cloud and I talked with Tim
[00:13:56] about this yesterday
[00:13:58] where we said no two days ago where we
[00:14:00] said man like I never love G-Cloud like
[00:14:05] it felt you know like the CLI feels hard
[00:14:07] to use and you would use like a
[00:14:09] different log viewer and you know
[00:14:11] Prometheus and Grafana and whatnot
[00:14:13] because they're easier to use. And now
[00:14:15] with agents
[00:14:16] >> does not matter that much. I'm just like
[00:14:19] here's an error message. The user said
[00:14:21] this request failed and then I said to
[00:14:23] the agent use G-Cloud and figure out
[00:14:26] this
[00:14:26] >> get the logs and then you can see rip
[00:14:29] through G-Cloud commands. And it's you,
[00:14:33] we'll talk about this, but it made me
[00:14:35] think like
[00:14:37] what is software? Like if you build a
[00:14:40] web dashboard and then I can give my
[00:14:42] agent a skill that says here's how you
[00:14:44] use G-Cloud and then it figures out how
[00:14:46] to do the most complex log analysis
[00:14:49] queries.
[00:14:50] >> Like why would I go to the web, you
[00:14:53] know?
[00:14:54] >> Yeah. Um and the G-Cloud CLI is amazing.
[00:14:57] I
[00:14:57] >> Yeah. Yeah. It's super regularly see it,
[00:14:59] you know, run through logs and or audit
[00:15:01] logs. Yeah.
[00:15:02] >> Um, so
[00:15:04] >> one of the things with AMP is it's
[00:15:06] connected amco.com and you have all
[00:15:07] these shared threads. So I want to
[00:15:09] actually show something that we'll be
[00:15:10] shipping soon, which is the ability to
[00:15:14] see what are all of the skills that
[00:15:17] you've been using on your team.
[00:15:19] >> So this is just looking through your
[00:15:20] threads. It's a little slow, so it's
[00:15:22] only showing the last day for our team,
[00:15:24] but uh these are the most common skills
[00:15:25] we're using. And even just looking at
[00:15:27] this, we've been able to see, oh, hey,
[00:15:30] you know, this this G-Cloud skill, it's
[00:15:32] only been used, you know, one time in
[00:15:33] the last uh day, but you know, other
[00:15:35] people are using the BigQuery a lot
[00:15:37] >> today. I was going to say, oh, yeah, the
[00:15:39] BigQuery skill is
[00:15:41] >> it's amazing,
[00:15:42] >> man. It's I think maybe I don't it's
[00:15:46] sensitive data obviously but I think
[00:15:49] this would be the biggest
[00:15:52] argument to say stop copy and pasting
[00:15:56] stuff to and from JGPT it's all like
[00:16:00] this is this is this is it man like you
[00:16:03] ask it hey when did how many users use
[00:16:06] this feature blah blah blah use big
[00:16:08] query and it just goes off it finds out
[00:16:10] what the name of the tables are and it
[00:16:12] queries stuff and it it's really good at
[00:16:14] SQL. Um,
[00:16:17] yeah.
[00:16:18] >> Yeah.
[00:16:18] >> How many people use Ralph? It's just
[00:16:20] Tim. No,
[00:16:22] >> let's see. 23 times today.
[00:16:26] >> Yeah.
[00:16:27] >> Yeah.
[00:16:27] >> Code review. That's interesting. Yeah.
[00:16:29] >> So, we'll ship this.
[00:16:30] >> Yeah. So, so skills is, you know,
[00:16:32] skills, that's one end of the spectrum.
[00:16:34] The other thing to mention is um we
[00:16:37] optimized our we have one command now to
[00:16:40] run all of the tests called PNPM test
[00:16:43] and it's very easy to remember and it
[00:16:45] uses cache results so you can run it you
[00:16:48] know five six times in a row and if you
[00:16:50] hadn't changed anything in one specific
[00:16:53] package it um you know doesn't run the
[00:16:55] test and
[00:16:56] >> okay so this sounds like basil we must
[00:16:58] have used Basil this big hulking
[00:17:01] heavyweight thing that's perfect for
[00:17:02] this because there's no way we could
[00:17:04] right? Like a caching test hardness on
[00:17:06] our own, right?
[00:17:07] >> Yeah. I mean, I think some people are
[00:17:10] going to hate me for this, and I have
[00:17:12] one specific person in mind who's going
[00:17:13] to hate me for this, but I think I feel
[00:17:15] like agents are not a confirmation that
[00:17:19] these complex build tools and
[00:17:21] reproducible builds will win. Like, it's
[00:17:23] just
[00:17:25] I, you know, like I think they they're
[00:17:27] really good at using dumb tools, you
[00:17:29] know, like you don't need heavy crazy
[00:17:31] tools and PMP test. It's just you say
[00:17:33] this is the one command you should
[00:17:35] always run and the command itself then
[00:17:38] we'll give you the output and whatnot
[00:17:40] >> but that's it and if if you don't need
[00:17:42] like a lot of the basil stuff around it
[00:17:44] and like the verbose output and whatnot
[00:17:47] >> certainly not at our scale we have 19
[00:17:48] people coding on AMP
[00:17:50] >> that's true
[00:17:51] >> 19 people at AMP
[00:17:53] >> probably pretty good at starark so that
[00:17:54] would be nice if you are in basil but we
[00:17:57] you know Tim Culverhouse and our team
[00:17:59] built it and he also
[00:18:01] >> optimized the hell out of a lot of our
[00:18:02] tests and our uh seme check. And this
[00:18:06] brought us to an interesting thing as
[00:18:07] we're making our codebase into more of a
[00:18:09] factory and getting reliable feedback
[00:18:12] loops. Um you might think that the human
[00:18:16] dev experience would not degrade. Um you
[00:18:19] know after all it should be strictly
[00:18:21] better. But actually, in order to get a
[00:18:24] really good command that runs spelt
[00:18:27] check for our speltkit web app to make
[00:18:29] that really fast, Tim basically built a
[00:18:32] whole new implementation of of spelt
[00:18:34] check in Zigg. It's called Zveltch
[00:18:36] check. It's open source. You can see it
[00:18:37] on the AMP code GitHub. And turns out it
[00:18:40] actually did regress using speltkit in
[00:18:44] VS Code for us a bit. And we had this
[00:18:48] difficult decision- which is more
[00:18:50] important to preserve the human dev
[00:18:51] experience or to preserve the agent dev
[00:18:53] experience and I think about half of us
[00:18:55] are in VS code and the other half are in
[00:18:57] like neovim and stuff like that. So the
[00:19:00] people at Neoen were like, "What do you
[00:19:01] mean? I don't care about the VS Code dev
[00:19:03] experience." And we did end up briefly
[00:19:08] rolling it back eventually to preserve
[00:19:10] the human dev experience, but we are
[00:19:14] willing to really regress the human dev
[00:19:17] experience. And it's making me feel like
[00:19:19] I don't want to stay in VS Code with all
[00:19:22] of my extensions that I've been using
[00:19:23] for like the last seven years since I
[00:19:25] switched from Emacs. if that means that
[00:19:27] it's going to slow us down in making our
[00:19:29] codebase better for the agents. And
[00:19:31] that's this way in which once you have
[00:19:34] an agent in your codebase, if you make
[00:19:37] it if you optimize the codebase for it,
[00:19:40] then things can move faster because it's
[00:19:42] not just the human thing stays the same,
[00:19:43] that actually degrades and then it's
[00:19:44] more of an incentive to get away from
[00:19:46] the editor and then that gets you into a
[00:19:49] workflow where you can do a lot more
[00:19:50] parallelism if you're not in the editor
[00:19:52] and so on. So it's a snowball and we see
[00:19:53] it starting in our own code base.
[00:19:56] >> I mean it's it's as simple as
[00:20:01] for many many many many years it's oh
[00:20:04] the dev tooling is broken
[00:20:07] you know broken glass
[00:20:10] theory like broken window theory like
[00:20:12] don't let it get too broken. This is fix
[00:20:15] it as soon as possible. Dev tooling is
[00:20:16] so important. The best companies have
[00:20:18] the best deaf tooling. And what they
[00:20:19] mean is that a for a human it's the best
[00:20:22] tooling. But now you know basically AMP
[00:20:27] I don't know how many decades combined
[00:20:29] in experience we have in dev tooling but
[00:20:31] it's a lot. We're like, okay, this is
[00:20:33] not ideal for humans, but does not
[00:20:36] matter that much because the agent is
[00:20:37] calling this command a lot of times. And
[00:20:39] that that's huge that you think I don't
[00:20:43] care really about this and how readable
[00:20:45] it is, but the agent can read the lock
[00:20:47] file better than I can. You know, it's
[00:20:50] it's very very interesting.
[00:20:52] >> Yeah. You got to be willing to let go in
[00:20:55] order to
[00:20:56] >> Yeah.
[00:20:56] >> get the benefits of an agent.
[00:20:58] >> Yeah.
[00:20:59] >> And for us, it's an interesting
[00:21:01] question. who are we building for? And
[00:21:03] we've always wanted AMP to be on the
[00:21:05] frontier. We say everything is changing.
[00:21:07] And yeah,
[00:21:08] >> now that it seems like there's a lot of
[00:21:10] things that if you do those things in
[00:21:12] your codebase, you're going to be able
[00:21:14] to do a lot more with an agent. We want
[00:21:16] to exclusively make AMP for the people
[00:21:18] willing to put in that investment. And
[00:21:19] probably 99% of teams and codebases
[00:21:22] won't be willing to do that yet. We want
[00:21:24] to explore what happens with that 1% if
[00:21:27] they do. And if you put an agent in a
[00:21:29] codebase that was built for it, what can
[00:21:32] you do? And we don't know, but we think
[00:21:34] that you can go a lot further than what
[00:21:36] you can do today.
[00:21:38] >> So, should we get to the big big thing
[00:21:41] and say
[00:21:44] everything we just talked about, the
[00:21:45] summary of it is or the theme is
[00:21:50] I guess we said it last time, the
[00:21:52] assistant is dead, long live the
[00:21:53] factory. But what we meant last time and
[00:21:56] what we said last time is well you need
[00:22:00] to optimize your code base for these
[00:22:01] agents and they go longer and more
[00:22:04] autonomously
[00:22:05] but we didn't really focus on the system
[00:22:07] part that much and didn't spell it out
[00:22:10] but basically and you can do you can say
[00:22:13] the line but basically I'll I'll you
[00:22:16] know I'll start here and I say I think
[00:22:20] the time of
[00:22:23] you one-on-one with an agent in a
[00:22:25] sidebar
[00:22:27] going back and forth. I think that's
[00:22:29] coming to an end in in in with
[00:22:32] programming. I I think
[00:22:35] >> you looking at the code in a text editor
[00:22:38] and having it at the bottom or in the
[00:22:40] side and it sees like which files you
[00:22:43] have open and then you do this pingpong
[00:22:45] thing. That's exactly what we did for
[00:22:47] the last year, but it feels like this is
[00:22:50] not it anymore. This is
[00:22:52] >> done. This is not the future.
[00:22:54] >> So,
[00:22:55] >> and when we say coming to an end, what
[00:22:57] we mean is for the 1% of developers that
[00:23:02] want to be most ahead, that want to be
[00:23:05] coding like how everyone else will be in
[00:23:06] the future. For that 1%,
[00:23:10] >> they only need to do the last 20% of
[00:23:13] their work in the editor. And that's
[00:23:16] with their current workflow. And we
[00:23:18] think we can get that to 10% or 1% or
[00:23:21] something. So, we're not trying to build
[00:23:23] something for everyone, but for the
[00:23:25] people that use AMP and for what we
[00:23:27] created AMP to do, which is explore the
[00:23:29] frontier of software development, we
[00:23:31] will be killing our editor extension,
[00:23:34] the AMP VS Code extension and cursor and
[00:23:36] so on. We're going to be killing it. And
[00:23:39] we're going to be killing it because we
[00:23:40] think it's no longer the future. We
[00:23:42] think the sidebar is dead. And let's
[00:23:44] walk through why
[00:23:46] >> and then when
[00:23:49] this it's also kind of funny. So why we
[00:23:54] think that that mode of working limits
[00:23:57] your ability to parallelize your work
[00:24:00] with agents, which is the best way
[00:24:03] you're going to get more out of agents
[00:24:04] over the next few months. It holds you
[00:24:06] back. Second, it's a crutch. When you're
[00:24:10] in the editor and you're working in the
[00:24:12] sidebar, you, the human, the slow human,
[00:24:16] he's got better things to do anyway, are
[00:24:17] the feedback loop. You might not know
[00:24:19] it. You might not realize it. It might
[00:24:22] you be in smart mode and it's doing
[00:24:23] incredible things, but you still are the
[00:24:25] feedback loop. And we want to get you
[00:24:28] out of that role. We want you to be
[00:24:31] proactive about setting up the automated
[00:24:33] feedback loops, the the test commands,
[00:24:36] the build commands, the skills, the so
[00:24:38] on so that you don't need to do that.
[00:24:40] That's another way how you're going to
[00:24:41] get so much more out of an agent over
[00:24:44] the next few months. And there's a third
[00:24:47] thing too which is AMP is not trying to
[00:24:50] be for everyone. And if we do not make
[00:24:54] this kind of change boldly, then a month
[00:24:57] from now, two months from now, not only
[00:25:00] are we going to be doing all of you a
[00:25:01] disservice by letting you through our
[00:25:04] product
[00:25:05] use a way of using agents we don't think
[00:25:07] is the future. We feel like we're not
[00:25:08] doing our job then. But also our user
[00:25:10] base will start to become selected not
[00:25:13] for as it is today the people that are
[00:25:15] building on the frontier in the way of
[00:25:18] the frontier but our user base will be
[00:25:19] selected for the laggers and that will
[00:25:22] make it even harder for us to change. So
[00:25:26] that is why we will be killing the AMP
[00:25:28] editor extension. Now when will we be
[00:25:32] killing it? Well, it will selfdestruct
[00:25:36] in
[00:25:38] about
[00:25:39] 60 days
[00:25:41] from now.
[00:25:44] >> We don't know, maybe less. We don't know
[00:25:47] exactly when. We'll put the timer.
[00:25:49] You'll see it. It'll tell you. We don't
[00:25:51] know exactly what will replace it
[00:25:53] because,
[00:25:55] well, we are trying a lot of stuff. We
[00:25:58] think that there's something that's
[00:25:59] higher level that can work out, but we
[00:26:01] are confident that no matter what, we
[00:26:03] need to replace it. and we want to burn
[00:26:06] the boats. So, you've got some more time
[00:26:09] to keep using it. We really strongly
[00:26:11] encourage you in the meantime to switch
[00:26:14] to the AMP CLI. And if there are things
[00:26:17] where you you switch the CLI, you really
[00:26:20] miss it from VS Code, let us know. We'd
[00:26:22] love to hear that feedback. And if
[00:26:24] anything, you know, we need to hear that
[00:26:25] feedback because we want to keep you on
[00:26:27] the frontier with us. So, that is the
[00:26:32] big news. And I know that a lot of you
[00:26:34] will probably ask, well, couldn't we
[00:26:36] keep it around but not maintain it or
[00:26:42] could dep prioritize it but keep it
[00:26:43] running or
[00:26:45] >> things like that. And it's just a focus
[00:26:48] thing for us. We can't do that without
[00:26:50] taking our eye off the thing that you
[00:26:51] all think is 100 times more important.
[00:26:54] Yeah, I think it's important to say that
[00:26:58] maybe our sole purpose
[00:27:01] with AMP, we say like we want to let
[00:27:03] software builders harness the full power
[00:27:06] of artificial intelligence. And that
[00:27:09] means right now staying on the very edge
[00:27:12] of what's possible with artificial
[00:27:14] intelligence. And if you think about
[00:27:17] this as a frontier or some a moving
[00:27:20] target, which it is, like these models
[00:27:22] change, there's new releases all the
[00:27:23] time. You got to keep up to figure out
[00:27:26] what the best possible thing is. And
[00:27:28] we're a small team. We cannot keep up
[00:27:32] while at the same time maintaining
[00:27:34] something that that was the
[00:27:36] state-of-the-art a year ago. Like, we
[00:27:38] got to keep moving fast. And one of our
[00:27:40] superpowers is that we're dogfooting the
[00:27:42] products all the time. who shipping
[00:27:44] fixes in minutes when users report them.
[00:27:47] And if the whole team is and it that's
[00:27:51] true they've less and less do they use
[00:27:53] the VS Code extension um that superpower
[00:27:57] fades away. So we got to keep focusing
[00:27:59] on what the next thing is and not what
[00:28:01] the state-of-the-art was.
[00:28:02] >> Yeah. And if we went and hired another
[00:28:04] 10 people to support all the things that
[00:28:06] we have killed, well then we wouldn't be
[00:28:08] a small team anymore.
[00:28:09] >> Yeah.
[00:28:09] >> And Yeah.
[00:28:11] >> Yeah. It's the wrong move, which gets us
[00:28:14] to the bigger picture thing here, which
[00:28:17] you touched on a bunch of times. I mean,
[00:28:18] we've said everything is changing so
[00:28:20] many times in 10 episodes, but
[00:28:24] right now, the way I think about it, and
[00:28:26] then we can talk about your CEO
[00:28:28] perspective on this is the way I think
[00:28:31] about it is imagine if the switch from
[00:28:35] personal computer to the internet to
[00:28:37] mobile happened in a year.
[00:28:41] you you you're like, "Oh, personal
[00:28:43] computers." So, we got to do personal
[00:28:44] software and we distribute it, you know,
[00:28:46] shrink wrapped software. We distribute
[00:28:48] it to customers. Cool, cool, cool. I'm
[00:28:50] going to do this. I'm And also, I'm
[00:28:51] going to build a factory to shrink wrap
[00:28:53] software and I'm going to build it, you
[00:28:54] know, that burns CDs and DVDs and
[00:28:57] whatnot. And then four months later, we
[00:28:59] have the internet. And now it's like,
[00:29:00] why should we shrink wrap software when
[00:29:02] they can type in, you know,
[00:29:04] ww.mmyapp.com?
[00:29:07] Why should we do this? And then six
[00:29:09] months later the mobile, you know, the
[00:29:11] app store happens and mobile and why why
[00:29:15] make people go to this when they can
[00:29:16] download an app and like all of this is
[00:29:20] happening right now with software. And
[00:29:22] to give you like a really short
[00:29:24] two two condensed examples. One was this
[00:29:28] was a few months back. So, I think it
[00:29:30] was Jeffrey Lit who said he he tweeted
[00:29:34] something like he was in a hotel gym and
[00:29:37] he wanted to do a workout. So, he asked
[00:29:39] I think back then it was Claude and he's
[00:29:42] like, "Hey Claude, I'm in a hotel gym.
[00:29:44] Here's like photos or something like
[00:29:45] here's the equipment I have available.
[00:29:47] Make me a personalized uh workout plan."
[00:29:51] Now, if one of you has ever worked out,
[00:29:53] there's multi multiple apps where you
[00:29:55] can do this. you can say generate me
[00:29:57] work and you type in the the equipment
[00:29:59] and whatnot and it generates something
[00:30:00] for you. But with cloud you just send it
[00:30:03] photos and say like this is what I want
[00:30:05] to do free text and it comes back. And
[00:30:08] what claude did in the web was um it it
[00:30:11] it generate like a little HTML thing
[00:30:13] where you can check off reps and sets
[00:30:15] and whatnot. And I was like okay boom
[00:30:17] emerging software UI and we all know
[00:30:19] it's not super reproducible. It has its
[00:30:21] limits but then that's already something
[00:30:24] interesting to think about. But then I
[00:30:26] think it was Ryan Florence who does he
[00:30:28] do RemixJS? Like he's he's big in the
[00:30:31] JavaScript world, I think. And he's
[00:30:33] like, "Oh, that's cool. Here's what I
[00:30:35] do." And he posted a video where he's in
[00:30:38] his home gym and he just used OpenAI's
[00:30:41] voice mode and it's like, "Hey, Chachi
[00:30:44] PT, I'm here in this room. Walk me
[00:30:46] through a workout." And then Chachi was
[00:30:48] like, "Okay, I first want you to do one
[00:30:49] set. Let me know when you're ready." And
[00:30:50] he's like, "I'm ready. Okay, go. Let me
[00:30:53] know when you're done with the set." And
[00:30:54] he's like, he does the set and then he's
[00:30:56] like, I'm done with the set. And then Ch
[00:30:58] was like, take a 60-second pause. And
[00:31:00] then he's like, I'm ready to go again.
[00:31:02] And it the everything disappeared. It
[00:31:04] was just the voice, you know. So that's
[00:31:07] not all of this.
[00:31:08] >> Is that software?
[00:31:10] >> Exactly. Is that software?
[00:31:11] >> The computer letting you guiding you
[00:31:12] through that workflow. Is that
[00:31:15] >> software?
[00:31:16] >> Is it software? But there's no code, is
[00:31:18] there? You know, like the code was it's
[00:31:20] gone. And then the other anecdote here
[00:31:22] is and multiple people have gone through
[00:31:24] it is I thought okay I'm also going to
[00:31:27] set up the uh open claw cloudbot moldbot
[00:31:30] uh the pi assistant like I'm going to
[00:31:32] set this up for me and my wife so we can
[00:31:34] text it to manage our shopping list and
[00:31:36] then I thought
[00:31:38] why why our shopping list in to-d doist
[00:31:42] a to-do application a software as a
[00:31:45] service tool like with many integrations
[00:31:47] I thought why do I need to-d doist
[00:31:49] because the shopping list is usually 10
[00:31:51] 15 items. The assistant can just write a
[00:31:54] text file somewhere and use that as
[00:31:57] memory or keep it in the context window.
[00:31:59] It'll be fine. But then I thought, yeah,
[00:32:02] but maybe if I want like a different
[00:32:04] view of the data that you can't do in a
[00:32:06] conversation
[00:32:08] and I don't have answers here, but I'm
[00:32:10] saying all of this stuff is melting, you
[00:32:13] know, and and basically the whole
[00:32:16] premise of the last 20 years to zoom out
[00:32:19] of I'm going to find software with a
[00:32:22] market with a customer base and I'm
[00:32:27] going to find a niche and then I'm going
[00:32:28] to sell to these customers and then I'm
[00:32:31] to scale it up. Like that was the
[00:32:32] playbook for most, you know, find
[00:32:36] something that works in a given market,
[00:32:39] maybe take funding techn scale it up and
[00:32:41] make it bigger. Like that was the
[00:32:42] playbook for last 20, 30 years. But now
[00:32:45] the market that you're selling to is
[00:32:47] changing every three or four or six
[00:32:49] weeks. So the only way to not die and
[00:32:52] get stuck is to constantly reinvent
[00:32:54] yourself. And that's the, you know,
[00:32:57] that's that's what we're doing here.
[00:32:58] like we built the VS Code extension, we
[00:33:01] shipped it and now we're thinking it's
[00:33:03] the wrong market. Like it's the wrong
[00:33:05] it's holding us back. Like this stuff
[00:33:07] has moved on. We got to move with it.
[00:33:10] So that's my that's my nonCEO opinion,
[00:33:12] but you have like a more CO
[00:33:15] view of this with I mean you mentioned
[00:33:18] in our notes that sales team, right? Or
[00:33:22] MCP or business compliance like how do
[00:33:24] you think about it?
[00:33:25] >> Yeah. So yeah, Thoren walked through why
[00:33:30] you got to be really humble and just
[00:33:33] prepare your company for change. And for
[00:33:35] us on AMP, we have 19 people. Every
[00:33:37] single person uses AMP. Every single
[00:33:39] person codes every single day. And
[00:33:43] there's a question of, you know, AMP has
[00:33:46] been going really fast recently. Should
[00:33:48] we take that? Oh man, we've got magic in
[00:33:51] a bottle. Let's capture that. Let's take
[00:33:54] that product. Let's make it enterprise
[00:33:56] ready. Let's go hire a sales team. Let's
[00:33:58] go hire a marketing team. Let's go buy a
[00:34:00] Super Bowl at like
[00:34:02] >> all those things. And that makes sense
[00:34:07] if a few assumptions hold. That makes
[00:34:10] sense if the product will still be
[00:34:14] competitive in a year without completely
[00:34:18] changing it. That makes sense if
[00:34:21] you can retain a customer with a high
[00:34:25] degree of certainty. That makes sense if
[00:34:28] you can train up a sales rep in a
[00:34:30] certain amount of time and their
[00:34:31] training won't become obsolete. And
[00:34:35] there's so many other assumptions that
[00:34:36] rests on. And none of them hold right
[00:34:39] now in particular when you're building a
[00:34:42] coding agent. And so everything we talk
[00:34:45] about needing to change and be willing
[00:34:47] to have good ideas be swept away by the
[00:34:50] models, it applies to all kinds of
[00:34:52] software like weightlifting software and
[00:34:54] to-do software, but it applies even more
[00:34:57] for people building coding agents like
[00:35:00] us because it is the most competitive
[00:35:02] time and it is right on the frontier. It
[00:35:04] is so exposed in a really exciting way
[00:35:07] to technological progress. So when we
[00:35:10] look at every other person building a
[00:35:12] coding agent, every other company
[00:35:13] building a coding agent, one of our
[00:35:16] competitive advantages is we want to be
[00:35:19] the most radically on the frontier one.
[00:35:22] We want to be the fastest moving one. We
[00:35:25] want to be one that takes the biggest
[00:35:26] risks, that pushes our users and learns
[00:35:29] the most from our users when we're
[00:35:31] trying new things. We want to rip things
[00:35:34] out way faster than anyone else. We want
[00:35:36] to carry less baggage than anyone else.
[00:35:39] And you can only do that if you make a
[00:35:41] lot of decisions. And you can't you
[00:35:44] can't say, "Okay, we'll leave the VS
[00:35:45] Code extension in because a lot of
[00:35:46] people like it." If you start to
[00:35:50] >> allow things to slip, then everything
[00:35:53] falls apart and it's a very you got to
[00:35:56] be paranoid all the time. So, you know,
[00:35:58] one thing Thors has always said is have
[00:36:00] this mortal fear of just being disrupted
[00:36:03] by new tech or a new model or, you know,
[00:36:06] something like that. And there's there's
[00:36:08] nothing sacred here. We are always
[00:36:11] vigilant.
[00:36:13] >> Yeah. I mean,
[00:36:16] let's talk about Pi, Mario's
[00:36:20] um Mario Zner's assistant or agent,
[00:36:23] >> an open claw, which I think is
[00:36:25] >> Yeah. you wonder like how do they make
[00:36:28] it and it's a really good example
[00:36:31] because it is in some ways from a team
[00:36:35] size and structure point of view even
[00:36:37] more extreme than AMP. So Mario Zechner
[00:36:40] is awesome. He made PI which is like a
[00:36:44] general agent and he made a coding agent
[00:36:46] on top of that that has four very basic
[00:36:49] tools. It has a great plug-in API so you
[00:36:51] can extend it. And then um Claudebot and
[00:36:55] then Moltbot and then Open Claw
[00:36:59] >> was built on that
[00:37:01] >> just showing the beauty and power of a
[00:37:04] general agent that's well done. You
[00:37:07] know, you could
[00:37:08] >> in theory have given a lot of the same
[00:37:09] tools that like OpenClaw has to any
[00:37:11] coding agent or AMP or claude code. You
[00:37:15] know, it was this was just such a simple
[00:37:17] agent. And um you know, Peter Sidberger
[00:37:20] made OpenClaw and they are both people
[00:37:23] that have really strong opinions. They
[00:37:26] have incredibly
[00:37:28] uh you know, strong, I think,
[00:37:30] constitutions and visions about what
[00:37:31] they want to build. They have a great
[00:37:33] degree of independence. They're not
[00:37:34] building it. It's some VCbacked company
[00:37:36] with a big sales team with quarterly
[00:37:38] targets to hit with salespeople that are
[00:37:41] saying, "Oh man, we got to add this
[00:37:42] feature or else we're I'm not going to
[00:37:44] make this sale and I'm going to quit and
[00:37:46] all that." And those are the kinds of
[00:37:48] incentives that start to dole the
[00:37:50] product edge of a company. No matter how
[00:37:53] hard you try to avoid that, if you let
[00:37:55] that slip just a little bit. So, I don't
[00:37:57] think it's a surprise that this
[00:37:59] incredible thing that took over the
[00:38:01] world. Everywhere I go, I hear about it.
[00:38:03] >> Like, I've been Yeah. I was at Stanford
[00:38:06] campus uh today and every single person
[00:38:08] I talked to brought it up and so many of
[00:38:10] them had used it and I asked them
[00:38:12] questions to make sure they had actually
[00:38:13] used it and they passed.
[00:38:15] >> Yeah.
[00:38:16] >> It couldn't have come from
[00:38:18] just, you know, a Google or a big
[00:38:21] company or something like that. It's
[00:38:22] also incredibly risky and irresponsible
[00:38:24] to use. the liability that a company
[00:38:27] would take on if they were to ship it is
[00:38:29] just so high
[00:38:30] >> and you know that is that is one one
[00:38:33] extreme and we want to be as close to
[00:38:36] that extreme as possible. Uh and that
[00:38:40] that just requires making these hard
[00:38:41] decisions like killing the VS Code
[00:38:43] extension.
[00:38:44] >> Yeah. And I mean even those two
[00:38:49] that's not it right. Like that's not the
[00:38:51] final I I would I guess they will both
[00:38:54] say this. They won't say like, "Yep,
[00:38:55] you'll be using Open Claw 3 years from
[00:38:58] now." Like, none of them would say this.
[00:39:00] Um,
[00:39:01] >> I don't think they had any idea it would
[00:39:02] take off in the way that it did.
[00:39:04] >> But even even if like
[00:39:09] >> the situation we're in is
[00:39:12] every
[00:39:13] three two to six months and it's random.
[00:39:16] You get the rug pulled out from under
[00:39:18] you with something new. And when you
[00:39:21] know this is going to happen and by now
[00:39:23] everybody should know this. Are you
[00:39:24] going to sit down on the rug and put up
[00:39:26] your Lego pieces and you know and and
[00:39:29] say like this is this is what I'm
[00:39:30] building or do you want to keep the Lego
[00:39:32] pieces in your hands or in your pockets
[00:39:34] knowing that the rug is going to be
[00:39:36] pulled and you got to jump on the next
[00:39:37] rug and I think that's exactly what
[00:39:40] we're doing with AMP and this is also to
[00:39:42] zoom out like yesterday even
[00:39:45] people you know like let's zoom out
[00:39:48] cursor they build an amazing business
[00:39:50] they went to
[00:39:51] >> like a historically incredible business
[00:39:54] incredibly recorded.
[00:39:57] >> Really smart people.
[00:39:59] >> Incredible.
[00:39:59] >> And I think they're growing incredibly
[00:40:01] fast still.
[00:40:02] >> Yeah. Yeah, they are.
[00:40:04] >> But, you know, now people are saying,
[00:40:08] "Guys, VS Code is holding you back." You
[00:40:11] know, like this is not it. Like, you
[00:40:13] you're being held back by being in the
[00:40:15] editor. And this is a year after I said
[00:40:20] on Sourcecraft stage like I think the
[00:40:22] editors that like I think that the its
[00:40:24] days are numbered and now the fastest
[00:40:27] growing startup in the history is being
[00:40:29] told you're being held back and and now
[00:40:32] you have Pi and OpenClaw with just
[00:40:35] Telegram interfaces and Asians running
[00:40:37] autonomously somewhere else. And it just
[00:40:40] goes to show like this is a crazy crazy
[00:40:43] crazy time where you cannot rest on your
[00:40:46] laurels and
[00:40:48] the whole point is like where will the
[00:40:51] value acrew you know where will
[00:40:53] >> and I don't think cursor is resting on
[00:40:54] its laurels either. Yeah, they they are,
[00:40:56] you know. Yeah, I think it's just a good
[00:40:59] example of um you know like basically
[00:41:04] this is straight from sales
[00:41:05] conversations from last year where
[00:41:07] people were saying [snorts] um oh cursor
[00:41:09] made co-pilot look old you know like it
[00:41:13] made it look outdated and copilot once
[00:41:15] was the king of the you know king of the
[00:41:17] world we can talk about you know what
[00:41:19] Microsoft did or didn't do but they were
[00:41:22] the number one thing for a long time and
[00:41:24] then cursive made them look gold and And
[00:41:26] then half a year later, Cloud Code, AMP,
[00:41:29] and agents made cursor look old and then
[00:41:32] they had to catch up. And now people are
[00:41:35] saying like, "Yeah, but the editor, you
[00:41:38] know, like is that still a thing?" So
[00:41:40] now
[00:41:42] it all looks old and we're starting to
[00:41:44] figure stuff out.
[00:41:46] >> It's wild. And the humbling lesson is as
[00:41:49] soon as you see the trend going in a
[00:41:52] certain direction,
[00:41:53] >> it goes way faster than it ever went in
[00:41:56] the past. And it goes way faster than
[00:41:59] you think. And
[00:42:00] >> yeah,
[00:42:00] >> there have been a lot of people that are
[00:42:03] really good at a particular
[00:42:06] stop along the train of like AI change
[00:42:10] >> and they're really good and then they
[00:42:11] kind of stay there and I can understand
[00:42:13] why they stay there because they get a
[00:42:14] lot of
[00:42:15] >> praise and turns out, you know, the
[00:42:17] first day they talk about it, they're
[00:42:18] talking to the early adopters and then
[00:42:21] >> uh two months later they're talking to a
[00:42:23] hundred times more people, but it's not
[00:42:24] the early adopters anymore. They're on
[00:42:26] to a new thing. And
[00:42:27] >> we constantly just have this paranoia
[00:42:30] and we want to be ahead. We want to keep
[00:42:32] all of you
[00:42:33] >> ahead and we want to keep trying new and
[00:42:34] interesting things because the last
[00:42:36] thing the world needs is like the 10th
[00:42:39] coding agent or the 20th coding agent
[00:42:41] that's doing the same thing.
[00:42:43] I mean practical example of this I think
[00:42:48] half a year ago let's say in summer yeah
[00:42:51] summer last year there was all of this
[00:42:54] um
[00:42:56] what was it called the PRD driven spec
[00:42:58] driven you know like well this is the
[00:43:01] product like you you talk to it in this
[00:43:04] mode and you build up a spec and then
[00:43:06] the or PRD and then you have a PRD and
[00:43:10] then you do this and uh and and and Once
[00:43:13] you have the the list of to-dos, then
[00:43:15] you feed the to-do file to this and this
[00:43:17] is the product. Like this is the thing.
[00:43:20] And then it turns out, you know, with
[00:43:21] Opus or GPD52,
[00:43:25] a lot of that stuff isn't that
[00:43:27] necessary, you know, like I do in my
[00:43:29] work with agents, I still do this like
[00:43:31] analyze this and come up with a plan,
[00:43:34] but it's so far less structured than
[00:43:36] what people think. And I think if you
[00:43:38] had built that product where you hide
[00:43:40] the model and basically say like click a
[00:43:42] button, you know, like people were
[00:43:44] tempted or did this. They're like click
[00:43:46] the button to build the spec, click the
[00:43:48] button to build to-do list from the
[00:43:49] spec, implement the to-dos. I think that
[00:43:53] that just has to fall apart. And I think
[00:43:55] we've seen this with a lot of stuff. But
[00:43:57] >> yeah.
[00:43:58] >> Yeah.
[00:43:58] >> All right. That brings us to another
[00:44:01] thing in AMP that we think is dead. It's
[00:44:05] a, you know, it's dead, but long live
[00:44:07] it. It's
[00:44:08] >> Thirstston, I'll let you do the honors.
[00:44:11] >> How do I say this in the clearest way? I
[00:44:15] think maybe I'll walk back on this
[00:44:19] but I think right now that the time of
[00:44:25] manual context management is also coming
[00:44:28] to an end where for the last the
[00:44:32] majority of last year I've been saying
[00:44:33] that you need to be good at maning
[00:44:36] context management like managing the
[00:44:37] context window what do you put in um and
[00:44:40] then when do you create a new thread or
[00:44:42] conversation refer back to the old on um
[00:44:46] that gave you a lot of good results. But
[00:44:49] now I think with especially with GPD52
[00:44:54] I think
[00:44:56] it leads to really good results even if
[00:44:59] you don't do this and then it just puts
[00:45:03] into question like you know why do all
[00:45:05] of this other stuff if you can get to
[00:45:07] the same results.
[00:45:08] >> Yeah. And so you know you mean the study
[00:45:10] of manual cutex management is you have a
[00:45:12] thread it has a fixed size and if you
[00:45:14] want to go beyond that then you have to
[00:45:17] hand off and the abstraction that we
[00:45:19] originally had that a lot of tools still
[00:45:22] have of autoco compaction of making it
[00:45:25] seem like you don't need to care about
[00:45:26] it
[00:45:27] >> that
[00:45:28] >> like that actually
[00:45:31] is viable now.
[00:45:33] >> Yeah. I mean our whole thing is to say
[00:45:36] like we we changed our mount right. So I
[00:45:38] think I said for a long time auto
[00:45:41] compaction does not work because it
[00:45:43] degrades like signal gets lost and
[00:45:45] that's the the models get worse. But if
[00:45:49] you look at for example GBD52 with its
[00:45:52] inclination to always research
[00:45:55] and it's less trigger happy. If you just
[00:45:57] think about that, it's you have a
[00:46:00] longunning thread, then you do auto
[00:46:02] compaction and then GPD52 goes, let me
[00:46:05] research, you know, and then let's build
[00:46:07] up the other thing before I do
[00:46:08] something. Whereas Opus, it does
[00:46:11] something, you run out of context, do
[00:46:12] you autocompact, and it goes, let me do
[00:46:14] the first thing that comes to mind and
[00:46:16] run this command. And it kind of is,
[00:46:19] you know, that might lead to different
[00:46:20] results. And I think with Jubid 52,
[00:46:23] we're seeing how like the autoco compact
[00:46:27] way of hiding the context window is is
[00:46:30] getting more and more valuable. And if
[00:46:33] you look at
[00:46:35] Jat GPT and OpenAI and what customer
[00:46:39] base they have, I think it makes sense
[00:46:42] because Anthropic is less
[00:46:46] end consumer oriented I would say still.
[00:46:50] But JGBT never showed you the context
[00:46:52] window. Well, I think they started
[00:46:54] hiding it like two years ago. So I think
[00:46:56] the whole company is optimized for users
[00:46:59] expect us to have a single conversation
[00:47:01] on a single topic and I myself who knows
[00:47:03] what a conduct window is have been
[00:47:05] guilty of this where I have like one
[00:47:06] long running thread in Jad GPT over
[00:47:09] weeks and I in my mind I'm like what are
[00:47:12] they doing behind the scenes like I know
[00:47:14] I can see it that the agent loses
[00:47:16] information from the start but it still
[00:47:17] works really well for you know my use
[00:47:20] cases which is track my workouts or
[00:47:23] whatever it is and I I think
[00:47:26] that's that's where the arrow is
[00:47:28] pointing like it's it's not it's not
[00:47:30] pointing at manual threat management.
[00:47:33] I'm not saying we are there yet but it's
[00:47:36] where it's pointing.
[00:47:37] >> Yeah. And we're not saying that you can
[00:47:40] just have one thread you use it for
[00:47:41] everything. You still and actually it's
[00:47:44] even more important to when you start a
[00:47:46] thread have a really clear idea of what
[00:47:48] you want and what the outcome should be.
[00:47:51] >> Yeah.
[00:47:52] >> And that's what it can you know
[00:47:54] continue. But if you're doing to two
[00:47:55] totally different things, then that
[00:47:57] calls for two different threads.
[00:47:59] >> Yeah. I think of it as like
[00:48:02] a topic or a prompt or a task or
[00:48:05] something. A and that's the thing that
[00:48:08] unifies a lot of this. Uh and that you
[00:48:10] need to think about and it's the same
[00:48:12] thing that everybody's been saying on
[00:48:13] the internet like uh well turns out you
[00:48:16] can't give vague instructions to an
[00:48:18] engineer, you know, like make this make
[00:48:21] this feature nicer that that just
[00:48:22] doesn't work. like it will just people
[00:48:24] will do whatever they think is nice me.
[00:48:27] So you got to put effort into the first
[00:48:29] prompt. Um but then it yeah can be
[00:48:32] really impressive.
[00:48:34] >> Yeah.
[00:48:34] >> So again like
[00:48:37] >> stuff is changing.
[00:48:39] >> Yeah. [laughter]
[00:48:40] >> Yeah. So, you know, we're going to
[00:48:41] figure out how we can change the
[00:48:43] concepts of a thread and is there
[00:48:46] something above a thread that is
[00:48:49] actually a group of threads maybe that's
[00:48:52] tied to a certain repo and branch and
[00:48:53] commit or that has a theme or something
[00:48:55] like that.
[00:48:56] >> And what does that look like? And that's
[00:49:00] pretty fun to explore. And going back to
[00:49:04] some of the other decisions we made
[00:49:07] around
[00:49:08] like well we're gonna kill the editor
[00:49:11] extension.
[00:49:12] >> Yeah.
[00:49:12] >> That makes it easier for us to explore
[00:49:15] things like a new concept of threats.
[00:49:19] >> Yeah.
[00:49:19] >> Not having support for 17 different
[00:49:22] models means that we can explore what
[00:49:25] models are good at autocompaction and
[00:49:26] support it for two models and maybe even
[00:49:28] have a mode that is used in a different
[00:49:30] way. Maybe Opus 45 in smart mode will
[00:49:33] actually become interactive mode and it
[00:49:35] won't work like this and it'll be for
[00:49:37] when you're in there with a scalpel.
[00:49:40] >> Yeah,
[00:49:40] >> I you know, we we have so much more
[00:49:41] freedom to explore that because of all
[00:49:43] the other times we've said no and
[00:49:45] because of the other things that we've
[00:49:47] killed. So, with that said, I do want to
[00:49:49] just say thank you to AMP users for
[00:49:52] coming along on this ride with us. It is
[00:49:56] bumpy. It's exciting. It's it's not easy
[00:49:58] and there's a lot to learn and also for
[00:50:02] sharing all your feedback so we can make
[00:50:03] better decisions.
[00:50:05] >> Yeah, it's worth
[00:50:08] saying out loud again like how much we
[00:50:10] appreciate it and we have
[00:50:13] in some sense like yes it's a we're a
[00:50:16] successful business. We're making money.
[00:50:18] we're, you know, numbers are really good
[00:50:21] and we have customers and yet there's an
[00:50:24] aspect to AMP that makes it more like an
[00:50:26] art installation than a software company
[00:50:29] where we're like
[00:50:31] I said this to you like two days ago.
[00:50:33] I'm like what if AMP itself
[00:50:35] self-destructs? Like what if you know
[00:50:37] basically we saying like well AMP is
[00:50:39] gone here's the new AMP like the the the
[00:50:42] construction and destruction of AMP you
[00:50:44] know like we joked about this
[00:50:47] but the funny thing is our customers
[00:50:51] appreciate this. They come to us and
[00:50:53] they say guys what's the next thing like
[00:50:56] how can we help like do should we should
[00:50:58] we share with you what we're seeing what
[00:50:59] we're learning and then please like
[00:51:01] what's the next thing and when we ripped
[00:51:04] out in January we ripped out four
[00:51:06] features or something we ripped out
[00:51:07] to-dos we ripped out forking we ripped
[00:51:09] up a tab can't remember what the fourth
[00:51:12] one was
[00:51:12] >> custom commands I wasusto
[00:51:14] >> not actually going to post the news post
[00:51:16] when we ripped out when we slash custom
[00:51:18] commands
[00:51:19] >> yeah where we slash
[00:51:20] >> because I'm like oh people won't care
[00:51:21] about this and It's yet another removal,
[00:51:22] but we did and people actually really
[00:51:24] like it when we remove stuff.
[00:51:26] >> Yeah. Yeah. And people were they were
[00:51:28] like, "This is good. Cut the stuff that
[00:51:31] we've all know doesn't work anymore."
[00:51:34] They were appreciative. And the
[00:51:36] customers that pay us money
[00:51:39] say this to us. They're like, "Yep, I
[00:51:41] stopped using this." Or, "Cool. That
[00:51:43] makes sense. I will now stop using this.
[00:51:45] You guys, thank you for making the call
[00:51:47] here." And
[00:51:48] >> there are a bunch of people in the
[00:51:50] replies when we remove custom commands
[00:51:52] who said, "Oh, well actually I prefer it
[00:51:54] this way. Cloud code does it this way or
[00:51:56] whatever." And I asked them, "Well, do
[00:51:57] you use AMP or using cloud code?" And
[00:51:59] like, "Oh, no, I use cloud code." And in
[00:52:00] my mind,
[00:52:01] >> if we haven't won them over by having
[00:52:05] near par on that particular feature to
[00:52:07] AMP already,
[00:52:09] >> yeah,
[00:52:09] >> how are we going to win them over if we
[00:52:11] just make it even more like cloud code?
[00:52:14] We need to be doing different things.
[00:52:15] And yeah, to your point about the
[00:52:17] self-destruction of everything we do, we
[00:52:20] all believe deeply that all the usage of
[00:52:24] AMP today, all the the revenue that
[00:52:27] we're doing, all the customers we have,
[00:52:30] we have to totally reearn that
[00:52:32] >> like every 3 months. The product is
[00:52:35] going to look different. You're going to
[00:52:37] use it for different things in different
[00:52:38] ways. You're going to pay us for
[00:52:39] different things. And we need to figure
[00:52:40] that out. And if we don't, 3 months from
[00:52:43] now, we're going to have a really
[00:52:45] obsolete product or maybe it'll be
[00:52:49] winning in the lagard market and we'll
[00:52:53] get a lot of money for a year and then
[00:52:55] >> we'll be stuck, you know, with nothing
[00:52:57] and we don't want to do that.
[00:52:59] >> That's what motivates us. That that's
[00:53:00] what we truly feel inside. So we are
[00:53:04] like an art installation in many ways
[00:53:05] and you are part of it and we
[00:53:10] like we are the kind of company because
[00:53:12] of this unique history where we spun off
[00:53:15] from source graph. We are 19 co-founders
[00:53:17] of AMP. We've worked together. We trust
[00:53:19] each other a lot. We're all experienced.
[00:53:22] We're all like opting in for this. We
[00:53:24] haven't had to go and hire external
[00:53:26] people and say, "Oh, it's going to be so
[00:53:28] stable or whatever." Like we all know we
[00:53:29] signed up for. There's no other company
[00:53:31] like that. And that lets us do crazy
[00:53:33] stuff like actually we might make it so
[00:53:36] we just delete this entire directory in
[00:53:38] our source tree and we're getting
[00:53:40] together in Singapore in a few weeks and
[00:53:42] just rewrite it from scratch. We can do
[00:53:45] that kind of stuff
[00:53:46] >> and that is so cool.
[00:53:48] >> Yeah. And the last thing I'll say is
[00:53:54] because I guess the instinctually you
[00:53:57] could say, well, if everything's
[00:53:58] changing and you need to rip out stuff,
[00:54:00] doesn't that mean you should take a step
[00:54:02] back
[00:54:03] and wait until you can see the big
[00:54:05] picture and, you know, and then ship it
[00:54:08] or then build it, you know? And I think
[00:54:11] a lot of big companies have this where
[00:54:13] they're like, well, we're going to sit
[00:54:15] this one out. This is too crazy for us.
[00:54:17] We're going to wait and see where the
[00:54:18] dice are going to fall and then we're
[00:54:20] going to build for this. And sure, go
[00:54:22] ahead. You can do this. But I would
[00:54:24] guess I would argue and I guess that's
[00:54:26] what we're doing is
[00:54:30] you you might be too far away from where
[00:54:32] the dice will fall. Like it's a bet. You
[00:54:36] can either say, "I'm going to sit this
[00:54:37] one out and I'm going to catch up once
[00:54:39] the dice have fallen." Or like us, you
[00:54:42] need to constantly look up and see where
[00:54:44] they're going and trying to follow them.
[00:54:45] And you need to ship and hit reality and
[00:54:48] get customer feedback from customers
[00:54:50] such as ours to figure out what's going
[00:54:52] on, what's working and isn't working. So
[00:54:54] we like we said like we're researching.
[00:54:56] We we think shipping is research. We
[00:54:59] ship to figure out what works and
[00:55:01] doesn't work and to help our customers
[00:55:03] and we learn from the customer feedback.
[00:55:05] But we're not going to sit there and
[00:55:06] say, "Well, we can't ship this feature
[00:55:09] because we're not 100% sure that it'll
[00:55:11] survive the next three months." Like
[00:55:13] that's not how you do things. You got to
[00:55:14] put it out there and see for yourself
[00:55:17] and with your customers whether it works
[00:55:18] or doesn't work.
[00:55:19] >> Yeah, well said. We are not the ones to
[00:55:22] sit these things out.
[00:55:25] >> All right, we're at time I would say
[00:55:27] right. This was a lot of change in one
[00:55:29] episode. Any any last words we want to
[00:55:33] send along to our users?
[00:55:36] >> Think happy coding.
[00:55:38] >> Happy hacking. Yeah, we'll talk to you.
[00:55:40] Bye-bye.
[00:55:41] >> Bye. [music]
