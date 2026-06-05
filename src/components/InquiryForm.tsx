"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";

const fieldClass =
  "peer w-full rounded-2xl border border-primary/10 bg-white/90 px-4 pb-3 pt-6 text-text-primary outline-none backdrop-blur-xl transition-all placeholder:text-text-muted focus:border-accent/45 focus:bg-white focus:ring-4 focus:ring-accent/10";

const labelClass =
  "pointer-events-none absolute left-4 top-2 text-xs font-semibold text-text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-accent peer-valid:top-2 peer-valid:text-xs";

const InquiryForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey && formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      } else {
        console.warn("EmailJS environment variables are not configured. Inquiry form is using demo mode.");
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }

      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("Inquiry Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[3rem] border border-white/70 bg-white/80 p-6 text-text-primary shadow-glow backdrop-blur-2xl md:p-8">
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-orange/8 blur-3xl" />

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 py-12 text-center"
        >
          <CheckCircle className="mx-auto mb-5 h-16 w-16 text-accent" />
          <h3 className="text-3xl font-black text-text-primary">Inquiry Sent</h3>
          <p className="mx-auto mt-3 max-w-sm text-text-secondary">
            Thank you for reaching out. Our team will contact you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="premium-button mt-8"
            type="button"
          >
            Send another inquiry
          </button>
        </motion.div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div>
            <span className="eyebrow mb-3 block">Corporate Inquiry</span>
            <h3 className="text-3xl font-black tracking-tight text-text-primary">Plan a mobility solution</h3>
          </div>

          <div className="relative">
            <input
              type="text"
              id="name"
              name="user_name"
              required
              placeholder="Full Name"
              className={fieldClass}
            />
            <label htmlFor="name" className={labelClass}>
              Full Name
            </label>
          </div>

          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="user_phone"
              required
              placeholder="Phone Number"
              className={fieldClass}
            />
            <label htmlFor="phone" className={labelClass}>
              Phone Number
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Message"
              className={fieldClass}
            />
            <label htmlFor="message" className={labelClass}>
              Message
            </label>
          </div>

          {status === "error" && (
            <div className="flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-sm text-red-600">
              <AlertCircle size={16} />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 font-black text-white shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                <span>Sending</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send size={18} className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default InquiryForm;
