import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Skills",
  description: "Frontend, backend, cloud, and data skills with senior competencies.",
  keywords: ["TypeScript", "Module Federation", "SSR", "performance", "accessibility"],
}

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
