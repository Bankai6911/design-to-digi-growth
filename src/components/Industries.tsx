import { motion } from "framer-motion";
import { Stethoscope, Store, Rocket, Wrench, ShoppingBag } from "lucide-react";
import Section from "@/components/ui-kit/Section";
import SectionHeading from "@/components/ui-kit/SectionHeading";
import GlassCard from "@/components/ui-kit/GlassCard";
import { revealProps, scaleIn, staggerContainer } from "@/lib/motion";

const industries = [
  { icon: Stethoscope, name: "Clinics" },
  { icon: Store, name: "Local Businesses" },
  { icon: Rocket, name: "Startups" },
  { icon: Wrench, name: "Service Providers" },
  { icon: ShoppingBag, name: "E-commerce Brands" },
];

const Industries = () => (
  <Section>
    <SectionHeading eyebrow="Who We Serve" eyebrowClassName="text-neon-cyan">
      Industries We <span className="text-gradient-cyan">Serve</span>
    </SectionHeading>

    <motion.div
      variants={staggerContainer(0.08)}
      {...revealProps}
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-4xl mx-auto"
    >
      {industries.map((ind) => (
        <GlassCard key={ind.name} variants={scaleIn} glow="purple" className="p-6 text-center">
          <ind.icon
            className="w-8 h-8 text-neon-purple mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
            strokeWidth={1.5}
          />
          <p className="text-foreground font-heading font-medium text-sm">{ind.name}</p>
        </GlassCard>
      ))}
    </motion.div>
  </Section>
);

export default Industries;
