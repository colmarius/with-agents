# Research: Public post digestibility

**Date:** 2026-07-31
**Status:** complete
**Question:** What is the smallest public-series simplification that materially
improves scanning without weakening evidence or creating editorial churn?

## Decision

Run a finding-gated refresh, not a blanket rewrite. Keep
`behavior-over-explanation`, `measure-outcomes-not-agent-activity`, and
`small-threads-durable-state` unchanged. Fix only two stale durable-context
fragments in `make-the-agent-prove-it`. Add the measurement post to the homepage,
trim repeated recaps from the series map and Amp case study, and reduce heading
fragmentation in the canonical durable-context article.

## Audit Results

Three independent read-only audits and Oracle agreed on the reduced scope:

- The homepage has seven manually curated cards while the measurement post is
  public and correctly listed elsewhere. Add one card and one `measure delivered
  outcomes` clause; keep `pubDate: 2026-07-31`.
- `make-the-agent-prove-it` has two links to the obsolete fragment
  `#evidence-make-the-agent-prove-the-work`. The built durable-context heading is
  `#evidence-keeps-judgment-attached-to-the-diff`.
- `agentic-coding-2026` repeats opening navigation, section takeaways, source
  recaps, and its final through-line. Deleting those recaps should reduce it by
  roughly 13–14% without changing surviving claims.
- The Amp case study's product-specific evidence is useful. Only uncited recap
  sentences that repeat the final durable contracts should be deleted, for a
  roughly 6% reduction. Surviving Amp product claims must not be rephrased.
- The canonical durable-context article is over-sectioned rather than uniformly
  verbose. Merge adjacent problem-framing, model-memory, and portability sections
  while retaining each source's distinct role and every practical artifact.
- The extended durable-context deck remains the richer talk artifact. Factual
  claims, source roles, links, terminology, caveats, and broad argument order stay
  synchronized; section count, heading granularity, visuals, and pacing may
  intentionally diverge. The image deck is untouched.
- Root `AGENTS.md` already carries the necessary public-writing contract. At most
  one concise skim-test rule should be promoted to the article-writing skill if
  the implemented edits confirm it is reusable.

## Anti-Flattening Boundaries

- A surviving factual claim keeps its adjacent source anchor and qualification.
- A claim may be deleted with its anchor; it may not outlive its anchor.
- Noperator, Maggie Appleton, Addy Osmani, and Simon Willison retain separate
  source roles in the canonical durable-context article.
- The keep/expire filter, repo-memory stack, risk-scaled evidence ladder,
  before/after table, image-deck link, and Sources appendix survive.
- The two newest evidence-heavy posts are not shortened merely to satisfy a
  numerical target.
- No date, resource, source-library artifact, or public route is invented or
  removed.

## Oracle Disposition

Accepted: audit before edit, minimum homepage change, finding-gated post edits,
broken-fragment remediation, cuts-only Amp treatment, explicit canonical/extended
divergence, no image-deck edit, no root-guidance change, and a full built-fragment
and slide gate.

Rejected from the original proposal: blanket light edits, a 20–30% reduction
target for every post, rewriting Amp product claims without a new freshness
sweep, and broad guideline consolidation.
