import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";

export default function TermsOfService() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-gold font-medium tracking-widest text-sm uppercase mb-4">
              Legal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Terms of Service
            </h1>
            <p className="text-cream/70 text-lg">
              Last updated: January 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the services provided by Virobel AG ("we," "our," or "us"), 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Virobel AG provides wealth management, investment advisory, and family office services 
                  to qualified clients. Our services are subject to separate client agreements that govern 
                  the specific terms of our engagement.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Eligibility</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are available only to individuals who meet certain eligibility requirements, 
                  including minimum investment thresholds and applicable regulatory requirements. We reserve 
                  the right to decline to provide services to any individual or entity at our discretion.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">No Investment Advice</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The information provided on this website is for general informational purposes only and 
                  does not constitute investment advice, financial advice, or any other form of professional 
                  advice. You should consult with qualified professionals before making any investment decisions.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property 
                  of Virobel AG and is protected by intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Virobel AG shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages arising out of or related to your 
                  use of our website or services. Our total liability shall not exceed the fees paid by you 
                  for the specific services giving rise to the claim.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless Virobel AG and its officers, directors, employees, 
                  and agents from any claims, damages, losses, or expenses arising out of your use of our 
                  services or violation of these Terms of Service.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of 
                  Switzerland. Any disputes arising under these terms shall be subject to the exclusive 
                  jurisdiction of the courts of Zurich, Switzerland.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify you of 
                  any material changes by posting the updated terms on this page. Your continued use of our 
                  services after such changes constitutes your acceptance of the new terms.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-secondary rounded-sm">
                  <p className="text-foreground font-medium">Virobel AG</p>
                  <p className="text-muted-foreground">Seefeldstrasse 69, Zurich</p>
                  <p className="text-muted-foreground">Email: contact@virobel.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
