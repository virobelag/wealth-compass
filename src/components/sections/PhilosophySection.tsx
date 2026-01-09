import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import officeImage from "@/assets/office-interior.jpg";

const principles = [
  {
    number: "01",
    title: "Alignment of Interests",
    description: "We invest alongside our clients, ensuring our success is directly tied to yours.",
  },
  {
    number: "02",
    title: "Long-Term Perspective",
    description: "We think in decades, not quarters, building portfolios designed to endure.",
  },
  {
    number: "03",
    title: "Transparent Partnership",
    description: "Complete transparency in fees, performance, and decision-making processes.",
  },
  {
    number: "04",
    title: "Personalized Attention",
    description: "Each family receives a dedicated team with expertise tailored to their unique needs.",
  },
];

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" ref={ref} className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={officeImage}
                alt="Elegant office interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 to-transparent" />
            </div>
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 lg:-right-12 bg-primary p-8 rounded-sm shadow-card max-w-xs"
            >
              <p className="text-cream font-serif text-lg italic leading-relaxed">
                "True wealth is measured not just in assets, but in the legacy we leave."
              </p>
              <p className="text-gold mt-4 text-sm font-medium">
                — Richard Sovereign, Founder
              </p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Built on Trust,
              <br />
              Driven by Excellence
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              For over three decades, we've guided families through market cycles, 
              economic shifts, and generational transitions with unwavering commitment 
              to their long-term prosperity.
            </p>

            {/* Principles */}
            <div className="space-y-8">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex gap-6"
                >
                  <span className="text-accent font-serif text-2xl font-semibold">
                    {principle.number}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg text-foreground mb-1">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {principle.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
