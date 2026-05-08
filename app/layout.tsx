import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Footer } from "@/components/layout/Footer"
import { Navbar } from "@/components/layout/Navbar"
import { Providers } from "./providers"
import "../src/index.css"

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "Ionnetix Technologies",
  description: "Connecting Ideas. Delivering Innovation.",
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
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