# Research: Section landing page information architecture

**Date:** 2026-08-26
**Status:** complete
**Question:** How should the Coding, Cloud, and Security context pages expose a
small personal knowledge library when only Coding has first-party posts?

## Recommendation

Use content-first hubs rather than generic marketing or route-dashboard pages.
Show stable curated field guides where they exist, a small curated set of
summary-backed resources in every context, and links to populated collections
when those collections reveal material beyond the featured set. Keep inventory
counts unboxed and make every bordered surface one explicit action.

## Key Findings

- The old coverage blocks use the same bordered-card vocabulary as real links
  elsewhere on the site but have no action. That is the ambiguity visible in the
  supplied mobile screenshot.
- Before the multi-context split, the Coding homepage successfully used a
  curated subset of clickable posts as problem-oriented entry points.
- The current content is intentionally asymmetric: Coding has 7 public posts,
  54 reviewed resources, and 4 populated collections; Cloud has 12 reviewed
  resources in 7 populated collections; Security has 2 reviewed resources in 2
  populated collections and no posts.
- A guided-dashboard prototype was explicit but duplicated its recommended
  collection in the library map, added `startSectionSlug` configuration, and
  reached 4,287 pixels on mobile.
- A content-first prototype proved direct summary deep links and honest omission
  of unavailable post regions. Its first iteration needed stable curation and
  more compact mobile cards.
- Oracle recommended the content-first model with plain inventory, curated IDs,
  direct summary links, and derived omission of redundant collection maps. The
  recommendation has been implemented: Security shows its complete two-resource
  corpus directly and therefore omits two one-item collection links.

## Evidence

### Card affordance

The U.S. Web Design System defines cards as entry points to more detailed
information. Its usability guidance says to make cards actionable and not use
the component merely as decoration around bordered content. UC Berkeley's
accessibility guidance recommends an always-visible linked title or CTA,
hover/focus cues, and a large mobile target for full-surface cards.

### Landing page role

USWDS distinguishes promotional landing pages from internal pages where readers
seek depth. It advises removing template elements rather than adding content to
fill them. These context pages are repeat-use library hubs, so actual content
and browse paths should replace marketing-style coverage statements.

### Local prototypes

- [Content-first prototype](https://ampcode.com/threads/T-01a03e05-263e-715b-9686-b0d17a943fb5)
  validated direct post, summary-modal, and populated-collection links.
- [Guided-path prototype](https://ampcode.com/threads/T-01a03e05-2ec8-735e-9e84-44bc03c568f9)
  validated explicit route affordances but exposed duplication and mobile
  length costs.

## Sources

- [USWDS Card](https://designsystem.digital.gov/components/card/) — Cards should
  be actionable entry points, not decorative bordered containers.
- [USWDS Landing page](https://designsystem.digital.gov/templates/landing-page/) —
  Internal depth-seeking pages should avoid promotional template complexity.
- [UC Berkeley accessible card patterns](https://dap.berkeley.edu/websites/accessibility-guidance-developers/card-ui-component) —
  Full-surface actions need explicit link, hover, and focus affordances.

## Open Questions

- None that block the current inventory. Revisit collection-map density when
  Security grows beyond the featured subset or when Cloud/Security gain posts.
