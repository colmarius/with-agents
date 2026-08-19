---
title: 'What Is AI Slop? When Generated Output Only Looks Finished'
description: 'AI slop is not defined by AI authorship. It is generated output presented as finished before anyone has supplied the intent, judgment, and ownership that completion requires.'
pubDate: 2026-08-19
tags: ['AI Agents', 'Review', 'Engineering Leadership', 'AI Slop']
draft: false
unlisted: false
order: 9
---

## AI slop arrives looking finished

> Slop hides an unfinished responsibility loop behind the appearance of completed work.

[Armin Ronacher describes](https://lucumr.pocoo.org/2026/5/24/pi-oss/) a recurring failure in Pi's issue tracker. A user has one useful observation, but asks an AI to improve the report. The result adds confident root-cause guesses, fake-minimal reproductions, speculative implementation advice, and broad lists of possible errors. Maintainers now have to recover the original fact from polished fiction. Worse, their coding agents may treat that fiction as evidence and investigate the wrong path.

Ronacher asks for less: the command, expected behavior, actual behavior, and exact error. Analysis can follow, but the issue text should be something the reporter owns. That example exposes the problem more precisely than a list of AI writing tics.

**The definition I use here is a synthesis:** AI slop is AI-amplified output presented as more complete than the intent, risk-appropriate judgment, and accountable ownership behind it warrant, so unresolved work moves downstream as if it had already been done.

The definition is not “AI made it.” [Simon Willison's useful baseline](https://simonwillison.net/2024/May/8/slop/) is unwanted, unreviewed AI-generated content “mindlessly generated and thrust upon someone who didn't ask for it.” He explicitly distinguishes slop from AI-generated work in general.

## Form can now outrun intent

> Generative AI can produce the shape of finished work before anyone has decided what the work is for.

[Caleb Gross separates](https://noperator.dev/posts/you-can-just-say-it/) a creative artifact into intent and material form. Creation normally forces a person to shape form toward a mental target. Generative AI can instead produce “substantial form with minimally applied intent,” even when the person asking has an unclear model of the outcome.

Humans can produce the same failure; AI lowers the entry barrier.

That is why slop can look competent. The issue has headings. The proposal has trade-offs. The code compiles. None of those properties establishes that someone chose the audience, constraints, readiness level, or acceptance bar. The form signals completion before the underlying decisions exist.

Intent alone does not guarantee quality. A clear goal can still produce bad work. But without discernible intent, a recipient cannot tell what the artifact should accomplish; without judgment and evidence, they cannot tell whether it did. False completion begins when polished form claims that those questions are settled.

## False completion sends the missing work downstream

> The recipient pays for the thinking, checking, and narrowing that the sender skipped.

[Charity Majors offers a sharp warning](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s) for communication: do not send people material you have not read, especially when it will take them longer to read than it took you to make. The sender saves attention by spending the recipient's. She also distinguishes using AI to think more deeply from using it to bypass thought, and recognizes assistive uses such as language support.

The clock comparison is a warning light, not a universal formula. Expertise and good tools can produce valuable work quickly, and difficult work may be faster to create than to verify. The stronger question is where the required attention went. Did the sender invest enough judgment and evidence for the readiness they claim, or did they quietly assign comprehension, fact-checking, integration, and cleanup to someone else?

Ordinary collaboration transfers work too. A requested draft, a disposable prototype, or a partial implementation is not slop merely because another person must continue it. An explicit handoff says what is unresolved, bounds the work, and gains agreement. Slop conceals that same burden behind a finished surface.

## Ownership is not authorship

> You do not need to type every line, but someone must understand, verify, and stand behind the result.

The assurance method depends on the medium and the risk. For an email or issue report, reading every word is a reasonable baseline. [In the same interview](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=681s), the exchange asks a different question about generated software: what evidence and repeated comparison would make unread code safe to ship? Removing line review removes one source of trust; it does not remove the obligation to rebuild trust elsewhere.

Salvatore Sanfilippo supplies the affirmative counterexample. [In an Italian commentary](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s), he endorses Gross's intent-and-form account and applies it to generated software. That English description is editorial paraphrase, not a quotation. In his English essay [“Control the ideas, not the code”](https://antirez.com/news/169), he describes DwarfStar as extensively automated implementation guided by domain understanding, design choices, performance goals, correctness comparisons, QA, and tests.

His argument is not “ask for a product and walk away.” It is that exhaustive line reading can consume attention better spent controlling architecture, product direction, system understanding, testing, and behavior. Maintained software can therefore be AI-authored without being unowned. For this article, ownership means being able to explain the relevant system model, defend consequential choices, show risk-appropriate evidence, reject or repair a bad result, and remain accountable for what happens next.

## Software hides the bill until later

> A plausible local result can leave global intent, invariants, and maintenance as future work.

Ronacher's issue report creates immediate review cost, but software often delays the charge. An agent can turn a narrow failure into fallbacks, migrations, debug paths, and permissive handling that each look reasonable. The maintainer still has to recover the global invariant: perhaps malformed state should never have been written at all.

That is false completion at codebase scale. A large diff may pass its available tests while leaving product intent, system boundaries, diagnosis, and maintainability unresolved. The output is not slop because it is large or generated. It becomes slop when it is presented as merge-ready without anyone owning those missing decisions and checks.

[Your Repo Is the Memory](/posts/durable-context-coding-agents) shows where to preserve intent and constraints before generation. [Make the Agent Prove It](/posts/make-the-agent-prove-it) provides the risk-scaled evidence contract. This article owns the diagnosis: apparent completion is the trigger, inadequate responsibility is the failure, and hidden downstream work is the consequence.

## Ask four questions before you pass it on

> Ask what the artifact claims, who judged it, who owns it, and where the unfinished work went.

1. **Intent:** What outcome, audience, constraints, and readiness level are being claimed?
2. **Judgment:** Which consequential choices and acceptance bar were set, and what medium- and risk-appropriate evidence supports acceptance?
3. **Ownership:** Who can explain the relevant model, reject or remediate the result, and remain accountable for its consequences?
4. **Burden:** What remains unresolved, and is that transfer explicit, bounded, and agreed—or concealed by polished form?

Do not turn the questions into a slop score. One weak answer does not condemn every rough draft. A strong diagnosis needs all three parts: a false readiness signal, a material deficit in intent, judgment, or ownership, and hidden downstream work. Burden reveals the consequence; it is not an independent verdict.

Do not ask only whether AI made it. Ask who meant it, who checked it, who owns it, and who now has to do the work.

## Sources used

The composite false-completion and responsibility-loop definition is author synthesis. The sources below support its named components.

- Armin Ronacher, [“Building Pi With Pi”](https://lucumr.pocoo.org/2026/5/24/pi-oss/) — the generated issue-report failure, its effect on maintainer and agent diagnosis, and the concise report he asks users to own.
- Caleb Gross, [“You can just say it”](https://noperator.dev/posts/you-can-just-say-it/) — intent, material form, and the “substantial form” mechanism.
- Simon Willison, [“Slop is the new name for unwanted AI-generated content”](https://simonwillison.net/2024/May/8/slop/) — the boundary between AI generation in general and unwanted, unreviewed output imposed on others.
- Charity Majors, [“Stop being skeptical about AI for development”](https://www.youtube.com/watch?v=HC8T1OlgYi0), especially [00:11:21–00:13:25](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=681s) and [00:34:55–00:37:54](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s) — risk-appropriate assurance for unread code and the recipient-attention warning.
- Salvatore Sanfilippo, [“The Best Definition of AI Slop Ever Given”](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s), especially [00:08:02–00:12:16](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s), and [“Control the ideas, not the code”](https://antirez.com/news/169) — the Italian commentary applies Gross's account to software; the English essay supplies the DwarfStar counterexample and ownership model.
