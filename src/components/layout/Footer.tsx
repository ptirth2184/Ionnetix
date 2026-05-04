import { Link } from "react-router-dom"
import { Globe, MessageSquare, Users, Camera } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-tr from-primary to-secondary">
                <div className="h-3 w-3 rounded-full bg-background" />
              </div>
              <span className="font-bold text-lg tracking-tight text-primary">IONNETIX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Connecting Ideas. Delivering Innovation. We provide end-to-end IT solutions for businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Domain & Hosting</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Website Maintenance</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <MessageSquare className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Users className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Camera className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ionnetix Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
