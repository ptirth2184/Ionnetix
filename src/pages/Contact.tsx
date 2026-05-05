import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/PageHero"

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        title={
          <>
            Get In <span className="text-secondary">Touch</span>
          </>
        }
        description="Have a project in mind or need assistance? We're here to help. Reach out to us today."
        primaryAction={{ label: "View Services", to: "/services" }}
        secondaryAction={{ label: "About Us", to: "/about" }}
      />

      {/* Main Content */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 lg:items-start">
            
            {/* Left Column: Contact Details & Map */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="space-y-10 lg:pt-14"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form and our team will get back to you within 24 hours. Alternatively, you can use the information below to reach us directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mr-4 text-secondary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Office Address</h3>
                      <p className="text-muted-foreground mt-1">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mr-4 text-secondary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Number</h3>
                      <p className="text-muted-foreground mt-1">+91 88662 93636<br />Mon-Fri, 9am to 6pm PST</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mt-1 h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mr-4 text-secondary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Address</h3>
                      <p className="text-muted-foreground mt-1">hello@ionnetix.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder
              <div className="rounded-xl overflow-hidden shadow-sm border border-border h-64 bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center flex-col text-muted-foreground bg-[url('https://maps.gstatic.com/mapfiles/maps_lite/pwa/icons/map_1x.png')] bg-center bg-cover opacity-80 mix-blend-multiply">
                  <div className="bg-background/90 p-4 rounded-lg backdrop-blur shadow-sm text-center">
                    <MapPin className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <p className="font-medium text-foreground">Interactive Map Placeholder</p>
                    <p className="text-sm">San Francisco, CA</p>
                  </div>
                </div>
              </div> */}
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="border-border/50 shadow-lg shadow-primary/5">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                  
                  <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" className="bg-muted/50 focus:bg-background transition-colors" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" className="bg-muted/50 focus:bg-background transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" className="bg-muted/50 focus:bg-background transition-colors" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <div className="relative">
                        <select 
                          id="service" 
                          className="flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none focus:bg-background transition-colors"
                          defaultValue=""
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="web">Web Development</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="hosting">Domain & Hosting</option>
                          <option value="ai">Website Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your project or inquiry..." 
                        className="min-h-[150px] bg-muted/50 focus:bg-background transition-colors resize-y" 
                      />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg">
                      Send Message
                    </Button>
                    
                    <div className="flex items-center justify-center text-sm text-muted-foreground mt-4 pt-4 border-t">
                      <Clock className="h-4 w-4 mr-2 text-secondary" />
                      We typically respond within 24 hours.
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
