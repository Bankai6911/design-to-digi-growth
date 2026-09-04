import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import NeonButton from "@/components/ui-kit/NeonButton";
import { fadeUp, revealProps, revealViewport } from "@/lib/motion";

const CTASection = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    {/* Glow orbs */}
    <div className="absolute top-0 left-[20%] w-[400px] h-[400px] rounded-full bg-neon-blue/6 blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-[20%] w-[300px] h-[300px] rounded-full bg-neon-purple/6 blur-[100px] pointer-events-none" />

    <div className="container mx-auto relative z-10">
      <motion.div
        variants={fadeUp}
        {...revealProps}
        className="glass neon-border rounded-3xl p-10 md:p-16 text-center max-w-3xl mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={revealViewport}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-14 h-14 rounded-2xl bg-gradient-neon flex items-center justify-center mx-auto mb-6"
          >
            <Zap className="w-7 h-7 text-primary-foreground" />
          </motion.div>

          <h2 className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl text-foreground mb-4 leading-tight">
            Ready to Turn Your Online Presence Into a{" "}
            <span className="text-gradient-blue">Revenue Engine</span>?
          </h2>

          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-lg mx-auto">
            Let's build a digital growth system that drives real results for your business.
          </p>

          <NeonButton href="#contact">
            ⚡ Let's Build Your Growth System
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </NeonButton>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
