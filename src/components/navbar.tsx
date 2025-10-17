"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { ThemeToggleButton2 } from "@/components/ui/skiper-theme-toggles"
import {
  Navbar as ResizableNavbar,
  NavBody,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <ResizableNavbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo href="/">
          <span className="text-xl font-bold">SK</span>
          <span className="text-sm font-medium">Sanjay Kumar</span>
        </NavbarLogo>

        <div className="flex items-center gap-6">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <NavbarButton
            variant="secondary"
            as="a"
            href="/resume.pdf"
            download
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            Resume
          </NavbarButton>
          <ThemeToggleButton2 className="h-10 w-10 p-2" />
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo href="/">
            <span className="text-xl font-bold">SK</span>
            <span className="text-sm font-medium">Sanjay Kumar</span>
          </NavbarLogo>
          <div className="flex items-center gap-2">
            <ThemeToggleButton2 className="h-10 w-10 p-2" />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {NAVIGATION_ITEMS.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-foreground",
                pathname === item.href
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <span className="block">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-4 mt-2">
            <NavbarButton
              as="a"
              href="/resume.pdf"
              download
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full flex items-center gap-2 justify-center"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  )
}
