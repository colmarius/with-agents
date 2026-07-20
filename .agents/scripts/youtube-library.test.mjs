import assert from 'node:assert/strict';
import test from 'node:test';
import {
  libraryPath,
  loadCatalog,
  parseLibraryArgs,
  validateCatalog,
} from './lib/youtube-library-core.mjs';

const validCatalog = () => ({
  publication: 'source-only',
  authors: [
    {
      id: 'author',
      slug: 'author',
      displayName: 'Example Author',
    },
  ],
  playlists: [
    {
      id: 'playlist',
      slug: 'playlist',
      title: 'Example Playlist',
      transcriptLanguage: 'it',
      summaryLanguage: 'en',
    },
  ],
  relationships: [
    {
      authorId: 'author',
      playlistIds: ['playlist'],
    },
  ],
});

test('loads and validates the committed source-only catalog', async () => {
  const catalog = await loadCatalog();

  assert.equal(catalog.publication, 'source-only');
  assert.equal(catalog.authors[0].id, 'antirez');
  assert.equal(catalog.playlists.length, 2);
});

test('catalog validation requires the publication boundary', () => {
  const catalog = validCatalog();
  catalog.publication = 'public';

  assert.throws(
    () => validateCatalog(catalog),
    /publication must be "source-only"/,
  );
});

test('catalog validation rejects credentials', () => {
  const catalog = validCatalog();
  catalog.youtubeApiKey = 'do-not-store-credentials';

  assert.throws(
    () => validateCatalog(catalog),
    /credentials must come from the environment/,
  );
});

test('catalog validation rejects broken relationships', () => {
  const catalog = validCatalog();
  catalog.relationships[0].playlistIds = ['missing'];

  assert.throws(
    () => validateCatalog(catalog),
    /references an unknown playlist/,
  );
});

test('library paths cannot escape the fixed root', () => {
  assert.match(
    libraryPath('videos/8gg-oJr4dTY/transcript.md'),
    /src\/content\/youtube\/videos\/8gg-oJr4dTY\/transcript\.md$/,
  );
  assert.throws(() => libraryPath('../transcript.md'));
  assert.throws(() => libraryPath('/tmp/transcript.md'));
});

test('Task 1 CLI parsing exposes only command placeholders and help', () => {
  assert.deepEqual(parseLibraryArgs([]), { command: 'help' });
  assert.deepEqual(parseLibraryArgs(['sync']), { command: 'sync' });
  assert.deepEqual(parseLibraryArgs(['capture']), { command: 'capture' });
  assert.deepEqual(parseLibraryArgs(['status']), { command: 'status' });
  assert.throws(
    () => parseLibraryArgs(['sync', '--api-key', 'secret']),
    (error) =>
      error.message.includes('does not accept options') &&
      !error.message.includes('secret'),
  );
  assert.throws(() => parseLibraryArgs(['capture', '--output', '/tmp']));
});
