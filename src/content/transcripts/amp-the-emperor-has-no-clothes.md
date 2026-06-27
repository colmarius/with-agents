---
title: "Amp: The Emperor Has No Clothes"
resourceId: 2
summarySlug: "amp-the-emperor-has-no-clothes"
sourceUrl: "https://www.youtube.com/watch?v=b4rOVZWLW6E"
videoId: "b4rOVZWLW6E"
capturedAt: "2026-06-27T15:01:51.702Z"
channel: "Latent Space"
language: "en"
kind: "auto-generated"
durationSeconds: 4918
---

## Transcript

[00:00:03] Everyone, welcome to the Linear Space
[00:00:05] podcast. This is Alessio from the
[00:00:07] Sourcegraph Labs, and today there's no
[00:00:09] Swyx. He's in Europe with AI engineer,
[00:00:11] but I'm joined by Quinn and Thorsten
[00:00:12] from Sourcegraph. Welcome. Thanks. Great
[00:00:14] to be here. Great to be here. So, we
[00:00:16] already had Origin of Sourcegraph with
[00:00:18] Beyang and Steve. So, we'll put the the
[00:00:21] link in there, and this was when you
[00:00:23] launched Cody.
[00:00:24] And today, I guess Cody is a brand that
[00:00:28] has passed, and now you have Amp. So,
[00:00:30] let's maybe start there. Obviously,
[00:00:32] Quinn, you're CEO of Sourcegraph.
[00:00:34] Thorsten, what's your
[00:00:35] role, I guess, title? How how do you
[00:00:37] describe what what you do? CEO is much
[00:00:39] easier.
[00:00:41] I'm not going to name my internal title,
[00:00:43] but I'm I'm
[00:00:43] >> The dictator of Amp. Yeah, that's the
[00:00:46] that's the internal title, yeah. But, uh
[00:00:48] it's it's um yeah, I'm the lead engineer
[00:00:50] and one of the creators of Amp, yeah.
[00:00:52] So, were you part of like the thumbs up,
[00:00:54] thumbs down on Cody brand? Like, how did
[00:00:57] you decide How did you get to Amp? Let's
[00:00:58] tell that story. I mean, I'll start. You
[00:01:00] can jump in, but basically, I came back
[00:01:02] to Sourcegraph February, and then this
[00:01:04] was when Claude 3.5 3.7 happened, too.
[00:01:08] And then Quinn and I started hacking on,
[00:01:11] you know, what if we just take Claude
[00:01:12] 3.7, and what if we
[00:01:15] give it just tools and let it go nuts,
[00:01:17] you know? Like, no constraints, no
[00:01:20] um a lot of the other stuff that we had
[00:01:22] in Cody, which works for Cody. Um just
[00:01:25] let's just start trying this out, and we
[00:01:27] started a new project, and we were, you
[00:01:29] know, I remember first week in SF where
[00:01:31] I would stand up in the middle of the
[00:01:33] room like, Quinn, you got to you got to
[00:01:35] see this. Like, this is crazy. And then
[00:01:37] he was like, okay, let me try this. And
[00:01:38] then we went off from there, and then we
[00:01:40] realized relatively quickly that it's a
[00:01:44] different kind of product, where Cody
[00:01:46] was very much um you know, one of first
[00:01:49] of its kind with rag and assistant
[00:01:51] pounds, assistant sidebar, but with, you
[00:01:54] know, a tool calling agent, where I
[00:01:57] define an agent as a model, a system
[00:01:59] prompt, and tools, and tool prompts that
[00:02:01] go along with this. Um that you give a
[00:02:03] lot of permissions for, so it can
[00:02:05] actually, you know, see the file system,
[00:02:07] interact with the file system, or your
[00:02:08] editor. It's a different thing, and we
[00:02:11] realized we got to
[00:02:13] handle this differently. We got to reset
[00:02:15] expectations. We got to tell users that
[00:02:16] it's a different thing, and they got to
[00:02:18] use it differently in some sense, and
[00:02:19] also that we cannot make it work with a
[00:02:21] $20 subscription, which back then was
[00:02:24] seen as a you know, offensive thing to
[00:02:26] say. And we were charging money? Yeah,
[00:02:29] yeah, yeah, yeah. But, now, you know,
[00:02:31] people are paying hundreds of dollars
[00:02:33] per month, which I've been saying this
[00:02:34] every day for last 2 weeks, that's crazy
[00:02:37] to me still, like, the how far we've
[00:02:38] come. So,
[00:02:40] you know, this is just how it started,
[00:02:42] like, okay, this is a different thing.
[00:02:44] We were astonished, surprised, amazed by
[00:02:46] what these models can do. So, we
[00:02:48] decided, let's reset expectations. Let's
[00:02:51] tell a new story. We can We have
[00:02:53] enterprise customers for Cody, but they
[00:02:55] have expectations, we have contracts,
[00:02:57] these are large contracts, long-running
[00:02:58] contracts, and you can't just say, guys,
[00:03:02] you know, here's a new mode, it costs
[00:03:04] whatever, how many much dollars more,
[00:03:07] um it works completely differently, you
[00:03:09] need to hold it in a different way. So,
[00:03:11] in order to avoid this, and to avoid
[00:03:13] being disrupted, you create the new
[00:03:15] thing that kind of disrupts the business
[00:03:17] on its own, you know? Yep. That's I
[00:03:19] don't know. Want to add?
[00:03:20] >> Yeah. The only thing that matters is
[00:03:22] building the best coding agent. Nothing
[00:03:24] else matters, because if you can build
[00:03:25] that, that's way bigger than anything
[00:03:27] else that came before. And to be clear,
[00:03:29] nobody has built that yet. We've getting
[00:03:31] better and better,
[00:03:33] but I think you've seen this treadmill
[00:03:36] of tools that you use as a dev. First,
[00:03:38] it started with Copilot, and then Cody,
[00:03:40] we were really good at chat rag, and
[00:03:41] then Cursor and WinServe showed that
[00:03:44] kind of IDE forks and partially agentic
[00:03:46] things could get better and better. And
[00:03:48] then, you know, the next generation, Amp
[00:03:50] and Claude code. And now you're already
[00:03:51] seeing people say, oh, well, Codex is
[00:03:53] better than Claude code, and there's not
[00:03:56] been any tool that has stuck with devs
[00:03:58] for more than 6 or 12 months or
[00:04:00] something.
[00:04:01] >> 6 months, yeah. And we saw that first
[00:04:04] hand. We're now on our second iteration,
[00:04:06] and we are able to move so much faster
[00:04:08] given that it has a totally different
[00:04:09] name, totally different brand. And some
[00:04:11] people don't even know that Sourcegraph
[00:04:13] or the people behind Cody made Amp. That
[00:04:16] has been so good. So, I do not know how,
[00:04:18] if you had an AI tool that was relevant
[00:04:20] 9 or 12 months ago, how you can even
[00:04:23] bring the same brand and same customer
[00:04:24] contracts
[00:04:26] along with you and make a good product.
[00:04:28] It is so liberating to be able to say
[00:04:30] totally different.
[00:04:31] >> Yeah. To on the technical level, um Cody
[00:04:33] was or is, you know, it's a Sourcegraph
[00:04:36] product, so it's kind of it works with
[00:04:38] the Sourcegraph uh platform. That means
[00:04:41] you're tied to the release cycle of the
[00:04:43] Sourcegraph platform. And Sourcegraph is
[00:04:45] in the cloud, we have, you know, cloud
[00:04:47] versions of Sourcegraph, but also on
[00:04:48] prem for some customers. Completely
[00:04:50] different game. And with Amp, we
[00:04:51] basically said, let's not do this. Let's
[00:04:53] build something that allows us to ship
[00:04:56] 15 times a day, and that's what we've
[00:04:59] been doing over the last 6 months. Like,
[00:05:00] we've we're still doing this, and it's a
[00:05:02] game changer. Not just, you know,
[00:05:04] anybody who's done this knows this, but
[00:05:07] you know, internally and externally, you
[00:05:09] need to reset expectations that this is
[00:05:11] a new way of how we build software, and
[00:05:13] having a new project with a new way to
[00:05:15] do it is, I think,
[00:05:17] a better way to do it than to try and
[00:05:19] get like the old to move in this new
[00:05:21] way,
[00:05:22] because it would take longer. Are there
[00:05:24] any numbers that you share about
[00:05:26] developers, like, you know, Amp usage
[00:05:29] overall? It's growing really fast. It's
[00:05:31] growing more than 50% month over month,
[00:05:34] a lot faster in, you know, some weeks.
[00:05:35] And really, what we have seen, too, is
[00:05:38] there's a huge change in who's using it.
[00:05:41] So, we have teams with like two or three
[00:05:43] people that are on annual run rates of
[00:05:45] like hundreds of thousands of dollars.
[00:05:47] Mhm. So, that's it. We also made a
[00:05:49] decision to not try to go to every
[00:05:52] single dev in an enterprise, which we
[00:05:53] had done with Cody. We pick off the
[00:05:56] people that want to move as fast as we
[00:05:57] want to move, that want to stay at the
[00:05:58] model product frontier, like us. Yeah.
[00:06:01] >> So, it's all about just being able to
[00:06:03] move really fast. And I think that the
[00:06:05] way that agents work today, most of them
[00:06:08] are used in your editor or CLI
[00:06:10] interactively. You have one agent at
[00:06:12] most running with you at all times.
[00:06:15] That's going to be blown up with async
[00:06:16] agents, when they're running 24/7
[00:06:18] concurrently in the background, then
[00:06:20] you're going to have 10 or 100 times as
[00:06:21] many. And that's going to dominate
[00:06:23] inference, that's going to dominate the
[00:06:25] output you get. So, it's really, you
[00:06:28] know, Amp is growing really fast, but
[00:06:29] it's it's more about how do we get to be
[00:06:32] the first ones with that like 10 to 100x
[00:06:35] improvement. And everything is about how
[00:06:37] can we move fast and learn along the
[00:06:39] way. It just so happens that we are
[00:06:41] positive gross margins along the way. I
[00:06:43] would say that's one of the biggest
[00:06:44] axioms that we have with Amp is that
[00:06:47] we don't know where this ride is going,
[00:06:49] but what we do know is that it's
[00:06:51] changing every few months. And, you
[00:06:53] know,
[00:06:54] start of the year, right? Cursor was the
[00:06:56] king, and the biggest, fastest growing
[00:06:59] site of all time. Now, if you were to
[00:07:01] ask a lot of developers, what do you
[00:07:02] think is the dev tool king? I don't
[00:07:04] think they would name Cursor as the
[00:07:05] first one. And then in, I think, a
[00:07:08] couple months later, or maybe a couple
[00:07:10] months before, somebody
[00:07:12] This was from somebody in sales, they
[00:07:14] said like, um
[00:07:16] I don't know what it was, but um they
[00:07:18] were basically saying, blah, blah, blah,
[00:07:19] makes Cursor look like GitHub Copilot,
[00:07:21] you know? Like, makes it look old and
[00:07:23] boring and enterprisey. And this is like
[00:07:26] just think about this. Like, Copilot is
[00:07:28] not that old. Like, it was a state of
[00:07:30] the art, I don't know, maybe 2 years ago
[00:07:32] or something. And now the world has
[00:07:35] changed completely, and we know that
[00:07:36] this is not over yet. Like, that the
[00:07:38] changes are still coming. So, from an
[00:07:40] engineering and business perspective,
[00:07:42] this is priority number one.
[00:07:45] Position yourself in a way that you can
[00:07:47] react to these changes, and position
[00:07:49] your product and your expectations and
[00:07:51] your technical the code base in a way
[00:07:53] that lets you react to these things as
[00:07:55] fast as possible. And then everything
[00:07:58] else flows from there. Everything else
[00:07:59] we've done is basically based on this,
[00:08:01] like, that everything can change at, you
[00:08:04] know, release of another model or
[00:08:05] something. But, how are you doing it
[00:08:07] internally from a team perspective?
[00:08:09] Because, you know, obviously, you have a
[00:08:10] lot of customers already on the
[00:08:12] Sourcegraph product. There's kind of
[00:08:13] like this tension of, you know, going
[00:08:15] founder mode and kind of burning the
[00:08:16] bridge on maybe some of the old use
[00:08:18] cases, versus having a smaller team and
[00:08:21] a dictator for a new product. How does
[00:08:23] that look like from like a building the
[00:08:24] company perspective? When you have a
[00:08:26] really popular, successful product
[00:08:28] that's highly profitable, that funds a
[00:08:30] lot of this craziness, and we're able to
[00:08:33] do this also with the customer trust.
[00:08:35] So, there's a lot of things on Amp that
[00:08:36] we do, like, no consistent pricing, no
[00:08:38] user model choice, no checking off all
[00:08:42] the boxes that security and compliance
[00:08:43] and legal want that, you know, takes 9
[00:08:45] months. We're able to get away without
[00:08:47] doing that stuff, because we have that
[00:08:48] customer trust. So, you know, that that
[00:08:52] has been a big thing. It requires you to
[00:08:54] totally change how you think about an
[00:08:57] existing business. It's not a way to
[00:08:59] sell through that same channel to those
[00:09:01] same users. It's a way to use that trust
[00:09:03] and that revenue to fund crazy stuff
[00:09:06] that you got to do. But, it's something
[00:09:07] that we deal with all the time, and
[00:09:10] we've got really smart devs, and yet it
[00:09:13] is hard for people to throw away
[00:09:15] everything that they have learned about
[00:09:16] how to build software development. And
[00:09:17] so, in some cases, it's been really
[00:09:19] refreshing to have people that have only
[00:09:21] ever been at tiny, like, one-person
[00:09:24] companies.
[00:09:24] >> Yeah, yeah. And they come here, and they
[00:09:26] have no preconceived notions about how
[00:09:29] you do planning or anything like that.
[00:09:31] And that is it's great, because you can
[00:09:33] throw all of that out of the window.
[00:09:35] Yeah. We've had This was radical in some
[00:09:38] sense, that when we started, it was
[00:09:40] Quinn and I
[00:09:42] working on main, no code reviews,
[00:09:44] nothing, and just pushing, and it was
[00:09:46] like a personal project. And I think
[00:09:48] we're both experienced engineers, so it
[00:09:50] would be everybody owns their stuff. You
[00:09:53] push, and if you break CI, you go and
[00:09:54] fix it, or if the other person is awake,
[00:09:56] fix it or something. And it seems like
[00:10:00] when you move this fast and you ship
[00:10:02] this often, you have um you know,
[00:10:05] throughout the day there's like 15
[00:10:06] decisions you have to make where you
[00:10:08] have to flip between the duct tape
[00:10:11] personal project mode, move fast, and
[00:10:14] the this is how they do it at Google
[00:10:16] mode. And it, you know, requires a
[00:10:18] certain expertise or it requires also to
[00:10:19] be free from like the thinking of the
[00:10:21] last 15 years of like always do it like
[00:10:23] Google. Like we always scale up. And the
[00:10:26] base assumption between like the whole
[00:10:28] Google thing was always that, oh, we
[00:10:30] found product market fit, now we have a
[00:10:31] product, let's scale this up, right?
[00:10:33] Every company I ever worked in was based
[00:10:35] on this assumption that this is the
[00:10:36] product, let's make it proper and
[00:10:38] engineer it up. But now with these
[00:10:40] changes, what's ingrained in Amp is the
[00:10:43] understanding that, well, even if it
[00:10:45] scales up, we have to be prepared that
[00:10:47] somebody pulls the rug and a new
[00:10:49] technology comes out and it kind of
[00:10:50] shifts everything. So, we have to be
[00:10:52] prepared for this. And again, it all
[00:10:54] flows from this. So, now in our
[00:10:55] development mode,
[00:10:57] the team is super small, you know,
[00:10:59] compared to I guess other companies, but
[00:11:01] I think we're around eight people now on
[00:11:03] the Amp core team. And we still don't do
[00:11:05] formal code reviews, we still push to
[00:11:07] main, we still ship 15 times every day,
[00:11:10] we dog food this
[00:11:12] as much as possible. And it turns out
[00:11:14] that in a fast-moving environment like
[00:11:17] this, this beats a lot of other things.
[00:11:19] Like fast feedback loops and using the
[00:11:21] product yourself and dog fooding it,
[00:11:24] using the product to build the product
[00:11:26] beats a lot of established processes,
[00:11:29] you know? And we can get away with it
[00:11:31] because we can dog food it. And yeah,
[00:11:33] how has it been internally received? I
[00:11:34] think we have the luxury of
[00:11:38] you know, making use of the
[00:11:39] infrastructure that we already have. For
[00:11:41] example, have a fantastic security team,
[00:11:43] right? Security team comes in,
[00:11:46] guys let us take care of the security
[00:11:47] stuff for Amp, you know, so that is
[00:11:49] fine. And I'm like, cool, like I don't
[00:11:50] have to worry about this. Then we have
[00:11:51] infrastructure people. Guys let us take
[00:11:54] care of how to run this in the cloud.
[00:11:55] Cool, I don't have to worry about this.
[00:11:57] I can concentrate on the client or the
[00:11:58] UX or you So, this is a nice spot to be
[00:12:01] in where we can move fast, but use
[00:12:04] platform teams to kind of make sure that
[00:12:05] it doesn't break or it scales up or
[00:12:07] whatever, but still have like the, you
[00:12:10] know, the tip of the iceberg can melt
[00:12:12] and be rebuilt basically while the the
[00:12:15] the thing beneath the waterline is
[00:12:16] stable, you know? Yeah. Not the greatest
[00:12:19] analogy,
[00:12:20] but I think it's it's a there's a
[00:12:22] distinction between, you know, like
[00:12:25] platform stuff that does work, but on
[00:12:26] the UX or product application layer, you
[00:12:29] want to be able to kind of tear the
[00:12:31] thing down and rebuild it as fast as
[00:12:32] possible. And I think that's what we're
[00:12:35] doing. One thing is you get a separate
[00:12:37] team, and then the other thing is how do
[00:12:40] you put that team to work, right? Like
[00:12:42] if you look at like the coding agent
[00:12:43] space, I mean obviously you started with
[00:12:45] Cody and I think there was maybe a
[00:12:47] thesis behind it. And then you had the
[00:12:49] rise of Claude code, now you had code X
[00:12:51] CLI, which is trying to catch up. I
[00:12:53] would say they're maybe a little behind
[00:12:54] on the UX and all of that, but they
[00:12:56] obviously have, you know, billions of
[00:12:58] dollars to train a custom model, so that
[00:13:00] kind of weighs a lot of the option.
[00:13:02] How did you decide about the structure?
[00:13:04] So, you have both a plugin for IDEs, so
[00:13:08] I use Amp code and cursor, but I can
[00:13:10] also go in the CLI and use Amp code.
[00:13:13] Was that an easy choice? Like was there
[00:13:15] a lot of discussion on we should just do
[00:13:17] one of the modes? Like supporting both
[00:13:19] is obviously more work, right? And a lot
[00:13:21] of these products don't support both.
[00:13:23] So, what was that initial design choice
[00:13:25] of
[00:13:26] the structure of the product and then
[00:13:27] we'll dive into the models as well. So,
[00:13:30] we started with a VS code extension
[00:13:31] because it was
[00:13:33] easiest thing to get off the ground.
[00:13:35] Like if when you have a VS code
[00:13:36] extension, you have a marketplace, you
[00:13:38] can ship this, you can update it 15
[00:13:39] times every day. You don't have to think
[00:13:41] about updating stuff. You also are next
[00:13:43] to the editor.
[00:13:45] And looking back, you know, it's been 6
[00:13:47] months, the editor might be dying or you
[00:13:50] might do a lot of coding outside the
[00:13:51] editor.
[00:13:52] Back then, it sounded much more radical
[00:13:54] than it does sound right now. So, we
[00:13:57] started with like, let's explore this.
[00:13:59] And having the thing next to your editor
[00:14:01] is a good place to start. And we could,
[00:14:03] you know, you can see the cursor, you
[00:14:05] can do selection, whatnot. But we were
[00:14:07] really like um
[00:14:09] from the start we didn't want to have
[00:14:11] like a deeply integrated thing. It was
[00:14:13] always like, ah, let's keep the feature
[00:14:15] small, we got to be able to move fast.
[00:14:17] And then we build up the CLI on the side
[00:14:20] as like a different client, which also
[00:14:22] gives us the ability to abstract like
[00:14:24] the core and the client stuff, so that's
[00:14:26] a nice boundary to have.
[00:14:28] But then, to be 100% honest, we were
[00:14:31] also surprised by how many people were
[00:14:35] fine with using a CLI for Claude code,
[00:14:37] for example. Like if you had asked me
[00:14:39] half a year ago,
[00:14:41] I would have said, no way, like a CLI
[00:14:43] tool?
[00:14:44] And what we realized is,
[00:14:47] well, a CLI is not just, you know,
[00:14:50] it's a UI, sure, but also it's a CLI
[00:14:53] program. That means you can run it on
[00:14:55] SSH. You can run it in any other editor.
[00:14:58] You can run it in multiple split panes.
[00:15:00] You can run it in multiple tabs.
[00:15:02] If you want to do this in VS code,
[00:15:05] you have to rebuild a lot of stuff. And
[00:15:07] you have to rebuild the way you switch
[00:15:09] between conversation. You have to
[00:15:10] rebuild I mean, SSH works out of the box
[00:15:12] with VS code, sure, but still like
[00:15:15] you're tied to this. And we had an
[00:15:16] experiment, an internal one, about a
[00:15:19] desktop application. So, like a
[00:15:21] standalone application. And turns out,
[00:15:23] yes, that's great to have multiple
[00:15:25] agents,
[00:15:26] but you also have to reinvent everything
[00:15:28] that right now a terminal gives you for
[00:15:30] free, right? If I use Ghosty or iTerm or
[00:15:32] VS Term or whatever, I can command N,
[00:15:35] command T, I get tab split not, you
[00:15:37] know, splits, different environments per
[00:15:39] tab. You can CD into directories, you
[00:15:41] can set env vars. You get this for free,
[00:15:43] right? And if you do it in a desktop
[00:15:46] application, then you run into the issue
[00:15:48] of, you know, what people see with like
[00:15:50] a lot of the async agents. Oh, you run a
[00:15:52] run a task, set the env vars, switch
[00:15:54] directory have to be in, what's, you
[00:15:56] know, what's in the path, whatnot.
[00:15:58] You have to do this beforehand, and in
[00:16:00] the terminal you get it for free. So,
[00:16:02] that's kind of the short version of it
[00:16:04] that we started with VS code because it
[00:16:06] was easy and it gave a lot of feedback.
[00:16:09] We could concentrate on the stuff that
[00:16:11] matters and not worry about stuff like
[00:16:12] distribution, which VS code takes care
[00:16:14] of. And then with the emergence of CLIs,
[00:16:16] we noticed that it's a big big
[00:16:17] improvement or there's other advantages
[00:16:19] to it. So, now then we rebuilt the CLI
[00:16:22] twice,
[00:16:24] and now we have like a really nice tool
[00:16:25] with our own framework. And one
[00:16:28] interesting thing is our VS code
[00:16:30] extension has a lot of advantage over
[00:16:32] the CLI. For example, it's easy to
[00:16:34] display diagrams, it's easy to display
[00:16:36] images, it's easy to render a bunch of
[00:16:39] stuff. Like
[00:16:40] we can do command
[00:16:42] return to submit messages, you know, all
[00:16:44] of that stuff. And turns out we have
[00:16:47] like an internal poll last week at our
[00:16:49] company meetup where Beyang was asking,
[00:16:51] who of you uses the CLI and who of you
[00:16:53] uses VS code? And it was a 50/50 split.
[00:16:57] And it's very strange
[00:16:59] that it falls out, you know, that comes
[00:17:01] out like this. And there's not a clear
[00:17:03] winner, and both have have both.
[00:17:07] But do you cut that data based on the
[00:17:10] level of the engineer or maybe the
[00:17:12] specialty, you know, maybe front end
[00:17:14] versus back end? And how do you segment
[00:17:16] that or do you just take it? I mean, we
[00:17:18] haven't really segmented. If I had to,
[00:17:20] you know, guestimate it, there's also a
[00:17:23] generational divide.
[00:17:25] Well, I would say the younger people,
[00:17:27] you know, younger than 25, their
[00:17:30] terminal seems old to them and they are
[00:17:32] much more inclined to use the stuff in
[00:17:33] the editor. but yeah, I don't we don't
[00:17:36] have any fancy segmentation. I think
[00:17:39] not to sound too dramatic, but like one
[00:17:41] of the other guiding principles that
[00:17:43] we've had from the start with Amp was
[00:17:45] whenever somebody is like, what's the
[00:17:47] data on this or do we have like
[00:17:49] analytics on this? It's like, well, did
[00:17:51] you look for it yourself? Like did you
[00:17:54] try it out? Because that Did you talk to
[00:17:56] customers? Like we constantly talk to
[00:17:58] customers.
[00:17:59] That beats a lot of other stuff.
[00:18:02] So, yeah, we don't have any segment
[00:18:04] analysis of who uses what and where and
[00:18:06] how.
[00:18:07] I use both. And it
[00:18:10] this idea that everything is changing,
[00:18:12] it applies to this. We looked at this,
[00:18:15] we saw the way the things were going and
[00:18:16] how much more flexible a CLI was. And
[00:18:18] we, about 3 weeks ago, we said, we think
[00:18:21] probably
[00:18:22] it's painful, but we will kill the VS
[00:18:25] code extension for Amp. And we said
[00:18:27] that, I laid that out, and I didn't like
[00:18:30] it, but it seemed like that's how things
[00:18:32] were going.
[00:18:33] And then you think about async agents,
[00:18:35] which probably need to be on your phone
[00:18:37] and on the web or maybe you use WhatsApp
[00:18:39] to interact with them. That's a whole
[00:18:40] other mode of interaction. Well, and if
[00:18:42] it's on the web, that's like the VS code
[00:18:44] UI, not the terminal UI.
[00:18:46] And then there's this other thing that
[00:18:48] we're planning on doing that I can't
[00:18:49] share more about, but that also makes me
[00:18:52] think, well, actually we really need to
[00:18:53] keep the VS code UI in. And so this
[00:18:56] thing that seemed so obvious, actually
[00:18:59] there's two other completely different
[00:19:00] things out of left field that totally
[00:19:02] overturned it. Yeah. So, we're keeping
[00:19:04] it, and it's definitely adding some more
[00:19:08] complexity, but there's a lot of things
[00:19:09] we can do to reduce that and simplify
[00:19:12] it.
[00:19:13] But there's always a hand hovering over
[00:19:14] the button to
[00:19:16] can we get rid of this? Like can we shed
[00:19:18] weight? Like can we get rid of the can
[00:19:20] we reduce complexity so we're again in
[00:19:22] the spot of if a new model comes out, we
[00:19:24] can react quickly. And
[00:19:26] you know, sure it's good engineering and
[00:19:28] there's not a lot of duplication, but
[00:19:30] still updating one client is still
[00:19:32] faster than updating two clients. So,
[00:19:34] there's this constant tension between
[00:19:36] what's the most minimal thing
[00:19:38] the most minimal product that we can
[00:19:40] have. And and, you know, just to pick
[00:19:42] some other examples, there's a lot of
[00:19:44] niceties you can do in VS code where,
[00:19:46] for example, um yeah, recent exa- not
[00:19:49] recent, but a common example, you know
[00:19:51] how in VS code, you can hover over
[00:19:53] diagnostic and then you can say,
[00:19:55] you know, fix this or whatever and then
[00:19:58] people would ask me, can you add like a
[00:19:59] let amp fix this button? And it's like
[00:20:02] you can also amp knows about your
[00:20:03] selection, knows about the diagnostics,
[00:20:05] it can see all of this, so you can just
[00:20:07] ask like fix this for me and if you type
[00:20:08] three words, it will usually do it. So
[00:20:11] that's something where it's like, well,
[00:20:13] you can already do it, it's a nicety,
[00:20:14] but let's remove the surface area, let's
[00:20:17] remove this other thing that we have to
[00:20:18] backport or keep working or whatnot. And
[00:20:21] you know, tiny example, but there's a
[00:20:23] you know, 500 of these where we say
[00:20:25] >> But how do you think of that when the
[00:20:26] IDE is already a AI IDE? So I use
[00:20:29] cursor, right? Yeah. There's already
[00:20:30] like fix and chat that pops up and they
[00:20:32] want obviously that button to go to
[00:20:34] their chat versus like you guys are on
[00:20:36] the left side and it's like Yeah, yeah.
[00:20:37] just do this here. Do you feel that in a
[00:20:40] way the IDE VS code extension is more
[00:20:43] like for the people not using this like
[00:20:45] AI first tools and using the features
[00:20:47] like
[00:20:48] most people, you know, I'm sure GitHub
[00:20:50] is like eventually going to have
[00:20:52] something good to put in in VS code. How
[00:20:54] much do you think about VS code
[00:20:56] extension just being, you know, maybe a
[00:20:58] stepping stone to the thing you cannot
[00:21:00] talk about that you don't talk about and
[00:21:01] then kind of the bifurcation of of the
[00:21:04] TUI versus like the fully async, you're
[00:21:07] not looking at anything?
[00:21:08] >> we're not trying to maximize our
[00:21:10] revenue, our user adoption literally
[00:21:12] today with the state of today's models
[00:21:15] and today's tools
[00:21:16] because everything is changing so fast.
[00:21:18] So yeah, we're not trying to fight
[00:21:20] cursor for who's going to win the right
[00:21:22] to have users fix with our AI or their
[00:21:24] AI. Frankly, it doesn't really matter to
[00:21:27] us. I don't think that that interaction
[00:21:29] is a really important way that people
[00:21:31] are going to be interacting with AI in 6
[00:21:32] months or 12 months. I don't think we
[00:21:33] learn anything from that.
[00:21:36] And we just said we're not going to do
[00:21:38] it. And users, some have definitely
[00:21:41] asked for that. And the other thing is
[00:21:43] we have to figure out what do users
[00:21:45] actually want? And they say they want a
[00:21:47] lot of things. And in the case of
[00:21:49] customers, a lot of times they'll say
[00:21:51] they want a lot of things. They'll say
[00:21:52] that they want bring your own key,
[00:21:54] they'll say that they want model choice,
[00:21:55] they'll say that they want a
[00:21:57] subscription for $100 a month or, you
[00:21:59] know, pricing to lock users out if they
[00:22:01] spend more than $30 in a day. But
[00:22:03] actually, what we've seen is they want
[00:22:06] the very best coding agent. Not
[00:22:07] everyone, not everyone, but we're
[00:22:09] focused on the ones that want the very
[00:22:10] best coding agent. And when we tell them
[00:22:13] how that thing will slow us down, then
[00:22:16] that starts this conversation where
[00:22:18] they'd rather not have something they
[00:22:19] might use 2% of the time if that means
[00:22:21] that the tool is worse.
[00:22:23] And we alone among the entire industry,
[00:22:26] it feels like we are being really honest
[00:22:27] and really bold with that. And
[00:22:30] I am really concerned just for the the
[00:22:32] rate of progress overall that a lot of
[00:22:34] these other tools that are great like
[00:22:35] Claude code and codex and cursor and so
[00:22:37] on, that they've forgotten what made
[00:22:39] them great and what made them grow so
[00:22:41] fast, which is building the very best
[00:22:43] product. And they they built it in a way
[00:22:45] that's too overfit on the current
[00:22:46] capabilities. And so they're just going
[00:22:49] to peak and then it's going to be a slow
[00:22:51] fall. And zero of the software business
[00:22:54] model works if that happens. You need to
[00:22:57] have growth into the future. Yeah. So,
[00:23:00] you know, we're trying to I think it's
[00:23:02] best for our business, but also I think
[00:23:03] that we're trying to push the whole
[00:23:05] industry to just be radical about the
[00:23:08] changes that are coming.
[00:23:09] Yeah, when you said the best coding
[00:23:10] agent, I'm always like, is there a
[00:23:11] market for like the mid coding agent?
[00:23:13] You know, like there's I think the model
[00:23:15] choice is a great example of like
[00:23:18] why would you want a model choice? I
[00:23:20] think pricing, I guess is like the only
[00:23:21] thing that people bring up, but I think
[00:23:23] to your point it's like you're already
[00:23:24] paying engineers a lot of money. Yeah.
[00:23:26] Like the cost of like Sonnet 4 versus
[00:23:29] Sonnet 3.5, it's kind of like minimal
[00:23:33] compared to like
[00:23:34] 150, 200, 300k once you do taxes and
[00:23:38] benefits and all of that that you pay to
[00:23:39] employees. So
[00:23:40] yeah, I think we're like in this
[00:23:42] part of the market almost where like
[00:23:44] people
[00:23:45] are not maxing these things.
[00:23:46] >> Yeah.
[00:23:47] There's absolutely a market today,
[00:23:49] literally today. Someone will pay a
[00:23:51] monthly fee for that cheaper AI product
[00:23:53] today, but they're not going to be
[00:23:55] paying that in 6 months. There it's
[00:23:57] going to be a different product. They're
[00:23:58] going to be paying for something else.
[00:23:59] And if you have that much churn as a
[00:24:01] product, you simply cannot build
[00:24:02] software in that way.
[00:24:04] But a lot of people get
[00:24:07] tempted by
[00:24:08] that and they hear a lot of users ask
[00:24:10] for it. 6 months ago, it was still the
[00:24:13] game of
[00:24:14] oh, a new model got released and then
[00:24:16] everybody would tweet out, it's already
[00:24:17] available in
[00:24:19] their editor or whatever it is, their
[00:24:21] extension, right? And I think
[00:24:23] that's kind of over. Like it's just
[00:24:26] people realize that, well, the
[00:24:28] benchmarks are one thing, right? Oh,
[00:24:29] this is the best model, turns out it's
[00:24:31] not in this editor, but it feels
[00:24:32] different in this editor. So
[00:24:35] the whole like, you know, the models are
[00:24:38] the thing I
[00:24:40] I don't want to say that's over, but
[00:24:42] it's becoming less important. And
[00:24:45] people are now now also waking up to the
[00:24:47] fact that it's not just the model, it's
[00:24:49] the system prompt, it's the tools, it's
[00:24:51] the the harness,
[00:24:52] um the scaffolding around the model. So
[00:24:55] I can give you the choice to use Gemini
[00:24:57] 2.5 in in amp, but without the system
[00:25:00] prompt being tuned to it, without, you
[00:25:02] know, what I called before like going
[00:25:04] with the grain of the model, the models
[00:25:06] are trained in different ways, so you
[00:25:07] want to optimize the tool and all around
[00:25:10] it for the specific model. Without that
[00:25:12] happening,
[00:25:13] doesn't make a lot of sense, you get the
[00:25:14] wrong signal. I can drop you in a new
[00:25:16] model right now and have it available in
[00:25:18] 10 minutes, but that's not what you're
[00:25:20] after, right? You want the best possible
[00:25:22] version of this model in this tool.
[00:25:24] >> Mhm. And you know, that's I think become
[00:25:26] more important, less like the model
[00:25:28] selectors and whatnot. Yeah. Why do you
[00:25:30] mention the models at all? So you have
[00:25:32] Sonnet 4 for the agent, you have 03 for
[00:25:34] the Oracle. We don't. We don't show them
[00:25:37] in the product. We don't mention them
[00:25:39] all at all. We put it in the manual, we
[00:25:41] have like a owner's manual because
[00:25:43] people kept asking us.
[00:25:44] >> Yeah. Well, that even then it's like
[00:25:46] why does it matter that they ask?
[00:25:48] Because you might not now it's like if
[00:25:49] you want to change it tomorrow, then
[00:25:51] it's like you got to tell people you
[00:25:53] change the model and it's like, where do
[00:25:55] you think we are on like the slope of
[00:25:56] like, hey, like you guys should forget
[00:25:58] it all about what model is even running,
[00:26:00] what the difference is?
[00:26:01] >> So I think we're going towards a future
[00:26:03] where
[00:26:05] the model
[00:26:07] will become an implementation detail to
[00:26:09] some sense and we will end up on a
[00:26:11] different abstraction layer. And for
[00:26:13] example,
[00:26:14] you asked like when would I use a mid
[00:26:16] model, right?
[00:26:18] When you put it like this, it sounds
[00:26:19] obvious like who wants to use the shitty
[00:26:21] version of the better version, but you
[00:26:23] know, we're thinking actively about
[00:26:24] this. There's models who might not be as
[00:26:26] smart um as Sonnet 4 as the main agentic
[00:26:30] driver, but it might be 10 times as
[00:26:32] fast. And that doesn't mean that you
[00:26:34] think, well, now I need to go fast, I
[00:26:36] have to use this, but I think there's
[00:26:38] different modes of working in your
[00:26:40] day-to-day work with this model in a
[00:26:42] different harness or in a different
[00:26:44] configuration can then be
[00:26:46] another way to do or get things done
[00:26:48] versus talking to
[00:26:50] you know, an agent in a back and forth.
[00:26:52] So in that sense like we've seen this
[00:26:55] with like planning modes where people
[00:26:57] use different models, but it's still
[00:26:58] like pretty clear that it's a different
[00:27:00] model whatnot, but I do think it will be
[00:27:03] pushed more and more in the background
[00:27:04] and that people will choose or have
[00:27:07] different ways to interact with models
[00:27:09] and the specific model or its version
[00:27:12] will not be as visible anymore. Yeah.
[00:27:14] And I know Cody was using StarCoder for
[00:27:17] inline edits at least as well beyond I
[00:27:19] said uh publicly, so I'm not leaking
[00:27:21] anything. Does this still seem
[00:27:24] interesting to you to figure out, hey,
[00:27:26] is there something in open source that
[00:27:28] we can use and maybe fine tune to like
[00:27:30] make better or is it are you still like
[00:27:32] Yeah, absolutely. we just we just want
[00:27:34] to be at the cutting edge and you know,
[00:27:36] that's maybe in the back burner.
[00:27:38] So first, it took people eight or nine
[00:27:40] months to figure out what 3.5 Sonnet was
[00:27:42] capable of from when it was released
[00:27:43] last June. And then once this is around
[00:27:48] the time we were building amp and Claude
[00:27:50] code came out and you realized that wow,
[00:27:53] like a tool calling agent is incredible.
[00:27:55] And at that moment, everyone, all the
[00:27:57] smartest people in the world also
[00:27:58] realized that billions of dollars of
[00:28:00] money went in to training new models and
[00:28:02] harnesses based on that. And now it's
[00:28:06] September 2025 and we're reaping the
[00:28:08] benefits of all that investment. And you
[00:28:09] have so many more models coming out. You
[00:28:11] have the open source models like
[00:28:12] Qwen3-7B-Chat and Kimiko
[00:28:15] and they're moving so fast. You have
[00:28:16] XAI's models, you have GPT-5 that came
[00:28:19] out and we're still figuring out
[00:28:21] how to use these things, but it would
[00:28:24] actually be an incredibly pessimistic
[00:28:26] outcome if all those smart people and
[00:28:28] all that money were not able to build
[00:28:30] anything that was better than Sonnet. So
[00:28:33] we in our internal team right now, and
[00:28:36] this could change, we have about half of
[00:28:38] our internal team using a different
[00:28:40] model other than Sonnet as their main
[00:28:42] way of using amp. And that's a huge
[00:28:45] change. In the past, we had done that
[00:28:47] only to test and begrudgingly, but now
[00:28:49] we're using it. And there's a different
[00:28:50] way of interacting with an agent that's
[00:28:52] not the linear chat transcript that
[00:28:54] actually means you don't feel like
[00:28:56] you're getting a cheaper mid model, you
[00:28:58] feel like this is a different way of
[00:28:59] interacting where that speed is really
[00:29:01] beneficial and it's more constrained.
[00:29:03] So things are changing so fast.
[00:29:06] Is the GPT-5 codex only being available
[00:29:09] in codex make you nervous about future
[00:29:12] availability of like cutting edge models
[00:29:14] and like does that put more emphasis in
[00:29:16] like figuring out maybe like an open
[00:29:17] source strategy? They make it available
[00:29:19] to API customers, it's delayed. And
[00:29:24] if they were doing that
[00:29:26] I I really think that for the most part,
[00:29:28] I take these model houses at their word
[00:29:30] and they wanted to get it out to their
[00:29:32] first party product as quickly as
[00:29:34] possible because they
[00:29:36] honestly need to gather more data and
[00:29:38] they're iterating in public. So yeah, I
[00:29:41] would love it if all the model houses
[00:29:43] perfectly coordinated with us before
[00:29:44] they released anything, but I know that
[00:29:46] would slow them down and I don't want to
[00:29:47] slow them down like that. In the same
[00:29:49] way that we want our customers to give
[00:29:50] us grace and help us iterate in public.
[00:29:53] Yeah, I think there's an interesting
[00:29:55] just dynamic in the market. Like when
[00:29:57] Cursor switched from Sonnet to GPT-5,
[00:29:59] it's like the default model that was
[00:30:01] like, you know, 200 million of revenue
[00:30:03] for Anthropic that kind of went away and
[00:30:05] like moved on to GPT-5. So, there's kind
[00:30:07] of like, okay, We're all friends now,
[00:30:09] you know, but maybe later that's going
[00:30:11] to change, but yeah, it's an interesting
[00:30:13] >> thing also is that, you know, if you're
[00:30:15] building an agent and you're not at one
[00:30:17] of the model houses, you can use
[00:30:19] multiple models from different
[00:30:20] providers, right? So, which is what we
[00:30:22] do. Like we When you use Amp, you're
[00:30:24] using a model from Anthropic, you're
[00:30:26] using a model from OpenAI, and you're
[00:30:29] using a model from Google.
[00:30:31] And we're also
[00:30:33] very close to shipping like a fast
[00:30:35] open-source model that we can use as a
[00:30:37] different sub-agent in there, too. And,
[00:30:40] you know, when you put it like this, it
[00:30:42] seems silly to say we only use one model
[00:30:44] of like this family because they all
[00:30:46] have different strengths and weaknesses.
[00:30:49] I think we are one or two months away
[00:30:51] from a possible news cycle that is the
[00:30:53] foundation model companies have spent
[00:30:55] billions of dollars in CapEx and hired
[00:30:57] like crazy, and now, you know, they're
[00:31:00] no longer the best in this realm, and
[00:31:02] there's a huge stampede away from them.
[00:31:04] That's very possible, and I'm not saying
[00:31:06] anything new.
[00:31:08] Just imagine, you know, last May when
[00:31:12] people were counting Anthropic out
[00:31:13] before Sonnet came out. Things change so
[00:31:15] fast here. Yeah. Yeah. Yeah. And I think
[00:31:18] OpenAI obviously with Johnny Ive and
[00:31:20] some of that, it's moving more in a
[00:31:22] consumer fashion as well. So, it's been
[00:31:24] interesting to see the big push on
[00:31:26] Codex. I would have imagined them to go
[00:31:28] more towards education, kind of like big
[00:31:31] I know they have a lot of big enterprise
[00:31:33] contracts for like ChatGPT for your
[00:31:35] enterprise kind of thing. So,
[00:31:37] Yeah. Yeah, you guys I think are in a
[00:31:38] good in a good spot because you have
[00:31:40] both like the Sourcegraph trust, like
[00:31:42] you said, um but also like Amp.
[00:31:45] >> I see a lot of great stuff on Twitter.
[00:31:46] You know, people are like, I just put
[00:31:48] all my Amp agents running, I come back,
[00:31:50] it's great. It's like I I think it's now
[00:31:52] on that wave of like, okay, this is like
[00:31:55] one of the best tools out there. And
[00:31:57] like if you're like a serious engineer,
[00:31:58] you should probably use Amp at least in
[00:32:00] some capacity. Yeah. And then make your
[00:32:02] own choice. Um how difficult is it to
[00:32:05] think about what goes in your harness
[00:32:07] versus like what people should build?
[00:32:09] So, you have custom commands, you have
[00:32:12] You've done a great job on like the
[00:32:14] tooling where like people can put
[00:32:16] executables as tools instead of having
[00:32:18] to define like an MCP server. It's like,
[00:32:21] Yeah, how much of it you're like, hey,
[00:32:22] we're just giving you the tools versus
[00:32:24] how much do you want to be opinionated
[00:32:25] with things like I mean,
[00:32:27] I think of like compacting conversation
[00:32:29] is like maybe one of the key commands
[00:32:32] that people have. And like in Claude
[00:32:33] code, you can give a custom prompt to
[00:32:35] compact like a
[00:32:37] What's that discussion like? Yeah. The
[00:32:39] main assumption again, everything is
[00:32:41] changing, we got to be able to move
[00:32:42] fast. That means
[00:32:44] what you want is
[00:32:46] I don't use the picture of a harness
[00:32:48] often. What I use is like a a
[00:32:50] scaffolding. Like you want to build a
[00:32:51] scaffolding around the model, a wooden
[00:32:53] scaffolding that
[00:32:55] if the model gets better or you have to
[00:32:57] switch it out, the scaffolding falls
[00:32:58] away. You know, like the bitter lesson.
[00:33:00] Like embrace that a lot of stuff might
[00:33:03] fall into the model as soon as the model
[00:33:05] gets better, right? Because then it can
[00:33:07] remember more whatever or it doesn't
[00:33:09] Why invest 3 months in like a a separate
[00:33:12] apply model
[00:33:14] when the next generation, the the, you
[00:33:17] know, .7 version or .8 or whatever
[00:33:19] version of this model can now do all of
[00:33:21] the edits on its own. So, that's again
[00:33:24] the bigger thing. And with that in mind,
[00:33:27] we really try to restrict a lot of the
[00:33:29] features that we add around the model.
[00:33:31] And you can do a lot of stuff. Like we
[00:33:33] could be busy all day adding stuff in
[00:33:35] our clients and whatnot, making a
[00:33:36] product more complicated, but we don't
[00:33:37] want to. So, that's that's the first
[00:33:39] thing. The other thing is
[00:33:42] we're living in a strange times. We're
[00:33:44] living in strange times from a product
[00:33:46] development perspective where basically,
[00:33:48] I think the old triangle of design,
[00:33:51] product, and engineering,
[00:33:53] it's kind of changing. It's not a
[00:33:55] triangle more. I don't know what shape
[00:33:57] it is. It's a block, whatever, but it's
[00:33:59] not it's not a triangle anymore. And
[00:34:02] the reason for this is is because you
[00:34:05] can't build a roadmap. You can't say
[00:34:06] this is what we're going to build in the
[00:34:07] next 6 months. People don't know yet
[00:34:11] how these models are can be used to
[00:34:13] their full extent. Everybody's figuring
[00:34:15] this out on the go. That's another
[00:34:17] thing. The other
[00:34:18] third thing there is, which we just
[00:34:20] talked about as well having coffee
[00:34:21] before coming here, is that
[00:34:23] we're now in in a world where people
[00:34:27] the only UI basically is like a text UI,
[00:34:31] and you can use this in the wrong way.
[00:34:34] And the example I used earlier was if,
[00:34:36] you know, you buy Jira, for example, but
[00:34:38] you use it for your shopping list,
[00:34:40] Atlassian is happy about this, but
[00:34:41] that's not what they built the product
[00:34:43] for, right? But you can use it in the
[00:34:44] wrong way and still get results. The
[00:34:46] problem with LLMs and a lot of the
[00:34:48] models is that you can use it in the
[00:34:50] wrong way,
[00:34:51] and it looks like you're getting
[00:34:53] results, you know? Like you can use
[00:34:55] OpenAI, ChatGPT to look up serial
[00:34:57] numbers or,
[00:34:59] you know, technical specifications for a
[00:35:01] camera or something, and it will tell
[00:35:03] you this, you know? But it might be
[00:35:06] wrong or 99% of the time or 98% or 95%
[00:35:10] of the time it might work, but in 5% it
[00:35:12] might not work. So, having
[00:35:14] non-deterministic LLMs as the heart of
[00:35:17] your product is something unprecedented
[00:35:19] that we have in software, I think. So,
[00:35:21] with that in mind, a lot of the features
[00:35:23] what we see, you know, where people
[00:35:25] build like
[00:35:27] elaborate workflows. Like I have my
[00:35:28] custom slash commands and they trigger
[00:35:30] custom sub-agents and they in turn
[00:35:33] trigger custom MCP tool calls on
[00:35:35] behind which again another model is
[00:35:37] doing inference again and taking the
[00:35:39] input and blah blah blah.
[00:35:40] I think a lot of this
[00:35:43] will and has resulted in hangovers where
[00:35:45] people realize, oh, like this looks like
[00:35:48] it's a deterministic workflow. It looks
[00:35:50] like it does the thing that I want it to
[00:35:52] do,
[00:35:53] but actually I can't use it if it only
[00:35:54] does it in 98% of the time. So, that's
[00:35:57] something we're really conscious of
[00:35:59] where I think everybody's experimenting,
[00:36:02] everybody's sharing the experiences, you
[00:36:03] know, the thread boy tweets about what
[00:36:05] to prompt where and how, but you have to
[00:36:08] be super
[00:36:10] strict about, you know,
[00:36:13] not giving users a false sense of what
[00:36:16] the product can do and how reliable it
[00:36:18] is because I think it's dishonest in
[00:36:20] some way, and it doesn't lead to good
[00:36:22] results. And, you know, just as an
[00:36:25] example, I think over the last 3 months,
[00:36:27] I would say we're
[00:36:28] we're ahead of the curve like using Amp
[00:36:30] internally. Like we're ahead of like
[00:36:32] the mainstream agenda kind of like say a
[00:36:35] month or two where we've tried a lot of
[00:36:38] this stuff and then realized, oh, this
[00:36:40] wasn't the best use of our time or the
[00:36:42] tokens.
[00:36:43] And now you see a lot of other people
[00:36:46] waking up to this. Like famous on
[00:36:47] Twitter, Armin Ronacher, the
[00:36:50] Python developer from Austria, he's done
[00:36:53] a lot of good stuff with Claude code and
[00:36:55] shared a lot of his learnings. And you
[00:36:57] could see that the way he tweeted was
[00:37:00] super excited, like a lot of things I
[00:37:02] can now do this and this and this. And
[00:37:04] then a month later it's like, oh, maybe,
[00:37:06] you know,
[00:37:07] having eight remote control agents that
[00:37:09] I control with my phone and let them run
[00:37:11] for 20 hours, maybe that's not as
[00:37:13] productive as I thought it would be. And
[00:37:16] yeah, it's something that we're super
[00:37:17] conscious about. What are those things?
[00:37:20] What are like the failure modes that you
[00:37:21] heard from customers where it's like,
[00:37:23] hey, we tried Amp
[00:37:25] and it just didn't work at doing XYZ. Is
[00:37:28] there a collection of those that you
[00:37:30] guys use as almost like a North Star as
[00:37:32] you keep building or But I think like
[00:37:34] one of the things is
[00:37:36] um
[00:37:37] the whole vibe coding stuff where people
[00:37:40] just use it and, you know, they're like,
[00:37:42] hey, I spent 10 bucks in tokens and it
[00:37:44] didn't build me the whole app or
[00:37:45] something.
[00:37:46] Um the failure mode of outsourcing the
[00:37:49] thinking but not the typing, which I
[00:37:51] think it should be the opposite. You
[00:37:53] still have to know engineering, you
[00:37:54] still have to know how to program, you
[00:37:56] still have to know your application and
[00:37:57] its architecture, how it's deployed, and
[00:37:59] then basically use the agent to do the
[00:38:01] work that you would have done, but you
[00:38:03] have to know what the desired outcome is
[00:38:06] or whatnot. Like that's a common one
[00:38:07] where people just,
[00:38:09] you know, hands off the wheel.
[00:38:11] Agent, you go and write this for me. And
[00:38:13] then turns out a couple hours later, oh,
[00:38:15] actually this nobody understands, it's
[00:38:17] spaghetti code. Amp it it's different
[00:38:19] from the products it competes against.
[00:38:20] So, we've had one head-to-head loss with
[00:38:23] Amp where we lost against the, you know,
[00:38:25] usual players. And the reason why is one
[00:38:28] of them discounted their other product
[00:38:30] 100% for 2 years. The other one
[00:38:33] discounted it 85% for 2 years,
[00:38:35] which is just crazy. And we wouldn't
[00:38:39] want to do that because are we really
[00:38:42] going to learn from that? And then how's
[00:38:44] it going to be used? Can it be used in a
[00:38:45] different way? Um so, usually the way
[00:38:49] that we might lose is there's some other
[00:38:52] product that would go to 80% of the devs
[00:38:55] in a company that is like the base
[00:38:56] layer. Sometimes that's Copilot or
[00:38:58] Cursor. And Amp is more expensive, it's
[00:39:01] more powerful, and they'll give it to
[00:39:02] that 20% of devs that they trust more.
[00:39:05] And in a previous world, any software
[00:39:06] company would say, oh, no, we need to
[00:39:07] get 100%. That's we don't want our
[00:39:09] competitor getting in there. But
[00:39:11] actually, that means that we're able to
[00:39:12] even more focus on being bold and crazy
[00:39:15] because all those devs can always fall
[00:39:16] back to a Cursor or a Copilot. So, we
[00:39:19] actually really like that kind of deal.
[00:39:21] Yeah. The other thing there, I think a
[00:39:24] bunch of questions already touched on
[00:39:25] this, is that um talking about
[00:39:27] segmentation or market or the ideal
[00:39:30] user, again, everything is changing. So,
[00:39:33] what we tried to do is we try to, you
[00:39:36] know, build a tool for people who are at
[00:39:39] the frontier or at least curious about
[00:39:43] it and want to figure out how to use
[00:39:44] these agents in the best possible way.
[00:39:47] And that's based on the assumption that
[00:39:49] if you build for the mainstream user who
[00:39:54] not, you know, mainstream sounds like, I
[00:39:56] don't know, it sounds bad, but what I
[00:39:58] mean is
[00:40:00] what I mean is
[00:40:01] if you build a product for somebody who
[00:40:03] does not know what a good prompt looks
[00:40:04] like, you will fall behind right now.
[00:40:07] Because you will spend time and
[00:40:08] resources building stuff like the prompt
[00:40:11] enhancer and like blah blah blah blah
[00:40:13] blah, but then you will end up building
[00:40:16] this and you miss the next step change
[00:40:18] that might happen. So,
[00:40:20] the way we think about it is we build
[00:40:22] for the people
[00:40:24] who already gets that a lot of stuff is
[00:40:26] changing, but we want to leave the door
[00:40:27] open. If you're open to learning new
[00:40:29] things and you want to learn how to use
[00:40:31] AI and agents in your workflow, please
[00:40:33] come with us. We're happy to have you.
[00:40:35] But if you're skeptical and you you
[00:40:38] think prompt engineering, that's a
[00:40:39] term, I don't care about this.
[00:40:42] We're not right now building a product
[00:40:43] for you because we would fall behind.
[00:40:45] Yeah, so prompt enhancer, that's a
[00:40:47] feature that doesn't actually
[00:40:49] work. The theory behind it is nuts
[00:40:51] because what helps LLMs is not tricks in
[00:40:56] phrasing your prompt in a certain way,
[00:40:57] it's fundamentally information that you
[00:40:58] have in your head that you can bring
[00:41:00] into the prompt. And if you don't have
[00:41:02] that in a prompt enhancer, LLM cannot
[00:41:04] magically conjure that up. Yeah, yeah.
[00:41:06] It cannot narrow the search space for
[00:41:08] you. Custom sub-agents, I The way that
[00:41:10] we disqualify that as something we
[00:41:12] wanted to build at this point is because
[00:41:14] you look at all of the tokens that
[00:41:16] you're
[00:41:17] sending to the model and it's so many
[00:41:20] more. It's uh you know, so much more
[00:41:22] convoluted. Um it we don't think that
[00:41:24] these models are trained in a way that
[00:41:27] would support this use case and and the
[00:41:29] output of this going in here, it's so
[00:41:31] much harder to debug. And MCP is another
[00:41:35] thing. MCP is done a great job in
[00:41:37] getting
[00:41:39] products to expose the verbs that agents
[00:41:42] might want to, you know, interact with.
[00:41:44] Although in most cases they do not
[00:41:45] actually get the right verbs exposed.
[00:41:48] But as a user-facing technology, it is
[00:41:50] such a common failure mode where a user
[00:41:52] will go and add in some MCP servers.
[00:41:54] Auth is a huge pain, but let's say they
[00:41:56] get over that hurdle, then they have, I
[00:41:58] don't know, 50 tools exposed that often
[00:42:00] are too low-level granularity. And it
[00:42:04] takes a ton of tokens in the model, it
[00:42:05] makes everything slower and more
[00:42:06] expensive.
[00:42:08] They're often misused.
[00:42:10] And it's just not a good experience. So,
[00:42:12] you know, there's all of these things
[00:42:14] that we've said no to and other tools
[00:42:16] are bringing them in and they're saying
[00:42:17] yes to all these things. I think it
[00:42:20] feels like they're making progress in
[00:42:21] the meantime and people retweet and
[00:42:22] people talk about how they're able to do
[00:42:24] these amazing things. But just the
[00:42:25] simplest example that seems so obvious
[00:42:28] and frankly it confounds me that people
[00:42:29] more people don't do this, make it so
[00:42:31] that my Google Docs and Notion and
[00:42:33] Linear and GitHub Issues are all
[00:42:35] accessible to my agent. The vast vast
[00:42:37] majority of developers who use Amp or
[00:42:40] Claude code or anything else, they don't
[00:42:41] have all those context sources set up.
[00:42:44] That seems like such a slam dunk. So,
[00:42:46] before we would do that, and we've we
[00:42:48] built that, we ripped it out. Before we
[00:42:50] would move forward with that, we'd have
[00:42:51] to get an answer, even for our own
[00:42:53] usage, why are we not doing that? And
[00:42:55] it's frankly still puzzling to us, but
[00:42:57] we're not going to touch that until we
[00:42:58] get confident about And to come back to
[00:43:01] the example you mentioned compact, we
[00:43:03] have this in the product, but again, the
[00:43:06] hand is hovering over the rip it out
[00:43:08] button because I think compact is such a
[00:43:11] alluring thing where people think, oh,
[00:43:14] you know, I ran out of context, I hit
[00:43:15] that button, now I'm back to the start.
[00:43:17] But you lose signal, you lose data and
[00:43:20] it's something where
[00:43:21] out of the models really good enough, is
[00:43:23] compacting good enough to really glance
[00:43:26] over this that the user doesn't have to
[00:43:27] worry about it or is it something where
[00:43:30] you would have to somehow make it clear
[00:43:32] to the user that, hey look, your
[00:43:33] conversation has 50 messages back and
[00:43:35] forth, if you hit compact, this is this
[00:43:39] is all going to become blurry, you know,
[00:43:41] you're going to compress it and you lose
[00:43:43] signal, you lose fidelity and then you
[00:43:45] put it in a new context where now, are
[00:43:46] you sure this is the right trade-off?
[00:43:48] And some users are, but again, like it's
[00:43:51] strange times because now we have like
[00:43:53] this thing at the heart of our software,
[00:43:55] this this, you know, orb from outer
[00:43:57] space that can do sometimes whatever it
[00:43:59] wants
[00:44:01] and it's it's strange to build on top of
[00:44:03] this and it's strange to educate your
[00:44:05] users about this that this is the thing,
[00:44:07] right? Like imagine, you know,
[00:44:10] the end of the '90s PC era, you had to
[00:44:12] build Microsoft Word and then you say
[00:44:14] like, well, at the heart of this new
[00:44:16] personal computer, the Pentium 3,
[00:44:17] whatever,
[00:44:18] there's a weird orb from outer space and
[00:44:20] sometimes if you bold text in Word, it
[00:44:22] actually makes it italic, you know? But
[00:44:25] that's the situation we're in, like
[00:44:26] that's the fact, like it doesn't always
[00:44:28] bold the text, sometimes it underlines
[00:44:30] it if you reach 150 tokens or 150,000
[00:44:32] tokens or something. How do you teach
[00:44:34] this to the user? Yeah, and you know,
[00:44:37] we're in the church of context
[00:44:38] engineering at the Amp office.
[00:44:41] Um and when we had Jeff on the podcast,
[00:44:42] they talked about the context drought
[00:44:44] paper that they did and they mentioned
[00:44:45] specifically encoding, for example,
[00:44:48] showing previous failures was like not
[00:44:50] helpful at all Mhm.
[00:44:51] >> to the agent. And so, I think when
[00:44:54] you're compacting conversation, there's
[00:44:55] almost like,
[00:44:57] you know, if you have a long
[00:44:58] conversation, it usually means something
[00:45:00] went wrong along the way and you had to
[00:45:01] like go back and forth on like a bunch
[00:45:03] of things that didn't work and you're
[00:45:05] keeping those in. Um but I've been
[00:45:07] trying to figure out what's like
[00:45:09] what's that going to look like. In my
[00:45:10] mind, it's almost like
[00:45:12] if you take the idea of Linear, which I
[00:45:14] use and I give to my agents just to get
[00:45:17] because then I have a canonical prompt
[00:45:19] for one issue. Because often you have to
[00:45:20] restart
[00:45:21] >> Yep. because it's like it just goes too
[00:45:23] much wrong down the wrong path. A lot of
[00:45:25] people don't restart. A lot of people
[00:45:27] just try and keep going. Yes, that's
[00:45:29] bad.
[00:45:30] In that case, what can you take from
[00:45:32] that conversation as a learning and put
[00:45:35] it back in the upstream issue so that
[00:45:37] then the issue is like either more
[00:45:38] descriptive or has like more information
[00:45:40] that is not compacting, but it's almost
[00:45:42] like how you would do as an engineer,
[00:45:44] it's like you're doing it in your mind,
[00:45:46] right? You you get an issue and then you
[00:45:48] start working and then you kind of
[00:45:49] update your mental model. Like that
[00:45:51] doesn't really work for agents, but
[00:45:52] people are not doing this like small
[00:45:54] increment in the initial issue. I would
[00:45:56] say in this case it's still you cannot
[00:45:58] outsource your thinking, right? Like in
[00:46:00] this case,
[00:46:01] I don't think you can expect right now
[00:46:03] model to say out of this conversation,
[00:46:05] this is the most important thing, let me
[00:46:06] put this back in the Linear thing. I
[00:46:09] maybe, you know, if you phrase it like
[00:46:11] this and automate it like this and it's
[00:46:12] always a perfect conversation, maybe it
[00:46:13] works, but I think in this case, you
[00:46:15] still have to be mindful of the context
[00:46:17] and what we encourage users to do, for
[00:46:20] example, in Amp is to start a lot of
[00:46:22] small threads and be really, you know,
[00:46:23] do context engineering and be really
[00:46:27] strict about what goes into context and
[00:46:29] what doesn't. And
[00:46:31] the other thing that I think touches
[00:46:33] this on is um you know, where a lot of
[00:46:37] CLI tools, for example, have super
[00:46:39] verbose output and Basil, sorry to call
[00:46:41] this out, I'm not a big Basil, but you
[00:46:43] could just call Basil out, super verbose
[00:46:45] output. So, then the natural assumption
[00:46:47] is, oh, let's hide this from the user,
[00:46:48] you know, like let's let's abstract this
[00:46:50] away and summarize the output or
[00:46:52] whatever or
[00:46:54] whatever, just the exit code or
[00:46:55] something. And then you get into this
[00:46:57] dangerous territory where what you see
[00:46:59] is what you get is not true anymore and
[00:47:01] in the context, what you see is like
[00:47:03] some other thing in the context and that
[00:47:05] could lead to issues. But for me, the
[00:47:07] meta thing here too is
[00:47:10] you know, everything is changing, that
[00:47:11] means we're seeing this, CLI tools right
[00:47:15] now are also adapting to being used by
[00:47:17] agents. So, they're changing their
[00:47:19] output too. So, if you focus on the fact
[00:47:21] that Basil will always be verbose and
[00:47:23] build something for this issue, you
[00:47:25] might be outdated in half a year where
[00:47:27] somebody is like, no, no, no, we have a
[00:47:29] Basil agent wrapper now, this is not an
[00:47:31] issue anymore.
[00:47:33] Interesting. Yeah. One model that I have
[00:47:34] is if you are relatively on the cutting
[00:47:37] edge of using agents and there's some
[00:47:39] persistent problem like this, it feels
[00:47:41] kind of out of band. Like how the model
[00:47:42] itself update its memory or will update
[00:47:44] the Linear issue. The model needs to be
[00:47:48] trained in order to do that better.
[00:47:50] If it's something like your own coding
[00:47:52] conventions, that's different. But if
[00:47:53] it's something fundamental that feels
[00:47:55] like about
[00:47:56] you know, out of band from the agent,
[00:47:58] the model needs to be trained to deal
[00:48:00] with memory better or to accept the fact
[00:48:03] that it might have a incorrect view of
[00:48:06] its own history if you go back and edit
[00:48:08] it. And we're feeling these pains right
[00:48:11] now because people have only been using
[00:48:13] agent and coding tools for a matter of
[00:48:15] months. Most people have been using them
[00:48:16] for like less than 3 months. And if
[00:48:17] we're only feeling them now, it takes a
[00:48:19] little bit of time for a team at model
[00:48:21] house to go and do a fine-tune of one of
[00:48:23] their really big models or they've got
[00:48:24] other big models, the new revisions that
[00:48:26] are being trained and they can only fit
[00:48:28] a certain number of experiments like
[00:48:29] this in. They're probably going to get
[00:48:30] half of their approaches wrong. So, you
[00:48:33] can only do so much and that's
[00:48:34] Thurston's idea of going with the grain
[00:48:35] of the model. And I mean, you've seen
[00:48:37] this, I'm sure where a lot of users
[00:48:40] are going through this lesson where they
[00:48:43] let me just add this MCP server that
[00:48:45] does everything I wanted to do and then
[00:48:47] 2 days later,
[00:48:49] it doesn't use it. Like it never calls
[00:48:51] the tools. And it's like, yeah, that's
[00:48:54] it wasn't trained to do this and you can
[00:48:57] kind of sense, you know, like they have
[00:48:58] different philosophies in the model
[00:49:00] houses. I think Anthropic is from what I
[00:49:02] can tell, working a lot or training a
[00:49:05] lot towards using memory, like storing
[00:49:07] information. While not ChatGPT,
[00:49:09] obviously has its own Open AI. So, if
[00:49:11] you give it a memory thing, yeah, it
[00:49:13] might use this. But then you have the
[00:49:15] issue of, well, if I give it this other
[00:49:17] custom-made MCP that we built internally
[00:49:20] and our processes don't map to anything
[00:49:22] that Open AI and Anthropic have seen or
[00:49:24] trained for,
[00:49:26] it won't be used and you won't get good
[00:49:28] results. And super strange, right? Yeah,
[00:49:31] I wrote this article for the GPT-5
[00:49:33] release about
[00:49:35] models self-improving for coding. So, I
[00:49:37] basically asked GPT-5,
[00:49:40] "What are tools that would be useful to
[00:49:41] you to be a better software engineer?"
[00:49:43] It's like, "Well, you know." And give a
[00:49:45] list of like 10 tools. And I'm like,
[00:49:46] "Okay, implement them." Wrote all the
[00:49:48] tools. And then I asked it to do the
[00:49:51] same task I'd done before, but with
[00:49:52] those tools. And then it goes through
[00:49:54] the old task and I'm like, "Which of the
[00:49:56] tools did you use?" And it's like, "Oh,
[00:49:57] I didn't use any of them." And I'm like,
[00:49:59] "Why did you not?" It's like, "You know,
[00:50:00] to be honest, I don't really need the
[00:50:02] tools. I can just do this task, you
[00:50:04] know?" And And I think that's like a
[00:50:05] good metaphor just for like the trend of
[00:50:08] the models, which is like, "Hey, they're
[00:50:10] going to use less and less of this like
[00:50:12] custom-made tools to fix today's issue."
[00:50:16] I think the things that we can bet on,
[00:50:17] and I'm curious to hear your thoughts,
[00:50:19] is like they're always going to have
[00:50:20] some sort of like test runtime. Like, I
[00:50:22] don't think there's going to be a world
[00:50:24] in which the model is not going to run
[00:50:25] test and say, "I'm sure this is going to
[00:50:27] work." The other one is there's always
[00:50:29] going to be some sort of like
[00:50:31] infrastructure as code to then handle
[00:50:33] the deployment side. So, I think
[00:50:35] whenever there's going to be some
[00:50:37] runtime issue, they're going to need to
[00:50:39] understand where they're running, you
[00:50:40] know? So, I think like you can put them
[00:50:42] in a box.
[00:50:44] Having an actual Dockerfile and whatnot
[00:50:46] is helpful for them to explain what they
[00:50:48] have access to. What do you think are
[00:50:49] like other things that you don't expect
[00:50:51] the model to like have in the model that
[00:50:54] you want to still expose to it? So, you
[00:50:56] we can assume it's going to test, we can
[00:50:58] assume it's going to have some
[00:50:59] definition of its environment. Are there
[00:51:01] other things that come to mind?
[00:51:03] I think test is a big one and there's
[00:51:05] many different kinds of tests. So, we
[00:51:08] had sub-agents in Amp, you know, among
[00:51:11] the the first to come out with this
[00:51:12] conception of sub-agents, which is
[00:51:14] separate context window, separate cute
[00:51:16] more curated set of tools. And I think
[00:51:18] there's a lot of potential to take a
[00:51:20] tool like test. And right now you invoke
[00:51:22] it by the bash tool and you have some
[00:51:24] complex invocation. Too often it'll run
[00:51:27] all of your tests, which is noisy and it
[00:51:29] takes a long time. If you're in your
[00:51:31] editor and you've got something nice set
[00:51:32] up, you can hit like a hot key and then
[00:51:34] it'll only run the tests that you need,
[00:51:36] you know, at your cursor. So, giving the
[00:51:39] LLM a tool like that seems to have a lot
[00:51:41] of potential. And then that could even
[00:51:44] potentially be a smaller model,
[00:51:46] fine-tuned model for that task. It could
[00:51:48] be multiple based on what projects or
[00:51:50] stack you're using. And that
[00:51:54] could eliminate a lot of the confusion.
[00:51:56] Even with a good agent.md guidance about
[00:51:58] how to run tests, I still see with Amp,
[00:52:00] and I think, you know, we've we tried to
[00:52:02] make this really good. It only gets it
[00:52:04] right maybe 90, 95% of the time.
[00:52:06] Sometimes it'll run the wrong testing or
[00:52:08] won't escape it correctly. And I think
[00:52:09] we can eliminate that with a sub-agent.
[00:52:11] So, there's so much more potential to go
[00:52:13] deep in areas like that. And then for
[00:52:15] every language, it's a little bit
[00:52:16] different. So, handle all those cases.
[00:52:19] Do you feel like that will just be built
[00:52:21] by each company on their own, or do you
[00:52:23] think there's like a same default that
[00:52:25] you guys are going to build
[00:52:26] for that that is going to be effective
[00:52:28] for most most codebases and test
[00:52:30] structures? This is where scale helps,
[00:52:33] and we have a lot of scale, so you know,
[00:52:34] increasingly we're able to see in this
[00:52:37] framework for this, you know, go the
[00:52:40] standard go unit test uh package. That's
[00:52:42] easy. Uh V test in JavaScript. That's
[00:52:44] easy. And once you start getting into
[00:52:46] more of the long tail, then, you know,
[00:52:48] it might have to just fall back to a
[00:52:49] really good model. But I think that we
[00:52:51] could probably um make something that's
[00:52:53] optimized for some of these more popular
[00:52:55] unit testing frameworks. And it's a
[00:52:57] combination of deterministic stuff and
[00:52:59] non-deterministic stuff. Cuz right now
[00:53:01] in my VS Code, I can hit Apple T if I'm
[00:53:04] positioned in a test file inside of one
[00:53:06] of those test blocks, and it's only
[00:53:07] going to run that one. So, you know,
[00:53:09] even that is a benefit. And now I'm
[00:53:11] mostly bottlenecked by Playwright. Yeah,
[00:53:13] it just takes a long time, man. But the
[00:53:15] crazy thing is the vast majority of devs
[00:53:17] who are building web applications with
[00:53:19] coding agents do not have Playwright.
[00:53:21] And if they have it, it is set up in
[00:53:22] such a shitty way where it cannot really
[00:53:25] log into their app. They don't have any
[00:53:27] pattern for that. So, even something
[00:53:29] like that, that's another example of a
[00:53:30] sub-agent that's go and try this basic
[00:53:33] end-to-end testing flow described in
[00:53:34] natural language with the running
[00:53:36] application. And wouldn't it be great if
[00:53:38] they could also do it in parallel? So,
[00:53:39] you know, there's all these ways that
[00:53:40] you can improve. That's a great example.
[00:53:42] And I think touching on this, we have
[00:53:45] coding agents, they are productive, they
[00:53:47] add value. We cannot assume that
[00:53:49] everything around the agent in dev
[00:53:51] tooling or codebases will stay static.
[00:53:53] So, I think people are already adopting
[00:53:56] their codebase to be better used by
[00:53:58] agents, or they're adopting their
[00:54:00] tooling to be better used by agents. The
[00:54:02] more descriptive help text or whatever
[00:54:04] it is. So, I think
[00:54:06] I don't know, we should have a counter,
[00:54:08] but everything is changing. I don't
[00:54:09] know, I'm saying this again, but we
[00:54:11] cannot build right now with, "Oh, this
[00:54:13] is the tool that's going to stick
[00:54:15] around." Given that all of the codebases
[00:54:17] and all of the processes and all of the
[00:54:19] dev tools will stay the same. We have to
[00:54:21] assume that this stuff will change, too.
[00:54:23] And we have to stay nimble, so we have
[00:54:25] to make like um
[00:54:27] short bets or small bets and try and get
[00:54:29] us, you know, in small steps forward,
[00:54:31] but all always be reactive to this
[00:54:33] stuff. That, you know, if people
[00:54:35] Again,
[00:54:37] let's not use Basil again, but I think
[00:54:39] uh Playwright is a good thing where um
[00:54:42] the feedback loop is incredibly
[00:54:44] important to working with these agents.
[00:54:45] Like that the agent can see whether what
[00:54:47] it's doing is actually working. So, what
[00:54:49] we've seen people now do is, well,
[00:54:52] instead of having the client log and
[00:54:54] having the browser log and having the
[00:54:56] database log, let's have one unified
[00:54:58] log, because then it's easier for the
[00:54:59] agent to just look at this log and make
[00:55:01] sense of it. And then it turns out it
[00:55:03] doesn't have to be nicely formatted, it
[00:55:05] can be verbose, you can just have like
[00:55:07] JSON line outputs and whatnot, because
[00:55:09] the agent can understand it much better
[00:55:11] than a human can. And I think that's
[00:55:13] just this a little preview of
[00:55:16] more things that we will see. Where
[00:55:18] you're like, "Wait a second, this is not
[00:55:20] made for human consumption anymore. How
[00:55:23] can we optimize this for agentic
[00:55:24] consumption?" And then maybe the game
[00:55:26] changes. And there's some things that
[00:55:28] now we get, for example, in my Pytest
[00:55:31] suite, I have a knock to record HTTP
[00:55:34] calls. So, whenever you especially for
[00:55:36] inference, like you can't really mock
[00:55:37] you know, we do a classification, things
[00:55:39] like that, you just need to see what
[00:55:40] happens. Um and then we just save the
[00:55:43] whole interaction, and then the model
[00:55:45] can actually see what the API returned
[00:55:48] and like in much detail and like it can
[00:55:50] reference it back in the future. So,
[00:55:52] when you add a new feature, it can look
[00:55:54] at the test and it can see what the API
[00:55:56] usually returns. And it's like, "Oh,
[00:55:57] okay, it's going to have that key and
[00:56:00] like the content, things like that." I
[00:56:01] think there's more of that to be done. I
[00:56:04] think there was maybe also a time in
[00:56:06] which having console logs was like
[00:56:08] really bad. And I think there's maybe
[00:56:09] now going to be a console log that is
[00:56:12] like only funneling to like not the
[00:56:14] actual console in the browser, but like
[00:56:16] some way for like the agent to see all
[00:56:18] of the details of like everything that
[00:56:20] is happening. What I haven't figured out
[00:56:22] is like how do you instrument that?
[00:56:24] Because you cannot put a whole bunch of
[00:56:25] console logs that go somewhere else in
[00:56:27] the code, because then you're also
[00:56:28] polluting the context window of the
[00:56:30] model, right? So, you need some other
[00:56:32] way to do it. But I think, yeah, the
[00:56:34] more you're logging, the more the model
[00:56:36] can kind of like self-iterate,
[00:56:38] but And you just described like five
[00:56:40] approaches that seem absolutely
[00:56:42] worthwhile to go explore to improve how
[00:56:45] coding agents work. Let somebody do it.
[00:56:47] We can do some of it at Sourcegraph
[00:56:49] Lives, but we cannot do all of it, so
[00:56:51] somebody help. But again, like the world
[00:56:54] around us is also changing.
[00:56:56] José Valim, the creator of Elixir and,
[00:56:58] you know, contributor of Cockroach
[00:57:00] Rails, I can't remember the name, but
[00:57:01] basically they have a new framework
[00:57:03] tooling out that is Phoenix. Yeah, yeah,
[00:57:07] it's for Phoenix, right? But it's the
[00:57:08] the name of the I can't remember, but
[00:57:10] it's it's about well, what if you build
[00:57:12] a framework for an agent, too? What if
[00:57:15] the agent is integrated into the
[00:57:16] framework? So, that you can if the
[00:57:18] application fails to run, you can ask
[00:57:20] the agent that has access to all of the
[00:57:22] context. And
[00:57:24] that's going to be more and more, I
[00:57:26] think. Like a lot of
[00:57:28] you know, developers will build stuff
[00:57:30] because they're fed up with our copy and
[00:57:32] pasting stuff around. So, we're going to
[00:57:34] see this in developer tooling. Well, I
[00:57:36] mean, Rails was like one of the first
[00:57:39] frameworks that I know that in the error
[00:57:40] page, they had a CLI that you could like
[00:57:43] use the local context, you know? And I
[00:57:45] think like more of that. Like in Next,
[00:57:47] you have the copy to markdown button.
[00:57:51] Whenever you have an exception, you can
[00:57:52] copy to markdown, put it in there.
[00:57:55] Yeah, but I think there should And in
[00:57:56] their docs, too, you can like copy to
[00:57:57] markdown. It's the same thing. But then
[00:57:59] it's like you can only copy to markdown
[00:58:01] the whole page. And it's like, "Well,
[00:58:03] you know, maybe I only want to do this
[00:58:04] action." or like I want to do 1 2 3.
[00:58:07] Yeah, I don't know. I think that's why
[00:58:10] the Mentify's of the world, Stainless,
[00:58:12] all these companies that do kind of like
[00:58:13] API docs and API generation from docs
[00:58:15] are like getting a lot of interest. I
[00:58:17] think you'll get more of that, but it's
[00:58:20] hard to get people to move over, you
[00:58:22] know? I'm sure you see it with like some
[00:58:23] of the Sourcegraph customers. It's like,
[00:58:25] "How am I supposed to reinstrument this
[00:58:27] old codebase that is like 15 years old?"
[00:58:30] And like
[00:58:30] >> It's true, but what we have said is we
[00:58:33] especially are building Amp for the
[00:58:35] people that do want to move. And that's
[00:58:37] been so liberating. And I think that
[00:58:39] that's the great thing about what you're
[00:58:40] seeing in the market today, which is
[00:58:42] like you have all these companies that
[00:58:43] are like so AI first and like just use
[00:58:45] it and integrate. And then you go on
[00:58:47] Hacker News and it's like, "I've never
[00:58:49] got a single good result from AI." And
[00:58:50] I'm like, "Well, obviously that's not
[00:58:53] true." And like maybe the extreme The
[00:58:56] extreme is definitely true, though. I
[00:58:57] think to me that's kind of like the
[00:58:59] thing. It's like the people that are
[00:59:00] spending $100,000 a year on Amp with two
[00:59:04] people,
[00:59:05] obviously they're getting value. It's
[00:59:06] not like they love burning money.
[00:59:09] But the people that are negative,
[00:59:11] to me that's not always true, because
[00:59:12] it's easy to be negative and like it
[00:59:14] doesn't cost anything, right? To put a
[00:59:15] comment that is bad. And so,
[00:59:18] what's going to be the thing that forces
[00:59:21] the rest of the market to be
[00:59:23] "Whatever, man. I just get on Amp and
[00:59:26] like make that work."
[00:59:26] >> They just have to see this work once or
[00:59:29] twice. I think, you know, we've been in
[00:59:32] developer tooling for a long time with
[00:59:33] Sourcegraph.
[00:59:35] And it's always been hard for the last,
[00:59:39] say, 10 years to get a company to adopt
[00:59:42] a developer tool that does not
[00:59:44] immediately fit into their codebase
[00:59:46] because the codebase, that's the
[00:59:47] standard. Everything else has to adapt
[00:59:50] to our codebase and our processes and
[00:59:52] whatnot. What we're seeing now with
[00:59:54] agents is as soon as somebody has seen
[00:59:58] what it can do,
[00:59:59] they have such a multiplying effect or
[01:00:02] they bring so much value that people are
[01:00:04] willing to adopt the codebase for this.
[01:00:06] Like the first time in how many decades
[01:00:08] where people are like,
[01:00:10] "Maybe our codebase is wrong. Like maybe
[01:00:12] maybe we should change the way we
[01:00:13] develop code to make more use of this."
[01:00:15] So I think people have to see this and
[01:00:18] and and then
[01:00:20] the agents will pull them along or like
[01:00:21] the, you know, the value this this
[01:00:23] brings will pull it along.
[01:00:25] Yeah, I'm curious. So I was on the board
[01:00:27] of a company called Launchable, which
[01:00:29] was founded by Kohsuke Kawaguchi, who
[01:00:31] built uh Jenkins. And the idea behind
[01:00:34] Launchable was like, "Well, instead of
[01:00:35] running all of your tests, we'll use
[01:00:37] machine learning to figure out what
[01:00:39] tests are impacted by your PR and just
[01:00:41] run the small subset of them."
[01:00:42] >> Yeah.
[01:00:43] And I think like what we found then the
[01:00:44] company got bought by CloudBees, but it
[01:00:47] was like in a lot of companies who would
[01:00:49] go in there and they're like, "Oh, well,
[01:00:51] how can we trust it? Let's do a POC."
[01:00:53] And then you do the POC and it's like it
[01:00:54] works great for the subset. Well, you
[01:00:56] know, it worked for the subset, but like
[01:00:58] is it going to work for like the whole
[01:00:59] test suite? And then you do a whole
[01:01:00] process. And I think with coding it's
[01:01:02] like for some companies it's like they
[01:01:04] see it work on one task and they're
[01:01:06] like, "It's worth trying on every task."
[01:01:08] And then there's another subset of
[01:01:10] companies that are like, "Well, you
[01:01:12] know, it works a little bit on the front
[01:01:13] end, but it doesn't work on like my Java
[01:01:15] service back there, so I'm not going to
[01:01:17] use it at all." I haven't quite figured
[01:01:19] out what's going to be the market
[01:01:20] pressure to make those people move
[01:01:22] along, you know? Uh but it's like you
[01:01:24] said, it's like, you know, for some
[01:01:26] people it needs to work once. Maybe for
[01:01:27] some other people it's got to be one
[01:01:29] task that I always feel. My one task
[01:01:32] that I always use, we have built this
[01:01:33] kernel dream product, which is like an
[01:01:35] MCP playground and tester.
[01:01:37] And I have a task, which is like add
[01:01:39] yellow mode, which is, you know, let a
[01:01:41] user toggle between auto running, which
[01:01:44] sounds easy, but it's actually quite
[01:01:45] hard without LLMs work to like stop
[01:01:47] inference to approve a tool and then run
[01:01:49] it again.
[01:01:50] And every model was failing until GPT-5
[01:01:53] Codex and Codex CLI was like the first
[01:01:55] time I got it in like one shot. It made
[01:01:57] the whole thing.
[01:01:58] And I wonder if everybody should build
[01:02:01] some sort of like four or five tasks
[01:02:03] that are like, "Okay, if you can
[01:02:05] actually do this end-to-end, then I'm
[01:02:06] like, I'm in."
[01:02:07] But I feel like people are still in
[01:02:08] denial of like that's going to work, you
[01:02:10] know? So they don't want to have Yeah,
[01:02:12] they don't want to have the conversation
[01:02:13] at all.
[01:02:14] If you look at that early adopter, the,
[01:02:17] you know, laggards, that chart of
[01:02:18] technology adoption,
[01:02:20] there's a reason why the early adopters
[01:02:22] are the tiny little start of the curve,
[01:02:24] you know, 3%. And it feels like so many
[01:02:26] of these arguments are people saying,
[01:02:29] "Well, what if we made a product that
[01:02:30] was for the early adopters, but somehow
[01:02:32] made the laggards also adopt it early?
[01:02:35] Why aren't we going after that big
[01:02:36] market? It's the vast majority of the
[01:02:38] area under the curve." And it's like,
[01:02:40] "Because they fundamentally
[01:02:42] do not want what you are building. And
[01:02:45] maybe they should. Maybe they're going
[01:02:47] to realize that, but you're not going to
[01:02:48] make them realize it. Or if you waste
[01:02:51] your time trying to make them realize
[01:02:52] it, you're going to be trounced by
[01:02:55] hopefully people like us that are only
[01:02:56] focused on the early adopters. It's a
[01:02:58] total mindset shift. Yeah.
[01:03:01] >> And if you are just focused on building
[01:03:02] something for early adopters and you
[01:03:04] literally do not care and you set up
[01:03:05] your entire business and product to not
[01:03:07] care, not have to care
[01:03:09] about the people that are laggards, you
[01:03:11] can do a much better job. And that's
[01:03:12] what we're experiencing now. Let's talk
[01:03:14] about the outer loop because I think
[01:03:15] that's kind of like the next step, at
[01:03:17] least for me. It's like I think the
[01:03:19] coding agents themselves degrade on a
[01:03:21] task-by-task basis, but then there's
[01:03:22] like, you know, PR review, which GitHub
[01:03:26] is like so slow and so clunky and it's
[01:03:28] so like order by file versus like I
[01:03:30] think we should get to a world which is
[01:03:32] like more semantic. It's like, "Hey, you
[01:03:34] know, these are really like the 50 lines
[01:03:36] of code that matter to look at and
[01:03:38] everything else is like Yeah.
[01:03:40] >> it's fine. You can like skim through
[01:03:41] it." How do you think about that when
[01:03:43] you want to when especially when you
[01:03:45] think about async agents, you know,
[01:03:47] there should be an easy way to spin them
[01:03:48] up, which I think it's fairly clear. But
[01:03:52] then I'm not sure if there's yet an easy
[01:03:53] way to catch up on what they're doing,
[01:03:55] you know? What I found when I used
[01:03:56] Conductor like VIP Kanban, it's like I
[01:03:59] spin out five six of them.
[01:04:00] And I'm working on them and I kind of
[01:04:02] jump between them and then my wife is
[01:04:04] like, "Let's have dinner." And then we
[01:04:05] have dinner and I go back and I'm like,
[01:04:06] "What the is going on here again?"
[01:04:08] It's like, "Which one is doing what?"
[01:04:09] And it's like it's hard to like just at
[01:04:11] a high level see what each of them is
[01:04:13] working on, where it's getting blocked.
[01:04:15] Have you guys seen anything that works
[01:04:17] there? Have you been thinking about
[01:04:18] building any tools in that space? I
[01:04:21] agree, right? I I feel this too. I
[01:04:23] think, you know, with our internal
[01:04:26] experiments, I think, you know, for
[01:04:28] example, this idea of, "Well, I just
[01:04:30] spun 10 agents and they work and I
[01:04:33] control them." I think TV is doing this
[01:04:35] and he has like a whole workflow around
[01:04:37] this and it seems to work for him. But
[01:04:39] for me, I guess I'm a one-tasker in my
[01:04:41] mind. Like I need to I can't do this.
[01:04:43] Like I cannot control five agents at the
[01:04:45] same time. And then when I do it
[01:04:47] asynchronously, I realize that I need to
[01:04:50] be really strict about how I review what
[01:04:52] they've done and that I also don't jump
[01:04:54] between them. And then it's also, you
[01:04:57] know, making sure that you don't miss
[01:04:59] anything. Like I spun up so many agents
[01:05:01] and then haven't checked back on them
[01:05:03] because I forgot that they actually run.
[01:05:05] So that's something you need to build in
[01:05:06] the product. But yeah, I don't think
[01:05:08] it's figured out, you know? Like it's a
[01:05:10] there's so much to do still. Yeah, it's
[01:05:13] wide open. We think of it right now like
[01:05:16] if you're playing chess, you can play
[01:05:17] one board at a time or the people in New
[01:05:20] York City's Central Park who play
[01:05:21] against 10 different tables at once and
[01:05:23] they go and they sit down in front of a
[01:05:24] table, they get oriented, they make a
[01:05:26] move and then they go.
[01:05:28] And that's what we're trying to build.
[01:05:30] And um it turns out even if you've got a
[01:05:32] coding agent running in your editor in
[01:05:34] the CLI and then it makes a big diff,
[01:05:35] you've still got to understand it. And
[01:05:37] it just becomes even more important when
[01:05:38] you have a lot running in the
[01:05:39] background.
[01:05:39] >> Yeah. So we want to make it easier to
[01:05:42] orient yourself with what's the change.
[01:05:44] And there's a lot of stuff that is not
[01:05:45] in the realm of coding agents that would
[01:05:46] help. Like having a deployed preview
[01:05:48] consistently available so you could just
[01:05:50] click and click through it. And then we
[01:05:52] want to make it faster you to make a
[01:05:54] move and then, you know, get on with
[01:05:56] your next thing. Yeah, or, you know,
[01:05:58] just UI so at a glance you can see, I
[01:06:02] don't know what it is yet, but at the
[01:06:04] first console you can see what the agent
[01:06:05] actually did without having to go and
[01:06:07] read through like the emoji summary,
[01:06:10] finally we have it and blah blah blah,
[01:06:12] stuff like this. But to come back to
[01:06:14] like your question of like the outer
[01:06:16] loop, I think, and, you know, if Beyang
[01:06:19] was here, he would talk for a long time
[01:06:20] about this because he's passionate about
[01:06:22] it that
[01:06:23] the inner loop has changed a lot in
[01:06:25] that, you know, um write test review and
[01:06:28] whatnot, it's that you now review a lot
[01:06:30] more code. And what effects does this
[01:06:33] have? For me, for example, we don't do
[01:06:35] any formal code reviews on the AMP team,
[01:06:37] but it doesn't mean that code isn't
[01:06:38] reviewed because we use, you know, AMP
[01:06:40] to write 80 to 90% of our codebase. But
[01:06:44] that means everybody should review the
[01:06:45] code that the agent wrote. So it's
[01:06:47] reviewed by at least one person, right?
[01:06:49] And
[01:06:51] that's not reflected at all in GitHub
[01:06:53] yet. Like GitHub is still based on this
[01:06:54] other mode where you tag somebody. But
[01:06:56] then it's like, "Well, I actually went
[01:06:58] through two agents to produce this code
[01:06:59] and I reviewed it three times. Do I now
[01:07:02] tag five other people?" And right now
[01:07:05] we're stuck in this mode where people
[01:07:06] would say yes, but I don't think it's
[01:07:07] going to hold that much longer. Yeah.
[01:07:09] The other thing I noticed is like merge
[01:07:11] conflicts. Like I used to have very
[01:07:13] little because it's like, you know, I
[01:07:15] know what I'm working on and if I'm
[01:07:16] doing multiple tasks, I know how this is
[01:07:18] going to impact that and I'm going to
[01:07:19] build towards it versus the agents,
[01:07:21] especially when you run them in
[01:07:22] parallel, it's like they just start to
[01:07:24] change whatever is convenient to them
[01:07:26] and then it's like across them, they're
[01:07:28] like changing the same thing. And so
[01:07:30] one thing we've been thinking about
[01:07:32] building is like, you know, how do you
[01:07:33] do better cross-agent orchestration of
[01:07:35] like these changes. So I built for like
[01:07:38] the GPT-5 post is like task manager
[01:07:40] that's like CLI-first and basically any
[01:07:43] agent can like append what files they're
[01:07:45] touching and then they can read what
[01:07:47] files other agents are touching and see
[01:07:49] what those diffs are to like implement
[01:07:50] them back. But then I think the question
[01:07:52] is like, "Well, maybe what they're doing
[01:07:54] now doesn't end up being the final thing
[01:07:56] and now you're wasting all these tokens
[01:07:58] like reviewing all these changes before
[01:07:59] you review. I think at this point it's
[01:08:01] like is Git
[01:08:03] well designed for this future world that
[01:08:05] we're going into? You know, there's like
[01:08:06] I think everything is back on the table.
[01:08:08] I think maybe, you know, five years ago
[01:08:09] it was like,
[01:08:10] you know, there was like a couple of YC
[01:08:12] companies doing, "Oh, we're like a new
[01:08:13] version control system." And I'm like,
[01:08:14] "Look, man, yeah, yeah, I'm not I'm not
[01:08:16] really interested in listening at at
[01:08:18] this stage." And same with programming
[01:08:20] languages. It's like, you know, when um
[01:08:22] Chris Lattner even started working on
[01:08:24] Mojo, it's like, "Okay, because of AI,
[01:08:27] I understand why you need to build a
[01:08:29] superset of Python." And I think now
[01:08:31] with agents it's like maybe clear why
[01:08:33] TypeScript should win because of type
[01:08:35] checking is like very good for the model
[01:08:37] to like do self-improvement. What are
[01:08:38] like the other things?
[01:08:40] I think the interesting flex here is
[01:08:42] people assume that
[01:08:43] coding agents
[01:08:45] need to meet the bar of writing the
[01:08:47] exact same kinds of software to the
[01:08:49] exact same standard.
[01:08:51] And that is not necessarily an
[01:08:53] assumption that end users, consumers
[01:08:55] will apply. If they have software that's
[01:08:57] much faster, cheaper, much more
[01:08:59] personalized, if they can conjure it up
[01:09:01] on their own, then yeah, you're going to
[01:09:02] tolerate if the loading state of this
[01:09:04] thing doesn't quite, you know, work
[01:09:06] correctly. So changing user demands and
[01:09:09] standards is an interesting thing that
[01:09:11] you can flex here. Yeah, what do you
[01:09:13] think about that? You know, we've been
[01:09:14] thinking about enterprise software
[01:09:16] moving more towards user-generated
[01:09:18] content, which is like, "Hey, you know,
[01:09:20] expenses are like a great example of
[01:09:22] like, you know, all these expense tools.
[01:09:23] Why why there's so many companies when
[01:09:25] like the core action that you're doing
[01:09:28] is like take one line of expense and tag
[01:09:31] it with different things. But then you
[01:09:33] have to like set up all these categories
[01:09:34] and whatnot versus like
[01:09:36] just generate it for my company and for
[01:09:38] like each team separately because they
[01:09:40] have different things and it's like to
[01:09:42] me that feels like more and more of that
[01:09:44] will become true and then the real value
[01:09:46] is like, you know, what's kind of like
[01:09:47] the underlying data store or like data
[01:09:49] stores that like you're feeding into
[01:09:51] this. And I know some enterprises are
[01:09:54] building already built kind of like
[01:09:55] internal like lovable basically where
[01:09:58] each employee can kind of like create a
[01:10:00] simple tool and then they connect the
[01:10:02] tool to like internal data stores and
[01:10:04] they might be the only users of it.
[01:10:06] There's nobody else that does it. And
[01:10:08] I'm curious how you guys think about I
[01:10:09] know that bold that new for example now
[01:10:11] has clock code integration.
[01:10:13] Like where do you see the line move
[01:10:16] between like
[01:10:17] software engineers build software and
[01:10:19] like obviously Amp is like a great tool
[01:10:21] for that versus going more upstream
[01:10:24] which is like any non-technical people
[01:10:26] can also plug into the code and like
[01:10:28] build things on top of it. They feel
[01:10:29] they feels in a way very different but
[01:10:32] also very similar in like the challenges
[01:10:34] that you need to solve for.
[01:10:36] I I think this idea of non-technical is
[01:10:39] the wrong way to look at it. There're
[01:10:40] always going to be people that are good
[01:10:41] at unambiguously specifying what they
[01:10:44] want out of a computer and we've had
[01:10:47] non-coders including one of our board
[01:10:48] members who built something with Amp
[01:10:51] that replaced like 250k a year piece of
[01:10:54] software that he used for a lot of their
[01:10:57] internal fund tracking.
[01:10:59] And he maybe took one computer science
[01:11:01] class. He hasn't really coded but he's a
[01:11:03] really smart guy and he knows how to
[01:11:04] unambiguously specify what he wants to
[01:11:07] his CEOs certainly and now to a computer
[01:11:09] as well.
[01:11:10] So if you can get people like that a
[01:11:12] tool that's really powerful, they don't
[01:11:14] think of themselves as a non-technical
[01:11:16] person. I think that's that's just such
[01:11:18] a a bad mindset. So we want to build for
[01:11:20] the power user and if that person has
[01:11:22] not been a coder but they can pick it up
[01:11:24] really quickly,
[01:11:25] that's great. Again, we're completely
[01:11:27] focused on the people that know how to
[01:11:29] and want to get the very best out of
[01:11:31] this and that want the agent to win that
[01:11:33] aren't trying to be like, oh, you know,
[01:11:35] nah-nah, hey, it didn't do this thing.
[01:11:38] Tell me when it does. Yeah, we had this
[01:11:40] at the at the start a lot with people.
[01:11:42] Whenever you have like an AI tool, I
[01:11:44] think there's a natural
[01:11:46] uh tendency by engineers to get it in a
[01:11:50] gotcha moment. You know, like, oh, yeah,
[01:11:51] I asked it this and it didn't know this.
[01:11:53] And it's like, are you trying to get
[01:11:55] something out of it or you trying to get
[01:11:57] it to fail? And you know, it's not it's
[01:11:59] not worthwhile to build for somebody who
[01:12:01] doesn't want to fail. Yeah, and you
[01:12:03] actually if you fast forward how the
[01:12:05] world is going, you're seeing already
[01:12:07] over the last few years companies have
[01:12:08] really slowed down their growth in
[01:12:10] engineering head count. This is a global
[01:12:13] phenomenon. You're seeing engineers like
[01:12:16] here on the Amp team and other companies
[01:12:19] that are using agents really heavily,
[01:12:20] they're cutting out the middleman.
[01:12:22] They're putting the people who are
[01:12:23] building the product closer to the
[01:12:25] customer because you can go and hear an
[01:12:26] idea from a customer literally in the
[01:12:28] meeting you can kick off an agent to go
[01:12:29] and build it and then you have a first
[01:12:31] draft of it. So
[01:12:32] overall, the person who's using the
[01:12:34] coding agent is getting so much closer
[01:12:35] to the problem. They're also going to
[01:12:37] share more in the rewards from solving
[01:12:39] the problem because without needing to
[01:12:40] share the profits with everyone else,
[01:12:42] there's naturally, you know, more to go
[01:12:44] to them.
[01:12:45] So I think if you fast forward this,
[01:12:47] it's not that the firm or big companies
[01:12:49] are going to completely go away, but
[01:12:51] you're going to have people that have an
[01:12:53] incredible vision in their head and that
[01:12:54] are so close to the problem and have an
[01:12:56] incredible incentive to go solve that
[01:12:57] problem. Equip them with a coding agent.
[01:12:59] If you can build a coding agent that
[01:13:01] those people want, that is way better
[01:13:04] and more valuable and you're creating
[01:13:05] more value. You're allowing more new
[01:13:07] things be created in the world than if
[01:13:08] you were building a coding agent that is
[01:13:10] for the median developer that makes them
[01:13:12] 30% better. So that's who we're
[01:13:14] targeting and I don't think that that
[01:13:16] will necessarily look like vibe coding.
[01:13:18] Vibe coding is this
[01:13:20] really unproductive thing to discuss cuz
[01:13:23] everyone has a different definition of
[01:13:24] it and too often it's having the agent
[01:13:27] write code with with poor feedback loops
[01:13:29] and poor quality control and I don't
[01:13:32] think that that's valuable. But it's
[01:13:34] giving that person the ability to build
[01:13:35] something truly great really fast when
[01:13:37] they're so incentivized and they will
[01:13:38] have every desire for it to work well.
[01:13:40] Yeah. And I know we're getting close to
[01:13:42] time but
[01:13:43] a couple things I want to touch on. So
[01:13:45] Thorsten, I was reading through your
[01:13:46] blog. You left Sourcegraph a year and a
[01:13:48] half ago and then you joined back. Good
[01:13:51] job, Quinn, bringing him in home. Uh
[01:13:53] thank you, Thorsten.
[01:13:55] But when you wrote a post about leaving,
[01:13:57] one thing you wrote is that when you
[01:13:58] first joined in 2019, one thing that
[01:14:00] Quinn told you is like, hey, you know,
[01:14:02] Sourcegraph is your playground.
[01:14:04] And you have skills and talents and I
[01:14:07] want you to use those skills to like,
[01:14:09] you know, move the company forward. How
[01:14:10] do you take this idea of like the power
[01:14:12] user getting close to the customer
[01:14:14] and like how people are going to build
[01:14:16] teams overall? Like there used to be
[01:14:18] engineering and product like you were
[01:14:20] saying the triangle. That's kind of
[01:14:22] going away.
[01:14:23] What are like the type of people that
[01:14:25] you think are going to be most
[01:14:27] successful? Like how should people think
[01:14:28] about structuring teams? It's like
[01:14:30] obviously you're doing this with Amp in
[01:14:31] a way, right? You're like building a
[01:14:33] sub-team and sub-product within a larger
[01:14:34] company. Any tips that you have for
[01:14:36] other founders and executives?
[01:14:39] Thorsten is incredible and Amp would not
[01:14:41] exist in any way without him. He has a
[01:14:45] strong internal constitution of how he
[01:14:47] uses it and what's real and what's not
[01:14:49] and it's so easy to get carried away
[01:14:50] with the hype, the possibilities,
[01:14:54] especially when you see other people, a
[01:14:56] lot of other smart people who are
[01:14:58] getting carried away by it. Thorsten has
[01:14:59] this incredible ability to stay
[01:15:01] grounded. And that with everything
[01:15:05] changing so fast with it being such a
[01:15:07] hype cycle right now, that's really
[01:15:08] important. Also,
[01:15:11] you know, just these first principles
[01:15:12] thinking like how we've completely
[01:15:14] rethought how we build everything in Amp
[01:15:16] based on how should we actually do it
[01:15:17] rather than what has come before.
[01:15:19] Thorsten is the rare person who's been
[01:15:21] at
[01:15:22] bigger companies who's seen how
[01:15:24] Sourcegraph, how we build enterprise
[01:15:26] software and, you know, not the Google
[01:15:28] way but in a different way and has taken
[01:15:32] the parts of it that work and not the
[01:15:34] parts that don't. So all of that
[01:15:36] combined with someone who's an
[01:15:37] incredible engineer, incredible writer,
[01:15:38] communicator, that's a really powerful
[01:15:41] combination. So find those people and
[01:15:44] then
[01:15:45] what I said when he rejoined is he is
[01:15:47] the dictator. That made him feel really
[01:15:49] uncomfortable as you can see. I hope you
[01:15:51] cut to his face.
[01:15:54] But that's that's exactly what you have
[01:15:57] to do and had just put so much trust in
[01:16:00] people like that and that also shows
[01:16:02] everyone else in the company that they
[01:16:04] can do crazy stuff, that they can, you
[01:16:06] know, go way beyond, they can take it to
[01:16:08] the extreme, they can make mistakes and
[01:16:10] that's still okay. Because we're not
[01:16:13] trying to build something that's going
[01:16:14] to, you know, go really big in the
[01:16:16] current state. Amp is growing incredibly
[01:16:18] fast but the most important thing is
[01:16:19] we're building the
[01:16:21] the coding agent god, that thing in the
[01:16:23] future and that's something that we're
[01:16:24] all in search of.
[01:16:26] So in it none of the mistakes, none of
[01:16:28] the successes in the month to month
[01:16:30] timeframe really matter. It's all about
[01:16:32] getting ourselves in the right
[01:16:32] trajectory and you got to do crazy
[01:16:34] stuff. So equipping Thorsten to do crazy
[01:16:38] stuff and to take the ideas that he has
[01:16:40] and make them scale up with all the
[01:16:43] the reach that Sourcegraph has, that's
[01:16:46] been my goal. On the first principle
[01:16:48] thinking,
[01:16:49] how do you think about that? And so
[01:16:52] there's the world of evals and there's
[01:16:53] the world of vibes. Right. Yeah. How do
[01:16:56] you approach it? Like
[01:16:58] how do you look at the product and
[01:16:59] you're like, okay, this is good, this is
[01:17:01] bad, this is what we need to improve. Is
[01:17:03] there something formal that you guys use
[01:17:05] internally or is it mostly you as the
[01:17:07] dictator
[01:17:09] uh directly?
[01:17:10] Two-part answer. I think the first part
[01:17:13] is to also answer the other question a
[01:17:15] little bit is
[01:17:16] what I've seen
[01:17:18] become more important or the shift I've
[01:17:20] seen is that,
[01:17:22] you know, I said the triangle
[01:17:24] of the PM, designer, engineer. I think
[01:17:27] as an engineer or any of the three,
[01:17:30] you now need to know a lot more about
[01:17:32] the other parts.
[01:17:36] anymore who types out a spec or turns a
[01:17:39] product PRD into code. I think you need
[01:17:42] to be aware of business, you need to be
[01:17:44] aware of product, you need to know and
[01:17:47] have some taste for software. Otherwise,
[01:17:50] I think the value of your work will
[01:17:52] diminish over time because the pure
[01:17:54] typing out of code for most of the code,
[01:17:57] you know, exceptions being a John
[01:17:59] Carmack and, you know, whatever. For
[01:18:00] most of the code, I think the value will
[01:18:02] diminish. And we've already seen it's
[01:18:04] like compare GitHub contribution chart
[01:18:07] today, it's value to say 2 years ago,
[01:18:09] right? And
[01:18:11] you know, to come back to the the second
[01:18:13] part like vibes and, you know, whatnot.
[01:18:16] I think we don't have any set evals. We
[01:18:19] don't and this was controversial up
[01:18:21] until a week ago, I think, when I I
[01:18:24] think Boris from or 2 weeks ago from
[01:18:26] Anthropic said they don't have evals for
[01:18:27] the coding agent, too. But um we don't
[01:18:30] and we haven't had them. I've built
[01:18:32] evals before. I fine-tuned models
[01:18:34] before. I know that they're good. I love
[01:18:36] evals. I was addicted to LLM as a judge.
[01:18:38] I wrote about LLM as a judge. But for a
[01:18:41] coding agent who's supposed to work in
[01:18:43] uh many different codebases, who's
[01:18:45] supposed to work with many different
[01:18:46] types of prompt, who's supposed to work
[01:18:47] with many different type of tasks,
[01:18:49] it's a time investment that we cannot
[01:18:52] afford with everything changing and
[01:18:54] having to stay fast. And if you ship 20
[01:18:57] times a day, you will get a lot of good
[01:19:00] feedback. I
[01:19:01] I swear to you I could tune my system
[01:19:03] prompt a little bit now
[01:19:05] and then I would say by this evening
[01:19:07] people on our team would go,
[01:19:09] why does it call this tool so often?
[01:19:11] Like what's going on? What did we ship?
[01:19:13] And that's incredibly valuable feedback
[01:19:15] and that's incredibly valuable, you
[01:19:17] know, when people talk with the product
[01:19:18] and use it all day. And
[01:19:21] how do I make these calls? I don't know.
[01:19:23] Like I think it's experience of like
[01:19:26] I think about software a lot. I love
[01:19:29] using software. I I listen to a lot of
[01:19:31] business podcasts. I read a lot about
[01:19:33] business. I listen to a lot of software
[01:19:34] podcasts. I read a lot about software.
[01:19:37] And then I try to project like what does
[01:19:40] the business need? How can we get growth
[01:19:42] to 10x? How can we get our users to 10x?
[01:19:45] How can I use my engineering
[01:19:47] capabilities to serve as a function of
[01:19:49] the business to reach those goals? How
[01:19:51] can I organize the team or get the team
[01:19:54] to help me reach those goals or together
[01:19:56] reach those goals? And
[01:19:58] you know, it's hard to explain, but it's
[01:19:59] like I I feel like in this year truly
[01:20:01] here at Software like everything I
[01:20:03] learned over the last say 15 years of my
[01:20:06] career is is coming together in the
[01:20:09] sense that
[01:20:10] all of the hours spent listening to the
[01:20:12] acquired podcast to help me as much as,
[01:20:16] you know, reading Hacker News for how
[01:20:18] many hundred hours and writing code for
[01:20:19] how many thousand hours, you know. Um
[01:20:22] and with code being now this tool that
[01:20:25] you can wield much easy or much faster
[01:20:28] or much more often,
[01:20:29] I think it's become much more important
[01:20:31] to how do you want to wield it and when
[01:20:33] and for what reason?
[01:20:35] I think the hard to explain is a great
[01:20:37] explanation why, you know, you just
[01:20:39] cannot one shot create these things
[01:20:41] because there's a lot of, you know,
[01:20:43] implicit preference. Awesome guys.
[01:20:45] Anything to wrap, call to actions, are
[01:20:47] you hiring? Like uh
[01:20:50] Who should reach out to you? Requests
[01:20:51] for startups? What should people build
[01:20:53] that's going to be helpful to you guys?
[01:20:55] I mean, all of the above. I don't know.
[01:20:58] Um yeah, I don't know. I don't know. Um
[01:21:00] we always interested in talking to
[01:21:02] fellow engineers who are interested in
[01:21:04] genetic programming, figuring new stuff
[01:21:06] out. We want to hear from them like what
[01:21:08] works and doesn't work. We always
[01:21:09] willing to hire people with exceptional
[01:21:11] talents who are
[01:21:13] fully in this and realize that, you
[01:21:15] know, programming's changing a lot and
[01:21:18] I don't know. What else? If you want to
[01:21:22] come on this journey with us and see
[01:21:24] where coding agents are going, then come
[01:21:27] along.
[01:21:28] Yeah, use amp. Send us your feedback.
[01:21:31] And we are just so excited. We feel like
[01:21:35] kids in a candy shop.
[01:21:37] >> Yeah, that's true.
[01:21:38] Just that we get to go build the future
[01:21:39] of coding. Feels like the final boss.
[01:21:42] Yeah.
[01:21:43] Nice. Thank you guys for coming on. This
[01:21:44] was fun. Thank you.
