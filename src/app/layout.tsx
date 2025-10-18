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
;

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
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.title}`,
    description: SITE_CONFIG.description,
  },
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
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FontProvider>
            <TerminalProvider>

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
