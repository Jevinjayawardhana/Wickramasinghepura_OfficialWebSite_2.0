import { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type Animation = "fade-in" | "fade-in-left" | "fade-in-right" | "scale-in";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  animation?: Animation;
  delay?: number; // ms
  className?: string;
}

/**
 * Wraps children and reveals them with an animation when scrolled into view.
 */
const Reveal = ({ children, as: Tag = "div", animation = "fade-in", delay = 0, className }: RevealProps) => {
  const { ref, shown } = useReveal();
  const animClass = `animate-${animation}`;
  return (
    <Tag
      ref={ref}
      style={{ animationDelay: shown ? `${delay}ms` : undefined }}
      className={cn(shown ? animClass : "opacity-0", className)}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
