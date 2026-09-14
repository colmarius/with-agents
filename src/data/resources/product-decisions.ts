import rawProductResources from './product-decisions.json' with {
  type: 'json',
};
import { validateResourceManifest } from './resource-manifest.ts';

export const productResources = validateResourceManifest(rawProductResources, {
  label: 'Product & Decision-Making',
  isTopic: (topic): topic is string =>
    typeof topic === 'string' && topic.length > 0,
  isSection: (section): section is string =>
    typeof section === 'string' && section.length > 0,
});
