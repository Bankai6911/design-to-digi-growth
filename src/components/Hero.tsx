import { motion } from "framer-motion";
import heroImg from "@/assets/hero_sec.jpeg";

const Hero = () => (
  <section className="relative bg-hero overflow-hidden">
    <div className="container mx-auto grid md:grid-cols-2 items-center min-h-[520px] gap-8 px-4 pt-28 pb-16 md:pt-32 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-hero-foreground mb-4">
          Accelerate Your<br />Online Growth
        </h1>
        <p className="text-hero-foreground/80 text-base md:text-lg mb-8 max-w-md">
          Drive Traffic, Engage Your Audience &amp; Build Your Digital Presence
        </p>
        <a
          href="#contact"
          className="inline-block bg-cta text-cta-foreground font-semibold px-7 py-3 rounded-md hover:brightness-110 transition text-sm uppercase tracking-wide"
        >
          Get a Free Consultation
        </a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:block"
      >
        <img src={heroImg} alt="Digital marketing team analyzing data dashboards" className="w-full h-full rounded-lg object-cover" />
      </motion.div>
    </div>
    {/* Diagonal bottom */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }} />
  </section>
);

export default Hero;
