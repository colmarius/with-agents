import assert from 'node:assert/strict';
import test from 'node:test';
import {
  assertPostListParents,
  createPostStaticPaths,
  getFieldGuideListPath,
  getPostPath,
  getPostSlidesPath,
  isPostCanonicalPath,
  isPublicListedPost,
} from './posts.ts';

const post = {
  id: 'proof-first-agents',
  data: {
    context: 'security' as const,
    draft: false,
    unlisted: false,
  },
};

test('post paths preserve context ownership at every level', () => {
  assert.equal(getFieldGuideListPath('security'), '/security/posts');
  assert.equal(getPostPath(post), '/security/posts/proof-first-agents');
  assert.equal(
    getPostSlidesPath(post),
    '/security/posts/proof-first-agents/slides',
  );
});

test('canonical overrides remain inside the owning context', () => {
  assert.equal(
    isPostCanonicalPath(
      'coding',
      '/coding/posts/durable-context-coding-agents',
    ),
    true,
  );
  assert.equal(
    isPostCanonicalPath('coding', '/cloud/posts/durable-context'),
    false,
  );
  assert.equal(
    isPostCanonicalPath('coding', '/coding/posts/durable-context/slides'),
    false,
  );
  assert.equal(
    isPostCanonicalPath('coding', '/coding/posts/durable-context#slides'),
    false,
  );
});

test('production post routes exclude drafts but retain unlisted details', () => {
  const unlisted = {
    ...post,
    id: 'private-deck',
    data: { ...post.data, unlisted: true },
  };
  const draft = {
    ...post,
    id: 'draft-guide',
    data: { ...post.data, draft: true },
  };

  assert.deepEqual(
    createPostStaticPaths([post, unlisted, draft], true).map(
      ({ params }) => params,
    ),
    [
      { context: 'security', slug: 'proof-first-agents' },
      { context: 'security', slug: 'private-deck' },
    ],
  );
  assert.equal(createPostStaticPaths([post, unlisted, draft], false).length, 3);
});

test('every production post context has a listed field-guide parent', () => {
  const unlisted = {
    ...post,
    id: 'private-deck',
    data: { ...post.data, unlisted: true },
  };

  assert.doesNotThrow(() => assertPostListParents([post, unlisted], true));
  assert.doesNotThrow(() => assertPostListParents([unlisted], false));
  assert.throws(
    () => assertPostListParents([unlisted], true),
    /security: private-deck/,
  );
});

test('field-guide lists include only public listed posts', () => {
  assert.equal(isPublicListedPost(post), true);
  assert.equal(
    isPublicListedPost({ ...post, data: { ...post.data, draft: true } }),
    false,
  );
  assert.equal(
    isPublicListedPost({ ...post, data: { ...post.data, unlisted: true } }),
    false,
  );
});
