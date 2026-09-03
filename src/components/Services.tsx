import { motion } from "framer-motion";
import { Globe, Search, Target, ShoppingCart } from "lucide-react";
import Section from "@/components/ui-kit/Section";
import SectionHeading from "@/components/ui-kit/SectionHeading";
import GlassCard from "@/components/ui-kit/GlassCard";
import { fadeUp, revealProps, staggerContainer } from "@/lib/motion";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance, conversion-focused websites engineered to turn visitors into customers.",
    gradient: "from-blue-500/20 to-cyan-500/5",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "We engineer visibility with data-driven search optimization strategies.",
    gradient: "from-cyan-500/20 to-teal-500/5",
  },
  {
    icon: Target,
    title: "Meta Ads",
    desc: "Precision-targeted Facebook and Instagram campaigns built for measurable ROI.",
    gradient: "from-purple-500/20 to-pink-500/5",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Marketplace Optimization",
    desc: "We optimize product listings and digital storefronts for higher conversions and visibility.",
    gradient: "from-pink-500/20 to-orange-500/5",
  },
];

const Services = () => (
  <Section id="services">
    <SectionHeading
      eyebrow="What We Engineer"
      eyebrowClassName="text-neon-purple"
      subtext="Comprehensive digital solutions designed to accelerate your online growth."
    >
      Services
    </SectionHeading>

    <motion.div
      variants={staggerContainer(0.12)}
      {...revealProps}
      className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto"
    >
      {services.map((s) => (
        <GlassCard
          key={s.title}
          variants={fadeUp}
          className="relative p-7 md:p-8 cursor-default overflow-hidden"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
          />
          <div className="relative z-10">
            <div className="mb-5 w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-300">
              <s.icon className="w-5 h-5 text-neon-blue" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        </GlassCard>
      ))}
    </motion.div>
  </Section>
);

export default Services;
