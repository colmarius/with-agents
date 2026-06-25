# Source Note: OpenAI Agentic Software Development X Post

**Date captured:** 2026-06-25
**Source URL:** <https://x.com/gdb/status/2019566641491963946>
**Author/account:** Greg Brockman (`@gdb`)
**Use in talk:** Culture/process source for "agents captain," creating skills and `AGENTS.md`, making tools agent-accessible, agent-first codebases, and "say no to slop."
**Capture note:** Direct extraction from X failed in the local tooling. Transcript below was supplied by the user in the Amp thread.

## User-Provided Transcript

> Software development is undergoing a renaissance in front of our eyes.
>
> If you haven't used the tools recently, you likely are underestimating what you're missing. Since December, there's been a step function improvement in what tools like Codex can do. Some great engineers at OpenAI yesterday told me that their job has fundamentally changed since December. Prior to then, they could use Codex for unit tests; now it writes essentially all the code and does a great deal of their operations and debugging. Not everyone has yet made that leap, but it's usually because of factors besides the capability of the model.
>
> Every company faces the same opportunity now, and navigating it well — just like with cloud computing or the Internet — requires careful thought. This post shares how OpenAI is currently approaching retooling our teams towards agentic software development. We're still learning and iterating, but here's how we're thinking about it right now:
>
> As a first step, by March 31st, we're aiming that:
>
> (1) For any technical task, the tool of first resort for humans is interacting with an agent rather than using an editor or terminal.
> (2) The default way humans utilize agents is explicitly evaluated as safe, but also productive enough that most workflows do not need additional permissions.
>
> In order to get there, here's what we recommended to the team a few weeks ago:
>
> 1. Take the time to try out the tools. The tools do sell themselves — many people have had amazing experiences with 5.2 in Codex, after having churned from codex web a few months ago. But many people are also so busy they haven't had a chance to try Codex yet or got stuck thinking "is there any way it could do X" rather than just trying.
>   - Designate an "agents captain" for your team — the primary person responsible for thinking about how agents can be brought into the teams' workflow.
>   - Share experiences or questions in a few designated internal channels
>   - Take a day for a company-wide Codex hackathon
>
> 2. Create skills and AGENTS[.md].
>   - Create and maintain an AGENTS[.md] for any project you work on; update the AGENTS[.md] whenever the agent does something wrong or struggles with a task.
>   - Write skills for anything that you get Codex to do, and commit it to the skills directory in a shared repository
>
> 3. Inventory and make accessible any internal tools.
>   - Maintain a list of tools that your team relies on, and make sure someone takes point on making it agent-accessible (such as via a CLI or MCP server).
>
> 4. Structure codebases to be agent-first. With the models changing so fast, this is still somewhat untrodden ground, and will require some exploration.
>   - Write tests which are quick to run, and create high-quality interfaces between components.
>
> 5. Say no to slop. Managing AI generated code at scale is an emerging problem, and will require new processes and conventions to keep code quality high
>   - Ensure that some human is accountable for any code that gets merged. As a code reviewer, maintain at least the same bar as you would for human-written code, and make sure the author understands what they're submitting.
>
> 6. Work on basic infra. There's a lot of room for everyone to build basic infrastructure, which can be guided by internal user feedback. The core tools are getting a lot better and more usable, but there's a lot of infrastructure that currently go around the tools, such as observability, tracking not just the committed code but the agent trajectories that led to them, and central management of the tools that agents are able to use.
>
> Overall, adopting tools like Codex is not just a technical but also a deep cultural change, with a lot of downstream implications to figure out. We encourage every manager to drive this with their team, and to think through other action items — for example, per item 5 above, what else can prevent a lot of "functionally-correct but poorly-maintainable code" from creeping into codebases.

## Pull Quotes / Slide Uses

- "Designate an \"agents captain\" for your team."
- "Create and maintain an AGENTS[.md] for any project you work on; update the AGENTS[.md] whenever the agent does something wrong or struggles with a task."
- "Write skills for anything that you get Codex to do."
- "Say no to slop."
- "Ensure that some human is accountable for any code that gets merged."
- "Adopting tools like Codex is not just a technical but also a deep cultural change."
