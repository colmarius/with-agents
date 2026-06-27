---
title: "The Friction is Your Judgment"
resourceId: 17
date: "2026-04-18"
---

Armin Ronacher and Cristina Poncela Cubeiro argue that agentic coding does not eliminate the need for friction; it makes the right kinds of friction more important because they pull human judgment back into fast-moving AI workflows.

### Key Points Covered

- **"Ship without friction" is the wrong default**: The talk opens with a security incident and a marketing tagline that promised frictionless shipping, then uses that contrast to argue for adding useful friction back into AI-assisted engineering [00:00:15]-[00:02:06].
- **Agent use creates psychological and engineering problems**: After a year of building with agents, the speakers separate two recurring issues: people abdicate thinking to the tool, and code quality varies sharply with codebase structure [00:02:06]-[00:02:55].
- **The productivity unlock becomes pressure**: Cristina describes how agents move from fun leverage to a new workplace baseline where everyone is expected to ship more and faster [00:02:55]-[00:03:49].
- **The next prompt can feel addictive**: Fast output produces a variable-reward loop: the next prompt might fix everything, or it might add one more layer of slop [00:03:49]-[00:04:46].
- **Generation now outpaces review**: Agents amplify code production, but responsibility still sits with humans. The result is skipped reviews, rubber-stamping, and overwhelming pull requests [00:04:46]-[00:06:30].
- **Agents do not feel the discomfort that guides engineers**: Ronacher gives examples where agents choose locally convenient fallbacks or hidden behavior that runs but should make a human uneasy [00:06:30]-[00:08:25].
- **Agents do better on libraries than products**: Libraries tend to have compact APIs and clean boundaries, while products combine UI, permissions, feature flags, billing, and global state in ways that exceed local context [00:08:25]-[00:10:30].
- **Your codebase is infrastructure for the agent**: The speakers recommend modular boundaries, visible flow, familiar patterns, simple cores, and less hidden magic so agents can work inside legible constraints [00:10:30]-[00:12:17].
- **Mechanical checks create rails**: Lint rules, centralized query interfaces, one primitive UI system, avoiding dynamic imports, and naming conventions give agents deterministic feedback and give humans better review signals [00:12:17]-[00:14:01].
- **Good friction routes decisions to humans**: Their review approach lets agents fix mechanical issues while calling out migrations, permissions, dependencies, reliability, and architecture changes for human judgment [00:14:01]-[00:17:55].

Full video: <https://www.youtube.com/watch?v=_Zcw_sVF6hU>
