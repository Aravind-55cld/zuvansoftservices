import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Users,
  Search,
  Server,
  Cloud,
  Code2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | Zuvan Software Services Pvt. Ltd.",
  description:
    "Explore Zuvan Software Services: IT Consulting, Technical Staffing, and Executive Recruitment across India. Support designed around your business needs.",
};

export default function ServicesPage() {
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
            <span className="text-amber-300 font-semibold">All Services</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            Core Service Offerings
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            Three Core Services.{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Designed Around Your Needs.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            We focus on three core service areas for Indian businesses and organisations. Each practice is staffed by seasoned domain practitioners who understand your industry context.
          </p>
        </div>
      </section>

      {/* SERVICE 01: IT CONSULTING */}
      <section className="py-20 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider font-heading">
                01 | IT Consulting
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Technology guidance aligned with your business objectives.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We work with clients to understand technology challenges, review possible approaches and plan practical next steps. Our consulting model is grounded in business value, not just technology novelty.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you&apos;re starting a digital transformation, evaluating vendors, or planning a cloud migration, Zuvan Softsol provides structured, unbiased guidance tailored to your specific context.
              </p>
              <div className="pt-2">
                <Link href="/it-consulting" className="btn-primary">
                  <span>Full IT Consulting Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Tech Assessment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Structured technology review &amp; solution planning
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Digital Transformation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Practical transformation roadmaps &amp; guidance
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">App &amp; Software Support</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Application architecture &amp; project support
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Cloud &amp; Infrastructure</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cloud advisory &amp; infrastructure planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 02: STAFFING */}
      <section className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Cards first on desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <h4 className="font-bold text-sm text-slate-900 mb-1">IT &amp; Technical Staffing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineers, developers, architects &amp; technical leads
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Contract &amp; C2H</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flexible contract and contract-to-hire staffing
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Permanent Hiring</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Full-time permanent role support
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Pipeline Coordination</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Candidate pipeline &amp; interview coordination
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider font-heading">
                02 | Staffing Solutions
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Workforce support for changing business requirements.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We help organisations explore staffing options based on the skills, experience, duration and availability needed for a role or project. We source, evaluate, and present qualified candidates for your review.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From individual specialist roles to dedicated engineering pods, our staffing model adapts to your project timeline and headcount needs, whether contract, contract-to-hire, or permanent.
              </p>
              <div className="pt-2">
                <Link href="/staffing" className="btn-gold">
                  <span>Full Staffing Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE 03: RECRUITMENT */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider font-heading">
                03 | Direct Recruitment
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Structured support to identify suitable candidates.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We work with hiring teams to understand job requirements and support candidate sourcing and selection coordination. Our recruitment process is transparent and milestone-driven.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From senior leadership hires to specialized technical roles, we build a structured pipeline and keep your hiring team informed at each step.
              </p>
              <div className="pt-2">
                <Link href="/recruitment" className="btn-secondary">
                  <span>Full Recruitment Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Requirement Intake</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Role clarification &amp; intake workshops
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Candidate Sourcing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sourcing &amp; initial screening
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Interview Scheduling</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Resume sharing &amp; interview coordination
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <h4 className="font-bold text-sm text-slate-900 mb-1">All Role Types</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technical &amp; non-technical roles covered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your requirement with Zuvan Software Services Pvt. Ltd. and we&apos;ll respond within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-we-work" className="btn-hero-outline">
              <span>How We Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

