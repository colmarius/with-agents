---
title: "Hacking pi, the little coding agent that could, using pi"
summarySlug: "coding-with-agents/hacking-pi-using-pi"
sourceUrl: "https://www.youtube.com/watch?v=dWlhu0aWCb8"
videoId: "dWlhu0aWCb8"
capturedAt: "2026-08-28T08:43:24.821Z"
channel: "Mario Zechner"
language: "en"
kind: "auto-generated"
durationSeconds: 8000
---

## Transcript

[00:25:05] Do we get audio now? No. Oh, yeah. Now we should get audio. Ah, god damn it. So, I talked forever [laughter] without it being recorded. I'm such a professional. Well, thanks for the hint. Uh, anyways, what we're trying to implement is uh an issue from the issue tracker. And before that, I did a full walkthrough of the code base, [laughter] which is now just a screen recording. I'm amazing. Uh, anyways, let me get back to the to the [ __ ] thing. Thanks for mentioning that. Does the entire line? Yeah, that's a good question. Just check what's happening.

[00:25:59] Oh, god damn it. Yeah, basically hacking on my coding agent Pi using my coding agent Pi which you can see here [snorts] and basically just going through a bunch of these issues here. Um trying to tick them off. Um currently we are working on control command backspace to delete things. Interestingly enough, so I'm currently trying out what Visual Studio Code is doing. So in VS Code, command plus backspace deletes the current line. Does it delete the current line? No.

[00:27:03] Um, deletes everything to the left. cursor option plus backspace point to cursor and I just explained earlier I'm not using my voice transcription thing because I get hoarse doing that. So yeah cursor with white space and punctuation stop characters. What happens if we do this at the chip? We do just smokes.

[00:28:02] Makes sense. Yeah, that's the question. What are the escape sequences for keys? Word boundary definition white space that's not alpha numeric or underscore Yeah. I don't know actually. Yeah, let's look at the escape sequences. I guess the best thing we can do is just set up a minimal program in TUI slash test slash keycodes.ts

[00:29:14] um that sets up a basic TUI with a simple component that receives the inputs when focused [snorts] and that just logs out the the key codes that get emitted. Does it make sense? That way I have something I can use um to type things [snorts] and report uh the key codes to you. Well, using transcription now because I'm I'm lazy. Do we test key tester? [snorts] God damn you, Claude. You [ __ ] [ __ ] Um, read What's it called? Packages.

[00:30:30] Of course, it does have set focus. What the [ __ ] are you going on about? Yeah, it's actually pretty amazing how much faster this is than Claude Code. Like for the simple read here, it would have probably waited forever. Uh what I still need to do is um pass through. No, actually that I have what I still need to do is pass through um intermediate tool results so they can stream into the UI as well. But honestly, I don't care too much usually. Um why would you do this? Perfect key is working. Now I can run it. Okay.

[00:31:27] out. Oh, that did a thing. Uh, come on. Backspace. Oh, this is bad. Regular backspace. Okay. Oh, now we also need alt. [ __ ] is alt on here? Well, alt is basically option. So, command control. Are those the same on Windows? I don't remember. It's been a while. I guess you would expect control on Windows and Linux instead of command. Well, let's see. [clears throat] I wonder if it's the same in Ghostty. It should be the same in Ghostty

[00:32:39] backspace. Is this the same? Nope, it's not the same. Amazing. So, I probably mistyped something. Oh god, I can't exit this. This is amazing. Kill terminal. Uh, chip. Let's see. Let's test it here again. Command backspace. Option backspace. Oh my god. It's actually different. How in the [ __ ] Oh, Jesus Christ. This is terrible. Yeah. Yeah, I guess that makes sense that it's

[00:33:45] based on character codes and goes the option back space is keep back the proper option sequence same as it the same it's the same. So I guess we need to handle both of these. [clears throat] [snorts] Yeah, let's see. terminal app. [laughter] Yeah, that won't work. Um, make it bigger. Command back. Oopsie. Oh, command backspace does nothing in the terminal app. Just freaks out. Control backspace. It's the same. Interesting. Okay, for good measure, let's try a

[00:34:50] term. Interesting that there's a difference here. I would have expected they all handle keyboard keyboard input events the same. Uh, command backspace does nothing. Interesting. Option and control. Interesting. Um, let's see. This item does this nothing. So, I guess let's see. Actually, I need to I I need to make this I need to do this uh in a more sensible way. Okay. Command backspace does nothing. Option backspace is this and control backspace is this. Okay.

[00:36:19] Um, let's see. Command backspace does nothing. It's amazing. Option and control emit the same thing. Oh my god. This is not going to be Ah, Jesus. Two. And Ghostty. Where is my Ghostty command? Backspace. Backspace. Yip. Chip. God damn it. How can we So um when you develop or work on Pi, you

[00:37:34] should start a new session in Wait, why are there two sessions? Oh yeah, you should run npm run dev in the background in another session. Um, so everything gets rebuilt all the time. Then it can just use things immediately which includes Pi itself. So I can restart this session with the new hotness. Let's see. Let me organize that. Nothing. Nothing. Option backspace. Control backspace. Yeah, this is totally [ __ ] because terminal is bunch of [ __ ] Ghostty 21 doesn't probably terminal photo. Yeah, that makes sense. Optional spec space. I turn two.

[00:38:28] Yeah, that's so [ __ ] up. This is [ __ ] up. Yeah, let's go with the Unix stuff. What's the traditional X for these operations? So, let's see. Option control.

[00:39:18] Does this work? Yeah, I guess this works. Man, terminals suck [laughter] line deletions to beginning of line to end of line. You already have this. Well, actually I don't have delete cursor to end of line.

[00:40:09] I have it delete the whole line. Character deletion. Backspace character before cursor control on the cursor. >> [snorts] >> Yeah, let's actually see if these work.

[00:40:57] Alt option back ghost. Let's see. Uh, control V. Wow, this is all kinds of [ __ ] two. Well, this at least seems to be consistent.

[00:41:47] Ghostty. Yep, that's consistent. Just hate [ __ ] control V uh W. That's consistent. Control U delete to start of line. Control U 15. Yeah, that seems to check out. And alt backspace 7F 7. God damn it. This is stupid.

[00:42:37] Why would you get an escape before the 7F? Yeah, I suppose doesn't. What do we get for 21 15? Yeah. God damn it. [snorts] Actually, let's do something crazy. Kill kill kill terminal. Close terminal. New terminal. And let's see what Claude actually does. Test test. I guess it does nothing. Okay. Control W does delete the last word. Oh, command backspace deletes the whole line.

[00:43:39] Let's see what this does. Oopsie. Option backspace. Hey ho. Oh, this is [ __ ] stupid. Jesus Christ. Text base controls. Delete to start a line. Let's see if this actually works. I doubt it works. Control U. That works. V. Okay. That's consistent for control, I guess.

[00:44:32] Control U. Yeah, we already checked that. Whoops. Ah, got we are currently trying to add proper key sequence [ __ ] So, control U. Oh, wow. That just [ __ ] itself. Control U. Interesting. [snorts] Um No.

[00:45:39] Who? Who is going to Vienna tomorrow? Who is going to Vienna tomorrow software at odd? You are the Coffee machine guy. Ah, okay. Yeah, I'm not in Vienna. You have control from the cursor to the end of line. Yeah. So, control key. Do we get

[00:46:49] this one? That's good. So what you're doing in bean see a move to start confirm. Oh, nice. Did you check out the 39 C3 program? Anything worthwhile in there new punctuation?

[00:47:51] Yeah, I guess that's fine. Keep going through of an American underscore. So, I actually wonder if that's the Oh, god damn it. I like how control U does nothing. Um, alt backspace. Yep. Yep. Okay, that sounds fine. [snorts] Do we get all backspace? >> [snorts] >> FL with colleagues at the bundle office. Ah, interesting.

[00:48:41] Are you related to the the vandal guys? I mean not biologically but are you member of the party start line delete the new line previous line only deletes in current doesn't cross boundaries yeah I wonder if that is what we want I mean Claude is probably not the best thing to test here maybe should try Codex uh tip. Control U. Yeah. Control U deletes. [snorts] No actually control. Okay.

[00:50:02] Oh [ __ ] member of the party. Interesting. Um, [clears throat] what's the latest and greatest? Oh, Jesus, my [ __ ] finger. Um, what's the latest and greatest developments at the bundle? Do you know? I suppose it's small enough so you know most of the people there.

[00:50:57] I had some contact with them when I did the grocery store price stuff. They seemed pretty nice and capable. [laughter] Yeah. Well, that was fun. It was wasn't just me. It was also Shena. props to her the the actual linguist to start offline delete to end offline if cursor at last position in line merge with next line. Oh my god.

[00:51:46] First press. I need to fix this [ __ ] Why is there world test cru second press? Yeah, previous makes sense. Control Kest press. Yep, that makes sense. Delete from Okay. Okay. I also want to see if we [cough] if [clears throat] you all checked in.

[00:52:42] Okay, that's we can ignore the key tester. Let's keep the key tester. Starter line delete work backwards. line. Change from delete entire line to delete from cursor to end of line. Delete new line. Already implemented to start with to end and parent. Clear and exit. Backspace. Delete characters. Delete key. Delete characters. Forward. Good. This is not going to work. I'm definitely going to have to go in and fix it myself. [laughter] Claude is really bad with stuff like that.

[00:53:30] Maybe I should ask GPT-5.1 and see if it can fix it. But let's let Claude work for a little. Let's see what it does. Read the full [ __ ] file, my dude. Because usually when it tries to guesstimate which lines to read, it doesn't read all the important bits. So then I intervene and tell it to read the entire [ __ ] thing. And as you can see, the editor component is humongous. Editor component being this little [ __ ] here. I know, Peter. The good thing is I can switch model anytime I want. But this is much faster than Codex. So I'm good.

[00:54:34] Okay. Seems like the checks passed sort of. [sighs] Yep. Looks good. Oh, come on. And yeah, that's the next thing. I need to implement queuing. [laughter] It's in the core. I just need to wire it up in the UI. But yeah, perfect. Now, let me create a summary. I don't need the [ __ ] summary. Go [ __ ] yourself. So, npx tsx packages/coding-agent/src/cli.ts. Now we are running off source. And now let's see. I'm pretty sure this is [ __ ] This is [ __ ] Control U. Well, this is [ __ ] Control. Jesus. [ __ ] W.

[00:55:27] Hey, this works. I'm impressed. [ __ ] I don't think this is what I want. Let's see. Let's Nope. Definitely not good. Oh god. Um Oh, wrong one. Yeah. Nope. Not good. [laughter] Don't fear missing compaction. you have actual proper context usage stats down here. It's not so bad. And as I said, you can always switch to Gemini and just let it compact your 200k of context.

[00:56:18] I'm very old. I'm 120 years old. Okay. God damn it. I hate going in and having to fix this myself. So, let's try. The problem is really I need to describe how it doesn't work [laughter] to the [ __ ] agent because I can't close this specific loop. I mean Ola it should come back for me. Yeah, possibly. Um okay, let's just switch to GPT. Um GPT. Do we have 5.1 in here already? Yeah. Didn't they release more of these? Oh, I can get them through OpenRouter. Why don't I have 5.1 Codex in the OpenAI list yet? God damn you decks. Is your model stuff not up to date?

[00:57:15] I'm using this and OpenRouter stuff and other model provider indices to get the models that available from each provider. Uh GPT-5.1 Codex Mini. Oh, only exposed by GitHub Copilot. What the [ __ ] is this [ __ ] Yes, the computers. I started at age 12. I think Peter started earlier than me. Could be wrong. Um, yeah. Cool. Okay. So, we could get it through Azure or through OpenRouter. Oh, [ __ ] it. God damn it. Let's just go with 5.1. Doesn't matter. Okay.

[00:58:09] Let's revert this [ __ ] What the [ __ ] is this? Editor. Well, we were poor as well. [laughter] Dad took it all from the office. Yeah, your dad is awesome. My dad used to steal u metals and nets and and basic materials so he could build us a tennis court and [ __ ] like that. Yeah. Organize borrow, right? Paying it forward. Um delete to enter. So, my thinking is I'm just going to smack this.

[00:58:59] Why is there a modification to this [ __ ] Ah, that was um I guess I understand why free. Okay. Okay. So, let's see if GPT 5.1 does better. The changes you just made cuz it was broke. Okay, please fix properly dear GPT 5.1 maze balls. [clears throat] Wow, why is GPT 5.1 so fast? What the [ __ ] going on? [laughter] H, okay, I guess turning off thinking helps. Let's slow down before touching propos delete

[01:00:11] from start to current line. Yeah, that's what my framework currently uses. I guess I should enable thinking. Wow, what the [ __ ] This is so much text, man. Be more concise. Is change behavior also kept delete current line around and removed it to control. I jumped in boundary logic quickly without validating end to end again. So yeah, I modified behavior the new methods in one shot without first stabilizing just I did the right thing. Reverting use a nice GPT. I don't need to compact. I only use 11% of GPT 5.1's context. Now, this is my full session. [laughter] This happens when you have like a minimal [ __ ] harness. Uh, let's actually No, let's let's not use thinking. I hate it. The early issues. Okay. If the person want sugar or nuts, I need a better color for the component

[01:01:19] when it's in progress. Interesting. [snorts] Yeah, I can already tell that this is broken too.

[01:02:18] [laughter] What? GPT refuses to speak Croatian. Why in the [ __ ] would it do that? I mean, I know it probably also refuses slapping GPL headers on two files, but that's crazy. Handle forward delete. Yeah, this doesn't this doesn't look right to me. Wow, it's so [ __ ] wordy. Why in the [ __ ] is this so wordy? I don't care for all of this [ __ ] Why would you repeat back all the [ __ ] code to me? Um, let's see. [clears throat] Okay, this is a test. Control U. That seems to work. This is a test. Control K. This works. This another. So, Ctrl K. Yeah, this works.

[01:03:11] And then Ctrl K. Control K. Yeah. Okay. because in Codex is not worthy enough talks. Yeah, let me let me present to you my system prompt. Um see system prompt. It's probably main. Nope, wrong project. Main system prompt. System prompt build system prompt. Yeah, this is my system prompt [laughter] because why complicated when it can be small, right?

[01:04:08] So, open I use the system prompt. Did you like to reply because Australian event. Oh wow, that's [ __ ] up. Yeah, I guess Croatia is not a big market for OpenAI anyways. [laughter] Yeah, me too. Me too. I have thinking about none for years as well. Um, so yeah. Anyways, uh, let's see. Good. What was this what I wanted? Yeah, this was what I wanted. Okay, let's do this little piggy test. Let's see and compare how it works. Ah, god damn it. Control V. Nope, that's still wrong.

[01:04:58] Ah, god. Chip. So, I guess Claude and GPT-5 arrived at the same solution, which is equally broken, which is a maze balls. Uh now we need to describe what the brokenness is. Control. So we start at the end of the line. We control VW and it just smokes all the things. [laughter] It's crazy. Okay. Put cursor position behind. I think expected. Let's see. Control K

[01:06:04] should delete to the end of the line. Oh my god, what the [ __ ] just happened? I pressed command K, which is a [ __ ] it. Which deletes the [ __ ] scrollback buffer in Visual Studio Code. [ __ ] terminal. [ __ ] [ __ ] [laughter] Wow, it's really fast. This is crazy. What the [ __ ] I haven't I haven't tried 5.1 yet. I don't know when it came out, but this is nice. I like this. Uh why use a wordy? Write that before you know input. Okay, let's fix the Yeah, rest in peace indeed. We're just going to fix this in the agents file instead of the prompt because I don't want to [ __ ] with other people's workflows. [laughter] Keep your answers short and concise and

[01:07:08] to the point. And then let's restart the session. [clears throat] Um okay of words it please transcription app is perfect as well as well. Welcome to the shitty world of software. Is that what they have in the Codex system prompt? I wonder I'm pretty sure I won't find it like that. Rename system prompt schema. Nope. System prompt.

[01:08:01] Ah, okay. That makes sense. Oh, this there it is. There's a lot of words. Uh, let's see. Concise. The follow tone is concise, direct and friendly. Communicate efficiently. Dude, why is there no word wrap? What's this? Close symbols. Let's just go raw. Concise. Keep it concise. Be aware focused. Next steps. Okay. Yeah, I guess. Sharing progress updates. Yeah, I don't care. Yeah, I guess. Can you change the system prompt in Codex? I I guess you can. I mean, without recompiling. Um, hello. This is baked in, right? Nope. It's an MD file.

[01:08:54] Okay. Ah, yeah, this works. [laughter] Short version current behavior is too aggressive and leads across g. Uh, what I'll change for define works as Yeah, I don't. This is not good. My boy only to left with the cursor. Delete the run of characters to the left. This is [ __ ] up, dude. We just need to stop at white space or punctuation. Wearly need to define punctuation. God damn it. This was not what I wanted. Oh, [ __ ] [snorts] Editor. What was the line we used for testing? We'll do Let's do this one. So, if I control W. This is just redonkulous.

[01:10:03] Control W kills like all things chip control.W W and then we get describe. Um it skips over white space man. Interesting. No, it's a lot. I was keeping my boundaries only up to them. Boundaries are white spaceuation.

[01:10:52] Yes, [ __ ] do it. And now I wonder what happens here. Wow. Yeah, that's a lot of deletions. Yeah, this is not consistent at [laughter] all either. That's funny. Uh, can I get a No. Oh, wow. They have this. Okay. Yeah, I guess I don't remember how I can. Why the chat is actually still terrible. I'm not even sure if I ever chat it. Yep, it's terrible. That's why I built this little [ __ ] here, so I can see you all in a nice and easy to read way instead of the garbage you have on the [ __ ] website.

[01:11:46] Um, okay. So, back to this. [laughter] I did this. Yeah, this is super inconsistent as well. Look at what it actually deletes. What the [ __ ] So, I guess nobody implements this properly. So, this is good. I don't I I don't care in this case. Uh, what did you do? Yeah, can already see this is garbage as well. Uh, let's see. This is Yeah, this is this is what I like. Good job, GPT-5.1. Good. I like it. Please update the README. Actually be specific coding agent README accordingly as well as the changelog.

[01:12:44] Then [snorts] we just quickly check the diff. Yeah, don't care for this. We keep this models. I need to fix this eventually. key tester. We can keep this and let's wait. I haven't done anything for quite some time now. Yeah, at work as well. Like did you go full w coding at work? We're not disclosing where you work and what you do, but I I'd like to know what's this little piggy doing. Oh god, I need to speed up the checks. So I switched to TSGO for type checking and it's really good. It's like the only problem it is it has is that it doesn't implement more advanced things like decorators, but otherwise I 100% recommend TSGO to anybody who actually cares about types.

[01:13:46] At work I'm just reviewing and managing code, but in private I'm like, yeah, TSGO is really good. So at work, do you review and manage code by people or by code? No, by by code written by LLMs instructed by people that are your underlings. Programmable switch. What do you use the programmable switch for? I don't like web cutting. I'm yelling at Yeah, I'm also, as you see, I'm surgically yelling. I'm not at Peter's level of fully autonomous army that generates 100 million lines of code per day. I my brain is too small for that. Believe backwards. Yeah, let's read it here. So change deletes previous word delete from cursor to start file.

[01:14:46] Okay, flashlight. Yeah, I found that not to work for myself, not reading all the code. Um because eventually in production it just breaks down and then I'm back to step one. So yeah, Peter is just doesn't give a single [ __ ] But I'm not building any spaceships either. So any complicated products like Peter does, I build tiny little things that are easy to to read and don't have too many too many features because they also don't have any users. So that's why clever sometimes frame up, you know.

[01:15:37] Yeah, I'm not envying you, but you you'll get it done. I need to check actually. I I I checked statistics last week and it was briefly broken I think. Oh, need to relog in like I didn't get any insights and explorers broken and so on and so forth, but it seems to be back to working state which is nice. insights. Everybody who watches this must sign up immediately. It not good right now. Updated to next year 16. Yeah. Why would you do that? [laughter] Why would you update timeline? Actually, did I actually sign up or is this all the free [ __ ] we're getting from Peter?

[01:16:34] You should totally like Oh, I see. Where is it? I I can't go back to pricing settings. Oh, yeah. There's the pricing. Do you want to share any user stats? Do you do you have active users or is it basically still semi stealth mode, just a handful of people checking in all the time? It's pretty impressive. Like there's so much [laughter] stuff. I don't even know what half of it is, but friend. Yeah, friendmizer is nice. That one I checked out earlier. Ah, interesting. It's pretty cool.

[01:17:24] So, let's see. Uh, control K delete to enter. Crl C clear editor. Tap path completion. Enter. blah blah. Control delete. Yeah, we should all delete ourselves and then throw our computers in the garbage. Neat. [snorts] Oh, Peekaboo still a thing. Cool. I'm sorry. the stream crashes your fair phone. Yeah, [laughter] that's indeed an interesting bug. Um, so we still need uh delete. Oopsie. We still need delete full line, I think. What's the standard Unix key code for that?

[01:18:16] Kernel panic. That's pretty amazing. I suppose the GPU driver is [ __ ] up decoding the video and taking everything down with it comparison channel. Many people use control K to delete full line twice for custom delete line control. the way. Okay, this is a test and control. Yep. So, but it seems like Um, do we have

[01:19:38] Okay. Interesting. Well, then let's look at the user requirements. Alt backspace doesn't delete the word. Command control. Whoops. Command control back doesn't sentence actually. So control backspace deleting. Um, nope. Because let me show you why I did not add MCP support.

[01:20:29] I should put a link to mcporter in there. Um, MCP Pi does and will not support MCP. [laughter] Uh, I'm basically just telling people to do this instead. Write a [ __ ] README, write your tool in whatever language, and then point your agent at that [ __ ] README. And down here, I should have a big fat link to mcporter. If you really need MCP support, I I don't care. I I don't use MCP myself, so it's not going to get added. If somebody wants it, they can add it themselves. It's trivial. Yeah. So, I wonder what Codex does. Codex seems to be much more aligned with standard um Unix C um TUI stuff. No, that's not it.

[01:21:31] There we go. Codex. This is a test. Command backspace. Uhhuh. This is a test. And let's see what it does here. Yeah. Command plus backspace [snorts] works like control. Okay. That Ghostty does. Let's see what it does in it. Oh god. I should go to bed. Yeah, it doesn't work in iTerm. Interesting. [snorts] Interesting that this doesn't work. Yeah, because iTerm swallows the command key. Um, so then we should have control U work. Yep, that works.

[01:22:33] Wow. iTerm is such garbage. Let's go in the edit if you see control u code goes the command back space sequence here which is called mapping command space to matching on char code it's working as control u oh is it interesting let's Ah, I shouldn't have done that. That was stupid. There we go. Yeah, that works. Yep. Cool. Okay. Ghostty rules. Can we have a go back to this message and branch from here? Yeah, I actually wanted to implement that. Um, I'm not sure if I have an issue for that, but that's actually useful. So this will get added uh on top of message queuing. Okay, let's add this

[01:23:36] um branching support. Press escape twice. Show selector displaying all user messages searching from the bottom. If you select message last use message. Create a new session in the background and reload from there. Let's see. Actually, we can implement that next. Um, damn. I'm burning through my GPT credits.

[01:24:31] Okay, I think then we're done here. Let me just do a quick check on change log. Start of line. It's fine. Read me. See, actually, we should say that goes the ah this is what I wanted. So let's see this is a I also want option backspace to delete the word. So word >> [clears throat] >> Oh yeah. F7 escape plus delete

[01:25:34] concretely. Yeah, I'm warming up to GPT 5.1. This is actually really good. Okay. God damn it, Mr. Yanoska. I forgot your your given name again. Hari. God damn it. I'm so bad with names. Anyways, you you using this [ __ ] on on Linux, right? Can you tell me what terminal and and shell you're using?

[01:26:28] Yeah, I'm sorry. Helmet. God damn it. So sorry. See, if we met in real life, that would be different. Oh, Kitty. Okay. I should I should get Kitty. Why are you using Kitty instead of Ghostty? Oh, this looks very bare bones, which I like. But why is there no download button immediately? I don't want to read this binary install instructions. Curl. I don't want to curl [ __ ] app. Come on. Standard location. Sally J.

[01:27:19] Oh, interesting. Yeah, I like this manual installation. Oh, there's a GitHub release page. Good. I like this much more. Kitty darn executable. Wow, it's big. Why is it so big? Not signed. Interesting. I hate the security theater [ __ ] by Mac OS and Apple. It's so [ __ ] annoying. And I'm pretty sure they're going to take this away eventually from us. Oh, wow. [laughter] What the [ __ ] Okay, let's just open the binary. Um, permission. Okay, that makes sense.

[01:28:29] So, this is launcher for running kittens. Each kitten can be run as a kitten command. I downloaded the wrong thing. Yeah, should have taken that one. Kill everything with fire. Um, where's the DMG? There's no DMG here. Oh, 73 assets. God [ __ ] signature there. DMG. You build it from source. Oh, the DMG is even bigger. Why are people building such humongous? The logo is ugly. Straight up my alley.

[01:29:18] My logo is all 200 [laughter] megabytes. 150 megabytes. Wow. Um, enabling old man mode. So, let's see if this works. This is a Oh, wow. This just gives me that. Okay. Control U. Just a test. Control. Okay. Works. Perfect. Um, so we could change in control E delete backwards of some back.

[01:30:10] Okay. Um, put that in the README and changelog and call out that what was it? option. Yeah. Do you have a download for me for the Chromium build? I will need to adjust Sitegeist. Um, which could take a little while, but yeah. Um, maybe don't DM. Send me an email with the link to contact at mariosafner.at.

[01:31:00] Well, that means I need to open my Twitter DMs on stream and I don't want to open my Twitter DMs on stream because other people might not be happy if I shared that. Does gist with Sitegeist changes? What? Okay. I need to add word wrapping to the markdown component.

[01:31:59] Kind of hate it the way it works now, but it's complicated and the others aren't really good at it. Man, GPT-5.1, you're really fast. Let's kill all the things. Oh, that was the wrong one. There we go. I think I got the email. I heard a ping in the bong. Just clean up my inboxes. There we go.

[01:32:54] So, how many viruses will I get? Why are you using V transfer? Isn't that Chinese? Installing a super secret Chromium build. Who liked this? Um, it didn't do the comments right. What? I'm not allowed to run it. Commit to push directly from here.

[01:33:43] [laughter] What? Oh no. GPT-5 turned stupid. Okay, let's see. Um, Claude, I shouldn't have questioned you. Um, that's not right. Yeah, I wish Claude had like 400k. context window like GPT. Don't you have a private server? How do you finance a token based slot machine private usage? I just get money from things I do and then I put them in the slot machine. For Claude, I have the Max subscription which works with Pi out of the box.

[01:34:34] And in case of OpenAI, I just Actually interesting um what's it developer OpenAI? No platform. OpenAI plan OpenAI. Uh for OpenAI I just paid per token I think usage. Let's see how much this wasted. [snorts] Now I would need to know which key I used or can I get a default project? It's probably default project. Yeah, that sounds about right.

[01:35:26] No, I don't know which token I used [laughter] so I can't I can't see the stats there. uh committed and pushed and uh commented on the sentence. Okay. Let's go back here. Yeah, this looks good. Okay, the other one closed f option delete for whole work deletion. Okay, got closed by the user doesn't delete work. Okay, good. And then we just do a new release.

[01:36:21] Let's see what we are at 78. Okay, I'm not sure I put that in the agent version patch up. Move everything from new. Yep. A new empty section at top. Commit to version pump. Yep. JPM trans. Yep. [snorts] Still fix prompt. Yeah. So for me, I do fix the typos in the prompt because sometimes I actually talk to people via text [laughter] and if I get too used to not fixing the typos, especially given my dyslexia, um my communication with humans gets even worse. So, I I keep uh correcting my prompts. That's the explanation.

[01:37:25] Uh let's see where is the downloads. Chromium zip. I'm going to get the best viruses. It's going to be amazing. >> [laughter] >> Yeah. Um, I'm not sure the build works. I'm sorry to report. Um, let's see. Privacy and security. Privacy. I like that my logo is still this [ __ ] Wow. I I hate this so much. Privacy. There we go.

[01:38:13] Uh, yeah. Nope. It's not a It's not a not an issue with permissions. So, I'm sorry to say your your Chrome build is broken. Let's see if I can get more info on that. H yeah, packaging sucks. Just wonder why am I using Claude? There we go. Yeah, because it was a ZIP. That's why

[01:39:22] it works. That was quick. I actually wonder how fast Claude would be. Let's see. uh Claude Code that is um add the quarantine back because this literally took no time. Okay. So, let's try the same thing with Claude and use the same prompt. Uh, okay.

[01:40:21] I like this. Super good. Yeah, I think the quarantine seems to be wrong with their errors. Didn't kill and check for details. Adding back the quarantine uh attribute didn't work. So, actually, this is how we fix it. I I just want to test how how much faster it is or slower. Claude Oh, it goes through code signing.

[01:41:10] Interesting. It found the quarantine bit. It code signs the thing. I guess it can do that. Yeah. Why do you ask me for solutions? [laughter] Uh yeah, I don't care. This is very annoying. Um so, well, I mean, this was a trivial test again. I wouldn't Oh god, now I need to remove the [ __ ] bit again. Remove the quarantine flag from Ah, god damn it.

[01:42:14] Yep. I'm so lazy because I can't remember this [ __ ] at all. So >> [laughter] [snorts] >> Um, okay. So, let's start your Chromium thingy. Sure. No. No. No. Uh, what's the extension? Where are the extensions? Chrome. Oh, we already in developer mode. That's helpful. Oh, you know what? Um, so I [ __ ] around with the packages that Sitegeist needs [snorts] because they're built on the same infrastructure than Pi did the coding agent and it could be that Sitegeist is currently broken. Um, that's the last build and that works.

[01:43:12] Grant permission details. Oh, wow. It's laggy. Is it like a debug build? [clears throat] [laughter] What? That's new. Come on. The [ __ ] Yeah. Wow, it's super slow. Um, go to Hacker News and uh tell me what the top three submissions are currently. Oh my god. Now I need to expose my API key. Yeah, I can't do this on stream. I'm sorry. [laughter] Yeah, I have all the AI stuff, but I also have DataCrunch. So if push comes to shove, I'm just going to run GLM on an eight GPU cluster on DataCrunch. pay like €2,000 a month just for

[01:44:17] that privilege. It's not so much more than 200 for a Max subscription or GPT Pro, right? Okay, I need to see if this actually worked. npm install -g @mariozechner/pi-coding-agent. And look how nice it actually shows me the [ __ ] changelog like proper software. That's so nice. Does it work still? Yep. Mhm. Yeah, I like this. This works. Good job. Good job, GPT-5 and Sonnet. Um, what else do we need? So those issues have been fixed. And now let's see if we can unfuck Sitegeist.

[01:45:19] We're still running this background. Yeah, but we don't need this. Okay. Yeah, I have a bunch of [ __ ] to to fix [laughter] before I can rewrite the um the little engine that uh runs code in the um what was it called? It's been a while. Let's see. Um browser call it ripple. There we go. [snorts] Oh, let's see.

[01:46:22] Wrong email. Okay, now we're too cool. Oh, this is very nice. Yeah, it probably hasn't diverged because I haven't worked on Sitegeist in a while. It it does the thing and I waited for getting access to Stripe payments. So the the merchant-of-record [ __ ] that they now have and I just got that a couple of days ago and I haven't worked on it since then.

[01:47:15] Separate cancel function is approach from Mario's code. fixed world with CSP execution ID. Interesting. So you at the end of execution since exe that is totally fine. Chip chip cancel running execution is called from UI. Yeah, it it didn't understand how that works, but that's fine. Cancel active execution. So,

[01:48:22] let's see. I get the sandbox ID and then ah, interesting. Okay. Yeah, that makes sense. That makes a lot of sense. Yeah, this is nice. I like that. Yeah. So this I actually wonder do I pass through the signal here somewhere? Yep, I pass through the signal here. And I'm not sure I can register a listener on that. Let's see. Do we do anything with the signal?

[01:49:16] Oh yeah, pass it to the sandbox. That doesn't do anything with Oh yeah, we can add an event listener here. Then the port true. Yeah, it would take me a while to wire this up. Also, you see this here? [laughter] I'm a very smart person, so I reworked my um web UI component library and now I need to unfuck all of this [ __ ] Uh and even with another LLM, it takes a little while and I'm not going to going to bother with this on the stream now. Um, but what we can do, I like that my stupid chat app says writes out the emoji names instead of

[01:50:19] displaying the emojis. So, slightly smiling face. Um, yep. Cool. I'm I'm going to give it a try. How how how high do you think are the chances that this gets uh gets into an official Chromium Chrome build within say the next year? Or [laughter] how how high do you think is the likelihood of this cross browser agreement extension working group [ __ ] going through? Um getting this in. Really, if you show ad blockers, you think the Google people will [laughter] let it get in.

[01:51:24] >> [snorts] >> Yeah, cool. Then I can try to ah I just wonder I can add a flag inside that will enable a code path that uses this fancy new API instead of the regular one where I don't get an abort. Yeah, I guess that's a good that's a good a better argument preventing browser from infinite looping. On the other hand, people might not like LLMs injecting code into any old page. So yeah, exactly. I I can just check if that's available and then do the needful thing. I have to play around with No, actually this is actually not that hard to get going. I think I would.

[01:52:19] [snorts] Yeah, I I I haven't looked at that code in a while, so I have to go back in and figure it out. But it shouldn't be too hard to make this work both with the official releases we have now and with your fancy build as a as a as a prototype. I see. I I should have some time tomorrow to work on this. I need to get back into Sitegeist anyways now that I have the Stripe [ __ ] So yeah, cool. Um, okay. I think what I'm going to implement now and then I will go to bed is the branching support because that should be pretty easy. Do can we? I think we can.

[01:53:41] [sighs and gasps] Yeah, actually Sonnet is also pretty fast, I would say. [laughter] No, chat is not broken. I can I can still see you. Maybe you didn't hear me. Maybe I broke my microphone. Oh, interesting. What was your last message? Let's see. I have a control here. Nope. That's also what I'm seeing in my little [ __ ] thing here. Wow. I wonder what the [ __ ] it did. Just use a message to

[01:54:48] Why? What the [ __ ] Oh yeah, that looks good. Max visible. Session selector. Thinking selector. Let's skip the YouTube sensors. Try to

[01:56:03] send again. Yeah, nothing comes. If the Chrome change does not land, we can ship a Sitegeist Chrome fork and raise money instead. Yeah, we could easily get a couple thousand mil for that. Yeah, this indeed ridiculous. I wonder what what word or part of your message is trying to censor. Maybe Sitegeist. Let's see. Better intercept escape key. Don't leave auto complete is not active. Yeah. Actually, no. No, no, no, no, no, no. This is not what we want. Ah, stop.

[01:57:37] for install. I wonder could actually give you access to the Sitegeist repository if you want to [ __ ] around with it. But then you know all my dirty secrets which is I cannot code. Awesome. So let's go back and check some diffs side hustle. Yeah. This looks good to me.

[01:58:44] Yeah, this looks good. What's happening here? User message active component branch. Yep. Yep. What did you No. This looks good. Oh, nice. even got that edge case. Okay. And then session create branch session. Oh, I'm very interested in knowing how that is implemented. [laughter] Session file truncate message agent state. Is this what we want?

[01:59:38] Yeah, this is actually good. chat first message. Yep. This looks good. Show confirmation message. Yep. Yep. Yep. Yep. Yep. That looks good. And create session. I have enough sub machines running my name. Switch my name.

[02:00:40] Why would you specify a name branch command use messages? Let's see. Checks worked. Checks worked. Ah, got continue then branch. Oh yeah, I shouldn't use this chip package coding source CLI big in between I have plan A and plan B. [laughter] Um yeah, then the question is where do we display the name of the branch? Yeah, this is too complex for me.

[02:01:28] [laughter] All I really want to do is take the current session, go back a little bit, and continue from there. I don't keep sessions around as stores for information. I barely revive old sessions. So, well, let's see. Let's see what it does if it actually works. Ah, yeah. Key input. Um continue. Okay. So cursor movement is backwards. selector.

[02:02:30] Yeah, maybe for a future release, but this is actually an interesting idea. I wonder I I just want to I'm not sure if I have a personal use for that. So my my um my rule is basically I only implement what I need [laughter] and branch like it is now is basically what I need. Let's see if it works. Uh Oh yeah, that's not good.

[02:03:35] Yeah, this is not how it should work. I mean, it does what it's supposed to do, but The way it should work is that the user message I select should go into the uh editor. So let's see. I need to resume that piggy. I had 102 messages in this one. Oh yeah, because it generated so many more. between I guess. Yep.

[02:04:23] Okay. I hate that some of the business logic is in the two renderer. It shouldn't be there. But eh first selected.

[02:05:33] Okay, let's see. Very nice. I like your idea.

[02:06:23] Um, it just means that as a user, you should be able to assign um a name to the current session. Yeah. Can you maybe open an issue over here? [sighs] So, this one we want Final check.

[02:07:29] This one we already checked. Yep, looks good. But see, this is all the code that was needed. This is not a lot. Most of it is just the UI [ __ ] So, I wonder why other [ __ ] coding CLIs. Oh, wow. Did I just undo a thing? I think I did. [laughter] Oh, no. It was should be should be good. Let's see. Yeah, this looks good. Add a branch command for creating a conversation. Open selected showing only message creates a new session for the selected. This is good. Good.

[02:08:20] Yep. We already checked that one. And this is good too. in the read me branch creating a current session. Yeah, I think this is good enough. Oh my god, I'm sorry. Apparently the auto scroll is broken now. Something I'd love to keep my session around whole year and on Monday fix issue based on knowledge cont. Yeah, sure. Please just open uh just open an issue on on GitHub for this idea and we can develop it there. I'm going to quit now anyways. I'm just going to do another release real quick. Right. Time for another release. May first you do it. I should totally put the release notes in the Oh, I think I already have them in the the [ __ ] What plan is this? Why is the model system?

[02:09:25] Oh, this is side [ __ ] Nope. Read me release. Yeah, looks good. Um, so should do God damn it, my finger is falling off again.

[02:10:24] And of course, it has to happen on a weekend. Pretty good. just open an issue uh whenever you find time and then we can discuss it. Thanks for your input. Really helpful. Coolio. Bye. That's fine. I I'll find it later. Yep. Yes, they definitely hate you. Oh [ __ ] I should get rid of the try.

[02:11:27] [ __ ] that. [snorts] That was probably not a good idea during a publish. Nope. Should work. Okay, final check. Now we go to bed.

[02:12:30] Looks good. >> [snorts] >> Yep. Cool. Cool. Cool. Cool. Yeah, I think with this we're going to go to bed. Thanks everyone watching. Have a nice one and bye.
