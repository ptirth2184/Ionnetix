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
      "We offer four core services: custom web development (using React and Next.js), mobile app development (iOS and Android with Flutter), digital marketing (SEO, social media, and content strategy), and ongoing website maintenance. Everything is tailored to your business goals.",
  },
  {
    question: "Do you build SEO-friendly websites for businesses?",
    answer:
      "Yes. Every website we build is optimized for Google from day one proper heading structure, fast page load speeds, mobile responsiveness, meta tags, structured data, and clean URLs. We don't treat SEO as an add-on; it's baked into our development process.",
  },
  {
    question: "Do you provide mobile app development for iOS and Android?",
    answer:
      "Yes. We build cross-platform mobile apps using Flutter and React Native, which means your app works on both iOS and Android from a single codebase. This saves time and cost while delivering a native-quality experience.",
  },
  {
    question: "Can Ionnetix help with SEO and digital marketing?",
    answer:
      "Absolutely. We handle keyword research, on-page SEO, Google Business Profile setup, social media management, and content creation. Our goal is to increase your online visibility and bring in customers who are actively searching for your services.",
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
    question: "How long does it take to build a website or app?",
    answer:
      "A standard business website typically takes 2–4 weeks. Custom web applications take 4–8 weeks depending on complexity. Mobile apps usually take 6–12 weeks. We'll give you a clear timeline during our initial consultation.",
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
          "Ionnetix Technologies helps businesses across India build high-performing websites, scalable mobile apps, and data-driven digital marketing campaigns.",
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
          description="We help businesses across India build high-performing websites, scalable mobile apps, and data-driven digital marketing campaigns that attract real customers. Built by Ionnetix Technologies."
          primaryAction={{ label: "See What We Build", to: "/services" }}
          secondaryAction={{ label: "Get a Free Consultation", to: "/contact" }}
        />

        <section className="py-20 bg-background">
          <div className="container px-4 md:px-8 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Businesses in Ahmedabad Choose Ionnetix</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're a young, hungry team of developers and marketers who build with the latest tech React, Next.js, Node.js, Flutter and treat every client project like it's our own product.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Modern Tech Stack", desc: "We build with React, Next.js, Node.js, and Flutter frameworks trusted by startups and enterprises worldwide. No outdated tools, no shortcuts." },
                { icon: Target, title: "Built Around Your Goals", desc: "Every project starts with understanding your business, audience, and KPIs. We build what moves the needle for you not a one-size-fits-all template." },
                { icon: ShieldCheck, title: "End-to-End Delivery", desc: "From wireframes and UI design to development, SEO setup, and launch one team handles everything so nothing gets lost in translation." },
                { icon: Zap, title: "Fast & SEO-Optimized", desc: "Every website we ship is optimized for speed, mobile responsiveness, and Google search rankings from day one. Performance is not an afterthought." },
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
                  From custom websites that rank on Google to mobile apps your customers will love we handle the tech so you can focus on growth.
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
                { title: "Web Development", desc: "We design and develop fast, responsive websites using React and Next.js optimized for Google rankings, mobile users, and conversions. Whether you need a business website, a landing page, or a custom web app, we build it to perform." },
                { title: "Digital Marketing", desc: "Get found by the right customers. We run SEO campaigns, manage social media, and build content strategies that increase your online visibility and drive real leads not vanity metrics." },
                { title: "App Development", desc: "We build cross-platform mobile apps for iOS and Android using Flutter and React Native. From concept to App Store launch, we handle design, development, testing, and post-launch support." },
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
                      <Link href="/services" className="text-sm font-medium text-secondary hover:underline inline-flex items-center gap-1">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-muted-foreground">
                Want to know who's behind the work?{" "}
                <Link href="/about" className="text-secondary font-medium hover:underline">Learn about our team →</Link>
              </p>
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
              Tell us what you need a website, an app, a marketing strategy and we'll put together a free, no-obligation proposal within 48 hours.
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