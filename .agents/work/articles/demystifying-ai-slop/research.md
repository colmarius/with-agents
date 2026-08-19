# Research: What Is AI Slop?

**Date:** 2026-08-19
**Status:** complete
**Question:** What source-backed definition and article concept can explain AI
slop to experienced developers without reducing it to AI provenance, stylistic
tells, or a general argument against coding agents?

## Recommendation

Build the article around this definition:

> **AI slop is AI-amplified output presented as more complete than the intent,
> risk-appropriate judgment, and accountable ownership behind it warrant, so
> unresolved work is transferred downstream as if it had already been done.**

This combines Caleb Gross's intent/form distinction with Charity Majors's
recipient-cost test and the software-maintenance consequences described by
Armin Ronacher, Mario Zechner, and Dex Horthy. Salvatore Sanfilippo supplies the
essential counterweight: extensively AI-generated software need not be slop
when a person still owns the ideas, system model, quality bar, and behavioral
evidence. The article should therefore diagnose **false completion in a broken
responsibility loop**, not an AI writing style. Apparent completion is the
trigger, inadequate responsibility is the failure, and downstream burden is the
consequence.

## Proposed Article Concept

### Recommended title

**What Is AI Slop? When Generated Output Only Looks Finished**

Sharper alternate: **What Is AI Slop? Form Without Intent, Work Without
Ownership**

Working description:

> AI slop is not a writing style or proof that AI was used. It is generated
> output presented as finished before anyone has supplied the intent, judgment,
> or ownership that the claim of completion requires.

### Reader promise

Give experienced developers and technical leads a definition they can use in
review and communication. By the end, a reader should be able to distinguish:

- AI-assisted work from AI slop;
- a deliberately rough, clearly labeled prototype from an unowned deliverable;
- an explicit, agreed handoff from hidden work disguised as completion;
- poor work from work that transfers its unperformed thinking downstream;
- authorship from ownership; and
- exhaustive line reading from the broader obligation to understand, verify,
  and stand behind a result.

### Scope

Open with Ronacher's generated issue-report example because it makes distorted
intent, false completion, recipient cost, and software consequences visible in
one case. Center the article on coding agents, issue reports, pull requests, and
maintained software. Briefly acknowledge image/video slop and human-made slop,
but do not turn the piece into a cultural history or a catalog of model writing
tics.

The article should complement rather than repeat the existing series:

- [Your Repo Is the Memory](../../../../src/content/posts/durable-context-coding-agents.md)
  owns durable intent and alignment.
- [Make the Agent Prove It](../../../../src/content/posts/make-the-agent-prove-it.md)
  owns risk-scaled acceptance evidence.
- [Measure Outcomes, Not Agent Activity](../../../../src/content/posts/measure-outcomes-not-agent-activity.md)
  owns delivery, rework, review, and capability measurement.
- [Behavior Over Explanation](../../../../src/content/posts/behavior-over-explanation.md)
  owns the fuller Sanfilippo synthesis about behavioral evidence.

This piece should own the concept that connects them: what makes generated
output become slop in the first place.

## Core Synthesis

### 1. Provenance is not the definition

Simon Willison's 2024 baseline is deliberately narrower than “AI made it.” He
calls slop unwanted, unreviewed AI-generated content and says that not all
AI-generated content is slop. The anti-pattern is content “mindlessly generated
and thrust upon someone who didn't ask for it.” This establishes distribution,
review, and responsibility—not punctuation or visual style—as the useful
boundary.

Thorsten Ball makes the same point from the positive side. He describes Amp's
visible code as overwhelmingly AI-written while people still choose the product,
interaction, copy, visual variants, and quality bar. In his framing, slop comes
from weak ideas and weak product judgment; AI makes those ideas faster to
materialize, but does not make provenance dispositive ([00:08:24–00:11:19](https://www.youtube.com/watch?v=FU5_kpTAVDo&t=504s)).

**Article consequence:** Do not teach readers to detect slop from em dashes,
generic prose, code volume, or an AI disclosure. Ask what readiness the artifact
claims and whether a person supplied the intent, assurance, and ownership that
claim requires. Generic sameness can be a symptom, but Thais Castello Branco's
work on contextual preference is a useful warning against inventing one
universal taste score ([00:04:27–00:15:28](https://www.youtube.com/watch?v=lCBf9slCanI&t=267s)).

### 2. The mechanism is form outrunning intent

Caleb Gross separates a creative artifact into intent and material form. Human
creation usually requires repeatedly shaping form toward a mental target.
Generative AI can instead produce “substantial form with minimally applied
intent,” even when the person has an unclear model of what they want. His
proposed interpretation is that AI slop is form whose intent is difficult to
identify. Humans can produce the same failure; AI lowers the barrier and removes
the effort that used to expose or kill weakly intended work.

Sanfilippo explicitly endorsed Gross's essay as the best account of AI slop he
had read and published a video reading and commenting on it. In the captured
Italian source, he applies the argument directly to software: a sentence can
produce tens or hundreds of thousands of lines that may work technically but
that nobody needed or clearly intended. At [00:09:09](https://www.youtube.com/watch?v=atFlNxxS5f4&t=549s),
he emphasizes that slop is not AI output in general; it is the inability to
identify the intent behind the form. At [00:11:19–00:12:16](https://www.youtube.com/watch?v=atFlNxxS5f4&t=679s),
he adds that manual effort historically forced creators to reconsider work that
had no purpose, while generation removes that friction. The saved [Italian
transcript](../../../../src/content/transcripts/coding-with-agents/the-best-definition-of-ai-slop-ever-given.md)
is source capture, not an English quotation or published summary.

**Article consequence:** The memorable center of the article should be that AI
can now produce the appearance of completed work before anyone has done the work
of deciding what the artifact is for.

### 3. False completion externalizes the missing work

Charity Majors gives the clearest social heuristic: do not send someone material
you have not read, especially when it will take them longer to read than it took
you to make. She describes that as disrespectful because the sender uses AI to
move the cost of attention from themselves to the recipient
([00:34:55–00:37:54](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s)).
Her important qualification is that AI can help a person think more deeply or
help them bypass thinking; core work should favor the former, and assistive use
for language or accessibility can still respect the recipient.

The raw time comparison is a warning light, not a universal formula. Expert
work can be quick to produce and slow to assess, and generated output may be
responsibly validated without being typed or read line by line. The stronger
question is: **how much human attention and evidence did the sender invest
before transferring the result, and who now has to perform the work they
skipped?**

Ordinary collaboration also transfers work. A draft, prototype, investigation,
or partial implementation is not slop merely because another person must finish
it. The differentiator is whether the unresolved work is explicit, bounded, and
agreed—or concealed by polished form that signals a level of readiness nobody
established.

**Article consequence:** Describe hidden cost transfer as the consequence, not
the complete definition. Generation makes the sender's marginal cost tiny while
leaving comprehension, fact checking, integration, maintenance, and cleanup
expensive; false completion misrepresents where that work still lives.

### 4. Ownership is medium- and risk-specific

Majors's communication norm and Sanfilippo's coding workflow are not actually in
conflict. For an email or issue report, reading every word is a reasonable
assurance baseline. Earlier in the same interview, however, Majors asks what
evidence would make shipping unread generated code safe rather than declaring it
categorically unacceptable
([00:11:21–00:13:25](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=681s)).

For generated software, Sanfilippo argues that exhaustive line review can
consume the attention better spent controlling architecture, product direction,
performance, QA, and tests. His direct essay says that slop predated AI and
presents DwarfStar as a case where automated implementation was guided by domain
understanding, design choices, performance targets, and correctness comparisons.
His recommendation is to control the ideas, preserve a mental model, and invest
in quality and testing—not to ask for a final product and walk away.

His current reviewed material adds four practical boundaries:

- clear communication of intent depends on domain understanding
  ([AI FOMO, Part 1](../../../../src/content/summaries/coding-with-agents/ai-fomo-part-1-what-actually-compounds.md));
- many parallel sessions can dilute the attention needed to notice and steer
  important details
  ([AI FOMO, Part 2](../../../../src/content/summaries/coding-with-agents/ai-fomo-part-2-attention-wealth-and-professional-relevance.md));
- generated implementation still needs a strong system model, testability, and
  extra scrutiny for hard-to-reverse decisions
  ([The Qualities of Tomorrow's Programmers](../../../../src/content/summaries/coding-with-agents/qualities-of-tomorrows-programmers-salvatore-sanfilippo.md)); and
- implementation becoming cheaper raises the relative value of product intent,
  design, architecture, experiments, and judgment
  ([Is Code Only a Detail?](../../../../src/content/summaries/coding-with-agents/code-is-only-a-detail-in-software-history-salvatore-sanfilippo.md)).

**Article consequence:** Define ownership by the ability to explain the relevant
system model, defend consequential design choices, show risk-appropriate
evidence, reject or remediate a bad result, and remain accountable for its
consequences. Authorship and exhaustive inspection are possible assurance
methods, not universal requirements.

### 5. Software makes the delayed bill visible

Ronacher's Pi issue-tracker account shows the communication failure becoming an
engineering failure. A narrow observation is expanded into confident root-cause
guesses, fake minimal reproductions, speculative strategies, and broad error
lists. Maintainers and their agents then treat polished speculation as evidence.
His requested replacement is a concise record of command, expectation, actual
behavior, and exact error. Analysis can follow, but the issue text should be
“something you own.”

Zechner describes the corresponding code failure: agents fill underspecified
work with locally plausible defaults, compound errors without learning delayed
maintenance pain, and can generate faster than humans can review
([00:12:26–00:17:41](https://www.youtube.com/watch?v=RjfbvDXpFls&t=746s)).
Horthy reports the organizational version: a lights-off workflow left humans
recovering context from accumulated low-quality code after agents could not
resolve a bug; passing tests had not measured maintainability
([00:07:58–00:10:56](https://www.youtube.com/watch?v=xgkjtF89-44&t=478s)).

**Article consequence:** In software, slop is not merely ugly code. It is output
that appears complete while leaving product intent, global invariants,
maintainability, and diagnosis as unowned future work.

## A Practical Four-Question Test

Offer questions, not a pseudo-quantitative slop score. Apparent completeness is
the trigger; intent, judgment, and ownership determine whether the readiness
claim is warranted; burden reveals the downstream consequence.

1. **Intent:** What outcome, audience, constraints, and readiness level are
   being claimed?
2. **Judgment:** Which consequential choices and acceptance bar were set, and
   what medium- and risk-appropriate evidence supports acceptance?
3. **Ownership:** Who can explain the relevant system model, reject or remediate
   the result, and remain accountable for its consequences?
4. **Burden:** What unresolved work is being transferred, and is that transfer
   explicit, bounded, and agreed—or concealed by polished form?

Do not tally weak answers. A strong diagnosis needs a false readiness signal, a
material responsibility deficit, and hidden downstream work. One weak answer
does not make every rough draft slop.

| Artifact | Likely not slop | Likely slop |
| --- | --- | --- |
| Email | The sender knows the point, reviews the text, and makes the recipient's job easier. | A vague prompt becomes a long message the sender did not read and the recipient must decode. |
| Issue | The reporter owns the observation, expected behavior, actual behavior, and evidence, while labeling uncertainty. | Generated diagnosis and invented scope obscure the one fact the reporter observed. |
| Prototype | The builder states that it is disposable, bounds the audience, and uses it to test a real question. | The prototype is presented as a maintained product despite no owner, user need, or acceptance bar. |
| Code change | A person owns the behavior and architecture, and fitting tests or QA support acceptance. | A large plausible diff is presented as merge-ready while leaving intent, review, system understanding, and maintenance downstream. |

## Suggested Outline

1. **AI slop arrives looking finished**
   Open with Ronacher's generated issue: one observed fact is buried under a
   confident diagnosis, invented scope, and plausible implementation advice.
2. **Form can now arrive before intent**
   Introduce Gross's intent/form distinction and Sanfilippo's endorsement.
3. **False completion makes the recipient do the missing work**
   Use Majors's attention and respect heuristic, then refine it beyond raw clock
   time and distinguish hidden burden from an explicit handoff.
4. **Ownership depends on the medium and risk**
   Use Majors's own unread-code qualification before Sanfilippo's affirmative
   case for design control, mental models, QA, and tests without exhaustive line
   reading.
5. **Software hides the bill until later**
   Move through Ronacher's issues, Zechner's local patches and volume, and
   Horthy's maintainability account.
6. **Ask four questions before you pass it on**
   End with intent, judgment, ownership, and burden.

Possible closing line:

> Do not ask only whether AI made it. Ask who meant it, who checked it, who owns
> it, and who now has to do the work.

## Counterarguments and Tensions to Preserve

- **Humans make slop too.** AI changes cost and volume, not the existence of
  careless, derivative, or unwanted work.
- **Clear intent does not guarantee quality.** Intent is necessary to interpret
  a result, while evidence and judgment establish whether it succeeds.
- **A slow artifact is not automatically good.** Manual effort can still produce
  bad or unwanted work; friction is a filter, not proof of value.
- **A fast artifact is not automatically disrespectful.** Expertise and good
  tooling can produce concise, useful work quickly. The key is whether the
  missing effort was externalized.
- **Rough drafts can be useful.** Requested, private, labeled, disposable output
  may be exactly the point. Slop becomes a social or engineering problem when it
  is passed on as if the unperformed thinking were complete.
- **Legitimate handoffs transfer work too.** A handoff becomes slop-like when
  unresolved work is hidden, unbounded, or unagreed and polished output claims a
  readiness level the producer did not establish.
- **Line reading is domain-specific.** Majors's “read what you send” norm maps
  directly to prose. Maintained software may establish ownership through design
  understanding, tests, QA, targeted inspection, and operational evidence, with
  deeper review where consequences demand it.
- **George Hotz's stronger critique is useful but not the article's conclusion.**
  He argues that polished AI artifacts can be broken in ways old surface proxies
  cannot reveal and that process matters when extending them. That warning fits
  the thesis; his broader categorical claim that current agents cannot program
  conflicts with substantial practitioner counterexamples and is not needed to
  define slop.

## Evidence

The load-bearing source cast should stay small: Gross for the mechanism,
Willison for the provenance boundary, Majors for handoff cost and
risk-appropriate assurance, Ronacher for the concrete failure, and Sanfilippo
for the affirmative counterexample. Zechner and Horthy support the delayed
software consequences. Ball, Castello Branco, and Hotz are optional source
notes rather than separate article sections.

### Current repository material

- [Your Repo Is the Memory](../../../../src/content/posts/durable-context-coding-agents.md)
  already applies Gross's “substantial form without discernible intent” to coding
  agents and alignment debt.
- [Make the Agent Prove It](../../../../src/content/posts/make-the-agent-prove-it.md)
  supplies Majors's trust-account framing, Sanfilippo's green-test counterexample,
  and Castello Branco's mixed proof contract.
- [Measure Outcomes, Not Agent Activity](../../../../src/content/posts/measure-outcomes-not-agent-activity.md)
  distinguishes generated activity from net delivery, review cost, rework, and
  retained understanding.
- [Building Pi in a World of Slop](../../../../src/content/summaries/coding-with-agents/building-pi-in-a-world-of-slop-mario-zechner.md)
  covers issue spam, compounded local errors, delayed pain, and risk-based
  delegation.
- [Stop Being Skeptical About AI for Development](../../../../src/content/summaries/coding-with-agents/stop-being-skeptical-about-ai-for-development-with-charity-majors.md)
  records the sender/recipient attention asymmetry and the distinction between
  bypassing thought and deepening it.
- The tracked Salvatore Sanfilippo **Coding with AI** playlist was checked
  read-only on 2026-08-19 and had no remote changes or pending transcripts. Its
  32-entry manifest has 26 captured sources and six recorded caption failures.
  The directly relevant slop video was outside the tracked playlist and was
  captured separately in Italian for this research.

### Primary external sources

- [Simon Willison, “Slop is the new name for unwanted AI-generated content”](https://simonwillison.net/2024/May/8/slop/)
  — operational baseline: unrequested, unreviewed, mindlessly generated content;
  explicitly not all AI-generated content.
- [Caleb Gross, “You can just say it”](https://noperator.dev/posts/you-can-just-say-it/)
  — conceptual source for intent, material form, and substantial form with
  minimally applied or indiscernible intent.
- [Charity Majors, “Stop Being Skeptical About AI for Development”](https://www.youtube.com/watch?v=HC8T1OlgYi0&t=2095s)
  — source for not sending unread output and for the recipient-cost heuristic.
- [Salvatore Sanfilippo, “The Best Definition of AI Slop Ever Given”](https://www.youtube.com/watch?v=atFlNxxS5f4&t=482s)
  — Italian commentary endorsing and applying Gross's definition to generated
  software; wording in this research is paraphrase except where the video quotes
  Gross in English.
- [Salvatore Sanfilippo, “Control the ideas, not the code”](https://antirez.com/news/169)
  — direct counterexample to provenance-based definitions; argues for human
  ownership of design, mental model, QA, tests, and product direction.
- [Salvatore Sanfilippo's recommendation of Gross's essay](https://x.com/antirez/status/2060375845110223007)
  — verifies that the conceptual alignment is explicit rather than inferred.
- [Armin Ronacher, “Building Pi With Pi”](https://lucumr.pocoo.org/2026/5/24/pi-oss/)
  — concrete account of unowned generated issue text corrupting intent and
  transferring diagnosis work to maintainers.
- [George Hotz, “The Eternal Sloptember”](https://geohot.github.io/blog/jekyll/update/2026/05/24/the-eternal-sloptember.html)
  — bounded counterpoint on surface proxies, process, and downstream interaction;
  not evidence for a universal claim that agents cannot program.

## Confidence and Unknowns

**Confidence: high** in the recommended definition and article direction. The
main sources converge on false completion, responsibility, and hidden downstream
cost, while the Sanfilippo counterexample prevents a simple anti-AI reading.

Open editorial choices rather than research gaps:

- [ ] Choose the final title: explanatory/searchable or thesis-first.
