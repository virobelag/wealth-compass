import { Linkedin, Twitter } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "News & Insights", href: "#news" },
  ],
  services: [
    { label: "Investment Management", href: "#services" },
    { label: "Family Office", href: "#services" },
    { label: "Estate Planning", href: "#services" },
    { label: "Private Banking", href: "#services" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Disclosures", href: "#disclosures" },
    { label: "Form CRS", href: "#formcrs" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cream rounded-sm flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-lg">S</span>
              </div>
              <span className="font-serif text-xl font-semibold text-cream tracking-tight">
                Sovereign Wealth
              </span>
            </a>
            <p className="text-cream/60 leading-relaxed max-w-sm mb-6">
              Dedicated to preserving and growing wealth for ultra-high-net-worth 
              families across generations.
            </p>
            <div className="flex gap-4">
              <a
                href="#linkedin"
                className="w-10 h-10 bg-cream/10 rounded-sm flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-cream" />
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-cream/10 rounded-sm flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Twitter className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-5">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream/50 text-sm">
              © 2025 Sovereign Wealth Management. All rights reserved.
            </p>
            <p className="text-cream/40 text-xs max-w-2xl text-center md:text-right">
              Investment advisory services offered through Sovereign Wealth Advisors, LLC, 
              a registered investment adviser. Past performance is not a guarantee of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
