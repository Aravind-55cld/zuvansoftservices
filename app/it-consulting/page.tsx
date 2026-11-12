import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Cpu,
  Zap,
  Code2,
  Cloud,
  FileText,
  TrendingUp,
  Headphones,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IT Consulting | Zuvan Software Services Pvt. Ltd.",
  description:
    "IT Consulting services by Zuvan Software Services. Technology assessment, digital transformation guidance, cloud advisory, and software project support across India.",
};

export default function ItConsultingPage() {
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
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">IT Consulting</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            01 | Service Practice
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            IT Consulting<br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Technology Guidance That Works.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
            We work with clients to understand technology challenges, review possible approaches and plan practical next steps aligned with your business objectives.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-we-work" className="btn-hero-outline">
              <span>How We Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW & CAPABILITIES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider font-heading">
                Service Overview
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Technology guidance aligned with your business objectives.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Our IT consulting model is grounded in business value, not just technology novelty. We work closely with your leadership and technical teams to understand your current state, desired outcomes, and constraints.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you&apos;re navigating a digital transformation, evaluating new vendors, or planning a cloud migration, Zuvan Softsol provides structured, unbiased guidance tailored to your specific context.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="btn-primary">
                  <span>Discuss Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Tech Assessment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Review your existing technology stack and identify gaps, risks, and opportunities.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Digital Transformation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Practical transformation roadmaps that align technology change with business goals.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Application Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Architecture review, code health assessments, and project delivery support.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Cloud Advisory</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cloud strategy, migration planning, and infrastructure optimization guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              What You Can Expect
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our IT Consulting Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                Technology Reports
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Structured assessment reports with actionable findings and prioritized recommendations.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                Action Roadmaps
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Milestone-based roadmaps for technology change and implementation planning.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                Advisory Calls
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Regular advisory sessions to review progress, answer questions, and adjust plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Need IT Guidance?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your technology challenge and we&apos;ll schedule a discovery call within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-hero-outline">
              <span>All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

