export type SiteContext = {
  slug: string;
  navigationLabel: string;
  title: string;
  promise: string;
  description: string;
  catalogSlug: string;
  navigationPrefixes: readonly string[];
  focusAreas: readonly {
    title: string;
    description: string;
  }[];
  actions: readonly {
    href: string;
    label: string;
  }[];
};

export const siteContexts = [
  {
    slug: 'coding',
    navigationLabel: 'Coding',
    title: 'Coding with Agents',
    promise: 'Build better software with coding agents.',
    description:
      'Practical, source-backed guidance for scoping, briefing, coordinating, and verifying agent-assisted software work.',
    catalogSlug: 'coding-with-agents',
    navigationPrefixes: ['/coding', '/posts'],
    focusAreas: [
      {
        title: 'Brief the work',
        description:
          'Turn intent into bounded assignments with enough context, authority, and acceptance criteria.',
      },
      {
        title: 'Preserve context',
        description:
          'Keep decisions, constraints, and verification close to the repository so work survives the next thread.',
      },
      {
        title: 'Demand evidence',
        description:
          'Scale tests, real-system checks, and review to the risk and blast radius of each change.',
      },
    ],
    actions: [
      { href: '/posts', label: 'Browse posts' },
      {
        href: '/resources/coding-with-agents',
        label: 'Explore the resource catalog',
      },
    ],
  },
  {
    slug: 'cloud',
    navigationLabel: 'Cloud',
    title: 'Cloud / GCP',
    promise: 'Build and operate cloud systems with clearer context.',
    description:
      'Reviewed, source-backed guidance on cloud architecture, services, data systems, reliability, operations, and cost is being prepared, beginning with Google Cloud.',
    catalogSlug: 'cloud',
    navigationPrefixes: ['/cloud'],
    focusAreas: [
      {
        title: 'Platforms & architecture',
        description:
          'Cloud foundations, provider services, workload design, and architecture trade-offs.',
      },
      {
        title: 'Data & applications',
        description:
          'Data systems, messaging, serverless platforms, and application delivery.',
      },
      {
        title: 'Operations & governance',
        description:
          'Reliability, observability, cost, security, and production operations.',
      },
    ],
    actions: [
      { href: '/resources/cloud', label: 'View the Cloud resource catalog' },
    ],
  },
  {
    slug: 'security',
    navigationLabel: 'Security',
    title: 'Security',
    promise: 'Treat security as an engineering system.',
    description:
      'Reviewed, source-backed guidance across cloud security, applications, identity, data protection, threat response, governance, and compliance is being prepared.',
    catalogSlug: 'security',
    navigationPrefixes: ['/security'],
    focusAreas: [
      {
        title: 'Identity & data',
        description:
          'Authentication, authorization, least privilege, privacy, secrets, and data protection.',
      },
      {
        title: 'Applications & platforms',
        description:
          'Secure software, workloads, networks, infrastructure, and delivery systems.',
      },
      {
        title: 'Detection & governance',
        description:
          'Monitoring, investigation, incident response, risk, policy, and assurance.',
      },
    ],
    actions: [
      {
        href: '/resources/security',
        label: 'View the Security resource catalog',
      },
    ],
  },
] as const satisfies readonly SiteContext[];
