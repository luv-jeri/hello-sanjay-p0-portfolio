"use client"

import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, Briefcase, Mail, Download, Github, Linkedin } from "lucide-react"

export function FloatingDockWrapper() {
  const items = [
    {
      title: "Home",
      icon: <Home className="h-5 w-5" />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <Briefcase className="h-5 w-5" />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <Mail className="h-5 w-5" />,
      href: "/contact",
    },
    {
      title: "Resume",
      icon: <Download className="h-5 w-5" />,
      href: "/resume.pdf",
      external: true,
    },
    {
      title: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com", // Placeholder - update with your actual GitHub URL
      external: true,
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/luv-jeri",
      external: true,
    },
  ]

  return (
    <FloatingDock
      items={items}
      desktopClassName="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      mobileClassName="fixed bottom-4 right-4 z-50"
    />
  )
}
