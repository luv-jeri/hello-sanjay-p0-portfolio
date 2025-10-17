import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "7+ years across SaaS, EdTech, and EnergyTech. Built course and credential platforms; SSR, real‑time, and accessibility.",
  keywords: ["engineering bio", "full‑stack", "micro‑frontends", "accessibility", "performance"],
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

