---
title: "Agent workflows, better threads and more"
resourceId: 3
summarySlug: "coding-with-agents/build-crew-episode-7"
sourceUrl: "https://www.youtube.com/watch?v=fVx5M2GVjEQ"
videoId: "fVx5M2GVjEQ"
capturedAt: "2026-06-27T15:02:11.558Z"
series: "build-crew"
episode: 7
channel: "Sourcegraph"
language: "en"
kind: "auto-generated"
durationSeconds: 3606
---

## Transcript

[00:01:01] Good morning, good afternoon, good
[00:01:04] evening wherever you are in the
[00:01:06] beautiful world. Um, good to see
[00:01:08] everybody and nice to see my fabulous uh
[00:01:10] guests and co-host. I've got two very
[00:01:13] handsome men with me today. Um, so
[00:01:15] [laughter]
[00:01:17] um,
[00:01:18] >> where are they?
[00:01:19] >> Well, you know, they're here. Um, so
[00:01:22] nice to see you both. We're gonna let
[00:01:23] some people stream in and and join us.
[00:01:26] Um, everybody, if you're joining for the
[00:01:28] first time, this is Build Crew Live. So,
[00:01:30] hello. I'm Ryan Carson, one of your
[00:01:32] hosts. And uh we come and do this every
[00:01:35] week to basically try to make you a more
[00:01:39] powerful uh a more happy uh a more uh a
[00:01:43] better equipped uh developer who codes
[00:01:46] with agents. So uh welcome. We've
[00:01:48] already got some people joining from uh
[00:01:49] South Haven, Michigan. Um good to see
[00:01:52] you everybody. Wherever you're calling
[00:01:54] in from, pop it in the chat. Um and
[00:01:56] we've got some more uh folks calling in.
[00:01:59] So let's go and introduce everybody real
[00:02:01] quick. So Torstston, hello. Good to have
[00:02:02] you. Tell everybody who you are.
[00:02:05] >> Yeah, I'm Torson. I'm an engineer on the
[00:02:07] AMP team and one of the creators of AMP.
[00:02:11] So, I've been using it probably the
[00:02:14] longest, you [laughter] know, here
[00:02:16] >> from the moment it was deployed and
[00:02:19] yeah, came alive. Uh, Mike, good to see
[00:02:21] you. Tell us a little bit about
[00:02:22] yourself. Yeah, I'm a engineer and
[00:02:25] builder mainly in the Elixir ecosystem
[00:02:28] working as a director of engineering for
[00:02:30] a company in Denver based here in
[00:02:31] Chicago and been using AMP for a long
[00:02:35] time. Love it. Use it quite a bit and
[00:02:37] always trying to, you know, just sharpen
[00:02:40] the saw and get a little bit better with
[00:02:41] it. So, thanks for having me on.
[00:02:43] >> No problem. I think this the saw is
[00:02:44] pretty sharp, which is why we invited
[00:02:46] you to come to to come back. We're going
[00:02:48] to we're going to show the build crew um
[00:02:51] uh leaderboard and you're always on it.
[00:02:53] So, that's kind of fun. Um we've got
[00:02:55] some folks tuning in from Portland,
[00:02:57] Oregon. Good to see you, Dan. Thanks for
[00:02:59] being here. Rididgetop, as always, good
[00:03:01] you're here. Appreciate you all tuning
[00:03:03] in. If you're watching, pop in the
[00:03:04] comments, tell us where you're calling
[00:03:05] in from, where you're joining from. Um
[00:03:07] and we'll call you out. Uh also, don't
[00:03:10] forget to join Build Crew. It's our free
[00:03:12] community for anybody building with
[00:03:14] agents. So, if you're a dev, you use an
[00:03:16] agent. You can use any agent. You don't
[00:03:17] have to use AMP. You could be using
[00:03:19] anything. Cloud Code, Cursor, Windsurf,
[00:03:22] Gemini CLI, whatever. Um, you're
[00:03:24] welcome. And so, uh, just head to, uh,
[00:03:26] billcrew.te, join. We do throw 100 bucks
[00:03:29] in your account just to kind of make
[00:03:31] life a little better, uh, as well. So,
[00:03:34] um, we're going to get started in a
[00:03:36] second. Want to call out some more
[00:03:37] friends. We've got folks joining from
[00:03:39] Malaysia and Chile as well, which is
[00:03:41] really fun. So, uh, welcome everybody
[00:03:44] from around the world. So the goal of
[00:03:47] the show is to to give you tips, give
[00:03:48] you strategies for coding better with
[00:03:50] agents, right? Um all three of us on the
[00:03:52] call basically do this all day.
[00:03:55] [laughter] So whether we like it or not,
[00:03:57] we have some things to share. Um so
[00:03:59] Torson, why don't you kick us off with
[00:04:01] something you're kind of learning,
[00:04:02] something that you are thinking about.
[00:04:05] Um over to you. [snorts]
[00:04:07] >> Yeah. Yeah. So if we look at my screen,
[00:04:11] which there it is. So, I picked out um
[00:04:15] three threads. They're all from
[00:04:17] yesterday. And I picked them out because
[00:04:20] I want to use them to bang the same drum
[00:04:23] I've been, you know, banging or drumming
[00:04:26] on for the past few months, which is I
[00:04:29] think small focused threads or in let's
[00:04:32] call them in general invocations of an
[00:04:34] agent
[00:04:35] >> y
[00:04:36] >> are a lot better than or lead to better
[00:04:39] results. And and I think
[00:04:42] one reason for that is a smaller context
[00:04:45] window has better quality like every
[00:04:47] paper shows this like you know there's
[00:04:49] degradation the longer the context
[00:04:50] window is but the more meta thing going
[00:04:53] on is if you have a small thread that
[00:04:55] means you have a small focused tasks
[00:04:57] with clear inputs and outputs or like a
[00:04:59] goal and I just want to walk you through
[00:05:02] these to show this is actual work I did
[00:05:04] yesterday and I want to show you how I
[00:05:06] approached something like this. Right.
[00:05:08] So what I was debugging yesterday
[00:05:11] in case you don't know I think if you go
[00:05:13] to amco.com install you to set the scene
[00:05:17] here you can install AMP CLI with this
[00:05:20] right and we recommend this the curl to
[00:05:22] bash thing or if you want to and I know
[00:05:25] there's people who say like this is a
[00:05:26] security hazard you shouldn't do this go
[00:05:28] and read this go and read through this
[00:05:31] and then invoke every thing by hand if
[00:05:34] you want to the point is if you do this
[00:05:37] as opposed to npm, npx, pnpm yarn,
[00:05:40] there's no JavaScript package manager
[00:05:42] installed, which on our end makes it
[00:05:44] easier to update AMP for you because
[00:05:47] handling all these package manager
[00:05:49] package managers is hard. So yesterday I
[00:05:51] was kind of digging into this and um so
[00:05:54] what I noticed
[00:05:56] um is that hey like we make this request
[00:06:01] uh somewhere you know I I I can't see
[00:06:05] this here but I highlighted this was in
[00:06:07] the VS code extension I highlighted some
[00:06:08] text I select this is like 20 lines
[00:06:11] >> and I said look at this do you know
[00:06:14] >> the mpm registry API from where we fetch
[00:06:17] our version information to check whether
[00:06:19] there's a new update
[00:06:21] And do you know the API enough you know
[00:06:24] to know I think my English is not the
[00:06:26] best here to know whether we can modify
[00:06:28] the request or the URL to only fetch the
[00:06:30] data we want instead of all versions
[00:06:32] because I saw loop in the code and I was
[00:06:35] like why do we loop through all versions
[00:06:37] and we release 15 times a day that's a
[00:06:40] lot of versions right
[00:06:41] >> and it says like yeah you can modify
[00:06:43] this if you do this it came back with
[00:06:46] this and what's not shown here is I
[00:06:49] didn't use this URL to make sure that
[00:06:52] this is actually what it returns and
[00:06:54] then I said hey let's do this
[00:06:56] >> um but check the output first right so
[00:06:58] here it runs curl it checks this this is
[00:07:01] everything we need just the latest
[00:07:02] version it updated the code small change
[00:07:05] eight lines changed um and
[00:07:08] >> so let me ask you real quick so when you
[00:07:10] saw that first diff you know did you
[00:07:12] immed
[00:07:14] >> yeah did you immediately read it or did
[00:07:15] you just let the agent crank and then
[00:07:17] you read the diff after it was all
[00:07:19] I mean, here it was done. Like, this was
[00:07:21] pretty short, right? It says curl and
[00:07:23] this.
[00:07:24] >> Yeah, it came right back. And this is
[00:07:26] the tiniest change, right? And and then
[00:07:30] I was like, okay, I think this works. I
[00:07:32] tested it. I read through the diff. It
[00:07:34] just changes the response body. And then
[00:07:37] I said to brag on Slack, I was like, can
[00:07:40] you come run both and compare the size
[00:07:43] um, you know, the size reduction? And
[00:07:45] then it turns out, you know, instead of
[00:07:47] always fetching 3.5 megabytes, we now
[00:07:50] fetch 35 bytes, which is
[00:07:53] >> obviously a big reduction, right?
[00:07:56] >> 100,000x.
[00:07:58] >> Yeah. And I was like, hey, give me a
[00:07:59] short commit message that puts this
[00:08:02] thing in. And it came back with a
[00:08:03] negative, like a boring one. And I was
[00:08:06] like, come on. So, I ignored it. Um, and
[00:08:09] then I found some other code that checks
[00:08:11] for updates. And I said, I don't know
[00:08:13] why we I think I have the file open. And
[00:08:15] I made I asked, can we make the same
[00:08:17] optimizations here, but here we need
[00:08:20] something else? And it came back and it
[00:08:22] says, actually, it doesn't work. And we
[00:08:24] ended with like a sad,
[00:08:25] >> damn,
[00:08:26] >> you know, yeah, it doesn't work. But I
[00:08:28] was So then end of thread, I didn't
[00:08:31] continue here, right? But I I wanted to
[00:08:34] change something else. So I went over
[00:08:35] here.
[00:08:36] >> Before Before you go to the next, I just
[00:08:37] want to call out something cool that I
[00:08:39] think you did. So the where where where
[00:08:42] you basically push the button to say
[00:08:43] write a quick script to give me
[00:08:45] something. I love that you did that to
[00:08:47] show what percent you improved
[00:08:50] everything by. Right? Because again
[00:08:52] that's something you probably wouldn't
[00:08:53] do without an agent, but it was
[00:08:55] something I saw you share that in Slack
[00:08:57] and I was like that's interesting versus
[00:08:59] you just saying I optimized you know the
[00:09:01] install.
[00:09:02] >> So that was cool.
[00:09:04] >> Yeah. I had I had the the actual first
[00:09:08] thing open in the browser and I could
[00:09:11] see that it's a lot of JSON in the
[00:09:13] browser tools, but then I was like I
[00:09:15] know that you can use this type of stuff
[00:09:17] with curl but I'm too lazy to do it. So
[00:09:19] you just ask the agent and it does it
[00:09:21] like you don't you know like this
[00:09:24] templating that curl allows you to do. I
[00:09:27] you know would have had to look it up.
[00:09:29] So I didn't
[00:09:30] >> but then then I went and I I realized
[00:09:34] like there's another thing that we
[00:09:36] that's hardcoded which is the name of
[00:09:38] the registry and in with MPM you can you
[00:09:41] know have hardcoded um sorry you can
[00:09:43] have a custom registry and a user right
[00:09:46] I put this information who's behind a
[00:09:48] corporate VPN reported that it's blocked
[00:09:50] for them they use a registry on this now
[00:09:52] my question is what's a good reliable
[00:09:54] solid way to get this right and it
[00:09:57] looked at the code it came back with
[00:09:59] this and it says quick implementation
[00:10:01] and then I was like what's the nonquick
[00:10:03] implementation [laughter]
[00:10:05] you know if this is the quick one what's
[00:10:07] the better one because I read through
[00:10:09] this and I was like okay exact sync npm
[00:10:13] config get registry
[00:10:15] >> this could work but then it's like what
[00:10:17] if you know is this the format does this
[00:10:20] always work what if this is not
[00:10:21] installed and you know invoking a
[00:10:23] command I don't know so what's the
[00:10:26] non-quick and it came back and say like
[00:10:28] a robust first one would have this and
[00:10:30] check for this and I read through this
[00:10:32] what it proposed and said we don't need
[00:10:34] the scope stuff but the rest sounds good
[00:10:36] let's implement it
[00:10:37] >> and it did it and I read through the
[00:10:40] code and it basically runs npm config
[00:10:43] registry and it has like this is what I
[00:10:46] was you know
[00:10:48] >> looking out for like the it wants to
[00:10:50] catch and so it doesn't blow up if npm
[00:10:52] isn't installed or whatever right it
[00:10:55] handles timeouts all of that stuff
[00:10:57] >> um it caches it too, which is nice. Um,
[00:11:00] so then it implements it. Implements it.
[00:11:03] Done. So now
[00:11:06] >> I knew there's a second place because
[00:11:07] while this was running, I was using
[00:11:10] projectwide search to figure out whether
[00:11:13] registry npmjs.org
[00:11:15] is hardcoded somewhere else. And it was,
[00:11:18] right?
[00:11:18] >> Ah,
[00:11:19] >> and you just and you just knew that from
[00:11:23] looking.
[00:11:23] >> Well, I was like actually search,
[00:11:25] >> okay, what's going on here? What's the
[00:11:26] problem? And as everybody who's ever
[00:11:29] worked done something like this after a
[00:11:31] few years of doing this, you're like
[00:11:33] >> if we have this problem here, yeah, this
[00:11:35] is the only place where we have this
[00:11:37] problem or do we have it somewhere like
[00:11:38] sales? So
[00:11:40] >> in my case, I I had this running and I
[00:11:43] was like, okay, where else is this? It's
[00:11:46] the same as when somebody opens a PR and
[00:11:48] say like fix this and you know
[00:11:51] >> there's five other places where we do a
[00:11:52] similar thing. Did you look at those
[00:11:54] two? So this is what I was doing in the
[00:11:56] background and then I realized we do
[00:11:58] have another place where we check this
[00:12:00] and the problem is we cannot share code
[00:12:03] right. So look like this is the
[00:12:05] bootstrap script. So if you go here and
[00:12:08] run install and pipe it to bash what it
[00:12:10] does is it downloads this bootstrap.ts
[00:12:14] from amcode.com/bootstrap
[00:12:16] and then it uses bun to to actually
[00:12:19] bootstrap like the CLI installation.
[00:12:21] Right? So, it's a completely standalone
[00:12:23] thing which I also knew. And I'm not
[00:12:26] saying all of that stuff to say, look
[00:12:28] guys, how much I know. I'm [snorts] more
[00:12:31] saying this to drive the point home of,
[00:12:34] you know, it's like a bob and weave type
[00:12:36] of thing with the agent where you know
[00:12:38] need to know what's going on and then
[00:12:40] you can direct it to other stuff. And
[00:12:42] >> in this case, I knew what the
[00:12:44] architecture is. I knew what the context
[00:12:46] of the file is. And if I had asked it
[00:12:49] like oh couldn't you extract this
[00:12:50] through a shared thing it would it would
[00:12:53] do it but it would fail because that's
[00:12:55] not how this code works. So
[00:12:57] >> would end
[00:12:59] a question for you like so did you use
[00:13:01] AMP to search or did you know uh where
[00:13:05] to look in the codebase?
[00:13:06] >> This was this I was being frugal and not
[00:13:10] spending cents on searching for the URL.
[00:13:13] I copied the URL command shift F in VS
[00:13:16] Code and like put the URL in like
[00:13:19] registry.mppmjs.
[00:13:21] No, no. Yeah, I I I Yeah, I wanted to
[00:13:26] double check like what does the actual
[00:13:28] search thing come back with? Um, and
[00:13:30] then
[00:13:32] okay, so now knowing what I just told
[00:13:35] you that there's another place where we
[00:13:37] have to do this and that I cannot use
[00:13:39] this code in this other place. I used
[00:13:43] handoff to create another small thread.
[00:13:45] And here look like we had three
[00:13:47] messages. This was nothing. And yet I
[00:13:51] didn't want it to even get confused by
[00:13:53] this somehow. So I used handoff to
[00:13:56] create a new thread which is this one.
[00:13:59] Um I guess we can't we don't show the
[00:14:02] full prompt that I typed here. We can
[00:14:03] fix this on hover I think. Um but
[00:14:07] basically I said hey I want to take the
[00:14:08] same helper function we just added but
[00:14:11] copied them to this new file and I even
[00:14:13] specified specified the file name and
[00:14:15] then I said something like because we
[00:14:17] cannot share the code and it should be
[00:14:19] duplicated blah blah blah and then
[00:14:20] handoff generated this prompt for me
[00:14:23] which and handoff has gotten a lot
[00:14:25] better in the last week with these
[00:14:27] prompts like it's you know Nikolai did a
[00:14:29] lot of work on it
[00:14:31] >> um so it ended up with this and it's
[00:14:33] just like I just implemented this um but
[00:14:37] now blah blah blah I added these hover
[00:14:38] functions now I want to use this you
[00:14:41] know blah blah blah and I specified kind
[00:14:43] of what it should do and then it
[00:14:44] basically knocked out the code which
[00:14:47] >> was exactly what I wanted it to do it
[00:14:49] should add like an option parameter to
[00:14:51] this and then update all of the call
[00:14:53] sites and pass in this register URL
[00:14:55] >> and it was only basically two steps like
[00:14:58] that's pretty amazing.
[00:15:00] >> Yeah. Yeah. it it's like one two like
[00:15:02] it's just it's tiny and it did it and
[00:15:05] then I was like can you add a comment to
[00:15:06] explain why we don't share the code and
[00:15:09] then I tested it and I pushed it up and
[00:15:12] you know that was it so
[00:15:14] >> so the moral of the story is small
[00:15:16] threads
[00:15:18] >> the I yeah or [laughter]
[00:15:24] >> you need to know
[00:15:26] you need to know what you want the agent
[00:15:28] to do
[00:15:29] >> yeah and be be specific about directing
[00:15:32] it. And there is, as the three of us
[00:15:35] know who have a lot of tokens, you
[00:15:38] [snorts] know, on our profile card. I
[00:15:41] there's cases where you don't know what
[00:15:43] you don't know or you don't know or you
[00:15:46] know what you don't know and then you
[00:15:47] send the agent off to discover some
[00:15:49] stuff and then you do more directed
[00:15:51] stuff, right? So there's like a
[00:15:53] researchy type of way of using these
[00:15:55] agents and then there's a you implement
[00:15:57] this for me type of way.
[00:15:58] >> Totally. And everything that I wrote
[00:16:01] here in these prompts,
[00:16:03] >> I mean, Mike, director of engineering,
[00:16:05] like you can confirm like this is the
[00:16:07] type of stuff that you would say to a
[00:16:09] junior developer. You're like, "Hey,
[00:16:11] build me these helper functions. Watch
[00:16:13] out that it doesn't blow up if the
[00:16:14] command exists and then port this over
[00:16:16] to this and watch out that you don't
[00:16:18] share any code because that's not how
[00:16:19] this works." But then the rest is you
[00:16:22] fill in the blanks. And that's how I
[00:16:24] think about it.
[00:16:25] >> There's a lot of watch out for sure.
[00:16:27] >> Yeah. [laughter]
[00:16:28] We're all like
[00:16:29] >> shaking our our heads. Uh, for sure. So,
[00:16:32] I want to go to Mike in a second. Want
[00:16:34] to call out some comments. Uh, engineer
[00:16:36] wannabe says, "Yep, knowing stuff still
[00:16:38] matters."
[00:16:39] >> Um, which happens a lot. Um, we got some
[00:16:42] friends calling in from Amsterdam.
[00:16:44] Bruno, good to have you joining. Uh, Eba
[00:16:47] calling in from London. Um, and
[00:16:50] >> I know we got some more friends from
[00:16:52] around the world, Brazil.
[00:16:53] >> And Tim's calling in from Minnesota. So,
[00:16:57] good to have a reason here. We should do
[00:16:59] this on New Year's Eve. And then people
[00:17:01] say like, "Oh, yeah. It's always
[00:17:02] >> all over the world."
[00:17:04] >> All right. And then engineer wannabe
[00:17:05] says, "And then you throw away the
[00:17:06] junior's code." Um, which does have
[00:17:08] comments. Um, if you're if you're
[00:17:10] watching, please tell us where you're
[00:17:12] joining us from. Pop in the comments.
[00:17:13] We'll I'd love to know where you all are
[00:17:15] from. So, um, let's go to Mike next. Uh,
[00:17:19] would love for you to share something
[00:17:20] that you're learning, something that it
[00:17:23] just how can people code better with
[00:17:24] agents? Sure. And and Thorston kind of
[00:17:27] we didn't plan this. We teed teed this
[00:17:29] up really well. I'm going to go ahead
[00:17:30] and share my screen as well and showcase
[00:17:33] a a thread that I was working in a code
[00:17:37] base that
[00:17:39] you know we got to rewind a year. I had
[00:17:42] written a lot of code of this uh this
[00:17:44] package geo signal is what it's called
[00:17:47] >> by hand. I just started using chat GPT.
[00:17:51] this this magic of,
[00:17:53] >> you know, being able to put an idea into
[00:17:55] an LLM and have it respond
[00:17:58] >> and then I ship the code.
[00:18:00] >> So you you know this was this was you
[00:18:01] got to again history.
[00:18:04] >> Bump up the font size for us. Make it
[00:18:05] bigger if you can.
[00:18:06] >> No problem.
[00:18:06] >> Just go a couple sizes.
[00:18:08] >> Little bit better. A little bit better.
[00:18:09] >> Yeah, that's great. That's great.
[00:18:11] >> And so I this week I had the opportunity
[00:18:15] to come back
[00:18:16] >> Oh boy.
[00:18:16] >> and take a look at this with our modern
[00:18:19] tools. And so I was sitting there
[00:18:20] thinking like how what do I do? I gotta
[00:18:22] like, you know, I have a, you know,
[00:18:25] Formula 1 race car. What do I do? And I
[00:18:27] came up with this prompt and, you know,
[00:18:30] Thorson is talking about how do I get
[00:18:32] back into the headsp space of some code
[00:18:34] that I've written
[00:18:35] >> and I opted for for this approach and I
[00:18:38] want to break it down a little bit, but
[00:18:40] first, you know, use the Oracle. I I
[00:18:42] definitely wanted to invoke that deeper
[00:18:45] GPT5 thinking, evaluate the package. So
[00:18:49] I wrote a intentionally kind of high
[00:18:52] level, you know, this is a research
[00:18:54] flow. I wanted to reorient myself with I
[00:18:57] knew what the code did, but I wanted to
[00:19:00] get a little bit of that fresh eyes and
[00:19:03] then use sub aents to write a report
[00:19:07] around each of the major features
[00:19:09] without identifying the major features.
[00:19:11] I wanted the I wanted GPT to, you know,
[00:19:14] um pick the edges that it found and
[00:19:18] write the reports themselves. So, it
[00:19:21] went and did this. And I I'm giving away
[00:19:24] a little bit of a secret here in that
[00:19:26] the number one language I've been
[00:19:28] writing lately is Markdown.
[00:19:30] I, you know, I just I I just crush out a
[00:19:33] lot of Markdown.
[00:19:34] >> You do a lot of Markdown, too.
[00:19:35] >> Yeah. Yeah. It's pretty good. It's
[00:19:37] pretty good. So, you know, 3.7 million
[00:19:40] tokens. I don't even want to know what
[00:19:42] this costs. I didn't didn't notice that
[00:19:44] until I just pulled this thread up, but
[00:19:47] um you know, that's where we're, you
[00:19:51] know, yeah, going hard. So, it wrote out
[00:19:54] all of these markdown documents that
[00:19:57] outlined each of the features for this
[00:20:00] package. And I threw these into my um
[00:20:06] >> into the code. I put them in this report
[00:20:08] folder. I think we exchanged a tweet,
[00:20:10] Ryan, where I've started putting things
[00:20:12] in a temp folder because it
[00:20:13] automatically excludes it from Git.
[00:20:15] >> Yes, thank you. I do that now and I love
[00:20:17] it.
[00:20:18] >> Super awesome. Um and it went through
[00:20:22] and wrote 10 reports explaining how all
[00:20:27] of these features fit together. So this
[00:20:29] was kind of the current state. and I
[00:20:30] wanted to get a snapshot of that that I
[00:20:32] could then begin to work with this week
[00:20:35] as I went piece by piece to upgrade this
[00:20:38] package. So then I followed up with the
[00:20:42] and this is one of again my favorite uh
[00:20:45] kind of prompts that I've used you know
[00:20:47] for a while now. I've had it in
[00:20:49] different forms, but then I wanted to
[00:20:53] have that Oracle use those markdown
[00:20:56] reports that I wrote, reach into each
[00:20:59] one of them, consult, and then write me
[00:21:01] a critique, like rip it to shreds, roast
[00:21:04] this code, and then I could once again
[00:21:09] write a bunch of markdown reports.
[00:21:11] >> Interesting.
[00:21:12] >> Going into, you know, what was wrong
[00:21:15] with it. And then I I went back and
[00:21:18] forth and this is this has been kind of
[00:21:20] my open source work this week. I take
[00:21:22] the pair of here's the overview document
[00:21:26] from sub agent number one. Here's the
[00:21:28] critique from sub agent number two. I
[00:21:32] then will, you know, use my voice
[00:21:35] transcribe into the system of what I
[00:21:38] agree with, what I don't agree with.
[00:21:39] Hey, this is a good suggestion. No, this
[00:21:41] one, you know, go a different direction.
[00:21:44] And I have then kicked off a number of
[00:21:46] threads to refactor, refine and and
[00:21:50] tighten up this codebase
[00:21:53] using this approach. And this this kind
[00:21:56] of became the foundation. There are
[00:21:58] other threads where for instance just to
[00:22:00] pick out the dispatch system
[00:22:02] >> I went and I then created a markdown
[00:22:05] plan. I have the agent build the plan
[00:22:09] with step by step sub agents can execute
[00:22:11] each step sequentially.
[00:22:14] And here I'm using parallel agents. So I
[00:22:16] need to again you know the tools in the
[00:22:19] toolbox right because we're doing
[00:22:21] research they can't conflict but then
[00:22:23] specifying sequential agents to edit the
[00:22:26] code. This works really well.
[00:22:28] >> Interesting.
[00:22:30] >> Okay.
[00:22:31] >> I've been throwing up PRs for each of
[00:22:34] the refactorings that build up. When
[00:22:37] when do you go? So you read both like
[00:22:40] you actually go through
[00:22:42] >> but but that means you read all of the
[00:22:44] pairs and for each like the the analysis
[00:22:47] and the critique, right?
[00:22:49] >> Correct. Mhm.
[00:22:50] >> And then where do you is this also in
[00:22:53] this like you create like your I guess
[00:22:57] theis or like your verdict where does
[00:22:59] that go? I voice transcribe it. So I I
[00:23:04] then have a prompt and I can find one in
[00:23:06] a second, but we have a prompt that says
[00:23:09] new thread, pull in the overview, pull
[00:23:13] in the critique. I transcribe my
[00:23:15] analysis of the critique and the thread
[00:23:18] after reading it. And then I say, use
[00:23:20] the Oracle to write a, you know, plan to
[00:23:24] refactor the dispatch system.
[00:23:26] >> Oh, cool.
[00:23:26] >> I then will analyze that plan. and I
[00:23:29] manually go in and I edit. I'm pretty
[00:23:31] much chopping steps at that point of do
[00:23:34] this, don't do that. And then I pass
[00:23:37] that to one serial agent to actually
[00:23:40] write the code. So my markdown to code
[00:23:43] ratio is
[00:23:46] >> probably five to one.
[00:23:47] >> Yeah.
[00:23:48] >> Yeah. Same.
[00:23:50] >> That's interesting. Okay. So if I could
[00:23:52] summarize the flow, you basically say to
[00:23:55] the oracle, all right, you know, here's
[00:23:56] a feature or a package that you know was
[00:23:59] written a long time ago. I want you to
[00:24:01] analyze how it works. And then you go
[00:24:03] and then say, okay, now that you know
[00:24:04] how it works, take that markdown, and
[00:24:06] now I want you to do a pretty, you know,
[00:24:08] thorough code review on it,
[00:24:10] >> create a markdown on that, and then you
[00:24:12] read both. And then you create a new
[00:24:14] thread, you tag both, and then you say,
[00:24:18] uh, make a plan. Uh, and then you read
[00:24:20] the plan and then you probably edit the
[00:24:22] plan and then you say probably a new
[00:24:24] thread then implement the plan.
[00:24:26] >> Correct.
[00:24:26] >> Cool.
[00:24:27] >> Or I usually hand off from the plan
[00:24:29] thread into a new one and I use the
[00:24:32] context from the planning thread from
[00:24:34] the critique and overview. I do a brand
[00:24:36] new one. I cut I don't I don't bridge
[00:24:39] those two. Got it.
[00:24:40] >> But it's I it's a it's a funnel. So, I
[00:24:43] go really really wide and then I go kind
[00:24:46] of narrow it down to the the surgical
[00:24:48] edits that I'm making.
[00:24:49] >> So, can you answer this question from
[00:24:51] engineer wannabe?
[00:24:53] >> Yeah. So, sometimes they do, sometimes
[00:24:55] they don't have code in them. Um, and
[00:24:59] let me find a
[00:25:01] >> if you're listening to this, the
[00:25:02] question is, uh, engineer wannabe says,
[00:25:04] "But are those markdown files full of
[00:25:06] code?" Is the question. Mhm.
[00:25:10] >> The sometimes in this case it will call
[00:25:14] out a design weakness where my intent to
[00:25:18] dispatch these are messages in the in
[00:25:20] the in the system to be fully
[00:25:23] asynchronous and not have this
[00:25:24] synchronous bottleneck
[00:25:27] wasn't implemented correctly. Found a
[00:25:29] bug. Fantastic.
[00:25:31] >> Here's the example of where that bug
[00:25:33] exists. Here's why it exists. Yeah.
[00:25:35] Yeah.
[00:25:36] >> And then it uses that with um line
[00:25:39] locations to the specific file for this
[00:25:42] is the code that's in the codebase now,
[00:25:45] not new code that it wrote.
[00:25:47] >> Yeah. And I noticed Torson, you were
[00:25:49] doing this as well. I'm asking, you
[00:25:51] know, AMP and agents a lot more to write
[00:25:54] a little bit of code for me to see about
[00:25:56] how they plan to implement things. A lot
[00:25:59] more. Um and then just like going and
[00:26:01] then you you always see the the foot
[00:26:04] guns. you're like, "Oh, wait a second."
[00:26:05] No. So,
[00:26:07] >> yeah. Yeah. Yeah. I mean, Mike, how do
[00:26:09] you
[00:26:11] um Okay, I'll say what the issue is, and
[00:26:14] I I want to hear what you think about
[00:26:16] it. Um my problem sometimes is when I
[00:26:19] would ask a model to review say a whole
[00:26:23] subsystem, it would often come back with
[00:26:27] these
[00:26:29] um suggestions that I would say are out
[00:26:32] of context, you know, where hey take a
[00:26:35] look at this and and and it comes back
[00:26:38] well the problem we should improve this
[00:26:40] by making it paralyzable and make it run
[00:26:43] on multiple machine and fall tolerant
[00:26:45] and you're like
[00:26:46] get out of here. Like this is not So how
[00:26:49] do you
[00:26:50] >> how do you set the frame for this app?
[00:26:54] Is it's my hobby project. It's one
[00:26:56] server. I don't care about fall
[00:26:58] tolerance, you know, like how do you do?
[00:27:00] Is it agents MD? Is it a prompt? What
[00:27:02] what do you do?
[00:27:04] >> So it depends what stage you're at in
[00:27:07] the process.
[00:27:08] >> Yeah.
[00:27:08] >> In the research process, I want to go as
[00:27:10] wide as possible. I want to reach for
[00:27:12] everything the model can brainstorm and
[00:27:15] know about in the question that I p
[00:27:18] >> as I narrow it down into the refactors I
[00:27:21] cut and I curate at each stage
[00:27:24] >> until finally the plan MD and then
[00:27:28] executing that plan is a lot more narrow
[00:27:32] and has that kind of extra
[00:27:35] >> uh brainstorms chopped out. So that's I
[00:27:37] that's kind of technique number one.
[00:27:40] Number two is that I've gotten far more
[00:27:42] opinionated on the publicly exposed API
[00:27:47] to other code.
[00:27:49] >> So what does that interface contract
[00:27:51] look like? How is it typed? What's the
[00:27:54] shape of those methods? And how will
[00:27:56] people use them? I'll So this is this is
[00:27:59] kind of a fun one, too. Um I didn't do
[00:28:02] it with this code specifically. Another
[00:28:04] project I shipped last week was through
[00:28:08] some of the the kind of I work on a lot
[00:28:11] of like low-level LLM infrastructure
[00:28:13] work right now.
[00:28:15] >> Recognized a need for a cohesive really
[00:28:19] featurerich database of all the model
[00:28:22] specifications and model metadata for
[00:28:26] publicly available models.
[00:28:28] So we collected this 1,200 models. then
[00:28:31] you need a giant override system and so
[00:28:32] all this different stuff I would had AMP
[00:28:36] design it and then there's a list of
[00:28:39] maybe nine or 10 public API methods that
[00:28:44] I got really really specific about. I
[00:28:47] really poured my um sense of design. I
[00:28:50] poured my sense of, you know, here's my
[00:28:53] opinion of how this should look. Here's
[00:28:55] how I want to use it into those
[00:28:57] specifications. And then I let go of the
[00:29:00] implementation underneath as long as
[00:29:02] it's efficient.
[00:29:04] >> And that makes sense.
[00:29:05] >> That balance has how is how I've kind of
[00:29:07] solved that problem of where the edges
[00:29:10] of each subsystem.
[00:29:13] >> Yeah, I think I I understand and I want
[00:29:16] to echo that the more you use these
[00:29:18] models and these tools and you know you
[00:29:21] realize they there's an overeagerness to
[00:29:24] to engineer things more than needed,
[00:29:27] right? And and I usually say something
[00:29:29] like, "What's the one thing that we need
[00:29:31] to do, you know, to make this more
[00:29:33] secure,
[00:29:34] >> right?" And then you usually get like,
[00:29:36] "Okay, well, out of all the things I
[00:29:37] could choose, here's here's the thing."
[00:29:39] Um,
[00:29:39] >> so I want to call out some uh questions
[00:29:41] and comments coming in from the crowd.
[00:29:43] Um, Anthony says, "Not a question, but a
[00:29:45] kudos. One thing I love about AMP is
[00:29:46] when you close out the agent, gives you
[00:29:48] the option to jump right back in with
[00:29:50] previous contexts." Something I wish
[00:29:52] Claude had. Um, agree with you on that.
[00:29:54] Um and then GMO saying the difference
[00:29:57] that I uh the difference that just
[00:29:59] asking it to think through the changes
[00:30:00] before coding is big for bigger changes
[00:30:02] and larger code bases I find a similar 5
[00:30:05] to1 ratio of markdown to code to be
[00:30:08] almost a base necessity. Um so everybody
[00:30:10] in the crowd tell us what your markdown
[00:30:12] to code ratio is.
[00:30:14] >> Um and uh we we'll call out some of
[00:30:17] them. The last one is interesting,
[00:30:19] right? That um
[00:30:22] back in the day like a nine months ago.
[00:30:26] >> Yeah.
[00:30:27] >> Right. You would have chain of thought
[00:30:30] prompting, right? [clears throat] Where
[00:30:31] you would say,
[00:30:33] >> please describe the plan and then you
[00:30:36] know think through all of this to get
[00:30:38] this stuff in the context window and
[00:30:39] then you end up with a good solution.
[00:30:41] And I'm while reading GMO's message
[00:30:44] here, I'm thinking most of the or the
[00:30:47] newer generation of models, say two to
[00:30:50] three months old, right? They've they
[00:30:53] they're all doing reasoning now and have
[00:30:56] thinking blocks and it's all happening
[00:30:58] in there. And still like I think you
[00:31:02] still get better results by having them
[00:31:04] go through this but I would say the
[00:31:06] scope has kind of increased where you're
[00:31:08] more like hey plan this out and then we
[00:31:10] jump to an implementation and you don't
[00:31:12] have to do the you know first describe
[00:31:15] what curl is and then do you know blah
[00:31:17] blah blah but it's still it's
[00:31:19] interesting and I I'm I'm reading this
[00:31:21] because I'm now wondering will this will
[00:31:23] this go away and the thinking and
[00:31:25] reasoning will do all of it. I don't
[00:31:28] know. Maybe
[00:31:29] >> maybe I I think the planning phase is
[00:31:31] almost as much for the agent as as it is
[00:31:33] for the human.
[00:31:35] >> Um I
[00:31:36] >> Okay. Okay. But then then answer me this
[00:31:38] like if [snorts] if you have a workflow
[00:31:41] such a sophisticated workflow, right,
[00:31:42] with the markdown files, do you
[00:31:47] there? It's so tempting and so easy to
[00:31:50] not read those files. [laughter]
[00:31:52] >> True.
[00:31:54] >> Right.
[00:31:54] >> It is
[00:31:55] >> like you're like now it's there. It's
[00:31:56] 200 lines of markdown file and then you
[00:32:00] jump and and and what I want to know is
[00:32:03] like do you go because it's work. Do you
[00:32:05] go through the work of making sure
[00:32:08] what's that you understand what's in
[00:32:09] those files or
[00:32:10] >> this is the key.
[00:32:12] >> Yeah. This is the discipline you have to
[00:32:15] have when using agents.
[00:32:16] >> You're right. Because the the the the
[00:32:19] tempting thing to do is be like it seems
[00:32:21] like I put a lot of work into that plan.
[00:32:24] >> Yeah. You got it. I think Greg calls
[00:32:27] this out. I love this. I bet five to one
[00:32:29] isn't accurate. There's lots of code
[00:32:31] being written for you. Fine. Five to one
[00:32:33] time and effort
[00:32:34] >> sounds right. So I think that's probably
[00:32:36] actually a good measure, right?
[00:32:38] >> And you know it it's infinity to one.
[00:32:42] That's pretty good. Yeah. Then we don't
[00:32:44] get anything done. I I think you know we
[00:32:47] some of it depends on the targeted
[00:32:49] codebase that you're writing. In this
[00:32:52] case, this is a publicly released
[00:32:54] package. people depend on this package.
[00:32:56] I need to maintain backwards
[00:32:58] compatibility. You know, there's a
[00:33:00] there's a different bar that I'm aiming
[00:33:02] for and a different um approach and care
[00:33:06] that I'm bringing to writing this code.
[00:33:09] >> Whereas last week, and there's this is
[00:33:11] still kind of the case. There's a
[00:33:13] >> it's not fully unreleased. I do a lot of
[00:33:15] my work publicly on GitHub, but there's
[00:33:18] a level of no, this package is still in
[00:33:21] that, you know, the workshop isn't done
[00:33:23] yet. there's still going to be some
[00:33:24] sawdust flying. We're going to make some
[00:33:26] breaking changes because it's the right
[00:33:27] thing to do. Um, and that I'm a little
[00:33:31] looser with as long as I properly define
[00:33:34] the outcome that I'm looking for.
[00:33:37] >> Yeah.
[00:33:37] >> And
[00:33:38] >> as long as I get there, you know, I'll
[00:33:40] be a little bit looser. Maybe I'll skim
[00:33:42] it. Um, and then if something does go
[00:33:45] wrong, I just ask AMP to fix it.
[00:33:47] >> Yeah.
[00:33:47] >> So,
[00:33:48] >> fix it after that. Um,
[00:33:50] >> yeah.
[00:33:50] >> So, I want to call out some more friends
[00:33:51] joining around the world. We've got
[00:33:52] Ethan from Wales. Um, I've been to
[00:33:55] Wales. Have you both been to Wales?
[00:33:57] >> No, not been to Wales.
[00:33:59] >> Wales is great. Um, my wife also went to
[00:34:01] school in Wales. Uh, Goss from Brazil.
[00:34:04] Uh, we saw that. And also Kevin is a
[00:34:06] Norwegian dialing from Phoenix, so
[00:34:09] that's cool.
[00:34:12] Phoenix,
[00:34:12] >> is it Wait a sec. Is he a Norwegian in
[00:34:15] Phoenix or is he talking about VPN or
[00:34:17] something? [laughter]
[00:34:18] >> He's What? Maybe you have a really good
[00:34:20] reason to VPN into Phoenix.
[00:34:22] >> Yeah. Yeah. I'm downloading it from
[00:34:23] Phoenix. Don't tell my government, you
[00:34:25] know.
[00:34:25] >> I don't want to know why. Okay. Um, so
[00:34:29] let's uh let's keep rotating. Um, I want
[00:34:31] to call out one of the fun features of
[00:34:33] Bill Crew, which is we have a
[00:34:34] leaderboard. Um, so if we could pull up
[00:34:37] my screen, I want to call out the folks
[00:34:39] that are currently uh leading this. And
[00:34:43] annoyingly, Mike is is pretty much
[00:34:45] always in the top 10. So,
[00:34:46] >> but bump the font size, Ryan, by three
[00:34:49] sizes. You want the Yeah, there you go.
[00:34:51] >> Okay. So, there's Mike. Uh, one, two,
[00:34:54] three, four, five. Um, so everybody,
[00:34:57] once you join Bill Crew, then you get an
[00:34:59] email with an invite to join this
[00:35:01] leaderboard. And this is just kind of a
[00:35:03] fun way to keep score uh about what's
[00:35:06] going on. Um, so we've got a diff maxer
[00:35:08] award, which is fun. Most lines change.
[00:35:10] Derek is just crushing it with almost
[00:35:12] 300,000 300,000 lines of code. Uh Ari is
[00:35:17] the most messages. He's got agent
[00:35:19] whisper almost 8,000 messages. Uh
[00:35:22] Reaper, which is the amount of uh lines
[00:35:25] removed, which is kind of fun. And then
[00:35:26] Inquisitor. Um so you can see Mike here.
[00:35:30] Um 215 threads, not not bad. Uh a lot of
[00:35:35] lines of code there. Um it' be
[00:35:37] interesting.
[00:35:38] >> My markdown showing through.
[00:35:39] >> It's marked. Yeah, we should do this. We
[00:35:41] should we should we should analyze the
[00:35:43] lines of code by file type.
[00:35:45] >> Okay, we so if everybody watching your
[00:35:49] uh your assignment is
[00:35:50] >> that would be cool.
[00:35:51] >> Write us equip script um we should make
[00:35:54] a toolbox actually in AMP that uh
[00:35:56] analyzes the amount of lines uh change
[00:36:00] per um per message or markdown. So let's
[00:36:03] go into mics. I'll show you as well. Um
[00:36:05] hey, you need to share some threads.
[00:36:07] What is happening?
[00:36:08] >> Yeah, I I need to get that. A lot of my
[00:36:10] threads are public. I just need to opt
[00:36:12] in.
[00:36:13] >> Followers. How much do how many do I
[00:36:15] have?
[00:36:15] >> All right. So, let's let's let's see.
[00:36:17] Yours, I presume, is
[00:36:20] >> I presume you're just torsten, right?
[00:36:23] >> Yeah. Yeah. No, Mr. Nugget.
[00:36:25] >> Oh, Mr. Come on.
[00:36:27] >> Sorry, Mr. Nuggets.
[00:36:30] >> This is so Oh, I'm not following you.
[00:36:32] Sorry.
[00:36:33] >> Awkward.
[00:36:35] [laughter] Awkward. Okay, but I'll start
[00:36:38] some of these. Play an invitation for
[00:36:39] showing cursor beam. So, this is kind of
[00:36:41] fun, y'all. You can star threads. Um,
[00:36:44] and uh, and so I would encourage you uh,
[00:36:47] popped in here. So, you start a couple
[00:36:49] like from Mitchell, which is kind of
[00:36:51] cool. Um, allstar Mitchells as well.
[00:36:54] This one was a cool. So, we've got good
[00:36:56] uh, profiles. We've got um, the
[00:36:59] leaderboard. So, join us. I feel like
[00:37:01] I'm doing pretty well here. I'm number
[00:37:03] 10 at the moment. Um, I've got a couple
[00:37:06] that I shared recently. This this one
[00:37:08] got a lot of I got [snorts] it got
[00:37:10] something like a thousand bookmarks on X
[00:37:12] when I posted this. Um, because I was
[00:37:15] just going in to to update my agents.mmd
[00:37:19] file. So, I think all of you who are
[00:37:21] doing this are realizing that you really
[00:37:23] have to maintain your agents MD files.
[00:37:27] They degrade. They degrade fast. And you
[00:37:29] have to remember like these things are
[00:37:30] being included with almost every me like
[00:37:32] every thread, every message,
[00:37:34] >> everything. Yeah.
[00:37:35] >> So, make them make them great. So, I
[00:37:37] just said uh some of these sections are
[00:37:38] only really applicable to certain
[00:37:40] directories of code because I had one
[00:37:42] monolithic agent.md file.
[00:37:44] >> Um I said the way that the agent works
[00:37:46] is that it pulls in the agent. MD file
[00:37:48] uh for whenever it's working on files.
[00:37:50] Let's split this out to a top level one
[00:37:52] and into several files and put them in
[00:37:54] the relevant directories. give me your
[00:37:56] plan for doing this. Don't edit
[00:37:58] anything. And I do this a lot. Just
[00:38:00] let's talk for a little while before we
[00:38:01] do anything. Um, and it just found some
[00:38:04] really good, you know, splits. All
[00:38:05] right, there's a root one. Then we've
[00:38:08] got one in our app folder, which is all
[00:38:09] about front end, uh, components. We've
[00:38:12] got database stuff, um, you know, the
[00:38:15] list goes on. And then I kind of, this
[00:38:18] is again where you're, you got to read
[00:38:20] the stuff and and you have this spidey
[00:38:22] sense like, no, I don't think that's
[00:38:23] right. Um, and I just said, you know, in
[00:38:25] lib off. I read it through because I'm
[00:38:28] pretty sure
[00:38:30] >> um, you know, that that's what's used
[00:38:31] for O. So, kind of went through and just
[00:38:34] did a big healthy refactor, added some
[00:38:37] new agent MDs, and I noticed after this
[00:38:41] just a a general kind of improvement in
[00:38:43] how AMP was behaving. So, um,
[00:38:47] >> the I want to double down on this real
[00:38:49] quick or put an exclamation mark behind
[00:38:52] it or underline it or highlight it. Um,
[00:38:56] there was I think I had two customer
[00:39:00] interactions in the last week or so.
[00:39:04] >> Okay. where on the [clears throat]
[00:39:06] surface it's like oh AMP I didn't we
[00:39:09] could be talking about any agent here
[00:39:10] where it's like oh it does this but then
[00:39:12] it thinks this like it would run a build
[00:39:15] tool or it would run a formatter or
[00:39:17] llinter or whatever and then then it
[00:39:19] tries to do this but it cannot do this
[00:39:21] and
[00:39:23] it it reads like a bug um
[00:39:27] >> because the user it didn't work right
[00:39:29] but then when you think about it
[00:39:32] >> the only real sol there's No, nothing
[00:39:34] that I can do as application developer
[00:39:36] of the agent because I cannot tell it
[00:39:39] that you know after this llinter you
[00:39:41] should double check this other thing
[00:39:43] like I don't know about your llinter but
[00:39:45] a lot of this stuff can be fixed by
[00:39:47] putting it in the agents MD by telling
[00:39:49] it about that this is how you release a
[00:39:52] new binary this is how you test a new
[00:39:55] binary this is how you
[00:39:57] >> you know or something like
[00:40:01] >> um Mike what's the what's the format
[00:40:03] matter mix. Is it mix format or
[00:40:06] something? Yeah, mix format, right? You
[00:40:08] could stuff like every time you run
[00:40:11] prettier or go format or mix format.
[00:40:13] Make sure to reread those files because
[00:40:16] >> the old view of your the old view that
[00:40:18] you had of this file is now outdated if
[00:40:20] it was changed, you know, like that
[00:40:22] stuff needs to go in the agents.md
[00:40:24] because the models don't yet know or
[00:40:27] don't know these particular things about
[00:40:29] your codebase. So, yeah, plus one on
[00:40:31] agents MD. Yeah, just update the files.
[00:40:34] Remember, this is th this is how we give
[00:40:36] our agents the Spidey sense that that we
[00:40:40] have,
[00:40:41] >> right? So, I've got some more folks
[00:40:44] calling in from Pakistan. Uh Awan, good
[00:40:46] to have you here. Germo, who's always in
[00:40:49] the leaderboard. He says, "I love to
[00:40:51] sneak in late into my day so I can be in
[00:40:53] the top fiveish [laughter] in the
[00:40:55] six-hour leaderboard, which I love." And
[00:40:58] by the way, Tim wants to know where Mr.
[00:40:59] Nugget comes from. And I I want to know
[00:41:01] too. Reveal all
[00:41:04] >> right now.
[00:41:05] >> Right now.
[00:41:07] >> There's
[00:41:10] there's nothing to say here. Like it's
[00:41:12] just when I [snorts] was 14 years old,
[00:41:16] you know, this was like four years ago.
[00:41:18] When I was 14 years old, while hanging
[00:41:20] out in IRC chats, like we all, me and my
[00:41:23] friends, we would have to come up with
[00:41:24] nicknames, right? And I would hang out
[00:41:26] in I don't know if anybody knows this
[00:41:28] Quaker Net which was a big Iris server
[00:41:30] back. Yeah, there you go.
[00:41:32] >> And you had um you know a lot of names
[00:41:35] like the guys in Reservoir Dogs like Mr.
[00:41:37] Pink, Mr. Black and whatnot. And you had
[00:41:40] other funny nicknames and I didn't like
[00:41:43] my old one anymore and I was looking for
[00:41:45] new one
[00:41:46] >> and I thought nugget is a funny word and
[00:41:50] putting mister in front of it the I
[00:41:52] don't know like that seems funny. So, I
[00:41:55] just used this and I've been at first it
[00:41:58] was Yeah. At first it was camel case
[00:42:00] like big the true capital M and then
[00:42:02] over time it got lower case and
[00:42:04] >> now it's now it is important. [laughter]
[00:42:09] It's I it's I honestly
[00:42:13] so when I got married um you have to go
[00:42:16] to the uh what's the word where you have
[00:42:18] to sign official papers not church or
[00:42:20] anything but you know you have to sign
[00:42:22] the papers and we would sit down with
[00:42:24] the public servant and he was like okay
[00:42:26] blah blah blah Mr. So and so and then
[00:42:29] Mrs. So and so, let me take down your
[00:42:30] date, date of birth, and whatnot. And
[00:42:33] then there was this really awkward
[00:42:34] moment where he asked my wife like, "And
[00:42:38] can I write down your email address?"
[00:42:39] And my wife's email address is, you
[00:42:41] know, first last namegmail.com. And then
[00:42:43] he's like, "What's your email address?"
[00:42:45] And you go, "Mr. Nuggetgmail.com."
[00:42:48] [laughter]
[00:42:49] >> And he's like, "Can you repeat?" You
[00:42:51] know, they're not English speakers. So
[00:42:52] then you spell it out and it's just
[00:42:55] >> Mr. Nugget.
[00:42:57] >> Yeah. Yeah. Mr. Nugget and it's it's
[00:43:00] awkward.
[00:43:02] >> Yeah, it's such it's such I laugh every
[00:43:04] time I see it. So, I think it I think
[00:43:06] >> you're officially forever bound to Mr.
[00:43:09] Nuggetgmail.com.
[00:43:10] >> It's pretty good. Ralph says, "We're
[00:43:12] raising a puppy for the Irish guide dogs
[00:43:14] for the blind, and he's called Nugget."
[00:43:15] So,
[00:43:16] >> nice.
[00:43:16] >> You know,
[00:43:17] >> that's a good name.
[00:43:18] >> That That's a good name, but a good
[00:43:20] reason to be called Nugget, but there
[00:43:22] you go. Um and Awan's gonna host an AMP
[00:43:25] uh cafe, which sounds fun. Um All right.
[00:43:28] So, we're going to keep rolling. Um, if
[00:43:30] you are just joining, tell us where
[00:43:32] you're calling in from. Pop it in the
[00:43:33] comments. We'll read it out. Um, also,
[00:43:35] we were talking about our markdown to
[00:43:38] code ratio or maybe your planning to
[00:43:40] code ratio, however you want to think
[00:43:42] about it. If you want to think a time to
[00:43:44] to time ratio, uh, share that out. We'll
[00:43:47] call it out. Um, I want to share
[00:43:49] something I've been thinking a lot about
[00:43:51] um that I I hope is helpful uh to
[00:43:54] everybody in the crowd. So, if you go
[00:43:55] and share my screen, I'm going to walk
[00:43:57] you through um some stuff that I've been
[00:43:59] building. So, I'm going to explain first
[00:44:02] of all what it is so you can understand.
[00:44:04] So, let me let me make this a little bit
[00:44:06] bigger. So, uh Grace is an agent. Um she
[00:44:10] helps people through divorce. And what I
[00:44:13] wanted to do is build a chat on
[00:44:16] boarding, right? So, I have a like
[00:44:18] there's a lot of complex forms in
[00:44:20] Untangle. Um forms are just not very fun
[00:44:23] to fill out. So I thought I want to
[00:44:24] build a chat flow to do this. Now I
[00:44:27] could have a complex system prompt to do
[00:44:29] this. You know I could build my own
[00:44:31] state machine. Um but I thought I just
[00:44:34] want to try some of the off-the-shelf
[00:44:36] stuff out there and see how good it is.
[00:44:37] So you know Grace welcomes you and says
[00:44:40] where you at? So I'll just say you know
[00:44:42] I'm thinking about getting divorced
[00:44:43] right now. Uh what's happening in the
[00:44:46] background? See over here right? So
[00:44:48] we've got now in the background uh we've
[00:44:52] got an observable workflow here. So so
[00:44:55] this looks pretty gnarly, right? So this
[00:44:57] is like I don't know how many steps, 25
[00:45:00] plus steps. Let me zoom in and show you
[00:45:02] what's going on here. Um okay. So you
[00:45:05] can see here that the ask divorce status
[00:45:10] uh step was just completed. Right now
[00:45:13] what is this stuff? So this is Mastra.
[00:45:15] This is completely free. Right? So this
[00:45:18] is open source. I'm running this
[00:45:20] locally. You don't have to use their
[00:45:21] cloud. Um, and I want to see like how
[00:45:24] good is this stuff? You know,
[00:45:26] essentially agent framework. So you've
[00:45:28] got what are called workflows.
[00:45:30] So I built out this workflow and I'll
[00:45:32] show you the code in a second, but
[00:45:34] you've got an ask divorce status um step
[00:45:36] and then it goes to uh the next step
[00:45:38] which is ask state. Right? So now
[00:45:42] the reason why it's nice to use, you
[00:45:44] know, an LLM for this workflow is
[00:45:46] because you don't have to say, you know,
[00:45:49] number one or number two. Um, you know,
[00:45:52] here I'm going to restart this actually
[00:45:54] and show you a good example of this and
[00:45:56] I'll restart this over here. Okay, so
[00:45:59] here, you know, what if I just say, uh,
[00:46:00] I'm thinking about my options,
[00:46:04] right? So this is a good example where
[00:46:06] you want the you know you'd want a
[00:46:08] workflow that is deterministic but you
[00:46:11] you want all of the flexibility of a
[00:46:13] large language model. So you'll notice
[00:46:15] okay um if we go back over here and you
[00:46:18] do have to refresh this um you'll notice
[00:46:21] that in in the workflow state it did
[00:46:24] pass right? So ask divorce status
[00:46:27] successfully pass. So this is like a
[00:46:28] slightly better UI right you can
[00:46:31] visualize it here. So, let's keep going
[00:46:33] and I'll say, "Yeah, I live in
[00:46:34] Connecticut." Um, and it's I think it's
[00:46:37] a bug with this where I have to actually
[00:46:39] refresh the page to see um that it it
[00:46:42] progressed. So, okay, the point here is
[00:46:45] not to show you like how I did all this.
[00:46:47] The idea is that we're now seeing the
[00:46:49] beginning of of agent orchestration
[00:46:54] uh frameworks, right? And Master is just
[00:46:56] one of them. Um, and let me show you the
[00:46:59] actually code in this because this is
[00:47:00] kind of um something I've been thinking
[00:47:03] a lot about. And again, this isn't a
[00:47:06] commercial for Master. This is free. I'm
[00:47:08] not being paid. Um, this is one of many.
[00:47:10] But when you use Master, you get this uh
[00:47:13] directory on the left here. So, you've
[00:47:14] got an agents, uh, steps, a tools, a
[00:47:17] works flows. So, what does this look
[00:47:18] like in code, right? Um, let me actually
[00:47:21] make let's make this a little Okay, so
[00:47:25] I'm going to go down a little bit. Um,
[00:47:28] all right. What we've got here is the
[00:47:30] workflow, right? And there's a couple
[00:47:32] things about it. There's an input schema
[00:47:33] and output schema. So, it's completely
[00:47:35] deterministic. Um, uh, and typed, right?
[00:47:38] So, you've got the first step. We
[00:47:40] already went through this ask divorce
[00:47:42] status step. So, let's go to the
[00:47:43] definition of this.
[00:47:45] >> Um, you can see
[00:47:48] uh, where did it go? Let's go control O
[00:47:50] to go back. Uh, okay. So, it's got a
[00:47:54] name. It's got an input schema, right?
[00:47:56] We're choosing to bring the user ID in
[00:47:58] here. Um, we've got an output schema
[00:48:00] which is a status, right? Are you
[00:48:03] thinking about divorce or are you
[00:48:04] already getting divorced? And then a
[00:48:05] resume schema and a suspend schema. So
[00:48:07] like this gets us into this whole world
[00:48:09] where we have workflows that can be
[00:48:11] suspended or resumed and then you can
[00:48:14] surface that on on the front end, right?
[00:48:17] Um, and this is like pretty this is not
[00:48:19] rocket science stuff, right? So this is
[00:48:21] the message from Grace. Um, and then we
[00:48:24] we uh instantiate the agent here, right?
[00:48:28] And then this looks a little bit like a
[00:48:30] large language model call, right? So
[00:48:32] you've got uh the the first prompt uh to
[00:48:35] this agent, which is the divorce status
[00:48:37] agent. It determines like is the user
[00:48:40] answering or or how are they answering
[00:48:42] if they didn't say one or two or
[00:48:44] thinking about it.
[00:48:46] >> Um so I don't want to get too in the
[00:48:49] weeds here, but go ahead.
[00:48:51] >> It is it is an agent. No, it's more it's
[00:48:53] like a sub agent in some, right?
[00:48:55] >> Yeah. So, let's actually go look at this
[00:48:57] agent, right? So, the divorce status
[00:48:59] agent,
[00:49:01] >> this is the way Mastro defines it,
[00:49:02] right? So, you've got a name and you've
[00:49:04] basically got a system prompt and then
[00:49:06] you have a model and that's it, right?
[00:49:10] >> Yeah.
[00:49:10] >> And then what's interesting, so if we go
[00:49:12] back to the the workflow, right? So, you
[00:49:14] say, I've got a step I want you to ask
[00:49:16] the divorce uh uh status. And then we go
[00:49:19] in here. Now there's a couple kind of
[00:49:21] things like you can say I want
[00:49:23] structured output. Okay, I want an enum
[00:49:26] which is thinking or filed
[00:49:28] >> uh and I want to use you know thinking
[00:49:30] budget etc.
[00:49:32] >> So now everyone watching this is I don't
[00:49:34] want to get too in the weeds because
[00:49:35] this might be confusing about how this
[00:49:37] actually works but the the thing I want
[00:49:38] to flag here is that we're seeing pretty
[00:49:42] good agentic orchestration frameworks
[00:49:44] begin to appear. Um, and all of this
[00:49:48] works uh let me go back uh to all of
[00:49:53] this works with Nex.js JS and AI SDK
[00:49:56] right which a lot of folks are using
[00:49:58] right and um the last thing I'll say is
[00:50:01] you've got observability so you can
[00:50:03] build all this stuff and I had built a
[00:50:05] lot of this front tangle myself um but
[00:50:07] you get out of the box observability
[00:50:10] u so I can actually come down here and
[00:50:12] see you know what actually happened in
[00:50:16] this call and what was sent you know uh
[00:50:19] and and parse through it so um I think
[00:50:23] we're in an interesting world where
[00:50:24] where this stuff is getting easier and
[00:50:26] easier. Um, but I want to ask your two's
[00:50:29] take on this. Like everyone who's
[00:50:32] watching who's thinking about building
[00:50:33] agents that isn't building a coding
[00:50:34] agent, do you think we're going to see
[00:50:36] more of these kind of frameworks pop up?
[00:50:38] Are they overengineered?
[00:50:40] Um, uh, Mike, why don't you go first and
[00:50:42] then to
[00:50:44] >> um, so
[00:50:46] I've effectively spent the last those
[00:50:48] nine months building a MRA in Elixir.
[00:50:52] Oh, that way.
[00:50:55] >> So, um, MRA's great. It's a a great
[00:51:00] place to get started and and the balance
[00:51:02] when you're building those agents is
[00:51:04] just what you showed of the a
[00:51:07] deterministic workflow. and really how
[00:51:10] much rope you give the agent to take
[00:51:14] structured input and produce structured
[00:51:16] output
[00:51:18] >> through either an experience that you're
[00:51:20] trying to create for the user. And so
[00:51:23] far again kind of what you had showed
[00:51:26] it's very sequential.
[00:51:28] >> Yeah.
[00:51:29] >> You there's very limited ability for
[00:51:33] these style these type of agents to
[00:51:35] branch off and and get creative. So I
[00:51:38] will I will tell you like branching and
[00:51:39] looping is built into master which is
[00:51:41] part of the reason I chose it.
[00:51:43] >> Awesome. Mhm. Mhm.
[00:51:46] >> I think that the world is going to
[00:51:48] evolve into
[00:51:50] what I call kind of the higher or more
[00:51:53] complicated algorithms of, you know,
[00:51:55] tree of thought, algo of thought, graph
[00:51:58] of thought, um, beyond chain of thought
[00:52:00] and you're going to see a
[00:52:03] growth of the sub aent kind of flow.
[00:52:07] >> I It's all It's all sub aents. Like I
[00:52:10] tweet about this like people say it's an
[00:52:12] agent but the truth is like an agent is
[00:52:14] now a collection of you know 20 sub
[00:52:16] aents
[00:52:17] >> all using different models.
[00:52:19] >> Correct. You know pulling it all
[00:52:22] together like a jazz band. Right. I I
[00:52:24] love the music metaphor.
[00:52:26] >> It's the jazz band coming together.
[00:52:28] Everybody's playing a different
[00:52:29] instrument and being able to orchestrate
[00:52:33] that to create a great user experience
[00:52:36] is sort of right where the edge is at.
[00:52:39] right now and I think what you're doing
[00:52:41] I see a lot of inspiration the work you
[00:52:44] just showed from the coding agent world
[00:52:46] where something like AMP is you know a a
[00:52:50] lot further ahead in what it is capable
[00:52:52] of
[00:52:52] >> but the coding agents are providing a
[00:52:55] really great frame of reference
[00:52:57] >> to those of us building you know user
[00:53:00] experience agents that automate
[00:53:03] workflows and
[00:53:05] >> um that bridge you know you you see the
[00:53:07] gap closing and I you know what you what
[00:53:09] you showed was awesome. That's that's
[00:53:11] great.
[00:53:12] >> Thanks. I mean it's built from necessity
[00:53:14] like you need these tools like you need
[00:53:17] workflows, you need observability, you
[00:53:20] you you know you need all this otherwise
[00:53:22] you can't build good stuff and it it's
[00:53:25] still a ton of elbow grease. It just
[00:53:26] blows my mind. It
[00:53:27] >> is very difficult.
[00:53:29] >> We can talk about that. I've I will say
[00:53:33] um and I see the comment about MSRA
[00:53:35] versus BAML. I would say MSRA and BAML
[00:53:38] are complimentary. BAML is more of a LLM
[00:53:41] inquiry language to make structured
[00:53:45] calls and then return back more advanced
[00:53:48] structured outputs.
[00:53:49] >> Oh, interesting.
[00:53:50] >> And BAML can work with MRA.
[00:53:54] >> So take a look into BAML. Yeah, DAM
[00:53:56] Bamos um
[00:53:59] I don't want to
[00:54:00] >> is it something markdown language? What
[00:54:02] does it stand for?
[00:54:03] >> It is a I don't know what BMAL stands
[00:54:05] for. something something markdown
[00:54:07] language itself. It is its own
[00:54:09] standalone language that compiles into
[00:54:13] LLM calls.
[00:54:14] >> Oh, interesting.
[00:54:15] >> So, very cool stuff. Very advanced.
[00:54:17] >> Let me ask to what he thinks about this
[00:54:19] because I do I do feel, you know, the I
[00:54:24] I do feel like these frameworks add
[00:54:27] latency that I can feel, right? And
[00:54:30] maybe it's just in my head and I can
[00:54:32] look at the trace and see it as well.
[00:54:34] But Torstston, do you where do you think
[00:54:36] we're going to see more of these agentic
[00:54:38] frameworks pop up for people that are
[00:54:41] not building coding agents but other
[00:54:43] agents? Does it matter?
[00:54:47] >> I Okay, disclaimer. I have not built any
[00:54:51] application with these frameworks. Um,
[00:54:55] I also, you know, looked at lang chain
[00:54:59] and other frameworks like that last year
[00:55:00] and then they you you kind of realize
[00:55:03] there's not like I can build a lot of
[00:55:05] this stuff myself. I don't need this.
[00:55:07] >> Yeah. But what I do like about
[00:55:11] this category of workflow things and
[00:55:14] that's the only thing I can add here is
[00:55:17] I think it's important to keep the
[00:55:21] distinction between deterministic code
[00:55:23] and non-deterministic code
[00:55:26] >> important front and center. And one of
[00:55:28] the things that I criticized in the past
[00:55:31] about you know sub agents and why I'm
[00:55:33] kind of wary of sub agents encoding
[00:55:36] agents is that they are controlled not
[00:55:38] by deterministic workflows but you know
[00:55:41] by the main agent and that's not
[00:55:43] deterministic and you know Mike the
[00:55:46] prompts you showed earlier they were
[00:55:48] super focused small prompts but that's I
[00:55:53] think there's a danger that a lot of
[00:55:54] people they use the main agent asked
[00:55:57] this deterministic thing and they assume
[00:55:59] if I tell it to spawn 51 sub aents it
[00:56:02] will spawn 51 sub agents and it won't
[00:56:04] like it might once or twice but it's not
[00:56:07] reliable and what I find fascinating is
[00:56:12] I do like this idea that we now can do
[00:56:15] that's nondeterministic that's fuzzy but
[00:56:18] you still need to wire it up and put it
[00:56:20] in loops and conditions that are
[00:56:21] deterministic and if I look at this
[00:56:24] framework
[00:56:25] >> you know it's about I automating
[00:56:27] workflows, right? And if you think about
[00:56:29] say a a like a chatbot or whatever, you
[00:56:33] you get some input and then the user
[00:56:34] needs to do this and this and this and
[00:56:36] this.
[00:56:37] >> At the end of the day, previously
[00:56:40] business applications were kind of, you
[00:56:44] know, putting us into these forums and
[00:56:45] these strict flows and actually it
[00:56:47] doesn't matter whether you enter your
[00:56:49] date of birth first or upload your
[00:56:51] password. It does not matter, right? And
[00:56:53] it doesn't matter if it's, you know,
[00:56:55] that stuff doesn't what matters is that
[00:56:57] the result comes out and it's all
[00:56:58] validated. And I think now
[00:57:02] >> it's starting we're starting to be freed
[00:57:04] from this where you know like it does
[00:57:07] not matter at the end of the day you can
[00:57:08] even hold up a postit to the webcam with
[00:57:11] your name on it and it should work
[00:57:12] versus
[00:57:13] >> Amen.
[00:57:14] >> Oh, you use the capital letter and the
[00:57:16] you know whatever feel. So
[00:57:18] >> yeah,
[00:57:19] >> to to be super philosophic about it, I'm
[00:57:22] excited about stuff that allows us to
[00:57:25] use the determinism of, you know, that
[00:57:28] lang computers are good at and that also
[00:57:30] lets us allow to use
[00:57:32] >> yes
[00:57:32] >> power of fuzziness that the these models
[00:57:35] are good at
[00:57:35] >> and and then and then you get this
[00:57:37] beautiful user experience like you know
[00:57:39] and I had handcoded that determinism
[00:57:41] before but it's like you're rebuilding
[00:57:44] you know core protocols that you know
[00:57:46] every single
[00:57:49] you know, and so master has memory out
[00:57:51] of the box, right? And all these things
[00:57:53] you just turn it on and
[00:57:55] >> um and I just think about how much
[00:57:57] easier this is going to be for all of
[00:57:58] you watching it. Like, you know, try out
[00:58:00] these tools, see how they feel um and
[00:58:04] realize you don't have to write all this
[00:58:06] from scratch anymore. Uh unless you are
[00:58:09] masochistic,
[00:58:10] >> everyone should go build an agent by
[00:58:12] hand.
[00:58:13] >> Yeah, do that first.
[00:58:15] >> Take take the time to do it. you'll
[00:58:16] you'll it'll really click that light
[00:58:18] bulb moment will come
[00:58:20] >> and
[00:58:21] >> they're not going away. They're they're
[00:58:24] we're gonna have a lot of agents in our
[00:58:25] future and the better you get at it now,
[00:58:27] the better you're going to be.
[00:58:29] >> Um
[00:58:30] >> I'll make one last
[00:58:32] >> thought to share as I've spent.
[00:58:34] >> There's going to be this balance I think
[00:58:37] in the future as inference continues to
[00:58:40] get a little bit less expensive. But my
[00:58:42] hypothesis that our need for agents is
[00:58:45] going to outpace our ability to pay for
[00:58:47] inference
[00:58:49] >> because an agent that can spin off a
[00:58:51] hundred sub aents, a thousand sub agents
[00:58:54] gets very expensive if you let it go
[00:58:58] wild. So we're going to have to figure
[00:59:00] out how to balance deterministic agents,
[00:59:03] state machines. There are other AI
[00:59:05] algorithms, behavior trees, hierarchical
[00:59:07] task networks been around 30 years.
[00:59:10] >> Yep. with the LLM non-deterministic
[00:59:13] flows and they need to work in harmony
[00:59:15] together.
[00:59:16] >> That's my hypothesis for the future and
[00:59:18] what I've been spending the last, you
[00:59:20] know, nine months building. So,
[00:59:22] >> happy to chat more about it, but um it's
[00:59:25] it's an exciting future.
[00:59:26] >> It is. I can't believe we're alive right
[00:59:28] now. Um Torston, Mike, appreciate your
[00:59:30] time. You're both busy, valuable people,
[00:59:32] so I appreciate you being here. Um
[00:59:34] thanks to our producers behind the
[00:59:36] scenes for doing this. Well, thanks to
[00:59:37] everyone for joining. Um, want to call
[00:59:39] out Yasin said he's joining from
[00:59:41] Austria, not Australia. We have the
[00:59:43] Alps, not kangaroos. [laughter]
[00:59:46] So, um, everybody, thanks for joining.
[00:59:48] Thanks for watching, and we will see you
[00:59:50] not next week because Tors and I are in
[00:59:52] San Francisco, uh, but the week after.
[00:59:54] We'll be back with Bill Crew Live.
[00:59:56] Thanks everybody. We'll see you next.
[00:59:58] Bye bye. Bye bye.
