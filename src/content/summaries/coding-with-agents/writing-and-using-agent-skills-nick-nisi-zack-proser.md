---
title: "Writing & Using Skills"
resourceId: 43
date: "2026-05-06"
---

WorkOS developer experience engineers Nick Nisi and Zack Proser lead a hands-on workshop on turning repeated agent work into portable skills. The practical value is the full authoring loop: route a skill to the right task, give it deterministic inputs, keep optional context out of unrelated runs, and test whether it improves the base agent.

The workshop does not settle team ownership, versioning, or conflicting-skill governance. Its evaluations are practitioner-designed and directional; the speakers explicitly describe their figures as approximate.

### Key Points Covered

- **Write descriptions as routing rules**: A skill's name and description help the model decide when to load it, while a few clear constraints can guide behavior better than an exhaustive procedure [00:07:46]-[00:09:24], [00:14:12]-[00:15:10].
- **Separate always-loaded rules from task procedures**: Keep `AGENTS.md` or `CLAUDE.md` small and reserve skills for recognizable work that should load only when relevant [00:20:28]-[00:22:13].
- **Use scripts for deterministic inputs**: A fixed command can provide Git history, stale TODOs, or other evidence in a known format instead of making the model rediscover the same data on every run [00:16:04]-[00:17:49].
- **Disclose specialized context progressively**: A compact skill can point to a testing rubric, framework guide, or migration reference and load it only when that branch of work applies [00:43:56]-[00:45:46].
- **Improve skills from observed friction**: Start with a small version, use it on real tasks, then inspect repeated questions, failures, and unnecessary tool calls before adding guidance [00:48:35]-[00:51:33], [01:17:32]-[01:18:23].
- **Compare against the uncustomized agent**: The presenters run tasks with and without shipped skills and repeat those checks as models change. Their Next.js example supports the directional warning that over-prescription can make a capable model worse, not the approximate percentage they mention [00:29:24]-[00:31:14], [01:09:30]-[01:10:28].
- **Treat shared-skill governance as unfinished**: Repository, organization, public, and personal scopes can reduce collisions, but review ownership, forks, duplicate skills, and model-change maintenance remain open problems [00:23:01]-[00:29:24].

Full workshop: <https://www.youtube.com/watch?v=pFsfax19yOM>
