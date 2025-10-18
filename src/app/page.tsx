import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import { Hero } from "@/components/sections/hero"
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


export default function Home() {
  return (
    <div className="relative">

      {/* Hero loads immediately */}
      <Hero />

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
