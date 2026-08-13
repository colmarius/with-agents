---
title: "Writing & Using Skills"
resourceId: 43
date: "2026-05-06"
---

WorkOS developer experience engineers Nick Nisi and Zack Proser lead a hands-on workshop on agent skills. A skill is a small folder—sometimes only a `SKILL.md` file—that packages instructions for a specific kind of task and may also include references or scripts. Its description helps the agent decide when to load those instructions, keeping task-specific context out of unrelated runs.

The workshop demonstrates skill authoring and evaluation, not a settled system for team governance. The speakers discuss ways to distribute skills but leave ownership, review, forks, conflicts, and model-change maintenance open. Their evaluation scores are directional, and they explicitly describe the percentages as approximate.

### Key Points Covered

- **Describe when the skill applies**: Write the description for the agent, naming the task and conditions that should trigger the skill. In the body, prefer a few clear constraints over an exhaustive procedure [00:07:46]-[00:09:24], [00:14:12]-[00:16:04].
- **Reserve always-loaded files for universal rules**: Put instructions needed in every session in `AGENTS.md` or `CLAUDE.md`; keep task-specific procedures, such as testing guidance, in skills that load only for relevant work [00:20:28]-[00:22:13].
- **Use scripts to supply repeatable evidence**: Where the runtime supports it, run a fixed command to provide Git history, stale TODOs, or other inputs in a known format instead of making the agent rediscover them [00:16:04]-[00:17:49].
- **Load supporting files only when needed**: Point to a testing rubric, framework-specific guide, or migration reference only for the branch of work that requires it [00:43:56]-[00:45:46].
- **Refine skills from real runs**: Start small, use the skill on actual tasks, then add guidance where runs reveal repeated questions, failures, or unnecessary tool calls [00:48:35]-[00:51:33], [01:17:32]-[01:18:23].
- **Test against the same task without the skill**: Repeat both versions as models change. The Next.js example shows that an over-prescriptive skill can make a capable agent worse, but its reported percentage is only directional [00:29:24]-[00:30:27], [01:09:30]-[01:10:28].
- **Treat distribution and governance separately**: Project, internal, public, and personal locations provide ways to share skills, but they do not settle review ownership, forks, duplicate or conflicting skills, or ongoing maintenance [00:23:01]-[00:29:24], [00:31:14]-[00:32:06].

Full workshop: <https://www.youtube.com/watch?v=pFsfax19yOM>
