---
title: "DHH on the Future of Programming and Agentic Engineering"
resourceId: 76
date: "2026-08-26"
---

Lex Fridman interviews David Heinemeier Hansson (DHH), creator of Ruby on Rails and Omarchy and CTO of 37signals. They discuss DHH's shift from writing code by hand to directing coding agents.

The episode ranges into Linux, work, politics, parenthood, and longevity; this summary focuses on its coding-agent material. DHH's output, speed, cost, model-quality, security, plugin-adoption, and open-source contribution figures are first-party reports without controlled comparison or enough methodology to generalize. His claims about employment, manual programming, AGI, and future model capability are forecasts or practitioner judgments.

### Product Direction and Architecture

- **The practical shift was from prescribing code to describing problems**: DHH says earlier agents still needed him to choose the route and audit the result. He says newer models can start from a fuzzy problem and propose the plan. This is his experience in the domains he works in, not evidence that review is optional across software categories ([07:08–12:45](https://www.youtube.com/watch?v=NYFGCESmikA&t=428s)).
- **Generated changes can still erode a mature system**: DHH reports that Omarchy Quattro's new functionality was entirely agent-written. But he says Basecamp's early designer-led experiment produced PRs that looked defensible alone and damaged the architecture in aggregate. Human engineers then cleaned up the system ([15:14–17:38](https://www.youtube.com/watch?v=NYFGCESmikA&t=914s)).
- **Cheap implementation does not supply vision or taste**: Large organizations may remain constrained by coordination, approvals, ideas, and product judgment rather than coding capacity. DHH argues that more code cannot rescue weak direction, using his one-person Omarchy work as practitioner evidence rather than an organizational comparison ([18:44–21:40](https://www.youtube.com/watch?v=NYFGCESmikA&t=1124s)).
- **Architecture still reduces the cost of later changes**: DHH questions how long human-readable elegance will retain the same economic value. But he says coherent systems currently help agents avoid repeatedly relearning context. He says they also prevent mediocre changes from compounding into a ball of mud ([1:00:35–1:02:31](https://www.youtube.com/watch?v=NYFGCESmikA&t=3635s)).

### Working with Coding Agents

- **Separate implementation knowledge from product judgment**: DHH defines vibe coding as asking an agent to build software without inspecting the implementation. He argues that experienced programmers can overconstrain a capable agent. He also argues that people with strong product judgment may describe better outcomes. He still inspects architecture and critical Omarchy code where he believes that review adds value ([50:36–55:49](https://www.youtube.com/watch?v=NYFGCESmikA&t=3036s)).
- **Start with an outcome, then learn from working software**: Rather than specifying the whole design up front, DHH recommends manifesting a small version, using it, and revising from experience. Fridman adds that asking for a few alternatives can make human comparative judgment and taste more useful than a long initial specification ([56:02–59:21](https://www.youtube.com/watch?v=NYFGCESmikA&t=3362s)).
- **Use editorial judgment to push back on complexity**: DHH describes looking at the shape and proportions of an agent's work, then asking it to simplify when the implementation feels too large for the problem. Automated tests provide feedback, but his account still assigns the human an editor's role over system shape ([2:13:24–2:16:19](https://www.youtube.com/watch?v=NYFGCESmikA&t=8004s)).
- **Parallel agents change the interface and the cognitive load**: His terminal-centered setup moved from tmux to Herdr notifications and multiple machines. He reports a limit of roughly 16 active threads. He explicitly calls the pace exhausting and unsustainable. He expects more asynchronous automation to replace continuous task switching ([1:32:36–1:40:37](https://www.youtube.com/watch?v=NYFGCESmikA&t=5556s), [2:43:27–2:48:41](https://www.youtube.com/watch?v=NYFGCESmikA&t=9807s)).
- **Use independently sourced reviewers**: DHH's standard practice is to let one frontier model implement and another provider's model review, then accept further GitHub review. The reasoning is analogous to peer review, but the episode provides anecdotes rather than comparative defect data for this workflow ([2:37:55–2:40:06](https://www.youtube.com/watch?v=NYFGCESmikA&t=9475s)).
- **Keep execution isolated from untrusted inputs**: In his autonomous Omarchy bot, DHH describes a coordinator that directs workers in isolated VMs. This keeps untrusted pull-request code and test output from sharing the model's trusted environment. He also recounts the system noticing that adversarial test feedback could contaminate a later decision ([2:58:20–3:00:39](https://www.youtube.com/watch?v=NYFGCESmikA&t=10700s)).

### Open Source and the Changing Role

- **Agent triage can protect the maintainer's decision bandwidth**: DHH says agents screen duplicate or unsuitable Omarchy contributions and validate candidate fixes in VMs. He says they bring only merge-ready decisions to him. His reported volume—more than 1,000 merged PRs and about 400 open ones—shows the scale of his own project. It does not show that generated contributions are broadly cheaper to govern ([28:35–35:25](https://www.youtube.com/watch?v=NYFGCESmikA&t=1715s)).
- **Learn the present workflow instead of forecasting distant roles**: DHH advises anxious programmers to focus on what current systems can do, build things, and retain community. He advises this rather than trying to predict several model generations. He distinguishes people who enjoy creating useful software from roles centered only on manually producing assigned code. But he offers no labor-market analysis that resolves how demand will change ([1:10:24–1:24:08](https://www.youtube.com/watch?v=NYFGCESmikA&t=4224s)).
- **Natural language rewards intent without determinism**: Near the end, Fridman and DHH argue that useful prompts can carry style and direction without fully prescribing the result. DHH treats variation as a source of creative alternatives rather than a defect, a framing that still requires evaluation when correctness and repeatability matter ([4:01:08–4:06:07](https://www.youtube.com/watch?v=NYFGCESmikA&t=14468s)).

[Watch the full episode on YouTube](https://www.youtube.com/watch?v=NYFGCESmikA).

[Read the publisher's human-generated transcript](https://lexfridman.com/dhh-2-transcript/).
