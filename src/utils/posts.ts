import type { SiteContextSlug } from '../data/site-contexts';

type ContextualPost = {
  id: string;
  data: {
    context: SiteContextSlug;
  };
};

type RoutablePost = ContextualPost & {
  data: {
    context: SiteContextSlug;
    draft: boolean;
  };
};

type ListedPost = RoutablePost & {
  data: {
    context: SiteContextSlug;
    draft: boolean;
    unlisted: boolean;
  };
};

export const getFieldGuideListPath = (context: SiteContextSlug) =>
  `/${context}/posts`;

export const getPostPath = (post: ContextualPost) =>
  `${getFieldGuideListPath(post.data.context)}/${post.id}`;

export const getPostSlidesPath = (post: ContextualPost) =>
  `${getPostPath(post)}/slides`;

export const isPostCanonicalPath = (
  context: SiteContextSlug,
  canonicalPath: string,
) => {
  const prefix = `${getFieldGuideListPath(context)}/`;
  const slug = canonicalPath.slice(prefix.length);

  return (
    canonicalPath.startsWith(prefix) &&
    slug.length > 0 &&
    !slug.includes('/') &&
    !slug.includes('?') &&
    !slug.includes('#')
  );
};

export const isPublicListedPost = (post: ListedPost) =>
  !post.data.draft && !post.data.unlisted;

export const assertPostListParents = (
  posts: ListedPost[],
  production: boolean,
) => {
  if (!production) return;

  const parentContexts = new Set(
    posts.filter(isPublicListedPost).map((post) => post.data.context),
  );
  const orphanedByContext = new Map<SiteContextSlug, string[]>();

  for (const post of posts) {
    if (post.data.draft || parentContexts.has(post.data.context)) continue;

    const orphanedIds = orphanedByContext.get(post.data.context) ?? [];
    orphanedIds.push(post.id);
    orphanedByContext.set(post.data.context, orphanedIds);
  }

  if (orphanedByContext.size === 0) return;

  const details = [...orphanedByContext]
    .map(([context, postIds]) => `${context}: ${postIds.join(', ')}`)
    .join('; ');
  throw new Error(
    `Published post routes require a listed field-guide parent (${details})`,
  );
};

export const createPostStaticPaths = <Post extends RoutablePost>(
  posts: Post[],
  production: boolean,
) =>
  (production ? posts.filter((post) => !post.data.draft) : posts).map(
    (post) => ({
      params: { context: post.data.context, slug: post.id },
      props: post,
    }),
  );
