import { motion } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";
import Section from "@/components/ui-kit/Section";
import SectionHeading from "@/components/ui-kit/SectionHeading";
import { revealProps, revealViewport, slideFrom } from "@/lib/motion";

const steps = [
  {
    icon: Search,
    title: "Strategy & Research",
    desc: "Deep-dive into your market, audience, and competition to build a data-driven foundation.",
  },
  {
    icon: Palette,
    title: "UI/UX Engineering",
    desc: "Craft visually stunning, user-centric designs that guide visitors toward conversion.",
  },
  {
    icon: Code,
    title: "Development & Optimization",
    desc: "Build high-performance, SEO-ready digital solutions with clean, scalable code.",
  },
  {
    icon: Rocket,
    title: "Launch & Growth Scaling",
    desc: "Deploy, monitor, and continuously optimize for maximum ROI and scalability.",
  },
];

const Process = () => (
  <Section id="process">
    <SectionHeading eyebrow="Growth Framework">
      <span className="text-gradient-blue">Discover</span> → Design → Deploy → Scale
    </SectionHeading>

    <div className="max-w-3xl mx-auto space-y-0">
      {steps.map((s, i) => (
        <motion.div
          key={s.title}
          variants={slideFrom(i % 2 === 0 ? -30 : 30)}
          initial="hidden"
          whileInView="show"
          viewport={revealViewport}
          transition={{ delay: i * 0.1 }}
          className="relative flex gap-6 group"
        >
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl bg-neon-blue/10 neon-border flex items-center justify-center flex-shrink-0 group-hover:bg-neon-blue/20 group-hover:shadow-neon-blue transition-all duration-500 z-10">
              <s.icon className="w-5 h-5 text-neon-blue" strokeWidth={1.5} />
            </div>
            {i < steps.length - 1 && (
              <div className="w-px h-full bg-gradient-to-b from-neon-blue/20 to-transparent min-h-[40px]" />
            )}
          </div>

          <div className="glass neon-border rounded-2xl p-6 mb-6 flex-1 group-hover:shadow-neon-blue group-hover:-translate-y-0.5 transition-all duration-500">
            <span className="text-neon-blue/40 text-xs font-heading font-bold tracking-wider mb-1 block">
              0{i + 1}
            </span>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Section>
);

export { revealProps };
export default Process;
