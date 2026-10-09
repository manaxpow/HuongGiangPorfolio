import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { type ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: RevealProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.12 });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ y: inView ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
