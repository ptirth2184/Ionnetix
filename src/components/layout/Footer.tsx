import Link from "next/link"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.76.46 3.42 1.26 4.88L2 22l5.3-1.28c1.4.78 3.02 1.24 4.7 1.24 5.52 0 10-4.48 10-10.004C22.004 6.48 17.52 2 12.004 2zm.004 1.66c4.6 0 8.34 3.74 8.34 8.34a8.3 8.3 0 0 1-8.34 8.34c-1.48 0-2.88-.38-4.1-1.08l-.3-.18-3.08.74.76-3-.2-.3a8.27 8.27 0 0 1-1.42-4.52c0-4.6 3.74-8.34 8.34-8.34zm-3.6 3.42c-.22 0-.46.06-.66.16-.36.18-.62.5-.72.9-.22.84.14 2.14.88 3.32 1.04 1.66 2.5 3 4.14 3.78.8.38 1.66.52 2.38.2.42-.18.72-.52.82-.96l.32-1.34c.06-.28-.08-.56-.34-.68l-1.68-.84c-.26-.14-.58-.06-.74.16l-.54.68c-.68-.34-1.32-.98-1.66-1.66l.68-.54c.22-.16.3-.48.16-.74l-.84-1.68c-.12-.26-.4-.4-.68-.34l-.32.08c-.06 0-.12.04-.18.04z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3" aria-label="Ionnetix home">
              <img src="/favicon.png" alt="Ionnetix favicon" className="h-12 w-12 object-contain" />
              <span className="font-bold text-xl tracking-tight text-primary">Ionnetix</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Ionnetix Technologies provides web development, app development, digital marketing, and IT consulting services for businesses.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-3">
              <Link 
                href="https://www.instagram.com/ionnetixtechnologies?igsh=MXcyNDc5YW5seW5vcA==" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram" 
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors"
              >
                <InstagramIcon className="h-5 w-5" aria-hidden />
              </Link>
              <Link 
                href="https://wa.me/918866293636" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/ionnetix-technologies/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors"
              >
                <LinkedInIcon className="h-5 w-5" aria-hidden />
              </Link>
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
