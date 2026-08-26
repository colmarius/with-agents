import { memo, useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type MarkdownRendererProps = {
  markdown: string;
};

function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
  const normalizedMarkdown = useMemo(() => {
    const headingLevels = Array.from(
      markdown.matchAll(/^(#{1,6})\s/gm),
      (match) => match[1].length,
    );
    const firstHeadingLevel =
      headingLevels.length > 0 ? Math.min(...headingLevels) : 2;
    const headingOffset = Math.max(0, firstHeadingLevel - 2);

    if (headingOffset === 0) return markdown;

    return markdown.replace(
      /^(#{1,6})(\s)/gm,
      (_, hashes, spacing) => `${hashes.slice(headingOffset)}${spacing}`,
    );
  }, [markdown]);

  const components = useMemo<Components>(
    () => ({
      a: ({ children, href, ...props }) => {
        const isExternal = href?.startsWith('http');
        return (
          <a
            href={href}
            {...props}
            {...(isExternal && {
              target: '_blank',
              rel: 'noopener noreferrer',
            })}
            className="inline-flex items-center gap-1"
          >
            {children}
            {isExternal && (
              <>
                <span className="sr-only">(opens in a new tab)</span>
                <svg
                  className="inline-block w-4 h-4 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </>
            )}
          </a>
        );
      },
    }),
    [],
  );

  return (
    <div className="prose-post">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={components}
      >
        {normalizedMarkdown}
      </ReactMarkdown>
    </div>
  );
}

export default memo(MarkdownRenderer);
