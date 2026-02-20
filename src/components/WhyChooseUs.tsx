import { motion } from "framer-motion";
import { Layers, Search, Zap, Smartphone, TrendingUp } from "lucide-react";

const points = [
  { icon: Layers, name: "Conversion-Focused Architecture", desc: "Every pixel designed to drive action and maximize conversions." },
  { icon: Search, name: "SEO-Ready Foundations", desc: "Built from the ground up for search engine visibility." },
  { icon: Zap, name: "High-Performance Code", desc: "Lightning-fast load times with optimized, clean code." },
  { icon: Smartphone, name: "Mobile-First Design", desc: "Flawless experiences across every screen size." },
  { icon: TrendingUp, name: "Scalable Growth Systems", desc: "Architecture that grows with your business." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-neon-purple text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          Why Us
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Why <span className="text-gradient-blue">AdMetaverse</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {points.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group glass neon-border rounded-2xl p-6 hover:shadow-neon-purple hover:-translate-y-1 transition-all duration-500"
          >
            <div className="mb-4 w-11 h-11 rounded-xl bg-neon-purple/10 flex items-center justify-center group-hover:bg-neon-purple/20 group-hover:scale-110 transition-all duration-300">
              <p.icon className="w-5 h-5 text-neon-purple" strokeWidth={1.5} />
            </div>
            <p className="font-heading font-semibold text-base text-foreground mb-1">{p.name}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
