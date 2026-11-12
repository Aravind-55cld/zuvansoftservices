import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  FileCheck,
  Search,
  Filter,
  CalendarCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Recruitment | Zuvan Software Services Pvt. Ltd.",
  description:
    "Executive and technical recruitment services by Zuvan Software Services. Structured candidate sourcing, screening, and placement across India.",
};

export default function RecruitmentPage() {
  return (
    <div className="flex flex-col">
      {/* PAGE HERO */}
      <section className="relative bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white pt-20 pb-24 md:pt-24 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-purple-200/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-purple-200 font-semibold">Recruitment</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-purple-200 text-xs font-bold uppercase tracking-wider mb-6">
            03 | Service Practice
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            Recruitment Services<br />
            <span className="bg-gradient-to-r from-purple-200 via-pink-200 to-amber-200 bg-clip-text text-transparent">
              Finding the Right Fit.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed max-w-2xl mb-8">
            We work with hiring teams to understand job requirements and support candidate sourcing and selection coordination — from requirement intake to offer closing.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/30 transition-all text-sm"
            >
              <span>Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-we-work" className="btn-hero-outline">
              <span>How We Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* RECRUITMENT WORKFLOW */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Our Process
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              End-to-End Recruitment Support
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              From the initial intake call to offer acceptance — we coordinate every step.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                name: "Intake",
                desc: "Role clarification, JD review & success criteria definition.",
                icon: FileCheck,
              },
              {
                step: "02",
                name: "Sourcing",
                desc: "Active candidate sourcing across our talent network & channels.",
                icon: Search,
              },
              {
                step: "03",
                name: "Screening",
                desc: "Initial screening, profile evaluation & shortlist creation.",
                icon: Filter,
              },
              {
                step: "04",
                name: "Coordinate",
                desc: "Interview scheduling, feedback loops & offer coordination.",
                icon: CalendarCheck,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="bg-purple-50/50 hover:bg-white rounded-3xl border border-purple-100 p-8 text-center shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="text-3xl font-extrabold text-purple-700 font-heading mb-3">
                    {s.step}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white text-purple-700 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-base text-slate-900 mb-2">{s.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROLES & WHY IT WORKS */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            {/* Roles List */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider font-heading">
                What We Recruit
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight leading-tight">
                Technical &amp; Non-Technical Roles
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                From senior leadership hires to specialist technical roles, we build structured pipelines and keep your hiring team informed at each step.
              </p>

              <ul className="space-y-3 text-sm text-slate-700 font-medium">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Technical / engineering leadership roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Specialist software development roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Product, design, and analytics roles</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Senior management and executive search</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                  <span>Business operations and strategic support functions</span>
                </li>
              </ul>
            </div>

            {/* Why It Works Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-lg">
                <h4 className="font-heading font-extrabold text-lg text-slate-900 mb-6">
                  Why Our Recruitment Works
                </h4>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 mb-1">
                        Deep Role Understanding
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We invest time to understand the role beyond the JD — culture, team dynamics, success metrics.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 mb-1">
                        Quality Over Quantity
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        We send curated, pre-screened shortlists — not resume dumps. Every profile is relevant.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 mb-1">
                        Transparent Process
                      </h5>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Clear status updates, feedback loops, and milestone tracking throughout the hiring cycle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Start Your Hiring Search
          </h2>
          <p className="text-purple-100/90 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your hiring requirement and we&apos;ll begin sourcing qualified candidates within 5 business days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm"
            >
              <span>Share Your Hiring Need</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/staffing" className="btn-hero-outline">
              <span>Explore Staffing</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

