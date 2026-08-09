import type { CodingResource } from '../../types/resources.ts';
import rawCodingResources from './coding-with-agents.json' with {
  type: 'json',
};
import { isResourceSectionKey } from './sections.ts';

export const validateCodingResources = (value: unknown): CodingResource[] => {
  if (!Array.isArray(value)) {
    throw new TypeError('Coding with Agents resources must be an array');
  }

  return value.map((resource, index) => {
    if (
      typeof resource !== 'object' ||
      resource === null ||
      !isResourceSectionKey(
        (resource as Record<string, unknown>).primarySection,
      )
    ) {
      const primarySection =
        typeof resource === 'object' && resource !== null
          ? (resource as Record<string, unknown>).primarySection
          : undefined;
      throw new TypeError(
        `Coding with Agents resource $[${index}] has invalid primarySection ${JSON.stringify(primarySection)}`,
      );
    }

    return resource as CodingResource;
  });
};

export const codingResources = validateCodingResources(rawCodingResources);
