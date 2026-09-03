import { motion } from "framer-motion";
import { Layers, Search, Zap, Smartphone, TrendingUp } from "lucide-react";
import Section from "@/components/ui-kit/Section";
import SectionHeading from "@/components/ui-kit/SectionHeading";
import GlassCard from "@/components/ui-kit/GlassCard";
import { fadeUp, revealProps, staggerContainer } from "@/lib/motion";

const points = [
  {
    icon: Layers,
    name: "Conversion-Focused Architecture",
    desc: "Every pixel designed to drive action and maximize conversions.",
  },
  {
    icon: Search,
    name: "SEO-Ready Foundations",
    desc: "Built from the ground up for search engine visibility.",
  },
  {
    icon: Zap,
    name: "High-Performance Code",
    desc: "Lightning-fast load times with optimized, clean code.",
  },
  {
    icon: Smartphone,
    name: "Mobile-First Design",
    desc: "Flawless experiences across every screen size.",
  },
  {
    icon: TrendingUp,
    name: "Scalable Growth Systems",
    desc: "Architecture that grows with your business.",
  },
];

const WhyChooseUs = () => (
  <Section id="why-us">
    <SectionHeading eyebrow="Why Us" eyebrowClassName="text-neon-purple">
      Why <span className="text-gradient-blue">AdMetaverse</span>
    </SectionHeading>

    <motion.div
      variants={staggerContainer(0.08)}
      {...revealProps}
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto"
    >
      {points.map((p) => (
        <GlassCard key={p.name} variants={fadeUp} glow="purple" className="p-6">
          <div className="mb-4 w-11 h-11 rounded-xl bg-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/20 group-hover:scale-110 transition-all duration-300">
            <p.icon className="w-5 h-5 text-neon-purple" strokeWidth={1.5} />
          </div>
          <p className="font-heading font-semibold text-base text-foreground mb-1">{p.name}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
        </GlassCard>
      ))}
    </motion.div>
  </Section>
);

export default WhyChooseUs;
