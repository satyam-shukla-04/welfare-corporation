import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPANY_NAME } from "@/constants";
import { CursorGlow, ScrollProgress } from "@/components/ClientEffects";
import IntroAnimation from "@/components/IntroAnimation";

export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Premium Corporate Travel Solutions`,
  description:
    "Providing luxury corporate car rentals, airport transfers, and local mobility solutions for leading enterprises like L&T, Reliance, and Tata. Trusted by 150+ corporate clients.",
  keywords: "corporate travel, car rental, airport pickup, luxury chauffeur, India business travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-porcelain font-sans text-text-primary antialiased">
        <IntroAnimation />
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 rounded-full border border-white/20 bg-accent p-4 text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 active:scale-95"
          aria-label="Contact on WhatsApp"
        >
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
