import { motion, useInView } from "framer-motion";
import { Award, TrendingUp, Headphones, Shield } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 95, suffix: "%", label: "Client Retention" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

const points = [
  { icon: Award, name: "Proven Results", desc: "Award-winning campaigns that deliver measurable ROI" },
  { icon: TrendingUp, name: "Transparent", desc: "Clear reporting and honest communication at every step" },
  { icon: Headphones, name: "24/7 Support", desc: "A dedicated team that's always in your corner" },
  { icon: Shield, name: "Data Secure", desc: "Your business data is protected with industry standards" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const WhyChooseUs = () => (
  <section className="section-padding bg-background overflow-hidden">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-cta text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          Why Us
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
          Why Choose Us?
        </h2>
      </motion.div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary rounded-2xl md:rounded-3xl p-8 md:p-10 mb-10"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-hero-foreground font-heading font-bold text-3xl md:text-4xl mb-1">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </p>
              <p className="text-hero-foreground/50 text-xs md:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Points */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-card rounded-2xl border border-border p-6 hover:shadow-premium hover:-translate-y-1 transition-all duration-400"
          >
            <div className="mb-4 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <p.icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
            </div>
            <p className="font-heading font-semibold text-base text-card-foreground mb-1">{p.name}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
