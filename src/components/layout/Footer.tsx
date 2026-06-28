import Link from "next/link"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
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
      fill="currentColor" 
      className={className}
    >
      <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
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
                className="h-10 w-10 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-md"
              >
                <InstagramIcon className="h-5 w-5" aria-hidden />
              </Link>
              <Link 
                href="https://wa.me/918866293636" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp" 
                className="h-10 w-10 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-[#25D366] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-md"
              >
                <WhatsAppIcon className="h-5 w-5" aria-hidden />
              </Link>
              <Link 
                href="https://www.linkedin.com/company/ionnetix-technologies/" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn" 
                className="h-10 w-10 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:bg-[#0077B5] hover:text-white hover:border-transparent hover:scale-110 active:scale-95 transition-all duration-300 hover:shadow-md"
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
