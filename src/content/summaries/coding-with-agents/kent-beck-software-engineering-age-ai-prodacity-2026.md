---
title: "Kent Beck: Software Engineering in the Age of AI"
resourceId: 162
date: "2026-09-29"
---

Kent Beck argues that faster implementation makes it more important to pause between features, check behavior, and preserve the ability to change a system. He calls AI-assisted programming **augmented development** because people still contribute judgment that plausible generated code does not replace. His central distinction is between **features**, what software does now, and **futures**, the options it leaves open for later changes.

This summary is based on the recording's English auto-generated captions, without an original-audio check. Beck's project experiences and critiques are practitioner observations; his recommendations are not controlled productivity or reliability findings.

### Plausible Code Still Needs Engineering Judgment

- **Judge working behavior, not convincing output.** Beck calls the model a “genie”: it grants a request but can deliver something other than what the programmer intended. He urges developers and software purchasers to challenge claims that generated software works rather than infer correctness from syntactically valid code or an impressive demonstration [06:04–10:54](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=364s).
- **Craft changes emphasis; readability still matters.** Beck sees less leverage in manually polishing names, decomposition, and formatting when an assistant can help explain code. But he still prefers systems people can understand, and warns that model explanations can be false. His broader trade-off is economic: an ugly program that provides feedback can be appropriate when delay is costly, while careful construction can repay its cost in long-lived software [13:53–17:38](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=833s).

### Alternate Features with Work That Preserves Future Changes

- **Fast feature delivery can consume the ability to change.** Adding a feature introduces constraints, such as backward compatibility. Beck describes repeatedly restarting his own agent-assisted projects after reaching a point where fixing one bug broke something else. His “features and futures” model explains why visible progress can coexist with a shrinking set of affordable next steps [18:34–22:21](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=1114s).
- **Use the pause between features to restore options.** Before accepting an agent's offer to implement the next feature, refactor, remove duplication, improve readability, or try another implementation. Beck argues that these activities add value even without new user-visible behavior, because they make later changes possible. He recommends alternating feature work and consolidation rather than trying to achieve both at once; the difficulty is that future flexibility is harder to demonstrate than a shipped feature [23:28–28:19](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=1408s), [28:19–29:12](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=1699s).
- **Pace implementation so people can learn from it.** Beck says agents can produce opportunities for feedback faster than teams can gather and analyze that feedback. In his own attempts, fully autonomous development has produced impressive-looking but unreliable results. He favors maximizing learning, even if that means discarding code: he recalls rebuilding an afternoon's work with Ward Cunningham in about 15 minutes the next morning, with a clearer understanding of the solution [30:14–34:02](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=1814s).

### Keep Feedback in the Development Process

- **A larger specification does not remove the need to iterate.** Beck criticizes the one-shot premise that a sufficiently complete specification will yield finished, correct software. Later implementation decisions expose reasons to revise earlier assumptions. He explicitly allows one-shot generation for a small app; his objection concerns complex, evolving systems where users, continuity, and data migrations make repeated wholesale replacement impractical [35:09–37:02](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=2109s), [40:48–43:58](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=2448s).
- **His formal-methods concerns are about change and implementation.** After experimenting with Lean and an assistant, Beck raises two concerns: revising a specification can require reworking proofs, and proving properties of a mathematical model does not, in his account, establish that the eventual implementation matches it. These are his stated difficulties, not a demonstration that all formal verification has those limits. He recommends carefully chosen automated examples and designs that prevent classes of mistakes, while inspecting agent shortcuts such as returning constants merely to satisfy tests [37:02–41:51](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=2222s).

### Measure What the Software Accomplishes

- **Separate effort, output, outcome, and mission.** Beck traces a chain from engineering effort, to a delivered feature, to changes in users' behavior, to progress on a purpose shared by builders and users. Lines of code and pull-request counts do not establish that final contribution. Mission-level results are harder to measure and attribute—and may only become visible during a crisis—but he warns that rewarding easier upstream counts can distort the whole system away from its purpose [43:58–49:36](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=2638s).
- **Leadership makes the shared purpose repeatable.** Beck advises expressing the mission in a way that appeals to both reason and emotion, then repeating it until others adopt it as their own. For him, that adoption matters more than retaining credit for the idea [49:36–51:41](https://www.youtube.com/watch?v=F8fBgDCf2Y4&t=2976s).

[Watch the full talk on YouTube](https://www.youtube.com/watch?v=F8fBgDCf2Y4).
