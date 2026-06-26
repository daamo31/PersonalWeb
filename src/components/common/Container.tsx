import React from 'react';

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`container mx-auto max-w-6xl px-4 sm:px-6 lg:px-10 animate-fade-in-blur ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
