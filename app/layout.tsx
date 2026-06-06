import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Providers } from "./providers"
import "../src/index.css"

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://ionnetix.com").replace(/\/$/, "")
const siteName = "Ionnetix Technologies"
const defaultTitle = "IT Services, Automation, and Digital Solutions"
const defaultDescription = "Ionnetix Technologies helps businesses grow with modern IT services, automation, and digital product solutions."

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${defaultTitle}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | ${defaultTitle}`,
    description: defaultDescription,
    url: "/",
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicon.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ${defaultTitle}`,
    description: defaultDescription,
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/favicon.png`,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}