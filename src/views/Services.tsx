"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Code2, TrendingUp, Server, Bot, Search, PenTool, Terminal, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/sections/PageHero"

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={
          <>
            Ionnetix <span className="text-secondary">Services</span>
          </>
        }
        description="Comprehensive web development, app development, digital marketing, and website maintenance services tailored to accelerate your business growth."
        primaryAction={{ label: "Get in Touch", to: "/contact" }}
        secondaryAction={{ label: "About Us", to: "/about" }}
      />

      <section className="py-20">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Code2,
                title: "Web Development",
                desc: "Design and build fast, responsive, and visually stunning websites tailored to your business needs and brand identity. We utilize modern frameworks to ensure scalability and performance."
              },
              {
                icon: TrendingUp,
                title: "Digital Marketing",
                desc: "Grow your online presence with data-driven strategies including SEO, social media, and targeted ad campaigns. We help you reach the right audience at the right time."
              },
              {
                icon: Server,
                title: "App Development Services",
                desc: "Reliable, scalable app development solutions to help you build modern digital products that perform smoothly and grow with your business."
              },
              {
                icon: Bot,
                title: "Website Maintenance",
                desc: "Keep your website secure, up-to-date, and performing at its best with our comprehensive maintenance services. We handle updates, backups, security monitoring, and performance optimization so you can focus on your business."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow group overflow-hidden relative">
                  <div className="absolute top-0 right-0 p-8 opacity-5 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-1000">
                    <service.icon className="h-32 w-32" />
                  </div>
                  <CardHeader className="relative z-10">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Process</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto">A proven methodology to turn your ideas into successful digital products.</p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-primary-foreground/10" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Search, title: "Discover", desc: "Understanding your goals, audience, and requirements." },
                { icon: PenTool, title: "Design", desc: "Creating intuitive interfaces and user experiences." },
                { icon: Terminal, title: "Develop", desc: "Building robust, scalable, and secure solutions." },
                { icon: CheckCircle, title: "Deliver", desc: "Testing, deployment, and ongoing support." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center mb-6 shadow-lg shadow-secondary/20 text-white relative">
                    <step.icon className="h-10 w-10" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background text-primary font-bold flex items-center justify-center border-2 border-primary shadow-sm">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-primary-foreground/70">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted border-t border-border">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between bg-card p-8 md:p-12 rounded-2xl shadow-sm border border-border/50">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Have a project in mind?</h2>
              <p className="text-muted-foreground text-lg">Let's talk about how we can help you achieve your goals.</p>
            </div>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}