"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  id: string;
  className?: string;
}

export const ServiceCard = ({ title, description, image, features, id, className }: ServiceCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className={cn(
        "group relative min-h-[430px] overflow-hidden rounded-[3rem] border border-white/70 bg-white text-text-primary shadow-premium",
        className
      )}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover opacity-75 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/5" />
      <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-between p-7 md:p-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full border border-primary/10 bg-white/75 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-text-secondary backdrop-blur-xl">
            Corporate Service
          </span>
          <span className="grid h-11 w-11 place-items-center rounded-full border border-primary/8 bg-white/70 text-accent backdrop-blur-xl">
            <Sparkles size={19} />
          </span>
        </div>

        <div>
          <h3 className="text-3xl font-black tracking-tight">{title}</h3>
          <p className="mt-4 max-w-xl text-sm leading-7 text-text-secondary md:text-base">{description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-2 rounded-full border border-primary/8 bg-white/75 px-3 py-2 text-xs font-semibold text-text-secondary backdrop-blur-xl"
              >
                <Check size={14} className="text-accent" />
                {feature}
              </span>
            ))}
          </div>
          <Link
            href={`/services#${id}`}
            className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-accent"
          >
            <span>Learn More</span>
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

interface FleetCardProps {
  name: string;
  capacity: string;
  bestFor: string;
  image: string;
  category: string;
}

export const FleetCard = ({ name, capacity, bestFor, image, category }: FleetCardProps) => {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
      className="group overflow-hidden rounded-[3rem] border border-white/70 bg-white/80 shadow-premium backdrop-blur-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h4 className="text-2xl font-black tracking-tight text-primary transition-colors group-hover:text-accent">
          {name}
        </h4>
        <div className="mt-4 grid gap-3 text-sm text-text-secondary">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent">
              <Users size={17} />
            </span>
            <span className="font-bold text-primary">{capacity}</span>
          </div>
          <p className="leading-6">{bestFor}</p>
        </div>
        <Link
          href="/contact"
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full border border-primary/10 bg-primary px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-secondary active:scale-95"
        >
          <span>Book Now</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
};
