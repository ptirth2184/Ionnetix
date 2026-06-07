"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown, ShieldCheck, Target, Users, Zap } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/sections/PageHero"
import { getSiteUrl } from "@/lib/site-url"

const siteUrl = getSiteUrl()

const faqItems = [
  {
    question: "What services does Ionnetix Technologies offer?",
    answer:
      "Ionnetix Technologies offers web development, app development, digital marketing, and IT consulting services for businesses that want to grow online.",
  },
  {
    question: "Do you build SEO-friendly websites for businesses?",
    answer:
      "Yes. We build SEO-friendly websites with fast performance, strong structure, and content that supports better search visibility and conversions.",
  },
  {
    question: "Do you provide mobile app development for iOS and Android?",
    answer:
      "Yes. We develop mobile apps for iOS and Android that are designed to support your product goals, user experience, and long-term growth.",
  },
  {
    question: "Can Ionnetix help with SEO and digital marketing?",
    answer:
      "Yes. We provide digital marketing support that includes SEO-focused content, visibility improvements, and growth strategy for your website.",
  },
  {
    question: "How do I request a quote or contact Ionnetix?",
    answer:
      "Use the contact page to share your project details and goals. We’ll review your request and get back to you with the next steps.",
  },
]

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Ionnetix Technologies",
        url: siteUrl,
        description:
          "Ionnetix Technologies provides web development, app development, digital marketing, and IT consulting services.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  }

  export default function Home() {
    const [openFaq, setOpenFaq] = useState(0)

    return (
      <div className="flex flex-col min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
        <PageHero
          title={
            <>
              Ionnetix Technologies <br className="hidden md:inline" />
              <span className="text-secondary">IT Services That Move Your Business Forward.</span>
            </>
          }
          description="Ionnetix Technologies provides web development, app development, digital marketing, and IT consulting services to help businesses grow online."
          primaryAction={{ label: "Explore Our Services", to: "/services" }}
          secondaryAction={{ label: "Contact Us", to: "/contact" }}
        />

        <section className="py-20 bg-background">
          <div className="container px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose Ionnetix for IT Services?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We combine technical expertise with business-focused strategy to deliver web development, automation, and digital solutions that support measurable growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Expert Team", desc: "Highly skilled professionals with years of industry experience." },
                { icon: Target, title: "Client-Focused", desc: "Your success is our priority. We tailor solutions to your needs." },
                { icon: ShieldCheck, title: "End-to-End Solutions", desc: "From concept to deployment and ongoing support." },
                { icon: Zap, title: "Proven Results", desc: "A track record of delivering innovative and scalable tech." },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-muted/50 hover:border-secondary/50 transition-colors">
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 text-secondary">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div className="max-w-2xl mb-6 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Web Development, App Development, and Digital Marketing</h2>
                <p className="text-muted-foreground">
                  Our technology solutions are designed to accelerate growth, improve visibility in search engines, and streamline your operations.
                </p>
              </div>
              <Button variant="ghost" asChild className="group text-primary">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Web Development", desc: "Fast, responsive, and SEO-friendly websites built for performance and conversions." },
                { title: "Digital Marketing", desc: "Data-driven SEO and online growth strategies to increase visibility and reach." },
                { title: "App Development", desc: "Innovative mobile applications for iOS and Android that scale with your business." },
              ].map((service, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="group">
                  <Card className="h-full overflow-hidden border-border/50">
                    <div className="h-48 bg-muted relative overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${i === 0 ? "1498050108023-c5249f4df085" : i === 1 ? "1460925895917-afdab827c52f" : "1551650975-87deedd944c3"}?w=800&auto=format&fit=crop&q=60`}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent mix-blend-overlay" />
          </div>
          <div className="container relative z-10 px-4 md:px-8 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to grow with better IT services?</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Let’s discuss how Ionnetix Technologies can help you strengthen your website, search visibility, and digital presence.
            </p>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 md:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Ionnetix FAQ</h2>
              <p className="text-muted-foreground">A quick answer to the most common questions people search before reaching out.</p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index

                return (
                  <Card key={item.question} className="border-border/50 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/40"
                    >
                      <span className="text-lg font-semibold">{item.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <CardContent className="px-6 pb-6 pt-0">
                          <p className="text-muted-foreground">{item.answer}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>
      </div>
    )
  }