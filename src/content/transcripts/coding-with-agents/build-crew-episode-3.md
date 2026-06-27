---
title: "Future of Agentic Workflows"
resourceId: 3
summarySlug: "coding-with-agents/build-crew-episode-3"
sourceUrl: "https://www.youtube.com/watch?v=VoZvTi27_Io"
videoId: "VoZvTi27_Io"
capturedAt: "2026-06-27T15:02:00.592Z"
series: "build-crew"
episode: 3
channel: "Amp, Inc."
language: "en"
kind: "auto-generated"
durationSeconds: 3622
---

## Transcript

[00:00:00] All right, we are live. Excellent. Thank
[00:00:03] you everybody for joining today. I'm
[00:00:04] Graham. This is Build Crew Live. Uh
[00:00:06] Build Crew is a community of people that
[00:00:08] are building with Agentic Coding tools.
[00:00:10] Um you can uh join anytime and it's a
[00:00:13] great place to just connect and meet up
[00:00:15] with other people. We're in this world
[00:00:16] of AI builders and we're all pretty
[00:00:18] lonely, so it's a good place to hang out
[00:00:20] and and share some information. Okay.
[00:00:22] I'm lonely. Fine. So
[00:00:24] >> that's what for right?
[00:00:28] >> Yeah. Exactly. That's why I have it
[00:00:29] called me bro. Um, so I've got Camden,
[00:00:32] Thorston, and Mike joining us today.
[00:00:34] Mike is a member of the community.
[00:00:35] Camden and Thorston are from the AMP
[00:00:37] team. Uh, hello everybody. How's it
[00:00:39] going?
[00:00:40] >> Hello Graeme. Nice to be here.
[00:00:43] >> It's uh, great to have you all. Thank
[00:00:44] you so much. Um, I do I do have one
[00:00:46] little silly icebreaker question for you
[00:00:48] all and it's something that I feel like
[00:00:50] this space is moving so fast that I'm
[00:00:51] constantly changing my mind about how
[00:00:53] stuff goes. So, um, just like a quick
[00:00:55] round robin for everybody, which is like
[00:00:57] one thing you've changed your mind about
[00:00:59] this week.
[00:01:05] >> It's only Tuesday. It's only Tuesday.
[00:01:08] >> It could be since last Tuesday. It could
[00:01:10] be since last Tuesday.
[00:01:11] >> Okay, let me think.
[00:01:13] >> Mike, you said you had one.
[00:01:14] >> Yeah, I've got one. I I have I've was
[00:01:17] committed to in building code fixture
[00:01:21] testing. Like if I'm testing against
[00:01:22] API, you need to have a JSON fixture. No
[00:01:24] more straight live testing against the
[00:01:27] API works far better and it's used this
[00:01:33] technique and yeah with these tools it's
[00:01:36] faster and better for everything.
[00:01:38] >> Wait, you mean in CI or or local
[00:01:41] development or what?
[00:01:42] >> Local development in the build phase.
[00:01:44] Yeah.
[00:01:44] >> Yeah. Yeah. Yeah.
[00:01:45] >> Yeah. I noticed uh Anthropic recently
[00:01:48] like has been adding a bunch of special
[00:01:50] strings so that you can like reproduce
[00:01:52] some of the weird edge case behavior
[00:01:54] like I I assume it's exactly for this
[00:01:56] type of reason like so you can be using
[00:01:59] the live API for your dev testing and I
[00:02:01] love it.
[00:02:02] >> Insert if it will do it live meme. I
[00:02:05] love it.
[00:02:05] >> Yeah, pretty much
[00:02:07] >> nice. That's cool.
[00:02:08] >> Camden, you got a you got a change your
[00:02:10] mind thing?
[00:02:11] >> Yeah. Yeah. I I feel like this is one
[00:02:13] that I've changed my mind on multiple
[00:02:15] times, but like talking to AMP is mine.
[00:02:18] Like uh using my voice to tell it what
[00:02:21] to do. And like
[00:02:24] >> I don't know. It's one of those things
[00:02:25] where every time I do it, I'm like, "Oh,
[00:02:27] wow. I I'm prompting much better. I'm
[00:02:29] actually like giving it the information
[00:02:30] it needs, but then I'm just so
[00:02:32] self-conscious about it that it goes
[00:02:34] away." And this week it came back again.
[00:02:38] >> Wow. Yeah, I use it, too. I can't I've
[00:02:41] never changed my mind about that. It's
[00:02:43] the second I got Super Whisper, it's how
[00:02:45] I do almost everything, but I I think
[00:02:48] I'm a bit of a brute. Thirstston, what
[00:02:51] about you? You have anything?
[00:02:53] >> Slightly. I I think I even said this
[00:02:56] last week live on the air, um that I'm
[00:02:59] not a big heavy user of PRD,
[00:03:04] spec driven, whatever you want to call
[00:03:06] it, workflows. And so yesterday
[00:03:09] um I tried to do this. I I think I have
[00:03:13] like four or five threads from yesterday
[00:03:15] where I was like analyze this piece of
[00:03:17] code for me and write a spec for this
[00:03:19] like just how this works use the oracle
[00:03:22] blah blah blah and put it all in one
[00:03:23] text file and then I would reference it
[00:03:26] in other compositions. And it's not uh
[00:03:30] that I change my workflow to go to this
[00:03:32] uh build a full stack feature, you know,
[00:03:35] with this PD, but having a spec in the
[00:03:37] repo that you can point the agent at and
[00:03:40] say like this is a lot of context that
[00:03:42] you can, you know, absorb and then build
[00:03:46] something else is handy. And Camden will
[00:03:49] also maybe see this. I even committed
[00:03:50] them to the repo. Yes. Or today. I don't
[00:03:52] know. But I
[00:03:53] >> I'm playing around with this. So, I'm
[00:03:55] cool.
[00:03:55] >> Haven't changed my mind yet, but I'm
[00:03:57] changing in the process of changing my
[00:03:59] mind
[00:04:00] >> in the midst.
[00:04:01] >> I love it.
[00:04:02] >> Oh, there's a there's a question. Wait a
[00:04:04] second. Here, our ex colleague and a
[00:04:07] good friend of mine
[00:04:09] >> live from Munich. How does Super Whisper
[00:04:11] compare to Aqua? I don't know what Aqua
[00:04:13] is.
[00:04:14] >> Yeah, I don't know Aqua.
[00:04:15] >> It's another voice. It's another voice
[00:04:17] recorder like Super Whisper. I I used
[00:04:20] Aqua a little bit and then went back to
[00:04:21] Super Whisper, but I downloaded one of
[00:04:24] the biggest models that Super Whisper
[00:04:26] allows you to download
[00:04:27] >> and then I use that locally and that was
[00:04:29] the game changer with Super Whisper for
[00:04:31] me.
[00:04:32] >> It's gotten very accurate.
[00:04:34] >> Yeah, it's not so much speed. I realized
[00:04:37] that I didn't care how long it took to
[00:04:39] transcribe. that was okay as long as it
[00:04:42] was accurate because there were
[00:04:45] artifacts and things that would get
[00:04:46] inserted at the end of the transcription
[00:04:48] at times that I had have to start over
[00:04:51] and yeah but Super Whisper don't have
[00:04:53] much experience with Aqua.
[00:04:56] >> Yes, I find myself with other like the
[00:04:58] built-in Apple uh transcription stuff
[00:05:02] >> uh is like it it's so much worse than
[00:05:05] Super Whisper. Um, and so I find myself
[00:05:08] just trusting it
[00:05:09] >> and then it does me wrong so many times.
[00:05:12] Like I
[00:05:13] >> dirty.
[00:05:14] >> I mean,
[00:05:14] >> yeah, it really
[00:05:16] >> Yeah.
[00:05:16] >> Okay. I I I don't want to derail this,
[00:05:18] but since we're here, I also use Super
[00:05:20] Whisper yesterday a lot. And I have a
[00:05:22] question for all three of you and Tomas
[00:05:24] and everybody else, which is, do you use
[00:05:26] those custom modes? You can, you know,
[00:05:29] in the settings you can
[00:05:31] >> I'm not a settings guy, but I've heard
[00:05:33] that they're great. Like we we talked
[00:05:34] about this last week that like um you
[00:05:37] can have a custom mode where you can
[00:05:38] have it like compile
[00:05:40] >> Yeah. with a different prompt or
[00:05:41] something to summarize it or to clean it
[00:05:43] up or something. Yeah. Yeah.
[00:05:44] >> We need to have like a Super Whisper
[00:05:46] episode. Uh maybe just yet another
[00:05:48] podcast, right, where we talk about
[00:05:49] Superisper, you know?
[00:05:50] >> Yeah. Super whisper optimization weekly.
[00:05:53] Uh
[00:05:54] >> my thing on stuff like that is it's
[00:05:56] cognitive overhead. I don't want to
[00:05:57] think. I just want to hit my hotkey. I
[00:05:59] want to talk and then it needs to, you
[00:06:02] know, just do its thing. That's too
[00:06:04] much. I don't want to think about the
[00:06:05] flow because it's disruptive.
[00:06:08] >> Yeah, he does.
[00:06:09] >> That's a weird
[00:06:12] >> a weird cut to give up here. Uh yeah,
[00:06:15] Richard uh saying using Handy yesterday
[00:06:17] for speech detect free OSS. I sort of I
[00:06:20] honestly don't I know this is like a a
[00:06:24] privilege thing, but I don't really care
[00:06:25] about if a product is free or not. Like
[00:06:28] because then like I I feel like I have
[00:06:30] to extol its virtues. like I'd rather
[00:06:32] just pay and and
[00:06:33] >> yeah,
[00:06:34] >> market it anyway. Uh I guess but yeah.
[00:06:37] Um cool. These are I I love uh hitting
[00:06:40] you all with fun questions you weren't
[00:06:42] expecting. So um this week basically the
[00:06:44] the point of this show is I want to get
[00:06:47] you all are very good at agentic coding.
[00:06:49] I've gotten to learn that by seeing you
[00:06:50] up close and so want to extract some of
[00:06:52] that information and help everybody else
[00:06:54] see it a little bit. Um I am not as good
[00:06:57] at agentic coding so that's why I talk.
[00:06:59] Um, and so let's go ahead and get
[00:07:01] started with Thirstston. Thirstston,
[00:07:02] you've um been playing around with
[00:07:04] stuff. You showed me a photo of you
[00:07:07] staring off into the the abyss. Um, so
[00:07:10] maybe you want to share what you've been
[00:07:11] your tip for this week that everybody
[00:07:13] can try out.
[00:07:14] >> Okay. It's Well, disclaimer, it's not a
[00:07:17] tip. It's more like u
[00:07:20] something I'm playing around with or
[00:07:22] discovering right now. It might turn
[00:07:23] into a tip. Maybe it turns into a, you
[00:07:26] know, here's something you shouldn't do.
[00:07:28] But I think it's pretty interesting. So
[00:07:30] if our uh production team can can throw
[00:07:33] up my Yeah, there you go. So So the
[00:07:36] context for this is that AMP itself
[00:07:39] capitalizes our name, which is not what
[00:07:41] we wanted to do, but funnily enough it
[00:07:44] does. Um, so the context is I'm using
[00:07:47] our newly releasleased SDK which came
[00:07:50] out yesterday and I obviously had access
[00:07:53] to it before and you can use this to
[00:07:56] build or programmatically use AMP and
[00:07:59] I've been playing around with an idea of
[00:08:03] mine that is I want to build an agent
[00:08:06] that's the interface to the agent is
[00:08:08] just a single website in which I can
[00:08:10] throw a message and it has access to
[00:08:12] custom tools and then I see what it did.
[00:08:15] So, what I
[00:08:18] sorry to take two steps further back.
[00:08:20] The thing I'm trying to build is I sell
[00:08:23] like little ebooks on the side and
[00:08:24] sometimes I have to create a coupon code
[00:08:26] and I have to go to lemon squeezy and
[00:08:27] create blah blah blah. So, I first had
[00:08:29] AMP create a little create coupon.js
[00:08:32] script that talks to the API and creates
[00:08:34] a coupon. So, what I wanted to do now is
[00:08:37] I want AMP to be able to use this
[00:08:40] JavaScript script. And AMP has the
[00:08:43] ability to um use toolboxes which are um
[00:08:48] what Dario built. Dario is also on the
[00:08:50] AMP team. They're the uh let's say let's
[00:08:54] do something controversial. You can call
[00:08:55] this like the more Unixy version of MCP
[00:08:58] maybe. I don't know. But basically you
[00:09:01] can say AMP here's a bunch of uh scripts
[00:09:04] in a folder in a toolbox and each tool
[00:09:07] in there follows this um in quotes
[00:09:10] protocol. If you call it with uh the
[00:09:13] nfar describe you get back a description
[00:09:15] of the tool. If you call it with the
[00:09:17] nfar set to execute it executes it. And
[00:09:21] then you can use this in AMP and AMP
[00:09:23] finds these. So what I had AMP do is I
[00:09:26] first have it read the manual so it
[00:09:28] knows what toolboxes are and I
[00:09:30] specifically said like read this
[00:09:31] section. So it opens this website and
[00:09:33] then under the hood um I don't know if
[00:09:36] most of you know this under the hood
[00:09:38] instead of giving you the whole thing in
[00:09:40] the context window if you ask for a
[00:09:42] specific thing AMP will summarize or
[00:09:45] extract the relevant information from
[00:09:46] the website as markdown which is what I
[00:09:48] did here. And then I had it wrap my
[00:09:52] generic script in a toolbox script which
[00:09:55] looks like this with like the describe
[00:09:57] and execute where it you know now has a
[00:09:59] description of how to use the tool and
[00:10:02] then uh I had it tested even and it
[00:10:05] works. It does this and then I could use
[00:10:07] it in my agent and then in the web
[00:10:08] interface I was like hey can you create
[00:10:10] coupons and it says yes I can. I have
[00:10:12] this tool here. I think it's then called
[00:10:14] TB_C
[00:10:15] create coupon or something and then it
[00:10:17] can create coupons and I again like I'm
[00:10:21] playing around with this but the nice
[00:10:24] thing is um I get to keep my script like
[00:10:28] it's just a plain JavaScript script with
[00:10:31] that I can execute with node and whatnot
[00:10:33] or bun. There's nothing in that script
[00:10:36] about AMP or agent or anything else. And
[00:10:38] then I just have this really thin I mean
[00:10:40] what is this like 50 line 47 lines right
[00:10:43] a really thin script that just provides
[00:10:46] like a a prompt for the agent um and it
[00:10:49] executes it with bun even and returns
[00:10:52] the result. And I don't know now I have
[00:10:54] an agent that can programmatically talk
[00:10:57] to anything else. And I thought I don't
[00:10:59] know this was pretty neat. It's all
[00:11:00] committed. It's all in rep. It's all
[00:11:02] plain code. It's no um I don't know
[00:11:06] magic server long running process
[00:11:08] something something.
[00:11:10] >> It feels like um
[00:11:12] I am such a fan of like stores you know
[00:11:15] like a little script store not where
[00:11:17] like you actually sell this but just
[00:11:19] like
[00:11:20] >> where people can grab even if it was
[00:11:22] just like script awesome repo where you
[00:11:24] can grab other things that people are
[00:11:26] using but like
[00:11:28] >> I would love to be able to just because
[00:11:30] I don't need to go redo this. I should
[00:11:31] be able to just and obviously we're in
[00:11:33] the same team so I can go grab this from
[00:11:34] your your thread.
[00:11:35] >> Even from this from this thread even.
[00:11:38] >> Yeah.
[00:11:38] >> But it's nice. It's nice because you can
[00:11:40] just commit it and it's in there and
[00:11:41] it's
[00:11:42] >> Yeah. I don't know. I thought let's
[00:11:44] let's see how it goes. But I'm excited
[00:11:46] about, you know, just having this in the
[00:11:48] repo as small plain text scripts. And
[00:11:52] >> yeah,
[00:11:53] >> I think it's important for the community
[00:11:54] to see examples like this, right? I use
[00:11:56] AMP a lot. I saw the SDK come out. it's
[00:12:00] on my list, but this application like
[00:12:04] inspires me to apply this to different
[00:12:07] things that I'm doing, right? And you
[00:12:10] know, I think that's one of the cool
[00:12:12] things about AMP. You can see the
[00:12:14] threads. You can see how other people
[00:12:16] have used it. I've thrown a lot of
[00:12:19] threads and scripts like this up in a
[00:12:22] GitHub gist. That's sort of my go-to for
[00:12:24] sharing little snippets of code. And
[00:12:27] again, it's it's about like inciting and
[00:12:31] um sparking those ideas. And this is
[00:12:33] this is really cool.
[00:12:35] >> Yeah, we have we do have like some
[00:12:37] examples of stuff that we build, you
[00:12:39] know, code review agent and whatnot. And
[00:12:40] we do have
[00:12:42] >> um examples of I Okay, these are more
[00:12:45] like, you know, like how do you build
[00:12:48] something with this examples?
[00:12:50] >> Um but yeah,
[00:12:51] >> I get the point.
[00:12:53] >> I've been really loving toolboxes
[00:12:54] recently. just like I don't know about
[00:12:56] you guys, but MCP just always feels like
[00:12:58] way too heavy weight for me to deal with
[00:13:01] for building a little one-off script.
[00:13:03] Like
[00:13:04] >> I don't know. I love that toolboxes are
[00:13:06] just like a tiny
[00:13:08] >> I hated MCP from the moment it was
[00:13:10] launched. I hate it. I still hate so
[00:13:13] like I I understand it's the standard.
[00:13:16] Props to the team that built it. All
[00:13:18] respect terrible for the internet. Like
[00:13:21] I'm sorry. Just that opinion has never
[00:13:23] changed.
[00:13:25] It solves a problem. It doesn't do it
[00:13:27] well. It needs to iterate and get
[00:13:29] better. So hopefully something like to
[00:13:31] boxes will catch on.
[00:13:35] >> Start of the year when they came out.
[00:13:36] Was it February or something or January?
[00:13:38] I don't know.
[00:13:39] >> Um I used this was pre-agent stuff. I
[00:13:44] used I think claude threw the docs in
[00:13:46] and said like write me a little tail
[00:13:48] scale uh MCP and it did it in one shot
[00:13:51] and in Python
[00:13:52] >> and that was cool and I was impressed
[00:13:53] like oh this is how I get more context
[00:13:55] into any any LLM conversation
[00:13:58] >> but then
[00:14:00] I think you run into the practical issue
[00:14:03] of oh it's a longunning process
[00:14:06] >> which is yeah everybody's nodding like
[00:14:08] it's never that great and then it's also
[00:14:12] you have like uh you want to ship it to
[00:14:14] somewhere and then you have like the NPX
[00:14:16] and I mean UVX is great but it's
[00:14:21] >> yeah but it's also like gh this is not
[00:14:23] on the path and then this is the wrong
[00:14:24] version of this and the dependencies
[00:14:26] >> I don't know
[00:14:27] >> then we went through tool explosion
[00:14:29] right how many agent threads or how many
[00:14:31] examples did you see that threw a
[00:14:33] hundred tool definitions into the
[00:14:35] context right there was a moment
[00:14:37] >> that moment's gone thankfully
[00:14:39] >> yeah yeah it's gone but
[00:14:42] >> uh you know it's
[00:14:44] tur concise direction to the agent now
[00:14:47] thankfully.
[00:14:47] >> Yeah. And and to this reminds you you
[00:14:50] know like with um I think what was it
[00:14:52] GitHub they had like 100 something tools
[00:14:53] at the start right in the MCP server
[00:14:56] >> and then it's the question was always oh
[00:14:58] when does it use this or it doesn't use
[00:15:00] this tool and obviously it's not
[00:15:01] deterministic
[00:15:03] >> but just to I guess toot our own horn
[00:15:05] here. I think with toolboxes another
[00:15:08] neat thing is
[00:15:10] >> if you use the CLI if you change
[00:15:12] directories you pick up the toolbox in
[00:15:15] that you know or you can change the
[00:15:16] envir depending on where you are using
[00:15:18] dear end so you can contextual tools
[00:15:21] depending on if you're in the client
[00:15:22] directory or the backend directory or
[00:15:24] whatever so that's also neat
[00:15:26] >> it's powerful
[00:15:28] >> all right so new protocol MCP2 minimum
[00:15:32] context protocol
[00:15:35] >> I can get on bored with that. That's
[00:15:37] pretty good. You should go create the
[00:15:39] Twitter right now, Graham.
[00:15:40] >> Yeah.
[00:15:41] >> First a UML diagram, like the
[00:15:43] interaction diagram, then we can talk
[00:15:47] >> minimal context protocol. I like it.
[00:15:50] >> I just I think in memes. I don't have a
[00:15:53] good
[00:15:54] >> fully formed thoughts.
[00:15:55] >> On that thread though, there's this I
[00:15:58] haven't had a chance to play with this
[00:15:59] either, right? Add it to all the list of
[00:16:01] because we're all drinking from the fire
[00:16:02] hose
[00:16:03] >> in the elixir world. There's a new idea
[00:16:06] forming because Elixir and the beam
[00:16:08] runtime has really good support for Lua
[00:16:11] is using and exposing a single Lua tool
[00:16:16] and the direction to the agent is to
[00:16:18] write the Lua script
[00:16:20] >> right into that tool for all the actions
[00:16:22] that you want to perform and you can
[00:16:24] chain those actions as and it ends up
[00:16:28] being this kind of interesting one and
[00:16:31] again there's um some fuzziness here But
[00:16:34] it's a it's an exploratory area because
[00:16:38] Lu acts a little bit as a sandbox,
[00:16:40] right? Not a sand, a little bit as a
[00:16:42] sandbox. You can chain the calls. So if
[00:16:45] you need to write to three files, it's
[00:16:47] one Lua call that's chained
[00:16:50] >> as seen as one tool call from the agent,
[00:16:53] but Lua does the work of writing to all
[00:16:55] three files in parallel.
[00:16:57] >> So there's some interesting ideas there
[00:16:59] that are emerging as we're getting into
[00:17:01] this. not what I can do but how can I do
[00:17:04] it efficiently phase that right and how
[00:17:07] fast has this happened since February to
[00:17:10] now it's pretty cool
[00:17:11] >> yeah oh I know
[00:17:12] >> so wait you're saying you can use lua
[00:17:14] scripts to introspect the beam runtime
[00:17:19] >> uh not introspect it's a execution
[00:17:22] engine so the beam has beam has a
[00:17:25] several escape hatches is the best way
[00:17:27] to think about it
[00:17:29] >> and there's elixir packages that make
[00:17:32] using and accessing those escape patches
[00:17:35] really easy. The execution can happen in
[00:17:38] Lua, it can happen in Elixir. There's a
[00:17:40] bunch of ways, but there's some cool
[00:17:42] gists I've seen people tossing ideas
[00:17:45] around. Not baked, right? But this is
[00:17:48] the cutting edge that u yeah
[00:17:51] >> if it works right efficient really, you
[00:17:54] know, as a place to go with with this
[00:17:55] stuff to be able to just make your
[00:17:58] context all that more potent.
[00:18:00] Nice.
[00:18:01] >> I spent my whole Friday building this
[00:18:03] exact same thing in
[00:18:05] >> Look at this.
[00:18:06] >> Yeah. Yeah. And I just like I mean I've
[00:18:09] loved this idea of basically like the
[00:18:10] LLM just like essentially running in a
[00:18:13] ripple where it can persist state
[00:18:15] between calls. It can like chain tool
[00:18:17] calls together. It can process a list of
[00:18:20] files in a loop rather than having to
[00:18:21] remember that it has to do each of these
[00:18:23] files. I really love this. And like the
[00:18:28] I I guess the the things that I'm
[00:18:30] constantly running into though is just
[00:18:32] like uh support for serializability of
[00:18:37] VM state is rough and we want I really
[00:18:40] want to be able to resume threads. Uh
[00:18:43] but I really I think this is kind of the
[00:18:46] the next generation of where agents are
[00:18:49] going is writing code directly rather
[00:18:52] than calling very constrained tools.
[00:18:54] >> Wait. So to explain this to the
[00:18:56] audience, not for me obviously I get it.
[00:18:58] But just just just to be clear what
[00:19:02] you're saying is
[00:19:04] usually an agent has a bunch of tools
[00:19:06] like list files, read file, create file,
[00:19:08] run terminal command, right? And they
[00:19:10] can invoke it and then if you have the
[00:19:12] transcript of the conversation, you see
[00:19:13] all of those tool call.
[00:19:15] >> But what you're saying is
[00:19:17] >> it only has access to one tool which is
[00:19:21] >> run JavaScript, run Lua, whatever. And
[00:19:23] then
[00:19:25] each invocation goes in the same
[00:19:27] runtime, right? Like in the same VM or
[00:19:29] something. So if it says
[00:19:31] >> run Lua and what's the L syntax for
[00:19:34] defining variable? A equals 1 whatever.
[00:19:36] >> And then then in the next call it says
[00:19:39] like print a and then it gets a result
[00:19:41] equals one, you know, is one or
[00:19:43] something, right? And you're saying the
[00:19:45] serialization problem is if you resume
[00:19:49] the application, you also have to resume
[00:19:51] the virtual machine state, right? So it
[00:19:53] can pick up where it left off.
[00:19:55] >> Yeah.
[00:19:55] >> Right.
[00:19:55] >> Yep.
[00:19:56] >> Okay. Thank you.
[00:19:57] >> Yeah. And actually the audience got
[00:19:59] >> this. I totally get this. This is like
[00:20:01] I'm like right there 100%.
[00:20:06] >> No, this what it does remind me of is
[00:20:08] that like I will die in this hill that
[00:20:09] agents MD aren't good enough. And I want
[00:20:12] my agent to I want to basically have my
[00:20:15] agent be a co-orker that
[00:20:17] >> persists its memory of me through
[00:20:19] sessions cross repos. like I I just want
[00:20:22] to be able to open up my computer and be
[00:20:24] like,
[00:20:25] >> "All right, a we got to pull up this
[00:20:26] project now and we got to, you know, I I
[00:20:28] really want it to act like that."
[00:20:30] >> Um, and so it's just a higher level of
[00:20:32] cognition that I'm waiting for, right?
[00:20:34] So I can be like, "Wait, what was that
[00:20:36] thing we were working on?" And blah blah
[00:20:37] blah blah blah. And it can it can pull
[00:20:39] that up. Um, so if you guys could just
[00:20:42] snap that up, that'd be great.
[00:20:43] >> We'll get right on it. Yeah. Let's go
[00:20:45] vibe code this weekend.
[00:20:46] >> I feel like this is a really interesting
[00:20:48] topic. Yeah.
[00:20:50] I memory like okay so like but I refer
[00:20:54] to this as memory right and like
[00:20:57] >> I feel like this is one that we've tried
[00:21:00] not we like the AMP team specifically
[00:21:03] but like the industry has tried like
[00:21:05] four different times this year and it's
[00:21:07] failed each time and like I I can't
[00:21:10] decide if this is like a a fundamentally
[00:21:14] problematic thing or if we just haven't
[00:21:17] figured out the right incantation to
[00:21:19] make this feel natural. natural and not
[00:21:20] like remember things that you don't care
[00:21:22] about and like I don't know there's
[00:21:25] something about the the stateless part
[00:21:27] of agents that make it much easier to
[00:21:30] reason about and I think memory kind of
[00:21:32] throws that away which I don't know
[00:21:35] >> yeah I think it I don't know I'm talking
[00:21:37] out of my something here but like
[00:21:41] I think it's an issue with um same with
[00:21:44] like code execution where it's when you
[00:21:48] want these agents to use these tools
[00:21:49] tools, you have to train them on them
[00:21:51] and you have to train them like oh in
[00:21:53] this in this specific case it would be
[00:21:54] good to use the ls tool or to use the
[00:21:57] create file tool or whatever it is and I
[00:22:00] think based on the data that I think you
[00:22:03] can gather this is easier than you know
[00:22:07] oh in this case you should remember this
[00:22:09] fact because in this other conversation
[00:22:11] a week later this will be the important
[00:22:13] thing right and like
[00:22:15] >> I don't think it's a technical
[00:22:17] limitation in the s you know we like you
[00:22:19] like we've had these memory tools for a
[00:22:21] while now, at least since February with
[00:22:23] MCP memory tools, whatever. But they
[00:22:27] never really work and they always
[00:22:28] remember the wrong stuff. And then I'm
[00:22:30] like, if you had to ask like if you were
[00:22:33] to ask me like what do you want it to
[00:22:35] remember? It's really hard to to put
[00:22:38] into words like this is noise and this
[00:22:40] is actually something you should
[00:22:41] >> Totally. Yep. Well, still not my
[00:22:45] problem. I would just want it to be
[00:22:46] solved. Um, so But uh Camden, you you
[00:22:50] have lots of good thoughts, but did you
[00:22:52] have a sort of coding tip for this week
[00:22:54] we can we can jump in on and check out?
[00:22:57] >> Yeah. Okay. So, like the uh it's kind of
[00:23:00] related to the stuff that we were
[00:23:01] talking about earlier. Basically, just
[00:23:03] like using code to write code um and
[00:23:07] like encouraging the agent to write
[00:23:09] little scripts that do broad tasks
[00:23:11] across your codebase. And like I this is
[00:23:14] something that I think previous
[00:23:17] generations of models have been okay at,
[00:23:19] but like the most recent models like
[00:23:22] GPT5 and Sonnet 4.5 like are actually
[00:23:25] really really good at writing these
[00:23:27] little one-off scripts to solve tasks
[00:23:29] for you. Um, so actually if you can
[00:23:31] share my screen, I've got an example of
[00:23:33] this that just like kind of blew me away
[00:23:35] when I was uh just like dinking around
[00:23:39] on some side project in AMP. And like
[00:23:42] you can see here like uh actually there
[00:23:45] we go. Um it built this bash command
[00:23:49] based on like not me prompting for it
[00:23:52] just I I asked it to go debug something
[00:23:57] and it created a logs directory. Wrote
[00:24:00] those logs to that directory. Cleared it
[00:24:02] out in between every check. I set my
[00:24:06] settings to write to those logs that
[00:24:08] were logs directory. figured out that it
[00:24:10] needs to use node instead of bun for
[00:24:12] this thing.
[00:24:14] >> Um, pointed to the temporary settings
[00:24:17] file it created.
[00:24:18] >> The new settings file.
[00:24:19] >> Yeah.
[00:24:20] >> Figured out that AMP execute exists so
[00:24:22] it can run AMP in a script. Um, and then
[00:24:26] >> nice
[00:24:27] >> list the list of the directory count
[00:24:29] what's counted what's in there. And oh,
[00:24:32] actually this is a bad example. Uh, I
[00:24:36] did this a couple times.
[00:24:38] There it did it right. One up. One up.
[00:24:40] One up. There was one where it actually
[00:24:42] >> Oh, yeah. Here we go.
[00:24:43] >> There you go. No.
[00:24:44] >> Yeah. And then crept through them to
[00:24:46] find what it was looking for.
[00:24:48] >> And like
[00:24:50] >> I know, right? This uh I I guess this
[00:24:54] general concept of just kind of giving
[00:24:57] AMP free reign to modify your code in
[00:25:00] order to debug it and like building
[00:25:02] scripts that automate that is
[00:25:05] mindblowing to me.
[00:25:06] >> Yeah. Um, and but this is what
[00:25:10] encouraged me to like try the Python
[00:25:11] ripple thing or the lure ripple thing.
[00:25:16] >> I do this quite a bit.
[00:25:17] >> But that's that's agent
[00:25:20] that's agent
[00:25:22] plus+, right? Like that's I think that's
[00:25:23] the beauty of agents, right? Where they
[00:25:25] they can use these tools and commands
[00:25:27] versus just oneshot the whole app or
[00:25:30] whatever, but they can use this type.
[00:25:32] And I mean I think this is like this is
[00:25:34] something that we've really struggled
[00:25:35] with when model testing, right? A lot of
[00:25:37] models are good at oneshotting things
[00:25:39] but not great at this kind of
[00:25:42] >> iterative selfcorrection. Um
[00:25:46] >> but this is the kind of thing that I I
[00:25:49] really love to see when I'm testing out
[00:25:51] models.
[00:25:54] One of my first packages was a uh
[00:25:58] compile time or there was a a special
[00:26:01] logging utility in elixir that I would
[00:26:04] insert all these extra logs into my code
[00:26:06] >> that at compile time it would compile it
[00:26:08] out but it would produce logs for at the
[00:26:12] time claude 35 to see what was going on
[00:26:15] to create some of this loop. super
[00:26:18] effective, completely useless now. But
[00:26:20] it uh you know anything anything that
[00:26:23] you can do to
[00:26:25] ultimately uh provide or give the agent
[00:26:29] extra input in the form of logging in
[00:26:32] the form of
[00:26:34] >> um you know exit variables
[00:26:36] >> to get that loop going and then just let
[00:26:38] it run.
[00:26:40] >> That is the path to success that I've
[00:26:42] seen with these coding agents.
[00:26:45] That's one thing from the AMP or the um
[00:26:48] the OpenAI
[00:26:50] presentation yesterday when they uh I
[00:26:53] think it's Roma was talking about their
[00:26:55] um SDK that he's had codecs running for
[00:26:59] seven hours.
[00:27:00] >> Yeah.
[00:27:01] >> On something which is like insane, you
[00:27:04] know? I mean, who who knows what exactly
[00:27:05] was happening there, but that just felt
[00:27:07] to me like
[00:27:09] >> Yeah.
[00:27:11] >> Yeah. I've had it running for seven
[00:27:12] hours, too. just need to be doing
[00:27:14] install an MPM thing. Yeah,
[00:27:16] >> PN dev waiting for you.
[00:27:20] >> Oh, that's great. No. Um I think it's
[00:27:22] interest there was a question uh if if
[00:27:25] the Oracle wants to bring it up um and
[00:27:27] speak about it online, but there's a
[00:27:29] great question from Tomas there about
[00:27:30] your experience with background uh or
[00:27:33] cloud agents. And I I don't know how
[00:27:34] much we want to talk about this, but I
[00:27:36] think there that to me feels like the
[00:27:38] next thing that is really going to
[00:27:42] turbocharge a lot of this
[00:27:44] >> loops that we're talking about, right?
[00:27:46] Um because you can only
[00:27:49] >> How many people want to do it
[00:27:50] themselves? No, people just want to
[00:27:52] oneclick these things and let them run.
[00:27:53] So,
[00:27:54] >> have you guys played with these at all?
[00:27:57] >> Yeah.
[00:27:57] >> Yeah.
[00:27:59] >> Yeah. I think I mean
[00:28:02] >> not revealing anything, but we're
[00:28:04] working, you know, we're working on
[00:28:06] something and we're using it internally.
[00:28:09] And um
[00:28:11] I I think it would be weird to say, "Oh,
[00:28:14] this is the best thing ever." Like,
[00:28:18] >> but what I I I think it's like it's
[00:28:22] um so strange in that you can now walk
[00:28:25] and on your phone send off stuff and
[00:28:27] have it be researched and have a patch
[00:28:29] or first draft or whatever it is. And
[00:28:32] then you realize like how differently
[00:28:34] you approach stuff because now you have
[00:28:36] these drafts to go through and you have
[00:28:38] to actually make sure that they work
[00:28:41] because it's not like you actually send
[00:28:42] somebody off and they have high agency
[00:28:44] and merge the stuff and ship it to
[00:28:45] production and watch it and whatnot. Um
[00:28:48] so we do have some experience on it.
[00:28:50] We're working on it. Um
[00:28:53] my biggest I don't know. I I I want to
[00:28:55] hear what you guys think, but my biggest
[00:28:56] question is um like how do you change
[00:29:00] the way you work with this? And to quote
[00:29:03] Quinn, our co what he's been saying is
[00:29:06] the mental image he has with background
[00:29:08] agents is that um like the the chess pro
[00:29:11] that plays like 10 people at the same
[00:29:13] time in the park and moves from the one
[00:29:15] board to the other. you're not trying to
[00:29:17] play two at the same time, but you
[00:29:18] switch over and you you know, you focus
[00:29:21] on one of them, but you can spawn off a
[00:29:23] lot of matches. And um yeah, I'm I'm
[00:29:27] wonder how how how do you guys
[00:29:29] >> I think that I that question of how
[00:29:31] you're going to use them is a big thing
[00:29:33] for me. Um I know that uh uh the founder
[00:29:38] of Gumroad
[00:29:39] uh when I talked to him about using AMP,
[00:29:42] he was like, "When can I use it from
[00:29:43] Slack?" That was like his very first
[00:29:44] question. He's like, "I don't code. I
[00:29:46] haven't opened an ID in months. I just
[00:29:48] code from Slack now." Um, and I and when
[00:29:51] I interviewed at AMP, that was the first
[00:29:53] question I had for Bung was like, "Oh,
[00:29:55] these are cool. So, can I code from
[00:29:57] Slack?" And he was like, "Uh, yeah, I
[00:29:59] mean, eventually, sure." Um, so I think
[00:30:01] that that almost feels like actually not
[00:30:04] a big enough leap. I was sort of while
[00:30:06] you were talking realizing like if if
[00:30:09] you had your sort of if Siri wasn't
[00:30:11] awful and you could interface with Slack
[00:30:14] verbally, you could literally be like on
[00:30:16] a run.
[00:30:16] >> Yeah.
[00:30:17] >> And be like, "Okay, kick this off now.
[00:30:19] Do this and blah blah blah." And it's
[00:30:20] like, "Wait a second. If going on a walk
[00:30:23] is the best way to figure something out.
[00:30:24] What if you could go on a walk and still
[00:30:26] be coding? Like get that get that
[00:30:29] exercise energy up and then actually
[00:30:30] build something." So, um, and then just
[00:30:33] one other thing is that Thorston, we've
[00:30:34] got to get you some more of that
[00:30:37] American showmanship bravado that's
[00:30:40] like, well, I don't want to, it would be
[00:30:41] weird to say this. No, you've got to
[00:30:43] just unequivocally like this is the
[00:30:46] best. It's the best it's ever been. No,
[00:30:50] >> my humility self. That's why people buy.
[00:30:52] >> All right. So, it's calculated. I see.
[00:30:54] >> Honestly, my my So, I have a lot to say
[00:30:57] about this one.
[00:31:00] >> There you go. I knew it.
[00:31:01] >> The the fundamental framing with cloud
[00:31:03] agents versus CLI agents is it's a
[00:31:06] completely different tool.
[00:31:08] >> We think it's AMP in the cloud versus
[00:31:10] AMP in the CLI. No, they're apples and
[00:31:13] oranges.
[00:31:14] >> I integrate and interact and uh interact
[00:31:17] with AMP in the CLI like I would pair
[00:31:20] program with someone. I'm engaged. I'm
[00:31:23] focused. And I I have found using the
[00:31:27] the work tree tools with other agents,
[00:31:31] if I go more than two work trees, try to
[00:31:34] do parallel, maybe I'm doing a PR over
[00:31:36] here for some small issue,
[00:31:38] >> I inevitably mess something up. So I go
[00:31:40] back to it's one thread because I'm pair
[00:31:42] programming, right?
[00:31:44] >> Anything in the cloud,
[00:31:46] >> I have to approach it differently. I
[00:31:48] have to think through what I want to get
[00:31:50] out the end versus if I'm in the CLI, I
[00:31:54] can go on a journey of discovery, right?
[00:31:56] I can figure things out. I can learn
[00:31:58] along the way.
[00:31:59] >> Background agents, no, I'm making the
[00:32:01] request
[00:32:02] >> and I have a mental image of what I want
[00:32:05] to get out at the end. The other thing
[00:32:07] is that I think are the current
[00:32:09] iteration of background agents, jewels,
[00:32:12] codecs, there are others,
[00:32:16] they're nowhere close to where
[00:32:19] background agents are going because
[00:32:21] they're single threaded, right? They're
[00:32:24] very heavy. So they spin up a full
[00:32:27] Docker container behind the scenes. You
[00:32:29] have to think in servers.
[00:32:31] And again, as a software engineer, I
[00:32:35] don't think that way when I'm in a
[00:32:37] coding session. I think they'll be
[00:32:39] better for what I call like maybe the
[00:32:42] scripts or maybe some research uh type
[00:32:46] you use cases. It's less complicated
[00:32:49] work. A lot of the work that I do, oh
[00:32:52] man, I have to have my hand on the wheel
[00:32:54] with this agent.
[00:32:55] >> It can go off the rails very easily.
[00:32:57] Yeah,
[00:32:58] >> I constantly introduce scripts as Camden
[00:33:01] was talking about that help it correct
[00:33:04] itself. I'm running tests all the time.
[00:33:08] It's very low level. I would never trust
[00:33:11] a background agent to be able to do that
[00:33:13] because my expertise is too far away
[00:33:16] from what that background agent is
[00:33:18] doing.
[00:33:18] >> Yeah.
[00:33:19] >> That said, I think we will quickly
[00:33:22] evolve into this place where it's not
[00:33:25] just one background agent. So think
[00:33:27] every background agent right now is
[00:33:29] trivial. It's an agent running in a
[00:33:31] Docker container that's run by a
[00:33:34] temporal work, right? If you don't know
[00:33:36] what that is, go take a look. Temporal
[00:33:39] just manages this stuff in the cloud.
[00:33:41] Stuff's been around for a while. It's
[00:33:42] not magic. That's what Open AI uses.
[00:33:46] We're going to get to the place where
[00:33:48] you'll interact as the human with one
[00:33:51] agent.
[00:33:52] >> Behind the scenes, there'll be a hundred
[00:33:53] agents. That's when it gets interesting.
[00:33:56] We're still probably 18 to 24 months
[00:33:58] away from that. It's going to be very
[00:34:00] expensive,
[00:34:01] very expensive, but that's where it's
[00:34:04] going. And then each of those 24, 50,
[00:34:08] 100 cloud agents will help se
[00:34:11] self-correct.
[00:34:12] You'll still have to bring kind of your
[00:34:14] mental model of where that work is
[00:34:16] going, but you'll be able to tackle more
[00:34:19] complicated tasks. And so the humans
[00:34:22] will have to learn how to delegate, how
[00:34:26] to package work. We're all going to
[00:34:28] become project managers, which is great.
[00:34:29] I look forward to that future, but it's
[00:34:31] it will change. And I think that's the
[00:34:34] thing that nobody's talking about yet.
[00:34:36] >> Will will we have to learn how to do
[00:34:38] that or will they become will they be a
[00:34:40] bunch of specialized agents? Like will
[00:34:42] there be
[00:34:42] >> Oh, yeah.
[00:34:43] >> Yeah.
[00:34:44] >> We'll have to learn. Agents can't bring
[00:34:45] the taste. Humans uniquely bring the
[00:34:48] taste of what qualifies as good code
[00:34:51] versus bad code from the human aesthetic
[00:34:54] because the human's the judge. LMS can
[00:34:57] judge themselves
[00:34:58] with objective measurements, but LLM
[00:35:01] can't tell. They can create art. They
[00:35:05] can't tell you what art is good.
[00:35:08] That's the difference.
[00:35:10] >> I I want to change my attitude.
[00:35:13] >> Sounds great.
[00:35:13] >> You can have it, Thorston.
[00:35:16] Yeah, but this is I I Yeah, I figured I
[00:35:19] that's what I wanted to say like the way
[00:35:22] of working with these things is
[00:35:24] different and it's I said this today to
[00:35:26] somebody else. Um they asked me what do
[00:35:29] you think about like the uh linear and
[00:35:33] oh you you tag an agent in a ticket and
[00:35:35] then it goes off and I'm like that feels
[00:35:38] to me like you're having self-driving
[00:35:40] cars by putting a robot behind a
[00:35:41] steering wheel. Like that's why still
[00:35:45] have the steering wheel like make the
[00:35:47] robot the car, you know, and like why
[00:35:49] create a ticket that looks like it was
[00:35:51] made for human then attach an agent to
[00:35:52] it and
[00:35:53] >> I think we're just seeing the start of
[00:35:55] this.
[00:35:55] >> We're still in the, you know, um
[00:35:58] horseless carriage, right? Age.
[00:36:01] >> Yeah.
[00:36:01] >> Yeah. the he maybe
[00:36:04] >> Camden what are your can can you
[00:36:11] I don't know the the thing that always
[00:36:12] stands out to me with background agents
[00:36:14] is like uh I think of kind of the the
[00:36:18] human in this relationship is like one
[00:36:20] of the tools for the agent and I think
[00:36:22] we underestimate like how powerful of a
[00:36:26] tool that is um and being able to
[00:36:31] provide provide that feedback loop to
[00:36:33] the agent is really really important
[00:36:35] still for keeping it on track. And
[00:36:38] that's that's one that like I don't know
[00:36:40] even if you try and automate it with
[00:36:42] hundreds of agents, you still need
[00:36:44] something that's providing that feedback
[00:36:46] loop. So if you can get agents to like
[00:36:49] fight against themselves to come to the
[00:36:50] best solution, great. Um I don't know,
[00:36:53] one thing that I've been trying to think
[00:36:54] about is like okay, so like security has
[00:36:57] like the Swiss cheese model, right?
[00:36:58] You've got a bunch of layers of cheese
[00:37:00] where the holes overlap and so there's
[00:37:02] no holes through the whole thing. I
[00:37:04] don't know if you guys have heard this,
[00:37:05] but I kind of want something like this
[00:37:08] for
[00:37:09] >> agents where if you have like this hund
[00:37:12] this fleet of hundred agents, they each
[00:37:15] have their own gaps in knowledge or
[00:37:17] their own perspectives on it. Um, so if
[00:37:20] you layer them together and build
[00:37:22] something so that they can kind of
[00:37:24] self-correct and cover each other's
[00:37:26] knowledge gaps, then
[00:37:29] I think that can potentially be an
[00:37:32] interesting model for kind of building
[00:37:34] this like self-correcting loop with uh
[00:37:39] tons of different agents. We talked
[00:37:41] about this a little bit with like kind
[00:37:44] of uh the the idea of model alloys,
[00:37:47] right? like the what we do right now
[00:37:48] with like the oracle where you're
[00:37:50] getting a different perspective
[00:37:52] >> and like you can't decide what's right
[00:37:55] but sometimes if you poke the agent from
[00:37:58] a different point of view like it can
[00:38:00] kind of see like oh no I was wrong here
[00:38:02] like I I should consider this way. So,
[00:38:06] part of me wonders if this fleet is
[00:38:07] actually going to be different models or
[00:38:10] like uh very different perspective or
[00:38:14] tuned agents, things like that. I don't
[00:38:17] know.
[00:38:19] >> Yeah.
[00:38:20] >> So, okay. So, I we started with my dumb
[00:38:23] man. So, then Mike knocked it out of the
[00:38:25] park. And then Camden, I think you kind
[00:38:26] of plus one it with like the tool is
[00:38:29] actually the human, which is like a nice
[00:38:31] that was also smart. Now I want to take
[00:38:33] us back to level down and that is so so
[00:38:37] we started with uh in Slack right and
[00:38:40] what Mike said made me think of this
[00:38:42] that we do have internally a version of
[00:38:44] Slack of AMP that runs in Slack and
[00:38:47] funnily enough like you tag AMP in a
[00:38:51] thread and you can say you know we had a
[00:38:53] really great example where somebody was
[00:38:55] talking about like where in the AMP
[00:38:56] codebase do we calculate the prices and
[00:38:58] whatnot and somebody I think it was
[00:39:00] Vincent was like hey AMP where do we set
[00:39:02] the prices in the in the codebase? And
[00:39:05] it came back with the perfect answer.
[00:39:07] And but the point is this was in Slack,
[00:39:10] so it was async. And you didn't wait for
[00:39:12] it. You got the Slack notification 2
[00:39:14] minutes later whenever it was finished,
[00:39:16] right? And the environment of Slack made
[00:39:20] the whole, oh, let's just kick this off
[00:39:22] and wait for its answer. This was built
[00:39:24] in the environment. Like the
[00:39:26] expectations were set from the start.
[00:39:27] >> And I think that's kind of
[00:39:29] >> I don't know. I think that's kind of
[00:39:30] what you were getting at Mike with like
[00:39:34] >> yeah the the way to work with this and
[00:39:36] expectations have to be completely
[00:39:37] different than than the pair the pair
[00:39:40] >> I think we um I heard this really funny
[00:39:41] thing that um humans go from um miracle
[00:39:44] to entitlement in about seven days
[00:39:47] >> and so it what what this means for this
[00:39:49] is like u background agents will see
[00:39:51] them as like a miracle and then we'll be
[00:39:53] excited that and we'll be okay with it
[00:39:55] being async and then we'll be entitled
[00:39:57] to it being faster and faster within
[00:39:58] about seven days from
[00:40:00] coming out. Um, I want to ask the chat.
[00:40:03] So, we've had some really great
[00:40:04] questions so far, but like please jump
[00:40:06] in with more questions here, what you
[00:40:07] all are thinking, how you're using
[00:40:09] background agents. I think that's going
[00:40:10] to be uh it's interesting for me to hear
[00:40:13] about. One one thing I'll challenge uh
[00:40:15] you on, Mike, everyone's being really
[00:40:16] nice, but that's my job to be the
[00:40:18] opposite. Um, is no. Uh, you said it's
[00:40:22] going to be really expensive. I I don't
[00:40:24] think so. I'm I'm just like internally
[00:40:25] an optimist and I and I believe in the
[00:40:28] power of things getting cheaper and so I
[00:40:30] I don't know that it's going to be that
[00:40:32] expensive. I think um you know people
[00:40:34] are going to run Kimmy 2 models or
[00:40:36] you'll be able to kick the background
[00:40:37] agents to stuff you're hosting or
[00:40:39] whatever. So I think that's that's one
[00:40:41] place I would challenge you.
[00:40:44] >> I hope it gets that expensive too.
[00:40:46] >> So I mean that's where we want it to go,
[00:40:49] right? Not everybody has
[00:40:51] >> the checkbook to to plunk down, but I
[00:40:54] think, you know, access to these tools
[00:40:57] needs to get in as many people's hands
[00:40:59] as possible.
[00:41:00] >> Yeah, agreed.
[00:41:02] >> Well, um Oh, go ahead, please.
[00:41:04] >> Which
[00:41:04] >> No, you're all good.
[00:41:05] >> I don't want to derail, but I heard this
[00:41:07] I don't I I heard this on a podcast
[00:41:09] where somebody was saying it's kind of
[00:41:11] amazing. You know, there's a lot of
[00:41:13] criticisms of the model houses and the
[00:41:16] prices and like these big deals and
[00:41:18] whatnot, but I think I don't know if
[00:41:20] they announced a new number yesterday,
[00:41:22] but uh Chad GPT has what, like 800
[00:41:24] million users or something or more, I
[00:41:28] don't know. And it's accessible in
[00:41:31] basically every language.
[00:41:34] And it can translate between every
[00:41:35] language. like it's a it's a lot of
[00:41:38] people have access to this and it it
[00:41:41] gets a lot more access to a lot more
[00:41:43] people with a lot of stuff.
[00:41:44] >> Yeah, those it feels like numbers don't
[00:41:45] mean anything anymore, but 800 million
[00:41:47] is a lot of people, right? Like how long
[00:41:50] did it take for Facebook to get to 1
[00:41:52] billion users or whatever it is now,
[00:41:54] right? Like across all of its platforms.
[00:41:57] >> When the movie came out, the the the
[00:41:59] movie came out, right? the marketing was
[00:42:01] like uh you don't make 500 million
[00:42:03] friends with without or whatever it was.
[00:42:07] >> So 500 million that was the big number
[00:42:09] when they when was it 2012 so long ago
[00:42:12] it was crazy.
[00:42:13] >> Um
[00:42:14] >> big number.
[00:42:14] >> Well cool. I want to just quickly sort
[00:42:16] of uh chat about one thing going on in
[00:42:18] the build crew universe. Um and so if
[00:42:20] you're if you're enjoying this and
[00:42:21] you're feeling like this is fun, I'd
[00:42:23] love to chat with other people about a
[00:42:25] agents and stuff. It's just nobody in my
[00:42:27] neighborhood cares or nobody in my
[00:42:28] normal life. That's how I feel. I I go
[00:42:30] talk to my neighbors and nobody cares
[00:42:31] about any of the stuff that I'm doing.
[00:42:33] Um, so every day in the build crew
[00:42:35] community, we have a daily standup. So
[00:42:36] at 10:30 a.m. every day, we are in
[00:42:39] there. People are sharing. We've got
[00:42:40] shout out Andrew who comes every single
[00:42:42] day and does an update on what he's
[00:42:44] working on. Um, but it's really fun. And
[00:42:47] so that's that's sort of the point of
[00:42:48] Build Crew is like there's a lot of us
[00:42:49] out here that are having fun playing
[00:42:50] with these tools, but we're terminally
[00:42:52] online behind our computers and we don't
[00:42:54] have other people to talk to. And so
[00:42:56] that's part of what we're trying to do
[00:42:57] here uh with Build Crew. So, go to
[00:42:59] buildcrew.te. Um, you get $100 in AMP
[00:43:01] credits if you want to try, but you
[00:43:02] don't you don't have to be an AMP user
[00:43:04] to join. We just want anybody to to come
[00:43:06] together. We want it to be the best
[00:43:07] community for um agent builders. So,
[00:43:10] just want to quickly shout out that and
[00:43:12] and point out our daily standups because
[00:43:14] they're they're actually really fun. Uh
[00:43:15] it's a cool way to to chat with
[00:43:17] everybody. Um Mike, you've you've
[00:43:21] crushed it so far. Like I'm I'm gonna
[00:43:23] vote for kicking Thorston off.
[00:43:25] >> Um and out of 10
[00:43:28] I promised I wasn't going to make fun of
[00:43:30] Thorston and then here I am. Um, so but
[00:43:32] you know it's your turn. I would love to
[00:43:34] hear sort of what your some tips you're
[00:43:36] working on, things you're doing. Sounds
[00:43:37] like maybe we'll be elixir adjacent, but
[00:43:40] um would love to hear your your coding
[00:43:41] tip for the week.
[00:43:43] >> Coding tip for the week. Um,
[00:43:46] so when you're building, I am a huge fan
[00:43:51] of sitting down to think through I mean
[00:43:53] I get the thor you're talking about
[00:43:54] specs. I go back and forth on specs. the
[00:43:57] AMP Oracle is really effective and I
[00:44:00] will often defer to that. Hey, use the
[00:44:03] Oracle and just get going
[00:44:05] >> versus hey, if that doesn't work, I'll
[00:44:07] I'll take a step back. I'll take a deep
[00:44:09] breath, write a spec. I'll review the
[00:44:11] spec, but it feels like it's a little
[00:44:12] bit slower.
[00:44:14] Now, I have been when I sit down to come
[00:44:17] up with a task, come up with a thread, I
[00:44:20] think through how will I know how to
[00:44:23] prove this is correct or that what I
[00:44:25] want, the outcome that I want. beyond
[00:44:27] just your basic unit tests. And um that
[00:44:32] can take the form of a lot of different
[00:44:33] things. It can be a script like Camden
[00:44:36] is talking about. It can be logs that
[00:44:39] shows the agent that it's performing as
[00:44:42] expected and I'll think through that and
[00:44:46] treat that as a first class citizen in
[00:44:48] the thread that I'm building.
[00:44:49] >> And again, there's there's goes back to
[00:44:52] those different modes. When I start a
[00:44:54] thread, I try to write the thread and
[00:44:56] construct the thread to operate as long
[00:44:58] as possible. So maybe I'll write a spec,
[00:45:01] maybe I won't. Use the oracle, figure
[00:45:03] out a plan, execute the plan with sub
[00:45:05] aents.
[00:45:07] So this is actually my one beef with
[00:45:09] AMP. You should never be able to run a
[00:45:11] sub agent in parallel ever. That messes
[00:45:14] things up again.
[00:45:18] >> I'm listening. I Okay, I'm on your side,
[00:45:21] right? What do you think?
[00:45:23] >> Wait, you Wait, you're saying you don't
[00:45:26] want to run them in parallel?
[00:45:27] >> No.
[00:45:28] >> Why not?
[00:45:29] >> Most of the time I've tried oftent times
[00:45:32] the context gets mixed up with one
[00:45:34] another. I use sub aents to sort of
[00:45:38] carve off a piece of work and execute it
[00:45:40] sequentially. So now all of my agents MD
[00:45:43] have always execute agents se
[00:45:46] sequentially and build on the previous
[00:45:48] output. It can't. AMP doesn't bring the
[00:45:51] results of the sub agent back into the
[00:45:53] main thread. Just pops off to the next
[00:45:55] one. So, it's kind of like a delegated
[00:45:57] to-do list, which is great,
[00:45:59] >> but rarely it works out. It's a foot
[00:46:02] gun.
[00:46:02] >> There's no isolation.
[00:46:03] >> You use it for context isolation rather
[00:46:06] than like Okay,
[00:46:08] >> cool.
[00:46:10] >> Which
[00:46:11] >> Yeah,
[00:46:11] >> I'm on your side. I'm I'm
[00:46:13] >> good reason for this. I I think what I
[00:46:16] see in the wild, what people do with sub
[00:46:18] agents is
[00:46:19] >> it's strange.
[00:46:21] >> It's it's an easy one to get in trouble
[00:46:24] with. So
[00:46:25] >> yeah,
[00:46:25] >> I do have a thread I could show. Yeah.
[00:46:27] Um and I'll first start off a little
[00:46:30] plug. I do a lot of open source work.
[00:46:32] You can check me on GitHub. I am
[00:46:35] building a elixir agent framework. I
[00:46:37] know there's a lot of agent frameworks,
[00:46:39] but we're building an a a if you
[00:46:42] understand the power of the bean and
[00:46:44] what elixir can do by operating on the
[00:46:46] Erlang virtual machine, come join us.
[00:46:48] That's all I'll say about that. But I um
[00:46:51] I'm on a side quest right now to build a
[00:46:54] LLM client in Elixir. Um, and one of the
[00:47:00] things that I'm doing is I needed to be
[00:47:04] able to prove that this LLM client works
[00:47:08] against all the LLMs that I wanted to
[00:47:10] operate against supporting, you know,
[00:47:13] reasoning tokens, supporting usage. And
[00:47:16] so this is that learning that I
[00:47:18] expressed early on of I'm doing live
[00:47:21] fixture tests. So, I'm hitting the LLM
[00:47:23] APIs and I taught AMP how to fix itself
[00:47:27] through this cycle via some custom
[00:47:29] tooling that I wrote. These threads take
[00:47:32] >> Wait, can you can you bump Can you bump
[00:47:34] the font size on this?
[00:47:36] >> But this is while I was
[00:47:38] >> Okay.
[00:47:38] >> kicking off one of these hour and a half
[00:47:40] long threads on Saturday. I get bored,
[00:47:42] right? This is the other problem we
[00:47:44] don't talk about. I get bored because
[00:47:45] I'll all this intense work kicks
[00:47:47] something off and then I just need to go
[00:47:49] twiddle my thumbs or go do something
[00:47:51] else.
[00:47:52] >> So I
[00:47:54] >> opted to see if this live API technique
[00:47:59] would work up against a project that I
[00:48:03] had. So I'm a big fan of fly.io.
[00:48:06] >> Mike, can you make it yet bigger,
[00:48:08] please?
[00:48:08] >> Yet bigger. All right.
[00:48:10] >> Yeah. So you see the white in my beard.
[00:48:11] It's I just
[00:48:12] >> There we go. How's that? Thank you. Uh
[00:48:15] Pocomomas. Yeah.
[00:48:16] >> Yeah, that's good.
[00:48:17] >> Um I have a Elixir client that reaches
[00:48:21] out to the fly API and spins up
[00:48:24] infrastructure. So this is starting and
[00:48:27] running servers in the cloud. Something
[00:48:31] instinctually, right? I should not be
[00:48:33] doing this with the live credit.
[00:48:36] >> That's a little terrifying.
[00:48:37] >> This is uh you know, they said years
[00:48:39] ago, you're never supposed to get in a
[00:48:41] car with a stranger. where you never use
[00:48:43] your in your credit card online. You
[00:48:45] never take candy from anybody you don't
[00:48:46] know. And yet we get in an Uber. We buy
[00:48:49] stuff online and we take candy from
[00:48:50] people all the time. This is the version
[00:48:52] of that for me. So I opted to write a
[00:48:56] spec and see if I could oneshot this.
[00:49:01] Took about 30 minutes. Oneshotted the
[00:49:05] entire package. It was a couple thousand
[00:49:07] lines of code. But then I want to just
[00:49:10] again this is my sub aent technique. So
[00:49:14] in this case I did write a spec. I said
[00:49:16] review the spec fully implement it use
[00:49:19] the oracle break it into sub aents. Sub
[00:49:21] aents should sequentially implement a
[00:49:24] step that builds on the previous step
[00:49:26] and then off it went. So see the new
[00:49:30] GPT5 Oracle really good. I like GPT5 a
[00:49:34] lot.
[00:49:36] >> There you go. There's this
[00:49:38] >> this is recorded. Let's go.
[00:49:40] >> So, here we go. Phase zero. This was
[00:49:42] again starting from a fresh new project
[00:49:45] >> through a series of eight phases fully
[00:49:49] implemented.
[00:49:51] >> That's crazy. This is Wait, how do you
[00:49:54] prompt it that it reliably does like the
[00:49:56] sequential? Is this in your agents MD or
[00:49:59] is it up there?
[00:50:00] I have pretty pretty dialed in agents MD
[00:50:03] from my other projects and open source
[00:50:05] projects which I could pull up and show
[00:50:07] you
[00:50:07] >> but no this was fresh this was like
[00:50:11] >> would you be up for publishing that as a
[00:50:13] gist so the people can check it out
[00:50:14] >> absolutely not right now obviously this
[00:50:16] is yeah this thread is public and I can
[00:50:19] share it later
[00:50:20] >> oh I meant your
[00:50:20] >> this wasn't even part the part that I
[00:50:23] wanted to show is
[00:50:25] >> I wanted to see if it worked so what did
[00:50:28] I do I threw in an API
[00:50:32] And I said, I want to I want you AMP to
[00:50:35] build me a live integration test
[00:50:38] >> that uses my API key
[00:50:41] >> that uses curl to introspect into fly to
[00:50:46] make sure this all works because I want
[00:50:49] to see the infrastructure coming online.
[00:50:52] And the the the API, I've used it
[00:50:54] before, has some nuances because it
[00:50:57] takes a little bit of time. um it's it's
[00:51:00] very fast but it does take time for
[00:51:02] these machines to boot up right it's
[00:51:04] infrastructure and so start by building
[00:51:07] one small test this is the iterative
[00:51:09] exploratory part so I again I want to
[00:51:11] call out the working style difference I
[00:51:14] went from here's an entire project plan
[00:51:16] this is me being project manager for
[00:51:18] what you saw up top I know exactly what
[00:51:20] I want to do I've designed it I've
[00:51:22] architected it and now now we're going
[00:51:24] to go on an adventure because I don't
[00:51:26] know I want you to figure this out
[00:51:30] and it wrote out an entire integration
[00:51:33] case. This is now getting into Elixir
[00:51:36] specifics, so the audience doesn't need
[00:51:38] to care about this as much. Built it all
[00:51:40] out and then ended up writing six live
[00:51:45] integration tests to fully test that it
[00:51:49] works and found several bugs, fixed
[00:51:50] them,
[00:51:52] and I spent time doing that while I was
[00:51:54] waiting.
[00:51:54] >> Nice. And I went from nothing to
[00:51:57] published repository live on the Elixir
[00:52:01] package manager which is called Hex in
[00:52:03] about an hour.
[00:52:04] >> Wow, that's sweet.
[00:52:06] >> So that was my one of my projects.
[00:52:09] >> And in that hour it booted up the
[00:52:11] machines, tested against them, and tore
[00:52:13] them down.
[00:52:14] >> Here you can see here's the test image.
[00:52:16] That's a variable CPU 256 megabytes of
[00:52:20] memory. opens up two ports and then I
[00:52:25] committed these tests
[00:52:28] so I can run them again. So here's the
[00:52:30] six tests. Create the app with a readme
[00:52:35] with a shell script for running them. So
[00:52:37] all I have to do is drop in the key and
[00:52:40] I can rerun them and off it goes. So
[00:52:43] that's
[00:52:44] it's again it's a it's an elevated style
[00:52:47] of thinking is the message if you're
[00:52:49] building with AMP to take away. I've
[00:52:51] gotten to the point I've used this stuff
[00:52:52] enough now that I always try to go up a
[00:52:54] level and think how can I direct and
[00:52:57] guide the agent
[00:52:58] >> to self-correct itself. That's how you
[00:53:00] get the really long threads
[00:53:03] >> and in code that's easy. It's unique to
[00:53:06] every project but if you can do that
[00:53:09] >> you're off to the races.
[00:53:11] This is using and spending a lot of
[00:53:13] money with AMP.
[00:53:15] >> This is a thanks for spending all your
[00:53:18] money with AMP. Um b this is really
[00:53:19] gratifying to me because I I always feel
[00:53:22] like I'm being lazy when I'm just like
[00:53:24] here you just do it right and like this
[00:53:26] is obviously the more elegant way of you
[00:53:29] just do it. Um but it's it's good to see
[00:53:31] that like that is that's the right
[00:53:33] direction. Um but I do think more people
[00:53:35] should do this where you're you're just
[00:53:38] um I really like that sequential
[00:53:39] ordering.
[00:53:40] >> Yeah. Um, and so if you if you could
[00:53:42] publish your agents MD as a gist and we
[00:53:44] could share that in the Bill Creek
[00:53:45] community, that would be awesome because
[00:53:46] I think
[00:53:47] >> I really want a um like a drop down of
[00:53:51] I'd like to be like this didn't work.
[00:53:52] Okay, let me use Thorston's agent MD and
[00:53:54] see if that'll that'll work. You know
[00:53:56] what I mean? Or be able to like learn
[00:53:58] from other people's.
[00:53:59] >> Yeah. I mean, you look up
[00:54:01] >> I think I
[00:54:03] the the cue just to jump the you know
[00:54:06] the cue for what Mike is describing is
[00:54:09] if you find yourself copy and pasting
[00:54:12] stuff to the agent then you should start
[00:54:15] to think like how can I automate this
[00:54:17] and it's this you know like in this case
[00:54:20] you would run the script and then get
[00:54:22] the output from whatever fly.io O and
[00:54:24] say, "Oh, it didn't work." And then you
[00:54:25] paste it to the agent and then it goes
[00:54:27] and tries again and then you try again.
[00:54:29] But instead, you should think, "How can
[00:54:31] I make the agent get this feedback about
[00:54:33] what it's doing?" And talked about this
[00:54:36] last week or two weeks ago with like
[00:54:37] that I use T-Max for this in our CLI
[00:54:39] application because it can see the whole
[00:54:41] screen
[00:54:42] >> and then in web you can use Playride and
[00:54:45] you know TDD and whatnot. Um but yeah,
[00:54:50] what's that question? Yeah, we had this
[00:54:51] this seemed pretty relevant to what we
[00:54:52] were talking about.
[00:54:54] >> Yeah.
[00:54:55] >> Mike, do you want to go for it? You're
[00:54:57] this was your section.
[00:54:58] >> Um I forget the name of the study, but
[00:55:01] this was recently done. I think the the
[00:55:03] you know, if the commenter wants to
[00:55:05] illuminate what they were kind of
[00:55:06] talking about, but every time you have
[00:55:08] one agent that's 95% accurate and you
[00:55:11] pass off or either you have the another
[00:55:14] agent correcting the first agent, the
[00:55:16] accuracy gets worse. And there are
[00:55:19] currently studies being done on this and
[00:55:21] the name is escaping me. I think it
[00:55:23] starts with an M for how long an agent
[00:55:27] can operate and run without human
[00:55:31] intervention
[00:55:32] based on these accuracy numbers and it
[00:55:36] yeah it degrades faster than humans
[00:55:38] because of course they compare it
[00:55:40] against human work. And I think that's
[00:55:43] that's the that's the message. What's
[00:55:44] the bar?
[00:55:46] >> What are we ultimately trying to compare
[00:55:47] this to? Yeah,
[00:55:49] >> we're measuring agents against human
[00:55:51] work.
[00:55:53] And as we do that, we have to define
[00:55:56] what human work is. This is my issue
[00:55:58] with AGI is coming. Well, everybody,
[00:56:01] >> most people who say AGI is coming never
[00:56:04] define what that looks like because it's
[00:56:07] very difficult to define and it has to
[00:56:09] be
[00:56:11] >> held up, mirrored against what human
[00:56:13] work looks like. And human work is
[00:56:16] notoriously difficult to define. Very
[00:56:18] very difficult. There's no uh consistent
[00:56:22] definition of what work is.
[00:56:27] >> Yeah, there was um so yesterday Graeme,
[00:56:30] you mentioned this the the uh what's it
[00:56:32] called? Agent SDK from OpenAI came out
[00:56:34] and I don't know if any of you have
[00:56:36] looked at it, but it's
[00:56:38] >> um they have examples in there and yeah,
[00:56:40] I don't want to say I don't want to make
[00:56:41] fun of examples because there are
[00:56:43] examples, right? But they have examples
[00:56:45] where this is an agent um and they
[00:56:49] define the concept of handoffs which is
[00:56:52] uh you have sub agents basically or one
[00:56:54] agent can hand off the control to
[00:56:56] another agent based on when it thinks it
[00:56:58] should and the examples they have is
[00:57:01] >> you're a financial analyst or something
[00:57:03] and here's a PDF and you can hand it off
[00:57:05] to like the statistician or you know
[00:57:07] something like five other things or the
[00:57:09] PDF reader or something and I was
[00:57:11] reading through the code and I was kind
[00:57:14] of like this is you're just multiplying
[00:57:17] like
[00:57:19] vague stuff and if this this I want to
[00:57:22] see this in a production system you know
[00:57:24] like where you throw PDF at like five
[00:57:26] connected agents then you hope to get a
[00:57:29] result out of
[00:57:30] >> and
[00:57:32] I think that's going to be I don't know
[00:57:33] I think it also
[00:57:35] >> you also like documentation goes out of
[00:57:37] out of
[00:57:38] >> step so quickly you also there's an
[00:57:39] element of shooting where the puck is
[00:57:41] going right like this is what you can do
[00:57:43] with this stuff. Giving it to people an
[00:57:44] opportunity to push in that direction
[00:57:45] because if you just say what's available
[00:57:47] right now, I don't think that's a the
[00:57:49] right way to do it either.
[00:57:50] >> I have to wrap us up. I have a a thing
[00:57:54] that I
[00:57:55] >> That's my job.
[00:57:56] >> Yeah,
[00:57:58] you were just jumping over.
[00:57:59] >> But but the
[00:58:01] >> See you next week, Mike.
[00:58:02] >> The number one skill. So I part of what
[00:58:05] I do I do a lot of open source. I have a
[00:58:07] full-time job. uh lead and have the
[00:58:09] privilege of like pouring into another
[00:58:12] team of engineers using AMP, using
[00:58:14] cursor and teaching them these things.
[00:58:16] The number one skill that I teach them
[00:58:18] is not prompting. It's not how to use
[00:58:22] the agents, not the advanced coding
[00:58:23] techniques. It's leadership. And I know
[00:58:27] this is maybe a little bit silly, but
[00:58:30] delegation, the mechanics of delegation
[00:58:32] that I've learned over my 25 year
[00:58:34] career, same exact thing when it comes
[00:58:37] to agents.
[00:58:38] So, anything I can do
[00:58:40] >> to help my team level up with the basic
[00:58:44] skills of leadership, humanto human
[00:58:46] interaction that's been around for
[00:58:47] thousands and thousands of years, all
[00:58:50] applies to this new world. And I think
[00:58:53] that's the a bit of the missing piece.
[00:58:56] It all applies. And the better we get at
[00:58:59] that, the better builders we're going to
[00:59:00] be, the better agents we're going to
[00:59:02] guide and create, and the better
[00:59:04] software we're going to make. And
[00:59:07] to me, that's my bottom line. It's
[00:59:10] leadership is the number one skill to
[00:59:12] learn right now because we're going to
[00:59:14] end up delegating to agents all day
[00:59:16] long.
[00:59:17] >> Thank you for leading this call, Mike.
[00:59:19] Um,
[00:59:23] >> thanks for having me on, Graham.
[00:59:24] >> No, this is great. I think um I really
[00:59:26] appreciate I knew you were going to be a
[00:59:27] great go guest. Um, and I think that
[00:59:30] that was a really great point to sum
[00:59:32] this up on. But um, Camden and Thorston,
[00:59:34] thank you so much. Mike. Um, we are
[00:59:36] we're going to wrap up for anybody who
[00:59:38] wants to sort of be in a conversation
[00:59:40] like this. We host the the build crew um
[00:59:43] uh what do you call it? Stand up every
[00:59:44] day at 10:30 p.m. So, I'll be on there
[00:59:46] in 30 minutes if you want to join now
[00:59:48] and get in the Discord. Um Mike, maybe
[00:59:50] you'll join and and give a little post
[00:59:51] show if you've got some time.
[00:59:54] >> Um but I just want to give you one the
[00:59:56] sort of last thing here is like where
[00:59:57] where can people find you? What what do
[00:59:59] you want people to direct you? Yeah, I'm
[01:00:01] pretty active on X. Uh, my cost settler,
[01:00:04] you know, find me there, say hello,
[01:00:06] follow my projects, let me see what
[01:00:08] you're doing. I'd love to hear and just
[01:00:10] hear the stories of how people are using
[01:00:12] this stuff. And uh, yeah, thanks for
[01:00:14] having me on.
[01:00:15] >> Awesome. Appreciate it. Thanks everybody
[01:00:16] for joining. See you all next week.
[01:00:21] Oracle ind.
