---
title: "A love letter to Pi | Lucas Meijer"
resourceId: 13
date: "2026-03-25"
---

Lucas Meijer describes agent-assisted engineering habits in a Build Monumental talk. He covers preparing repos, defining evaluation, and shaping Pi around a task.

### Key Points Covered

- **Start with the problem you actually have**: Meijer describes himself as still "coping" with agents and warns against chasing every stage-nine shiny tool. He shares the current habits that work for his own day-to-day programming [00:01–01:58](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=1s).
- **HTML is a better review surface than terminal text**: For broad codebase analysis, he asks agents to present their work as a single HTML slide deck. This makes large amounts of information easier to skim, index, and revisit than a terminal transcript [01:58–02:53](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=118s).
- **Make the repo into a smoother path for the agent**: Using Marble Madness as an analogy, Meijer says agents go off course when instructions are incomplete, docs are wrong, or builds emit ignored warnings. He recommends reading transcripts and asking what would have helped the agent reach its goal faster [02:53–05:24](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=173s).
- **Use agents to audit their own friction**: After a session, he asks the agent to find wrong turns and recommend repo changes that would have avoided them. One example is fixing stale build documentation that forced the agent to reverse-engineer the build system [05:24–07:10](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=324s).
- **Define evaluation before dispatching work**: Meijer argues the biggest mental shift is deciding upfront how to assess the result. The options include source review, transcript review, website use, game play, or something else. He recommends putting that evaluation criterion into the prompt [07:10–08:55](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=430s).
- **Treat the human as the bottleneck**: With many agent workstreams waiting for him, he focuses on "evaluation packs" that make review cheaper. He says the agent should assemble the evidence needed for a human to decide whether the work is good [08:55–10:30](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=535s).
- **Ask for proof, not just summaries**: For a one-shot website, Meijer asks the agent to record a video demonstrating features, gather screenshots, and package them into an HTML page. The browser then runs the code, and the model can inspect visual outputs too [10:30–13:05](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=630s).
- **Pi matters because no one knows the final workflow yet**: The "love letter" starts from Pi's hackability. Meijer says developers need tools for experimenting with workflows because coding-agent ergonomics are still unsettled [13:05–14:09](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=785s).
- **Tree-shaped context makes side quests disposable**: Pi's `/tree` lets Meijer jump back to an earlier context, discard irrelevant detours, or keep only a summary. He argues this is better than arguing with an agent and paying for failed side quests in both tokens and model intelligence [14:09–20:20](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=849s).
- **Extensions solve real workflow irritations**: The `/answer` extension extracts a list of agent questions into a nicer UI. Meijer uses it to show how small Pi extensions can address concrete workflow pain instead of hypothetical agent-swarm problems [16:39–18:26](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=999s).
- **Custom visibility and self-modification are the payoff**: Meijer demos a virtual-terminal extension for long-running commands. He then describes "Barbapapa software": software that morphs at runtime around the user's current problem. He ends with Pi hot-reloading a Doom overlay extension it just wrote [21:22–26:31](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=1282s).

Full video: <https://www.youtube.com/watch?v=fdbXNWkpPMY>
