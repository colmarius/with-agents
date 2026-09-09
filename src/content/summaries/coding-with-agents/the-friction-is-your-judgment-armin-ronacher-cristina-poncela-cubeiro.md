---
title: "The Friction is Your Judgment"
resourceId: 17
date: "2026-04-18"
---

Armin Ronacher and Cristina Poncela Cubeiro argue that agentic coding does not eliminate the need for friction; it makes the right kinds of friction more important because they pull human judgment back into fast-moving AI workflows.

### Key Points Covered

- **"Ship without friction" is the wrong default**: The talk opens with a security incident and a marketing tagline that promised frictionless shipping, then uses that contrast to argue for adding useful friction back into AI-assisted engineering [00:15–02:06](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=15s).
- **Agent use creates psychological and engineering problems**: After a year of building with agents, the speakers separate two recurring issues: people abdicate thinking to the tool, and code quality varies sharply with codebase structure [02:06–02:55](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=126s).
- **The productivity unlock becomes pressure**: Cristina describes how agents move from fun leverage to a new workplace baseline where everyone is expected to ship more and faster [02:55–03:49](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=175s).
- **The next prompt can feel addictive**: Fast output produces a variable-reward loop: the next prompt might fix everything, or it might add one more layer of slop [03:49–04:46](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=229s).
- **Generation now outpaces review**: Agents amplify code production, but responsibility still sits with humans. The result is skipped reviews, rubber-stamping, and overwhelming pull requests [04:46–06:30](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=286s).
- **Agents do not feel the discomfort that guides engineers**: Ronacher gives examples where agents choose locally convenient fallbacks or hidden behavior that runs but should make a human uneasy [06:30–08:25](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=390s).
- **Agents do better on libraries than products**: Libraries tend to have compact APIs and clean boundaries, while products combine UI, permissions, feature flags, billing, and global state in ways that exceed local context [08:25–10:30](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=505s).
- **Your codebase is infrastructure for the agent**: The speakers recommend modular boundaries, visible flow, familiar patterns, simple cores, and less hidden magic so agents can work inside legible constraints [10:30–12:17](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=630s).
- **Mechanical checks create rails**: Lint rules, centralized query interfaces, one primitive UI system, avoiding dynamic imports, and naming conventions give agents deterministic feedback and give humans better review signals [12:17–14:01](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=737s).
- **Good friction routes decisions to humans**: Their review approach lets agents fix mechanical issues while calling out migrations, permissions, dependencies, reliability, and architecture changes for human judgment [14:01–17:55](https://www.youtube.com/watch?v=_Zcw_sVF6hU&t=841s).

Full video: <https://www.youtube.com/watch?v=_Zcw_sVF6hU>
