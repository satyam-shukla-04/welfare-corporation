import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { CONTACT_DETAILS } from "@/constants";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { PageHero } from "@/components/PremiumUI";

const Contact = () => {
  const details = [
    { title: "Location", value: CONTACT_DETAILS.address, icon: MapPin },
    { title: "Call Us", value: CONTACT_DETAILS.phone, icon: Phone },
    { title: "Email Us", value: CONTACT_DETAILS.email, icon: Mail },
    { title: "Working Hours", value: "Available 24/7 for our corporate clients.", icon: Clock },
  ];

  return (
    <div className="flex flex-col bg-porcelain">
      <PageHero
        eyebrow="Connect with our team"
        title="Get in Touch"
        description="Whether you're looking for a one-time booking or a long-term corporate partnership, we're here to assist you."
        image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
      />

      <section className="section-padding">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Corporate Details</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
              Corporate Details
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Whether you're looking for a one-time booking or a long-term corporate partnership, we're here to assist you. Reach out to us through any of the following channels.
            </p>

            <div className="mt-10 grid gap-4">
              {details.map((item) => (
                <div key={item.title} className="flex gap-5 rounded-[2rem] border border-slate-200 bg-white/80 p-5 shadow-premium backdrop-blur-2xl">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-accent">
                    <item.icon size={22} />
                  </span>
                  <div>
                    <h4 className="font-black text-text-primary">{item.title}</h4>
                    <p className="mt-1 leading-7 text-text-secondary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`https://wa.me/${CONTACT_DETAILS.whatsapp}`}
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-full bg-accent px-6 py-4 font-black text-white shadow-premium transition-all hover:-translate-y-1 hover:bg-green-600"
              >
                <MessageSquare size={20} />
                <span>WhatsApp Chat</span>
              </a>
              <a
                href={`tel:${CONTACT_DETAILS.phone}`}
                className="flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 font-black text-white shadow-premium transition-all hover:-translate-y-1"
              >
                <Phone size={20} />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section className="h-[440px] w-full bg-primary p-6">
        <div className="flex h-full items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.06] text-center text-white shadow-glow backdrop-blur-2xl">
          <div>
            <MapPin size={48} className="mx-auto mb-4 text-accent" />
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-text-inverse-muted">Interactive Map Service Integration Area</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
