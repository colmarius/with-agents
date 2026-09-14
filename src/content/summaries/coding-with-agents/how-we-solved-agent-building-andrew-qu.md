---
title: "How We Solved Agent Building — Andrew Qu, Vercel"
resourceId: 138
date: "2026-09-14"
---

Andrew Qu's account of building Vercel's data science agent, D0, centers on a practical lesson: familiar tools and company-specific knowledge can matter more than elaborate orchestration.

### Main points

- **Start with a recurring interruption.** Marketing and sales questions forced the data team to stop other work, write SQL, analyze results, and report back. Qu's first prototype put the Snowflake schema in a system prompt; he manually ran the generated SQL to test whether the model could produce useful queries. [02:36–04:22](https://www.youtube.com/watch?v=9dYcwOkpCE8&t=156s)
- **Preserve the context needed to recover from errors.** A chain of specialized agents handled schema exploration, planning, SQL execution, and reporting, but each successor received only a summary and a snippet of earlier work. Qu moved to one agent managing its own state so it could revisit earlier exploration when a query or join failed. The team was confident, but early users found it “awful”: they asked questions the team had not anticipated in its evaluations. [04:22–07:35](https://www.youtube.com/watch?v=9dYcwOkpCE8&t=262s)
- **Let the agent explore company context with familiar tools.** After seeing Claude Code with Opus 4.5 answer their questions, the team put the semantic layer—company data definitions and relationships—into files in a sandbox, an isolated execution environment. Bash and file operations let the agent find relevant context and work through the task; a few extra tools handled Vercel-specific needs. Qu attributes the improvement to tools the models already use well rather than a prescriptive custom tool set. He says the evaluation score roughly doubled, but the talk does not isolate the effects of model, tools, and context changes. [07:35–09:50](https://www.youtube.com/watch?v=9dYcwOkpCE8&t=455s)
- **Turn repeated query patterns into reusable skills.** With thousands of daily queries, the team found recurring patterns such as aggregations, product lookups, and billing questions. A recurring job tries to distill recent queries into skills: reusable task guidance that gives later runs knowledge from earlier work. Qu reports roughly 100 skills, but does not detail how they are generated or validated. [10:14–11:23](https://www.youtube.com/watch?v=9dYcwOkpCE8&t=614s)
- **Make the approach easier to reuse.** Eve assembles agents from designated folders for skills, tools, and channels—the places people interact with the agent—using a convention similar to Next.js. The team rewrote D0 in Eve to make its instructions, skills, and tools easier to compose and iterate on. [11:35–14:15](https://www.youtube.com/watch?v=9dYcwOkpCE8&t=695s)
- **Company knowledge is the differentiator.** Qu argues that useful data agents need more than access to Snowflake: they must know which business concepts relate and when to query them. He reports roughly 20 useful internal agents across functions and says D0 freed the data team to improve Snowflake performance and add missing data sources. [15:03–16:53](https://www.youtube.com/watch?v=9dYcwOkpCE8&t=903s)
