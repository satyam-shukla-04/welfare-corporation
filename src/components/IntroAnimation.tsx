"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const INTRO_KEY = "welfare-intro-seen";

const IntroAnimation = () => {
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = window.sessionStorage.getItem(INTRO_KEY);

    if (prefersReducedMotion || alreadySeen) return;

    setVisible(true);
    window.sessionStorage.setItem(INTRO_KEY, "true");
  }, []);

  useEffect(() => {
    if (!visible) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => setVisible(false),
      });

      tl.fromTo(glowRef.current, { scale: 0.82, opacity: 0 }, { scale: 1.08, opacity: 1, duration: 1.2 })
        .fromTo(logoRef.current, { autoAlpha: 0, scale: 0.86, filter: "blur(18px)" }, { autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.9 }, "-=0.7")
        .fromTo(titleRef.current, { y: 18, autoAlpha: 0, filter: "blur(12px)" }, { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.85 }, "-=0.25")
        .fromTo(subtitleRef.current, { y: 14, autoAlpha: 0, filter: "blur(10px)" }, { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 0.75 }, "-=0.45")
        .to([logoRef.current, titleRef.current, subtitleRef.current], { y: -16, autoAlpha: 0, filter: "blur(10px)", duration: 0.65, delay: 0.75, ease: "power2.inOut" })
        .to(overlayRef.current, { autoAlpha: 0, scale: 1.02, duration: 0.75, ease: "power2.inOut" }, "-=0.25");
    }, overlayRef);

    return () => ctx.revert();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-porcelain text-primary"
      aria-label="Welfare Corporation intro animation"
    >
      <div ref={glowRef} className="absolute h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute inset-8 rounded-[3rem] border border-white/70 bg-white/30 shadow-glow backdrop-blur-2xl" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div
          ref={logoRef}
          className="mb-8 grid h-24 w-24 place-items-center rounded-full border border-primary/10 bg-primary text-2xl font-black text-white shadow-premium"
        >
          WC
        </div>
        <div ref={titleRef} className="text-4xl font-black tracking-tight md:text-7xl">
          Welfare Corporation
        </div>
        <div ref={subtitleRef} className="mt-5 text-sm font-bold uppercase tracking-[0.32em] text-accent md:text-base">
          Trusted Corporate Mobility Partner
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
