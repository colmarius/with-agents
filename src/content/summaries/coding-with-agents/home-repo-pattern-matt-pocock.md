---
addedDate: '2026-11-12'
title: "The Home Repo Pattern: Run agents across ALL your repos"
resourceId: 74
date: "2026-11-12"
collection: "matt-pocock-agent-skills"
order: 1
videoId: "hWe-j78vNpc"
---

Matt Pocock proposes a home repository: one versioned starting directory for agent sessions that holds shared instructions, skills, tools, and pointers to other repositories. The application code stays in its existing repositories; the home repo gives the agent a consistent place to find team context.

*Based on the English auto-generated captions. The examples describe Pocock's workflow, not controlled measurements of team productivity.*

### Key Points Covered

- **Cross-repository editing is already possible; shared setup is the problem.** An agent started in one application can edit another and produce separate pull requests. Pocock's concern is keeping instructions, skills, and tools synchronized when they are copied into many repositories. He treats user-level configuration as a place for personal preferences rather than the team's shared setup. [00:00–02:54](https://www.youtube.com/watch?v=hWe-j78vNpc&t=0s)
- **Start sessions in the home repo.** Pocock keeps private skills, versioned agent settings, a wiki, and custom tools there. Navigation pointers in `CLAUDE.md` or `AGENTS.md` identify the repositories relevant to a task, so the agent can work elsewhere while starting with the same shared context. [01:52–03:58](https://www.youtube.com/watch?v=hWe-j78vNpc&t=112s)
- **Use paths for navigation and worktrees for concurrent work.** In his setup, an agent clones a missing repository at the referenced location and uses a worktree when several agents work concurrently. Worktrees still need cleanup. For hundreds of repositories, he proposes linking first to groups such as frontend, backend, and internal tooling, then to individual repositories, rather than putting every path in the top-level instructions. [03:58–05:01](https://www.youtube.com/watch?v=hWe-j78vNpc&t=238s)
- **A home repo is an option when a monorepo is impractical.** Pocock would prefer one repository when feasible, but points to mixed public/private code and organizational constraints as reasons separate repositories may remain necessary. The pattern centralizes agent setup without requiring that migration. [05:01–06:07](https://www.youtube.com/watch?v=hWe-j78vNpc&t=301s)
- **Shared tools can connect business context to code changes.** His wiki CLI integrates services such as Discord, Gmail, GitHub, and calendars. He describes a workflow that starts with a Discord message, fixes a course repository, and uses a course-video-management skill to update the course. Centralizing these tools gives sessions a consistent way to reach those systems; this video does not explain how he generates or maintains the wiki. [06:07–08:03](https://www.youtube.com/watch?v=hWe-j78vNpc&t=367s)

Full video: <https://www.youtube.com/watch?v=hWe-j78vNpc>
