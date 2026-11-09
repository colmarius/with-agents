---
addedDate: '2026-06-24'
title: "Code Quality Shifts"
resourceId: 1
series: "raising-an-agent"
episode: 4
date: "2025-04-04"
---

In episode 4 of "Raising an Agent", Sourcegraph CEO Quinn Slack and Thorsten Ball examine how coding agents change what developers value: code becomes cheaper, generated mistakes feel different, and repositories may need to preserve the conversational context behind changes.

### Key Points Covered

- **Code is becoming cheaper and less precious**: The hosts argue that once agents can quickly generate working code, developers become more willing to throw code away, replace boilerplate, and focus on the intended behavior rather than preserving every line [02:42–04:49](https://www.youtube.com/watch?v=2ITBH4dIfWY&t=162s).

- **Generated code is judged differently**: Bad human-written code can signal misunderstanding, while bad agent-written code often feels more random: the model may produce one weak line beside several solid ones. That changes how reviewers think about trust and remediation [04:49–06:49](https://www.youtube.com/watch?v=2ITBH4dIfWY&t=289s).

- **Small dependencies may lose relative value**: The hosts do not claim open source disappears. Their point is that small, isolated libraries and visual assets become easier to replace with generated code when integrating and maintaining a dependency costs more than asking the agent to write the narrow piece you need [07:42–11:41](https://www.youtube.com/watch?v=2ITBH4dIfWY&t=462s).

- **Code hosts may need to store the reasoning behind changes**: If most code is agent-written, the useful artifact may become the repo plus the prompts, thread history, reviews, and reasoning that explain why code changed. The episode speculates that GitHub-style contribution signals and code repository workflows may need to adapt [14:51–22:01](https://www.youtube.com/watch?v=2ITBH4dIfWY&t=891s).

- **Skeptics change their minds when they see speed and less toil**: Thorsten says very fast generation convinces people, because even output that is right 70% of the time can be retried faster than they could write it. The hosts frame the agent as a mechanical helper, not an oracle. It removes the physical labor of coding and speeds up iteration, but humans still need taste, direction, and review [24:57–28:05](https://www.youtube.com/watch?v=2ITBH4dIfWY&t=1497s).

- **Show failures openly and add guardrails**: The hosts want raw demos that show the agent failing and being nudged, not cherry-picked successes, because agents still make dumb mistakes. Examples include clobbering a SvelteKit page and getting distracted by an irrelevant open file. They want guardrails for such failures but say patching edge cases one by one will not work [28:05–32:54](https://www.youtube.com/watch?v=2ITBH4dIfWY&t=1685s).

Full video: <https://www.youtube.com/watch?v=2ITBH4dIfWY>

Episode page: <https://ampcode.com/podcast/episode-4>
