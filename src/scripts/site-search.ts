import type { SearchDocument } from '../search/documents';
import { validatePayload } from '../search/documents';

type EngineModule = typeof import('../search/engine');
type ReadySearch = {
  engine: Awaited<ReturnType<EngineModule['createSearch']>>;
  getExcerpt: EngineModule['getExcerpt'];
};

export function initializeSearch() {
  // Called by Search.astro after its markup has been parsed.
  const dialog = document.getElementById('site-search') as HTMLDialogElement;
  const input = document.getElementById(
    'site-search-input',
  ) as HTMLInputElement;
  const status = document.getElementById('site-search-status') as HTMLElement;
  const list = document.getElementById(
    'site-search-results',
  ) as HTMLOListElement;
  const more = dialog.querySelector('[data-search-more]') as HTMLButtonElement;
  const recovery = dialog.querySelector(
    '[data-search-recovery]',
  ) as HTMLElement;
  const triggers = document.querySelectorAll<HTMLButtonElement>(
    '[data-search-trigger]',
  );
  const development = dialog.dataset.development === 'true';
  let ready: ReadySearch | undefined;
  let loading: Promise<ReadySearch> | undefined;
  let failed = false;
  let revision = 0;
  let debounce: ReturnType<typeof setTimeout> | undefined;
  let opener: HTMLElement | null = null;
  let previousOverflow = '';
  let results: SearchDocument[] = [];
  let shown = 0;
  let resultQuery = '';

  function loadSearch(): Promise<ReadySearch> {
    if (ready) return Promise.resolve(ready);
    if (loading) return loading;
    const controller = new AbortController();
    let timeout: ReturnType<typeof setTimeout>;
    const deadline = new Promise<never>((_, reject) => {
      timeout = setTimeout(() => {
        controller.abort();
        reject(new Error('Search loading timed out'));
      }, 10_000);
    });
    const load = async () => {
      const [module, response] = await Promise.all([
        import('../search/engine'),
        fetch(dialog.dataset.corpusUrl as string, {
          signal: controller.signal,
          cache: 'reload',
        }),
      ]);
      if (!response.ok) throw new Error('Search data is unavailable');
      const payload = validatePayload(await response.json());
      controller.signal.throwIfAborted();
      const engine = await module.createSearch(payload.documents);
      controller.signal.throwIfAborted();
      return {
        engine,
        getExcerpt: module.getExcerpt,
      };
    };
    loading = Promise.race([load(), deadline])
      .then((value) => {
        ready = value;
        return value;
      })
      .finally(() => {
        clearTimeout(timeout);
        controller.abort();
        loading = undefined;
      });
    return loading;
  }

  function clearResults() {
    list.replaceChildren();
    results = [];
    shown = 0;
    more.hidden = true;
    recovery.hidden = true;
  }

  function showUnavailable() {
    clearResults();
    status.textContent =
      'Search is unavailable. Check your connection and try again, or reload this page.';
    recovery.hidden = false;
  }

  function appendResults() {
    if (!ready) return;
    const fragment = document.createDocumentFragment();
    for (const result of results.slice(shown, shown + 10)) {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = result.url;
      if (result.parentTitle && result.parentTitle !== result.title) {
        const parent = document.createElement('span');
        parent.className = 'search-result-parent';
        parent.textContent = result.parentTitle;
        link.append(parent);
      }
      const title = document.createElement('span');
      title.className = 'search-result-title';
      title.textContent = result.title;
      const excerpt = document.createElement('span');
      excerpt.className = 'search-result-excerpt';
      excerpt.textContent = ready.getExcerpt(result, resultQuery);
      link.append(title, excerpt);
      item.append(link);
      fragment.append(item);
    }
    list.append(fragment);
    shown = Math.min(shown + 10, results.length);
    more.hidden = shown >= results.length;
    status.textContent = `${results.length} ${results.length === 1 ? 'result' : 'results'} for “${resultQuery}”${shown < results.length ? ` · Showing ${shown}` : ''}`;
  }

  async function search() {
    const current = ++revision;
    clearResults();
    if (development) {
      status.textContent =
        'Search is available in the production preview. Run npm run build, then npm run preview.';
      return;
    }
    if (failed) {
      showUnavailable();
      return;
    }
    const query = input.value.trim();
    status.textContent = ready ? 'Searching…' : 'Loading search…';
    try {
      const loaded = await loadSearch();
      if (current !== revision || !dialog.open) return;
      if (!query) {
        status.textContent =
          'Search field guides and resources across the site.';
        return;
      }
      resultQuery = query;
      results = loaded.engine.search(query);
      if (!results.length) {
        status.textContent = `No results for “${query}”. Try another title or a few different words.`;
        return;
      }
      appendResults();
    } catch {
      if (current !== revision || !dialog.open) return;
      failed = true;
      showUnavailable();
    }
  }

  function openSearch() {
    if (dialog.open) return;
    opener =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    document.dispatchEvent(new Event('site-search:open'));
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    input.focus();
    void search();
  }

  for (const trigger of triggers) {
    trigger.addEventListener('click', openSearch);
    trigger.hidden = false;
  }
  dialog
    .querySelector('[data-search-close]')
    ?.addEventListener('click', () => dialog.close());
  dialog.addEventListener(
    'keydown',
    (event) => {
      if (event.key !== 'Escape' || event.isComposing) return;
      event.preventDefault();
      event.stopPropagation();
      dialog.close();
    },
    { capture: true },
  );
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (
      event.clientX < box.left ||
      event.clientX > box.right ||
      event.clientY < box.top ||
      event.clientY > box.bottom
    )
      dialog.close();
  });
  dialog.addEventListener('close', () => {
    ++revision;
    clearTimeout(debounce);
    document.body.style.overflow = previousOverflow;
    const usable = (element: HTMLElement | null) =>
      element &&
      element.getClientRects().length > 0 &&
      !element.closest('[hidden], [inert]');
    const target = usable(opener)
      ? opener
      : Array.from(triggers).find((trigger) => usable(trigger));
    target?.focus();
  });
  input.addEventListener('input', (event) => {
    ++revision;
    clearTimeout(debounce);
    clearResults();
    status.textContent = input.value.trim()
      ? 'Searching…'
      : 'Search field guides and resources across the site.';
    if (!(event instanceof InputEvent && event.isComposing))
      debounce = setTimeout(() => void search(), 200);
  });
  input.addEventListener('compositionend', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => void search(), 200);
  });
  dialog.querySelector('[data-search-retry]')?.addEventListener('click', () => {
    failed = false;
    input.focus();
    void search();
  });
  dialog
    .querySelector('[data-search-reload]')
    ?.addEventListener('click', () => window.location.reload());
  more.addEventListener('click', () => {
    const nextIndex = shown;
    appendResults();
    list.children[nextIndex]?.querySelector('a')?.focus();
  });
  document.addEventListener('keydown', (event) => {
    if (
      !(event.metaKey || event.ctrlKey) ||
      event.altKey ||
      event.shiftKey ||
      event.key.toLowerCase() !== 'k'
    )
      return;
    const target = event.target;
    if (
      target instanceof Element &&
      target.closest(
        'input, textarea, select, [contenteditable]:not([contenteditable="false"])',
      )
    )
      return;
    event.preventDefault();
    openSearch();
  });
}
