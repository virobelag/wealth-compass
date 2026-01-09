import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Navigation } from "@/components/layout/Navigation";
import { FooterSection } from "@/components/sections/FooterSection";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

const featuredArticle = {
  title: "Navigating Market Volatility: A Long-Term Perspective",
  excerpt: "Markets are inherently unpredictable in the short term. Our Chief Investment Officer shares insights on maintaining composure and capitalizing on opportunities during uncertain times.",
  author: "Marcus Thompson",
  date: "January 5, 2025",
  readTime: "8 min read",
  category: "Market Commentary",
};

const articles = [
  {
    title: "Estate Planning in 2025: Key Changes You Need to Know",
    excerpt: "Recent legislative changes have significant implications for estate planning. Here's what ultra-high-net-worth families should consider.",
    author: "Amanda Foster",
    date: "January 2, 2025",
    readTime: "6 min read",
    category: "Wealth Planning",
  },
  {
    title: "The Rise of Private Credit: Opportunities and Risks",
    excerpt: "Private credit has emerged as an attractive asset class. We examine the opportunity set and what investors should consider.",
    author: "David Park",
    date: "December 28, 2024",
    readTime: "7 min read",
    category: "Alternative Investments",
  },
  {
    title: "Preparing the Next Generation: Financial Literacy That Lasts",
    excerpt: "Teaching heirs about wealth management is crucial for family legacy. Our approach to next-generation education.",
    author: "Lisa Zhang",
    date: "December 20, 2024",
    readTime: "5 min read",
    category: "Family Governance",
  },
  {
    title: "Real Estate Outlook: Where We See Value in 2025",
    excerpt: "Commercial real estate faces headwinds, but opportunities exist. Our real estate team shares their perspective.",
    author: "Michael Rodriguez",
    date: "December 15, 2024",
    readTime: "6 min read",
    category: "Real Estate",
  },
  {
    title: "Tax-Loss Harvesting: Year-End Strategies",
    excerpt: "As the year closes, tax-loss harvesting can enhance after-tax returns. Best practices and considerations.",
    author: "Amanda Foster",
    date: "December 10, 2024",
    readTime: "4 min read",
    category: "Tax Planning",
  },
  {
    title: "International Diversification: Beyond the Headlines",
    excerpt: "Global markets offer diversification benefits despite geopolitical uncertainty. A thoughtful approach to international investing.",
    author: "Robert Kim",
    date: "December 5, 2024",
    readTime: "7 min read",
    category: "Global Markets",
  },
];

const categories = [
  "All",
  "Market Commentary",
  "Wealth Planning",
  "Alternative Investments",
  "Family Governance",
  "Real Estate",
  "Tax Planning",
];

export default function Insights() {
  const articlesRef = useRef(null);
  const articlesInView = useInView(articlesRef, { once: true, margin: "-100px" });

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
              News & Insights
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream leading-tight mb-6">
              Thought Leadership
              <br />
              & Market Views
            </h1>
            <p className="text-cream/70 text-lg md:text-xl leading-relaxed">
              Insights from our investment team on markets, wealth planning, 
              and the issues that matter most to our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="aspect-[16/10] bg-secondary rounded-sm flex items-center justify-center">
              <span className="font-serif text-6xl text-muted-foreground/30">Featured</span>
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-sm mb-4">
                {featuredArticle.category}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                {featuredArticle.title}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {featuredArticle.excerpt}
              </p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {featuredArticle.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {featuredArticle.readTime}
                </span>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Read Article
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                  index === 0
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section ref={articlesRef} className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                animate={articlesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[16/10] bg-secondary rounded-sm mb-6 flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                  <span className="font-serif text-3xl text-muted-foreground/30">
                    {article.category.split(' ')[0]}
                  </span>
                </div>
                <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-xs font-medium rounded-sm mb-3">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center justify-center h-12 px-8 bg-secondary text-foreground font-medium rounded-sm hover:bg-muted transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Stay Informed
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Subscribe to receive our latest insights and market commentary 
              directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="h-12 px-6 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-navy-light transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
