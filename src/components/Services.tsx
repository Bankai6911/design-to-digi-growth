import { motion } from "framer-motion";
import { Search, Share2, Code } from "lucide-react";

const services = [
{
  icon: Search,
  title: "SEO",
  desc: "Boost your search engine rankings with data-driven SEO strategies that increase organic traffic and visibility."
},
{
  icon: Share2,
  title: "Social Media Ads",
  desc: "Reach your ideal customers with targeted Facebook & Instagram ad campaigns that drive real results."
},
{
  icon: Code,
  title: "Website Development",
  desc: "Custom, high-performance websites built to convert visitors into customers with modern technology."
}];


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Services = () =>
<section id="services" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-heading font-bold text-3xl text-center mb-12 text-foreground">Services</h2>
      <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="grid md:grid-cols-3 gap-8 text-left">

        {services.map((s) =>
      <motion.div
        key={s.title}
        variants={item}
        className="bg-card rounded-lg border border-border p-8 text-center hover:shadow-lg transition-shadow">

            <div className="mx-auto mb-5 w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-lg text-card-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
      )}
      </motion.div>
    </div>
  </section>;


export default Services;