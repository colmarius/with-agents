import MiniSearch from 'minisearch';
import type { SearchDocument } from './documents.ts';

export function createSearch(documents: SearchDocument[]) {
  const documentsById = new Map(
    documents.map((document) => [document.id, document]),
  );
  const index = new MiniSearch<SearchDocument>({
    fields: ['title', 'parentTitle', 'description', 'body'],
    searchOptions: {
      combineWith: 'AND',
      boost: { title: 5, parentTitle: 5, description: 2 },
      prefix: (_term, position, terms) => position === terms.length - 1,
    },
  });
  index.addAll(documents);
  return {
    search(query: string): SearchDocument[] {
      if (!query.trim()) return [];
      return index.search(query).map((result) => {
        const document = documentsById.get(String(result.id));
        if (!document) throw new Error('Search result missing its document');
        return document;
      });
    },
  };
}

export function getExcerpt(document: SearchDocument, query: string): string {
  const text = document.body.replace(/\s+/gu, ' ').trim();
  const terms = query.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
  const positions = terms
    .map((term) => text.toLowerCase().indexOf(term))
    .filter((position) => position >= 0);
  const match = positions.length ? Math.min(...positions) : -1;
  if (match < 0) return (document.description || text).slice(0, 220);
  let start = Math.max(0, match - 60);
  if (start > 0) start = text.lastIndexOf(' ', start) + 1;
  const end = Math.min(text.length, start + 220);
  return `${start > 0 ? '…' : ''}${text.slice(start, end).trim()}${end < text.length ? '…' : ''}`;
}
