import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-card border-t border-border pt-14 pb-8">
      <div className="container mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-xl text-foreground mb-3">
              <span className="text-gradient-blue">Ad</span>Metaverse
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Engineering Digital Growth for Ambitious Businesses.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Services", href: "#services" },
                { label: "Process", href: "#process" },
                { label: "Why Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["Website Development", "SEO", "Social Media Ads", "Marketplace Optimization"].map((s) => (
                <li key={s}>
                  <span className="text-muted-foreground text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-foreground mb-4">Follow Us</h4>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-lg glass neon-border flex items-center justify-center text-muted-foreground hover:text-neon-blue hover:shadow-neon-blue transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground/50 text-xs">
            © 2026 AdMetaverse. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg glass neon-border flex items-center justify-center text-muted-foreground hover:text-neon-blue hover:shadow-neon-blue transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
