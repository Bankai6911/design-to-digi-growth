import { motion } from "framer-motion";
import { Search, Users, Share2, Code } from "lucide-react";

const steps = [
  { icon: Search, title: "Discovery", desc: "We analyze your business, audience, and competition to build a solid foundation." },
  { icon: Users, title: "Strategy", desc: "We craft a data-driven marketing plan tailored to your goals and budget." },
  { icon: Code, title: "Website & Media", desc: "We build conversion-optimized websites and manage your digital media presence." },
  { icon: Share2, title: "Social Media Ads", desc: "We launch targeted ad campaigns on Facebook & Instagram for maximum ROI." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Process = () => (
  <section id="about" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Our Process
      </motion.h2>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s) => (
          <motion.div key={s.title} variants={item} className="bg-card rounded-lg border border-border p-6 text-center hover:shadow-md transition-shadow">
            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-secondary flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-base text-card-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Process;
