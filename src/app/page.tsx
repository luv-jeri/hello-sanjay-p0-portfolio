import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { HeroNew } from "@/components/sections/hero-new"
import { SectionSkeleton } from "@/components/ui/section-skeleton"

// Lazy load heavy components
const SocialProofNew = dynamic(
  () => import('@/components/sections/social-proof-new').then(mod => ({ default: mod.SocialProofNew })),
  {
    loading: () => <SectionSkeleton height="h-32" />,
    ssr: true
  }
)

const ShowcaseNew = dynamic(
  () => import('@/components/sections/showcase-new').then(mod => ({ default: mod.ShowcaseNew })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

const ProjectsNew = dynamic(
  () => import('@/components/sections/projects-new').then(mod => ({ default: mod.ProjectsNew })),
  {
    loading: () => <SectionSkeleton height="h-96" />,
    ssr: true
  }
)

const ValuePropsNew = dynamic(
  () => import('@/components/sections/value-props-new').then(mod => ({ default: mod.ValuePropsNew })),
  {
    loading: () => <SectionSkeleton height="h-64" />,
    ssr: true
  }
)

const CTANew = dynamic(
  () => import('@/components/sections/cta-new').then(mod => ({ default: mod.CTANew })),
  {
    loading: () => <SectionSkeleton height="h-32" />,
    ssr: true
  }
)

// Only load Spotlight on desktop devices
const Spotlight = dynamic(
  () => import('@/components/ui/spotlight').then(mod => ({ default: mod.Spotlight })),
  {
    loading: () => null
  }
)

export default function Home() {
  return (
    <div className="relative">
      {/* Spotlight effect that follows cursor - lazy loaded and desktop only */}
      <Suspense fallback={null}>
        <Spotlight className="hidden lg:block" />
      </Suspense>

      {/* Hero loads immediately */}
      <HeroNew />

      {/* Lazy load remaining sections with Suspense */}
      <Suspense fallback={<SectionSkeleton height="h-32" />}>
        <SocialProofNew />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ShowcaseNew />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-96" />}>
        <ProjectsNew />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-64" />}>
        <ValuePropsNew />
      </Suspense>

      <Suspense fallback={<SectionSkeleton height="h-32" />}>
        <CTANew />
      </Suspense>
    </div>
  )
}
