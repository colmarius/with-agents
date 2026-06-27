---
title: "A love letter to Pi | Lucas Meijer"
resourceId: 13
date: "2026-03-25"
---

Lucas Meijer's Build Monumental talk is a practical walkthrough of agent-assisted engineering habits: make the repo easier for agents, decide how work will be evaluated before starting, and use Pi's hackability to shape the agent around the task instead of waiting for a vendor-defined workflow.

### Key Points Covered

- **Start with the problem you actually have**: Meijer frames himself as still "coping" with agents and warns against chasing every stage-nine shiny tool, even while sharing the current set of habits that work for his own day-to-day programming [00:00:01]-[00:01:58].
- **HTML is a better review surface than terminal text**: For broad codebase analysis, he asks agents to present their work as a single HTML slide deck, which makes large amounts of information easier to skim, index, and revisit than a terminal transcript [00:01:58]-[00:02:53].
- **Make the repo into a smoother path for the agent**: Using Marble Madness as an analogy, Meijer says agents go off course when instructions are incomplete, docs are wrong, or builds emit ignored warnings; the fix is to read transcripts and ask what would have helped the agent reach its goal faster [00:02:53]-[00:05:24].
- **Use agents to audit their own friction**: After a session, he asks the agent to find wrong turns and recommend repo changes that would have avoided them, such as fixing stale build documentation that forced the agent to reverse-engineer the build system [00:05:24]-[00:07:10].
- **Define evaluation before dispatching work**: Meijer argues the biggest mental shift is deciding upfront how you will assess the result—source review, transcript review, website use, game play, or something else—and putting that evaluation criterion into the prompt [00:07:10]-[00:08:55].
- **Treat the human as the bottleneck**: With many agent workstreams waiting for him, he focuses on "evaluation packs" that make review cheaper: the agent should assemble the evidence needed for a human to decide whether the work is good [00:08:55]-[00:10:30].
- **Ask for proof, not just summaries**: For a one-shot website, Meijer asks the agent to record a video demonstrating features, gather screenshots, and package everything into an HTML page so the browser actually runs the code and the model can inspect visual outputs too [00:10:30]-[00:13:05].
- **Pi matters because no one knows the final workflow yet**: The "love letter" starts from Pi's hackability: because coding-agent ergonomics are still unsettled, developers need tools that let them experiment with workflows for themselves and their projects [00:13:05]-[00:14:09].
- **Tree-shaped context makes side quests disposable**: Pi's `/tree` lets Meijer jump back to an earlier context, discard irrelevant detours, or keep only a summary. He argues this is better than arguing with an agent and paying for failed side quests in both tokens and model intelligence [00:14:09]-[00:20:20].
- **Extensions solve real workflow irritations**: The `/answer` extension extracts a list of agent questions into a nicer UI, showing how small Pi extensions can address concrete workflow pain instead of hypothetical agent-swarm problems [00:16:39]-[00:18:26].
- **Custom visibility and self-modification are the payoff**: Meijer demos a virtual-terminal extension for long-running commands, then describes "Barbapapa software": software that morphs at runtime around the user's current problem, ending with Pi hot-reloading a Doom overlay extension it just wrote [00:21:22]-[00:26:31].

Full video: <https://www.youtube.com/watch?v=fdbXNWkpPMY>
