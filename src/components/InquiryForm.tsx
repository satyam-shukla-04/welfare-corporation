"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Loader2, Send } from "lucide-react";

const fieldClass =
  "peer w-full rounded-2xl border border-primary/10 bg-white/[0.88] px-5 pb-3.5 pt-7 text-[0.95rem] font-medium text-text-primary outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-transparent hover:border-primary/20 hover:bg-white focus:border-accent/50 focus:bg-white focus:shadow-[0_18px_45px_rgba(15,23,42,0.08)] focus:ring-4 focus:ring-accent/10";

const labelClass =
  "pointer-events-none absolute left-5 top-2.5 origin-left text-[0.72rem] font-bold uppercase tracking-[0.18em] text-accent transition-all duration-300 ease-out peer-placeholder-shown:top-5 peer-placeholder-shown:text-[0.95rem] peer-placeholder-shown:font-semibold peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-text-muted peer-focus:top-2.5 peer-focus:text-[0.72rem] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-[0.18em] peer-focus:text-accent";

const fieldErrorClass = "flex items-center gap-2 px-1 text-xs font-semibold text-red-600";
const INQUIRY_SUBJECT = "New Corporate Inquiry Received";
const MIN_MESSAGE_LENGTH = 10;

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface FormValues {
  name: string;
  phone: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  message: "",
};

const isValidIndianPhoneNumber = (phone: string) => {
  const normalizedPhone = phone.replace(/[\s()-]/g, "");
  return /^(?:\+91|91)?[6-9]\d{9}$/.test(normalizedPhone);
};

const validateForm = (values: FormValues): FormErrors => {
  const errors: FormErrors = {};
  const name = values.name.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (!name) {
    errors.name = "Please enter your full name.";
  } else if (name.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!phone) {
    errors.phone = "Please enter your phone number.";
  } else if (!isValidIndianPhoneNumber(phone)) {
    errors.phone = "Enter a valid Indian phone number.";
  }

  if (!message) {
    errors.message = "Please enter your message.";
  } else if (message.length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message must be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  return errors;
};

const InquiryForm = () => {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const fieldName = event.target.name as keyof FormValues;
    const nextValue = event.target.value;

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: nextValue,
    }));

    if (errors[fieldName]) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        [fieldName]: undefined,
      }));
    }

    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are not configured.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          subject: INQUIRY_SUBJECT,
          name: formValues.name.trim(),
          phone: formValues.phone.trim(),
          message: formValues.message.trim(),
          body: `You have received a new inquiry.\n\nName: ${formValues.name.trim()}\n\nPhone Number: ${formValues.phone.trim()}\n\nMessage:\n${formValues.message.trim()}`,
        },
        { publicKey }
      );

      setFormValues(initialValues);
      setErrors({});
      setStatus("success");
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
            Inquiry sent successfully. Our team will contact you soon.
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
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5" noValidate>
          <div>
            <span className="eyebrow mb-3 block">Corporate Inquiry</span>
            <h3 className="text-3xl font-black tracking-tight text-text-primary">Plan a mobility solution</h3>
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                minLength={2}
                value={formValues.name}
                onChange={handleFieldChange}
                placeholder=" "
                className={fieldClass}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              <label htmlFor="name" className={labelClass}>
                Full Name
              </label>
            </div>
            {errors.name && (
              <p id="name-error" className={fieldErrorClass}>
                <AlertCircle size={14} />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formValues.phone}
                onChange={handleFieldChange}
                placeholder=" "
                className={fieldClass}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              <label htmlFor="phone" className={labelClass}>
                Phone Number
              </label>
            </div>
            {errors.phone && (
              <p id="phone-error" className={fieldErrorClass}>
                <AlertCircle size={14} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div className="space-y-2">
            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                minLength={MIN_MESSAGE_LENGTH}
                rows={5}
                value={formValues.message}
                onChange={handleFieldChange}
                placeholder=" "
                className={fieldClass}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
            </div>
            {errors.message && (
              <p id="message-error" className={fieldErrorClass}>
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {status === "error" && (
            <div role="alert" className="flex items-center gap-2 rounded-2xl border border-red-400/20 bg-red-500/10 p-3 text-sm text-red-600">
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
                <motion.span
                  animate={{ opacity: [0.72, 1, 0.72] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                >
                  Sending Inquiry...
                </motion.span>
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
