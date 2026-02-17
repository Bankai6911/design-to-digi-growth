import { motion } from "framer-motion";

const projects = [
  { title: "E-Commerce Redesign", category: "Frontend & UX Design" },
  { title: "SaaS Dashboard", category: "Product & Development" },
  { title: "Brand Identity Campaign", category: "Marketing & Creative" },
  { title: "Mobile App Landing", category: "Design & Development" },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const Portfolio = () => (
  <section id="portfolio" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-12"
      >
        Our Portfolio
      </motion.h2>
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <motion.div key={p.title} variants={item} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-40 bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-xs">Project Preview</span>
            </div>
            <div className="p-4">
              <h3 className="font-heading font-semibold text-sm text-card-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-xs mt-1">{p.category}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
