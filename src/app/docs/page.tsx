/* eslint-disable local-rules/no-hardcoded-strings */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BlurFade } from '@/components/ui/blur-fade';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  FileText,
  BookOpen,
  Terminal,
  FolderTree,
  Home,
  Info,
  Code2,
  FolderOpen,
  Search,
  X,
  Type,
  Sparkles,
} from 'lucide-react';

type DocCategory = 'all' | 'homepage' | 'terminal' | 'file-tree' | 'about' | 'typography' | 'customizer' | 'other';

type DocItem = {
  title: string;
  fileName: string;
  description: string;
  category: DocCategory;
  icon: React.ComponentType<{ className?: string }>;
  featured?: boolean;
};

const docs: DocItem[] = [
  {
    title: 'File Tree Quick Start',
    fileName: 'FILE_TREE_QUICK_START.md',
    description: 'Quick start guide for implementing the interactive file tree explorer',
    category: 'file-tree',
    icon: FolderTree,
    featured: true,
  },
  {
    title: 'File Tree Integration',
    fileName: 'FILE_TREE_INTEGRATION.md',
    description: 'Complete integration guide for the file tree component',
    category: 'file-tree',
    icon: FolderTree,
  },
  {
    title: 'File Tree Implementation Summary',
    fileName: 'FILE_TREE_IMPLEMENTATION_SUMMARY.md',
    description: 'Summary of the file tree implementation approach',
    category: 'file-tree',
    icon: FolderTree,
  },
  {
    title: 'Terminal Quick Start',
    fileName: 'TERMINAL_QUICK_START.md',
    description: 'Get started with the interactive terminal component',
    category: 'terminal',
    icon: Terminal,
    featured: true,
  },
  {
    title: 'Terminal Integration',
    fileName: 'TERMINAL_INTEGRATION.md',
    description: 'Integration guide for the terminal overlay feature',
    category: 'terminal',
    icon: Terminal,
  },
  {
    title: 'Terminal Implementation Summary',
    fileName: 'TERMINAL_IMPLEMENTATION_SUMMARY.md',
    description: 'Overview of terminal implementation details',
    category: 'terminal',
    icon: Terminal,
  },
  {
    title: 'Homepage Quick Start',
    fileName: 'HOMEPAGE_QUICK_START.md',
    description: 'Quick start guide for the new homepage design',
    category: 'homepage',
    icon: Home,
    featured: true,
  },
  {
    title: 'Homepage Implementation Summary',
    fileName: 'HOMEPAGE_IMPLEMENTATION_SUMMARY.md',
    description: 'Detailed implementation summary of homepage features',
    category: 'homepage',
    icon: Home,
  },
  {
    title: 'New Homepage Documentation',
    fileName: 'NEW_HOMEPAGE_DOCUMENTATION.md',
    description: 'Complete documentation for the redesigned homepage',
    category: 'homepage',
    icon: Home,
  },
  {
    title: 'About Page Redesign',
    fileName: 'ABOUT_PAGE_REDESIGN.md',
    description: 'Redesign documentation for the about page',
    category: 'about',
    icon: Info,
  },
  {
    title: 'About Page Summary',
    fileName: 'ABOUT_PAGE_SUMMARY.md',
    description: 'Summary of about page implementation',
    category: 'about',
    icon: Info,
  },
  {
    title: 'Implementation Guide',
    fileName: 'IMPLEMENTATION_GUIDE.md',
    description: 'General implementation guide and best practices',
    category: 'other',
    icon: BookOpen,
  },
  {
    title: 'Audit Report',
    fileName: 'AUDIT_REPORT.md',
    description: 'Comprehensive audit report of the portfolio',
    category: 'other',
    icon: FileText,
  },
  {
    title: 'Deliverables Summary',
    fileName: 'DELIVERABLES_SUMMARY.md',
    description: 'Summary of all project deliverables',
    category: 'other',
    icon: FileText,
  },
  {
    title: 'Final Summary',
    fileName: 'FINAL_SUMMARY.md',
    description: 'Final project summary and overview',
    category: 'other',
    icon: FileText,
  },
  {
    title: 'String Centralization',
    fileName: 'STRING_CENTRALIZATION_COMPLETE.md',
    description: 'Complete guide to string centralization implementation',
    category: 'other',
    icon: Code2,
  },
  {
    title: 'String Centralization README',
    fileName: 'README_STRING_CENTRALIZATION.md',
    description: 'README for string centralization approach',
    category: 'other',
    icon: Code2,
  },
  {
    title: 'Code Block Examples',
    fileName: 'EXAMPLE_CODE_BLOCKS.md',
    description: 'Interactive examples showcasing premium code block features',
    category: 'other',
    icon: Code2,
    featured: true,
  },
  {
    title: 'Code Block Implementation',
    fileName: 'CODE_BLOCK_IMPLEMENTATION.md',
    description: 'Complete implementation guide for premium code blocks',
    category: 'other',
    icon: Code2,
  },
  // Typography Documentation
  {
    title: 'Typography Quick Start',
    fileName: 'TYPOGRAPHY_QUICK_START.md',
    description: 'Quick start guide for the typography system',
    category: 'typography',
    icon: Type,
    featured: true,
  },
  {
    title: 'Typography System',
    fileName: 'TYPOGRAPHY_SYSTEM.md',
    description: 'Complete typography system documentation and architecture',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Audit & Fix',
    fileName: 'TYPOGRAPHY_AUDIT_AND_FIX.md',
    description: 'Detailed audit report of font issues and fixes applied',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Fix & Enhancement',
    fileName: 'TYPOGRAPHY_FIX_AND_ENHANCEMENT.md',
    description: 'Bug fixes and enhancements to the typography system',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Migration Guide',
    fileName: 'TYPOGRAPHY_MIGRATION_GUIDE.md',
    description: 'Guide for migrating to the new typography system',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Visual Test Guide',
    fileName: 'TYPOGRAPHY_VISUAL_TEST_GUIDE.md',
    description: 'Visual testing checklist for typography features',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Hooks Fix',
    fileName: 'TYPOGRAPHY_HOOKS_FIX.md',
    description: 'React Hooks compliance fix documentation',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Complete Summary',
    fileName: 'TYPOGRAPHY_COMPLETE.md',
    description: 'Complete summary of typography implementation',
    category: 'typography',
    icon: Type,
  },
  {
    title: 'Typography Fix Complete',
    fileName: 'TYPOGRAPHY_FIX_COMPLETE.md',
    description: 'Final summary of all typography fixes',
    category: 'typography',
    icon: Type,
  },
  // Customizer Documentation
  {
    title: 'Customizer Dock Implementation',
    fileName: 'CUSTOMIZER_DOCK_IMPLEMENTATION.md',
    description: 'Complete guide to the customization dock system',
    category: 'customizer',
    icon: Sparkles,
    featured: true,
  },
  {
    title: 'Customizer Dock Complete',
    fileName: 'CUSTOMIZER_DOCK_COMPLETE.md',
    description: 'Summary of customizer dock features and implementation',
    category: 'customizer',
    icon: Sparkles,
  },
];

const categories = [
  { id: 'all' as DocCategory, label: 'All Docs', icon: FolderOpen },
  { id: 'homepage' as DocCategory, label: 'Homepage', icon: Home },
  { id: 'typography' as DocCategory, label: 'Typography', icon: Type },
  { id: 'customizer' as DocCategory, label: 'Customizer', icon: Sparkles },
  { id: 'terminal' as DocCategory, label: 'Terminal', icon: Terminal },
  { id: 'file-tree' as DocCategory, label: 'File Tree', icon: FolderTree },
  { id: 'about' as DocCategory, label: 'About Page', icon: Info },
  { id: 'other' as DocCategory, label: 'Other', icon: BookOpen },
];

export default function DocsPage() {
  const [selectedCategory, setSelectedCategory] = useState<DocCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter by category and search query
  const filteredDocs = docs.filter((doc) => {
    // Category filter
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;

    // Search filter (searches in title, description, and fileName)
    const matchesSearch = searchQuery.trim() === '' ||
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.fileName.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const featuredDocs = docs.filter((doc) => doc.featured);

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-8">
          <BlurFade delay={0.1}>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
              <h1 className="text-4xl font-bold">Documentation</h1>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore detailed implementation guides, quick start tutorials, and technical
              documentation for all features built in this portfolio.
            </p>
          </BlurFade>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <BlurFade delay={0.15}>
          <div className="mb-8 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search documentation by title, description, or filename..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-10 h-12 text-base"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            {/* Search Results Count */}
            {searchQuery && (
              <div className="mt-3 text-sm text-muted-foreground">
                Found <strong className="text-foreground">{filteredDocs.length}</strong> {filteredDocs.length === 1 ? 'result' : 'results'} for "{searchQuery}"
              </div>
            )}
          </div>
        </BlurFade>

        {/* Featured Docs */}
        {selectedCategory === 'all' && !searchQuery && (
          <BlurFade delay={0.2}>
            <section className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <h2 className="text-2xl font-bold">Featured Guides</h2>
                <Badge variant="secondary">Quick Start</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredDocs.map((doc, index) => {
                  const Icon = doc.icon;
                  return (
                    <BlurFade key={doc.fileName} delay={0.3 + index * 0.1}>
                      <div className="group relative overflow-hidden rounded-lg border bg-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 text-primary">
                            <Icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                              {doc.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              {doc.description}
                            </p>
                            <Link href={`/docs/${doc.fileName}`}>
                              <Button
                                variant="link"
                                className="p-0 h-auto"
                              >
                                Read Guide →
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </BlurFade>
                  );
                })}
              </div>
            </section>
          </BlurFade>
        )}

        {/* Category Filter */}
        <BlurFade delay={0.4}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <Button
                  key={category.id}
                  variant={isActive ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </BlurFade>

        {/* All Documentation */}
        <BlurFade delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDocs.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <BlurFade key={doc.fileName} delay={0.5 + index * 0.05}>
                  <div className="group relative overflow-hidden rounded-lg border bg-card p-5 hover:shadow-md transition-all duration-200 hover:border-primary/50">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-md bg-muted">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium mb-1 group-hover:text-primary transition-colors line-clamp-1">
                          {doc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {doc.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge variant="outline" className="text-xs">
                            {doc.fileName}
                          </Badge>
                          <Link href={`/docs/${doc.fileName}`}>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-auto py-1 px-2 text-xs"
                            >
                              View
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </BlurFade>

        {/* Empty State */}
        {filteredDocs.length === 0 && (
          <BlurFade delay={0.3}>
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No documentation found</h3>
              <p className="text-muted-foreground mb-4">
                {searchQuery
                  ? `No results found for "${searchQuery}"`
                  : 'Try selecting a different category'
                }
              </p>
              {(searchQuery || selectedCategory !== 'all') && (
                <div className="flex gap-2 justify-center">
                  {searchQuery && (
                    <Button variant="outline" size="sm" onClick={clearSearch}>
                      Clear search
                    </Button>
                  )}
                  {selectedCategory !== 'all' && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedCategory('all')}
                    >
                      View all categories
                    </Button>
                  )}
                </div>
              )}
            </div>
          </BlurFade>
        )}
      </div>
    </div>
  );
}
