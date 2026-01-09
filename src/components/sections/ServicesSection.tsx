import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Shield, Building2, Users, Globe, Scale } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Investment Management",
    description: "Tailored portfolio strategies designed to achieve long-term growth while managing risk across diverse asset classes.",
  },
  {
    icon: Shield,
    title: "Wealth Preservation",
    description: "Comprehensive strategies to protect your assets from market volatility, taxation, and unforeseen circumstances.",
  },
  {
    icon: Building2,
    title: "Real Estate Advisory",
    description: "Expert guidance on direct real estate investments, REIT strategies, and property portfolio optimization.",
  },
  {
    icon: Users,
    title: "Family Office Services",
    description: "Complete family office solutions including governance, succession planning, and next-generation education.",
  },
  {
    icon: Globe,
    title: "Global Diversification",
    description: "Access to international markets and alternative investments to build a truly diversified global portfolio.",
  },
  {
    icon: Scale,
    title: "Estate & Tax Planning",
    description: "Strategic planning to minimize tax burden and ensure smooth wealth transfer across generations.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Comprehensive Wealth Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our integrated approach combines investment expertise with holistic planning 
            to address every aspect of your financial life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 bg-card rounded-sm border border-border hover:border-accent/30 hover:shadow-card transition-all duration-500"
            >
              <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors duration-300">
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
  );
}
