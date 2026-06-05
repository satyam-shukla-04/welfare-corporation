import React from "react";
import { Briefcase, Building, Calendar, ChevronRight, Headset, Plane } from "lucide-react";
import { PageHero, PremiumCTA, SectionHeader } from "@/components/PremiumUI";

const solutions = [
  {
    title: "Executive Transportation",
    description: "Premium chauffeurs and high-end luxury vehicles for your CEOs, VPs, and senior executives.",
    icon: Briefcase,
    features: ["Real-time Tracking", "Discreet Service", "Impeccable Maintenance"],
  },
  {
    title: "Employee Mobility",
    description: "Safe and reliable daily commute solutions for your workforce, optimizing efficiency and safety.",
    icon: Building,
    features: ["Strategic Route Planning", "Compliance Audits", "Cost Optimization"],
  },
  {
    title: "Airport Transfers",
    description: "Professional meet-n-greet services and timely transfers for your international and domestic travelers.",
    icon: Plane,
    features: ["Flight Monitoring", "Luggage Assistance", "Fixed Corporate Pricing"],
  },
  {
    title: "Event Transportation",
    description: "End-to-end management for corporate conferences, exhibitions, and large-scale business events.",
    icon: Calendar,
    features: ["On-site Coordination", "Diverse Fleet Options", "Custom Branding"],
  },
  {
    title: "Dedicated Corporate Support",
    description: "A specialized team of account managers providing round-the-clock support for all your requests.",
    icon: Headset,
    features: ["24/7 Response", "Priority Bookings", "Monthly Audits"],
  },
];

const Solutions = () => {
  return (
    <div className="flex flex-col bg-porcelain">
      <PageHero
        eyebrow="Tailored for Business"
        title="Comprehensive Corporate Mobility Solutions"
        description="We understand the complexities of corporate logistics. Our solutions are designed to scale with your business and provide unparalleled reliability."
        image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
      />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Enterprise Programs"
            title="Built for Procurement, HR, Admin, and Leadership"
          />
          <div className="grid gap-5 lg:grid-cols-6">
            {solutions.map((sol, index) => (
              <div
                key={sol.title}
                className={`rounded-[2rem] border border-slate-200 bg-porcelain p-7 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-hover ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}
              >
                <span className="grid h-14 w-14 place-items-center rounded-full bg-primary text-accent">
                  <sol.icon size={26} />
                </span>
                <h3 className="mt-8 text-2xl font-black text-text-primary">{sol.title}</h3>
                <p className="mt-4 leading-7 text-text-secondary">{sol.description}</p>
                <ul className="mt-6 grid gap-2">
                  {sol.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-text-muted">
                      <ChevronRight size={14} className="text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary text-white">
        <div className="container mx-auto grid gap-8 px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <span className="eyebrow">Enterprise Confidence</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl">Why Large Enterprises Choose Us</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { t: "Seamless Billing", d: "Centralized invoicing and flexible payment cycles tailored for finance departments." },
              { t: "Compliance First", d: "Everything from insurance to driver background checks is fully documented and audit-ready." },
              { t: "Pan-India Reach", d: "Consistent service standards across major cities in India." },
              { t: "Data and Insights", d: "Detailed travel reports and analytics to help you optimize your mobility spends." },
            ].map((item) => (
              <div key={item.t} className="rounded-[2rem] border border-white/12 bg-white/[0.07] p-6 shadow-premium backdrop-blur-2xl">
                <h4 className="text-xl font-black">{item.t}</h4>
                <p className="mt-3 text-sm leading-7 text-text-inverse-soft">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 text-center shadow-premium backdrop-blur-2xl">
            <p className="eyebrow">A Partner and Solution for</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 text-2xl font-black text-text-muted grayscale md:gap-12 md:text-3xl">
              <span>LARSEN & TOUBRO</span>
              <span>RELIANCE</span>
              <span>TATA MOTORS</span>
              <span>GAIL</span>
            </div>
          </div>
        </div>
      </section>

      <PremiumCTA
        title="Discuss a Partnership?"
        description="Let's discuss how Welfare Corporation can streamline your company's transportation requirements."
        label="Get in Touch with our Sales Team"
      />
    </div>
  );
};

export default Solutions;
