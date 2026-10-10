import { getCollection } from 'astro:content';
import { toManifestEntry } from '../components/resources/summaryResolver';
import { buildRecentAdditions } from '../utils/recent-additions';
import history from './recent-additions-history.json';
import { resourceCatalogs, resources } from './resources/catalogs';

export async function getRecentAdditions() {
  const [posts, summaries] = await Promise.all([
    getCollection('posts'),
    getCollection('summaries'),
  ]);
  return buildRecentAdditions({
    resources,
    catalogs: resourceCatalogs,
    posts,
    summaries: summaries.map((entry) => ({
      ...toManifestEntry(entry),
      addedDate: entry.data.addedDate,
    })),
    history,
  });
}
