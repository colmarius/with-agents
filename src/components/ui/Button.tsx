import { clsx } from 'clsx';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md';

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseButtonProps &
  ComponentPropsWithoutRef<'button'> & {
    as?: 'button';
  };

type ButtonAsLink = BaseButtonProps &
  ComponentPropsWithoutRef<'a'> & {
    as: 'a';
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const getVariantStyles = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-gray-900 text-white hover:bg-gray-800 focus-visible:ring-indigo-600/50';
    case 'secondary':
      return 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 focus-visible:ring-indigo-600/50';
    case 'ghost':
      return 'text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus-visible:ring-indigo-600/50';
    default:
      return '';
  }
};

const getSizeStyles = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'px-3 py-1.5 text-sm';
    case 'md':
      return 'px-4 py-2 text-base';
    default:
      return '';
  }
};

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors cursor-pointer';

export function Button({
  variant = 'primary',
  size = 'sm',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const combinedClassName = twMerge(
    clsx(baseStyles, getVariantStyles(variant), getSizeStyles(size), className),
  );

  if (props.as === 'a') {
    const { as: _as, ...linkProps } = props;
    return (
      <a {...linkProps} className={combinedClassName}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button type="button" {...buttonProps} className={combinedClassName}>
      {children}
    </button>
  );
}
