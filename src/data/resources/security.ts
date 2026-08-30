import {
  type CatalogResource,
  validateResourceManifest,
} from './resource-manifest.ts';
import rawSecurityResources from './security.json' with { type: 'json' };

type SecurityResource = CatalogResource<string, string>;

export const validateSecurityResources = (value: unknown): SecurityResource[] =>
  validateResourceManifest(value, {
    label: 'Security',
    isTopic: (topic): topic is string =>
      typeof topic === 'string' && topic.length > 0,
    isSection: (section): section is string =>
      typeof section === 'string' && section.length > 0,
  });

export const securityResources =
  validateSecurityResources(rawSecurityResources);
