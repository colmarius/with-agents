---
title: 'How Thorsten Ball Uses Amp, October 2026'
resourceId: 174
date: '2026-10-13'
---

Thorsten Ball delegates work to agents, asks them to test and demonstrate the results, and reviews the code where mistakes would matter most. His central argument: agents become more useful when they can investigate, build, test, and follow a change into production—not just edit files. The examples come from building Amp and describe one team's practices, not controlled productivity or safety findings.

Based on English auto-generated captions, cross-checked against [Amp's Time Capsule page](https://ampcode.com/time-capsules/6), which includes chapters and a lightly edited transcript. Examples and preferences reflect Ball's October 2026 account.

## Delegate outcomes, then inspect the results

- **Describe the outcome, then make the surrounding work accessible.** Ball argues that stronger models let him request a faster interpreter or a small chat interface without specifying individual files and classes. But this depends on the agent, codebase, and development process fitting together: the agent needs ways to build, release, inspect CI, and investigate production behavior, not merely edit source files. [02:05–05:09](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=125s), [05:09–06:13](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=309s)
- **Batch alternatives instead of supervising every turn.** He lets agents work while he does something else, then reviews their results on his own schedule. For visual iteration, he asks for several candidate fixes and a page or screenshots that make them comparable. An icon-alignment example shows why: he could choose the best result more easily than specify its exact geometry beforehand. Some work, such as infrastructure changes, still needs back-and-forth. [11:01–14:38](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=661s)
- **Ask for tests and demonstrations before reviewing critical code.** His recurring request is “give me irrefutable proof that this works”: exercise the real system, report test cases and results, and show demonstrations and logs. He then checks whether the approach is right, whether he understands it, whether it has bugs, and whether he can change it later. He spends more scrutiny on high-impact code such as database migrations than on lower-risk UI details. “Irrefutable” is his prompt wording, not a guarantee that tests prove the absence of defects. [13:43–16:42](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=823s)
- **Let measurements challenge the proposed fix.** In a thread-search performance example, he asks the agent to reproduce the issue on a large thread and profile it end to end. The investigation rejects the initial diagnosis, changes something else, and reports performance improvements. The useful deliverable is an observed improvement, not merely implementation of the first suggested optimization. [16:42–18:47](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1002s)

## Make the codebase and its tools usable by agents

- **Document capabilities, not just fixed workflows.** Repository instructions and reusable task instructions, called skills, explain how to start services, seed data, and inspect production. Access can be read-only according to risk. Agents also search earlier conversations to recover why previous changes were made. [18:47–20:45](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1127s)
- **Provide suitable environments for testing.** An orb gives an agent thread its own remote machine, where it can install the tools it needs. A runner lets multiple threads use an existing machine; Ball delegates macOS-specific checks to his MacBook. Shared scripts and instructions let teammates reuse these testing capabilities without each person rebuilding the setup. [20:45–24:56](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1245s)
- **Evaluate whether agents actually discover the instructions.** After changing an `AGENTS.md` file, Ball asks for fresh agent environments to try representative requests and check whether they use the intended tool or script. He describes comparisons with control groups, then iterates on where instructions live. A simple starting probe is whether a fresh agent can start the development server and log him in without extra guidance. [29:05–31:11](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1745s)

## Follow changes into production

- **Check the result after deployment.** Amp's schedules wake an agent at a requested time—for example, two hours after shipping—to inspect the rollout. In one example, model-inference errors stayed flat but the agent reported a user-visible regression, so Ball told it to revert. Monitoring supplied evidence for a human decision, rather than establishing an automatic rollback policy. [09:11–11:52](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=551s)
- **Connect agents to operational data.** Team-written plugins let an agent retrieve client and server diagnostics by bug-report ID and query monitoring APIs for system health. These integrations make investigation possible without a person manually assembling all the evidence. They are tools the Amp team built, not capabilities a model gains simply by seeing the repository. [25:58–29:05](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1558s)

## Case study: a memory warning tested behind a feature flag

A report about orbs running out of memory starts an investigation through Slack. The agent gathers diagnostics, logs, related reports, and previous threads. Ball questions the proposed fix rather than accepting the first implementation. The eventual change is deployed behind a feature flag—a switch that limits who receives the new behavior. [30:08–33:12](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1808s)

After Ball approves enabling the flag for himself, agents start orbs that deliberately consume memory. He checks the warning and the button for stopping processes, then sends the agent a video confirming it works. He says the feature affects only him at this stage. [32:13–34:07](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1933s)

Ball argues that agents make this setup and testing cheaper. The example relies on restricted exposure, reproducible failures, and human checks; it is not evidence that arbitrary production testing is safe. [32:13–34:31](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1933s)

## Limits of the advice

- **Model choice:** Ball prefers stronger models for open-ended engineering because cheaper models may require more corrective turns and human rechecking. He allows cheaper models for predefined tasks when they pass task-specific evaluations. [07:16–09:11](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=436s)
- **Context management:** He favors following a plan over manually trimming conversation context to save tokens. He judges that effort greater than the problems caused by automatic context compaction, which compresses conversation history. This is his assessment of the tradeoff. [08:08–09:11](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=488s)
- **Merge process:** His team pushes directly to `main` without pull requests, alongside senior engineers, feature flags, and using Amp themselves. That does not mean Ball never reviews code: he describes inspecting critical code and checking behavior. The talk does not establish that the same merge process suits other organizations. [24:56–27:01](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1496s), [33:12–34:07](https://www.youtube.com/watch?v=Z7l1EHfCMU8&t=1992s)
