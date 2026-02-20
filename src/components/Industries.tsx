import { motion } from "framer-motion";
import { Stethoscope, Store, Rocket, Wrench, ShoppingBag } from "lucide-react";

const industries = [
  { icon: Stethoscope, name: "Clinics" },
  { icon: Store, name: "Local Businesses" },
  { icon: Rocket, name: "Startups" },
  { icon: Wrench, name: "Service Providers" },
  { icon: ShoppingBag, name: "E-commerce Brands" },
];

const Industries = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />

    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-neon-cyan text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          Who We Serve
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          Industries We <span className="text-gradient-cyan">Serve</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 max-w-4xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="group glass neon-border rounded-2xl p-6 text-center hover:shadow-neon-purple hover:-translate-y-1 transition-all duration-500"
          >
            <ind.icon className="w-8 h-8 text-neon-purple mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
            <p className="text-foreground font-heading font-medium text-sm">{ind.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Industries;
