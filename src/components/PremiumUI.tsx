import React from "react";
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

export function BackgroundAura({ light = false }: { light?: boolean }) {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div
        className={cn(
          "absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-3xl",
          light ? "bg-accent/10" : "bg-accent/12"
        )}
      />
      <div className="absolute right-[-8rem] top-1/4 h-96 w-96 rounded-full bg-orange/8 blur-3xl animate-float-soft" />
      <div className="absolute bottom-[-10rem] left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-white/40 blur-3xl" />
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
    <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
      <span className="eyebrow mb-4 block">{eyebrow}</span>
      <h2 className="text-4xl font-black tracking-tight text-[#0F172A] opacity-100 md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-8 text-text-secondary md:text-lg">{description}</p>
      )}
    </div>
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
    <section className="relative min-h-[76vh] overflow-hidden bg-porcelain pt-32 text-text-primary">
      <BackgroundAura light />
      <div className="absolute inset-0">
        <Image src={image} alt={title} fill className="object-cover opacity-30" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-porcelain via-porcelain/92 to-linen/75" />
      </div>
      <div className="container relative z-10 mx-auto flex min-h-[76vh] items-center px-6 pb-16">
        <div className="max-w-4xl">
          <span className="eyebrow mb-5 block">{eyebrow}</span>
          <h1 className="text-5xl font-black tracking-tight text-[#0F172A] opacity-100 md:text-7xl lg:text-8xl">
            {title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
            {description}
          </p>
        </div>
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
    <section className="relative overflow-hidden bg-primary py-20 text-white curved-top">
      <BackgroundAura />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-glow backdrop-blur-2xl md:p-12">
          <h2 className="text-4xl font-black tracking-tight text-text-inverse md:text-5xl">{title}</h2>
          {description && <p className="mx-auto mt-5 max-w-2xl text-text-inverse-soft">{description}</p>}
          <Link href={href} className="premium-button mt-8">
            <span>{label}</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
