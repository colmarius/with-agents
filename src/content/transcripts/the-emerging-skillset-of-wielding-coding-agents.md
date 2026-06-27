---
title: "The Emerging Skillset of Wielding Coding Agents"
resourceId: 5
summarySlug: "the-emerging-skillset-of-wielding-coding-agents"
sourceUrl: "https://www.youtube.com/watch?v=F_RyElT_gJk"
videoId: "F_RyElT_gJk"
capturedAt: "2026-06-27T15:03:03.088Z"
channel: "AI Engineer"
language: "en"
kind: "auto-generated"
durationSeconds: 2105
---

## Transcript

[00:00:00] [Music]
[00:00:14] My name is Bang. I'm the CTO and
[00:00:16] co-founder of a company called Source
[00:00:18] Graph. Uh we build developer tools and
[00:00:20] today I want to share with you some of
[00:00:22] the observations and insights that we've
[00:00:24] had on this sort of like emerging skill
[00:00:26] set of how to wield coding agents.
[00:00:30] That sound good to everyone? All right,
[00:00:31] cool. Um, okay. So, let's check in on
[00:00:35] the uh the the agent discourse. Uh, I
[00:00:38] don't know if you all saw this, but a
[00:00:40] couple days ago there were some spicy
[00:00:42] tweets about the the efficacy of AI
[00:00:45] coding agents or, you know, inefficacy
[00:00:48] depending on your perspective. So, um,
[00:00:50] Jonathan Blow, who's a really talented
[00:00:53] developer, he basically single-handedly
[00:00:55] coded up the indie game Braid, if you're
[00:00:57] familiar with that. So like he's he's
[00:00:59] kind of like god tier status in terms of
[00:01:01] coding ability. um retweeted Alex Albert
[00:01:04] who's also someone I respect and admire
[00:01:06] a lot uh works at Enthropic and
[00:01:08] basically claiming that you know all the
[00:01:09] hype around coding agents and code in
[00:01:11] general uh was just it is just hype
[00:01:14] right there's no substance there um and
[00:01:17] then there were some responses and there
[00:01:18] was kind of a spectrum of responses too
[00:01:20] you know we had some other uh big names
[00:01:23] in the developer world like Jesse
[00:01:24] Friselle she was one of the early uh
[00:01:27] contributors maintainers of Docker she's
[00:01:29] also really legit uh she said basically
[00:01:31] something to the effect of like um I
[00:01:33] think you're right. Uh but you're in
[00:01:35] like the top 01% of programmers,
[00:01:37] Jonathan. For the rest of us, you know,
[00:01:40] down here in this room that aren't on
[00:01:41] Mount Olympus, it actually helps a lot.
[00:01:44] Um but not super helpful if you're if
[00:01:46] you're really really good. Um but then
[00:01:48] we also had folks like Eric uh S.
[00:01:51] Raymond, who is like the one of the
[00:01:53] fathers of open source, uh who had a
[00:01:55] very spicy reply. is basically like look
[00:01:57] I you know consider myself to be pretty
[00:01:59] decent at programming and uh these
[00:02:01] things help a lot. Uh and then uh the
[00:02:05] the kind of my favorite one of this was
[00:02:07] actually the the top a hacker news post
[00:02:09] that was written by um uh Thomas uh uh
[00:02:14] Tachek uh who is a a really legit
[00:02:16] security engineer. Um some of you may
[00:02:18] have seen this uh trending. He was he
[00:02:20] was basically taking the opposite view
[00:02:21] of like, you know, there's some really
[00:02:22] smart people there who are very AI
[00:02:24] skeptical, but they're nuts. Like, uh,
[00:02:25] these things are really useful. Um, so I
[00:02:28] I'm guessing if you're at this
[00:02:29] conference, you probably lean toward
[00:02:31] coding agents uh are substantively uh
[00:02:34] useful and there's something there. I
[00:02:36] don't know. Uh, just a just a guess. But
[00:02:39] I think even within this room, there's
[00:02:41] probably a spectrum of uh best practices
[00:02:46] and opinions about like where agents are
[00:02:49] good. Uh you know, whether they're
[00:02:52] restricted to like small edits or like
[00:02:54] front-end applications or weekend vi
[00:02:56] coding, whether they actually work on
[00:02:58] your production codebase. And um I think
[00:03:01] this is just uh indicative of of the
[00:03:04] dynamic technical landscape that that
[00:03:05] we're in right now. And a couple months
[00:03:07] back, I I wrote this blog post from this
[00:03:09] guy Jeff Huntley. So Jeff was a senior
[00:03:12] engineer at Canva at the time. And uh
[00:03:14] his role at Canva is really interesting.
[00:03:16] He basically went around interviewing
[00:03:19] all the uh developers inside of Canva
[00:03:21] using AI tools like cursor and and other
[00:03:24] things and seeing how they're using it.
[00:03:26] And he basically came to the conclusion
[00:03:27] that like most people were holding it
[00:03:29] wrong. Uh which is which is really
[00:03:31] interesting. and he he came up with a
[00:03:32] blog post about like all the different
[00:03:34] antiatterns that he was seeing. Um, but
[00:03:36] my summation of of of that blog post is
[00:03:39] like the the number one mistake that
[00:03:41] people are using with coding agents
[00:03:42] right now is they're trying to use
[00:03:45] coding agents the same way they're using
[00:03:47] AI coding tools uh six months ago. um
[00:03:51] and and therefore they're wrong, which
[00:03:53] is kind of crazy because normally if
[00:03:55] you're you know using a tool uh the the
[00:03:59] best practices don't change in in six
[00:04:01] months typically the things that you
[00:04:03] learn that are good uh will still be
[00:04:05] like present uh and and uh you know
[00:04:08] topical and relevant 6 months uh down
[00:04:10] the line but I think we're in a really
[00:04:12] interesting moment in time right now and
[00:04:15] you know why the sudden change I think
[00:04:17] it's because uh of this step function
[00:04:21] transition uh that we've experienced in
[00:04:23] model capabilities in the past 6 months.
[00:04:25] So, you know, we've we've all been
[00:04:27] around since the dawn of generative AI,
[00:04:30] the ancient year of uh 2020
[00:04:34] two, right? November 2022 was when Chat
[00:04:37] GBT launched, right? And every year uh
[00:04:40] now, you know, this is now the year
[00:04:42] three, you know, three after chatbt,
[00:04:44] right? We're now living in the AI
[00:04:45] future. Um, but I think there's already
[00:04:47] been kind of like three distinct waves
[00:04:49] or or eras largely driven by the
[00:04:52] evolution of frontier model
[00:04:53] capabilities.
[00:04:55] Um, and the model capabilities really
[00:04:57] dictate the uh ideal architecture uh
[00:05:00] that that becomes dominant at the
[00:05:02] application layer. So in the GPD3 era,
[00:05:05] all the models were text completion
[00:05:07] models uh which meant all the
[00:05:09] applications that people were building
[00:05:11] uh were these like co-pilots or
[00:05:12] autocomplete tools. So the dominant UX
[00:05:14] paradigm was like you type some stuff,
[00:05:16] it types some stuff, you type some more
[00:05:18] and that's how you would interact. Uh
[00:05:20] and then chat GBD came along uh with
[00:05:22] GBD3.5 which was instruct tuned to
[00:05:25] interact like a uh a chatbot. Uh and
[00:05:28] suddenly people realized like oh it's
[00:05:30] not just completing the next thing I'm
[00:05:32] talking about. I can actually ask it
[00:05:33] questions like I can a human now. Uh and
[00:05:36] then some other people came along. Uh we
[00:05:38] were part of this crowd. We realized
[00:05:39] like hey um you know what's even better
[00:05:42] than just like asking it questions. You
[00:05:43] can actually copy paste stuff into the
[00:05:45] chat and say like here's some code from
[00:05:47] my codebase use that as an example and
[00:05:50] pattern match against that and you that
[00:05:52] helps it generate you know a little bit
[00:05:53] better code or less uh less fake code or
[00:05:56] less hallucinated code than uh it did
[00:05:58] before. And uh that basically meant that
[00:06:01] everyone at the application layer was
[00:06:02] building a ragbot uh in in 2023. So like
[00:06:05] a chatbot plus a a rag retrieval engine.
[00:06:08] But now uh I think we've entered a new
[00:06:12] era and I don't I'm not sure if everyone
[00:06:14] realizes it or maybe this is I don't
[00:06:16] know like who agrees with this statement
[00:06:18] like who thinks it's a real paradigm
[00:06:19] shift. Okay. And then who's who here is
[00:06:22] like ah that's a bunch of
[00:06:23] Anyone feel free to I like Okay. Okay.
[00:06:26] So maybe I'm maybe I could just skip
[00:06:28] this slide. Um
[00:06:31] so we're now living in the era of agents
[00:06:33] and the new model capabilities uh really
[00:06:35] dictate a new application architecture.
[00:06:37] And so one of the things that we asked
[00:06:38] ourselves at source graph is you know a
[00:06:40] lot of the existing tools in the market
[00:06:42] they were designed for the era of GPD4
[00:06:45] and uh claude 3. So there a lot of the
[00:06:48] application stuff uh features and UX and
[00:06:50] UI was really built around the
[00:06:52] capabilities or in some cases the
[00:06:54] limitations of the chatbased LMS. Um,
[00:06:58] and so if we were going to design a
[00:07:00] coding agent from the ground up to
[00:07:02] unleash the capabilities of tool using
[00:07:04] LMS, agentic LMS, uh, what would that
[00:07:07] look like?
[00:07:09] Okay, so here are my spicy takes. Uh,
[00:07:12] these are controversial design decisions
[00:07:14] that I think are are better to make in
[00:07:16] the age of agents. Uh, and many of these
[00:07:19] go against the best practices that kind
[00:07:21] of emerged in the chatbot era. Okay, so
[00:07:24] number one is uh the agent should just
[00:07:27] make edits to your files. It shouldn't
[00:07:29] ask you at every turn like, "Hey, you
[00:07:31] know, I want to make this change. Should
[00:07:32] I apply it?" Uh if it's asking you and
[00:07:34] it's wrong, uh it's already done the
[00:07:36] wrong thing and it's wasted your time.
[00:07:38] Uh humans need to get uh more out of the
[00:07:40] inner loop and more kind of like on top
[00:07:42] of the loop like still steering it and
[00:07:44] guiding it, but less you know
[00:07:46] micromanaging and and managing every
[00:07:47] change. Second thing is do we still need
[00:07:51] a thick client uh to uh to manipulate
[00:07:55] the LLMs? Like do we still need a fork
[00:07:57] VS code? That's like the salty way of
[00:07:59] saying this, right? Um the VS code fork
[00:08:01] became the the culmination of the AI
[00:08:03] coding application I think for for the
[00:08:05] the chatbot era. But there's this
[00:08:07] question of like, you know, if the
[00:08:09] contract of an agent is you ask it to do
[00:08:11] stuff and then it does stuff, do you
[00:08:13] really still need all that UI built
[00:08:14] around like context management and
[00:08:17] applying the proposed change in the
[00:08:18] codebase or can you just ask it to do
[00:08:21] stuff and expect it to to do the right
[00:08:22] thing?
[00:08:24] Third, I think we're going to move
[00:08:26] beyond the choose your own model uh
[00:08:28] phase. So I think in the chatbot era, it
[00:08:30] was very easy to swap models in and out
[00:08:32] and you'd like, oh, you know, a new
[00:08:34] model came along. let me swap it out and
[00:08:35] see how well it attends to the context
[00:08:38] that my retrieval engine fetches. Um, in
[00:08:40] the agentic world, there's a much deeper
[00:08:42] coupling uh because the LLM that you're
[00:08:45] using essentially becomes the the brains
[00:08:47] of these agentic chains and so it's much
[00:08:49] harder to rip and replace. And I think a
[00:08:50] lot of people in this room who have
[00:08:52] tried mixing and matching uh you know
[00:08:54] different models uh in the context of
[00:08:56] agents have found that it you know
[00:08:58] swapping out a different model and
[00:08:59] expecting similar results is is very
[00:09:01] different. a lot of the like a lot of
[00:09:03] the LMS out there aren't even good at
[00:09:05] the basics of tool use yet. So it's it's
[00:09:07] very difficult to just replace the
[00:09:08] brains. Um four is I think we're going
[00:09:12] to move past the era of fixed pricing.
[00:09:14] Uh agents eat up a lot of tokens and so
[00:09:16] they look expensive relative to chat
[00:09:19] bots. Uh but the comparison that more
[00:09:22] and more people are making is how much
[00:09:24] human time is it saving? So they're
[00:09:25] still cheap relative to to human time
[00:09:27] saved. And the fixed pricing model
[00:09:29] actually introduces a perverse incentive
[00:09:31] now where uh it's like selling gym
[00:09:33] memberships, right? Like if if I sold
[00:09:35] you a membership to my chatbot and
[00:09:37] you're now paying me, you know, 20 bucks
[00:09:38] a month, uh my incentive now is to push
[00:09:41] the inference cost as low as possible.
[00:09:42] And the easiest way to do that is to use
[00:09:44] dumber models. Um but dumber models just
[00:09:47] waste more more of your time. Um sorry,
[00:09:50] this is a long list. Um uh hopefully
[00:09:53] it's not too tedious, but um I think
[00:09:55] these are important points. Uh the the
[00:09:57] second to last point I'll make is I
[00:09:59] think the Unix philosophy is going to be
[00:10:00] more powerful here than vertical
[00:10:01] integration. So in developer tools, the
[00:10:04] ability uh to use simple tools in ways
[00:10:06] that compose well with other interesting
[00:10:09] tools is really powerful. And so I think
[00:10:12] especially with agents where there's
[00:10:13] less of a need to create like a lot of
[00:10:16] UI around it, you're going to start to
[00:10:17] see more command driven tools, command
[00:10:19] line tools and things like that. Um and
[00:10:22] then last but not least is uh you know
[00:10:24] we had an existing uh rag chat coding
[00:10:27] assistant. Maybe some of you have used
[00:10:28] it. It was called Kodi. Um it still
[00:10:30] exists. We're still supporting it. Uh
[00:10:32] it's still in heavy use across you know
[00:10:34] many fortune 500 companies. uh but we
[00:10:36] decided to build a a new application
[00:10:40] from from the ground up for the agentic
[00:10:42] world because we didn't want to be
[00:10:44] constrained by all the assumptions and
[00:10:45] constraints that uh we we built into the
[00:10:48] application layer uh for the previous
[00:10:50] generation of LMS.
[00:10:53] And one analogy I like to draw here is
[00:10:56] you know what uh the the the early days
[00:10:59] of the internet right like in the early
[00:11:01] days of the internet the the way people
[00:11:03] you know jumped into the the web was
[00:11:06] using an interface on the left. This is
[00:11:08] before like most people knew what the
[00:11:09] internet was about what it was capable
[00:11:11] of and that was the right interface for
[00:11:12] the first generation of the internet
[00:11:13] because like what can you do with the
[00:11:15] internet? Well like there's a bunch of
[00:11:17] different things you can look at like
[00:11:18] trending celebrities you can you know
[00:11:20] buy automobiles. You can look at movie
[00:11:22] reviews, all these things you might not
[00:11:23] have thought of. And so it's it's useful
[00:11:25] to have in front of you, but at some
[00:11:27] point it gets a little tedious, like
[00:11:28] clicking through all the different
[00:11:29] hyperlinks and navigating your way
[00:11:31] through. And then the the real power of
[00:11:34] the web was sort of unleashed by just
[00:11:35] like the one simple text box where you
[00:11:38] just like type what you're looking for
[00:11:40] and and you get to it. And I think, you
[00:11:42] know, with with aentic UIs, that's what
[00:11:45] we should be striving for both in
[00:11:47] developer tools and in a lot of
[00:11:48] different application paradigms. Okay,
[00:11:51] so what does that look like in practice?
[00:11:53] So when we went to design this thing, um
[00:11:55] our coding agent is called AMP. Uh and
[00:11:58] AMP has two clients and this is what
[00:12:00] they look like. So both are like very
[00:12:02] very bare bones. A lot of people, you
[00:12:04] know, look at this and like what is
[00:12:06] this? It's just a text box. What what
[00:12:07] can I do with it? Um and and that was by
[00:12:10] design, you know, that for all the
[00:12:11] reasons I just mentioned. Um, one client
[00:12:14] is just a simple VS Code extension um,
[00:12:17] that allows us to take advantage of some
[00:12:19] nice things that you get in in VS Code
[00:12:21] like being able to view diffs. That's
[00:12:22] really important in the agent decoding
[00:12:24] world. I often joke that like that's now
[00:12:26] I use that view more than the editor
[00:12:28] view now. Um, and and the second was a
[00:12:31] CLI. So, uh, just stripping things down
[00:12:34] to bare bones. It has access to all the
[00:12:35] same tools as the the VS Code extension
[00:12:38] does, but it's just something that you
[00:12:39] can invoke in your command line. You can
[00:12:41] also script it, compose it with other
[00:12:43] tools.
[00:12:45] Okay. So, what what what does this
[00:12:48] actually look like in practice? Um I I
[00:12:51] wanted to do something a little bit
[00:12:52] risky here, which is um in the past I've
[00:12:55] done a lot of like, you know, hey,
[00:12:57] here's me building a simple app, like
[00:12:58] those sorts of demos, but I actually
[00:13:00] wanted to show off like where we think
[00:13:02] this is most useful, which is like, hey,
[00:13:03] I'm working on an application that has
[00:13:06] real users. is let me actually make a
[00:13:08] contribution to that codebase given all
[00:13:10] w with all the like existing
[00:13:11] constraints. And so I actually want to
[00:13:14] I'm just going to code a little bit. I
[00:13:15] don't even know how far we're going to
[00:13:16] get. Um but this is this is AMP. Uh this
[00:13:20] is VS Code running AMP in the sidebar
[00:13:23] and it's open to the AMP codebase. Um
[00:13:26] and what I want to do is implement like
[00:13:28] a simple uh change uh to this
[00:13:31] application. So the change that I'm
[00:13:33] going to make is AMP has a server
[00:13:36] component and the server exists uh as a
[00:13:39] way to provide the LM inference point.
[00:13:41] It also provides like team
[00:13:43] functionality. We have a way to share
[00:13:45] like what different teams are doing or
[00:13:47] what different users are doing with AI
[00:13:48] so you can kind of learn from other
[00:13:49] users. There's leaderboard. It's fun. Um
[00:13:52] but there's also these things called
[00:13:53] connectors which allow AMP to talk to
[00:13:55] external services. So our issue tracker
[00:13:57] is Linear. Um, and so I've integrated
[00:13:59] Linear uh into AMP here, but I'm kind of
[00:14:01] annoyed because it's using this generic
[00:14:03] like network icon, and I would really
[00:14:05] like to customize this icon such that
[00:14:06] when you plug in the linear MCP
[00:14:08] endpoint, it it uses a more appropriate
[00:14:10] icon like a checkbox or something
[00:14:12] issuey.
[00:14:13] Um, so I've already filed this as a
[00:14:16] linear issue and I'm just going to ask
[00:14:18] uh can you find the linear issue about
[00:14:21] customizing the linear connector icon uh
[00:14:26] then implement it.
[00:14:30] So what this will do is um it has access
[00:14:34] to a set of tools. Um I can go over here
[00:14:36] to the tool panel and see what tools it
[00:14:39] has access to. Some are local, some are
[00:14:41] built in. Um it's got the standard tools
[00:14:42] like read and edit file or run bash
[00:14:44] command. Uh you can also plug in things
[00:14:46] like playrite and postgress via MCP. Uh
[00:14:49] and then linear is also plugged in uh
[00:14:51] through this. So we're basically talking
[00:14:53] to the linear API uh through the MCP
[00:14:56] server and uh what this will do is it
[00:15:00] will use the linear uh issues API
[00:15:04] um and it will search issues. It found
[00:15:06] 50 issues and the one that I was
[00:15:08] referring to is at the top here. So add
[00:15:10] a special icon for the linear connector.
[00:15:12] Uh and now it's going to go and
[00:15:15] implement uh the thing for me. Um and
[00:15:18] one thing to note here is it's just
[00:15:21] making these tool calls on its own. I'm
[00:15:23] not asking it uh to use specific tools.
[00:15:25] Um we've also tried to make the uh
[00:15:29] information that you see uh minimal. So
[00:15:31] like you don't need to see all the API
[00:15:34] tool calls that it's making underneath
[00:15:35] the hood or like crowd out the
[00:15:36] transcript with a bunch of things. Most
[00:15:38] of the time uh we we just want to keep
[00:15:41] it simple because the contract we want
[00:15:42] to provide to users is like the the the
[00:15:45] feedback loops here are more robust and
[00:15:46] you don't have to um micromanage this as
[00:15:49] much. Another thing I want to point out
[00:15:51] here is the search tool that this is
[00:15:53] using is is actually a sub agent. So
[00:15:56] it's actually spinning off a sub aent
[00:15:58] loop that uses a form of agentic search.
[00:16:00] It has access to a bunch of different
[00:16:02] search tools. Uh keyword search, uh uh
[00:16:06] just regular GP, uh looking up file
[00:16:08] names. Uh if you want to inspect what
[00:16:10] it's doing, it you can click the expand
[00:16:12] thing and see like what different paths
[00:16:14] it's taking, what files it's reading,
[00:16:16] what things it uncovered. Uh but again,
[00:16:18] by default, we think this is like an
[00:16:19] implementation detail and hopefully it
[00:16:20] should just surface the the right thing.
[00:16:23] Um so it's it's working. It's gathering
[00:16:25] context. Um, another thing I want to
[00:16:27] call out in this interface is um, as
[00:16:30] we've gotten more feedback, we've we've
[00:16:31] kind of designed this thing to be more
[00:16:33] multi-threaded. So, there's a quick
[00:16:35] keyboard shortcut that allows you to
[00:16:36] like quickly tab through the different
[00:16:37] threads that you're running. And it's a
[00:16:39] common paradigm in in our user community
[00:16:41] to be running more than one of these
[00:16:43] things at a time. Um, and it takes a
[00:16:45] little bit used to get get used to the
[00:16:47] the context switching. Like developers
[00:16:49] hate context switching, right? Like we
[00:16:50] like to be uh in in flow in in focus.
[00:16:54] Um, Typically what we see here is um the
[00:16:58] the secondary thread will either be
[00:16:59] something that's like a lot shallower so
[00:17:01] that you can quickly page back to the
[00:17:02] main thread or what I like to do is
[00:17:04] while the agent is working I actually
[00:17:06] like to understand the code uh at a
[00:17:08] deeper level myself so I can better
[00:17:10] understand what what it's going to do.
[00:17:11] So uh I could ask something like can you
[00:17:14] show me how connectors and connections
[00:17:18] work in AMP? I can ask it to draw a
[00:17:21] picture of that.
[00:17:24] So, we'll kick that kick that thread off
[00:17:26] in parallel. We'll check back in on what
[00:17:28] this guy is doing. So, it's found uh
[00:17:31] it's read a bunch of files. It's read
[00:17:33] some frontend files. Our front end is
[00:17:34] written in spelt. Um and as you can see,
[00:17:37] it's it's being fairly thoughtful about
[00:17:39] reading the appropriate files before it
[00:17:41] actually goes and and does the work. And
[00:17:43] we find that this is really important uh
[00:17:45] to make the feedback cycles uh more
[00:17:48] robust. Um, otherwise the the anti
[00:17:50] pattern is you just like get into the
[00:17:51] weeds of like steering it manually.
[00:17:54] Um, it's also got this to-do list thing
[00:17:57] at the bottom uh that helps it structure
[00:17:59] and plan out the the longer term tasks
[00:18:01] so that it doesn't go like immediately
[00:18:03] dive into the code. This is a classic
[00:18:04] mistake that like human developers make
[00:18:06] too where you like dive into the code
[00:18:07] too early and then you get lost in the
[00:18:08] weeds and then it takes a while to dig
[00:18:10] yourself out.
[00:18:12] Um, okay. So, it's making some changes.
[00:18:14] Um, one other thing that I like to point
[00:18:17] out here is, you know, I mentioned that
[00:18:20] I use the diff view in VS Code now,
[00:18:22] probably more than the editor view. Uh,
[00:18:24] VS Code actually has a really nice diff
[00:18:25] view. I have it hotkeyed um, so I can
[00:18:27] open it up quickly. And most of the my
[00:18:30] time in VS Code now is spent just like
[00:18:32] reviewing the changes it uh, it makes.
[00:18:35] And I actually like this a lot better
[00:18:36] than uh, like GitHub PRs or uh, git diff
[00:18:39] on the command line just because it's in
[00:18:41] the editor. you can see the whole file
[00:18:42] and uh jump to definition uh even works.
[00:18:46] Um so yeah, we'll we'll just wait a
[00:18:49] little bit for it to to do its thing. I
[00:18:51] actually think it's it's probably made
[00:18:55] looks like it's getting it's getting
[00:18:57] there. Um let's it's probably just
[00:19:00] running like tests. Let's see if we go
[00:19:02] back here if it's updated the icon at
[00:19:05] all.
[00:19:10] Okay, so it hasn't gotten there yet, but
[00:19:12] I think it's on the right track.
[00:19:17] Does it write its own test? Uh, the
[00:19:19] question was, does it write its own
[00:19:20] tests? Yes, it typically writes its own
[00:19:22] tests. And if if it doesn't, you can
[00:19:23] prompt it to to do so. So, uh, it's
[00:19:27] doing a lot of things. It's reading a
[00:19:28] lot of files. It's making these edits
[00:19:30] incrementally and then checking the
[00:19:31] diagnostics.
[00:19:33] Um, and then now let's see if it works.
[00:19:35] Okay, cool. So you see here the icon has
[00:19:37] been updated and this is without me
[00:19:39] really steering it in in any fashion. Um
[00:19:44] notice here on this page that this icon
[00:19:46] didn't update though. Um and so this is
[00:19:48] actually not surprising to me because
[00:19:49] this change as many changes in
[00:19:51] production code bases are often more
[00:19:53] nuanced than it seems at the surface. So
[00:19:56] in this case, the reason it's not
[00:19:57] getting it here is because
[00:20:00] uh this is the admin page and the piece
[00:20:04] of data we need to know uh we need to
[00:20:06] read in order to tell that this is a
[00:20:09] linear MCP uh rather than a generic MCP
[00:20:12] is actually part of the config. We have
[00:20:13] to look at the endpoint of the MCP URL.
[00:20:16] In order to do that, you have to read
[00:20:17] the config, but the config might also
[00:20:19] contain secrets. Doesn't contain secrets
[00:20:20] in this case, but might contain secrets
[00:20:22] in other cases. So, we actually prohibit
[00:20:24] those secrets from being sent to
[00:20:25] non-admin pages. Um, so it's not
[00:20:28] surprising to me that like the first
[00:20:29] pass it didn't get that right, but let's
[00:20:30] see if it can get like I'll just nudge
[00:20:32] it a little bit. So, like uh I noticed
[00:20:34] that the icon changed
[00:20:38] on admin connections but not on
[00:20:41] settings.
[00:20:43] Um,
[00:20:45] can you investigate why?
[00:20:50] And uh in the interest of time, we'll
[00:20:52] check back on this later. How about
[00:20:54] that? Uh we we'll let it run and we'll
[00:20:56] we'll see if if it can find its way to
[00:20:58] the right solution there. Um
[00:21:02] is it okay if I go a little bit over
[00:21:03] since we started a little bit? Okay,
[00:21:05] cool. Is it okay with you all if I go a
[00:21:06] little bit over? Okay. Are we still
[00:21:08] having fun? Okay, cool. So, that was
[00:21:11] like a brief demo of just like the
[00:21:13] interaction patterns and and the UI. We
[00:21:14] try to keep it really minimal. Um, we've
[00:21:17] released this to like a small group so
[00:21:19] far. Uh, the the signup is now publicly
[00:21:21] open. It's been open for about two
[00:21:23] weeks, but we haven't done a lot of like
[00:21:25] marketing around it and and that's kind
[00:21:27] of been intentional because we're really
[00:21:29] trying to design this for where we think
[00:21:31] the the puck is going. And so, we've
[00:21:33] we've done a lot to curate this
[00:21:34] community of people who are trying to
[00:21:37] experiment with LMS and figure out like
[00:21:39] how the interaction paradigms are going
[00:21:41] to change over the next 6 to 12 months.
[00:21:43] And so our user community is really
[00:21:45] people who are like spending nights and
[00:21:47] weekends uh a lot of time with this
[00:21:49] thing to see what they can get it to do.
[00:21:52] And so actually one of the the most
[00:21:54] insightful things and actually the main
[00:21:56] topic of of this talk is lessons that
[00:21:58] we've learned from just like looking at
[00:22:00] what our power users are doing and
[00:22:02] seeing what interesting behavior
[00:22:04] patterns uh they're kind of like
[00:22:06] implementing. Um and so like the average
[00:22:09] spend uh for agents is is growing. It's
[00:22:13] a lot more than the average spend was
[00:22:14] for chat bots or or autocomplete. But
[00:22:16] one other interesting thing that we've
[00:22:17] noticed among the user base is that uh
[00:22:20] there's a huge variance in terms of how
[00:22:23] much people use this thing. Um to the
[00:22:26] point where like there there's like an
[00:22:28] upper echelon of users that are spending
[00:22:30] like thousands of dollars per month uh
[00:22:33] just in inference costs. And at first
[00:22:35] we're like this has got to be abuse,
[00:22:37] right? like someone out there is, you
[00:22:39] know, poked uh, you know, found some way
[00:22:41] to exploit the inference endpoint is is
[00:22:43] using it to power some like Chinese uh,
[00:22:46] you know, AI girlfriend or whatever. But
[00:22:48] actually, no, when we when we spoke to
[00:22:50] uh, the people using it, we actually
[00:22:52] found that they were doing real things
[00:22:53] and we're like, hm, that's interesting.
[00:22:55] What the hell are you doing? Um and from
[00:22:57] those insights and the conversations we
[00:22:59] basically uh have encapsulated a series
[00:23:01] of like best practices or emergent um
[00:23:03] like power user patterns uh for how the
[00:23:07] the very you know uh dominant users the
[00:23:10] the most active users are are using this
[00:23:13] thing and this has informed our our
[00:23:15] product design process as well. So one
[00:23:17] of the the first changes that we made um
[00:23:19] was we noticed that a lot of the power
[00:23:22] users were very writing very long
[00:23:24] prompts. It was not like the simple kind
[00:23:26] of like Google style like three keywords
[00:23:28] and just like uh read my mind and expect
[00:23:30] something good to happen. Uh they
[00:23:32] actually wanted to write a lot of detail
[00:23:34] because they realized that LMS are
[00:23:36] actually quite programmable. If you give
[00:23:38] them a lot of context, they will follow
[00:23:39] those instructions and get further than
[00:23:41] if you just give them like a oneline
[00:23:43] sentence. And so we made the default
[00:23:45] behavior of the enter key in the AMP
[00:23:47] input just new line. So you have to hit
[00:23:49] command enter to submit. And this throws
[00:23:51] a lot of the new users off because
[00:23:52] they're like, "Wait a minute, why isn't
[00:23:54] it just enter?" like you know if I'm in
[00:23:55] like cursor or whatever I just enter
[00:23:57] that's easy that's intuitive but
[00:23:59] actually what we want to push users to
[00:24:00] do is to write those longer prompts
[00:24:02] because that actually yields better
[00:24:03] results and I think that's one of the
[00:24:05] things that prevents people uh who are
[00:24:07] still in the kind of like chat LLM uh
[00:24:10] mode from from unlocking some of the you
[00:24:13] know cool stuff that that agents can do.
[00:24:17] Um, another thing that people do very
[00:24:19] intentionally is direct the agent to
[00:24:22] look at relevant context and feedback
[00:24:25] mechanisms. So, you know, context was
[00:24:27] very important in the chatbot uh era.
[00:24:29] It's still important in the agentic era.
[00:24:31] Now, agents do have a good good amount
[00:24:33] of like built-in knowledge for how to
[00:24:35] use tools to acquire context. Like you
[00:24:37] saw that before when it was using the
[00:24:38] search tool to find different things um
[00:24:41] and and it was executing the test to and
[00:24:43] and uh llinters to see if uh the code
[00:24:46] was valid.
[00:24:47] Um, but there's still some cases,
[00:24:49] especially in production code bases
[00:24:50] where it's like, oh, we do things in a
[00:24:52] very specific way that are kind of like
[00:24:53] out of distribution and and so like some
[00:24:57] like less uh less agentically inclined
[00:25:01] users at that point will just give up.
[00:25:02] They're like ah, you know, agents aren't
[00:25:03] capable of working with like backend
[00:25:05] code yet. But what we've noticed is the
[00:25:06] power user like actually let me try to
[00:25:08] just tell it how to run, you know, the
[00:25:10] build in this particular subdirectory or
[00:25:12] run the tests. and that helps it
[00:25:14] complete the feedback loop so that it
[00:25:16] can get the validation to get further.
[00:25:19] Um, feedback loops are going to be a big
[00:25:21] theme of of this talk. So, another like
[00:25:24] dominant uh paradigm here is
[00:25:26] constructing these like front-end
[00:25:28] feedback loops. So, like a really common
[00:25:30] formula is you have the playright MCP
[00:25:32] server and then there's a thing called
[00:25:33] storybook which is basically a way to
[00:25:36] encapsulate or componentize a lot of
[00:25:38] your front end components. It makes it
[00:25:39] very easy to test individual components
[00:25:42] without loading your entire app. And you
[00:25:44] know, you probably should have been
[00:25:45] doing this anyways as a human developer
[00:25:47] because you get a fast feedback loop.
[00:25:48] You make a change, see it reflected
[00:25:50] instantly. You get the auto reload and
[00:25:51] then go back to your editor. But with
[00:25:53] agents, you you kind of notice it more
[00:25:55] because you're no longer like in the
[00:25:56] weeds doing the thing. You're like, oh,
[00:25:58] you're you're almost like the developer
[00:25:59] experience engineer for your agent. It's
[00:26:01] like, how can I make it loop back
[00:26:03] faster? And so what the agent will do is
[00:26:04] like, you know, make the code change,
[00:26:06] use playrite to open up the page in the
[00:26:08] browser, snapshot it, uh, uh, and then
[00:26:11] loop back on itself. And it does that
[00:26:12] via storybook because it's much faster
[00:26:14] than reloading the the entire app.
[00:26:17] You you put right as a tool for you.
[00:26:20] Yes. So it's um, one of the default
[00:26:22] recommended tools. So it's right here.
[00:26:25] Um, and actually it looks like looks
[00:26:28] like that run completed. I wonder if uh
[00:26:33] it looks like it did approximately the
[00:26:35] right thing. Um sorry, just to jump out
[00:26:37] of the sides of her a little bit. So now
[00:26:39] you can see like the icon is is
[00:26:40] customized on the settings page, not
[00:26:42] just the admin page. And if you look at
[00:26:44] how it did that, I think it did the
[00:26:46] right thing. So if you look at the diff,
[00:26:49] um it actually looked at the surrounding
[00:26:50] code and was like, "Oh, there is an
[00:26:53] existing mechanism for plumbing
[00:26:54] non-secret parts of the config through
[00:26:56] to the UI. let me kind of like use that
[00:26:59] as a reference point. And it actually
[00:27:01] plumbed exactly that like uh field
[00:27:04] through to the front end. So now if I
[00:27:07] add like additional fields to the MCP
[00:27:08] config that do contain secrets, uh it
[00:27:11] this is like whitelisted. So it'll still
[00:27:12] only send the endpoint URL over to the
[00:27:14] client. You know, basically what it
[00:27:16] needs to make that icon customization.
[00:27:18] Um, so yeah, I know like you know it's
[00:27:22] not a super impressively visual change
[00:27:23] but like a lot of such changes in in
[00:27:25] messy production code bases are like
[00:27:27] that and it's cool to see the agent uh
[00:27:30] be able to tease tease out that nuance.
[00:27:34] Um,
[00:27:35] okay. I know we're we're a little bit
[00:27:37] over time. Can I people mind if I keep
[00:27:39] going or uh Okay, cool.
[00:27:42] [Laughter]
[00:27:44] Um, there's uh some additional uh tips
[00:27:47] and tricks. Most of this talk is just
[00:27:48] like sharing what we've learned from our
[00:27:50] power users. So another thing that we've
[00:27:52] noticed is like there's this kind of
[00:27:53] this prevailing narrative that like you
[00:27:54] know agents are going to make
[00:27:55] programmers lazy. It's going to make it
[00:27:57] so we don't really understand what what
[00:27:59] what's going on in the code. So we're
[00:28:00] going to ship more slop. But we've
[00:28:02] actually found the inverse happen uh
[00:28:04] with with the power users. They're
[00:28:05] actually using agents to better
[00:28:07] understand uh the code. And so this is a
[00:28:09] really good onboarding tool. Like we
[00:28:11] just hired this guy Tyler Bruno. He's a
[00:28:13] very precocious young developer. He's
[00:28:15] actually still in college, but he's
[00:28:17] working full-time in addition to taking
[00:28:19] classes. Uh, so really bright, but also,
[00:28:21] you know, a bit green. Um, he's been
[00:28:23] using AMP to just like quickly ramp up
[00:28:25] on how the different pieces connect
[00:28:27] together. Uh, and it could draw diagrams
[00:28:29] and and point you to specific pieces of
[00:28:31] the code. And, uh, it's really good at
[00:28:32] accelerating that. And then a correlary
[00:28:35] to this is like, you know, we all do a
[00:28:36] form of onboarding to new code whenever
[00:28:38] we do a code review. Like, by
[00:28:40] definition, code review is is new code.
[00:28:42] And often times it's new code that
[00:28:44] contains bugs or is hard to understand
[00:28:46] or is a bit of a slog. Um and so rather
[00:28:49] than just you know ignore the code that
[00:28:52] the AI generates and just commit it
[00:28:53] blindly uh we find that our user base is
[00:28:56] actually using this tool to do more
[00:28:58] thorough code reviews. So like I've
[00:29:00] adopted this practice myself where if I
[00:29:02] have to review a very large diff the
[00:29:04] first thing I do is ask the agent to
[00:29:06] consume the diff and generate a high
[00:29:08] level summary so I can have like a high
[00:29:09] level awareness and then I ask it like
[00:29:11] hey if you were a smart senior dev
[00:29:14] what's the entry point into this PR
[00:29:16] because like often half the time half
[00:29:17] the battle is just like finding the
[00:29:18] right entry point and uh psychologically
[00:29:21] I I often put off code reviews because
[00:29:23] I'm like oh it's going to be a pain and
[00:29:25] it's going to take forever just to like
[00:29:27] figure out where I should start
[00:29:28] reviewing it so I'll just it tomorrow.
[00:29:30] But this thing just like it helps lower
[00:29:31] that activation energy and and make code
[00:29:33] reviews more thorough and and actually
[00:29:36] uh dare I say like a little bit fun and
[00:29:38] enjoyable now.
[00:29:40] Um sub aents are also things. So uh we
[00:29:43] implemented uh the search tool as a sub
[00:29:45] aent uh in the very beginning but we're
[00:29:47] seeing more and more uh use cases emerge
[00:29:49] for sub aents and the general best
[00:29:51] practice with sub aents uh is that they
[00:29:53] often are useful for longer uh more
[00:29:56] complex tasks because the sub aent
[00:29:58] allows you to essentially preserve the
[00:29:59] context window. So like the the the
[00:30:02] quality of the LLM will degrade uh over
[00:30:05] time. You know, Sonnet 4 has a context
[00:30:07] window of 200K, but we see degradation
[00:30:10] typically around like 120 or 130K, and
[00:30:12] by the time you get hit 170 tokens, uh
[00:30:15] it you start to see more kind of like
[00:30:17] off the rails and crazy behavior. Uh but
[00:30:19] sub aents allow you to encapsulate uh
[00:30:21] the context used up by a specific
[00:30:24] subtask like implementing a small
[00:30:25] feature uh such that it doesn't pollute
[00:30:28] the the main agent.
[00:30:30] Okay, so that was a quick tour of of uh
[00:30:33] a lot of best practices. Just to recap
[00:30:34] like the anti practices, uh the common
[00:30:36] anti patterns are just like
[00:30:37] micromanaging the agent, like using it
[00:30:40] like you would a chatbot where you have
[00:30:41] to kind of like steer at every
[00:30:43] interaction or review every edit it's
[00:30:45] making. Um another common uh antiattern
[00:30:48] is just like underprompting. So not
[00:30:50] giving it enough detail. Like LMS their
[00:30:52] knowledge comes from two places. It
[00:30:54] either comes from their training data or
[00:30:57] from the context that you give it. And
[00:30:59] so, uh, you know, it's fine if you do a
[00:31:02] fiveword prompt if you're coding up like
[00:31:04] a 3D Flappy Bird game from scratch
[00:31:07] because that's well represented in the
[00:31:08] training set. They're really good at
[00:31:09] that. They're trained to do that. Um,
[00:31:11] but if you're trying to make a subtle
[00:31:13] nuance change to your large existing
[00:31:15] codebase, you should be giving it all
[00:31:17] the details that you would give a
[00:31:18] colleague on the team uh uh to point
[00:31:21] them in the right direction. And then
[00:31:23] last but not least, like agents are are
[00:31:25] not a vehicle to like TLDDR the code. If
[00:31:28] anything, they're the opposite. You
[00:31:29] should be using them to do much more
[00:31:30] thorough code reviews more quickly. Uh
[00:31:33] the human is still you're ultimately
[00:31:35] responsible for the code that you ship
[00:31:37] and you shouldn't view this as a human
[00:31:39] replacement. It's really a tool that you
[00:31:40] can wield to make yourself uh 10 100x
[00:31:43] more effective.
[00:31:45] Uh last tidbit. So one of the things
[00:31:47] that we've noticed among the very very
[00:31:48] very top 1% of the 1% is uh this this uh
[00:31:54] inclination to run multiple of these
[00:31:56] things in parallel. So uh Jeff Huntley
[00:32:00] who wrote that blog post uh that I I
[00:32:02] showed earlier um he started putting out
[00:32:05] these uh Twitter uh streams. They're
[00:32:07] about like four hours long each and it's
[00:32:09] basically just uh what he's he's working
[00:32:12] on like a compiler on the side. And what
[00:32:14] he does is he he uh constructs prompts
[00:32:18] for like three or four different agents
[00:32:20] to to work on different parts of of the
[00:32:22] compiler. Uh and he's gotten to the
[00:32:24] point where he's prompting it such that
[00:32:26] he feels confident enough in the
[00:32:27] feedback loops where he just like hits
[00:32:29] enter, lets him run, and then goes to
[00:32:30] sleep. And then like this thing just
[00:32:32] runs on Twitter for a while. And I think
[00:32:34] he's doing this to kind of like spread
[00:32:35] the word. It's like hey you can use this
[00:32:37] for serious engineering engineering like
[00:32:39] compilers are not some like vibe coding
[00:32:42] uh vibecoded weekend project they're
[00:32:44] they're real tech they're they're
[00:32:46] difficult to build um and it is possible
[00:32:49] to use agents for for code like this but
[00:32:52] it has to be a very intentional skill
[00:32:54] that that you you practice and so I
[00:32:57] think it's cool I think like there's a
[00:32:58] lot of people thinking in terms of like
[00:32:59] agent fleets and where the the world is
[00:33:00] going but I I do think that the way that
[00:33:03] we'll actually get there is by like
[00:33:05] building these like composable building
[00:33:06] blocks that allow people like Jeff to go
[00:33:08] and like combine them and and uh come up
[00:33:11] with interesting UIs. I think this is
[00:33:12] just running in like T-Mox or some
[00:33:14] window manager.
[00:33:16] Okay, so like the takeaways I just want
[00:33:18] to leave you with is one, you know,
[00:33:21] contrary to what some might say and you
[00:33:22] know, look, there's a lot of smart
[00:33:24] senior developers out there who think AI
[00:33:25] is overhyped and maybe parts of it are,
[00:33:27] but like I think coding agents are very
[00:33:29] real and it is uh I think a high ceiling
[00:33:33] skill. It's like I think we will
[00:33:36] probably invest in learning how to use
[00:33:38] these things in the same way that we
[00:33:39] invest in learning how best to use our
[00:33:41] editor or our programming language of
[00:33:43] choice. And I think the only way you can
[00:33:46] learn this stuff is is by doing it and
[00:33:47] then sharing it out with others. Uh and
[00:33:50] one of the reasons we built the kind of
[00:33:51] like thread sharing mechanism into AMP
[00:33:53] is to help encourage knowledge
[00:33:54] dissemination so that like if you
[00:33:56] discover an interesting way of of using
[00:33:58] it, you can share that out with your
[00:33:59] team. Um but yeah, that's it. If you
[00:34:03] want to kind of like see a recap of the
[00:34:05] best practices in this talk, we've
[00:34:06] actually put out like a an AMP owners
[00:34:08] manual that guides new users how to to
[00:34:10] best use it. Um, I'll also be around
[00:34:13] afterwards. We have a booth in the main
[00:34:15] expo hall. Uh, I'm supposed to say too,
[00:34:17] if you stop by the booth, we'll give you
[00:34:19] like $10 in in free credits. So, if
[00:34:21] anything you saw here was of interest of
[00:34:23] you and you want to try this out, um,
[00:34:25] stop by and and say hi.
[00:34:32] I noticed you still type can you and
[00:34:35] then you correct your uh typos which I
[00:34:37] guess you said you shouldn't do. Yeah, I
[00:34:40] habit. I it's it's part habit and it's
[00:34:42] part paranoia that in like a live demo
[00:34:44] setting there will be some uh typo token
[00:34:47] that will trigger off the rails
[00:34:49] behavior. But it like I think that was
[00:34:51] more of a concern that I learned in like
[00:34:52] 2023 when it actually mattered cuz like
[00:34:55] these days LM are are more and more like
[00:34:58] typo robust I would say.
[00:35:03] [Music]
