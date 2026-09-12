---
title: "A love letter to Pi | Lucas Meijer"
resourceId: 13
date: "2026-03-25"
---

Lucas Meijer uses Pi, an extensible coding agent, to explore a practical problem: agents can produce work faster than he can review it. His response is to make repositories easier for agents to navigate and ask for test results, screenshots, and demonstrations that help both the agent and the human assess the result.

### Key Points Covered

- **Start with the problem you actually have**: Meijer warns against chasing elaborate agent-swarm setups before knowing what problem they would solve. He shares habits that work for his own day-to-day programming, not a universal workflow [00:01–01:58](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=1s).
- **HTML is a better review surface than terminal text**: For broad codebase analysis, he asks agents to present their work as a single HTML slide deck. This makes large amounts of information easier to skim, index, and revisit than a terminal transcript [01:58–02:53](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=118s).
- **Make the repo into a smoother path for the agent**: Using Marble Madness as an analogy, Meijer says agents go off course when instructions are incomplete, docs are wrong, or builds emit ignored warnings. He recommends reading transcripts and asking what would have helped the agent reach its goal faster [02:53–05:24](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=173s).
- **Use agents to audit their own friction**: After a session, he asks the agent to find wrong turns and recommend repo changes that would have avoided them. One example is fixing stale build documentation that forced the agent to reverse-engineer the build system [05:24–07:10](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=324s).
- **Define evaluation before dispatching work**: Meijer argues the biggest mental shift is deciding upfront how to assess the result. The options include source review, transcript review, website use, game play, or something else. He recommends putting that evaluation criterion into the prompt [07:10–08:55](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=430s).
- **Treat the human as the bottleneck**: With many agent workstreams waiting for him, he focuses on "evaluation packs" that make review cheaper. He says the agent should assemble the evidence needed for a human to decide whether the work is good [08:55–10:30](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=535s).
- **Ask for proof, not just summaries**: For a one-shot website, Meijer asks the agent to record a video demonstrating features, gather screenshots, and package them into an HTML page. The browser then runs the code, and the model can inspect visual outputs too [10:30–13:05](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=630s).
- **Pi matters because no one knows the final workflow yet**: The "love letter" starts from Pi's hackability. Meijer says developers need tools for experimenting with workflows because coding-agent ergonomics are still unsettled [13:05–14:09](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=785s).
- **Remove irrelevant detours from the next prompt**: Pi's `/tree` lets Meijer return to an earlier point in the conversation and either discard a branch or retain a summary. He discards a demonstration about food preferences, but would summarize a useful failed experiment so the agent knows what was tried. The point is to choose what remains in the model's input rather than keep every exchange [14:09–21:22](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=849s).
- **Extensions solve real workflow irritations**: The `/answer` extension extracts a list of agent questions into a nicer UI. Meijer uses it to show how small Pi extensions can address concrete workflow pain instead of hypothetical agent-swarm problems [16:39–18:26](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=999s).
- **Extensions can make their own behavior easier to inspect**: Meijer's virtual-terminal extension shows the progress of long-running commands. To review it, he asks for test programs, screenshots assembled into animations, and side-by-side output from the new terminal and Pi's existing one [21:22–24:43](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=1282s).
- **Software can adapt while it is running**: Meijer asks Pi to write a Doom overlay extension, then loads it without restarting. He calls this "Barbapapa software," after shape-shifting cartoon characters: a reusable base that can acquire features for a particular user's task [24:43–27:10](https://www.youtube.com/watch?v=fdbXNWkpPMY&t=1483s).

Full video: <https://www.youtube.com/watch?v=fdbXNWkpPMY>
