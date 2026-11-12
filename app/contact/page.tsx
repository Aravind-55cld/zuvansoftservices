import Link from "next/link";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Explore Partnership | Zuvan Software Services Pvt. Ltd.",
  description:
    "Let's build something great. Share your requirement with Zuvan Software Services Pvt. Ltd. IT Consulting, Staffing, and Recruitment across India.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* PAGE HERO */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white pt-20 pb-24 md:pt-24 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Contact</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            Let&apos;s Start a Conversation
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Great.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Share your requirement with Zuvan Software Services Pvt. Ltd. Whether you need technology guidance, support for a hiring requirement or help planning your workforce needs — we welcome a conversation.
          </p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Details Card */}
              <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 shadow-sm">
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-6">
                  Contact Details
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-heading">
                        Direct Line
                      </div>
                      <a
                        href="tel:040-27898999"
                        className="font-bold text-base text-slate-900 hover:text-blue-700 transition-colors"
                      >
                        040-27898999
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-heading">
                        Official Inquiries
                      </div>
                      <a
                        href="mailto:contact@zuvansoftservices.com"
                        className="font-bold text-base text-slate-900 hover:text-amber-700 transition-colors break-all"
                      >
                        contact@zuvansoftservices.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1 font-heading">
                        Headquarters
                      </div>
                      <div className="font-bold text-base text-slate-900">
                        Hyderabad, Telangana
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        India — Pan-India Delivery
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Commitment Card */}
              <div className="bg-gradient-to-br from-blue-950 to-indigo-900 text-white rounded-3xl p-8 shadow-xl border border-blue-800">
                <h3 className="font-heading font-extrabold text-xl text-white mb-3">
                  Response Commitment
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  We review every inquiry personally and commit to a meaningful, tailored response within 24 business hours.
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>24-hour response to all submissions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>No-obligation initial consultation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Strict confidentiality under NDA</span>
                  </div>
                </div>
              </div>

              {/* Active Intake Badge */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 flex items-start gap-3">
                <span className="pulse-dot mt-1.5 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Active Client Intake Open</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    We are currently accepting new client requirements for IT Consulting, Staffing, and Recruitment engagements across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

