import React from "react";
import Link from "next/link";
import { CONTACT_DETAILS, NAVIGATION_LINKS } from "@/constants";
import { Mail, MapPin, Phone } from "lucide-react";
import { Facebook, Linkedin, Twitter } from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(22,163,74,.2),transparent_28%),radial-gradient(circle_at_80%_40%,rgba(249,115,22,.14),transparent_30%)]" />
      <div className="container relative z-10 mx-auto px-6 py-16">
        <div className="mb-12 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-glow backdrop-blur-2xl md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-black uppercase tracking-tight">Welfare Corporation</h3>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.28em] text-accent">Infratech Solution</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-text-inverse-soft">
                Premium corporate transportation and mobility solutions for leading enterprises across India. Trusted by 150+ corporate clients.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: MapPin, text: CONTACT_DETAILS.address },
                { icon: Phone, text: CONTACT_DETAILS.phone },
                { icon: Mail, text: CONTACT_DETAILS.email },
              ].map((item) => (
                <div key={item.text} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <item.icon className="mb-4 text-accent" size={20} />
                  <p className="text-xs leading-6 text-text-inverse-soft">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.22em] text-text-inverse-muted">Social</h4>
            <div className="mt-5 flex gap-3">
              <Link href="#" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-text-inverse-soft transition-colors hover:text-accent">
                <Linkedin size={19} />
              </Link>
              <Link href="#" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-text-inverse-soft transition-colors hover:text-accent">
                <Facebook size={19} />
              </Link>
              <Link href="#" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-text-inverse-soft transition-colors hover:text-accent">
                <Twitter size={19} />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.22em] text-text-inverse-muted">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-text-inverse-soft transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.22em] text-text-inverse-muted">Our Services</h4>
            <ul className="mt-5 space-y-3">
              {["Corporate Car Rental", "Airport Transfers", "Local Corporate Travel", "Domestic Travel"].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-text-inverse-soft transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.22em] text-text-inverse-muted">Enterprise</h4>
            <p className="mt-5 text-sm leading-7 text-text-inverse-soft">
              Dedicated account support, monthly billing, verified drivers, GPS-enabled fleet, and audit-ready operations.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-text-inverse-muted md:flex-row md:items-center">
          <p>Copyright {new Date().getFullYear()} Welfare Corporation (Infratech Solution). All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
