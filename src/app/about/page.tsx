import React from "react";
import Image from "next/image";
import { BriefcaseBusiness, Eye, Shield, Target, Users } from "lucide-react";
import { PageHero, PremiumCTA, SectionHeader } from "@/components/PremiumUI";

const leadership = [
  {
    name: "S.J. Shukla",
    designation: "Co-Founder & Director",
    description:
      "Leading business operations and client relationships with a strong focus on service excellence, reliability, and long-term partnerships.",
    // Replace with actual founder image when available.
    image: "/images/leadership/sj-shukla-placeholder.png",
  },
  {
    name: "Sandeep Singh",
    designation: "Co-Founder & Director",
    description:
      "Driving transportation operations and mobility solutions while ensuring premium service standards for every client.",
    // Replace with actual founder image when available.
    image: "/images/leadership/sandeep-singh-placeholder.png",
  },
];

const About = () => {
  return (
    <div className="flex flex-col bg-porcelain">
      <PageHero
        eyebrow="About Our Journey"
        title="About Our Journey"
        description="Setting new standards in corporate transportation with excellence, trust, and professionalism."
        image="/images/about/about-hero.png"
      />

      <section className="section-padding">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-premium">
              <Image
                src="/images/about/corporate-operations.png"
                alt="Corporate mobility operations team"
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
                Over the years, we have grown from a local service provider to a trusted partner for some of India&apos;s largest enterprises. Our fleet and our team have evolved, but our core values remain the same: reliability, safety, and client-first approach.
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

      <section className="section-padding bg-porcelain">
        <div className="container mx-auto px-6">
          <SectionHeader
            eyebrow="Leadership Team"
            title="Meet Our Leadership"
            description={"The people driving Welfare Corporation's commitment to reliability, professionalism, and corporate mobility excellence."}
          />
          <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2">
            {leadership.map((member) => (
              <article
                key={member.name}
                className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-premium backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-premium-hover md:rounded-[3rem]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-primary">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.designation}`}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/68 via-primary/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/18 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-xl">
                      <BriefcaseBusiness size={14} />
                      Executive Leadership
                    </span>
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent">{member.designation}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight text-text-primary md:text-4xl">{member.name}</h3>
                  <p className="mt-5 leading-8 text-text-secondary">{member.description}</p>
                </div>
              </article>
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
