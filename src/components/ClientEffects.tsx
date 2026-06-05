"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-accent"
      style={{ scaleX }}
    />
  );
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[65] hidden h-48 w-48 rounded-full bg-accent/8 blur-3xl lg:block"
      animate={{ x: position.x - 96, y: position.y - 96 }}
      transition={{ type: "spring", stiffness: 80, damping: 28, mass: 0.4 }}
    />
  );
}
