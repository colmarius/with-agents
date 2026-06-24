import type { ReactNode } from 'react';
import { Button, ExternalLinkIcon } from '../ui';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type Props = {
  image: {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
  };
  title: string;
  badge?: ReactNode;
  description: string;
  url?: string;
  linkText?: string;
  buttonVariant?: ButtonVariant;
  metadata?: ReactNode;
  children?: ReactNode;
  hideExternalLink?: boolean;
};

export default function ResourceListItem({
  image,
  title,
  badge,
  description,
  url,
  linkText,
  buttonVariant = 'secondary',
  metadata,
  children,
  hideExternalLink = false,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group focus-within:ring-2 focus-within:ring-indigo-600/50 focus-within:ring-offset-2 focus-within:ring-offset-white">
      {image.src && (
        <div className="flex-shrink-0">
          <img
            src={image.src}
            alt={image.alt}
            className={image.className}
            onError={(e) => {
              if (image.fallback) {
                e.currentTarget.src = image.fallback;
              }
            }}
          />
        </div>
      )}
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          {badge}
        </div>
        {metadata}
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {children && <div className="flex flex-wrap gap-2">{children}</div>}
        {!hideExternalLink && url && linkText && (
          <Button
            as="a"
            variant={buttonVariant}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${linkText} — ${title}`}
            className="mt-auto self-start group/button transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md focus-visible:ring-indigo-600/50 motion-reduce:transform-none motion-reduce:transition-none"
          >
            {linkText}
            <ExternalLinkIcon className="ml-2 h-4 w-4 shrink-0 transition-transform duration-200 group-hover/button:translate-x-0.5" />
            <span className="sr-only">(opens in a new tab)</span>
          </Button>
        )}
      </div>
    </div>
  );
}
