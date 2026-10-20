---
title: "Raising an Agent - The Company of the Future (Season 2, Episode 6)"
summarySlug: "coding-with-agents/raising-an-agent-season-2-episode-6"
sourceUrl: "https://www.youtube.com/watch?v=deiLxNZH_DM"
videoId: "deiLxNZH_DM"
capturedAt: "2026-10-20T15:22:25.140Z"
series: "raising-an-agent-season-2"
episode: 6
channel: "Amp, Inc."
language: "en"
---

Source: https://ampcode.com/podcast/season-02/episode-06

YouTube caption retrieval was unavailable. This sidecar preserves the publisher's English transcript, extracted from the official episode page. That transcript has no timestamps; none have been inferred. Caption kind is unknown. No translation or original-audio check was performed.

## Transcript

Quinn: We built Amp. We are one of the big agents. We've done it with a team of 21. We have revenue the size of our competitors that have 30 or 40 or 50 times the staff.

Quinn: It feels like this is the company of the future. And that feels weird to say, and time will tell, a lot more companies are going to look like this.

Thorsten: People, CEOs, founders, ask us, like, ‘How do you guys work? You ship with such a velocity.’ The old playbook from 2016 of, like, you take VC money and then you triple size and basically you measure the success of your company by the number of people you have employed that's kind of over. You cannot look at the company with the structure from 2019 and say, ‘It's 250 people. I'm going to multiply everybody 10x with AI,’ and then not expect this to change how the company operates.

Thorsten: Welcome back. Another episode of Raising an Agent. This time we're in San Francisco, in the middle of San Francisco. The whole Amp team was in New York City last week. Then half of the Amp team back to North America, or in North America. Now I'm in SF this week.

Thorsten: And today we want to talk about what everybody asked us in the last couple of weeks, which is not about a feature or about the product, not necessarily, but they ask us how we work, ship Amp the way we ship Amp, right? Like, you've gotten a lot of questions about this.

Quinn: Yeah. Yeah.

Quinn: Yeah, and we've realized, too, that the only way we can build Amp in this way is because we have a company that's totally different from how most other companies are today, at least, and that some people, yeah, they like the product, but they also want to learn or at least see what we do.

Quinn: Yeah.

Thorsten: So to set the scene for everybody who doesn't know, I think most people know this, but we are 21 people.

Thorsten: The Amp team has existed in this shape since, I guess, a year. Or the last person we hired was Hamish in February. We haven't hired anybody since, and we also don't really plan to hire. You know, like, we want to hire FDEs, so if you're in New York City.

Thorsten: But our numbers are pretty good for, you know, revenue per headcount. We don't plan to change this.

Thorsten: And that's a big thing that you have to mention in these discussions. Otherwise everything else we're going to say doesn't make a lot of sense, right? Yeah.

Quinn: We don't have departments, we don't have executives, we don't have this team over here, this team over here. Basically, everyone can do everything.

Thorsten: Everything, yeah.

Quinn: And there's a ton of trust that everyone has, a ton of ownership, but not, like, territorial ownership where, ‘Oh, you can't trample on this.’ And things just work out. But, like, why don't we go through a week in the life of the Amp team? So yeah, like, what is it on the weekend, what do we do to get ready for the next week?

Thorsten: Fix bugs, listen to feedback. Then we sometimes chat about what should we do the next week, what are the big things.

Thorsten: I guess everybody's always constantly, like, using the product and whatnot, like, and then, I think Sunday for me is what are the most important things. That's what I think about. And then, for the last year, I think, I don't know, like 25 posts maybe, or something like this. Like, I would send these Sunday posts where would write down like, this is what I think is the most important things, or this is how you do software development with, like, some stuff kind of that's in the air that I pick up.

Quinn: It's usually either, here's what we need to change, or, hey, things are going well, let's keep on doing that, and here's what's going well.

Thorsten: Yes. And then Alex sent some numbers like, ‘These are the numbers for the week. It's trending up, down.’ And then on Monday we have two meetings, but that's just the two of us.

Thorsten: The whole team is in these meetings. So we have one meeting Monday morning, European time zone, 8:30, where everybody in Europe is. And then the Australians. We have five people in Australia.

Thorsten: And you. You Sunday night, I guess. We're in this meeting,

Thorsten: And then we have the same meeting again later in the day, like eight hours or nine hours later, in the SF time zone.

Quinn: Yeah. Basically, the same meeting. We would have it be one meeting if we didn't have people all around

Thorsten: Yeah, exactly. It would be one meeting. So everybody except the two of us on the Amp team has only a single fixed meeting per week, and that's on their Monday morning.

Quinn: The—

Thorsten: And then in that meeting, the usual structure is I pre-fill, like, the meeting notes, basically inspired by what I wrote earlier or things that I saw in Slack that are important, like, we got to fix incidents or stability issues with this, or, ‘Hey, we should think about this new feature,’ or what's currently stuck in work in progress and hasn't been shipped yet, like, and I kind of pre-fill the list.

Thorsten: It's an hour-long meeting. And then for the first, say, 45 minutes or something, if I'm good with the timekeeping, we just talk about the priorities.

Thorsten: And then at the end of the meeting,

Quinn: And there's no strict agenda. It's not like this is one of these meetings a lot of other companies have where each leader prepares the section for their team, and they highlight the contributions of one person, and it's all scripted. Everyone shows up, it's super freeform, and I think that's good because sometimes you don't know how you feel about something or what you want to say about something until you're actually in it and you're seeing the rest of your team. And it's actually a discussion, it's not one of these prescripted things where nothing actually happens.

Thorsten: So I put some stuff on the agenda, but then everybody else fills out stuff too they want to talk about. I just try and prime it. And I think the thing that I say the most in these meetings is, ‘Any thoughts, comments, or questions?’ Or something. Because I always, like, want to get everybody, like, to share what they think. And then the idea is

Quinn: And what I would say there is, I think we've also been at companies where if someone in a meeting is leading it and there's no one who has anything to say, well, you think, like, well, maybe they do, but they don't know if they can speak up. We probably, I think, felt that, I don't know, first few months when doing this Amp stuff, but now I feel pretty serene that if someone isn't speaking up, then they actually just want to move on, which is nice.

Thorsten: Yeah.

Thorsten: Yeah. And the other thing too is all the cameras are on. It's not a camera-off thing. Like, and I will call people out and say like, ‘What do you think?’ Like, we just, you know, ‘You haven't said anything. Let's get you involved.’ Because it's like 10 people each, roughly. It's a smallish group. Everybody gets to say something. Not everybody is always there. And you want to have people talk about things.

Thorsten: So I would say the main goal is get everybody the same page as to what the most important things are in the business, in the product, and whatnot.

Thorsten: Sometimes it means the most important thing is keep doing what we've been doing. Sometimes it's, there's a large customer, we need to help them out. Sometimes it's, ‘Guys, we have eight things stuck that are not released. Let's get them,’ something like this.

Thorsten: And then we talk

Quinn: And there's no, like, higher-level quarterly theme that we have to figure out. And sometimes other companies, it's, you know, what's actually important, and then, you know, what leadership said like two months ago, and you need to figure out how to tie that back to the bullshit theme. We are free from any of that.

Thorsten: We do have to say this team, everybody on the team is motivated by growing the company and making money with it, or like that we make money. Nobody is in this for the—I guess everybody loves to build a beautiful product, but everybody is motivated by shipping something and making money from it. Like, that's, I think, rare in that density. There's other engineering or product orgs where nobody cares about making money, and here it's, ‘Hey guys, can you support this?’ The question is, ‘Well, you know, what is the customer willing to pay for this if it's a huge lift or something?’

Thorsten: So

Quinn: Yeah. And we'll talk more about how we got there.

Thorsten: That's

Quinn: And another thing is everyone really thinks about the company overall and not their team, because they don't have a team, we're all one team. They don't think about their feature area, because there's so much to do, nobody has that much territorial ownership over any particular thing. So it's all about what is best globally for the company.

Thorsten: Yeah.

Thorsten: Yeah. Okay. So, we're all on the same page, and then in the last, say, 10-15 minutes of the meeting, I basically say set a timer. Sometimes it's, I don't know, four minutes, depending on how much time we have. And then the goal is that we have a silent time of writing where everybody writes down their goals for the week.

Thorsten: So, after everybody's primed on what are the most important things, then everybody sits down and silently in the Google Doc writes down, ‘These are my goals for the week.’ They should aim high, should be ambitious, you know, you should hold yourself accountable to what you write down. And I will notice if for the fourth week, you say you're going to do this and you haven't done it. I'm not going to call you out and say like, ‘This,’ but I think everybody knows it. In a small team, it works.

Quinn: Yeah. Well, I mean, we might call them out or someone else might call them out, but it's not like a, ‘You're in trouble.’

Thorsten: Maybe. Maybe, yeah.

Thorsten: Yeah.

Quinn: It's like a, ‘Let me help you as a teammate who cares about you.’ And I think we all want to, like, bite off more than we can chew sometimes.

Thorsten: Yeah, or it's, ‘Hey, it looks like you're feeling stuck. Should somebody take this over? Should we abandon this? Should we change direction? How can we unblock?’ Like that type of thing.

Thorsten: So, then everybody writes down their goals, and then everybody goes and says out loud like, ‘This is what I want to work.’ This is, you know, they just give you the headline of what they wrote down. And I think that often brings up some other questions, and then I ask, ‘Okay, do you write a news post? When do you want to release this? Wednesday, Thursday, Tuesday, today, whatever?’ And then we just all kind of align. And now, I think let's talk about what you mentioned there. The ownership of this, where do we assign people to things? How does this work? Do I say, ‘You should do this. You should do that’?

Quinn: It mostly just falls into place. We have this principle that do what gives you energy. That is the best way to do things, 'cause if you like doing something, if it gives you energy—I mean, sounds like super woo-woo, but if something gives you energy, you're going to do it way better than if you don't want to do it. And out of the 21 people on our team, for any given thing we need to do, there's probably going to be someone who gets energy from it, even if the energy they get is actually just, it's solving a big problem for a customer or saving money or something like that. And so we always want to find that person, and usually we can find someone.

Thorsten: There's a lot of freedom where I don't care, about your hours really, as long as you get stuff done. Everybody has kind of like their side projects they push forward, and everybody's fixing bugs, and everybody's kind of responding to customer emails and like that. Everybody does this. And then they kind of have their passion projects they push forward. Thing is, it's the same team. We don't worry about onboarding and fucking 10 more people and now splitting up in reorgs. Nobody has ever thought about any of this.

Thorsten: Yeah.

Thorsten: Over time, like, people kind of found their niche somewhat. Like, Hitesh and Nicolay, they always do the new model releases. New model drops, and they kind of eval it or, you know, make it work in Amp or something. And this we identified as something where you need, like, one person who's responsive to it so it doesn't fall through the cracks, because these model drops are at any—there's no rhythm to this. It could be a Thursday evening or Saturday morning, or whatever. And you need people who feel responsible for it. Then Camden, for example, he's very much on the infrastructure side of things. Tim Lucas and Brett, they're designers, but, you know, like, they're multitalented, yeah. They're Renaissance men. They work on, like, the UI and flows and whatnot, and landing pages, kind of this. I'm everywhere, you're everywhere. Mean, you like the back-office stuff. You like this. You like the gnarly stuff. And you do a lot of the workspace and model routing, like the gnarly stuff.

Thorsten: Yeah, I haven't touched this ever. I'm not going to touch it. Dario did a lot of this. Beyang did code reviews. Like, there's people who have—like, if you think of a code area or a product area, there's some person with, like, a dotted line connected to it, but it doesn't mean that they are the only person connected to it or that you cannot go and change stuff, right? But in those meetings, yeah, people will maybe come up with things, or if somebody notices, ‘Hey, the sidebar is janky, whatever,’ then we might bring it up in the meeting, and then the person who last worked on it, either says, ‘Yeah, I'm on it,’ or we will ask, ‘Can you take a look at this?’ Or something. Yeah.

Quinn: Yeah. And when you want to go work on something that someone else was doing, forget about at Amp, at any company, there's some substantive reason why you want to get their help on it sometimes. And then there's the worry, the stress, the politics, like, am I going to trample on this? Is it my job? Am I going to neglect my work that I'm being held accountable to? And am I going to piss them off? This going to be like a back-and-forth where I change this and they change it back? And we've talked to so many people over the last couple weeks who have been wanting to talk about how we work, and it is so clear that second kind of thing looms so big in their heads. And we do not have any of that. I think it's because we have this team of 21 trusted people that we've worked with. We're all motivated by making the overall company successful. I think that it's so obvious there's so much work to be done that no one is clinging on to things. And everything is changing so much so that even if something made sense two weeks ago, it could not make sense anymore. And when people go and work on the stuff that I did, I am genuinely excited in some cases it's not something that gives me as much energy as other things, and I'm genuinely excited by this really smart other person on the team. What are they going to do to make it better?

Quinn: Like, Nicolay had this idea of, when people hit their subscription limits when they're on, like, Amp megawatt or gigawatt, what if we give them a button to reset usage? And I hadn't thought about that, but that's a really awesome idea. And he's just going to go do it. And he asked me about it, but it was just, you know, I think he wanted to know what I thought. He didn't ask me for permission, and if I was on vacation, then he would have just done it.

Quinn: Yeah.

Thorsten: So, the other example is Hamish. He was working on an internal thing, how we sync data between two subsystems. That was pretty gnarly. And at the same time, he started hacking on the iOS and macOS application. He asked me for permission first. He's like, ‘Can I, you know, work on this?’ And I basically said, ‘I don't think it, you know, like, I don't think it makes sense. We have the PWA. Native app, I don't know.’ And I think then Connor was like, you know, ‘Just do it, and, like, impress somebody or something.’ Like, you know, you've got to push forward things that you believe in. And then I don't know exactly how it worked out, but at some point we had an iOS app, and he's like, ‘Hey, I built this.’ Oh, I think I said, like, you know, ‘Spike it out. Like, take two weeks or take a week. Can we get something running?’ And then we did, and then we said, like, ‘Look, this actually looks good. Like, for one week, let's do this.’ And then he just worked on this. And now we have a macOS application and iOS application.

Thorsten: It wasn't like on the roadmap, ‘Oh, in three months we're going to build an iOS application.’ It also wasn't that I brought it up. It was that somebody brought it up. They made a good argument by showing, you know, how much effort it would take, how it looks, like, how it could work, what it could enable, and then we said, ‘Let's do it.’ And I think that's how a lot of stuff works. But a lot of stuff is also, man, there's so many points where I now open our app and I go, ‘Who did this? And, like, this is good. Like, I didn't know that's a thing.’

Thorsten: So at this point, again, we've worked together for at least a year, this team. Others have worked together for 15 years on the team. We're kind of dialed in on what we think is good or not. Like, nobody on this team will put emojis in the UI tomorrow. Like, I can guarantee this. So that's another thing. Like, we're dialed in, so it's not these huge surprises, right?

Quinn: Yeah.

Quinn: Yeah. And so it's not that we have a 21-person team, so you and I are able to exert total control over this small team, and it's not like that. It's something different and something, I think, really special, where because it's a small team, because people have ownership, they have skin in the game, they are the ones out there talking to the users and customers, and they're the ones shipping it, and if it breaks, then they're the ones fixing it, it's this end-to-end ownership, and it makes everyone better. It makes everyone have the raw ingredients that, in other companies, are only going to the leadership, then they have to make all the decisions. All those raw materials in this environment, makes people really good, they're getting them here. Every single person is getting them here.

Thorsten: I mean, we've been saying this internally, or you started saying it, right, that we could take any person on the team and drop them in front of our most important customer and we would feel safe, right? It wouldn't be like, ‘Oh no, don't let them talk to—’ Like, everybody here is really customer focused.

Quinn: Yeah. Well, very concrete example. In New York last week, we were at a very large bank that's a big customer, and we had a very carefully set schedule of all the talks that we were giving to this bank, I go get some lunch. I come back, and one of our team members is giving a totally unscheduled, impromptu talk that I later found out was because they just really wanted it. He mentioned something in a previous talk, and they just added it in. And I know that at so many other companies, if, like, something was randomly added by someone on the team and you didn't know about that, people would freak out, but I was just, like, serenely happy about that.

Thorsten: Yeah. And he gave the same talk the next day in a bigger office, or the—yeah.

Quinn: Yeah. People loved it.

Thorsten: And on the same customer visit, Karl was, basically, ‘Who wants to help with what?’ And everybody raises their hands. Like, there's nobody on the team who doesn't want to talk to customers. Everybody does it. So, what you also see on our Slack is somebody built something, I'm making something up, some way, model routing, whatever. And then they often, without prompting, try to figure who's the customer who benefits from this, who's interested in this? I'm going to hop on a call with them, or I'm going to talk to them, I'm in their Slack. So

Quinn: Yeah. And in other companies, even the ones that try to do it well, they say, we have a process whereby an engineer and a product manager can go talk to the account team or the customer success team, and coordinate that. And there's always weird things where it's like, ‘Oh, well, this customer is upset about this thing. So if we're seen as not giving enough focus to that big problem they want, instead doing the shiny stuff, then that's bad, and you need to be careful here, and do we want to waste our limited attention every week with this?’ And All of that adds friction. And so you do not have the ability for the engineer and the PM to actually go talk.

Thorsten: I mean, we'll come back to this, I guess, five more times, but just to say once more before we move on from Monday to Tuesday or something, it comes back to a small team that's dialed in. If you run the 2016 playbook, basically, if you say, ‘I'm going to take funding and I'm going to triple in size this year,’ every problem then looks like the solution is hiring. And then constantly worried about, ‘How do I onboard people? How do I explain this? How do I do this?’ But imagine you work somewhere and hiring is not an option. Then you work completely differently. Train each other up, you kind of build up instincts on who likes what, and who's good at what, and who would enjoy something. You don't have this if you go from 20 people to, say, 200 in one and a half years or something. It doesn't work. So a lot of that stuff is based on this.

Quinn: It seems like so many tech companies out there are either growing 50% or cutting 50% in any given year. And some of do both of them in any given year. It's crazy. And that means you have people with totally different interests, totally different outcomes, depending on how the company does. You have people starting to think about they are actually primarily judged by the success of their own small team, not the overall company. You have people that are making globally sub-optimal decisions, because they're being held accountable for this deliverable by this date, and that whole idea of a calendar with deliverables was just something to make what the company is doing legible to someone in senior leadership, or to the market, which itself is a lossy kind of process there. And that really adds up, and in the past, it was necessary, because you needed people to do the raw work. But now, you can have people that are full humans, that are bringing this like well-rounded, they're going and talking to the market, they're they're thinking of what they should do, and they're supporting it. That can all be one person. You don't need the people that are just turning their brains off asking for sizing points in a Jira ticket That is not a role that needs to exist anymore. People could do so much more.

Thorsten: After the meeting, everybody goes off and works on what we decided is most important, and then everybody works on their own schedule however they want on this.

Thorsten: Then people ask, ‘But what happens if somebody builds something that you don't like or that isn't good?’ And to answer this question, I think we first have to say the whole team communicates a lot. We're not in Slack all day, but we do have four important channels for this discussion. One is the work in progress channel. That channel is used for multiple things. It's, ‘Hey, I'm working on this,’ which is kind of like you're raising your hand and getting in each other's peripheral vision to say, ‘I'm working on billing.’ If somebody else bumps into something with billing that week, they can say, ‘Hey, Quinn is working on billing.’ So, that's kind of the thing where you need to be aware of—if you're a team and you're running towards the same goal, you want to see where everybody else is on the field, like that's peripheral vision.

Quinn: Yeah. And we also all use Amp, and so sometimes the agent will just serendipitously say, ‘Oh, this person just changed this,’ as well, and shared Threads. And that's a benefit we get because we're all in the same agent. I think, you know, you in theory would get if everyone in your team all uses another agent that's not Amp.

Thorsten: Yeah.

Thorsten: Yeah. Can go into Amp and say like, ‘Who's working on what right now?’ And it would do it, like it would answer me. But still, there's proactive communication of what you're working on. But the work in progress channel is also used as a channel where people ask for feedback. So, you build something, it's not shipped. We have another channel called shipped, and that's basically the release announcement or changelog channel, where somebody says, ‘This is out now, I made this 10x faster, I added this, blah blah.’ Usually, if something is big and it's in shipped, it's not a surprise. Like, the only good surprises in shipped are, ‘I made this faster, look at this graph, it's now this,’ like something that everybody would always agree is a good thing. But usually, if you have feedback and you're unsure about something, you post it in work in progress channel and say, ‘Guys, I'm unsure about this. Should we do this?’ Hitesh, for example, this morning, he had a screenshot of something that he had already built, and says, ‘Should we do this?’ Change how we select Orb size and what not in the prompt editor. And then he tags me and I think he tags Tim and Brett, like the two people with design and me, because I also work on this, and then we talk about, is this good or not, and then we say like, ‘Yeah, let's try it.’ Think about this, like in a traditional company what would this involve? Like, it would be, ‘Hey, I'm not sure about this, let's ask a designer.’ Then the designer goes and designs something in Figma or something. Then talk to the PM and the PM says, ‘Yes, no, maybe,’ And then if the PM says maybe, but they're going to ask an engineer, ‘Like, is this worth the effort?’ Or something like this, and then you come to a—then in the next

Quinn: Yeah. The first thing would be, ‘Why the hell is Hitesh, who's not even on this team, thinking about that?’

Thorsten: Maybe this, maybe this. Yeah.

Quinn: ‘Does he think that we're bad?’

Thorsten: But in our case, it's just a prompt away, often, so, ‘If you say no, then my ego isn't hurt, I haven't spent two weeks on this.’ That's how most of these things are.

Thorsten: Then we have another thing in the Monday meeting, for example, ‘Dario, you want to ship the Puck MCP server or something.’ He says, ‘I want to ship this week.’ Then I'm going to ask them, ‘Please write the news post. Please write the announcement and share this in the work in progress channel before you ship this.’ And sometimes I ask people to write the news post weeks before we even plan to release something. And the reason for that is if you sit down and you write an announcement, you as the person building it, you have to think, ‘What is the problem we're trying to solve, and how do I explain this to the user? Like, why are we even doing this?’ And if you then share the screenshot of that news post in our work in progress channel and it doesn't make sense to any of us, that's already good signal that maybe we need to change how we work on this, we need to change what we're working on, or maybe that we shouldn't do it at all. That's like another mechanism that we have with the news posts. And obviously, the more we're convinced of something, the more bikeshedding it gets with the news posts where like, ‘Oh, you're going to say should be title case, and I'm going to say, like let's change this sentence, you shouldn't say this, don't talk like marketing, blah, let's change this.’ Can get pretty frustrating, but I think it's good practice.

Quinn: Said it can be pretty frustrating, there are other teams where if you have a news post, and

Thorsten: And.

Quinn: People are jumping in and going back and forth like ten times on things that are minor, where that's really annoying, and you've got to get it out on a certain date, because you planned it, and I think we've felt that. But we just said, we're not going to care and just do it. And I think the results are good, and you know, you and I talk about this sometimes where maybe on our team people are still annoyed. It's so much back and forth on a news post, but I don't think people are.

Thorsten: I think they are, sometimes, like frustrated.

Quinn: You think so?

Thorsten: Yeah, I think so. I think so. I guess

Quinn: I don't think so.

Thorsten: I think

Quinn: I think you're pattern matching from

Thorsten: I…

Thorsten: Well, maybe, but I do think there's—you the news post it's kind of like—back in the day, this was called README-driven development, which is, ‘Hey, like show me the API before you build the thing. Like, show me how I would use it before you start building.’ That's one big thing, but sometimes it's hard to—if somebody writes a news post and I come with my rhetorical questions as a new user, like, ‘What does this mean? I don't understand this. What is this?’ But then, I can't help it, then you mix in some stylistic things where it's like, you shouldn't say it like this, it's not called this, it's called this. It's very hard to cleanly separate the idea or the concept of what you're trying to build or communicate to the user versus stylistic choices.

Thorsten: Sometimes, it's pretty simple what the feature is and then we're all about the stylistic things, and it's all about like, should the headline be this or this or this, or should we put a pun in or not. I think it can be frustrating.

Quinn: I think you are pattern matching. Yeah.

Thorsten: Maybe. Anyway, so like work in progress, that's another function of, working together, communicating, and it kind of avoids this, ‘Oh, somebody shipped something that I don't like.’ So, that's one way, you get feedback often. People constantly ask for feedback.

Thorsten: The other mechanism that we have for feedback is, people ship stuff behind the feature flag and then post in the work in progress channel and say, ‘I turned this on for everybody.’ So, now suddenly, everybody opens Amp and has a new whatever thing showing up, and then

Quinn: And we have it all in the agent. So the agent can make the feature flag, can turn it on for our workspace, or 10% of users, or specific people, it can see who has enabled it, who's enabled it and then later disabled it, and all of this. So we can do it all from the agent.

Thorsten: Yes. And then, we have two other channels which are called orb bad and orb good, bad feedback or negative feedback, and positive feedback. So, if I enable something tomorrow, it might be that in 24 hours, there's like five messages in each of those channels, where somebody says like, ‘I don't like this about the new feature,’ or ‘We should change this.’ Or somebody says, ‘I love the new thing.’ Somebody turned on, like a new UI, and this morning Camden was like, ‘Oh, I love the thing.’ So, that's good feedback. It's not live for everybody yet, so we collecting this internally.

Thorsten: After collecting feedback, or iterating, or taking it out, and sometimes there's huge discussions and what not, either we delete it and say we're going to scrap it.

Thorsten: But in either case, we're going to post a message in the ship channel to say, ‘I removed this,’ which always gets celebrated, or ‘I shipped this, it's now live to everybody.’

Quinn: Yeah. And I remember we called it ‘orb bad’ even before Orbs were what they are now. We've always liked Orbs. Because we wanted to avoid this phenomenon that we saw, or at least—this is why it made sense to me—where everyone wants to find the rosy nice parts of feedback, the silver lining in feedback, but no, sometimes it's just like, here's a bad thing that we should change and it's faster than ever to change. No one has any emotions about it. So, yes, it's bad, and let's go fix it.

Thorsten: I mean, to be honest, I check the orb good channel every morning before I check any other channel. And then, the orb bad channel is like the cold shower. ‘Well, all right, let's go in there.’ And then, you got to prep yourself. And if you see that you've been mentioned in it, you know that you built something people don't like, or you had a bug, or whatever.

Thorsten: And I think that's fine. But the culture is, you just give each other feedback. And sometimes, it can get pretty—not rough. I don't know. I don't know. But it's like somebody says like, ‘I think this sucks. We should take this out. It doesn't work for me.’ And that's good. That's good feedback. So, I don't know how more to answer this. Like, feature flags, communicating a lot, sharing it internally.

Quinn: And we see all the feedback from customers. Every single person, we have these bug reports channels and the orb bad and all these other ways we talk to customers, our email, like shared Slack channels, on X, and all that. We all see all the feedback, that ultimately is like half of the raw material where we would develop judgments about whether something is good or bad anyway. We're all seeing that same input, whereas at a bigger company where everyone is working on their own little compartment, you're not going to get the global view of things and you're going to get a tiny percentage of the feedback. A lot of it is probably where someone at a customer is talking to a salesperson or a customer support person and you never see that until it gets back to you.

Thorsten: Yeah. Yeah.

Thorsten: Yes. I mean, good example yesterday, Camden, owns all of infra, in a bigger company, he would be on the infra team. Or the head of the infra, but he posted something yesterday where he said like, ‘Look, the Claude Code SDK Claude Code subs, I looked at the customer channels, I looked at the bug reports, I looked at this, these are the big pain points.’ So, he's the infra guy who in the morning, you know, fixes Kubernetes clusters and what not, but then he's also on top of customer feedback, and looks at everything else. So

Quinn: And there is no point at which he thought, ‘I have a team KPI of getting this SLO from here to here this month, and I need to do that.’ There was no like he needed to go talk to his manager to make sure he can get room or time or anything. Did it.

Thorsten: He did it.

Quinn: There's like, literally, I don't even think he even thought anything of it.

Quinn: Yeah.

Thorsten: Yeah. And then, I guess another example is, I was kind of the guy who pinged everybody to fix bugs. And then, I said, because we get the bug reports routed in a Slack channel, and I said, ‘I need to push these projects forward, and I feel like I'm procrastinating by constantly fixing these bugs.’ And then, Nicolay was like, he said this in the meeting, he's like, ‘You should be banned from this channel. We're going to take you out.’ So, now I'm banned from the channel. And now, he owns the bug reports, and now he tells me how it's going. And then, now he pings people.

Thorsten: I don't know. I'm not in the channel, but I think it's working. Like, he's pinging people. Like, you can't do this if you're 50 people, and people feel hurt if somebody pings them or something. But in our case, it's like, ‘Yeah, okay,’ we have like this table where you can see how many bugs everybody fixes and what not, and if you're like single digits, and Nicolay pings you probably go like, ‘Yeah, okay, I can fix more bugs.’ So, that also works.

Thorsten: What else? What happens if something bad goes out? Like, if it does go out, what happens then?

Quinn: I think the interesting case is, let's say someone ships something and they don't realize it's bad and then they go to sleep, cuz we got people all around the world.

Quinn: We can either just fix it and there's this implicit expectation that when you do work in Amp that you make it so that you give up the lease as soon as it's shipped so that anyone else's agent would be able to go and do a pretty good job of fixing it. And it just works really well in practice. I don't think we ever set that expectation, but all the stuff that Amp has with like Threads and so on, all that human intent is captured, so anyone can fix it or they can roll it back it just works.

Thorsten: Yeah.

Thorsten: I think there's two outcomes, right? If there's something live, and say it has bugs or it's bad or something, you get pinged in the orb bad channel, and somebody says, ‘Hey Thorsten, this crashes for me’ or something, or ‘This isn't good,’ And then, I wake up and then I fix it. Or Camden did this. I shipped something that was pretty shitty performance-wise, hit the database a lot, and then he basically fixed it with like a band-aid fix overnight. And then, I woke up to his message like, ‘Hey, I fixed this,’ and he pinged me Amp thread where he fixed it, and then we had like a multiplayer Amp thread. And then, I started the proper fix and then I pinged him in that Amp thread so that he sees what I'm working on. And then, he came in. He's like, ‘Yeah, this looks good to me, let's do this.’ So, just talk to each other, you

Thorsten: Yeah.

Quinn: Yeah, and if someone's asleep, I think we all have this intuition for whether someone on the team is awake or asleep. We all have different schedules and different time zones. But just to be more specific about what we mean with the human intent being captured in the Amp thread: something is added or changed, you can see which Amp thread did that, you can see the person's message, and usually you will know just because of ambient awareness, cuz they've been talking about something you know, most of the intent is in the Amp thread, and you can tell if it's something that they did to patch a critical issue because then it would be tied back to a bug or the agent would have looked up something in the logs, or you can tell if it was just something they were trying, you can tell who is it enabled for and all of this. And I don't know how you do that if, instead, when you see something break, you have to go look at a GitHub PR that has an AI-written, vibed description of it that always makes it sound super official and super important. You don't know, was this just like a whim? Was it, you know, in response to something critical? And then you have to go to that team, you have to get your revert approved, and—why people doing that?

Thorsten: Yeah.

Thorsten: That's the team week. What else is missing from team week that

Quinn: What about like quarters, or months, or goals, company goals?

Thorsten: Yeah. We don't have quarterly goals.

Quinn: We don't have quarterly goals. We don't have annual goals.

Quinn: I think technically we set something, but we set it to be lower than where we currently were when we set it, just because someone said we needed to set something. And that's kind of a joke.

Thorsten: It's known that the number needs to go up, our revenue.

Quinn: Yeah, revenue and all the things that lead to it, like new people trying Amp, people having success with it, all of that.

Thorsten: Exactly.

Thorsten: Yeah. Yeah, so we are aware of—everybody's kind of aware of what a funnel looks like, on a product journey or whatever you want to call it. So everybody's aware that if we want to get this number up, we also got to get these numbers up, and Alex shares these numbers, and we do have dashboards, like, we have a lot of dashboards actually of like key metrics and whatnot, and we know which customer and whatnot, and how they, like how much tokens they consume and how many Orb hours and whatnot. We're aware of how this stuff works, but

Thorsten: I think an important thing is that from the start Amp was founded on the idea of everything is changing and if you make six months plans and you're working in software with AI, it's not going to work. Our goal is to be at the frontier and that might change if a new model drops tomorrow. We ripped out tab completion, we ripped out the VS Code extension, we changed from, endorsing the TUI as the default thing to now cloud agents on Orbs. Think the Orb stuff, I think we kind of called this in February when we said like, ‘Cloud agents are the future.’ And that was like maybe a roadmap for the year, like it was a big thing where we wrote like our documents, Software Is Dead, and The Aggman, and whatnot. So that was kind of like bigger vision thing, but it wasn't prompted on a schedule that we said like, ‘Oh, it's the end of the first fiscal quarter. Let's set up the roadmap for the,’ you know. It was more like, ‘Oh, the vibes, the winds have changed. Know, let's regroup and think about, you know, what the goals are.’

Quinn: Yeah, and we can react to things faster than someone who's got teams where they got to filter out that information, that change, also where every time leadership changes something, if they had created the expectation that this is what we're going to do for three months, and then if that changes in any way, or if people start to whisper, ‘Oh, that changed’ in these private channels, which we can talk about, then that makes you lose confidence in leadership. And leadership is only setting these goals because that's a tool to get a lot of humans to work together in alignment, and that's a lossy process.

Thorsten: Yeah. People think this is a cop-out, like if we say we don't have this? But it's kind of like you don't need it if the numbers go up and you're a small team, you know, and if everybody's running in the same direction. Why would you need the quarterly goals if you don't,

Quinn: Well, you might need it if you go hire a sales team and then you need to figure out sales comp and then your finance person needs to figure out if we're going to hire 10 salespeople, they're each going to do this and we'll pay them this percent of the deals they close, and all of that.

Thorsten: I mean, again, it always comes back to this: we own our future. We are a small team that can do what it wants, and that's not the situation everybody is in. And we are in software space, we are in AI, which is a very particular field to be in right now, in the last two years. So if you are, selling something to restaurant owners, whatever, for example, you might have a different setup, but for our case, we kind of optimized from the start if we want to stay at the frontier, and if we don't want to fall behind, this is the way we have to act. And, yeah. That's why the company is small, and why we do the things we do.

Thorsten: Yeah.

Quinn: Everything else follows from that.

Thorsten: Okay, so then day-to-day when we ship something, people were really interested in this. Say, I'm working on something, they want to ask, ‘How do you review it?’ Know, do you review the code and whatnot. And the answer is ask the agent first. That's the famous prompt now: ‘Give me irrefutable proof that this works end-to-end,’ or test it, or give me like a matrix of all the things you tested, walk me through the changes, like, what's the data flow? How does it work? Like, often it's like, how does this work? Explain me again how it works. And then depending on what I'm working on, I might look at the code. If it's, say, making something up, I've been thinking about adding like `amp whoami` as a subcommand so you can see who you're logged in as, right? I'm 100% sure Opus 5.5 one-shots this. Will I look at the code? Not sure, because I might ask, ‘Where do you get the information from? Like, what request are you sending?’ I guess I could get the information from the code, but in this case I might start the prompt and say like, ‘I want you to build this subcommand. It should, fetch the user's authentication information. If not, it should show not authenticated. Otherwise, it should show the user ID and the email,’ or something like this. And then it might say, ‘Let me find out where this is.’ And then, do I look at the code how it adds the subcommand? No. Do I look at the code like how it prints stuff? No, I'm going to ask it, ‘Show me the output.’ And it will show me a screenshot of what it looks like. It's somehow with tmux, I don't know how it does it, it's in the Orbs, it can spawn tmux thing, it can somehow capture the TTY, I'm pretty sure everybody can do this in any Orb. Once I have a video or screenshot or test matrix, then the way I look at the code is completely different than if there was none of this. Back in the olden days when you would review each other's PRs, I would sometimes look at code from somebody and I would think, ‘I'm not sure if this works.’ And then I ask them, ‘Have you manually tested this? Like, have you walked through this?’ And they go, sometimes, in the worst case, ‘No, but I have the unit tests or the integration tests.’ And then I would go, ‘Go and walk through this manually. Like, record a demo of this.’ And then, so many times you record a demo of it and you notice all of the things that are wrong or don't work. If the agent did this and you ask it to do it five times, and you build up the intuition and the trust that Opus 5.5 doesn't lie to you with fake screenshots, but actually did it the way you think it should be done, you go into the code review with completely different confidence, or completely different approach than if you were dropped into 600 lines of code change.

Thorsten: How do you handle it? Same way?

Quinn: Yeah, the same way. And sometimes even just looking at the files that were changed is also helpful and when I think about what gives us this comfort by staying higher level, I mean, think about if you're an engineering manager and you've been working with the same engineers for a long time and, you know, in the old world and you're reviewing their code, you start to understand what each person is good at, what they're bad at, you start to have trust about them. And then if you bring a new person in the team, you've got to learn that from scratch as a manager. And there's something about our use of Amp as what everyone on the team uses, it's the only thing we use, and we do a lot to make it so that, no matter which model you're using in Amp, even as the models get better, it's a consistent experience. We also really try to steer people away from

Thorsten: Get recalibrated, yeah.

Quinn: Like jamming it up with dumb skills or all that, but you know, this helps us build an intuition because it feels like if we know that something worked three weeks ago, today, all else being equal, it's going to work a little bit better.

Quinn: Whereas if you're jumping between a lot of different agents, there might be a big regression in Codex, or maybe Codex isn't picking up the skills that Claude Code wrote for you, and you don't know that, you're not going to know that until you realize it skipped over a step in the review. Or maybe someone else on your team has changed a bunch of the skills that you use in a dumb way. And I don't know, all of these things are extra factors for why I think people get more variable and more bad results with their agent

Thorsten: Yeah. And

Quinn: Than we get on our team.

Thorsten: I mean, the other thing to mention here is we all use the product constantly, and we ship

Quinn: Like constantly, like absolutely nonstop.

Thorsten: Constantly, yeah. Yeah.

Quinn: Some of us are probably the top users of Amp on a lot of days.

Thorsten: Yeah. Yeah.

Thorsten: If somebody breaks something in the UI, 30 minutes, I would say, until there's like somebody in Slack. Like, around the clock probably. So that's a big thing, right? Then the other thing is I'm reviewing this, I might look at the code. The question was, how do you ensure the data structures or the performance or something like this is good, right?

Thorsten: I think I have built up a intuition for when something like this could be hidden somewhere or whether it could be like a problem. So if the subcommand, I guess I would maybe ask, make sure it's only one request, or something like this. But do I care about the data structures with this? Probably not. If I know that what I'm about to change, just thinking from a high-level product perspective, is in the hot loop, like say every time a tool call is executed, or every time like tool call output is streamed or something, then I will very much pay attention to what exactly is it doing. And then I'm going to ask it, is this a hit on performance? Prove it to me that this doesn't do anything. And then I going to look at the code, and maybe there's an issue there where I can think of something better to do, and hey, we duplicated some of it. But it depends. It's not like everything we ship is performance sensitive, and I think everybody's kind of built up an intuition. And if not, it will show up somewhere. And then the other thing we do is, we tag people in these threads. So, you can have multiplayer threads in Amp. So, I'm unsure about something—happened to me a bunch of times, people tag me like, ‘Thorsten, does this look good to you? Like do you agree with this change?’ I had a great experience with Camden last week. I tagged Camden. I was like, ‘Camden, do you think this looks good? Like is this the right approach?’ And then Camden came back and he said, ‘I think we should maybe rethink this.’ And then Amp redid the whole thing it was better. And then he kind of took over the thread and was like, ‘I'll take it from here. I'm going to ship this.’ So, we had collaboration with the agent right there in Amp. Yeah. So,

Quinn: And I've seen a lot of other people, when they're working on areas where you had a lot of the knowledge, they would tell Amp, ‘Go and see how Thorsten would do this.’ I don't know if you saw all of these, 'cause,

Thorsten: Yeah, I have there, no.

Quinn: Yeah, you're probably not the one asking it to do that, of course. And it's cool that, you know, now I've seen the agent just doing that, because it's going to go and look, for particularly sensitive changes, what are the other commits that touched that, and then go back to the Threads and all of that, and it just gets that, naturally.

Quinn: And,

Thorsten: Now,

Quinn: By the way, how much time have you spent in the last three months writing out a technical design document or architectural design review, or whatever?

Thorsten: Zero.

Thorsten: No, I don't do this. I don't write the PRDs. I don't, no.

Thorsten: I guess sometimes now I'm kind of collaborating on some concepts. Like yesterday evening, for example, I'm working on this thing, starts with P, ends with -erma, whatever.

Thorsten: Felt stuck, do I get to a shippable thing? It felt like I was stuck with like eight different concepts.

Thorsten: Basically said exactly this to Opus 5.5 in Medium mode. I said, ‘Look at this, look at how it works. Analyze this for me. I feel like I'm stuck. I don't know what the shippable thing is. Here's what I want people to think when I ship this. Here's what I want people see when I ship this. This should be the visible thing that they walk away from.’

Thorsten: And I spelled it out in like three sentences. And it went off and worked, and then it came back and—I don't know if this is stored somewhere. It's like, ‘Yeah, of course you're stuck, mate.’ And you know, used ‘mate,’ and then it says like, ‘What you're trying to do is like these five different things. And then here's how I would restructure it.’ And I like, ‘This makes sense.’ And then it wrote up this whole plan of how we can kind of pull apart the things, and reorder them, and ship them in a sequence.

Thorsten: And now I'm doing this. I'm doing this in a sequence.

Quinn: And, by doing this, you mean you're setting up Zoom meetings with the teams that own those to review your changes, that already approved

Thorsten: No. Yeah.

Thorsten: Nobody. No. I mean, this is another thing where people know that I'm working on this, and nobody's touching this. So if Beyang, who's in an adjacent area right now, he wants to change something, he pings me on Slack.

Quinn: So where is the architecture, your intent for the architecture documented? Where does that information live?

Thorsten: In AGENTS.md files and in doc files, I think. When we switched to the new architecture, I did the videos, right, and shared it with the rest of the team where I shared my thoughts on how it should work. And then there were questions and whatnot, and Q&A sessions. I think we had one, I don't know. But it's also in the docs. Like the true invariants are in the AGENTS.md files, and some of them are in docs. But I haven't written them by hand. I reviewed them, and sometimes I make sure they're updated. And especially when we build up the new architecture, at first, we had to really make sure that all of the business invariants are clearly written down somewhere. And I occasionally

Thorsten: Check,

Thorsten: You know, like for example, with the new thing I'm working on, I have docs. So these are docs for humans and for agents that kind of document these concepts, and I kind of review not word-by-word or the doc itself, but with the agent and write it down. So if I start a new session, and I ask about this topic, the agent can find the docs and figure out what it is about. So,

Quinn: And these are docs that are Markdown files in our repo.

Thorsten: Yes. Markdown files in our repo, yeah.

Thorsten: Okay. Okay, review, we work on this, we're working with the agent in a big thread, how do we ship stuff? You often do this. How do you ship a big change? Because we're pushing to main, and the way it works is we push to main, if CI is green, we auto deploy things. Some things, like some service, only deploys every two hours. CLI releases go out every two hours. Our ampcode.com server gets deployed every time main is green.

Quinn: Yeah, 90 times per day on average.

Thorsten: Yeah.

Thorsten: Right, something like this,

Quinn: And, on average, when something hits the main branch, it takes 7.7 minutes for it to be live for all users. We want to get that down, by the way.

Quinn: Like, very mechanically, what do we do? Just to be really clear, there is no mandatory pull request, code review by another human.

Quinn: I don't think we really ever do pull requests. You could if you want. You can ask people for help. But, you know, you can look at the code yourself. You can review the agent's code, but we do not do code review as it's done at other companies. And we click that Ship button. We hold it down, and it emits a nice little effect. But

Quinn: There's a lot of more complex changes where you have to go and deploy it in multiple phases, or you want to reduce the risk. And so you think about all these different dimensions. What feature flags can I add? What logging could I add before I've even shipped any change to the implementation? And that's actually the first place I usually start, and I want to find out is my understanding of how people are using this feature correct? And are there things that I don't know? Are they hitting bugs that I don't know? What are the, you know, unknown unknowns? And so I have the agent go and put in logs and then ship that, just that, from the same Thread, and then I'll have it go and monitor, depending on how trafficked the feature is, for an hour or sometimes a day, and then look at the new logs that it has emitted. And, by the way, if I had to wait for another person to go and review that PR, that would slow me down. And I probably would not do this. I would chunk it into bigger chunks, which actually adds risk.

Quinn: So I wait for the logs to come in, make sure that my understanding and the agent's understanding of the thing is actually correct.

Thorsten: Yeah.

Thorsten: So hooking in here, that means our Orb agents, we use the OIDC stuff, they can read-only access production logs. If they want to access more, they ask for permissions with like PAM grants and something. Like each Orb for a certain amount of time can access production logs. Like they can read production logs. They can see everything that we see in production.

Quinn: Yeah, and we've taken a limited subset of our prod database, made it read-only, put it in BigQuery, and it can also read that. And then, yeah, for anything more, it needs permissions, and a lot of the things in the database are encrypted at rest, and then it wouldn't be able to access those entirely. We never wanted accessing those things.

Quinn: And, by the way, that's an interesting contrast. When we were still doing local development before we got into Orbs, every dev's local laptop has to have some kind of access to production, even write access to production. So, if you're doing a few things in your laptop, you yourself are doing manual work where you have write access enabled in your session, and then the agent in some other Ghostty tab is doing something else. It's actually really risky for them, and with Orbs, you get to put them in compartmentalized environments where they get time-limited, task-limited permission grants that can be read-only, and there's no chance of them being write-only. So that's been a huge relief.

Quinn: Yeah, so, you know, it looks at the logs. We've confirmed that the understanding is correct, and then I think about feature flags. Sometimes this is something where let's just make this a user-toggleable feature flag, and we can add things to that experimental features section in the Amp settings, and sometimes it shocks us. Like 500 or 1,000 people go out and find it quickly, and that's awesome because then we can have the agent see how has that affected their usage, just by looking at the logs. We cannot see Thread data unless users do that send bug report, send us the diagnostics, but like the logs from our server, we can see that kind of information. We can see who turned it on and then turned it off. We can go and email them and ask for feedback, give them free credits. We can have the agent then read the summarized feedback that they send back, and sometimes they're going to be reporting bugs. Sometimes they've got really helpful feedback, and all of this is still done from that same Thread.

Quinn: And when we're actually building the thing, because we can push to main so fast, we can break it up and de-risk it by a lot. So sometimes you have multi-phase deploys you need to do, where you need to change a database column, and you can't change it because during deploy, there's some new versions and some old versions, and the old versions would just hit a Postgres error if they try to do it, and the agent is really good at that stuff. And if you weren't able to do that, well, I mean, I think we all know what happens. You end up with a messy database schema. No one ever goes back and cleans it up because it's such a pain. So it makes all the right steps. It's really good at breaking it up into the multiple steps.

Thorsten: Somebody at the large investment bank last week said—we explained exactly this, and I said, ‘Look, with agents now, all the cumbersome stuff that I've never done previously, like feature flags. That's why there's so many SaaS companies, it's a pain in the ass. But now it's no longer pain in the ass.’

Thorsten: We ship small changes. Like, that's the other thing that you didn't say out loud. We do trunk-based development. When we say we push to main, it doesn't mean that somebody pushes 10,000 lines of code. Like everybody pushes small changes. It means you take a small thing, you ship it runs through CI, it's live behind a feature flag, boom, it's de-risked, you know it doesn't blow up. If it blows up, it's a small change, you know, like you can revert it easily, you can roll back easily. So we do the trunk-based stuff. We ship small things behind feature flags or small things that then later get turned on or get put behind a feature flag. And yes, trunk-based development might mean you ship dead code, but that's still better than ending with a 4,000-line PR on a fucking Friday, and then asking two people to review it because you want to get it out before the sprint review on a Friday evening.

Quinn: But, Thorsten, it's de-risked because it followed the code review process. But the code review process is what creates the risk. You have this overhang of all the branches and you have people that have forgotten what the thing was by the time it's reviewed, things have changed underneath it. This whole idea, I think people have lost the plot with continuous integration. When people say continuous integration, CI, you think of the Buildkite, the GitHub Actions, and that's just the tool, but continuous integration is about continually integrating the changes that you're making into the trunk, into the main, and that is the ultimate de-risk thing. And when that idea was first raised, people said, ‘That's crazy. You need to do really intense QA of these separate things and shrink-wrap software, ship it to CompUSA.’

Thorsten: Yes.

Thorsten: It's exactly how John Carmack and Romero worked at id Software. Like they said, they would constantly take the disk out of their computer, hand it over, and say like, ‘Here's the newest files, give me the thing.’ Like you constantly integrating on one thing. That's continuous integration. Not branch-based development. That sucks, like it's—yeah, lost my—what I wanted to say is the investment banker said, ‘Oh, so that's less risky than, PRs.’ So he immediately got it. If you have small changes that you know are working in production, that the agent can see, it's less risk than the big PR review.

Thorsten: And the other thing worth mentioning here is to make a lot of this stuff work, people have asked about it, is we have Amp plugins. So you can write an Amp plugin, which basically gives the agent a tool it can call. Like something like send user email, right? And the input are email and subject and body or whatever. You write an Amp plugin with like secrets in the Orb or OIDC. It can access env vars, obviously, or it can access authentication tokens and what not, securely. Your company is example.com and you have like an admin API with which you can query a user status and you want the agent in Amp to be able to see it. What you will do is you create an admin token for your admin API, and you securely store it in the Orb or use OIDC to get to this token for a limited amount of time, and you give the agent an Amp plugin with which it can talk to this API. And if you give any agent the shape of your API and you say, ‘Write me an Amp plugin for this, here's the docs for Amp plugins,’ it will do it. Like it takes two minutes.

Thorsten: And then you can ask the agent, ‘Hey, fetch me the user information,’ or something like this, or, ‘Give this user a feature flag,’ or something. So we have a bunch of these. We have fetch bug reports, fetch the user status, grant feature flag, what version is rolled out now so it can see the deployments. It can cut releases by, triggering a GitHub Action. It can use Buildkite stuff to monitor the deployments and builds and what not. It can see all of this. So that's just a practical thing that people have wondered about, yeah.

Quinn: Yeah. And so when we get a bug report, it shows up in Slack and we can click a button that says, ‘I'm feeling pucky’ or ‘I'm ultra pucky,’ and that will go make a thread. That thread goes and looks at all the diagnostics bundle that the user so nicely sent to us, and it can look at the logs they're hitting as well from our server. It can then fix it. We'll take a look at the fix. It never like automatically ships it. I don't think that is right. And when we ship it, then it does this cool thing. You know, it would kind of suck if we send the user an email and say, ‘Oh, thanks. We've put it on the Q3 roadmap.’ And that's honestly what we get from a lot of other companies that we work with, and we like to work with the companies that don't do that. It also kind of sucks if we said, ‘Oh, we fixed it,’ and then you go on and it's not yet fixed because, ‘Oh, well, it's not rolled out yet.’ No, Amp can actually wait for the thing to roll out and then send the user the email saying that it's fixed, the fix is live, and by the way, here's $10 in free credits. And that's a pretty cool experience. And we look at all the emails because the plugins in Amp have the ability to show a little UI so we can see the email that it's drafted, we can edit it. We have that human touch, if you're getting one of these emails from us, it's because some human on the Amp team went and fixed it and, click through, drafted that email.

Quinn: When someone reports a bug, when there's smoke, there's usually fire. Well, then we can also see which other users were affected by that, and we can go and send the same email to them and say, ‘You might not have noticed it, but you hit a bug. We're sorry about that. We fixed it, and here's $10 in free credits.’

Thorsten: Yeah. Say something blows up, incident, database is down, whatever, we're down. We get pinged, everybody hops in the channel. Somebody's the incident lead. First thing they do They ask Amp, is the system healthy? Amp has a plugin or a tool, Dario built this, I don't know exactly how it works, but it can fetch our Grafana stuff, it can fetch logs, it can fetch a bunch of stuff like Kubernetes cluster information. It can answer, is our system working as expected, did the error rates go up and what not?

Thorsten: Then we go from there. And then in the channel we might hop on a Slack call or we have the multiplayer thread, we ping other people, I'm saying this because this is how we fix incidents. Like we're huddling in a Slack channel, we have shared multiplayer threads in Slack, we use the agents to investigate. And then, for example, we had this a bunch of times in August where we were down for two hours or something or people couldn't start Orbs. Then we can ask Amp, find all of the affected users and send them an email, say, ‘Sorry, this is the incident, here's what we ran into, and here's $100 in credits,’ or something. That's fully in the agent.

Thorsten: And that all of this stuff would have been unreasonable to do, like this is a day task. It's like incident over, now you're going to spend a day finding all of the email addresses in the logs, and you're going to write a Python script and whatever, and think about pagination and batching and all of this. And then you sending out transactional emails and agents, you can do stuff that was previously unreasonable, and now it's possible.

Quinn: Yeah.

Quinn: Yeah. And one other benefit that we take for granted is we don't have a support system that's other software that we got, and an accounting system that's other software that we got. So if you are wanting to do this, but you have to use, you know, XYZ vendor for support and maybe their MCP sucks, and it, you know, I don't know, we can just build it in to Amp, and it's not that hard to build in an API that can send emails to users. But if you have to do that because some other team uses that as their system of record, and then you have to record in Salesforce that for this customer account, for these 73 users that all hit a bug, that is a total of this much in credits and all that, you're just not going to do that probably, or it's going to take way more time.

Quinn: Yeah.

Thorsten: Yeah. I mean, that's the biggest thing all of the tedious stuff, previously workflows that weren't within reach, that's now possible. You can aim so much higher. You can do things that you kind of brushed off. And when people say, ‘well, we can't do this because we have problems with working with, I don't know what, precious data,’ or something. And then I said this to somebody yesterday, like, ‘Look, like imagine you could snap your finger and working with data would be now your dream setup.’ Guess what? Like, you might not get there 100%, but you can now snap the finger and like build all of the tooling that you need. And it might be just a couple of days and suddenly working with something is much better.

Thorsten: It's, ‘Well, if I ship something, I don't know how the database reacts.’ Can you build tooling for this? Like, can you build a graph for this? ‘Well, if I ship something, I don't know which users are affected.’ You can build tooling for this. Like, all of that stuff is now within reach, so

Quinn: One other objection we've heard, well, there's some people at my company that get it and we're all in this private Slack channel or Signal channel, and then the rest of the company doesn't, but, you know, we got to work with them. What do you think about that?

Thorsten: I mean, it's hard. You need to rethink everything. You need to rethink not only how you write code, people make the mistake still of looking at the coding agent as a replacement for the text editor, but that's too little. Like it can go across the whole thing, horizontally. And if it can go horizontally from prototyping and iteration to building the feature to, rolling it out and monitoring the rollout, and then doing production performance improvements, you got to rethink your whole process. That also means, you know, process is tied to organization. So agents are now multipliers, they make, say, every engineer 10x better or faster or something, right? If you previously were organized in a certain way where people only had this much freedom to do things, you know, I'm in this team with five other people and then I own this much of the code base. The other team over there owns this much of the code base. This team over there owns this much. Now everybody can suddenly reach ten times further much wider wingspan, they will knock into each other. Like you need to give them the room. And in our case, it's 20 people who make a lot of money per year in a code base with two and a half million lines of code, which I thought previously was unthinkable. For us we don't bump into each other because there's so much space, there's so much stuff to do. And if you're in a company where that's not the case, because you defined those teams based humans in 2019, our infra is this big, that means we need five people for this. You might not need five people

Quinn: And this is the key point, having five people causes problems. So, it's like there's a fish pond, and when the fish were this big, yeah, they all had plenty of room. Someone dumped in Miracle-Gro, and now every fish is this big. And yeah, they're going to be fighting.

Thorsten: Yeah. Yes.

Thorsten: Yes, exactly. It's this.

Quinn: It's going to cause more problems.

Thorsten: Yeah.

Thorsten: Yes. And then you could argue, well, we can do more. And that's true, but not in every business, I don't think every function should grow by 10x. You know, like, oh yeah, we can do so much work. Well, maybe infra is just one thing in your business, but what you actually want to grow is top of the funnel, go-to-market motion or whatever the hell it is, but not everything. So you got to rethink how you organize those people because they're now bigger fish in the same pond, you know?

Quinn: All right. So, some people might think, well, Thorsten and Quinn, yeah, they're at a company with 21 people. They don't know what it's like to be at a company with 200 people.

Thorsten: I mean, we know what it's like, right? We've both—I mean, you were the CEO at the peak of Sourcegraph.

Quinn: Something like

Thorsten: It? 320, I think at some point, right? And then

Quinn: That.

Thorsten: Don't know what number I was, but when I joined, it was 19 people, and then I saw it go up to 300, yeah, we've been there. Like I've been through a lot of org changes and teams and whatnot, were the CEO always, but like sometimes more and sometimes less levels below you. And I was engineer, staff, EM, tech lead, and whatnot, so we know what this is like.

Quinn: Yeah. And so for people that are not at a 21-person company, and they think, oh, maybe my company is different because we have more people or whatever. We created Amp in this structure because we saw how hard it is to do the kind of work that you need to do in this kind of environment. And one of the reasons why we spun out Amp from Sourcegraph is so that each company could focus on the thing they needed and be the right size.

Quinn: What you do if you are at a 200-person company. I mean, let's go through like what is Thorsten's advice if someone is one of the people where they think they get it and they're at a 200-person company, most of the company doesn't get it, they're in a private Signal channel, maybe there's a little bit of gossip.

Thorsten: What's my advice?

Quinn: Kill the gossip channel.

Thorsten: Kill the gossip channel. Don't do the gossiping. It's toxic. The more you do negative things, the more it affects how you think.

Quinn: It corrodes your soul. And at a certain point, if you are a high-agency individual, which you probably are, if you let that continue, then you are part of the problem.

Thorsten: Yeah.

Thorsten: Yeah, it might feel good in the moment, but it's not good. Then speak up. Like I don't think there's any CEO in the world who doesn't—I guess there's always some, but like a lot of good CEOs—like if you think the CEO is not good and doesn't want to improve, then you should obviously leave. But if you think the CEO is good and they want things to improve, I don't think there's a CEO who doesn't then want to hear about your report of, ‘Hey, look, I think we should do this totally differently.’ Like they'd be lucky to have somebody share this with them. So I would encourage them to do this.

Quinn: We've also realized that you feel so much better and do so much more if you have zero friction rather than just a little bit of friction. And it's easy to tell yourself that all these little points of friction like needing code review, like needing to go to this other team, like needing to work around schedules and within the theme of your leadership, it's easy to tell yourself, well, no, that's just how companies work, or, well, it's not a big deal. But actually, we can genuinely tell you we don't feel any of that, and it is such a load off

Thorsten: I talked with a bunch of people and they said something like, ‘What if somebody ships slop?’ And then, I guess the answer here is you get called out for it or you tell them, it's also because again we've worked together, we kind of calibrated. Everybody knows that slop is not accepted. I think people would lose it if somebody were to write like, AI-generated messages on Slack, for example. Like that just wouldn't fly. And I think people would tell each other, probably we're the guys who are most unaware if this is even happening, but I'm pretty sure we don't have a lot of like DM gossiping or ‘This guy shipped shit, and nobody likes it.’ The culture is so that I think they feel free to call it out.

Quinn: Yeah.

Quinn: Yeah. And I think a lot of people that might be in a job right now where they would ship slop, you look at the incentives, the environment that they're in. Maybe they didn't feel that much ownership, maybe they didn't feel that much pride, maybe they were on a deadline. And are those excuses? Like, well, I mean, no, they're not good excuses. But if you take that same person and you get them in an environment where they have ownership, where they have skin in the game, they become better. I think our team is amazing, but if you took anyone on our team and you put them in one of these other environments, I think they would be worse. Because all of those incentives, they influence what you do, and the company wants you to be influenced by those incentives. That's why they set them up.

Thorsten: Yeah. It's kind of like you're fully exposed because you have so much responsibility, and it can feel scary at first, but then you're without training wheels and you can go faster, and you can do a bunch of tricks and something like this. Like you feel it's scary. When people did code reviews in pull requests, you would absolve yourself of anything. It's like, ‘I'm not really sure, but hey, I got thumbs up from the designer and from two engineers. Let's get this out.’ And then somebody goes, ‘I don't like this.’ I think the feeling is completely different than if you're on your own and people know, ‘Well, you make the call. You can consult other people, but if you ship this, it's live.’ And then yes, people might call you out on it, but that's a completely different approach to this like, ‘Well, I got a stamp, or somebody in the meeting said it's good, but they didn't look it over, and then I just shipped it, and now it's live.’ Like—yeah.

Thorsten: Yeah.

Quinn: It's this story that I heard, maybe it's apocryphal, about naval aviators, the people that repair, maintain the jets that take off from the aircraft carriers. And so, supposedly the way this goes is, when you're learning how to be an aircraft mechanic in the Navy, you have an apprenticeship, you're working with someone who knows it. You do every jet walk-around with the pilot, with that very experienced mechanic, obviously while you're learning. And then you graduate. And on graduation day, you do a walk-around, you check the jet yourself, but there is no senior person there, not even the pilot who is about to take off in that jet walks around with you, and you better fucking check everything. You better get it right, because if you mess up, that pilot could die. And that skin in the game, that trust, that makes that person perform better. And ultimately, they've always had that skin in the game, they just haven't felt it. And in this kind of environment, in Amp, people feel it.

Thorsten: Yeah. Yeah.

Thorsten: Yeah. I mean, there were stories about this over the last years, right? Where, like, the intern takes down the production database in shitty companies, that intern is fired. And, in good companies, it's like, ‘Okay, now you know what it's like. I'm sure you're not going to do this again.’ You know? And it's kind of like this, where, ‘Look, like, the gun is loaded. Be careful.’ And then we trust you to be careful. So that plays into all of this.

Quinn: So we have done all of this. We built Amp. We are one of the big agents. We've done it with a team of 21. We have revenue that is the size of our competitors that have 30 or 40 or 50 times the staff. And we're having a great time, and we're growing very fast. Not in team, in everything else.

Quinn: And this is making us feel that what we have built here, this small team, that this is what a lot of other companies in the future will look like. Once you've seen how well this works, we look at other companies, and we hear people from other companies that they want to have their company look like Amp. It feels like this is the company of the future. And that feels weird to say, and time will tell, but it feels like a lot more companies are going to look like this. And I don't know what that transition looks like to go from a 300-person company to—maybe it's not 21, but, you know, something where everyone has much higher agency. I don't know what that's going to look like. I don't know how you go from a brand new startup with two co-founders—you know, we have 21 co-founders. We had this historical accident where we spun out of a bigger company with a team that had already worked together. I don't know how you get that. But if you can get to this kind of setup, it is incredible.

Thorsten: I mean, and we're not making this up. Like, in the last few weeks, people, CEOs, founders, tech leads, ask us, like, ‘How do you guys work? You ship with such a velocity. It's crafted.’ And I just heard this yesterday again at the meetup where someone was like, ‘Oh, your product is so well-crafted. How do you guys do this? You have the best taste in the game,’ and whatnot. And yet, we're 21 people. Small compared to any other competitor. Once you explain it to a founder or CEO, they go, ‘I think this is the way to do it.’ So it doesn't come out of nowhere. It just feels like it's something in the air. Yeah, we're pretty lucky to have kind of—not stumbled on this, but that it works the way it does. And we do think that the old playbook from 2016 of, like, you take VC money and then you triple size and basically you measure the success of your company by the number of people you have employed and how big the investments are, that's kind of over. Like, obviously the numbers are bonkers now. They've just added three digits to all of the numbers that we knew from 2016. But that kind of doesn't work anymore. And if you have the multipliers the talent density that you had before, but also with the talent bell curve that you had before, and now you multiply this by 10x, like, something has to change. You cannot do this. You cannot look at the company with the structure from 2019 and ‘It's 250 people. I'm going to multiply everybody 10x with AI,’ and then not expect this to change how the company operates. It doesn't make sense. The other thing is not every company's total addressable market is infinite. You're kind of bounded by customer segment or market size or something like this, your company size is bounded by some bottleneck somewhere. And maybe you have influence on that bottleneck, but maybe you don't because there's only so many singles in SF who want to date or something, right? Previously, to address a certain size of market, you would have to have X amount of people with a certain talent. Now that calculation is obviously off because you could address the same thing with probably less people. But then people go, ‘We can do much more.’ But, yeah, not always. And not in every team. Because in each large company, you have internal teams and their TAM is basically another org or something. You know, like a dev tools team. Their TAM is like the other 500 engineers. Previously, they needed five engineers on the dev tools team to address the 500 engineers, but now you might need three or something, and the other way around. So all of the numbers are off and I think people need to rethink that. Like how they build up the org.

Quinn: We're talking about all of this, how our company works, not just how our product works and what it does, 'cause that's what we're hearing people really be interested in. The product, yeah, people love it, but they want their company to look more like that. So, for all these people out there that are asking, how we can help you take a few more steps toward the kind of company that we built, where we're having an amazing time, and it feels like the company of the future. So, yeah, I mean, keep sending us your questions. If there's anything we can do, if you want to talk to us, if you want to get your CEO, if you're not the CEO, to talk to us, we're open to talking about it. I think we're just on passion mission to make it so that more people are not in these environments where they have to work through so much friction. It's giving us a lot of energy.

Thorsten: Yeah. For us, in our case, it's also—the product changed how we work, and it feels like we're on the frontier of what AI enables if you work with software. And it feels like we started at the right time, at the right place, and not everybody can do this. So we kind of like a guinea pig in some sense of what does an AI-native company look like if you started it in 2025 and said, like, you're going to be AI-native. So I think that's valuable for others where they can maybe try and emulate it as a team, or as a org, or as a company. Seems like a lot of people are interested in that.

Thorsten: Yeah.

Quinn: And you know, maybe we can be sustainably three or six months ahead on the product side compared to other agents out there, it feels like being ahead on how the company of the future works, can be further ahead on that. 'Cause once you're—you some of our competitors have 1,000 people or 5,000 people or almost 10,000 people, it's hard for them to go and be like all the companies that we think there's going to be so many more of and that more economic output is going to be coming from. So if we can help anyone get there, then reach out.

Thorsten: All right. And to wrap this up, I think we also have to record more practical videos. People don't get enough of, like, ‘How exactly do you deploy this?’ So, more of this is coming.

Thorsten: All right. See you next time.
