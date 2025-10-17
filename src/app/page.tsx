import { Hero } from "@/components/sections/hero"
import { ValueProps } from "@/components/sections/value-props"
import { SocialProof } from "@/components/sections/social-proof"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ValueProps />
      <FeaturedProjects />
      <CTA />
    </>
  )
}
