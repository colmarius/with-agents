import { type CodingResource, resourceTopics } from '../../types/resources.ts';
import rawCodingResources from './coding-with-agents.json' with {
  type: 'json',
};
import { validateResourceManifest } from './resource-manifest.ts';
import { isResourceSectionKey } from './sections.ts';

const resourceTopicSet = new Set<string>(resourceTopics);

export const validateCodingResources = (value: unknown): CodingResource[] => {
  return validateResourceManifest(value, {
    label: 'Coding with Agents',
    isTopic: (topic): topic is CodingResource['topics'][number] =>
      typeof topic === 'string' && resourceTopicSet.has(topic),
    isSection: isResourceSectionKey,
  });
};

export const codingResources = validateCodingResources(rawCodingResources);
