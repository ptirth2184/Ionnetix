"use client"

import { motion } from "framer-motion"
import { Lightbulb, Shield, Award, HeartHandshake } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/sections/PageHero"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={
          <>
            About <span className="text-secondary">Ionnetix</span>
          </>
        }
        description="We are a team of passionate technologists dedicated to connecting ideas and delivering innovation for businesses worldwide."
        primaryAction={{ label: "Our Services", to: "/services" }}
        secondaryAction={{ label: "Contact Us", to: "/contact" }}
      />

      <section className="py-20">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                At Ionnetix Technologies, our mission is to empower businesses by delivering cutting-edge, scalable, and secure technology solutions. We believe that technology should be an enabler, not a hurdle.
              </p>
              <p className="text-muted-foreground mb-4">
                Founded with a vision to bridge the gap between complex business problems and intuitive digital solutions, we have consistently pushed the boundaries of what's possible. Our end-to-end services ensure that from concept to deployment, your project is in expert hands.
              </p>
              <p className="text-muted-foreground">
                We don't just write code; we build digital experiences that resonate with users and drive tangible business growth.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide our work and define our culture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: "Innovation", desc: "We constantly explore new technologies to deliver future-proof solutions." },
              { icon: Shield, title: "Integrity", desc: "Transparency, honesty, and ethical practices in everything we do." },
              { icon: Award, title: "Excellence", desc: "We don't settle for good. We strive for outstanding quality." },
              { icon: HeartHandshake, title: "Customer First", desc: "Your success is the true measure of our success." }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="text-center">
                    <div className="mx-auto h-16 w-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 text-primary">
                      <value.icon className="h-8 w-8" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The brilliant minds behind Ionnetix Technologies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Vishal Rathod", role: "Co-Founder & CEO", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60" },
              { name: "Tirth Patel", role: "Co-Founder & CTO", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=60" },
              { name: "Vraj Shah", role: "Team Leader", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60" }
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium">{member.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}