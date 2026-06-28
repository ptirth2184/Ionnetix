"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import logoImage from "./logo.png"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/80 bg-background text-foreground">
      <div className="container flex h-20 md:h-24 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logoImage.src} alt="Ionnetix Logo" className="h-16 md:h-20 w-auto object-contain transform scale-110 md:scale-125 origin-left" />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathname ? (pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path))) : false;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-secondary ${
                  isActive ? "text-secondary font-semibold" : "text-foreground/80"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full" />
                )}
              </Link>
            )
          })}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contact">Get a Free Consultation</Link>
          </Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/80 bg-background">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => {
              const isActive = pathname ? (pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path))) : false;
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium transition-colors hover:text-secondary flex items-center justify-between ${
                    isActive ? "text-secondary font-semibold" : "text-foreground/80"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  )}
                </Link>
              )
            })}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
