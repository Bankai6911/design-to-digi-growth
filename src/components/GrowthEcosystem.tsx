import { motion } from "framer-motion";
import { Globe, Search, Target, ShoppingCart, TrendingUp } from "lucide-react";

const nodes = [
  { icon: Globe, label: "Website", color: "from-blue-500/20 to-blue-600/10" },
  { icon: Search, label: "SEO", color: "from-cyan-500/20 to-cyan-600/10" },
  { icon: Target, label: "Paid Ads", color: "from-purple-500/20 to-purple-600/10" },
  { icon: ShoppingCart, label: "Marketplace", color: "from-pink-500/20 to-pink-600/10" },
  { icon: TrendingUp, label: "Growth", color: "from-green-500/20 to-green-600/10" },
];

const GrowthEcosystem = () => (
  <section className="section-padding bg-background relative overflow-hidden">
    <div className="absolute inset-0 grid-bg" />
    
    <div className="container mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-neon-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3 block">
          Ecosystem
        </span>
        <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
          One Strategy. <span className="text-gradient-blue">Multiple Growth Channels.</span>
        </h2>
      </motion.div>

      {/* Flow nodes */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
        {nodes.map((node, i) => (
          <div key={node.label} className="flex items-center gap-2 md:gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className={`group relative glass neon-border rounded-2xl p-5 md:p-6 text-center min-w-[120px] hover:shadow-neon-blue transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${node.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                <node.icon className="w-7 h-7 text-neon-blue mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                <p className="text-foreground font-heading font-semibold text-sm">{node.label}</p>
              </div>
            </motion.div>
            
            {/* Arrow connector */}
            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.1 }}
                className="text-neon-blue/40 hidden md:block"
              >
                <svg width="32" height="12" viewBox="0 0 32 12">
                  <path d="M0 6h28m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </motion.div>
            )}
            {i < nodes.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neon-blue/40 md:hidden rotate-90"
              >
                <svg width="24" height="12" viewBox="0 0 24 12">
                  <path d="M0 6h20m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GrowthEcosystem;
