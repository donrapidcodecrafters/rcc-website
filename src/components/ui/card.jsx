import React from 'react';
import clsx from 'clsx';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div ref__={ref} className={clsx('rounded-lg border bg-card text-card-foreground shadow-sm', className)} {...props} />
));

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref__={ref} className={clsx('flex flex-col space-y-1.5 p-6', className)} {...props} />
));

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3 ref__={ref} className={clsx('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
));

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref__={ref} className={clsx('p-6 pt-0', className)} {...props} />
));

export { Card, CardHeader, CardTitle, CardContent };