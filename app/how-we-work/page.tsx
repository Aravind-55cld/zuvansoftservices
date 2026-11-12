import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Target,
  Zap,
  MessageSquare,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How We Work | Zuvan Software Services Pvt. Ltd.",
  description:
    "Zuvan's 5-step process: Discover, Align, Source/Plan, Coordinate, and Review. A clear workflow from requirement to next step.",
};

const steps = [
  {
    num: "01",
    name: "DISCOVER",
    desc: "Understand your business, hiring or technology requirement, timelines and success criteria.",
    tags: ["Initial Conversation", "Requirement Intake", "Context Mapping"],
    tagBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    num: "02",
    name: "ALIGN",
    desc: "Confirm scope, role details, required skills, commercial terms and responsibilities.",
    tags: ["Scope Definition", "Skills Assessment", "Commercial Terms"],
    tagBg: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    num: "03",
    name: "SOURCE / PLAN",
    desc: "Develop a candidate sourcing approach or a practical technology support plan.",
    tags: ["Candidate Sourcing", "Tech Planning", "Roadmap Development"],
    tagBg: "bg-purple-50 text-purple-700 border-purple-200",
  },
  {
    num: "04",
    name: "COORDINATE",
    desc: "Share updates, coordinate discussions and keep relevant stakeholders informed throughout the engagement.",
    tags: ["Status Updates", "Interview Coordination", "Stakeholder Updates"],
    tagBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    num: "05",
    name: "REVIEW",
    desc: "Collect feedback, address open questions and agree on the next steps for continued engagement or project handoff.",
    tags: ["Feedback Collection", "Next Steps Planning", "Relationship Building"],
    tagBg: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

export default function HowWeWorkPage() {
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
            <span className="text-amber-300 font-semibold">How We Work</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            Our Process
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            A Clear Process From<br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Requirement to Next Step.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Our 5-step workflow can be adapted to the scope of the engagement and the client&apos;s internal process. Transparency and communication run through every stage.
          </p>
        </div>
      </section>

      {/* 5 DETAILED STEPS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start"
            >
              <div className="sm:col-span-2 text-center sm:text-left">
                <span className="font-heading font-black text-4xl sm:text-5xl bg-gradient-to-br from-amber-500 to-amber-700 bg-clip-text text-transparent leading-none">
                  {s.num}
                </span>
                <div className="w-10 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mt-2 mx-auto sm:mx-0" />
              </div>

              <div className="sm:col-span-10 space-y-4">
                <h3 className="font-heading font-extrabold text-2xl text-slate-900">{s.name}</h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {s.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${s.tagBg}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT EXPECTATIONS */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Client Expectations
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What We Ask of Our Clients
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Our process works best when there&apos;s clear collaboration from your side too.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Clear Requirements
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Share as much detail as possible about the role, technology, timelines, and expected outcomes.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mx-auto mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">Timely Feedback</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Respond to candidate profiles and status updates promptly to keep the momentum moving efficiently.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                Open Communication
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Keep us informed of any changes to requirements, priorities, or budgets that could affect the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            Ready to Begin the Process?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your requirement and we&apos;ll kick off Step 1 — Discover — within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/services" className="btn-hero-outline">
              <span>View Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

