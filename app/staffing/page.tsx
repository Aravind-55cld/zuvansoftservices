import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ChevronRight, User, Users, Building2, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Staffing Solutions | Zuvan Software Services Pvt. Ltd.",
  description:
    "Technical and IT staffing solutions by Zuvan Software Services. Contract, contract-to-hire, and permanent staffing for tech companies across India.",
};

const rolesList = [
  "Software Engineers",
  "Cloud Architects",
  "Data Engineers",
  "DevOps Engineers",
  "QA Specialists",
  "Product Managers",
  "UI/UX Designers",
  "Technical Leads",
  "Business Analysts",
  "Cybersecurity Specialists",
  "AI/ML Engineers",
  "Database Administrators",
  "Scrum Masters",
  "Full Stack Developers",
  "+ Many More",
];

export default function StaffingPage() {
  return (
    <div className="flex flex-col">
      {/* PAGE HERO */}
      <section className="relative bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white pt-20 pb-24 md:pt-24 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-amber-200/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-amber-200 font-semibold">Staffing</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            02 | Service Practice
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            Staffing Solutions<br />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-white bg-clip-text text-transparent">
              Talent That Fits Your Needs.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-amber-100/90 leading-relaxed max-w-2xl mb-8">
            We help organisations explore staffing options based on the skills, experience, duration and availability needed for a role or project.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold bg-amber-500 hover:bg-amber-600">
              <span>Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-we-work" className="btn-hero-outline">
              <span>How We Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Engagement Models
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Flexible Staffing Arrangements
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              We adapt to your project needs — from individual specialists to full engineering pods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Individual */}
            <div className="bg-white rounded-3xl border border-slate-200 border-t-4 border-t-amber-500 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                  <User className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3">
                  Individual Specialist
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  One or two specialist roles — developers, architects, analysts, or domain experts — placed quickly on flexible contract or permanent terms.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold text-amber-700 uppercase tracking-wider">
                1–2 Roles Deployment
              </div>
            </div>

            {/* Team / Pod (Featured) */}
            <div className="relative bg-gradient-to-b from-amber-50/60 to-amber-100/30 rounded-3xl border-2 border-amber-400 border-t-4 border-t-amber-600 p-8 shadow-xl shadow-amber-500/10 flex flex-col justify-between transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                ⭐ Most Popular
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 mt-1">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3">
                  Team / Pod
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  A dedicated engineering pod of 3–8 professionals with coordinated onboarding and delivery assurance. Most popular model for growing teams.
                </p>
              </div>
              <div className="pt-4 border-t border-amber-200/80 text-xs font-bold text-amber-800 uppercase tracking-wider">
                3–8 Roles Cohort
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-3xl border border-slate-200 border-t-4 border-t-blue-600 p-8 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-3">
                  Enterprise Scale
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Large-scale staffing initiatives with structured pipelines, dedicated account management, and milestone-based delivery guarantees.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-bold text-blue-700 uppercase tracking-wider">
                9+ Roles Full Fleet
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES WE STAFF */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Technical Roles
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Types of Roles We Staff
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {rolesList.map((role, idx) => (
              <span
                key={idx}
                className={`px-5 py-3 rounded-xl text-sm font-semibold border transition-all ${
                  role.startsWith("+")
                    ? "bg-blue-50 text-blue-700 border-blue-200 font-bold"
                    : "bg-white text-slate-700 border-slate-200 shadow-sm hover:border-amber-400 hover:text-amber-700 hover:shadow-md"
                }`}
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-amber-950 via-amber-900 to-yellow-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to Build Your Team?
          </h2>
          <p className="text-amber-100/90 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your staffing requirement and receive a curated shortlist within 72 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold bg-amber-500 hover:bg-amber-600">
              <span>Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/recruitment" className="btn-hero-outline">
              <span>Explore Recruitment</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

