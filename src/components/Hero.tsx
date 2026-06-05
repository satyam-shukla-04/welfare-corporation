"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Clock, Shield, Users } from "lucide-react";
import { BackgroundAura } from "@/components/PremiumUI";

const Hero = () => {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 700], [0, 90]);
  const cardY = useTransform(scrollY, [0, 700], [0, -55]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-porcelain text-text-primary">
      <BackgroundAura light />
      <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-10 px-6 pb-20 pt-32 lg:grid-cols-[55fr_45fr] xl:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: "easeOut", delay: 0.25 }}
          className="max-w-4xl"
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-primary/10 bg-white/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-text-secondary shadow-premium backdrop-blur-2xl">
            <Shield size={16} className="text-accent" />
            Trusted Corporate Mobility Partner
          </div>
          <h1 className="max-w-[13ch] text-balance text-5xl font-black leading-[1.02] tracking-[-0.015em] text-[#0F172A] opacity-100 md:text-6xl lg:text-7xl xl:text-[5.7rem]">
            Trusted Corporate
            <span className="block">Travel Solutions</span>
            <span className="block text-[#0F172A] opacity-100">for Enterprises</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-text-secondary md:text-lg">
            Serving 150+ businesses with premium transportation and executive travel solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="premium-button">
              <span>Get Quote</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white/75 px-6 py-3 text-sm font-bold text-text-primary shadow-premium backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative min-h-[540px]">
          <div className="absolute right-0 top-6 h-[70%] w-[84%] overflow-hidden rounded-[3.5rem] border border-white/70 bg-white/40 shadow-glow backdrop-blur-2xl">
            <Image
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1600&auto=format&fit=crop"
              alt="Premium executive sedan"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-white/20" />
          </div>
          <div className="absolute bottom-8 left-0 h-[48%] w-[56%] overflow-hidden rounded-[2.75rem] border border-white/70 bg-white/50 shadow-premium backdrop-blur-2xl">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Corporate office arrival"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            style={{ y: cardY }}
            className="absolute left-8 top-20 rounded-[1.75rem] border border-white/70 bg-white/72 p-4 shadow-premium backdrop-blur-2xl"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/10 text-accent">
                <Users size={20} />
              </span>
              <div>
                <p className="text-2xl font-black text-text-primary">150+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-text-muted">Businesses</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 right-4 max-w-[18rem] rounded-[1.75rem] border border-white/70 bg-primary p-5 text-white shadow-glow"
          >
            <div className="mb-4 flex gap-3 text-accent">
              <Clock size={20} />
              <Briefcase size={20} />
            </div>
            <p className="text-sm leading-7 text-text-inverse-soft">
              24/7 support, verified chauffeurs, premium fleet, and accountable corporate operations.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 rounded-t-[4rem] bg-white" />
    </section>
  );
};

export default Hero;
