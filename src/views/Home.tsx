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
      "We offer core digital services: custom web development (using React and Next.js), logo design, reels and content creation, social media handling, and ongoing website maintenance. Everything is tailored to your brand goals.",
  },
  {
    question: "Do you build SEO-friendly websites for businesses?",
    answer:
      "Yes. Every website we build is optimized for Google from day one with proper heading structure, fast page load speeds, mobile responsiveness, meta tags, structured data, and clean URLs. We don't treat SEO as an add-on; it's baked into our development process.",
  },
  {
    question: "Can you manage our social media and create reels?",
    answer:
      "Yes. We offer end-to-end social media handling, including strategy, content creation, high-quality reels production, and community management to build your brand presence online.",
  },
  {
    question: "Do you offer logo design and branding services?",
    answer:
      "Absolutely. We craft memorable visual identities and custom logos that resonate with your target audience and stand out in your industry.",
  },
  {
    question: "How do I request a quote or contact Ionnetix?",
    answer:
      "Head to our contact page and fill out the form with your project details. You can also reach us directly at +91 88662 93636 or ionnetixhr@gmail.com. We respond within 24 hours.",
  },
  {
    question: "Is Ionnetix Technologies based in Ahmedabad?",
    answer:
      "Yes. Ionnetix Technologies is based in Ahmedabad, Gujarat, India. We work with businesses locally in Ahmedabad and remotely across India and internationally.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "A standard business website typically takes 2–4 weeks. Logo design and initial content strategy usually take 1-2 weeks. We'll give you a clear timeline during our initial consultation.",
  },
  {
    question: "Do you offer website maintenance after launch?",
    answer:
      "Yes. We offer ongoing website maintenance packages that include security updates, performance monitoring, content updates, backups, and bug fixes. You focus on your business while we keep your website running smoothly.",
  },
]

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: "Ionnetix Technologies Web Development & IT Services in Ahmedabad",
        url: siteUrl,
        description:
          "Ionnetix Technologies helps businesses across India build high-performing websites, craft memorable brand identities, and drive engagement through viral reels and strategic social media management.",
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
              Web Development &amp; IT Services <br className="hidden md:inline" />
              <span className="text-secondary">in Ahmedabad That Deliver Real Results.</span>
            </>
          }
          description="We are a specialized digital agency in Ahmedabad. We engineer high-performance websites using Next.js, craft memorable brand identities, and drive engagement through viral reels and strategic social media management."
          primaryAction={{ label: "See What We Build", to: "/services" }}
          secondaryAction={{ label: "Get a Free Consultation", to: "/contact" }}
        />

        <section className="py-20 bg-background">
          <div className="container px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Businesses in Ahmedabad Choose Ionnetix</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We are a specialized team of software engineers and digital strategists in Ahmedabad. We treat every client project like our own, ensuring measurable ROI and brand growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Modern Tech Stack", desc: "We build websites with React and Next.js—frameworks trusted by startups and enterprises worldwide. No outdated tools, no shortcuts." },
                { icon: Target, title: "Built Around Your Goals", desc: "Every project starts with understanding your business, audience, and KPIs. We build what moves the needle for you—not a one-size-fits-all template." },
                { icon: ShieldCheck, title: "End-to-End Delivery", desc: "From logo design and UI/UX to web development and social media strategy, one team handles everything so nothing gets lost in translation." },
                { icon: Zap, title: "Creative & Fast", desc: "We merge stunning visual design with high-speed web performance. Your brand will look incredible and rank well on Google." },
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
                <h2 className="text-3xl font-bold mb-4">What We Build for Businesses in India</h2>
                <p className="text-muted-foreground">
                  From custom websites that rank on Google to viral reels that build your audience—we handle your digital presence so you can focus on growth.
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
                { title: "Web Development", desc: "We engineer fast, responsive websites using React and Next.js. Whether you need a corporate site, landing page, or complex web app, we build it to perform and convert visitors." },
                { title: "Logo & Brand Design", desc: "Stand out in a crowded market. We craft memorable visual identities, custom logos, and brand guidelines that resonate perfectly with your target demographic." },
                { title: "Social Media & Reels", desc: "Get found and drive engagement. We produce high-quality video content, viral reels, and manage your social profiles to build community and generate leads." },
              ].map((service, i) => (
                <motion.div key={i} whileHover={{ y: -5 }} className="group">
                  <Card className="h-full overflow-hidden border-border/50">
                    <div className="h-48 bg-muted relative overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${i === 0 ? "1498050108023-c5249f4df085" : i === 1 ? "1460925895917-afdab827c52f" : "1551650975-87deedd944c3"}?w=800&auto=format&fit=crop&q=60`}
                        alt={`${service.title} services by Ionnetix Technologies in Ahmedabad`}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <h3 className="absolute bottom-4 left-6 text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground mb-4">{service.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Got an Idea? Let's Build It Together.</h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Tell us what you need—a high-performing website, a new logo, or a social media strategy—and we'll put together a free, no-obligation proposal within 48 hours.
            </p>
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg">
              <Link href="/contact">Get Your Free Proposal</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container px-4 md:px-8 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions About Ionnetix</h2>
              <p className="text-muted-foreground">Quick answers to the questions businesses ask before working with us.</p>
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
                      aria-controls={`faq-panel-${index}`}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/40"
                    >
                      <span className="text-lg font-semibold">{item.question}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <div id={`faq-panel-${index}`} role="region" className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
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