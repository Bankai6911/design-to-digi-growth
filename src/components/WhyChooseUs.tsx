import { motion } from "framer-motion";
import { Award, TrendingUp, Headphones } from "lucide-react";

const points = [
{ icon: Award, name: "Reliability", desc: "Proven track record of delivering results" },
{ icon: TrendingUp, name: "Transparency", desc: "Clear reporting & honest communication" },
{ icon: Headphones, name: "Dedicated Support", desc: "A team that's always in your corner" }];


const WhyChooseUs = () =>
<section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-6">

        Why Choose Us?
      </motion.h2>
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-hero rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

        <div className="flex-1">
          <p className="text-hero-foreground/60 text-4xl font-heading mb-2">"</p>
          <h3 className="font-heading font-bold text-xl md:text-2xl text-hero-foreground mb-4">
            We Provide Our Clients<br />Award-Winning Results
          </h3>
          <p className="text-hero-foreground/70 text-sm leading-relaxed max-w-md">
            We combine high-performance website development, strategic SEO, and data-driven social media marketing to turn your online presence into a powerful revenue engine.
          </p>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {points.map((p) =>
        <div key={p.name} className="text-center">
              <div className="mx-auto mb-3 w-16 h-16 rounded-full bg-hero-foreground/10 flex items-center justify-center">
                <p.icon className="w-7 h-7 text-hero-foreground" />
              </div>
              <p className="text-hero-foreground font-semibold text-sm">{p.name}</p>
              <p className="text-hero-foreground/60 text-xs mt-1">{p.desc}</p>
            </div>
        )}
        </div>
      </motion.div>
    </div>
  </section>;


export default WhyChooseUs;