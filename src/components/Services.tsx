import { motion } from "framer-motion";
import { Globe, Search, Target, ShoppingCart } from "lucide-react";

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
    title: "Social Media Advertising",
    desc: "Precision-targeted paid campaigns built for measurable ROI.",
    gradient: "from-purple-500/20 to-pink-500/5",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Marketplace Optimization",
    desc: "We optimize product listings and digital storefronts for higher conversions and visibility.",
    gradient: "from-pink-500/20 to-orange-500/5",
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Services = () => (
  <section id="services" className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-neon-purple text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          What We Engineer
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Services
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          Comprehensive digital solutions designed to accelerate your online growth.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group relative glass neon-border rounded-2xl p-7 md:p-8 hover:shadow-neon-blue hover:-translate-y-1 transition-all duration-500 cursor-default overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
            <div className="relative z-10">
              <div className="mb-5 w-12 h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-neon-blue/20 transition-all duration-300">
                <s.icon className="w-5 h-5 text-neon-blue" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
