---
title: "ChatGPT Atlas Browser, Handoffs, and AR Apps"
resourceId: 3
series: "build-crew"
episode: 5
date: "2025-10-21"
---

Starting a new agent conversation need not mean losing useful work. The Build Crew panel demonstrates handing a specific goal and selected context to a fresh thread, retrieving patterns from other repositories, and using agents to review both code and a website. Guest AJ also describes tools he uses while building augmented-reality applications.

### Carry forward the context the next task needs

* **A handoff is guided by the next goal.** Thorsten Ball demonstrates Amp's then-upcoming `/handoff` feature: an LLM reads the current thread and a new goal, such as testing a completed feature, then drafts a prompt with relevant files for a fresh conversation. The user can edit that prompt before sending it. Ball prefers this to carrying along unrelated debugging detours [14:28–20:27](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=868s).
* **Reuse a concrete pattern from another repository.** AJ asks Amp's Librarian to find how he defines Modal endpoints in an existing GitHub repository and reproduce that structure in a FastAPI template. Librarian supplies focused repository research; AJ still specifies which example and pattern he wants [49:53–53:40](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=2993s).
* **Keep branches and files visible to the human.** AJ uses LazyGit, a terminal Git interface, to inspect branches and commits, including separate machine-learning training experiments. He uses Yazi as a terminal file browser [47:50–49:53](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=2870s).

### Use agents to inspect work, not only generate it

* **Try a simulated visitor's path through a website.** Ryan Carson asks Atlas's browser agent to explore AJ's site as someone considering hiring him. He watches it follow links and takes over when a page appears not to work. This is a simulated visitor's path, not feedback from a real prospective customer [23:22–28:20](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=1402s).
* **A second pass can catch mistakes in generated code.** Cyan describes feeding pull-request diffs to an agent reviewer in CI. He reports useful findings even when an agent wrote the code, and also uses agents to explain unfamiliar changes. Grouping review by feature intent rather than by file is a further interface idea, not a finished feature in the demo [42:21–46:05](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=2541s).
* **Measuring elapsed time does not establish deeper work.** McBain shows a toolbox that lets an agent read the clock and compare elapsed time with the requested duration. He explicitly does not know whether it improves results or merely makes the agent wait until time has passed [39:15–41:18](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=2355s).

Ball closes with a boundary for automation: when a workflow requires exact repetition, put the loop in code and invoke agents from it rather than expecting a prompt to enforce deterministic control flow [57:26–59:32](https://www.youtube.com/watch?v=dvcwFTtX2jY&t=3446s).

Full Video: [Watch on YouTube](https://www.youtube.com/watch?v=dvcwFTtX2jY)

Build Crew: <https://buildcrew.team>
