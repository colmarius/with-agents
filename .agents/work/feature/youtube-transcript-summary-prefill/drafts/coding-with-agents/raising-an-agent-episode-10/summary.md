---
title: "Raising An Agent Episode - Episode 10"
resourceId: 1
series: "raising-an-agent"
episode: 10
date: "2026-02-05"
---

# Draft summary for review

> Draft generated from saved transcript source material. Do not publish without human/agent review.

## Provenance

- Source URL: <https://www.youtube.com/watch?v=4rx36wc9ugw>
- Video ID: `4rx36wc9ugw`
- Transcript path: `src/content/transcripts/coding-with-agents/raising-an-agent-episode-10.md`
- Transcript availability: available
- Transcript language: en
- Transcript kind: auto-generated
- Transcript blocks: 103
- Resource draft: `resource-reference.json` (existing-resource-reference)
- Generated at: 2026-06-27T15:46:49.534Z

## Reviewer prompt

Use the saved transcript at `src/content/transcripts/coding-with-agents/raising-an-agent-episode-10.md` to write a concise resource summary compatible with `src/content.config.ts`. First run or read the transcript review packet when available, preserve the frontmatter above, replace this draft body with reviewed summary content, and do not publish raw or unreviewed AI output.

## Transcript excerpts

### Opening

> [00:00:00] you one-on-one with an agent in a sidebar. I think that's coming to an end. You looking at the code in a text editor and having it at the bottom or in the side and it sees like which files you have open and then you do this pingpong thing. This is not the future. >> For the 1% of developers that want to be most ahead, that want to be coding like how everyone else will be in the future.
> [00:00:26] they only need to do the last 20% of their work in the editor and we think we can get that to 10% or 1% or something for what we created AMP to do which is explore the frontier software development we will be killing our editor extension the AMP VS Code extension and cursor and so on we're going to be killing it we think the sidebar is dead and let's walk through Why?
> [00:00:55] [music] >> Hello and welcome to Raising an Agent episode 10. I'm Torston and here with me is Quinn. Hi Quinn. >> Hey Thorston. All right. Uh we shipped deep mode. There's a lot more stuff coming, but how have you been using deep mode? You fall in love with some of these new models. >> Yes, I maybe a big fault of mine, but yes, we shipped deep mode last week. So deep mode is a new agent mode in AMP for those who don't know. Uh we only have three now. So we don't have you know smart mode that's the one we had our the
> [00:01:30] main mode with Opus 45 right now. Uh rush mode which uses a really fast model. Um let don't get let me get this wrong. We're experimenting with other models but I think it's haiku right at the moment in rush mode. >> That's right. So fast, less smart model for if you want to rush some task. And we shipped the new mode called deep mode which is powered by GBD52 codeex medium. Uh quite the name. Um and we shipped it because
> [00:02:04] I think that 52 codeex is amazing in a lot of ways. Um, it it's really smart, you know, funny, but it's really smart. It can write some really good code and it's really thorough in how it researches and goes off and finds stuff. And we called it deep mode because we realized, well, the strengths of, you know, the the model isn't good at this, you know, hey, set up my Zshell RC and
> [00:02:38] then do this and reload this like these back and forth super fast assistant tasks that you might use Opus for. It's kind of too lazy for this where it sometimes goes like you should run these things or it researches for too long. But if you have a well scope problem or a big task or you want to find something out, you can send this thing off and say like go and do this and it will go and you will need to switch tabs and do something else while it goes and then it
> [00:03:11] will research in a very thorough way and often come back with incredibly impressive results. And so we put this in another mode. And I think it's important to say it's a different mode because it's not a model selector. It's a different way of working or engaging with AMP or using AMP. And we kind of tweaked the tools towards this too like uh um you know we don't have it but imagine you had like this uh user feedback question tool that some
> [00:03:44] harnesses have. I don't think that would do something for deep because deep you want to send off and then check in later like 60 minutes later 45 minutes later and >> so okay when when we are trying a new model we tried it out internally a lot how did we get to the point where we realized actually this is a model that needs to be used in a different way it's not a replacement for the way that you work with opus >> I think when I first tried it and I mean there's been a lot of chatter right

### Closing

> [00:53:31] like that. And that lets us do crazy stuff like actually we might make it so we just delete this entire directory in our source tree and we're getting together in Singapore in a few weeks and just rewrite it from scratch. We can do that kind of stuff >> and that is so cool. >> Yeah. And the last thing I'll say is because I guess the instinctually you could say, well, if everything's changing and you need to rip out stuff, doesn't that mean you should take a step back
> [00:54:03] and wait until you can see the big picture and, you know, and then ship it or then build it, you know? And I think a lot of big companies have this where they're like, well, we're going to sit this one out. This is too crazy for us. We're going to wait and see where the dice are going to fall and then we're going to build for this. And sure, go ahead. You can do this. But I would guess I would argue and I guess that's what we're doing is you you might be too far away from where the dice will fall. Like it's a bet. You can either say, "I'm going to sit this
> [00:54:37] one out and I'm going to catch up once the dice have fallen." Or like us, you need to constantly look up and see where they're going and trying to follow them. And you need to ship and hit reality and get customer feedback from customers such as ours to figure out what's going on, what's working and isn't working. So we like we said like we're researching. We we think shipping is research. We ship to figure out what works and doesn't work and to help our customers and we learn from the customer feedback.
> [00:55:05] But we're not going to sit there and say, "Well, we can't ship this feature because we're not 100% sure that it'll survive the next three months." Like that's not how you do things. You got to put it out there and see for yourself and with your customers whether it works or doesn't work. >> Yeah, well said. We are not the ones to sit these things out. >> All right, we're at time I would say right. This was a lot of change in one episode. Any any last words we want to send along to our users?
> [00:55:36] >> Think happy coding. >> Happy hacking. Yeah, we'll talk to you. Bye-bye. >> Bye. [music]
