"use client";

/**
 * Minimal animated icon for experience cards: floating code brackets
 * with a soft pulse on the center dot. Ported from the resume's
 * AnimatedWorkIcon.astro.
 */

import React from "react";
import { motion } from "motion/react";

const AnimatedWorkIcon = () => {
  return (
    <motion.div
      className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 md:h-12 md:w-12"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity }}
    >
      <svg
        className="h-6 w-6 text-white/85 md:h-7 md:w-7"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <motion.path
          d="M8 7L5 12L8 17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.path
          d="M16 7L19 12L16 17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, delay: 0.12 }}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="1.35"
          fill="currentColor"
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          animate={{ opacity: [0.35, 1, 0.35], scale: [1, 1.35, 1] }}
          transition={{ duration: 1.8, ease: "easeInOut", repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

export default AnimatedWorkIcon;
