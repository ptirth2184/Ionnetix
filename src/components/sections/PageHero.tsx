import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"

type HeroAction = {
  label: string
  to: string
  variant?: "default" | "outline" | "secondary" | "ghost"
}

type PageHeroProps = {
  title: ReactNode
  description: ReactNode
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
}

export function PageHero({ title, description, primaryAction, secondaryAction }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-32">
      <div className="absolute inset-0 z-0 opacity-20">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-secondary mix-blend-screen filter blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/50 mix-blend-screen filter blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-6 text-4xl font-bold tracking-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/80 md:text-xl"
        >
          {description}
        </motion.p>
        {(primaryAction || secondaryAction) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {primaryAction && (
              <Button size="lg" asChild className="w-full bg-secondary text-white hover:bg-secondary/90 sm:w-auto">
                <Link to={primaryAction.to}>{primaryAction.label}</Link>
              </Button>
            )}
            {secondaryAction && (
              <Button size="lg" variant="outline" asChild className="w-full border-white/30 bg-white text-black hover:bg-secondary hover:text-white sm:w-auto">
                <Link to={secondaryAction.to}>{secondaryAction.label}</Link>
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}