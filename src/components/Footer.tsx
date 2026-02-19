import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () =>
<footer className="bg-hero py-10">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2 text-hero-foreground font-heading font-bold text-lg">
        Admetaverse
      </div>
      <ul className="flex items-center gap-6 text-hero-foreground/70 text-sm">
        <li><a href="#services" className="hover:text-hero-foreground transition-colors">Services</a></li>
        <li><a href="#about" className="hover:text-hero-foreground transition-colors">About Us</a></li>
        
        <li><a href="#contact" className="hover:text-hero-foreground transition-colors">Contact</a></li>
      </ul>
      <div className="flex items-center gap-4">
        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) =>
      <a key={i} href="#" aria-label="Social link" className="text-hero-foreground/60 hover:text-hero-foreground transition-colors">
            <Icon className="w-4 h-4" />
          </a>
      )}
      </div>
    </div>
    <div className="container mx-auto px-4 mt-6 pt-6 border-t border-hero-foreground/10">
      <p className="text-hero-foreground/40 text-xs text-center">© 2026 Admetaverse. All rights reserved.</p>
    </div>
  </footer>;


export default Footer;