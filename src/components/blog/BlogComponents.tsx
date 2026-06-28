import React from 'react';
import Image from 'next/image';

// import BlogCard from "./BlogCard";
import { CodeCopyButton } from './CodeCopyButton';

// export { BlogCard, BlogContent };
// Blog deshabilitado temporalmente
export const BlogComponents = {
  // Override default image component
  img: ({
    src,
    alt,
    className,
    width,
    height,
    ...props
  }: React.ComponentPropsWithoutRef<'img'>) => {
    if (!src || typeof src !== 'string') {
      return null;
    }

    const imageProps = props;

    return (
      <Image
        src={src}
        alt={alt ?? ''}
        width={typeof width === 'number' ? width : 1200}
        height={typeof height === 'number' ? height : 675}
        className={className ?? 'mb-4 rounded-2xl border border-border/70'}
        loading="lazy"
        style={{ width: '100%', height: 'auto' }}
        {...imageProps}
      />
    );
  },
  // Custom heading with better styling
  h1: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h1 className="mb-6 text-4xl font-black tracking-tight" {...props}>
      {children}
    </h1>
  ),
  h2: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h2 className="mb-4 mt-10 text-3xl font-semibold tracking-tight" {...props}>
      {children}
    </h2>
  ),
  h3: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <h3 className="mb-3 mt-8 text-2xl font-medium tracking-tight" {...props}>
      {children}
    </h3>
  ),
  // Custom paragraph styling
  p: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <p className="mb-5 leading-8 text-muted-foreground" {...props}>
      {children}
    </p>
  ),
  // Custom list styling
  ul: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ul className="mb-5 ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <ol className="mb-5 ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <li className="leading-7 text-muted-foreground" {...props}>
      {children}
    </li>
  ),
  pre: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => {
    const getTextContent = (node: React.ReactNode): string => {
      if (typeof node === 'string') {
        return node;
      }
      if (typeof node === 'number') {
        return String(node);
      }
      if (
        React.isValidElement(node) &&
        node.props &&
        typeof node.props === 'object'
      ) {
        return getTextContent(
          (node.props as { children?: React.ReactNode }).children,
        );
      }
      if (Array.isArray(node)) {
        return node.map(getTextContent).join('');
      }
      return '';
    };

    const codeText = getTextContent(children);

    return (
      <div className="group relative mb-4">
        <pre
          className="overflow-x-auto rounded-2xl border border-border/70 bg-muted/40 p-4 text-sm shadow-sm [&>code]:bg-transparent [&>code]:p-0"
          {...props}
        >
          {children}
        </pre>
        <CodeCopyButton code={codeText} />
      </div>
    );
  },
  // Inline code styling (not affected by syntax highlighting)
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
    [key: string]: unknown;
  }) => {
    // If it's part of a pre block (syntax highlighted), don't apply inline styling
    if (className?.includes('language-')) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    // Inline code styling
    return (
      <code className="rounded px-2 py-1 text-sm font-mono" {...props}>
        {children}
      </code>
    );
  },
  // Custom blockquote styling
  blockquote: ({
    children,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) => (
    <blockquote
      className="mb-5 rounded-r-2xl border-l-4 border-primary bg-primary/5 py-1 pl-4 italic text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
};
