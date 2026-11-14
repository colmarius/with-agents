---
title: "Richard Feldman: Stop Doing Agent Archaeology on Your Team's Code"
resourceId: 211
date: "2026-11-09"
---

Richard Feldman argues that teams lose context when agent-assisted work passes from one person to another. The agent conversation, side discussions, and abandoned approaches stay in separate places, so the next person has to reconstruct why the code looks the way it does. He then demonstrates Delta, a collaboration tool that keeps agent conversations, human comments, code review, and terminal output in shared threads.

This summary is based on the English auto-generated captions. Feldman presents Delta on behalf of the team building it, which he says previously built the Zed editor. The talk is a product demonstration by its maker: its descriptions of Delta's behavior, scale, and internal use are first-party claims, not independent evaluations.

### Key points

- **Handoffs usually transfer snapshots, not reasoning.** Feldman's example is a coworker leaving for vacation with a branch name and a pasted agent transcript. The receiver gets the issue description, some commits, and the transcript, but not reliably how the code evolved, which approaches failed and were never committed, or the rationale behind decisions. He compares this to a puzzle with missing pieces that the receiver tries to fill in with their own agent. [00:01–02:51](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=1s)
- **"Agent archaeology" is reconstructing old decisions from clues.** When a team builds on a feature made six months earlier, the reason for a design choice may sit in a transcript nobody shared, in Slack, or in a meeting. Developers then read meaning into commit messages to guess whether an alternative was already considered and rejected. Feldman calls this wasted effort because the information existed when the work was done. [02:51–03:53](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=171s)
- **Delta's approach is to put human discussion inside the agent thread.** In Feldman's example, a coworker's agent suggested checking with Feldman about a related feature. The coworker at-mentioned him in the thread, Feldman replied that his earlier work was stale, and that exchange stayed in the conversation the agent can read. Feldman argues that code changes and agent conversations are now closely linked parts of how software is made, so keeping them in separate tools makes agents less effective. [04:56–07:47](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=296s)
- **Comments and decisions become context for later agents.** In the demo, Feldman highlights part of the agent's reply and comments on it as a prompt. He then at-mentions a coworker, Bennett, who gets a notification, joins, and answers a UI question. Feldman says his agent, and any future agent given access to the thread, can see both the decision and how casually it was made, so it can tell a quick preference from a researched choice. [07:47–10:36](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=467s)
- **Code review happens in the same thread.** Line comments on the diff go to the agent as questions about that line. Delta also supports marking review complete and inviting coworkers to approve or reject changes, and collaborators can edit code directly. [09:40–11:38](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=580s) Feldman says Delta is model- and harness-agnostic. He mentions using a ChatGPT subscription, a Claude Code plug-in in progress, and planned support for Claude Code subscriptions through ACP. [07:47–08:38](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=467s)
- **Joining a thread syncs terminals and creates a local copy.** Bennett's terminal output appears in real time in Feldman's view, but Feldman cannot type into it; he says allowing that would give others remote code execution on Bennett's machine. Feldman opens his own terminal in the thread, which Bennett can watch. Joining also created a local mirror of the repository using what Feldman calls Delta worktrees, rather than Git worktrees, and each person can use their own agent. [10:36–13:27](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=636s)
- **Sub-threads let people catch up without interrupting the main work.** Asked whether a person brought into a thread must read everything above, Feldman shows a sub-thread where he asked the agent for an overview of the approach and followed up with questions. The coworker continued on the main thread meanwhile. [17:37–19:24](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=1057s)

### Product status from the Q&A

- **Scale is reported, not tested.** Feldman says the team has not run a large stress test, but holds stand-ups of about 30 to 40 people in one thread without problems. [14:20–15:14](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=860s)
- **Sync runs on Delta's cloud.** Agents can run locally or on a cloud runner, while synchronization currently runs on the company's cloud. Feldman mentions a first on-premises pilot and says many people he has talked to work in regulated industries that need everything on their own hardware. [15:14–16:00](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=914s)
- **Delta is in private beta.** It is free during the beta, and pricing has not been set. [16:00–16:50](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=960s)
- **The team has stopped using pull requests internally.** Feldman says they ask the agent to run CI and then land the change through a dedicated flow. For SOC 2 needs, Delta has a sign-off workflow that records an approval. There is no official bot API yet; Feldman says the at-mention system could be extended to bots such as an SRE bot. [16:50–18:30](https://www.youtube.com/watch?v=Enn9dVrRXAo&t=1010s)

### Limits

The talk describes the context-loss problem through scenarios and anecdotes rather than measured costs. The live demo shows features working with one coworker who was in the audience; it does not show how Delta handles long-lived threads or large teams. Dropping pull requests is the Delta team's own practice, not a tested recommendation for other teams.

Full video: <https://www.youtube.com/watch?v=Enn9dVrRXAo>
