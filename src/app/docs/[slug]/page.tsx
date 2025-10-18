'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ArrowLeft, Download } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { CodeBlock } from '@/components/docs/code-block';
import { CodeTabs } from '@/components/docs/code-tabs';
import { SmartLink } from '@/components/ui/smart-link';

type DocData = {
  content: string;
  mdx: MDXRemoteSerializeResult;
  title: string;
};

const getDocContent = async (slug: string): Promise<DocData | null> => {
  try {
    // Only log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[Docs] Fetching:', slug);
    }

    const response = await fetch(`/api/docs/${slug}`, {
      cache: 'no-store', // Ensure fresh data in development
    });

    if (!response.ok) {
      // Only log errors in development
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[Docs] Document not found: ${slug} (${response.status})`);
      }
      return null;
    }

    const data = await response.json();

    // Validate data structure
    if (!data.content || !data.mdx || !data.title) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('[Docs] Invalid data structure for:', slug);
      }
      return null;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[Docs] Successfully loaded:', data.title);
    }

    return data;
  } catch (error) {
    // Only log errors in development
    if (process.env.NODE_ENV === 'development') {
      console.error('[Docs] Fetch error:', error);
    }
    return null;
  }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable local-rules/no-hardcoded-strings */

type ComponentProps = {
  children?: React.ReactNode;
  className?: string;
  href?: string;
  [key: string]: any;
};

const components = {
  CodeBlock,
  CodeTabs,
  pre: ({ children, ...props }: ComponentProps) => {
    // Check if this is a code block that wasn't converted to CodeBlock
    if (React.isValidElement(children)) {
      const childProps = children.props as any;
      if (childProps?.className?.startsWith('language-')) {
        const language = childProps.className.replace('language-', '');
        const code = childProps.children;

        return (
          <CodeBlock
            code={typeof code === 'string' ? code : String(code || '')}
            language={language}
            showLineNumbers={language !== 'bash' && language !== 'sh'}
          />
        );
      }
    }

    // Fallback for non-code pre tags
    return (
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4 text-sm" {...props}>
        {children}
      </pre>
    );
  },
  code: ({ children, className, ...props }: ComponentProps) => {
    if (!className) {
      return (
        <code
          className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-foreground"
          {...props}
        >
          {children}
        </code>
      );
    }
    return <code className={className} {...props}>{children}</code>;
  },
  h1: ({ children }: ComponentProps) => (
    <h1 className="text-4xl font-bold mb-6 mt-8">{children}</h1>
  ),
  h2: ({ children }: ComponentProps) => (
    <h2 className="text-3xl font-bold mb-4 mt-8 border-b pb-2">{children}</h2>
  ),
  h3: ({ children }: ComponentProps) => (
    <h3 className="text-2xl font-bold mb-3 mt-6">{children}</h3>
  ),
  h4: ({ children }: ComponentProps) => (
    <h4 className="text-xl font-semibold mb-2 mt-4">{children}</h4>
  ),
  p: ({ children }: ComponentProps) => <p className="mb-4 leading-7">{children}</p>,
  ul: ({ children }: ComponentProps) => <ul className="list-disc ml-6 mb-4 space-y-2">{children}</ul>,
  ol: ({ children }: ComponentProps) => <ol className="list-decimal ml-6 mb-4 space-y-2">{children}</ol>,
  li: ({ children }: ComponentProps) => <li className="leading-7">{children}</li>,
  a: ({ href, children }: ComponentProps) => {
    if (!href) return <a>{children}</a>

    return (
      <SmartLink
        href={href}
        className="text-primary hover:underline font-medium"
      >
        {children}
      </SmartLink>
    )
  },
  blockquote: ({ children }: ComponentProps) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground">
      {children}
    </blockquote>
  ),
  table: ({ children }: ComponentProps) => (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }: ComponentProps) => (
    <th className="border px-4 py-2 bg-muted font-semibold text-left">{children}</th>
  ),
  td: ({ children }: ComponentProps) => (
    <td className="border px-4 py-2">{children}</td>
  ),
};

export default function DocPage() {
  const params = useParams();
  const router = useRouter();
  const [docData, setDocData] = useState<DocData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDoc = async () => {
      if (!params?.slug) return;

      try {
        const doc = await getDocContent(params.slug as string);
        if (!doc) {
          setError('Document not found');
          // Redirect after 3 seconds instead of 2
          setTimeout(() => router.push('/docs'), 3000);
          return;
        }
        setDocData(doc);
      } catch (err) {
        // Only log in development
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to load document:', err);
        }
        setError('Failed to load document');
        setTimeout(() => router.push('/docs'), 3000);
      } finally {
        setIsLoading(false);
      }
    };

    loadDoc();
  }, [params?.slug, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <div className="text-muted-foreground">Loading documentation...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2 text-foreground">{error}</h2>
            <p className="text-muted-foreground mb-6">
              The document you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Redirecting to docs in <span className="font-semibold">3 seconds</span>...
            </p>
          </div>
          <div className="flex gap-3 justify-center">
            <Link href="/docs">
              <Button>Browse Documentation</Button>
            </Link>
            <Link href="/">
              <Button variant="outline">Go Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!docData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/docs">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Docs
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:block">
                {docData.title}
              </span>
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => {
                  const blob = new Blob([docData.content], { type: 'text/markdown' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = params?.slug as string;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <article className="max-w-4xl mx-auto">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote {...docData.mdx} components={components} />
          </div>
        </article>
      </div>
    </div>
  );
}
