"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { CONTACT_DETAILS, NAVIGATION_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-3 py-4">
      <div
        className={cn(
          "container mx-auto flex items-center justify-between rounded-[1.65rem] border px-3.5 py-2.5 transition-all duration-500 md:px-5",
          scrolled
            ? "border-white/60 bg-white/78 shadow-[0_18px_55px_-38px_rgba(38,29,16,.5)] backdrop-blur-2xl"
            : "border-white/45 bg-white/36 shadow-[0_18px_55px_-42px_rgba(38,29,16,.45)] backdrop-blur-2xl"
        )}
      >
        <Link href="/" className="group flex items-center gap-3.5 rounded-full pr-2" onClick={() => setIsOpen(false)}>
          <span
            className={cn(
              "grid h-10 w-10 place-items-center rounded-full border text-[13px] font-black transition-all duration-300 group-hover:scale-105",
              scrolled
                ? "border-primary/10 bg-primary text-white shadow-premium"
                : "border-primary/8 bg-primary text-white shadow-premium"
            )}
          >
            WC
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={cn(
                "text-[15px] font-black tracking-[-0.01em] transition-colors md:text-base",
                scrolled ? "text-primary" : "text-primary"
              )}
            >
              Welfare Corporation
            </span>
            <span
              className={cn(
                "mt-0.5 text-[10px] font-semibold tracking-[0.14em] transition-colors",
                scrolled ? "text-text-muted" : "text-text-muted"
              )}
            >
              Infratech Solution
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-0.5 rounded-full border border-primary/5 bg-white/45 p-1 backdrop-blur-xl lg:flex">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-300",
                pathname === link.href
                  ? "bg-primary text-white shadow-[0_10px_28px_-18px_rgba(23,33,28,.8)]"
                  : scrolled
                    ? "text-text-secondary hover:bg-white/70 hover:text-primary"
                    : "text-text-secondary hover:bg-white/70 hover:text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className={cn(
              "group inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 active:scale-95",
              scrolled ? "bg-primary text-white shadow-premium" : "bg-primary text-white shadow-premium"
            )}
          >
            <span>Get Quote</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <button
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border transition-colors lg:hidden",
            scrolled
              ? "border-primary/10 text-primary"
              : "border-primary/10 text-primary"
          )}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 0.98 }}
            transition={{ duration: 0.22 }}
            className="absolute left-3 right-3 top-[5.75rem] flex flex-col gap-3 rounded-[2rem] border border-white/60 bg-white/90 p-4 shadow-premium backdrop-blur-2xl lg:hidden"
          >
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-bold transition-colors",
                  pathname === link.href ? "bg-accent text-white" : "text-primary hover:bg-primary/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-3 border-t border-slate-200 pt-4">
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="flex items-center gap-3 px-4 py-2 font-bold text-primary"
              >
                <Phone size={20} className="text-accent" />
                <span>Call Us</span>
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-primary py-3 text-center font-bold text-white shadow-premium"
                onClick={() => setIsOpen(false)}
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
