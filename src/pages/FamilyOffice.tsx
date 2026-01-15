import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { 
  Users, Briefcase, Shield, Globe, FileText, 
  Building2, Calculator, Heart, Scale, Clock
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "Consolidated Reporting",
    description: "Complete visibility across all your assets, investments, and accounts with unified reporting and performance tracking.",
  },
  {
    icon: Calculator,
    title: "Tax Planning & Compliance",
    description: "Strategic tax optimization across jurisdictions, ensuring compliance while minimizing tax burden.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Comprehensive risk assessment and mitigation strategies to protect your family's wealth.",
  },
  {
    icon: Scale,
    title: "Legal Coordination",
    description: "Seamless coordination with legal advisors for trusts, estates, and corporate structures.",
  },
  {
    icon: Globe,
    title: "Multi-Generational Planning",
    description: "Strategies designed to preserve and transfer wealth across generations effectively.",
  },
  {
    icon: Heart,
    title: "Philanthropy Advisory",
    description: "Guidance on charitable giving, foundation management, and impact investing.",
  },
];

const benefits = [
  {
    title: "Single Point of Contact",
    description: "One dedicated team managing all aspects of your financial life.",
  },
  {
    title: "Complete Confidentiality",
    description: "The highest standards of privacy and discretion in all matters.",
  },
  {
    title: "Tailored Solutions",
    description: "Every strategy customized to your family's unique circumstances.",
  },
  {
    title: "Global Expertise",
    description: "Access to specialists across investment, tax, legal, and estate planning.",
  },
];

export default function FamilyOffice() {
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
              Your Private
              <br />
              Family Office
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Comprehensive wealth management and administrative services tailored 
              to the unique needs of ultra-high-net-worth families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                A Unified Approach to Wealth
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Managing significant wealth involves coordinating numerous advisors, accounts, 
                and strategies. Our family office services provide a single, trusted partner 
                to oversee every aspect of your financial life, ensuring nothing falls through 
                the cracks and every decision aligns with your family's goals.
              </p>
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-card rounded-sm border border-border hover:border-accent/50 transition-colors"
              >
                <service.icon className="w-10 h-10 text-accent mb-6" />
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

      {/* Benefits */}
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
                Why Choose Us
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                The Virobel Difference
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Unlike traditional wealth managers, we operate as an extension of your family, 
                providing the personalized attention and comprehensive oversight that only a 
                dedicated family office can deliver.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="p-6 bg-background rounded-sm"
                >
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </main>
  );
}
