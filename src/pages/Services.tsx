import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { 
  TrendingUp, Shield, Building2, Users, Globe, Scale, 
  PieChart, Landmark, GraduationCap, FileText, Briefcase, Heart
} from "lucide-react";

const mainServices = [
  {
    icon: TrendingUp,
    title: "Investment",
    description: "Our investment philosophy combines rigorous fundamental analysis with a long-term perspective. We construct diversified portfolios tailored to each family's unique objectives, risk tolerance, and time horizon.",
    features: [
      "Custom portfolio construction",
      "Direct indexing strategies",
      "Alternative investments access",
      "Risk management and monitoring",
    ],
  },
  {
    icon: Shield,
    title: "Wealth Preservation",
    description: "Protecting wealth is as important as growing it. Our preservation strategies are designed to shield your assets from market volatility, inflation, and unforeseen circumstances.",
    features: [
      "Hedging strategies",
      "Insurance optimization",
      "Liability management",
      "Crisis planning and response",
    ],
  },
  {
    icon: Building2,
    title: "Real Estate Advisory",
    description: "Real estate can be a powerful wealth-building tool. We provide comprehensive guidance on direct investments, REITs, and property portfolio optimization.",
    features: [
      "Direct investment sourcing",
      "Commercial and residential",
    ],
  },
  {
    icon: Users,
    title: "Family Office Services",
    description: "For families requiring comprehensive support, our family office services provide a single point of coordination for all financial, administrative, and personal matters.",
    features: [
      "Bill pay and cash management",
      "Household staff coordination",
      "Travel and lifestyle management",
      "Family governance consulting",
    ],
  },
  {
    icon: Scale,
    title: "Estate & Tax Planning",
    description: "Strategic planning to minimize tax burden and ensure smooth wealth transfer. We work with your existing advisors or provide introductions to top specialists.",
    features: [
      "Estate plan design and review",
      "Trust structure optimization",
      "Gift and generation-skipping strategies",
      "Charitable giving vehicles",
    ],
  },
  {
    icon: Globe,
    title: "Global Diversification",
    description: "Access to international markets and opportunities that most investors never see. We leverage our global network to source unique investments worldwide.",
    features: [
      "International equity exposure",
      "Emerging markets allocation",
      "Currency hedging strategies",
      "Cross-border planning",
    ],
  },
];

const additionalServices = [
  { icon: PieChart, title: "Asset Allocation", description: "Strategic and tactical allocation across all asset classes" },
  { icon: Landmark, title: "Private Banking", description: "Lending solutions for real estate, art, and aircraft" },
  { icon: GraduationCap, title: "Next-Gen Education", description: "Financial literacy programs for heirs" },
  { icon: FileText, title: "Reporting & Analytics", description: "Comprehensive performance and holdings reports" },
  { icon: Briefcase, title: "Business Advisory", description: "M&A support and business transition planning" },
  { icon: Heart, title: "Philanthropy", description: "Foundation management and impact investing" },
];

export default function Services() {
  const servicesRef = useRef(null);
  const additionalRef = useRef(null);
  const servicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const additionalInView = useInView(additionalRef, { once: true, margin: "-100px" });

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
              Our Services
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Comprehensive Solutions
              <br />
              for Complex Needs
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              We offer an integrated suite of services designed to address every 
              aspect of your financial life, delivered with exceptional care and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section ref={servicesRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Core Offerings
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              What We Do Best
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Each service is delivered by dedicated specialists who bring decades 
              of experience and an unwavering commitment to your success.
            </p>
          </motion.div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-2xl text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-secondary rounded-sm p-12 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <service.icon className="w-32 h-32 text-accent/20 mx-auto" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section ref={additionalRef} className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={additionalInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              And More
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Additional Capabilities
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={additionalInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-start gap-4 p-6 bg-card rounded-sm"
              >
                <service.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {service.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <FooterSection />
    </main>
  );
}
