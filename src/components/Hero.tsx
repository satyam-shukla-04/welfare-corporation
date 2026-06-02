"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Clock, Shield, Users } from "lucide-react";
import { BackgroundAura } from "@/components/PremiumUI";

const Hero = () => {
  const stats = [
    { value: "150+", label: "Corporate Clients", icon: Users },
    { value: "5000+", label: "Trips Completed", icon: Briefcase },
    { value: "24/7", label: "Corporate Support", icon: Clock },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-primary text-white">
      <BackgroundAura />
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2200&auto=format&fit=crop"
          alt="Luxury Corporate Transport"
          fill
          className="object-cover opacity-50 animate-slow-zoom"
          priority
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(22,163,74,0.22),transparent_30%),linear-gradient(115deg,#07111f_0%,rgba(7,17,31,0.92)_35%,rgba(7,17,31,0.42)_70%,rgba(0,0,0,0.85)_100%)]" />
      </div>

      <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/80 backdrop-blur-2xl">
            <Shield size={16} className="text-accent" />
            Premier Corporate Mobility
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            Trusted Corporate <span className="gradient-text">Travel Solutions</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Serving 150+ global businesses with premium transportation and executive travel solutions across India.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="premium-button">
              <span>Get a Quote</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white/15 active:scale-95"
            >
              Our Services
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            {["L&T", "Reliance", "Tata", "Adani", "HDFC"].map((client) => (
              <span key={client} className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
                {client}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 shadow-glow backdrop-blur-2xl">
            <Image
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop"
              alt="Executive sedan"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-white/10" />
          </div>

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-10 top-16 w-64 rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-glow backdrop-blur-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">Enterprise Ready</p>
            <p className="mt-2 text-3xl font-black">150+</p>
            <p className="mt-1 text-sm text-white/65">Corporate clients served with accountable mobility.</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-8 right-8 rounded-[2rem] border border-white/15 bg-primary/72 p-5 shadow-glow backdrop-blur-2xl"
          >
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent">Live Operations</p>
            <p className="mt-2 text-sm text-white/68">24/7 support, GPS enabled fleet, verified chauffeurs.</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 hidden w-[min(1100px,calc(100%-3rem))] -translate-x-1/2 rounded-[2rem] border border-white/12 bg-white/[0.07] p-4 shadow-premium backdrop-blur-2xl md:grid md:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-4 px-5 py-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-accent">
              <stat.icon size={22} />
            </span>
            <div>
              <div className="text-2xl font-black">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
