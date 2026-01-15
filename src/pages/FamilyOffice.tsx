import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { ConsultationForm } from "@/components/ConsultationForm";
import { 
  TrendingUp, Shield, Calculator, Scale, Globe, Heart,
  Building2, Briefcase, Users, FileText, Lock, Plane,
  GraduationCap, PiggyBank, ArrowRight, CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const coreServices = [
  {
    icon: TrendingUp,
    title: "Wealth Strategy",
    description: "Comprehensive investment management and portfolio optimization tailored to your family's goals.",
  },
  {
    icon: Calculator,
    title: "Tax Strategy",
    description: "Proactive tax planning across jurisdictions to minimize burden and maximize wealth preservation.",
  },
  {
    icon: Scale,
    title: "Estate Planning",
    description: "Thoughtful structures to transfer wealth efficiently across generations.",
  },
  {
    icon: Building2,
    title: "Private Investments",
    description: "Access to exclusive private equity, real estate, and alternative investment opportunities.",
  },
  {
    icon: FileText,
    title: "Trust Services",
    description: "Expert guidance on trust structures, administration, and fiduciary responsibilities.",
  },
  {
    icon: Briefcase,
    title: "CFO Services",
    description: "Complete financial oversight including bill pay, cash management, and consolidated reporting.",
  },
];

const lifestyleServices = [
  {
    icon: Lock,
    title: "Cybersecurity",
    description: "Protect your family's digital assets and privacy with enterprise-grade security solutions.",
  },
  {
    icon: Plane,
    title: "Lifestyle Management",
    description: "Concierge services for travel, property management, and personal affairs.",
  },
  {
    icon: Shield,
    title: "Insurance Advisory",
    description: "Comprehensive risk assessment and insurance optimization across all asset classes.",
  },
  {
    icon: PiggyBank,
    title: "Banking & Lending",
    description: "Access to preferential banking relationships and customized lending solutions.",
  },
];

const familyServices = [
  {
    icon: GraduationCap,
    title: "Next-Gen Education",
    description: "Programs to prepare the next generation for responsible wealth stewardship.",
  },
  {
    icon: Heart,
    title: "Philanthropy",
    description: "Strategic charitable giving and foundation management aligned with your values.",
  },
  {
    icon: Users,
    title: "Family Governance",
    description: "Frameworks for family decision-making, communication, and conflict resolution.",
  },
  {
    icon: Globe,
    title: "Global Coordination",
    description: "Seamless management of multi-jurisdictional assets and international planning.",
  },
];

const clientTypes = [
  "Entrepreneurs & Founders",
  "Private Equity Principals",
  "Corporate Executives",
  "Multigenerational Families",
  "Professional Athletes & Entertainers",
  "Real Estate Investors",
];

const faqs = [
  {
    question: "What is the difference between a Single Family Office and Multi-Family Office?",
    answer: "A Single Family Office (SFO) serves one family exclusively, while a Multi-Family Office (MFO) like Virobel serves multiple families, allowing for shared infrastructure and expertise while maintaining complete confidentiality and customized service for each family.",
  },
  {
    question: "What are the minimum requirements to work with Virobel?",
    answer: "We typically work with families who have investable assets of CHF 10 million or more. However, we evaluate each relationship holistically and welcome conversations with families who may be approaching this threshold.",
  },
  {
    question: "How is Virobel compensated?",
    answer: "We operate on a transparent fee structure, typically based on assets under management. We are fiduciaries, meaning we are legally obligated to act in your best interest at all times.",
  },
  {
    question: "Can you work with our existing advisors?",
    answer: "Absolutely. We often serve as the central coordinator for families who have existing relationships with attorneys, accountants, and investment managers. We help ensure all advisors are aligned and working cohesively toward your goals.",
  },
];

export default function FamilyOffice() {
  const [formOpen, setFormOpen] = useState(false);

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
              Family Office Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Your Life & Wealth,
              <br />
              Optimized
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed mb-8">
              Holistic solutions for ultra-high-net-worth and multi-generational families. 
              We serve as your trusted partner, coordinating every aspect of your financial 
              life with discretion and expertise.
            </p>
            <Button 
              variant="heroFilled" 
              size="xl" 
              className="group"
              onClick={() => setFormOpen(true)}
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Core Services
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Comprehensive Wealth Management
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From investment strategy to estate planning, we provide the full spectrum 
              of services your family needs under one roof.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-sm border border-border hover:border-accent/50 transition-all hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-sm flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Services */}
      <section className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
                Beyond Investments
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Lifestyle & Protection Services
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                True family office service extends beyond managing investments. We help 
                protect and enhance every aspect of your family's lifestyle and security.
              </p>
              
              <div className="space-y-4">
                {lifestyleServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
                Generational Planning
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Family Legacy Services
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Building a lasting legacy requires more than financial planning. We help 
                families navigate governance, education, and values transmission.
              </p>
              
              <div className="space-y-4">
                {familyServices.map((service) => (
                  <div key={service.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{service.title}</h4>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-gold font-medium tracking-widest text-sm uppercase mb-4">
              Our Clients
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Who We Serve
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              We partner with successful individuals and families who value discretion, 
              expertise, and a long-term relationship built on trust.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {clientTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 bg-cream/5 rounded-sm"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-cream">{type}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Questions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-card rounded-sm border border-border"
              >
                <h3 className="font-serif text-lg text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-hero-gradient">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-6">
              Built for Generations to Come
            </h2>
            <p className="text-cream/70 text-lg leading-relaxed mb-8">
              As fiduciaries, we are legally and ethically bound to act in your best interest. 
              Let's discuss how we can serve your family's unique needs.
            </p>
            <Button 
              variant="heroFilled" 
              size="xl" 
              className="group"
              onClick={() => setFormOpen(true)}
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>

      <FooterSection />

      {/* Consultation Form Modal */}
      <ConsultationForm open={formOpen} onOpenChange={setFormOpen} />
    </main>
  );
}
