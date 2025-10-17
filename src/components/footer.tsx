import Link from "next/link"
import { Github, Linkedin, Youtube, Mail } from "lucide-react"
import { SITE_CONFIG, NAVIGATION_ITEMS } from "@/lib/constants"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
              <p className="text-sm text-foreground/60">{SITE_CONFIG.title}</p>
            </div>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 transition-colors hover:text-foreground"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-foreground/60 transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Navigation</h4>
            <ul className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/skills"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Writing & Speaking
                </Link>
              </li>
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="text-sm text-foreground/60 transition-colors hover:text-foreground"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>{SITE_CONFIG.location}</li>
              <li>{SITE_CONFIG.timezone}</li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-foreground"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="hover:text-foreground"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-foreground/10 pt-8 text-center text-sm text-foreground/60">
          <p>
            © {currentYear} {SITE_CONFIG.name}. Built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
