import { getCollection, getEntry } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = true;

export async function getStaticPaths() {
  const entries = await getCollection('summaries');
  return entries.map((e) => ({
    params: { slug: e.id.replace(/\//g, '__') },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug?.replace(/__/g, '/') || '';
  const entry = await getEntry('summaries', slug);

  if (!entry) {
    return new Response('Not Found', { status: 404 });
  }

  const { data, body } = entry;

  return new Response(
    JSON.stringify({
      slug,
      title: data.title,
      date: data.date ?? null,
      series: data.series ?? null,
      episode: data.episode ?? null,
      body,
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    },
  );
};
