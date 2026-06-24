import { memo, useMemo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import rehypeSanitize from 'rehype-sanitize';
import remarkGfm from 'remark-gfm';

type MarkdownRendererProps = {
  markdown: string;
};

function MarkdownRenderer({ markdown }: MarkdownRendererProps) {
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
              <svg
                className="inline-block w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            )}
          </a>
        );
      },
    }),
    [],
  );

  return (
    <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-pre:bg-gray-900 prose-pre:text-gray-100">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={components}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default memo(MarkdownRenderer);
