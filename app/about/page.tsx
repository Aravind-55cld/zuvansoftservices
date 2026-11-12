import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  MapPin,
  Sliders,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Who We Are | Zuvan Software Services Pvt. Ltd.",
  description:
    "Learn about Zuvan Software Services Pvt. Ltd. - A practical partner for business and technology needs in India. Our vision, mission, and working principles.",
};

export default function AboutPage() {
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
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Who We Are</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            Company Overview &amp; Heritage
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight max-w-3xl mb-6">
            A practical partner for business and{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              technology needs.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl">
            Zuvan Software Services Pvt. Ltd. is positioned to support organisations through IT consulting, staffing and recruitment services. We focus on understanding each client&apos;s requirements, communicating clearly, and working towards solutions that fit their business goals.
          </p>
        </div>
      </section>

      {/* CORE PROFILE & BRAND IDENTITY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Built on Responsiveness, Requirement Clarity &amp; Long-Term Relationships
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Our approach is built around responsiveness, requirement clarity, professional coordination and long-term working relationships. We aim to make it easier for clients to explore technology options and identify talent aligned with their needs.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Across modern enterprises in India, technological velocity is directly tied to the caliber and alignment of human capital. Rather than treating technical hiring or consulting as transactional checkpoints, Zuvan Softsol acts as a dedicated extension of your leadership and engineering teams.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-amber-600" />
                    <span className="font-heading font-extrabold text-xl text-amber-700">Pan-India</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">
                    Talent &amp; Consulting Delivery
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Bridging tech hubs across Hyderabad, Bengaluru, Pune, Delhi NCR, and beyond.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Sliders className="w-5 h-5 text-blue-600" />
                    <span className="font-heading font-extrabold text-xl text-blue-700">Tailored</span>
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">
                    Client-Centric Engagements
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Adaptive models designed specifically around your timelines and technical stack.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Brand Showcase Image */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-slate-100">
                  <Image
                    src="/assets/images/logo-2.jpeg"
                    alt="Zuvan Brand Ethos"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 bg-white border-t border-slate-100">
                  <h4 className="font-heading font-bold text-base text-slate-900 mb-2">
                    Corporate Identity &amp; Ethos
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Operating under the ethos of{" "}
                    <strong className="text-amber-600 font-semibold">Innovate &bull; Build &bull; Grow</strong>
                    , we equip businesses with dependable software insights and elite engineering talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 md:py-28 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Guiding Purpose
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Vision &amp; Our Mission
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              The guiding compass that shapes how we advise, recruit, and partner with organizations across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Vision */}
            <div className="relative bg-white rounded-3xl border border-slate-200 border-t-4 border-t-amber-500 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl mb-6">
                ★
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 font-heading block mb-2">
                Our Vision
              </span>
              <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-4">
                A Trusted Partner Across India
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                &ldquo;To become a trusted partner for organisations seeking technology guidance and talent solutions across India.&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
                Anchored in transparency, technical integrity, and national capability.
              </div>
            </div>

            {/* Mission */}
            <div className="relative bg-white rounded-3xl border border-slate-200 border-t-4 border-t-blue-600 p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xl mb-6">
                ✦
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 font-heading block mb-2">
                Our Mission
              </span>
              <h3 className="font-heading font-extrabold text-xl text-slate-900 mb-4">
                Responsive &amp; Client-Focused Delivery
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
                &ldquo;To deliver responsive, transparent and client-focused services that help businesses move forward with confidence.&rdquo;
              </p>
              <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
                Clear commitments, milestone-driven execution, and dedicated accountability.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING PRINCIPLES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Core Methodology
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our Working Principles
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Every engagement at Zuvan Softsol is governed by four non-negotiable standards of practice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                num: "01",
                title: "Understand first",
                desc: "Clarify the business requirement before recommending a solution. We invest the initial hours into deep technical diagnostics and requirement intake to prevent misaligned efforts.",
                accent: "border-l-amber-500 text-amber-600",
              },
              {
                num: "02",
                title: "Communicate clearly",
                desc: "Keep expectations, timelines and next steps transparent. No surprises, no hidden overheads. Transparent status reporting at every milestone.",
                accent: "border-l-blue-600 text-blue-600",
              },
              {
                num: "03",
                title: "Focus on fit",
                desc: "Align talent and services to the role, project or business need. We evaluate candidates and tech architectures for cultural, technical, and operational synergy.",
                accent: "border-l-purple-600 text-purple-600",
              },
              {
                num: "04",
                title: "Build relationships",
                desc: "Aim for professional, long-term collaboration rather than one-time transactions. We measure our success by recurring client partnerships and sustained team performance.",
                accent: "border-l-emerald-600 text-emerald-600",
              },
            ].map((p) => (
              <div
                key={p.num}
                className={`bg-white rounded-2xl border border-slate-200 border-l-4 ${p.accent.split(" ")[0]} p-7 shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`font-heading font-extrabold text-2xl ${p.accent.split(" ")[1]}`}>
                    {p.num}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-slate-900">{p.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING BANNER */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                Ready to explore how Zuvan Softsol can support your team?
              </h3>
              <p className="text-sm text-slate-600">
                Review our 3 core service offerings or schedule an introductory alignment discussion.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-secondary">
                <span>Explore Services</span>
              </Link>
              <Link href="/contact" className="btn-primary">
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

