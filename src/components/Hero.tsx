import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import NeonButton from "@/components/ui-kit/NeonButton";

const Hero = () => (
  <section className="relative min-h-[100svh] bg-background overflow-hidden flex items-center">
    {/* Animated grid background */}
    <div className="absolute inset-0 grid-bg" />
    
    {/* Gradient orbs */}
    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-neon-blue/8 blur-[150px] pointer-events-none animate-pulse-glow" />
    <div className="absolute bottom-[-20%] left-[-15%] w-[500px] h-[500px] rounded-full bg-neon-purple/8 blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
    <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none" />

    {/* Floating particles */}
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[20%] right-[15%] w-2 h-2 rounded-full bg-neon-blue/40"
    />
    <motion.div
      animate={{ y: [0, 15, 0], x: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[60%] left-[10%] w-1.5 h-1.5 rounded-full bg-neon-purple/50"
    />
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[30%] right-[25%] w-1 h-1 rounded-full bg-neon-cyan/60"
    />

    <div className="container mx-auto px-5 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
            Digital Growth Agency
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-[2.2rem] leading-[1.1] md:text-5xl lg:text-6xl xl:text-7xl text-foreground mb-6"
        >
          We Engineer{" "}
          <span className="text-gradient-blue">Digital Growth</span>
          <br />
          Systems for Modern Businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Web Design. SEO. Paid Ads. Marketplace Optimization.
          <br className="hidden sm:block" />
          Everything your business needs to attract, convert, and scale online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <NeonButton href="#contact">
            🚀 Launch My Business Online
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
          <NeonButton href="#services" variant="ghost">
            <BarChart3 className="w-4 h-4 text-neon-blue" />
            📈 Get a Free Growth Plan
          </NeonButton>
        </motion.div>
      </div>
    </div>

    {/* Bottom gradient transition */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
  </section>
);

export default Hero;
