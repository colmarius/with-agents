import { mermaidConfig } from './mermaid-config';

const mermaidUrl =
  'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
const importMermaid = new Function('url', 'return import(url)') as (
  url: string,
) => Promise<
  typeof import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs')
>;

export async function renderMermaid() {
  // Prefer explicit language markers
  let codes = Array.from(
    document.querySelectorAll(
      'pre > code.language-mermaid, pre > code.lang-mermaid',
    ),
  );

  if (codes.length === 0) {
    // Fallback: keyword sniff
    codes = Array.from(document.querySelectorAll('pre > code')).filter(
      (code) => {
        const text = code.textContent?.trim() || '';
        return (
          text.startsWith('flowchart') ||
          text.startsWith('graph') ||
          text.startsWith('sequenceDiagram') ||
          text.startsWith('classDiagram') ||
          text.startsWith('stateDiagram') ||
          text.startsWith('erDiagram') ||
          text.startsWith('journey') ||
          text.startsWith('gantt') ||
          text.startsWith('pie') ||
          text.startsWith('gitGraph')
        );
      },
    );
  }

  if (codes.length === 0 && !document.querySelector('.mermaid')) return;

  for (const code of codes) {
    const pre = code.closest('pre');
    const div = document.createElement('div');
    div.className = 'mermaid mermaid-loading';
    div.textContent = code.textContent || '';
    pre?.replaceWith(div);
  }

  const { default: mermaid } = await importMermaid(mermaidUrl);
  mermaid.initialize(mermaidConfig);
  await mermaid.run({ querySelector: '.mermaid' });

  // Remove loading class from all mermaid elements (including pre-rendered/cloned ones)
  document.querySelectorAll('.mermaid-loading').forEach((el) => {
    el.classList.remove('mermaid-loading');
  });
}
