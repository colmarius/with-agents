import { getCollection, getEntry } from 'astro:content';
import type { APIRoute } from 'astro';
import {
  decodeSummarySlug,
  encodeSummarySlug,
} from '../../../components/resources/summaryResolver';

export const prerender = true;

export async function getStaticPaths() {
  const entries = await getCollection('summaries');
  return entries.map((e) => ({
    params: { slug: encodeSummarySlug(e.id) },
  }));
}

export const GET: APIRoute = async ({ params }) => {
  const slug = decodeSummarySlug(params.slug ?? '');
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
      collection: data.collection ?? null,
      body,
    }),
    {
      headers: {
        'content-type': 'application/json; charset=utf-8',
      },
    },
  );
};
