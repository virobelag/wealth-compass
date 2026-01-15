import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const offices = [
  {
    city: "Zurich",
    address: "Seefeldstrasse",
    email: "contact@virobel.com",
  },
  {
    city: "St Gallen",
    address: "11 Birchlistrasse",
    email: "contact@virobel.com",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    assets: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. A member of our team will contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", assets: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-medium tracking-widest text-sm uppercase mb-4">
              Contact Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Let's Start
              <br />
              a Conversation
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              We'd be honored to learn about your family and explore how we 
              might work together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Request a Consultation
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Rudolf Terek"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="client@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+41 76000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="assets" className="block text-sm font-medium text-foreground mb-2">
                      Investable Assets
                    </label>
                    <select
                      id="assets"
                      name="assets"
                      value={formData.assets}
                      onChange={handleChange}
                      className="w-full h-12 px-4 bg-background border border-border rounded-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select range</option>
                      <option value="10-25">$10M - $25M</option>
                      <option value="25-50">$25M - $50M</option>
                      <option value="50-100">$50M - $100M</option>
                      <option value="100+">$100M+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    How Can We Help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your goals and how we might assist..."
                  />
                </div>

                <Button type="submit" variant="gold" size="xl" className="w-full sm:w-auto">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-muted-foreground text-sm">
                  By submitting this form, you agree to our privacy policy. 
                  Your information will be kept confidential.
                </p>
              </form>
            </motion.div>

            {/* Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                  Our Offices
                </h2>
                <div className="space-y-8">
                  {offices.map((office) => (
                    <div key={office.city} className="p-6 bg-secondary rounded-sm">
                      <h3 className="font-serif text-xl text-foreground mb-4">
                        {office.city}
                      </h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                          <div>
                            <p>{office.address}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                          <p>{office.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary rounded-sm">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-serif text-lg text-cream mb-2">
                      Office Hours
                    </h4>
                    <p className="text-cream/70">
                      Monday – Friday: 8:00 AM – 5:00 PM
                    </p>
                    <p className="text-cream/70">
                      Remote Meetings available by appointment
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold">1.</span>
                    A member of our team will respond within 24 hours
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold">2.</span>
                    We'll schedule a confidential introductory call
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-semibold">3.</span>
                    If there's a mutual fit, we'll begin the discovery process
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
