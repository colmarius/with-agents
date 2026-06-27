---
title: "Pi Building Pi, Openclaw's Minimalist Coding Agent | Mario Zechner, Creator of Pi"
resourceId: 9
date: "2026-06-27"
---

# Draft summary for review

> Draft generated from saved transcript source material. Do not publish without human/agent review.

## Provenance

- Source URL: <https://www.youtube.com/watch?v=DPgJjRdQWrg>
- Video ID: `DPgJjRdQWrg`
- Transcript path: `src/content/transcripts/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md`
- Transcript availability: available
- Transcript language: en
- Transcript kind: auto-generated
- Transcript blocks: 180
- Resource draft: `resource.json` (new-resource)
- Generated at: 2026-06-27T15:46:44.908Z

## Reviewer prompt

Use the saved transcript at `src/content/transcripts/coding-with-agents/pi-building-pi-openclaws-minimalist-coding-agent.md` to write a concise resource summary compatible with `src/content.config.ts`. First run or read the transcript review packet when available, preserve the frontmatter above, replace this draft body with reviewed summary content, and do not publish raw or unreviewed AI output.

## Transcript excerpts

### Opening

> [00:00:00] a team of 10 or 100 engineers working for 3 months manually. They can probably [ __ ] up your code base real good, but not on the same level as 100 agents can do in 3 months. Like after 3 months with 100 agents, you >> [laughter] >> might have to rewrite your entire project. >> Hello everyone and welcome to another
> [00:00:36] episode of the build system. I'm really excited to be here with Mario Zechner who is an open source extraordinaire. He is a developer of multiple decades in the open source community, the the lead maintainer and creator of Pi, an incredibly awesome coding agent Arness, which now actually powers open claw. Um outside of that he's also a partner at Arendelle, and today we're we're really excited to have him here with us to to to build something as he would do so.
> [00:01:04] So So Mario, thank you for being here. Thank you for taking the time. >> Well, thanks for having me. >> Amazing. Would Would you like to start maybe by like I am so I gave you a quick quick intro on, but anything else do you want to share about your background, any any part of your life story that you feel like is is you you're excited to share or want to share about your journey in software, anything like that? >> Uh sure. Like most of us I started out because of computer games sometime in the mid-90s or so.
> [00:01:34] Um eventually I leveled up and scaled up and uh got employed at a competence center trying to get scientific results into industry, and that was my first contact with machine learning, but it was pre-deep learning, so we did support vector machines and all of that that stuff. >> [clears throat] >> Had a quick stint at San Francisco in San Francisco, doing game development for a startup.
> [00:02:00] Came back, became manager, then started another startup with two friends from Sweden doing compilers for iOS. Sold that, and then had a lot of free time. So, when GPT came out, 2020, I think was GPT-2, I don't remember. And then followed by the consumer-side product ChatGPT, my interest piqued because my research back in the 2000s was about natural language processing and oh my god, all of a sudden there is now a thing, a machine learning model that basically
> [00:02:32] blows everything we did back then out of the water by default. And naturally, being a software developer, that also made me question whether we can use these things to assist us with coding. And since 2023, I've tried to figure it out. >> So, uh well, you've been a leading voice in in the space. Uh I'm a huge fan of your blog and and and your open-source work. And so, a lot of very strong opinions, very strong opinions [laughter] that that that might be weakly held, which which is fine. That
> [00:03:05] that you know, that that's of course fine. I I think, you know, so so obviously, the focus of of our of the build system is is building, but I would love to actually spend a few minutes just go going a bit deeper into some of some of those strong opinions. They might be weakly held and and you know, kind of for the folks in the room, because I think you have a very distinct and very unique perspective on a lot of a lot of things. And and if you spend any time reading Mario's blog, which we'll share later, they are some of his very very different opinions. And and so, I I like I like the provocative stuff. Maybe we could just like start a little bit by, you know, you've been you've been in the space for a while. You've been writing a
> [00:03:38] lot about coding agents. You've been building coding agents. I mean, can we get a sense just like for the vibe of today? Like, what do you what do you feel? How do you feel where where we are are where we are at right now? How things have progressed in in you know, let's say two, three years, the last 6 months. Obviously, there's been huge changes since then. Just give us a sense for like, are you excited? Are you Are you happy? Are you anxious? Like, what's what's your general vibe on how things are going?

### Closing

> [01:28:06] that area of expertise, like your product manager, which now thinks it's great to just ship some front end code into the code base. And that's that's usually where you you end up with this non-salvageable kind of piece of code that nobody understands and needs to be rewritten. So, I guess I guess my my answer is don't let it happen in the first place. >> [laughter] >> By by ensuring that you're still in the loop at at least when it comes to designing things, the API and modules.
> [01:28:38] >> [snorts] >> Yeah. >> Because once you have that, even if a module is complete garbage, at least you define boundaries, so it's kind of isolated from the rest of your code. So, it's very easy to replace either with a rewrite or a refactor. And if you coded yourself into such a corner, well, it's going to be a lot of pain and either you or somebody else has to go in and manually fix that. Can have the assistance of an agent, but you will not be able to to just ask another 100 agents to fix it for you because chances are they will come up with even more garbage.
> [01:29:09] >> All right, this is this is fantastic. Um what what a productive session. I mean, two two two distinct workflows, two distinct work streams, and different projects. So, this has been super awesome. I mean, what an insightful just session. And and thank you for sharing all of this and and showing that that in the in the, you know, the the minimalist harness that is just that you fully control and own and and understand like that has just as much efficacy as as, you know, the hyper you know, hyper sub agent on steroids and MCP on steroids. So, what a refreshing thing to see and and
> [01:29:43] just just really really excited. And and and thank you so much for sharing this. It's just really awesome. >> No, thanks for having me. And I just like to end with saying I also don't know what the best way is to do things. This is the way that works for me. It might not work for you. But I found it to work across different code bases and products so far. >> Absolutely. Absolutely. Yeah. I mean, to great success. I mean, Pi uh we'll share links to Pi and all the all other Anything else that you want to share, we'll we'll provide it in in the links to the video. And so, people can check it out and start contributing and start having Pi modify itself, uh which I think is one of the the call to action
> [01:30:17] here is use Pi and and and have have it fix itself if you want to if you want it to fix itself. >> Yeah, I I mean, my call to action is actually you asked me about how excited I am at the moment. I again have my reservations in terms of societal impact, but from a technologist's perspective, it's an amazing time to be a technologist. Experiment, throw [ __ ] at the wall and see what sticks. It's it's awesome. And if you realize that the models can modify the the software they're running in, then you will have a lot of time uh a lot of fun. So, experiment.
