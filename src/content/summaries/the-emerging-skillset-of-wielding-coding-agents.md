---
title: "The Emerging Skillset of Wielding Coding Agents"
resourceId: 5
date: "2025-06-30"
---

Beyang Liu argues that effective coding-agent use requires two skills: giving agents enough context to act independently, and building feedback loops that let them check their work. The Sourcegraph CTO and co-founder draws on Amp users and a live code change to explain why delegating implementation still requires understanding the code.

### From Suggested Code to Executed Work

Liu distinguishes autocomplete, chatbots that retrieve code to inform answers, and agents that use tools to act on a repository. He argues that stronger tool use changes the interface developers need: instead of repeatedly copying context and applying suggested edits, they can delegate work and inspect the result [04:15–08:11](https://www.youtube.com/watch?v=F_RyElT_gJk&t=255s).

### Controversial Design Decisions in the Age of Agents

Liu presents these as design choices behind Amp, not universal requirements:

* **Let agents edit, then review meaningful changes:** Liu wants humans to steer the work rather than approve every mechanical edit. He also questions how much interface is needed for manually supplying context and applying suggestions once agents can do those things themselves [07:09–08:11](https://www.youtube.com/watch?v=F_RyElT_gJk&t=429s).
* **Evaluate models with their tools:** An agent relies on the model to choose and sequence tool calls, so replacing the model can change the whole workflow. Liu says model swaps are less straightforward than in a retrieval chatbot [08:11–09:14](https://www.youtube.com/watch?v=F_RyElT_gJk&t=491s).
* **Compare cost with human time saved:** Liu argues that flat-rate pricing can reward vendors for using cheaper, less capable models even when those models waste users' time [09:14–10:17](https://www.youtube.com/watch?v=F_RyElT_gJk&t=554s).
* **Keep tools composable:** He favors command-line interfaces that users can script and combine with other tools. Amp's early VS Code and CLI clients reflect that preference for a small interface [09:14–12:22](https://www.youtube.com/watch?v=F_RyElT_gJk&t=554s).

### Amp: A Coding Agent in Practice

Liu asks Amp to find a Linear issue and customize the Linear connector's icon. It retrieves the issue, searches the codebase, makes edits, and checks diagnostics. The first result updates the admin page but misses settings [13:26–20:38](https://www.youtube.com/watch?v=F_RyElT_gJk&t=806s).

The missing icon exposes an access boundary: the endpoint identifying Linear lives in configuration that can also contain secrets. After Liu asks it to investigate, the agent reuses an existing mechanism to send only the permitted field to the settings page. Liu inspects the diff and judges that it preserved the boundary [19:33–20:38](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1173s), [25:48–27:42](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1548s).

### Power User Patterns and Best Practices

Liu reports these patterns among Amp's active users:

* **Supply the context a colleague would need:** Detailed prompts help with unfamiliar project conventions. Naming the right build or test command can let an otherwise stuck agent check and correct its own work [22:46–25:48](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1366s).
* **Make visual feedback fast:** Playwright lets the agent open a browser and capture the result. Storybook isolates a UI component so it can inspect a change without loading the whole application, then edit and check again [24:47–26:50](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1487s).
* **Use explanations to start a review:** Liu asks for a high-level diff summary and a useful entry point, then reads the changes. The agent lowers the effort of getting oriented rather than replacing comprehension [27:42–29:30](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1662s).
* **Isolate bounded work in subagents:** A separate agent can consume the context needed for a search or small feature without putting all that intermediate detail into the main conversation. Liu uses this to limit the degradation he observes in long sessions [29:30–30:30](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1770s).

### The Future of Coding with Agents

Liu describes experienced users running multiple agents on compiler work with deliberately constructed prompts and feedback loops. He treats agent use as a skill learned through practice and shared workflows, while keeping the human responsible for shipped code [30:30–33:38](https://www.youtube.com/watch?v=F_RyElT_gJk&t=1830s).

Full video: <https://www.youtube.com/watch?v=F_RyElT_gJk>
