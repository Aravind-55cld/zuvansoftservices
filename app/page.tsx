import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Users,
  Search,
  Sparkles,
  Zap,
  Globe2,
  MessageSquare,
  Briefcase,
  Target,
  Clock,
  Compass,
  Laptop,
  TrendingUp,
  GraduationCap,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* ============================================================
           HERO SECTION
      ============================================================ */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        {/* Subtle decorative grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Ambient radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[350px] h-[250px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>Technology &bull; Talent &bull; Tomorrow</span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-6">
              Building Stronger Teams.{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent block mt-1">
                Powering Better Businesses.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              Your partner for <strong className="text-white font-semibold">IT consulting</strong>,{" "}
              <strong className="text-white font-semibold">staffing</strong>, and{" "}
              <strong className="text-white font-semibold">recruitment</strong> in India. We help
              organisations address technology needs and connect with talent through practical,
              client-focused services.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-16">
              <Link href="/contact" className="btn-gold py-4 px-7 text-sm font-bold shadow-gold">
                <span>Let&apos;s Build Something Great</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-hero-outline py-4 px-6 text-sm">
                <span>Explore All Services &amp; Capabilities</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats Banner */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-heading">
                  Company Motto
                </span>
                <span className="text-sm sm:text-base font-bold text-white mt-1">
                  Technology. <span className="text-amber-400">Talent.</span> Tomorrow.
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-heading">
                  Pillars of Impact
                </span>
                <span className="text-sm sm:text-base font-bold text-white mt-1">
                  Innovate &bull; Build &bull; <span className="text-amber-400">Grow</span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-heading">
                  National Footprint
                </span>
                <span className="text-sm sm:text-base font-bold text-white mt-1">
                  <span className="text-amber-400">India-Wide</span> Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           CORE CAPABILITIES (3 SERVICES)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
                Core Capabilities
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Complete Technology &amp; Workforce Solutions
              </h2>
              <p className="text-slate-600 mt-3 text-base leading-relaxed">
                From core IT consulting, technical staffing, and recruitment to full-stack web engineering, digital marketing, certifications, and turnkey contract projects.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-700 hover:text-blue-800 transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>View Complete Services Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Pillar 01: IT Consulting */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 font-heading bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                    01 | CONSULTING
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                  IT Consulting
                </h3>
                <p className="text-xs font-bold text-blue-700 mb-3">
                  Technology guidance aligned with business objectives.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We work with clients to understand technology challenges, review possible approaches and plan practical next steps.
                </p>

                <div className="border-t border-slate-100 pt-5 mb-8">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-3 font-heading">
                    Key Focus Areas
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Technology assessment &amp; solution planning</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Digital transformation guidance</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Application &amp; software project support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>Cloud &amp; infrastructure advisory</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/it-consulting" className="btn-secondary w-full justify-center">
                <span>Explore IT Consulting</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 02: Staffing (Featured) */}
            <div className="relative bg-gradient-to-b from-white to-amber-50/40 rounded-3xl border-2 border-amber-400 p-8 shadow-xl shadow-amber-500/10 flex flex-col justify-between group transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                ⭐ Featured Practice
              </div>

              <div>
                <div className="flex items-center justify-between mb-6 mt-2">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 font-heading bg-amber-100 px-3 py-1 rounded-md border border-amber-200">
                    02 | STAFFING
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                  Staffing Solutions
                </h3>
                <p className="text-xs font-bold text-amber-700 mb-3">
                  Workforce support for changing business requirements.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We help organisations explore staffing options based on the skills, experience, duration and availability needed for a role or project.
                </p>

                <div className="border-t border-amber-200/60 pt-5 mb-8">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-3 font-heading">
                    Key Focus Areas
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>IT and technical staffing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Contract &amp; contract-to-hire staffing</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Permanent hiring support</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                      <span>Candidate pipeline &amp; interview coordination</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/staffing" className="btn-gold w-full justify-center">
                <span>Explore Staffing Solutions</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Pillar 03: Recruitment */}
            <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-purple-700 font-heading bg-purple-50 px-3 py-1 rounded-md border border-purple-100">
                    03 | RECRUITMENT
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Search className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-slate-900 mb-2">
                  Direct Recruitment
                </h3>
                <p className="text-xs font-bold text-purple-700 mb-3">
                  Structured support to identify suitable candidates.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  We work with hiring teams to understand job requirements and support candidate sourcing and selection coordination.
                </p>

                <div className="border-t border-slate-100 pt-5 mb-8">
                  <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-3 font-heading">
                    Key Focus Areas
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-700">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>Requirement intake &amp; role clarification</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>Candidate sourcing &amp; initial screening</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>Resume sharing &amp; interview scheduling</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                      <span>Technical &amp; non-technical roles</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link href="/recruitment" className="btn-secondary w-full justify-center">
                <span>Explore Recruitment</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Specialized Practices Row (Web Dev, Digital Marketing, Certifications, Contract Projects) */}
          <div className="mt-12 pt-12 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700 font-heading">
                  Expanded Capabilities
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 mt-1">
                  Specialized Engineering &amp; Growth Solutions
                </h3>
              </div>
              <Link
                href="/services"
                className="text-xs font-bold text-blue-700 hover:text-blue-800 inline-flex items-center gap-1 group"
              >
                <span>View All 7 Services on Directory</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Web Development */}
              <Link
                href="/services#web-development"
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200 hover:border-emerald-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Laptop className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 font-heading">
                    04 | Engineering
                  </span>
                  <h4 className="font-heading font-bold text-base text-slate-900 mt-1 mb-2">
                    Web Development
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom Next.js &amp; React apps, high-throughput cloud APIs, and scalable enterprise web portals.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Explore Web Dev</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Digital Marketing */}
              <Link
                href="/services#digital-marketing"
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-rose-50/50 border border-slate-200 hover:border-rose-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-rose-700 font-heading">
                    05 | Growth
                  </span>
                  <h4 className="font-heading font-bold text-base text-slate-900 mt-1 mb-2">
                    Digital Marketing
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Technical SEO, high-conversion PPC campaigns, B2B lead generation, and quantitative CRO.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-rose-700">
                  <span>Explore Marketing</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Certifications & Training */}
              <Link
                href="/services#certifications"
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-200 hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-700 font-heading">
                    06 | Upskilling
                  </span>
                  <h4 className="font-heading font-bold text-base text-slate-900 mt-1 mb-2">
                    Certifications &amp; Training
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Cloud certification tracks (AWS/Azure), DevOps bootcamps, and corporate batch training.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-700">
                  <span>Explore Certifications</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Contract Projects */}
              <Link
                href="/services#contract-projects"
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-amber-50/50 border border-slate-200 hover:border-amber-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-700 font-heading">
                    07 | Delivery
                  </span>
                  <h4 className="font-heading font-bold text-base text-slate-900 mt-1 mb-2">
                    Contract Projects
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Turnkey milestone delivery, fixed-scope SOW execution, and SLA-backed engineering squads.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-amber-700">
                  <span>Explore Contract Projects</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           WHO WE ARE & VISION / PRINCIPLES
      ============================================================ */}
      <section className="py-20 md:py-28 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left text */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider font-heading">
                Who We Are
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                A practical partner for business &amp; technology needs.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Zuvan Software Services Pvt. Ltd. is positioned to support organisations through IT consulting, staffing and recruitment services. We focus on understanding each client&apos;s requirements, communicating clearly, and working towards solutions that fit their business goals.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our approach is built around responsiveness, requirement clarity, professional coordination and long-term working relationships.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="/about" className="btn-primary">
                  <span>Read Company Profile</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/why-zuvan" className="btn-secondary">
                  <span>Why Work With Zuvan</span>
                </Link>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-6 space-y-4">
              {/* Vision Card */}
              <div className="bg-white rounded-2xl border border-slate-200 border-l-4 border-l-amber-500 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm">
                    ★
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-amber-700 font-heading">
                    Our Vision
                  </span>
                </div>
                <p className="text-slate-900 font-semibold text-base leading-relaxed">
                  &ldquo;To become a trusted partner for organisations seeking technology guidance and talent solutions across India.&rdquo;
                </p>
              </div>

              {/* Mission Card */}
              <div className="bg-white rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                    ✦
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700 font-heading">
                    Our Mission
                  </span>
                </div>
                <p className="text-slate-900 font-semibold text-base leading-relaxed">
                  &ldquo;To deliver responsive, transparent and client-focused services that help businesses move forward with confidence.&rdquo;
                </p>
              </div>

              {/* Working Principles */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block mb-4 font-heading">
                  Our 4 Working Principles
                </span>
                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Understand first</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Communicate clearly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Focus on fit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span>Build relationships</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           HOW WE WORK (5-STEP PROCESS)
      ============================================================ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Our Workflow
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              A Clear Process From Requirement to Next Step
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Our workflow can be adapted to the scope of the engagement and the client&apos;s internal process.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                step: "01",
                name: "DISCOVER",
                desc: "Understand your business, hiring or technology requirement, timelines and success criteria.",
              },
              {
                step: "02",
                name: "ALIGN",
                desc: "Confirm scope, role details, required skills, commercial terms and responsibilities.",
              },
              {
                step: "03",
                name: "SOURCE / PLAN",
                desc: "Develop a candidate sourcing approach or a practical technology support plan.",
              },
              {
                step: "04",
                name: "COORDINATE",
                desc: "Share updates, coordinate discussions and keep relevant stakeholders informed.",
              },
              {
                step: "05",
                name: "REVIEW",
                desc: "Collect feedback, address open questions and agree on the next steps.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-amber-600 font-heading mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/how-we-work" className="btn-secondary">
              <span>Explore Complete Process &amp; Client Expectations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
           WHY CHOOSE ZUVAN
      ============================================================ */}
      <section className="py-20 md:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 font-heading">
              Why Zuvan
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What Makes Us Different
            </h2>
            <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
              Practical, responsive and client-focused — built around what matters to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Client-First Approach",
                desc: "We put your requirements at the centre of every conversation. No templates — real listening and tailored responses.",
                color: "bg-blue-50 text-blue-600",
              },
              {
                icon: Zap,
                title: "Fast Mobilization",
                desc: "Our curated talent pool and streamlined process means we can respond to urgent hiring and consulting needs quickly.",
                color: "bg-amber-50 text-amber-600",
              },
              {
                icon: Globe2,
                title: "Pan-India Reach",
                desc: "Serving high-growth startups and established enterprises across India with a consistent, quality-driven service model.",
                color: "bg-purple-50 text-purple-600",
              },
              {
                icon: MessageSquare,
                title: "Clear Communication",
                desc: "We keep you updated at every stage. No surprises, no guesswork — just transparent, professional coordination.",
                color: "bg-emerald-50 text-emerald-600",
              },
              {
                icon: Briefcase,
                title: "Domain Expertise",
                desc: "Our team brings hands-on experience in IT consulting, talent acquisition and strategic workforce planning across industries.",
                color: "bg-orange-50 text-orange-600",
              },
              {
                icon: Compass,
                title: "Long-Term Focus",
                desc: "We invest in understanding your business so we become a reliable long-term partner, not just a one-off vendor.",
                color: "bg-indigo-50 text-indigo-600",
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
           CLOSING CTA
      ============================================================ */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden text-center">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
            <Sparkles className="w-8 h-8 text-amber-300" />
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-6">
            LET&apos;S BUILD SOMETHING GREAT.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10">
            Share your requirement with{" "}
            <strong className="text-white">Zuvan Software Services Pvt. Ltd.</strong> Whether you
            need technology guidance, support for a hiring requirement or help planning your workforce
            needs, we welcome a conversation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold py-4 px-8 text-sm font-bold shadow-gold">
              <span>Share Your Requirement Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/why-zuvan" className="btn-hero-outline py-4 px-7 text-sm">
              <span>Read Why Clients Choose Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

