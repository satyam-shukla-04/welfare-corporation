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
    <section className="relative overflow-hidden bg-porcelain text-text-primary lg:min-h-screen">
      <BackgroundAura light />
      <div className="container relative z-10 mx-auto grid items-center gap-7 px-5 pb-12 pt-24 sm:px-6 md:gap-9 md:pb-16 md:pt-28 lg:min-h-screen lg:grid-cols-[55fr_45fr] lg:gap-10 lg:pb-20 lg:pt-32 xl:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.95, ease: "easeOut", delay: 0.25 }}
          className="max-w-4xl text-center sm:text-left"
        >
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/10 bg-white/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-text-secondary shadow-premium backdrop-blur-2xl md:mb-7 md:gap-3 md:px-4 md:text-[11px] md:tracking-[0.22em]">
            <Shield size={15} className="shrink-0 text-accent md:h-4 md:w-4" />
            Trusted Corporate Mobility Partner
          </div>
          <h1 className="mx-auto max-w-[12.5ch] text-balance text-4xl font-black leading-[1.04] text-[#0F172A] opacity-100 sm:mx-0 sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.7rem]">
            Trusted Corporate
            <span className="block">Travel Solutions</span>
            <span className="block text-[#0F172A] opacity-100">for Enterprises</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-text-secondary sm:mx-0 md:mt-7 md:text-lg md:leading-8">
            Serving 150+ businesses with premium transportation and executive travel solutions.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-9 md:gap-4">
            <Link href="/contact" className="premium-button px-5 py-3">
              <span>Get Quote</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-primary/10 bg-white/75 px-5 py-3 text-sm font-bold text-text-primary shadow-premium backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:bg-white active:scale-95 md:px-6"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative h-[350px] sm:h-[420px] md:h-[500px] lg:min-h-[540px]">
          <div className="absolute right-0 top-0 h-[70%] w-[94%] overflow-hidden rounded-[2rem] border border-white/70 bg-white/40 shadow-glow backdrop-blur-2xl sm:w-[88%] md:top-4 md:rounded-[3rem] lg:top-6 lg:w-[84%] lg:rounded-[3.5rem]">
            <Image
              src="/images/hero/home-executive-chauffeur.png"
              alt="Executive chauffeur service with luxury sedan"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-white/20" />
          </div>
          <div className="absolute bottom-7 left-0 h-[42%] w-[58%] overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/50 shadow-premium backdrop-blur-2xl sm:h-[46%] sm:rounded-[2.25rem] md:bottom-8 md:h-[48%] md:w-[56%] md:rounded-[2.75rem]">
            <Image
              src="/images/hero/home-operations-support.png"
              alt="Corporate mobility operations support"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            style={{ y: cardY }}
            className="absolute left-3 top-12 rounded-[1.25rem] border border-white/70 bg-white/78 p-3 shadow-premium backdrop-blur-2xl sm:left-6 sm:top-16 sm:rounded-[1.5rem] sm:p-4 md:left-8 md:top-20 md:rounded-[1.75rem]"
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/10 text-accent sm:h-11 sm:w-11">
                <Users size={18} />
              </span>
              <div>
                <p className="text-xl font-black text-text-primary sm:text-2xl">150+</p>
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-text-muted sm:text-[10px] sm:tracking-[0.22em]">Businesses</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-0 max-w-[13.5rem] rounded-[1.35rem] border border-white/70 bg-primary p-4 text-white shadow-glow sm:bottom-12 sm:right-3 sm:max-w-[16rem] sm:rounded-[1.5rem] md:bottom-16 md:right-4 md:max-w-[18rem] md:rounded-[1.75rem] md:p-5"
          >
            <div className="mb-2 flex gap-3 text-accent md:mb-4">
              <Clock size={18} />
              <Briefcase size={18} />
            </div>
            <p className="text-xs leading-6 text-text-inverse-soft md:text-sm md:leading-7">
              24/7 support, verified chauffeurs, premium fleet, and accountable corporate operations.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 rounded-t-[2rem] bg-white md:h-24 md:rounded-t-[4rem]" />
    </section>
  );
};

export default Hero;
