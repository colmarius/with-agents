---
title: "McKay Wrigley on Agent-Driven Development"
resourceId: 4
summarySlug: "coding-with-agents/next-token-episode-2"
sourceUrl: "https://www.youtube.com/watch?v=Q8F9N3ugSng"
videoId: "Q8F9N3ugSng"
capturedAt: "2026-06-27T15:02:19.859Z"
series: "next-token"
episode: 2
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3685
---

## Transcript

[00:00:08] What's up everybody? Welcome, welcome,
[00:00:10] welcome to Next Token. We've got a big
[00:00:12] show today. Uh really excited about it.
[00:00:14] We're also live on the internet, believe
[00:00:16] it or not. So, um let's get it started.
[00:00:19] I'm Ryan Carson, your host, along with
[00:00:21] my amazing co-host, Torstston, uh who's
[00:00:23] one of the co the one of the co-creators
[00:00:26] of AMP. Torston, where are you calling
[00:00:28] in today from with your Orb light?
[00:00:31] >> Orb light right behind me. Uh, near
[00:00:33] Frankfurt in Germany. So, it's uh 5:00
[00:00:36] pm in December. It's dark outside and I
[00:00:39] had to close the blinds because I turned
[00:00:42] on all of these lights and recorders and
[00:00:44] I think my neighbors will think the
[00:00:45] house is exploding or something
[00:00:47] [laughter] because it's so bright.
[00:00:48] >> I love it. It It's always bright where
[00:00:50] you are. Um, and our amazing guest is
[00:00:52] McKay Wriggley. So, I've been following
[00:00:55] McKay forever uh on X particularly, but
[00:00:57] on the internet, and he's a builder and
[00:00:59] a teacher for everything AI coding. He's
[00:01:02] also the founder of Takeoff AI, uh where
[00:01:05] he is building an a amazing AI coding
[00:01:08] tutor. McKay, welcome to the show. I'm
[00:01:10] >> great to be here, guys.
[00:01:11] >> It's good good to have you. It's strange
[00:01:12] because I I've heard your voice so many
[00:01:14] times on your little videos of your of
[00:01:16] usually their your phone. I
[00:01:18] >> know. No, nobody knows what I look like
[00:01:20] behind without the ski goggles. is like,
[00:01:22] >> "Yeah,
[00:01:23] >> is this a big reveal then? Is this the
[00:01:25] first time?"
[00:01:26] >> Uh, I think I've done a couple live
[00:01:28] streams, but this is probably for a lot
[00:01:30] of people the first time.
[00:01:30] >> Pretty exciting. All right.
[00:01:31] >> I do have a face. You exist.
[00:01:33] >> Your face is nice.
[00:01:36] >> Nice.
[00:01:36] >> Um,
[00:01:37] >> background, too.
[00:01:38] >> It's all It's all very It's all It's all
[00:01:40] perfect. Um, so we've got a a bunch of
[00:01:42] segments to the show I'm excited to get
[00:01:44] through. We're going to do some TechBuzz
[00:01:46] news where we cover some interesting
[00:01:47] things that are going on in the whole
[00:01:49] world of AI and coding. Uh we're also
[00:01:52] going to do a Ner alert where we teach
[00:01:53] everybody listening uh a quick term that
[00:01:56] you might want to know. And then we're
[00:01:58] going to head on to our deep dive which
[00:01:59] is our longer form conversation about
[00:02:02] what's going on in the industry. Uh and
[00:02:04] then we're going to do game time. So
[00:02:06] make sure to stick around that where you
[00:02:08] try to get your true false questions
[00:02:10] correct. We'll we'll see if everybody is
[00:02:12] paying attention. Um, also if you're
[00:02:14] listening to the show live, please pop
[00:02:16] in the comments, tell us where you're
[00:02:17] calling him from. Um, tell us maybe a
[00:02:20] project that you're working on. Maybe
[00:02:22] tell us what your favorite model is
[00:02:23] right now. Um, we'll call out some of
[00:02:25] you on the show live. So, let's get to
[00:02:29] it and uh let's cover some news in the
[00:02:31] tech buzz. Let's do it.
[00:02:42] All right. So, Google DeepMind published
[00:02:45] the new Titans architecture with neural
[00:02:48] memory. So, I saw Jeff Dean talking
[00:02:50] about this on X and you know, you never
[00:02:53] know if these things are real or or
[00:02:55] interesting or if they're just a paper,
[00:02:57] but I read into it and was pretty
[00:02:59] intrigued. So, I'll give you a quick
[00:03:01] summary then like to chat to you guys
[00:03:02] about it. So, at Nurups 2025, uh which
[00:03:05] is a really fun interesting conference
[00:03:07] if you all uh have ever been able to go.
[00:03:10] Uh it's on the nerdier side which is
[00:03:12] great. Um Jeff Dean highlighted the new
[00:03:14] Titans architecture which addresses the
[00:03:17] limitation of finite context windows in
[00:03:20] transformers uh specifically by
[00:03:22] introducing a persistent neural memory
[00:03:25] module. Unlike standard models that must
[00:03:28] uh pre reprocess the entire history
[00:03:31] every token, Titan learns to compress
[00:03:33] historical data into a long-term memory
[00:03:36] storage during inference, effectively
[00:03:39] allowing it to memorize information
[00:03:41] indefinitely with linear scaling. This
[00:03:44] architectural shift moves beyond simply
[00:03:46] making context windows larger. you know,
[00:03:48] we're starting to see one million, two
[00:03:50] million context windows and instead
[00:03:52] focuses on making models that can learn
[00:03:54] and retain state over time, similar to
[00:03:58] how recurrent uh networks are RNN's
[00:04:00] operate, but with the paralization
[00:04:02] benefits of transformers. Um there's an
[00:04:06] interesting paper on this uh would
[00:04:07] encourage everybody to read it. Um, but
[00:04:09] I have a question for my guests, which
[00:04:11] is, so if this thing works, which would
[00:04:14] be amazing, um, how do we think this is
[00:04:17] going to affect coding agents? How's it
[00:04:19] going to affect your work dayto-day?
[00:04:22] >> Well, it's going to save me a whole lot
[00:04:24] of time on hacky memory techniques.
[00:04:26] [laughter] That's for sure. I think
[00:04:28] we're all kind of in this place right
[00:04:29] now where we're trying to figure out
[00:04:31] what's the best thing that we can do in
[00:04:33] the intermediate kind of time frame here
[00:04:35] before the researchers crack this
[00:04:38] problem.
[00:04:39] >> And I think everybody has their
[00:04:40] different approach. Everybody's
[00:04:41] experienced kind of the the drop off you
[00:04:43] get on that first compact, you know,
[00:04:45] when you exceed your toen context
[00:04:48] window. And it's always like this huge
[00:04:50] pain of trying to have this moment of,
[00:04:52] okay, well, what do I do to preserve as
[00:04:54] much of this as I can? And you know, I
[00:04:56] think everybody expects or hopes for,
[00:05:00] you know, continual learning and memory
[00:05:02] and these things to work and
[00:05:04] >> would certainly I think it would, you
[00:05:07] know, I mean, we we could talk about how
[00:05:08] much that unlocks, but I that's that's
[00:05:11] obviously kind of the next big moment I
[00:05:13] think we're all waiting for.
[00:05:14] >> So, everything that unlocks.
[00:05:17] I mean,
[00:05:17] >> well, I mean, like you say everything it
[00:05:19] unlocks, but I mean, it really does kind
[00:05:21] of unlock everything, which is, I think,
[00:05:23] why it's being treated such a big deal.
[00:05:26] >> Yeah. I mean, if if you think about all
[00:05:28] of the existing memory solutions in
[00:05:30] quotes,
[00:05:32] it's just, you know, a hack basically
[00:05:35] like, oh, you know, instead of saying,
[00:05:38] here's a file with all of the stuff that
[00:05:40] I talked to you about yesterday and
[00:05:41] pasting it in, you give it a tool so it
[00:05:43] can read this file. And that's basically
[00:05:45] how you know if you use JGBT or
[00:05:47] something it's kind of how it works at
[00:05:49] the basic level. It's it's all how it
[00:05:51] works. There's some compression and
[00:05:53] there's embeddings and there's searching
[00:05:54] and there's lookup but basically it
[00:05:56] means you have the model and then
[00:05:58] somewhere else you have memory and then
[00:06:01] it can retrieve them and put them in the
[00:06:02] context window. But this I haven't
[00:06:04] looked at the paper but this sounds like
[00:06:07] it could be at a deeper level at the
[00:06:09] model layer where it it's always mixed
[00:06:13] in when it runs inference. I don't know
[00:06:15] if that's how it works.
[00:06:17] >> So that means it wouldn't have to
[00:06:19] connect via tools. It seems like a
[00:06:22] better deep integration. And I think
[00:06:24] >> to make his point like
[00:06:26] >> you know what if you've listened to any
[00:06:28] of the dwares episodes in the last few
[00:06:31] months like the big thing that he's
[00:06:32] disappointed with maybe too strong a
[00:06:35] word with AI is there's no continuous
[00:06:38] learning. Like if you if you take a
[00:06:41] 10-year-old kid and say I don't know do
[00:06:44] this they will remember how to do it the
[00:06:46] next time and they get better at it. And
[00:06:48] you don't have this with agents. They
[00:06:50] just there's no continuous improvement.
[00:06:51] So that's the big
[00:06:53] >> that's the big thing.
[00:06:54] >> It'll be a huge unlock. Uh I'm sure this
[00:06:56] happens to you guys all the time, but
[00:06:57] you know, I'll be coding something,
[00:06:58] working on a feature.
[00:07:00] >> It's obviously fresh in my mind. You
[00:07:02] know, I'll you know, restart a thread
[00:07:04] the next day, thinking about it, knowing
[00:07:06] there's some edge case, and obviously
[00:07:08] the agent doesn't think about it, right?
[00:07:10] And then you're like, "Oh man, like how
[00:07:12] did that feeling of like, how did you
[00:07:14] not know?" Like, but that's so we're so
[00:07:16] used to working with humans who just do
[00:07:18] this magically. There are almost these
[00:07:21] interesting ways too or things that that
[00:07:23] could unlock which you could almost
[00:07:25] imagine just dumping your entire git hub
[00:07:27] history into that and then it emulates
[00:07:29] you but you could also almost imagine
[00:07:31] doing that for specific people right
[00:07:33] >> and you could almost have like how would
[00:07:34] X person solve this problem and get kind
[00:07:37] of compar so there's like all these
[00:07:38] interesting things it could lead to that
[00:07:40] are like I think everyone's like super
[00:07:42] long context which is kind of a lot of
[00:07:44] the mental model for memory but I also
[00:07:46] feel like there's all these cool like
[00:07:47] personality emulations you could do and
[00:07:49] things like that.
[00:07:51] >> How would John Moyman solve this? And
[00:07:52] maybe you, you know, put everything he's
[00:07:54] ever said and throw that at your right.
[00:07:56] There's just there's cool things that
[00:07:58] could come out of that that I think are
[00:07:59] not obvious.
[00:08:01] >> But question for both of you on the
[00:08:03] topic of memory. We've had memory in
[00:08:06] different versions in the last year or
[00:08:08] something, right? JGPT has it and I'm
[00:08:12] torn on it. Like sometimes it's a pain
[00:08:14] in the ass if I have to tell Jupit
[00:08:16] something again and then other times
[00:08:20] because it's so primitive
[00:08:22] I think it just feels bad like don't
[00:08:24] don't just because I once told you you
[00:08:28] know that I like this you don't have to
[00:08:30] bring it up in every conversation you
[00:08:32] know it feels very strange and then I I
[00:08:34] do like the aspect of you know being
[00:08:38] able to go to a new conversation and and
[00:08:40] blank slate like I think that's a that's
[00:08:42] a thing, you know, um, basically if you
[00:08:46] tell your coworker, "Forget everything I
[00:08:48] said.
[00:08:50] Imagine you've never met me. Now, let's
[00:08:51] restart this." I think that's a feature
[00:08:53] in itself. But I don't know. What do you
[00:08:55] guys think about this?
[00:08:56] >> Well, what's funny is that's that's
[00:08:57] actually how I use the different
[00:08:59] different chat apps is I have the memory
[00:09:01] feature turned off cuz I actually don't
[00:09:03] really like it. It's very rare that I
[00:09:05] actually want to bring it over.
[00:09:06] >> So, it's like memory does feel like
[00:09:08] something where you do want to switch
[00:09:11] >> on and off. Um, I think I think in
[00:09:13] coding more often than not I do want it
[00:09:15] on, but when I'm throwing it like a
[00:09:18] random question like, "Hey, my sink like
[00:09:20] I need plumbing [snorts] help." Like I
[00:09:22] don't really want it to be like, "Oh, I
[00:09:23] know you're like a software guy. I'm
[00:09:25] going to make a weird analogy." It's
[00:09:27] like, "No, no, like just something."
[00:09:28] Yeah, it's like stuff like that.
[00:09:30] >> But what's what's weird what's weird is
[00:09:31] that's a uniquely human trait. So when
[00:09:34] when you talk to your plumber, they know
[00:09:36] not to like make comments about the
[00:09:38] color of your house. Like
[00:09:40] >> Exactly. we have this like really finely
[00:09:43] tuned, you know, evolved ability to pull
[00:09:46] on the right context at the right
[00:09:48] moment. Um,
[00:09:50] >> and you all know this because you're
[00:09:51] build the building these memory systems
[00:09:53] and I'm building a memory system for my
[00:09:54] agent as well. At least I was. But it it
[00:09:56] it just doesn't work. you know, you're
[00:09:58] like, "All right, call a tool after, you
[00:10:01] know, every so often to try to look at
[00:10:03] the context and decide what's important
[00:10:05] and then, you know, store a memory
[00:10:07] somewhere and then pull and it it just
[00:10:09] never it never works."
[00:10:11] >> Yeah. I think in a human conversation,
[00:10:13] there's so much signal about what's
[00:10:15] relevant to the conversation, you know,
[00:10:18] the setting, your body language, your
[00:10:21] facial expressions and whatnot. It's
[00:10:23] this um you know if if a colleague comes
[00:10:27] up to you and says like hey can I get
[00:10:28] some you know feedback on like this RFC
[00:10:31] idea I have or something to build they
[00:10:33] know are you like in a good mood and
[00:10:36] happy and you want to get a little
[00:10:37] praise and or do you are you like not
[00:10:40] sure and you need somebody to push back
[00:10:42] but with JBG it's a like you're a
[00:10:46] software engineer and I'm your you know
[00:10:48] your mentor blah blah whatever you put
[00:10:50] in the system prompt then whatever it
[00:10:52] remembers and It it misses the mark a
[00:10:54] lot of times because it's misses missing
[00:10:56] a lot of signals, you know. Yeah.
[00:10:58] >> So, it'll be
[00:10:58] >> I do I do feel like we're gonna get
[00:11:00] memory and people are going to move the
[00:11:01] goalpost on it like they do for
[00:11:02] everything and it's like, well, this
[00:11:04] isn't like good enough or, you
[00:11:05] [laughter] know, so it's it'll be funny
[00:11:07] to see
[00:11:08] >> it's never good enough. Um, but did it,
[00:11:10] you know, obviously Jeff Dean, the folks
[00:11:12] at Deep Mind, they know what they're
[00:11:14] doing, right? Um,
[00:11:15] >> they're smart. I actually just watched
[00:11:17] the thinking game uh the YouTube
[00:11:18] documentary the new one on on Google
[00:11:21] deep mind
[00:11:22] >> and it was I actually got emotional. It
[00:11:24] was like it was kind of weird. I was
[00:11:26] like wow you know I'm so I feel so
[00:11:28] fortunate to be working in this industry
[00:11:30] like on this problem at this time. It's
[00:11:33] it's pretty special. So deep mind. All
[00:11:35] right so let's keep moving. We got
[00:11:37] another new story before we
[00:11:38] [clears throat] do calling out a couple
[00:11:39] friends in the audience. Uh 33 is
[00:11:41] calling in from Atlanta. Um, and then
[00:11:44] we've got some other guests as well, DD.
[00:11:46] Um, so I appreciate you all uh checking
[00:11:48] in. We've got a question as well from uh
[00:11:51] a friend called uh Treeful XYZ that's
[00:11:56] wondering about um Go, which is kind of
[00:11:58] interesting. Um is Go the best language
[00:12:01] for AI? Um let's let's I think Torson
[00:12:05] should answer this. What do you think?
[00:12:08] >> I don't
[00:12:10] there's multiple things.
[00:12:13] I don't know like
[00:12:15] dimensions on which to judge what's the
[00:12:17] best language for a model. I would say
[00:12:20] amount of training data that's a big
[00:12:23] dimension and there is a lot of go out
[00:12:25] there but there's not as much go out
[00:12:27] there as there is javascript or
[00:12:29] typescript I would say um then the other
[00:12:33] thing though the other dimension is ease
[00:12:36] of build tools you know like how easy is
[00:12:38] it to run a project like how easy is it
[00:12:41] to say this go project I know how to run
[00:12:43] it versus running into problems and
[00:12:46] there's like one anecdote or rumor. I
[00:12:50] guess it's not a rumor, but basically
[00:12:52] what a lot of people have been saying
[00:12:53] about these model companies in the last
[00:12:54] few years is when they do reinforcement
[00:12:56] learning for agents or for coding,
[00:12:59] >> they often did use Go because it turns
[00:13:03] out with Go, you can get a lot of code
[00:13:04] from the internet that's easy to run and
[00:13:07] to test without having like elaborate
[00:13:09] setups. That means
[00:13:11] >> in an RL setup you want to say fix this
[00:13:14] bug or fix this test and make it pass
[00:13:16] and then you need to run the tests to
[00:13:18] give signal you know to the model and
[00:13:20] that's right if you have a super
[00:13:22] elaborate build setup that you cannot
[00:13:24] get to run easily by cloning the git
[00:13:26] repo that makes it harder to be adopted
[00:13:29] right so this is another point for go
[00:13:31] and then the other thing I would say is
[00:13:34] other dimension is how complex is the
[00:13:37] language meaning not because it might be
[00:13:40] hard for the model to write the
[00:13:42] language. But if the language is complex
[00:13:45] and gives you a ton of options of how to
[00:13:47] write code, that means your way of
[00:13:50] writing code might be not what the model
[00:13:53] thinks the code should look like. And
[00:13:55] with with Go, there's of same with
[00:13:57] Python, there's often like one way to do
[00:14:00] a thing,
[00:14:01] >> you know, and the model can get it
[00:14:02] right.
[00:14:03] >> You can verify it. McKay, what about
[00:14:05] you? Number first question is, what do
[00:14:06] you write most of your uh code in?
[00:14:09] Number two, do you think that s let's
[00:14:11] just say open source on it? What it's
[00:14:13] what's it its favorite language?
[00:14:15] >> I think Torson brings up the really good
[00:14:17] point of just the amount of training
[00:14:19] data matters quite a bit. I think that's
[00:14:22] why you see TypeScript and Python being
[00:14:23] such pretty obvious winners of the AI
[00:14:26] tools all being really really
[00:14:27] exceptional at so I personally pretty
[00:14:30] much just exclusively a TypeScript guy.
[00:14:32] Uh I think it tends to work quite well.
[00:14:34] Everything's typed. um so much training
[00:14:36] data, right? Like with on the training
[00:14:38] data point, like you see this with
[00:14:40] >> like take a shad CN for example, like
[00:14:42] it's just kind of like the default
[00:14:44] component library that the AI is just
[00:14:46] going to like it's just like manifested
[00:14:47] itself like into the light cone that
[00:14:49] it's like this is the permanent this is
[00:14:51] the component library what you're going
[00:14:52] to use and it just knows all of that
[00:14:55] stuff so well that it just makes for a
[00:14:56] really smooth experience. And as someone
[00:14:58] who like teaches a lot of beginners
[00:15:00] especially, it's just it's something you
[00:15:02] feel good about recommending people
[00:15:04] because you know the strength is there.
[00:15:06] >> Yeah, the models are so good at at at
[00:15:09] Nex.js, TypeScript, React,
[00:15:11] >> Tailwind,
[00:15:12] >> Tailwind,
[00:15:13] >> it just knows
[00:15:15] >> there's almost like a default text stack
[00:15:17] where it's like the more you go away
[00:15:19] from that, the more you're going to be
[00:15:20] fighting the model in a lot of ways.
[00:15:23] >> So you might as well just kind of
[00:15:25] >> just go with the flow. Um
[00:15:27] >> yeah, the best time to invent a
[00:15:28] framework was like few years before
[00:15:30] those runs.
[00:15:32] [laughter]
[00:15:33] >> And I mean I I I said this like I think
[00:15:35] one of the first live things we recorded
[00:15:37] Ryan together. I I said well it'll be
[00:15:40] you know interesting to see in the
[00:15:41] future whether the codebase will adapt
[00:15:43] to the model
[00:15:44] >> you know or whether the model you know
[00:15:46] whether the tooling will adapt to the
[00:15:47] codebase. And I think
[00:15:49] >> by now I I've said it before but by now
[00:15:52] I'm pretty sure that the pool is so
[00:15:55] strong. Yeah,
[00:15:56] >> that you will adapt to these models. You
[00:15:58] will you will not keep your build
[00:16:00] tooling if the model does not know.
[00:16:04] >> Well, and the the other question too on
[00:16:06] the tooling side of things is like what
[00:16:08] the the labs adopt, right? With like
[00:16:10] anthropic acquiring bun, it's like
[00:16:12] suddenly, you know,
[00:16:13] >> yeah,
[00:16:14] >> that's a that's a big you're going to
[00:16:16] bring a lot of people over there. I I
[00:16:18] literally am thinking about using bun
[00:16:20] because I currently use npm and I'm like
[00:16:22] you know node I'm like oh man I should
[00:16:24] probably I should probably try it. So
[00:16:26] anyway all right so there's so much
[00:16:29] >> there's a nuance sorry just to throw
[00:16:31] this in I think there's a nuance point
[00:16:32] here too which is that bun is really
[00:16:34] good at running like single file
[00:16:38] projects or it doesn't you know like
[00:16:40] there's not a you download bun and you
[00:16:42] can run anything without having to
[00:16:43] install it does it all for you like it's
[00:16:45] pretty good out of the box. M
[00:16:47] >> and when you think about it, you know,
[00:16:50] coming back to memory and whatnot, a lot
[00:16:53] of programming where it's, oh, you start
[00:16:55] something and it runs in the background
[00:16:57] and then it leaves some state over here
[00:16:59] and actually it's invisible and it's in
[00:17:01] the database. A lot of that stuff is not
[00:17:03] good for models. Like for models, it's
[00:17:05] good if they can run a command and see
[00:17:07] the world by running this command. And I
[00:17:11] would say that a lot of tooling that
[00:17:13] does it like this will be favored
[00:17:15] because it's so easy to work with the
[00:17:16] model.
[00:17:17] >> Yeah, I agree. It's like a it's like a
[00:17:19] rushing river. Like you're just going to
[00:17:21] get it get it and go uh with what the
[00:17:23] model wants to do.
[00:17:24] >> Um there's some good comments actually
[00:17:26] come from the crowd again. 33 is asking
[00:17:27] about llinters. Let's let's go off track
[00:17:29] for a second here.
[00:17:30] >> Yeah.
[00:17:30] >> Um what does everybody use for their
[00:17:32] llinters? Have you switched to biome?
[00:17:34] You know, McKay, why don't you go first
[00:17:36] and then
[00:17:36] >> just I'm just ESLint right now. Yes,
[00:17:38] Lint, good oldfashioned. Same. I would
[00:17:41] like to switch to biome, but
[00:17:42] >> same. I I hear so many good things. It's
[00:17:44] just sometimes you have your setup and
[00:17:46] it's like,
[00:17:46] >> yeah, not going to change.
[00:17:48] >> Are you going to go through the
[00:17:48] switching cost of like trying to figure
[00:17:50] out there's just there's so many things
[00:17:51] to do and you just got to pick a certain
[00:17:54] point.
[00:17:54] >> And a llinter is not a tabulous. What
[00:17:55] about What about you, Torson?
[00:17:57] >> We use ESLint. I think there was some
[00:17:59] technical reason why we can't switch to
[00:18:02] biome. It doesn't play nice with V. I
[00:18:05] don't know. I don't know. I don't. It's
[00:18:07] a script I run. The output goes to the
[00:18:09] model.
[00:18:11] >> It's bought a thing.
[00:18:13] >> Who cares?
[00:18:14] >> It is what it is. Um, I want to say hi
[00:18:16] to Tim Culver House out there. Good to
[00:18:17] see you.
[00:18:18] >> Thanks for stopping by. And, uh, Shara
[00:18:21] as well for for stopping here. So, all
[00:18:23] right, let's get into our next uh, quick
[00:18:25] news story and then we'll keep blazing
[00:18:26] after that. So, AWS launched Frontier
[00:18:30] Agents. Um, and uh, this is kind of
[00:18:34] interesting because a lot of people use
[00:18:35] AWS, so I think we should talk a little
[00:18:38] bit about it. Um, they released a new
[00:18:39] class of autonomous AI workers designed
[00:18:42] to execute long running asynchronous
[00:18:44] tasks rather than just responding to
[00:18:45] chat prompts. The launch in includes
[00:18:47] Curo, which is their autonomous
[00:18:49] developer. Um, you could think of it as
[00:18:52] a little bit like a Devon. um they
[00:18:54] launch a security agent uh a DevOps
[00:18:57] agent and unlike co-pilots that require
[00:18:59] human handholding, these agents uh just
[00:19:02] run off and do their thing. Um you give
[00:19:04] them access to the shell and permissions
[00:19:06] and then they just crank. Um, so my
[00:19:09] question for you two is, you know, as we
[00:19:12] see more and more of these truly
[00:19:15] autonomous, you know, simple agents, um,
[00:19:19] you know, you could think of as code
[00:19:20] review bots or, uh, you know, DevOp bots
[00:19:23] or whatever. What's going to happen to
[00:19:25] junior engineers? Like how how do you
[00:19:27] get in if all of the wrote kind of basic
[00:19:31] stuff is being done by agents now? Uh,
[00:19:34] Torstston, why don't you give me your
[00:19:36] thoughts first?
[00:19:39] >> [laughter]
[00:19:40] >> tough question, dude. Like that's a
[00:19:42] tough I've been thinking. So, okay, I'll
[00:19:44] I'll share a little anecdote. So, um
[00:19:47] I've been I wrote two books about how to
[00:19:50] write a program language, right? I I am
[00:19:52] into teaching programming. I've enjoyed
[00:19:56] learning about programming and I have an
[00:19:59] ex-colague who also wrote a book about
[00:20:01] how to learn to program and he sent me
[00:20:03] an email a couple weeks back like two
[00:20:06] three weeks back and he really started
[00:20:08] to try out agents like only four five
[00:20:10] six weeks back um and his email was
[00:20:13] basically dude you were right like
[00:20:15] everything is changing blah blah blah
[00:20:17] but then he's like how do you think
[00:20:19] about teaching programming like I I
[00:20:21] wouldn't even know where to start
[00:20:23] nowadays
[00:20:24] It's do you tell them go through
[00:20:26] structure interpretation of computer
[00:20:28] programs and say [laughter]
[00:20:30] do it by hand or like how do you like
[00:20:33] what's how do you even teach programming
[00:20:35] and I don't know and I would argue that
[00:20:39] I think you know the stuff what you're
[00:20:41] saying Ryan like oh the machine can do
[00:20:43] it what do the juniors do I think that
[00:20:46] kind of is a thing in a lot of other
[00:20:48] industries as well if if if you're say a
[00:20:51] fashion designer or something you also
[00:20:53] do you you learn the tra you learn the
[00:20:56] craft right and but that doesn't mean
[00:20:58] that you didn't do it all the time or
[00:20:59] that machines don't do it but I think we
[00:21:02] might need to switch to something where
[00:21:06] you give juniors a task purely for them
[00:21:10] to learn how to do it but not to ship it
[00:21:13] you know maybe to ship it to production
[00:21:14] or something but it's quite hard to
[00:21:17] >> you know like the industry has you know
[00:21:20] like this industry has always been
[00:21:22] special with like 16 year olds around
[00:21:24] the world being able to go work for a
[00:21:26] company because they've been programming
[00:21:28] since they were 10 years old, you know,
[00:21:29] like it's it's different from a lot of
[00:21:31] other industries. But I think
[00:21:33] >> totally
[00:21:33] >> there's a big change coming.
[00:21:35] >> Yeah, it's wild. M I know you think
[00:21:36] literally about this all the time. So
[00:21:38] >> interesting to hear.
[00:21:41] >> Well, I mean there's there are a lot of
[00:21:43] different angles you could kind of
[00:21:45] analyze this from, right? There's kind
[00:21:46] of the jobs angle of like how do you get
[00:21:48] a job as a junior if you have something
[00:21:51] like 4.5 opus uh that some senior can
[00:21:55] have five of these running at once that
[00:21:56] theoretically are probably already
[00:21:58] better than someone who's like fresh out
[00:22:00] of school or something. Um, so there's
[00:22:02] that question. There's the question of
[00:22:04] well, it enables a lot of people, right?
[00:22:06] So like like you brought up this AWS one
[00:22:08] and one of the things they've listed is
[00:22:09] a DevOps agent. So DevOps is like
[00:22:12] notoriously a very hard thing to teach
[00:22:15] >> um newcomers like if you're trying to
[00:22:16] have one of these juniors trying to
[00:22:18] wrangle the cloud, which is probably to
[00:22:20] be fair like not something you're
[00:22:21] probably going to assign them [laughter]
[00:22:22] to do anyways. if they're trying to like
[00:22:24] build their own thing, like something
[00:22:26] like that can be really helpful because
[00:22:27] you you know like the great thing about
[00:22:29] you know if somebody's like toying
[00:22:30] around with the front end it's like it's
[00:22:32] the the visual feedback's there. They
[00:22:34] can kind of click around. It's it's
[00:22:36] pretty straightforward. When you get
[00:22:38] into the DevOps side of things suddenly
[00:22:40] it goes like totally off the rails um
[00:22:43] and you have to do a lot more wrangling.
[00:22:44] But I don't know, man. Like, uh,
[00:22:49] Opus 4.5 for me in particular just the
[00:22:52] last two weeks has just been kind of
[00:22:53] weird of just going I have all these
[00:22:56] instances running. I've, you know, I so
[00:22:57] I I have like a 49 in widescreen monitor
[00:23:00] just so I can have like a ton of things
[00:23:03] >> all going at at once. It's like I'm kind
[00:23:05] of weird with my my workflow like that.
[00:23:07] And you you start to just like evaluate
[00:23:09] these things as they're running and it's
[00:23:10] like well how many how many of these do
[00:23:12] I like actually need a human for
[00:23:14] >> and how that translates to like the job
[00:23:18] market for juniors is just like
[00:23:20] >> I don't know it feels
[00:23:22] >> but if somebody is is say an 18-year-old
[00:23:25] is asking you how do I get into like how
[00:23:28] >> I want to be a programmer say let's say
[00:23:30] that wouldn't be a question you know
[00:23:32] they they still want to be a programmer
[00:23:33] even though this is
[00:23:35] >> a lot of changing what do you tell I see
[00:23:38] I think so because I worked in this for
[00:23:40] 10 years, right? Like we taught a
[00:23:41] million people how to code a treehouse.
[00:23:43] It's like all I thought about and and I
[00:23:45] think what's happening now is you you
[00:23:48] sort of have to be an entrepreneur now.
[00:23:50] Yes. Like
[00:23:51] >> you you basically you can't just build
[00:23:54] anymore. You have to build something
[00:23:56] because
[00:23:57] >> Yeah. It it's just it's it's sort of
[00:23:59] like if everybody had, you know,
[00:24:01] automatic, you know, carpenters.
[00:24:04] You you couldn't just say, I just want
[00:24:06] to, you know, I just want to carve a
[00:24:08] beautiful piece of wood into this. You
[00:24:10] could do that as a hobby, but it's like
[00:24:11] as a job that the the carpenter robots
[00:24:13] are just going to do.
[00:24:15] >> So, it's like, okay, now what are you
[00:24:16] going to do with a carpenter robot?
[00:24:17] Okay, I'm going to build a ship and
[00:24:20] with, you know, so I think we're kind of
[00:24:21] in that phase where, but it's easy for
[00:24:23] me to say that because I am an
[00:24:24] entrepreneur. Like there's a lot of
[00:24:26] people that just don't want to do that.
[00:24:28] >> But that's already the case for
[00:24:29] carpenters, right? Like if if you in
[00:24:32] Germany train to be a carpenter, I think
[00:24:33] it's going to take you three years or
[00:24:35] something. You go from apprentice to
[00:24:36] then eventually the master certificate
[00:24:39] >> and you when you become a master, you
[00:24:42] have to build your masterpiece, meaning
[00:24:44] >> a nice wooden table or like a big, you
[00:24:47] know, something that you then show off.
[00:24:49] And actually they get shown here in
[00:24:50] local newspapers if people graduate. But
[00:24:54] then I I two friends of mine trained to
[00:24:58] be carpenters and they both now well one
[00:25:01] switched careers but the other one works
[00:25:03] in a factory. a factory. It's not called
[00:25:06] a factory, but it they do like wooden
[00:25:09] furniture, but it's mass-produced. Like
[00:25:12] they and he manages the saws, you know,
[00:25:14] and like how the designs and helps
[00:25:16] others and like there's some stuff that
[00:25:19] is still cheaper for humans to do than
[00:25:20] to for the machine to do because the
[00:25:22] machine would be too expensive. So, I
[00:25:25] don't know, maybe something like this is
[00:25:26] going to happen. Yeah, I I do think the
[00:25:29] advice to like 18-year-olds, like people
[00:25:32] coming out of high school or in college
[00:25:34] or something, is like learn how to
[00:25:36] build, which in a way like and and with
[00:25:39] the people we interact with, that's kind
[00:25:41] of always been the advice in a way. But
[00:25:43] I do think you get more away from kind
[00:25:45] of like leak code grinding style of
[00:25:47] stuff to the people that you're going to
[00:25:49] want to bring on are going to be people
[00:25:51] who have good product. One of the things
[00:25:53] that becomes very obvious with the
[00:25:54] agents as they get better is it's like
[00:25:56] if you had a thousand of these things,
[00:25:58] like you're not just going to become a
[00:25:59] billionaire overnight. Like there's so
[00:26:02] much more goes into building great
[00:26:04] software than just
[00:26:05] >> hammering out the code. And this becomes
[00:26:07] very obvious like when you're trying to
[00:26:08] build something that people actually
[00:26:10] use. And so all of those skills I think
[00:26:12] get amplified and but you like you
[00:26:14] obviously do still need the core because
[00:26:16] especially when you're orchestrating
[00:26:17] them at high level like you still need
[00:26:18] to have an understanding of what's going
[00:26:20] on. So it's like all those technical
[00:26:23] skills are still relevant.
[00:26:24] >> Totally.
[00:26:24] >> Yeah. I I I think that's the big thing,
[00:26:26] right? Like I
[00:26:28] >> I said this before like every time I use
[00:26:30] an agent and then review its work or
[00:26:32] when I write a prompt, everything that I
[00:26:34] know about software engineering comes
[00:26:36] >> Yes.
[00:26:37] >> Yes.
[00:26:37] >> comes into it. What doesn't come into it
[00:26:39] is typing the lines or knowing the
[00:26:42] syntax, but the trade-offs, how to do
[00:26:44] migration, what to deploy first, how to
[00:26:46] do this, blah blah blah. Could this blow
[00:26:47] up? Could it not blow up? Yes.
[00:26:49] >> And the question I I don't have an
[00:26:51] answer to yet is how do people learn
[00:26:55] this stuff now, you know, when it's when
[00:26:57] it's automated way. And the other thing
[00:26:58] that I keep thinking about is
[00:27:01] >> what I what made me then switch careers
[00:27:03] to be a software engineer was that I
[00:27:05] noticed, you know, figuring stuff out
[00:27:07] and getting the computer to do something
[00:27:10] was the best feedback loop for me
[00:27:12] compared to playing music where it's
[00:27:14] like you practice but then you don't
[00:27:16] know, you don't get a binary. Yes,
[00:27:18] you're good or yes, you're bad. But with
[00:27:19] a computer, you have it works or it
[00:27:21] doesn't work.
[00:27:22] >> Yeah.
[00:27:22] >> And now with computers, you always had
[00:27:24] like these tiny tiny puzzles and
[00:27:26] everything you did, every line could be
[00:27:27] a puzzle. Like is this line correct? But
[00:27:30] that's gone now. And I wonder if the
[00:27:33] incentives now pull other people in or
[00:27:36] if they, you know, like if if that stuff
[00:27:39] gets mixed up. I think but but the the
[00:27:41] joy that we all felt when we first
[00:27:43] started programming I think actually
[00:27:45] actually it's more joyful and more fun
[00:27:47] to program than ever now and I I I think
[00:27:51] what's going to happen is is more people
[00:27:53] are just going to start [clears throat]
[00:27:54] programming because it's actually fun
[00:27:55] and they can build fun things and then
[00:27:57] they'll end up turning into software
[00:27:59] engineers just because I mean look at
[00:28:00] Tim like who's listening in I remember
[00:28:02] him saying this is my first software
[00:28:04] engineering job and I was like what are
[00:28:06] you talking about like you handwrote our
[00:28:08] TUI framework and he's Yeah, but I did
[00:28:10] it in my free time and my real job is
[00:28:13] this other thing [laughter] like and
[00:28:15] he's he's so good. So, um
[00:28:18] >> go ahead. No, just one last. I can
[00:28:20] imagine that if you're a carpenter and
[00:28:23] you love working with the tools and you
[00:28:25] love working with wood and you love have
[00:28:28] this is an actual thing like to to to be
[00:28:31] in love with the physicality or with the
[00:28:34] act of doing something and if then
[00:28:36] somebody comes along and says like look
[00:28:38] I got a 3D printer dude you just press
[00:28:40] this button and the thing comes out I
[00:28:42] can see that you're like I don't want to
[00:28:44] do this you know it it's like
[00:28:47] >> some people are salespeople because they
[00:28:48] love talking to people.
[00:28:50] >> They love talking to other people and
[00:28:52] having conversations and they love that
[00:28:54] this is their job. And if you then tell
[00:28:55] them,
[00:28:56] >> you're now going to talk to machines,
[00:28:58] dude. Same job, but you're going to, you
[00:28:59] know,
[00:29:00] >> it's not humans anymore, they're like,
[00:29:01] yeah, I don't enjoy this. So, I can see
[00:29:03] a lot of stuff shifting.
[00:29:05] >> Yeah, it's going to be so interesting.
[00:29:06] And and we're going to talk about Opus
[00:29:08] 45 in a minute, which I can't wait. Um,
[00:29:10] >> yeah.
[00:29:10] >> So, McKay, bunch of people are asking
[00:29:12] what your ex profile is, so we're going
[00:29:13] to throw it up on the screen really
[00:29:14] quick. Um, so that uh people can see
[00:29:17] your ski goggles. Um,
[00:29:19] >> yeah, I'm the uh blue picture with the
[00:29:21] ski goggles. That is me. [laughter]
[00:29:23] >> And McKay always does these hol It's
[00:29:25] funny because they they always look um
[00:29:27] like under produce produced but in a
[00:29:29] super authentic way. You're like filming
[00:29:31] your your screen, you know?
[00:29:33] >> Yeah. I'm I'm just a screen share, one
[00:29:35] take, boom, post. Let's do this. Like
[00:29:37] I'm very very minimalist. One hope
[00:29:40] hopefully in a little bit we get agents
[00:29:42] that can like help me get my videos
[00:29:45] edited.
[00:29:45] >> I think it's good. I mean, it's one of
[00:29:46] those things like it's actually more fun
[00:29:48] to watch than some perfect, you know?
[00:29:50] >> I mean, we've all had the experience of
[00:29:51] like going on YouTube and searching for
[00:29:53] your problem. Maybe not as much now with
[00:29:55] the coding agents, but you'd find that
[00:29:57] like one video and it was just some
[00:29:58] random dude with 50 views who like had
[00:30:01] his screen share and it was like
[00:30:02] terrible audio, but it solved your
[00:30:04] problem. That's like mine's like maybe a
[00:30:06] step above that.
[00:30:07] >> That's the That's the vibe you got.
[00:30:09] >> It works.
[00:30:09] >> I love it. So, everybody make sure to
[00:30:11] follow K.
[00:30:12] has tons of useful like, hey, this thing
[00:30:15] came out, you know, here's how it works.
[00:30:17] This is what I did with it. Um, you
[00:30:18] actually did an Opus45 uh thread, which
[00:30:21] we're going to talk about. Um, so make
[00:30:23] sure to give him a follow. All right, so
[00:30:24] we're going to keep cranking. We've
[00:30:25] already covered uh TechBuzz and we're
[00:30:29] going to go do a quick nerd alert, so
[00:30:31] let's get nerdy. Let's hit it.
[00:30:39] All right, [laughter] that's alert. Hope
[00:30:41] you like that little song. Um, so we're
[00:30:44] going to talk about KV cache uh really
[00:30:46] quickly or a key value cache. Like what
[00:30:48] is this? Why does it matter? Um, so the
[00:30:50] definition is the KV cache is a
[00:30:53] shortterm working memory of a
[00:30:55] transformer model during generation. So
[00:30:58] this kind of actually leads back to the
[00:31:00] story about Titan and the fact that
[00:31:02] maybe we won't need uh to do this as
[00:31:04] much. So when an LLM generates a
[00:31:06] response, it shouldn't have to
[00:31:07] recalculate the math for every previous
[00:31:10] word or token it just said. So instead,
[00:31:13] it saves the key and the value matrices
[00:31:16] of past tokens in memory or VRAMm. So it
[00:31:20] speeds up inference because it doesn't
[00:31:22] have to redo uh the matrix
[00:31:24] multiplication. And if everybody's
[00:31:26] watching and and doesn't know how to do
[00:31:28] matrix multiplication, you should learn
[00:31:30] it because it's really fun to see how
[00:31:32] these models actually do it. Um, so the
[00:31:35] reason why I want to talk about this is
[00:31:37] because the primary bottleneck for
[00:31:39] running long context models is KV cache.
[00:31:42] So as your context window grows, you
[00:31:45] know, let's think about more than
[00:31:46] 100,000 tokens, the KV cache gets
[00:31:49] massive. So it eats up all your GPU
[00:31:52] memory. So um that's why everyone
[00:31:55] struggles to have huge context windows
[00:31:57] you know that's why there is some magic
[00:31:59] that TPUs you know do and what Google
[00:32:01] understands with large context but we
[00:32:04] still hit the wall on KV cache and
[00:32:07] hopefully Titan uh will solve it. So
[00:32:09] that's your nerd alert for today. Hope
[00:32:11] you enjoyed it. [laughter]
[00:32:14] Um we're going to keep cranking to the
[00:32:15] deep dive section and really get into it
[00:32:17] about Opus 45. So let's go to deep dive.
[00:32:23] >> [music]
[00:32:26] >> All right. So, as I alluded to, uh,
[00:32:29] McKay did an interesting post about Opus
[00:32:31] 45. Um, and we're going to talk a lot
[00:32:34] about Opus 45 and, uh, Torson and I and
[00:32:38] everybody in AMP has been talking a lot
[00:32:39] about Opus 45. Everybody in the industry
[00:32:41] has as well. It really feels like a big
[00:32:44] deal. Um, so McKay, you described it as
[00:32:47] the big unlock specifically for agents
[00:32:50] and you uh said it's sort of like Whimo
[00:32:53] where you just say I just want to go
[00:32:54] from A to B.
[00:32:55] >> You don't micromanage it. You don't
[00:32:57] drive it. Um, so tell us a little bit
[00:32:59] more about your your thought process
[00:33:01] when you when you wrote that. And tell
[00:33:03] us like how you're starting to shift
[00:33:04] your daily workflow now with Opus 45.
[00:33:07] >> Yeah, so before Opus 45, I was just
[00:33:09] using Sonnet 45. And in the two weeks
[00:33:13] since Opus has been out, you just kind
[00:33:15] of think like qualitatively, how does my
[00:33:17] life feel different now? And it just
[00:33:19] feels like the experience of my own
[00:33:22] personal workflow is just a lot more set
[00:33:24] and forget. Uh, and that kind of
[00:33:26] manifests itself in a lot of ways. You
[00:33:29] know, there's just the fact that Opus is
[00:33:30] very good at finding what you need from
[00:33:32] your codebase. I think a lot of those
[00:33:34] tool calls you would find in the past
[00:33:36] other models be somewhat inefficient.
[00:33:38] maybe they'd pull in the right things.
[00:33:39] And Opus just has this weird way of just
[00:33:41] seemingly like always pulling in the
[00:33:43] right things right when you need it. Uh,
[00:33:46] and that's kind of why I made the Whimo
[00:33:47] analogy because you just you hop in the
[00:33:49] car, you're not worried about running
[00:33:51] into things. It's just like, you know,
[00:33:52] you're just going to like c coast nice
[00:33:54] and safely to your destination. Um, and
[00:33:57] when you experience that over and over,
[00:33:59] your trust in the model to get things
[00:34:01] done just goes up. And so a side effect
[00:34:04] is that of that is you start giving a
[00:34:06] more complex tasks. you find it handles
[00:34:08] those fairly well and suddenly like I I
[00:34:11] think we've also all experienced kind of
[00:34:13] the bottleneck in many ways being the
[00:34:15] review part. People, you know, say this
[00:34:17] quite a bit and the review now it's
[00:34:20] almost feels like I'm reviewing like a
[00:34:21] senior engineers work instead of a
[00:34:23] juniors. So it's like things are just a
[00:34:25] little bit more snappy. Um, so the whole
[00:34:27] thing just kind of has this like
[00:34:28] autonomous feel to it, which that for
[00:34:31] for me that was the big qualitative
[00:34:33] difference, which is kind of why I made
[00:34:34] that Whimo analogy because that's that's
[00:34:36] kind of how it very much feels like that
[00:34:40] for coding.
[00:34:41] >> Yes.
[00:34:43] >> Yeah.
[00:34:44] >> To Gemini 3. [laughter]
[00:34:47] I think I agree. I I think Well,
[00:34:50] actually, I want to mention Gemini 3. I
[00:34:52] think I've had
[00:34:53] >> Great model. Great model.
[00:34:54] >> Yeah, it's great. I had a lot of this.
[00:34:56] Oh [ __ ] A lot of stuff is changing
[00:34:59] again with Gemini 3. And I think the
[00:35:02] highs that both models have are equal.
[00:35:04] Like if Gemini 3 is if it nails it, it
[00:35:08] nails it. And I think Opus 45 just does
[00:35:11] it more consistently and more evenly and
[00:35:14] more reliably.
[00:35:16] Um
[00:35:17] but yeah, I agree. I think it's I I
[00:35:21] posted this in our Slack I think last
[00:35:22] week, right? that like
[00:35:25] I've been using Opus 45 every day for
[00:35:27] the last couple what was it two weeks
[00:35:30] now I don't know time time is whatever
[00:35:32] but um it just feels like something
[00:35:35] again is changing like exactly what
[00:35:37] McKay is saying you you start out and
[00:35:39] you give it the same tasks and you're
[00:35:41] like oh and then you start giving it
[00:35:43] bigger tasks and it's not something that
[00:35:45] you consciously do but I think it's more
[00:35:47] you subconsciously take a step back and
[00:35:50] and you you get less surprised when it
[00:35:52] does And it's strange and it's, you
[00:35:56] know, talking about reviews, like
[00:35:58] >> I mean,
[00:35:59] >> I don't want to say I blindly merge
[00:36:01] everything, but it's gotten to the point
[00:36:03] where it is like reving a senior
[00:36:06] engineer's code. You're like, "Yeah, I
[00:36:07] get like the the syntax, like all of
[00:36:10] that stuff is fine. It doesn't pass the
[00:36:11] wrong parameters in. It doesn't leave
[00:36:13] unused stuff.
[00:36:15] >> It's just purely about like is it doing
[00:36:17] the right thing? Is it architecturally
[00:36:19] sane?" It's just like a code review. And
[00:36:22] you know then you're like yeah I'm not
[00:36:24] going to give it nitpicks whatever like
[00:36:26] if it wants to name the class like this
[00:36:28] whatever I don't you know it it has to
[00:36:30] modify it like this is your code now
[00:36:33] >> and
[00:36:34] >> a lot of stuff is changing a lot of like
[00:36:36] I I truly think that in the last two
[00:36:40] three weeks
[00:36:42] I truly started to think or believe in
[00:36:46] this idea that software engineering
[00:36:49] the job will evolve into
[00:36:53] a manager of
[00:36:56] somebody who delegates work. And that
[00:36:59] always seemed batshit crazy to me.
[00:37:01] >> But now that's what I do all day long.
[00:37:03] Like I I'm like, "Okay, what do we do
[00:37:05] want to do next? What's the context?
[00:37:07] This bug report, I know it's roughly in
[00:37:09] these two, three files. Here's the old
[00:37:11] AMP thread where we did it. Read up on
[00:37:12] this. Get this context in. Fix this.
[00:37:14] Let's switch over to this one. What's
[00:37:16] the next thing?" And it's the if you
[00:37:19] think back like the stuff we had to do
[00:37:21] even last year or even half a year ago
[00:37:23] with like fixing syntax errors or
[00:37:25] >> yeah you know you work against the the
[00:37:28] idiosyncrasies of the mind like oh
[00:37:30] sometimes it leaves comments when it
[00:37:31] deletes code and then you have to them
[00:37:33] and this is
[00:37:35] >> it it's all gone away. I mean,
[00:37:37] >> yeah.
[00:37:38] >> And so for me, it is wild because I'll
[00:37:41] I'll be, you know, thinking of kind of a
[00:37:43] a small to medium-sized feature, type it
[00:37:46] in the prompts, you know, tell AMP to
[00:37:48] go, I'll go grab a coffee, and then
[00:37:50] I'll, you know, get distracted by my
[00:37:51] kids or something, and I come back and
[00:37:53] it's done. And I'm like, what? Like, and
[00:37:56] it did it in the context window of one
[00:37:58] thread. Like, that that's even more
[00:38:00] mind-blowing, right? you know, no one's
[00:38:02] talking about the fact that Opus has,
[00:38:04] you know, a quarter of the context that,
[00:38:07] you know, Gemini 3 has,
[00:38:09] >> right?
[00:38:10] >> And and even then, so maybe you have to
[00:38:11] hand it off a couple times, but it is
[00:38:14] it's shocking what it can get done. And
[00:38:16] uh I Yeah, I I feel like I'm now
[00:38:20] orchestrating,
[00:38:22] you know, features instead of
[00:38:24] >> the the the number of times that I jump
[00:38:26] in now is it's just it's noticeably
[00:38:29] lower. Like I I can very viscerally feel
[00:38:32] >> the difference and and a side effect of
[00:38:34] that is that I can run more of these at
[00:38:37] the same time. Like you can parallelize
[00:38:38] more when you don't have to be paying
[00:38:41] attention to its tool calls a little bit
[00:38:43] to make sure it's kind of
[00:38:44] >> going the right direction and you don't
[00:38:46] have to be like actually hey go look in
[00:38:47] this area of the codebase.
[00:38:48] >> It finds it right. And I think Torson,
[00:38:51] you just shipped this today, but but we
[00:38:53] we have a new feature where you can say,
[00:38:55] "Hey, find the thread where, you know,
[00:38:57] you were working on this thing."
[00:38:59] >> Um, and I'm excited to use that because
[00:39:01] that'll even make it easier where I'm
[00:39:03] like, I don't even have to exactly
[00:39:05] remember where this happened or what you
[00:39:07] did last. I just you just go find it
[00:39:10] >> and then read that thread in and then
[00:39:12] just get to work. Um,
[00:39:13] >> yeah. So,
[00:39:14] >> I feel I feel look like
[00:39:18] [clears throat] I think I have enough
[00:39:19] street credit to say this without people
[00:39:20] thinking that I'm an idiot, but I think
[00:39:23] there's a surprising amount of code that
[00:39:26] I ship to production that works really
[00:39:29] well
[00:39:31] where I've reviewed the code by testing
[00:39:34] it, by looking at like doing spot
[00:39:36] checks, but not on a line by line basis.
[00:39:39] It's the same as with a colleague. It's,
[00:39:41] oh yeah, I trust you. Like, and you
[00:39:43] merge this. Let me make sure this kind
[00:39:45] of does what it what you said it does.
[00:39:47] And if that looks good, then it looks
[00:39:48] good. And
[00:39:50] >> the the whole idea of, you know, when I
[00:39:53] talk to other people, they're like, oh,
[00:39:55] you know, you don't want to let the
[00:39:56] agents modify files on disk and it needs
[00:39:59] a sandbox and you need this. I'm like,
[00:40:02] what are you talking about? Like, it's
[00:40:03] been it's been able to do anything at
[00:40:06] once on my machine for six months and
[00:40:08] nothing bad has happened. which is
[00:40:10] obviously the famous last words of
[00:40:11] everybody who ever got hacked. But still
[00:40:14] like it's I think it I think basically
[00:40:18] the models are really really good and
[00:40:21] the problem is most people haven't
[00:40:23] caught up yet. I think that's that's the
[00:40:25] thing we're going to see.
[00:40:26] >> I agree. So that's going to lead to my
[00:40:28] next question. But first I want to ask
[00:40:29] ask the audience what models are you
[00:40:31] using the audience? Are you using you
[00:40:33] know Grock 41? Are you using Sonnet 45?
[00:40:37] You using Opus 45? like where's
[00:40:39] everybody at? So throw it in the
[00:40:40] comments. We'll read out some of that.
[00:40:42] Um but that leads to my next question is
[00:40:44] which okay so seeing the step change in
[00:40:46] Opus 45 like where in the world are we
[00:40:50] going to be in like six to 12 months?
[00:40:53] >> Yeah.
[00:40:54] >> I mean what's going to what are we going
[00:40:57] to be doing? Um and I know we don't know
[00:40:59] and I know it's impossible to know but
[00:41:01] it'd be fun to kind of uh think about
[00:41:03] it. May what do you think this is going
[00:41:05] to look like in six months?
[00:41:08] So, one of the things that I'm very
[00:41:10] excited about is computer use because
[00:41:13] [clears throat] I think that that
[00:41:14] changes how you work quite a bit. So,
[00:41:16] this this is something for 2026 I'm like
[00:41:18] very keen to see what happens. It feels
[00:41:21] like we're kind of due for someone to
[00:41:24] drop something here. Uh, I don't know if
[00:41:26] either of you have seen this, but in
[00:41:28] Google's anti-gravity IDE that they just
[00:41:31] released, they have that feature where
[00:41:33] it can kind of go and navigate the
[00:41:34] browser and and a few people have kind
[00:41:36] of a version of this. But you start to
[00:41:38] wonder, you know, take AMP for example,
[00:41:40] say you have a
[00:41:41] >> a tool, a computer used tool that it can
[00:41:43] invoke, it can go inspect the UI. I
[00:41:45] think one of the things that the models
[00:41:48] are going to get good at that's going to
[00:41:49] come sooner than people think is that
[00:41:51] type of work. And so suddenly when you
[00:41:53] can have you know kind of a QA engineer
[00:41:56] on the spot I think I think that changes
[00:41:58] things quite a bit. So that's that's one
[00:42:00] of the things kind of in the shorter
[00:42:01] term like there's obviously like the
[00:42:03] what happens in five years question and
[00:42:05] I I honestly tend to be of the opinion
[00:42:06] of just like I have absolutely no idea
[00:42:08] how to answer that.
[00:42:09] >> Yeah.
[00:42:09] >> Which is [clears throat] like kind of a
[00:42:10] boring answer but at the same time it's
[00:42:11] like
[00:42:12] >> what do you how am I supposed to five
[00:42:14] years ago GT3 wasn't out so it's like
[00:42:17] what you know.
[00:42:18] >> Yeah. I I love that answer though of
[00:42:19] being uh more able to do front end kind
[00:42:22] of using you know using a browser using
[00:42:24] the computer actually reliably.
[00:42:27] >> Um we're getting some answers from the
[00:42:28] audience and then I want to hear from
[00:42:29] you Torson. So uh Aries decoder says
[00:42:32] Opus 45 for for him but begrudgingly. Um
[00:42:36] so that's kind of interesting. And then
[00:42:38] uh Brenton says Sonet 45 has been great
[00:42:41] especially as a work doer. I like that
[00:42:44] work doer. Opus 45 has been fantastic as
[00:42:46] an orchestrator like the one with the
[00:42:48] plan firing off the sub agents uh and uh
[00:42:51] 33 is using all the models apparently.
[00:42:53] So um Torson what what's going to be
[00:42:56] happening in six months? I know you you
[00:42:58] can see the future and know it. So over
[00:43:00] to you.
[00:43:02] >> I mean
[00:43:04] I think
[00:43:06] I don't know about the models. I I I
[00:43:08] think it's
[00:43:11] you know if you look at nano banana on
[00:43:13] the other end of the spectrum like as a
[00:43:15] more visual model and then you know when
[00:43:19] people
[00:43:22] I think we've kind of crossed this thing
[00:43:23] where people are like oh it doesn't
[00:43:25] understand it's just a statistical thing
[00:43:27] it's a stochastic parrot and whatnot
[00:43:29] because you can give nano banana I don't
[00:43:31] know if you guys know this you can give
[00:43:32] it a photo of a cross word puzzle and
[00:43:35] then say fill out the crossword and it
[00:43:37] doesn't.
[00:43:38] >> You can give it these like crazy logic
[00:43:42] puzzles and text and say solve this in
[00:43:44] image and it'll you can be like solve
[00:43:46] this like cryptographic problem and then
[00:43:49] put like a red box under this chair
[00:43:51] based on the answer to this qu like it
[00:43:54] has like some crazy reasoning model
[00:43:55] stuff going on like if it if people
[00:43:57] watching this have never played around
[00:43:58] with it. It's like very interesting to
[00:44:00] do. you need to try like I think it's
[00:44:02] you need to read through like some stuff
[00:44:05] to figure out what to even try because
[00:44:08] it's so bonkers. But for example
[00:44:10] [clears throat] with Nana Banana I took
[00:44:12] a photo of a hiking map which is a
[00:44:14] really dense hiking map in the woods
[00:44:17] like lot of lines and I was like draw in
[00:44:21] the the route from A B and it gave it
[00:44:24] like three points or four I think and it
[00:44:27] sent me back the photo with like a red
[00:44:29] line drawn in of the correct hiking path
[00:44:31] which is something
[00:44:31] >> I saw I saw your post on that that was
[00:44:33] that blew my mind. and it's as a human
[00:44:36] you're like wait a second and you have
[00:44:38] to work for this. So what I think is
[00:44:41] going to happen is that this capability
[00:44:44] and what we see with Opus I I don't know
[00:44:48] I think that's going to melt in some way
[00:44:50] and I think it's going to be crazy. I I
[00:44:53] I I there's no way we're going to be
[00:44:56] talking about are these mods actually
[00:44:58] understanding stuff or whatever. I think
[00:45:00] we're going to really be talking about
[00:45:02] feed this to an AI. And when we say AI,
[00:45:06] we don't mean a chatbot, but we mean
[00:45:08] then a thing that can intellect what for
[00:45:11] lack of better word, like intellectually
[00:45:13] solve problems. And
[00:45:16] >> I don't know. I think it's crazy.
[00:45:18] >> Also, for the record, like Nano Banana
[00:45:20] and other stuff. So my daughter is 8
[00:45:22] years old. She brings, you know,
[00:45:24] homework obviously and I often take like
[00:45:26] a photo of the homework and then send it
[00:45:29] up an hour like fill it out and it
[00:45:31] always nails it. Like [laughter]
[00:45:33] third grade math boom does it, you know,
[00:45:35] fills it out in the photo. It's crazy.
[00:45:37] >> That's so cool. Yeah, it's going to be
[00:45:39] wild. I I think in in six months, Maya,
[00:45:41] I'm going to double down what you said.
[00:45:43] I'm pretty sure we'll get reliable
[00:45:46] feedback loops uh for for models
[00:45:49] visually where
[00:45:50] >> Yeah. And and I think people are just
[00:45:52] going to have more of the feeling that
[00:45:53] like software is solved which like it's
[00:45:56] not really but like the feeling you get
[00:45:58] of just seeing it do you're you're going
[00:46:01] to get that feeling increasingly.
[00:46:03] >> Yeah.
[00:46:03] >> I Yeah. And I think sorry I forgot to
[00:46:05] say is like I think it's going to be a
[00:46:09] parent or apparent to more people that
[00:46:12] you need to adapt your codebase to make
[00:46:14] use of this. you know, it's like it's
[00:46:18] like saying, "Oh, there's a new breed of
[00:46:19] programmer." Um, and they they can only
[00:46:22] use the special keyboard and [snorts]
[00:46:25] that, you know, but as a as a as a
[00:46:28] company, you would be insane to not fit
[00:46:30] out your workstations that plug into the
[00:46:32] special keyboard
[00:46:33] >> for that
[00:46:33] >> because you want to use those new
[00:46:35] programmers.
[00:46:36] >> And I still talk to sometimes people who
[00:46:39] say like recently somebody who works at
[00:46:41] Nvidia of all places says like, I barely
[00:46:43] use a gent programming. And I think the
[00:46:45] pool is going to be so big that a lot of
[00:46:48] companies are going to adapt it and and
[00:46:50] make their codebase be usable by agents
[00:46:52] or right
[00:46:54] >> let's talk about that because that was
[00:46:56] actually uh on my list of questions. How
[00:46:58] are we going to adapt our code bases
[00:47:00] specifically for the models? Um and
[00:47:03] everybody listening, what are some tips
[00:47:05] that we can give them now that help
[00:47:07] models perform better on code bases?
[00:47:09] McKay, how are you adapting your code
[00:47:12] bases uh to help the models perform
[00:47:14] better at the moment?
[00:47:16] >> So I I have two takes on this. So the
[00:47:19] the answer to get for performance now is
[00:47:22] I am very much uh a lot of people are
[00:47:25] probably familiar with agents.md and
[00:47:27] cloud.md. Uh if you're not taking
[00:47:30] advantage of that, not just at the root
[00:47:31] level, but kind of nesting
[00:47:33] >> those files, you can really get a lot
[00:47:35] more performance. I pretty much in
[00:47:37] almost every directory in my codebase,
[00:47:40] no matter how small it is, I almost just
[00:47:42] throw one in there. Um,
[00:47:44] >> and I I do notice a difference, which is
[00:47:46] kind it's just a lot it's low hanging
[00:47:47] fruit that works really well and so you
[00:47:49] might as well take advantage of it. I'm
[00:47:51] a little bit of the maybe other opinion
[00:47:54] where I do actually think that as the
[00:47:56] models get better that all that
[00:47:57] scaffolding is just not going to matter
[00:47:59] as much. I think they're just gonna get
[00:48:01] so good at using whatever you have and
[00:48:02] they're just gonna be intelligent enough
[00:48:04] to figure it out that it wouldn't
[00:48:05] surprise me in it if in like a year
[00:48:08] nobody does that as much. I just think
[00:48:10] the amount of tricks you have to use
[00:48:12] goes down. Like I even noticed this
[00:48:13] going from Sonnet to Opus45 like the
[00:48:16] amount of sub aents I use for example to
[00:48:19] try and you know use some of those
[00:48:20] tricks that you have available in you
[00:48:22] know various harnesses and things like
[00:48:23] that. I don't use them as much just
[00:48:25] because
[00:48:26] >> the kind of parent model just seems to
[00:48:29] >> not need as many tricks. Yeah. And so
[00:48:31] that's kind of my feeling is maybe that
[00:48:33] doesn't matter as much as we might think
[00:48:34] it will in a year.
[00:48:36] >> Yeah. I think a lot of the techniques we
[00:48:38] use nowadays will look like workarounds
[00:48:42] looking back.
[00:48:43] >> Yeah.
[00:48:43] >> And they're about they're very hacky.
[00:48:46] >> Yeah. And for you know we've been saying
[00:48:48] this with AMP from the start that the
[00:48:50] Gentic harness it's a wooden scaffold
[00:48:53] and it should fall away with the model
[00:48:55] getting smarter. And the the the one
[00:48:58] example is a year ago the models would
[00:49:02] fail to edit files. So you would add in
[00:49:04] something like oh if it fails with this
[00:49:05] we're going to try with this other model
[00:49:07] and we're going to do this. Opus 45
[00:49:10] doesn't fail in edit like it it's it
[00:49:13] doesn't have typos. doesn't leak JSON or
[00:49:16] whatever. And so a lot of that stuff is
[00:49:18] just not necessary anymore. And I think
[00:49:20] a lot of that other stuff will will
[00:49:22] change too.
[00:49:23] >> Will fall away. Um but I but I do but it
[00:49:27] surely there's optimization like if it's
[00:49:30] a model first repo like yeah it's not
[00:49:34] >> I think so. It's not going to be human,
[00:49:36] but like we're just so used to like
[00:49:38] directories and and you know uh you know
[00:49:41] includes and there's a way that we
[00:49:44] architect things because we can't do it.
[00:49:46] But surely
[00:49:47] >> my my dumb answer to this honestly is I
[00:49:49] think you're going to say hey optimize
[00:49:50] this so that you can use it the best and
[00:49:52] it will do that and you just go with
[00:49:53] whatever that is. That's honestly kind
[00:49:55] of what I think it'll do.
[00:49:56] >> Yeah. I think there's like it's a fine
[00:49:58] it's like a a a a you know time and
[00:50:01] effort thing where if you want to make
[00:50:03] the most use of these models today right
[00:50:06] now or as soon as possible you want to
[00:50:09] optimize your codebase to make use of
[00:50:12] the model right now and that means
[00:50:14] >> simple tooling that can be put into a
[00:50:16] context window that's easy for them
[00:50:17] doesn't waste tokens and that kind of
[00:50:19] stuff
[00:50:20] >> you could also say I'm not doing
[00:50:23] anything for the next year because then
[00:50:26] Opus 8.2 comes out or Gemini 12 and
[00:50:31] it'll just figure it out, you know?
[00:50:33] >> That's also I think that sounds crazy,
[00:50:36] but I think that's a valid
[00:50:38] >> thing you could do if you're saying I
[00:50:40] have more important stuff to do right
[00:50:41] now. Like this is not a bottleneck that
[00:50:43] I as a that we as a company have. You
[00:50:46] can say I'll just wait for it, you know?
[00:50:48] >> Yeah.
[00:50:48] >> Yeah. But I I don't think that's I don't
[00:50:50] think that's going to work. It's like
[00:50:52] electricity just came out, right? and
[00:50:54] going, I'm just going to wait to see
[00:50:56] like what people do with electricity.
[00:50:58] You're going to miss all of it. Like I
[00:51:01] think there's this like kind of like
[00:51:04] moment in time where we're going to see
[00:51:05] everybody who is listening to the show,
[00:51:08] the type of people that care about this
[00:51:09] kind of thing are going to end up
[00:51:11] building these juggernauts of things um
[00:51:14] because we're using the models now. But
[00:51:17] >> maybe but you know Primogen was on the
[00:51:20] Lex Freedman I don't know podcast like
[00:51:22] half a year I don't know when it was
[00:51:24] like
[00:51:25] start of the year I don't know and he's
[00:51:28] he said something
[00:51:31] you know Lex was saying oh he really
[00:51:33] enjoys working with models because he
[00:51:36] sees the compilation of context and what
[00:51:39] to write and how to prompt it's like an
[00:51:41] art and he's like I'm navigating latent
[00:51:44] space I'm I'm trying to put the best
[00:51:46] information in the best way possible for
[00:51:48] the model to understand it. And Prime
[00:51:51] was saying,
[00:51:53] well, won't this get obsolete with
[00:51:55] better models? Like, do I do I actually
[00:51:58] have to learn this stuff right now
[00:51:59] >> or just ignore it
[00:52:00] >> or can I just ignore it and then the
[00:52:02] model will figure it out? And to his
[00:52:04] point, if we look at a bunch of stuff,
[00:52:08] you know, the order in the context, like
[00:52:10] that's not a thing anymore. it was maybe
[00:52:12] half a year ago, but now it if you have
[00:52:15] agents and you say, "I need you to fix
[00:52:17] this and you mention a file or you don't
[00:52:18] mention a file, most of the time it can
[00:52:20] go and figure this stuff out, you know."
[00:52:23] >> Yep. It's crazy, right?
[00:52:24] >> So, so last bit of Opus 45 news and
[00:52:27] we're going to do a quick true false
[00:52:28] game. Uh McKay, if you could leave
[00:52:31] everybody with one kind of uh thing they
[00:52:35] can do or try with Opus 45, what would
[00:52:37] you say?
[00:52:40] Um to hit something we haven't talked
[00:52:43] about uh try screenshot to code. So one
[00:52:46] of the things that a lot not a lot of
[00:52:48] people know is that cloud open for got a
[00:52:50] huge vision input upgrade. So it's much
[00:52:53] more crisp with vision based tasks. So
[00:52:55] if you give it a screenshot of UI and
[00:52:57] say like clone this, you're going to get
[00:52:58] much better performance than the old
[00:53:01] models. Uh and that's just kind of a fun
[00:53:03] thing that people can try really
[00:53:04] quickly. Uh that I actually use quite
[00:53:06] often. I use Figma a lot. So, I'll kind
[00:53:09] of try and screenshot, have it implement
[00:53:11] whatever I did, and it's kind of a fun
[00:53:13] workflow.
[00:53:14] >> Screenshot to code. Love it. All right,
[00:53:16] so we're going to uh head over to our
[00:53:18] game time segment. Get ready. Get your
[00:53:20] fingers ready for typing.
[00:53:22] >> Me, too.
[00:53:28] >> All right. So, this is mainly a game
[00:53:30] between you two. So,
[00:53:33] >> do I have to type?
[00:53:34] >> Oh, boy.
[00:53:35] >> Yeah.
[00:53:35] >> I got two hands behind my back now.
[00:53:37] >> Yeah. So, You can type uh in the chat or
[00:53:40] on X or in the private chat some tell us
[00:53:44] what you what your answer is going to be
[00:53:46] or you could just say it out loud if you
[00:53:47] want and everybody in the comments or
[00:53:49] watching say in the comments true or
[00:53:51] false. You guys ready?
[00:53:53] >> Wait, wait, wait. What? Sorry, let I'm
[00:53:55] not following. What do I do? [laughter]
[00:53:57] Do I type something in the chat
[00:53:59] somewhere? I have four chats open. What
[00:54:01] do I do?
[00:54:01] >> So, how about this? So, I'm gonna say a
[00:54:03] statement and then you have to decide if
[00:54:05] it's true or false. Um, and then I would
[00:54:08] like you to say it out loud on the show.
[00:54:11] You don't have to type anything,
[00:54:13] >> but everyone that's listening or
[00:54:14] watching, type it in the comments. All
[00:54:16] right, here we go.
[00:54:17] >> Okay.
[00:54:18] >> All right. Statement number one. Google
[00:54:20] CEO Sundar Pachai recently confirmed
[00:54:22] that more than 25% of all new code at
[00:54:25] Google is now generated by AI.
[00:54:29] >> True or false?
[00:54:31] >> Should I say it?
[00:54:32] >> Say it out loud. I I put mine in private
[00:54:34] chat. So, we Oh, I'll do that.
[00:54:36] >> It's already out there.
[00:54:37] >> There you go. There you go.
[00:54:39] >> Okay. So, our illustrious uh co-host and
[00:54:42] guest think this is true. Um the answer
[00:54:46] is true. So, and and this was in 24. So,
[00:54:50] imagine uh we're at 25. So, it's
[00:54:53] >> I want to say he just did an update on
[00:54:54] this and was higher.
[00:54:55] >> Oo. All right. If you can find it, let
[00:54:57] us know. All right. Statement number
[00:54:58] two. According to the 2024 Stack
[00:55:01] Overflow dev survey, which is a little
[00:55:02] out of date, fewer than 30% of
[00:55:05] professional developers are currently
[00:55:06] using AI coding tools. So, fewer than
[00:55:08] 30% are using professional
[00:55:11] >> Oh, wait. You read Wait,
[00:55:12] >> wait, let me say the It got flipped a
[00:55:15] little. Say it so I get the [laughter]
[00:55:17] >> get the name right. According to the
[00:55:19] 2024 Stackerflow dev survey, fewer than
[00:55:22] 30% of professional developers are
[00:55:25] currently using AI coding tools.
[00:55:28] Yeah.
[00:55:29] >> All right. So, we've got we've got our
[00:55:31] statements in from our friends who are
[00:55:34] both saying true and uh Brenton in the
[00:55:36] comments is saying, "What's Stack
[00:55:38] Overflow? [laughter]
[00:55:40] That's kind of mean like um but truth
[00:55:44] >> it is. It is funny because a lot of the
[00:55:46] people now really like genuinely don't
[00:55:48] know what Stack Overflow is."
[00:55:50] >> Wow. It's just crazy. I mean,
[00:55:52] >> crazy.
[00:55:53] >> Stack Overflow is the Bible. Um
[00:55:55] >> it's crazy. But I I I think
[00:55:59] the 30% I think that's also coming back
[00:56:01] to what we said earlier. I think that's
[00:56:02] going to change. But we're so early in
[00:56:05] the adoption of this.
[00:56:07] >> There's people who just shrug and they
[00:56:09] are professional software developers and
[00:56:11] they haven't used any AI tool in the
[00:56:13] last three years and that's I think
[00:56:15] that's going to change.
[00:56:16] >> And the the cost globally too can be
[00:56:18] tough. Like up until 2 or 3 days ago,
[00:56:20] you Opus was only available for max plan
[00:56:24] if you were above 100 or if you're
[00:56:26] paying via an API, which almost, you
[00:56:28] know, like nobody in the global south is
[00:56:30] doing that and so they can't use it.
[00:56:31] >> Yeah.
[00:56:32] >> So, it's like, you know, there's things
[00:56:33] like that.
[00:56:34] >> Yeah. It's cut off. Um
[00:56:35] >> data privacy, you know, like the German
[00:56:38] companies who don't want to send data.
[00:56:40] >> Yeah.
[00:56:40] >> That's a big thing.
[00:56:41] >> Yeah. Friends that work in enterprise
[00:56:44] and man, there's just they're not even
[00:56:45] allowed. like
[00:56:47] >> I have a friend that just same way.
[00:56:48] >> It's wild. All right, so statement
[00:56:50] three. Um, Amazon CEO Andy Jasse
[00:56:53] confirmed that their Amazon Q agent
[00:56:55] saved the company an estimated 4,500
[00:56:59] developer years of work by automatically
[00:57:02] upgrading Java applications. True or
[00:57:04] false? [laughter]
[00:57:07] That's a lot.
[00:57:09] >> All right, May.
[00:57:12] >> Go ahead. Go. It's so so specific. I
[00:57:14] feel like it's just got to be what he
[00:57:16] said. [laughter]
[00:57:17] >> It's like the mythical man month, right?
[00:57:18] >> I don't even know how to quantify that
[00:57:20] in my head. What is What are those
[00:57:21] developer like is that even Yeah, it's I
[00:57:24] couldn't make up a number. Like it's
[00:57:25] like obviously you know like
[00:57:28] >> uh uh producer Scott saying, "Are
[00:57:30] developer years the same as dog years?"
[00:57:32] >> Yeah,
[00:57:33] >> I think so. So, uh Torson is is your
[00:57:37] stake in the ground true or false on
[00:57:38] that?
[00:57:39] >> Whatever. Like I think this is I don't
[00:57:41] know. Like I guess there's
[00:57:43] >> it doesn't matter.
[00:57:44] >> How many developer years has AI saved
[00:57:46] you towards the
[00:57:47] >> Yeah, I don't know
[00:57:48] >> a million bazillion
[00:57:49] >> thousands who knows who quadillion
[00:57:52] >> it is the the measurement just doesn't
[00:57:54] make sense anymore. I mean this is what
[00:57:55] we're we're finding. All right, last
[00:57:56] statement. A massive study of 150
[00:57:58] million lines of code found that AI
[00:58:00] generated code results in 50% less code
[00:58:04] churn, which is deleted or rewritten
[00:58:06] code compared to human code.
[00:58:09] So true or false?
[00:58:14] Okay, he's thinking hard. True,
[00:58:17] Torson. True. Oh, the answer is false.
[00:58:22] The study found the exact opposite.
[00:58:24] >> An analytics firm getclear discovered
[00:58:26] that code turn lines, which is lines of
[00:58:28] code that are deleted or re rewritten
[00:58:30] within two weeks of being authored, is
[00:58:32] projected to double in the AI era,
[00:58:34] suggesting AI is creating more
[00:58:35] disposable or lower quality code, which
[00:58:37] is interesting. So
[00:58:38] >> the projected word in there makes me
[00:58:42] >> Yeah. And there's a lot of stuff with
[00:58:44] this. The same with like the hour save.
[00:58:45] It's like saying, you know, how many
[00:58:47] steps did the invention of the airplane
[00:58:49] save you? It's I wouldn't walk to
[00:58:53] London, you know, and that's obviously
[00:58:56] like an exaggeration, but I think with a
[00:58:57] lot of this stuff,
[00:58:59] >> yeah,
[00:58:59] >> you're like, what what does code even
[00:59:01] mean? Like is code churn bad or good? If
[00:59:03] I can hit a button and get 500 lines of
[00:59:05] code and then I delete it. Like is that
[00:59:07] bad? No.
[00:59:08] >> Like it's not like a junior engineer
[00:59:09] worked on this for four days and then I
[00:59:11] said like let's scrap it. It doesn't
[00:59:13] work. Like failed project. No, I just
[00:59:15] spend five bucks in five minutes on it.
[00:59:17] It's not
[00:59:18] >> Yeah, it's disposable. Um Yeah. Yeah. My
[00:59:21] temp folder is very full of scripts now
[00:59:23] that sorts of things.
[00:59:25] >> Yeah. Yeah. Scripts, throwaway stuff,
[00:59:28] little prototypes and who cares,
[00:59:30] >> you know? I will say what's I I see
[00:59:33] Opus45 writing a lot of scripts in line
[00:59:35] on the command line now. It's wild which
[00:59:38] is just I'm like oh my god you're so
[00:59:40] smart. It's great.
[00:59:41] >> Um okay folks we have hit the top of the
[00:59:44] hour. Um we've covered all sorts of
[00:59:46] stuff all the way from our tech buzz did
[00:59:49] a little nerd alert deep dive went
[00:59:51] pretty hard on Opus 45. Um did some
[00:59:54] silly true false games which were very
[00:59:56] important um and reveal a lot of
[00:59:58] interesting things. Um, so McKay, thank
[01:00:02] you so much for joining us. You're an
[01:00:03] >> awesome.
[01:00:03] >> So great to be here, guys. This was a
[01:00:05] lot of fun.
[01:00:05] >> Thank you.
[01:00:06] >> Uh, give people a quick shout out about
[01:00:08] where they can find you, what you're
[01:00:09] working on.
[01:00:10] >> Uh, yeah, you can check me out on X.
[01:00:12] That's primarily where I'm posting these
[01:00:14] days, McKay Wriggley. Um, I have a
[01:00:17] YouTube video coming out in on Friday
[01:00:20] about the cloud agent SDK. So, if
[01:00:22] anyone's into
[01:00:23] >> trying to build agents with Opus, uh,
[01:00:25] and you want to kind of build your own
[01:00:27] tools and like things like that, that
[01:00:28] might be a fun thing to check out this
[01:00:29] week. So, that's kind of what I got in
[01:00:30] the pipeline.
[01:00:31] >> Love it. And you'll post about that on X
[01:00:33] and then
[01:00:33] >> Oh, yeah. That'll be on X, too. It's a
[01:00:34] It's a It's a monster.
[01:00:36] >> Awesome. Um, Torstson, where can people
[01:00:38] find you on the internet?
[01:00:41] >> On X. Torstson Ball. Torssonball.com. I
[01:00:43] have a weekly newsletter that I write um
[01:00:46] where I collect stuff from the internet
[01:00:48] and I also add my commentary if that's
[01:00:51] if you want to see find out how I see
[01:00:53] the world right now. I think that's a
[01:00:55] good way to to keep up with it.
[01:00:56] >> It's a great newsletter and Torson loves
[01:00:58] to write um and read. So he's one of the
[01:01:01] few people that does a lot of both. Um
[01:01:03] so you you'll find that um you can find
[01:01:06] us at ampode onx as well. Um you can
[01:01:08] find me as Ryan Carson. And thanks
[01:01:11] everybody for listening. Uh, thanks for
[01:01:13] watching and chiming in and we'll see
[01:01:14] you next time. Take care everybody.
[01:01:16] >> Thank you. Bye bye.
[01:01:17] >> See you.
[01:01:21] >> [music]
