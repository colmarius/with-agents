---
title: "Raising an Agent - Stop Boxing In Your Agent (Season 2, Episode 5)"
summarySlug: "coding-with-agents/raising-an-agent-season-2-episode-5"
sourceUrl: "https://www.youtube.com/watch?v=3v7dIHh15dk"
videoId: "3v7dIHh15dk"
capturedAt: "2026-09-25T15:23:35.125Z"
series: "raising-an-agent-season-2"
episode: 5
channel: "Amp, Inc."
language: "en"
---

Source: https://ampcode.com/podcast/season-02/episode-05

YouTube caption retrieval was unavailable. This sidecar preserves the publisher’s English transcript, extracted from the official episode page. That transcript has no timestamps; none have been inferred. Caption kind is unknown. No translation or original-audio check was performed.

## Transcript

Quinn: Was there anything too controversial that you did not include? Where did you hold back?

Thorsten: I do think, like, one hot take that I didn't put in there is seeing how conservative and skeptical and thinking in the box most engineers have turned out to be over the last year. It boggles my mind. Like, I assumed we're all, like, interested in technology and doing being good as engineers. But then over the last year, it's like, guys, like, don't you know anything about the history of the technology you're working with? You know, they say stuff like, ‘Oh, it can't do this.’ And I'm like, ‘You don't know, like, how Java was perceived? You don't know how JavaScript was perceived? You don't know how Pascal was received? Like, have you never read a book about programming?’

Thorsten: You know, like, we've had this for the last forty years, where a new thing comes out, personal computer, ‘Oh, that's nothing. Like, that's a cheap thing.’ Every technology had, like, these voices. I'm looking around and I'm like, ‘Guys, have you not read anything about the history of programming? You sound just like somebody in 2002 saying, “Garbage-collected languages, this will never fly.” You sound like somebody in 2010 saying, “JavaScript, that's not a serious language.”’ Like, it's crazy to me.

Thorsten: And the other thing is that, do you not realize, like, what the function of software is? Like, you have to realize it's not the stuff that you do in your free time in open source. You have to realize that, in a business, it serves a purpose. Like, if somebody can get away without hiring software engineers, they would do it. Everybody got to realize you're a means to an end, you know?

Quinn: People are not realizing just how much will change. Like, planning is dead. Or it's going to change 99.99%. Making slides, documents, a human emailing another human, most of the reasons why a human emails another human, everything about how a company works will change.

Thorsten: Welcome to Raising an Agent, episode five, season two. And we're here because we feel it in our bones that we have to record this episode, because it's Hot Take Thursday. We just called it this, because there's so many things we want to say, and there's so much going on, we couldn't wait, right? It's in the middle of the night for you, Quinn. I guess you're a night person, but, like, still.

Quinn: 2:00 a.m., Hot Take Thursday. Yeah, I would not miss it.

Thorsten: Strike the iron while it's hot. You know, hit the hot takes while they're still hot. So, just to set the scene, yesterday evening, I was at a birthday party. I didn't expect to talk about AI at all, like, in the middle of nowhere. Didn't expect anybody to talk about agents. And then somebody actually brought up agents at the dinner table. And I got to talk to a relative of mine who works in a German consultancy, you know, small-city German consultancy. They have 100 engineers, so maybe not that small, and they do IT and software consulting for companies that outsource their software.

Thorsten: And he told me, ‘Yeah, yeah, they've been using agents.’ And they started out last year with, like, a sub. Everybody got a $200-a-month sub with all of the tokens that includes. And then leadership said, ‘That's too expensive.’ I guess maybe they got priced out, right? Like most companies, like Anthropic or OpenAI, they say if you have more than 100 users, you cannot use the subs or something. Like, they had to switch to API pricing.

Quinn: Yeah, around that.

Thorsten: Yeah, something like this. And they said, ‘It's too expensive. We're not going to do this.’ So then they started, I think, adding a model router, you know, where they kind of like, ‘Oh, some things we route to cheaper models.’ Like, not the engineers decide which model they use, but somebody, I don't know, like.

Quinn: Yeah, if the salespeople took people out to an expensive dinner the night before, then the engineers are going to be using Qwen, right?

Thorsten: Maybe. Yeah, yeah, something like this. So that led to every engineer having a token budget of, I guess it was euros, €50 a week, okay, which is, at API prices, that's not a lot. And my relative here, he ran through this in a day. He was like, ‘I need more,’ you know? And I'm like, ‘A day? That's crazy that you've managed to do it in only a day.’ Or, like, you can use it the whole day.

Thorsten: So then he asked for more. He got more. And then they were like, ‘Nope. Like, that's too much. Like, $100 a week, that would be too much,’ or, sorry, euros, ‘that would be too much. Too expensive. We can't do this.’ And now the latest is they switched the whole engineering org, or all the engineers, over to use Qwen.

Thorsten: And I couldn't believe it. And he's like, ‘It's horrible.’ Like, it's dog slow. And that guy is not, like, he's not as AI-pilled or token-pilled as we are, but he was like, ‘It's dog slow, and you also don't save any time nor money because, if it fails the last ten percent, you have to redo it again, or you got to figure out where it failed, like, where those ten percent are, right?’ Like, if it gives you 500 lines of code, but you're not sure whether it's 100% correct or 90% correct, then you got to spend time and figure out where the mistakes are.

Thorsten: So this whole idea of, let's just use a cheaper model, as we've seen over and over again, it bumps into the reality of, well, if it's wrong ninety or ten percent of the time, how do you know when the ten percent is? And isn't it better to pay a little bit more so you're sure that the frontier model doesn't make those mistakes?

Quinn: Yeah. And Qwen is not a bad model. I mean, it's a great model. But if you are paying very expensive people in a competitive market economy, and your competitors are using something better than Qwen, then it doesn't matter whether it's, you know—

Quinn: —a good model or not. If you're at a disadvantage, then that's all that matters.

Thorsten: Yeah. I couldn't believe—so he was saying it's so bad, and then it's useless. Like, he has a sub at home. He's like, ‘This is so much better. At work, it's useless, basically, but they're saving money.’ And I couldn't believe it. Like, I guess I get it if they're, like, a German consultancy. Maybe they don't have the profits to afford AI, but, like, what's the plan here? Like, because your engineers, they—what I tried to tell him yesterday was, if you're using these models from six months ago or a year ago, and I guess you could say Qwen is like a year ago, this is a completely different category of tool.

Thorsten: Like, what you're doing is you're still stuck in this, like, ‘Oh, the agent writes, like, this much code, and then do this.’ And I'm over here using an Astra and a Fable and now an Opus 5.5, and it does everything, right? Like, it ships to production, it monitors the logs, it debugs stuff, blah blah blah. Like, it's a completely different thing. And to me, it's a category change. And if you're not on the frontier, it feels so strange that, as the leadership in the company, like, what are you doing? Like, you're basically saying, ‘Oh, the internet is here,’ you know?

Thorsten: Like, and apparently the leader of this company did say, like, ‘Yeah, AI is going to be the next big thing.’ So he's aware of what a revolution this is. But then you're giving everybody, like, dial-up modems while you could have fiber, you know? And it's like, ‘Yep, like, internet is good, but I'm going to give you dial-up modems even though fiber is already here,’ you know, in this parallel universe where you have both. And—

Thorsten: —what my point is, say Qwen is the dial-up modem, and, like, the latest frontier model is fiber. Yes, it's the same thing, right? It connects you to the internet. But think about how you use the internet. Like, with fiber, you stream stuff. You open YouTube. You send files around. You upload stuff. You don't compress your videos before you upload them to Google Drive. You know, like, you have Google Drive running all the time. If you have a dial-up modem, you use it completely differently. Yeah, you might disable automatic image loading in your browser, you know? Like, and that, I think, is the difference between last year's models and today's. It's a different category of models. Like, you just do completely different things.

Quinn: Yeah. And it's not just that the individuals use it differently. It's that it makes it so the company can pursue completely different business models.

Quinn: And—

Quinn: —look, I think we both sympathize with people at companies where the companies don't know how they're going to afford the necessary token spend for all of the people that need tokens. That is a very tough thing. In the same way, back in the 1800s during industrialization, there were a lot of people that were working in their home, low-scale production, you know, they would be just doing the loom at home, basically, and they would see these people going off to the factories. And these people, working in their home, had no way to raise the capital to go build a factory.

Quinn: And I think we all sympathize for them. But, in a way, the universe, it doesn't matter whether that person has a sympathetic reason. The reality is the world is changing, and things are being disrupted, and you cannot just plug AI in. You have to think about how it's going to change everything.

Quinn: And that's a scary thing. And so, you know, for students, I think, if you are someone who is not able to experience what it's like to build without, you know, real token constraints, if you're someone who's working at a company where they're putting really intense token constraints on you, then try to find your way to somewhere where you are able to build more freely.

Quinn: I know it's easier said than done. I know that's hard for a lot of people, especially people that don't have local jobs where they can go, and companies where they're willing to pay for a lot of tokens. But I think if you're listening to us, you are—I think you're pretty smart.

Thorsten: Yeah.

Thorsten: Yeah.

Quinn: And there are companies that people do not have to care about token spending. And I don't mean people are doing dumb stuff with it. I mean people have skin in the game, and they're conscientious. And, you know, for us on Amp, our team is 20 people. We have no kind of token limits. When we hit the limits of our subs that we plugged into Amp, then we just switch them off and we go onto token spending. And there is just a freedom to build in this crazy time, and it feels like that's what's needed to get ahead and to figure out where this is all going.

Thorsten: Yeah. And I think, you know, I wrote a tweet on Saturday, like five, six days ago, and it blew up. And it was about how I see the future of software development. And most, if you've listened to episodes of this podcast, like most of this wouldn't be new to you. But I put in, I said, ‘Some people, for the next few years, will be priced out of developing frontier software, or like the new kind of software.’ And people got mad, and they were like—

Quinn: And you don't want that to happen. You're not saying it's good.

Thorsten: Exactly. I said, ‘I think this is going to happen.’ And I'm seeing it now. Like I'm seeing how people live in different worlds. Like I talk to people who use a Qwen at their German company versus you go to somebody with unlimited tokens in San Francisco. It's a completely different thing. And the reality is that we—

Quinn: And actually, I want to say something. Companies in San Francisco, there's a lot of them, actually, where they're putting on intense token constraints as well because they have more engineers per capita than a lot of other companies. And they're at the same time being threatened if they're a software company, traditional software company—I love that we can say traditional software company now, and nobody blinks—then they're under a lot of pressure. So actually, it's a lot of these new waves of companies that have started in the last couple years.

Quinn: And then it's also companies like from the US Midwest where they have people that are wearing a lot of different hats, really smart people. They didn't have a big software engineering team, but now they have a few people that are spending a bunch of tokens. Yeah, a lot of San Francisco companies are not the ones that let you spend freely.

Thorsten: Yeah. And look, like I said, I don't want this to happen. And then people get mad and saying like, ‘Whoa, whoa, whoa, we have open models. We have open-source models and all of this.’ And yeah, that's true, but man, like look at the '80s or '90s even. I don't have the numbers, but basically, people say like if you were able to buy like an Apple in the '80s for your kid or something, that's equivalent to, I don't know, $10,000 today, or like, you know, it's the price of a small car or something. Like it was expensive.

Thorsten: So people had been in the early days of personal computers, they were priced out of, you know, participating in like, ‘Oh, I can develop software at home,’ and all of this. Like most of the time, if you had access to a personal computer at home in the '80s and '90s, your parents were well-off, you know, if you were a kid. And people in the Eastern Bloc, they didn't have access to the new stuff. It was a whole different culture that developed there with their own programming languages and whatnot. So it's a thing that happens where like different industries or tranches of the same industry develop because of different access to capital and hardware and whatnot.

Thorsten: And it's two different worlds if you use like these open-weight models or if you have access to the frontier model. And to tie it back to what you just said, people say, ‘Well, you know, the company, they got to save money, and blah blah,’ but I think you're playing with fire. Like the company might save the money now, and yes, you might survive for the next five years doing what you've been doing. And it's not like, you know, when people now say, ‘Oh, where's all the AI software, and where's this?’ It's not like people will shoot up right now and disrupt you and build the same thing that you've done.

Thorsten: It will be that you will slowly bleed out. Like you will lose growth rates, you will lose new customers and whatnot because others are faster than you. So if you're the leader, you got to think like, ‘What hard decisions do I have to make now?’ And I even said to him, my friend yesterday, I said like, ‘Are you guys, you know, cutting people, like firing people? Like what's the strategy?’ And he's like, ‘Yeah, we stopped hiring.’ So they're in a stasis mode, and now they're giving out these cheap things.

Thorsten: And I said like, as tough as it sounds, like for a lot of companies, the playbook is maybe something like disrupt yourself. Like you need to create small teams and give them the most leverage, you know, which is what we're doing with Amp Labs, which is have been tremendously successful, which is exactly this. Like yeah, you can't give 30,000 people in a company frontier models unlimited, but what if you create an elite team and give them unlimited tokens?

Quinn: Yeah. And not just for cost. If you were to make the agent that you could roll out to 30,000 people, everyone at a company, then it would have to be watered down. That's just the reality. So, okay, another way to look at it is let's say that you are a factory before like robots and automation comes along, and you've got all these factory workers, and then all of a sudden robots start to be invented, and you have some people, they go and bring in their robots from home, and they help out. And, you know, that's pretty cool.

Quinn: And then, you know, the factory says, ‘All right, each person has a 50 euro per week robot budget. You can bring in a robot, but only 50 euros a week, and you got to make do.’ And so people come in, and they're working on the production line, and their robots are helping. And then, oh man, it's the seventh of the month, and their robot budget is up. So, you know, they send the robots home. It's like that does not make any sense. A company needs to think high-level about how it's going to use this technology. It can't just abdicate its responsibility to figure out its production system to employees. It makes absolutely no sense.

Thorsten: Yeah. I mean, I guess we could talk for two hours about this, right? Like we got more hot takes. But like I'll maybe summarize it like this. Maybe how about this? Like, AI and these frontier models is not just like a better IDE that you give your engineers. Like it's not just a thing, a tool that you hand to these engineers. Like you really got to rethink, from first principles, why do you have an engineering department? What are the goals of those engineers? Like, and how can you reinvent this with AI and rethink the complete org structure, the processes, everything?

Thorsten: Otherwise, I think you're just missing out on a ton of benefits. And yes, you might be fine for the next few years, but it's not like somebody knocks at your door and says like, ‘Game over,’ because the reality is nobody will knock at your door when the game is over, you know? Like the absence of somebody knocking at your door means that the game is over. It's hard to notice. So—

Quinn: Yeah. All right, so in keeping with the theme of this is like a tsunami, it's a wave, and you know, it's hitting everyone, talk about how the agent is expanding from having done coding for you—

Quinn: —to doing more. What does that look like for you now?

Thorsten: So I'll start with the hot-take version of this, which is what our very own Alex Kemper—I think he tweeted it by now, but he said it internally—

Quinn: He is such a wise man.

Thorsten: Yeah, he is. Yeah.

Quinn: We have an awesome team, but yeah, he is just wisdom.

Thorsten: Yeah. He had like three or four of these Slack posts where I keep thinking about them for a week, and then I'm like, ah, you know, I wish I could tweet that. But what he said was based on an observation of, I think it was like some large corporation he had insight to or whatever, where they shoehorned the agent basically into the text editor and say, ‘Well, you can write code, but before you access anything else, you need to ask for permission, and do this, and blah blah blah.’

Thorsten: And I think he was working with them, and he had to get like a new deployment setup or something like this, and he had to get permission in like one system. To get access to that system, he had to ask for more permission. To get access to this, he had to find the right department. And it was like a Kafkaesque adventure of like getting a new deployment setup. And he said, ‘And then people wonder why AI doesn't increase the GDP,’ you know? The bottom line being, if you now have like these 10x multipliers, but what are you going to multiply if you're boxed in and you need to ask for permission all the time?

Thorsten: And I think that's the same thing with agents. I think most people right now use agents still boxed into the idea of it's the thing that writes code, and I review it, and then I push it up. And it replaced my text editor. I think that's not aiming high enough. I just had this conversation on Twitter where I said, instead of these cheap models, like if you use a frontier model, like the newest ones, an Astra, a Fable, Opus 5.5, you will realize you can aim much, much higher.

Thorsten: So previously, the agents went fully vertical in the stack. They started with the frontend stuff, the little scripts, then they did backend changes, database, whatever, and they're fully in your stack. They write your code in the codebase. But now I think it's time to go horizontal, meaning the whole lifecycle of, you know, software development lifecycle. They can prototype features, they can pick prototypes, they can document them, they can write the features, they can ship them to production, they should monitor production, they should debug production, should keep an eye on logs, get bug reports, fix bug reports, talk to customers. Like this is everything we do.

Thorsten: Like on Monday, I found a bug, for example, in Amp. The agent found it, like by accident in the logs, and then we investigated because it has read-only access to our production logs, so it can see what's happening in production, no sensitive information, right? But it found these errors. It was like, ‘Okay, let's investigate this.’ So then we found a fix, and then I said like, ‘Huh, let's roll this out and let's keep an eye on it.’ So we pushed it up. Then it monitored the rollouts in our CI. It can see our CI. It can see our deployment, so it can know when a version is live.

Thorsten: Then it uses automations to remind itself every hour to check on how it's doing. And then it would monitor, for the last five days, it would monitor production and send me reports like after every deployment. ‘Oh, error rate went down. Oh, this is good. Oh, here's another thing that popped up, but it's unrelated.’ And it's wild. Like it's end-to-end, the whole thing. And now other stuff started popping up. I tagged you in a thread, but it was unrelated. And then it spawned another agent in another Orb to investigate this. So it's fully integrated into how we develop software, like from local dev or Orb dev to production. And—

Thorsten: I think if you're not doing this and you still think, if you're still trying to box it in, it's just you're losing so much. You're—

Thorsten: It—

Quinn: And like, it really feels like sometimes we're driving and sometimes we hand over the wheel to the agent. And I would say, like, more of the hard decisions we still make. We are still the ultimate decision-makers, the designers, but there's a lot of really hard things where we fully delegate to the agent.

Quinn: And, you know, one really concrete thing, two weeks ago, even a week and a half ago, I was using the ship button in Amp, where you hold it down and it has that nice animation, all the time. And that was awesome, you know. That would just ship it to main. And now I'm finding that not only do I do more stuff that the agent helps before I actually start having it do any code, but it's almost always, ‘Okay, let's deploy this a little bit. Let's see all the other users that were affected by this. Let's add some more logging.’

Quinn: ‘Let's let it run for an hour after deployment, and then tell me, was it accurate in its prediction? And then, you know, make this Grafana dashboard, monitor that, and once it's been rolled out, check the logs every fifteen minutes for an hour, send me a message if there's any issues, otherwise archive it, or email the users that were affected, give them all $10,’ and all these things. And it's kind of absurd. I actually am really leaning on dictation because there's no way that I would want to type all that stuff out.

Quinn: And it's clearly a gap in the product where we need to figure out how can we take some of these patterns of things where you're going to roll them out and make it so the agent can just do more. And then, you know, we've got this bug reporting system, and someone was asking us, and I was in Australia with some customers and meeting a bunch of people. If you came out to our meetup, then it's great to meet you. And we showed off our bug system, which we just built. I mean, you built most of it, Thorsten, and it will take bugs from the product. It'll gather diagnostics, anything that people want to attach.

Quinn: It'll show up in our Slack, and we've got a ‘I'm feeling Pucky’ button and a ‘I'm feeling ultra Pucky’ button. And we click, and that kicks off a thread. And that is the start of about half of our work right now, and it has created this virtuous cycle. So, you know, if you picture, you know, one of those, you know, mazes, like a corn maze, you're looking down. I don't know, do you have corn mazes in Germany?

Thorsten: We have mazes, but it's not corn. That's—

Quinn: It's, you know, Spargel, asparagus or something. You know, well, I'm from the Midwest and, you know, we got corn mazes, even here in California. And it's like, you know, the agent starts at the middle and you want to clear out all the walls. You want to let it just grow in whatever direction it's going to be able to help you. And we are able to do that on our team, and so many other teams that we work with are able to do that.

Quinn: But if the agent starts to, you know, help over here more in the beginning of the process, and then that's what you're using GitHub Issues for or Linear for, well, it's not going to be able to grow. You know, it's probably going to grow around that wall and then smother that wall, and you're going to end up somehow you've built your system on GitHub Issues or Jira and nobody actually uses it anymore. You don't need it anymore. The agent is driving it and you should have just gotten rid of it. And it's probably going to be subsumed by the agent anyway, but it's going to slow you down.

Quinn: If you've got code review on the other side once you're done with the work, if you've got all these other processes for the wrong thing. You know, code review, in so many companies, it's a farce now. Nobody can review the volume of code—

Quinn: —and they're not even the best at reviewing it. Yeah, and you know, it's clearly it's a farce. It's just slowing you down from actually benefiting from the velocity improvements. And if you are, you know, let's stipulate too, you do take on some more risk relative to the perfect ideal code review process where the smartest human, John Carmack, is reviewing it a thousand times over for a thousand years, you do take on some more risk.

Quinn: So what can you do to balance out that risk you're taking on? You can move fast. You can have people get skin in the game. You can keep people in flow. You can have the agent monitor things after. And if it hits this wall where you got to get out of the agent, you know, you got to get out of your car and you got to walk over this gap and then get back in a different car, that is not how the world and technological progress wants you to go. And you're going to be hitting your head against the wall. You already are.

Quinn: It—

Thorsten: Yeah. It's like when people say, ‘Well, I wish I could do this, but we don't have a monorepo. We have ten different repos.’ And then it's like, ‘Then get a monorepo.’ You know, like, this technology is so powerful that this is the time where you have to rethink a lot of these assumptions and rules that you've previously put into place. You know, ‘No dev tool can access this,’ or ‘No dev—’ Like, maybe now's the time to rethink this. Maybe now's the time where you've got to give it access to this, because you're boxing it in.

Quinn: Let's talk about what you would do if you were a smart engineer who is at a company and you feel like your company just doesn't get it. Like, how would you speak up?

Quinn: What can you do?

Thorsten: I don't know. I would complain a lot. Like, you could—like, there's some—that reminds me when you kind of—you have to break the rules a little bit, I think. Like, that would be my approach. Like, I don't think you can—

Quinn: There's no German word for someone who has to break the rules?

Thorsten: Yeah, there's no German word.

Quinn: That's the only word that does not exist in German, right?

Thorsten: You can't even compound it. The police would show up. You cannot do this on paper. Like, I think you have to show this to people. It's the same with, like, everybody else trying to adopt AI. Like, you have to actually try this. Maybe there's a safe way to do it, right?

Thorsten: Like, for example, a friend of mine, he works in a company that does small, medium businesses, sets up IT infrastructure for them. And he's like, ‘So, Thorsten, would you really run agents on, like, these customers' machines, you know, to set them up?’ And I was like, ‘Yeah, I would.’ And he's like, ‘Well, nobody dares to do it.’ And then I was like, ‘Well, I can't tell you to do something, you know, you shouldn't be doing, but what I would do is I would maybe replicate, like, a customer setup one-to-one,’ you know, maybe with anonymized data or whatever, ‘and then say, “Look, this is how you do it, like, with the normal setup, and this is how I would do it with agents.”’

Thorsten: You know, I think you can do this in a lot of companies where it's like, ‘Hey, if we give the agent access to this and this, then it can do all of these things.’ And you just demonstrate that it's faster. But I'm not a big company politics guy. Like, I would probably try and sneak around and ask for forgiveness and then say, ‘Look, like, this is ten times faster.’ But this is another hot take just to get this in. Imagine working at a large company right now where it's all day, every day, AI-generated messages in Slack, in Teams, in Notion, in PRDs. It would be insane. Like, slide presentations, all of it. So I don't know. Like, I have zero clue—

Quinn: It's so funny because it's like play-acting where—

Quinn: —the idea of most slide presentations, it doesn't make sense anymore. And I mean, I saw this. I've had some customers who are coming to me for help, and they have a presentation with a timeline and very formal plan for how things should go, and they say, ‘Hey, can't this be faster with AI?’ And the answer is, ‘Yes, but, in a way, it can be so much faster that it's not about going back and making a better estimate even.’

Quinn: ‘It's—the way that you should be thinking about planning is, if you're building an app, you should be using the app. You should get it rolled out as fast as possible and show that you can iterate.’ And partly, that's because that's what AI does, and partly, it's because, like, look, we're humans. There is nothing that gets people to believe like they get the app on their phone, they dogfood it, they have feedback, they go to sleep, the next day it's already better, and all of that.

Quinn: And that is absolutely possible, and most people are not at companies where they can even conceive of that being possible, of a product getting meaningfully better overnight. That, you know, to your point, what would you do if you were at a big company? It's actually showing what this can do that helps the business. Going back to your example, when you were at the dinner last night, like, there's just a lot of people at different parts of the spectrum. There's people that have played with this. I think there's people probably that say they have more experience, but they actually haven't used the latest things because they don't want to be embarrassed. If you actually sit down with them and show them what is possible, that goes so far.

Quinn: Like, what I found is in my, you know, kind of personal life with friends and family, I've got my parents, my aunts, actually showing them what they can build in five minutes. And also, you know, my kids, obviously, they have no conception. I mean, they're, you know, seven years and five and three. But actually showing people what this could do. Most people just do not know, even if they talk about AI, even if they have a title of, like, AI strategist. They just do not know what it is capable of.

Thorsten: Yeah. They—I mean, I've said this before here, no? Like, I think the biggest reason why not more of the world is going crazy over AI is that, so far, only programmers understand what's going on when you see an agent run in the term—or, you know, run commands. Like, we as developers, we know it's running programs. Like, it's using the computer when it executes bash and shell commands. Like, we see this and we're like, ‘Holy shit, it uses FFmpeg, now it SCPs it over to the other computer.’ You know, like, we know what's going on. But to the normie, it looks like gibberish. Like, ‘Oh, it's programming,’ you know, whatever. Like, ‘That's not my world. I use a computer.’

Thorsten: Computer use is the first thing where they go, ‘Oh, wow.’ Because you can see the cursor move around, right? And it clicks and it uses the computer like I do or we do, just like it did for programmers where it used the bash like we do, except 10 times faster with more one-liners and crazy without any typos and whatsoever. So,

Thorsten: I think if you could have computer use, let's say, 500 times faster, or the speed of which you can use shell commands, right, then I think people would lose their mind. Because then it's going through their Outlook and clicking through the emails and adding them to Excel spreadsheets like 10 times faster than they could do. But until they can have this impression that this is what it's doing, I don't think they get it yet. You know, like, I think you can show them some stuff, but it's not legible to them. It's not something they can grasp. And let's see.

Quinn: Yeah. But I think that you're going to see, you know, like, the Chinese weeklong holidays coming up pretty soon, and you have people migrate all throughout the country and show people what this actually looks like. You have, in the US, Thanksgiving, families coming together, Christmas, and I think that a big reason why it really took off for coding last year was because people shared it with their family, they shared it with other people, and they also had time to go play with this.

Quinn: And think that things like personal agents doing this for your life, I think that it's going to take off in a huge way over the next few months. So, that's going to help a lot more people see what it is capable of.

Thorsten: Yeah.

Thorsten: All right. Next hot take: Don't wait for your agent. You're wasting time. Let them wait for you. What I mean with this is if you are still using agents and you're watching them work, say you have four of them, and you're looking at them and waiting for them. If you're even interested in like—well, I'm interested in inference speed—but if you're like, ‘Oh, well, you know, why is this harness faster with the first token and whatnot?’ There's like some edge cases, but in the majority of cases, if you're interested in how fast it can produce like the first thing, like, you're wasting time.

Thorsten: I think we have said this the last time, right? And now it's even clearer to me when I talk with people about verification loops where they're like, ‘How do you do the—like, how do you—?’ You know, we talk about this a bunch. Like, we say to the agent, ‘Give me irrefutable proof that this works,’ right? And then it goes off and it does its thing. And I don't wait for them. I don't watch them. They're in Orbs, they're running somewhere else, they're not on my machine, they're not blocking anything.

Thorsten: I just think, like, it's so much better, and I'm never waiting for these agents. Like, I'm doing other stuff. Like, if I have five or six running, then I focus myself on one other thing. Like, I write something, or read up on something, or review other stuff, or whatever it is. But I'm not watching a single agent. So,

Quinn: How many do you usually have running at any given time?

Thorsten: Right now, I'm looking at it, two, I think. But you probably have five times that, right? But I think I have peak—like, if you would graph it, I think it's always one. Peak is like five or six, you know?

Thorsten: Yesterday I had 22 running because I asked it to eval something, and it started 20 Orbs to test the change. But I'm not looking at them, like, I'm not—

Quinn: Yeah. And actually I want to go deep into that. We do this a lot where it's an eval, and you might think an eval is something where you have to have a PhD in computer science and be an AI researcher. No. Like, for us, you know, an eval might be like—very concrete example: for having Amp manage its own settings, it used to be that it would use the CLI in Orbs, and if you're using Puck, it would use a server tool. Well, that was different, and I standardized it, and I made it so both had a tool.

Quinn: I had the agent come up with a bunch of use cases. What are the kinds of things that people ask Amp to do to, like, change its own settings or make a new project or add an OpenRouter connection? I went through our bug reports where people ran into issues to help seed it. And then I said—

Thorsten: Wait, when you say you went through it, you like—yeah, it was Amp. Yeah. ‘Go and look through all of the bug reports and analyze it,’ right? Yeah, yeah.

Quinn: Oh. Yeah, I told it to go through it. Yes. Yeah, that's right. And come up with a corpus. And then try it using the tool descriptions in both Orbs and Puck, and make sure it works. And it found a bunch of issues, and it cleaned a bunch of stuff. And it did all of that, and then I said, ‘Now run it again.’

Quinn: Or I recently improved our browser use in Orbs. It's not yet released, but I think that browser use in Orbs, if you think computer use is cool, well, imagine not being tied to having it do stuff on your computer. It gets in the way, it could only do one thing, you got to keep your computer open. And browser use in Orbs, just had it make a bunch of synthetic applications, like a storefront, something to do, like, local planning permits, and click through them. And, you know, put up annoying cookie banners. I, you know, had it do all that kind of stuff, and it does it.

Quinn: And I'm sure that there is a better way of doing evals. It could be even more perfect. But it's like with usability testing. You learn most of the insights from the first three people you talk to. You don't need to talk to 100 people.

Thorsten: Yeah.

Thorsten: This is going to be live in the next two days. I recorded a tutorial video about this yesterday. So, the setup was I have this little web app. It's a Laravel app. It has a login, username, password. But imagine it's OAuth, two-factor auth, whatever, like some complicated thing. And I want the agent to be able to go through the application fully and test this with as few steps or chances to go wrong as possible.

Thorsten: So, I did what we have in Amp, and we documented this in a post called Putting an Agent into an Orb, where we said we have our dev routes. So, we have, only in dev environments, we have like /__dev routes, where you can say dev /logmein, and I think it's a GET request, and you send your username, and then you're logged in. It's only dev-only, and you get the cookies set, and you're logged in. You can skip the whole flow.

Thorsten: So, in that video, I said to the agent, ‘I want this in this application.’ And it build it. And then I said, ‘And now I want you to document that agents should use this in the AGENTS.md file in the root.’ And then I said, ‘And now I want you to spawn three Orbs, three agents that know nothing about this change, and give them a task with which you can test that they actually use this new route, like, that they discover it.’

Thorsten: And it did it. Like, it spawned, and it sent them a message where it says, like, ‘I want you to take a screenshot of the admin dashboard,’ or something like this, or, ‘Log in and figure out how many newsletters are published,’ or something like this. Like, these models are now so good. I think it's because of how they're trained, of like evalling each other or like doing these test scenarios, that if you tell them, ‘This is the thing I want to test. Help me spawn and test other agents,’ they know how to write the instructions. It's really fascinating to see.

Quinn: Yeah. Well, I mean, it's not that hard of a task, even.

Thorsten: It's not that hard, but this was a dumb example, right? Like, you can go even harder. But it's fascinating. And here's the surprise for me in the video, and you can see it in the video how surprised I am, that it then spawns even a control group Orb where it gives it a different task and says, ‘I want you to use the login form,’ you know, and blah blah blah, ‘do this.’ So, to make sure that every path still works.

Thorsten: And then, you know, in this example, the AGENTS.md instructions were good, but you can do this for everything in your codebase if you want to make it agent-friendly. Ask the agent, spawn other Orbs, go through the flow, and make sure that it actually picks up on—like, uses the browser, uses the admin thing, uses these tools and whatnot. So, that's really powerful.

Quinn: Yeah. And having Orbs makes it so much easier to run these little mini-experiments. If you don't have a isolated, reproducible, standardized environment where you can run a lot of things in parallel, then there's—even if you have a really good worktree setup—there's probably going to be just enough friction. Do you really want to tank your laptop for the next hour and probably run into weird things with, like, file descriptors or Postgres or, you know, something, you know, or like port conflicts or, you know?

Thorsten: Yeah.

Thorsten: Yeah.

Quinn: No, you don't. You know in the back of your mind.

Thorsten: Yeah. Let's address this. Like, I shipped a lot of improvements for runners, which are our way to run and remote-control Amp agents on a machine that you own, as opposed to Orbs, which are ephemeral remote machines, right? And people said, ‘Well, I thought you guys were all about non-local dev, so why do you have the runner?’ And let's address this. I think runners on different machines are non-local too, you know? So, I have one running on my Raspberry Pi. That's a valid use case.

Thorsten: My wife yesterday came in and she was like, ‘How much electricity did we use? Do you have, like, the count?’ And I was like, and pulled out my phone, and I switched, in the Amp app, I switched to my private account, and I talked, and I said, ‘Give me the rundown of blah blah blah.’ And it did it. It used my Grafana where I tracked it, blah blah blah. So, I have this running on my Raspberry Pi. Valid use case. And—

Quinn: She probably thought you were really cool. She was like, ‘Wow.’

Thorsten: Yeah. Yeah, didn't even comment on it. Like, it just didn't, I don't know, I was kind of let down. I thought she would say something. But anyway, so that's a valid use case, obviously. And then the other valid use case is to complement Orbs. So, we have a bunch of customers that use Orbs, they love Orbs, they say, ‘It's Orbin' time,’ they sign their emails and say, ‘It's Orbin' time.’

Thorsten: And yet, they do have stuff like hardware that they need to test. Like, they have machines where they have, like, you know, one specific customer, I don't think we can name the name, whatever, they have hardware attached to their machines, they have a fixed amount of these machines in their office, and they want to be able to run agents on them. So, their setup is they use a bunch of Orbs, but then they have a fixed amount of these machines. So what they want to do is run Amp runners on them, and then their Orb agents can spawn agents on the runner machines, right? To make use of the hardware. Or if you need GPUs, right? We don't have Orbs yet with GPUs. So you can have like a bunch of GPU machines if you want to test shaders or whatnot. You can use them as build machines, or macOS machines. We have one. We have the Mill Valley macOS build machine that's sitting in your room, I guess. Yeah.

Quinn: Right here.

Quinn: Here we go.

Quinn: Yeah, I'm holding up an M4 MacBook Pro, for those of you on audio.

Thorsten: Yeah. So everybody can access this on the team. By the time this episode comes out, I'll have released the feature of shared workers. If not, this is maybe slightly embarrassing. But my point is—

Quinn: So, okay. This actually ties to the triad of PM, design, and engineering. And there've been some people out there that say, you know, ‘Why are you doing runners?’ Or, ‘Amp, you used to be about no model choice, and now have a lot of model choice.’

Quinn: Like, you know, ‘Why are you doing this?’ And I think that we don't operate where we have a nine-month roadmap made by sales that then gets filtered to PMs and, you know, then designers and then engineering. Obviously, we don't have that. I think a lot of companies still have the triad of PM, design, and engineering.

Quinn: I think that when you have a smaller number of people that have more skin in the game, that are across more of the life cycle of the company's, like, value creation—I'm not an MBA, like, I don't know what that means basically—but it's like people that are talking to customers, people that feel the demand in the market, and people that have a vision, and they go and create that, and they champion an idea, then you operate in a different way.

Quinn: And when it is so much cheaper to build stuff, and also—and this is crucial—when your customers are more open to change. Our customers are incredibly open to change. Even Salesforce's customers are probably a lot more open to change than they were like two years ago. Then you can try things, and you can take them out, and it's not this whole false start. And so we talk about our team, ‘Follow your energy.’ Because we know that if someone has a vision, if someone is motivated to do something, if they just want to try something, it's not a high bar to go and just try it here.

Quinn: And it doesn't need to fit nicely into some clean strategy. We're also all figuring this out as we go. So for those of you who are using Amp, if you give us feedback, if you're telling us that you want to use this thing, and you would crawl through glass to get it, like some people are for this little Claude Code thing that I shipped, I think it was earlier today, then that's actually a really important signal. And even if it doesn't align with, you know, whatever official strategy that someone might have had five years ago, we're going to try it.

Thorsten: Yeah. But you just—I was going to say, ‘Here's my strategy.’ I was going to say this. Like, this is my grand strategy. The Orbs are—

Quinn: What is your grand strategy?

Thorsten: The grand strategy is everything is Orbs, agents everywhere, controllable from anywhere. And I do think runners complement the picture. I don't think it's the future of, like, running agents on—we've said this a thousand times—I don't think that's it, but they do complement the picture. They are a bridge to making Orbs work in your setup. Some people just, you know, they can only use Orbs for that stuff, and the runners kind of fill in the blanks and make it work. So that's the big strategy. I think it makes sense.

Thorsten: Like, it's just—now that people—I shipped, like, worktree support, and people are like, ‘Oh yeah, I have like a custom worktree thing.’ I'm like, ‘Ah, you know, that's already too much.’ So we got to dial it in. But to your point of, like, everybody in the team, the other thought I had, I think I've said this before too, is the ultimate customer of AI is an entrepreneur. Like, the ultimate user of AI is entrepreneur. And what I mean with this is somebody who wants to do something. Like somebody who wants to affect change in a certain way. And take that in the most abstract sense possible.

Thorsten: If you are an engineer who doesn't care about the business goals and just cares about—I mean, I'm rehashing conversations that everybody had the last few months—but if you only care about writing the code and ship, you know, whatever, like building a nice thing, and you don't care why the tickets get handed to you, and who's the customers, and what their problem is, and how you produce value, and how the company makes money, I think that game is over. But if you are interested in that, and if you know our customer wants this, so let's make this happen, then you now have been handed the ultimate tool.

Thorsten: And I think, in some sense, that everybody in our team, they kind of act like mini founders, entrepreneurs, in the sense that—pick Lewis, for example. Like Lewis, I think on Monday or Friday, he was like, ‘Yeah, I'm going to own this. Like, I want to make this better.’ And it's not like one of us said, ‘Go and make this better.’ Like, he talked to customers, he saw the problem, he's like, ‘We can make this better. This is a gap in our product.’ Now he goes and does it. And I don't know what the hell he's doing. I think he posted an update earlier today that I haven't looked at.

Thorsten: But, like, you need somebody—you want people who move stuff, who push stuff, who manage to push stuff along. And then AI is the ultimate tool for this. So,

Quinn: And every week we have two hour-long meetings. We have one—I'm based in California—it's 11:30 p.m. on Sunday night, and then it's 9:00 a.m. Monday morning for me. And, you know, if you're in Germany or Australia or whatever, different times. And that's how we get aligned. But then throughout the week, I mean, we're talking a lot. We talk all the time, nothing scheduled. But the agent, Amp itself, we built Amp to be the thing that helps us stay aligned.

Quinn: And one of the things is it's so easy to see what anyone else is working on. It's so easy to see what was someone's intent behind doing something. And that makes it so easy to feel like you can do anything, and you don't step on anyone's toes. You don't have to ask them the mundane questions of, you know, ‘What did you mean by making this change?’ That's the benefit of using a product, an agent, where everyone on the team is using the same agent, and it's built for multiplayer. It means you actually can work this way.

Thorsten: Yeah.

Thorsten: Yeah, there's a lot of that going on. I mean, we just had, like, some production errors, right? No, this was before, sorry. I was looking at some other error in the logs that I found by accident. And then I was like, ‘Why is this coming up?’ And then it found the commit that added it, it found the thread that added it, it found out who, you know, wrote the thread, what the motivation was, what they did, and it basically saved me, you know, from reaching out to them on Slack or something. So, it's coming together.

Quinn: Yeah. Was there anything too controversial that you did not include in that post last weekend? Where did you hold back?

Thorsten: This is, one thing—well, I guess, like, I could have formulated everything a little bit more extreme even, you know, where I said, like, ‘Oh, the dev tools won't matter in the future. It will be washed away by tokens.’ I do think, like, one hot take that I didn't put in there is, you know how most people are sad about, like, losing the craft and, like, ‘AI is, you know, being shoved down our throats, and I miss typing,’ and all of this.

Thorsten: Like, one thing that I find myself being really disappointed by, and that makes me sad and frustrated, is seeing how conservative and skeptical and thinking in the box most engineers have turned out to be over the last year. It boggles my mind. Like, I assumed we're all, like, interested in technology and being good as engineers. But then over the last year, it's like, guys, like, don't you know anything about the history of the technology you're working with? You know, they say stuff like, ‘Oh, it can't do this.’ And I'm like, ‘You don't know, like, how Java was perceived? You don't know how JavaScript was perceived? You don't know how Pascal was received? Like, have you never read a book about programming?’

Thorsten: You know, like, we've had this for the last forty years where a new thing comes out. Personal computer, ‘Oh, that's nothing. Like, that's a cheap thing.’ The fucking iPhone. You know, like, every technology had, like, these voices. And I'm looking around, I'm like, ‘Guys, have you not read anything about the history of programming? You sound just like somebody in 2002 saying, “Garbage-collected languages, this will never fly.” You sound like somebody in 2010 saying, “JavaScript, that's not a serious language.”’ Like, it's crazy to me.

Thorsten: And the other thing is that I guess, like, maybe I'm interested in all of this, like the whole business and startup and finance background with a lot of this stuff, but guys, do you not realize, like, what the function of software is? Like, you have to realize it's not the stuff that you do in your free time in open source. You have to realize that in a business it serves a purpose. Like, if somebody can get away without hiring software engineers, they would do it. Everybody got to realize you're a means to an end. Like, you know.

Thorsten: And it just—I don't know. That's my hot take. Like, I'm disappointed by a lot of people that I previously looked up to that turned out to just be super conservative and skeptical and not even think anything outside of the box of what programming is. And—

Quinn: Have you seen anyone snap out of that?

Thorsten: I mean, famously, you know, DHH, right? Like, I interviewed him, I guess it was like a year ago. I—or I think we recorded it in—sorry—December last year, I think. December or November, and it came out in January.

Quinn: Yeah, December 2025.

Thorsten: Yeah. And I interviewed him with Ryan, and I nearly couldn't get a word in, but, like, he was like, ‘Oh yeah, these agents, they're not good. It's slop,’ you know, stuff like this. At the same time, Karpathy was also saying this, you know, like, ‘Oh, it's slop. Agents are slop.’ And I was sitting there like, ‘What are you guys talking about? Like, don't you see the trajectory? Like, even if at this point it was slop, you have to see, like, that two months ago it was even sloppier. So can't you, you know, project out, like, the next two months?’ And it's—

Quinn: Yeah, I mean, they could say, ‘Well, at the time—’ look at how much worse they were back then to what they are now, so, you know, how much ground did they actually lose?

Thorsten: Maybe none. Who knows? Like, that's the other argument, right? They're now saying stuff that we've been saying for a year. Like, I don't know, I think maybe we get more out of these agents than maybe somebody who's just starting now, because we've seen more, we've built up more intuition, more trust and whatnot, but—

Quinn: And actually, there's a bank in Australia that it's not one that, you know, we work with closely, but in my opinion, they got good and current and modern with AI too soon. They kind of hit a local maximum, and then they started to think that they knew everything. You know, I think it's easy to feel like you've won at that point. So I think it's so important to always have that humility to not pat yourself on the back for achieving an 85% rollout of, you know, X tool, of, you know—

Thorsten: Somebody who…

Quinn: I don't want to say what kind of products. You know, something like GitHub Copilot, because the next day there could be something better that comes out. And so it's about taking on a stance of constant humility and openness to change. And, yeah, it's not about being right at a point in time. And I think one of the things that makes me skeptical of the people that have these silver bullet skill stacks is that, yeah, maybe that works well today. I still have the question about if a skill stack is so good, why isn't it built into the agent? I mean, that's, you know, our view.

Quinn: But it's not going to be needed tomorrow, and so you just got to be willing to change constantly and hold on to basically nothing and move faster than ever.

Thorsten: Yeah. What's your missing hot take from my list that I published? Was there anything where you're like, I would have put this in?

Quinn: I think it's that people are not realizing just how much will change.

Quinn: Like, planning is dead. Or it's going to change 99.99%. Making slides, documents, a human emailing another human, most of the reasons why a human emails another human do not matter. Even if they do matter, they're going to be overwhelmed because you will not know if it's a human on the other end. I think, like, human-to-human interpersonal connection is still really important.

Quinn: Who cares if it's efficient or not? Like, I got a family, I got friends, like, humanity is absolutely there. But everything about how a company works will change. And it's thinking about that maze you're looking down on. It's this thing that's growing, and it's going to, you know, go over the walls even if there's a wall. It's going to burrow beneath the surface. It's going to just change everything.

Quinn: And I do wonder sometimes why it hasn't changed more yet. And then it's the stuff that we do with real customers, you know, really big enterprises. I think a lot of people listening to this might think, ‘Oh, these guys are a bunch of cowboys. They push to main. They go on X. They've got banger tweets.’

Quinn: You, at least.

Quinn: And, you know, no, we have that, but we temper that, or we keep ourselves in the real world by working with a lot of big banks and big companies and actually following this stuff through. And so, you know, we see some of why it's slowing down. But it feels like things have gotten good enough, and it's moving from, like, there's big companies where, you know, a large portion of the people that matter the most are using agents well, to now people are rethinking entire business processes with this.

Quinn: And I don't know, it feels like there's going to be a lot more change over the next six months, and certainly we want to drive a lot of that. I think we got some pretty cool stuff going on.

Thorsten: Yeah. Let's see how it plays out. I mean, what we're seeing is that maybe the real economy is so diverse that it kind of softens the blow, you know, as opposed to, you know, say AI was invented and it's only let loose at Google, at whatever, like one company, I think the effects would be more dramatic than if you spread it out over the whole economy where everybody has different processes. But, yeah, I don't think there's a way around it.

Thorsten: But, yeah, one quick hot take to end this. I didn't put this one in. I don't think languages and frameworks matter that much more in the future. I don't know what's going to replace them, but I think the idea that I'm a Rails developer or something, like DHH said yesterday in the keynote, and I talked with somebody the week before where they asked me this on a podcast, and they were like, ‘Do you think it still matters?’ I'm like, ‘No. Like, the biggest lever that I've ever seen in my whole career for developers are these agents now. It's not a new framework, like, not even close,’ you know? And I've loved using Rails, but I think that's just over. Do you disagree or agree with—

Quinn: I think that having a good foundation to build on is always going to be better than building entirely from scratch, because it is basically just adopting the good, hopefully good decisions of other people.

Quinn: And to the extent that a framework does that and adds some guardrails or bumpers for what the agent can do or thinks it should do, I think that that's going to be beneficial. I think that we benefit from using SvelteKit in our web app—

Quinn: —versus if it was just a raw Node server and we reinvented SvelteKit from scratch. But also we're bumping up against the edges, and I think it's now, like, in the last two weeks, Amp has patched SvelteKit just using, like, pnpm patch, like, two or three times for bugs that it found that seem legitimate that are not present anywhere in the issue tracker or upstream. So, you know, I still think, though, that we benefit from it.

Quinn: As for Rails, look, you know, you and I were both big Rails guys even, you know, way back when. I grew up in Chicago near, you know, where they were making Rails and all that, like 2005, 2006. I think it has a great design. I want to watch DHH's video. I don't know.

Thorsten: Yeah, yeah. I think what matters is the runtime behavior, right? Like, we talk about this, that—

Quinn: Yeah. Slow as fuck.

Thorsten: Slow. Yeah. Is it slow, or is it easy to debug, or is it easy to whatever? Like, that's going to matter in the future. But, yeah. All right, then let's wrap it up. Hot Take Thursday. And I think we haven't even touched all of them.
