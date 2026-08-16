import type { ReactNode } from 'react';

type Props = {
  title: string;
  badge?: ReactNode;
  description: string;
  metadata?: ReactNode;
  children?: ReactNode;
};

export default function ResourceListItem({
  title,
  badge,
  description,
  metadata,
  children,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:border-gray-300 transition-all duration-200 group focus-within:ring-2 focus-within:ring-indigo-600/50 focus-within:ring-offset-2 focus-within:ring-offset-white">
      <div className="flex-1 flex flex-col gap-3 md:gap-4">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-medium text-gray-900">{title}</h3>
          {badge}
        </div>
        {metadata}
        <p className="text-gray-600 leading-relaxed">{description}</p>
        {children && <div className="flex flex-wrap gap-2">{children}</div>}
      </div>
    </div>
  );
}
