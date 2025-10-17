"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAVIGATION_ITEMS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function ResizableNavbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // Transform navbar height based on scroll
  const navHeight = useTransform(scrollY, [0, 100], [64, 48])
  const navPadding = useTransform(scrollY, [0, 100], [16, 8])
  const logoSize = useTransform(scrollY, [0, 100], [24, 20])

  return (
    <motion.header
      style={{
        height: navHeight,
      }}
      className="sticky top-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-sm"
    >
      <motion.nav
        style={{
          paddingTop: navPadding,
          paddingBottom: navPadding,
        }}
        className="container mx-auto flex items-center justify-between px-4"
      >
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            style={{ fontSize: logoSize }}
            className="font-bold"
          >
            SK
          </motion.span>
          <motion.span
            style={{ fontSize: useTransform(scrollY, [0, 100], [14, 12]) }}
            className="hidden font-medium md:inline-block"
          >
            Sanjay Kumar
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
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
          <motion.div
            style={{
              scale: useTransform(scrollY, [0, 100], [1, 0.9]),
            }}
          >
            <Button variant="outline" size="sm" className="hidden md:flex" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-foreground/10 bg-background md:hidden">
          <div className="container mx-auto flex flex-col space-y-3 px-4 py-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
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
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}
