"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
  direction = "up",
}: FadeInProps) {
  const offset = 35;

  const initial = {
    opacity: 0,
    ...(direction === "up" && { y: offset }),
    ...(direction === "down" && { y: -offset }),
    ...(direction === "left" && { x: offset }),
    ...(direction === "right" && { x: -offset }),
  };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
