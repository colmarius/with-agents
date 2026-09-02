---
title: "DHH on the Future of Programming and Agentic Engineering"
resourceId: 76
date: "2026-08-26"
---

Lex Fridman interviews David Heinemeier Hansson (DHH), creator of Ruby on Rails and Omarchy and CTO of 37signals. They discuss DHH's shift from writing code by hand to directing coding agents.

The episode ranges into Linux, work, politics, parenthood, and longevity; this summary focuses on its coding-agent material. DHH's output, speed, cost, model-quality, security, plugin-adoption, and open-source contribution figures are first-party reports without controlled comparison or enough methodology to generalize. His claims about employment, manual programming, AGI, and future model capability are forecasts or practitioner judgments.

### Product Direction and Architecture

- **The practical shift was from prescribing code to describing problems**: DHH says earlier agents still needed him to choose the route and audit the result. He says newer models can start from a fuzzy problem and propose the plan. This is his experience in the domains he works in, not evidence that review is optional across software categories ([00:07:08]-[00:12:45]).
- **Generated changes can still erode a mature system**: DHH reports that Omarchy Quattro's new functionality was entirely agent-written. But he says Basecamp's early designer-led experiment produced PRs that looked defensible alone and damaged the architecture in aggregate. Human engineers then cleaned up the system ([00:15:14]-[00:17:38]).
- **Cheap implementation does not supply vision or taste**: Large organizations may remain constrained by coordination, approvals, ideas, and product judgment rather than coding capacity. DHH argues that more code cannot rescue weak direction, using his one-person Omarchy work as practitioner evidence rather than an organizational comparison ([00:18:44]-[00:21:40]).
- **Architecture still reduces the cost of later changes**: DHH questions how long human-readable elegance will retain the same economic value. But he says coherent systems currently help agents avoid repeatedly relearning context. He says they also prevent mediocre changes from compounding into a ball of mud ([01:00:35]-[01:02:31]).

### Working with Coding Agents

- **Separate implementation knowledge from product judgment**: DHH defines vibe coding as asking an agent to build software without inspecting the implementation. He argues that experienced programmers can overconstrain a capable agent. He also argues that people with strong product judgment may describe better outcomes. He still inspects architecture and critical Omarchy code where he believes that review adds value ([00:50:36]-[00:55:49]).
- **Start with an outcome, then learn from working software**: Rather than specifying the whole design up front, DHH recommends manifesting a small version, using it, and revising from experience. Fridman adds that asking for a few alternatives can make human comparative judgment and taste more useful than a long initial specification ([00:56:02]-[00:59:21]).
- **Use editorial judgment to push back on complexity**: DHH describes looking at the shape and proportions of an agent's work, then asking it to simplify when the implementation feels too large for the problem. Automated tests provide feedback, but his account still assigns the human an editor's role over system shape ([02:13:24]-[02:16:19]).
- **Parallel agents change the interface and the cognitive load**: His terminal-centered setup moved from tmux to Herdr notifications and multiple machines. He reports a limit of roughly 16 active threads. He explicitly calls the pace exhausting and unsustainable. He expects more asynchronous automation to replace continuous task switching ([01:32:36]-[01:40:37], [02:43:27]-[02:48:41]).
- **Use independently sourced reviewers**: DHH's standard practice is to let one frontier model implement and another provider's model review, then accept further GitHub review. The reasoning is analogous to peer review, but the episode provides anecdotes rather than comparative defect data for this workflow ([02:37:55]-[02:40:06]).
- **Keep execution isolated from untrusted inputs**: In his autonomous Omarchy bot, DHH describes a coordinator that directs workers in isolated VMs. This keeps untrusted pull-request code and test output from sharing the model's trusted environment. He also recounts the system noticing that adversarial test feedback could contaminate a later decision ([02:58:20]-[03:00:39]).

### Open Source and the Changing Role

- **Agent triage can protect the maintainer's decision bandwidth**: DHH says agents screen duplicate or unsuitable Omarchy contributions and validate candidate fixes in VMs. He says they bring only merge-ready decisions to him. His reported volume—more than 1,000 merged PRs and about 400 open ones—shows the scale of his own project. It does not show that generated contributions are broadly cheaper to govern ([00:28:35]-[00:35:25]).
- **Learn the present workflow instead of forecasting distant roles**: DHH advises anxious programmers to focus on what current systems can do, build things, and retain community. He advises this rather than trying to predict several model generations. He distinguishes people who enjoy creating useful software from roles centered only on manually producing assigned code. But he offers no labor-market analysis that resolves how demand will change ([01:10:24]-[01:24:08]).
- **Natural language rewards intent without determinism**: Near the end, Fridman and DHH argue that useful prompts can carry style and direction without fully prescribing the result. DHH treats variation as a source of creative alternatives rather than a defect, a framing that still requires evaluation when correctness and repeatability matter ([04:01:08]-[04:06:07]).

[Watch the full episode on YouTube](https://www.youtube.com/watch?v=NYFGCESmikA).

[Read the publisher's human-generated transcript](https://lexfridman.com/dhh-2-transcript/).
