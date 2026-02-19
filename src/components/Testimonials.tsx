import { motion } from "framer-motion";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Company Director",
    text: "Admetaverse transformed our online presence. Our leads increased by 300% in just 3 months!",
    avatar: "SM",
  },
  {
    name: "Nami Campbell",
    role: "Startup Founder",
    text: "Professional, responsive, and results-driven. The best marketing team we've worked with.",
    avatar: "NC",
  },
  {
    name: "James Wilson",
    role: "E-Commerce Manager",
    text: "Their SEO strategy put us on the first page of Google. Couldn't be happier with the results.",
    avatar: "JW",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        {/* Mobile: single card with navigation */}
        <div className="md:hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-2xl border border-border p-7 relative"
          >
            <Quote className="w-8 h-8 text-cta/20 mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-card-foreground text-sm leading-relaxed mb-6">
              "{testimonials[active].text}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">
                  {testimonials[active].avatar}
                </span>
              </div>
              <div>
                <p className="font-semibold text-sm text-card-foreground">
                  {testimonials[active].name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonials[active].role}
                </p>
              </div>
            </div>
          </motion.div>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === active ? "bg-cta" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-card transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
          </div>
        </div>

        {/* Desktop: all cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-premium hover:-translate-y-1 transition-all duration-400"
            >
              <Quote className="w-8 h-8 text-cta/20 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-card-foreground text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-card-foreground">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-cta text-cta-foreground font-semibold px-8 py-3.5 rounded-xl text-sm hover:shadow-glow hover:scale-[1.03] transition-all duration-300"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
