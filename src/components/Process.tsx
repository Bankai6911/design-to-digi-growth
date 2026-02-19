import { motion } from "framer-motion";
import { Search, Users, Code, Share2 } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We analyze your business, audience, and competition to build a solid foundation.", num: "01" },
  { icon: Users, title: "Strategy", desc: "We craft a data-driven marketing plan tailored to your goals and budget.", num: "02" },
  { icon: Code, title: "Build & Launch", desc: "We build conversion-optimized websites and manage your digital media presence.", num: "03" },
  { icon: Share2, title: "Scale & Grow", desc: "We launch targeted ad campaigns on Facebook & Instagram for maximum ROI.", num: "04" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Process = () => (
  <section id="about" className="section-padding bg-section-alt">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          How It Works
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Our Process
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
          A proven 4-step approach to transform your digital presence and drive measurable results.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {steps.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group relative bg-card rounded-2xl border border-border p-7 hover:shadow-premium hover:-translate-y-1 transition-all duration-400"
          >
            <span className="absolute top-5 right-6 text-4xl font-heading font-bold text-border group-hover:text-cta/15 transition-colors duration-300">
              {s.num}
            </span>
            <div className="mb-5 w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center">
              <s.icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
            </div>
            <h3 className="font-heading font-semibold text-base text-card-foreground mb-2">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Process;
