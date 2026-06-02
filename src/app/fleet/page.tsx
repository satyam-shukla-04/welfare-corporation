"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, User } from "lucide-react";
import { FleetCard } from "@/components/Cards";
import { FLEET } from "@/constants";
import { PageHero, PremiumCTA } from "@/components/PremiumUI";

const Fleet = () => {
  return (
    <div className="flex flex-col bg-porcelain">
      <PageHero
        eyebrow="The Welfare Fleet"
        title="Pristine Vehicles, Professional Chauffeurs"
        description="All our vehicles undergo regular maintenance and safety checks to ensure a comfortable and secure journey every time you travel with us."
        image="https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {FLEET.map((car) => (
              <FleetCard key={car.id} {...car} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1600375104627-c94c4144eb7e?q=80&w=2070&auto=format&fit=crop"
              alt="Car Interior"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="eyebrow">Operating Standards</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-primary md:text-6xl">Our Fleet Standards</h2>
            <div className="mt-8 grid gap-4">
              {[
                { title: "Safety First", desc: "Regular technical inspections and comprehensive insurance for all vehicles.", icon: ShieldCheck },
                { title: "Professional Chauffeurs", desc: "Our drivers are vetted, background-checked, and trained in corporate etiquette.", icon: User },
                { title: "Impeccable Cleanliness", desc: "Every car is sanitized and deep-cleaned before each booking.", icon: CheckCircle2 },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 rounded-[2rem] border border-slate-200 bg-porcelain p-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent/10 text-accent">
                    <item.icon size={24} />
                  </span>
                  <div>
                    <h4 className="text-xl font-black text-primary">{item.title}</h4>
                    <p className="mt-2 leading-7 text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PremiumCTA
        title="Need a Custom Fleet Solution?"
        description="We can provide dedicated vehicles and monthly subscription models for your corporate requirements."
        label="Inquire about Fleet Rental"
      />
    </div>
  );
};

export default Fleet;
