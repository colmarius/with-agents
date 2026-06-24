import { Button } from './Button';
import { ChevronDownIcon } from './ChevronDownIcon';

type Props = {
  label: string;
  isOpen: boolean;
  onClick: () => void;
  className?: string;
};

export function CollapsibleButton({
  label,
  isOpen,
  onClick,
  className = '',
}: Props) {
  return (
    <Button
      variant="secondary"
      size="sm"
      onClick={onClick}
      aria-expanded={isOpen}
      className={`w-full justify-between px-3 py-2 bg-gray-50 hover:bg-gray-100 text-sm text-gray-700 ${className}`}
    >
      <span>{label}</span>
      <ChevronDownIcon
        className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
      />
    </Button>
  );
}
