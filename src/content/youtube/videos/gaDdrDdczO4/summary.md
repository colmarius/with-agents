---
title: "New Skills! v1.2 brings /wait-what, /writing-for-agents, and fixes /grill-me"
videoId: gaDdrDdczO4
sourceUrl: "https://www.youtube.com/watch?v=gaDdrDdczO4"
publishedAt: "2026-08-05T15:28:41Z"
sourceLanguage: en
summaryLanguage: en
captionKind: auto-generated
status: reviewed
---

Matt Pocock presents version 1.2.0 of his engineering-skills repository. He reports changes to its documentation and installation metadata, explains revisions to existing skills, and demonstrates or describes three additions: Wait What, Wizard, and To Questionnaire.

The video is a release walkthrough rather than an evaluation. Its behavioral claims mostly describe intended use or Pocock's experience; only selected interfaces and example outputs are shown.

## Key Ideas

- Pocock introduces a documentation site that groups skills into a suggested workflow, provides a reference for each skill, answers common questions, and links terms to his AI-coding dictionary. [00:00:00]-[00:01:03]
- He reports that the skills can be installed from Claude Code's official plugin marketplace as a read-only bundle with automatic updates. He also says each skill now ships an `openai.yaml` sidecar so Codex can preserve settings such as disabling implicit invocation. These integrations are described on screen but not tested end to end. [00:01:03]-[00:02:55]
- Wait What is intended to restate hard-to-follow agent output in simplified technical English while grounding its vocabulary in the project's `context.md`. Pocock states that it should produce a clearer alternative, but the transcript does not record a before-and-after run. [00:02:55]-[00:03:58]
- Grill Me now asks dependency-aware rounds of questions rather than always asking one question per turn. Pocock explains the questions as a graph whose currently answerable frontier can be handled together, then shows an example with numbered questions and recommended answers across rounds. [00:03:58]-[00:06:44]
- Writing for Agents broadens the former Writing Great Skills skill to cover agent-facing files such as `agents.md` and `claude.md`. Pocock says it can make those files more concise, extract front-loaded instructions into skills, and be invoked by the model when relevant; those outcomes are reported rather than compared in the video. [00:06:44]-[00:07:33]
- Wizard generates an interactive Bash script for human-only setup steps. In the shown example, the script opens relevant pages, prompts the user through configuration, and stores supplied values; Pocock emphasizes that the deterministic script, rather than an agent, handles entered credentials. [00:07:33]-[00:08:37]
- To Questionnaire exports unresolved decisions from an agent grilling session into a document for collaborators, then allows their answers to be brought back to the agent. Pocock presents this as a temporary workaround for teams that cannot collaborate with an agent directly in shared chat. [00:08:37]-[00:10:41]

## Practical Implications

- Use dependency-aware question rounds to batch independent decisions while keeping prerequisite decisions separate. [00:03:58]-[00:06:44]
- Keep agent-facing instructions concise and move specialized guidance into skills when a large always-loaded configuration would consume unnecessary context. [00:06:44]-[00:07:33]
- For sensitive infrastructure setup, a reviewable deterministic wizard can leave consequential actions and credential entry under human control rather than delegating browser operation to an agent. [00:07:33]-[00:08:37]
- Export questions to an ordinary collaborative document when stakeholders do not share the agent interface, then explicitly import the agreed answers back into the working context. [00:08:37]-[00:10:41]

## Questions and Tensions

- The walkthrough does not independently verify marketplace updates, Codex invocation behavior, or portability across harness versions. [00:01:03]-[00:02:55]
- Wait What's clarity improvement and Writing for Agents' performance benefits are asserted without comparative outputs or measurements. [00:02:55]-[00:03:58] [00:06:44]-[00:07:33]
- A deterministic wizard avoids sending entered values to a model, according to Pocock, but the video does not examine generated-script review, shell safety, local secret handling, permissions, or failure recovery. [00:07:33]-[00:08:37]
- To Questionnaire improves compatibility with conventional collaboration tools, but moving decisions through documents introduces synchronization and interpretation risks that the walkthrough does not address. [00:08:37]-[00:10:41]

## Source

- https://www.youtube.com/watch?v=gaDdrDdczO4
- [transcript.md](./transcript.md)
