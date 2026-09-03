import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { fadeUp, revealProps } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowClassName?: string;
  children: ReactNode;
  subtext?: ReactNode;
  className?: string;
}

/** Centered eyebrow + heading + optional subtext block used by every section. */
const SectionHeading = ({
  eyebrow,
  eyebrowClassName = "text-neon-blue",
  children,
  subtext,
  className,
}: SectionHeadingProps) => (
  <motion.div variants={fadeUp} {...revealProps} className={cn("text-center mb-14", className)}>
    {eyebrow && (
      <span
        className={cn(
          "text-xs font-semibold uppercase tracking-[0.2em] mb-3 block",
          eyebrowClassName,
        )}
      >
        {eyebrow}
      </span>
    )}
    <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
      {children}
    </h2>
    {subtext && (
      <p className="text-muted-foreground max-w-lg mx-auto text-sm md:text-base leading-relaxed">
        {subtext}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
