import { HeroNew } from "@/components/sections/hero-new"
import { SocialProofNew } from "@/components/sections/social-proof-new"
import { ShowcaseNew } from "@/components/sections/showcase-new"
import { ProjectsNew } from "@/components/sections/projects-new"
import { ValuePropsNew } from "@/components/sections/value-props-new"
import { CTANew } from "@/components/sections/cta-new"
import { Spotlight } from "@/components/ui/spotlight"

export default function Home() {
  return (
    <div className="relative">
      {/* Spotlight effect that follows cursor */}
      <Spotlight className="hidden md:block" />

      <HeroNew />
      <SocialProofNew />
      <ShowcaseNew />
      <ProjectsNew />
      <ValuePropsNew />
      <CTANew />
    </div>
  )
}
