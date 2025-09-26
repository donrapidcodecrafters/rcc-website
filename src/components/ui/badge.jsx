import React from 'react';
import clsx from 'clsx';

export function Badge({ className, variant, ...props }) {
  const baseClasses = 'inline-flex items-center border rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2';

  const variantClasses = {
    default: 'bg-primary hover:bg-primary/80 border-transparent text-primary-foreground',
    secondary: 'bg-secondary hover:bg-secondary/80 border-transparent text-secondary-foreground',
    destructive: 'bg-destructive hover:bg-destructive/80 border-transparent text-destructive-foreground',
    outline: 'text-foreground',
  };

  return <div className={clsx(baseClasses, variantClasses[variant] || variantClasses.default, className)} {...props} />;
}