import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";

export default function PrivacyPolicy() {
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
              Privacy Policy
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
                <h2 className="font-serif text-2xl text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Virobel AG ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Personal Data:</strong> Name, email address, phone number, and location that you voluntarily provide when contacting us or requesting a consultation.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
                  <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>To respond to your inquiries and provide requested services</li>
                  <li>To send you information about our services that may interest you</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and interests</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or 
                  destruction. However, no method of transmission over the Internet is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill 
                  the purposes for which it was collected, including to satisfy any legal, 
                  accounting, or reporting requirements.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>The right to access your personal data</li>
                  <li>The right to rectify inaccurate data</li>
                  <li>The right to request deletion of your data</li>
                  <li>The right to restrict processing of your data</li>
                  <li>The right to data portability</li>
                  <li>The right to object to processing</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party websites or services. We are not 
                  responsible for the privacy practices of these third parties. We encourage you 
                  to review their privacy policies before providing any personal information.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last 
                  updated" date.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us at:
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
