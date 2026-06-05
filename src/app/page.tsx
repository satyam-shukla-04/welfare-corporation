"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Clock,
  MessageSquare,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import Hero from "@/components/Hero";
import InquiryForm from "@/components/InquiryForm";
import { FleetCard, ServiceCard } from "@/components/Cards";
import { CONTACT_DETAILS, FLEET, SERVICES } from "@/constants";
import { BackgroundAura, SectionHeader, reveal, stagger } from "@/components/PremiumUI";
import { cn } from "@/lib/utils";

const StatCounter = ({ end, suffix, label, icon: Icon }: any) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 text-white shadow-premium backdrop-blur-2xl">
      <div className="mb-8 flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-accent">
          <Icon size={22} />
        </span>
        <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_24px_rgba(22,163,74,.8)]" />
      </div>
      <div className="text-4xl font-black md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-3 text-xs font-bold uppercase tracking-[0.22em] text-text-inverse-muted">{label}</div>
    </div>
  );
};

export default function Home() {
  const why = [
    { title: "Experienced Drivers", desc: "Professional, punctual, and well-trained chauffeurs for a premium experience.", icon: Users },
    { title: "Premium Fleet", desc: "A wide range of well-maintained vehicles from sedans to luxury executives.", icon: Briefcase },
    { title: "On-Time Service", desc: "We value your time, ensuring punctual pickups and drops every single time.", icon: Clock },
    { title: "Reliability", desc: "A trusted business partner with a track record of 5000+ successful trips.", icon: Shield },
  ];

  return (
    <div className="flex flex-col bg-porcelain">
      <Hero />

      <section className="relative overflow-hidden bg-white py-10 text-text-primary curved-bottom">
        <BackgroundAura light />
        <div className="container relative z-10 mx-auto px-6">
          <div className="rounded-[3rem] border border-primary/5 bg-porcelain/70 p-6 shadow-premium backdrop-blur-2xl">
            <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-text-muted">
              Trusted by 150+ Leading Businesses
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-5">
              {["L&T", "Reliance", "Tata", "Adani", "HDFC"].map((client) => (
                <span
                  key={client}
                  className="rounded-2xl border border-primary/5 bg-white/80 px-5 py-4 text-xl font-black text-text-secondary grayscale transition-all hover:-translate-y-1 hover:text-primary"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-porcelain">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_.8fr]">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[520px] overflow-hidden rounded-[4rem] bg-primary p-8 text-white shadow-premium"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1800&auto=format&fit=crop"
                alt="Corporate Transportation"
                fill
                className="object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/84 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <span className="eyebrow">About the Company</span>
                  <h2 className="mt-5 max-w-2xl text-4xl font-black tracking-tight md:text-6xl">
                    Corporate Transportation Expertise You Can Trust
                  </h2>
                </div>
                <p className="mt-16 max-w-2xl text-lg leading-8 text-text-inverse-soft">
                  Welfare Corporation (Infratech Solution) is a premium mobility partner dedicated to providing seamless, safe, and professional transportation solutions for the modern corporate world.
                </p>
              </div>
            </motion.div>

            <div className="grid gap-8">
              {[
                { value: "15+", label: "Years Experience", icon: Shield },
                { value: "24/7", label: "Always available for corporate clients", icon: Clock },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                className="rounded-[3rem] border border-white/70 bg-white/80 p-8 shadow-premium backdrop-blur-2xl"
                >
                  <item.icon className="mb-8 text-accent" size={32} />
                  <div className="text-5xl font-black text-text-primary">{item.value}</div>
                  <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-text-muted">{item.label}</p>
                </motion.div>
              ))}
              <Link href="/about" className="premium-button-dark">
                <span>Learn More About Us</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white curved-top curved-bottom">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Our Expertise"
            title="Corporate Mobility Solutions"
            description="We provide a comprehensive range of transportation services designed to meet the unique needs of our corporate clients."
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-4"
          >
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                variants={reveal}
                className={cn(index === 0 || index === 3 ? "lg:col-span-2" : "lg:col-span-2")}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linen py-24 text-text-primary curved-top curved-bottom">
        <BackgroundAura light />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">
                The Preferred Partner for 150+ Corporations
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {why.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                className="rounded-[3rem] border border-white/70 bg-white/72 p-6 shadow-premium backdrop-blur-2xl"
              >
                <item.icon className="mb-8 text-accent" size={30} />
                <h3 className="text-xl font-black">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-porcelain">
        <div className="container mx-auto px-6">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="The Fleet"
              title="Premium Vehicles for Every Need"
              align="left"
            />
            <Link href="/fleet" className="premium-button-dark mb-12">
              <span>View Full Fleet</span>
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((car) => (
              <FleetCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-24 curved-top curved-bottom">
        <BackgroundAura />
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <StatCounter end={150} suffix="+" label="Corporate Clients" icon={Users} />
            <StatCounter end={5000} suffix="+" label="Trips Completed" icon={Briefcase} />
            <StatCounter end={24} suffix="/7" label="Support" icon={Clock} />
            <StatCounter end={100} suffix="%" label="Professional Service" icon={Shield} />
          </div>
        </div>
      </section>

      <section id="inquiry" className="section-padding relative overflow-hidden bg-porcelain">
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Get in Touch</span>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
                Ready to Upgrade Your Corporate Travel?
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-text-secondary">
                Leave your details and our mobility experts will contact you with a customized solution for your business.
              </p>
              <div className="mt-10 grid gap-4">
                {[
                  { href: `tel:${CONTACT_DETAILS.phone}`, label: "Call Us Directly", value: CONTACT_DETAILS.phone, icon: Phone },
                  { href: `https://wa.me/${CONTACT_DETAILS.whatsapp}`, label: "WhatsApp Inquiry", value: "Start a Chat", icon: MessageSquare },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-premium backdrop-blur-2xl transition-all hover:-translate-y-1"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-primary text-white group-hover:bg-accent">
                      <item.icon size={20} />
                    </span>
                    <span>
                      <span className="block text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-lg font-black text-text-primary">{item.value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
            <InquiryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
