import Link from "next/link"
// social icons use inline SVGs in this file; no lucide imports required

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex items-center space-x-3">
              <Link href="/not-found" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" />
                </svg>
              </Link>
              <Link href="/not-found" aria-label="LinkedIn" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="6" y="10" width="2" height="7" fill="currentColor" />
                  <path d="M8 10v7" stroke="currentColor" strokeWidth="1.5" />
                  <rect x="11" y="7" width="2" height="10" fill="currentColor" />
                  <path d="M11 7c1 0 1.5-.5 2-1.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </Link>
              <Link href="/not-found" aria-label="WhatsApp" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M21 12a9 9 0 10-2.5 6.1L22 22l-3.9-1.4A9 9 0 0021 12z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M16.5 14.5c-.3-.2-1.7-.8-2-.9-.3-.1-.6-.2-.9.2s-1 .9-1.2 1.1c-.2.2-.4.3-.7.1-.3-.2-1.2-.4-2.3-1.4-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.1-.7.1-.2.3-.6.5-.9.2-.3.2-.5.3-.8.1-.3 0-.6-.1-.8-.1-.2-.9-2-1.2-2.6-.3-.6-.6-.5-.9-.5-.2 0-.4 0-.6 0-.2 0-.5.1-.8.5C6 6.5 6 7 6 7.5c0 .5.3 1.1.4 1.3.1.2.4.4.6.7.2.3.3.4.4.6.1.2 0 .4-.1.6-.1.2-.6.9-.9 1.2-.3.3-.5.5-.7.7-.2.2-.1.5.1.8.2.3 1.2 2 2.6 3.2 1.4 1.2 2.9 1.6 3.6 1.8.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.3-.1-.1-.3-.2-.6-.4z" stroke="currentColor" strokeWidth="0.6" />
                </svg>
              </Link>
              <Link href="/not-found" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-secondary/10 hover:text-primary transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M15 8h2.5V5.5H15c-1.4 0-2.5 1-2.5 2.5V11H10v2.5h2.5V21H15v-7.5H17l.5-2.5H15V8z" fill="currentColor" />
                </svg>
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
