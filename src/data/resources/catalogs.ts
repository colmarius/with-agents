import type {
  Resource,
  ResourceCatalog,
  ResourceSection,
  ResourceTopicOption,
} from '../../types/resources.ts';
import { codingResources } from './coding-with-agents.ts';
import { googleCloudResources } from './google-cloud.ts';
import { resourceSections } from './sections.ts';
import { securityResources } from './security.ts';

const codingTopicOptions = [
  { slug: 'prompting-orchestration', label: 'Prompting & orchestration' },
  { slug: 'context-memory', label: 'Context & memory' },
  { slug: 'tools-harnesses', label: 'Tools & harnesses' },
  { slug: 'review-verification', label: 'Review & verification' },
  {
    slug: 'architecture-maintainability',
    label: 'Architecture & maintainability',
  },
  { slug: 'collaboration-teams', label: 'Collaboration & teams' },
  { slug: 'safety-permissions', label: 'Safety & permissions' },
  { slug: 'open-source-ecosystem', label: 'Open source ecosystem' },
  { slug: 'models-evaluation', label: 'Models & evaluation' },
  { slug: 'business-adoption', label: 'Business & adoption' },
] as const satisfies readonly ResourceTopicOption[];

const cloudSections = [
  {
    key: 'foundations-platform',
    label: 'Foundations & Platform',
    description:
      'Core cloud concepts, provider services, resource organization, and platform choices.',
    routeSlug: 'foundations-platform',
  },
  {
    key: 'applications-serverless',
    label: 'Applications & Serverless',
    description:
      'Application platforms, serverless systems, delivery workflows, and runtime design.',
    routeSlug: 'applications-serverless',
  },
  {
    key: 'data-messaging',
    label: 'Data & Messaging',
    description:
      'Storage, databases, analytics, messaging, and event-driven architectures.',
    routeSlug: 'data-messaging',
  },
  {
    key: 'reliability-operations',
    label: 'Reliability & Operations',
    description:
      'Observability, service reliability, incident readiness, and production operations.',
    routeSlug: 'reliability-operations',
  },
  {
    key: 'architecture-case-studies',
    label: 'Architecture & Case Studies',
    description:
      'Reference architectures, system trade-offs, migrations, and real-world case studies.',
    routeSlug: 'architecture-case-studies',
  },
  {
    key: 'cost-governance',
    label: 'Cost & Governance',
    description:
      'FinOps, billing, resource governance, quotas, and cost-aware architecture.',
    routeSlug: 'cost-governance',
  },
  {
    key: 'security',
    label: 'Cloud Security',
    description:
      'Identity, data protection, threat detection, platform security, and compliance in cloud environments.',
    routeSlug: 'security',
  },
] as const satisfies readonly ResourceSection[];

const cloudTopicOptions = [
  { slug: 'gcp', label: 'Google Cloud' },
  { slug: 'architecture', label: 'Architecture' },
  { slug: 'serverless', label: 'Serverless' },
  { slug: 'data-messaging', label: 'Data & messaging' },
  { slug: 'reliability', label: 'Reliability' },
  { slug: 'observability', label: 'Observability' },
  { slug: 'finops', label: 'FinOps' },
  { slug: 'cloud-security', label: 'Cloud security' },
] as const satisfies readonly ResourceTopicOption[];

const securitySections = [
  {
    key: 'cloud-security',
    label: 'Cloud Security',
    description:
      'Security architecture, controls, and operations for cloud workloads and platforms.',
    routeSlug: 'cloud-security',
  },
  {
    key: 'identity-access',
    label: 'Identity & Access',
    description:
      'Identity systems, authentication, authorization, service accounts, and least privilege.',
    routeSlug: 'identity-access',
  },
  {
    key: 'data-protection',
    label: 'Data Protection',
    description:
      'Data classification, encryption, privacy, secrets, and sensitive-data controls.',
    routeSlug: 'data-protection',
  },
  {
    key: 'threat-detection-response',
    label: 'Threat Detection & Response',
    description:
      'Security monitoring, detection engineering, investigation, and incident response.',
    routeSlug: 'threat-detection-response',
  },
  {
    key: 'application-platform',
    label: 'Application & Platform Security',
    description:
      'Secure software, workloads, networks, infrastructure, and delivery systems.',
    routeSlug: 'application-platform',
  },
  {
    key: 'governance-compliance',
    label: 'Governance & Compliance',
    description:
      'Security governance, risk management, policy, assurance, and regulatory alignment.',
    routeSlug: 'governance-compliance',
  },
] as const satisfies readonly ResourceSection[];

const securityTopicOptions = [
  { slug: 'gcp', label: 'Google Cloud' },
  { slug: 'cloud-security', label: 'Cloud security' },
  { slug: 'identity-access', label: 'Identity & access' },
  { slug: 'data-protection', label: 'Data protection' },
  { slug: 'threat-detection', label: 'Threat detection' },
  { slug: 'application-security', label: 'Application security' },
  { slug: 'governance-compliance', label: 'Governance & compliance' },
] as const satisfies readonly ResourceTopicOption[];

export const resources: Resource[] = [
  ...codingResources,
  ...googleCloudResources,
  ...securityResources,
].map(({ primarySection: _primarySection, ...resource }) => resource);

const codingSectionByResourceId = Object.fromEntries(
  codingResources.map((resource) => [resource.id, resource.primarySection]),
);

const cloudResourceIds = [
  97, 98, 99, 62, 64, 66, 100, 59, 60, 61, 63, 68, 65, 67, 101, 57, 58,
];

const cloudSectionByResourceId = Object.fromEntries(
  googleCloudResources.map((resource) => [
    resource.id,
    resource.primarySection,
  ]),
);

const securityResourceIds = [98, 57, 100, 101, 102, 103, 105, 106, 58, 104];

const securitySectionByResourceId = {
  98: 'cloud-security',
  57: 'cloud-security',
  100: 'identity-access',
  101: 'identity-access',
  ...Object.fromEntries(
    securityResources.map((resource) => [resource.id, resource.primarySection]),
  ),
  58: 'threat-detection-response',
};

export const resourceCatalogs: readonly ResourceCatalog[] = [
  {
    slug: 'coding-with-agents',
    title: 'Coding with Agents',
    description:
      'Podcasts, videos, and playlists exploring AI-powered coding workflows, agentic design patterns, and the future of software development.',
    indexDescription:
      'Search practical coding-agent workflows, systems, reliability practices, and team experience.',
    sections: resourceSections,
    topicOptions: codingTopicOptions,
    resourceIds: codingResources.map((resource) => resource.id),
    sectionByResourceId: codingSectionByResourceId,
  },
  {
    slug: 'cloud',
    title: 'Cloud / GCP',
    description:
      'Cloud architecture, platforms, operations, data systems, cost, and provider-specific practice, beginning with Google Cloud.',
    indexDescription:
      'Build a grounded cloud practice across architecture, services, operations, reliability, and cost.',
    sections: cloudSections,
    topicOptions: cloudTopicOptions,
    resourceIds: cloudResourceIds,
    sectionByResourceId: cloudSectionByResourceId,
  },
  {
    slug: 'security',
    title: 'Security',
    description:
      'Security engineering across cloud, applications, identity, data, threat response, governance, and compliance.',
    indexDescription:
      'Study security as its own discipline while retaining links to cloud-specific controls and services.',
    sections: securitySections,
    topicOptions: securityTopicOptions,
    resourceIds: securityResourceIds,
    sectionByResourceId: securitySectionByResourceId,
  },
];

export const validateResourceCatalogs = (
  resourceValues: readonly Resource[],
  catalogValues: readonly ResourceCatalog[],
): void => {
  const resourceIds = resourceValues.map((resource) => resource.id);
  if (new Set(resourceIds).size !== resourceIds.length) {
    throw new Error('Canonical resource IDs must be unique');
  }

  const knownResourceIds = new Set(resourceIds);
  const catalogSlugs = catalogValues.map((catalog) => catalog.slug);
  if (new Set(catalogSlugs).size !== catalogSlugs.length) {
    throw new Error('Resource catalog slugs must be unique');
  }

  for (const catalog of catalogValues) {
    const prefix = `Resource catalog ${catalog.slug}`;
    const sectionKeys = catalog.sections.map((section) => section.key);
    const sectionSlugs = catalog.sections.map((section) => section.routeSlug);
    const topicSlugs = catalog.topicOptions.map((topic) => topic.slug);

    if (new Set(sectionKeys).size !== sectionKeys.length) {
      throw new Error(`${prefix} section keys must be unique`);
    }
    if (new Set(sectionSlugs).size !== sectionSlugs.length) {
      throw new Error(`${prefix} section route slugs must be unique`);
    }
    if (new Set(topicSlugs).size !== topicSlugs.length) {
      throw new Error(`${prefix} topic slugs must be unique`);
    }
    if (new Set(catalog.resourceIds).size !== catalog.resourceIds.length) {
      throw new Error(`${prefix} resource IDs must be unique`);
    }

    const knownSectionKeys = new Set(sectionKeys);
    const knownTopicSlugs = new Set(topicSlugs);
    for (const resourceId of catalog.resourceIds) {
      if (!knownResourceIds.has(resourceId)) {
        throw new Error(
          `${prefix} references unknown resource ID ${resourceId}`,
        );
      }
      const sectionKey = catalog.sectionByResourceId[resourceId];
      if (!knownSectionKeys.has(sectionKey)) {
        throw new Error(
          `${prefix} resource ID ${resourceId} has unknown section ${String(sectionKey)}`,
        );
      }
      const resource = resourceValues.find((entry) => entry.id === resourceId);
      const unknownTopic = resource?.topics.find(
        (topic) => !knownTopicSlugs.has(topic),
      );
      if (unknownTopic) {
        throw new Error(
          `${prefix} resource ID ${resourceId} has unknown topic ${unknownTopic}`,
        );
      }
    }

    for (const resourceId of Object.keys(catalog.sectionByResourceId).map(
      Number,
    )) {
      if (!catalog.resourceIds.includes(resourceId)) {
        throw new Error(
          `${prefix} has a section for non-member resource ID ${resourceId}`,
        );
      }
    }
  }
};

validateResourceCatalogs(resources, resourceCatalogs);

const resourceById = new Map(
  resources.map((resource) => [resource.id, resource]),
);

export const getCatalogResources = (
  catalog: ResourceCatalog,
  sectionKey?: string,
): Resource[] =>
  catalog.resourceIds
    .filter(
      (resourceId) =>
        sectionKey === undefined ||
        catalog.sectionByResourceId[resourceId] === sectionKey,
    )
    .map((resourceId) => {
      const resource = resourceById.get(resourceId);
      if (!resource) {
        throw new Error(
          `Resource catalog ${catalog.slug} references unknown resource ID ${resourceId}`,
        );
      }
      return resource;
    });

export const getResourceCatalog = (slug: string): ResourceCatalog | undefined =>
  resourceCatalogs.find((catalog) => catalog.slug === slug);
