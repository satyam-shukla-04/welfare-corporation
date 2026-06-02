"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-0.5 w-full origin-left bg-gradient-to-r from-accent via-orange to-white"
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
      className="pointer-events-none fixed z-[65] hidden h-48 w-48 rounded-full bg-accent/10 blur-3xl lg:block"
      animate={{ x: position.x - 96, y: position.y - 96 }}
      transition={{ type: "spring", stiffness: 80, damping: 28, mass: 0.4 }}
    />
  );
}

export function BackgroundAura({ light = false }: { light?: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl",
          light ? "bg-accent/12" : "bg-accent/20"
        )}
      />
      <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-orange/15 blur-3xl animate-float-soft" />
      <div className="absolute bottom-[-10rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      <span className="eyebrow mb-4 block">{eyebrow}</span>
      <h2 className="text-4xl font-black tracking-tight text-primary md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative min-h-[76vh] overflow-hidden bg-primary pt-32 text-white">
      <BackgroundAura />
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover opacity-35" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/92 to-black/55" />
      </div>
      <div className="container relative z-10 mx-auto flex min-h-[76vh] items-center px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="eyebrow mb-5 block">{eyebrow}</span>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function PremiumCTA({
  title,
  description,
  href = "/contact",
  label,
}: {
  title: string;
  description?: string;
  href?: string;
  label: string;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-white">
      <BackgroundAura />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-glow backdrop-blur-2xl md:p-12">
          <h2 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
          {description && <p className="mx-auto mt-5 max-w-2xl text-white/65">{description}</p>}
          <Link href={href} className="premium-button mt-8">
            <span>{label}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
