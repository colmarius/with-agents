---
title: "Agents, codebases, and teams — Aditya Khandelwal, Amazon AGI Lab"
videoId: aeTb5BdmTTc
sourceUrl: "https://www.youtube.com/watch?v=aeTb5BdmTTc"
publishedAt: "2026-08-11T00:03:17Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Aditya Khandelwal of Amazon AGI Lab argues that effective coding-agent adoption
is a team and leadership problem, not a collection of individual prompt setups.
Drawing on his experience leading a team of about ten people, he proposes a
shared, continuously maintained repository harness and an adoption process that
treats skepticism, confidence, review capacity, and incidents as system inputs.

Editorial: The talk is a first-person team-practice account. Its adoption arc,
productivity comparisons, and relationship between longer agent runs and better
output are not supported by comparative measurements in the presentation.

## Key Ideas

- Khandelwal says individually effective agent setups can break at team scale, where mandates, uneven adoption, low-quality output, incidents, token costs, and review burden affect people differently. [00:00:01]-[00:03:39]
- He treats babysitting, unexplained context growth, repeated intervention, and low-quality output as signals that the repository harness—not just the current model—needs attention. [00:03:39]-[00:05:30]
- Agent adoption should be owned by leadership because high-impact repository organization and shared practices require team buy-in, while uneven output can leave slower adopters carrying disproportionate review work. [00:05:30]-[00:06:33]
- His harness principles are progressive disclosure of relevant context, feedback loops that detect and repair low-quality changes, continuous iteration, and explicit treatment of adoption as a human problem. [00:06:33]-[00:09:14]
- His team's playbook consolidated effective individual practices into shared guidance, invested in one high-value skill that moved completed code toward a review-ready pull request, and wired issue tracking, CI, automated review, and periodic code maintenance into the loop. [00:09:14]-[00:10:48]
- Khandelwal recommends winning over skeptics by letting them change the shared setup and budgeting ongoing engineering time for that setup rather than treating it as a one-time configuration. [00:10:48]-[00:11:42]
- He reports failure modes including issue floods, disagreement, long-running agents, merge conflicts, and prototype slop, and recommends feeding those failures back into shared skills while applying lighter controls to explicitly disposable experiments. [00:11:42]-[00:13:31]
- For progressive disclosure, he recommends short skill entrypoints and thin repository indexes that point agents toward deeper runbooks or documentation only when relevant, then checking early-session behavior and context consumption. [00:14:25]-[00:16:15]

## Practical Implications

- Assign ownership and recurring capacity for the shared repository harness; do not leave every engineer to independently rediscover prompts, skills, and context structure.
- Use review load, incidents, intervention frequency, context growth, merge conflicts, and low-quality output as feedback on the whole workflow rather than as model complaints alone.
- Promote proven individual practices into editable shared guidance, and start adoption with one end-to-end workflow whose value skeptical teammates can inspect.
- Make entrypoint guidance a map rather than a manual, connect code to deeper runbooks at the point of relevance, and observe whether agents discover the intended context without loading everything.
- Separate disposable experiments from production paths so prototype work does not silently inherit—or bypass—the wrong assurance controls.

## Questions and Tensions

- Editorial: Moving adoption to leadership can fund shared infrastructure, but mandates can reproduce the failure pattern Khandelwal criticizes unless participation and dissent remain real.
- Editorial: A self-healing loop that uses agents to review agent output can scale maintenance while preserving correlated model blind spots; the talk does not quantify defect detection or false positives.
- Editorial: Long unattended runs may reduce babysitting, but duration alone does not establish correctness, efficiency, or trustworthiness.
- Editorial: A shared setup improves consistency but can suppress useful local experimentation unless teams preserve a path for testing and promoting alternatives.

## Source

- [YouTube video](https://www.youtube.com/watch?v=aeTb5BdmTTc)
- [transcript.md](./transcript.md)
