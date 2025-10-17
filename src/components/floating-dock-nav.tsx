"use client"

import React from "react"
import { FloatingDock } from "@/components/ui/floating-dock"
import {
  IconHome,
  IconBriefcase,
  IconCode,
  IconUser,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDownload,
} from "@tabler/icons-react"
import { SITE_CONFIG } from "@/lib/constants"

export function FloatingDockNav() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },
    {
      title: "Projects",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/experience",
    },
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Resume",
      icon: (
        <IconFileDownload className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/resume.pdf",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SITE_CONFIG.social.linkedin,
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: SITE_CONFIG.social.github,
    },
  ]

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <FloatingDock items={links} />
    </div>
  )
}
