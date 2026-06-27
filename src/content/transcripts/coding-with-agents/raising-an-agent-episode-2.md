---
title: "No Token Limits"
resourceId: 1
summarySlug: "coding-with-agents/raising-an-agent-episode-2"
sourceUrl: "https://www.youtube.com/watch?v=4N814ziAn4o"
videoId: "4N814ziAn4o"
capturedAt: "2026-06-27T15:02:31.421Z"
series: "raising-an-agent"
episode: 2
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 1745
---

## Transcript

[00:00:00] A lot of that stuff would break if you
[00:00:02] optimize for number of tokens. And
[00:00:04] >> yeah.
[00:00:05] >> Yeah.
[00:00:05] >> And if you're trying to satisfy a flat
[00:00:07] rate pricing business where you want to
[00:00:11] cater to a bunch of people building
[00:00:12] emoji games on the weekend and to people
[00:00:15] that are professional software
[00:00:18] developers who are some of the most
[00:00:19] productive people on the planet, that's
[00:00:21] really hard. That's like if you're Apple
[00:00:23] and you want to also, you know, have the
[00:00:26] $19 Huawei phone. [music]
[00:00:35] Welcome to episode two of Raising an
[00:00:37] Agent. This is also week two uh in that
[00:00:40] we're recording this. There's already so
[00:00:42] much more to talk about than last week.
[00:00:44] With me again, Quinn, our CEO. Hi,
[00:00:46] Quinn.
[00:00:47] >> Hey, Thorston. How's it How's all the
[00:00:49] hacking been going?
[00:00:52] >> It's going pretty well. Like, it's I
[00:00:54] just sent somebody a DM saying it's
[00:00:57] addicting. It's I don't know what it is,
[00:01:00] whether it's this you can give into your
[00:01:02] distractions or something while this
[00:01:04] thing is running. But I think the main
[00:01:07] thing that makes it so addicting is I
[00:01:09] don't know how it is for everybody else,
[00:01:11] but for me, I kind of have to get myself
[00:01:14] into some state of mind when I work on a
[00:01:16] feature. And it's this I I heard
[00:01:18] somebody say this a while back that
[00:01:20] senior engineers have to talk themselves
[00:01:22] into coding some things. And I like to
[00:01:26] think of it as that little shuffle that
[00:01:28] the break dancers do before they do the
[00:01:30] dance. Like you have to get into the
[00:01:31] move, the rhythm. And um with like the
[00:01:34] the prototype as we call it, I skip all
[00:01:38] of this because I just start writing a
[00:01:40] wish list in the text box and send it
[00:01:43] off and then it does stuff for me
[00:01:46] >> and it feels
[00:01:48] >> like there's no barrier to entry because
[00:01:49] I personally would rather prefer
[00:01:53] >> it writing some wrong code that I then
[00:01:55] go in and fix versus me having a blank
[00:01:58] page that I have to draw something on.
[00:02:00] So
[00:02:01] >> yeah,
[00:02:02] >> that's that is addicting.
[00:02:04] >> And you know how when you're coding and
[00:02:05] someone comes in and interrupts you, it
[00:02:07] [ __ ] your flow. So when you message me
[00:02:10] and you're like, "Hey, Quinn, do you
[00:02:12] want to record the podcast?" I was in
[00:02:13] flow. And we'll see.
[00:02:16] >> Yeah. No, that Hey, this is worth it.
[00:02:19] But I have like a halftyped out prompt
[00:02:21] and I'm probably going to be able to
[00:02:22] pick it up a lot faster than if it was
[00:02:24] like all these code files and tabs and
[00:02:26] whatever. But we'll see. You got to wait
[00:02:27] till the next episode to find out.
[00:02:29] >> Yeah.
[00:02:29] >> So, all right. That's all well and good.
[00:02:32] Where is it failing for you right now?
[00:02:34] >> Where is it failing? That's a yesterday
[00:02:37] what I tried. Okay, so sorry. Let taking
[00:02:40] a step back. Where is it failing? I
[00:02:41] think let me order my thoughts here.
[00:02:44] It's failing for me at certain things
[00:02:47] where you need some
[00:02:50] architectural sense of how the whole
[00:02:52] thing should work. Like it's fantastic
[00:02:55] when you use a swelt component as we
[00:02:58] have where you have a single file where
[00:03:00] there's the CSS and there's like the
[00:03:02] TypeScript and there's the I don't know
[00:03:04] if it's called JSX or something but the
[00:03:06] HTML if it's all one file and you have
[00:03:09] maybe a few other related components and
[00:03:12] all of the changes are local and you
[00:03:14] pointed at this and you say make this
[00:03:16] look nicer and you put a screenshot in
[00:03:18] and I did this yesterday a bunch of
[00:03:19] times and it's addicting because
[00:03:21] suddenly I can do front end and I only
[00:03:23] have to put in screenshots with like an
[00:03:24] arrow that says this looks bad. And but
[00:03:28] then the other thing I tried was to
[00:03:30] create a command that would allow you to
[00:03:33] take the current selection of the editor
[00:03:35] and put it in the text prompt in the
[00:03:37] prompt editor. And as you can imagine
[00:03:39] for that you kind of need the prompt
[00:03:42] editor is not something that's exposed
[00:03:44] at a high level. It's an HTML element I
[00:03:47] guess right? You need to be able to talk
[00:03:50] to the extension from the editor or from
[00:03:53] the I don't know and basically say
[00:03:54] what's the current active editor and
[00:03:56] then add something to this.
[00:03:58] >> Yeah.
[00:03:58] >> And
[00:04:00] VS Code API the package.json file the
[00:04:04] like web view API that we have. Yeah.
[00:04:07] It's so many different layers.
[00:04:08] >> It's Yeah. And I'm not I'm not there to
[00:04:11] guide it. Like I'm not a big VS Code
[00:04:13] extension developer yet. So I'm like how
[00:04:15] would I do this? So this was exploration
[00:04:18] and a lot of other things. And I told it
[00:04:20] to do this and it went and did stuff and
[00:04:24] then I saw in the diff I saw it, you
[00:04:26] know, do the document query selector
[00:04:29] stuff to find the editor. I'm like, "No,
[00:04:31] no, no, no. That's probably not how you
[00:04:32] should do it."
[00:04:33] >> Yeah. So what I did was I then you know
[00:04:37] pulled the eject handle and I said okay
[00:04:42] everything you learned so far everything
[00:04:44] that I told you to do everything you did
[00:04:48] and you would now do differently put
[00:04:50] this in a single markdown file put this
[00:04:51] in a task.md file and you know name is
[00:04:55] whatever debatable put all of this in
[00:04:58] and then it wrote all of it the
[00:05:00] information it had all of the things it
[00:05:02] learned in the conversation in this and
[00:05:04] then it summarized correctly
[00:05:06] a you know after editing the file it
[00:05:08] summarized correctly and it said we
[00:05:10] should probably find a better way to
[00:05:12] find the active editor like we should
[00:05:14] have a proper API to to you know find
[00:05:16] out which one is active and then I said
[00:05:19] please also put this in so then I
[00:05:22] started a new agent
[00:05:24] and I said somebody else worked on a
[00:05:27] problem and they wrote up everything
[00:05:30] they did in task.md please look at task
[00:05:32] ask.m MD and also run git diff main
[00:05:35] because I was on a branch and look at
[00:05:37] the code they wrote and tell me what you
[00:05:39] would do differently and it came back
[00:05:41] with seven points and it said I would
[00:05:44] simplify this I would create an API for
[00:05:46] this I would do this I would do this I
[00:05:47] would do that and at that point the old
[00:05:50] version didn't even work so I was like
[00:05:53] yeah go ahead implement all of these
[00:05:55] seven things so I basically restarted
[00:05:57] the whole thing and the new agent
[00:06:00] implemented all seven and now it works
[00:06:02] works. And I haven't checked the code
[00:06:03] yet, but apparently it's simplified
[00:06:05] stuff, but that to me was this this
[00:06:09] moment of okay, you need to have some
[00:06:11] architectural instinct to kind of guide
[00:06:14] it. And if you cannot guide it of what's
[00:06:16] good architecture and whatnot, you it's
[00:06:19] easy for it to go off the rail. So if
[00:06:21] you know how to make a change or if you
[00:06:23] think the change is say locally
[00:06:25] contained or whatever you want to call
[00:06:26] it, then it's really good. If it's
[00:06:29] something hairy and you need to invent
[00:06:31] say new APIs or new primitives then it
[00:06:33] can go get off the rails. And
[00:06:35] one last thought on this is that
[00:06:38] yesterday while looking at it go off the
[00:06:40] rails I wondered is this you know that
[00:06:43] famous curve that we've been seeing
[00:06:45] where oh the junior engineers love AI
[00:06:48] tooling super senior you know senior
[00:06:50] engineers love it but the people in the
[00:06:52] middle they're not so enthused about it
[00:06:55] and I wondered whether that is because
[00:06:57] if you're a junior engineer you're
[00:06:58] mostly concerned about local changes
[00:07:00] like small local changes and you might
[00:07:02] not have that gut instinct for
[00:07:03] architectural changes yet. When you're a
[00:07:06] senior engineer, you do have that gut
[00:07:09] instinct for architectural changes and
[00:07:10] you kind of know when something starts
[00:07:12] to smell funny and you don't really care
[00:07:14] about the line by line stuff. You're
[00:07:16] more like we should probably not do this
[00:07:18] in this file and do this over here. And
[00:07:20] I wonder whether if you're say an
[00:07:23] engineer with three years experience and
[00:07:26] you haven't seen a lot of things fail or
[00:07:28] succeed yet and you don't ha you haven't
[00:07:30] built up that instinct yet whether then
[00:07:31] you're in this uncanny valley of it does
[00:07:35] stuff but you don't know why it doesn't
[00:07:37] work and you don't know why it's bad or
[00:07:38] something like this and
[00:07:41] >> yeah I don't know that's that's my
[00:07:42] thought to start this. Yeah.
[00:07:44] >> Yeah. And so where my mind goes is how
[00:07:47] do you take the approach that you took
[00:07:49] or you know something else and have it
[00:07:52] know that it's failing and then get it
[00:07:54] on the right path. And what you did it
[00:07:56] worked in that case but maybe it would
[00:07:57] be worse in another case. So how do you
[00:08:00] systematize this?
[00:08:01] >> Yeah.
[00:08:02] >> And that's tough. I mean it does feel
[00:08:04] like a lot of the times I've seen it go
[00:08:05] off the rails another even like super
[00:08:08] dumb LLM would have been able to
[00:08:09] identify it. Like I had a case where it
[00:08:11] was running a a v writing a vest uh test
[00:08:14] and it mocked the exact thing that it
[00:08:16] was testing at the top of the file and
[00:08:18] then it tested it and it was the dumbest
[00:08:20] thing ever. I was shocked that it was so
[00:08:22] dumb. That was so obvious to catch.
[00:08:24] >> But yeah, catch
[00:08:25] >> that. It tests. It wrote some tests for
[00:08:28] me a couple days ago and then I said,
[00:08:32] you know, what code do I have to comment
[00:08:34] out to test whether the test actually
[00:08:36] tests,
[00:08:37] you know, what it's supposed to test
[00:08:40] because that's I I write tests and then
[00:08:41] I want to see them fail and only then do
[00:08:43] I commit them. So it wrote these tests
[00:08:46] and I said exactly this like what
[00:08:47] comment should I comment out? uh what
[00:08:49] code should I comment out and it came
[00:08:51] back with some code I commented out and
[00:08:52] the test didn't fail and then it was I
[00:08:54] got to change the whole testing approach
[00:08:56] and it's and it simplified all of the
[00:08:58] tests but it took took the attention and
[00:09:01] the nudging but you to kind of trigger
[00:09:03] this behavior and again like maybe if
[00:09:05] you're this is your first year of coding
[00:09:06] you don't think I should test that the
[00:09:09] tests actually test what they're
[00:09:11] supposed to test
[00:09:13] >> and you skip over it but
[00:09:15] >> yeah and so one thing we've talked about
[00:09:17] is when we have these tools like edit
[00:09:19] file. Should we have higher level tools?
[00:09:21] Like should edit file actually
[00:09:23] >> do what a human would do? Go look at the
[00:09:25] file, see what diagnostics there are, go
[00:09:27] and make the edit, make sure there's no
[00:09:29] new diagnostics added, format it. Should
[00:09:32] that all be encapsulated in edit file or
[00:09:34] should that be a bunch of other tools
[00:09:35] that it it sometimes calls, sometimes
[00:09:37] doesn't? Or if we can tell that it's
[00:09:39] writing a test and there's an even
[00:09:40] higher level of us thinking we're
[00:09:42] smarter than the model, should we have
[00:09:45] it go and run test coverage, check
[00:09:48] mutations, have some obvious passes like
[00:09:50] that? And these are the things we got to
[00:09:52] answer.
[00:09:53] >> Yeah, I think that stuff I mean we can
[00:09:56] talk about cost in a second, but I think
[00:09:59] >> with cost I don't know, man. You know
[00:10:01] what's expensive as hell? Software
[00:10:04] developers.
[00:10:06] >> I mean I
[00:10:08] So what I wrote down in my notes here is
[00:10:10] right it's it's
[00:10:12] when you run say Ader or cloud code or
[00:10:15] something they they prominently display
[00:10:16] the cost of a session right and
[00:10:19] basically the first time I tried Ader
[00:10:21] over Christmas and I build like this
[00:10:23] dumb emoji game and then it basically
[00:10:26] sent me a bill and said like you just
[00:10:27] spent $15 today to code this useless
[00:10:30] game. You know
[00:10:32] at first you have the um what do you
[00:10:35] call it? sticker shock and you see the
[00:10:37] number and you go this PR cost $2 or $5
[00:10:41] or whatever. But I think every engineer
[00:10:43] who sees that number then has this other
[00:10:45] step where they go, "Yeah, but what's my
[00:10:47] hourly rate?" Like if I if I calculate
[00:10:50] how much I am paid for working on a PR
[00:10:53] for an hour, like it's maybe not that
[00:10:55] expensive, but
[00:10:57] yeah, I I think that the software
[00:11:00] >> there's a lot of software developers who
[00:11:02] work at, you know, big groups of people
[00:11:05] where someone else pays the bills in a
[00:11:07] corporation. And I'm telling you, as
[00:11:10] someone who hires a lot of software
[00:11:12] engineers, and all of our customers do
[00:11:15] too,
[00:11:16] >> anything that can make them more
[00:11:18] productive is valuable. And it's this,
[00:11:20] you know, classic thing like devs who
[00:11:22] would buy a cup of coffee for $5, who
[00:11:24] would never pay for something. Devs
[00:11:27] could be so cheap. Every everyone could
[00:11:29] be so cheap. But yeah, if you put the
[00:11:31] price so front and center, you're not
[00:11:33] gonna want to do it.
[00:11:34] >> Yeah. Yeah, like that's the difference
[00:11:35] between like an Uber and a taxi. And so,
[00:11:38] I don't know, in the enterprise, you
[00:11:40] don't need to put that price front and
[00:11:42] center. And there's a lot of people
[00:11:44] where uh there's a a big business to be
[00:11:46] built and someone is willing to pay for
[00:11:48] that.
[00:11:49] >> Yeah. But we're seeing
[00:11:52] the world is changing, right? like I
[00:11:54] think bold prediction. I think this
[00:11:56] whole, you know, $10 a month, $20 a
[00:11:59] month, whatever, this subscription flat
[00:12:01] rate model, it seems a little bit
[00:12:03] outdated now when
[00:12:05] >> you have these tools. And I think uses
[00:12:07] usage based pricing or some other form
[00:12:11] of pricing, that's what we're going to
[00:12:13] see a lot in the future.
[00:12:15] The big reason for that is we we talked
[00:12:19] about this last week, not on this
[00:12:20] podcast, but we talked about it and it
[00:12:22] was somebody was asking why does cloud
[00:12:25] code feel so different than the other
[00:12:27] tools and I I would say cloud code feels
[00:12:30] like our prototype and I think our
[00:12:32] prototype is even better in some regard.
[00:12:34] But why does it feel different? And
[00:12:36] somebody else was saying that's because
[00:12:38] it's not optimized to save costs, to
[00:12:41] save tokens. And
[00:12:44] I put this in my notes as the magic of
[00:12:46] the no token limit. Because if you
[00:12:49] optimize for requests or say a low
[00:12:52] number of requests or say low number of
[00:12:54] tokens, you will end up with a
[00:12:55] completely different product. And if you
[00:12:58] say let it rip and you take out all of
[00:13:00] the limits and you put you give the
[00:13:02] tools to the mall and then you put it in
[00:13:04] a loop, that's where all the magic comes
[00:13:06] from. magic is not like a lot of the
[00:13:09] magic is in the tools and a lot of the
[00:13:11] magic is in how it's integrated. A large
[00:13:14] part is
[00:13:16] instead of you know concrete example the
[00:13:19] model tries to edit a file and it fails
[00:13:21] and we send back the error message.
[00:13:23] Okay, now you got to fix it. If we're
[00:13:24] optimizing for cost and request, right?
[00:13:27] But since we're not right now, we just
[00:13:28] send the error message back up to the
[00:13:30] model and guess what? The model then
[00:13:31] goes, "Oh, let me try this a different
[00:13:33] way." And it's this autonomy comes from
[00:13:36] or the agentness comes from it having no
[00:13:38] limits and you not restricting it to one
[00:13:40] turn or two turns or something.
[00:13:42] >> Yeah, we even prompt cache everything.
[00:13:44] So the next turn is going to be fast. So
[00:13:46] I was worried that'd be slow.
[00:13:48] >> Yeah,
[00:13:49] >> but it's actually fast. Yeah,
[00:13:51] >> but yeah, I I I think
[00:13:54] >> a lot of that stuff would break if you
[00:13:55] optimize for number of tokens and
[00:13:58] >> Yeah. Yeah,
[00:13:59] >> if you're trying to satisfy a flat rate
[00:14:02] pricing business where you want to cater
[00:14:04] to a bunch of people building emoji
[00:14:05] games on the weekend and to people that
[00:14:08] are professional software developers who
[00:14:10] are some of the most productive people
[00:14:11] on the planet, that's really hard.
[00:14:13] That's like if you're Apple and you want
[00:14:16] to also have the $19 Huawei phone,
[00:14:20] something like that.
[00:14:21] >> Do you remember what the name of the
[00:14:22] environment variable in our prototype is
[00:14:25] to
[00:14:26] >> It had a bunch of curse words in there.
[00:14:28] Yeah. To show the the price. Yeah.
[00:14:30] >> Yeah. Vit
[00:14:32] I'm a [ __ ] idiot who cares more about
[00:14:34] cost than building something awesome.
[00:14:36] So, show me. Yeah.
[00:14:37] >> Yeah. It's something low ambition.
[00:14:41] >> Yeah. I think it's that would have
[00:14:42] killed it from the start. And I mean,
[00:14:44] again, I don't know how the world is
[00:14:47] going to change, but I think if
[00:14:49] anything,
[00:14:50] >> one trend over the last two years was
[00:14:52] that this stuff has become cheaper. Like
[00:14:54] the token prices have come down. and I'm
[00:14:57] not sure we're going to see an end to
[00:14:59] that. So,
[00:15:01] yeah, it's I think it's not bad to bank
[00:15:04] on this.
[00:15:05] >> Yeah,
[00:15:06] >> totally.
[00:15:08] >> And again, like one other thing just on
[00:15:10] because I talked with somebody else and
[00:15:12] they were asking like, "Oh, I want to
[00:15:13] see how you do this." And I think often
[00:15:16] the answer to how exactly does this work
[00:15:18] is the answer often is just let the
[00:15:21] model do it. you know, you can tell the
[00:15:23] model, going back to the thing we talked
[00:15:24] about in the last recording,
[00:15:25] checkpoints, restore points. If you want
[00:15:28] to optimize for cost, you build restore
[00:15:29] points, right? And because then you
[00:15:32] don't have to do anything. It's it's
[00:15:34] cheap. It's free. But if if you don't
[00:15:36] have to optimize for cost, you can tell
[00:15:38] the model undo the things that you did
[00:15:40] and it does it pretty well. Like its
[00:15:42] recall of its own actions is pretty
[00:15:44] good. So that to me is this. Yes, if you
[00:15:48] want to optimize for low cost, then you
[00:15:51] have to build a solution to this. But if
[00:15:53] you don't want to do it, the mall can do
[00:15:54] a lot of stuff on its own.
[00:15:56] >> And
[00:15:58] yeah, it's kind of reminiscent of, oh,
[00:16:00] you hire a freelancer. So if you don't
[00:16:03] have to worry about cost, you can let
[00:16:04] them do everything. But if you have to
[00:16:06] worry about cost, it's this. What's the
[00:16:07] most effective thing this person can do?
[00:16:09] And don't give them this task because
[00:16:10] that's a waste of money and time. And
[00:16:13] >> yeah.
[00:16:13] >> Yeah. Don't have to. There's another
[00:16:14] interesting trade-off that is probably
[00:16:16] going to be harder for us, which is
[00:16:18] speed
[00:16:19] because
[00:16:21] um it is sometimes kind of slow and
[00:16:24] that's kind of annoying sometimes. I
[00:16:26] would like it to be faster. I would also
[00:16:28] like it to be doing more things in the
[00:16:30] background, more feedback loops, running
[00:16:31] tests and so on, which in theory is
[00:16:33] going to make it even slower.
[00:16:35] >> Yeah. Yeah. Yeah. Let's let's talk about
[00:16:37] this. So, this is recent. I think I
[00:16:40] don't know Friday I don't know where we
[00:16:42] started talking about we need to have
[00:16:45] multiple agents running and I think that
[00:16:47] was kind of the theme of the last few
[00:16:48] days right that you added something that
[00:16:51] you can now have multiple agents running
[00:16:53] at the same time and you know that's
[00:16:57] relatively straightforward it's not as
[00:16:59] fancy as it might sound like but it's
[00:17:01] you have multiple things running at the
[00:17:03] same time
[00:17:05] I think that again was a big unlock in
[00:17:07] how to think about this right in that
[00:17:10] you start to think okay how can I
[00:17:14] behave oh you know I don't know box them
[00:17:17] into different parts of the codebase how
[00:17:18] can I have one agent running on the
[00:17:20] front end stuff and one agent running on
[00:17:22] the back end but I I want to hear you
[00:17:24] talk about because you built this and
[00:17:26] you have thoughts on it
[00:17:28] >> yeah well partly because it was slow and
[00:17:30] partly because
[00:17:32] I wanted the UI to feel more minimal
[00:17:35] more about the work that you're doing
[00:17:36] not about the the task tabs and you know
[00:17:38] history and all that.
[00:17:40] >> Now you have multiple tabs and each one
[00:17:42] is an agent and you can switch between
[00:17:43] them. And I found that for exactly the
[00:17:47] problem that you faced when doing that
[00:17:49] VS code across multiple layers change
[00:17:52] that I was telling it to hey make this
[00:17:54] change but you only work in this
[00:17:57] directory like web slash or server slash
[00:17:59] or something like that and that worked.
[00:18:02] And again there's a case where I just
[00:18:03] relied on the model. You could imagine a
[00:18:04] UI thing that says here's a selector of
[00:18:07] the file paths and I'm going to scope it
[00:18:09] and all that blah blah blah. No, I just
[00:18:11] free natural language and that was
[00:18:13] really easy
[00:18:14] >> and that worked. And then given that you
[00:18:16] have one going here, well,
[00:18:18] >> I don't want to do them in serial.
[00:18:20] >> Yeah.
[00:18:20] >> So, I paralyzed them and I had two
[00:18:22] running.
[00:18:23] >> And then the interesting thing is how
[00:18:26] might they communicate because right now
[00:18:28] they don't see each other's changes. I
[00:18:30] mean, if they ask for a tool call,
[00:18:31] they'll see it. But that is interesting.
[00:18:34] Another idea is some notion of a
[00:18:36] supervisor agent which might be
[00:18:40] something that is a top level agent by
[00:18:41] itself. It might be one that's somehow I
[00:18:43] don't know. We got to think through all
[00:18:44] of this.
[00:18:45] >> Yeah.
[00:18:46] >> But it's possible. And it feels like we
[00:18:49] can kind of prototype some of these
[00:18:51] primitives [clears throat] and then we
[00:18:52] can build first class features later on
[00:18:54] top. And that's what comes from this
[00:18:55] really tight feedback loop with us
[00:18:57] chatting and building it and using it
[00:18:58] all the damn time.
[00:19:00] >> On using it all the damn time. I just
[00:19:01] want to share a quick screenshot.
[00:19:04] >> Yes, let's do it. I think that's
[00:19:06] possible here in Riverside.
[00:19:07] >> Yeah, here we go. Uh, yeah, this is my
[00:19:10] Linux machine, but I think it's in the
[00:19:12] preview.app. And you can see over here
[00:19:14] on the right all the threads that I had.
[00:19:18] And I find that as our prototype gets
[00:19:22] more and more useful, the sidebar width
[00:19:24] of it, you know, it starts taking up
[00:19:26] more. I don't always keep it open, but
[00:19:27] you can see some of the examples of
[00:19:29] things I tried it on and just, you know,
[00:19:31] how many we're talking about. I don't
[00:19:32] know how many this is, like,
[00:19:34] >> you know, maybe 35 or 40.
[00:19:36] >> 35. Yeah,
[00:19:38] >> that's a lot.
[00:19:39] >> And that's all just in the last 24
[00:19:40] hours.
[00:19:42] >> Yeah. I mean, I think mine looks
[00:19:43] similar. I think I also bumped into
[00:19:48] one thing that you mentioned. I had the
[00:19:50] same thought yesterday and then I
[00:19:51] basically woke up and and I read your
[00:19:53] message saying the same thing. And that
[00:19:54] is, and again, I'm not stealing your
[00:19:56] credit with all of this, but
[00:19:58] >> don't care about credit.
[00:19:59] >> No, no, no. I know, but it's just
[00:20:01] uncanny how often this happens where we
[00:20:03] come up with this or bump into the same
[00:20:05] thing. And the thing is yesterday I had
[00:20:08] it then work on this command thing and
[00:20:10] it took a while, right? And it ran
[00:20:12] builds and you know, just keeps going.
[00:20:15] And while it was doing this, I noticed I
[00:20:17] think one or two other bugs. I knew for
[00:20:20] example you know how when you mention a
[00:20:23] file in the text we auto add it to the
[00:20:25] context and I noticed that in the UI we
[00:20:27] don't like it's not unique like we show
[00:20:29] the same file name twice even though
[00:20:31] it's only attached once and while it was
[00:20:34] working I thought oh I could start
[00:20:36] another agent to fix this like it can
[00:20:38] oneshot this but then I bumped into the
[00:20:41] problem of oh the other thing is
[00:20:42] currently modifying the file system and
[00:20:44] it's going to run into build errors and
[00:20:45] whatnot so what I want is something like
[00:20:48] git work tree so I can have a different
[00:20:50] check out
[00:20:51] >> and the thing should work over here and
[00:20:53] run the tools on its own and then you
[00:20:55] start to think
[00:20:57] >> what are we doing here like this is
[00:20:58] crazy because it's suddenly
[00:21:01] you want to have longunning tasks on the
[00:21:03] same codebase you want to have multiple
[00:21:04] workspaces you want to run the same
[00:21:06] tools at the same time and I don't know
[00:21:10] it it's it's mind-blowing like it's this
[00:21:12] we're entering a different stage in some
[00:21:14] sense and and
[00:21:16] you can say you know the skep skeptics,
[00:21:18] they will say, "Yeah, but it's it goes
[00:21:22] off the rail or does the wrong thing or
[00:21:24] does this other thing and blah blah
[00:21:25] blah." Again, like last week, somebody
[00:21:27] sent me an email and they said, "Hey, on
[00:21:29] your website, this you you still still
[00:21:31] says you employed at Zed, but you're
[00:21:33] back at Sourcecraft, please change
[00:21:34] this." And I basically took that email
[00:21:35] this person sent me and gave it to the
[00:21:37] agent say, "Fix this on my website." And
[00:21:38] didn't mention any files. And it did it
[00:21:40] and it changed it correctly. And then I
[00:21:43] sent it back to this person and this
[00:21:44] person was not impressed. They were
[00:21:46] saying you could have done this in 5
[00:21:48] seconds or you could have done this
[00:21:49] faster. But my point with this antidote
[00:21:52] and is
[00:21:54] just take a step back and look at where
[00:21:56] we are, man. Like I take
[00:21:57] >> every time someone does that, what you
[00:21:59] should do is have one of your kids do
[00:22:01] it.
[00:22:01] >> Yeah. Maybe
[00:22:02] >> and then videape them and when they say,
[00:22:03] "Oh, you could have done it." Then send
[00:22:04] them that video.
[00:22:05] >> Yeah. I But that's the point, right?
[00:22:07] It's just take a step back and look at
[00:22:09] where we are. Like I can you know how
[00:22:11] often people call up their agency today,
[00:22:14] their marketing agency, and say, "Can
[00:22:15] you change this on our website?" And
[00:22:17] then somebody goes and does it and
[00:22:18] there's like all of this overhead. We're
[00:22:20] this close to [clears throat] being able
[00:22:22] to send an email to an an agent that
[00:22:25] opens a PR and then sends you a
[00:22:27] screenshot and says, "Is this okay?" And
[00:22:29] if you say yes, it's okay. In these
[00:22:31] words, it will go and merge the PR. And
[00:22:34] now we're talking about I have a thing
[00:22:36] running on my machine and it takes 20
[00:22:38] minutes to fix a PR that another machine
[00:22:40] created and now I want another machine
[00:22:42] to run so I need a different workspace.
[00:22:44] Like
[00:22:46] this is insane if you take a step like
[00:22:48] where are we? Like I know it's
[00:22:50] mind-blowing. It's
[00:22:51] >> it's mind-blowing.
[00:22:53] >> And what I keep saying is you need to
[00:22:56] see the trajectory like this is not
[00:22:58] don't look at the snapshot. Don't look
[00:23:00] at the current state. see this as the
[00:23:03] start of a trajectory or whatever the
[00:23:05] middle of the trajectory and maybe yes
[00:23:07] this will maybe plateau but look man I
[00:23:10] can build you an an email to website
[00:23:13] changes bot like I can do this today and
[00:23:16] it would take me a day maybe to build
[00:23:18] this and then you can change your
[00:23:19] WordPress page via email or via WhatsApp
[00:23:23] you can even send annotated screenshots
[00:23:25] and do a circle around stuff and say fix
[00:23:28] this and it will do it and Yeah,
[00:23:31] >> that's wild.
[00:23:32] >> There seems to be some people, some
[00:23:33] personality types who are able to
[00:23:36] exploit that and get a ton of value from
[00:23:38] it and then others who
[00:23:41] >> just don't. And I'm I don't know what it
[00:23:46] is. I do know of some people who were
[00:23:48] very against it and very skeptical and
[00:23:50] now they've come around.
[00:23:52] But like even if you made an email bot,
[00:23:55] you can make it and it would be really
[00:23:56] good in the hands of a lot of people,
[00:23:58] but it'd be very far from perfect. And
[00:24:00] if you put me in a room with someone who
[00:24:03] didn't like it and I tried to explain,
[00:24:05] oh well, if it said that in this case
[00:24:07] and here's what you could have done and
[00:24:08] I think a lot of people would know to do
[00:24:10] that anyway. Like it would actually be
[00:24:11] hard for me to explain those things.
[00:24:13] >> And I mean, look, I'm really trying, but
[00:24:16] I think I can have a little bit of
[00:24:17] empathy for those people. And I don't
[00:24:18] know what it is about their personality
[00:24:20] or approach to things. Yeah, I don't
[00:24:22] understand it anymore either. It's at
[00:24:25] one point I think I understood it
[00:24:26] because you think about um oh yeah it
[00:24:30] might not be efficient yet it might not
[00:24:31] do this but
[00:24:34] for me like if you would have told me
[00:24:36] like when I was a teenager I remember
[00:24:39] thinking about you know oh if we would
[00:24:42] have a tool to do this and then I can
[00:24:45] SSH into server and then could do and it
[00:24:47] would all of the pieces in these dreams
[00:24:49] of what one day we could do were all
[00:24:51] this once we figure out this part and
[00:24:53] once this, you know, gets easier to
[00:24:56] parse language and stuff like this. And
[00:24:58] now we have this universal thing that
[00:25:01] you can plug in and basically can build
[00:25:04] a thing that you call via voice message
[00:25:06] and say, can you check how many
[00:25:08] processes they're running on my machine,
[00:25:10] you know, on my Linux machine, and it
[00:25:12] will do it. And that to me is magical.
[00:25:15] And I don't know how people cannot see
[00:25:18] the implications of that. Maybe it's you
[00:25:20] know as people say it's it's somebody
[00:25:22] said yesterday the quote of if your job
[00:25:24] is dependent on you not understanding
[00:25:26] something then you will not understand
[00:25:27] it and maybe they're scared of oh it
[00:25:30] will make software engineers obsolete
[00:25:31] but I think
[00:25:33] >> yeah is dependent on them understanding
[00:25:36] >> yeah yeah
[00:25:36] >> you know how to use these things so if
[00:25:40] yes and these people genuinely do not
[00:25:44] know how to use these things or they
[00:25:46] have not used these things but when I
[00:25:48] say they don't how to use these things.
[00:25:50] That's tough because it feels like a
[00:25:52] blame the users thing. And I get it.
[00:25:53] It's it's hard. These are nuance. But
[00:25:55] there's just some people where if it
[00:25:57] doesn't work, then they try something
[00:25:59] else and they've evolved to figure out
[00:26:01] this intuition for how to get it right
[00:26:03] and they actually view that as fun. And
[00:26:05] other people don't see that as fun.
[00:26:09] >> Yeah. But I don't know. I I think
[00:26:12] everybody needs to really try to steal
[00:26:15] men this and find their own moment where
[00:26:18] they get a glimpse of,
[00:26:21] you know, what it's capable of. It's
[00:26:22] it's I tried it a bunch over the last
[00:26:24] two years and it hasn't happened. And it
[00:26:26] took me basically in the last 3 months
[00:26:29] building, you know, our autocomplete and
[00:26:31] working with mods and then using cursor
[00:26:33] and agents and claude and whatnot. It
[00:26:36] took me a lot of head against the wall
[00:26:39] to break through it and then then you
[00:26:42] start to see that then it's then
[00:26:44] everything else looks like a black and
[00:26:45] white movie and then it feels hard to
[00:26:47] explain to people what you saw. But I
[00:26:49] think everybody needs to do this on
[00:26:50] their own. But it's I would urge
[00:26:52] everybody to don't treat this as like
[00:26:55] the oracle of code coming on earth and
[00:26:58] now helping you write code. Treat this
[00:26:59] as tools that you have to kind of use a
[00:27:04] correct way or a certain way and then
[00:27:06] you will see something that will make
[00:27:08] you understand okay if this gets fixed
[00:27:10] better this will change a lot of stuff
[00:27:12] but
[00:27:14] >> right now for anyone to get in that kind
[00:27:17] of loop they got to go I mean this
[00:27:20] prototype it's not even available to
[00:27:22] them yet there's clawed code which is
[00:27:24] pretty damn good okay they get clawed
[00:27:26] code and they got to make sure it works
[00:27:28] on their repo that it can run tests.
[00:27:30] They got to get some MCPs like the
[00:27:33] puppeteer one is really valuable. They
[00:27:35] got to do all this setup. It's like
[00:27:38] >> yeah, it is a big learning curve right
[00:27:40] now. So, one of the things I'm really
[00:27:41] excited about is we can make it so that
[00:27:45] it works in the editor that you have and
[00:27:48] it is set up in your codebase because
[00:27:50] someone else at your company already did
[00:27:51] that. This is not like you know vzero
[00:27:53] but someone else has already set it up.
[00:27:55] has got all the right feedback loops
[00:27:56] with tests and browser and visual and
[00:27:58] all that stuff.
[00:27:59] >> It's going to work so much better than
[00:28:01] if it didn't have those things. And
[00:28:03] ultimately, I do believe that even these
[00:28:05] people who don't see it, when it doesn't
[00:28:07] work and other people are talking about
[00:28:08] it, when it actually works in front of
[00:28:10] their own damn eyes,
[00:28:11] >> I think that is going to win them over.
[00:28:14] And every single day, probably 10,
[00:28:17] 50,000 people out there are one over.
[00:28:20] So, it's going pretty damn fast.
[00:28:22] >> And I hope we can accelerate it.
[00:28:24] >> I agree. I think what we need to end
[00:28:26] with this picture. I think the goal is
[00:28:29] not that we end up with a tool where
[00:28:32] everybody has to train their own intern
[00:28:34] you know in large companies but it's
[00:28:36] this no like the company trains the
[00:28:38] intern the AI intern and then everybody
[00:28:40] gets a clone of that intern but the
[00:28:42] intern knows how to navigate the
[00:28:43] codebase and how to do stuff. So that
[00:28:46] would be a big big big big big big help.
[00:28:50] I think a
[00:28:50] >> large and then a code review agent is a
[00:28:52] safety net on the other end. So that
[00:28:54] >> there you go.
[00:28:55] >> Yeah. Boom.
[00:28:57] >> Yeah.
[00:28:58] >> All right. I think we're at time. Let's
[00:28:59] wrap this up and let's get back to
[00:29:01] coding.
[00:29:02] >> Happy hacking.
[00:29:03] >> Bye-bye. Bye.
