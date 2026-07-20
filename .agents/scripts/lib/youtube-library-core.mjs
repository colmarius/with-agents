import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { resolveContainedPath, rootDir } from './youtube-transcript-core.mjs';

export const libraryRoot = path.join(rootDir, 'src/content/youtube');
export const catalogPath = resolveContainedPath(libraryRoot, 'catalog.json');

const commandNames = new Set(['capture', 'help', 'status', 'sync']);
const forbiddenCredentialKey =
  /^(?:api[-_]?key|credentials?|secrets?|youtube[-_]?api[-_]?key)$/i;

const assertObject = (value, name) => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${name} must be an object.`);
  }
};

const assertNonEmptyString = (value, name) => {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`${name} must be a non-empty string.`);
  }
};

const assertNoCredentials = (value, location = 'catalog') => {
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      assertNoCredentials(item, `${location}[${index}]`);
    });
    return;
  }

  if (value === null || typeof value !== 'object') {
    return;
  }

  for (const [key, nested] of Object.entries(value)) {
    if (forbiddenCredentialKey.test(key)) {
      throw new Error(
        `${location}.${key} is not allowed; credentials must come from the environment.`,
      );
    }
    assertNoCredentials(nested, `${location}.${key}`);
  }
};

const assertUnique = (values, name) => {
  if (new Set(values).size !== values.length) {
    throw new Error(`${name} values must be unique.`);
  }
};

export const validateCatalog = (catalog) => {
  assertObject(catalog, 'catalog');
  assertNoCredentials(catalog);

  if (catalog.publication !== 'source-only') {
    throw new Error('catalog.publication must be "source-only".');
  }

  for (const key of ['authors', 'playlists', 'relationships']) {
    if (!Array.isArray(catalog[key])) {
      throw new Error(`catalog.${key} must be an array.`);
    }
  }

  catalog.authors.forEach((author, index) => {
    assertObject(author, `catalog.authors[${index}]`);
    assertNonEmptyString(author.id, `catalog.authors[${index}].id`);
    assertNonEmptyString(author.slug, `catalog.authors[${index}].slug`);
    assertNonEmptyString(
      author.displayName,
      `catalog.authors[${index}].displayName`,
    );
  });

  catalog.playlists.forEach((playlist, index) => {
    assertObject(playlist, `catalog.playlists[${index}]`);
    for (const key of [
      'id',
      'slug',
      'title',
      'transcriptLanguage',
      'summaryLanguage',
    ]) {
      assertNonEmptyString(playlist[key], `catalog.playlists[${index}].${key}`);
    }
  });

  assertUnique(
    catalog.authors.map((author) => author.id),
    'Author ID',
  );
  assertUnique(
    catalog.authors.map((author) => author.slug),
    'Author slug',
  );
  assertUnique(
    catalog.playlists.map((playlist) => playlist.id),
    'Playlist ID',
  );
  assertUnique(
    catalog.playlists.map((playlist) => playlist.slug),
    'Playlist slug',
  );

  const authorIds = new Set(catalog.authors.map((author) => author.id));
  const playlistIds = new Set(catalog.playlists.map((playlist) => playlist.id));
  const relatedPlaylistIds = new Set();

  catalog.relationships.forEach((relationship, index) => {
    assertObject(relationship, `catalog.relationships[${index}]`);
    assertNonEmptyString(
      relationship.authorId,
      `catalog.relationships[${index}].authorId`,
    );
    if (!authorIds.has(relationship.authorId)) {
      throw new Error(
        `catalog.relationships[${index}].authorId references an unknown author.`,
      );
    }
    if (
      !Array.isArray(relationship.playlistIds) ||
      relationship.playlistIds.length === 0
    ) {
      throw new Error(
        `catalog.relationships[${index}].playlistIds must be a non-empty array.`,
      );
    }
    assertUnique(
      relationship.playlistIds,
      `catalog.relationships[${index}].playlistIds`,
    );

    for (const playlistId of relationship.playlistIds) {
      assertNonEmptyString(
        playlistId,
        `catalog.relationships[${index}].playlistIds entry`,
      );
      if (!playlistIds.has(playlistId)) {
        throw new Error(
          `catalog.relationships[${index}].playlistIds references an unknown playlist.`,
        );
      }
      relatedPlaylistIds.add(playlistId);
    }
  });

  for (const playlistId of playlistIds) {
    if (!relatedPlaylistIds.has(playlistId)) {
      throw new Error(`Playlist ${playlistId} has no author relationship.`);
    }
  }

  return catalog;
};

export const loadCatalog = async () => {
  let contents;
  try {
    contents = await readFile(catalogPath, 'utf8');
  } catch (error) {
    throw new Error(`Could not read ${catalogPath}: ${error.message}`);
  }

  let catalog;
  try {
    catalog = JSON.parse(contents);
  } catch (error) {
    throw new Error(`Could not parse ${catalogPath}: ${error.message}`);
  }

  return validateCatalog(catalog);
};

export const libraryPath = (relativePath) =>
  resolveContainedPath(libraryRoot, relativePath);

export const parseLibraryArgs = (argv) => {
  if (argv.length === 0) {
    return { command: 'help' };
  }

  if (argv[0] === '--help' || argv[0] === '-h') {
    if (argv.length > 1) {
      throw new Error('The help option does not accept arguments.');
    }
    return { command: 'help' };
  }

  const command = argv[0];
  if (!commandNames.has(command)) {
    throw new Error(`Unknown command: ${command}`);
  }

  if (argv.length > 1) {
    const extra = argv[1];
    const kind = extra.startsWith('-') ? 'options' : 'arguments';
    throw new Error(
      `Command ${command} does not accept ${kind} in the Task 1 skeleton.`,
    );
  }

  return { command };
};
