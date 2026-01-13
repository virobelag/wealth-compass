import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { Award, Target, Heart, Users } from "lucide-react";
import officeImage from "@/assets/office-interior.jpg";

const values = [
  {
    icon: Target,
    title: "Client-First Philosophy",
    description: "Every decision we make is guided by what's best for our clients. Your success is our only measure of achievement.",
  },
  {
    icon: Heart,
    title: "Integrity Without Compromise",
    description: "We operate with complete transparency and honesty, even when it's difficult. Trust is the foundation of everything we do.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description: "We work alongside our clients as true partners, combining our expertise with their unique vision and values.",
  },
  {
    icon: Award,
    title: "Excellence in Execution",
    description: "We pursue excellence in every aspect of our work, from investment analysis to client communication.",
  },
];

const timeline = [
  {
    year: "2015",
    title: "Foundation",
    description: "Virobel establishes the firm with a vision to provide institutional-quality investments to select families.",
  },
  {
    year: "2016",
    title: "Expansion",
    description: "Opened our Switzerland office to serve families and expanded into alternative investments.",
  },
  {
    year: "2018",
    title: "Family Office Services",
    description: "Launched comprehensive family office services including estate planning, tax optimization, and next-generation education.",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Established international partnerships to provide clients access to global investment opportunities and multi-jurisdictional planning.",
  },
  {
    year: "2026",
    title: "Today",
    description: "Managing a select group of families, continuing our legacy of excellence and personalized service.",
  },
];

export default function About() {
  const valuesRef = useRef(null);
  const timelineRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

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
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              A Legacy of Trust,
              <br />
              Built Over Decades
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              For over 40 years, Virobel Founder Youssry Henien has been the trusted 
              partner for families seeking exceptional stewardship of their wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Virobel Wealth Management was founded in 2015 by Youssry Henien, 
                  a former BNP Paribas Private Banker establishing the bank first office in the
                  Middle East and covering Government and Royal Families. Henien 
                  believed that ultra-high-net-worth families deserved better than 
                  what traditional wealth management offered.
                </p>
                <p>
                  His vision was simple yet revolutionary: create a firm that combined 
                  the sophisticated investment capabilities of a major institution with 
                  the personalized attention and alignment of interests that only a 
                  boutique firm could provide.
                </p>
                <p>
                  Today, that vision has grown into a boutique and respected 
                  private wealth firm. We remain true to our founding principles: 
                  invest alongside our clients, maintain the highest ethical standards, 
                  and never lose sight of what matters most—helping families achieve 
                  their dreams across generations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src={officeImage}
                  alt="Virobel office"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Principles That Guide Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 p-8 bg-card rounded-sm"
              >
                <div className="w-14 h-14 bg-secondary rounded-sm flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              35 Years of Excellence
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-8 mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-20">
                  <span className="text-accent font-serif text-2xl font-semibold">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-border pl-8 relative">
                  <div className="absolute left-0 top-0 w-3 h-3 bg-accent rounded-full -translate-x-[7px]" />
                  <h3 className="font-serif text-xl text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
