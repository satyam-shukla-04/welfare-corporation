"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import { SERVICES } from "@/constants";
import { PageHero, reveal } from "@/components/PremiumUI";

const Services = () => {
  return (
    <div className="flex flex-col bg-porcelain">
      <PageHero
        eyebrow="Our Services"
        title="Premium Mobility for Every Occasion"
        description="From daily commutes to executive travel, we provide tailored car rental services that prioritize your time and comfort."
        image="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="bg-white">
        <div className="container mx-auto px-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`section-padding grid gap-10 border-b border-slate-200 last:border-0 lg:grid-cols-2 lg:items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <motion.div
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-premium"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </motion.div>
              <div className="max-w-xl">
                <span className="eyebrow">Service Highlights</span>
                <h2 className="mt-5 text-4xl font-black tracking-tight text-primary md:text-5xl">{service.title}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-600">{service.description}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {[...service.features, "GPS Enabled", "Clean & Sanitized"].map((feature) => (
                    <div key={feature} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-porcelain p-4">
                      <CheckCircle2 size={20} className="shrink-0 text-accent" />
                      <span className="font-bold text-primary">{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="#contact-form" className="premium-button-dark mt-8">
                  <span>Inquire Now</span>
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact-form" className="section-padding bg-porcelain">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <span className="eyebrow">Custom Requirements</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-primary md:text-6xl">
              Have a Specific Requirement?
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              If you have custom travel needs or long-term fleet requirements, fill out the form and our representative will call you with the most competitive rates.
            </p>
            <div className="mt-8 grid gap-4">
              {["Quick Response Time", "Tailored Pricing Models", "Corporate Account Benefits"].map((item) => (
                <div key={item} className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white/80 p-4 shadow-premium">
                  <CheckCircle2 size={24} className="text-accent" />
                  <span className="font-black text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  );
};

export default Services;
