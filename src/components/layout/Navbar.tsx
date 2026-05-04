import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import logoImage from "./logo.png"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export function Navbar() {
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 md:h-24 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={logoImage} alt="Ionnetix Logo" className="h-16 md:h-20 w-auto object-contain transform scale-110 md:scale-125 origin-left" />
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path ? "text-secondary font-semibold" : "text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link to="/contact">Get a Free Consultation</Link>
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
        <div className="md:hidden border-t bg-background">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium transition-colors hover:text-secondary ${
                  location.pathname === link.path ? "text-secondary font-semibold" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
