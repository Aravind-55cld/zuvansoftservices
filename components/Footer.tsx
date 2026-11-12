"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ToastContext";

export default function Footer() {
  const [quickEmail, setQuickEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { showToast } = useToast();

  const handleQuickContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickEmail) return;
    setSubmitted(true);
    showToast(
      `Thank you! We've received your contact info (${quickEmail}). A Zuvan specialist will reach out shortly.`,
      "success"
    );
    setQuickEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-slate-800">
          {/* Brand info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative h-12 w-48 transition-transform group-hover:scale-[1.02]">
                <Image
                  src="/assets/images/logo-main-transparent-light.png"
                  alt="Zuvan Software Services"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              <strong className="text-slate-200">Technology. Talent. Tomorrow.</strong> Practical, client-focused IT consulting, technical staffing, and structured recruitment across India.
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-medium text-emerald-400 w-fit">
              <span className="pulse-dot"></span>
              <span>Active Client Intake &amp; Consultations Open</span>
            </div>
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home Page
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span>Careers &amp; Jobs</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="hover:text-amber-400 transition-colors">
                  How We Work (5 Steps)
                </Link>
              </li>
              <li>
                <Link href="/why-zuvan" className="hover:text-amber-400 transition-colors">
                  Why Work With Zuvan
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Contact &amp; Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Services links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors">
                  All Services Overview
                </Link>
              </li>
              <li>
                <Link href="/it-consulting" className="hover:text-amber-400 transition-colors">
                  01 | IT Consulting
                </Link>
              </li>
              <li>
                <Link href="/staffing" className="hover:text-amber-400 transition-colors">
                  02 | Staffing Solutions
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-amber-400 transition-colors">
                  03 | Direct Recruitment
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="hover:text-amber-400 transition-colors">
                  04 | Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#digital-marketing" className="hover:text-amber-400 transition-colors">
                  05 | Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services#certifications" className="hover:text-amber-400 transition-colors">
                  06 | Certifications &amp; Training
                </Link>
              </li>
              <li>
                <Link href="/services#contract-projects" className="hover:text-amber-400 transition-colors">
                  07 | Contract Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="flex flex-col gap-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:040-27898999"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors group"
              >
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-amber-400" />
                <span>040-27898999</span>
              </a>

              <a
                href="mailto:contact@zuvansoftservices.com"
                className="flex items-center gap-2.5 hover:text-amber-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-amber-400 group-hover:text-amber-300" />
                <span className="break-all">contact@zuvansoftservices.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* Quick Contact Input */}
            <div className="mt-4 pt-4 border-t border-slate-800">
              <label
                htmlFor="footerEmail"
                className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 font-heading"
              >
                Quick Connect
              </label>
              <form onSubmit={handleQuickContact} className="flex gap-2">
                <input
                  id="footerEmail"
                  type="email"
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center transition-colors flex-shrink-0"
                  aria-label="Submit email"
                >
                  {submitted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Zuvan Software Services Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Client Confidentiality &amp; Rigorous Data Governance</span>
            <span>&bull;</span>
            <Link href="/admin" className="hover:text-amber-400 text-slate-500 transition-colors">
              Admin Portal
            </Link>
          </div>
          <p className="font-semibold text-amber-400/90 tracking-wide">
            Innovate &bull; Build &bull; Grow
          </p>
        </div>
      </div>
    </footer>
  );
}

