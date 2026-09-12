---
name: article-writing
description: "Writes and reviews source-backed posts. Use for drafting, refreshing, simplifying, source checks, or draft retirement. Triggers on: write article, review article, refresh article, simplify article, source-fidelity review, retire draft, remove draft."
---

# Article Writing Skill

Write, review, and maintain public posts across site contexts with a consistent,
source-backed house style. Use this skill for new posts, editorial and
source-fidelity reviews, refresh passes, draft retirement, and explicitly approved
draft removal.

The always-visible contract lives in root `AGENTS.md` under "Article writing." This
skill adds the repeatable workflow and the checklists.

## House Style

Apply root `AGENTS.md`'s audience, tone, and concision contract across all contexts.

- **Skim test:** the title, description, headings, slide messages, and one practical
  artifact should expose the reader job, argument, and next action in 30 seconds.
- **Shape:** choose sections for the argument and slide sequence, not a fixed
  count. Each section should have a distinct job and lead with its takeaway.
- **Length:** remove repetition and unnecessary setup, not explanations, examples,
  or qualifications needed to understand the argument. A refresh may shorten,
  retain, or expand the post; there is no default percentage reduction.

## Plain-Language Precision

- State the central claim or definition in one or two plain sentences. Label it as
  synthesis when it combines sources rather than quoting one.
- Give every sentence a clear job. Explain central terms and source-supported
  mechanisms in place; for comparisons, name the baseline, proposed change, and
  supported behavioral difference. Do not assume specialist shorthand is clear
  merely because the audience is experienced, or invent a missing mechanism.
- Explain why a heuristic matters and where it stops working. Do not leave a rule
  of thumb floating without its purpose or qualification.
- For definition or category articles, separate the actual rule from warning signs
  that may correlate with it.
- Use short, parallel, reader-facing labels. Treat sentence-length counts as a
  diagnostic, not a writing target.

## Source-Anchor Hygiene

- Each timestamp or citation must support the specific claim beside it.
- Mark author synthesis as synthesis (for example, "that table is synthesis, not a
  quote").
- Distinguish exact quotation, source-faithful paraphrase, translation, and author
  synthesis. Name which one the reader is seeing when it could be ambiguous.
- Attribute multi-speaker material precisely. If one speaker poses a question and
  another supplies the examples, attribute the examples separately or refer to
  "the exchange" rather than collapsing both into one speaker.
- For translated or auto-captioned material, check the captured transcript, avoid
  quotation marks unless the wording is verified, and identify editorial
  translation or paraphrase at first use or in a clearly scoped disclosure.
  Repeat when the source basis changes; keep speaker attribution and citations
  beside the claims they support.
- Keep only the anchors a post needs. Do not repeat the same source recap across
  posts; each post carries its own evidence.
- Do not remove source anchors for factual claims that still need support.
- Do not add new product claims (for example, about Amp) unless verified against
  current first-party sources.

## Product Freshness And Incorporation

Before publishing or materially changing an Amp product claim, recheck the
relevant current [Amp Docs](https://ampcode.com/docs) pages. Use
[Orbs](https://ampcode.com/docs/orbs),
[Models](https://ampcode.com/models),
[Plugin API](https://ampcode.com/docs/plugin-api), or
[Pricing](https://ampcode.com/pricing) when the claim concerns those areas, and
[Chronicle](https://ampcode.com/chronicle) for dated changes. Do not fetch every
page for a claim confined to one area. Treat canonical documentation as the
current product authority. Use dated announcements and workflow notes as dated
direction or examples, not timeless feature documentation. Date-stamp exact
product details with the actual verification date or omit them. If first-party
sources conflict, record the conflict; distinguish documented current behavior
from announced direction rather than silently choosing an announcement.

A fresh source belongs in research by default. Before drafting public prose,
classify it as `incorporate`, `research-only`, or `ignore`. Incorporate it only
when all six checks pass:

1. **Thesis fit:** it directly strengthens or changes the article's thesis or an
   existing work contract.
2. **Evidence strength:** it documents product behavior, measured outcomes, or an
   operative contract—not merely a launch, partnership, aspiration, or customer
   name.
3. **Durability:** the useful lesson survives model, pricing, UI, and
   implementation churn.
4. **Novelty:** no stronger existing source already supports the point.
5. **Claim-to-caveat ratio:** the useful claim remains substantial after necessary
   caveats; if the caveat is the main story, keep the item in research.
6. **Load-bearing value:** removing the item would make the article materially
   weaker or less current.

"Latest" is a research-selection criterion, not a publication criterion. For a
transcript-backed post, also compare the proposed article with the matching
resource summary. Publish the post only when it adds a distinct thesis,
cross-source synthesis, practical framework, workflow, or decision guide rather
than repeating the summary.

### Empirical claims and evidence refreshes

For a public empirical claim, name enough of the evidence boundary for a reader to
judge it: study design, measured outcome layer, population or setting, relevant
tool period, and material affiliation or commercial conflict. Distinguish activity,
task completion, reviewed delivery, operational quality, customer value, and
retained capability instead of silently promoting a result from one layer to the
next.

Presenter, vendor, and observational figures may illustrate a mechanism or form a
pilot hypothesis, but they are not transferable benchmarks. Stronger evidence may
support broader claims only within its stated treatment, population, tool
generation, period, and outcome boundaries. Prefer direction, mechanism, and
boundary over a point estimate when the exact number is not load-bearing.

Refresh empirical claims when a materially stronger or more current primary study
changes their role, not merely because another source exists. Use work-local
research to classify candidate evidence, run an adversarial claim-to-source review,
and keep papers as direct article citations unless they independently earn a
durable resource-navigation job. Do not turn the curated resource manifest into a
paper database or create a recurring refresh schedule by default.

## Internal-Link Hygiene

- Link only to production routes. For posts, inspect the target frontmatter and
  `src/utils/posts.ts`: paths are `/<context>/posts/<id>` and drafts are excluded
  from production. A text search finds references, not proof of a route. After
  building, confirm the exact output exists, for example:

  ```sh
  test -f dist/<context>/posts/<slug>/index.html
  ```

- Never link retired drafts or old/unavailable article routes from a public post.
- Within the coding-agent series, keep posts cross-linked by role: field guide as the map,
  durable-context as repo memory, prove-it as the evidence ladder, small-threads as
  the operating procedure, Amp as the case study.

## Post/Slide Hybrid Structure

Public posts double as generated slide decks. Keep Markdown posts as the single
source of truth: each rendered `##` section is an article section and usually one
presentation slide.

- Author against the route extractor: the first meaningful child after a normal
  `##` heading should be a blockquote slide message. If a post has not been
  migrated yet, leave legacy sections coherent until that post is migrated as a
  whole.
- Start each rendered `##` section with a concise blockquote slide message when
  practical.
- Keep the blockquote presentation-friendly: usually one sentence, no citation
  clutter, and no more than 1-3 short clauses.
- By default, without an explicit notes delimiter, only contiguous visual blocks
  immediately after the blockquote stay on the slide. Once normal prose, lists,
  or non-visual code starts, the rest of the section is speaker/reader notes.
- An explicit `<!-- notes -->`, `<!-- notes: -->`, or `Notes:` paragraph keeps
  meaningful content before it on the slide, including prose and lists. Existing
  configured `visual` and `image` layouts may start with a visual instead of a
  blockquote. Preserve these intentional layouts when editing a deck.
- Keep any qualification that changes the truth of the takeaway visible in the
  slide message. Put supporting detail, citations, examples, prompts, and
  read-along context in the notes region: after the default visual sequence or
  after an explicit notes delimiter.
- Optional visuals may immediately follow the blockquote: Mermaid, text diagrams,
  tables, inline SVG, figures, or Markdown images. Make them accessible with alt
  text, captions, or nearby prose that does not rely on color/image-only meaning.
- Use `txt` fences for prose-like prompts and checklists: keep each complete
  instruction on one source line and let the page wrap it. Reserve `text` fences
  for diagrams whose line geometry must be preserved. Do not hard-wrap sentences
  to fit a viewport.
- Use `## Sources` or `## Sources used` for source appendices. They are not normal
  presentation slides; keep source detail available for article, notes, and print
  modes. Avoid variants like `## Sources consulted` unless you intentionally want
  a normal slide.

### Presentation strategy

- Prefer one idea per slide and sparse visible text; keep supporting nuance in
  notes without removing qualifications needed for an accurate takeaway.
- Dry-run the real presentation before adding machinery. When a complex idea needs
  staged reveal, prefer adjacent Markdown sections or static diagram stages that
  still read naturally in article and print modes.
- Add route-level fragments only after adjacent buildup causes recurring
  maintenance pain and a narrow Markdown-visible, accessible, print-safe syntax
  is clear. Consider MDX only when multiple posts need the same reusable visual or
  interactive component. Consider a deck framework only when presentation mode
  becomes a first-class product that needs fragments, overlays, speaker tooling,
  export, or richer animation beyond the article projection.
- Prefer Markdown-native visuals. If a committed static asset is justified, store
  it at `public/visuals/posts/<slug>/<descriptive-kebab-name>.<svg|webp|png>` and
  reference `/visuals/posts/<slug>/...` with accessible alt or caption text.

## Workflow

For a systematic review of an existing post, follow
[`references/reviewing-existing-articles.md`](references/reviewing-existing-articles.md).
It separates argument, readability, source fidelity, article/slide rendering, and
independent review so feedback can be judged instead of applied mechanically.

### 1. Frame the job

- New post or refresh? What single argument must it carry?
- Which existing posts does it link to, and what is this post's distinct role?
- Identify the explanations and sections the reader needs. Set a word budget only
  when the task or publication constraint calls for one.

### 2. Draft or trim

- Lead with the takeaway, then support it.
- Keep useful tables, prompts, checklists, and source-backed timestamps.
- Cut meta-history ("what changed from the old draft"), duplicated source recaps,
  and sections whose only job is explaining a prior version.
- Replace passive throat-clearing with the concrete claim.

### 3. Verify claims and links

- Re-read each source anchor against the sentence it supports.
- Confirm every internal link resolves to a real route.
- Check frontmatter still matches `src/content.config.ts`, including required
  `context`, title, description, pubDate, and order, plus optional visibility and
  canonical-path fields when used.

### 4. Build and record

```sh
npm run lint:fix
npm run check
npm test
npm run build
npm run content:guard
```

Run the affected article and slide routes in a real browser. Check representative
desktop and mobile article states plus the final and most content-dense slides.
Confirm practical artifacts intended for slides are visible rather than hidden in
speaker notes. When the review uses a work item, record per-post word counts and
verification results in `progress.md`.

## Retiring Or Removing A Draft

When a draft is stale but should not be deleted:

- Keep valid frontmatter and `draft: true` (unpublished).
- Replace the body with a short retired-draft note: retired, unpublished, not
  maintained, do not publish or link as-is, use the current public series instead,
  revive only after fresh source/product verification.
- Remove old setup instructions, stale route links, old product/UI claims, and old
  article-route references from the body.

When deletion is explicitly approved:

- Delete the draft file instead of leaving a retired note.
- Confirm no public source or built route links to the removed slug.
- Update any active work item or release note so future agents know the route was
  intentionally removed rather than accidentally hidden.

## Checklists

### Style

- [ ] Important point first in each section.
- [ ] Active voice, short paragraphs, concrete examples.
- [ ] No throat-clearing, no manifesto tone, no sales pitch.
- [ ] Central claim or definition is understandable in one or two plain sentences.
- [ ] Every sentence has a clear job; concrete behavior replaces avoidable shorthand.
- [ ] Every heuristic states its purpose and its important limit.
- [ ] Definition and category articles separate the rule from warning signs and
      include a limiting case or counterexample when readers could overgeneralize.
- [ ] Practical-framework labels are short, parallel, and reader-facing.
- [ ] Each substantive section has a distinct job; section count follows the
      argument and slide sequence.
- [ ] Each rendered `##` usually starts with a concise slide-message blockquote.
- [ ] Slide blockquotes are presentation-friendly: one sentence or 1-3 short
      clauses, with citation clutter moved to notes/prose.

### Article/slide coherence

- [ ] Article mode reads naturally with the blockquote as the section takeaway.
- [ ] Slide mode has a clear main message without notes-only context leaking onto
      the slide or essential qualifications disappearing into notes.
- [ ] Notes/prose after the blockquote carries citations, caveats, prompts, and
      examples needed for read-along or speaker context.
- [ ] Optional immediate visuals are accessible and understandable without relying
      on color/image-only meaning.
- [ ] `## Sources` / `## Sources used` is treated as an appendix, not a normal
      presentation slide.

### Length

- [ ] Unnecessary text is removed without losing necessary explanation or evidence
      boundaries; any explicitly requested length constraint is met or its
      tradeoff reported.

### Sources

- [ ] Every anchor supports the adjacent claim.
- [ ] Synthesis is labeled as synthesis.
- [ ] Attribution and source type—quote, paraphrase, translation, or synthesis—are
      explicit and accurate.
- [ ] No duplicated source recaps across posts.
- [ ] No unsupported new product claims.
- [ ] Load-bearing empirical claims name their design, outcome layer,
      setting/time boundary, and material affiliation or conflict.
- [ ] Presenter or vendor figures illustrate bounded mechanisms rather than
      silently becoming transferable benchmarks.
- [ ] Amp claims were checked against relevant current Docs and dedicated sources;
      exact product details carry the actual verification date.
- [ ] New source items were classified as `incorporate`, `research-only`, or
      `ignore` using all six incorporation checks.
- [ ] A transcript-backed post adds a distinct thesis beyond its matching resource
      summary.

### Links

- [ ] Internal links resolve to real routes.
- [ ] No links to retired drafts or removed routes.
- [ ] Series cross-links keep their roles coherent.

### Draft retirement/removal

- [ ] If retained, `draft: true` kept; frontmatter valid.
- [ ] If retained, body is a short retired-draft note only.
- [ ] If deleted, no public source or built route links to the removed slug remain.
- [ ] No stale setup, routes, or product claims remain.

### Verification

- [ ] `npm run lint:fix` passes without unintended changes.
- [ ] `npm run check` passes.
- [ ] `npm test` passes.
- [ ] `npm run build` passes.
- [ ] `npm run content:guard` passes.
- [ ] Article and slide routes pass representative desktop and mobile browser
      checks; intended slide artifacts are visible and unclipped.
- [ ] `git diff --check` is clean.
- [ ] Word counts and results recorded when the review uses a work item.

## Definition Of Done

The post carries one clear argument in the house style, every source anchor and
internal link checks out, necessary explanations are retained and unnecessary text
is removed, stale drafts are retired or explicitly deleted, the article and slide
routes render correctly, and the full repository checks pass. When the review uses
a work item, it records only remaining work and decisive evidence.
