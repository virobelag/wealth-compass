import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Award-Winning Advisors",
    description: "Our team includes former Goldman Sachs partners and industry-recognized experts.",
  },
  {
    icon: Users,
    title: "Boutique Service",
    description: "We maintain a select client base to ensure personalized attention and discretion.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Performance",
    description: "Outperforming benchmarks while maintaining our clients' risk preferences.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Who We Are
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              A Trusted Partner for
              <br />
              Exceptional Families
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Founded in 1989, Sovereign Wealth Management has grown from a single 
              family's vision into one of the nation's most respected private wealth 
              advisory firms. We serve families who seek not just wealth management, 
              but a true partnership built on trust, expertise, and shared values.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our approach combines the sophistication of a global investment firm 
              with the intimacy of a family office—because that's exactly what we are.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex gap-5 p-6 bg-secondary rounded-sm"
              >
                <div className="w-12 h-12 bg-background rounded-sm flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
