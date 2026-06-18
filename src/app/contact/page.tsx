import React from "react";
import InquiryForm from "@/components/InquiryForm";
import { CONTACT_DETAILS } from "@/constants";
import { Clock, Mail, MapPin, MessageSquare, Navigation, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir//Welfare+corporation,+T-15+SAI+ASHISH+TRADE+CENTRE,+opp.+POONYABHINI,+Althan,+Surat,+Gujarat+395007";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Welfare%20corporation%2C%20T-15%20SAI%20ASHISH%20TRADE%20CENTRE%2C%20opp.%20POONYABHINI%2C%20Althan%2C%20Surat%2C%20Gujarat%20395007&output=embed";

type ContactAction = {
  label: string;
  shortLabel: string;
  href: string;
  icon: LucideIcon;
  className: string;
  external: boolean;
};

const Contact = () => {
  const whatsappUrl = `https://wa.me/${CONTACT_DETAILS.whatsapp.replace(/\D/g, "")}`;

  const details = [
    { title: "Location", value: CONTACT_DETAILS.address, icon: MapPin },
    { title: "Call Us", value: CONTACT_DETAILS.phone, icon: Phone },
    { title: "Email Us", value: CONTACT_DETAILS.email, icon: Mail },
    { title: "Working Hours", value: "Available 24/7 for our corporate clients.", icon: Clock },
  ];

  const actionLinks: ContactAction[] = [
    {
      label: "WhatsApp Chat",
      shortLabel: "WhatsApp",
      href: whatsappUrl,
      icon: MessageSquare,
      className: "bg-accent text-white hover:bg-green-600",
      external: true,
    },
    {
      label: "Direct Call",
      shortLabel: "Call",
      href: `tel:${CONTACT_DETAILS.phone}`,
      icon: Phone,
      className: "bg-primary text-white hover:bg-primary/90",
      external: false,
    },
    {
      label: "Get Directions",
      shortLabel: "Directions",
      href: GOOGLE_MAPS_DIRECTIONS_URL,
      icon: Navigation,
      className: "bg-white text-primary ring-1 ring-slate-200 hover:bg-slate-50",
      external: true,
    },
  ];

  return (
    <div className="flex flex-col bg-porcelain">
      <section className="section-padding">
        <div className="container mx-auto grid gap-10 px-6 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <span className="eyebrow">Contact Us</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-text-primary md:text-6xl">
              Get In Touch
            </h2>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Whether you&apos;re looking for a one-time booking or a long-term corporate partnership, we&apos;re here to assist you. Reach out to us through any of the following channels.
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

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {actionLinks.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center gap-3 rounded-full px-6 py-4 text-center font-black shadow-premium transition-all hover:-translate-y-1 ${action.className}`}
                >
                  <action.icon size={20} />
                  <span>{action.label}</span>
                </a>
              ))}
            </div>
          </div>

          <InquiryForm />
        </div>
      </section>

      <section className="w-full bg-primary p-4 sm:p-6">
        <div className="relative min-h-[720px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-glow backdrop-blur-2xl sm:min-h-[620px] lg:min-h-[520px]">
          <iframe
            title="Welfare Corporation office location"
            src={GOOGLE_MAPS_EMBED_URL}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />

          <div className="absolute inset-x-4 bottom-4 z-10 sm:inset-x-auto sm:left-6 sm:top-6 sm:bottom-auto sm:w-[380px]">
            <div className="rounded-[2rem] border border-white/30 bg-white/85 p-6 text-text-primary shadow-premium backdrop-blur-2xl">
              <div className="flex gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-accent shadow-premium">
                  <MapPin size={22} />
                </span>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">Office</p>
                  <h3 className="mt-2 text-xl font-black leading-tight text-text-primary">
                    Welfare Corporation (Infratech Solution)
                  </h3>
                  <address className="mt-4 not-italic leading-7 text-text-secondary">
                    T-15 Sai Ashish Trade Centre
                    <br />
                    Opp. Poonyabhini
                    <br />
                    Althan, Surat
                    <br />
                    Gujarat 395007
                  </address>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {actionLinks.map((action) => (
                  <a
                    key={`map-${action.label}`}
                    href={action.href}
                    target={action.external ? "_blank" : undefined}
                    rel={action.external ? "noopener noreferrer" : undefined}
                    className={`flex min-h-12 items-center justify-center gap-2 rounded-full px-4 py-3 text-center text-sm font-black shadow-premium transition-all hover:-translate-y-1 ${action.className}`}
                  >
                    <action.icon size={18} />
                    <span>{action.shortLabel}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
