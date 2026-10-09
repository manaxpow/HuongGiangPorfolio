import { useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

interface CountUpProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

export function CountUp({ to, duration = 1.6, prefix = "", suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const value = useMotionValue(0);
  const display = useTransform(value, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);
  const [text, setText] = useState(`${prefix}0${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(value, to, { duration, ease: "easeOut" });
      const unsub = display.on("change", (v) => setText(v));
      return () => {
        controls.stop();
        unsub();
      };
    }
  }, [inView, to, duration, value, display]);

  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
}
