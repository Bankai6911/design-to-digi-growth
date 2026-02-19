import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[100svh] bg-primary overflow-hidden flex items-center">
    {/* Gradient orbs */}
    <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cta/10 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

    {/* Grid pattern overlay */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage:
          "linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    <div className="container mx-auto px-5 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
      <div className="grid md:grid-cols-2 items-center gap-12 md:gap-16">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-hero-foreground/70 text-xs font-medium tracking-wide uppercase">
              Digital Marketing Agency
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-[2.5rem] leading-[1.1] md:text-5xl lg:text-6xl text-hero-foreground mb-5"
          >
            Accelerate Your
            <br />
            <span className="text-gradient">Online Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-hero-foreground/60 text-base md:text-lg leading-relaxed mb-8 max-w-md"
          >
            Drive traffic, engage your audience & build a digital presence that
            converts visitors into loyal customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-cta text-cta-foreground font-semibold px-7 py-3.5 rounded-xl text-sm btn-glow hover:scale-[1.03] transition-all duration-300"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 glass text-hero-foreground font-medium px-7 py-3.5 rounded-xl text-sm hover:bg-hero-foreground/10 transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              See How It Works
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex gap-8"
          >
            {[
              { num: "200+", label: "Clients" },
              { num: "95%", label: "Retention" },
              { num: "3x", label: "Avg. ROI" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-hero-foreground font-heading font-bold text-2xl md:text-3xl">
                  {s.num}
                </p>
                <p className="text-hero-foreground/40 text-xs mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cta/20 to-accent/20 rounded-2xl md:rounded-3xl blur-2xl scale-105" />
            <img
              alt="Digital marketing team analyzing data dashboards"
              className="relative w-full aspect-[4/3] md:aspect-auto md:h-[480px] rounded-2xl md:rounded-3xl object-cover shadow-glass-lg"
              src="/lovable-uploads/76901592-0728-41a0-bd71-68c061f3771d.jpg"
            />
            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 md:-left-6 glass-strong rounded-xl px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-accent text-lg">📈</span>
              </div>
              <div>
                <p className="text-hero-foreground font-semibold text-sm">+300%</p>
                <p className="text-hero-foreground/50 text-[10px]">Traffic Growth</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Smooth bottom transition */}
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default Hero;
