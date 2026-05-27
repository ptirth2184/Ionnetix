"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { PageHero } from "@/components/sections/PageHero"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.enum(["web", "marketing", "app-development", "ai", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().default(""),
})

type ContactFormData = z.input<typeof contactSchema>

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus({ type: null, message: "" })
      
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you within 24 hours.",
        })
        reset()
      } else {
        const errorData = await response.json()
        setSubmitStatus({
          type: "error",
          message: errorData.error || "Failed to send message. Please try again.",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      })
      console.error("Form submission error:", error)
    }
  }
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

      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-primary/5 blur-[80px] pointer-events-none" />

        <div className="container relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 lg:items-start">
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
                      <p className="text-muted-foreground mt-1">+91 88662 93636<br/></p>
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
              <Card className="border-border/50 shadow-lg shadow-primary/5">
                <CardContent className="p-8 md:p-10">
                  <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                  
                  {submitStatus.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mb-6 p-4 rounded-lg border flex items-start gap-3 ${
                        submitStatus.type === "success"
                          ? "bg-green-50 border-green-200 text-green-800"
                          : "bg-red-50 border-red-200 text-red-800"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle className="h-5 w-5 mt-0.5 shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 mt-0.5 shrink-0" />
                      )}
                      <p className="text-sm">{submitStatus.message}</p>
                    </motion.div>
                  )}
                  
                  <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="hidden" aria-hidden="true">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        tabIndex={-1}
                        autoComplete="off"
                        {...register("honeypot")}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        {...register("name")}
                        className={`bg-muted/50 focus:bg-background transition-colors ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className={`bg-muted/50 focus:bg-background transition-colors ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-sm text-red-500">{errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register("phone")}
                          className={`bg-muted/50 focus:bg-background transition-colors ${
                            errors.phone ? "border-red-500" : ""
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-sm text-red-500">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service of Interest</Label>
                      <div className="relative">
                        <select 
                          id="service"
                          {...register("service")}
                          className={`flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none focus:bg-background transition-colors ${
                            errors.service ? "border-red-500" : ""
                          }`}
                        >
                          <option value="">Select a service...</option>
                          <option value="web">Web Development</option>
                          <option value="marketing">Digital Marketing</option>
                          <option value="app-development">App Development</option>
                          <option value="ai">Website Maintenance</option>
                          <option value="other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                      {errors.service && (
                        <p className="text-sm text-red-500">{errors.service.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message"
                        {...register("message")}
                        placeholder="Tell us about your project or inquiry..." 
                        className={`min-h-[150px] bg-muted/50 focus:bg-background transition-colors resize-y ${
                          errors.message ? "border-red-500" : ""
                        }`}
                      />
                      {errors.message && (
                        <p className="text-sm text-red-500">{errors.message.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
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