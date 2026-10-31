---
title: "Google’s approach to security review with agents"
resourceId: 192
date: "2026-10-20"
---

**Give security agents the application's context before asking them to find bugs.** A threat model records how the application could be attacked: who can supply input, where that data goes, and which actions require permission. Nick Galloway explains how Mantis, Google's agent-based security review system, uses that context to distinguish real vulnerabilities from misleading findings. [05:34–08:35](https://www.youtube.com/watch?v=czKuoutcwYc&t=334s), [09:28–11:32](https://www.youtube.com/watch?v=czKuoutcwYc&t=568s)

Aron Eidelman shows how to bring those ideas into everyday development: plan for threats, test the security requirements, and check code before pushing it. Mollie Pettit hosts the discussion. [13:57–15:52](https://www.youtube.com/watch?v=czKuoutcwYc&t=837s), [19:40–23:39](https://www.youtube.com/watch?v=czKuoutcwYc&t=1180s)

*Based on English auto-generated captions, without an original-audio check. Speaker names follow the video description; technical names are normalized in this summary. This is a first-party workflow discussion, not an independent evaluation of detection accuracy or security coverage.*

## Start with the application, then divide the review into tasks

Galloway says generic "find vulnerabilities" prompts found real bugs but also produced many **false positives: reports of vulnerabilities that were not real in the application's context**. Mantis first establishes the architecture and trust boundaries, where data or actions pass between parts of the system with different permissions or levels of trust. Later review stages use that understanding to reject irrelevant findings. [05:34–08:35](https://www.youtube.com/watch?v=czKuoutcwYc&t=334s)

The speakers divide the work into skills for threat modeling, finding vulnerabilities, and critiquing results. A **skill** supplies instructions for a specific task to an existing coding agent. It is more focused than simply telling the agent to act as a security engineer. [05:34–06:52](https://www.youtube.com/watch?v=czKuoutcwYc&t=334s), [18:30–19:50](https://www.youtube.com/watch?v=czKuoutcwYc&t=1110s)

## Bring security into the development steps

Eidelman's workflow starts before code review:

1. **Plan the threats.** Give the agent concrete requirements, such as a public form that accepts unauthenticated input and stores it in a database. Eidelman keeps the resulting threat model in Markdown and updates it when features change. Larger teams also need to track who changed the model and why; Mantis skills can write architecture and threat-model files into the repository too. [09:28–13:47](https://www.youtube.com/watch?v=czKuoutcwYc&t=568s)
2. **Write tests for allowed and denied behavior.** Write tests before implementation, so an initial failure shows that the required behavior is not yet present. Alongside normal login, Eidelman tests whether an ordinary user requesting an admin endpoint receives a denial, such as HTTP 403. The threat model helps identify these security cases, though he notes that not every security scenario is easy to test this way. [13:57–15:52](https://www.youtube.com/watch?v=czKuoutcwYc&t=837s)
3. **Reuse the project's security helpers.** His coding skill directs the agent to existing redirect or input-sanitization methods. Reusing one helper avoids duplicate implementations and lets future fixes happen in one place. Passing tests is not enough if the agent also creates redundant helper libraries that become harder to maintain. [15:52–17:39](https://www.youtube.com/watch?v=czKuoutcwYc&t=952s)
4. **Run checks through a hook.** A hook runs a script when the agent attempts a specified action. Eidelman's example intercepts `git push`, runs static checks, then starts a lighter agent review. This avoids relying only on a skill that the agent might not load or follow. He argues that secret detection should run before commit, so API keys never enter the repository. [19:40–23:07](https://www.youtube.com/watch?v=czKuoutcwYc&t=1180s)

Agents complement existing scanners. Rule-based checks still make sense for known patterns such as exposed API keys; the speakers do not recommend replacing all static analysis and dependency-scanning tools with agents. [29:36–30:36](https://www.youtube.com/watch?v=czKuoutcwYc&t=1776s)

## Match verification to the kind of review

Galloway avoids asking the code-writing agent to review its work in the same context. He gives a separate agent the task of challenging a claim. This encourages critique but does not guarantee a correct result. [17:39–18:25](https://www.youtube.com/watch?v=czKuoutcwYc&t=1059s)

The speakers describe **two different policies for proving that a vulnerability can actually be exploited**:

- **During everyday development,** Eidelman reserves sandbox verification for significant findings the agent cannot fix locally, such as a problem requiring architectural changes. Starting and tearing down an isolated test environment costs time and resources. [22:13–24:25](https://www.youtube.com/watch?v=czKuoutcwYc&t=1333s), [41:56–43:59](https://www.youtube.com/watch?v=czKuoutcwYc&t=2516s)
- **During deeper vulnerability discovery,** Galloway checks exploitability and reproduces the issue before reporting it to the team. That is a stronger evidence requirement than accepting a reviewer's suggested small fix. [39:27–40:26](https://www.youtube.com/watch?v=czKuoutcwYc&t=2367s)

The fast development workflow is not a general claim that vulnerability reports need no verification. The speakers stress that exploit testing belongs in a properly isolated sandbox. [41:56–43:59](https://www.youtube.com/watch?v=czKuoutcwYc&t=2516s)

## Review saved knowledge and instruction updates

Mantis records which investigations were useful and which led to false positives. Reusing those lessons can save work, but a mistaken lesson could cause it to dismiss a real vulnerability later. Galloway mentions "memory decay" as a countermeasure without explaining its implementation, and cannot confirm whether it is included in the published reference implementation built with Google's Agent Development Kit (ADK). [24:25–26:15](https://www.youtube.com/watch?v=czKuoutcwYc&t=1465s)

Eidelman's workflow proposes skill updates after fixes. He reviews those proposals rather than accepting them all: a one-off infrastructure change does not necessarily belong in instructions loaded every time the agent writes code. Keep recurring lessons without filling the agent's context with rarely relevant details. [25:56–28:28](https://www.youtube.com/watch?v=czKuoutcwYc&t=1556s)

## Choose a starting point the team can support

Eidelman argues for involving security engineers during design, with leadership support for the initial friction. Giving developers a scanner and leaving them to interpret noisy results can encourage workarounds. Pull-request scanning remains a practical starting point when changing every developer's local workflow requires more buy-in, although earlier checks shorten the feedback loop. [49:07–53:28](https://www.youtube.com/watch?v=czKuoutcwYc&t=2947s), [53:31–55:08](https://www.youtube.com/watch?v=czKuoutcwYc&t=3211s)

## Resources shared with the session

- [Mantis overview](https://g.dev/ai/mantis-harness)
- [TDD security framework](https://g.dev/ai/secure-tdd-agent-framework)
- [Secure agentic coding codelab](https://g.dev/ai/secure-agentic-coding)
- [CodeMender CLI codelab](https://g.dev/ai/code-mender-cli)

These links come from the video description. Product availability and internal-adoption claims describe the speakers' situation at recording time, not verified current access or measured effectiveness.
