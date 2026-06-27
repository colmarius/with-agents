---
title: "Keynote: Linus Torvalds, Creator of Linux & Git, in Conversation with Dirk Hohndel"
resourceId: 7
summarySlug: "linus-torvalds-on-ai"
sourceUrl: "https://www.youtube.com/watch?v=tWx769t1JKg"
videoId: "tWx769t1JKg"
capturedAt: "2026-06-27T15:03:00.317Z"
channel: "The Linux Foundation"
language: "en"
kind: "auto-generated"
durationSeconds: 1797
---

## Transcript

[00:00:00] Good morning. [clears throat]
[00:00:01] Ah, this is the the wonderful moment
[00:00:04] when all the cell phones are pointed at
[00:00:06] us.
[00:00:06] >> Yeah.
[00:00:07] >> Yeah. Yeah. I think there's maybe going
[00:00:09] to be an official video. You don't have
[00:00:11] to hold your phone the whole time. So,
[00:00:13] my name is Durk Hundle. I do this thing.
[00:00:16] I think I'm the CTO. What? Okay. No, I
[00:00:20] I'm I run open source at Verizon. Um, I
[00:00:23] have been around the Linux Foundation
[00:00:25] since its inception and around Linux
[00:00:28] almost as long as you sky because you
[00:00:31] are. Yes. Uh, I'm [clears throat] Lionus
[00:00:34] and we do this thing because I hate
[00:00:37] giving public speak speeches. So,
[00:00:40] instead I have no idea what Durk is
[00:00:43] going to ask me. Uh, we've done this
[00:00:46] pretty much once or twice a year for the
[00:00:48] last too many years.
[00:00:50] uh we did this here in so maybe 10 years
[00:00:53] ago too. So this is not a new format but
[00:00:58] but this makes me much more comfortable
[00:01:00] with the whole public persona thing that
[00:01:02] I normally am not very happy about.
[00:01:06] Yeah. And comfortable is very relative
[00:01:08] in that context. So this is indeed the
[00:01:10] 28th time that we are doing this which
[00:01:13] is kind of fun to think about. We were
[00:01:15] here exactly 10 years ago. Uh, and I'm
[00:01:18] very glad that we are back. I love
[00:01:20] Korea. I have a lot of personal
[00:01:23] connection to Korea. Um, and for me,
[00:01:26] it's always interesting to to travel to
[00:01:29] Asia and see a very different approach
[00:01:32] to how how people look at open-source,
[00:01:36] how people look at software development.
[00:01:38] It's it's a very different world, which
[00:01:40] I find fascinating. So, Linus, 10 years
[00:01:43] ago, you had just released Linux 4.8.
[00:01:47] eight
[00:01:48] and um so I'm sure you can summarize
[00:01:51] real quick the major changes since then.
[00:01:55] >> Yeah. Now there's been a lot of work.
[00:01:58] What I do have to say and I tend to
[00:02:00] repeat this because uh it's important is
[00:02:04] I don't do any of the real work. For the
[00:02:09] last almost 20 years I've not been a
[00:02:12] programmer. I've been a technical lead
[00:02:16] and maintainer of the system. Uh and
[00:02:19] that's true both of Linux and even more
[00:02:22] so of Git where I really just uh look at
[00:02:25] it from the side. So I want to just
[00:02:27] remind people that that all the real
[00:02:30] work is done by
[00:02:32] other people maybe some of the people in
[00:02:35] the audience. So people sometimes give
[00:02:38] me too much credit for for being around.
[00:02:42] I I just shepherd the kernel project
[00:02:45] these days.
[00:02:46] >> Yeah. So but if you if we look at the
[00:02:49] last 10 years, what stands out to you in
[00:02:52] the process of how Linux has evolved and
[00:02:55] progressed?
[00:02:57] >> So what stands out to me a lot is that I
[00:02:59] used to say that hey at some point
[00:03:03] we're done. But that was a long long
[00:03:06] time ago. Uh and and it's been almost 35
[00:03:11] years of doing Linux for me right now.
[00:03:14] And I don't feel like at some point
[00:03:16] we're done.
[00:03:18] >> Uh in fact, I've gone to come to the
[00:03:20] conclusion that
[00:03:24] all real projects, the real work is is
[00:03:27] in maintenance and ongoing support. And
[00:03:31] especially for the kernel, uh we had
[00:03:34] this discussion with Greg yesterday that
[00:03:36] as long as people continue to make new
[00:03:39] hardware, [snorts] we will have more
[00:03:43] work to be done on the kernel side. But
[00:03:45] even without that, and this is where I
[00:03:48] somewhat I'm surprised, uh, we actually
[00:03:52] still 35 years into the project, we're
[00:03:55] still doing like fixing up core kernel
[00:03:59] code and and making things prettier and
[00:04:02] making them more maintainable and
[00:04:05] stable. And I mean, I had a
[00:04:09] discussion about cleaning some stuff up
[00:04:11] today at 3:00 a.m. because I was
[00:04:13] jetlagged. Uh so um with
[00:04:18] with a system like Linux the the real
[00:04:22] work really ends up being just
[00:04:25] maintaining it and keeping everything
[00:04:27] working uh as you get new challenges
[00:04:30] whether they be from hardware or from
[00:04:32] new software loads that that we end up
[00:04:35] experiencing.
[00:04:36] >> Yeah. If if I look at the process, we
[00:04:38] have had a very consistent process in
[00:04:40] the Linux kernel development for 15
[00:04:43] years now. And one of the things that's
[00:04:46] so interesting is that to the press,
[00:04:48] this is too boring. And so we get a lot
[00:04:51] of focus on every time Lennis raises his
[00:04:54] voice,
[00:04:55] >> anytime that there is even the slightest
[00:04:57] rejection of this proposed thing. And so
[00:05:02] in your perception, has it gotten
[00:05:04] better, gotten worse? stayed the same
[00:05:07] the the number of times where you feel
[00:05:09] that you have to speak up and say no
[00:05:11] we're not doing this
[00:05:13] >> um one thing that has changed is I used
[00:05:16] to say that my job is often to say no
[00:05:20] that people come and uh have some
[00:05:24] radical new idea that maybe it's really
[00:05:28] interesting but at the same time it it
[00:05:31] sounds like a maintenance nightmare and
[00:05:33] I go No, you go off, you prove this new
[00:05:38] feature in your own sandbox and you do
[00:05:41] this and then you come back with numbers
[00:05:44] and show that I was wrong. And that was
[00:05:47] what I felt was a large portion of my
[00:05:51] job as a a maintainer of the system. And
[00:05:54] it turns out
[00:05:56] the last few years I felt that sometimes
[00:05:59] my job is to say yes because we one of
[00:06:03] the things about having been around for
[00:06:05] so long with uh tens hundreds of
[00:06:09] maintainers that have been around for
[00:06:11] decades by now people kind of get stuck
[00:06:14] in a rut and sometimes you want to shake
[00:06:18] things up and and say hey we're going to
[00:06:21] try this new thing and I'm the person
[00:06:23] who says Okay, we'll go ahead and and I
[00:06:26] mean I'm giving Rust as an example of
[00:06:30] that even though we've been doing Rust
[00:06:32] now for what five years. So it's not
[00:06:34] exactly new but it was something where I
[00:06:37] felt that the kernel shouldn't stagnate
[00:06:40] and we needed to do something new and
[00:06:42] bring in new people. So, so that's
[00:06:46] that's one thing that has changed for me
[00:06:47] is that I actually feel like sometimes I
[00:06:50] need to encourage some of the other
[00:06:52] maintainers to be more open to to new
[00:06:55] ideas.
[00:06:56] >> Yeah, Rust was exactly one of the
[00:06:58] examples I was going for. And one of the
[00:07:00] things that I've noticed is that even
[00:07:03] though it's been around now for 5 years
[00:07:05] and with actual code in the kernel maybe
[00:07:07] for three, um, it certainly created some
[00:07:11] noise. We had people express their
[00:07:14] frustration. There have been arguments
[00:07:16] [clears throat] about the formatting.
[00:07:17] There have been arguments about
[00:07:20] reviewing code that isn't in your
[00:07:22] language that you're comfortable with.
[00:07:24] We even had maintainers step down over
[00:07:26] this. So, is it worth it? Is the
[00:07:30] introduction of new technologies worth
[00:07:32] the disruption to our processes?
[00:07:35] >> I think it's worth it. But I also think
[00:07:36] that yes, Rust has generated a lot of
[00:07:40] press maybe because it's a very visible
[00:07:43] part of the kernel and I mean Rust is
[00:07:45] obviously visible in other areas too but
[00:07:47] at the same time I mean we have
[00:07:49] disagreements in pretty much every area
[00:07:51] of the kernel. It's it's part of the
[00:07:53] process of doing new development and
[00:07:56] finding bugs and people
[00:07:59] sometimes get quite animated when they
[00:08:02] want to make their point heard and uh
[00:08:07] and I don't think Rust in that sense has
[00:08:09] been all that different from many other
[00:08:11] areas. It's just that it maybe gathered
[00:08:14] some more news. Um we're finally at the
[00:08:19] point I think maybe Greg will talk about
[00:08:21] that. Who knows? He knows he follows
[00:08:23] that more than I do where where Rust is
[00:08:26] actually becoming a
[00:08:28] a real part of the kernel instead of
[00:08:30] being this experimental thing. But but
[00:08:32] it it did take longer than I was
[00:08:35] expecting. Certainly.
[00:08:36] >> Yeah. So, and I mean the the more
[00:08:39] noticeable events of excitement actually
[00:08:42] weren't related to Rust. The first
[00:08:44] ejection of a component from the kernel
[00:08:46] had nothing to do with Rust. It's all
[00:08:49] about peling. Um yeah, we had this year
[00:08:53] was a bit tumultuous. We we had a lot of
[00:08:58] disagreements to the point where where
[00:09:01] parts of the kernel was made external
[00:09:03] just to avoid a lot of friction. To be
[00:09:08] fair, that was not the first time it
[00:09:09] happens. We have
[00:09:12] >> it. We've had pieces of the kernel that
[00:09:16] were not being used or had serious
[00:09:19] enough issues that we had to excise from
[00:09:21] the kernel. It's rare. Uh in 35 years,
[00:09:24] it's happened only a handful of times.
[00:09:26] So um it's um it's not an enjoyable
[00:09:31] experience, but at the same time, I feel
[00:09:33] that we're we've been able to deal with
[00:09:36] it fairly well. Um any big project were
[00:09:39] literally thousands of people. We have
[00:09:41] every single release. We have over a
[00:09:44] thousand people involved and that's
[00:09:47] every two months, right? You will have
[00:09:50] personal disagreements, you will have
[00:09:52] professional disagreements, you will
[00:09:54] have friction and and that's all part of
[00:09:56] life and and and I think we're mostly
[00:10:00] one big
[00:10:02] happy family. I I I think I would more
[00:10:05] describe it as a very mature group of
[00:10:07] people who have figured out how to work
[00:10:08] with each other. But yeah, I'll go with
[00:10:10] the happy family. Normally the first
[00:10:12] thing I ask you, but today it's at the
[00:10:14] end of the first section. Anything you
[00:10:17] want to say about uh 618 RC4?
[00:10:21] No. So that's the current kernel
[00:10:23] version. Um
[00:10:25] I like boring and boring to me is
[00:10:29] no super exciting new features that will
[00:10:32] break machines for millions of people
[00:10:35] around the world.
[00:10:36] uh 6.18 does not seem to be a problem
[00:10:40] spot. We had we had a
[00:10:44] rash of test failures and it turned out
[00:10:47] they were to a large degree they were
[00:10:49] actually failures of the tests not of
[00:10:52] the kernel. Um, so I was a bit worried a
[00:10:56] couple of weeks ago, but it seems to be
[00:10:59] shaping up to be
[00:11:02] >> another incremental and boring in the
[00:11:05] best possible way release.
[00:11:07] >> I mean, if you if we look at the major
[00:11:09] changes in the industry, I think one of
[00:11:11] the biggest change is on the hardware
[00:11:13] side, right? We for decades and decades
[00:11:17] was all about the CPU and that's all
[00:11:19] everyone talked about. who has the
[00:11:20] fastest CPU, the best architecture and
[00:11:23] the last few years with Nvidia and less
[00:11:26] so some other companies like AMD uh have
[00:11:30] really taken the the spotlight with with
[00:11:33] the depending which artificial term you
[00:11:36] want to use the APUs the uh accelerated
[00:11:40] processors and what is interesting is
[00:11:43] that while all of this talks to Linux
[00:11:47] machines it's actually not Linux that is
[00:11:50] running on these processors. So how do
[00:11:54] you think about that evolution that the
[00:11:56] the center of the hardware attention
[00:11:58] actually moved away from us?
[00:12:01] >> I I don't see it that way. So uh partly
[00:12:05] because I still think that the most
[00:12:07] interesting part is the general purpose
[00:12:09] CPU. It may not get the news so much
[00:12:11] because it's been around forever and it
[00:12:14] is what it is and and people kind of
[00:12:16] take it for granted. And uh Linux is
[00:12:20] there to do all the maintenance and the
[00:12:23] bring up and the like all the UIs and
[00:12:26] everything that you kind of expect from
[00:12:29] a system. And then you have the
[00:12:32] AI side that does the new darling of the
[00:12:36] industry and and that's fine and it's
[00:12:39] completely well it's not completely
[00:12:41] separate but it's a a different kind of
[00:12:43] environment that Linux helps foster and
[00:12:48] helps bring about but that I don't feel
[00:12:51] that the kernel necessarily needs to be
[00:12:54] a hugely integral part of
[00:12:56] >> yeah I mean Linux is obviously the
[00:12:58] launch pad where all of the interaction
[00:13:00] happens. But the the software that
[00:13:03] drives this hardware for the first time
[00:13:06] in decades is now again predominantly
[00:13:09] proprietary. The the micro kernel
[00:13:11] running on the GPUs, a software stack
[00:13:14] like CUDA on top that's all proprietary
[00:13:17] software.
[00:13:17] >> But that's to me as a kernel person
[00:13:20] that's really no different from user
[00:13:22] space. So that has always been true that
[00:13:26] uh while I personally love open source
[00:13:29] and I would not want to be involved in
[00:13:31] any project that isn't open source
[00:13:34] to me it has never been religion right
[00:13:37] so I do open source and Linux is open
[00:13:41] source but people have always run uh
[00:13:44] commercial applications on top of Linux
[00:13:47] uh whether they be big databases whether
[00:13:51] they be cloud services, anything like
[00:13:53] that. And uh and that's that's normal.
[00:13:58] And the GPU is just to me a different
[00:14:02] form of the same thing where where you
[00:14:04] run your AI workload
[00:14:08] on top of the kernel. And the fact that
[00:14:10] it has its own
[00:14:12] own system for maintaining the the hard
[00:14:16] GPU hardware is not something Linux
[00:14:20] generally worries about too much. we do
[00:14:22] actually get involved to some degree.
[00:14:23] There's a lot of resource management
[00:14:25] that um virtual memory handling things
[00:14:29] like that where where the kernel is
[00:14:31] intimately involved and uh that has
[00:14:34] actually been one of the nice parts of
[00:14:36] AI is it made Nvidia be a good player in
[00:14:41] the Linux kernel space. Uh famously not
[00:14:44] true 20 years ago. These days when when
[00:14:48] Linux has been so important to the AI
[00:14:50] cloud uh suddenly Nvidia cares deeply
[00:14:54] about Linux and we have a lot of kernel
[00:14:56] maintainers from from from that quarter
[00:14:59] too. So that has been one of the
[00:15:03] positive sides of of the AI boom.
[00:15:05] >> I I think it's a very positive thing.
[00:15:07] Every time a vendor embraces what we do
[00:15:09] and engages that's great. But now you've
[00:15:11] said AI so many times I I have to talk a
[00:15:15] little bit about that. It's all your
[00:15:16] fault. Last year we talked about the
[00:15:19] idea that AIS could be useful or Genai
[00:15:22] could be useful for code review for
[00:15:25] explaining code and I know quite a bit
[00:15:28] of work has been done in the in the
[00:15:29] Linux kernel community around that.
[00:15:32] Where do you think this is today?
[00:15:35] >> Well, it's not there today. I mean we're
[00:15:37] we have people who are doing a lot of
[00:15:40] work in using AI mainly to help
[00:15:44] maintainers deal with the flow of
[00:15:47] patches and and backporting patches to
[00:15:49] stable versions and things like that. Uh
[00:15:53] honestly from a practical standpoint a
[00:15:56] lot of that is experimental and the big
[00:16:00] issues we see is that AI has been very
[00:16:03] disruptive to a lot of our
[00:16:05] infrastructure. So we have we have the
[00:16:08] AI crawlers that crawl all over the
[00:16:12] colonel.org source infrastructure and
[00:16:16] and that has been a huge pain and not
[00:16:19] always pleasant. So there's there's some
[00:16:21] good and some bad. Um I I'm still very
[00:16:25] much I'm looking forward to the day when
[00:16:28] AI is less hyped and more like the
[00:16:32] everyday reality that nobody
[00:16:34] talks constantly about and that's
[00:16:37] clearly still a few years from now. I
[00:16:41] think exciting new technologies are
[00:16:43] always what people want to talk about
[00:16:44] and of course with the trillions of
[00:16:46] dollars being invested. There is there's
[00:16:49] a lot of of curiosity. But one of the
[00:16:52] things that that I found interesting in
[00:16:54] in Amsterdam at the open source summit
[00:16:57] there, Daniel Stenberg from Lip Curl
[00:16:59] talked about how the AI generated uh
[00:17:03] slop security submission, security
[00:17:06] reports are almost a denial of service
[00:17:08] attack on his project. And is this
[00:17:10] something that you see?
[00:17:12] >> We have seen it on the colonel side. We
[00:17:14] have not seen it to to that degree, but
[00:17:17] we do see uh bug reports and security uh
[00:17:21] notices that are clearly
[00:17:24] basically made up by people who misuse
[00:17:30] AI and and it does take resources away
[00:17:33] from maintainers. Um it has been a
[00:17:36] bigger problem in in some other projects
[00:17:39] than it has been for the kernel.
[00:17:41] >> That's great. [laughter]
[00:17:43] So the other use of course that everyone
[00:17:45] wants to talk about is AI for code
[00:17:48] generation. So I I always talk about
[00:17:50] autocorrect on steroids because AI is
[00:17:53] fantastic at code completion at helping
[00:17:56] you with syntax with standard libraries
[00:17:59] and then at the other end of the
[00:18:01] spectrum what today is talked about is
[00:18:04] agentic AI. to basically having an AI
[00:18:08] agent to to which you say, "Hey Claude,
[00:18:11] I want you to develop this feature all
[00:18:14] the way to people saying in a week with
[00:18:16] the help of one of those AIs, I built a
[00:18:19] complete product." Are you playing with
[00:18:22] this at all?
[00:18:23] >> Um, I'm not playing with it at all. I'm
[00:18:26] sure people are are looking at it even
[00:18:29] for the kernel code base. Um, I suspect
[00:18:34] the kernel is insular and different
[00:18:38] enough that despite us having a lot of
[00:18:41] code in the open that you can use to
[00:18:44] teach AI, it doesn't tend to be I mean I
[00:18:47] I don't think a lot of people are doing
[00:18:49] vibe coding for the kernel. I I think
[00:18:51] people are doing vibe coding for own
[00:18:54] small personal projects and I actually
[00:18:57] think I see that as mostly a a a
[00:19:00] positive thing. I I just think of how
[00:19:03] when I grew up, I have a hard time
[00:19:05] seeing people, but I'm guessing not a
[00:19:09] lot of the people in the audience grew
[00:19:11] up with computers and and reading
[00:19:14] magazines and typing in programs from
[00:19:16] computer magazines [laughter]
[00:19:18] 45, 50 years ago.
[00:19:22] No hands came up onto that. Uh but
[00:19:24] that's that's how I got into computers.
[00:19:26] And I feel like uh computers have gotten
[00:19:29] so complicated and your expectations of
[00:19:34] programming have gotten so much higher
[00:19:37] that it's much harder to get started
[00:19:39] these days than it was when I was young
[00:19:41] and I got into computers and I got
[00:19:43] excited about it. And I actually think
[00:19:45] that vibe coding may be a horrible
[00:19:48] horrible idea from a maintenance
[00:19:51] standpoint if you actually try to make a
[00:19:54] product for it. But I think it's a great
[00:19:56] way to to make for new people to to get
[00:20:01] involved and get excited about computers
[00:20:04] and get computers to do something that
[00:20:06] maybe they couldn't
[00:20:08] >> do otherwise. And so I actually am
[00:20:10] fairly positive about this all and I
[00:20:12] mean and that's obviously ignoring all
[00:20:14] the people who then hope to make
[00:20:16] billion-dollar companies by just using
[00:20:18] VIP coding. But uh I I see it as
[00:20:21] something exciting and something new and
[00:20:23] something good even if clearly uh I
[00:20:27] think people's expectations from u when
[00:20:30] I talked earlier about how real projects
[00:20:33] are a lot about maintaining it and uh I
[00:20:36] I think people will notice that pipe
[00:20:38] coding may not be the way towards that.
[00:20:42] >> Yeah. I mean there's obviously there is
[00:20:44] this thrill the excitement of coming in
[00:20:47] into a new programming language, a new
[00:20:49] environment, a new set of libraries and
[00:20:51] have the tool do 90% of the work but
[00:20:55] I've been spending a lot of time on this
[00:20:57] and the tools get you to 90% and they do
[00:21:01] an amazing job at that. It's that last
[00:21:03] 10% and that last 10% is
[00:21:05] >> the last 10% is the thing that takes 34
[00:21:07] years out of your 35 year project. So
[00:21:10] >> exactly. So there is there is a lot of
[00:21:13] opportunity here to create great things
[00:21:16] but there's also a lot of need to then
[00:21:19] make this actually real. But we do see a
[00:21:22] lot of talk about layoffs of software
[00:21:26] developers, real job losses in the US,
[00:21:29] thousands, tens of thousands of people
[00:21:31] getting laid off and usually with the O
[00:21:33] AI makes us so much more productive. And
[00:21:37] so if you think about people who are
[00:21:40] students today thinking about computer
[00:21:43] science, do you think there will be a
[00:21:46] significant impact on software
[00:21:48] development as a career?
[00:21:52] I honestly don't know. Uh this is one of
[00:21:55] those things where I will just say hey
[00:21:58] let's wait a few years to see what the
[00:22:01] real answer is because I think it's a
[00:22:03] complicated question and I suspect
[00:22:08] my personal opinion is that you will
[00:22:10] notice that you will need all the same
[00:22:12] maintainers to actually keep that
[00:22:15] project going and that AI is just
[00:22:19] another tool. the same way compilers
[00:22:22] freed people from writing assembly code
[00:22:26] by hand and increased productivity
[00:22:28] enormously
[00:22:30] but didn't make programmers go away. I
[00:22:33] think AI in the end will be that too
[00:22:36] that it's another tool that allows you
[00:22:39] to not have to deal with all of the
[00:22:43] minutia
[00:22:45] but it doesn't make the actual
[00:22:47] programmers go away. That's that's my
[00:22:49] gut feel. And if anything, it probably
[00:22:52] makes
[00:22:54] people more productive, but also opens
[00:22:58] up whole new areas of development and
[00:23:01] and you actually end up with more
[00:23:04] software programmers for that reason.
[00:23:08] >> That is exactly what I was thinking
[00:23:10] about. Um, if you if you have all these
[00:23:12] productivity gains, there are a couple
[00:23:14] of things you can do. You can say I do
[00:23:15] the same thing with fewer people or I do
[00:23:18] more things with the people that I have.
[00:23:20] >> Yeah.
[00:23:20] >> And and to me one of the great
[00:23:22] opportunities with Jai is that we can do
[00:23:26] things that in the past the this initial
[00:23:29] hurdle to get to something that you can
[00:23:31] demo would have been way too big. So
[00:23:34] from my perspective, if I look at people
[00:23:36] starting out in computer science today,
[00:23:39] your ability to actually articulate an
[00:23:42] idea and create a demo, create a proof
[00:23:45] of concept using modern tools is just as
[00:23:49] important as 20 years ago it was your
[00:23:51] ability to to write bubble sword uh 30
[00:23:54] years ago.
[00:23:56] But it's I think it's a very interesting
[00:23:58] development as it really changes what
[00:24:01] the job of a software engineer is and
[00:24:04] how you interact with the system and I
[00:24:06] think your comparison with assembly
[00:24:08] language and machine code is is very apt
[00:24:10] or the switch from C which you know some
[00:24:13] people still use C today to object
[00:24:16] oriented programming languages.
[00:24:18] >> But I I want to actually switch gear
[00:24:21] completely. We've talked so much about
[00:24:23] software. Let's talk about hardware. So,
[00:24:26] um, some people have really odd hobbies.
[00:24:29] Some people, for example, build their
[00:24:32] own, uh, uh,
[00:24:34] >> pedals for string instruments. So, can
[00:24:38] you talk a little bit about the effect
[00:24:41] panel pedal hobby that you have?
[00:24:45] >> So, the background to this very odd
[00:24:48] specific question is that last Christmas
[00:24:51] I started doing guitar pedals for fun.
[00:24:54] which makes no sense because I have zero
[00:24:57] musical ability. I had never touched an
[00:25:00] electric guitar in my life, but I wanted
[00:25:02] to learn about electronics. And uh and
[00:25:05] so I started doing
[00:25:09] guitar pedals first as kits and then
[00:25:10] designing my own. And they're all
[00:25:12] horribly bad. And uh I actually don't
[00:25:16] want to encourage others to do that
[00:25:20] because it's completely pointless. Uh,
[00:25:23] all modern guitar pedals are all
[00:25:25] digital, but I did it because when you
[00:25:28] have, and this is something I do
[00:25:30] encourage people to do, when you have a
[00:25:32] stressful job that is high stakes and
[00:25:35] you feel like like you need to do
[00:25:39] something else to relax,
[00:25:41] you should find a hobby where failure is
[00:25:45] not only expected, but it's actually
[00:25:47] fun, right? And it doesn't have to be
[00:25:50] guitar pedals. It can be anything. For
[00:25:52] me, it happened to be soldering and
[00:25:54] making hardware where I knew I was
[00:25:56] completely incompetent and I actually
[00:25:58] enjoyed it. Uh, some people think that
[00:26:01] failure is a bad thing and I happen to
[00:26:03] be one of those people who actually
[00:26:06] enjoy doing
[00:26:09] things I'm not good at
[00:26:12] because it's how you learn. And and
[00:26:18] then you really need to expect to fail.
[00:26:21] and I've been at it for a year and I
[00:26:24] still haven't learned.
[00:26:25] >> I I disagree. I have some of your pedals
[00:26:27] and they're getting a lot better.
[00:26:29] >> But, uh, it's it's something I would
[00:26:32] encourage anybody in this industry
[00:26:34] because it can get kind of stressful
[00:26:36] sometimes, especially with
[00:26:39] if you're in open source, at least for
[00:26:41] me, the most stressful part tends to be
[00:26:43] people. I don't find the technology
[00:26:46] stressful, but sometimes when you have
[00:26:48] disagreements and you really say, I want
[00:26:51] to take a break and I need to do
[00:26:53] something completely different. That's
[00:26:55] that's when you want to have a hobby or
[00:26:58] something where where you can just say,
[00:27:00] hey, this is nothing whatsoever to do
[00:27:03] with my job and failing is fine. And for
[00:27:06] me, it was electronics. And I think
[00:27:09] there is this this interesting
[00:27:11] difference between comparatively very
[00:27:14] simple electronics and the single most
[00:27:17] complex open-source project out there.
[00:27:20] So this this
[00:27:21] >> difference is just fascinating to me.
[00:27:24] >> Yeah. My my electronics journey has
[00:27:26] actually gone backwards. So I started
[00:27:29] doing like slightly fancier circuits
[00:27:33] with integrated circuits and then I
[00:27:35] started going backwards to the point
[00:27:36] where now I'm playing with actually
[00:27:39] understanding how a single transistor
[00:27:42] works and my real job is working with
[00:27:46] hundreds of billions of transistors and
[00:27:49] my pet hobby is working with three. So
[00:27:54] that's that's kind of my two extremes
[00:27:58] when it comes to hardware.
[00:28:00] >> But I I think this is an interesting
[00:28:02] glimpse into, you know, what does Lenus
[00:28:05] do all day? You said earlier you don't
[00:28:07] write software anymore. You're a
[00:28:09] manager. We we now learned that you play
[00:28:12] with relatively simple hardware. But
[00:28:16] what would what should we think that you
[00:28:17] do all day?
[00:28:19] Realistically, I sit in front of the
[00:28:21] computer and read email. all day long.
[00:28:24] Uh, I don't answer email. So, if you
[00:28:27] send me email, I can almost guarantee
[00:28:29] you that I will read it, but I can also
[00:28:32] almost guarantee that I will not answer
[00:28:34] it. It's very rare that I answer email
[00:28:37] and that that I actually I kind of want
[00:28:40] to apologize
[00:28:42] not just to all the people who have sent
[00:28:44] me email, but also to developers who uh
[00:28:48] only see my complaining side. Uh, a lot
[00:28:52] of people think I'm an angry, bitter old
[00:28:55] man because uh, honestly on
[00:29:00] the kinds of emails I respond to tend to
[00:29:03] be about the problems that happen and
[00:29:07] and when everything goes well, which is
[00:29:09] actually the huge majority of the time,
[00:29:14] I don't send out these emails saying
[00:29:17] thank you, that worked really well. And
[00:29:20] uh so if if you don't get that email
[00:29:24] from me,
[00:29:26] it I I'm still happy. I just don't let
[00:29:29] people know so much and and I apologize.
[00:29:33] >> I I think that is a great moment to stop
[00:29:36] on the message that Lenus is an
[00:29:38] incredibly nice guy who just keeps it
[00:29:41] inside. So uh
[00:29:43] >> inside I'm really happy. It's just my
[00:29:45] outside persona, not always. It's been
[00:29:48] 10 years since the last time we've been
[00:29:50] here. I hope we come back sooner than
[00:29:52] that. And with that, thank you all.
[00:29:55] >> Thank you.
