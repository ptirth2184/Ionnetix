import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Users, Target, ShieldCheck, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground py-24 md:py-32">
        {/* Animated Background */}
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
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-screen filter blur-[100px]"
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
            className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/50 rounded-full mix-blend-screen filter blur-[120px]"
          />
        </div>

        <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Connecting Ideas. <br className="hidden md:inline" />
            <span className="text-secondary">Delivering Innovation.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.1 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            We provide cutting-edge software development and IT consulting services to help your business thrive in the digital age.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button size="lg" asChild className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto">
              <Link to="/services">Explore Our Services</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-primary hover:bg-white w-full sm:w-auto">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </motion.div>
        </div>
      </section>

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

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CEO, TechStart", quote: "Ionnetix transformed our digital presence. Their web development team is top-notch." },
              { name: "Michael Chang", role: "Marketing Director, Velocity", quote: "The AI solutions provided by Ionnetix saved us countless hours of manual work." },
              { name: "Elena Rodriguez", role: "Founder, Bloom E-commerce", quote: "Exceptional service from start to finish. They truly understand what a business needs to succeed online." }
            ].map((testimonial, i) => (
              <Card key={i} className="bg-muted/20 border-none shadow-sm">
                <CardContent className="pt-8">
                  <div className="flex mb-4 text-secondary">
                    {[1,2,3,4,5].map(star => <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <p className="italic text-muted-foreground mb-6">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary/20 mr-4 overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
