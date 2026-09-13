import type { ResourceCatalog } from '../../types/resources.ts';

type CatalogCuration = Pick<
  ResourceCatalog,
  'assessmentsByResourceId' | 'startHere'
>;

export const codingCuration = {
  assessmentsByResourceId: {
    14: {
      tier: 'essential',
      reason:
        'Connects executable proof, test-driven development, realistic checks, and sandboxing to accountable agent use.',
    },
    38: {
      tier: 'essential',
      reason:
        'Shows concrete investigation and context-routing patterns rather than generic prompt formulas.',
    },
    17: {
      tier: 'essential',
      reason:
        'Separates mechanical checks from consequential decisions that still require human judgment.',
    },
    35: {
      tier: 'essential',
      reason:
        'Across the selected Pragmatic Engineer conversations, episodes cover measurement, property-based testing, and bounded agent loops.',
    },
    74: {
      tier: 'essential',
      reason:
        'Connects repository-aware skills with deliberate planning and engineering workflows.',
    },
    77: {
      tier: 'essential',
      reason:
        'Explains dependencies, resumability, secrets, and control boundaries for task-ready background-agent environments.',
    },
    72: {
      tier: 'essential',
      reason:
        'Demonstrates behavior-first browser verification for web workflows, without establishing comparative testing effectiveness.',
    },
    54: {
      tier: 'essential',
      reason:
        'Connects team ownership and review responsibilities to autonomy scaled by risk.',
    },
    135: {
      tier: 'essential',
      reason:
        'Shows how typed specifications, call-path investigation, and small local reviews support production changes.',
    },
    124: {
      tier: 'essential',
      reason:
        'Describes maintained-framework experience with release chores, meaningful test design, and agent-built fuzzing harnesses, not comparative effectiveness evidence.',
    },
    34: {
      tier: 'essential',
      reason:
        'Brings together recovery, bounded planning, evaluation, and human agency in production agent systems.',
    },
    43: {
      tier: 'essential',
      reason:
        'Explains skill triggers and progressive loading, with evaluation that compares work with and without a skill.',
    },
    1: {
      tier: 'useful',
      reason:
        'Traces early harness and context-design decisions; product behavior belongs to the period recorded.',
    },
    5: {
      tier: 'useful',
      reason:
        'Explains clear briefs and feedback loops, while its product-specific details are historical.',
    },
    9: {
      tier: 'useful',
      reason:
        'Shows a maintenance workflow that keeps architectural control with the developer.',
    },
    12: {
      tier: 'useful',
      reason:
        'Explains why an observable, minimal harness can help developers understand and direct agent behavior.',
    },
    13: {
      tier: 'useful',
      reason:
        'Adds concrete review-artifact and context-tree practices beyond an introduction to Pi.',
    },
    18: {
      tier: 'useful',
      reason:
        'Explores team alignment through a collaboration prototype, not demonstrated team outcomes.',
    },
    20: {
      tier: 'useful',
      reason:
        'Provides remote-agent operating experience alongside product-launch context.',
    },
    21: {
      tier: 'useful',
      reason:
        'Contributes observations about maintaining software and changing team practices over time.',
    },
    22: {
      tier: 'useful',
      reason:
        'Provides a guided route through supervision, testing, and evaluation of AI-assisted coding.',
    },
    24: {
      tier: 'useful',
      reason:
        'Connects architecture decisions and agent use to understanding customer needs.',
    },
    26: {
      tier: 'useful',
      reason:
        'Organizes engineering talks around practical questions; some also appear as standalone resources.',
    },
    28: {
      tier: 'useful',
      reason:
        'Explains how to discover unknowns and bound ambitious work before delegating it.',
    },
    29: {
      tier: 'useful',
      reason:
        'Uses prompt ablation to test what matters; the reported reduction is not a universal target.',
    },
    31: {
      tier: 'useful',
      reason:
        'Collects practitioner interviews on harness design and supplying useful context.',
    },
    32: {
      tier: 'useful',
      reason:
        'Offers selected orchestration and verification discussions, with some overlap across collections.',
    },
    33: {
      tier: 'useful',
      reason:
        'Extends evaluation beyond code by separating verifiable attributes from contextual human preferences.',
    },
    36: {
      tier: 'useful',
      reason:
        'Explains persistent goals and stopping conditions for keeping agent work bounded.',
    },
    37: {
      tier: 'useful',
      reason:
        'Provides a preliminary responder account of shared-service failures, not a complete independent postmortem.',
    },
    40: {
      tier: 'useful',
      reason:
        'Connects shared plans to team decisions when faster implementation strains coordination.',
    },
    42: {
      tier: 'useful',
      reason:
        'Explores durable sessions and separating interaction from execution in agent interfaces.',
    },
    44: {
      tier: 'useful',
      reason:
        'Shows why domain knowledge and clear briefs matter more than chasing every new tool.',
    },
    45: {
      tier: 'useful',
      reason:
        'Examines attention limits and when selective parallel work is worth its coordination cost.',
    },
    46: {
      tier: 'useful',
      reason:
        'Reflects on review burden and the value of constraining agent execution.',
    },
    47: {
      tier: 'useful',
      reason:
        'Connects programming judgment to testability, reversibility, and control of scope.',
    },
    48: {
      tier: 'useful',
      reason:
        'Demonstrates auditing and adapting borrowed skills to the work a repository actually needs.',
    },
    53: {
      tier: 'useful',
      reason:
        'Explains Pi internals at source level while keeping demonstration claims qualified.',
    },
    56: {
      tier: 'useful',
      reason:
        'Explains how preserving corrections and their rationale can improve later engineering work.',
    },
    69: {
      tier: 'useful',
      reason:
        'Explores bounded recurring repository automation; preview behavior is not a stable product contract.',
    },
    70: {
      tier: 'useful',
      reason:
        'Adds product-scope and maintainability perspectives to decisions about agent-assisted implementation.',
    },
    71: {
      tier: 'useful',
      reason:
        'Connects deterministic transformations and typed feedback to reliable changes in large codebases.',
    },
    75: {
      tier: 'useful',
      reason:
        'Emphasizes explicit success criteria and conceptual integrity as implementation becomes easier.',
    },
    76: {
      tier: 'useful',
      reason:
        'Contrasts agent difficulties in mature architectures with work on new projects.',
    },
    79: {
      tier: 'useful',
      reason:
        'Describes enterprise agent-development building blocks; rollout results remain first-party reports.',
    },
    82: {
      tier: 'useful',
      reason:
        'Offers documentation, indexing, and checkpoint practices, with historical CLI and pricing details.',
    },
    85: {
      tier: 'useful',
      reason:
        'Connects stable data and API design with review scaled to the consequences of a change.',
    },
    92: {
      tier: 'useful',
      reason:
        'Explains lazy context loading and the different roles of tools, skills, and hooks.',
    },
    109: {
      tier: 'useful',
      reason:
        'Explains scoped database reads and schema semantics; deployment isolation still needs validation.',
    },
    110: {
      tier: 'useful',
      reason:
        'Adds a secondary incident narrative and scope corrections to the preliminary responder account.',
    },
    112: {
      tier: 'useful',
      reason:
        'Connects customer discovery with domain-specific evaluation before investing in implementation.',
    },
    113: {
      tier: 'useful',
      reason:
        'Shows narrow migration and review evidence in a legacy-codebase demonstration that remains unfinished.',
    },
    114: {
      tier: 'useful',
      reason:
        'Explores invariants and risk-based automation, not a blanket recommendation to stop reviewing code.',
    },
    115: {
      tier: 'useful',
      reason:
        'Demonstrates interaction-design questions for agentic interfaces; most relevant to UI builders.',
    },
    117: {
      tier: 'useful',
      reason:
        'Explains isolated work and serialized shipping; its root-access defaults are not a general recommendation.',
    },
    118: {
      tier: 'useful',
      reason:
        'Uses contrasting harness architectures and negative results to explain design trade-offs.',
    },
    122: {
      tier: 'useful',
      reason:
        'Explores the boundary between agents and their interfaces, and how those parts evolve together.',
    },
    126: {
      tier: 'useful',
      reason:
        'Shows concrete evaluation failures and separates appropriate skill triggering from the quality of the writing it produces.',
    },
    132: {
      tier: 'useful',
      reason:
        'Offers a practitioner critique of autonomy and readability; the examples are anecdotal.',
    },
    136: {
      tier: 'useful',
      reason:
        'Emphasizes real dependencies, inspectability, and completed outcomes rather than concurrency alone.',
    },
    2: {
      tier: 'context',
      reason:
        'Records historical product strategy and architectural positions rather than a current workflow guide.',
    },
    3: {
      tier: 'context',
      reason:
        'Mixes news and live experiments; selected practical episodes offer more focused value than the whole series.',
    },
    6: {
      tier: 'context',
      reason:
        'Retains a useful review-interface perspective, but its product framing is historical and the headline is unmeasured.',
    },
    7: {
      tier: 'context',
      reason:
        'Provides an ecosystem perspective with few concrete coding-agent practices.',
    },
    8: {
      tier: 'context',
      reason:
        'Records historical experiments and live-demo failures rather than a consistent starting workflow.',
    },
    10: {
      tier: 'context',
      reason:
        'Adds Pi design and origin context, overlapping the more focused introduction, workflow, and internals resources.',
    },
    27: {
      tier: 'context',
      reason:
        'Offers a broad AI outlook; other resources explain the engineering practices more directly.',
    },
    39: {
      tier: 'context',
      reason:
        'Examines programming culture and the value of design rather than demonstrating an agent workflow.',
    },
    51: {
      tier: 'context',
      reason:
        'Provides a Pi profile and origin story with less additional technical depth than the workflow and internals guides.',
    },
    55: {
      tier: 'context',
      reason:
        'Proposes organizational feedback loops, but leaves consent and autonomous-deployment controls unresolved.',
    },
    73: {
      tier: 'context',
      reason:
        'Offers adoption advice and economic forecasts; the headline inference cost excludes the software lifecycle.',
    },
    78: {
      tier: 'context',
      reason:
        'Illustrates specification-driven work in a prepared demo, without a comparative test of its superiority.',
    },
    86: {
      tier: 'context',
      reason:
        'Introduces a narrow portable-knowledge format proposal; the summary corrects a narration inconsistency.',
    },
    94: {
      tier: 'context',
      reason:
        'Explores a beta collaboration design rather than measured team outcomes.',
    },
    96: {
      tier: 'context',
      reason:
        'Presents a vendor proposal for changing code review, not evidence that review can safely be removed.',
    },
    107: {
      tier: 'context',
      reason:
        'Adds a substantial values and learning counterpoint to adoption narratives, not a workflow evaluation.',
    },
    108: {
      tier: 'context',
      reason:
        'Combines a useful evaluation proposal with model-launch commentary, anecdotes, and architecture speculation.',
    },
    111: {
      tier: 'context',
      reason:
        'Provides a career and adoption perspective with limited coding-specific instruction and unnamed study references.',
    },
    121: {
      tier: 'context',
      reason:
        'Places useful-work evaluation within a much broader debate about AGI and persistent model state.',
    },
    125: {
      tier: 'context',
      reason:
        'Contains agent-coordination detail within a broader founder and project-growth interview.',
    },
    133: {
      tier: 'context',
      reason:
        'Offers a software-maintenance perspective rather than firsthand coding-agent workflow experience.',
    },
    4: {
      tier: 'context',
      reason:
        'Provides historical series context, with limited detail and little additional durable guidance in its current presentation.',
    },
    116: {
      tier: 'context',
      reason:
        'Repeats brief-writing advice in secondary commentary; the summary challenges an unsupported model-specific verification claim.',
    },
  },
  startHere: {
    title: 'Start here',
    description:
      'A summary-first route through verification, context, human judgment, software maintenance, and measuring adoption impact.',
    entries: [
      {
        resourceId: 14,
        summarySlug:
          'coding-with-agents/simon-willison-engineering-practices-that-make-coding-agents-work',
        audience: 'Developers establishing a verification workflow',
      },
      {
        resourceId: 38,
        summarySlug:
          'coding-with-agents/think-harder-how-i-prompt-thorsten-ball',
        audience: 'Developers investigating unfamiliar code',
      },
      {
        resourceId: 17,
        summarySlug:
          'coding-with-agents/the-friction-is-your-judgment-armin-ronacher-cristina-poncela-cubeiro',
        audience: 'Reviewers deciding where human judgment matters',
      },
      {
        resourceId: 124,
        summarySlug:
          'coding-with-agents/building-ambitious-software-jonathan-kelley-dioxus-labs-cognition',
        audience: 'Maintainers designing tests and sustaining releases',
      },
      {
        resourceId: 35,
        summarySlug:
          'coding-with-agents/measuring-the-impact-of-ai-on-software-engineering-laura-tacho',
        audience:
          'Tech leads evaluating adoption through baselines, impact, and cost',
      },
    ],
  },
} satisfies CatalogCuration;

export const cloudCuration = {
  assessmentsByResourceId: {
    97: {
      tier: 'essential',
      reason:
        'Provides a broad workload-review framework connecting architecture, security, reliability, operations, and cost.',
    },
    98: {
      tier: 'essential',
      reason:
        'Explains organization-wide controls and their implementation; adapt its large-team operating assumptions to your environment.',
    },
    100: {
      tier: 'essential',
      reason:
        'Explains practical keyless workload admission, narrow IAM grants, and the distinction between workload identity and user authorization.',
    },
    101: {
      tier: 'essential',
      reason:
        'Complements federation setup with trust hardening, credential-lifetime threats, and audit controls.',
    },
    63: {
      tier: 'essential',
      reason:
        'Across the Engineering for Reliability collection, episodes connect SLOs, error budgets, logs, and observability costs; historical console steps need current documentation.',
    },
    61: {
      tier: 'essential',
      reason:
        'Across the Pub/Sub Best Practices collection, episodes explain acknowledgement, flow control, redelivery, and recovery trade-offs; feature limits reflect the recorded series.',
    },
    59: {
      tier: 'essential',
      reason:
        'The wider Serverless Expeditions collection uses concrete examples to explain compensation, safe releases, runtime choice, and data-system decisions.',
    },
    99: {
      tier: 'useful',
      reason:
        'Provides substantive networking and troubleshooting labs for a specialist learning path, not certification by completion alone.',
    },
    68: {
      tier: 'useful',
      reason:
        'Explains real case constraints and migration boundaries; reported results are specific to the participating systems.',
    },
    60: {
      tier: 'useful',
      reason:
        'Builds a coherent introductory model of message delivery and replay before the more focused best-practices series.',
    },
    67: {
      tier: 'useful',
      reason:
        'Explains cost ownership, alerts, and commitment trade-offs; pricing and product-specific details are historical.',
    },
    57: {
      tier: 'useful',
      reason:
        'Introduces shared responsibility, workload identity, and audit readiness through historical GCP examples.',
    },
    62: {
      tier: 'context',
      reason:
        'Offers a broad service-orientation route; its historical service comparisons are not a current deployment guide.',
    },
    64: {
      tier: 'context',
      reason:
        'Collects older quickstarts with useful individual tasks, but less continuity than a structured introduction.',
    },
    65: {
      tier: 'context',
      reason:
        'Illustrates domain boundaries and data flows through proposed architectures and demos rather than measured production outcomes.',
    },
    66: {
      tier: 'context',
      reason:
        'Serves as a short service glossary, with less depth than the fuller introductory resources.',
    },
    58: {
      tier: 'context',
      reason:
        'Preserves investigation examples from 2019; provider configuration and console steps are historical.',
    },
  },
  startHere: {
    title: 'Start here',
    description:
      'Selected Google Cloud practices for architecture review, workflow failure, reliability targets, deployment identity, and messaging.',
    entries: [
      {
        resourceId: 97,
        summarySlug: 'google-cloud/google-cloud-well-architected-framework',
        audience: 'Teams reviewing a cloud workload',
      },
      {
        resourceId: 59,
        summarySlug:
          'google-cloud/google-cloud-serverless-expeditions/workflows-retries-and-saga',
        audience: 'Developers coordinating services through failures',
      },
      {
        resourceId: 63,
        summarySlug:
          'google-cloud/google-cloud-engineering-for-reliability/getting-started-with-slos',
        audience: 'Teams defining user-facing reliability targets',
      },
      {
        resourceId: 100,
        summarySlug:
          'google-cloud/configure-workload-identity-federation-with-deployment-pipelines',
        audience: 'Platform engineers configuring keyless deployment access',
      },
      {
        resourceId: 61,
        summarySlug:
          'google-cloud/google-cloud-pubsub-best-practices/pubsub-best-practices-subscribing',
        audience: 'Developers implementing Pub/Sub consumers',
      },
    ],
  },
} satisfies CatalogCuration;

export const securityCuration = {
  assessmentsByResourceId: {
    102: {
      tier: 'essential',
      reason:
        'Defines OAuth security practices for redirects, PKCE, tokens, and replay defenses.',
    },
    104: {
      tier: 'essential',
      reason:
        'Broadens API review beyond login into authorization and abuse; it is a risk taxonomy, not an implementation standard.',
    },
    101: {
      tier: 'essential',
      reason:
        'Explains workload trust boundaries, credential threats, and audit controls for Google Cloud federation.',
    },
    100: {
      tier: 'essential',
      reason:
        'Provides a practical federation implementation route that separates workload admission from application-user authorization.',
    },
    103: {
      tier: 'essential',
      reason:
        'Defines identity and ID Token validation; pair its historical flow descriptions with modern OAuth security guidance.',
    },
    98: {
      tier: 'essential',
      reason:
        'Connects preventive and detective controls for platform owners, with operating assumptions that need local adaptation.',
    },
    105: {
      tier: 'useful',
      reason:
        'Provides a specialist normative reference for public-key credential ceremonies; check standards status when implementing.',
    },
    57: {
      tier: 'useful',
      reason:
        'Across the Security Basics collection, historical GCP examples explain identity and audit evidence; collecting logs is not the same as detecting threats.',
    },
    37: {
      tier: 'useful',
      reason:
        'Explains shared-service containment failures and chained infrastructure weaknesses in a preliminary responder account, not an independent completed postmortem.',
    },
    106: {
      tier: 'useful',
      reason:
        'Explains framework-specific configuration and revocation trade-offs; mutable implementation documentation does not replace standards.',
    },
    58: {
      tier: 'context',
      reason:
        'Shows historical security investigations and provider walkthroughs, not a current detection-engineering guide.',
    },
  },
  startHere: {
    title: 'Start here',
    description:
      'Begin with API authorization and OAuth, then explore audit evidence, incident containment, and workload trust. This is not a comprehensive security curriculum.',
    entries: [
      {
        resourceId: 104,
        summarySlug: 'security/owasp-api-security-top-10-2023',
        audience: 'API teams reviewing authorization and abuse risks',
      },
      {
        resourceId: 102,
        summarySlug: 'security/rfc-9700-oauth-2-security-bcp',
        audience: 'Engineers securing OAuth deployments',
      },
      {
        resourceId: 57,
        summarySlug:
          'google-cloud/google-cloud-security-basics/how-to-use-cloud-audit-logging',
        audience:
          'Cloud teams preparing investigation evidence before an incident',
      },
      {
        resourceId: 37,
        summarySlug:
          'coding-with-agents/black-hat-usa-2026-the-breaking-news-the-openai-hugging-face-incident',
        audience:
          'Security teams reviewing containment and shared-service boundaries',
      },
      {
        resourceId: 101,
        summarySlug: 'google-cloud/workload-identity-federation-best-practices',
        audience: 'Security reviewers hardening workload trust',
      },
    ],
  },
} satisfies CatalogCuration;

export const aiCuration = {
  assessmentsByResourceId: {
    23: {
      tier: 'essential',
      reason:
        'Offers a broad conceptual route through representations and evaluation, framed as a research notebook with speculative material.',
    },
    33: {
      tier: 'essential',
      reason:
        'Explains how to separate verifiable attributes from human preferences and preserve meaningful disagreement in evaluation.',
    },
    49: {
      tier: 'essential',
      reason:
        'Explains continual-learning mechanisms and limitations as a research proposal, not a demonstrated frontier-model replacement.',
    },
    127: {
      tier: 'essential',
      reason:
        'Distinguishes commitments, leases, funding, and guarantees in dated financial analysis rather than treating them all as ordinary debt.',
    },
    110: {
      tier: 'useful',
      reason:
        'Reconstructs a concrete agent failure sequence with scope corrections; it remains secondary analysis, not a new investigation.',
    },
    121: {
      tier: 'useful',
      reason:
        'Separates task reliability and useful-work evaluation from AGI labels, alongside speculative persistent-state discussion.',
    },
    107: {
      tier: 'useful',
      reason:
        'Offers a substantive argument about accessibility, research goals, ownership, and the choice to adopt AI.',
    },
    55: {
      tier: 'useful',
      reason:
        'Explains an organizational feedback-loop thesis while leaving consent, autonomous deployment, and productivity claims unresolved.',
    },
    129: {
      tier: 'useful',
      reason:
        'Develops a focused argument about AI and language-based institutions; its broader consequences are philosophical forecasts.',
    },
    128: {
      tier: 'useful',
      reason:
        'Adds legal-personhood and infrastructure-dependence questions to the discussion of AI governance.',
    },
    111: {
      tier: 'useful',
      reason:
        'Offers a task-versus-job distinction and builder perspective, with study references and forecasts not independently established here.',
    },
    134: {
      tier: 'useful',
      reason:
        'Presents a distinct risk-policy position; parameter limits and other proposed safeguards are not validated safety controls.',
    },
    108: {
      tier: 'context',
      reason:
        'Combines useful-work evaluation with model anecdotes and speculation, overlapping the fuller ZiP 5 discussion.',
    },
    52: {
      tier: 'context',
      reason:
        "Provides a company leader's adoption and research perspective rather than independent evidence of product or safety outcomes.",
    },
    119: {
      tier: 'context',
      reason:
        "Records OpenAI's product direction and company safety account, not a durable roadmap guarantee or independent evaluation.",
    },
    73: {
      tier: 'context',
      reason:
        'Explores adoption and company forecasts; its headline inference cost does not account for the full software lifecycle.',
    },
    123: {
      tier: 'context',
      reason:
        'Discusses research and learning implications through a secondhand mathematical result, not an independent assessment of the proof.',
    },
    131: {
      tier: 'context',
      reason:
        'Adds information-trust context while overlapping other Harari discussions and including non-AI political material.',
    },
    130: {
      tier: 'context',
      reason:
        'Includes distinct AI accountability counterarguments, but much of the full interview concerns politics and history.',
    },
    120: {
      tier: 'context',
      reason:
        'Focuses mainly on general founder advice, with limited additional AI insight beyond the adoption and economics resources.',
    },
  },
  startHere: {
    title: 'Selected perspectives',
    description:
      'Four viewpoints on AI economics, evaluation, learning, and institutions. These analyses, research proposals, and arguments are not a complete fundamentals curriculum.',
    entries: [
      {
        resourceId: 127,
        summarySlug: 'coding-with-agents/ais-hidden-debt-problem-explained',
        audience: 'Readers examining AI infrastructure obligations',
      },
      {
        resourceId: 33,
        summarySlug:
          'coding-with-agents/ending-ai-slop-thais-castello-branco-taste-labs',
        audience: 'Teams evaluating subjective output',
      },
      {
        resourceId: 49,
        summarySlug:
          'coding-with-agents/why-ai-models-stop-learning-rich-sutton-khurram-javed',
        audience: 'Readers exploring continual-learning proposals',
      },
      {
        resourceId: 129,
        summarySlug:
          'ai/yuval-noah-harari/ai-has-hacked-the-code-of-human-civilization',
        audience: 'Readers considering AI and institutional power',
      },
    ],
  },
} satisfies CatalogCuration;
