# Reviewing Existing Articles

Use this workflow for a deep editorial review of one public post or a small,
coherent group. It complements `SKILL.md`; the house style, source rules, and
repository commands there still apply.

## Review Outcome

A completed review should establish that:

- the reader can identify the article's job, argument, and next action quickly;
- each section has a distinct purpose and earns its place;
- central terms, heuristics, and practical questions are easy to understand;
- every material claim stays within its source and attribution boundary;
- article and slide modes both communicate the intended content; and
- site navigation describes the article honestly and does not imply coverage the
  site does not have.

Review one article at a time by default. Use a small cluster only when the posts
share a thesis or must be compared for duplication. For a larger series review,
start with homepage and map articles because they set expectations for the rest.

## 1. Establish The Article Contract

Read the post before editing it. Then write down, in one sentence each:

1. **Reader job:** what is the reader trying to understand or decide?
2. **Article claim:** what is the article asking the reader to believe?
3. **Practical result:** what can the reader do after reading it?
4. **Distinct role:** why does this need to be an article rather than a source
   summary or a section in another post?

Read its linked internal posts, source summaries, transcripts, and homepage card
when those materials affect the contract. Record the route and baseline word count.

If the contract is unclear, fix that before polishing sentences. Concise prose
cannot rescue an article with no distinct job.

## 2. Review The Argument

For each section, name its job in a few words. Merge, move, or remove sections that
repeat another job.

Check that the article:

- states the important point before its background;
- distinguishes the definition or decision rule from mere warning signs;
- explains what would disprove or limit its claim;
- includes a concrete counterexample when readers could overgeneralize it;
- does not turn one useful heuristic into a universal formula; and
- ends with a practical test, decision, or action that follows from the argument.

Do not preserve a sentence only because it is accurate. If its role is unclear or
it interrupts the argument, move it to a source note or remove it.

## 3. Run A Plain-Language Pass

Review the title, description, headings, blockquotes, definitions, framework
labels, and practical questions before line-editing normal prose. Those elements
carry the skim experience and slide deck.

Use these tests:

- **Definition test:** Can the central idea be said in one or two short sentences
  without relying on jargon introduced later?
- **Purpose test:** Can you explain why each heuristic or comparison appears?
- **Concrete test:** Replace abstract nouns with the behavior, failure, decision,
  or cost they describe.
- **Sentence test:** Split sentences that ask the reader to retain multiple claims,
  caveats, attributions, or examples at once. Flagging sentences above roughly 28
  words can reveal candidates, but word count is not the decision rule.
- **Label test:** Use short, parallel terms that tell the reader what they need.
  Prefer `Evidence` over `Checking` when the result matters more than the act.
- **Question test:** Ask one decision per question. Remove nested qualifications or
  move them into explanatory prose.
- **Repetition test:** Do not repeat the definition as the opening slide message,
  section takeaway, and conclusion. Let each occurrence do a different job.

Read every changed sentence in isolation and in its paragraph. A sentence can be
clear alone but redundant or misplaced in sequence.

## 4. Run A Source-Fidelity Pass

For each load-bearing claim, identify:

- the exact source and anchor;
- whether the article uses a quote, paraphrase, translation, or synthesis;
- who actually said or demonstrated it; and
- what qualification or evidence boundary the source includes.

Then check:

- Exact quotes match the source.
- Adjacent citations support the sentence beside them, not merely the general
  paragraph topic.
- Interview claims belong to the correct speaker. Use “the exchange” when the
  question and examples come from different people.
- Translated or auto-captioned sources are checked against the captured transcript.
  Label an English rendering as editorial translation or paraphrase instead of
  presenting it as a quotation.
- Composite definitions, frameworks, and operational tests are explicitly labeled
  as author synthesis.
- A source is not made to support a broader product, causal, or empirical claim
  than it actually establishes.

Prefer a narrower accurate sentence over a broader sentence padded with caveats.

## 5. Review Article And Slide Modes Together

Each normal `##` section usually becomes one slide. Review both outputs rather than
assuming readable Markdown creates a usable deck.

- Keep the opening blockquote concise and distinct from nearby definitions.
- Put a table, diagram, image, or other intended slide artifact immediately after
  the blockquote. A normal list or prose may become speaker notes instead.
- Keep citations and nuance in notes unless they are needed to understand the
  visible slide.
- Check that the final practical framework is visible in slide mode when it is the
  article's payoff.
- Exercise navigation and inspect the first, final, and most content-dense slides.
- Check article and slide routes at representative desktop and mobile widths for
  horizontal overflow, clipping, overlap, orphaned words, and unreadable tables.

DOM and accessibility facts verify structure. Inspect one targeted screenshot for
visual defects; a screenshot alone does not verify interaction or navigation.

## 6. Review Site Placement

When an article appears on the homepage or in another curated list:

- order entries by reader impact and progression rather than publication date;
- keep the complete posts index as the archive when that is its established role;
- describe only coverage that exists—a section mentioning a topic is not
  necessarily a dedicated article about it;
- keep card copy aligned with the article's current definition and framework; and
- confirm hidden-from-homepage articles remain published and discoverable when
  removal was not requested.

## 7. Use Independent Review Deliberately

Use a fresh high- or ultra-mode reviewer when source breadth, translation,
publication impact, or accumulated edits make an independent read worthwhile.
Keep implementation and independent review separate: the reviewer should be
read-only, and the coordinating thread should decide which suggestions improve the
article.

Adapt this compact prompt:

```text
Review <branch or commit> against <base> for publication. Read-only: do not edit,
commit, or push. Check argument clarity, concision, plain-language readability,
source fidelity and attribution, internal links, and article/slide rendering.
Separate blocking findings from optional improvements. Verify the repository checks
and inspect the article and slides in a real browser. Report exact file/line evidence
and any residual source risk.
```

Add the intended reader job, central claim, relevant source or transcript paths,
and route. Do not tell the reviewer what conclusion to reach.

## 8. Apply Feedback With Judgment

Classify review feedback before editing:

1. **Correctness or source fidelity:** fix before publication.
2. **Comprehension:** apply when it makes the claim or reader action easier to
   understand.
3. **Structure or presentation:** apply when it improves both article and slide
   modes without distorting the argument.
4. **Preference:** apply only when it fits the house style and does not add
   repetition, length, or a weaker abstraction.

Re-run the full verification after accepted edits. Record rejected material
feedback only when the rationale will matter to a later reviewer; do not preserve
every optional suggestion as durable process history.

## Review Report Shape

Keep the result compact and decision-oriented:

1. Verdict and blocking findings.
2. Optional improvements, ordered by impact.
3. Source-fidelity or residual-risk notes.
4. Automated and browser verification evidence.
5. Files changed, if this was an editorial implementation rather than read-only
   review.

The review is complete when the article contract is clear, accepted feedback is
integrated, the full checks and browser proof pass, and any work item records only
remaining work rather than completed narration.
