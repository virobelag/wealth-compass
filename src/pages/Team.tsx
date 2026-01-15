import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { Linkedin } from "lucide-react";

const leadership = [
  {
    name: "Youssry Henien",
    title: "Chairman",
    bio: "Youssry is Chairman of Virobel AG since its inception in 2015 after a distinguished career at BNP Paribas and a Single Family Office for the Saudi Royal Family. He continues to guide the firm's strategic vision and personally advises our longest-standing client families.",
    image: null,
  },
];

export default function Team() {
  const leadershipRef = useRef(null);
  const leadershipInView = useInView(leadershipRef, { once: true, margin: "-100px" });

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
              Chairman
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
