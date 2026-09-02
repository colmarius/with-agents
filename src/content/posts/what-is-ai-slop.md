---
title: 'What Is AI Slop? When Generated Output Only Looks Finished'
description: 'AI slop looks finished even though something important is missing: a clear purpose, evidence that it works, or someone who owns the result.'
context: coding
pubDate: 2026-08-19
updatedDate: 2026-09-02
tags: ['AI Agents', 'Review', 'Engineering Leadership', 'AI Slop']
draft: false
unlisted: false
order: 9
---

## AI slop arrives looking finished

> Polish is not proof that the work is finished.

[Armin Ronacher describes](https://lucumr.pocoo.org/2026/5/24/pi-oss/) a recurring failure in Pi's issue tracker. A user has one useful observation, then asks AI to improve the report. AI adds confident root-cause guesses, fake-minimal reproductions, implementation advice, and long lists of possible errors. Maintainers must recover the original fact from polished fiction. Their coding agents may even treat that fiction as evidence and investigate the wrong path.

Ronacher asks for less: what you ran, what you expected, what happened, and the exact error. Analysis can follow, but the issue itself should contain facts the reporter owns.

I use this working definition, based on the sources below.

**AI slop looks finished even though something important is missing: a clear purpose, evidence that it works, or someone who owns the result. The unfinished work is left to the next person.**

This is false completion: the output looks done, but the work needed to trust it is not.

The definition is not “AI made it.” [Simon Willison calls](https://simonwillison.net/2024/May/8/slop/) slop unwanted, unreviewed AI content. In his words, it is “mindlessly generated and thrust upon someone who didn't ask for it.” Not all AI-generated work is slop.

## AI can produce finished-looking work without a clear purpose

> Generative AI can produce the shape of finished work before anyone has decided what the work is for.

[Caleb Gross separates](https://noperator.dev/posts/you-can-just-say-it/) a creative work into intent—what it is for—and material form—the thing produced. Creating by hand normally forces you to shape form toward a goal. AI can instead produce “substantial form with minimally applied intent,” even when the goal remains vague.

Humans can produce the same failure; AI lowers the entry barrier.

That is why slop can look competent. The issue has headings. The proposal has trade-offs. The code compiles. But those signals do not say who the work is for, what constraints matter, or whether it is ready.

A clear purpose does not guarantee good work. Without one, though, the recipient cannot know what the work should do, and without evidence they cannot know whether it succeeded.

## The missing work moves to the recipient

> Slop saves the sender time by making the recipient do the missing work.

[Charity Majors offers a simple rule](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s) for communication: do not send people material you have not read. She adds that it is probably slop when the recipient will spend longer reading it than you spent making it. The sender saves attention by spending the recipient's.

Her rule of thumb is useful, but time alone does not decide it. Expert work can be quick to produce and slow to verify. Ask instead: did the sender provide enough evidence for what they claim, or leave the reading, fact-checking, and cleanup to someone else?

Collaboration always transfers work. A requested draft, disposable prototype, or partial implementation is not slop just because someone else must continue it. A good handoff says what is unfinished and confirms that the next person agrees. Slop hides that work behind a finished surface.

## Using AI does not remove ownership

> AI can write the words or code; a person still has to own the result.

The evidence needed depends on the medium and the risk. Reading every word is a reasonable baseline for an email or issue report. For software, [the same interview asks](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=681s) what evidence would make unread generated code safe to ship. Tests, comparisons, and trusted review can replace some line-by-line reading. They do not remove the need to prove the result.

Salvatore Sanfilippo gives a positive example. [In an Italian commentary](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s), he endorses Gross's account and applies it to generated software. My English description of the video is a paraphrase, not a quotation. In [“Control the ideas, not the code”](https://antirez.com/news/169), he describes automating two DwarfStar inference implementations while he supplied domain knowledge, design, performance goals, correctness checks, QA, and tests.

His point is not “ask for a product and walk away.” Expert attention may be better spent on architecture, product direction, and behavior than on every line. AI can author software without owning it.

Owning the result means you can explain how it works and defend the important choices. You can show enough evidence for the risk, fix failures, and accept responsibility for what happens next.

## In software, the cost appears later

> A local fix can look done while the real system problem remains.

Ronacher's issue report creates an immediate review cost. Code can send the bill later. An agent might see a malformed session file and add a tolerant reader, fallback, migration, and debug path. Each change looks reasonable. But the real fix may be to stop the system from writing bad session files in the first place.

The local patch looks done, but the root problem remains. A large diff may pass its tests while leaving product decisions and maintenance unresolved. It is not slop because it is large or generated. It becomes slop when it is presented as merge-ready while decisions remain unowned and evidence is missing.

[Your Repo Is the Memory](/coding/posts/durable-context-coding-agents) shows how to preserve purpose and constraints before generation. [Make the Agent Prove It](/coding/posts/make-the-agent-prove-it) shows how to choose evidence.

## Four questions before you pass it on

> Ask about purpose, evidence, ownership, and hidden work.

| Question | Ask |
| --- | --- |
| **Purpose** | Who is this for, what should it do, and how finished should it be? |
| **Evidence** | What shows that this works, and is that enough for the risk? |
| **Ownership** | Who understands it, can fix it, and owns what happens next? |
| **Hidden work** | What remains, and did the next person agree to take it? |

Do not turn the questions into a score. A rough draft is not slop just because one answer is weak. The warning sign is the combination: it looks ready, no one has supplied enough purpose, evidence, or ownership, and the unfinished work is hidden.

Whether AI made it is the wrong question. Ask what it is for, what evidence supports it, who owns it, and what work is still hidden.

## Sources used

The definition in this article is my synthesis. The sources below support its parts.

- Armin Ronacher, [“Building Pi With Pi”](https://lucumr.pocoo.org/2026/5/24/pi-oss/) — the generated issue-report failure, its effect on maintainer and agent diagnosis, and the concise report he asks users to own.
- Caleb Gross, [“You can just say it”](https://noperator.dev/posts/you-can-just-say-it/) — intent, material form, and the “substantial form” mechanism.
- Simon Willison, [“Slop is the new name for unwanted AI-generated content”](https://simonwillison.net/2024/May/8/slop/) — the boundary between AI generation in general and unwanted, unreviewed output imposed on others.
- Charity Majors, [“Stop being skeptical about AI for development”](https://www.youtube.com/watch?v=HC8T1OlgYi0) — [00:11:21–00:13:25](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=681s) asks what would make unread code safe; [00:34:55–00:37:54](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s) gives the recipient-time rule.
- Salvatore Sanfilippo, [“The Best Definition of AI Slop Ever Given”](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s), especially [00:08:02–00:12:16](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s), applies Gross's account to software. [“Control the ideas, not the code”](https://antirez.com/news/169) supplies the DwarfStar example and ownership model.
