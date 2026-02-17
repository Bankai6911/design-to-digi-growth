import { motion } from "framer-motion";
import { useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Martinez", role: "Company Director", text: "Admetaverse transformed our online presence. Our leads increased by 300% in just 3 months!" },
  { name: "Nami Campbell", role: "Startup Founder", text: "Professional, responsive, and results-driven. The best marketing team we've worked with." },
  { name: "James Wilson", role: "E-Commerce Manager", text: "Their SEO strategy put us on the first page of Google. Couldn't be happier with the results." },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-12"
        >
          Testimonials
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Don't just take our word for it — hear from the businesses we've helped grow. Our clients' success is the best proof of our dedication.
            </p>
            <a href="#contact" className="inline-block bg-cta text-cta-foreground font-semibold px-6 py-2.5 rounded-md hover:brightness-110 transition text-sm">
              Start a Project
            </a>
          </motion.div>
          <div className="flex-1 flex gap-4 overflow-x-auto pb-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setActive(i)}
                className={`min-w-[220px] bg-card rounded-lg border p-5 cursor-pointer transition-shadow ${active === i ? "shadow-lg border-accent" : "border-border"}`}
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-card-foreground text-xs leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm text-card-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
