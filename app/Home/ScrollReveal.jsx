"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "up",
  distance = 35,
  once = true,
}) {
  const getInitialOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
      default:
        return { y: distance, x: 0 };
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialOffset(),
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // cubic bezier smooth spring-like ease out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
