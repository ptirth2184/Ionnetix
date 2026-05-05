import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Users, Target, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHero } from "@/components/sections/PageHero"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={
          <>
            Connecting Ideas. <br className="hidden md:inline" />
            <span className="text-secondary">Delivering Innovation.</span>
          </>
        }
        description="We provide cutting-edge software development and IT consulting services to help your business thrive in the digital age."
        primaryAction={{ label: "Explore Our Services", to: "/services" }}
        secondaryAction={{ label: "Contact Us", to: "/contact" }}
      />

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Ionnetix?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">We combine technical expertise with a deep understanding of your business goals to deliver exceptional results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Expert Team", desc: "Highly skilled professionals with years of industry experience." },
              { icon: Target, title: "Client-Focused", desc: "Your success is our priority. We tailor solutions to your needs." },
              { icon: ShieldCheck, title: "End-to-End Solutions", desc: "From concept to deployment and ongoing support." },
              { icon: Zap, title: "Proven Results", desc: "A track record of delivering innovative and scalable tech." }
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

      {/* Services Snapshot */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground">Comprehensive technology solutions designed to accelerate your growth and streamline your operations.</p>
            </div>
            <Button variant="ghost" asChild className="group text-primary">
              <Link to="/services">
                View All Services 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Fast, responsive, and visually stunning websites." },
              { title: "Digital Marketing", desc: "Data-driven strategies to grow your online presence." },
              { title: "Website Maintenance", desc: "Keep your website secure, up-to-date, and performing at its best." }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full overflow-hidden border-border/50">
                  <div className="h-48 bg-muted relative overflow-hidden">
                    <img 
                      src={`https://images.unsplash.com/photo-${i === 0 ? '1498050108023-c5249f4df085' : i === 1 ? '1460925895917-afdab827c52f' : '1677442136019-21780ecad995'}?w=800&auto=format&fit=crop&q=60`} 
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


      {/* CTA Banner */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent mix-blend-overlay"></div>
        </div>
        <div className="container relative z-10 px-4 md:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something great?</h2>
          <p className="text-xl text-primary-foreground/80 mb-10">Let's discuss how Ionnetix Technologies can help you achieve your business goals.</p>
          <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-lg">
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
