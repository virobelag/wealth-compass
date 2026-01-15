import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConsultationForm } from "@/components/ConsultationForm";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formOpen, setFormOpen] = useState(false);

  return (
    <section id="contact" ref={ref} className="py-24 lg:py-32 bg-hero-gradient relative overflow-hidden">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold font-medium tracking-widest text-sm uppercase mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-6 leading-tight">
              Let's Discuss
              <br />
              Your Vision
            </h2>
            <p className="text-cream/70 text-lg mb-10 leading-relaxed max-w-lg">
              Every great partnership begins with a conversation. We invite you to 
              share your aspirations, and together we'll craft a strategy to achieve them.
            </p>

            <Button 
              variant="heroFilled" 
              size="xl" 
              className="group"
              onClick={() => setFormOpen(true)}
            >
              Schedule a Private Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Right Content - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-cream/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-cream mb-1">Zurich</h4>
                <p className="text-cream/60">
                  Seefeldstrasse 69
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-cream/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-cream mb-1">St Gallen</h4>
                <p className="text-cream/60">
                  11 Birchlistrasse
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-cream/10 rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h4 className="font-serif text-lg text-cream mb-1">Email</h4>
                <p className="text-cream/60">contact@virobel.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm open={formOpen} onOpenChange={setFormOpen} />
    </section>
  );
}
