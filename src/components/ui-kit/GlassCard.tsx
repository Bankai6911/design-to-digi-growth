import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  /** Hover glow color. */
  glow?: "blue" | "purple" | "none";
  /** Lift the card on hover. */
  lift?: boolean;
}

/** Glassmorphism card with the project's neon border and hover treatment. */
const GlassCard = ({
  children,
  className,
  glow = "blue",
  lift = true,
  ...motionProps
}: GlassCardProps) => (
  <motion.div
    {...motionProps}
    className={cn(
      "group glass neon-border rounded-2xl transition-all duration-500",
      glow === "blue" && "hover:shadow-neon-blue",
      glow === "purple" && "hover:shadow-neon-purple",
      lift && "hover:-translate-y-1",
      className,
    )}
  >
    {children}
  </motion.div>
);

export default GlassCard;
