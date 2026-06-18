import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { getSiteUrl } from "@/lib/site-url"
import { Providers } from "./providers"
import "../src/index.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const siteUrl = getSiteUrl()
const siteName = "Ionnetix Technologies"
const defaultTitle = "Web Development & IT Services in Ahmedabad"
const defaultDescription = "Ionnetix Technologies is an Ahmedabad-based IT services company offering web development, app development, digital marketing, and website maintenance for businesses across India."

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
    url: siteUrl,
    siteName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/default.png`,
        width: 1200,
        height: 630,
        alt: "Ionnetix Technologies — Web Development & IT Services in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | ${defaultTitle}`,
    description: defaultDescription,
    images: [`${siteUrl}/og/default.png`],
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
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/favicon.png`,
      image: `${siteUrl}/og/default.png`,
      description: defaultDescription,
      telephone: "+91 88662 93636",
      email: "ionnetixhr@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
      areaServed: ["IN", "Global"],
      sameAs: ["https://www.instagram.com/ionnetixtechnologies?igsh=MXcyNDc5YW5seW5vcA=="],
    },
    {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
  ],
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
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