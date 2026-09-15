---
title: "Remote Coding Agents"
resourceId: 94
date: "2026-03-16"
collection: syntax-agent-workflows
order: 3
videoId: S916GQVhRb8
---

Wes Bos and Scott compare ways to run coding agents away from the laptop: managed cloud environments, command-line agents on an always-on machine, and remote development environments. Their recurring concern is continuity: keeping work running while still being able to inspect and edit the code yourself.

This summary is based on the video's English auto-generated captions, not an original-audio review. Product capabilities and personal experiences below reflect the March 2026 discussion, not a current feature comparison.

### Main takeaways

- **Remote execution separates a task's lifetime from your laptop session.** [02:33–07:43](https://www.youtube.com/watch?v=S916GQVhRb8&t=153s): the hosts describe starting work from a phone and returning later to review it. Wes gives a concrete example: a skill gathers links, captions, and code examples for his website's tips pages, incorporating a few sentences he supplies. Slow browser checks can also be useful when the result is not needed immediately; this is an asynchronous workflow, not a claim that remote agents run faster.
- **Events can start an agent without a fresh prompt.** [09:49–11:43](https://www.youtube.com/watch?v=S916GQVhRb8&t=589s): Wes describes connecting Sentry to Cursor with an API key on the Mad CSS site. A new error supplies an agent with error metadata and repository access so it can investigate; the integration can be configured to submit a pull request if it finds a fix. The described outcome is a proposed code change, not evidence that arbitrary production errors are safely repaired and deployed automatically.
- **Hosting options trade setup work against control and handoff friction.** [13:49–19:56](https://www.youtube.com/watch?v=S916GQVhRb8&t=829s): the hosts discuss spare computers and rented Linux servers as alternatives to managed agents. Wes describes Cursor's cloud environment as an Ubuntu machine with a terminal and browser, letting the agent inspect pages and take screenshots. His frustration is bringing an unfinished cloud task back into the editor: the pull-request and Git workflow interrupts his preferred transition from prompting to editing directly.
- **Scott keeps agent sessions and manual editing connected to the same machines.** [20:49–24:38](https://www.youtube.com/watch?v=S916GQVhRb8&t=1249s): he runs OpenCode Web where his development processes live and accesses its web interface from his phone through Tailscale, which connects his devices even off the home network. He uses Zed over SSH when he wants to edit remote code. He has not moved everything: the existing Syntax project remains on his laptop because migrating its database setup would be extra work. Remote access to that laptop is distinct from moving execution off it.
- **Moving the whole environment changes more than the chat interface.** [24:38–28:38](https://www.youtube.com/watch?v=S916GQVhRb8&t=1478s): Wes distinguishes an editor connected over SSH, where code and terminal processes run remotely, from a browser-hosted editor such as code-server. The hosts discuss reduced laptop workload alongside network dependence. They recommend establishing stable access early: Scott uses Tailscale, while Wes uses Cloudflare Tunnels with Access. Predictable domains and project-specific ports simplify reconnecting and testing development sites on a phone.
- **A remote agent needs the project's tools, not just its repository.** [35:59–40:16](https://www.youtube.com/watch?v=S916GQVhRb8&t=2159s): the hosts list Git access, command-line utilities, a browser, and relevant service credentials as environment requirements. Image resizing illustrates why local tools such as FFmpeg or Sharp may need installing remotely. These are workflow dependencies they identify, not a credential-isolation or least-privilege design established by the episode.
- **A submitted pull request does not close the verification loop.** [39:11–41:19](https://www.youtube.com/watch?v=S916GQVhRb8&t=2351s): Wes reports an agent declaring completion and submitting a pull request, followed by a failing Cloudflare Workers build. The missing connection was returning deployment logs to the agent. He proposes checking the completed build and feeding failures back for another attempt, but explicitly says he had not wired that up. Treat this as a desired feedback loop, not a demonstrated self-repairing deployment system.

Full video: [Remote Coding Agents](https://www.youtube.com/watch?v=S916GQVhRb8).
