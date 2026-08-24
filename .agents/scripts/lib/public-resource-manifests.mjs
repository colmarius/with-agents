import { readdir } from 'node:fs/promises';
import path from 'node:path';

export const listPublicResourceManifestPaths = async (repoRoot) => {
  const directory = path.join(repoRoot, 'src/data/resources');
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }

  return entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.json'))
    .map((entry) => path.join(directory, entry.name))
    .sort((left, right) => left.localeCompare(right));
};
