import Link from "next/link"
import { PageHero } from "@/components/sections/PageHero"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={<>404 — <span className="text-secondary">Page Not Found</span></>}
        description="Sorry — the page you were looking for doesn't exist or is unavailable."
        primaryAction={{ label: "Go Home", to: "/" }}
        secondaryAction={{ label: "Contact Us", to: "/contact" }}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
          <p className="text-muted-foreground mb-6">Try returning to the homepage or contact us if you need help.</p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}