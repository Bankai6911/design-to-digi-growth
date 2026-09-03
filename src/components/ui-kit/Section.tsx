import { forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Renders the subtle animated grid overlay. Defaults to true. */
  grid?: boolean;
  containerClassName?: string;
}

/**
 * Standard page section shell: padding, grid backdrop and centered container.
 * Extracted so every section shares one layout source of truth.
 */
const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, children, className, grid = true, containerClassName }, ref) => (
    <section
      ref={ref}
      id={id}
      className={cn("section-padding bg-background relative overflow-hidden", className)}
    >
      {grid && <div className="absolute inset-0 grid-bg" aria-hidden="true" />}
      <div className={cn("container mx-auto relative z-10", containerClassName)}>{children}</div>
    </section>
  ),
);

Section.displayName = "Section";

export default Section;
