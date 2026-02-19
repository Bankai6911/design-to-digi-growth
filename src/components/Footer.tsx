import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary pt-14 pb-8">
      <div className="container mx-auto px-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="font-heading font-bold text-xl text-hero-foreground mb-3">
              AdMetaverse
            </h3>
            <p className="text-hero-foreground/50 text-sm leading-relaxed max-w-xs">
              Accelerating your online growth with data-driven digital marketing solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-hero-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {["Services", "About Us", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="text-hero-foreground/50 text-sm hover:text-hero-foreground transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-hero-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {["SEO Optimization", "Social Media Ads", "Web Development", "Brand Identity"].map((s) => (
                <li key={s}>
                  <span className="text-hero-foreground/50 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading font-semibold text-sm text-hero-foreground mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-9 h-9 rounded-lg bg-hero-foreground/5 flex items-center justify-center text-hero-foreground/50 hover:bg-hero-foreground/10 hover:text-hero-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-hero-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-hero-foreground/30 text-xs">
            © 2026 AdMetaverse. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-hero-foreground/5 flex items-center justify-center text-hero-foreground/50 hover:bg-hero-foreground/10 hover:text-hero-foreground transition-all duration-300"
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
