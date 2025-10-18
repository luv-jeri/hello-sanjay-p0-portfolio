import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TerminalProvider } from "@/components/terminal";
import { FontProvider } from "@/components/fonts";
import { CustomizerDock } from "@/components/customizer";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingDockNav } from "@/components/floating-dock-nav";
import { PersonSchema, WebSiteSchema } from "@/components/schema-markup";
import { SITE_CONFIG } from "@/lib/constants";
import { copy } from "@/content/copy";
import { Toaster } from "sonner";
import { jetbrainsMono } from "@/styles/fonts";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { WebVitalsReporter } from "@/components/web-vitals-reporter";

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: copy.seo.keywords,
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.description,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
    creator: '@hellosanjay',
    images: [`${SITE_CONFIG.url}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jetbrainsMono.variable}>
      <head>
        <PersonSchema />
        <WebSiteSchema />
        {/* DNS Prefetch for external domains */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://api.microlink.io" />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <WebVitalsReporter />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FontProvider>
            <TerminalProvider>
              <StickyBanner autoHideAfter={10000}>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="relative flex h-2 w-2 md:h-2.5 md:w-2.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-primary"></span>
                  </div>
                  <p className="text-xs md:text-sm font-medium text-foreground">
                    <span className="inline md:hidden">🚧 60% done</span>
                    <span className="hidden md:inline">🚧 Building in public — <span className="font-bold text-primary">60% complete</span></span>
                  </p>
                  <span className="text-xs text-foreground/60 hidden lg:inline">
                    Stay tuned!
                  </span>
                </div>
              </StickyBanner>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">{children}</main>
                <Footer />
                <FloatingDockNav />
              </div>
              <CustomizerDock />
              <Toaster position="bottom-right" richColors />
            </TerminalProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
