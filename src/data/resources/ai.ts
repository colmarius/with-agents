import rawAiResources from './ai.json' with { type: 'json' };
import {
  type CatalogResource,
  validateResourceManifest,
} from './resource-manifest.ts';

type AiResource = CatalogResource<string, string>;

export const validateAiResources = (value: unknown): AiResource[] =>
  validateResourceManifest(value, {
    label: 'AI',
    isTopic: (topic): topic is string =>
      typeof topic === 'string' && topic.length > 0,
    isSection: (section): section is string =>
      typeof section === 'string' && section.length > 0,
  });

export const aiResources = validateAiResources(rawAiResources);
