import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Richard Sovereign",
    title: "Founder & Chairman",
    bio: "Richard founded Sovereign Wealth Management in 1989 after a distinguished career at Goldman Sachs. He continues to guide the firm's strategic vision and personally advises our longest-standing client families.",
    image: null,
  },
  {
    name: "Elizabeth Chen",
    title: "Chief Executive Officer",
    bio: "Elizabeth joined Sovereign in 2005 and has led the firm since 2018. Prior to Sovereign, she was a Managing Director at Morgan Stanley Private Wealth Management.",
    image: null,
  },
  {
    name: "Marcus Thompson",
    title: "Chief Investment Officer",
    bio: "Marcus oversees all investment strategy and portfolio management. His 25-year career includes senior roles at Bridgewater Associates and the Yale Endowment.",
    image: null,
  },
  {
    name: "Sarah Mitchell",
    title: "Head of Family Office Services",
    bio: "Sarah leads our family office practice, bringing 20 years of experience serving ultra-high-net-worth families. She previously ran the family office division at Northern Trust.",
    image: null,
  },
];

const advisors = [
  { name: "David Park", title: "Senior Investment Advisor", specialty: "Alternative Investments" },
  { name: "Jennifer Walsh", title: "Senior Investment Advisor", specialty: "Fixed Income" },
  { name: "Michael Rodriguez", title: "Director, Real Estate", specialty: "Direct Real Estate" },
  { name: "Amanda Foster", title: "Director, Tax Planning", specialty: "Estate & Tax" },
  { name: "Robert Kim", title: "Senior Investment Advisor", specialty: "International Equities" },
  { name: "Catherine Moore", title: "Director, Client Services", specialty: "Client Relations" },
  { name: "James Wilson", title: "Investment Analyst", specialty: "Research" },
  { name: "Lisa Zhang", title: "Associate Advisor", specialty: "Next-Gen Services" },
];

export default function Team() {
  const leadershipRef = useRef(null);
  const advisorsRef = useRef(null);
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" });
  const advisorsInView = useInView(advisorsRef, { once: true, margin: "-100px" });

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
              Our Team
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Exceptional People,
              <br />
              Extraordinary Results
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Our team combines deep expertise with genuine care for each family we serve. 
              We're united by a shared commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section ref={leadershipRef} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Senior Partners
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {leadership.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 30 }}
                animate={leadershipInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-sm overflow-hidden group"
              >
                <div className="aspect-[4/3] bg-secondary flex items-center justify-center">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <span className="font-serif text-3xl text-muted-foreground">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1">
                        {person.name}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {person.title}
                      </p>
                    </div>
                    <a
                      href="#linkedin"
                      className="w-10 h-10 bg-secondary rounded-sm flex items-center justify-center hover:bg-accent/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-muted-foreground" />
                    </a>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {person.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section ref={advisorsRef} className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={advisorsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Our Advisors
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              The Team Behind the Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our advisors bring diverse expertise and backgrounds, united by a 
              commitment to serving our clients with excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                animate={advisorsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card p-6 rounded-sm text-center"
              >
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-lg text-muted-foreground">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-serif text-lg text-foreground mb-1">
                  {person.name}
                </h4>
                <p className="text-accent text-sm mb-2">{person.title}</p>
                <p className="text-muted-foreground text-xs">{person.specialty}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Join Our Team
            </h2>
            <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
              We're always looking for exceptional individuals who share our values 
              and passion for serving clients.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center h-12 px-8 bg-accent text-foreground font-medium rounded-sm hover:bg-gold-light transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
