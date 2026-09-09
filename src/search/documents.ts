export type SearchDocument = {
  id: string;
  url: string;
  title: string;
  parentTitle: string;
  description: string;
  body: string;
};

export type SearchPayload = { version: 1; documents: SearchDocument[] };

// Only canonical, origin-relative paths; reject encoded separators/control bytes too.
const safePath = (value: string) => {
  if (!value.startsWith('/') || /[\\?#\s]|%(?:2f|5c|25)/iu.test(value))
    return false;
  try {
    const decoded = decodeURIComponent(value);
    if (/[/\\]{2}|[\\?#\s\p{Cc}]/u.test(decoded)) return false;
    const url = new URL(value, 'https://search.invalid');
    return url.origin === 'https://search.invalid' && url.pathname === value;
  } catch {
    return false;
  }
};

export function validatePayload(value: unknown): SearchPayload {
  if (
    !value ||
    typeof value !== 'object' ||
    !('version' in value) ||
    value.version !== 1 ||
    !('documents' in value) ||
    !Array.isArray(value.documents) ||
    value.documents.length === 0
  ) {
    throw new Error('Invalid search payload');
  }
  const ids = new Set<string>();
  const urls = new Set<string>();
  for (const document of value.documents) {
    if (
      !document ||
      typeof document !== 'object' ||
      !['id', 'url', 'title', 'parentTitle', 'description', 'body'].every(
        (key) => typeof document[key] === 'string',
      )
    ) {
      throw new Error('Invalid search document');
    }
    if (
      !document.id.trim() ||
      !document.title.trim() ||
      !document.body.trim() ||
      !safePath(document.url) ||
      ids.has(document.id) ||
      urls.has(document.url.replace(/\/$/, '') || '/')
    ) {
      throw new Error('Invalid or duplicate search document');
    }
    ids.add(document.id);
    urls.add(document.url.replace(/\/$/, '') || '/');
  }
  return value as SearchPayload;
}
