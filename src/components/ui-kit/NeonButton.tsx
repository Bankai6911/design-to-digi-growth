import type { ReactNode, MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface NeonButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  size?: "md" | "lg";
}

/** Scrolls smoothly to an in-page anchor, otherwise behaves like a normal link. */
export const scrollToAnchor = (href: string) => {
  if (!href?.startsWith("#")) return false;
  const el = document.querySelector(href);
  if (!el) return false;
  el.scrollIntoView({ behavior: "smooth" });
  return true;
};

/** Primary gradient / ghost glass call-to-action link. */
const NeonButton = ({
  href,
  children,
  variant = "primary",
  className,
  size = "lg",
}: NeonButtonProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToAnchor(href);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-xl text-sm transition-all duration-300",
        size === "lg" ? "px-8 py-4" : "px-5 py-2",
        variant === "primary" &&
          "bg-gradient-neon text-primary-foreground font-semibold btn-glow hover:scale-[1.03]",
        variant === "ghost" &&
          "glass neon-border text-foreground font-medium hover:bg-neon-blue/5",
        className,
      )}
    >
      {children}
    </a>
  );
};

export default NeonButton;
