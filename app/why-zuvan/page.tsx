import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  Target,
  Zap,
  Globe2,
  MessageSquare,
  Briefcase,
  Compass,
} from "lucide-react";
import ScopeEstimator from "@/components/ScopeEstimator";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Why Work With Zuvan | Zuvan Software Services Pvt. Ltd.",
  description:
    "Why clients choose Zuvan Software Services for IT consulting, staffing, and recruitment. Practical, responsive, and client-focused across India.",
};

const differentiators = [
  {
    icon: Target,
    title: "Client-First Approach",
    desc: "We put your requirements at the centre of every conversation. No templates — real listening and tailored responses that address your actual business context.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Zap,
    title: "Fast Mobilization",
    desc: "Our curated talent pool and streamlined process means we can respond to urgent hiring and consulting needs quickly — often within 24 to 72 hours.",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: Globe2,
    title: "Pan-India Reach",
    desc: "Serving high-growth startups and established enterprises across India — Hyderabad, Bengaluru, Pune, Mumbai, Delhi NCR — with a consistent, quality-driven service model.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    desc: "We keep you updated at every stage. No surprises, no guesswork — just transparent, professional coordination throughout the engagement lifecycle.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Briefcase,
    title: "Domain Expertise",
    desc: "Our team brings hands-on experience in IT consulting, talent acquisition and strategic workforce planning across diverse industries and technical domains.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Compass,
    title: "Long-Term Focus",
    desc: "We invest in understanding your business deeply so we become a reliable long-term partner, not just a one-off vendor.",
    color: "bg-indigo-50 text-indigo-600",
  },
];

export default function WhyZuvanPage() {
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
            <span className="text-amber-300 font-semibold">Why Zuvan</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            Our Differentiators
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            Why Clients Choose<br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Zuvan Softsol.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Practical, responsive, and genuinely client-focused. We&apos;ve built our reputation on understanding requirements deeply and delivering consistently across India.
          </p>
        </div>
      </section>

      {/* 6 COMMITMENTS */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              What Makes Us Different
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Commitment to Every Client
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Six reasons why organisations across India choose Zuvan Softsol as their trusted partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl ${diff.color} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ESTIMATOR WIDGET */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Interactive Planning
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Estimate Your Engagement Scope
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Use our live requirement calculator to see typical mobilization turnaround and SLAs for your needs.
            </p>
          </div>

          <ScopeEstimator />
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Frequently Asked Questions
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Common Questions About Working With Us
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Everything you need to know about our staffing models, consulting engagements, and delivery processes.
            </p>
          </div>

          <FaqAccordion />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
            See It For Yourself
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Start a conversation and experience the Zuvan difference firsthand.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-we-work" className="btn-hero-outline">
              <span>See How We Work</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

