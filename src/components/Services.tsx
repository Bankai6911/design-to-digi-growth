import { motion } from "framer-motion";
import { Search, Share2, Code, BarChart3, Palette, Megaphone } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Boost your search engine rankings with data-driven SEO strategies that increase organic traffic.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    icon: Share2,
    title: "Social Media Ads",
    desc: "Reach ideal customers with targeted ad campaigns on Facebook & Instagram for real results.",
    color: "from-pink-500/20 to-pink-600/5",
  },
  {
    icon: Code,
    title: "Web Development",
    desc: "Custom, high-performance websites built to convert visitors into customers.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Deep data analysis to track performance and optimize your marketing spend.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Craft a memorable brand presence that resonates with your target audience.",
    color: "from-purple-500/20 to-purple-600/5",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    desc: "Engaging content strategies that build authority and drive organic growth.",
    color: "from-cyan-500/20 to-cyan-600/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => (
  <section id="services" className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-cta text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          What We Do
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Services
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          We offer comprehensive digital marketing solutions designed to accelerate your online growth.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group relative bg-card rounded-2xl border border-border p-7 md:p-8 hover:shadow-premium hover:-translate-y-1 transition-all duration-400 cursor-default overflow-hidden"
          >
            {/* Gradient background on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
            />
            <div className="relative z-10">
              <div className="mb-5 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <s.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-2">
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
