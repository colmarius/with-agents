export {};

const dialog = document.querySelector<HTMLDialogElement>(
  '[data-summary-reader]',
);
const opener = document.querySelector<HTMLButtonElement>('[data-reader-open]');
const article = opener?.closest('article');
const panel = dialog?.querySelector<HTMLElement>('[data-reader-panel]');
const content = dialog?.querySelector<HTMLElement>('[data-reader-content]');
const toolbar = dialog?.querySelector<HTMLElement>('[data-reader-toolbar]');
const exit = dialog?.querySelector<HTMLButtonElement>('[data-reader-exit]');

if (dialog && opener && article && panel && content && toolbar && exit) {
  const marker = document.createComment('summary location');
  article.before(marker);
  document.body.append(dialog);
  let active = false;
  let previousOverflow = '';
  let returnFocus: HTMLElement = opener;

  const capture = () => {
    const top = active ? toolbar.getBoundingClientRect().bottom : 0;
    const blocks = Array.from(
      article.querySelectorAll<HTMLElement>(
        'h1, header > p, .prose-post :is(h2, h3, p, li, pre, table)',
      ),
    );
    const visible = blocks.filter(
      (element) =>
        element.getClientRects().length &&
        element.getBoundingClientRect().bottom > top,
    );
    const block =
      visible.findLast(
        (element) => element.getBoundingClientRect().top <= top,
      ) ??
      visible[0] ??
      blocks[0];
    return {
      block,
      offset: block ? block.getBoundingClientRect().top - top : 0,
    };
  };
  const restore = ({ block, offset }: ReturnType<typeof capture>) => {
    if (!block) return;
    const top = active ? toolbar.getBoundingClientRect().bottom : 0;
    const delta = block.getBoundingClientRect().top - top - offset;
    if (active) panel.scrollTop += delta;
    else window.scrollBy({ top: delta, behavior: 'instant' });
  };
  const close = () => {
    if (!active) return;
    document.dispatchEvent(new Event('keyboard-shortcuts:close'));
    const passage = capture();
    active = false;
    marker.after(article);
    dialog.close();
    document.body.style.overflow = previousOverflow;
    const target =
      returnFocus.isConnected &&
      returnFocus.getClientRects().length &&
      !returnFocus.closest(
        '[hidden], [inert], :disabled, [data-scroll-back-nav-sticky]',
      )
        ? returnFocus
        : opener;
    target.focus({ preventScroll: true });
    restore(passage);
    document.dispatchEvent(new Event('summary-reader:close'));
  };
  opener.hidden = false;
  const open = (focusTarget: HTMLElement = opener) => {
    if (active) return;
    returnFocus = focusTarget;
    const passage = capture();
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    content.append(article);
    active = true;
    dialog.showModal();
    panel.focus({ preventScroll: true });
    panel.scrollTop = 0;
    restore(passage);
  };
  opener.addEventListener('click', () => open());
  document.addEventListener('keydown', (event) => {
    if (
      event.defaultPrevented ||
      event.repeat ||
      event.isComposing ||
      !event.ctrlKey ||
      !event.shiftKey ||
      event.altKey ||
      event.metaKey ||
      event.code !== 'KeyF'
    )
      return;
    const target = event.target;
    if (
      target instanceof HTMLElement &&
      (target.isContentEditable ||
        target.closest(
          'input, textarea, select, [contenteditable]:not([contenteditable="false"])',
        ))
    )
      return;
    if (
      Array.from(document.querySelectorAll('dialog[open]')).some(
        (other) => other !== dialog,
      ) ||
      document.querySelector('#mobile-menu-button[aria-expanded="true"]')
    )
      return;
    event.preventDefault();
    if (active) close();
    else {
      const focused = document.activeElement;
      open(
        focused instanceof HTMLElement &&
          focused.matches(
            'a[href], button, summary, [tabindex]:not([tabindex="-1"])',
          )
          ? focused
          : opener,
      );
    }
  });
  exit.addEventListener('click', close);
  dialog.addEventListener('cancel', (event) => {
    event.preventDefault();
    close();
  });
  dialog.addEventListener('close', () => {
    if (!dialog.open) close();
  });
  document.addEventListener('site-search:open', close);
  window.addEventListener('beforeprint', close);
}
