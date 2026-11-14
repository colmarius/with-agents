---
title: "Using Orbs to Eval Agent Friendliness"
resourceId: 196
date: "2026-09-25"
---

An Amp team member shows how to test whether repository instructions work for agents that have not seen the conversation that produced them. He has his agent start fresh orbs, Amp's remote virtual machines for agent threads, with ordinary tasks that do not mention a new development shortcut. It then checks their tool traces to see whether they found the shortcut through `AGENTS.md`.

This summary is based on the English auto-generated captions. The captions render the speaker's introduction as "Tristan from the Orb team"; because that name was not checked against the audio, this summary does not name him. The video continues work from an earlier session that is not included here. It is a short Amp product demonstration with a small number of trials, not a general evaluation method with measured results.

### Key points

- **The instruction under test is a development-only login route.** In the earlier session, the team added routes that log the browser in as the admin user when opened, and the agent described them in `AGENTS.md`. The speaker calls this very useful for local development and says it is not something to do in production. The question is whether a new agent will find and use the route without being told. [00:00–01:03](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=0s)
- **Run the trial in clean environments.** He asks his agent to commit and push the changes first, so each new orb fetches the same starting point. It then starts several fresh orbs and gives them tasks that do not hint at the new routes, such as logging in as the admin or taking a screenshot of the admin area. Because each orb starts a new thread, its agent has not seen the discussion of the routes. The coordinating agent can exchange messages and files with these orbs and check on their progress. [01:03–03:02](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=63s)
- **Vary the prompts and add a control trial.** Two of the prompts shown ask for the same outcome in different words: list the newsletters as the admin, or sign in and return a verified screenshot. The agent also adds a control trial that tells an orb to use the normal login form. This checks that the form still works rather than measuring discovery of the shortcut. [01:59–04:05](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=119s)
- **Grade from what the agents did, not what they reported.** The coordinating agent uses Amp's read-thread tool, which has another model read a thread, to check each trial's actual tool calls. In one trial, the agent found the demo credentials before it used the login route. The coordinating agent also noted an evidence gap: the traces did not show the checked-out revision or whether `AGENTS.md` was automatically in context. It checked those after the trials so that the check could not influence their behavior. [04:05–06:54](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=245s)
- **Confirm the verdict by hand.** The coordinating agent reports that all three admin-access trials used the new route without being told about it, so the instructions need no change. The speaker then opens each thread himself and confirms that all three used the login route. [06:01–07:56](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=361s)
- **The next step is to find the smallest instructions that still work.** The speaker suggests testing the most minimal `AGENTS.md` instructions that still let agents start the development server and use the login route, but leaves that as an exercise. He argues that current models are trained to instruct other models, so they are good at testing each other without revealing the answer. That is his assessment, not something the demo measures. [06:54–07:59](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=414s)

### Limits

The demo tests one instruction, one kind of task, and three admin-access runs, all of which pass. It does not show a failing case or how to revise instructions after one. The control trial's result is mentioned only briefly and is unclear in the captions. [05:08–06:01](https://www.youtube.com/watch?v=VNJ8P1GqxnA&t=308s)

Full video: <https://www.youtube.com/watch?v=VNJ8P1GqxnA>
