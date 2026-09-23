import { Linkedin, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import virobelLogo from "@/assets/virobel-logo.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Founder", href: "/team" },
    { label: "News & Insights", href: "/insights" },
  ],
  services: [
    { label: "Family Office", href: "/family-office" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-primary py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={virobelLogo} 
                alt="Virobel" 
                className="h-14 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-cream/60 leading-relaxed max-w-sm mb-6">
              Dedicated to serving families across generations.
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+41782499994"
                className="flex items-center gap-3 text-cream/60 hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                +41 78 249 9994
              </a>
              <p className="flex items-start gap-3 text-cream/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                Bahnhofplatz 1, 8001 Zurich, Switzerland
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/virobel/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 rounded-sm flex items-center justify-center hover:bg-cream/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-cream text-lg mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-cream/10">
          <p className="text-cream/50 text-sm text-center md:text-left">
            © 2025 Virobel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
