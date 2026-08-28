---
title: "How I build software - time capsule from July 27, 2026"
resourceId: 90
date: "2026-07-27"
---

Quinn Slack records a first-party walkthrough of his Amp development loop: inspect running software, turn observations into bounded agent assignments, keep several isolated threads moving, and require behavior that can be checked before accepting a change. The useful evidence is the live sequence, not the tool list or claims about speed.

This is an Amp product demonstration and personal workflow report, not a comparative evaluation. The subscription, usage, productivity, model-capability, and testing-volume claims have no measured baseline. Several dispatched tasks remain unfinished when the recording ends, and the direct-to-main shipping configuration reflects Slack's team practice rather than a general change-control recommendation.

### Operating Mechanisms

- **Inspect the running product before reading the diff**: Slack starts from an interactive preview, screenshots, or a video walkthrough to judge the feature's user-facing concepts and behavior, then decides where code inspection is useful ([00:01:51]-[00:03:34]).
- **Convert observed friction into isolated work while the evidence is fresh**: During the walkthrough he finds a focus bug, opens a separate Orb thread, and supplies the failing interaction as the brief instead of filing a ticket for later reconstruction. A later rendering issue starts from a screenshot and includes a request for screenshot proof ([00:05:08]-[00:06:49], [00:10:32]-[00:11:09]).
- **Use the smallest representative evaluation surface**: Component-level work can begin in the repository's lightweight `/storybook` route, while cross-frame behavior is exercised in the full application. This separates cheap visual iteration from the integration path that must ultimately work ([00:06:51]-[00:07:38], [00:12:17]-[00:13:02]).
- **Build missing test state, then separate reusable fixture work**: When the sample app lacks the nested Portal state needed to reproduce a focus problem, Slack asks the agent to create it. He conditionally delegates promotion of that fixture to another thread only after the approach works and asks that it then leave the current change set ([00:13:03]-[00:14:18]).
- **Keep incidental research out of the implementation context**: A side question about two notice types goes to a separate BTW thread and returns an answer without expanding the primary task's context ([00:08:33]-[00:09:11]).
- **Scale review to consequence but still check behavior**: Slack describes lighter code review for low-blast-radius client-side or purely visual work, inspects one resulting implementation for red flags, and manually confirms the nested-Portal interaction. He says he would normally ask the agent to perform more of that behavioral check; the recording does not establish that low-risk changes are defect-free ([00:07:37]-[00:08:26], [00:11:15]-[00:12:10], [00:19:56]-[00:20:40]).
- **Route work to the environment that can reproduce it**: Linux Orbs handle isolated web work, while a macOS-specific keyboard problem is sent to a runner on Slack's Mac with a screenshot and reproduction details ([00:21:35]-[00:23:38]).
- **Express temporal dependencies in the assignment**: Slack describes work that waits for verification, merge, deployment, or a later check before continuing. The nested-Portal fixture provides one live conditional handoff; the longer deployment and scheduled examples are capability claims rather than completed demonstrations ([00:13:47]-[00:14:37]).

Full video: <https://www.youtube.com/watch?v=zcwokjZcSZs>
