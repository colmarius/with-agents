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
    const passage = capture();
    active = false;
    marker.after(article);
    dialog.close();
    document.body.style.overflow = previousOverflow;
    opener.focus({ preventScroll: true });
    restore(passage);
    document.dispatchEvent(new Event('summary-reader:close'));
  };
  opener.hidden = false;
  opener.addEventListener('click', () => {
    if (active) return;
    const passage = capture();
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    content.append(article);
    active = true;
    dialog.showModal();
    const focusTarget = passage.block ?? panel;
    focusTarget.setAttribute('tabindex', '-1');
    focusTarget.focus({ preventScroll: true });
    if (focusTarget !== panel) {
      focusTarget.addEventListener(
        'blur',
        () => focusTarget.removeAttribute('tabindex'),
        { once: true },
      );
    }
    panel.scrollTop = 0;
    restore(passage);
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
