---
title: "Writing & Using Skills"
resourceId: 43
date: "2026-05-06"
---

WorkOS developer experience engineers Nick Nisi and Zack Proser lead a hands-on workshop on agent skills. A skill is a small folder—sometimes only a `SKILL.md` file—that packages instructions for a specific kind of task and may also include references or scripts. Its description helps the agent decide when to load those instructions, keeping task-specific context out of unrelated runs.

The workshop demonstrates skill authoring and evaluation, not a settled system for team governance. The speakers discuss ways to distribute skills but leave ownership, review, forks, conflicts, and model-change maintenance open. Their evaluation scores are directional, and they explicitly describe the percentages as approximate.

### Key Points Covered

- **Describe when the skill applies**: Write the description for the agent, naming the task and conditions that should trigger the skill. In the body, prefer a few clear constraints over an exhaustive procedure [07:46–09:24](https://www.youtube.com/watch?v=pFsfax19yOM&t=466s), [14:12–16:04](https://www.youtube.com/watch?v=pFsfax19yOM&t=852s).
- **Reserve always-loaded files for universal rules**: Put instructions needed in every session in `AGENTS.md` or `CLAUDE.md`; keep task-specific procedures, such as testing guidance, in skills that load only for relevant work [20:28–22:13](https://www.youtube.com/watch?v=pFsfax19yOM&t=1228s).
- **Use scripts to supply repeatable evidence**: Where the runtime supports it, run a fixed command to provide Git history, stale TODOs, or other inputs in a known format instead of making the agent rediscover them [16:04–17:49](https://www.youtube.com/watch?v=pFsfax19yOM&t=964s).
- **Load supporting files only when needed**: Point to a testing rubric, framework-specific guide, or migration reference only for the branch of work that requires it [43:56–45:46](https://www.youtube.com/watch?v=pFsfax19yOM&t=2636s).
- **Refine skills from real runs**: Start small, use the skill on actual tasks, then add guidance where runs reveal repeated questions, failures, or unnecessary tool calls [48:35–51:33](https://www.youtube.com/watch?v=pFsfax19yOM&t=2915s), [1:17:32–1:18:23](https://www.youtube.com/watch?v=pFsfax19yOM&t=4652s).
- **Test against the same task without the skill**: Repeat both versions as models change. The Next.js example shows that an over-prescriptive skill can make a capable agent worse, but its reported percentage is only directional [29:24–30:27](https://www.youtube.com/watch?v=pFsfax19yOM&t=1764s), [1:09:30–1:10:28](https://www.youtube.com/watch?v=pFsfax19yOM&t=4170s).
- **Treat distribution and governance separately**: Project, internal, public, and personal locations provide ways to share skills, but they do not settle review ownership, forks, duplicate or conflicting skills, or ongoing maintenance [23:01–29:24](https://www.youtube.com/watch?v=pFsfax19yOM&t=1381s), [31:14–32:06](https://www.youtube.com/watch?v=pFsfax19yOM&t=1874s).

Full workshop: <https://www.youtube.com/watch?v=pFsfax19yOM>
