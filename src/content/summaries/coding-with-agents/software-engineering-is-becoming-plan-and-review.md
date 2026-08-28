---
title: "Software Engineering Is Becoming Plan and Review — Louis Knight-Webb, Vibe Kanban"
resourceId: 81
date: "2026-05-02"
---

Louis Knight-Webb, founder of Vibe Kanban, argues that coding agents displace implementation effort into planning and review rather than simply returning that time to engineers. He connects task shape and longer agent runs to a workflow built around upfront specification, asynchronous execution, focused review, and parallel workstreams.

This is a founder’s practitioner talk and product demonstration, not a measured comparison. The “five minutes of planning saves 30 minutes of review” and five-minute runtime threshold are Knight-Webb’s heuristics, not supplied benchmark results. His task matrix is deliberately broad, and his forecast that agents will routinely QA front-end work was not yet his observed mainstream practice.

### Key Points Covered

- **Code generation moves work rather than removing it**: Knight-Webb says less manual coding means more time specifying desired outcomes and reviewing generated changes, even if the overall delivery loop becomes faster ([00:01:10–00:03:56](https://www.youtube.com/watch?v=W76woOYHlvY&t=70s)).
- **Spend human attention before or after execution deliberately**: Detailed plans, questions, constraints, and edge cases can reduce correction rounds; under-specified tasks start faster but demand more back-and-forth review. He favors planning when the task can be described well ([00:03:56–00:05:59](https://www.youtube.com/watch?v=W76woOYHlvY&t=236s)).
- **Match supervision to the task**: He keeps interactive front-end feature work closer to the human because visual and stateful behavior is difficult to specify exhaustively, while treating back-end features, migrations, maintenance, and refactoring as better candidates for plan-heavy, test-driven execution ([00:05:59–00:07:50](https://www.youtube.com/watch?v=W76woOYHlvY&t=359s)).
- **Longer verification changes the interaction model**: Type checking, tests, and browser automation make agent runs slower but can reduce human correction. Knight-Webb expects sufficiently long runs to push developers from watching one agent toward asynchronous, parallel work ([00:07:50–00:10:26](https://www.youtube.com/watch?v=W76woOYHlvY&t=470s)).
- **Protect focus across concurrent workstreams**: His proposed interface combines isolated workspaces, diffs, comments, previews, task planning, QA, review, and pull-request follow-up so agents can run longer without repeatedly pulling the reviewer back into context ([00:10:26–00:14:01](https://www.youtube.com/watch?v=W76woOYHlvY&t=626s)).
- **The live demo illustrates a path, not general reliability**: Vibe Kanban creates a worktree, installs dependencies, runs Codex, previews a prepared shutdown post, and opens a pull request. The demo covers one small website change and provides no comparative defect, throughput, or review-time data ([00:14:01–00:17:48](https://www.youtube.com/watch?v=W76woOYHlvY&t=841s)).

[Watch the full video on YouTube](https://www.youtube.com/watch?v=W76woOYHlvY).
