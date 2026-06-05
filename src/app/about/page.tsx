import React from "react";
import Image from "next/image";
import { Eye, Shield, Target, Users } from "lucide-react";
import { PageHero, PremiumCTA, SectionHeader } from "@/components/PremiumUI";

const About = () => {
  return (
    <div className="flex flex-col bg-porcelain">
      <PageHero
        eyebrow="About Our Journey"
        title="About Our Journey"
        description="Setting new standards in corporate transportation with excellence, trust, and professionalism."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
                alt="Our Vision"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-5 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
                Pioneering Excellence in Corporate Mobility
              </h2>
              <p className="mt-7 leading-8 text-text-secondary">
                Welfare Corporation (Infratech Solution) started with a simple belief: Corporate transportation should be more than just moving from point A to point B. It should be an experience marked by comfort, punctuality, and uncompromising professionalism.
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                Over the years, we have grown from a local service provider to a trusted partner for some of India's largest enterprises. Our fleet and our team have evolved, but our core values remain the same: reliability, safety, and client-first approach.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["150+", "Corporate Clients"],
                  ["15+", "Years of Trust"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-premium backdrop-blur-2xl">
                    <div className="text-4xl font-black text-text-primary">{value}</div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-text-muted">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Our Mission",
                desc: "To empower businesses through seamless and innovative mobility solutions that prioritize safety, efficiency, and professional excellence, ensuring that every corporate journey contributes to our clients' success.",
                icon: Target,
              },
              {
                title: "Our Vision",
                desc: "To be the most trusted and preferred corporate transportation partner globally, recognized for our commitment to quality, sustainable practices, and revolutionizing the way enterprises experience professional mobility.",
                icon: Eye,
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={index === 1 ? "rounded-[2rem] bg-primary p-8 text-white shadow-glow transition-transform hover:-translate-y-2" : "rounded-[2rem] border border-slate-200 bg-white p-8 shadow-premium transition-transform hover:-translate-y-2"}
              >
                <item.icon className={index === 1 ? "mb-10 text-accent" : "mb-10 text-accent"} size={34} />
                <h3 className="text-3xl font-black">{item.title}</h3>
                <p className={index === 1 ? "mt-5 leading-8 text-text-inverse-soft" : "mt-5 leading-8 text-text-secondary"}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto px-6">
          <SectionHeader eyebrow="Our Commitment" title="Why Businesses Trust Us" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: "Compliance", desc: "Rigorous adherence to all safety and regulatory norms for corporate safety.", icon: Shield },
              { title: "Scalability", desc: "Capability to handle large-scale corporate requirements across multiple locations.", icon: Users },
              { title: "Technology", desc: "Advanced booking and tracking systems for complete transparency.", icon: Target },
            ].map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white/80 p-7 shadow-premium backdrop-blur-2xl">
                <item.icon className="mb-8 text-accent" size={32} />
                <h4 className="text-2xl font-black text-text-primary">{item.title}</h4>
                <p className="mt-4 text-sm leading-7 text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PremiumCTA title="Experience the Difference with Welfare Corporation" label="Start Your Partnership Today" />
    </div>
  );
};

export default About;
