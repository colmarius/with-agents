---
title: "Keynote: Linus Torvalds, Creator of Linux & Git, in Conversation with Dirk Hohndel"
resourceId: 7
summarySlug: "linus-torvalds-on-ai"
sourceUrl: "https://www.youtube.com/watch?v=tWx769t1JKg"
videoId: "tWx769t1JKg"
capturedAt: "2026-06-27T15:46:36.736Z"
channel: "The Linux Foundation"
language: "en"
kind: "auto-generated"
durationSeconds: 1797
timestampMode: "chunk"
chunkSeconds: 30
---

## Transcript

[00:00:00] Good morning. [clears throat] Ah, this is the the wonderful moment when all the cell phones are pointed at us. >> Yeah. >> Yeah. Yeah. I think there's maybe going to be an official video. You don't have to hold your phone the whole time. So, my name is Durk Hundle. I do this thing. I think I'm the CTO. What? Okay. No, I I'm I run open source at Verizon. Um, I have been around the Linux Foundation since its inception and around Linux almost as long as you sky because you are. Yes. Uh, I'm [clears throat] Lionus

[00:00:34] and we do this thing because I hate giving public speak speeches. So, instead I have no idea what Durk is going to ask me. Uh, we've done this pretty much once or twice a year for the last too many years. uh we did this here in so maybe 10 years ago too. So this is not a new format but but this makes me much more comfortable with the whole public persona thing that I normally am not very happy about.

[00:01:06] Yeah. And comfortable is very relative in that context. So this is indeed the 28th time that we are doing this which is kind of fun to think about. We were here exactly 10 years ago. Uh, and I'm very glad that we are back. I love Korea. I have a lot of personal connection to Korea. Um, and for me, it's always interesting to to travel to Asia and see a very different approach to how how people look at open-source, how people look at software development.

[00:01:38] It's it's a very different world, which I find fascinating. So, Linus, 10 years ago, you had just released Linux 4.8. eight and um so I'm sure you can summarize real quick the major changes since then. >> Yeah. Now there's been a lot of work. What I do have to say and I tend to repeat this because uh it's important is I don't do any of the real work. For the last almost 20 years I've not been a

[00:02:12] programmer. I've been a technical lead and maintainer of the system. Uh and that's true both of Linux and even more so of Git where I really just uh look at it from the side. So I want to just remind people that that all the real work is done by other people maybe some of the people in the audience. So people sometimes give me too much credit for for being around.

[00:02:42] I I just shepherd the kernel project these days. >> Yeah. So but if you if we look at the last 10 years, what stands out to you in the process of how Linux has evolved and progressed? >> So what stands out to me a lot is that I used to say that hey at some point we're done. But that was a long long time ago. Uh and and it's been almost 35 years of doing Linux for me right now.

[00:03:14] And I don't feel like at some point we're done. >> Uh in fact, I've gone to come to the conclusion that all real projects, the real work is is in maintenance and ongoing support. And especially for the kernel, uh we had this discussion with Greg yesterday that as long as people continue to make new hardware, [snorts] we will have more work to be done on the kernel side. But even without that, and this is where I

[00:03:48] somewhat I'm surprised, uh, we actually still 35 years into the project, we're still doing like fixing up core kernel code and and making things prettier and making them more maintainable and stable. And I mean, I had a discussion about cleaning some stuff up today at 3:00 a.m. because I was jetlagged. Uh so um with with a system like Linux the the real

[00:04:22] work really ends up being just maintaining it and keeping everything working uh as you get new challenges whether they be from hardware or from new software loads that that we end up experiencing. >> Yeah. If if I look at the process, we have had a very consistent process in the Linux kernel development for 15 years now. And one of the things that's so interesting is that to the press, this is too boring. And so we get a lot of focus on every time Lennis raises his voice,

[00:04:55] >> anytime that there is even the slightest rejection of this proposed thing. And so in your perception, has it gotten better, gotten worse? stayed the same the the number of times where you feel that you have to speak up and say no we're not doing this >> um one thing that has changed is I used to say that my job is often to say no that people come and uh have some radical new idea that maybe it's really interesting but at the same time it it

[00:05:31] sounds like a maintenance nightmare and I go No, you go off, you prove this new feature in your own sandbox and you do this and then you come back with numbers and show that I was wrong. And that was what I felt was a large portion of my job as a a maintainer of the system. And it turns out the last few years I felt that sometimes my job is to say yes because we one of the things about having been around for

[00:06:05] so long with uh tens hundreds of maintainers that have been around for decades by now people kind of get stuck in a rut and sometimes you want to shake things up and and say hey we're going to try this new thing and I'm the person who says Okay, we'll go ahead and and I mean I'm giving Rust as an example of that even though we've been doing Rust now for what five years. So it's not exactly new but it was something where I felt that the kernel shouldn't stagnate

[00:06:40] and we needed to do something new and bring in new people. So, so that's that's one thing that has changed for me is that I actually feel like sometimes I need to encourage some of the other maintainers to be more open to to new ideas. >> Yeah, Rust was exactly one of the examples I was going for. And one of the things that I've noticed is that even though it's been around now for 5 years and with actual code in the kernel maybe for three, um, it certainly created some noise. We had people express their

[00:07:14] frustration. There have been arguments [clears throat] about the formatting. There have been arguments about reviewing code that isn't in your language that you're comfortable with. We even had maintainers step down over this. So, is it worth it? Is the introduction of new technologies worth the disruption to our processes? >> I think it's worth it. But I also think that yes, Rust has generated a lot of press maybe because it's a very visible part of the kernel and I mean Rust is obviously visible in other areas too but

[00:07:47] at the same time I mean we have disagreements in pretty much every area of the kernel. It's it's part of the process of doing new development and finding bugs and people sometimes get quite animated when they want to make their point heard and uh and I don't think Rust in that sense has been all that different from many other areas. It's just that it maybe gathered some more news. Um we're finally at the point I think maybe Greg will talk about

[00:08:21] that. Who knows? He knows he follows that more than I do where where Rust is actually becoming a a real part of the kernel instead of being this experimental thing. But but it it did take longer than I was expecting. Certainly. >> Yeah. So, and I mean the the more noticeable events of excitement actually weren't related to Rust. The first ejection of a component from the kernel had nothing to do with Rust. It's all about peling. Um yeah, we had this year was a bit tumultuous. We we had a lot of

[00:08:58] disagreements to the point where where parts of the kernel was made external just to avoid a lot of friction. To be fair, that was not the first time it happens. We have >> it. We've had pieces of the kernel that were not being used or had serious enough issues that we had to excise from the kernel. It's rare. Uh in 35 years, it's happened only a handful of times.

[00:09:26] So um it's um it's not an enjoyable experience, but at the same time, I feel that we're we've been able to deal with it fairly well. Um any big project were literally thousands of people. We have every single release. We have over a thousand people involved and that's every two months, right? You will have personal disagreements, you will have professional disagreements, you will have friction and and that's all part of life and and and I think we're mostly

[00:10:00] one big happy family. I I I think I would more describe it as a very mature group of people who have figured out how to work with each other. But yeah, I'll go with the happy family. Normally the first thing I ask you, but today it's at the end of the first section. Anything you want to say about uh 618 RC4? No. So that's the current kernel version. Um I like boring and boring to me is no super exciting new features that will break machines for millions of people

[00:10:35] around the world. uh 6.18 does not seem to be a problem spot. We had we had a rash of test failures and it turned out they were to a large degree they were actually failures of the tests not of the kernel. Um, so I was a bit worried a couple of weeks ago, but it seems to be shaping up to be >> another incremental and boring in the best possible way release.

[00:11:07] >> I mean, if you if we look at the major changes in the industry, I think one of the biggest change is on the hardware side, right? We for decades and decades was all about the CPU and that's all everyone talked about. who has the fastest CPU, the best architecture and the last few years with Nvidia and less so some other companies like AMD uh have really taken the the spotlight with with the depending which artificial term you want to use the APUs the uh accelerated processors and what is interesting is

[00:11:43] that while all of this talks to Linux machines it's actually not Linux that is running on these processors. So how do you think about that evolution that the the center of the hardware attention actually moved away from us? >> I I don't see it that way. So uh partly because I still think that the most interesting part is the general purpose CPU. It may not get the news so much because it's been around forever and it is what it is and and people kind of

[00:12:16] take it for granted. And uh Linux is there to do all the maintenance and the bring up and the like all the UIs and everything that you kind of expect from a system. And then you have the AI side that does the new darling of the industry and and that's fine and it's completely well it's not completely separate but it's a a different kind of environment that Linux helps foster and helps bring about but that I don't feel

[00:12:51] that the kernel necessarily needs to be a hugely integral part of >> yeah I mean Linux is obviously the launch pad where all of the interaction happens. But the the software that drives this hardware for the first time in decades is now again predominantly proprietary. The the micro kernel running on the GPUs, a software stack like CUDA on top that's all proprietary software.

[00:13:17] >> But that's to me as a kernel person that's really no different from user space. So that has always been true that uh while I personally love open source and I would not want to be involved in any project that isn't open source to me it has never been religion right so I do open source and Linux is open source but people have always run uh commercial applications on top of Linux uh whether they be big databases whether they be cloud services, anything like

[00:13:53] that. And uh and that's that's normal. And the GPU is just to me a different form of the same thing where where you run your AI workload on top of the kernel. And the fact that it has its own own system for maintaining the the hard GPU hardware is not something Linux generally worries about too much. we do actually get involved to some degree.

[00:14:23] There's a lot of resource management that um virtual memory handling things like that where where the kernel is intimately involved and uh that has actually been one of the nice parts of AI is it made Nvidia be a good player in the Linux kernel space. Uh famously not true 20 years ago. These days when when Linux has been so important to the AI cloud uh suddenly Nvidia cares deeply about Linux and we have a lot of kernel

[00:14:56] maintainers from from from that quarter too. So that has been one of the positive sides of of the AI boom. >> I I think it's a very positive thing. Every time a vendor embraces what we do and engages that's great. But now you've said AI so many times I I have to talk a little bit about that. It's all your fault. Last year we talked about the idea that AIS could be useful or Genai could be useful for code review for explaining code and I know quite a bit of work has been done in the in the

[00:15:29] Linux kernel community around that. Where do you think this is today? >> Well, it's not there today. I mean we're we have people who are doing a lot of work in using AI mainly to help maintainers deal with the flow of patches and and backporting patches to stable versions and things like that. Uh honestly from a practical standpoint a lot of that is experimental and the big issues we see is that AI has been very

[00:16:03] disruptive to a lot of our infrastructure. So we have we have the AI crawlers that crawl all over the colonel.org source infrastructure and and that has been a huge pain and not always pleasant. So there's there's some good and some bad. Um I I'm still very much I'm looking forward to the day when AI is less hyped and more like the everyday reality that nobody talks constantly about and that's

[00:16:37] clearly still a few years from now. I think exciting new technologies are always what people want to talk about and of course with the trillions of dollars being invested. There is there's a lot of of curiosity. But one of the things that that I found interesting in in Amsterdam at the open source summit there, Daniel Stenberg from Lip Curl talked about how the AI generated uh slop security submission, security reports are almost a denial of service attack on his project. And is this

[00:17:10] something that you see? >> We have seen it on the colonel side. We have not seen it to to that degree, but we do see uh bug reports and security uh notices that are clearly basically made up by people who misuse AI and and it does take resources away from maintainers. Um it has been a bigger problem in in some other projects than it has been for the kernel.

[00:17:41] >> That's great. [laughter] So the other use of course that everyone wants to talk about is AI for code generation. So I I always talk about autocorrect on steroids because AI is fantastic at code completion at helping you with syntax with standard libraries and then at the other end of the spectrum what today is talked about is agentic AI. to basically having an AI agent to to which you say, "Hey Claude, I want you to develop this feature all

[00:18:14] the way to people saying in a week with the help of one of those AIs, I built a complete product." Are you playing with this at all? >> Um, I'm not playing with it at all. I'm sure people are are looking at it even for the kernel code base. Um, I suspect the kernel is insular and different enough that despite us having a lot of code in the open that you can use to teach AI, it doesn't tend to be I mean I

[00:18:47] I don't think a lot of people are doing vibe coding for the kernel. I I think people are doing vibe coding for own small personal projects and I actually think I see that as mostly a a a positive thing. I I just think of how when I grew up, I have a hard time seeing people, but I'm guessing not a lot of the people in the audience grew up with computers and and reading magazines and typing in programs from computer magazines [laughter] 45, 50 years ago.

[00:19:22] No hands came up onto that. Uh but that's that's how I got into computers. And I feel like uh computers have gotten so complicated and your expectations of programming have gotten so much higher that it's much harder to get started these days than it was when I was young and I got into computers and I got excited about it. And I actually think that vibe coding may be a horrible horrible idea from a maintenance standpoint if you actually try to make a product for it. But I think it's a great

[00:19:56] way to to make for new people to to get involved and get excited about computers and get computers to do something that maybe they couldn't >> do otherwise. And so I actually am fairly positive about this all and I mean and that's obviously ignoring all the people who then hope to make billion-dollar companies by just using VIP coding. But uh I I see it as something exciting and something new and something good even if clearly uh I think people's expectations from u when

[00:20:30] I talked earlier about how real projects are a lot about maintaining it and uh I I think people will notice that pipe coding may not be the way towards that. >> Yeah. I mean there's obviously there is this thrill the excitement of coming in into a new programming language, a new environment, a new set of libraries and have the tool do 90% of the work but I've been spending a lot of time on this and the tools get you to 90% and they do an amazing job at that. It's that last

[00:21:03] 10% and that last 10% is >> the last 10% is the thing that takes 34 years out of your 35 year project. So >> exactly. So there is there is a lot of opportunity here to create great things but there's also a lot of need to then make this actually real. But we do see a lot of talk about layoffs of software developers, real job losses in the US, thousands, tens of thousands of people getting laid off and usually with the O AI makes us so much more productive. And

[00:21:37] so if you think about people who are students today thinking about computer science, do you think there will be a significant impact on software development as a career? I honestly don't know. Uh this is one of those things where I will just say hey let's wait a few years to see what the real answer is because I think it's a complicated question and I suspect my personal opinion is that you will

[00:22:10] notice that you will need all the same maintainers to actually keep that project going and that AI is just another tool. the same way compilers freed people from writing assembly code by hand and increased productivity enormously but didn't make programmers go away. I think AI in the end will be that too that it's another tool that allows you to not have to deal with all of the minutia

[00:22:45] but it doesn't make the actual programmers go away. That's that's my gut feel. And if anything, it probably makes people more productive, but also opens up whole new areas of development and and you actually end up with more software programmers for that reason. >> That is exactly what I was thinking about. Um, if you if you have all these productivity gains, there are a couple of things you can do. You can say I do the same thing with fewer people or I do

[00:23:18] more things with the people that I have. >> Yeah. >> And and to me one of the great opportunities with Jai is that we can do things that in the past the this initial hurdle to get to something that you can demo would have been way too big. So from my perspective, if I look at people starting out in computer science today, your ability to actually articulate an idea and create a demo, create a proof of concept using modern tools is just as important as 20 years ago it was your

[00:23:51] ability to to write bubble sword uh 30 years ago. But it's I think it's a very interesting development as it really changes what the job of a software engineer is and how you interact with the system and I think your comparison with assembly language and machine code is is very apt or the switch from C which you know some people still use C today to object oriented programming languages.

[00:24:18] >> But I I want to actually switch gear completely. We've talked so much about software. Let's talk about hardware. So, um, some people have really odd hobbies. Some people, for example, build their own, uh, uh, >> pedals for string instruments. So, can you talk a little bit about the effect panel pedal hobby that you have?

[00:24:45] >> So, the background to this very odd specific question is that last Christmas I started doing guitar pedals for fun. which makes no sense because I have zero musical ability. I had never touched an electric guitar in my life, but I wanted to learn about electronics. And uh and so I started doing guitar pedals first as kits and then designing my own. And they're all horribly bad. And uh I actually don't want to encourage others to do that

[00:25:20] because it's completely pointless. Uh, all modern guitar pedals are all digital, but I did it because when you have, and this is something I do encourage people to do, when you have a stressful job that is high stakes and you feel like like you need to do something else to relax, you should find a hobby where failure is not only expected, but it's actually fun, right? And it doesn't have to be guitar pedals. It can be anything. For

[00:25:52] me, it happened to be soldering and making hardware where I knew I was completely incompetent and I actually enjoyed it. Uh, some people think that failure is a bad thing and I happen to be one of those people who actually enjoy doing things I'm not good at because it's how you learn. And and then you really need to expect to fail.

[00:26:21] and I've been at it for a year and I still haven't learned. >> I I disagree. I have some of your pedals and they're getting a lot better. >> But, uh, it's it's something I would encourage anybody in this industry because it can get kind of stressful sometimes, especially with if you're in open source, at least for me, the most stressful part tends to be people. I don't find the technology stressful, but sometimes when you have disagreements and you really say, I want to take a break and I need to do

[00:26:53] something completely different. That's that's when you want to have a hobby or something where where you can just say, hey, this is nothing whatsoever to do with my job and failing is fine. And for me, it was electronics. And I think there is this this interesting difference between comparatively very simple electronics and the single most complex open-source project out there.

[00:27:20] So this this >> difference is just fascinating to me. >> Yeah. My my electronics journey has actually gone backwards. So I started doing like slightly fancier circuits with integrated circuits and then I started going backwards to the point where now I'm playing with actually understanding how a single transistor works and my real job is working with hundreds of billions of transistors and my pet hobby is working with three. So that's that's kind of my two extremes

[00:27:58] when it comes to hardware. >> But I I think this is an interesting glimpse into, you know, what does Lenus do all day? You said earlier you don't write software anymore. You're a manager. We we now learned that you play with relatively simple hardware. But what would what should we think that you do all day? Realistically, I sit in front of the computer and read email. all day long.

[00:28:24] Uh, I don't answer email. So, if you send me email, I can almost guarantee you that I will read it, but I can also almost guarantee that I will not answer it. It's very rare that I answer email and that that I actually I kind of want to apologize not just to all the people who have sent me email, but also to developers who uh only see my complaining side. Uh, a lot of people think I'm an angry, bitter old man because uh, honestly on

[00:29:00] the kinds of emails I respond to tend to be about the problems that happen and and when everything goes well, which is actually the huge majority of the time, I don't send out these emails saying thank you, that worked really well. And uh so if if you don't get that email from me, it I I'm still happy. I just don't let people know so much and and I apologize.

[00:29:33] >> I I think that is a great moment to stop on the message that Lenus is an incredibly nice guy who just keeps it inside. So uh >> inside I'm really happy. It's just my outside persona, not always. It's been 10 years since the last time we've been here. I hope we come back sooner than that. And with that, thank you all. >> Thank you.
