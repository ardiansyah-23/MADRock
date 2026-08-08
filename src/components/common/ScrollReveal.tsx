"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollRevealProps) {
  const getVariants = () => {
    let x = 0;
    let y = 0;

    if (direction === "up") y = 24;
    if (direction === "down") y = -24;
    if (direction === "left") x = 24;
    if (direction === "right") x = -24;

    return {
      hidden: { opacity: 0, x, y },
      visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay * 0.7, // Snappier delay pacing
          ease: [0.16, 1, 0.3, 1] as const, // Butter-smooth Apple spring curve
        },
      },
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }} // Triggers immediately as element enters view
      variants={getVariants()}
      className={`${className} transform-gpu will-change-transform`}
    >
      {children}
    </motion.div>
  );
}
