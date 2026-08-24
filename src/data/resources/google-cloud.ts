import rawGoogleCloudResources from './google-cloud.json' with { type: 'json' };
import {
  type CatalogResource,
  validateResourceManifest,
} from './resource-manifest.ts';

type GoogleCloudResource = CatalogResource<string, string>;

export const validateGoogleCloudResources = (
  value: unknown,
): GoogleCloudResource[] =>
  validateResourceManifest(value, {
    label: 'Google Cloud',
    isTopic: (topic): topic is string =>
      typeof topic === 'string' && topic.length > 0,
    isSection: (section): section is string =>
      typeof section === 'string' && section.length > 0,
  });

export const googleCloudResources = validateGoogleCloudResources(
  rawGoogleCloudResources,
);
