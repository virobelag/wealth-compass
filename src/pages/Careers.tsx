import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { MapPin, Briefcase, Clock, ArrowRight, Heart, TrendingUp, Users, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const openPositions = [
  {
    title: "Senior Investment Advisor",
    location: "New York, NY",
    type: "Full-time",
    department: "Investment Management",
    description: "Lead client relationships and provide comprehensive investment guidance to ultra-high-net-worth families.",
  },
  {
    title: "Associate Investment Analyst",
    location: "San Francisco, CA",
    type: "Full-time",
    department: "Research",
    description: "Conduct fundamental research and support portfolio construction for our investment team.",
  },
  {
    title: "Director, Estate Planning",
    location: "New York, NY",
    type: "Full-time",
    department: "Wealth Planning",
    description: "Lead estate and tax planning engagements for our most complex client situations.",
  },
  {
    title: "Client Service Associate",
    location: "New York, NY",
    type: "Full-time",
    department: "Client Services",
    description: "Provide exceptional service and support to our clients and advisory teams.",
  },
  {
    title: "Technology Lead",
    location: "Remote",
    type: "Full-time",
    department: "Operations",
    description: "Drive our technology strategy and build tools that enhance the client and advisor experience.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Comprehensive Health",
    description: "Premium medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Competitive Compensation",
    description: "Industry-leading base salary, bonus, and long-term incentive programs.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside brilliant colleagues who value teamwork and excellence.",
  },
  {
    icon: GraduationCap,
    title: "Growth & Development",
    description: "Ongoing training, mentorship, and support for professional certifications.",
  },
];

export default function Careers() {
  const positionsRef = useRef(null);
  const benefitsRef = useRef(null);
  const positionsInView = useInView(positionsRef, { once: true, margin: "-100px" });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: "-100px" });

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
              Careers
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Build Your Career
              <br />
              With Purpose
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Join a team where your expertise makes a meaningful difference in 
              the lives of extraordinary families.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Why Sovereign?
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At Sovereign Wealth Management, you'll work at the intersection of 
                  sophisticated finance and genuine human impact. Our clients trust us 
                  with their most important financial decisions, and we take that 
                  responsibility seriously.
                </p>
                <p>
                  We believe in investing in our people as much as we invest for our clients. 
                  That means competitive compensation, continuous learning opportunities, 
                  and a culture that values work-life balance.
                </p>
                <p>
                  Whether you're an experienced professional or early in your career, 
                  you'll find a place where your contributions matter and your growth 
                  is supported.
                </p>
              </div>
            </motion.div>

            <div ref={benefitsRef} className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-secondary rounded-sm"
                >
                  <benefit.icon className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-serif text-lg text-foreground mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section ref={positionsRef} className="py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={positionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-accent font-medium tracking-widest text-sm uppercase mb-4">
              Open Positions
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Current Opportunities
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our open roles and find where you can make an impact.
            </p>
          </motion.div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={positionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-sm p-6 hover:shadow-card transition-shadow group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Briefcase className="w-4 h-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="gold" className="group/btn flex-shrink-0">
                    Apply Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-cream/70 text-lg mb-8 max-w-xl mx-auto">
              We're always interested in meeting exceptional people. Send us your 
              resume and tell us about yourself.
            </p>
            <a
              href="mailto:careers@sovereignwealth.com"
              className="inline-flex items-center justify-center h-12 px-8 bg-accent text-foreground font-medium rounded-sm hover:bg-gold-light transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
